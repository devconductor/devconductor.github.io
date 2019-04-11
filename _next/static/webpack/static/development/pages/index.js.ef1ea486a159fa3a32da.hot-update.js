webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/time.js":
/*!***********************!*\
  !*** ./utils/time.js ***!
  \***********************/
/*! exports provided: timeUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeUtils", function() { return timeUtils; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);


var getDifference = function getDifference(dateStarted) {
  var dateEvent = new Date(dateStarted);
  var today = new Date();
  var delta = Math.abs(dateEvent - today) / 1000;
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  var seconds = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(delta % 60);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

var todayIsLessThanDateCompare = function todayIsLessThanDateCompare(dateToCompare) {
  var date = new Date(dateToCompare);
  var today = new Date();
  return today < date;
};

var convertDate = function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? '0' + s : s;
  }

  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
};

var timeUtils = {
  getDifference: getDifference,
  todayIsLessThanDateCompare: todayIsLessThanDateCompare,
  convertDate: convertDate
};

/***/ })

})
//# sourceMappingURL=index.js.ef1ea486a159fa3a32da.hot-update.js.map