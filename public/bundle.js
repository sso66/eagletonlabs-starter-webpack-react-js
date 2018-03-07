/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/app.js":
/*!***********************!*\
  !*** ./public/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// app.js\nconsole.info('Mounting app.js...');\ndocument.write(\"welcome to my app<br />\");\n\n__webpack_require__(/*! ./views/logger */ \"./public/views/logger.js\");\n__webpack_require__(/*! ./views/logger.es6 */ \"./public/views/logger.es6\");\n//require('./views/hello');\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC5qcz9iNDVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC5qc1xuY29uc29sZS5pbmZvKCdNb3VudGluZyBhcHAuanMuLi4nKTtcbmRvY3VtZW50LndyaXRlKFwid2VsY29tZSB0byBteSBhcHA8YnIgLz5cIik7XG5cbnJlcXVpcmUoJy4vdmlld3MvbG9nZ2VyJyk7XG5yZXF1aXJlKCcuL3ZpZXdzL2xvZ2dlci5lczYnKTtcbi8vcmVxdWlyZSgnLi92aWV3cy9oZWxsbycpO1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/app.js\n");

/***/ }),

/***/ "./public/views/content.js":
/*!*********************************!*\
  !*** ./public/views/content.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// content.js\nmodule.exports = \"It works from content.js.\";\n// eof//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvdmlld3MvY29udGVudC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy92aWV3cy9jb250ZW50LmpzPzc2YmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29udGVudC5qc1xubW9kdWxlLmV4cG9ydHMgPSBcIkl0IHdvcmtzIGZyb20gY29udGVudC5qcy5cIjtcbi8vIGVvZiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/views/content.js\n");

/***/ }),

/***/ "./public/views/logger.es6":
/*!*********************************!*\
  !*** ./public/views/logger.es6 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// logger.es6\nconsole.info('Mounting logger.es6...');\n\n'use strict';\n\nconst FIRST_NAME = 'John';\nconst LAST_NAME = 'Doe';\n\nlet checkName = (firstName, lastName) => {\n  if (firstName !== FIRST_NAME || lastName !== LAST_NAME) {\n    console.log(firstName + ' ' + lastName + ' : You\\'ve NO PERMISSION');\n  } else {\n       console.log(firstName + ' ' + lastName + ' : You\\'re AUTHORIZED');\n  }\n}\n\ncheckName('Jane', 'Doe');\ncheckName('John', 'Doe');\n// eof\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvdmlld3MvbG9nZ2VyLmVzNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy92aWV3cy9sb2dnZXIuZXM2P2MxYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9nZ2VyLmVzNlxuY29uc29sZS5pbmZvKCdNb3VudGluZyBsb2dnZXIuZXM2Li4uJyk7XG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgRklSU1RfTkFNRSA9ICdKb2huJztcbmNvbnN0IExBU1RfTkFNRSA9ICdEb2UnO1xuXG5sZXQgY2hlY2tOYW1lID0gKGZpcnN0TmFtZSwgbGFzdE5hbWUpID0+IHtcbiAgaWYgKGZpcnN0TmFtZSAhPT0gRklSU1RfTkFNRSB8fCBsYXN0TmFtZSAhPT0gTEFTVF9OQU1FKSB7XG4gICAgY29uc29sZS5sb2coZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWUgKyAnIDogWW91XFwndmUgTk8gUEVSTUlTU0lPTicpO1xuICB9IGVsc2Uge1xuICAgICAgIGNvbnNvbGUubG9nKGZpcnN0TmFtZSArICcgJyArIGxhc3ROYW1lICsgJyA6IFlvdVxcJ3JlIEFVVEhPUklaRUQnKTtcbiAgfVxufVxuXG5jaGVja05hbWUoJ0phbmUnLCAnRG9lJyk7XG5jaGVja05hbWUoJ0pvaG4nLCAnRG9lJyk7XG4vLyBlb2ZcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/views/logger.es6\n");

/***/ }),

/***/ "./public/views/logger.js":
/*!********************************!*\
  !*** ./public/views/logger.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// logger.js\nconsole.info('Mounting logger.js...');\ndocument.write(__webpack_require__(/*! ./content.js */ \"./public/views/content.js\")+ \" mounted in App component via Node module.\");\n// eof\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvdmlld3MvbG9nZ2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL3ZpZXdzL2xvZ2dlci5qcz80MWJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxvZ2dlci5qc1xuY29uc29sZS5pbmZvKCdNb3VudGluZyBsb2dnZXIuanMuLi4nKTtcbmRvY3VtZW50LndyaXRlKHJlcXVpcmUoXCIuL2NvbnRlbnQuanNcIikrIFwiIG1vdW50ZWQgaW4gQXBwIGNvbXBvbmVudCB2aWEgTm9kZSBtb2R1bGUuXCIpO1xuLy8gZW9mXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/views/logger.js\n");

/***/ })

/******/ });