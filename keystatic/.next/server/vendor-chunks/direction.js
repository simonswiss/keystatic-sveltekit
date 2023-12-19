"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/direction";
exports.ids = ["vendor-chunks/direction"];
exports.modules = {

/***/ "(ssr)/./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nmodule.exports = direction;\nvar RTL = \"֑-߿יִ-﷽ﹰ-ﻼ\";\nvar LTR = \"A-Za-z\\xc0-\\xd6\\xd8-\\xf6\" + \"\\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜\" + \"︀-﹯﻽-￿\";\nvar rtl = new RegExp(\"^[^\" + LTR + \"]*[\" + RTL + \"]\");\nvar ltr = new RegExp(\"^[^\" + RTL + \"]*[\" + LTR + \"]\");\nfunction direction(value) {\n    value = String(value || \"\");\n    if (rtl.test(value)) {\n        return \"rtl\";\n    }\n    if (ltr.test(value)) {\n        return \"ltr\";\n    }\n    return \"neutral\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTTtBQUNWLElBQUlDLE1BQ0YsNkJBQ0EscUJBQ0E7QUFFRixJQUFJQyxNQUFNLElBQUlDLE9BQU8sUUFBUUYsTUFBTSxRQUFRRCxNQUFNO0FBQ2pELElBQUlJLE1BQU0sSUFBSUQsT0FBTyxRQUFRSCxNQUFNLFFBQVFDLE1BQU07QUFFakQsU0FBU0YsVUFBVU0sS0FBSztJQUN0QkEsUUFBUUMsT0FBT0QsU0FBUztJQUV4QixJQUFJSCxJQUFJSyxJQUFJLENBQUNGLFFBQVE7UUFDbkIsT0FBTztJQUNUO0lBRUEsSUFBSUQsSUFBSUcsSUFBSSxDQUFDRixRQUFRO1FBQ25CLE9BQU87SUFDVDtJQUVBLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL0BrZXlzdGF0aWMvdGVtcGxhdGVzLW5leHRqcy8uL25vZGVfbW9kdWxlcy9kaXJlY3Rpb24vaW5kZXguanM/ZjUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25cblxudmFyIFJUTCA9ICdcXHUwNTkxLVxcdTA3RkZcXHVGQjFELVxcdUZERkRcXHVGRTcwLVxcdUZFRkMnXG52YXIgTFRSID1cbiAgJ0EtWmEtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNicgK1xuICAnXFx1MDBGOC1cXHUwMkI4XFx1MDMwMC1cXHUwNTkwXFx1MDgwMC1cXHUxRkZGXFx1MjAwRVxcdTJDMDAtXFx1RkIxQycgK1xuICAnXFx1RkUwMC1cXHVGRTZGXFx1RkVGRC1cXHVGRkZGJ1xuXG52YXIgcnRsID0gbmV3IFJlZ0V4cCgnXlteJyArIExUUiArICddKlsnICsgUlRMICsgJ10nKVxudmFyIGx0ciA9IG5ldyBSZWdFeHAoJ15bXicgKyBSVEwgKyAnXSpbJyArIExUUiArICddJylcblxuZnVuY3Rpb24gZGlyZWN0aW9uKHZhbHVlKSB7XG4gIHZhbHVlID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxuXG4gIGlmIChydGwudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ3J0bCdcbiAgfVxuXG4gIGlmIChsdHIudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2x0cidcbiAgfVxuXG4gIHJldHVybiAnbmV1dHJhbCdcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZGlyZWN0aW9uIiwiUlRMIiwiTFRSIiwicnRsIiwiUmVnRXhwIiwibHRyIiwidmFsdWUiLCJTdHJpbmciLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/direction/index.js\n");

/***/ })

};
;