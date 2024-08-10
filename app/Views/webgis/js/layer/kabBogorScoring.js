import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';

// import sldUrl from '../../style/scoring_kabbogor.sld';
// const sldUrl = require('../../style/scoring_kabbogor.sld');

// console.log(sldUrl);
const scorKabBgr = new TileLayer({
    source: new TileWMS({
        url: 'http://localhost:9000/geoserver/pemetaan/wms',
        params: {
            'LAYERS': 'pemetaan:adm_kab_bogor_scoring', // Nama lapisan
            'TILED': true,
            'FORMAT': 'image/png', // Format gambar
        },
        serverType: 'geoserver',
        transition: 0,
    }),
});

// scorKabBgr.mergeNewParams({SLD :'http://localhost:9000/geoserver/rest/styles/kab_bogor_scor.sld' }); 

scorKabBgr.setZIndex(999999);

export default scorKabBgr;
