(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4745],{7472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(27418),o=r.n(n),l=r(45697),a=r.n(l),i=r(24852),s=r.n(i),c=r(85294),u=r.n(c),p=r(72986),f=r.n(p),d=r(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,r,n,l,a=(n=i,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(l){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function i(){var e;v(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return w(E(e=a.call.apply(a,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?s().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},s().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},s().createElement(d.Z,{msgId:"loading"}),s().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),w(E(e),"renderRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),w(E(e),"hasRole",(function(t){return s().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),w(E(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=i,(r=[{key:"render",value:function(){var e=this,t=s().createElement("div",{id:this.props.id,style:b({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},s().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),s().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?s().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):s().createElement("span",null)),r=this.props.draggable?s().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?s().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&h(t.prototype,r),i}(s().Component);w(N,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),w(N,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const P=N},32425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(45697),o=r.n(n),l=r(24852),a=r.n(l);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,l=e.hidden;return a().createElement("div",{className:o,style:s({width:t,height:t,overflow:"hidden"},n)},!l&&a().createElement("div",{className:"mapstore-".concat(u(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p},75480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(24852),o=r.n(n);const l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},94745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(24852),o=r.n(n),l=r(57588),a=r(7472),i=r(80717),s=r(67076),c=r(19081),u=r.n(c),p=r(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},d={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const m=(0,s.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,s=e.loadingText,c=e.onClose,m=void 0===c?function(){}:c,y=e.title,b=void 0===y?"":y,v=e.clickOutEnabled,h=void 0===v||v,g=e.showClose,O=void 0===g||g,E=e.disabledClose,j=void 0!==E&&E,w=e.showFullscreen,N=void 0!==w&&w,P=e.fullscreenType,C=void 0===P?"full":P,k=e.buttons,S=void 0===k?[]:k,x=e.size,z=void 0===x?"":x,R=e.bodyClassName,Z=void 0===R?"":R,_=e.children,T=e.draggable,D=void 0!==T&&T,I=e.fullscreenState,B=e.onFullscreen,L=e.fade,F=void 0!==L&&L,G=e.fitContent,A=e.modalClassName,W=void 0===A?"":A,q=e.dialogClassName,Y=void 0===q?"":q,H=e.enableFooter,J=void 0===H||H,K=f[z]||"",M=N&&"expanded"===I&&d.className[C]||"",Q=r?o().createElement("div",{className:"modal-fixed ".concat(W," ")+(D?"ms-draggable":"")},o().createElement(a.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?m:function(){},containerClassName:"ms-resizable-modal",draggable:D,modal:!0,className:"modal-dialog modal-content"+K+M+Y+(G?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},b),N&&d.className[C]&&o().createElement(l.Glyphicon,{className:"ms-header-btn",onClick:function(){return B("expanded"===I?"collapsed":"expanded")},glyph:d.glyph[I][C]}),O&&m&&o().createElement(l.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:m,disabled:j}))),o().createElement("div",{role:"body",className:Z},_),J&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(p.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?s:null),o().createElement(i.Z,{buttons:S})))):null;return F?o().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Q):Q}))},12610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(24852),o=r.n(n),l=r(67076),a=r(57557),i=r.n(a),s=r(15135);const c=(0,l.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled,n=void 0!==r&&r;return!(n&&t)}),s.Z,(function(e){return function(t){return o().createElement(e,i()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},17252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(24852),o=r.n(n),l=r(67076),a=r(45697),i=r.n(a),s=r(57557),c=r.n(s),u=r(57588),p=r(50966);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const g=(0,l.branch)((function(e){return e.popover}),(function(e){var t,r;return r=t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(f,t);var r,n,a,i,s=(a=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(a);if(i){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return b(this,e)});function f(){return d(this,f),s.apply(this,arguments)}return r=f,(n=[{key:"renderPopover",value:function(){return o().createElement(u.Popover,c()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,l.toClass)(e);return o().createElement(t,c()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&m(r.prototype,n),f}(o().Component),h(t,"propTypes",{popover:i().object}),h(t,"defaultProps",{popover:{trigger:!0}}),r}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(24852),o=r.n(n),l=r(19081),a=r.n(l),i=r(57588),s=r(90085),c=["visible","Element","renderButton"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,l=void 0===n?{}:n,f=e.btnDefaultProps,d=void 0===f?{}:f,m=e.transitionProps,y=void 0===m?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:m,b=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,l=e.Element,a=e.renderButton,i=p(e,c);return n?a||l&&o().createElement(l,u({key:i.key||t},i))||o().createElement(s.Z,u({key:i.key||t},d,i)):null}))};return o().createElement(i.ButtonGroup,l,y?o().createElement(a(),y,b()):b())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(24852),o=r.n(n),l=r(67076),a=r(5346),i=r(57557),s=r.n(i),c=r(57588),u=r(32425),p=r(12610),f=r(17252),d=r(82467),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const v=(0,l.compose)(p.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,l=void 0===n?"":n,i=e.textId,p=e.glyphClassName,f=void 0===p?"":p,v=e.loaderProps,h=void 0===v?{}:v,g=e.children,O=b(e,m);return o().createElement(d.Z,s()(O,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(c.Glyphicon,{glyph:t,className:f}):null,i?o().createElement(a.Z,{msgId:i}):l,r?o().createElement(u.Z,y({className:"ms-loader".concat(O.bsStyle&&" ms-loader-"+O.bsStyle||"").concat(O.bsSize&&" ms-loader-"+O.bsSize||"")},h)):null,g)}))}}]);