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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_robotoThin___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/components/Banner.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\"]}],\"variableName\":\"robotoThin\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/components/Banner.tsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\"]}],\\\"variableName\\\":\\\"robotoThin\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_robotoThin___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_robotoThin___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/components/Banner.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"robotoBold\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/components/Banner.tsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\"]}],\\\"variableName\\\":\\\"robotoBold\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/TextPlugin */ \"(app-pages-browser)/./node_modules/gsap/TextPlugin.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP, gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__.TextPlugin, gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger);\nfunction Banner() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const bannerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    function useDeviceType() {\n        _s1();\n        const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n        const checkDeviceType = ()=>{\n            const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;\n            setIsMobile(isMobileDevice);\n        };\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            // Initial check\n            checkDeviceType();\n            // Event listener for resize event\n            window.addEventListener(\"resize\", checkDeviceType);\n            // Cleanup event listener on component unmount\n            return ()=>{\n                window.removeEventListener(\"resize\", checkDeviceType);\n            };\n        }, []);\n        return isMobile;\n    }\n    _s1(useDeviceType, \"0VTTNJATKABQPGLm9RVT0tKGUgU=\");\n    const isMobile = useDeviceType();\n    // create a timeline\n    let tl = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline();\n    let scrollTriggerInstance;\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP)(()=>{\n        // gsap code here...\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Data Engineer\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Creator\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Founder\"\n        });\n        tl.to(\"#banner\", {\n            duration: 1,\n            delay: 1,\n            text: \"Software Engineer\"\n        });\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.from(\"#quote\", {\n            delay: 4,\n            duration: 2.5,\n            yPercent: 200,\n            ease: \"power4\",\n            stagger: 0\n        });\n    // const setupScrollTrigger = () => {\n    //   if (!isMobile) {\n    //     scrollTriggerInstance = gsap.to(bannerRef.current, {\n    //       yPercent: -200,\n    //       ease: \"none\",\n    //       scrollTrigger: {\n    //         trigger: container.current,\n    //         start: \"top top\",\n    //         end: \"bottom top\",\n    //         scrub: true,\n    //       },\n    //     });\n    //   }\n    // };\n    }, {\n        scope: container\n    }); // <-- scope is for selector text (optional)\n    // console.log(useDeviceType());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const setupScrollTrigger = ()=>{\n            if (!isMobile) {\n                scrollTriggerInstance = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(bannerRef.current, {\n                    yPercent: -200,\n                    ease: \"none\",\n                    scrollTrigger: {\n                        trigger: container.current,\n                        start: \"top top\",\n                        end: \"bottom top\",\n                        scrub: true\n                    }\n                });\n            }\n        };\n        const killScrollTrigger = ()=>{\n            if (scrollTriggerInstance && scrollTriggerInstance.scrollTrigger) {\n                scrollTriggerInstance.scrollTrigger.kill();\n            }\n        };\n        setupScrollTrigger();\n        const handleResize = ()=>{\n            // console.log(isMobile);\n            if (isMobile) {\n                killScrollTrigger();\n            } else {\n                setupScrollTrigger();\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            killScrollTrigger();\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, [\n        isMobile\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container md:mx-auto h-screen flex items-center justify-center\",\n        ref: container,\n        id: \"banner-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-8 gap-2 fixed\",\n            ref: bannerRef,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-span-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_6___default().className),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"lg:text-8xl sm:text-7xl text-5xl text-center\",\n                            id: \"banner\",\n                            children: \"Multifaceted Developer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                            lineNumber: 161,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                    lineNumber: 159,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-start-5 col-span-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (next_font_google_target_css_path_src_app_components_Banner_tsx_import_Roboto_arguments_subsets_latin_weight_100_variableName_robotoThin___WEBPACK_IMPORTED_MODULE_7___default().className),\n                        id: \"banner-quotebox\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"lg:text-base sm:text-sm text-xs text-center\",\n                            id: \"quote\",\n                            children: \"Creative data engineer with a passion for blending technology and art. Skilled in innovative problem-solving and continuous learning, bringing a unique perspective to every challenge. Adaptable, driven, and ready to make an impact.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                            lineNumber: 171,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                    lineNumber: 169,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n            lineNumber: 158,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n        lineNumber: 153,\n        columnNumber: 5\n    }, this);\n}\n_s(Banner, \"YzZS95nPCaWeZ+cBUqhLSKjOvq8=\", true, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP\n    ];\n});\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9CYW5uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV01BO0FBS0FDO0FBZDhDO0FBRXhCO0FBQ1U7QUFDTztBQUNNO0FBY25ESSxzQ0FBSUEsQ0FBQ0ksY0FBYyxDQUFDSCxnREFBT0EsRUFBRUMsdURBQVVBLEVBQUVDLDZEQUFhQTtBQUV2QyxTQUFTRTs7O0lBQ3RCLE1BQU1DLFlBQVlULDZDQUFNQSxDQUFpQjtJQUN6QyxNQUFNVSxZQUFZViw2Q0FBTUEsQ0FBaUI7SUFFekMsU0FBU1c7O1FBQ1AsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO1FBRXpDLE1BQU1ZLGtCQUFrQjtZQUN0QixNQUFNQyxpQkFDSiw0QkFBNEJDLElBQUksQ0FBQ0MsVUFBVUMsU0FBUyxLQUNwREMsT0FBT0MsVUFBVSxJQUFJO1lBQ3ZCUCxZQUFZRTtRQUNkO1FBRUFkLGdEQUFTQSxDQUFDO1lBQ1IsZ0JBQWdCO1lBQ2hCYTtZQUVBLGtDQUFrQztZQUNsQ0ssT0FBT0UsZ0JBQWdCLENBQUMsVUFBVVA7WUFFbEMsOENBQThDO1lBQzlDLE9BQU87Z0JBQ0xLLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVSO1lBQ3ZDO1FBQ0YsR0FBRyxFQUFFO1FBRUwsT0FBT0Y7SUFDVDtRQXhCU0Q7SUEwQlQsTUFBTUMsV0FBV0Q7SUFFakIsb0JBQW9CO0lBQ3BCLElBQUlZLEtBQUtwQixzQ0FBSUEsQ0FBQ3FCLFFBQVE7SUFDdEIsSUFBSUM7SUFFSnJCLG9EQUFPQSxDQUNMO1FBQ0Usb0JBQW9CO1FBQ3BCbUIsR0FBR0csRUFBRSxDQUFDLFdBQVc7WUFDZkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBTixHQUFHRyxFQUFFLENBQUMsV0FBVztZQUNmQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0FOLEdBQUdHLEVBQUUsQ0FBQyxXQUFXO1lBQ2ZDLFVBQVU7WUFDVkMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQU4sR0FBR0csRUFBRSxDQUFDLFdBQVc7WUFDZkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUVBMUIsc0NBQUlBLENBQUMyQixJQUFJLENBQUMsVUFBVTtZQUNsQkYsT0FBTztZQUNQRCxVQUFVO1lBQ1ZJLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxTQUFTO1FBQ1g7SUFFQSxxQ0FBcUM7SUFDckMscUJBQXFCO0lBQ3JCLDJEQUEyRDtJQUMzRCx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixzQ0FBc0M7SUFDdEMsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixNQUFNO0lBQ04sS0FBSztJQUNQLEdBQ0E7UUFBRUMsT0FBT3pCO0lBQVUsSUFDbEIsNENBQTRDO0lBRS9DLGdDQUFnQztJQUVoQ1IsZ0RBQVNBLENBQUM7UUFDUixNQUFNa0MscUJBQXFCO1lBQ3pCLElBQUksQ0FBQ3ZCLFVBQVU7Z0JBQ2JhLHdCQUF3QnRCLHNDQUFJQSxDQUFDdUIsRUFBRSxDQUFDaEIsVUFBVTBCLE9BQU8sRUFBRTtvQkFDakRMLFVBQVUsQ0FBQztvQkFDWEMsTUFBTTtvQkFDTkssZUFBZTt3QkFDYkMsU0FBUzdCLFVBQVUyQixPQUFPO3dCQUMxQkcsT0FBTzt3QkFDUEMsS0FBSzt3QkFDTEMsT0FBTztvQkFDVDtnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxNQUFNQyxvQkFBb0I7WUFDeEIsSUFBSWpCLHlCQUF5QkEsc0JBQXNCWSxhQUFhLEVBQUU7Z0JBQ2hFWixzQkFBc0JZLGFBQWEsQ0FBQ00sSUFBSTtZQUMxQztRQUNGO1FBRUFSO1FBRUEsTUFBTVMsZUFBZTtZQUNuQix5QkFBeUI7WUFDekIsSUFBSWhDLFVBQVU7Z0JBQ1o4QjtZQUNGLE9BQU87Z0JBQ0xQO1lBQ0Y7UUFDRjtRQUVBaEIsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVXVCO1FBQ2xDLE9BQU87WUFDTEY7WUFDQXZCLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVzQjtRQUN2QztJQUNGLEdBQUc7UUFBQ2hDO0tBQVM7SUFFYixxQkFDRSw4REFBQ2lDO1FBQ0NDLFdBQVU7UUFDVkMsS0FBS3RDO1FBQ0x1QyxJQUFHO2tCQUVILDRFQUFDSDtZQUFJQyxXQUFVO1lBQStCQyxLQUFLckM7OzhCQUNqRCw4REFBQ21DO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVy9DLDJMQUFvQjtrQ0FDbEMsNEVBQUNrRDs0QkFDQ0gsV0FBVTs0QkFDVkUsSUFBRztzQ0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLTCw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFXaEQsMkxBQW9CO3dCQUFFa0QsSUFBRztrQ0FDdkMsNEVBQUNDOzRCQUNDSCxXQUFVOzRCQUNWRSxJQUFHO3NDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXYjtHQWpLd0J4Qzs7UUFvQ3RCSixnREFBT0E7OztLQXBDZUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0Jhbm5lci50c3g/NjI4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgdXNlR1NBUCB9IGZyb20gXCJAZ3NhcC9yZWFjdFwiO1xuaW1wb3J0IHsgVGV4dFBsdWdpbiB9IGZyb20gXCJnc2FwL1RleHRQbHVnaW5cIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmltcG9ydCB7IFJvYm90byB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmNvbnN0IHJvYm90b1RoaW4gPSBSb2JvdG8oe1xuICBzdWJzZXRzOiBbXCJsYXRpblwiXSxcbiAgd2VpZ2h0OiBbXCIxMDBcIl0sXG59KTtcblxuY29uc3Qgcm9ib3RvQm9sZCA9IFJvYm90byh7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB3ZWlnaHQ6IFtcIjQwMFwiXSxcbn0pO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKHVzZUdTQVAsIFRleHRQbHVnaW4sIFNjcm9sbFRyaWdnZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGJhbm5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgZnVuY3Rpb24gdXNlRGV2aWNlVHlwZSgpIHtcbiAgICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNoZWNrRGV2aWNlVHlwZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlzTW9iaWxlRGV2aWNlID1cbiAgICAgICAgL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHxcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggPD0gNzY4O1xuICAgICAgc2V0SXNNb2JpbGUoaXNNb2JpbGVEZXZpY2UpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gSW5pdGlhbCBjaGVja1xuICAgICAgY2hlY2tEZXZpY2VUeXBlKCk7XG5cbiAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciByZXNpemUgZXZlbnRcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrRGV2aWNlVHlwZSk7XG5cbiAgICAgIC8vIENsZWFudXAgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoZWNrRGV2aWNlVHlwZSk7XG4gICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpc01vYmlsZTtcbiAgfVxuXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlRGV2aWNlVHlwZSgpO1xuXG4gIC8vIGNyZWF0ZSBhIHRpbWVsaW5lXG4gIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKTtcbiAgbGV0IHNjcm9sbFRyaWdnZXJJbnN0YW5jZTogZ3NhcC5jb3JlLlR3ZWVuO1xuXG4gIHVzZUdTQVAoXG4gICAgKCkgPT4ge1xuICAgICAgLy8gZ3NhcCBjb2RlIGhlcmUuLi5cbiAgICAgIHRsLnRvKFwiI2Jhbm5lclwiLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBkZWxheTogMSxcbiAgICAgICAgdGV4dDogXCJEYXRhIEVuZ2luZWVyXCIsXG4gICAgICB9KTtcbiAgICAgIHRsLnRvKFwiI2Jhbm5lclwiLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBkZWxheTogMSxcbiAgICAgICAgdGV4dDogXCJDcmVhdG9yXCIsXG4gICAgICB9KTtcbiAgICAgIHRsLnRvKFwiI2Jhbm5lclwiLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBkZWxheTogMSxcbiAgICAgICAgdGV4dDogXCJGb3VuZGVyXCIsXG4gICAgICB9KTtcbiAgICAgIHRsLnRvKFwiI2Jhbm5lclwiLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICBkZWxheTogMSxcbiAgICAgICAgdGV4dDogXCJTb2Z0d2FyZSBFbmdpbmVlclwiLFxuICAgICAgfSk7XG5cbiAgICAgIGdzYXAuZnJvbShcIiNxdW90ZVwiLCB7XG4gICAgICAgIGRlbGF5OiA0LFxuICAgICAgICBkdXJhdGlvbjogMi41LFxuICAgICAgICB5UGVyY2VudDogMjAwLFxuICAgICAgICBlYXNlOiBcInBvd2VyNFwiLFxuICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGNvbnN0IHNldHVwU2Nyb2xsVHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIC8vICAgaWYgKCFpc01vYmlsZSkge1xuICAgICAgLy8gICAgIHNjcm9sbFRyaWdnZXJJbnN0YW5jZSA9IGdzYXAudG8oYmFubmVyUmVmLmN1cnJlbnQsIHtcbiAgICAgIC8vICAgICAgIHlQZXJjZW50OiAtMjAwLFxuICAgICAgLy8gICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAvLyAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAvLyAgICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lci5jdXJyZW50LFxuICAgICAgLy8gICAgICAgICBzdGFydDogXCJ0b3AgdG9wXCIsXG4gICAgICAvLyAgICAgICAgIGVuZDogXCJib3R0b20gdG9wXCIsXG4gICAgICAvLyAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgLy8gICAgICAgfSxcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfTtcbiAgICB9LFxuICAgIHsgc2NvcGU6IGNvbnRhaW5lciB9XG4gICk7IC8vIDwtLSBzY29wZSBpcyBmb3Igc2VsZWN0b3IgdGV4dCAob3B0aW9uYWwpXG5cbiAgLy8gY29uc29sZS5sb2codXNlRGV2aWNlVHlwZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNldHVwU2Nyb2xsVHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIGlmICghaXNNb2JpbGUpIHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlckluc3RhbmNlID0gZ3NhcC50byhiYW5uZXJSZWYuY3VycmVudCwge1xuICAgICAgICAgIHlQZXJjZW50OiAtMjAwLFxuICAgICAgICAgIGVhc2U6IFwibm9uZVwiLFxuICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IGNvbnRhaW5lci5jdXJyZW50LFxuICAgICAgICAgICAgc3RhcnQ6IFwidG9wIHRvcFwiLFxuICAgICAgICAgICAgZW5kOiBcImJvdHRvbSB0b3BcIixcbiAgICAgICAgICAgIHNjcnViOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBraWxsU2Nyb2xsVHJpZ2dlciA9ICgpID0+IHtcbiAgICAgIGlmIChzY3JvbGxUcmlnZ2VySW5zdGFuY2UgJiYgc2Nyb2xsVHJpZ2dlckluc3RhbmNlLnNjcm9sbFRyaWdnZXIpIHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlckluc3RhbmNlLnNjcm9sbFRyaWdnZXIua2lsbCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzZXR1cFNjcm9sbFRyaWdnZXIoKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGlzTW9iaWxlKTtcbiAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICBraWxsU2Nyb2xsVHJpZ2dlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0dXBTY3JvbGxUcmlnZ2VyKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGtpbGxTY3JvbGxUcmlnZ2VyKCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtpc01vYmlsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1kOm14LWF1dG8gaC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgcmVmPXtjb250YWluZXJ9XG4gICAgICBpZD1cImJhbm5lci1jb250YWluZXJcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtOCBnYXAtMiBmaXhlZFwiIHJlZj17YmFubmVyUmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JvYm90b0JvbGQuY2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOnRleHQtOHhsIHNtOnRleHQtN3hsIHRleHQtNXhsIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgaWQ9XCJiYW5uZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNdWx0aWZhY2V0ZWQgRGV2ZWxvcGVyXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zdGFydC01IGNvbC1zcGFuLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cm9ib3RvVGhpbi5jbGFzc05hbWV9IGlkPVwiYmFubmVyLXF1b3RlYm94XCI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzp0ZXh0LWJhc2Ugc206dGV4dC1zbSB0ZXh0LXhzIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgaWQ9XCJxdW90ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENyZWF0aXZlIGRhdGEgZW5naW5lZXIgd2l0aCBhIHBhc3Npb24gZm9yIGJsZW5kaW5nIHRlY2hub2xvZ3kgYW5kXG4gICAgICAgICAgICAgIGFydC4gU2tpbGxlZCBpbiBpbm5vdmF0aXZlIHByb2JsZW0tc29sdmluZyBhbmQgY29udGludW91c1xuICAgICAgICAgICAgICBsZWFybmluZywgYnJpbmdpbmcgYSB1bmlxdWUgcGVyc3BlY3RpdmUgdG8gZXZlcnkgY2hhbGxlbmdlLlxuICAgICAgICAgICAgICBBZGFwdGFibGUsIGRyaXZlbiwgYW5kIHJlYWR5IHRvIG1ha2UgYW4gaW1wYWN0LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInJvYm90b1RoaW4iLCJyb2JvdG9Cb2xkIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnc2FwIiwidXNlR1NBUCIsIlRleHRQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwicmVnaXN0ZXJQbHVnaW4iLCJCYW5uZXIiLCJjb250YWluZXIiLCJiYW5uZXJSZWYiLCJ1c2VEZXZpY2VUeXBlIiwiaXNNb2JpbGUiLCJzZXRJc01vYmlsZSIsImNoZWNrRGV2aWNlVHlwZSIsImlzTW9iaWxlRGV2aWNlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRsIiwidGltZWxpbmUiLCJzY3JvbGxUcmlnZ2VySW5zdGFuY2UiLCJ0byIsImR1cmF0aW9uIiwiZGVsYXkiLCJ0ZXh0IiwiZnJvbSIsInlQZXJjZW50IiwiZWFzZSIsInN0YWdnZXIiLCJzY29wZSIsInNldHVwU2Nyb2xsVHJpZ2dlciIsImN1cnJlbnQiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInN0YXJ0IiwiZW5kIiwic2NydWIiLCJraWxsU2Nyb2xsVHJpZ2dlciIsImtpbGwiLCJoYW5kbGVSZXNpemUiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Banner.tsx\n"));

/***/ })

});