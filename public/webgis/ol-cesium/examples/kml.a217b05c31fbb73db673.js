(()=>{"use strict";var e,r={9112:(e,r,a)=>{var t=a(9639),n=a(7811),o=a(9800),s=a(7761),i=a(9529),c=a(6424),l=a(5761),u=a(261);Cesium.Ion.defaultAccessToken=u.x;const d=new l.Z({layers:[new c.Z({source:new i.Z})],controls:(0,s.c)({attributionOptions:{collapsible:!1}}),target:"map",view:new o.ZP({center:(0,n.vs)([25,20],"EPSG:4326","EPSG:3857"),zoom:3})}),v=new t.Z({map:d}),p=v.getCesiumScene();p.terrainProvider=Cesium.createWorldTerrain(),v.getDataSources().add(Cesium.KmlDataSource.load("https://api3.geo.admin.ch/ogcproxy?url=https%3A%2F%2Fdav0.bgdi.admin.ch%2Fbazl_web%2FActive_Obstacles.kmz",{camera:p.camera,canvas:p.canvas})),document.getElementById("enable").addEventListener("click",(()=>v.setEnabled(!v.getEnabled())))}},a={};function t(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return r[e].call(o.exports,o,o.exports,t),o.exports}t.m=r,e=[],t.O=(r,a,n,o)=>{if(!a){var s=1/0;for(u=0;u<e.length;u++){for(var[a,n,o]=e[u],i=!0,c=0;c<a.length;c++)(!1&o||s>=o)&&Object.keys(t.O).every((e=>t.O[e](a[c])))?a.splice(c--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,n,o]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.j=797,(()=>{var e={797:0};t.O.j=r=>0===e[r];var r=(r,a)=>{var n,o,[s,i,c]=a,l=0;if(s.some((r=>0!==e[r]))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(c)var u=c(t)}for(r&&r(a);l<s.length;l++)o=s[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(u)},a=self.webpackChunkol_cesium=self.webpackChunkol_cesium||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})();var n=t.O(void 0,[351],(()=>t(9112)));n=t.O(n)})();
//# sourceMappingURL=kml.a217b05c31fbb73db673.js.map