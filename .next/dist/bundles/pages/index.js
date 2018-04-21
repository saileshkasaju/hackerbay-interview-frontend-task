module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(4);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js



var Layout_Layout = function Layout(props) {
  return external__react__default.a.createElement(
    "div",
    null,
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement(
        "title",
        null,
        "Maze Problem"
      ),
      external__react__default.a.createElement("link", { rel: "stylesheet", href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" })
    ),
    props.children
  );
};

/* harmony default export */ var components_Layout = (Layout_Layout);
// EXTERNAL MODULE: external "semantic-ui-react"
var external__semantic_ui_react_ = __webpack_require__(1);
var external__semantic_ui_react__default = /*#__PURE__*/__webpack_require__.n(external__semantic_ui_react_);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(6);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./components/Row.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row_Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement(
        "div",
        { className: "row" },
        this.props.children
      );
    }
  }]);

  return Row;
}(external__react__default.a.Component);

/* harmony default export */ var components_Row = (Row_Row);
// CONCATENATED MODULE: ./components/Cell.js
var Cell__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function Cell__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Cell__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Cell__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell_Cell = function (_React$Component) {
  Cell__inherits(Cell, _React$Component);

  function Cell() {
    var _ref;

    var _temp, _this, _ret;

    Cell__classCallCheck(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Cell__possibleConstructorReturn(this, (_ref = Cell.__proto__ || Object.getPrototypeOf(Cell)).call.apply(_ref, [this].concat(args))), _this), _this.active = function () {
      return _this.props.activeCells.indexOf(_this.props.id) >= 0;
    }, _temp), Cell__possibleConstructorReturn(_this, _ret);
  }

  Cell__createClass(Cell, [{
    key: 'render',
    value: function render() {
      var className = 'cell';
      if (this.active()) className += ' enemy';
      if (this.props.id === this.props.startPosition) className += ' hero';
      return [external__react__default.a.createElement(
        'style',
        { jsx: 'true', key: 'cellStyle' },
        '\n          .cell {\n            width: 100px;\n            height: 100px;\n            display: inline-block;\n            border: 1px solid #aaa;\n            background: #f8f8f8;\n            margin-right: 4px;\n          }\n\n          .enemy {\n            background-image: url("/static/mushroom.png");\n            background-repeat: no-repeat;\n          }\n\n          .hero {\n            background-image: url("/static/mario.png");\n            background-repeat: no-repeat;\n          }\n        '
      ), external__react__default.a.createElement('div', { className: className, key: 'cell' })];
    }
  }]);

  return Cell;
}(external__react__default.a.Component);

/* harmony default export */ var components_Cell = (Cell_Cell);
// CONCATENATED MODULE: ./components/Game.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Game__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function Game__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Game__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Game__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Game_Game = function (_React$Component) {
  Game__inherits(Game, _React$Component);

  function Game(props) {
    Game__classCallCheck(this, Game);

    var _this = Game__possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.matrix = [];
    var width = props.width,
        height = props.height;

    for (var h = 0; h < height; h++) {
      var row = [];
      for (var w = 0; w < width; w++) {
        row.push(h + '-' + w);
      }
      _this.matrix.push(row);
    }
    var flatMatrix = external__lodash__default.a.flatten(_this.matrix);
    var totalEnemies = Math.ceil(width * height / (width + height) * 2);
    _this.activeCells = external__lodash__default.a.sampleSize(flatMatrix, totalEnemies);
    var inactiveCells = flatMatrix.filter(function (eachCell) {
      return _this.activeCells.indexOf(eachCell) === -1;
    });
    var startPosition = inactiveCells[Math.floor(Math.random() * inactiveCells.length)];
    _this.state = {
      isGameOver: false,
      totalSteps: 0,
      gameScore: 0,
      totalEnemies: totalEnemies,
      startPosition: startPosition
    };
    return _this;
  }

  Game__createClass(Game, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.totalMoves = 0;
      this.body = document.querySelector('body');
      this.body.onkeydown = function (e) {
        if (!e.metaKey) {
          e.preventDefault();
        }
        var startPosition = _this2.state.startPosition;
        var _props = _this2.props,
            width = _props.width,
            height = _props.height;

        var _startPosition$split$ = startPosition.split('-').map(function (each) {
          return Number(each);
        }),
            _startPosition$split$2 = _slicedToArray(_startPosition$split$, 2),
            y = _startPosition$split$2[0],
            x = _startPosition$split$2[1];

        if (e.keyCode === 38) {
          y = y - 1;
        }
        if (e.keyCode === 40) {
          y = y + 1;
        }
        if (e.keyCode === 37) {
          x = x - 1;
        }
        if (e.keyCode === 39) {
          x = x + 1;
        }
        if (x >= 0 && x < width && y >= 0 && y < height) {
          _this2.totalMoves = _this2.totalMoves + 1;
          var newPos = y + '-' + x;
          if (_this2.activeCells.includes(newPos)) {
            var index = _this2.activeCells.indexOf(newPos);
            _this2.activeCells = [].concat(_toConsumableArray(_this2.activeCells.slice(0, index)), _toConsumableArray(_this2.activeCells.slice(index + 1)));
          }
          if (_this2.activeCells.length === 0) {
            _this2.setState({ isGameOver: true });
          }
          _this2.setState({ startPosition: newPos });
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log(this.props.createNewGame);
      var isGameOver = this.state.isGameOver;

      return external__react__default.a.createElement(
        'div',
        { className: 'grid' },
        this.matrix.map(function (row, ri) {
          return external__react__default.a.createElement(
            components_Row,
            { key: 'row-' + ri },
            row.map(function (cellId) {
              return external__react__default.a.createElement(components_Cell, _extends({
                key: 'cell-' + cellId, id: cellId,
                movePiece: _this3.movePiece, activeCells: _this3.activeCells
              }, _this3.state));
            })
          );
        }),
        isGameOver && external__react__default.a.createElement(
          external__semantic_ui_react_["Modal"],
          {
            open: true, basic: true, size: 'tiny'
          },
          external__react__default.a.createElement(external__semantic_ui_react_["Header"], { icon: 'resize vertical', content: 'Game Over' }),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Modal"].Content,
            null,
            external__react__default.a.createElement(
              'h3',
              null,
              'Total moves to save princess: ',
              this.totalMoves
            )
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Modal"].Actions,
            null,
            external__react__default.a.createElement(
              external__semantic_ui_react_["Button"],
              { color: 'green', onClick: function onClick() {
                  return _this3.props.finishGame();
                }, inverted: true },
              external__react__default.a.createElement(external__semantic_ui_react_["Icon"], { name: 'checkmark' }),
              ' New Game'
            )
          )
        )
      );
    }
  }]);

  return Game;
}(external__react__default.a.Component);

