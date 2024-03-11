import "./map";
// import "./maptools"; 

import(/* webpackChunkName: "baseLayers" */ "./baseLayers");
import(/* webpackChunkName: "baseLayerSwitcher" */ "./baseLayerSwitcher");

import(/* webpackChunkName: "zoom" */ "./maptools/zoominout");
import(/* webpackChunkName: "infodetail" */ "./maptools/infodetail");
import(/* webpackChunkName: "backToExtent" */ "./maptools/backToExtent");
import(/* webpackChunkName: "geoLocation" */ "./maptools/geoLocation");
import(/* webpackChunkName: "measure" */ "./maptools/measure");
import(/* webpackChunkName: "graticule" */ "./maptools/graticule");
import(/* webpackChunkName: "3Dmap" */ "./maptools/3Dmap");
import(/* webpackChunkName: "baseLayers" */ "./maptools/geocode");

// import(/* webpackChunkName: "streetview" */ "./maptools/streetview");