"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/prod_list",{

/***/ "./src/components/Buttons.js":
/*!***********************************!*\
  !*** ./src/components/Buttons.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Buttons; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_AddProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/AddProduct */ \"./src/services/AddProduct.js\");\n\n\nfunction Buttons() {\n    function handleAddClick() {\n        GetInventoryData();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid text-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: handleAddClick,\n                            className: \"col-md-4 btn mt-3 m-5 btn-success btn-md\",\n                            children: \"Add\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/Buttons.js\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"col-md-4 btn mt-3 m-5 btn-warning btn-md\",\n                            children: \"Update\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/Buttons.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/Buttons.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/Buttons.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/Buttons.js\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Buttons;\n;\nvar _c;\n$RefreshReg$(_c, \"Buttons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBRXBDLFNBQVNDO0lBRXBCLFNBQVNDO1FBQ0xDO0lBRUo7SUFDQSxxQkFDSTtrQkFDQSw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FFbkIsOERBQUNDOzRCQUFPQyxNQUFLOzRCQUFTQyxTQUFTTjs0QkFBZ0JHLFdBQVU7c0NBQTJDOzs7Ozs7c0NBQ3BHLDhEQUFDQzs0QkFBT0MsTUFBSzs0QkFBU0YsV0FBVTtzQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZGO0tBcEJ3QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9ucy5qcz9iNmRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZGRQcm9kdWN0RGF0YSBmcm9tIFwiLi4vc2VydmljZXMvQWRkUHJvZHVjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbnMoKSB7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRDbGljaygpIHtcbiAgICAgICAgR2V0SW52ZW50b3J5RGF0YSgpO1xuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY29sLW1kLTQgYnRuIG10LTMgbS01IGJ0bi1pbmZvIGJ0bi1sZ1wiPkZpbHRlcjwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUFkZENsaWNrfSBjbGFzc05hbWU9XCJjb2wtbWQtNCBidG4gbXQtMyBtLTUgYnRuLXN1Y2Nlc3MgYnRuLW1kXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjb2wtbWQtNCBidG4gbXQtMyBtLTUgYnRuLXdhcm5pbmcgYnRuLW1kXCI+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY29sLW1kLTQgYnRuIG10LTMgbS01IGJ0bi1kYW5nZXIgYnRuLW1kXCI+RGVsZXRlPC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufTsiXSwibmFtZXMiOlsiQWRkUHJvZHVjdERhdGEiLCJCdXR0b25zIiwiaGFuZGxlQWRkQ2xpY2siLCJHZXRJbnZlbnRvcnlEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Buttons.js\n"));

/***/ }),

/***/ "./src/services/AddProduct.js":
/*!************************************!*\
  !*** ./src/services/AddProduct.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddProductData; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nasync function AddProductData() {\n    let response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"http://127.0.0.1:8000/inventory/\");\n    return response.data;\n}\n_c = AddProductData;\n;\nvar _c;\n$RefreshReg$(_c, \"AddProductData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvQWRkUHJvZHVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQjtBQUVYLGVBQWVDO0lBQzFCLElBQUlDLFdBQVcsTUFBTUYsa0RBQVUsQ0FBRTtJQUNqQyxPQUFPRSxTQUFTRSxJQUFJO0FBQ3hCO0tBSDhCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvQWRkUHJvZHVjdC5qcz9lYmY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gQWRkUHJvZHVjdERhdGEoKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2ludmVudG9yeS9gKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn07Il0sIm5hbWVzIjpbImF4aW9zIiwiQWRkUHJvZHVjdERhdGEiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/AddProduct.js\n"));

/***/ })

});