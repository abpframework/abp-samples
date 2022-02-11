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

	__webpack_require__(1649);
	module.exports = __webpack_require__(1649);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1649:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var RangeRef = kendo.spreadsheet.RangeRef;
	    var CellRef = kendo.spreadsheet.CellRef;

	    var AutoFillCalculator = kendo.Class.extend({
	        init: function(grid) {
	            this._grid = grid;
	        },

	        rectIsVertical: function(start, end, x, y) {
	            var startRect = this._grid.rectangle(start.toRangeRef());
	            var endRect = this._grid.rectangle(end.toRangeRef());
	            return Math.abs(endRect[y] - startRect[y]) > Math.abs(startRect[x] - endRect[x]);
	        },

	        autoFillDest: function(selection, cursor) {
	            var topLeft = selection.topLeft;
	            var bottomRight = selection.bottomRight;

	            var quadrant;
	            var lower = cursor.row >= topLeft.row;
	            var further = cursor.col >= topLeft.col;

	            if (lower) {
	                quadrant = further ? 4 : 3;
	            } else {
	                quadrant = further ? 2 : 1;
	            }

	            var pivot, opposite, cornerResult, expanding;

	            if (quadrant === 4) {
	                pivot = topLeft;
	                opposite = bottomRight;

	                expanding = cursor.row > opposite.row || cursor.col > opposite.col;

	                if (expanding) {
	                    cursor = new CellRef(Math.max(cursor.row, opposite.row), Math.max(cursor.col, opposite.col));
	                }

	                if (this.rectIsVertical(opposite, cursor, 'right', 'bottom')) { // vertical
	                    cornerResult = new CellRef(cursor.row, opposite.col);
	                } else {
	                    cornerResult = new CellRef(opposite.row, cursor.col);
	                }
	            } else if (quadrant === 3) {
	                var bottomLeft = new CellRef(topLeft.col, bottomRight.row);

	                if (cursor.row > bottomRight.row && this.rectIsVertical(bottomLeft, cursor, 'left', 'bottom')) { // vertical
	                    pivot = topLeft;
	                    cornerResult = new CellRef(cursor.row, bottomRight.col);
	                } else {
	                    pivot = bottomRight;
	                    cornerResult = new CellRef(topLeft.row, cursor.col);
	                }
	            } else if (quadrant === 2){
	                var topRight = new CellRef(topLeft.row, bottomRight.col);

	                if (cursor.col > bottomRight.col && !this.rectIsVertical(topRight, cursor, 'right', 'top')) { // horizontal
	                    pivot = topLeft;
	                    cornerResult = new CellRef(bottomRight.row, cursor.col);
	                } else {
	                    pivot = bottomRight;
	                    cornerResult = new CellRef(cursor.row, topLeft.col);
	                }
	            } else {
	                pivot = bottomRight;
	                if (this.rectIsVertical(topLeft, cursor, 'left', 'top')) { // horizontal
	                    cornerResult = new CellRef(cursor.row, topLeft.col);
	                } else {
	                    cornerResult = new CellRef(topLeft.row, cursor.col);
	                }
	            }

	            return this._grid.normalize(new RangeRef(pivot, cornerResult));
	        }
	    });

	    kendo.spreadsheet.AutoFillCalculator = AutoFillCalculator;
	})(kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });