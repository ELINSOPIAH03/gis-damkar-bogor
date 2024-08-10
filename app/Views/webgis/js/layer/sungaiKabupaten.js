import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';

const sungaiKabupaten = new TileLayer({
    source: new TileWMS({
        url: 'http://localhost:9000/geoserver/pemetaan/wms',
        params: {
            'LAYERS': 'pemetaan:sungai_ar_kabbogor', // Nama lapisan
            'TILED': true,
            'FORMAT': 'image/png', // Format gambar
        },
        serverType: 'geoserver',
        transition: 0,
    }),
});

sungaiKabupaten.setZIndex(999999);

// map.addLayer(layers);

export default sungaiKabupaten;
