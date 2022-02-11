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

	__webpack_require__(959);
	module.exports = __webpack_require__(959);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 954:
/***/ (function(module, exports) {

	module.exports = require("./kendo-drawing");

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(954), __webpack_require__(960) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {

	    var kendo = window.kendo;
	    var draw = kendo.drawing;
	    var DrawingSurface = draw.Surface;
	    var Widget = kendo.ui.Widget;
	    var deepExtend = kendo.deepExtend;
	    var proxy = $.proxy;

	    kendo.support.svg = DrawingSurface.support.svg;
	    kendo.support.canvas = DrawingSurface.support.canvas;

	    var Surface = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, {});

	            this.options = deepExtend({}, this.options, options);

	            this._instance = DrawingSurface.create(this.element[0], options);
	            if (this._instance.translate) {
	                this.translate = translate;
	            }

	            this._triggerInstanceHandler = proxy(this._triggerInstanceEvent, this);
	            this._bindHandler("click");
	            this._bindHandler("mouseenter");
	            this._bindHandler("mouseleave");
	            this._bindHandler("mousemove");

	            this._enableTracking();
	        },

	        options: {
	            name: "Surface",
	            tooltip: {}
	        },

	        events: [
	            "click",
	            "mouseenter",
	            "mouseleave",
	            "mousemove",
	            "resize",
	            "tooltipOpen",
	            "tooltipClose"
	        ],

	        _triggerInstanceEvent: function(e) {
	            this.trigger(e.type, e);
	        },

	        _bindHandler: function(event) {
	            this._instance.bind(event, this._triggerInstanceHandler);
	        },

	        draw: function(element) {
	            this._instance.draw(element);
	        },

	        clear: function() {
	            if (this._instance) {
	                this._instance.clear();
	            }
	            this.hideTooltip();
	        },

	        destroy: function() {
	            if (this._instance) {
	                this._instance.destroy();
	                delete this._instance;
	            }

	            if (this._tooltip) {
	                this._tooltip.destroy();
	                delete this._tooltip;
	            }

	            Widget.fn.destroy.call(this);
	        },

	        exportVisual: function() {
	            return this._instance.exportVisual();
	        },

	        eventTarget: function(e) {
	            return this._instance.eventTarget(e);
	        },

	        showTooltip: function(shape, options) {
	            if (this._tooltip) {
	                this._tooltip.show(shape, options);
	            }
	        },

	        hideTooltip: function() {
	            if (this._tooltip) {
	                this._tooltip.hide();
	            }
	        },

	        suspendTracking: function() {
	            this._instance.suspendTracking();
	            this.hideTooltip();
	        },

	        resumeTracking: function() {
	            this._instance.resumeTracking();
	        },

	        getSize: function() {
	            return {
	                width: this.element.width(),
	                height: this.element.height()
	            };
	        },

	        setSize: function(size) {
	            this.element.css({
	                width: size.width,
	                height: size.height
	            });

	            this._size = size;
	            this._instance.currentSize(size);
	            this._resize();
	        },

	        _resize: function() {
	            this._instance.currentSize(this._size);
	            this._instance._resize();
	        },

	        _enableTracking: function() {
	            if (kendo.ui.Popup) {
	                this._tooltip = new draw.SurfaceTooltip(this, this.options.tooltip || {});
	            }
	        }
	    });

	    kendo.ui.plugin(Surface);

	    Surface.create = function(element, options) {
	        return new Surface(element, options);
	    };

	    kendo.drawing.Surface = Surface;

	    function translate(offset) {
	        this._instance.translate(offset);
	    }

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

	module.exports = require("./surface-tooltip");

/***/ })

/******/ });