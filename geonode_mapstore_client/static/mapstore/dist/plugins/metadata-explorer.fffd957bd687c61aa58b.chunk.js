(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8216],{47310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(75875),o=r.n(n),i=r(72500),c=r.n(i),a=r(27418),l=r.n(a),s={format:"json",bounded:0,polygon_geojson:1,priority:5};const u={geocode:function(e,t){var r=l()({q:e},s,t||{}),n=c().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=l()({lat:e.lat,lon:e.lng},t||{},s),n=c().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},15402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(45697),o=r.n(n),i=r(24852),c=r.n(i);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=r(68195).FormattedHTMLMessage,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(o){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function a(){return l(this,a),i.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){return this.context.intl?c().createElement(m,{id:this.props.msgId,values:this.props.msgParams}):c().createElement("span",null,this.props.msgId||"")}}])&&s(t.prototype,r),a}(c().Component);y(d,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(d,"contextTypes",{intl:o().object});const b=d},75480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(24852),o=r.n(n);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},82110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(24852),o=r.n(n),i=r(96259),c=r(32425);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=function(e){var t=e.width,r=e.height,n=e.className,a=void 0===n?"loader-container":n,s=e.contentStyle,u=void 0===s?{}:s;return o().createElement("div",{className:a},o().createElement(i.Z,null,(function(e){var n=e.width,i=void 0===n?200:n,a=e.height,s=void 0===a?200:a,f=t||(s>0?Math.min(i,s):i),p=r||(s>0?Math.min(i,s):i),y=Math.min(f,p);return o().createElement(c.Z,{size:y,style:l({padding:y/10,margin:"auto",display:"flex"},u)})})))}},52595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(61365).Z)(r(57588).Overlay)},76424:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(24852),o=r.n(n),i=r(13218),c=r.n(i),a=r(32425),l=["body","caption","infoExtra","className","description","fullText","onClick","onMouseEnter","onMouseLeave","preview","selected","size","style","stylePreview","styleTools","title","loading","dragSymbol","tools"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.body,r=e.caption,n=e.infoExtra,i=e.className,s=void 0===i?"":i,f=e.description,y=e.fullText,m=e.onClick,d=void 0===m?function(){}:m,b=e.onMouseEnter,v=void 0===b?function(){}:b,h=e.onMouseLeave,g=void 0===h?function(){}:h,O=e.preview,w=e.selected,j=e.size,P=e.style,E=void 0===P?{}:P,S=e.stylePreview,k=void 0===S?{}:S,x=e.styleTools,_=void 0===x?{}:x,N=e.title,C=e.loading,R=e.dragSymbol,T=void 0===R?"+":R,D=e.tools,Z=p(e,l);return o().createElement("div",{className:"mapstore-side-card".concat(w?" selected":"").concat(j?" ms-"+j:"").concat(s?" ".concat(s):"").concat(y?" full-text":""),onClick:function(e){return d(u({title:N,preview:O,description:f,caption:r,tools:D},Z),e)},onMouseEnter:v,onMouseLeave:g,style:E},o().createElement("div",{className:"ms-head"},Z.isDraggable&&Z.connectDragSource&&Z.connectDragSource(o().createElement("div",{className:"mapstore-side-card-tool text-center"},o().createElement("div",{style:{width:10,overflow:"hidden"}},T))),O&&o().createElement("div",{className:"mapstore-side-preview",style:k},O),o().createElement("div",{className:"mapstore-side-card-container"},o().createElement("div",{className:"mapstore-side-card-inner"},o().createElement("div",{className:"mapstore-side-card-left-container"},o().createElement("div",{className:"mapstore-side-card-info"},N&&o().createElement("div",{className:"mapstore-side-card-title"},o().createElement("span",null,N)),f&&o().createElement("div",{className:"mapstore-side-card-desc"},c()(f)?f:o().createElement("span",null,f)),r&&o().createElement("div",{className:"mapstore-side-card-caption"},o().createElement("span",null,r))),n),o().createElement("div",{className:"mapstore-side-card-right-container"},o().createElement("div",{className:"mapstore-side-card-tool text-center",style:_},D),"sm"!==j&&o().createElement("div",{className:"mapstore-side-card-loading"},o().createElement(a.Z,{className:"mapstore-side-card-loader",size:12,hidden:!C})))))),t&&o().createElement("div",{className:"ms-body"},t))}},93451:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(86638),o=r(45697),i=r.n(o),c=r(84596),a=r.n(c),l=r(1469),s=r.n(l),u=r(14293),f=r.n(u),p=r(47037),y=r.n(p),m=r(67076),d=["messages"];function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(t))return t.map((function(o){var i=(0,n.S$)(e,o[r]||y()(o)&&o||"");return h(h({},o),{},g({},r,f()(i)?t:i))}));var o=(0,n.S$)(e,t);return f()(o)?t:o},w=function(e,t,r){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return h(h({},n),{},g({},o,e[o]&&O(t,e[o],r)))}};const j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,m.compose)((0,m.getContext)({messages:i().object}),(0,m.mapProps)((function(r){var n=r.messages,o=b(r,d);return h(h({},o),a()(e).reduce(w(o,n,t),{}))})))}},45869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(24852),o=r.n(n),i=r(45697),c=r.n(i);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(a,e);var t,r,n,i,c=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(i){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function a(){return l(this,a),c.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&s(t.prototype,r),a}(o().Component);y(m,"propTypes",{disabled:c().bool,className:c().string,checked:c().bool,onChange:c().func,onClick:c().func}),y(m,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const d=m},2576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(24852),o=r.n(n),i=r(80307),c=r.n(i),a=r(45697),l=r.n(a),s=r(57588),u=r(52595),f=r(50966);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,e);var t,r,n,i,a=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(i){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function l(){return y(this,l),a.apply(this,arguments)}return t=l,(r=[{key:"renderPopover",value:function(){return o().createElement(s.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(s.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(f.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(u.Z,{placement:this.props.placement,show:!0,target:function(){return c().findDOMNode(e.target)}},this.renderPopover())])}}])&&m(t.prototype,r),l}(o().Component);h(g,"propTypes",{id:l().string,title:l().string,text:l().string,glyph:l().string,bsStyle:l().string,placement:l().string,left:l().number,top:l().number,trigger:l().oneOfType([l().array,l().bool])}),h(g,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const O=g},89919:(e,t,r)=>{"use strict";r.d(t,{hP:()=>u});var n=r(84596),o=r.n(n),i=r(49977),c=r.n(i);function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.startWith.apply(e,a(t))},u=function(e,t,r){return function(n){return(r?s(n,o()(e)).catch(r):s(n,o()(e))).concat(c().Observable.from(o()(t)))}}},11847:(e,t,r)=>{"use strict";r.d(t,{ij:()=>v,w0:()=>h,vl:()=>g,K2:()=>O,Nw:()=>w});var n=r(72500),o=r.n(n),i=r(1469),c=r.n(i),a=r(47037),l=r.n(a),s=r(18446),u=r.n(s),f=r(89734),p=r.n(f),y=r(13311),m=r.n(y),d=r(64210);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(e){if(!e)return{};var t=!(0===e.indexOf("http")),r=t?[]:e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(t){var n=window.location;r[1]=n.protocol,r[3]=n.hostname,r[4]=n.port,r[5]=e}r[4]=""!==r[4]&&r[4]?r[4]:"https:"===r[1]?"443":"80",r[5]=r[5]?r[5]:e.slice(r[0].length);var o,i,c=(i=6,function(e){if(Array.isArray(e))return e}(o=r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}}(o,i)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[1],l=c[3],s=c[4],u=c[5],f=0===u.indexOf("/")?u.split("/")[1]:"";return{protocol:a,domain:l,port:s,rootPath:u,applicationRootPath:f}},h=function(e,t){var r=c()(e)?e[0]:e,n=c()(t)?t[0]:t;if(r===n)return!0;if(!r||!n)return!1;if(!l()(r)||!l()(n))return!1;var i=o().parse(r),a=o().parse(n),s=v(r),f=v(n),y=s.protocol===f.protocol,m=s.domain===f.domain,d=s.port===f.port,b=i.pathname===a.pathname,h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e===t)return!0;if(!e&&!t)return!0;var r=e?e.split("&").filter((function(e){return!!e})):[],n=t?t.split("&").filter((function(e){return!!e})):[];return u()(p()(r),p()(n))}(i.query,a.query);return y&&d&&m&&b&&h},g=function(e){return d.Qc(e)},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,r=new RegExp(t);return r.test(e)},w=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,n=new RegExp(r),o=n.test(e);if(!o)return!1;if(o&&!t)return!0;if(o&&t){var i=/\{(.*?)\}/.test(e);return 0===t.filter((function(e){return m()(i,e)})).length}return!1}}}]);