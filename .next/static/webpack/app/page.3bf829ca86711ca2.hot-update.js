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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_robotoThin___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/components/Banner.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\"]}],\"variableName\":\"robotoThin\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/components/Banner.tsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\"]}],\\\"variableName\\\":\\\"robotoThin\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_robotoThin___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_robotoThin___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/components/Banner.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"robotoBold\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/components/Banner.tsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\"]}],\\\"variableName\\\":\\\"robotoBold\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/TextPlugin */ \"(app-pages-browser)/./node_modules/gsap/TextPlugin.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP, gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__.TextPlugin, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\nfunction Banner() {\n    _s();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // create a timeline\n    let tl = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline();\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP)(()=>{\n        // gsap code here...\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Data Engineer\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Creator\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Founder\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Software Engineer\"\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.from(\"#quote\", {\n            delay: 4,\n            duration: 2.5,\n            yPercent: 200,\n            ease: \"power4\",\n            stagger: 0\n        });\n    }, {\n        scope: container\n    }); // <-- scope is for selector text (optional)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:container md:mx-auto h-screen flex items-center justify-center\",\n        ref: container,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-8 gap-2 relative\",\n            id: \"b\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_6___default().className),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"lg:text-8xl sm:text-7xl text-5xl text-center \",\n                            id: \"banner\",\n                            children: \"Multifaceted Developer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-start-5 col-span-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_robotoThin___WEBPACK_IMPORTED_MODULE_7___default().className),\n                        id: \"banner-quotebox\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"lg:text-base sm:text-sm text-xs text-center\",\n                            id: \"quote\",\n                            children: \"Creative data engineer with a passion for blending technology and art. Skilled in innovative problem-solving and continuous learning, bringing a unique perspective to every challenge. Adaptable, driven, and ready to make an impact.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Banner, \"rHbtpTvjRV8wc+C7qlvIGf1YLV8=\", false, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP\n    ];\n});\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9CYW5uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV01BO0FBS0FDO0FBZHlCO0FBRUg7QUFDVTtBQUNPO0FBQ007QUFjbkRFLHNDQUFJQSxDQUFDSSxjQUFjLENBQUNILGdEQUFPQSxFQUFFQyx1REFBVUEsRUFBRUMsNkRBQWFBO0FBRXZDLFNBQVNFOztJQUN0QixNQUFNQyxZQUFZUCw2Q0FBTUE7SUFDeEIsb0JBQW9CO0lBQ3BCLElBQUlRLEtBQUtQLHNDQUFJQSxDQUFDUSxRQUFRO0lBRXRCUCxvREFBT0EsQ0FDTDtRQUNFLG9CQUFvQjtRQUNwQk0sR0FBR0UsRUFBRSxDQUFDLFdBQVc7WUFDZkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBTCxHQUFHRSxFQUFFLENBQUMsV0FBVztZQUNmQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0FMLEdBQUdFLEVBQUUsQ0FBQyxXQUFXO1lBQ2ZDLFVBQVU7WUFDVkMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQUwsR0FBR0UsRUFBRSxDQUFDLFdBQVc7WUFDZkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUVBWixzQ0FBSUEsQ0FBQ2EsSUFBSSxDQUFDLFVBQVU7WUFDbEJGLE9BQU87WUFDUEQsVUFBVTtZQUNWSSxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsU0FBUztRQUNYO0lBQ0YsR0FDQTtRQUFFQyxPQUFPWDtJQUFVLElBQ2xCLDRDQUE0QztJQUUvQyxxQkFDRSw4REFBQ1k7UUFDQ0MsV0FBVTtRQUNWQyxLQUFLZDtrQkFFTCw0RUFBQ1k7WUFBSUMsV0FBVTtZQUFrQ0UsSUFBRzs7OEJBQ2xELDhEQUFDSDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVdyQiwyTEFBb0I7a0NBQ2xDLDRFQUFDd0I7NEJBQ0NILFdBQVU7NEJBQ1ZFLElBQUc7c0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS0wsOERBQUNIO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBV3RCLDJMQUFvQjt3QkFBRXdCLElBQUc7a0NBQ3ZDLDRFQUFDQzs0QkFDQ0gsV0FBVTs0QkFDVkUsSUFBRztzQ0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV2I7R0F4RXdCaEI7O1FBS3RCSixnREFBT0E7OztLQUxlSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQmFubmVyLnRzeD82Mjg0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyB1c2VHU0FQIH0gZnJvbSBcIkBnc2FwL3JlYWN0XCI7XG5pbXBvcnQgeyBUZXh0UGx1Z2luIH0gZnJvbSBcImdzYXAvVGV4dFBsdWdpblwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcblxuaW1wb3J0IHsgUm9ib3RvIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcblxuY29uc3Qgcm9ib3RvVGhpbiA9IFJvYm90byh7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB3ZWlnaHQ6IFtcIjEwMFwiXSxcbn0pO1xuXG5jb25zdCByb2JvdG9Cb2xkID0gUm9ib3RvKHtcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG4gIHdlaWdodDogW1wiNDAwXCJdLFxufSk7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4odXNlR1NBUCwgVGV4dFBsdWdpbiwgU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lcigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKCk7XG4gIC8vIGNyZWF0ZSBhIHRpbWVsaW5lXG4gIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICB1c2VHU0FQKFxuICAgICgpID0+IHtcbiAgICAgIC8vIGdzYXAgY29kZSBoZXJlLi4uXG4gICAgICB0bC50byhcIiNiYW5uZXJcIiwge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgZGVsYXk6IDEsXG4gICAgICAgIHRleHQ6IFwiRGF0YSBFbmdpbmVlclwiLFxuICAgICAgfSk7XG4gICAgICB0bC50byhcIiNiYW5uZXJcIiwge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgZGVsYXk6IDEsXG4gICAgICAgIHRleHQ6IFwiQ3JlYXRvclwiLFxuICAgICAgfSk7XG4gICAgICB0bC50byhcIiNiYW5uZXJcIiwge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgZGVsYXk6IDEsXG4gICAgICAgIHRleHQ6IFwiRm91bmRlclwiLFxuICAgICAgfSk7XG4gICAgICB0bC50byhcIiNiYW5uZXJcIiwge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgZGVsYXk6IDEsXG4gICAgICAgIHRleHQ6IFwiU29mdHdhcmUgRW5naW5lZXJcIixcbiAgICAgIH0pO1xuXG4gICAgICBnc2FwLmZyb20oXCIjcXVvdGVcIiwge1xuICAgICAgICBkZWxheTogNCxcbiAgICAgICAgZHVyYXRpb246IDIuNSxcbiAgICAgICAgeVBlcmNlbnQ6IDIwMCxcbiAgICAgICAgZWFzZTogXCJwb3dlcjRcIixcbiAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgeyBzY29wZTogY29udGFpbmVyIH1cbiAgKTsgLy8gPC0tIHNjb3BlIGlzIGZvciBzZWxlY3RvciB0ZXh0IChvcHRpb25hbClcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cIm1kOmNvbnRhaW5lciBtZDpteC1hdXRvIGgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgIHJlZj17Y29udGFpbmVyfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtOCBnYXAtMiByZWxhdGl2ZVwiIGlkPVwiYlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm9ib3RvQm9sZC5jbGFzc05hbWV9PlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6dGV4dC04eGwgc206dGV4dC03eGwgdGV4dC01eGwgdGV4dC1jZW50ZXIgXCJcbiAgICAgICAgICAgICAgaWQ9XCJiYW5uZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNdWx0aWZhY2V0ZWQgRGV2ZWxvcGVyXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC01IGNvbC1zcGFuLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm9ib3RvVGhpbi5jbGFzc05hbWV9IGlkPVwiYmFubmVyLXF1b3RlYm94XCI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzp0ZXh0LWJhc2Ugc206dGV4dC1zbSB0ZXh0LXhzIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgaWQ9XCJxdW90ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENyZWF0aXZlIGRhdGEgZW5naW5lZXIgd2l0aCBhIHBhc3Npb24gZm9yIGJsZW5kaW5nIHRlY2hub2xvZ3kgYW5kXG4gICAgICAgICAgICAgIGFydC4gU2tpbGxlZCBpbiBpbm5vdmF0aXZlIHByb2JsZW0tc29sdmluZyBhbmQgY29udGludW91c1xuICAgICAgICAgICAgICBsZWFybmluZywgYnJpbmdpbmcgYSB1bmlxdWUgcGVyc3BlY3RpdmUgdG8gZXZlcnkgY2hhbGxlbmdlLlxuICAgICAgICAgICAgICBBZGFwdGFibGUsIGRyaXZlbiwgYW5kIHJlYWR5IHRvIG1ha2UgYW4gaW1wYWN0LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInJvYm90b1RoaW4iLCJyb2JvdG9Cb2xkIiwidXNlUmVmIiwiZ3NhcCIsInVzZUdTQVAiLCJUZXh0UGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiQmFubmVyIiwiY29udGFpbmVyIiwidGwiLCJ0aW1lbGluZSIsInRvIiwiZHVyYXRpb24iLCJkZWxheSIsInRleHQiLCJmcm9tIiwieVBlcmNlbnQiLCJlYXNlIiwic3RhZ2dlciIsInNjb3BlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Banner.tsx\n"));

/***/ })

});