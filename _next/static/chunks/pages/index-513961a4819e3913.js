(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2674:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9985)}])},9985:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return u}});var i=s(6427),t=s(4411);let o=t.createContext({});function r(e){let n=t.useContext(o);return t.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}var c=s(8527),d=s.n(c),a=s(6048);s(2790);let l=e=>{let{children:n}=e,s=Object.assign({div:"div",title:"title"},r());return(0,i.jsxs)(s.div,{style:{height:"100%",padding:"0 16px",overflow:"auto"},children:[(0,i.jsx)(d(),{children:(0,i.jsx)(s.title,{children:"Tango"})}),n]})};function h(e){let n=Object.assign({p:"p",ul:"ul",li:"li",h2:"h2",strong:"strong",ol:"ol",h3:"h3",code:"code"},r(),e.components);return(0,i.jsxs)(i.Fragment,{children:["\n",(0,i.jsxs)(n.p,{children:["This is a demo for my ",(0,i.jsx)(a.dL,{href:"https://github.com/yume-chan/ya-webadb/",children:"ya-webadb"})," project, which can use ADB protocol to control Android phones, directly from Web browsers (or Node.js)."]}),"\n",(0,i.jsxs)(n.p,{children:["It started because I want to try the ",(0,i.jsx)(a.dL,{href:"https://developer.mozilla.org/en-US/docs/Web/API/USB",children:"WebUSB"})," API, and because I have an Android phone. It's not production-ready, and I don't recommend normal users to try it. If you have any questions or suggestions, please file an issue at ",(0,i.jsx)(a.dL,{href:"https://github.com/yume-chan/ya-webadb/issues",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:'It was called "ya-webadb" (Yet Another WebADB), because there have already been several similar projects, for example:'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(a.dL,{href:"https://github.com/webadb/webadb.js",children:(0,i.jsx)(n.p,{children:"webadb/webadb.js"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(a.dL,{href:"https://github.com/cybojenix/WebADB",children:(0,i.jsx)(n.p,{children:"cybojenix/WebADB"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"However, they are all pretty simple and not maintained, so I decided to make my own."}),"\n",(0,i.jsx)(n.h2,{children:"Security concerns"}),"\n",(0,i.jsxs)(n.p,{children:["Accessing USB devices (especially your phone) directly from a web page can be ",(0,i.jsx)(n.strong,{children:"very dangerous"}),". Firefox developers even refused to implement the WebUSB standard because they ",(0,i.jsxs)(a.dL,{href:"https://mozilla.github.io/standards-positions/#webusb",children:["considered it to be ",(0,i.jsx)(n.strong,{children:"harmful"})]}),"."]}),"\n",(0,i.jsx)(n.p,{children:"However, I'm pretty confident about this demo, and here is a few reasons:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Unlike native apps, web apps can't access your devices silently. In addition to the connection verification popup that comes with ADB, browsers ask users for permission and web apps can only access the device you choose."}),"\n",(0,i.jsxs)(n.li,{children:["All source code of this project is open sourced on ",(0,i.jsx)(a.dL,{href:"https://github.com/yume-chan/ya-webadb/",children:"GitHub"}),". You can review it yourself (or find someone you trust and knows coding to review it)."]}),"\n",(0,i.jsxs)(n.li,{children:["This site is built and deployed by ",(0,i.jsx)(a.dL,{href:"https://github.com/yume-chan/ya-webadb/blob/main/.github/workflows/deploy.yml",spaceAfter:!0,children:"GitHub Actions"})," to ensure that what you see is exactly the same as the source code."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Compatibility"}),"\n",(0,i.jsx)(n.p,{children:"Currently, only Chromium-based browsers (Chrome, Microsoft Edge, Opera) support the WebUSB API. As mentioned before, it's unlikely for Firefox to implement it."}),"\n",(0,i.jsx)(n.h2,{children:"FAQ"}),"\n",(0,i.jsx)(n.h3,{children:'Got "Unable to claim interface" error'}),"\n",(0,i.jsx)(n.p,{children:"One USB device can only be accessed by one application at a time. Please make sure:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Official ADB server is not running (stop it by ",(0,i.jsx)(n.code,{children:"adb kill-server"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"No other Android management tools are running."}),"\n",(0,i.jsx)(n.li,{children:"No other WebADB tabs have already connected to your device."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{children:"Can I connect my device wirelessly (ADB over WiFi)?"}),"\n",(0,i.jsxs)(n.p,{children:["Extra software is required to bridge the connection. See ",(0,i.jsx)(a.dL,{href:"https://github.com/yume-chan/ya-webadb/discussions/245#discussioncomment-384030",children:"this discussion"}),"."]})]})}var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(l,{...e,children:(0,i.jsx)(h,{...e})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2674)}),_N_E=e.O()}]);
//# sourceMappingURL=index-513961a4819e3913.js.map