(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4123],{30006:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var n=i(73381);const o={SINGLECLICK:"singleclick",CLICK:n.Z.CLICK,DBLCLICK:n.Z.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},6908:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={ANIMATING:0,INTERACTING:1}},90728:(t,e,i)=>{"use strict";i.d(e,{IH:()=>r,oL:()=>s,I8:()=>a,fS:()=>h,U1:()=>l,bA:()=>d,bI:()=>u,TE:()=>c,Bs:()=>p});var n=i(21882),o=i(79313);function r(t,e){return t[0]+=e[0],t[1]+=e[1],t}function s(t,e){var i,n,o=t[0],r=t[1],s=e[0],a=e[1],h=s[0],l=s[1],d=a[0],u=a[1],c=d-h,p=u-l,f=0===c&&0===p?0:(c*(o-h)+p*(r-l))/(c*c+p*p||0);return f<=0?(i=h,n=l):f>=1?(i=d,n=u):(i=h+f*c,n=l+f*p),[i,n]}function a(t,e,i){var r=(0,n.$W)(e+180,360)-180,s=Math.abs(3600*r),a=i||0,h=Math.pow(10,a),l=Math.floor(s/3600),d=Math.floor((s-3600*l)/60),u=s-3600*l-60*d;return(u=Math.ceil(u*h)/h)>=60&&(u=0,d+=1),d>=60&&(d=0,l+=1),l+"° "+(0,o.v)(d,2)+"′ "+(0,o.v)(u,2,a)+"″"+(0==r?"":" "+t.charAt(r<0?1:0))}function h(t,e){for(var i=!0,n=t.length-1;n>=0;--n)if(t[n]!=e[n]){i=!1;break}return i}function l(t,e){var i=Math.cos(e),n=Math.sin(e),o=t[0]*i-t[1]*n,r=t[1]*i+t[0]*n;return t[0]=o,t[1]=r,t}function d(t,e){return t[0]*=e,t[1]*=e,t}function u(t,e){var i=t[0]-e[0],n=t[1]-e[1];return i*i+n*n}function c(t,e){return Math.sqrt(u(t,e))}function p(t,e){return u(t,s(t,e))}},86320:(t,e,i)=>{"use strict";function n(t){return Math.pow(t,3)}function o(t){return 1-n(1-t)}function r(t){return 3*t*t-2*t*t*t}function s(t){return t}i.d(e,{YQ:()=>n,Vv:()=>o,rd:()=>r,GE:()=>s})},36403:(t,e,i)=>{"use strict";i.d(e,{Ko:()=>a,aj:()=>h,T_:()=>l,Bx:()=>d,v8:()=>u,Fi:()=>c,MJ:()=>p,Kf:()=>f,rM:()=>_,QC:()=>v,vY:()=>g,TN:()=>y,QL:()=>C,Xp:()=>E});var n=i(30006),o=i(38906),r=i(64011),s=i(91358),a=function(t){var e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},h=function(t){var e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},l=function(t){return t.target.getTargetElement()===document.activeElement},d=r.uX,u=function(t){var e=t.originalEvent;return 0==e.button&&!(s.G$&&s.tK&&e.ctrlKey)},c=r.Dv,p=function(t){return"pointermove"==t.type},f=function(t){return t.type==n.Z.SINGLECLICK},_=function(t){var e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},v=function(t){var e=t.originalEvent;return!e.altKey&&(s.tK?e.metaKey:e.ctrlKey)&&!e.shiftKey},g=function(t){var e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},y=function(t){var e=t.originalEvent.target.tagName;return"INPUT"!==e&&"SELECT"!==e&&"TEXTAREA"!==e},C=function(t){var e=t.pointerEvent;return(0,o.h)(void 0!==e,56),"mouse"==e.pointerType},E=function(t){var e=t.pointerEvent;return(0,o.h)(void 0!==e,56),e.isPrimary&&0===e.button}},44538:(t,e,i)=>{"use strict";i.d(e,{Z:()=>v});var n=i(79682),o=i(21915),r=i(3696),s=i(28795),a=i(32538),h=i(83729),l=i(38667),d=i(86204),u=i(21422),c=i(60897),p=i(4027),f=i(95173),_=i(62418);const v=function(t){function e(e,i){t.call(this),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===i||Array.isArray(e[0])?this.setCoordinates(e,i):this.setFlatCoordinates(i,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendCoordinate=function(t){this.flatCoordinates?(0,n.l7)(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,i,n){return n<(0,o.qf)(this.getExtent(),t,e)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,h.Bv)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,h.H$)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,i,n))},e.prototype.forEachSegment=function(t){return(0,f.E)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinateAtM=function(t,e){if(this.layout!=r.Z.XYM&&this.layout!=r.Z.XYZM)return null;var i=void 0!==e&&e;return(0,u.iJ)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i)},e.prototype.getCoordinates=function(){return(0,d.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getCoordinateAt=function(t,e){return(0,u.WW)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e)},e.prototype.getLength=function(){return(0,p.W)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getFlatMidpoint=function(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[];return i.length=(0,_.dt)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,i,0),new e(i,r.Z.XY)},e.prototype.getType=function(){return s.Z.LINE_STRING},e.prototype.intersectsExtent=function(t){return(0,c.Kz)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,l.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(a.ZP)},25642:(t,e,i)=>{"use strict";i.d(e,{Z:()=>_});var n=i(79682),o=i(21915),r=i(3696),s=i(28795),a=i(44538),h=i(32538),l=i(83729),d=i(38667),u=i(86204),c=i(21422),p=i(60897),f=i(62418);const _=function(t){function e(e,i,o){if(t.call(this),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,i);else if(void 0!==i&&o)this.setFlatCoordinates(i,e),this.ends_=o;else{for(var r=this.getLayout(),s=e,a=[],h=[],l=0,d=s.length;l<d;++l){var u=s[l];0===l&&(r=u.getLayout()),(0,n.l7)(a,u.getFlatCoordinates()),h.push(a.length)}this.setFlatCoordinates(r,a),this.ends_=h}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendLineString=function(t){this.flatCoordinates?(0,n.l7)(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice())},e.prototype.closestPointXY=function(t,e,i,n){return n<(0,o.qf)(this.getExtent(),t,e)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,l.Af)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,l.Xl)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,i,n))},e.prototype.getCoordinateAtM=function(t,e,i){if(this.layout!=r.Z.XYM&&this.layout!=r.Z.XYZM||0===this.flatCoordinates.length)return null;var n=void 0!==e&&e,o=void 0!==i&&i;return(0,c.dG)(this.flatCoordinates,0,this.ends_,this.stride,t,n,o)},e.prototype.getCoordinates=function(){return(0,u.o1)(this.flatCoordinates,0,this.ends_,this.stride)},e.prototype.getEnds=function(){return this.ends_},e.prototype.getLineString=function(t){return t<0||this.ends_.length<=t?null:new a.Z(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},e.prototype.getLineStrings=function(){for(var t=this.flatCoordinates,e=this.ends_,i=this.layout,n=[],o=0,r=0,s=e.length;r<s;++r){var h=e[r],l=new a.Z(t.slice(o,h),i);n.push(l),o=h}return n},e.prototype.getFlatMidpoints=function(){for(var t=[],e=this.flatCoordinates,i=0,o=this.ends_,r=this.stride,s=0,a=o.length;s<a;++s){var h=o[s],l=(0,c.WW)(e,i,h,r,.5);(0,n.l7)(t,l),i=h}return t},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[],n=[];return i.length=(0,f.UJ)(this.flatCoordinates,0,this.ends_,this.stride,t,i,0,n),new e(i,r.Z.XY,n)},e.prototype.getType=function(){return s.Z.MULTI_LINE_STRING},e.prototype.intersectsExtent=function(t){return(0,p.AW)(this.flatCoordinates,0,this.ends_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var i=(0,d._5)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===i.length?0:i[i.length-1],this.changed()},e}(h.ZP)},52329:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var n=i(79682),o=i(21915),r=i(28795),s=i(52043),a=i(32538),h=i(38667),l=i(86204),d=i(21882);const u=function(t){function e(e,i){t.call(this),i&&!Array.isArray(e[0])?this.setFlatCoordinates(i,e):this.setCoordinates(e,i)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendPoint=function(t){this.flatCoordinates?(0,n.l7)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,i,n){if(n<(0,o.qf)(this.getExtent(),t,e))return n;for(var r=this.flatCoordinates,s=this.stride,a=0,h=r.length;a<h;a+=s){var l=(0,d.bI)(t,e,r[a],r[a+1]);if(l<n){n=l;for(var u=0;u<s;++u)i[u]=r[a+u];i.length=s}}return n},e.prototype.getCoordinates=function(){return(0,l.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getPoint=function(t){var e=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||e<=t?null:new s.Z(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)},e.prototype.getPoints=function(){for(var t=this.flatCoordinates,e=this.layout,i=this.stride,n=[],o=0,r=t.length;o<r;o+=i){var a=new s.Z(t.slice(o,o+i),e);n.push(a)}return n},e.prototype.getType=function(){return r.Z.MULTI_POINT},e.prototype.intersectsExtent=function(t){for(var e=this.flatCoordinates,i=this.stride,n=0,r=e.length;n<r;n+=i){var s=e[n],a=e[n+1];if((0,o.jE)(t,s,a))return!0}return!1},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,h.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(a.ZP)},13987:(t,e,i)=>{"use strict";i.d(e,{Z:()=>E});var n=i(79682),o=i(21915),r=i(3696),s=i(28795),a=i(52329),h=i(40353),l=i(32538),d=i(32562),u=i(92526),c=i(83729),p=i(30197),f=i(38667),_=i(86204),v=i(38529),g=i(60897),y=i(80793),C=i(62418);const E=function(t){function e(e,i,o){if(t.call(this),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!o&&!Array.isArray(e[0])){for(var r=this.getLayout(),s=e,a=[],h=[],l=0,d=s.length;l<d;++l){var u=s[l];0===l&&(r=u.getLayout());for(var c=a.length,p=u.getEnds(),f=0,_=p.length;f<_;++f)p[f]+=c;(0,n.l7)(a,u.getFlatCoordinates()),h.push(p)}i=r,e=a,o=h}void 0!==i&&o?(this.setFlatCoordinates(i,e),this.endss_=o):this.setCoordinates(e,i)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendPolygon=function(t){var e;if(this.flatCoordinates){var i=this.flatCoordinates.length;(0,n.l7)(this.flatCoordinates,t.getFlatCoordinates());for(var o=0,r=(e=t.getEnds().slice()).length;o<r;++o)e[o]+=i}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()},e.prototype.clone=function(){for(var t=this.endss_.length,i=new Array(t),n=0;n<t;++n)i[n]=this.endss_[n].slice();return new e(this.flatCoordinates.slice(),this.layout,i)},e.prototype.closestPointXY=function(t,e,i,n){return n<(0,o.qf)(this.getExtent(),t,e)?n:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,c.sD)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,c.gI)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,i,n))},e.prototype.containsXY=function(t,e){return(0,p.Zl)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)},e.prototype.getArea=function(){return(0,d.Eu)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)},e.prototype.getCoordinates=function(t){var e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,y.dL)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,(0,_.ug)(e,0,this.endss_,this.stride)},e.prototype.getEndss=function(){return this.endss_},e.prototype.getFlatInteriorPoints=function(){if(this.flatInteriorPointsRevision_!=this.getRevision()){var t=(0,u.E)(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=(0,v.U)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_},e.prototype.getInteriorPoints=function(){return new a.Z(this.getFlatInteriorPoints().slice(),r.Z.XYM)},e.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;(0,y.$v)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,y.dL)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},e.prototype.getSimplifiedGeometryInternal=function(t){var i=[],n=[];return i.length=(0,C.Pp)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),i,0,n),new e(i,r.Z.XY,n)},e.prototype.getPolygon=function(t){if(t<0||this.endss_.length<=t)return null;var e;if(0===t)e=0;else{var i=this.endss_[t-1];e=i[i.length-1]}var n=this.endss_[t].slice(),o=n[n.length-1];if(0!==e)for(var r=0,s=n.length;r<s;++r)n[r]-=e;return new h.ZP(this.flatCoordinates.slice(e,o),this.layout,n)},e.prototype.getPolygons=function(){for(var t=this.layout,e=this.flatCoordinates,i=this.endss_,n=[],o=0,r=0,s=i.length;r<s;++r){var a=i[r].slice(),l=a[a.length-1];if(0!==o)for(var d=0,u=a.length;d<u;++d)a[d]-=o;var c=new h.ZP(e.slice(o,l),t,a);n.push(c),o=l}return n},e.prototype.getType=function(){return s.Z.MULTI_POLYGON},e.prototype.intersectsExtent=function(t){return(0,g.oW)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);var i=(0,f.QT)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===i.length)this.flatCoordinates.length=0;else{var n=i[i.length-1];this.flatCoordinates.length=0===n.length?0:n[n.length-1]}this.changed()},e}(l.ZP)},92526:(t,e,i)=>{"use strict";i.d(e,{E:()=>o});var n=i(21915);function o(t,e,i,o){for(var r=[],s=(0,n.lJ)(),a=0,h=i.length;a<h;++a){var l=i[a];s=(0,n.GN)(t,e,l[0],o),r.push((s[0]+s[2])/2,(s[1]+s[3])/2),e=l[l.length-1]}return r}},21422:(t,e,i)=>{"use strict";i.d(e,{WW:()=>r,iJ:()=>s,dG:()=>a});var n=i(79682),o=i(21882);function r(t,e,i,r,s,a){var h=NaN,l=NaN,d=(i-e)/r;if(1===d)h=t[e],l=t[e+1];else if(2==d)h=(1-s)*t[e]+s*t[e+r],l=(1-s)*t[e+1]+s*t[e+r+1];else if(0!==d){for(var u=t[e],c=t[e+1],p=0,f=[0],_=e+r;_<i;_+=r){var v=t[_],g=t[_+1];p+=Math.sqrt((v-u)*(v-u)+(g-c)*(g-c)),f.push(p),u=v,c=g}var y=s*p,C=(0,n.ry)(f,y);if(C<0){var E=(y-f[-C-2])/(f[-C-1]-f[-C-2]),m=e+(-C-2)*r;h=(0,o.t7)(t[m],t[m+r],E),l=(0,o.t7)(t[m+1],t[m+r+1],E)}else h=t[e+C*r],l=t[e+C*r+1]}return a?(a[0]=h,a[1]=l,a):[h,l]}function s(t,e,i,n,r,s){if(i==e)return null;var a;if(r<t[e+n-1])return s?((a=t.slice(e,e+n))[n-1]=r,a):null;if(t[i-1]<r)return s?((a=t.slice(i-n,i))[n-1]=r,a):null;if(r==t[e+n-1])return t.slice(e,e+n);for(var h=e/n,l=i/n;h<l;){var d=h+l>>1;r<t[(d+1)*n-1]?l=d:h=d+1}var u=t[h*n-1];if(r==u)return t.slice((h-1)*n,(h-1)*n+n);var c=(r-u)/(t[(h+1)*n-1]-u);a=[];for(var p=0;p<n-1;++p)a.push((0,o.t7)(t[(h-1)*n+p],t[h*n+p],c));return a.push(r),a}function a(t,e,i,n,o,r,a){if(a)return s(t,e,i[i.length-1],n,o,r);var h;if(o<t[n-1])return r?((h=t.slice(0,n))[n-1]=o,h):null;if(t[t.length-1]<o)return r?((h=t.slice(t.length-n))[n-1]=o,h):null;for(var l=0,d=i.length;l<d;++l){var u=i[l];if(e!=u){if(o<t[e+n-1])return null;if(o<=t[u-1])return s(t,e,u,n,o,!1);e=u}}return null}},4027:(t,e,i)=>{"use strict";function n(t,e,i,n){for(var o=t[e],r=t[e+1],s=0,a=e+n;a<i;a+=n){var h=t[a],l=t[a+1];s+=Math.sqrt((h-o)*(h-o)+(l-r)*(l-r)),o=h,r=l}return s}i.d(e,{W:()=>n})},18369:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var n=i(30006),o=i(29639);function r(t){var e=!1;if(t.type==n.Z.DBLCLICK){var i=t.originalEvent,r=t.map,s=t.coordinate,a=i.shiftKey?-this.delta_:this.delta_,h=r.getView();(0,o.FW)(h,a,s,this.duration_),t.preventDefault(),e=!0}return!e}const s=function(t){function e(e){t.call(this,{handleEvent:r});var i=e||{};this.delta_=i.delta?i.delta:1,this.duration_=void 0!==i.duration?i.duration:250}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(o.ZP)},43033:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var n=i(9520),o=i(36403),r=i(64011),s=i(38024),a=i(80967),h=i(40353);const l=function(t){function e(e){t.call(this),this.geometry_=null,this.element_=document.createElement("div"),this.element_.style.position="absolute",this.element_.className="ol-box "+e,this.map_=null,this.startPixel_=null,this.endPixel_=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.disposeInternal=function(){this.setMap(null)},e.prototype.render_=function(){var t=this.startPixel_,e=this.endPixel_,i="px",n=this.element_.style;n.left=Math.min(t[0],e[0])+i,n.top=Math.min(t[1],e[1])+i,n.width=Math.abs(e[0]-t[0])+i,n.height=Math.abs(e[1]-t[1])+i},e.prototype.setMap=function(t){if(this.map_){this.map_.getOverlayContainer().removeChild(this.element_);var e=this.element_.style;e.left=e.top=e.width=e.height="inherit"}this.map_=t,this.map_&&this.map_.getOverlayContainer().appendChild(this.element_)},e.prototype.setPixels=function(t,e){this.startPixel_=t,this.endPixel_=e,this.createOrUpdateGeometry(),this.render_()},e.prototype.createOrUpdateGeometry=function(){var t=this.startPixel_,e=this.endPixel_,i=[t,[t[0],e[1]],e,[e[0],t[1]]].map(this.map_.getCoordinateFromPixel,this.map_);i[4]=i[0].slice(),this.geometry_?this.geometry_.setCoordinates([i]):this.geometry_=new h.ZP([i])},e.prototype.getGeometry=function(){return this.geometry_},e}(a.Z);var d=function(t){function e(e,i,n){t.call(this,e),this.coordinate=i,this.mapBrowserEvent=n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(n.ZP);const u=function(t){function e(e){t.call(this);var i=e||{};this.box_=new l(i.className||"ol-dragbox"),this.minArea_=void 0!==i.minArea?i.minArea:64,this.onBoxEnd_=i.onBoxEnd?i.onBoxEnd:r.Zn,this.startPixel_=null,this.condition_=i.condition?i.condition:o.Bx,this.boxEndCondition_=i.boxEndCondition?i.boxEndCondition:this.defaultBoxEndCondition}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.defaultBoxEndCondition=function(t,e,i){var n=i[0]-e[0],o=i[1]-e[1];return n*n+o*o>=this.minArea_},e.prototype.getGeometry=function(){return this.box_.getGeometry()},e.prototype.handleDragEvent=function(t){(0,o.QL)(t)&&(this.box_.setPixels(this.startPixel_,t.pixel),this.dispatchEvent(new d("boxdrag",t.coordinate,t)))},e.prototype.handleUpEvent=function(t){return!(0,o.QL)(t)||(this.box_.setMap(null),this.boxEndCondition_(t,this.startPixel_,t.pixel)&&(this.onBoxEnd_(t),this.dispatchEvent(new d("boxend",t.coordinate,t))),!1)},e.prototype.handleDownEvent=function(t){return!(!(0,o.QL)(t)||!(0,o.v8)(t)||!this.condition_(t)||(this.startPixel_=t.pixel,this.box_.setMap(t.map),this.box_.setPixels(this.startPixel_,this.startPixel_),this.dispatchEvent(new d("boxstart",t.coordinate,t)),0))},e}(s.Z)},73800:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var n=i(6908),o=i(90728),r=i(86320),s=i(36403),a=i(64011),h=i(38024);const l=function(t){function e(e){t.call(this,{stopDown:a.Dv});var i=e||{};this.kinetic_=i.kinetic,this.lastCentroid=null,this.lastPointersCount_,this.panning_=!1,this.condition_=i.condition?i.condition:s.rM,this.noKinetic_=!1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleDragEvent=function(t){this.panning_||(this.panning_=!0,this.getMap().getView().setHint(n.Z.INTERACTING,1));var e=this.targetPointers,i=(0,h.S)(e);if(e.length==this.lastPointersCount_){if(this.kinetic_&&this.kinetic_.update(i[0],i[1]),this.lastCentroid){var r=this.lastCentroid[0]-i[0],s=i[1]-this.lastCentroid[1],a=t.map.getView(),l=[r,s];(0,o.bA)(l,a.getResolution()),(0,o.U1)(l,a.getRotation()),(0,o.IH)(l,a.getCenter()),l=a.constrainCenter(l),a.setCenter(l)}}else this.kinetic_&&this.kinetic_.begin();this.lastCentroid=i,this.lastPointersCount_=e.length},e.prototype.handleUpEvent=function(t){var e=t.map,i=e.getView();if(0===this.targetPointers.length){if(!this.noKinetic_&&this.kinetic_&&this.kinetic_.end()){var o=this.kinetic_.getDistance(),s=this.kinetic_.getAngle(),a=i.getCenter(),h=e.getPixelFromCoordinate(a),l=e.getCoordinateFromPixel([h[0]-o*Math.cos(s),h[1]-o*Math.sin(s)]);i.animate({center:i.constrainCenter(l),duration:500,easing:r.Vv})}return this.panning_&&(this.panning_=!1,i.setHint(n.Z.INTERACTING,-1)),!1}return this.kinetic_&&this.kinetic_.begin(),this.lastCentroid=null,!0},e.prototype.handleDownEvent=function(t){if(this.targetPointers.length>0&&this.condition_(t)){var e=t.map.getView();return this.lastCentroid=null,e.getAnimating()&&e.setCenter(t.frameState.viewState.center),this.kinetic_&&this.kinetic_.begin(),this.noKinetic_=this.targetPointers.length>1,!0}return!1},e}(h.Z)},97950:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var n=i(38642),o=i(6908),r=i(36403),s=i(64011),a=i(29639);const h=function(t){function e(e){var i=e||{};t.call(this,{stopDown:s.Dv}),this.condition_=i.condition?i.condition:r.aj,this.lastAngle_=void 0,this.duration_=void 0!==i.duration?i.duration:250}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleDragEvent=function(t){if((0,r.QL)(t)){var e=t.map,i=e.getView();if(i.getConstraints().rotation!==n.h$){var o=e.getSize(),s=t.pixel,h=Math.atan2(o[1]/2-s[1],s[0]-o[0]/2);if(void 0!==this.lastAngle_){var l=h-this.lastAngle_,d=i.getRotation();(0,a.dl)(i,d-l)}this.lastAngle_=h}}},e.prototype.handleUpEvent=function(t){if(!(0,r.QL)(t))return!0;var e=t.map.getView();e.setHint(o.Z.INTERACTING,-1);var i=e.getRotation();return(0,a.U1)(e,i,void 0,this.duration_),!1},e.prototype.handleDownEvent=function(t){return!(!(0,r.QL)(t)||!(0,r.v8)(t)||!this.condition_(t)||(t.map.getView().setHint(o.Z.INTERACTING,1),this.lastAngle_=void 0,0))},e}(i(38024).Z)},78516:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var n=i(86320),o=i(36403),r=i(21915);function s(){var t=this.getMap(),e=t.getView(),i=t.getSize(),o=this.getGeometry().getExtent();if(this.out_){var s=e.calculateExtent(i),a=(0,r.ZT)([t.getPixelFromCoordinate((0,r.hC)(o)),t.getPixelFromCoordinate((0,r.Xv)(o))]),h=e.getResolutionForExtent(a,i);(0,r.H9)(s,1/h),o=s}var l=e.constrainResolution(e.getResolutionForExtent(o,i)),d=(0,r.qg)(o);d=e.constrainCenter(d),e.animate({resolution:l,center:d,duration:this.duration_,easing:n.Vv})}const a=function(t){function e(e){var i=e||{},n=i.condition?i.condition:o.vY;t.call(this,{condition:n,className:i.className||"ol-dragzoom",onBoxEnd:s}),this.duration_=void 0!==i.duration?i.duration:200,this.out_=void 0!==i.out&&i.out}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(i(43033).Z)},29639:(t,e,i)=>{"use strict";i.d(e,{Cv:()=>a,U1:()=>h,dl:()=>l,sP:()=>d,FW:()=>u,DQ:()=>c,ZP:()=>p});var n=i(58493),o=i(86320),r=i(73604),s=i(21882);function a(t,e,i){var n=t.getCenter();if(n){var r=t.constrainCenter([n[0]+e[0],n[1]+e[1]]);i?t.animate({duration:i,easing:o.GE,center:r}):t.setCenter(r)}}function h(t,e,i,n){e=t.constrainRotation(e,0),l(t,e,i,n)}function l(t,e,i,n){if(void 0!==e){var r=t.getRotation(),s=t.getCenter();void 0!==r&&s&&n>0?t.animate({rotation:e,anchor:i,duration:n,easing:o.Vv}):t.rotate(e,i)}}function d(t,e,i,n,o){e=t.constrainResolution(e,0,o),c(t,e,i,n)}function u(t,e,i,n){var o=t.getResolution(),r=t.constrainResolution(o,e,0);if(void 0!==r){var a=t.getResolutions();r=(0,s.uZ)(r,t.getMinResolution()||a[a.length-1],t.getMaxResolution()||a[0])}if(i&&void 0!==r&&r!==o){var h=t.getCenter(),l=t.calculateCenterZoom(r,i);l=t.constrainCenter(l),i=[(r*h[0]-o*l[0])/(r-o),(r*h[1]-o*l[1])/(r-o)]}c(t,r,i,n)}function c(t,e,i,n){if(e){var r=t.getResolution(),s=t.getCenter();if(void 0!==r&&s&&e!==r&&n)t.animate({resolution:e,anchor:i,duration:n,easing:o.Vv});else{if(i){var a=t.calculateCenterZoom(e,i);t.setCenter(a)}t.setResolution(e)}}}const p=function(t){function e(e){t.call(this),e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getActive=function(){return this.get(r.Z.ACTIVE)},e.prototype.getMap=function(){return this.map_},e.prototype.handleEvent=function(t){return!0},e.prototype.setActive=function(t){this.set(r.Z.ACTIVE,t)},e.prototype.setMap=function(t){this.map_=t},e}(n.ZP)},45801:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var n=i(90728),o=i(73381);var r=i(36403),s=i(29639);function a(t){var e=!1;if(t.type==o.Z.KEYDOWN){var i=t.originalEvent.keyCode;if(this.condition_(t)&&(40==i||37==i||39==i||38==i)){var r=t.map.getView(),a=r.getResolution()*this.pixelDelta_,h=0,l=0;40==i?l=-a:37==i?h=-a:39==i?h=a:l=a;var d=[h,l];(0,n.U1)(d,r.getRotation()),(0,s.Cv)(r,d,this.duration_),t.preventDefault(),e=!0}}return!e}const h=function(t){function e(e){t.call(this,{handleEvent:a});var i=e||{};this.defaultCondition_=function(t){return(0,r.rM)(t)&&(0,r.TN)(t)},this.condition_=void 0!==i.condition?i.condition:this.defaultCondition_,this.duration_=void 0!==i.duration?i.duration:100,this.pixelDelta_=void 0!==i.pixelDelta?i.pixelDelta:128}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(s.ZP)},52:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var n=i(73381),o=i(36403),r=i(29639);function s(t){var e=!1;if(t.type==n.Z.KEYDOWN||t.type==n.Z.KEYPRESS){var i=t.originalEvent.charCode;if(this.condition_(t)&&(i=="+".charCodeAt(0)||i=="-".charCodeAt(0))){var o=t.map,s=i=="+".charCodeAt(0)?this.delta_:-this.delta_,a=o.getView();(0,r.FW)(a,s,void 0,this.duration_),t.preventDefault(),e=!0}}return!e}const a=function(t){function e(e){t.call(this,{handleEvent:s});var i=e||{};this.condition_=i.condition?i.condition:o.TN,this.delta_=i.delta?i.delta:1,this.duration_=void 0!==i.duration?i.duration:100}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(r.ZP)},86306:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var n=i(6908),o=i(36403),r=i(86320),s=i(73381),a=i(91358),h=i(29639),l=i(21882),d="trackpad";const u=function(t){function e(e){var i=e||{};t.call(this,i),this.delta_=0,this.duration_=void 0!==i.duration?i.duration:250,this.timeout_=void 0!==i.timeout?i.timeout:80,this.useAnchor_=void 0===i.useAnchor||i.useAnchor,this.constrainResolution_=i.constrainResolution||!1,this.condition_=i.condition?i.condition:o.Bx,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_,this.mode_=void 0,this.trackpadEventGap_=400,this.trackpadTimeoutId_,this.trackpadDeltaPerZoom_=300,this.trackpadZoomBuffer_=1.5}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.decrementInteractingHint_=function(){this.trackpadTimeoutId_=void 0,this.getMap().getView().setHint(n.Z.INTERACTING,-1)},e.prototype.handleEvent=function(t){if(!this.condition_(t))return!0;var e=t.type;if(e!==s.Z.WHEEL&&e!==s.Z.MOUSEWHEEL)return!0;t.preventDefault();var i,o=t.map,h=t.originalEvent;if(this.useAnchor_&&(this.lastAnchor_=t.coordinate),t.type==s.Z.WHEEL?(i=h.deltaY,a.V&&h.deltaMode===WheelEvent.DOM_DELTA_PIXEL&&(i/=a.MP),h.deltaMode===WheelEvent.DOM_DELTA_LINE&&(i*=40)):t.type==s.Z.MOUSEWHEEL&&(i=-h.wheelDeltaY,a.vw&&(i/=3)),0===i)return!1;var l=Date.now();if(void 0===this.startTime_&&(this.startTime_=l),(!this.mode_||l-this.startTime_>this.trackpadEventGap_)&&(this.mode_=Math.abs(i)<4?d:"wheel"),this.mode_===d){var u=o.getView();this.trackpadTimeoutId_?clearTimeout(this.trackpadTimeoutId_):u.setHint(n.Z.INTERACTING,1),this.trackpadTimeoutId_=setTimeout(this.decrementInteractingHint_.bind(this),this.trackpadEventGap_);var c=u.getResolution()*Math.pow(2,i/this.trackpadDeltaPerZoom_),p=u.getMinResolution(),f=u.getMaxResolution(),_=0;if(c<p?(c=Math.max(c,p/this.trackpadZoomBuffer_),_=1):c>f&&(c=Math.min(c,f*this.trackpadZoomBuffer_),_=-1),this.lastAnchor_){var v=u.calculateCenterZoom(c,this.lastAnchor_);u.setCenter(u.constrainCenter(v))}return u.setResolution(c),0===_&&this.constrainResolution_&&u.animate({resolution:u.constrainResolution(c,i>0?-1:1),easing:r.Vv,anchor:this.lastAnchor_,duration:this.duration_}),_>0?u.animate({resolution:p,easing:r.Vv,anchor:this.lastAnchor_,duration:500}):_<0&&u.animate({resolution:f,easing:r.Vv,anchor:this.lastAnchor_,duration:500}),this.startTime_=l,!1}this.delta_+=i;var g=Math.max(this.timeout_-(l-this.startTime_),0);return clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout(this.handleWheelZoom_.bind(this,o),g),!1},e.prototype.handleWheelZoom_=function(t){var e=t.getView();e.getAnimating()&&e.cancelAnimations();var i=(0,l.uZ)(this.delta_,-1,1);(0,h.FW)(e,-i,this.lastAnchor_,this.duration_),this.mode_=void 0,this.delta_=0,this.lastAnchor_=null,this.startTime_=void 0,this.timeoutId_=void 0},e.prototype.setMouseAnchor=function(t){this.useAnchor_=t,t||(this.lastAnchor_=null)},e}(h.ZP)},78653:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var n=i(6908),o=i(64011),r=i(29639),s=i(38024),a=i(38642);const h=function(t){function e(e){var i=e||{},n=i;n.stopDown||(n.stopDown=o.Dv),t.call(this,n),this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.threshold_=void 0!==i.threshold?i.threshold:.3,this.duration_=void 0!==i.duration?i.duration:250}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleDragEvent=function(t){var e=0,i=this.targetPointers[0],n=this.targetPointers[1],o=Math.atan2(n.clientY-i.clientY,n.clientX-i.clientX);if(void 0!==this.lastAngle_){var h=o-this.lastAngle_;this.rotationDelta_+=h,!this.rotating_&&Math.abs(this.rotationDelta_)>this.threshold_&&(this.rotating_=!0),e=h}this.lastAngle_=o;var l=t.map,d=l.getView();if(d.getConstraints().rotation!==a.h$){var u=l.getViewport().getBoundingClientRect(),c=(0,s.S)(this.targetPointers);if(c[0]-=u.left,c[1]-=u.top,this.anchor_=l.getCoordinateFromPixel(c),this.rotating_){var p=d.getRotation();l.render(),(0,r.dl)(d,p+e,this.anchor_)}}},e.prototype.handleUpEvent=function(t){if(this.targetPointers.length<2){var e=t.map.getView();if(e.setHint(n.Z.INTERACTING,-1),this.rotating_){var i=e.getRotation();(0,r.U1)(e,i,this.anchor_,this.duration_)}return!1}return!0},e.prototype.handleDownEvent=function(t){if(this.targetPointers.length>=2){var e=t.map;return this.anchor_=null,this.lastAngle_=void 0,this.rotating_=!1,this.rotationDelta_=0,this.handlingDownUpSequence||e.getView().setHint(n.Z.INTERACTING,1),!0}return!1},e}(s.Z)},48041:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var n=i(6908),o=i(64011),r=i(29639),s=i(38024);const a=function(t){function e(e){var i=e||{},n=i;n.stopDown||(n.stopDown=o.Dv),t.call(this,n),this.constrainResolution_=i.constrainResolution||!1,this.anchor_=null,this.duration_=void 0!==i.duration?i.duration:400,this.lastDistance_=void 0,this.lastScaleDelta_=1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleDragEvent=function(t){var e=1,i=this.targetPointers[0],n=this.targetPointers[1],o=i.clientX-n.clientX,a=i.clientY-n.clientY,h=Math.sqrt(o*o+a*a);void 0!==this.lastDistance_&&(e=this.lastDistance_/h),this.lastDistance_=h;var l=t.map,d=l.getView(),u=d.getResolution(),c=d.getMaxResolution(),p=d.getMinResolution(),f=u*e;f>c?(e=c/u,f=c):f<p&&(e=p/u,f=p),1!=e&&(this.lastScaleDelta_=e);var _=l.getViewport().getBoundingClientRect(),v=(0,s.S)(this.targetPointers);v[0]-=_.left,v[1]-=_.top,this.anchor_=l.getCoordinateFromPixel(v),l.render(),(0,r.DQ)(d,f,this.anchor_)},e.prototype.handleUpEvent=function(t){if(this.targetPointers.length<2){var e=t.map.getView();e.setHint(n.Z.INTERACTING,-1);var i=e.getResolution();if(this.constrainResolution_||i<e.getMinResolution()||i>e.getMaxResolution()){var o=this.lastScaleDelta_-1;(0,r.sP)(e,i,this.anchor_,this.duration_,o)}return!1}return!0},e.prototype.handleDownEvent=function(t){if(this.targetPointers.length>=2){var e=t.map;return this.anchor_=null,this.lastDistance_=void 0,this.lastScaleDelta_=1,this.handlingDownUpSequence||e.getView().setHint(n.Z.INTERACTING,1),!0}return!1},e}(s.Z)},38024:(t,e,i)=>{"use strict";i.d(e,{S:()=>s,Z:()=>a});var n=i(30006),o=i(29639),r=i(13580);function s(t){for(var e=t.length,i=0,n=0,o=0;o<e;o++)i+=t[o].clientX,n+=t[o].clientY;return[i/e,n/e]}const a=function(t){function e(e){var i=e||{};t.call(this,i),i.handleDownEvent&&(this.handleDownEvent=i.handleDownEvent),i.handleDragEvent&&(this.handleDragEvent=i.handleDragEvent),i.handleMoveEvent&&(this.handleMoveEvent=i.handleMoveEvent),i.handleUpEvent&&(this.handleUpEvent=i.handleUpEvent),i.stopDown&&(this.stopDown=i.stopDown),this.handlingDownUpSequence=!1,this.trackedPointers_={},this.targetPointers=[]}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleDownEvent=function(t){return!1},e.prototype.handleDragEvent=function(t){},e.prototype.handleEvent=function(t){if(!t.pointerEvent)return!0;var e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==n.Z.POINTERDRAG)this.handleDragEvent(t);else if(t.type==n.Z.POINTERUP){var i=this.handleUpEvent(t);this.handlingDownUpSequence=i&&this.targetPointers.length>0}}else if(t.type==n.Z.POINTERDOWN){var o=this.handleDownEvent(t);o&&t.preventDefault(),this.handlingDownUpSequence=o,e=this.stopDown(o)}else t.type==n.Z.POINTERMOVE&&this.handleMoveEvent(t);return!e},e.prototype.handleMoveEvent=function(t){},e.prototype.handleUpEvent=function(t){return!1},e.prototype.stopDown=function(t){return t},e.prototype.updateTrackedPointers_=function(t){if(function(t){var e=t.type;return e===n.Z.POINTERDOWN||e===n.Z.POINTERDRAG||e===n.Z.POINTERUP}(t)){var e=t.pointerEvent,i=e.pointerId.toString();t.type==n.Z.POINTERUP?delete this.trackedPointers_[i]:(t.type==n.Z.POINTERDOWN||i in this.trackedPointers_)&&(this.trackedPointers_[i]=e),this.targetPointers=(0,r.KX)(this.trackedPointers_)}},e}(o.ZP)},73604:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={ACTIVE:"active"}},38642:(t,e,i)=>{"use strict";i.d(e,{h$:()=>o,YP:()=>r,gE:()=>s,Gw:()=>a});var n=i(21882);function o(t,e){return void 0!==t?0:void 0}function r(t,e){return void 0!==t?t+e:void 0}function s(t){var e=2*Math.PI/t;return function(t,i){return void 0!==t?t=Math.floor((t+i)/e+.5)*e:void 0}}function a(t){var e=t||(0,n.Yr)(5);return function(t,i){return void 0!==t?Math.abs(t+i)<=e?0:t+i:void 0}}},79313:(t,e,i)=>{"use strict";function n(t,e,i){var n=void 0!==i?t.toFixed(i):""+t,o=n.indexOf(".");return(o=-1===o?n.length:o)>e?n:new Array(1+e-o).join("0")+n}function o(t,e){for(var i=(""+t).split("."),n=(""+e).split("."),o=0;o<Math.max(i.length,n.length);o++){var r=parseInt(i[o]||"0",10),s=parseInt(n[o]||"0",10);if(r>s)return 1;if(s>r)return-1}return 0}i.d(e,{v:()=>n,n:()=>o})}}]);