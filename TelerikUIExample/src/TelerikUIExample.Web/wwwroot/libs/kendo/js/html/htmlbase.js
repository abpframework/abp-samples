module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1047);
	module.exports = __webpack_require__(1047);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(20)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($, undefined) {
	    var kendo = window.kendo,
	        Class = kendo.Class;

	    kendo.html = kendo.html || {};

	    var HTMLBase = Class.extend({
	        init: function (element, options) {
	            var that = this;
	            that.element = $(element);
	            options = options || {};
	            delete options.name;
	            that._initOptions(options);
	        },
	        options: {
	            stylingOptions: []
	        },
	        _addClasses: function () {
	            var that = this,
	                options = that.options,
	                stylingOptions = options.stylingOptions;

	            stylingOptions = stylingOptions.map(function(option){
	                var validFill;

	                if (option === "themeColor") {
	                    validFill = kendo.cssProperties.getValidClass({
	                        widget: options.name,
	                        propName: "fillMode",
	                        value: options.fillMode
	                    });

	                    if (!validFill || validFill.length === 0) {
	                        return "";
	                    }
	                }

	                return kendo.cssProperties.getValidClass({
	                    widget: options.name,
	                    propName: option,
	                    value: options[option],
	                    fill: options.fillMode
	                });
	            });

	            that.wrapper.addClass(stylingOptions.join(" "));
	        },
	        html: function () {
	            var that = this;

	            return that.wrapper[0].outerHTML;
	        }
	    });

	    $.extend(kendo.html, {
	        HTMLBase: HTMLBase
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });