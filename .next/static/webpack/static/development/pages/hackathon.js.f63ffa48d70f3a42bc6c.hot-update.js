webpackHotUpdate("static\\development\\pages\\hackathon.js",{

/***/ "./pages/hackathon.js":
/*!****************************!*\
  !*** ./pages/hackathon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/section */ "./components/section.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_mini_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/mini-section */ "./components/mini-section.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/time */ "./utils/time.js");





var _jsxFileName = "C:\\Users\\manoel.filho\\Documents\\GitHub\\devconductor.github.io\\pages\\hackathon.js";










var Hackathon =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Hackathon, _React$Component);

  function Hackathon() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hackathon);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Hackathon).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hackathon, [{
    key: "render",
    value: function render() {
      var registration = _utils_time__WEBPACK_IMPORTED_MODULE_13__["timeUtils"].compareDateWithToday(_utils_config__WEBPACK_IMPORTED_MODULE_12__["default"].dateRegistrationFinish);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Geek for a Week")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        firstSection: true,
        alignCenter: true,
        title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "logo",
          src: _utils_config__WEBPACK_IMPORTED_MODULE_12__["default"].logo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }),
        backgroundImage: "url('/static/img/section-background/background-banner-2.JPG')",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, _utils_config__WEBPACK_IMPORTED_MODULE_12__["default"].dateEventDetail)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: registration ? 'Inscrições Abertas!' : 'Inscrições encerradas!',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bt-central",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, registration && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: _utils_config__WEBPACK_IMPORTED_MODULE_12__["default"].hackathon.linkRegistration,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Inscreva-se"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "event-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, _utils_config__WEBPACK_IMPORTED_MODULE_12__["default"].hackathon.details.map(function (detail, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, detail.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, detail.description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, detail.topics.map(function (topic, index) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, topic);
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Premia\xE7\xE3o",
        alignCenter: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "awards",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, _utils_config__WEBPACK_IMPORTED_MODULE_12__["default"].hackathon.awards.map(function (award, index) {
        var animation = 'fadeIn';

        if (index + 1 === _utils_config__WEBPACK_IMPORTED_MODULE_12__["default"].hackathon.awards.length) {
          animation = 'tada';
        }

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "award",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
          animateIn: animation,
          animateOnce: true,
          delay: index * 400,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: "/static/img/sprites/cash.png",
          width: "180",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, award.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, award.award)));
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Jurados",
        alignCenter: true,
        backgroundImage: "url('/static/img/section-background/judges.png')",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "judges",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, _utils_config__WEBPACK_IMPORTED_MODULE_12__["default"].hackathon.judges.map(function (judges, index) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "judge",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
          animateIn: "fadeInLeftBig",
          animateOnce: true,
          delay: index * 200,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: judges.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, judges.name)));
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }));
    }
  }]);

  return Hackathon;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hackathon);

/***/ })

})
//# sourceMappingURL=hackathon.js.f63ffa48d70f3a42bc6c.hot-update.js.map