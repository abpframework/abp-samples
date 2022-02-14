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

	module.exports = __webpack_require__(1423);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1414:
/***/ (function(module, exports) {

	module.exports = require("./kendo.scheduler.view");

/***/ }),

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1414) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "scheduler.timelineview",
	    name: "Scheduler Timeline View",
	    category: "web",
	    description: "The Scheduler Timeline View",
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
	        getMilliseconds = kendo.date.getMilliseconds,
	        MS_PER_DAY = kendo.date.MS_PER_DAY,
	        MS_PER_MINUTE = kendo.date.MS_PER_MINUTE,
	        CURRENT_TIME_MARKER_CLASS = "k-current-time",
	        CURRENT_TIME_MARKER_ARROW_CLASS = "k-current-time-arrow",
	        SCHEDULER_HEADER_WRAP_CLASS = "k-scheduler-header-wrap",
	        INVERSE_COLOR_CLASS = "k-event-inverse",
	        BORDER_SIZE_COEFF = 0.8666,
	        NS = ".kendoTimelineView";

	    var EVENT_TEMPLATE = kendo.template('<div>' +
	        '<div class="k-event-template k-event-time">#:kendo.format("{0:t} - {1:t}", start, end)#</div>' +
	        '<div class="k-event-template">${title}</div></div>'),
	        DATA_HEADER_TEMPLATE = kendo.template("<span class='k-link k-nav-day'>#=kendo.format('{0:m}', date)#</span>"),
	        EVENT_WRAPPER_STRING = '<div role="gridcell" aria-selected="false" ' +
	                'data-#=ns#uid="#=uid#"' +
	                '#if (resources[0]) { #' +
	                    'style="background-color:#=resources[0].color#; border-color: #=resources[0].color#"' +
	                    'class="k-event" ' +
	                '#} else {#' +
	                    'class="k-event"' +
	                '#}#' +
	                '>' +
	                '<span class="k-event-actions">' +
	                    '# if(data.tail) {#' +
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
	                    '# if(data.head) {#' +
	                        '<span class="k-icon k-i-arrow-60-right"></span>' +
	                    '#}#' +
	                '</span>' +
	                '#if(resizable && !data.tail){#' +
	                '<span class="k-resize-handle k-resize-w"></span>' +
	                '#}#' +
	                '#if(resizable && !data.head){#' +
	                '<span class="k-resize-handle k-resize-e"></span>' +
	                '#}#' +
	                '</div>';

	    function toInvariantTime(date) {
	        var staticDate = new Date(1980, 1, 1, 0, 0, 0);
	        setTime(staticDate, getMilliseconds(date));
	        return staticDate;
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

	    function setColspan(columnLevel) {
	        var count = 0;
	        if (columnLevel.columns) {
	            for (var i = 0; i < columnLevel.columns.length; i++) {
	                count += setColspan(columnLevel.columns[i]);
	            }
	            columnLevel.colspan = count;
	            return count;
	        } else {
	            columnLevel.colspan = 1;
	            return 1;
	        }
	    }

	    function collidingEvents(elements, left, right) {
	        var idx,
	            startPosition,
	            overlaps,
	            endPosition;

	        for (idx = elements.length-1; idx >= 0; idx--) {
	            startPosition = elements[idx].rectLeft;
	            endPosition = elements[idx].rectRight;

	            overlaps = startPosition <= left && endPosition >= left;

	            if (overlaps || (startPosition >= left && endPosition <= right) || (left <= startPosition && right >= startPosition)) {
	                if (startPosition < left) {
	                    left = startPosition;
	                }

	                if (endPosition > right) {
	                    right = endPosition;
	                }
	            }
	        }

	        return eventsForSlot(elements, left, right);
	    }

	    function eventsForSlot(elements, left, right) {
	        var events = [];

	        for (var idx = 0; idx < elements.length; idx++) {
	            var event = {
	                rectLeft: elements[idx].rectLeft,
	                rectRight: elements[idx].rectRight
	            };

	            if ((event.rectLeft < left && event.rectRight > left) || (event.rectLeft >= left && event.rectRight <= right)) {
	                events.push(elements[idx]);
	            }
	        }

	        return events;
	    }

	    var TimelineGroupedView = kendo.Class.extend({
	        init: function(view) {
	            this._view = view;
	        },

	        _getTimeSlotByPosition: function(x, y, groupIndex) {
	            var group = this._view.groups[groupIndex];

	            return group.timeSlotByPosition(x, y);
	        },

	        _hideHeaders: function() {
	            var view = this._view;

	            view.timesHeader.find("table tr").last().hide(); /*Chrome fix, use CSS selector*/
	            view.datesHeader.find("table tr").last().hide();
	        },

	        _setColspan: function(timeColumn) {
	            setColspan(timeColumn);
	        },

	        _createRowsLayout: function(resources, rows, groupHeaderTemplate) {
	            var view = this._view;

	            return view._createRowsLayout(resources, rows, groupHeaderTemplate);
	        },

	        _createVerticalColumnsLayout: function(resources, rows, groupHeaderTemplate, columns) {

	            return columns;
	        },

	        _createColumnsLayout: function(resources, columns, groupHeaderTemplate) {
	            var view = this._view;

	            return view._createColumnsLayout(resources, columns, groupHeaderTemplate);
	        },

	        _getRowCount: function() {
	            var view = this._view;

	            return view._groupCount();
	        },

	        _getGroupsCount: function() {
	            return 1;
	        },

	        _addContent: function(dates, columnCount, groupsCount, rowCount, start, end, slotTemplate, isVerticalGrouped) {
	            var view = this._view;
	            var html = '';
	            var options = view.options;

	            var appendRow = function(date) {
	                var content = "";
	                var classes = "";
	                var tmplDate;

	                var resources = function(groupIndex) {
	                    return function() {
	                        return view._resourceBySlot({ groupIndex: groupIndex });
	                    };
	                };

	                if (kendo.date.isToday(dates[idx])) {
	                    classes += "k-today";
	                }

	                if (kendo.date.getMilliseconds(date) < kendo.date.getMilliseconds(options.workDayStart) ||
	                    kendo.date.getMilliseconds(date) >= kendo.date.getMilliseconds(options.workDayEnd) ||
	                    !view._isWorkDay(dates[idx])) {
	                    classes += " k-nonwork-hour";
	                }

	                content += '<td' + (classes !== "" ? ' class="' + classes + '"' : "") + ">";
	                tmplDate = kendo.date.getDate(dates[idx]);
	                kendo.date.setTime(tmplDate, kendo.date.getMilliseconds(date));

	                content += slotTemplate({ date: tmplDate, resources: resources(isVerticalGrouped ? rowIdx : groupIdx) });
	                content += "</td>";

	                return content;
	            };

	            for (var rowIdx = 0; rowIdx < rowCount; rowIdx++) {
	                html += '<tr>';
	                for (var groupIdx = 0 ; groupIdx < groupsCount; groupIdx++) {
	                    for (var idx = 0, length = columnCount; idx < length; idx++) {
	                        html += view._forTimeRange(start, end, appendRow);
	                    }
	                }
	                html += "</tr>";
	            }
	            return html;
	        },

	        _addTimeSlotsCollections: function(groupCount, datesCount, tableRows, interval, isVerticallyGrouped) {
	            var view = this._view;
	            var rowCount = tableRows.length;

	            if (isVerticallyGrouped) {
	                rowCount = Math.floor(rowCount / groupCount);
	            }

	            for (var groupIndex = 0; groupIndex < groupCount; groupIndex++) {
	                var rowMultiplier = 0;
	                var group = view.groups[groupIndex];
	                var time;

	                if (isVerticallyGrouped) {
	                    rowMultiplier = groupIndex;
	                }

	                var rowIndex = rowMultiplier * rowCount;
	                var cellMultiplier = 0;

	                if (!isVerticallyGrouped) {
	                    cellMultiplier = groupIndex;
	                }

	                var cells = tableRows[rowIndex].children;
	                var cellsPerGroup = cells.length / (!isVerticallyGrouped ? groupCount : 1);
	                var cellsPerDay = cellsPerGroup / datesCount;

	                for (var dateIndex = 0; dateIndex < datesCount; dateIndex++) {
	                    var cellOffset = dateIndex * cellsPerDay + (cellsPerGroup * cellMultiplier);
	                    time = getMilliseconds(new Date(+view.startTime()));

	                    for (var cellIndex = 0; cellIndex < cellsPerDay ; cellIndex++) {

	                        view._addTimeSlotToCollection(group, cells, cellIndex, cellOffset, dateIndex, time, interval);
	                        time += interval;
	                    }
	                }
	            }
	        },

	        _getVerticalGroupCount: function(groupsCount) {

	            return groupsCount;
	        },

	        _getVerticalRowCount: function(eventGroups, groupIndex, maxRowCount) {
	            var view = this._view;

	            return view._isVerticallyGrouped() ? eventGroups[groupIndex].maxRowCount : maxRowCount;
	        },

	        _renderEvent: function(eventGroup, event, adjustedEvent, group, range, container) {
	            var view = this._view;
	            var element;

	            element = view._createEventElement(adjustedEvent.occurrence, event, range.head || adjustedEvent.head, range.tail || adjustedEvent.tail);
	            element.appendTo(container).css({top: 0, height: view.options.eventHeight});

	            var eventObject = {
	                start: adjustedEvent.occurrence._startTime || adjustedEvent.occurrence.start,
	                end: adjustedEvent.occurrence._endTime || adjustedEvent.occurrence.end,
	                element: element,
	                uid: event.uid,
	                slotRange: range,
	                rowIndex: 0,
	                offsetTop: 0
	            };

	            eventGroup.events[event.uid] = eventObject;

	            view._inverseEventColor(element);
	            view.addContinuousEvent(group, range, element, event.isAllDay);
	            view._arrangeRows(eventObject, range, eventGroup);
	        },

	        _verticalCountForLevel: function(level) {
	            var view = this._view;

	            return view._rowCountForLevel(level);
	        },

	        _horizontalCountForLevel: function(level) {
	            var view = this._view;

	            return view._columnCountForLevel(level);
	        },

	        _updateCurrentVerticalTimeMarker: function(ranges, currentTime) {
	            var view = this._view;
	            var elementHtml = "<div class='" + CURRENT_TIME_MARKER_CLASS + "'></div>";
	            var headerWrap = view.datesHeader.find("." + SCHEDULER_HEADER_WRAP_CLASS);
	            var left = Math.round(ranges[0].innerRect(currentTime, new Date(currentTime.getTime() + 1), false).left);
	            var timesTableMarker = $(elementHtml)
	                    .prependTo(headerWrap)
	                    .addClass(CURRENT_TIME_MARKER_ARROW_CLASS + "-down");

	            timesTableMarker.css({
	                left: view._adjustLeftPosition(left - (outerWidth(timesTableMarker) * BORDER_SIZE_COEFF / 2)),
	                top: headerWrap.find("tr").last().prev().position().top
	            });

	            $(elementHtml).prependTo(view.content).css({
	                left: view._adjustLeftPosition(left),
	                width: "1px",
	                height: view.content[0].scrollHeight - 1,
	                top: 0
	            });
	        },

	        _changeGroup: function() {
	            return undefined;
	        },

	        _prevGroupSlot: function(slot, group, isDay) {
	            var view = this._view;

	            if (view._isVerticallyGrouped()) {
	                return slot;
	            } else {
	                var collection = group._collection(0, isDay);
	                return collection.last();
	            }
	        },

	        _nextGroupSlot: function(slot, group, isDay) {
	            var view = this._view;

	            if (view._isVerticallyGrouped()) {
	                return slot;
	            } else {
	                var collection = group._collection(0, isDay);
	                return collection.first();
	            }
	        },

	        _verticalSlots: function(selection, reverse) {
	             var view = this._view;

	             return view._changeGroup(selection, reverse);
	        },

	         _verticalMethod: function(reverse) {

	              return  reverse ? "leftSlot" : "rightSlot";
	         },

	         _normalizeVerticalSelection: function() {
	             return undefined;
	         },

	         _horizontalSlots: function(selection, group, method, startSlot, endSlot, multiple, reverse) {
	            var view = this._view;
	            var result = {};

	            result.startSlot = group[method](startSlot);
	            result.endSlot = group[method](endSlot);

	            if (!multiple && view._isHorizontallyGrouped() && (!result.startSlot || !result.endSlot)) {
	                result.startSlot = result.endSlot = view._changeGroup(selection, reverse);
	            }

	            return result;
	        },

	        _changeVerticalViewPeriod: function() {
	            return false;
	        },

	        _changeHorizontalViewPeriod: function(slots, shift, selection, reverse) {
	            var view = this._view;

	            if ((!slots.startSlot ||!slots.endSlot ) && !shift && view._changeViewPeriod(selection, reverse, false)) {
	                return true;
	            }
	            return false;
	        },

	        _updateDirection: function(selection, ranges, shift, reverse) {
	            var view = this._view;

	            view._updateDirection(selection, ranges, shift, reverse, true);
	        },

	         _createMoveHint: function(range, adjustedEvent) {
	                var view = this._view;
	                var startSlot = range.start;

	                var hint = view._createEventElement(adjustedEvent.occurrence ,adjustedEvent.occurrence, false, false);

	                hint.addClass("k-event-drag-hint");

	                var rect = range.innerRect(adjustedEvent.occurrence.start, adjustedEvent.occurrence.end, view.options.snap);
	                var width = rect.right - rect.left;

	                if (width < 0) {
	                    width = 0;
	                }

	                var left = view._adjustLeftPosition(rect.left);

	                var css = {
	                    left: left,
	                    top: startSlot.offsetTop,
	                    height: startSlot.offsetHeight,
	                    width: width
	                };

	                hint.css(css);

	                if(adjustedEvent.occurrence.inverseColor) {
	                    hint.addClass(INVERSE_COLOR_CLASS);
	                }

	                view._appendMoveHint(hint);
	         },

	         _adjustLeftPosition: function(left) {
	            var view = this._view;

	            if (view._isRtl) {
	                left -= (view.content[0].scrollWidth - view.content[0].clientWidth);
	            }

	            return left;
	         }
	    });

	    var TimelineGroupedByDateView = kendo.Class.extend({
	        init: function(view) {
	            this._view = view;
	        },

	        _getTimeSlotByPosition: function(x, y, groupIndex) {
	            var group = this._view.groups[groupIndex];

	            return group.timeSlotByPosition(x, y, true);
	        },

	        _hideHeaders: function() {
	            var view = this._view;

	            if (!view._isVerticallyGrouped()) {
	                view.timesHeader.find("table tr").eq(2).hide();
	                view.datesHeader.find("table tr").eq(2).hide();
	            } else {
	                        view.times.find(".k-last").hide();
	            }
	        },
	        _setColspan: function() {},

	        _createRowsLayout: function(resources, rows, groupHeaderTemplate, columns) {
	            var view = this._view;

	            return view._createDateLayout(columns, null, true);
	        },

	        _createVerticalColumnsLayout: function(resources, rows, groupHeaderTemplate) {
	            var view = this._view;

	            return view._createColumnsLayout(resources, null, groupHeaderTemplate);
	        },

	        _createColumnsLayout: function(resources, columns, groupHeaderTemplate, subColumns) {
	            var view = this._view;

	            return view._createColumnsLayout(resources, columns, groupHeaderTemplate, subColumns, true);
	        },

	        _getRowCount: function(level) {
	            var view = this._view;

	            return view._rowCountForLevel(level);
	        },

	        _getGroupsCount: function() {
	            var view = this._view;

	            return view._groupCount();
	        },

	        _addContent: function(dates, columnCount, groupsCount, rowCount, start, end, slotTemplate, isVerticalGrouped) {
	            var view = this._view;
	            var html = '';
	            var options = view.options;

	            var appendRow = function(date, isMajorTickColumn, isMiddleColumn, isLastSlotColumn, minorTickColumns, groupIdx) {
	                var content = "";
	                var classes = "";
	                var tmplDate;
	                var workDateIndex = view._isVerticallyGrouped() ? dateIndex : idx;

	                var resources = function(groupIndex) {
	                    return function() {
	                        return view._resourceBySlot({ groupIndex: groupIndex });
	                    };
	                };

	                if (kendo.date.isToday(dates[idx])) {
	                    classes += "k-today";
	                }

	                if (kendo.date.getMilliseconds(date) < kendo.date.getMilliseconds(options.workDayStart) ||
	                    kendo.date.getMilliseconds(date) >= kendo.date.getMilliseconds(options.workDayEnd) ||
	                    !view._isWorkDay(dates[workDateIndex])) {
	                    classes += " k-nonwork-hour";
	                }

	                content += '<td' + (classes !== "" ? ' class="' + classes + '"' : "") + ">";
	                tmplDate = kendo.date.getDate(dates[idx]);
	                kendo.date.setTime(tmplDate, kendo.date.getMilliseconds(date));

	                content += slotTemplate({ date: tmplDate, resources: resources(groupIdx)});
	                content += "</td>";

	                return content;
	            };

	            var tempStart = new Date(start),
	                minorTickCount = view.options.minorTickCount,
	                msMajorInterval = view.options.majorTick * MS_PER_MINUTE,
	                msInterval = msMajorInterval / minorTickCount || 1,
	                dateIndex;

	            for (var rowIdx = 0; rowIdx < rowCount; rowIdx++) {
	                html += '<tr>';

	                 if((rowIdx % (rowCount / view._dates.length)) === 0){
	                   dateIndex = (rowIdx / (rowCount / view._dates.length));
	                   tempStart = new Date(view._dates[dateIndex]);
	                   kendo.date.setTime(tempStart, kendo.date.getMilliseconds(start));
	                  }

	                for (var idx = 0, length = columnCount; idx < length; idx++) {

	                    html += view._forTimeRange(tempStart, end, appendRow, isVerticalGrouped, groupsCount);

	                    if (isVerticalGrouped){
	                    setTime(tempStart, msInterval, false);
	                        break;
	                    }
	                }
	               html += "</tr>";
	            }

	            return html;
	        },

	        _addTimeSlotsCollections: function(groupCount, datesCount, tableRows, interval, isVerticallyGrouped) {
	            var view = this._view;
	            var rowCount = tableRows.length;

	             if (isVerticallyGrouped) {
	                rowCount = rowCount/datesCount;
	             }

	            for (var dateIndex = 0; dateIndex < datesCount; dateIndex++) {
	                var rowMultiplier = 0;
	                var time;

	                if (isVerticallyGrouped) {
	                    rowMultiplier = dateIndex;
	                }

	                var rowIndex = rowMultiplier * rowCount;
	                var cellMultiplier = 0;
	                var cells = tableRows[rowIndex].children;
	                var cellsPerGroup = isVerticallyGrouped ? rowCount : cells.length / (datesCount * groupCount);
	                var cellsPerDay = cells.length / datesCount;
	                var cellOffset;

	                time = getMilliseconds(new Date(+view.startTime()));

	                for (var cellIndex = 0; cellIndex < cellsPerGroup; cellIndex++) {
	                    if (!isVerticallyGrouped) {
	                        cellOffset = (dateIndex * cellsPerDay) + (groupCount * cellIndex);
	                        cellMultiplier++;
	                    } else{
	                        cellOffset = 0;
	                        cells = tableRows[cellIndex + (cellsPerGroup*dateIndex)].children;
	                    }

	                    for (var groupIndex = 0; groupIndex < groupCount ; groupIndex++) {
	                        var group = view.groups[groupIndex];

	                        view._addTimeSlotToCollection(group, cells, groupIndex, cellOffset, dateIndex, time, interval);
	                    }
	                    time += interval;
	                }
	             }
	        },

	        _getVerticalGroupCount: function() {
	            var view = this._view;

	            return view.content.find("tr").length;
	        },

	        _getVerticalRowCount: function(eventGroups, groupIndex, maxRowCount) {

	            return maxRowCount;
	        },

	        _renderEvent: function(eventGroup, event, adjustedEvent, group, range, container, startIndex, endIndex) {
	            var view = this._view;
	            var element;
	            var eventObjects = [];

	            for (var i = range.start.index; i <= range.end.index; i++) {
	                element = view._createEventElement(adjustedEvent.occurrence, event, i !== endIndex, i !== startIndex);
	                element.appendTo(container).css({top: 0, height: view.options.eventHeight});
	                var currentSlot = group._timeSlotCollections[0]._slots[i];
	                var dateRange = group.timeSlotRanges(currentSlot.start, currentSlot.end, false)[0];

	                    var eventObject = {
	                    start: i === startIndex ? adjustedEvent.occurrence._startTime || adjustedEvent.occurrence.start : currentSlot.start,
	                    end: i === endIndex ? adjustedEvent.occurrence._endTime || adjustedEvent.occurrence.end : currentSlot.end,
	                    element: element,
	                    uid: event.uid,
	                    slotRange: dateRange,
	                    rowIndex: 0,
	                    offsetTop: 0
	                };

	                eventGroup.events[event.uid] = eventObject;
	                eventObjects.push(eventObject);

	                view.addContinuousEvent(group, dateRange, element, event.isAllDay);
	                view._arrangeRows(eventObject, dateRange, eventGroup);
	            }
	            eventGroup.events[event.uid] = eventObjects;
	        },

	        _verticalCountForLevel: function(level) {
	            var view = this._view;

	            return view._columnCountForLevel(level);
	        },

	        _horizontalCountForLevel: function(level, columnLevel) {
	            var view = this._view;

	            return view._columnCountForLevel(columnLevel) / view._columnCountForLevel(2);
	        },

	        _updateCurrentVerticalTimeMarker: function(ranges,currentTime) {
	            var view = this._view;
	            var firstTimesCell = view.times.find("tr").first().find("th").first();
	            var lastTimesCell = view.times.find("tr").first().find("th").last();
	            var elementHtml = "<div class='" + CURRENT_TIME_MARKER_CLASS + "'></div>";
	            var timesTableMarker = $(elementHtml).prependTo(view.times);
	            var markerTopPosition = Math.round(ranges[0].innerRect(currentTime, new Date(currentTime.getTime() + 1), false).top);
	            var timesTableMarkerCss = {};

	            if (this._isRtl) {
	                timesTableMarkerCss.right = firstTimesCell.position().left + outerHeight(firstTimesCell) - outerHeight(lastTimesCell);
	                timesTableMarker.addClass(CURRENT_TIME_MARKER_ARROW_CLASS + "-left");
	            } else {
	                timesTableMarkerCss.left = lastTimesCell.position().left;
	                timesTableMarker.addClass(CURRENT_TIME_MARKER_ARROW_CLASS + "-right");
	            }

	            timesTableMarkerCss.top = markerTopPosition - (outerWidth(timesTableMarker) * BORDER_SIZE_COEFF / 2);

	            timesTableMarker.css(timesTableMarkerCss);

	            $(elementHtml).prependTo(view.content).css({
	                top: markerTopPosition,
	                height: "1px",
	                right: "1px",
	                width: view.content[0].scrollWidth,
	                left: 0
	            });
	        },

	        _changeGroup: function(selection, previous, slot) {
	             var view = this._view;

	             if (!slot) {
	                selection.groupIndex = previous ? view.groups.length - 1 : 0;
	             }
	        },

	         _prevGroupSlot: function(slot) {
	              return slot;
	        },

	        _nextGroupSlot: function(slot) {
	              return slot;
	        },

	        _changeDate: function(selection, reverse, slot) {
	            var view = this._view;
	            var group = view.groups[selection.groupIndex];
	            var collections, index;

	            if (reverse) {
	                  collections = group._getCollections(false);
	                  index = slot.index - 1;

	                  if (index >= 0) {
	                      return  collections[0]._slots[index];
	                  }
	              } else {
	                  collections = group._getCollections(false);
	                  index = slot.index + 1;

	                  if (collections[0] && collections[0]._slots[index]) {
	                      return  collections[0]._slots[index];
	                  }
	               }
	        },

	        _verticalSlots: function (selection, reverse, slot) {
	            return this._changeDate(selection, reverse, slot);
	        },

	        _verticalMethod: function(reverse, multiple) {
	            if (multiple) {
	               return reverse ? "upSlot" : "downSlot";
	            } else {
	               return  reverse ? "leftSlot" : "rightSlot";
	            }
	        },

	        _normalizeVerticalSelection: function(selection, ranges, reverse, multiple) {
	            var view = this._view;

	            if (!multiple) {
	                return view._normalizeVerticalSelection(selection, ranges, reverse);
	            }

	            return undefined;
	        },

	        _horizontalSlots: function(selection, group, method, startSlot, endSlot, multiple, reverse) {
	             var view = this._view;
	             var tempSlot = view._changeGroup(selection, reverse);
	             var result = {};

	            if (!tempSlot) {
	                if (!view._isVerticallyGrouped()) {
	                    result.startSlot = group[method](startSlot);
	                    result.endSlot = group[method](endSlot);
	                }

	            } else {
	                result.startSlot = result.endSlot = tempSlot;
	            }

	            return result;
	        },

	        _changeVerticalViewPeriod: function(slots, shift, selection, reverse) {
	            var view = this._view;

	            if ((!slots.startSlot || !slots.endSlot) && !shift &&
	                view._changeViewPeriod(selection, reverse, view._isVerticallyGrouped())) {
	                return true;
	            }
	            return false;
	        },

	        _changeHorizontalViewPeriod: function(slots, shift, selection, reverse) {
	           var view = this._view;

	           if ( view._isVerticallyGrouped()) {
	               return false;
	           }

	           if ((!slots.startSlot ||!slots.endSlot ) && !shift && view._changeViewPeriod(selection, reverse, false)) {
	                return true;
	            }
	            return false;
	        },

	        _updateDirection: function(selection, ranges, shift, reverse) {
	            var view = this._view;

	            view._updateDirection(selection, ranges, shift, reverse, !view._isVerticallyGrouped());
	        },

	         _createMoveHint: function(range, adjustedEvent) {
	                var view = this._view;
	                var startSlot = range.start;
	                var startEnd = range.end;

	                for (var slotIdx = startSlot.index; slotIdx <= startEnd.index; slotIdx++) {
	                    var slot = range.collection._slots[slotIdx];
	                    var hint = view._createEventElement(adjustedEvent.occurrence ,adjustedEvent.occurrence, false, false);

	                    hint.addClass("k-event-drag-hint");

	                    var css = {
	                        left: slot.offsetLeft + 2,
	                        top: slot.offsetTop,
	                        height: view.options.eventHeight,
	                        width: slot.offsetWidth
	                    };

	                    hint.css(css);

	                    if(adjustedEvent.occurrence.inverseColor) {
	                        hint.addClass(INVERSE_COLOR_CLASS);
	                    }

	                    view._appendMoveHint(hint);
	                }
	         },

	         _adjustLeftPosition: function(left) {
	             var view = this._view;

	            if (view._isRtl && !view._isVerticallyGrouped()) {
	                left -= (view.content[0].scrollWidth - view.content[0].offsetWidth);
	            }

	            return left;
	         }
	 });

	    kendo.ui.scheduler.TimelineGroupedView = TimelineGroupedView;
	    kendo.ui.scheduler.TimelineGroupedByDateView = TimelineGroupedByDateView;

	    var TimelineView = SchedulerView.extend({
	        init: function(element, options) {
	            var that = this;

	            SchedulerView.fn.init.call(that, element, options);

	            that._groupedView = that._getGroupedView();

	            that.title = that.options.title || that.options.name;

	            that._workDays = getWorkDays(that.options);

	            that._templates();

	            that._editable();

	            that.calculateDateRange();

	            that._groups();

	            that._currentTime(true);
	        },
	        name: "timeline",

	        _isVirtualized: function () {
	            return false;
	        },

	        _getGroupedView: function() {

	            if (this._isGroupedByDate()) {
	                   return new kendo.ui.scheduler.TimelineGroupedByDateView(this);
	            } else {
	                   return new kendo.ui.scheduler.TimelineGroupedView(this);
	            }
	        },

	        _getNextEventIndexBySlot: function(slot, sortedEvents, groupIndex){
	           if(this._isVerticallyGrouped()){
	               return kendo.ui.SchedulerView.fn._getNextEventIndexBySlot.call(this, slot, sortedEvents, groupIndex);
	           }

	            var tempIndex = 0;

	            for (var i = 0; i < sortedEvents.length; i++) {
	                if (slot.startDate()> sortedEvents[i].start.startDate()) {
	                    tempIndex++;
	                    continue;
	                }

	                if (slot.startDate().getTime() === sortedEvents[i].start.startDate().getTime() &&
	                 groupIndex > sortedEvents[i].start.groupIndex) {
	                      tempIndex++;
	                      continue;
	                }

	                 break;

	            }
	            return tempIndex;
	        },

	        _getSelectedSlot: function (slot, sortedEvents, event, idx, pad, prev) {
	            if(this._isVerticallyGrouped()){
	               return kendo.ui.SchedulerView.fn._getSelectedSlot.call(this, slot, sortedEvents, event, idx, pad, prev);
	            }

	            return slot;
	        },

	        _getSortedEvents: function (uniqueAllEvents) {
	            if(this._isVerticallyGrouped()){
	               return kendo.ui.SchedulerView.fn._getSortedEvents.call(this, uniqueAllEvents);
	            }

	            return uniqueAllEvents.sort(function(first, second) {
	                var result = first.start.startDate().getTime() - second.start.startDate().getTime();

	                if (result === 0) {
	                    if (first.start.isDaySlot && !second.start.isDaySlot) {
	                            result = -1;
	                    }

	                    if (!first.start.isDaySlot && second.start.isDaySlot) {
	                            result = 1;
	                    }
	                }

	                if (result === 0) {
	                    result = first.start.groupIndex - second.start.groupIndex;
	                }

	                if (result === 0) {
	                    result = $(first.element).index() - $(second.element).index();
	                }

	                return result;
	            });
	        },

	        _currentTimeMarkerUpdater: function() {
	            this._updateCurrentTimeMarker(new Date());
	        },

	        _updateCurrentTimeMarker: function(currentTime) {
	            var options = this.options;

	            this.datesHeader.find("." + CURRENT_TIME_MARKER_CLASS).remove();
	            this.times.find("." + CURRENT_TIME_MARKER_CLASS).remove();
	            this.content.find("." + CURRENT_TIME_MARKER_CLASS).remove();

	            if (!this._isInDateSlot({start: currentTime, end:currentTime })) {
	                return;
	            }

	            if(options.currentTimeMarker.useLocalTimezone === false) {
	                var timezone = options.dataSource.options.schema.timezone;

	                if(options.dataSource && timezone) {
	                    var timezoneOffset = kendo.timezone.offset(currentTime, timezone);
	                    currentTime = kendo.timezone.convert(currentTime, currentTime.getTimezoneOffset(), timezoneOffset);
	                }
	            }

	            var groupsCount = !options.group || options.group.orientation == "vertical" ? 1 : this.groups.length;

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

	                    if(this._isVerticallyGrouped()){
	                        this._groupedView._updateCurrentVerticalTimeMarker(ranges,currentTime);
	                    } else{
	                        var elementHtml = "<div class='" + CURRENT_TIME_MARKER_CLASS + "'></div>";
	                        var headerWrap = this.datesHeader.find("." + SCHEDULER_HEADER_WRAP_CLASS);
	                        var left = Math.round(ranges[0].innerRect(currentTime, new Date(currentTime.getTime() + 1), false).left);
	                        var timesTableMarker = $(elementHtml)
	                                .prependTo(headerWrap)
	                                .addClass(CURRENT_TIME_MARKER_ARROW_CLASS + "-down");

	                        timesTableMarker.css({
	                            left: this._adjustLeftPosition(left - (outerWidth(timesTableMarker) * BORDER_SIZE_COEFF / 2)),
	                            top: headerWrap.find("tr").last().prev().position().top
	                        });

	                        $(elementHtml).prependTo(this.content).css({
	                            left: this._adjustLeftPosition(left),
	                            width: "1px",
	                            height: this.content[0].scrollHeight - 1,
	                            top: 0
	                        });
	                    }
	                }
	            }
	        },

	        _adjustLeftPosition: function(left) {
	            return this._groupedView._adjustLeftPosition(left);
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
	                that.element.on("dblclick" + NS, ".k-scheduler-content td", function(e) {
	                    var slot = that._slotByPosition(e.pageX, e.pageY);

	                    if (slot) {
	                        var resourceInfo = that._resourceBySlot(slot);
	                        that.trigger("add", { eventInfo: extend({ start: slot.startDate(), end: slot.endDate() }, resourceInfo) });
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
	                    useClickAsTap: !kendo.support.browser.edge,
	                    filter:  ".k-scheduler-content td",
	                    tap: function(e) {
	                        if (that._scrolling) {
	                            return;
	                        }
	                        var x = e.x.location !== undefined ? e.x.location : e.x;
	                        var y = e.y.location !== undefined ? e.y.location : e.y;
	                        var slot = that._slotByPosition(x, y);

	                        if (slot) {
	                            var resourceInfo = that._resourceBySlot(slot);
	                            that.trigger("add", { eventInfo: extend({ start: slot.startDate(), end: slot.endDate() }, resourceInfo) });
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

	        _slotByPosition: function(x, y) {
	            var slot;
	            var content = this.content;
	            var offset = content.offset();
	            var groupIndex;

	            x -= offset.left;
	            y -= offset.top;

	            if (this._isRtl) {
	                var browser = kendo.support.browser;

	                if (browser.mozilla || (browser.webkit && browser.version >= 85)) {
	                     x += (content[0].scrollWidth - content[0].offsetWidth);
	                     x += content[0].scrollLeft;
	                } else if (browser.msie) {
	                     x -= kendo.scrollLeft(content);
	                     x += content[0].scrollWidth - content[0].offsetWidth;
	                } else if (browser.webkit) {
	                     x += content[0].scrollLeft;
	                }
	            } else {
	                x += content[0].scrollLeft;
	            }

	            y += content[0].scrollTop;

	            x = Math.ceil(x);
	            y = Math.ceil(y);

	            for (groupIndex = 0; groupIndex < this.groups.length; groupIndex++) {

	                 slot = this._groupedView._getTimeSlotByPosition(x, y, groupIndex);

	                 if (slot) {
	                     return slot;
	                 }
	            }

	            return null;
	        },

	        options: {
	            name: "TimelineView",
	            title: "Timeline",
	            selectedDateFormat: "{0:D}",
	            selectedShortDateFormat: "{0:d}",
	            selectedMobileDateFormat: "{0:MMM dd}",
	            date: kendo.date.today(),
	            startTime: kendo.date.today(),
	            endTime: kendo.date.today(),
	            showWorkHours: false,
	            minorTickCount: 2,
	            editable: true,
	            workDayStart: new Date(1980, 1, 1, 8, 0, 0),
	            workDayEnd: new Date(1980, 1, 1, 17, 0, 0),
	            workWeekStart: 1,
	            workWeekEnd: 5,
	            majorTick: 60,
	            eventHeight: 25,
	            eventMinWidth: 0,
	            columnWidth: 100,
	            groupHeaderTemplate: "#=text#",
	            majorTimeHeaderTemplate: "#=kendo.toString(date, 't')#",
	            slotTemplate: "&nbsp;",
	            eventTemplate: EVENT_TEMPLATE,
	            dateHeaderTemplate: DATA_HEADER_TEMPLATE,
	            footer: {
	                command: "workDay"
	            },
	            currentTimeMarker: {
	                updateInterval: 10000,
	                useLocalTimezone: true
	            },
	            messages: {
	                defaultRowText: "All events",
	                showFullDay: "Show full day",
	                showWorkDay: "Show business hours"
	            }
	        },

	        events: ["remove", "add", "edit"],

	        _templates: function() {
	            var options = this.options,
	                settings = extend({}, kendo.Template, options.templateSettings);

	            this.eventTemplate = this._eventTmpl(options.eventTemplate, EVENT_WRAPPER_STRING);
	            this.majorTimeHeaderTemplate = kendo.template(options.majorTimeHeaderTemplate, settings);
	            this.dateHeaderTemplate = kendo.template(options.dateHeaderTemplate, settings);
	            this.slotTemplate = kendo.template(options.slotTemplate, settings);
	            this.groupHeaderTemplate = kendo.template(options.groupHeaderTemplate, settings);
	        },

	        _render: function(dates) {
	            var that = this;

	            dates = dates || [];

	            that._dates = dates;

	            that._startDate = dates[0];

	            that._endDate = dates[(dates.length - 1) || 0];

	            that._calculateSlotRanges();

	            that.createLayout(that._layout(dates));

	            that._content(dates);

	            that._footer();

	            that._setContentWidth();

	            that.refreshLayout();

	            that.datesHeader.on("click" + NS, ".k-nav-day", function(e) {
	                var th = $(e.currentTarget).closest("th");

	                var slot = that._slotByPosition(th.offset().left, that.content.offset().top);

	                that.trigger("navigate", { view: "timeline", date: slot.startDate() });
	            });

	            that._groupedView._hideHeaders();
	        },

	        _setContentWidth: function() {
	            var content = this.content;
	            var contentWidth = content.width();
	            var contentTable = this.content.find("table");
	            var columnCount = contentTable.find("tr").first().children().length;

	            var minWidth = 100;
	            var calculatedWidth = columnCount * this.options.columnWidth;

	            if (contentWidth < calculatedWidth) {
	                minWidth = Math.ceil((calculatedWidth / contentWidth) * 100);
	            }

	            contentTable.add(this.datesHeader.find("table"))
	                .css("width", minWidth + "%");
	        },

	        _calculateSlotRanges: function () {
	            var dates = this._dates;
	            var slotStartTime = this.startTime();
	            var slotEndTime = this.endTime();

	            slotEndTime = getMilliseconds(slotEndTime);
	            slotStartTime = getMilliseconds(slotStartTime);

	            if (slotEndTime === slotStartTime) {
	                slotEndTime += MS_PER_DAY - 1;
	            } else if (slotEndTime < slotStartTime) {
	                slotEndTime += MS_PER_DAY;
	            }

	            var slotRanges = [];
	            for (var i = 0; i < dates.length; i++) {
	                var rangeStart = getDate(dates[i]);
	                setTime(rangeStart, slotStartTime);

	                var rangeEnd = getDate(dates[i]);
	                setTime(rangeEnd, slotEndTime);

	                slotRanges.push({
	                    start: kendo.date.toUtcTime(rangeStart),
	                    end: kendo.date.toUtcTime(rangeEnd)
	                });
	            }

	            this._slotRanges = slotRanges;
	        },

	        _forTimeRange: function(min, max, action, verticalByDate, groupsCount) {
	            min = toInvariantTime(min); //convert the date to 1/2/1980 and sets the time
	            max = toInvariantTime(max);

	            var that = this,
	                msMin = getMilliseconds(min),
	                msMax = getMilliseconds(max),
	                minorTickCount = that.options.minorTickCount,
	                msMajorInterval = that.options.majorTick * MS_PER_MINUTE,
	                msInterval = msMajorInterval / minorTickCount || 1,
	                start = new Date(+min),
	                idx = 0, length,
	                html = "";

	            length = MS_PER_DAY / msInterval;

	            if (msMin != msMax) {
	                if (msMin > msMax) {
	                    msMax += MS_PER_DAY;
	                }

	                length = ((msMax - msMin) / msInterval);
	            }

	            length = verticalByDate ? 1 : Math.round(length);

	            if (groupsCount) {
	                length = length * groupsCount;
	            }

	            for (; idx < length; idx++) {
	                var majorTickDivider = idx % (msMajorInterval/msInterval);
	                var isMajorTickColumn = majorTickDivider === 0;
	                var isMiddleColumn = majorTickDivider < minorTickCount - 1;
	                var isLastSlotColumn = majorTickDivider === minorTickCount - 1;
	                var minorTickColumns = minorTickCount;

	                if (length % minorTickCount !== 0) {
	                    var isLastMajorSlot = (length - (idx + 1)) < minorTickCount;
	                    if (isMajorTickColumn && isLastMajorSlot) {
	                        minorTickColumns = length % minorTickCount;
	                    }
	                }

	                html += action(start, isMajorTickColumn, isMiddleColumn, isLastSlotColumn, minorTickColumns, idx % groupsCount);

	                if (!verticalByDate) {
	                    if (groupsCount) {
	                        if ((idx % groupsCount) === groupsCount - 1) {
	                            setTime(start, msInterval, false);
	                        }
	                    } else {
	                        setTime(start, msInterval, false);
	                    }
	                }
	            }

	            return html;
	        },

	        _layout: function(dates) {
	            var timeColumns = [];
	            var columns = [];
	            var that = this;
	            var rows = [{ text: that.options.messages.defaultRowText }];
	            var groupedView = that._groupedView;

	            var minorTickSlots = [];
	            for (var minorTickIndex = 0; minorTickIndex < that.options.minorTickCount; minorTickIndex++) {
	                minorTickSlots.push({
	                    text: "&#8203;",
	                    className: "k-last",
	                    minorTicks: true
	                });
	            }

	            this._forTimeRange(that.startTime(), that.endTime(), function(date, majorTick, middleColumn, lastSlotColumn, minorSlotsCount) {
	                var template = that.majorTimeHeaderTemplate;

	                if (majorTick) {
	                    var timeColumn = {
	                        text: template({ date: date }),
	                        className: lastSlotColumn ? "k-slot-cell" : "",
	                        columns: minorTickSlots.slice(0, minorSlotsCount)
	                    };

	                    groupedView._setColspan(timeColumn);

	                    timeColumns.push(timeColumn);
	                }
	            });

	            for (var idx = 0; idx < dates.length; idx++) {
	                columns.push({
	                    text: that.dateHeaderTemplate({ date: dates[idx] }),
	                    className:  "k-slot-cell",
	                    columns: timeColumns.slice(0)
	                });
	            }

	            var resources = this.groupedResources;
	            if (resources.length) {
	                if (this._groupOrientation() === "vertical") {
	                    rows =  groupedView._createRowsLayout(resources, null, this.groupHeaderTemplate, columns);
	                    columns =  groupedView._createVerticalColumnsLayout(resources, null, this.groupHeaderTemplate, columns);

	                } else {
	                    columns =  groupedView._createColumnsLayout(resources, columns, this.groupHeaderTemplate, columns);
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
	                    that.trigger("navigate", { view: that.name || options.name, date: that.startDate(), isWorkDay: !options.showWorkHours });
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

	        _columnCountForLevel: function(level) {
	            var columnLevel = this.columnLevels[level];
	            return columnLevel ? columnLevel.length : 0;
	        },

	        _rowCountForLevel: function(level) {
	            var rowLevel = this.rowLevels[level];
	            return rowLevel ? rowLevel.length : 0;
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

	        _content: function(dates) {
	            var that = this;
	            var start = that.startTime();
	            var end = this.endTime();
	            var groupsCount = 1;
	            var rowCount = 1;
	            var columnCount = dates.length;
	            var html = '';
	            var resources = this.groupedResources;
	            var slotTemplate = this.slotTemplate;
	            var isVerticalGrouped = false;

	            if (resources.length) {
	                isVerticalGrouped = that._groupOrientation() === "vertical";

	                if (isVerticalGrouped) {
	                    rowCount = that._groupedView._getRowCount(this.rowLevels.length - 1);
	                    groupsCount = that._groupedView._getGroupsCount();
	                } else {
	                    groupsCount = that._groupCount();
	                }
	            }

	            html += '<tbody>';
	            html += that._groupedView._addContent(dates, columnCount, groupsCount, rowCount, start, end, slotTemplate, isVerticalGrouped);
	            html += '</tbody>';

	            this.content.find("table").append(html);
	        },

	        _groups: function() {
	            var groupCount = this._groupCount();
	            var dates = this._dates;
	            var columnCount = dates.length;

	            this.groups = [];

	            for (var idx = 0; idx < groupCount; idx++) {
	                var view = this._addResourceView(idx);

	                var start = dates[0];
	                var end = dates[(dates.length - 1) || 0];

	                var startTime = getMilliseconds(this.startTime());
	                var endTime = getMilliseconds(this.endTime());

	                if (startTime !== 0 && endTime <= startTime) {
	                    start = getDate(start);
	                    setTime(start, startTime);

	                    end = getDate(end);
	                    setTime(end, endTime);
	                }

	                view.addTimeSlotCollection(start, kendo.date.addDays(end, 1));
	            }

	            this._timeSlotGroups(groupCount, columnCount);
	        },

	        _isHorizontallyGrouped: function() {
	            return this.groupedResources.length && this._groupOrientation() === "horizontal";
	        },

	        _timeSlotGroups: function (groupCount, datesCount) {
	            var interval = this._timeSlotInterval();
	            var isVerticallyGrouped = this._isVerticallyGrouped();
	            var tableRows = this.content.find("tr");

	            tableRows.attr("role", "row");

	            this._groupedView._addTimeSlotsCollections(groupCount, datesCount, tableRows, interval, isVerticallyGrouped);

	        },

	        _addTimeSlotToCollection: function(group, cells, cellIndex, cellOffset, dateIndex, time, interval){
	              var cell = cells[cellIndex+cellOffset];
	              var collection = group.getTimeSlotCollection(0);
	              var currentDate = this._dates[dateIndex];
	              var currentTime = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
	              var start = currentTime + time;
	              var end = start + interval;
	              cell.setAttribute("role", "gridcell");
	              cell.setAttribute("aria-selected", false);

	              collection.addTimeSlot(cell, start, end, true);
	        },

	        startDate: function() {
	            return this._startDate;
	        },

	        endDate: function() {
	            return this._endDate;
	        },

	        visibleEndDate: function () {
	            var startTime = getMilliseconds(this.startTime());
	            var endTime = getMilliseconds(this.endTime());
	            var endDate = this.endDate();

	            if (startTime !== 0 && endTime <= startTime) {
	                endDate = kendo.date.addDays(endDate, 1);
	            }

	            return endDate;
	        },

	        startTime: function() {
	            var options = this.options;
	            return options.showWorkHours ? options.workDayStart : options.startTime;
	        },

	        endTime: function() {
	            var options = this.options;
	            return options.showWorkHours ? options.workDayEnd : options.endTime;
	        },

	        _timeSlotInterval: function() {
	            var options = this.options;
	            return (options.majorTick/options.minorTickCount) * MS_PER_MINUTE;
	        },

	        nextDate: function () {
	            return kendo.date.nextDay(this.endDate());
	        },

	        previousDate: function () {
	            return kendo.date.previousDay(this.startDate());
	        },

	        calculateDateRange: function() {
	            this._render([this.options.date]);
	        },

	        render: function(events) {
	            this._headerColumnCount = 0;

	            this._groups();

	            this.element.find(".k-event").remove();

	            events = new kendo.data.Query(events)
	                .sort([{ field: "start", dir: "asc" },{ field: "end", dir: "desc" }])
	                .toArray();

	            var eventsByResource = [];

	            this._eventsByResource(events, this.groupedResources, eventsByResource);

	            var eventGroups = [];
	            var maxRowCount = 0;

	            for (var groupIndex = 0; groupIndex < eventsByResource.length; groupIndex++) {
	                var eventGroup = {
	                    groupIndex: groupIndex,
	                    maxRowCount: 0,
	                    events: {}
	                };

	                eventGroups.push(eventGroup);

	                this._renderEvents(eventsByResource[groupIndex], groupIndex, eventGroup);

	                if (maxRowCount < eventGroup.maxRowCount) {
	                    maxRowCount = eventGroup.maxRowCount;
	                }
	            }

	            this._setRowsHeight(eventGroups, eventsByResource.length, maxRowCount);

	            this._positionEvents(eventGroups, eventsByResource.length);

	            this._currentTime(false);

	            this.trigger("activate");
	        },

	        _positionEvents: function(eventGroups, groupsCount) {
	            for (var groupIndex = 0; groupIndex < groupsCount; groupIndex++) {
	                var eventsForGroup = eventGroups[groupIndex].events;
	                for (var eventUid in eventsForGroup) {
	                    var eventObject = eventsForGroup[eventUid];
	                    if(Array.isArray(eventObject)){
	                        for(var eventIndex = 0; eventIndex<eventObject.length; eventIndex++){
	                            this._positionEvent(eventObject[eventIndex]);
	                        }
	                    } else{
	                        this._positionEvent(eventObject);
	                    }
	                }
	            }
	        },

	        _setRowsHeight: function(eventGroups, groupsCount, maxRowCount) {
	            var eventHeight = this.options.eventHeight;
	            var eventBottomOffset = this._getBottomRowOffset();
	            var groupedView = this._groupedView;
	            var verticalGroupCount = groupedView._getVerticalGroupCount(groupsCount);

	            groupsCount = this._isVerticallyGrouped() ? verticalGroupCount : 1;

	            for (var groupIndex = 0; groupIndex < groupsCount; groupIndex++) {
	                var rowsCount = groupedView._getVerticalRowCount(eventGroups, groupIndex, maxRowCount);

	                rowsCount = rowsCount ? rowsCount : 1;

	                var rowHeight = ((eventHeight + 2) * rowsCount) + eventBottomOffset;
	                var timesRow = $(this.times.find("tr")[groupIndex]);
	                var row = $(this.content.find("tr")[groupIndex]);

	                timesRow.height(rowHeight);
	                row.height(rowHeight);
	            }

	            this._setContentWidth();
	            this.refreshLayout();
	            this._refreshSlots();
	        },

	        _getBottomRowOffset: function() {
	            var eventBottomOffset = this.options.eventHeight * 0.50;
	            var isMobile = this._isMobile();
	            var minOffset;
	            var maxOffset;

	            if (isMobile) {
	                minOffset = 30;
	                maxOffset = 60;
	            } else {
	                minOffset = 15;
	                maxOffset = 30;
	            }

	            if (eventBottomOffset > maxOffset) {
	                eventBottomOffset = maxOffset;
	            } else if (eventBottomOffset < minOffset) {
	                eventBottomOffset = minOffset;
	            }

	            return eventBottomOffset;
	        },

	        _positionEvent: function(eventObject) {
	            var eventHeight = this.options.eventHeight;
	            var eventOffset = 2;
	            var rect = eventObject.slotRange.innerRect(eventObject.start, eventObject.end, false);
	            var left = this._adjustLeftPosition(rect.left);
	            var width = rect.right - rect.left;

	            if (width < 0) {
	                width = 0;
	            }

	            if (width < this.options.eventMinWidth) {
	                var slotsCollection = eventObject.slotRange.collection;
	                var lastSlot = slotsCollection._slots[slotsCollection._slots.length-1];
	                var offsetRight = lastSlot.offsetLeft + lastSlot.offsetWidth;

	                width = this.options.eventMinWidth;

	                if (offsetRight < left + width) {
	                    width = offsetRight - rect.left;
	                }
	            }

	            eventObject.element.css({
	                top:  eventObject.slotRange.start.offsetTop + eventObject.rowIndex * (eventHeight + eventOffset) + "px",
	                left: left,
	                width: width
	            });
	        },

	        _refreshSlots: function() {
	            for (var groupIndex = 0; groupIndex < this.groups.length; groupIndex++) {
	                this.groups[groupIndex].refresh();
	            }
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

	        _isInDateSlot: function(event) {
	            var startTime = event.start;
	            var endTime = event.end;
	            var rangeStart = getDate(this._startDate);
	            var rangeEnd = kendo.date.addDays(getDate(this.visibleEndDate()), 1);

	            if (startTime < rangeEnd && rangeStart <= endTime) {
	                return true;
	            }
	            return false;
	        },

	        _isInTimeSlot: function(event) {
	            var startTime = event._startTime || kendo.date.toUtcTime(event.start);
	            var endTime = event._endTime || kendo.date.toUtcTime(event.end);

	            var slotRanges = this._slotRanges;

	            if (startTime === endTime) {
	                endTime = endTime+1;
	            }

	            for (var slotIndex = 0; slotIndex < slotRanges.length; slotIndex++) {
	                if (startTime < slotRanges[slotIndex].end && slotRanges[slotIndex].start < endTime) {
	                    return true;
	                }
	            }
	            return false;
	        },

	        _adjustEvent: function(event) {
	            var start = event.start;
	            var end = event.end;
	            var eventStartTime = event._time("start");
	            var eventEndTime = event._time("end");
	            var startTime = getMilliseconds(this.startTime());
	            var endTime = getMilliseconds(this.endTime());
	            var adjustedStartDate = null;
	            var adjustedEndDate = null;
	            var occurrence;
	            var head = false;
	            var tail = false;

	            if (event.isAllDay) {
	                start = getDate(start);
	                eventStartTime = 0;

	                end = getDate(end);
	                eventEndTime = MS_PER_DAY;
	                adjustedEndDate = kendo.date.addDays(end, 1);
	            }

	            if (endTime === 0) {
	                endTime = MS_PER_DAY;
	            }

	            if (endTime <= startTime) {
	                if (eventStartTime < startTime && eventStartTime >= endTime) {
	                    adjustedStartDate = getDate(start);
	                    setTime(adjustedStartDate, startTime);
	                    tail = true;
	                }

	                if (eventEndTime > endTime && eventEndTime <= startTime) {
	                    adjustedEndDate = getDate(end);
	                    setTime(adjustedEndDate, endTime);
	                    head = true;
	                }
	            } else {
	                if (startTime > eventStartTime) {
	                    adjustedStartDate = getDate(start);
	                    setTime(adjustedStartDate, startTime);
	                    tail = true;
	                } else if (endTime <= eventStartTime) {
	                    adjustedStartDate = getDate(start);
	                    adjustedStartDate = kendo.date.addDays(adjustedStartDate, 1);
	                    setTime(adjustedStartDate, startTime);
	                    tail = true;
	                }

	                if (endTime < eventEndTime) {
	                    adjustedEndDate = getDate(end);
	                    setTime(adjustedEndDate, endTime);
	                    head = true;
	                } else if (startTime > eventEndTime) {
	                    adjustedEndDate = getDate(end);
	                    adjustedEndDate = kendo.date.addDays(adjustedEndDate,-1);
	                    setTime(adjustedEndDate, endTime);
	                    head = true;
	                }
	            }

	            occurrence = event.clone({
	                start: adjustedStartDate ? adjustedStartDate : start,
	                end: adjustedEndDate ? adjustedEndDate : end,
	                _startTime: adjustedStartDate ? kendo.date.toUtcTime(adjustedStartDate) : event._startTime,
	                _endTime:  adjustedEndDate ? kendo.date.toUtcTime(adjustedEndDate) : event._endTime,
	                isAllDay: false
	            });

	            return {
	                occurrence: occurrence,
	                head: head,
	                tail: tail
	            };
	        },

	        _renderEvents: function(events, groupIndex, eventGroup) {
	            var event;
	            var idx;
	            var length;

	            for (idx = 0, length = events.length; idx < length; idx++) {
	                event = events[idx];

	                if (this._isInDateSlot(event)) {
	                    var isMultiDayEvent = event.isAllDay || event.duration() >= MS_PER_DAY;
	                    var container = this.content;

	                    if (isMultiDayEvent || this._isInTimeSlot(event)) {
	                        var adjustedEvent = this._adjustEvent(event);
	                        var group = this.groups[groupIndex];

	                        if (!group._continuousEvents) {
	                            group._continuousEvents = [];
	                        }

	                        if (this._isInTimeSlot(adjustedEvent.occurrence)) {
	                            var ranges = group.slotRanges(adjustedEvent.occurrence, false);
	                            var range = ranges[0];
	                            var startIndex = range.start.index;
	                            var endIndex = range.end.index;

	                            this._groupedView._renderEvent(eventGroup, event, adjustedEvent, group, range, container, startIndex, endIndex);
	                        }
	                    }
	                }
	            }
	        },

	        addContinuousEvent: function(group, range, element, isAllDay) {
	            var events = group._continuousEvents;

	            events.push({
	                element: element,
	                isAllDay: isAllDay,
	                uid: element.attr(kendo.attr("uid")),
	                start: range.start,
	                end: range.end
	            });
	        },

	        _createEventElement: function(occurrence, event, head, tail) {
	            var template = this.eventTemplate;
	            var editable = this.options.editable;
	            var isMobile = this._isMobile();
	            var showDelete = editable && editable.destroy !== false && !isMobile;
	            var resizable = editable && editable.resize !== false;
	            var eventStartTime = event._time("start");
	            var eventEndTime = event._time("end");
	            var eventStartDate = event.start;
	            var eventEndDate = event.end;

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
	                head: head,
	                tail: tail,
	                singleDay: this._dates.length == 1,
	                resources: resources,
	                inverseColor: false,
	                messages: this.options.messages
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

	        _arrangeRows: function (eventObject, slotRange, eventGroup) {
	            var startIndex = slotRange.start.index;
	            var endIndex = slotRange.end.index;

	            var rect = eventObject.slotRange.innerRect(eventObject.start, eventObject.end, false);
	            var rectRight = rect.right + this.options.eventMinWidth;

	            var events = collidingEvents(slotRange.events(), rect.left, rectRight);

	            slotRange.addEvent({
	                slotIndex: startIndex,
	                start: startIndex,
	                end: endIndex,
	                rectLeft: rect.left,
	                rectRight: rectRight,
	                element: eventObject.element,
	                uid: eventObject.uid
	            });

	            events.push({
	                start: startIndex,
	                end: endIndex,
	                uid: eventObject.uid
	            });

	            var rows = SchedulerView.createRows(events);

	            if (eventGroup.maxRowCount < rows.length) {
	                eventGroup.maxRowCount = rows.length;
	            }

	            for (var idx = 0, length = rows.length; idx < length; idx++) {
	                var rowEvents = rows[idx].events;
	                for (var j = 0, eventLength = rowEvents.length; j < eventLength; j++) {
	                    eventGroup.events[rowEvents[j].uid].rowIndex = idx;
	                }
	            }
	        },

	        _groupCount: function() {
	            var resources = this.groupedResources;
	            var groupedView = this._groupedView;

	            if (resources.length) {
	                if (this._groupOrientation() === "vertical") {
	                    return groupedView._verticalCountForLevel(resources.length - 1);
	                } else {
	                    return groupedView._horizontalCountForLevel(resources.length - 1, this.columnLevels.length - 1);
	                }
	            }
	            return 1;
	        },

	        _updateEventForSelection: function(event) {
	            var adjustedEvent = this._adjustEvent(event.clone());
	            return adjustedEvent.occurrence;
	        },

	        _eventOptionsForMove: function(event) {
	            if (event.isAllDay) {
	                return { isAllDay: false };
	            }

	            return {};
	        },

	        _updateEventForResize: function(event) {
	            if (event.isAllDay) {
	                event.set("isAllDay", false);
	            }
	        },

	        _updateMoveHint: function(event, groupIndex, distance) {
	            var group = this.groups[groupIndex];

	            var clonedEvent = event.clone({ start: event.start, end: event.end});

	            var eventDuraton =  clonedEvent.duration();
	            clonedEvent.start = new Date(clonedEvent.start.getTime() + distance);
	            clonedEvent.end = new Date(+clonedEvent.start + eventDuraton);

	            this._removeMoveHint(event.uid);

	            if (this._isInDateSlot(clonedEvent)) {
	                if (clonedEvent.isAllDay || clonedEvent.duration() >= MS_PER_DAY || this._isInTimeSlot(clonedEvent)) {
	                    var adjustedEvent = this._adjustEvent(clonedEvent);
	                    var ranges = group.slotRanges(adjustedEvent.occurrence, false);

	                    for (var rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {
	                        this._groupedView._createMoveHint(ranges[rangeIndex], adjustedEvent);
	                    }
	                }
	            }
	        },

	       _appendMoveHint: function(hint) {
	            hint.appendTo(this.content);

	            this._moveHint = this._moveHint.add(hint);
	       },

	        _updateResizeHint: function(event, groupIndex, startTime, endTime) {
	            var group = this.groups[groupIndex];
	            var ranges = group.ranges(startTime, endTime, false, false);

	            this._removeResizeHint();

	            for (var rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {
	                var range = ranges[rangeIndex];
	                var start = range.startSlot();

	                var startRect = range.innerRect(startTime, endTime, false);
	                startRect.top = start.offsetTop;

	                var width = startRect.right - startRect.left;

	                if (width < 0) {
	                    for (var i = 0; i < range.events().length; i++) {
	                        if (range.events()[i].uid === event.uid) {
	                            width = range.events()[i].rectRight - startRect.left;
	                            break;
	                        }
	                    }
	                }

	                var height = range.endSlot().offsetTop + start.offsetHeight - startRect.top;

	                var left = this._adjustLeftPosition(startRect.left);

	                var hint = SchedulerView.fn._createResizeHint.call(this,
	                    left,
	                    startRect.top,
	                    width,
	                    height
	                );

	                this._resizeHint = this._resizeHint.add(hint);
	            }

	            var format = "t";
	            var container = this.content;

	            this._resizeHint.appendTo(container);

	            this._resizeHint.find(".k-label-top,.k-label-bottom").text("");

	            this._resizeHint.first().addClass("k-first").find(".k-label-top").text(kendo.toString(kendo.timezone.toLocalDate(startTime), format));

	            this._resizeHint.last().addClass("k-last").find(".k-label-bottom").text(kendo.toString(kendo.timezone.toLocalDate(endTime), format));
	        },

	        selectionByElement: function(cell) {
	            var offset = cell.offset();
	            return this._slotByPosition(offset.left, offset.top);
	        },

	        _updateDirection: function(selection, ranges, multiple, reverse, vertical) {

	            var startSlot = ranges[0].start;
	            var endSlot = ranges[ranges.length - 1].end;
	            if (multiple && !vertical) {
	                if (startSlot.index === endSlot.index &&
	                    startSlot.collectionIndex === endSlot.collectionIndex) {
	                    selection.backward = reverse;
	                }
	            }
	        },

	        _changeGroup: function(selection, previous) {
	            var method = previous ? "prevGroupSlot" : "nextGroupSlot";

	            var slot = this[method](selection.start, selection.groupIndex, false);

	            if (slot) {
	                selection.groupIndex += previous ? -1 : 1;
	            }

	            this._groupedView._changeGroup(selection, previous, slot);
	            return slot;
	        },

	        prevGroupSlot: function(date, groupIndex, isDay) {
	            var group = this.groups[groupIndex];
	            var slot = group.ranges(date, date, isDay, false)[0].start;

	            if (groupIndex <= 0) {
	                return;
	            }

	            return this._groupedView._prevGroupSlot(slot, group, isDay);
	        },

	        nextGroupSlot: function(date, groupIndex, isDay) {
	            var group = this.groups[groupIndex];
	            var slot = group.ranges(date, date, isDay, false)[0].start;

	            if (groupIndex >= this.groups.length - 1) {
	                return;
	            }

	            return this._groupedView._nextGroupSlot(slot, group, isDay);
	        },

	        _verticalSlots: function (selection, ranges, multiple, reverse) {
	            var groupedView = this._groupedView;
	            var method = groupedView._verticalMethod(reverse, multiple);
	            var startSlot = ranges[0].start;
	            var endSlot = ranges[ranges.length - 1].end;
	            var group = this.groups[selection.groupIndex];
	            var slot = groupedView._normalizeVerticalSelection(selection, ranges, reverse, multiple);

	            if (slot) {
	                startSlot = endSlot = slot;
	            }

	            startSlot = group[method](startSlot);
	            endSlot = group[method](endSlot);

	            if (!multiple && this._isVerticallyGrouped() && (!startSlot || !endSlot)) {
	                startSlot = endSlot = groupedView._verticalSlots(selection, reverse, slot);
	            }

	            return {
	                startSlot: startSlot,
	                endSlot: endSlot
	            };
	        },

	        _horizontalSlots: function (selection, ranges, multiple, reverse) {
	            var method = reverse ? "upSlot" : "downSlot";
	            var startSlot = ranges[0].start;
	            var endSlot = ranges[ranges.length - 1].end;
	            var group = this.groups[selection.groupIndex];
	            var result = {};

	            if (!multiple) {
	                result = this._groupedView._horizontalSlots(selection, group, method, startSlot, endSlot, multiple, reverse);
	            } else {
	                result.startSlot = group[method](startSlot);
	                result.endSlot = group[method](endSlot);

	                if (!multiple && this._isHorizontallyGrouped() && (!startSlot || !endSlot)) {
	                    result.startSlot = result.endSlot = this._changeGroup(selection, reverse);
	                }
	            }

	            return result;
	        },

	        _changeViewPeriod: function(selection, reverse) {
	            var date = reverse ? this.previousDate() : this.nextDate();
	            var start = selection.start;
	            var end = selection.end;
	            var newStart, newEnd;

	            newStart = new Date(date);
	            newEnd = new Date(date);

	            if(this._isInRange(newStart, newEnd)){
	                return false;
	            }
	            selection.start = newStart;
	            selection.end = newEnd;

	            if (this._isHorizontallyGrouped()) {
	               selection.groupIndex = reverse ? this.groups.length - 1 : 0;
	            }

	            var duration = end - start;

	            if (reverse) {
	                end = getMilliseconds(this.endTime());
	                end = end === 0 ? MS_PER_DAY : end;

	                setTime(selection.start, end-duration);
	                setTime(selection.end,  end);
	            } else {
	                start = getMilliseconds(this.startTime());

	                setTime(selection.start, start);
	                setTime(selection.end, start + duration);
	            }

	            selection.events = [];

	            return true;
	        },

	        move: function(selection, key, shift) {
	            var handled = false;
	            var group = this.groups[selection.groupIndex];
	            var keys = kendo.keys;
	            var groupedView = this._groupedView;
	            var ranges = group.ranges(selection.start, selection.end, false, false);
	            var startSlot, endSlot, reverse, slots;

	            if (key === keys.DOWN || key === keys.UP) {
	                handled = true;
	                reverse = key === keys.UP;

	                groupedView._updateDirection(selection, ranges, shift, reverse);

	                slots = this._verticalSlots(selection, ranges, shift, reverse);

	                if(groupedView._changeVerticalViewPeriod(slots, shift, selection, reverse)){
	                    return handled;
	                }
	            } else if (key === keys.LEFT || key === keys.RIGHT) {
	                handled = true;
	                reverse = key === keys.LEFT;

	                this._updateDirection(selection, ranges, shift, reverse, false);

	                slots = this._horizontalSlots(selection, ranges, shift, reverse);

	                if(groupedView._changeHorizontalViewPeriod(slots, shift, selection, reverse)){
	                     return handled;
	                }
	            }

	           if (handled) {
	               startSlot = slots.startSlot;
	               endSlot = slots.endSlot;

	               if (shift) {
	                   var backward = selection.backward;

	                   if (backward && startSlot) {
	                       selection.start = startSlot.startDate();
	                   } else if (!backward && endSlot) {
	                       selection.end = endSlot.endDate();
	                   }
	               } else if (startSlot && endSlot) {
	                   selection.start = startSlot.startDate();
	                   selection.end = endSlot.endDate();
	               }

	               selection.events = [];
	           }

	            return handled;
	        },

	        destroy: function() {
	            var that = this;

	            if (that.element) {
	                that.element.off(NS);
	            }

	            if (that.footer) {
	                that.footer.remove();
	            }

	            if (that._currentTimeUpdateTimer) {
	                clearInterval(that._currentTimeUpdateTimer);
	            }

	            SchedulerView.fn.destroy.call(this);

	            if (this._isMobile() && that.options.editable) {
	                if (that.options.editable.create !== false) {
	                    that._addUserEvents.destroy();
	                }

	                if (that.options.editable.update !== false) {
	                    that._editUserEvents.destroy();
	                }
	            }
	        },

	        _resourceBySlot: function(slot) {
	            var resources = this.groupedResources;
	            var result = {},
	            groupOptions = this.options.group;

	            if(resources.length && groupOptions.orientation === "horizontal" && groupOptions.date) {
	                var resourceIndex = slot.groupIndex,
	                    levels = this.columnLevels,
	                    groupLevel = levels[levels.length - 1],
	                    resource = resources[resources.length - 1],
	                    groupLevelMember = groupLevel[resourceIndex],
	                    passedChildren, numberOfChildren, j, i;

	                this._setResourceValue(groupLevelMember, resource, result);

	                for (j = levels.length - 2; j >= 3; j--) {
	                    groupLevel = levels[j];
	                    resource = resources[j - 3];
	                    passedChildren = 0;

	                    for (i = 0; i < groupLevel.length; i++) {
	                        groupLevelMember = groupLevel[i];
	                        numberOfChildren = groupLevelMember.columns.length;

	                        if(numberOfChildren > resourceIndex - passedChildren) {
	                            this._setResourceValue(groupLevelMember, resource, result);

	                            i = groupLevel.length;
	                        } else {
	                            passedChildren += numberOfChildren;
	                        }
	                    }
	                }

	                return result;
	            } else {
	                return SchedulerView.fn._resourceBySlot.call(this, slot);
	            }
	        }
	    });

	    extend(true, ui, {
	        TimelineView: TimelineView,
	        TimelineWeekView: TimelineView.extend({
	            options: {
	                name: "TimelineWeekView",
	                title: "Timeline Week",
	                selectedDateFormat: "{0:D} - {1:D}",
	                selectedShortDateFormat: "{0:d} - {1:d}",
	                selectedMobileDateFormat: "{0:MMM dd} - {1:dd}",
	                majorTick: 120
	            },
	            name: "timelineWeek",
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
	        TimelineWorkWeekView: TimelineView.extend({
	            options: {
	                name: "TimelineWorkWeekView",
	                title: "Timeline Work Week",
	                selectedDateFormat: "{0:D} - {1:D}",
	                selectedShortDateFormat: "{0:d} - {1:d}",
	                selectedMobileDateFormat: "{0:MMM dd} - {1:dd}",
	                majorTick: 120
	            },
	            name: "timelineWorkWeek",
	            nextDate: function() {
	                var weekStart = kendo.date.dayOfWeek(kendo.date.nextDay(this.endDate()), this.calendarInfo().firstDay, 1);

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
	        }),
	        TimelineMonthView: TimelineView.extend({
	            options: {
	                name: "TimelineMonthView",
	                title: "Timeline Month",
	                selectedDateFormat: "{0:D} - {1:D}",
	                selectedShortDateFormat: "{0:d} - {1:d}",
	                workDayStart: new Date(1980, 1, 1, 0, 0, 0),
	                workDayEnd: new Date(1980, 1, 1, 23, 59, 59),
	                footer: false,
	                majorTick: 1440,
	                minorTickCount: 1
	            },
	            name: "timelineMonth",
	            calculateDateRange: function() {
	                var selectedDate = this.options.date,
	                    start = kendo.date.firstDayOfMonth(selectedDate),
	                    end = kendo.date.lastDayOfMonth(selectedDate),
	                    idx, length,
	                    dates = [];

	                for (idx = 0, length = end.getDate(); idx < length; idx++) {
	                    dates.push(start);
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