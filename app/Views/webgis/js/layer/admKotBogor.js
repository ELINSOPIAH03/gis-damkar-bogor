import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';
import View from 'ol/View.js';
import { map } from 'jquery';

const admKotBgr = new TileLayer({
    source: new TileWMS({
        url: 'http://localhost:9000/geoserver/bogor/wms',
        params: {
            'LAYERS': 'bogor:adm_kot_bogor', // Nama lapisan
            'TILED': true,
            'FORMAT': 'image/png', // Format gambar
        },
        serverType: 'geoserver',
        transition: 0,
    }),
});

admKotBgr.setZIndex(999999);

// map.addLayer(layers);

export default admKotBgr;
