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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_DataInventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/DataInventory */ \"./src/services/DataInventory.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\n/* harmony import */ var _services_CustomerProductFilteredInventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/CustomerProductFilteredInventory */ \"./src/services/CustomerProductFilteredInventory.js\");\n/* harmony import */ var react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/CloseButton */ \"./node_modules/react-bootstrap/esm/CloseButton.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _services_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/DeleteProduct */ \"./src/services/DeleteProduct.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _services_auth_headers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.headers */ \"./src/services/auth.headers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction ProductInfo() {\n    _s();\n    // state to remember products.\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    // state to remember the item id to be used for deletion axios call.\n    const [deleteID, setDeleteID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // useEffect to GET filtered customer data for products.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const data = await (0,_services_DataInventory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            setState(data);\n        };\n        fetchData();\n        return ()=>{};\n    }, []);\n    // useEffect to run the delete of a product if the value of deleteID has been changed from null.\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (deleteID !== null) {\n            (0,_services_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(deleteID);\n            window.location.reload();\n        }\n    }, [\n        deleteID\n    ]);\n    // function to handle the click of the delete button for product.\n    const handleDeleteClick = (e)=>{\n        setDeleteID(e.target.value);\n    };\n    const handleUpdate = async (e)=>{\n        const headers = (0,_services_auth_headers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n        let formField = new FormData();\n        // formField.append('name', name)\n        // formField.append('description', description)\n        formField.append(\"quantity\", quantity);\n        // formField.append('customer', customer)\n        await (0,axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n            method: \"put\",\n            url: \"http://127.0.0.1:8000/prod_update/\",\n            data: item,\n            headers: headers\n        }).then((response)=>{\n            window.location.reload();\n        });\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            handleUpdate();\n        }\n    };\n    const newFunc = (id, qty)=>{\n        // set the url for axios call\n        setItem({\n            id: id,\n            quantity: qty\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: state.length > 0 ? state.map((item, index)=>{\n            let ID;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    as: \"ul\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Item, {\n                        as: \"li\",\n                        className: \"d-flex justify-content-between align-items-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ms-2 me-auto\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"fw-bold\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 21\n                                    }, this),\n                                    item.description\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 89,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 93,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Control, {\n                                className: \"text-center\",\n                                size: \"sm\",\n                                type: \"number\",\n                                placeholder: item.quantity,\n                                onKeyDown: (e)=>handleKeyDown(e),\n                                onChange: (e)=>newFunc(item.id, item.quantity)\n                            }, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 95,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_CloseButton__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                type: \"button\",\n                                onClick: (e)=>handleDeleteClick(e),\n                                value: item.id\n                            }, void 0, false, {\n                                fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                                lineNumber: 98,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n                    lineNumber: 87,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false);\n        }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"There are no products for this customer.\"\n        }, void 0, false, {\n            fileName: \"/Users/shawnvera/Documents/GitHub/inventory-controller/react-repo/src/components/ProductInfo.js\",\n            lineNumber: 105,\n            columnNumber: 17\n        }, this)\n    }, void 0, false);\n}\n_s(ProductInfo, \"zj0gdIHdMVTbUc6quiDz5ogPQuk=\");\n_c = ProductInfo;\nvar _c;\n$RefreshReg$(_c, \"ProductInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJWDtHQWhHZ0JsRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0SW5mby5qcz81YWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgR2V0SW52ZW50b3J5RGF0YSBmcm9tIFwiLi4vc2VydmljZXMvRGF0YUludmVudG9yeVwiO1xuaW1wb3J0IEJhZGdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CYWRnZSc7XG5pbXBvcnQgTGlzdEdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXAnO1xuaW1wb3J0IEdldEN1c3RvbWVyUHJvZHVjdEZpbHRlcmVkSW52ZW50b3J5RGF0YSBmcm9tIFwiLi4vc2VydmljZXMvQ3VzdG9tZXJQcm9kdWN0RmlsdGVyZWRJbnZlbnRvcnlcIjtcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2xvc2VCdXR0b24nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJzsgXG5pbXBvcnQgRGVsZXRlUHJvZHVjdCBmcm9tIFwiLi4vc2VydmljZXMvRGVsZXRlUHJvZHVjdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IGF1dGhIZWFkZXIgZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGguaGVhZGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0SW5mbygpIHtcbiAgLy8gc3RhdGUgdG8gcmVtZW1iZXIgcHJvZHVjdHMuXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKHt9KTtcblxuICAvLyBzdGF0ZSB0byByZW1lbWJlciB0aGUgaXRlbSBpZCB0byBiZSB1c2VkIGZvciBkZWxldGlvbiBheGlvcyBjYWxsLlxuICBjb25zdCBbZGVsZXRlSUQsIHNldERlbGV0ZUlEXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIHVzZUVmZmVjdCB0byBHRVQgZmlsdGVyZWQgY3VzdG9tZXIgZGF0YSBmb3IgcHJvZHVjdHMuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEdldEludmVudG9yeURhdGEoKTtcbiAgICAgIHNldFN0YXRlKGRhdGEpO1xuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgICByZXR1cm4gKCkgPT4geyB9XG4gIH0sIFtdKVxuXG5cbiAgLy8gdXNlRWZmZWN0IHRvIHJ1biB0aGUgZGVsZXRlIG9mIGEgcHJvZHVjdCBpZiB0aGUgdmFsdWUgb2YgZGVsZXRlSUQgaGFzIGJlZW4gY2hhbmdlZCBmcm9tIG51bGwuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRlbGV0ZUlEICE9PSBudWxsKSB7XG4gICAgICBEZWxldGVQcm9kdWN0KGRlbGV0ZUlEKTsgXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSBcbiAgfSwgW2RlbGV0ZUlEXSlcblxuICAvLyBmdW5jdGlvbiB0byBoYW5kbGUgdGhlIGNsaWNrIG9mIHRoZSBkZWxldGUgYnV0dG9uIGZvciBwcm9kdWN0LlxuICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9IChlKSA9PiB7XG4gICAgc2V0RGVsZXRlSUQoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gYXV0aEhlYWRlcigpXG4gICAgbGV0IGZvcm1GaWVsZCA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICAvLyBmb3JtRmllbGQuYXBwZW5kKCduYW1lJywgbmFtZSlcbiAgICAvLyBmb3JtRmllbGQuYXBwZW5kKCdkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uKVxuICAgIGZvcm1GaWVsZC5hcHBlbmQoJ3F1YW50aXR5JywgcXVhbnRpdHkpXG4gICAgLy8gZm9ybUZpZWxkLmFwcGVuZCgnY3VzdG9tZXInLCBjdXN0b21lcilcblxuICAgIGF3YWl0IGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgICAgdXJsOiBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3Byb2RfdXBkYXRlL2AsXG4gICAgICAgIGRhdGE6IGl0ZW0sXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSlcbn1cblxuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xuaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gIGhhbmRsZVVwZGF0ZSgpO1xufVxuICB9XG5cbmNvbnN0IG5ld0Z1bmMgPSAoaWQsIHF0eSkgPT4ge1xuLy8gc2V0IHRoZSB1cmwgZm9yIGF4aW9zIGNhbGxcbnNldEl0ZW0oe1xuICBpZDogaWQsXG4gIHF1YW50aXR5OiBxdHlcbn0pXG59XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzdGF0ZS5sZW5ndGggPiAwID9cbiAgICAgICAgc3RhdGUubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBJRDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPExpc3RHcm91cCBhcz1cInVsXCI+XG4gICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGFzPVwibGlcIiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtMiBtZS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnctYm9sZFwiPntpdGVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzaXplPVwic21cIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9e2l0ZW0ucXVhbnRpdHl9IFxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gaGFuZGxlS2V5RG93bihlKX0gb25DaGFuZ2U9eyhlKSA9PiBuZXdGdW5jKGl0ZW0uaWQsIGl0ZW0ucXVhbnRpdHkpfSAvPlxuXG4gICAgICAgICAgICAgICAgICA8Q2xvc2VCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhlKT0+aGFuZGxlRGVsZXRlQ2xpY2soZSl9IHZhbHVlPXtpdGVtLmlkfS8+XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogPHA+VGhlcmUgYXJlIG5vIHByb2R1Y3RzIGZvciB0aGlzIGN1c3RvbWVyLjwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH0iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR2V0SW52ZW50b3J5RGF0YSIsIkJhZGdlIiwiTGlzdEdyb3VwIiwiR2V0Q3VzdG9tZXJQcm9kdWN0RmlsdGVyZWRJbnZlbnRvcnlEYXRhIiwiQ2xvc2VCdXR0b24iLCJheGlvcyIsIkRlbGV0ZVByb2R1Y3QiLCJGb3JtIiwiYXV0aEhlYWRlciIsIlByb2R1Y3RJbmZvIiwic3RhdGUiLCJzZXRTdGF0ZSIsInF1YW50aXR5Iiwic2V0UXVhbnRpdHkiLCJpdGVtIiwic2V0SXRlbSIsImRlbGV0ZUlEIiwic2V0RGVsZXRlSUQiLCJmZXRjaERhdGEiLCJkYXRhIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVEZWxldGVDbGljayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVVwZGF0ZSIsImhlYWRlcnMiLCJmb3JtRmllbGQiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1ldGhvZCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJuZXdGdW5jIiwiaWQiLCJxdHkiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsIklEIiwiYXMiLCJJdGVtIiwiY2xhc3NOYW1lIiwiZGl2IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiYnIiLCJDb250cm9sIiwic2l6ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biIsIm9uQ2hhbmdlIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductInfo.js\n"));

