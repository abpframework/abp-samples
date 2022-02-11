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

	module.exports = __webpack_require__(1355);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1355:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "mobile.loader",
	    name: "Loader",
	    category: "mobile",
	    description: "Mobile Loader",
	    depends: [ "core" ],
	    hidden: true
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.mobile.ui,
	        Widget = ui.Widget,
	        CAPTURE_EVENTS = $.map(kendo.eventMap, function(value) { return value; }).join(" ").split(" ");

	    var Loader = Widget.extend({
	        init: function(container, options) {
	            var that = this,
	                element = $('<div class="km-loader"><span class="km-loading km-spin"></span><span class="km-loading-left"></span><span class="km-loading-right"></span></div>');

	            Widget.fn.init.call(that, element, options);

	            that.container = container;
	            that.captureEvents = false;

	            that._attachCapture();

	            element.append(that.options.loading).hide().appendTo(container);
	        },

	        options: {
	            name: "Loader",
	            loading: "<h1>Loading...</h1>",
	            timeout: 100
	        },

	        show: function() {
	            var that = this;

	            clearTimeout(that._loading);

	            if (that.options.loading === false) {
	                return;
	            }

	            that.captureEvents = true;
	            that._loading = setTimeout(function() {
	                that.element.show();
	            }, that.options.timeout);
	        },

	        hide: function() {
	            this.captureEvents = false;
	            clearTimeout(this._loading);
	            this.element.hide();
	        },

	        changeMessage: function(message) {
	            this.options.loading = message;
	            this.element.find(">h1").html(message);
	        },

	        transition: function() {
	            this.captureEvents = true;
	            this.container.css("pointer-events", "none");
	        },

	        transitionDone: function() {
	            this.captureEvents = false;
	            this.container.css("pointer-events", "");
	        },

	        _attachCapture: function() {
	            var that = this;
	            that.captureEvents = false;

	            function capture(e) {
	                if (that.captureEvents) {
	                    e.preventDefault();
	                }
	            }

	            for (var i = 0; i < CAPTURE_EVENTS.length; i ++) {
	                that.container[0].addEventListener(CAPTURE_EVENTS[i], capture, true);
	            }
	        }
	    });

	    ui.plugin(Loader);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });