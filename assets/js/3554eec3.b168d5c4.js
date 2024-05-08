"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[984],{12942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(74848),s=t(28453);const o={id:"ent",title:"ent",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"ent",description:"Search IPSW filesystem DMG or Folder for MachOs with a given entitlement"},r=void 0,l={id:"cli/ipsw/ent",title:"ent",description:"Search IPSW filesystem DMG or Folder for MachOs with a given entitlement",source:"@site/docs/cli/ipsw/ent.md",sourceDirName:"cli/ipsw",slug:"/cli/ipsw/ent",permalink:"/ipsw/docs/cli/ipsw/ent",draft:!1,unlisted:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/ent.md",tags:[],version:"current",frontMatter:{id:"ent",title:"ent",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"ent",description:"Search IPSW filesystem DMG or Folder for MachOs with a given entitlement"},sidebar:"cli",previous:{title:"xref",permalink:"/ipsw/docs/cli/ipsw/dyld/xref"},next:{title:"extract",permalink:"/ipsw/docs/cli/ipsw/extract"}},a={},c=[{value:"ipsw ent",id:"ipsw-ent",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"ipsw-ent",children:"ipsw ent"}),"\n",(0,i.jsx)(n.p,{children:"Search IPSW filesystem DMG or Folder for MachOs with a given entitlement"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ipsw ent [flags]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"  # Search IPSW for entitlement key\n  \u276f ipsw ent --ipsw <IPSW> --db /tmp --key platform-application\n  # Search local folder for entitlement key\n  \u276f ipsw ent --input /usr/bin --db /tmp --val platform-application\n  # Search IPSW for entitlement value (i.e. one of the <array> strings)\n  \u276f ipsw ent --ipsw <IPSW> --db /tmp --val LockdownMode\n  # Dump entitlements for MachO in IPSW\n  \u276f ipsw ent --ipsw <IPSW> --db /tmp --file WebContent\n  # Diff two IPSWs\n  \u276f ipsw ent --diff --ipsw <PREV_IPSW> --ipsw <NEW_IPSW> --db /tmp\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      --db string           Folder to r/w entitlement databases\n  -d, --diff                Diff entitlements\n  -f, --file string         Dump entitlements for MachO as plist\n  -h, --help                help for ent\n      --input stringArray   Folders of MachOs to analyze\n      --ipsw stringArray    IPSWs to analyze\n  -k, --key string          Entitlement KEY to search for\n  -m, --md                  Markdown style output\n  -v, --val string          Entitlement VALUE to search for (i.e. <array> strings)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n      --no-color        disable colorize output\n  -V, --verbose         verbose output\n"})}),"\n",(0,i.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/cli/ipsw",children:"ipsw"}),"\t - Download and Parse IPSWs (and SO much more)"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);