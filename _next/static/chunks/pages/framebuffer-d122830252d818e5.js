(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{8588:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/framebuffer",function(){return i(583)}])},583:function(e,t,i){"use strict";i.r(t);var o=i(6427),a=i(5034),n=i(8609),s=i(3808),l=i(6663),h=i(8527),r=i.n(h),c=i(4411),d=i(6048),g=i(396),f=i(2790);let m=new class{setImage(e){this.width=e.width,this.height=e.height,this.imageData=new ImageData(new Uint8ClampedArray(e.data),e.width,e.height)}toggleDemoModeVisible(){this.demoModeVisible=!this.demoModeVisible}constructor(){this.width=0,this.height=0,this.imageData=void 0,this.demoModeVisible=!1,(0,s.ky)(this,{toggleDemoModeVisible:s.aD.bound})}};t.default=(0,l.Pi)(()=>{let e=(0,c.useRef)(null),t=(0,c.useCallback)(async()=>{if(g.GLOBAL_STATE.adb)try{let e=Date.now(),t=await g.GLOBAL_STATE.adb.framebuffer();console.log("Framebuffer speed",((n.AdbFrameBufferV2.size+t.size)/(Date.now()-e)*1e3/1024/1024).toFixed(2),"MB/s"),m.setImage(t)}catch(e){g.GLOBAL_STATE.showErrorDialog(e)}},[]);(0,c.useEffect)(()=>(0,s.EH)(()=>{let t=e.current;if(t&&m.imageData){t.width=m.width,t.height=m.height;let e=t.getContext("2d");e.putImageData(m.imageData,0,0)}}),[]);let i=(0,s.Fl)(()=>[{key:"start",disabled:!g.GLOBAL_STATE.adb,iconProps:{iconName:f.PJ.Camera,style:{height:20,fontSize:20,lineHeight:1.5}},text:"Capture",onClick:t},{key:"Save",disabled:!m.imageData,iconProps:{iconName:f.PJ.Save,style:{height:20,fontSize:20,lineHeight:1.5}},text:"Save",onClick:()=>{let t=e.current;if(!t)return;let i=t.toDataURL(),o=document.createElement("a");o.href=i,o.download="Screenshot of ".concat(g.GLOBAL_STATE.device.name,".png"),o.click()}}]),l=(0,s.Fl)(()=>[{key:"DemoMode",iconProps:{iconName:f.PJ.Wand,style:{height:20,fontSize:20,lineHeight:1.5}},checked:m.demoModeVisible,text:"Demo Mode",onClick:m.toggleDemoModeVisible},{key:"info",iconProps:{iconName:f.PJ.Info,style:{height:20,fontSize:20,lineHeight:1.5}},iconOnly:!0,tooltipHostProps:{content:"Use ADB FrameBuffer command to capture a full-size, high-resolution screenshot.",calloutProps:{calloutMaxWidth:250}}}]);return(0,o.jsxs)(a.K,{...f.LE,children:[(0,o.jsx)(r(),{children:(0,o.jsx)("title",{children:"Screen Capture - Tango"})}),(0,o.jsx)(d.X3,{items:i.get(),farItems:l.get()}),(0,o.jsxs)(a.K,{horizontal:!0,grow:!0,styles:{root:{height:0}},children:[(0,o.jsx)(d.wM,{width:m.width,height:m.height,children:(0,o.jsx)("canvas",{ref:e,style:{display:"block"}})}),(0,o.jsx)(d.bq,{style:{display:m.demoModeVisible?"block":"none"}})]})]})})}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8588)}),_N_E=e.O()}]);
//# sourceMappingURL=framebuffer-d122830252d818e5.js.map