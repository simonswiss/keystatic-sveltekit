"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ccount";
exports.ids = ["vendor-chunks/ccount"];
exports.modules = {

/***/ "(ssr)/./node_modules/ccount/index.js":
/*!**************************************!*\
  !*** ./node_modules/ccount/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("\nmodule.exports = ccount;\nfunction ccount(source, character) {\n    var value = String(source);\n    var count = 0;\n    var index;\n    if (typeof character !== \"string\") {\n        throw new Error(\"Expected character\");\n    }\n    index = value.indexOf(character);\n    while(index !== -1){\n        count++;\n        index = value.indexOf(character, index + character.length);\n    }\n    return count;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2NvdW50L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUFBLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsU0FBU0EsT0FBT0MsTUFBTSxFQUFFQyxTQUFTO0lBQy9CLElBQUlDLFFBQVFDLE9BQU9IO0lBQ25CLElBQUlJLFFBQVE7SUFDWixJQUFJQztJQUVKLElBQUksT0FBT0osY0FBYyxVQUFVO1FBQ2pDLE1BQU0sSUFBSUssTUFBTTtJQUNsQjtJQUVBRCxRQUFRSCxNQUFNSyxPQUFPLENBQUNOO0lBRXRCLE1BQU9JLFVBQVUsQ0FBQyxFQUFHO1FBQ25CRDtRQUNBQyxRQUFRSCxNQUFNSyxPQUFPLENBQUNOLFdBQVdJLFFBQVFKLFVBQVVPLE1BQU07SUFDM0Q7SUFFQSxPQUFPSjtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtleXN0YXRpYy90ZW1wbGF0ZXMtbmV4dGpzLy4vbm9kZV9tb2R1bGVzL2Njb3VudC9pbmRleC5qcz80MzcyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNjb3VudFxuXG5mdW5jdGlvbiBjY291bnQoc291cmNlLCBjaGFyYWN0ZXIpIHtcbiAgdmFyIHZhbHVlID0gU3RyaW5nKHNvdXJjZSlcbiAgdmFyIGNvdW50ID0gMFxuICB2YXIgaW5kZXhcblxuICBpZiAodHlwZW9mIGNoYXJhY3RlciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGNoYXJhY3RlcicpXG4gIH1cblxuICBpbmRleCA9IHZhbHVlLmluZGV4T2YoY2hhcmFjdGVyKVxuXG4gIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICBjb3VudCsrXG4gICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGNoYXJhY3RlciwgaW5kZXggKyBjaGFyYWN0ZXIubGVuZ3RoKVxuICB9XG5cbiAgcmV0dXJuIGNvdW50XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNjb3VudCIsInNvdXJjZSIsImNoYXJhY3RlciIsInZhbHVlIiwiU3RyaW5nIiwiY291bnQiLCJpbmRleCIsIkVycm9yIiwiaW5kZXhPZiIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ccount/index.js\n");

/***/ })

};
;