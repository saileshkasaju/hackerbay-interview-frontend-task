webpackHotUpdate(3,{

/***/ "./components/Game.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var _jsxFileName = '/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Game.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


// import Row from './Row';
// import Cell from './Cell';

var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this.finishGame = function (gameState) {
      // the game is over
      // so set score and cleanup
    };

    _this.movePiece = function (_ref) {
      var cellId = _ref.cellId,
          hasFoundEnemy = _ref.hasFoundEnemy;
      var gameStatus = _this.state.gameStatus;
    };

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
    _this.inactiveCells = flatMatrix.filter(function (eachCell) {
      return _this.activeCells.indexOf(eachCell) === -1;
    });
    var startPosiition = _this.inactiveCells[Math.floor(Math.random() * _this.inactiveCells.length)];
    _this.state = {
      gameStatus: 'ready',
      totalSteps: 0,
      gameScore: 0,
      totalEnemies: totalEnemies
    };
    return _this;
  }

  _createClass(Game, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.finishGame();
    }
  }, {
    key: 'render',
    value: function render() {
      var gameState = this.state.gameState;

      _objectDestructuringEmpty(this.props);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'grid', __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        this.matrix.map(function (row, ri) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Row,
            { key: 'row-' + ri, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            row.map(function (cellId) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Cell, {
                key: 'cell-' + cellId, id: cellId,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              });
            })
          );
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Game;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Game;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Game, 'Game', '/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Game.js');
  reactHotLoader.register(_default, 'default', '/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Game.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.86a3e781fbd2bc0785de.hot-update.js.map