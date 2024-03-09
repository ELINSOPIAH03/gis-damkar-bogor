"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgis_damkar_bogor"] = self["webpackChunkgis_damkar_bogor"] || []).push([["zoom"],{

/***/ "./app/Views/webgis/js/maptools/zoominout.js":
/*!***************************************************!*\
  !*** ./app/Views/webgis/js/maptools/zoominout.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../map */ \"./app/Views/webgis/js/map.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// Zoom in and Out\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#zoomin\").on(\"click\", function () {\n  _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().animate({\n    zoom: _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().getZoom() + 1,\n    duration: 300\n  });\n});\njquery__WEBPACK_IMPORTED_MODULE_1___default()(\"#zoomout\").on(\"click\", function () {\n  _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().animate({\n    zoom: _map__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getView().getZoom() - 1,\n    duration: 300\n  });\n});\n// end Zoom\n\n//# sourceURL=webpack://gis-damkar-bogor/./app/Views/webgis/js/maptools/zoominout.js?");

/***/ })

}]);