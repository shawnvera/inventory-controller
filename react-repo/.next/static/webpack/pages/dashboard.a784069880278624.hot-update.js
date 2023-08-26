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

/***/ "./src/components/ProductInfo.js":
/*!***************************************!*\
  !*** ./src/components/ProductInfo.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_DataInventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DataInventory */ \"./src/services/DataInventory.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var _services_CustomerProductFilteredInventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CustomerProductFilteredInventory */ \"./src/services/CustomerProductFilteredInventory.js\");\n/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/CloseButton */ \"./node_modules/react-bootstrap/esm/CloseButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/DeleteProduct */ \"./src/services/DeleteProduct.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction ProductInfo() {\n    _s();\n    // state to remember products.\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    // state to remember the item id to be used for deletion axios call.\n    const [deleteID, setDeleteID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // useEffect to GET filtered customer data for products.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_services_DataInventory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            setState(data);\n        };\n        fetchData();\n        return ()=>{};\n    }, []);\n    // useEffect to run the delete of a product if the value of deleteID has been changed from null.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (deleteID !== null) {\n            (0,_services_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(deleteID);\n            window.location.reload();\n        }\n    }, [\n        deleteID\n    ]);\n    // function to handle the click of the delete button for product.\n    const handleDeleteClick = (e)=>{\n        setDeleteID(e.target.value);\n    };\n    const handleUpdate = async (e)=>{\n        const headers = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n        let formField = new FormData();\n        formField.append(\"quantity\", quantity);\n        await (0,axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n            method: \"put\",\n            url: \"http://127.0.0.1:8000/prod_update/\",\n            data: item,\n            headers: headers\n        }).then((response)=>{});\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleUpdate();\n        }\n    };\n    const newFunc = (id, qty)=>{\n        setItem({\n            id: id,\n            quantity: qty\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: state.length > 0 ? state.map((item, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    as: \"ul\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n                        as: \"li\",\n                        className: \"d-flex justify-content-between align-items-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ms-2 me-auto\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fw-bold\",\n                                        children: item.name\n                                    }, index, false, {\n                                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 21\n                                    }, this),\n                                    item.description\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 83,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 87,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Control, {\n                                className: \"text-center\",\n                                size: \"sm\",\n                                type: \"number\",\n                                placeholder: item.quantity,\n                                onKeyDown: (e)=>handleKeyDown(e),\n                                onChange: (e)=>newFunc(item.id, e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 89,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                type: \"button\",\n                                onClick: (e)=>handleDeleteClick(e),\n                                value: item.id\n                            }, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 92,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                    lineNumber: 81,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false);\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"There are no products for this customer.\"\n        }, void 0, false, {\n            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n            lineNumber: 99,\n            columnNumber: 11\n        }, this)\n    }, void 0, false);\n}\n_s(ProductInfo, \"zj0gdIHdMVTbUc6quiDz5ogPQuk=\");\n_c = ProductInfo;\nvar _c;\n$RefreshReg$(_c, \"ProductInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHZXRJbnZlbnRvcnlEYXRhIGZyb20gXCIuLi9zZXJ2aWNlcy9EYXRhSW52ZW50b3J5XCI7XG5pbXBvcnQgQmFkZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0JhZGdlJztcbmltcG9ydCBMaXN0R3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0xpc3RHcm91cCc7XG5pbXBvcnQgR2V0Q3VzdG9tZXJQcm9kdWN0RmlsdGVyZWRJbnZlbnRvcnlEYXRhIGZyb20gXCIuLi9zZXJ2aWNlcy9DdXN0b21lclByb2R1Y3RGaWx0ZXJlZEludmVudG9yeVwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IERlbGV0ZVByb2R1Y3QgZnJvbSBcIi4uL3NlcnZpY2VzL0RlbGV0ZVByb2R1Y3RcIjtcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLmhlYWRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEluZm8oKSB7XG4gIC8vIHN0YXRlIHRvIHJlbWVtYmVyIHByb2R1Y3RzLlxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgLy8gc3RhdGUgdG8gcmVtZW1iZXIgdGhlIGl0ZW0gaWQgdG8gYmUgdXNlZCBmb3IgZGVsZXRpb24gYXhpb3MgY2FsbC5cbiAgY29uc3QgW2RlbGV0ZUlELCBzZXREZWxldGVJRF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyB1c2VFZmZlY3QgdG8gR0VUIGZpbHRlcmVkIGN1c3RvbWVyIGRhdGEgZm9yIHByb2R1Y3RzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBHZXRJbnZlbnRvcnlEYXRhKCk7XG4gICAgICBzZXRTdGF0ZShkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgcmV0dXJuICgpID0+IHsgfVxuICB9LCBbXSlcblxuXG4gIC8vIHVzZUVmZmVjdCB0byBydW4gdGhlIGRlbGV0ZSBvZiBhIHByb2R1Y3QgaWYgdGhlIHZhbHVlIG9mIGRlbGV0ZUlEIGhhcyBiZWVuIGNoYW5nZWQgZnJvbSBudWxsLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWxldGVJRCAhPT0gbnVsbCkge1xuICAgICAgRGVsZXRlUHJvZHVjdChkZWxldGVJRCk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9LCBbZGVsZXRlSURdKVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgY2xpY2sgb2YgdGhlIGRlbGV0ZSBidXR0b24gZm9yIHByb2R1Y3QuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKGUpID0+IHtcbiAgICBzZXREZWxldGVJRChlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBhdXRoSGVhZGVyKClcbiAgICBsZXQgZm9ybUZpZWxkID0gbmV3IEZvcm1EYXRhKClcblxuICAgIGZvcm1GaWVsZC5hcHBlbmQoJ3F1YW50aXR5JywgcXVhbnRpdHkpXG5cbiAgICBhd2FpdCBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgdXJsOiBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Byb2RfdXBkYXRlL2AsXG4gICAgICBkYXRhOiBpdGVtLFxuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaGFuZGxlVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmV3RnVuYyA9IChpZCwgcXR5KSA9PiB7XG4gICAgc2V0SXRlbSh7XG4gICAgICBpZDogaWQsXG4gICAgICBxdWFudGl0eTogcXR5XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzdGF0ZS5sZW5ndGggPiAwID9cbiAgICAgICAgc3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGlzdEdyb3VwIGFzPVwidWxcIj5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gYXM9XCJsaVwiIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy0yIG1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdy1ib2xkXCIga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc2l6ZT1cInNtXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVLZXlEb3duKGUpfSBvbkNoYW5nZT17KGUpID0+IG5ld0Z1bmMoaXRlbS5pZCwgZS50YXJnZXQudmFsdWUpfSAvPlxuXG4gICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVEZWxldGVDbGljayhlKX0gdmFsdWU9e2l0ZW0uaWR9IC8+XG5cbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgOiA8cD5UaGVyZSBhcmUgbm8gcHJvZHVjdHMgZm9yIHRoaXMgY3VzdG9tZXIuPC9wPlxuICAgICAgfVxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdldEludmVudG9yeURhdGEiLCJCYWRnZSIsIkxpc3RHcm91cCIsIkdldEN1c3RvbWVyUHJvZHVjdEZpbHRlcmVkSW52ZW50b3J5RGF0YSIsIkNsb3NlQnV0dG9uIiwiYXhpb3MiLCJEZWxldGVQcm9kdWN0IiwiRm9ybSIsImF1dGhIZWFkZXIiLCJQcm9kdWN0SW5mbyIsInN0YXRlIiwic2V0U3RhdGUiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwiaXRlbSIsInNldEl0ZW0iLCJkZWxldGVJRCIsInNldERlbGV0ZUlEIiwiZmV0Y2hEYXRhIiwiZGF0YSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVVcGRhdGUiLCJoZWFkZXJzIiwiZm9ybUZpZWxkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwibmV3RnVuYyIsImlkIiwicXR5IiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJhcyIsIkl0ZW0iLCJjbGFzc05hbWUiLCJkaXYiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJiciIsIkNvbnRyb2wiLCJzaXplIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductInfo.js\n"));

/***/ })

});