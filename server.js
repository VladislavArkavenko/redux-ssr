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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/App.js":
/*!***************************!*\
  !*** ./src/common/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/counter */ "./src/common/components/counter.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_counter__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/common/actions/index.js":
/*!*************************************!*\
  !*** ./src/common/actions/index.js ***!
  \*************************************/
/*! exports provided: increment, decrement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/common/constants/index.js");

var increment = function increment() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]
  };
};
var decrement = function decrement() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__["DECREMENT"]
  };
};

/***/ }),

/***/ "./src/common/components/counter.js":
/*!******************************************!*\
  !*** ./src/common/components/counter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/common/actions/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Counter =
/*#__PURE__*/
function (_Component) {
  _inherits(Counter, _Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "counter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Counter: ", this.props.counter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "increment",
        onClick: this.props.increment
      }, " + "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "decrement",
        onClick: this.props.decrement
      }, " - "));
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    increment: function increment() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["increment"])());
    },
    decrement: function decrement() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["decrement"])());
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    counter: state.counter
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Counter));

/***/ }),

/***/ "./src/common/constants/index.js":
/*!***************************************!*\
  !*** ./src/common/constants/index.js ***!
  \***************************************/
/*! exports provided: INCREMENT, DECREMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT", function() { return INCREMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT", function() { return DECREMENT; });
var INCREMENT = "INCREMENT";
var DECREMENT = "DECREMENT";

/***/ }),

/***/ "./src/common/reducers/counterReducer.js":
/*!***********************************************!*\
  !*** ./src/common/reducers/counterReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dataReducer; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/common/constants/index.js");

function dataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["INCREMENT"]:
      return ++state;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["DECREMENT"]:
      return --state;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/common/reducers/index.js":
/*!**************************************!*\
  !*** ./src/common/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counterReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterReducer */ "./src/common/reducers/counterReducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  counter: _counterReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/App.js */ "./src/common/App.js");
/* harmony import */ var _common_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/reducers */ "./src/common/reducers/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_8__);









var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var port = 3000;
app.use('/public', express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));
app.use(handleRender);

function handleRender(req, res) {
  var params = qs__WEBPACK_IMPORTED_MODULE_8___default.a.parse(req.query); //To be able to set initial state as http://localhost:3000/?counter=20

  var counter = parseInt(params.counter, 10) || 0;
  var preloadedState = {
    counter: counter
  };
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_5__["createStore"])(_common_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], preloadedState);
  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
  var finalState = store.getState();
  res.send(renderFullPage(markup, finalState));
}

function renderFullPage(markup, preloadedState) {
  return "\n        <!doctype html>\n        <html>\n        \n          <head>\n            <title>My app</title>\n            <script src=\"/public/bundle.js\" defer ></script>\n            <script> window.__PRELOADED_STATE__ = ".concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(preloadedState), " </script> \n               \n          </head>\n        \n          <body>\n            <div id=\"app\"> ").concat(markup, " </div>\n          </body>\n          \n        </html>\n    ");
}

app.listen(port, function () {
  console.log('Server is listening on port: 3000');
});

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29tcG9uZW50cy9jb3VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcmVkdWNlcnMvY291bnRlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsImluY3JlbWVudCIsInR5cGUiLCJJTkNSRU1FTlQiLCJkZWNyZW1lbnQiLCJERUNSRU1FTlQiLCJDb3VudGVyIiwicHJvcHMiLCJjb3VudGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiLCJkYXRhUmVkdWNlciIsImFjdGlvbiIsImNvbWJpbmVSZWR1Y2VycyIsImFwcCIsImV4cHJlc3MiLCJwb3J0IiwidXNlIiwic3RhdGljIiwiaGFuZGxlUmVuZGVyIiwicmVxIiwicmVzIiwicGFyYW1zIiwicXMiLCJwYXJzZSIsInF1ZXJ5IiwicGFyc2VJbnQiLCJwcmVsb2FkZWRTdGF0ZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VycyIsIm1hcmt1cCIsInJlbmRlclRvU3RyaW5nIiwiZmluYWxTdGF0ZSIsImdldFN0YXRlIiwic2VuZCIsInJlbmRlckZ1bGxQYWdlIiwic2VyaWFsaXplIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7SUFFTUEsRzs7Ozs7Ozs7Ozs7Ozs2QkFDTztBQUNMLGFBQ0ksd0VBQ0csMkRBQUUsMkRBQUYsT0FESCxDQURKO0FBS0g7Ozs7RUFQYUMsK0M7O0FBVUhELGtFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtB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QUc7QUFBRXRCLFdBQU8sRUFBUEE7QUFBRixHQUFyQjtBQUVBLE1BQU11QixLQUFLLEdBQUdDLHlEQUFXLENBQUNDLHdEQUFELEVBQVdILGNBQVgsQ0FBekI7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLHVFQUFjLENBQ3pCLDJEQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFSjtBQUFqQixLQUNJLDJEQUFDLHNEQUFELE9BREosQ0FEeUIsQ0FBN0I7QUFNQSxNQUFNSyxVQUFVLEdBQUdMLEtBQUssQ0FBQ00sUUFBTixFQUFuQjtBQUNBYixLQUFHLENBQUNjLElBQUosQ0FBVUMsY0FBYyxDQUFDTCxNQUFELEVBQVNFLFVBQVQsQ0FBeEI7QUFDSDs7QUFFRCxTQUFTRyxjQUFULENBQTBCTCxNQUExQixFQUFrQ0osY0FBbEMsRUFBa0Q7QUFDOUMsK09BT2dEVSwyREFBUyxDQUFDVixjQUFELENBUHpELHVIQVl5QkksTUFaekI7QUFpQkg7O0FBRURqQixHQUFHLENBQUN3QixNQUFKLENBQVl0QixJQUFaLEVBQWtCLFlBQU07QUFDcEJ1QixTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNILENBRkQsRTs7Ozs7Ozs7Ozs7QUN4REEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NlcnZlci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi9jb21wb25lbnRzL2NvdW50ZXInXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICA8IENvdW50ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiaW1wb3J0IHsgSU5DUkVNRU5ULCBERUNSRU1FTlQgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBJTkNSRU1FTlRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVjcmVtZW50ID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IERFQ1JFTUVOVFxyXG59KTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgIHsgaW5jcmVtZW50LCBkZWNyZW1lbnQgfSAgZnJvbSAnLi4vYWN0aW9ucyc7XHJcblxyXG5cclxuY2xhc3MgQ291bnRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkNvdW50ZXI6IHt0aGlzLnByb3BzLmNvdW50ZXJ9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5jcmVtZW50XCIgb25DbGljaz17dGhpcy5wcm9wcy5pbmNyZW1lbnR9PiArIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZWNyZW1lbnRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmRlY3JlbWVudH0+IC0gPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbmNyZW1lbnQ6ICgpICA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGluY3JlbWVudCgpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlY3JlbWVudDogKCkgID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVjcmVtZW50KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50ZXI6IHN0YXRlLmNvdW50ZXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICAgIG1hcFN0YXRlVG9Qcm9wcyxcclxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKENvdW50ZXIpO1xyXG4iLCJleHBvcnQgY29uc3QgSU5DUkVNRU5UID0gXCJJTkNSRU1FTlRcIjtcclxuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVCA9IFwiREVDUkVNRU5UXCI7XHJcbiIsImltcG9ydCB7IElOQ1JFTUVOVCwgREVDUkVNRU5UIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGFSZWR1Y2VyKHN0YXRlID0gMCwgYWN0aW9uKXtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBJTkNSRU1FTlQ6XHJcbiAgICAgICAgICAgIHJldHVybiArK3N0YXRlIDtcclxuICAgICAgICBjYXNlIERFQ1JFTUVOVDpcclxuICAgICAgICAgICAgcmV0dXJuIC0tc3RhdGUgO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGNvdW50ZXIgZnJvbSAnLi9jb3VudGVyUmVkdWNlcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvdW50ZXJcclxufSk7IiwiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXHJcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tbW9uL0FwcC5qcydcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4uL2NvbW1vbi9yZWR1Y2VycydcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCdcclxuaW1wb3J0IHFzIGZyb20gJ3FzJ1xyXG5cclxuXHJcbmxldCBhcHAgPSBleHByZXNzKClcclxuY29uc3QgcG9ydCA9IDMwMDBcclxuXHJcbmFwcC51c2UoJy9wdWJsaWMnLCBleHByZXNzLnN0YXRpYygncHVibGljJykgKVxyXG5cclxuYXBwLnVzZSggaGFuZGxlUmVuZGVyIClcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVJlbmRlciAgKHJlcSwgcmVzKSAge1xyXG5cclxuICAgIGNvbnN0IHBhcmFtcyA9IHFzLnBhcnNlKHJlcS5xdWVyeSkgICAgICAgICAgICAgICAgICAvL1RvIGJlIGFibGUgdG8gc2V0IGluaXRpYWwgc3RhdGUgYXMgaHR0cDovL2xvY2FsaG9zdDozMDAwLz9jb3VudGVyPTIwXHJcbiAgICBjb25zdCBjb3VudGVyID0gcGFyc2VJbnQocGFyYW1zLmNvdW50ZXIsIDEwKSB8fCAwXHJcblxyXG4gICAgbGV0IHByZWxvYWRlZFN0YXRlID0geyBjb3VudGVyIH1cclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBwcmVsb2FkZWRTdGF0ZSlcclxuICAgIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8QXBwLz5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IGZpbmFsU3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpXHJcbiAgICByZXMuc2VuZCggcmVuZGVyRnVsbFBhZ2UobWFya3VwLCBmaW5hbFN0YXRlKSApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZ1bGxQYWdlICAobWFya3VwLCBwcmVsb2FkZWRTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8IWRvY3R5cGUgaHRtbD5cclxuICAgICAgICA8aHRtbD5cclxuICAgICAgICBcclxuICAgICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TXkgYXBwPC90aXRsZT5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvcHVibGljL2J1bmRsZS5qc1wiIGRlZmVyID48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdD4gd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX18gPSAke3NlcmlhbGl6ZShwcmVsb2FkZWRTdGF0ZSl9IDwvc2NyaXB0PiBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcFwiPiAke21hcmt1cH0gPC9kaXY+XHJcbiAgICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2h0bWw+XHJcbiAgICBgXHJcbn1cclxuXHJcbmFwcC5saXN0ZW4oIHBvcnQsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQ6IDMwMDAnKVxyXG59KSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9