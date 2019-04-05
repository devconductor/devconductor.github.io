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
/* harmony import */ var _styles_hackathon_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/hackathon.scss */ "./styles/hackathon.scss");
/* harmony import */ var _styles_hackathon_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_hackathon_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/time */ "./utils/time.js");





var _jsxFileName = "C:\\Users\\manoel.filho\\Documents\\geekforaweek\\pages\\hackathon.js";










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
      var inscricoesAbertas = _utils_time__WEBPACK_IMPORTED_MODULE_13__["timeUtils"].compareDateWithToday('04/22/2019 08:00:00');
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Geek for a Week")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
        firstSection: true,
        alignCenter: true,
        title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: "logo",
          src: "/static/img/logos/logo_horizontal_white.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }),
        backgroundImage: "url('/static/img/section-background/background-banner-2.JPG')",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "De 22 a 28 de Abril!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: inscricoesAbertas ? 'Inscrições Abertas!' : 'Inscrições encerradas!',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "bt-central",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, inscricoesAbertas && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://pt.surveymonkey.com/r/geekforaweek",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "large",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Inscreva-se"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "event-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Como saber se voc\xEA est\xE1 \u201Cnos trinques\u201D para o Hackaton?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Isso \xE9 f\xE1cil! Se voc\xEA responder afirmativamente \xE0s perguntas abaixo, cara... \xE9 s\xF3 se inscrever!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Gosta bastante de programar?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Gosta de desafios?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Gosta de trabalhar em equipe?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Domina alguma linguagem de programa\xE7\xE3o?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Quer conhecer uma empresa de tecnologia com uma cultura transformadora?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Tem uma m\xE1quina pessoal pronta, com tudo que voc\xEA precisa e gosta de usar, para que voc\xEA consiga dar o seu show de desenvolvimento de software?")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
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
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "O que voc\xEA precisa fazer para se inscrever?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "N\xE3o se aperreie n\xE3o que a gente explica!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Monte sua equipe ou \u201Ceuquipe\u201D!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Voc\xEA pode participar individualmente ou em equipe. Se a escolha for em equipe, essa deve ser composta por, no m\xE1ximo, 3 pessoas e deve ser montada antes do evento e ser\xE1 formalizada no momento da inscri\xE7\xE3o."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Inscreva-se no evento! Se for em uma equipe, cada um deve realizar sua inscri\xE7\xE3o.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Eita! E como ser\xE1 o Hackathon?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Ocorrer\xE1 no dia 22 a 28 de abril de 2019!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Um tema ser\xE1 lan\xE7ado e as equipes inscritas dever\xE3o formular uma ideia e, literalmente, desenvolv\xEA-la."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "A tecnologia utilizada? Voc\xEAs escolhem!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Voc\xEAs poder\xE3o desenvolver um produto desktop, mobile ou web... voc\xEAs escolhem!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Ao final do evento, a equipe dever\xE1 apresentar o projeto para os jurados. Voc\xEAs ter\xE3o 5 minutos para apresentar o projeto e os jurados ter\xE3o 5 minutos para questionamentos."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Caprichem no produto! Cres\xE7am na apresenta\xE7\xE3o! Conquistem os jurados!")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Pr\xEAmios",
        alignCenter: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "awards",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "award",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animateIn: "tada",
        animateOnce: true,
        delay: 2500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/img/sprites/cash.png",
        width: "180",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "1\xBA Lugar"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "3 mil reais"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "award",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animateIn: "fadeIn",
        animateOnce: true,
        delay: 1000,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/img/sprites/cash.png",
        width: "180",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "2\xBA Lugar"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "900 reais"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "award",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animateIn: "fadeIn",
        animateOnce: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/img/sprites/cash.png",
        width: "180",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "3\xBA Lugar"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "600 reais"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_mini_section__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Jurados",
        alignCenter: true,
        backgroundImage: "url('/static/img/section-background/judges.png')",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "judges",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "judge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animateIn: "slideIn",
        animateOnce: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/img/people/FernandoDePaula.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Fernando de Paula"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "judge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animateIn: "slideIn",
        animateOnce: true,
        delay: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/img/people/CarlosBiribilli.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Carlos Biribilli"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "judge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animateIn: "slideIn",
        animateOnce: true,
        delay: 400,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/img/people/DanielBarbosa.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Daniel Barbosa"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "judge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
        animateIn: "slideIn",
        animateOnce: true,
        delay: 600,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "/static/img/people/EdreiCosta.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Edrei Costa"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
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
//# sourceMappingURL=hackathon.js.bde0d7261a1a95811018.hot-update.js.map