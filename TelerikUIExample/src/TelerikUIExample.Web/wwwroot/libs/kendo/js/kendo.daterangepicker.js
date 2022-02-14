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

	module.exports = __webpack_require__(1200);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057), __webpack_require__(1201),  __webpack_require__(1202)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "daterangepicker",
	    name: "DateRangePicker",
	    category: "web",
	    description: "Date range picker.",
	    depends: [ "core", "multiviewcalendar", "datepicker"]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        keys = kendo.keys,
	        Widget = ui.Widget,
	        MONTH = "month",
	        OPEN = "open",
	        CLOSE = "close",
	        CHANGE = "change",
	        DIV = "<div />",
	        MIN = "min",
	        MAX = "max",
	        template = kendo.template,
	        extend = $.extend,
	        ID = "id",
	        support = kendo.support,
	        mobileOS = support.mobileOS,
	        SELECTED = "k-state-selected",
	        ARIA_EXPANDED = "aria-expanded",
	        ARIA_DISABLED = "aria-disabled",
	        STATEDISABLED = "k-disabled",
	        DISABLED = "disabled",
	        READONLY = "readonly",
	        ARIA_HIDDEN = "aria-hidden",
	        ns = ".kendoDateRangePicker",
	        CLICK = "click" + ns,
	        MOUSEDOWN = "mousedown" + ns,
	        UP = support.mouseAndTouchPresent ? kendo.applyEventMap("up", ns.slice(1)) : CLICK,
	        proxy = $.proxy,
	        parse = kendo.parseDate;

	    var DateRangeView = function(options) {
	        kendo.DateView.call(this, options);
	    };

	    DateRangeView.prototype = Object.create(kendo.DateView.prototype);

	    function preventDefault(e) {
	        e.preventDefault();
	    }

	    DateRangeView.prototype._calendar = function() {
	        var that = this;
	        var calendar = that.calendar;
	        var options = that.options;
	        var div;

	        if (!calendar) {
	            div = $(DIV).attr(ID, kendo.guid())
	                        .appendTo(that.popup.element);

	            that.calendar = calendar = new ui.MultiViewCalendar(div);
	            that._setOptions(options);

	            calendar.navigate(that._value || that._current, options.start);

	            that._range = that._range || options.range || {};

	            div.on(MOUSEDOWN, preventDefault)
	               .on(CLICK, "td:has(.k-link)", proxy(that._click, that));

	            that.calendar.selectRange(that._range);
	        }
	    };

	    DateRangeView.prototype._setOptions =  function(options) {
	        this.calendar.setOptions({
	            focusOnNav: false,
	            change: options.change,
	            culture: options.culture,
	            dates: options.dates,
	            depth: options.depth,
	            footer: options.footer,
	            format: options.format,
	            selectable: options.selectable,
	            max: options.max,
	            min: options.min,
	            month: options.month,
	            weekNumber: options.weekNumber,
	            start: options.start,
	            disableDates: options.disableDates,
	            range: options.range
	        });
	    };

	    DateRangeView.prototype.range = function (range) {
	        this._range = range;

	        if (this.calendar) {
	            if (!range.start && !range.end) {
	                this.calendar.selectRange(range);
	                this.calendar.rangeSelectable.clear(true);
	            } else {
	                this.calendar.selectRange(range);
	            }
	        }
	    };

	    DateRangeView.prototype.move = function(e) {
	        var that = this;
	        var key = e.keyCode;
	        var calendar = that.calendar;
	        var selectIsClicked = e.ctrlKey && key == keys.DOWN || key == keys.ENTER;
	        var handled = false;

	        if (e.altKey) {
	            if (key == keys.DOWN) {
	                that.open();
	                e.preventDefault();
	                handled = true;
	            } else if (key == keys.UP) {
	                that.close();
	                e.preventDefault();
	                handled = true;
	            }

	        } else if (that.popup.visible()) {

	            if (key == keys.ESC || (selectIsClicked && calendar._cell.hasClass(SELECTED))) {
	                that.close();
	                e.preventDefault();
	                return true;
	            }

	            that._current = calendar._move(e, true);

	            handled = true;
	        }

	        return handled;
	    };

	    DateRangeView.prototype._click = function(e) {

	        if (mobileOS.ios || (mobileOS.android && (mobileOS.browser == "firefox" || mobileOS.browser == "chrome"))) {
	            if (this._range && this._range.end) {
	                this.close();
	            }
	        }
	        else if (this._range && this._range.end && e.currentTarget.className.indexOf("k-range-end") !== -1) {
	            this.close();
	        }
	    };

	    kendo.DateRangeView = DateRangeView;

	    var DateRangePicker = Widget.extend({
	        init: function(element, options) {
	            var that = this;
	            var div;
	            var disabled;

	            Widget.fn.init.call(that, element, options);
	            element = that.element;
	            options = that.options;
	            options.disableDates = kendo.calendar.disabled(options.disableDates);

	            options.min = parse(element.attr("min")) || parse(options.min);
	            options.max = parse(element.attr("max")) || parse(options.max);

	            that._initialOptions = extend({}, options);

	            that._buildHTML();

	            that._range = that.options.range;
	            that._changeTriggered = false;

	            that.dateView = new DateRangeView(extend({}, options, {
	                id: element.attr(ID),
	                anchor: that.wrapper,
	                views: 2,
	                selectable: "range",
	                range: that._range,
	                change: function() {
	                    var range = this.selectRange();
	                    that.range(range);
	                    that.trigger(CHANGE);
	                    that._changeTriggered = true;
	                    that._startDateInput.trigger(CHANGE);
	                    that._endDateInput.trigger(CHANGE);
	                    that._changeTriggered = false;
	                },
	                close: function(e) {
	                    if (that.trigger(CLOSE)) {
	                        e.preventDefault();
	                    } else {
	                        that.wrapper.attr(ARIA_EXPANDED, false);
	                        div.attr(ARIA_HIDDEN, true);
	                    }
	                },
	                open: function(e) {
	                    if (that.trigger(OPEN)) {
	                        e.preventDefault();
	                    } else {
	                        that.wrapper.attr(ARIA_EXPANDED, true);
	                        div.attr(ARIA_HIDDEN, false);
	                        that._updateARIA();
	                    }
	                }
	            }));
	            div = that.dateView.div;
	            that._ariaTemplate = proxy(template(this.options.ARIATemplate), that);
	            that._reset();
	            that.wrapper
	                .attr({
	                    role: "combobox",
	                    "aria-expanded": false,
	                    "aria-owns": that.dateView._dateViewID,
	                    "autocomplete": "off"
	                });

	            that._inputs
	                .on(UP + ns, proxy(that._click, that))
	                .on("keydown" + ns, proxy(that._keydown, that));

	            that._initializeDateInputs();

	            disabled = element.is("[disabled]");
	            if (disabled) {
	                that.enable(false);
	            } else {
	                that.readonly(element.is("[readonly]"));
	            }
	        },

	        options: {
	            name: "DateRangePicker",
	            labels: true,
	            footer: "",
	            format: "",
	            culture: "",
	            min: new Date(1900, 0, 1),
	            max: new Date(2099, 11, 31),
	            start: MONTH,
	            depth: MONTH,
	            animation: {},
	            month: {},
	            startField: "",
	            endField: "",
	            dates: [],
	            disableDates: null,
	            range: null,
	            ARIATemplate: 'Current focused #=data.valueType# is #=data.text#',
	            weekNumber: false,
	            messages: {
	                startLabel: "Start",
	                endLabel: "End"
	            },
	            size: "medium",
	            fillMode: "solid",
	            rounded: "medium"
	        },

	        events: [
	            OPEN,
	            CLOSE,
	            CHANGE
	        ],

	        setOptions: function(options) {
	            var that = this;

	            Widget.fn.setOptions.call(that, options);

	            options = that.options;

	            options.min = parse(options.min);
	            options.max = parse(options.max);
	            that._inputs.off(ns);

	            this._initializeDateInputs();
	            that.dateView.setOptions(options);
	            that._range = options.range;
	        },

	        _click: function() {
	            var that = this;

	            if (!that._preventInputAction && !that.dateView.popup.visible()) {
	                that.dateView.open();
	            }
	        },

	        _keydown: function(e) {
	            var that = this,
	                dateView = that.dateView,
	                handled = false;

	            if (that._preventInputAction) {
	                e.stopImmediatePropagation();
	                return;
	            }

	            handled = dateView.move(e);
	            that._updateARIA(dateView._current);

	            if (handled && e.stopImmediatePropagation) {
	                e.stopImmediatePropagation();
	            }
	        },

	        _updateARIA: function(date) {
	            var that = this;
	            var calendar = that.dateView.calendar;

	            if(that.element && that.element.length) {
	                that._inputs.removeAttr("aria-describedby");
	            }

	            if (calendar) {
	                if (date && !calendar._dateInViews(date)) {
	                    calendar.navigate(date);
	                }

	                if ($.contains(that.element[0], document.activeElement)) {
	                    $(document.activeElement).attr("aria-describedby", calendar._updateAria(that._ariaTemplate, date));
	                }
	            }
	        },

	        _startChange: function (e) {
	            var that = this;
	            var input = e.sender;
	            var startValue = input.value();
	            var endValue = that._endDateInput.value();

	            if (that.options.disableDates(startValue)) {
	                e.sender.value(null);
	                startValue = null;
	            }

	            that.range({ start: startValue, end: endValue });

	            if (!that._changeTriggered) {
	                that.trigger(CHANGE);
	            }
	        },

	        _endChange: function (e) {
	            var that = this;
	            var input = e.sender;
	            var endValue = input.value();
	            var startValue = that._startDateInput.value();

	            if (that.options.disableDates(endValue)) {
	                e.sender.value(null);
	                endValue = null;
	            }

	            that.range({ start: startValue, end: endValue });

	            if (!that._changeTriggered) {
	                that.trigger(CHANGE);
	            }
	        },

	        _initializeDateInputs: function () {
	            var that = this;
	            var options = that.options;
	            var range = options.range || {};
	            var inputOptions = {
	                footer: options.footer,
	                format: options.format,
	                culture: options.culture,
	                min: options.min,
	                max: options.max,
	                start: options.start,
	                startField: options.startField,
	                endField: options.endField,
	                depth: options.depth,
	                animation: options.animation,
	                month: options.month,
	                dates: options.dates,
	                disableDates: options.disableDates,
	                ARIATemplate: options.ARIATemplate,
	                weekNumber: options.weekNumber,
	                size: options.size,
	                fillMode: options.fillMode,
	                rounded: options.rounded
	            };

	            if (that._startDateInput) {
	                that._startDateInput.destroy();
	                that._endDateInput.destroy();
	                that.wrapper.empty();
	                that._buildHTML();
	                that._inputs
	                    .on(UP + ns, proxy(that._click, that))
	                    .on("keydown" + ns, proxy(that._keydown, that));
	            }
	            that._startDateInput = that._startInput.kendoDateInput(extend(true, inputOptions, { value: range.start })).getKendoDateInput();
	            that._endDateInput = that._endInput.kendoDateInput(extend(true, inputOptions, { value: range.end })).getKendoDateInput();

	            that._startChangeHandler = proxy(that._startChange, that);
	            that._startDateInput.bind(CHANGE, that._startChangeHandler);

	            that._endChangeHandler = proxy(that._endChange, that);
	            that._endDateInput.bind(CHANGE, that._endChangeHandler);

	        },

	        _buildHTML: function() {
	            var that = this;
	            var element = that.element;
	            var id;

	            if (!that.wrapper) {
	                that.wrapper = element.addClass("k-daterangepicker");
	            }

	            if (that.options.labels) {
	                id = kendo.guid();
	                $('<span class="k-floating-label-container"><input id="'+ id + '"/><label for="'+ id +'" class="k-label">'+ that.options.messages.startLabel + '</label></span>').appendTo(that.wrapper);
	                id = kendo.guid();
	                $('<span>&nbsp;</span><span class="k-floating-label-container"><input id="'+ id + '"/><label for="'+ id +'" class="k-label">'+ that.options.messages.endLabel + '</label></span>').appendTo(that.wrapper);
	            } else {
	                $('<input/><span>&nbsp;</span><input/>').appendTo(that.wrapper);
	            }

	            that._startInput = that.wrapper.find("input").eq(0);
	            that._endInput = that.wrapper.find("input").eq(1);

	            if (that.options.startField !== ""){
	                that._startInput.attr(kendo.attr("bind"), "value: " + that.options.startField);
					that._startInput.attr("name", that.options.startField);
	            }

	            if (that.options.endField !== ""){
	                that._endInput.attr(kendo.attr("bind"), "value: " + that.options.endField);
					that._endInput.attr("name", that.options.endField);
	            }

	            that._inputs = that._startInput.add(that._endInput);
	        },

	        _option: function(option, value) {
	            var that = this,
	                options = that.options;

	            if (value === undefined) {
	                return options[option];
	            }

	            value = parse(value, options.parseFormats, options.culture);

	            if (!value) {
	                return;
	            }

	            options[option] = new Date(+value);
	            that.dateView[option](value);
	        },

	        _reset: function() {
	            var that = this,
	                element = that.element,
	                formId = element.attr("form"),
	                form = formId ? $("#" + formId) : element.closest("form");

	            if (form[0]) {
	                that._resetHandler = function() {
	                    that.max(that._initialOptions.max);
	                    that.min(that._initialOptions.min);
	                };

	                that._form = form.on("reset", that._resetHandler);
	            }
	        },

	        _editable: function(options) {
	            var that = this,
	                inputs = that._inputs,
	                readonly = options.readonly,
	                disable = options.disable;

	            if (!readonly && !disable) {
	                that.wrapper
	                    .removeClass(STATEDISABLED);

	                $.each(inputs, function(key, item) {
	                    item.removeAttribute(DISABLED);
	                    item.removeAttribute(READONLY);
	                });

	                inputs.attr(ARIA_DISABLED, false);
	                that._preventInputAction = false;
	            } else {
	                that.wrapper
	                    .addClass(disable ? STATEDISABLED : "")
	                    .removeClass(disable ? "" : STATEDISABLED);

	                    inputs.attr(DISABLED, disable)
	                       .attr(READONLY, readonly)
	                       .attr(ARIA_DISABLED, disable);

	                that._preventInputAction = true;
	            }
	        },

	        destroy: function() {
	            var that = this;

	            if (that._startDateInput) {
	                that._startDateInput.unbind(CHANGE, that._startChangeHandler);
	                that._startDateInput.destroy();
	                that._startChangeHandler = null;
	            }

	            if (that._endDateInput) {
	                that._endDateInput.unbind(CHANGE, that._endChangeHandler);
	                that._endDateInput.destroy();
	                that._endChangeHandler = null;
	            }

	            if (that._form) {
	                that._form.off("reset", that._resetHandler);
	            }

	            that._inputs.off(ns);
	            that._inputs = null;

	            that.dateView.destroy();

	            that.element.off(ns);

	            Widget.fn.destroy.call(that);
	        },

	        range: function(range) {
	            var that = this;

	            if (range === undefined) {
	                return that._range;
	            }

	            that._range = range;
	            that.dateView.range({ start: null, end: null });
	            if (!range) {
	                that._startDateInput.value(null);
	                that._endDateInput.value(null);
	            }

	            that._startDateInput.value(range.start ? range.start : null);
	            that._endDateInput.value(range.end ? range.end : null);

	            if (range.start && !range.end) {
	                that.dateView.range({ start: range.start, end: null });
	            } else if (range.start && range.end && +range.start <= +range.end) {
	                that.dateView.range({ start: range.start, end: range.end });
	            }
	        },

	        open: function() {
	            this.dateView.open();
	        },

	        close: function() {
	            this.dateView.close();
	        },

	        min: function(value) {
	            return this._option(MIN, value);
	        },

	        max: function(value) {
	            return this._option(MAX, value);
	        },

	        readonly: function(readonly) {
	            this._startDateInput.readonly(readonly);
	            this._endDateInput.readonly(readonly);

	            this._editable({
	                readonly: readonly === undefined ? true : readonly,
	                disable: false
	            });
	        },

	        enable: function(enable) {
	            this._startDateInput.enable(enable);
	            this._endDateInput.enable(enable);

	            if (!enable) {
	                this.close();
	            }

	            this._editable({
	                readonly: false,
	                disable: !(enable = enable === undefined ? true : enable)
	            });
	        }
	    });

	    kendo.ui.plugin(DateRangePicker);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1201:
/***/ (function(module, exports) {

	module.exports = require("./kendo.multiviewcalendar");

/***/ }),

/***/ 1202:
/***/ (function(module, exports) {

	module.exports = require("./kendo.datepicker");

/***/ })

/******/ });