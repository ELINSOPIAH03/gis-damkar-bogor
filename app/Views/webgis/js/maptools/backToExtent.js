import map from "../map";
import { fromLonLat } from "ol/proj";
import $ from "jquery";

$("#back-to-extent").on("click", function () {
  map.getView().animate({
    center: fromLonLat([106.71667, -6.58333]),
    zoom: 10,
    duration: 300,
  });
});
