(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[84],{78426:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var n=i(65045),r=i(19629),o=i(58493),s=i(9520),a="length",h=function(t){function e(e,i){t.call(this,e),this.element=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(s.ZP);const u=function(t){function e(e,i){t.call(this);var n=i||{};if(this.unique_=!!n.unique,this.array_=e||[],this.unique_)for(var r=0,o=this.array_.length;r<o;++r)this.assertUnique_(this.array_[r],r);this.updateLength_()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clear=function(){for(;this.getLength()>0;)this.pop()},e.prototype.extend=function(t){for(var e=0,i=t.length;e<i;++e)this.push(t[e]);return this},e.prototype.forEach=function(t){for(var e=this.array_,i=0,n=e.length;i<n;++i)t(e[i],i,e)},e.prototype.getArray=function(){return this.array_},e.prototype.item=function(t){return this.array_[t]},e.prototype.getLength=function(){return this.get(a)},e.prototype.insertAt=function(t,e){this.unique_&&this.assertUnique_(e),this.array_.splice(t,0,e),this.updateLength_(),this.dispatchEvent(new h(r.Z.ADD,e))},e.prototype.pop=function(){return this.removeAt(this.getLength()-1)},e.prototype.push=function(t){this.unique_&&this.assertUnique_(t);var e=this.getLength();return this.insertAt(e,t),this.getLength()},e.prototype.remove=function(t){for(var e=this.array_,i=0,n=e.length;i<n;++i)if(e[i]===t)return this.removeAt(i)},e.prototype.removeAt=function(t){var e=this.array_[t];return this.array_.splice(t,1),this.updateLength_(),this.dispatchEvent(new h(r.Z.REMOVE,e)),e},e.prototype.setAt=function(t,e){var i=this.getLength();if(t<i){this.unique_&&this.assertUnique_(e,t);var n=this.array_[t];this.array_[t]=e,this.dispatchEvent(new h(r.Z.REMOVE,n)),this.dispatchEvent(new h(r.Z.ADD,e))}else{for(var o=i;o<t;++o)this.insertAt(o,void 0);this.insertAt(t,e)}},e.prototype.updateLength_=function(){this.set(a,this.array_.length)},e.prototype.assertUnique_=function(t,e){for(var i=0,r=this.array_.length;i<r;++i)if(this.array_[i]===t&&i!==e)throw new n.Z(58)},e}(o.ZP)},19629:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={ADD:"add",REMOVE:"remove"}},11256:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={IDLE:0,LOADING:1,LOADED:2,ERROR:3}},40188:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend"}},8913:(t,e,i)=>{"use strict";i.d(e,{XC:()=>a,_2:()=>c,BB:()=>p});var n=i(38906),r=i(21882),o=/^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i,s=/^([a-z]*)$/i;function a(t){return"string"==typeof t?t:p(t)}var h,u,l=(h={},u=0,function(t){var e;if(h.hasOwnProperty(t))e=h[t];else{if(u>=1024){var i=0;for(var r in h)0==(3&i++)&&(delete h[r],--u)}e=function(t){var e,i,r,a,h;if(s.exec(t)&&(t=function(t){var e=document.createElement("div");if(e.style.color=t,""!==e.style.color){document.body.appendChild(e);var i=getComputedStyle(e).color;return document.body.removeChild(e),i}return""}(t)),o.exec(t)){var u,l=t.length-1;u=l<=4?1:2;var c=4===l||8===l;e=parseInt(t.substr(1+0*u,u),16),i=parseInt(t.substr(1+1*u,u),16),r=parseInt(t.substr(1+2*u,u),16),a=c?parseInt(t.substr(1+3*u,u),16):255,1==u&&(e=(e<<4)+e,i=(i<<4)+i,r=(r<<4)+r,c&&(a=(a<<4)+a)),h=[e,i,r,a/255]}else 0==t.indexOf("rgba(")?f(h=t.slice(5,-1).split(",").map(Number)):0==t.indexOf("rgb(")?((h=t.slice(4,-1).split(",").map(Number)).push(1),f(h)):(0,n.h)(!1,14);return h}(t),h[t]=e,++u}return e});function c(t){return Array.isArray(t)?t:l(t)}function f(t){return t[0]=(0,r.uZ)(t[0]+.5|0,0,255),t[1]=(0,r.uZ)(t[1]+.5|0,0,255),t[2]=(0,r.uZ)(t[2]+.5|0,0,255),t[3]=(0,r.uZ)(t[3],0,1),t}function p(t){var e=t[0];e!=(0|e)&&(e=e+.5|0);var i=t[1];i!=(0|i)&&(i=i+.5|0);var n=t[2];return n!=(0|n)&&(n=n+.5|0),"rgba("+e+","+i+","+n+","+(void 0===t[3]?1:t[3])+")"}},45120:(t,e,i)=>{"use strict";i.d(e,{y:()=>r});var n=i(8913);function r(t){return Array.isArray(t)?(0,n.BB)(t):t}},67644:(t,e,i)=>{"use strict";i.d(e,{oj:()=>o,$A:()=>s,XV:()=>a,hg:()=>h,hN:()=>u,tr:()=>l});var n,r,o="ol-hidden",s="ol-selectable",a="ol-unselectable",h="ol-control",u="ol-collapsed",l=(r={},function(t){if(n||(n=document.createElement("div").style),!(t in r)){n.font=t;var e=n.fontFamily;if(n.font="",!e)return null;r[t]=e.split(/,\s?/)}return r[t]})},80800:(t,e,i)=>{"use strict";i.d(e,{o:()=>o,B:()=>s});var n=i(64011),r=i(34007);function o(t,e,i,n){return function(o,s,a){var h=new XMLHttpRequest;h.open("GET","function"==typeof t?t(o,s,a):t,!0),e.getType()==r.Z.ARRAY_BUFFER&&(h.responseType="arraybuffer"),h.onload=function(t){if(!h.status||h.status>=200&&h.status<300){var o,s=e.getType();s==r.Z.JSON||s==r.Z.TEXT?o=h.responseText:s==r.Z.XML?(o=h.responseXML)||(o=(new DOMParser).parseFromString(h.responseText,"application/xml")):s==r.Z.ARRAY_BUFFER&&(o=h.response),o?i.call(this,e.readFeatures(o,{featureProjection:a}),e.readProjection(o),e.getLastExtent()):n.call(this)}else n.call(this)}.bind(this),h.onerror=function(){n.call(this)}.bind(this),h.send()}}function s(t,e){return o(t,e,(function(t,e){"function"==typeof this.addFeatures&&this.addFeatures(t)}),n.Zn)}},91358:(t,e,i)=>{"use strict";i.d(e,{V:()=>r,vw:()=>o,G$:()=>s,tK:()=>a,MP:()=>h,XQ:()=>u,De:()=>l,Qm:()=>c,GQ:()=>f,NL:()=>p});var n="undefined"!=typeof navigator?navigator.userAgent.toLowerCase():"",r=-1!==n.indexOf("firefox"),o=-1!==n.indexOf("safari")&&-1==n.indexOf("chrom"),s=-1!==n.indexOf("webkit")&&-1==n.indexOf("edge"),a=-1!==n.indexOf("macintosh"),h=window.devicePixelRatio||1,u=function(){var t=!1;try{t=!!document.createElement("canvas").getContext("2d").setLineDash}catch(t){}return t}(),l="geolocation"in navigator,c="ontouchstart"in window,f="PointerEvent"in window,p=!!navigator.msPointerEnabled},29902:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var n=i(66901),r=i(77701),o=i(56510),s=i(13580),a=i(31219),h="renderOrder",u=function(t){function e(e){var i=e||{},r=(0,s.f0)({},i);delete r.style,delete r.renderBuffer,delete r.updateWhileAnimating,delete r.updateWhileInteracting,t.call(this,r),this.declutter_=void 0!==i.declutter&&i.declutter,this.renderBuffer_=void 0!==i.renderBuffer?i.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(i.style),this.updateWhileAnimating_=void 0!==i.updateWhileAnimating&&i.updateWhileAnimating,this.updateWhileInteracting_=void 0!==i.updateWhileInteracting&&i.updateWhileInteracting,this.renderMode_=i.renderMode||o.Z.VECTOR,this.type=n.Z.VECTOR}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDeclutter=function(){return this.declutter_},e.prototype.setDeclutter=function(t){this.declutter_=t},e.prototype.getRenderBuffer=function(){return this.renderBuffer_},e.prototype.getRenderOrder=function(){return this.get(h)},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.getUpdateWhileAnimating=function(){return this.updateWhileAnimating_},e.prototype.getUpdateWhileInteracting=function(){return this.updateWhileInteracting_},e.prototype.setRenderOrder=function(t){this.set(h,t)},e.prototype.setStyle=function(t){this.style_=void 0!==t?t:a.createDefaultStyle,this.styleFunction_=null===t?void 0:(0,a.toFunction)(this.style_),this.changed()},e.prototype.getRenderMode=function(){return this.renderMode_},e}(r.Z);u.prototype.getSource;const l=u},56510:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={IMAGE:"image",VECTOR:"vector"}},8835:function(t){t.exports=function(){"use strict";function t(i,n,r,o,s){for(;o>r;){if(o-r>600){var a=o-r+1,h=n-r+1,u=Math.log(a),l=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*l*(a-l)/a)*(h-a/2<0?-1:1);t(i,n,Math.max(r,Math.floor(n-h*l/a+c)),Math.min(o,Math.floor(n+(a-h)*l/a+c)),s)}var f=i[n],p=r,d=o;for(e(i,r,n),s(i[o],f)>0&&e(i,r,o);p<d;){for(e(i,p,d),p++,d--;s(i[p],f)<0;)p++;for(;s(i[d],f)>0;)d--}0===s(i[r],f)?e(i,r,d):e(i,++d,o),d<=n&&(r=d+1),n<=d&&(o=d-1)}}function e(t,e,i){var n=t[e];t[e]=t[i],t[i]=n}function i(t,e){return t<e?-1:t>e?1:0}return function(e,n,r,o,s){t(e,n,r||0,o||e.length-1,s||i)}}()},49545:(t,e,i)=>{"use strict";t.exports=r,t.exports.default=r;var n=i(8835);function r(t,e){if(!(this instanceof r))return new r(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&this._initFormat(e),this.clear()}function o(t,e,i){if(!i)return e.indexOf(t);for(var n=0;n<e.length;n++)if(i(t,e[n]))return n;return-1}function s(t,e){a(t,0,t.children.length,e,t)}function a(t,e,i,n,r){r||(r=_(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o,s=e;s<i;s++)o=t.children[s],h(r,t.leaf?n(o):o);return r}function h(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function u(t,e){return t.minX-e.minX}function l(t,e){return t.minY-e.minY}function c(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function d(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function _(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function g(t,e,i,r,o){for(var s,a=[e,i];a.length;)(i=a.pop())-(e=a.pop())<=r||(s=e+Math.ceil((i-e)/r/2)*r,n(t,s,e,i,o),a.push(e,s,s,i))}r.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,i=[],n=this.toBBox;if(!d(t,e))return i;for(var r,o,s,a,h=[];e;){for(r=0,o=e.children.length;r<o;r++)s=e.children[r],d(t,a=e.leaf?n(s):s)&&(e.leaf?i.push(s):p(t,a)?this._all(s,i):h.push(s));e=h.pop()}return i},collides:function(t){var e=this.data,i=this.toBBox;if(!d(t,e))return!1;for(var n,r,o,s,a=[];e;){for(n=0,r=e.children.length;n<r;n++)if(o=e.children[n],d(t,s=e.leaf?i(o):o)){if(e.leaf||p(t,s))return!0;a.push(o)}e=a.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,i=t.length;e<i;e++)this.insert(t[e]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=_([]),this},remove:function(t,e){if(!t)return this;for(var i,n,r,s,a=this.data,h=this.toBBox(t),u=[],l=[];a||u.length;){if(a||(a=u.pop(),n=u[u.length-1],i=l.pop(),s=!0),a.leaf&&-1!==(r=o(t,a.children,e)))return a.children.splice(r,1),u.push(a),this._condense(u),this;s||a.leaf||!p(a,h)?n?(i++,a=n.children[i],s=!1):a=null:(u.push(a),l.push(i),i=0,n=a,a=a.children[0])}return this},toBBox:function(t){return t},compareMinX:u,compareMinY:l,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var i=[];t;)t.leaf?e.push.apply(e,t.children):i.push.apply(i,t.children),t=i.pop();return e},_build:function(t,e,i,n){var r,o=i-e+1,a=this._maxEntries;if(o<=a)return s(r=_(t.slice(e,i+1)),this.toBBox),r;n||(n=Math.ceil(Math.log(o)/Math.log(a)),a=Math.ceil(o/Math.pow(a,n-1))),(r=_([])).leaf=!1,r.height=n;var h,u,l,c,f=Math.ceil(o/a),p=f*Math.ceil(Math.sqrt(a));for(g(t,e,i,p,this.compareMinX),h=e;h<=i;h+=p)for(g(t,h,l=Math.min(h+p-1,i),f,this.compareMinY),u=h;u<=l;u+=f)c=Math.min(u+f-1,l),r.children.push(this._build(t,u,c,n-1));return s(r,this.toBBox),r},_chooseSubtree:function(t,e,i,n){for(var r,o,s,a,h,u,l,f,p,d;n.push(e),!e.leaf&&n.length-1!==i;){for(l=f=1/0,r=0,o=e.children.length;r<o;r++)h=c(s=e.children[r]),p=t,d=s,(u=(Math.max(d.maxX,p.maxX)-Math.min(d.minX,p.minX))*(Math.max(d.maxY,p.maxY)-Math.min(d.minY,p.minY))-h)<f?(f=u,l=h<l?h:l,a=s):u===f&&h<l&&(l=h,a=s);e=a||e.children[0]}return e},_insert:function(t,e,i){var n=this.toBBox,r=i?t:n(t),o=[],s=this._chooseSubtree(r,this.data,e,o);for(s.children.push(t),h(s,r);e>=0&&o[e].children.length>this._maxEntries;)this._split(o,e),e--;this._adjustParentBBoxes(r,o,e)},_split:function(t,e){var i=t[e],n=i.children.length,r=this._minEntries;this._chooseSplitAxis(i,r,n);var o=this._chooseSplitIndex(i,r,n),a=_(i.children.splice(o,i.children.length-o));a.height=i.height,a.leaf=i.leaf,s(i,this.toBBox),s(a,this.toBBox),e?t[e-1].children.push(a):this._splitRoot(i,a)},_splitRoot:function(t,e){this.data=_([t,e]),this.data.height=t.height+1,this.data.leaf=!1,s(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,i){var n,r,o,s,h,u,l,f,p,d,_,g,m,y;for(u=l=1/0,n=e;n<=i-e;n++)p=r=a(t,0,n,this.toBBox),d=o=a(t,n,i,this.toBBox),void 0,void 0,void 0,void 0,_=Math.max(p.minX,d.minX),g=Math.max(p.minY,d.minY),m=Math.min(p.maxX,d.maxX),y=Math.min(p.maxY,d.maxY),s=Math.max(0,m-_)*Math.max(0,y-g),h=c(r)+c(o),s<u?(u=s,f=n,l=h<l?h:l):s===u&&h<l&&(l=h,f=n);return f},_chooseSplitAxis:function(t,e,i){var n=t.leaf?this.compareMinX:u,r=t.leaf?this.compareMinY:l;this._allDistMargin(t,e,i,n)<this._allDistMargin(t,e,i,r)&&t.children.sort(n)},_allDistMargin:function(t,e,i,n){t.children.sort(n);var r,o,s=this.toBBox,u=a(t,0,e,s),l=a(t,i-e,i,s),c=f(u)+f(l);for(r=e;r<i-e;r++)o=t.children[r],h(u,t.leaf?s(o):o),c+=f(u);for(r=i-e-1;r>=e;r--)o=t.children[r],h(l,t.leaf?s(o):o),c+=f(l);return c},_adjustParentBBoxes:function(t,e,i){for(var n=i;n>=0;n--)h(e[n],t)},_condense:function(t){for(var e,i=t.length-1;i>=0;i--)0===t[i].children.length?i>0?(e=t[i-1].children).splice(e.indexOf(t[i]),1):this.clear():s(t[i],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}},68509:(t,e,i)=>{"use strict";i.d(e,{Df:()=>h,bL:()=>u,mb:()=>l,X9:()=>c,He:()=>f,rc:()=>p,V4:()=>d,Tx:()=>_,PH:()=>g,ru:()=>m,oB:()=>y,yC:()=>v,GK:()=>x,Uh:()=>O,fk:()=>w,Ux:()=>k,qs:()=>D,Oz:()=>S,AE:()=>L});var n=i(67644),r=i(85386),o=i(13580),s=i(83482),a=i(82359),h="10px sans-serif",u=[0,0,0,1],l="round",c=[],f=0,p="round",d=10,_=[0,0,0,1],g="center",m="middle",y=[0,0,0,0],v=1,x=new s.Z,I={},E=null,C={},O=function(){var t,e,i=I,r="32px ",s=["monospace","serif"],a=s.length,h="wmytzilWMYTZIL@#/&?$%10";function u(t){for(var i=R(),n=100;n<=700;n+=300){for(var o=n+" ",u=!0,l=0;l<a;++l){var c=s[l];if(i.font=o+r+c,e=i.measureText(h).width,t!=c){i.font=o+r+t+","+c;var f=i.measureText(h).width;u=u&&f!=e}}if(u)return!0}return!1}function l(){var e=!0;for(var n in i)i[n]<60&&(u(n)?(i[n]=60,(0,o.ZH)(C),E=null,x.clear()):(++i[n],e=!1));e&&(clearInterval(t),t=void 0)}return function(e){var r=(0,n.tr)(e);if(r)for(var o=0,s=r.length;o<s;++o){var a=r[o];a in i||(i[a]=60,u(a)||(i[a]=0,void 0===t&&(t=setInterval(l,32))))}}}();function R(){return E||(E=(0,r.E4)(1,1)),E}var F,M,w=(M=C,function(t){var e=M[t];return null==e&&(F||((F=document.createElement("span")).textContent="M",F.style.margin=F.style.padding="0 !important",F.style.position="absolute !important",F.style.left="-99999px !important"),F.style.font=t,document.body.appendChild(F),e=M[t]=F.offsetHeight,document.body.removeChild(F)),e});function k(t,e){var i=R();return t!=i.font&&(i.font=t),i.measureText(e).width}function D(t,e,i,n){0!==e&&(t.translate(i,n),t.rotate(e),t.translate(-i,-n))}var S=(0,a.Ue)();function L(t,e,i,n,r,o,s,a,h,u,l){var c;1!=i&&(c=t.globalAlpha,t.globalAlpha=c*i),e&&t.setTransform.apply(t,e),t.drawImage(n,r,o,s,a,h,u,s*l,a*l),c&&(t.globalAlpha=c),e&&t.setTransform.apply(t,S)}},97016:(t,e,i)=>{"use strict";i.d(e,{Z:()=>C});var n=i(49179),r=i(78426),o=i(19629),s=i(13910),a=i(79682),h=i(38906),u=i(13002),l=i(9520),c=i(73381),f=i(21915),p=i(80800),d=i(64011);function _(t,e){return[[-1/0,-1/0,1/0,1/0]]}var g=i(13580),m=i(71405),y=i(82418),v=i(25753),x=i(73101),I=function(t){function e(e,i){t.call(this,e),this.feature=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(l.ZP),E=function(t){function e(e){var i=e||{};t.call(this,{attributions:i.attributions,projection:void 0,state:y.Z.READY,wrapX:void 0===i.wrapX||i.wrapX}),this.loader_=d.Zn,this.format_=i.format,this.overlaps_=null==i.overlaps||i.overlaps,this.url_=i.url,void 0!==i.loader?this.loader_=i.loader:void 0!==this.url_&&((0,h.h)(this.format_,7),this.loader_=(0,p.B)(this.url_,this.format_)),this.strategy_=void 0!==i.strategy?i.strategy:_;var n,o,s=void 0===i.useSpatialIndex||i.useSpatialIndex;this.featuresRtree_=s?new x.Z:null,this.loadedExtentsRtree_=new x.Z,this.nullGeometryFeatures_={},this.idIndex_={},this.undefIdIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null,Array.isArray(i.features)?o=i.features:i.features&&(o=(n=i.features).getArray()),s||void 0!==n||(n=new r.Z(o)),void 0!==o&&this.addFeaturesInternal(o),void 0!==n&&this.bindFeaturesCollection_(n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addFeature=function(t){this.addFeatureInternal(t),this.changed()},e.prototype.addFeatureInternal=function(t){var e=(0,n.sq)(t);if(this.addToIndex_(e,t)){this.setupChangeEvents_(e,t);var i=t.getGeometry();if(i){var r=i.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(r,t)}else this.nullGeometryFeatures_[e]=t;this.dispatchEvent(new I(v.Z.ADDFEATURE,t))}},e.prototype.setupChangeEvents_=function(t,e){this.featureChangeKeys_[t]=[(0,u.oL)(e,c.Z.CHANGE,this.handleFeatureChange_,this),(0,u.oL)(e,s.Z.PROPERTYCHANGE,this.handleFeatureChange_,this)]},e.prototype.addToIndex_=function(t,e){var i=!0,n=e.getId();return void 0!==n?n.toString()in this.idIndex_?i=!1:this.idIndex_[n.toString()]=e:((0,h.h)(!(t in this.undefIdIndex_),30),this.undefIdIndex_[t]=e),i},e.prototype.addFeatures=function(t){this.addFeaturesInternal(t),this.changed()},e.prototype.addFeaturesInternal=function(t){for(var e=[],i=[],r=[],o=0,s=t.length;o<s;o++){var a=t[o],h=(0,n.sq)(a);this.addToIndex_(h,a)&&i.push(a)}for(var u=0,l=i.length;u<l;u++){var c=i[u],f=(0,n.sq)(c);this.setupChangeEvents_(f,c);var p=c.getGeometry();if(p){var d=p.getExtent();e.push(d),r.push(c)}else this.nullGeometryFeatures_[f]=c}this.featuresRtree_&&this.featuresRtree_.load(e,r);for(var _=0,g=i.length;_<g;_++)this.dispatchEvent(new I(v.Z.ADDFEATURE,i[_]))},e.prototype.bindFeaturesCollection_=function(t){var e=!1;(0,u.oL)(this,v.Z.ADDFEATURE,(function(i){e||(e=!0,t.push(i.feature),e=!1)})),(0,u.oL)(this,v.Z.REMOVEFEATURE,(function(i){e||(e=!0,t.remove(i.feature),e=!1)})),(0,u.oL)(t,o.Z.ADD,(function(t){e||(e=!0,this.addFeature(t.element),e=!1)}),this),(0,u.oL)(t,o.Z.REMOVE,(function(t){e||(e=!0,this.removeFeature(t.element),e=!1)}),this),this.featuresCollection_=t},e.prototype.clear=function(t){if(t){for(var e in this.featureChangeKeys_)this.featureChangeKeys_[e].forEach(u.bN);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.undefIdIndex_={})}else if(this.featuresRtree_)for(var i in this.featuresRtree_.forEach(this.removeFeatureInternal,this),this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[i]);this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.loadedExtentsRtree_.clear(),this.nullGeometryFeatures_={};var n=new I(v.Z.CLEAR);this.dispatchEvent(n),this.changed()},e.prototype.forEachFeature=function(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)},e.prototype.forEachFeatureAtCoordinateDirect=function(t,e){var i=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(i,(function(i){return i.getGeometry().intersectsCoordinate(t)?e(i):void 0}))},e.prototype.forEachFeatureInExtent=function(t,e){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,e);this.featuresCollection_&&this.featuresCollection_.forEach(e)},e.prototype.forEachFeatureIntersectingExtent=function(t,e){return this.forEachFeatureInExtent(t,(function(i){if(i.getGeometry().intersectsExtent(t)){var n=e(i);if(n)return n}}))},e.prototype.getFeaturesCollection=function(){return this.featuresCollection_},e.prototype.getFeatures=function(){var t;return this.featuresCollection_?t=this.featuresCollection_.getArray():this.featuresRtree_&&(t=this.featuresRtree_.getAll(),(0,g.xb)(this.nullGeometryFeatures_)||(0,a.l7)(t,(0,g.KX)(this.nullGeometryFeatures_))),t},e.prototype.getFeaturesAtCoordinate=function(t){var e=[];return this.forEachFeatureAtCoordinateDirect(t,(function(t){e.push(t)})),e},e.prototype.getFeaturesInExtent=function(t){return this.featuresRtree_.getInExtent(t)},e.prototype.getClosestFeatureToCoordinate=function(t,e){var i=t[0],n=t[1],r=null,o=[NaN,NaN],s=1/0,a=[-1/0,-1/0,1/0,1/0],h=e||d.uX;return this.featuresRtree_.forEachInExtent(a,(function(t){if(h(t)){var e=t.getGeometry(),u=s;if((s=e.closestPointXY(i,n,o,s))<u){r=t;var l=Math.sqrt(s);a[0]=i-l,a[1]=n-l,a[2]=i+l,a[3]=n+l}}})),r},e.prototype.getExtent=function(t){return this.featuresRtree_.getExtent(t)},e.prototype.getFeatureById=function(t){var e=this.idIndex_[t.toString()];return void 0!==e?e:null},e.prototype.getFormat=function(){return this.format_},e.prototype.getOverlaps=function(){return this.overlaps_},e.prototype.getUrl=function(){return this.url_},e.prototype.handleFeatureChange_=function(t){var e=t.target,i=(0,n.sq)(e),r=e.getGeometry();if(r){var o=r.getExtent();i in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[i],this.featuresRtree_&&this.featuresRtree_.insert(o,e)):this.featuresRtree_&&this.featuresRtree_.update(o,e)}else i in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(e),this.nullGeometryFeatures_[i]=e);var s=e.getId();if(void 0!==s){var a=s.toString();i in this.undefIdIndex_?(delete this.undefIdIndex_[i],this.idIndex_[a]=e):this.idIndex_[a]!==e&&(this.removeFromIdIndex_(e),this.idIndex_[a]=e)}else i in this.undefIdIndex_||(this.removeFromIdIndex_(e),this.undefIdIndex_[i]=e);this.changed(),this.dispatchEvent(new I(v.Z.CHANGEFEATURE,e))},e.prototype.hasFeature=function(t){var e=t.getId();return void 0!==e?e in this.idIndex_:(0,n.sq)(t)in this.undefIdIndex_},e.prototype.isEmpty=function(){return this.featuresRtree_.isEmpty()&&(0,g.xb)(this.nullGeometryFeatures_)},e.prototype.loadFeatures=function(t,e,i){var n=this,r=this.loadedExtentsRtree_,o=this.strategy_(t,e);this.loading=!1;for(var s=function(t,s){var a=o[t];r.forEachInExtent(a,(function(t){return(0,f.r4)(t.extent,a)}))||(n.loader_.call(n,a,e,i),r.insert(a,{extent:a.slice()}),n.loading=n.loader_!==d.Zn)},a=0,h=o.length;a<h;++a)s(a)},e.prototype.removeLoadedExtent=function(t){var e,i=this.loadedExtentsRtree_;i.forEachInExtent(t,(function(i){if((0,f.fS)(i.extent,t))return e=i,!0})),e&&i.remove(e)},e.prototype.removeFeature=function(t){var e=(0,n.sq)(t);e in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[e]:this.featuresRtree_&&this.featuresRtree_.remove(t),this.removeFeatureInternal(t),this.changed()},e.prototype.removeFeatureInternal=function(t){var e=(0,n.sq)(t);this.featureChangeKeys_[e].forEach(u.bN),delete this.featureChangeKeys_[e];var i=t.getId();void 0!==i?delete this.idIndex_[i.toString()]:delete this.undefIdIndex_[e],this.dispatchEvent(new I(v.Z.REMOVEFEATURE,t))},e.prototype.removeFromIdIndex_=function(t){var e=!1;for(var i in this.idIndex_)if(this.idIndex_[i]===t){delete this.idIndex_[i],e=!0;break}return e},e.prototype.setLoader=function(t){this.loader_=t},e}(m.Z);const C=E},25753:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature"}},73101:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var n=i(49179),r=i(49545),o=i.n(r),s=i(21915),a=i(13580),h=function(t){this.rbush_=o()(t,void 0),this.items_={}};h.prototype.insert=function(t,e){var i={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(i),this.items_[(0,n.sq)(e)]=i},h.prototype.load=function(t,e){for(var i=new Array(e.length),r=0,o=e.length;r<o;r++){var s=t[r],a=e[r],h={minX:s[0],minY:s[1],maxX:s[2],maxY:s[3],value:a};i[r]=h,this.items_[(0,n.sq)(a)]=h}this.rbush_.load(i)},h.prototype.remove=function(t){var e=(0,n.sq)(t),i=this.items_[e];return delete this.items_[e],null!==this.rbush_.remove(i)},h.prototype.update=function(t,e){var i=this.items_[(0,n.sq)(e)],r=[i.minX,i.minY,i.maxX,i.maxY];(0,s.fS)(r,t)||(this.remove(e),this.insert(t,e))},h.prototype.getAll=function(){return this.rbush_.all().map((function(t){return t.value}))},h.prototype.getInExtent=function(t){var e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this.rbush_.search(e).map((function(t){return t.value}))},h.prototype.forEach=function(t,e){return this.forEach_(this.getAll(),t,e)},h.prototype.forEachInExtent=function(t,e,i){return this.forEach_(this.getInExtent(t),e,i)},h.prototype.forEach_=function(t,e,i){for(var n,r=0,o=t.length;r<o;r++)if(n=e.call(i,t[r]))return n;return n},h.prototype.isEmpty=function(){return(0,a.xb)(this.items_)},h.prototype.clear=function(){this.rbush_.clear(),this.items_={}},h.prototype.getExtent=function(t){var e=this.rbush_.toJSON();return(0,s.T9)(e.minX,e.minY,e.maxX,e.maxY,t)},h.prototype.concat=function(t){for(var e in this.rbush_.load(t.rbush_.all()),t.items_)this.items_[e]=t.items_[e]};const u=h},9371:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>n});const n=function(t){function e(e){var i=e||{};t.call(this,{points:1/0,fill:i.fill,radius:i.radius,stroke:i.stroke,atlasManager:i.atlasManager})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){var t=new e({fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,radius:this.getRadius(),atlasManager:this.atlasManager_});return t.setOpacity(this.getOpacity()),t.setScale(this.getScale()),t},e.prototype.setRadius=function(t){this.radius_=t,this.render_(this.atlasManager_)},e}(i(18663).default)},98185:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>s});var n=i(49179),r=i(8913),o=function(t){var e=t||{};this.color_=void 0!==e.color?e.color:null,this.checksum_=void 0};o.prototype.clone=function(){var t=this.getColor();return new o({color:Array.isArray(t)?t.slice():t||void 0})},o.prototype.getColor=function(){return this.color_},o.prototype.setColor=function(t){this.color_=t,this.checksum_=void 0},o.prototype.getChecksum=function(){if(void 0===this.checksum_){var t=this.color_;t?Array.isArray(t)||"string"==typeof t?this.checksum_="f"+(0,r.XC)(t):this.checksum_=(0,n.sq)(this.color_):this.checksum_="f-"}return this.checksum_};const s=o},48039:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var n=i(49179),r=function(t){this.opacity_=t.opacity,this.rotateWithView_=t.rotateWithView,this.rotation_=t.rotation,this.scale_=t.scale};r.prototype.clone=function(){return new r({opacity:this.getOpacity(),scale:this.getScale(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView()})},r.prototype.getOpacity=function(){return this.opacity_},r.prototype.getRotateWithView=function(){return this.rotateWithView_},r.prototype.getRotation=function(){return this.rotation_},r.prototype.getScale=function(){return this.scale_},r.prototype.getSnapToPixel=function(){return!1},r.prototype.getAnchor=function(){return(0,n.O3)()},r.prototype.getImage=function(t){return(0,n.O3)()},r.prototype.getHitDetectionImage=function(t){return(0,n.O3)()},r.prototype.getImageState=function(){return(0,n.O3)()},r.prototype.getImageSize=function(){return(0,n.O3)()},r.prototype.getHitDetectionImageSize=function(){return(0,n.O3)()},r.prototype.getOrigin=function(){return(0,n.O3)()},r.prototype.getSize=function(){return(0,n.O3)()},r.prototype.setOpacity=function(t){this.opacity_=t},r.prototype.setRotateWithView=function(t){this.rotateWithView_=t},r.prototype.setRotation=function(t){this.rotation_=t},r.prototype.setScale=function(t){this.scale_=t},r.prototype.setSnapToPixel=function(t){},r.prototype.listenImageChange=function(t,e){return(0,n.O3)()},r.prototype.load=function(){(0,n.O3)()},r.prototype.unlistenImageChange=function(t,e){(0,n.O3)()};const o=r},18663:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>u});var n=i(8913),r=i(45120),o=i(85386),s=i(91358),a=i(11256),h=i(68509);const u=function(t){function e(e){var i=void 0!==e.rotateWithView&&e.rotateWithView;t.call(this,{opacity:1,rotateWithView:i,rotation:void 0!==e.rotation?e.rotation:0,scale:1}),this.checksums_=null,this.canvas_=null,this.hitDetectionCanvas_=null,this.fill_=void 0!==e.fill?e.fill:null,this.origin_=[0,0],this.points_=e.points,this.radius_=void 0!==e.radius?e.radius:e.radius1,this.radius2_=e.radius2,this.angle_=void 0!==e.angle?e.angle:0,this.stroke_=void 0!==e.stroke?e.stroke:null,this.anchor_=null,this.size_=null,this.imageSize_=null,this.hitDetectionImageSize_=null,this.atlasManager_=e.atlasManager,this.render_(this.atlasManager_)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){var t=new e({fill:this.getFill()?this.getFill().clone():void 0,points:this.getPoints(),radius:this.getRadius(),radius2:this.getRadius2(),angle:this.getAngle(),stroke:this.getStroke()?this.getStroke().clone():void 0,rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),atlasManager:this.atlasManager_});return t.setOpacity(this.getOpacity()),t.setScale(this.getScale()),t},e.prototype.getAnchor=function(){return this.anchor_},e.prototype.getAngle=function(){return this.angle_},e.prototype.getFill=function(){return this.fill_},e.prototype.getHitDetectionImage=function(t){return this.hitDetectionCanvas_},e.prototype.getImage=function(t){return this.canvas_},e.prototype.getImageSize=function(){return this.imageSize_},e.prototype.getHitDetectionImageSize=function(){return this.hitDetectionImageSize_},e.prototype.getImageState=function(){return a.Z.LOADED},e.prototype.getOrigin=function(){return this.origin_},e.prototype.getPoints=function(){return this.points_},e.prototype.getRadius=function(){return this.radius_},e.prototype.getRadius2=function(){return this.radius2_},e.prototype.getSize=function(){return this.size_},e.prototype.getStroke=function(){return this.stroke_},e.prototype.listenImageChange=function(t,e){},e.prototype.load=function(){},e.prototype.unlistenImageChange=function(t,e){},e.prototype.render_=function(t){var e,i,n="",a="",u=0,l=null,c=0,f=0;this.stroke_&&(null===(i=this.stroke_.getColor())&&(i=h.Tx),i=(0,r.y)(i),void 0===(f=this.stroke_.getWidth())&&(f=h.yC),l=this.stroke_.getLineDash(),c=this.stroke_.getLineDashOffset(),s.XQ||(l=null,c=0),void 0===(a=this.stroke_.getLineJoin())&&(a=h.rc),void 0===(n=this.stroke_.getLineCap())&&(n=h.mb),void 0===(u=this.stroke_.getMiterLimit())&&(u=h.V4));var p=2*(this.radius_+f)+1,d={strokeStyle:i,strokeWidth:f,size:p,lineCap:n,lineDash:l,lineDashOffset:c,lineJoin:a,miterLimit:u};if(void 0===t){var _=(0,o.E4)(p,p);this.canvas_=_.canvas,e=p=this.canvas_.width,this.draw_(d,_,0,0),this.createHitDetectionCanvas_(d)}else{p=Math.round(p);var g,m=!this.fill_;m&&(g=this.drawHitDetectionCanvas_.bind(this,d));var y=this.getChecksum(),v=t.add(y,p,p,this.draw_.bind(this,d),g);this.canvas_=v.image,this.origin_=[v.offsetX,v.offsetY],e=v.image.width,m?(this.hitDetectionCanvas_=v.hitImage,this.hitDetectionImageSize_=[v.hitImage.width,v.hitImage.height]):(this.hitDetectionCanvas_=this.canvas_,this.hitDetectionImageSize_=[e,e])}this.anchor_=[p/2,p/2],this.size_=[p,p],this.imageSize_=[e,e]},e.prototype.draw_=function(t,e,i,n){var o,s,a;e.setTransform(1,0,0,1,0,0),e.translate(i,n),e.beginPath();var u=this.points_;if(u===1/0)e.arc(t.size/2,t.size/2,this.radius_,0,2*Math.PI,!0);else{var l=void 0!==this.radius2_?this.radius2_:this.radius_;for(l!==this.radius_&&(u*=2),o=0;o<=u;o++)s=2*o*Math.PI/u-Math.PI/2+this.angle_,a=o%2==0?this.radius_:l,e.lineTo(t.size/2+a*Math.cos(s),t.size/2+a*Math.sin(s))}if(this.fill_){var c=this.fill_.getColor();null===c&&(c=h.bL),e.fillStyle=(0,r.y)(c),e.fill()}this.stroke_&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.lineCap=t.lineCap,e.lineJoin=t.lineJoin,e.miterLimit=t.miterLimit,e.stroke()),e.closePath()},e.prototype.createHitDetectionCanvas_=function(t){if(this.hitDetectionImageSize_=[t.size,t.size],this.fill_)this.hitDetectionCanvas_=this.canvas_;else{var e=(0,o.E4)(t.size,t.size);this.hitDetectionCanvas_=e.canvas,this.drawHitDetectionCanvas_(t,e,0,0)}},e.prototype.drawHitDetectionCanvas_=function(t,e,i,r){e.setTransform(1,0,0,1,0,0),e.translate(i,r),e.beginPath();var o=this.points_;if(o===1/0)e.arc(t.size/2,t.size/2,this.radius_,0,2*Math.PI,!0);else{var s,a,u,l=void 0!==this.radius2_?this.radius2_:this.radius_;for(l!==this.radius_&&(o*=2),s=0;s<=o;s++)u=2*s*Math.PI/o-Math.PI/2+this.angle_,a=s%2==0?this.radius_:l,e.lineTo(t.size/2+a*Math.cos(u),t.size/2+a*Math.sin(u))}e.fillStyle=(0,n.XC)(h.bL),e.fill(),this.stroke_&&(e.strokeStyle=t.strokeStyle,e.lineWidth=t.strokeWidth,t.lineDash&&(e.setLineDash(t.lineDash),e.lineDashOffset=t.lineDashOffset),e.stroke()),e.closePath()},e.prototype.getChecksum=function(){var t=this.stroke_?this.stroke_.getChecksum():"-",e=this.fill_?this.fill_.getChecksum():"-";if(!this.checksums_||t!=this.checksums_[1]||e!=this.checksums_[2]||this.radius_!=this.checksums_[3]||this.radius2_!=this.checksums_[4]||this.angle_!=this.checksums_[5]||this.points_!=this.checksums_[6]){var i="r"+t+e+(void 0!==this.radius_?this.radius_.toString():"-")+(void 0!==this.radius2_?this.radius2_.toString():"-")+(void 0!==this.angle_?this.angle_.toString():"-")+(void 0!==this.points_?this.points_.toString():"-");this.checksums_=[i,t,e,this.radius_,this.radius2_,this.angle_,this.points_]}return this.checksums_[0]},e}(i(48039).default)},20767:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var n=i(49179),r=function(t){var e=t||{};this.color_=void 0!==e.color?e.color:null,this.lineCap_=e.lineCap,this.lineDash_=void 0!==e.lineDash?e.lineDash:null,this.lineDashOffset_=e.lineDashOffset,this.lineJoin_=e.lineJoin,this.miterLimit_=e.miterLimit,this.width_=e.width,this.checksum_=void 0};r.prototype.clone=function(){var t=this.getColor();return new r({color:Array.isArray(t)?t.slice():t||void 0,lineCap:this.getLineCap(),lineDash:this.getLineDash()?this.getLineDash().slice():void 0,lineDashOffset:this.getLineDashOffset(),lineJoin:this.getLineJoin(),miterLimit:this.getMiterLimit(),width:this.getWidth()})},r.prototype.getColor=function(){return this.color_},r.prototype.getLineCap=function(){return this.lineCap_},r.prototype.getLineDash=function(){return this.lineDash_},r.prototype.getLineDashOffset=function(){return this.lineDashOffset_},r.prototype.getLineJoin=function(){return this.lineJoin_},r.prototype.getMiterLimit=function(){return this.miterLimit_},r.prototype.getWidth=function(){return this.width_},r.prototype.setColor=function(t){this.color_=t,this.checksum_=void 0},r.prototype.setLineCap=function(t){this.lineCap_=t,this.checksum_=void 0},r.prototype.setLineDash=function(t){this.lineDash_=t,this.checksum_=void 0},r.prototype.setLineDashOffset=function(t){this.lineDashOffset_=t,this.checksum_=void 0},r.prototype.setLineJoin=function(t){this.lineJoin_=t,this.checksum_=void 0},r.prototype.setMiterLimit=function(t){this.miterLimit_=t,this.checksum_=void 0},r.prototype.setWidth=function(t){this.width_=t,this.checksum_=void 0},r.prototype.getChecksum=function(){return void 0===this.checksum_&&(this.checksum_="s",this.color_?"string"==typeof this.color_?this.checksum_+=this.color_:this.checksum_+=(0,n.sq)(this.color_):this.checksum_+="-",this.checksum_+=","+(void 0!==this.lineCap_?this.lineCap_.toString():"-")+","+(this.lineDash_?this.lineDash_.toString():"-")+","+(void 0!==this.lineDashOffset_?this.lineDashOffset_:"-")+","+(void 0!==this.lineJoin_?this.lineJoin_:"-")+","+(void 0!==this.miterLimit_?this.miterLimit_.toString():"-")+","+(void 0!==this.width_?this.width_.toString():"-")),this.checksum_};const o=r},31219:(t,e,i)=>{"use strict";i.r(e),i.d(e,{toFunction:()=>u,createDefaultStyle:()=>c,createEditingStyle:()=>f,default:()=>d});var n=i(38906),r=i(28795),o=i(9371),s=i(98185),a=i(20767),h=function(t){var e=t||{};this.geometry_=null,this.geometryFunction_=p,void 0!==e.geometry&&this.setGeometry(e.geometry),this.fill_=void 0!==e.fill?e.fill:null,this.image_=void 0!==e.image?e.image:null,this.renderer_=void 0!==e.renderer?e.renderer:null,this.stroke_=void 0!==e.stroke?e.stroke:null,this.text_=void 0!==e.text?e.text:null,this.zIndex_=e.zIndex};function u(t){var e,i;"function"==typeof t?e=t:(Array.isArray(t)?i=t:((0,n.h)("function"==typeof t.getZIndex,41),i=[t]),e=function(){return i});return e}h.prototype.clone=function(){var t=this.getGeometry();return t&&"object"==typeof t&&(t=t.clone()),new h({geometry:t,fill:this.getFill()?this.getFill().clone():void 0,image:this.getImage()?this.getImage().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,text:this.getText()?this.getText().clone():void 0,zIndex:this.getZIndex()})},h.prototype.getRenderer=function(){return this.renderer_},h.prototype.setRenderer=function(t){this.renderer_=t},h.prototype.getGeometry=function(){return this.geometry_},h.prototype.getGeometryFunction=function(){return this.geometryFunction_},h.prototype.getFill=function(){return this.fill_},h.prototype.setFill=function(t){this.fill_=t},h.prototype.getImage=function(){return this.image_},h.prototype.setImage=function(t){this.image_=t},h.prototype.getStroke=function(){return this.stroke_},h.prototype.setStroke=function(t){this.stroke_=t},h.prototype.getText=function(){return this.text_},h.prototype.setText=function(t){this.text_=t},h.prototype.getZIndex=function(){return this.zIndex_},h.prototype.setGeometry=function(t){"function"==typeof t?this.geometryFunction_=t:"string"==typeof t?this.geometryFunction_=function(e){return e.get(t)}:t?void 0!==t&&(this.geometryFunction_=function(){return t}):this.geometryFunction_=p,this.geometry_=t},h.prototype.setZIndex=function(t){this.zIndex_=t};var l=null;function c(t,e){if(!l){var i=new s.default({color:"rgba(255,255,255,0.4)"}),n=new a.default({color:"#3399CC",width:1.25});l=[new h({image:new o.default({fill:i,stroke:n,radius:5}),fill:i,stroke:n})]}return l}function f(){var t={},e=[255,255,255,1],i=[0,153,255,1];return t[r.Z.POLYGON]=[new h({fill:new s.default({color:[255,255,255,.5]})})],t[r.Z.MULTI_POLYGON]=t[r.Z.POLYGON],t[r.Z.LINE_STRING]=[new h({stroke:new a.default({color:e,width:5})}),new h({stroke:new a.default({color:i,width:3})})],t[r.Z.MULTI_LINE_STRING]=t[r.Z.LINE_STRING],t[r.Z.CIRCLE]=t[r.Z.POLYGON].concat(t[r.Z.LINE_STRING]),t[r.Z.POINT]=[new h({image:new o.default({radius:6,fill:new s.default({color:i}),stroke:new a.default({color:e,width:1.5})}),zIndex:1/0})],t[r.Z.MULTI_POINT]=t[r.Z.POINT],t[r.Z.GEOMETRY_COLLECTION]=t[r.Z.POLYGON].concat(t[r.Z.LINE_STRING],t[r.Z.POINT]),t}function p(t){return t.getGeometry()}const d=h}}]);