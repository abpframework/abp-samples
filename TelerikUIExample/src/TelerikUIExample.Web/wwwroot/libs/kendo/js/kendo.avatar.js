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

	module.exports = __webpack_require__(1088);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "avatar",
	    name: "Avatar",
	    category: "web",
	    description: "The Avatar component represents an icon, text, or image rendered in a styled container.",
	    depends: [ "core" ]
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,

	        DASH = "-";

	    var AVATAR_STYLES = {
	        widget: "k-widget",
	        avatar: "k-avatar",
	        bordered: "k-avatar-bordered"
	    };

	    var AVATAR_TYPE = {
	        icon: "icon",
	        image: "image",
	        text: "text"
	    };

	    var Avatar = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            options = options || {};

	            Widget.fn.init.call(that, element, options);

	            this._fromMarkup();
	            this._wrapper();

	            if(this._markupContent && this._markupContent.length > 0) {
	                this._contentFromMarkup();
	            } else {
	                this._content();
	            }
	        },

	        options: {
	            name: "Avatar",
	            alt: null,
	            border: false,
	            className: null,
	            fillMode: "solid",
	            icon: null,
	            image: null,
	            rounded: "full",
	            size: "medium",
	            style: null,
	            text: null,
	            themeColor: "primary",
	            type: AVATAR_TYPE.text
	        },

	        events: [ ],

	        setOptions: function(options) {
	            var currentOptions = this.options,
	                wrapper = this.wrapper,
	                updatedOptions = $.extend({}, currentOptions, options);

	            Widget.fn.setOptions.call(this, options);

	            if(!updatedOptions[updatedOptions.type]) {
	                currentOptions = this._optionsFromWrapper(currentOptions);
	            }
	            if(updatedOptions.border === false) {
	                wrapper.removeClass(AVATAR_STYLES.bordered);
	            }

	            wrapper.empty();

	            this.options = currentOptions;
	            this._wrapper();
	            this._content();
	        },

	        _content: function() {
	            var span = this.wrapper.find("> span"),
	                options = this.options,
	                type = options.type,
	                content;

	            if(type === AVATAR_TYPE.icon) {
	                content = $("<span class='k-icon k-i-" + options.icon + "'>");
	            } else if(type === AVATAR_TYPE.image) {
	                content = $("<img src='" + options.image + "'>");

	                if(options.alt) {
	                    content.attr("alt", options.alt);
	                }
	            } else if(type === AVATAR_TYPE.text) {
	                content = $("<span>" + options.text + "</span>");
	            }

	            span.append(content);
	        },

	        _contentFromMarkup: function() {
	            var span = this.wrapper.find("> span").first();

	            span.append(this._markupContent);
	        },

	        _fromMarkup: function() {
	            var element = this.element,
	                options = this.options,
	                image, icon;

	            element.children().slice(1).remove();

	            image = element.children("img");
	            icon = element.children(".k-icon");

	            if(image.length > 0 ) {
	                options.type = AVATAR_TYPE.image;
	                this._markupContent = image.first();
	            } else if(icon.length > 0) {
	                options.type = AVATAR_TYPE.icon;
	                this._markupContent = icon.first();
	            } else if(element.children().length > 0) {
	                options.type = AVATAR_TYPE.text;
	                this._markupContent = element.children();
	            }
	        },

	        _optionsFromWrapper: function(updatedOptions) {
	            var wrapper = this.wrapper,
	                classes, image;

	            if(updatedOptions.type === AVATAR_TYPE.text) {
	                updatedOptions.text = wrapper.text().trim();
	            } else if(updatedOptions.type === AVATAR_TYPE.icon) {
	                classes = wrapper.find(".k-icon").attr("class").split(/\s+/);

	                classes.forEach(function(name) {
	                    if(name.indexOf("k-i-") === 0) {
	                        updatedOptions.icon = name.substring(4);
	                    }
	                });
	            } else if(updatedOptions.type === AVATAR_TYPE.image) {
	                image = wrapper.find("img");
	                updatedOptions.image = image.attr("src");

	                if(image.attr("alt")) {
	                    updatedOptions.alt = image.attr("alt");
	                }
	            }

	            return updatedOptions;
	        },

	        _wrapper: function() {
	            var wrapper = this.element,
	                options = this.options,
	                span = $("<span>");

	            this.wrapper = wrapper;
	            wrapper.addClass(AVATAR_STYLES.avatar);

	            this._applyCssClasses();

	            if(options.border) {
	                wrapper.addClass(AVATAR_STYLES.bordered);
	            }
	            if(options.style) {
	                wrapper.css(options.style);
	            }
	            if(options.className) {
	                wrapper.addClass(options.className);
	            }

	            span.addClass(AVATAR_STYLES.avatar + DASH + options.type);
	            wrapper.prepend(span);
	        }
	    });

	    kendo.cssProperties.registerPrefix("Avatar", "k-avatar-");

	    kendo.cssProperties.registerValues("Avatar", [{
	        prop: "rounded",
	        values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
	    }]);

	    kendo.ui.plugin(Avatar);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });