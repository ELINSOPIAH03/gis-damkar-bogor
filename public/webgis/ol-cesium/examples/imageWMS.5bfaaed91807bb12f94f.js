(()=>{"use strict";var e,r={3028:(e,r,t)=>{var n=t(9639),o=t(9800),a=t(7761),s=t(4871),i=t(9529),l=t(6893),c=t(6424),u=t(5761),v=t(261);const p=new s.Z({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states"},ratio:1});Cesium.Ion.defaultAccessToken=v.x;const d=new u.Z({layers:[new c.Z({source:new i.Z}),new l.Z({extent:[-13884991,2870341,-7455066,6338219],source:p})],controls:(0,a.c)({attributionOptions:{collapsible:!1}}),target:"map",view:new o.ZP({center:[-10967567.978507737,4204193.972847062],zoom:3})}),m=new n.Z({map:d,time(){return Cesium.JulianDate.now()}});m.getCesiumScene().terrainProvider=Cesium.createWorldTerrain(),m.setEnabled(!0),document.getElementById("enable").addEventListener("click",(()=>m.setEnabled(!m.getEnabled())))}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return r[e].call(a.exports,a,a.exports,n),a.exports}n.m=r,e=[],n.O=(r,t,o,a)=>{if(!t){var s=1/0;for(u=0;u<e.length;u++){for(var[t,o,a]=e[u],i=!0,l=0;l<t.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(u--,1);var c=o();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,o,a]},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.j=166,(()=>{var e={166:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,[s,i,l]=t,c=0;if(s.some((r=>0!==e[r]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var u=l(n)}for(r&&r(t);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},t=self.webpackChunkol_cesium=self.webpackChunkol_cesium||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=n.O(void 0,[351],(()=>n(3028)));o=n.O(o)})();
//# sourceMappingURL=imageWMS.5bfaaed91807bb12f94f.js.map