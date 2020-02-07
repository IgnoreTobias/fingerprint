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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/Users/tobiash/github/fingerprint/src/components/atoms/title.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var fontMono = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["font-family:monospace;font-weight:400;"]); //
// const Mono = styled.h1`
//   ${fontMono}
//   color: #68bccf;
//   font-size: 2rem;
//   margin: 0 0 20px 0;
// `

var MonoSub = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2.withConfig({
  displayName: "title__MonoSub",
  componentId: "sc-1o0l52d-0"
})(["", " color:#656778;font-size:1.5rem;margin:0 0 20px 0;"], fontMono);
function Title(_ref) {
  var fingerPrint = _ref.fingerPrint;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(MonoSub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Your Unique Browser Fingerprint:"), _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(fingerPrint).map(function (_ref2, i) {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    console.log(key[i], value);
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.04634c340ac0bae42387.hot-update.js.map