/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-bc-autocomplete-popup-container] {
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 999999999;
}

[data-bc-autocomplete-popup-container] [data-bc-autocomplete-popup] {
    height: auto;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 5px;
}

[data-bc-autocomplete-popup-container] [data-bc-title] {
    line-height: 20px;
    border-bottom: 1px dashed #ccc;
    -webkit-border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topleft: 5px;
    -moz-border-radius-topright: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #f7f7f7;
    direction: rtl;
    text-align: left;
    padding: 5px 0px;
}

[data-bc-autocomplete-popup-container] [data-bc-btn-close] {
    border: none;
    background-color: inherit;
    padding: 0 10px;
    cursor: pointer;
    opacity: 0.8;
    font-weight: bold;
}

[data-bc-autocomplete-popup-container] [data-bc-btn-close]:hover {
    opacity: 1;
}

[data-bc-autocomplete-popup-container] [data-bc-body] {
    min-height: 50px;
    padding: 20px;
    background-color: #fff;
    -webkit-border-bottom-left-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
    -moz-border-radius-bottomleft: 5px;
    -moz-border-radius-bottomright: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

[data-bc-autocomplete-popup-container] input[type="text"] {
    padding: 0.1em 0.4em;
    display: inline-block;
    border: 1px solid #C7D6DB;
    background-color: #F5F8F9;
    border-radius: 5px;
    transition: border 0.3s linear 0s;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    font-size: 12px;
    color: #555;
}

[data-bc-autocomplete-popup-container] input[type="text"]:focus {
    border-color: #66afe9;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
    outline: 0 none;
    background-color: #fff8ee;
}

[data-bc-autocomplete-popup-container] [data-bc-result] {
    width: 100%;
    /* border: 1px solid #c5c5c5; */
    background-color: #FFF;
    /* position: absolute; */
    top: 35px;
    left: 0px;
    max-height: 200px;
    overflow-y: auto;
    scrollbar-width: thin;
    margin: 0;
    padding: 0;
    list-style: none;
}

[data-bc-autocomplete-popup-container] [data-bc-result] li {
    /* border-bottom: 1px solid #CBD3DD; */
    border: 1px solid #CBD3DD;
    border-top: none;
    direction: rtl;
    text-align: right;
    padding: 5px 5px;
    cursor: pointer;
}

[data-bc-autocomplete-popup-container] [data-bc-result] li:first-child {
    border-top: 1px solid #CBD3DD;
}

[data-bc-autocomplete-popup-container] [data-bc-result] li:hover {
    background-color: #f4faff;
}

/*  */
[data-bc-add-item] {
    padding: 0.1em 0.4em;
    display: inline-block;
    border: 1px solid #C7D6DB;
    /* background: #F5F8F9; */
    border-radius: 5px;
    transition: border 0.3s linear 0s;
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    font-size: 12px;
    color: #555;
    position: relative;
    line-height: 35px;
    /* margin-bottom: 5px; */
}

[data-bc-answer-container] [data-bc-invalid] [data-bc-add-item] {
    border: 1px solid #B40020;
    border: 1px solid #B40020;
    box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);
}

[data-bc-add-item] [data-bc-btn-remove] {
    width: 35px;
    height: 35px;
    border: none;
    /* background-repeat: no-repeat; */
    /* background-position: center center; */
    /* background-image: url(remove.PNG); */
    background-color: #f7f0f3;
    cursor: pointer;
    padding: 0;
    /* border: 1px solid #c7d6db; */
    border-radius: 5px;
    text-align: center;
    position: absolute;
    left: -36px;
    top: 0;
}

[data-bc-add-item] [data-bc-btn-remove]:hover {
    /* background-image: url(remove-hover.PNG); */
    /* background-color: #e03838; */
}

[data-bc-auto-complete-single-type-btn] {
    position: absolute;
    left: -50px;
    top: 0;
}`, "",{"version":3,"sources":["webpack://./src/component/renderable/schema/part-control/auto-fill/assets/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,eAAe;IACf,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,4CAA4C;IAC5C,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,mCAAmC;IACnC,oCAAoC;IACpC,+BAA+B;IAC/B,gCAAgC;IAChC,2BAA2B;IAC3B,4BAA4B;IAC5B,yBAAyB;IACzB,cAAc;IACd,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,eAAe;IACf,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,sCAAsC;IACtC,uCAAuC;IACvC,kCAAkC;IAClC,mCAAmC;IACnC,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,oBAAoB;IACpB,qBAAqB;IACrB,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,iCAAiC;IACjC,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,WAAW;AACf;;AAEA;IACI,qBAAqB;IACrB,kFAAkF;IAClF,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,+BAA+B;IAC/B,sBAAsB;IACtB,wBAAwB;IACxB,SAAS;IACT,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;IACtC,yBAAyB;IACzB,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,KAAK;AACL;IACI,oBAAoB;IACpB,qBAAqB;IACrB,yBAAyB;IACzB,yBAAyB;IACzB,kBAAkB;IAClB,iCAAiC;IACjC,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kCAAkC;IAClC,wCAAwC;IACxC,uCAAuC;IACvC,yBAAyB;IACzB,eAAe;IACf,UAAU;IACV,+BAA+B;IAC/B,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,MAAM;AACV;;AAEA;IACI,6CAA6C;IAC7C,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,MAAM;AACV","sourcesContent":["[data-bc-autocomplete-popup-container] {\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    z-index: 999999999;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] [data-bc-autocomplete-popup] {\r\n    height: auto;\r\n    width: 400px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-50%);\r\n    border-radius: 5px;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] [data-bc-title] {\r\n    line-height: 20px;\r\n    border-bottom: 1px dashed #ccc;\r\n    -webkit-border-top-left-radius: 5px;\r\n    -webkit-border-top-right-radius: 5px;\r\n    -moz-border-radius-topleft: 5px;\r\n    -moz-border-radius-topright: 5px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    background-color: #f7f7f7;\r\n    direction: rtl;\r\n    text-align: left;\r\n    padding: 5px 0px;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] [data-bc-btn-close] {\r\n    border: none;\r\n    background-color: inherit;\r\n    padding: 0 10px;\r\n    cursor: pointer;\r\n    opacity: 0.8;\r\n    font-weight: bold;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] [data-bc-btn-close]:hover {\r\n    opacity: 1;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] [data-bc-body] {\r\n    min-height: 50px;\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    -webkit-border-bottom-left-radius: 5px;\r\n    -webkit-border-bottom-right-radius: 5px;\r\n    -moz-border-radius-bottomleft: 5px;\r\n    -moz-border-radius-bottomright: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] input[type=\"text\"] {\r\n    padding: 0.1em 0.4em;\r\n    display: inline-block;\r\n    border: 1px solid #C7D6DB;\r\n    background-color: #F5F8F9;\r\n    border-radius: 5px;\r\n    transition: border 0.3s linear 0s;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 35px;\r\n    font-size: 12px;\r\n    color: #555;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] input[type=\"text\"]:focus {\r\n    border-color: #66afe9;\r\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);\r\n    outline: 0 none;\r\n    background-color: #fff8ee;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] [data-bc-result] {\r\n    width: 100%;\r\n    /* border: 1px solid #c5c5c5; */\r\n    background-color: #FFF;\r\n    /* position: absolute; */\r\n    top: 35px;\r\n    left: 0px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n    scrollbar-width: thin;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] [data-bc-result] li {\r\n    /* border-bottom: 1px solid #CBD3DD; */\r\n    border: 1px solid #CBD3DD;\r\n    border-top: none;\r\n    direction: rtl;\r\n    text-align: right;\r\n    padding: 5px 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] [data-bc-result] li:first-child {\r\n    border-top: 1px solid #CBD3DD;\r\n}\r\n\r\n[data-bc-autocomplete-popup-container] [data-bc-result] li:hover {\r\n    background-color: #f4faff;\r\n}\r\n\r\n/*  */\r\n[data-bc-add-item] {\r\n    padding: 0.1em 0.4em;\r\n    display: inline-block;\r\n    border: 1px solid #C7D6DB;\r\n    /* background: #F5F8F9; */\r\n    border-radius: 5px;\r\n    transition: border 0.3s linear 0s;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 35px;\r\n    font-size: 12px;\r\n    color: #555;\r\n    position: relative;\r\n    line-height: 35px;\r\n    /* margin-bottom: 5px; */\r\n}\r\n\r\n[data-bc-answer-container] [data-bc-invalid] [data-bc-add-item] {\r\n    border: 1px solid #B40020;\r\n    border: 1px solid #B40020;\r\n    box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);\r\n}\r\n\r\n[data-bc-add-item] [data-bc-btn-remove] {\r\n    width: 35px;\r\n    height: 35px;\r\n    border: none;\r\n    /* background-repeat: no-repeat; */\r\n    /* background-position: center center; */\r\n    /* background-image: url(remove.PNG); */\r\n    background-color: #f7f0f3;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    /* border: 1px solid #c7d6db; */\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    position: absolute;\r\n    left: -36px;\r\n    top: 0;\r\n}\r\n\r\n[data-bc-add-item] [data-bc-btn-remove]:hover {\r\n    /* background-image: url(remove-hover.PNG); */\r\n    /* background-color: #e03838; */\r\n}\r\n\r\n[data-bc-auto-complete-single-type-btn] {\r\n    position: absolute;\r\n    left: -50px;\r\n    top: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-bc-html-container] {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  z-index: 999999999;
}

[data-bc-html-container] [data-bc-html] {
  height: auto;
  width: 400px;
  position: absolute;
  top: 50%;
  background: white;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 5px;
  padding-bottom: 10px;
}

[data-bc-html-container] [data-bc-title] {
  line-height: 20px;
  border-bottom: 1px dashed #ccc;
  -webkit-border-top-left-radius: 5px;
  -webkit-border-top-right-radius: 5px;
  -moz-border-radius-topleft: 5px;
  -moz-border-radius-topright: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #f7f7f7;
  direction: rtl;
  text-align: left;
  padding: 5px 0px;
}

[data-bc-html-container] [data-bc-btn-close] {
  border: none;
  background-color: inherit;
  padding: 0 10px;
  cursor: pointer;
  opacity: 0.8;
  font-weight: bold;
}
[data-bc-html-field-row] {
  display: flex;
}
[data-bc-html-container] [data-bc-btn-close]:hover {
  opacity: 1;
}
[data-sys-html-footer] button {
  background-color: #034b85;
  border: none;
  border-radius: 8px;
  color: white;
  width: 80px;
  height: 36px;
}
[data-sys-html-footer] button:hover {
  cursor: pointer;
  background-color: #0058a0;
}
[data-bc-iframe] {
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  border: 2px solid #d8e2e6;
  border-radius: 4px;
}
[data-bc-html-container] [data-bc-body] {
  min-height: 50px;
  padding: 20px;
  background-color: #fff;
  -webkit-border-bottom-left-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
  -moz-border-radius-bottomleft: 5px;
  -moz-border-radius-bottomright: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
`, "",{"version":3,"sources":["webpack://./src/component/renderable/schema/part-control/html/assets/style.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC,eAAe;EACf,aAAa;EACb,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,iBAAiB;EACjB,SAAS;EACT,4CAA4C;EAC5C,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,8BAA8B;EAC9B,mCAAmC;EACnC,oCAAoC;EACpC,+BAA+B;EAC/B,gCAAgC;EAChC,2BAA2B;EAC3B,4BAA4B;EAC5B,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,eAAe;EACf,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,aAAa;AACf;AACA;EACE,UAAU;AACZ;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,yBAAyB;AAC3B;AACA;EACE,6BAA6B;EAC7B,8BAA8B;EAC9B,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,sCAAsC;EACtC,uCAAuC;EACvC,kCAAkC;EAClC,mCAAmC;EACnC,8BAA8B;EAC9B,+BAA+B;AACjC","sourcesContent":["[data-bc-html-container] {\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  position: fixed;\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  text-align: center;\r\n  z-index: 999999999;\r\n}\r\n\r\n[data-bc-html-container] [data-bc-html] {\r\n  height: auto;\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  background: white;\r\n  left: 50%;\r\n  transform: translateX(-50%) translateY(-50%);\r\n  border-radius: 5px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n[data-bc-html-container] [data-bc-title] {\r\n  line-height: 20px;\r\n  border-bottom: 1px dashed #ccc;\r\n  -webkit-border-top-left-radius: 5px;\r\n  -webkit-border-top-right-radius: 5px;\r\n  -moz-border-radius-topleft: 5px;\r\n  -moz-border-radius-topright: 5px;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  background-color: #f7f7f7;\r\n  direction: rtl;\r\n  text-align: left;\r\n  padding: 5px 0px;\r\n}\r\n\r\n[data-bc-html-container] [data-bc-btn-close] {\r\n  border: none;\r\n  background-color: inherit;\r\n  padding: 0 10px;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n  font-weight: bold;\r\n}\r\n[data-bc-html-field-row] {\r\n  display: flex;\r\n}\r\n[data-bc-html-container] [data-bc-btn-close]:hover {\r\n  opacity: 1;\r\n}\r\n[data-sys-html-footer] button {\r\n  background-color: #034b85;\r\n  border: none;\r\n  border-radius: 8px;\r\n  color: white;\r\n  width: 80px;\r\n  height: 36px;\r\n}\r\n[data-sys-html-footer] button:hover {\r\n  cursor: pointer;\r\n  background-color: #0058a0;\r\n}\r\n[data-bc-iframe] {\r\n  width: -webkit-fill-available;\r\n  height: -webkit-fill-available;\r\n  border: 2px solid #d8e2e6;\r\n  border-radius: 4px;\r\n}\r\n[data-bc-html-container] [data-bc-body] {\r\n  min-height: 50px;\r\n  padding: 20px;\r\n  background-color: #fff;\r\n  -webkit-border-bottom-left-radius: 5px;\r\n  -webkit-border-bottom-right-radius: 5px;\r\n  -moz-border-radius-bottomleft: 5px;\r\n  -moz-border-radius-bottomright: 5px;\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7728:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-bc-fm-lookup] input[type="text"] {
    width: calc((100% - 10px) / 2) !important;
    margin-left: 10px;
}

[data-bc-fm-lookup] [data-bc-select-value] {
    width: calc((100% - 10px) / 2) !important;
    padding: 0.1em 0.4em;
    display: inline-block;
    border: 1px solid #C7D6DB;
    border-radius: 5px;
    transition: border 0.3s linear 0s;
    box-sizing: border-box;
    height: 35px;
    font-size: 12px;
    color: #555;
    position: relative;
    line-height: 35px;
    vertical-align: top;
}

[data-bc-invalid] [data-bc-fm-lookup] [data-bc-select-value] {
    border: 1px solid #B40020;
    box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);
}

[data-bc-fm-lookup] [data-bc-result] {
    width: 100%;
    /* border: 1px solid #c5c5c5; */
    background-color: #FFF;
    /* position: absolute; */
    top: 35px;
    left: 0px;
    max-height: 200px;
    overflow-y: auto;
    scrollbar-width: thin;
    margin: 0;
    padding: 0;
    list-style: none;
}

[data-bc-fm-lookup] [data-bc-result] li {
    /* border-bottom: 1px solid #CBD3DD; */
    border: 1px solid #CBD3DD;
    border-top: none;
    direction: rtl;
    text-align: right;
    padding: 5px 5px;
    cursor: pointer;
}

[data-bc-fm-lookup] [data-bc-result] li:first-child {
    border-top: 1px solid #CBD3DD;
}

[data-bc-fm-lookup] [data-bc-result] li:hover {
    background-color: #f4faff;
}`, "",{"version":3,"sources":["webpack://./src/component/renderable/schema/part-control/lookup/assets/style.css"],"names":[],"mappings":"AAAA;IACI,yCAAyC;IACzC,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,oBAAoB;IACpB,qBAAqB;IACrB,yBAAyB;IACzB,kBAAkB;IAClB,iCAAiC;IACjC,sBAAsB;IACtB,YAAY;IACZ,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI,WAAW;IACX,+BAA+B;IAC/B,sBAAsB;IACtB,wBAAwB;IACxB,SAAS;IACT,SAAS;IACT,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;IACrB,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;IACtC,yBAAyB;IACzB,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["[data-bc-fm-lookup] input[type=\"text\"] {\r\n    width: calc((100% - 10px) / 2) !important;\r\n    margin-left: 10px;\r\n}\r\n\r\n[data-bc-fm-lookup] [data-bc-select-value] {\r\n    width: calc((100% - 10px) / 2) !important;\r\n    padding: 0.1em 0.4em;\r\n    display: inline-block;\r\n    border: 1px solid #C7D6DB;\r\n    border-radius: 5px;\r\n    transition: border 0.3s linear 0s;\r\n    box-sizing: border-box;\r\n    height: 35px;\r\n    font-size: 12px;\r\n    color: #555;\r\n    position: relative;\r\n    line-height: 35px;\r\n    vertical-align: top;\r\n}\r\n\r\n[data-bc-invalid] [data-bc-fm-lookup] [data-bc-select-value] {\r\n    border: 1px solid #B40020;\r\n    box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);\r\n}\r\n\r\n[data-bc-fm-lookup] [data-bc-result] {\r\n    width: 100%;\r\n    /* border: 1px solid #c5c5c5; */\r\n    background-color: #FFF;\r\n    /* position: absolute; */\r\n    top: 35px;\r\n    left: 0px;\r\n    max-height: 200px;\r\n    overflow-y: auto;\r\n    scrollbar-width: thin;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n[data-bc-fm-lookup] [data-bc-result] li {\r\n    /* border-bottom: 1px solid #CBD3DD; */\r\n    border: 1px solid #CBD3DD;\r\n    border-top: none;\r\n    direction: rtl;\r\n    text-align: right;\r\n    padding: 5px 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n[data-bc-fm-lookup] [data-bc-result] li:first-child {\r\n    border-top: 1px solid #CBD3DD;\r\n}\r\n\r\n[data-bc-fm-lookup] [data-bc-result] li:hover {\r\n    background-color: #f4faff;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-bc-schema-unknown-control]{
    color:#ee9696;
    text-align: center;
    
}`, "",{"version":3,"sources":["webpack://./src/component/renderable/schema/part-control/unknown/assets/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;;AAEtB","sourcesContent":["[data-bc-schema-unknown-control]{\r\n    color:#ee9696;\r\n    text-align: center;\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-bc-answer-container] input[type="file"] {
    padding: 7px 0.4em !important;
}

/* [data-bc-file-input]::-ms-browse {
    visibility: hidden;
    display: none;
}

[data-bc-file-input]::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
}

[data-bc-file-input]::file-selector-button {
    visibility: hidden;
    display: none;
} */

[data-bc-upload-file-list] {
    padding: 5px 0 0px;
    margin: 0;
    list-style: none;
}

[data-bc-upload-file-list] [data-bc-upload-file-item] {
    position: relative;
    display: inline-block;
    margin: 10px 10px;
    width: 90px;
}

[data-bc-upload-file-list] [data-bc-item-btn-delete] {
    cursor: pointer;
    position: absolute;
    right: 0px;
    top: -7px;
}

[data-bc-upload-file-list] [data-bc-item-download] {
    text-decoration: none;
}

[data-bc-upload-file-list] [data-bc-item-icon-frame] {
    width: 52px;
    height: 52px;
    margin: 0 auto;
    float: none;
    text-align: center;
    /* border: 1px solid rgba(121, 121, 121, 0.25); */
    border-radius: 5px;
    /* padding: 3px; */
}

[data-bc-upload-file-list] [data-bc-item-icon] {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}

[data-bc-upload-file-list] [data-bc-item-title] {
    width: 100%;
    height: 20px;
    display: block;
    font-size: 12px;
    color: #000;
    opacity: 0.55;
    text-align: center;
    direction: ltr;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}`, "",{"version":3,"sources":["webpack://./src/component/renderable/schema/part-control/upload/assets/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;AACjC;;AAEA;;;;;;;;;;;;;GAaG;;AAEH;IACI,kBAAkB;IAClB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,WAAW;IACX,kBAAkB;IAClB,iDAAiD;IACjD,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,eAAe;IACf,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,uBAAuB;IACvB,oBAAoB;IACpB,qBAAqB;IACrB,4BAA4B;AAChC","sourcesContent":["[data-bc-answer-container] input[type=\"file\"] {\r\n    padding: 7px 0.4em !important;\r\n}\r\n\r\n/* [data-bc-file-input]::-ms-browse {\r\n    visibility: hidden;\r\n    display: none;\r\n}\r\n\r\n[data-bc-file-input]::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n    display: none;\r\n}\r\n\r\n[data-bc-file-input]::file-selector-button {\r\n    visibility: hidden;\r\n    display: none;\r\n} */\r\n\r\n[data-bc-upload-file-list] {\r\n    padding: 5px 0 0px;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n[data-bc-upload-file-list] [data-bc-upload-file-item] {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin: 10px 10px;\r\n    width: 90px;\r\n}\r\n\r\n[data-bc-upload-file-list] [data-bc-item-btn-delete] {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 0px;\r\n    top: -7px;\r\n}\r\n\r\n[data-bc-upload-file-list] [data-bc-item-download] {\r\n    text-decoration: none;\r\n}\r\n\r\n[data-bc-upload-file-list] [data-bc-item-icon-frame] {\r\n    width: 52px;\r\n    height: 52px;\r\n    margin: 0 auto;\r\n    float: none;\r\n    text-align: center;\r\n    /* border: 1px solid rgba(121, 121, 121, 0.25); */\r\n    border-radius: 5px;\r\n    /* padding: 3px; */\r\n}\r\n\r\n[data-bc-upload-file-list] [data-bc-item-icon] {\r\n    width: auto;\r\n    height: auto;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}\r\n\r\n[data-bc-upload-file-list] [data-bc-item-title] {\r\n    width: 100%;\r\n    height: 20px;\r\n    display: block;\r\n    font-size: 12px;\r\n    color: #000;\r\n    opacity: 0.55;\r\n    text-align: center;\r\n    direction: ltr;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 1;\r\n    -webkit-box-orient: vertical;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 9324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-bc-items] [data-bc-schema-main-container],
[data-bc-part-related-cell] [data-bc-schema-main-container] {
  padding: 10px;
}

[data-bc-question] {
  clear: both;
  margin-bottom: 5px;
}

[data-bc-title-container] {
  width: 300px;
  /* padding: 0 10px; */
  float: right;
  line-height: 35px;
  margin-left: 10px;
  position: relative;
}

[data-bc-title-container] [data-bc-question-title] {
  margin-left: 10px;
}

[data-bc-title-container] [data-bc-help-btn] {
  /* background-image: url(help.PNG); */
  background-position: center;
  /* float: left; */
  /* width: 28px; */
  /* height: 28px; */
  border-radius: 50%;
  /* position: absolute; */
  /* left: 0; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  cursor: pointer;
}

[data-bc-title-container] [data-bc-help-btn]:hover {
  /* background-image: url(help-hover.PNG); */
}

[data-bc-title-container] [data-bc-help-btn] svg {
  vertical-align: middle;
}

/* ********** tooltip common ********** */
[data-bc-help-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

[data-bc-help-tooltip]:before,
[data-bc-help-tooltip]:after {
  visibility: hidden;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
  transition: all .5s;
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
}

[data-bc-help-tooltip]:before {
  position: absolute;
  bottom: 15px;
  right: 50%;
  margin-bottom: 5px;
  margin-right: -15px;
  /* transform: translateX(-50%); */
  padding: 7px;
  width: max-content;
  max-width: 300px;
  border-radius: 5px;
  background-color: #000;
  background-color: hsla(0, 0%, 20%, 0.9);
  color: #fff;
  content: attr(data-bc-help-tooltip);
  text-align: right;
  font-size: 12px;
  line-height: 1.2;
}

[data-bc-help-tooltip]:after {
  position: absolute;
  bottom: 15px;
  right: 50%;
  margin-right: -5px;
  width: 0;
  border-top: 5px solid #000;
  border-top: 5px solid hsla(0, 0%, 20%, 0.9);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}

[data-bc-help-tooltip]:hover:before,
[data-bc-help-tooltip]:hover:after {
  visibility: visible;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);
  opacity: 1;
}

[data-bc-answer-container] {
  /* float: right; */
  display: inline-block;
  width: calc(100% - 310px);
}

[data-bc-answer-container] label[data-bc-text-input] {
  padding: 0.1em 0.4em;
  display: inline-block;
  border: 1px solid #c7d6db;
  /* background: #f5f8f9; */
  border-radius: 5px;
  transition: border 0.3s linear 0s;
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
  color: #555;
  height: 35px;
  line-height: 35px;
}

[data-bc-answer-container] [data-bc-invalid] label[data-bc-text-input] {
  border: 1px solid #B40020;
  box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);
}

[data-bc-answer-container] input[type="text"],
[data-bc-answer-container] input[type="password"],
[data-bc-answer-container] input[type="time"],
/* [data-bc-answer-container] input[type="color"], */
[data-bc-answer-container] input[type="file"],
[data-bc-answer-container] select,
[data-bc-answer-container] textarea {
  padding: 0.1em 0.4em;
  display: inline-block;
  border: 1px solid #c7d6db;
  background-color: #f5f8f9;
  border-radius: 5px;
  transition: border 0.3s linear 0s;
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
  color: #555;
}

[data-bc-answer-container] [data-bc-invalid] input[type="text"],
[data-bc-answer-container] [data-bc-invalid] input[type="password"],
[data-bc-answer-container] [data-bc-invalid] input[type="time"],
[data-bc-answer-container] [data-bc-invalid] input[type="color"],
[data-bc-answer-container] [data-bc-invalid] input[type="file"],
[data-bc-answer-container] [data-bc-invalid] select,
[data-bc-answer-container] [data-bc-invalid] textarea {
  border: 1px solid #B40020;
  box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);
}

[data-bc-answer-container] input[type="text"],
[data-bc-answer-container] input[type="password"],
[data-bc-answer-container] input[type="time"],
[data-bc-answer-container] input[type="color"],
[data-bc-answer-container] input[type="file"],
[data-bc-answer-container] select {
  height: 35px;
}

[data-bc-answer-container] textarea {
  height: 175px;
  resize: vertical;
}

[data-bc-answer-container] textarea:disabled {
  background-color: inherit;
  height: max-content;
}

[data-bc-answer-container] input[type="text"]:focus,
[data-bc-answer-container] input[type="file"]:focus,
[data-bc-answer-container] select:focus,
[data-bc-answer-container] textarea:focus {
  border-color: #66afe9;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);
  outline: 0 none;
  background-color: #fff8ee;
}

[data-bc-answer-container] input[type="text"]:disabled,
[data-bc-answer-container] input[type="password"]:disabled,
[data-bc-answer-container] input[type="time"]:disabled,
[data-bc-answer-container] input[type="color"]:disabled,
[data-bc-answer-container] input[type="file"]:disabled,
[data-bc-answer-container] select:disabled,
[data-bc-answer-container] textarea:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

[data-bc-answer-container] input[type="text"][readonly],
[data-bc-answer-container] input[type="password"][readonly],
[data-bc-answer-container] input[type="time"][readonly],
[data-bc-answer-container] input[type="color"][readonly],
[data-bc-answer-container] input[type="file"][readonly],
[data-bc-answer-container] select[readonly],
[data-bc-answer-container] textarea[readonly] {
  opacity: 0.7;
  cursor: not-allowed;
  pointer-events: none;
}

[data-bc-answer-container] [data-bc-view-pass] {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

[data-bc-answer-title-container] {
  /* margin-bottom: 5px; */
  width: calc(100% - 75px);
}

[data-bc-answer-title-container] [data-bc-answer-title] {
  /* float: right; */
  display: inline-block;
  line-height: 35px;
}

@media only screen and (max-width:800px) {
  [data-bc-title-container] {
    width: 200px;
  }

  [data-bc-answer-container] {
    width: calc(100% - 210px);
  }
}

@media only screen and (max-width:700px) {
  [data-bc-title-container] {
    width: 100%;
    margin-bottom: 5px;
  }

  [data-bc-answer-container] {
    width: 100%;
  }

  [data-bc-answer-title-container] {
    width: calc(100% - 35px);
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -moz-flex;
    display: -webkit-flex; /* NEW - Chrome */
    display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
  }
}`, "",{"version":3,"sources":["webpack://./src/component/renderable/schema/question-container/assets/style.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qCAAqC;EACrC,2BAA2B;EAC3B,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,aAAa;EACb,cAAc;EACd,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,sBAAsB;AACxB;;AAEA,yCAAyC;AACzC;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;AACjB;;AAEA;;EAEE,kBAAkB;EAClB,gEAAgE;EAChE,2DAA2D;EAC3D,UAAU;EACV,oBAAoB;EACpB,mBAAmB;EACnB,2BAA2B;EAC3B,wBAAwB;EACxB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,mBAAmB;EACnB,iCAAiC;EACjC,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,uCAAuC;EACvC,WAAW;EACX,mCAAmC;EACnC,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,0BAA0B;EAC1B,2CAA2C;EAC3C,mCAAmC;EACnC,kCAAkC;EAClC,YAAY;EACZ,YAAY;EACZ,cAAc;AAChB;;AAEA;;EAEE,mBAAmB;EACnB,kEAAkE;EAClE,6DAA6D;EAC7D,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,iCAAiC;EACjC,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,8CAA8C;AAChD;;AAEA;;;;;;;EAOE,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,iCAAiC;EACjC,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,WAAW;AACb;;AAEA;;;;;;;EAOE,yBAAyB;EACzB,8CAA8C;AAChD;;AAEA;;;;;;EAME,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;;;;EAIE,qBAAqB;EACrB,kFAAkF;EAClF,eAAe;EACf,yBAAyB;AAC3B;;AAEA;;;;;;;EAOE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;;;;;;EAOE,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,WAAW;IACX,kBAAkB;EACpB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,wBAAwB;IACxB,oBAAoB,EAAE,+BAA+B;IACrD,iBAAiB,EAAE,+CAA+C;IAClE,oBAAoB,EAAE,oBAAoB;IAC1C,kBAAkB;IAClB,qBAAqB,EAAE,iBAAiB;IACxC,aAAa,EAAE,wCAAwC;EACzD;AACF","sourcesContent":["[data-bc-items] [data-bc-schema-main-container],\r\n[data-bc-part-related-cell] [data-bc-schema-main-container] {\r\n  padding: 10px;\r\n}\r\n\r\n[data-bc-question] {\r\n  clear: both;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n[data-bc-title-container] {\r\n  width: 300px;\r\n  /* padding: 0 10px; */\r\n  float: right;\r\n  line-height: 35px;\r\n  margin-left: 10px;\r\n  position: relative;\r\n}\r\n\r\n[data-bc-title-container] [data-bc-question-title] {\r\n  margin-left: 10px;\r\n}\r\n\r\n[data-bc-title-container] [data-bc-help-btn] {\r\n  /* background-image: url(help.PNG); */\r\n  background-position: center;\r\n  /* float: left; */\r\n  /* width: 28px; */\r\n  /* height: 28px; */\r\n  border-radius: 50%;\r\n  /* position: absolute; */\r\n  /* left: 0; */\r\n  /* top: 50%; */\r\n  /* transform: translateY(-50%); */\r\n  cursor: pointer;\r\n}\r\n\r\n[data-bc-title-container] [data-bc-help-btn]:hover {\r\n  /* background-image: url(help-hover.PNG); */\r\n}\r\n\r\n[data-bc-title-container] [data-bc-help-btn] svg {\r\n  vertical-align: middle;\r\n}\r\n\r\n/* ********** tooltip common ********** */\r\n[data-bc-help-tooltip] {\r\n  position: relative;\r\n  z-index: 2;\r\n  cursor: pointer;\r\n}\r\n\r\n[data-bc-help-tooltip]:before,\r\n[data-bc-help-tooltip]:after {\r\n  visibility: hidden;\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\r\n  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: all .5s;\r\n  -webkit-transition: all .5s;\r\n  -moz-transition: all .5s;\r\n  -o-transition: all .5s;\r\n}\r\n\r\n[data-bc-help-tooltip]:before {\r\n  position: absolute;\r\n  bottom: 15px;\r\n  right: 50%;\r\n  margin-bottom: 5px;\r\n  margin-right: -15px;\r\n  /* transform: translateX(-50%); */\r\n  padding: 7px;\r\n  width: max-content;\r\n  max-width: 300px;\r\n  border-radius: 5px;\r\n  background-color: #000;\r\n  background-color: hsla(0, 0%, 20%, 0.9);\r\n  color: #fff;\r\n  content: attr(data-bc-help-tooltip);\r\n  text-align: right;\r\n  font-size: 12px;\r\n  line-height: 1.2;\r\n}\r\n\r\n[data-bc-help-tooltip]:after {\r\n  position: absolute;\r\n  bottom: 15px;\r\n  right: 50%;\r\n  margin-right: -5px;\r\n  width: 0;\r\n  border-top: 5px solid #000;\r\n  border-top: 5px solid hsla(0, 0%, 20%, 0.9);\r\n  border-right: 5px solid transparent;\r\n  border-left: 5px solid transparent;\r\n  content: \" \";\r\n  font-size: 0;\r\n  line-height: 0;\r\n}\r\n\r\n[data-bc-help-tooltip]:hover:before,\r\n[data-bc-help-tooltip]:hover:after {\r\n  visibility: visible;\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\r\n  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);\r\n  opacity: 1;\r\n}\r\n\r\n[data-bc-answer-container] {\r\n  /* float: right; */\r\n  display: inline-block;\r\n  width: calc(100% - 310px);\r\n}\r\n\r\n[data-bc-answer-container] label[data-bc-text-input] {\r\n  padding: 0.1em 0.4em;\r\n  display: inline-block;\r\n  border: 1px solid #c7d6db;\r\n  /* background: #f5f8f9; */\r\n  border-radius: 5px;\r\n  transition: border 0.3s linear 0s;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  color: #555;\r\n  height: 35px;\r\n  line-height: 35px;\r\n}\r\n\r\n[data-bc-answer-container] [data-bc-invalid] label[data-bc-text-input] {\r\n  border: 1px solid #B40020;\r\n  box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);\r\n}\r\n\r\n[data-bc-answer-container] input[type=\"text\"],\r\n[data-bc-answer-container] input[type=\"password\"],\r\n[data-bc-answer-container] input[type=\"time\"],\r\n/* [data-bc-answer-container] input[type=\"color\"], */\r\n[data-bc-answer-container] input[type=\"file\"],\r\n[data-bc-answer-container] select,\r\n[data-bc-answer-container] textarea {\r\n  padding: 0.1em 0.4em;\r\n  display: inline-block;\r\n  border: 1px solid #c7d6db;\r\n  background-color: #f5f8f9;\r\n  border-radius: 5px;\r\n  transition: border 0.3s linear 0s;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  font-size: 12px;\r\n  color: #555;\r\n}\r\n\r\n[data-bc-answer-container] [data-bc-invalid] input[type=\"text\"],\r\n[data-bc-answer-container] [data-bc-invalid] input[type=\"password\"],\r\n[data-bc-answer-container] [data-bc-invalid] input[type=\"time\"],\r\n[data-bc-answer-container] [data-bc-invalid] input[type=\"color\"],\r\n[data-bc-answer-container] [data-bc-invalid] input[type=\"file\"],\r\n[data-bc-answer-container] [data-bc-invalid] select,\r\n[data-bc-answer-container] [data-bc-invalid] textarea {\r\n  border: 1px solid #B40020;\r\n  box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);\r\n}\r\n\r\n[data-bc-answer-container] input[type=\"text\"],\r\n[data-bc-answer-container] input[type=\"password\"],\r\n[data-bc-answer-container] input[type=\"time\"],\r\n[data-bc-answer-container] input[type=\"color\"],\r\n[data-bc-answer-container] input[type=\"file\"],\r\n[data-bc-answer-container] select {\r\n  height: 35px;\r\n}\r\n\r\n[data-bc-answer-container] textarea {\r\n  height: 175px;\r\n  resize: vertical;\r\n}\r\n\r\n[data-bc-answer-container] textarea:disabled {\r\n  background-color: inherit;\r\n  height: max-content;\r\n}\r\n\r\n[data-bc-answer-container] input[type=\"text\"]:focus,\r\n[data-bc-answer-container] input[type=\"file\"]:focus,\r\n[data-bc-answer-container] select:focus,\r\n[data-bc-answer-container] textarea:focus {\r\n  border-color: #66afe9;\r\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(102, 175, 233, 0.6);\r\n  outline: 0 none;\r\n  background-color: #fff8ee;\r\n}\r\n\r\n[data-bc-answer-container] input[type=\"text\"]:disabled,\r\n[data-bc-answer-container] input[type=\"password\"]:disabled,\r\n[data-bc-answer-container] input[type=\"time\"]:disabled,\r\n[data-bc-answer-container] input[type=\"color\"]:disabled,\r\n[data-bc-answer-container] input[type=\"file\"]:disabled,\r\n[data-bc-answer-container] select:disabled,\r\n[data-bc-answer-container] textarea:disabled {\r\n  opacity: 0.7;\r\n  cursor: not-allowed;\r\n}\r\n\r\n[data-bc-answer-container] input[type=\"text\"][readonly],\r\n[data-bc-answer-container] input[type=\"password\"][readonly],\r\n[data-bc-answer-container] input[type=\"time\"][readonly],\r\n[data-bc-answer-container] input[type=\"color\"][readonly],\r\n[data-bc-answer-container] input[type=\"file\"][readonly],\r\n[data-bc-answer-container] select[readonly],\r\n[data-bc-answer-container] textarea[readonly] {\r\n  opacity: 0.7;\r\n  cursor: not-allowed;\r\n  pointer-events: none;\r\n}\r\n\r\n[data-bc-answer-container] [data-bc-view-pass] {\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  left: 5px;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  cursor: pointer;\r\n}\r\n\r\n[data-bc-answer-title-container] {\r\n  /* margin-bottom: 5px; */\r\n  width: calc(100% - 75px);\r\n}\r\n\r\n[data-bc-answer-title-container] [data-bc-answer-title] {\r\n  /* float: right; */\r\n  display: inline-block;\r\n  line-height: 35px;\r\n}\r\n\r\n@media only screen and (max-width:800px) {\r\n  [data-bc-title-container] {\r\n    width: 200px;\r\n  }\r\n\r\n  [data-bc-answer-container] {\r\n    width: calc(100% - 210px);\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:700px) {\r\n  [data-bc-title-container] {\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  [data-bc-answer-container] {\r\n    width: 100%;\r\n  }\r\n\r\n  [data-bc-answer-title-container] {\r\n    width: calc(100% - 35px);\r\n    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */\r\n    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */\r\n    display: -ms-flexbox; /* TWEENER - IE 10 */\r\n    display: -moz-flex;\r\n    display: -webkit-flex; /* NEW - Chrome */\r\n    display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-bc-part] {
  /* float: right; */
  display: inline-block;
  vertical-align: top;
  margin-bottom: 5px;
}

[data-bc-part][data-bc-invalid],
[data-bc-part][data-bc-invalid] * {
  /* background-color: #fefe !important; */
  /* color: lightcoral !important; */
}

[data-bc-part] [data-bc-validation-part] {
  display: none;
}

[data-bc-part][data-bc-invalid] [data-bc-validation-part] {
  display: block;
  padding-right: 10px;
  list-style: none;
  margin: 5px 0;
  color: #B40020;
  font-size: 14px;
}

[data-bc-part][data-bc-invalid] [data-bc-validation-part] li {
  color: #B40020;
  font-size: 14px;
}
`, "",{"version":3,"sources":["webpack://./src/component/renderable/schema/question-part/assets/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,wCAAwC;EACxC,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB","sourcesContent":["[data-bc-part] {\r\n  /* float: right; */\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n[data-bc-part][data-bc-invalid],\r\n[data-bc-part][data-bc-invalid] * {\r\n  /* background-color: #fefe !important; */\r\n  /* color: lightcoral !important; */\r\n}\r\n\r\n[data-bc-part] [data-bc-validation-part] {\r\n  display: none;\r\n}\r\n\r\n[data-bc-part][data-bc-invalid] [data-bc-validation-part] {\r\n  display: block;\r\n  padding-right: 10px;\r\n  list-style: none;\r\n  margin: 5px 0;\r\n  color: #B40020;\r\n  font-size: 14px;\r\n}\r\n\r\n[data-bc-part][data-bc-invalid] [data-bc-validation-part] li {\r\n  color: #B40020;\r\n  font-size: 14px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 902:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-bc-answer] {
  clear: both;
}

[data-bc-part-container],
[data-bc-btn-container] {
  float: right;
  /* display: inline-block; */
  /* margin-bottom: 5px; */
  width: calc(100% - 75px);
}

[data-part-btn-container] {
  vertical-align: top;
}

[data-bc-question] [data-bc-pair-btn-container] {
  display: none;
}

[data-bc-question] [data-bc-btn],
[data-bc-question] [data-bc-btn-remove],
[data-bc-question] [data-bc-btn-add] {
  width: 35px;
  height: 35px;
  border: none;
  /* background-repeat: no-repeat; */
  /* background-position: center center; */
  /* background-color: #f5f8f9; */
  cursor: pointer;
  padding: 0;
  margin-left: 5px;
  float: right;
  /* border: 1px solid #c7d6db; */
  border-radius: 5px;
  text-align: center;
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -moz-flex;
  display: -webkit-flex; /* NEW - Chrome */
  display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}

[data-part-btn-container] [data-bc-btn],
[data-part-btn-container] [data-bc-btn-remove],
[data-part-btn-container] [data-bc-btn-add] {
  position: unset !important;
}

[data-bc-question] [data-bc-btns]:last-child {
  margin-left: 0;
}

[data-bc-question] [data-bc-btn="add"] svg {
  width: 12px;
  height: 12px;
}

[data-bc-question] [data-bc-btn="remove"] svg {
  width: 10px;
  height: 10px;
}

[data-bc-question] [data-bc-btn="add"],
[data-bc-question] [data-bc-btn-add] {
  /* background-image: url(add.PNG); */
  background-color: #eef4f9;
}

[data-bc-question] [data-bc-btn="add"]:hover,
[data-bc-question] [data-bc-btn-add]:hover {
  /* background-image: url(add-hover.PNG); */
  /* background-color: #6cb829; */
}

[data-bc-question] [data-bc-btn="remove"],
[data-bc-question] [data-bc-btn-remove] {
  /* background-image: url(remove.PNG); */
  background-color: #f7f0f3;
}

[data-bc-question] [data-bc-btn="remove"]:hover,
[data-bc-question] [data-bc-btn-remove]:hover {
  /* background-image: url(remove-hover.PNG); */
  /* background-color: #e03838; */
}

[data-bc-part-related-cell] {
  /* width: 300px; */
  margin-left: 10px;
  /* margin-bottom: 5px; */
  position: relative;
}

[data-bc-schema-info-part="1"] [data-bc-part-related-cell] {
  width: calc(100% - 10px);
}

[data-bc-schema-info-part="2"] [data-bc-part-related-cell] {
  width: calc(50% - 10px);
}

[data-bc-schema-info-part="3"] [data-bc-part-related-cell] {
  width: calc(33.3333% - 10px);
}

[data-bc-schema-info-part="4"] [data-bc-part-related-cell] {
  width: calc(25% - 10px);
}

[data-bc-schema-info-part="5"] [data-bc-part-related-cell] {
  width: calc(20% - 10px);
}

[data-bc-schema-info-part="6"] [data-bc-part-related-cell] {
  width: calc(16.6666% - 10px);
}

[data-bc-schema-info-part="7"] [data-bc-part-related-cell] {
  width: calc(14.2857% - 10px);
}

[data-bc-schema-info-part="8"] [data-bc-part-related-cell] {
  width: calc(12.5% - 10px);
}

[data-bc-schema-info-part="9"] [data-bc-part-related-cell] {
  width: calc(11.1111% - 10px);
}

[data-bc-schema-info-part="10"] [data-bc-part-related-cell] {
  width: calc(10% - 10px);
}

[data-bc-part-related-cell] [data-bc-part-checkbox] {
  padding: 0.5em 0.6em;
  border: 1px solid #c7d6db;
  border-radius: 5px;
}

[data-bc-invalid][data-bc-part-related-cell] [data-bc-part-checkbox] {
  border: 1px solid #B40020;
  box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);
}

[data-bc-part-related-cell] [data-bc-part-radio] {
  padding: 0.5em 0.6em;
  border: 1px solid #c7d6db;
  border-radius: 5px;
}

[data-bc-invalid][data-bc-part-related-cell] [data-bc-part-radio] {
  border: 1px solid #B40020;
  box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);
}

[data-bc-part-related-cell] [data-bc-show-search-popup-btn] {
  width: 35px;
  height: 35px;
  border: none;
  /* background-repeat: no-repeat; */
  /* background-position: center center; */
  /* background-image: url(add.PNG); */
  background-color: #eef4f9;
  cursor: pointer;
  padding: 0;
  border-radius: 5px;
  text-align: center;
}

[data-bc-part-related-cell] [data-bc-show-search-popup-btn]:hover {
  /* background-image: url(add-hover.PNG); */
}

[data-bc-part-related-cell] [data-bc-part-radio] [data-bc-keyword-verification="false"],
[data-bc-part-related-cell] [data-bc-part-checkbox] [data-bc-keyword-verification="false"],
[data-bc-answer-container] select [data-bc-keyword-verification="false"],
[data-bc-autocomplete-popup-container] [data-bc-result] li[data-bc-keyword-verification="false"],
[data-bc-fm-lookup] [data-bc-result] li[data-bc-keyword-verification="false"] {
  color: #FFA500;
}

@media only screen and (max-width:700px) {
  [data-bc-part-related-cell] {
    width: unset;
    flex-grow: 1;
    flex: -moz-available;
  }

  [data-bc-part-container] {
    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox; /* TWEENER - IE 10 */
    display: -moz-flex;
    display: -webkit-flex; /* NEW - Chrome */
    display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */
  }
}`, "",{"version":3,"sources":["webpack://./src/component/renderable/schema/question/assets/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;AACb;;AAEA;;EAEE,YAAY;EACZ,2BAA2B;EAC3B,wBAAwB;EACxB,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,wCAAwC;EACxC,+BAA+B;EAC/B,eAAe;EACf,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,+BAA+B;EAC/B,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB,EAAE,+BAA+B;EACrD,iBAAiB,EAAE,+CAA+C;EAClE,oBAAoB,EAAE,oBAAoB;EAC1C,kBAAkB;EAClB,qBAAqB,EAAE,iBAAiB;EACxC,aAAa,EAAE,wCAAwC;EACvD,2BAA2B;EAC3B,mBAAmB;EACnB,+BAA+B;EAC/B,uBAAuB;AACzB;;AAEA;;;EAGE,0BAA0B;AAC5B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;;EAEE,0CAA0C;EAC1C,+BAA+B;AACjC;;AAEA;;EAEE,uCAAuC;EACvC,yBAAyB;AAC3B;;AAEA;;EAEE,6CAA6C;EAC7C,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,wBAAwB;EACxB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,8CAA8C;AAChD;;AAEA;EACE,oBAAoB;EACpB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,8CAA8C;AAChD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,kCAAkC;EAClC,wCAAwC;EACxC,oCAAoC;EACpC,yBAAyB;EACzB,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;;;;;EAKE,cAAc;AAChB;;AAEA;EACE;IACE,YAAY;IACZ,YAAY;IACZ,oBAAoB;EACtB;;EAEA;IACE,oBAAoB,EAAE,+BAA+B;IACrD,iBAAiB,EAAE,+CAA+C;IAClE,oBAAoB,EAAE,oBAAoB;IAC1C,kBAAkB;IAClB,qBAAqB,EAAE,iBAAiB;IACxC,aAAa,EAAE,wCAAwC;EACzD;AACF","sourcesContent":["[data-bc-answer] {\r\n  clear: both;\r\n}\r\n\r\n[data-bc-part-container],\r\n[data-bc-btn-container] {\r\n  float: right;\r\n  /* display: inline-block; */\r\n  /* margin-bottom: 5px; */\r\n  width: calc(100% - 75px);\r\n}\r\n\r\n[data-part-btn-container] {\r\n  vertical-align: top;\r\n}\r\n\r\n[data-bc-question] [data-bc-pair-btn-container] {\r\n  display: none;\r\n}\r\n\r\n[data-bc-question] [data-bc-btn],\r\n[data-bc-question] [data-bc-btn-remove],\r\n[data-bc-question] [data-bc-btn-add] {\r\n  width: 35px;\r\n  height: 35px;\r\n  border: none;\r\n  /* background-repeat: no-repeat; */\r\n  /* background-position: center center; */\r\n  /* background-color: #f5f8f9; */\r\n  cursor: pointer;\r\n  padding: 0;\r\n  margin-left: 5px;\r\n  float: right;\r\n  /* border: 1px solid #c7d6db; */\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */\r\n  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */\r\n  display: -ms-flexbox; /* TWEENER - IE 10 */\r\n  display: -moz-flex;\r\n  display: -webkit-flex; /* NEW - Chrome */\r\n  display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */\r\n  -webkit-align-items: center;\r\n  align-items: center;\r\n  -webkit-justify-content: center;\r\n  justify-content: center;\r\n}\r\n\r\n[data-part-btn-container] [data-bc-btn],\r\n[data-part-btn-container] [data-bc-btn-remove],\r\n[data-part-btn-container] [data-bc-btn-add] {\r\n  position: unset !important;\r\n}\r\n\r\n[data-bc-question] [data-bc-btns]:last-child {\r\n  margin-left: 0;\r\n}\r\n\r\n[data-bc-question] [data-bc-btn=\"add\"] svg {\r\n  width: 12px;\r\n  height: 12px;\r\n}\r\n\r\n[data-bc-question] [data-bc-btn=\"remove\"] svg {\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n[data-bc-question] [data-bc-btn=\"add\"],\r\n[data-bc-question] [data-bc-btn-add] {\r\n  /* background-image: url(add.PNG); */\r\n  background-color: #eef4f9;\r\n}\r\n\r\n[data-bc-question] [data-bc-btn=\"add\"]:hover,\r\n[data-bc-question] [data-bc-btn-add]:hover {\r\n  /* background-image: url(add-hover.PNG); */\r\n  /* background-color: #6cb829; */\r\n}\r\n\r\n[data-bc-question] [data-bc-btn=\"remove\"],\r\n[data-bc-question] [data-bc-btn-remove] {\r\n  /* background-image: url(remove.PNG); */\r\n  background-color: #f7f0f3;\r\n}\r\n\r\n[data-bc-question] [data-bc-btn=\"remove\"]:hover,\r\n[data-bc-question] [data-bc-btn-remove]:hover {\r\n  /* background-image: url(remove-hover.PNG); */\r\n  /* background-color: #e03838; */\r\n}\r\n\r\n[data-bc-part-related-cell] {\r\n  /* width: 300px; */\r\n  margin-left: 10px;\r\n  /* margin-bottom: 5px; */\r\n  position: relative;\r\n}\r\n\r\n[data-bc-schema-info-part=\"1\"] [data-bc-part-related-cell] {\r\n  width: calc(100% - 10px);\r\n}\r\n\r\n[data-bc-schema-info-part=\"2\"] [data-bc-part-related-cell] {\r\n  width: calc(50% - 10px);\r\n}\r\n\r\n[data-bc-schema-info-part=\"3\"] [data-bc-part-related-cell] {\r\n  width: calc(33.3333% - 10px);\r\n}\r\n\r\n[data-bc-schema-info-part=\"4\"] [data-bc-part-related-cell] {\r\n  width: calc(25% - 10px);\r\n}\r\n\r\n[data-bc-schema-info-part=\"5\"] [data-bc-part-related-cell] {\r\n  width: calc(20% - 10px);\r\n}\r\n\r\n[data-bc-schema-info-part=\"6\"] [data-bc-part-related-cell] {\r\n  width: calc(16.6666% - 10px);\r\n}\r\n\r\n[data-bc-schema-info-part=\"7\"] [data-bc-part-related-cell] {\r\n  width: calc(14.2857% - 10px);\r\n}\r\n\r\n[data-bc-schema-info-part=\"8\"] [data-bc-part-related-cell] {\r\n  width: calc(12.5% - 10px);\r\n}\r\n\r\n[data-bc-schema-info-part=\"9\"] [data-bc-part-related-cell] {\r\n  width: calc(11.1111% - 10px);\r\n}\r\n\r\n[data-bc-schema-info-part=\"10\"] [data-bc-part-related-cell] {\r\n  width: calc(10% - 10px);\r\n}\r\n\r\n[data-bc-part-related-cell] [data-bc-part-checkbox] {\r\n  padding: 0.5em 0.6em;\r\n  border: 1px solid #c7d6db;\r\n  border-radius: 5px;\r\n}\r\n\r\n[data-bc-invalid][data-bc-part-related-cell] [data-bc-part-checkbox] {\r\n  border: 1px solid #B40020;\r\n  box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);\r\n}\r\n\r\n[data-bc-part-related-cell] [data-bc-part-radio] {\r\n  padding: 0.5em 0.6em;\r\n  border: 1px solid #c7d6db;\r\n  border-radius: 5px;\r\n}\r\n\r\n[data-bc-invalid][data-bc-part-related-cell] [data-bc-part-radio] {\r\n  border: 1px solid #B40020;\r\n  box-shadow: 0px 0px 4px rgba(180, 0, 32, 0.25);\r\n}\r\n\r\n[data-bc-part-related-cell] [data-bc-show-search-popup-btn] {\r\n  width: 35px;\r\n  height: 35px;\r\n  border: none;\r\n  /* background-repeat: no-repeat; */\r\n  /* background-position: center center; */\r\n  /* background-image: url(add.PNG); */\r\n  background-color: #eef4f9;\r\n  cursor: pointer;\r\n  padding: 0;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n}\r\n\r\n[data-bc-part-related-cell] [data-bc-show-search-popup-btn]:hover {\r\n  /* background-image: url(add-hover.PNG); */\r\n}\r\n\r\n[data-bc-part-related-cell] [data-bc-part-radio] [data-bc-keyword-verification=\"false\"],\r\n[data-bc-part-related-cell] [data-bc-part-checkbox] [data-bc-keyword-verification=\"false\"],\r\n[data-bc-answer-container] select [data-bc-keyword-verification=\"false\"],\r\n[data-bc-autocomplete-popup-container] [data-bc-result] li[data-bc-keyword-verification=\"false\"],\r\n[data-bc-fm-lookup] [data-bc-result] li[data-bc-keyword-verification=\"false\"] {\r\n  color: #FFA500;\r\n}\r\n\r\n@media only screen and (max-width:700px) {\r\n  [data-bc-part-related-cell] {\r\n    width: unset;\r\n    flex-grow: 1;\r\n    flex: -moz-available;\r\n  }\r\n\r\n  [data-bc-part-container] {\r\n    display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */\r\n    display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */\r\n    display: -ms-flexbox; /* TWEENER - IE 10 */\r\n    display: -moz-flex;\r\n    display: -webkit-flex; /* NEW - Chrome */\r\n    display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `[data-bc-section] {
    margin-bottom: 10px;
    padding: 10px 10px;
}`, "",{"version":3,"sources":["webpack://./src/component/renderable/schema/section/assets/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["[data-bc-section] {\r\n    margin-bottom: 10px;\r\n    padding: 10px 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6314:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 1354:
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 7193:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;


/***/ }),

/***/ 8422:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeMax = Math.max,
    nativeNow = Date.now;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = defaultsDeep;


/***/ }),

/***/ 4741:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof __webpack_require__.g === "object" ? __webpack_require__.g :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process["env" + ""] && process["env" + ""]["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ }),

/***/ 5072:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 7659:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 5056:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7825:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 1113:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 6695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ src_ComponentCollection)
});

// EXTERNAL MODULE: ./node_modules/tsyringe/dist/esm5/index.js + 26 modules
var esm5 = __webpack_require__(9627);
// EXTERNAL MODULE: ./src/enum.ts
var src_enum = __webpack_require__(3503);
// EXTERNAL MODULE: ./src/component/CommandComponent.ts
var CommandComponent = __webpack_require__(9074);
// EXTERNAL MODULE: ./src/component/Component.ts
var Component = __webpack_require__(8819);
;// CONCATENATED MODULE: ./src/component/text-base/AttributeComponent.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class AttributeComponent extends Component/* default */.A {
    constructor(element, context, attribute) {
        super(element, context);
        this.priority = src_enum/* Priority */.bx.none;
        this.attribute = attribute;
        this.token = this.attribute.value.ToStringToken(context);
        this.addTrigger(this.token.getSourceNames());
    }
    initializeAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.token.getValueAsync(false);
            this.setContent(value !== null && value !== void 0 ? value : "");
        });
    }
    renderAsync(source) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = yield this.token.getValueAsync();
            this.setContent(content);
        });
    }
    setContent(content) {
        this.attribute.value = content;
    }
}

// EXTERNAL MODULE: ./src/RangeObject/RangeObject.ts
var RangeObject = __webpack_require__(2191);
;// CONCATENATED MODULE: ./src/component/text-base/TextComponent.ts
var TextComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class TextComponent extends Component/* default */.A {
    constructor(node, context, start, end) {
        super(node, context);
        this.priority = src_enum/* Priority */.bx.none;
        const range = document.createRange();
        range.setStart(node, start);
        range.setEnd(node, end);
        this.rangeObject = new RangeObject/* default */.A(range, this);
        this.token = this.rangeObject.initialContent.textContent.ToStringToken(context);
    }
    initializeAsync() {
        return TextComponent_awaiter(this, void 0, void 0, function* () {
            this.addTrigger(this.token.getSourceNames());
            const value = yield this.token.getValueAsync(false);
            this.setContent(value !== null && value !== void 0 ? value : "");
        });
    }
    renderAsync(source) {
        return TextComponent_awaiter(this, void 0, void 0, function* () {
            const content = yield this.token.getValueAsync();
            this.setContent(content);
        });
    }
    setContent(content) {
        return TextComponent_awaiter(this, void 0, void 0, function* () {
            this.rangeObject.setContent(content);
        });
    }
}

;// CONCATENATED MODULE: ./src/ComponentCollection.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ComponentCollection_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ComponentCollection_1;





let ComponentCollection = ComponentCollection_1 = class ComponentCollection {
    get disposed() {
        return this._disposed;
    }
    get initializeTask() {
        return this._initializeTask;
    }
    constructor(context, container) {
        this._disposed = false;
        this.container = container;
        this.context = context;
        this.regex = this.context.options.getDefault("binding.regex");
        this.blockRegex = this.context.options.getDefault("binding.codeblock-regex");
    }
    processNodesAsync(nodes) {
        return ComponentCollection_awaiter(this, void 0, void 0, function* () {
            if (this.components) {
                throw new Error("Run ComponentCollection for more than one");
            }
            this.components = this.extractComponent(nodes);
            this._initializeTask = this.initializeAsync(this.components);
            yield this._initializeTask;
            yield this.runAsync(this.components);
        });
    }
    initializeAsync(components) {
        return ComponentCollection_awaiter(this, void 0, void 0, function* () {
            const tasks = components.map((x) => x.initializeAsync());
            yield Promise.all(tasks);
        });
    }
    runAsync(components) {
        return ComponentCollection_awaiter(this, void 0, void 0, function* () {
            const priorityMap = components.reduce((map, component) => {
                if (component.priority != src_enum/* Priority */.bx.none) {
                    let list = map.get(component.priority);
                    if (!list) {
                        list = new Array();
                        map.set(component.priority, list);
                    }
                    list.push(component);
                }
                return map;
            }, new Map());
            for (const priority of [src_enum/* Priority */.bx.high, src_enum/* Priority */.bx.normal, src_enum/* Priority */.bx.low]) {
                const relatedComponent = priorityMap.get(priority);
                if (relatedComponent) {
                    const taskList = relatedComponent.map((x) => x.processAsync());
                    yield Promise.all(taskList);
                }
            }
        });
    }
    extractComponent(nodes) {
        const components = new Array();
        nodes.forEach((node) => {
            this.extractTextBaseComponents(node, components);
            this.extractBasisCommands(node, components);
        });
        return components;
    }
    extractBasisCommands(node, components) {
        const pair = this.findRootLevelComponentNode(node);
        for (const item of pair.coreList) {
            const core = item.getAttribute("core").split(".", 1)[0].toLowerCase();
            components.push(this.createCommandComponent(item, core));
        }
        for (const item of pair.tagList) {
            const tagName = item.tagName.toLowerCase();
            const key = ComponentCollection_1.knowHtmlElement.indexOf(tagName) != -1
                ? tagName
                : "unknown-html";
            components.push(this.createCommandComponent(item, key));
        }
    }
    extractTextComponent(node, components) {
        if (node.textContent.trim().length != 0) {
            do {
                let match = node.textContent.match(this.regex);
                if (!match) {
                    match = node.textContent.match(this.blockRegex);
                }
                if (match) {
                    var com = new TextComponent(node, this.context, match.index, match.index + match[0].length);
                    components.push(com);
                }
                else {
                    break;
                }
            } while (true);
        }
    }
    extractAttributeComponent(element, components) {
        return ComponentCollection_awaiter(this, void 0, void 0, function* () {
            for (const pair of element.attributes) {
                if (pair.value.trim().length != 0) {
                    let match = pair.value.match(this.regex);
                    if (!match) {
                        match = pair.value.match(this.blockRegex);
                    }
                    if (match) {
                        const com = new AttributeComponent(element, this.context, pair);
                        components.push(com);
                    }
                }
            }
        });
    }
    extractTextBaseComponents(element, components) {
        if (element.nodeType == Node.TEXT_NODE) {
            this.extractTextComponent(element, components);
        }
        else if (element.nodeType != Node.COMMENT_NODE) {
            if (element instanceof Element) {
                if (!element.isIgnoreTag()) {
                    if (!element.isBasisCore()) {
                        this.extractAttributeComponent(element, components);
                        if (element.hasChildNodes()) {
                            for (const child of element.childNodes) {
                                this.extractTextBaseComponents(child, components);
                            }
                        }
                    }
                }
            }
            else {
                if (element.hasChildNodes()) {
                    for (const child of element.childNodes) {
                        this.extractTextBaseComponents(child, components);
                    }
                }
            }
        }
    }
    createCommandComponent(element, token) {
        const childContainer = this.container.createChildContainer();
        childContainer.register("element", { useValue: element });
        childContainer.register("context", { useValue: this.context });
        childContainer.register("dc", { useValue: childContainer });
        childContainer.register("parent.dc", { useValue: this.container });
        return childContainer.resolve(token);
    }
    findRootLevelComponentNode(rootElement) {
        const coreList = new Array();
        const tagList = new Array();
        var process = (child) => {
            if (child instanceof Element) {
                if (!child.isIgnoreTag()) {
                    if (child.isBasisCore()) {
                        coreList.push(child);
                    }
                    else {
                        if (child.isBasisTag()) {
                            tagList.push(child);
                        }
                        child.childNodes.forEach(process);
                    }
                }
            }
            else {
                child.childNodes.forEach(process);
            }
        };
        process(rootElement);
        return { coreList, tagList };
    }
    disposeAsync() {
        var _a, _b;
        return ComponentCollection_awaiter(this, void 0, void 0, function* () {
            if (!this._disposed) {
                this._disposed = true;
                const tasks = (_a = this.components) === null || _a === void 0 ? void 0 : _a.map((component) => component.disposeAsync());
                yield Promise.all(tasks);
                (_b = this.components) === null || _b === void 0 ? void 0 : _b.splice(0, this.components.length);
            }
        });
    }
    GetCommandListByCore(core) {
        return this.GetCommandList().filter((x) => x.core == core);
    }
    GetCommandList() {
        return this.components
            .filter((x) => x instanceof CommandComponent/* default */.A)
            .map((x) => x);
    }
    GetComponentList() {
        return this.components;
    }
};
ComponentCollection.knowHtmlElement = ["form", "input", "select"];
ComponentCollection = ComponentCollection_1 = __decorate([
    (0,esm5/* injectable */._G)(),
    __param(0, (0,esm5/* inject */.WQ)("context")),
    __param(1, (0,esm5/* inject */.WQ)("dc")),
    __metadata("design:paramtypes", [Object, Object])
], ComponentCollection);
/* harmony default export */ const src_ComponentCollection = (ComponentCollection);


/***/ }),

/***/ 2191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ RangeObject)
/* harmony export */ });
class RangeObject {
    constructor(range, owner) {
        this._startNode = document.createTextNode("");
        this._endNode = document.createTextNode("");
        this.initialContent = range.extractContents();
        range.insertNode(this._endNode);
        range.insertNode(this._startNode);
        range.detach();
    }
    getRange() {
        const range = new Range();
        range.setStartAfter(this._startNode);
        range.setEndBefore(this._endNode);
        return range;
    }
    deleteContents() {
        const range = this.getRange();
        range.deleteContents();
        range.detach();
    }
    setContent(content, append = false) {
        const range = this.getRange();
        if (!append) {
            range.deleteContents();
        }
        const oldContent = range.extractContents();
        if (content instanceof Node) {
            oldContent.appendChild(content);
        }
        else if (Array.isArray(content)) {
            oldContent.appendChild(range.createContextualFragment(content.join(",")));
        }
        else {
            oldContent.appendChild(range.createContextualFragment(content.toString()));
        }
        range.insertNode(oldContent);
        range.detach();
    }
}


/***/ }),

/***/ 2130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Util)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Util {
    static HasValue(data) {
        return data !== undefined && data != null;
    }
    static isEqual(stringA, stringB) {
        return (stringA || "").isEqual(stringB);
    }
    static Equal(a, b) {
        var retVal = true;
        if (!Util.HasValue(a) || !Util.HasValue(b)) {
            retVal = false;
        }
        else {
            var aProps = Object.getOwnPropertyNames(a);
            var bProps = Object.getOwnPropertyNames(b);
            if (aProps.length != bProps.length) {
                retVal = false;
            }
            else {
                for (var i = 0; i < aProps.length; i++) {
                    var propName = aProps[i];
                    if (a[propName] !== b[propName]) {
                        retVal = false;
                        break;
                    }
                }
            }
        }
        return retVal;
    }
    static ReplaceEx(source, searchValue, replaceValue) {
        return source.replace(new RegExp(searchValue, "gi"), replaceValue);
    }
    static IsNullOrEmpty(data) {
        return data === undefined || data == null || data === "";
    }
    static getDataAsync(url) {
        return Util.fetchDataAsync(url, "GET");
    }
    static fetchDataAsync(url, method, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const init = { method: method };
            if (data) {
                init.headers = {
                    "Content-Type": "application/json",
                };
                init.body = JSON.stringify(data);
            }
            const result = yield fetch(url, init);
            return yield result.json();
        });
    }
    static formatString(pattern, params) {
        const paraNameList = [...Object.getOwnPropertyNames(params)];
        const formatter = new Function(...paraNameList, `return \`${pattern}\``);
        return formatter(...paraNameList.map((x) => Reflect.get(params, x)));
    }
    static formatUrl(url, paramsObject, queryStringObject) {
        let retVal = paramsObject ? Util.formatString(url, paramsObject) : url;
        if (queryStringObject) {
            const queryPartList = Object.getOwnPropertyNames(queryStringObject).map((x) => `${encodeURIComponent(x)}=${encodeURIComponent(Reflect.get(queryStringObject, x))}`);
            retVal = `${retVal}?${queryPartList.join("&")}`;
        }
        return retVal;
    }
    static parse(template) {
        return Util.parser.parseFromString(template, "text/html");
    }
    static Move(oldParent, newParent) {
        while (oldParent.childNodes.length > 0) {
            newParent.appendChild(oldParent.childNodes[0]);
        }
    }
    static typeExist(typeName) {
        let exist = false;
        try {
            exist = eval(`typeof ${typeName} !== 'undefine'`);
        }
        catch (e) {
            /*Nothing*/
        }
        return exist;
    }
}
Util.parser = new DOMParser();


/***/ }),

/***/ 9074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CommandComponent)
/* harmony export */ });
/* harmony import */ var _RangeObject_RangeObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2191);
/* harmony import */ var _ElementBaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4594);


class CommandComponent extends _ElementBaseComponent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A {
    constructor(element, context) {
        super(element, context);
        this.core = this.node.getAttribute("core");
        const range = document.createRange();
        range.selectNode(this.node);
        this.range = new _RangeObject_RangeObject__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(range, this);
        this.content = this.range.initialContent;
    }
    setContent(newContent, append) {
        this.range.setContent(newContent, append);
    }
}


/***/ }),

/***/ 8819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3503);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Component {
    get disposed() {
        return this._disposed;
    }
    get busy() {
        return this._busy;
    }
    constructor(node, context) {
        this._handlingSource = new Array();
        this.priority = _enum__WEBPACK_IMPORTED_MODULE_0__/* .Priority */ .bx.low;
        this.allowMultiProcess = false;
        this._busy = false;
        this._disposed = false;
        this.node = node;
        this.context = context;
        this._handler = this.onTrigger.bind(this);
    }
    processAsync() {
        return this.onTrigger();
    }
    onTrigger(source) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._disposed && (!this._busy || this.allowMultiProcess)) {
                this._busy = true;
                try {
                    yield this.renderAsync(source);
                }
                finally {
                    this._busy = false;
                }
            }
        });
    }
    addTrigger(sourceIds) {
        sourceIds === null || sourceIds === void 0 ? void 0 : sourceIds.forEach((sourceId) => {
            if (this._handlingSource.indexOf(sourceId) === -1) {
                this.context.addOnSourceSetHandler(sourceId, this._handler);
                this._handlingSource.push(sourceId);
            }
        });
    }
    disposeAsync() {
        this._handlingSource.forEach((sourceId) => {
            this.context.removeOnSourceSetHandler(sourceId, this._handler);
        });
        this._disposed = true;
        return Promise.resolve();
    }
}


/***/ }),

/***/ 4594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ElementBaseComponent)
/* harmony export */ });
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8819);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class ElementBaseComponent extends _Component__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A {
    get triggers() {
        return this._triggers;
    }
    constructor(element, context) {
        super(element, context);
        this.isHide = false;
    }
    initializeAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            this.ifToken = this.getAttributeToken("if");
            const onRendering = yield this.getAttributeValueAsync("OnRendering");
            if (onRendering) {
                this.onRenderingAsync = new Function("callbackArgument", `return ${onRendering}(callbackArgument);`);
            }
            const onRendered = yield this.getAttributeValueAsync("OnRendered");
            if (onRendered) {
                this.onRenderedAsync = new Function("callbackArgument", `return ${onRendered}(callbackArgument);`);
            }
            const onProcessing = yield this.getAttributeValueAsync("OnProcessing");
            if (onProcessing) {
                this.onProcessingAsync = new Function("callbackArgument", `return ${onProcessing}(callbackArgument);`);
            }
            const onProcessed = yield this.getAttributeValueAsync("OnProcessed");
            if (onProcessed) {
                this.onProcessedAsync = new Function("callbackArgument", `return ${onProcessed}(callbackArgument);`);
            }
            const value = yield this.getAttributeValueAsync("triggers");
            this._triggers = value === null || value === void 0 ? void 0 : value.split(" ");
            this.addTrigger(this._triggers);
        });
    }
    getIfValueAsync() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const rawValue = yield ((_a = this.ifToken) === null || _a === void 0 ? void 0 : _a.getValueAsync());
            let retVal = true;
            if (rawValue != null && rawValue != undefined) {
                try {
                    const fn = new Function(`try{return ${rawValue};}catch{return false;}`);
                    retVal = fn();
                }
                catch (e) {
                    console.error(`Error in parse 'if' attribute expression in command: '${rawValue}'`);
                    throw e;
                }
            }
            return retVal;
        });
    }
    renderAsync(source) {
        return __awaiter(this, void 0, void 0, function* () {
            let canRender = yield this.getIfValueAsync();
            if (canRender && this.onRenderingAsync) {
                const renderingArgs = this.createCallbackArgument({
                    prevent: false,
                    source: source,
                });
                yield this.onRenderingAsync(renderingArgs);
                canRender = !renderingArgs.prevent;
            }
            let runResult = null;
            if (canRender) {
                runResult = yield this.runAsync(source);
                this.isHide = false;
                if (runResult !== null && this.onRenderedAsync) {
                    yield this.onRenderedAsync(this.createCallbackArgument({
                        result: runResult,
                        source: source,
                    }));
                }
            }
            else if (!this.isHide) {
                yield this.hideAsync();
                this.isHide = true;
            }
        });
    }
    getAttributeValueAsync(attributeName, defaultValue = null) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const token = this.getAttributeToken(attributeName);
            return (_a = (yield (token === null || token === void 0 ? void 0 : token.getValueAsync()))) !== null && _a !== void 0 ? _a : defaultValue;
        });
    }
    getAttributeObjectValueAsync(attributeName, defaultValue = null) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const token = this.node.GetObjectToken(attributeName, this.context);
            return (_a = (yield (token === null || token === void 0 ? void 0 : token.getValueAsync()))) !== null && _a !== void 0 ? _a : defaultValue;
        });
    }
    getAttributeBooleanValueAsync(attributeName, defaultValue = false) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const token = this.node.GetBooleanToken(attributeName, this.context);
            return (_a = (yield (token === null || token === void 0 ? void 0 : token.getValueAsync()))) !== null && _a !== void 0 ? _a : defaultValue;
        });
    }
    getAttributeToken(attributeName) {
        return this.node.GetStringToken(attributeName, this.context);
    }
    createCallbackArgument(data) {
        return Object.assign({ context: this.context, node: this.node }, data);
    }
    hideAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve();
        });
    }
}


/***/ }),

/***/ 7003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SourceBaseComponent)
/* harmony export */ });
/* harmony import */ var _CommandComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9074);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class SourceBaseComponent extends _CommandComponent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A {
    constructor(element, context) {
        super(element, context);
    }
    processAsync() {
        const _super = Object.create(null, {
            processAsync: { get: () => super.processAsync }
        });
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.sourceId = (_a = (yield this.getAttributeValueAsync("dataMemberName"))) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            this.addTrigger([this.sourceId]);
            yield _super.processAsync.call(this);
        });
    }
    runAsync(source) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = null;
            if ((source === null || source === void 0 ? void 0 : source.id) !== this.sourceId) {
                source = this.context.tryToGetSource(this.sourceId);
            }
            if (source) {
                if (this.onProcessingAsync) {
                    const args = this.createCallbackArgument({
                        source: source,
                    });
                    yield this.onProcessingAsync(args);
                    source = args.source;
                }
                result = yield this.renderSourceAsync(source);
            }
            return result;
        });
    }
}


/***/ }),

/***/ 5543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9627);
/* harmony import */ var _ComponentCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6695);
/* harmony import */ var _CommandComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9074);
/* harmony import */ var _context_LocalRootContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1152);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8422);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let GroupComponent = class GroupComponent extends _CommandComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A {
    constructor(element, context, container) {
        super(element, context);
        this._collections = new Array();
        this.container = container;
        this.childNodes = [...element.childNodes];
        this.fillContent();
    }
    fillContent() {
        const content = document.createDocumentFragment();
        this.childNodes.forEach((node) => content.appendChild(node));
        this.range.setContent(content);
    }
    runAsync() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isHide) {
                this.fillContent();
            }
            (_a = this.oldLocalContext) === null || _a === void 0 ? void 0 : _a.dispose();
            this.currentDC = this.container.createChildContainer();
            this.currentDC.register("parent.context", { useValue: this.context });
            this.currentDC.register("dc", { useValue: this.currentDC });
            this.currentDC.register("parent.dc", { useValue: this.container });
            const options = yield this.getAttributeValueAsync("options");
            if (options) {
                const newOptions = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_4___default()(eval(options), this.context.options.originalOptions);
                this.currentDC.register("IHostOptions", {
                    useValue: newOptions,
                });
                this.oldLocalContext = this.currentDC.resolve(_context_LocalRootContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);
            }
            else {
                this.oldLocalContext = this.currentDC.resolve(_context_LocalRootContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);
                //this.oldLocalContext = this.currentDC.resolve("ILocalContext");
            }
            this.currentDC.register("context", {
                useValue: this.oldLocalContext,
            });
            const collection = this.currentDC.resolve(_ComponentCollection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
            this._collections.push(collection);
            yield collection.processNodesAsync(this.childNodes);
        });
    }
    hideAsync() {
        var _a;
        (_a = this.oldLocalContext) === null || _a === void 0 ? void 0 : _a.dispose();
        this.range.deleteContents();
        return super.hideAsync();
    }
    processNodesAsync(nodes) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCollection = this.currentDC.resolve(_ComponentCollection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
            this._collections.push(newCollection);
            yield newCollection.processNodesAsync(nodes);
            return newCollection;
        });
    }
    disposeAsync() {
        const _super = Object.create(null, {
            disposeAsync: { get: () => super.disposeAsync }
        });
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = this.oldLocalContext) === null || _a === void 0 ? void 0 : _a.dispose();
            const tasks = (_b = this._collections) === null || _b === void 0 ? void 0 : _b.map((collection) => collection.disposeAsync());
            yield Promise.all(tasks);
            (_c = this.currentDC) === null || _c === void 0 ? void 0 : _c.clearInstances();
            return _super.disposeAsync.call(this);
        });
    }
};
GroupComponent = __decorate([
    (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .injectable */ ._G)(),
    __param(0, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("element")),
    __param(1, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("context")),
    __param(2, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("dc")),
    __metadata("design:paramtypes", [Element, Object, Object])
], GroupComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GroupComponent);


/***/ }),

/***/ 3002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ QuestionCellManager)
/* harmony export */ });
class QuestionCellManager {
    constructor(container, cellCount) {
        this._childCount = 0;
        this._container = container;
        this._cellCount = cellCount;
        this._cells = new Array();
        for (let i = 0; i < this._cellCount; i++) {
            var cell = document.createElement("div");
            cell.setAttribute("data-bc-schema-column", "");
            this._container.appendChild(cell);
            this._cells.push(cell);
        }
    }
    add(questionUI) {
        const index = this._childCount % this._cellCount;
        this._cells[index].appendChild(questionUI);
        this._childCount += 1;
    }
}


/***/ }),

/***/ 2491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9627);
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2130);
/* harmony import */ var _SourceBaseComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7003);
/* harmony import */ var _question_container_QuestionContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(279);
/* harmony import */ var _QuestionCellManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3002);
/* harmony import */ var _section_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9098);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let SchemaComponent = class SchemaComponent extends _SourceBaseComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A {
    constructor(element, context, container) {
        super(element, context);
        this._dc = container;
    }
    initializeAsync() {
        const _super = Object.create(null, {
            initializeAsync: { get: () => super.initializeAsync }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.initializeAsync.call(this);
            this.schemaUrlToken = this.getAttributeToken("schemaUrl");
            this.paramUrlToken = this.getAttributeToken("paramUrl");
            //this.schemaIdToken = this.getAttributeToken("id");
            //this.versionToken = this.getAttributeToken("version");
            //this.viewModeToken = this.getAttributeToken("viewMode");
            this.displayModeToken = this.getAttributeToken("displayMode");
            this.buttonSelector = yield this.getAttributeValueAsync("button");
            this.resultSourceIdToken = this.getAttributeToken("resultSourceId");
            this.errorResultSourceIdToken = this.getAttributeToken("errorResultSourceId");
            this.callbackToken = this.getAttributeToken("callback");
            this.schemaCallbackToken = this.getAttributeToken("schemaCallback");
            //this.lidToken = this.getAttributeToken("lid");
            this.cellToken = this.getAttributeToken("cell");
            this.filesPathToken = this.getAttributeToken("filesPath");
            document
                .querySelectorAll(this.buttonSelector)
                .forEach((btn) => btn.addEventListener("click", this.onClick.bind(this)));
        });
    }
    onClick(e) {
        e.preventDefault();
        if (this.getAnswersAndSetAsSource) {
            this.getAnswersAndSetAsSource();
        }
    }
    runAsync(source) {
        const _super = Object.create(null, {
            runAsync: { get: () => super.runAsync }
        });
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            //const schemaId = await this.schemaIdToken?.getValueAsync();
            const displayMode = ((_b = (yield ((_a = this.displayModeToken) === null || _a === void 0 ? void 0 : _a.getValueAsync()))) !== null && _b !== void 0 ? _b : "new");
            if (displayMode != "new") {
                _super.runAsync.call(this, source);
            }
            else {
                yield this.initUIAsync(null);
            }
        });
    }
    renderSourceAsync(dataSource) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initUIAsync(dataSource.rows[0]);
        });
    }
    initUIAsync(answer) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return __awaiter(this, void 0, void 0, function* () {
            this._answer = answer;
            this._currentCellManager = null;
            //schemaId = this._answer?.schemaId ?? schemaId;
            this._questions = new Array();
            this.getAnswersAndSetAsSource = null;
            const container = document.createElement("div");
            container.setAttribute("data-bc-schema-main-container", "");
            this.setContent(container, false);
            //if (schemaId) {
            const resultSourceId = yield ((_a = this.resultSourceIdToken) === null || _a === void 0 ? void 0 : _a.getValueAsync());
            //const viewModeStr = await this.viewModeToken?.getValueAsync();
            const displayMode = ((_c = (yield ((_b = this.displayModeToken) === null || _b === void 0 ? void 0 : _b.getValueAsync()))) !== null && _c !== void 0 ? _c : "new");
            const schemaUrlStr = yield ((_d = this.schemaUrlToken) === null || _d === void 0 ? void 0 : _d.getValueAsync());
            const paramUrlStr = yield ((_e = this.paramUrlToken) === null || _e === void 0 ? void 0 : _e.getValueAsync());
            //const version = await this.versionToken?.getValueAsync();
            const callback = yield ((_f = this.callbackToken) === null || _f === void 0 ? void 0 : _f.getValueAsync());
            const schemaCallbackStr = yield ((_g = this.schemaCallbackToken) === null || _g === void 0 ? void 0 : _g.getValueAsync());
            //const lidStr = await this.lidToken?.getValueAsync();
            //const lid = lidStr ? parseInt(lidStr) : null;
            const cellStr = yield ((_h = this.cellToken) === null || _h === void 0 ? void 0 : _h.getValueAsync());
            const cell = cellStr ? parseInt(cellStr) : 1;
            const filesPath = yield ((_j = this.filesPathToken) === null || _j === void 0 ? void 0 : _j.getValueAsync());
            var schemaCallback = schemaCallbackStr
                ? eval(schemaCallbackStr)
                : null;
            if (!schemaCallback) {
                schemaCallback = (context, schemaUrl) => __awaiter(this, void 0, void 0, function* () {
                    var _q;
                    // const url = Util.formatUrl(schemaUrlStr, null, {
                    //   ...(id && { id }),
                    //   ...(ver && { ver }),
                    //   ...(lid && { lid }),
                    // });
                    const url = ((_q = schemaUrl === null || schemaUrl === void 0 ? void 0 : schemaUrl.length) !== null && _q !== void 0 ? _q : 0) > 0
                        ? `${schemaUrlStr}${schemaUrl}`
                        : schemaUrlStr;
                    const response = yield _Util__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDataAsync(url);
                    return response.sources[0].data[0];
                });
            }
            //const viewMode = this._answer ? (viewModeStr ?? "true") == "true" : false;
            const queryStringsMakerAsync = () => __awaiter(this, void 0, void 0, function* () {
                const data = {};
                const names = Array.from(this.node.attributes)
                    .filter((x) => x.name.startsWith("qs_"))
                    .map((x) => x.name);
                for (const name of names) {
                    data[name.substring(3)] = yield this.getAttributeToken(name).getValueAsync(true);
                }
                return data;
            });
            const options = {
                displayMode: displayMode,
                paramUrl: paramUrlStr !== null && paramUrlStr !== void 0 ? paramUrlStr : (_k = this._answer) === null || _k === void 0 ? void 0 : _k.paramUrl,
                schemaId: (_l = this._answer) === null || _l === void 0 ? void 0 : _l.schemaId,
                lid: (_m = this._answer) === null || _m === void 0 ? void 0 : _m.lid,
                version: (_o = this._answer) === null || _o === void 0 ? void 0 : _o.schemaVersion,
                callback: callback ? eval(callback) : null,
                dc: this._dc,
                subSchemaOptions: {
                    schemaUrl: schemaUrlStr,
                    callback: callback,
                    cell: cellStr,
                    schemaCallback: schemaCallbackStr,
                    displayMode: displayMode,
                },
                getQueryStringParamsAsync: queryStringsMakerAsync,
                filesPath: filesPath,
            };
            this._schema = yield schemaCallback(this.context, options.paramUrl);
            const sections = new Map();
            if (this._schema && ((_p = this._schema.questions) === null || _p === void 0 ? void 0 : _p.length) > 0) {
                this._schema.questions.forEach((question) => {
                    var _a, _b;
                    const partAnswer = (_a = this._answer) === null || _a === void 0 ? void 0 : _a.properties.find((x) => x.prpId == question.prpId);
                    let cellManager = null;
                    if (question.sectionId && ((_b = this._schema.sections) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                        if (sections.has(question.sectionId)) {
                            cellManager = sections.get(question.sectionId).cellManager;
                        }
                        else {
                            const sectionSchema = this._schema.sections.find((x) => x.id == question.sectionId);
                            if (sectionSchema) {
                                const section = new _section_Section__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A(sectionSchema, container, cell);
                                sections.set(sectionSchema.id, section);
                                cellManager = section.cellManager;
                                this._currentCellManager = null;
                            }
                        }
                    }
                    if (!cellManager) {
                        if (!this._currentCellManager) {
                            this._currentCellManager = new _QuestionCellManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A(container, cell);
                        }
                        cellManager = this._currentCellManager;
                    }
                    if (options.displayMode == "view") {
                        if (partAnswer && partAnswer != undefined) {
                            this._questions.push(new _question_container_QuestionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(this._questions, question, options, cellManager, partAnswer));
                        }
                    }
                    else {
                        this._questions.push(new _question_container_QuestionContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(this._questions, question, options, cellManager, partAnswer));
                    }
                });
                if (this.buttonSelector &&
                    resultSourceId &&
                    options.displayMode != "view") {
                    this.getAnswersAndSetAsSource = () => __awaiter(this, void 0, void 0, function* () {
                        const answer = yield this.getAnswersAsync(false);
                        console.log("SSSSSSSSSSSSSSSSSSSSSSSSS",answer)
                        if (answer) {
                            this.context.setAsSource(resultSourceId, answer);
                        }
                    });
                }
            }
        });
    }
    getAnswersAsync(throwError) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const userActionList = new Array();
            let hasValidationError = false;
            let retVal = null;
            const errorResultSourceId = yield ((_a = this.errorResultSourceIdToken) === null || _a === void 0 ? void 0 : _a.getValueAsync());
            for (const question of this._questions) {
                try {
                    var actions = yield question.getUserActionAsync();
                    if (actions) {
                        userActionList.push(actions);
                    }
                }
                catch (e) {
                    hasValidationError = true;
                }
            }
            // this._questions.forEach((question) => {
            //   try {
            //     var actions = question.getUserActionAsync();
            //     if (actions) {
            //       userActionList.push(actions);
            //     }
            //   } catch (e) {
            //     hasValidationError = true;
            //   }
            // });
            if (hasValidationError && throwError) {
                throw Error("invalid");
            }
            else if (hasValidationError && errorResultSourceId) {
                this.context.setAsSource(errorResultSourceId, hasValidationError);
            }
            if (!hasValidationError && userActionList.length > 0) {
                retVal = {
                    lid: this._schema.lid,
                    paramUrl: this._schema.paramUrl,
                    schemaId: this._schema.schemaId,
                    schemaVersion: this._schema.schemaVersion,
                    usedForId: (_b = this._answer) === null || _b === void 0 ? void 0 : _b.usedForId,
                    ownerid: (_c = this._answer) === null || _c === void 0 ? void 0 : _c.ownerid,
                    properties: userActionList,
                };
            }
            return retVal;
        });
    }
};
SchemaComponent = __decorate([
    (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .injectable */ ._G)(),
    __param(0, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("element")),
    __param(1, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("context")),
    __param(2, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("dc")),
    __metadata("design:paramtypes", [Element, Object, Object])
], SchemaComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchemaComponent);


/***/ }),

/***/ 279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ QuestionContainer)
});

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/assets/auto-fill-multi-type.html
const auto_fill_multi_type_namespaceObject = "<label data-bc-add-item data-sys-auto-complete=\"\"></label>\r\n";
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/renderable/schema/part-control/auto-fill/assets/style.css
var style = __webpack_require__(7763);
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/assets/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const assets_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/renderable/schema/question-part/assets/style.css
var question_part_assets_style = __webpack_require__(8366);
;// CONCATENATED MODULE: ./src/component/renderable/schema/question-part/assets/style.css

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var style_update = injectStylesIntoStyleTag_default()(question_part_assets_style/* default */.A, style_options);




       /* harmony default export */ const schema_question_part_assets_style = (question_part_assets_style/* default */.A && question_part_assets_style/* default */.A.locals ? question_part_assets_style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/component/renderable/schema/question-part/assets/layout.html
const layout_namespaceObject = "<div data-bc-part>\r\n  <div data-bc-content></div>\r\n  <ul data-bc-validation-part></ul>\r\n</div>\r\n";
// EXTERNAL MODULE: ./src/Util.ts
var Util = __webpack_require__(2130);
;// CONCATENATED MODULE: ./src/component/renderable/schema/question-part/QuestionPart.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class QuestionPart {
    get isDisabled() {
        return this.owner.question.disabled || (this.part.disabled && this.answer)
            ? true
            : false;
    }
    get isReadonly() {
        return this.owner.question.parts.length > 1 && this.part.readonly
            ? true
            : false;
    }
    constructor(part, partLayout, owner, answer) {
        this.owner = owner;
        this.answer = answer;
        this.part = part;
        this.element = Util/* default */.A.parse(layout_namespaceObject).querySelector("[data-bc-part]");
        this._validationElement = this.element.querySelector("[data-bc-validation-part]");
        if (this.part.cssClass) {
            this.element.classList.add(this.part.cssClass);
        }
        this.element.querySelector("[data-bc-content]").outerHTML = partLayout;
        this.owner.element.appendChild(this.element);
        this.element.setAttribute("data-bc-part-related-cell", "");
    }
    formatStringAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryStringParams = yield this.owner.options.getQueryStringParamsAsync();
            const data = Object.assign({ prpId: this.owner.question.prpId, part: this.part.part }, queryStringParams);
            const url = Util/* default */.A.formatString(this.part.link, data);
            return url;
        });
    }
    ValidateValue(userValue, addSubSchemaError = false) {
        var _a, _b, _c, _d;
        const errors = [];
        let retVal = null;
        if (addSubSchemaError) {
            errors.push({
                type: "sub-schema",
                description: "",
            });
        }
        const isArray = Array.isArray(userValue);
        const hasValue = isArray
            ? userValue && userValue.length > 0
            : userValue && userValue.toString() != "";
        if (this.part.validations) {
            try {
                if (this.part.validations.required) {
                    if (!hasValue) {
                        errors.push({
                            type: "required",
                            description: "پر کردن این فیلد الزامیست"
                        });
                    }
                }
            }
            catch (ex) {
                console.error("Error in apply required validation", ex);
            }
            if (hasValue) {
                if (this.part.validations.dataType && !isArray) {
                    try {
                        const ok = (this.part.validations.dataType === "int"
                            ? /^[+-]?\d+$/
                            : /^[+-]?\d+(\.\d+)?$/).test(userValue.toString());
                        if (!ok) {
                            errors.push({
                                type: "type",
                                description: "عدد وارد شده صحیح نیست",
                                params: [this.part.validations.dataType],
                            });
                        }
                    }
                    catch (ex) {
                        console.error("Error in apply data type validation", ex);
                    }
                }
                if (this.part.validations.regex && !isArray) {
                    try {
                        if (!new RegExp(this.part.validations.regex).test(userValue.toString())) {
                            errors.push({
                                type: "regex",
                                // description: `فرمت وارد شده صحیح نیست. فرمت صحیح به صورت ${this.part.validations.regex} است`,
                                description: `فرمت وارد شده صحیح نیست.`,
                                params: [this.part.validations.regex, userValue],
                            });
                        }
                    }
                    catch (ex) {
                        console.error("Error in apply regex validation", ex);
                    }
                }
                try {
                    let lengthOk = true;
                    if (this.part.validations.minLength) {
                        lengthOk = userValue.length >= this.part.validations.minLength;
                    }
                    if (lengthOk && this.part.validations.maxLength) {
                        lengthOk = userValue.length <= this.part.validations.maxLength;
                    }
                    if (!lengthOk) {
                        errors.push({
                            type: "length",
                            description: `طول رشته وارد شده باید در بازه ${this.part.validations.minLength} و ${this.part.validations.maxLength} باشد`,
                            params: [
                                (_a = this.part.validations.minLength) !== null && _a !== void 0 ? _a : null,
                                (_b = this.part.validations.maxLength) !== null && _b !== void 0 ? _b : null,
                            ],
                        });
                    }
                }
                catch (ex) {
                    console.error("Error in apply min length and max length validation", ex);
                }
                if (!isArray) {
                    try {
                        let rangeOk = true;
                        if (this.part.validations.min) {
                            rangeOk = userValue >= this.part.validations.min;
                        }
                        if (rangeOk && this.part.validations.max) {
                            rangeOk = userValue <= this.part.validations.max;
                        }
                        if (!rangeOk) {
                            errors.push({
                                type: "range",
                                description: `عدد وارد شده باید در بازه ${this.part.validations.min} و ${this.part.validations.max} باشد`,
                                params: [
                                    (_c = this.part.validations.min) !== null && _c !== void 0 ? _c : null,
                                    (_d = this.part.validations.max) !== null && _d !== void 0 ? _d : null,
                                ],
                            });
                        }
                    }
                    catch (ex) {
                        console.error("Error in apply min and max validation", ex);
                    }
                }
                if (this.part.validations.size && isArray) {
                    try {
                        let sizeOk = true;
                        let sumSize = 0;
                        userValue.forEach((file, index) => {
                            sumSize += file.size;
                        });
                        sizeOk = this.part.validations.size >= sumSize;
                        if (!sizeOk) {
                            errors.push({
                                type: "size",
                                description: `حجم فایل بیشتر از حجم مجاز (${this.formatBytes(this.part.validations.size)}) است.`,
                                params: [this.formatBytes(this.part.validations.size)],
                            });
                        }
                    }
                    catch (ex) {
                        console.error("Error in apply size validation", ex);
                    }
                }
                if (this.part.validations.mimes && isArray) {
                    try {
                        let mimeOk = true;
                        let mimeSizeOk = true;
                        const mimes = this.part.validations.mimes;
                        userValue.forEach((file) => {
                            const typeFile = file.type;
                            const sizeFile = file.size;
                            var searchMime = mimes.filter((m) => m.mime === typeFile);
                            if (searchMime.length > 0) {
                                mimeSizeOk =
                                    searchMime[0].minSize <= sizeFile &&
                                        sizeFile <= searchMime[0].maxSize;
                            }
                            else {
                                mimeOk = false;
                            }
                        });
                        if (!mimeOk) {
                            const mimesArray = [];
                            mimes.forEach((mime) => {
                                mimesArray.push(mime.mime);
                            });
                            errors.push({
                                type: "mime",
                                description: `نوع فایل در بین انواع فایل مجاز (${mimesArray}) نیست`,
                                params: [mimesArray],
                            });
                        }
                        if (!mimeSizeOk) {
                            let mimeSizeArray = "";
                            mimes.forEach((mime) => {
                                mimeSizeArray += ` ${mime.mime} : ${this.formatBytes(mime.minSize)} - ${this.formatBytes(mime.maxSize)} , `;
                            });
                            mimeSizeArray = mimeSizeArray.substring(0, mimeSizeArray.length - 2);
                            errors.push({
                                type: "mime-size",
                                description: `سایز فایل در بین سایزهای فایل مجاز (${mimeSizeArray}) نیست`,
                                params: [mimeSizeArray],
                            });
                        }
                    }
                    catch (ex) {
                        console.error("Error in apply size validation", ex);
                    }
                }
            }
        }
        if (errors.length > 0) {
            retVal = {
                part: this.part.part,
                title: this.part.caption,
                errors: errors,
            };
        }
        this.updateUIAboutError(retVal);
        return retVal;
    }
    updateUIAboutError(retVal) {
        if (retVal) {
            this.element.setAttribute("data-bc-invalid", "");
            let str = "";
            retVal.errors.forEach((error) => {
                // str += `<li> * ${error.type} ${
                //   error.params ? " - [" + error.params.join(",") + "]" : ""
                // }</li>`;
                str += `<li> * ${error.description} </li>`;
            });
            this._validationElement.innerHTML = str;
        }
        else {
            this.element.removeAttribute("data-bc-invalid");
            this._validationElement.innerHTML = "";
        }
    }
    formatBytes(bytes, decimals = 2) {
        if (bytes === 0)
            return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/question-part/EditableQuestionPart.ts


class EditableQuestionPart extends QuestionPart {
    constructor(part, partLayout, owner, answer) {
        super(part, partLayout, owner, answer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/AutoFillType.ts
var AutoFillType_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class AutoFillType extends EditableQuestionPart {
    get changed() {
        var _a, _b;
        return this.selectedId != ((_b = (_a = this.answer) === null || _a === void 0 ? void 0 : _a.values[0].value) !== null && _b !== void 0 ? _b : null);
    }
    constructor(part, partLayout, owner, answer) {
        super(part, partLayout, owner, answer);
        this.label = this.element.querySelector("[data-bc-add-item]");
        this.selectedId = null;
    }
    getValueAsync(id) {
        return AutoFillType_awaiter(this, void 0, void 0, function* () {
            const rootUrl = this.part.link.split("?")[0];
            const queryStringParams = yield this.owner.options.getQueryStringParamsAsync();
            const url = Util/* default */.A.formatString(`${rootUrl}?fixid=${id}`, queryStringParams);
            return yield Util/* default */.A.getDataAsync(url);
        });
    }
    setValue(value) {
        const mustChange = this.selectedId !== value.id;
        if (mustChange) {
            this.element.querySelector("label").innerHTML = value.value;
            this.selectedId = value.id;
            if (this.owner.options.callback) {
                const param = {
                    element: this.element,
                    prpId: this.owner.question.prpId,
                    typeId: this.owner.question.typeId,
                    value: value,
                };
                this.owner.options.callback(param);
            }
            this.owner.owner.updateButtonsState();
        }
        return mustChange;
    }
    getQueryStringParamsAsync() {
        return AutoFillType_awaiter(this, void 0, void 0, function* () {
            let retVal = yield this.owner.options.getQueryStringParamsAsync();
            let hasError = false;
            if (this.part.dependency) {
                retVal = retVal || {};
                const tasks = this.owner.owner.AllQuestions.map((x) => x.getAllValuesAsync());
                const taskResult = yield Promise.all(tasks);
                const allValues = taskResult.map((x) => {
                    return {
                        propId: x.propId,
                        parts: x.values.filter((y) => y).flatMap((y) => y.parts),
                    };
                });
                this.part.dependency.forEach((item) => {
                    const relatedProperties = allValues.find((x) => x.propId == item.prpId);
                    let relatedParts = null;
                    if (relatedProperties) {
                        const valuesPart = relatedProperties.parts
                            .filter((x) => x.part == item.part)
                            .flatMap((x) => x.values);
                        if (item.required) {
                            relatedParts = this.owner.owner.AllQuestions.filter((x) => x.QuestionSchema.prpId == item.prpId)[0].getParts(item.part);
                        }
                        let value = "";
                        if (valuesPart.length > 0) {
                            value = JSON.stringify(valuesPart.length > 1
                                ? valuesPart.map((x) => x.value)
                                : valuesPart[0].value);
                            relatedParts === null || relatedParts === void 0 ? void 0 : relatedParts.forEach((x) => x.updateUIAboutError(null));
                        }
                        else if (item.required) {
                            const requiredError = {
                                part: item.part,
                                title: "required",
                                errors: [
                                    {
                                        type: "required",
                                        description: "پر کردن این فیلد الزامیست"
                                    },
                                ],
                            };
                            relatedParts.forEach((x) => x.updateUIAboutError(requiredError));
                            hasError = true;
                        }
                        retVal[item.name] = value;
                    }
                });
            }
            if (hasError) {
                throw Error("Has empty required part!");
            }
            return retVal;
        });
    }
    getValidationErrorsAsync() {
        return Promise.resolve(this.ValidateValue(this.selectedId));
    }
    getAddedAsync() {
        let retVal = null;
        if (!this.answer && this.selectedId) {
            retVal = {
                part: this.part.part,
                values: [
                    {
                        value: this.selectedId,
                    },
                ],
            };
        }
        return Promise.resolve(retVal);
    }
    getEditedAsync() {
        let retVal = null;
        if (this.answer &&
            this.selectedId &&
            this.answer.values[0].value != this.selectedId) {
            retVal = {
                part: this.part.part,
                values: [
                    {
                        id: this.answer.values[0].id,
                        value: this.selectedId,
                    },
                ],
            };
        }
        return Promise.resolve(retVal);
    }
    getDeletedAsync() {
        let retVal = null;
        if (this.answer && !this.selectedId) {
            retVal = this.answer;
        }
        return Promise.resolve(retVal);
    }
    getValuesAsync() {
        let retVal = null;
        if (this.selectedId) {
            retVal = {
                part: this.part.part,
                values: [
                    {
                        value: this.selectedId,
                    },
                ],
            };
        }
        return Promise.resolve(retVal);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/assets/popup-layout.html
const popup_layout_namespaceObject = "<div data-bc-autocomplete-popup-container>\r\n  <div data-bc-autocomplete-popup=\"\" data-sys-autocomplete-popup=\"\">\r\n    <div data-bc-title=\"\" data-sys-autocomplete-popup-header=\"\">\r\n      <button data-bc-btn-close=\"\" data-sys-text=\"\">X</button>\r\n    </div>\r\n    <div data-bc-body=\"\" data-sys-autocomplete-popup-body=\"\">\r\n      <input data-bc-search type=\"text\" data-sys-input-text=\"\" />\r\n      <ul data-bc-result=\"\" data-sys-search-result=\"\"></ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/SearchPopup.ts
var SearchPopup_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class SearchPopup {
    constructor(url, valueSelectCallback, multi, queryStrings) {
        this._url = url;
        this._multi = multi;
        this._queryStrings = queryStrings;
        this._valueSelectCallback = valueSelectCallback;
        this._element = Util/* default */.A.parse(popup_layout_namespaceObject).querySelector("[data-bc-autocomplete-popup-container]");
        const btn = this._element.querySelector("[data-bc-btn-close");
        btn.addEventListener("click", this.onCloseClick.bind(this));
        const input = this._element.querySelector("[data-bc-search]");
        input.addEventListener("keyup", this.onKeyUpAsync.bind(this));
        document.body.appendChild(this._element);
    }
    onCloseClick(e) {
        e.preventDefault();
        this._element.remove();
    }
    onKeyUpAsync(e) {
        return SearchPopup_awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const term = e.target.value;
            const url = Util/* default */.A.formatString(this._url, Object.assign({ term }, this._queryStrings));
            const result = yield Util/* default */.A.getDataAsync(url);
            const ul = this._element.querySelector("[data-bc-result]");
            ul.innerHTML = "";
            if (result.length > 0) {
                result.forEach((item) => {
                    const li = document.createElement("li");
                    li.setAttribute("data-bc-value", item.value);
                    li.setAttribute("data-sys-hover", "");
                    li.setAttribute("data-sys-text", "");
                    li.innerHTML = item.value;
                    li.addEventListener("dblclick", (e) => {
                        e.preventDefault();
                        if (this._valueSelectCallback(item)) {
                            li.remove();
                            if (!this._multi) {
                                this._element.remove();
                            }
                        }
                        else {
                            //TODO:
                        }
                    });
                    ul.appendChild(li);
                });
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/AutoFillMultiType.ts




class AutoFillMultiType extends AutoFillType {
    constructor(part, owner, answer, localAnswer) {
        var _a;
        super(part, auto_fill_multi_type_namespaceObject, owner, answer);
        owner.replaceAddClick(this.onShowPopUpBtnClick.bind(this));
        const value = (_a = (answer !== null && answer !== void 0 ? answer : localAnswer)) === null || _a === void 0 ? void 0 : _a.values[0];
        if (value) {
            this.getValueAsync(value.value).then((fixValue) => this.setValue(fixValue));
        }
    }
    onShowPopUpBtnClick() {
        this.getQueryStringParamsAsync()
            .then((x) => {
            const popup = new SearchPopup(this.part.link, this.setValue.bind(this), true, x);
        })
            .catch((error) => {
            //Has empty required part!
        });
    }
    setValue(value) {
        if (!this.selectedId) {
            super.setValue(value);
        }
        else {
            var p = {
                parts: [
                    {
                        part: this.part.part,
                        values: [
                            {
                                value: value.id,
                            },
                        ],
                    },
                ],
            };
            this.owner.owner.addQuestion(p);
        }
        return true;
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/auto-complete/AutoCompleteMultiType.ts

class AutoCompleteMultiType extends AutoFillMultiType {
    constructor(part, owner, answer, localAnswer) {
        super(part, owner, answer, localAnswer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/assets/auto-fill-single-type.html
const auto_fill_single_type_namespaceObject = "<label data-bc-add-item data-sys-auto-complete=\"\"></label>\r\n\r\n<button data-bc-btn=\"add\" data-sys-plus=\"\" data-bc-auto-complete-single-type-btn><svg width=\"12\" height=\"12\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path data-sys-plus-icon=\"\" d=\"M8.4 0H5.6V5.6H0V8.4H5.6V14H8.4V8.4H14V5.6H8.4V0Z\" fill=\"#004B85\"/></svg></button>\r\n";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/AutoFillSingleType.ts




class AutoFillSingleType extends AutoFillType {
    constructor(part, owner, answer) {
        super(part, auto_fill_single_type_namespaceObject, owner, answer);
        this._btn = this.element.querySelector("[data-bc-btn]");
        if (owner.options.displayMode != "view" && !owner.question.disabled) {
            this._btn.addEventListener("click", this.onShowPopUpBtnClick.bind(this));
        }
        else {
            this._btn.remove();
        }
        const value = answer === null || answer === void 0 ? void 0 : answer.values[0];
        if (value) {
            this.getValueAsync(value.value).then((fixValue) => this.setValue(fixValue));
        }
    }
    onShowPopUpBtnClick(e) {
        e.preventDefault();
        this.getQueryStringParamsAsync()
            .then((x) => {
            if (this._btn.getAttribute("data-bc-btn") === "add") {
                const popup = new SearchPopup(this.part.link, this.setValue.bind(this), false, x);
            }
            else {
                this.selectedId = null;
                this.element.querySelector("label").innerHTML = "";
                this._btn.setAttribute("data-bc-btn", "add");
                this._btn.removeAttribute("data-sys-minus");
                this._btn.setAttribute("data-sys-plus", "");
                this._btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-sys-plus-icon="" d="M8.4 0H5.6V5.6H0V8.4H5.6V14H8.4V8.4H14V5.6H8.4V0Z" fill="#004B85"/></svg>`;
            }
        })
            .catch((error) => {
            //Has empty required part!
        });
    }
    setValue(value) {
        const changed = super.setValue(value);
        if (changed) {
            this._btn.setAttribute("data-bc-btn", "remove");
            this._btn.removeAttribute("data-sys-plus");
            this._btn.setAttribute("data-sys-minus", "");
            this._btn.innerHTML = `<svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-sys-minus-icon="" d="M2.04028 0.0603034L0.0603845 2.0402L4.02018 6L0.0603845 9.9598L2.04028 11.9397L6.00008 7.9799L9.95988 11.9397L11.9398 9.9598L7.97998 6L11.9398 2.0402L9.95988 0.0603037L6.00008 4.0201L2.04028 0.0603034Z" fill="#B40020"></path></svg>`;
        }
        return changed;
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/auto-complete/AutoCompleteSingleType.ts

class AutoCompleteSingleType extends AutoFillSingleType {
    constructor(part, owner, answer) {
        super(part, owner, answer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/reference/ReferenceMultiType.ts

class ReferenceMultiType extends AutoFillMultiType {
    constructor(part, owner, answer, localAnswer) {
        super(part, owner, answer, localAnswer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/auto-fill/reference/ReferenceSingleType.ts

class ReferenceSingleType extends AutoFillSingleType {
    constructor(part, owner, answer) {
        super(part, owner, answer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/check-list/assets/layout.html
const check_list_assets_layout_namespaceObject = "<div data-bc-part-checkbox data-sys-part-checkbox=\"\">\r\n    <div data-bc-items></div>\r\n</div>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/check-list/assets/item-layout.html
const item_layout_namespaceObject = "<div data-sys-text=\"\">\r\n  <input type=\"@type\" value=\"@value\" @checked @disabled />\r\n  @title\r\n  <div data-bc-sm-sub-schema-container></div>\r\n</div>";
// EXTERNAL MODULE: ./src/ComponentCollection.ts + 2 modules
var ComponentCollection = __webpack_require__(6695);
// EXTERNAL MODULE: ./src/data/Source.ts
var Source = __webpack_require__(2164);
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/ListBaseType.ts
var ListBaseType_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class ListBaseType extends EditableQuestionPart {
    constructor(part, layout, owner, answer) {
        super(part, layout, owner, answer);
        this.hasSubSchema = false;
        if (this.part.fixValues) {
            this.fillUI(this.part.fixValues);
        }
        else {
            this.loadFromServerAsync();
        }
    }
    fillUI(values) {
        this.hasSubSchema = values.some((x) => x.schema);
    }
    loadFromServerAsync() {
        return ListBaseType_awaiter(this, void 0, void 0, function* () {
            const queryStringParams = yield this.owner.options.getQueryStringParamsAsync();
            const data = Object.assign({ prpId: this.owner.question.prpId, part: this.part.part }, queryStringParams);
            const url = Util/* default */.A.formatString(this.part.link, data);
            const result = yield Util/* default */.A.getDataAsync(url);
            this.fillUI(result);
        });
    }
    getSubSchemaValueAsync(id) {
        return ListBaseType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (this._subSchemaCollections) {
                const item = this._subSchemaCollections[id];
                if (item) {
                    const array = item.component.GetCommandListByCore("schema");
                    if ((array === null || array === void 0 ? void 0 : array.length) == 1) {
                        const schemaComponent = array[0];
                        retVal = yield schemaComponent.getAnswersAsync(false);
                    }
                }
            }
            return retVal;
        });
    }
    allSubSchemaIsOkAsync() {
        return ListBaseType_awaiter(this, void 0, void 0, function* () {
            try {
                let retVal = true;
                if (this.hasSubSchema && this._subSchemaCollections) {
                    const checkListTask = Object.getOwnPropertyNames(this._subSchemaCollections).map((id) => ListBaseType_awaiter(this, void 0, void 0, function* () {
                        const item = this._subSchemaCollections[id];
                        let isOk = true;
                        try {
                            const array = item.component.GetCommandListByCore("schema");
                            if ((array === null || array === void 0 ? void 0 : array.length) == 1) {
                                const schemaComponent = array[0];
                                yield schemaComponent.getAnswersAsync(true);
                            }
                        }
                        catch (e) {
                            isOk = false;
                        }
                        return isOk;
                    }));
                    const checkList = yield Promise.all(checkListTask);
                    retVal = checkList.every((x) => x);
                }
                return retVal;
            }
            catch (ex) {
                console.error("error in validate subSchema", ex);
            }
        });
    }
    unloadSchemaAsync(id) {
        let disposeTask;
        const item = this._subSchemaCollections[id];
        if (item) {
            item.element.innerHTML = "";
            disposeTask = item.component.disposeAsync();
            delete this._subSchemaCollections[id];
        }
        else {
            disposeTask = Promise.resolve();
        }
        return disposeTask;
    }
    loadSubSchemaAsync(id, schemaId, paramUrl, schemaVersion, lid, container, answer) {
        var _a;
        return ListBaseType_awaiter(this, void 0, void 0, function* () {
            if (!this._subSchemaCollections) {
                this._subSchemaCollections = {};
            }
            const taskList = new Array();
            taskList.push(this.unloadSchemaAsync(id));
            const options = this.owner.options.subSchemaOptions;
            const displayMode = answer ? options.displayMode : "new";
            if (schemaId) {
                const sourceId = "sub-schema." + $bc.util.getRandomName();
                const str = `<Basis 
        core="schema" 
        run="atclient" 
        schemaUrl="${(_a = options.schemaUrl) !== null && _a !== void 0 ? _a : ""}"
        datamembername="${sourceId}"
        ${paramUrl ? `paramUrl="${paramUrl}"` : ""}
        ${answer ? "" : `id="${schemaId}`}
        ${schemaVersion ? `version="${schemaVersion}"` : ""}
        ${lid ? `lid="${lid}"` : ""}
        ${displayMode ? `displayMode="${displayMode}"` : ""}
        ${options.callback ? `callback="${options.callback}"` : ""}
        ${options.schemaCallback
                    ? `schemaCallback="${options.schemaCallback}"`
                    : ""}
        ${options.cell ? `cell="${options.cell}"` : ""}
        >
        </Basis>`;
                container.innerHTML = str;
                const newCollection = this.owner.options.dc.resolve(ComponentCollection/* default */.A);
                this._subSchemaCollections[id] = {
                    component: newCollection,
                    element: container,
                };
                const processTask = newCollection.processNodesAsync(Array.from(container.childNodes));
                taskList.push(processTask);
                if (answer) {
                    processTask.then(() => ListBaseType_awaiter(this, void 0, void 0, function* () {
                        const array = newCollection.GetCommandListByCore("schema");
                        if ((array === null || array === void 0 ? void 0 : array.length) == 1) {
                            const schemaComponent = array[0];
                            const source = new Source/* default */.A(sourceId, answer);
                            yield schemaComponent.runAsync(source);
                        }
                        else {
                            console.error("No schema component found for sub-schema");
                        }
                    }));
                }
            }
            else {
                container.innerHTML = "";
            }
            yield Promise.all(taskList);
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/SelectListType.ts
var SelectListType_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class SelectListType extends ListBaseType {
    constructor(part, layout, owner, answer) {
        super(part, layout, owner, answer);
    }
    getSelectedItems() {
        return Array.from(this.element.querySelectorAll("input"))
            .map((x) => (x.checked ? parseInt(x.value) : null))
            .filter((x) => x);
    }
    getAllSet() {
        return SelectListType_awaiter(this, void 0, void 0, function* () {
            const selectedItems = Array.from(this.element.querySelectorAll("input"))
                .map((x) => (x.checked ? parseInt(x.value) : null))
                .filter((x) => x);
            return yield Promise.all(selectedItems.map((x) => SelectListType_awaiter(this, void 0, void 0, function* () {
                const answer = this.hasSubSchema
                    ? yield this.getSubSchemaValueAsync(x.toString())
                    : null;
                return Object.assign({ value: x }, (answer && { answer: answer }));
            })));
        });
    }
    getChangeSet() {
        return SelectListType_awaiter(this, void 0, void 0, function* () {
            let addedItems = null;
            let deletedItems = null;
            let subEditedItems = null;
            const selectedItems = Array.from(this.element.querySelectorAll("input"))
                .map((x) => (x.checked ? parseInt(x.value) : null))
                .filter((x) => x);
            if (this.answer) {
                deletedItems = this.answer.values
                    .filter((x) => selectedItems.indexOf(x.value) == -1)
                    .map((x) => {
                    return { id: x.id, value: x.value };
                });
                addedItems = yield Promise.all(selectedItems
                    .filter((x) => !this.answer.values.find((y) => y.value == x))
                    .map((x) => SelectListType_awaiter(this, void 0, void 0, function* () {
                    const answer = this.hasSubSchema
                        ? yield this.getSubSchemaValueAsync(x.toString())
                        : null;
                    return Object.assign({ value: x }, (answer && { answer: answer }));
                })));
                subEditedItems = (yield Promise.all(selectedItems
                    .filter((x) => this.answer.values.find((y) => y.value == x))
                    .map((x) => SelectListType_awaiter(this, void 0, void 0, function* () {
                    return {
                        value: x,
                        answer: this.hasSubSchema
                            ? yield this.getSubSchemaValueAsync(x.toString())
                            : null,
                    };
                })))).filter((x) => x.answer);
            }
            else {
                addedItems = yield Promise.all(selectedItems.map((x) => SelectListType_awaiter(this, void 0, void 0, function* () {
                    const answer = this.hasSubSchema
                        ? yield this.getSubSchemaValueAsync(x.toString())
                        : null;
                    return Object.assign({ value: x }, (answer && { answer: answer }));
                })));
            }
            return [
                (addedItems === null || addedItems === void 0 ? void 0 : addedItems.length) > 0 ? addedItems : null,
                (deletedItems === null || deletedItems === void 0 ? void 0 : deletedItems.length) > 0 ? deletedItems : null,
                (subEditedItems === null || subEditedItems === void 0 ? void 0 : subEditedItems.length) > 0 ? subEditedItems : null,
            ];
        });
    }
    fillUI(values) {
        super.fillUI(values);
        this.rndName = "radio" + (++SelectListType._seedId).toString();
        values.forEach((item) => {
            var _a, _b;
            const answerItem = (_a = this.answer) === null || _a === void 0 ? void 0 : _a.values.find((x) => x.value == item.id);
            const checked = this.answer
                ? answerItem !== null && answerItem !== void 0 ? answerItem : false
                : (_b = item.selected) !== null && _b !== void 0 ? _b : false;
            const newTemplate = this.itemLayout
                .replace("@type", this.controlType)
                .replace("@title", item.value)
                .replace("@value", item.id.toString())
                .replace("@name", this.controlType == "radio" ? this.rndName : "")
                .replace("@checked", checked ? "checked" : "")
                .replace("@disabled", this.isDisabled ? "disabled" : "")
                .replace("@disabled", this.isReadonly ? "readonly" : "");
            const template = Util/* default */.A.parse(newTemplate).querySelector("div");
            this.element.querySelector("[data-bc-items]").appendChild(template);
            if (this.hasSubSchema) {
                const element = template.querySelector("input");
                if (checked) {
                    this.onValueItemClick(item, element, answerItem === null || answerItem === void 0 ? void 0 : answerItem.answer);
                }
                element.addEventListener("change", (e) => {
                    e.preventDefault();
                    this.onValueItemClick(item, e.target, answerItem === null || answerItem === void 0 ? void 0 : answerItem.answer);
                });
            }
        });
    }
    getValidationErrorsAsync() {
        const selectedItems = Array.from(this.element.querySelectorAll("input"))
            .map((x) => (x.checked ? parseInt(x.value) : null))
            .filter((x) => x);
        return Promise.resolve(this.ValidateValue(selectedItems));
    }
    getAddedAsync() {
        return SelectListType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            const [addedItems, _] = yield this.getChangeSet();
            if (addedItems) {
                retVal = {
                    part: this.part.part,
                    values: addedItems,
                };
            }
            return retVal;
        });
    }
    getEditedAsync() {
        return SelectListType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (this.hasSubSchema) {
                const [_, __, subEditedItems] = yield this.getChangeSet();
                if (subEditedItems) {
                    retVal = {
                        part: this.part.part,
                        values: subEditedItems,
                    };
                }
            }
            return retVal;
        });
    }
    getDeletedAsync() {
        return SelectListType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            const [_, deletedItems, __] = yield this.getChangeSet();
            if (deletedItems) {
                retVal = {
                    part: this.part.part,
                    values: deletedItems,
                };
            }
            return retVal;
        });
    }
    getValuesAsync() {
        return SelectListType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            const all = yield this.getAllSet();
            if (all) {
                retVal = {
                    part: this.part.part,
                    values: all,
                };
            }
            return retVal;
        });
    }
}
SelectListType._seedId = 0;

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/check-list/CheckListType.ts



class CheckListType extends SelectListType {
    get controlType() {
        return "checkbox";
    }
    get itemLayout() {
        return item_layout_namespaceObject;
    }
    constructor(part, owner, answer) {
        super(part, check_list_assets_layout_namespaceObject, owner, answer);
    }
    onValueItemClick(value, element, answer) {
        if (value.schema) {
            this.loadSubSchemaAsync(value.id, element.checked ? value.schema.schemaId : null, value.schema.paramUrl, value.schema.schemaVersion, value.schema.lid, element.nextElementSibling, answer);
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/radio/assets/layout.html
const radio_assets_layout_namespaceObject = "<div data-bc-part-radio data-sys-part-checkbox=\"\">\r\n    <div data-bc-items></div>\r\n    <div data-bc-sm-sub-schema-container></div>\r\n</div>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/radio/assets/item-layout.html
const radio_assets_item_layout_namespaceObject = "<div data-sys-text=\"\">\r\n  <input type=\"radio\" value=\"@value\" name=\"@name\" @checked @disabled />\r\n  @title\r\n</div>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/radio/RadioListType.ts



class RadioListType extends SelectListType {
    get controlType() {
        return "radio";
    }
    get itemLayout() {
        return radio_assets_item_layout_namespaceObject;
    }
    constructor(part, owner, answer) {
        super(part, radio_assets_layout_namespaceObject, owner, answer);
    }
    onValueItemClick(value, element) {
        var _a, _b, _c, _d;
        this.loadSubSchemaAsync(value.id, element.checked ? (_a = value.schema) === null || _a === void 0 ? void 0 : _a.schemaId : null, (_b = value.schema) === null || _b === void 0 ? void 0 : _b.paramUrl, (_c = value.schema) === null || _c === void 0 ? void 0 : _c.schemaVersion, (_d = value.schema) === null || _d === void 0 ? void 0 : _d.lid, element.parentElement.parentElement.nextElementSibling);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select/assets/layout.html
const select_assets_layout_namespaceObject = "<select data-sys-select-option=\"\"></select>\r\n<div data-bc-sm-sub-schema-container></div>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select/SelectType.ts
var SelectType_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class SelectType extends ListBaseType {
    constructor(part, owner, answer) {
        super(part, select_assets_layout_namespaceObject, owner, answer);
        this._select = this.element.querySelector("select");
        if (this.isDisabled) {
            this._select.setAttribute("disabled", "");
        }
        else if (this.isReadonly) {
            this._select.setAttribute("readonly", "");
        }
        this._select.addEventListener("change", (e) => {
            var _a;
            e.preventDefault();
            if (this.hasSubSchema) {
                const item = this._select.options[this._select.selectedIndex];
                const value = (_a = this.answer) === null || _a === void 0 ? void 0 : _a.values[0];
                const relatedSubSchemaAnswer = value && item.value == value.value ? value.answer : null;
                this.onItemSelected(item, relatedSubSchemaAnswer);
            }
        });
    }
    onItemSelected(item, answer) {
        if (this.hasSubSchema) {
            const schemaId = item.getAttribute("data-schema-id");
            const lid = item.getAttribute("data-lid");
            const schemaVersion = item.getAttribute("data-schema-version");
            const paramUrl = item.getAttribute("data-param-url");
            if (schemaId) {
                this.preSelectedValue = item.value;
                this.loadSubSchemaAsync(item.value, schemaId, paramUrl, schemaVersion, lid, item.parentElement.nextElementSibling, answer);
            }
            else if (this.preSelectedValue) {
                this.unloadSchemaAsync(this.preSelectedValue);
            }
        }
    }
    fillUI(values) {
        var _a;
        super.fillUI(values);
        const select = this.element.querySelector("select");
        const value = (_a = this.answer) === null || _a === void 0 ? void 0 : _a.values[0];
        values.forEach((item) => {
            var _a, _b, _c, _d, _e;
            const option = document.createElement("option");
            option.value = item.id.toString();
            option.text = item.value;
            if (item.schema) {
                option.setAttribute("data-schema-id", (_a = item.schema.schemaId) !== null && _a !== void 0 ? _a : "");
                option.setAttribute("data-lid", (_c = (_b = item.schema.lid) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : "");
                option.setAttribute("data-param-url", item.schema.paramUrl);
                option.setAttribute("data-schema-version", (_d = item.schema.schemaVersion) !== null && _d !== void 0 ? _d : "");
            }
            option.selected = value ? value.value == item.id : (_e = item.selected) !== null && _e !== void 0 ? _e : false;
            select.options.add(option);
            if (option.selected) {
                this.onItemSelected(option, value === null || value === void 0 ? void 0 : value.answer);
            }
        });
    }
    getValidationErrorsAsync() {
        const _super = Object.create(null, {
            allSubSchemaIsOkAsync: { get: () => super.allSubSchemaIsOkAsync }
        });
        return SelectType_awaiter(this, void 0, void 0, function* () {
            const value = this._select.options[this._select.selectedIndex].value;
            const subSchemaIsOk = yield _super.allSubSchemaIsOkAsync.call(this);
            const retVal = this.ValidateValue(value === "0" ? null : value, !subSchemaIsOk);
            return retVal;
        });
    }
    getAddedAsync() {
        return SelectType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (!this.answer) {
                const newValue = this._select.options[this._select.selectedIndex].value;
                if (newValue !== "0") {
                    const subSchemaValue = yield this.getSubSchemaValueAsync(newValue);
                    retVal = {
                        part: this.part.part,
                        values: [
                            Object.assign({ value: newValue }, (subSchemaValue && { answer: subSchemaValue })),
                        ],
                    };
                }
            }
            return retVal;
        });
    }
    getEditedAsync() {
        return SelectType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (this.answer) {
                const newValue = this._select.options[this._select.selectedIndex].value;
                const changed = newValue != this.answer.values[0].value;
                if (changed && newValue != "0") {
                    const subSchemaValue = yield this.getSubSchemaValueAsync(newValue);
                    retVal = {
                        part: this.part.part,
                        values: [
                            Object.assign({ id: this.answer.values[0].id, value: newValue }, (subSchemaValue && { answer: subSchemaValue })),
                        ],
                    };
                }
                else if (this.hasSubSchema) {
                    const subSchemaValue = yield this.getSubSchemaValueAsync(newValue);
                    if (subSchemaValue)
                        retVal = {
                            part: this.part.part,
                            values: [
                                {
                                    id: this.answer.values[0].id,
                                    answer: subSchemaValue,
                                },
                            ],
                        };
                }
            }
            return retVal;
        });
    }
    getDeletedAsync() {
        let retVal = null;
        if (this.answer) {
            const newValue = this._select.options[this._select.selectedIndex].value;
            const changed = newValue != this.answer.values[0].value;
            if (changed && newValue == "0") {
                retVal = {
                    part: this.part.part,
                    values: [
                        {
                            id: this.answer.values[0].id,
                            value: newValue,
                        },
                    ],
                };
            }
        }
        return Promise.resolve(retVal);
    }
    getValuesAsync() {
        return SelectType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            const newValue = this._select.options[this._select.selectedIndex].value;
            if (newValue !== "0") {
                const subSchemaValue = yield this.getSubSchemaValueAsync(newValue);
                retVal = {
                    part: this.part.part,
                    values: [
                        Object.assign({ value: newValue }, (subSchemaValue && { answer: subSchemaValue })),
                    ],
                };
            }
            return retVal;
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text-area/assets/layout.html
const text_area_assets_layout_namespaceObject = "<textarea data-bc-text-input=\"\" data-sys-textarea=\"\"></textarea>\r\n";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text-area/TextBaseType.ts

class TextBaseType extends EditableQuestionPart {
    constructor(part, partLayout, owner, answer) {
        super(part, partLayout, owner, answer);
        this.input = this.element.querySelector("[data-bc-text-input]");
        if (this.isDisabled) {
            this.input.setAttribute("disabled", "");
        }
        else if (this.isReadonly) {
            this.input.setAttribute("readonly", "");
        }
        if (answer) {
            this.input.value = answer.values[0].value;
        }
    }
    getValidationErrorsAsync() {
        return Promise.resolve(this.ValidateValue(this.input.value));
    }
    getAddedAsync() {
        let retVal = null;
        if (!this.answer) {
            if (this.input.value.length > 0) {
                retVal = {
                    part: this.part.part,
                    values: [
                        {
                            value: this.input.value,
                        },
                    ],
                };
            }
        }
        return Promise.resolve(retVal);
    }
    getEditedAsync() {
        let retVal = null;
        if (this.answer) {
            const changed = this.input.value != this.answer.values[0].value;
            if (changed && this.input.value.length > 0) {
                retVal = {
                    part: this.part.part,
                    values: [
                        {
                            id: this.answer.values[0].id,
                            value: this.input.value,
                        },
                    ],
                };
            }
        }
        return Promise.resolve(retVal);
    }
    getDeletedAsync() {
        let retVal = null;
        if (this.answer) {
            const changed = this.input.value != this.answer.values[0].value;
            if (changed && this.input.value.length == 0) {
                retVal = {
                    part: this.part.part,
                    values: [
                        {
                            id: this.answer.values[0].id,
                            value: this.input.value,
                        },
                    ],
                };
            }
        }
        return Promise.resolve(retVal);
    }
    getValuesAsync() {
        let retVal = null;
        if (this.input.value.length > 0) {
            retVal = {
                part: this.part.part,
                values: [
                    {
                        value: this.input.value,
                    },
                ],
            };
        }
        return Promise.resolve(retVal);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text-area/TextAriaType.ts


class TextAriaType extends TextBaseType {
    constructor(part, owner, answer) {
        super(part, text_area_assets_layout_namespaceObject, owner, answer);
        if (answer) {
            this.input.value = answer.values[0].value;
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text/assets/text-layout.html
const text_layout_namespaceObject = "<input type=\"text\" data-bc-text-input=\"\" data-sys-input-text=\"\" />";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text/TextType.ts


class TextType extends TextBaseType {
    constructor(part, owner, answer) {
        super(part, text_layout_namespaceObject, owner, answer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/upload/ExtensionList.ts
const ExtensionList = {
    // "image/jpeg": null,
    // "image/png": null,
    "text/plain": "https://basispanel.ir/asset/component/filemanager/images/file-txt-64.png",
    "application/json": "https://basispanel.ir/asset/component/filemanager/images/file-json-64.png",
    "application/x-rar-compressed": "https://basispanel.ir/asset/component/filemanager/images/file-rar-64.png",
    "application/zip": "https://basispanel.ir/asset/component/filemanager/images/file-zip-64.png",
    "application/x-zip-compressed": "https://basispanel.ir/asset/component/filemanager/images/file-zip-64.png",
    "application/mspowerpoint": "https://basispanel.ir/asset/component/filemanager/images/file-ppt-64.png",
    "application/powerpoint": "https://basispanel.ir/asset/component/filemanager/images/file-ppt-64.png",
    "application/vnd.ms-powerpoint": "https://basispanel.ir/asset/component/filemanager/images/file-ppt-64.png",
    "application/x-mspowerpoint": "https://basispanel.ir/asset/component/filemanager/images/file-ppt-64.png",
    "application/x-shockwave-flash": "https://basispanel.ir/asset/component/filemanager/images/file-fla-64.png",
    "text/html": "https://basispanel.ir/asset/component/filemanager/images/file-html-64.png",
    "application/msword": "https://basispanel.ir/asset/component/filemanager/images/file-doc-64.png",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "https://basispanel.ir/asset/component/filemanager/images/file-doc-64.png",
    "application/pdf": "https://basispanel.ir/asset/component/filemanager/images/file-pdf-64.png",
    "application/octet-stream": "https://basispanel.ir/asset/component/filemanager/images/file-pdf-64.png",
    "application/excel": "https://basispanel.ir/asset/component/filemanager/images/file-xls-64.png",
    "application/vnd.ms-excel": "https://basispanel.ir/asset/component/filemanager/images/file-xls-64.png",
    "application/x-excel": "https://basispanel.ir/asset/component/filemanager/images/file-xls-64.png",
    "application/x-msexcel": "https://basispanel.ir/asset/component/filemanager/images/file-xls-64.png",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "https://basispanel.ir/asset/component/filemanager/images/file-xls-64.png",
    "audio/mpeg3": "https://basispanel.ir/asset/component/filemanager/images/file-audio-64.png",
    "audio/x-mpeg-3": "https://basispanel.ir/asset/component/filemanager/images/file-audio-64.png",
    "audio/mp3": "https://basispanel.ir/asset/component/filemanager/images/file-audio-64.png",
    "audio/mpeg": "https://basispanel.ir/asset/component/filemanager/images/file-audio-64.png",
    "text/xml": "https://basispanel.ir/asset/component/filemanager/images/file-xml-64.png",
    "Application/xml": "https://basispanel.ir/asset/component/filemanager/images/file-xml-64.png",
    "application/atom+xml": "https://basispanel.ir/asset/component/filemanager/images/file-xml-64.png",
    "application/rss+xml": "https://basispanel.ir/asset/component/filemanager/images/file-xml-64.png",
    "application/font-woff2": "https://basispanel.ir/asset/component/filemanager/images/file-woff-64.png",
    "application/font-otf": "https://basispanel.ir/asset/component/filemanager/images/file-otf-64.png",
    "application/x-font-otf": "https://basispanel.ir/asset/component/filemanager/images/file-otf-64.png",
    "font/otf": "https://basispanel.ir/asset/component/filemanager/images/file-otf-64.png",
    "application/font-woff": "https://basispanel.ir/asset/component/filemanager/images/file-woff-64.png",
    "application/x-font-woff": "https://basispanel.ir/asset/component/filemanager/images/file-woff-64.png",
    "application/x-font-ttf": "https://basispanel.ir/asset/component/filemanager/images/file-ttf-64.png",
    "font/ttf": "https://basispanel.ir/asset/component/filemanager/images/file-ttf-64.png",
    "application/x-font-truetype": "https://basispanel.ir/asset/component/filemanager/images/file-ttf-64.png",
    "application/vnd.ms-fontobject": "https://basispanel.ir/asset/component/filemanager/images/file-eot-64.png",
    "font/opentype": "https://basispanel.ir/asset/component/filemanager/images/file-opentype-64.png",
    "application/x-font-opentype": "https://basispanel.ir/asset/component/filemanager/images/file-opentype-64.png",
    "image/webp": "https://basispanel.ir/asset/component/filemanager/images/file-webp-64.png",
    "image/x-win-bitmap": "https://basispanel.ir/asset/component/filemanager/images/file-bitmap-64.png",
    "image/ico": "https://basispanel.ir/asset/component/filemanager/images/file-ico-64.png",
    "image/x-icon": "https://basispanel.ir/asset/component/filemanager/images/file-ico-64.png",
    "application/ico": "https://basispanel.ir/asset/component/filemanager/images/file-ico-64.png",
    "application/x-ico": "https://basispanel.ir/asset/component/filemanager/images/file-ico-64.png",
    "image/svg+xml": "https://basispanel.ir/asset/component/filemanager/images/file-svg-64.png",
    "image/gif": "https://basispanel.ir/asset/component/filemanager/images/file-gif-64.png",
    "image/png": "https://basispanel.ir/asset/component/filemanager/images/file-png-64.png",
    "image/jpg": "https://basispanel.ir/asset/component/filemanager/images/file-jpg-64.png",
    "image/jpeg": "https://basispanel.ir/asset/component/filemanager/images/file-jpg-64.png",
    "application/x-troff-msvideo": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/avi": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/msvideo": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/x-msvideo": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/quicktime": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/mpeg": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/x-mpeg": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/x-ms-asf": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/mp4": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/x-flv": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "video/3gp": "https://basispanel.ir/asset/component/filemanager/images/file-video-64.png",
    "text/javascript": "https://basispanel.ir/asset/component/filemanager/images/file-js-64.png",
    "application/x-javascript": "https://basispanel.ir/asset/component/filemanager/images/file-js-64.png",
    "application/javascript": "https://basispanel.ir/asset/component/filemanager/images/file-js-64.png",
    "text/css": "https://basispanel.ir/asset/component/filemanager/images/file-css-64.png",
    "???": "https://basispanel.ir/asset/component/filemanager/images/file-unknown-64.png",
};
/* harmony default export */ const upload_ExtensionList = (ExtensionList);

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/upload/assets/layout.html
const upload_assets_layout_namespaceObject = "<input type=\"file\" data-bc-file-input=\"\" data-sys-input-text=\"\" />\r\n<div data-bc-upload-file-list>\r\n</div>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/upload/assets/image-layout.html
const image_layout_namespaceObject = "<div data-bc-upload-file-item>\r\n    <span data-bc-item-btn-delete><svg width=\"15\" height=\"15\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path data-sys-text-delete=\"\" d=\"M7.10283 4.0724L6.00033 5.1749L4.89783 4.0724C4.67033 3.8449 4.30283 3.8449 4.07533 4.0724C3.84783 4.2999 3.84783 4.6674 4.07533 4.8949L5.17783 5.9974L4.07533 7.0999C3.84783 7.3274 3.84783 7.6949 4.07533 7.9224C4.30283 8.1499 4.67033 8.1499 4.89783 7.9224L6.00033 6.8199L7.10283 7.9224C7.33033 8.1499 7.69783 8.1499 7.92533 7.9224C8.15283 7.6949 8.15283 7.3274 7.92533 7.0999L6.82283 5.9974L7.92533 4.8949C8.15283 4.6674 8.15283 4.2999 7.92533 4.0724C7.69783 3.85073 7.32449 3.85073 7.10283 4.0724ZM6.00033 0.164062C2.77449 0.164062 0.166992 2.77156 0.166992 5.9974C0.166992 9.22323 2.77449 11.8307 6.00033 11.8307C9.22616 11.8307 11.8337 9.22323 11.8337 5.9974C11.8337 2.77156 9.22616 0.164062 6.00033 0.164062ZM6.00033 10.6641C3.42783 10.6641 1.33366 8.5699 1.33366 5.9974C1.33366 3.4249 3.42783 1.33073 6.00033 1.33073C8.57283 1.33073 10.667 3.4249 10.667 5.9974C10.667 8.5699 8.57283 10.6641 6.00033 10.6641Z\" fill=\"#B40020\"/></svg></span><a data-bc-item-download href=\"@url\" download=\"@downloadName\"><div data-bc-item-icon-frame><img src=\"@source\" data-bc-item-icon></div><span data-bc-item-title data-sys-text=\"\">@name</span></a>\r\n</div>";
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/renderable/schema/part-control/upload/assets/style.css
var upload_assets_style = __webpack_require__(9139);
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/upload/assets/style.css

      
      
      
      
      
      
      
      
      

var assets_style_options = {};

assets_style_options.styleTagTransform = (styleTagTransform_default());
assets_style_options.setAttributes = (setAttributesWithoutAttributes_default());

      assets_style_options.insert = insertBySelector_default().bind(null, "head");
    
assets_style_options.domAPI = (styleDomAPI_default());
assets_style_options.insertStyleElement = (insertStyleElement_default());

var assets_style_update = injectStylesIntoStyleTag_default()(upload_assets_style/* default */.A, assets_style_options);




       /* harmony default export */ const part_control_upload_assets_style = (upload_assets_style/* default */.A && upload_assets_style/* default */.A.locals ? upload_assets_style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/upload/UploadType.ts
var UploadType_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class UploadType extends EditableQuestionPart {
    constructor(part, owner, answer) {
        var _a;
        super(part, upload_assets_layout_namespaceObject, owner, answer);
        this.multiple = false;
        this.input = this.element.querySelector("[data-bc-file-input]");
        this.files = {};
        this.filesPath = (_a = owner.options.filesPath) !== null && _a !== void 0 ? _a : "";
        this.input.addEventListener("change", (e) => {
            e.preventDefault();
            this.addFilesFromClient(this.input);
        });
        if (this.part.multiple) {
            this.input.setAttribute("multiple", "");
        }
        else {
            this.input.removeAttribute("multiple");
        }
        if (answer) {
            this.setValue(answer.values);
        }
    }
    addFilesFromClient(input) {
        const files = Array.from(input.files);
        files.forEach((file) => {
            const fileInfo = {
                mustDelete: false,
                name: file.name,
                url: null,
                type: file.type,
                size: file.size,
                data: file,
            };
            this.addFileToUI(fileInfo);
        });
        input.value = "";
    }
    addFileToUI(file) {
        var _a;
        const container = this.element.querySelector("[data-bc-upload-file-list]");
        let fileUrl = `${this.filesPath}${file.url}`;
        const template = image_layout_namespaceObject
            .replace("@name", file.name)
            .replace("@downloadName", file.name)
            .replace("@url", fileUrl);
        const fileElement = $bc.util.toNode(template).childNodes[0];
        const imageElement = fileElement.querySelector("[data-bc-item-icon]");
        const localId = $bc.util.getRandomName("uploader_");
        if (!this.part.multiple) {
            this.files = {};
            container.innerHTML = "";
        }
        this.files[localId] = file;
        if (file.image && file.image != "") {
            imageElement.src = `/${file.image}`;
        }
        else {
            imageElement.src =
                (_a = upload_ExtensionList[file.type]) !== null && _a !== void 0 ? _a : upload_ExtensionList["???"];
        }
        fileElement
            .querySelector("[data-bc-item-btn-delete]")
            .addEventListener("click", (e) => {
            e.preventDefault();
            if (file.id) {
                file.mustDelete = true;
            }
            else {
                delete this.files[localId];
            }
            fileElement.remove();
        });
        container.append(fileElement);
    }
    setValue(values) {
        if (values) {
            values
                .map((x) => {
                var _a, _b, _c;
                const retVal = {
                    id: x.id,
                    name: x.value.name,
                    type: x.value.type,
                    size: (_a = x.value.size) !== null && _a !== void 0 ? _a : 0,
                    url: (_b = x.value.url) !== null && _b !== void 0 ? _b : null,
                    image: (_c = x.value.image) !== null && _c !== void 0 ? _c : null,
                    data: null,
                    mustDelete: false,
                };
                return retVal;
            })
                .forEach((image) => this.addFileToUI(image));
        }
    }
    getValidationErrorsAsync() {
        const filesItems = Object.getOwnPropertyNames(this.files)
            .map((x) => this.files[x])
            .filter((x) => !x.mustDelete)
            .map((x) => {
            return { name: x.name, size: x.size, type: x.type };
        });
        return Promise.resolve(this.ValidateValue(filesItems));
    }
    CreateFileValueAsync(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.data);
            reader.onload = () => resolve({
                content: reader.result,
                name: file.name,
                size: file.size,
                type: file.type,
            });
            reader.onerror = (error) => reject(error);
        });
    }
    getChangedAsync() {
        return UploadType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            const process = Object.getOwnPropertyNames(this.files)
                .map((x) => this.files[x])
                .filter((x) => x.data)
                .map((x) => this.CreateFileValueAsync(x));
            let result = null;
            result = yield Promise.all(process);
            const mustAdded = result.map((x) => {
                const retVal = {
                    value: x,
                };
                return retVal;
            });
            const newValues = mustAdded.length > 0 ? mustAdded : null;
            if (newValues) {
                retVal = {
                    part: this.part.part,
                    values: newValues,
                };
            }
            return retVal;
        });
    }
    getAddedAsync() {
        let retVal = null;
        if (!this.answer) {
            retVal = this.getChangedAsync();
        }
        return retVal;
    }
    getEditedAsync() {
        return UploadType_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (this.answer) {
                retVal = this.getChangedAsync();
            }
            return retVal;
        });
    }
    getDeletedAsync() {
        let retVal = null;
        if (this.answer) {
            const mustDelete = Object.getOwnPropertyNames(this.files)
                .map((x) => this.files[x])
                .filter((x) => x.mustDelete)
                .map((x) => {
                const retVal = {
                    id: x.id,
                    value: {
                        name: x.name,
                        type: x.type,
                    },
                };
                return retVal;
            });
            const deletedValues = mustDelete.length > 0 ? mustDelete : null;
            if (deletedValues) {
                retVal = {
                    part: this.part.part,
                    values: deletedValues,
                };
            }
        }
        return Promise.resolve(retVal);
    }
    getValuesAsync() {
        return this.getChangedAsync();
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/upload/BlobType.ts

class BlobType extends UploadType {
    constructor(part, owner, answer) {
        super(part, owner, answer);
    }
    CreateFileValueAsync(file) {
        return Promise.resolve({
            content: file.data,
            name: file.name,
            size: file.size,
            type: file.type,
            uploadToken: this.part.uploadToken,
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/unknown/assets/layout.html
const unknown_assets_layout_namespaceObject = "<label data-bc-part-ctl data-bc-schema-unknown-control>\r\n    Unknown-control - @type\r\n</label>";
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/renderable/schema/part-control/unknown/assets/style.css
var unknown_assets_style = __webpack_require__(6246);
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/unknown/assets/style.css

      
      
      
      
      
      
      
      
      

var unknown_assets_style_options = {};

unknown_assets_style_options.styleTagTransform = (styleTagTransform_default());
unknown_assets_style_options.setAttributes = (setAttributesWithoutAttributes_default());

      unknown_assets_style_options.insert = insertBySelector_default().bind(null, "head");
    
unknown_assets_style_options.domAPI = (styleDomAPI_default());
unknown_assets_style_options.insertStyleElement = (insertStyleElement_default());

var unknown_assets_style_update = injectStylesIntoStyleTag_default()(unknown_assets_style/* default */.A, unknown_assets_style_options);




       /* harmony default export */ const part_control_unknown_assets_style = (unknown_assets_style/* default */.A && unknown_assets_style/* default */.A.locals ? unknown_assets_style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/component/renderable/schema/question-part/ReadonlyQuestionPart.ts

class ReadonlyQuestionPart extends QuestionPart {
    constructor(part, layout, owner, answer) {
        super(part, layout, owner, answer);
    }
    getValidationErrorsAsync() {
        throw new Error("Method not supported.");
    }
    getAddedAsync() {
        throw new Error("Method not supported.");
    }
    getEditedAsync() {
        throw new Error("Method not supported.");
    }
    getDeletedAsync() {
        throw new Error("Method not supported.");
    }
    getValuesAsync() {
        throw new Error("Method not supported.");
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/unknown/UnknownType.ts



class UnknownType extends ReadonlyQuestionPart {
    constructor(part, owner, answer) {
        super(part, unknown_assets_layout_namespaceObject.replace("@type", part.viewType), owner, answer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/check-list/assets/readonly-item-layout.html
const readonly_item_layout_namespaceObject = "<div data-sys-text=\"\">\r\n  <input type=\"checkbox\" checked disabled />\r\n  @title\r\n</div>\r\n";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/ReadOnlyListBaseType.ts

class ReadOnlyListBaseType extends ListBaseType {
    constructor(part, layout, owner, answer) {
        super(part, layout, owner, answer);
    }
    getValidationErrorsAsync() {
        throw new Error("Method not supported.");
    }
    getAddedAsync() {
        throw new Error("Method not supported.");
    }
    getEditedAsync() {
        throw new Error("Method not supported.");
    }
    getDeletedAsync() {
        throw new Error("Method not supported.");
    }
    getValuesAsync() {
        throw new Error("Method not supported.");
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/ReadonlySelectListType.ts


class ReadonlySelectListType extends ReadOnlyListBaseType {
    constructor(part, layout, owner, answer) {
        super(part, layout, owner, answer);
    }
    fillUI(values) {
        values.forEach((item) => {
            var _a, _b;
            if ((_a = this.answer) === null || _a === void 0 ? void 0 : _a.values.find((x) => x.value == item.id)) {
                const newTemplate = this.itemLayout.replace("@title", (_b = item.value) !== null && _b !== void 0 ? _b : null);
                const template = Util/* default */.A.parse(newTemplate).querySelector("div");
                this.element.querySelector("div").appendChild(template);
                if (this.owner.options.callback) {
                    const param = {
                        element: this.element,
                        prpId: this.owner.question.prpId,
                        typeId: this.owner.question.typeId,
                        value: item,
                    };
                    this.owner.options.callback(param);
                }
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/check-list/ReadonlyCheckListType.ts



class ReadonlyCheckListType extends ReadonlySelectListType {
    get itemLayout() {
        return readonly_item_layout_namespaceObject;
    }
    constructor(part, owner, answer) {
        super(part, check_list_assets_layout_namespaceObject, owner, answer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/radio/assets/readonly-item-layout.html
const radio_assets_readonly_item_layout_namespaceObject = "<div data-sys-text=\"\">\r\n  <input type=\"radio\" checked disabled />\r\n  @title\r\n</div>\r\n";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select-list/radio/ReadonlyRadioType.ts



class ReadonlyRadioType extends ReadonlySelectListType {
    get itemLayout() {
        return radio_assets_readonly_item_layout_namespaceObject;
    }
    constructor(part, owner, answer) {
        super(part, radio_assets_layout_namespaceObject, owner, answer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/readonly-text/assets/text-layout.html
const readonly_text_assets_text_layout_namespaceObject = "<label data-bc-text-input=\"\" data-sys-input-text=\"\"></label>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/readonly-text/ReadOnlyText.ts


class ReadOnlyText extends ReadonlyQuestionPart {
    constructor(part, owner, answer) {
        var _a;
        super(part, readonly_text_assets_text_layout_namespaceObject, owner, answer);
        this._label = this.element.querySelector("[data-bc-text-input]");
        this._label.innerHTML = (_a = answer === null || answer === void 0 ? void 0 : answer.values[0].value) !== null && _a !== void 0 ? _a : null;
        if (this.owner.options.callback) {
            const param = {
                element: this.element,
                prpId: this.owner.question.prpId,
                typeId: this.owner.question.typeId,
                value: answer === null || answer === void 0 ? void 0 : answer.values[0],
            };
            this.owner.options.callback(param);
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/readonly-text-area/assets/layout.html
const readonly_text_area_assets_layout_namespaceObject = "<textarea data-bc-text-input=\"\" data-sys-textarea=\"\" data-sys-input-disabled=\"\" disabled></textarea>\r\n";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/readonly-text-area/ReadOnlyTextAriaType.ts


class ReadOnlyTextAriaType extends ReadonlyQuestionPart {
    constructor(part, owner, answer) {
        var _a;
        super(part, readonly_text_area_assets_layout_namespaceObject, owner, answer);
        this._label = this.element.querySelector("[data-bc-text-input]");
        this._label.innerHTML = (_a = answer === null || answer === void 0 ? void 0 : answer.values[0].value) !== null && _a !== void 0 ? _a : null;
        if (this.owner.options.callback) {
            const param = {
                element: this.element,
                prpId: this.owner.question.prpId,
                typeId: this.owner.question.typeId,
                value: answer === null || answer === void 0 ? void 0 : answer.values[0],
            };
            this.owner.options.callback(param);
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select/assets/readonly-layout.html
const readonly_layout_namespaceObject = "<label data-bc-text-input=\"\" data-sys-input-text=\"\"></label>\r\n";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/select/ReadOnlySelectType.ts


class ReadOnlySelectType extends ReadOnlyListBaseType {
    constructor(part, owner, answer) {
        super(part, readonly_layout_namespaceObject, owner, answer);
    }
    fillUI(values) {
        var _a, _b;
        const value = (_a = this.answer) === null || _a === void 0 ? void 0 : _a.values[0];
        const item = values.find((x) => x.id == value.value);
        this.element.querySelector("label").innerHTML = (_b = item === null || item === void 0 ? void 0 : item.value) !== null && _b !== void 0 ? _b : null;
        if (this.owner.options.callback) {
            const param = {
                element: this.element,
                prpId: this.owner.question.prpId,
                typeId: this.owner.question.typeId,
                value: item,
            };
            this.owner.options.callback(param);
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/lookup/assets/layout.html
const lookup_assets_layout_namespaceObject = "<div data-bc-fm-lookup>\r\n  <div>\r\n    <input type=\"text\" data-bc-text-input=\"\" data-sys-input-text=\"\" /><span data-bc-select-value data-sys-select-lookup=\"\"></span>\r\n  </div>\r\n  <ul data-bc-result=\"\" data-sys-search-result=\"\">\r\n  \r\n  </ul>\r\n</div>\r\n";
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/renderable/schema/part-control/lookup/assets/style.css
var lookup_assets_style = __webpack_require__(7728);
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/lookup/assets/style.css

      
      
      
      
      
      
      
      
      

var lookup_assets_style_options = {};

lookup_assets_style_options.styleTagTransform = (styleTagTransform_default());
lookup_assets_style_options.setAttributes = (setAttributesWithoutAttributes_default());

      lookup_assets_style_options.insert = insertBySelector_default().bind(null, "head");
    
lookup_assets_style_options.domAPI = (styleDomAPI_default());
lookup_assets_style_options.insertStyleElement = (insertStyleElement_default());

var lookup_assets_style_update = injectStylesIntoStyleTag_default()(lookup_assets_style/* default */.A, lookup_assets_style_options);




       /* harmony default export */ const part_control_lookup_assets_style = (lookup_assets_style/* default */.A && lookup_assets_style/* default */.A.locals ? lookup_assets_style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/lookup/Lookup.ts
var Lookup_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Lookup extends EditableQuestionPart {
    get title() {
        return this._input.value;
    }
    set title(value) {
        this._input.value = value;
    }
    get id() {
        return this.selectedId;
    }
    set id(value) {
        this.selectedId = value;
        this._valueInput.innerText = value ? value.toString() : "";
    }
    constructor(part, owner, answer) {
        super(part, lookup_assets_layout_namespaceObject, owner, answer);
        this._input = this.element.querySelector("[data-bc-text-input]");
        this._valueInput = this.element.querySelector("[data-bc-select-value]");
        if (this.isDisabled) {
            this._input.setAttribute("disabled", "");
        }
        else if (this.isReadonly) {
            this._input.setAttribute("readonly", "");
        }
        else {
            this._input.addEventListener("keyup", this.displaySuggestionListAsync.bind(this));
        }
        // this._input.addEventListener(
        //   "focusout",
        //   this.displaySuggestionListAsync.bind(this)
        // );
        const value = answer === null || answer === void 0 ? void 0 : answer.values[0];
        if (value) {
            this.getValueAsync(value.value).then((fixValue) => this.setValue(fixValue));
        }
    }
    setValue(value) {
        this.id = value.id;
        this.title = value.value;
    }
    getValueAsync(id) {
        return Lookup_awaiter(this, void 0, void 0, function* () {
            const rootUrl = this.part.link.split("?")[0];
            const queryStringParams = yield this.owner.options.getQueryStringParamsAsync();
            const url = Util/* default */.A.formatString(`${rootUrl}?fixid=${id}`, queryStringParams);
            return yield Util/* default */.A.getDataAsync(url);
        });
    }
    displaySuggestionListAsync(e) {
        return Lookup_awaiter(this, void 0, void 0, function* () {
            const term = this._input.value;
            const queryStringParams = yield this.owner.options.getQueryStringParamsAsync();
            const url = Util/* default */.A.formatString(this.part.link, Object.assign({ term }, queryStringParams));
            const ul = this.element.querySelector("[data-bc-result]");
            ul.innerHTML = "";
            const result = yield Util/* default */.A.getDataAsync(url);
            if ((result === null || result === void 0 ? void 0 : result.length) > 0) {
                result.forEach((item) => {
                    const li = document.createElement("li");
                    li.setAttribute("data-bc-value", item.value);
                    li.setAttribute("data-sys-hover", "");
                    li.setAttribute("data-sys-text", "");
                    li.innerHTML = item.value;
                    li.addEventListener("dblclick", (e) => {
                        e.preventDefault();
                        this.setValue(item);
                        ul.innerHTML = "";
                    });
                    ul.appendChild(li);
                });
            }
        });
    }
    getValidationErrorsAsync() {
        return Promise.resolve(this.ValidateValue(this._input.value));
    }
    getAddedAsync() {
        let retVal = null;
        if (!this.answer && this.selectedId) {
            retVal = {
                part: this.part.part,
                values: [
                    {
                        value: this.selectedId,
                        title: this.title,
                    },
                ],
            };
        }
        return Promise.resolve(retVal);
    }
    getEditedAsync() {
        let retVal = null;
        if (this.answer &&
            this.selectedId &&
            this.answer.values[0].value != this.selectedId) {
            retVal = {
                part: this.part.part,
                values: [
                    {
                        id: this.answer.values[0].id,
                        value: this.selectedId,
                        title: this.title,
                    },
                ],
            };
        }
        return Promise.resolve(retVal);
    }
    getDeletedAsync() {
        let retVal = null;
        if (this.answer && !this.selectedId) {
            retVal = this.answer;
        }
        return Promise.resolve(retVal);
    }
    getValuesAsync() {
        let retVal = null;
        if (this.selectedId) {
            retVal = {
                part: this.part.part,
                values: [
                    {
                        value: this.selectedId,
                        title: this.title,
                    },
                ],
            };
        }
        return Promise.resolve(retVal);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text/assets/time-layout.html
const time_layout_namespaceObject = "<input type=\"time\" data-bc-text-input=\"\" data-sys-input-text=\"\" />";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text/TimeType.ts


class TimeType extends TextBaseType {
    constructor(part, owner, answer) {
        super(part, time_layout_namespaceObject, owner, answer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text/assets/color-layout.html
const color_layout_namespaceObject = "<input type=\"color\" data-sys-input-text=\"\" data-bc-text-input=\"\" />";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text/ColorType.ts


class ColorType extends TextBaseType {
    constructor(part, owner, answer) {
        super(part, color_layout_namespaceObject, owner, answer);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text/assets/password-layout.html
const password_layout_namespaceObject = "<input type=\"password\" data-bc-text-input=\"\" data-sys-input-text=\"\" />\r\n<span data-bc-view-pass=\"\" data-bc-view-pass-status=\"hide\" data-sys-text=\"\">\r\n    <svg viewBox=\"0 0 512 512\">\r\n        <path d=\"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" />\r\n        <circle cx=\"256\" cy=\"256\" r=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-miterlimit=\"10\" stroke-width=\"32\" />\r\n    </svg>\r\n</span>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/text/PasswordType.ts


class PasswordType extends TextBaseType {
    constructor(part, owner, answer) {
        super(part, password_layout_namespaceObject, owner, answer);
        this._iconContainer = this.element.querySelector("[data-bc-view-pass]");
        this._iconContainer.addEventListener("click", (e) => {
            e.preventDefault();
            this.showPass(this._iconContainer);
        });
    }
    showPass(icon) {
        const status = icon.getAttribute("data-bc-view-pass-status");
        if (status == "hide") {
            icon.closest("[data-bc-part]").querySelector("input[data-bc-text-input]").setAttribute("type", "text");
            icon.innerHTML = `<svg viewBox="0 0 512 512"><path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"/><path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"/></svg>`;
            icon.setAttribute("data-bc-view-pass-status", "show");
        }
        else if (status == "show") {
            icon.closest("[data-bc-part]").querySelector("input[data-bc-text-input]").setAttribute("type", "password");
            icon.innerHTML = `<svg viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /></svg>`;
            icon.setAttribute("data-bc-view-pass-status", "hide");
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/upload/assets/readonly-layout.html
const upload_assets_readonly_layout_namespaceObject = "<div data-bc-upload-file-list>\r\n</div>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/upload/assets/readonly-image-layout.html
const readonly_image_layout_namespaceObject = "<div data-bc-upload-file-item>\r\n    <a data-bc-item-download href=\"@url\" download=\"@downloadName\"><div data-bc-item-icon-frame><img src=\"@source\" data-bc-item-icon></div><span data-bc-item-title data-sys-text=\"\">@name</span></a>\r\n</div>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/upload/ReadOnlyUploadType.ts





class ReadOnlyUploadType extends ReadonlyQuestionPart {
    constructor(part, owner, answer) {
        var _a;
        super(part, upload_assets_readonly_layout_namespaceObject, owner, answer);
        this.multiple = false;
        this.files = {};
        this.filesPath = (_a = owner.options.filesPath) !== null && _a !== void 0 ? _a : "";
        if (answer) {
            this.setValue(answer.values);
        }
    }
    addFileToUI(file) {
        var _a;
        const container = this.element.querySelector("[data-bc-upload-file-list]");
        let fileUrl = `${this.filesPath}${file.url}`;
        const template = readonly_image_layout_namespaceObject
            .replace("@name", file.name)
            .replace("@downloadName", file.name)
            .replace("@url", fileUrl);
        const fileElement = $bc.util.toNode(template).childNodes[0];
        const imageElement = fileElement.querySelector("[data-bc-item-icon]");
        const localId = $bc.util.getRandomName("uploader_");
        if (!this.part.multiple) {
            this.files = {};
            container.innerHTML = "";
        }
        this.files[localId] = file;
        if (file.image && file.image != "") {
            imageElement.src = `/${file.image}`;
        }
        else {
            imageElement.src =
                (_a = upload_ExtensionList[file.type]) !== null && _a !== void 0 ? _a : upload_ExtensionList["???"];
        }
        container.append(fileElement);
    }
    setValue(values) {
        if (values) {
            values
                .map((x) => {
                var _a, _b;
                const retVal = {
                    id: x.id,
                    name: x.value.name,
                    type: x.value.type,
                    size: 0,
                    url: (_a = x.value.url) !== null && _a !== void 0 ? _a : null,
                    image: (_b = x.value.image) !== null && _b !== void 0 ? _b : null,
                    data: null,
                    mustDelete: false,
                };
                return retVal;
            })
                .forEach((image) => this.addFileToUI(image));
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/readonly-text/assets/color-layout.html
const readonly_text_assets_color_layout_namespaceObject = "<input type=\"color\" data-sys-input-text=\"\" data-bc-text-input=\"\" disabled=\"\" />";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/readonly-text/ReadonlyColorType.ts


class ReadonlyColorType extends ReadonlyQuestionPart {
    constructor(part, owner, answer) {
        var _a;
        super(part, readonly_text_assets_color_layout_namespaceObject, owner, answer);
        this._label = this.element.querySelector("[data-bc-text-input]");
        this._label.value = (_a = answer === null || answer === void 0 ? void 0 : answer.values[0].value) !== null && _a !== void 0 ? _a : null;
        if (this.owner.options.callback) {
            const param = {
                element: this.element,
                prpId: this.owner.question.prpId,
                typeId: this.owner.question.typeId,
                value: answer === null || answer === void 0 ? void 0 : answer.values[0],
            };
            this.owner.options.callback(param);
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/component-container/assets/layout.html
const component_container_assets_layout_namespaceObject = "<basis run=\"atclient\"></basis>";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/component-container/ComponentContainer.ts
var ComponentContainer_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ComponentContainer extends EditableQuestionPart {
    constructor(part, owner, answer) {
        super(part, component_container_assets_layout_namespaceObject, owner, answer);
        var commandElement = this.element.querySelector("basis");
        commandElement.setAttribute("core", part.viewType);
        if (part.options) {
            const optionsName = $bc.util.storeAsGlobal(part.options);
            commandElement.setAttribute("options", optionsName);
        }
        var wrapper = $bc.new().addFragment(commandElement).run();
        this.command = wrapper.GetCommandListByCore(part.viewType)[0];
        if (answer) {
            this.command.onInitialized.then((x) => {
                const manager = x.manager;
                manager.setValues(answer.values);
            });
        }
    }
    getValidationErrorsAsync() {
        return ComponentContainer_awaiter(this, void 0, void 0, function* () {
            const manager = this.command.manager;
            let retVal = null;
            if (this.part.validations) {
                try {
                    if (typeof manager.validateAsync == "function") {
                        retVal = yield manager.validateAsync(this.part.validations);
                    }
                    else if (typeof manager.getValuesForValidateAsync == "function") {
                        const values = yield manager.getValuesForValidateAsync();
                        retVal = this.ValidateValue(values);
                    }
                    else {
                        console.warn(`No validation process detect. Add one of validateAsync() or getValuesForValidateAsync() method to '${this.part.viewType}'.`);
                    }
                }
                catch (ex) {
                    console.error("Error in validation process", ex);
                }
            }
            return Promise.resolve(retVal);
        });
    }
    getAddedAsync() {
        return ComponentContainer_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (!this.answer) {
                const manager = this.command.manager;
                try {
                    if (typeof manager.getAddedValuesAsync == "function") {
                        const newValues = yield manager.getAddedValuesAsync();
                        if (newValues) {
                            retVal = {
                                part: this.part.part,
                                values: newValues,
                            };
                        }
                    }
                    else {
                        console.warn(`the getAddedValuesAsync() method not exist in '${this.part.viewType}'!`);
                    }
                }
                catch (ex) {
                    console.error(`Error in getAddedValuesAsync() of '${this.part.viewType}'!`, ex);
                }
            }
            return retVal;
        });
    }
    getEditedAsync() {
        return ComponentContainer_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (this.answer) {
                const manager = this.command.manager;
                try {
                    if (typeof manager.getEditedValuesAsync == "function") {
                        const editedValues = yield manager.getEditedValuesAsync(this.answer.values);
                        if (editedValues) {
                            retVal = {
                                part: this.part.part,
                                values: editedValues,
                            };
                        }
                    }
                    else {
                        console.warn(`the getEditedValuesAsync() method not exist in '${this.part.viewType}'!`);
                    }
                }
                catch (ex) {
                    console.error(`Error in getEditedValuesAsync() of '${this.part.viewType}'!`, ex);
                }
            }
            return retVal;
        });
    }
    getDeletedAsync() {
        return ComponentContainer_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (this.answer) {
                const manager = this.command.manager;
                try {
                    if (typeof manager.getDeletedValuesAsync == "function") {
                        const deletedValues = yield manager.getDeletedValuesAsync(this.answer.values);
                        if (deletedValues) {
                            retVal = {
                                part: this.part.part,
                                values: deletedValues,
                            };
                        }
                    }
                    else {
                        console.warn(`the getDeletedValuesAsync() method not exist in '${this.part.viewType}'!`);
                    }
                }
                catch (ex) {
                    console.error(`Error in getDeletedValuesAsync() of '${this.part.viewType}'!`, ex);
                }
            }
            return retVal;
        });
    }
    getValuesAsync() {
        return ComponentContainer_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (!this.answer) {
                const manager = this.command.manager;
                try {
                    if (typeof manager.getValuesAsync == "function") {
                        const newValues = yield manager.getValuesAsync();
                        if (newValues) {
                            retVal = {
                                part: this.part.part,
                                values: newValues,
                            };
                        }
                    }
                    else {
                        console.warn(`the getValuesAsync() method not exist in '${this.part.viewType}'!`);
                    }
                }
                catch (ex) {
                    console.error(`Error in getValuesAsync() of '${this.part.viewType}'!`, ex);
                }
            }
            return retVal;
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/html/assets/layout.html
const html_assets_layout_namespaceObject = "<div data-bc-html-field-row>\r\n  <input data-bc-text-input=\"\" type=\"text\" disabled />\r\n</div>\r\n";
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/html/assets/HTMLLayout.html
const HTMLLayout_namespaceObject = "<div data-bc-html-container>\r\n  <div data-bc-html=\"\" data-sys-html=\"\">\r\n    <div data-bc-title=\"\" data-sys-html-header=\"\">\r\n      <button data-bc-btn-close=\"\" data-sys-text=\"\">X</button>\r\n    </div>\r\n    <div data-bc-body=\"\" data-sys-html-body=\"\"></div>\r\n    <div data-bc-footer=\"\" data-sys-html-footer=\"\"></div>\r\n  </div>\r\n</div>\r\n";
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/renderable/schema/part-control/html/assets/style.css
var html_assets_style = __webpack_require__(3147);
;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/html/assets/style.css

      
      
      
      
      
      
      
      
      

var html_assets_style_options = {};

html_assets_style_options.styleTagTransform = (styleTagTransform_default());
html_assets_style_options.setAttributes = (setAttributesWithoutAttributes_default());

      html_assets_style_options.insert = insertBySelector_default().bind(null, "head");
    
html_assets_style_options.domAPI = (styleDomAPI_default());
html_assets_style_options.insertStyleElement = (insertStyleElement_default());

var html_assets_style_update = injectStylesIntoStyleTag_default()(html_assets_style/* default */.A, html_assets_style_options);




       /* harmony default export */ const part_control_html_assets_style = (html_assets_style/* default */.A && html_assets_style/* default */.A.locals ? html_assets_style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/html/HTMLFieldType.ts





class HTMLFieldType extends QuestionPart {
    constructor(part, owner, answer) {
        super(part, html_assets_layout_namespaceObject, owner, answer);
        this.modalElement = Util/* default */.A.parse(HTMLLayout_namespaceObject).querySelector("[data-bc-html-container]");
        this.owner.button.setAttribute("data-bc-btn", "");
        this.owner.button.setAttribute("data-sys-plus", "");
        this.owner.button.innerHTML = `<svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-sys-plus-icon="" d="M8.4 0H5.6V5.6H0V8.4H5.6V14H8.4V8.4H14V5.6H8.4V0Z" fill="#004B85"/></svg>`;
        this.owner.element.appendChild(this.modalElement);
        this.valueInput = this.element.querySelector("[data-bc-text-input");
        this.owner.element
            .querySelector("[data-bc-btn-close]")
            .addEventListener("click", () => {
            this.onClose();
        });
        this.owner.button.addEventListener("click", (e) => {
            e.preventDefault();
            this.onButtonClick();
        });
    }
    onButtonClick() {
        this.modalElement.style.display = "block";
        this.fillUI();
    }
    fillUI() {
        const body = this.modalElement.querySelector("[data-bc-body]");
        body.innerHTML = "";
        const iframe = document.createElement("iframe");
        iframe.setAttribute("data-bc-iframe", "");
        const loading = document.createElement("div");
        loading.innerText = "loading ...";
        const onEventReceived = (e) => {
            let data;
            try {
                data = JSON.parse(e.data);
            }
            catch (_a) { }
            if (data) {
                if (Object.keys(data).find((e) => e == "isLoaded")) {
                    if (data.isLoaded) {
                        iframe.style.display = "block";
                        loading.style.display = "none";
                    }
                    else {
                        this.onClose();
                        window.removeEventListener("message", onEventReceived);
                    }
                }
                if (Object.keys(data).find((i) => i == "isSubmited")) {
                    delete data["isSubmited"];
                    this.value = data;
                    this.onClose();
                    window.removeEventListener("message", onEventReceived);
                }
            }
        };
        window.addEventListener("message", onEventReceived);
        iframe.src = this.part.link;
        iframe.style.display = "none";
        iframe.onload = () => {
            if (this.value) {
                iframe.contentWindow.postMessage(JSON.stringify(Object.assign(Object.assign({}, this.value), { mode: "edit" })));
            }
            else {
                iframe.contentWindow.postMessage(JSON.stringify({ mode: "new" }));
            }
        };
        body.append(iframe);
        body.append(loading);
    }
    setInputValue() {
        this.valueInput.value = JSON.stringify(this.value) || "";
    }
    onClose() {
        this.modalElement.style.display = "none";
        this.setInputValue();
    }
    getAddedAsync() {
        let retVal = null;
        if (!this.answer) {
            if (this.value) {
                retVal = {
                    part: this.part.part,
                    values: [
                        {
                            value: this.value || "",
                        },
                    ],
                };
            }
        }
        return Promise.resolve(retVal);
    }
    getValidationErrorsAsync() {
        return null;
    }
    getEditedAsync() {
        let retVal = null;
        if (this.answer) {
            const changed = this.value != this.answer.values[0].value;
            if (changed) {
                retVal = {
                    part: this.part.part,
                    values: [
                        {
                            id: this.answer.values[0].id,
                            value: this.value,
                        },
                    ],
                };
            }
        }
        return Promise.resolve(retVal);
    }
    getDeletedAsync() {
        let retVal = null;
        if (this.answer) {
            const changed = this.value != this.answer.values[0].value;
            if (changed) {
                retVal = {
                    part: this.part.part,
                    values: [
                        {
                            id: this.answer.values[0].id,
                            value: this.value,
                        },
                    ],
                };
            }
        }
        return Promise.resolve(retVal);
    }
    getValuesAsync() {
        return Promise.resolve(this.value);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/part-control/QuestionPartFactory.ts

























class QuestionPartFactory {
    static generate(question, part, owner, answer) {
        var retVal = null;
        var viewType = part.viewType.toLowerCase();
        if (owner.options.displayMode != "view") {
            switch (viewType) {
                case "text": {
                    retVal = new TextType(part, owner, answer);
                    break;
                }
                case "select": {
                    retVal = new SelectType(part, owner, answer);
                    break;
                }
                case "checklist": {
                    retVal = new CheckListType(part, owner, answer);
                    break;
                }
                case "radio": {
                    retVal = new RadioListType(part, owner, answer);
                    break;
                }
                case "html": {
                    retVal = new HTMLFieldType(part, owner, answer);
                    break;
                }
                case "textarea": {
                    retVal = new TextAriaType(part, owner, answer);
                    break;
                }
                case "autocomplete": {
                    retVal = question.multi
                        ? new AutoCompleteMultiType(part, owner, (answer === null || answer === void 0 ? void 0 : answer.values[0].id) ? answer : null, answer)
                        : new AutoCompleteSingleType(part, owner, answer);
                    break;
                }
                case "reference": {
                    retVal = question.multi
                        ? new ReferenceMultiType(part, owner, (answer === null || answer === void 0 ? void 0 : answer.values[0].id) ? answer : null, answer)
                        : new ReferenceSingleType(part, owner, answer);
                    break;
                }
                case "lookup": {
                    retVal = new Lookup(part, owner, answer);
                    break;
                }
                case "time": {
                    retVal = new TimeType(part, owner, answer);
                    break;
                }
                case "color": {
                    retVal = new ColorType(part, owner, answer);
                    break;
                }
                case "password": {
                    retVal = new PasswordType(part, owner, answer);
                    break;
                }
                case "upload": {
                    retVal = new UploadType(part, owner, answer);
                    break;
                }
                case "blob": {
                    retVal = new BlobType(part, owner, answer);
                    break;
                }
                default: {
                    retVal = viewType.startsWith("component.")
                        ? new ComponentContainer(part, owner, answer)
                        : new UnknownType(part, owner, answer);
                    break;
                }
            }
        }
        else {
            switch (viewType) {
                case "checklist": {
                    retVal = new ReadonlyCheckListType(part, owner, answer);
                    break;
                }
                case "radio": {
                    retVal = new ReadonlyRadioType(part, owner, answer);
                    break;
                }
                case "textarea": {
                    retVal = new ReadOnlyTextAriaType(part, owner, answer);
                    break;
                }
                case "select": {
                    retVal = new ReadOnlySelectType(part, owner, answer);
                    break;
                }
                case "autocomplete": {
                    retVal = question.multi
                        ? new AutoCompleteMultiType(part, owner, (answer === null || answer === void 0 ? void 0 : answer.values[0].id) ? answer : null, answer)
                        : new AutoCompleteSingleType(part, owner, answer);
                    break;
                }
                case "reference": {
                    retVal = question.multi
                        ? new ReferenceMultiType(part, owner, (answer === null || answer === void 0 ? void 0 : answer.values[0].id) ? answer : null, answer)
                        : new ReferenceSingleType(part, owner, answer);
                    break;
                }
                case "lookup": {
                    retVal = new Lookup(part, owner, answer);
                    break;
                }
                case "time": {
                    retVal = new TimeType(part, owner, answer);
                    break;
                }
                case "color": {
                    retVal = new ReadonlyColorType(part, owner, answer);
                    break;
                }
                case "password": {
                    retVal = new PasswordType(part, owner, answer);
                    break;
                }
                case "upload":
                case "blob": {
                    retVal = new ReadOnlyUploadType(part, owner, answer);
                    break;
                }
                default: {
                    retVal = new ReadOnlyText(part, owner, answer);
                    break;
                }
            }
        }
        return retVal;
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/question/assets/layout.html
const question_assets_layout_namespaceObject = "<div data-bc-answer>\r\n  <div data-bc-part-container></div>\r\n  <div data-bc-part=\"\" data-part-btn-container=\"\">\r\n    <div data-bc-pair-btn-container>\r\n      <button data-bc-btns data-bc-btn-remove><svg width=\"10\" height=\"10\" viewBox=\"0 0 12 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path data-sys-minus-icon=\"\" d=\"M2.04028 0.0603034L0.0603845 2.0402L4.02018 6L0.0603845 9.9598L2.04028 11.9397L6.00008 7.9799L9.95988 11.9397L11.9398 9.9598L7.97998 6L11.9398 2.0402L9.95988 0.0603037L6.00008 4.0201L2.04028 0.0603034Z\" fill=\"#B40020\"></path>\r\n        </svg></button>\r\n\r\n      <button data-bc-btns data-bc-btn-add><svg width=\"12\" height=\"12\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path data-sys-plus-icon=\"\" d=\"M8.4 0H5.6V5.6H0V8.4H5.6V14H8.4V8.4H14V5.6H8.4V0Z\" fill=\"#004B85\" />\r\n        </svg></button>\r\n    </div>\r\n    <button data-bc-btn=\"add\" data-sys-plus=\"\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path data-sys-plus-icon=\"\" d=\"M8.4 0H5.6V5.6H0V8.4H5.6V14H8.4V8.4H14V5.6H8.4V0Z\" fill=\"#004B85\" />\r\n      </svg></button>\r\n  </div>\r\n</div>";
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/renderable/schema/question/assets/style.css
var question_assets_style = __webpack_require__(902);
;// CONCATENATED MODULE: ./src/component/renderable/schema/question/assets/style.css

      
      
      
      
      
      
      
      
      

var question_assets_style_options = {};

question_assets_style_options.styleTagTransform = (styleTagTransform_default());
question_assets_style_options.setAttributes = (setAttributesWithoutAttributes_default());

      question_assets_style_options.insert = insertBySelector_default().bind(null, "head");
    
question_assets_style_options.domAPI = (styleDomAPI_default());
question_assets_style_options.insertStyleElement = (insertStyleElement_default());

var question_assets_style_update = injectStylesIntoStyleTag_default()(question_assets_style/* default */.A, question_assets_style_options);




       /* harmony default export */ const schema_question_assets_style = (question_assets_style/* default */.A && question_assets_style/* default */.A.locals ? question_assets_style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/component/renderable/schema/question/Question.ts
var Question_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Question {
    constructor(question, options, owner, container, answer) {
        this.question = question;
        this.container = container;
        this.options = options;
        this.owner = owner;
        this.answer = answer;
        this._ui = Util/* default */.A.parse(question_assets_layout_namespaceObject).querySelector("[data-bc-answer]");
        this.element = this._ui.querySelector("[data-bc-part-container]");
        this.button = this._ui.querySelector("[data-bc-btn]");
        this._removeButton = this._ui.querySelector("[data-bc-btn-remove]");
        this._addButton = this._ui.querySelector("[data-bc-btn-add]");
        this._pairBtnContainer = this._ui.querySelector("[data-bc-pair-btn-container]");
        this._removeButton.addEventListener("click", (e) => {
            e.preventDefault();
            this._onRemoveClick();
            this.owner.addQuestion(null);
        });
        this._addButton.addEventListener("click", (e) => {
            e.preventDefault();
            this._onAddClick();
        });
        this._onAddClick = () => {
            this.owner.addQuestion(null);
        };
        this._onRemoveClick = () => {
            this.owner.onQuestionRemove(this);
            this._ui.remove();
        };
        if (!(this.question.parts[0].viewType == "html")) {
            this.button.addEventListener("click", this.onBtnClick.bind(this));
        }
        if ((this.question.multi &&
            this.options.displayMode != "view" &&
            !this.question.disabled) ||
            this.question.parts[0].viewType == "html") {
            this.button.setAttribute("data-bc-btn", "add");
            this.button.setAttribute("data-sys-plus", "");
            this.button.innerHTML = `<svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-sys-plus-icon="" d="M8.4 0H5.6V5.6H0V8.4H5.6V14H8.4V8.4H14V5.6H8.4V0Z" fill="#004B85"/></svg>`;
        }
        else {
            this._pairBtnContainer.remove();
            this.button.remove();
        }
        container.appendChild(this._ui);
        this._parts = question.parts.map((part) => {
            var _a;
            const value = (_a = this.answer) === null || _a === void 0 ? void 0 : _a.parts.find((x) => x.part === part.part);
            return QuestionPartFactory.generate(question, part, this, value);
        });
    }
    updateButtonState(isLastQuestion) {
        const disabled = this.question.parts.some((x) => x.disabled);
        if (isLastQuestion) {
            if (disabled || !this.answer) {
                this.button.setAttribute("data-bc-btn", "add");
                this.button.setAttribute("data-sys-plus", "");
                this.button.innerHTML = `<svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-sys-plus-icon="" d="M8.4 0H5.6V5.6H0V8.4H5.6V14H8.4V8.4H14V5.6H8.4V0Z" fill="#004B85"/></svg>`;
                this._pairBtnContainer.style.display = "none";
                this.button.style.display = "flex";
            }
            else {
                this._pairBtnContainer.style.display = "block";
                this.button.style.display = "none";
            }
        }
        else {
            if (this.answer && disabled) {
                this._pairBtnContainer.style.display = "none";
                this.button.style.display = "none";
            }
            else {
                this.button.setAttribute("data-bc-btn", "remove");
                this.button.setAttribute("data-sys-minus", "");
                this.button.innerHTML = `<svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-sys-minus-icon="" d="M2.04028 0.0603034L0.0603845 2.0402L4.02018 6L0.0603845 9.9598L2.04028 11.9397L6.00008 7.9799L9.95988 11.9397L11.9398 9.9598L7.97998 6L11.9398 2.0402L9.95988 0.0603037L6.00008 4.0201L2.04028 0.0603034Z" fill="#B40020"></path></svg>`;
                this._pairBtnContainer.style.display = "none";
                this.button.style.display = "flex";
            }
        }
    }
    onBtnClick(e) {
        e.preventDefault();
        if (this.button.getAttribute("data-bc-btn") === "add") {
            this._onAddClick();
        }
        else {
            this._onRemoveClick();
        }
    }
    replaceAddClick(onClick) {
        this._onAddClick = onClick;
    }
    getAddedPartsAsync() {
        return Question_awaiter(this, void 0, void 0, function* () {
            const userActionTaskList = this._parts.map((x) => x.getAddedAsync());
            const userAction = (yield Promise.all(userActionTaskList)).filter((x) => x);
            return userAction.length > 0
                ? Object.assign(Object.assign({}, (this.answer && { id: this.answer.id })), { parts: userAction }) : null;
        });
    }
    getValidationErrorsAsync() {
        return Question_awaiter(this, void 0, void 0, function* () {
            const validationErrorsTaskList = this._parts.map((x) => x.getValidationErrorsAsync());
            const validationErrors = (yield Promise.all(validationErrorsTaskList)).filter((x) => x);
            return validationErrors.length > 0 ? validationErrors : null;
        });
    }
    getEditedPartsAsync() {
        return Question_awaiter(this, void 0, void 0, function* () {
            const userActionTaskList = this._parts.map((x) => x.getEditedAsync());
            const userAction = (yield Promise.all(userActionTaskList)).filter((x) => x);
            return userAction.length > 0
                ? {
                    id: this.answer.id,
                    parts: userAction,
                }
                : null;
        });
    }
    getDeletedPartsAsync() {
        return Question_awaiter(this, void 0, void 0, function* () {
            const userActionTaskList = this._parts.map((x) => x.getDeletedAsync());
            const userAction = (yield Promise.all(userActionTaskList)).filter((x) => x);
            return userAction.length > 0
                ? {
                    id: this.answer.id,
                    parts: userAction,
                }
                : null;
        });
    }
    getAllValuesAsync() {
        return Question_awaiter(this, void 0, void 0, function* () {
            const userActionTaskList = this._parts.map((x) => x.getValuesAsync());
            const userAction = (yield Promise.all(userActionTaskList)).filter((x) => x);
            return userAction.length > 0
                ? Object.assign(Object.assign({}, (this.answer && { id: this.answer.id })), { parts: userAction }) : null;
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema/question-container/assets/layout.html
const question_container_assets_layout_namespaceObject = "<div data-bc-question>\r\n    <div data-bc-title-container><span data-bc-question-title data-bc-schema-info-prpid=\"@prpid\" data-sys-text=\"\">@title</span><a data-bc-help-btn><svg width=\"28\" height=\"29\" viewBox=\"0 0 28 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"0.772461\" width=\"28\" height=\"28\" rx=\"5\" fill=\"#004B85\" fill-opacity=\"0.05\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.9997 21.4388C10.857 21.4388 9.28563 21.4388 8.30932 20.4625C7.33301 19.4862 7.33301 17.9148 7.33301 14.7721C7.33301 11.6294 7.33301 10.0581 8.30932 9.08178C9.28563 8.10547 10.857 8.10547 13.9997 8.10547C17.1424 8.10547 18.7137 8.10547 19.69 9.08178C20.6663 10.0581 20.6663 11.6294 20.6663 14.7721C20.6663 17.9148 20.6663 19.4862 19.69 20.4625C18.7137 21.4388 17.1424 21.4388 13.9997 21.4388ZM13.9997 11.9388C13.5855 11.9388 13.2497 12.2746 13.2497 12.6888C13.2497 12.9649 13.0258 13.1888 12.7497 13.1888C12.4735 13.1888 12.2497 12.9649 12.2497 12.6888C12.2497 11.7223 13.0332 10.9388 13.9997 10.9388C14.9662 10.9388 15.7497 11.7223 15.7497 12.6888C15.7497 13.1627 15.5606 13.5935 15.255 13.9081C15.1935 13.9714 15.1348 14.03 15.0788 14.086C14.9349 14.2297 14.8089 14.3557 14.6983 14.4978C14.5523 14.6854 14.4997 14.8233 14.4997 14.9388V15.4388C14.4997 15.7149 14.2758 15.9388 13.9997 15.9388C13.7235 15.9388 13.4997 15.7149 13.4997 15.4388V14.9388C13.4997 14.502 13.703 14.1484 13.9091 13.8836C14.0616 13.6877 14.2533 13.4964 14.4089 13.3411C14.4558 13.2943 14.4994 13.2507 14.5377 13.2113C14.6694 13.0758 14.7497 12.8922 14.7497 12.6888C14.7497 12.2746 14.4139 11.9388 13.9997 11.9388ZM13.9997 18.1055C14.3679 18.1055 14.6663 17.807 14.6663 17.4388C14.6663 17.0706 14.3679 16.7721 13.9997 16.7721C13.6315 16.7721 13.333 17.0706 13.333 17.4388C13.333 17.807 13.6315 18.1055 13.9997 18.1055Z\" fill=\"#004B85\"/></svg></a></div>\r\n    <div data-bc-answer-container>\r\n        <div data-bc-answer-title-container></div>\r\n        <div data-bc-answer-collection></div>\r\n    </div>\r\n</div>";
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/renderable/schema/question-container/assets/style.css
var question_container_assets_style = __webpack_require__(9324);
;// CONCATENATED MODULE: ./src/component/renderable/schema/question-container/assets/style.css

      
      
      
      
      
      
      
      
      

var question_container_assets_style_options = {};

question_container_assets_style_options.styleTagTransform = (styleTagTransform_default());
question_container_assets_style_options.setAttributes = (setAttributesWithoutAttributes_default());

      question_container_assets_style_options.insert = insertBySelector_default().bind(null, "head");
    
question_container_assets_style_options.domAPI = (styleDomAPI_default());
question_container_assets_style_options.insertStyleElement = (insertStyleElement_default());

var question_container_assets_style_update = injectStylesIntoStyleTag_default()(question_container_assets_style/* default */.A, question_container_assets_style_options);




       /* harmony default export */ const schema_question_container_assets_style = (question_container_assets_style/* default */.A && question_container_assets_style/* default */.A.locals ? question_container_assets_style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/component/renderable/schema/question-container/QuestionContainer.ts
var QuestionContainer_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class QuestionContainer {
    constructor(all, questionSchema, options, cellManager, answer) {
        var _a;
        this._questions = new Array();
        this.AllQuestions = all;
        this.QuestionSchema = questionSchema;
        this.options = options;
        this.answer = answer;
        const copyTemplate = question_container_assets_layout_namespaceObject
            .replace("@title", this.QuestionSchema.title)
            .replace("@prpid", (_a = this.QuestionSchema.prpId) === null || _a === void 0 ? void 0 : _a.toString());
        const uiElement = Util/* default */.A.parse(copyTemplate).querySelector("[data-bc-question]");
        this.element = uiElement.querySelector("[data-bc-answer-collection]");
        if (!questionSchema.help) {
            uiElement.querySelector("[data-bc-help-btn]").remove();
        }
        else {
            uiElement.querySelector("[data-bc-help-btn]").setAttribute("data-bc-help-tooltip", questionSchema.help);
        }
        const headerContainer = uiElement.querySelector("[data-bc-answer-title-container]");
        if (questionSchema.cssClass) {
            uiElement.classList.add(questionSchema.cssClass);
        }
        if (questionSchema.parts.length > 1) {
            const template = document.createElement("div");
            template.setAttribute("data-bc-answer-title", "");
            template.setAttribute("data-bc-part-related-cell", "");
            template.setAttribute("data-sys-text", "");
            questionSchema.parts.forEach((part) => {
                var _a;
                const cpy = template.cloneNode();
                cpy.appendChild(document.createTextNode((_a = part.caption) !== null && _a !== void 0 ? _a : ""));
                headerContainer.appendChild(cpy);
            });
        }
        else {
            headerContainer.remove();
        }
        cellManager.add(uiElement);
        if (answer) {
            this.answer.answers.forEach((answer) => this.addQuestion(answer));
        }
        else {
            this.addQuestion(null);
        }
        const tempLog = uiElement.querySelector("[data-bc-answer-container]");
        tempLog.setAttribute("data-bc-schema-info-multi", questionSchema.multi ? "1" : "0");
        if (questionSchema.typeId) {
            tempLog.setAttribute("data-bc-schema-info-type", questionSchema.typeId.toString());
        }
        if (questionSchema.wordId) {
            tempLog.setAttribute("data-bc-schema-info-word", questionSchema.wordId.toString());
        }
        tempLog.setAttribute("data-bc-schema-info-part", questionSchema.parts ? questionSchema.parts.length.toString() : "0");
        questionSchema.parts.forEach((part, index) => tempLog.setAttribute(`data-bc-schema-info-part-${index}-type`, part.viewType));
    }
    addQuestion(answer) {
        const question = new Question(this.QuestionSchema, this.options, this, this.element, answer);
        this._questions.push(question);
        this.updateButtonsState();
        return question;
    }
    updateButtonsState() {
        const lastIndex = this._questions.length - 1;
        this._questions.forEach((x, i) => x.updateButtonState(i == lastIndex));
    }
    onQuestionRemove(question) {
        var _a;
        const index = this._questions.indexOf(question);
        this._questions.splice(index, 1);
        if ((_a = question.answer) === null || _a === void 0 ? void 0 : _a.id) {
            if (!this._removedQuestions) {
                this._removedQuestions = [];
            }
            this._removedQuestions.push(question.answer.id);
        }
    }
    getAllValuesAsync() {
        return QuestionContainer_awaiter(this, void 0, void 0, function* () {
            const values = yield Promise.all(this._questions.map((x) => x.getAllValuesAsync()));
            return {
                propId: this.QuestionSchema.prpId,
                multi: this.QuestionSchema.multi,
                values: values,
            };
        });
    }
    getChangeValuesAsync() {
        var _a;
        return QuestionContainer_awaiter(this, void 0, void 0, function* () {
            let userAction = null;
            const added = (yield Promise.all(this._questions.map((x) => x.getAddedPartsAsync()))).filter((x) => x);
            const edited = (yield Promise.all(this._questions.map((x) => x.getEditedPartsAsync()))).filter((x) => x);
            const deleted = (yield Promise.all(this._questions.map((x) => QuestionContainer_awaiter(this, void 0, void 0, function* () {
                return { x, userAction: yield x.getDeletedPartsAsync() };
            }))))
                .filter((x) => x.userAction)
                .map((x) => {
                const deletedValues = x.userAction.parts.reduce((sum, item) => sum + item.values.length, 0);
                const allValues = x.x.answer.parts.reduce((sum, item) => sum + item.values.length, 0);
                return x.userAction.parts.length === this.QuestionSchema.parts.length &&
                    edited.length === 0 &&
                    added.length === 0 &&
                    allValues === deletedValues
                    ? { id: x.userAction.id }
                    : x.userAction;
            });
            (_a = this._removedQuestions) === null || _a === void 0 ? void 0 : _a.forEach((x) => {
                deleted.push({
                    id: x,
                });
            });
            if (added.length > 0 || edited.length > 0 || deleted.length > 0) {
                userAction = Object.assign(Object.assign(Object.assign({ propId: this.QuestionSchema.prpId, multi: this.QuestionSchema.multi }, (added.length > 0 && { added: added })), (edited.length > 0 && { edited: edited })), (deleted.length > 0 && { deleted: deleted }));
            }
            return userAction;
        });
    }
    getUserActionAsync() {
        return QuestionContainer_awaiter(this, void 0, void 0, function* () {
            let userAction = null;
            const errors = (yield Promise.all(this._questions.map((x) => x.getValidationErrorsAsync()))).filter((x) => x);
            if (errors.length === 0) {
                userAction = yield this.getChangeValuesAsync();
            }
            else {
                throw Error("invalid");
            }
            return userAction;
        });
    }
    getParts(part) {
        return this._questions
            .flatMap((x) => x._parts)
            .filter((x) => x.part.part === part);
    }
}


/***/ }),

/***/ 9098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Section)
});

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/component/renderable/schema/section/assets/style.css
var style = __webpack_require__(5055);
;// CONCATENATED MODULE: ./src/component/renderable/schema/section/assets/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const assets_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/component/renderable/schema/section/assets/layout.html
const layout_namespaceObject = "<fieldset data-bc-section>\r\n  <legend data-bc-section-title data-sys-text=\"\"></legend>\r\n</fieldset>\r\n";
// EXTERNAL MODULE: ./src/Util.ts
var Util = __webpack_require__(2130);
// EXTERNAL MODULE: ./src/component/renderable/schema/QuestionCellManager.ts
var QuestionCellManager = __webpack_require__(3002);
;// CONCATENATED MODULE: ./src/component/renderable/schema/section/Section.ts




class Section {
    constructor(sectionSchema, container, cell) {
        this.currentRow = null;
        this.element = Util/* default */.A.parse(layout_namespaceObject).querySelector("[data-bc-section]");
        const title = this.element.querySelector("[data-bc-section-title]");
        if (sectionSchema.title) {
            title.innerHTML = sectionSchema.title;
        }
        else {
            title.remove();
        }
        container.appendChild(this.element);
        this.cellManager = new QuestionCellManager/* default */.A(this.element, cell);
    }
}


/***/ }),

/***/ 1790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9627);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3503);
/* harmony import */ var _CommandComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9074);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let CallbackComponent = class CallbackComponent extends _CommandComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A {
    constructor(element, context) {
        super(element, context);
        this.priority = _enum__WEBPACK_IMPORTED_MODULE_1__/* .Priority */ .bx.none;
        this.allowMultiProcess = true;
        this.methodToken = this.getAttributeToken("method");
    }
    runAsync(source) {
        return __awaiter(this, void 0, void 0, function* () {
            let retVal = true;
            let callbackFunction = null;
            if (this.methodToken) {
                const methodName = yield this.methodToken.getValueAsync();
                const method = eval(methodName);
                callbackFunction = (arg) => {
                    const param = this.createCallbackArgument({
                        source: arg,
                    });
                    try {
                        Reflect.apply(method, null, [param]);
                    }
                    catch (e) {
                        this.context.logger.logError(`error in execute callback method '${methodName}'.`, e);
                        retVal = e;
                    }
                };
            }
            else {
                callbackFunction = (arg) => {
                    this.context.logger.logSource(arg);
                };
            }
            if (source) {
                callbackFunction(source);
            }
            else {
                this.triggers.forEach((sourceId) => {
                    const source = this.context.tryToGetSource(sourceId);
                    if (source) {
                        callbackFunction(source);
                    }
                });
            }
            return retVal;
        });
    }
};
CallbackComponent = __decorate([
    (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .injectable */ ._G)(),
    __param(0, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("element")),
    __param(1, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("context")),
    __metadata("design:paramtypes", [Element, Object])
], CallbackComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallbackComponent);


/***/ }),

/***/ 387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ExposerComponent)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ExposerComponent {
    constructor(owner) {
        this.owner = owner;
    }
    initializeAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            const component = yield this.owner.getAttributeValueAsync("Component");
            if (component) {
                this.owner.storeAsGlobal(this, component);
            }
        });
    }
    runAsync(source) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = yield this.owner.getAttributeValueAsync("Method");
            if (method) {
                const callBack = eval(method);
                Reflect.apply(callBack, null, [this, source]);
            }
        });
    }
}


/***/ }),

/***/ 1515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var _event_EventManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9280);
/* harmony import */ var _data_Source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2164);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Context {
    constructor(repository, options, logger) {
        this.repository = repository;
        this.logger = logger;
        this.options = options;
        this.onDataSourceSet = new _event_EventManager__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A();
    }
    checkSourceHeartbeatAsync(source) {
        //TODO: must complete
        throw new Error("Method not implemented.");
    }
    onDataSourceSetHandler(source) {
        var handler = this.repository.resolves.get(source.id);
        if (handler) {
            handler.Trigger(source);
            this.repository.resolves.delete(source.id);
        }
        this.onDataSourceSet.Trigger(source);
    }
    addOnSourceSetHandler(sourceId, handler) {
        this.repository.addHandler(sourceId, handler);
    }
    removeOnSourceSetHandler(sourceId, handler) {
        this.repository.removeHandler(sourceId, handler);
    }
    tryToGetSource(sourceId) {
        return this.repository.tryToGet(sourceId);
    }
    waitToGetSourceAsync(sourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            var retVal = this.tryToGetSource(sourceId);
            if (!retVal) {
                retVal = yield this.repository.waitToGetAsync(sourceId);
            }
            return retVal;
        });
    }
    setAsSource(sourceId, data, options, preview) {
        var source = new _data_Source__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(sourceId, data, options);
        this.setSource(source, preview);
    }
    setSource(source, preview) {
        const resultSource = this.repository.setSource(source, preview);
        this.onDataSourceSetHandler(resultSource);
    }
    setSourceFromOwner(source) {
        this.repository.setSourceFromOwner(source);
        this.onDataSourceSetHandler(source);
    }
    dispose() { }
}


/***/ }),

/***/ 1152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9627);
/* harmony import */ var _options_HostOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7265);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1515);
/* harmony import */ var _RootContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7389);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let LocalRootContext = class LocalRootContext extends _RootContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A {
    constructor(repository, owner, options) {
        super(repository, options, owner.logger);
        this.owner = owner;
        this.handler = this.owner.onDataSourceSet.Add(this.setSourceFromOwner.bind(this));
    }
    tryToGetSource(sourceId) {
        var _a;
        return ((_a = super.tryToGetSource(sourceId)) !== null && _a !== void 0 ? _a : this.owner.tryToGetSource(sourceId));
    }
    dispose() {
        this.owner.onDataSourceSet.Remove(this.handler);
    }
};
LocalRootContext = __decorate([
    (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .injectable */ ._G)(),
    __param(0, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("IContextRepository")),
    __param(1, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("parent.context")),
    __metadata("design:paramtypes", [Object, _Context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        _options_HostOptions__WEBPACK_IMPORTED_MODULE_1__/* .HostOptions */ .j])
], LocalRootContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalRootContext);


/***/ }),

/***/ 7389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ RootContext)
});

// EXTERNAL MODULE: ./src/exception/ClientException.ts
var ClientException = __webpack_require__(4862);
// EXTERNAL MODULE: ./src/exception/ConfigNotFoundException.ts
var ConfigNotFoundException = __webpack_require__(2724);
;// CONCATENATED MODULE: ./src/options/connection-options/ConnectionOptions.ts

class ConnectionOptions {
    constructor(name) {
        this.Name = name;
    }
    ParseJsonString(json) {
        try {
            var obj = JSON.parse(json);
            return this.ConvertObject(obj);
        }
        catch (ex) {
            throw new ClientException/* default */.A(`Invalid Json Format:${json}.${ex}`);
        }
    }
    ConvertObject(obj) {
        var retVal = new ParsedData();
        try {
            retVal.Setting = obj["_"];
        }
        catch (_a) { }
        Object.getOwnPropertyNames(obj).forEach((tblName) => {
            if (tblName !== "_") {
                var rawTbl = obj[tblName];
                var cols = rawTbl.shift();
                //for add case insensitive to alasql lib
                //cols = cols?.map((x) => x.toLowerCase().trim()) ?? [];
                var rows = new Array();
                rawTbl.forEach((rawRow) => {
                    var row = {};
                    cols.forEach((col, index) => {
                        row[col] = rawRow[index];
                    });
                    rows.push(row);
                });
                retVal.Tables.push(new Pair(tblName, rows));
            }
        });
        return retVal;
    }
}
class ParsedData {
    constructor() {
        this.Tables = [];
    }
}
class Pair {
    constructor(Key, Value) {
        this.Key = Key;
        this.Value = Value;
    }
}

// EXTERNAL MODULE: ./src/data/Data.ts
var Data = __webpack_require__(2865);
;// CONCATENATED MODULE: ./src/options/connection-options/LocalStorageConnectionOptions.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class LocalStorageConnectionOptions extends ConnectionOptions {
    constructor(name, setting, context) {
        super(name);
        this.context = context;
        if (typeof setting === "string") {
            var parts = setting.split("|");
            this.Url = parts[0];
            if (parts.length != 2) {
                throw new ClientException/* default */.A(`For Local Storage Connection '${name}', Setting In Not Valid`);
            }
            this.FunctionName = parts[1];
        }
        else {
            this.Url = setting.Url;
            this.FunctionName = setting.Function;
        }
        this.Function = null;
    }
    LoadLibAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.Function) {
                this.Function = yield $bc.util.getLibAsync(this.FunctionName, this.Url);
            }
        });
    }
    TestConnectionAsync(context) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.LoadLibAsync();
            return this.FunctionName !== null;
        });
    }
    loadDataAsync(context, sourceId, parameters, onDataReceived) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.LoadLibAsync();
            var tmp = yield this.Function(parameters);
            var data = this.ConvertObject(tmp);
            onDataReceived(data.Tables.map((x) => new Data/* default */.A(x.Key, x.Value)));
        });
    }
    loadPageAsync(context, pageName, parameters) {
        throw new ClientException/* default */.A("LoadPageAsync Method not Supported In LocalStorage Provider.");
    }
}

// EXTERNAL MODULE: ./src/event/EventManager.ts
var EventManager = __webpack_require__(9280);
;// CONCATENATED MODULE: ./src/options/connection-options/PushConnectionOptions.ts



class PushConnectionOptions extends ConnectionOptions {
    constructor(name, setting) {
        super(name);
        this._key = setting;
        this.manager = new EventManager/* default */.A();
        $bc.util.addMessageHandler(this._key, this.processMessage.bind(this));
    }
    processMessage(message) {
        console.log("push message receive", message);
        if (message === null || message === void 0 ? void 0 : message.sources) {
            const dataList = message.sources.map((x) => { var _a, _b; return new Data/* default */.A((_b = (_a = x.options) === null || _a === void 0 ? void 0 : _a.tableName) !== null && _b !== void 0 ? _b : "cms.no-name", x.data, x.options); });
            this.manager.Trigger(dataList);
        }
    }
    TestConnectionAsync(context) {
        throw new Error("TestConnection not support in PushConnectionOptions.");
    }
    loadDataAsync(context, sourceId, parameters, onDataReceived) {
        this.manager.Add(onDataReceived);
        return Promise.resolve();
    }
    loadPageAsync(context, pageName, parameters, method) {
        throw new Error("loadPage not support in PushConnectionOptions.");
    }
}

;// CONCATENATED MODULE: ./src/options/connection-options/UrlBaseConnectionOptions.ts

class UrlBaseConnectionOptions extends ConnectionOptions {
    constructor(name, setting) {
        super(name);
        if (typeof setting === "string") {
            this.Url = setting;
        }
        else {
            this.Url = setting.url;
            this.Heartbeat = setting.heartbeat;
            this.Verb = setting.verb;
            this.HeartbeatVerb = setting.heartbeatverb;
        }
    }
}

;// CONCATENATED MODULE: ./src/options/connection-options/RESTConnectionOptions.ts


class RESTConnectionOptions extends UrlBaseConnectionOptions {
    constructor(name, setting) {
        super(name, setting);
    }
    TestConnectionAsync(context) {
        throw new Error("Method not implemented.");
    }
    loadDataAsync(context, sourceId, parameters, onDataReceived) {
        throw new Error("Method not implemented.");
    }
    loadPageAsync(context, pageName, parameters, method) {
        throw new ClientException/* default */.A("LoadPageAsync Method not Supported In REST API Provider.");
    }
}

// EXTERNAL MODULE: ./src/Util.ts
var Util = __webpack_require__(2130);
;// CONCATENATED MODULE: ./src/options/connection-options/WebConnectionOptions.ts
var WebConnectionOptions_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class WebConnectionOptions extends UrlBaseConnectionOptions {
    constructor(name, setting) {
        super(name, setting);
    }
    TestConnectionAsync(context) {
        var _a;
        return WebConnectionOptions_awaiter(this, void 0, void 0, function* () {
            var isOk;
            if (Util/* default */.A.HasValue(this.Heartbeat)) {
                try {
                    yield WebConnectionOptions.ajax(this.Heartbeat, (_a = this.HeartbeatVerb) !== null && _a !== void 0 ? _a : context.options.getDefault("source.heartbeatverb"));
                    isOk = true;
                }
                catch (_b) {
                    isOk = false;
                }
            }
            else {
                isOk = true;
            }
            return isOk;
        });
    }
    loadDataAsync(context, sourceId, parameters, onDataReceived) {
        var _a;
        return WebConnectionOptions_awaiter(this, void 0, void 0, function* () {
            var rawJson = yield WebConnectionOptions.ajax(this.Url, (_a = this.Verb) !== null && _a !== void 0 ? _a : context.options.getDefault("source.verb"), parameters);
            const json = JSON.parse(rawJson);
            onDataReceived(json.sources.map((x) => new Data/* default */.A(x.options.tableName, x.data, x.options)));
        });
    }
    loadPageAsync(context, pageName, parameters, method) {
        var _a;
        return WebConnectionOptions_awaiter(this, void 0, void 0, function* () {
            return yield WebConnectionOptions.ajax(`${this.Url}${pageName !== null && pageName !== void 0 ? pageName : ""}`, (_a = method !== null && method !== void 0 ? method : this.Verb) !== null && _a !== void 0 ? _a : context.options.getDefault("call.verb"), parameters);
        });
    }
    static ajax(url, method, parameters = null) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open(method, url, true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onload = function (e) {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    }
                    else {
                        reject(xhr.statusText);
                    }
                }
            };
            xhr.onerror = function (e) {
                reject(xhr.statusText);
            };
            var encodedDataPairs;
            if (Util/* default */.A.HasValue(parameters)) {
                encodedDataPairs = [];
                ///https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
                Object.getOwnPropertyNames(parameters).forEach((name, _i, _) => encodedDataPairs.push(encodeURIComponent(name) +
                    "=" +
                    encodeURIComponent(parameters[name])));
                encodedDataPairs = encodedDataPairs.join("&").replace(/%20/g, "+");
            }
            xhr.send(encodedDataPairs);
        });
    }
}

// EXTERNAL MODULE: ./src/options/connection-options/StreamPromise.ts
var StreamPromise = __webpack_require__(9608);
;// CONCATENATED MODULE: ./src/options/connection-options/WebSocketConnectionOptions.ts



class WebSocketConnectionOptions extends ConnectionOptions {
    constructor(name, setting) {
        super(name);
        this.activeSockets = new Map();
        this.maxRetry = 5;
        if (typeof setting === "string") {
            this.url = setting;
        }
        else {
            this.url = setting.Connection;
        }
    }
    loadDataAsync(context, sourceId, parameters, onDataReceived) {
        const url = this.url;
        const maxRetry = this.maxRetry;
        const activeSockets = this.activeSockets;
        const preOpenSocket = activeSockets.get(sourceId);
        if (preOpenSocket) {
            preOpenSocket.close();
            context.logger.logInformation("Disconnect from %s by client request", url);
            activeSockets.delete(sourceId);
        }
        return new StreamPromise/* default */.A(this.Name, (resolve, reject) => {
            let retry = 0;
            function initAndConnect(reconnect) {
                retry++;
                const socket = new WebSocket(url);
                let error = null;
                socket.onopen = (e) => {
                    activeSockets.set(sourceId, socket);
                    console.log("%s %s", url, reconnect ? "Reconnected" : "Connected");
                    socket.send(JSON.stringify(parameters));
                };
                socket.onclose = (e) => {
                    activeSockets.delete(sourceId);
                    if (error != null) {
                        context.logger.logInformation("Try reconnect To %s", url);
                        if (retry < maxRetry) {
                            initAndConnect(true);
                            error = null;
                        }
                        else {
                            reject(error);
                        }
                    }
                    else {
                        resolve();
                        context.logger.logInformation(`${url} Disconnected`);
                    }
                };
                socket.onerror = (e) => {
                    context.logger.logError(`Error On '${url}'`, e);
                    error = e;
                };
                socket.onmessage = (e) => {
                    try {
                        var json = JSON.parse(e.data);
                        if (json.setting &&
                            json.setting.keepalive !== undefined &&
                            !json.setting.keepalive) {
                            context.logger.logInformation("Disconnect from %s by server request", url);
                            socket.close();
                        }
                        if (json.sources) {
                            const dataList = json === null || json === void 0 ? void 0 : json.sources.map((x) => new Data/* default */.A(x.options.tableName, x.data, x.options));
                            if (dataList.length > 0) {
                                const receiverIsOk = onDataReceived(dataList);
                                if (!receiverIsOk) {
                                    context.logger.logInformation("Disconnect from %s by receiver request. maybe disposed!", url);
                                    socket.close();
                                }
                            }
                        }
                    }
                    catch (ex) {
                        context.logger.logError("Error in process WebSocket received message", ex);
                    }
                };
            }
            initAndConnect(false);
        }, () => { var _a; return (_a = this.activeSockets.get(sourceId)) !== null && _a !== void 0 ? _a : null; });
    }
    TestConnectionAsync(context) {
        return Promise.resolve(true);
    }
    loadPageAsync(context, pageName, parameters) {
        throw new Error("WebSocket call not implemented.");
    }
}

;// CONCATENATED MODULE: ./src/options/connection-options/ConnectionOptionsManager.ts






class ConnectionOptionsManager {
    constructor(hostSettings, context) {
        this.connections = new Map();
        Object.getOwnPropertyNames(hostSettings)
            .map((x) => {
            var _a, _b;
            var parts = x.split(".", 3);
            return {
                type: (_a = parts[0]) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase(),
                provider: (_b = parts[1]) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase(),
                name: parts[2],
                value: hostSettings[x],
            };
        })
            .filter((x) => x.type.isEqual("connection"))
            .forEach((x) => {
            var obj;
            switch (x.provider) {
                case "web": {
                    obj = new WebConnectionOptions(x.name, x.value);
                    break;
                }
                case "websocket": {
                    obj = new WebSocketConnectionOptions(x.name, x.value);
                    break;
                }
                case "local": {
                    obj = new LocalStorageConnectionOptions(x.name, x.value, context);
                    break;
                }
                case "rest": {
                    obj = new RESTConnectionOptions(x.name, x.value);
                    break;
                }
                case "push": {
                    obj = new PushConnectionOptions(x.name, x.value);
                    break;
                }
            }
            this.connections.set(obj.Name, obj);
        });
    }
    getConnection(connectionName) {
        var retVal = this.connections.get(connectionName);
        if (!retVal) {
            throw new ConfigNotFoundException/* default */.A("host.settings", connectionName);
        }
        return retVal;
    }
}

// EXTERNAL MODULE: ./src/context/Context.ts
var Context = __webpack_require__(1515);
;// CONCATENATED MODULE: ./src/context/RootContext.ts
var RootContext_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class RootContext extends Context/* default */.A {
    constructor(repository, options, logger) {
        super(repository, options, logger);
        this.loadLibDic = {};
        this.connections = new ConnectionOptionsManager(options.settings, this);
        this.addHostOptionsSource();
    }
    loadPageAsync(pageName, parameters, method, url) {
        const provider = url
            ? new WebConnectionOptions(url, url)
            : this.connections.getConnection("callcommand");
        return provider.loadPageAsync(this, pageName, parameters, method);
    }
    loadDataAsync(sourceId, connectionName, parameters, onDataReceived) {
        let connectionInfo = this.connections.getConnection(connectionName);
        return connectionInfo.loadDataAsync(this, sourceId, parameters, onDataReceived);
    }
    getOrLoadDbLibAsync() {
        return RootContext_awaiter(this, void 0, void 0, function* () {
            let retVal;
            if (typeof alasql === "undefined") {
                if (Util/* default */.A.IsNullOrEmpty(this.options.dbLibPath)) {
                    throw new ClientException/* default */.A(`Error in load 'alasql'. 'DbLibPath' not configure properly in host object.`);
                }
                retVal = yield $bc.util.getLibAsync("alasql", this.options.dbLibPath);
            }
            else {
                retVal = alasql;
            }
            return retVal;
        });
    }
    addHostOptionsSource() {
        if (this.options.sources) {
            Object.getOwnPropertyNames(this.options.sources).forEach((key) => {
                const source = this.options.sources[key];
                if (source instanceof Array) {
                    this.setAsSource(key.toLowerCase(), source);
                }
                else {
                    this.setAsSource(key.toLowerCase(), source.data, source.options);
                }
            });
        }
    }
}


/***/ }),

/***/ 2865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Data)
/* harmony export */ });
class Data {
    constructor(id, data, options) {
        this.id = id;
        this.options = options;
        if (Array.isArray(data)) {
            this.rows = data;
        }
        else if (typeof data === "object") {
            this.rows = [data];
        }
        else {
            this.rows = [{ value: data }];
        }
    }
}


/***/ }),

/***/ 2164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Source)
/* harmony export */ });
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3503);

class Source {
    get id() {
        return this._id;
    }
    get rows() {
        return this._rows;
    }
    get versions() {
        return this._versions;
    }
    constructor(id, data, options) {
        var _a;
        this._id = id.toLowerCase();
        this.mergeType = (_a = options === null || options === void 0 ? void 0 : options.mergeType) !== null && _a !== void 0 ? _a : _enum__WEBPACK_IMPORTED_MODULE_0__/* .MergeType */ .Bt.replace;
        this.keyFieldName = options === null || options === void 0 ? void 0 : options.keyFieldName;
        this.statusFieldName = options === null || options === void 0 ? void 0 : options.statusFieldName;
        this.extra = options === null || options === void 0 ? void 0 : options.extra;
        if (Array.isArray(data)) {
            this._rows = data;
        }
        else if (typeof data === "object") {
            this._rows = [data];
        }
        else {
            this._rows = [{ value: data }];
        }
        this._versions = Array(this._rows.length).fill(0);
    }
    cloneOptions() {
        return {
            keyFieldName: this.keyFieldName,
            mergeType: this.mergeType,
            statusFieldName: this.statusFieldName,
            extra: this.extra,
        };
    }
    removeRowFormIndex(index) {
        this._rows.splice(index, 1);
        this._versions.splice(index, 1);
    }
    replaceRowFromIndex(index, newRow) {
        this._rows.splice(index, 1, newRow);
        this._versions[index] += 1;
    }
    addRow(row) {
        this._rows.push(row);
        this._versions.push(0);
    }
    addRows(rows) {
        this.rows.splice(this.rows.length, rows.length, ...rows);
        this._versions.splice(this.rows.length, rows.length, ...Array(rows.length));
    }
    getVersion(row) {
        const index = this._rows.indexOf(row);
        return index != -1 ? this._versions[index] : 0;
    }
    replace(source) {
        var _a;
        const oldCount = this._rows.length;
        const newCount = source.rows.length;
        this._rows.splice(0, oldCount, ...source.rows);
        if (oldCount > newCount) {
            this._versions.splice(newCount, oldCount - newCount);
        }
        else if (oldCount < newCount) {
            this._versions.splice(newCount, 0, ...Array(newCount - oldCount).fill(-1));
        }
        this._versions.forEach((ver, index, arr) => (arr[index] = ++ver));
        this.mergeType = (_a = source.mergeType) !== null && _a !== void 0 ? _a : _enum__WEBPACK_IMPORTED_MODULE_0__/* .MergeType */ .Bt.replace;
        this.keyFieldName = source.keyFieldName;
        this.statusFieldName = source.statusFieldName;
        this.extra = source.extra;
    }
}


/***/ }),

/***/ 3503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bt: () => (/* binding */ MergeType),
/* harmony export */   JO: () => (/* binding */ JoinType),
/* harmony export */   bx: () => (/* binding */ Priority),
/* harmony export */   q4: () => (/* binding */ FaceRowType),
/* harmony export */   t3: () => (/* binding */ DataStatus)
/* harmony export */ });
var FaceRowType;
(function (FaceRowType) {
    FaceRowType[FaceRowType["NotSet"] = 0] = "NotSet";
    FaceRowType[FaceRowType["Odd"] = 1] = "Odd";
    FaceRowType[FaceRowType["Even"] = 2] = "Even";
})(FaceRowType || (FaceRowType = {}));
var MergeType;
(function (MergeType) {
    MergeType[MergeType["replace"] = 0] = "replace";
    MergeType[MergeType["append"] = 1] = "append";
})(MergeType || (MergeType = {}));
var JoinType;
(function (JoinType) {
    JoinType[JoinType["innerjoin"] = 0] = "innerjoin";
    JoinType[JoinType["leftjoin"] = 1] = "leftjoin";
    JoinType[JoinType["rightjoin"] = 2] = "rightjoin";
})(JoinType || (JoinType = {}));
var Priority;
(function (Priority) {
    Priority[Priority["high"] = 0] = "high";
    Priority[Priority["normal"] = 1] = "normal";
    Priority[Priority["low"] = 2] = "low";
    Priority[Priority["none"] = 3] = "none";
})(Priority || (Priority = {}));
var DataStatus;
(function (DataStatus) {
    DataStatus[DataStatus["added"] = 0] = "added";
    DataStatus[DataStatus["edited"] = 1] = "edited";
    DataStatus[DataStatus["deleted"] = 2] = "deleted";
})(DataStatus || (DataStatus = {}));


/***/ }),

/***/ 9280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ EventManager)
/* harmony export */ });
class EventManager {
    constructor() {
        this.handlers = new Set();
    }
    Add(handler) {
        let retVal = null;
        if (typeof handler !== "function") {
            throw "handler null or is not function!";
        }
        if (!this.handlers.has(handler)) {
            this.handlers.add(handler);
            retVal = handler;
        }
        return retVal;
    }
    Remove(handler) {
        let retVal = null;
        if (this.handlers.has(handler)) {
            this.handlers.delete(handler);
            retVal = handler;
        }
        return retVal;
    }
    Trigger(args) {
        this.handlers.forEach((handler) => {
            try {
                handler(args);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}


/***/ }),

/***/ 4862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ClientException)
/* harmony export */ });
class ClientException extends Error {
    constructor(message) {
        super(message);
    }
}


/***/ }),

/***/ 2724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ConfigNotFoundException)
/* harmony export */ });
/* harmony import */ var _ClientException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4862);

class ConfigNotFoundException extends _ClientException__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A {
    constructor(configFile, configKey) {
        super(`In '${configFile}' object, property '${configKey}' not configured!`);
    }
}


/***/ }),

/***/ 3995:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _exception_ClientException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4862);
/* harmony import */ var _token_TokenUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1732);
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);



Object.defineProperty(String.prototype, "Evaluating", {
    value: function Evaluating() {
        var _a;
        try {
            return _Util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.isEqual((_a = eval(this.toString())) === null || _a === void 0 ? void 0 : _a.toString(), "true");
        }
        catch (er) {
            throw new _exception_ClientException__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`Error In Evaluating '${this.toString()}': ${er}`);
        }
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(String.prototype, "ToObjectToken", {
    value: function ToObjectToken(context) {
        return _token_TokenUtil__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ToObjectToken(this.toString(), context);
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(String.prototype, "ToStringToken", {
    value: function ToStringToken(context) {
        return _token_TokenUtil__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ToStringToken(this.toString(), context);
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(String.prototype, "ToIntegerToken", {
    value: function ToIntegerToken(context) {
        return _token_TokenUtil__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ToIntegerToken(this.toString(), context);
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(String.prototype, "ToBooleanToken", {
    value: function ToBooleanToken(context) {
        return _token_TokenUtil__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ToBooleanToken(this.toString(), context);
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(String.prototype, "isEqual", {
    value: function isEqual(value) {
        var stringA = this.toString();
        return (stringA.localeCompare(value !== null && value !== void 0 ? value : "", undefined, {
            sensitivity: "accent",
        }) == 0);
    },
    writable: true,
    configurable: true,
});


/***/ }),

/***/ 7265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ HostOptions)
/* harmony export */ });
/* harmony import */ var tsyringe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9627);
/* harmony import */ var _exception_ConfigNotFoundException__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2724);
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2130);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8422);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7193);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HostOptions_1;





let HostOptions = HostOptions_1 = class HostOptions {
    static get defaultSettings() {
        if (!HostOptions_1._defaultSettings) {
            let defaults = {
                debug: false,
                autoRender: true,
                serviceWorker: false,
                dbLibPath: "/alasql.min.js",
                settings: {
                    "default.binding.regex": /\[##([^#]*)##\]/,
                    "default.binding.codeblock-regex": /{{((?:[^{}][{}]?)*)}}/,
                    "default.binding.face-regex": /([^@]|^)@(?:([^@\s]+)@|([^@\s]+))/,
                    "default.call.verb": "POST",
                    "default.dmnid": "",
                    "default.source.verb": "POST",
                    "default.viewcommand.groupcolumn": "prpid",
                    "default.source.heartbeatverb": "GET",
                },
                repositories: {},
            };
            if (typeof host != "undefined") {
                defaults = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_3___default()(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4___default()(host), defaults);
            }
            HostOptions_1._defaultSettings = defaults;
        }
        return HostOptions_1._defaultSettings;
    }
    constructor(options) {
        const originalOptions = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4___default()(options);
        if (options !== HostOptions_1.defaultSettings) {
            options = lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_3___default()(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4___default()(options), HostOptions_1.defaultSettings);
            Object.assign(this, options);
        }
        else {
            Object.assign(this, lodash_clonedeep__WEBPACK_IMPORTED_MODULE_4___default()(options));
        }
        this.originalOptions = originalOptions;
    }
    getDefault(key, defaultValue = null) {
        return this.getSetting(`default.${key}`, defaultValue);
    }
    getSetting(key, defaultValue) {
        var find = Object.getOwnPropertyNames(this.settings).filter((x) => _Util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.isEqual(x, key));
        var retVal = find.length == 1 ? this.settings[find[0]] : null;
        if (!retVal) {
            if (defaultValue !== undefined) {
                retVal = defaultValue;
            }
            else {
                throw new _exception_ConfigNotFoundException__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("host.settings", key);
            }
        }
        return retVal;
    }
};
HostOptions = HostOptions_1 = __decorate([
    (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .injectable */ ._G)(),
    __param(0, (0,tsyringe__WEBPACK_IMPORTED_MODULE_0__/* .inject */ .WQ)("IHostOptions")),
    __metadata("design:paramtypes", [Object])
], HostOptions);



/***/ }),

/***/ 9608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ StreamPromise)
/* harmony export */ });
class StreamPromise extends Promise {
    constructor(connectionName, executor, getSocket) {
        super(executor);
        this.connectionName = connectionName;
        this.getSocket = getSocket;
    }
    send(parameters) {
        const socket = this.getSocket();
        socket === null || socket === void 0 ? void 0 : socket.send(JSON.stringify(parameters));
    }
    get isOpen() {
        return this.getSocket() == null ? false : true;
    }
}


/***/ }),

/***/ 9399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CodeBlockToken)
/* harmony export */ });
/* harmony import */ var _type_alias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5939);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CodeBlockToken {
    constructor(expression, context) {
        this.context = context;
        expression = expression.replaceAll("&quot;", '"');
        this.fn = new _type_alias__WEBPACK_IMPORTED_MODULE_0__/* .AsyncFunction */ .f("$bc", "$data", `try{
        ${expression}
      }catch(e){
        console.error(e);
        return e;
      }`);
        const r = /\$bc\.(?:waitToGetSourceAsync|tryToGetSource)\('(.*)'\)/g;
        const matches = expression.matchAll(r);
        if (matches) {
            this.sourceNames = new Array();
            for (const match of matches) {
                this.sourceNames.push(match[1]);
            }
        }
    }
    getValueAsync(wait) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = (yield this.fn(this.context))) !== null && _a !== void 0 ? _a : "";
        });
    }
    executeAsync(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = (yield this.fn(this.context, data))) !== null && _a !== void 0 ? _a : "";
        });
    }
    getSourceNames() {
        return this.sourceNames;
    }
    getDefault() {
        return "";
    }
}


/***/ }),

/***/ 1732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TokenUtil)
});

// EXTERNAL MODULE: ./src/Util.ts
var Util = __webpack_require__(2130);
// EXTERNAL MODULE: ./src/token/CodeBlockToken.ts
var CodeBlockToken = __webpack_require__(9399);
// EXTERNAL MODULE: ./src/token/base/ArrayToken.ts
var ArrayToken = __webpack_require__(6558);
// EXTERNAL MODULE: ./src/token/base/ObjectToken.ts + 2 modules
var ObjectToken = __webpack_require__(3980);
;// CONCATENATED MODULE: ./src/token/boolean/BooleanObject.ts

class BooleanObject extends ObjectToken/* default */.A {
    constructor(rawValue, context) {
        super(rawValue, context);
    }
    static tryParse(value) {
        return value == null ? null : value.toLowerCase() === "true";
    }
    tryParse(value) {
        return BooleanObject.tryParse(value);
    }
}

;// CONCATENATED MODULE: ./src/token/boolean/BooleanArray.ts


class BooleanArray extends ArrayToken/* default */.A {
    constructor(context, ...collection) {
        super(context, ...collection);
    }
    tryParse(value) {
        return BooleanObject.tryParse(value);
    }
}

;// CONCATENATED MODULE: ./src/token/base/ValueToken.ts
class ValueToken {
    constructor(value, context) {
        this.context = context;
        this.value = value;
    }
    getDefault() {
        return this.value;
    }
    getSourceNames() {
        return new Array();
    }
    getValueAsync(wait = true) {
        return new Promise((resolve) => resolve(this.value));
    }
}

;// CONCATENATED MODULE: ./src/token/boolean/BooleanValue.ts

class BooleanValue extends ValueToken {
    constructor(data, context) {
        super(data, context);
    }
}

;// CONCATENATED MODULE: ./src/token/integer/IntegerArray.ts

class IntegerArray extends ArrayToken/* default */.A {
    constructor(context, ...collection) {
        super(context, ...collection);
    }
    tryParse(value) {
        let retVal = 0;
        try {
            retVal = parseInt(value);
        }
        catch (_a) {
            /*Nothing*/
        }
        return retVal;
    }
}

;// CONCATENATED MODULE: ./src/token/integer/IntegerObject.ts

class IntegerObject extends ObjectToken/* default */.A {
    constructor(rawValue, context) {
        super(rawValue, context);
    }
    tryParse(value) {
        let retVal = 0;
        try {
            retVal = parseInt(value);
        }
        catch (_a) {
            /*Nothing*/
        }
        return retVal;
    }
}

;// CONCATENATED MODULE: ./src/token/integer/IntegerValue.ts

class IntegerValue extends ValueToken {
    constructor(data, context) {
        super(data, context);
    }
}

;// CONCATENATED MODULE: ./src/token/string/StringArray.ts

class StringArray extends ArrayToken/* default */.A {
    constructor(context, ...collection) {
        super(context, ...collection);
    }
    tryParse(value) {
        return value;
    }
}

;// CONCATENATED MODULE: ./src/token/string/StringObject.ts

class StringObject extends ObjectToken/* default */.A {
    constructor(rawValue, context) {
        super(rawValue, context);
    }
    tryParse(value) {
        return value;
    }
}

;// CONCATENATED MODULE: ./src/token/string/StringValue.ts

class StringValue extends ValueToken {
    constructor(data, context) {
        super(data, context);
    }
}

// EXTERNAL MODULE: ./src/token/object/ObjectArray.ts
var ObjectArray = __webpack_require__(9660);
// EXTERNAL MODULE: ./src/token/object/ObjectObject.ts
var ObjectObject = __webpack_require__(7142);
;// CONCATENATED MODULE: ./src/token/object/ObjectValue.ts

class ObjectValue extends ValueToken {
    constructor(data, context) {
        super(data, context);
    }
}

;// CONCATENATED MODULE: ./src/token/TokenUtil.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














class TokenUtil {
    static ToObjectToken(data, context) {
        return TokenUtil.ToToken(data, context, (x) => new ObjectValue(x, context), (x) => new ObjectObject/* default */.A(x, context), (...x) => new ObjectArray/* default */.A(context, ...x));
    }
    static ToStringToken(data, context) {
        return TokenUtil.ToToken(data, context, (x) => new StringValue(x, context), (x) => new StringObject(x, context), (...x) => new StringArray(context, ...x));
    }
    static ToIntegerToken(data, context) {
        return TokenUtil.ToToken(data, context, (x) => new IntegerValue(parseInt(x), context), (x) => new IntegerObject(x, context), (...x) => new IntegerArray(context, ...x));
    }
    static ToBooleanToken(data, context) {
        return TokenUtil.ToToken(data, context, (x) => new BooleanValue(Util/* default */.A.isEqual(x, "true"), context), (x) => new BooleanObject(x, context), (...x) => new BooleanArray(context, ...x));
    }
    static ToToken(content, context, newValueToken, newObjectToken, newArrayToken) {
        //https://javascript.info/regexp-methods
        var retVal;
        if (content) {
            const regex = context.options.getDefault("binding.regex");
            const blockRegex = context.options.getDefault("binding.codeblock-regex");
            var list = new Array();
            do {
                let match = content.match(regex);
                if (!match) {
                    match = content.match(blockRegex);
                    if (!match) {
                        list.push(newValueToken(content));
                        break;
                    }
                    else {
                        if (match.index != 0) {
                            list.push(newValueToken(content.substring(0, match.index)));
                        }
                        list.push(new CodeBlockToken/* default */.A(match[1], context));
                        content = content.substring(match.index + match[0].length);
                    }
                }
                else {
                    if (match.index != 0) {
                        list.push(newValueToken(content.substring(0, match.index)));
                    }
                    list.push(newObjectToken(match[1]));
                    content = content.substring(match.index + match[0].length);
                }
            } while (content.length > 0);
            if (list.length == 1) {
                retVal = list[0];
            }
            else {
                retVal = newArrayToken(...list);
            }
        }
        return retVal;
    }
    static GetValueOrSystemDefaultAsync(token, context, key) {
        return __awaiter(this, void 0, void 0, function* () {
            return token
                ? yield token.getValueAsync()
                : context.options.getDefault(key);
        });
    }
}


/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ArrayToken)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ArrayToken extends Array {
    constructor(context, ...data) {
        super(...data);
        this.context = context;
    }
    getDefault() {
        const value = this.reduce((r, x) => { var _a; return (r += (_a = x.getDefault()) !== null && _a !== void 0 ? _a : ""); }, "");
        return this.tryParse(value);
    }
    getSourceNames() {
        return this.reduce((r, x) => r.concat(x.getSourceNames()), new Array());
    }
    getValueAsync(wait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            var tasks = new Array();
            this.forEach((token) => tasks.push(token.getValueAsync(wait)));
            var result = yield Promise.all(tasks);
            var retVal = this.tryParse(result.join(""));
            return retVal;
        });
    }
}


/***/ }),

/***/ 3980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ObjectToken)
});

;// CONCATENATED MODULE: ./src/token/token-element/SourceTokenElement.ts
class SourceTokenElement {
    constructor(parts, expression) {
        this.source = parts[0].toLowerCase();
        this.member = parts[1].toLowerCase();
        this.column = parts.length > 2 ? parts.slice(2).join(".") : null;
        this.expression = expression;
        this.extractValue = new Function("source", `let retVal = null;
      if (source.rows.length == 1) {
        try{
        retVal = source.rows[0].${this.column};
        }catch(e){
          try{
            retVal = source.rows[0]['${this.column}'];
          }catch{
            throw e;
          }
        }
      } else if (source.rows.length > 1) {
        retVal = source.rows
              .map((row) => row.${this.column});
      }
      return retVal;`);
        // this.extractValue = new Function(
        //   "source",
        //   `const ${this.source}={${this.member}:source.rows.length == 1? source.rows[0]:source.rows}; return ${expression}??null;`
        // ) as any;
    }
    get sourceName() {
        return `${this.source}.${this.member}`;
    }
}

;// CONCATENATED MODULE: ./src/token/token-element/ValueTokenElement.ts
class ValueTokenElement {
    constructor(value) {
        this.value = value;
    }
}

;// CONCATENATED MODULE: ./src/token/base/ObjectToken.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ObjectToken {
    constructor(rawValue, context) {
        this.context = context;
        this.parts = rawValue.split("|").map((part) => {
            var partSlices = part.split(".");
            const matchValue = partSlices[0].match(/^\s*\((.*)\)\s*$/);
            return matchValue
                ? new ValueTokenElement(this.tryParse(matchValue[1]))
                : new SourceTokenElement(partSlices, part);
        });
    }
    getDefault() {
        var _a, _b;
        var part = this.parts.filter((x) => x instanceof ValueTokenElement);
        return (_b = (_a = part[0]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : null;
    }
    getSourceNames() {
        return this.parts
            .filter((x) => x instanceof SourceTokenElement)
            .map((x) => x.sourceName);
    }
    getValueAsync(wait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            var retVal = null;
            for (var i = 0; i < this.parts.length; i++) {
                var item = this.parts[i];
                if (item instanceof ValueTokenElement) {
                    retVal = item.value;
                }
                else if (item instanceof SourceTokenElement) {
                    if (item.member) {
                        const sourceName = item.sourceName;
                        var source = this.context.tryToGetSource(sourceName);
                        if (item.column) {
                            if (source == null) {
                                //if is last item
                                if (i + 1 == this.parts.length) {
                                    if (item.source === "cms") {
                                        break;
                                    }
                                    if (wait) {
                                        source = yield this.context.waitToGetSourceAsync(sourceName);
                                    }
                                    else {
                                        break;
                                    }
                                }
                                else {
                                    continue;
                                }
                            }
                            let value = null;
                            try {
                                value = item.extractValue(source);
                            }
                            catch (ex) {
                                /*Nothing*/
                            }
                            if (value != null && value !== "") {
                                retVal = value; //this.tryParse(value);
                                break;
                            }
                            else {
                                continue;
                            }
                        }
                        else {
                            retVal = this.tryParse(source ? "true" : "false");
                            break;
                        }
                    }
                    else {
                        const result = yield this.context.checkSourceHeartbeatAsync(item.source);
                        retVal = this.tryParse(result.toString());
                        break;
                    }
                }
            }
            return retVal;
        });
    }
}


/***/ }),

/***/ 9660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ObjectArray)
/* harmony export */ });
/* harmony import */ var _base_ArrayToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6558);

class ObjectArray extends _base_ArrayToken__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A {
    constructor(context, ...collection) {
        super(context, ...collection);
    }
    tryParse(value) {
        return eval(value);
    }
}


/***/ }),

/***/ 7142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ObjectObject)
/* harmony export */ });
/* harmony import */ var _base_ObjectToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3980);

class ObjectObject extends _base_ObjectToken__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A {
    constructor(rawValue, context) {
        super(rawValue, context);
    }
    tryParse(value) {
        return eval(value);
    }
}


/***/ }),

/***/ 5939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ AsyncFunction)
/* harmony export */ });
const AsyncFunction = eval("Object.getPrototypeOf(async function () {}).constructor");


/***/ }),

/***/ 9824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ SourceWrapper)
/* harmony export */ });
/* harmony import */ var _data_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2865);
/* harmony import */ var _data_Source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2164);
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2130);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class SourceWrapper {
    new(sourceId, data, options) {
        return new _data_Source__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(sourceId, data, options);
    }
    sortAsync(source, sort, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const lib = yield context.getOrLoadDbLibAsync();
            return new _data_Source__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(source.id, lib(`SELECT * FROM ? order by ${sort}`, [source.rows]), source.cloneOptions());
        });
    }
    filterAsync(source, filter, context) {
        return __awaiter(this, void 0, void 0, function* () {
            var retVal;
            if (this.isNullOrEmpty(filter)) {
                retVal = source.rows;
            }
            else {
                var lib = yield context.getOrLoadDbLibAsync();
                retVal = lib(`SELECT * FROM ? [${source.id}] where ${filter}`, [
                    source.rows,
                ]);
            }
            return retVal;
        });
    }
    isNullOrEmpty(data) {
        return data === undefined || data == null || data === "";
    }
    runSqlAsync(source, sql, context) {
        return __awaiter(this, void 0, void 0, function* () {
            const lib = yield context.getOrLoadDbLibAsync();
            return new _data_Source__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(source.id, lib(_Util__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ReplaceEx(sql, `\\[${source.id}\\]`, "?"), [source.rows]), source.cloneOptions());
        });
    }
    data(id, data, options) {
        return new _data_Data__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(id, data, options);
    }
}


/***/ }),

/***/ 4335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UtilWrapper)
/* harmony export */ });
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7193);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SourceWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9824);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8422);
/* harmony import */ var lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _exception_ClientException__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4862);
/* harmony import */ var _event_EventManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9280);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class UtilWrapper {
    constructor() {
        this.source = new _SourceWrapper__WEBPACK_IMPORTED_MODULE_1__/* .SourceWrapper */ .z();
        this.parser = new DOMParser();
        this._messageHandlers = null;
        if ("serviceWorker" in navigator) {
            this._messageHandlers = new Map();
            window.addEventListener("load", () => {
                navigator.serviceWorker.addEventListener("message", (event) => {
                    const type = event.data.type;
                    const message = event.data.message;
                    if (type) {
                        if (this._messageHandlers.has(type)) {
                            const handler = this._messageHandlers.get(type);
                            handler.Trigger(message);
                        }
                    }
                });
            });
        }
    }
    getRandomName(prefix, postfix) {
        return `${prefix !== null && prefix !== void 0 ? prefix : ""}_${new Date().getTime()}_${Math.random()
            .toString(36)
            .substring(2)}_${postfix !== null && postfix !== void 0 ? postfix : ""}`;
    }
    storeAsGlobal(data, name, prefix, postfix) {
        if (!name) {
            name = this.getRandomName(prefix, postfix);
        }
        Reflect.set(window, name, data);
        return name;
    }
    cloneDeep(obj) {
        return lodash_clonedeep__WEBPACK_IMPORTED_MODULE_0___default()(obj);
    }
    getLibAsync(objectName, url) {
        let retVal = null;
        //if (!Util.typeExist(objectName)) {
        let type = "undefined";
        try {
            type = eval(`typeof(${objectName})`);
        }
        catch (e) {
            /*Nothing*/
        }
        if (type === "undefined") {
            retVal = new Promise((resolve, reject) => {
                let script = document.querySelector(`script[src='${url}']`);
                if (!script) {
                    script = document.createElement("script");
                    script.setAttribute("type", "text/javascript");
                    script.setAttribute("src", url);
                    document.getElementsByTagName("head")[0].appendChild(script);
                }
                const loadListener = (_) => {
                    script.removeEventListener("load", loadListener);
                    script.removeEventListener("error", errorListener);
                    console.log("%s loaded from %s", objectName, url);
                    resolve(eval(objectName));
                };
                const errorListener = (error) => {
                    script.removeEventListener("load", loadListener);
                    script.removeEventListener("error", errorListener);
                    reject(error);
                };
                script.addEventListener("load", loadListener);
                script.addEventListener("error", errorListener);
            });
        }
        else {
            return Promise.resolve(eval(objectName));
        }
        return retVal;
    }
    defaultsDeep(data, defaults) {
        return lodash_defaultsdeep__WEBPACK_IMPORTED_MODULE_2___default()(this.cloneDeep(data), defaults);
    }
    toNode(rawHtml) {
        return document.createRange().createContextualFragment(rawHtml);
    }
    toHTMLElement(rawXML) {
        const xmlDocument = this.parser.parseFromString(rawXML, "application/xml");
        const XMLElementToHTMLElementConvertor = (xmlElement) => {
            const element = document.createElement(xmlElement.tagName);
            if (xmlElement.attributes) {
                for (let index = 0; index < xmlElement.attributes.length; index++) {
                    const attr = xmlElement.attributes[index];
                    element.setAttribute(attr.name, attr.value);
                }
            }
            if (element instanceof HTMLTextAreaElement) {
                element.innerHTML = xmlElement.innerHTML;
            }
            else {
                xmlElement.childNodes.forEach((child) => {
                    const childElement = child;
                    if (childElement.nodeType === Node.TEXT_NODE) {
                        const textContent = child.nodeValue.trim();
                        if (textContent.length > 0) {
                            element.appendChild(document.createTextNode(textContent));
                        }
                    }
                    else {
                        element.appendChild(XMLElementToHTMLElementConvertor(childElement));
                    }
                });
            }
            return element;
        };
        return xmlDocument.documentElement.tagName === "parsererror"
            ? xmlDocument.documentElement
            : XMLElementToHTMLElementConvertor(xmlDocument.documentElement);
    }
    toElement(rawXML) {
        const xmlDocument = this.parser.parseFromString(rawXML, "application/xml");
        const XMLElementToElementConvertor = (xmlElement, inSvg) => {
            inSvg || (inSvg = xmlElement.nodeName == "svg");
            // console.log(inSvg, xmlElement.nodeName, xmlElement.nodeName == "svg");
            const namespace = inSvg
                ? "http://www.w3.org/2000/svg"
                : "http://www.w3.org/1999/xhtml";
            const element = document.createElementNS(namespace, xmlElement.tagName);
            if (xmlElement.attributes) {
                for (let index = 0; index < xmlElement.attributes.length; index++) {
                    const attr = xmlElement.attributes[index];
                    element.setAttribute(attr.name, attr.value);
                }
            }
            if (element instanceof HTMLTextAreaElement) {
                element.innerHTML = xmlElement.innerHTML;
            }
            else {
                xmlElement.childNodes.forEach((child) => {
                    const childElement = child;
                    if (childElement.nodeType === Node.TEXT_NODE) {
                        const textContent = child.nodeValue.trim();
                        if (textContent.length > 0) {
                            element.appendChild(document.createTextNode(textContent));
                        }
                    }
                    else {
                        element.appendChild(XMLElementToElementConvertor(childElement, inSvg));
                    }
                });
            }
            return element;
        };
        return xmlDocument.documentElement.tagName === "parsererror"
            ? xmlDocument.documentElement
            : XMLElementToElementConvertor(xmlDocument.documentElement, false);
    }
    getComponentAsync(context, key) {
        return __awaiter(this, void 0, void 0, function* () {
            let retVal;
            if (key) {
                const lib = key.slice(key.indexOf(".") + 1);
                if (key.indexOf("local.") == 0) {
                    retVal = eval(lib);
                    console.log("%s loaded from local", lib);
                }
                else if (key.indexOf("basiscore.") == 0) {
                    retVal = eval(key);
                    console.log("%s loaded from basiscore", lib);
                }
                else {
                    let tmpKey = key;
                    while (true) {
                        const url = context.options.repositories[tmpKey];
                        if (url) {
                            retVal = yield this.getLibAsync(key, url);
                            break;
                        }
                        else {
                            const lastDotIndex = tmpKey.lastIndexOf(".");
                            if (lastDotIndex == -1) {
                                break;
                            }
                            tmpKey = tmpKey.slice(0, lastDotIndex);
                        }
                    }
                }
            }
            if (retVal) {
                return retVal;
            }
            throw new _exception_ClientException__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(`'${key}' related repository setting not found`);
        });
    }
    format(pattern, ...params) {
        return pattern.replace(/{(\d+)}/g, function (match, number) {
            return typeof params[number] !== "undefined" ? params[number] : match;
        });
    }
    addMessageHandler(messageType, handler) {
        let retVal = false;
        if (this._messageHandlers) {
            retVal = true;
            if (!this._messageHandlers.has(messageType)) {
                const manager = new _event_EventManager__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A();
                this._messageHandlers.set(messageType, manager);
            }
            const manager = this._messageHandlers.get(messageType);
            manager.Add(handler);
        }
        return retVal;
    }
}


/***/ }),

/***/ 9627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kL: () => (/* reexport */ instance),
  WQ: () => (/* reexport */ decorators_inject),
  _G: () => (/* reexport */ decorators_injectable),
  Gr: () => (/* reexport */ decorators_singleton)
});

// UNUSED EXPORTS: Lifecycle, autoInjectable, delay, injectAll, injectAllWithTransform, injectWithTransform, instanceCachingFactory, instancePerContainerCachingFactory, isClassProvider, isFactoryProvider, isNormalToken, isTokenProvider, isValueProvider, predicateAwareClassFactory, registry, scoped

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/types/lifecycle.js
var Lifecycle;
(function (Lifecycle) {
    Lifecycle[Lifecycle["Transient"] = 0] = "Transient";
    Lifecycle[Lifecycle["Singleton"] = 1] = "Singleton";
    Lifecycle[Lifecycle["ResolutionScoped"] = 2] = "ResolutionScoped";
    Lifecycle[Lifecycle["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
/* harmony default export */ const lifecycle = (Lifecycle);

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/types/index.js


;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function tslib_es6_extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function tslib_es6_rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/class-provider.js
function isClassProvider(provider) {
    return !!provider.useClass;
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/factory-provider.js
function isFactoryProvider(provider) {
    return !!provider.useFactory;
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/lazy-helpers.js

var DelayedConstructor = (function () {
    function DelayedConstructor(wrap) {
        this.wrap = wrap;
        this.reflectMethods = [
            "get",
            "getPrototypeOf",
            "setPrototypeOf",
            "getOwnPropertyDescriptor",
            "defineProperty",
            "has",
            "set",
            "deleteProperty",
            "apply",
            "construct",
            "ownKeys"
        ];
    }
    DelayedConstructor.prototype.createProxy = function (createObject) {
        var _this = this;
        var target = {};
        var init = false;
        var value;
        var delayedObject = function () {
            if (!init) {
                value = createObject(_this.wrap());
                init = true;
            }
            return value;
        };
        return new Proxy(target, this.createHandler(delayedObject));
    };
    DelayedConstructor.prototype.createHandler = function (delayedObject) {
        var handler = {};
        var install = function (name) {
            handler[name] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                args[0] = delayedObject();
                var method = Reflect[name];
                return method.apply(void 0, tslib_es6_spread(args));
            };
        };
        this.reflectMethods.forEach(install);
        return handler;
    };
    return DelayedConstructor;
}());

function delay(wrappedConstructor) {
    if (typeof wrappedConstructor === "undefined") {
        throw new Error("Attempt to `delay` undefined. Constructor must be wrapped in a callback");
    }
    return new DelayedConstructor(wrappedConstructor);
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/injection-token.js

function isNormalToken(token) {
    return typeof token === "string" || typeof token === "symbol";
}
function injection_token_isTokenDescriptor(descriptor) {
    return (typeof descriptor === "object" &&
        "token" in descriptor &&
        "multiple" in descriptor);
}
function injection_token_isTransformDescriptor(descriptor) {
    return (typeof descriptor === "object" &&
        "token" in descriptor &&
        "transform" in descriptor);
}
function isConstructorToken(token) {
    return typeof token === "function" || token instanceof DelayedConstructor;
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/token-provider.js
function isTokenProvider(provider) {
    return !!provider.useToken;
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/value-provider.js
function isValueProvider(provider) {
    return provider.useValue != undefined;
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/index.js






;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/provider.js




function isProvider(provider) {
    return (isClassProvider(provider) ||
        isValueProvider(provider) ||
        isTokenProvider(provider) ||
        isFactoryProvider(provider));
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/registry-base.js
var RegistryBase = (function () {
    function RegistryBase() {
        this._registryMap = new Map();
    }
    RegistryBase.prototype.entries = function () {
        return this._registryMap.entries();
    };
    RegistryBase.prototype.getAll = function (key) {
        this.ensure(key);
        return this._registryMap.get(key);
    };
    RegistryBase.prototype.get = function (key) {
        this.ensure(key);
        var value = this._registryMap.get(key);
        return value[value.length - 1] || null;
    };
    RegistryBase.prototype.set = function (key, value) {
        this.ensure(key);
        this._registryMap.get(key).push(value);
    };
    RegistryBase.prototype.setAll = function (key, value) {
        this._registryMap.set(key, value);
    };
    RegistryBase.prototype.has = function (key) {
        this.ensure(key);
        return this._registryMap.get(key).length > 0;
    };
    RegistryBase.prototype.clear = function () {
        this._registryMap.clear();
    };
    RegistryBase.prototype.ensure = function (key) {
        if (!this._registryMap.has(key)) {
            this._registryMap.set(key, []);
        }
    };
    return RegistryBase;
}());
/* harmony default export */ const registry_base = (RegistryBase);

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/registry.js


var Registry = (function (_super) {
    tslib_es6_extends(Registry, _super);
    function Registry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Registry;
}(registry_base));
/* harmony default export */ const registry = (Registry);

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/resolution-context.js
var ResolutionContext = (function () {
    function ResolutionContext() {
        this.scopedResolutions = new Map();
    }
    return ResolutionContext;
}());
/* harmony default export */ const resolution_context = (ResolutionContext);

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/error-helpers.js

function formatDependency(params, idx) {
    if (params === null) {
        return "at position #" + idx;
    }
    var argName = params.split(",")[idx].trim();
    return "\"" + argName + "\" at position #" + idx;
}
function composeErrorMessage(msg, e, indent) {
    if (indent === void 0) { indent = "    "; }
    return tslib_es6_spread([msg], e.message.split("\n").map(function (l) { return indent + l; })).join("\n");
}
function error_helpers_formatErrorCtor(ctor, paramIdx, error) {
    var _a = __read(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b = _a[1], params = _b === void 0 ? null : _b;
    var dep = formatDependency(params, paramIdx);
    return composeErrorMessage("Cannot inject the dependency " + dep + " of \"" + ctor.name + "\" constructor. Reason:", error);
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/types/disposable.js
function isDisposable(value) {
    if (typeof value.dispose !== "function")
        return false;
    var disposeFun = value.dispose;
    if (disposeFun.length > 0) {
        return false;
    }
    return true;
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/interceptors.js


var PreResolutionInterceptors = (function (_super) {
    tslib_es6_extends(PreResolutionInterceptors, _super);
    function PreResolutionInterceptors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PreResolutionInterceptors;
}(registry_base));

var PostResolutionInterceptors = (function (_super) {
    tslib_es6_extends(PostResolutionInterceptors, _super);
    function PostResolutionInterceptors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostResolutionInterceptors;
}(registry_base));

var Interceptors = (function () {
    function Interceptors() {
        this.preResolution = new PreResolutionInterceptors();
        this.postResolution = new PostResolutionInterceptors();
    }
    return Interceptors;
}());
/* harmony default export */ const interceptors = (Interceptors);

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/dependency-container.js











var typeInfo = new Map();
var InternalDependencyContainer = (function () {
    function InternalDependencyContainer(parent) {
        this.parent = parent;
        this._registry = new registry();
        this.interceptors = new interceptors();
        this.disposed = false;
        this.disposables = new Set();
    }
    InternalDependencyContainer.prototype.register = function (token, providerOrConstructor, options) {
        if (options === void 0) { options = { lifecycle: lifecycle.Transient }; }
        this.ensureNotDisposed();
        var provider;
        if (!isProvider(providerOrConstructor)) {
            provider = { useClass: providerOrConstructor };
        }
        else {
            provider = providerOrConstructor;
        }
        if (isTokenProvider(provider)) {
            var path = [token];
            var tokenProvider = provider;
            while (tokenProvider != null) {
                var currentToken = tokenProvider.useToken;
                if (path.includes(currentToken)) {
                    throw new Error("Token registration cycle detected! " + tslib_es6_spread(path, [currentToken]).join(" -> "));
                }
                path.push(currentToken);
                var registration = this._registry.get(currentToken);
                if (registration && isTokenProvider(registration.provider)) {
                    tokenProvider = registration.provider;
                }
                else {
                    tokenProvider = null;
                }
            }
        }
        if (options.lifecycle === lifecycle.Singleton ||
            options.lifecycle == lifecycle.ContainerScoped ||
            options.lifecycle == lifecycle.ResolutionScoped) {
            if (isValueProvider(provider) || isFactoryProvider(provider)) {
                throw new Error("Cannot use lifecycle \"" + lifecycle[options.lifecycle] + "\" with ValueProviders or FactoryProviders");
            }
        }
        this._registry.set(token, { provider: provider, options: options });
        return this;
    };
    InternalDependencyContainer.prototype.registerType = function (from, to) {
        this.ensureNotDisposed();
        if (isNormalToken(to)) {
            return this.register(from, {
                useToken: to
            });
        }
        return this.register(from, {
            useClass: to
        });
    };
    InternalDependencyContainer.prototype.registerInstance = function (token, instance) {
        this.ensureNotDisposed();
        return this.register(token, {
            useValue: instance
        });
    };
    InternalDependencyContainer.prototype.registerSingleton = function (from, to) {
        this.ensureNotDisposed();
        if (isNormalToken(from)) {
            if (isNormalToken(to)) {
                return this.register(from, {
                    useToken: to
                }, { lifecycle: lifecycle.Singleton });
            }
            else if (to) {
                return this.register(from, {
                    useClass: to
                }, { lifecycle: lifecycle.Singleton });
            }
            throw new Error('Cannot register a type name as a singleton without a "to" token');
        }
        var useClass = from;
        if (to && !isNormalToken(to)) {
            useClass = to;
        }
        return this.register(from, {
            useClass: useClass
        }, { lifecycle: lifecycle.Singleton });
    };
    InternalDependencyContainer.prototype.resolve = function (token, context) {
        if (context === void 0) { context = new resolution_context(); }
        this.ensureNotDisposed();
        var registration = this.getRegistration(token);
        if (!registration && isNormalToken(token)) {
            throw new Error("Attempted to resolve unregistered dependency token: \"" + token.toString() + "\"");
        }
        this.executePreResolutionInterceptor(token, "Single");
        if (registration) {
            var result = this.resolveRegistration(registration, context);
            this.executePostResolutionInterceptor(token, result, "Single");
            return result;
        }
        if (isConstructorToken(token)) {
            var result = this.construct(token, context);
            this.executePostResolutionInterceptor(token, result, "Single");
            return result;
        }
        throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
    };
    InternalDependencyContainer.prototype.executePreResolutionInterceptor = function (token, resolutionType) {
        var e_1, _a;
        if (this.interceptors.preResolution.has(token)) {
            var remainingInterceptors = [];
            try {
                for (var _b = __values(this.interceptors.preResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var interceptor = _c.value;
                    if (interceptor.options.frequency != "Once") {
                        remainingInterceptors.push(interceptor);
                    }
                    interceptor.callback(token, resolutionType);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.interceptors.preResolution.setAll(token, remainingInterceptors);
        }
    };
    InternalDependencyContainer.prototype.executePostResolutionInterceptor = function (token, result, resolutionType) {
        var e_2, _a;
        if (this.interceptors.postResolution.has(token)) {
            var remainingInterceptors = [];
            try {
                for (var _b = __values(this.interceptors.postResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var interceptor = _c.value;
                    if (interceptor.options.frequency != "Once") {
                        remainingInterceptors.push(interceptor);
                    }
                    interceptor.callback(token, result, resolutionType);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this.interceptors.postResolution.setAll(token, remainingInterceptors);
        }
    };
    InternalDependencyContainer.prototype.resolveRegistration = function (registration, context) {
        this.ensureNotDisposed();
        if (registration.options.lifecycle === lifecycle.ResolutionScoped &&
            context.scopedResolutions.has(registration)) {
            return context.scopedResolutions.get(registration);
        }
        var isSingleton = registration.options.lifecycle === lifecycle.Singleton;
        var isContainerScoped = registration.options.lifecycle === lifecycle.ContainerScoped;
        var returnInstance = isSingleton || isContainerScoped;
        var resolved;
        if (isValueProvider(registration.provider)) {
            resolved = registration.provider.useValue;
        }
        else if (isTokenProvider(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.resolve(registration.provider.useToken, context))
                : this.resolve(registration.provider.useToken, context);
        }
        else if (isClassProvider(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.construct(registration.provider.useClass, context))
                : this.construct(registration.provider.useClass, context);
        }
        else if (isFactoryProvider(registration.provider)) {
            resolved = registration.provider.useFactory(this);
        }
        else {
            resolved = this.construct(registration.provider, context);
        }
        if (registration.options.lifecycle === lifecycle.ResolutionScoped) {
            context.scopedResolutions.set(registration, resolved);
        }
        return resolved;
    };
    InternalDependencyContainer.prototype.resolveAll = function (token, context) {
        var _this = this;
        if (context === void 0) { context = new resolution_context(); }
        this.ensureNotDisposed();
        var registrations = this.getAllRegistrations(token);
        if (!registrations && isNormalToken(token)) {
            throw new Error("Attempted to resolve unregistered dependency token: \"" + token.toString() + "\"");
        }
        this.executePreResolutionInterceptor(token, "All");
        if (registrations) {
            var result_1 = registrations.map(function (item) {
                return _this.resolveRegistration(item, context);
            });
            this.executePostResolutionInterceptor(token, result_1, "All");
            return result_1;
        }
        var result = [this.construct(token, context)];
        this.executePostResolutionInterceptor(token, result, "All");
        return result;
    };
    InternalDependencyContainer.prototype.isRegistered = function (token, recursive) {
        if (recursive === void 0) { recursive = false; }
        this.ensureNotDisposed();
        return (this._registry.has(token) ||
            (recursive &&
                (this.parent || false) &&
                this.parent.isRegistered(token, true)));
    };
    InternalDependencyContainer.prototype.reset = function () {
        this.ensureNotDisposed();
        this._registry.clear();
        this.interceptors.preResolution.clear();
        this.interceptors.postResolution.clear();
    };
    InternalDependencyContainer.prototype.clearInstances = function () {
        var e_3, _a;
        this.ensureNotDisposed();
        try {
            for (var _b = __values(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
                this._registry.setAll(token, registrations
                    .filter(function (registration) { return !isValueProvider(registration.provider); })
                    .map(function (registration) {
                    registration.instance = undefined;
                    return registration;
                }));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    InternalDependencyContainer.prototype.createChildContainer = function () {
        var e_4, _a;
        this.ensureNotDisposed();
        var childContainer = new InternalDependencyContainer(this);
        try {
            for (var _b = __values(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
                if (registrations.some(function (_a) {
                    var options = _a.options;
                    return options.lifecycle === lifecycle.ContainerScoped;
                })) {
                    childContainer._registry.setAll(token, registrations.map(function (registration) {
                        if (registration.options.lifecycle === lifecycle.ContainerScoped) {
                            return {
                                provider: registration.provider,
                                options: registration.options
                            };
                        }
                        return registration;
                    }));
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return childContainer;
    };
    InternalDependencyContainer.prototype.beforeResolution = function (token, callback, options) {
        if (options === void 0) { options = { frequency: "Always" }; }
        this.interceptors.preResolution.set(token, {
            callback: callback,
            options: options
        });
    };
    InternalDependencyContainer.prototype.afterResolution = function (token, callback, options) {
        if (options === void 0) { options = { frequency: "Always" }; }
        this.interceptors.postResolution.set(token, {
            callback: callback,
            options: options
        });
    };
    InternalDependencyContainer.prototype.dispose = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disposed = true;
                        promises = [];
                        this.disposables.forEach(function (disposable) {
                            var maybePromise = disposable.dispose();
                            if (maybePromise) {
                                promises.push(maybePromise);
                            }
                        });
                        return [4, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    InternalDependencyContainer.prototype.getRegistration = function (token) {
        if (this.isRegistered(token)) {
            return this._registry.get(token);
        }
        if (this.parent) {
            return this.parent.getRegistration(token);
        }
        return null;
    };
    InternalDependencyContainer.prototype.getAllRegistrations = function (token) {
        if (this.isRegistered(token)) {
            return this._registry.getAll(token);
        }
        if (this.parent) {
            return this.parent.getAllRegistrations(token);
        }
        return null;
    };
    InternalDependencyContainer.prototype.construct = function (ctor, context) {
        var _this = this;
        if (ctor instanceof DelayedConstructor) {
            return ctor.createProxy(function (target) {
                return _this.resolve(target, context);
            });
        }
        var instance = (function () {
            var paramInfo = typeInfo.get(ctor);
            if (!paramInfo || paramInfo.length === 0) {
                if (ctor.length === 0) {
                    return new ctor();
                }
                else {
                    throw new Error("TypeInfo not known for \"" + ctor.name + "\"");
                }
            }
            var params = paramInfo.map(_this.resolveParams(context, ctor));
            return new (ctor.bind.apply(ctor, tslib_es6_spread([void 0], params)))();
        })();
        if (isDisposable(instance)) {
            this.disposables.add(instance);
        }
        return instance;
    };
    InternalDependencyContainer.prototype.resolveParams = function (context, ctor) {
        var _this = this;
        return function (param, idx) {
            var _a, _b, _c;
            try {
                if (injection_token_isTokenDescriptor(param)) {
                    if (injection_token_isTransformDescriptor(param)) {
                        return param.multiple
                            ? (_a = _this.resolve(param.transform)).transform.apply(_a, tslib_es6_spread([_this.resolveAll(param.token)], param.transformArgs)) : (_b = _this.resolve(param.transform)).transform.apply(_b, tslib_es6_spread([_this.resolve(param.token, context)], param.transformArgs));
                    }
                    else {
                        return param.multiple
                            ? _this.resolveAll(param.token)
                            : _this.resolve(param.token, context);
                    }
                }
                else if (injection_token_isTransformDescriptor(param)) {
                    return (_c = _this.resolve(param.transform, context)).transform.apply(_c, tslib_es6_spread([_this.resolve(param.token, context)], param.transformArgs));
                }
                return _this.resolve(param, context);
            }
            catch (e) {
                throw new Error(error_helpers_formatErrorCtor(ctor, idx, e));
            }
        };
    };
    InternalDependencyContainer.prototype.ensureNotDisposed = function () {
        if (this.disposed) {
            throw new Error("This container has been disposed, you cannot interact with a disposed container");
        }
    };
    return InternalDependencyContainer;
}());
var instance = new InternalDependencyContainer();
/* harmony default export */ const dependency_container = ((/* unused pure expression or super */ null && (instance)));

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/auto-injectable.js





function autoInjectable() {
    return function (target) {
        var paramInfo = getParamInfo(target);
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args.concat(paramInfo.slice(args.length).map(function (type, index) {
                    var _a, _b, _c;
                    try {
                        if (isTokenDescriptor(type)) {
                            if (isTransformDescriptor(type)) {
                                return type.multiple
                                    ? (_a = globalContainer
                                        .resolve(type.transform)).transform.apply(_a, __spread([globalContainer.resolveAll(type.token)], type.transformArgs)) : (_b = globalContainer
                                    .resolve(type.transform)).transform.apply(_b, __spread([globalContainer.resolve(type.token)], type.transformArgs));
                            }
                            else {
                                return type.multiple
                                    ? globalContainer.resolveAll(type.token)
                                    : globalContainer.resolve(type.token);
                            }
                        }
                        else if (isTransformDescriptor(type)) {
                            return (_c = globalContainer
                                .resolve(type.transform)).transform.apply(_c, __spread([globalContainer.resolve(type.token)], type.transformArgs));
                        }
                        return globalContainer.resolve(type);
                    }
                    catch (e) {
                        var argIndex = index + args.length;
                        throw new Error(formatErrorCtor(target, argIndex, e));
                    }
                })))) || this;
            }
            return class_1;
        }(target));
    };
}
/* harmony default export */ const auto_injectable = ((/* unused pure expression or super */ null && (autoInjectable)));

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/reflection-helpers.js
var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function reflection_helpers_getParamInfo(target) {
    var params = Reflect.getMetadata("design:paramtypes", target) || [];
    var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
    Object.keys(injectionTokens).forEach(function (key) {
        params[+key] = injectionTokens[key];
    });
    return params;
}
function defineInjectionTokenMetadata(data, transform) {
    return function (target, _propertyKey, parameterIndex) {
        var descriptors = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
        descriptors[parameterIndex] = transform
            ? {
                token: data,
                transform: transform.transformToken,
                transformArgs: transform.args || []
            }
            : data;
        Reflect.defineMetadata(INJECTION_TOKEN_METADATA_KEY, descriptors, target);
    };
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/inject.js

function inject(token) {
    return defineInjectionTokenMetadata(token);
}
/* harmony default export */ const decorators_inject = (inject);

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/injectable.js


function injectable_injectable() {
    return function (target) {
        typeInfo.set(target, reflection_helpers_getParamInfo(target));
    };
}
/* harmony default export */ const decorators_injectable = (injectable_injectable);

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/registry.js


function registry_registry(registrations) {
    if (registrations === void 0) { registrations = []; }
    return function (target) {
        registrations.forEach(function (_a) {
            var token = _a.token, options = _a.options, provider = __rest(_a, ["token", "options"]);
            return globalContainer.register(token, provider, options);
        });
        return target;
    };
}
/* harmony default export */ const decorators_registry = ((/* unused pure expression or super */ null && (registry_registry)));

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/singleton.js


function singleton() {
    return function (target) {
        decorators_injectable()(target);
        instance.registerSingleton(target);
    };
}
/* harmony default export */ const decorators_singleton = (singleton);

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/scoped.js


function scoped(lifecycle, token) {
    return function (target) {
        injectable()(target);
        globalContainer.register(token || target, target, {
            lifecycle: lifecycle
        });
    };
}

;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/index.js










;// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/index.js
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
    throw new Error("tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.");
}








/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $bc: () => (/* binding */ src_$bc),
  APIComponent: () => (/* reexport */ source_APIComponent),
  BCWrapperFactory: () => (/* reexport */ BCWrapperFactory),
  BasisCore: () => (/* reexport */ src_BasisCore),
  CallComponent: () => (/* reexport */ collection_CallComponent),
  CallbackComponent: () => (/* reexport */ CallbackComponent/* default */.A),
  CookieComponent: () => (/* reexport */ management_CookieComponent),
  DbSourceComponent: () => (/* reexport */ source_DbSourceComponent),
  EventManager: () => (/* reexport */ EventManager/* default */.A),
  GroupComponent: () => (/* reexport */ GroupComponent/* default */.A),
  HTMLFormComponent: () => (/* reexport */ html_element_HTMLFormComponent),
  HTMLIUnknownComponent: () => (/* reexport */ html_element_HTMLIUnknownComponent),
  HTMLInputComponent: () => (/* reexport */ html_element_HTMLInputComponent),
  HTMLSelectComponent: () => (/* reexport */ html_element_HTMLSelectComponent),
  HostOptions: () => (/* reexport */ HostOptions/* HostOptions */.j),
  ListComponent: () => (/* reexport */ renderable_ListComponent),
  LocalContext: () => (/* reexport */ context_LocalContext),
  LocalDataBase: () => (/* reexport */ LocalDataBase),
  MergeType: () => (/* reexport */ src_enum/* MergeType */.Bt),
  PrintComponent: () => (/* reexport */ renderable_PrintComponent),
  RepeaterComponent: () => (/* reexport */ collection_RepeaterComponent),
  SchemaComponent: () => (/* reexport */ SchemaComponent/* default */.A),
  TreeComponent: () => (/* reexport */ renderable_TreeComponent),
  UserDefineComponent: () => (/* reexport */ user_define_component_UserDefineComponent),
  ViewComponent: () => (/* reexport */ renderable_ViewComponent),
  exposer: () => (/* reexport */ ExposerComponent/* default */.A)
});

// EXTERNAL MODULE: ./node_modules/reflect-metadata/Reflect.js
var reflect_metadata_Reflect = __webpack_require__(4741);
// EXTERNAL MODULE: ./node_modules/tsyringe/dist/esm5/index.js + 26 modules
var esm5 = __webpack_require__(9627);
// EXTERNAL MODULE: ./src/ComponentCollection.ts + 2 modules
var ComponentCollection = __webpack_require__(6695);
// EXTERNAL MODULE: ./src/options/HostOptions.ts
var HostOptions = __webpack_require__(7265);
// EXTERNAL MODULE: ./src/context/RootContext.ts + 8 modules
var RootContext = __webpack_require__(7389);
;// CONCATENATED MODULE: ./src/context/BasisCoreRootContext.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let BasisCoreRootContext = class BasisCoreRootContext extends RootContext/* default */.A {
    constructor(repository, logger, container, options) {
        super(repository, options, logger);
        container.register("host_options", { useValue: options });
        const queryString = window.location.search.substring(1);
        this.addQueryString(queryString);
        this.addRequestRelatedSources();
    }
    addQueryString(queryString) {
        if (queryString.length > 0) {
            const data = queryString
                .split("&")
                .map((x) => x.split("="))
                .reduce((data, pair) => {
                var _a;
                data[pair[0]] = decodeURIComponent((_a = pair[1]) !== null && _a !== void 0 ? _a : "");
                return data;
            }, {});
            this.setAsSource("cms.query", data);
        }
    }
    addRequestRelatedSources() {
        if (document.cookie) {
            const cookieValues = document.cookie.split(";").map((x) => x.split("="));
            const data = cookieValues.reduce((data, pair) => {
                data[pair[0]] = pair[1];
                return data;
            }, {});
            this.setAsSource("cms.cookie", data);
        }
        const request = {
            requestId: -1,
            hostip: window.location.hostname,
            hostport: window.location.port,
        };
        this.setAsSource("cms.request", request);
        const toTwoDigit = (x) => ("0" + x).slice(-2);
        const d = new Date();
        const ye = d.getFullYear();
        const mo = toTwoDigit(d.getMonth());
        const da = toTwoDigit(d.getDay());
        const ho = toTwoDigit(d.getHours());
        const mi = toTwoDigit(d.getMinutes());
        const se = toTwoDigit(d.getSeconds());
        const cms = {
            date: `${ye}/${mo}/${da}`,
            time: `${ho}:${mi}`,
            date2: `${ye}${mo}${da}`,
            time2: `${ho}${mi}${se}`,
            date3: `${ye}.${mo}.${da}`,
        };
        this.setAsSource("cms.cms", cms);
    }
};
BasisCoreRootContext = __decorate([
    (0,esm5/* injectable */._G)(),
    __param(0, (0,esm5/* inject */.WQ)("IContextRepository")),
    __param(1, (0,esm5/* inject */.WQ)("ILogger")),
    __param(2, (0,esm5/* inject */.WQ)("dc")),
    __metadata("design:paramtypes", [Object, Object, Object, HostOptions/* HostOptions */.j])
], BasisCoreRootContext);
/* harmony default export */ const context_BasisCoreRootContext = (BasisCoreRootContext);

;// CONCATENATED MODULE: ./src/BasisCore.ts
var BasisCore_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BasisCore_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BasisCore_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let BasisCore = class BasisCore {
    constructor(context, container, nodes) {
        this.context = context;
        container.register("root.context", { useValue: context });
        container.register("context", { useToken: "root.context" });
        this.content = container.resolve(ComponentCollection/* default */.A);
        this.content.processNodesAsync(nodes);
    }
    GetCommandListByCore(core) {
        return this.content.GetCommandListByCore(core);
    }
    GetCommandList() {
        return this.content.GetCommandList();
    }
    GetComponentList() {
        return this.content.GetComponentList();
    }
    setSource(sourceId, data, options) {
        this.content.initializeTask.then((_) => {
            this.context.setAsSource(sourceId, data, options);
        });
    }
};
BasisCore = BasisCore_decorate([
    (0,esm5/* injectable */._G)(),
    BasisCore_param(1, (0,esm5/* inject */.WQ)("dc")),
    BasisCore_param(2, (0,esm5/* inject */.WQ)("root.nodes")),
    BasisCore_metadata("design:paramtypes", [context_BasisCoreRootContext, Object, Array])
], BasisCore);
/* harmony default export */ const src_BasisCore = (BasisCore);

// EXTERNAL MODULE: ./src/enum.ts
var src_enum = __webpack_require__(3503);
// EXTERNAL MODULE: ./src/component/CommandComponent.ts
var CommandComponent = __webpack_require__(9074);
;// CONCATENATED MODULE: ./src/component/collection/CallComponent.ts
var CallComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CallComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CallComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let CallComponent = class CallComponent extends CommandComponent/* default */.A {
    constructor(element, context, container) {
        super(element, context);
        this.defaultAttributeNames = ["core", "run", "file", "method"];
        this.priority = src_enum/* Priority */.bx.high;
        this.container = container;
    }
    initializeAsync() {
        this.urlToken = this.getAttributeToken("url");
        this.pageSizeToken = this.getAttributeToken("pagesize");
        this.methodeToken = this.getAttributeToken("method");
        this.fileToken = this.getAttributeToken("file");
        this.contentToken = this.node.outerHTML.ToStringToken(this.context);
        return super.initializeAsync();
    }
    runAsync() {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            const filename = yield ((_a = this.fileToken) === null || _a === void 0 ? void 0 : _a.getValueAsync());
            const pageSize = yield ((_b = this.pageSizeToken) === null || _b === void 0 ? void 0 : _b.getValueAsync());
            const command = yield ((_c = this.contentToken) === null || _c === void 0 ? void 0 : _c.getValueAsync());
            const methodValue = yield ((_d = this.methodeToken) === null || _d === void 0 ? void 0 : _d.getValueAsync());
            const url = yield ((_e = this.urlToken) === null || _e === void 0 ? void 0 : _e.getValueAsync());
            const method = (methodValue !== null && methodValue !== void 0 ? methodValue : this.context.options.getDefault("call.verb")).toUpperCase();
            let parameters = null;
            if (method === "POST") {
                parameters = {};
                for (let i = 0; i < this.node.attributes.length; i++) {
                    const attr = this.node.attributes[i];
                    const name = attr.name.toLowerCase();
                    if (this.defaultAttributeNames.indexOf(name) == -1) {
                        parameters[name] = yield this.getAttributeValueAsync(attr.name);
                    }
                }
            }
            else {
                parameters = {
                    fileNames: filename,
                    dmnid: this.context.options.getDefault("dmnid"),
                    siteSize: pageSize,
                    command: command,
                };
            }
            const result = yield this.context.loadPageAsync(filename, parameters, method, url);
            const content = $bc.util.toNode(result);
            const childNodes = [...content.childNodes];
            this.range.setContent(content);
            this.collection = this.container.resolve(ComponentCollection/* default */.A);
            yield this.collection.processNodesAsync(childNodes);
        });
    }
    disposeAsync() {
        const _super = Object.create(null, {
            disposeAsync: { get: () => super.disposeAsync }
        });
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = this.collection) === null || _a === void 0 ? void 0 : _a.disposeAsync());
            return _super.disposeAsync.call(this);
        });
    }
};
CallComponent = CallComponent_decorate([
    (0,esm5/* injectable */._G)(),
    CallComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    CallComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    CallComponent_param(2, (0,esm5/* inject */.WQ)("dc")),
    CallComponent_metadata("design:paramtypes", [Element, Object, Object])
], CallComponent);
/* harmony default export */ const collection_CallComponent = (CallComponent);

// EXTERNAL MODULE: ./src/component/collection/GroupComponent.ts
var GroupComponent = __webpack_require__(5543);
// EXTERNAL MODULE: ./src/component/SourceBaseComponent.ts
var SourceBaseComponent = __webpack_require__(7003);
;// CONCATENATED MODULE: ./src/component/collection/RepeaterComponent.ts
var RepeaterComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RepeaterComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RepeaterComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RepeaterComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let RepeaterComponent = class RepeaterComponent extends SourceBaseComponent/* default */.A {
    constructor(element, context, container) {
        super(element, context);
        this.oldChildContexts = new Array();
        this.collections = new Array();
        this.container = container;
    }
    renderSourceAsync(dataSource) {
        return RepeaterComponent_awaiter(this, void 0, void 0, function* () {
            const name = yield this.getAttributeValueAsync("name");
            const replace = yield this.getAttributeBooleanValueAsync("replace", true);
            if (replace) {
                this.range.deleteContents();
                yield this.disposeExistingObjectAsync();
            }
            for (let index = 0; index < dataSource.rows.length; index++) {
                const row = dataSource.rows[index];
                const template = this.content.firstChild.cloneNode(true);
                var fragment = document.createDocumentFragment();
                const childNodes = [...template.childNodes];
                childNodes.forEach((node) => fragment.appendChild(node));
                this.setContent(fragment, true);
                const childContainer = this.container.createChildContainer();
                childContainer.register("parent.context", { useValue: this.context });
                childContainer.register("dc", { useValue: childContainer });
                childContainer.register("parent.dc", { useValue: this.container });
                const localContext = childContainer.resolve("ILocalContext");
                this.oldChildContexts.push(localContext);
                localContext.setAsSource(`${name}.current`, row, dataSource.cloneOptions());
                childContainer.register("context", { useValue: localContext });
                const collection = childContainer.resolve(ComponentCollection/* default */.A);
                this.collections.push(collection);
                yield collection.processNodesAsync(childNodes);
            }
        });
    }
    disposeExistingObjectAsync() {
        return RepeaterComponent_awaiter(this, void 0, void 0, function* () {
            if (this.oldChildContexts.length > 0) {
                this.oldChildContexts.forEach((x) => x.dispose());
                this.oldChildContexts.splice(0, this.oldChildContexts.length);
            }
            if (this.collections.length > 0) {
                const tasks = this.collections.map((x) => x.disposeAsync());
                yield Promise.all(tasks);
                this.collections.splice(0, this.collections.length);
            }
        });
    }
    disposeAsync() {
        const _super = Object.create(null, {
            disposeAsync: { get: () => super.disposeAsync }
        });
        return RepeaterComponent_awaiter(this, void 0, void 0, function* () {
            yield this.disposeExistingObjectAsync();
            return _super.disposeAsync.call(this);
        });
    }
};
RepeaterComponent = RepeaterComponent_decorate([
    (0,esm5/* injectable */._G)(),
    RepeaterComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    RepeaterComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    RepeaterComponent_param(2, (0,esm5/* inject */.WQ)("dc")),
    RepeaterComponent_metadata("design:paramtypes", [Element, Object, Object])
], RepeaterComponent);
/* harmony default export */ const collection_RepeaterComponent = (RepeaterComponent);

// EXTERNAL MODULE: ./src/data/Source.ts
var Source = __webpack_require__(2164);
// EXTERNAL MODULE: ./src/component/ElementBaseComponent.ts
var ElementBaseComponent = __webpack_require__(4594);
;// CONCATENATED MODULE: ./src/component/html-element/HTMLComponent.ts
var HTMLComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class HTMLComponent extends ElementBaseComponent/* default */.A {
    constructor(element, context) {
        var _a;
        super(element, context);
        this.priority = src_enum/* Priority */.bx.none;
        this.keyFieldNameToken = this.getAttributeToken("bc-keyField");
        this.statusFieldNameToken = this.getAttributeToken("bc-statusField");
        this.mergeTypeToken = this.getAttributeToken("bc-merge");
        this.eventHandler = this.onEventTriggerAsync.bind(this);
        this.isCheckBox =
            this.node instanceof HTMLInputElement &&
                ((_a = this.node.getAttribute("type")) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == "checkbox";
    }
    initializeAsync() {
        const _super = Object.create(null, {
            initializeAsync: { get: () => super.initializeAsync }
        });
        var _a;
        return HTMLComponent_awaiter(this, void 0, void 0, function* () {
            yield _super.initializeAsync.call(this);
            const value = yield this.getAttributeValueAsync("bc-triggers");
            const init = this.node.hasAttribute("data-bc-init");
            if (value && !init) {
                this.eventTriggers = value.split(" ");
                (_a = this.eventTriggers) === null || _a === void 0 ? void 0 : _a.forEach((eventName) => this.node.addEventListener(eventName, this.eventHandler));
                this.node.setAttribute("data-bc-init", "");
            }
        });
    }
    runAsync(source) {
        return this.onEventTriggerAsync();
    }
    onEventTriggerAsync(event) {
        const _super = Object.create(null, {
            createCallbackArgument: { get: () => super.createCallbackArgument }
        });
        var _a, _b;
        return HTMLComponent_awaiter(this, void 0, void 0, function* () {
            event === null || event === void 0 ? void 0 : event.preventDefault();
            let id = yield this.getSourceIdAsync();
            let value = yield this.getSourceValueAsync(event);
            if (this.onProcessingAsync) {
                const args = _super.createCallbackArgument.call(this, {
                    id: id,
                    value: value,
                });
                yield this.onProcessingAsync(args);
                id = args.id;
                value = args.value;
            }
            let mergeType;
            if (this.mergeTypeToken) {
                const rawValue = yield this.mergeTypeToken.getValueAsync();
                if (rawValue) {
                    mergeType = src_enum/* MergeType */.Bt[rawValue.toLowerCase()];
                }
            }
            var source = new Source/* default */.A(id !== null && id !== void 0 ? id : "cms.unknown", value, {
                keyFieldName: yield ((_a = this.keyFieldNameToken) === null || _a === void 0 ? void 0 : _a.getValueAsync()),
                statusFieldName: yield ((_b = this.statusFieldNameToken) === null || _b === void 0 ? void 0 : _b.getValueAsync()),
                mergeType: mergeType,
            });
            let canRender = yield this.getIfValueAsync();
            if (canRender && this.onRenderingAsync) {
                const renderingArgs = this.createCallbackArgument({
                    prevent: false,
                    source: source,
                });
                yield this.onRenderingAsync(renderingArgs);
                canRender = !renderingArgs.prevent;
            }
            if (canRender) {
                this.context.setSource(source);
                if (this.onRenderedAsync) {
                    yield this.onRenderedAsync(this.createCallbackArgument({
                        result: null,
                        source: source,
                    }));
                }
            }
            if (this.onProcessedAsync) {
                const args = _super.createCallbackArgument.call(this, {
                    id: id,
                    value: value,
                });
                yield this.onProcessedAsync(args);
            }
        });
    }
    getSourceIdAsync() {
        return HTMLComponent_awaiter(this, void 0, void 0, function* () {
            let retVal = yield this.getAttributeValueAsync(`bc-name`);
            if (!retVal) {
                retVal = yield this.getAttributeValueAsync("name");
            }
            return retVal;
        });
    }
    getSourceValueAsync(event) {
        return HTMLComponent_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (this.isCheckBox && !this.node.checked) {
                retVal = yield this.getAttributeValueAsync(`bc-off-value`);
                retVal = retVal !== null && retVal !== void 0 ? retVal : "off";
            }
            else {
                retVal = yield this.getAttributeValueAsync(`bc-value`);
                if (!retVal) {
                    try {
                        retVal = this.node.value;
                    }
                    catch (_a) {
                        /*Nothing*/
                    }
                }
            }
            return retVal;
        });
    }
    disposeAsync() {
        var _a;
        (_a = this.eventTriggers) === null || _a === void 0 ? void 0 : _a.forEach((eventName) => this.node.removeEventListener(eventName, this.eventHandler));
        this.node.removeAttribute("data-bc-init");
        return super.disposeAsync();
    }
}

;// CONCATENATED MODULE: ./src/component/html-element/HTMLFormComponent.ts
var HTMLFormComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HTMLFormComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HTMLFormComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let HTMLFormComponent = class HTMLFormComponent extends HTMLComponent {
    constructor(element, context) {
        super(element, context);
    }
    getSourceValueAsync(event) {
        const data = new FormData(this.node);
        const _rootList = new Map();
        const value = Array.from(data.keys()).reduce((result, key) => {
            const values = data.getAll(key);
            if (key.startsWith("_")) {
                _rootList.set(key, values);
            }
            else {
                result[key] = values.length === 1 ? values[0] : values;
            }
            return result;
        }, {});
        if (_rootList.size > 0) {
            const _roots = this.convertRootList(_rootList);
            [..._roots.keys()].forEach((key) => (value[key] = _roots.get(key)));
        }
        return Promise.resolve(value);
    }
    convertRootList(map) {
        const retVal = new Map();
        [...map.keys()].forEach((key) => {
            const values = map.get(key);
            const [rootKey, ...parts] = key.split(".");
            let root = retVal.get(rootKey);
            if (!root) {
                root = {};
                retVal.set(rootKey, root);
            }
            parts.forEach((part, i) => {
                const [subRoot, index] = part.split("__", 2);
                if (index) {
                    let tmpRoot = root[subRoot];
                    if (!tmpRoot) {
                        root[subRoot] = tmpRoot = [];
                    }
                    let obj = tmpRoot[index];
                    if (!obj) {
                        tmpRoot[index] = obj = {};
                    }
                    root = obj;
                }
                else {
                    if (i + 1 == parts.length) {
                        root[part] = values.length === 1 ? values[0] : values;
                    }
                    else {
                        let obj = root[part];
                        if (!obj) {
                            root[part] = obj = {};
                        }
                        root = obj;
                    }
                }
            });
        });
        [...retVal.values()].forEach((root) => {
            function removeArrayEmptySlots(value) {
                Object.keys(value).forEach((prop) => {
                    let val = value[prop];
                    if (Array.isArray(val)) {
                        value[prop] = val = val.filter(String);
                        val.forEach((item) => removeArrayEmptySlots(item));
                    }
                    else if (typeof val === "object") {
                        removeArrayEmptySlots(val);
                    }
                });
            }
            removeArrayEmptySlots(root);
        });
        return retVal;
    }
};
HTMLFormComponent = HTMLFormComponent_decorate([
    (0,esm5/* injectable */._G)(),
    HTMLFormComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    HTMLFormComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    HTMLFormComponent_metadata("design:paramtypes", [HTMLFormElement, Object])
], HTMLFormComponent);
/* harmony default export */ const html_element_HTMLFormComponent = (HTMLFormComponent);

;// CONCATENATED MODULE: ./src/component/html-element/HTMLInputComponent.ts
var HTMLInputComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HTMLInputComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HTMLInputComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HTMLInputComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let HTMLInputComponent = class HTMLInputComponent extends HTMLComponent {
    constructor(element, context) {
        super(element, context);
    }
    getSourceValueAsync(event) {
        const _super = Object.create(null, {
            getSourceValueAsync: { get: () => super.getSourceValueAsync }
        });
        return HTMLInputComponent_awaiter(this, void 0, void 0, function* () {
            let value = yield _super.getSourceValueAsync.call(this, event);
            if (!value) {
                switch (this.node.type) {
                    case "checkbox": {
                        value = this.node.checked;
                        break;
                    }
                    case "file": {
                        value = { value: this.node.files };
                        break;
                    }
                    default: {
                        value = this.node.value;
                        break;
                    }
                }
            }
            return value;
        });
    }
};
HTMLInputComponent = HTMLInputComponent_decorate([
    (0,esm5/* injectable */._G)(),
    HTMLInputComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    HTMLInputComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    HTMLInputComponent_metadata("design:paramtypes", [HTMLInputElement, Object])
], HTMLInputComponent);
/* harmony default export */ const html_element_HTMLInputComponent = (HTMLInputComponent);

;// CONCATENATED MODULE: ./src/component/html-element/HTMLIUnknownComponent.ts
var HTMLIUnknownComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HTMLIUnknownComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HTMLIUnknownComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let HTMLIUnknownComponent = class HTMLIUnknownComponent extends HTMLComponent {
    constructor(element, context) {
        super(element, context);
    }
};
HTMLIUnknownComponent = HTMLIUnknownComponent_decorate([
    (0,esm5/* injectable */._G)(),
    HTMLIUnknownComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    HTMLIUnknownComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    HTMLIUnknownComponent_metadata("design:paramtypes", [HTMLElement, Object])
], HTMLIUnknownComponent);
/* harmony default export */ const html_element_HTMLIUnknownComponent = (HTMLIUnknownComponent);

;// CONCATENATED MODULE: ./src/component/html-element/HTMLSelectComponent.ts
var HTMLSelectComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HTMLSelectComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var HTMLSelectComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var HTMLSelectComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let HTMLSelectComponent = class HTMLSelectComponent extends HTMLComponent {
    constructor(element, context) {
        super(element, context);
    }
    getSourceValueAsync(event) {
        const _super = Object.create(null, {
            getSourceValueAsync: { get: () => super.getSourceValueAsync }
        });
        var _a;
        return HTMLSelectComponent_awaiter(this, void 0, void 0, function* () {
            return (_a = this.node.value) !== null && _a !== void 0 ? _a : (yield _super.getSourceValueAsync.call(this, event));
        });
    }
};
HTMLSelectComponent = HTMLSelectComponent_decorate([
    (0,esm5/* injectable */._G)(),
    HTMLSelectComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    HTMLSelectComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    HTMLSelectComponent_metadata("design:paramtypes", [HTMLSelectElement, Object])
], HTMLSelectComponent);
/* harmony default export */ const html_element_HTMLSelectComponent = (HTMLSelectComponent);

;// CONCATENATED MODULE: ./src/component/management/CookieComponent.ts
var CookieComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CookieComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CookieComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CookieComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


//https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
//https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
//https://www.w3schools.com/js/js_cookies.asp
let CookieComponent = class CookieComponent extends CommandComponent/* default */.A {
    constructor(element, context) {
        super(element, context);
    }
    runAsync() {
        return CookieComponent_awaiter(this, void 0, void 0, function* () {
            var name = yield this.getAttributeValueAsync("name");
            var value = yield this.getAttributeValueAsync("value");
            var maxAge = yield this.getAttributeValueAsync("max-age");
            var path = yield this.getAttributeValueAsync("path");
            var str = `${name.trim()}=${value || ""}`;
            if (maxAge) {
                str += `;max-age=${maxAge}`;
            }
            if (path) {
                str += `;path=${path.trim()}`;
            }
            document.cookie = str;
        });
    }
};
CookieComponent = CookieComponent_decorate([
    (0,esm5/* injectable */._G)(),
    CookieComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    CookieComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    CookieComponent_metadata("design:paramtypes", [Element, Object])
], CookieComponent);
/* harmony default export */ const management_CookieComponent = (CookieComponent);

// EXTERNAL MODULE: ./src/Util.ts
var Util = __webpack_require__(2130);
;// CONCATENATED MODULE: ./src/component/renderable/base/FaceRenderResult.ts
class FaceRenderResult {
    constructor(key, version, element) {
        this.key = key;
        this.version = version;
        this.nodes = Array.from(element.childNodes);
    }
    AppendTo(newParent) {
        if (newParent instanceof Node) {
            this.nodes.forEach((node) => newParent.appendChild(node));
        }
        else if (newParent instanceof Range) {
            const content = newParent.extractContents();
            this.nodes.forEach((node) => content.appendChild(node));
            newParent.insertNode(content);
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/FaceRenderResultRepository.ts
class FaceRenderResultRepository {
    constructor() {
        this.groups = new Map();
    }
    set(key, value, groupName = "default") {
        let group = this.groups[groupName];
        if (!group) {
            group = new Map();
            this.groups[groupName] = group;
        }
        group.set(key !== null && key !== void 0 ? key : value, value);
    }
    get(key, groupName = "default") {
        var _a;
        return (_a = this.groups[groupName]) === null || _a === void 0 ? void 0 : _a.get(key);
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/IRenderDataPartResult.ts
class RenderDataPartResult {
    constructor(result, repository) {
        this.result = result;
        this.repository = repository;
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/FaceCollection.ts
var FaceCollection_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class FaceCollection extends Array {
    constructor(...faces) {
        super(...faces);
        Object.setPrototypeOf(this, FaceCollection.prototype);
    }
    renderAsync(param, data) {
        return FaceCollection_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            if (this.length == 0) {
                param.setRendered();
            }
            else {
                var rowType = param.rowType;
                var firstMatchFace = this.filter((x) => {
                    var con1 = x.RelatedRows.some((x) => Util/* default */.A.Equal(x, data));
                    var con2 = x.RowType == src_enum/* FaceRowType */.q4.NotSet || x.RowType == rowType;
                    var con3 = x.Levels == null ||
                        x.Levels.some((y) => param.Levels.some((x) => x == y));
                    return con1 && con2 && con3;
                })[0];
                if (firstMatchFace) {
                    const [dataKey, version, preRenderResult] = yield param.getRenderedResultAsync(data);
                    if (preRenderResult) {
                        retVal = preRenderResult;
                    }
                    else {
                        const rawHtml = yield firstMatchFace.template.getValueAsync(data);
                        const renderResult = $bc.util.toElement(rawHtml);
                        retVal = param.factory(dataKey, version, renderResult);
                    }
                    param.setRendered();
                }
                else {
                    param.setIgnored();
                }
            }
            return retVal;
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/RawFace.ts

class RawFace {
    constructor(element, context, placeHolder) {
        this.Level = element.GetStringToken("level", context);
        this.RowType = element.GetStringToken("rowtype", context);
        this.Filter = element.GetStringToken("filter", context);
        this.Template = element.getXMLTemplate();
        if (placeHolder) {
            this.Template = Util/* default */.A.ReplaceEx(this.Template, `@child`, `<basis-core-template-tag data-type="${placeHolder}"></basis-core-template-tag>`);
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/template/ExpressionTemplate.ts
class ExpressionTemplate {
    constructor(rawExpression, originalExpression, reservedKeys) {
        this.rawExpression = rawExpression;
        this.originalExpression = originalExpression;
        this.reservedKeys = reservedKeys;
    }
    getValueAsync(data) {
        var _a, _b;
        if (!this.getValue) {
            try {
                this.getValue = new Function("$functionArgumentData", `${(_b = (_a = this.reservedKeys) === null || _a === void 0 ? void 0 : _a.map((key) => `const ${key} = '@${key}'`).join(";")) !== null && _b !== void 0 ? _b : ""}
          ${Object.getOwnPropertyNames(data)
                    .map((key) => `const ${key} = $functionArgumentData["${key}"]`)
                    .join(";")}
            try{
              return ${this.rawExpression};
            }catch(e){
              if( e instanceof ReferenceError){
                return "";
              }else{
                throw e;
              }
            }`);
            }
            catch (ex) {
                console.error(`Error in create binding expression for '${this.rawExpression}'`, ex);
                throw ex;
            }
        }
        return Promise.resolve(this.getValue(data));
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/template/StringTemplate.ts
class StringTemplate {
    constructor(content) {
        this.content = content;
    }
    getValueAsync(_) {
        return Promise.resolve(this.content);
    }
}

// EXTERNAL MODULE: ./src/token/CodeBlockToken.ts
var CodeBlockToken = __webpack_require__(9399);
;// CONCATENATED MODULE: ./src/component/renderable/base/template/CodeBlockTemplate.ts
var CodeBlockTemplate_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CodeBlockTemplate {
    constructor(expression, context) {
        this.token = new CodeBlockToken/* default */.A(expression, context);
    }
    getValueAsync(data) {
        return CodeBlockTemplate_awaiter(this, void 0, void 0, function* () {
            return yield this.token.executeAsync(data);
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/template/ContentTemplate.ts
var ContentTemplate_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class ContentTemplate {
    constructor(context, template, reservedKeys) {
        this.contents = new Array();
        this.context = context;
        this.template = template;
        this.reservedKeys = reservedKeys;
        if (template) {
            this.extractContents();
        }
    }
    extractContents() {
        var _a, _b, _c, _d;
        const faceRegex = this.context.options.getDefault("binding.face-regex");
        const blockRegex = this.context.options.getDefault("binding.codeblock-regex");
        const pattern = new RegExp(`${faceRegex.source}|${blockRegex.source}`, "gi");
        let matchResult;
        let startIndex = 0;
        while ((matchResult = pattern.exec(this.template)) !== null) {
            const finding = matchResult[0];
            const preChar = matchResult[1];
            const index = matchResult.index + ((_a = preChar === null || preChar === void 0 ? void 0 : preChar.length) !== null && _a !== void 0 ? _a : 0);
            if (startIndex != index) {
                this.contents.push(new StringTemplate(this.template.slice(startIndex, index)));
            }
            startIndex = index + finding.length;
            const expression = (_b = matchResult[2]) !== null && _b !== void 0 ? _b : matchResult[3];
            const originalExpression = (_c = matchResult[0]) === null || _c === void 0 ? void 0 : _c.substr(1);
            if (expression) {
                this.contents.push(new ExpressionTemplate(expression, originalExpression, this.reservedKeys));
                startIndex -= (_d = preChar === null || preChar === void 0 ? void 0 : preChar.length) !== null && _d !== void 0 ? _d : 0;
            }
            else {
                const blockToken = matchResult[4];
                this.contents.push(new CodeBlockTemplate(blockToken, this.context));
            }
        }
        if (startIndex != this.template.length) {
            this.contents.push(new StringTemplate(this.template.slice(startIndex)));
        }
    }
    getValueAsync(data) {
        return ContentTemplate_awaiter(this, void 0, void 0, function* () {
            const tasks = this.contents.map((x) => x.getValueAsync(data));
            const result = yield Promise.all(tasks);
            return result.reduce((r, v) => (r += v), "");
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/RawFaceCollection.ts
var RawFaceCollection_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class RawFaceCollection extends Array {
    static Create(element, context, placeHolder) {
        var retVal = new RawFaceCollection();
        element
            .querySelectorAll("face")
            .forEach((x) => retVal.push(new RawFace(x, context, placeHolder)));
        return retVal;
    }
    processAsync(source, context, reservedKeys) {
        return RawFaceCollection_awaiter(this, void 0, void 0, function* () {
            var facesTask = this.map((x) => RawFaceCollection_awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c, _d;
                var rowType = yield this.GetRowTypeAsync(x.RowType);
                var levels = (_c = (_b = (yield ((_a = x.Level) === null || _a === void 0 ? void 0 : _a.getValueAsync()))) === null || _b === void 0 ? void 0 : _b.split("|")) !== null && _c !== void 0 ? _c : null;
                var filter = yield ((_d = x.Filter) === null || _d === void 0 ? void 0 : _d.getValueAsync());
                var relatedRows = Util/* default */.A.IsNullOrEmpty(filter)
                    ? source.rows
                    : yield $bc.util.source.filterAsync(source, filter, context);
                const templateParser = new ContentTemplate(context, x.Template, reservedKeys);
                return {
                    RowType: rowType,
                    Levels: levels,
                    RelatedRows: relatedRows,
                    template: templateParser,
                };
            }));
            var faces = yield Promise.all(facesTask);
            return new FaceCollection(...faces);
        });
    }
    GetRowTypeAsync(token) {
        return RawFaceCollection_awaiter(this, void 0, void 0, function* () {
            var retVal = src_enum/* FaceRowType */.q4.NotSet;
            var value = yield (token === null || token === void 0 ? void 0 : token.getValueAsync());
            if (value) {
                var list = Object.getOwnPropertyNames(src_enum/* FaceRowType */.q4).filter((x) => Util/* default */.A.isEqual(x, value));
                retVal = list.length == 1 ? src_enum/* FaceRowType */.q4[list[0]] : src_enum/* FaceRowType */.q4.NotSet;
            }
            return retVal;
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/RenderParam.ts
var RenderParam_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class RenderParam {
    get rowType() {
        return this._renderedCount % 2 == 0 ? src_enum/* FaceRowType */.q4.Even : src_enum/* FaceRowType */.q4.Odd;
    }
    constructor(source, renderResultRepository, renderResultFactory, groupName) {
        this.source = source;
        this.renderResultRepository = renderResultRepository;
        this.factory = renderResultFactory;
        this.groupName = groupName;
        this._renderedCount = 0;
    }
    getRenderedResultAsync(data) {
        var _a;
        return RenderParam_awaiter(this, void 0, void 0, function* () {
            const dataKey = this.getKeyValue(data);
            const newVersion = this.source.getVersion(data);
            let savedResult = (_a = this.renderResultRepository) === null || _a === void 0 ? void 0 : _a.get(dataKey, this.groupName);
            if (savedResult) {
                if (newVersion !== savedResult.version) {
                    savedResult = null;
                }
            }
            return [dataKey, newVersion, savedResult];
        });
    }
    getKeyValue(data) {
        return this.source.keyFieldName
            ? Reflect.get(data, this.source.keyFieldName)
            : data;
    }
    setLevel(levels) {
        this.Levels = levels;
    }
    setRendered() {
        this._renderedCount++;
    }
    setIgnored() {
        this._renderedCount--;
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/RenderableComponent.ts
var RenderableComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class RenderableComponent extends SourceBaseComponent/* default */.A {
    constructor(element, context, container, reservedKeys) {
        super(element, context);
        this._preCollection = null;
        this.container = container;
        this.reservedKeys = reservedKeys;
    }
    renderSourceAsync(source) {
        return RenderableComponent_awaiter(this, void 0, void 0, function* () {
            let renderResult;
            if (source.rows) {
                var rawFaces = RawFaceCollection.Create(this.node, this.context, this.reservedKeys ? this.reservedKeys[0] : null);
                var faces = yield rawFaces.processAsync(source, this.context, this.reservedKeys);
                const newRenderResultList = yield this.renderDataPartAsync(source, faces);
                this.renderResultRepository = newRenderResultList.repository;
                renderResult = newRenderResultList.result;
            }
            return yield this.createContentAsync(renderResult);
        });
    }
    createContentAsync(renderResult) {
        var _a, _b;
        return RenderableComponent_awaiter(this, void 0, void 0, function* () {
            const doc = new DocumentFragment();
            if ((renderResult === null || renderResult === void 0 ? void 0 : renderResult.length) > 0) {
                const rawLayout = (_a = this.node
                    .querySelector("layout")) === null || _a === void 0 ? void 0 : _a.GetXMLTemplateToken(this.context);
                let layoutTemplate = yield (rawLayout === null || rawLayout === void 0 ? void 0 : rawLayout.getValueAsync());
                if (layoutTemplate) {
                    const key = Date.now().toString(36);
                    layoutTemplate = Util/* default */.A.ReplaceEx(layoutTemplate, "@child", `<basis-core-template-child-tag id="${key}"></basis-core-template-child-tag>`);
                    this.appendTemplateToDoc(layoutTemplate, doc);
                    const childContainer = doc.querySelector(`basis-core-template-child-tag#${key}`);
                    if (!childContainer) {
                        this.context.logger.logWarning("@child place holder not found in layout template");
                    }
                    else {
                        const range = new Range();
                        range.selectNode(childContainer);
                        range.deleteContents();
                        const content = range.extractContents();
                        renderResult.forEach((element) => element.AppendTo(content));
                        range.insertNode(content);
                        range.detach();
                    }
                }
                else {
                    renderResult.forEach((element) => element.AppendTo(doc));
                }
            }
            else {
                var rawElseLayout = (_b = this.node
                    .querySelector("else-layout")) === null || _b === void 0 ? void 0 : _b.GetXMLTemplateToken(this.context);
                const result = yield (rawElseLayout === null || rawElseLayout === void 0 ? void 0 : rawElseLayout.getValueAsync());
                if (result) {
                    this.appendTemplateToDoc(result, doc);
                }
            }
            return yield this.setContentAsync(doc);
        });
    }
    renderDataPartAsync(dataSource, faces) {
        return RenderableComponent_awaiter(this, void 0, void 0, function* () {
            const param = new RenderParam(dataSource, this.renderResultRepository, (key, ver, doc) => new FaceRenderResult(key, ver, doc));
            const newRenderResultList = new FaceRenderResultRepository();
            const renderResult = new Array();
            for (const row of dataSource.rows) {
                const rowRenderResult = yield faces.renderAsync(param, row);
                if (rowRenderResult) {
                    newRenderResultList.set(rowRenderResult.key, rowRenderResult);
                    renderResult.push(rowRenderResult);
                }
            }
            return new RenderDataPartResult(renderResult, newRenderResultList);
        });
    }
    appendTemplateToDoc(template, doc) {
        const tmpResult = $bc.util.toElement(template);
        if (tmpResult.nodeName !== "parsererror") {
            Array.from(tmpResult.childNodes).forEach((node) => doc.appendChild(node));
        }
        else {
            doc.appendChild(tmpResult);
        }
    }
    setContentAsync(doc) {
        return RenderableComponent_awaiter(this, void 0, void 0, function* () {
            const generatedNodes = Array.from(doc.childNodes);
            this.setContent(doc, false);
            if (this._preCollection) {
                yield this._preCollection.disposeAsync();
            }
            this._preCollection = this.container.resolve(ComponentCollection/* default */.A);
            yield this._preCollection.processNodesAsync(generatedNodes);
            return generatedNodes;
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/ListComponent.ts
var ListComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ListComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ListComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ListComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let ListComponent = class ListComponent extends RenderableComponent {
    constructor(element, context, container) {
        super(element, context, container);
    }
    createContentAsync(renderResults) {
        const _super = Object.create(null, {
            createContentAsync: { get: () => super.createContentAsync }
        });
        var _a, _b, _c, _d, _e, _f;
        return ListComponent_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            const dividerTagElement = this.node.querySelector("divider");
            if (dividerTagElement && (renderResults === null || renderResults === void 0 ? void 0 : renderResults.length) > 0) {
                const dividerTemplate = yield ((_a = dividerTagElement === null || dividerTagElement === void 0 ? void 0 : dividerTagElement.GetTemplateToken(this.context)) === null || _a === void 0 ? void 0 : _a.getValueAsync());
                const cellCount = yield ((_b = dividerTagElement === null || dividerTagElement === void 0 ? void 0 : dividerTagElement.GetIntegerToken("rowcount", this.context)) === null || _b === void 0 ? void 0 : _b.getValueAsync());
                const incompleteTemplateStr = yield ((_d = (_c = this.node
                    .querySelector("incomplete")) === null || _c === void 0 ? void 0 : _c.GetXMLTemplateToken(this.context)) === null || _d === void 0 ? void 0 : _d.getValueAsync());
                const incompleteTemplate = incompleteTemplateStr
                    ? $bc.util.toElement(incompleteTemplateStr)
                    : document.createElement("div");
                let contentTemplate = "";
                const key = Date.now().toString(36);
                let index = cellCount;
                renderResults.forEach((_) => {
                    contentTemplate += `<basis-core-template-list-item-tag data-type="${key}"></basis-core-template-list-item-tag>`;
                    index--;
                    if (index == 0) {
                        contentTemplate += dividerTemplate;
                        index = cellCount;
                    }
                });
                while (index > 0 && index < cellCount) {
                    contentTemplate += `<basis-core-template-list-item-tag data-type="${key}"></basis-core-template-list-item-tag>`;
                    const incompleteRenderResult = new FaceRenderResult(null, 0, incompleteTemplate.cloneNode(true));
                    renderResults.push(incompleteRenderResult);
                    index--;
                }
                let doc;
                let layoutTemplate = yield ((_f = (_e = this.node
                    .querySelector("layout")) === null || _e === void 0 ? void 0 : _e.GetXMLTemplateToken(this.context)) === null || _f === void 0 ? void 0 : _f.getValueAsync());
                if (layoutTemplate) {
                    layoutTemplate = Util/* default */.A.ReplaceEx(layoutTemplate, "@child", contentTemplate);
                    doc = new DocumentFragment();
                    Array.from($bc.util.toNode(layoutTemplate).firstChild.childNodes).forEach((node) => doc.appendChild(node));
                }
                else {
                    doc = $bc.util.toNode(contentTemplate);
                }
                const items = Array.from(doc.querySelectorAll(`basis-core-template-list-item-tag[data-type="${key}"]`));
                index = 0;
                renderResults.forEach((result) => {
                    const range = new Range();
                    range.selectNode(items[index++]);
                    range.deleteContents();
                    result.AppendTo(range);
                    range.detach();
                });
                retVal = this.setContentAsync(doc);
            }
            else {
                retVal = _super.createContentAsync.call(this, renderResults);
            }
            return yield retVal;
        });
    }
};
ListComponent = ListComponent_decorate([
    (0,esm5/* injectable */._G)(),
    ListComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    ListComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    ListComponent_param(2, (0,esm5/* inject */.WQ)("dc")),
    ListComponent_metadata("design:paramtypes", [Element, Object, Object])
], ListComponent);
/* harmony default export */ const renderable_ListComponent = (ListComponent);

;// CONCATENATED MODULE: ./src/component/renderable/PrintComponent.ts
var PrintComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PrintComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PrintComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let PrintComponent = class PrintComponent extends RenderableComponent {
    constructor(element, context, container) {
        super(element, context, container);
    }
};
PrintComponent = PrintComponent_decorate([
    (0,esm5/* injectable */._G)(),
    PrintComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    PrintComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    PrintComponent_param(2, (0,esm5/* inject */.WQ)("dc")),
    PrintComponent_metadata("design:paramtypes", [Element, Object, Object])
], PrintComponent);
/* harmony default export */ const renderable_PrintComponent = (PrintComponent);

;// CONCATENATED MODULE: ./src/data/DataUtil.ts
class DataUtil {
    static ApplySimpleFilter(data, columnName, columnValue) {
        var retVal;
        if (typeof columnValue === "string" && columnValue.isEqual("null")) {
            retVal = data.filter((x) => x[columnName] === null);
        }
        else {
            retVal = data.filter((x) => x[columnName] == columnValue);
        }
        return retVal;
    }
    static addRowNumber(data) {
        var index = 1;
        data.forEach((row) => {
            row.rownumber = index++;
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/base/TreeFaceRenderResult.ts

class TreeFaceRenderResult extends FaceRenderResult {
    constructor(key, version, element) {
        super(key, version, element);
        this.contentNodes = null;
        const childContainer = element.querySelector('basis-core-template-tag[data-type="child"]');
        if (childContainer) {
            this.contentRange = new Range();
            this.contentRange.selectNode(childContainer);
            this.contentRange.deleteContents();
        }
    }
    setContent(content) {
        var _a, _b, _c;
        if (this.contentRange) {
            const oldContentNodes = this.contentNodes;
            if ((oldContentNodes === null || oldContentNodes === void 0 ? void 0 : oldContentNodes.length) > 0) {
                this.contentRange.detach();
                this.contentRange = new Range();
                this.contentRange.setStartBefore(oldContentNodes[0]);
                this.contentRange.setEndAfter(oldContentNodes[oldContentNodes.length - 1]);
                (_a = this.contentRange) === null || _a === void 0 ? void 0 : _a.deleteContents();
            }
            if (content) {
                this.contentNodes = [...content.childNodes];
                (_b = this.contentRange) === null || _b === void 0 ? void 0 : _b.insertNode(content);
            }
            else {
                (_c = this.contentRange) === null || _c === void 0 ? void 0 : _c.deleteContents();
                this.contentNodes = null;
            }
        }
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/TreeComponent.ts
var TreeComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TreeComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TreeComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let TreeComponent = class TreeComponent extends RenderableComponent {
    constructor(element, context, container) {
        super(element, context, container, ["child"]);
    }
    FaceRenderResultFactory(key, version, doc) {
        return new TreeFaceRenderResult(key, version, doc);
    }
    renderDataPartAsync(dataSource, faces) {
        return TreeComponent_awaiter(this, void 0, void 0, function* () {
            const tempGeneratedNodeList = new FaceRenderResultRepository();
            if (dataSource.rows.length != 0) {
                var foreignKey = yield this.getAttributeValueAsync("parentidcol", "parentid");
                var principalKey = yield this.getAttributeValueAsync("idcol", "id");
                var nullValue = yield this.getAttributeValueAsync("nullvalue", "0");
                var rootRecords = DataUtil.ApplySimpleFilter(dataSource.rows, foreignKey, nullValue);
                if (rootRecords.length == 0) {
                    throw new Error(`Tree command has no root record in data member '${dataSource.id}' with '${nullValue}' value in '${foreignKey}' column that set in NullValue attribute.`);
                }
                var rootRenderParam = new RenderParam(dataSource, this.renderResultRepository, (key, ver, doc) => new TreeFaceRenderResult(key, ver, doc));
                var renderResultList = new Array();
                for (const row of rootRecords) {
                    const renderResult = yield this.renderLevelAsync(dataSource, rootRenderParam, 1, faces, principalKey, foreignKey, tempGeneratedNodeList, row);
                    renderResultList.push(renderResult);
                }
                return new RenderDataPartResult(renderResultList, tempGeneratedNodeList);
            }
        });
    }
    renderLevelAsync(dataSource, parentRenderParam, level, faces, principalKey, foreignKey, tempGeneratedNodeList, data) {
        return TreeComponent_awaiter(this, void 0, void 0, function* () {
            var childRenderResult = $bc.util.toNode(" ");
            const childRows = DataUtil.ApplySimpleFilter(dataSource.rows, foreignKey, data[principalKey]);
            parentRenderParam.setLevel(childRows.length != 0 ? [`${level}`] : [`${level}`, "end"]);
            const renderResult = yield faces.renderAsync(parentRenderParam, data);
            if (renderResult) {
                tempGeneratedNodeList.set(renderResult.key, renderResult);
                renderResult.setContent(null);
                if (childRows.length != 0) {
                    var newLevel = level + 1;
                    const childRenderParam = new RenderParam(dataSource, this.renderResultRepository, (key, ver, doc) => new TreeFaceRenderResult(key, ver, doc));
                    for (const row of childRows) {
                        const childResult = yield this.renderLevelAsync(dataSource, childRenderParam, newLevel, faces, principalKey, foreignKey, tempGeneratedNodeList, row);
                        childResult.AppendTo(childRenderResult);
                    }
                }
                renderResult.setContent(childRenderResult);
            }
            return renderResult;
        });
    }
};
TreeComponent = TreeComponent_decorate([
    (0,esm5/* injectable */._G)(),
    TreeComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    TreeComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    TreeComponent_param(2, (0,esm5/* inject */.WQ)("dc")),
    TreeComponent_metadata("design:paramtypes", [Element, Object, Object])
], TreeComponent);
/* harmony default export */ const renderable_TreeComponent = (TreeComponent);

// EXTERNAL MODULE: ./src/token/TokenUtil.ts + 11 modules
var TokenUtil = __webpack_require__(1732);
;// CONCATENATED MODULE: ./src/component/renderable/ViewComponent.ts
var ViewComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ViewComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ViewComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ViewComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








let ViewComponent = class ViewComponent extends RenderableComponent {
    constructor(element, context, container) {
        super(element, context, container, ["child"]);
    }
    renderDataPartAsync(dataSource, faces) {
        return ViewComponent_awaiter(this, void 0, void 0, function* () {
            const newRenderResultList = new FaceRenderResultRepository();
            if (dataSource.rows.length != 0) {
                const token = this.getAttributeToken("groupcol");
                const groupColumn = yield TokenUtil/* default */.A.GetValueOrSystemDefaultAsync(token, this.context, "ViewCommand.GroupColumn");
                const groupList = dataSource.rows
                    .map((x) => x[groupColumn])
                    .filter((x, i, arr) => arr.indexOf(x) === i);
                const rootRenderParam = new RenderParam(dataSource, this.renderResultRepository, (key, ver, doc) => new TreeFaceRenderResult(key, ver, doc), "root");
                rootRenderParam.setLevel(["1"]);
                var renderResultList = new Array();
                for (const group of groupList) {
                    const childItems = DataUtil.ApplySimpleFilter(dataSource.rows, groupColumn, group);
                    const data = childItems[0];
                    const level1Result = yield faces.renderAsync(rootRenderParam, data);
                    if (level1Result) {
                        newRenderResultList.set(level1Result.key, level1Result, "root");
                        level1Result.setContent(null);
                        const childRenderParam = new RenderParam(dataSource, this.renderResultRepository, (key, ver, doc) => new TreeFaceRenderResult(key, ver, doc));
                        childRenderParam.setLevel(["2"]);
                        var childRenderResult = $bc.util.toNode(" ");
                        for (const row of childItems) {
                            const renderResult = yield faces.renderAsync(childRenderParam, row);
                            newRenderResultList.set(renderResult.key, renderResult);
                            renderResult.AppendTo(childRenderResult);
                        }
                        level1Result.setContent(childRenderResult);
                        renderResultList.push(level1Result);
                    }
                }
            }
            return new RenderDataPartResult(renderResultList, newRenderResultList);
        });
    }
};
ViewComponent = ViewComponent_decorate([
    (0,esm5/* injectable */._G)(),
    ViewComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    ViewComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    ViewComponent_param(2, (0,esm5/* inject */.WQ)("dc")),
    ViewComponent_metadata("design:paramtypes", [Element, Object, Object])
], ViewComponent);
/* harmony default export */ const renderable_ViewComponent = (ViewComponent);

// EXTERNAL MODULE: ./src/component/renderable/schema/SchemaComponent.ts
var SchemaComponent = __webpack_require__(2491);
// EXTERNAL MODULE: ./src/data/Data.ts
var Data = __webpack_require__(2865);
;// CONCATENATED MODULE: ./src/component/source/SourceComponent.ts


class SourceComponent extends CommandComponent/* default */.A {
    constructor(element, context) {
        super(element, context);
        this.priority = src_enum/* Priority */.bx.normal;
    }
}

;// CONCATENATED MODULE: ./src/component/source/APIComponent.ts
var APIComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var APIComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var APIComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var APIComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let APIComponent = class APIComponent extends SourceComponent {
    constructor(element, context) {
        super(element, context);
        this.urlToken = this.getAttributeToken("url");
        this.methodToken = this.getAttributeToken("method");
        this.bodyToken = this.getAttributeToken("body");
        this.nameToken = this.getAttributeToken("name");
        this.contentType = this.getAttributeToken("Content-Type");
        this.noCacheToken = this.getAttributeToken("noCache");
    }
    runAsync() {
        var _a, _b, _c, _d, _e, _f, _g;
        return APIComponent_awaiter(this, void 0, void 0, function* () {
            const method = (_b = (yield ((_a = this.methodToken) === null || _a === void 0 ? void 0 : _a.getValueAsync()))) === null || _b === void 0 ? void 0 : _b.toUpperCase();
            const url = yield ((_c = this.urlToken) === null || _c === void 0 ? void 0 : _c.getValueAsync());
            let response;
            const body = yield ((_d = this.bodyToken) === null || _d === void 0 ? void 0 : _d.getValueAsync());
            const noCacheStr = yield ((_e = this.noCacheToken) === null || _e === void 0 ? void 0 : _e.getValueAsync());
            const noCache = (noCacheStr === null || noCacheStr === void 0 ? void 0 : noCacheStr.toLowerCase()) == "true";
            const init = {
                method: method,
                body: body,
            };
            const contentType = this.contentType
                ? yield this.contentType.getValueAsync()
                : "application/json";
            if (contentType && contentType.length > 0) {
                init.headers = new Headers();
                init.headers.append("Content-Type", contentType);
            }
            if (noCache) {
                if (!init.headers) {
                    init.headers = new Headers();
                }
                init.headers.append("pragma", "no-cache");
                init.headers.append("cache-control", "no-cache");
            }
            const request = new Request(url, init);
            if (this.onProcessingAsync) {
                const args = this.createCallbackArgument({
                    request: request,
                });
                yield this.onProcessingAsync(args);
                if (args.response) {
                    response = yield args.response;
                }
            }
            if (!response) {
                response = yield fetch(request);
            }
            let dataList;
            if (this.onProcessedAsync) {
                const args = this.createCallbackArgument({
                    request: request,
                    response: response,
                });
                yield this.onProcessedAsync(args);
                dataList = args.results;
            }
            else {
                const json = yield response.json();
                if (json === null || json === void 0 ? void 0 : json.sources) {
                    dataList = json === null || json === void 0 ? void 0 : json.sources.map((x) => new Data/* default */.A(x.options.tableName, x.data, x.options));
                }
                else {
                    const name = (_g = (yield ((_f = this.nameToken) === null || _f === void 0 ? void 0 : _f.getValueAsync()))) !== null && _g !== void 0 ? _g : "cms.api";
                    dataList = [new Data/* default */.A(name, json)];
                }
            }
            dataList === null || dataList === void 0 ? void 0 : dataList.forEach((data) => {
                const source = new Source/* default */.A(data.id, data.rows, data.options);
                this.context.setSource(source);
            });
        });
    }
};
APIComponent = APIComponent_decorate([
    (0,esm5/* injectable */._G)(),
    APIComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    APIComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    APIComponent_metadata("design:paramtypes", [Element, Object])
], APIComponent);
/* harmony default export */ const source_APIComponent = (APIComponent);

// EXTERNAL MODULE: ./src/component/source/CallbackComponent.ts
var CallbackComponent = __webpack_require__(1790);
;// CONCATENATED MODULE: ./src/component/source/base/Member.ts
var Member_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Member {
    constructor(element, context) {
        this.context = context;
        this.element = element;
        this.name = element.getAttribute("name");
        this.previewToken = element.GetBooleanToken("preview", context);
        this.sortToken = element.GetStringToken("sort", context);
        this.postSqlToken = element.GetStringToken("postsql", context);
        this.rawContentToken = element.textContent.ToStringToken(context);
    }
    addDataSourceAsync(data, sourceId, options) {
        var _a, _b, _c;
        return Member_awaiter(this, void 0, void 0, function* () {
            var postSqlTask = (_a = this.postSqlToken) === null || _a === void 0 ? void 0 : _a.getValueAsync();
            var sortTask = (_b = this.sortToken) === null || _b === void 0 ? void 0 : _b.getValueAsync();
            var previewTask = (_c = this.previewToken) === null || _c === void 0 ? void 0 : _c.getValueAsync();
            const id = `${sourceId}.${this.name}`.toLowerCase();
            const preview = yield previewTask;
            const sort = yield sortTask;
            const postSql = yield postSqlTask;
            var lib;
            if (postSql) {
                if (!Util/* default */.A.HasValue(lib)) {
                    lib = yield this.context.getOrLoadDbLibAsync();
                }
                data = lib(Util/* default */.A.ReplaceEx(postSql, `\\[${id}\\]`, "?"), [data]);
            }
            if (sort) {
                if (!Util/* default */.A.HasValue(lib)) {
                    lib = yield this.context.getOrLoadDbLibAsync();
                }
                data = lib(`SELECT * FROM ? order by ${sort}`, [data]);
            }
            DataUtil.addRowNumber(data);
            const source = new Source/* default */.A(id, data, options);
            this.context.setSource(source, preview);
        });
    }
}

;// CONCATENATED MODULE: ./src/component/source/base/DbSourceMember.ts

class DbSourceMember extends Member {
    constructor(element, context) {
        super(element, context);
    }
}

// EXTERNAL MODULE: ./src/exception/ClientException.ts
var ClientException = __webpack_require__(4862);
// EXTERNAL MODULE: ./src/options/connection-options/StreamPromise.ts
var StreamPromise = __webpack_require__(9608);
;// CONCATENATED MODULE: ./src/component/source/MemberBaseSourceComponent.ts
var MemberBaseSourceComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class MemberBaseSourceComponent extends SourceComponent {
    constructor(element, context) {
        super(element, context);
        this.allowMultiProcess = true;
        this.members = [...this.node.querySelectorAll("member")];
    }
    initializeAsync() {
        const _super = Object.create(null, {
            initializeAsync: { get: () => super.initializeAsync }
        });
        return MemberBaseSourceComponent_awaiter(this, void 0, void 0, function* () {
            yield _super.initializeAsync.call(this);
            this.id = yield this.getAttributeValueAsync("name");
        });
    }
    runAsync() {
        return MemberBaseSourceComponent_awaiter(this, void 0, void 0, function* () {
            if (this.members.length > 0) {
                yield this.loadDataAsync();
            }
        });
    }
    processLoadedDataSet(dataList) {
        if (!this.disposed) {
            const memberObjList = this.members.map((memberElement) => this.convertToMemberObject(memberElement));
            if (memberObjList.length != dataList.length) {
                throw new Error(`Command '${this.id}' has ${memberObjList.length} member(s) but ${dataList.length} result(s) returned from source!`);
            }
            memberObjList.forEach((member, index) => MemberBaseSourceComponent_awaiter(this, void 0, void 0, function* () {
                const source = dataList[index];
                yield member.addDataSourceAsync(source.rows, this.id, source.options);
            }));
        }
        return !this.disposed;
    }
    loadDataAsync() {
        var _a, _b;
        return MemberBaseSourceComponent_awaiter(this, void 0, void 0, function* () {
            const connectionName = yield this.getAttributeValueAsync("source");
            const command = this.node.outerHTML.ToStringToken(this.context);
            const params = {
                command: yield command.getValueAsync(),
                dmnid: this.context.options.getDefault("dmnid"),
            };
            if ((_b = (_a = this.connection) === null || _a === void 0 ? void 0 : _a.isOpen) !== null && _b !== void 0 ? _b : false) {
                if (this.connection.connectionName !== connectionName) {
                    throw new ClientException/* default */.A(`Source attribute can't change when socket is open . Valid connection is '${this.connection.connectionName}'`);
                }
                this.connection.send(params);
            }
            else {
                const promiseObj = this.context.loadDataAsync(this.id, connectionName, params, this.processLoadedDataSet.bind(this));
                if (promiseObj instanceof StreamPromise/* default */.A) {
                    this.connection = promiseObj;
                }
                else {
                    yield promiseObj;
                }
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/component/source/DbSourceComponent.ts
var DbSourceComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DbSourceComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DbSourceComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let DbSourceComponent = class DbSourceComponent extends MemberBaseSourceComponent {
    constructor(element, context) {
        super(element, context);
    }
    convertToMemberObject(element) {
        return new DbSourceMember(element, this.context);
    }
};
DbSourceComponent = DbSourceComponent_decorate([
    (0,esm5/* injectable */._G)(),
    DbSourceComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    DbSourceComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    DbSourceComponent_metadata("design:paramtypes", [Element, Object])
], DbSourceComponent);
/* harmony default export */ const source_DbSourceComponent = (DbSourceComponent);

;// CONCATENATED MODULE: ./src/component/user-define-component/ComponentContainer.ts

class ComponentContainer extends CommandComponent/* default */.A {
    constructor(element, context, container) {
        super(element, context);
        this.dc = container;
    }
    toNode(rawHtml) {
        return $bc.util.toNode(rawHtml);
    }
    toHTMLElement(rawXml) {
        return $bc.util.toHTMLElement(rawXml);
    }
    toElement(rawXml) {
        return $bc.util.toElement(rawXml);
    }
    getDefault(key, defaultValue) {
        return this.context.options.getDefault(key, defaultValue);
    }
    getSetting(key, defaultValue) {
        return this.context.options.getSetting(key, defaultValue);
    }
    setSource(sourceId, data, options, preview) {
        this.context.setAsSource(sourceId, data, options, preview);
    }
    tryToGetSource(sourceId) {
        return this.context.tryToGetSource(sourceId);
    }
    waitToGetSourceAsync(sourceId) {
        return this.context.waitToGetSourceAsync(sourceId);
    }
    storeAsGlobal(data, name, prefix, postfix) {
        return $bc.util.storeAsGlobal(data, name, prefix, postfix);
    }
    getRandomName(prefix, postfix) {
        return $bc.util.getRandomName(prefix, postfix);
    }
    format(pattern, ...params) {
        return $bc.util.format(pattern, params);
    }
}

;// CONCATENATED MODULE: ./src/component/user-define-component/UserDefineComponent.ts
var UserDefineComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserDefineComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserDefineComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UserDefineComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let UserDefineComponent = class UserDefineComponent extends ComponentContainer {
    constructor(element, context, container) {
        super(element, context, container);
        this.onInitialized = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
    }
    getLibAsync(objectName, url) {
        return $bc.util.getLibAsync(objectName, url);
    }
    initializeAsync() {
        const _super = Object.create(null, {
            initializeAsync: { get: () => super.initializeAsync }
        });
        return UserDefineComponent_awaiter(this, void 0, void 0, function* () {
            try {
                yield _super.initializeAsync.call(this);
                const lib = this.core.slice(this.core.indexOf(".") + 1);
                const manager = yield $bc.util.getComponentAsync(this.context, lib);
                this.manager = Reflect.construct(manager, [this]);
                if (this.manager.initializeAsync) {
                    yield this.manager.initializeAsync();
                }
                this._resolve(this);
            }
            catch (ex) {
                this._reject(ex);
            }
        });
    }
    runAsync(source) {
        return this.manager.runAsync
            ? this.manager.runAsync(source)
            : Promise.resolve();
    }
    setContent(newContent) {
        this.range.setContent(newContent);
    }
    processNodesAsync(nodes) {
        return UserDefineComponent_awaiter(this, void 0, void 0, function* () {
            const newCollection = this.dc.resolve(ComponentCollection/* default */.A);
            if (!this.collections) {
                this.collections = new Array();
            }
            this.collections.push(newCollection);
            yield newCollection.processNodesAsync(nodes);
            return newCollection;
        });
    }
    disposeAsync() {
        const _super = Object.create(null, {
            disposeAsync: { get: () => super.disposeAsync }
        });
        var _a;
        return UserDefineComponent_awaiter(this, void 0, void 0, function* () {
            const tasks = (_a = this.collections) === null || _a === void 0 ? void 0 : _a.map((collection) => collection.disposeAsync());
            yield Promise.all(tasks);
            return _super.disposeAsync.call(this);
        });
    }
};
UserDefineComponent = UserDefineComponent_decorate([
    (0,esm5/* injectable */._G)(),
    UserDefineComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    UserDefineComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    UserDefineComponent_param(2, (0,esm5/* inject */.WQ)("dc")),
    UserDefineComponent_metadata("design:paramtypes", [Element, Object, Object])
], UserDefineComponent);
/* harmony default export */ const user_define_component_UserDefineComponent = (UserDefineComponent);

// EXTERNAL MODULE: ./src/context/Context.ts
var Context = __webpack_require__(1515);
;// CONCATENATED MODULE: ./src/context/LocalContext.ts
var LocalContext_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LocalContext_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LocalContext_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let LocalContext = class LocalContext extends Context/* default */.A {
    constructor(repository, owner, options) {
        super(repository, options, owner.logger);
        this.owner = owner;
        this.handler = this.owner.onDataSourceSet.Add(this.setSourceFromOwner.bind(this));
    }
    dispose() {
        this.owner.onDataSourceSet.Remove(this.handler);
    }
    getOrLoadDbLibAsync() {
        return this.owner.getOrLoadDbLibAsync();
    }
    getOrLoadObjectAsync(object, url) {
        return this.getOrLoadObjectAsync(object, url);
    }
    loadPageAsync(pageName, parameters, method, url) {
        return this.owner.loadPageAsync(pageName, parameters, method, url);
    }
    loadDataAsync(sourceId, connectionName, parameters, onDataReceived) {
        return this.owner.loadDataAsync(sourceId, connectionName, parameters, onDataReceived);
    }
    tryToGetSource(sourceId) {
        var _a;
        return ((_a = super.tryToGetSource(sourceId)) !== null && _a !== void 0 ? _a : this.owner.tryToGetSource(sourceId));
    }
};
LocalContext = LocalContext_decorate([
    (0,esm5/* injectable */._G)(),
    LocalContext_param(0, (0,esm5/* inject */.WQ)("IContextRepository")),
    LocalContext_param(1, (0,esm5/* inject */.WQ)("parent.context")),
    LocalContext_param(2, (0,esm5/* inject */.WQ)("host_options")),
    LocalContext_metadata("design:paramtypes", [Object, Context/* default */.A,
        HostOptions/* HostOptions */.j])
], LocalContext);
/* harmony default export */ const context_LocalContext = (LocalContext);

;// CONCATENATED MODULE: ./src/logger/ConsoleLogger.ts
var ConsoleLogger_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ConsoleLogger = class ConsoleLogger {
    logSource(source) {
        console.log(source);
        console.log(JSON.stringify(source === null || source === void 0 ? void 0 : source.rows, null, " "));
        console.table(source === null || source === void 0 ? void 0 : source.rows);
    }
    logError(message, exception) {
        console.error(message, exception);
    }
    logInformation(message, ...optionalParams) {
        if (optionalParams && optionalParams.length > 0) {
            console.info(message, optionalParams);
        }
        else {
            console.info(message);
        }
    }
    logWarning(message) {
        console.warn(message);
    }
};
ConsoleLogger = ConsoleLogger_decorate([
    (0,esm5/* singleton */.Gr)()
], ConsoleLogger);
/* harmony default export */ const logger_ConsoleLogger = (ConsoleLogger);

// EXTERNAL MODULE: ./src/event/EventManager.ts
var EventManager = __webpack_require__(9280);
;// CONCATENATED MODULE: ./src/repository/Repository.ts
var Repository_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Repository_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Repository_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let Repository = class Repository {
    constructor(logger) {
        this.repository = new Map();
        this.eventManager = new Map();
        this.resolves = new Map();
        this.logger = logger;
    }
    tryToGet(sourceId) {
        return this.repository.get(sourceId === null || sourceId === void 0 ? void 0 : sourceId.toLowerCase());
    }
    setSourceFromOwner(source) {
        var _a;
        if (this.repository.has(source.id)) {
            this.repository.delete(source.id);
        }
        (_a = this.eventManager.get(source.id)) === null || _a === void 0 ? void 0 : _a.Trigger(source);
        this.logger.logInformation(`${source.id} Added from owner context...`);
    }
    setSourceEx(newSource) {
        const oldSource = this.repository.get(newSource.id);
        if (newSource.mergeType == src_enum/* MergeType */.Bt.replace) {
            if (oldSource) {
                oldSource.replace(newSource);
            }
            else {
                this.repository.set(newSource.id, newSource);
            }
        }
        else if (newSource.mergeType == src_enum/* MergeType */.Bt.append) {
            if (oldSource) {
                //update or insert
                if (newSource.keyFieldName && oldSource.keyFieldName) {
                    newSource.rows.forEach((row) => {
                        const newRowKey = Reflect.get(row, newSource.keyFieldName);
                        const newRowStatus = newSource.statusFieldName
                            ? Reflect.get(row, newSource.statusFieldName)
                            : src_enum/* DataStatus */.t3.added;
                        if (newRowStatus == src_enum/* DataStatus */.t3.added) {
                            oldSource.addRow(row);
                        }
                        else {
                            const oldRowIndex = oldSource.rows.findIndex((x) => Reflect.get(x, oldSource.keyFieldName) == newRowKey);
                            if (oldRowIndex !== -1) {
                                if (newRowStatus == src_enum/* DataStatus */.t3.deleted) {
                                    oldSource.removeRowFormIndex(oldRowIndex);
                                }
                                else if (newRowStatus == src_enum/* DataStatus */.t3.edited) {
                                    oldSource.replaceRowFromIndex(oldRowIndex, row);
                                }
                            }
                        }
                    });
                }
                else {
                    oldSource.addRows(newSource.rows);
                }
            }
            else {
                this.repository.set(newSource.id, newSource);
            }
        }
        return oldSource !== null && oldSource !== void 0 ? oldSource : newSource;
    }
    setSource(source, preview) {
        var _a;
        const resultSource = this.setSourceEx(source);
        if (preview) {
            this.logger.logSource(source);
        }
        (_a = this.eventManager.get(resultSource.id)) === null || _a === void 0 ? void 0 : _a.Trigger(resultSource);
        this.logger.logInformation(`${resultSource.id} ${source === resultSource ? "Added" : "Updated"}...`);
        return resultSource;
    }
    addHandler(sourceId, handler) {
        const key = sourceId === null || sourceId === void 0 ? void 0 : sourceId.toLowerCase();
        let handlers = this.eventManager.get(key);
        if (!handlers) {
            handlers = new EventManager/* default */.A();
            this.eventManager.set(key, handlers);
        }
        const addedHandler = handlers.Add(handler);
        if (addedHandler) {
            this.logger.logInformation(`handler Added for ${key}...`);
        }
    }
    removeHandler(sourceId, handler) {
        const key = sourceId === null || sourceId === void 0 ? void 0 : sourceId.toLowerCase();
        let handlers = this.eventManager.get(key);
        if (handlers) {
            const removedHandler = handlers.Remove(handler);
            if (removedHandler) {
                this.logger.logInformation(`handler removed for ${key}...`);
            }
        }
    }
    waitToGetAsync(sourceId) {
        return new Promise((resolve) => {
            sourceId = sourceId === null || sourceId === void 0 ? void 0 : sourceId.toLowerCase();
            this.logger.logInformation(`wait for ${sourceId}`);
            let handler = this.resolves.get(sourceId);
            if (!handler) {
                handler = new EventManager/* default */.A();
                this.resolves.set(sourceId, handler);
            }
            handler.Add(resolve);
        });
    }
};
Repository = Repository_decorate([
    (0,esm5/* injectable */._G)(),
    Repository_param(0, (0,esm5/* inject */.WQ)("ILogger")),
    Repository_metadata("design:paramtypes", [Object])
], Repository);
/* harmony default export */ const repository_Repository = (Repository);

;// CONCATENATED MODULE: ./src/component/renderable/schema-list/SchemaFace.ts
var SchemaFace_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class SchemaFaceCollection {
    constructor(element, context) {
        this._faces = Array.from(element.querySelectorAll("face")).map((x) => new SchemaFace(x, context));
    }
    getValueAsync(data) {
        return SchemaFace_awaiter(this, void 0, void 0, function* () {
            let retVal = null;
            for (const item of data) {
                for (const face of this._faces) {
                    const result = yield face.tryGetValueAsync(item);
                    if (result) {
                        retVal += result;
                        break;
                    }
                }
            }
            return retVal;
        });
    }
}
class SchemaFace {
    constructor(element, context) {
        var _a;
        this._schemaIdList = (_a = element.getAttribute("schemaIds")) === null || _a === void 0 ? void 0 : _a.split(" ");
        const template = element.getTemplate();
        this._template = new ContentTemplate(context, template, null);
    }
    tryGetValueAsync(data) {
        return !this._schemaIdList ||
            this._schemaIdList.indexOf(data.schemaId) != -1
            ? this._template.getValueAsync(data)
            : null;
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema-list/SourceMaker.ts
var SourceMaker_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class SourceMaker {
    static makeAsync(answers, schemaUrl) {
        return SourceMaker_awaiter(this, void 0, void 0, function* () {
            const retVal = new Array();
            const url = Util/* default */.A.formatUrl(schemaUrl, null, {
                id: answers.schemaId,
                ver: answers.schemaVersion,
                lid: answers.lid,
            });
            const response = yield Util/* default */.A.getDataAsync(url);
            const schema = response.sources[0].data[0];
            schema.questions.forEach((question) => {
                const answer = answers === null || answers === void 0 ? void 0 : answers.properties.find((x) => x.prpId == question.prpId);
                const item = {
                    schemaId: null,
                    prpId: question.prpId,
                    typeId: question.typeId,
                    title: question.title,
                    answers: answer.answers.map((x) => x.parts.map((x) => x.values.map((x) => x.value))),
                };
                retVal.push(item);
            });
            return retVal;
        });
    }
}

;// CONCATENATED MODULE: ./src/component/renderable/schema-list/SchemaListComponent.ts
var SchemaListComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SchemaListComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SchemaListComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SchemaListComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let SchemaListComponent = class SchemaListComponent extends SourceBaseComponent/* default */.A {
    constructor(element, context) {
        super(element, context);
    }
    initializeAsync() {
        const _super = Object.create(null, {
            initializeAsync: { get: () => super.initializeAsync }
        });
        return SchemaListComponent_awaiter(this, void 0, void 0, function* () {
            yield _super.initializeAsync.call(this);
            this.urlToken = this.getAttributeToken("schemaUrl");
            this._faces = new SchemaFaceCollection(this.node, this.context);
        });
    }
    renderSourceAsync(dataSource) {
        return SchemaListComponent_awaiter(this, void 0, void 0, function* () {
            if (dataSource) {
                const answers = dataSource.rows;
                answers.forEach(this.renderAnswerAsync.bind(this));
            }
        });
    }
    renderAnswerAsync(answer) {
        var _a;
        return SchemaListComponent_awaiter(this, void 0, void 0, function* () {
            const urlStr = yield ((_a = this.urlToken) === null || _a === void 0 ? void 0 : _a.getValueAsync());
            const source = yield SourceMaker.makeAsync(answer, urlStr);
            source.forEach((item) => {
                const div = document.createElement("div");
                div.appendChild(document.createTextNode(item.title));
                this.setContent(div, true);
            });
            this._faces;
        });
    }
};
SchemaListComponent = SchemaListComponent_decorate([
    (0,esm5/* injectable */._G)(),
    SchemaListComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    SchemaListComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    SchemaListComponent_metadata("design:paramtypes", [Element, Object])
], SchemaListComponent);


;// CONCATENATED MODULE: ./src/exception/InvalidPropertyValueException.ts

class InvalidPropertyValueException extends ClientException/* default */.A {
    constructor(propertyName, propertyValue) {
        super(`InValid Data Format For '${propertyName}' Property '${propertyValue}'`);
    }
}

;// CONCATENATED MODULE: ./src/component/source/base/InMemoryMember.ts
var InMemoryMember_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class InMemoryMember extends Member {
    constructor(element, context) {
        super(element, context);
    }
    AddDataSourceExAsync(sourceId) {
        const _super = Object.create(null, {
            addDataSourceAsync: { get: () => super.addDataSourceAsync }
        });
        return InMemoryMember_awaiter(this, void 0, void 0, function* () {
            var data = yield this.ParseDataAsync(this.context);
            if (data) {
                _super.addDataSourceAsync.call(this, data, sourceId);
            }
        });
    }
}

;// CONCATENATED MODULE: ./src/component/source/base/JoinMember.ts
var JoinMember_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class JoinMember extends InMemoryMember {
    constructor(element, context) {
        super(element, context);
    }
    ParseDataAsync() {
        var _a, _b, _c;
        return JoinMember_awaiter(this, void 0, void 0, function* () {
            var formatToken = this.element.GetStringToken("jointype", this.context);
            var tmpVal = (_a = (yield formatToken.getValueAsync())) !== null && _a !== void 0 ? _a : "innerjoin";
            var format = src_enum/* JoinType */.JO[tmpVal.toLowerCase()];
            var leftData = yield ((_b = this.element
                .GetStringToken("lefttblcol", this.context)) === null || _b === void 0 ? void 0 : _b.getValueAsync());
            var rightData = yield ((_c = this.element
                .GetStringToken("righttblcol", this.context)) === null || _c === void 0 ? void 0 : _c.getValueAsync());
            var leftDataParts = leftData.split(".", 3);
            var rightDataParts = rightData.split(".", 3);
            if (leftDataParts.length != 3) {
                throw new InvalidPropertyValueException("LeftDataMember", leftData);
            }
            if (rightDataParts.length != 3) {
                throw new InvalidPropertyValueException("RightTableColumn", rightData);
            }
            var leftDataMember = leftDataParts.slice(0, 2).join(".");
            var rightDataMember = rightDataParts.slice(0, 2).join(".");
            var leftSource = yield this.context.waitToGetSourceAsync(leftDataMember);
            var rightSource = yield this.context.waitToGetSourceAsync(rightDataMember);
            var leftTableColumn = leftDataParts[2];
            var rightTableColumn = rightDataParts[2];
            var joinResultCol = this.getSourceFieldNameList(leftSource)
                .filter((x) => x != "rownumber")
                .map((x) => `ltbl.[${x}] AS [${leftDataParts[0]}_${leftDataParts[1]}_${x}]`);
            joinResultCol = joinResultCol.concat(this.getSourceFieldNameList(rightSource)
                .filter((x) => x != "rownumber")
                .map((x) => `rtbl.[${x}] AS [${rightDataParts[0]}_${rightDataParts[1]}_${x}]`));
            var joinType = "JOIN";
            switch (format) {
                case src_enum/* JoinType */.JO.innerjoin: {
                    joinType = "INNER JOIN";
                    break;
                }
                case src_enum/* JoinType */.JO.leftjoin: {
                    joinType = "LEFT JOIN";
                    break;
                }
                case src_enum/* JoinType */.JO.rightjoin: {
                    joinType = "RIGHT JOIN";
                    break;
                }
            }
            var lib = yield this.context.getOrLoadDbLibAsync();
            return lib(`SELECT ${joinResultCol.join(",")} FROM ? AS ltbl ${joinType} ? AS rtbl ON ltbl.${leftTableColumn} = rtbl.${rightTableColumn}`, [leftSource.rows, rightSource.rows]);
        });
    }
    getSourceFieldNameList(source) {
        return source && source.rows && source.rows.length > 0
            ? Object.getOwnPropertyNames(source.rows[0])
            : [];
    }
}

;// CONCATENATED MODULE: ./src/component/source/base/SqlMember.ts
var SqlMember_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class SqlMember extends InMemoryMember {
    constructor(element, context) {
        super(element, context);
    }
    ParseDataAsync() {
        return SqlMember_awaiter(this, void 0, void 0, function* () {
            var rawContent = this.element.textContent.ToStringToken(this.context);
            var sql = yield rawContent.getValueAsync();
            var rawDataMemberNames = this.element.GetStringToken("datamembername", this.context);
            var sources = new Array();
            if (rawDataMemberNames) {
                sources = (yield rawDataMemberNames.getValueAsync()).split(",");
            }
            else {
                sources = this.GetSqlSources(sql);
            }
            var task = sources.map((source) => this.context.waitToGetSourceAsync(source));
            var dataList = yield Promise.all(task);
            var lib = yield this.context.getOrLoadDbLibAsync();
            var db = new lib.Database();
            dataList.forEach((data) => {
                db.exec(`CREATE TABLE [${data.id}]`);
                db.tables[data.id].data = data.rows;
            });
            var queryResult = db.exec(sql);
            return queryResult;
        });
    }
    GetSqlSources(sql) {
        var regexp = RegExp(/\[([^\]]+)\]/g, "g");
        var matches = sql.matchAll(regexp);
        return Array.from(matches, (m) => m[1]).filter((value, index, array) => array.indexOf(value) === index);
    }
}

;// CONCATENATED MODULE: ./src/component/source/SourceUtil.ts


class SourceUtil {
    static ConvertToMember(element, context) {
        var _a;
        var retVal = null;
        var type = (_a = element.getAttribute("format")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        switch (type) {
            case "join": {
                retVal = new JoinMember(element, context);
                break;
            }
            case "sql": {
                retVal = new SqlMember(element, context);
                break;
            }
        }
        return retVal;
    }
}

;// CONCATENATED MODULE: ./src/component/source/InlineSourceComponent.ts
var InlineSourceComponent_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var InlineSourceComponent_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var InlineSourceComponent_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var InlineSourceComponent_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let InlineSourceComponent = class InlineSourceComponent extends MemberBaseSourceComponent {
    constructor(element, context) {
        super(element, context);
    }
    convertToMemberObject(element) {
        return SourceUtil.ConvertToMember(element, this.context);
    }
    runAsync() {
        var _a, _b;
        return InlineSourceComponent_awaiter(this, void 0, void 0, function* () {
            if (((_b = (_a = this.members) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
                var tasks = this.members.map((x) => this.convertToMemberObject(x).AddDataSourceExAsync(this.id));
                yield Promise.all(tasks);
            }
        });
    }
};
InlineSourceComponent = InlineSourceComponent_decorate([
    (0,esm5/* injectable */._G)(),
    InlineSourceComponent_param(0, (0,esm5/* inject */.WQ)("element")),
    InlineSourceComponent_param(1, (0,esm5/* inject */.WQ)("context")),
    InlineSourceComponent_metadata("design:paramtypes", [Element, Object])
], InlineSourceComponent);
/* harmony default export */ const source_InlineSourceComponent = (InlineSourceComponent);

;// CONCATENATED MODULE: ./src/component/renderable/SchemaUploader.ts
var SchemaUploader_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SchemaUploader_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SchemaUploader_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SchemaUploader_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let SchemaUploader = class SchemaUploader extends SourceBaseComponent/* default */.A {
    constructor(element, context, container) {
        super(element, context);
        this.urlToken = this.getAttributeToken("url");
        this.blobToken = this.getAttributeToken("blob");
        this.contentType = this.getAttributeToken("Content-Type");
        this.noCacheToken = this.getAttributeToken("noCache");
        this.nameToken = this.getAttributeToken("name");
        this.container = container;
    }
    renderSourceAsync(dataSource) {
        var _a, _b, _c, _d;
        return SchemaUploader_awaiter(this, void 0, void 0, function* () {
            if (dataSource) {
                const fileList = Array();
                const complexObject = dataSource.rows[0];
                const source = (_a = complexObject.data) !== null && _a !== void 0 ? _a : complexObject;
                const name = yield ((_b = this.nameToken) === null || _b === void 0 ? void 0 : _b.getValueAsync());
                const extractFileValue = (propId, list) => {
                    list === null || list === void 0 ? void 0 : list.forEach((item) => {
                        var _a;
                        (_a = item.parts) === null || _a === void 0 ? void 0 : _a.forEach((part) => {
                            var _a;
                            (_a = part.values) === null || _a === void 0 ? void 0 : _a.forEach((partValue) => {
                                var _a;
                                if (((_a = partValue === null || partValue === void 0 ? void 0 : partValue.value) === null || _a === void 0 ? void 0 : _a.content) instanceof File) {
                                    const blobValue = partValue.value;
                                    const data = {
                                        blobid: $bc.util.getRandomName("blob"),
                                        file: blobValue.content,
                                        uploadtoken: blobValue.uploadToken,
                                        part: part.part,
                                        prpid: propId,
                                    };
                                    partValue.value.content = data.blobid;
                                    fileList.push(data);
                                }
                            });
                        });
                    });
                };
                source.properties.forEach((property) => {
                    extractFileValue(property.propId, property.added);
                    extractFileValue(property.propId, property.edited);
                });
                const url = yield ((_c = this.urlToken) === null || _c === void 0 ? void 0 : _c.getValueAsync());
                let response;
                const noCacheStr = yield ((_d = this.noCacheToken) === null || _d === void 0 ? void 0 : _d.getValueAsync());
                const noCache = (noCacheStr === null || noCacheStr === void 0 ? void 0 : noCacheStr.toLowerCase()) == "true";
                const init = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(complexObject),
                };
                if (noCache) {
                    init.headers.append("pragma", "no-cache");
                    init.headers.append("cache-control", "no-cache");
                }
                const request = new Request(url, init);
                if (this.onProcessingAsync) {
                    const args = this.createCallbackArgument({
                        request: request,
                    });
                    yield this.onProcessingAsync(args);
                    if (args.response) {
                        response = yield args.response;
                    }
                }
                if (!response) {
                    response = yield fetch(request);
                }
                const postAnswerResult = yield response.json();
                if (name) {
                    const data = {
                        answer: source,
                        postAnswerResult: postAnswerResult,
                        fileList: fileList,
                    };
                    this.context.setAsSource(`${name}.uploading`, data);
                }
                if (postAnswerResult.usedforid) {
                    if (fileList.length > 0) {
                        const taskList = fileList.map((fileInfo) => SchemaUploader_awaiter(this, void 0, void 0, function* () {
                            var _e, _f;
                            const baseUrl = (_f = (yield ((_e = this.blobToken) === null || _e === void 0 ? void 0 : _e.getValueAsync(true)))) !== null && _f !== void 0 ? _f : url;
                            const blobUrl = baseUrl +
                                (baseUrl.indexOf("?") != -1 ? "&" : "?") +
                                `uploadtoken=${fileInfo.uploadtoken}&blobid=${fileInfo.blobid}` +
                                `&prpid=${fileInfo.prpid}&part=${fileInfo.part}` +
                                `&usedforid=${postAnswerResult.usedforid}&lid=${source.lid}`;
                            const formData = new FormData();
                            formData.append("blobid", fileInfo.blobid);
                            formData.append("uploadtoken", fileInfo.uploadtoken);
                            formData.append("usedforid", postAnswerResult.usedforid.toString());
                            formData.append("lid", source.lid.toString());
                            formData.append("prpid", fileInfo.prpid.toString());
                            formData.append("part", fileInfo.part.toString());
                            formData.append(fileInfo.file.name, fileInfo.file);
                            if (this.container.isRegistered("scheduler", true)) {
                                const scheduler = this.container.resolve("scheduler");
                                const process = scheduler.startPost(formData, blobUrl, fileInfo.file.name, null, false);
                                return yield process.task;
                            }
                            else {
                                const request = yield fetch(blobUrl, {
                                    method: "POST",
                                    body: formData,
                                });
                                return yield request.json();
                            }
                        }));
                        const uploadResult = yield Promise.all(taskList);
                        if (name) {
                            const data = {
                                answer: source,
                                postAnswerResult: postAnswerResult,
                                fileList: fileList,
                                uploadFileResult: uploadResult,
                            };
                            this.context.setAsSource(`${name}.uploaded`, data);
                        }
                    }
                }
                else {
                    console.error(`The 'usedforid' property not set in result returned from ${url}`, postAnswerResult);
                }
            }
        });
    }
};
SchemaUploader = SchemaUploader_decorate([
    (0,esm5/* injectable */._G)(),
    SchemaUploader_param(0, (0,esm5/* inject */.WQ)("element")),
    SchemaUploader_param(1, (0,esm5/* inject */.WQ)("context")),
    SchemaUploader_param(2, (0,esm5/* inject */.WQ)("dc")),
    SchemaUploader_metadata("design:paramtypes", [Element, Object, Object])
], SchemaUploader);
/* harmony default export */ const renderable_SchemaUploader = (SchemaUploader);

;// CONCATENATED MODULE: ./src/tsyringe.config.ts
//https://github.com/microsoft/tsyringe#example-with-interfaces


























esm5/* container */.kL.register("IBasisCore", { useToken: src_BasisCore });
esm5/* container */.kL.register("ILogger", { useToken: logger_ConsoleLogger });
esm5/* container */.kL.register("IContextRepository", { useToken: repository_Repository });
esm5/* container */.kL.register("ILocalContext", { useToken: context_LocalContext });
esm5/* container */.kL.register("print", { useToken: renderable_PrintComponent });
esm5/* container */.kL.register("tree", { useToken: renderable_TreeComponent });
esm5/* container */.kL.register("view", { useToken: renderable_ViewComponent });
esm5/* container */.kL.register("list", { useToken: renderable_ListComponent });
esm5/* container */.kL.register("list", { useToken: renderable_ListComponent });
esm5/* container */.kL.register("schema", { useToken: SchemaComponent/* default */.A });
esm5/* container */.kL.register("schemalist", { useToken: SchemaListComponent });
esm5/* container */.kL.register("schemauploader", { useToken: renderable_SchemaUploader });
esm5/* container */.kL.register("cookie", { useToken: management_CookieComponent });
esm5/* container */.kL.register("call", { useToken: collection_CallComponent });
esm5/* container */.kL.register("group", { useToken: GroupComponent/* default */.A });
esm5/* container */.kL.register("repeater", { useToken: collection_RepeaterComponent });
esm5/* container */.kL.register("callback", { useToken: CallbackComponent/* default */.A });
esm5/* container */.kL.register("dbsource", { useToken: source_DbSourceComponent });
esm5/* container */.kL.register("inlinesource", { useToken: source_InlineSourceComponent });
esm5/* container */.kL.register("input", { useToken: html_element_HTMLInputComponent });
esm5/* container */.kL.register("select", { useToken: html_element_HTMLSelectComponent });
esm5/* container */.kL.register("form", { useToken: html_element_HTMLFormComponent });
esm5/* container */.kL.register("unknown-html", { useToken: html_element_HTMLIUnknownComponent });
esm5/* container */.kL.register("api", { useToken: source_APIComponent });
esm5/* container */.kL.register("component", { useToken: user_define_component_UserDefineComponent });

// EXTERNAL MODULE: ./src/extension/StringExtensions.ts
var StringExtensions = __webpack_require__(3995);
;// CONCATENATED MODULE: ./src/extension/ElementExtensions.ts

Object.defineProperty(Element.prototype, "GetObjectToken", {
    value: function GetObjectToken(attributeName, context) {
        var retVal;
        var tmp = this.getAttribute(attributeName);
        if (tmp) {
            retVal = tmp.ToObjectToken(context);
        }
        return retVal;
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "GetStringToken", {
    value: function GetStringToken(attributeName, context) {
        var retVal;
        var tmp = this.getAttribute(attributeName);
        if (tmp) {
            retVal = tmp.ToStringToken(context);
        }
        return retVal;
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "GetIntegerToken", {
    value: function GetIntegerToken(attributeName, context) {
        var retVal;
        var tmp = this.getAttribute(attributeName);
        if (tmp) {
            retVal = tmp.ToIntegerToken(context);
        }
        return retVal;
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "GetBooleanToken", {
    value: function GetBooleanToken(attributeName, context) {
        var retVal;
        var tmp = this.getAttribute(attributeName);
        if (tmp) {
            retVal = tmp.ToBooleanToken(context);
        }
        return retVal;
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "GetTemplateToken", {
    value: function GetTemplateToken(context) {
        return this.getTemplate().ToStringToken(context);
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "getTemplate", {
    value: function getTemplate() {
        var retVal;
        if (this.children.length == 1 &&
            Util/* default */.A.isEqual(this.children[0].nodeName, "script") &&
            Util/* default */.A.isEqual(this.children[0].getAttribute("type"), "text/template")) {
            retVal = this.textContent;
        }
        else {
            retVal = this.innerHTML;
        }
        return retVal;
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "GetXMLTemplateToken", {
    value: function GetXMLTemplateToken(context) {
        return this.getXMLTemplate().ToStringToken(context);
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "getXMLTemplate", {
    value: function getXMLTemplate() {
        var retVal;
        if (this.children.length == 1 &&
            Util/* default */.A.isEqual(this.children[0].nodeName, "script") &&
            Util/* default */.A.isEqual(this.children[0].getAttribute("type"), "text/template")) {
            retVal = this.children[0].outerHTML;
        }
        else {
            retVal = `<basis-core-template-tag>${this.innerHTML}</basis-core-template-tag>`;
        }
        return retVal;
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "isBasisCore", {
    value: function isBasisCore() {
        try {
            return (this.nodeType == Node.ELEMENT_NODE &&
                this.nodeName == "BASIS" &&
                Util/* default */.A.isEqual(this.getAttribute("run"), "atclient"));
        }
        catch (_a) {
            return false;
        }
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "isBasisTag", {
    value: function isBasisTag() {
        try {
            return (this.nodeType == Node.ELEMENT_NODE && this.hasAttribute("bc-triggers"));
        }
        catch (_a) {
            return false;
        }
    },
    writable: true,
    configurable: true,
});
Object.defineProperty(Element.prototype, "isIgnoreTag", {
    value: function isIgnoreTag() {
        try {
            return (this.nodeType == Node.ELEMENT_NODE && this.hasAttribute("bc-ignore"));
        }
        catch (_a) {
            return false;
        }
    },
    writable: true,
    configurable: true,
});

;// CONCATENATED MODULE: ./src/repository/LocalDataBase.ts
var LocalDataBase_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class LocalDataBase {
    constructor(databaseName, getSchemas) {
        this._getSchemas = getSchemas;
        this._dataBaseName = databaseName;
    }
    dropAsync() {
        return LocalDataBase_awaiter(this, void 0, void 0, function* () {
            var affected = yield this.executeAsync(`DROP localStorage DATABASE ${this._dataBaseName}`);
            this._db = null;
            return affected == 1;
        });
    }
    executeAsync(sql, params) {
        return LocalDataBase_awaiter(this, void 0, void 0, function* () {
            if (!this._db) {
                yield this.InitializeAsync();
            }
            return yield new Promise((resolve) => this._db.exec(sql, params, (x) => resolve(x)));
        });
    }
    executeAsTableAsync(sql, params) {
        return LocalDataBase_awaiter(this, void 0, void 0, function* () {
            var data = yield this.executeAsync(sql, params);
            var cols;
            if (data.length > 0) {
                cols = Object.getOwnPropertyNames(data[0]);
            }
            else {
                cols = [];
            }
            var rows = [];
            data.forEach((row) => rows.push(cols.map((col) => row[col])));
            var retVal = [cols, ...rows];
            return retVal;
        });
    }
    InitializeAsync() {
        return LocalDataBase_awaiter(this, void 0, void 0, function* () {
            if (!this._db) {
                var lib = alasql;
                var create = lib.exec(`CREATE localStorage DATABASE IF NOT EXISTS ${this._dataBaseName}`);
                lib.exec(`ATTACH localStorage DATABASE ${this._dataBaseName}`);
                this._db = lib.databases[this._dataBaseName];
                if (create == 1) {
                    for (let [tblName, schema] of this._getSchemas().entries()) {
                        var tmp = Object.getOwnPropertyNames(schema).map((columnName) => `${columnName} ${schema[columnName]}`);
                        var cols = tmp.join(",");
                        yield this.executeAsync(`CREATE TABLE IF NOT EXISTS ${tblName} (${cols})`);
                    }
                }
            }
        });
    }
}

// EXTERNAL MODULE: ./src/wrapper/UtilWrapper.ts
var UtilWrapper = __webpack_require__(4335);
;// CONCATENATED MODULE: ./src/wrapper/BCWrapper.ts
var BCWrapper_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BCWrapper {
    constructor() {
        this.elementList = null;
        this.hostSetting = null;
        this._basiscore = null;
        this.manager = new EventManager/* default */.A();
    }
    get basiscore() {
        return this._basiscore;
    }
    addFragment(param) {
        if (this._basiscore) {
            throw new ClientException/* default */.A("Can't add fragment for already builded bc object.");
        }
        else {
            if (!this.elementList) {
                this.elementList = new Array();
            }
            if (typeof param === "string") {
                const newElements = document.querySelectorAll(param);
                if (newElements.length === 0) {
                    console.warn(`Selector '${param}' don't refer to any element(s).`);
                }
                else {
                    this.elementList.push(...newElements);
                }
            }
            else if (param instanceof Element) {
                this.elementList.push(param);
            }
            else {
                throw new ClientException/* default */.A("Invalid selector");
            }
            return this;
        }
    }
    setOptions(options) {
        if (this._basiscore) {
            throw new ClientException/* default */.A("Can't set option for already builded bc object.");
        }
        this.hostSetting = options;
        return this;
    }
    run() {
        var _a, _b;
        if (((_a = this.elementList) === null || _a === void 0 ? void 0 : _a.length) == 0) {
            throw new ClientException/* default */.A("No element(s) selected for start rendering!");
        }
        if (!this._basiscore) {
            const childContainer = esm5/* container */.kL.createChildContainer();
            childContainer.register("IHostOptions", {
                useValue: (_b = this.hostSetting) !== null && _b !== void 0 ? _b : {},
            });
            if (!this.elementList) {
                this.addFragment(document.documentElement);
            }
            childContainer.register("root.nodes", {
                useValue: this.elementList,
            });
            childContainer.register("dc", { useValue: childContainer });
            this._basiscore = childContainer.resolve("IBasisCore");
            const options = this._basiscore.context.options;
            if (options.serviceWorker) {
                if (BCWrapper._serviceWorkerAdded) {
                    console.warn("Try add service worker more than one.", this._basiscore.context.options);
                }
                else {
                    BCWrapper._serviceWorkerAdded = true;
                    this.tryAddServiceWorkerAsync();
                }
            }
            this.manager.Trigger(this._basiscore);
        }
        return this;
    }
    tryAddServiceWorkerAsync() {
        const options = this._basiscore.context.options;
        const filePath = typeof options.serviceWorker === "string"
            ? options.serviceWorker
            : "basiscore-serviceWorker.js";
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register(filePath).then((reg) => {
                console.log(`Service worker from '${filePath}' register successfully!`);
                this.tryActivePushAPI(reg);
            }, (e) => {
                const msg = `Error in register service worker.(${e})`;
                console.error(msg, e);
                alert(msg);
            });
        }
        else {
            const msg = "Service worker not support in browser!";
            console.error(msg);
            alert(msg);
        }
    }
    tryActiveNotification(callback) {
        return BCWrapper_awaiter(this, void 0, void 0, function* () {
            if ("Notification" in window) {
                const showDeniedError = () => {
                    const msg = `You have blocked notifications.(current permission is ${Notification.permission}`;
                    console.error(msg);
                    alert(msg);
                };
                if (Notification.permission === "granted") {
                    callback();
                }
                else if (Notification.permission !== "denied") {
                    const options = this._basiscore.context.options.push;
                    const dlg = options.permissionDlg;
                    if (typeof dlg === "string") {
                        document.querySelector(dlg).style.display = "block";
                    }
                    else {
                        dlg(true);
                    }
                    const btn = document.querySelector(options.permissionSubmit);
                    btn.addEventListener("click", (e) => BCWrapper_awaiter(this, void 0, void 0, function* () {
                        e.preventDefault();
                        if (typeof dlg === "string") {
                            document.querySelector(dlg).style.display = "none";
                        }
                        else {
                            dlg(false);
                        }
                        const status = yield Notification.requestPermission();
                        if (status !== "granted") {
                            showDeniedError();
                        }
                        else {
                            callback();
                        }
                    }));
                }
                else {
                    showDeniedError();
                }
            }
            else {
                console.error("Your browser does not support Push Notifications!");
                alert("Your browser does not support Push Notifications!");
            }
        });
    }
    tryActivePushAPI(reg) {
        const options = this._basiscore.context.options.push;
        if (options) {
            const trySendSubscriptionDataToServerAsync = (sub, options) => {
                const arrayBufferToBase64 = (buffer) => {
                    var binary = "";
                    var bytes = new Uint8Array(buffer);
                    var len = bytes.byteLength;
                    for (var i = 0; i < len; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    return window.btoa(binary);
                };
                const formData = new FormData();
                try {
                    if (options.params) {
                        Object.getOwnPropertyNames(options.params).forEach((key) => formData.append(key, options.params[key]));
                    }
                    formData.append("endpoint", sub.endpoint);
                    formData.append("p256dh", arrayBufferToBase64(sub.getKey("p256dh")));
                    formData.append("auth", arrayBufferToBase64(sub.getKey("auth")));
                }
                catch (er) {
                    const msg = `"Error in generate client push data for send to server. ${er}"`;
                    console.error(msg, er);
                    alert(msg);
                    throw er;
                }
                fetch(options.url, {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    body: formData,
                }).then((result) => BCWrapper_awaiter(this, void 0, void 0, function* () {
                    if (result.ok) {
                        console.log("Push api is activated. Subscription data send for server successfully!", yield result.text());
                    }
                    else {
                        const msg = `Error in send Push api subscription data for server [${result.status} (${result.statusText})]. Unable to activate Push Notification!`;
                        console.error(msg);
                        alert(msg);
                    }
                }), (er) => {
                    const msg = `Error in send Push api subscription data send for server (${er}). Unable to activate Push Notification!`;
                    console.error(msg, er);
                    alert(msg);
                });
            };
            const urlB64ToUint8Array = (base64String) => {
                const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
                const base64 = (base64String + padding)
                    .replace(/\-/g, "+")
                    .replace(/_/g, "/");
                const rawData = window.atob(base64);
                const outputArray = new Uint8Array(rawData.length);
                for (let i = 0; i < rawData.length; ++i) {
                    outputArray[i] = rawData.charCodeAt(i);
                }
                return outputArray;
            };
            const tryRegisterSubscriptionAsync = (reg) => {
                reg.pushManager.getSubscription().then((sub) => {
                    if (sub === null) {
                        reg.pushManager
                            .subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: urlB64ToUint8Array(options.applicationServerKey),
                        })
                            .then((sub) => trySendSubscriptionDataToServerAsync(sub, options), (er) => {
                            const msg = `Unable to subscribe push api. Unable to activate Push Notification!(${er})`;
                            console.error(msg, er);
                            alert(msg);
                        });
                    }
                    else {
                        trySendSubscriptionDataToServerAsync(sub, options);
                    }
                }, (cause) => {
                    const msg = `Error in get Subscription for push api (${cause}). Unable to activate Push Notification!`;
                    console.error(msg, cause);
                    alert(msg);
                });
            };
            this.tryActiveNotification(() => tryRegisterSubscriptionAsync(reg));
        }
    }
    setSource(sourceId, data, options) {
        if (!this._basiscore) {
            this.run();
        }
        else {
            this._basiscore.setSource(sourceId, data, options);
        }
        return this;
    }
    GetCommandListByCore(core) {
        return this._basiscore.GetCommandListByCore(core);
    }
    GetCommandList() {
        return this._basiscore.GetCommandList();
    }
    GetComponentList() {
        return this._basiscore.GetComponentList();
    }
}
BCWrapper._serviceWorkerAdded = false;

;// CONCATENATED MODULE: ./src/wrapper/BCWrapperFactory.ts


class BCWrapperFactory {
    constructor() {
        this.all = new Array();
        this.util = new UtilWrapper/* default */.A();
    }
    get global() {
        var _a;
        return (_a = this._global) !== null && _a !== void 0 ? _a : (this._global = this.new());
    }
    addFragment(param) {
        return this.global.addFragment(param);
    }
    setOptions(options) {
        return this.global.setOptions(options);
    }
    run() {
        return this.global.run();
    }
    setSource(sourceId, data, options) {
        return this.run().setSource(sourceId, data, options);
    }
    new() {
        var retVal = new BCWrapper();
        this.all.push(retVal);
        return retVal;
    }
}

// EXTERNAL MODULE: ./src/component/user-define-component/component/ExposerComponent.ts
var ExposerComponent = __webpack_require__(387);
;// CONCATENATED MODULE: ./src/index.ts




























console.log(`
______           _                               _ _            _   
| ___ \\         (_)                             | (_)          | |  
| |_/ / __ _ ___ _ ___  ___ ___  _ __ ___    ___| |_  ___ _ __ | |_ 
| ___ \\/ _\` / __| / __|/ __/ _ \\| '__/ _ \\  / __| | |/ _ \\ '_ \\| __|
| |_/ / (_| \\__ \\ \\__ \\ (_| (_) | | |  __/ | (__| | |  __/ | | | |_ 
\\____/ \\__,_|___/_|___/\\___\\___/|_|  \\___|  \\___|_|_|\\___|_| |_|\\__|
                                                                    
%cWelcome To BasisCore Ecosystem%c
follow us on https://BasisCore.com/
version:2.30.3`, " background: yellow;color: #0078C1; font-size: 2rem; font-family: Arial; font-weight: bolder", "color: #0078C1; font-size: 1rem; font-family: Arial;");
const src_$bc = new BCWrapperFactory();
__webpack_require__.g.$bc = src_$bc;
const loadListener = (_) => {
    window.removeEventListener("load", loadListener);
    if (src_$bc.all.length == 0 && HostOptions/* HostOptions */.j.defaultSettings.autoRender) {
        src_$bc.run();
    }
};
window.addEventListener("load", loadListener);


})();

basiscore = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=basiscore.js.map