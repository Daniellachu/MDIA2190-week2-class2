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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        firstName: \"\",\n        username: \"\"\n    });\n    const CheckLogin = ()=>{\n        console.log(formData.firstName);\n        console.log(formData);\n        if (formData.username !== null) {\n            router.push({\n                pathname: \"./counter\",\n                query: {\n                    username: formData.username\n                }\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"firstBox\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"label\",\n                                    children: \"First Name:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"first\",\n                                    name: \"first\",\n                                    pattern: \"[A-Z]{1}[a-z]{2,10}\",\n                                    title: \"The first letter should be capitalized\",\n                                    onChange: (e)=>setFormData({\n                                            ...formData,\n                                            firstName: e.target.value\n                                        }),\n                                    value: formData.first\n                                }, void 0, false, {\n                                    fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"secondBox\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"label\",\n                                    children: \"Username:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"username\",\n                                    name: \"username\",\n                                    required: true,\n                                    title: \"Type your Username\",\n                                    minLength: \"5\",\n                                    maxLength: \"10\",\n                                    onChange: (e)=>setFormData({\n                                            ...formData,\n                                            username: e.target.value\n                                        }),\n                                    value: formData.first\n                                }, void 0, false, {\n                                    fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: ()=>CheckLogin(),\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"9NiUQfkPbHD8NAuAtG18+Mb0/3w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT01BO0FBUHNCO0FBQ0U7QUFFZ0I7QUFDZDtBQUNPO0FBSXhCLFNBQVNNLE9BQU87O0lBQzdCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLENBQUNHLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7UUFDdkNNLFdBQVc7UUFDWEMsVUFBVTtJQUNaO0lBRUEsTUFBTUMsYUFBYSxJQUFNO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNOLFNBQVNFLFNBQVM7UUFDOUJHLFFBQVFDLEdBQUcsQ0FBQ047UUFFZCxJQUFJQSxTQUFVRyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ2pDSixPQUFPUSxJQUFJLENBQUU7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xOLFVBQVVILFNBQVNHLFFBQVE7Z0JBQzdCO1lBQ0Y7UUFDRixDQUFDO0lBRUQ7SUFDRSxxQkFDRTs7MEJBQ0UsOERBQUNWLGtEQUFJQTs7a0NBQ0gsOERBQUNpQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBS0MsV0FBV3ZCLHFFQUFXOzBCQUMxQiw0RUFBQ3dCOztzQ0FDQyw4REFBQ0E7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBTUYsV0FBVTs4Q0FBUTs7Ozs7OzhDQUN6Qiw4REFBQ0c7b0NBQ0NDLE1BQUs7b0NBQ0xDLElBQUc7b0NBQ0hYLE1BQUs7b0NBQ0xZLFNBQVE7b0NBQ1JkLE9BQU07b0NBQ05lLFVBQVdDLENBQUFBLElBQUt6QixZQUFZOzRDQUFDLEdBQUdELFFBQVE7NENBQUVFLFdBQVd3QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0NBQUM7b0NBQ3BFQSxPQUFPNUIsU0FBUzZCLEtBQUs7Ozs7Ozs7Ozs7OztzQ0FLekIsOERBQUNWOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQU1GLFdBQVU7OENBQVE7Ozs7Ozs4Q0FDekIsOERBQUNHO29DQUNEQyxNQUFPO29DQUNQQyxJQUFLO29DQUNMWCxNQUFPO29DQUNQa0IsUUFBUTtvQ0FDUnBCLE9BQVE7b0NBQ1JxQixXQUFZO29DQUNaQyxXQUFXO29DQUNYUCxVQUFXQyxDQUFBQSxJQUFLekIsWUFBWTs0Q0FBQyxHQUFHRCxRQUFROzRDQUFFRyxVQUFVdUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dDQUFDO29DQUNuRUEsT0FBTzVCLFNBQVM2QixLQUFLOzs7Ozs7Ozs7Ozs7c0NBR3ZCLDhEQUFDSTs0QkFBT1gsTUFBSzs0QkFBU1ksU0FBUyxJQUFNOUI7c0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0QsQ0FBQztHQWpFdUJOOztRQUNQRCxrREFBU0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIgKClcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgZmlyc3ROYW1lOiAnJyxcbiAgICB1c2VybmFtZTogJycsXG4gIH0pXG4gIFxuICBjb25zdCBDaGVja0xvZ2luID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhLmZpcnN0TmFtZSlcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSlcblxuICBpZiAoZm9ybURhdGEgLnVzZXJuYW1lICE9PSBudWxsICl7XG4gIHJvdXRlci5wdXNoKCB7XG4gICAgcGF0aG5hbWU6ICcuL2NvdW50ZXInLFxuICAgIHF1ZXJ5OiB7XG4gICAgICB1c2VybmFtZTogZm9ybURhdGEudXNlcm5hbWVcbiAgICB9XG4gIH0pXG59XG4gICAgIFxufVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0Qm94Jz5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJz5GaXJzdCBOYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cImZpcnN0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImZpcnN0XCJcbiAgICAgICAgICAgICAgcGF0dGVybj1cIltBLVpdezF9W2Etel17MiwxMH1cIlxuICAgICAgICAgICAgICB0aXRsZT0nVGhlIGZpcnN0IGxldHRlciBzaG91bGQgYmUgY2FwaXRhbGl6ZWQnXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSA9PiBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIGZpcnN0TmFtZTogZS50YXJnZXQudmFsdWUgfSkpfSBcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpcnN0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY29uZEJveCc+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCc+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXG4gICAgICAgICAgICBpZCA9IFwidXNlcm5hbWVcIlxuICAgICAgICAgICAgbmFtZSA9IFwidXNlcm5hbWVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHRpdGxlID0gXCJUeXBlIHlvdXIgVXNlcm5hbWVcIlxuICAgICAgICAgICAgbWluTGVuZ3RoID0gXCI1XCJcbiAgICAgICAgICAgIG1heExlbmd0aD0gXCIxMFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSkpfSBcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5maXJzdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IENoZWNrTG9naW4oKX0+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIb21lIiwicm91dGVyIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZpcnN0TmFtZSIsInVzZXJuYW1lIiwiQ2hlY2tMb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBhdHRlcm4iLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpcnN0IiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});