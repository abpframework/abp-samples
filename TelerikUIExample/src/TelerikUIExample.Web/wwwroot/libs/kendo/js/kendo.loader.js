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

	module.exports = __webpack_require__(1323);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1323:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1057)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	var __meta__ = {// jshint ignore:line
	    id: "loader",
	    name: "Loader",
	    category: "web",
	    description: "The Loader is a visual indicator of loading data across different parts of the page.",
	    depends: ["core"]
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,
	        ui = kendo.ui,

	        HIDDEN = 'k-hidden',
	        ROLE = 'role',
	        ARIA_LABEL = 'aria-label',
	        ARIA_HIDDEN = 'aria-hidden',
	        ARIA_LIVE = 'aria-live';

	    var loaderClasses = {
	        loader: "k-widget k-loader",
	        canvas: "k-loader-canvas",
	        segment: "k-loader-segment"
	    };

	    var loaderTypes = {
	        'pulsing': { className: 'pulsing-2', segments: 2 },
	        'infinite-spinner': { className: 'spinner-3', segments: 3 },
	        'converging-spinner': { className: 'spinner-4', segments: 4 }
	    };

	    var Loader = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that._render();

	            that._appearance();

	            kendo.notify(that);
	        },

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(that);
	        },

	        options: {
	            name: 'Loader',
	            themeColor: "primary",
	            sizes: {
	                'small': 'sm',
	                'medium': 'md',
	                'large': 'lg'
	            },
	            size: 'medium',
	            type: "pulsing",
	            visible: true,
	            messages: {
	                "loading": "Loading"
	            },
	            _classNames: []
	        },

	        _render: function() {
	            var that = this,
	                wrapper = that.element,
	                type = that.options.type,
	                typeData = loaderTypes[type] === undefined ? type : loaderTypes[type],
	                segments = [];

	            wrapper
	                .empty()
	                .attr(ARIA_LABEL, that.options.messages.loading)
	                .attr(ROLE, "alert")
	                .attr(ARIA_LIVE, "polite");

	            if (typeData.segments) {
	                for (var i = 0; i < typeData.segments; i += 1) {
	                    segments.push($('<span/>').addClass(loaderClasses.segment));
	                }
	            }

	            $("<div>").addClass(loaderClasses.canvas)
	                .append(segments)
	                .appendTo(wrapper);
	        },

	        _appearance: function() {
	            var that = this;

	            that._themeColor = that.options.themeColor;
	            that._sizes = that.options.sizes;
	            that._size = that.options.size;
	            that._type = that.options.type;
	            that._visible = that.options.visible;

	            that._updateClassNames();
	        },

	        _updateClassNames: function() {
	            var that = this,
	                classNames = [loaderClasses.loader],
	                keepClassNames = that.options._classNames,
	                themeColor = that._themeColor,
	                sizes = that._sizes,
	                size = that._size,
	                type = that._type,
	                typeData = loaderTypes[type] === undefined ? type : loaderTypes[type],
	                sizeAbbr = sizes[size] === undefined ? size : sizes[size],
	                visible = that._visible;

	            // Remove all class names
	            that.element.removeClass(function(index, className) {
	                if (className.indexOf('k-') === 0 && keepClassNames.indexOf(className) === -1) {
	                    that.element.removeClass(className);
	                }
	            });

	            // Color
	            if (typeof themeColor === 'string' && themeColor !== '' && themeColor !== 'inherit') {
	                classNames.push('k-loader-' + themeColor);
	            }

	            // Size
	            if (typeof size === 'string' && size !== '' && sizeAbbr !== '') {
	                classNames.push('k-loader-' + sizeAbbr);
	            }

	            // Type
	            if (typeof type === 'string' && type !== '') {
	                classNames.push('k-loader-' + ($.isPlainObject(typeData) ? typeData.className : type));
	            }

	            // Visibility
	            if (visible === false) {
	                classNames.push(HIDDEN);
	            }

	            that.element.attr(ARIA_HIDDEN, !visible);

	            // Apply classnames
	            that.element.addClass(classNames.join(' '));
	        },

	        setOptions: function(options) {
	            var that = this;

	            Widget.fn.setOptions.call(that, options);

	            that._render();

	            that._appearance();
	        },

	        themeColor: function(color) {
	            var that = this;

	            if (arguments.length === 0 || color === undefined) {
	                return that._themeColor;
	            }

	            that._themeColor = color;

	            that._updateClassNames();
	        },

	        hide: function() {
	            var that = this;

	            that._visible = false;

	            that._updateClassNames();
	        },

	        show: function() {
	            var that = this;

	            that._visible = true;

	            that._updateClassNames();
	        }
	    });

	    ui.plugin(Loader);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });