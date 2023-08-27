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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_DataInventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataInventory */ \"./src/services/DataInventory.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/CloseButton */ \"./node_modules/react-bootstrap/esm/CloseButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_DeleteProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DeleteProduct */ \"./src/services/DeleteProduct.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ProductInfo() {\n    _s();\n    // state to remember products.\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // set state for quantity.\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // set state for item object.\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // state to remember the item id to be used for deletion axios call.\n    const [deleteID, setDeleteID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // useEffect to GET filtered customer data for products.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_services_DataInventory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            setState(data);\n        };\n        fetchData();\n        return ()=>{};\n    }, []);\n    // useEffect to run the delete of a product if the value of deleteID has been changed from null.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (deleteID !== null) {\n            (0,_services_DeleteProduct__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(deleteID);\n            alert(\"Are you sure?\");\n            window.location.reload();\n        }\n    }, [\n        deleteID\n    ]);\n    // function to handle the click of the delete button for product.\n    const handleDeleteClick = (e)=>{\n        setDeleteID(e.target.value);\n    };\n    // async function to handle the PUT request when a quantity is updated.\n    const handleUpdate = async (e)=>{\n        const headers = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        let formField = new FormData();\n        formField.append(\"quantity\", quantity);\n        await (0,axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            method: \"put\",\n            url: \"http://127.0.0.1:8000/prod_update/\",\n            data: item,\n            headers: headers\n        }).then((response)=>{});\n    };\n    // function to handle the \"ENTER\" button press when quantity is updated.\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleUpdate();\n        }\n    };\n    // generic function to set the item object in state when quantity is updated.\n    const newFunc = (id, qty)=>{\n        setItem({\n            id: id,\n            quantity: qty\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this),\n                    state.length > 0 ? state.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-8 m-3\",\n                                    \"data-spy\": \"scroll\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        as: \"ul\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                                            as: \"li\",\n                                            className: \"d-flex justify-content-between align-items-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"ms-2 me-auto\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"fw-bold\",\n                                                            children: item.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 27\n                                                        }, this),\n                                                        item.description\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                                    className: \"w-50 text-center\",\n                                                    size: \"sm\",\n                                                    type: \"number\",\n                                                    placeholder: item.quantity,\n                                                    onKeyDown: (e)=>handleKeyDown(e),\n                                                    onChange: (e)=>newFunc(item.id, e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                    type: \"button\",\n                                                    onClick: (e)=>handleDeleteClick(e),\n                                                    value: item.id\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 21\n                                    }, this)\n                                }, item.id, false, {\n                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"There are no products for this customer.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 108,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ProductInfo, \"zj0gdIHdMVTbUc6quiDz5ogPQuk=\");\n_c = ProductInfo;\nvar _c;\n$RefreshReg$(_c, \"ProductInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUQsa0JBQWtCQztvREFBSUUsT0FBT2IsS0FBSzBCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQVpsRDFCLEtBQUswQixFQUFFOzs7Ozs4Q0FpQjFDLDhEQUFDRTtvQ0FBSUMsV0FBVTs7Ozs7Ozs7b0JBR3JCLG1CQUNFLDhEQUFDaUI7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtHQXhHd0JuRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SW5mby5qcz81YWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR2V0SW52ZW50b3J5RGF0YSBmcm9tIFwiLi4vc2VydmljZXMvRGF0YUludmVudG9yeVwiO1xuaW1wb3J0IExpc3RHcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvTGlzdEdyb3VwJztcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2xvc2VCdXR0b24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBEZWxldGVQcm9kdWN0IGZyb20gXCIuLi9zZXJ2aWNlcy9EZWxldGVQcm9kdWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgYXV0aEhlYWRlciBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5oZWFkZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RJbmZvKCkge1xuICAvLyBzdGF0ZSB0byByZW1lbWJlciBwcm9kdWN0cy5cbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gc2V0IHN0YXRlIGZvciBxdWFudGl0eS5cbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBzZXQgc3RhdGUgZm9yIGl0ZW0gb2JqZWN0LlxuICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgLy8gc3RhdGUgdG8gcmVtZW1iZXIgdGhlIGl0ZW0gaWQgdG8gYmUgdXNlZCBmb3IgZGVsZXRpb24gYXhpb3MgY2FsbC5cbiAgY29uc3QgW2RlbGV0ZUlELCBzZXREZWxldGVJRF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyB1c2VFZmZlY3QgdG8gR0VUIGZpbHRlcmVkIGN1c3RvbWVyIGRhdGEgZm9yIHByb2R1Y3RzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBHZXRJbnZlbnRvcnlEYXRhKCk7XG4gICAgICBzZXRTdGF0ZShkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgcmV0dXJuICgpID0+IHsgfVxuICB9LCBbXSlcblxuICAvLyB1c2VFZmZlY3QgdG8gcnVuIHRoZSBkZWxldGUgb2YgYSBwcm9kdWN0IGlmIHRoZSB2YWx1ZSBvZiBkZWxldGVJRCBoYXMgYmVlbiBjaGFuZ2VkIGZyb20gbnVsbC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGVsZXRlSUQgIT09IG51bGwpIHtcbiAgICAgIERlbGV0ZVByb2R1Y3QoZGVsZXRlSUQpO1xuICAgICAgYWxlcnQoXCJBcmUgeW91IHN1cmU/XCIpXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9LCBbZGVsZXRlSURdKVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgY2xpY2sgb2YgdGhlIGRlbGV0ZSBidXR0b24gZm9yIHByb2R1Y3QuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKGUpID0+IHtcbiAgICBzZXREZWxldGVJRChlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICAvLyBhc3luYyBmdW5jdGlvbiB0byBoYW5kbGUgdGhlIFBVVCByZXF1ZXN0IHdoZW4gYSBxdWFudGl0eSBpcyB1cGRhdGVkLlxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBhdXRoSGVhZGVyKClcbiAgICBsZXQgZm9ybUZpZWxkID0gbmV3IEZvcm1EYXRhKClcblxuICAgIGZvcm1GaWVsZC5hcHBlbmQoJ3F1YW50aXR5JywgcXVhbnRpdHkpXG5cbiAgICBhd2FpdCBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgdXJsOiBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Byb2RfdXBkYXRlL2AsXG4gICAgICBkYXRhOiBpdGVtLFxuICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgfSlcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgXCJFTlRFUlwiIGJ1dHRvbiBwcmVzcyB3aGVuIHF1YW50aXR5IGlzIHVwZGF0ZWQuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaGFuZGxlVXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2VuZXJpYyBmdW5jdGlvbiB0byBzZXQgdGhlIGl0ZW0gb2JqZWN0IGluIHN0YXRlIHdoZW4gcXVhbnRpdHkgaXMgdXBkYXRlZC5cbiAgY29uc3QgbmV3RnVuYyA9IChpZCwgcXR5KSA9PiB7XG4gICAgc2V0SXRlbSh7XG4gICAgICBpZDogaWQsXG4gICAgICBxdWFudGl0eTogcXR5XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0yJz48L2Rpdj5cbiAgICAgICAgICB7c3RhdGUubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBzdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggbS0zXCIga2V5PXtpdGVtLmlkfSBkYXRhLXNweT1cInNjcm9sbFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwIGFzPVwidWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gYXM9XCJsaVwiIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy0yIG1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+e2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGNsYXNzTmFtZT1cInctNTAgdGV4dC1jZW50ZXJcIiBzaXplPVwic21cIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9e2l0ZW0ucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IGhhbmRsZUtleURvd24oZSl9IG9uQ2hhbmdlPXsoZSkgPT4gbmV3RnVuYyhpdGVtLmlkLCBlLnRhcmdldC52YWx1ZSl9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpID0+IGhhbmRsZURlbGV0ZUNsaWNrKGUpfSB2YWx1ZT17aXRlbS5pZH0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTInPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiA8cD5UaGVyZSBhcmUgbm8gcHJvZHVjdHMgZm9yIHRoaXMgY3VzdG9tZXIuPC9wPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdldEludmVudG9yeURhdGEiLCJMaXN0R3JvdXAiLCJDbG9zZUJ1dHRvbiIsImF4aW9zIiwiRGVsZXRlUHJvZHVjdCIsIkZvcm0iLCJhdXRoSGVhZGVyIiwiUHJvZHVjdEluZm8iLCJzdGF0ZSIsInNldFN0YXRlIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsIml0ZW0iLCJzZXRJdGVtIiwiZGVsZXRlSUQiLCJzZXREZWxldGVJRCIsImZldGNoRGF0YSIsImRhdGEiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVVcGRhdGUiLCJoZWFkZXJzIiwiZm9ybUZpZWxkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwibmV3RnVuYyIsImlkIiwicXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJkYXRhLXNweSIsImFzIiwiSXRlbSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImJyIiwiQ29udHJvbCIsInNpemUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbktleURvd24iLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductInfo.js\n"));

/***/ })

});