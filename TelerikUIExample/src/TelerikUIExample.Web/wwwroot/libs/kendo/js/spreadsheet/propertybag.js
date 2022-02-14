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

	__webpack_require__(1686);
	module.exports = __webpack_require__(1686);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1686:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var Property = kendo.Class.extend({
	        init: function(list) {
	            this.list = list;
	        },

	        get: function(index) {
	            return this.parse(this.list.value(index, index));
	        },

	        set: function(start, end, value) {
	            if (value === undefined) {
	                value = end;
	                end = start;
	            }

	            this.list.value(start, end, value);
	        },

	        parse: function(value) {
	            return value;
	        },

	        copy: function(start, end, dst) {
	            this.list.copy(start, end, dst);
	        },

	        iterator: function(start, end) {
	            return this.list.iterator(start, end);
	        }
	    });

	    var JsonProperty = Property.extend({
	        set: function(start, end, value) {
	            this.list.value(start, end, JSON.stringify(value));
	        },

	        parse: function(value) {
	            return JSON.parse(value);
	        }
	    });

	    var ValueProperty = Property.extend({
	        init: function(values, formats) {
	            Property.prototype.init.call(this, values);
	            this.formats = formats;
	        },

	        set: function(start, end, value) {
	            if (value instanceof Date) {
	                value = kendo.spreadsheet.dateToNumber(value);
	                if (!this.formats.value(start,end)) {
	                    this.formats.value(start, end, toExcelFormat(kendo.culture().calendar.patterns.d));
	                }
	            } else if (typeof value == "number") {
	                value = kendo.spreadsheet.calc.runtime.limitPrecision(value);
	            }

	            this.list.value(start, end, value);
	        }
	    });

	    function toExcelFormat(format) {
	        return format.replace(/M/g, "m").replace(/'/g, '"').replace(/tt/, "am/pm");
	    }

	    kendo.spreadsheet.PropertyBag = kendo.Class.extend({
	        specs: [
	            { property: Property, name: "format", value: null, sortable: true, serializable: true },
	            { property: ValueProperty, name: "value", value: null, sortable: true, serializable: true, depends: "format" },
	            { property: Property, name: "formula", value: null, sortable: true, serializable: true },
	            { property: Property, name: "background", value: null, sortable: true, serializable: true },
	            { property: JsonProperty, name: "vBorders", value: null, sortable: false, serializable: false },
	            { property: JsonProperty, name: "hBorders", value: null, sortable: false, serializable: false },
	            { property: Property, name: "color", value: null, sortable: true, serializable: true },
	            { property: Property, name: "fontFamily", value: null, sortable: true, serializable: true },
	            { property: Property, name: "underline", value: null, sortable: true, serializable: true },
	            { property: Property, name: "fontSize", value: null, sortable: true, serializable: true },
	            { property: Property, name: "italic", value: null, sortable: true, serializable: true },
	            { property: Property, name: "bold", value: null, sortable: true, serializable: true },
	            { property: Property, name: "textAlign", value: null, sortable: true, serializable: true },
	            { property: Property, name: "indent", value: null, sortable: true, serializable: true },
	            { property: Property, name: "verticalAlign", value: null, sortable: true, serializable: true },
	            { property: Property, name: "wrap", value: null, sortable: true, serializable: true },
	            { property: Property, name: "validation", value: null, sortable: false, serializable: true },
	            { property: Property, name: "enable", value: null, sortable: false, serializable: true },
	            { property: Property, name: "link", value: null, sortable: true, serializable: true },
	            { property: Property, name: "editor", value: null, sortable: true, serializable: true },
	            { property: Property, name: "comment", value: null, sortable: true, serializable: true },
	            { property: Property, name: "html", value: null, sortable: true, serializable: true }
	        ],

	        init: function(rowCount, columnCount, defaultValues) {
	            defaultValues = defaultValues || {};
	            var cellCount = rowCount * columnCount - 1;

	            this.rowCount = rowCount;
	            this.columnCount = columnCount;
	            this.cellCount = cellCount;
	            this.properties = {};
	            this.lists = {};

	            this.specs.forEach(function(spec) {
	                var name = spec.name;
	                var value = defaultValues[name];
	                if (value === undefined) {
	                    value = spec.value;
	                }
	                this.lists[name] = new kendo.spreadsheet.SparseRangeList(0, cellCount, value);
	                var prop = this.properties[name] = new spec.property(this.lists[name], this.lists[spec.depends]);
	                prop.spec = spec;
	            }, this);

	            // XXX: this is a hack but I have no better ideas at this
	            // point.  The getState() method in a SparseRangeList
	            // clones the tree (which just copies values over), but
	            // formulas are objects maintaining complex state.
	            // https://github.com/telerik/kendo-ui-core/issues/2816
	            this.lists.formula.tree.clone = cloneFormulaTree;
	            this.lists.validation.tree.clone = cloneFormulaTree;
	        },

	        getState: function() {
	            var state = {};

	            this.specs.forEach(function(spec) {
	               state[spec.name] = this.lists[spec.name].getState();
	            }, this);

	            return state;
	        },

	        setState: function(state) {
	            this.specs.forEach(function(spec) {
	                this.lists[spec.name].setState(state[spec.name]);
	            }, this);
	        },

	        get: function(name, index) {
	            if (index === undefined) {
	                return this.lists[name];
	            }

	            switch (name) {
	              case "borderRight":
	                index += this.rowCount;
	                /* falls through */
	              case "borderLeft":
	                name = "vBorders";
	                break;

	              case "borderBottom":
	                index++;
	                /* falls through */
	              case "borderTop":
	                name = "hBorders";
	                break;
	            }
	            return index > this.cellCount ? null : this.properties[name].get(index);
	        },

	        set: function(name, start, end, value) {
	            switch (name) {
	              case "borderRight":
	                start += this.rowCount;
	                end += this.rowCount;
	                /* falls through */
	              case "borderLeft":
	                name = "vBorders";
	                break;

	              case "borderBottom":
	                start++;
	                end++;
	                /* falls through */
	              case "borderTop":
	                name = "hBorders";
	                break;
	            }
	            if (start <= end && end <= this.cellCount) {
	                this.properties[name].set(start, end, value);
	            }
	        },

	        fromJSON: function(index, value) {
	            for (var si = 0; si < this.specs.length; si++) {
	                var spec = this.specs[si];

	                if (spec.serializable) {
	                    if (value[spec.name] !== undefined) {
	                        this.set(spec.name, index, index, value[spec.name], false);
	                    }
	                }
	            }

	            [ "borderLeft", "borderRight", "borderTop", "borderBottom" ].forEach(function(b){
	                if (value[b] !== undefined) {
	                    this.set(b, index, index, value[b]);
	                }
	            }, this);
	        },

	        copy: function(sourceStart, sourceEnd, targetStart) {
	            this.specs.forEach(function(spec) {
	                this.properties[spec.name].copy(sourceStart, sourceEnd, targetStart);
	            }, this);
	        },

	        iterator: function(name, start, end) {
	            var prop = this.properties[name];
	            var iter = prop.iterator(start, end), at = iter.at;
	            var cellCount = this.cellCount;
	            iter.at = function(index) {
	                return index > cellCount ? null : prop.parse(at.call(iter, index));
	            };
	            iter.name = name;
	            iter.value = prop.spec.value;
	            return iter;
	        },

	        sortable: function() {
	            return this.specs.filter(function(spec) { return spec.sortable; })
	                .map(function(spec) {
	                    return this.lists[spec.name];
	                }, this);
	        },

	        iterators: function(start, end) {
	            return this.specs.reduce(function(ret, spec) {
	                if (spec.serializable) {
	                    ret.push(this.iterator(spec.name, start, end));
	                }
	                return ret;
	            }.bind(this), []);
	        },

	        forEach: function(start, end, callback) {
	            var iterators = this.iterators(start, end);
	            var hBorders = this.iterator("hBorders", start, end + 1);
	            var leftBorders = this.iterator("vBorders", start, end);
	            var rightBorders = this.iterator("vBorders", start + this.rowCount, end + this.rowCount);
	            var values, index;

	            function addBorder(name, iterator, index) {
	                var val = iterator.at(index);
	                if (val !== iterator.value) {
	                    values[name] = val;
	                }
	            }

	            for (index = start; index <= end; index++) {
	                values = {};

	                for (var i = 0; i < iterators.length; i++) {
	                    var iterator = iterators[i];
	                    var value = iterator.at(index);

	                    if (value !== iterator.value) {
	                        values[iterator.name] = value;
	                    }
	                }

	                addBorder("borderLeft", leftBorders, index);
	                addBorder("borderRight", rightBorders, index + this.rowCount);
	                addBorder("borderTop", hBorders, index);
	                if ((index + 1) % this.rowCount) {
	                    addBorder("borderBottom", hBorders, index + 1);
	                }

	                callback(values);
	            }
	        },

	        forEachProperty: function(callback) {
	            for (var name in this.properties) {
	                callback(this.properties[name]);
	            }
	        }
	    });

	    function cloneFormulaValue(x) {
	        x = x.clone();
	        x.value = x.value.deepClone(); // x.value is Formula or Validation
	        return x;
	    }

	    function cloneFormulaTree() {
	        var tree = this.map(cloneFormulaValue);
	        tree.clone = cloneFormulaTree; // because it's a new RangeTree now
	        return tree;
	    }

	    kendo.spreadsheet.ALL_PROPERTIES = kendo.spreadsheet.PropertyBag.prototype.specs.reduce(function(a, spec) {
	        if (spec.serializable) {
	            a.push(spec.name);
	        }
	        return a;
	    }, [ "borderTop", "borderRight", "borderBottom", "borderLeft" ]);

	})(window.kendo);

	}, __webpack_require__(3));


/***/ })

/******/ });