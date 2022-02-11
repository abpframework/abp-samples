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

	module.exports = __webpack_require__(1282);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1282:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1057)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	var __meta__ = {// jshint ignore:line
	    id: "floatinglabel",
	    name: "FloatingLabel",
	    category: "framework",
	    depends: ["core"],
	    hidden: true
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,
	        ui = kendo.ui,
	        NS = ".kendoFloatingLabel",
	        FLOATINGLABELCONTAINER = "k-floating-label-container",
	        EMPTY = "k-state-empty",
	        FOCUSED = "k-focus",
	        STATEDISABLED = "k-disabled",
	        NOCLICKCLASS = "k-no-click",
	        STATEREADONLY = "k-readonly",
	        proxy = $.proxy;

	    var FloatingLabel = Widget.extend({
	        init: function (element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);
	            options = $.extend(true, {}, options);

	            that.refresh();
	            that._editable({
	                readonly: that.options.widget.options.readonly !== undefined ? that.options.widget.options.readonly : false,
	                disable: that.options.widget.options.enable !== undefined ? !(that.options.widget.options.enable) : false
	            });

	            that.element.addClass(FLOATINGLABELCONTAINER);

	            kendo.notify(that);
	        },

	        options: {
	            name: 'FloatingLabel',
	            widget: null,
	            useReadOnlyClass: false
	        },

	        readonly: function(readonly) {
	            this._editable({
	                readonly: readonly === undefined ? true : readonly,
	                disable: false
	            });
	        },

	        enable: function(enable) {
	            this._editable({
	                readonly: false,
	                disable: !(enable = enable === undefined ? true : enable)
	            });
	        },

	        refresh: function () {
	            var that = this;
	            var element = that.element;

	            element
	                .removeClass(EMPTY)
	                .removeClass(FOCUSED);


	            if (!that.options.widget.element.val()) {
	                element.addClass(EMPTY);
	            }

	            if (document.activeElement === that.options.widget.element[0]) {
	                element.addClass(FOCUSED);
	            }
	        },

	        destroy: function() {
	            var that = this;

	            that.element.off(NS);
	            Widget.fn.destroy.call(that);
	        },

	        _editable: function(options) {
	            var that = this;
	            var element = that.element;
	            var disable = options.disable;
	            var readonly = options.readonly;

	            element.off(NS);

	            if (!readonly && !disable) {
	                element
	                    .removeClass(STATEDISABLED)
	                    .removeClass(that.options.useReadOnlyClass ? STATEREADONLY : NOCLICKCLASS);

	                element.on("focusin" + NS, proxy(that.refresh, that));
	                element.on("focusout" + NS, proxy(that.refresh, that));
	            } else {
	                element
	                    .toggleClass(STATEDISABLED, disable)
	                    .toggleClass(that.options.useReadOnlyClass ? STATEREADONLY : NOCLICKCLASS, readonly);
	            }
	        }
	    });
	    ui.plugin(FloatingLabel);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });