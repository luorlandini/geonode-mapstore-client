(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2829],{99534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(61365),o=r(69334);const l=(0,n.Z)(o.h_)},57037:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(67294),o=r.n(n),l=r(45697),i=r.n(l),a=r(23560),c=r.n(a),s=r(24198),u=r(17621),f=r.n(u),p=r(73935),d=r(63202);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function k(e){var t=e.value,r=e.format,l=e.onChangeColor,i=e.text,a=e.line,u=e.disabled,d=e.pickerProps,g=e.containerNode,y=e.onOpen,h=e.placement,k=10,w={picker:{opacity:0},arrow:{opacity:0},overlay:{}},O=v((0,n.useState)(),2),C=O[0],S=O[1],j=v((0,n.useState)(w),2),E=j[0],P=j[1],x=v((0,n.useState)(),2),N=x[0],A=x[1],Z=f()(t).toString(),R=c()(g)?g():g;(0,n.useEffect)((function(){var e=C&&f()(C).toString();e&&Z&&Z!==e&&S(t)}),[Z]),(0,n.useEffect)((function(){y(N),N||P(w)}),[N]);var T=(0,n.useRef)(),_=(0,n.useRef)();function z(){var e,t,r,n,o,l,i;if("center"===h)return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}};var a=null==T||null===(e=T.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e),c=null==_||null===(r=_.current)||void 0===r||null===(n=r.getBoundingClientRect)||void 0===n?void 0:n.call(r),s=null==_||null===(o=_.current)||void 0===o||null===(l=o.querySelector)||void 0===l?void 0:l.call(o,".ms-sketch-picker"),u=null==s||null===(i=s.getBoundingClientRect)||void 0===i?void 0:i.call(s);if(a&&c&&u){var f,p,d,b,g=u.width,m=u.height,y=c.top,v=c.left,w=c.width,O=c.height,C=a.top,S=a.left,j=a.width,E=a.height,P=[S+j/2,C+E/2],x=P[0]-v>g/2+k&&v+w-P[0]>g/2+k,N=P[1]-y>m/2+k&&y+O-P[1]>m/2+k,A={top:{filter:function(){return x&&C-y>m+k},styles:function(){return{picker:{position:"absolute",top:C-m-k-y,left:S+j/2-g/2-v},overlay:{},arrow:{top:C+2,left:S+j/2,transform:"translate(-50%, -50%) rotateZ(270deg) translateX(50%)"}}}},right:{filter:function(){return N&&v+w-(S+j)>g+k},styles:function(){return{picker:{position:"absolute",top:C-m/2-y,left:S+j+k-v},overlay:{},arrow:{top:C+E/2,left:S+j-2,transform:"translate(-50%, -50%) rotateZ(0deg) translateX(50%)"}}}},bottom:{filter:function(){return x&&y+O-(C+E)>m+k},styles:function(){return{picker:{position:"absolute",top:C+E+k-y,left:S+j/2-g/2-v},overlay:{},arrow:{top:C+E-2,left:S+j/2,transform:"translate(-50%, -50%) rotateZ(90deg) translateX(50%)"}}}},left:{filter:function(){return N&&S-v>g+k},styles:function(){return{picker:{position:"absolute",top:C-m/2-y,left:S-g-k-v},overlay:{},arrow:{top:C+E/2,left:S+2,transform:"translate(-50%, -50%) rotateZ(180deg) translateX(50%)"}}}}};if(null!=A&&null!==(f=A[h])&&void 0!==f&&null!==(p=f.filter)&&void 0!==p&&p.call(f))return null==A||null===(d=A[h])||void 0===d||null===(b=d.styles)||void 0===b?void 0:b.call(d);if("top"!==h&&A.top.filter())return A.top.styles();if("right"!==h&&A.right.filter())return A.right.styles();if("bottom"!==h&&A.bottom.filter())return A.bottom.styles();if("left"!==h&&A.left.filter())return A.left.styles()}return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}}}(0,n.useEffect)((function(){var e=function(){return P(z())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){N&&P(z())}),[N]);var D,I,X=u?" ms-disabled":"",B=o().createElement("div",{ref:_,className:"ms-color-picker-overlay",style:m({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0},null==E?void 0:E.overlay)},o().createElement("div",{className:"ms-color-picker-cover",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0},onClick:function(){A(!1),C&&l(r?f()(C).toString(r):C)}}),o().createElement(s.xS,b({},d,{className:"ms-sketch-picker",styles:{picker:m({width:200,padding:"10px 10px 0",boxSizing:"initial"},null==E?void 0:E.picker)},color:f()(C||t).toRgb(),onChange:function(e){return S(e.rgb)}})),o().createElement("div",{className:"ms-sketch-picker-arrow",style:m({position:"absolute",borderWidth:12},null==E?void 0:E.arrow)})),q=R?(0,p.createPortal)(B,R):B;return o().createElement("div",{className:"ms-color-picker".concat(X)},o().createElement("div",{className:"ms-color-picker-swatch",ref:T,style:(D=C||t||"transparent",I=f()(D).toRgbString(),a?{boxSizing:"border-box",border:"4px solid ".concat(I),backgroundColor:"transparent"}:{color:"transparent"===D?"#000000":f().mostReadable(I,["#000000"],{includeFallbackColors:!0}).toHexString(),backgroundColor:I}),onClick:function(){u||(A(!N),C&&l(r?f()(C).toString(r):C))}},i),N?q:null)}k.propTypes={value:i().oneOfType([i().string,i().shape({r:i().number,g:i().number,b:i().number,a:i().number})]),format:i().string,onChangeColor:i().func,text:i().string,line:i().bool,disabled:i().bool,pickerProps:i().object,containerNode:i().oneOfType([i().node,i().func]),onOpen:i().function,placement:i().string},k.defaultProps={disabled:!1,line:!1,onChangeColor:function(){},pickerProps:{},onOpen:function(){},containerNode:function(){return document.querySelector("."+((0,d.u8)("themePrefix")||"ms2")+" > div")||document.body}};const w=k},12961:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67294),o=r.n(n),l=r(45697),i=r.n(l),a=r(57588),c=r(57037);function s(e){var t=e.color,r=e.format,n=e.line,l=e.onChangeColor,i=e.disableAlpha,s=e.containerNode,u=e.onOpen,f=e.disabled,p=e.presetColors,d=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(c.Z,{text:o().createElement(a.Glyphicon,{glyph:"dropper"}),format:r,line:n,value:t,onChangeColor:l,pickerProps:{disableAlpha:i,presetColors:p},containerNode:s,disabled:f,onOpen:u,placement:d}))}s.propTypes={color:i().oneOfType([i().string,i().shape({r:i().number,g:i().number,b:i().number,a:i().number})]),format:i().string,line:i().bool,onChangeColor:i().func,disableAlpha:i().bool,containerNode:i().node,disabled:i().bool,onOpen:i().func,presetColors:i().array,placement:i().string},s.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const u=s}}]);