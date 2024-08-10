
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// Membuat layer OSM
const osmLayer = new TileLayer({
    source: new OSM(),
});

// Membuat view
const view = new View({
    center: fromLonLat([106.71667, -6.58333]),
    zoom: 10.5,
});

// Membuat peta
const map = new Map({
    target: 'map',
    layers: [osmLayer],
    view: view,
});
