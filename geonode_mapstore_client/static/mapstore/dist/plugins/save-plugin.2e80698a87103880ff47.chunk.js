(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4831],{32425:(e,n,r)=>{"use strict";r.d(n,{Z:()=>d});var t=r(45697),o=r.n(t),l=r(24852),i=r.n(l);function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var u=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var n=e.size,r=e.style,t=void 0===r?{}:r,o=e.className,l=e.hidden;return i().createElement("div",{className:o,style:s({width:n,height:n,overflow:"hidden"},t)},!l&&i().createElement("div",{className:"mapstore-".concat(u(n),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const d=p},28261:(e,n,r)=>{"use strict";r.d(n,{Z:()=>u});var t=r(24852),o=r.n(t),l=r(45697),i=r.n(l),c=["id","className","style","children"];function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function a(e){var n=e.id,r=e.className,t=e.style,l=e.children,i=function(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c),a=r?" "+r:"";return o().createElement(o().Fragment,null,o().createElement("div",s({},i,{id:n,className:"gn-spinner".concat(a),style:t}),o().createElement("div",null)),l)}a.propTypes={id:i().string,className:i().string,style:i().object},a.defaultProps={};const u=a},51605:(e,n,r)=>{"use strict";r.d(n,{Z:()=>t.Z});var t=r(28261)},93136:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>Z});var t=r(24852),o=r.n(t),l=r(71703),i=r(22222),c=r(22843),s=r(5346),a=r(57588),u=r(827),p=r(32425),d=r(93473),v=r(51605),f=r(74621),b=r(25108),y=r(72036),m=r(62170),O=r(18576),g=r(73443),j=r(3828),h=r(52992);function P(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function w(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var E=(0,l.connect)((0,i.P1)([function(e){var n;return null==e||null===(n=e.gnsave)||void 0===n?void 0:n.saving}],(function(e){return{saving:e}})))((function(e){return e.saving?o().createElement("div",{style:{position:"absolute",width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.75)",top:"0px",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",right:"0px"}},o().createElement(p.Z,{size:150})):null})),k=(0,l.connect)((0,i.P1)(f.jl,j.V$,j.il,u._H,h.I,(function(e,n,r,t,o){return{enabled:e&&!n&&(r||(null==t?void 0:t.canEdit)),loading:o}})),{onClick:g.nY})((function(e){var n=e.enabled,r=e.onClick,t=e.variant,l=e.size,i=e.loading;return n?o().createElement(d.Z,{variant:t||"primary",size:l,onClick:function(){return r()},disabled:i},o().createElement(s.Z,{msgId:"save"})," ",i&&o().createElement(v.Z,null)):null}));const Z=(0,c.rx)("Save",{component:E,containers:{BurgerMenu:{name:"save",position:30,text:o().createElement(s.Z,{msgId:"save"}),icon:o().createElement(a.Glyphicon,{glyph:"floppy-open"}),action:g.nY,selector:(0,i.P1)(f.jl,j.V$,j.il,u._H,(function(e,n,r,t){return{style:e&&!n&&(r||null!=t&&t.canEdit)?{}:{display:"none"}}}))},ActionNavbar:{name:"Save",Component:k}},epics:function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?P(Object(r),!0).forEach((function(n){w(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},O.ZP),reducers:{gnresource:y.Z,gnsave:m.Z,controls:b.Z}})},52992:(e,n,r)=>{"use strict";r.d(n,{j:()=>l,I:()=>i});var t=r(3828),o=r(12530),l=function(e,n){var r,t;return((null==e||null===(r=e.resourceservice)||void 0===r||null===(t=r.processes)||void 0===t?void 0:t.find((function(e){var r,t;return(null==e||null===(r=e.resource)||void 0===r?void 0:r.pk)===(null==n||null===(t=n.resource)||void 0===t?void 0:t.pk)&&(null==e?void 0:e.processType)===(null==n?void 0:n.processType)})))||{}).completed},i=function(e){var n,r,l=(0,t.yK)(e),i=l&&(null==e||null===(n=e.resourceservice)||void 0===n||null===(r=n.processes)||void 0===r?void 0:r.find((function(e){var n;return(null==e||null===(n=e.resource)||void 0===n?void 0:n.pk)===(null==l?void 0:l.pk)&&(null==e?void 0:e.processType)===o.zj.PERMISSIONS_RESOURCE})));return!(!i||null!=i&&i.completed)}}}]);