/***/ }),

/***/ "./src/services/auth.headers.js":
/*!**************************************!*\
  !*** ./src/services/auth.headers.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ authHeader; }\n/* harmony export */ });\nfunction authHeader() {\n    const user = JSON.parse(localStorage.getItem(\"user\"));\n    if (user && user.access) {\n        return {\n            Authorization: \"Bearer \" + user.access\n        };\n    } else {\n        return {};\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC5oZWFkZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQTtJQUNwQixNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQztJQUM3QyxJQUFJSixRQUFRQSxLQUFLSyxNQUFNLEVBQUU7UUFDdkIsT0FBTztZQUFFQyxlQUFlLFlBQVlOLEtBQUtLLE1BQU07UUFBQztJQUNsRCxPQUFPO1FBQ0wsT0FBTyxDQUFDO0lBQ1Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvYXV0aC5oZWFkZXJzLmpzPzhmYTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXV0aEhlYWRlcigpIHtcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICBpZiAodXNlciAmJiB1c2VyLmFjY2Vzcykge1xuICAgICAgcmV0dXJuIHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdXNlci5hY2Nlc3MgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfSJdLCJuYW1lcyI6WyJhdXRoSGVhZGVyIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhY2Nlc3MiLCJBdXRob3JpemF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/auth.headers.js\n"));

/***/ })

});