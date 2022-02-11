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

	__webpack_require__(1687);
	module.exports = __webpack_require__(1687);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

	module.exports = require("../util/text-metrics");

/***/ }),

/***/ 1682:
/***/ (function(module, exports) {

	module.exports = require("../util/main");

/***/ }),

/***/ 1687:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(958), __webpack_require__(1682) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var $ = kendo.jQuery;

	    var UnionRef = kendo.spreadsheet.UnionRef;
	    var CellRef = kendo.spreadsheet.CellRef;
	    var RangeRef = kendo.spreadsheet.RangeRef;

	    var PROPERTIES = [
	        "color", "fontFamily", "underline",
	        "italic", "bold", "textAlign", "indent",
	        "verticalAlign", "background", "format", "link", "editor",
	        "borderTop", "borderRight", "borderBottom", "borderLeft",
	        "comment", "html"
	    ];

	    var Range = kendo.Class.extend({
	        init: function(ref, sheet) {
	            this._sheet = sheet;
	            this._ref = ref;
	        },

	        clone: function() {
	            return new Range(this._ref.clone(), this._sheet);
	        },

	        skipHiddenCells: function() {
	            var refs = [];
	            var self = this, sheet = self._sheet;
	            var skipHiddenRows = sheet.isHiddenRow.bind(sheet);
	            var skipHiddenCols = sheet.isHiddenColumn.bind(sheet);
	            self._ref.forEach(function(ref){
	                ref = self._normalize(ref.toRangeRef());
	                var tl = ref.topLeft, br = ref.bottomRight;
	                var rows = partition(tl.row, br.row, skipHiddenRows);
	                var cols = partition(tl.col, br.col, skipHiddenCols);
	                for (var i = 0; i < rows.length; ++i) {
	                    for (var j = 0; j < cols.length; ++j) {
	                        refs.push(new RangeRef(
	                            new CellRef(rows[i].begin, cols[j].begin),
	                            new CellRef(rows[i].end, cols[j].end)
	                        ));
	                    }
	                }
	            });
	            return sheet.range(refs.length > 1 ? new UnionRef(refs) : refs[0]);
	        },

	        _normalize: function(ref) {
	            return this._sheet._grid.normalize(ref);
	        },

	        _set: function(name, value, noTrigger) {
	            var self = this;
	            var sheet = self._sheet;
	            self._ref.forEach(function(ref) {
	                var result = ref;
	                var valueProp = name === "value" || name === "formula" || name === "link";

	                // Set values/formulas/links only to the topLeft cell when merged
	                if(valueProp && ref.topLeft) {
	                    var topLeftRef = new CellRef(ref.topLeft.row, ref.topLeft.col);

	                    sheet.forEachMergedCell(function(f){
	                        if(f.intersects(topLeftRef)) {
	                            result = topLeftRef;
	                        }
	                    });
	                }

	                sheet._set(result.toRangeRef(), name, value);
	            });
	            if (!noTrigger) {
	                sheet.triggerChange({
	                    recalc : name == "formula" || name == "value" || name == "validation",
	                    value  : value,
	                    range  : self,
	                    ref    : self._ref
	                });
	            }
	            return self;
	        },

	        _get: function(name) {
	            return this._sheet._get(this._ref.toRangeRef(), name);
	        },

	        _property: function(name, value) {
	            if (value === undefined) {
	                return this._get(name);
	            } else {
	                return this._set(name, value);
	            }
	        },

	        value: function(value) {
	            if (value !== undefined) {
	                // When value is set through the public API we must clear the
	                // formula.  Don't trigger change (third parameter), it'll be
	                // done when setting the value below
	                this._set("formula", null, true);
	            }
	            return this._property("value", value);
	        },

	        html: function(value) {
	            return this._property("html", value);
	        },

	        resize: function(direction) {
	            var ref = this._resizedRef(direction);
	            return new Range(ref, this._sheet);
	        },

	        _resizedRef: function(direction) {
	            return this._ref.map(function(ref) {
	                return ref.toRangeRef().resize(direction);
	            });
	        },

	        input: function(value, options) {
	            options = $.extend({
	                arrayFormula: false
	            }, options);
	            var existingFormat = this._get("format"), x;
	            if (value !== undefined) {
	                var tl = this._ref.toRangeRef().topLeft;
	                x = kendo.spreadsheet.calc.parse(this._sheet.name(), tl.row, tl.col, value, existingFormat);
	                this._sheet.batch(function() {
	                    var formula = null;
	                    if (x.type == "exp") {
	                        formula = kendo.spreadsheet.calc.compile(x);
	                    } else if (existingFormat != "@") {
	                        var existingFormatType = existingFormat &&
	                            kendo.spreadsheet.formatting.type(x.value, existingFormat);
	                        if (x.type == "date" && existingFormatType != "date") {
	                            this.format(x.format || toExcelFormat(kendo.culture().calendar.patterns.d));
	                        } else if (x.type == "percent" && existingFormatType != "percent") {
	                            this.format(x.value*100 == (x.value*100|0) ? "0%" : "0.00%");
	                        } else if (x.format) {
	                            if (!existingFormat || x.currency ||
	                                (existingFormatType == "number" && x.type == "number" &&
	                                 x.format.length > existingFormat.length)) {
	                                this.format(x.format);
	                            }
	                        }
	                    } else if (x.type != "string") {
	                        x.value = value;
	                    }
	                    this.formula(formula, options.arrayFormula);
	                    if (!formula) {
	                        // value() will clear the formula.  Lucky for us,
	                        // x.value is undefined so it actually won't, but let's
	                        // be explicit and only set value if formula is not
	                        // present.
	                        this.value(x.value);
	                    }
	                }.bind(this), { recalc: true, value: value, ref: this._ref, editorChange: this._sheet.isInEditMode() });

	                return this;
	            } else {
	                value = this._get("value");
	                var formula = this._get("formula");
	                var type = existingFormat && !formula && kendo.spreadsheet.formatting.type(value, existingFormat);

	                if (formula) {
	                    // it's a Formula object which stringifies to the
	                    // formula as text (without the starting `=`).
	                    value = "=" + formula;
	                } else OUT: { // jshint ignore:line
	                    if (existingFormat && type == "date") {
	                        // check if we could parse back the displayed value.
	                        // https://github.com/telerik/kendo/issues/5335
	                        var t1 = kendo.spreadsheet.formatting.text(value, existingFormat);
	                        x = kendo.spreadsheet.calc.parse(null, null, null, t1, existingFormat); // it's not a formula so we don't need sheet/row/col
	                        var t2 = kendo.spreadsheet.formatting.text(x.value, existingFormat);
	                        if (t1 == t2) {
	                            value = t1;
	                            break OUT; // jshint ignore:line
	                        }
	                    }
	                    if (type === "date") {
	                        value = kendo.toString(kendo.spreadsheet.numberToDate(value), kendo.culture().calendar.patterns.d);
	                    } else if (type === "percent") {
	                        value = kendo.spreadsheet.calc.runtime.limitPrecision(value * 100) + "%";
	                    } else if (typeof value == "string" &&
	                               (/^[=']/.test(value) ||
	                                (/^(?:true|false)$/i).test(value) ||
	                                looksLikeANumber(value))) {
	                        value = "'" + value;
	                    } else if (this._sheet._useCultureDecimals() &&
	                               typeof value == "number" &&
	                               value != Math.floor(value)) {
	                        value = String(value).replace(".", kendo.culture().numberFormat["."]);
	                    }
	                }

	                return value;
	            }
	        },

	        enable: function(value) {
	            if (value === undefined) {
	                return !kendo.util.withExit(function(exit){
	                    this._sheet.forEach(this._ref, function(_, __, data) {
	                        if (data.enable === false) {
	                            exit(true);
	                        }
	                    });
	                }, this);
	            }

	            return this._property("enable", value);
	        },

	        formula: function(value, arrayFormula) {
	            var self = this;
	            if (value === undefined) {
	                var f = self._get("formula");
	                return f ? "" + f : null; // stringify if present
	            }
	            if (arrayFormula) {
	                // when setting an array formula, we want to set it on
	                // the first cell only, as it will fill the whole
	                // range.
	                var ref = this._ref.toRangeRef();
	                value = self._sheet.range(ref.topLeft)
	                    ._set("formula", value)
	                    ._get("formula"); // make sure we get the compiled Formula, not a string

	                if (value) {    // could be null.
	                    // this will be used in FormulaContext -- it's the
	                    // range that the formula must populate.
	                    value.setArrayFormulaRange(ref);
	                }
	            } else {
	                self._set("formula", value);
	            }
	            return self;
	        },

	        intersectingArrayFormula: function() {
	            var ref = this._ref.clone().simplify().setSheet(this._sheet.name());
	            return kendo.util.withExit(function(exit){
	                this._sheet._forFormulas(function(f){
	                    var r = f.arrayFormulaRange;
	                    if (r && (r = ref.intersect(r)) !== kendo.spreadsheet.NULLREF) {
	                        exit({ formula: f, intersection: r });
	                    }
	                });
	            }, this);
	        },

	        canEditArrayFormula: function() {
	            var x = this.intersectingArrayFormula();
	            if (x) {
	                // we want to allow editing only when the new range is
	                // at least as big as the original range (i.e. no
	                // cells removed)
	                return x.formula.arrayFormulaRange.eq(x.intersection);
	            }
	            return true;
	        },

	        validation: function(value) {
	            //TODO: Accept objects only?

	            if (value === undefined) {
	                var f = this._get("validation");

	                return f ? f.toJSON() : null; // stringify if present
	            }
	            return this._property("validation", value);
	        },

	        _getValidationState: function() {
	            var ref = this._ref.toRangeRef();
	            var topLeftRow = ref.topLeft.row;
	            var topLeftCol = ref.topLeft.col;
	            var bottomRightRow = ref.bottomRight.row;
	            var bottomRightCol = ref.bottomRight.col;
	            var ci, ri;

	            for (ci = topLeftCol; ci <= bottomRightCol; ci ++) {
	                for (ri = topLeftRow; ri <= bottomRightRow; ri ++) {
	                    var validation = this._sheet._validation(ri, ci);

	                    if (validation && validation.type === "reject" && validation.value === false) {
	                        return validation;
	                    }
	                }
	            }

	            return false;
	        },

	        merge: function() {
	            this._ref = this._sheet._merge(this._ref);
	            return this;
	        },

	        unmerge: function() {
	            var mergedCells = this._sheet._mergedCells;

	            this._ref.forEach(function(ref) {
	                ref.toRangeRef().intersecting(mergedCells).forEach(function(mergedRef) {
	                    mergedCells.splice(mergedCells.indexOf(mergedRef), 1);
	                });
	            });

	            this._sheet.triggerChange({});

	            return this;
	        },

	        select: function() {
	            this._sheet.select(this._ref);

	            return this;
	        },

	        values: function(values) {
	            if (this._ref instanceof UnionRef) {
	                throw new Error("Unsupported for multiple ranges.");
	            }

	            if (this._ref === kendo.spreadsheet.NULLREF) {
	                if (values !== undefined) {
	                    throw new Error("Unsupported for NULLREF.");
	                } else {
	                    return [];
	                }
	            }

	            var ref = this._ref.toRangeRef();
	            var topLeftRow = ref.topLeft.row;
	            var topLeftCol = ref.topLeft.col;
	            var bottomRightRow = ref.bottomRight.row;
	            var bottomRightCol = ref.bottomRight.col;
	            var ci, ri;

	            if (values === undefined) {
	                values = new Array(ref.height());

	                for (var vi = 0; vi < values.length; vi++) {
	                    values[vi] = new Array(ref.width());
	                }

	                for (ci = topLeftCol; ci <= bottomRightCol; ci ++) {
	                    for (ri = topLeftRow; ri <= bottomRightRow; ri ++) {
	                        values[ri - topLeftRow][ci - topLeftCol] = this._sheet._value(ri, ci);
	                    }
	                }

	                return values;
	            } else {
	                this._sheet._set(ref, "formula", null);

	                for (ci = topLeftCol; ci <= bottomRightCol; ci ++) {
	                    for (ri = topLeftRow; ri <= bottomRightRow; ri ++) {
	                        var row = values[ri - topLeftRow];

	                        if (row) {
	                            var value = row[ci - topLeftCol];

	                            if (value !== undefined) {
	                                this._sheet._value(ri, ci, value);
	                            }
	                        }
	                    }
	                }

	                this._sheet.triggerChange({ recalc: true, ref: ref });

	                return this;
	            }
	        },

	        _properties: function(props, isAutofill) {
	            if (this._ref instanceof UnionRef) {
	                throw new Error("Unsupported for multiple ranges.");
	            }

	            if (this._ref === kendo.spreadsheet.NULLREF) {
	                if (props !== undefined) {
	                    throw new Error("Unsupported for NULLREF.");
	                } else {
	                    return [];
	                }
	            }

	            var ref = this._ref.toRangeRef();
	            var topLeftRow = ref.topLeft.row;
	            var topLeftCol = ref.topLeft.col;
	            var bottomRightRow = ref.bottomRight.row;
	            var bottomRightCol = ref.bottomRight.col;
	            var ci, ri;
	            var sheet = this._sheet;

	            if (props === undefined) {
	                props = new Array(ref.height());
	                sheet.forEach(ref, function(row, col, data){
	                    row -= topLeftRow;
	                    col -= topLeftCol;
	                    var line = props[row] || (props[row] = []);
	                    line[col] = data;
	                });
	                return props;
	            }
	            else {
	                var data;
	                ref = ref.clone();
	                var setProp = function(propName) {
	                    var propValue = data[propName];
	                    ref.topLeft.row = ref.bottomRight.row = ri;
	                    ref.topLeft.col = ref.bottomRight.col = ci;

	                    if (propName == "value") {
	                        sheet._set(ref, "formula", null);
	                    }

	                    sheet._set(ref, propName, propValue);
	                };

	                for (ci = topLeftCol; ci <= bottomRightCol; ci ++) {
	                    if (!isAutofill && sheet.isHiddenColumn(ci)) {
	                        continue;
	                    }
	                    for (ri = topLeftRow; ri <= bottomRightRow; ri ++) {
	                        if (!isAutofill && sheet.isHiddenRow(ri)) {
	                            continue;
	                        }
	                        if (isAutofill && sheet.isFilteredRow(ri)) {
	                            continue;
	                        }
	                        var row = props[ri - topLeftRow];
	                        if (row) {
	                            data = row[ci - topLeftCol];
	                            if (data) {
	                                Object.keys(data).forEach(setProp);
	                            }
	                        }
	                    }
	                }
	                sheet.triggerChange({ recalc: true, ref: this._ref });
	                return this;
	            }
	        },

	        clear: function(options) {
	            options = options || {};
	            var clearAll = options.clearAll || !Object.keys(options).length;

	            var sheet = this._sheet;

	            var reason = {
	                recalc: clearAll || options.contentsOnly,
	                ref: this._ref
	            };

	            sheet.batch(function() {

	                if (reason.recalc) {
	                    this.formula(null);
	                }

	                if (clearAll) {
	                    this.validation(null);
	                }

	                if (clearAll || options.formatOnly) {
	                    PROPERTIES.forEach(function(x) {
	                        if (!(options.keepBorders && /^border/i.test(x))) {
	                            this[x](null);
	                        }
	                    }.bind(this));
	                    this.fontSize(null);
	                    this.wrap(null);
	                    this.unmerge();
	                }

	            }.bind(this), reason);

	            return this;
	        },

	        clearContent: function() {
	            return this.clear({ contentsOnly: true });
	        },

	        clearFormat: function() {
	            return this.clear({ formatOnly: true });
	        },

	        isSortable: function() {
	            return !this.cantSort();
	        },

	        cantSort: function() {
	            if (this._ref instanceof UnionRef) {
	                return { code: "cantSortMultipleSelection",
	                         message: "Unsupported for multiple ranges." };
	            }
	            if (this._ref === kendo.spreadsheet.NULLREF) {
	                return { code: "cantSortNullRef",
	                         message: "Unsupported for NULLREF." };
	            }
	            var mc = this._sheet._getMergedCells(this._ref.toRangeRef());
	            var primary = mc.primary;
	            var secondary = mc.secondary;
	            var width = null, height = null;
	            var cant = {};
	            try {
	                this._sheet.forEach(this, function(row, col){
	                    var id = new CellRef(row, col).print();
	                    var merged = primary[id];
	                    if (merged) {
	                        if (width === null) {
	                            width = merged.width();
	                            height = merged.height();
	                        } else if (!(width == merged.width() && height == merged.height())) {
	                            throw cant;
	                        }
	                    }
	                    else if (!secondary[id] && mc.hasMerged) {
	                        throw cant;
	                    }
	                });
	            } catch(ex) {
	                if (ex !== cant) {
	                    throw ex;
	                }
	                return {
	                    code: "cantSortMixedCells",
	                    message: "Unsupported for range containing cells of different shapes."
	                };
	            }
	            return false;
	        },

	        sort: function(spec) {
	            var reason = this.cantSort();
	            if (reason) {
	                throw new Error(reason.message);
	            }

	            if (spec === undefined) {
	                spec = { column: 0 };
	            }

	            spec = spec instanceof Array ? spec : [spec];

	            this._sheet._sortBy(this._ref.toRangeRef(), spec.map(function(spec, index) {
	                if (typeof spec === "number") {
	                    spec = { column: spec };
	                }

	                return {
	                    index: spec.column === undefined ? index : spec.column,
	                    ascending: spec.ascending === undefined ? true : spec.ascending
	                };
	            }));

	            return this;
	        },

	        isFilterable: function() {
	            return !(this._ref instanceof UnionRef);
	        },

	        filter: function(spec) {
	            if (this._ref instanceof UnionRef) {
	                throw new Error("Unsupported for multiple ranges.");
	            }

	            if (spec === false) {
	                this.clearFilters();
	            } else {
	                spec = spec === true ? [] : spec instanceof Array ? spec : [spec];

	                this._sheet._filterBy(this._ref.toRangeRef(), spec.map(function(spec, index) {
	                    return {
	                        index: spec.column === undefined ? index : spec.column,
	                        filter: spec.filter
	                    };
	                }));
	            }

	            return this;
	        },

	        clearFilter: function(spec) {
	            this._sheet.clearFilter(spec);
	        },

	        clearFilters: function() {
	            var filter = this._sheet.filter();
	            var spec = [];

	            if (filter) {
	                for (var i = 0; i < filter.columns.length; i++) {
	                    spec.push(filter.columns[i].index);
	                }

	                this._sheet.batch(function() {
	                    this.clearFilter(spec);
	                    this._filter = null;
	                }, { layout: true, filter: true });
	            }
	        },

	        hasFilter: function() {
	            var filter = this._sheet.filter();
	            return !!filter;
	        },

	        leftColumn: function() {
	            return new Range(this._ref.leftColumn(), this._sheet);
	        },

	        rightColumn: function() {
	            return new Range(this._ref.rightColumn(), this._sheet);
	        },

	        topRow: function() {
	            return new Range(this._ref.topRow(), this._sheet);
	        },

	        bottomRow: function() {
	            return new Range(this._ref.bottomRow(), this._sheet);
	        },

	        column: function(column) {
	            return new Range(this._ref.toColumn(column), this._sheet);
	        },

	        row: function(row) {
	            return new Range(this._ref.toRow(row), this._sheet);
	        },

	        forEachRow: function(callback) {
	            this._ref.forEachRow(function(ref) {
	                callback(new Range(ref, this._sheet));
	            }.bind(this));
	        },

	        forEachColumn: function(callback) {
	            this._ref.forEachColumn(function(ref) {
	                callback(new Range(ref, this._sheet));
	            }.bind(this));
	        },

	        sheet: function() {
	            return this._sheet;
	        },

	        topLeft: function() {
	            return this._ref.toRangeRef().topLeft;
	        },

	        intersectingMerged: function() {
	            var sheet = this._sheet;
	            var mergedCells = [];

	            sheet._mergedCells.forEach(function(ref) {
	                if (ref.intersects(this._ref)) {
	                    mergedCells.push(ref.toString());
	                }
	            }.bind(this));

	            return mergedCells;
	        },

	        getState: function(propertyName) {
	            var topLeft = this._ref.first();
	            var state = {
	                ref     : topLeft,
	                data    : [],
	                origRef : this._ref,

	                // save row heights
	                rows    : this._sheet._rows.getState()
	            };
	            var properties;
	            if (!propertyName) {
	                properties = kendo.spreadsheet.ALL_PROPERTIES;
	                state.mergedCells = this.intersectingMerged();
	            } else if (propertyName === "input") {
	                properties = ["value", "formula"];
	            } else if (propertyName === "border") {
	                properties = ["borderLeft", "borderTop", "borderRight", "borderBottom"];
	            } else {
	                properties = [propertyName];
	            }

	            var data = state.data;
	            this.forEachCell(function(row, col, cell) {
	                var cellState = {};
	                var dr = row - topLeft.row;
	                var dc = col - topLeft.col;
	                if (!data[dr]) {
	                    data[dr] = [];
	                }
	                data[dr][dc] = cellState;

	                properties.forEach(function(property) {
	                    var value = typeof cell[property] == "undefined" ? null : cell[property];
	                    if (value instanceof kendo.spreadsheet.calc.runtime.Formula ||
	                        value instanceof kendo.spreadsheet.validation.Validation)
	                    {
	                        value = value.deepClone();
	                    }
	                    cellState[property] = value;
	                });
	            });

	            return state;
	        },

	        setState: function(state, clipboard) {
	            var sheet = this._sheet;
	            var origin = this._ref.first();
	            var rowDelta = state.ref.row - origin.row;
	            var colDelta = state.ref.col - origin.col;
	            var internalClipboard = clipboard && !clipboard.isExternal();
	            var externalClipboard = clipboard && !internalClipboard;

	            sheet.batch(function() {
	                if (state.mergedCells) {
	                    this.unmerge();
	                }

	                if (!clipboard) {
	                    // restore row heights.  they won't be available
	                    // when this function is called from the clipboard
	                    // code.
	                    this._sheet._rows.setState(state.rows);
	                }

	                var row = origin.row;
	                var hasFilter = this.hasFilter();
	                state.data.forEach(function(data, dr){
	                    if (hasFilter && internalClipboard && sheet.isHiddenRow(state.ref.row + dr)) {
	                        return;
	                    }
	                    var col = origin.col;
	                    data.forEach(function(cellState, dc){
	                        if (hasFilter && internalClipboard && sheet.isHiddenColumn(state.ref.col + dc)) {
	                            return;
	                        }
	                        var range = clipboard ? sheet.range(row, col)
	                            : sheet.range(origin.row + dr, origin.col + dc);
	                        if (range.enable()) {
	                            for (var property in cellState) {
	                                if (property != "value") {
	                                    // make sure value comes last (after the loop),
	                                    // because if we set value here and get get to
	                                    // formula later and cellState.formula is null,
	                                    // it'll clear the value.

	                                    // when pasting, do not copy "disabled" state
	                                    if (!(clipboard && property == "enable")) {
	                                        range._set(property, cellState[property]);
	                                    }
	                                }
	                            }
	                            if (!cellState.formula) {
	                                // only need to set the value if we don't have a
	                                // formula.  Go through the lower level setter rather
	                                // than range.value(...), because range.value will clear
	                                // the formula!  chicken and egg issues.
	                                if (externalClipboard) {
	                                    // https://github.com/telerik/kendo-ui-core/issues/1688
	                                    // if we have a paste from external source, we should parse the
	                                    // value as if it were inputted.  This allows to treat numbers
	                                    // as numbers, or `=sum(a1:b2)` as formula (Google Sheets does
	                                    // the same).  A difference though is that we can't store an
	                                    // invalid Formula and display #ERROR, like G.S. does, so in
	                                    // case of a parse error we'll just set the value as string.
	                                    try {
	                                        if (cellState.value == null) { // jshint ignore:line
	                                            range._set("value", null);
	                                        } else {
	                                            range.input(cellState.value);
	                                        }
	                                    } catch(ex) {
	                                        range._set("value", cellState.value);
	                                    }
	                                } else {
	                                    range._set("value", cellState.value);
	                                }
	                            }
	                        }
	                        col++;
	                    });
	                    row++;
	                });

	                if (state.mergedCells) {
	                    state.mergedCells.forEach(function(merged) {
	                        merged = sheet._ref(merged).relative(rowDelta, colDelta, 3);
	                        sheet.range(merged).merge();
	                    }, this);
	                }
	            }.bind(this), { recalc: true, ref: this._ref });
	        },

	        _adjustRowHeight: function() {
	            var that = this;
	            var sheet = that._sheet;
	            var mc = sheet._getMergedCells(that._ref.toRangeRef());
	            var primary = mc.primary;
	            var secondary = mc.secondary;

	            sheet.batch(function() {
	                that.forEachRow(function(rowRange){
	                    var row = rowRange._ref.topLeft.row;
	                    var height = sheet.rowHeight(row);
	                    if (!height) {
	                        // do not adjust if hidden.
	                        // https://github.com/telerik/kendo-ui-core/issues/6272
	                        // (case 2)
	                        return;
	                    }
	                    rowRange.forEachCell(function(row, col, cell){
	                        var id = new CellRef(row, col).print();
	                        if (secondary[id]) {
	                            return;
	                        }
	                        var merged = primary[id];
	                        var width;
	                        if (merged) {
	                            width = sheet._columns.sum(merged.topLeft.col,
	                                                       merged.bottomRight.col);
	                        } else {
	                            width = sheet.columnWidth(col);
	                        }
	                        var data = cell.value;
	                        if (cell.format && data != null) { // jshint ignore:line
	                            data = kendo.spreadsheet.formatting.format(data, cell.format);
	                        }
	                        var textHeight = kendo.spreadsheet.util.getTextHeight(
	                            data, width, cell.fontFamily, cell.fontSize, cell.wrap);
	                        height = Math.max(height, textHeight);
	                    });
	                    sheet.rowHeight(row, height);
	                });
	            }, { layout: true });
	        },

	        forEachCell: function(callback) {
	            this._ref.forEach(function(ref) {
	                this._sheet.forEach(ref.toRangeRef(), callback.bind(this));
	            }.bind(this));
	        },

	        hasValue: function() {
	            var defStyle = this._sheet._defaultCellStyle;
	            return kendo.util.withExit(function(exit){
	                this.forEachCell(function(row, col, cell) {
	                    // we must not consider cells that only have same values
	                    // as defaultCellStyle, or otherwise we will forbid
	                    // inserting rows/cols in an empty sheet.
	                    for (var key in cell) {
	                        var val = cell[key];
	                        if (val !== undefined && val !== null && val !== defStyle[key]) {
	                            exit(true);
	                        }
	                    }
	                });
	            }, this);
	        },

	        wrap: function(flag) {
	            if (flag === undefined) {
	                return !!this._property("wrap");
	            }
	            this._property("wrap", flag);
	            if (flag !== null) {
	                this._adjustRowHeight();
	            }
	            return this;
	        },

	        fontSize: function(size) {
	            if (size === undefined) {
	                return this._property("fontSize");
	            }
	            this._property("fontSize", size);
	            if (size !== null) {
	                this._adjustRowHeight();
	            }
	            return this;
	        },

	        draw: function(options, callback) {
	            this._sheet.draw(this, options, callback);
	        },

	        insideBorders: function(value) {
	            return this.insideVerticalBorders(value).insideHorizontalBorders(value);
	        },

	        insideVerticalBorders: function(value) {
	            this._ref.forEach(function(ref){
	                if (ref instanceof RangeRef && ref.width() > 1) {
	                    ref = ref.clone();
	                    ref.topLeft.col++;
	                    this._sheet.range(ref)._set("vBorders", value);
	                }
	            }, this);
	            return this;
	        },

	        insideHorizontalBorders: function(value) {
	            this._ref.forEach(function(ref){
	                if (ref instanceof RangeRef && ref.height() > 1) {
	                    ref = ref.clone();
	                    ref.topLeft.row++;
	                    this._sheet.range(ref)._set("hBorders", value);
	                }
	            }, this);
	            return this;
	        }
	    });

	    function partition(begin, end, predicate) {
	        while (begin <= end && predicate(begin)) {
	            begin++;
	        }
	        if (begin > end) {
	            return [];
	        }
	        for (var i = begin + 1; i <= end; ++i) {
	            if (predicate(i)) {
	                return [
	                    { begin: begin, end: i - 1 }
	                ].concat(partition(i + 1, end, predicate));
	            }
	        }
	        return [{ begin: begin, end: end }];
	    }

	    // use $.each instead of forEach to work in oldIE
	    $.each(PROPERTIES, function(i, property) {
	        Range.prototype[property] = function(value) {
	            return this._property(property, value);
	        };
	    });

	    function toExcelFormat(format) {
	        return format.replace(/M/g, "m").replace(/'/g, '"').replace(/tt/, "am/pm");
	    }

	    function looksLikeANumber(str) {
	        // XXX: could do with just a regexp instead of calling parse.
	        return !(/^=/.test(str)) && (/number|percent/).test(kendo.spreadsheet.calc.parse(null, 0, 0, str).type);
	    }

	    var measureBox = $('<div style="position: absolute !important; top: -4000px !important; height: auto !important;' +
	                        'padding: 1px 3px !important; box-sizing: border-box; margin: 0 !important; border: 1px solid black !important;' +
	                        'line-height: normal !important; visibility: hidden !important;' +
	                        'white-space: pre-wrap;"></div>'
	                      )[0];

	    function getTextHeight(text, width, fontFamily, fontSize, wrap) {
	        var styles = {
	            "baselineMarkerSize" : 0,
	            "width" : (wrap === true) ? width + "px" : "auto",
	            "font-size" : (fontSize || 12) + "px",
	            "font-family" : fontFamily || "Arial",
	            "white-space" : (wrap === true) ? "pre-wrap" : "pre",
	            "overflow-wrap" : (wrap === true) ? "break-word" : "normal",
	            "word-wrap" : (wrap === true) ? "break-word" : "normal"
	        };

	        return kendo.util.measureText(text, styles, { box: measureBox, normalizeText: false }).height;
	    }

	    kendo.spreadsheet.util = { getTextHeight: getTextHeight };
	    kendo.spreadsheet.Range = Range;
	})(window.kendo);

	}, __webpack_require__(3));


/***/ })

/******/ });