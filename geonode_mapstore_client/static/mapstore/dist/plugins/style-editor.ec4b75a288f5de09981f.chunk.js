(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1701],{52595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(61365).Z)(r(57588).Overlay)},45869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(24852),o=r.n(n),a=r(45697),i=r.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,r,n,a,i=(n=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(n);if(a){var r=p(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function l(){return s(this,l),i.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&c(t.prototype,r),l}(o().Component);y(b,"propTypes",{disabled:i().bool,className:i().string,checked:i().bool,onChange:i().func,onClick:i().func}),y(b,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const d=b},2576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(24852),o=r.n(n),a=r(80307),i=r.n(a),l=r(45697),s=r.n(l),c=r(57588),u=r(52595),f=r(50966);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(s,e);var t,r,n,a,l=(n=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(a){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return m(this,e)});function s(){return y(this,s),l.apply(this,arguments)}return t=s,(r=[{key:"renderPopover",value:function(){return o().createElement(c.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(c.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(f.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(u.Z,{placement:this.props.placement,show:!0,target:function(){return i().findDOMNode(e.target)}},this.renderPopover())])}}])&&b(t.prototype,r),s}(o().Component);g(h,"propTypes",{id:s().string,title:s().string,text:s().string,glyph:s().string,bsStyle:s().string,placement:s().string,left:s().number,top:s().number,trigger:s().oneOfType([s().array,s().bool])}),g(h,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const O=h},94943:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>G});var n=r(49977),o=r.n(n),a=r(27361),i=r.n(a),l=r(91175),s=r.n(l),c=r(1469),u=r.n(c),f=r(41106),p=r.n(f),y=r(97395),b=r(80416),d=r(60604),m=r(90825),v=r(80833),g=r(82904),h=r(24262),O=r(96909),S=r(9082),w=r(75875),j=r.n(w),E=r(19155),P=r.n(E),N=r(84596),T=r.n(N),k=r(99009);function D(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const W=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,o=void 0===n?[]:n,a=e.options,i=void 0===a?{}:a,l=(0,k.$N)(r),s=l.name,c=l.workspace,u="".concat(t,"rest/").concat(c&&"workspaces/".concat(c,"/")||"","layers/").concat(s,".json");return j().get(u,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[],n=o.map((function(e){return e.name})),a=r.filter((function(e){var t=e.name;return-1===n.indexOf(t)}));return{layer:M(M({},t),{},{styles:{"@class":"linked-hash-set",style:a}})}})).then((function(e){return j().put(u,e).then((function(){return e}))}))},_=function(e){var t=e.baseUrl,r=e.layerName,n=e.styles,o=void 0===n?[]:n,a=e.options,i=void 0===a?{}:a,l=(0,k.$N)(r),s=l.name,c=l.workspace,u="".concat(t,"rest/").concat(c&&"workspaces/".concat(c,"/")||"","layers/").concat(s,".json");return j().get(u,i).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[];return{layer:M(M({},t),{},{styles:{"@class":"linked-hash-set",style:[].concat(D(r),D(o))}})}})).then((function(e){return j().put(u,e).then((function(){return e}))}))},R=function(e){var t=e.baseUrl,r=e.layerName,n=e.styleName,o=e.options,a=void 0===o?{}:o,i=(0,k.$N)(r),l=i.name,s=i.workspace,c="".concat(t,"rest/").concat(s&&"workspaces/".concat(s,"/")||"","layers/").concat(l,".json");return j().get(c,a).then((function(e){var t=e.data.layer||{},r=t.styles&&t.styles.style&&T()(t.styles.style)||[],o=t.defaultStyle||{},a=P()([o].concat(D(r)),"name");return{layer:M(M({},t),{},{defaultStyle:{name:n},styles:{"@class":"linked-hash-set",style:a}})}})).then((function(e){return j().put(c,e).then((function(){return e}))}))};var x=r(93222),Z=r(75110),A=r(7147),V=r(8954);function F(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z=function(e){var t=e.status,r=e.styleName,n=e.baseUrl;return"edit"===t?o().Observable.defer((function(){return S.ZP.getStyleCodeByName({baseUrl:n,styleName:r})})).switchMap((function(e){return o().Observable.of((0,O.FU)({languageVersion:e.languageVersion,code:e.code,templateId:"",format:e.format,init:!0}))})).catch((function(e){return o().Observable.of((0,O.Fe)("edit",e))})):o().Observable.empty()},J=function(e){var t=e.styleName,r=e.baseUrl,n=e.onSuccess$,a=e.onError$;return o().Observable.defer((function(){return S.ZP.deleteStyle({baseUrl:r,styleName:t})})).switchMap((function(){return n||o().Observable.empty()})).catch((function(){return a||o().Observable.empty()}))},q=function(e){var t=e.baseUrl,r=e.update,n=e.code,a=e.format,i=e.styleName,l=e.status,s=e.languageVersion,c=e.options,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],p=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return o().Observable.defer((function(){return S.ZP[r?"updateStyle":"createStyle"]({baseUrl:t,code:n,format:a,styleName:i,languageVersion:s,options:c})})).switchMap((function(){var e;return u()(f)&&(e=o().Observable).of.apply(e,[(0,O.Wm)()].concat(F(f)))||f})).catch((function(e){var t;return(t=o().Observable).of.apply(t,[(0,O.Fe)(l,e),(0,O.Wm)()].concat(F(p)))})).startWith((0,O.pt)(l))};const G={toggleStyleEditorEpic:function(e,t){return e.ofType(O.vZ).filter((function(){return!(0,x.aN)(t.getState())})).switchMap((function(e){var r=t.getState(),n=(0,Z.jN)(r),a=!!i()(n,"options.availableStyles");if(!e.enabled)return function(e){var t=(0,x.gc)(e),r=(0,x.Z0)(e).baseUrl,n=void 0===r?"":r;return o().Observable.of((0,O.l1)(),(0,d.fU)({owner:k.s1})).merge(t?J({styleName:t,baseUrl:n}):o().Observable.empty())}(r);if((0,x.ji)(r)&&a)return o().Observable.empty();var l=e.layer||(0,Z.Iz)(r);if(!l||l&&!l.url)return o().Observable.empty();var s=(0,h.Nd)(l);if(!s)return l.availableStyles?o().Observable.of((0,b.Xy)({availableStyles:l.availableStyles}),(0,O.Wm)()):(0,v.kB)(l).switchMap((function(e){var t=(0,h.IA)(e);return t.availableStyles?o().Observable.of((0,b.Xy)({availableStyles:t.availableStyles}),(0,b.tV)(l.id,"layer",$({},t)),(0,O.Wm)()):o().Observable.of((0,O.Fe)("availableStyles",{status:401}),(0,O.Wm)())})).startWith((0,O.pt)("global"));var c=l.url.split(s),u="".concat(c[0]).concat(s),f=(0,x.Z0)(r);return o().Observable.defer((function(){return(0,V.eb)({baseUrl:u,styleService:f})})).switchMap((function(e){var t,r=[(0,O.E0)(e)];return(t=(0,v.kB)(l).switchMap((function(e){var t=(0,h.IA)(e);return t.availableStyles?o().Observable.defer((function(){return S.ZP.getStylesInfo({baseUrl:u,styles:t&&t.availableStyles||[]})})).switchMap((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o().Observable.of((0,d.W)(l.id,k.s1,"override",{}),(0,b.Xy)({availableStyles:e}),(0,b.tV)(l.id,"layer",$($({},t),{},{availableStyles:e})),(0,O.Wm)())}(e)})):o().Observable.of((0,O.Fe)("availableStyles",{status:401}),(0,O.Wm)())}))).startWith.apply(t,r).catch((function(e){var t=-1!==e.message.indexOf("could not be unmarshalled")?"parsingCapabilities":"global";return o().Observable.of((0,O.Fe)(t,e),(0,O.Wm)())}))})).startWith((0,O.pt)("global"),(0,O.l1)())}))},updateLayerOnStatusChangeEpic:function(e,t){return e.ofType(O.g$).filter((function(e){return!!e.status})).switchMap((function(r){var n=t.getState(),a=(0,x.Vf)(n),i=a&&a.params||{},l=a&&!a.describeFeatureType&&(0,m.H)(a.url,a,{query:i}),s=(0,x.i7)(n)||a.availableStyles&&a.availableStyles[0]&&a.availableStyles[0].name,c=(0,x.Ri)(n),u=(0,x.Z0)(n).baseUrl,f=void 0===u?"":u;return l&&function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){};return(r=o().Observable).of.apply(r,[(0,O.pt)("global")].concat(F(a))).merge(e.ofType(b.K$).filter((function(){var e=(0,Z.Iz)(t.getState());return n(e)})).switchMap((function(){var e=(0,Z.Iz)(t.getState());return i(e)})).catch((function(e){return o().Observable.of((0,O.Fe)("global",e),(0,O.Wm)())})).takeUntil(e.ofType(O.E2)))}(e,t,(function(e){return e&&e.describeLayer}),[l],(function(e){return o().Observable.concat(z({status:r.status,styleName:s,baseUrl:f}),o().Observable.of((0,O.xR)(!(e&&e.describeLayer&&401===e.describeLayer.error)),(0,O.bB)({editorType:c.msEditorType||"textarea",styleJSON:c.msStyleJSON}),(0,O.Wm)()))}))||o().Observable.concat(z({status:r.status,styleName:s,baseUrl:f}),o().Observable.of((0,O.bB)({editorType:c.msEditorType||"textarea",styleJSON:c.msStyleJSON})))}))},updateTemporaryStyleEpic:function(e,t){return e.ofType(O.TB,O.DX).switchMap((function(e){var r=t.getState(),n=(0,x.gc)(r),o=(0,x.Vf)(r),a=(0,k.$N)(o.name).workspace,i=e.format&&e.format!==(0,x.iB)(r),l=n||"".concat(a?"".concat(a,":"):"").concat((0,k.Vi)()),s=e.format||(0,x.iB)(r),c=(0,x.ex)(r),u=(0,x.Z0)(r).baseUrl,f=void 0===u?"":u,p=(0,x.j5)(r),b="sld"===s&&(e.code||"").match(/version=\"1\.1\.0\"/)&&{version:"1.1.0"}||e.format&&!e.languageVersion&&{version:"1.0.0"}||e.languageVersion||{version:"1.0.0"},m=p.version!==b.version?{params:{raw:!0}}:{},v=b,g=function(t){return q({update:!0,code:e.code,format:s,styleName:t,status:c,baseUrl:f,languageVersion:v,options:m},[(0,d.B1)(k.s1,[{style:t,_v_:Date.now(),singleTile:!0}]),(0,O.k5)({temporaryId:t,templateId:e.templateId||"",code:e.code,format:s,init:e.init,languageVersion:v})],"edit"===c?[]:[(0,y.vU)({title:"styleeditor.updateTmpErrorTitle",message:"styleeditor.updateTmpStyleErrorMessage",uid:"updateTmpStyleError",autoDismiss:5})])},h=("css"===s?"* { stroke: #888888; }":"sld"===s&&'<?xml version="1.0" encoding="ISO-8859-1"?>\n<StyledLayerDescriptor version="1.0.0"\n\t\txsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"\n\t\txmlns="http://www.opengis.net/sld"\n\t\txmlns:ogc="http://www.opengis.net/ogc"\n\t\txmlns:xlink="http://www.w3.org/1999/xlink"\n\t\txmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\n\t<NamedLayer>\n\t\t<Name>Default Style</Name>\n\t\t<UserStyle>\n\t\t\t<Title>${styleTitle}</Title>\n\t\t\t<Abstract>${styleAbstract}</Abstract>\n\t\t\t<FeatureTypeStyle>\n\t\t\t\t<Rule>\n\t\t\t\t\t<Name>Rule Name</Name>\n\t\t\t\t\t<Title>Rule Title</Title>\n\t\t\t\t\t<Abstract>Rule Abstract</Abstract>\n\t\t\t\t\t<LineSymbolizer>\n\t\t\t\t\t\t<Stroke>\n\t\t\t\t\t\t\t<CssParameter name="stroke">#0000FF</CssParameter>\n\t\t\t\t\t\t</Stroke>\n\t\t\t\t\t\t</LineSymbolizer>\n\t\t\t\t\t<PointSymbolizer>\n\t\t\t\t\t\t<Graphic>\n\t\t\t\t\t\t\t<Mark>\n\t\t\t\t\t\t\t\t<WellKnownName>square</WellKnownName>\n\t\t\t\t\t\t\t\t<Fill>\n\t\t\t\t\t\t\t\t\t<CssParameter name="fill">#FF0000</CssParameter>\n\t\t\t\t\t\t\t\t</Fill>\n\t\t\t\t\t\t\t</Mark>\n\t\t\t\t\t\t</Graphic>\n\t\t\t\t\t</PointSymbolizer>\n\t\t\t\t\t</Rule>\n\t\t\t\t</FeatureTypeStyle>\n\t\t\t</UserStyle>\n\t\t</NamedLayer>\n\t</StyledLayerDescriptor>\n')||"",S=function(e){return q({code:h,format:s,styleName:e,status:c,baseUrl:f},g(e),[(0,y.vU)({title:"styleeditor.createTmpErrorTitle",message:"styleeditor.createTmpStyleErrorMessage",uid:"createTmpStyleError",autoDismiss:5}),(0,O.k5)({temporaryId:null,templateId:"",code:"",format:"",init:"",languageVersion:null})])};return i&&n&&J({styleName:n,baseUrl:f,onSuccess$:S("".concat(a?"".concat(a,":"):"").concat((0,k.Vi)())),onError$:g(l)})||n&&g(l)||S(l)}))},createStyleEpic:function(e,t){return e.ofType(O.vA).switchMap((function(e){var r=t.getState(),n=(0,x.gB)(r),a=(0,x.Vf)(r),i=(0,k.$N)(a.name).workspace,l="".concat(i?"".concat(i,":"):"").concat((0,k.nK)(e.settings)),c=(0,x.iB)(r),u=e.settings||{},f=u.title,m=void 0===f?"":f,v=u._abstract,g=void 0===v?"":v,h=(0,x.Z0)(r).baseUrl,w=void 0===h?"":h,j=$({title:m,description:g},{msStyleJSON:null,msEditorType:"visual"});return o().Observable.defer((function(){return S.ZP.createStyle({baseUrl:w,code:p()(n)({styleTitle:m,styleAbstract:g}),format:c,styleName:l,metadata:j})})).switchMap((function(){return o().Observable.of((0,d.B1)(k.s1,[{}]),(0,b.Xy)({style:l||""},!0),(0,O.Nf)(""),(0,O.Wm)()).merge(function(e){var t=e.baseUrl,r=e.layer,n=e.styleName,a=e.format,i=e.title,l=e._abstract,c=e.metadata;return o().Observable.defer((function(){return _({baseUrl:t,layerName:r.name,styles:[{name:n}]})})).switchMap((function(){var e=$({filename:"".concat(n,".").concat(a),format:a,name:n,title:i,_abstract:l},c&&{metadata:c}),t=s()(r.availableStyles),u=r.availableStyles&&[t,e].concat(F(r.availableStyles.filter((function(e,t){return t>0}))))||[e];return o().Observable.of((0,b.Xy)({availableStyles:u},!0),(0,O.Wm)())})).catch((function(){return o().Observable.of((0,O.Wm)())})).startWith((0,O.pt)("global"))}({layer:a,styleName:l,format:c,title:m,_abstract:g,baseUrl:w,metadata:j}))})).catch((function(e){return o().Observable.of((0,O.Fe)("",e),(0,O.Wm)(),(0,y.vU)({title:"styleeditor.createStyleErrorTitle",message:"styleeditor.createStyleErrorMessage",uid:"createStyleError",autoDismiss:5}))})).startWith((0,O.pt)(""))}))},updateStyleCodeEpic:function(e,t){return e.ofType(O.ch).switchMap((function(){var e=t.getState(),r=(0,x.iB)(e),n=(0,x.j5)(e),a=(0,x.gB)(e),i=(0,x.i7)(e),l=(0,x.gc)(e),s=(0,x.Vf)(e),c=(0,x.Z0)(e).baseUrl,u=void 0===c?"":c,f=(0,x.WW)(e)||{},p={msStyleJSON:f.styleJSON||null,msEditorType:f.editorType},d=(s.availableStyles||[]).map((function(e){return e.name===i?$($({},e),{},{metadata:$($({},e.metadata),p)}):e}));return o().Observable.defer((function(){return S.ZP.updateStyle({baseUrl:u,code:a,format:r,styleName:i,languageVersion:n,options:{params:{raw:!0}},metadata:p})})).switchMap((function(){return o().Observable.of((0,O.Wm)(),(0,b.tV)(s.id,"layer",{_v_:Date.now(),availableStyles:d}),(0,b.Xy)({availableStyles:d}),(0,O.k5)({temporaryId:l,templateId:"",code:a,format:r,init:!0,languageVersion:n}),(0,y.Vp)({title:"styleeditor.savedStyleTitle",message:"styleeditor.savedStyleMessage",uid:"savedStyleTitle",autoDismiss:5}))})).catch((function(e){return o().Observable.of((0,O.Fe)("global",e),(0,O.Wm)(),(0,y.vU)({title:"styleeditor.updateStyleErrorTitle",message:"styleeditor.updateStyleErrorMessage",uid:"updateStyleError",autoDismiss:5}))})).startWith((0,O.pt)("global"))}))},deleteStyleEpic:function(e,t){return e.ofType(O.j1).filter((function(e){return!!e.styleName})).switchMap((function(e){var r=e.styleName,n=t.getState(),a=(0,x.Vf)(n),i=(0,x.Z0)(n).baseUrl,l=void 0===i?"":i,s=(0,A.tL)(n),c=(0,A.Gd)(n);return o().Observable.defer((function(){return W({baseUrl:l,layerName:a.name,styles:[{name:r}]})})).switchMap((function(){var e=a.availableStyles&&a.availableStyles.filter((function(e){return e.name!==r}))||[];return o().Observable.concat(o().Observable.of((0,b.Xy)({style:"",availableStyles:e},!0),(0,O.Wm)(),(0,g.Xg)("layersettings","originalSettings",$($({},s),{},{style:""})),(0,g.Xg)("layersettings","initialSettings",$($({},c),{},{style:""}))),J({styleName:r,baseUrl:l,onSuccess$:o().Observable.of((0,y.Vp)({title:"styleeditor.deletedStyleSuccessTitle",message:"styleeditor.deletedStyleSuccessMessage",uid:"deletedStyleSuccess",autoDismiss:5})),onError$:o().Observable.of((0,y.vU)({title:"styleeditor.deletedStyleErrorTitle",message:"styleeditor.deletedStyleErrorMessage",uid:"deletedStyleError",autoDismiss:5}))}))})).catch((function(){return o().Observable.of((0,O.Wm)())})).startWith((function(){return o().Observable.of((0,O.pt)("global"))}))}))},setDefaultStyleEpic:function(e,t){return e.ofType(O.rb).switchMap((function(){var e=t.getState(),r=(0,x.Z0)(e).baseUrl,n=void 0===r?"":r,a=(0,x.Vf)(e),i=(0,x.i7)(e);return o().Observable.defer((function(){return R({baseUrl:n,layerName:a.name,styleName:i})})).switchMap((function(){var e=a.availableStyles.filter((function(e){var t=e.name;return i===t})),t=a.availableStyles.filter((function(e){var t=e.name;return i!==t})),r=[].concat(F(e),F(t));return o().Observable.of((0,b.Xy)({availableStyles:r},!0),(0,y.Vp)({title:"styleeditor.setDefaultStyleSuccessTitle",message:"styleeditor.setDefaultStyleSuccessMessage",uid:"setDefaultStyleSuccess",autoDismiss:5}),(0,O.Wm)())})).startWith((0,O.pt)("global")).catch((function(){return o().Observable.of((0,y.vU)({title:"styleeditor.setDefaultStyleErrorTitle",message:"styleeditor.setDefaultStyleErrorMessage",uid:"setDefaultStyleError",autoDismiss:5}),(0,O.Wm)())}))}))}}},80833:(e,t,r)=>{"use strict";r.d(t,{kB:()=>m,HI:()=>v});var n=r(72500),o=r.n(n),a=(r(91175),r(90173)),i=r(49977),l=r(67007),s=r(75875),c=r.n(s),u=(r(86267),r(24262)),f=r(10284),p=r(33044);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}a.default;var m=function(e){return i.Observable.defer((function(){return l.ZP.getCapabilities((0,u.Fh)(e))})).let(f.oB).map((function(t){return l.ZP.parseLayerCapabilities(t,e)}))},v=function(e){return function(e){return i.Observable.defer((function(){return c().get(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,r=e.search,n=void 0===r?{}:r,a=e.url,i=o().parse(n.url||a,!0);return o().format(b(b({},i),{},{search:void 0,query:b(b({},i.query),{},{service:"WMS",version:"1.1.1",layers:t,outputFormat:"application/json",request:"DescribeLayer"})}))}(e))})).let(f.oB)}(e).map((function(e){var t=e.data,r=void 0===t?{}:t;return r&&r.layerDescriptions[0]})).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.owsURL;return b(b({},e),{},{params:{},search:r?{type:"wfs",url:(0,p.cleanAuthParamsFromURL)(r)}:void 0})}))}},98592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var n=r(1469),o=r.n(n),a=r(47037),i=r.n(a),l=r(27418),s=r.n(l),c=r(45697),u=r.n(c),f=r(24852),p=r.n(f),y=r(71703),b=r(67076),d=r(22222),m=r(80416),v=r(96909),g=r(15402),h=r(65539),O=r(82030),S=r(73014),w=r(32425),j=r(74621),E=r(93222),P=r(99009),N=r(2496);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(s,e);var t,r,n,a,l=(n=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(n);if(a){var r=W(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function s(){return U(this,s),l.apply(this,arguments)}return t=s,(r=[{key:"UNSAFE_componentWillMount",value:function(){var e=!this.props.editingAllowedRoles||o()(this.props.editingAllowedRoles)&&i()(this.props.userRole)&&-1!==this.props.editingAllowedRoles.indexOf(this.props.userRole);this.props.onInit(this.props.styleService,e&&(0,P.uW)(this.props.layer,this.props.styleService))}},{key:"render",value:function(){return p().createElement(h.Z,{className:"ms-style-editor-container",header:this.props.showToolbar?p().createElement("div",{className:"ms-style-editor-container-header"},this.props.header,p().createElement("div",{className:"text-center"},p().createElement(N.lC,{enableSetDefaultStyle:this.props.enableSetDefaultStyle}))):null,footer:p().createElement("div",{style:{height:25}})},this.props.isEditing?p().createElement(N.m2,{config:this.props.editorConfig}):p().createElement(N.tM,{showDefaultStyleIcon:this.props.canEdit&&this.props.enableSetDefaultStyle}))}}])&&C(t.prototype,r),s}(p().Component);_(R,"propTypes",{layer:u().object,header:u().node,isEditing:u().bool,showToolbar:u().node.bool,onInit:u().func,styleService:u().object,userRole:u().string,editingAllowedRoles:u().array,enableSetDefaultStyle:u().bool,canEdit:u().bool,editorConfig:u().object}),_(R,"defaultProps",{layer:{},onInit:function(){},editingAllowedRoles:["ADMIN"],editorConfig:{}});var x=(0,b.compose)(b.toClass,(0,b.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.active;return!t}),(function(){return function(){return null}})),(0,y.connect)((0,d.P1)([E.ex,E.aN,E.Vf,E.p,j.L3,E.z_,E.Z0],(function(e,t,r,n,o,a,i){return{isEditing:"edit"===e,loading:t,layer:r,error:n,userRole:o,canEdit:a,styleService:i}})),{onInit:v.E0,onUpdateParams:m.Xy},(function(e,t,r){var n,o,a,i=(null===(n=r.styleService)||void 0===n?void 0:n.baseUrl)===(null===(o=e.styleService)||void 0===o?void 0:o.baseUrl)&&(null===(a=e.styleService)||void 0===a?void 0:a.isStatic),l=r.styleService&&!i?D(D({},r.styleService),{},{isStatic:!0}):D({},e.styleService);return D(D(D(D({},r),e),t),{},{styleService:l})})),(0,O.Z)((function(e){var t=e.error;return!!(null!=t&&t.availableStyles||null!=t&&t.global||null!=t&&t.parsingCapabilities)}),(function(e){var t=e.error;return{glyph:"exclamation-mark",title:p().createElement(g.Z,{msgId:"styleeditor.errorTitle"}),description:p().createElement(g.Z,{msgId:((null==t?void 0:t.availableStyles)?"styleeditor.missingAvailableStylesMessage":(null==t?void 0:t.parsingCapabilities)&&"styleeditor.parsingCapabilitiesError")||(null==t?void 0:t.global)&&"styleeditor.globalError"}),style:{display:"flex",width:"100%",height:"100%",overflow:"hidden"},mainViewStyle:{margin:"auto",width:300}}})),(0,S.Z)((function(e){return"global"===e.loading}),{size:150,style:{margin:"auto"}},(function(e){return p().createElement("div",{style:{position:"relative",height:"100%",display:"flex"}},p().createElement(w.Z,e))})),(0,b.compose)((0,y.connect)((function(){return{}}),{toggleStyleEditor:v.Wv}),(0,b.lifecycle)({componentDidMount:function(){this.props.toggleStyleEditor(null,!0)}})))(R);const Z={StyleEditorPlugin:s()(x,{TOC:{priority:1,container:"TOCItemSettings"},TOCItemsSettings:{name:"StyleEditor",target:"style",priority:1,ToolbarComponent:N.lC}}),reducers:{styleeditor:r(32244).Z},epics:r(94943).ZP}},32244:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(96909),o=r(47037),a=r.n(o);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.wL:return l(l({},e),{},{service:t.service,canEdit:t.canEdit});case n.Nm:return l(l({},e),{},{canEdit:t.canEdit});case n.gF:return l(l({},e),{},{temporaryId:t.temporaryId,templateId:t.templateId,code:t.code,format:t.format,error:null,languageVersion:t.languageVersion,initialCode:t.init?t.code:e.initialCode});case n.g$:return""===t.status?l(l({},e),{},{status:t.status,code:"",templateId:"",initialCode:"",addStyle:!1,error:{}}):l(l({},e),{},{status:t.status});case n.dJ:return{service:e.service&&l({},e.service)||{},canEdit:e.canEdit,loading:e.loading};case n.uz:return l(l({},e),{},{addStyle:t.add});case n.lX:return l(l({},e),{},{loading:!t.status||t.status});case n.E2:return l(l({},e),{},{loading:!1,enabled:!0});case n.mF:var r,o,i,c=(null==t||null===(r=t.error)||void 0===r?void 0:r.statusText)||(null==t||null===(o=t.error)||void 0===o?void 0:o.message)||"",u=a()(null==t||null===(i=t.error)||void 0===i?void 0:i.messageId)&&{messageId:t.error.messageId},f=c.match(/line\s([\d]+)|column\s([\d]+)|lineNumber:\s([\d]+)|columnNumber:\s([\d]+)/g),p=f&&2===f.length&&f.reduce((function(e,t){var r=t.split(" "),n=r[0].replace(/Number:/g,""),o=parseFloat(r[1]);return n&&!isNaN(o)&&l(l({},e),{},s({},n,o))||l({},e)}),l({message:c},u))||l({message:c},u);return l(l({},e),{},{loading:!1,canEdit:!(t.error&&(401===t.error.status||403===t.error.status||t.error.message&&-1!==t.error.message.indexOf("could not be unmarshalled"))),error:l(l({},e.error),{},s({},t.status||"global",l({status:t.error&&t.error.status||404},p)))});case n.dk:return l(l({},e),{},{metadata:l(l({},e.metadata),t.metadata)});default:return e}}}}]);