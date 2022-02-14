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

	module.exports = __webpack_require__(1425);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1136:
/***/ (function(module, exports) {

	module.exports = require("./kendo.tooltip");

/***/ }),

/***/ 1201:
/***/ (function(module, exports) {

	module.exports = require("./kendo.multiviewcalendar");

/***/ }),

/***/ 1414:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.view");

/***/ }),

/***/ 1425:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1414), __webpack_require__(1201), __webpack_require__(1136) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "scheduler.yearview",
	    name: "Scheduler Year View",
	    category: "web",
	    description: "The Scheduler Year View",
	    depends: [ "scheduler.view", "multiviewcalendar", "tooltip" ],
	    hidden: true
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        SchedulerView = ui.SchedulerView,
	        extend = $.extend,
	        proxy = $.proxy,
	        template = kendo.template,
	        firstDayOfYear = kendo.date.firstDayOfYear,
	        firstDayOfMonth = kendo.date.firstDayOfMonth,
	        lastDayOfMonth = kendo.date.lastDayOfMonth,
	        NAVIGATE = "navigate",
	        KEYDOWN = "keydown",
	        ACTIVATE = "activate",
	        SHOW = "show",
	        HIDE = "hide",
	        CLICK = "click",
	        DOT = ".",
	        NS = ".kendoYearView";

	    var YearViewStyles = {
	        layout: "k-scheduler-layout k-scheduler-layout-flex k-scheduler-yearview",
	        body: "k-scheduler-body",
	        tooltip: "k-scheduler-tooltip",
	        indicator: "k-day-indicator",
	        event: "k-tooltip-event",
	        hidden: "k-hidden"
	    };

	    var TOOLTIP_TEMPLATE = template(
	        "<div class='k-tooltip-title k-text-center'>" +
	            "<div class='k-month'>#:kendo.format('{0:MMM}', date)#</div>" +
	            "<div tabindex='0' class='k-link k-day k-text-primary'>#:kendo.format('{0:dd}', date)#</div>" +
	        "</div>" +
	        "#if(events.length){#" +
	            "<div class='k-tooltip-events-container'>" +
	                "<div class='k-tooltip-events'>" +
	                    "#for(var i = 0; i < events.length; i+=1){#" +
	                        "#var event = events[i]#" +
	                        "<div class='k-tooltip-event k-event' title='#:event.title#'" +
	                            "# if (event.resources[0]) { #" +
	                                "style='background-color: #: event.resources[0].color #; border-color: #: event.resources[0].color #;'" +
	                            "#}#>" +
	                            "<div class='k-event-title k-text-ellipsis'>#:event.title#</div>" +
	                            "<span class='k-spacer'></span>" +
	                            "<span class='k-event-time'>#:kendo.format('{0:t}', event.start)#</span>" +
	                        "</div>" +
	                    "#}#" +
	                "</div>" +
	            "</div>" +
	        "#} else {#" +
	            "<div class='k-no-data k-text-center'>#:messages.noData#</div>" +
	        "#}#"
	    );

	    var YearView = SchedulerView.extend({
	        init: function(element, options) {
	            var that = this;

	            SchedulerView.fn.init.call(that, element, options);

	            that._yearRange();

	            that._templates();

	            that._layout();

	            that._initCalendar();

	            that._initTooltip();
	        },

	        options: {
	            title: "Year",
	            name: "year",
	            months: 12,
	            startDate: null,
	            messages: {
	                noData: "No events on this date."
	            },
	            selectedDateFormat: "{0:yyyy}",
	            selectedShortDateFormat: "{0:yyyy}",
	            selectedMobileDateFormat: "{0:yyyy}",
	            tooltipTemplate: TOOLTIP_TEMPLATE
	        },

	        name: "year",

	        events: [ NAVIGATE ],

	        _yearRange: function () {
	            var that = this,
	                options = that.options,
	                tempEnd;

	            that._startDate = options.startDate ? firstDayOfMonth(options.startDate) : firstDayOfYear(options.date);
	            that._startDate.setFullYear(options.date.getFullYear());

	            tempEnd = new Date(that._startDate);
	            tempEnd.setMonth(tempEnd.getMonth() + options.months);
	            that._endDate = tempEnd;
	        },

	        _templates: function() {
	            var options = this.options,
	                settings = extend({}, kendo.Template, options.templateSettings);

	            this.tooltipTemplate = kendo.template(options.tooltipTemplate, settings);
	        },

	        _layout: function() {
	            var that = this,
	                styles = YearViewStyles;

	            that.content = $("<div/>").addClass(styles.layout);
	            that.element.append(that.content);

	            that.body = $("<div/>").addClass(styles.body);
	            that.content.append(that.body);
	        },

	        _initCalendar: function () {
	            var that = this,
	                options = that.options,
	                calendarElement = $("<div/>");

	            that.body.append(calendarElement);

	            that.calendar = new ui.MultiViewCalendar(calendarElement, {
	                views: options.months,
	                value: that.startDate(),
	                showViewHeader: true,
	                footer: false
	            });

	            if (!options.selectable) {
	                that._disableCalendarSelection();
	            }

	            that.calendar.value(null);

	            that.calendar.header.toggleClass(YearViewStyles.hidden);

	            that.calendar.element.on(CLICK + NS, "td[role='gridcell']", proxy(that._calendarCellClick, that));

	            that.calendar.element.on(KEYDOWN + NS, "table.k-content", proxy(that._calendarKeydown, that));

	            that.calendar.bind(NAVIGATE, proxy(that._calendarNavigate, that));
	        },

	        _calendarCellClick: function(ev) {
	            var that = this,
	                target = that.calendar.selectable.value().first();

	            ev.preventDefault();
	            ev.stopPropagation();

	            that._displayTooltip(target);
	        },

	        _calendarKeydown: function(ev) {
	            var that = this,
	                keys = kendo.keys,
	                keyCode = ev.keyCode;

	            if (keyCode == keys.ENTER || keyCode == keys.SPACEBAR) {
	                ev.preventDefault();

	                that._displayTooltip(that.calendar.selectable.value().first());
	            }
	        },

	        _calendarNavigate: function(ev) {
	            var that = this,
	                calendar = ev.sender,
	                isPrevious = calendar._firstViewValue < that.startDate(),
	                navigationDate = isPrevious ?  that.previousDate() : that.nextDate();

	            that.trigger(NAVIGATE, { view: "year", date: navigationDate });

	            that._focusCellOnNavigate();
	        },

	        _focusCellOnNavigate: function() {
	            var that = this,
	                calendar = that.calendar || that.element.find(".k-calendar").getKendoMultiViewCalendar(),
	                isPrevious,
	                focusDate;

	            if (!calendar) {
	                return;
	            }

	            isPrevious = calendar._firstViewValue < that.startDate();
	            focusDate = isPrevious ?  that.lastDateInRange() : that.nextDate();

	            if (that.options.selectable) {
	                calendar.value(focusDate);
	            }

	            calendar._focusCell(calendar._cellByDate(focusDate), true);
	        },

	        _disableCalendarSelection: function() {
	            var that = this;

	            if (!that.calendar) {
	                return;
	            }

	            that.calendar.value(null);
	            that.calendar.element.off(KEYDOWN, that.calendar._move);
	            that.calendar.element.find("table").attr("tabindex", "-1");
	        },

	        _initTooltip: function() {
	            var that = this,
	                tooltipElement = that.content,
	                tooltipTemplate = that._buildTooltipTemplate.bind(that);

	            that.tooltip = new ui.Tooltip(tooltipElement, {
	                filter: ".k-calendar td[role='gridcell']",
	                showOn: CLICK,
	                position: "right",
	                content: tooltipTemplate,
	                width: 220
	            });

	            that._initTooltipPopup();

	            that.tooltip.bind(SHOW, proxy(that._tooltipShow, that));

	            that.tooltip.bind(HIDE, proxy(that._tooltipHide, that));
	        },

	        _initTooltipPopup: function() {
	            var that = this,
	                tooltip = that.tooltip;

	            if (!that.tooltip) {
	                return;
	            }

	            tooltip._initPopup();

	            tooltip.popup.element.addClass(YearViewStyles.tooltip);

	            tooltip.popup.element.on(CLICK + NS, ".k-tooltip-title > .k-day", proxy(that._tooltipTitleClick, that));

	            tooltip.popup.element.on(KEYDOWN + NS, that, proxy(that._tooltipKeydown, that));
	        },

	        _buildTooltipTemplate: function() {
	            var that = this,
	                date = kendo.parseDate(that.calendar.current()),
	                data = that.eventsByDate || [];

	            data = data.filter(function(dateData) {
	                return kendo.toString(new Date(dateData.value), "d") == kendo.toString(date, "d");
	            });

	            if (data && data[0]) {
	                data[0].items.map(function(event) {
	                    event.resources = that.eventResources(event) || [];
	                });
	            }

	            return that.tooltipTemplate({
	                date: date,
	                events: data[0] ? data[0].items : [],
	                messages: that.options.messages
	            });
	        },

	        _inverseTooltipEventsColor: function() {
	            var that = this;

	            $.each(that.tooltip.popup.element.find(DOT + YearViewStyles.event), function(){
	                that._inverseEventColor($(this));
	            });
	        },

	        _tooltipShow: function(ev) {
	            var that = this,
	                tooltip = ev.sender;

	            tooltip.refresh();

	            that._inverseTooltipEventsColor();

	            tooltip.popup.element.find(":kendoFocusable").first().trigger("focus");
	        },

	        _tooltipHide: function() {
	            if(!this.calendar) {
	                return;
	            }

	            this.calendar._focusCell(this.calendar.selectable.value().first(), true);
	        },

	        _tooltipTitleClick: function() {
	            this._navigateToDayView();
	        },

	        _tooltipKeydown: function(ev) {
	            var that = this,
	                element = that.tooltip.popup.element,
	                target = $(ev.target),
	                keys = kendo.keys,
	                keyCode = ev.keyCode,
	                shiftKey = ev.shiftKey;

	            if (target.is(".k-day") && keyCode == keys.ENTER || keyCode == keys.SPACEBAR) {
	                ev.preventDefault();

	                that._navigateToDayView();
	            }

	            if (keyCode == keys.TAB) {
	                var firstFocusable = element.find(":kendoFocusable").first();
	                var lastFocusable = element.find(":kendoFocusable").last();

	                if (shiftKey && target.is(firstFocusable)) {
	                    lastFocusable.trigger("focus");
	                    ev.preventDefault();
	                } else if (target.is(lastFocusable)) {
	                    firstFocusable.trigger("focus");
	                    ev.preventDefault();
	                }
	            }
	        },

	        _navigateToDayView: function() {
	            var dayViewEnabled = $.grep(this.options.views, function(view) {
	                return ($.isPlainObject(view) && view.type == "kendo.ui.DayView") || view === "day";
	            }).length;

	            if (dayViewEnabled) {
	                this.trigger(NAVIGATE, { view: "day", date: this.calendar.current() });
	            }
	        },

	        _displayTooltip: function(target) {
	            var that = this;

	            if (!target.length) {
	                return;
	            }

	            if (!that.options.selectable) {
	                target.removeClass("k-state-selected");
	            }

	            setTimeout(function() {
	                that.tooltip.show(target);
	            }, 50);
	        },

	        _renderEventIndicators: function() {
	            var that = this,
	                calendar = that.calendar,
	                current,
	                cell;

	            calendar.element.find("." + YearViewStyles.indicator).remove();

	            that.eventsByDate.forEach(function(date) {
	                current = calendar._currentView.toDateString(new Date(date.value));
	                cell = calendar.element[0].querySelector("[data-value='" + current + "']");

	                if (date.items.length) {
	                    $("<span/>").addClass(YearViewStyles.indicator).appendTo(cell);
	                }
	            });
	        },

	        _groupEventsByDate: function(events) {
	            var eventsByDate = [],
	                eventsFormatted;

	            if (!events.length) {
	                return [];
	            }

	            eventsFormatted = events.map(function(event) {
	                event.formattedDate = event.start.toDateString();
	                return event;
	            });

	            eventsByDate = new kendo.data.Query(eventsFormatted)
	                .sort([
	                    { field: "start", dir: "asc" },
	                    { field: "end", dir: "desc" }
	                ])
	                .group({
	                    field: "formattedDate"
	                })
	                .toArray();

	            return eventsByDate;
	        },

	        lastDateInRange: function() {
	            var end = new Date(this.previousDate());

	            end.setMonth((end.getMonth() - 1) + this.options.months);

	           return lastDayOfMonth(end);
	        },

	        nextDate: function() {
	            return kendo.date.nextYear(this._startDate);
	        },

	        previousDate: function() {
	            return kendo.date.previousYear(this._startDate);
	        },

	        startDate: function() {
	            return this._startDate;
	        },

	        endDate: function() {
	            return this._endDate;
	        },

	        moveToEvent: function() {
	            return false;
	        },

	        constrainSelection: function() {
	            return false;
	        },

	        inRange: function() {
	            return true;
	        },

	        select: function(selection) {
	            this.clearSelection();

	            if (selection.start >= this.startDate() && selection.start < this.endDate()) {
	                this.calendar.value(selection.start);
	            } else {
	                this.calendar.value(this.calendar._firstViewValue);
	                selection.start = selection.end = this.calendar.value();
	            }

	            this.current(this.calendar.selectable.value()[0]);
	        },

	        selectionByElement: function(cell) {
	            if (!cell.length) {
	                return;
	            }

	            cell = $(cell);

	            return {
	                index: this.calendar._index,
	                start: kendo.calendar.toDateObject(cell),
	                end: kendo.calendar.toDateObject(cell),
	                isAllDay: false,
	                uid: 0
	            };
	        },

	        current: function(candidate) {
	            if (candidate !== undefined) {
	                this._current = candidate;
	            } else {
	                return this._current;
	            }
	        },

	        move: function(selection, key) {
	            var handled = false,
	                selectable = this.options.selectable;

	            if (!selectable || !selection) {
	                return;
	            }

	            if (key === kendo.keys.DOWN || key === kendo.keys.UP ||
	                key === kendo.keys.LEFT || key === kendo.keys.RIGHT) {
	                    handled = true;
	                    this.calendar.focus();
	            }

	            if (key === kendo.keys.ENTER || key === kendo.keys.SPACEBAR) {
	                handled = true;
	            }

	            if (handled) {
	                selection.start = selection.end = this.calendar.value();
	            }

	            return handled;
	        },

	        render: function(events) {
	            var that = this;

	            that._cachedEvents = events;

	            that.eventsByDate = that._groupEventsByDate(events) || [];

	            that._renderEventIndicators();

	            that.trigger(ACTIVATE);
	        },

	        destroy: function() {
	            var that = this;

	            if (that.tooltip) {
	                that.tooltip.destroy();
	                that.tooltip = null;
	            }

	            if (that.calendar) {
	                that.calendar.destroy();
	                that.calendar = null;
	            }

	            if (that.element) {
	                that.content.remove();
	                that.element.off(NS);
	            }

	            SchedulerView.fn.destroy.call(this);
	        }
	    });

	    extend(true, ui, {
	        YearView: YearView
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });