webpackHotUpdate(3,{

/***/ "./components/Cell.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Cell.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: "render",

    // active = () => {
    //   return this.props.activeCells.indexOf(this.props.id) >= 0;
    // };
    // handleClick = () => {
    //   this.props.recordGuess({
    //     cellId: this.props.id,
    //     userGuessIsCorrect: this.active(),
    //   });
    // };
    // guessState = () => {
    //   if (this.props.correctGuesses.indexOf(this.props.id) >= 0) {
    //     return true;
    //   } else if (this.props.wrongGuesses.indexOf(this.props.id) >= 0) {
    //     return false;
    //   }
    // };
    value: function render() {
      // const { gameState } = this.props;
      var className = 'cell';
      // if (this.active()) className += ' active';
      // className += ` guess-${this.guessState()}`
      return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "style",
        { jsx: true, key: "cellStyle", __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        },
        "\n          .cell {\n            width: 100px;\n            height: 100px;\n            display: inline-block;\n            border: 1px solid #aaa;\n            background: #f8f8f8;\n            margin-right: 4px;\n          }\n\n          .active {\n            background-color: #058bda;\n          }\n\n          .guess-true {\n            background-color: #00cc00;\n          }\n\n          .guess-false {\n            background-color: #cc0000;\n          }\n        "
      ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: className, key: "cell", __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      })];
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Cell;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Cell;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Cell, "Cell", "/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Cell.js");
  reactHotLoader.register(_default, "default", "/home/sailesh/workspace/freelance/hackerbay/hackerbay-interview-frontend-task/components/Cell.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.bc62f2fea49b2ce82ee3.hot-update.js.map