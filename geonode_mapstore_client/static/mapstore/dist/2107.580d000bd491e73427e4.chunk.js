(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2107],{7472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var r=n(27418),o=n.n(r),l=n(45697),a=n.n(l),s=n(24852),i=n.n(s),c=n(85294),d=n.n(c),u=n(72986),m=n.n(u),f=n(5346);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,n,r,l,a=(r=s,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(l){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function s(){var e;b(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return C(N(e=a.call.apply(a,[this].concat(n))),"renderLoading",(function(){return e.props.maskLoading?i().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},i().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},i().createElement(f.Z,{msgId:"loading"}),i().createElement(m(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),C(N(e),"renderRole",(function(t){return i().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),C(N(e),"hasRole",(function(t){return i().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),C(N(e),"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return t=s,(n=[{key:"render",value:function(){var e=this,t=i().createElement("div",{id:this.props.id,style:y({zIndex:3},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},i().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),i().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?i().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):i().createElement("span",null)),n=this.props.draggable?i().createElement(d(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,r=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?i().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:r,className:"fade in modal "+this.props.containerClassName,role:"dialog"},n):n}}])&&v(t.prototype,n),s}(i().Component);C(k,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),C(k,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const w=k},75480:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(24852),o=n.n(r);const l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,n=void 0===t?{display:"inline-block"}:t;return o().createElement("div",{style:n,className:"mapstore-inline-loader"})}},94745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(24852),o=n.n(r),l=n(30294),a=n(7472),s=n(80717),i=n(67076),c=n(19081),d=n.n(c),u=n(75480),m={xs:" ms-xs",sm:" ms-sm",md:"",lg:" ms-lg"},f={className:{vertical:" ms-fullscreen-v",horizontal:" ms-fullscreen-h",full:" ms-fullscreen"},glyph:{expanded:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-small"},collapsed:{vertical:"resize-vertical",horizontal:"resize-horizontal",full:"resize-full"}}};const p=(0,i.withState)("fullscreenState","onFullscreen",(function(e){var t=e.initialFullscreenState;return void 0===t?"collapsed":t}))((function(e){var t=e.show,n=void 0!==t&&t,r=e.loading,i=e.loadingText,c=e.onClose,p=void 0===c?function(){}:c,h=e.title,y=void 0===h?"":h,b=e.clickOutEnabled,v=void 0===b||b,g=e.showClose,E=void 0===g||g,N=e.disabledClose,O=void 0!==N&&N,C=e.showFullscreen,k=void 0!==C&&C,w=e.fullscreenType,j=void 0===w?"full":w,x=e.buttons,z=void 0===x?[]:x,S=e.size,P=void 0===S?"":S,R=e.bodyClassName,Z=void 0===R?"":R,F=e.children,_=e.draggable,T=void 0!==_&&_,I=e.fullscreenState,G=e.onFullscreen,L=e.fade,q=void 0!==L&&L,A=e.fitContent,D=e.modalClassName,B=void 0===D?"":D,H=e.dialogClassName,M=void 0===H?"":H,V=e.enableFooter,J=void 0===V||V,K=m[P]||"",Q=k&&"expanded"===I&&f.className[j]||"",U=n?o().createElement("div",{className:"modal-fixed ".concat(B," ")+(T?"ms-draggable":"")},o().createElement(a.Z,{id:"ms-resizable-modal",style:{display:"flex"},onClickOut:v?p:function(){},containerClassName:"ms-resizable-modal",draggable:T,modal:!0,className:"modal-dialog modal-content"+K+Q+M+(A?" ms-fit-content":"")},o().createElement("span",{role:"header"},o().createElement("h4",{className:"modal-title"},o().createElement("div",{className:"ms-title"},y),k&&f.className[j]&&o().createElement(l.Glyphicon,{className:"ms-header-btn",onClick:function(){return G("expanded"===I?"collapsed":"expanded")},glyph:f.glyph[I][j]}),E&&p&&o().createElement(l.Glyphicon,{glyph:"1-close",className:"ms-header-btn",onClick:p,disabled:O}))),o().createElement("div",{role:"body",className:Z},F),J&&o().createElement("div",{style:{display:"flex"},role:"footer"},o().createElement("div",{className:"ms-resizable-modal-loading-spinner-container"},r?o().createElement(u.Z,null):null),o().createElement("div",{className:"ms-resizable-modal-loading-text"},r?i:null),o().createElement(s.Z,{buttons:z})))):null;return q?o().createElement(d(),{transitionName:"ms-resizable-modal-fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},U):U}))},16919:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(24852),o=n.n(r),l=n(32833),a=n(65539),s=n(67076),i=n(30294),c=n(38560),d={bottom:{true:"chevron-down",false:"chevron-up"},top:{true:"chevron-up",false:"chevron-down"},right:{true:"chevron-right",false:"chevron-left"},left:{true:"chevron-left",false:"chevron-right"}};const u=function(e){var t=e.position,n=void 0===t?"right":t,r=e.onClose,l=e.bsStyle,a=void 0===l?"default":l,s=e.title,u=void 0===s?"":s,m=e.fullscreen,f=void 0!==m&&m,p=e.showFullscreen,h=void 0!==p&&p,y=e.glyph,b=void 0===y?"info-sign":y,v=e.additionalRows,g=e.onFullscreen,E=void 0===g?function(){}:g,N=r?o().createElement(c.Z,{key:"ms-header-close",className:"square-button ms-close",onClick:r,bsStyle:a},o().createElement(i.Glyphicon,{glyph:"1-close"})):null,O=h?o().createElement(c.Z,{key:"ms-header-glyph",className:"square-button",bsStyle:a,onClick:function(){return E(!f)}},o().createElement(i.Glyphicon,{glyph:d[n]&&d[n][f]||"resize-full"})):o().createElement("div",{key:"ms-header-glyph",className:"square-button ".concat("bg-"+a),style:{display:"flex"}},o().createElement(i.Glyphicon,{glyph:b,className:"".concat("default"===a?"text-primary":"")})),C="left"===n?[N,O]:[O,N];return o().createElement(i.Grid,{fluid:!0,style:{width:"100%"},className:"ms-header ms-"+a},o().createElement(i.Row,null,o().createElement(i.Col,{xs:2},C[0]),o().createElement(i.Col,{xs:8},o().createElement("h4",null,u)),o().createElement(i.Col,{xs:2},C[1])),v)},m=(0,s.withState)("fullscreen","onFullscreen",!1)((function(e){var t=e.fluid,n=e.className,r=void 0===n?"":n,s=e.fullscreen,i=void 0!==s&&s,c=e.position,d=e.open,m=e.size,f=void 0===m?550:m,p=e.style,h=void 0===p?{}:p,y=e.zIndex,b=void 0===y?1030:y,v=e.onClose,g=e.bsStyle,E=e.title,N=e.showFullscreen,O=void 0!==N&&N,C=e.glyph,k=e.header,w=e.footer,j=e.children,x=e.onFullscreen,z=void 0===x?function(){}:x,S=e.fixed,P=void 0!==S&&S,R=e.resizable,Z=void 0!==R&&R,F=e.hideHeader;return o().createElement("div",{className:"ms-side-panel "+(P?"":"ms-absolute-dock ")+(Z?"":"react-dock-no-resize ")+r},o().createElement(l.default,{fluid:t||i,position:c,dimMode:"none",isVisible:d,size:i?1:f,dockStyle:h,zIndex:b},o().createElement(a.Z,{header:!F&&d&&o().createElement(u,{position:c,onClose:v,bsStyle:g,title:E,fullscreen:i,showFullscreen:O,glyph:C,additionalRows:k,onFullscreen:z}),footer:d&&w},d&&j)))}))},32107:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(24852),o=n.n(r),l=n(67076),a=n(65539),s=n(16919),i=n(94745);var c=(0,l.renameProps)({open:"show"})((function(e){var t=e.children,n=e.header,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children","header"]);return o().createElement(i.Z,r,o().createElement(a.Z,{header:o().createElement("div",{className:"ms-header"},n)},t))}));const d=(0,l.branch)((function(e){return!e.dock}),(function(){return function(e){return o().createElement(c,e)}}))(s.Z)}}]);