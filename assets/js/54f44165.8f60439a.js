"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[152],{86549:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>T,contentTitle:()=>I,default:()=>z,frontMatter:()=>N,metadata:()=>S,toc:()=>E});var t=s(85893),r=s(11151),n=s(67294),i=s(36905),l=s(12466),o=s(16550),c=s(20469),d=s(91980),h=s(67392),u=s(50012);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:s}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return p(e).map((e=>{let{props:{value:a,label:s,attributes:t,default:r}}=e;return{value:a,label:s,attributes:t,default:r}}))}(s);return function(e){const a=(0,h.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,s])}function g(e){let{value:a,tabValues:s}=e;return s.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:s}=e;const t=(0,o.k6)(),r=function(e){let{queryString:a=!1,groupId:s}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:a,groupId:s});return[(0,d._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function x(e){const{defaultValue:a,queryString:s=!1,groupId:t}=e,r=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[o,d]=b({queryString:s,groupId:t}),[h,p]=function(e){let{groupId:a}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,u.Nk)(s);return[t,(0,n.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),x=(()=>{const e=o??h;return g({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var f=s(72389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:a,block:s,selectedValue:r,selectValue:n,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),h=e=>{const a=e.currentTarget,s=c.indexOf(a),t=o[s].value;t!==r&&(d(a),n(t))},u=e=>{let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;a=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;a=c[s]??c[c.length-1];break}}a?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},a),children:o.map((e=>{let{value:a,label:s,attributes:n}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>c.push(e),onKeyDown:u,onClick:h,...n,className:(0,i.Z)("tabs__item",w.tabItem,n?.className,{"tabs__item--active":r===a}),children:s??a},a)}))})}function v(e){let{lazy:a,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function k(e){const a=x(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",w.tabList),children:[(0,t.jsx)(j,{...e,...a}),(0,t.jsx)(v,{...e,...a})]})}function _(e){const a=(0,f.Z)();return(0,t.jsx)(k,{...e,children:p(e.children)},String(a))}const y={tabItem:"tabItem_Ymn6"};function V(e){let{children:a,hidden:s,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)(y.tabItem,r),hidden:s,children:a})}const N={description:"How to install ipsw locally.",hide_table_of_contents:!0},I="Installation",S={id:"getting-started/installation",title:"Installation",description:"How to install ipsw locally.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/ipsw/docs/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{description:"How to install ipsw locally.",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Getting Started",permalink:"/ipsw/docs/category/getting-started"},next:{title:"Building",permalink:"/ipsw/docs/getting-started/building"}},T={},E=[{value:"Via homebrew",id:"via-homebrew",level:2},{value:"Via MacPorts",id:"via-macports",level:2},{value:"Via binary from the releases page",id:"via-binary-from-the-releases-page",level:2},{value:"Extras Version",id:"extras-version",level:3},{value:"Frida Version",id:"frida-version",level:3},{value:"Via snapcraft",id:"via-snapcraft",level:2},{value:"Via <code>deb</code>/<code>rpm</code>/<code>apk</code> debian packages in the releases page",id:"via-debrpmapk-debian-packages-in-the-releases-page",level:2},{value:"Install archlinux package from AUR",id:"install-archlinux-package-from-aur",level:2},{value:"Via binary from the releases page",id:"via-binary-from-the-releases-page-1",level:2},{value:"Download docker image",id:"download-docker-image",level:2},{value:"Via scoop",id:"via-scoop",level:2},{value:"Via binary from the releases page",id:"via-binary-from-the-releases-page-2",level:2}];function q(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"How to install ipsw locally, and start a parsing IPSWs in no time."}),"\n"]}),"\n","\n","\n",(0,t.jsxs)(_,{children:[(0,t.jsxs)(V,{value:"macOS",children:[(0,t.jsxs)(a.h2,{id:"via-homebrew",children:["Via ",(0,t.jsx)(a.a,{href:"https://brew.sh",children:"homebrew"})]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"brew install blacktop/tap/ipsw --with-git-delta\n"})}),(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"--with-git-delta"})," is optional and will install ",(0,t.jsx)(a.a,{href:"https://github.com/dandavison/delta",children:"git-delta"})," for better looking diffs."]})]}),(0,t.jsxs)(a.p,{children:["Install ",(0,t.jsx)(a.code,{children:"frida"})," version"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"brew install blacktop/tap/ipsw-frida\n"})}),(0,t.jsxs)(a.h2,{id:"via-macports",children:["Via ",(0,t.jsx)(a.a,{href:"https://www.macports.org",children:"MacPorts"})]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"git clone https://github.com/blacktop/ports ~/.config/macports/blacktop\n"})}),(0,t.jsxs)(a.p,{children:["Add the following to the ",(0,t.jsx)(a.code,{children:"sources.conf"})," file:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'sudo echo "file://$HOME/.config/macports/blacktop [default]" >> /opt/local/etc/macports/sources.conf\nsudo port selfupdate\n'})}),(0,t.jsxs)(a.p,{children:["Then install ",(0,t.jsx)(a.code,{children:"ipsw"}),":"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo port install ipsw\n"})}),(0,t.jsxs)(a.h2,{id:"via-binary-from-the-releases-page",children:["Via binary from the ",(0,t.jsx)(a.a,{href:"https://github.com/blacktop/ipsw/releases",children:"releases"})," page"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"wget https://github.com/blacktop/ipsw/releases/download/v3.1.199/ipsw_3.1.199_macOS_universal.tar.gz\ntar xzf ipsw_3.1.199_macOS_universal.tar.gz\n"})}),(0,t.jsx)(a.h3,{id:"extras-version",children:"Extras Version"}),(0,t.jsxs)(a.p,{children:["Want to use the ",(0,t.jsx)(a.code,{children:"ipsw dyld emu"})," ",(0,t.jsxs)(a.em,{children:["(w/ ",(0,t.jsx)(a.a,{href:"https://www.unicorn-engine.org",children:"unicorn"})," emulator)"]})," or the ",(0,t.jsx)(a.code,{children:"ipsw idev"})," cmds that require ",(0,t.jsx)(a.code,{children:"libusb"})," ? ",(0,t.jsxs)(a.em,{children:["(grab the ",(0,t.jsx)(a.strong,{children:"extras"})," version from the ",(0,t.jsx)(a.a,{href:"https://github.com/blacktop/ipsw/releases",children:"releases"})," page)"]})]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"wget https://github.com/blacktop/ipsw/releases/download/v3.1.220/ipsw_3.1.221_macOS_arm64_extras.tar.gz\ntar xzf ipsw_3.1.221_macOS_arm64_extras.tar.gz\n"})}),(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"extras"})," version is what is installed via homebrew by default."]})]}),(0,t.jsx)(a.h3,{id:"frida-version",children:"Frida Version"}),(0,t.jsxs)(a.p,{children:["Want to use the ",(0,t.jsx)(a.code,{children:"ipsw frida"})," cmd to trace ObjC methods ? ",(0,t.jsxs)(a.em,{children:["(grab the ",(0,t.jsx)(a.strong,{children:"frida"})," version from the ",(0,t.jsx)(a.a,{href:"https://github.com/blacktop/ipsw/releases",children:"releases"})," page)"]})]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"wget https://github.com/blacktop/ipsw/releases/download/v3.1.221/ipsw_3.1.221_macOS_arm64_frida.tar.gz\ntar xzf ipsw_3.1.221_macOS_arm64_frida.tar.gz\n"})}),(0,t.jsxs)(a.admonition,{type:"caution",children:[(0,t.jsx)(a.mdxAdmonitionTitle,{}),(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.strong,{children:"extras"})," and ",(0,t.jsx)(a.strong,{children:"frida"})," versions of ",(0,t.jsx)(a.code,{children:"ipsw"})," only support macOS for now. ",(0,t.jsx)(a.em,{children:"(Please let the author know if you want them supported on your platform)"})]})]})]}),(0,t.jsxs)(V,{value:"Linux",children:[(0,t.jsxs)(a.h2,{id:"via-snapcraft",children:["Via ",(0,t.jsx)(a.a,{href:"https://snapcraft.io/ipsw",children:"snapcraft"})]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"sudo snap install ipsw\n"})}),(0,t.jsxs)(a.h2,{id:"via-debrpmapk-debian-packages-in-the-releases-page",children:["Via ",(0,t.jsx)(a.code,{children:"deb"}),"/",(0,t.jsx)(a.code,{children:"rpm"}),"/",(0,t.jsx)(a.code,{children:"apk"})," debian packages in the ",(0,t.jsx)(a.a,{href:"https://github.com/blacktop/ipsw/releases",children:"releases"})," page"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"wget https://github.com/blacktop/ipsw/releases/download/v3.1.199/ipsw_3.1.199_linux_x86_64.deb\nsudo dpkg -i ipsw_3.1.199_linux_x86_64.deb\n"})}),(0,t.jsxs)(a.h2,{id:"install-archlinux-package-from-aur",children:["Install ",(0,t.jsx)(a.a,{href:"https://aur.archlinux.org/packages/ipsw-bin/",children:"archlinux"})," package from AUR"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"pacman -U ipsw-bin\n"})}),(0,t.jsxs)(a.h2,{id:"via-binary-from-the-releases-page-1",children:["Via binary from the ",(0,t.jsx)(a.a,{href:"https://github.com/blacktop/ipsw/releases",children:"releases"})," page"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"wget https://github.com/blacktop/ipsw/releases/download/v3.1.199/ipsw_3.1.199_linux_x86_64.tar.gz\ntar xzf ipsw_3.1.199_linux_x86_64.tar.gz\n"})})]}),(0,t.jsxs)(V,{value:"Docker",children:[(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://hub.docker.com/r/blacktop/ipsw/",children:(0,t.jsx)(a.img,{src:"https://img.shields.io/docker/stars/blacktop/ipsw.svg",alt:"Docker Stars"})})," ",(0,t.jsx)(a.a,{href:"https://hub.docker.com/r/blacktop/ipsw/",children:(0,t.jsx)(a.img,{src:"https://img.shields.io/docker/pulls/blacktop/ipsw.svg",alt:"Docker Pulls"})})," ",(0,t.jsx)(a.a,{href:"https://hub.docker.com/r/blacktop/ipsw/",children:(0,t.jsx)(a.img,{src:"https://img.shields.io/badge/docker%20image-114MB-blue.svg",alt:"Docker Image"})})]}),(0,t.jsx)(a.h2,{id:"download-docker-image",children:"Download docker image"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"$ docker pull blacktop/ipsw\n"})}),(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"NOTE:"})," the docker image also includes ",(0,t.jsx)(a.a,{href:"https://github.com/sgan81/apfs-fuse",children:"apfs-fuse"})," which allows you to extract ",(0,t.jsx)(a.code,{children:"dyld_shared_caches"})," from the APFS dmgs in the ipsw(s) pre ",(0,t.jsx)(a.strong,{children:"iOS16.x"})]}),"\n"]}),(0,t.jsxs)(a.p,{children:["Create ",(0,t.jsx)(a.code,{children:"alias"})," to use like a binary"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"$ alias ipsw='docker run -it --rm -v $(pwd):/data blacktop/ipsw'\n"})})]}),(0,t.jsxs)(V,{value:"Windows",children:[(0,t.jsxs)(a.h2,{id:"via-scoop",children:["Via ",(0,t.jsx)(a.a,{href:"https://scoop.sh",children:"scoop"})]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"scoop bucket add blacktop https://github.com/blacktop/scoop-bucket.git \nscoop install blacktop/ipsw\n"})}),(0,t.jsxs)(a.h2,{id:"via-binary-from-the-releases-page-2",children:["Via binary from the ",(0,t.jsx)(a.a,{href:"https://github.com/blacktop/ipsw/releases",children:"releases"})," page"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"wget https://github.com/blacktop/ipsw/releases/download/v3.1.199/ipsw_3.1.199_windows_x86_64.tar.gz\ntar xzf ipsw_3.1.199_windows_x86_64.tar.gz\n"})})]})]})]})}function z(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(q,{...e})}):q(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>l,a:()=>i});var t=s(67294);const r={},n=t.createContext(r);function i(e){const a=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);