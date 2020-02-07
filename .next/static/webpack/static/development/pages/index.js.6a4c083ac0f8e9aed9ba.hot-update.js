webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_components_utils_fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/utils/fingerprint */ "./src/components/utils/fingerprint.ts");
/* harmony import */ var _src_components_atoms_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/atoms/title */ "./src/components/atoms/title.tsx");


var _jsxFileName = "/Users/tobiash/github/fingerprint/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Main = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].main.withConfig({
  displayName: "pages__Main",
  componentId: "lrbmwi-0"
})(["background:#282A36;height:100vh;width:100%;margin:0;padding:0;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      fingerprint = _useState[0],
      setFingerprint = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch("https://extreme-ip-lookup.com/json").then(function (res) {
      return res.json();
    }).then(function (fp) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.all([Object(_src_components_utils_fingerprint__WEBPACK_IMPORTED_MODULE_4__["getFingerprint"])()]);
    }).then(function (_ref) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 1),
          fp = _ref2[0];

      setFingerprint(fp);
    });
  }, [showReport]);
  console.log(browserData);
  return __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, fingerprint ? __jsx(_src_components_atoms_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fingerPrint: "shit got loaded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }) : __jsx(_src_components_atoms_title__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fingerPrint: "loading...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.6a4c083ac0f8e9aed9ba.hot-update.js.map