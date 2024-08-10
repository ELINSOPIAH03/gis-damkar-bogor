import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';
import View from 'ol/View.js';
import { map } from 'jquery';

const scorKotBgr = new TileLayer({
    source: new TileWMS({
        url: 'http://localhost:9000/geoserver/pemetaan/wms',
        params: {
            'LAYERS': 'pemetaan:adm_kot_bogor_scoring', // Nama lapisan
            'TILED': true,
            'FORMAT': 'image/png', // Format gambar
        },
        serverType: 'geoserver',
        transition: 0,
    }),
});

scorKotBgr.setZIndex(999999);

// map.addLayer(layers);

export default scorKotBgr;
