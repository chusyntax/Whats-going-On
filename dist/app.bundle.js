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

/***/ "./src/books.js":
/*!**********************!*\
  !*** ./src/books.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runBooksSection\": () => (/* binding */ runBooksSection)\n/* harmony export */ });\nfunction runBooksSection (){\r\n    \r\n    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')\r\n.then(res => res.json())\r\n.then(data =>{\r\n    console.log(data);\r\n\r\n    //First book\r\n    var topRatedBook = document.getElementById('top-rated-book');\r\nvar innerTopBook =`\r\n<div class='row'>\r\n\r\n<div class=\"col s12 l6\">\r\n<p><img class=\"center-align responsive-img\" src='${data.results.books[0].book_image}'></p>\r\n</div>\r\n\r\n<div class=\"col s12 l6 right-align\">\r\n<h2>${data.results.books[0].title}</h2>\r\n<h4>Author: ${data.results.books[0].author}</h4>\r\n<h4>Synopsis:</h4>\r\n<p class='flow-text'>${data.results.books[0].description}</p>\r\n\r\n<span class=\"new badge purple\" data-badge-caption=\"${data.results.books[0].rank_last_week}\">Last Week: </span>\r\n<span class=\"new badge purple\" data-badge-caption=\"${data.results.books[0].weeks_on_list}\">Weeks On List: </span>\r\n<span class=\"new badge purple\" data-badge-caption=\"${data.results.books[0].publisher}\">Publisher: </span>\r\n\r\n\r\n</div>\r\n</div>\r\n`\r\ntopRatedBook.innerHTML += innerTopBook;\r\n//rest of the books\r\n\r\nvar otherBooks = document.getElementById('other-books');\r\n\r\nvar innerOtherBooks =\r\n//First row of books\r\n`\r\n\r\n<div class='row'>\r\n<div class=\"col s6 l3\">\r\n<div class=\"card\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator responsive-img\"  src='${data.results.books[1].book_image}'>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n      <p><a href=\"#\">This is a link</a></p>\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s6 l3\">\r\n<div class=\"card\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator responsive-img\"  src='${data.results.books[2].book_image}'>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n      <p><a href=\"#\">This is a link</a></p>\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s6 l3\">\r\n<div class=\"card\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator\"  src='${data.results.books[3].book_image}'>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n      <p><a href=\"#\">This is a link</a></p>\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s6 l3\">\r\n  <div class=\"card\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img class=\"activator\" src='${data.results.books[4].book_image}'>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n        <p><a href=\"#\">This is a link</a></p>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n        <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n      </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<div class='row'>\r\n<div class=\"col s6 l3\">\r\n<div class=\"card\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator responsive-img\"  src='${data.results.books[5].book_image}'>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n      <p><a href=\"#\">This is a link</a></p>\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s6 l3\">\r\n<div class=\"card\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator responsive-img\"  src='${data.results.books[6].book_image}'>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n      <p><a href=\"#\">This is a link</a></p>\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s6 l3\">\r\n<div class=\"card\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator\"  src='${data.results.books[7].book_image}'>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n      <p><a href=\"#\">This is a link</a></p>\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s6 l3\">\r\n  <div class=\"card\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img class=\"activator\" src='${data.results.books[8].book_image}'>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n        <p><a href=\"#\">This is a link</a></p>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n        <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n      </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<div class='row'>\r\n<div class=\"col s6 l3\">\r\n<div class=\"card\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator responsive-img\"  src='${data.results.books[9].book_image}'>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n      <p><a href=\"#\">This is a link</a></p>\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s6 l3\">\r\n<div class=\"card\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator responsive-img\"  src='${data.results.books[10].book_image}'>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n      <p><a href=\"#\">This is a link</a></p>\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s6 l3\">\r\n<div class=\"card\">\r\n    <div class=\"card-image waves-effect waves-block waves-light\">\r\n      <img class=\"activator\"  src='${data.results.books[11].book_image}'>\r\n    </div>\r\n    <div class=\"card-content\">\r\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n      <p><a href=\"#\">This is a link</a></p>\r\n    </div>\r\n    <div class=\"card-reveal\">\r\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n    </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col s6 l3\">\r\n  <div class=\"card\">\r\n      <div class=\"card-image waves-effect waves-block waves-light\">\r\n        <img class=\"activator\" src='${data.results.books[12].book_image}'>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\r\n        <p><a href=\"#\">This is a link</a></p>\r\n      </div>\r\n      <div class=\"card-reveal\">\r\n        <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\r\n        <p>Here is some more information about this product that is only revealed once clicked on.</p>\r\n      </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n`\r\n\r\n\r\notherBooks.innerHTML += innerOtherBooks;\r\n\r\n\r\n});\r\n};\r\n\n\n//# sourceURL=webpack://svgsapis/./src/books.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./books */ \"./src/books.js\");\n/* harmony import */ var _stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stories */ \"./src/stories.js\");\n\r\n\r\n(0,_books__WEBPACK_IMPORTED_MODULE_0__.runBooksSection)();\r\n(0,_stories__WEBPACK_IMPORTED_MODULE_1__.runStoriesSection)();\r\n\n\n//# sourceURL=webpack://svgsapis/./src/index.js?");

/***/ }),

/***/ "./src/stories.js":
/*!************************!*\
  !*** ./src/stories.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runStoriesSection\": () => (/* binding */ runStoriesSection)\n/* harmony export */ });\nfunction runStoriesSection (){\r\n  fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=pi7mLJnxxrkmGObWp5KA3eD8ksQV6Tiy')\r\n.then(res => res.json())\r\n.then(data =>{\r\n\r\n//Top Story Section\r\n    var topStory = document.getElementById('top-story');\r\n    var innerTopStory = `\r\n    \r\n    <img class=\"right-align responsive-img\" src='${data.results[0].multimedia[0].url}'>\r\n    <small>~${data.results[0].multimedia[0].caption}</small>\r\n    <hr>\r\n    <h1>${data.results[0].title}</h1>\r\n    <br>\r\n    <p class='flow-text'>${data.results[0].abstract}</p>\r\n    <br>\r\n    <p>~${data.results[0].byline}</p>\r\n    <span><a href='${data.results[0].url}' target=\"_blank\"><em>Read More >>> </em></a></span>\r\n    <hr>\r\n    \r\n    `\r\ntopStory.innerHTML += innerTopStory;\r\n\r\n\r\n//Other Stories Section\r\n   var otherStories = document.getElementById('other-top-stories');\r\n   var innerOtherStories = `\r\n   \r\n   <ul class=\"collection with-header\">\r\n   <li class=\"collection-header\"><h3>Other Top Stories</h3></li>\r\n   <li class=\"collection-item\">\r\n   <img class=\"right-align responsive-img\" src='${data.results[1].multimedia[0].url}'>\r\n   ${data.results[1].title}\r\n   <small>~${data.results[1].byline}</small>\r\n   <br>\r\n   <span><a href='${data.results[1].url}' target=\"_blank\"><em>Read More >>> </em></a></span>\r\n   </li>\r\n   <li class=\"collection-item\">\r\n   <img class=\"right-align responsive-img\" src='${data.results[2].multimedia[0].url}'>\r\n   ${data.results[2].title}\r\n   <small>~${data.results[2].byline}</small>\r\n   <br>\r\n   <span><a href='${data.results[2].url}' target=\"_blank\"><em>Read More >>> </em></a></span>\r\n   </li>\r\n   <li class=\"collection-item\">\r\n   <img class=\"right-align responsive-img\" src='${data.results[3].multimedia[0].url}'>\r\n   ${data.results[3].title}\r\n   <small>~${data.results[3].byline}</small>\r\n   <br>\r\n   <span><a href='${data.results[2].url}' target=\"_blank\"><em>Read More >>> </em></a></span>\r\n   </li>\r\n </ul>\r\n \r\n   `;\r\n\r\n   otherStories.innerHTML += innerOtherStories;\r\n});\r\n};\r\n\n\n//# sourceURL=webpack://svgsapis/./src/stories.js?");

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