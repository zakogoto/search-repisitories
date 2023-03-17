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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/createList.js":
/*!******************************!*\
  !*** ./src/js/createList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createList(data) {
  let container = document.querySelector('.result__list');
  data.forEach(_ref => {
    let {
      owner,
      name,
      html_url,
      description
    } = _ref;
    const element = document.createElement('li');
    element.classList.add('result__item');
    let descriptionRep;
    if (!description) {
      descriptionRep = 'Нет описания';
    } else if (description.length > 50) {
      descriptionRep = description.slice(0, 50) + '...';
    } else {
      descriptionRep = description;
    }
    element.innerHTML = `
        <div class="result__item-img">
            <a href=${owner.html_url} target="_blank">
                <img src=${owner.avatar_url} alt=${owner.login}>
            </a>
        </div>
        <div class="result__item-about">
            <div class="result__item-name">
                <a href=${html_url} target="_blank">${name}</a>
            </div>
            <p class="result__item-descr">${descriptionRep}</p>
        </div>
        `;
    container.append(element);
    document.querySelector('.result__title').textContent = 'Вот что мне удалось найти:';
  });
}
/* harmony default export */ __webpack_exports__["default"] = (createList);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _startSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startSearch */ "./src/js/startSearch.js");



window.addEventListener('DOMContentLoaded', () => {
  Object(_startSearch__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getResource = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }
  return await res.json();
};
/* harmony default export */ __webpack_exports__["default"] = (getResource);

/***/ }),

/***/ "./src/js/showErrorMessage.js":
/*!************************************!*\
  !*** ./src/js/showErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showErrorMessage(response) {
  let title = document.querySelector('.result__title');
  switch (response) {
    case 'empty':
      title.textContent = 'По вашим результатам ничего не найдено. =((\n Попробуйте другой запрос';
      break;
    case 'emptyRequest':
      title.textContent = 'Поле поиска пустое';
      break;
    case 'error':
      title.textContent = 'Что-то пошло не так';
      break;
  }
  setTimeout(() => title.textContent = 'Давай найдем какие-нибудь репозитории', 3000);
}
/* harmony default export */ __webpack_exports__["default"] = (showErrorMessage);

/***/ }),

/***/ "./src/js/startSearch.js":
/*!*******************************!*\
  !*** ./src/js/startSearch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services */ "./src/js/services/services.js");
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createList */ "./src/js/createList.js");
/* harmony import */ var _showErrorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showErrorMessage */ "./src/js/showErrorMessage.js");



function startSearch() {
  let form = document.querySelector('#searchForm'),
    container = document.querySelector('.result__list');
  form.addEventListener('submit', e => {
    e.preventDefault();
    container.innerHTML = '';
    let url = e.target.search.value;
    if (url === '') {
      Object(_showErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"])('emptyRequest');
      return;
    }
    Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["default"])(`https://api.github.com/search/repositories?q=${url} in:name`).then(result => {
      let data = result.items.slice(0, 10);
      if (data.length !== 0) {
        Object(_createList__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
        form.reset();
      } else {
        Object(_showErrorMessage__WEBPACK_IMPORTED_MODULE_2__["default"])('empty');
        form.reset();
      }
    });
  });
  function search() {}
}
/* harmony default export */ __webpack_exports__["default"] = (startSearch);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map