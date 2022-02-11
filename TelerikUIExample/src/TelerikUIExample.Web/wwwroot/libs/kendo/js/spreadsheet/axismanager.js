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

	__webpack_require__(1651);
	module.exports = __webpack_require__(1651);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var AxisManager = kendo.Class.extend({
	        init: function(sheet) {
	            this._sheet = sheet;
	        },

	        forEachSelectedColumn: function(callback) {
	            var sheet = this._sheet;

	            sheet.batch(function() {
	                sheet.select().forEachColumnIndex(function(index, i) {
	                    callback(sheet, index, i);
	                });
	            }, { layout: true, recalc: true });
	        },

	        forEachSelectedRow: function(callback) {
	            var sheet = this._sheet;

	            sheet.batch(function() {
	                sheet.select().forEachRowIndex(function(index, i) {
	                    callback(sheet, index, i);
	                });
	            }, { layout: true, recalc: true });
	        },

	        includesHiddenColumns: function(ref) {
	            return this._sheet._grid._columns.includesHidden(ref.topLeft.col, ref.bottomRight.col);
	        },

	        includesHiddenRows: function(ref) {
	            return this._sheet._grid._rows.includesHidden(ref.topLeft.row, ref.bottomRight.row);
	        },

	        selectionIncludesHiddenColumns: function() {
	            return this.includesHiddenColumns(this._sheet.select());
	        },

	        selectionIncludesHiddenRows: function() {
	            return this.includesHiddenRows(this._sheet.select());
	        },

	        deleteSelectedColumns: function() {
	            var indexes = [], delta = 0;
	            this.forEachSelectedColumn(function(sheet, index) {
	                index -= delta;
	                if (sheet.isHiddenColumn(index)) {
	                    return;
	                }
	                delta++;
	                var formulas = [];
	                indexes.unshift({
	                    index    : index,
	                    formulas : formulas,
	                    width    : sheet.columnWidth(index)
	                });
	                sheet._saveModifiedFormulas(formulas, function(){
	                    sheet.deleteColumn(index);
	                });
	            });
	            return indexes;
	        },

	        deleteSelectedRows: function() {
	            var indexes = [], delta = 0;
	            this.forEachSelectedRow(function(sheet, index) {
	                index -= delta;
	                if (sheet.isHiddenRow(index)) {
	                    return;
	                }
	                delta++;
	                var formulas = [];
	                indexes.unshift({
	                    index    : index,
	                    formulas : formulas,
	                    height   : sheet.rowHeight(index)
	                });
	                sheet._saveModifiedFormulas(formulas, function(){
	                    sheet.deleteRow(index);
	                });
	            });
	            return indexes;
	        },

	        hideSelectedColumns: function() {
	            this.forEachSelectedColumn(function(sheet, index) {
	                sheet.hideColumn(index);
	            });
	            var sheet = this._sheet;
	            var ref = sheet.select().toRangeRef();
	            var left = ref.topLeft.col;
	            var right = ref.bottomRight.col;
	            var sel = null;
	            while (true) {
	                var hasRight = right < sheet._columns._count;
	                var hasLeft = left >= 0;
	                if (!hasLeft && !hasRight) {
	                    break;
	                }
	                if (hasRight && !sheet.isHiddenColumn(right)) {
	                    sel = right;
	                    break;
	                }
	                if (hasLeft && !sheet.isHiddenColumn(left)) {
	                    sel = left;
	                    break;
	                }
	                left--;
	                right++;
	            }
	            if (sel !== null) {
	                ref = new kendo.spreadsheet.RangeRef(
	                    new kendo.spreadsheet.CellRef(0, sel),
	                    new kendo.spreadsheet.CellRef(sheet._rows._count - 1, sel)
	                );
	                sheet.range(ref).select();
	            }
	        },

	        hideSelectedRows: function() {
	            this.forEachSelectedRow(function(sheet, index) {
	                sheet.hideRow(index);
	            });
	            var sheet = this._sheet;
	            var ref = sheet.select().toRangeRef();
	            var top = ref.topLeft.row;
	            var bottom = ref.bottomRight.row;
	            var sel = null;
	            while (true) {
	                var hasBottom = bottom < sheet._rows._count;
	                var hasTop = top >= 0;
	                if (!hasTop && !hasBottom) {
	                    break;
	                }
	                if (hasBottom && !sheet.isHiddenRow(bottom)) {
	                    sel = bottom;
	                    break;
	                }
	                if (hasTop && !sheet.isHiddenRow(top)) {
	                    sel = top;
	                    break;
	                }
	                top--;
	                bottom++;
	            }
	            if (sel !== null) {
	                ref = new kendo.spreadsheet.RangeRef(
	                    new kendo.spreadsheet.CellRef(sel, 0),
	                    new kendo.spreadsheet.CellRef(sel, sheet._columns._count - 1)
	                );
	                sheet.range(ref).select();
	            }
	        },

	        unhideSelectedColumns: function() {
	            this.forEachSelectedColumn(function(sheet, index) {
	                sheet.unhideColumn(index);
	            });
	        },

	        unhideSelectedRows: function() {
	            this.forEachSelectedRow(function(sheet, index) {
	                sheet.unhideRow(index);
	            });
	        },

	        preventAddRow: function() {
	            var range = this._sheet.select().toRangeRef();
	            var rowCount = range.height();
	            return this._sheet.preventInsertRow(0, rowCount);
	        },

	        preventAddRowAfterLast: function() {
	            var range = this._sheet.select().toRangeRef();
	            var rowCount = range.height();
	            return this._sheet.preventInsertBelowLastRow(range.bottomRight.row, rowCount);
	        },

	        preventAddColumn: function() {
	            var range = this._sheet.select().toRangeRef();
	            var columnCount = range.width();
	            return this._sheet.preventInsertColumn(0, columnCount);
	        },

	        preventAddColumnAfterLast: function() {
	            var range = this._sheet.select().toRangeRef();
	            var columnCount = range.width();
	            return this._sheet.preventInsertAfterLastColumn(range.bottomRight.col, columnCount);
	        },

	        addColumnLeft: function() {
	            var sheet = this._sheet;
	            var base, count = 0;
	            sheet.batch(function(){
	                sheet.select().forEachColumnIndex(function(index) {
	                    if (!base) {
	                        base = index;
	                    }
	                    sheet.insertColumn(base);
	                    ++count;
	                });
	            }, { recalc: true, layout: true });
	            return { base: base, count: count };
	        },

	        addColumnRight: function() {
	            var sheet = this._sheet;
	            var base, count = 0;
	            sheet.batch(function(){
	                sheet.select().forEachColumnIndex(function(index) {
	                    base = index + 1;
	                    ++count;
	                });
	                for (var i = 0; i < count; ++i) {
	                    sheet.insertColumn(base);
	                }
	            }, { recalc: true, layout: true });
	            return { base: base, count: count };
	        },

	        addRowAbove: function() {
	            var sheet = this._sheet;
	            var base, count = 0;
	            var totalRows = sheet._grid.rowCount;
	            var selectedRows = sheet.select();
	            var selectedRowsCount = selectedRows.bottomRight.row - selectedRows.topLeft.row + 1;

	            sheet.batch(function(){
	                selectedRows.forEachRowIndex(function(index) {
	                    if (!base) {
	                        base = index;
	                    }
	                    if(selectedRows.bottomRight.row + selectedRowsCount < totalRows) {
	                        sheet.insertRow(base);
	                    }
	                    ++count;
	                });
	            }, { recalc: true, layout: true });

	            return { base: base, count: count };
	        },

	        addRowBelow: function() {
	            var sheet = this._sheet;
	            var base, count = 0;
	            var totalRows = sheet._grid.rowCount;

	            sheet.batch(function(){
	                sheet.select().forEachRowIndex(function(index) {
	                    base = index + 1;
	                    ++count;
	                });

	                if(base + count < totalRows) {
	                    for (var i = 0; i < count; ++i) {
	                        sheet.insertRow(base);
	                    }
	                }
	            }, { recalc: true, layout: true });

	            return { base: base, count: count };
	        }
	    });

	    kendo.spreadsheet.AxisManager = AxisManager;
	})(kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });