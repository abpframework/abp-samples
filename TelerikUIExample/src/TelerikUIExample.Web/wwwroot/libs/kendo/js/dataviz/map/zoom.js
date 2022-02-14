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

	module.exports = __webpack_require__(941);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 896:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.core");

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(896) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {
	    var kendo = window.kendo;
	    var Widget = kendo.ui.Widget;
	    var keys = kendo.keys;
	    var proxy = $.proxy;

	    // Helper functions =======================================================
	    function button(dir, iconClass) {
	       return kendo.format(
	           '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-zoom-{0}" title="zoom-{0}" aria-label="zoom-{0}"><span class="k-button-icon k-icon {1}"></span></button>',
	           dir, iconClass);
	    }

	    var NS = ".kendoZoomControl";
	    var BUTTONS = button("in", "k-i-plus") + button("out", "k-i-minus");

	    var PLUS = 187;
	    var MINUS = 189;
	    var FF_PLUS = 61;
	    var FF_MINUS = 173;


	    var ZoomControl = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);
	            this._initOptions(options);

	            this.element.addClass("k-widget k-zoom-control k-button-group k-group-horizontal")
	                        .append(BUTTONS)
	                        .on("click" + NS, ".k-button", proxy(this, "_click"));

	            var parentElement = this.element.parent().closest("[" + kendo.attr("role") + "]");
	            this._keyroot = parentElement.length > 0 ? parentElement : this.element;

	            this._tabindex(this._keyroot);

	            this._keydown = proxy(this._keydown, this);
	            this._keyroot.on("keydown", this._keydown);
	        },

	        options: {
	            name: "ZoomControl",
	            zoomStep: 1
	        },

	        events: [
	            "change"
	        ],

	        _change: function(dir) {
	            var zoomStep = this.options.zoomStep;
	            this.trigger("change", {
	                delta: dir * zoomStep
	            });
	        },

	        _click: function(e) {
	            var button = $(e.currentTarget);
	            var dir = 1;

	            if (button.is(".k-zoom-out")) {
	                dir = -1;
	            }

	            this._change(dir);
	            e.preventDefault();
	        },

	        _keydown: function(e) {
	            switch (e.which) {
	                case keys.NUMPAD_PLUS:
	                case PLUS:
	                case FF_PLUS:
	                    this._change(1);
	                    break;

	                case keys.NUMPAD_MINUS:
	                case MINUS:
	                case FF_MINUS:
	                    this._change(-1);
	                    break;
	            }
	        }
	    });


	    // Exports ================================================================
	    kendo.dataviz.ui.plugin(ZoomControl);

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });