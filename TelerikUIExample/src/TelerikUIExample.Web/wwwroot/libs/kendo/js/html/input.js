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

	__webpack_require__(1048);
	module.exports = __webpack_require__(1048);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1044:
/***/ (function(module, exports) {

	module.exports = require("./htmlbase");

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(1044)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($, undefined) {
	    var kendo = window.kendo,
	        HTMLBase = kendo.html.HTMLBase;

	    var renderCheckBox = function (element, options) {
	        if (arguments[0] === undefined || $.isPlainObject(arguments[0])) {
	            options = element;
	            element = $("<input />");
	        }

	        return (new HTMLCheckBox(element, options)).html();
	    };

	    var renderRadioButton = function (element, options) {
	        if (arguments[0] === undefined || $.isPlainObject(arguments[0])) {
	            options = element;
	            element = $("<input />");
	        }

	        return (new HTMLRadioButton(element, options)).html();
	    };

	    var HTMLInput = HTMLBase.extend({
	        init: function (element, options) {
	            var that = this;
	            HTMLBase.fn.init.call(that, element, options);
	            that._wrapper();
	            that._addClasses();
	        },
	        options: {
	            label: null,
	            labelPosition: "after",
	            encoded: true
	        },
	        _wrapper: function () {
	            var that = this,
	                element = that.element[0],
	                options = that.options,
	                elementId = element.id;

	            that.wrapper = that.element
	                .addClass(options.inputClass)
	                .prop("type", options.type);

	            if(!elementId && !!options.label) {
	                element.id = elementId = kendo.guid();
	            }

	            if(!!options.label) {
	                that.labelEl = $("<label for='" + elementId + "' class='" + options.labelClass + "'>");

	                if(options.encoded) {
	                    that.labelEl.text(options.label);
	                } else {
	                    that.labelEl.html(options.label);
	                }

	                that.element[options.labelPosition](that.labelEl);
	            }
	        },
	        html: function () {
	            var that = this,
	                after = that.options.labelPosition === "after",
	                wrapperHtml = HTMLBase.fn.html.call(that);

	            if(!that.labelEl) {
	                return wrapperHtml;
	            }

	            if(after) {
	                return wrapperHtml + that.labelEl[0].outerHTML;
	            }

	            return that.labelEl[0].outerHTML + wrapperHtml;
	        }
	    });

	    var HTMLCheckBox = HTMLInput.extend({
	        init: function (element, options) {
	            var that = this;
	            HTMLInput.fn.init.call(that, element, options);
	            that._addClasses();
	        },
	        options: {
	            name: "HTMLCheckBox",
	            inputClass: "k-checkbox",
	            labelClass: "k-checkbox-label",
	            type: "checkbox",
	            rounded: "medium",
	            size: "medium",
	            stylingOptions: [ "size", "rounded" ]
	        }
	    });

	    var HTMLRadioButton = HTMLInput.extend({
	        init: function (element, options) {
	            var that = this;
	            HTMLInput.fn.init.call(that, element, options);
	            that._addClasses();
	        },
	        options: {
	            name: "HTMLRadioButton",
	            inputClass: "k-radio",
	            labelClass: "k-radio-label",
	            type: "radio",
	            size: "medium",
	            stylingOptions: [ "size"]
	        }
	    });

	    $.extend(kendo.html, {
	        renderCheckBox: renderCheckBox,
	        renderRadioButton: renderRadioButton,
	        HTMLInput: HTMLInput,
	        HTMLCheckBox: HTMLCheckBox,
	        HTMLRadioButton: HTMLRadioButton
	    });

	    kendo.cssProperties.registerPrefix("HTMLCheckBox", "k-checkbox-");

	    kendo.cssProperties.registerValues("HTMLCheckBox", [{
	        prop: "rounded",
	        values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
	    }]);

	    kendo.cssProperties.registerPrefix("HTMLRadioButton", "k-radio-");

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });