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

	__webpack_require__(1045);
	module.exports = __webpack_require__(1045);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1044:
/***/ (function(module, exports) {

	module.exports = require("./htmlbase");

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(1044)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($, undefined) {
	    var kendo = window.kendo,
	        HTMLBase = kendo.html.HTMLBase;

	    var renderChip = function (element, options) {
	        if (!element || $.isPlainObject(element)) {
	            options = element;
	            element = $("<span></span>");
	        }

	        return (new HTMLChip(element, options)).html();
	    };

	    var HTMLChip = HTMLBase.extend({
	        init: function (element, options) {
	            var that = this;
	            HTMLBase.fn.init.call(that, element, options);
	            that._wrapper();
	        },
	        options: {
	            name: "HTMLChip",
	            size: "medium",
	            rounded: "medium",
	            fillMode: "solid",
	            themeColor: "base",
	            attr: {},
	            icon: "",
	            iconAttr: {},
	            removable: false,
	            removableAttr: {},
	            removeIcon: "x",
	            content: "",
	            text: "",
	            stylingOptions: [ "size", "rounded", "fillMode", "themeColor" ]
	        },
	        _wrapper: function () {
	            var that = this,
	                options = that.options;

	            that.wrapper = that.element.wrap("<span class='k-chip'></span>").parent().attr(options.attr);
	            that._addClasses();

	            if (options.icon) {
	                that.wrapper.prepend($("<span class='k-chip-icon k-icon k-i-" + options.icon + "'></span>").attr(options.iconAttr));
	            }

	            that.element.addClass("k-chip-content");
	            if (options.text) {
	                that.element.text(options.text);
	            }

	            if (options.removable) {
	                that.wrapper.append($("<span class='k-chip-icon k-icon k-i-" + options.removeIcon + "'></span>").attr(options.removableAttr));
	            }
	        }
	    });

	    $.extend(kendo.html, {
	        renderChip: renderChip,
	        HTMLChip: HTMLChip
	    });

	    kendo.cssProperties.registerPrefix("HTMLChip", "k-chip-");

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });