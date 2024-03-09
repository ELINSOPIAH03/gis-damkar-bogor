"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgis_damkar_bogor"] = self["webpackChunkgis_damkar_bogor"] || []).push([["graticule"],{

/***/ "./app/Views/webgis/js/maptools/graticule.js":
/*!***************************************************!*\
  !*** ./app/Views/webgis/js/maptools/graticule.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ol_layer_Graticule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Graticule */ \"./node_modules/ol/layer/Graticule.js\");\n/* harmony import */ var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/style/Stroke */ \"./node_modules/ol/style/Stroke.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map */ \"./app/Views/webgis/js/map.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n// graticule\nvar graticule = new ol_layer_Graticule__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  strokeStyle: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    color: \"rgba(225,225,255,0.2)\",\n    width: 2\n  }),\n  targetSize: 70,\n  showLabels: true,\n  wrapX: true\n});\nvar showGraticule = false;\ngraticule.setMap(null);\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#graticule\").on(\"click\", function () {\n  if (!showGraticule) {\n    showGraticule = true;\n    graticule.setMap(_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  } else {\n    showGraticule = false;\n    graticule.setMap(null);\n  }\n});\n// end graticule\n\n//# sourceURL=webpack://gis-damkar-bogor/./app/Views/webgis/js/maptools/graticule.js?");

/***/ })

}]);