/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/AboutMe.tsx":
/*!****************************************!*\
  !*** ./src/app/components/AboutMe.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AvoutMe; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_AboutMe_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/app/components/AboutMe.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"robotoBold\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/app/components/AboutMe.tsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\"]}],\\\"variableName\\\":\\\"robotoBold\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_app_components_AboutMe_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_components_AboutMe_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP);\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\nfunction AvoutMe() {\n    _s();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // create a timeline\n    let tl = gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.timeline();\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP)(()=>{\n        // gsap code here...\n        const getRatio = (el)=>window.innerHeight / (window.innerHeight + el.offsetHeight);\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.utils.toArray(\"section\").forEach((section, i)=>{\n            gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.fromTo(section, {\n                backgroundPosition: ()=>i ? \"50% \".concat(-window.innerHeight * getRatio(section), \"px\") : \"50% 0px\"\n            }, {\n                backgroundPosition: ()=>\"50% \".concat(window.innerHeight * (1 - getRatio(section)), \"px\"),\n                ease: \"none\",\n                scrollTrigger: {\n                    trigger: section,\n                    start: ()=>i ? \"top bottom\" : \"top top\",\n                    end: \"bottom top\",\n                    scrub: true,\n                    invalidateOnRefresh: true\n                }\n            });\n        });\n    }, {\n        scope: container\n    }); // <-- scope is for selector text (optional)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: container,\n        className: \"aboutme\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (next_font_google_target_css_path_src_app_components_AboutMe_tsx_import_Roboto_arguments_subsets_latin_weight_400_variableName_robotoBold___WEBPACK_IMPORTED_MODULE_5___default().className),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/AboutMe.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/AboutMe.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/AboutMe.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(AvoutMe, \"rHbtpTvjRV8wc+C7qlvIGf1YLV8=\", false, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP\n    ];\n});\n_c = AvoutMe;\nvar _c;\n$RefreshReg$(_c, \"AvoutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BYm91dE1lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVVNQTtBQUtBQztBQWJ5QjtBQUVIO0FBQ1U7QUFDYTtBQWNuREUsc0NBQUlBLENBQUNHLGNBQWMsQ0FBQ0YsZ0RBQU9BO0FBQzNCRCxzQ0FBSUEsQ0FBQ0csY0FBYyxDQUFDRCw2REFBYUE7QUFFbEIsU0FBU0U7O0lBQ3RCLE1BQU1DLFlBQVlOLDZDQUFNQTtJQUN4QixvQkFBb0I7SUFDcEIsSUFBSU8sS0FBS04sc0NBQUlBLENBQUNPLFFBQVE7SUFFdEJOLG9EQUFPQSxDQUNMO1FBQ0Usb0JBQW9CO1FBRXBCLE1BQU1PLFdBQVcsQ0FBQ0MsS0FDaEJDLE9BQU9DLFdBQVcsR0FBSUQsQ0FBQUEsT0FBT0MsV0FBVyxHQUFHRixHQUFHRyxZQUFZO1FBRTVEWixzQ0FBSUEsQ0FBQ2EsS0FBSyxDQUFDQyxPQUFPLENBQWMsV0FBV0MsT0FBTyxDQUFDLENBQUNDLFNBQVNDO1lBQzNEakIsc0NBQUlBLENBQUNrQixNQUFNLENBQ1RGLFNBQ0E7Z0JBQ0VHLG9CQUFvQixJQUNsQkYsSUFDSSxPQUErQyxPQUF4QyxDQUFDUCxPQUFPQyxXQUFXLEdBQUdILFNBQVNRLFVBQVMsUUFDL0M7WUFDUixHQUNBO2dCQUNFRyxvQkFBb0IsSUFDbEIsT0FBb0QsT0FBN0NULE9BQU9DLFdBQVcsR0FBSSxLQUFJSCxTQUFTUSxRQUFPLEdBQUc7Z0JBQ3RESSxNQUFNO2dCQUNOQyxlQUFlO29CQUNiQyxTQUFTTjtvQkFDVE8sT0FBTyxJQUFPTixJQUFJLGVBQWU7b0JBQ2pDTyxLQUFLO29CQUNMQyxPQUFPO29CQUNQQyxxQkFBcUI7Z0JBQ3ZCO1lBQ0Y7UUFFSjtJQUNGLEdBQ0E7UUFBRUMsT0FBT3RCO0lBQVUsSUFDbEIsNENBQTRDO0lBRS9DLHFCQUNFLDhEQUFDdUI7UUFBSUMsS0FBS3hCO1FBQVd5QixXQUFVO2tCQUM3Qiw0RUFBQ0Y7WUFBSUUsV0FBV2hDLDRMQUFvQjtzQkFDbEMsNEVBQUNpQzswQkFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUlYO0dBOUN3QjNCOztRQUt0QkgsZ0RBQU9BOzs7S0FMZUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0Fib3V0TWUudHN4PzViODYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IHVzZUdTQVAgfSBmcm9tIFwiQGdzYXAvcmVhY3RcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5cbmltcG9ydCB7IFJvYm90byB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5cbmNvbnN0IHJvYm90b1RoaW4gPSBSb2JvdG8oe1xuICBzdWJzZXRzOiBbXCJsYXRpblwiXSxcbiAgd2VpZ2h0OiBbXCIxMDBcIl0sXG59KTtcblxuY29uc3Qgcm9ib3RvQm9sZCA9IFJvYm90byh7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB3ZWlnaHQ6IFtcIjQwMFwiXSxcbn0pO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKHVzZUdTQVApO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZvdXRNZSgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmKCk7XG4gIC8vIGNyZWF0ZSBhIHRpbWVsaW5lXG4gIGxldCB0bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICB1c2VHU0FQKFxuICAgICgpID0+IHtcbiAgICAgIC8vIGdzYXAgY29kZSBoZXJlLi4uXG5cbiAgICAgIGNvbnN0IGdldFJhdGlvID0gKGVsOiBIVE1MRWxlbWVudCk6IG51bWJlciA9PlxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAod2luZG93LmlubmVySGVpZ2h0ICsgZWwub2Zmc2V0SGVpZ2h0KTtcblxuICAgICAgZ3NhcC51dGlscy50b0FycmF5PEhUTUxFbGVtZW50PihcInNlY3Rpb25cIikuZm9yRWFjaCgoc2VjdGlvbiwgaSkgPT4ge1xuICAgICAgICBnc2FwLmZyb21UbyhcbiAgICAgICAgICBzZWN0aW9uLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogKCkgPT5cbiAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgID8gYDUwJSAkey13aW5kb3cuaW5uZXJIZWlnaHQgKiBnZXRSYXRpbyhzZWN0aW9uKX1weGBcbiAgICAgICAgICAgICAgICA6IFwiNTAlIDBweFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAoKSA9PlxuICAgICAgICAgICAgICBgNTAlICR7d2luZG93LmlubmVySGVpZ2h0ICogKDEgLSBnZXRSYXRpbyhzZWN0aW9uKSl9cHhgLFxuICAgICAgICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgIHRyaWdnZXI6IHNlY3Rpb24sXG4gICAgICAgICAgICAgIHN0YXJ0OiAoKSA9PiAoaSA/IFwidG9wIGJvdHRvbVwiIDogXCJ0b3AgdG9wXCIpLFxuICAgICAgICAgICAgICBlbmQ6IFwiYm90dG9tIHRvcFwiLFxuICAgICAgICAgICAgICBzY3J1YjogdHJ1ZSxcbiAgICAgICAgICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICB7IHNjb3BlOiBjb250YWluZXIgfVxuICApOyAvLyA8LS0gc2NvcGUgaXMgZm9yIHNlbGVjdG9yIHRleHQgKG9wdGlvbmFsKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e2NvbnRhaW5lcn0gY2xhc3NOYW1lPVwiYWJvdXRtZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3JvYm90b0JvbGQuY2xhc3NOYW1lfT5cbiAgICAgICAgPHA+QWJvdXQgTWU8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJyb2JvdG9UaGluIiwicm9ib3RvQm9sZCIsInVzZVJlZiIsImdzYXAiLCJ1c2VHU0FQIiwiU2Nyb2xsVHJpZ2dlciIsInJlZ2lzdGVyUGx1Z2luIiwiQXZvdXRNZSIsImNvbnRhaW5lciIsInRsIiwidGltZWxpbmUiLCJnZXRSYXRpbyIsImVsIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ1dGlscyIsInRvQXJyYXkiLCJmb3JFYWNoIiwic2VjdGlvbiIsImkiLCJmcm9tVG8iLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJlYXNlIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsImVuZCIsInNjcnViIiwiaW52YWxpZGF0ZU9uUmVmcmVzaCIsInNjb3BlIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AboutMe.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/font/google/target.css?{\"path\":\"src/app/components/AboutMe.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"robotoBold\"}":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/font/google/target.css?{"path":"src/app/components/AboutMe.tsx","import":"Roboto","arguments":[{"subsets":["latin"],"weight":["400"]}],"variableName":"robotoBold"} ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// extracted by mini-css-extract-plugin\nmodule.exports = {\"style\":{\"fontFamily\":\"'__Roboto_792391', '__Roboto_Fallback_792391'\",\"fontWeight\":400,\"fontStyle\":\"normal\"},\"className\":\"__className_792391\"};\n    if(true) {\n      // 1715791730996\n      var cssReload = __webpack_require__(/*! ./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js */ \"(app-pages-browser)/./node_modules/next/dist/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js\")(module.id, {\"publicPath\":\"/_next/\",\"esModule\":false,\"locals\":true});\n      module.hot.dispose(cssReload);\n      \n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2ZvbnQvZ29vZ2xlL3RhcmdldC5jc3M/e1wicGF0aFwiOlwic3JjL2FwcC9jb21wb25lbnRzL0Fib3V0TWUudHN4XCIsXCJpbXBvcnRcIjpcIlJvYm90b1wiLFwiYXJndW1lbnRzXCI6W3tcInN1YnNldHNcIjpbXCJsYXRpblwiXSxcIndlaWdodFwiOltcIjQwMFwiXX1dLFwidmFyaWFibGVOYW1lXCI6XCJyb2JvdG9Cb2xkXCJ9IiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCLFNBQVMsbUdBQW1HO0FBQzlILE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLHdNQUErSSxjQUFjLHNEQUFzRDtBQUNqUCxNQUFNLFVBQVU7QUFDaEI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2ZvbnQvZ29vZ2xlL3RhcmdldC5jc3M/ZTFiYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wic3R5bGVcIjp7XCJmb250RmFtaWx5XCI6XCInX19Sb2JvdG9fNzkyMzkxJywgJ19fUm9ib3RvX0ZhbGxiYWNrXzc5MjM5MSdcIixcImZvbnRXZWlnaHRcIjo0MDAsXCJmb250U3R5bGVcIjpcIm5vcm1hbFwifSxcImNsYXNzTmFtZVwiOlwiX19jbGFzc05hbWVfNzkyMzkxXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE3MTU3OTE3MzA5OTZcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL1BoaWxpcC9EZXNrdG9wL0NvZGUvUGhpbGlwUG9ydGZvbGlvL1BoaWxpcC1UaW1vdGhlL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wicHVibGljUGF0aFwiOlwiL19uZXh0L1wiLFwiZXNNb2R1bGVcIjpmYWxzZSxcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/font/google/target.css?{\"path\":\"src/app/components/AboutMe.tsx\",\"import\":\"Roboto\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"]}],\"variableName\":\"robotoBold\"}\n"));

/***/ })

});