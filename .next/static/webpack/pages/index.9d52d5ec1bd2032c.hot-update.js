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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        firstName: \"\",\n        username: \"\"\n    });\n    const CheckLogin = ()=>{\n        console.log(formData.firstName);\n        console.log(formData);\n        if (formData.username !== null) {\n            router.push({\n                pathname: \"./counter\",\n                query: {\n                    username: formData.username\n                }\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"firstBox\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"label\",\n                                        children: \"First Name:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"first\",\n                                        name: \"first\",\n                                        pattern: \"[A-Z]{1}[a-z]{2,10}\",\n                                        title: \"The first letter should be capitalized\",\n                                        onChange: (e)=>setFormData({\n                                                ...formData,\n                                                firstName: e.target.value\n                                            }),\n                                        value: formData.first\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"secondBox\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"label\",\n                                        children: \"Username:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"username\",\n                                        name: \"username\",\n                                        required: true,\n                                        title: \"Type your Username\",\n                                        minLength: \"5\",\n                                        maxLength: \"10\",\n                                        onChange: (e)=>setFormData({\n                                                ...formData,\n                                                username: e.target.value\n                                            }),\n                                        value: formData.first\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        onClick: ()=>CheckLogin(),\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kiray/Desktop/MDIA2190-week2-class2/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"9NiUQfkPbHD8NAuAtG18+Mb0/3w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT01BO0FBUHNCO0FBQ0U7QUFFZ0I7QUFDZDtBQUNPO0FBSXhCLFNBQVNNLE9BQU87O0lBQzdCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLENBQUNHLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7UUFDdkNNLFdBQVc7UUFDWEMsVUFBVTtJQUNaO0lBRUEsTUFBTUMsYUFBYSxJQUFNO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNOLFNBQVNFLFNBQVM7UUFDOUJHLFFBQVFDLEdBQUcsQ0FBQ047UUFFZCxJQUFJQSxTQUFVRyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ2pDSixPQUFPUSxJQUFJLENBQUU7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xOLFVBQVVILFNBQVNHLFFBQVE7Z0JBQzdCO1lBQ0Y7UUFDRixDQUFDO0lBRUQ7SUFDRSxxQkFDRTs7MEJBQ0UsOERBQUNWLGtEQUFJQTs7a0NBQ0gsOERBQUNpQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQztnQkFBS0MsV0FBV3ZCLHFFQUFXOztrQ0FDMUIsOERBQUN3Qjs7MENBQ0MsOERBQUNBO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ0U7d0NBQU1GLFdBQVU7a0RBQVE7Ozs7OztrREFDekIsOERBQUNHO3dDQUNDQyxNQUFLO3dDQUNMQyxJQUFHO3dDQUNIWCxNQUFLO3dDQUNMWSxTQUFRO3dDQUNSZCxPQUFNO3dDQUNOZSxVQUFXQyxDQUFBQSxJQUFLekIsWUFBWTtnREFBQyxHQUFHRCxRQUFRO2dEQUFFRSxXQUFXd0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRDQUFDO3dDQUNwRUEsT0FBTzVCLFNBQVM2QixLQUFLOzs7Ozs7Ozs7Ozs7MENBS3pCLDhEQUFDVjtnQ0FBSUQsV0FBVTs7a0RBQ2YsOERBQUNFO3dDQUFNRixXQUFVO2tEQUFROzs7Ozs7a0RBQ3pCLDhEQUFDRzt3Q0FDREMsTUFBTzt3Q0FDUEMsSUFBSzt3Q0FDTFgsTUFBTzt3Q0FDUGtCLFFBQVE7d0NBQ1JwQixPQUFRO3dDQUNScUIsV0FBWTt3Q0FDWkMsV0FBVzt3Q0FDWFAsVUFBV0MsQ0FBQUEsSUFBS3pCLFlBQVk7Z0RBQUMsR0FBR0QsUUFBUTtnREFBRUcsVUFBVXVCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs0Q0FBQzt3Q0FDbkVBLE9BQU81QixTQUFTNkIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl2Qiw4REFBQ0k7d0JBQU9YLE1BQUs7d0JBQVNZLFNBQVMsSUFBTTlCO2tDQUFjOzs7Ozs7Ozs7Ozs7OztBQUkzRCxDQUFDO0dBaEV1Qk47O1FBQ1BELGtEQUFTQTs7O0tBREZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlciAoKVxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBmaXJzdE5hbWU6ICcnLFxuICAgIHVzZXJuYW1lOiAnJyxcbiAgfSlcbiAgXG4gIGNvbnN0IENoZWNrTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZm9ybURhdGEuZmlyc3ROYW1lKVxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxuXG4gIGlmIChmb3JtRGF0YSAudXNlcm5hbWUgIT09IG51bGwgKXtcbiAgcm91dGVyLnB1c2goIHtcbiAgICBwYXRobmFtZTogJy4vY291bnRlcicsXG4gICAgcXVlcnk6IHtcbiAgICAgIHVzZXJuYW1lOiBmb3JtRGF0YS51c2VybmFtZVxuICAgIH1cbiAgfSlcbn1cbiAgICAgXG59XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RCb3gnPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwnPkZpcnN0IE5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwiZmlyc3RcIlxuICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RcIlxuICAgICAgICAgICAgICBwYXR0ZXJuPVwiW0EtWl17MX1bYS16XXsyLDEwfVwiXG4gICAgICAgICAgICAgIHRpdGxlPSdUaGUgZmlyc3QgbGV0dGVyIHNob3VsZCBiZSBjYXBpdGFsaXplZCdcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlID0+IHNldEZvcm1EYXRhKHsuLi5mb3JtRGF0YSwgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KSl9IFxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2Vjb25kQm94Jz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCc+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcbiAgICAgICAgICBpZCA9IFwidXNlcm5hbWVcIlxuICAgICAgICAgIG5hbWUgPSBcInVzZXJuYW1lXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIHRpdGxlID0gXCJUeXBlIHlvdXIgVXNlcm5hbWVcIlxuICAgICAgICAgIG1pbkxlbmd0aCA9IFwiNVwiXG4gICAgICAgICAgbWF4TGVuZ3RoPSBcIjEwXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUgPT4gc2V0Rm9ybURhdGEoey4uLmZvcm1EYXRhLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSkpfSBcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3R9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IENoZWNrTG9naW4oKX0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSG9tZSIsInJvdXRlciIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJmaXJzdE5hbWUiLCJ1c2VybmFtZSIsIkNoZWNrTG9naW4iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwYXR0ZXJuIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaXJzdCIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});