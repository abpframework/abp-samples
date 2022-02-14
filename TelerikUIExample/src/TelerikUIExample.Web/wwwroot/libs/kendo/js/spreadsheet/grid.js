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

	__webpack_require__(1675);
	module.exports = __webpack_require__(1675);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(1676) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    // jshint laxbreak: true

	    var CellRef = kendo.spreadsheet.CellRef;
	    var RangeRef = kendo.spreadsheet.RangeRef;
	    var UnionRef = kendo.spreadsheet.UnionRef;

	    var Rectangle = kendo.Class.extend({
	        init: function Rectangle(left, top, width, height) {
	            this.left = left;
	            this.top = top;
	            this.width = width;
	            this.height = height;
	            this.right = this.left + this.width;
	            this.bottom = this.top + this.height;
	        },

	        offset: function(left, top) {
	            return new Rectangle(this.left + left, this.top + top, this.width, this.height);
	        },

	        resize: function(width, height) {
	            return new Rectangle(this.left, this.top, this.width + width, this.height + height);
	        },

	        intersects: function(x, y) {
	            if (x instanceof Rectangle) {
	                return this.intersectsRect(x);
	            }
	            return this.left < x && x < this.left + this.width &&
	                   this.top < y && y < this.top + this.height;
	        },

	        intersectsRect: function(b) {
	            var a = this;
	            return a.left <= b.right
	                && b.left <= a.right
	                && a.top <= b.bottom
	                && b.top <= a.bottom;
	        },

	        toDiv: function(className) {
	            return kendo.dom.element("div", {
	                className: className,
	                style: {
	                    width:  this.width + "px",
	                    height: this.height + "px",
	                    top:    this.top + "px",
	                    left:   this.left + "px"
	                }
	            });
	        }
	    });

	    // XXX: can we use ES5 yet? :-/
	    //
	    // Object.defineProperty(Rectangle.prototype, "right", {
	    //     get() {
	    //         return this.left + this.width;
	    //     }
	    // });
	    // Object.defineProperty(Rectangle.prototype, "bottom", {
	    //     get() {
	    //         return this.top + this.height;
	    //     }
	    // });

	    var Grid = kendo.Class.extend({
	        init: function(rows, columns, rowCount, columnCount, headerHeight, headerWidth) {
	            this.rowCount = rowCount;
	            this.columnCount = columnCount;
	            this._columns = columns;
	            this._rows = rows;
	            this._headerHeight = headerHeight;
	            this._headerWidth = headerWidth;
	        },

	        isAxis: function(ref) {
	            ref = ref.toRangeRef();
	            var topLeft = ref.topLeft;
	            var bottomRight = ref.bottomRight;
	            return (topLeft.row === 0 && bottomRight.row === this.rowCount - 1) || (topLeft.col === 0 && bottomRight.col === this.columnCount - 1);
	        },

	        width: function(start, end) {
	            return this._columns.sum(start, end);
	        },

	        height: function(start, end) {
	            return this._rows.sum(start, end);
	        },

	        totalHeight: function() {
	            return this._rows.total + this._headerHeight;
	        },

	        totalWidth: function() {
	            return this._columns.total + this._headerWidth;
	        },

	        index: function(row, column) {
	            return column * this.rowCount + row;
	        },

	        cellRef: function(index) {
	            return new CellRef(index % this.rowCount, (index / this.rowCount) >> 0);
	        },

	        rowRef: function(row) {
	            return new RangeRef(new CellRef(row, 0), new CellRef(row, this.columnCount - 1));
	        },

	        colRef: function(col) {
	            return new RangeRef(new CellRef(0, col), new CellRef(this.rowCount - 1, col));
	        },

	        cellRefIndex: function(ref) {
	            return this.index(ref.row, ref.col);
	        },

	        normalize: function(ref) {
	            if (ref instanceof RangeRef) {
	                return new RangeRef(
	                    this.normalize(ref.topLeft),
	                    this.normalize(ref.bottomRight)
	                ).setSheet(ref.sheet, ref.hasSheet());
	            }

	            if (ref instanceof UnionRef) {
	                return ref.map(function(ref) {
	                    return this.normalize(ref);
	                }, this);
	            }

	            if (ref instanceof CellRef) {
	                ref = ref.clone();
	                ref.col = Math.max(0, Math.min(this.columnCount - 1, ref.col));
	                ref.row = Math.max(0, Math.min(this.rowCount - 1, ref.row));
	            }

	            return ref;
	        },

	        rectangle: function(ref) {
	            var topLeft = this.normalize(ref.topLeft);
	            var bottomRight = this.normalize(ref.bottomRight);
	            return new Rectangle(
	                this.width(0, topLeft.col - 1),
	                this.height(0, topLeft.row - 1),
	                this.width(topLeft.col, bottomRight.col),
	                this.height(topLeft.row, bottomRight.row)
	            );
	        },

	        pane: function(options) {
	            return new PaneGrid(
	                new kendo.spreadsheet.PaneAxis(this._rows, options.row, options.rowCount, this._headerHeight),
	                new kendo.spreadsheet.PaneAxis(this._columns, options.column, options.columnCount, this._headerWidth),
	                this
	            );
	        },

	        rangeDimensions: function(rangeRef) {
	            return {
	                rows: this._rows.values.iterator(rangeRef.topLeft.row, rangeRef.bottomRight.row),
	                columns: this._columns.values.iterator(rangeRef.topLeft.col, rangeRef.bottomRight.col)
	            };
	        },

	        forEach: function(ref, callback) {
	            var topLeft = this.normalize(ref.topLeft);
	            var bottomRight = this.normalize(ref.bottomRight);

	            for (var ci = topLeft.col; ci <= bottomRight.col; ci ++) {
	                for (var ri = topLeft.row; ri <= bottomRight.row; ri ++) {
	                    callback(new CellRef(ri, ci));
	                }
	            }
	        },

	        trim: function(ref, property) {
	            var topLeft = this.normalize(ref.topLeft);
	            var bottomRight = this.normalize(ref.bottomRight);
	            var bottomRightRow = topLeft.row;
	            var bottomRightCol = topLeft.col;

	            for (var ci = topLeft.col; ci <= bottomRight.col; ci ++) {
	                var start = this.index(topLeft.row, ci);
	                var end = this.index(bottomRight.row, ci);
	                var values = property.tree.intersecting(start, end);
	                if(values.length) {
	                    var cell = this.cellRef(values[values.length - 1].end);
	                    bottomRightRow = Math.max(bottomRightRow, cell.row);
	                    bottomRightCol = ci;
	                }
	            }
	            return new RangeRef(ref.topLeft, new CellRef(Math.min(bottomRightRow, ref.bottomRight.row), bottomRightCol));
	        }
	    });

	    var PaneGrid = kendo.Class.extend({
	        init: function(rows, columns, grid) {
	            this.rows = rows;
	            this.columns = columns;
	            this._grid = grid;

	            this.headerHeight = rows.headerSize;
	            this.headerWidth = columns.headerSize;
	            this.hasRowHeader = columns.hasHeader;
	            this.hasColumnHeader = rows.hasHeader;
	        },

	        refresh: function(width, height) {
	            this.columns.viewSize(width);
	            this.rows.viewSize(height);

	            var x = this.columns.paneSegment();
	            var y = this.rows.paneSegment();

	            this.left = x.offset;
	            this.top = y.offset;
	            this.right = x.offset + x.length;
	            this.bottom = y.offset + y.length;

	            this.style = {
	                top: y.offset  + "px",
	                left: x.offset + "px",
	                height: y.length + "px",
	                width: x.length + "px"
	            };
	        },

	        view: function(left, top) {
	            var rows = this.rows.visible(top);
	            var columns = this.columns.visible(left);

	            return {
	                rows: rows,
	                columns: columns,

	                rowOffset: rows.offset,
	                columnOffset: columns.offset,

	                mergedCellLeft: columns.start,
	                mergedCellTop: rows.start,

	                ref: new RangeRef(
	                    new CellRef(rows.values.start, columns.values.start),
	                    new CellRef(rows.values.end, columns.values.end)
	                )
	            };
	        },

	        contains: function(ref) {
	            return this.rows.contains(ref.topLeft.row, ref.bottomRight.row) &&
	                this.columns.contains(ref.topLeft.col, ref.bottomRight.col);
	        },

	        index: function(row, column) {
	            return this._grid.index(row, column);
	        },

	        boundingRectangle: function(ref) {
	            return this._grid.rectangle(ref);
	        },

	        cellRefIndex: function(ref) {
	            return this._grid.cellRefIndex(ref);
	        },

	        scrollBoundaries: function(cell) {
	            var position = this.boundingRectangle(cell);

	            var boundaries = {
	                top: Math.max(0, position.top - this.top + (this.hasColumnHeader ? 0 : this.headerHeight)),
	                left: Math.max(0, position.left - this.left + (this.hasRowHeader ? 0 : this.headerWidth)),
	                right: position.right - this.columns._viewSize + this.headerWidth,
	                bottom: position.bottom - this.rows._viewSize + this.headerHeight
	            };

	            var widthCompensation = this.columns.defaultValue / 2;
	            var heightCompensation = this.rows.defaultValue / 2;

	            boundaries.scrollTop = boundaries.top - heightCompensation;
	            boundaries.scrollBottom = boundaries.bottom + heightCompensation;

	            boundaries.scrollLeft = boundaries.left - widthCompensation;
	            boundaries.scrollRight = boundaries.right + widthCompensation;
	            return boundaries;
	        }
	    });

	    kendo.spreadsheet.Grid = Grid;
	    kendo.spreadsheet.PaneGrid = PaneGrid;
	    kendo.spreadsheet.Rectangle = Rectangle;
	})(kendo);
	}, __webpack_require__(3));


/***/ }),

/***/ 1676:
/***/ (function(module, exports) {

	module.exports = require("./references");

/***/ })

/******/ });