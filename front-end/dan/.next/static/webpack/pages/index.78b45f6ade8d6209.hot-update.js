"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layout/ContentContainer.js":
/*!****************************************!*\
  !*** ./src/layout/ContentContainer.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_BlogPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BlogPost */ \"./src/components/BlogPost.js\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/context */ \"./src/context/context.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ContentContainer = function(param) {\n    var children = param.children;\n    _s();\n    var nav = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).nav;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: nav === \"blog-post\" ? blog === \"classic\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPost__WEBPACK_IMPORTED_MODULE_2__.BlogPostClassic, {}, void 0, false, {\n            fileName: \"/Users/dan/GitHub/da-n/front-end/dan/src/layout/ContentContainer.js\",\n            lineNumber: 10,\n            columnNumber: 11\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/dan/GitHub/da-n/front-end/dan/src/layout/ContentContainer.js\",\n            lineNumber: 12,\n            columnNumber: 11\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/dan/GitHub/da-n/front-end/dan/src/layout/ContentContainer.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/dan/GitHub/da-n/front-end/dan/src/layout/ContentContainer.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContentContainer, \"ZwqqGV/7nrvx0URSoCg4wifmxdc=\");\n_c = ContentContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentContainer);\nvar _c;\n$RefreshReg$(_c, \"ContentContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0L0NvbnRlbnRDb250YWluZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBNkM7QUFDeUI7QUFDN0I7QUFDekMsSUFBTUssZ0JBQWdCLEdBQUcsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbEMsSUFBTSxHQUFLLEdBQUtMLGlEQUFVLENBQUNHLHdEQUFPLENBQUMsQ0FBM0JHLEdBQUc7SUFDWCxxQkFDRSw4REFBQ1AsMkNBQVE7a0JBQ05PLEdBQUcsS0FBSyxXQUFXLEdBQ2xCQyxJQUFJLEtBQUssU0FBUyxpQkFDaEIsOERBQUNMLGlFQUFlOzs7O2lCQUFHLGlCQUVuQiw4REFBQ0QsNERBQVc7Ozs7aUJBQUcsaUJBR2pCLDhEQUFDRiwyQ0FBUTtzQkFBRU0sUUFBUTs7Ozs7aUJBQVk7Ozs7O2FBRXhCLENBQ1g7Q0FDSDtHQWZLRCxnQkFBZ0I7QUFBaEJBLEtBQUFBLGdCQUFnQjtBQWdCdEIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvQ29udGVudENvbnRhaW5lci5qcz9hODhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCbG9nUG9zdE5ldywgeyBCbG9nUG9zdENsYXNzaWMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9CbG9nUG9zdFwiO1xyXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XHJcbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBuYXYgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAge25hdiA9PT0gXCJibG9nLXBvc3RcIiA/IChcclxuICAgICAgICBibG9nID09PSBcImNsYXNzaWNcIiA/IChcclxuICAgICAgICAgIDxCbG9nUG9zdENsYXNzaWMgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEJsb2dQb3N0TmV3IC8+XHJcbiAgICAgICAgKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxGcmFnbWVudD57Y2hpbGRyZW59PC9GcmFnbWVudD5cclxuICAgICAgKX1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENvbnRhaW5lcjtcclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlQ29udGV4dCIsIkJsb2dQb3N0TmV3IiwiQmxvZ1Bvc3RDbGFzc2ljIiwiQ29udGV4dCIsIkNvbnRlbnRDb250YWluZXIiLCJjaGlsZHJlbiIsIm5hdiIsImJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/ContentContainer.js\n"));

/***/ })

});