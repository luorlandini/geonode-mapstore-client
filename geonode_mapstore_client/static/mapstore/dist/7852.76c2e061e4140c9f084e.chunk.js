(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7852,6287],{90079:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var n=r(72500),i=r.n(n),o=r(1469),a=r.n(o),l=r(27418),u=r.n(l),s=r(45697),c=r.n(s),f=r(24852),p=r.n(f),d=r(33044),m=r(5346);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(s,e);var t,r,n,o,l=(n=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(n);if(o){var r=x(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function s(){var e;y(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return O(S(e=l.call.apply(l,[this].concat(r))),"state",{error:!1}),O(S(e),"onImgError",(function(){e.setState((function(){return{error:!0}}))})),O(S(e),"getUrl",(function(e,t){if(e.layer&&"wms"===e.layer.type&&e.layer.url){var r=e.layer,n=t||a()(r.url)&&Math.floor(Math.random()*r.url.length),o=a()(r.url)?r.url[n]:r.url.replace(/[?].*$/g,""),l=i().parse(o),s=(0,d.clearNilValuesForParams)(r.params),c=u()({},{service:"WMS",request:"GetLegendGraphic",format:"image/png",height:e.legendHeight,width:e.legendWidth,layer:r.name,style:r.style||null,version:r.version||"1.3.0",SLD_VERSION:"1.1.0",LEGEND_OPTIONS:e.legendOptions},r.legendParams||{},e.language&&r.localizedLayerStyles?{LANGUAGE:e.language}:{},(0,d.addAuthenticationToSLD)(s||{},e.layer),s&&s.SLD_BODY?{SLD_BODY:s.SLD_BODY}:{},e.scales&&e.currentZoomLvl&&e.scaleDependent?{SCALE:Math.round(e.scales[e.currentZoomLvl])}:{});return(0,d.addAuthenticationParameter)(o,c),i().format({host:l.host,protocol:l.protocol,pathname:l.pathname,query:c})}return""})),O(S(e),"validateImg",(function(t){t.height<=1&&t.width<=2&&e.onImgError()})),e}return t=s,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.state.error&&this.getUrl(e,0)!==this.getUrl(this.props,0)&&this.setState((function(){return{error:!1}}))}},{key:"render",value:function(){var e=this;return!this.state.error&&this.props.layer&&"wms"===this.props.layer.type&&this.props.layer.url?p().createElement("img",{onError:this.onImgError,onLoad:function(t){return e.validateImg(t.target)},src:this.getUrl(this.props),style:this.props.style}):p().createElement(m.Z,{msgId:"layerProperties.legenderror"})}}])&&h(t.prototype,r),s}(p().Component);O(w,"propTypes",{layer:c().object,legendHeight:c().number,legendWidth:c().number,legendOptions:c().string,style:c().object,currentZoomLvl:c().number,scales:c().array,scaleDependent:c().bool,language:c().string}),O(w,"defaultProps",{legendHeight:12,legendWidth:12,legendOptions:"forceLabels:on",style:{maxWidth:"100%"},scaleDependent:!0});const T=w},76712:(e,t,r)=>{"use strict";r.d(t,{n0:()=>z,tW:()=>$,FJ:()=>J,F8:()=>Q,ll:()=>Y,eL:()=>X,AD:()=>K,oR:()=>ee,LZ:()=>te,eX:()=>re,QQ:()=>ne,B8:()=>ie,T6:()=>oe});var n=r(27418),i=r.n(n),o=r(91175),a=r.n(o),l=r(1469),u=r.n(l),s=r(47037),c=r.n(s),f=r(84596),p=r.n(f),d=r(13218),m=r.n(d),g=r(89734),y=r.n(g),h=r(44908),v=r.n(h),b=r(64721),S=r.n(b),x=r(27361),O=r.n(x),w=r(14293),T=r.n(w),C=r(41609),A=r.n(C),M=r(72500),R=r.n(M),P=r(86267),j=r(63202),L=r(24262),E=r(86638),F=r(7294),I=r(33044),U=r(67007),W=r(7412);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=function(e){return e&&e.replace(/\/csw$/,"/")},_=function(e){return m()(e)&&e._||e},q=function(e,t){return e.filter((function(r){return F.C2(t,r,e,t,null)}))},H=function(e){var t=Array.isArray(e.references)?e.references:[e.references];return a()([].filter.call(t,(function(t){return"WWW:LINK-1.0-http--image-thumbnail"===t.scheme||"thumbnail"===t.scheme||"WWW:DOWNLOAD-1.0-http--download"===t.scheme&&-1!==(t.value||"").indexOf("".concat(e.identifier||"","-thumb"))||"WWW:DOWNLOAD-REST_MAP"===t.scheme&&-1!==(t.value||"").indexOf("".concat(e.identifier||"","-thumb"))})))},N={csw:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e;return n&&n.records?n.records.map((function(e){var n,o,l,s=e.dc;if(s&&s.URI){var f=u()(s.URI)?s.URI:s.URI&&[s.URI]||[],d=a()([].filter.call(f,(function(e){return"thumbnail"===e.name})))||a()([].filter.call(f,(function(e){var t;return!e.name&&(null===(t=e.protocol)||void 0===t?void 0:t.indexOf("image/"))>-1})));n=d?d.value:null,o=a()([].filter.call(f,(function(e){return e.protocol&&(e.protocol.match(/^OGC:WMS-(.*)-http-get-map/g)||e.protocol.match(/^OGC:WMS/g))})))}if(!o&&s&&s.references&&s.references.length){var m=Array.isArray(s.references)?s.references:[s.references];if(o=a()([].filter.call(m,(function(e){return e.scheme&&(e.scheme.match(/^OGC:WMS-(.*)-http-get-map/g)||"OGC:WMS"===e.scheme)})))){var g=R().parse(o.value,!0),h=g.query&&g.query.layers||s.alternative;o=i()({},o,{name:h})}}if(!o&&s&&s.references&&s.references.length){var b=Array.isArray(s.references)?s.references:[s.references];if(l=a()([].filter.call(b,(function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})))){var x=s.alternative;l=i()({},l,{name:x})}}if(!n&&s&&s.references){var O=H(s);O&&(n=O.value)}var w=[];if(s&&s.references&&(Array.isArray(s.references)?s.references:[s.references]).filter((function(e){return e.scheme.indexOf("http-get-capabilities")>-1})).forEach((function(e){var r=0===e.value.indexOf("http")?e.value:(t&&t.catalogURL||"")+"/"+e.value;w.push({type:e.scheme,url:r})})),o&&o.name){0===o.value.indexOf("http")||i()({},o,{value:(t&&t.catalogURL||"")+"/"+o.value});var T={type:o.protocol||o.scheme,url:o.value,SRS:[],params:{name:o.name}};w.push(T)}if(l&&l.name){var C={type:"arcgis",url:l.value,SRS:[],params:{name:l.name}};w.push(C)}n&&(0===n.indexOf("http")||(n=(B(t&&t.url)||"")+n));var A={boundingBox:e.boundingBox&&e.boundingBox.extent&&p()(e.boundingBox.extent.join(","))};if(s&&(A=k(k({},A),y()(Object.keys(s)).reduce((function(e,t){return k(k({},e),{},G({},t,v()(p()(s[t]))))}),{}))),s&&s.URI&&p()(s.URI)&&p()(s.URI).length&&(A=k(k({},A),{},{uri:["<ul>"+p()(s.URI).map((function(e){return'<li><a target="_blank" href="'.concat(e.value,'">').concat(e.name,"</a></li>")})).join("")+"</ul>"]})),s&&s.subject&&p()(s.subject)&&p()(s.subject).length&&(A=k(k({},A),{},{subject:["<ul>"+p()(s.subject).map((function(e){return"<li>".concat(e,"</li>")})).join("")+"</ul>"]})),w&&p()(w).length?A=k(k({},A),{},{references:["<ul>"+p()(w).map((function(e){return'<li><a target="_blank" href="'.concat(e.url,'">').concat(e.params&&e.params.name||e.url,"</a></li>")})).join("")+"</ul>"]}):delete A.references,s&&s.temporal){var M=s.temporal.split("; ");if(M.length){var P=M.filter((function(e){return-1!==e.indexOf("scheme=")})).map((function(e){var t=e.indexOf("=");return e.substr(t+1,e.length-1)}));P=P.length?P[0]:"W3C-DTF";var j=M.filter((function(e){return-1!==e.indexOf("start=")||-1!==e.indexOf("end=")})).map((function(e){var t=e.indexOf("="),n=e.substr(0,t),i=e.substr(t+1,e.length-1),o=e.length-t-1<=10;return S()(["start","end"],n)&&"W3C-DTF"===P&&!o?(0,E.S$)(r,"catalog.".concat(n))+new Date(i).toLocaleString():S()(["start","end"],n)?(0,E.S$)(r,"catalog.".concat(n))+i:""}));A=k(k({},A),{},{temporal:["<ul>"+j.map((function(e){return"<li>".concat(e,"</li>")})).join("")+"</ul>"]})}}return{boundingBox:e.boundingBox,description:s&&c()(s.abstract)&&s.abstract||"",layerOptions:t&&t.layerOptions||{},identifier:s&&c()(s.identifier)&&s.identifier||"",references:w,thumbnail:n,title:s&&c()(s.title)&&s.title||"",tags:s&&s.tags||"",metadata:A}})):null},wms:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&e.records?e.records.map((function(r){return{capabilities:r,credits:r.credits,boundingBox:U.ZP.getBBox(r),description:r.Abstract||r.Title||r.Name,identifier:r.Name,service:e.service,tags:"",layerOptions:k(k({},(null==t?void 0:t.layerOptions)||{}),(null==e?void 0:e.layerOptions)||{}),title:(0,L.EM)(r)||r.Name,formats:p()(r.formats||[]),dimensions:(r.Dimension&&p()(r.Dimension)||[]).map((function(e){return i()({},{values:e._&&e._.split(",")||[]},e.$||{})})).filter((function(e){return e&&"time"!==e.name})),references:[{type:"OGC:WMS",url:t&&t.url,SRS:r.SRS&&(u()(r.SRS)?r.SRS:[r.SRS])||[],params:{name:r.Name}}]}})):null},wmts:function(e,t){return e&&e.records?e.records.map((function(e){var r=p()(F.f1(e)||t&&t.url);1===r.length&&(r=r[0]);var n=F.dN(e),o=p()(e.TileMatrixSetLink||[]).reduce((function(t,r){var n,o=a()((e.TileMatrixSet&&p()(e.TileMatrixSet)||[]).filter((function(e){return e["ows:Identifier"]===r.TileMatrixSet}))),l=o&&P.default.getEPSGCode(o["ows:SupportedCRS"]),u=r.TileMatrixSetLimits&&(r.TileMatrixSetLimits.TileMatrixLimits||[]).map((function(e){return{identifier:e.TileMatrix,ranges:{cols:{min:e.MinTileCol,max:e.MaxTileCol},rows:{min:e.MinTileRow,max:e.MaxTileRow}}}}))||o.TileMatrix.map((function(e){return{identifier:e["ows:Identifier"]}}));return i()(t,(G(n={},o["ows:Identifier"],u),G(n,l,u),n))}),{}),l=function(e){var t=e["ows:WGS84BoundingBox"];return t||(t={"ows:LowerCorner":"-180.0 -90.0","ows:UpperCorner":"180.0 90.0"}),t}(e);return{title:_(e["ows:Title"]||e["ows:Identifier"]),description:_(e["ows:Abstract"]||e["ows:Title"]||e["ows:Identifier"]),identifier:_(e["ows:Identifier"]),tags:"",layerOptions:t&&t.layerOptions||{},style:e.style,capabilitiesURL:n,queryable:e.queryable,requestEncoding:e.requestEncoding,tileMatrixSet:e.TileMatrixSet,matrixIds:o,format:e.format,TileMatrixSetLink:p()(e.TileMatrixSetLink),boundingBox:{extent:[l["ows:LowerCorner"].split(" ")[0],l["ows:LowerCorner"].split(" ")[1],l["ows:UpperCorner"].split(" ")[0],l["ows:UpperCorner"].split(" ")[1]],crs:"EPSG:4326"},references:[{type:"OGC:WMTS",url:r,SRS:q(e.SRS||[],o),params:{name:e["ows:Identifier"]}}]}})):null},tms:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.records){var r=t.service&&"tms"===t.service.provider;return r?e.records.map((function(e){return{title:e.title,tileMapUrl:e.href,description:"".concat(e.srs).concat(e.format?", "+e.format:""),tmsUrl:t.tmsUrl,references:[{type:"OGC:TMS",version:"1.0.0",url:t.url}]}})):e.records.map((function(e){return{title:e.title||e.provider,url:e.url,attribution:e.attribution,options:e.options,provider:e.provider,type:"tileprovider",references:[]}}))}return null},wfs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.records;return t?t.map((function(e){return k(k({},e),{},{references:[{type:"OGC:WFS-1.1.0-http-get-capabilities",url:e.url},{type:"OGC:WFS-1.1.0-http-get-feature",url:e.url}]})})):null},backgrounds:function(e){return e&&e.records?e.records.map((function(e){return{description:e.title,title:e.title,identifier:e.name,thumbnail:e.thumbURL,references:[],background:e}})):null}},z=function(e){return e.filter((function(e){return P.default.isSRSAllowed(e)})).reduce((function(e,t){return i()(e,G({},t,!0))}),{})},Z=function(e,t){var r=e.split("?"),n={};return r.length>=2&&r[1]&&r[1].split(/[&;]/g).forEach((function(e){var r=e.split("=");-1===t.indexOf(r[0].toLowerCase())&&(n[r[0]]=r[1])})),{url:r[0],params:n}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.references,r=void 0===t?[]:t;return{wfs:a()(r.filter((function(e){return e.type&&("OGC:WFS"===e.type||e.type.indexOf("OGC:WFS")>-1&&e.type.indexOf("http-get-feature")>-1)}))),wms:a()(r.filter((function(e){return e.type&&("OGC:WMS"===e.type||e.type.indexOf("OGC:WMS")>-1&&e.type.indexOf("http-get-map")>-1)}))),wmts:a()(r.filter((function(e){return e.type&&("OGC:WMTS"===e.type||e.type.indexOf("OGC:WMTS")>-1&&e.type.indexOf("http-get-map")>-1)}))),tms:a()(r.filter((function(e){return e.type&&("OGC:TMS"===e.type||e.type.indexOf("OGC:TMS")>-1)})))}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{references:[]};return{esri:a()(e.references.filter((function(e){return e.type&&("ESRI:SERVER"===e.type||"arcgis"===e.type)})))}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.references,r=void 0===t?[]:t,n=a()(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WMS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),i=a()(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WFS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),o=a()(r.filter((function(e){return e.type&&e.type.indexOf("OGC:WMTS")>-1&&e.type.indexOf("http-get-capabilities")>-1}))),l=[];return n&&l.push({type:"WMS_GET_CAPABILITIES",url:n.url,labelId:"catalog.wmsGetCapLink"}),o&&l.push({type:"WMTS_GET_CAPABILITIES",url:o.url,labelId:"catalog.wmtsGetCapLink"}),i&&l.push({type:"WFS_GET_CAPABILITIES",url:i.url,labelId:"catalog.wfsGetCapLink"}),l},V=function(e){return e&&!u()(e)&&-1!==e.indexOf(",")?e.split(",").map((function(e){return e.trim()})):e},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wms",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.removeParams,i=void 0===n?[]:n,o=r.format,a=r.catalogURL,l=r.url,s=r.formats,c=void 0===s?{}:s,f=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},p=arguments.length>4?arguments[4]:void 0;if(!e||!e.references)return null;var d,m,g=$(e),y=g.wms,h=g.wmts,v=y||h,b=function(e){return Z(j.ZP.cleanDuplicatedQuestionMarks(e),["request","layer","layers","service","version"].concat(i))},S=V(v.url);if(S&&u()(S))d=S.map((function(e){return b(e)})).map((function(e){return e.url})),m=S.map((function(e){return b(e)})).map((function(e){return e.params})).reduce((function(e,t){return k(k({},e),t)}),{});else{var x=b(S||a),O=x.url,w=x.params;d=O,m=w}var C=function(e){return u()(e)&&1===e.length?e[0]:e},M=C(l||d),R=z(v.SRS);return k(k(k({type:t,requestEncoding:e.requestEncoding,style:e.style,format:o,url:M,capabilitiesURL:e.capabilitiesURL,queryable:e.queryable,visibility:!0,dimensions:e.dimensions||[],name:v.params&&v.params.name,title:e.title||v.params&&v.params.name,matrixIds:"wmts"===t?e.matrixIds||[]:void 0,description:e.description||"",tileMatrixSet:"wmts"===t?e.tileMatrixSet||[]:void 0,credits:!j.ZP.getConfigProp("noCreditsFromCatalog")&&e.credits,bbox:{crs:e.boundingBox.crs,bounds:{minx:e.boundingBox.extent[0],miny:e.boundingBox.extent[1],maxx:e.boundingBox.extent[2],maxy:e.boundingBox.extent[3]}},links:Q(e),params:m,allowedSRS:R,catalogURL:a},f),e.layerOptions),{},{localizedLayerStyles:T()(p)?void 0:p},"wms"===t&&!A()(c)&&{imageFormats:c.imageFormats,infoFormats:c.infoFormats})},X=function(e,t,r,n){return N[e]&&N[e](t,r,n)||null},K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||!e.references)return null;var r=J(e),n=r.esri;return k({type:n.type,url:n.url,visibility:!0,dimensions:e.dimensions||[],name:n.params&&n.params.name,bbox:{crs:e.boundingBox.crs,bounds:{minx:e.boundingBox.extent[0],miny:e.boundingBox.extent[1],maxx:e.boundingBox.extent[2],maxy:e.boundingBox.extent[3]}}},t)},ee=function(e,t,r){var n=e.tileMapUrl,i=t.TileMap,o=void 0===i?{}:i,a=r.forceDefaultTileGrid,l=o.Title,u=o.Abstract,s=o.SRS,c=o.BoundingBox,f=void 0===c?{}:c,d=o.Origin,m=o.TileFormat,g=void 0===m?{}:m,y=o.TileSets,h=o.$,v=h.version,b=h.tilemapservice,S=O()(f,"$",{}),x=S.minx,w=S.miny,T=S.maxx,C=S.maxy,A=O()(d,"$"),M=A.x,R=A.y,P=O()(g,"$",{}),j=P.width,L=P.height,E=P["mime-type"],F=P.extension,U=[parseFloat(j),parseFloat(L,10)],W=p()(O()(y,"TileSet",[]).map((function(e){return e.$}))).map((function(e){var t=e.href,r=e.order,n=e["units-per-pixel"];return{href:(0,I.cleanAuthParamsFromURL)(t),order:parseFloat(r),resolution:parseFloat(n)}})),D=O()(y,"profile");return{title:l,visibility:!0,hideErrors:!0,name:l,allowedSRS:G({},s,!0),description:u,srs:s,version:v,tileMapService:b?(0,I.cleanAuthParamsFromURL)(b):void 0,type:"tms",profile:D,tileMapUrl:n,forceDefaultTileGrid:a,bbox:f&&{crs:s,bounds:{minx:parseFloat(x),miny:parseFloat(w),maxx:parseFloat(T),maxy:parseFloat(C)}},tileSets:W,origin:{x:parseFloat(M),y:parseFloat(R)},format:E,tileSize:U,extension:F}},te=function(e){return k({type:e.type||"wfs",search:{url:e.url,type:"wfs"},url:e.url,queryable:e.queryable,visibility:!0,name:e.name,title:e.title||e.name,description:e.description||"",bbox:e.boundingBox,links:Q(e),style:{weight:1,color:"rgba(0, 0, 255, 1)",opacity:1,fillColor:"rgba(0, 0, 255, 0.1)",fillOpacity:.1,radius:10}},e.layerOptions)},re=function(e){return{type:"tileprovider",visibility:!0,url:e.url,title:e.title,attribution:e.attribution,options:e.options,provider:e.provider,name:e.provider}},ne=[{label:"image/png",value:"image/png"},{label:"image/png8",value:"image/png8"},{label:"image/jpeg",value:"image/jpeg"},{label:"image/vnd.jpeg-png",value:"image/vnd.jpeg-png"},{label:"image/vnd.jpeg-png8",value:"image/vnd.jpeg-png8"},{label:"image/gif",value:"image/gif"}],ie=function(){return v()(Object.values((0,W.eq)()))},oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return U.ZP.getCapabilities(e).then((function(e){var r,n,i=O()(e,"capability.request.getMap.format",[]);if(A()(i))r=ne;else{var o=ne.map((function(e){return e.value}));r=(i=i.map((function(e){var t=e.value;return{label:t,value:t}}))).filter((function(e){var t=e.value;return S()(o,t)}))||[]}if(t){var a=O()(e,"capability.request.getFeatureInfo.format",[]),l=ie();A()(a)?n=l:(a=a.map((function(e){return e.value})),n=v()(a.filter((function(e){return S()(l,e)})))||[])}return t?{imageFormats:r,infoFormats:n}:r})).catch((function(){return t?{imageFormats:ne,infoFormats:ie()}:ne}))}},43143:(e,t,r)=>{"use strict";r.d(t,{qH:()=>u,qj:()=>s,qq:()=>c});var n,i=r(17621),o=r.n(i),a=r(14841),l=r.n(a),u=function(e,t,r,i){var o=e;isNaN(parseFloat(e))&&(o=n.hexToHsv(e)[0]);var a=.5/(r-1),l=t/(r-1),u=[];1===r&&(a=.5,l=t/2);for(var s=0;s<r;s++){var c=o+s*l-t/2,f=a*s+.3,p=f;i&&(c=i.h||c,f=i.s||f,p=i.v||p),u.push(n.hsvToHex(c,f,p,s))}return u},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return o()(e).toHexString()},c=function(e,t,r){var n=o()(e);return e&&n.setAlpha(l()(void 0!==t?t:n.getAlpha())).toRgbString()||r};n={decToHex:function(e){var t="0123456789ABCDEF",r=parseInt(e,10);return r=isNaN(r)?0:r,t.charAt(((r=r>255||r<0?0:r)-r%16)/16)+t.charAt(r%16)},rgbToHex:function(e,t,r){return e instanceof Array?n.rgbToHex(e[0],e[1],e[2]):"#"+n.decToHex(e)+n.decToHex(t)+n.decToHex(r)},realToDec:function(e){return Math.min(255,Math.round(256*e))},rgbToHsv:function(e,t,r){if(e instanceof Array)return n.rgbToHsv(e[0],e[1],e[2]);var i,o,a,l,u,s=e/255,c=t/255,f=r/255;switch(i=Math.min(Math.min(s,c),f),a=(o=Math.max(Math.max(s,c),f))-i,o){case i:l=0;break;case s:l=60*(c-f)/a,c<f&&(l+=360);break;case c:l=60*(f-s)/a+120;break;case f:l=60*(s-c)/a+240}return u=0===o?0:1-i/o,[Math.round(l),u,o]},distributedColorsHEX:function(e){for(var t=360/(e-1),r=[],i=function e(t,r,i){var o=e(t,r,i);return n.rgbToHex(o)},o=0;o<e;o++)r.push(i(t*o,.57,.63));return r},sameToneRangeColors:u,hsvToRgb:function(e,t,r){if(e instanceof Array)return n.hsvToRgb(e[0],e[1],e[2]);var i,o,a,l=Math.floor(e/60%6),u=e/60-l,s=r*(1-t),c=r*(1-u*t),f=r*(1-(1-u)*t);switch(l){case 0:i=r,o=f,a=s;break;case 1:i=c,o=r,a=s;break;case 2:i=s,o=r,a=f;break;case 3:i=s,o=c,a=r;break;case 4:i=f,o=s,a=r;break;case 5:i=r,o=s,a=c}return[n.realToDec(i),n.realToDec(o),n.realToDec(a)]},hsvToHex:function(e,t,r){var i=n.hsvToRgb(e,t,r);return n.rgbToHex(i)},hexToHsv:function(e){var t=e;if(t.length>0){"#"===t[0]&&(t=e.substring(1));var r=n.hexToRgb(t);return n.rgbToHsv(r)}return null},hexToRgb:function(e){var t,r,n,i=e;return"#"===i.charAt(0)&&(i=e.substring(1)),t=i.charAt(0)+i.charAt(1),r=i.charAt(2)+i.charAt(3),n=i.charAt(4)+i.charAt(5),[parseInt(t,16),parseInt(r,16),parseInt(n,16)]},colorToHexStr:s,colorToRgbaStr:c}},66287:(e,t,r)=>{"use strict";r.r(t),r.d(t,{isAttrPresent:()=>h,isStrokeStyle:()=>v,isFillStyle:()=>b,isTextStyle:()=>S,isCircleStyle:()=>x,isMarkerStyle:()=>O,isSymbolStyle:()=>w,getStylerTitle:()=>T,geometryFunctions:()=>C,getGeometryFunction:()=>A,registerGeometryFunctions:()=>M,addOpacityToColor:()=>R,hashCode:()=>P,registerStyle:()=>L,setSymbolsStyles:()=>E,fetchStyle:()=>F,getSymbolsStyles:()=>I,hashAndStringify:()=>U,domNodeToString:()=>W,createSvgUrl:()=>D,createStylesAsync:()=>k,getStyleParser:()=>G});var n=r(14293),i=r.n(n),o=r(61868),a=r(43143),l=r(9669),u=r.n(l),s=r(42757),c=r.n(s),f=r(50436),p=r.n(f);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y={sld:new(c()),css:new(p())},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.filter((function(t){return!i()(e[t])})).length>0},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["color","opacity","dashArray","dashOffset","lineCap","lineJoin","weight"];return h(e,t)},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["fillColor","fillOpacity"];return h(e,t)},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["label","font","fontFamily","fontSize","fontStyle","fontWeight","textAlign","textRotationDeg"];return h(e,t)},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["radius"];return h(e,t)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["iconGlyph","iconShape","iconUrl"];return h(e,t)},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["symbolUrl"];return h(e,t)},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return O(e)?"Marker":w(e)?"Symbol":S(e)?"Text":x(e)||"Circle Style"===e.title?"Circle":b(e)?"Polygon":v(e)?"Polyline":""},C={centerPoint:{type:"Point",func:function(){}},lineToArc:{type:"LineString",func:function(){}},startPoint:{type:"Point",func:function(){}},endPoint:{type:"Point",func:function(){}}},A=function(e,t){return C[e]&&C[e][t]},M=function(e,t,r){if(!(e&&t&&r))throw new Error("specify all the params: functionName, func, type");C[e]={func:t,type:r}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#FFCC33",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;return(0,o.t8)("a",t,e)},P=function(e){var t,r=0;if(0===e.length)return r;for(t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return r},j={},L=function(e,t){if(!e||!t)throw new Error("specify all the params: sha, style");j[e]=t},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j=e},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"style";return j[e]&&j[e][t]},I=function(){return j},U=function(e){if(e)return P(JSON.stringify(e));throw new Error("hashAndStringify: specify mandatory params: style")},W=function(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return w(e)&&e.symbolUrl?u().get(t,{"Content-Type":"image/svg+xml;charset=utf-8"}).then((function(t){var r=window.URL||window.webkitURL||window,n=(new DOMParser).parseFromString(t.data,"image/svg+xml").firstElementChild;n.setAttribute("fill",e.fillColor||"#FFCC33"),n.setAttribute("fill-opacity",i()(e.fillOpacity)?.2:e.fillOpacity),n.setAttribute("stroke",(0,a.qq)(e.color||"#FFCC33",i()(e.opacity)?1:e.opacity)),n.setAttribute("stroke-opacity",i()(e.opacity)?1:e.opacity),n.setAttribute("stroke-width",e.weight||1),n.setAttribute("width",e.size||32),n.setAttribute("height",e.size||32),n.setAttribute("stroke-dasharray",e.dashArray||"none");var o=new Blob([W(n)],{type:"image/svg+xml;charset=utf-8"}),l=r.createObjectURL(o),u=document.createElement("canvas");u.width=e.size,u.height=e.size;var s=u.getContext("2d"),c=new Image;c.src=l;var f="",p=U(e);return c.onload=function(){try{s.drawImage(c,u.width/2-c.width/2,u.height/2-c.height/2),f=u.toDataURL("image/png"),u=null,L(p,{style:m(m({},e),{},{symbolUrlCustomized:l}),base64:f})}catch(e){return}},L(p,{style:m(m({},e),{},{symbolUrlCustomized:l}),svg:n,base64:f}),l})).catch((function(){return r(70898)})):new Promise((function(e){e(null)}))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return w(e)&&!F(U(e))?D(e,e.symbolUrl||e.symbolUrlCustomized).then((function(t){return t?m(m({},e),{},{symbolUrlCustomized:t}):F(U(e))})).catch((function(){return m(m({},e),{},{symbolUrlCustomized:r(70898)})})):new Promise((function(t){t(w(e)?F(U(e)):e)}))}))},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sld";return y[e]}},70898:(e,t,r)=>{e.exports=r.p+"symbolMissing.svg"}}]);