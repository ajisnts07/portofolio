/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/backOnTop.js":
/*!*****************************!*\
  !*** ./src/js/backOnTop.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ backOnTop)\n/* harmony export */ });\nfunction backOnTop() {\r\n  const backToTopButton = document.getElementById(\"backToTop\");\r\n\r\n  // Tampilkan tombol saat menggulir ke bawah\r\n  window.addEventListener(\"scroll\", () => {\r\n    if (window.scrollY > 300) {\r\n      backToTopButton.classList.remove(\"hidden\");\r\n      backToTopButton.classList.add(\"block\");\r\n    } else {\r\n      backToTopButton.classList.remove(\"block\");\r\n      backToTopButton.classList.add(\"hidden\");\r\n    }\r\n  });\r\n\r\n  // Scroll ke atas saat tombol diklik\r\n  backToTopButton.addEventListener(\"click\", () => {\r\n    window.scrollTo({\r\n      top: 0,\r\n      behavior: \"smooth\",\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/backOnTop.js?");

/***/ }),

/***/ "./src/js/generateTime.js":
/*!********************************!*\
  !*** ./src/js/generateTime.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateTime)\n/* harmony export */ });\nfunction generateTime() {\r\n  const now = new Date();\r\n  const hours = String(now.getHours()).padStart(2, \"0\");\r\n  const minutes = String(now.getMinutes()).padStart(2, \"0\");\r\n  const seconds = String(now.getSeconds()).padStart(2, \"0\");\r\n\r\n  const timeString = `${hours}:${minutes}:${seconds}`;\r\n\r\n  document.getElementById(\"time\").textContent = timeString || \"Null\";\r\n  document.getElementById(\"times\").textContent = timeString || \"Null\";\r\n}\r\n\r\nsetInterval(generateTime, 1000);\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/generateTime.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateTime */ \"./src/js/generateTime.js\");\n/* harmony import */ var _offCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offCanvas */ \"./src/js/offCanvas.js\");\n/* harmony import */ var _backOnTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backOnTop */ \"./src/js/backOnTop.js\");\n\r\n\r\n\r\n\r\n(0,_generateTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_offCanvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_backOnTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/index.js?");

/***/ }),

/***/ "./src/js/offCanvas.js":
/*!*****************************!*\
  !*** ./src/js/offCanvas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ offCanvas)\n/* harmony export */ });\nfunction offCanvas() {\r\n  document\r\n    .getElementById(\"openBtnCanvas\")\r\n    .addEventListener(\"click\", function () {\r\n      document.getElementById(\"offCanvas\").classList.remove(\"translate-x-full\");\r\n      document.getElementById(\"offCanvas\").classList.add(\"translate-x-0\");\r\n    });\r\n\r\n  document\r\n    .getElementById(\"closeBtnCanvas\")\r\n    .addEventListener(\"click\", function () {\r\n      document.getElementById(\"offCanvas\").classList.remove(\"translate-x-0\");\r\n      document.getElementById(\"offCanvas\").classList.add(\"translate-x-full\");\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://portfolio/./src/js/offCanvas.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;