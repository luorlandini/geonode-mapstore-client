(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7104],{25108:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(82904),o=r(27418),c=r.n(o);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.kM:var r=t.property||"enabled";return c()({},e,u({},t.control,c()({},e[t.control],u({},r,!(e[t.control]||{})[r]))));case n.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?c()({},e,u({},t.control,c()({},e[t.control],u({},t.property,void 0)))):c()({},e,u({},t.control,c()({},e[t.control],u({},t.property,t.value))));case n.dc:return c()({},e,u({},t.control,c()({},e[t.control],t.properties)));case n.l:var o=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),i=o.reduce((function(t,r){return c()(t,u({},r,c()({},e[r],!0===e[r].enabled?{enabled:!1}:{})))}),{});return c()({},e,i);default:return e}}},31935:(e,t,r)=>{"use strict";r.d(t,{YL:()=>i,B0:()=>a,Mz:()=>l,TC:()=>s,qS:()=>f,Pe:()=>d,TP:()=>g});var n=r(22222),o=r(75110),c=r(93152),u=r(24262),i=function(e){return e.backgroundSelector&&e.backgroundSelector.source},a=function(e){return e.backgroundSelector&&e.backgroundSelector.modalParams},l=function(e){return e.backgroundSelector&&e.backgroundSelector.backgrounds||[]},s=function(e){return e.backgroundSelector&&e.backgroundSelector.lastRemovedId},f=function(e){return e.backgroundSelector&&e.backgroundSelector.confirmDeleteBackgroundModal},d=function(e){return e.backgroundSelector&&e.backgroundSelector.allowDeletion},g=(0,n.P1)(o.l2,c.$v,c.lh,(function(e,t,r){var n=e.filter((function(e){return e&&"background"===e.group}));return r&&r[t]?n.map((function(e){return(0,u.kf)(e,t)}))||[]:n}))},88113:(e,t,r)=>{"use strict";r.d(t,{b6:()=>f,PG:()=>d,_x:()=>g,Mm:()=>p,dP:()=>v,SX:()=>b,ZL:()=>y,_S:()=>m,iH:()=>O,R7:()=>h,Q7:()=>S,n7:()=>w,bA:()=>E,hm:()=>j,E2:()=>P,Cb:()=>k,eK:()=>D,Im:()=>A,e8:()=>I,$t:()=>C,kS:()=>_,y:()=>T,l2:()=>M,HN:()=>N,BM:()=>U,am:()=>R,LV:()=>z,CK:()=>G});var n=r(22222),o=r(27361),c=r.n(o),u=r(827),i=r(76712);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(e){return c()(e,"catalog.services")},d=(0,n.P1)((function(e){return c()(e,"catalog.default.staticServices")}),f,(function(e,t){var r=null==e?void 0:e.default_map_backgrounds;return r?(r.readOnly=!0,l(l({},t),{},{default_map_backgrounds:r})):t})),g=function(e){return c()(e,"catalog.default.tileSizes",[256,512])},p=function(e){return c()(e,"controls.metadataexplorer.group")},v=function(e){return c()(e,"catalog.saving")},b=function(e){return c()(e,"catalog.result")},y=function(e){return c()(e,"catalog.openCatalogServiceList")},m=function(e){return c()(e,"catalog.newService")},O=function(e){return c()(e,"catalog.newService.type","csw")},h=function(e){return c()(e,'catalog.services["'.concat(c()(e,"catalog.selectedService"),'"]'))},S=function(e){return c()(e,'catalog.services["'.concat(c()(e,"catalog.selectedService"),'"].type'),function(e){return c()(e,'catalog.default.staticServices["'.concat(c()(e,"catalog.selectedService"),'"].type'),"csw")}(e))},w=function(e){return c()(e,'catalog.services["'.concat(c()(e,"catalog.selectedService"),'"].layerOptions'),{})},E=function(e){return c()(e,"catalog.searchOptions")},j=function(e){return c()(e,"catalog.loadingError")},P=function(e){return c()(e,"catalog.loading",!1)},k=function(e){return c()(e,"catalog.selectedService")},D=function(e){return c()(e,"catalog.mode","view")},A=function(e){return c()(e,"catalog.layerError")},I=function(e){return c()(e,"catalog.searchOptions.text","")},C=function(e){return"metadataexplorer"===c()(e,"controls.toolbar.active")||c()(e,"controls.metadataexplorer.enabled")},_=function(e){return(c()(e,"localConfig.authenticationRules")||[]).filter((function(e){return"authkey"===e.method})).map((function(e){return e.authkeyParamName}))||[]},T=function(e){return c()(e,"catalog.pageSize",4)},M=function(e){return c()(e,"catalog.delayAutoSearch",1e3)},N=(0,n.zB)({projection:u.uy}),U=function(e){return c()(e,"catalog.formatsLoading",!1)},R=function(e){return c()(e,"catalog.newService.supportedFormats.imageFormats",i.QQ)},z=function(e){return c()(e,"catalog.newService.supportedFormats.infoFormats",(0,i.B8)())},G=function(e){return c()(e,"catalog.newService.formatUrlUsed","")}},66113:(e,t,r)=>{"use strict";r.d(t,{$F:()=>S,eg:()=>w,Kg:()=>E,PR:()=>j,eK:()=>P,pu:()=>k,Lu:()=>A,W5:()=>I,TQ:()=>C,KR:()=>T,sY:()=>M,vv:()=>N,jq:()=>U,Tr:()=>R,w:()=>z,CK:()=>G,u5:()=>B,z7:()=>V,FW:()=>L,GC:()=>x,yL:()=>F,_O:()=>K,JM:()=>Y,bU:()=>$,mm:()=>Q,X6:()=>H});var n=r(27361),o=r.n(n),c=r(13311),u=r.n(c),i=r(30998),a=r.n(i),l=r(18446),s=r.n(l),f=r(44908),d=r.n(f),g=r(92579),p=r(74621),v=r(24684);function b(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){return function(t){return o()(t,(0,g.Ll)("geostory.currentStory.".concat(e),t),"")}},w=function(e){return o()(e,"geostory.isCollapsed",!1)},E=function(e){return o()(e,"geostory.currentStory")},j=function(e){return o()(e,"geostory.currentPage",{})},P=function(e){return o()(e,"geostory.mode")},k=function(e){return function(e){return o()(function(e){return o()(e,"geostory.resource")}(e),"canEdit",!1)}(e)||(0,p.qg)(e)},D=function(e){return o()(E(e),"sections",[])},A=function(e){return D(e).length>0},I=function(e){return o()(e,"geostory.isSettingsEnabled",!1)},C=function(e){var t=o()(E(e),"settings",{}),r=D(e).filter((function(e){return e.type===g.ID.IMMERSIVE})),n=t.checked||[],c=d()(n.map((function(e){return(0,g.Un)(r,e)})).filter((function(e){return e})));return O(O({},t),{},{expanded:c})},_=function(e){return o()(C(e),"checked",[]).reduce((function(e,t){return O(O({},e),{},h({},t,!0))}),{})},T=function(e){return!s()(o()(E(e),"settings",{}),function(e){return o()(e,"geostory.oldSettings",{})}(e))},M=function(e){return o()(e,"geostory.selectedCard","")},N=function(e){return function(t){return S("".concat(e,".resourceId"))(t)}},U=function(e){return o()(E(e),"resources",[])},R=function(e){return function(t){return u()(U(t),{id:e})}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.withImmersiveSection,r=void 0!==t&&t,n=e.includeAlways,o=void 0===n||n;return function(e){var t=D(e),n=_(e);return t.reduce((function(e,t){if(t.type===g.ID.TITLE&&(o||n[t.id]))return[].concat(b(e),[t]);if(t.type===g.ID.PARAGRAPH&&(o||n[t.id]))return[].concat(b(e),[t]);if(t.type===g.ID.BANNER&&(o||n[t.id]))return[].concat(b(e),[t]);if(t.type===g.ID.IMMERSIVE){var c=t.contents&&t.contents.reduce((function(e,t){return o||n[t.id]?[].concat(b(e),[O(O({},t),{},{sectionId:e.id})]):e}),[])||[];return r?[].concat(b(e),[t],b(c)):[].concat(b(e),b(c))}return e}),[])}},G=function(e){return z({includeAlways:!0})(e).length},B=function(e){return a()(z({includeAlways:!0})(e),{id:j(e).columns&&j(e).columns[j(e).sectionId]?j(e).columns[j(e).sectionId]:j(e).sectionId||""})},V=function(e){return void 0!==o()(e,"geostory.focusedContent.target")},L=function(e){return o()(e,"geostory.focusedContent")},x=function(e){return S(o()(e,"geostory.focusedContent.path",""))(e)},F=function(e){return D(e).reduce((function(e,t){if(t.type===g.ID.IMMERSIVE){var r=t.contents&&t.contents.map((function(e){return{label:e.title||"",value:e.id}}))||[];return[].concat(b(e),[{label:t.title||"",value:t.id,children:r}])}return[].concat(b(e),[{label:t.title||"",value:t.id}])}),[])},W=function e(t,r){var n=r.contents,o=r.background;return r.resourceId===t||!(!o||o.resourceId!==t)||!!n&&!!u()(n,(function(r){return e(t,r)}))},K=function(e,t){return!!u()(D(e),(function(e){return W(t,e)}))},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,v.F)(e).includes("geostory/shared")},$=function(e){return o()(e,"geostory.updateUrlOnScroll",!1)},Q=function(e){return o()(e,"geostory.currentStory.settings.theme.fontFamilies",[])},H=function(e){return o()(e,"geostory.mediaEditorSettings")}},58422:(e,t,r)=>{"use strict";r.d(t,{UC:()=>p}),r(52259),r(827);var n=r(22222),o=r(88113),c=r(1757),u=r(7877),i=r(85148),a=r(97291);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(75110),r(31935);var d={},g=(0,n.zB)({catalogServices:(0,n.zB)({services:o.b6,selectedService:o.Cb}),widgetsConfig:(0,n.zB)({widgets:c.zm,layouts:c.p,collapsed:c.lF}),mapInfoConfiguration:u.bI,dimensionData:(0,n.zB)({currentTime:i.WT,offsetTime:i.ns}),timelineData:(0,n.zB)({selectedLayer:a.Li})}),p=function(e){var t=Object.keys(d).reduce((function(t,r){return s(s({},t),{},f({},r,d[r](e)))}),{});return s(s({},g(e)),t)}},87218:(e,t,r)=>{"use strict";r.d(t,{I:()=>n,_:()=>o});var n=function(e){return e.searchconfig&&e.searchconfig.textSearchConfig},o=function(e){return e.searchbookmarkconfig&&e.searchbookmarkconfig.bookmarkSearchConfig}},73443:(e,t,r)=>{"use strict";r.d(t,{rs:()=>n,AY:()=>o,SW:()=>c,yB:()=>u,oG:()=>i,XG:()=>a,oz:()=>l,id:()=>s,gc:()=>f,cE:()=>d,rG:()=>g,Vj:()=>p,Pg:()=>v,nY:()=>b});var n="GEONODE:SAVING_RESOURCE",o="GEONODE:SAVE_SUCCESS",c="GEONODE:SAVE_ERROR",u="GEONODE:CLEAR_SAVE",i="GEONODE:SAVE_CONTENT",a="GEONODE:UPDATE_RESOURCE_BEFORE_SAVE",l="GEONODE:SAVE_DIRECT_CONTENT";function s(){return{type:n}}function f(e){return{type:o,success:e}}function d(e){return{type:c,error:e}}function g(){return{type:u}}function p(e,t,r,n){return{type:i,id:e,metadata:t,reload:r,showNotifications:n}}function v(e){return{type:a,id:e}}function b(){return{type:l}}},18576:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>D});var n=r(49977),o=r(827),c=r(75110),u=r(31935),i=r(58422),a=r(87218),l=r(52259),s=r(63202),f=r(66113),d=r(74621),g=r(97395),p=r(73443),v=r(43892),b=r(99380),y=r(55035),m=r(55877),O=r.n(m),h=r(2811);function S(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k={map:function(e,t,r,n){var f=(0,o.Od)(e)||{},d=(0,c.l2)(e),g=(0,c.Bt)(e),p=(0,u.Mz)(e),v=(0,a.I)(e),m=(0,a._)(e),O=(0,i.UC)(e),h=(0,l.saveMapConfiguration)(f,d,g,p,v,m,O),S={title:r.name,abstract:r.description,thumbnail_url:r.thumbnail,data:h};return t?(0,b.sA)(t,j(j({},S),{},{id:t})):(0,b.df)(S).then((function(e){return n&&(window.location.href=(0,y.zL)("".concat((0,s.u8)("geonodeUrl"),"catalogue/#/map/").concat(e.pk)),window.location.reload()),e.data}))},geostory:function(e,t,r,n){var o=(0,f.Kg)(e),c=(0,d.np)(e),u={title:r.name,abstract:r.description,thumbnail_url:r.thumbnail,data:o};return t?(0,b.Tw)(t,u):(0,b.NJ)(j({name:r.name+" "+O()(),owner:c.name},u)).then((function(e){return n&&(window.location.href=(0,y.zL)("".concat((0,s.u8)("geonodeUrl"),"catalogue/#/geostory/").concat(e.pk)),window.location.reload()),e.data}))},document:function(e,t,r){var n={title:r.name,abstract:r.description,thumbnail_url:r.thumbnail};return!!t&&(0,b.gU)(t,n)},dataset:function(e,t,r){var n={title:r.name,abstract:r.description,thumbnail_url:r.thumbnail};return!!t&&(0,b.do)(t,n)}};const D={gnSaveContent:function(e,t){return e.ofType(p.oG).switchMap((function(e){var r,o=t.getState(),c=(null===(r=o.gnresource)||void 0===r?void 0:r.type)||"map";return n.Observable.defer((function(){return k[c](o,e.id,e.metadata,e.reload)})).switchMap((function(t){return n.Observable.of.apply(n.Observable,[(0,p.gc)(t),(0,v.QN)({title:e.metadata.name,abstract:e.metadata.description,thumbnail_url:e.metadata.thumbnail,extension:null==t?void 0:t.extension,href:null==t?void 0:t.href})].concat(S(e.showNotifications?[(0,g.Vp)({title:"saveDialog.saveSuccessTitle",message:"saveDialog.saveSuccessMessage"})]:[])))})).catch((function(t){return n.Observable.of.apply(n.Observable,[(0,p.cE)(t.data||t.message)].concat(S(e.showNotifications?[(0,g.vU)({title:"map.mapError.errorTitle",message:"map.mapError.errorDefault"})]:[])))})).startWith((0,p.id)())}))},gnUpdateResource:function(e,t){return e.ofType(p.XG).switchMap((function(e){var r,o=(null===(r=t.getState().gnresource)||void 0===r?void 0:r.data)||{};return!e.id||o.pk&&e.id&&o.pk+""==e.id+""?n.Observable.empty():n.Observable.defer((function(){return(0,b.iv)(e.id)})).switchMap((function(e){return n.Observable.of((0,v.DF)(e))})).catch((function(e){return n.Observable.of((0,v.mN)(e.data||e.message))})).startWith((0,v.Q$)())}))},gnSaveDirectContent:function(e,t){return e.ofType(p.oz).switchMap((function(){var e,r=t.getState(),c=(0,o._H)(r),u=(null==c?void 0:c.id)||(null==r||null===(e=r.gnresource)||void 0===e?void 0:e.id);return n.Observable.defer((function(){return(0,b.iv)(u)})).switchMap((function(e){var t=(0,h.Yj)(r),o=(0,h.uu)(r),c=(0,h.UU)(r),i={name:t||(null==e?void 0:e.title),description:o||(null==e?void 0:e.abstract),thumbnail:c||(null==e?void 0:e.thumbnail_url),extension:null==e?void 0:e.extension,href:null==e?void 0:e.href};return n.Observable.of((0,v.DF)(e),(0,p.Vj)(u,i,!1,!0))})).catch((function(e){return n.Observable.of((0,p.cE)(e.data||e.message),(0,g.vU)({title:"map.mapError.errorTitle",message:e.data||e.message||"map.mapError.errorDefault"}))})).startWith((0,p.id)())}))}}},62170:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(73443);const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.rs:case n.oz:return{saving:!0,error:void 0,success:void 0};case n.AY:return{success:t.success,saving:!1};case n.SW:return{error:t.error,saving:!1};case n.yB:return{};default:return e}}},2811:(e,t,r)=>{"use strict";r.d(t,{fg:()=>n,HG:()=>o,Yj:()=>c,uu:()=>u,UU:()=>i,il:()=>a,ez:()=>l,V$:()=>s});var n=function(e){var t,r,n,o=null==e||null===(t=e.gnresource)||void 0===t?void 0:t.id,c=null==e||null===(r=e.gnresource)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.pk;return o||c},o=function(e){var t,r;return(null==e||null===(t=e.gnresource)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.perms)||[]},c=function(e){var t,r;return(null==e||null===(t=e.gnresource)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.name)||!1},u=function(e){var t,r;return(null==e||null===(t=e.gnresource)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.abstract)||!1},i=function(e){var t,r;return(null==e||null===(t=e.gnresource)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.thumbnail_url)||!1},a=function(e){var t,r,n,o,c=null==e||null===(t=e.gnresource)||void 0===t||null===(r=t.permissions)||void 0===r?void 0:r.canEdit,u=(null==e||null===(n=e.gnresource)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.perms)||[];return c||u.includes("change_resourcebase")},l=function(){return function(e){var t,r,n;return null==e||null===(t=e.security)||void 0===t||null===(r=t.user)||void 0===r||null===(n=r.perms)||void 0===n?void 0:n.includes("add_resource")}},s=function(e){var t;return!(null==e||null===(t=e.gnresource)||void 0===t||!t.isNew)}}}]);