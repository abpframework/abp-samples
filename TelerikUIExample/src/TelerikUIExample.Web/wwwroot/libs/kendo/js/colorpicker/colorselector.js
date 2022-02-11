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

	__webpack_require__(27);
	module.exports = __webpack_require__(27);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    // WARNING: removing the following jshint declaration and turning
	    // == into === to make JSHint happy will break functionality.
	    /*jshint eqnull:true  */
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        parseColor = kendo.parseColor,

	        extend = $.extend,

	        NS = ".kendoColorTools",
	        DISABLED = "k-disabled";

	    var ColorSelector = Widget.extend({
	        init: function(element, options) {
	            var that = this, ariaId;

	            Widget.fn.init.call(that, element, options);
	            element = that.element;
	            options = that.options;
	            that._value = options.value = parseColor(options.value);
	            that._tabIndex = element.attr("tabIndex") || 0;

	            ariaId = that._ariaId = options.ariaId;
	            if (ariaId) {
	                element.attr("aria-labelledby", ariaId);
	            }

	            if (options._standalone) {
	                that._triggerSelect = that._triggerChange;
	            }
	        },
	        options: {
	            name: "ColorSelector",
	            value: null,
	            _standalone: true
	        },
	        events: [
	            "change",
	            "select",
	            "forceSelect",
	            "cancel"
	        ],
	        color: function(value) {
	            if (value !== undefined) {
	                // this.options.value = value;
	                this._value = parseColor(value);
	                this._updateUI(this._value);
	            }

	            return this._value;
	        },
	        value: function(color) {
	            color = this.color(color);

	            if (color) {
	                if (this.options.opacity) {
	                    color = color.toCssRgba();
	                } else {
	                    color = color.toCss();
	                }
	            }

	            return color || null;
	        },
	        enable: function(enable) {
	            if (arguments.length === 0) {
	                enable = true;
	            }

	            this.wrapper.toggleClass(DISABLED, !enable);

	            this._onEnable(enable);
	        },
	        _select: function(color, nohooks) {
	            var prev = this._value;

	            color = this.color(color);

	            if (!nohooks) {
	                if ((color && !color.equals(prev)) || (color === null && color !== prev)) {
	                    this.element.trigger("change");
	                    this.trigger("change", { value: this.value() });
	                } else if (!this._standalone) {
	                    this.trigger("cancel");
	                }
	            }
	        },
	        _triggerSelect: function(color) {
	            triggerEvent(this, "select", color);
	        },
	        _triggerChange: function(color) {
	            triggerEvent(this, "change", color);
	        },
	        destroy: function() {
	            if (this.element) {
	                this.element.off(NS);
	            }
	            if (this.wrapper) {
	                this.wrapper.off(NS).find("*").off(NS);
	            }
	            this.wrapper = null;
	            Widget.fn.destroy.call(this);
	        },
	        _updateUI: $.noop,
	        _selectOnHide: function() {
	            return null;
	        },
	        _cancel: function() {
	            this.trigger("cancel");
	        }
	    });

	    function triggerEvent(self, type, color) {
	        color = parseColor(color);

	        if ((color && !color.equals(self.color())) || color !== self.color()) {
	            if (type == "change") {
	                // UI is already updated.  setting _value directly
	                // rather than calling self.color(color) to avoid an
	                // endless loop.
	                self._value = color;
	            }
	            if (color && color.a != 1) {
	                color = color.toCssRgba();
	            } else if (color) {
	                color = color.toCss();
	            }

	            self.trigger(type, { value: color });
	        }
	    }

	    extend(ui, {
	        colorpicker: {
	            ColorSelector: ColorSelector
	        }
	    });


	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });