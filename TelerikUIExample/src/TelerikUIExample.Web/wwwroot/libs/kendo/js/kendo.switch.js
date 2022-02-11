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

	module.exports = __webpack_require__(1472);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1472:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "switch",
	    name: "Switch",
	    category: "web",
	    description: "The Switch widget is used to display two exclusive choices.",
	    depends: [ "core" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        NS = ".kendoSwitch",
	        Widget = ui.Widget,
	        support = kendo.support,
	        CHANGE = "change",
	        switchStyles = {
	            widget: "k-switch",
	            track: "k-switch-track",
	            thumbWrapper: "k-switch-thumb-wrap",
	            thumb: "k-switch-thumb",
	            checked: "k-switch-on",
	            checkedLabel: "k-switch-label-on",
	            unchecked: "k-switch-off",
	            uncheckedLabel: "k-switch-label-off",
	            disabled: "k-disabled",
	            readonly: "k-readonly",
	            active: "k-active"
	        },
	        DISABLED = "disabled",
	        ARIA_DISABLED = "aria-disabled",
	        READONLY = "readonly",
	        ARIA_READONLY = "aria-readonly",
	        ARIA_CHECKED = "aria-checked",
	        CHECKED = "checked",
	        CLICK = support.click + NS,
	        TOUCHEND = support.pointers ? "pointerup" : "touchend",
	        KEYDOWN = "keydown" + NS,
	        LABELIDPART = "_label",
	        proxy = $.proxy;

	    var SWITCH_TEMPLATE = kendo.template('<span class="#=styles.widget#" role="switch"></span>');

	    var SWITCH_TRACK_TEMPLATE = kendo.template("<span class='#=styles.track#'>" +
	        "<span class='#=styles.checkedLabel#'>#=checked#</span>" +
	        "<span class='#=styles.uncheckedLabel#'>#=unchecked#</span>" +
	        "</span>");

	    var SWITCH_THUMB_TEMPLATE = kendo.template("<span class='#=styles.thumbWrapper#'>" +
	        "<span class='#=styles.thumb#'></span>" +
	        "</span>");

	    var Switch = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that._wrapper();

	            that._initSettings();

	            that._aria();

	            that._attachEvents();

	            kendo.notify(that, kendo.ui);
	        },

	        _wrapper: function() {
	            var that = this,
	                options = that.options,
	                element = that.element[0],
	                wrapper = $(SWITCH_TEMPLATE({
	                    styles: switchStyles
	                }));

	            element.type = "checkbox";

	            that.wrapper = that.element.wrap(wrapper).parent();

	            that.wrapper[0].style.cssText = that.element[0].style.cssText;
	            that.element.hide();

	            that.wrapper
	                .append($(SWITCH_TRACK_TEMPLATE({
	                    styles: switchStyles,
	                    checked: options.messages.checked,
	                    unchecked: options.messages.unchecked
	                })))
	                .append($(SWITCH_THUMB_TEMPLATE({
	                    styles: switchStyles
	                })))
	                .addClass(element.className)
	                .removeClass('input-validation-error');

	            that.options.rounded = that.options.trackRounded;
	            that._applyCssClasses();
	            that._applyRoundedClasses();
	        },

	        _applyRoundedClasses: function (action) {
	            var that = this,
	                options = that.options,
	                trackRounded = kendo.cssProperties.getValidClass({
	                    widget: options.name,
	                    propName: "rounded",
	                    value: options.trackRounded
	                }),
	                thumbRounded = kendo.cssProperties.getValidClass({
	                    widget: options.name,
	                    propName: "rounded",
	                    value: options.thumbRounded
	                });

	            action = action || "addClass";

	            that.wrapper.find("." + switchStyles.track)[action](trackRounded);
	            that.wrapper.find("." + switchStyles.thumb)[action](thumbRounded);
	        },

	        _attachEvents: function() {
	            var that = this;

	            that.wrapper
	                .on(CLICK, proxy(that._click, that))
	                .on(TOUCHEND, proxy(that._touchEnd, that))
	                .on(KEYDOWN, proxy(that._keydown, that));
	        },

	        setOptions: function (options) {
	            var that = this,
	                messages = options.messages,
	                checkedLabel,
	                uncheckedLabel;

	            that._clearCssClasses(options);
	            that._applyRoundedClasses("removeClass");

	            that.options = $.extend(that.options, options);

	            if (messages && messages.checked !== undefined) {
	                checkedLabel = that.wrapper.find("." + switchStyles.checkedLabel);
	                checkedLabel.text(messages.checked);
	            }

	            if (messages && messages.unchecked !== undefined) {
	                uncheckedLabel = that.wrapper.find("." + switchStyles.uncheckedLabel);
	                uncheckedLabel.text(messages.unchecked);
	            }

	            if (options.width) {
	                that.wrapper.css({
	                    width: options.width
	                });
	            }

	            if (options.enabled !== undefined) {
	                that.enable(options.enabled);
	            }

	            if (options.readonly !== undefined) {
	                that.readonly(options.readonly);
	            }

	            that.check(options.checked);

	            that.options.rounded = that.options.trackRounded;
	            that._applyCssClasses();
	            that._applyRoundedClasses();
	        },

	        _initSettings: function () {
	            var that = this,
	                element = that.element[0],
	                options = that.options;

	            if (options.enabled) {
	                that._tabindex();
	            }

	            if (options.width) {
	                that.wrapper.css({
	                    width: options.width
	                });
	            }

	            if (options.checked === null) {
	                options.checked = element.checked;
	            }

	            that.check(options.checked);

	            options.enabled = options.enabled && !that.element.attr(DISABLED);
	            that.enable(options.enabled);

	            options.readonly = options.readonly || !!that.element.attr(READONLY);
	            that.readonly(options.readonly);
	        },

	        _aria: function () {
	            var that = this,
	                element = that.element,
	                wrapper = that.wrapper,
	                id = element.attr("id"),
	                labelFor = $("label[for=\"" + id  + "\"]"),
	                ariaLabel = element.attr("aria-label"),
	                ariaLabelledBy = element.attr("aria-labelledby");

	            if (ariaLabel) {
	                wrapper.attr("aria-label", ariaLabel);
	            } else if (ariaLabelledBy){
	                wrapper.attr("aria-labelledby", ariaLabelledBy);
	            } else if (labelFor.length){
	                var labelId = labelFor.attr("id");

	                if (!labelId) {
	                    labelId = (id || kendo.guid()) + LABELIDPART;
	                    labelFor.attr("id", labelId);
	                }

	                wrapper.attr("aria-labelledby", labelId);
	            }
	        },

	        events: [
	            CHANGE
	        ],

	        options: {
	            name: "Switch",
	            messages: {
	                checked: "On",
	                unchecked: "Off"
	            },
	            width: null,
	            checked: null,
	            enabled: true,
	            readonly: false,
	            size: "medium",
	            rounded: "full",
	            trackRounded: "full",
	            thumbRounded: "full"
	        },

	        check: function(checked) {
	            var that = this,
	                element = that.element[0];

	            if (checked === undefined) {
	                return element.checked;
	            }

	            if (element.checked !== checked) {
	                that.options.checked = element.checked = checked;
	            }

	            that.wrapper
	                    .attr(ARIA_CHECKED, checked)
	                    .toggleClass(switchStyles.checked, checked)
	                    .toggleClass(switchStyles.unchecked, !checked);

	            if (checked) {
	                that.element
	                        .attr(CHECKED, CHECKED);
	            } else {
	                that.element
	                        .prop(CHECKED, false);
	            }
	        },

	        // alias for check, NG support
	        value: function(value) {
	            if (typeof value === "string") {
	            value = (value === "true");
	            }
	            return this.check.apply(this, [value]);
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            this.wrapper.off(NS);
	        },

	        toggle: function() {
	            var that = this;

	            that.check(!that.element[0].checked);
	        },

	        enable: function(enable) {
	            var element = this.element,
	                wrapper = this.wrapper;

	            if(typeof enable == "undefined") {
	                enable = true;
	            }

	            this.options.enabled = enable;

	            if(enable) {
	                element.prop(DISABLED, false);
	                wrapper.removeAttr(ARIA_DISABLED);
	            } else {
	                element.attr(DISABLED, DISABLED);
	                wrapper.attr(ARIA_DISABLED, true);
	            }

	            wrapper.toggleClass(switchStyles.disabled, !enable);
	        },

	        readonly: function(readonly) {
	            var that = this,
	                element = that.element,
	                wrapper = that.wrapper;

	            if(typeof readonly == "undefined") {
	                readonly = true;
	            }

	            that.options.readonly = readonly;

	            if(readonly) {
	                element.attr(READONLY, true);
	                wrapper.attr(ARIA_READONLY, true);
	            } else {
	                element.prop(READONLY, false);
	                wrapper.removeAttr(ARIA_READONLY);
	            }

	            wrapper.toggleClass(switchStyles.readonly, readonly);
	        },

	        _check: function () {
	            var that = this,
	                checked = that.element[0].checked = !that.element[0].checked;

	            that.wrapper.trigger("focus");

	            if (!that.options.enabled || that.options.readonly ||
	                that.trigger(CHANGE, { checked: checked })) {
	                that.element[0].checked = !checked;
	                return;
	            }

	            that.check(checked);
	        },

	        _keydown: function (e) {
	            if (e.keyCode === kendo.keys.SPACEBAR) {
	                this._check();
	                e.preventDefault();
	            }
	        },

	        _isTouch: function(event) {
	            return /touch/.test(event.type) || (event.originalEvent && /touch/.test(event.originalEvent.pointerType));
	        },

	        _click: function (e) {
	            if (!this._isTouch(e) && e.which === 1) {
	                this._check();
	            }
	        },

	        _touchEnd: function (e) {
	            if (this._isTouch(e)) {
	                this._check();
	                e.preventDefault();
	            }
	        }

	    });

	    kendo.cssProperties.registerPrefix("Switch", "k-switch-");

	    kendo.cssProperties.registerValues("Switch", [{
	        prop: "rounded",
	        values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
	    }]);

	    ui.plugin(Switch);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });