"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Banner */ \"(app-pages-browser)/./src/app/components/Banner.tsx\");\n/* harmony import */ var _components_AboutMe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AboutMe */ \"(app-pages-browser)/./src/app/components/AboutMe.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Projects */ \"(app-pages-browser)/./src/app/components/Projects.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_5__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger);\nfunction Home() {\n    _s();\n    const aboutMeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const projectsRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger.create({\n            trigger: aboutMeRef.current,\n            start: \"top top\",\n            end: \"bottom bottom\",\n            markers: false,\n            onEnter: ()=>gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to([\n                    \"#aboutme-section\",\n                    \"#projects-section\"\n                ], {\n                    backgroundColor: \"#000\",\n                    color: \"#fff\"\n                }),\n            onLeaveBack: ()=>gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.to([\n                    \"#aboutme-section\",\n                    \"#projects-section\"\n                ], {\n                    backgroundColor: \"#fff\",\n                    color: \"#000\"\n                })\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"banner-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                ref: aboutMeRef,\n                id: \"aboutme-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AboutMe__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                ref: projectsRef,\n                id: \"projects-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/page.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"78TCaSJEzsh+YS5IEEZTmEuD8FU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFeUM7QUFDRTtBQUNFO0FBRUg7QUFDZDtBQUV1QjtBQUVuREssc0NBQUlBLENBQUNFLGNBQWMsQ0FBQ0QsNkRBQWFBO0FBRWxCLFNBQVNFOztJQUN0QixNQUFNQyxhQUFhTiw2Q0FBTUEsQ0FBaUI7SUFDMUMsTUFBTU8sY0FBY1AsNkNBQU1BLENBQWlCO0lBRTNDQyxnREFBU0EsQ0FBQztRQUNSRSw2REFBYUEsQ0FBQ0ssTUFBTSxDQUFDO1lBQ25CQyxTQUFTSCxXQUFXSSxPQUFPO1lBQzNCQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsU0FBUztZQUNUQyxTQUFTLElBQ1BaLHNDQUFJQSxDQUFDYSxFQUFFLENBQUM7b0JBQUM7b0JBQW9CO2lCQUFvQixFQUFFO29CQUNqREMsaUJBQWlCO29CQUNqQkMsT0FBTztnQkFDVDtZQUNGQyxhQUFhLElBQ1hoQixzQ0FBSUEsQ0FBQ2EsRUFBRSxDQUFDO29CQUFDO29CQUFvQjtpQkFBb0IsRUFBRTtvQkFDakRDLGlCQUFpQjtvQkFDakJDLE9BQU87Z0JBQ1Q7UUFDSjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQVFDLElBQUc7MEJBQ1YsNEVBQUN6QiwwREFBTUE7Ozs7Ozs7Ozs7MEJBRVQsOERBQUN3QjtnQkFBUUUsS0FBS2pCO2dCQUFZZ0IsSUFBRzswQkFDM0IsNEVBQUN4QiwyREFBT0E7Ozs7Ozs7Ozs7MEJBRVYsOERBQUN1QjtnQkFBUUUsS0FBS2hCO2dCQUFhZSxJQUFHOzBCQUM1Qiw0RUFBQ3ZCLDREQUFRQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQjtHQXBDd0JNO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9jb21wb25lbnRzL0Jhbm5lclwiO1xuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4vY29tcG9uZW50cy9BYm91dE1lXCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xuXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyB1c2VHU0FQIH0gZnJvbSBcIkBnc2FwL3JlYWN0XCI7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSBcImdzYXAvU2Nyb2xsVHJpZ2dlclwiO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBhYm91dE1lUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcHJvamVjdHNSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgdHJpZ2dlcjogYWJvdXRNZVJlZi5jdXJyZW50LFxuICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxuICAgICAgZW5kOiBcImJvdHRvbSBib3R0b21cIixcbiAgICAgIG1hcmtlcnM6IGZhbHNlLFxuICAgICAgb25FbnRlcjogKCkgPT5cbiAgICAgICAgZ3NhcC50byhbXCIjYWJvdXRtZS1zZWN0aW9uXCIsIFwiI3Byb2plY3RzLXNlY3Rpb25cIl0sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgfSksXG4gICAgICBvbkxlYXZlQmFjazogKCkgPT5cbiAgICAgICAgZ3NhcC50byhbXCIjYWJvdXRtZS1zZWN0aW9uXCIsIFwiI3Byb2plY3RzLXNlY3Rpb25cIl0sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgfSksXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxzZWN0aW9uIGlkPVwiYmFubmVyLXNlY3Rpb25cIj5cbiAgICAgICAgPEJhbm5lciAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gcmVmPXthYm91dE1lUmVmfSBpZD1cImFib3V0bWUtc2VjdGlvblwiPlxuICAgICAgICA8QWJvdXRNZSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gcmVmPXtwcm9qZWN0c1JlZn0gaWQ9XCJwcm9qZWN0cy1zZWN0aW9uXCI+XG4gICAgICAgIDxQcm9qZWN0cyAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJBYm91dE1lIiwiUHJvamVjdHMiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiSG9tZSIsImFib3V0TWVSZWYiLCJwcm9qZWN0c1JlZiIsImNyZWF0ZSIsInRyaWdnZXIiLCJjdXJyZW50Iiwic3RhcnQiLCJlbmQiLCJtYXJrZXJzIiwib25FbnRlciIsInRvIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJvbkxlYXZlQmFjayIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaWQiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});