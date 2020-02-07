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
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_2__);
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      hashed = _useState[0],
      setHashed = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setHashed(md5__WEBPACK_IMPORTED_MODULE_2___default()(fingerPrint));
    var d = new Date();
    d.setTime(d.getTime() + 10 * 365 * 24 * 60 * 60 * 1000);
    var expires = d.toUTCString();
    document.cookie = "FINGERPRINT=".concat(hashed, "; expires=").concat(expires);
  }, [hashed]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MonoSub, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Your Unique Browser Fingerprint:"), __jsx(Mono, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, hashed));
}

/***/ })

})
//# sourceMappingURL=index.js.5aa24c12542057d61b18.hot-update.js.map