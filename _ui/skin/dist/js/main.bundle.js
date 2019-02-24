webpackJsonp([1],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_modules_es6_regexp_replace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_string_starts_with__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_string_starts_with___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_modules_es6_string_starts_with__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es7_symbol_async_iterator__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_modules_es7_symbol_async_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_modules_es7_symbol_async_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_symbol__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_modules_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_web_dom_iterable__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_modules_web_dom_iterable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_modules_web_dom_iterable__);






window.onload = function () {
  search();
  subMenu();
};

var search = function search() {
  var searchIcon = document.getElementsByClassName('search__icon')[0];
  var searchForm = document.getElementsByClassName('search__form')[0];
  searchIcon.addEventListener("click", function () {
    searchForm.classList.toggle('show');
  });
};

var subMenu = function subMenu() {
  var menuItems = document.getElementsByClassName('menu__item');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var menu = _step.value;
      var subMenuClass = void 0;
      menu.addEventListener("mouseover", function (e) {
        e.preventDefault;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = menu.classList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var cl = _step2.value;

            if (cl.startsWith('menu__item--')) {
              menu.classList.add('active');

              var _subMenuClass = cl.replace('menu__item', 'sub-menu');

              showSubMenu(_subMenuClass);
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }); // window.addEventListener("click", (e) => {
      //     e.preventDefault;
      //         if (e.currentTarget !== 'sub-menus') {
      //             let menu = document.querySelector('.sub-menu.show');
      //             menu.remove
      //         }
      // });
    };

    for (var _iterator = menuItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var showSubMenu = function showSubMenu(className) {
  var subMenuItem = document.getElementsByClassName(className)[0];
  var subMenuItems = document.getElementsByClassName('sub-menu');
  var subMenus = document.getElementsByClassName('sub-menus')[0];
  subMenus.classList.remove('active');
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = subMenuItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var item = _step3.value;
      item.classList.remove('show');
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  subMenuItem.classList.add('show');
  subMenus.classList.add('active');
};

/***/ })
],[0]);
//# sourceMappingURL=main.bundle.js.map