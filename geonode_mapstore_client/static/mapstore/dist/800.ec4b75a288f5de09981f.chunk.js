(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[800],{43120:(e,t,r)=>{var n={"./cesium.js":[61133,6882,3219,5794,9437],"./leaflet.js":[48507,6259,7621,5030,7517,9993,7877,5378,6882,6287,3991,1164,5701,7161],"./openlayers.js":[34637,6259,7621,5030,2582,2043,5265,479,7202,4720,4738,9141,84,6932,658,3772,2370,4155,987,9070,7877,5378,6882,6287,8767,6909,6576,3498,6037],"./sink.js":[60620,5442]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=43120,e.exports=o},49243:(e,t,r)=>{"use strict";r.d(t,{y:()=>m});var n=r(47037),o=r.n(n),i=r(14293),a=r.n(i),u=r(49977),s=r(7412),c=r(75875),p=r.n(c),l=r(86267);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.attachJSON,c=n.itemId,y=void 0===c?null:c,d=function(t){return u.Observable.defer((function(){return p().get(e,{params:t})}))},b=function(t){return(0,s.pf)(r,e,t)},m=(0,s.pf)(r,e,t)?b:d;return i&&"application/json"!==t.info_format&&"application/json"!==t.outputFormat?u.Observable.forkJoin(m(t),m(v(v({},t),{},{info_format:"application/json"})).map((function(e){return e.data})).catch((function(){return u.Observable.of({})}))).map((function(e){var t=f(e,2),r=t[0],n=t[1];return v(v({},r),{},{features:n&&n.features&&n.features.filter((function(e){return!!a()(y)||e.id===y})),featuresCrs:n&&n.crs&&(0,l.parseURN)(n.crs)})})):m(t).map((function(e){return e.data})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{data:o()(e)?e:v(v({},e),{},{features:e.features&&e.features.filter((function(e){return!y||e.id===y}))}),features:e.features&&e.features.filter((function(e){return!y||e.id===y})),featuresCrs:e&&e.crs&&(0,l.parseURN)(e.crs)}}))}},47359:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(24852),o=r.n(n),i=r(73014),a=r(11196),u=r(67076),s=r(42872),c=r(1469),p=r.n(c),l=r(79870),f=(0,u.compose)((0,u.withStateHandlers)({index:0},{setIndex:function(){return function(e){return{index:e}}}}),(0,u.defaultProps)({index:0,responses:[]}));const y=(0,u.compose)((0,u.defaultProps)({responses:[],container:function(e){var t=e.index,r=e.children;return o().createElement(o().Fragment,null,p()(r)&&r[t]||r)},header:l.Z}),f,a.Yy,a.mI,(0,i.Z)((function(e){return 0===e.responses.length})))(s.Z)},1979:(e,t,r)=>{"use strict";r.d(t,{GA:()=>P,dY:()=>E,yM:()=>k});var n=r(24852),o=r.n(n),i=r(67076),a=r(49977),u=r(18446),s=r.n(u),c=r(23570),p=r.n(c),l=r(47359),f=r(49243),y=r(7412),d=r(24262),v=["rawPos"],b=["PopupSupport","tools"];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=function(){return-1!==(0,y.lY)().indexOf("application/json")?"application/json":(0,y.wR)()},S=(0,i.mapPropsStream)((function(e){var t=(0,i.createEventHandler)(),r=t.stream,n=t.handler;return r.withLatestFrom(e.map((function(e){return{map:e.map,layers:e.layers,options:e.options}})).distinctUntilChanged((function(e,t){return s()(e,t)}))).switchMap((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0].point,i=n[1],u=i.map,s=i.layers,c=void 0===s?[]:s,l=i.options,v=(l=void 0===l?{}:l).mapOptions,b=(v=void 0===v?{}:v).mapInfoFormat,m=void 0===b?P():b,h=c.filter((function(e){return(0,d.T4)(e,u.resolution)&&(0,y.y_)(e)})),g=["SLD_BODY"],j=["buffer","cql_filter","filter","propertyName"];return 0===h.length?a.Observable.of({requests:[{}],responses:[{response:{features:[]}}],validResponses:[]}):a.Observable.from(h).mergeMap((function(e){var t=(0,y.Fm)(e,{format:m,map:u,point:o,currentLocale:"en-US"}),r=t.url,n=t.request,i=t.metadata,a=r,s=n,c=O(O({},(0,y.K7)(e,j,g)),s),l=p()();return(0,f.y)(a,c,e).map((function(e){return e.data.exceptions?{reqId:l,exceptions:e.data.exceptions,queryParams:s,layerMetadata:i}:{data:e.data,reqId:l,queryParams:s,layerMetadata:O(O({},i),{},{features:e.features,featuresCrs:e.featuresCrs})}})).catch((function(e){return{error:e.data||e.statusText||e.status,reqId:l,queryParams:s,layerMetadata:i}})).startWith({start:!0,reqId:l,request:c})})).scan((function(e,t){var r=e.requests,n=e.responses,o=e.validResponses;if(t.start){var i=t.reqId,a=t.request;return{requests:r.concat({reqId:i,request:a}),responses:n,validResponses:o}}var u=t.data,s=t.queryParams,c=t.layerMetadata,p=(0,y.Te)(m),l=n.concat({response:u,queryParams:s,layerMetadata:c});return{requests:r,validResponses:p.getValidResponses(l),responses:l}}),{requests:[],responses:[],validResponses:[]})})).startWith({requests:[],responses:[]}).combineLatest(e,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return O(O({},t),{},{mapInfo:e,getFeatureInfoHandler:n})}))})),E=(0,i.branch)((function(e){var t=e.map,r=(t=void 0===t?{}:t).mapInfoControl;return void 0!==r&&r}),(0,i.compose)(S,(0,i.withStateHandlers)({popups:[]},{onClick:function(e,t){var r=t.getFeatureInfoHandler,n=void 0===r?function(){}:r;return function(e,t){var r=e.rawPos,o=void 0===r?[]:r,i=h(e,v);return n({point:i,layerInfo:t}),{popups:[{position:{coordinates:o},id:p()()}]}}},onPopupClose:function(){return function(){return{popups:[]}}}}),(0,i.withPropsOnChange)(["mapInfo","popups"],(function(e){var t=e.mapInfo,r=e.popups,n=e.options,i=(n=void 0===n?{}:n).mapOptions,a=(i=void 0===i?{}:i).mapInfoFormat,u=void 0===a?P():a,s=t.responses,c=t.requests,p=t.validResponses,f=function(){return o().createElement(l.Z,{renderEmpty:!0,responses:s,requests:c,validResponses:p,format:u,showEmptyMessageGFI:!0,missingResponses:(c||[]).length-(s||[]).length})};return{popups:r.map((function(e){return O(O({},e),{},{component:f})}))}})),(0,i.withPropsOnChange)(["plugins","onPopupClose","popups"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.plugins,r=e.popups,n=e.onPopupClose,i=t.PopupSupport,a=t.tools,u=void 0===a?{}:a,s=h(t,b);if(!i)return{};var c=function(e){return o().createElement(i,m({},e,{popups:r,onPopupClose:n}))};return{plugins:O(O({},s),{},{tools:O(O({},u),{},{popup:c})})}})))),k=(0,i.withPropsOnChange)(["onClick","eventHandlers"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,r=void 0===t?function(){}:t,n=e.eventHandlers,o=void 0===n?{}:n;return{eventHandlers:O(O({},o),{},{onClick:r})}}))},61928:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(24852),o=r.n(n),i=r(45697),a=r.n(i),u=r(47037),s=r.n(u);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=["impl","name"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e);var t,r,n,i,a=(n=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(n);if(i){var r=O(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function u(){var e;v(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return j(g(e=a.call.apply(a,[this].concat(r))),"getTool",(function(t){var r=e.props.plugins;return s()(t)?{name:t,impl:r.tools[t]}:d({name:t.name,impl:r.tools[t.name]},t)})),j(g(e),"renderLayers",(function(){var t=e.props.map&&e.props.map.projection||"EPSG:3857",r=e.props.plugins.Layer;return e.props.layers.map((function(n,i){return o().createElement(r,{type:n.type,srs:t,position:i,key:n.id||n.name,options:n,env:n.localizedLayerStyles?e.props.env:[]},e.renderLayerContent(n,t))}))})),j(g(e),"renderLayerContent",(function(t,r){if(t.features&&"vector"===t.type){var n=e.props.plugins.Feature;return t.features.map((function(e){return o().createElement(n,{key:e.id,msId:e.id,type:e.type,crs:r,geometry:e.geometry,features:e.features,featuresCrs:t.featuresCrs||"EPSG:4326",layerStyle:t.style,style:e.style||t.style||null,properties:e.properties})}))}return null})),j(g(e),"renderTools",(function(){return e.props.tools.map((function(t){var r=e.getTool(t),n=r.impl,i=r.name,a=f(r,p);return o().createElement(n,l({key:i},a))}))})),e}return t=u,(r=[{key:"render",value:function(){var e=this.props.plugins.Map,t=this.props.map&&this.props.map.projection||"EPSG:3857";return this.props.map&&e?o().createElement(e,l({projectionDefs:this.props.projectionDefs,style:this.props.styleMap,id:this.props.id,zoomControl:!1,center:{x:0,y:0},zoom:1,hookRegister:this.props.hookRegister,mapStateSource:this.props.mapStateSource||this.props.id},this.props.options,this.props.map,{projection:t},this.props.eventHandlers),this.renderLayers(),this.renderTools(),this.props.children):null}}])&&b(t.prototype,r),u}(o().Component);j(w,"propTypes",{id:a().string,options:a().object,map:a().object,mapStateSource:a().string,eventHandlers:a().object,styleMap:a().object,layers:a().array,hookRegister:a().object,projectionDefs:a().array,plugins:a().any,tools:a().array,getLayerProps:a().func,env:a().array}),j(w,"defaultProps",{id:"__base_map__",options:{},map:{},styleMap:{},tools:[],projectionDefs:[],eventHandlers:{onMapViewChanges:function(){},onClick:function(){},onMouseMove:function(){},onLayerLoading:function(){},onLayerError:function(){}},env:[]});const P=w},91812:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(67076),o=r(38482);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,n.compose)((0,n.withStateHandlers)((function(){return{resize:0}}),{onResize:function(e){var t=e.resize,r=void 0===t?0:t;return function(){return{resize:r+1}}}}),(0,o.Z)({debounceTime:e}),(0,n.withProps)((function(e){var t=e.options,r=e.resize;return{options:a(a({},t),{},{resize:r})}})))}},37981:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67076),o=r(63202),i=r(1469),a=r.n(i);const u=(0,n.withProps)((function(e){var t=e.projectionDefs;return{projectionDefs:a()(t)&&t.length?t:o.ZP.getConfigProp("projectionDefs")||[]}}))},57068:(e,t,r)=>{"use strict";r.d(t,{e:()=>p});var n=r(67076),o=r(82030),i=r(5346),a=r(24852),u=r.n(a),s=r(63202),c=(0,n.withProps)((function(e){var t=e.map;return{projection:e.projection||(t.data&&t.data.map?t.data.map.projection:t&&t.projection)}})),p=(0,n.compose)(c,(0,o.Z)((function(e){var t=e.projectionDefs,r=void 0===t?s.ZP.getConfigProp("projectionDefs")||[]:t,n=e.projection;return n&&0===r.concat([{code:"EPSG:4326"},{code:"EPSG:3857"},{code:"EPSG:900913"}]).filter((function(e){return e.code===n})).length}),(function(e){var t=e.projection;return{glyph:"1-map",style:{width:"100%",height:"100%",display:"flex"},title:u().createElement(i.Z,{msgId:"map.errors.loading.title"}),mainViewStyle:{margin:"auto"},imageStyle:{height:120,width:120,margin:"auto"},description:u().createElement(i.Z,{msgId:"map.errors.loading.projectionError",msgParams:{projection:t}})}})))},19180:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(24852),o=r.n(n),i=r(45697),a=r.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const b=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(m,t);var n,i,a,u,b=(a=m,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(a);if(u){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function m(){var e;c(this,m);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return v(y(e=b.call.apply(b,[this].concat(r))),"state",{plugins:{}}),e}return n=m,(i=[{key:"componentDidMount",value:function(){this.setPlugins(this.props),this._isMounted=!0}},{key:"componentWillUpdate",value:function(e){e.mapType!==this.props.mapType&&this.setPlugins(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=this.state.plugins;return o().createElement(e,s({},this.props,{plugins:t}))}},{key:"setPlugins",value:function(e){var t=this;e.mapType&&r(43120)("./"+e.mapType+".js").then((function(e){t._isMounted&&(t.setState({plugins:e.default()}),t.props.onMapTypeLoaded())}))}}])&&p(n.prototype,i),m}(o().Component);return v(t,"propTypes",{mapType:a().string,onMapTypeLoaded:a().func}),v(t,"defaultProps",{onMapTypeLoaded:function(){}}),t.displayName="".concat(e.displayName,"WithMapType"),t}},69705:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67076);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=(0,n.compose)((0,n.withHandlers)({onMapViewChanges:function(e){var t=e.map,r=void 0===t?{}:t,n=e.onMapViewChanges,o=void 0===n?function(){}:n;return function(e,t,n,a,u,s,c,p){o(i(i({},r),{},{center:e,bbox:i(i({},r.bbox),n),zoom:t,size:a,mapStateSource:u,projection:s,resolution:p}))}}}),(0,n.withPropsOnChange)(["onMapViewChanges","eventHandlers"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onMapViewChanges,r=void 0===t?function(){}:t,n=e.eventHandlers,o=void 0===n?{}:n;return{eventHandlers:i(i({},o),{},{onMapViewChanges:r})}})))},35400:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(24852),o=r.n(n),i=r(14471);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{}:t,n=e.mainViewStyle,a=void 0===n?{}:n,s=e.contentStyle,c=void 0===s?{}:s,p=e.imageStyle,l=void 0===p?{}:p,f=e.glyph,y=void 0===f?"info-sign":f,d=e.iconFit,v=e.title,b=e.tooltip,m=e.tooltipId,h=e.description,g=e.content;return o().createElement("div",{className:"empty-state-container",style:u({height:d?"100%":void 0},r)},o().createElement("div",{key:"main-view",className:"empty-state-main-view",style:u({height:d?"100%":void 0},a)},y?o().createElement("div",{key:"glyph",className:"empty-state-image",style:u({height:d?"100%":void 0},l)},o().createElement(i.Z,{iconFit:d,tooltip:b,tooltipId:m,glyph:y})):null,v?o().createElement("h1",{key:"title"},v):null,h?o().createElement("p",{key:"description",className:"empty-state-description"},h):null),o().createElement("div",{key:"content",className:"empty-state-content",style:c},g))}},14471:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(24852),o=r.n(n),i=r(57588),a=r(96259),u=(0,r(15135).Z)(i.Glyphicon);const s=function(e){var t=e.glyph,r=void 0===t?"info-sign":t,n=e.tooltip,i=e.tooltipId,s=e.iconFit,c=e.padding,p=void 0===c?0:c,l=e.margin,f=void 0===l?0:l;return o().createElement(a.Z,null,(function(e){var t=e.width,a=e.height;return o().createElement(u,{glyph:r,tooltip:n,tooltipId:i,style:{display:"inline-block",padding:p+"px",margin:f+"px",textAlign:"center",fontSize:s?Math.min(t,a)-2*p-2*f:t-2*p-2*f}})}))}},82030:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(24852),o=r.n(n),i=r(23560),a=r.n(i),u=r(67076),s=r(35400);const c=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.Z;return(0,u.branch)(e,(function(){return function(e){return o().createElement(r,t&&a()(t)?t(e):t)}}))}},38482:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(24852),o=r.n(n),i=r(23279),a=r.n(i),u=r(45697),s=r.n(u),c=r(80307),p=r.n(c),l=r(91033);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debounceTime,r=e.querySelector,n=e.closest,i=void 0!==n&&n;return function(e){var n,u;return u=n=function(n){b(s,n);var u=h(s);function s(e){var n;return y(this,s),w(O(n=u.call(this,e)),"findDomNode",(function(){if(!n.isMounded)return null;var e=p().findDOMNode(O(n));return e&&i&&r?e.closest(r||"*"):e&&(r?e.querySelector(r):e)})),n.width=void 0,n.height=void 0,n.skipOnMount=e.skipOnMount,n.div=null,n.onResize=a()((function(){var e;return(e=n.props).onResize.apply(e,arguments)}),void 0!==t?t:e.debounceTime||1e3),n.ro=new l.Z((function(e){e.forEach((function(e){var t=e.contentRect,r=t.width,o=t.height,i=n.props.handleWidth&&n.width!==r,a=n.props.handleHeight&&n.height!==o;n.skipOnMount||!i&&!a||n.onResize({width:r,height:o}),n.width=r,n.height=o,n.skipOnMount=!1}))})),n}return v(s,[{key:"componentDidMount",value:function(){this.isMounded=!0,this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentDidUpdate",value:function(){this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentWillUnmount",value:function(){var e=this.findDomNode();e&&this.ro&&this.ro.unobserve&&this.ro.unobserve(e)}},{key:"render",value:function(){return o().createElement(e,this.props)}}]),s}(o().Component),w(n,"propTypes",{handleWidth:s().bool,handleHeight:s().bool,onResize:s().func}),w(n,"defaultProps",{onResize:function(){},handleWidth:!0,handleHeight:!0}),u}}}}]);