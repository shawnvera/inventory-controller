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

/***/ "./src/components/ProductInfo.js":
/*!***************************************!*\
  !*** ./src/components/ProductInfo.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_DataInventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataInventory */ \"./src/services/DataInventory.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/CloseButton */ \"./node_modules/react-bootstrap/esm/CloseButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_DeleteProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DeleteProduct */ \"./src/services/DeleteProduct.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ProductInfo() {\n    _s();\n    // state to remember products.\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // set state for quantity.\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // set state for item object.\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // state to remember the item id to be used for deletion axios call.\n    const [deleteID, setDeleteID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // useEffect to GET filtered customer data for products.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_services_DataInventory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            setState(data);\n        };\n        fetchData();\n        return ()=>{};\n    }, []);\n    // useEffect to run the delete of a product if the value of deleteID has been changed from null.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (deleteID !== null) {\n            (0,_services_DeleteProduct__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(deleteID);\n            window.location.reload();\n        }\n    }, [\n        deleteID\n    ]);\n    // function to handle the click of the delete button for product.\n    const handleDeleteClick = (e)=>{\n        setDeleteID(e.target.value);\n    };\n    // async function to handle the PUT request when a quantity is updated.\n    const handleUpdate = async (e)=>{\n        const headers = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        let formField = new FormData();\n        formField.append(\"quantity\", quantity);\n        await (0,axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            method: \"put\",\n            url: \"http://127.0.0.1:8000/prod_update/\",\n            data: item,\n            headers: headers\n        }).then((response)=>{});\n    };\n    // function to handle the \"ENTER\" button press when quantity is updated.\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleUpdate();\n        }\n    };\n    // generic function to set the item object in state when quantity is updated.\n    const newFunc = (id, qty)=>{\n        setItem({\n            id: id,\n            quantity: qty\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this),\n                    state.length > 0 ? state.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-4 m-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        as: \"ul\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                                            as: \"li\",\n                                            className: \"d-flex justify-content-between align-items-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"ms-2 me-auto\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"fw-bold\",\n                                                            children: item.name\n                                                        }, index, false, {\n                                                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                            lineNumber: 90,\n                                                            columnNumber: 27\n                                                        }, this),\n                                                        item.description\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                                    className: \"w-10 text-center m-3\",\n                                                    size: \"lg\",\n                                                    type: \"number\",\n                                                    placeholder: item.quantity,\n                                                    onKeyDown: (e)=>handleKeyDown(e),\n                                                    onChange: (e)=>newFunc(item.id, e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                    type: \"button\",\n                                                    onClick: (e)=>handleDeleteClick(e),\n                                                    value: item.id\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"There are no products for this customer.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 107,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ProductInfo, \"zj0gdIHdMVTbUc6quiDz5ogPQuk=\");\n_c = ProductInfo;\nvar _c;\n$RefreshReg$(_c, \"ProductInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9aLEtBQUt5QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUtyRiw4REFBQ0U7b0NBQUlDLFdBQVU7Ozs7Ozs7O29CQUdyQixtQkFDRSw4REFBQ2dCO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakI7R0F2R3dCakQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEluZm8uanM/NWFhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdldEludmVudG9yeURhdGEgZnJvbSBcIi4uL3NlcnZpY2VzL0RhdGFJbnZlbnRvcnlcIjtcbmltcG9ydCBMaXN0R3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0xpc3RHcm91cCc7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgRGVsZXRlUHJvZHVjdCBmcm9tIFwiLi4vc2VydmljZXMvRGVsZXRlUHJvZHVjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguaGVhZGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0SW5mbygpIHtcbiAgLy8gc3RhdGUgdG8gcmVtZW1iZXIgcHJvZHVjdHMuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIC8vIHNldCBzdGF0ZSBmb3IgcXVhbnRpdHkuXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuICAvLyBzZXQgc3RhdGUgZm9yIGl0ZW0gb2JqZWN0LlxuICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgLy8gc3RhdGUgdG8gcmVtZW1iZXIgdGhlIGl0ZW0gaWQgdG8gYmUgdXNlZCBmb3IgZGVsZXRpb24gYXhpb3MgY2FsbC5cbiAgY29uc3QgW2RlbGV0ZUlELCBzZXREZWxldGVJRF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyB1c2VFZmZlY3QgdG8gR0VUIGZpbHRlcmVkIGN1c3RvbWVyIGRhdGEgZm9yIHByb2R1Y3RzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBHZXRJbnZlbnRvcnlEYXRhKCk7XG4gICAgICBzZXRTdGF0ZShkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgcmV0dXJuICgpID0+IHsgfVxuICB9LCBbXSlcblxuICAvLyB1c2VFZmZlY3QgdG8gcnVuIHRoZSBkZWxldGUgb2YgYSBwcm9kdWN0IGlmIHRoZSB2YWx1ZSBvZiBkZWxldGVJRCBoYXMgYmVlbiBjaGFuZ2VkIGZyb20gbnVsbC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGVsZXRlSUQgIT09IG51bGwpIHtcbiAgICAgIERlbGV0ZVByb2R1Y3QoZGVsZXRlSUQpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgfSwgW2RlbGV0ZUlEXSlcblxuICAvLyBmdW5jdGlvbiB0byBoYW5kbGUgdGhlIGNsaWNrIG9mIHRoZSBkZWxldGUgYnV0dG9uIGZvciBwcm9kdWN0LlxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9IChlKSA9PiB7XG4gICAgc2V0RGVsZXRlSUQoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgLy8gYXN5bmMgZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBQVVQgcmVxdWVzdCB3aGVuIGEgcXVhbnRpdHkgaXMgdXBkYXRlZC5cbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gYXV0aEhlYWRlcigpXG4gICAgbGV0IGZvcm1GaWVsZCA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICBmb3JtRmllbGQuYXBwZW5kKCdxdWFudGl0eScsIHF1YW50aXR5KVxuXG4gICAgYXdhaXQgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgIHVybDogYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcm9kX3VwZGF0ZS9gLFxuICAgICAgZGF0YTogaXRlbSxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIH0pXG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBoYW5kbGUgdGhlIFwiRU5URVJcIiBidXR0b24gcHJlc3Mgd2hlbiBxdWFudGl0eSBpcyB1cGRhdGVkLlxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGhhbmRsZVVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdlbmVyaWMgZnVuY3Rpb24gdG8gc2V0IHRoZSBpdGVtIG9iamVjdCBpbiBzdGF0ZSB3aGVuIHF1YW50aXR5IGlzIHVwZGF0ZWQuXG4gIGNvbnN0IG5ld0Z1bmMgPSAoaWQsIHF0eSkgPT4ge1xuICAgIHNldEl0ZW0oe1xuICAgICAgaWQ6IGlkLFxuICAgICAgcXVhbnRpdHk6IHF0eVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+PC9kaXY+XG4gICAgICAgICAge3N0YXRlLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgc3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IG0tM1wiPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwIGFzPVwidWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gYXM9XCJsaVwiIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy0yIG1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdy1ib2xkXCIga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGNsYXNzTmFtZT1cInctMTAgdGV4dC1jZW50ZXIgbS0zXCIgc2l6ZT1cImxnXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPXtpdGVtLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVLZXlEb3duKGUpfSBvbkNoYW5nZT17KGUpID0+IG5ld0Z1bmMoaXRlbS5pZCwgZS50YXJnZXQudmFsdWUpfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVEZWxldGVDbGljayhlKX0gdmFsdWU9e2l0ZW0uaWR9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogPHA+VGhlcmUgYXJlIG5vIHByb2R1Y3RzIGZvciB0aGlzIGN1c3RvbWVyLjwvcD5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHZXRJbnZlbnRvcnlEYXRhIiwiTGlzdEdyb3VwIiwiQ2xvc2VCdXR0b24iLCJheGlvcyIsIkRlbGV0ZVByb2R1Y3QiLCJGb3JtIiwiYXV0aEhlYWRlciIsIlByb2R1Y3RJbmZvIiwic3RhdGUiLCJzZXRTdGF0ZSIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJpdGVtIiwic2V0SXRlbSIsImRlbGV0ZUlEIiwic2V0RGVsZXRlSUQiLCJmZXRjaERhdGEiLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVEZWxldGVDbGljayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVVwZGF0ZSIsImhlYWRlcnMiLCJmb3JtRmllbGQiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJuZXdGdW5jIiwiaWQiLCJxdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsImFzIiwiSXRlbSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImJyIiwiQ29udHJvbCIsInNpemUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbktleURvd24iLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductInfo.js\n"));

/***/ })

});