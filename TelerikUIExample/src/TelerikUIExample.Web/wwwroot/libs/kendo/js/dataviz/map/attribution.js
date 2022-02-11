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

	module.exports = __webpack_require__(920);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 893:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.drawing");

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(893) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function() {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,
	        template = kendo.template,

	        util = kendo.drawing.util,
	        valueOrDefault = util.valueOrDefault,
	        defined = util.defined;

	    var Attribution = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);
	            this._initOptions(options);
	            this.items = [];
	            this.element.addClass("k-widget k-attribution");
	        },

	        options: {
	            name: "Attribution",
	            separator: "&nbsp;|&nbsp;",
	            itemTemplate: "#= text #"
	        },

	        filter: function(extent, zoom) {
	            this._extent = extent;
	            this._zoom = zoom;
	            this._render();
	        },

	        add: function(item) {
	            if (defined(item)) {
	                if (typeof item === "string") {
	                    item = { text: item };
	                }

	                this.items.push(item);
	                this._render();
	            }
	        },

	        remove: function(text) {
	            var result = [];
	            for (var i = 0; i < this.items.length; i++) {
	                var item = this.items[i];
	                if (item.text !== text) {
	                    result.push(item);
	                }
	            }

	            this.items = result;

	            this._render();
	        },

	        clear: function() {
	            this.items = [];
	            this.element.empty();
	        },

	        _render: function() {
	            var result = [];
	            var itemTemplate = template(this.options.itemTemplate);

	            for (var i = 0; i < this.items.length; i++) {
	                var item = this.items[i];
	                var text = this._itemText(item);
	                if (text !== "") {
	                    result.push(itemTemplate({
	                        text: text
	                    }));
	                }
	            }

	            if (result.length > 0) {
	                this.element.empty()
	                    .append(result.join(this.options.separator))
	                    .show();
	            } else {
	                this.element.hide();
	            }
	        },

	        _itemText: function(item) {
	            var text = "";
	            var inZoomLevel = this._inZoomLevel(item.minZoom, item.maxZoom);
	            var inArea = this._inArea(item.extent);

	            if (inZoomLevel && inArea) {
	                text += item.text;
	            }

	            return text;
	        },

	        _inZoomLevel: function(min, max) {
	            var result = true;
	            min = valueOrDefault(min, -Number.MAX_VALUE);
	            max = valueOrDefault(max, Number.MAX_VALUE);

	            result = this._zoom > min && this._zoom < max;

	            return result;
	        },

	        _inArea: function(area) {
	            var result = true;

	            if (area) {
	                result = area.contains(this._extent);
	            }

	            return result;
	        }
	    });

	    kendo.dataviz.ui.plugin(Attribution);
	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });