"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/CustomerList.js":
/*!****************************************!*\
  !*** ./src/components/CustomerList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CustomerList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_DataCustomers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataCustomers */ \"./src/services/DataCustomers.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_prod_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/prod_list */ \"./src/pages/prod_list/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CustomerList() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    // const [customerProducts, setCustomerProducts] = useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_services_DataCustomers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            setState(data);\n        };\n        fetchData();\n        return ()=>{};\n    }, []);\n    function handleEvent(e) {\n        router.push(\"/prod_list\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"Container-fluid\",\n            children: state.length > 0 ? state.map((item, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                style: {\n                                    width: \"12rem\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Body, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Title, {\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/CustomerList.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 49\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Text, {\n                                            children: item.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/CustomerList.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 49\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            variant: \"primary\",\n                                            onClick: handleEvent,\n                                            children: \"View Inventory\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/CustomerList.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 49\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/CustomerList.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 45\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/CustomerList.js\",\n                                lineNumber: 35,\n                                columnNumber: 41\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/CustomerList.js\",\n                            lineNumber: 34,\n                            columnNumber: 37\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/CustomerList.js\",\n                        lineNumber: 33,\n                        columnNumber: 33\n                    }, this)\n                }, void 0, false);\n            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Please refresh page.\"\n            }, void 0, false, {\n                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/CustomerList.js\",\n                lineNumber: 48,\n                columnNumber: 23\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/CustomerList.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(CustomerList, \"Ipzde1y79d8Tmg4rjog5rfT9bSU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CustomerList;\nvar _c;\n$RefreshReg$(_c, \"CustomerList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXN0b21lckxpc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ0k7QUFDWTtBQUNaO0FBQ0Y7QUFFM0IsU0FBU087O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU1RLFNBQVNMLDBEQUFTQTtJQUN4QixnRUFBZ0U7SUFFaEVGLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsWUFBWTtZQUNkLE1BQU1DLE9BQU8sTUFBTVIsbUVBQWVBO1lBQ2xDSyxTQUFTRztRQUNiO1FBQ0FEO1FBQ0EsT0FBTyxLQUFRO0lBQ25CLEdBQUcsRUFBRTtJQUVMLFNBQVNFLFlBQVlDLENBQUM7UUFDbEJKLE9BQU9LLElBQUksQ0FBQztJQUNoQjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNWVCxNQUFNVSxNQUFNLEdBQUcsSUFDWlYsTUFBTVcsR0FBRyxDQUFDLENBQUNDLE1BQU1DO2dCQUNiLHFCQUNJOzhCQUNJLDRFQUFDTDt3QkFBZ0JDLFdBQVU7a0NBQ3ZCLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ2hCLDREQUFJQTtnQ0FBQ3FCLE9BQU87b0NBQUVDLE9BQU87Z0NBQVE7MENBQzFCLDRFQUFDdEIsaUVBQVM7O3NEQUNOLDhEQUFDQSxrRUFBVTtzREFBRW1CLEtBQUtNLElBQUk7Ozs7OztzREFDdEIsOERBQUN6QixpRUFBUztzREFBRW1CLEtBQUtRLFdBQVc7Ozs7OztzREFDNUIsOERBQUM1Qiw4REFBTUE7NENBQUM2QixTQUFROzRDQUFVQyxTQUFTakI7c0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBTnREUTs7Ozs7O1lBYXRCLG1CQUVFLDhEQUFDVTswQkFBRTs7Ozs7Ozs7Ozs7O0FBS3pCO0dBN0N3QnhCOztRQUVMRixzREFBU0E7OztLQUZKRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DdXN0b21lckxpc3QuanM/NGRiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHZXRDdXN0b21lckRhdGEgZnJvbSAnLi4vc2VydmljZXMvRGF0YUN1c3RvbWVycyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IFByb2RMaXN0IGZyb20gJy4uL3BhZ2VzL3Byb2RfbGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyTGlzdCgpIHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICAvLyBjb25zdCBbY3VzdG9tZXJQcm9kdWN0cywgc2V0Q3VzdG9tZXJQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgR2V0Q3VzdG9tZXJEYXRhKCk7XG4gICAgICAgICAgICBzZXRTdGF0ZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHsgfVxuICAgIH0sIFtdKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2RfbGlzdCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAge3N0YXRlLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgd2lkdGg6ICcxMnJlbScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57aXRlbS5uYW1lfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+e2l0ZW0uZGVzY3JpcHRpb259PC9DYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlRXZlbnR9PlZpZXcgSW52ZW50b3J5PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IDxwPlBsZWFzZSByZWZyZXNoIHBhZ2UuPC9wPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdldEN1c3RvbWVyRGF0YSIsInVzZVJvdXRlciIsIlByb2RMaXN0IiwiQ3VzdG9tZXJMaXN0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInJvdXRlciIsImZldGNoRGF0YSIsImRhdGEiLCJoYW5kbGVFdmVudCIsImUiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic3R5bGUiLCJ3aWR0aCIsIkJvZHkiLCJUaXRsZSIsIm5hbWUiLCJUZXh0IiwiZGVzY3JpcHRpb24iLCJ2YXJpYW50Iiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CustomerList.js\n"));

/***/ })

});