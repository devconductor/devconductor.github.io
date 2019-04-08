module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "66ca");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "00EI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var site = {
  title: 'Geek for a week',
  logo: '/static/img/logos/logo_horizontal_white.png',
  dateEventDetail: 'De 29 de abril a 04 de maio!',
  dateEventStart: '04/29/2019 19:00:00',
  dateEventFinish: '05/05/2019 00:00:00',
  dateRegistrationStart: '04/08/2019',
  dateRegistrationFinish: '04/13/2019',
  menu: {
    links: [{
      path: '/',
      name: 'Início'
    }, {
      path: '/hackathon',
      name: 'Hackathon'
    }],
    logos: {
      initial: '/static/img/logos/logo_vertical_white.png',
      scrolling: '/static/img/logos/logo_vertical_purple.png'
    }
  },
  about: {
    title: 'Sobre o Geek for a week',
    features: [{
      title: 'Hackathon',
      img: '/static/img/section-about/hackathon.jpg',
      description: 'Uma semana competindo pela chance de mudar completamente sua carreira. Não vai faltar networking, comida à vontade e diversão! Traga seu time!'
    }, {
      title: 'Equipes mistas',
      img: '/static/img/section-about/workshop.jpg',
      description: 'As equipes deverão ter no mínimo 1 (um) Integrante de cada unidade da Conductor  e esses integrantes deverão ser de Squads diversificadas.'
    }, {
      title: 'Lanches',
      img: '/static/img/section-about/lanches.jpg',
      description: 'Para ser possível "dar o gás" durante o evento, haverá vários lanches e energéticos disponivéis para você e sua equipe.'
    }],
    numbersEnterprise: [{
      number: 75,
      unit: 'milhões',
      description: 'de cartões cadastrados'
    }, {
      number: 18,
      unit: 'milhões',
      description: 'de usuários ativos'
    }, {
      number: 800,
      unit: 'milhões',
      description: 'de transação por ano'
    }, {
      number: 60,
      unit: 'bilhões de reais',
      description: 'transacionados por ano'
    }, {
      number: 600,
      unit: 'funcionários',
      description: 'em três escritórios'
    }]
  },
  enterpriseGallery: {
    title: 'Condutor Tecnologia',
    tileData: [{
      img: '/static/img/venue/venue_5.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_9.jpeg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_4.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_10.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_12.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_2.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_7.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_11.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_3.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_8.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_6.jpg',
      cols: 1
    }, {
      img: '/static/img/venue/venue_1.jpg',
      cols: 1
    }]
  },
  hashtag: '#Geekforaweek',
  hackathon: {
    linkRegistration: 'https://pt.surveymonkey.com/r/geekforaweek',
    details: [{
      title: 'Como saber se você está “nos trinques” para o Hackaton?',
      description: 'Isso é fácil! Se você responder afirmativamente às perguntas abaixo, cara... é só se inscrever!',
      topics: ['Gosta bastante de programar?', 'Gosta de desafios?', 'Gosta de trabalhar em equipe?', 'Domina alguma linguagem de programação?']
    }, {
      title: 'O que você precisa fazer para se inscrever?',
      description: 'Não se aperreie que a gente explica!',
      topics: ['Monte sua Equipe, ela deve ser composta por no mínimo 5 e no máximo 7 participantes. Lembrando que você precisa escolher para sua equipe, colegas das outras unidades da Conductor (ao menos 1 de cada unidade) e de Squads diferentes.', 'Acesse o link e inscreva-se!  Desta vez as inscrições serão realizadas por equipes!']
    }, {
      title: 'Eita! E como será o Hackathon?',
      description: 'Ocorrerá no dia 29 de abril a 05 de abril de 2019.',
      topics: ['Um tema será lançado e as equipes inscritas deverão formular uma ideia e, literalmente, desenvolvê-la.', 'A tecnologia utilizada? Vocês escolhem!', 'Vocês poderão desenvolver um produto desktop, mobile ou web!', 'Ao final do evento, a equipe deverá apresentar o projeto para os jurados. Vocês terão 5 minutos para apresentar o projeto e os jurados terão 5 minutos para questionamentos.', 'Caprichem no produto! Cresçam na apresentação! Conquistem os jurados!']
    }, {
      title: 'Programação do Hackathon!',
      description: 'Fiquem atentos aos horários.',
      topics: ['Inscrições - 08/04/2019 à 12/04/2019', 'Abertura/Apresentação - 29/04/2019 19:00 à 29/04/2019 20:00', 'Mão na massa - 30/04/2019 à 04/05/2019', 'Apresentações e resultados - 05/05/2019', 'Premiação - 06/05/2019 à 13/05/2019']
    }],
    awards: [{
      title: '3º Lugar',
      award: '2 mil reais'
    }, {
      title: '2º Lugar',
      award: '4 mil reais'
    }, {
      title: '1º Lugar',
      award: '8 mil reais'
    }],
    judges: [{
      img: '/static/img/people/FernandoDePaula.jpg',
      name: 'Fernando de Paula'
    }, {
      img: '/static/img/people/CarlosBiribilli.jpg',
      name: 'Carlos Biribilli'
    }, {
      img: '/static/img/people/DanielBarbosa.jpg',
      name: 'Daniel Barbosa'
    }, {
      img: '/static/img/people/EdreiCosta.jpg',
      name: 'Edrei Costa'
    }]
  },
  footer: {
    socialsNetwork: [{
      name: 'instagram',
      icon: '/static/img/icons/instagram_white.png',
      url: 'https://www.instagram.com/conductortecnologia/'
    }, {
      name: 'facebook',
      icon: '/static/img/icons/facebook_white.png',
      url: 'https://facebook.com/ConductorTecnologia'
    }, {
      name: 'linkedin',
      icon: '/static/img/icons/linkedin_white.png',
      url: 'https://linkedin.com/company/conductor'
    }, {
      name: 'youtube',
      icon: '/static/img/icons/youtube_white.png',
      url: 'https://www.youtube.com/channel/UCR7Lfk3YNGD7JUYGAvYpObg'
    }, {
      name: 'github',
      icon: '/static/img/icons/github_white.png',
      url: 'https://github.com/devconductor'
    }],
    copyrigth: '© Todos os direitos reservados, 2019.'
  },
  enterprise: {
    name: 'Conductor Tecnologia',
    site: 'https://conductor.com.br',
    logo: '/static/img/logos/logo_conductor_branca.png'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (site);

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "66ca":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "J8oA":
/***/ (function(module, exports) {

module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__("J8oA");
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./components/section.js + 1 modules
var section = __webpack_require__("yJra");

// EXTERNAL MODULE: ./components/mini-section.js
var mini_section = __webpack_require__("w1HW");

// EXTERNAL MODULE: ./utils/time.js
var time = __webpack_require__("v6dD");

// CONCATENATED MODULE: ./components/calendar.js











var calendar_Calendar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Calendar, _React$Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      dateDown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        intervalId: 0
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var intervalId = setInterval(function () {
        _this2.setState(Object(objectSpread["a" /* default */])({}, _this2.state, {
          dateDown: time["a" /* timeUtils */].getDifference(_this2.props.dateStartEvent),
          intervalId: intervalId
        }));
      }, 1000);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      clearInterval(this.state.intervalId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$dateDown = this.state.dateDown,
          days = _this$state$dateDown.days,
          hours = _this$state$dateDown.hours,
          minutes = _this$state$dateDown.minutes,
          seconds = _this$state$dateDown.seconds;

      if (time["a" /* timeUtils */].todayIsLessThanDateCompare(this.props.dateStartEvent)) {
        return external_react_default.a.createElement("div", {
          className: "time-down"
        }, external_react_default.a.createElement("div", {
          className: "time"
        }, external_react_default.a.createElement("p", null, days), external_react_default.a.createElement("label", null, "DIAS")), external_react_default.a.createElement("span", null, ":"), external_react_default.a.createElement("div", {
          className: "time"
        }, external_react_default.a.createElement("p", null, hours), external_react_default.a.createElement("label", null, "HORAS")), external_react_default.a.createElement("span", null, ":"), external_react_default.a.createElement("div", {
          className: "time"
        }, external_react_default.a.createElement("p", null, minutes), external_react_default.a.createElement("label", null, "MINUTOS")), external_react_default.a.createElement("span", null, ":"), external_react_default.a.createElement("div", {
          className: "time"
        }, external_react_default.a.createElement("p", null, seconds), external_react_default.a.createElement("label", null, "SEGUNDOS")));
      }

      if (time["a" /* timeUtils */].todayIsLessThanDateCompare(this.props.dateFinishEvent)) {
        clearInterval(this.state.intervalId);
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", null, "Evento em andamento!"));
      }

      clearInterval(this.state.intervalId);
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", null, "Evento encerrado!"));
    }
  }]);

  return Calendar;
}(external_react_default.a.Component);

