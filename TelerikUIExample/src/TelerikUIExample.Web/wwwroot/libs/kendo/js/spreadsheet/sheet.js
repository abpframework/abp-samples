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

	__webpack_require__(1693);
	module.exports = __webpack_require__(1693);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

	module.exports = require("../kendo.color");

/***/ }),

/***/ 1648:
/***/ (function(module, exports) {

	module.exports = require("./runtime");

/***/ }),

/***/ 1676:
/***/ (function(module, exports) {

	module.exports = require("./references");

/***/ }),

/***/ 1693:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(957), __webpack_require__(1648), __webpack_require__(1694), __webpack_require__(1676) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    /* jshint laxbreak:true, eqnull:true */

	    var RangeRef = kendo.spreadsheet.RangeRef;
	    var UnionRef = kendo.spreadsheet.UnionRef;
	    var CellRef = kendo.spreadsheet.CellRef;
	    var Range = kendo.spreadsheet.Range;

	    // This is a “dynamic variable” (see Greenspun's 10th rule).  It's
	    // bound to an array via sheet._saveModifiedFormulas (which see)
	    // while the callback runs.  The goal is to enable external code
	    // to get a list of formulas or validations that have been
	    // adjusted as an effect of an insert/delete row/column operation,
	    // to be able to undo it.
	    //
	    // The reason why simply saving the state via sheet.getState() or
	    // range.getState() won't suffice is that an insert or delete
	    // operation can have far-reaching effects, like adjusting
	    // formulas from another sheet.
	    var MODIFIED_FORMULAS;

	    var Selection = kendo.Class.extend({
	        init: function(sheet) {
	            this._sheet = sheet;
	            this.selection = kendo.spreadsheet.FIRSTREF.toRangeRef();
	            this.originalSelection = kendo.spreadsheet.FIRSTREF.toRangeRef();
	            this._activeCell = kendo.spreadsheet.FIRSTREF.toRangeRef();
	            this.originalActiveCell = kendo.spreadsheet.FIRSTREF;
	        },

	        currentSelectionRange: function() {
	            return this.selection.rangeAt(this.selectionRangeIndex).toRangeRef();
	        },

	        currentOriginalNavigationRange: function() {
	            return this.originalSelection.rangeAt(this.selectionRangeIndex).toRangeRef();
	        },

	        currentNavigationRange: function() {
	            if (this.singleCellSelection()) {
	                return this._sheet._sheetRef;
	            } else {
	                return this.selection.rangeAt(this.selectionRangeIndex).toRangeRef();
	            }
	        },

	        nextNavigationRange: function() {
	            if (!this.singleCellSelection()) {
	                this.selectionRangeIndex = this.selection.nextRangeIndex(this.selectionRangeIndex);
	            }

	            return this.currentNavigationRange();
	        },

	        previousNavigationRange: function() {
	            if (!this.singleCellSelection()) {
	                this.selectionRangeIndex = this.selection.previousRangeIndex(this.selectionRangeIndex);
	            }

	            return this.currentNavigationRange();
	        },

	        activeCell: function(ref) {
	            if (ref) {
	                this.originalActiveCell = ref.first();
	                this._activeCell = this._sheet.unionWithMerged(ref.toRangeRef());
	                this._sheet.focus(ref);
	                this._sheet.triggerChange({ activeCell: true, selection: true });
	            }

	            return this._activeCell;
	        },

	        select: function(ref, expanded, changeActiveCell, view) {
	            if (ref) {
	                if (ref.eq(this.originalSelection)) {
	                    return;
	                }

	                this._sheet.triggerSelect(new Range(ref, this._sheet));

	                this.originalSelection = ref;

	                this.selection = expanded;

	                if (changeActiveCell !== false) {
	                    if (ref.isCell()) {
	                        // when selecting part of a merged cell, i.e. A1:B2 is merged and select(B2)
	                        // is requested, mark A1 as the actually active cell.
	                        // https://github.com/telerik/kendo/issues/7698
	                        this._sheet.forEachMergedCell(ref, function(merged){
	                            ref = merged.topLeft;
	                        });
	                        this.activeCell(ref);
	                    } else {
	                        ref = this.selection.lastRange();
	                        if (view && view._sheet === this._sheet && view.panes[0]) {
	                            // we should intersect this ref with the range that's currently on
	                            // screen, so that the view doesn't scroll (that is, keep the activeCell
	                            // visible) - https://github.com/telerik/kendo-ui-core/issues/5182 —
	                            // XXX: fiddling with View internals here is probably bad practice, but
	                            // this whole thing is a mess already, so it can be forgiven. :-/
	                            var panes = view.panes;
	                            var i, pane, rows, cols, visible, newRef;

	                            for (i = 0; i < panes.length; i++) {
	                                pane = panes[i];
	                                rows = pane._currentView.rows.values;
	                                cols = pane._currentView.columns.values;

	                                visible = new RangeRef(
	                                    new CellRef(rows.start, cols.start),
	                                    new CellRef(rows.end, cols.end)
	                                );

	                                newRef = ref.intersect(visible);

	                                if (newRef !== kendo.spreadsheet.NULLREF) {
	                                    break;
	                                }
	                            }

	                            if (newRef && newRef !== kendo.spreadsheet.NULLREF) {
	                                ref = newRef;
	                            }
	                        }
	                        this.activeCell(ref.first());
	                    }

	                    this.selectionRangeIndex = this.selection.size() - 1;
	                } else {
	                    this._sheet.triggerChange({ selection: true });
	                }
	            }

	            return this.selection;
	        },

	        singleCellSelection: function() {
	            return this._activeCell.eq(this.selection);
	        }
	    });

	    var Sheet = kendo.Observable.extend({
	        init: function() {
	            kendo.Observable.prototype.init.call(this);
	            this._reinit.apply(this, arguments);
	        },


	        events: [
	            "changing",
	            "commandRequest",
	            "afterInsertRow",
	            "afterDeleteRow",
	            "insertRow",
	            "insertColumn",
	            "deleteRow",
	            "deleteColumn",
	            "hideRow",
	            "hideColumn",
	            "unhideRow",
	            "unhideColumn",
	            "select",
	            "dataBinding",
	            "dataBound",
	            "progress"
	        ],

	        _reinit: function(rowCount, columnCount, rowHeight, columnWidth, headerHeight, headerWidth, defaultCellStyle) {
	            defaultCellStyle = defaultCellStyle || {};

	            this._defaultCellStyle = {
	                background: defaultCellStyle.background,
	                color: defaultCellStyle.color,
	                fontFamily: defaultCellStyle.fontFamily,
	                fontSize: defaultCellStyle.fontSize,
	                italic: defaultCellStyle.italic,
	                bold: defaultCellStyle.bold,
	                underline: defaultCellStyle.underline,
	                wrap: defaultCellStyle.wrap,
	                verticalAlign: defaultCellStyle.verticalAlign,
	                textAlign: defaultCellStyle.textAlign
	            };

	            this._rows = new kendo.spreadsheet.Axis(rowCount, rowHeight);
	            this._columns = new kendo.spreadsheet.Axis(columnCount, columnWidth);
	            this._filteredRows = new kendo.spreadsheet.RangeList(0, rowCount - 1, false);
	            this._mergedCells = [];
	            this._frozenRows = 0;
	            this._frozenColumns = 0;
	            this._suspendChanges = false;
	            this._filter = null;
	            this._showGridLines = true;
	            this._gridLinesColor = null;
	            this._grid = new kendo.spreadsheet.Grid(this._rows, this._columns, rowCount, columnCount, headerHeight, headerWidth);
	            this._sheetRef = this._grid.normalize(kendo.spreadsheet.SHEETREF);
	            this._properties = new kendo.spreadsheet.PropertyBag(rowCount, columnCount, this._defaultCellStyle);
	            this._sorter = new kendo.spreadsheet.Sorter(this._grid, this._properties.sortable());

	            this._viewSelection = new Selection(this);

	            this._editSelection = new Selection(this);

	            this._formulaSelections = [];
	            this._drawings = [];
	       },

	        _selectionState: function() {
	            return this._inEdit ? this._editSelection : this._viewSelection;
	        },

	        navigator: function() {
	            if(!this._navigator) {
	                 this._navigator = new kendo.spreadsheet.SheetNavigator(this);
	            }
	            return this._navigator;
	        },

	        axisManager: function() {
	            if(!this._axisManager) {
	                 this._axisManager = new kendo.spreadsheet.AxisManager(this);
	            }

	            return this._axisManager;
	        },

	        _name: function(value) {
	            if (!value) {
	                return this._sheetName;
	            }

	            this._sheetName = value;

	            return this;
	        },

	        name: function() {
	            return this._name();
	        },

	        _property: function(accessor, value, reason) {
	            if (value === undefined) {
	                return accessor();
	            } else {
	                accessor(value);

	                return this.triggerChange(reason);
	            }
	        },

	        _field: function(name, value, reason) {
	            if (value === undefined) {
	                return this[name];
	            } else {
	                this[name] = value;

	                return this.triggerChange(reason);
	            }
	        },

	        suspendChanges: function(value) {
	            if (value === undefined) {
	                return this._suspendChanges;
	            }

	            this._suspendChanges = value;

	            return this;
	        },

	        triggerChange: function(reason) {
	            if (!this._suspendChanges) {
	                this.trigger("change", reason);
	            }
	            return this;
	        },

	        triggerSelect: function(range) {
	            this.trigger("select", { range: range });
	        },

	        setDataSource: function(dataSource, columns) {
	            if (this.dataSourceBinder) {
	                this.dataSourceBinder.destroy();
	            }

	            this.dataSourceBinder = new kendo.spreadsheet.SheetDataSourceBinder({
	                dataSource: dataSource,
	                sheet: this,
	                columns: columns
	            });

	            this.dataSource = this.dataSourceBinder.dataSource;
	        },

	        hideColumn: function(columnIndex) {
	            if (this.trigger("hideColumn", { index: columnIndex })) {
	                return;
	            }

	            return this._property(this._columns.hide.bind(this._columns), columnIndex, { layout: true });
	        },

	        unhideColumn: function(columnIndex) {
	            if (this.trigger("unhideColumn", { index: columnIndex })) {
	                return;
	            }

	            return this._property(this._columns.unhide.bind(this._columns), columnIndex, { layout: true });
	        },

	        isHiddenColumn: function(columnIndex) {
	            return this._grid._columns.hidden(columnIndex);
	        },

	        _copyRange: function(sourceRangeRef, targetRef) {
	            var grid = this._grid;
	            var rowCount = grid.rowCount;

	            var nextRefTopLeft = grid.normalize(sourceRangeRef.topLeft);
	            var nextRefBottomRight = grid.normalize(sourceRangeRef.bottomRight);

	            var nextIndex = nextRefTopLeft.col * rowCount + nextRefTopLeft.row;
	            var nextBottomIndex = nextRefBottomRight.col * rowCount + nextRefBottomRight.row;

	            var targetIndex = targetRef.col * rowCount + targetRef.row;

	            this._properties.copy(nextIndex, nextBottomIndex, targetIndex);
	        },

	        _saveModifiedFormulas: function(array, callback) {
	            var save = MODIFIED_FORMULAS;
	            MODIFIED_FORMULAS = array;
	            var ret = callback();
	            MODIFIED_FORMULAS = save;
	            return ret;
	        },

	        _restoreModifiedFormulas: function(array) {
	            var wb = this._workbook;
	            array.forEach(function(f){
	                var sheet = wb.sheetByName(f.sheet), index;
	                if (f instanceof kendo.spreadsheet.calc.runtime.Formula) {
	                    index = sheet._grid.cellRefIndex(f); // f has row, col
	                    sheet._properties.set("formula", index, index, f);
	                }
	                if (f instanceof kendo.spreadsheet.validation.Validation) {
	                    index = sheet._grid.cellRefIndex(f); // f has row, col
	                    sheet._properties.set("validation", index, index, f);
	                }
	            });
	        },

	        _adjustReferences: function(operation, start, delta, mergedCells) {
	            this._mergedCells = mergedCells.reduce(function(a, ref){
	                ref = ref.adjust(null, null, null, null, operation == "row", start, delta);
	                if (ref instanceof RangeRef) {
	                    a.push(ref);
	                }
	                return a;
	            }, []);
	            if (this._workbook) {
	                var affectedSheet = this._name();
	                this._workbook._sheets.forEach(function(sheet){
	                    sheet._forFormulas(function(formula){
	                        var prev = formula.adjust(affectedSheet, operation, start, delta);
	                        if (prev && MODIFIED_FORMULAS) {
	                            // if formula.adjust returns non-null,
	                            // that means the formula was indeed
	                            // modified and the returned value is a
	                            // copy of the previous Formula, which we
	                            // can use for undoing the operation.
	                            MODIFIED_FORMULAS.push(prev);
	                        }
	                    });

	                    sheet._forValidations(function(validation){
	                        var prev = validation.adjust(affectedSheet, operation, start, delta);
	                        if (prev && MODIFIED_FORMULAS) {
	                            MODIFIED_FORMULAS.push(prev);
	                        }
	                    });
	                });
	                this._workbook.adjustNames(affectedSheet, operation == "row", start, delta);
	            }
	            var selection = this.select();
	            selection = selection.adjust(null, null, null, null, operation == "row", start, delta);
	            if (selection !== kendo.spreadsheet.NULLREF) {
	                this.select(selection);
	            }
	            // adjust column widths or row heights and hidden attribute
	            var axis = operation == "col" ? this._columns : this._rows;
	            axis.adjust(start, delta);

	            if (operation == "row") {
	                if (delta < 0) {
	                    this._filteredRows.copy(start - delta, this._rows._count - 1, start);
	                } else {
	                    this._filteredRows.copy(start, this._rows._count, start + delta);
	                    this._filteredRows.value(start, start + delta - 1, false);
	                }
	            }

	            // adjust drawing anchor cells
	            this._drawings.forEach(function(drawing){
	                if (drawing.topLeftCell) {
	                    drawing.topLeftCell = drawing.topLeftCell.adjust(null, null, null, null,
	                                                                     operation == "row", start, delta);
	                }
	            });
	        },

	        _forFormulas: function(callback) {
	            var props = this._properties;
	            var formulas = props.get("formula").values();
	            var n = formulas.length;
	            formulas.forEach(function(f, i){
	                callback.call(this, f.value, i, n);
	            }, this);
	        },

	        _forValidations: function(callback) {
	            var props = this._properties;
	            props.get("validation").values().forEach(function(v){
	                callback.call(this, v.value);
	            }, this);
	        },

	        preventInsertRow: function(rowIndex, count) {
	            if (this.selectedHeaders().allRows) {
	                return { reason: "error", type: "insertRowWhenColumnIsSelected" };
	            }

	            count = count || 1;
	            var grid = this._grid;
	            var range = this.range(grid.rowCount - count, 0, count, grid.columnCount);

	            //TODO: Improve has value to return true only if real value is available?
	            if (range.hasValue()) {
	                return { reason: "error", type: "shiftingNonblankCells" };
	            }

	            return false;
	        },

	        preventInsertBelowLastRow: function(rowIndex, count) {
	            count = count || 1;

	            if (rowIndex + count === this._rows._count) {
	                return { reason: "error", type: "insertRowBelowLastRow" };
	            }

	            return false;
	        },

	        preventInsertColumn: function(colIndex, count) {
	            if (this.selectedHeaders().allCols) {
	                return { reason: "error", type: "insertColumnWhenRowIsSelected" };
	            }

	            count = count || 1;
	            var grid = this._grid;
	            var range = this.range(0, grid.columnCount - count, grid.rowCount, count);

	            //TODO: Improve has value to return true only if real value is available?
	            if (range.hasValue()) {
	                return { reason: "error", type: "shiftingNonblankCells" };
	            }

	            return false;
	        },

	        preventInsertAfterLastColumn: function(colIndex, count) {
	            count = count || 1;

	            if (colIndex + count === this._columns._count) {
	                return { reason: "error", type: "insertColAfterLastCol" };
	            }

	            return false;
	        },

	        insertRow: function(rowIndex, skipDataSourceInsert) {
	            var result = this.preventInsertRow(rowIndex);

	            if (result) {
	                throw new Error("Shifting nonblank cells off the worksheet is not supported!");
	            }

	            if (this.trigger("insertRow", { index: rowIndex })) {
	                return;
	            }

	            this.batch(function() {

	                var grid = this._grid;
	                var columnCount = grid.columnCount;
	                var rowCount = grid.rowCount;

	                var frozenRows = this.frozenRows();

	                if (rowIndex < frozenRows) {
	                    this.frozenRows(frozenRows + 1);
	                }

	                var mergedCells = this._mergedCells.slice();

	                for (var ci = 0; ci < columnCount; ci++) {
	                    var ref = new RangeRef(new CellRef(rowIndex, ci), new CellRef(rowIndex, ci));

	                    var topLeft = grid.normalize(ref.topLeft);
	                    var bottomRight = grid.normalize(ref.bottomRight);

	                    var nextRef = new RangeRef(
	                        new CellRef(topLeft.row, topLeft.col),
	                        new CellRef(rowCount - 2, bottomRight.col)
	                    );

	                    this._copyRange(nextRef, new CellRef(topLeft.row + 1, topLeft.col));

	                    new Range(ref, this).clear({ clearAll: true, keepBorders: true });
	                }

	                this._adjustReferences("row", rowIndex, 1, mergedCells);
	            }, {
	                recalc: true,
	                layout: true,
	                insertRow: { index: rowIndex },
	                ref: new RangeRef(new CellRef(rowIndex, 0), new CellRef(Infinity, Infinity))
	            });

	            if (!skipDataSourceInsert) {
	                this.trigger("afterInsertRow", { index: rowIndex });
	            }

	            return this;
	        },

	        isEnabledRow: function(rowIndex) {
	            var ref = new RangeRef(new CellRef(rowIndex, 0), new CellRef(rowIndex, this._grid.columnCount));
	            return new Range(ref, this).enable();
	        },

	        deleteRow: function(rowIndex, skipDataSourceDelete) {
	            if (!this.isEnabledRow(rowIndex)) {
	                return this;
	            }

	            if (this.trigger("deleteRow", { index: rowIndex })) {
	                return;
	            }

	            this.batch(function() {
	                var grid = this._grid;
	                var columnCount = grid.columnCount;

	                var frozenRows = this.frozenRows();
	                if (rowIndex < frozenRows) {
	                    this.frozenRows(frozenRows - 1);
	                }

	                var mergedCells = this._mergedCells.slice();

	                for (var ci = 0; ci < columnCount; ci++) {
	                    var ref = new RangeRef(new CellRef(rowIndex, ci), new CellRef(rowIndex, ci));

	                    new Range(ref, this).clear({ clearAll: true, keepBorders: true });

	                    var topLeft = grid.normalize(ref.topLeft);
	                    var bottomRight = grid.normalize(ref.bottomRight);

	                    var nextRef = new RangeRef(
	                        new CellRef(topLeft.row + 1, topLeft.col),
	                        new CellRef(Infinity, bottomRight.col)
	                    );

	                    this._copyRange(nextRef, topLeft);

	                    var nextRefBottomRight = grid.normalize(nextRef.bottomRight);

	                    new Range(new RangeRef(nextRefBottomRight, nextRefBottomRight), this).clear();
	                }

	                this._adjustReferences("row", rowIndex, -1, mergedCells);
	            }, {
	                recalc: true,
	                layout: true,
	                deleteRow: { index: rowIndex },
	                ref: new RangeRef(new CellRef(rowIndex, 0), new CellRef(Infinity, Infinity))
	            });

	            if (!skipDataSourceDelete) {
	                this.trigger("afterDeleteRow", { index: rowIndex });
	            }

	            return this;
	        },

	        insertColumn: function(columnIndex) {
	            if (this.trigger("insertColumn", { index: columnIndex })) {
	                return;
	            }

	            this.batch(function() {
	                var grid = this._grid;
	                var columnCount = grid.columnCount;

	                var frozenColumns = this.frozenColumns();

	                if (columnIndex < frozenColumns) {
	                    this.frozenColumns(frozenColumns + 1);
	                }

	                var mergedCells = this._mergedCells.slice();

	                for (var ci = columnCount; ci >= columnIndex; ci--) {
	                    var ref = new RangeRef(new CellRef(0, ci), new CellRef(Infinity, ci));

	                    new Range(ref, this).clear({ clearAll: true, keepBorders: true });

	                    if (ci == columnIndex) {
	                        break;
	                    }

	                    var topLeft = grid.normalize(ref.topLeft);
	                    var bottomRight = grid.normalize(ref.bottomRight);

	                    var nextRef = new RangeRef(
	                        new CellRef(topLeft.row, topLeft.col - 1),
	                        new CellRef(bottomRight.row, bottomRight.col - 1)
	                    );

	                    this._copyRange(nextRef, topLeft);
	                }

	                this._adjustReferences("col", columnIndex, 1, mergedCells);
	            }, {
	                recalc: true,
	                layout: true,
	                insertColumn: { index: columnIndex },
	                ref: new RangeRef(new CellRef(0, columnIndex), new CellRef(Infinity, Infinity))
	            });

	            return this;
	        },

	        isEnabledColumn: function(columnIndex) {
	            var ref = new RangeRef(new CellRef(0, columnIndex), new CellRef(Infinity, columnIndex));
	            return new Range(ref, this).enable();
	        },

	        deleteColumn: function(columnIndex) {
	            if (!this.isEnabledColumn(columnIndex)) {
	                return this;
	            }

	            if (this.trigger("deleteColumn", { index: columnIndex })) {
	                return;
	            }

	            this.batch(function() {
	                var grid = this._grid;
	                var columnCount = grid.columnCount;

	                var frozenColumns = this.frozenColumns();

	                if (columnIndex < frozenColumns) {
	                    this.frozenColumns(frozenColumns - 1);
	                }

	                var mergedCells = this._mergedCells.slice();

	                for (var ci = columnIndex; ci < columnCount; ci++) {
	                    var ref = new RangeRef(new CellRef(0, ci), new CellRef(Infinity, ci));

	                    new Range(ref, this).clear({ clearAll: true, keepBorders: true });

	                    if (ci == columnCount - 1) {
	                        break;
	                    }

	                    var topLeft = grid.normalize(ref.topLeft);
	                    var bottomRight = grid.normalize(ref.bottomRight);

	                    var nextRef = new RangeRef(
	                        new CellRef(topLeft.row, topLeft.col + 1),
	                        new CellRef(bottomRight.row, bottomRight.col + 1)
	                    );

	                    this._copyRange(nextRef, topLeft);
	                }

	                this._adjustReferences("col", columnIndex, -1, mergedCells);
	            }, {
	                recalc: true,
	                layout: true,
	                deleteColumn: { index: columnIndex },
	                ref: new RangeRef(new CellRef(0, columnIndex), new CellRef(Infinity, Infinity))
	            });

	            return this;
	        },

	        _filterRow: function(rowIndex) {
	            this._rows.hide(rowIndex);
	            this._filteredRows.value(rowIndex, rowIndex, true);
	            this.triggerChange({ layout: true });
	        },

	        hideRow: function(rowIndex) {
	            if (this.trigger("hideRow", { index: rowIndex })) {
	                return;
	            }
	            return this._property(this._rows.hide.bind(this._rows), rowIndex, { layout: true });
	        },

	        unhideRow: function(rowIndex) {
	            if (this.trigger("unhideRow", { index: rowIndex })) {
	                return;
	            }
	            return this._property(this._rows.unhide.bind(this._rows), rowIndex, { layout: true });
	        },

	        isHiddenRow: function(rowIndex) {
	            return this._grid._rows.hidden(rowIndex);
	        },

	        isFilteredRow: function(rowIndex) {
	            return this._filteredRows.value(rowIndex);
	        },

	        columnWidth: function(columnIndex, width) {
	            return this._property(this._columns.value.bind(this._columns, columnIndex, columnIndex), width, { layout: true });
	        },

	        rowHeight: function(rowIndex, height) {
	            return this._property(this._rows.value.bind(this._rows, rowIndex, rowIndex), height, { layout: true });
	        },

	        frozenRows: function(value) {
	            return this._field("_frozenRows", value, { layout: true });
	        },

	        frozenColumns: function(value) {
	            return this._field("_frozenColumns", value, { layout: true });
	        },

	        showGridLines: function(value) {
	            return this._field("_showGridLines", value, { layout: true });
	        },

	        gridLinesColor: function(value) {
	            return this._field("_gridLinesColor", value, { layout: true });
	        },

	        _ref: function(row, column, numRows, numColumns) {
	            var ref = null;

	            if (row instanceof kendo.spreadsheet.Ref) {
	                return row;
	            }

	            if (row instanceof kendo.spreadsheet.Range) {
	                return row._ref.toRangeRef();
	            }

	            if (typeof row === "string") {
	                ref = kendo.spreadsheet.calc.parseReference(row);
	            } else {
	                if (!numRows) {
	                    numRows = 1;
	                }

	                if (!numColumns) {
	                    numColumns = 1;
	                }
	                ref = new RangeRef(new CellRef(row, column), new CellRef(row + numRows - 1, column + numColumns - 1));
	            }

	            return ref;
	        },

	        range: function(row, column, numRows, numColumns) {
	            return new Range(this._ref(row, column, numRows, numColumns), this);
	        },

	        _getMergedCells: function(range) {
	            var grid = this._grid;
	            var primary = {};
	            var secondary = {};
	            var hasMerged = false;

	            this.forEachMergedCell(range, function(ref) {
	                var topLeft = ref.topLeft;
	                grid.forEach(ref, function(cellRef) {
	                    if (topLeft.eq(cellRef)) {
	                        primary[cellRef.print()] = ref;
	                        hasMerged = true;
	                    } else if (range.contains(cellRef)) {
	                        secondary[cellRef.print()] = topLeft;
	                        hasMerged = true;
	                    }
	                });
	            });

	            return { primary: primary, secondary: secondary, hasMerged: hasMerged };
	        },

	        forEachMergedCell: function(ref, callback) {
	            var selectAll = false;

	            if (typeof callback === "undefined") {
	                callback = ref;
	                selectAll = true;
	            }

	            this._mergedCells.forEach(function(merged) {
	                if (selectAll || merged.intersects(ref)) {
	                    callback(merged);
	                }
	            });
	        },

	        forEachFilterHeader: function(ref, callback) {
	            var selectAll = false;

	            if (typeof callback === "undefined") {
	                callback = ref;
	                selectAll = true;
	            }

	            if (this._filter) {
	                var refs = [];

	                // get refs of all columns
	                this._filter.ref.forEachColumn(function(columnRef) {
	                    if (selectAll || columnRef.intersects(ref)) {
	                        refs.push(columnRef.topLeft);
	                    }
	                });

	                // filter out merged references
	                this._mergedCells.forEach(function(merged) {
	                    refs = refs.map(function(ref) {
	                        if (merged.intersects(ref)) {
	                            return merged;
	                        }

	                        return ref;
	                    });
	                });

	                // use only unique refs
	                refs.reduce(function unique(result, element) {
	                    if (result.indexOf(element) < 0) {
	                        result.push(element);
	                    }

	                    return result;
	                }, []).forEach(callback);
	            }
	        },

	        forEach: function(ref, callback) {
	            var self = this;
	            function forEachRange(ref) {
	                if (!(ref instanceof RangeRef)) {
	                    ref = ref.toRangeRef();
	                }
	                var topLeft = self._grid.normalize(ref.topLeft);
	                var bottomRight = self._grid.normalize(ref.bottomRight);
	                var ci, ri;

	                function doIt(value) {
	                    callback(ri++, ci, value);
	                }

	                for (ci = topLeft.col; ci <= bottomRight.col; ci++) {
	                    ri = topLeft.row;
	                    var startCellIndex = self._grid.index(ri, ci);
	                    var endCellIndex = self._grid.index(bottomRight.row, ci);
	                    self._properties.forEach(startCellIndex, endCellIndex, doIt);
	                }
	            }

	            if (!(ref instanceof RangeRef)) {
	                ref = self._ref(ref);
	            }

	            if (ref instanceof UnionRef) {
	                // _ref() might still return a UnionRef, for instance, if
	                // `ref` happens to be one.  Probably an oversight, but it
	                // turns out to be useful.
	                ref.forEach(forEachRange);
	            } else {
	                forEachRange(ref);
	            }
	        },

	        startResizing: function(initialPosition) {
	            this._initialPosition = initialPosition;
	            this._resizeInProgress = true;
	        },

	        startAutoFill: function() {
	            this._autoFillInProgress = true;
	            var selection = this.select();
	            this._autoFillOrigin = selection;
	            this._autoFillDest = selection;
	            this.triggerChange({ selection: true });
	        },

	        updateAutoFill: function(dest, punch, hint, direction) {
	            this._autoFillDest = dest;
	            this._autoFillPunch = punch;
	            this._autoFillHint = hint;
	            this._autoFillDirection = direction;
	            this.triggerChange({ selection: true });
	        },

	        autoFillRef: function() {
	            return this._autoFillDest;
	        },

	        autoFillPunch: function() {
	            return this._autoFillPunch;
	        },

	        autoFillInProgress: function() {
	            return this._autoFillInProgress;
	        },

	        resizingInProgress: function() {
	            return this._resizeInProgress;
	        },

	        draggingInProgress: function() {
	            return this._draggingInProgress;
	        },

	        completeResizing: function() {
	            if (this._resizeInProgress) {
	                this._resizeInProgress = false;
	                var hintPosition = this.resizeHintPosition();

	                if (this._initialPosition && hintPosition) {
	                    var handlePosition = this.resizeHandlePosition();
	                    if (handlePosition.col !== -Infinity) {
	                        this.trigger("commandRequest", {
	                            command: "ColumnWidthCommand",
	                            options: {
	                                target: handlePosition.col,
	                                value: this.columnWidth(handlePosition.col) - (this._initialPosition.x - hintPosition.x)
	                            }
	                        });
	                    } else {
	                        this.trigger("commandRequest", {
	                            command: "RowHeightCommand",
	                            options: {
	                                target: handlePosition.row,
	                                value: this.rowHeight(handlePosition.row) - (this._initialPosition.y - hintPosition.y)
	                            }
	                        });
	                    }
	                } else {
	                    this.trigger("change", { resize: true });
	                }
	            }
	        },

	        _renderComment: function(ref) {
	            var comment = ref ? this.range(ref).comment() : null;
	            if (comment) {
	                if (!this._commentRef || !ref.eq(this._commentRef)) {
	                    this._commentRef = ref;
	                    this.trigger("change", { comment: true });
	                }
	            } else {
	                if (this._commentRef) {
	                    this._commentRef = null;
	                    this.trigger("change", { comment: true });
	                }
	            }
	        },

	        resizeHandlePosition: function() {
	            return this._resizeHandlePosition;
	        },

	        resizeHintPosition: function(location) {
	            if (location !== undefined) {
	                this._resizeHintPosition = location;
	                this.trigger("change", { resize: true });
	            }
	            return this._resizeHintPosition;
	        },

	        removeResizeHandle: function() {
	            if (this._resizeHandlePosition) {
	                this._resizeHintPosition = undefined;
	                this._resizeHandlePosition = undefined;
	                this._initialPosition = undefined;
	                this.trigger("change", { resize: true });
	            }
	        },

	        positionResizeHandle: function(ref) {
	            this._resizeHandlePosition = ref;
	            this.trigger("change", { resize: true });
	        },

	        startDragging: function(data) {
	            this._draggingInProgress = data;
	        },

	        completeDragging: function() {
	            var drag = this._draggingInProgress;
	            if (drag) {
	                this._draggingInProgress = null;
	                var drawing = drag.drawing;
	                if (drawing.eq(drag.copy)) {
	                    return;
	                }
	                if (drawing.topLeftCell) {
	                    // adjust reference - in case the top-left corner
	                    // was moving, select the cell beneath it.
	                    var box = this.drawingBoundingBox(drawing);
	                    var row = this._rows.indexVisible(box.top);
	                    var col = this._columns.indexVisible(box.left);
	                    var ref = new CellRef(row, col);
	                    var refBox = this.refBoundingBox(ref);
	                    drawing.offsetX = box.left - refBox.left;
	                    drawing.offsetY = box.top - refBox.top;
	                    drawing.topLeftCell = ref;
	                    this.triggerChange({ dragging: true });
	                }
	                this.trigger("commandRequest", {
	                    command: "DrawingUpdateCommand",
	                    options: {
	                        sheet    : this,
	                        drawing  : drawing,
	                        previous : drag.copy
	                    }
	                });
	            }
	        },

	        startSelection: function(view) {
	            if (this.frozenRows() || this.frozenColumns()) {
	                this._currentView = null;
	            } else if (view && view._sheet === this) {
	                this._currentView = view;
	            }
	            this._selectionInProgress = true;
	        },

	        completeSelection: function() {
	            if (this._selectionInProgress) {
	                this._selectionInProgress = false;
	                this._resizeHintPosition = undefined;
	                this.trigger("change", { selection: true });
	            }
	            if (this._autoFillInProgress) {
	                this._autoFillInProgress = false;
	                var dest = this._autoFillDest;
	                var origin = this._autoFillOrigin;

	                if (this._autoFillPunch) { // we just clear data here
	                    this.trigger("commandRequest", {
	                        command: "ClearContentCommand", options: { operatingRange: this.range(this._autoFillPunch) }
	                    });
	                } else {
	                    if (!dest.eq(origin)) {
	                        this.trigger("commandRequest", {
	                            command: "AutoFillCommand", options: { operatingRange: this.range(dest), origin: this.range(origin) }
	                        });
	                    } else {
	                        this.triggerChange({ selection: true });
	                    }
	                }

	                this._autoFillDest = null;
	                this._autoFillPunch = null;
	                this._autoFillOrigin = null;

	                this.select(dest);
	            }
	        },

	        selectionInProgress: function() {
	            return this._selectionInProgress;
	        },

	        select: function(ref, changeActiveCell) {
	            var selectionState = this._selectionState();

	            var expandedRef;

	            if (ref) {
	                ref = this._ref(ref);
	                ref = this._grid.normalize(ref);
	                expandedRef = this._grid.isAxis(ref) ? ref : this.unionWithMerged(ref);
	            }

	            return selectionState.select(ref, expandedRef, changeActiveCell, this._currentView);
	        },

	        originalSelect: function() {
	            return this._selectionState().originalSelection;
	        },

	        currentSelectionRange: function() {
	            return this._selectionState().currentSelectionRange();
	        },

	        currentOriginalSelectionRange: function() {
	            return this._selectionState().currentOriginalNavigationRange();
	        },

	        currentNavigationRange: function() {
	            return this._selectionState().currentNavigationRange();
	        },

	        nextNavigationRange: function() {
	            return this._selectionState().nextNavigationRange();
	        },

	        previousNavigationRange: function() {
	            return this._selectionState().previousNavigationRange();
	        },

	        selectionRangeIndex: function() {
	            return this._selectionState().selectionRangeIndex;
	        },

	        activeCell: function(ref) {
	            return this._selectionState().activeCell(ref);
	        },

	        originalActiveCell: function() {
	            return this._selectionState().originalActiveCell;
	        },

	        singleCellSelection: function() {
	            return this._selectionState().singleCellSelection();
	        },

	        unionWithMerged: function(ref) {
	            var mergedCells = this._mergedCells;

	            return ref.map(function(ref) {
	                return ref.toRangeRef().union(mergedCells);
	            });
	        },

	        trim: function(ref) {
	            var trims = [];
	            var grid = this._grid;
	            this._properties.forEachProperty(function(property) {
	                trims.push(grid.trim(ref, property.list));
	            });
	            return this.unionWithMerged(ref.topLeft.toRangeRef().union(trims));
	        },

	        focus: function(ref) {
	            if (ref) {
	                this._focus = ref.toRangeRef();
	            } else {
	                var focus = this._focus;
	                this._focus = null;
	                return focus;
	            }
	        },

	        activeCellSelection: function() {
	            return new Range(this._grid.normalize(this.activeCell()), this);
	        },

	        selection: function() {
	            return new Range(this._grid.normalize(this._selectionState().selection), this);
	        },

	        selectedHeaders: function() {
	            var selection = this.select();

	            var rows = {};
	            var cols = {};
	            var allCols = false;
	            var allRows = false;
	            var maxRow = this._grid.rowCount - 1;
	            var maxCol = this._grid.columnCount - 1;

	            selection.forEach(function(ref) {
	                var i;
	                var rowState = "partial";
	                var colState = "partial";
	                ref = ref.toRangeRef();

	                var bottomRight = ref.bottomRight;
	                var topLeft = ref.topLeft;

	                var rowSelection = topLeft.col <= 0 && bottomRight.col >= maxCol;
	                var colSelection = topLeft.row <= 0 && bottomRight.row >= maxRow;

	                if (colSelection) { //column selection
	                    allRows = true;
	                    colState = "full";
	                }

	                if (rowSelection) { //row selection
	                    allCols = true;
	                    rowState = "full";
	                }

	                if (!colSelection) { //column selection
	                    for (i = topLeft.row; i <= bottomRight.row; i++) {
	                        if (rows[i] !== "full") {
	                            rows[i] = rowState;
	                        }
	                    }
	                }

	                if (!rowSelection) {
	                    for (i = topLeft.col; i <= bottomRight.col; i++) {
	                        if (cols[i] !== "full") {
	                            cols[i] = colState;
	                        }
	                    }
	                }
	            });

	            return {
	                rows: rows,
	                cols: cols,
	                allRows: allRows,
	                allCols: allCols,
	                all: allRows && allCols
	            };
	        },

	        isInEditMode: function(isInEdit) {
	            if (isInEdit === undefined) {
	                return this._inEdit;
	            }

	            this._inEdit = isInEdit;

	            if (isInEdit) {
	                this._editSelection.selection = this._viewSelection.selection.clone();
	                this._editSelection.originalSelection = this._viewSelection.originalSelection.clone();
	                this._editSelection._activeCell = this._viewSelection._activeCell.clone();
	                this._editSelection.originalActiveCell = this._viewSelection.originalActiveCell.clone();
	            }
	        },

	        _setFormulaSelections: function(selection) {
	            this._formulaSelections = (selection || []).slice();
	            this.triggerChange({ selection: true });
	        },

	        _viewActiveCell: function() {
	            return this._viewSelection._activeCell.toRangeRef();
	        },

	        toJSON: function() {
	            var positions = {};

	            var rows = this._rows.toJSON("height", positions);
	            var columns = this._columns.toJSON("width", {});
	            var viewSelection = this._viewSelection;
	            var hyperlinks = [];
	            var defaultCellStyle = this._defaultCellStyle || {};

	            function clearDefaultStyle(cell) {
	                Object.keys(defaultCellStyle).forEach(function(key){
	                    if (cell[key] === defaultCellStyle[key]) {
	                        delete cell[key];
	                    }
	                });
	            }

	            this.forEach(kendo.spreadsheet.SHEETREF, function(row, col, cell) {
	                clearDefaultStyle(cell);

	                if (Object.keys(cell).length === 0) {
	                    return;
	                }

	                if (cell.link) {
	                    hyperlinks.push({
	                        ref    : kendo.spreadsheet.Ref.display(null, row, col),
	                        target : cell.link
	                    });
	                }

	                var position = positions[row];

	                if (position === undefined) {
	                    position = rows.length;
	                    rows.push({ index: row });
	                    positions[row] = position;
	                }

	                row = rows[position];

	                cell.index = col;

	                if (row.cells === undefined) {
	                    row.cells = [];
	                }

	                if (cell.formula) {
	                    // stringify Formula object.
	                    if (cell.formula.arrayFormulaRange) {
	                        cell.formula = {
	                            src: cell.formula.toString(),
	                            ref: cell.formula.arrayFormulaRange.toString()
	                        };
	                    } else {
	                        cell.formula = cell.formula.toString();
	                    }
	                }

	                if (cell.validation) {
	                    cell.validation = cell.validation.toJSON();
	                }

	                if (cell.color) {
	                    cell.color = kendo.parseColor(cell.color).toCss();
	                }

	                if (cell.background) {
	                    cell.background = kendo.parseColor(cell.background).toCss();
	                }

	                if (cell.borderTop && cell.borderTop.color) {
	                    cell.borderTop.color = kendo.parseColor(cell.borderTop.color).toCss();
	                }

	                if (cell.borderBottom && cell.borderBottom.color) {
	                    cell.borderBottom.color = kendo.parseColor(cell.borderBottom.color).toCss();
	                }

	                if (cell.borderRight && cell.borderRight.color) {
	                    cell.borderRight.color = kendo.parseColor(cell.borderRight.color).toCss();
	                }

	                if (cell.borderLeft && cell.borderLeft.color) {
	                    cell.borderLeft.color = kendo.parseColor(cell.borderLeft.color).toCss();
	                }

	                row.cells.push(cell);
	            });

	            var json = {
	                name: this._name(),
	                rows: rows,
	                columns: columns,
	                selection: viewSelection.selection.toString(),
	                activeCell: viewSelection.activeCell().toString(),
	                frozenRows: this.frozenRows(),
	                frozenColumns: this.frozenColumns(),
	                showGridLines: this.showGridLines(),
	                gridLinesColor: this.gridLinesColor(),
	                mergedCells: this._mergedCells.map(function(ref) {
	                    return ref.toString();
	                }),
	                hyperlinks: hyperlinks,
	                defaultCellStyle: defaultCellStyle,
	                drawings: this._drawings.map(function(dr){
	                    return dr.toJSON();
	                })
	            };

	            if (this._sort) {
	               json.sort = {
	                   ref: this._sort.ref.toString(),
	                   columns: this._sort.columns.map(function(column) {
	                       return {
	                           index: column.index,
	                           ascending: column.ascending
	                       };
	                   })
	               };
	            }

	            if (this._filter) {
	               json.filter = {
	                   ref: this._filter.ref.toString(),
	                   columns: this._filter.columns.map(function(column) {
	                        var filter = column.filter.toJSON();
	                        filter.index = column.index;
	                        return filter;
	                   })
	               };
	            }

	            return json;
	        },

	        fromJSON: function(json) {
	            this.batch(function() {
	                if (json.name !== undefined) {
	                    this._name(json.name);
	                }

	                if (json.frozenColumns !== undefined) {
	                    this.frozenColumns(json.frozenColumns);
	                }

	                if (json.frozenRows !== undefined) {
	                    this.frozenRows(json.frozenRows);
	                }

	                if (json.columns !== undefined) {
	                    this._columns.fromJSON("width", json.columns);
	                }

	                if (json.rows !== undefined) {
	                    this._rows.fromJSON("height", json.rows);

	                    for (var ri = 0; ri < json.rows.length; ri++) {
	                        var row = json.rows[ri];
	                        var rowIndex = row.index;

	                        if (rowIndex === undefined) {
	                            rowIndex = ri;
	                        }

	                        if (row.cells) {
	                            for (var ci = 0; ci < row.cells.length; ci++) {
	                                var cell = row.cells[ci];
	                                var columnIndex = cell.index;

	                                if (columnIndex === undefined) {
	                                    columnIndex = ci;
	                                }

	                                if (cell.formula) {
	                                    var isArray = typeof cell.formula != "string";
	                                    var src = isArray ? cell.formula.src : cell.formula;
	                                    var formula = this._compileFormula(rowIndex, columnIndex, src);
	                                    if (isArray) {
	                                        formula.setArrayFormulaRange(
	                                            kendo.spreadsheet.calc.parseReference(cell.formula.ref));
	                                    }
	                                    cell.formula = formula;
	                                }

	                                if (cell.validation) {
	                                    cell.validation = this._compileValidation(rowIndex, columnIndex, cell.validation);
	                                }

	                                this._properties.fromJSON(this._grid.index(rowIndex, columnIndex), cell);
	                            }
	                        }
	                    }
	                }

	                if (json.drawings) {
	                    this._drawings = json.drawings.map(Drawing.fromJSON);
	                }

	                if (json.selection) {
	                    this._viewSelection.selection =
	                        this._viewSelection.originalSelection = this._ref(json.selection);
	                }

	                if (json.activeCell) {
	                    var activeCellRef = this._ref(json.activeCell);

	                    this._viewSelection._activeCell = activeCellRef.toRangeRef();
	                    this._viewSelection.originalActiveCell = activeCellRef.first();
	                }


	                if (json.mergedCells) {
	                    json.mergedCells.forEach(function(ref) {
	                       this.range(ref).merge();
	                    }, this);
	                }

	                if (json.sort) {
	                    this._sort = {
	                        ref: this._ref(json.sort.ref),
	                        columns: json.sort.columns.slice(0)
	                    };
	                }

	                if (json.filter) {
	                    var ref = json.filter.ref;
	                    var columns = json.filter.columns  === undefined ? [] : json.filter.columns;

	                    if (!ref) {
	                        kendo.logToConsole("Dropping filter for sheet '" + json.name + "' due to missing ref");
	                    } else {
	                        this._filter = {
	                            ref: this._ref(ref),
	                            columns: columns.map(function(column) {
	                                return {
	                                    index: column.index,
	                                    filter: kendo.spreadsheet.Filter.create(column)
	                                };
	                            })
	                        };

	                        this._refreshFilter();
	                    }
	                }

	                if (json.showGridLines !== undefined) {
	                    this._showGridLines = json.showGridLines;
	                }

	                this._gridLinesColor = json.gridLinesColor;
	            });

	            this._rows._refresh();
	            this._columns._refresh();
	        },

	        formula: function(ref) {
	            return this._properties.get("formula", this._grid.cellRefIndex(ref));
	        },

	        validation: function(ref) {
	            return this._properties.get("validation", this._grid.cellRefIndex(ref));
	        },

	        // NOTE: resetFormulas should be called first.  We don't do it in this
	        // function because it should be done from the Workbook object for all
	        // sheets.
	        resetFormulas: function() {
	            this._forFormulas(function(formula){
	                formula.reset();
	            });
	        },

	        resetValidations: function() {
	            this._forValidations(function(validation){
	                validation.reset();
	            });
	        },

	        recalc: function(context, callback) {
	            var formulas = this._properties.get("formula").values();
	            var count = formulas.length, pending = 0, i = 0;
	            if (!count && callback) {
	                return callback();
	            }
	            function next() {
	                pending--;
	                if (i == count && !pending) {
	                    callback();
	                }
	            }
	            while (i < count) {
	                pending++;
	                formulas[i++].value.exec(context, callback ? next : null);
	            }
	        },

	        revalidate: function(context) {
	            var self = this;
	            this._forValidations(function(validation){
	                var cellRef = new CellRef(validation.row, validation.col);
	                var ref =  new RangeRef(cellRef, cellRef);
	                validation.exec(context, self._get(ref, "value"), self._get(ref, "format"));
	            });
	        },

	        _value: function(row, col, value) {
	            var index = this._grid.index(row, col);

	            if (value !== undefined) {
	                this._properties.set("value", index, index, value);
	            } else {
	                return this._properties.get("value", index);
	            }
	        },

	        _validation: function(row, col) {
	            var index = this._grid.index(row, col);

	            return this._properties.get("validation", index);
	        },

	        _compileValidation: function(row, col, validation) {
	            if (validation instanceof kendo.spreadsheet.validation.Validation) {
	                // do not alter an existing object.
	                return validation.clone(this._name(), row, col);
	            }

	            if (validation.from != null) { // jshint ignore: line
	                validation.from = (validation.from + "").replace(/^=/, "");
	            }

	            if (validation.to != null) { // jshint ignore: line
	                validation.to = (validation.to + "").replace(/^=/, "");
	            }

	            return kendo.spreadsheet.validation.compile(this._name(), row, col, validation);
	        },

	        _compileFormula: function(row, col, f) {
	            f = f.replace(/^=/, "");
	            f = kendo.spreadsheet.calc.parseFormula(this._name(), row, col, f);
	            return kendo.spreadsheet.calc.compile(f);
	        },

	        _copyValuesInRange: function (topLeft, bottomRight, value, property) {
	            var ci, start, end;

	            for (ci = topLeft.col; ci <= bottomRight.col; ci++) {
	                start = this._grid.index(topLeft.row, ci);
	                end = this._grid.index(bottomRight.row, ci);
	                for (var index = start, row = topLeft.row; index <= end; ++index, ++row) {
	                    // Even if it's the same formula in multiple cells, we
	                    // need to have different Formula objects, hence cloning
	                    // it.  Don't worry, clone() is fast.
	                    value = value.clone(this._name(), row, ci);
	                    this._properties.set(property, index, index, value);
	                }
	            }
	            return value;
	        },

	        _set: function(ref, name, value) {
	            var topLeft = this._grid.normalize(ref.topLeft);
	            var bottomRight = this._grid.normalize(ref.bottomRight);
	            var ci, start, end;

	            if (typeof value == "number") {
	                // Apparently, Excel (and LibreOffice and Google
	                // Sheets) will limit precision to 14 digits; type:
	                // -4.2524999999999995 and you get -4.2525.  The
	                // formula engine already does something similar for
	                // intermediate formula results, but we must do it
	                // here as well for original input values.
	                value = kendo.spreadsheet.calc.runtime.limitPrecision(value);
	            }

	            if (value && name == "formula") {
	                if (typeof value == "string") {
	                    // get Formula object.  we don't care about handling errors
	                    // here since it won't be called interactively.
	                    value = this._compileFormula(topLeft.row, topLeft.col, value);
	                }

	                value = this._copyValuesInRange(topLeft, bottomRight, value, "formula");

	            } else if (value && name == "validation") {
	                value = this._compileValidation(topLeft.row, topLeft.col, value);
	                value = this._copyValuesInRange(topLeft, bottomRight, value, "validation");

	            } else {
	                for (ci = topLeft.col; ci <= bottomRight.col; ci++) {
	                    start = this._grid.index(topLeft.row, ci);
	                    end = this._grid.index(bottomRight.row, ci);
	                    this._properties.set(name, start, end, value);
	                    if (name == "formula") {
	                        // removing a formula, must clear value.
	                        this._properties.set("value", start, end, null);
	                    }
	                }
	            }
	        },

	        _get: function(ref, name) {
	            var topLeft = this._grid.normalize(ref.topLeft);

	            var index = this._grid.index(topLeft.row, topLeft.col);

	            return this._properties.get(name, index);
	        },

	        batch: function(callback, reason) {
	            var suspended = this.suspendChanges();

	            this.suspendChanges(true);

	            callback.call(this);

	            return this.suspendChanges(suspended).triggerChange(reason || { recalc: true });
	        },

	        _sortBy: function(ref, columns) {
	            var indices = null;

	            columns.forEach(function(column) {
	                indices = this._sorter.sortBy(ref, column.index, this._properties.get("value"), column.ascending, indices);
	            }, this);

	            this._sort = {
	                ref: ref,
	                columns: columns
	            };

	            this._refreshFilter();

	            this.forEach(ref, function(row, col, props) {
	                var formula = props.formula;
	                if (formula) {
	                    var diff = row - formula.row;
	                    if (diff !== 0) {
	                        var start = diff > 0 ? formula.row : formula.row + diff;
	                        formula.adjust(this.name(), "row", start, diff);
	                    }
	                }
	            }.bind(this));

	            this.triggerChange({ recalc: true });
	        },

	        _refreshFilter: function() {
	            if (this._filter) {
	                this._filterBy(this._filter.ref, this._filter.columns);
	            }
	        },

	        _filterBy: function(ref, columns) {
	            this.batch(function() {
	                for (var ri = ref.topLeft.row; ri <= ref.bottomRight.row; ri++) {
	                    if (this.isFilteredRow(ri)) {
	                        this._filteredRows.value(ri, ri, false);
	                        this._rows.unhide(ri);
	                    }
	                }

	                columns.forEach(function(column) {
	                    // do not filter header row
	                    var columnRef = ref.resize({ top: 1 }).toColumn(column.index);

	                    var cells = [];

	                    if (columnRef === kendo.spreadsheet.NULLREF) {
	                        return;
	                    }

	                    this.forEach(columnRef, function(row, col, cell) {
	                        cell.row = row;
	                        cells.push(cell);
	                    });

	                    column.filter.prepare(cells);

	                    for (var ci = 0; ci < cells.length; ci++) {
	                        var cell = cells[ci];
	                        var value = column.filter.value(cell);

	                        if (column.filter.matches(value) === false) {
	                            this._filterRow(cell.row);
	                        }
	                    }
	                }, this);

	                this._filter = {
	                    ref: ref,
	                    columns: columns
	                };
	            }, { recalc: true, layout: true, filter: true });
	        },

	        filterColumn: function(ref) {
	            var filterRef = this.filter().ref;
	            return ref.toRangeRef().topLeft.col - filterRef.topLeft.col;
	        },

	        filter: function() {
	            return this._filter;
	        },

	        clearFilter: function(spec) {
	            this._clearFilter(spec instanceof Array ? spec : [spec]);
	        },

	        _clearFilter: function(indices) {
	            if (this._filter) {
	                this.batch(function() {
	                    this._filter.columns = this._filter.columns.filter(function(column) {
	                        return indices.indexOf(column.index) < 0;
	                    });

	                    this._refreshFilter();
	                }, { recalc: true, layout: true, filter: true });
	            }
	        },

	        getAxisState: function() {
	            return {
	                rows: this._rows.getState(),
	                columns: this._columns.getState()
	            };
	        },

	        setAxisState: function(state) {
	            this._rows.setState(state.rows);
	            this._columns.setState(state.columns);
	            this.triggerChange({ layout: true });
	        },

	        getState: function() {
	            return {
	                rows: this._rows.getState(),
	                columns: this._columns.getState(),
	                mergedCells: this._mergedCells.map(function(cell) { return cell.clone(); }),
	                properties: this._properties.getState()
	            };
	        },

	        setState: function(state) {
	            this._rows.setState(state.rows);
	            this._columns.setState(state.columns);
	            this._mergedCells = state.mergedCells;
	            this._properties.setState(state.properties);
	            this.triggerChange(kendo.spreadsheet.ALL_REASONS);
	        },

	        _merge: function(ref) {
	            var mergedCells = this._mergedCells;

	            var sheet = this;
	            var mergedRef;
	            this.batch(function() {
	                mergedRef = ref.map(function(ref) {
	                    if (ref instanceof kendo.spreadsheet.CellRef) {
	                        return ref;
	                    }

	                    var currentRef = ref.toRangeRef().union(mergedCells, function(ref) {
	                        mergedCells.splice(mergedCells.indexOf(ref), 1);
	                    });

	                    var range = new Range(currentRef, sheet);
	                    var formula = range._get("formula");
	                    var value = range.value();
	                    var format = range.format();
	                    var background = range.background();

	                    range.value(null);
	                    range.format(null);
	                    range.background(null);

	                    var topLeft = new Range(currentRef.collapse(), sheet);

	                    if (formula) {
	                        topLeft._set("formula", formula);
	                    } else {
	                        topLeft.value(value);
	                    }
	                    topLeft.format(format);
	                    topLeft.background(background);

	                    mergedCells.push(currentRef);
	                    return currentRef;
	                });

	                var viewSelection = sheet._viewSelection;

	                viewSelection.selection = sheet.unionWithMerged(viewSelection.originalSelection);
	                viewSelection._activeCell = sheet.unionWithMerged(viewSelection.originalActiveCell);
	            }, { activeCell: true, selection: true });

	            return mergedRef;
	        },

	        _useCultureDecimals: function() {
	            return this._workbook && this._workbook.options.useCultureDecimals;
	        },

	        withCultureDecimals: function(f) {
	            var dot = ".";
	            if (this._useCultureDecimals()) {
	                dot = kendo.culture().numberFormat["."];
	            }
	            return kendo.spreadsheet.calc.withDecimalSeparator(dot, f);
	        },

	        drawingBoundingBox: function(drawing) {
	            var left = drawing.offsetX;
	            var top = drawing.offsetY;
	            if (drawing.topLeftCell) {
	                // offsets are relative to cell
	                left += this._columns.sum(0, drawing.topLeftCell.col - 1);
	                top += this._rows.sum(0, drawing.topLeftCell.row - 1);
	            }
	            return new kendo.spreadsheet.Rectangle(left, top, drawing.width, drawing.height);
	        },

	        refBoundingBox: function(ref) {
	            return this._grid.rectangle(ref.toRangeRef());
	        },

	        addDrawing: function(drw, activate) {
	            if (!(drw instanceof Drawing)) {
	                drw = new Drawing(drw);
	            }
	            this._drawings.push(drw);
	            if (activate) {
	                this._activeDrawing = drw;
	            }
	            this.triggerChange({ layout: true });
	            return drw;
	        },

	        removeDrawing: function(drawing) {
	            var pos = this._drawings.indexOf(drawing);
	            if (pos >= 0) {
	                this._drawings.splice(pos, 1);
	                this.triggerChange({ layout: true });
	            }
	        },

	        usesImage: function(img) {
	            for (var i = this._drawings.length; --i >= 0;) {
	                if (this._drawings[i].image === img) {
	                    return true;
	                }
	            }
	            return false;
	        },

	        isMerged: function(ref) {
	            var merged = this._mergedCells;
	            for (var i = merged.length; --i >= 0;) {
	                if (merged[i].eq(ref)) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    });

	    var Drawing = kendo.Class.extend({
	        init: function Drawing(args) {
	            this.reset(args);
	        },

	        toJSON: function() {
	            return {
	                topLeftCell: this.topLeftCell.toString(),
	                offsetX: this.offsetX,
	                offsetY: this.offsetY,
	                width: this.width,
	                height: this.height,
	                image: this.image,
	                opacity: this.opacity
	            };
	        },

	        clone: function() {
	            return new Drawing(this);
	        },

	        reset: function(dr) {
	            var anchor = dr.topLeftCell;
	            if (typeof anchor == "string") {
	                anchor = kendo.spreadsheet.calc.parseReference(anchor);
	            }
	            this.topLeftCell = anchor;
	            this.offsetX = dr.offsetX || 0;
	            this.offsetY = dr.offsetY || 0;
	            this.width = dr.width;
	            this.height = dr.height;
	            this.image = dr.image;
	            this.opacity = dr.opacity != null ? dr.opacity : 1;
	        },

	        eq: function(dr) {
	            return ((!this.topLeftCell && !dr.topLeftCell)
	                    || (this.topLeftCell && dr.topLeftCell
	                        && this.topLeftCell.eq(dr.topLeftCell)))
	                && this.offsetX === dr.offsetX
	                && this.offsetY === dr.offsetY
	                && this.width === dr.width
	                && this.height === dr.height
	                && this.image === dr.image
	                && this.opacity === dr.opacity;
	        }
	    });

	    Drawing.fromJSON = function(args) {
	        return new Drawing(args);
	    };

	    kendo.spreadsheet.Sheet = Sheet;
	    kendo.spreadsheet.Drawing = Drawing;
	})(kendo);

	}, __webpack_require__(3));


/***/ }),

/***/ 1694:
/***/ (function(module, exports) {

	module.exports = require("./validation");

/***/ })

/******/ });