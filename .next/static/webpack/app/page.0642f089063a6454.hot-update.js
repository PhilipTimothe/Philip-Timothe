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

/***/ "(app-pages-browser)/./src/app/components/Banner.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Banner.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_roboto___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"src/app/components/Banner.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\"]}],\"variableName\":\"roboto\"} */ \"(app-pages-browser)/./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"src/app/components/Banner.tsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\"]}],\\\"variableName\\\":\\\"roboto\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_roboto___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_roboto___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/TextPlugin */ \"(app-pages-browser)/./node_modules/gsap/TextPlugin.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP);\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__.TextPlugin);\nfunction Banner() {\n    _s();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const text = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // create a timeline\n    let tl = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline();\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP)(()=>{\n        // gsap code here...\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Data Engineer\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Creator\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Founder\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Software Engineer\"\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\".class\", {\n            rotation: 360,\n            duration: 5,\n            ease: \"elastic\"\n        });\n    }, {\n        scope: container\n    }); // <-- scope is for selector text (optional)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"md:container md:mx-auto h-screen flex items-center justify-center\",\n        ref: container,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"grid grid-cols-1 gap-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        class: \"text-8xl text-center\",\n                        id: \"banner\",\n                        ref: text,\n                        children: \"Multifaceted Developer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_roboto___WEBPACK_IMPORTED_MODULE_5___default().className),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"grid grid-cols-8 gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"col-start-5 col-span-3 text-base text-center\",\n                            id: \"quote\",\n                            children: \"Creative data engineer with a passion for blending technology and art. Skilled in innovative problem-solving and continuous learning, bringing a unique perspective to every challenge. Adaptable, driven, and ready to make an impact.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(Banner, \"grQrG1CgbpybdCFibEFQjJwsjk0=\", false, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP\n    ];\n});\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9CYW5uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVU1BO0FBUnlCO0FBRUg7QUFDVTtBQUNPO0FBUzdDRSxzQ0FBSUEsQ0FBQ0csY0FBYyxDQUFDRixnREFBT0E7QUFDM0JELHNDQUFJQSxDQUFDRyxjQUFjLENBQUNELHVEQUFVQTtBQUVmLFNBQVNFOztJQUN0QixNQUFNQyxZQUFZTiw2Q0FBTUE7SUFDeEIsTUFBTU8sT0FBT1AsNkNBQU1BO0lBQ25CLG9CQUFvQjtJQUNwQixJQUFJUSxLQUFLUCxzQ0FBSUEsQ0FBQ1EsUUFBUTtJQUV0QlAsb0RBQU9BLENBQ0w7UUFDRSxvQkFBb0I7UUFDcEJNLEdBQUdFLEVBQUUsQ0FBQyxXQUFXO1lBQ2ZDLFVBQVU7WUFDVkMsT0FBTztZQUNQTCxNQUFNO1FBQ1I7UUFDQUMsR0FBR0UsRUFBRSxDQUFDLFdBQVc7WUFDZkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BMLE1BQU07UUFDUjtRQUNBQyxHQUFHRSxFQUFFLENBQUMsV0FBVztZQUNmQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEwsTUFBTTtRQUNSO1FBQ0FDLEdBQUdFLEVBQUUsQ0FBQyxXQUFXO1lBQ2ZDLFVBQVU7WUFDVkMsT0FBTztZQUNQTCxNQUFNO1FBQ1I7UUFFQU4sc0NBQUlBLENBQUNTLEVBQUUsQ0FBQyxVQUFVO1lBQ2hCRyxVQUFVO1lBQ1ZGLFVBQVU7WUFDVkcsTUFBTTtRQUNSO0lBQ0YsR0FDQTtRQUFFQyxPQUFPVDtJQUFVLElBQ2xCLDRDQUE0QztJQUUvQyxxQkFDRSw4REFBQ1U7UUFDQ0MsT0FBTTtRQUNOQyxLQUFLWjtrQkFFTCw0RUFBQ1U7WUFBSUMsT0FBTTs7OEJBQ1QsOERBQUNEOzhCQUNDLDRFQUFDRzt3QkFBRUYsT0FBTTt3QkFBdUJHLElBQUc7d0JBQVNGLEtBQUtYO2tDQUFNOzs7Ozs7Ozs7Ozs4QkFJekQsOERBQUNTO29CQUFJSyxXQUFXdEIsd0xBQWdCOzhCQUM5Qiw0RUFBQ2lCO3dCQUFJQyxPQUFNO2tDQUNULDRFQUFDRTs0QkFBRUYsT0FBTTs0QkFBK0NHLElBQUc7c0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVcvRTtHQS9Ed0JmOztRQU10QkgsZ0RBQU9BOzs7S0FOZUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0Jhbm5lci50c3g/NjI4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlR1NBUCB9IGZyb20gXCJAZ3NhcC9yZWFjdFwiO1xuaW1wb3J0IHsgVGV4dFBsdWdpbiB9IGZyb20gXCJnc2FwL1RleHRQbHVnaW5cIjtcblxuaW1wb3J0IHsgUm9ib3RvIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmNvbnN0IHJvYm90byA9IFJvYm90byh7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB3ZWlnaHQ6IFtcIjEwMFwiXSxcbn0pO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKHVzZUdTQVApO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihUZXh0UGx1Z2luKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWYoKTtcbiAgY29uc3QgdGV4dCA9IHVzZVJlZigpO1xuICAvLyBjcmVhdGUgYSB0aW1lbGluZVxuICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgdXNlR1NBUChcbiAgICAoKSA9PiB7XG4gICAgICAvLyBnc2FwIGNvZGUgaGVyZS4uLlxuICAgICAgdGwudG8oXCIjYmFubmVyXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgICAgICB0ZXh0OiBcIkRhdGEgRW5naW5lZXJcIixcbiAgICAgIH0pO1xuICAgICAgdGwudG8oXCIjYmFubmVyXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgICAgICB0ZXh0OiBcIkNyZWF0b3JcIixcbiAgICAgIH0pO1xuICAgICAgdGwudG8oXCIjYmFubmVyXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgICAgICB0ZXh0OiBcIkZvdW5kZXJcIixcbiAgICAgIH0pO1xuICAgICAgdGwudG8oXCIjYmFubmVyXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgICAgICB0ZXh0OiBcIlNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gICAgICB9KTtcblxuICAgICAgZ3NhcC50byhcIi5jbGFzc1wiLCB7XG4gICAgICAgIHJvdGF0aW9uOiAzNjAsXG4gICAgICAgIGR1cmF0aW9uOiA1LFxuICAgICAgICBlYXNlOiBcImVsYXN0aWNcIixcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgeyBzY29wZTogY29udGFpbmVyIH1cbiAgKTsgLy8gPC0tIHNjb3BlIGlzIGZvciBzZWxlY3RvciB0ZXh0IChvcHRpb25hbClcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibWQ6Y29udGFpbmVyIG1kOm14LWF1dG8gaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgcmVmPXtjb250YWluZXJ9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtOHhsIHRleHQtY2VudGVyXCIgaWQ9XCJiYW5uZXJcIiByZWY9e3RleHR9PlxuICAgICAgICAgICAgTXVsdGlmYWNldGVkIERldmVsb3BlclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyb2JvdG8uY2xhc3NOYW1lfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtOCBnYXAtMlwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb2wtc3RhcnQtNSBjb2wtc3Bhbi0zIHRleHQtYmFzZSB0ZXh0LWNlbnRlclwiIGlkPVwicXVvdGVcIj5cbiAgICAgICAgICAgICAgQ3JlYXRpdmUgZGF0YSBlbmdpbmVlciB3aXRoIGEgcGFzc2lvbiBmb3IgYmxlbmRpbmcgdGVjaG5vbG9neSBhbmRcbiAgICAgICAgICAgICAgYXJ0LiBTa2lsbGVkIGluIGlubm92YXRpdmUgcHJvYmxlbS1zb2x2aW5nIGFuZCBjb250aW51b3VzXG4gICAgICAgICAgICAgIGxlYXJuaW5nLCBicmluZ2luZyBhIHVuaXF1ZSBwZXJzcGVjdGl2ZSB0byBldmVyeSBjaGFsbGVuZ2UuXG4gICAgICAgICAgICAgIEFkYXB0YWJsZSwgZHJpdmVuLCBhbmQgcmVhZHkgdG8gbWFrZSBhbiBpbXBhY3QuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsicm9ib3RvIiwidXNlUmVmIiwiZ3NhcCIsInVzZUdTQVAiLCJUZXh0UGx1Z2luIiwicmVnaXN0ZXJQbHVnaW4iLCJCYW5uZXIiLCJjb250YWluZXIiLCJ0ZXh0IiwidGwiLCJ0aW1lbGluZSIsInRvIiwiZHVyYXRpb24iLCJkZWxheSIsInJvdGF0aW9uIiwiZWFzZSIsInNjb3BlIiwiZGl2IiwiY2xhc3MiLCJyZWYiLCJwIiwiaWQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Banner.tsx\n"));

/***/ })

});