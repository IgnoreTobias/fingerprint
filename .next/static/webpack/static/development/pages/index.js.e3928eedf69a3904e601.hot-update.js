webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_components_utils_fingerprint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/utils/fingerprint */ "./src/components/utils/fingerprint.ts");
/* harmony import */ var _src_components_atoms_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/atoms/title */ "./src/components/atoms/title.tsx");

var _jsxFileName = "/Users/tobiash/github/fingerprint/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Main = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main.withConfig({
  displayName: "pages__Main",
  componentId: "lrbmwi-0"
})(["background:#282A36;height:100vh;width:100%;margin:0;padding:0;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      fingerprint = _useState[0],
      setFingerprint = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(Object(_src_components_utils_fingerprint__WEBPACK_IMPORTED_MODULE_3__["getFingerprint"])()).then( // @ts-ignore
    function (res) {
      return setFingerprint(res);
    });
  }, []);
  return __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, fingerprint ? __jsx(_src_components_atoms_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fingerPrint: fingerprint,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }) : __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "loading..."));
});

/***/ })

})
//# sourceMappingURL=index.js.e3928eedf69a3904e601.hot-update.js.map