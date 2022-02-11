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

	module.exports = __webpack_require__(940);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 896:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.core");

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(896) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {
	    var kendo = window.kendo;
	    var Widget = kendo.ui.Widget;
	    var keys = kendo.keys;
	    var proxy = $.proxy;

	    var NS = ".kendoNavigator";

	    // Helper functions =======================================================
	    function button(dir) {
	       return kendo.format(
	           '<button class="k-button k-button-square k-rounded-full k-button-flat k-button-flat-base k-icon-button k-navigator-{0}" aria-label="move {0}">' +
	               '<span class="k-button-icon k-icon k-i-arrow-60-{0}"></span>' +
	           '</button>', dir);
	    }

	    var BUTTONS = button("up") + button("right") + button("down") + button("left");

	    var Navigator = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);
	            this._initOptions(options);

	            this.element.addClass("k-widget k-navigator")
	                        .append(BUTTONS)
	                        .on("click" + NS, ".k-button", proxy(this, "_click"));

	            var parentElement = this.element.parent().closest("[" + kendo.attr("role") + "]");
	            this._keyroot = parentElement.length > 0 ? parentElement : this.element;
	            this._tabindex(this._keyroot);

	            this._keydown = proxy(this._keydown, this);
	            this._keyroot.on("keydown", this._keydown);
	        },

	        options: {
	            name: "Navigator",
	            panStep: 1
	        },

	        events: [
	            "pan"
	        ],

	        dispose: function() {
	            this._keyroot.off("keydown", this._keydown);
	        },

	        _pan: function(x, y) {
	            var panStep = this.options.panStep;
	            this.trigger("pan", {
	                x: x * panStep,
	                y: y * panStep
	            });
	        },

	        _click: function(e) {
	            var x = 0;
	            var y = 0;
	            var button = $(e.currentTarget);

	            if (button.is(".k-navigator-up")) {
	                y = 1;
	            } else if (button.is(".k-navigator-down")) {
	                y = -1;
	            } else if (button.is(".k-navigator-right")) {
	                x = 1;
	            } else if (button.is(".k-navigator-left")) {
	                x = -1;
	            }

	            this._pan(x, y);
	            e.preventDefault();
	        },

	        _keydown: function(e) {
	            switch (e.which) {
	                case keys.UP:
	                    this._pan(0, 1);
	                    e.preventDefault();
	                    break;

	                case keys.DOWN:
	                    this._pan(0, -1);
	                    e.preventDefault();
	                    break;

	                case keys.RIGHT:
	                    this._pan(1, 0);
	                    e.preventDefault();
	                    break;

	                case keys.LEFT:
	                    this._pan(-1, 0);
	                    e.preventDefault();
	                    break;
	            }
	        }
	    });

	    // Exports ================================================================
	    kendo.dataviz.ui.plugin(Navigator);

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ })

/******/ });