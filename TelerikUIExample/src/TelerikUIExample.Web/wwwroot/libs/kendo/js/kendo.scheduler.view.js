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

	module.exports = __webpack_require__(1424);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1424:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "scheduler.view",
	    name: "Scheduler View",
	    category: "web",
	    description: "The Scheduler Common View",
	    depends: [ "core" ],
	    hidden: true
	};
	    kendo.ui.scheduler = {};
	/* jshint eqnull: true */
	(function($) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        getDate = kendo.date.getDate,
	        Widget = ui.Widget,
	        outerHeight = kendo._outerHeight,
	        keys = kendo.keys,
	        NS = ".kendoSchedulerView",
	        INVERSE_COLOR_CLASS = "k-event-inverse",
	        MIN_HORIZONTAL_SCROLL_SIZE = 1024,
	        math = Math;

	    function levels(values, key) {
	        var result = [];

	        function collect(depth, values) {
	            values = values[key];

	            if (values) {
	                var level = result[depth] = result[depth] || [];

	                for (var idx = 0; idx < values.length; idx++) {
	                    level.push(values[idx]);
	                    collect(depth + 1, values[idx]);
	                }
	            }
	        }

	        collect(0, values);

	        return result;
	    }

	    function table(tableRows, className) {
	        if (!tableRows.length) {
	            return "";
	        }

	        return '<table role="presentation" class="' + kendo.trim('k-scheduler-table ' + (className || "")) + '">' +
	               '<tr>' +
	                    tableRows.join("</tr><tr>") +
	               '</tr>' +
	               '</table>';
	    }

	    function allDayTable(tableRows, className) {
	        if (!tableRows.length) {
	            return "";
	        }

	        return "<div style='position:relative'>" + table(tableRows, className) + "</div>";
	    }

	    function timesHeader(columnLevelCount, allDaySlot, rowCount) {
	        var tableRows = [];

	        if (rowCount > 0) {
	            for (var idx = 0; idx < columnLevelCount; idx++) {
	                tableRows.push("<th>&#8203;</th>");
	            }
	        }

	        if (allDaySlot) {
	            tableRows.push('<th class="k-scheduler-times-all-day">' + allDaySlot.text + '</th>');
	        }

	        if (rowCount < 1) {
	           return $();
	        }

	        return $('<div class="k-scheduler-times">' + table(tableRows) + '</div>');
	    }

	    function content() {
	        return $(
	            '<div class="k-scheduler-content">' +
	                '<table role="presentation" class="k-scheduler-table"></table>' +
	            '</div>'
	        );
	    }
	    var HINT = '<div class="k-marquee k-scheduler-marquee">' +
	                    '<div class="k-marquee-color"></div>' +
	                    '<div class="k-marquee-text">' +
	                        '<div class="k-label-top"></div>' +
	                        '<div class="k-label-bottom"></div>' +
	                    '</div>' +
	                '</div>';


	    var ResourceView = kendo.Class.extend({
	        init: function(index, isRtl, enforceAllDaySlot) {
	            this._index = index;
	            this._timeSlotCollections = [];
	            this._daySlotCollections = [];
	            this._isRtl = isRtl;
	            this._enforceAllDaySlot = enforceAllDaySlot;
	        },

	        addTimeSlotCollection: function(startDate, endDate) {
	            return this._addCollection(startDate, endDate, this._timeSlotCollections);
	        },

	        addDaySlotCollection: function(startDate, endDate) {
	            return this._addCollection(startDate, endDate, this._daySlotCollections);
	        },

	        _addCollection: function(startDate, endDate, collections) {
	            var collection = new SlotCollection(startDate, endDate, this._index, collections.length);

	            collections.push(collection);

	            return collection;
	        },

	        timeSlotCollectionCount: function() {
	            return this._timeSlotCollections.length;
	        },

	        daySlotCollectionCount: function() {
	            return this._daySlotCollections.length;
	        },

	        daySlotByPosition: function(x, y, byDate) {
	            return this._slotByPosition(x, y, this._daySlotCollections, byDate);
	        },

	        timeSlotByPosition: function(x, y, byDate) {
	            return this._slotByPosition(x, y, this._timeSlotCollections, byDate);
	        },

	        _slotByPosition: function(x, y, collections, byDate) {
	           for (var collectionIndex = 0; collectionIndex < collections.length; collectionIndex++) {
	               var collection = collections[collectionIndex];

	               for (var slotIndex = 0; slotIndex < collection.count(); slotIndex++) {
	                   var slot = collection.at(slotIndex);
	                   var width = slot.offsetWidth;
	                   var height = slot.offsetHeight;
	                   var nextSlot;

	                   var horizontalEnd = slot.offsetLeft + width;
	                   var verticalEnd =  slot.offsetTop + height;

	                   if (!byDate) {
	                        nextSlot =  collection.at(slotIndex + 1);
	                   }

	                   if (nextSlot) {
	                       if (nextSlot.offsetLeft != slot.offsetLeft) {
	                           if (this._isRtl) {
	                               horizontalEnd = slot.offsetLeft + (slot.offsetLeft - nextSlot.offsetLeft);
	                           } else {
	                               horizontalEnd = nextSlot.offsetLeft;
	                           }
	                       } else {
	                           verticalEnd = nextSlot.offsetTop;
	                       }
	                   }

	                   if (x >= slot.offsetLeft && x < horizontalEnd &&
	                       y >= slot.offsetTop && y < verticalEnd) {
	                       return slot;
	                   }
	               }
	           }
	        },

	        refresh: function() {
	            var collectionIndex;

	            for (collectionIndex = 0; collectionIndex < this._daySlotCollections.length; collectionIndex++) {
	                this._daySlotCollections[collectionIndex].refresh();
	            }

	            for (collectionIndex = 0; collectionIndex < this._timeSlotCollections.length; collectionIndex++) {
	                this._timeSlotCollections[collectionIndex].refresh();
	            }
	        },

	        timeSlotRanges: function(startTime, endTime) {
	            var collections = this._timeSlotCollections;
	            var start = this._startSlot(startTime, collections);
	            var firstIndex, lastIndex;

	            if (!start.inRange && startTime >= start.slot.end) {
	                firstIndex = start.slot.collectionIndex + 1;
	                start = null;
	            }

	            var end = start;

	            if (startTime < endTime) {
	                end = this._endSlot(endTime, collections);
	            }

	            if (end && !end.inRange && endTime <= end.slot.start) {
	                lastIndex = end.slot.collectionIndex;

	                if(endTime === end.slot.start && ((start && lastIndex > start.slot.collectionIndex) || (lastIndex > firstIndex))) {
	                    lastIndex -= 1;
	                }

	                end = null;
	            }

	            if (start === null && end === null) {
	                if(endTime - startTime < kendo.date.MS_PER_DAY) {
	                    return [];
	                } else {
	                    start = {
	                        inRange: true,
	                        slot: collections[firstIndex].first()
	                    };

	                    end = {
	                        inRange: true,
	                        slot: collections[lastIndex].last()
	                    };
	                }
	            }

	            if (start === null) {
	                if (end.slot.end <= startTime) {
	                    return [];
	                }

	                start = {
	                    inRange: true,
	                    slot: (collections[firstIndex] || collections[end.slot.collectionIndex]).first()
	                };
	            }

	            if (end === null) {
	                if (start.slot.start >= endTime) {
	                    return [];
	                }

	                end = {
	                    inRange: true,
	                    slot: (collections[lastIndex] || collections[start.slot.collectionIndex]).last()
	                };
	            }

	            return this._continuousRange(TimeSlotRange, collections, start, end);
	        },

	        daySlotRanges: function(startTime, endTime, isAllDay) {
	            var collections = this._daySlotCollections;

	            var start = this._startSlot(startTime, collections, isAllDay);

	            if (!start.inRange && startTime >= start.slot.end) {
	                start = null;
	            }

	            var end = start;

	            if (startTime < endTime) {
	                end = this._endSlot(endTime, collections, isAllDay);
	            }

	            if (end && !end.inRange && endTime <= end.slot.start) {
	                end = null;
	            }

	            if (start === null && end === null) {
	                return [];
	            }

	            if (start === null) {
	                if (end.slot.end <= startTime) {
	                    return [];
	                }

	                do {
	                    startTime += kendo.date.MS_PER_DAY;
	                    start = this._startSlot(startTime, collections, isAllDay);
	                } while (!start.inRange && startTime >= start.slot.end);
	            }

	            if (end === null) {
	                if (start.slot.start >= endTime) {
	                    return [];
	                }

	                do {
	                    endTime -= kendo.date.MS_PER_DAY;
	                    end = this._endSlot(endTime, collections, isAllDay);
	                } while (!end.inRange && endTime <= end.slot.start);
	            }

	            return this._continuousRange(DaySlotRange, collections, start, end);
	        },

	        _continuousRange: function(range, collections, start, end) {
	            var startSlot = start.slot;
	            var endSlot = end.slot;

	            var startIndex = startSlot.collectionIndex;
	            var endIndex = endSlot.collectionIndex;

	            var ranges = [];

	            for (var collectionIndex = startIndex; collectionIndex <= endIndex; collectionIndex++) {
	                var collection = collections[collectionIndex];

	                var first = collection.first();
	                var last = collection.last();
	                var head = false;
	                var tail = false;

	                if (collectionIndex == startIndex) {
	                    tail = !start.inRange;
	                }

	                if (collectionIndex == endIndex) {
	                    head = !end.inRange;
	                }

	                if (first.start < startSlot.start) {
	                    first = startSlot;
	                }

	                if (last.start > endSlot.start) {
	                    last = endSlot;
	                }

	                if (startIndex < endIndex) {
	                    if (collectionIndex == startIndex) {
	                        head = true;
	                    } else if (collectionIndex == endIndex) {
	                        tail = true;
	                    } else {
	                        head = tail = true;
	                    }
	                }

	                ranges.push(new range({
	                    start: first,
	                    end: last,
	                    collection: collection,
	                    head: head,
	                    tail: tail
	                }));
	            }

	            return ranges;
	        },

	        slotRanges: function(event, isDay) {
	            var startTime = event._startTime || kendo.date.toUtcTime(event.start);
	            var endTime = event._endTime || kendo.date.toUtcTime(event.end);

	            if (isDay === undefined) {
	                if(this._enforceAllDaySlot) {
	                    isDay = event.isMultiDay();
	                } else {
	                    isDay = event.isAllDay;
	                }
	            }

	            if (isDay) {
	                return this.daySlotRanges(startTime, endTime, event.isAllDay);
	            }

	            return this.timeSlotRanges(startTime, endTime);
	        },

	        ranges: function(startTime, endTime, isDay, isAllDay) {
	            if (typeof startTime != "number") {
	                startTime = kendo.date.toUtcTime(startTime);
	            }

	            if (typeof endTime != "number") {
	                endTime = kendo.date.toUtcTime(endTime);
	            }

	            if (isDay) {
	                return this.daySlotRanges(startTime, endTime, isAllDay);
	            }

	            return this.timeSlotRanges(startTime, endTime);
	        },

	        _startCollection: function(date, collections) {
	            for (var collectionIndex = 0; collectionIndex < collections.length; collectionIndex++) {
	                var collection = collections[collectionIndex];

	                if (collection.startInRange(date)) {
	                    return collection;
	                }
	            }

	            return null;
	        },

	        _endCollection: function(date, collections, isAllDay) {
	            for (var collectionIndex = 0; collectionIndex < collections.length; collectionIndex++) {
	                var collection = collections[collectionIndex];

	                if (collection.endInRange(date, isAllDay)) {
	                    return collection;
	                }
	            }

	            return null;
	        },

	        _getCollections: function(isDay) {
	            return isDay ? this._daySlotCollections : this._timeSlotCollections;
	        },

	        continuousSlot: function(slot, reverse) {
	            var pad = reverse ? -1 : 1;
	            var collections = this._getCollections(slot.isDaySlot);
	            var collection = collections[slot.collectionIndex + pad];

	            return collection ? collection[reverse ? "last" : "first"]() : undefined;
	        },

	        firstSlot: function() {
	            var collections = this._getCollections(this.daySlotCollectionCount());

	            return collections[0].first();
	        },

	        lastSlot: function() {
	            var collections = this._getCollections(this.daySlotCollectionCount());

	            return collections[collections.length - 1].last();
	        },

	        upSlot: function(slot, keepCollection, groupByDateVertically) {
	            var that = this;
	            var moveToDaySlot = function(isDaySlot, collectionIndex, index) {
	                var isFirstCell = index === 0;

	                if (!keepCollection && !isDaySlot && isFirstCell && that.daySlotCollectionCount()) {
	                    return that._daySlotCollections[0].at(collectionIndex);
	                }
	            };

	            if (!this.timeSlotCollectionCount()) {
	                keepCollection = true;
	            }

	            return this._verticalSlot(slot, -1, moveToDaySlot, groupByDateVertically);
	        },

	        downSlot: function(slot, keepCollection, groupByDateVertically) {
	            var that = this;
	            var moveToTimeSlot = function(isDaySlot, collectionIndex, index) {
	                if (!keepCollection && isDaySlot && that.timeSlotCollectionCount()) {
	                    return that._timeSlotCollections[index].at(0);
	                }
	            };

	            if (!this.timeSlotCollectionCount()) {
	                keepCollection = true;
	            }

	            return this._verticalSlot(slot, 1, moveToTimeSlot, groupByDateVertically);
	        },

	        leftSlot: function(slot, groupByDateVertically) {
	            return this._horizontalSlot(slot, -1, groupByDateVertically);
	        },

	        rightSlot: function(slot, groupByDateVertically) {
	            return this._horizontalSlot(slot, 1, groupByDateVertically);
	        },

	        _horizontalSlot: function(slot, step, groupByDateVertically) {
	            var index = slot.index;
	            var isDaySlot = slot.isDaySlot;
	            var collectionIndex = slot.collectionIndex;
	            var collections = this._getCollections(isDaySlot);

	            isDaySlot = groupByDateVertically ? false : isDaySlot;

	            if (isDaySlot) {
	                index += step;
	            } else {
	                collectionIndex += step;
	            }

	            var collection = collections[collectionIndex];

	            return collection ? collection.at(index) : undefined;
	        },

	        _verticalSlot: function(slot, step, swapCollection, groupByDateVertically) {
	            var index = slot.index;
	            var isDaySlot = slot.isDaySlot;
	            var collectionIndex = slot.collectionIndex;
	            var collections = this._getCollections(isDaySlot);

	            slot = swapCollection(isDaySlot, collectionIndex, index);
	            if (slot) {
	                return slot;
	            }

	            isDaySlot = groupByDateVertically ? false : isDaySlot;

	            if (isDaySlot) {
	                collectionIndex += step;
	            } else {
	                index += step;
	            }

	            var collection = collections[collectionIndex];

	            return collection ? collection.at(index) : undefined;
	        },

	        _collection: function(index, multiday) {
	            var collections = multiday? this._daySlotCollections : this._timeSlotCollections;

	            return collections[index];
	        },

	        _startSlot: function(time, collections, isAllDay) {
	            var collection = this._startCollection(time, collections);
	            var inRange = true;
	            var index = 0;

	            if (!collection) {
	                collection = collections[index];

	                while(index < collections.length - 1 && collection._start < time) {
	                    index++;
	                    collection = collections[index];
	                }

	                inRange = false;
	            }

	            var slot = collection.slotByStartDate(time, isAllDay);

	            if (!slot) {
	                slot = collection.first();
	                inRange = false;
	            }

	            return {
	                slot: slot,
	                inRange: inRange
	            };
	        },

	        _endSlot: function(time, collections, isAllDay) {
	            var collection = this._endCollection(time, collections, isAllDay);
	            var inRange = true;
	            var index = collections.length - 1;

	            if (!collection) {
	                collection = collections[index];

	                while(index > 0 && collection._start > time) {
	                    index--;
	                    collection = collections[index];
	                }

	                inRange = false;
	            }

	            var slot = collection.slotByEndDate(time, isAllDay);

	            if (!slot) {
	                if(time <= collection.first().start) {
	                    slot = collection.first();
	                } else {
	                    slot = collection.last();
	                }

	                inRange = false;
	            }

	            return {
	                slot: slot,
	                inRange: inRange
	            };
	        },

	        getSlotCollection: function(index, isDay) {
	            return this[isDay ? "getDaySlotCollection" : "getTimeSlotCollection"](index);
	        },

	        getTimeSlotCollection: function(index) {
	            return this._timeSlotCollections[index];
	        },

	        getDaySlotCollection: function(index) {
	            return this._daySlotCollections[index];
	        }
	    });

	    var SlotRange = kendo.Class.extend({
	        init: function(options) {
	            $.extend(this, options);
	        },

	        innerHeight: function() {
	            var collection = this.collection;

	            var startIndex = this.start.index;

	            var endIndex = this.end.index;

	            var result = 0;

	            for (var slotIndex = startIndex; slotIndex <= endIndex; slotIndex++) {
	               result += collection.at(slotIndex).offsetHeight;
	            }

	            return result;
	        },

	        events: function () {
	            return this.collection.events();
	        },

	        addEvent: function(event) {
	            this.events().push(event);
	        },

	        startSlot: function() {
	            if (this.start.offsetLeft > this.end.offsetLeft) {
	                return this.end;
	            }
	            return this.start;
	        },

	        endSlot: function() {
	            if (this.start.offsetLeft > this.end.offsetLeft) {
	                return this.start;
	            }
	            return this.end;
	        }
	    });

	    var TimeSlotRange = SlotRange.extend({
	        innerHeight: function() {
	            var collection = this.collection;

	            var startIndex = this.start.index;

	            var endIndex = this.end.index;

	            var result = 0;

	            for (var slotIndex = startIndex; slotIndex <= endIndex; slotIndex++) {
	               result += collection.at(slotIndex).offsetHeight;
	            }

	            return result;
	        },

	        outerRect: function(start, end, snap) {
	            return this._rect("offset", start, end, snap);
	        },

	        _rect: function(property, start, end, snap) {
	            var top;
	            var bottom;
	            var left;
	            var right;
	            var startSlot = this.start;
	            var endSlot = this.end;
	            var isRtl = kendo.support.isRtl(startSlot.element);

	            if (typeof start != "number") {
	                start = kendo.date.toUtcTime(start);
	            }

	            if (typeof end != "number") {
	                end = kendo.date.toUtcTime(end);
	            }

	            if (snap) {
	                top = startSlot.offsetTop;
	                bottom = endSlot.offsetTop + endSlot[property + "Height"];
	                if(isRtl) {
	                    left = endSlot.offsetLeft;
	                    right = startSlot.offsetLeft + startSlot[property + "Width"];
	                } else {
	                    left = startSlot.offsetLeft;
	                    right = endSlot.offsetLeft + endSlot[property + "Width"];
	                }
	            } else {
	                var startOffset = start - startSlot.start;

	                if (startOffset < 0) {
	                    startOffset = 0;
	                }

	                var startSlotDuration = startSlot.end - startSlot.start;

	                top = startSlot.offsetTop + startSlot[property + "Height"] * startOffset / startSlotDuration;

	                var endOffset = endSlot.end - end;

	                if (endOffset < 0) {
	                    endOffset = 0;
	                }

	                var endSlotDuration = endSlot.end - endSlot.start;

	                bottom = endSlot.offsetTop + endSlot[property + "Height"] - endSlot[property + "Height"] * endOffset / endSlotDuration;

	                if(isRtl) {
	                    left = Math.round(endSlot.offsetLeft + endSlot[property + "Width"]* endOffset / endSlotDuration);
	                    right = Math.round(startSlot.offsetLeft + startSlot[property + "Width"] - startSlot[property + "Width"] * startOffset / startSlotDuration);
	                } else {
	                    left = Math.round(startSlot.offsetLeft + startSlot[property + "Width"] * startOffset / startSlotDuration);
	                    right = Math.round(endSlot.offsetLeft + endSlot[property + "Width"] - endSlot[property + "Width"] * endOffset / endSlotDuration);
	                }
	            }

	            return {
	                top: top,
	                bottom: bottom,
	                //first column has no left border
	                left: left === 0 ? left : left + 1,
	                right: right
	            };
	        },

	        innerRect: function(start, end, snap) {
	            return this._rect("client", start, end, snap);
	        }
	    });

	    var DaySlotRange = SlotRange.extend({
	        innerWidth: function() {
	            var collection = this.collection;

	            var startIndex = this.start.index;

	            var endIndex = this.end.index;

	            var result = 0;

	            var width = startIndex !== endIndex ? "offsetWidth" : "clientWidth";

	            for (var slotIndex = startIndex; slotIndex <= endIndex; slotIndex++) {
	               result += collection.at(slotIndex)[width];
	            }

	            return result;
	        }
	    });

	    var SlotCollection = kendo.Class.extend({
	        init: function(startDate, endDate, groupIndex, collectionIndex) {
	            this._slots = [];

	            this._events = [];

	            this._start = kendo.date.toUtcTime(startDate);

	            this._end = kendo.date.toUtcTime(endDate);

	            this._groupIndex = groupIndex;

	            this._collectionIndex = collectionIndex;
	        },
	        refresh: function() {
	            for (var slotIndex = 0; slotIndex < this._slots.length; slotIndex++) {
	                this._slots[slotIndex].refresh();
	            }
	        },

	        startInRange: function(date) {
	            return this._start <= date && date < this._end;
	        },

	        endInRange: function(date, isAllDay) {
	            var end = isAllDay ? date < this._end : date <= this._end;
	            return this._start <= date && end;
	        },

	        slotByStartDate: function(date) {
	            var time = date;

	            if (typeof time != "number") {
	                time = kendo.date.toUtcTime(date);
	            }

	            for (var slotIndex = 0; slotIndex < this._slots.length; slotIndex++) {
	                var slot = this._slots[slotIndex];

	                if (slot.startInRange(time)) {
	                    return slot;
	                }
	            }

	            return null;
	        },

	        slotByEndDate: function(date, allday) {
	            var time = date;

	            if (typeof time != "number") {
	                time = kendo.date.toUtcTime(date);
	            }

	            if (allday) {
	                return this.slotByStartDate(date, false);
	            }

	            for (var slotIndex = 0; slotIndex < this._slots.length; slotIndex++) {
	                var slot = this._slots[slotIndex];

	                if (slot.endInRange(time)) {
	                    return slot;
	                }
	            }

	            return null;
	        },

	        count: function() {
	            return this._slots.length;
	        },
	        events: function() {
	            return this._events;
	        },
	        addTimeSlot: function(element, start, end, isHorizontal) {
	            var slot = new TimeSlot(element, start, end, this._groupIndex, this._collectionIndex, this._slots.length, isHorizontal);

	            this._slots.push(slot);
	        },
	        addDaySlot: function(element, start, end, eventCount) {
	            var slot = new DaySlot(element, start, end, this._groupIndex, this._collectionIndex, this._slots.length, eventCount);

	            this._slots.push(slot);
	        },
	        first: function() {
	            return this._slots[0];
	        },
	        last: function() {
	            return this._slots[this._slots.length - 1];
	        },
	        at: function(index) {
	            return this._slots[index];
	        }
	    });

	    var Slot = kendo.Class.extend({
	        init: function(element, start, end, groupIndex, collectionIndex, index) {
	            this.element = element;
	            this.clientWidth = element.clientWidth;
	            this.clientHeight = element.clientHeight;
	            this.offsetWidth = element.offsetWidth;
	            this.offsetHeight = element.offsetHeight;
	            this.offsetTop = element.offsetTop;
	            this.offsetLeft = element.offsetLeft;

	            this.start = start;
	            this.end = end;
	            this.element = element;
	            this.groupIndex = groupIndex;
	            this.collectionIndex = collectionIndex;
	            this.index = index;
	            this.isDaySlot = false;
	        },

	        refresh: function() {
	            var element = this.element;

	            this.clientWidth = element.clientWidth;
	            this.clientHeight = element.clientHeight;
	            this.offsetWidth = element.offsetWidth;
	            this.offsetHeight = element.offsetHeight;
	            this.offsetTop = element.offsetTop;
	            this.offsetLeft = element.offsetLeft;
	        },

	        startDate: function() {
	            return kendo.timezone.toLocalDate(this.start);
	        },

	        endDate: function() {
	            return kendo.timezone.toLocalDate(this.end);
	        },

	        startInRange: function(date) {
	            return this.start <= date && date < this.end;
	        },

	        endInRange: function(date) {
	            return this.start < date && date <= this.end;
	        },

	        startOffset: function() {
	           return this.start;
	        },

	        endOffset: function() {
	            return this.end;
	        }
	    });

	    var TimeSlot = Slot.extend({
	        init: function(element, start, end, groupIndex, collectionIndex, index, isHorizontal) {
	            Slot.fn.init.apply(this, arguments);

	            this.isHorizontal = isHorizontal ? true : false;
	        },

	        offsetX: function(rtl, offset) {
	            if (rtl) {
	                return this.offsetLeft + offset;
	            } else {
	                return this.offsetLeft + offset;
	            }
	        },

	        startInRange: function(date) {
	            return this.start <= date && date < this.end;
	        },

	        endInRange: function(date) {
	            return this.start < date && date <= this.end;
	        },

	        startOffset: function(x, y, snap) {
	            if (snap) {
	                return this.start;
	            }

	            var offset = $(this.element).offset();

	            var duration = this.end - this.start;
	            var difference;
	            var time;

	            if (this.isHorizontal) {
	                //need update
	                var isRtl = kendo.support.isRtl(this.element);
	                difference =  x - offset.left;
	                time = Math.floor(duration * ( difference / this.offsetWidth));

	                if (isRtl) {
	                    return this.start + duration - time;
	                }
	            } else {
	                difference = y - offset.top;
	                time = Math.floor(duration * ( difference / this.offsetHeight));
	            }

	            return this.start + time;
	        },

	        endOffset: function(x, y, snap) {
	            if (snap) {
	                return this.end;
	            }

	            var offset = $(this.element).offset();

	            var duration = this.end - this.start;
	            var difference;
	            var time;

	            if (this.isHorizontal) {
	                //need update
	                var isRtl = kendo.support.isRtl(this.element);
	                difference = x - offset.left;
	                time = Math.floor(duration * ( difference / this.offsetWidth));

	                if (isRtl) {
	                    return this.start + duration - time;
	                }
	            } else {
	                difference = y - offset.top;
	                time = Math.floor(duration * ( difference / this.offsetHeight));
	            }

	            return this.start + time;
	        }
	    });

	    var DaySlot = Slot.extend({
	        init: function(element, start, end, groupIndex, collectionIndex, index, eventCount) {
	            Slot.fn.init.apply(this, arguments);

	            this.eventCount = eventCount;
	            this.isDaySlot = true;

	            if (this.element.children.length) {
	                var firstChild = this.element.children[0];

	                this.firstChildHeight = firstChild.offsetHeight;
	                this.firstChildTop = firstChild.offsetTop;
	            } else {
	                this.firstChildHeight = 3;
	                this.firstChildTop = 0;
	            }
	        },

	        startDate: function() {
	            var date = new Date(this.start);

	            return kendo.timezone.apply(date, "Etc/UTC");
	        },

	        endDate: function() {
	            var date = new Date(this.end);

	            return kendo.timezone.apply(date, "Etc/UTC");
	        },

	        startInRange: function(date) {
	            return this.start <= date && date < this.end;
	        },

	        endInRange: function(date) {
	            return this.start < date && date <= this.end;
	        }
	    });

	    var scrollbarWidth;
	    function scrollbar() {
	        scrollbarWidth = scrollbarWidth ? scrollbarWidth : kendo.support.scrollbar();
	        return scrollbarWidth;
	    }

	    kendo.ui.SchedulerView = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);

	            this._normalizeOptions();
	            this._scrollbar = scrollbar();
	            this._isRtl = kendo.support.isRtl(element);
	            this._resizeHint = $();
	            this._moveHint = $();
	            this._cellId = kendo.guid();
	            this._resourcesForGroups();
	            this._selectedSlots = [];
	        },

	        visibleEndDate: function () {
	            return this.endDate();
	        },

	        _normalizeOptions: function() {
	            var options = this.options;

	            if (options.startTime) {
	                options.startTime.setMilliseconds(0);
	            }

	            if (options.endTime) {
	                options.endTime.setMilliseconds(0);
	            }

	            if (options.workDayStart) {
	                options.workDayStart.setMilliseconds(0);
	            }

	            if (options.workDayEnd) {
	                options.workDayEnd.setMilliseconds(0);
	            }
	        },

	        _isMobile: function() {
	            var options = this.options;
	            return (options.mobile === true && kendo.support.mobileOS) || options.mobile === "phone" || options.mobile === "tablet";
	        },

	        _addResourceView: function() {
	            var resourceView = new ResourceView(this.groups.length, this._isRtl, this.options.enforceAllDaySlot);

	            this.groups.push(resourceView);

	            return resourceView;
	        },

	        dateForTitle: function() {
	            return kendo.format(this.options.selectedDateFormat, this.startDate(), this.endDate());
	        },

	        shortDateForTitle: function() {
	            return kendo.format(this.options.selectedShortDateFormat, this.startDate(), this.endDate());
	        },

	        mobileDateForTitle: function () {
	            return kendo.format(this.options.selectedMobileDateFormat || this.options.selectedShortDateFormat, this.startDate(), this.endDate());
	        },

	        _changeGroup: function(selection, previous) {
	            var method = previous ? "prevGroupSlot" : "nextGroupSlot";
	            var slot = this[method](selection.start, selection.groupIndex, selection.isAllDay);

	            if (slot) {
	                selection.groupIndex += previous ? -1 : 1;
	            }

	            if (this._isGroupedByDate() && !slot) {
	               selection.groupIndex = previous ? this.groups.length - 1 : 0;
	            }

	            return slot;
	        },

	        _changeDate: function(selection, slot, previous) {
	            var group = this.groups[selection.groupIndex];
	            var collections, index;

	            if (previous) {
	                  collections = group._getCollections(false);
	                  index = group.daySlotCollectionCount() ? slot.index - 1 : slot.collectionIndex - 1;

	                  if (index >= 0) {
	                      return  collections[index]._slots[collections[index]._slots.length - 1];
	                  }
	              } else {
	                  collections = group._getCollections(group.daySlotCollectionCount());
	                  index = group.daySlotCollectionCount() ? 0 : slot.collectionIndex + 1;
	                  var slotIndex = group.daySlotCollectionCount() ? slot.collectionIndex + 1 : 0;

	                  if (collections[index] && collections[index]._slots[slotIndex]) {
	                      return  collections[index]._slots[slotIndex];
	                  }
	               }
	        },

	        _changeGroupContinuously: function() {
	            return null;
	        },

	        _changeViewPeriod: function() {
	            return false;
	        },

	        _isInRange: function(newStart, newEnd) {
	            if(!newStart || !newEnd || !this.options.min || !this.options.max){
	                return false;
	            }
	            return getDate(newStart) <= getDate(this.options.min) || getDate(newEnd) >= getDate(this.options.max);
	        },

	        _horizontalSlots: function(selection, ranges, multiple, reverse) {
	            var method = reverse ? "leftSlot" : "rightSlot";
	            var horizontalRange = {
	                 startSlot: ranges[0].start,
	                 endSlot: ranges[ranges.length - 1].end
	             };
	            var group = this.groups[selection.groupIndex];
	            var isVertical = this._isVerticallyGrouped();

	            if (!multiple) {
	                var slot = this._normalizeHorizontalSelection(selection, ranges, reverse);
	                if (slot) {
	                    horizontalRange.startSlot = horizontalRange.endSlot = slot;
	                }
	            }

	            if (this._isGroupedByDate() && !multiple) {
	                  var tempSlot = this._changeGroup(selection, reverse);

	                  if(!tempSlot)
	                  {
	                    horizontalRange = this._getNextHorizontalRange(group, method, horizontalRange);
	                  } else {
	                      horizontalRange.startSlot = horizontalRange.endSlot = tempSlot;
	                  }
	            } else {
	                  horizontalRange.startSlot = group[method](horizontalRange.startSlot);
	                  horizontalRange.endSlot = group[method](horizontalRange.endSlot);

	                  if (!multiple && !isVertical && (!horizontalRange.startSlot || !horizontalRange.endSlot)) {
	                        horizontalRange.startSlot = horizontalRange.endSlot = this._changeGroup(selection, reverse);
	                  }
	            }

	            var continuousSlot;

	            if ((!horizontalRange.startSlot || !horizontalRange.endSlot) && !this._isGroupedByDate()) {
	                continuousSlot = this._continuousSlot(selection, ranges, reverse);
	                continuousSlot = this._changeGroupContinuously(selection, continuousSlot, multiple, reverse);

	                if (continuousSlot) {
	                    horizontalRange.startSlot = horizontalRange.endSlot = continuousSlot;
	                }
	            }

	            return horizontalRange;
	        },

	         _getNextHorizontalRange: function(group, method, horizontalRange){
	            if(!this._isVerticallyGrouped()){
	                horizontalRange.startSlot = group[method](horizontalRange.startSlot);
	                horizontalRange.endSlot = group[method](horizontalRange.endSlot);
	            }

	             return horizontalRange;
	        },

	        _verticalSlots: function(selection, ranges, multiple, reverse) {
	            var group = this.groups[selection.groupIndex];
	            var slot;
	            var verticalRange = {
	                startSlot: ranges[0].start,
	                endSlot: ranges[ranges.length - 1].end
	            };

	            if (!multiple) {
	                slot = this._normalizeVerticalSelection(selection, ranges, reverse);
	                if (slot) {
	                    verticalRange.startSlot = verticalRange.endSlot = slot;
	                }
	            }

	            var method = reverse ? "upSlot" : "downSlot";

	            verticalRange = this._getNextVerticalRange(group, method, verticalRange, multiple);

	            if (!multiple && this._isVerticallyGrouped() && (!verticalRange.startSlot || !verticalRange.endSlot)) {
	                if (this._isGroupedByDate()) {
	                    verticalRange.startSlot = verticalRange.endSlot = this._changeDate(selection, slot, reverse);

	               }else{
	                    verticalRange.startSlot = verticalRange.endSlot = this._changeGroup(selection, reverse);
	               }
	            }

	            return verticalRange;
	        },

	        _getNextVerticalRange: function(group, method, verticalRange, multiple){
	             verticalRange.startSlot = group[method](verticalRange.startSlot, multiple);
	             verticalRange.endSlot = group[method](verticalRange.endSlot, multiple);

	             return verticalRange;
	        },

	        _normalizeHorizontalSelection: function() {
	            return null;
	        },

	        _normalizeVerticalSelection: function(selection, ranges, reverse) {
	            var slot;

	            if (reverse) {
	                slot = ranges[0].start;
	            } else {
	                slot = ranges[ranges.length - 1].end;
	            }

	            return slot;
	        },

	        _continuousSlot: function() {
	            return null;
	        },

	        _footer: function() {
	            var that = this;
	            var options = that.options;

	            if (that._isMobile()) {
	                var html = '<div class="k-scheduler-footer k-toolbar">';
	                html += '<span class="k-scheduler-today"><a href="#" class="k-link">';
	                html += options.messages.today + '</a></span>';
	                html += "</div>";
	                that.footer = $(html).appendTo(that.element);
	            }

	            if(that.footer) {
	                that.footer.on("click" + NS, ".k-scheduler-today", function(e) {
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

	        constrainSelection: function(selection) {
	            var group = this.groups[0];
	            var slot;

	            if (!this.inRange(selection)) {
	               slot = group.firstSlot();

	               selection.isAllDay = slot.isDaySlot;
	               selection.start = slot.startDate();
	               selection.end = slot.endDate();
	            } else {
	                if (!group.daySlotCollectionCount()) {
	                    selection.isAllDay = false;
	                } else if (!group.timeSlotCollectionCount()) {
	                    selection.isAllDay = true;
	                }
	           }

	            if (!this.groups[selection.groupIndex]) {
	                selection.groupIndex = 0;
	            }
	        },

	        move: function(selection, key, shift) {
	            var handled = false;
	            var group = this.groups[selection.groupIndex];
	            var verticalByDate = this._isGroupedByDate()  && this._isVerticallyGrouped();

	            if (!group.timeSlotCollectionCount()) {
	                selection.isAllDay = true;
	            }

	            var ranges = group.ranges(selection.start, selection.end, selection.isAllDay, false);
	            var startSlot, endSlot, reverse, slots;

	            if (key === keys.DOWN || key === keys.UP) {
	                handled = true;
	                reverse = key === keys.UP;

	                this._updateDirection(selection, ranges, shift, reverse, true);

	                slots = this._verticalSlots(selection, ranges, shift, reverse);

	                if (!slots.startSlot && !shift && this._changeViewPeriod(selection, reverse, !verticalByDate)) {
	                    return handled;
	                }

	            } else if (key === keys.LEFT || key === keys.RIGHT) {
	                handled = true;
	                reverse = key === keys.LEFT;

	                this._updateDirection(selection, ranges, shift, reverse, false);

	                slots = this._horizontalSlots(selection, ranges, shift, reverse);

	                if (!slots.startSlot && !shift && this._changeViewPeriod(selection, reverse, verticalByDate)) {
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
	                    selection.isAllDay = startSlot.isDaySlot;
	                    selection.start = startSlot.startDate();
	                    selection.end = endSlot.endDate();
	                }

	                selection.events = [];
	            }

	            return handled;
	        },

	        moveToEventInGroup: function(group, slot, selectedEvents, prev) {
	            var events = group._continuousEvents || [];

	            var found, event;

	            var pad = prev ? -1 : 1;

	            var length = events.length;
	            var idx = prev ? length - 1 : 0;

	            if (selectedEvents.length) {
	                var lastSelected = selectedEvents[selectedEvents.length - 1];

	                for (var i = 0; i < events.length; i++) {
	                    if (events[i].uid === lastSelected) {
	                        idx = i + pad;
	                    }
	                }
	            }

	            while (idx < length && idx > -1) {
	                event = events[idx];

	                if ( (!prev && event.start.startDate() >= slot.startDate()) ||
	                    (prev && event.start.startDate() <= slot.startDate()) ) {

	                    if (event && $.inArray(event.uid, selectedEvents) === -1) {
	                        found = !!event;
	                        break;
	                    }
	                }

	                idx += pad;
	            }

	            return event;
	        },

	        moveToEvent: function(selection, prev) {
	            var groupIndex = selection.groupIndex;

	            var group = this.groups[groupIndex];
	            var slot = group.ranges(selection.start, selection.end, selection.isAllDay, false)[0].start;

	            var length = this.groups.length;
	            var pad = prev ? -1 : 1;
	            var events = selection.events;
	            var event;

	            if (this._isGroupedByDate()) {
	                var allEvents = this._getAllEvents();
	                var uniqueAllEvents = this._getUniqueEvents(allEvents);
	                var sortedEvents = this._getSortedEvents(uniqueAllEvents);

	                if(events.length === 0){
	                    var eventIndex = this._getNextEventIndexBySlot(slot, sortedEvents, groupIndex);

	                    if(prev){
	                        eventIndex--;
	                    }

	                    event = sortedEvents[eventIndex];
	                } else{
	                     var idx = this._getStartIdx(events, sortedEvents);

	                    while (idx < sortedEvents.length && idx > -1) {
	                        if(events.length > 0){
	                            slot = this._getSelectedSlot(slot, sortedEvents, event, idx, pad, prev);
	                        }

	                        if(!slot){
	                            break;
	                        }

	                        if ( (!prev && sortedEvents[idx].start.startDate() >= slot.startDate()) ||
	                              (prev && sortedEvents[idx].start.startDate() <= slot.startDate())) {
	                             if (events[0] != sortedEvents[idx].uid) {
	                                 event = sortedEvents[idx];
	                                  break;
	                             }
	                        }
	                        idx += pad;
	                    }
	                }
	            } else {
	                  while (groupIndex < length && groupIndex > -1) {
	                    event = this.moveToEventInGroup(group, slot, events, prev);

	                    groupIndex += pad;
	                    group = this.groups[groupIndex];

	                    if (!group || event) {
	                        break;
	                    }

	                    events = [];
	                    if (prev) {
	                        slot = group.lastSlot();
	                    } else {
	                        slot = group.firstSlot(true);
	                    }
	                }
	            }

	            if (event) {
	                selection.events = [ event.uid ];
	                selection.start = event.start.startDate();
	                selection.end = event.end.endDate();
	                selection.isAllDay = event.start.isDaySlot;
	                selection.groupIndex = event.start.groupIndex;
	            }

	            return !!event;
	        },

	        current: function(candidate) {
	            if (candidate !== undefined) {
	                this._current = candidate;
	                if (this.content.has(candidate)) {
	                    this._scrollTo(candidate, this.content[0]);
	                }
	            } else {
	                return this._current;
	            }
	        },

	        select: function(selection) {
	            this.clearSelection();

	            if (!this._selectEvents(selection)) {
	                this._selectSlots(selection);
	            }
	        },

	        _getNextEventIndexBySlot: function(slot, sortedEvents, groupIndex){
	            var tempIndex = 0;
	            var slotStartDate = kendo.date.getDate(slot.startDate());

	            for (var i = 0; i < sortedEvents.length; i++) {
	                var eventStartDate = kendo.date.getDate(sortedEvents[i].start.startDate());
	                if (slotStartDate > eventStartDate) {
	                    tempIndex++;
	                    continue;
	                }

	                if (slotStartDate.getTime() === eventStartDate.getTime() && groupIndex > sortedEvents[i].start.groupIndex) {
	                      tempIndex++;
	                      continue;
	                }

	                if (slotStartDate.getTime() === eventStartDate.getTime() &&
	                    groupIndex >= sortedEvents[i].start.groupIndex &&
	                    slot.startDate() > sortedEvents[i].start.startDate()) {
	                    tempIndex++;
	                    continue;
	                 }

	                 break;
	            }
	            return tempIndex;
	        },

	        _getSelectedSlot: function(slot, sortedEvents, event, idx, pad, prev) {
	              if (sortedEvents[idx + pad] &&
	               sortedEvents[idx].start.groupIndex !== sortedEvents[idx + pad].start.groupIndex) {
	                    var groupIndex = sortedEvents[idx + pad].start.groupIndex;
	                    var group = this.groups[groupIndex];

	                    if (!group || event) {
	                       slot = null;
	                    }

	                    if (prev) {
	                        slot = group.lastSlot();
	                    } else {
	                        slot = group.firstSlot(true);
	                    }
	                }
	             return slot;
	        },

	        _getStartIdx: function(events, sortedEvents){
	            var selectedEventIndex = 0;

	            $.each(sortedEvents, function() {
	                if (this.uid === events[0]){
	                     return false;
	                }

	                selectedEventIndex++;
	            });

	            return selectedEventIndex;
	        },

	        _getAllEvents: function(){
	            var allEvents = [];
	            var groups = this.groups;

	            for (var idx = 0; idx < groups.length; idx++) {
	                if (groups[idx]._continuousEvents) {
	                    allEvents= allEvents.concat(groups[idx]._continuousEvents);
	                }
	            }

	            return allEvents;
	        },

	        _getUniqueEvents: function(allEvents){
	            var uniqueAllEvents = [];

	            for (var i = 0; i < allEvents.length; i++) {
	                var exists = false;
	                for (var j = 0; j < uniqueAllEvents.length; j++) {
	                    if (allEvents[i].uid === uniqueAllEvents[j].uid) {
	                        exists = true;
	                        break;
	                    }
	                }

	                if (!exists) {
	                    uniqueAllEvents.push(allEvents[i]);
	                }
	            }

	            return uniqueAllEvents;
	        },

	        _getSortedEvents: function(uniqueAllEvents){
	             return uniqueAllEvents.sort(function(first, second) {
	                var firstStartDate = first.start.startDate();
	                var secondStartDate = second.start.startDate();
	                var result = kendo.date.getDate(firstStartDate) - kendo.date.getDate(secondStartDate);

	                if (result === 0) {
	                    result = first.start.groupIndex - second.start.groupIndex;
	                }

	                if (result === 0) {
	                    result = firstStartDate.getTime() - secondStartDate.getTime();
	                }

	                if (result === 0) {
	                    if (first.start.isDaySlot && !second.start.isDaySlot) {
	                            result = -1;
	                    }

	                    if (!first.start.isDaySlot && second.start.isDaySlot) {
	                            result = 1;
	                    }
	                }

	                if (result === 0) {
	                    result = $(first.element).index() - $(second.element).index();
	                }

	                return result;
	            });
	        },

	        _selectSlots: function(selection) {
	            var isAllDay = selection.isAllDay;
	            var group = this.groups[selection.groupIndex];

	            if (!group.timeSlotCollectionCount()) {
	                isAllDay = true;
	            }

	            this._selectedSlots = [];

	            var ranges = group.ranges(selection.start, selection.end, isAllDay, false);
	            var element;
	            var slot;

	            for (var rangeIndex = 0; rangeIndex < ranges.length; rangeIndex++) {
	                var range = ranges[rangeIndex];
	                var collection = range.collection;

	                for (var slotIndex = range.start.index; slotIndex <= range.end.index; slotIndex++) {
	                    slot = collection.at(slotIndex);

	                    element = slot.element;
	                    element.setAttribute("aria-selected", true);
	                    addSelectedState(element);

	                    this._selectedSlots.push({
	                        start: slot.startDate(),
	                        end: slot.endDate(),
	                        element: element
	                    });
	                }
	            }

	            if (selection.backward) {
	                element = ranges[0].start.element;
	            }

	            this.current(element);
	        },

	        _selectEvents: function(selection) {
	            var found = false;
	            var events = selection.events;
	            var groupEvents = this._getAllEvents();
	            var idx, groupEvent, length = groupEvents.length;

	            if (!events[0] || !groupEvents[0]) {
	                return found;
	            }

	            var result = $();
	            selection.events = [];
	            for (idx = 0; idx < length; idx ++) {
	                if ($.inArray(groupEvents[idx].uid, events) > -1) {
	                    groupEvent = groupEvents[idx];
	                    result = result.add(groupEvent.element);
	                    if(selection.events.indexOf(groupEvent.uid) === -1){
	                        selection.events.push(groupEvent.uid);
	                    }
	                }
	            }

	            if (result[0]) {
	                result.addClass("k-state-selected").attr("aria-selected", true);
	                this.current(result.last()[0]);
	                this._selectedSlots = [];
	                found = true;
	            }

	            return found;
	        },

	        inRange: function(options) {
	            var startDate = this.startDate();
	            var endDate = kendo.date.addDays(this.endDate(), 1);
	            var start = options.start;
	            var end = options.end;

	            return startDate <= start && start < endDate && startDate < end && end <= endDate;
	        },

	        _resourceValue: function(resource, item) {
	            if (resource.valuePrimitive) {
	                item = kendo.getter(resource.dataValueField)(item);
	            }
	            return item;
	        },

	        _setResourceValue: function(groupLevelMember, resource, result) {
	            var value = groupLevelMember.value,
	                setter;

	            if (resource.multiple) {
	                value = [value];
	            }

	            setter = kendo.setter(resource.field);
	            setter(result, value);
	        },

	        _resourceBySlot: function(slot) {
	            var resources = this.groupedResources;
	            var result = {};

	            if (resources.length) {
	                var resourceIndex = slot.groupIndex,
	                    groupOptions = this.options.group,
	                    nestedMember = groupOptions.date || groupOptions.orientation === "horizontal" ? "columns" : "rows",
	                    levels = nestedMember === "rows" ? this.rowLevels : this.columnLevels,
	                    dateGroupCompensation = groupOptions.date && groupOptions.orientation === "horizontal" ? 1 : 0,
	                    groupLevel = levels[resources.length - 1 + dateGroupCompensation],
	                    resource = resources[resources.length - 1],
	                    groupLevelMember = groupLevel[resourceIndex],
	                    passedChildren, numberOfChildren, j, i;

	                this._setResourceValue(groupLevelMember, resource, result);

	                for (j = resources.length - 2; j >= 0; j--) {
	                    groupLevel = levels[j + dateGroupCompensation];
	                    resource = resources[j];
	                    passedChildren = 0;

	                    for (i = 0; i < groupLevel.length; i++) {
	                        groupLevelMember = groupLevel[i];
	                        numberOfChildren = groupLevelMember[nestedMember].length;

	                        if(numberOfChildren > resourceIndex - passedChildren) {
	                            this._setResourceValue(groupLevelMember, resource, result);

	                            i = groupLevel.length;
	                        } else {
	                            passedChildren += numberOfChildren;
	                        }
	                    }
	                }
	            }

	            return result;
	        },

	        _createResizeHint: function(left, top, width, height) {
	            return $(HINT).css({
	                left: left,
	                top: top,
	                width: width,
	                height: height
	            });
	        },

	        _removeResizeHint: function() {
	            this._resizeHint.remove();
	            this._resizeHint = $();
	        },

	        _removeMoveHint: function (uid) {
	            if (uid) {
	                this._moveHint.filter("[data-uid='" + uid + "']").remove();

	                this._moveHint = this._moveHint.filter("[data-uid!='" + uid + "']");
	            } else {
	                this._moveHint.remove();
	                this._moveHint = $();
	            }
	        },

	        _scrollTo: function(element, container) {
	            var elementOffset = element.offsetTop,
	                elementOffsetDir = element.offsetHeight,
	                containerScroll = container.scrollTop,
	                containerOffsetDir = container.clientHeight,
	                bottomDistance = elementOffset + elementOffsetDir,
	                result = 0;

	                if (containerScroll > elementOffset) {
	                    result = elementOffset;
	                } else if (bottomDistance > (containerScroll + containerOffsetDir)) {
	                    if (elementOffsetDir <= containerOffsetDir) {
	                        result = (bottomDistance - containerOffsetDir);
	                    } else {
	                        result = elementOffset;
	                    }
	                } else {
	                    result = containerScroll;
	                }
	                container.scrollTop = result;
	        },

	        _inverseEventColor: function(element) {
	            var eventColor = element.css("color");
	            var eventColorIsDark = new Color(eventColor).isDark();
	            var eventBackground = element.css("background-color");
	            var eventBackgroundIsDark = new Color(eventBackground).isDark();

	            if(eventColorIsDark == eventBackgroundIsDark) {
	                element.addClass(INVERSE_COLOR_CLASS);
	            }
	        },

	       _eventTmpl: function(template, wrapper) {
	           var options = this.options,
	               settings = $.extend({}, kendo.Template, options.templateSettings),
	               paramName = settings.paramName,
	               html = "",
	               type = typeof template,
	               state = { storage: {}, count: 0 };

	            if (type === "function") {
	                state.storage["tmpl" + state.count] = template;
	                html += "#=this.tmpl" + state.count + "(" + paramName + ")#";
	                state.count ++;
	            } else if (type === "string") {
	                html += template;
	            }

	            var tmpl = kendo.template(kendo.format(wrapper, html), settings);

	            if (state.count > 0) {
	                tmpl = $.proxy(tmpl, state.storage);
	            }

	            return tmpl;
	       },

	        eventResources: function(event) {
	            var resources = [],
	                options = this.options;

	            if (!options.resources) {
	                return resources;
	            }

	            for (var idx = 0; idx < options.resources.length; idx++) {
	                var resource = options.resources[idx];
	                var field = resource.field;
	                var eventResources = kendo.getter(field)(event);

	                if (eventResources == null) {
	                    continue;
	                }

	                if (!resource.multiple) {
	                    eventResources = [eventResources];
	                }

	                var data = resource.dataSource.view();

	                for (var resourceIndex = 0; resourceIndex < eventResources.length; resourceIndex++) {
	                    var eventResource = null;

	                    var value = eventResources[resourceIndex];

	                    if (!resource.valuePrimitive) {
	                        value = kendo.getter(resource.dataValueField)(value);
	                    }

	                    for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
	                        if (data[dataIndex].get(resource.dataValueField) == value) {
	                            eventResource = data[dataIndex];
	                            break;
	                        }
	                    }

	                    if (eventResource !== null) {
	                        var resourceColor = kendo.getter(resource.dataColorField)(eventResource);
	                        resources.push({
	                            field: resource.field,
	                            title: resource.title,
	                            name: resource.name,
	                            text: kendo.getter(resource.dataTextField)(eventResource),
	                            value: value,
	                            color: resourceColor
	                        });
	                    }
	                }
	            }
	            return resources;
	        },

	        createLayout: function(layout) {
	            var allDayIndex = -1;

	            if (!layout.rows) {
	                layout.rows = [];
	            }

	            for (var idx = 0; idx < layout.rows.length; idx++) {
	                if (layout.rows[idx].allDay) {
	                    allDayIndex = idx;
	                    break;
	                }
	            }

	            var allDaySlot = layout.rows[allDayIndex];

	            if (allDayIndex >= 0) {
	                layout.rows.splice(allDayIndex, 1);
	            }

	            var columnLevels = this.columnLevels = levels(layout, "columns");
	            var rowLevels = this.rowLevels = levels(layout, "rows");

	            if(this._isVirtualized()) {
	                this._trimRowLevels(rowLevels);
	            }

	            this.table = $('<table role="presentation" class="k-scheduler-layout k-scheduler-' + this.name + 'view"><tbody></tbody></table>');

	            var rowCount = rowLevels[rowLevels.length - 1].length;

	            this.table.find("tbody").first().append(this._topSection(columnLevels, allDaySlot, rowCount));
	            this.table.find("tbody").first().append(this._bottomSection(columnLevels, rowLevels, rowCount));
	            this.element.append(this.table);

	            if(this._isVirtualized()) {
	                this._updateDomRowLevels();
	            }

	            // Enable horizontal scrolling when mobile, grouped and less than 1024px width
	            if(this._isMobile() &&
	                    columnLevels.length > 1 &&
	                    this._groupOrientation() === "horizontal" &&
	                    kendo._outerWidth($(window)) < MIN_HORIZONTAL_SCROLL_SIZE ){

	                this.table.find(".k-scheduler-content .k-scheduler-table").width((columnLevels[columnLevels.length - 2].length * 100)  + "%");
	                this.table.find(".k-scheduler-header .k-scheduler-table").width((columnLevels[columnLevels.length - 2].length * 100) + "%");
	            }

	            this._scroller();
	        },

	        _isVirtualized: function () {
	            return this.options.virtual && this.rowLevels.length > 1 && this._isVerticallyGrouped();
	        },

	        _trimRowLevels: function (rowLevels){
	            var lastGroup = rowLevels[rowLevels.length - 2];
	            var cachedRowLevels = this.cachedRowLevels || [];
	            var levelMarker;

	            this._hasContentToRender = true;

	            var stopAtLevel = function(levels, index) {
	                var hasParent  = levels[index - 1].length > 0,
	                parentLevel, parentValue;

	                if (hasParent) {
	                    parentLevel = levels[index - 1][0];
	                    parentValue = levels[index][0].parentValue;

	                    return parentLevel.value !== parentValue;
	                } else {
	                    return true;
	                }
	            };

	            for (var rowLevelIndex = rowLevels.length - 2; rowLevelIndex >= 0; rowLevelIndex--) {
	                var stop = false;
	                if(rowLevelIndex > 0 && stopAtLevel(rowLevels, rowLevelIndex)) {
	                    stop = true;
	                    levelMarker = rowLevelIndex;
	                }

	                cachedRowLevels[rowLevelIndex] = rowLevels[rowLevelIndex].splice(1);

	                if(rowLevelIndex < rowLevels.length - 2 && rowLevels[rowLevelIndex][0].rows.length != 1) {
	                    rowLevels[rowLevelIndex][0].rows = rowLevels[rowLevelIndex + 1];
	                }

	                if(stop) {
	                    break;
	                }
	            }

	            cachedRowLevels[rowLevels.length - 1] = rowLevels[rowLevels.length - 1].splice(lastGroup[0].rows.length);

	            this.cachedRowLevels = cachedRowLevels;

	            if(!cachedRowLevels[cachedRowLevels.length - 1].length) {
	                this._hasContentToRender = false;
	            }

	            return {
	                levelMarker: levelMarker || 0,
	                rowLevels: rowLevels
	            };
	        },

	        createNextLayout: function (){
	            var clone = [];
	            var trimmedRowLevels;
	            var rowLevels;
	            var levelMarker;
	            var rowCount;

	            for (var rowLevelIndex = 0; rowLevelIndex < this.cachedRowLevels.length; rowLevelIndex++) {
	                clone[rowLevelIndex] = this.cachedRowLevels[rowLevelIndex];
	            }

	            trimmedRowLevels = this._trimRowLevels(clone);
	            rowLevels = trimmedRowLevels.rowLevels.splice(trimmedRowLevels.levelMarker);
	            levelMarker = trimmedRowLevels.levelMarker;
	            rowCount = rowLevels[rowLevels.length - 1].length;

	            delete this._height;

	            for (var i = levelMarker; i < this.rowLevels.length; i++) {
	                this.rowLevels[i] = this.rowLevels[i].concat(rowLevels[i - levelMarker]);
	            }

	            this.table
	                .find(".k-scheduler-times").last().find("tbody")
	                .append(this._times(rowLevels, rowCount, this._isMobile()).find("tr"));

	            this._updateDomRowLevels();

	            if(levelMarker > 0) {
	                for (i = 0; i < levelMarker; i++) {
	                    var cell = this.table.find("[data-row-level=" + i + "]").last();
	                    var rowSpan = parseInt(cell.attr("rowspan"),10) + rowCount;
	                    cell.attr("rowspan", rowSpan);
	                }
	            }

	            this._virtualContent(rowLevels, this.columnLevels);
	            this.render(this._cachedEvents);
	        },

	        _tryRenderContent: function (){
	            var that = this;
	            var bufferHeight = that.table.innerHeight();
	            var height = that.content.find("table").innerHeight();
	            var scrollTop = that.content.scrollTop();

	            while(that._hasContentToRender && height - bufferHeight < scrollTop) {
	                that.createNextLayout();
	                height = that.content.find("table").innerHeight();
	            }
	        },

	        _updateDomRowLevels: function () {
	            var that = this;
	            var groupCells = that.times.find(".k-scheduler-group-cell:not([data-row-level])");

	            if(!this._rowLevelIndices) {
	                this._rowLevelIndices = groupCells.map(function(index, item){
	                    $(item).attr("data-row-level", index);
	                    return index;
	                }).toArray().reverse();
	                return;
	            }

	            groupCells = groupCells.toArray().reverse();

	            for(var i = 0; i <= groupCells.length; i++) {
	                $(groupCells[i]).attr("data-row-level", this._rowLevelIndices[i]);
	            }
	        },

	        refreshLayout: function() {
	            var that = this,
	                toolbar = that.element.find("> .k-scheduler-toolbar"),
	                height = that.element.innerHeight(),
	                scrollbar = this._scrollbar,
	                headerHeight = 0,
	                paddingDirection = this._isRtl ? "left" : "right";

	            for (var idx = 0; idx < toolbar.length; idx++) {
	                height -= outerHeight(toolbar.eq(idx));
	            }

	            if (that.datesHeader) {
	                headerHeight = outerHeight(that.datesHeader);
	            }

	            if (that.timesHeader && outerHeight(that.timesHeader) > headerHeight) {
	                headerHeight = outerHeight(that.timesHeader);
	            }

	            if (that.datesHeader && that.timesHeader) {
	                var datesHeaderRows = that.datesHeader.find("table").first().find("tr");

	                that.timesHeader.find("tr").height(function(index) {
	                    $(this).height(datesHeaderRows.eq(index).height());
	                });
	            }

	            if (headerHeight) {
	                height -= headerHeight;
	            }

	            if (that.footer) {
	                height -= outerHeight(that.footer);
	            }

	            var isSchedulerHeightSet = function(el) {
	                var initialHeight, newHeight;
	                if (el[0].style.height) {
	                    return true;
	                } else {
	                    initialHeight = el.height();
	                }

	                el.height("auto");
	                newHeight = el.height();

	                if (initialHeight != newHeight) {
	                    el.height("");
	                    return true;
	                }
	                el.height("");
	                return false;
	            };

	            var contentDiv = that.content[0],
	                scrollbarWidth = !kendo.support.kineticScrollNeeded ? scrollbar : 0;

	            if (isSchedulerHeightSet(that.element)) { // set content height only if needed
	                if (height > scrollbar * 2) { // do not set height if proper scrollbar cannot be displayed
	                    that.content.height(height);
	                } else {
	                    that.content.height(scrollbar * 2 + 1);
	                }

	                if (that.times) {
	                    that.times.height(contentDiv.clientHeight);

	                    var timesTable = that.times.find("table");
	                    if (timesTable.length) {
	                        timesTable.height(that.content.find("table")[0].clientHeight);
	                    }
	                }
	            }

	            if (that.table) {
	                if (contentDiv.offsetWidth - contentDiv.clientWidth > 0) {
	                    that.table.addClass("k-scrollbar-v");
	                    that.datesHeader.css("padding-" + paddingDirection, scrollbarWidth - parseInt(that.datesHeader.children().css("border-" + paddingDirection + "-width"), 10));
	                } else {
	                    that.datesHeader.css("padding-" + paddingDirection, "");
	                }
	                if (contentDiv.offsetHeight - contentDiv.clientHeight > 0 || contentDiv.clientHeight > that.content.children(".k-scheduler-table").height()) {
	                    that.table.addClass("k-scrollbar-h");
	                } else {
	                    that.table.removeClass("k-scrollbar-h");
	                }
	            }
	        },

	        _topSection: function(columnLevels, allDaySlot, rowCount) {
	            var thElm = $("<tr>");

	            this.timesHeader = timesHeader(columnLevels.length, allDaySlot, rowCount);
	            this.datesHeader = this._datesHeader(columnLevels, allDaySlot);

	            var dateGroup = this.datesHeader.find(".k-nav-day");

	            if (dateGroup.length) {
	                dateGroup.closest("tr").addClass("k-scheduler-date-group");
	            }

	            if (this._isMobile())  {
	                thElm.addClass("k-mobile-header");
	                thElm.addClass("k-mobile-" + this._groupOrientation() + "-header");
	            }

	            return $(thElm).append(this.timesHeader.add(this.datesHeader).wrap("<td>").parent());
	        },

	        _bottomSection: function(columnLevels, rowLevels, rowCount) {
	            this.times = this._times(rowLevels, rowCount, this._isMobile());

	            this.content = content(columnLevels[columnLevels.length - 1], rowLevels[rowLevels.length - 1]);

	            return $("<tr>").append(this.times.add(this.content).wrap("<td>").parent());
	        },

	        _scroller: function() {
	            var that = this;

	            this.content.on("scroll" + NS, function () {
	                kendo.scrollLeft(that.datesHeader.find(">.k-scheduler-header-wrap"), this.scrollLeft);
	                that.times.scrollTop(this.scrollTop);
	                if(that._isVirtualized()) {
	                    that._tryRenderContent();
	                }
	            });

	            var touchScroller = kendo.touchScroller(this.content, {
	                avoidScrolling: function(e) {
	                    return $(e.event.target).closest(".k-event.k-event-active").length > 0;
	                }
	            });

	            if (touchScroller && touchScroller.movable) {

	                this._touchScroller = touchScroller;

	                this.content = touchScroller.scrollElement;

	                touchScroller.movable.bind("change", function(e) {
	                    kendo.scrollLeft(that.datesHeader.find(">.k-scheduler-header-wrap"), -e.sender.x);
	                    that.times.scrollTop(-e.sender.y);
	                    if(that._isVirtualized()) {
	                        that._tryRenderContent();
	                    }
	                });
	            }
	        },

	        _resourcesForGroups: function() {
	            var result = [];
	            var groups = this.options.group;
	            var resources = this.options.resources;

	            groups = groups && groups.resources ? groups.resources : [];

	            if (resources && groups.length) {
	                for (var idx = 0, length = resources.length; idx < length; idx++) {
	                    for (var groupIdx = 0, groupLength = groups.length; groupIdx < groupLength; groupIdx++) {
	                        if (resources[idx].name === groups[groupIdx]) {
	                            result.push(resources[idx]);
	                        }
	                    }
	                }
	            }

	            this.groupedResources = result;
	        },

	        _createDateLayout: function(dates, inner, times) {
	            return createDateLayoutConfiguration("rows", dates, inner, times);
	        },

	        _createColumnsLayout: function(resources, inner, template, dates, times, parentValue) {
	            return createLayoutConfiguration("columns", resources, inner, template, dates, times, parentValue);
	        },

	        _groupOrientation: function() {
	            var groups = this.options.group;
	            return groups && groups.resources ? groups.orientation : "horizontal";
	        },

	        _isGroupedByDate: function() {
	            return this.options.group && this.options.group.date;
	        },

	        _isVerticallyGrouped: function() {
	            return this.groupedResources.length && this._groupOrientation() === "vertical";
	        },

	        _createRowsLayout: function(resources, inner, template, dates) {
	            return createLayoutConfiguration("rows", resources, inner, template, dates);
	        },

	        selectionByElement: function() {
	            return null;
	        },

	        clearSelection: function() {
	            this.content
	                .find(".k-state-selected")
	                .removeAttr("id")
	                .attr("aria-selected", false)
	                .removeClass("k-state-selected");
	        },

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(this);

	            if (that.table) {
	                kendo.destroy(that.table);
	                that.table.remove();
	            }

	            if (that.footer) {
	                kendo.destroy(that.footer);
	                that.footer.remove();
	            }

	            that.groups = null;
	            that.table = null;
	            that.content = null;
	            that.times = null;
	            that.datesHeader = null;
	            that.timesHeader = null;
	            that.footer = null;
	            that._resizeHint = null;
	            that._moveHint = null;
	        },

	        calendarInfo: function() {
	            return kendo.getCulture().calendars.standard;
	        },

	        prevGroupSlot: function(date, groupIndex, isDay) {
	            var collection;
	            var group = this.groups[groupIndex];
	            var slot = group.ranges(date, date, isDay, false)[0].start;

	            if (groupIndex <= 0) {
	                return;
	            }

	            if (this._isGroupedByDate()) {
	               return slot;
	            }

	            if (this._isVerticallyGrouped()) {
	                if (!group.timeSlotCollectionCount()) {
	                    collection = group._collection(group.daySlotCollectionCount() - 1, true);
	                    return collection.at(slot.index);
	                } else {
	                    collection = group._collection(isDay ? slot.index : slot.collectionIndex, false);
	                    return collection.last();
	                }
	            } else {
	                if (!group.timeSlotCollectionCount()) {
	                    collection = group._collection(slot.collectionIndex, true);
	                    return collection.last();
	                } else {
	                    collection = group._collection(isDay ? 0 : group.timeSlotCollectionCount() - 1, isDay);
	                    return isDay ? collection.last() : collection.at(slot.index);
	                }
	            }
	        },

	        nextGroupSlot: function(date, groupIndex, isDay) {
	            var collection;
	            var group = this.groups[groupIndex];
	            var slot = group.ranges(date, date, isDay, false)[0].start;
	            var daySlotCollectionCount;

	            if (groupIndex >= this.groups.length - 1) {
	                return;
	            }

	            if (this._isGroupedByDate()) {
	               return slot;
	            }

	            if (this._isVerticallyGrouped()) {
	                if (!group.timeSlotCollectionCount()) {
	                    collection = group._collection(0, true);
	                    return collection.at(slot.index);
	                } else {
	                    daySlotCollectionCount = group.daySlotCollectionCount();
	                    collection = group._collection(daySlotCollectionCount ? 0 : slot.collectionIndex, daySlotCollectionCount);

	                    return isDay ? collection.first() : collection.at(slot.collectionIndex);
	                }
	            } else {
	                if (!group.timeSlotCollectionCount()) {
	                    collection = group._collection(slot.collectionIndex, true);
	                    return collection.first();
	                } else {
	                    collection = group._collection(0, isDay);
	                    return isDay ? collection.first() : collection.at(slot.index);
	                }
	            }
	        },

	        _eventOptionsForMove: function () {
	            return {};
	        },

	        _updateEventForResize: function () {
	            return;
	        },

	        _updateEventForSelection: function (event) {
	            return event;
	        },

	        _innerElements: function(element, type, inner) {
	            var count = 0,
	                countInner = function(el) {
	                    var innerSpan = el[inner],
	                        innerEls = el[type],
	                        current, innerCollection, i;

	                    if(innerSpan) {
	                        count += innerSpan;
	                        return;
	                    }

	                    if(!innerEls || innerEls.length === 0) {
	                        count += 1;
	                        return;
	                    }

	                    for(i = 0; i < innerEls.length; i++) {
	                        current = innerEls[i];
	                        innerCollection = current[type];

	                        if(innerCollection && innerCollection[0]) {
	                            if(!innerCollection[0][type] || innerCollection[0][type].length === 0) {
	                                count += innerCollection.length;
	                            } else {
	                                countInner(current);
	                            }
	                        } else {
	                            count += 1;
	                        }
	                    }
	                };

	            countInner(element);

	            return count;
	        },

	        _times: function(rowLevels, rowCount, isMobile) {
	            var that = this;
	            var rows = new Array(rowCount).join().split(",");
	            var rowHeaderRows = [];
	            var rowIndex;

	            for (var rowLevelIndex = 0; rowLevelIndex < rowLevels.length; rowLevelIndex++) {
	                var level = rowLevels[rowLevelIndex];
	                var rowsBefore = 0;

	                for (rowIndex = 0; rowIndex < level.length; rowIndex++) {
	                    var currentRow = level[rowIndex];
	                    var className = currentRow.className || "";
	                    var text = currentRow.text;
	                    var rowspan = that._innerElements(currentRow, "rows");

	                    rowsBefore += rowspan;

	                    if (currentRow.allDay) {
	                        className = "k-scheduler-times-all-day";
	                    }

	                    if (isMobile && className.indexOf("k-scheduler-group-cell") !== -1) {
	                        text = '<span class="k-scheduler-group-text">' + text + '</span>';
	                    }

	                    rows[rowsBefore - rowspan] += '<th class="' + className + '" rowspan="' + rowspan + '">' + text + "</th>";
	                }
	            }

	            for (rowIndex = 0; rowIndex < rowCount; rowIndex++) {
	                rowHeaderRows.push(rows[rowIndex]);
	            }

	            if (rowCount < 1) {
	                return $();
	            }

	            return $('<div class="k-scheduler-times">' + table(rowHeaderRows) + '</div>');
	        },

	        _datesHeader: function(columnLevels, allDaySlot) {
	            var that = this;
	            var dateTableRows = [];
	            var columnIndex;

	            for (var columnLevelIndex = 0; columnLevelIndex < columnLevels.length; columnLevelIndex++) {
	                var level = columnLevels[columnLevelIndex];
	                var th = [];

	                for (columnIndex = 0; columnIndex < level.length; columnIndex ++) {
	                    var column = level[columnIndex];
	                    var colspan = that._innerElements(column, "columns", "colspan");

	                    th.push('<th colspan="' + (column.colspan || colspan) + '" class="' + (column.className || "")  + '">' + column.text + "</th>");
	                }

	                dateTableRows.push(th.join(""));
	            }

	            var allDayTableRows = [];

	            if (allDaySlot) {
	                var lastLevel = columnLevels[columnLevels.length - 1];
	                var td = [];
	                var cellContent = allDaySlot.cellContent;

	                for (columnIndex = 0; columnIndex < lastLevel.length; columnIndex++) {
	                    td.push('<td class="' + (lastLevel[columnIndex].className || "")  + '">' + (cellContent ? cellContent(columnIndex) : '&nbsp;') + '</td>');
	                }

	                allDayTableRows.push(td.join(""));
	            }

	            return $(
	                '<div class="k-scheduler-header">' +
	                    '<div class="k-scheduler-header-wrap">' +
	                        table(dateTableRows) +
	                        allDayTable(allDayTableRows, "k-scheduler-header-all-day") +
	                    '</div>' +
	                '</div>'
	            );
	        }
	    });

	    function collidingEvents(elements, start, end) {
	        var idx,
	            index,
	            startIndex,
	            overlaps,
	            endIndex;

	        for (idx = elements.length-1; idx >= 0; idx--) {
	            index = rangeIndex(elements[idx]);
	            startIndex = index.start;
	            endIndex = index.end;

	            overlaps = startIndex <= start && endIndex >= start;

	            if (overlaps || (startIndex >= start && endIndex <= end) || (start <= startIndex && end >= startIndex)) {
	                if (startIndex < start) {
	                    start = startIndex;
	                }

	                if (endIndex > end) {
	                    end = endIndex;
	                }
	            }
	        }

	        return eventsForSlot(elements, start, end);
	    }

	    function rangeIndex(eventElement) {
	        return {
	            start: eventElement.start,
	            end: eventElement.end
	        };
	    }

	    function eventsForSlot(elements, slotStart, slotEnd) {
	        var events = [];

	        for (var idx = 0; idx < elements.length; idx++) {
	            var event = rangeIndex(elements[idx]);

	            if ((event.start < slotStart && event.end > slotStart) || (event.start >= slotStart && event.end <= slotEnd)) {
	                events.push(elements[idx]);
	            }
	        }

	        return events;
	    }

	    function createColumns(eventElements) {
	        return _createColumns(eventElements);
	    }

	    function createRows(eventElements) {
	        return _createColumns(eventElements);
	    }

	    var Color = function(value) {
	        var color = this,
	            formats = Color.formats,
	            re,
	            processor,
	            parts,
	            i,
	            channels;

	        if (arguments.length === 1) {
	            value = color.resolveColor(value);

	            for (i = 0; i < formats.length; i++) {
	                re = formats[i].re;
	                processor = formats[i].process;
	                parts = re.exec(value);

	                if (parts) {
	                    channels = processor(parts);
	                    color.r = channels[0];
	                    color.g = channels[1];
	                    color.b = channels[2];
	                }
	            }
	        } else {
	            color.r = arguments[0];
	            color.g = arguments[1];
	            color.b = arguments[2];
	        }

	        color.r = color.normalizeByte(color.r);
	        color.g = color.normalizeByte(color.g);
	        color.b = color.normalizeByte(color.b);
	    };

	    Color.prototype = {
	        resolveColor: function(value) {
	            value = value || "#000";

	            if (value.charAt(0) == "#") {
	                value = value.substr(1, 6);
	            }

	            value = value.replace(/ /g, "");
	            value = value.toLowerCase();
	            value = Color.namedColors[value] || value;

	            return value;
	        },

	        normalizeByte: function(value) {
	            return (value < 0 || isNaN(value)) ? 0 : ((value > 255) ? 255 : value);
	        },

	        percBrightness: function() {
	            var color = this;
	            return math.sqrt(0.241 * color.r * color.r + 0.691 * color.g * color.g + 0.068 * color.b * color.b);
	        },

	        isDark: function() {
	            var color = this;
	            var brightnessValue = color.percBrightness();
	            return brightnessValue < 180;
	        }
	    };

	    Color.formats = [{
	            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
	            process: function(parts) {
	                return [
	                    parseInt(parts[1], 10), parseInt(parts[2], 10), parseInt(parts[3], 10)
	                ];
	            }
	        }, {
	            re: /^(\w{2})(\w{2})(\w{2})$/,
	            process: function(parts) {
	                return [
	                    parseInt(parts[1], 16), parseInt(parts[2], 16), parseInt(parts[3], 16)
	                ];
	            }
	        }, {
	            re: /^(\w{1})(\w{1})(\w{1})$/,
	            process: function(parts) {
	                return [
	                    parseInt(parts[1] + parts[1], 16),
	                    parseInt(parts[2] + parts[2], 16),
	                    parseInt(parts[3] + parts[3], 16)
	                ];
	            }
	        }
	    ];

	    Color.namedColors = {
	        aqua: "00ffff", azure: "f0ffff", beige: "f5f5dc",
	        black: "000000", blue: "0000ff", brown: "a52a2a",
	        coral: "ff7f50", cyan: "00ffff", darkblue: "00008b",
	        darkcyan: "008b8b", darkgray: "a9a9a9", darkgreen: "006400",
	        darkorange: "ff8c00", darkred: "8b0000", dimgray: "696969",
	        fuchsia: "ff00ff", gold: "ffd700", goldenrod: "daa520",
	        gray: "808080", green: "008000", greenyellow: "adff2f",
	        indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c",
	        lightblue: "add8e6", lightgrey: "d3d3d3", lightgreen: "90ee90",
	        lightpink: "ffb6c1", lightyellow: "ffffe0", lime: "00ff00",
	        limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff",
	        maroon: "800000", mediumblue: "0000cd", navy: "000080",
	        olive: "808000", orange: "ffa500", orangered: "ff4500",
	        orchid: "da70d6", pink: "ffc0cb", plum: "dda0dd",
	        purple: "800080", red: "ff0000", royalblue: "4169e1",
	        salmon: "fa8072", silver: "c0c0c0", skyblue: "87ceeb",
	        slateblue: "6a5acd", slategray: "708090", snow: "fffafa",
	        steelblue: "4682b4", tan: "d2b48c", teal: "008080",
	        tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee",
	        wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5",
	        yellow: "ffff00", yellowgreen: "9acd32"
	    };

	    function _createColumns(eventElements) {
	        var columns = [];

	        for (var idx = 0; idx < eventElements.length; idx++) {
	            var event = eventElements[idx];
	            var eventRange = rangeIndex(event);
	            var column = null;

	            for (var j = 0, columnLength = columns.length; j < columnLength; j++) {
	                var endOverlaps = eventRange.start > columns[j].end;

	                if (eventRange.start < columns[j].start || endOverlaps) {

	                    column = columns[j];

	                    if (column.end < eventRange.end) {
	                        column.end = eventRange.end;
	                    }

	                    break;
	                }
	            }

	            if (!column) {
	                column = { start: eventRange.start, end: eventRange.end, events: [] };
	                columns.push(column);
	            }

	            column.events.push(event);
	        }

	        return columns;
	    }

	    function createDateLayoutConfiguration(name, dates, inner, times) {
	         var configuration = [];

	         $.each(dates, function(index, item) {
	            var className = item.className ? "k-slot-cell " + item.className : "k-slot-cell";

	            var obj = {
	                text: item.text,
	                className: className
	            };

	            if(times && !item.minorTicks){
	                obj[name] = createDateLayoutConfiguration(name, item.columns, inner, times);
	            } else {
	                obj[name] = inner;
	            }
	            configuration.push(obj);
	        });

	        return configuration;
	    }

	    function createLayoutConfiguration(name, resources, inner, template, dates, times, parentValue) {
	        var resource = resources[0];
	        var configuration = [];

	        if (resource) {
	            if (dates && inner) {
	                $.each(dates, function(index, item) {
	                    if (times && !item.minorTicks) {
	                        item[name] = createLayoutConfiguration(name, resources, item.columns, template, item.columns, times, parentValue);
	                    } else {
	                        item[name] = createLayoutConfiguration(name, resources, null, template, null, null, parentValue);
	                    }
	                });
	                configuration = dates;
	            } else {
	                var data = resource.dataSource.view();

	                data = data.filter(function(item) {
	                    var itemParentValue = kendo.getter(resource.dataParentValueField)(item);

	                    return itemParentValue === null || itemParentValue === undefined || itemParentValue === parentValue;
	                });

	                for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
	                    var value = kendo.getter(resource.dataValueField)(data[dataIndex]);
	                    var obj = {
	                        text: template({
	                            text: kendo.htmlEncode(kendo.getter(resource.dataTextField)(data[dataIndex])),
	                            color: kendo.getter(resource.dataColorField)(data[dataIndex]),
	                            field: resource.field,
	                            title: resource.title,
	                            name: resource.name,
	                            value: value
	                        }),
	                        className: "k-slot-cell k-scheduler-group-cell",
	                        parentValue: parentValue,
	                        value: value
	                    };

	                    // filter-out those inner resources that are not relevant
	                    obj[name] = createLayoutConfiguration(name, resources.slice(1), inner, template, dates, times, value);

	                    configuration.push(obj);
	                }
	            }
	            return configuration;
	        }
	        return inner;
	    }

	    function groupEqFilter(value) {
	        return function(item) {
	            if (Array.isArray(item) || item instanceof kendo.data.ObservableArray) {
	                for (var idx = 0; idx < item.length; idx++) {
	                    if (item[idx] == value) {
	                        return true;
	                    }
	                }
	                return false;
	            }
	            return item == value;
	        };
	    }

	    var selectedStateRegExp = /\s*k-state-selected/;
	    function addSelectedState(cell) {
	        cell.className = cell.className.replace(selectedStateRegExp, "") + " k-state-selected";
	    }

	    $.extend(ui.SchedulerView, {
	        createColumns: createColumns,
	        createRows: createRows,
	        rangeIndex: rangeIndex,
	        collidingEvents: collidingEvents,
	        groupEqFilter: groupEqFilter
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });