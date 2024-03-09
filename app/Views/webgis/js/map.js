import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Overlay from "ol/Overlay";
import TileWMS from 'ol/source/TileWMS';
import scorKabBgr from "./layer/kabBogorScoring";
import scorKotBgr from "./layer/kotBogorScoring";
import admKabBgr from "./layer/admKabBgr";
import admKotBgr from "./layer/admKotBogor";
import poiDamkar from "./layer/poiDamkar";

const container = document.getElementById("popup-2");

export const overlay = new Overlay({
    element: container,
    autoPan: {
        animation: {
            duration: 250,
        },
    },
});



const wmsLayers = [
    { layer: poiDamkar, checkboxId: "customPoiDamkar" },
    { layer: scorKabBgr, checkboxId: "customCheckBoxScoreKabBgr" },
    { layer: scorKotBgr, checkboxId: "customCheckBoxScoreKotBgr" },
    { layer: admKabBgr, checkboxId: "customCheckBoxAdmKabBgr" },
    { layer: admKotBgr, checkboxId: "customCheckBoxAdmKotBgr" },
    // Tambahkan informasi untuk lapisan WMS lainnya di sini
];

// Fungsi untuk menambah atau menghapus lapisan WMS dari peta
function toggleWMSLayer(layer, checked) {
    if (checked) {
        map.addLayer(layer);
    } else {
        map.removeLayer(layer);
    }
}

wmsLayers.forEach(({ layer, checkboxId }) => {
    const checkbox = document.getElementById(checkboxId);
    checkbox.addEventListener("change", function () {
        toggleWMSLayer(layer, this.checked);
    });
});

const osmLayer = new TileLayer({
    source: new OSM(),
});

const map = new Map({
    overlays: [overlay],
    target: "map",
    layers: [osmLayer],
    view: new View({
        center: fromLonLat([106.71667, -6.58333]),
        zoom: 10.5,
    }),
});

export default map;