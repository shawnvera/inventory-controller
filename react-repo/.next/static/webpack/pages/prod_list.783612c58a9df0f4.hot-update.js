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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_DataInventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DataInventory */ \"./src/services/DataInventory.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var _services_CustomerProductFilteredInventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CustomerProductFilteredInventory */ \"./src/services/CustomerProductFilteredInventory.js\");\n/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/CloseButton */ \"./node_modules/react-bootstrap/esm/CloseButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/DeleteProduct */ \"./src/services/DeleteProduct.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction ProductInfo() {\n    _s();\n    // state to remember products.\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // state to remember the item id to be used for deletion axios call.\n    const [deleteID, setDeleteID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // useEffect to GET filtered customer data for products.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_services_DataInventory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            setState(data);\n        };\n        fetchData();\n        return ()=>{};\n    }, []);\n    // useEffect to run the delete of a product if the value of deleteID has been changed from null.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (deleteID !== null) {\n            (0,_services_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(deleteID);\n            window.location.reload();\n        }\n    }, [\n        deleteID\n    ]);\n    // function to handle the click of the delete button for product.\n    const handleDeleteClick = (e)=>{\n        setDeleteID(e.target.value);\n    };\n    const handleUpdate = async (e)=>{\n        let formField = new FormData();\n        // formField.append('name', name)\n        // formField.append('description', description)\n        formField.append(\"quantity\", quantity);\n        // formField.append('customer', customer)\n        await (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            method: \"put\",\n            url: \"http://127.0.0.1:8000/prod_destroy/\",\n            data: formField\n        }).then((response)=>{\n            window.location.reload();\n        });\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleUpdate();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: state.length > 0 ? state.map((item, index)=>{\n            let ID;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    as: \"ul\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                        as: \"li\",\n                        className: \"d-flex justify-content-between align-items-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ms-2 me-auto\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fw-bold\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 21\n                                    }, this),\n                                    item.description\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 79,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 83,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n                                className: \"text-center\",\n                                size: \"sm\",\n                                type: \"number\",\n                                placeholder: item.quantity,\n                                onKeyDown: handleKeyDown,\n                                onChange: (e)=>setQuantity(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 85,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                type: \"button\",\n                                onClick: (e)=>handleDeleteClick(e),\n                                value: item.id\n                            }, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 87,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                    lineNumber: 77,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false);\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"There are no products for this customer.\"\n        }, void 0, false, {\n            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n            lineNumber: 94,\n            columnNumber: 17\n        }, this)\n    }, void 0, false);\n}\n_s(ProductInfo, \"N7aAdPn87yZyTt2fKjiowRIf3+A=\");\n_c = ProductInfo;\nvar _c;\n$RefreshReg$(_c, \"ProductInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SW5mby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2U7QUFDYTtBQUNmO0FBQ1E7QUFDaUQ7QUFDN0M7QUFDNUI7QUFDNEI7QUFDZDtBQUd6QixTQUFTVzs7SUFDdEIsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUV6QyxvRUFBb0U7SUFDcEUsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUV6Qyx3REFBd0Q7SUFDeERDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdCLFlBQVk7WUFDaEIsTUFBTUMsT0FBTyxNQUFNaEIsbUVBQWdCQTtZQUNuQ1UsU0FBU007UUFDWDtRQUNBRDtRQUNBLE9BQU8sS0FBUTtJQUNqQixHQUFHLEVBQUU7SUFHTCxnR0FBZ0c7SUFDaEdoQixnREFBU0EsQ0FBQztRQUNSLElBQUljLGFBQWEsTUFBTTtZQUNyQlAsbUVBQWFBLENBQUNPO1lBQ2RJLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUN4QjtJQUNGLEdBQUc7UUFBQ047S0FBUztJQUViLGlFQUFpRTtJQUNqRSxNQUFNTyxvQkFBb0IsQ0FBQ0M7UUFDekJQLFlBQVlPLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUIsSUFBSUksWUFBWSxJQUFJQztRQUVwQixpQ0FBaUM7UUFDakMsK0NBQStDO1FBQy9DRCxVQUFVRSxNQUFNLENBQUMsWUFBWWhCO1FBQzdCLHlDQUF5QztRQUV6QyxNQUFNTixpREFBS0EsQ0FBQztZQUNSdUIsUUFBUTtZQUNSQyxLQUFLO1lBQ0xiLE1BQU1TO1FBQ1YsR0FBR0ssSUFBSSxDQUFDLENBQUNDO1lBQ0xkLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtRQUMxQjtJQUNKO0lBR0UsTUFBTWEsZ0JBQWdCLENBQUNYO1FBQ3pCLElBQUlBLEVBQUVZLEdBQUcsS0FBSyxTQUFTO1lBQ3JCVDtRQUNGO0lBQ0U7SUFFQSxxQkFDRTtrQkFDR2YsTUFBTXlCLE1BQU0sR0FBRyxJQUNkekIsTUFBTTBCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztZQUNmLElBQUlDO1lBQ0oscUJBQ0U7MEJBQ0UsNEVBQUNwQyxpRUFBU0E7b0JBQUNxQyxJQUFHOzhCQUNaLDRFQUFDckMsc0VBQWM7d0JBQUNxQyxJQUFHO3dCQUFpQkUsV0FBVTs7MENBQzVDLDhEQUFDQztnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFJRCxXQUFVO2tEQUFXTCxLQUFLTyxJQUFJOzs7Ozs7b0NBQ2xDUCxLQUFLUSxXQUFXOzs7Ozs7OzBDQUVuQiw4REFBQ0M7Ozs7OzBDQUVELDhEQUFDdEMsb0VBQVk7Z0NBQUNrQyxXQUFVO2dDQUFjTSxNQUFLO2dDQUFLQyxNQUFLO2dDQUFTQyxhQUFhYixLQUFLekIsUUFBUTtnQ0FBRXVDLFdBQVdsQjtnQ0FDckdtQixVQUFVLENBQUM5QixJQUFNVCxZQUFZUyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OzswQ0FDM0MsOERBQUNuQixtRUFBV0E7Z0NBQUM0QyxNQUFLO2dDQUFTSSxTQUFTLENBQUMvQixJQUFJRCxrQkFBa0JDO2dDQUFJRSxPQUFPYSxLQUFLaUIsRUFBRTs7Ozs7Ozt1QkFUbERoQjs7Ozs7Ozs7Ozs7UUFlN0IsbUJBQ0EsOERBQUNpQjtzQkFBRTs7Ozs7OztBQUlYO0dBckZnQjlDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJbmZvLmpzPzVhYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHZXRJbnZlbnRvcnlEYXRhIGZyb20gXCIuLi9zZXJ2aWNlcy9EYXRhSW52ZW50b3J5XCI7XG5pbXBvcnQgQmFkZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0JhZGdlJztcbmltcG9ydCBMaXN0R3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0xpc3RHcm91cCc7XG5pbXBvcnQgR2V0Q3VzdG9tZXJQcm9kdWN0RmlsdGVyZWRJbnZlbnRvcnlEYXRhIGZyb20gXCIuLi9zZXJ2aWNlcy9DdXN0b21lclByb2R1Y3RGaWx0ZXJlZEludmVudG9yeVwiO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnOyBcbmltcG9ydCBEZWxldGVQcm9kdWN0IGZyb20gXCIuLi9zZXJ2aWNlcy9EZWxldGVQcm9kdWN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEluZm8oKSB7XG4gIC8vIHN0YXRlIHRvIHJlbWVtYmVyIHByb2R1Y3RzLlxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIHN0YXRlIHRvIHJlbWVtYmVyIHRoZSBpdGVtIGlkIHRvIGJlIHVzZWQgZm9yIGRlbGV0aW9uIGF4aW9zIGNhbGwuXG4gIGNvbnN0IFtkZWxldGVJRCwgc2V0RGVsZXRlSURdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgLy8gdXNlRWZmZWN0IHRvIEdFVCBmaWx0ZXJlZCBjdXN0b21lciBkYXRhIGZvciBwcm9kdWN0cy5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgR2V0SW52ZW50b3J5RGF0YSgpO1xuICAgICAgc2V0U3RhdGUoZGF0YSk7XG4gICAgfVxuICAgIGZldGNoRGF0YSgpO1xuICAgIHJldHVybiAoKSA9PiB7IH1cbiAgfSwgW10pXG5cblxuICAvLyB1c2VFZmZlY3QgdG8gcnVuIHRoZSBkZWxldGUgb2YgYSBwcm9kdWN0IGlmIHRoZSB2YWx1ZSBvZiBkZWxldGVJRCBoYXMgYmVlbiBjaGFuZ2VkIGZyb20gbnVsbC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGVsZXRlSUQgIT09IG51bGwpIHtcbiAgICAgIERlbGV0ZVByb2R1Y3QoZGVsZXRlSUQpOyBcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9IFxuICB9LCBbZGVsZXRlSURdKVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgY2xpY2sgb2YgdGhlIGRlbGV0ZSBidXR0b24gZm9yIHByb2R1Y3QuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKGUpID0+IHtcbiAgICBzZXREZWxldGVJRChlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSBhc3luYyAoZSkgPT4ge1xuICAgIGxldCBmb3JtRmllbGQgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgLy8gZm9ybUZpZWxkLmFwcGVuZCgnbmFtZScsIG5hbWUpXG4gICAgLy8gZm9ybUZpZWxkLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbilcbiAgICBmb3JtRmllbGQuYXBwZW5kKCdxdWFudGl0eScsIHF1YW50aXR5KVxuICAgIC8vIGZvcm1GaWVsZC5hcHBlbmQoJ2N1c3RvbWVyJywgY3VzdG9tZXIpXG5cbiAgICBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcm9kX2Rlc3Ryb3kvJyxcbiAgICAgICAgZGF0YTogZm9ybUZpZWxkXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pXG59XG5cblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcbmlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICBoYW5kbGVVcGRhdGUoKTtcbn1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzdGF0ZS5sZW5ndGggPiAwID9cbiAgICAgICAgc3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBJRDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPExpc3RHcm91cCBhcz1cInVsXCI+XG4gICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGFzPVwibGlcIiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtMiBtZS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnctYm9sZFwiPntpdGVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzaXplPVwic21cIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9e2l0ZW0ucXVhbnRpdHl9IG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn0gXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1YW50aXR5KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGUpPT5oYW5kbGVEZWxldGVDbGljayhlKX0gdmFsdWU9e2l0ZW0uaWR9Lz5cbiAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiA8cD5UaGVyZSBhcmUgbm8gcHJvZHVjdHMgZm9yIHRoaXMgY3VzdG9tZXIuPC9wPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHZXRJbnZlbnRvcnlEYXRhIiwiQmFkZ2UiLCJMaXN0R3JvdXAiLCJHZXRDdXN0b21lclByb2R1Y3RGaWx0ZXJlZEludmVudG9yeURhdGEiLCJDbG9zZUJ1dHRvbiIsImF4aW9zIiwiRGVsZXRlUHJvZHVjdCIsIkZvcm0iLCJQcm9kdWN0SW5mbyIsInN0YXRlIiwic2V0U3RhdGUiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwiZGVsZXRlSUQiLCJzZXREZWxldGVJRCIsImZldGNoRGF0YSIsImRhdGEiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZURlbGV0ZUNsaWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVXBkYXRlIiwiZm9ybUZpZWxkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiSUQiLCJhcyIsIkl0ZW0iLCJjbGFzc05hbWUiLCJkaXYiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJiciIsIkNvbnRyb2wiLCJzaXplIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductInfo.js\n"));

/***/ })

});