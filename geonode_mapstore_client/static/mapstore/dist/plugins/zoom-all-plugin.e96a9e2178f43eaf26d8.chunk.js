(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7236],{50966:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(61365),r=n(57588);const i=(0,o.Z)(r.OverlayTrigger)},61365:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var o=n(24852),r=n.n(o),i=n(63202);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}const c=function(t){return function(e){return r().createElement(t,a({},e,{container:document.querySelector("."+(i.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},43549:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>V});var o=n(93379),r=n.n(o),i=n(54840);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=n(27418),c=n.n(a),l=n(24852),u=n.n(l),s=n(57588),p=n(71703),f=n(22222),y=n(1550),m=n(45697),h=n.n(m),d=n(38560),b=n(50966),v=n(52259),g=n(63202);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?j(t):e}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(o);if(r){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return E(this,t)});function a(){var t;O(this,a);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return T(j(t=i.call.apply(i,[this].concat(n))),"addTooltip",(function(e){var n=u().createElement(s.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return u().createElement(b.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:n},e)})),T(j(t),"zoomToMaxExtent",(function(){var e=t.props.mapConfig.maxExtent,n=t.props.mapConfig.size,o=1,r=t.props.mapConfig.center,i=t.props.mapConfig.projection||"EPSG:3857";e&&"[object Array]"===Object.prototype.toString.call(e)&&(o=(0,v.getZoomForExtent)(e,n,0,21),0===(r=(0,v.getCenterForExtent)(e,i)).x&&0===r.y||(r=(0,g.qg)(r,"EPSG:4326")));var a=(0,v.getBbox)(r,o,n);t.props.changeMapView(r,o,a,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),T(j(t),"zoomToInitialExtent",(function(){var e=t.props.mapInitialConfig,n=(0,v.getBbox)(e.center,e.zoom,t.props.mapConfig.size);t.props.changeMapView(e.center,e.zoom,n,t.props.mapConfig.size,null,t.props.mapConfig.projection)})),t}return e=a,(n=[{key:"render",value:function(){var t=this;return this.addTooltip(u().createElement(d.Z,{id:this.props.id,style:this.props.style,bsSize:this.props.btnSize,onClick:function(){return t.props.useInitialExtent?t.zoomToInitialExtent():t.zoomToMaxExtent()},className:this.props.className,bsStyle:this.props.bsStyle},this.props.glyphicon?u().createElement(s.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&w(e.prototype,n),a}(u().Component);T(P,"propTypes",{id:h().string,image:h().string,glyphicon:h().string,text:h().string,btnSize:h().oneOf(["large","small","xsmall"]),mapConfig:h().object,mapInitialConfig:h().object,changeMapView:h().func,btnType:h().oneOf(["normal","image"]),help:h().oneOfType([h().string,h().element]),tooltip:h().element,tooltipPlace:h().string,className:h().string,useInitialExtent:h().bool,bsStyle:h().string,style:h().object}),T(P,"defaultProps",{id:"mapstore-zoomtomaxextent",glyphicon:"resize-full",text:void 0,btnSize:"xsmall",btnType:"normal",useInitialExtent:!1,tooltipPlace:"left",bsStyle:"default",className:"square-button"});const z=P;var _=n(5346),M=n(827);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Z(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function N(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var q=(0,f.P1)([M.Od,function(t){return t.mapInitialConfig}],(function(t,e){return{mapConfig:t,mapInitialConfig:e}})),F=(0,p.connect)(q,{changeMapView:y.o6})(z),G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(o);if(r){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return N(this,t)});function a(){return k(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"render",value:function(){return u().createElement(F,R({key:"zoomToMaxExtent"},this.props,{useInitialExtent:!0}))}}])&&Z(e.prototype,n),a}(u().Component);const V={ZoomAllPlugin:c()(G,{Toolbar:{name:"ZoomAll",position:7,tooltip:"zoombuttons.zoomAllTooltip",icon:u().createElement(s.Glyphicon,{glyph:"resize-full"}),help:u().createElement(_.Z,{msgId:"helptexts.zoomToMaxExtentButton"}),tool:!0,priority:1}}),reducers:{}}},54840:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var o=n(23645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,".msgapi #mapstore-zoomtomaxextent {\n    z-index: 1;\n    position: relative;\n}\n",""]);const i=r},23645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},56029:(t,e,n)=>{var o=n(33448);t.exports=function(t,e,n){for(var r=-1,i=t.length;++r<i;){var a=t[r],c=e(a);if(null!=c&&(void 0===l?c==c&&!o(c):n(c,l)))var l=c,u=a}return u}},53407:t=>{t.exports=function(t,e){return t<e}},95395:(t,e,n)=>{var o=n(89465),r=n(47816),i=n(67206);t.exports=function(t,e){var n={};return e=i(e,3),r(t,(function(t,r,i){o(n,e(t,r,i),t)})),n}},22762:(t,e,n)=>{var o=n(56029),r=n(67206),i=n(53407);t.exports=function(t,e){return t&&t.length?o(t,r(e,2),i):void 0}},87185:(t,e,n)=>{var o=n(45652);t.exports=function(t,e){return e="function"==typeof e?e:void 0,t&&t.length?o(t,void 0,e):[]}},93379:(t,e,n)=>{"use strict";var o,r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],r=0;r<t.length;r++){var c=t[r],l=e.base?c[0]+e.base:c[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var p=a(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:s,updater:h(f,e),references:1}),o.push(s)}return o}function l(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,s=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function p(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=s(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function f(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var y=null,m=0;function h(t,e){var n,o,r;if(e.singleton){var i=m++;n=y||(y=l(e)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=l(e),o=f.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var l=c(t,e),u=0;u<n.length;u++){var s=a(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=l}}}}}]);