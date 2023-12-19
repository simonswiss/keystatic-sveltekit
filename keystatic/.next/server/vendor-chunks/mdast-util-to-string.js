"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-to-string";
exports.ids = ["vendor-chunks/mdast-util-to-string"];
exports.modules = {

/***/ "(ssr)/./node_modules/mdast-util-to-string/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-string/index.js ***!
  \****************************************************/
/***/ ((module) => {

eval("\nmodule.exports = toString;\n// Get the text content of a node.\n// Prefer the node’s plain-text fields, otherwise serialize its children,\n// and if the given value is an array, serialize the nodes in it.\nfunction toString(node) {\n    return node && (node.value || node.alt || node.title || \"children\" in node && all(node.children) || \"length\" in node && all(node)) || \"\";\n}\nfunction all(values) {\n    var result = [];\n    var index = -1;\n    while(++index < values.length){\n        result[index] = toString(values[index]);\n    }\n    return result.join(\"\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1zdHJpbmcvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHQztBQUVqQixrQ0FBa0M7QUFDbEMseUVBQXlFO0FBQ3pFLGlFQUFpRTtBQUNqRSxTQUFTQSxTQUFTQyxJQUFJO0lBQ3BCLE9BQ0UsUUFDR0EsQ0FBQUEsS0FBS0MsS0FBSyxJQUNURCxLQUFLRSxHQUFHLElBQ1JGLEtBQUtHLEtBQUssSUFDVCxjQUFjSCxRQUFRSSxJQUFJSixLQUFLSyxRQUFRLEtBQ3ZDLFlBQVlMLFFBQVFJLElBQUlKLEtBQUssS0FDbEM7QUFFSjtBQUVBLFNBQVNJLElBQUlFLE1BQU07SUFDakIsSUFBSUMsU0FBUyxFQUFFO0lBQ2YsSUFBSUMsUUFBUSxDQUFDO0lBRWIsTUFBTyxFQUFFQSxRQUFRRixPQUFPRyxNQUFNLENBQUU7UUFDOUJGLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHVCxTQUFTTyxNQUFNLENBQUNFLE1BQU07SUFDeEM7SUFFQSxPQUFPRCxPQUFPRyxJQUFJLENBQUM7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2V5c3RhdGljL3RlbXBsYXRlcy1uZXh0anMvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1zdHJpbmcvaW5kZXguanM/Y2FhMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZ1xuXG4vLyBHZXQgdGhlIHRleHQgY29udGVudCBvZiBhIG5vZGUuXG4vLyBQcmVmZXIgdGhlIG5vZGXigJlzIHBsYWluLXRleHQgZmllbGRzLCBvdGhlcndpc2Ugc2VyaWFsaXplIGl0cyBjaGlsZHJlbixcbi8vIGFuZCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gYXJyYXksIHNlcmlhbGl6ZSB0aGUgbm9kZXMgaW4gaXQuXG5mdW5jdGlvbiB0b1N0cmluZyhub2RlKSB7XG4gIHJldHVybiAoXG4gICAgKG5vZGUgJiZcbiAgICAgIChub2RlLnZhbHVlIHx8XG4gICAgICAgIG5vZGUuYWx0IHx8XG4gICAgICAgIG5vZGUudGl0bGUgfHxcbiAgICAgICAgKCdjaGlsZHJlbicgaW4gbm9kZSAmJiBhbGwobm9kZS5jaGlsZHJlbikpIHx8XG4gICAgICAgICgnbGVuZ3RoJyBpbiBub2RlICYmIGFsbChub2RlKSkpKSB8fFxuICAgICcnXG4gIClcbn1cblxuZnVuY3Rpb24gYWxsKHZhbHVlcykge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gdG9TdHJpbmcodmFsdWVzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidG9TdHJpbmciLCJub2RlIiwidmFsdWUiLCJhbHQiLCJ0aXRsZSIsImFsbCIsImNoaWxkcmVuIiwidmFsdWVzIiwicmVzdWx0IiwiaW5kZXgiLCJsZW5ndGgiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mdast-util-to-string/index.js\n");

/***/ })

};
;