(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{3483:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/packet-log",function(){return n(2602)}])},2602:function(e,t,n){"use strict";n.r(t);var o=n(6427),l=n(5034),r=n(6195),a=n(6234),i=n(2375),c=n(8909),s=n(8609),d=n(3808),g=n(6663),m=n(8527),h=n.n(m),p=n(6048),A=n(396),S=n(2790);let C={[s.AdbCommand.Auth]:"AUTH",[s.AdbCommand.Close]:"CLSE",[s.AdbCommand.Connect]:"CNXN",[s.AdbCommand.OK]:"OKAY",[s.AdbCommand.Open]:"OPEN",[s.AdbCommand.Write]:"WRTE"},u=new class{get empty(){return!A.GLOBAL_STATE.logs.length}get commandBarItems(){return[{key:"clear",disabled:this.empty,iconProps:{iconName:S.PJ.Delete},text:"Clear",onClick:(0,d.aD)(()=>A.GLOBAL_STATE.clearLog())},{key:"select-all",disabled:this.empty,iconProps:{iconName:S.PJ.Wand},text:"Select All",onClick:(0,d.aD)(()=>{this.selection.clear(),this.selection.select(A.GLOBAL_STATE.logs.length-1,!1,!0)})},{key:"copy",disabled:0===this.selection.size,iconProps:{iconName:S.PJ.Copy},text:"Copy",onClick:()=>{let e="";for(let t of this.selection){let n=A.GLOBAL_STATE.logs[t];e+="".concat(n.timestamp.toISOString(),"	").concat("in"===n.direction?"IN":"OUT","	").concat(C[n.command],"	").concat(n.arg0.toString(16).padStart(8,"0"),"	").concat(n.arg1.toString(16).padStart(8,"0"),"	").concat(Array.from(n.payload).map(e=>e.toString(16).padStart(2,"0")).join(" "),"\n")}navigator.clipboard.writeText(e)}}]}constructor(){this.selection=new p.x$,(0,d.ky)(this,{}),(0,d.EH)(()=>{0===A.GLOBAL_STATE.logs.length&&(0,d.z)(()=>this.selection.clear())})}},T=(0,a.Z)({grow:{height:0},grid:{height:"100%"},header:{textAlign:"center",lineHeight:"".concat(32,"px")},row:{"&:hover":{backgroundColor:"#f3f2f1"}},selected:{backgroundColor:"#edebe9"},code:{fontFamily:"monospace",textOverflow:"ellipsis",whiteSpace:"nowrap",lineHeight:"32px",cursor:"default",...i.q5.overflow("hidden")},hexViewer:{...i.q5.padding("12px"),...i.q5.borderTop("1px","solid","rgb(243, 242, 241)")}}),w=[{title:"Direction",width:100,CellComponent:(0,S.$g)("Direction")(e=>{let{className:t,rowIndex:n,...l}=e,r=A.GLOBAL_STATE.logs[n],a=T();return(0,o.jsx)("div",{className:(0,c.z)(t,a.code),...l,children:r.direction})})},{title:"Command",width:100,CellComponent:(0,S.$g)("Command")(e=>{let{className:t,rowIndex:n,...l}=e,r=A.GLOBAL_STATE.logs[n];if(!r.commandString){var a;r.commandString=null!==(a=C[r.command])&&void 0!==a?a:(0,s.decodeUtf8)(new Uint32Array([r.command]))}let i=T();return(0,o.jsx)("div",{className:(0,c.z)(t,i.code),...l,children:r.commandString})})},{title:"Arg0",width:100,CellComponent:(0,S.$g)("Command")(e=>{let{className:t,rowIndex:n,...l}=e,r=A.GLOBAL_STATE.logs[n];r.arg0String||(r.arg0String=r.arg0.toString(16).padStart(8,"0"));let a=T();return(0,o.jsx)("div",{className:(0,c.z)(t,a.code),...l,children:r.arg0String})})},{title:"Arg1",width:100,CellComponent:(0,S.$g)("Command")(e=>{let{className:t,rowIndex:n,...l}=e,r=A.GLOBAL_STATE.logs[n];r.arg1String||(r.arg1String=r.arg1.toString(16).padStart(8,"0"));let a=T();return(0,o.jsx)("div",{className:(0,c.z)(t,a.code),...l,children:r.arg1String})})},{title:"Payload",width:200,flexGrow:1,CellComponent:(0,S.$g)("Command")(e=>{let{className:t,rowIndex:n,...l}=e,r=A.GLOBAL_STATE.logs[n];r.payloadString||(r.payloadString=(0,p.lr)(r.payload.subarray(0,100)));let a=T();return(0,o.jsx)("div",{className:(0,c.z)(t,a.code),...l,children:r.payloadString})})}],x=(0,S.$g)("Header")(e=>{let{className:t,columnIndex:n,...l}=e,r=T();return(0,o.jsx)("div",{className:(0,c.z)(t,r.header),...l,children:w[n].title})}),L=(0,g.Pi)(function(e){let{className:t,rowIndex:n,...l}=e,r=T(),a=(0,S.R9)(e=>{(0,d.z)(()=>{e.shiftKey&&e.preventDefault(),u.selection.select(n,(0,p.O4)(e),e.shiftKey)})});return(0,o.jsx)("div",{className:(0,c.z)(t,r.row,u.selection.has(n)&&r.selected),onPointerDown:a,...l})});t.default=(0,g.Pi)(()=>{let e=T();return(0,o.jsxs)(l.K,{...S.LE,tokens:{},children:[(0,o.jsx)(h(),{children:(0,o.jsx)("title",{children:"Packet Log - Tango"})}),(0,o.jsx)(p.X3,{items:u.commandBarItems}),(0,o.jsx)(r.v,{className:e.grow,grow:!0,children:(0,o.jsx)(p.rj,{className:e.grid,rowCount:A.GLOBAL_STATE.logs.length,rowHeight:32,columns:w,HeaderComponent:x,RowComponent:L})}),null!==u.selection.selectedIndex&&A.GLOBAL_STATE.logs[u.selection.selectedIndex].payload.length>0&&(0,o.jsx)(r.v,{className:e.grow,grow:!0,children:(0,o.jsx)(p.Kb,{className:e.hexViewer,data:A.GLOBAL_STATE.logs[u.selection.selectedIndex].payload})})]})})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3483)}),_N_E=e.O()}]);
//# sourceMappingURL=packet-log-d191847c100969fb.js.map