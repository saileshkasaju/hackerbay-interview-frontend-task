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
/******/ ({

/***/ "./components/Cell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Cell.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cell.__proto__ || Object.getPrototypeOf(Cell)).call.apply(_ref, [this].concat(args))), _this), _this.active = function () {
      return _this.props.activeCells.indexOf(_this.props.id) >= 0;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      var className = 'cell';
      if (this.active()) className += ' active';
      if (this.props.id === this.props.startPosition) className += ' hero';
      return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'style',
        { jsx: 'true', key: 'cellStyle', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        '\n          .cell {\n            width: 100px;\n            height: 100px;\n            display: inline-block;\n            border: 1px solid #aaa;\n            background: #f8f8f8;\n            margin-right: 4px;\n          }\n\n          .active {\n            background-image: url("/static/mushroom.png");\n            background-repeat: no-repeat;\n          }\n\n          .hero {\n            background-image: url("/static/mario.png");\n            background-repeat: no-repeat;\n          }\n\n          .guess-true {\n            background-color: #00cc00;\n          }\n\n          .guess-false {\n            background-color: #cc0000;\n          }\n        '
      ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: className, key: 'cell', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })];
    }
  }]);

  return Cell;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Cell);

/***/ }),

/***/ "./components/Game.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Row__ = __webpack_require__("./components/Row.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Cell__ = __webpack_require__("./components/Cell.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Game.js';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

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
    var flatMatrix = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.flatten(_this.matrix);
    var totalEnemies = Math.ceil(width * height / (width + height) * 2);
    _this.activeCells = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.sampleSize(flatMatrix, totalEnemies);
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

  _createClass(Game, [{
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        this.matrix.map(function (row, ri) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__Row__["a" /* default */],
            { key: 'row-' + ri, __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            },
            row.map(function (cellId) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Cell__["a" /* default */], _extends({
                key: 'cell-' + cellId, id: cellId,
                movePiece: _this3.movePiece, activeCells: _this3.activeCells
              }, _this3.state, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                }
              }));
            })
          );
        }),
        isGameOver && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Modal"],
          {
            open: true, basic: true, size: 'tiny',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Header"], { icon: 'resize vertical', content: 'Game Over', __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Modal"].Content,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                }
              },
              'Total moves to save princess: ',
              this.totalMoves
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Modal"].Actions,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"],
              { color: 'green', onClick: function onClick() {
                  return _this3.props.finishGame();
                }, inverted: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 93
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Icon"], { name: 'checkmark', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                }
              }),
              ' New Game'
            )
          )
        )
      );
    }
  }]);

  return Game;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),

/***/ "./components/GameWrapper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Game__ = __webpack_require__("./components/Game.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/GameWrapper.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var GameWrapper = function (_React$Component) {
  _inherits(GameWrapper, _React$Component);

  function GameWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GameWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GameWrapper.__proto__ || Object.getPrototypeOf(GameWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GameWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          width = _state.width,
          height = _state.height,
          selectedModal = _state.selectedModal,
          hasGameStarted = _state.hasGameStarted;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        hasGameStarted && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Game__["a" /* default */], _extends({ finishGame: this.finishGame }, this.props, this.state, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        })),
        !hasGameStarted && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"],
            {
              trigger: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"],
                { onClick: function onClick() {
                    return _this2.selectModal('setWidth');
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                'Start Game'
              ),
              open: selectedModal === 'setWidth',
              size: 'tiny',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], { icon: 'resize horizontal', content: 'Board width', __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"].Content,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                'Please enter board width.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Input"], { name: 'width', value: width, onChange: this.handleChange, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"].Actions,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 57
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"],
                { positive: true, onClick: function onClick() {
                    return _this2.selectModal('setHeight');
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                  }
                },
                'Submit'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"],
            {
              open: selectedModal === 'setHeight',
              size: 'tiny',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Header"], { icon: 'resize vertical', content: 'Board height', __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"].Content,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h3',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                'Please enter board height.'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Input"], { name: 'height', value: height, onChange: this.handleChange, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Modal"].Actions,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"],
                { color: 'green', onClick: function onClick() {
                    return _this2.selectModal('');
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                'Submit'
              )
            )
          )
        )
      );
    }
  }]);

  return GameWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (GameWrapper);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Layout.js";



var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "title",
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 6
          }
        },
        "Maze Problem"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", { rel: "stylesheet", href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      })
    ),
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Row.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Row.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "row", __source: {
            fileName: _jsxFileName,
            lineNumber: 4
          }
        },
        this.props.children
      );
    }
  }]);

  return Row;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_GameWrapper__ = __webpack_require__("./components/GameWrapper.js");
var _jsxFileName = '/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/pages/index.js';





var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '1619803146',
      css: 'body.jsx-1619803146{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1PLEFBRzJCLGtCQUNwQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zYWlsZXNoL3dvcmtzcGFjZS9mcmVlbGFuY2UvaGFja2VyYmF5L2hhY2tlcmJheS1pbnRlcnZpZXctZnJvbnRlbmQtdGFzayIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEdhbWVXcmFwcGVyIGZyb20gJy4uL2NvbXBvbmVudHMvR2FtZVdyYXBwZXInO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICBib2R5IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGB9XG4gICAgPC9zdHlsZT5cbiAgICA8R2FtZVdyYXBwZXIgLz5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=pages/index.js */'
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_GameWrapper__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map