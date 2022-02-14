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

	module.exports = __webpack_require__(1488);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1488:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "toggleinputbase",
	    name: "ToggleInputBase",
	    category: "web",
	    description: "The ToggleInputBase component.",
	    depends: [ "core" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        CHANGE = "change",
	        DISABLED = "disabled",
	        CHECKED = "checked";

	    var ToggleInputBase = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that._wrapper();

	            that._initSettings();

	            that._attachEvents();

	            kendo.notify(that, kendo.ui);
	        },

	        events: [
	            CHANGE
	        ],

	        options: {
	            name: "ToggleInputBase"
	        },

	        NS: ".kendoToggleInputBase",
	        RENDER_INPUT: $.noop,

	        check: function(checked) {
	            var that = this,
	                element = that.element[0];

	            if (checked === undefined) {
	                return element.checked;
	            }

	            if (element.checked !== checked) {
	                that.options.checked = element.checked = checked;
	            }

	            if (checked) {
	                that.element.attr(CHECKED, CHECKED);
	            } else {
	                that.element.prop(CHECKED, false);
	            }
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            this.wrapper.off(this.NS);
	        },

	        enable: function(enable) {
	            var element = this.element;

	            if(typeof enable == "undefined") {
	                enable = true;
	            }

	            this.options.enabled = enable;

	            if(enable) {
	                element.prop(DISABLED, false);
	            } else {
	                element.attr(DISABLED, DISABLED);
	            }
	        },

	        toggle: function() {
	            var that = this;

	            that.check(!that.element[0].checked);
	        },

	        _attachEvents: function() {
	            this.element.on(CHANGE + this.NS, this._change.bind(this));
	        },

	        _change: function () {
	            var checked = this.element[0].checked;

	            this.trigger(CHANGE, { checked: checked });
	        },

	        _initSettings: function () {
	            var that = this,
	                element = that.element[0],
	                options = that.options;

	            if (options.checked === null) {
	                options.checked = element.checked;
	            }

	            that.check(options.checked);

	            options.enabled = options.enabled && !that.element.attr(DISABLED);
	            that.enable(options.enabled);
	        },

	        _wrapper: function() {
	            var that = this,
	                options = that.options,
	                inputMethod = that.RENDER_INPUT;


	            inputMethod(that.element, $.extend({}, options));
	            that.element.removeClass('input-validation-error');

	            that.wrapper = that.element;
	        }
	    });

	    ui.plugin(ToggleInputBase);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });