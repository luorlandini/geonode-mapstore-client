(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1820],{19081:(e,t,n)=>{"use strict";e.exports=n(1174)},55033:function(e,t,n){var r;r=function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){(function(r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=s(n(2)),c=s(n(3)),u=s(n(4)),l=s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var p="undefined"==typeof document||!document||!document.createElement||"multiple"in document.createElement("input"),d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.renderChildren=function(e){return"function"==typeof e?e(r.state):e},r.onClick=r.onClick.bind(r),r.onDocumentDrop=r.onDocumentDrop.bind(r),r.onDragStart=r.onDragStart.bind(r),r.onDragEnter=r.onDragEnter.bind(r),r.onDragLeave=r.onDragLeave.bind(r),r.onDragOver=r.onDragOver.bind(r),r.onDrop=r.onDrop.bind(r),r.onFileDialogCancel=r.onFileDialogCancel.bind(r),r.fileAccepted=r.fileAccepted.bind(r),r.setRef=r.setRef.bind(r),r.isFileDialogActive=!1,r.state={isDragActive:!1,acceptedFiles:[],rejectedFiles:[]},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,null,[{key:"onDocumentDragOver",value:function(e){e.preventDefault()}}]),i(t,[{key:"componentDidMount",value:function(){var e=this.props.preventDropOnDocument;this.dragTargets=[],e&&(document.addEventListener("dragover",t.onDocumentDragOver,!1),document.addEventListener("drop",this.onDocumentDrop,!1)),document.body.onfocus=this.onFileDialogCancel}},{key:"componentWillUnmount",value:function(){this.props.preventDropOnDocument&&(document.removeEventListener("dragover",t.onDocumentDragOver),document.removeEventListener("drop",this.onDocumentDrop)),document.body.onfocus=null}},{key:"onDocumentDrop",value:function(e){this.node.contains(e.target)||(e.preventDefault(),this.dragTargets=[])}},{key:"onDragStart",value:function(e){this.props.onDragStart&&this.props.onDragStart.call(this,e)}},{key:"onDragEnter",value:function(e){e.preventDefault(),-1===this.dragTargets.indexOf(e.target)&&this.dragTargets.push(e.target);var t=(0,l.default)(e),n=this.allFilesAccepted(t),r=this.props.multiple||t.length<=1;this.setState({isDragActive:n,isDragReject:!n||!r}),this.props.onDragEnter&&this.props.onDragEnter.call(this,e)}},{key:"onDragOver",value:function(e){e.preventDefault(),e.stopPropagation();try{e.dataTransfer.dropEffect="copy"}catch(e){}return this.props.onDragOver&&this.props.onDragOver.call(this,e),!1}},{key:"onDragLeave",value:function(e){var t=this;e.preventDefault(),this.dragTargets=this.dragTargets.filter((function(n){return n!==e.target&&t.node.contains(n)})),this.dragTargets.length>0||(this.setState({isDragActive:!1,isDragReject:!1}),this.props.onDragLeave&&this.props.onDragLeave.call(this,e))}},{key:"onDrop",value:function(e){var t=this,n=this.props,o=n.onDrop,i=n.onDropAccepted,a=n.onDropRejected,c=n.multiple,u=n.disablePreview,s=(0,l.default)(e),f=[],p=[];e.preventDefault(),this.dragTargets=[],this.isFileDialogActive=!1,s.forEach((function(e){if(!u)try{e.preview=window.URL.createObjectURL(e)}catch(t){"production"!==r.env.NODE_ENV&&console.error("Failed to generate preview for file",e,t)}t.fileAccepted(e)&&t.fileMatchSize(e)?f.push(e):p.push(e)})),c||p.push.apply(p,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(f.splice(1))),o&&o.call(this,f,p,e),p.length>0&&a&&a.call(this,p,e),f.length>0&&i&&i.call(this,f,e),this.setState({isDragActive:!1,isDragReject:!1,acceptedFiles:f,rejectedFiles:p})}},{key:"onClick",value:function(e){var t=this.props,n=t.onClick;t.disableClick||(e.stopPropagation(),this.open(),n&&n.call(this,e))}},{key:"onFileDialogCancel",value:function(){var e=this.props.onFileDialogCancel,t=this.fileInputEl,n=this.isFileDialogActive;e&&n&&setTimeout((function(){t.files.length||(n=!1,e())}),300)}},{key:"setRef",value:function(e){this.node=e}},{key:"fileAccepted",value:function(e){return"application/x-moz-file"===e.type||(0,u.default)(e,this.props.accept)}},{key:"fileMatchSize",value:function(e){return e.size<=this.props.maxSize&&e.size>=this.props.minSize}},{key:"allFilesAccepted",value:function(e){return e.every(this.fileAccepted)}},{key:"open",value:function(){this.isFileDialogActive=!0,this.fileInputEl.value=null,this.fileInputEl.click()}},{key:"render",value:function(){var e=this,t=this.props,n=t.accept,r=t.activeClassName,i=t.inputProps,c=t.multiple,u=t.name,l=t.rejectClassName,s=t.children,d=f(t,["accept","activeClassName","inputProps","multiple","name","rejectClassName","children"]),h=d.activeStyle,v=d.className,g=d.rejectStyle,y=d.style,m=f(d,["activeStyle","className","rejectStyle","style"]),D=this.state,b=D.isDragActive,x=D.isDragReject;v=v||"",b&&r&&(v+=" "+r),x&&l&&(v+=" "+l),v||y||h||g||(y={width:200,height:200,borderWidth:2,borderColor:"#666",borderStyle:"dashed",borderRadius:5},h={borderStyle:"solid",borderColor:"#6c6",backgroundColor:"#eee"},g={borderStyle:"solid",borderColor:"#c66",backgroundColor:"#eee"});var w;w=h&&b?o({},y,h):g&&x?o({},y,g):o({},y);var S={accept:n,type:"file",style:{display:"none"},multiple:p&&c,ref:function(t){return e.fileInputEl=t},onChange:this.onDrop};u&&u.length&&(S.name=u);var O=o({},m);return["acceptedFiles","preventDropOnDocument","disablePreview","disableClick","onDropAccepted","onDropRejected","onFileDialogCancel","maxSize","minSize"].forEach((function(e){return delete O[e]})),a.default.createElement("div",o({className:v,style:w},O,{onClick:this.onClick,onDragStart:this.onDragStart,onDragEnter:this.onDragEnter,onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop,ref:this.setRef}),this.renderChildren(s),a.default.createElement("input",o({},i,S)))}}]),t}(a.default.Component);d.propTypes={accept:c.default.string,children:c.default.oneOfType([c.default.node,c.default.func]),disableClick:c.default.bool,disablePreview:c.default.bool,preventDropOnDocument:c.default.bool,inputProps:c.default.object,multiple:c.default.bool,name:c.default.string,maxSize:c.default.number,minSize:c.default.number,className:c.default.string,activeClassName:c.default.string,rejectClassName:c.default.string,style:c.default.object,activeStyle:c.default.object,rejectStyle:c.default.object,onClick:c.default.func,onDrop:c.default.func,onDropAccepted:c.default.func,onDropRejected:c.default.func,onDragStart:c.default.func,onDragEnter:c.default.func,onDragOver:c.default.func,onDragLeave:c.default.func,onFileDialogCancel:c.default.func},d.defaultProps={preventDropOnDocument:!0,disablePreview:!1,disableClick:!1,multiple:!0,maxSize:1/0,minSize:0},t.default=d,e.exports=t.default}).call(t,n(1))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,l=[],s=!1,f=-1;function p(){s&&u&&(s=!1,u.length?l=u.concat(l):f=-1,l.length&&d())}function d(){if(!s){var e=c(p);s=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||s||c(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";t.__esModule=!0,n(8),n(9),t.default=function(e,t){if(e&&t){var n=function(){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=e.type||"",i=o.replace(/\/.*$/,"");return{v:n.some((function(e){var t=e.trim();return"."===t.charAt(0)?r.toLowerCase().endsWith(t.toLowerCase()):/\/\*$/.test(t)?i===t.replace(/\/.*$/,""):o===t}))}}();if("object"==typeof n)return n.v}return!0},e.exports=t.default},function(e,t){var n=e.exports={version:"1.2.2"};"number"==typeof __e&&(__e=n)},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var r=n(2),o=n(1),i=n(4),a=n(19),c="prototype",u=function(e,t){return function(){return e.apply(t,arguments)}},l=function(e,t,n){var s,f,p,d,h=e&l.G,v=e&l.P,g=h?r:e&l.S?r[t]||(r[t]={}):(r[t]||{})[c],y=h?o:o[t]||(o[t]={});for(s in h&&(n=t),n)p=((f=!(e&l.F)&&g&&s in g)?g:n)[s],d=e&l.B&&f?u(p,r):v&&"function"==typeof p?u(Function.call,p):p,g&&!f&&a(g,s,p),y[s]!=p&&i(y,s,d),v&&((y[c]||(y[c]={}))[s]=p)};r.core=o,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,e.exports=l},function(e,t,n){var r=n(5),o=n(18);e.exports=n(22)?function(e,t,n){return r.setDesc(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t){var n=Object;e.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(20)("wks"),o=n(2).Symbol;e.exports=function(e){return r[e]||(r[e]=o&&o[e]||(o||n(6))("Symbol."+e))}},function(e,t,n){n(26),e.exports=n(1).Array.some},function(e,t,n){n(25),e.exports=n(1).String.endsWith},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(10);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n(7)("match")]=!1,!"/./"[e](t)}catch(e){}}return!0}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(16),o=n(11),i=n(7)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(2),o=n(4),i=n(6)("src"),a="toString",c=Function[a],u=(""+c).split(a);n(1).inspectSource=function(e){return c.call(e)},(e.exports=function(e,t,n,a){"function"==typeof n&&(o(n,i,e[t]?""+e[t]:u.join(String(t))),"name"in n||(n.name=t)),e===r?e[t]=n:(a||delete e[t],o(e,t,n))})(Function.prototype,a,(function(){return"function"==typeof this&&this[i]||c.call(this)}))},function(e,t,n){var r=n(2),o="__core-js_shared__",i=r[o]||(r[o]={});e.exports=function(e){return i[e]||(i[e]={})}},function(e,t,n){var r=n(17),o=n(13);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},function(e,t,n){e.exports=!n(15)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(23),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){"use strict";var r=n(3),o=n(24),i=n(21),a="endsWith",c=""[a];r(r.P+r.F*n(14)(a),"String",{endsWith:function(e){var t=i(this,e,a),n=arguments,r=n.length>1?n[1]:void 0,u=o(t.length),l=void 0===r?u:Math.min(o(r),u),s=String(e);return c?c.call(t,s,l):t.slice(l-s.length,l)===s}})},function(e,t,n){var r=n(5),o=n(3),i=n(1).Array||Array,a={},c=function(e,t){r.each.call(e.split(","),(function(e){null==t&&e in i?a[e]=i[e]:e in[]&&(a[e]=n(12)(Function.call,[][e],t))}))};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",a)}])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];if(e.dataTransfer){var n=e.dataTransfer;n.files&&n.files.length?t=n.files:n.items&&n.items.length&&(t=n.items)}else e.target&&e.target.files&&(t=e.target.files);return Array.prototype.slice.call(t)},e.exports=t.default}])},e.exports=r(n(24852),n(45697))}}]);