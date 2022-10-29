"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1";
exports.ids = ["pages/api/v1"];
exports.modules = {

/***/ "(api)/./pages/api/v1/index.ts":
/*!*******************************!*\
  !*** ./pages/api/v1/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    if (req.method == \"GET\") {\n        return res.status(200).json([\n            {\n                statisticTypeName: \"Humidity\",\n                statisticNumber: 40.50\n            },\n            {\n                statisticTypeName: \"Temperature\",\n                statisticNumber: 29\n            },\n            {\n                statisticTypeName: \"Luminosity\",\n                statisticNumber: 52\n            }, \n        ]);\n    }\n    return res.status(505).json({\n        message: \"method not allowed\"\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUdBLGlFQUFlLENBQUNBLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDN0QsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLElBQUksS0FBSyxFQUFFO1FBQ3hCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNwQkMsSUFBSSxDQUFDO1lBQ0w7Z0JBQ0NDLGlCQUFpQixFQUFFLFVBQVU7Z0JBQzdCQyxlQUFlLEVBQUUsS0FBSzthQUN0QjtZQUNEO2dCQUNDRCxpQkFBaUIsRUFBRSxhQUFhO2dCQUNoQ0MsZUFBZSxFQUFFLEVBQUU7YUFDbkI7WUFDRDtnQkFDQ0QsaUJBQWlCLEVBQUUsWUFBWTtnQkFDL0JDLGVBQWUsRUFBRSxFQUFFO2FBQ25CO1NBQ0QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU9MLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNwQkMsSUFBSSxDQUFDO1FBQUNHLE9BQU8sRUFBRSxvQkFBb0I7S0FBQyxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZmx1bWluZS9zZXJ2ZXItZW11bGF0b3IvLi9wYWdlcy9hcGkvdjEvaW5kZXgudHM/MWU5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcblx0aWYgKHJlcS5tZXRob2QgPT0gXCJHRVRcIikge1xuXHRcdHJldHVybiByZXMuc3RhdHVzKDIwMClcblx0XHRcdC5qc29uKFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXRpc3RpY1R5cGVOYW1lOiBcIkh1bWlkaXR5XCIsXG5cdFx0XHRcdFx0c3RhdGlzdGljTnVtYmVyOiA0MC41MFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhdGlzdGljVHlwZU5hbWU6IFwiVGVtcGVyYXR1cmVcIixcblx0XHRcdFx0XHRzdGF0aXN0aWNOdW1iZXI6IDI5XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGF0aXN0aWNUeXBlTmFtZTogXCJMdW1pbm9zaXR5XCIsXG5cdFx0XHRcdFx0c3RhdGlzdGljTnVtYmVyOiA1MlxuXHRcdFx0XHR9LFxuXHRcdFx0XSk7XG5cdH1cblxuXHRyZXR1cm4gcmVzLnN0YXR1cyg1MDUpXG5cdFx0Lmpzb24oe21lc3NhZ2U6IFwibWV0aG9kIG5vdCBhbGxvd2VkXCJ9KVxufSJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwic3RhdGlzdGljVHlwZU5hbWUiLCJzdGF0aXN0aWNOdW1iZXIiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/index.ts"));
module.exports = __webpack_exports__;

})();