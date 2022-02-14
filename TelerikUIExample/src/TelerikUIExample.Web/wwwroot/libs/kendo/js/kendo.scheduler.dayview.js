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

	module.exports = __webpack_require__(1420);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1414:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.view");

/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1414) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "scheduler.dayview",
	    name: "Scheduler Day View",
	    category: "web",
	    description: "The Scheduler Day View",
	    depends: [ "scheduler.view" ],
	    hidden: true
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        setTime = kendo.date.setTime,
	        SchedulerView = ui.SchedulerView,
	        outerWidth = kendo._outerWidth,
	        outerHeight = kendo._outerHeight,
	        extend = $.extend,
	        proxy = $.proxy,
	        getDate = kendo.date.getDate,
	        MS_PER_MINUTE = kendo.date.MS_PER_MINUTE,
	        MS_PER_DAY = kendo.date.MS_PER_DAY,
	        CURRENT_TIME_MARKER_CLASS = "k-current-time",
	        CURRENT_TIME_MARKER_ARROW_CLASS = "k-current-time-arrow",
	        INVERSE_COLOR_CLASS = "k-event-inverse",
	        BORDER_SIZE_COEFF = 0.8666,
	        getMilliseconds = kendo.date.getMilliseconds,
	        NS = ".kendoMultiDayView";

	    var DAY_VIEW_EVENT_TEMPLATE = kendo.template('<div title="(#=kendo.format("{0:t} - {1:t}", start, end)#): #=title.replace(/"/g,"&\\#34;")#">' +
	                    '<div class="k-event-template k-event-time">#:kendo.format("{0:t} - {1:t}", start, end)#</div>' +
	                    '<div class="k-event-template">${title}</div>' +
	                '</div>'),
	        DAY_VIEW_ALL_DAY_EVENT_TEMPLATE = kendo.template('<div title="(#=kendo.format("{0:t}", start)#): #=title.replace(/"/g,"&\\#34;")#">' +
	                    '<div class="k-event-template">${title}</div>' +
	                '</div>'),
	        DATA_HEADER_TEMPLATE = kendo.template("#var dateString = isMobile ? kendo.toString(date,'ddd')[0] : kendo.toString(date,'ddd M/dd'); #" +
	                "<span class='k-link k-nav-day'>#=dateString#</span>"),
	        ALLDAY_EVENT_WRAPPER_STRING = '<div role="gridcell" aria-selected="false" ' +
	                'data-#=ns#uid="#=uid#"' +
	                '#if (resources[0]) { #' +
	                    'style="background-color:#=resources[0].color#; border-color: #=resources[0].color#"' +
	                    'class="k-event"' +
	                '#} else {#' +
	                    'class="k-event"' +
	                '#}#' +
	                '>' +
	                '<span class="k-event-actions">' +
	                    '# if(data.tail || data.middle) {#' +
	                        '<span class="k-icon k-i-arrow-60-left"></span>' +
	                    '#}#' +
	                    '# if(data.isException()) {#' +
	                        '<span class="k-icon k-i-non-recurrence"></span>' +
	                    '# } else if(data.isRecurring()) {#' +
	                        '<span class="k-icon k-i-reload"></span>' +
	                    '# } #' +
	                '</span>' +
	                '{0}' +
	                '<span class="k-event-actions">' +
	                    '#if (showDelete) {#' +
	                        '<a href="\\#" class="k-link k-event-delete" title="${data.messages.destroy}" aria-label="${data.messages.destroy}"><span class="k-icon k-i-close"></span></a>' +
	                    '#}#' +
	                    '# if(data.head || data.middle) {#' +
	                        '<span class="k-icon k-i-arrow-60-right"></span>' +
	                    '#}#' +
	                '</span>' +
	                '#if(resizable && !singleDay && !data.tail && !data.middle){#' +
	                '<span class="k-resize-handle k-resize-w"></span>' +
	                '#}#' +
	                '#if(resizable && !singleDay && !data.head && !data.middle){#' +
	                '<span class="k-resize-handle k-resize-e"></span>' +
	                '#}#' +
	                '</div>',
	        EVENT_WRAPPER_STRING = '<div role="gridcell" aria-selected="false" ' +
	                'data-#=ns#uid="#=uid#" ' +
	                '#if (resources[0]) { #' +
	                    'style="background-color:#=resources[0].color #; border-color: #=resources[0].color#"' +
	                    'class="k-event"' +
	                '#} else {#' +
	                    'class="k-event"' +
	                '#}#' +
	                '>' +
	                 '<span class="k-event-actions">' +
	                    '# if(data.isException()) {#' +
	                        '<span class="k-icon k-i-non-recurrence"></span>' +
	                    '# } else if(data.isRecurring()) {#' +
	                        '<span class="k-icon k-i-reload"></span>' +
	                    '# } #' +
	                '</span>' +
	                '{0}' +
	                '<span class="k-event-actions">' +
	                    '#if (showDelete) {#' +
	                        '<a href="\\#" class="k-link k-event-delete" title="${data.messages.destroy}" aria-label="${data.messages.destroy}"><span class="k-icon k-i-close"></span></a>' +
	                    '#}#' +
	                '</span>' +
	                '<span class="k-event-top-actions">' +
	                    '# if(data.tail || data.middle) {#' +
	                    '<span class="k-icon k-i-arrow-60-up"></span>' +
	                    '# } #' +
	                '</span>' +
	                '<span class="k-event-bottom-actions">' +
	                    '# if(data.head || data.middle) {#' +
	                        '<span class="k-icon k-i-arrow-60-down"></span>' +
	                    '# } #' +
	                '</span>' +
	                '# if(resizable && !data.tail && !data.middle) {#' +
	                '<span class="k-resize-handle k-resize-n"></span>' +
	                '# } #' +
	                '# if(resizable && !data.head && !data.middle) {#' +
	                    '<span class="k-resize-handle k-resize-s"></span>' +
	                '# } #' +
	                '</div>';

	    function toInvariantTime(date) {
	        var staticDate = new Date(1980, 1, 1, 0, 0, 0);
	        setTime(staticDate, getMilliseconds(date));
	        return staticDate;
	    }

	    function isInDateRange(value, min, max) {
	        return value >= min && value <= max;
	    }

	    function isInTimeRange(value, min, max, overlaps) {
	        overlaps = overlaps ? value <= max : value < max;
	        return value > min && overlaps;
	    }

	    function addContinuousEvent(group, range, element, isAllDay) {
	        var events = group._continuousEvents;
	        var lastEvent = events[events.length - 1];
	        var startDate = getDate(range.start.startDate()).getTime();

	        //this handles all day event which is over multiple slots but starts
	        //after one of the time events
	        if (isAllDay && lastEvent &&
	            getDate(lastEvent.start.startDate()).getTime() == startDate) {

	                var idx = events.length - 1;
	                for ( ; idx > -1; idx --) {
	                    if (events[idx].isAllDay ||
	                        getDate(events[idx].start.startDate()).getTime() < startDate) {
	                            break;
	                        }
	                }

	                events.splice(idx + 1, 0, {
	                    element: element,
	                    isAllDay: true,
	                    uid: element.attr(kendo.attr("uid")),
	                    start: range.start,
	                    end: range.end
	                });
	            } else {
	                events.push({
	                    element: element,
	                    isAllDay: isAllDay,
	                    uid: element.attr(kendo.attr("uid")),
	                    start: range.start,
	                    end: range.end
	                });
	            }
	    }

	    function getWorkDays(options) {
	        if(options.workDays && options.workDays.length) {
	            return options.workDays;
	        }

	        var workDays = [];
	        var dayIndex = options.workWeekStart % 7;
	        var workWeekEnd = Math.abs(options.workWeekEnd % 7);

	        workDays.push(dayIndex);

	        while(workWeekEnd != dayIndex) {
	            if(dayIndex > 6 ) {
	                dayIndex -= 7;
	            } else {
	                dayIndex++;
	            }
	            workDays.push(dayIndex);
	        }
	        return workDays;
	    }

	    var MultiDayView = SchedulerView.extend({
	        init: function(element, options) {
	            var that = this;

	            SchedulerView.fn.init.call(that, element, options);

	            that.title = that.options.title || that.options.name;

	            that._workDays = getWorkDays(that.options);

	            that._templates();

	            that._editable();

	            that.calculateDateRange();

	            that._groups();

	            that._currentTime(true);
	        },

	        _currentTimeMarkerUpdater: function() {
	            this._updateCurrentTimeMarker(new Date());
	        },

	        _updateCurrentTimeMarker: function(currentTime) {
	            var options = this.options,
	                currentTimeMarkers, currentContentMarkers, timesTableMarkerWidth, position,
	                elementHtml = "<div class='" + CURRENT_TIME_MARKER_CLASS + "'></div>";

	            if(options.currentTimeMarker.useLocalTimezone === false) {
	                var timezone = options.dataSource.options.schema.timezone;

	                if(options.dataSource && timezone) {
	                   var timezoneOffset = kendo.timezone.offset(currentTime, timezone);
	                   currentTime = kendo.timezone.convert(currentTime, currentTime.getTimezoneOffset(), timezoneOffset);
	                }
	            }

	            currentTimeMarkers = this.times.find("." + CURRENT_TIME_MARKER_CLASS);
	            currentContentMarkers = this.content.find("." + CURRENT_TIME_MARKER_CLASS);

	            var groupsCount = !options.group || options.group.orientation == "horizontal" ? 1 : this.groups.length;
	            var firstTimesCell = this.times.find("tr").first().find("th").first();
	            var lastTimesCell = this.times.find("tr").first().find("th").last();

	            if(firstTimesCell.length > 0 && lastTimesCell.length > 0) {
	                if (this._isRtl) {
	                    position = firstTimesCell.position().left + outerHeight(firstTimesCell) - outerHeight(lastTimesCell);
	                } else {
	                    position = lastTimesCell.position().left;
	                }
	            }

	            for(var groupIndex = 0; groupIndex < groupsCount; groupIndex++) {
	                var currentGroup = this.groups[groupIndex];

	                if (!currentGroup) {
	                    return;
	                }

	                var utcCurrentTime = kendo.date.toUtcTime(currentTime);
	                var ranges = currentGroup.timeSlotRanges(utcCurrentTime, utcCurrentTime + 1);

	                if(ranges.length === 0) {
	                    return;
	                }

	                var collection = ranges[0].collection;
	                var slotElement = collection.slotByStartDate(currentTime);

	                if(slotElement) {
	                    var timesTableMarker = currentTimeMarkers[groupIndex] ? currentTimeMarkers.eq(groupIndex) : $(elementHtml).prependTo(this.times);
	                    var markerTopPosition = Math.round(ranges[0].innerRect(currentTime, new Date(currentTime.getTime() + 1), false).top);

	                    var timesTableMarkerCss = {};

	                    if (this._isRtl) {
	                        timesTableMarkerCss.right = position;
	                        timesTableMarker.addClass(CURRENT_TIME_MARKER_ARROW_CLASS + "-left");
	                    } else {
	                        timesTableMarkerCss.left = position;
	                        timesTableMarker.addClass(CURRENT_TIME_MARKER_ARROW_CLASS + "-right");
	                    }

	                    if(!timesTableMarkerWidth) {
	                        timesTableMarkerWidth = (outerWidth(timesTableMarker) * BORDER_SIZE_COEFF / 2);
	                    }

	                    timesTableMarkerCss.top = markerTopPosition - timesTableMarkerWidth;

	                    timesTableMarker.css(timesTableMarkerCss);

	                    var contentMarker = currentContentMarkers[groupIndex] ? currentContentMarkers.eq(groupIndex) : $(elementHtml).prependTo(this.content);

	                    contentMarker.css({
	                        top: markerTopPosition,
	                        height: "1px",
	                        right: 0,
	                        left: 0
	                    });
	                }
	            }
	        },

	        _currentTime: function(setUpdateTimer) {
	            var that = this;
	            var markerOptions = that.options.currentTimeMarker;

	            if (markerOptions !== false && markerOptions.updateInterval !== undefined) {
	                that._currentTimeMarkerUpdater();

	                if (setUpdateTimer) {
	                    that._currentTimeUpdateTimer = setInterval(proxy(this._currentTimeMarkerUpdater, that), markerOptions.updateInterval);
	                }
	            }
	        },

	        _updateResizeHint: function(event, groupIndex, startTime, endTime) {
	            var multiday;

	            if(this.options.enforceAllDaySlot) {
	                multiday = event.isMultiDay();
	            } else {
	                multiday = event.isAllDay;
	            }

	            var group = this.groups[groupIndex];

	            var ranges = group.ranges(startTime, endTime, multiday, event.isAllDay);
	            var width, height, top, hint;

	            this._removeResizeHint();

	            for (var rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {
	                var range = ranges[rangeIndex];
	                var start = range.startSlot();

	                if (this._isGroupedByDate() && multiday) {
	                    for (var slotIdx = start.index; slotIdx <= range.end.index; slotIdx++) {
	                        var slot = range.collection._slots[slotIdx];
	                        width = slot.offsetWidth;
	                        height = slot.clientHeight;
	                        top = slot.offsetTop;

	                        hint = SchedulerView.fn._createResizeHint.call(this,
	                            slot.offsetLeft,
	                            top,
	                            width,
	                            height
	                        );

	                        this._resizeHint = this._resizeHint.add(hint);
	                    }
	                } else {
	                    width = start.offsetWidth;
	                    height = start.clientHeight;
	                    top = start.offsetTop;

	                    if (multiday) {
	                        width = range.innerWidth();
	                    } else {
	                        var rect = range.outerRect(startTime, endTime, this.options.snap);
	                        top = rect.top;
	                        height = rect.bottom - rect.top;
	                    }

	                    hint = SchedulerView.fn._createResizeHint.call(this,
	                        start.offsetLeft,
	                        top,
	                        width,
	                        height
	                    );

	                   this._resizeHint = this._resizeHint.add(hint);
	                }
	            }

	            var format = "t";
	            var container = this.content;

	            if (multiday) {
	                format = "M/dd";
	                container = this.element.find(".k-scheduler-header-wrap:has(.k-scheduler-header-all-day) > div");
	                if (!container.length) {
	                    container = this.content;
	                }
	            }

	            this._resizeHint.appendTo(container);

	            this._resizeHint.find(".k-label-top,.k-label-bottom").text("");

	            this._resizeHint.first().addClass("k-first").find(".k-label-top").text(kendo.toString(kendo.timezone.toLocalDate(startTime), format));

	            this._resizeHint.last().addClass("k-last").find(".k-label-bottom").text(kendo.toString(kendo.timezone.toLocalDate(endTime), format));
	        },

	        _updateMoveHint: function (event, groupIndex, distance) {
	            var multiday;

	            if(this.options.enforceAllDaySlot) {
	                multiday = event.isMultiDay();
	            } else {
	                multiday = event.isAllDay;
	            }

	            var group = this.groups[groupIndex];

	            var start = kendo.date.toUtcTime(event.start) + distance;

	            var end = start + event.duration();

	            var ranges = group.ranges(start, end, multiday, event.isAllDay);

	            start = kendo.timezone.toLocalDate(start);

	            end = kendo.timezone.toLocalDate(end);

	            this._removeMoveHint(event.uid);

	            if (!multiday &&
	                getMilliseconds(end) < getMilliseconds(this.startTime()) &&
	                (end < this._end().getTime()) &&
	                getMilliseconds(end) !== 0 &&
	                ranges.length > 1) {
	                    ranges.pop();
	            }

	            var eventHint = $();

	            for (var rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {
	                var range = ranges[rangeIndex];
	                var startSlot = range.start;
	                var hint;
	                var css = {
	                    left: startSlot.offsetLeft + 2,
	                    top: startSlot.offsetTop
	                };

	                if (this._isGroupedByDate() && multiday) {
	                    for (var slotIdx = startSlot.index; slotIdx <= range.end.index; slotIdx++) {
	                        var slot = range.collection._slots[slotIdx];

	                        css.left = this._isRtl ? slot.clientWidth * 0.1 + slot.offsetLeft + 2 : slot.offsetLeft + 2;
	                        css.height = slot.offsetHeight;
	                        css.width = slot.clientWidth * 0.9 - 2;

	                        hint = this._createEventElement(event.clone({ start: start, end: end }), !multiday);

	                        if(event.inverseColor) {
	                            hint.addClass(INVERSE_COLOR_CLASS);
	                        }

	                        this._appendMoveHint(hint, css);
	                        eventHint = eventHint.add(hint);
	                    }
	                } else {
	                    if (this._isRtl) {
	                       css.left = startSlot.clientWidth * 0.1 + startSlot.offsetLeft + 2;
	                    }

	                    if (multiday) {
	                        css.width = range.innerWidth() - 2;
	                    } else {
	                        var rect = range.outerRect(start, end, this.options.snap);
	                        css.top = rect.top;
	                        css.height = rect.bottom - rect.top;
	                        css.width = startSlot.clientWidth * 0.9 - 2;
	                    }

	                    hint = this._createEventElement(event.clone({ start: start, end: end }), !multiday);

	                    if(event.inverseColor) {
	                        hint.addClass(INVERSE_COLOR_CLASS);
	                    }

	                    this._appendMoveHint(hint, css);
	                    eventHint = eventHint.add(hint);
	                }
	            }

	            var content = this.content;

	            if (multiday) {
	                content = this.element.find(".k-scheduler-header-wrap:has(.k-scheduler-header-all-day) > div");
	                if (!content.length) {
	                    content = this.content;
	                }
	            }

	            eventHint.appendTo(content);
	        },

	        _appendMoveHint: function(hint, css) {
	            hint.addClass("k-event-drag-hint");

	            hint.css(css);

	            this._moveHint = this._moveHint.add(hint);
	       },

	       _slotByPosition: function(x, y) {
	           var slot, offset;

	           if (this._isVerticallyGrouped()) {
	               offset = this.content.offset();
	               y += this.content[0].scrollTop;
	               x += this.content[0].scrollLeft;
	           } else {
	               offset = this.element.find(".k-scheduler-header-wrap:has(.k-scheduler-header-all-day)").find(">div").offset();
	           }

	           if (offset) {
	               x -= offset.left;
	               y -= offset.top;
	           }

	           x = Math.ceil(x);
	           y = Math.ceil(y);

	           var group;
	           var groupIndex;

	           for (groupIndex = 0; groupIndex < this.groups.length; groupIndex++) {
	                group = this.groups[groupIndex];

	                slot = group.daySlotByPosition(x, y, this._isGroupedByDate());

	                if (slot) {
	                    return slot;
	                }
	           }

	           if (offset) {
	               x += offset.left;
	               y += offset.top;
	           }

	           offset = this.content.offset();

	           x -= offset.left;
	           y -= offset.top;

	           if (!this._isVerticallyGrouped()) {
	               y += this.content[0].scrollTop;
	               x += this.content[0].scrollLeft;
	           }

	           x = Math.ceil(x);
	           y = Math.ceil(y);

	           for (groupIndex = 0; groupIndex < this.groups.length; groupIndex++) {
	                group = this.groups[groupIndex];

	                slot = group.timeSlotByPosition(x, y);

	                if (slot) {
	                    return slot;
	                }
	           }

	           return null;
	       },

	       _groupCount: function() {
	            var resources = this.groupedResources;
	            var byDate = this._isGroupedByDate();

	            if (resources.length) {
	                if (this._groupOrientation() === "vertical") {
	                    if (byDate) {
	                        return this._columnCountForLevel(resources.length - 1);
	                    } else {
	                        return this._rowCountForLevel(resources.length - 1);
	                    }
	                } else {
	                    if (byDate) {
	                        return this._columnCountForLevel(resources.length) / this._columnCountForLevel(0);
	                    } else {
	                          return this._columnCountForLevel(resources.length) / this._columnOffsetForResource(resources.length);
	                    }
	                }
	            }
	            return 1;
	        },

	        _columnCountInResourceView: function() {
	            var resources = this.groupedResources;
	            var byDate = this._isGroupedByDate();

	            if (!resources.length || this._isVerticallyGrouped()) {
	                if (byDate) {
	                     return this._rowCountForLevel(0);
	                } else {
	                     return this._columnCountForLevel(0);
	                }
	            }

	            if (byDate) {
	                return this._columnCountForLevel(0);
	            } else {
	                return this._columnOffsetForResource(resources.length);
	            }
	        },

	        _timeSlotGroups: function(groupCount, columnCount) {
	            var interval = this._timeSlotInterval();
	            var verticalViews = groupCount;
	            var byDate = this._isGroupedByDate();
	            var tableRows = this.content.find("tr:not(.k-scheduler-header-all-day)");
	            var group, time, rowIndex, cellIndex;

	            tableRows.attr("role", "row");

	            var rowCount = tableRows.length;

	            if (this._isVerticallyGrouped()) {
	                if (byDate) {
	                    verticalViews = columnCount;
	                }
	                rowCount = Math.floor(rowCount / verticalViews);
	            }

	            for (var groupIndex = 0; groupIndex < verticalViews; groupIndex++) {
	                var rowMultiplier = 0;
	                var cellMultiplier = 0;

	                if (this._isVerticallyGrouped()) {
	                    rowMultiplier = groupIndex;
	                } else{
	                    cellMultiplier = groupIndex;
	                }

	                rowIndex = rowMultiplier * rowCount;

	              while (rowIndex < (rowMultiplier + 1) * rowCount) {
	                    var cells = tableRows[rowIndex].children;

	                    if (rowIndex % rowCount === 0) {
	                        time = getMilliseconds(new Date(+this.startTime()));
	                    }

	                    var timeIndex = 0;
	                    if(byDate){
	                        if (this._isVerticallyGrouped()) {
	                            for (cellIndex = 0; cellIndex < groupCount; cellIndex++) {
	                                group = this.groups[cellIndex];
	                                this._addTimeSlotGroup(group, cells, cellIndex, time, interval, groupIndex);
	                            }
	                        } else {
	                            group = this.groups[groupIndex];
	                            for (cellIndex = cellMultiplier; cellIndex < groupCount * columnCount; cellIndex=cellIndex + groupCount) {
	                                this._addTimeSlotGroup(group, cells, cellIndex, time, interval, timeIndex);
	                                timeIndex++;
	                            }
	                        }
	                    } else {
	                        group = this.groups[groupIndex];
	                        for (cellIndex = cellMultiplier * columnCount; cellIndex < (cellMultiplier + 1) * columnCount; cellIndex++) {

	                            this._addTimeSlotGroup(group, cells, cellIndex, time, interval,  timeIndex);
	                             timeIndex++;
	                        }
	                    }

	                    time += interval;
	                    rowIndex ++;
	                }
	            }
	        },

	        _addTimeSlotGroup: function(group, cells, cellIndex, time, interval, timeIndex) {
	              var cell = cells[cellIndex];
	              var collection = group.getTimeSlotCollection(timeIndex);
	              var currentDate = this._dates[timeIndex];
	              if(!currentDate || !cell){
	                  return;
	              }
	              var currentTime = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
	              var start = currentTime + time;
	              var end = start + interval;

	              cell.setAttribute("role", "gridcell");
	              cell.setAttribute("aria-selected", false);

	              collection.addTimeSlot(cell, start, end);
	        },

	         _addDaySlotGroup: function(collection, cells, cellIndex, columnCount, cellCount) {
	                var cell = cells[cellIndex];
	                var start = this._dates[cellCount];
	                if(!start){
	                    return;
	                }
	                var currentTime = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());

	                cell.setAttribute("role", "gridcell");
	                cell.setAttribute("aria-selected", false);
	                collection.addDaySlot(cell, currentTime, currentTime + kendo.date.MS_PER_DAY);
	        },

	        _daySlotGroups: function(groupCount, columnCount) {
	            var tableRows, cellIndex;
	            var verticalViews = groupCount;
	            var byDate = this._isGroupedByDate();

	            if (this._isVerticallyGrouped()) {
	                if (byDate) {
	                    verticalViews = columnCount;
	                }
	                tableRows = this.element.find(".k-scheduler-header-all-day");
	            } else {
	                tableRows = this.element.find(".k-scheduler-header-all-day tr");
	            }

	            tableRows.attr("role", "row");

	            for (var groupIndex = 0; groupIndex < verticalViews; groupIndex++) {
	                var rowMultiplier = 0;
	                var group, collection;

	                if (this._isVerticallyGrouped()) {
	                    rowMultiplier = groupIndex;
	                }

	                var cells = tableRows[rowMultiplier].children;
	                var cellMultiplier = 0;

	                if (!this._isVerticallyGrouped()) {
	                    cellMultiplier = groupIndex;
	                }

	                var cellCount = 0;
	                if(byDate){
	                    if (this._isVerticallyGrouped()) {
	                        for (cellIndex = 0; cellIndex < groupCount; cellIndex++) {
	                            group = this.groups[cellIndex];
	                            collection = group.getDaySlotCollection(0);
	                            this._addDaySlotGroup(collection, cells, cellIndex, columnCount, groupIndex);
	                        }
	                    } else {
	                        group = this.groups[groupIndex];
	                        collection = group.getDaySlotCollection(0);
	                        for (cellIndex = cellMultiplier; cellIndex < groupCount * columnCount; cellIndex = cellIndex + groupCount) {
	                            this._addDaySlotGroup(collection, cells, cellIndex, columnCount, cellCount);
	                            cellCount++;
	                        }
	                    }
	                } else {
	                    group = this.groups[groupIndex];
	                    collection = group.getDaySlotCollection(0);
	                    for (cellIndex = cellMultiplier * columnCount; cellIndex < (cellMultiplier + 1) * columnCount; cellIndex++) {

	                        this._addDaySlotGroup(collection, cells, cellIndex, columnCount, cellCount);
	                        cellCount++;
	                    }
	                }
	            }
	        },

	        _groups: function() {
	            var groupCount = this._groupCount();
	            var columnCount = this._columnCountInResourceView();

	            this.groups = [];

	            for (var idx = 0; idx < groupCount; idx++) {
	                var view = this._addResourceView(idx);

	                for (var columnIndex = 0; columnIndex < columnCount; columnIndex++) {
	                    if(this._dates[columnIndex]){
	                        view.addTimeSlotCollection(this._dates[columnIndex], kendo.date.addDays(this._dates[columnIndex], 1));
	                    }
	                }

	                if (this.options.allDaySlot) {
	                    view.addDaySlotCollection(this._dates[0], kendo.date.addDays(this._dates[this._dates.length - 1], 1));
	                }
	            }

	            this._timeSlotGroups(groupCount, columnCount);

	            if (this.options.allDaySlot) {
	                this._daySlotGroups(groupCount, columnCount);
	            }
	        },

	        options: {
	            name: "MultiDayView",
	            selectedDateFormat: "{0:D}",
	            selectedShortDateFormat: "{0:d}",
	            selectedMobileDateFormat: "{0:MMM} {0:dd} - {1:dd}",
	            allDaySlot: true,
	            showWorkHours: false,
	            title: "",
	            startTime: kendo.date.today(),
	            endTime: kendo.date.today(),
	            minorTickCount: 2,
	            majorTick: 60,
	            majorTimeHeaderTemplate: "<span>#=kendo.toString(date, 't')#</span>",
	            minorTimeHeaderTemplate: "&\\#8203;",
	            groupHeaderTemplate: "#=text#",
	            slotTemplate: "&nbsp;",
	            allDaySlotTemplate: "&nbsp;",
	            eventTemplate: DAY_VIEW_EVENT_TEMPLATE,
	            allDayEventTemplate: DAY_VIEW_ALL_DAY_EVENT_TEMPLATE,
	            dateHeaderTemplate: DATA_HEADER_TEMPLATE,
	            editable: true,
	            workDayStart: new Date(1980, 1, 1, 8, 0, 0),
	            workDayEnd: new Date(1980, 1, 1, 17, 0, 0),
	            workWeekStart: 1,
	            workWeekEnd: 5,
	            footer: {
	                command: "workDay"
	            },
	            messages: {
	                allDay: "all day",
	                showFullDay: "Show full day",
	                showWorkDay: "Show business hours"
	            },
	            currentTimeMarker: {
	                 updateInterval: 10000,
	                 useLocalTimezone: true
	            },
	            // a hidden option that provides us a fallback to the previous behaviour
	            // e.g. all events of 24 hours or more will be rendered in the allDaySlot
	            enforceAllDaySlot: false
	        },

	        events: ["remove", "add", "edit"],

	        _templates: function() {
	            var options = this.options,
	                settings = extend({}, kendo.Template, options.templateSettings);

	            this.eventTemplate = this._eventTmpl(options.eventTemplate, EVENT_WRAPPER_STRING);
	            this.allDayEventTemplate = this._eventTmpl(options.allDayEventTemplate, ALLDAY_EVENT_WRAPPER_STRING);

	            this.majorTimeHeaderTemplate = kendo.template(options.majorTimeHeaderTemplate, settings);
	            this.minorTimeHeaderTemplate = kendo.template(options.minorTimeHeaderTemplate, settings);
	            this.dateHeaderTemplate = kendo.template(options.dateHeaderTemplate, settings);
	            this.slotTemplate = kendo.template(options.slotTemplate, settings);
	            this.allDaySlotTemplate = kendo.template(options.allDaySlotTemplate, settings);
	            this.groupHeaderTemplate = kendo.template(options.groupHeaderTemplate, settings);
	        },

	        _editable: function() {
	            if (this.options.editable) {
	                if (this._isMobile()) {
	                    this._touchEditable();
	                } else {
	                    this._mouseEditable();
	                }
	            }
	        },

	        _mouseEditable: function() {
	            var that = this;
	            that.element.on("click" + NS, ".k-event a:has(.k-i-close)", function(e) {
	                that.trigger("remove", { uid: $(this).closest(".k-event").attr(kendo.attr("uid")) });
	                e.preventDefault();
	            });

	            if (that.options.editable.create !== false) {
	                that.element.on("dblclick" + NS, ".k-scheduler-content > table td", function(e) {
	                    if (!$(this).parent().hasClass("k-scheduler-header-all-day")) {
	                        var slot = that._slotByPosition(e.pageX, e.pageY);

	                        if (slot) {
	                            var resourceInfo = that._resourceBySlot(slot);
	                            that.trigger("add", { eventInfo: extend({ start: slot.startDate(), end: slot.endDate() }, resourceInfo) });
	                        }

	                        e.preventDefault();
	                    }
	                }).on("dblclick" + NS, ".k-scheduler-header-all-day td", function(e) {
	                    var slot = that._slotByPosition(e.pageX, e.pageY);
	                    if (slot) {
	                        var resourceInfo = that._resourceBySlot(slot);
	                        that.trigger("add", { eventInfo: extend({}, { isAllDay: true, start: kendo.date.getDate(slot.startDate()), end: kendo.date.getDate(slot.startDate()) }, resourceInfo) });
	                    }
	                    e.preventDefault();
	                });
	            }

	            if (that.options.editable.update !== false) {
	                that.element.on("dblclick" + NS, ".k-event", function(e) {
	                    that.trigger("edit", { uid: $(this).closest(".k-event").attr(kendo.attr("uid")) });
	                    e.preventDefault();
	                });
	            }
	        },

	        _touchEditable: function() {
	            var that = this;
	            var threshold = 0;

	            if (kendo.support.mobileOS.android) {
	                threshold = 5;
	            }

	            if (that.options.editable.create !== false) {
	                that._addUserEvents = new kendo.UserEvents(that.element, {
	                    threshold: threshold,
	                    filter:  ".k-scheduler-content td",
	                    useClickAsTap: !kendo.support.browser.edge,
	                    tap: function(e) {
	                        if (that._scrolling) {
	                            return;
	                        }
	                        if (!$(e.target).parent().hasClass("k-scheduler-header-all-day")) {
	                            var x = e.x.location !== undefined ? e.x.location : e.x;
	                            var y = e.y.location !== undefined ? e.y.location : e.y;
	                            var slot = that._slotByPosition(x, y);

	                            if (slot) {
	                                var resourceInfo = that._resourceBySlot(slot);
	                                that.trigger("add", { eventInfo: extend({ start: slot.startDate(), end: slot.endDate() }, resourceInfo) });
	                            }

	                            e.preventDefault();
	                        }
	                    }
	                });

	                that._allDayUserEvents = new kendo.UserEvents(that.element, {
	                    threshold: threshold,
	                    useClickAsTap: !kendo.support.browser.edge,
	                    filter: ".k-scheduler-header-all-day td",
	                    tap: function(e) {
	                        if (that._scrolling) {
	                            return;
	                        }
	                        var x = e.x.location !== undefined ? e.x.location : e.x;
	                        var y = e.y.location !== undefined ? e.y.location : e.y;
	                        var slot = that._slotByPosition(x, y);

	                        if (slot) {
	                            var resourceInfo = that._resourceBySlot(slot);
	                            that.trigger("add", { eventInfo: extend({}, { isAllDay: true, start: kendo.date.getDate(slot.startDate()), end: kendo.date.getDate(slot.startDate()) }, resourceInfo) });
	                        }

	                        e.preventDefault();
	                    }
	                });
	            }

	            if (that.options.editable.update !== false) {
	                that._editUserEvents = new kendo.UserEvents(that.element, {
	                    threshold: threshold,
	                    useClickAsTap: !kendo.support.browser.edge,
	                    filter: ".k-event",
	                    tap: function(e) {
	                        if (that._scrolling) {
	                            return;
	                        }
	                        var eventElement = $(e.target).closest(".k-event");
	                        var touchElement = $(e.touch.initialTouch);

	                        if (touchElement.hasClass("k-i-close")) {
	                            that.trigger("remove", { uid: eventElement.attr(kendo.attr("uid")) });
	                        } else if (!eventElement.hasClass("k-event-active")) {
	                            that.trigger("edit", { uid: eventElement.attr(kendo.attr("uid")) });
	                        }

	                        e.preventDefault();
	                    }
	                });
	            }
	        },

	        _layout: function(dates) {
	            var columns = [];
	            var rows = [];
	            var options = this.options;
	            var that = this;
	            var byDate = that._isGroupedByDate();

	            for (var idx = 0; idx < dates.length; idx++) {
	                var column = {};

	                column.text = that.dateHeaderTemplate({ date: dates[idx], isMobile: that._isMobile() });

	                if (kendo.date.isToday(dates[idx])) {
	                    column.className = "k-today";
	                }

	                columns.push(column);
	            }

	            var resources = this.groupedResources;

	            if (options.allDaySlot) {
	                rows.push({
	                    text: options.messages.allDay, allDay: true,
	                    cellContent: function(idx) {
	                        var groupIndex = idx;

	                        idx = resources.length && that._groupOrientation() !== "vertical" ? idx % dates.length : idx;

	                        return that.allDaySlotTemplate({ date: dates[idx], resources: function() {
	                                return that._resourceBySlot({ groupIndex: groupIndex });
	                            }
	                        });
	                    }
	                });
	            }

	            this._forTimeRange(this.startTime(), this.endTime(), function(date, majorTick, middleRow, lastSlotRow) {
	                var template = majorTick ? that.majorTimeHeaderTemplate : that.minorTimeHeaderTemplate;

	                var row = {
	                    text: template({ date: date }),
	                    className: lastSlotRow ? "k-slot-cell" : ""
	                };

	                rows.push(row);
	            });


	            if (resources.length) {
	                if (this._groupOrientation() === "vertical") {
	                    if (byDate) {
	                        rows = this._createDateLayout(columns, rows);
	                        columns = this._createColumnsLayout(resources, null, this.groupHeaderTemplate);
	                    } else {
	                        rows = this._createRowsLayout(resources, rows, this.groupHeaderTemplate);
	                    }
	                } else {
	                      if (byDate) {
	                         columns = this._createColumnsLayout(resources, columns, this.groupHeaderTemplate, columns);
	                      }else {
	                         columns = this._createColumnsLayout(resources, columns, this.groupHeaderTemplate);
	                      }
	                }
	            }

	            return {
	                columns: columns,
	                rows: rows
	            };
	        },

	        _footer: function() {
	            var options = this.options;

	            if (options.footer !== false) {
	                var html = '<div class="k-scheduler-footer k-toolbar">';

	                var command = options.footer.command;

	                if (this._isMobile()) {
	                    html += '<span class="k-scheduler-today"><a href="#" class="k-link">';
	                    html += options.messages.today + '</a></span>';
	                }
	                if (command && command === "workDay") {
	                    if (this._isMobile()) {
	                        html += '<span class="k-scheduler-fullday"><a href="#" class="k-link">';
	                        html += (options.showWorkHours ? options.messages.showFullDay : options.messages.showWorkDay) + '</a></span>';
	                    } else {
	                        html += '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-scheduler-fullday">';
	                            html += '<span class="k-button-icon k-icon k-i-clock"></span>';
	                            html += '<span class="k-button-text">';
	                                html += (options.showWorkHours ? options.messages.showFullDay : options.messages.showWorkDay);
	                            html += '</span>';
	                        html += '</button>';
	                    }
	                }

	                html += "</div>";

	                this.footer = $(html).appendTo(this.element);

	                var that = this;

	                this.footer.on("click" + NS, ".k-scheduler-fullday", function(e) {
	                    e.preventDefault();
	                    that.trigger("navigate", { view: that.name || options.name, date: options.date, isWorkDay: !options.showWorkHours });
	                });

	                this.footer.on("click" + NS, ".k-scheduler-today", function(e) {
	                    e.preventDefault();
	                    var timezone = that.options.timezone;
	                    var action = "today";
	                    var currentDate = new Date();
	                    var date;

	                    if(timezone){
	                        var timezoneOffset = kendo.timezone.offset(currentDate, timezone);
	                        date = kendo.timezone.convert(currentDate, currentDate.getTimezoneOffset(), timezoneOffset);
	                    }else{
	                        date = currentDate;
	                    }

	                    that.trigger("navigate", { view: that.name || options.name, action: action, date: date });
	                });
	            }
	        },

	        _forTimeRange: function(min, max, action, after) {
	            min = toInvariantTime(min); //convert the date to 1/2/1980 and sets the time
	            max = toInvariantTime(max);

	            var that = this,
	                msMin = getMilliseconds(min),
	                msMax = getMilliseconds(max),
	                minorTickCount = that.options.minorTickCount,
	                msMajorInterval = that.options.majorTick * MS_PER_MINUTE,
	                msInterval = msMajorInterval / minorTickCount || 1,
	                start = new Date(+min),
	                startDay = start.getDate(),
	                msStart,
	                idx = 0, length,
	                html = "";

	            length = MS_PER_DAY / msInterval;

	            if (msMin != msMax) {
	                if (msMin > msMax) {
	                    msMax += MS_PER_DAY;
	                }

	                length = ((msMax - msMin) / msInterval);
	            }

	            length = Math.round(length);

	            for (; idx < length; idx++) {
	                var majorTickDivider = idx % (msMajorInterval/msInterval),
	                    isMajorTickRow = majorTickDivider === 0,
	                    isMiddleRow = majorTickDivider < minorTickCount - 1,
	                    isLastSlotRow = majorTickDivider === minorTickCount - 1;

	                html += action(start, isMajorTickRow, isMiddleRow, isLastSlotRow);

	                setTime(start, msInterval, false);
	            }

	            if (msMax) {
	                msStart = getMilliseconds(start);
	                if (startDay < start.getDate()) {
	                    msStart += MS_PER_DAY;
	                }

	                if (msStart > msMax) {
	                    start = new Date(+max);
	                }
	            }

	            if (after) {
	                html += after(start);
	            }

	            return html;
	        },

	        _content: function(dates) {
	            var that = this;
	            var html = '';

	            html += '<tbody>';

	            html += that._renderRows(dates, that.rowLevels, that.columnLevels);

	            html += '</tbody>';

	            this.content.find("table").append(html);
	        },

	        _virtualContent: function(rowLevels, columnLevels){
	            var that = this;
	            var html = '';
	            var dates = that._dates;

	            html += that._renderRows(dates, rowLevels, columnLevels);

	            that.content.find("table tbody").append(html);
	        },

	        _renderRows: function (dates, rowLevels, columnLevels) {
	            var that = this;
	            var isVerticalGroupped = that._groupOrientation() === "vertical";
	            var byDate = that._isGroupedByDate();
	            var dateID = 0;
	            var columnCount = dates.length;
	            var options = that.options;
	            var start = that.startTime();
	            var end = this.endTime();
	            var groupsCount = 1;
	            var rowCount = 1;
	            var resources = this.groupedResources;
	            var html = '';

	            if (resources.length) {
	                var levels = that._recalculateLevels(rowLevels, columnLevels);

	                rowCount = levels.rowCount;
	                groupsCount = levels.groupsCount;
	            }

	            var appendRow = function(date, majorTick, middleRow) {
	                var content = "";
	                var groupIdx = 0;
	                var idx, length;

	                content = '<tr' + (middleRow ? ' class="k-middle-row"' : "") + '>';

	                if (byDate) {
	                    for (idx = 0, length = columnCount; idx < length; idx++) {
	                        for (groupIdx = 0; groupIdx < groupsCount; groupIdx++) {
	                            var dateIndex = idx;
	                            if (isVerticalGroupped) {
	                                dateIndex = dateID;
	                            }
	                            content = that._addCellsToContent(content, dates, date, dateIndex, groupIdx, rowIdx);

	                        }
	                        if (isVerticalGroupped) {

	                            break;
	                        }
	                    }
	                } else {
	                     for (; groupIdx < groupsCount; groupIdx++) {
	                        for (idx = 0, length = columnCount; idx < length; idx++) {
	                            content = that._addCellsToContent(content, dates, date, idx, groupIdx, rowIdx);
	                        }
	                     }
	                }

	                content += "</tr>";

	                return content;
	            };

	            for (var rowIdx = 0; rowIdx < rowCount; rowIdx++) {
	                html += options.allDaySlot && isVerticalGroupped ? this._allDayVerticalGroupRow(dates, rowIdx, groupsCount, dateID) : "";

	                html += this._forTimeRange(start, end, appendRow);
	                if (isVerticalGroupped) {
	                        dateID++;
	                }
	            }

	            return html;
	        },

	        _recalculateLevels: function (rowLevels, columnLevels) {
	            var that = this;
	            var byDate = that._isGroupedByDate();
	            var isVerticalGroupped = that._groupOrientation() === "vertical";
	            var groupsCount = 1;
	            var rowCount = 1;

	            if (isVerticalGroupped) {
	                rowCount = that._rowCountForLevel(rowLevels.length - 2, rowLevels);

	                if (byDate) {
	                     groupsCount = that._columnCountForLevel(columnLevels.length - 1);
	                }
	            } else {
	                if (byDate) {
	                     groupsCount = that._columnCountForLevel(columnLevels.length - 1) / this._columnCountForLevel(0);
	                } else {
	                     groupsCount = that._columnCountForLevel(columnLevels.length - 2);
	                }
	            }

	            return {
	                rowCount: rowCount,
	                groupsCount: groupsCount
	            };
	        },

	        _allDayVerticalGroupRow: function (dates, groupIndex, groupsCount, dateID) {
	            var that = this;
	            var result = '<tr class="k-scheduler-header-all-day">';
	            var byDate = that._isGroupedByDate();
	            var dateGroupIndex = byDate ? 0 : groupIndex;
	            var allDaySlotTemplate = that.allDaySlotTemplate;

	            var resources = function() {
	                return that._resourceBySlot({ groupIndex: dateGroupIndex });
	            };

	            if (byDate) {
	                for (; dateGroupIndex < groupsCount; dateGroupIndex++) {
	                    result += "<td>" + allDaySlotTemplate({ date: dates[dateID], resources: resources }) + "</td>";
	                }
	            } else {
	                for (var idx = 0; idx < dates.length; idx++) {
	                    result += "<td>" + allDaySlotTemplate({ date: dates[idx], resources: resources }) + "</td>";
	                }
	            }

	            return result + "</tr>";
	        },

	        _addCellsToContent: function(content, dates, date, idx, groupIdx, rowIdx) {
	            var that = this;
	            var classes = "";
	            var tmplDate;
	            var slotTemplate = this.slotTemplate;
	            var isVerticalGroupped = this._groupOrientation() === "vertical";
	            var resources = function(groupIndex) {
	                return function() {
	                    return that._resourceBySlot({ groupIndex: groupIndex });
	                };
	            };

	            if (kendo.date.isToday(dates[idx])) {
	                classes += "k-today";
	            }

	            if (kendo.date.getMilliseconds(date) < kendo.date.getMilliseconds(this.options.workDayStart) ||
	                kendo.date.getMilliseconds(date) >= kendo.date.getMilliseconds(this.options.workDayEnd) ||
	                !this._isWorkDay(dates[idx])) {
	                classes += " k-nonwork-hour";
	            }

	            content += '<td' + (classes !== "" ? ' class="' + classes + '"' : "") + ">";
	            tmplDate = kendo.date.getDate(dates[idx]);
	            kendo.date.setTime(tmplDate, kendo.date.getMilliseconds(date));

	            content += slotTemplate({ date: tmplDate, resources: resources(isVerticalGroupped && !that._isGroupedByDate()  ? rowIdx : groupIdx) });
	            content += "</td>";
	            return content;
	        },

	        _isWorkDay: function(date) {
	            var day = date.getDay();
	            var workDays =  this._workDays;

	            for (var i = 0; i < workDays.length; i++) {
	                if (workDays[i] === day) {
	                    return true;
	                }
	            }
	            return false;
	        },

	        _render: function(dates) {
	            var that = this;

	            dates = dates || [];

	            this._dates = dates;

	            this._startDate = dates[0];

	            this._endDate = dates[(dates.length - 1) || 0];

	            this.createLayout(this._layout(dates));

	            this._content(dates);

	            this._footer();

	            this.refreshLayout();

	            if(this._isVirtualized()) {
	                this._tryRenderContent();
	            }

	            var allDayHeader = this.element.find(".k-scheduler-header-all-day td");

	            if (allDayHeader.length) {
	                this._allDayHeaderHeight = allDayHeader.first()[0].clientHeight;
	            }

	            that.element.on("click" + NS, ".k-nav-day", function(e) {
	                var th = $(e.currentTarget).closest("th");
	                var offset = th.offset();
	                var additioanlWidth = 0;
	                var additionalHeight = outerHeight(th);

	                if (that._isGroupedByDate()) {
	                    if (that._isVerticallyGrouped()) {
	                        additioanlWidth = outerWidth(that.times);
	                        additionalHeight = 0;
	                    } else {
	                        additionalHeight = outerHeight(that.datesHeader);
	                    }
	                }

	                var slot = that._slotByPosition(offset.left + additioanlWidth, offset.top + additionalHeight);

	                that.trigger("navigate", { view: "day", date: slot.startDate() });
	            });
	        },

	        startTime: function() {
	            var options = this.options;
	            return options.showWorkHours ? options.workDayStart : options.startTime;
	        },

	        endTime: function() {
	            var options = this.options;
	            return options.showWorkHours ? options.workDayEnd : options.endTime;
	        },

	        startDate: function() {
	            return this._startDate;
	        },

	        endDate: function() {
	            return this._endDate;
	        },

	        _end: function(isAllDay) {
	            var time = getMilliseconds(this.endTime()) || MS_PER_DAY;

	            if (isAllDay) {
	                time = 0;
	            }

	            return new Date(this._endDate.getTime() + time);
	        },

	        nextDate: function() {
	            return kendo.date.nextDay(this.endDate());
	        },

	        previousDate: function() {
	            return kendo.date.previousDay(this.startDate());
	        },

	        calculateDateRange: function() {
	            this._render([this.options.date]);
	        },

	        destroy: function() {
	            var that = this;

	            if (that._currentTimeUpdateTimer) {
	                clearInterval(that._currentTimeUpdateTimer);
	            }

	            if (that.datesHeader) {
	                that.datesHeader.off(NS);
	            }

	            if (that.element) {
	                that.element.off(NS);
	            }

	            if (that.footer) {
	                that.footer.remove();
	            }

	            SchedulerView.fn.destroy.call(this);

	            if (this._isMobile() && that.options.editable) {
	                if (that.options.editable.create !== false) {
	                    that._addUserEvents.destroy();
	                    that._allDayUserEvents.destroy();
	                }

	                if (that.options.editable.update !== false) {
	                    that._editUserEvents.destroy();
	                }
	            }
	        },

	        inRange: function(options) {
	            var inRange = SchedulerView.fn.inRange.call(this, options);

	            if (options.isAllDay) {
	                return inRange;
	            }

	            var startTime = getMilliseconds(this.startTime());
	            var endTime = getMilliseconds(this.endTime()) || kendo.date.MS_PER_DAY;

	            var start = getMilliseconds(options.start);
	            var end = getMilliseconds(options.end) || kendo.date.MS_PER_DAY;

	            return inRange && startTime <= start && end <= endTime;
	        },

	        selectionByElement: function(cell) {
	            var offset = cell.offset();
	            // The magical number 5 is to buffer properly the height of the cell for all browsers
	            var height = Math.round(cell.innerHeight()) - 5;

	            return this._slotByPosition(offset.left, offset.top + height);
	        },

	        _timeSlotInterval: function() {
	            var options = this.options;
	            return (options.majorTick/options.minorTickCount) * MS_PER_MINUTE;
	        },

	        _timeSlotIndex: function(date) {
	            var options = this.options;
	            var eventStartTime = getMilliseconds(date);
	            var startTime = getMilliseconds(this.startTime());
	            var timeSlotInterval = ((options.majorTick/options.minorTickCount) * MS_PER_MINUTE);

	            return (eventStartTime - startTime) / (timeSlotInterval);
	        },

	        _slotIndex: function(date, multiday) {
	            if (multiday) {
	                return this._dateSlotIndex(date);
	            }

	            return this._timeSlotIndex(date);
	        },

	        _dateSlotIndex: function(date, overlaps) {
	            var idx;
	            var length;
	            var slots = this._dates || [];
	            var slotStart;
	            var slotEnd;
	            var offset = 1;

	            for (idx = 0, length = slots.length; idx < length; idx++) {
	                slotStart = kendo.date.getDate(slots[idx]);
	                slotEnd = new Date(kendo.date.getDate(slots[idx]).getTime() + MS_PER_DAY - (overlaps ? 0 : 1));

	                if (isInDateRange(date, slotStart, slotEnd)) {
	                    return idx * offset;
	                }
	            }
	            return -1;
	        },

	        _positionAllDayEvent: function(element, slotRange) {
	            var slotWidth = slotRange.innerWidth();
	            var startIndex = slotRange.start.index;
	            var endIndex = slotRange.end.index;

	            var allDayEvents = SchedulerView.collidingEvents(slotRange.events(), startIndex, endIndex);

	            var currentColumnCount = this._headerColumnCount || 0;

	            var leftOffset = 2;

	            var rightOffset = startIndex !== endIndex ? 3 : 2;

	            var eventHeight = this._allDayHeaderHeight;

	            var start = slotRange.startSlot();

	            element
	                .css({
	                    left: start.offsetLeft + leftOffset,
	                    width: slotWidth - rightOffset
	                });

	            slotRange.addEvent({ slotIndex: startIndex, start: startIndex, end: endIndex, element: element });

	            allDayEvents.push({ slotIndex: startIndex, start: startIndex, end: endIndex, element: element });

	            var rows = SchedulerView.createRows(allDayEvents);

	            if (rows.length && rows.length > currentColumnCount) {
	                this._headerColumnCount = rows.length;
	            }

	            var top = slotRange.start.offsetTop;

	            for (var idx = 0, length = rows.length; idx < length; idx++) {
	                var rowEvents = rows[idx].events;

	                for (var j = 0, eventLength = rowEvents.length; j < eventLength; j++) {
	                    $(rowEvents[j].element).css({
	                        top: top + idx * eventHeight,
	                        // apply calculated height.
	                        // -2 is to match normal events
	                        height: eventHeight - 2
	                    });
	                }
	            }
	        },

	        _arrangeColumns: function(element, top, height, slotRange) {
	            var startSlot = slotRange.start;

	            element = { element: element, slotIndex: startSlot.index, start: top, end: top + height };

	            var columns,
	                slotWidth = startSlot.clientWidth,
	                eventRightOffset = slotWidth * 0.10,
	                columnEvents,
	                eventElements =  slotRange.events(),
	                slotEvents = SchedulerView.collidingEvents(eventElements, element.start, element.end);

	            slotRange.addEvent(element);

	            slotEvents.push(element);

	            columns = SchedulerView.createColumns(slotEvents);

	            var columnWidth = (slotWidth - eventRightOffset) / columns.length;

	            for (var idx = 0, length = columns.length; idx < length; idx++) {
	                columnEvents = columns[idx].events;

	                for (var j = 0, eventLength = columnEvents.length; j < eventLength; j++) {
	                    var calculatedWidth = columnWidth - 2;
	                    columnEvents[j].element[0].style.width = (calculatedWidth > 0 ? calculatedWidth : columnWidth) + "px";
	                    columnEvents[j].element[0].style.left = (this._isRtl ? eventRightOffset : 0) + startSlot.offsetLeft + idx * columnWidth + 2 + "px";
	                }
	            }
	        },

	        _positionEvent: function(event, element, slotRange) {
	            var start = event._startTime || event.start;
	            var end = event._endTime || event.end;
	            var borderWidths = kendo.getComputedStyles(slotRange.start.element, ["border-top-width", "border-bottom-width"]);

	            var rect = slotRange.innerRect(start, end, false);

	            var height = rect.bottom - rect.top -
	                            parseFloat(borderWidths["border-top-width"]) -
	                            parseFloat(borderWidths["border-bottom-width"]);

	            if (height < 0) {
	                height = 0;
	            }

	            element.css( {
	                top: rect.top,
	                height: height
	            } );

	            this._arrangeColumns(element, rect.top, element[0].clientHeight, slotRange);
	       },

	       _createEventElement: function(event, isOneDayEvent, head, tail) {
	            var template = isOneDayEvent ? this.eventTemplate : this.allDayEventTemplate;
	            var options = this.options;
	            var editable = options.editable;
	            var isMobile = this._isMobile();
	            var showDelete = editable && editable.destroy !== false && !isMobile;
	            var resizable = editable && editable.resize !== false;
	            var startDate = getDate(this.startDate());
	            var endDate = getDate(this.endDate());
	            var startTime = getMilliseconds(this.startTime());
	            var endTime = getMilliseconds(this.endTime());
	            var eventStartTime = event._time("start");
	            var eventEndTime = event._time("end");
	            var middle;

	            if (startTime >= endTime) {
	                endTime = getMilliseconds(new Date(this.endTime().getTime() + MS_PER_DAY - 1));
	            }

	            if (!isOneDayEvent && !event.isAllDay) {
	                endDate = new Date(endDate.getTime() + MS_PER_DAY);
	            }

	            var eventStartDate = event.start;
	            var eventEndDate = event.end;

	            if (event.isAllDay) {
	                eventEndDate = getDate(event.end);
	            }
	            if ((!isInDateRange(getDate(eventStartDate), startDate, endDate) &&
	                !isInDateRange(eventEndDate, startDate, endDate)) ||
	                (isOneDayEvent &&
	                    event.start.getTime() !== event.end.getTime() &&
	                    (eventStartTime < startTime || eventStartTime >= endTime) &&
	                    (eventEndTime > endTime || eventEndTime <= startTime ))) {

	                middle = true;
	            } else if (getDate(eventStartDate) < startDate ||
	                (isOneDayEvent &&
	                    eventStartTime !== 0 &&
	                    event.start.getTime() !== event.end.getTime() &&
	                    (eventStartTime < startTime || eventStartTime >= endTime))) {

	                tail = true;
	            } else if ((eventEndDate > endDate && !isOneDayEvent) ||
	                (isOneDayEvent &&
	                    eventEndTime !== 0 &&
	                    event.start.getTime() !== event.end.getTime() &&
	                    (eventEndTime > endTime || eventEndTime <= startTime))) {

	                head = true;
	            }

	            var resources = this.eventResources(event);

	           if (event._startTime && eventStartTime !== kendo.date.getMilliseconds(event.start)) {
	                eventStartDate = new Date(eventStartTime);
	                eventStartDate = kendo.timezone.apply(eventStartDate, "Etc/UTC");
	            }

	           if (event._endTime && eventEndTime !== kendo.date.getMilliseconds(event.end)) {
	                eventEndDate = new Date(eventEndTime);
	                eventEndDate = kendo.timezone.apply(eventEndDate, "Etc/UTC");
	            }

	            var data = extend({}, {
	                ns: kendo.ns,
	                resizable: resizable,
	                showDelete: showDelete,
	                middle: middle,
	                head: head,
	                tail: tail,
	                singleDay: this._dates.length == 1,
	                resources: resources,
	                inverseColor: false,
	                messages: options.messages
	            }, event, {
	                start: eventStartDate,
	                end: eventEndDate
	            });

	            var element = $(template(data));

	            this.angular("compile", function(){
	                return {
	                    elements: element,
	                    data: [ { dataItem: data } ]
	                };
	            });

	            return element;
	        },

	        _isInTimeSlot: function(event) {
	            var slotStartTime = this.startTime(),
	                slotEndTime = this.endTime(),
	                startTime = event._startTime || event.start,
	                endTime = event._endTime || event.end;

	            if (getMilliseconds(slotEndTime) === getMilliseconds(kendo.date.getDate(slotEndTime))) {
	                slotEndTime = kendo.date.getDate(slotEndTime);
	                setTime(slotEndTime, MS_PER_DAY - 1);
	            }

	            if (event._date("end") > event._date("start")) {
	               endTime = +event._date("end") + (MS_PER_DAY - 1);
	            }

	            endTime = event._endTime ? endTime - event._date("end"): getMilliseconds(new Date(endTime));
	            startTime = event._startTime? startTime - event._date("start"): getMilliseconds(new Date(startTime));

	            slotEndTime = getMilliseconds(slotEndTime);
	            slotStartTime = getMilliseconds(slotStartTime);

	            if(slotStartTime === startTime && startTime === endTime) {
	                return true;
	            }

	            var overlaps = startTime !== slotEndTime;

	            return isInTimeRange(startTime, slotStartTime, slotEndTime, overlaps) ||
	                isInTimeRange(endTime, slotStartTime, slotEndTime, overlaps) ||
	                isInTimeRange(slotStartTime, startTime, endTime) ||
	                isInTimeRange(slotEndTime, startTime, endTime) ||
	                (event.end.getDate() > event.start.getDate() && endTime > slotStartTime);
	        },

	        _isInDateSlot: function(event) {
	            var groups = this.groups[0];
	            var slotStart = groups.firstSlot().start;
	            var slotEnd = groups.lastSlot().end - 1;

	            var startTime = kendo.date.toUtcTime(event.start);
	            var endTime = kendo.date.toUtcTime(event.end);

	            return (isInDateRange(startTime, slotStart, slotEnd) ||
	                isInDateRange(endTime, slotStart, slotEnd) ||
	                isInDateRange(slotStart, startTime, endTime) ||
	                isInDateRange(slotEnd, startTime, endTime)) &&
	                (!isInDateRange(endTime, slotStart, slotStart) || isInDateRange(endTime, startTime, startTime) || event.isAllDay );
	        },

	        _updateAllDayHeaderHeight: function(height) {
	            if (this._height !== height) {
	                this._height = height;

	                var allDaySlots = this.element.find(".k-scheduler-header-all-day td");

	                if (allDaySlots.length) {
	                    allDaySlots.parent()
	                        .add(this.element.find(".k-scheduler-times-all-day").parent())
	                        .height(height);

	                    for (var groupIndex = 0; groupIndex < this.groups.length; groupIndex++) {
	                        this.groups[groupIndex].refresh();
	                    }
	                }
	            }
	        },

	        _renderEvents: function(events, groupIndex) {
	            var allDayEventContainer = this.datesHeader.find(".k-scheduler-header-wrap > div");
	            var byDate = this._isGroupedByDate();
	            var event;

	            var idx;
	            var length;

	            for (idx = 0, length = events.length; idx < length; idx++) {
	                event = events[idx];

	                if (this._isInDateSlot(event)) {
	                    var isMultiDayEvent, container, element, ranges, range, start, end, group;

	                    if(this.options.enforceAllDaySlot) {
	                        isMultiDayEvent = event.isAllDay || event.duration() >= MS_PER_DAY;
	                    } else {
	                        isMultiDayEvent = event.isAllDay;
	                    }

	                    container = isMultiDayEvent && !this._isVerticallyGrouped() ? allDayEventContainer : this.content;

	                    if (!isMultiDayEvent) {
	                        if (this._isInTimeSlot(event)) {
	                            group = this.groups[groupIndex];

	                            if(!group) {
	                                continue;
	                            }

	                            if (!group._continuousEvents) {
	                                group._continuousEvents = [];
	                            }

	                            ranges = group.slotRanges(event);

	                            var rangeCount = ranges.length;

	                            for (var rangeIndex = 0; rangeIndex < rangeCount; rangeIndex++) {
	                                range = ranges[rangeIndex];
	                                start = event.start;
	                                end = event.end;

	                                if (rangeCount > 1) {
	                                    if (rangeIndex === 0) {
	                                        end = range.end.endDate();
	                                    } else if (rangeIndex == rangeCount - 1) {
	                                        start = range.start.startDate();
	                                    } else {
	                                        start = range.start.startDate();
	                                        end = range.end.endDate();
	                                    }
	                                }

	                                var occurrence = event.clone({ start: start, end: end, _startTime: event._startTime, _endTime: event.endTime });

	                                if (this._isInTimeSlot(occurrence)) {
	                                    var head = range.head;

	                                    element = this._createEventElement(event, !isMultiDayEvent, head, range.tail);

	                                    element.appendTo(container);

	                                    this._inverseEventColor(element);

	                                    this._positionEvent(occurrence, element, range);

	                                    addContinuousEvent(group, range, element, false);
	                                }
	                            }
	                        }

	                    } else if (this.options.allDaySlot) {
	                        group = this.groups[groupIndex];

	                        if(!group) {
	                            continue;
	                        }

	                        if (!group._continuousEvents) {
	                            group._continuousEvents = [];
	                        }

	                        ranges = group.slotRanges(event);

	                        if (ranges.length) {
	                            range = ranges[0];
	                            var startIndex = range.start.index;
	                            var endIndex = range.end.index;

	                            if (byDate && startIndex !== endIndex) {
	                                start = range.start.start;
	                                end = range.end.end;
	                                var newStart = start;
	                                var newEnd = start;

	                                for (var i = range.start.index; i <= range.end.index; i++) {
	                                    element = this._createEventElement(event, !isMultiDayEvent, i !== endIndex, i !== startIndex);

	                                    var dateRange = group.daySlotRanges(newStart, newEnd, true)[0];
	                                    newStart = newEnd += kendo.date.MS_PER_DAY;

	                                    this._positionAllDayEvent(element, dateRange);

	                                    addContinuousEvent(group, dateRange, element, true);

	                                    element.appendTo(container);

	                                    this._inverseEventColor(element);
	                                }
	                            } else {
	                                element = this._createEventElement(event, !isMultiDayEvent);

	                                this._positionAllDayEvent(element, ranges[0]);

	                                addContinuousEvent(group, ranges[0], element, true);

	                                element.appendTo(container);

	                                this._inverseEventColor(element);
	                            }
	                        }
	                    }
	                }
	            }
	        },

	        render: function(events) {
	            var that = this;

	            this._headerColumnCount = 0;

	            this._cachedEvents = events;

	            this._groups();

	            this.element.find(".k-event").remove();

	            events = new kendo.data.Query(events)
	                .sort([{ field: "start", dir: "asc" },{ field: "end", dir: "desc" }])
	                .toArray();

	            var eventsByResource = [];

	            this._eventsByResource(events, this.groupedResources, eventsByResource);

	            var eventsPerDate = $.map(this._dates, function(date) {
	                return Math.max.apply(null,
	                    $.map(eventsByResource, function(events) {
	                        return $.grep(events, function(event) {
	                            if(that.options.enforceAllDaySlot) {
	                                return event.isMultiDay() && isInDateRange(date, getDate(event.start), getDate(event.end));
	                            } else {
	                                return event.isAllDay && isInDateRange(date, getDate(event.start), getDate(event.end));
	                            }
	                        }).length;
	                    })
	                );
	            });

	            var height = Math.max.apply(null, eventsPerDate);

	            this._updateAllDayHeaderHeight((height + 1) * this._allDayHeaderHeight);

	            for (var groupIndex = 0; groupIndex < eventsByResource.length; groupIndex++) {
	                this._renderEvents(eventsByResource[groupIndex], groupIndex);
	            }

	            this.refreshLayout();

	            this._currentTime(false);

	            this.trigger("activate");
	        },

	        _eventsByResource: function(events, resources, result, parentValue) {
	            var resource = resources[0];

	            if (resource) {
	                var view = resource.dataSource.view();

	                view = view.filter(function(item) {
	                    var itemParentValue = kendo.getter(resource.dataParentValueField)(item);

	                    return itemParentValue === null || itemParentValue === undefined || itemParentValue === parentValue;
	                });

	                for (var itemIdx = 0; itemIdx < view.length; itemIdx++) {
	                    var value = this._resourceValue(resource, view[itemIdx]);

	                    var eventsFilteredByResource = new kendo.data.Query(events).filter({ field: resource.field, operator: SchedulerView.groupEqFilter(value) }).toArray();

	                    if (resources.length > 1) {
	                        this._eventsByResource(eventsFilteredByResource, resources.slice(1), result, value);
	                    } else {
	                        result.push(eventsFilteredByResource);
	                    }
	                }
	            } else {
	                result.push(events);
	            }
	        },

	        _columnOffsetForResource: function(index) {
	            return this._columnCountForLevel(index) / this._columnCountForLevel(index - 1);
	        },

	        _columnCountForLevel: function(level) {
	            var columnLevel = this.columnLevels[level];
	            return columnLevel ? columnLevel.length : 0;
	        },

	        _rowCountForLevel: function(level, rowLevels) {
	            rowLevels = rowLevels || this.rowLevels;
	            var rowLevel = rowLevels[level];
	            return rowLevel ? rowLevel.length : 0;
	        },

	        clearSelection: function() {

	            this.content.add(this.datesHeader)
	                .find(".k-state-selected")
	                .removeAttr("id")
	                .attr("aria-selected", false)
	                .removeClass("k-state-selected");
	        },

	        _updateDirection: function(selection, ranges, multiple, reverse, vertical) {
	            var isDaySlot = selection.isAllDay;
	            var startSlot = ranges[0].start;
	            var endSlot = ranges[ranges.length - 1].end;

	            if (multiple) {
	                if (vertical) {
	                    if (!isDaySlot &&
	                        startSlot.index === endSlot.index &&
	                        startSlot.collectionIndex === endSlot.collectionIndex) {
	                            selection.backward = reverse;
	                    }
	                } else {
	                    if ((isDaySlot && startSlot.index === endSlot.index) ||
	                        (!isDaySlot && startSlot.collectionIndex === endSlot.collectionIndex)) {
	                            selection.backward = reverse;
	                    }
	                }
	            }
	        },

	        _changeViewPeriod: function(selection, reverse, vertical) {
	            if (!vertical) {
	                var date = reverse ? this.previousDate() : this.nextDate();
	                var start = selection.start;
	                var end = selection.end;
	                var verticalByDate = this._isGroupedByDate()  && this._isVerticallyGrouped();
	                var group = this.groups[selection.groupIndex];
	                var collection = reverse ? group._timeSlotCollections : group._getCollections(group.daySlotCollectionCount());
	                var slots = collection[collection.length - 1]._slots;
	                var slotIndex = (!reverse && !group.daySlotCollectionCount()) ? 0 : slots.length - 1;
	                var endMilliseconds;
	                var newDateStart, newDateEnd;

	                newDateStart =  new Date(date);
	                newDateEnd = new Date(date);

	                if(this._isInRange(newDateStart, newDateEnd)){
	                    return false;
	                }

	                selection.start = newDateStart;
	                selection.end = newDateEnd;

	                if (verticalByDate) {
	                    var newStart =new Date(slots[slotIndex].startDate());
	                    var newEnd = new Date(slots[slotIndex].endDate());
	                    endMilliseconds = getMilliseconds(newEnd) ? getMilliseconds(newEnd) : MS_PER_DAY ;

	                        setTime(selection.start, getMilliseconds(newStart));
	                        setTime(selection.end, endMilliseconds);
	                        if(group.daySlotCollectionCount()){
	                            selection.isAllDay = !selection.isAllDay;
	                        }
	                } else {
	                    endMilliseconds = (selection.isAllDay || !getMilliseconds(end)) ? MS_PER_DAY : getMilliseconds(end);

	                    setTime(selection.start, getMilliseconds(start));
	                    setTime(selection.end, endMilliseconds);
	                }

	                if (!this._isVerticallyGrouped()) {
	                    selection.groupIndex = reverse ? this.groups.length - 1 : 0;
	                }

	                selection.events = [];

	                return true;
	            }
	        }
	    });

	    extend(true, ui, {
	        MultiDayView: MultiDayView,
	        DayView: MultiDayView.extend({
	            options: {
	                name: "DayView",
	                title: "Day",
	                selectedMobileDateFormat: "{0:MMM d}"
	            },
	            name: "day"
	        }),
	        WeekView: MultiDayView.extend({
	            options: {
	                name: "WeekView",
	                title: "Week",
	                selectedDateFormat: "{0:D} - {1:D}",
	                selectedShortDateFormat: "{0:d} - {1:d}"
	            },
	            name: "week",
	            calculateDateRange: function() {
	                var selectedDate = this.options.date,
	                    start = kendo.date.dayOfWeek(selectedDate, this.calendarInfo().firstDay, -1),
	                    idx, length,
	                    dates = [];

	                for (idx = 0, length = 7; idx < length; idx++) {
	                    dates.push(start);
	                    start = kendo.date.nextDay(start);
	                }
	                this._render(dates);
	            }
	        }),
	        WorkWeekView: MultiDayView.extend({
	            options: {
	                name: "WorkWeekView",
	                title: "Work Week",
	                selectedDateFormat: "{0:D} - {1:D}",
	                selectedShortDateFormat: "{0:d} - {1:d}"
	            },
	            name: "workWeek",
	            nextDate: function() {
	                var weekStart = kendo.date.dayOfWeek(kendo.date.nextDay(this.startDate()), this.calendarInfo().firstDay, 1);
	                return kendo.date.addDays(weekStart, this._workDays[0]);
	            },
	            previousDate: function() {
	                var weekStart = kendo.date.dayOfWeek(this.startDate(), this.calendarInfo().firstDay, -1);
	                var workDays = this._workDays;

	                return kendo.date.addDays(weekStart, workDays[workDays.length - 1] - 7);
	            },
	            calculateDateRange: function() {
	                var options = this.options,
	                    selectedDate = options.date,
	                    dayOfWeek = kendo.date.dayOfWeek,
	                    weekStart = dayOfWeek(selectedDate, this.calendarInfo().firstDay, -1),
	                    start = dayOfWeek(weekStart, options.workWeekStart, 1),
	                    end = dayOfWeek(start, options.workWeekEnd, 1),
	                    dates = [],
	                    workDays =(options.workDays && options.workDays.length) ? options.workDays.map(function(day){
	                        return dayOfWeek(weekStart, day, 1).getTime();
	                    }) : null;

	                if(workDays) {
	                    start = weekStart;
	                    end = dayOfWeek(start, this.calendarInfo().firstDay + 6, 1);
	                }

	                while (start <= end) {
	                    if(workDays && workDays.indexOf(start.getTime()) > -1) {
	                        dates.push(start);
	                    } else if(!workDays) {
	                        dates.push(start);
	                    }

	                    start = kendo.date.nextDay(start);
	                }

	                this._render(dates);
	            }
	        })
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });