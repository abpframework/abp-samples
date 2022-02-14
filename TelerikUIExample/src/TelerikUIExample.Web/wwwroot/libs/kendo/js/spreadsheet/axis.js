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

	__webpack_require__(1650);
	module.exports = __webpack_require__(1650);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1650:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var Axis = kendo.Class.extend({
	        init: function(count, value) {
	            this._value = value;
	            this._count = count;
	            this.values = new kendo.spreadsheet.RangeList(0, count - 1, value);
	            this._hidden = new kendo.spreadsheet.RangeList(0, count - 1, 0);

	            this.scrollBarSize = kendo.support.scrollbar();
	            this._refresh();
	        },

	        adjust: function(start, delta) {
	            // adjust this axis for insert/remove rows/cols operation
	            if (delta < 0) {
	                // removing -- copy from start+|delta| to start
	                this.values.copy(start - delta, this._count - 1, start);
	                this._hidden.copy(start - delta, this._count - 1, start);
	            } else {
	                // adding -- copy from start to start+delta, and set
	                // values for inserted things to default.
	                this.values.copy(start, this._count, start + delta);
	                this._hidden.copy(start, this._count, start + delta);
	                this.values.value(start, start + delta - 1, this._value);
	                this._hidden.value(start, start + delta - 1, 0);
	            }
	            this._refresh();
	        },

	        toJSON: function(field, positions) {
	            var values = [];

	            var iterator = this.values.iterator(0, this._count - 1);

	            for (var idx = 0; idx < this._count; idx++) {
	                var value = iterator.at(idx);
	                var hidden = this._hidden.value(idx, idx);

	                if (value === this._value && !hidden) {
	                    continue;
	                }

	                var position = positions[idx];

	                if (position === undefined) {
	                    position = values.length;

	                    var item = { index: idx };

	                    item[field] = value;
	                    if (hidden) {
	                        item.hidden = hidden;
	                    }

	                    values.push(item);

	                    positions[idx] = position;
	                }
	            }

	            return values;
	        },

	        fromJSON: function(field, values) {
	            for (var idx = 0; idx < values.length; idx++) {
	                var el = values[idx];

	                var index = el.index;
	                if (index === undefined) {
	                    index = idx;
	                }

	                // when this particular axis is hidden, the value for
	                // the field ("height" or "width") will be zero, and
	                // in the "hidden" field we'll have the actual value
	                // before it was hidden.
	                // https://github.com/telerik/kendo-ui-core/issues/3523
	                var value = el[field];

	                if (value === 0) {
	                    this._hidden.value(index, index, el.hidden || this._value);
	                    this.value(index, index, 0);
	                } else {
	                    this.value(index, index, value);
	                }
	            }
	        },

	        hide: function(index) {
	            if (!this.hidden(index)) {
	                var value = this.value(index, index);
	                this._hidden.value(index, index, value);
	                this.value(index, index, 0);
	            }
	        },

	        hidden: function(index) {
	            return this._hidden.value(index, index) !== 0;
	        },

	        includesHidden: function(start, end) {
	             return this._hidden.intersecting(start, end).length > 1;
	        },

	        nextVisible: function(index) {
	            var end = this._count - 1, i = index;
	            while (++i <= end) {
	                if (!this.hidden(i)) {
	                    return i;
	                }
	            }
	            return index;
	        },

	        nextUntil: function(index, pred) {
	            var end = this._count - 1, i = index, advanced = false;
	            while (++i <= end) {
	                var val = pred(i, advanced, this.hidden(i));
	                if (typeof val == "number") {
	                    return val;
	                } else if (val) {
	                    break;
	                }
	                advanced = true;
	            }
	            return i - 1;
	        },

	        nextPage: function(index, pageSize) {
	            return this.index(this.sum(0, index - 1) + pageSize);
	        },

	        prevPage: function(index, pageSize) {
	            return this.index(this.sum(0, index) - pageSize);
	        },

	        firstVisible: function() {
	            var firstHidden = this._hidden.first();
	            if (firstHidden.value === 0) {
	                return 0;
	            } else {
	                return firstHidden.end + 1;
	            }
	        },

	        lastVisible: function() {
	            var lastHidden = this._hidden.last();
	            if (lastHidden.value === 0) {
	                return this._count - 1;
	            } else {
	                return lastHidden.start - 1;
	            }
	        },

	        prevVisible: function(index) {
	            var i = index;
	            while (--i >= 0) {
	                if (!this.hidden(i)) {
	                    return i;
	                }
	            }
	            return index;
	        },

	        prevUntil: function(index, pred) {
	            var i = index, advanced = false;
	            while (--i >= 0) {
	                var val = pred(i, advanced, this.hidden(i));
	                if (typeof val == "number") {
	                    return val;
	                } else if (val) {
	                    break;
	                }
	                advanced = true;
	            }
	            return i + 1;
	        },

	        unhide: function(index) {
	            if (this.hidden(index)) {
	                var value = this._hidden.value(index, index);
	                this._hidden.value(index, index, 0);
	                this.value(index, index, value);
	            }
	        },

	        value: function(start, end, value) {
	            if (value !== undefined) {
	                this.values.value(start, end, value);
	                this._refresh();
	            } else {
	                return this.values.iterator(start, end).at(0);
	            }
	        },

	        sum: function(start, end) {
	            var values = this.values.iterator(start, end);

	            var sum = 0;

	            for (var idx = start; idx <= end; idx ++) {
	                sum += values.at(idx);
	            }

	            return sum;
	        },

	        locate: function(start, end, predicate) {
	            var values = this.values.iterator(start, end);
	            var sum = 0;
	            for (var idx = start; idx <= end; idx++) {
	                sum += values.at(idx);
	                var val = predicate(sum);
	                if (val) {
	                    return idx;
	                }
	            }
	            return null;
	        },

	        visible: function(start, end) {
	            var startSegment = null;
	            var endSegment = null;
	            var lastPage = false;

	            if (end >= this.total + this.scrollBarSize) {
	                lastPage = true;
	            }

	            var ranges = this._pixelValues.intersecting(start, end);

	            startSegment = ranges[0];
	            endSegment = ranges[ranges.length - 1];

	            if (!startSegment) {
	                return { values: this.values.iterator(0, 0), offset: 0 };
	            }

	            var startOffset = start - startSegment.start;

	            var startIndex = ((startOffset / startSegment.value.value) >> 0) + startSegment.value.start;

	            var offset = startOffset - (startIndex - startSegment.value.start) * startSegment.value.value;

	            var endOffset = end - endSegment.start;
	            var endIndex = ((endOffset / endSegment.value.value) >> 0) + endSegment.value.start;

	            if (endIndex > endSegment.value.end) {
	                endIndex = endSegment.value.end;
	            }

	            if (lastPage) {
	                offset += endSegment.value.value - (endOffset - (endIndex - endSegment.value.start) * endSegment.value.value);
	            }

	            offset = Math.min(-offset, 0);

	            return {
	                values: this.values.iterator(startIndex, endIndex),
	                offset: offset
	            };
	        },

	        index: function(value) {
	            var index = 0;
	            var iterator = this.values.iterator(0, this._count - 1);
	            var current = iterator.at(0);

	            while (current < value && index < this._count - 1) {
	                current += iterator.at(++index);
	            }

	            return index;
	        },

	        indexVisible: function(value) {
	            var index = this.index(value);
	            if (this.hidden(index)) {
	                index = this.prevVisible(index);
	            }
	            return index;
	        },

	        _refresh: function() {
	            var current = 0;
	            this._pixelValues = this.values.map(function(range) {
	                var start = current;

	                current += (range.end - range.start + 1) * range.value;

	                var end = current - 1;

	                return new kendo.spreadsheet.ValueRange(start, end, range);
	            });

	            this.total = current;
	        },

	        getState: function() {
	            return {
	                values: this.values.getState(),
	                hidden: this._hidden.getState()
	            };
	        },

	        setState: function(state) {
	            this.values.setState(state.values);
	            this._hidden.setState(state.hidden);
	            this._refresh();
	        }
	    });

	    var PaneAxis = kendo.Class.extend({
	        init: function(axis, start, count, headerSize) {
	           this._axis = axis;
	           this._start = start;
	           this._count = count;
	           this.hasHeader = start === 0;
	           this.headerSize = headerSize;
	           this.defaultValue = axis._value;
	           this.frozen = count > 0;
	        },

	        viewSize: function(viewSize) {
	            this._viewSize = viewSize;
	        },

	        sum: function(start, end) {
	            return this._axis.sum(start, end - 1);
	        },

	        start: function() {
	            return this.sum(0, this._start);
	        },

	        size: function() {
	            return this.sum(this._start, this._start + this._count);
	        },

	        index: function(value, offset) {
	            return this._axis.index(value + (this.frozen ? 0 : offset) - this.headerSize);
	        },

	        indexVisible: function(value, offset) {
	            return this._axis.indexVisible(value + (this.frozen ? 0 : offset) - this.headerSize);
	        },

	        //XXX: rename this method
	        paneSegment: function() {
	            var offset = this.start();
	            var length;

	            if (!this.hasHeader) {
	                offset += this.headerSize;
	            }

	            if (this.frozen) {
	                length = this.size();
	                if (this.hasHeader) {
	                    length += this.headerSize;
	                } else {
	                    length -= this.headerSize;
	                }
	            } else {
	                length = this._viewSize - offset;
	            }

	            return {
	                offset: offset,
	                length: length
	            };
	        },

	        visible: function(offset) {
	            var start = this.start();
	            var size;

	            if (this.frozen) {
	                size = this.size();
	                if (!this.hasHeader) {
	                    size -= this.headerSize;
	                }
	            } else {
	                size = this._viewSize - start - this.headerSize;
	                start += offset;
	            }

	            var result = this._axis.visible(start, start + size - 1);

	            if (this.frozen) {
	                result.offset = 0;
	            }

	            result.start = start;

	            if (this.hasHeader) {
	                result.offset += this.headerSize;
	                result.start -= this.headerSize;
	            }

	            return result;
	        },

	        contains: function(start, end) {
	            if (this.frozen) {
	                if (start > this._start + this._count) {
	                    return false;
	                }
	                if (end < this._start) {
	                    return false;
	                }
	                return true;
	            } else {
	                return end >= this._start;
	            }
	        }
	    });

	    kendo.spreadsheet.Axis = Axis;
	    kendo.spreadsheet.PaneAxis = PaneAxis;

	})(kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });