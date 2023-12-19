"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parse-entities";
exports.ids = ["vendor-chunks/parse-entities"];
exports.modules = {

/***/ "(ssr)/./node_modules/parse-entities/decode-entity.js":
/*!******************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar characterEntities = __webpack_require__(/*! character-entities */ \"(ssr)/./node_modules/character-entities/index.json\");\nmodule.exports = decodeEntity;\nvar own = {}.hasOwnProperty;\nfunction decodeEntity(characters) {\n    return own.call(characterEntities, characters) ? characterEntities[characters] : false;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLG9CQUFvQkMsbUJBQU9BLENBQUM7QUFFaENDLE9BQU9DLE9BQU8sR0FBR0M7QUFFakIsSUFBSUMsTUFBTSxDQUFDLEVBQUVDLGNBQWM7QUFFM0IsU0FBU0YsYUFBYUcsVUFBVTtJQUM5QixPQUFPRixJQUFJRyxJQUFJLENBQUNSLG1CQUFtQk8sY0FDL0JQLGlCQUFpQixDQUFDTyxXQUFXLEdBQzdCO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2V5c3RhdGljL3RlbXBsYXRlcy1uZXh0anMvLi9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eS5qcz9jMjc1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgY2hhcmFjdGVyRW50aXRpZXMgPSByZXF1aXJlKCdjaGFyYWN0ZXItZW50aXRpZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlY29kZUVudGl0eVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuZnVuY3Rpb24gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIHtcbiAgcmV0dXJuIG93bi5jYWxsKGNoYXJhY3RlckVudGl0aWVzLCBjaGFyYWN0ZXJzKVxuICAgID8gY2hhcmFjdGVyRW50aXRpZXNbY2hhcmFjdGVyc11cbiAgICA6IGZhbHNlXG59XG4iXSwibmFtZXMiOlsiY2hhcmFjdGVyRW50aXRpZXMiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlY29kZUVudGl0eSIsIm93biIsImhhc093blByb3BlcnR5IiwiY2hhcmFjdGVycyIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/parse-entities/decode-entity.js\n");

/***/ })

};
;