calendar_Calendar.defaultProps = {
  dateEvent: "04/22/2019"
};
/* harmony default export */ var calendar = (calendar_Calendar);
// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__("ZHh6");

// EXTERNAL MODULE: ./utils/config.js
var config = __webpack_require__("00EI");

// CONCATENATED MODULE: ./components/image-grid-list.js









var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden'
    },
    gridList: {
      width: '90%',
      height: '95vh'
    }
  };
};

var image_grid_list_ImageGridList =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(ImageGridList, _React$Component);

  function ImageGridList() {
    Object(classCallCheck["a" /* default */])(this, ImageGridList);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(ImageGridList).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(ImageGridList, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement(core_["GridList"], {
        cellHeight: 300,
        className: classes.gridList,
        cols: 3
      }, config["a" /* default */].enterpriseGallery.tileData.map(function (tile) {
        return external_react_default.a.createElement(core_["GridListTile"], {
          key: tile.img,
          cols: tile.cols || 1
        }, external_react_default.a.createElement("img", {
          src: tile.img,
          alt: tile.title
        }));
      })));
    }
  }]);

  return ImageGridList;
}(external_react_default.a.Component);

/* harmony default export */ var image_grid_list = (Object(core_["withStyles"])(styles)(image_grid_list_ImageGridList));
// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__("aIN1");

// CONCATENATED MODULE: ./components/animated-text.js










var animated_text_AnimatedText =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AnimatedText, _React$Component);

  function AnimatedText() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, AnimatedText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(AnimatedText)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "createCharsAnimated", function (text) {
      var chars = [];

      for (var i = 0; i < text.length; i++) {
        chars.push(external_react_default.a.createElement(external_react_animate_on_scroll_default.a, {
          className: "word",
          key: i,
          animateIn: "fadeInDownBig",
          animateOnce: true,
          delay: i * 100
        }, text.charAt(i)));
      }

      return chars;
    });

    return _this;
  }

  Object(createClass["a" /* default */])(AnimatedText, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          text = _this$props.text,
          className = _this$props.className;
      return external_react_default.a.createElement("span", {
        className: "animated-text ".concat(className ? className : '')
      }, this.createCharsAnimated(text));
    }
  }]);

  return AnimatedText;
}(external_react_default.a.Component);

/* harmony default export */ var animated_text = (animated_text_AnimatedText);
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./components/animated-number.js











var animated_number_AnimatedNumber =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(AnimatedNumber, _React$Component);

  function AnimatedNumber() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, AnimatedNumber);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(AnimatedNumber)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      numberInitial: 0,
      numberFinal: 0,
      intervalId: 0,
      started: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "increment", function () {
      if (_this.state.started && _this.props.startAnimation) {
        var _this$state = _this.state,
            numberInitial = _this$state.numberInitial,
            numberFinal = _this$state.numberFinal;

        var percent = parse_int_default()(numberFinal * 0.05);

        var numberPlus = percent > 0 ? percent : 1;
        var newNumber = numberInitial + numberPlus;

        if (newNumber >= numberFinal) {
          clearInterval(_this.state.intervalId);

          _this.setState(Object(objectSpread["a" /* default */])({}, _this.state, {
            started: false,
            numberInitial: numberFinal
          }));
        } else {
          _this.setState(Object(objectSpread["a" /* default */])({}, _this.state, {
            numberInitial: newNumber
          }));
        }
      }
    });

    return _this;
  }

  Object(createClass["a" /* default */])(AnimatedNumber, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var intervalId = setInterval(function () {
        if (_this2.state.started) {
          _this2.increment();
        } else {
          _this2.setState(Object(objectSpread["a" /* default */])({}, _this2.state, {
            numberFinal: _this2.props.number,
            intervalId: intervalId,
            started: true
          }));
        }
      }, 100);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.numberInitial;
    }
  }]);

  return AnimatedNumber;
}(external_react_default.a.Component);

/* harmony default export */ var animated_number = (animated_number_AnimatedNumber);
// CONCATENATED MODULE: ./pages/index.js
























