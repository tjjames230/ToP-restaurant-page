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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/init.js */ \"./src/modules/init.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about.js */ \"./src/modules/about.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();\r\n\r\n// add event listeners below for clicking on tabs and loading modules\r\n// loadAbout();\r\n// loadContact();\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAbout: () => (/* binding */ loadAbout)\n/* harmony export */ });\n/* harmony import */ var _assets_images_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/food.jpg */ \"./src/assets/images/food.jpg\");\n\r\n\r\n\r\nconst main = document.querySelector(\"#main\");\r\n\r\nfunction loadAbout() {\r\n  main.innerHTML = \"\";\r\n  aboutContent();\r\n}\r\n\r\nfunction aboutContent() {\r\n  // create & style img\r\n  (function () {})();\r\n\r\n  // create & style text\r\n  (function () {})();\r\n}\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\n\r\n\r\nconst main = document.querySelector(\"#main\");\r\n\r\nfunction loadContact() {\r\n  console.log(\"hi from contact\");\r\n}\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _assets_images_food_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/food.jpg */ \"./src/assets/images/food.jpg\");\n\r\n\r\n\r\nconst main = document.querySelector(\"#main\");\r\n\r\nfunction loadHome() {\r\n  main.innerHTML = \"\";\r\n  homeContent();\r\n}\r\n\r\nfunction homeContent() {\r\n  // creating/styling h1\r\n  (function () {\r\n    const headerOne = document.createElement(\"h1\");\r\n    headerOne.textContent = \"Welcome to OUR RESTAURANT!\";\r\n    headerOne.style.margin = \"0\";\r\n    main.appendChild(headerOne);\r\n  })();\r\n\r\n  //creating/styling image\r\n  (function () {\r\n    const img = document.createElement(\"img\");\r\n    img.src = _assets_images_food_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    img.style.width = \"100%\";\r\n    img.style.maxWidth = \"800px\";\r\n    main.appendChild(img);\r\n  })();\r\n\r\n  //creating/styling paragraph text\r\n  (function () {\r\n    const text = document.createElement(\"p\");\r\n    text.textContent =\r\n      \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima adipisci impedit illum, voluptatem tempora nisi placeat alias a nihil quod beatae voluptatibus repudiandae odio temporibus. Totam odit laboriosam officiis hic quidem quis doloremque pariatur esse fugiat delectus nostrum voluptatibus natus aut, eos excepturi maxime. Quam quas fuga maxime tempora!\";\r\n    text.style.maxWidth = \"800px\";\r\n    text.style.lineHeight = \"2\";\r\n    main.appendChild(text);\r\n  })();\r\n}\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/modules/home.js\");\n\r\n\r\n\r\nconst main = document.querySelector(\"#main\");\r\nconst aside = document.querySelector(\"#aside\");\r\n\r\nfunction init() {\r\n  // styling body\r\n  styleBody();\r\n\r\n  // function to handle content creation and styling for aside\r\n  createAside();\r\n\r\n  // function to handle content creation and styling for main (home)\r\n  createMain();\r\n\r\n  // function from home.js to load home content\r\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n}\r\n\r\nfunction styleBody() {\r\n  const body = document.querySelector(\"body\");\r\n  body.style.display = \"flex\";\r\n  body.style.margin = \"0\";\r\n  body.style.padding = \"0\";\r\n  body.style.fontFamily = \"Arial\";\r\n}\r\n\r\nfunction createAside() {\r\n  //IIFE for styling aside\r\n  (function () {\r\n    aside.style.display = \"flex\";\r\n    aside.style.flexDirection = \"column\";\r\n    aside.style.gap = \"15px\";\r\n    aside.style.alignItems = \"center\";\r\n    aside.style.width = \"20%\";\r\n    aside.style.height = \"100vh\";\r\n    aside.style.minWidth = \"275px\";\r\n    aside.style.padding = \"50px\";\r\n  })();\r\n\r\n  // IIFE for adding content\r\n  (function () {\r\n    function createBtn(text) {\r\n      const btn = document.createElement(\"button\");\r\n      btn.textContent = text;\r\n      btnStyle(btn);\r\n      aside.appendChild(btn);\r\n    }\r\n\r\n    createBtn(\"Home\");\r\n    createBtn(\"About\");\r\n    createBtn(\"Contact\");\r\n  })();\r\n\r\n  // IIFE for adding styling, which is called during creation\r\n  function btnStyle(btn) {\r\n    btn.style.padding = \"15px 35px\";\r\n    btn.style.border = \"none\";\r\n    btn.style.width = \"100%\";\r\n  }\r\n}\r\n\r\nfunction createMain() {\r\n  main.style.backgroundColor = \"#cccccc\";\r\n  main.style.height = \"100vh\";\r\n  main.style.width = \"80%\";\r\n  main.style.padding = \"50px\";\r\n  main.style.display = \"flex\";\r\n  main.style.flexDirection = \"column\";\r\n  main.style.gap = \"15px\";\r\n  main.style.alignItems = \"center\";\r\n}\r\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/modules/init.js?");

/***/ }),

/***/ "./src/assets/images/food.jpg":
/*!************************************!*\
  !*** ./src/assets/images/food.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"25cc36d4375204452d88.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/assets/images/food.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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