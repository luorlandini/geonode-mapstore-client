(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1003],{11766:(e,t,r)=>{"use strict";r.d(t,{H:()=>w,Z:()=>E});var n=r(24852),o=r.n(n),i=r(12961),l=r(13218),c=r.n(l),a=r(17621),s=r.n(a),u=r(57588),f=r(38560),p=r(25288),d=r(45869),m=r(5346),y=r(15402),b=r(15135),g=["boxShadow","MozBoxShadow","WebkitBoxShadow"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=(0,b.Z)(f.Z);function S(e){var t=e.themeStyle,r=e.disableBackgroundPicker,l=void 0!==r&&r,c=e.disableBackgroundAlpha,a=e.disableTextColor,f=e.disableShadow,b=e.onChange,h=void 0===b?function(){}:b,O=e.onOpen,S=void 0===O?function(){}:O,w=e.placement,E=(0,n.useRef)(),k=null==t?void 0:t.backgroundColor,j=null==t?void 0:t.color,P=!a&&k&&j&&!s().isReadable(j,k)?s().mostReadable(k,[j,"#000000","#ffffff"],{includeFallbackColors:!0}).toHexString():null;return o().createElement(o().Fragment,null,!l&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.backgroundColorLabel"})),o().createElement("div",null,o().createElement(i.Z,{placement:w,key:k,onOpen:S,color:k,format:c?"hex":"rgb",disableAlpha:c,presetColors:[],onChangeColor:function(e){var r=s()(e).isLight()?s()(e).darken(10).toHexString():s()(e).lighten(15).toHexString(),n=!a&&!(null!=t&&t.color)&&{color:s().mostReadable(e,["#000000","#ffffff"],{includeFallbackColors:!0}).toHexString()};h(v(v({},t),{},{backgroundColor:e,borderColor:r},!a&&n))}}))),!a&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.textColorLabel"})),o().createElement(p.Z,{className:"ms-custom-theme-picker-popover",ref:function(e){e&&(E.current=e.trigger)},placement:"top",content:o().createElement(o().Fragment,null,o().createElement(y.Z,{msgId:"geostory.customizeTheme.alternativeTextColorPopover",msgParams:{color:P}}),o().createElement(C,{bsSize:"xs",bsStyle:"primary",style:{margin:"auto",display:"block"},onClick:function(){var e,r;h(v(v({},t),{},{color:P})),null===(e=E.current)||void 0===e||null===(r=e.hide)||void 0===r||r.call(e)}},o().createElement(m.Z,{msgId:"geostory.customizeTheme.useAlternativeTextColor"})))},P&&o().createElement(C,{className:"square-button-md no-border",style:{display:P?"block":"none"}},o().createElement(u.Glyphicon,{glyph:"exclamation-mark"}))||o().createElement("div",null))),o().createElement("div",null,o().createElement(i.Z,{placement:w,key:j,color:j,onOpen:S,format:"hex",disableAlpha:!0,presetColors:[],onChangeColor:function(e){h(v(v({},t),{},{color:e}))}}))),!f&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.customizeTheme.shadowLabel"})),o().createElement("div",null,o().createElement(d.Z,{checked:null==t?void 0:t.boxShadow,onChange:function(){var e=t||{},r=e.boxShadow,n=(e.MozBoxShadow,e.WebkitBoxShadow,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,g));h(r?v({},n):v(v({},n),{},{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}))}}))))}function w(e){var t=e.selected,r=e.value,n=e.storyTheme,i=e.onUpdate,l=e.onActive,a=e.disableBackgroundAlpha,s=e.disableTextColor,f=e.disableShadow,p=function(e,n){var o=c()(t)&&t;return i("theme",v(v({},o),{},n?O({value:e},r,v({},n)):{value:e}))},d=n||{},y=d.color,b=d.backgroundColor,g=b&&{backgroundColor:b},h=v(v({},!s&&y&&{color:y}),g),w=(null==t?void 0:t.value)===r,E=(null==t?void 0:t[r])||h;return o().createElement(o().Fragment,null,w?o().createElement("div",{className:"ms-custom-theme-picker-menuitem-header"},o().createElement("div",null,o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"})),o().createElement(C,{tooltipId:"geostory.contentToolbar.customizeThemeRemoveLabel",className:"square-button-md no-border",onClick:function(e){e.stopPropagation(),p("")}},o().createElement(u.Glyphicon,{glyph:"trash"}))):o().createElement(o().Fragment,null,o().createElement(u.MenuItem,{active:w,onClick:function(){return p(r,E)}},o().createElement(m.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"}))),w&&o().createElement("div",{className:"ms-custom-theme-picker-menuitem"},o().createElement(S,{disableBackgroundAlpha:a,disableTextColor:s,disableShadow:f,themeStyle:E,onChange:function(e){return p(r,e)},onOpen:l})))}const E=S},25288:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(24852),o=r.n(n),i=r(45697),l=r.n(i),c=r(57588),a=r(63202);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,r,n,i,l=(n=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(n);if(i){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function s(){var e;u(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(m(e=l.call.apply(l,[this].concat(r))),"getContainerNode",(function(){return e.parentNode||document.querySelector("."+(a.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body})),e}return t=s,(r=[{key:"render",value:function(){var e=this;return o().createElement("div",{ref:function(t){e.parentNode=t&&t.parentNode},className:this.props.className,style:this.props.style},o().createElement(c.OverlayTrigger,{ref:function(t){e.trigger=t},trigger:["click"],container:this.getContainerNode(),placement:this.props.placement,rootClose:!0,overlay:o().createElement(c.Popover,{id:this.props.id,title:this.props.title,className:this.props.popoverClassName},this.props.content)},this.props.children))}}])&&f(t.prototype,r),s}(o().Component);b(g,"propTypes",{id:l().string,style:l().object,className:l().string,popoverClassName:l().string,placement:l().string,title:l().node,content:l().node}),b(g,"defaultProps",{id:""});const h=g},1262:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(27418),o=r.n(n),i=r(45697),l=r.n(i),c=r(24852),a=r.n(c),s=r(80307),u=r.n(s),f=r(57588),p=r(38560),d=r(5346),m=r(7472);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,r,n,i,l=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(n);if(i){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return v(this,e)});function c(){var e;b(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return S(O(e=l.call.apply(l,[this].concat(r))),"setConfirmRef",(function(t){return e.confirm=t,e.confirm})),e}return t=c,(r=[{key:"componentDidMount",value:function(){this.props.focusConfirm&&u().findDOMNode(this.confirm).focus()}},{key:"render",value:function(){return a().createElement(m.Z,{draggable:this.props.draggable,onClickOut:this.props.onClose,id:"confirm-dialog",modal:this.props.modal,style:o()({},this.props.style,{display:this.props.show?"block":"none"})},a().createElement("span",{role:"header"},a().createElement("span",{className:"user-panel-title"},this.props.title),a().createElement("button",{onClick:this.props.onClose,className:"login-panel-close close"},this.props.closeGlyph?a().createElement(f.Glyphicon,{glyph:this.props.closeGlyph}):a().createElement("span",null,"×"))),a().createElement("div",{role:"body"},this.props.children),a().createElement("div",{role:"footer"},a().createElement(f.ButtonGroup,null,a().createElement(p.Z,{ref:this.setConfirmRef,onClick:this.props.onConfirm,disabled:this.props.confirmButtonDisabled,bsStyle:this.props.confirmButtonBSStyle},this.props.confirmButtonContent),a().createElement(p.Z,{onClick:this.props.onClose},this.props.closeText))))}}])&&g(t.prototype,r),c}(a().Component);S(w,"propTypes",{show:l().bool,draggable:l().bool,onClose:l().func,onConfirm:l().func,onSave:l().func,modal:l().bool,closeGlyph:l().string,style:l().object,buttonSize:l().string,inputStyle:l().object,title:l().node,confirmButtonContent:l().node,confirmButtonDisabled:l().bool,closeText:l().node,confirmButtonBSStyle:l().string,focusConfirm:l().bool}),S(w,"defaultProps",{onClose:function(){},onChange:function(){},modal:!0,title:a().createElement(d.Z,{msgId:"confirmTitle"}),closeGlyph:"",confirmButtonBSStyle:"danger",confirmButtonDisabled:!1,confirmButtonContent:a().createElement(d.Z,{msgId:"confirm"})||"Confirm",closeText:a().createElement(d.Z,{msgId:"close"}),includeCloseButton:!0,focusConfirm:!1});const E=w},7472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>k});var n=r(27418),o=r.n(n),i=r(45697),l=r.n(i),c=r(24852),a=r.n(c),s=r(85294),u=r.n(s),f=r(72986),p=r.n(f),d=r(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,e);var t,r,n,i,l=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(n);if(i){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function c(){var e;g(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return w(C(e=l.call.apply(l,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?a().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},a().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},a().createElement(d.Z,{msgId:"loading"}),a().createElement(p(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),w(C(e),"renderRole",(function(t){return a().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),w(C(e),"hasRole",(function(t){return a().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),w(C(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=c,(r=[{key:"render",value:function(){var e=this,t=a().createElement("div",{id:this.props.id,style:b({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},a().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),a().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?a().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):a().createElement("span",null)),r=this.props.draggable?a().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?a().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&h(t.prototype,r),c}(a().Component);w(E,"propTypes",{id:l().string.isRequired,style:l().object,backgroundStyle:l().object,className:l().string,maskLoading:l().bool,containerClassName:l().string,headerClassName:l().string,bodyClassName:l().string,footerClassName:l().string,onClickOut:l().func,modal:l().bool,start:l().object,draggable:l().bool,bounds:l().oneOfType([l().string,l().object])}),w(E,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const k=E},99534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(61365),o=r(56936);const i=(0,n.Z)(o.h_)},12122:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(24852),o=r.n(n),i=r(1262),l=r(99534),c=r(5346),a=r(67076),s=["confirming","confirmYes","confirmNo","confirmTitle","confirmContent","confirmModal","draggable","onConfirm","setConfirming"];var u=(0,a.compose)((0,a.withProps)((function(e){var t=e.setConfirming;return{onClose:function(){return t(!1)}}})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.confirmYes,r=void 0===t?o().createElement(c.Z,{msgId:"yes"}):t,n=e.confirmNo,a=void 0===n?o().createElement(c.Z,{msgId:"no"}):n,s=e.confirmTitle,u=void 0===s?o().createElement(c.Z,{msgId:"confirm"}):s,f=e.confirmContent,p=e.confirmButtonBSStyle,d=void 0===p?"primary":p,m=e.show,y=void 0!==m&&m,b=e.confirmModal,g=void 0===b||b,h=e.draggable,v=void 0!==h&&h,O=e.onClose,C=void 0===O?function(){}:O,S=e.onConfirm,w=void 0===S?function(){}:S;return y?o().createElement(l.Z,null,o().createElement("div",{className:"with-confirm-modal"},o().createElement(i.Z,{draggable:v,show:y,modal:g,onClose:C,onConfirm:w,title:u,confirmButtonContent:r,closeText:a,confirmButtonBSStyle:d,closeGlyph:"1-close"},f))):null})),f=function(e){return function(t){var r=t.confirming,n=t.confirmYes,i=t.confirmNo,l=t.confirmTitle,c=t.confirmContent,a=t.confirmModal,f=t.draggable,p=t.onConfirm,d=t.setConfirming,m=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,s);return o().createElement(o().Fragment,null,o().createElement(u,{show:r,setConfirming:d,confirmYes:n,confirmNo:i,confirmTitle:l,confirmContent:c,confirmModal:a,draggable:f,onConfirm:p}),o().createElement(e,m))}};const p=function(e){return(0,a.compose)((0,a.withState)("confirming","setConfirming",!1),(0,a.withHandlers)({onClick:function(e){var t=e.setConfirming,r=void 0===t?function(){}:t,n=e.onClick,o=void 0===n?function(){}:n,i=e.confirmPredicate,l=void 0===i||i;return function(){l?r(!0):o.apply(void 0,arguments)}},onConfirm:function(e){var t=e.onClick,r=void 0===t?function(){}:t,n=e.setConfirming,o=void 0===n?function(){}:n;return function(){o(!1),r.apply(void 0,arguments)}}}),f)(e)}},57037:(e,t,r)=>{"use strict";r.d(t,{Z:()=>C});var n=r(24852),o=r.n(n),i=r(45697),l=r.n(i),c=r(23560),a=r.n(c),s=r(24198),u=r(17621),f=r.n(u),p=r(80307),d=r(63202);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],l=!0,c=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e){var t=e.value,r=e.format,i=e.onChangeColor,l=e.text,c=e.line,u=e.disabled,d=e.pickerProps,y=e.containerNode,g=e.onOpen,v=e.placement,O=10,C={picker:{opacity:0},arrow:{opacity:0},overlay:{}},S=h((0,n.useState)(),2),w=S[0],E=S[1],k=h((0,n.useState)(C),2),j=k[0],P=k[1],N=h((0,n.useState)(),2),x=N[0],T=N[1],Z=f()(t).toString(),R=a()(y)?y():y;(0,n.useEffect)((function(){var e=w&&f()(w).toString();e&&Z&&Z!==e&&E(t)}),[Z]),(0,n.useEffect)((function(){g(x),x||P(C)}),[x]);var I=(0,n.useRef)(),B=(0,n.useRef)();function A(){var e,t,r,n,o,i,l;if("center"===v)return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}};var c=null==I||null===(e=I.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e),a=null==B||null===(r=B.current)||void 0===r||null===(n=r.getBoundingClientRect)||void 0===n?void 0:n.call(r),s=null==B||null===(o=B.current)||void 0===o||null===(i=o.querySelector)||void 0===i?void 0:i.call(o,".ms-sketch-picker"),u=null==s||null===(l=s.getBoundingClientRect)||void 0===l?void 0:l.call(s);if(c&&a&&u){var f,p,d,m,y=u.width,b=u.height,g=a.top,h=a.left,C=a.width,S=a.height,w=c.top,E=c.left,k=c.width,j=c.height,P=[E+k/2,w+j/2],N=P[0]-h>y/2+O&&h+C-P[0]>y/2+O,x=P[1]-g>b/2+O&&g+S-P[1]>b/2+O,T={top:{filter:function(){return N&&w-g>b+O},styles:function(){return{picker:{position:"absolute",top:w-b-O-g,left:E+k/2-y/2-h},overlay:{},arrow:{top:w+2,left:E+k/2,transform:"translate(-50%, -50%) rotateZ(270deg) translateX(50%)"}}}},right:{filter:function(){return x&&h+C-(E+k)>y+O},styles:function(){return{picker:{position:"absolute",top:w-b/2-g,left:E+k+O-h},overlay:{},arrow:{top:w+j/2,left:E+k-2,transform:"translate(-50%, -50%) rotateZ(0deg) translateX(50%)"}}}},bottom:{filter:function(){return N&&g+S-(w+j)>b+O},styles:function(){return{picker:{position:"absolute",top:w+j+O-g,left:E+k/2-y/2-h},overlay:{},arrow:{top:w+j-2,left:E+k/2,transform:"translate(-50%, -50%) rotateZ(90deg) translateX(50%)"}}}},left:{filter:function(){return x&&E-h>y+O},styles:function(){return{picker:{position:"absolute",top:w-b/2-g,left:E-y-O-h},overlay:{},arrow:{top:w+j/2,left:E+2,transform:"translate(-50%, -50%) rotateZ(180deg) translateX(50%)"}}}}};if(null!=T&&null!==(f=T[v])&&void 0!==f&&null!==(p=f.filter)&&void 0!==p&&p.call(f))return null==T||null===(d=T[v])||void 0===d||null===(m=d.styles)||void 0===m?void 0:m.call(d);if("top"!==v&&T.top.filter())return T.top.styles();if("right"!==v&&T.right.filter())return T.right.styles();if("bottom"!==v&&T.bottom.filter())return T.bottom.styles();if("left"!==v&&T.left.filter())return T.left.styles()}return{picker:{},overlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},arrow:{opacity:0}}}(0,n.useEffect)((function(){var e=function(){return P(A())};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){x&&P(A())}),[x]);var _,D,z=u?" ms-disabled":"",L=o().createElement("div",{ref:B,className:"ms-color-picker-overlay",style:b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",top:0,left:0},null==j?void 0:j.overlay)},o().createElement("div",{className:"ms-color-picker-cover",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0},onClick:function(){T(!1),w&&i(r?f()(w).toString(r):w)}}),o().createElement(s.xS,m({},d,{className:"ms-sketch-picker",styles:{picker:b({width:200,padding:"10px 10px 0",boxSizing:"initial"},null==j?void 0:j.picker)},color:f()(w||t).toRgb(),onChange:function(e){return E(e.rgb)}})),o().createElement("div",{className:"ms-sketch-picker-arrow",style:b({position:"absolute",borderWidth:12},null==j?void 0:j.arrow)})),M=R?(0,p.createPortal)(L,R):L;return o().createElement("div",{className:"ms-color-picker".concat(z)},o().createElement("div",{className:"ms-color-picker-swatch",ref:I,style:(_=w||t||"transparent",D=f()(_).toRgbString(),c?{boxSizing:"border-box",border:"4px solid ".concat(D),backgroundColor:"transparent"}:{color:"transparent"===_?"#000000":f().mostReadable(D,["#000000"],{includeFallbackColors:!0}).toHexString(),backgroundColor:D}),onClick:function(){u||(T(!x),w&&i(r?f()(w).toString(r):w))}},l),x?M:null)}O.propTypes={value:l().oneOfType([l().string,l().shape({r:l().number,g:l().number,b:l().number,a:l().number})]),format:l().string,onChangeColor:l().func,text:l().string,line:l().bool,disabled:l().bool,pickerProps:l().object,containerNode:l().oneOfType([l().node,l().func]),onOpen:l().function,placement:l().string},O.defaultProps={disabled:!1,line:!1,onChangeColor:function(){},pickerProps:{},onOpen:function(){},containerNode:function(){return document.querySelector("."+((0,d.u8)("themePrefix")||"ms2")+" > div")||document.body}};const C=O},12961:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(24852),o=r.n(n),i=r(45697),l=r.n(i),c=r(57588),a=r(57037);function s(e){var t=e.color,r=e.format,n=e.line,i=e.onChangeColor,l=e.disableAlpha,s=e.containerNode,u=e.onOpen,f=e.presetColors,p=e.placement;return o().createElement("div",{className:"ms-color-selector"},o().createElement(a.Z,{text:o().createElement(c.Glyphicon,{glyph:"dropper"}),format:r,line:n,value:t,onChangeColor:i,pickerProps:{disableAlpha:l,presetColors:f},containerNode:s,onOpen:u,placement:p}))}s.propTypes={color:l().oneOfType([l().string,l().shape({r:l().number,g:l().number,b:l().number,a:l().number})]),format:l().string,line:l().bool,onChangeColor:l().func,disableAlpha:l().bool,containerNode:l().node,onOpen:l().func,presetColors:l().array,placement:l().string},s.defaultProps={line:!1,onChangeColor:function(){},onOpen:function(){}};const u=s},66190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var n=r(27361),o=r.n(n),i=r(47037),l=r.n(i),c=r(81763),a=r.n(c),s=r(30998),u=r.n(s),f=r(13311),p=r.n(f),d=r(68630),m=r.n(d),y=r(1469),b=r.n(y),g=r(84596),h=r.n(g),v=r(19155),O=r.n(v),C=r(61868),S=r(92579),w=r(34990);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=function(e,t){var r=e.length,n=0;return t||0===t||(n=r),l()(t)?n=u()(e,{id:t})+1:a()(t)&&(n=Math.min(t,e.length)),n},T=function e(t,r,n){var o=n.contents,i=n.background,l=n.id,c=n.resourceId,a=[],s=r+'{"id": "'.concat(l,'"}]');return c===t?[s]:(i&&i.resourceId===t&&a.push(s+".background"),o?o.reduce((function(r,n){return[].concat(P(r),P(e(t,s+".contents[",n)))}),a):a)},Z={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.D7:var r=t.id,n=t.path,i=t.position,c=t.element,a=(0,S.Ll)("currentStory.".concat(n),e),s=o()(e,a,[]),u=x(s,i),f=s.slice();return f.splice(u,0,k({id:r},c)),(0,C.t8)(a,f,e);case w.mN:var d=t.id,y=t.mediaType,g=t.data;return(0,C.t8)("currentStory.resources",O()([{id:d,type:y,data:g}].concat(P(e.currentStory&&e.currentStory.resources||[])),"id"),e);case w.vb:return(0,C.t8)("mode",t.mode,e);case w.QK:var v=t.id,E=t.mediaType,N=t.data,R=(0,C.cc)("currentStory.resources",{id:v,type:E,data:N},{id:v},e);return E===S.Tr.MAP&&e.currentStory.sections.reduce((function(e,t){return[].concat(P(e),P(T(v,"sections[",t)))}),[]).map((function(t){var r=(0,S.Ll)("currentStory.".concat(t,".map"),e);R=(0,C.t8)(r,void 0,R)})),R;case w.Ro:var I=t.id,B=t.mediaType,A=(0,C.z6)("currentStory.resources",{id:I},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(P(e),P(T(I,"sections[",t)))}),[]).map((function(t){var r=(0,S.Ll)("currentStory.".concat(t,".resourceId"),e);if(A=(0,C.zN)(r,A),B===S.Tr.MAP){var n=(0,S.Ll)("currentStory.".concat(t,".map"),e);A=(0,C.zN)(n,A)}})),A;case w.lX:return(0,C.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,C.t8)("loading",t.value,e));case w.Dq:var _=t.path,D=(0,S.Ll)("currentStory.".concat(_),e),z=P(D),L=z.pop(),M=o()(e,z);return b()(M)?(l()(L)&&(L=parseInt(L,10)),(0,C.t8)(z,[].concat(P(M.slice(0,L)),P(M.slice(L+1))),e)):(0,C.zN)(D,e);case w.ij:var F,G,q,H,U,Y=e.defaultSettings||{},X=t.story.settings||Y,W=(null===(F=X)||void 0===F||null===(G=F.theme)||void 0===G?void 0:G.fontFamilies)||[],K=null===(q=e.currentStory)||void 0===q||null===(H=q.settings)||void 0===H||null===(U=H.theme)||void 0===U?void 0:U.fontFamilies;return K&&K.length>0&&(X=(0,C.t8)("theme.fontFamilies",O()([].concat(P(K),P(W)),"family"),X)),(0,C.t8)("currentStory",k(k({},t.story),{},{settings:X}),e);case w.i2:return(0,C.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case w.IY:var Q=t.control,$=t.value;return(0,C.t8)("controls.".concat(Q),$,e);case w.Zf:var J=t.resource,V=e.currentStory&&e.currentStory.settings||{};return(0,C.qC)((0,C.t8)("resource",J),(0,C.t8)("currentStory.settings.storyTitle",V.storyTitle||J.name))(e);case w.si:case w.KT:return(0,C.zN)("errors.save",e);case w.SW:return(0,C.t8)("errors.save",h()(t.error),e);case w.Mk:return(0,C.t8)("isCollapsed",!e.isCollapsed,e);case w.NZ:var ee=o()(e,"currentStory.settings.".concat(t.option));return(0,C.t8)("currentStory.settings.".concat(t.option),!ee,e);case w.c:var te=!e.isSettingsEnabled,re=e.currentStory&&e.currentStory.settings||{};return(0,C.qC)((0,C.t8)("isSettingsEnabled",te),(0,C.t8)("oldSettings",te?re:{}),(0,C.t8)("currentStory.settings",te?k({},re):t.withSave?re:e.oldSettings))(e);case w.wb:var ne=t.path,oe=t.mode,ie=t.element,le=(0,S.Ll)("currentStory.".concat(ne),e),ce=o()(e,le);return m()(ce)&&m()(ie)&&"merge"===oe&&(ie=k(k({},ce),ie)),b()(ce)&&b()(ie)&&"merge"===oe&&(ie=[].concat(P(ce),P(ie))),(0,C.t8)(le,ie,e);case w.km:return(0,C.t8)("currentStory.settings.".concat(t.prop),t.value,e);case w.un:if(t.columnId){var ae=p()(e.currentStory.sections,(function(e){return p()(e.contents,{id:t.columnId})}));return ae&&p()(ae.contents,{id:t.columnId})?(0,C.t8)("currentPage",k(k({},e.currentPage),{},{columns:k(k({},e.currentPage.columns),{},j({},ae.id,t.columnId))}),e):e}return(0,C.t8)("currentPage",k(k({},e.currentPage),{},{sectionId:t.sectionId}),e);case w.Cx:var se=t.status,ue=t.target,fe=t.selector,pe=void 0===fe?"":fe,de=t.hideContent,me=void 0!==de&&de,ye=t.path,be=se?{target:ue,selector:pe,hideContent:me,path:ye}:void 0;return(0,C.t8)("focusedContent",be,e);case w.jr:return(0,C.t8)("pendingChanges",t.value,e);case w.ZY:return(0,C.t8)("updateUrlOnScroll",t.value,e);case w.EQ:return(0,C.t8)("mediaEditorSettings",t.mediaEditorSettings,e);default:return e}}},31398:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var n=r(97395),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"notification.warning":t,o=e.autoDismiss,i=void 0===o?6:o,l=e.position,c=void 0===l?"tc":l,a=e.message,s=void 0===a?"Error":a;return(0,n.vU)({title:r,autoDismiss:i,position:c,message:s})}}}]);