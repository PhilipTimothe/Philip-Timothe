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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_roboto___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"src/app/components/Banner.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\"]}],\"variableName\":\"roboto\"} */ \"(app-pages-browser)/./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"src/app/components/Banner.tsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\"]}],\\\"variableName\\\":\\\"roboto\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_roboto___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_roboto___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/TextPlugin */ \"(app-pages-browser)/./node_modules/gsap/TextPlugin.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP);\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__.TextPlugin);\nfunction Banner() {\n    _s();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const text = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // create a timeline\n    let tl = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline();\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP)(()=>{\n        // gsap code here...\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Data Engineer\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Creator\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Founder\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Software Engineer\"\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.from(\"#quote\", {\n            duration: 1.5,\n            yPercent: 100,\n            ease: \"power4\",\n            stagger: 0.1\n        });\n    }, {\n        scope: container\n    }); // <-- scope is for selector text (optional)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"md:container md:mx-auto h-screen flex items-center justify-center\",\n        ref: container,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"grid grid-cols-1 gap-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        class: \"text-8xl text-center\",\n                        id: \"banner\",\n                        ref: text,\n                        children: \"Multifaceted Developer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_roboto___WEBPACK_IMPORTED_MODULE_5___default().className),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"grid grid-cols-8 gap-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"col-start-5 col-span-3 text-base text-center\",\n                            id: \"quote\",\n                            children: \"Creative data engineer with a passion for blending technology and art. Skilled in innovative problem-solving and continuous learning, bringing a unique perspective to every challenge. Adaptable, driven, and ready to make an impact.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Banner, \"grQrG1CgbpybdCFibEFQjJwsjk0=\", false, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP\n    ];\n});\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9CYW5uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVU1BO0FBUnlCO0FBRUg7QUFDVTtBQUNPO0FBUzdDRSxzQ0FBSUEsQ0FBQ0csY0FBYyxDQUFDRixnREFBT0E7QUFDM0JELHNDQUFJQSxDQUFDRyxjQUFjLENBQUNELHVEQUFVQTtBQUVmLFNBQVNFOztJQUN0QixNQUFNQyxZQUFZTiw2Q0FBTUE7SUFDeEIsTUFBTU8sT0FBT1AsNkNBQU1BO0lBQ25CLG9CQUFvQjtJQUNwQixJQUFJUSxLQUFLUCxzQ0FBSUEsQ0FBQ1EsUUFBUTtJQUV0QlAsb0RBQU9BLENBQ0w7UUFDRSxvQkFBb0I7UUFDcEJNLEdBQUdFLEVBQUUsQ0FBQyxXQUFXO1lBQ2ZDLFVBQVU7WUFDVkMsT0FBTztZQUNQTCxNQUFNO1FBQ1I7UUFDQUMsR0FBR0UsRUFBRSxDQUFDLFdBQVc7WUFDZkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BMLE1BQU07UUFDUjtRQUNBQyxHQUFHRSxFQUFFLENBQUMsV0FBVztZQUNmQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEwsTUFBTTtRQUNSO1FBQ0FDLEdBQUdFLEVBQUUsQ0FBQyxXQUFXO1lBQ2ZDLFVBQVU7WUFDVkMsT0FBTztZQUNQTCxNQUFNO1FBQ1I7UUFFQU4sc0NBQUlBLENBQUNZLElBQUksQ0FBQyxVQUFVO1lBQ2xCRixVQUFVO1lBQ1ZHLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxTQUFTO1FBQ1g7SUFDRixHQUNBO1FBQUVDLE9BQU9YO0lBQVUsSUFDbEIsNENBQTRDO0lBRS9DLHFCQUNFLDhEQUFDWTtRQUNDQyxPQUFNO1FBQ05DLEtBQUtkO2tCQUVMLDRFQUFDWTtZQUFJQyxPQUFNOzs4QkFDVCw4REFBQ0Q7OEJBQ0MsNEVBQUNHO3dCQUFFRixPQUFNO3dCQUF1QkcsSUFBRzt3QkFBU0YsS0FBS2I7a0NBQU07Ozs7Ozs7Ozs7OzhCQUl6RCw4REFBQ1c7b0JBQUlLLFdBQVd4Qix3TEFBZ0I7OEJBQzlCLDRFQUFDbUI7d0JBQUlDLE9BQU07a0NBQ1QsNEVBQUNFOzRCQUFFRixPQUFNOzRCQUErQ0csSUFBRztzQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVy9FO0dBaEV3QmpCOztRQU10QkgsZ0RBQU9BOzs7S0FOZUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0Jhbm5lci50c3g/NjI4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlR1NBUCB9IGZyb20gXCJAZ3NhcC9yZWFjdFwiO1xuaW1wb3J0IHsgVGV4dFBsdWdpbiB9IGZyb20gXCJnc2FwL1RleHRQbHVnaW5cIjtcblxuaW1wb3J0IHsgUm9ib3RvIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmNvbnN0IHJvYm90byA9IFJvYm90byh7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB3ZWlnaHQ6IFtcIjEwMFwiXSxcbn0pO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKHVzZUdTQVApO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihUZXh0UGx1Z2luKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWYoKTtcbiAgY29uc3QgdGV4dCA9IHVzZVJlZigpO1xuICAvLyBjcmVhdGUgYSB0aW1lbGluZVxuICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XG5cbiAgdXNlR1NBUChcbiAgICAoKSA9PiB7XG4gICAgICAvLyBnc2FwIGNvZGUgaGVyZS4uLlxuICAgICAgdGwudG8oXCIjYmFubmVyXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgICAgICB0ZXh0OiBcIkRhdGEgRW5naW5lZXJcIixcbiAgICAgIH0pO1xuICAgICAgdGwudG8oXCIjYmFubmVyXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgICAgICB0ZXh0OiBcIkNyZWF0b3JcIixcbiAgICAgIH0pO1xuICAgICAgdGwudG8oXCIjYmFubmVyXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgICAgICB0ZXh0OiBcIkZvdW5kZXJcIixcbiAgICAgIH0pO1xuICAgICAgdGwudG8oXCIjYmFubmVyXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgIGRlbGF5OiAxLFxuICAgICAgICB0ZXh0OiBcIlNvZnR3YXJlIEVuZ2luZWVyXCIsXG4gICAgICB9KTtcblxuICAgICAgZ3NhcC5mcm9tKFwiI3F1b3RlXCIsIHtcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgeVBlcmNlbnQ6IDEwMCxcbiAgICAgICAgZWFzZTogXCJwb3dlcjRcIixcbiAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgfSk7XG4gICAgfSxcbiAgICB7IHNjb3BlOiBjb250YWluZXIgfVxuICApOyAvLyA8LS0gc2NvcGUgaXMgZm9yIHNlbGVjdG9yIHRleHQgKG9wdGlvbmFsKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJtZDpjb250YWluZXIgbWQ6bXgtYXV0byBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICByZWY9e2NvbnRhaW5lcn1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtMlwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC04eGwgdGV4dC1jZW50ZXJcIiBpZD1cImJhbm5lclwiIHJlZj17dGV4dH0+XG4gICAgICAgICAgICBNdWx0aWZhY2V0ZWQgRGV2ZWxvcGVyXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JvYm90by5jbGFzc05hbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy04IGdhcC0yXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbC1zdGFydC01IGNvbC1zcGFuLTMgdGV4dC1iYXNlIHRleHQtY2VudGVyXCIgaWQ9XCJxdW90ZVwiPlxuICAgICAgICAgICAgICBDcmVhdGl2ZSBkYXRhIGVuZ2luZWVyIHdpdGggYSBwYXNzaW9uIGZvciBibGVuZGluZyB0ZWNobm9sb2d5IGFuZFxuICAgICAgICAgICAgICBhcnQuIFNraWxsZWQgaW4gaW5ub3ZhdGl2ZSBwcm9ibGVtLXNvbHZpbmcgYW5kIGNvbnRpbnVvdXNcbiAgICAgICAgICAgICAgbGVhcm5pbmcsIGJyaW5naW5nIGEgdW5pcXVlIHBlcnNwZWN0aXZlIHRvIGV2ZXJ5IGNoYWxsZW5nZS5cbiAgICAgICAgICAgICAgQWRhcHRhYmxlLCBkcml2ZW4sIGFuZCByZWFkeSB0byBtYWtlIGFuIGltcGFjdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJyb2JvdG8iLCJ1c2VSZWYiLCJnc2FwIiwidXNlR1NBUCIsIlRleHRQbHVnaW4iLCJyZWdpc3RlclBsdWdpbiIsIkJhbm5lciIsImNvbnRhaW5lciIsInRleHQiLCJ0bCIsInRpbWVsaW5lIiwidG8iLCJkdXJhdGlvbiIsImRlbGF5IiwiZnJvbSIsInlQZXJjZW50IiwiZWFzZSIsInN0YWdnZXIiLCJzY29wZSIsImRpdiIsImNsYXNzIiwicmVmIiwicCIsImlkIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Banner.tsx\n"));

/***/ })

});