/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-strikethrough";
exports.ids = ["vendor-chunks/mdast-util-gfm-strikethrough"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-gfm-strikethrough/from-markdown.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/from-markdown.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.canContainEols = [\n    \"delete\"\n];\nexports.enter = {\n    strikethrough: enterStrikethrough\n};\nexports.exit = {\n    strikethrough: exitStrikethrough\n};\nfunction enterStrikethrough(token) {\n    this.enter({\n        type: \"delete\",\n        children: []\n    }, token);\n}\nfunction exitStrikethrough(token) {\n    this.exit(token);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tc3RyaWtldGhyb3VnaC9mcm9tLW1hcmtkb3duLmpzIiwibWFwcGluZ3MiOiJBQUFBQSxzQkFBc0IsR0FBRztJQUFDO0NBQVM7QUFDbkNBLGFBQWEsR0FBRztJQUFDRyxlQUFlQztBQUFrQjtBQUNsREosWUFBWSxHQUFHO0lBQUNHLGVBQWVHO0FBQWlCO0FBRWhELFNBQVNGLG1CQUFtQkcsS0FBSztJQUMvQixJQUFJLENBQUNMLEtBQUssQ0FBQztRQUFDTSxNQUFNO1FBQVVDLFVBQVUsRUFBRTtJQUFBLEdBQUdGO0FBQzdDO0FBRUEsU0FBU0Qsa0JBQWtCQyxLQUFLO0lBQzlCLElBQUksQ0FBQ0YsSUFBSSxDQUFDRTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtleXN0YXRpYy90ZW1wbGF0ZXMtbmV4dGpzLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXN0cmlrZXRocm91Z2gvZnJvbS1tYXJrZG93bi5qcz9iODJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuY2FuQ29udGFpbkVvbHMgPSBbJ2RlbGV0ZSddXG5leHBvcnRzLmVudGVyID0ge3N0cmlrZXRocm91Z2g6IGVudGVyU3RyaWtldGhyb3VnaH1cbmV4cG9ydHMuZXhpdCA9IHtzdHJpa2V0aHJvdWdoOiBleGl0U3RyaWtldGhyb3VnaH1cblxuZnVuY3Rpb24gZW50ZXJTdHJpa2V0aHJvdWdoKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICdkZWxldGUnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuZnVuY3Rpb24gZXhpdFN0cmlrZXRocm91Z2godG9rZW4pIHtcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW5Db250YWluRW9scyIsImVudGVyIiwic3RyaWtldGhyb3VnaCIsImVudGVyU3RyaWtldGhyb3VnaCIsImV4aXQiLCJleGl0U3RyaWtldGhyb3VnaCIsInRva2VuIiwidHlwZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-gfm-strikethrough/from-markdown.js\n");

/***/ })

};
;