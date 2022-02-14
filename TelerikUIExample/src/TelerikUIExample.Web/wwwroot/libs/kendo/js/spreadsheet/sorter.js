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

	__webpack_require__(1698);
	module.exports = __webpack_require__(1698);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1698:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var Sorter = kendo.Class.extend({
	        init: function(grid, lists) {
	            this._grid = grid;
	            this._lists = lists;
	        },

	        indices: function(rangeRef, list, ascending, indices) {
	            var comparer = Sorter.ascendingComparer;

	            if (ascending === false) {
	                comparer = Sorter.descendingComparer;
	            }

	            return list.sortedIndices(this._grid.cellRefIndex(rangeRef.topLeft),
	                this._grid.cellRefIndex(rangeRef.bottomRight), comparer, indices);
	        },

	        sortBy: function(ref, column, list, ascending, indices) {
	            var sortedIndices = this.indices(ref.toColumn(column), list, ascending, indices);

	            for (var ci = ref.topLeft.col; ci <= ref.bottomRight.col; ci++) {
	                var start = this._grid.index(ref.topLeft.row, ci);
	                var end = this._grid.index(ref.bottomRight.row, ci);

	                for (var li = 0; li < this._lists.length; li++) {
	                    if (start < this._lists[li].lastRangeStart()) {
	                        this._lists[li].sort(start, end, sortedIndices);
	                    }
	                }
	            }

	            return sortedIndices;
	        }
	    });

	    Sorter.ascendingComparer = function(a, b) {
	        if (a === null && b === null) {
	            return 0;
	        }

	        if (a === null) {
	            return 1;
	        }

	        if (b === null) {
	            return -1;
	        }

	        var typeA = typeof a;
	        var typeB = typeof b;

	        if (typeA === "number") {
	            if (typeB === "number") {
	                return a - b;
	            } else {
	               return -1;
	            }
	        }

	        if (typeA === "string") {
	            switch (typeB) {
	                case "number":
	                    return 1;
	                case "string":
	                    return a.localeCompare(b);
	                default:
	                    return -1;
	            }
	        }

	        if (typeA === "boolean") {
	            switch (typeB) {
	                case "number":
	                    return 1;
	                case "string":
	                    return 1;
	                case "boolean":
	                    return a - b;
	                default:
	                    return -1;
	            }
	        }

	        if (a instanceof kendo.spreadsheet.calc.runtime.CalcError) {
	            if (b instanceof kendo.spreadsheet.calc.runtime.CalcError) {
	                return 0;
	            } else {
	                return 1;
	            }
	        }

	        throw new Error("Cannot compare " + a + " and " + b);
	    };

	    Sorter.descendingComparer = function(a, b) {
	        if (a === null && b === null) {
	            return 0;
	        }

	        if (a === null) {
	            return 1;
	        }

	        if (b === null) {
	            return -1;
	        }

	        return Sorter.ascendingComparer(b, a);
	    };

	    kendo.spreadsheet.Sorter = Sorter;
	})(kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });