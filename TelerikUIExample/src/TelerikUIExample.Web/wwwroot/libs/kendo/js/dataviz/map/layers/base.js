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

	module.exports = __webpack_require__(923);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(924), __webpack_require__(925) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($, undefined) {
	    // Imports ================================================================
	    var proxy = $.proxy,

	        kendo = window.kendo,
	        Class = kendo.Class,

	        dataviz = kendo.dataviz,
	        deepExtend = kendo.deepExtend,

	        Extent = dataviz.map.Extent,

	        util = kendo.drawing.util,
	        defined = util.defined;

	    // Implementation =========================================================
	    var Layer = Class.extend({
	        init: function(map, options) {
	            this._initOptions(options);
	            this.map = map;

	            this.element = $("<div class='k-layer'></div>")
	               .css({
	                   "zIndex": this.options.zIndex,
	                   "opacity": this.options.opacity
	               })
	               .appendTo(map.scrollElement);

	            this._beforeReset = proxy(this._beforeReset, this);
	            this._reset = proxy(this._reset, this);
	            this._resize = proxy(this._resize, this);
	            this._panEnd = proxy(this._panEnd, this);
	            this._activate();

	            this._updateAttribution();
	        },

	        destroy: function() {
	            this._deactivate();
	        },

	        show: function() {
	            this.reset();
	            this._activate();
	            this._applyExtent(true);
	        },

	        hide: function() {
	            this._deactivate();
	            this._setVisibility(false);
	        },

	        reset: function() {
	            this._beforeReset();
	            this._reset();
	        },

	        _reset: function() {
	            this._applyExtent();
	        },

	        _beforeReset: $.noop,

	        _resize: $.noop,

	        _panEnd: function() {
	            this._applyExtent();
	        },

	        _applyExtent: function() {
	            var options = this.options;

	            var zoom = this.map.zoom();
	            var matchMinZoom = !defined(options.minZoom) || zoom >= options.minZoom;
	            var matchMaxZoom = !defined(options.maxZoom) || zoom <= options.maxZoom;

	            var extent = Extent.create(options.extent);
	            var inside = !extent || extent.overlaps(this.map.extent());

	            this._setVisibility(matchMinZoom && matchMaxZoom && inside);
	        },

	        _setVisibility: function(visible) {
	            this.element.css("display", visible ? "" : "none");
	        },

	        _activate: function() {
	            var map = this.map;
	            this._deactivate();
	            map.bind("beforeReset", this._beforeReset);
	            map.bind("reset", this._reset);
	            map.bind("resize", this._resize);
	            map.bind("panEnd", this._panEnd);
	        },

	        _deactivate: function() {
	            var map = this.map;
	            map.unbind("beforeReset", this._beforeReset);
	            map.unbind("reset", this._reset);
	            map.unbind("resize", this._resize);
	            map.unbind("panEnd", this._panEnd);
	        },

	        _updateAttribution: function() {
	            var attr = this.map.attribution;

	            if (attr) {
	                attr.add(this.options.attribution);
	            }
	        }
	    });

	    // Exports ================================================================
	    deepExtend(dataviz, {
	        map: {
	            layers: {
	                Layer: Layer
	            }
	        }
	    });

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 924:
/***/ (function(module, exports) {

	module.exports = require("../../../kendo.core");

/***/ }),

/***/ 925:
/***/ (function(module, exports) {

	module.exports = require("../location");

/***/ })

/******/ });