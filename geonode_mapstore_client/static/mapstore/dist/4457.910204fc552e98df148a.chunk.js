(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4457],{56029:(r,e,t)=>{var o=t(33448);r.exports=function(r,e,t){for(var n=-1,i=r.length;++n<i;){var a=r[n],u=e(a);if(null!=u&&(void 0===s?u==u&&!o(u):t(u,s)))var s=u,c=a}return c}},53407:r=>{r.exports=function(r,e){return r<e}},69199:(r,e,t)=>{var o=t(89881),n=t(98612);r.exports=function(r,e){var t=-1,i=n(r)?Array(r.length):[];return o(r,(function(r,o,n){i[++t]=e(r,o,n)})),i}},82689:(r,e,t)=>{var o=t(29932),n=t(97786),i=t(67206),a=t(69199),u=t(71131),s=t(7518),c=t(85022),p=t(6557),f=t(1469);r.exports=function(r,e,t){e=e.length?o(e,(function(r){return f(r)?function(e){return n(e,1===r.length?r[0]:r)}:r})):[p];var l=-1;e=o(e,s(i));var v=a(r,(function(r,t,n){return{criteria:o(e,(function(e){return e(r)})),index:++l,value:r}}));return u(v,(function(r,e){return c(r,e,t)}))}},18674:r=>{r.exports=function(r){return function(e){return null==r?void 0:r[e]}}},71131:r=>{r.exports=function(r,e){var t=r.length;for(r.sort(e);t--;)r[t]=r[t].value;return r}},26393:(r,e,t)=>{var o=t(33448);r.exports=function(r,e){if(r!==e){var t=void 0!==r,n=null===r,i=r==r,a=o(r),u=void 0!==e,s=null===e,c=e==e,p=o(e);if(!s&&!p&&!a&&r>e||a&&u&&c&&!s&&!p||n&&u&&c||!t&&c||!i)return 1;if(!n&&!a&&!p&&r<e||p&&t&&i&&!n&&!a||s&&t&&i||!u&&i||!c)return-1}return 0}},85022:(r,e,t)=>{var o=t(26393);r.exports=function(r,e,t){for(var n=-1,i=r.criteria,a=e.criteria,u=i.length,s=t.length;++n<u;){var c=o(i[n],a[n]);if(c)return n>=s?c:c*("desc"==t[n]?-1:1)}return r.index-e.index}},24626:(r,e,t)=>{var o=t(77813),n=Object.prototype,i=n.hasOwnProperty;r.exports=function(r,e,t,a){return void 0===r||o(r,n[t])&&!i.call(a,t)?e:r}},89464:(r,e,t)=>{var o=t(18674)({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});r.exports=o},31994:r=>{var e={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};r.exports=function(r){return"\\"+e[r]}},79865:r=>{r.exports=/<%-([\s\S]+?)%>/g},76051:r=>{r.exports=/<%([\s\S]+?)%>/g},5712:r=>{r.exports=/<%=([\s\S]+?)%>/g},29018:(r,e,t)=>{var o=t(98363),n=t(21463),i=t(81704),a=n((function(r,e,t,n){o(e,i(e),r,n)}));r.exports=a},9591:(r,e,t)=>{var o=t(96874),n=t(5976),i=t(64647),a=n((function(r,e){try{return o(r,void 0,e)}catch(r){return i(r)?r:new Error(r)}}));r.exports=a},7187:(r,e,t)=>{var o=t(89464),n=t(79833),i=/[&<>"']/g,a=RegExp(i.source);r.exports=function(r){return(r=n(r))&&a.test(r)?r.replace(i,o):r}},52353:r=>{r.exports=function(r){return void 0===r}},95395:(r,e,t)=>{var o=t(89465),n=t(47816),i=t(67206);r.exports=function(r,e){var t={};return e=i(e,3),n(r,(function(r,n,i){o(t,e(r,n,i),r)})),t}},22762:(r,e,t)=>{var o=t(56029),n=t(67206),i=t(53407);r.exports=function(r,e){return r&&r.length?o(r,n(e,2),i):void 0}},89734:(r,e,t)=>{var o=t(21078),n=t(82689),i=t(5976),a=t(16612),u=i((function(r,e){if(null==r)return[];var t=e.length;return t>1&&a(r,e[0],e[1])?e=[]:t>2&&a(e[0],e[1],e[2])&&(e=[e[0]]),n(r,o(e,1),[])}));r.exports=u},41106:(r,e,t)=>{var o=t(29018),n=t(9591),i=t(47415),a=t(24626),u=t(31994),s=t(64647),c=t(16612),p=t(3674),f=t(5712),l=t(15835),v=t(79833),g=/\b__p \+= '';/g,y=/\b(__p \+=) '' \+/g,d=/(__e\(.*?\)|\b__t\)) \+\n'';/g,h=/[()=,{}\[\]\/\s]/,m=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,w=/($^)/,x=/['\n\r\u2028\u2029\\]/g,_=Object.prototype.hasOwnProperty;r.exports=function(r,e,t){var E=l.imports._.templateSettings||l;t&&c(r,e,t)&&(e=void 0),r=v(r),e=o({},e,E,a);var b,M,P=o({},e.imports,E.imports,a),C=p(P),F=i(P,C),q=0,A=e.interpolate||w,I="__p += '",j=RegExp((e.escape||w).source+"|"+A.source+"|"+(A===f?m:w).source+"|"+(e.evaluate||w).source+"|$","g"),S=_.call(e,"sourceURL")?"//# sourceURL="+(e.sourceURL+"").replace(/\s/g," ")+"\n":"";r.replace(j,(function(e,t,o,n,i,a){return o||(o=n),I+=r.slice(q,a).replace(x,u),t&&(b=!0,I+="' +\n__e("+t+") +\n'"),i&&(M=!0,I+="';\n"+i+";\n__p += '"),o&&(I+="' +\n((__t = ("+o+")) == null ? '' : __t) +\n'"),q=a+e.length,e})),I+="';\n";var k=_.call(e,"variable")&&e.variable;if(k){if(h.test(k))throw new Error("Invalid `variable` option passed into `_.template`")}else I="with (obj) {\n"+I+"\n}\n";I=(M?I.replace(g,""):I).replace(y,"$1").replace(d,"$1;"),I="function("+(k||"obj")+") {\n"+(k?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(b?", __e = _.escape":"")+(M?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+I+"return __p\n}";var L=n((function(){return Function(C,S+"return "+I).apply(void 0,F)}));if(L.source=I,s(L))throw L;return L}},15835:(r,e,t)=>{var o=t(7187),n={escape:t(79865),evaluate:t(76051),interpolate:t(5712),variable:"",imports:{_:{escape:o}}};r.exports=n},87185:(r,e,t)=>{var o=t(45652);r.exports=function(r,e){return e="function"==typeof e?e:void 0,r&&r.length?o(r,void 0,e):[]}},7:(r,e,t)=>{var o=t(43677),n=t(3465).point;r.exports=function(r){var e=o(r),t=(e[0]+e[2])/2,i=(e[1]+e[3])/2;return n([t,i])}},43677:(r,e,t)=>{var o=t(71594).pZ;r.exports=function(r){var e=[1/0,1/0,-1/0,-1/0];return o(r,(function(r){e[0]>r[0]&&(e[0]=r[0]),e[1]>r[1]&&(e[1]=r[1]),e[2]<r[0]&&(e[2]=r[0]),e[3]<r[1]&&(e[3]=r[1])})),e}},60720:(r,e,t)=>{var o=t(4768).getCoord,n=t(3465).radiansToDistance;r.exports=function(r,e,t){var i=Math.PI/180,a=o(r),u=o(e),s=i*(u[1]-a[1]),c=i*(u[0]-a[0]),p=i*a[1],f=i*u[1],l=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(c/2),2)*Math.cos(p)*Math.cos(f);return n(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),t)}},22543:(r,e,t)=>{var o=t(3465).featureCollection,n=t(71594).pZ,i=t(3465).point;r.exports=function(r){var e=[];return n(r,(function(r){e.push(i(r))})),o(e)}},3465:r=>{function e(r,e){return{type:"Feature",properties:e||{},geometry:r}}r.exports.feature=e,r.exports.point=function(r,t){if(!Array.isArray(r))throw new Error("Coordinates must be an array");if(r.length<2)throw new Error("Coordinates must be at least 2 numbers long");return e({type:"Point",coordinates:r.slice()},t)},r.exports.polygon=function(r,t){if(!r)throw new Error("No coordinates passed");for(var o=0;o<r.length;o++){var n=r[o];if(n.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var i=0;i<n[n.length-1].length;i++)if(n[n.length-1][i]!==n[0][i])throw new Error("First and last Position are not equivalent.")}return e({type:"Polygon",coordinates:r},t)},r.exports.lineString=function(r,t){if(!r)throw new Error("No coordinates passed");return e({type:"LineString",coordinates:r},t)},r.exports.featureCollection=function(r){return{type:"FeatureCollection",features:r}},r.exports.multiLineString=function(r,t){if(!r)throw new Error("No coordinates passed");return e({type:"MultiLineString",coordinates:r},t)},r.exports.multiPoint=function(r,t){if(!r)throw new Error("No coordinates passed");return e({type:"MultiPoint",coordinates:r},t)},r.exports.multiPolygon=function(r,t){if(!r)throw new Error("No coordinates passed");return e({type:"MultiPolygon",coordinates:r},t)},r.exports.geometryCollection=function(r,t){return e({type:"GeometryCollection",geometries:r},t)};var t={miles:3960,nauticalmiles:3441.145,degrees:57.2957795,radians:1,inches:250905600,yards:6969600,meters:6373e3,metres:6373e3,kilometers:6373,kilometres:6373};r.exports.radiansToDistance=function(r,e){var o=t[e||"kilometers"];if(void 0===o)throw new Error("Invalid unit");return r*o},r.exports.distanceToRadians=function(r,e){var o=t[e||"kilometers"];if(void 0===o)throw new Error("Invalid unit");return r/o},r.exports.distanceToDegrees=function(r,e){var o=t[e||"kilometers"];if(void 0===o)throw new Error("Invalid unit");return r/o*57.2958}},78576:(r,e,t)=>{var o=t(4768);function n(r,e){for(var t=!1,o=0,n=e.length-1;o<e.length;n=o++){var i=e[o][0],a=e[o][1],u=e[n][0],s=e[n][1];a>r[1]!=s>r[1]&&r[0]<(u-i)*(r[1]-a)/(s-a)+i&&(t=!t)}return t}r.exports=function(r,e){var t=o.getCoord(r),i=e.geometry.coordinates;"Polygon"===e.geometry.type&&(i=[i]);for(var a=0,u=!1;a<i.length&&!u;a++)if(n(t,i[a][0])){for(var s=!1,c=1;c<i[a].length&&!s;)n(t,i[a][c])&&(s=!0),c++;s||(u=!0)}return u}},4768:r=>{r.exports.geojsonType=function(r,e,t){if(!e||!t)throw new Error("type and name required");if(!r||r.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.type)},r.exports.collectionOf=function(r,e,t){if(!t)throw new Error(".collectionOf() requires a name");if(!r||"FeatureCollection"!==r.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var o=0;o<r.features.length;o++){var n=r.features[o];if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+n.geometry.type)}},r.exports.featureOf=function(r,e,t){if(!t)throw new Error(".featureOf() requires a name");if(!r||"Feature"!==r.type||!r.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!r.geometry||r.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.geometry.type)},r.exports.getCoord=function(r){if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])return r;if(r){if("Feature"===r.type&&r.geometry&&"Point"===r.geometry.type&&Array.isArray(r.geometry.coordinates))return r.geometry.coordinates;if("Point"===r.type&&Array.isArray(r.coordinates))return r.coordinates}throw new Error("A coordinate, feature, or point geometry is required")}},60130:(r,e,t)=>{var o=t(3465).featureCollection,n=t(7),i=t(60720),a=t(78576),u=t(22543);function s(r,e,t,o,n,i){if(Math.sqrt((n-t)*(n-t)+(i-o)*(i-o))===Math.sqrt((r-t)*(r-t)+(e-o)*(e-o))+Math.sqrt((n-r)*(n-r)+(i-e)*(i-e)))return!0}r.exports=function(r){"FeatureCollection"!==r.type&&("Feature"!==r.type&&(r={type:"Feature",geometry:r,properties:{}}),r=o([r]));for(var e=n(r),t=!1,c=0;!t&&c<r.features.length;){var p,f=r.features[c].geometry,l=!1;if("Point"===f.type)e.geometry.coordinates[0]===f.coordinates[0]&&e.geometry.coordinates[1]===f.coordinates[1]&&(t=!0);else if("MultiPoint"===f.type){var v=!1;for(p=0;!v&&p<f.coordinates.length;)e.geometry.coordinates[0]===f.coordinates[p][0]&&e.geometry.coordinates[1]===f.coordinates[p][1]&&(t=!0,v=!0),p++}else if("LineString"===f.type)for(p=0;!l&&p<f.coordinates.length-1;)s(e.geometry.coordinates[0],e.geometry.coordinates[1],f.coordinates[p][0],f.coordinates[p][1],f.coordinates[p+1][0],f.coordinates[p+1][1])&&(l=!0,t=!0),p++;else if("MultiLineString"===f.type)for(var g=0;g<f.coordinates.length;){l=!1,p=0;for(var y=f.coordinates[g];!l&&p<y.length-1;)s(e.geometry.coordinates[0],e.geometry.coordinates[1],y[p][0],y[p][1],y[p+1][0],y[p+1][1])&&(l=!0,t=!0),p++;g++}else"Polygon"!==f.type&&"MultiPolygon"!==f.type||a(e,{type:"Feature",geometry:f,properties:{}})&&(t=!0);c++}if(t)return e;var d,h=o([]);for(c=0;c<r.features.length;c++)h.features=h.features.concat(u(r.features[c]).features);var m=1/0;for(c=0;c<h.features.length;c++){var w=i(e,h.features[c],"miles");w<m&&(m=w,d=h.features[c])}return d}}}]);