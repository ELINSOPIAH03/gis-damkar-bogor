import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';
import View from 'ol/View.js';
import { map } from 'jquery';

const admKabBgr = new TileLayer({
    source: new TileWMS({
        // url: 'http://localhost:9000/geoserver/pemetaan/wms',
        // params: {
        //     'LAYERS': 'pemetaan:adm_kab_bogor', // Nama lapisan
        //     'TILED': true,
        //     'FORMAT': 'image/png', // Format gambar
        // },
        serverType: 'geoserver',
        transition: 0,
    }),
});

admKabBgr.setZIndex(999999);

// map.addLayer(layers);

export default admKabBgr;