var pages_styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      marginTop: 10,
      paddingBottom: 30
    },
    bigAvatar: {
      margin: '20px auto !important',
      width: 150,
      height: 150
    }
  };
};

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      canAnimatedNumbers: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "enableAnimatedNumbers", function () {
      _this.setState(Object(objectSpread["a" /* default */])({}, _this.state, {
        canAnimatedNumbers: true
      }));
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, config["a" /* default */].title)), external_react_default.a.createElement(header["a" /* default */], null), external_react_default.a.createElement(section["a" /* default */], {
        title: external_react_default.a.createElement("img", {
          className: "logo",
          src: config["a" /* default */].logo
        }),
        backgroundImage: "url('/static/img/section-background/background-banner.JPG')",
        backdrop: true,
        alignCenter: true,
        firstSection: true
      }, external_react_default.a.createElement(calendar, {
        dateStartEvent: config["a" /* default */].dateEventStart,
        dateFinishEvent: config["a" /* default */].dateEventFinish
      }), external_react_default.a.createElement("br", null), external_react_default.a.createElement("button", {
        className: "large",
        onClick: function onClick() {
          router_default.a.push('/hackathon');
        }
      }, "Veja mais!")), external_react_default.a.createElement(mini_section["a" /* default */], {
        title: config["a" /* default */].about.title
      }, external_react_default.a.createElement("div", {
        className: classes.root
      }, external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), external_react_default.a.createElement(core_["Grid"], {
        container: true,
        spacing: 16,
        className: "about-geek"
      }, config["a" /* default */].about.features.map(function (feature, index) {
        return external_react_default.a.createElement(core_["Grid"], {
          item: true,
          sm: 4,
          xs: 12,
          key: index
        }, external_react_default.a.createElement(external_react_animate_on_scroll_default.a, {
          animateIn: "fadeInUp",
          animateOnce: true,
          delay: index * 200
        }, external_react_default.a.createElement("label", null, feature.title), external_react_default.a.createElement(core_["Avatar"], {
          color: "3e3e3e",
          className: classes.bigAvatar,
          src: feature.img
        }), external_react_default.a.createElement("p", null, feature.description)));
      })))), external_react_default.a.createElement(mini_section["a" /* default */], {
        backgroundImage: "url('/static/img/section-background/geeks.png')",
        alignCenter: true
      }, external_react_default.a.createElement(core_["Grid"], {
        container: true,
        spacing: 8,
        alignItems: "center",
        justify: "space-evenly"
      }, config["a" /* default */].about.numbersEnterprise.map(function (numberEnterprise, index) {
        return external_react_default.a.createElement("div", {
          className: "info-metas",
          key: index
        }, external_react_default.a.createElement(external_react_animate_on_scroll_default.a, {
          animateIn: "slideInUp",
          animateOnce: true,
          afterAnimatedIn: index === 0 && _this2.enableAnimatedNumbers
        }, external_react_default.a.createElement("div", {
          className: "number"
        }, external_react_default.a.createElement(animated_number, {
          number: numberEnterprise.number,
          startAnimation: _this2.state.canAnimatedNumbers
        }), "+"), external_react_default.a.createElement("div", {
          className: "unit"
        }, numberEnterprise.unit), external_react_default.a.createElement("div", {
          className: "description"
        }, numberEnterprise.description)));
      }))), external_react_default.a.createElement(section["a" /* default */], {
        alignCenter: true
      }, external_react_default.a.createElement("br", null), external_react_default.a.createElement(image_grid_list, null)), external_react_default.a.createElement(mini_section["a" /* default */], {
        alignCenter: true,
        backgroundImage: "url('/static/img/section-background/noc.png')"
      }, external_react_default.a.createElement(external_react_animate_on_scroll_default.a, {
        animateIn: "pulse",
        duration: 2
      }, external_react_default.a.createElement("img", {
        src: "/static/img/icons/twitter-white.png",
        alt: "twitter"
      }), external_react_default.a.createElement("br", null)), external_react_default.a.createElement("h1", {
        className: "follow-twitter"
      }, "Siga a hashtag ", external_react_default.a.createElement("a", {
        href: "https://twitter.com/search?q=%23GeekForAWeek",
        target: "_blank"
      }, external_react_default.a.createElement(animated_text, {
        text: config["a" /* default */].hashtag,
        className: "text-styled"
      })))), external_react_default.a.createElement(footer["a" /* default */], null));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(styles_["withStyles"])(pages_styles)(pages_Index));

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("00EI");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("v6dD");