/* harmony default export */ var components_Game = (Game_Game);
// CONCATENATED MODULE: ./components/GameWrapper.js
var GameWrapper__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var GameWrapper__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function GameWrapper__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GameWrapper__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function GameWrapper__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GameWrapper_GameWrapper = function (_React$Component) {
  GameWrapper__inherits(GameWrapper, _React$Component);

  function GameWrapper() {
    var _ref;

    var _temp, _this, _ret;

    GameWrapper__classCallCheck(this, GameWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = GameWrapper__possibleConstructorReturn(this, (_ref = GameWrapper.__proto__ || Object.getPrototypeOf(GameWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      width: 10,
      height: 10,
      selectedModal: '',
      hasGameStarted: false
    }, _this.validate = function () {
      var _this$state = _this.state,
          width = _this$state.width,
          height = _this$state.height;

      if (width <= 0) {
        return 'setWidth';
      }
      if (height <= 0) {
        return 'setHeight';
      }
      return null;
    }, _this.selectModal = function () {
      var modalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (modalName === '') {
        var error = _this.validate();
        if (error) {
          _this.setState({ selectedModal: error });
        } else {
          _this.setState({ hasGameStarted: true });
        }
      } else {
        _this.setState({ selectedModal: modalName });
      }
    }, _this.handleChange = function (e, _ref2) {
      var name = _ref2.name,
          value = _ref2.value;
      return _this.setState(_defineProperty({}, name, Number(value)));
    }, _this.finishGame = function () {
      _this.setState({ selectedModal: '', hasGameStarted: false });
    }, _temp), GameWrapper__possibleConstructorReturn(_this, _ret);
  }

  GameWrapper__createClass(GameWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          width = _state.width,
          height = _state.height,
          selectedModal = _state.selectedModal,
          hasGameStarted = _state.hasGameStarted;

      return external__react__default.a.createElement(
        'div',
        null,
        hasGameStarted && external__react__default.a.createElement(components_Game, GameWrapper__extends({ finishGame: this.finishGame }, this.props, this.state)),
        !hasGameStarted && external__react__default.a.createElement(
          'div',
          null,
          external__react__default.a.createElement(
            external__semantic_ui_react_["Modal"],
            {
              trigger: external__react__default.a.createElement(
                external__semantic_ui_react_["Button"],
                { onClick: function onClick() {
                    return _this2.selectModal('setWidth');
                  } },
                'Start Game'
              ),
              open: selectedModal === 'setWidth',
              size: 'tiny'
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Header"], { icon: 'resize horizontal', content: 'Board width' }),
            external__react__default.a.createElement(
              external__semantic_ui_react_["Modal"].Content,
              null,
              external__react__default.a.createElement(
                'h3',
                null,
                'Please enter board width.'
              ),
              external__react__default.a.createElement(external__semantic_ui_react_["Input"], { name: 'width', value: width, onChange: this.handleChange })
            ),
            external__react__default.a.createElement(
              external__semantic_ui_react_["Modal"].Actions,
              null,
              external__react__default.a.createElement(
                external__semantic_ui_react_["Button"],
                { positive: true, onClick: function onClick() {
                    return _this2.selectModal('setHeight');
                  } },
                'Submit'
              )
            )
          ),
          external__react__default.a.createElement(
            external__semantic_ui_react_["Modal"],
            {
              open: selectedModal === 'setHeight',
              size: 'tiny'
            },
            external__react__default.a.createElement(external__semantic_ui_react_["Header"], { icon: 'resize vertical', content: 'Board height' }),
            external__react__default.a.createElement(
              external__semantic_ui_react_["Modal"].Content,
              null,
              external__react__default.a.createElement(
                'h3',
                null,
                'Please enter board height.'
              ),
              external__react__default.a.createElement(external__semantic_ui_react_["Input"], { name: 'height', value: height, onChange: this.handleChange })
            ),
            external__react__default.a.createElement(
              external__semantic_ui_react_["Modal"].Actions,
              null,
              external__react__default.a.createElement(
                external__semantic_ui_react_["Button"],
                { color: 'green', onClick: function onClick() {
                    return _this2.selectModal('');
                  } },
                'Submit'
              )
            )
          )
        )
      );
    }
  }]);

  return GameWrapper;
}(external__react__default.a.Component);

/* harmony default export */ var components_GameWrapper = (GameWrapper_GameWrapper);
// CONCATENATED MODULE: ./pages/index.js





var pages_App = function App() {
  return external__react__default.a.createElement(
    components_Layout,
    null,
    external__react__default.a.createElement(style__default.a, {
      styleId: '1619803146',
      css: ['body.jsx-1619803146{text-align:center;}']
    }),
    external__react__default.a.createElement(components_GameWrapper, null)
  );
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_App);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);