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

	module.exports = __webpack_require__(1369);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1098:
/***/ (function(module, exports) {

	module.exports = require("./kendo.selectable");

/***/ }),

/***/ 1198:
/***/ (function(module, exports) {

	module.exports = require("./kendo.calendar");

/***/ }),

/***/ 1369:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057), __webpack_require__(1098), __webpack_require__(1198) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "multiviewcalendar",
	    name: "MultiViewCalendar",
	    category: "web",
	    description: "Multi-view calendar.",
	    depends: [ "core", "selectable", "calendar"  ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        calendar = kendo.calendar,
	        support = kendo.support,
	        isInRange = calendar.isInRange,
	        toDateObject = calendar.toDateObject,
	        createDate = calendar.createDate,
	        isEqualDate = calendar.isEqualDate,
	        getToday = calendar.getToday,
	        keys = kendo.keys,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        Selectable = ui.Selectable,
	        template = kendo.template,
	        mobileOS = support.mobileOS,
	        ns = ".kendoMultiViewCalendar",
	        CLICK = "click",
	        KEYDOWN = "keydown",
	        ID = "id",
	        MIN = "min",
	        MONTH = "month",
	        DOT = ".",
	        CENTURY = "century",
	        DECADE = "decade",
	        CHANGE = "change",
	        NAVIGATE = "navigate",
	        VALUE = "value",
	        FOCUSED = "k-state-focused",
	        SELECTED = "k-state-selected",
	        MID = "k-range-mid",
	        SPLITEND = "k-range-split-end",
	        SPLITSTART = "k-range-split-start",
	        START = "k-range-start",
	        END = "k-range-end",
	        HOVER = "k-state-hover",
	        DISABLED = "k-state-disabled",
	        TODAY = "k-nav-today",
	        OTHERMONTH = "k-other-month",
	        OUTOFRANGE = "k-out-of-range",
	        CELLSELECTOR = "td:has(.k-link):not(." + OUTOFRANGE + ")",
	        CELLSELECTORVALID = "td:has(.k-link):not(." + DISABLED + "):not(." + OUTOFRANGE + ")",
	        BLUR = "blur",
	        FOCUS = "focus",
	        MOUSEENTER = support.touch ? "touchstart" : "mouseenter",
	        MOUSELEAVE_NS = support.touch ? "touchend" + ns + " touchmove" + ns : "mouseleave" + ns,
	        PREVARROW = "_prevArrow",
	        NEXTARROW = "_nextArrow",
	        ARIA_SELECTED = "aria-selected",
	        INPUTSELECTOR = "input,a,textarea,.k-multiselect-wrap,select,button,.k-button>span,.k-button>img,span.k-icon.k-i-arrow-60-down,span.k-icon.k-i-arrow-60-up",
	        ARIA_DISABLED = "aria-disabled",
	        ARIA_LABEL = "aria-label",
	        proxy = $.proxy,
	        DATE = Date,
	        views = {
	            month: 0,
	            year: 1,
	            decade: 2,
	            century: 3
	        };

	    var RangeSelectable = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that.calendar = options.calendar;

	            that.userEvents = new kendo.UserEvents(that.element, {
	                global: true,
	                allowSelection: true,
	                filter: that.options.filter,
	                tap: proxy(that._tap, that),
	                touchAction: "none"
	            });
	        },

	        events: [CHANGE],

	        options: {
	            name: "RangeSelectable",
	            filter: ">*",
	            inputSelectors: INPUTSELECTOR,
	            multiple: false,
	            dragToSelect: true,
	            relatedTarget: $.noop
	        },

	        destroy: function () {
	            var that = this;

	            Widget.fn.destroy.call(that);

	            that.userEvents.destroy();
	            that.calendar = null;

	            that._lastActive = that.element = that.userEvents = that._start = that._end = null;
	        },

	        _allowSelection: function(target) {
	            if ($(target).is(this.options.inputSelectors)) {
	                this.userEvents.cancel();
	                return false;
	            }

	            return true;
	        },

	        start: function (element) {
	            if (element === undefined) {
	                return this._start;
	            }
	            element.addClass(START + " " + SELECTED);
	            this._start = element;
	        },

	        end: function(element) {
	            if (element === undefined) {
	                return this._start;
	            }
	            element.addClass(END + " " + SELECTED);
	            this._end = element;
	        },

	        mid: function(elements) {
	            var tables = this.element.find("table.k-month");

	            elements.addClass(MID);
	            tables.each(function() {
	                var that = $(this);
	                var lastCell = that.find(CELLSELECTORVALID).last();
	                var firstCell = that.find(CELLSELECTORVALID).first();

	                if (lastCell.hasClass(MID)) {
	                    lastCell.addClass(SPLITEND);
	                }

	                if (firstCell.hasClass(MID)) {
	                    firstCell.addClass(SPLITSTART);
	                }
	            });
	        },

	        clear: function(clearVariables) {
	            this.element.find(CELLSELECTOR).removeClass(END + " " + SELECTED + " " + START + " " + MID + " " + SPLITEND + " " + SPLITSTART);

	            if (clearVariables) {
	                this._start = this._end = null;
	            }
	        },

	        selectFrom: function(start) {
	            var that = this;
	            var items;
	            var startIdx;

	            items = that.element.find(CELLSELECTOR);

	            startIdx = $.inArray($(start)[0], items);

	            that.clear();
	            that.start(start);

	            items = items.filter(function (index) {
	                return index > startIdx;
	            });
	            that.mid(items);
	        },

	        selectTo: function(end) {
	            var that = this;
	            var items;
	            var endIdx;

	            items = that.element.find(CELLSELECTOR);

	            endIdx = $.inArray($(end)[0], items);

	            that.clear();

	            items = items.filter(function (index) {
	                return index < endIdx;
	            });
	            that.mid(items);
	            that.end($(end));
	        },

	        range: function(start, end) {
	            var that = this;
	            var items;
	            var startIdx;
	            var endIdx;
	            var temp;

	            if (start === undefined) {
	                return { start: that._start, end: that._end };
	            }

	            items = that.element.find(CELLSELECTOR);

	            startIdx = $.inArray($(start)[0], items);
	            endIdx = $.inArray($(end)[0], items);

	            if (endIdx == -1) {
	                endIdx = items.length;
	            }

	            if (startIdx > endIdx) {
	                temp = end;
	                end = start;
	                start = temp;
	                temp = startIdx;
	                startIdx = endIdx;
	                endIdx = temp;
	            }
	            that.clear();
	            start.addClass(START + " " + SELECTED);
	            that._start = start;

	            items = items.filter(function (index) {
	                return index > startIdx && index < endIdx;
	            });
	            that.mid(items);

	            if (end) {
	                that.end($(end));
	            } else {
	                that._useEnd = true;
	            }
	        },

	        change: function() {
	            this.trigger(CHANGE);
	        },

	        _clearFlags: function () {
	            this._useStart = this._useEnd = false;
	        },

	        _tap: function(e) {
	            var target = $(e.target),
	                range = this.calendar.selectRange() || {},
	                start = range.start,
	                end = range.end,
	                that = this,
	                currentDate = toDateObject($(target).find("a")),
	                items,
	                startIdx,
	                endIdx;


	            that._lastActive = target;

	            if (!start || +start > +currentDate) {
	                that.clear(true);
	                that.start(target);
	                that._clearFlags();
	                that.trigger(CHANGE);
	                return;
	            }

	            if (start && !end) {
	                items = that.element.find(CELLSELECTOR);

	                startIdx = $.inArray($(that._start)[0], items);
	                endIdx = $.inArray($(target)[0], items);

	                if (start) {
	                    that._useStart = true;
	                }

	                items = items.filter(function (index) {
	                    return index > startIdx && index < endIdx;
	                });
	                that.mid(items);
	                that.end($(target));
	                that.trigger(CHANGE);
	                that._clearFlags();
	                return;
	            }

	            if (start && end) {
	                if (target.hasClass(MID)) {
	                    if (!that._toggling) {
	                        that.range(target, that._end);
	                    } else {
	                        that.range(that._start, target);
	                    }
	                    that._toggling = !that._toggling;
	                    that.trigger(CHANGE);
	                    that._clearFlags();
	                    return;
	                }
	                that._toggling = false;
	                that._end = null;
	                that.clear();
	                that.start(target);
	                that.trigger(CHANGE);
	                that._clearFlags();
	            }
	        }
	    });


	    var MultiViewCalendar = Widget.extend({
	        init: function(element, options) {
	            var that = this;
	            var id;
	            var culture;

	            Widget.fn.init.call(that, element, options);

	            element = that.wrapper = that.element;
	            options = that.options;

	            that.options.disableDates = calendar.disabled(that.options.disableDates);

	            culture = kendo.getCulture(options.culture);
	            options.format = kendo._extractFormat(options.format || culture.calendars.standard.patterns.d);

	            that._templates();

	            that._header();

	            that._wrapper();

	            id = element
	                .addClass("k-widget k-calendar k-calendar-range" + (options.weekNumber ? " k-week-number" : ""))
	                .on(KEYDOWN + ns, "table.k-content", proxy(that._move, that))
	                .on(BLUR + ns, "table", proxy(that._blur, that))
	                .on(CLICK + ns, CELLSELECTORVALID, function(e) {
	                    var link = e.currentTarget.firstChild;

	                    if (link.href.indexOf("#") != -1) {
	                        e.preventDefault();
	                    }

	                    that._click($(link));
	                })
	                .on(MOUSEENTER + ns, CELLSELECTORVALID, proxy(that._mouseEnter, that))
	                .on(MOUSELEAVE_NS, CELLSELECTORVALID, function() {
	                    $(this).removeClass(HOVER);
	                })
	                .attr(ID);

	            if (id) {
	                that._cellID = id + "_cell_selected";
	            }

	            that._calendarWidth = that.element.width();

	            that._range = options.range;

	            that._initViews({ viewName: options.start, value: options.value});
	            that._selectable();

	            that._footer(that.footer);
	            that._selectDates = [];
	            that.value(options.value);

	            if (options.selectable == "multiple") {
	                that._selectDates = options.selectDates.length ? options.selectDates : that._selectDates;
	                that._restoreSelection();
	            }

	            if (options.selectable == "range") {
	                that.selectRange(that._range);
	            }

	            kendo.notify(that);
	        },

	        options: {
	            name: "MultiViewCalendar",
	            value: null,
	            min: new DATE(1900, 0, 1),
	            max: new DATE(2099, 11, 31),
	            dates: [],
	            disableDates: null,
	            culture: "",
	            footer : "",
	            format : "",
	            month : {},
	            range : { start: null, end: null },
	            weekNumber: false,
	            views: 2,
	            showViewHeader: false,
	            selectable: "single",
	            selectDates: [],
	            start: MONTH,
	            depth: MONTH,
	            messages: {
	                weekColumnHeader: ""
	            }
	        },

	        events: [
	            CHANGE,
	            NAVIGATE
	        ],

	        setOptions: function(options) {
	            var that = this;

	            calendar.normalize(options);

	            options.disableDates = calendar.disabled(options.disableDates);

	            Widget.fn.setOptions.call(that, options);

	            that._selectable();

	            that._templates();

	            that._footer(that.footer);

	            for (var i = 0; i < that._views.length; i++) {
	                that._views[i].off(ns).remove();
	            }

	            that._initViews({ viewName: options.start, value: options.value});

	            that._range = options.range || { start: null, end: null };

	            that._restoreSelection();
	        },

	        destroy: function() {
	            var that = this;

	            that._cell = null;
	            that._currentView = null;
	            that._current = null;

	            if (that._views) {
	                for (var i = 0; i < that._views.length; i++) {
	                    that._views[i].off(ns).remove();
	                }
	            }

	            that.element.off(ns);

	            if (that.header) {
	                that.header.off(ns);
	                that._title = null;
	                that.header = null;
	            }

	            if (that.selectable) {
	                that.selectable.destroy();
	                that.selectable = null;
	            }

	            if (that.rangeSelectable) {
	                that.rangeSelectable.destroy();
	                that.rangeSelectable = null;
	            }

	            if (that._today) {
	                kendo.destroy(that._today.off(ns));
	            }

	            that._views = null;

	            Widget.fn.destroy.call(that);
	        },

	        current: function() {
	            return this._current;
	        },

	        focus: function() {
	            var table;

	            if (this._cell) {
	                this._cell.closest("table").trigger("focus");
	            } else if (this._current && this._dateInViews(this._current)) {
	                this._cell = this._cellByDate(this._current);
	                this._cell.closest("table").trigger("focus");
	            } else {
	                table = this.element.find("table").first().trigger("focus");
	                this._cell = table.find(CELLSELECTORVALID).first();
	                this._current = toDateObject(this._cell.find("a"));
	            }
	            this._cell.addClass(FOCUSED);
	        },

	        min: function(value) {
	            return this._option(MIN, value);
	        },

	        max: function(value) {
	            return this._option("max", value);
	        },

	        view: function() {
	            return this._currentView;
	        },

	        navigateToPast: function() {
	            this._navigate(PREVARROW, -1);
	        },

	        navigateToFuture: function() {
	            this._navigate(NEXTARROW, 1);
	        },

	        navigateUp: function() {
	            var that = this,
	            index = that._index;

	            if (that._title.hasClass(DISABLED)) {
	                return;
	            }

	            that.navigate(that._current, ++index);
	        },

	        navigateDown: function(value) {
	            var that = this,
	            index = that._index,
	            depth = that.options.depth;

	            if (!value) {
	                return;
	            }

	            if (index === views[depth]) {
	                if (!isEqualDate(that._value, that._current) || !isEqualDate(that._value, value)) {
	                    that.value(value);
	                    that.trigger(CHANGE);
	                }
	                return;
	            }

	            that.navigate(value, --index);
	        },

	        navigate: function(value, view) {
	            view = isNaN(view) ? calendar.views[calendar.viewsEnum[view]] : calendar.views[view];

	            var that = this;
	            var options = that.options;
	            var min = options.min;
	            var max = options.max;

	            if (!value) {
	                that._current = value = new DATE(+calendar.restrictValue(value, min, max));
	            } else {
	                that._current = value;
	            }

	            if (view === undefined) {
	                view = that._currentView;
	            }

	            that._currentView = view;

	            for (var i = 0; i < that._views.length; i++) {
	                that._views[i].off(ns).remove();
	            }

	            that._initViews({ viewName: view.name, value: value });

	            that._restoreSelection();
	        },

	        _updateHeader: function() {
	            var that = this;
	            var view = that._currentView;
	            var title = that._title;
	            var value = that._firstViewValue;
	            var options = that.options;
	            var visibleRange = that._visibleRange();
	            var culture = options.culture;
	            var min = options.min;
	            var max = options.max;
	            var lastDate;
	            var disabled;
	            var prevDisabled;
	            var nextDisabled;


	            if (view.name === DECADE || view.name === CENTURY) {
	                lastDate = shiftDate(value, view.name, options.views - 1);
	                if (!isInRange(lastDate, min, max)) {
	                    lastDate = max;
	                }

	                title.html(view.first(value).getFullYear() + " - " + view.last(lastDate).getFullYear());
	            } else {
	                title.html(view.title(value, min, max, culture) + " - " + view.title(shiftDate(value, view.name, options.views - 1), min, max, culture));
	            }

	            disabled = view.name === CENTURY;
	            title.toggleClass(DISABLED, disabled).attr(ARIA_DISABLED, disabled);

	            prevDisabled = view.compare(visibleRange.start, that.options.min) < 1;
	            nextDisabled = view.compare(visibleRange.end, that.options.max) > -1;

	            if (prevDisabled && nextDisabled) {
	                if (that._navContainer) {
	                    that._navContainer.remove();
	                    that._navContainer = null;
	                }
	            } else {
	                if (!that._navContainer) {
	                    that._navContainer = $('<span class="k-calendar-nav k-hstack">' +
	                    '<a href="#" role="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-prev-view" ' + ARIA_LABEL + '="Previous"><span class="k-button-icon k-icon k-i-arrow-60-left"></span></a>' +
	                    '<a href="#" role="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-next-view" ' + ARIA_LABEL + '="Next"><span class="k-button-icon k-icon k-i-arrow-60-right"></span></a>' +
	                    '</span>').appendTo(that.header);
	                    that[PREVARROW] = that._navContainer.find(".k-prev-view");
	                    that[NEXTARROW] = that._navContainer.find(".k-next-view");
	                }

	                that[PREVARROW].toggleClass(DISABLED, prevDisabled).attr(ARIA_DISABLED, prevDisabled);
	                if (that[PREVARROW].hasClass(DISABLED)) {
	                    that[PREVARROW].removeClass(HOVER);
	                }

	                that[NEXTARROW].toggleClass(DISABLED, nextDisabled).attr(ARIA_DISABLED, nextDisabled);
	                if (that[NEXTARROW].hasClass(DISABLED)) {
	                    that[NEXTARROW].removeClass(HOVER);
	                }
	            }
	        },

	        _mouseEnter: function(e) {
	            var that = this;
	            var cell = $(e.currentTarget);
	            var range;
	            var items;
	            var startIdx;
	            var endIdx;

	            cell.addClass(HOVER);

	            if (that.rangeSelectable && that._currentView.name === "month") {
	                range = that.selectRange();
	                if (range.start && !range.end) {
	                    if (that._dateInViews(that.selectRange().start)) {
	                        items = that.element.find(that.rangeSelectable.options.filter);
	                        startIdx = $.inArray($(that.rangeSelectable._start)[0], items);
	                        endIdx = $.inArray($(cell)[0], items);
	                        if (startIdx > endIdx) {
	                            return;
	                        }
	                        that.rangeSelectable.range(that.rangeSelectable._start, cell);
	                    } else if(+toDateObject(that.element.find(CELLSELECTOR).first().find("a")) > +range.start) {
	                        that.rangeSelectable.selectTo(cell);
	                    }
	                    that.rangeSelectable._end = null;
	                }
	            }
	        },

	        _move: function(e, preventFocus) {
	            var that = this;
	            var options = that.options;
	            var key = e.keyCode;
	            var index = that._index;
	            var min = options.min;
	            var max = options.max;
	            var focusedCell = that.element.find(DOT+FOCUSED);
	            var table = focusedCell.closest("table");
	            var currentValue = new DATE(+(that._current || toDateObject(focusedCell.find("a"))));
	            var isRtl = kendo.support.isRtl(that.wrapper);
	            var navigate = false;
	            var value, prevent, method, cell, lastActive, cellIndex;

	            if (key == keys.RIGHT && !isRtl || key == keys.LEFT && isRtl) {
	                value = 1;
	                prevent = true;
	            } else if (key == keys.LEFT && !isRtl || key == keys.RIGHT && isRtl) {
	                value = -1;
	                prevent = true;
	            } else if (key == keys.UP) {
	                value = index === 0 ? -7 : -4;
	                prevent = true;
	            } else if (key == keys.DOWN) {
	                value = index === 0 ? 7 : 4;
	                prevent = true;
	            }
	            else if (key == keys.SPACEBAR) {
	                value = 0;
	                prevent = true;
	            }
	            else if (key == keys.HOME) {
	                prevent = true;
	                cell = table.find(CELLSELECTORVALID).eq(0);
	                if (cell.hasClass(FOCUSED)) {
	                    table = table.prev();
	                    if (table.length) {
	                        that._focusCell(table.find(CELLSELECTORVALID).eq(0));
	                    } else {
	                        navigate = that[PREVARROW] && !that[PREVARROW].hasClass(DISABLED);
	                        that._navigate(PREVARROW, -1, preventFocus);
	                        that._focusCell(that.element.find("table").first().find(CELLSELECTORVALID).first());
	                    }
	                } else {
	                    that._focusCell(cell);
	                }
	            } else if(key == keys.END) {
	                prevent = true;
	                cell = table.find(CELLSELECTORVALID).last();
	                if (cell.hasClass(FOCUSED)) {
	                    table = table.next();
	                    if (table.length) {
	                        that._focusCell(table.find(CELLSELECTORVALID).last());
	                    } else {
	                        navigate = that[NEXTARROW] && !that[NEXTARROW].hasClass(DISABLED);
	                        that._navigate(NEXTARROW, 1, preventFocus);
	                        that._focusCell(that.element.find("table").last().find(CELLSELECTORVALID).last());
	                    }
	                } else {
	                    that._focusCell(cell);
	                }
	            }

	            if (e.ctrlKey || e.metaKey) {
	                if (key == keys.RIGHT && !isRtl || key == keys.LEFT && isRtl) {
	                    navigate = that[NEXTARROW] && !that[NEXTARROW].hasClass(DISABLED);
	                    that._navigate(NEXTARROW, 1, preventFocus);
	                    prevent = true;
	                } else if (key == keys.LEFT && !isRtl || key == keys.RIGHT && isRtl) {
	                    navigate = that[PREVARROW] && !that[PREVARROW].hasClass(DISABLED);
	                    that._navigate(PREVARROW, -1, preventFocus);
	                    prevent = true;
	                } else if (key == keys.UP) {
	                    navigate = !that._title.hasClass(DISABLED);
	                    that.navigateUp();
	                    that._focusCell(that._cellByDate(that._current), !preventFocus);
	                    prevent = true;
	                } else if (key == keys.DOWN) {
	                    if (that._currentView.name === "month") {
	                        that.value(currentValue);
	                    } else {
	                        that.navigateDown(currentValue);
	                        that._focusCell(that._cellByDate(that._current), !preventFocus);
	                        navigate = true;
	                    }
	                    prevent = true;
	                } else if ((key == keys.ENTER || key == keys.SPACEBAR)) {
	                    if (options.selectable === "multiple") {
	                        that._toggleSelection(e);
	                    }
	                }
	            } else if (e.shiftKey && options.selectable !== "single") {
	                if (value !== undefined || method) {
	                    if (!method) {
	                        that._currentView.setDate(currentValue, value);
	                    }

	                    if (that._currentView.name !== "month") {
	                        return;
	                    }

	                    if (options.disableDates(currentValue)) {
	                        currentValue = that._nextNavigatable(currentValue, value);
	                    }

	                    min = createDate(min.getFullYear(), min.getMonth(), min.getDate());

	                    if (isInRange(currentValue, min, max)) {
	                        if (!that._dateInViews(currentValue)) {
	                            if (value > 0) {
	                                navigate = that[NEXTARROW] && !that[NEXTARROW].hasClass(DISABLED);
	                                that._navigate(NEXTARROW, 1, preventFocus);
	                            } else {
	                                navigate = that[PREVARROW] && !that[PREVARROW].hasClass(DISABLED);
	                                that._navigate(PREVARROW, -1, preventFocus);
	                            }
	                        }
	                        cell = that._cellByDate(currentValue);
	                        that._current = currentValue;

	                        if (that.selectable) {
	                            that._selectRange(toDateObject((that.selectable._lastActive || focusedCell).find("a")), currentValue);
	                            if (!that.selectable._lastActive) {
	                                that.selectable._lastActive = focusedCell;
	                            }
	                            that.trigger(CHANGE);
	                            that._focusCell(cell);
	                        }

	                        if (that.rangeSelectable) {
	                            lastActive = toDateObject((that.rangeSelectable._lastActive || focusedCell).find("a"));
	                            if (!that._dateInViews(lastActive)) {
	                                if (+lastActive > +currentValue) {
	                                    that.rangeSelectable._end = that.rangeSelectable._lastActive;
	                                    that.rangeSelectable.selectFrom(cell);
	                                } else {
	                                    that.rangeSelectable.selectTo(cell);
	                                }
	                            } else {
	                                if (that.rangeSelectable._end && that.rangeSelectable._end.is(DOT+FOCUSED)) {
	                                    that.rangeSelectable._lastActive = that.rangeSelectable._start;
	                                } else {
	                                    that.rangeSelectable._lastActive = that._cellByDate(lastActive);
	                                }
	                                that.rangeSelectable.range(that.rangeSelectable._lastActive, cell);
	                            }
	                            that.rangeSelectable.change();
	                            that._focusCell(cell);
	                        }
	                    }
	                }
	            } else {
	                if (key == keys.ENTER || key == keys.SPACEBAR) {
	                    if (that._currentView.name === "month") {
	                        if (that.selectable) {
	                            that.selectable._lastActive = that._cellByDate(currentValue);
	                        }
	                        that.value(currentValue);
	                        if (that.rangeSelectable) {
	                            that.rangeSelectable.change();
	                        }
	                    } else {
	                        that._click($(that._cell[0].firstChild), preventFocus);
	                    }
	                    prevent = true;
	                } else if (key == keys.PAGEUP || key == keys.PAGEDOWN) {
	                    prevent = true;
	                    cellIndex = table.find(CELLSELECTORVALID).index(focusedCell);
	                    table = key == keys.PAGEUP ? table.prev() : table.next();
	                    if (!table.length) {
	                        if (key == keys.PAGEUP) {
	                            navigate = that[PREVARROW] && !that[PREVARROW].hasClass(DISABLED);
	                            that.navigateToPast();
	                            table = that.element.find("table").first();
	                        } else {
	                            navigate = that[NEXTARROW] && !that[NEXTARROW].hasClass(DISABLED);
	                            that.navigateToFuture();
	                            table = that.element.find("table").last();
	                        }
	                    }
	                    cell = table.find(CELLSELECTORVALID).eq(cellIndex);
	                    if (cell.length) {
	                        that._focusCell(cell);
	                    } else {
	                        that._focusCell(table.find(CELLSELECTORVALID).last());
	                    }
	                }

	                if (value || method) {
	                    if (!method) {
	                        that._currentView.setDate(currentValue, value);
	                    }

	                    min = createDate(min.getFullYear(), min.getMonth(), min.getDate());

	                    if (isInRange(currentValue, min, max)) {
	                        if (that.selectable && options.disableDates(currentValue)) {
	                            currentValue = that._nextNavigatable(currentValue, value);
	                        }
	                        if (!that._dateInViews(currentValue)) {
	                            if (value > 0) {
	                                navigate = that[NEXTARROW] && !that[NEXTARROW].hasClass(DISABLED);
	                                that._navigate(NEXTARROW, 1, preventFocus);
	                            } else {
	                                navigate = that[PREVARROW] && !that[PREVARROW].hasClass(DISABLED);
	                                that._navigate(NEXTARROW, -1, preventFocus);
	                            }
	                        }
	                        cell = that._cellByDate(currentValue);
	                        that._current = currentValue;
	                        that._focusCell(cell, !preventFocus);
	                    }
	                }
	            }

	            if (navigate) {
	                that.trigger(NAVIGATE);
	            }

	            if (prevent) {
	                e.preventDefault();
	            }

	            return that._current;

	        },

	        _visualizeSelectedDatesInView: function() {
	            var that = this;
	            var selectedDates = {};
	            var cells;

	            $.each(that._selectDates, function(index, value) {
	                selectedDates[kendo.calendar.views[0].toDateString(value)] = value;
	            });
	            that.selectable.clear();
	            cells = that.element.find("table")
	                .find(CELLSELECTOR)
	                .filter(function(index, element) {
	                    return selectedDates[$(element.firstChild).attr(kendo.attr(VALUE))];
	                });

	            if (cells.length > 0) {
	                that.selectable._selectElement(cells, true);
	            }
	        },

	        _nextNavigatable: function(currentValue, value) {
	            var that = this;
	            var disabled = true;
	            var view = that._currentView;
	            var min = that.options.min;
	            var max = that.options.max;
	            var isDisabled = that.options.disableDates;
	            var navigatableDate = new Date(currentValue.getTime());

	            view.setDate(navigatableDate, -value);
	            while (disabled) {
	                view.setDate(currentValue, value);
	                 if (!isInRange(currentValue, min, max)) {
	                    currentValue = navigatableDate;
	                    break;
	                }
	                disabled = isDisabled(currentValue);
	            }
	            return currentValue;
	        },

	        _toggleSelection: function (event) {
	            var that = this;

	            that.selectable._lastActive = $(that._cell[0]);

	            if ($(that._cell[0]).hasClass(SELECTED)) {
	                that.selectable._unselect($(that._cell[0]));
	                that.selectable.trigger(CHANGE, { event: event});
	            }
	            else {
	                that.selectable.value($(that._cell[0]), { event: event});
	            }
	        },

	        _option: function(option, value) {
	            var that = this;
	            var options = that.options;
	            var currentValue = that._value || that._current;
	            var isBigger;

	            if (value === undefined) {
	                return options[option];
	            }

	            value = kendo.parseDate(value, options.format, options.culture);

	            if (!value) {
	                return;
	            }

	            options[option] = new DATE(+value);

	            if (option === MIN) {
	                isBigger = value > currentValue;
	            } else {
	                isBigger = currentValue > value;
	            }

	            if (isBigger) {
	                that._value = null;
	            }

	            that.navigate(that._value);

	            that._toggle();
	        },

	        _cellByDate: function(value) {
	            if (value instanceof Date) {
	                value = this._currentView.toDateString(value);
	            }
	            return this.element.find("table").find("td:not(." + OTHERMONTH + ")")
	            .filter(function() {
	                return $(this.firstChild).attr(kendo.attr(VALUE)) === value;
	            });
	        },

	        _selectable: function () {
	            var that = this;
	            var selectable = that.options.selectable;

	            if (that.selectable) {
	                that.selectable.destroy();
	                that.selectable = null;
	            }

	            if (that.rangeSelectable) {
	                that.rangeSelectable.destroy();
	                that.rangeSelectable = null;
	            }

	            if (selectable.toLowerCase() === "range") {
	                that.rangeSelectable = new RangeSelectable(that.wrapper, {
	                    calendar: that,
	                    filter: "table.k-month " + CELLSELECTORVALID,
	                    change: proxy(that._rangeSelection, that)
	                });
	            } else {
	                that.selectable = new Selectable(that.wrapper, {
	                    aria: true,
	                    dragToSelect: false,
	                    inputSelectors: "input,textarea,.k-multiselect-wrap,select,button,.k-button>span,.k-button>img,span.k-icon.k-i-arrow-60-down,span.k-icon.k-i-arrow-60-up",
	                    multiple: Selectable.parseOptions(selectable).multiple,
	                    filter: "table.k-content " + CELLSELECTORVALID,
	                    change: proxy(that._selection, that),
	                    relatedTarget: proxy(that._onRelatedTarget, that),
	                    unselect: proxy(that._unselecting, that)
	                });
	            }
	        },

	        _onRelatedTarget: function(target) {
	            var that = this;

	            if (that.selectable.options.multiple && target.is(CELLSELECTORVALID) && target.length > 1) {
	                that._focusCell(target.first(), true);
	            }
	        },

	        _getFirstViewDate: function(currentView) {
	            var that = this;
	            var options = that.options;
	            var ranges = [];
	            var start;
	            var end;
	            var current = new Date(+that._current);
	            var i;

	            for (i = 0; i < options.views; i++) {
	                start = currentView.first(current);
	                end =  currentView.last(current);

	                if (+end > +options.max) {
	                    if (+start <= +options.max) {
	                        ranges.push({start: start, end: new Date(+options.max)});
	                    }
	                    break;
	                }

	                ranges.push({start: start, end: end});

	                current = new Date(+shiftDate(end, currentView.name, 1));
	            }

	            current = new Date(+that._current);

	            for (i = 0; i < options.views; i++) {
	                start = currentView.first(current);
	                end = currentView.last(current);

	                if (+start < +options.min) {
	                    if (+end >= +options.min) {
	                        ranges.push({start: new Date(+options.min), end: end});
	                    }
	                    break;
	                }

	                ranges.push({start: start, end: end});

	                current = new Date(+shiftDate(start, currentView.name, -1));
	            }

	            start = ranges[0].start;

	            for (i = 0; i < options.views + 1; i++) {
	                if (!ranges[i]) {
	                    break;
	                }

	                if (+start > +ranges[i].start) {
	                    start = ranges[i].start;
	                }
	            }

	            return new Date(+start);
	        },

	        _canRenderNextView: function(viewDate) {
	            var fullYear = viewDate.getFullYear();
	            var month = viewDate.getMonth();
	            var date = viewDate.getDate();
	            var max = this.options.max;
	            var maxYear = max.getFullYear();
	            var maxMonth = max.getMonth();


	            if (fullYear < maxYear) {
	                return true;
	            }

	            if (fullYear === maxYear && month < maxMonth) {
	                return true;
	            }

	            if (fullYear === maxYear &&  month === maxMonth &&  date < max.getDate()) {
	                return true;
	            }

	            if (fullYear === maxYear &&  month === maxMonth &&  date === max.getDate()) {
	                return true;
	            }

	            return false;
	        },

	        _initViews: function(viewOptions) {
	            var that = this;
	            var options = that.options;
	            var index = calendar.viewsEnum[viewOptions.viewName];
	            var currentView = calendar.views[index];
	            var viewDate;

	            that._current = new DATE(+calendar.restrictValue(viewOptions.value, options.min, options.max));
	            that._views = [];
	            that._index = index;
	            viewDate = that._getFirstViewDate(currentView);
	            viewDate.setDate(1);

	            that._firstViewValue = new Date(+viewDate);

	            for (var i = 0; i < options.views; i++) {
	                viewDate = i ? shiftDate(viewDate, currentView.name, 1): viewDate;
	                viewDate.setDate(1);

	                if (!that._canRenderNextView(viewDate)) {
	                    break;
	                }

	                that._table = $(currentView.content($.extend({
	                    min: options.min,
	                    max: options.max,
	                    date: viewDate,
	                    url: options.url,
	                    dates: options.dates,
	                    format: options.format,
	                    culture: options.culture,
	                    disableDates: options.disableDates,
	                    showHeader: options.showViewHeader,
	                    isWeekColumnVisible: options.weekNumber,
	                    otherMonth: options.otherMonth,
	                    messages: options.messages,
	                    contentClasses: "k-content"
	                }, that[currentView.name])));

	                that._table.appendTo(that.tablesWrapper).addClass("k-" + currentView.name);
	                that._views.push(that._table);
	            }

	            // that.wrapper.width(visibleViews * that._calendarWidth);

	            that._currentView = currentView;

	            that.tablesWrapper.attr("class", "k-calendar-view k-calendar-" + currentView.name + "view k-hstack k-align-items-start k-justify-content-center");

	            that._updateHeader();
	        },

	        _rangeSelection: function(e) {
	            var that = this;
	            var range = e.sender.range();
	            var useEnd = e.sender._useEnd;
	            var useStart = e.sender._useStart;
	            var initialRange = that.selectRange() || {};
	            var start;
	            var end;

	            if (range.start) {
	                start = toDateObject(range.start.find("a"));
	            }

	            if (range.end) {
	                end = toDateObject(range.end.find("a"));
	            }

	            that._range = { start: useStart ? initialRange.start : start, end: useEnd ? initialRange.end : end };

	            if (!that._preventChange) {
	                that.trigger(CHANGE);
	            }
	        },

	        _selection: function(e) {
	            var that = this;
	            var selectElements = e.sender.value();
	            var domEvent = e.event;
	            var currentTarget = $(domEvent && domEvent.currentTarget);
	            var isCell = currentTarget.is("td");
	            var currentValue;

	            if (that.options.selectable === "single") {
	                that._validateValue(selectElements[0] ? toDateObject(selectElements.first().find("a")) : e.sender._lastActive ? toDateObject(e.sender._lastActive.find("a")) : that.value());
	            }

	            if (that.options.selectable == "multiple") {

	                if (isCell) {
	                    currentValue = toDateObject(currentTarget.find("a"));
	                }

	                if (domEvent && domEvent.ctrlKey) {
	                    if (isCell) {
	                        if (currentTarget.hasClass(SELECTED)) {
	                            that._selectDates.push(currentValue);
	                        } else {
	                            that._deselect(currentValue);
	                        }
	                    } else {
	                        that.element.find("table " + CELLSELECTORVALID).each(function(index, element){
	                            var value = toDateObject($(element).find("a"));
	                            that._deselect(value);
	                        });
	                        that._addSelectedCellsToArray();
	                    }
	                } else if (domEvent && domEvent.shiftKey) {
	                    that._selectRange(toDateObject(e.sender._lastActive ? e.sender._lastActive.find("a") : selectElements.first().find("a")), currentValue);
	                } else if (isCell) {
	                    that._selectDates  = [];
	                    that._selectDates.push(currentValue);
	                } else {
	                    that._selectDates = [];
	                    that._addSelectedCellsToArray();
	                }
	            }

	            if (!that._preventChange) {
	                that.trigger(CHANGE);
	            }
	        },

	        _addSelectedCellsToArray: function() {
	            var that = this;
	            that.selectable.value().each(function(index, item) {
	                var date = toDateObject($(item.firstChild));
	                if (!that.options.disableDates(date)) {
	                    that._selectDates.push(date);
	                }
	            });
	        },

	        _deselect: function(date) {
	            var that = this;
	            var currentDateIndex = that._selectDates.map(Number).indexOf(+date);
	             if (currentDateIndex != -1) {
	                that._selectDates.splice(currentDateIndex, 1);
	            }
	        },

	        _unselecting: function(e) {
	            var that = this;
	            var element = e.element;

	            if (that.options.selectable === "single" && !mobileOS && element.hasClass(FOCUSED)) {
	                e.preventDefault();
	            }
	        },

	        _visibleRange: function () {
	            var tables = this.element.find(".k-calendar-view table");
	            var firstDateInView = toDateObject(tables.first().find(CELLSELECTOR).first().find("a"));
	            var lastDateInView = toDateObject(tables.last().find(CELLSELECTOR).last().find("a"));
	            return { start : firstDateInView, end: lastDateInView };
	        },

	        _dateInViews: function(date) {
	            var that = this;
	            var tables = that.element.find(".k-calendar-view table");
	            var firstDateInView = toDateObject(tables.first().find(CELLSELECTOR).first().find("a"));
	            var lastDateInView = toDateObject(tables.last().find(CELLSELECTOR).last().find("a"));

	            date = new Date(date.toDateString());

	            return +date <= +lastDateInView && +date >= +firstDateInView;
	        },

	        _fillRange: function(start, end) {
	            var that = this;
	            var daysDifference;

	            that._selectDates = [];
	            daysDifference = daysBetweenTwoDates(start, end);
	            addDaysToArray(that._selectDates, daysDifference, start, that.options.disableDates);
	        },

	        _selectRange: function(start, end) {
	            var that = this;
	            var current;

	            if (+end < +start) {
	                current = end;
	                end = start;
	                start = current;
	            }

	            that._fillRange(start, end);
	            that._visualizeSelectedDatesInView();
	        },

	        _header: function() {
	            var that = this;
	            var element = that.element;
	            var buttons;
	            var header = element.find(".k-calendar-header");

	            if (!header.length) {
	                header = $('<div class="k-calendar-header k-hstack">' +
	                    '<a href="#" role="button" class="k-calendar-title k-title k-button k-button-md k-rounded-md k-button-flat k-button-flat-base" aria-live="assertive" aria-atomic="true"></a>' +
	                    '<span class="k-spacer"></span>' +
	                    '<span class="k-calendar-nav k-hstack">' +
	                        '<a href="#" role="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-prev-view" ' + ARIA_LABEL + '="Previous"><span class="k-button-icon k-icon k-i-arrow-60-left"></span></a>' +
	                        '<a href="#" role="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-next-view" ' + ARIA_LABEL + '="Next"><span class="k-button-icon k-icon k-i-arrow-60-right"></span></a>' +
	                    '</span>' +
	                '</div>').prependTo(element);
	            }

	            that.header = header;

	            header.on(MOUSEENTER + ns + " " + MOUSELEAVE_NS + " " + FOCUS + ns + " " + BLUR + ns, ".k-button", mousetoggle).on("click", function() { return false; })
	                .on(CLICK + ns, ".k-button.k-calendar-title", function() { that.navigateUp(); that._focusCell(that._cellByDate(that._current), true); that.trigger(NAVIGATE); })
	                .on(CLICK + ns, ".k-button.k-prev-view", function(e) { e.preventDefault(); that.navigateToPast(); that.trigger(NAVIGATE); })
	                .on(CLICK + ns, ".k-button.k-next-view", function(e) { e.preventDefault(); that.navigateToFuture(); that.trigger(NAVIGATE); });

	            buttons = header.find(".k-button");

	            that._title = buttons.filter(".k-calendar-title");
	            that._navContainer= header.find(".k-calendar-nav");
	            that[PREVARROW] = buttons.filter(".k-prev-view");
	            that[NEXTARROW] = buttons.filter(".k-next-view");
	        },

	        _wrapper: function() {
	            this.tablesWrapper = $('<div class="k-calendar-view" />').insertAfter(this.element[0].firstChild);
	        },

	        _templates: function() {
	            var that = this;
	            var options = that.options;
	            var month = options.month;
	            var content = month.content;
	            var weekNumber = month.weekNumber;
	            var empty = month.empty;

	            that.month = {
	                content: template('<td class="#=data.cssClass#" role="gridcell"><a tabindex="-1" class="k-link#=data.linkClass#" href="#=data.url#" ' + kendo.attr(VALUE) + '="#=data.dateString#" title="#=data.title#">' + (content || "#=data.value#") + '</a></td>', { useWithBlock: !!content }),
	                empty: template('<td role="gridcell"' + (empty ? '>' : ' class="k-calendar-td k-out-of-range">') + (empty || "<a class='k-link'></a>") + "</td>", { useWithBlock: !!empty }),
	                weekNumber: template('<td class="k-calenar-td k-alt">' + (weekNumber || "#= data.weekNumber #") + "</td>", { useWithBlock: !!weekNumber })
	            };
	        },

	        _footer: function() {
	            var that = this;
	            var options = that.options;
	            var template = options.footer !== false ? kendo.template(that.options.footer || '#= kendo.toString(data,"D","' + options.culture +'") #', { useWithBlock: false }) : null;
	            var today = getToday();
	            var element = that.element;
	            var footer = element.find(".k-footer");

	            if (!template) {
	                that._toggle(false);
	                footer.hide();
	                return;
	            }

	            if (!footer[0]) {
	                footer = $('<div class="k-footer"><a href="#" class="k-link k-nav-today"></a></div>').appendTo(element);
	            }

	            that._today = footer.show()
	                .find(".k-link")
	                .html(template(today))
	                .attr("title", kendo.toString(today, "D", that.options.culture));

	            that._toggle();
	        },

	        _navigate: function(arrow, modifier, preventFocus) {
	            var that = this;
	            var index = that._index + 1;
	            var currentValue = new DATE(+that._current);
	            var originaValue = new DATE(+that._current);
	            var offset;

	            arrow = that[arrow];

	            offset = that._cellByDate(currentValue).closest("table").index();

	            if (modifier > 0) {
	                offset = 1 - offset;
	            } else {
	                offset = offset + 1;
	            }

	            if (!arrow || !arrow.hasClass(DISABLED)) {
	                if (index > 3) {
	                    currentValue.setFullYear(currentValue.getFullYear() + 100 * (modifier * offset));
	                } else {
	                    calendar.views[index].setDate(currentValue, (modifier * offset));
	                }

	                that.navigate(currentValue);

	                if (that._dateInViews(originaValue)) {
	                    that._focusCell(that._cellByDate(originaValue), !preventFocus);
	                    that._current = originaValue;
	                } else {
	                    if (index > 3) {
	                        originaValue.setFullYear(originaValue.getFullYear() + 100 * modifier);
	                    } else {
	                        calendar.views[index].setDate(originaValue, modifier);
	                    }
	                    that._focusCell(that._cellByDate(originaValue), !preventFocus);
	                    that._current = originaValue;
	                }
	            }
	        },

	        _toggle: function(toggle) {
	            var that = this;
	            var options = that.options;
	            var isTodayDisabled = options.selectable !== "range" && that.options.disableDates(getToday());
	            var link = that._today;

	            if (toggle === undefined) {
	                toggle = isInRange(getToday(), options.min, options.max);
	            }

	            if (link) {
	                link.off(CLICK + ns);

	                if (toggle && !isTodayDisabled) {
	                    link.addClass(TODAY)
	                    .removeClass(DISABLED)
	                    .on(CLICK + ns, proxy(that._todayClick, that));
	                } else {
	                    link.removeClass(TODAY)
	                    .addClass(DISABLED)
	                    .on(CLICK + ns, function prevent (e) {
	                        e.preventDefault();
	                    });
	                }
	            }
	        },

	        _click: function(link, preventFocus) {
	            var that = this;
	            var options = that.options;
	            var currentValue = new Date(+that._current);
	            var value = toDateObject(link);

	            kendo.date.adjustDST(value, 0);

	            that._currentView.setDate(currentValue, value);
	            that._current = value;

	            if (that._currentView.name !== options.depth) {
	                that.navigateDown(calendar.restrictValue(currentValue, options.min, options.max));
	                that._focusCell(that._cellByDate(that._current), !preventFocus);
	                that.trigger(NAVIGATE);
	            } else {
	                that._focusCell(link.closest("td"), !preventFocus);
	            }
	        },

	        _blur: function() {
	            var that = this;

	            if (that._cell) {
	                that._cell.removeClass(FOCUSED);
	            }
	        },

	        _focus: function(e) {
	            var that = this;
	            var table = $(e.currentTarget);
	            var cell = that._cell;

	            if (!cell || !$.contains(table[0], cell[0])) {
	                cell = table.find(CELLSELECTORVALID).first();
	            }

	            that._focusCell(cell);
	        },

	        _focusCell: function(cell, focusTable) {
	            var that = this;
	            var cellId = that._cellID;
	            var table = cell.closest("table");

	            if (that._cell && that._cell.length) {
	                that._cell[0].removeAttribute(ARIA_SELECTED);
	                that._cell[0].removeAttribute(ARIA_LABEL);
	                that._cell.removeClass(FOCUSED);
	                that._cell[0].removeAttribute(ID);
	                that._cell.closest("table")[0].removeAttribute("aria-activedescendant");
	            }

	            that._cell = cell;

	            if (focusTable) {
	                table.trigger("focus");
	            }

	            if (cellId) {
	                cell.attr(ID, cellId);
	                table.attr("aria-activedescendant", cellId);
	            }

	            cell.attr(ARIA_SELECTED, true).addClass(FOCUSED);

	            if (cell.length && that._currentView.name == "month") {
	                that._current = toDateObject(cell.find("a"));
	            }
	        },

	        _todayClick: function(e) {
	            var that = this;
	            var disabled = that.options.disableDates;
	            var today = getToday();
	            var navigate = false;

	            e.preventDefault();

	            if (disabled(today)) {
	                return;
	            }

	            that._value = today;

	            if (that.options.selectable === "multiple") {
	                that._selectDates = [today];
	            }

	            if (that.options.selectable === "range") {
	                that.rangeSelectable.clear(true);
	                that._range = { start: today, end: null };
	            }

	            if (that._currentView.name != "month" || !that._dateInViews(today)) {
	                navigate = true;
	            }

	            that.navigate(today, that.options.depth);

	            if (that.options.selectable === "single") {
	                that.selectable._lastActive = null;
	            }

	            if (navigate) {
	                that.trigger(NAVIGATE);
	            }

	            that.trigger(CHANGE);
	        },

	        _validateValue: function(value) {
	            var that = this;
	            var options = that.options;
	            var min = options.min;
	            var max = options.max;

	            value = kendo.parseDate(value, options.format, options.culture);

	            if (value !== null) {
	                value = new DATE(+value);

	                if (!isInRange(value, min, max)) {
	                    value = null;
	                }
	            }

	            if (value === null || !that.options.disableDates(new Date(+value))) {
	                that._value = value;
	            } else if (that._value === undefined) {
	                that._value = null;
	            }

	            return that._value;
	        },

	        _updateAria: function (ariaTemplate, date) {
	            var that = this;
	            var cell = that._cellByDate(date || that.current());
	            var valueType = that.view().valueType();
	            var current = date || that.current();
	            var text;

	            that._focusCell(cell);

	            if (valueType === "month") {
	                text = kendo.toString(current, "MMMM");
	            } else if (valueType === "date") {
	                text = kendo.toString(current, "D");
	            } else {
	                text = cell.text();
	            }

	            cell.attr("aria-label", ariaTemplate({ current: current, valueType: valueType, text: text }));
	            return cell.attr("id");
	        },

	        clearSelection: function () {
	            var that = this;

	            if (that.selectable) {
	                that.element.find(DOT+SELECTED).removeClass(SELECTED);
	            }

	            if (that.rangeSelectable) {
	                that.rangeSelectable.clear(true);
	            }
	        },

	        _restoreSelection: function() {
	            var that = this;
	            var range;
	            var selectable = that.options.selectable;

	            if (that._currentView.name !== that.options.depth) {
	                return;
	            }

	            that._preventChange = true;

	            if (selectable === "range") {
	                range = that.selectRange();

	                if (!range || !range.start) {
	                    that._preventChange = false;
	                    return;
	                }

	                that.selectRange(range);
	            }

	            if (selectable === "single" && that.value()) {
	                that.selectable.value(that._cellByDate(that.value()));
	            }

	            if (selectable === "multiple") {
	                that._visualizeSelectedDatesInView();
	            }

	            that._preventChange = false;
	        },

	        value: function(value) {
	            var that = this;
	            var cell;

	            if (value === undefined) {
	                return that._value;
	            }

	            value = that._validateValue(value);

	            that.clearSelection();

	            if (value && !that._dateInViews(value)) {
	                that.navigate(value);
	            }

	            if (value !== null && that._currentView.name === MONTH) {
	                cell = that._cellByDate(value);

	                if (that.selectable) {
	                    that.selectable.value(cell);
	                }

	                if (that.rangeSelectable) {
	                    that.rangeSelectable.start(cell);
	                    that.rangeSelectable._lastActive = cell;
	                }
	            }
	        },

	        selectDates: function(dates) {
	            var that = this;
	            var validSelectedDates;
	            var datesUnique;

	            if(dates === undefined) {
	                return that._selectDates;
	            }

	            datesUnique = dates
	                .map(function (date) { return date.getTime(); })
	                .filter(function (date, position, array) {
	                    return array.indexOf(date) === position;
	                })
	                .map(function (time) { return new Date(time); });

	            validSelectedDates = $.grep(datesUnique, function(value) {
	                if(value) {
	                    return +that._validateValue(new Date(value.setHours(0, 0, 0, 0))) === +value;
	                }
	            });
	            that._selectDates = validSelectedDates.length > 0 ? validSelectedDates : (datesUnique.length === 0 ? datesUnique : that._selectDates);
	            that._visualizeSelectedDatesInView();
	        },

	        selectRange: function(range) {
	            var that = this;
	            var startInRange;
	            var endInRange;
	            var visibleRange;

	            if (range === undefined) {
	                return that._range;
	            }

	            that._range = range;

	            if (!range.start) {
	                return;
	            }

	            visibleRange = that._visibleRange();

	            startInRange = that._dateInViews(range.start);
	            endInRange = range.end && that._dateInViews(range.end);

	            if (!startInRange && endInRange) {
	                that.rangeSelectable.selectTo(that._cellByDate(range.end));
	            }

	            if (startInRange && endInRange) {
	                that.rangeSelectable.range(that._cellByDate(range.start), that._cellByDate(range.end));
	            }

	            if (range.end && startInRange && !endInRange) {
	                that.rangeSelectable.selectFrom(that._cellByDate(range.start));
	            }

	            if (!range.end && startInRange) {
	                that.rangeSelectable.start(that._cellByDate(range.start));
	            }

	            if (+visibleRange.start > +range.start && +visibleRange.end < +range.end) {
	                that.rangeSelectable.mid(that.element.find(CELLSELECTORVALID));
	            }
	        }
	    });

	    kendo.ui.plugin(MultiViewCalendar);

	    function mousetoggle(e) {
	        var disabled = $(this).hasClass("k-state-disabled");

	        if (!disabled) {
	            $(this).toggleClass(HOVER, MOUSEENTER.indexOf(e.type) > -1 || e.type == FOCUS);
	        }
	    }

	    function addDaysToArray(array, numberOfDays, fromDate, disableDates) {
	        for(var i = 0; i <= numberOfDays; i++) {
	            var nextDay = new Date(fromDate.getTime());
	            nextDay = new Date(nextDay.setDate(nextDay.getDate() + i));
	            if(!disableDates(nextDay)) {
	                array.push(nextDay);
	            }
	        }
	    }

	    function daysBetweenTwoDates(startDate, endDate) {
	        if(+endDate < +startDate) {
	            var temp = +startDate;
	            calendar.views[0].setDate(startDate, endDate);
	            calendar.views[0].setDate(endDate, new Date(temp));
	        }
	        var fromDateUTC = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
	        var endDateUTC = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());

	        return Math.ceil((+endDateUTC - +fromDateUTC) / kendo.date.MS_PER_DAY);
	    }

	    function shiftDate(value, dimension, numberOfViews) {
	        var current;
	        if (dimension === "month") {
	            current = new DATE(value.getFullYear(), value.getMonth() + numberOfViews, value.getDate());
	            current.setFullYear(value.getFullYear());
	            if (Math.abs(current.getMonth() - value.getMonth()) > numberOfViews || numberOfViews > 10) {
	                current.setMonth(value.getMonth() + numberOfViews);
	                current = calendar.views[0].last(current);
	            }
	            return current;
	        } else if (dimension === "year") {
	            current = new DATE(1, value.getMonth(), value.getDate());
	            current.setFullYear(value.getFullYear() + numberOfViews);
	            if (Math.abs(current.getFullYear() - value.getFullYear()) > numberOfViews) {
	                current = new DATE(1, value.getMonth(), 1);
	                current.setFullYear(value.getFullYear() + numberOfViews);
	                current = calendar.views[1].last(current);
	            }
	            return current;
	        } else if (dimension === "decade") {
	            current = new DATE(1, value.getMonth(), value.getDate());
	            current.setFullYear(value.getFullYear() + 10*numberOfViews);
	            if (Math.abs(current.getFullYear() - value.getFullYear()) > 10*numberOfViews) {
	                current = new DATE(1, value.getMonth(), 1);
	                current.setFullYear(value.getFullYear() + 10*numberOfViews);
	                current = calendar.views[2].last(current);
	            }
	            return current;
	        } else if (dimension === "century") {
	            current = new DATE(1, value.getMonth(), value.getDate());
	            current.setFullYear(value.getFullYear() + 100*numberOfViews);
	            if (Math.abs(current.getFullYear() - value.getFullYear()) > 100*numberOfViews) {
	                current = new DATE(1, value.getMonth(), 1);
	                current.setFullYear(value.getFullYear() + 100*numberOfViews);
	                current = calendar.views[3].last(current);
	            }
	            return current;
	        }
	    }

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });