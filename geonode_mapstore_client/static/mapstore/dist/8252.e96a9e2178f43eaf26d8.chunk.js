(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8252],{98939:(e,t,n)=>{"use strict";n.d(t,{d2:()=>r,yX:()=>o,Uo:()=>l,n2:()=>c,SA:()=>i});var r="CHANGE_HELP_STATE",o="CHANGE_HELP_TEXT",l="CHANGE_HELPWIN_VIZ";function c(e){return{type:o,helpText:e}}function i(e){return{type:l,helpwinViz:e}}},83606:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(47037),o=n.n(r),l=n(45697),c=n.n(l),i=n(24852),a=n.n(i),s=n(57588),p=n(86638);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,r,l,c=(r=i,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(l){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function i(){var e;f(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(b(e=c.call.apply(c,[this].concat(n))),"onMouseOver",(function(){var t=o()(e.props.helpText)?e.props.helpText:(0,p.S$)(e.context.messages,e.props.helpText.props.msgId);e.props.changeHelpText(t),e.props.changeHelpwinVisibility(!0)})),e}return t=i,(n=[{key:"render",value:function(){return a().createElement(s.Badge,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}])&&y(t.prototype,n),i}(a().Component);d(v,"propTypes",{id:c().string,helpText:c().oneOfType([c().string,c().element]),isVisible:c().bool,changeHelpText:c().func,changeHelpwinVisibility:c().func,className:c().string}),d(v,"contextTypes",{messages:c().object}),d(v,"defaultProps",{helpText:"",isVisible:!1});const O=v},50966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(61365),o=n(57588);const l=(0,r.Z)(o.OverlayTrigger)},61365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(24852),o=n.n(r),l=n(63202);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const i=function(e){return function(t){return o().createElement(e,c({},t,{container:document.querySelector("."+(l.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},58252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var r=n(53131),o=n.n(r),l=n(27418),c=n.n(l),i=n(45697),a=n.n(i),s=n(24852),p=n.n(s),u=n(57588),f=n(71703),y=n(12838),m=n(82904),g=n(98939),b=n(83606),h=n(5346),d=n(50966),v=n(38560);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=(0,f.connect)((function(e){return{isVisible:e.controls&&e.controls.help&&e.controls.help.enabled}}),{changeHelpText:g.n2,changeHelpwinVisibility:g.SA})(b.Z),H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,l,i=(r=a,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(l){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(){var e;j(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return N(_(e=i.call.apply(i,[this].concat(n))),"getToolConfig",(function(t){return t.tool?{}:e.props.toolCfg})),N(_(e),"getTool",(function(t){if(t.tool)return!0===t.tool?t.plugin:t.tool;var n=function(){return{}},r={};return t.exclusive?(n=function(n){return{active:n.controls&&n.controls[e.props.stateSelector]&&n.controls[e.props.stateSelector].active===t.name}},r[e.props.eventSelector]=m.Xg.bind(null,e.props.stateSelector,"active",t.name,!0)):t.toggle?(n=function(n){return{bsStyle:n.controls[t.toggleControl||t.name]&&n.controls[t.toggleControl||t.name][t.toggleProperty||"enabled"]?e.props.activeStyle:e.props.toolStyle,active:n.controls[t.toggleControl||t.name]&&n.controls[t.toggleControl||t.name][t.toggleProperty||"enabled"]||!1}},r[e.props.eventSelector]=m.Xi.bind(null,t.toggleControl||t.name,t.toggleProperty||null)):t.action&&(r[e.props.eventSelector]=o()(t.action,e.context),n=t.selector||n),(0,f.connect)(n,r,(function(t,n,r){return e.mergeHandlers(P(P({},r),t),n)}))(e.props.tool)})),N(_(e),"renderTool",(function(t,n){if(t.element)return t.element;var r=t.help?p().createElement(k,{className:"mapstore-helpbadge",helpText:t.help}):p().createElement("span",null),o=t.tooltip?p().createElement(h.Z,{msgId:t.tooltip}):null,l=e.getTool(t),c=e.getToolConfig(t),i=t.childTools||[];return e.addTooltip(p().createElement(l,S({},c,{pluginCfg:t.cfg,tooltip:o,style:t.style,btnSize:e.props.toolSize,bsStyle:e.props.toolStyle,help:r,key:t.name||"tool"+n,mapType:e.props.mapType},t.cfg,{items:t.items||[]}),t.cfg&&t.cfg.glyph?p().createElement(u.Glyphicon,{glyph:t.cfg.glyph}):t.icon,r," ",t.text,i.length>0&&p().createElement(a,S({},t.innerProps,{mapType:e.props.mapType,tools:i,panels:t.childPanels}))),t)})),N(_(e),"renderTools",(function(){return e.props.tools.map(e.renderTool)})),N(_(e),"renderPanels",(function(){return e.props.panels.filter((function(e){return!e.panel.loadPlugin})).map((function(t){var n=t.panel,r=p().createElement(n,S({key:t.name,mapType:e.props.mapType},t.cfg,t.props||{},{items:t.items||[]})),o=t.title?p().createElement(h.Z,{msgId:t.title}):null;return t.wrap?p().createElement(u.Collapse,{key:"mapToolBar-item-collapse-"+t.name,in:e.props.activePanel===t.name},p().createElement(u.Panel,{header:o,style:e.props.panelStyle,className:e.props.panelClassName},r)):r}))})),N(_(e),"mergeHandlers",(function(e,t){return Object.keys(t).reduce((function(n,r){return c()(n,N({},r,e[r]?(0,y.qC)(e[r],t[r]):t[r]))}),e)})),N(_(e),"addTooltip",(function(t,n){if(n.tooltip){var r=p().createElement(u.Tooltip,{id:e.props.id+"-"+n.name+"-tooltip"},p().createElement(h.Z,{msgId:n.tooltip}));return p().createElement(d.Z,{key:e.props.id+"-"+n.name+"-overlay",rootClose:!0,placement:"left",overlay:r},t)}return t})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props.container;return p().createElement("span",{id:this.props.id,style:this.props.containerWrapperStyle},p().createElement(e,{id:this.props.id+"-container",style:this.props.style,className:this.props.className},this.renderTools()),this.renderPanels())}}])&&w(t.prototype,n),a}(p().Component);N(H,"propTypes",{id:a().string.isRequired,container:a().func,containerWrapperStyle:a().object,tool:a().func,className:a().string,style:a().object,tools:a().array,panels:a().array,mapType:a().string,toolStyle:a().string,activeStyle:a().string,toolSize:a().string,stateSelector:a().string.isRequired,eventSelector:a().string,panelStyle:a().object,panelClassName:a().string,activePanel:a().string,toolCfg:a().object}),N(H,"contextTypes",{messages:a().object,router:a().object}),N(H,"defaultProps",{container:u.Panel,className:"tools-container",style:{},toolStyle:"default",activeStyle:"primary",tools:[],panels:[],tool:v.Z,mapType:"leaflet",eventSelector:"onClick",panelStyle:{},panelClassName:"tools-container-panel",toolSize:null,toolCfg:{}});const R=H},53131:(e,t,n)=>{var r=n(5976),o=n(97727),l=n(20893),c=n(46460),i=r((function(e,t){var n=c(t,l(i));return o(e,32,void 0,t,n)}));i.placeholder={},e.exports=i}}]);