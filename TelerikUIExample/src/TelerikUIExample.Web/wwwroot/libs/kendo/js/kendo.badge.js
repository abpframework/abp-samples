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

	module.exports = __webpack_require__(1089);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1057)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	var __meta__ = {// jshint ignore:line
	    id: "badge",
	    name: "Badge",
	    category: "web", // suite
	    description: "The Badge decorates avatars, navigation menus, or other components in the application when visual notification is needed",
	    depends: ["core"] // dependencies
	};

	(function ($, undefined) {
	    var kendo = window.kendo;
	    var Widget = kendo.ui.Widget;
	    var ui = kendo.ui;
	    var HIDDEN = 'k-hidden';

	    var iconTemplate = '<span class=\'k-badge-icon k-icon k-i-#= icon #\'></span>';
	    var svgIconTemplate = '<span class=\'k-badge-icon k-svg-icon\'>#= icon #</span>';

	    var Badge = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that._content();

	            that._appearance();

	            kendo.notify(that);
	        },

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(that);
	        },

	        options: {
	            name: 'Badge',
	            cutoutBorder: false,
	            data: {},
	            fill: 'solid',
	            icon: '',
	            max: Infinity,
	            position: 'inline',
	            align: '',
	            sizes: {
	                'small': 'sm',
	                'medium': 'md',
	                'large': 'lg'
	            },
	            size: 'medium',
	            shape: 'rounded',
	            template: null,
	            text: '',
	            themeColor: 'secondary',
	            visible: true,
	            _classNames: []
	        },

	        _content: function() {
	            var that = this;
	            var text = that.options.text;
	            var template = that.options.template;
	            var data = that.options.data;
	            var icon = that.options.icon;

	            // Order of precedence
	            // 1) template
	            // 2) icon
	            // 3) text
	            // 4) content

	            if (template !== null) {
	                that._text = text;
	                that._template = kendo.template(template).bind(that);
	                that.element.html( that._template(data) );

	                return;
	            }

	            if (icon !== '') {
	                that.icon(icon);

	                return;
	            }

	            if (text !== '') {
	                that.text(text);

	                return;
	            }

	            that.text(that.element.html());
	        },

	        _appearance: function() {
	            var that = this;
	            that._themeColor = that.options.themeColor;
	            that._shape = that.options.shape;
	            that._sizes = that.options.sizes;
	            that._size = that.options.size;
	            that._fill = that.options.fill;
	            that._cutoutBorder = that.options.cutoutBorder;
	            that._align = that.options.align;
	            that._position = that.options.position;
	            that._visible = that.options.visible;

	            that._updateClassNames();
	        },

	        _updateClassNames: function() {
	            var that = this;
	            var classNames = ['k-badge'];
	            var keepClassNames = that.options._classNames;
	            var themeColor = that._themeColor;
	            var shape = that._shape;
	            var sizes = that._sizes;
	            var size = that._size;
	            var sizeAbbr = sizes[size] === undefined ? size : sizes[size];
	            var fill = that._fill;
	            var cutoutBorder = that._cutoutBorder;
	            var align = that._align;
	            var position = that._position;
	            var visible = that._visible;

	            // Remove all class names
	            that.element.removeClass(function(index, className) {
	                if (className.indexOf('k-') === 0 && keepClassNames.indexOf(className) === -1) {
	                    that.element.removeClass(className);
	                }
	            });

	            // Fill
	            if (typeof fill === 'string' && fill !== '') {
	                classNames.push('k-badge-' + fill);
	            }

	            // Color
	            if (typeof themeColor === 'string' && themeColor !== '') {
	                classNames.push('k-badge-' + themeColor);
	            }

	            // Size
	            if (typeof size === 'string' && size !== '') {
	                classNames.push('k-badge-' + sizeAbbr);
	            }

	            // Shape
	            if (typeof shape === 'string' && shape !== '') {
	                classNames.push('k-badge-' + shape);
	            }

	            // Cutout border
	            if (typeof cutoutBorder === 'boolean' && cutoutBorder === true) {
	                classNames.push('k-badge-border-cutout');
	            }

	            // Position
	            if (typeof position === 'string' && position !== '') {
	                classNames.push('k-badge-' + position);
	            }

	            // Align
	            if (typeof position === 'string' && position !== '' && position !== 'inline' && typeof align === 'string' && align.split(' ').length == 2) {
	                classNames.push('k-' + align.replace(' ', '-'));
	            }

	            // Visibility
	            if (visible === false) {
	                classNames.push(HIDDEN);
	            }

	            // Apply classnames
	            that.element.addClass(classNames.join(' '));
	        },

	        setOptions: function(options) {
	            var that = this;

	            that.element.removeClass(function(index, className) {
	                if (className.indexOf('k-') >= 0) {
	                    that.element.removeClass(className);
	                }
	            });

	            Widget.fn.setOptions.call(that, options);

	            that._content();

	            that._appearance();
	        },

	        text: function(text) {
	            var that = this;
	            var max = that.options.max;

	            // handle badge.text()
	            if (arguments.length === 0 || text === undefined) {
	                return that._text;
	            }

	            that._text = text;

	            // handle badge.text(true|false|null)
	            if (text === true || text === false || text === null) {
	                that.element.html('');

	                return;
	            }

	            // handle badge.text('string')
	            if (typeof text === 'string') {
	                that.element.html(text);

	                return;
	            }

	            // handle badge.text(1)
	            if (typeof text === 'number') {
	                if (text > max) {
	                    that.element.html(max + '+');
	                } else {
	                    that.element.html(text);
	                }

	                return;
	            }

	            // handle other objects
	            if (typeof text === 'object' && 'toString' in text) {
	                that.element.html(text.toString());

	                return;
	            }

	        },

	        icon: function(icon) {
	            var that = this;
	            var iconTemplateFunction;

	            // handle badge.icon()
	            if (arguments.length === 0 || icon === undefined) {
	                return that._icon;
	            }

	            that._icon = icon;

	            // Handle badge.icon(<SVG />)
	            if (icon.indexOf('<svg') === 0) {
	                iconTemplateFunction = kendo.template(svgIconTemplate);
	                that.element.html(iconTemplateFunction({ icon: icon }));

	                return;
	            }

	            // Handle badge.icon(ICON_NAME)
	            iconTemplateFunction = kendo.template(iconTemplate);
	            that.element.html(iconTemplateFunction({ icon: icon }));
	        },

	        themeColor: function(color) {
	            var that = this;

	            // handle badge.color()
	            if (arguments.length === 0 || color === undefined) {
	                return that._themeColor;
	            }

	            that._themeColor = color;
	            that._updateClassNames();
	        },

	        shape: function(shape) {
	            var that = this;

	            // handle badge.shape()
	            if (arguments.length === 0 || shape === undefined) {
	                return that._shape;
	            }

	            that._shape = shape;
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

	    ui.plugin(Badge);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });