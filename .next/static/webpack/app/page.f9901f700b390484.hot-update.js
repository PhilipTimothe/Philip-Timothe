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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Banner; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var _gsap_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gsap/react */ \"(app-pages-browser)/./node_modules/@gsap/react/src/index.js\");\n/* harmony import */ var gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/TextPlugin */ \"(app-pages-browser)/./node_modules/gsap/TextPlugin.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP);\ngsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_TextPlugin__WEBPACK_IMPORTED_MODULE_4__.TextPlugin);\nfunction Banner() {\n    _s();\n    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const text = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,_gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP)(()=>{\n        // gsap code here...\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(\"#banner\", {\n            duration: 1,\n            text: \"Your new text\"\n        }); // <-- automatically reverted\n    }, {\n        scope: container\n    }); // <-- scope is for selector text (optional)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"md:container md:mx-auto\",\n        ref: container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                class: \"text-8xl text-center\",\n                children: \"Multifaceted\"\n            }, void 0, false, {\n                fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                class: \"text-8xl text-center\",\n                id: \"banner\",\n                ref: text,\n                children: \"Developer\"\n            }, void 0, false, {\n                fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Philip/Desktop/Code/PhilipPortfolio/Philip-Timothe/src/app/components/Banner.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Banner, \"grQrG1CgbpybdCFibEFQjJwsjk0=\", false, function() {\n    return [\n        _gsap_react__WEBPACK_IMPORTED_MODULE_2__.useGSAP\n    ];\n});\n_c = Banner;\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9CYW5uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUrQjtBQUVIO0FBQ1U7QUFDTztBQUU3Q0Msc0NBQUlBLENBQUNHLGNBQWMsQ0FBQ0YsZ0RBQU9BO0FBQzNCRCxzQ0FBSUEsQ0FBQ0csY0FBYyxDQUFDRCx1REFBVUE7QUFFZixTQUFTRTs7SUFDdEIsTUFBTUMsWUFBWU4sNkNBQU1BO0lBQ3hCLE1BQU1PLE9BQU9QLDZDQUFNQTtJQUVuQkUsb0RBQU9BLENBQ0w7UUFDRSxvQkFBb0I7UUFDcEJELHNDQUFJQSxDQUFDTyxFQUFFLENBQUMsV0FBVztZQUNqQkMsVUFBVTtZQUNWRixNQUFNO1FBQ1IsSUFBSSw2QkFBNkI7SUFDbkMsR0FDQTtRQUFFRyxPQUFPSjtJQUFVLElBQ2xCLDRDQUE0QztJQUUvQyxxQkFDRSw4REFBQ0s7UUFBSUMsT0FBTTtRQUEwQkMsS0FBS1A7OzBCQUN4Qyw4REFBQ1E7Z0JBQUVGLE9BQU07MEJBQXVCOzs7Ozs7MEJBQ2hDLDhEQUFDRTtnQkFBRUYsT0FBTTtnQkFBdUJHLElBQUc7Z0JBQVNGLEtBQUtOOzBCQUFNOzs7Ozs7Ozs7Ozs7QUFLN0Q7R0F2QndCRjs7UUFJdEJILGdEQUFPQTs7O0tBSmVHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9CYW5uZXIudHN4PzYyODQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IHVzZUdTQVAgfSBmcm9tIFwiQGdzYXAvcmVhY3RcIjtcbmltcG9ydCB7IFRleHRQbHVnaW4gfSBmcm9tIFwiZ3NhcC9UZXh0UGx1Z2luXCI7XG5cbmdzYXAucmVnaXN0ZXJQbHVnaW4odXNlR1NBUCk7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFRleHRQbHVnaW4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZigpO1xuICBjb25zdCB0ZXh0ID0gdXNlUmVmKCk7XG5cbiAgdXNlR1NBUChcbiAgICAoKSA9PiB7XG4gICAgICAvLyBnc2FwIGNvZGUgaGVyZS4uLlxuICAgICAgZ3NhcC50byhcIiNiYW5uZXJcIiwge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgdGV4dDogXCJZb3VyIG5ldyB0ZXh0XCIsXG4gICAgICB9KTsgLy8gPC0tIGF1dG9tYXRpY2FsbHkgcmV2ZXJ0ZWRcbiAgICB9LFxuICAgIHsgc2NvcGU6IGNvbnRhaW5lciB9XG4gICk7IC8vIDwtLSBzY29wZSBpcyBmb3Igc2VsZWN0b3IgdGV4dCAob3B0aW9uYWwpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzPVwibWQ6Y29udGFpbmVyIG1kOm14LWF1dG9cIiByZWY9e2NvbnRhaW5lcn0+XG4gICAgICA8cCBjbGFzcz1cInRleHQtOHhsIHRleHQtY2VudGVyXCI+TXVsdGlmYWNldGVkPC9wPlxuICAgICAgPHAgY2xhc3M9XCJ0ZXh0LTh4bCB0ZXh0LWNlbnRlclwiIGlkPVwiYmFubmVyXCIgcmVmPXt0ZXh0fT5cbiAgICAgICAgRGV2ZWxvcGVyXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwiZ3NhcCIsInVzZUdTQVAiLCJUZXh0UGx1Z2luIiwicmVnaXN0ZXJQbHVnaW4iLCJCYW5uZXIiLCJjb250YWluZXIiLCJ0ZXh0IiwidG8iLCJkdXJhdGlvbiIsInNjb3BlIiwiZGl2IiwiY2xhc3MiLCJyZWYiLCJwIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Banner.tsx\n"));

/***/ })

});