var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this), "state", {
      scrolling: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.onscroll = function () {
        return _this2.handleScroll();
      };

      this.handleScroll();
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (!this.state.scrolling && document.documentElement.scrollTop > 100) {
        this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.state, {
          scrolling: true
        }));
      }

      if (this.state.scrolling && document.documentElement.scrollTop === 0) {
        this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, this.state, {
          scrolling: false
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var registration = _utils_time__WEBPACK_IMPORTED_MODULE_12__[/* timeUtils */ "a"].todayIsLessThanDateCompare(_utils_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].dateRegistrationFinish);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, !this.state.scrolling && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "theme-color",
        content: "#1D1D1D"
      }), this.state.scrolling && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("meta", {
        name: "theme-color",
        content: "#FFFFFF"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "header ".concat(this.state.scrolling && 'scrolling')
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "left"
      }, !this.state.scrolling && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _utils_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].menu.logos.initial,
        alt: "logo-evento"
      }))), this.state.scrolling && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _utils_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].menu.logos.scrolling,
        alt: "logo-evento"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "center"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", null, _utils_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].menu.links.map(function (link) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          key: link.name
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: link.path
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, link.name)));
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "right"
      }, !this.state.scrolling && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: _utils_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].enterprise.site,
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: _utils_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].enterprise.logo,
        alt: _utils_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].enterprise.name
      })), this.state.scrolling && registration && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: _utils_config__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"].hackathon.linkRegistration,
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", null, "Inscreva-se")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aIN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("00EI");


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-social-network"
  }, _utils_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].footer.socialsNetwork.map(function (socialsNetwork) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: socialsNetwork.name,
      href: socialsNetwork.url,
      target: "_blank"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: socialsNetwork.icon,
      alt: socialsNetwork.name
    }));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-copyright"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, _utils_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].footer.copyrigth), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Site desenvolvido pela ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _utils_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enterprise.site,
    target: "_blank"
  }, _utils_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enterprise.name), "."))));
});

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "v6dD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeUtils; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
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

var timeUtils = {
  getDifference: getDifference,
  todayIsLessThanDateCompare: todayIsLessThanDateCompare
};

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "w1HW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var MiniSection = function MiniSection(_ref) {
  var children = _ref.children,
      backgroundImage = _ref.backgroundImage,
      title = _ref.title,
      alignCenter = _ref.alignCenter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mini-section",
    style: backgroundImage ? {
      backgroundImage: backgroundImage
    } : {
      background: '#1d1d1d'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mini-section-content ".concat(alignCenter && 'align-center')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mini-section-body"
  }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title ".concat(!alignCenter && 'title-space')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, title)), children)));
};

MiniSection.defaultProps = {
  alignCenter: false
};
/* harmony default export */ __webpack_exports__["a"] = (MiniSection);

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yJra":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-animate-on-scroll"
var external_react_animate_on_scroll_ = __webpack_require__("J8oA");
var external_react_animate_on_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_animate_on_scroll_);

// CONCATENATED MODULE: ./components/backdrop.js

/* harmony default export */ var components_backdrop = (function (_ref) {
  var mini = _ref.mini;
  return external_react_default.a.createElement("div", {
    className: "backdrop ".concat(mini && 'mini')
  });
});
// CONCATENATED MODULE: ./components/section.js




var section_Section = function Section(_ref) {
  var children = _ref.children,
      backgroundImage = _ref.backgroundImage,
      title = _ref.title,
      alignCenter = _ref.alignCenter,
      backdrop = _ref.backdrop,
      firstSection = _ref.firstSection;
  return external_react_default.a.createElement("div", {
    className: "section",
    style: backgroundImage ? {
      backgroundImage: backgroundImage
    } : {
      background: '#1d1d1d'
    }
  }, backdrop && external_react_default.a.createElement(components_backdrop, null), external_react_default.a.createElement("div", {
    className: "section-content ".concat(alignCenter && 'align-center', " ").concat(firstSection && 'section-first')
  }, external_react_default.a.createElement("div", {
    className: "section-body"
  }, title && external_react_default.a.createElement("div", {
    className: "title ".concat(!alignCenter && 'title-space')
  }, external_react_default.a.createElement(external_react_animate_on_scroll_default.a, {
    animateIn: 'bounceIn',
    animateOnce: true
  }, external_react_default.a.createElement("h1", null, title))), children)));
};

section_Section.defaultProps = {
  backdrop: false,
  alignCenter: false,
  firstSection: false
};
/* harmony default export */ var section = __webpack_exports__["a"] = (section_Section);

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });