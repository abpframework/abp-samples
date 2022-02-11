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

	module.exports = __webpack_require__(1356);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1330:
/***/ (function(module, exports) {

	module.exports = require("./kendo.mobile.shim");

/***/ }),

/***/ 1333:
/***/ (function(module, exports) {

	module.exports = require("./kendo.mobile.view");

/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1330), __webpack_require__(1333) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "mobile.modalview",
	    name: "ModalView",
	    category: "mobile",
	    description: "The Kendo ModalView is used to present self-contained functionality in the context of the current task.",
	    depends: [ "mobile.shim", "mobile.view" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.mobile.ui,
	        Shim = ui.Shim,
	        Widget = ui.Widget,
	        BEFORE_OPEN = "beforeOpen",
	        OPEN = "open",
	        CLOSE = "close",
	        INIT = "init",
	        WRAP = '<div class="km-modalview-wrapper"></div>';

	    var ModalView = ui.View.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that._id();
	            that._wrap();
	            that._shim();

	            if (!this.options.$angular) {
	                that._layout();
	                that._scroller();
	                that._model();
	            }

	            that.element.css("display", "");

	            that.trigger(INIT);
	        },

	        events: [
	            INIT,
	            BEFORE_OPEN,
	            OPEN,
	            CLOSE
	        ],

	        options: {
	            name: "ModalView",
	            modal: true,
	            width: null,
	            height: null
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            this.shim.destroy();
	        },

	        open: function(target) {
	            var that = this;
	            that.target = $(target);
	            that.shim.show();

	            that._invokeNgController();

	            // necessary for the mobile view interface
	            that.trigger("show", { view: that });
	        },

	        // Interface implementation, called from the pane click handlers
	        openFor: function(target) {
	            if (!this.trigger(BEFORE_OPEN, { target: target })) {
	                this.open(target);
	                this.trigger(OPEN, { target: target });
	            }
	        },

	        close: function() {
	            if (this.element.is(":visible") && !this.trigger(CLOSE)) {
	                this.shim.hide();
	            }
	        },

	        _wrap: function() {
	            var that = this,
	                element = that.element,
	                options = that.options,
	                width, height;

	            width = element[0].style.width || "auto";
	            height = element[0].style.height || "auto";

	            element.addClass("km-modalview").wrap(WRAP);

	            that.wrapper = element.parent().css({
	                width: options.width || width || 300,
	                height: options.height || height || 300
	            }).addClass(height == "auto" ? " km-auto-height" : "");

	            element.css({ width: "", height: "" });
	        },

	        _shim: function() {
	            var that = this;

	            that.shim = new Shim(that.wrapper, {
	                modal: that.options.modal,
	                position: "center center",
	                align: "center center",
	                effect: "fade:in",
	                className: "km-modalview-root",
	                hide: function(e) {
	                    if (that.trigger(CLOSE)) {
	                        e.preventDefault();
	                    }
	                }
	            });
	        }
	    });

	    ui.plugin(ModalView);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });