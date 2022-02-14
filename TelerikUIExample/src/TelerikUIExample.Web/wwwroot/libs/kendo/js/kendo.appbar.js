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

	module.exports = __webpack_require__(1067);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "appbar",
	    name: "AppBar",
	    category: "web",
	    depends: [ "core"]
	};

	var spacerTemplate = "<span class='k-appbar-spacer'></span>";

	(function($) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        RESIZE = "resize",
	        proxy = $.proxy;

	    var AppBar = Widget.extend( {
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that.element = $(element).addClass("k-appbar");

	            if (that.options.position != "none") {
	                that.element.addClass("k-appbar-" + that.options.position);
	            }

	            that.element
	                .addClass("k-appbar-" + that.options.positionMode + " k-appbar-" + that.options.themeColor)
	                .attr("role", "toolbar");

	            that._initItems();
	            that._attachEvents();
	        },

	        events: [
	            RESIZE
	        ],

	        options: {
	            name: "AppBar",
	            positionMode: "static",
	            position: "none",
	            themeColor: "light",
	            items: []
	        },

	        destroy: function() {
	            if (this.resizeHandler) {
	                kendo.unbindResize(this.resizeHandler);
	                this.resizeHandler = null;
	            }
	            Widget.fn.destroy.call(this);
	        },

	        setOptions: function(options) {
	            var that = this;

	            if (that.options.position != "none") {
	                that.element.removeClass("k-appbar-" + that.options.position);
	            }

	            that.element
	                .removeClass("k-appbar-" + that.options.positionMode +
	                      " k-appbar-" + that.options.themeColor);

	            kendo.deepExtend(that.options, options);
	            this.destroy();
	            this.element.empty();
	            this.init(this.element, this.options);
	        },

	        _initItems: function () {
	            var that = this;
	            var options = that.options;
	            var items = options.items;
	            var item;
	            var html = "";
	            var separator;

	            for (var i = 0; i < items.length; i++) {
	                item = items[i];

	                if (item.type == "spacer") {
	                    separator = $(kendo.template(spacerTemplate)({})).addClass(item.className);
	                    if (item.width) {
	                        separator.addClass("k-appbar-spacer-sized");
	                        separator.css("width", typeof item.width === "string" ? item.width : item.width + "px");
	                    }
	                    html += separator[0].outerHTML;
	                } else {
	                    if (!item.template) {
	                        throw new Error("Having a template for the contentItem is mandatory");
	                    }
	                    if (item.className) {
	                        html += "<div class='k-appbar-section " + item.className + "'>";
	                    } else {
	                        html += "<div class='k-appbar-section'>";
	                    }
	                    html += kendo.template(item.template)({});
	                    html += "</div>";
	                }
	            }

	            that.element.html(html);
	        },

	        _resize: function () {
	            this.trigger(RESIZE);
	        },

	        _attachEvents: function () {
	            var that = this;

	            that.resizeHandler = proxy(that._resize, that);

	            kendo.onResize(that.resizeHandler);
	        }
	    });

	    ui.plugin(AppBar);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });