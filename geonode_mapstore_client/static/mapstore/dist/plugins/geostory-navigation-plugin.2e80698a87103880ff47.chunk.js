(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8710],{81593:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(24852),o=r(45338);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const f=function(e){var t=e.direction,r=void 0===t?"horizontal":t,i=e.deltaScroll,u=e.width,d=e.height,f=e.transition,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],m=(0,n.useState)(0),y=s(m,2),v=y[0],g=y[1],h=(0,n.useState)(0),b=s(h,2),O=b[0],w=b[1],S=(0,n.useRef)({x:0,y:0}),E=(0,n.useState)(!1),C=s(E,2),j=C[0],P=C[1],I=(0,n.useState)("start"),N=s(I,2),k=N[0],x=N[1],A=(0,n.useState)(),D=s(A,2),R=D[0],T=D[1],z=(0,n.useRef)(),M=(0,n.useRef)({});function L(e,t){T("move:start");var n=z.current,o=n.parentNode,i=n.getBoundingClientRect(),a=o.getBoundingClientRect();if("horizontal"===r){var c=e+i.width;e<0&&c>a.width?(g(e),S.current.x=e,x("center")):e>=0?(g(0),S.current.x=0,x("start")):c<=a.width&&(g(a.width-i.width),S.current.x=a.width-i.width,x("end"))}if("vertical"===r){var l=t+i.height;t<0&&l>a.height?(w(t),S.current.y=t,x("center")):t>=0?(w(0),S.current.y=0,x("start")):l<=a.height&&(w(a.height-i.height),S.current.y=a.height-i.height,x("end"))}setTimeout((function(){T("move:end")}),f)}function U(e){L(v+e,O+e)}function Z(){var e=z.current,t=e.parentNode,n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return!("horizontal"===r&&o.width>=n.width||"vertical"===r&&o.height>=n.height)}(0,n.useEffect)((function(){function e(e){e.preventDefault();var t=Z();return P(Z()),t?L(S.current.x-(e.deltaY>0?i:-i),S.current.y-(e.deltaY>0?i:-i)):null}var t=Z();P(t);var r=z.current.parentNode;return t&&L(S.current.x,S.current.y),t&&r&&r.addEventListener&&r.addEventListener("wheel",e),function(){t&&r&&r.removeEventListener&&r.removeEventListener("wheel",e)}}),[u,d].concat(l(p)));var _=(0,o.QS)({onSwiping:function(e){e.event.stopPropagation();var t=Z();return P(Z()),t?L(v-e.deltaX*e.velocity,O-e.deltaY*e.velocity):null},trackTouch:!0,trackMouse:!0});function B(e,t){M.current=a(a({},M.current),{},c({},e,t))}function F(e){var t=M.current[e];if(t){var n=z.current,o=(n&&n.parentNode).getBoundingClientRect(),i=t.getBoundingClientRect();if("horizontal"===r){var a=o.width,c=o.left,l=i.width,s=i.left,u=c+a,d=s+l;return c<=s&&u>=s||c<=d&&u>=d}}return!1}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.margin,o=void 0===n?0:n,i=M.current[e];if(i){var a=z.current,c=a&&a.parentNode,l=c.getBoundingClientRect(),s=i.getBoundingClientRect();if("horizontal"===r){var u=l.width,d=l.left,f=s.width,p=s.left,m=d+u,y=p+f,v=d<=p&&m>=y;if(!v){var g=a.getBoundingClientRect(),h=g.left;L(-(p-h)+o,void 0)}}}}var H=j&&("end"===k||"center"===k),K=j&&("start"===k||"center"===k);return{status:R,canSwipe:j,isStartControlActive:H,isEndControlActive:K,positionLabel:k,coordinates:{x:v,y:O},containerPropsHandlers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{}:t;return a(a({},_),{},{style:a({position:"relative",overflow:"hidden",width:"100%",height:"100%"},r)})},contentPropsHandlers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{}:t;return{ref:z,style:a(a(a(a({position:"absolute",display:"flex"},f&&{transition:"transform ".concat(f,"ms ease 0s")}),{},{flexDirection:"horizontal"===r?"row":"column"},j&&"horizontal"===r&&{transform:"translateX(".concat(v,"px)")}),j&&"vertical"===r&&{transform:"translateY(".concat(O,"px)")}),n)}},itemPropsHandlers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,r=e.onClick;return a({key:t,ref:function(e){return e&&B(t,e)}},r?{onClick:r,tabindex:F(t)?0:-1,onKeyDown:function(e){"Enter"===e.key&&r()}}:{tabindex:-1})},updateCoordinates:L,moveItemInViewById:q,moveToDeltaSize:U}}},7472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(27418),o=r.n(n),i=r(45697),a=r.n(i),c=r(24852),l=r.n(c),s=r(85294),u=r.n(s),d=r(72986),f=r.n(d),p=r(5346);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(c,e);var t,r,n,i,a=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(n);if(i){var r=S(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return O(this,e)});function c(){var e;g(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return E(w(e=a.call.apply(a,[this].concat(r))),"renderLoading",(function(){return e.props.maskLoading?l().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},l().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},l().createElement(p.Z,{msgId:"loading"}),l().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),E(w(e),"renderRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),E(w(e),"hasRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),E(w(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=c,(r=[{key:"render",value:function(){var e=this,t=l().createElement("div",{id:this.props.id,style:v({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},l().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),l().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?l().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):l().createElement("span",null)),r=this.props.draggable?l().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?l().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&h(t.prototype,r),c}(l().Component);E(C,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),E(C,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const j=C},75480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(24852),o=r.n(n);const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:r,className:"mapstore-inline-loader"})}},94745:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(24852),o=r.n(n),i=r(57588),a=r(7472),c=r(80717),l=r(67076),s=r(19081),u=r.n(s),d=r(75480),f={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},p={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const m=(0,l.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,r=void 0!==t&&t,n=e.loading,l=e.loadingText,s=e.onClose,m=void 0===s?function(){}:s,y=e.title,v=void 0===y?"":y,g=e.clickOutEnabled,h=void 0===g||g,b=e.showClose,O=void 0===b||b,w=e.disabledClose,S=void 0!==w&&w,E=e.showFullscreen,C=void 0!==E&&E,j=e.fullscreenType,P=void 0===j?"full":j,I=e.buttons,N=void 0===I?[]:I,k=e.size,x=void 0===k?"":k,A=e.bodyClassName,D=void 0===A?"":A,R=e.children,T=e.draggable,z=void 0!==T&&T,M=e.fullscreenState,L=e.onFullscreen,U=e.fade,Z=void 0!==U&&U,_=e.fitContent,B=e.modalClassName,F=void 0===B?"":B,q=e.dialogClassName,H=void 0===q?"":q,K=e.enableFooter,$=void 0===K||K,G=f[x]||"",V=C&&"expanded"===M&&p.className[P]||"",Y=r?o().createElement("div",{className:"modal-fixed ".concat(F," ")+(z?"ms-draggable":"")},o().createElement(a.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:h?m:function(){},containerClassName:"ms-resizable-modal",draggable:z,modal:!0,className:"modal-dialog modal-content"+G+V+H+(_?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},v),C&&p.className[P]&&o().createElement(i.Glyphicon,{className:"ms-header-btn",onClick:function(){return L("expanded"===M?"collapsed":"expanded")},glyph:p.glyph[M][P]}),O&&m&&o().createElement(i.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:m,disabled:S}))),o().createElement("div",{role:"body",className:D},R),$&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},n?o().createElement(d.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},n?l:null),o().createElement(c.Z,{buttons:N})))):null;return Z?o().createElement(u(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},Y):Y}))},26538:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>$});var n=r(24852),o=r.n(n),i=r(71703),a=r(22222),c=r(22843),l=r(92579),s=r(66113),u=r(24684),d=r(66190),f=r(80717),p=r(57588),m=r(23279),y=r.n(m),v=r(81593),g=r(80628),h=r(82467);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var O=function(e){var t=e.tabindex,r=e.text,n=e.selected,i=e.style;return o().createElement(h.Z,{tabindex:t,className:"".concat(n?"active":"btn-tray"," btn-xs btn-default"),style:i},r)};const w=(0,g.Z)((function(e){var t=e.currentPage,r=e.items,i=e.scrollTo,a=void 0===i?function(){}:i,c=e.width,l=e.height,s=e.deltaSwipeSize,u=void 0===s?200:s,d=e.transition,f=void 0===d?300:d,m=e.updateTimeDebounceTime,g=void 0===m?500:m,w=e.getItemStyle,S=void 0===w?function(){return{}}:w,E=(0,v.Z)({direction:"horizontal",width:c,height:l,transition:f,deltaScroll:u}),C=E.isStartControlActive,j=E.isEndControlActive,P=E.containerPropsHandlers,I=E.contentPropsHandlers,N=E.itemPropsHandlers,k=E.moveToDeltaSize,x=E.moveItemInViewById,A=t&&t.columns&&t.sectionId&&t.columns[t.sectionId]||t&&t.sectionId,D=(0,n.useRef)(null);return(0,n.useEffect)((function(){return D.current=y()((function(e){x(e,{margin:32})}),g),function(){D.current&&(D.current.cancel(),D.current=null)}}),[]),(0,n.useEffect)((function(){D.current&&(D.current.cancel(),D.current(A))}),[A]),o().createElement("div",b({},P(),{className:"ms-horizontal-menu"}),o().createElement("div",I(),r.map((function(e){var r=e.title,n=e.id,i=N({id:n,onClick:function(){t&&t.sectionId!==n&&a(n)}});return o().createElement("div",b({},i,{className:"ms-menu-item"}),o().createElement(O,{tabindex:"-1",id:n,text:r||"title",selected:n===A,style:S(n===A)}))}))),C&&o().createElement(h.Z,{className:"square-button-md no-border",style:{position:"absolute"},onClick:function(){return k(u)}},o().createElement(p.Glyphicon,{glyph:"chevron-left"})),j&&o().createElement(h.Z,{className:"square-button-md no-border",style:{position:"absolute",right:0},onClick:function(){return k(-u)}},o().createElement(p.Glyphicon,{glyph:"chevron-right"})))}));var S=r(45697),E=r.n(S),C=r(50966),j=r(5346),P=r(94745);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var N=["tooltipPosition"];function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(c,e);var t,r,n,i,a=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(n);if(i){var r=z(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return R(this,e)});function c(){var e;x(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return M(T(e=a.call.apply(a,[this].concat(r))),"checkUnsavedChanges",(function(){e.props.renderUnsavedMapChangesDialog?e.props.onCheckMapChanges(e.goHome):(e.props.onCloseUnsavedDialog(),e.goHome())})),M(T(e),"goHome",(function(){e.context.router.history.push("/")})),e}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=e.tooltipPosition,r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,N),n=o().createElement(p.Tooltip,{id:"toolbar-home-button"},o().createElement(j.Z,{msgId:"gohome"}));return o().createElement(o().Fragment,null,o().createElement(C.Z,{overlay:n,placement:t},o().createElement(h.Z,k({id:"home-button",className:"square-button",bsStyle:"primary",onClick:this.checkUnsavedChanges,tooltip:n},r),this.props.icon)),o().createElement(P.Z,{ref:"unsavedMapModal",show:this.props.displayUnsavedDialog||!1,onClose:this.props.onCloseUnsavedDialog,title:o().createElement(j.Z,{msgId:"resources.maps.unsavedMapConfirmTitle"}),buttons:[{bsStyle:"primary",text:o().createElement(j.Z,{msgId:"resources.maps.unsavedMapConfirmButtonText"}),onClick:this.goHome},{text:o().createElement(j.Z,{msgId:"resources.maps.unsavedMapCancelButtonText"}),onClick:this.props.onCloseUnsavedDialog}],fitContent:!0},o().createElement("div",{className:"ms-detail-body"},o().createElement(j.Z,{msgId:"resources.maps.unsavedMapConfirmMessage"}))))}}])&&A(t.prototype,r),c}(o().Component);M(L,"propTypes",{icon:E().node,onCheckMapChanges:E().func,onCloseUnsavedDialog:E().func,displayUnsavedDialog:E().bool,renderUnsavedMapChangesDialog:E().bool,tooltipPosition:E().string}),M(L,"contextTypes",{router:E().object,messages:E().object}),M(L,"defaultProps",{icon:o().createElement(p.Glyphicon,{glyph:"home"}),onCheckMapChanges:function(){},onCloseUnsavedDialog:function(){},renderUnsavedMapChangesDialog:!0,tooltipPosition:"left"});const U=L;var Z=r(11847),_=r(13218),B=r.n(_);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const K=function(e){var t,r=e.settings,n=e.scrollTo,i=void 0===n?function(){}:n,a=e.navigableItems,c=void 0===a?[]:a,l=e.currentPage,s=void 0===l?{}:l,u=e.totalItems,d=void 0===u?1:u,p=e.currentPosition,m=void 0===p?0:p,y=e.router,v=e.buttons,g=void 0===v?[]:v,h=null==r||null===(t=r.theme)||void 0===t?void 0:t.general,b=B()(h)&&h||{},O=b.fontFamily,S=b.borderColor,E=b.color,C=b.backgroundColor,j=r||{},P=j.isTitleEnabled,I=j.isLogoEnabled,N=j.isNavbarEnabled,k=g.length>0,x=y&&y.pathname&&y.search&&"true"===(0,Z.vl)(y.search).showHome&&y.pathname.includes("/geostory/shared"),A=N&&(null==c?void 0:c.length)>0,D=P||I||A||k||x;return o().createElement("div",{className:"ms-geostory-navigation-bar",style:q(q({color:E,backgroundColor:C},S&&{borderBottom:"1px solid ".concat(S)}),{},{fontFamily:O})},o().createElement("div",{className:"progress-bar",key:"progress-bar",style:{backgroundColor:S}},o().createElement("div",{className:"progress-percent",style:{width:"".concat((m+1)/d*100,"%"),backgroundColor:E}})),D&&o().createElement("div",{className:"ms-geostory-navigation-tools"},o().createElement("div",{className:"ms-geostory-navigation-toolbar"},o().createElement(f.Z,{buttons:g}),x&&o().createElement(U,{bsStyle:"default",className:"square-button-md no-border",tooltipPosition:"right",renderUnsavedMapChangesDialog:!1})),o().createElement("div",{className:"ms-geostory-navigation-elements"},A?o().createElement("div",{className:"ms-geostory-navigation-navigable-items"},o().createElement(w,{items:c,currentPage:s,scrollTo:i,getItemStyle:function(e){return e?{color:C,backgroundColor:E}:{outlineColor:E,borderColor:E}}})):null,o().createElement("div",{className:"ms-geostory-navigation-metadata"},P&&o().createElement("div",{className:"ms-geostory-navigation-title",style:{fontSize:r.storyTitleFontSize||"14px"}},r.storyTitle),I&&o().createElement("div",{className:"ms-geostory-navigation-logo"},o().createElement("img",{src:r.thumbnail&&(r.thumbnail.data||r.thumbnail.url)||"",height:32}))))))},$=(0,c.rx)("GeoStoryNavigation",{component:(0,i.connect)((0,a.zB)({mode:s.eK,settings:s.TQ,currentPage:s.PR,currentPosition:s.u5,totalItems:s.CK,navigableItems:(0,s.w)({includeAlways:!1}),pathname:u.F,search:u.y}))((function(e){var t=e.mode,r=void 0===t?l.nl.VIEW:t,n=e.currentPage,i=e.currentPosition,a=e.totalItems,c=e.settings,s=e.navigableItems,u=void 0===s?[]:s,d=e.pathname,f=e.search,p=e.items,m=(void 0===p?[]:p).filter((function(e){return e.tool})).map((function(e){return{Element:e.tool}}));return r===l.nl.VIEW?o().createElement("div",{key:"geostory-navigation",className:"ms-geostory-navigation",style:{width:"100%",position:"relative"}},o().createElement(K,{settings:c,currentPage:n,currentPosition:i,totalItems:a,scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,l.M1)(e,t)},navigableItems:u,router:{pathname:d,search:f},buttons:m})):null})),reducers:{geostory:d.Z}})},66190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>D});var n=r(27361),o=r.n(n),i=r(47037),a=r.n(i),c=r(81763),l=r.n(c),s=r(30998),u=r.n(s),d=r(13311),f=r.n(d),p=r(68630),m=r.n(p),y=r(1469),v=r.n(y),g=r(84596),h=r.n(g),b=r(19155),O=r.n(b),w=r(61868),S=r(92579),E=r(34990);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){return function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var k=function(e,t){var r=e.length,n=0;return t||0===t||(n=r),a()(t)?n=u()(e,{id:t})+1:l()(t)&&(n=Math.min(t,e.length)),n},x=function e(t,r,n){var o=n.contents,i=n.background,a=n.id,c=n.resourceId,l=[],s=r+'{"id": "'.concat(a,'"}]');return c===t?[s]:(i&&i.resourceId===t&&l.push(s+".background"),o?o.reduce((function(r,n){return[].concat(I(r),I(e(t,s+".contents[",n)))}),l):l)},A={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.D7:var r=t.id,n=t.path,i=t.position,c=t.element,l=(0,S.Ll)("currentStory.".concat(n),e),s=o()(e,l,[]),u=k(s,i),d=s.slice();return d.splice(u,0,j({id:r},c)),(0,w.t8)(l,d,e);case E.mN:var p=t.id,y=t.mediaType,g=t.data;return(0,w.t8)("currentStory.resources",O()([{id:p,type:y,data:g}].concat(I(e.currentStory&&e.currentStory.resources||[])),"id"),e);case E.vb:return(0,w.t8)("mode",t.mode,e);case E.QK:var b=t.id,C=t.mediaType,N=t.data,D=(0,w.cc)("currentStory.resources",{id:b,type:C,data:N},{id:b},e);return C===S.Tr.MAP&&e.currentStory.sections.filter((function(e){return e.type!==S.ID.CAROUSEL})).reduce((function(e,t){return[].concat(I(e),I(x(b,"sections[",t)))}),[]).map((function(t){var r=(0,S.Ll)("currentStory.".concat(t,".map"),e);D=(0,w.t8)(r,void 0,D)})),D;case E.Ro:var R=t.id,T=t.mediaType,z=(0,w.z6)("currentStory.resources",{id:R},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(I(e),I(x(R,"sections[",t)))}),[]).map((function(t){var r=(0,S.Ll)("currentStory.".concat(t,".resourceId"),e);if(z=(0,w.zN)(r,z),T===S.Tr.MAP){var n=(0,S.Ll)("currentStory.".concat(t,".map"),e);z=(0,w.zN)(n,z)}})),z;case E.lX:return(0,w.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,w.t8)("loading",t.value,e));case E.Dq:var M=t.path,L=(0,S.Ll)("currentStory.".concat(M),e),U=I(L),Z=U.pop(),_=o()(e,U);return v()(_)?(a()(Z)&&(Z=parseInt(Z,10)),(0,w.t8)(U,[].concat(I(_.slice(0,Z)),I(_.slice(Z+1))),e)):(0,w.zN)(L,e);case E.ij:var B,F,q,H,K,$=e.defaultSettings||{},G=t.story.settings||$,V=(null===(B=G)||void 0===B||null===(F=B.theme)||void 0===F?void 0:F.fontFamilies)||[],Y=null===(q=e.currentStory)||void 0===q||null===(H=q.settings)||void 0===H||null===(K=H.theme)||void 0===K?void 0:K.fontFamilies;return Y&&Y.length>0&&(G=(0,w.t8)("theme.fontFamilies",O()([].concat(I(Y),I(V)),"family"),G)),(0,w.t8)("currentStory",j(j({},t.story),{},{settings:G}),e);case E.i2:return(0,w.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case E.IY:var Q=t.control,W=t.value;return(0,w.t8)("controls.".concat(Q),W,e);case E.Zf:var X=t.resource,J=e.currentStory&&e.currentStory.settings||{};return(0,w.qC)((0,w.t8)("resource",X),(0,w.t8)("currentStory.settings.storyTitle",J.storyTitle||X.name))(e);case E.si:case E.KT:return(0,w.zN)("errors.save",e);case E.SW:return(0,w.t8)("errors.save",h()(t.error),e);case E.Mk:return(0,w.t8)("isCollapsed",!e.isCollapsed,e);case E.NZ:var ee=o()(e,"currentStory.settings.".concat(t.option));return(0,w.t8)("currentStory.settings.".concat(t.option),!ee,e);case E.c:var te=!e.isSettingsEnabled,re=e.currentStory&&e.currentStory.settings||{};return(0,w.qC)((0,w.t8)("isSettingsEnabled",te),(0,w.t8)("oldSettings",te?re:{}),(0,w.t8)("currentStory.settings",te?j({},re):t.withSave?re:e.oldSettings))(e);case E.wb:var ne=t.path,oe=t.mode,ie=t.element,ae=(0,S.Ll)("currentStory.".concat(ne),e),ce=o()(e,ae);return m()(ce)&&m()(ie)&&"merge"===oe&&(ie=j(j({},ce),ie)),v()(ce)&&v()(ie)&&"merge"===oe&&(ie=[].concat(I(ce),I(ie))),(0,w.t8)(ae,ie,e);case E.km:return(0,w.t8)("currentStory.settings.".concat(t.prop),t.value,e);case E.un:if(t.columnId){var le=f()(e.currentStory.sections,(function(e){return f()(e.contents,{id:t.columnId})}));return le&&f()(le.contents,{id:t.columnId})?(0,w.t8)("currentPage",j(j({},e.currentPage),{},{columns:j(j({},e.currentPage.columns),{},P({},le.id,t.columnId))}),e):e}return(0,w.t8)("currentPage",j(j({},e.currentPage),{},{sectionId:t.sectionId}),e);case E.Cx:var se=t.status,ue=t.target,de=t.selector,fe=void 0===de?"":de,pe=t.hideContent,me=void 0!==pe&&pe,ye=t.path,ve=se?{target:ue,selector:fe,hideContent:me,path:ye}:void 0;return(0,w.t8)("focusedContent",ve,e);case E.jr:return(0,w.t8)("pendingChanges",t.value,e);case E.ZY:return(0,w.t8)("updateUrlOnScroll",t.value,e);case E.EQ:return(0,w.t8)("mediaEditorSettings",t.mediaEditorSettings,e);case E.W$:if(t.sectionId){var ge=f()(e.currentStory.sections,(function(e){return f()(e.contents,{id:t.showContentId})}));return ge&&f()(ge.contents,{id:t.showContentId})?(0,w.t8)("currentStory",j(j({},e.currentStory),{},{sections:(0,S.eI)(e.currentStory.sections,t)}),e):e}return e;case E.mk:return(0,w.t8)("drawOptions",t.drawOptions,e);default:return e}}},66113:(e,t,r)=>{"use strict";r.d(t,{$F:()=>E,eg:()=>C,Kg:()=>j,PR:()=>P,eK:()=>I,pu:()=>N,Lu:()=>x,W5:()=>A,TQ:()=>D,KR:()=>T,sY:()=>z,vv:()=>M,jq:()=>L,Tr:()=>U,w:()=>Z,CK:()=>_,u5:()=>B,z7:()=>F,FW:()=>q,GC:()=>H,yL:()=>K,_O:()=>G,JM:()=>V,bU:()=>Y,mm:()=>Q,X6:()=>W,NR:()=>X,I0:()=>J,eB:()=>ee,HB:()=>te});var n=r(27361),o=r.n(n),i=r(13311),a=r.n(i),c=r(30998),l=r.n(c),s=r(18446),u=r.n(s),d=r(44908),f=r.n(d),p=r(64721),m=r.n(p),y=r(92579),v=r(74621),g=r(24684);function h(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var E=function(e){return function(t){return o()(t,(0,y.Ll)("geostory.currentStory.".concat(e),t),"")}},C=function(e){return o()(e,"geostory.isCollapsed",!1)},j=function(e){return o()(e,"geostory.currentStory")},P=function(e){return o()(e,"geostory.currentPage",{})},I=function(e){return o()(e,"geostory.mode")},N=function(e){return function(e){return o()(function(e){return o()(e,"geostory.resource")}(e),"canEdit",!1)}(e)||(0,v.qg)(e)},k=function(e){return o()(j(e),"sections",[])},x=function(e){return k(e).length>0},A=function(e){return o()(e,"geostory.isSettingsEnabled",!1)},D=function(e){var t=o()(j(e),"settings",{}),r=k(e).filter((function(e){var t=e.type;return m()([y.ID.CAROUSEL,y.ID.IMMERSIVE],t)})),n=t.checked||[],i=f()(n.map((function(e){return(0,y.Un)(r,e)})).filter((function(e){return e})));return w(w({},t),{},{expanded:i})},R=function(e){return o()(D(e),"checked",[]).reduce((function(e,t){return w(w({},e),{},S({},t,!0))}),{})},T=function(e){return!u()(o()(j(e),"settings",{}),function(e){return o()(e,"geostory.oldSettings",{})}(e))},z=function(e){return o()(e,"geostory.selectedCard","")},M=function(e){return function(t){return E("".concat(e,".resourceId"))(t)}},L=function(e){return o()(j(e),"resources",[])},U=function(e){return function(t){return a()(L(t),{id:e})}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.withImmersiveSection,r=void 0!==t&&t,n=e.includeAlways,o=void 0===n||n;return function(e){var t=k(e),n=R(e);return t.reduce((function(e,t){if(t.type===y.ID.TITLE&&(o||n[t.id]))return[].concat(h(e),[t]);if(t.type===y.ID.PARAGRAPH&&(o||n[t.id]))return[].concat(h(e),[t]);if(t.type===y.ID.BANNER&&(o||n[t.id]))return[].concat(h(e),[t]);if(t.type===y.ID.CAROUSEL&&(o||n[t.id]))return[].concat(h(e),[t]);if(t.type===y.ID.IMMERSIVE){var i=t.contents&&t.contents.reduce((function(e,t){return o||n[t.id]?[].concat(h(e),[w(w({},t),{},{sectionId:e.id})]):e}),[])||[];return r?[].concat(h(e),[t],h(i)):[].concat(h(e),h(i))}return e}),[])}},_=function(e){return Z({includeAlways:!0})(e).length},B=function(e){return l()(Z({includeAlways:!0})(e),{id:P(e).columns&&P(e).columns[P(e).sectionId]?P(e).columns[P(e).sectionId]:P(e).sectionId||""})},F=function(e){return void 0!==o()(e,"geostory.focusedContent.target")},q=function(e){return o()(e,"geostory.focusedContent")},H=function(e){return E(o()(e,"geostory.focusedContent.path",""))(e)},K=function(e){return k(e).reduce((function(e,t){if(m()([y.ID.IMMERSIVE,y.ID.CAROUSEL],t.type)){var r=t.contents&&t.contents.map((function(e){return{label:e.title||"",value:e.id}}))||[];return[].concat(h(e),[w({label:t.title||"",value:t.id},t.type===y.ID.IMMERSIVE&&{children:r})])}return[].concat(h(e),[{label:t.title||"",value:t.id}])}),[])},$=function e(t,r){var n=r.contents,o=r.background;return r.resourceId===t||!(!o||o.resourceId!==t)||!!n&&!!a()(n,(function(r){return e(t,r)}))},G=function(e,t){return!!a()(k(e),(function(e){return $(t,e)}))},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,g.F)(e).includes("geostory/shared")},Y=function(e){return o()(e,"geostory.updateUrlOnScroll",!1)},Q=function(e){return o()(e,"geostory.currentStory.settings.theme.fontFamilies",[])},W=function(e){return o()(e,"geostory.mediaEditorSettings")},X=function(e){var t;return((null===(t=j(e))||void 0===t?void 0:t.sections)||[]).filter((function(e){return e.type===y.ID.CAROUSEL}))},J=function(e){return function(t){return!!a()(X(t),{id:e})}},ee=function(e){return function(t){var r=a()(X(t)||[],{id:e});return(null==r?void 0:r.contents)||[]}},te=function(e){var t;return!(null==e||null===(t=e.geostory)||void 0===t||!t.drawOptions)}},24684:(e,t,r)=>{"use strict";r.d(t,{F:()=>i,y:()=>a});var n=r(27361),o=r.n(n),i=function(e){return o()(e,"router.location.pathname")||"/"},a=function(e){return o()(e,"router.location.search")||""}},74621:(e,t,r)=>{"use strict";r.d(t,{np:()=>n,L3:()=>o,jl:()=>i,y8:()=>a,qg:()=>c}),r(27418),r(27361);var n=function(e){return e&&e.security&&e.security.user},o=function(e){return n(e)&&n(e).role},i=function(e){return e&&e.security&&e.security.user},a=function(e){return e.security&&e.security.token},c=function(e){return"ADMIN"===o(e)}},11847:(e,t,r)=>{"use strict";r.d(t,{ij:()=>g,w0:()=>h,vl:()=>b,K2:()=>O,Nw:()=>w});var n=r(72500),o=r.n(n),i=r(1469),a=r.n(i),c=r(47037),l=r.n(c),s=r(18446),u=r.n(s),d=r(89734),f=r.n(d),p=r(13311),m=r.n(p),y=r(64210);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var g=function(e){if(!e)return{};var t=!(0===e.indexOf("http")),r=t?[]:e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(t){var n=window.location;r[1]=n.protocol,r[3]=n.hostname,r[4]=n.port,r[5]=e}r[4]=""!==r[4]&&r[4]?r[4]:"https:"===r[1]?"443":"80",r[5]=r[5]?r[5]:e.slice(r[0].length);var o,i,a=(i=6,function(e){if(Array.isArray(e))return e}(o=r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(o,i)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[1],l=a[3],s=a[4],u=a[5],d=0===u.indexOf("/")?u.split("/")[1]:"";return{protocol:c,domain:l,port:s,rootPath:u,applicationRootPath:d}},h=function(e,t){var r=a()(e)?e[0]:e,n=a()(t)?t[0]:t;if(r===n)return!0;if(!r||!n)return!1;if(!l()(r)||!l()(n))return!1;var i=o().parse(r),c=o().parse(n),s=g(r),d=g(n),p=s.protocol===d.protocol,m=s.domain===d.domain,y=s.port===d.port,v=i.pathname===c.pathname,h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e===t)return!0;if(!e&&!t)return!0;var r=e?e.split("&").filter((function(e){return!!e})):[],n=t?t.split("&").filter((function(e){return!!e})):[];return u()(f()(r),f()(n))}(i.query,c.query);return p&&y&&m&&v&&h},b=function(e){return y.Qc(e)},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,r=new RegExp(t);return r.test(e)},w=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,n=new RegExp(r),o=n.test(e);if(!o)return!1;if(o&&!t)return!0;if(o&&t){var i=/\{(.*?)\}/.test(e);return 0===t.filter((function(e){return m()(i,e)})).length}return!1}}}]);