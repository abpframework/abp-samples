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

	__webpack_require__(1668);
	module.exports = __webpack_require__(1668);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = require("../kendo.data");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1668:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(5) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){
	(function(kendo) {

	    /*jshint evil: true */
	    var Filter = kendo.spreadsheet.Filter = kendo.Class.extend({
	        prepare: function() {
	        },
	        value: function(cell) {
	            return cell.value;
	        },
	        matches: function() {
	            throw new Error("The 'matches' method is not implemented.");
	        },
	        toJSON: function() {
	            throw new Error("The 'toJSON' method is not implemented.");
	        }
	    });

	    Filter.create = function(options) {
	        var filter = options.filter;

	        if (!filter) {
	            throw new Error("Filter type not specified.");
	        }

	        var constructor = kendo.spreadsheet[filter.charAt(0).toUpperCase() + filter.substring(1) + "Filter"];

	        if (!constructor) {
	            throw new Error("Filter type not recognized.");
	        }

	        return new constructor(options);
	    };

	    kendo.spreadsheet.ValueFilter = Filter.extend({
	        _values: [],

	        _dates: [],

	        _blanks: false,

	        init: function ValueFilter(options) {
	            if (options.values !== undefined) {
	                this._values = options.values;
	            }

	            if (options.blanks !== undefined) {
	                this._blanks = options.blanks;
	            }

	            if (options.dates !== undefined) {
	                this._dates = options.dates;
	            }
	        },

	        value: function(cell) {
	            var value = cell.value;

	            if (this._dates.length > 0 && cell.format && typeof value === "number") {
	                var type = kendo.spreadsheet.formatting.type(value, cell.format);

	                if (type === "date") {
	                    value = kendo.spreadsheet.numberToDate(value);
	                }
	            }

	            return value;
	        },

	        matches: function(value) {
	            if (value === null || value === undefined) {
	                return this._blanks;
	            }

	            if (value instanceof Date) {
	                return this._dates.some(function(date) {
	                    return date.year === value.getFullYear() &&
	                        (date.month === undefined || date.month === value.getMonth()) &&
	                        (date.day === undefined || date.day === value.getDate()) &&
	                        (date.hours === undefined || date.hours === value.getHours()) &&
	                        (date.minutes === undefined || date.minutes === value.getMinutes()) &&
	                        (date.seconds === undefined || date.seconds === value.getSeconds());
	                });
	            }

	            return this._values.indexOf(value) >= 0;
	        },
	        toJSON: function() {
	            return {
	                filter: "value",
	                blanks: this._blanks,
	                values: this._values.slice(0)
	            };
	        }
	    });

	    kendo.spreadsheet.CustomFilter = Filter.extend({
	        _logic: "and",
	        init: function CustomFilter(options) {
	            if (options.logic !== undefined) {
	                this._logic = options.logic;
	            }

	            if (options.criteria === undefined) {
	                throw new Error("Must specify criteria.");
	            }

	            this._criteria = options.criteria;

	            var expression = kendo.data.Query.filterExpr({
	                logic: this._logic,
	                filters: this._criteria,
	                accentFoldingFiltering: kendo.culture().name
	            }).expression;

	            this._matches = new Function("d", "return " + expression);
	        },
	        matches: function(value) {
	            if (value === null) {
	                return false;
	            }

	            return this._matches(value);
	        },
	        value: function(cell) {
	            var value = cell.value;
	            var criterionValue = this._criteria[0].value;
	            var criterionType = criterionValue instanceof Date ? "date" : typeof criterionValue;
	            var valueType = typeof value;

	            if (cell.format) {
	                valueType = kendo.spreadsheet.formatting.type(value, cell.format);
	            }

	            if (valueType != criterionType) {
	                if (criterionType == "string") {
	                    if (cell.format) {
	                        value = kendo.spreadsheet.formatting.text(value, cell.format);
	                    }
	                    value = value + "";
	                }
	            } else if (valueType == "date") {
	                value = kendo.spreadsheet.numberToDate(value);
	            }

	            return value;
	        },
	        toJSON: function() {
	            return {
	                filter: "custom",
	                logic: this._logic,
	                criteria: this._criteria
	            };
	        }
	    });

	    kendo.spreadsheet.TopFilter = Filter.extend({
	        init: function TopFilter(options) {
	            this._type = options.type;
	            this._value = options.value;
	            this._values = [];
	        },

	        prepare: function(cells) {
	            var values = cells.map(this.value)
	            .sort()
	            .filter(function(value, index, array) {
	                return index === 0 || value !== array[index - 1];
	            });

	            if (this._type === "topNumber" || this._type == "topPercent") {
	                values.sort(function(x, y) {
	                    return y - x;
	                });
	            } else {
	                values.sort(function(x, y) {
	                    return x - y;
	                });
	            }

	            var count = this._value;

	            if (this._type === "topPercent" || this._type === "bottomPercent") {
	                count = (values.length * count / 100) >> 0;
	            }

	            this._values = values.slice(0, count);
	        },
	        matches: function(value) {
	            return this._values.indexOf(value) >= 0;
	        },
	        toJSON: function() {
	            return {
	                filter: "top",
	                type: this._type,
	                value: this._value
	            };
	        }
	    });

	    kendo.spreadsheet.DynamicFilter = Filter.extend({
	        init: function DynamicFilter(options) {
	            this._type = options.type;

	            this._predicate = this[options.type];

	            if (typeof this._predicate !== "function") {
	                throw new Error("DynamicFilter type '" + options.type + "' not recognized.");
	            }
	        },
	        value: function(cell) {
	            var value = cell.value;

	            if (cell.format) {
	                var type = kendo.spreadsheet.formatting.type(value, cell.format);

	                if (type === "date") {
	                    value = kendo.spreadsheet.numberToDate(value);
	                }
	            }

	            return value;
	        },
	        prepare: function(cells) {
	            var sum = 0;
	            var count = 0;

	            for (var ci = 0; ci < cells.length; ci++) {
	                var value = this.value(cells[ci]);

	                if (typeof value === "number") {
	                    sum += value;
	                    count ++;
	                }
	            }

	            if (count > 0) {
	                this._average = sum / count;
	            } else {
	                this._average = 0;
	            }
	        },
	        matches: function(value) {
	            return this._predicate(value);
	        },
	        aboveAverage: function(value) {
	            if (value instanceof Date) {
	                value = kendo.spreadsheet.dateToNumber(value);
	            }

	            if (typeof value !== "number") {
	                return false;
	            }

	            return value > this._average;
	        },
	        belowAverage: function(value) {
	            if (value instanceof Date) {
	                value = kendo.spreadsheet.dateToNumber(value);
	            }

	            if (typeof value !== "number") {
	                return false;
	            }

	            return value < this._average;
	        },
	        tomorrow: function(value) {
	            if (value instanceof Date) {
	                var tomorrow = kendo.date.addDays(kendo.date.today(), 1);

	                return kendo.date.getDate(value).getTime() === tomorrow.getTime();
	            }

	            return false;
	        },
	        today: function(value) {
	            if (value instanceof Date) {
	                return kendo.date.isToday(value);
	            }

	            return false;
	        },
	        yesterday: function(value) {
	            if (value instanceof Date) {
	                var yesterday = kendo.date.addDays(kendo.date.today(), -1);

	                return kendo.date.getDate(value).getTime() === yesterday.getTime();
	            }

	            return false;
	        },
	        nextWeek: function(value) {
	            return sameWeek(kendo.date.addDays(kendo.date.today(), 7), value);
	        },
	        thisWeek: function(value) {
	            return sameWeek(kendo.date.today(), value);
	        },
	        lastWeek: function(value) {
	            return sameWeek(kendo.date.addDays(kendo.date.today(), -7), value);
	        },
	        nextMonth: function(value) {
	            return sameMonth(value, 1);
	        },
	        thisMonth: function(value) {
	            return sameMonth(value, 0);
	        },
	        lastMonth: function(value) {
	            return sameMonth(value, -1);
	        },
	        nextQuarter: function(value) {
	            if (value instanceof Date) {
	                var today = kendo.date.today();

	                var diff = quarter(value) - quarter(today);

	                return (diff === 1 && today.getFullYear() === value.getFullYear()) ||
	                       (diff == -3 && today.getFullYear() + 1 === value.getFullYear());
	            }

	            return false;
	        },
	        thisQuarter: function(value) {
	            if (value instanceof Date) {
	                var today = kendo.date.today();

	                var diff = quarter(value) - quarter(today);

	                return diff === 0 && today.getFullYear() === value.getFullYear();
	            }

	            return false;
	        },
	        lastQuarter: function(value) {
	            if (value instanceof Date) {
	                var today = kendo.date.today();

	                var diff = quarter(today) - quarter(value);

	                return (diff === 1 && today.getFullYear() === value.getFullYear()) ||
	                       (diff == -3 && today.getFullYear() - 1 === value.getFullYear());
	            }

	            return false;
	        },
	        nextYear: function(value) {
	            return sameYear(value, 1);
	        },
	        thisYear: function(value) {
	            return sameYear(value, 0);
	        },
	        lastYear: function(value) {
	            return sameYear(value, -1);
	        },
	        yearToDate: function(value) {
	            if (value instanceof Date) {
	                var today = kendo.date.today();

	                return value.getFullYear() === today.getFullYear() && value <= today;
	            }

	            return false;
	        },
	        toJSON: function() {
	            return {
	                filter: "dynamic",
	                type: this._type
	            };
	        }
	    });

	    [1, 2, 3, 4].forEach(function(target) {
	        kendo.spreadsheet.DynamicFilter.prototype["quarter" + target] = function(value) {
	           if (value instanceof Date) {
	              return quarter(value) === target;
	           }

	           return false;
	        };
	    });

	    kendo.cultures["en-US"].calendar.months.names.forEach(function(month, index) {
	        kendo.spreadsheet.DynamicFilter.prototype[month.toLowerCase()] = function(value) {
	           if (value instanceof Date) {
	               return value.getMonth() === index;
	           }

	           return false;
	        };
	    });

	    function quarter(value) {
	        var month = value.getMonth() + 1;

	        if (month >= 1 && month <= 3) {
	            return 1;
	        } else if(month >= 4 && month <= 6) {
	            return 2;
	        } else if (month >= 7 && month <= 9) {
	            return 3;
	        } else {
	            return 4;
	        }
	    }

	    function sameYear(value, offset) {
	        if (value instanceof Date) {
	            var today = kendo.date.today();

	            today.setFullYear(today.getFullYear() + offset);

	            return today.getFullYear() === value.getFullYear();
	        }

	        return false;
	    }

	    function sameMonth(value, offset) {
	        if (value instanceof Date) {
	            var today = kendo.date.firstDayOfMonth(kendo.date.today());

	            today.setMonth(today.getMonth() + offset, 1);

	            return today.getTime() === kendo.date.firstDayOfMonth(value).getTime();
	        }

	        return false;
	    }

	    function sameWeek(a, b) {
	        if (b instanceof Date) {
	            var firstWeek = kendo.date.dayOfWeek(kendo.date.getDate(a), 1);

	            var secondWeek = kendo.date.dayOfWeek(kendo.date.getDate(b), 1);

	            return firstWeek.getTime() === secondWeek.getTime();
	        }

	        return false;
	    }

	})(kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });