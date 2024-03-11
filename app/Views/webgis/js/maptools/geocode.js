import map from "../map";
import Geocoder from 'ol-geocoder';

const geocoder = new Geocoder("nominatim", {
    provider: "photon",
    lang: "pt-BR", //en-US, fr-FR
    placeholder: "Search location ...",
    targetType: "text-input",
    limit: 5,
    keepOpen: true,
});
map.addControl(geocoder);

geocoder.getLayer().setVisible(false);

geocoder.on("addresschosen", (evt) => {
    const coord = evt.coordinate;

    map.getView().animate({
        center: coord,
        duration: 1000,
        zoom: Math.max(map.getView().getZoom(), 16),
    });
});

// const geocoderIcon = document.querySelector('.ol-geocoder .gcd-txt-glass:after');
// geocoderIcon.style.content = 'none';