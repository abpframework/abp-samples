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

	module.exports = __webpack_require__(1408);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1408:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(1409)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "ripplecontainer",
	    name: "RippleContainer",
	    category: "web",
	    depends: [ "core" ]
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        extend = $.extend,
	        ripple = kendo.util.ripple;

	    var RippleContainer = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element);

	            element = that.wrapper = that.element;

	            that.options = extend({}, that.options, options);

	            that.registerListeners();
	        },

	        options: {
	            name: "RippleContainer",
	            elements: [
	                { selector: ".k-button:not(li)" },
	                { selector: ".k-list > .k-item", options: { global: true } },
	                { selector: ".k-checkbox-label, .k-radio-label" },
	                {
	                    selector: ".k-checkbox, .k-radio",
	                    options: {
	                        events: ["focusin"],
	                        container: function(el) {
	                            if (/\b(k-checkbox|k-radio)\b/.test(el.className)) {
	                                return el.nextElementSibling;
	                            }
	                        }
	                    }
	                }
	            ]
	        },

	        removeListeners: function() {},

	        registerListeners: function() {
	            var that = this;
	            var root = that.element[0];
	            var elements = that.options.elements;

	            that.removeListeners();

	            var callback = ripple.register(root, elements);

	            that.removeListeners = callback;
	        },

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(that);

	            that.removeListeners();
	        }
	    });

	    ui.plugin(RippleContainer);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1409:
/***/ (function(module, exports) {

	module.exports = require("./util/ripple");

/***/ })

/******/ });