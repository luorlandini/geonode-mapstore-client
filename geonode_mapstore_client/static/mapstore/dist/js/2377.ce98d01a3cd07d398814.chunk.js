(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2377],{95797:(e,r,t)=>{"use strict";t.d(r,{DR:()=>n,S0:()=>u,u7:()=>i,lj:()=>o,yz:()=>c,lN:()=>a,zW:()=>f,Yx:()=>l,VN:()=>y,Hu:()=>s,VT:()=>p,RD:()=>d,Qq:()=>g,R1:()=>O,_T:()=>b,vO:()=>m,XO:()=>j,jG:()=>v,Xc:()=>E,gT:()=>P,rG:()=>h,t3:()=>w,Fs:()=>q,w_:()=>R,Lm:()=>_,rh:()=>D,rP:()=>L,IO:()=>F}),t(75875);var n="LAYER_SELECTED_FOR_SEARCH",u="FEATURE_TYPE_SELECTED",i="FEATURE_TYPE_LOADED",o="FEATURE_LOADED",c="FEATURE_LOADING",a="FEATURE_TYPE_ERROR",f="FEATURE_ERROR",l="QUERY_CREATE",y="QUERY:UPDATE_QUERY",s="QUERY_RESULT",p="QUERY_ERROR",d="RESET_QUERY",g="QUERY",O="INIT_QUERY_PANEL",b="QUERY:TOGGLE_SYNC_WMS",m="QUERY:TOGGLE_LAYER_FILTER";function j(){return{type:b}}function v(){return{type:m}}function E(){return{type:O}}function P(e,r){return{type:u,url:e,typeName:r}}function h(e,r){return{type:i,typeName:e,featureType:r}}function w(e,r){return{type:a,typeName:e,error:r}}function q(e){return{type:c,isLoading:e}}function R(e,r,t,n,u){return{type:s,searchUrl:r,filterObj:t,result:e,queryOptions:n,reason:u}}function _(e){return{type:p,error:e}}function D(e,r){return{type:y,updates:e,reason:r}}function L(e,r){return{type:l,searchUrl:e,filterObj:r}}function F(e,r,t,n){return{type:g,searchUrl:e,filterObj:r,queryOptions:t,reason:n}}},52595:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});const n=(0,t(61365).Z)(t(57588).Overlay)},99534:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var n=t(61365),u=t(69334);const i=(0,n.Z)(u.h_)},31255:(e,r,t)=>{"use strict";t.d(r,{u$:()=>P,PI:()=>h,_w:()=>w,eO:()=>q,kG:()=>R,P3:()=>_,bq:()=>F,LB:()=>T,b4:()=>S,M0:()=>U,Li:()=>A,Rd:()=>k,g5:()=>Y,Sj:()=>G,o:()=>x,eK:()=>N,jY:()=>z,ND:()=>I,OK:()=>C,tU:()=>Q,ou:()=>M,DK:()=>V,Gl:()=>K,uz:()=>W,Ci:()=>Z,Ae:()=>H,gz:()=>B,He:()=>X,P4:()=>$,kd:()=>J,TC:()=>ee,nq:()=>re,Vf:()=>te});var n=t(91175),u=t.n(n),i=t(27361),o=t.n(i),c=t(13218),a=t.n(c),f=t(75110),l=t(78889),y=t(8316),s=t(52259),p=t(96958),d=t(85148),g=t(74621),O=t(93152),b=t(24260);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var E=f.CA,P=function(e){return o()(e,"featuregrid.selectedLayer")},h=function(e){return o()(e,"featuregrid.chartDisabled",!1)},w=function(e){return e&&e.featuregrid&&e.featuregrid.select},q=function(e){return e&&e.featuregrid&&e.featuregrid.changes},R=function(e){return e&&e.featuregrid&&e.featuregrid.newFeatures},_=function(e){return u()(w(e))},D=function(e){var r=(0,b.Qs)(e);if(r){var t=(0,l.findGeometryProperty)(r);return t&&t.localType}return null},L=["Geometry","GeometryCollection"],F=function(e){return!u()(L.filter((function(r){return D(e)===r})))},T=function(e){return q(e)&&q(e).length>0},S=function(e){return R(e)&&R(e).length>0},U=function(e){return e&&e.featuregrid&&e.featuregrid.filters},A=function(e){return E(e,P(e))},k=function(e){return e&&e.featuregrid&&e.featuregrid.open},Y=function(e,r){return o()(U(e),r)},G=function(e){var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.title||e.name}(E(e,P(e)));return a()(r)?r[(0,y.Pz)(e)]||r.default||"":r},x=function(e){return((0,b.L)(e)||[]).map((function(r){var t=function(e,r){return o()(e,"featuregrid.attributes[".concat(r.name||r.attribute,"]"))}(e,r);return t?j(j({},r),t):r}))},N=function(e){return e&&e.featuregrid&&e.featuregrid.mode},z=function(e){return(w(e)||[]).length},I=function(e){return(0,p.rK)(q(e))},C=function(e){return function(e){var r=_(e);if(r){var t=(0,p.rK)(q(e));return!((!t[r.id]||null===t[r.id].geometry)&&(t[r.id]&&null===t[r.id].geometry||r._new&&u()(R(e))&&null===u()(R(e)).geometry||(!r._new||!u()(R(e))||null===u()(R(e)).geometry)&&null===r.geometry))}return!1}(e)},Q=function(e){return o()(e,"featuregrid.showAgain",!1)},M=function(e){if(o()(e,"featuregrid.showTimeSync",!1)){var r=P(e);return(0,d.jo)({id:r},"time")(e)}return null},V=function(e){return o()(e,"featuregrid.timeSync",!1)},K=function(e){return o()(e,"featuregrid.showPopoverSync",!0)},W=function(e){return e&&e.featuregrid&&e.featuregrid.saving},Z=function(e){return e&&e.featuregrid&&e.featuregrid.saved},H=function(e){return e&&e.featuregrid&&e.featuregrid.drawing},B=function(e){return o()(e,"featuregrid.multiselect",!1)},X=function(e){return(0,s.isSimpleGeomType)(D(e))},$=function(e){return e.featuregrid&&e.featuregrid.dockSize},J=function(e){var r=E(e,P(e));return r&&r.name||""},ee=function(e){var r=function(e){return o()(E(e,P(e)),"params")}(e);return{viewParams:r&&(r.VIEWPARAMS||r.viewParams||r.viewparams),cqlFilter:r&&(r.CQL_FILTER||r.cqlFilter||r.cql_filter)}},re=function(e){var r=(0,g.L3)(e),t=function(e){return o()(e,"featuregrid.editingAllowedRoles",["ADMIN"])}(e)||["ADMIN"],n=function(e){return e&&e.featuregrid&&e.featuregrid.canEdit}(e);return(-1!==t.indexOf(r)||n)&&!(0,O.c0)(e)},te=function(e){return o()(e,"featuregrid.pagination")}},55105:(e,r,t)=>{"use strict";t.d(r,{Nr:()=>y,ic:()=>s,Jz:()=>d,VM:()=>g,CF:()=>O});var n=t(91175),u=t.n(n),i=t(827),o=t(52259);function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){f(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var l=function(e){return e.maplayout&&e.maplayout.layout||{}},y=function(e){return e.maplayout&&e.maplayout.boundingMapRect||{}},s=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=l(e);return t&&Object.keys(t).filter((function(e){return r[e]})).reduce((function(e,r){return a(a({},e),{},f({},r,t[r]))}),{})||{}},p=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=l(e),n=!!u()(r.filter((function(e){return t[e.key]})).map((function(e){return"not"===e.type?t[e.key]!==e.value&&t[e.key]:t[e.key]===e.value})));return n},d=function(e){return p(e,[{key:"right",value:658}])},g=function(e){return p(e,[{key:"bottom",value:30,type:"not"}])},O=function(e){var r=(0,i.Od)(e),t=y(e);return t&&r&&r.size&&{left:(0,o.parseLayoutValue)(t.left,r.size.width),bottom:(0,o.parseLayoutValue)(t.bottom,r.size.height),right:(0,o.parseLayoutValue)(t.right,r.size.width),top:(0,o.parseLayoutValue)(t.top,r.size.height)}}},24260:(e,r,t)=>{"use strict";t.d(r,{qj:()=>m,Bu:()=>j,UM:()=>v,X1:()=>E,L:()=>P,HY:()=>h,Mz:()=>w,F0:()=>q,dc:()=>R,b0:()=>_,hk:()=>D,Qs:()=>L,gy:()=>F,M7:()=>T,VD:()=>S});var n=t(14293),u=t.n(n),i=t(27361),o=t.n(i),c=t(91175),a=t.n(c),f=t(1469),l=t.n(f),y=t(30998),s=t.n(y);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){g(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O=function(e){return o()(e,"query.filterObj.featureTypeName")},b=function(e){return function(r){return o()(r,'query.featureTypes["'.concat(e,'"]'))}},m=function(e,r){return o()(b(r)(e),"original")},j=function(e){return e&&e.query&&e.query.searchUrl},v=function(e){return e&&e.query&&e.query.url},E=function(e){return e&&e.query&&e.query.filterObj},P=function(e){return o()(b(O(e))(e),"attributes")},h=function(e){return o()(e,"query.typeName")},w=function(e){return o()(e,"query.result.features")},q=function(e){var r=o()(e,"query.result");return d(d({},r),{},{features:(r&&r.features||[]).filter((function(e){return!u()(e.geometry)}))})},R=function(e,r){var t=e&&e.query&&e.query.result&&e.query.result.features;return a()(t.filter((function(e){return e.id===r})))},_={startIndex:function(e){return o()(e,"query.filterObj.pagination.startIndex")},maxFeatures:function(e){return o()(e,"query.filterObj.pagination.maxFeatures")},resultSize:function(e){return o()(e,"query.result.features.length")},totalFeatures:function(e){return o()(e,"query.result.totalFeatures")}},D=function(e,r){var t=b(r)(e);return!!(t&&t.attributes&&t.geometry&&t.original)},L=function(e){return m(e,O(e))},F=function(e){return o()(e,"query.featureLoading")},T=function(e){return o()(e,"query.syncWmsFilter",!1)},S=function(e){var r=o()(e,"query.filterObj.crossLayerFilter"),t=o()(e,"query.filterObj.spatialField"),n=o()(e,"query.filterObj.filterFields");return!!(n&&a()(n)||t&&(t.method&&t.operation&&t.geometry||l()(t)&&s()(t,(function(e){return e.method&&e.operation&&e.geometry}))>-1)||r&&r.collectGeometries&&r.operation)}},69842:(e,r,t)=>{"use strict";t.d(r,{qh:()=>p,GK:()=>d,Nl:()=>g,vE:()=>O,gC:()=>b,hI:()=>m,Vc:()=>j,BU:()=>v,Vx:()=>E,a8:()=>P,IM:()=>h,G$:()=>w});var n=t(27361),u=t.n(n),i=t(22222),o=t(75110),c=t(8316),a=t(86638),f=["title"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var p=function(e){return u()(e,"queryform.crossLayerFilter")},d=function(e){return((0,o.l2)(e)||[]).filter((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.type,t=e.group;return"wms"===r&&"background"!==t})).map((function(r){var t=r.title;return y(y({},function(e,r){if(null==e)return{};var t,n,u=function(e,r){if(null==e)return{};var t,n,u={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(u[t]=e[t]);return u}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}(r,f)),{},{title:(0,a.MZ)((0,c.Pz)(e),t)})}))},g=function(e){return u()(e,"queryform.spatialField.geometry")},O=function(e){return u()(e,"queryform.spatialField")},b=(0,i.P1)((function(e){return u()(e,"queryform.attributePanelExpanded")}),(function(e){return u()(e,"queryform.spatialPanelExpanded")}),(function(e){return u()(e,"queryform.crossLayerExpanded")}),(function(e,r,t){return{attributePanelExpanded:e,spatialPanelExpanded:r,crossLayerExpanded:t}})),m=function(e){return u()(e,"layerFilter.persisted")},j=function(e){return u()(e,"layerFilter.applied")},v=function(e){return u()(e,"queryform.spatialField.method")},E=function(e){return u()(e,"queryform.maxFeaturesWPS")},P=function(e){return g(e)&&g(e).type||"Polygon"},h=function(e){return g(e)&&g(e).projection||"EPSG =4326"},w=function(e){return g(e)&&g(e).coordinates||[]}}}]);