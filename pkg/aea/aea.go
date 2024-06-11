package aea

import (
	"bytes"
	"crypto/ecdsa"
	"crypto/x509"

	// _ "embed"
	"encoding/base64"
	"encoding/binary"
	"encoding/json"
	"encoding/pem"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"

	"github.com/cloudflare/circl/hpke"
)

// //go:embed data/keys.gz
// var keyData []byte

type Header struct {
	Magic   [4]byte // AEA1
	Version uint32
	Length  uint32
}

type fcsResponse struct {
	EncRequest string `json:"enc-request,omitempty"`
	WrappedKey string `json:"wrapped-key,omitempty"`
}

func aea(in, out, key string) (string, error) {
	if runtime.GOOS == "darwin" {
		cmd := exec.Command("aea", "decrypt", "-i", in, "-o", out, "-key-value", fmt.Sprintf("base64:%s", key))
		cout, err := cmd.CombinedOutput()
		if err != nil {
			return "", fmt.Errorf("%v: %s", err, cout)
		}
		return out, nil
	}
	return "", fmt.Errorf("only supported on macOS")
}

// type Keys map[string][]byte

// func getKeys() (*Keys, error) {
// 	var keys Keys

// 	zr, err := gzip.NewReader(bytes.NewReader(keyData))
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer zr.Close()

// 	if err := json.NewDecoder(zr).Decode(&keys); err != nil {
// 		return nil, fmt.Errorf("failed unmarshaling ipsw_db data: %w", err)
// 	}

// 	return &keys, nil
// }

func Info(in string) (map[string][]byte, error) {
	f, err := os.Open(in)
	if err != nil {
		return nil, err
	}
	defer f.Close()

	var hdr Header
	if err := binary.Read(f, binary.LittleEndian, &hdr); err != nil {
		return nil, err
	}

	if string(hdr.Magic[:]) != "AEA1" {
		return nil, fmt.Errorf("invalid AEA header: found '%s' expected 'AEA1'", string(hdr.Magic[:]))
	}

	metadata := make(map[string][]byte)
	mdr := io.NewSectionReader(f, int64(binary.Size(hdr)), int64(hdr.Length))

	// parse key-value pairs
	for {
		var length uint32
		err := binary.Read(mdr, binary.LittleEndian, &length)
		if err != nil {
			if err == io.EOF {
				break
			}
			return nil, err
		}

		keyval := make([]byte, length-uint32(binary.Size(length)))
		if _, err = mdr.Read(keyval); err != nil {
			if err == io.EOF {
				break
			}
			return nil, err
		}

		k, v, _ := bytes.Cut(keyval, []byte{0x00})
		metadata[string(k)] = v
	}

	return metadata, nil
}

func Decrypt(in, out string, privKey []byte) (string, error) {
	metadata, err := Info(in)
	if err != nil {
		return "", fmt.Errorf("failed to parse AEA: %v", err)
	}

	if privKey == nil {
		privKeyURL, ok := metadata["com.apple.wkms.fcs-key-url"]
		if !ok {
			return "", fmt.Errorf("no private key URL found")
		}
		resp, err := http.Get(string(privKeyURL))
		if err != nil {
			return "", err
		}
		defer resp.Body.Close()

		privKey, err = io.ReadAll(resp.Body)
		if err != nil {
			return "", err
		}
	}

	ddata, ok := metadata["com.apple.wkms.fcs-response"]
	if !ok {
		return "", fmt.Errorf("no fcs response found")
	}
	var fcsResp fcsResponse
	if err := json.Unmarshal(ddata, &fcsResp); err != nil {
		return "", err
	}
	encRequestData, err := base64.StdEncoding.WithPadding(base64.StdPadding).DecodeString(fcsResp.EncRequest)
	if err != nil {
		return "", err
	}
	wrappedKeyData, err := base64.StdEncoding.WithPadding(base64.StdPadding).DecodeString(fcsResp.WrappedKey)
	if err != nil {
		return "", err
	}

	kemID := hpke.KEM_P256_HKDF_SHA256
	kdfID := hpke.KDF_HKDF_SHA256
	aeadID := hpke.AEAD_AES256GCM

	suite := hpke.NewSuite(kemID, kdfID, aeadID)

	block, _ := pem.Decode(privKey)
	parsedKey, err := x509.ParsePKCS8PrivateKey(block.Bytes)
	if err != nil {
		return "", fmt.Errorf("createToken: failed to parse p8 key: %v", err)
	}
	pkey, ok := parsedKey.(*ecdsa.PrivateKey)
	if !ok {
		return "", fmt.Errorf("createToken: AuthKey must be of type ecdsa.PrivateKey")
	}
	privateKey, err := kemID.Scheme().UnmarshalBinaryPrivateKey(pkey.D.Bytes())
	if err != nil {
		return "", err
	}
	recv, err := suite.NewReceiver(privateKey, nil)
	if err != nil {
		return "", err
	}
	opener, err := recv.Setup(encRequestData)
	if err != nil {
		return "", err
	}
	wkey, err := opener.Open(wrappedKeyData, nil)
	if err != nil {
		return "", err
	}

	return aea(in, filepath.Join(out, filepath.Base(strings.TrimSuffix(in, filepath.Ext(in)))), base64.StdEncoding.EncodeToString(wkey))
}
