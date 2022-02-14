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

	module.exports = __webpack_require__(1362);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1058:
/***/ (function(module, exports) {

	module.exports = require("./kendo.popup");

/***/ }),

/***/ 1362:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1058) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "mobile.shim",
	    name: "Shim",
	    category: "mobile",
	    description: "Mobile Shim",
	    depends: [ "popup" ],
	    hidden: true
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.mobile.ui,
	        Popup = kendo.ui.Popup,
	        SHIM = '<div class="km-shim"></div>',
	        HIDE = "hide",
	        Widget = ui.Widget;

	    var Shim = Widget.extend({
	        init: function(element, options) {
	            var that = this,
	                app = kendo.mobile.application,
	                os = kendo.support.mobileOS,
	                osname = app ? app.os.name : (os ? os.name : "ios"),
	                ioswp = osname === "ios" || osname === "wp" || (app ? app.os.skin : false),
	                bb = osname === "blackberry",
	                align = options.align || (ioswp ?  "bottom center" : bb ? "center right" : "center center"),
	                position = options.position || (ioswp ? "bottom center" : bb ? "center right" : "center center"),
	                effect = options.effect || (ioswp ? "slideIn:up" : bb ? "slideIn:left" : "fade:in"),
	                shim = $(SHIM).handler(that).hide();

	            Widget.fn.init.call(that, element, options);

	            that.shim = shim;
	            element = that.element;
	            options = that.options;

	            if (options.className) {
	                that.shim.addClass(options.className);
	            }

	            if (!options.modal) {
	                that.shim.on("down", "_hide");
	            }

	            (app ? app.element : $(document.body)).append(shim);

	            that.popup = new Popup(that.element, {
	                anchor: shim,
	                modal: true,
	                appendTo: shim,
	                origin: align,
	                position: position,
	                animation: {
	                    open: {
	                        effects: effect,
	                        duration: options.duration
	                    },
	                    close: {
	                        duration: options.duration
	                    }
	                },

	                close: function(e) {
	                    var prevented = false;

	                    if (!that._apiCall) {
	                        prevented = that.trigger(HIDE);
	                    }

	                    if (prevented) {
	                        e.preventDefault();
	                    }

	                    that._apiCall = false;
	                },

	                deactivate: function() { // Deactivate event can't be prevented.
	                    shim.hide();
	                },

	                open: function() {
	                    shim.show();
	                }
	            });

	            kendo.notify(that);
	        },

	        events: [ HIDE ],

	        options: {
	            name: "Shim",
	            modal: false,
	            align: undefined,
	            position: undefined,
	            effect: undefined,
	            duration: 200
	        },

	        show: function() {
	            this.popup.open();
	        },

	        hide: function() {
	            this._apiCall = true;
	            this.popup.close();
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            this.shim.kendoDestroy();
	            this.popup.destroy();
	            this.shim.remove();
	        },

	        _hide: function(e) {
	            if (!e || !$.contains(this.shim.children().children(".k-popup")[0], e.target)) {
	                this.popup.close();
	            }
	        }
	    });

	    ui.plugin(Shim);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });