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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addContent.js */ \"./src/modules/addContent.js\");\n\r\n\r\n(0,_modules_addContent_js__WEBPACK_IMPORTED_MODULE_0__.addContent)();\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/addContent.js":
/*!***********************************!*\
  !*** ./src/modules/addContent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addContent: () => (/* binding */ addContent)\n/* harmony export */ });\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\n\r\nfunction addContent() {\r\n  const h1 = document.createElement(\"h1\");\r\n  const p = document.createElement(\"p\");\r\n  const img = document.createElement(\"img\");\r\n\r\n  h1.textContent = \"The most exceptional restaurant\";\r\n  p.textContent =\r\n    \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores libero autem enim provident, quae sit quasi dignissimos nihil harum aliquid cupiditate, architecto quibusdam? Voluptas quaerat quis vero magnam distinctio ipsum expedita nemo quibusdam deleniti, assumenda dolorem laudantium placeat impedit minima ab error fuga, dolor blanditiis rerum? Mollitia tenetur, non unde reprehenderit nam impedit iusto amet aliquam, exercitationem commodi cumque assumenda laudantium deserunt. Itaque saepe explicabo nam soluta animi quae optio.\";\r\n  img.src = \"https://placehold.co/600x400\";\r\n\r\n  content.appendChild(h1);\r\n  content.appendChild(img);\r\n  content.appendChild(p);\r\n}\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/addContent.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;