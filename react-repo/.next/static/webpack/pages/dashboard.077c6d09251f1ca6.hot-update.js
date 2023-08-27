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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_DataInventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataInventory */ \"./src/services/DataInventory.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/CloseButton */ \"./node_modules/react-bootstrap/esm/CloseButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_DeleteProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DeleteProduct */ \"./src/services/DeleteProduct.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ProductInfo() {\n    _s();\n    // state to remember products.\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // set state for quantity.\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // set state for item object.\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // state to remember the item id to be used for deletion axios call.\n    const [deleteID, setDeleteID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // useEffect to GET filtered customer data for products.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_services_DataInventory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            setState(data);\n        };\n        fetchData();\n        return ()=>{};\n    }, []);\n    // useEffect to run the delete of a product if the value of deleteID has been changed from null.\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (deleteID !== null) {\n            (0,_services_DeleteProduct__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(deleteID);\n            alert(\"Are you sure?\");\n            window.location.reload();\n        }\n    }, [\n        deleteID\n    ]);\n    // function to handle the click of the delete button for product.\n    const handleDeleteClick = (e)=>{\n        setDeleteID(e.target.value);\n    };\n    // async function to handle the PUT request when a quantity is updated.\n    const handleUpdate = async (e)=>{\n        const headers = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        let formField = new FormData();\n        formField.append(\"quantity\", quantity);\n        await (0,axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            method: \"put\",\n            url: \"http://127.0.0.1:8000/prod_update/\",\n            data: item,\n            headers: headers\n        }).then((response)=>{});\n    };\n    // function to handle the \"ENTER\" button press when quantity is updated.\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleUpdate();\n        }\n    };\n    // generic function to set the item object in state when quantity is updated.\n    const newFunc = (id, qty)=>{\n        setItem({\n            id: id,\n            quantity: qty\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this),\n                    state.length > 0 ? state.map((item, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-8 m-3\",\n                                    \"data-spy\": \"scroll\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        as: \"ul\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                                            as: \"li\",\n                                            className: \"d-flex justify-content-between align-items-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"ms-2 me-auto\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"fw-bold\",\n                                                            children: item.name\n                                                        }, item.id, false, {\n                                                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 27\n                                                        }, this),\n                                                        item.description\n                                                    ]\n                                                }, item.id, true, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Control, {\n                                                    className: \"w-50 text-center\",\n                                                    size: \"sm\",\n                                                    type: \"number\",\n                                                    placeholder: item.quantity,\n                                                    onKeyDown: (e)=>handleKeyDown(e),\n                                                    onChange: (e)=>newFunc(item.id, e.target.value)\n                                                }, item.id, false, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                    type: \"button\",\n                                                    onClick: (e)=>handleDeleteClick(e),\n                                                    value: item.id\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, item.id, true, {\n                                            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 23\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 21\n                                    }, this)\n                                }, item.id, false, {\n                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-md-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true);\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"There are no products for this customer.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 108,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(ProductInfo, \"zj0gdIHdMVTbUc6quiDz5ogPQuk=\");\n_c = ProductInfo;\nvar _c;\n$RefreshReg$(_c, \"ProductInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzhEQUcxQiw4REFBQ3BDLG1FQUFXQTtvREFBQ21ELE1BQUs7b0RBQVNJLFNBQVMsQ0FBQ2xDLElBQU1ELGtCQUFrQkM7b0RBQUlFLE9BQU9iLEtBQUswQixFQUFFOzs7Ozs7OzJDQVZuRDFCLEtBQUswQixFQUFFOzs7Ozs7Ozs7O21DQUZOMUIsS0FBSzBCLEVBQUU7Ozs7OzhDQWlCMUMsOERBQUNFO29DQUFJQyxXQUFVOzs7Ozs7OztvQkFHckIsbUJBQ0UsOERBQUNpQjtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBeEd3Qm5EO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RJbmZvLmpzPzVhYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBHZXRJbnZlbnRvcnlEYXRhIGZyb20gXCIuLi9zZXJ2aWNlcy9EYXRhSW52ZW50b3J5XCI7XG5pbXBvcnQgTGlzdEdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXAnO1xuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IERlbGV0ZVByb2R1Y3QgZnJvbSBcIi4uL3NlcnZpY2VzL0RlbGV0ZVByb2R1Y3RcIjtcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBhdXRoSGVhZGVyIGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLmhlYWRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEluZm8oKSB7XG4gIC8vIHN0YXRlIHRvIHJlbWVtYmVyIHByb2R1Y3RzLlxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyBzZXQgc3RhdGUgZm9yIHF1YW50aXR5LlxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIHNldCBzdGF0ZSBmb3IgaXRlbSBvYmplY3QuXG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKHt9KTtcblxuICAvLyBzdGF0ZSB0byByZW1lbWJlciB0aGUgaXRlbSBpZCB0byBiZSB1c2VkIGZvciBkZWxldGlvbiBheGlvcyBjYWxsLlxuICBjb25zdCBbZGVsZXRlSUQsIHNldERlbGV0ZUlEXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIHVzZUVmZmVjdCB0byBHRVQgZmlsdGVyZWQgY3VzdG9tZXIgZGF0YSBmb3IgcHJvZHVjdHMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEdldEludmVudG9yeURhdGEoKTtcbiAgICAgIHNldFN0YXRlKGRhdGEpO1xuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgICByZXR1cm4gKCkgPT4geyB9XG4gIH0sIFtdKVxuXG4gIC8vIHVzZUVmZmVjdCB0byBydW4gdGhlIGRlbGV0ZSBvZiBhIHByb2R1Y3QgaWYgdGhlIHZhbHVlIG9mIGRlbGV0ZUlEIGhhcyBiZWVuIGNoYW5nZWQgZnJvbSBudWxsLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkZWxldGVJRCAhPT0gbnVsbCkge1xuICAgICAgRGVsZXRlUHJvZHVjdChkZWxldGVJRCk7XG4gICAgICBhbGVydChcIkFyZSB5b3Ugc3VyZT9cIilcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH0sIFtkZWxldGVJRF0pXG5cbiAgLy8gZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBjbGljayBvZiB0aGUgZGVsZXRlIGJ1dHRvbiBmb3IgcHJvZHVjdC5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHNldERlbGV0ZUlEKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIC8vIGFzeW5jIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgUFVUIHJlcXVlc3Qgd2hlbiBhIHF1YW50aXR5IGlzIHVwZGF0ZWQuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IGF1dGhIZWFkZXIoKVxuICAgIGxldCBmb3JtRmllbGQgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgZm9ybUZpZWxkLmFwcGVuZCgncXVhbnRpdHknLCBxdWFudGl0eSlcblxuICAgIGF3YWl0IGF4aW9zKHtcbiAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICB1cmw6IGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvcHJvZF91cGRhdGUvYCxcbiAgICAgIGRhdGE6IGl0ZW0sXG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB9KVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBcIkVOVEVSXCIgYnV0dG9uIHByZXNzIHdoZW4gcXVhbnRpdHkgaXMgdXBkYXRlZC5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBoYW5kbGVVcGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBnZW5lcmljIGZ1bmN0aW9uIHRvIHNldCB0aGUgaXRlbSBvYmplY3QgaW4gc3RhdGUgd2hlbiBxdWFudGl0eSBpcyB1cGRhdGVkLlxuICBjb25zdCBuZXdGdW5jID0gKGlkLCBxdHkpID0+IHtcbiAgICBzZXRJdGVtKHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHF1YW50aXR5OiBxdHlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTInPjwvZGl2PlxuICAgICAgICAgIHtzdGF0ZS5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIHN0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBtLTNcIiBrZXk9e2l0ZW0uaWR9IGRhdGEtc3B5PVwic2Nyb2xsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAgYXM9XCJ1bFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBhcz1cImxpXCIgIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1zLTIgbWUtYXV0b1wiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnctYm9sZFwiIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwidy01MCB0ZXh0LWNlbnRlclwiIHNpemU9XCJzbVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj17aXRlbS5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gaGFuZGxlS2V5RG93bihlKX0gb25DaGFuZ2U9eyhlKSA9PiBuZXdGdW5jKGl0ZW0uaWQsIGUudGFyZ2V0LnZhbHVlKX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlRGVsZXRlQ2xpY2soZSl9IHZhbHVlPXtpdGVtLmlkfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMic+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IDxwPlRoZXJlIGFyZSBubyBwcm9kdWN0cyBmb3IgdGhpcyBjdXN0b21lci48L3A+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2V0SW52ZW50b3J5RGF0YSIsIkxpc3RHcm91cCIsIkNsb3NlQnV0dG9uIiwiYXhpb3MiLCJEZWxldGVQcm9kdWN0IiwiRm9ybSIsImF1dGhIZWFkZXIiLCJQcm9kdWN0SW5mbyIsInN0YXRlIiwic2V0U3RhdGUiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwiaXRlbSIsInNldEl0ZW0iLCJkZWxldGVJRCIsInNldERlbGV0ZUlEIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVEZWxldGVDbGljayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVVwZGF0ZSIsImhlYWRlcnMiLCJmb3JtRmllbGQiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJuZXdGdW5jIiwiaWQiLCJxdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsImRhdGEtc3B5IiwiYXMiLCJJdGVtIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYnIiLCJDb250cm9sIiwic2l6ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biIsIm9uQ2hhbmdlIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductInfo.js\n"));

/***/ })

});