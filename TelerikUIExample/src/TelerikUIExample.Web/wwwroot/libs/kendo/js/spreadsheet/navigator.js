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

	__webpack_require__(1678);
	module.exports = __webpack_require__(1678);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20),  __webpack_require__(1679) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var RangeRef = kendo.spreadsheet.RangeRef;
	    var CellRef = kendo.spreadsheet.CellRef;

	    var EdgeNavigator = kendo.Class.extend({
	        init: function(field, axis, rangeGetter, union) {
	            this.rangeGetter = rangeGetter;

	            this.prevLeft = function(index) {
	                var current = union(this.range(index));
	                var range = this.range(axis.prevVisible(current.topLeft[field]));
	                return union(range).topLeft[field];
	            };

	            this.nextRight = function(index) {
	                var current = union(this.range(index));
	                var range = this.range(axis.nextVisible(current.bottomRight[field]));
	                return union(range).bottomRight[field];
	            };

	            // these two don't look like the other ones, as they "shrink"
	            this.nextLeft = function(index) {
	                var range = union(this.range(index));
	                return axis.nextVisible(range.bottomRight[field]);
	            };

	            this.prevRight = function(index) {
	                var range = union(this.range(index));
	                return axis.prevVisible(range.topLeft[field]);
	            };
	        },

	        boundary: function(top, bottom) {
	            this.top = top;
	            this.bottom = bottom;
	        },

	        range: function(index) {
	            return this.rangeGetter(index, this.top, this.bottom);
	        }
	    });

	    var SheetNavigator = kendo.Class.extend({
	        init: function(sheet) {
	            this._sheet = sheet;
	            this.autoFillCalculator = new kendo.spreadsheet.AutoFillCalculator(sheet._grid);

	            this.colEdge = new EdgeNavigator("col", this._sheet._grid._columns, this.columnRange.bind(this), this.union.bind(this));
	            this.rowEdge = new EdgeNavigator("row", this._sheet._grid._rows, this.rowRange.bind(this), this.union.bind(this));
	        },

	        height: function(height) {
	            this._viewPortHeight = height;
	        },

	        union: function(ref) {
	            return this._sheet.unionWithMerged(ref);
	        },

	        columnRange: function(col, topRow, bottomRow) {
	            return this._sheet._ref(topRow, col, bottomRow - topRow, 1);
	        },

	        rowRange: function(row, leftCol, rightCol) {
	            return this._sheet._ref(row, leftCol, 1, rightCol - leftCol);
	        },

	        selectionIncludesMergedCells: function() {
	            return this._sheet.select().contains(this._sheet._mergedCells);
	        },

	        setSelectionValue: function(value) {
	            var selection = this._sheet.selection();

	            setTimeout(function() {
	                selection.value(value());
	            });
	        },

	        selectAll: function() {
	            this._sheet.select(this._sheet._sheetRef);
	        },

	        select: function(ref, mode, addToExisting) {
	            ref = this.refForMode(ref, mode);

	            if (addToExisting) {
	                ref = this._sheet.select().concat(ref);
	            }

	            this._sheet.select(ref);
	        },

	        refForMode: function(ref, mode) {
	            var grid = this._sheet._grid;

	            switch(mode) {
	                case "range":
	                    ref = grid.normalize(ref);
	                    break;
	                case "row":
	                    ref = grid.rowRef(ref.row);
	                    break;
	                case "column":
	                    ref = grid.colRef(ref.col);
	                    break;
	                case "sheet":
	                    ref = this._sheet._sheetRef;
	                    break;
	            }

	            return ref;
	        },

	        startSelection: function(ref, mode, addToExisting, shiftKey, view) {
	            if (mode == "autofill") {
	                this._sheet.startAutoFill();
	            } else if (shiftKey && mode == "range") {
	                var range = new RangeRef(this._sheet.activeCell().first(), ref);
	                this._sheet.select(range, false, false);
	                this._sheet.startSelection(view);
	            } else {
	                this._sheet.startSelection(view);
	                this.select(ref, mode, addToExisting);
	            }
	        },

	        completeSelection: function() {
	            this._sheet.completeSelection();
	        },

	        selectForContextMenu: function(ref, mode) {
	            var sheet = this._sheet;
	            sheet._activeDrawing = null;
	            if (!sheet.select().contains(this.refForMode(ref, mode))) {
	                this.select(ref, mode);
	            }
	        },

	        selectDrawingForContextMenu: function(drawing) {
	            var sheet = this._sheet;
	            sheet._activeDrawing = drawing;
	            sheet.triggerChange({ selection: true });
	        },

	        modifySelection: function(action) {
	            var direction = this.determineDirection(action);

	            var sheet = this._sheet;
	            var viewPortHeight = this._viewPortHeight;
	            var rows = sheet._grid._rows;
	            var columns = sheet._grid._columns;

	            var originalSelection = sheet.currentOriginalSelectionRange();
	            var selection = sheet.select().toRangeRef();
	            var activeCell = sheet.activeCell();

	            var topLeft = originalSelection.topLeft.clone();
	            var bottomRight = originalSelection.bottomRight.clone();
	            var bottomLeft = new CellRef(bottomRight.row, topLeft.col);

	            var scrollInto;

	            this.colEdge.boundary(selection.topLeft.row, selection.bottomRight.row);
	            this.rowEdge.boundary(selection.topLeft.col, selection.bottomRight.col);

	            switch (direction) {
	              case "expand-left": // <| |
	                topLeft.col = this.colEdge.prevLeft(topLeft.col);
	                scrollInto = topLeft;
	                break;
	              case "shrink-right": // |>|
	                topLeft.col = this.colEdge.nextLeft(topLeft.col);
	                scrollInto = topLeft;
	                break;
	              case "expand-right": // | |>
	                bottomRight.col = this.colEdge.nextRight(bottomRight.col);
	                scrollInto = bottomRight;
	                break;
	              case "shrink-left": // |<|
	                bottomRight.col = this.colEdge.prevRight(bottomRight.col);
	                scrollInto = bottomRight;
	                break;

	                // four actions below mirror the upper ones, on the vertical axis
	              case "expand-up":
	                topLeft.row = this.rowEdge.prevLeft(topLeft.row);
	                scrollInto = topLeft;
	                break;
	              case "shrink-down":
	                topLeft.row = this.rowEdge.nextLeft(topLeft.row);
	                scrollInto = topLeft;
	                break;
	              case "expand-down":
	                bottomRight.row = this.rowEdge.nextRight(bottomRight.row);
	                scrollInto = bottomRight;
	                break;
	              case "shrink-up":
	                bottomRight.row = this.rowEdge.prevRight(bottomRight.row);
	                scrollInto = bottomRight;
	                break;

	                // pageup/down - may need improvement
	              case "expand-page-up":
	                topLeft.row = rows.prevPage(topLeft.row, viewPortHeight);
	                break;
	              case "shrink-page-up":
	                bottomRight.row = rows.prevPage(bottomRight.row, viewPortHeight);
	                break;
	              case "expand-page-down":
	                bottomRight.row = rows.nextPage(bottomRight.row, viewPortHeight);
	                break;
	              case "shrink-page-down":
	                topLeft.row = rows.nextPage(topLeft.row, viewPortHeight);
	                break;

	              case "first-col":
	                topLeft.col = columns.firstVisible();
	                bottomRight.col = activeCell.bottomRight.col;
	                scrollInto = topLeft;
	                break;
	              case "last-col":
	                bottomRight.col = columns.lastVisible();
	                topLeft.col = activeCell.topLeft.col;
	                scrollInto = bottomRight;
	                break;
	              case "first-row":
	                topLeft.row = rows.firstVisible();
	                bottomRight.row = activeCell.bottomRight.row;
	                scrollInto = topLeft;
	                break;
	              case "last-row":
	                bottomRight.row = rows.lastVisible();
	                topLeft.row = activeCell.topLeft.row;
	                scrollInto = bottomRight;
	                break;
	              case "last":
	                bottomRight.row = rows.lastVisible();
	                bottomRight.col = columns.lastVisible();
	                topLeft = activeCell.topLeft;
	                scrollInto = bottomRight;
	                break;
	              case "first":
	                topLeft.row = rows.firstVisible();
	                topLeft.col = columns.firstVisible();
	                bottomRight = activeCell.bottomRight;
	                scrollInto = topLeft;
	                break;

	              case "expand-word-right":
	                bottomRight.col = columns.nextUntil(bottomRight.col, makeWordMovement(sheet, bottomRight, true));
	                scrollInto = bottomRight;
	                break;
	              case "shrink-word-right":
	                topLeft.col = columns.nextUntil(bottomLeft.col, makeWordMovement(sheet, bottomLeft, true));
	                scrollInto = topLeft;
	                break;
	              case "expand-word-left":
	                topLeft.col = columns.prevUntil(bottomLeft.col, makeWordMovement(sheet, bottomLeft, true));
	                scrollInto = topLeft;
	                break;
	              case "shrink-word-left":
	                bottomRight.col = columns.prevUntil(bottomRight.col, makeWordMovement(sheet, bottomRight, true));
	                scrollInto = bottomRight;
	                break;
	              case "expand-word-up":
	                topLeft.row = rows.prevUntil(topLeft.row, makeWordMovement(sheet, topLeft, false));
	                scrollInto = topLeft;
	                break;
	              case "shrink-word-up":
	                bottomRight.row = rows.prevUntil(bottomRight.row, makeWordMovement(sheet, bottomRight, false));
	                scrollInto = bottomRight;
	                break;
	              case "expand-word-down":
	                bottomRight.row = rows.nextUntil(bottomRight.row, makeWordMovement(sheet, bottomRight, false));
	                scrollInto = bottomRight;
	                break;
	              case "shrink-word-down":
	                topLeft.row = rows.nextUntil(topLeft.row, makeWordMovement(sheet, topLeft, false));
	                scrollInto = topLeft;
	                break;
	            }

	            var newSelection = new RangeRef(topLeft, bottomRight);

	            if (!this.union(newSelection).intersects(activeCell)) {
	                // throw new Error(newSelection.print() + " does not contain " + activeCell.print());
	                this.modifySelection(direction.replace("shrink", "expand"));
	                return;
	            }

	            if (scrollInto) {
	                sheet.focus(scrollInto);
	            }

	            this.updateCurrentSelectionRange(newSelection);
	        },

	        moveActiveCell: function(direction) {
	            var sheet = this._sheet;
	            var activeCell = sheet.activeCell();
	            var topLeft = activeCell.topLeft;
	            var bottomRight = activeCell.bottomRight;

	            var cell = sheet.originalActiveCell();
	            var rows = sheet._grid._rows;
	            var columns = sheet._grid._columns;

	            var row = cell.row;
	            var column = cell.col;

	            switch (direction) {
	              case "left":
	                column = columns.prevVisible(topLeft.col);
	                break;
	              case "up":
	                row = rows.prevVisible(topLeft.row);
	                break;
	              case "right":
	                column = columns.nextVisible(bottomRight.col);
	                break;
	              case "down":
	                row = rows.nextVisible(bottomRight.row);
	                break;
	              case "first-col":
	                column = columns.firstVisible();
	                break;
	              case "last-col":
	                column = columns.lastVisible();
	                break;
	              case "first-row":
	                row = rows.firstVisible();
	                break;
	              case "last-row":
	                row = rows.lastVisible();
	                break;
	              case "last":
	                row = rows.lastVisible();
	                column = columns.lastVisible();
	                break;
	              case "first":
	                row = rows.firstVisible();
	                column = columns.firstVisible();
	                break;
	              case "next-page":
	                row = rows.nextPage(bottomRight.row, this._viewPortHeight);
	                break;
	              case "prev-page":
	                row = rows.prevPage(bottomRight.row, this._viewPortHeight);
	                break;

	              case "word-right":
	                column = columns.nextUntil(column, makeWordMovement(sheet, bottomRight, true));
	                break;
	              case "word-left":
	                column = columns.prevUntil(column, makeWordMovement(sheet, bottomRight, true));
	                break;
	              case "word-up":
	                row = rows.prevUntil(row, makeWordMovement(sheet, bottomRight, false));
	                break;
	              case "word-down":
	                row = rows.nextUntil(row, makeWordMovement(sheet, bottomRight, false));
	                break;
	            }

	            sheet.select(new CellRef(row, column));
	        },

	        navigateInSelection: function(direction) {
	            var sheet = this._sheet;
	            var activeCell = sheet.activeCell();
	            var topLeft = activeCell.topLeft;

	            var cell = sheet.originalActiveCell();
	            var rows = sheet._grid._rows;
	            var columns = sheet._grid._columns;

	            var row = cell.row;
	            var column = cell.col;

	            var isFirstCell = false;
	            var isLastCell = false;

	            var selTopLeft, selBottomRight;

	            var topLeftCol = topLeft.col;
	            var topLeftRow = topLeft.row;
	            var tmp;

	            function setSelection(sel) {
	                selTopLeft = sel.topLeft;
	                selBottomRight = sel.bottomRight;
	            }

	            setSelection(sheet.currentNavigationRange());

	            var done = false;
	            var navigatedAway = false;

	            while (!done && !navigatedAway) {
	                var current = new CellRef(row, column);
	                var isSingleCellSelected = sheet.singleCellSelection();

	                if(isSingleCellSelected) {
	                    isFirstCell = selTopLeft.eq(current) && sheet._sheetRef.topLeft.eq(current);
	                    isLastCell = selBottomRight.eq(current) && sheet._sheetRef.bottomRight.eq(current);

	                    if(!isFirstCell) {
	                        isFirstCell = columns.firstVisible() === column && rows.firstVisible() === row;
	                    }

	                    if(!isLastCell) {
	                        isLastCell = columns.lastVisible() === column && rows.lastVisible() === row;
	                    }
	                }

	                switch (direction) {
	                    case "next":
	                        if(isLastCell) {
	                            navigatedAway = true;
	                            kendo.focusNextElement();
	                        } else if (selBottomRight.eq(current)) {
	                            setSelection(sheet.nextNavigationRange());
	                            row = selTopLeft.row;
	                            column = selTopLeft.col;
	                        } else {
	                            column = columns.nextVisible(topLeftCol);
	                            if (column == topLeftCol || column > selBottomRight.col) {
	                                column = selTopLeft.col;
	                                tmp = rows.nextVisible(row);
	                                if (tmp == row || tmp > selBottomRight.row) {
	                                    row = selTopLeft.row;
	                                } else {
	                                    row = tmp;
	                                }
	                            }
	                        }
	                        break;
	                    case "previous":
	                        if(isFirstCell) {
	                            navigatedAway = true;
	                            this._sheet._workbook._view.element.find('.k-spreadsheet-name-editor .k-input').trigger("focus");
	                        } else if (selTopLeft.eq(current)) {
	                            setSelection(sheet.previousNavigationRange());
	                            row = selBottomRight.row;
	                            column = selBottomRight.col;
	                        } else {
	                            column = columns.prevVisible(topLeftCol);
	                            if (column == topLeftCol || column < selTopLeft.col) {
	                                column = selBottomRight.col;
	                                tmp = rows.prevVisible(row);
	                                if (tmp == row || tmp < selTopLeft.row) {
	                                    row = selBottomRight.row;
	                                } else {
	                                    row = tmp;
	                                }
	                            }
	                        }
	                        break;
	                    case "lower":
	                        if (selBottomRight.eq(current)) {
	                            setSelection(sheet.nextNavigationRange());
	                            row = selTopLeft.row;
	                            column = selTopLeft.col;
	                        } else {
	                            row = rows.nextVisible(topLeftRow);
	                            if (row == topLeftRow || row > selBottomRight.row) {
	                                row = selTopLeft.row;
	                                tmp = columns.nextVisible(column);
	                                if (tmp == column || tmp > selBottomRight.col) {
	                                    column = selTopLeft.col;
	                                } else {
	                                    column = tmp;
	                                }
	                            }
	                        }
	                        break;
	                    case "upper":
	                        if (selTopLeft.eq(current)) {
	                            setSelection(sheet.previousNavigationRange());
	                            row = selBottomRight.row;
	                            column = selBottomRight.col;
	                        } else {
	                            row = rows.prevVisible(topLeftRow);
	                            if (row == topLeftRow || row < selTopLeft.row) {
	                                row = selBottomRight.row;
	                                tmp = columns.prevVisible(column);
	                                if (tmp == column || tmp < selTopLeft.col) {
	                                    column = selBottomRight.col;
	                                } else {
	                                    column = tmp;
	                                }
	                            }
	                        }
	                        break;
	                    default:
	                        throw new Error("Unknown entry navigation: " + direction);
	                }

	                done = !this.shouldSkip(row, column);
	                // if (!done) { console.log("skipping", row, column); }
	                topLeftCol = column;
	                topLeftRow = row;
	            }

	            if(done) {
	                if (sheet.singleCellSelection()) {
	                    sheet.select(new CellRef(row, column));
	                } else {
	                    sheet.activeCell(new CellRef(row, column));
	                }
	            }
	        },

	        extendSelection: function(ref, mode) {
	            var sheet = this._sheet;
	            var grid = sheet._grid;

	            if (mode === "autofill") {
	               this.resizeAutoFill(ref);
	               return;
	            }
	            if (mode === "range") {
	                ref = grid.normalize(ref);
	            }
	            else if (mode === "row") {
	                ref = grid.rowRef(ref.row).bottomRight;
	            } else if (mode === "column") {
	                ref = grid.colRef(ref.col).bottomRight;
	            }

	            var activeCell = sheet.originalActiveCell().toRangeRef();

	            this.updateCurrentSelectionRange(new RangeRef(activeCell.topLeft, ref));
	        },

	        shouldSkip: function(row, col) {
	            if (this._sheet.isHiddenRow(row) || this._sheet.isHiddenColumn(col)) {
	                return true;
	            }
	            var ref = new CellRef(row, col);
	            var isMerged = false;
	            this._sheet.forEachMergedCell(function(merged) {
	                if (merged.intersects(ref) && !merged.collapse().eq(ref)) {
	                    isMerged = true;
	                }
	            });

	            return isMerged;
	        },

	        resizeAutoFill: function(ref) {
	            var sheet = this._sheet;
	            var selection = sheet.select();
	            var origin = sheet._autoFillOrigin;
	            var dest = this.autoFillCalculator.autoFillDest(selection, ref);

	            var punch = this.punch(selection, dest);
	            var hint, direction;

	            if (!punch) {
	                var preview = sheet.range(dest)._previewFillFrom(sheet.range(origin));
	                if (preview) {
	                    direction = preview.direction;
	                    hint = preview.hint;
	                }
	            }

	            sheet.updateAutoFill(dest, punch, hint, direction);
	        },

	        determineDirection: function(action) {
	            var selection = this._sheet.currentSelectionRange();
	            var activeCell = this._sheet.activeCell();

	            // There may be a third, indeterminate state, caused by a merged cell.
	            // In this state, all key movements are treated as shrinks.
	            // The navigator will reverse them if it detects this it will cause the selection to exclude the active cell.
	            var leftMode = activeCell.topLeft.col == selection.topLeft.col;
	            var rightMode = activeCell.bottomRight.col == selection.bottomRight.col;
	            var topMode = activeCell.topLeft.row == selection.topLeft.row;
	            var bottomMode = activeCell.bottomRight.row == selection.bottomRight.row;

	            switch (action) {
	              case "left":
	                action = rightMode ? "expand-left" : "shrink-left";
	                break;
	              case "right":
	                action = leftMode ? "expand-right" : "shrink-right";
	                break;
	              case "up":
	                action = bottomMode ? "expand-up" : "shrink-up";
	                break;
	              case "down":
	                action = topMode ? "expand-down" : "shrink-down";
	                break;
	              case "prev-page":
	                action = bottomMode ? "expand-page-up" : "shrink-page-up";
	                break;
	              case "next-page":
	                action = topMode ? "expand-page-down" : "shrink-page-down";
	                break;
	              case "word-left":
	                action = rightMode ? "expand-word-left" : "shrink-word-left";
	                break;
	              case "word-right":
	                action = leftMode ? "expand-word-right" : "shrink-word-right";
	                break;
	              case "word-up":
	                action = bottomMode ? "expand-word-up" : "shrink-word-up";
	                break;
	              case "word-down":
	                action = topMode ? "expand-word-down" : "shrink-word-down";
	                break;
	            }

	            return action;
	        },

	        updateCurrentSelectionRange: function(ref) {
	            var sheet = this._sheet;
	            sheet.select(sheet.originalSelect().replaceAt(sheet.selectionRangeIndex(), ref), false);
	        },

	        punch: function(selection, subset) {
	            var punch;
	            if (subset.topLeft.eq(selection.topLeft)) {
	                if (subset.bottomRight.row < selection.bottomRight.row) {
	                    var bottomRow = this.rowEdge.nextRight(subset.bottomRight.row);

	                    punch = new RangeRef(
	                        new CellRef(bottomRow, selection.topLeft.col),
	                        selection.bottomRight
	                    );
	                } else if (subset.bottomRight.col < selection.bottomRight.col) {
	                    var bottomCol = this.colEdge.nextRight(subset.bottomRight.col);

	                    punch = new RangeRef(
	                        new CellRef(selection.topLeft.row, bottomCol),
	                        selection.bottomRight
	                    );
	                }
	            }

	            return punch;
	        }
	    });

	    function makeWordMovement(sheet, pivot, isCol) {
	        // the general idea is:
	        //
	        // - if we start on a non-empty cell, we should select the
	        //   range of non-empty cells that follow it.  If, however,
	        //   the second cell is empty, then we don't stop there; we
	        //   should skip all the empty cells and stop at the first
	        //   non-empty cell (and select it).
	        //
	        // - if we start on an empty cell, then skip all empty cells
	        //   and select the first non-empty one.

	        var firstVal = sheet.range(pivot).value();
	        return function(pos, advanced, hidden) {
	            if (hidden) { return true; }   // skip hidden cells
	            var val = ( isCol ?
	                        sheet.range(pivot.row, pos) :
	                        sheet.range(pos, pivot.col) ).value();
	            if (firstVal === null) {
	                return val === null ? false : pos;
	            } else if (!advanced && val === null) {
	                firstVal = null; // switch to the other mode
	                return false;
	            } else {
	                return val === null;
	            }
	        };
	    }

	    kendo.spreadsheet.SheetNavigator = SheetNavigator;
	})(kendo);
	}, __webpack_require__(3));


/***/ }),

/***/ 1679:
/***/ (function(module, exports) {

	module.exports = require("./autofillcalculator");

/***/ })

/******/ });