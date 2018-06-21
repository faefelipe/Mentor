/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';

document.body.appendChild(image);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var sum = function sum(a, b) {
  return a + b;
};

module.exports = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'file-loader'\n    at Function.Module._resolveFilename (module.js:547:15)\n    at Function.Module._load (module.js:474:25)\n    at Module.require (module.js:596:17)\n    at require (internal/module.js:11:18)\n    at Object.loader (/Users/felipe/Documents/Projects/Front-end/Learning-Webpack/node_modules/url-loader/dist/index.js:59:20)");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);

console.log(total);

/***/ }
/******/ ]);