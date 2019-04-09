webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/image-grid-list.js":
/*!***************************************!*\
  !*** ./components/image-grid-list.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-image-gallery */ "./node_modules/react-image-gallery/build/image-gallery.js");
/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");







var _jsxFileName = "C:\\Users\\manoel.filho\\Documents\\GitHub\\devconductor.github.io\\components\\image-grid-list.js";





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

var ImageGridList =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ImageGridList, _React$Component);

  function ImageGridList() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageGridList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ImageGridList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getImages", function () {
      return _utils_config__WEBPACK_IMPORTED_MODULE_10__["default"].enterpriseGallery.tileData.map(function (tile) {
        return {
          original: tile.img,
          thumbnail: tile.img
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageGridList, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return (// <div className={classes.root}>
        //   <GridList cellHeight={500} className={classes.gridList} cols={2}>
        //     {site.enterpriseGallery.tileData.map(tile => (
        //       <GridListTile key={tile.img} cols={tile.cols || 1}>
        //             <img src={tile.img} alt={tile.title}/>
        //       </GridListTile>
        //     ))}
        //   </GridList>
        // </div>
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_9___default.a, {
          items: this.getImages(),
          thumbnailPosition: "left",
          additionalClass: "gallery-custom",
          autoPlay: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        })
      );
    }
  }]);

  return ImageGridList;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["withStyles"])(styles)(ImageGridList));

/***/ })

})
//# sourceMappingURL=index.js.6641fa93cb42ea7b6b9d.hot-update.js.map