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

/***/ "(app-pages-browser)/./src/app/components/Projects.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/Projects.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Projects_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/components/Projects.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"robotoBold\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/components/Projects.tsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\"]}],\\\"variableName\\\":\\\"robotoBold\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Projects_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_components_Projects_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/link/dist/chunk-77LBB3F4.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/image/dist/chunk-YAC6J4IU.mjs\");\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _public_DataProject_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/DataProject.png */ \"(app-pages-browser)/./public/DataProject.png\");\n/* harmony import */ var _public_JavascriptProject_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../public/JavascriptProject.png */ \"(app-pages-browser)/./public/JavascriptProject.png\");\n/* harmony import */ var _public_Splash_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/Splash.png */ \"(app-pages-browser)/./public/Splash.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: black;\\n  color: peachpuff;\\n  height: 100vh;\\n  display: flex;\\n  font-size: 2rem;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst ProjectsContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\ngsap__WEBPACK_IMPORTED_MODULE_8__.gsap.registerPlugin(_gsap_react__WEBPACK_IMPORTED_MODULE_3__.useGSAP);\ngsap__WEBPACK_IMPORTED_MODULE_8__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_9__.ScrollTrigger);\nfunction Projects() {\n    _s();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_3__.useGSAP)(()=>{\n        //   useEffect(() => {\n        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_9__.ScrollTrigger.create({\n            trigger: container.current,\n            start: \"top bottom\",\n            end: \"bottom bottom\",\n            markers: false,\n            onEnter: ()=>gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(container.current, {\n                    backgroundColor: \"#000\",\n                    color: \"#fff\"\n                }),\n            onLeaveBack: ()=>gsap__WEBPACK_IMPORTED_MODULE_8__.gsap.to(container.current, {\n                    backgroundColor: \"#000\",\n                    color: \"#fff\"\n                })\n        });\n    //   }, []);\n    }, {\n        scope: container\n    }); // <-- scope is for selector text (optional)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container\",\n        id: \"projects-section\",\n        ref: container,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-8 gap-x-4 gap-y-14 auto-rows-max\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"row-start-2 col-start-1 col-span-8 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (next_font_google_target_css_path_src_app_components_Projects_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_10___default().className),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"lg:text-8xl sm:text-7xl text-5xl text-right\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"row-start-3 col-start-1 col-span-8 text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.link_default, {\n                        isExternal: true,\n                        href: \"https://machine-learning-project-i-ewi57ecwky.streamlit.app/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_12__.image_default, {\n                            width: 700,\n                            src: _public_DataProject_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                            alt: \"Data Project\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"row-start-4 col-start-1 col-span-8 text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.link_default, {\n                        isExternal: true,\n                        href: \"https://philiptimothe.github.io/Contact_List/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_12__.image_default, {\n                            width: 700,\n                            src: _public_JavascriptProject_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                            alt: \"JavaScript Project\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"row-start-5 col-start-1 col-span-8 text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.link_default, {\n                        isExternal: true,\n                        href: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_12__.image_default, {\n                            width: 700,\n                            src: _public_Splash_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n                            alt: \"Splash\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Projects.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, this);\n}\n_s(Projects, \"rHbtpTvjRV8wc+C7qlvIGf1YLV8=\", false, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_3__.useGSAP\n    ];\n});\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCTUE7QUFLQUM7QUFuQm9CO0FBQ0s7QUFDMEI7QUFDbkI7QUFDVjtBQUN1QjtBQUNaO0FBSW1CO0FBQ1k7QUFDdEI7QUFZaEQsTUFBTVksb0JBQW9CSix5REFBTUEsQ0FBQ0ssR0FBRztBQVFwQ1Asc0NBQUlBLENBQUNRLGNBQWMsQ0FBQ1QsZ0RBQU9BO0FBQzNCQyxzQ0FBSUEsQ0FBQ1EsY0FBYyxDQUFDUCw2REFBYUE7QUFFbEIsU0FBU1E7O0lBQ3RCLE1BQU1DLFlBQVlkLDZDQUFNQSxDQUFpQjtJQUV6Q0csb0RBQU9BLENBQ0w7UUFDRSxzQkFBc0I7UUFDdEJFLDZEQUFhQSxDQUFDVSxNQUFNLENBQUM7WUFDbkJDLFNBQVNGLFVBQVVHLE9BQU87WUFDMUJDLE9BQU87WUFDUEMsS0FBSztZQUNMQyxTQUFTO1lBQ1RDLFNBQVMsSUFDUGpCLHNDQUFJQSxDQUFDa0IsRUFBRSxDQUFDUixVQUFVRyxPQUFPLEVBQUU7b0JBQ3pCTSxpQkFBaUI7b0JBQ2pCQyxPQUFPO2dCQUNUO1lBQ0ZDLGFBQWEsSUFDWHJCLHNDQUFJQSxDQUFDa0IsRUFBRSxDQUFDUixVQUFVRyxPQUFPLEVBQUU7b0JBQ3pCTSxpQkFBaUI7b0JBQ2pCQyxPQUFPO2dCQUVUO1FBQ0o7SUFDQSxZQUFZO0lBQ2QsR0FDQTtRQUFFRSxPQUFPWjtJQUFVLElBQ2xCLDRDQUE0QztJQUUvQyxxQkFDRSw4REFBQ0g7UUFBSWdCLFdBQVU7UUFBWUMsSUFBRztRQUFtQkMsS0FBS2Y7a0JBQ3BELDRFQUFDSDtZQUFJZ0IsV0FBVTs7OEJBQ2IsOERBQUNoQjtvQkFBSWdCLFdBQVU7OEJBQ2IsNEVBQUNoQjt3QkFBSWdCLFdBQVc3Qiw4TEFBb0I7a0NBQ2xDLDRFQUFDZ0M7NEJBQUVILFdBQVU7c0NBQThDOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUsvRCw4REFBQ2hCO29CQUFJZ0IsV0FBVTs4QkFDYiw0RUFBQzFCLDREQUFJQTt3QkFDSDhCLFVBQVU7d0JBQ1ZDLE1BQUs7a0NBRUwsNEVBQUM5Qiw2REFBS0E7NEJBQUMrQixPQUFPOzRCQUFLQyxLQUFLM0IsK0RBQVdBLENBQUMyQixHQUFHOzRCQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUdqRCw4REFBQ3hCO29CQUFJZ0IsV0FBVTs4QkFDYiw0RUFBQzFCLDREQUFJQTt3QkFBQzhCLFVBQVU7d0JBQUNDLE1BQUs7a0NBQ3BCLDRFQUFDOUIsNkRBQUtBOzRCQUNKK0IsT0FBTzs0QkFDUEMsS0FBSzFCLHFFQUFpQkEsQ0FBQzBCLEdBQUc7NEJBQzFCQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUlWLDhEQUFDeEI7b0JBQUlnQixXQUFVOzhCQUNiLDRFQUFDMUIsNERBQUlBO3dCQUFDOEIsVUFBVTt3QkFBQ0MsTUFBSztrQ0FDcEIsNEVBQUM5Qiw2REFBS0E7NEJBQUMrQixPQUFPOzRCQUFLQyxLQUFLekIsMERBQU1BLENBQUN5QixHQUFHOzRCQUFFQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEQ7R0EvRHdCdEI7O1FBR3RCVixnREFBT0E7OztLQUhlVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzcyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgSW1hZ2UsIERpdmlkZXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUdTQVAgfSBmcm9tIFwiQGdzYXAvcmVhY3RcIjtcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IFJvYm90byB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmltcG9ydCBEYXRhUHJvamVjdCBmcm9tIFwiLi4vLi4vLi4vcHVibGljL0RhdGFQcm9qZWN0LnBuZ1wiO1xuaW1wb3J0IEphdmFzY3JpcHRQcm9qZWN0IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvSmF2YXNjcmlwdFByb2plY3QucG5nXCI7XG5pbXBvcnQgU3BsYXNoIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvU3BsYXNoLnBuZ1wiO1xuXG5jb25zdCByb2JvdG9UaGluID0gUm9ib3RvKHtcbiAgc3Vic2V0czogW1wibGF0aW5cIl0sXG4gIHdlaWdodDogW1wiMzAwXCJdLFxufSk7XG5cbmNvbnN0IHJvYm90b0JvbGQgPSBSb2JvdG8oe1xuICBzdWJzZXRzOiBbXCJsYXRpblwiXSxcbiAgd2VpZ2h0OiBbXCI0MDBcIl0sXG59KTtcblxuY29uc3QgUHJvamVjdHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHBlYWNocHVmZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAycmVtO1xuYDtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbih1c2VHU0FQKTtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUdTQVAoXG4gICAgKCkgPT4ge1xuICAgICAgLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgICAgICB0cmlnZ2VyOiBjb250YWluZXIuY3VycmVudCxcbiAgICAgICAgc3RhcnQ6IFwidG9wIGJvdHRvbVwiLFxuICAgICAgICBlbmQ6IFwiYm90dG9tIGJvdHRvbVwiLFxuICAgICAgICBtYXJrZXJzOiBmYWxzZSxcbiAgICAgICAgb25FbnRlcjogKCkgPT5cbiAgICAgICAgICBnc2FwLnRvKGNvbnRhaW5lci5jdXJyZW50LCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgIH0pLFxuICAgICAgICBvbkxlYXZlQmFjazogKCkgPT5cbiAgICAgICAgICBnc2FwLnRvKGNvbnRhaW5lci5jdXJyZW50LCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgLy8gY29sb3I6IFwicGVhY2hwdWZmXCIsXG4gICAgICAgICAgfSksXG4gICAgICB9KTtcbiAgICAgIC8vICAgfSwgW10pO1xuICAgIH0sXG4gICAgeyBzY29wZTogY29udGFpbmVyIH1cbiAgKTsgLy8gPC0tIHNjb3BlIGlzIGZvciBzZWxlY3RvciB0ZXh0IChvcHRpb25hbClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJwcm9qZWN0cy1zZWN0aW9uXCIgcmVmPXtjb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy04IGdhcC14LTQgZ2FwLXktMTQgYXV0by1yb3dzLW1heFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zdGFydC0yIGNvbC1zdGFydC0xIGNvbC1zcGFuLTggXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JvYm90b0JvbGQuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxnOnRleHQtOHhsIHNtOnRleHQtN3hsIHRleHQtNXhsIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXN0YXJ0LTMgY29sLXN0YXJ0LTEgY29sLXNwYW4tOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBpc0V4dGVybmFsXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tYWNoaW5lLWxlYXJuaW5nLXByb2plY3QtaS1ld2k1N2Vjd2t5LnN0cmVhbWxpdC5hcHAvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezcwMH0gc3JjPXtEYXRhUHJvamVjdC5zcmN9IGFsdD1cIkRhdGEgUHJvamVjdFwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc3RhcnQtNCBjb2wtc3RhcnQtMSBjb2wtc3Bhbi04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPExpbmsgaXNFeHRlcm5hbCBocmVmPVwiaHR0cHM6Ly9waGlsaXB0aW1vdGhlLmdpdGh1Yi5pby9Db250YWN0X0xpc3QvXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgd2lkdGg9ezcwMH1cbiAgICAgICAgICAgICAgc3JjPXtKYXZhc2NyaXB0UHJvamVjdC5zcmN9XG4gICAgICAgICAgICAgIGFsdD1cIkphdmFTY3JpcHQgUHJvamVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXN0YXJ0LTUgY29sLXN0YXJ0LTEgY29sLXNwYW4tOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxMaW5rIGlzRXh0ZXJuYWwgaHJlZj1cIlwiPlxuICAgICAgICAgICAgPEltYWdlIHdpZHRoPXs3MDB9IHNyYz17U3BsYXNoLnNyY30gYWx0PVwiU3BsYXNoXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsicm9ib3RvVGhpbiIsInJvYm90b0JvbGQiLCJSZWFjdCIsInVzZVJlZiIsIkxpbmsiLCJJbWFnZSIsInVzZUdTQVAiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInN0eWxlZCIsIkRhdGFQcm9qZWN0IiwiSmF2YXNjcmlwdFByb2plY3QiLCJTcGxhc2giLCJQcm9qZWN0c0NvbnRhaW5lciIsImRpdiIsInJlZ2lzdGVyUGx1Z2luIiwiUHJvamVjdHMiLCJjb250YWluZXIiLCJjcmVhdGUiLCJ0cmlnZ2VyIiwiY3VycmVudCIsInN0YXJ0IiwiZW5kIiwibWFya2VycyIsIm9uRW50ZXIiLCJ0byIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwib25MZWF2ZUJhY2siLCJzY29wZSIsImNsYXNzTmFtZSIsImlkIiwicmVmIiwicCIsImlzRXh0ZXJuYWwiLCJocmVmIiwid2lkdGgiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Projects.tsx\n"));

/***/ })

});