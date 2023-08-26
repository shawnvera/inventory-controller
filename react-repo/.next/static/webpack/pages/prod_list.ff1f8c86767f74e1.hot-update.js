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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_DataInventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DataInventory */ \"./src/services/DataInventory.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var _services_CustomerProductFilteredInventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CustomerProductFilteredInventory */ \"./src/services/CustomerProductFilteredInventory.js\");\n/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/CloseButton */ \"./node_modules/react-bootstrap/esm/CloseButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/DeleteProduct */ \"./src/services/DeleteProduct.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction ProductInfo() {\n    _s();\n    // state to remember products.\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // state to remember the item id to be used for deletion axios call.\n    const [deleteID, setDeleteID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // useEffect to GET filtered customer data for products.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_services_DataInventory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            setState(data);\n        };\n        fetchData();\n        return ()=>{};\n    }, []);\n    // useEffect to run the delete of a product if the value of deleteID has been changed from null.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (deleteID !== null) {\n            (0,_services_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(deleteID);\n            window.location.reload();\n        }\n    }, [\n        deleteID\n    ]);\n    // function to handle the click of the delete button for product.\n    const handleDeleteClick = (e)=>{\n        setDeleteID(e.target.value);\n    };\n    const handleUpdate = async (e)=>{\n        let formField = new FormData();\n        // formField.append('name', name)\n        // formField.append('description', description)\n        formField.append(\"quantity\", quantity);\n        // formField.append('customer', customer)\n        await (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            method: \"put\",\n            url: \"http://127.0.0.1:8000/prod_destroy/int:pk\",\n            data: formField\n        }).then((response)=>{\n            window.location.reload();\n        });\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleUpdate();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: state.length > 0 ? state.map((item, index)=>{\n            let ID;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    as: \"ul\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                        as: \"li\",\n                        className: \"d-flex justify-content-between align-items-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ms-2 me-auto\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fw-bold\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 21\n                                    }, this),\n                                    item.description\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 79,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 83,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n                                className: \"text-center\",\n                                size: \"sm\",\n                                type: \"number\",\n                                value: item.quantity,\n                                placeholder: item.id,\n                                onKeyDown: (e)=>handleKeyDown(e),\n                                onChange: (e)=>setQuantity(e.target.placeholder)\n                            }, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 85,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                type: \"button\",\n                                onClick: (e)=>handleDeleteClick(e),\n                                value: item.id\n                            }, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 87,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                    lineNumber: 77,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false);\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"There are no products for this customer.\"\n        }, void 0, false, {\n            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n            lineNumber: 94,\n            columnNumber: 17\n        }, this)\n    }, void 0, false);\n}\n_s(ProductInfo, \"N7aAdPn87yZyTt2fKjiowRIf3+A=\");\n_c = ProductInfo;\nvar _c;\n$RefreshReg$(_c, \"ProductInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SW5mby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2U7QUFDYTtBQUNmO0FBQ1E7QUFDaUQ7QUFDN0M7QUFDNUI7QUFDNEI7QUFDZDtBQUd6QixTQUFTVzs7SUFDdEIsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV6QyxvRUFBb0U7SUFDcEUsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV6Qyx3REFBd0Q7SUFDeERDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdCLFlBQVk7WUFDaEIsTUFBTUMsT0FBTyxNQUFNaEIsbUVBQWdCQTtZQUNuQ1UsU0FBU007UUFDWDtRQUNBRDtRQUNBLE9BQU8sS0FBUTtJQUNqQixHQUFHLEVBQUU7SUFHTCxnR0FBZ0c7SUFDaEdoQixnREFBU0EsQ0FBQztRQUNSLElBQUljLGFBQWEsTUFBTTtZQUNyQlAsbUVBQWFBLENBQUNPO1lBQ2RJLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUN4QjtJQUNGLEdBQUc7UUFBQ047S0FBUztJQUViLGlFQUFpRTtJQUNqRSxNQUFNTyxvQkFBb0IsQ0FBQ0M7UUFDekJQLFlBQVlPLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUIsSUFBSUksWUFBWSxJQUFJQztRQUVwQixpQ0FBaUM7UUFDakMsK0NBQStDO1FBQy9DRCxVQUFVRSxNQUFNLENBQUMsWUFBWWhCO1FBQzdCLHlDQUF5QztRQUV6QyxNQUFNTixpREFBS0EsQ0FBQztZQUNSdUIsUUFBUTtZQUNSQyxLQUFNO1lBQ05iLE1BQU1TO1FBQ1YsR0FBR0ssSUFBSSxDQUFDLENBQUNDO1lBQ0xkLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUMxQjtJQUNKO0lBR0UsTUFBTWEsZ0JBQWdCLENBQUNYO1FBQ3pCLElBQUlBLEVBQUVZLEdBQUcsS0FBSyxTQUFTO1lBQ3JCVDtRQUNGO0lBQ0U7SUFFQSxxQkFDRTtrQkFDR2YsTUFBTXlCLE1BQU0sR0FBRyxJQUNkekIsTUFBTTBCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztZQUNmLElBQUlDO1lBQ0oscUJBQ0U7MEJBQ0UsNEVBQUNwQyxpRUFBU0E7b0JBQUNxQyxJQUFHOzhCQUNaLDRFQUFDckMsc0VBQWM7d0JBQUNxQyxJQUFHO3dCQUFpQkUsV0FBVTs7MENBQzVDLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFJRCxXQUFVO2tEQUFXTCxLQUFLTyxJQUFJOzs7Ozs7b0NBQ2xDUCxLQUFLUSxXQUFXOzs7Ozs7OzBDQUVuQiw4REFBQ0M7Ozs7OzBDQUVELDhEQUFDdEMsb0VBQVk7Z0NBQUNrQyxXQUFVO2dDQUFjTSxNQUFLO2dDQUFLQyxNQUFLO2dDQUFTekIsT0FBT2EsS0FBS3pCLFFBQVE7Z0NBQUVzQyxhQUFhYixLQUFLYyxFQUFFO2dDQUFFQyxXQUFXLENBQUM5QixJQUFNVyxjQUFjWDtnQ0FDMUkrQixVQUFVLENBQUMvQixJQUFNVCxZQUFZUyxFQUFFQyxNQUFNLENBQUMyQixXQUFXOzs7Ozs7MENBQ2pELDhEQUFDN0MsbUVBQVdBO2dDQUFDNEMsTUFBSztnQ0FBU0ssU0FBUyxDQUFDaEMsSUFBSUQsa0JBQWtCQztnQ0FBSUUsT0FBT2EsS0FBS2MsRUFBRTs7Ozs7Ozt1QkFUbERiOzs7Ozs7Ozs7OztRQWU3QixtQkFDQSw4REFBQ2lCO3NCQUFFOzs7Ozs7O0FBSVg7R0FyRmdCOUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEluZm8uanM/NWFhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdldEludmVudG9yeURhdGEgZnJvbSBcIi4uL3NlcnZpY2VzL0RhdGFJbnZlbnRvcnlcIjtcbmltcG9ydCBCYWRnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvQmFkZ2UnO1xuaW1wb3J0IExpc3RHcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvTGlzdEdyb3VwJztcbmltcG9ydCBHZXRDdXN0b21lclByb2R1Y3RGaWx0ZXJlZEludmVudG9yeURhdGEgZnJvbSBcIi4uL3NlcnZpY2VzL0N1c3RvbWVyUHJvZHVjdEZpbHRlcmVkSW52ZW50b3J5XCI7XG5pbXBvcnQgQ2xvc2VCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IFxuaW1wb3J0IERlbGV0ZVByb2R1Y3QgZnJvbSBcIi4uL3NlcnZpY2VzL0RlbGV0ZVByb2R1Y3RcIjtcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0SW5mbygpIHtcbiAgLy8gc3RhdGUgdG8gcmVtZW1iZXIgcHJvZHVjdHMuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gc3RhdGUgdG8gcmVtZW1iZXIgdGhlIGl0ZW0gaWQgdG8gYmUgdXNlZCBmb3IgZGVsZXRpb24gYXhpb3MgY2FsbC5cbiAgY29uc3QgW2RlbGV0ZUlELCBzZXREZWxldGVJRF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyB1c2VFZmZlY3QgdG8gR0VUIGZpbHRlcmVkIGN1c3RvbWVyIGRhdGEgZm9yIHByb2R1Y3RzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBHZXRJbnZlbnRvcnlEYXRhKCk7XG4gICAgICBzZXRTdGF0ZShkYXRhKTtcbiAgICB9XG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgcmV0dXJuICgpID0+IHsgfVxuICB9LCBbXSlcblxuXG4gIC8vIHVzZUVmZmVjdCB0byBydW4gdGhlIGRlbGV0ZSBvZiBhIHByb2R1Y3QgaWYgdGhlIHZhbHVlIG9mIGRlbGV0ZUlEIGhhcyBiZWVuIGNoYW5nZWQgZnJvbSBudWxsLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWxldGVJRCAhPT0gbnVsbCkge1xuICAgICAgRGVsZXRlUHJvZHVjdChkZWxldGVJRCk7IFxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0gXG4gIH0sIFtkZWxldGVJRF0pXG5cbiAgLy8gZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBjbGljayBvZiB0aGUgZGVsZXRlIGJ1dHRvbiBmb3IgcHJvZHVjdC5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHNldERlbGV0ZUlEKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgbGV0IGZvcm1GaWVsZCA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICAvLyBmb3JtRmllbGQuYXBwZW5kKCduYW1lJywgbmFtZSlcbiAgICAvLyBmb3JtRmllbGQuYXBwZW5kKCdkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uKVxuICAgIGZvcm1GaWVsZC5hcHBlbmQoJ3F1YW50aXR5JywgcXVhbnRpdHkpXG4gICAgLy8gZm9ybUZpZWxkLmFwcGVuZCgnY3VzdG9tZXInLCBjdXN0b21lcilcblxuICAgIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgICAgdXJsOiBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Byb2RfZGVzdHJveS9pbnQ6cGtgLFxuICAgICAgICBkYXRhOiBmb3JtRmllbGRcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcbn1cblxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gIGhhbmRsZVVwZGF0ZSgpO1xufVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3N0YXRlLmxlbmd0aCA+IDAgP1xuICAgICAgICBzdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IElEO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8TGlzdEdyb3VwIGFzPVwidWxcIj5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gYXM9XCJsaVwiIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy0yIG1lLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdy1ib2xkXCI+e2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHNpemU9XCJzbVwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17aXRlbS5xdWFudGl0eX0gcGxhY2Vob2xkZXI9e2l0ZW0uaWR9IG9uS2V5RG93bj17KGUpID0+IGhhbmRsZUtleURvd24oZSl9IFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWFudGl0eShlLnRhcmdldC5wbGFjZWhvbGRlcil9IC8+XG4gICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKT0+aGFuZGxlRGVsZXRlQ2xpY2soZSl9IHZhbHVlPXtpdGVtLmlkfS8+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogPHA+VGhlcmUgYXJlIG5vIHByb2R1Y3RzIGZvciB0aGlzIGN1c3RvbWVyLjwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH0iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2V0SW52ZW50b3J5RGF0YSIsIkJhZGdlIiwiTGlzdEdyb3VwIiwiR2V0Q3VzdG9tZXJQcm9kdWN0RmlsdGVyZWRJbnZlbnRvcnlEYXRhIiwiQ2xvc2VCdXR0b24iLCJheGlvcyIsIkRlbGV0ZVByb2R1Y3QiLCJGb3JtIiwiUHJvZHVjdEluZm8iLCJzdGF0ZSIsInNldFN0YXRlIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImRlbGV0ZUlEIiwic2V0RGVsZXRlSUQiLCJmZXRjaERhdGEiLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVEZWxldGVDbGljayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVVwZGF0ZSIsImZvcm1GaWVsZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiaGFuZGxlS2V5RG93biIsImtleSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIklEIiwiYXMiLCJJdGVtIiwiY2xhc3NOYW1lIiwiZGl2IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYnIiLCJDb250cm9sIiwic2l6ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwib25LZXlEb3duIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductInfo.js\n"));

/***/ })

});