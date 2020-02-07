webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/atoms/title.tsx":
/*!****************************************!*\
  !*** ./src/components/atoms/title.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/tobiash/github/fingerprint/src/components/atoms/title.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var fontMono = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["font-family:monospace;font-weight:400;"]);
var Mono = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "title__Mono",
  componentId: "sc-1o0l52d-0"
})(["", " color:#68bccf;font-size:2rem;margin:0 0 20px 0;"], fontMono);
var MonoSub = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "title__MonoSub",
  componentId: "sc-1o0l52d-1"
})(["", " color:#656778;font-size:1.5rem;margin:0 0 20px 0;"], fontMono);
function Title(_ref) {
  var fingerPrint = _ref.fingerPrint;
  console.log(fingerPrint);
  console.log(MD5(fingerPrint));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MonoSub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Your Unique Browser Fingerprint:"), fingerPrint.map(function (value) {
    return __jsx(Mono, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, value.value, value.key);
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.7a2f60bb831a3c082527.hot-update.js.map