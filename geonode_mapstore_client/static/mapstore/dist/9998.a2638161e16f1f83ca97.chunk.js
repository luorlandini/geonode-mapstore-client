(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9998],{11766:(e,t,r)=>{"use strict";r.d(t,{H:()=>C,Z:()=>k});var n=r(24852),o=r.n(n),c=r(12961),a=r(13218),i=r.n(a),l=r(17621),u=r.n(l),s=r(30294),f=r(38560),p=r(25288),d=r(45869),m=r(5346),y=r(15402),b=r(15135),g=["boxShadow","MozBoxShadow","WebkitBoxShadow"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=(0,b.Z)(f.Z);function w(e){var t=e.themeStyle,r=e.disableBackgroundPicker,a=void 0!==r&&r,i=e.disableBackgroundAlpha,l=e.disableTextColor,f=e.disableShadow,b=e.onChange,v=void 0===b?function(){}:b,O=e.onOpen,w=void 0===O?function(){}:O,C=e.placement,k=(0,n.useRef)(),E=null==t?void 0:t.backgroundColor,P=null==t?void 0:t.color,j=!l&&E&&P&&!u().isReadable(P,E)?u().mostReadable(E,[P,"#000000","#ffffff"],{includeFallbackColors:!0}).toHexString():null;return o().createElement(o().Fragment,null,!a&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.backgroundColorLabel"})),o().createElement("div",null,o().createElement(c.Z,{placement:C,key:E,onOpen:w,color:E,format:i?"hex":"rgb",disableAlpha:i,presetColors:[],onChangeColor:function(e){var r=u()(e).isLight()?u()(e).darken(10).toHexString():u()(e).lighten(15).toHexString(),n=!l&&!(null!=t&&t.color)&&{color:u().mostReadable(e,["#000000","#ffffff"],{includeFallbackColors:!0}).toHexString()};v(h(h({},t),{},{backgroundColor:e,borderColor:r},!l&&n))}}))),!l&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.textColorLabel"})),o().createElement(p.Z,{className:"ms-custom-theme-picker-popover",ref:function(e){e&&(k.current=e.trigger)},placement:"top",content:o().createElement(o().Fragment,null,o().createElement(y.Z,{msgId:"geostory.customizeTheme.alternativeTextColorPopover",msgParams:{color:j}}),o().createElement(S,{bsSize:"xs",bsStyle:"primary",style:{margin:"auto",display:"block"},onClick:function(){var e,r;v(h(h({},t),{},{color:j})),null===(e=k.current)||void 0===e||null===(r=e.hide)||void 0===r||r.call(e)}},o().createElement(m.Z,{msgId:"geostory.customizeTheme.useAlternativeTextColor"})))},j&&o().createElement(S,{className:"square-button-md no-border",style:{display:j?"block":"none"}},o().createElement(s.Glyphicon,{glyph:"exclamation-mark"}))||o().createElement("div",null))),o().createElement("div",null,o().createElement(c.Z,{placement:C,key:P,color:P,onOpen:w,format:"hex",disableAlpha:!0,presetColors:[],onChangeColor:function(e){v(h(h({},t),{},{color:e}))}}))),!f&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.shadowLabel"})),o().createElement("div",null,o().createElement(d.Z,{checked:null==t?void 0:t.boxShadow,onChange:function(){var e=t||{},r=e.boxShadow,n=(e.MozBoxShadow,e.WebkitBoxShadow,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,g));v(r?h({},n):h(h({},n),{},{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}))}}))))}function C(e){var t=e.selected,r=e.value,n=e.storyTheme,c=e.onUpdate,a=e.onActive,l=e.disableBackgroundAlpha,u=e.disableTextColor,f=e.disableShadow,p=function(e,n){var o=i()(t)&&t;return c("theme",h(h({},o),{},n?O({value:e},r,h({},n)):{value:e}))},d=n||{},y=d.color,b=d.backgroundColor,g=b&&{backgroundColor:b},v=h(h({},!u&&y&&{color:y}),g),C=(null==t?void 0:t.value)===r,k=(null==t?void 0:t[r])||v;return o().createElement(o().Fragment,null,C?o().createElement("div",{className:"ms-custom-theme-picker-menuitem-header"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"})),o().createElement(S,{tooltipId:"geostory.contentToolbar.customizeThemeRemoveLabel",className:"square-button-md no-border",onClick:function(e){e.stopPropagation(),p("")}},o().createElement(s.Glyphicon,{glyph:"trash"}))):o().createElement(o().Fragment,null,o().createElement(s.MenuItem,{active:C,onClick:function(){return p(r,k)}},o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"}))),C&&o().createElement("div",{className:"ms-custom-theme-picker-menuitem"},o().createElement(w,{disableBackgroundAlpha:l,disableTextColor:u,disableShadow:f,themeStyle:k,onChange:function(e){return p(r,e)},onOpen:a})))}const k=w},25288:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(24852),o=r.n(n),c=r(45697),a=r.n(c),i=r(30294),l=r(63202);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,r,n,c,a=(n=u,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(c){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function u(){var e;s(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(m(e=a.call.apply(a,[this].concat(r))),"getContainerNode",(function(){return e.parentNode||document.querySelector("."+(l.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body})),e}return t=u,(r=[{key:"render",value:function(){var e=this;return o().createElement("div",{ref:function(t){e.parentNode=t&&t.parentNode},className:this.props.className,style:this.props.style},o().createElement(i.OverlayTrigger,{ref:function(t){e.trigger=t},trigger:["click"],container:this.getContainerNode(),placement:this.props.placement,rootClose:!0,overlay:o().createElement(i.Popover,{id:this.props.id,title:this.props.title,className:this.props.popoverClassName},this.props.content)},this.props.children))}}])&&f(t.prototype,r),u}(o().Component);b(g,"propTypes",{id:a().string,style:a().object,className:a().string,popoverClassName:a().string,placement:a().string,title:a().node,content:a().node}),b(g,"defaultProps",{id:""});const v=g},45869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(24852),o=r.n(n),c=r(45697),a=r.n(c);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,r,n,c,a=(n=i,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(c){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function i(){return l(this,i),a.apply(this,arguments)}return t=i,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&u(t.prototype,r),i}(o().Component);d(m,"propTypes",{disabled:a().bool,className:a().string,checked:a().bool,onChange:a().func,onClick:a().func}),d(m,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const y=m},57037:(e,t,r)=>{"use strict";r.d(t,{Z:()=>S});var n=r(24852),o=r.n(n),c=r(45697),a=r.n(c),i=r(23560),l=r.n(i),u=r(24198),s=r(17621),f=r.n(s),p=r(80307),d=r(63202);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e){var t=e.value,r=e.format,c=e.onChangeColor,a=e.text,i=e.line,s=e.disabled,d=e.pickerProps,y=e.containerNode,g=e.onOpen,h=e.placement,O=10,S={picker:{opacity:0},arrow:{opacity:0},overlay:{}},w=v((0,n.useState)(),2),C=w[0],k=w[1],E=v((0,n.useState)(S),2),P=E[0],j=E[1],x=v((0,n.useState)(),2),N=x[0],T=x[1],I=f()(t).toString(),Z=l()(y)?y():y;(0,n.useEffect)((function(){var e=C&&f()(C).toString();e&&I&&I!==e&&k(t)}),[I]),(0,n.useEffect)((function(){g(N),N||j(S)}),[N]);var A=(0,n.useRef)(),R=(0,n.useRef)();function z(){var e,t,r,n,o,c,a;if("center"===h)return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}};var i=null==A||null===(e=A.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e),l=null==R||null===(r=R.current)||void 0===r||null===(n=r.getBoundingClientRect)||void 0===n?void 0:n.call(r),u=null==R||null===(o=R.current)||void 0===o||null===(c=o.querySelector)||void 0===c?void 0:c.call(o,".ms-sketch-picker"),s=null==u||null===(a=u.getBoundingClientRect)||void 0===a?void 0:a.call(u);if(i&&l&&s){var f,p,d,m,y=s.width,b=s.height,g=l.top,v=l.left,S=l.width,w=l.height,C=i.top,k=i.left,E=i.width,P=i.height,j=[k+E/2,C+P/2],x=j[0]-v>y/2+O&&v+S-j[0]>y/2+O,N=j[1]-g>b/2+O&&g+w-j[1]>b/2+O,T={top:{filter:function(){return x&&C-g>b+O},styles:function(){return{picker:{position:"absolute",top:C-b-O-g,left:k+E/2-y/2-v},overlay:{},arrow:{top:C+2,left:k+E/2,transform:"translate(-50%, -50%) rotateZ(270deg) translateX(50%)"}}}},right:{filter:function(){return N&&v+S-(k+E)>y+O},styles:function(){return{picker:{position:"absolute",top:C-b/2-g,left:k+E+O-v},overlay:{},arrow:{top:C+P/2,left:k+E-2,transform:"translate(-50%, -50%) rotateZ(0deg) translateX(50%)"}}}},bottom:{filter:function(){return x&&g+w-(C+P)>b+O},styles:function(){return{picker:{position:"absolute",top:C+P+O-g,left:k+E/2-y/2-v},overlay:{},arrow:{top:C+P-2,left:k+E/2,transform:"translate(-50%, -50%) rotateZ(90deg) translateX(50%)"}}}},left:{filter:function(){return N&&k-v>y+O},styles:function(){return{picker:{position:"absolute",top:C-b/2-g,left:k-y-O-v},overlay:{},arrow:{top:C+P/2,left:k+2,transform:"translate(-50%, -50%) rotateZ(180deg) translateX(50%)"}}}}};if(null!=T&&null!==(f=T[h])&&void 0!==f&&null!==(p=f.filter)&&void 0!==p&&p.call(f))return null==T||null===(d=T[h])||void 0===d||null===(m=d.styles)||void 0===m?void 0:m.call(d);if("top"!==h&&T.top.filter())return T.top.styles();if("right"!==h&&T.right.filter())return T.right.styles();if("bottom"!==h&&T.bottom.filter())return T.bottom.styles();if("left"!==h&&T.left.filter())return T.left.styles()}return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}}}(0,n.useEffect)((function(){var e=function(){return j(z())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){N&&j(z())}),[N]);var _,D,B=s?" ms-disabled":"",L=o().createElement("div",{ref:R,className:"ms-color-picker-overlay",style:b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0},null==P?void 0:P.overlay)},o().createElement("div",{className:"ms-color-picker-cover",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0},onClick:function(){T(!1),C&&c(r?f()(C).toString(r):C)}}),o().createElement(u.xS,m({},d,{className:"ms-sketch-picker",styles:{picker:b({width:200,padding:"10px 10px 0",boxSizing:"initial"},null==P?void 0:P.picker)},color:f()(C||t).toRgb(),onChange:function(e){return k(e.rgb)}})),o().createElement("div",{className:"ms-sketch-picker-arrow",style:b({position:"absolute",borderWidth:12},null==P?void 0:P.arrow)})),F=Z?(0,p.createPortal)(L,Z):L;return o().createElement("div",{className:"ms-color-picker".concat(B)},o().createElement("div",{className:"ms-color-picker-swatch",ref:A,style:(_=C||t||"transparent",D=f()(_).toRgbString(),i?{boxSizing:"border-box",border:"4px solid ".concat(D),backgroundColor:"transparent"}:{color:"transparent"===_?"#000000":f().mostReadable(D,["#000000"],{includeFallbackColors:!0}).toHexString(),backgroundColor:D}),onClick:function(){s||(T(!N),C&&c(r?f()(C).toString(r):C))}},a),N?F:null)}O.propTypes={value:a().oneOfType([a().string,a().shape({r:a().number,g:a().number,b:a().number,a:a().number})]),format:a().string,onChangeColor:a().func,text:a().string,line:a().bool,disabled:a().bool,pickerProps:a().object,containerNode:a().oneOfType([a().node,a().func]),onOpen:a().function,placement:a().string},O.defaultProps={disabled:!1,line:!1,onChangeColor:function(){},pickerProps:{},onOpen:function(){},containerNode:function(){return document.querySelector("."+((0,d.u8)("themePrefix")||"ms2")+" > div")||document.body}};const S=O},12961:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(24852),o=r.n(n),c=r(45697),a=r.n(c),i=r(30294),l=r(57037);function u(e){var t=e.color,r=e.format,n=e.line,c=e.onChangeColor,a=e.disableAlpha,u=e.containerNode,s=e.onOpen,f=e.presetColors,p=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(l.Z,{text:o().createElement(i.Glyphicon,{glyph:"dropper"}),format:r,line:n,value:t,onChangeColor:c,pickerProps:{disableAlpha:a,presetColors:f},containerNode:u,onOpen:s,placement:p}))}u.propTypes={color:a().oneOfType([a().string,a().shape({r:a().number,g:a().number,b:a().number,a:a().number})]),format:a().string,line:a().bool,onChangeColor:a().func,disableAlpha:a().bool,containerNode:a().node,onOpen:a().func,presetColors:a().array,placement:a().string},u.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const s=u},66190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Z});var n=r(27361),o=r.n(n),c=r(47037),a=r.n(c),i=r(81763),l=r.n(i),u=r(30998),s=r.n(u),f=r(13311),p=r.n(f),d=r(68630),m=r.n(d),y=r(1469),b=r.n(y),g=r(84596),v=r.n(g),h=r(19155),O=r.n(h),S=r(61868),w=r(92579),C=r(34990);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var N=function(e,t){var r=e.length,n=0;return t||0===t||(n=r),a()(t)?n=s()(e,{id:t})+1:l()(t)&&(n=Math.min(t,e.length)),n},T=function e(t,r,n){var o=n.contents,c=n.background,a=n.id,i=n.resourceId,l=[],u=r+'{"id": "'.concat(a,'"}]');return i===t?[u]:(c&&c.resourceId===t&&l.push(u+".background"),o?o.reduce((function(r,n){return[].concat(j(r),j(e(t,u+".contents[",n)))}),l):l)},I={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.D7:var r=t.id,n=t.path,c=t.position,i=t.element,l=(0,w.Ll)("currentStory.".concat(n),e),u=o()(e,l,[]),s=N(u,c),f=u.slice();return f.splice(s,0,E({id:r},i)),(0,S.t8)(l,f,e);case C.mN:var d=t.id,y=t.mediaType,g=t.data;return(0,S.t8)("currentStory.resources",O()([{id:d,type:y,data:g}].concat(j(e.currentStory&&e.currentStory.resources||[])),"id"),e);case C.vb:return(0,S.t8)("mode",t.mode,e);case C.QK:var h=t.id,k=t.mediaType,x=t.data,Z=(0,S.cc)("currentStory.resources",{id:h,type:k,data:x},{id:h},e);return k===w.Tr.MAP&&e.currentStory.sections.reduce((function(e,t){return[].concat(j(e),j(T(h,"sections[",t)))}),[]).map((function(t){var r=(0,w.Ll)("currentStory.".concat(t,".map"),e);Z=(0,S.t8)(r,void 0,Z)})),Z;case C.Ro:var A=t.id,R=t.mediaType,z=(0,S.z6)("currentStory.resources",{id:A},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(j(e),j(T(A,"sections[",t)))}),[]).map((function(t){var r=(0,w.Ll)("currentStory.".concat(t,".resourceId"),e);if(z=(0,S.zN)(r,z),R===w.Tr.MAP){var n=(0,w.Ll)("currentStory.".concat(t,".map"),e);z=(0,S.zN)(n,z)}})),z;case C.lX:return(0,S.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,S.t8)("loading",t.value,e));case C.Dq:var _=t.path,D=(0,w.Ll)("currentStory.".concat(_),e),B=j(D),L=B.pop(),F=o()(e,B);return b()(F)?(a()(L)&&(L=parseInt(L,10)),(0,S.t8)(B,[].concat(j(F.slice(0,L)),j(F.slice(L+1))),e)):(0,S.zN)(D,e);case C.ij:var M,q,H,U,X,W=e.defaultSettings||{},G=t.story.settings||W,K=(null===(M=G)||void 0===M||null===(q=M.theme)||void 0===q?void 0:q.fontFamilies)||[],Q=null===(H=e.currentStory)||void 0===H||null===(U=H.settings)||void 0===U||null===(X=U.theme)||void 0===X?void 0:X.fontFamilies;return Q&&Q.length>0&&(G=(0,S.t8)("theme.fontFamilies",O()([].concat(j(Q),j(K)),"family"),G)),(0,S.t8)("currentStory",E(E({},t.story),{},{settings:G}),e);case C.i2:return(0,S.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case C.IY:var Y=t.control,$=t.value;return(0,S.t8)("controls.".concat(Y),$,e);case C.Zf:var J=t.resource,V=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("resource",J),(0,S.t8)("currentStory.settings.storyTitle",V.storyTitle||J.name))(e);case C.si:case C.KT:return(0,S.zN)("errors.save",e);case C.SW:return(0,S.t8)("errors.save",v()(t.error),e);case C.Mk:return(0,S.t8)("isCollapsed",!e.isCollapsed,e);case C.NZ:var ee=o()(e,"currentStory.settings.".concat(t.option));return(0,S.t8)("currentStory.settings.".concat(t.option),!ee,e);case C.c:var te=!e.isSettingsEnabled,re=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("isSettingsEnabled",te),(0,S.t8)("oldSettings",te?re:{}),(0,S.t8)("currentStory.settings",te?E({},re):t.withSave?re:e.oldSettings))(e);case C.wb:var ne=t.path,oe=t.mode,ce=t.element,ae=(0,w.Ll)("currentStory.".concat(ne),e),ie=o()(e,ae);return m()(ie)&&m()(ce)&&"merge"===oe&&(ce=E(E({},ie),ce)),b()(ie)&&b()(ce)&&"merge"===oe&&(ce=[].concat(j(ie),j(ce))),(0,S.t8)(ae,ce,e);case C.km:return(0,S.t8)("currentStory.settings.".concat(t.prop),t.value,e);case C.un:if(t.columnId){var le=p()(e.currentStory.sections,(function(e){return p()(e.contents,{id:t.columnId})}));return le&&p()(le.contents,{id:t.columnId})?(0,S.t8)("currentPage",E(E({},e.currentPage),{},{columns:E(E({},e.currentPage.columns),{},P({},le.id,t.columnId))}),e):e}return(0,S.t8)("currentPage",E(E({},e.currentPage),{},{sectionId:t.sectionId}),e);case C.Cx:var ue=t.status,se=t.target,fe=t.selector,pe=void 0===fe?"":fe,de=t.hideContent,me=void 0!==de&&de,ye=t.path,be=ue?{target:se,selector:pe,hideContent:me,path:ye}:void 0;return(0,S.t8)("focusedContent",be,e);case C.jr:return(0,S.t8)("pendingChanges",t.value,e);case C.ZY:return(0,S.t8)("updateUrlOnScroll",t.value,e);case C.EQ:return(0,S.t8)("mediaEditorSettings",t.mediaEditorSettings,e);default:return e}}},31398:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var n=r(97395),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"notification.warning":t,o=e.autoDismiss,c=void 0===o?6:o,a=e.position,i=void 0===a?"tc":a,l=e.message,u=void 0===l?"Error":l;return(0,n.vU)({title:r,autoDismiss:c,position:i,message:u})}}}]);