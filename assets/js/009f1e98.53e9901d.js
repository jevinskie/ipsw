"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3436],{94069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(85893),i=t(11151);const s={description:"How to configure ipsw with ~/.config/ipsw/config.yml"},c="Configuration",r={id:"getting-started/configuration",title:"Configuration",description:"How to configure ipsw with ~/.config/ipsw/config.yml",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/ipsw/docs/getting-started/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/getting-started/configuration.md",tags:[],version:"current",frontMatter:{description:"How to configure ipsw with ~/.config/ipsw/config.yml"},sidebar:"docs",previous:{title:"Building",permalink:"/ipsw/docs/getting-started/building"},next:{title:"Guides",permalink:"/ipsw/docs/category/guides"}},d={},l=[{value:"<code>ipsw</code> config",id:"ipsw-config",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"How to configure ipsw with ~/.config/ipsw/config.yml"}),"\n"]}),"\n",(0,o.jsxs)(n.h2,{id:"ipsw-config",children:[(0,o.jsx)(n.code,{children:"ipsw"})," config"]}),"\n",(0,o.jsxs)(n.p,{children:["You can also use a config file with ",(0,o.jsx)(n.code,{children:"ipsw"})," so you don't have to use the flags"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\u276f cat ~/.config/ipsw/config.yml\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"download:\n  latest: true\n  confirm: true\n  white-list:\n    - iPod9,1\n    - iPhone14,2\n  resume-all: true\n  ipsw:\n    output: /SHARE/IPSWs # this is the --output for the `ipsw download ipsw` command\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["This will download the ",(0,o.jsx)(n.code,{children:"latest"})," IPSWs for ",(0,o.jsx)(n.em,{children:"only"})," the ",(0,o.jsx)(n.code,{children:"iPod9,1"})," and the ",(0,o.jsx)(n.code,{children:"iPhone14,2"})," without requesting user confirmation to download. It will also always try to ",(0,o.jsx)(n.code,{children:"resume"})," previously interrupted downloads and will download everything to the ",(0,o.jsx)(n.code,{children:"/SHARE/IPSWs"})," folder"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can also use environment variables to set ",(0,o.jsx)(n.code,{children:"ipsw"})," config"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\u276f IPSW_DOWNLOAD_DEVICE=iPhone14,2 ipsw download ipsw --latest\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var o=t(67294);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);