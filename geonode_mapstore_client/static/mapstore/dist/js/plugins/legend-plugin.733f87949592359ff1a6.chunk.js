(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1063],{90079:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(8575),o=r(1469),l=r.n(o),a=r(27418),i=r.n(a),c=r(45697),u=r.n(c),s=r(67294),f=r.n(s),p=r(33044),y=r(5346);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(u,e);var t,r,o,a,c=(o=u,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(o);if(a){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function u(){var e;m(this,u);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return w(v(e=c.call.apply(c,[this].concat(r))),"state",{error:!1}),w(v(e),"onImgError",(function(){e.setState((function(){return{error:!0}}))})),w(v(e),"getUrl",(function(e,t){if(e.layer&&"wms"===e.layer.type&&e.layer.url){var r=e.layer,o=t||l()(r.url)&&Math.floor(Math.random()*r.url.length),a=l()(r.url)?r.url[o]:r.url.replace(/[?].*$/g,""),c=n.parse(a),u=(0,p.clearNilValuesForParams)(r.params),s=i()({},{service:"WMS",request:"GetLegendGraphic",format:"image/png",height:e.legendHeight,width:e.legendWidth,layer:r.name,style:r.style||null,version:r.version||"1.3.0",SLD_VERSION:"1.1.0",LEGEND_OPTIONS:e.legendOptions},r.legendParams||{},e.language&&r.localizedLayerStyles?{LANGUAGE:e.language}:{},(0,p.addAuthenticationToSLD)(u||{},e.layer),u&&u.SLD_BODY?{SLD_BODY:u.SLD_BODY}:{},e.scales&&e.currentZoomLvl&&e.scaleDependent?{SCALE:Math.round(e.scales[e.currentZoomLvl])}:{});return(0,p.addAuthenticationParameter)(a,s),n.format({host:c.host,protocol:c.protocol,pathname:c.pathname,query:s})}return""})),w(v(e),"validateImg",(function(t){t.height<=1&&t.width<=2&&e.onImgError()})),e}return t=u,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.state.error&&this.getUrl(e,0)!==this.getUrl(this.props,0)&&this.setState((function(){return{error:!1}}))}},{key:"render",value:function(){var e=this;return!this.state.error&&this.props.layer&&"wms"===this.props.layer.type&&this.props.layer.url?f().createElement("img",{onError:this.onImgError,onLoad:function(t){return e.validateImg(t.target)},src:this.getUrl(this.props),style:this.props.style}):f().createElement(y.Z,{msgId:"layerProperties.legenderror"})}}])&&g(t.prototype,r),u}(f().Component);w(S,"propTypes",{layer:u().object,legendHeight:u().number,legendWidth:u().number,legendOptions:u().string,style:u().object,currentZoomLvl:u().number,scales:u().array,scaleDependent:u().bool,language:u().string}),w(S,"defaultProps",{legendHeight:12,legendWidth:12,legendOptions:"forceLabels:on",style:{maxWidth:"100%"},scaleDependent:!0});const O=S},26379:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(67294),o=r.n(n),l=r(22843),a=r(33664),i=r(22222),c=r(90079),u=r(75110);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=(0,a.connect)((0,i.P1)([u.l2],(function(e){return{layers:e.filter((function(e){return"background"!==e.group&&"wms"===e.type}))}})),{})((function(e){var t,r,l=e.layers,a=e.hideLayerTitle,i=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return l}}(t,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=i[0],f=i[1];return l.length>0&&o().createElement("div",{className:"shadow gn-legend-wrapper",style:{width:u?"auto":"80px"}},o().createElement("div",{onClick:function(){f((function(e){return!e}))},className:"gn-legend-head"},o().createElement("span",{role:"button",className:"identify-icon glyphicon glyphicon-chevron-".concat(u?"down":"right"),title:"Expand layer legend"}),o().createElement("span",{className:"gn-legend-list-item"},"Legend")),o().createElement("ul",{className:"gn-legend-list",style:{display:u?"inline-block":"none"}},l.map((function(e,t){return o().createElement(n.Fragment,{key:t},!a&&o().createElement("li",{className:"gn-legend-list-item"},o().createElement("p",null,e.title)),o().createElement("li",null,o().createElement(c.Z,{layer:e})))}))))}));const p=(0,l.rx)("Legend",{component:f,containers:{},epics:{},reducers:{}})}}]);