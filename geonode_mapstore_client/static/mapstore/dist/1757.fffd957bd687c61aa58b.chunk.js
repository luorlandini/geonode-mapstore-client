(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1757],{57579:(t,e,r)=>{"use strict";r.d(e,{Jm:()=>u,AE:()=>c,dm:()=>f,n8:()=>d,BV:()=>s,Cz:()=>l,wb:()=>v,$A:()=>g,eb:()=>p,v8:()=>b,yY:()=>h,ff:()=>y,S0:()=>E,Q6:()=>T,kb:()=>D,GV:()=>w,LH:()=>m,lG:()=>O,Km:()=>I,pV:()=>S,V5:()=>A,IT:()=>G,VR:()=>P,jv:()=>j,oU:()=>W,Ym:()=>R,uU:()=>N,ke:()=>_,nw:()=>x,A4:()=>H,C2:()=>C,Qe:()=>k,Ij:()=>L,Ko:()=>M,E9:()=>V,K4:()=>U,c_:()=>Y,uT:()=>F,bS:()=>z,Rz:()=>q,t4:()=>X,_k:()=>$,w2:()=>B,YA:()=>J,sD:()=>Z,Gn:()=>K,Rb:()=>Q,fy:()=>tt,kr:()=>et,f:()=>rt,Ff:()=>nt,Pt:()=>ot,ep:()=>it});var n=r(23570),o=r.n(n);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u="WIDGETS:INSERT",c="WIDGETS:NEW",f="WIDGETS:EDIT",d="WIDGETS:EDIT_NEW",s="WIDGETS:EDITOR_CHANGE",l="WIDGETS:EDITOR_SETTING_CHANGE",v="WIDGETS:UPDATE",g="WIDGETS:UPDATE_PROPERTY",p="WIDGETS:UPDATE_LAYER",b="WIDGETS:CHANGE_LAYOUT",h="WIDGETS:DELETE",y="WIDGETS:CLEAR_WIDGETS",E="WIDGETS:ADD_DEPENDENCY",T="WIDGETS:REMOVE_DEPENDENCY",D="WIDGETS:LOAD_DEPENDENCIES",w="WIDGETS:RESET_DEPENDENCIES",m="WIDGETS:TOGGLE_CONNECTION",O="WIDGETS:OPEN_FILTER_EDITOR",I="WIDGETS:EXPORT_CSV",S="WIDGETS:EXPORT_IMAGE",A="WIDGETS:WIDGET_SELECTED",G="WIDGETS:NEW_CHART",P="floating",j="dependencySelector",W=/^widgets\["?([^"\]]*)"?\]\.?(.*)$/,R="WIDGET:TOGGLE_COLLAPSE",N="WIDGET:TOGGLE_COLLAPSE_ALL",_="WIDGET:TOGGLE_MAXIMIZE",x="WIDGET:TOGGLE_TRAY",H=function(t){return{type:c,widget:t}},C=function(){return{type:G}},k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return{type:u,target:e,id:o()(),widget:t}},L=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"replace",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:P;return{type:g,id:t,target:o,key:e,value:r,mode:n}},M=function(t){return{type:p,layer:t}},V=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return{type:h,target:e,widget:t}},U=function(){return{type:y}},Y=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:P;return{type:b,allLayouts:e,layout:t,target:r}},F=function(t){return{type:f,widget:t}},z=function(t,e){return{type:d,widget:t,settings:e}},q=function(t,e){return{type:s,key:t,value:e}},X=function(t,e){return{type:l,key:t,value:e}},$=function(t){return{type:D,dependencies:t}},B=function(t,e,r,n){return{type:m,active:t,availableDependencies:e,options:r,target:n}},J=function(t){return X("step",t)},Z=function(t){var e=t.data,r=void 0===e?[]:e,n=t.title;return{type:I,data:r,title:void 0===n?"export":n}},K=function(t,e){return{type:A,widget:t,opts:e}},Q=function(t){var e=t.widgetDivId;return{type:S,widgetDivId:e}},tt=function(){return{type:O}},et=function(t,e){return r=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({active:t},e),X("".concat(j),r);var r},rt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return{type:R,widget:t,target:e}},nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return{type:N,target:t}},ot=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;return{type:_,widget:t,target:e}},it=function(t){return{type:x,value:t}}},67306:(t,e,r)=>{"use strict";r.d(e,{Wy:()=>i,i$:()=>a,P0:()=>u,NB:()=>c,MZ:()=>f,J:()=>d,DZ:()=>s,CN:()=>l,fd:()=>v,Yl:()=>g,Ip:()=>p});var n=r(22222),o=r(24684),i=function(t){return t&&t.dashboard&&t.dashboard.editor&&t.dashboard.editor.available},a=function(t){return t&&t.dashboard&&t.dashboard.editing},u=function(t){return t&&t.dashboard&&t.dashboard.showConnections},c=function(t){return t&&t.dashboard&&t.dashboard.resource},f=function(t){return t&&t.dashboard&&t.dashboard.loading},d=function(t){return t&&t.browser&&t.browser.mobile},s=(0,n.P1)(o.F,c,d,(function(t,e,r){return r?!r:e&&e.canEdit||isNaN(t.substr(-4))})),l=function(t){return t&&t.dashboard&&t.dashboard.services},v=function(t){return t&&t.dashboard&&t.dashboard.selectedService},g=function(t){return t&&t.dashboard&&t.dashboard.mode||"view"},p=function(t){var e;return(null===(e=t.dashboard)||void 0===e?void 0:e.isNew)||!1}},1757:(t,e,r)=>{"use strict";r.d(e,{E2:()=>T,YI:()=>m,GW:()=>O,zm:()=>I,lF:()=>S,Jb:()=>A,E5:()=>G,YR:()=>P,jx:()=>R,zA:()=>N,r0:()=>_,xI:()=>x,ie:()=>H,p:()=>C,yZ:()=>k,hF:()=>L,Xu:()=>M,HU:()=>V,nA:()=>U,JT:()=>Y,Wo:()=>F,um:()=>z,h9:()=>q,md:()=>X}),r(13311);var n=r(27361),o=r.n(n),i=r(84596),a=r.n(i),u=r(1469),c=r.n(u),f=r(827),d=r(75110),s=r(24684),l=r(57579),v=r(86159),g=r(67306),p=r(22222),b=r(84715);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var T=function(t){return o()(t,"widgets.builder.settings")},D=function(t){return o()(t,"widgets.dependencies")||{}},w=function(t){return Object.keys(D(t)).map((function(e){return D(t)[e]}))},m=function(t){return o()(t,"widgets.builder.editor")},O=(0,p.P1)(m,d.Iz,(function(t){return(0,g.Wy)(t)&&(0,g.i$)(t)}),(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.layer,r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return e||!n&&r})),I=function(t){return o()(t,"widgets.containers[".concat(l.VR,"].widgets"))},S=function(t){return o()(t,"widgets.containers[".concat(l.VR,"].collapsed"))},A=function(t){return o()(t,"widgets.containers[".concat(l.VR,"].maximized"))},G=(0,p.P1)(I,S,A,(function(t,e,r){if(t){if(null!=r&&r.widget)return t.filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id;return e===r.widget.id}));if(e)return t.filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.id;return!e[r]}))}return t})),P=(0,p.P1)(S,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t)})),j=function(t){return(I(t)||[]).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.widgetType;return"map"===e}))},W=function(t){return(I(t)||[]).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.widgetType;return"table"===e}))},R=(0,p.P1)(j,W,f.Od,s.F,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3?arguments[3]:void 0;return{availableDependencies:t.map((function(t){var e=t.id;return"widgets[".concat(e,"].map")})).concat(a()(r).map((function(){return"map"}))).concat(a()(e).filter((function(){return-1===n.indexOf("viewer")})).map((function(t){var e=t.id;return"widgets[".concat(e,"]")})))}})),N=(0,p.P1)(j,W,f.Od,s.F,m,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,i=o&&"map"!==o.widgetType?o&&o.layer||{}:o&&o.map&&o.map.layers||[];return{availableDependencies:t.map((function(t){var e=t.id;return"widgets[".concat(e,"].map")})).concat(a()(r).map((function(){return r?"map":null}))).filter((function(t){return t})).concat(a()(e).filter((function(){return-1===n.indexOf("viewer")})).filter((function(t){return c()(i)||i.name===t.layer.name})).filter((function(t){return o&&o.id!==t.id})).map((function(t){var e=t.id;return"widgets[".concat(e,"]")})))}})),_=function(t){return o()(T(t),"".concat(l.jv))},x=function(t){return o()(_(t),"active")},H=(0,p.P1)(I,(function(t){return(0,v.Ug)(t)})),C=function(t){return o()(t,"widgets.containers[".concat(l.VR,"].layouts"))},k=function(t){return o()(t,"widgets.containers[".concat(l.VR,"].layout"))},L=function(t){return o()(t,"widgets.containers[".concat(l.VR,"].widgets"))},M=function(t){return o()(t,"widgets.tray")},V=function(t){return(L(t)||[]).length>0},U=function(t){return o()(t,"widgets.containers[".concat(l.VR,"].layouts"))},Y=function(t){return o()(m(t),"layer")},F=function(t){return o()(t,"widgets.builder.editor.returnToFeatureGrid",!1)},z=function(t){return o()(m(t),"filter")},q=(0,b.y)(D,w,(function(t){return w(t).map((function(e){return 0===e.indexOf("map.")?o()((0,f.Od)(t),e.slice(4)):e.match(l.oU)?(0,v.D6)(e,I(t)):o()(t,e)}))}),(function(t,e,r){return e.reduce((function(e,n,o){return y(y({},e),{},E({},Object.keys(t)[o],r[o]))}),{})})),X=(0,p.zB)({widgets:I,layouts:C,catalogs:g.CN})},43143:(t,e,r)=>{"use strict";r.d(e,{qH:()=>c,qj:()=>f,qq:()=>d});var n,o=r(17621),i=r.n(o),a=r(14841),u=r.n(a),c=function(t,e,r,o){var i=t;isNaN(parseFloat(t))&&(i=n.hexToHsv(t)[0]);var a=.5/(r-1),u=e/(r-1),c=[];1===r&&(a=.5,u=e/2);for(var f=0;f<r;f++){var d=i+f*u-e/2,s=a*f+.3,l=s;o&&(d=o.h||d,s=o.s||s,l=o.v||l),c.push(n.hsvToHex(d,s,l,f))}return c},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"red";return i()(t).toHexString()},d=function(t,e,r){var n=i()(t);return t&&n.setAlpha(u()(void 0!==e?e:n.getAlpha())).toRgbString()||r};n={decToHex:function(t){var e="0123456789ABCDEF",r=parseInt(t,10);return r=isNaN(r)?0:r,e.charAt(((r=r>255||r<0?0:r)-r%16)/16)+e.charAt(r%16)},rgbToHex:function(t,e,r){return t instanceof Array?n.rgbToHex(t[0],t[1],t[2]):"#"+n.decToHex(t)+n.decToHex(e)+n.decToHex(r)},realToDec:function(t){return Math.min(255,Math.round(256*t))},rgbToHsv:function(t,e,r){if(t instanceof Array)return n.rgbToHsv(t[0],t[1],t[2]);var o,i,a,u,c,f=t/255,d=e/255,s=r/255;switch(o=Math.min(Math.min(f,d),s),a=(i=Math.max(Math.max(f,d),s))-o,i){case o:u=0;break;case f:u=60*(d-s)/a,d<s&&(u+=360);break;case d:u=60*(s-f)/a+120;break;case s:u=60*(f-d)/a+240}return c=0===i?0:1-o/i,[Math.round(u),c,i]},distributedColorsHEX:function(t){for(var e=360/(t-1),r=[],o=function t(e,r,o){var i=t(e,r,o);return n.rgbToHex(i)},i=0;i<t;i++)r.push(o(e*i,.57,.63));return r},sameToneRangeColors:c,hsvToRgb:function(t,e,r){if(t instanceof Array)return n.hsvToRgb(t[0],t[1],t[2]);var o,i,a,u=Math.floor(t/60%6),c=t/60-u,f=r*(1-e),d=r*(1-c*e),s=r*(1-(1-c)*e);switch(u){case 0:o=r,i=s,a=f;break;case 1:o=d,i=r,a=f;break;case 2:o=f,i=r,a=s;break;case 3:o=f,i=d,a=r;break;case 4:o=s,i=f,a=r;break;case 5:o=r,i=f,a=d}return[n.realToDec(o),n.realToDec(i),n.realToDec(a)]},hsvToHex:function(t,e,r){var o=n.hsvToRgb(t,e,r);return n.rgbToHex(o)},hexToHsv:function(t){var e=t;if(e.length>0){"#"===e[0]&&(e=t.substring(1));var r=n.hexToRgb(e);return n.rgbToHsv(r)}return null},hexToRgb:function(t){var e,r,n,o=t;return"#"===o.charAt(0)&&(o=t.substring(1)),e=o.charAt(0)+o.charAt(1),r=o.charAt(2)+o.charAt(3),n=o.charAt(4)+o.charAt(5),[parseInt(e,16),parseInt(r,16),parseInt(n,16)]},colorToHexStr:f,colorToRgbaStr:d}},15676:(t,e,r)=>{"use strict";r.d(e,{H:()=>o});var n=function(t,e,r){var n,o,i=[],a=[],u=t;for(i.push(u);i.length>0;)if(!r[u=i.shift()])for(r[u]=!0,a.push(u),n=0;n<e.length;n+=1)(o=e[n])[0]!==u||r[o[1]]?o[1]!==u||r[o[0]]||i.push(o[0]):i.push(o[1]);return a},o=function(t){for(var e={},r=[],o=0,i=t.length;o<i;o+=1){var a=t[o],u=a[0],c=a[1],f=null;e[u]?e[c]||(f=c):f=u,f&&r.push(n(f,t,e))}return r}},86159:(t,e,r)=>{"use strict";r.d(e,{D6:()=>g,Ug:()=>b});var n=r(27361),o=r.n(n),i=r(13311),a=r.n(i),u=(r(81763),r(59854),r(57579)),c=r(15676),f=r(43143);function d(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var v=function(t,e){var r,n,o=(r=u.oU.exec(t),n=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(r,n)||s(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],c=o[1];return i?a()(e,{id:c}):null},g=function(t,e){var r=u.oU.exec(t),n=r&&r[2],i=v(t,e);return n?o()(i,n):i},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(e,r){var n=o()(r,"mapSync")&&o()(r,"dependenciesMap")||{},i=Object.keys(n).map((function(e){return v(n[e],t)}))||[];return[].concat(d(e),d(i.filter((function(t){return void 0!==t})).map((function(t){return[r.id,t.id]}))))}),[])},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=(0,c.H)(p(t)),r={base:190,range:340,options:{base:10,range:360,s:.67,v:.67}},n=(0,f.qH)(r.base,r.range,e.length+1,r.options);return e.map((function(t,e){return{color:n[e],widgets:t}}))}}}]);