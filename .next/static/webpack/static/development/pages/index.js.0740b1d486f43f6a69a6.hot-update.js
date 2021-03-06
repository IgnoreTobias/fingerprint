webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_utils_fingerprint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/utils/fingerprint */ "./src/components/utils/fingerprint.ts");
/* harmony import */ var _src_components_atoms_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/atoms/title */ "./src/components/atoms/title.tsx");
var _jsxFileName = "/Users/tobiash/github/fingerprint/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Main = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "pages__Main",
  componentId: "lrbmwi-0"
})(["background:#282A36;height:100vh;width:100%;margin:0;padding:0;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      fingerprint = _useState[0],
      setFingerprint = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_src_components_utils_fingerprint__WEBPACK_IMPORTED_MODULE_3__["getFingerprint"])().then(function (res) {
      if (res !== []) {
        var objectsToString = function objectsToString(res) {
          var str = ''; // @ts-ignore

          for (var i = 0, len = res.length; i < len; i++) {
            // @ts-ignore
            str += res[i].key + ' is ' + res[i].value + '. ';
          }

          return str;
        };

        var fingerPrintString = objectsToString(res);
        var hashedFingerPrint = md5__WEBPACK_IMPORTED_MODULE_2___default()(fingerPrintString);
        setFingerprint(hashedFingerPrint);
        var d = new Date();
        d.setTime(d.getTime() + 10 * 365 * 24 * 60 * 60 * 1000);
        var expires = d.toUTCString();
        document.cookie = "FINGERPRINT=".concat(hashedFingerPrint, "; expires=").concat(expires);
      }
    });
  }, [fingerprint]);
  return __jsx(Main, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, fingerprint ? __jsx(_src_components_atoms_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fingerPrint: fingerprint,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }) : __jsx(_src_components_atoms_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fingerPrint: "loading...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.0740b1d486f43f6a69a6.hot-update.js.map