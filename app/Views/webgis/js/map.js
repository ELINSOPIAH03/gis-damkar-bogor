import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Overlay from "ol/Overlay";
import TileWMS from 'ol/source/TileWMS';
// import scorKabBgr from "./layer/kabBogorScoring";
// import scorKotBgr from "./layer/kotBogorScoring";
// import admKabBgr from "./layer/admKabBgr";
// import admKotBgr from "./layer/admKotBogor";
// import poiDamkar from "./layer/poiDamkar";
import sungaiKabupaten from "./layer/sungaiKabupaten";
import sungaiKota from "./layer/sungaiKota";
import { ScaleLine } from 'ol/control';
import $ from "jquery";

const container = document.getElementById("popup-2");
const conten = document.getElementById("popup-content");
const closer = document.getElementById("popup-closer");

export const overlay = new Overlay({
    element: container,
    autoPan: {
        animation: {
            duration: 250,
        },
    },
});



const wmsLayers = [
    // { layer: poiDamkar, checkboxId: "customPoiDamkar" },
    // { layer: scorKabBgr, checkboxId: "customCheckBoxScoreKabBgr" },
    // { layer: scorKotBgr, checkboxId: "customCheckBoxScoreKotBgr" },
    // { layer: admKabBgr, checkboxId: "customCheckBoxAdmKabBgr" },
    // { layer: admKotBgr, checkboxId: "customCheckBoxAdmKotBgr" },
    // { layer: sungaiKabupaten, checkboxId: "customCheckBoxsungaiKabupaten" },
    // { layer: sungaiKota, checkboxId: "customCheckBoxsungaiKota" },
    // Tambahkan informasi untuk lapisan WMS lainnya di sini
];

const osmLayer = new TileLayer({
    source: new OSM(),
});

const view = new View({
    center: fromLonLat([106.71667, -6.58333]),
    zoom: 10.5,
});


const map = new Map({
    overlays: [overlay],
    target: "map",
    layers: [osmLayer],
    view: view,
});

function toggleWMSLayer(layer, checked) {
    if (checked) {
        map.addLayer(layer);
    } else {
        map.removeLayer(layer);
    }
}

map.on('singleclick', function (evt) {
    document.getElementById('info').innerHTML = '';
    const viewResolution = view.getResolution();
    
    // Loop melalui setiap lapisan WMS untuk mendapatkan URL informasi fitur
    wmsLayers.forEach(({ layer }) => {
        if (map.getLayers().getArray().includes(layer)) {
            const url = layer.getSource().getFeatureInfoUrl(
                evt.coordinate,
                viewResolution,
                'EPSG:3857',
                { 'INFO_FORMAT': 'text/html' }
            );
            if (url) {
                fetch(url)
                    .then((response) => response.text())
                    .then((html) => {
                        // Tambahkan informasi fitur ke dalam elemen popup
                        document.getElementById('info').innerHTML += html;
                    });
            }
        }
    }); 
});

wmsLayers.forEach(({ layer, checkboxId }) => {
    const checkbox = document.getElementById(checkboxId);
    checkbox.addEventListener("change", function () {
        toggleWMSLayer(layer, this.checked);
    });
});
map.updateSize();
export default map;