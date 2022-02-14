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

	__webpack_require__(1689);
	module.exports = __webpack_require__(1689);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1689:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// -*- fill-column: 100 -*-

	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){
	    // WARNING: removing the following jshint declaration and turning
	    // == into === to make JSHint happy will break functionality.
	    /* jshint eqnull:true, laxbreak:true */

	    "use strict";

	    var spreadsheet = kendo.spreadsheet;
	    var Class = kendo.Class;

	    function columnName(colIndex) {
	        var letter = Math.floor(colIndex / 26) - 1;
	        return (letter >= 0 ? columnName(letter) : "") + String.fromCharCode(65 + (colIndex % 26));
	    }

	    function displaySheet(sheet) {
	        if (/^[a-z_][a-z0-9_]*$/i.test(sheet)) {
	            return sheet;
	        }
	        return "'" + sheet.replace(/\x27/g, "\\'") + "'";
	    }

	    function displayRef(sheet, row, col, rel) {
	        var aa = "";

	        ++row;

	        if (!isFinite(row)) {
	            row = "";
	        }
	        else if (rel != null && !(rel & 2)) {
	            row = "$" + row;
	        }

	        if (!isFinite(col)) {
	            col = "";
	        }
	        else {
	            aa = columnName(col);
	            if (rel != null && !(rel & 1)) {
	                aa = "$" + aa;
	            }
	        }

	        if (sheet) {
	            return displaySheet(sheet) + "!" + aa + row;
	        } else {
	            return aa + row;
	        }
	    }

	    /* -----[ References ]----- */

	    var Ref = Class.extend({
	        type: "ref",
	        sheet: "",
	        clone: function() {
	            return this;
	        },
	        hasSheet: function() {
	            return this._hasSheet;
	        },
	        simplify: function() {
	            return this;
	        },
	        setSheet: function(sheet, hasSheet) {
	            this.sheet = sheet;
	            if (hasSheet != null) {
	                this._hasSheet = hasSheet;
	            }
	            return this;
	        },
	        absolute: function(){
	            return this;
	        },
	        relative: function(){
	            return this;
	        },
	        adjust: function(){
	            return this;
	        },
	        toString: function() {
	            return this.relative(0, 0, 3, 3).print(0, 0);
	        },
	        forEach: function(callback, obj) {
	            callback.call(obj, this);
	        },
	        map: function(callback, obj) {
	            return callback.call(obj, this);
	        },
	        intersects: function(ref) {
	            return this.intersect(ref) !== NULL;
	        },
	        isCell: function() {
	            return false;
	        },
	        toRow: function() {
	            return this;
	        },
	        toColumn: function() {
	            return this;
	        },

	        // UnionRef overrides these, to access its subranges.
	        first: function() {
	            return this;
	        },
	        lastRange: function() {
	            return this;
	        },
	        size: function() {
	            return 1;
	        },
	        rangeAt: function() {
	            return this;
	        },
	        nextRangeIndex: function() {
	            return 0;
	        },
	        previousRangeIndex: function() {
	            return 0;
	        },
	        eq: function(reference) {
	            var r1 = this;
	            var r2 = reference;

	            if (r1 === NULL || r2 === NULL) {
	                return r1 === r2;
	            }

	            // make positions consistent
	            if ((r2 instanceof CellRef) || (r2 instanceof RangeRef && !(r1 instanceof CellRef))) {
	               r1 = reference;
	               r2 = this;
	            }

	            if (r1 instanceof CellRef) { // cell eq *
	                r2 = r2.simplify();
	                return r2 instanceof CellRef && r1.row == r2.row && r1.col == r2.col && r1.sheet == r2.sheet;
	            }
	            else if (r1 instanceof RangeRef) { // range eq range/union
	                if (r2 instanceof RangeRef) {
	                    return r2.topLeft.eq(r1.topLeft) && r2.bottomRight.eq(r1.bottomRight);
	                }
	                if (r2 instanceof UnionRef) {
	                    return r2.single() && r1.eq(r2.refs[0]);
	                }
	            }
	            else if (r1 instanceof UnionRef && r2 instanceof UnionRef) { // union eq union
	                var refs1 = r1.refs;
	                var refs2 = r2.refs;
	                if (refs1.length != refs2.length) {
	                   return false;
	                }

	                for (var i = 0, len = refs1.length; i < len; i++) {
	                    if (!refs1[i].eq(refs2[i])) {
	                        return false;
	                    }
	                }

	                return true;
	            }

	            return r1 === r2;   // XXX: possibly NameRef when we'll support it.
	        },

	        concat: function(ref) {
	            return new UnionRef([this, ref]);
	        },

	        replaceAt: function(index, ref) {
	            return ref;
	        },

	        forEachColumnIndex: function(callback) {
	            this.forEachAxisIndex('col', callback);
	        },

	        forEachRowIndex: function(callback) {
	            this.forEachAxisIndex('row', callback);
	        },

	        forEachAxisIndex: function(axis, callback) {
	            var sorted = [];

	            var method = axis === 'row' ? 'forEachRow' : 'forEachColumn';

	            this[method](function(ref) {
	                var index = ref.first()[axis];
	                if (sorted.indexOf(index) === -1) {
	                    sorted.push(index);
	                }
	            });

	            sorted.sort(function(a,b) {
	                return a > b ? 1 : (a < b ? -1 : 0);
	            }).forEach(callback);
	        },

	        valid: function() {
	            return false;
	        },

	        renameSheet: function(oldSheetName, newSheetName) {
	            if (this.sheet && this.sheet.toLowerCase() == oldSheetName.toLowerCase()) {
	                this.sheet = newSheetName;
	                return true;
	            }
	        }
	    });

	    Ref.display = displayRef;

	    /* -----[ Null reference ]----- */

	    var NULL = new (Ref.extend({
	        init: function NullRef(){},
	        print: function() {
	            return "#NULL!";
	        },
	        eq: function(ref) {
	            return ref === this;
	        },
	        forEach: function() {}
	    }))();

	    /* -----[ Name reference ]----- */

	    var NameRef = Ref.extend({
	        ref: "name",
	        init: function NameRef(name){
	            this.name = name;
	        },
	        clone: function() {
	            return new NameRef(this.name)
	                .setSheet(this.sheet, this.hasSheet());
	        },
	        print: function() {
	            var ret = displaySheet(this.name);
	            if (this.hasSheet()) {
	                ret = displaySheet(this.sheet) + "!" + ret;
	            }
	            return ret;
	        }
	    });

	    /* -----[ Cell reference ]----- */

	    var CellRef = Ref.extend({
	        ref: "cell",
	        init: function CellRef(row, col, rel) {
	            this.row = row;
	            this.col = col;
	            this.rel = rel || 0;
	        },
	        clone: function() {
	            return new CellRef(this.row, this.col, this.rel)
	                .setSheet(this.sheet, this.hasSheet());
	        },
	        intersect: function(ref) {
	            if (ref instanceof CellRef) {
	                if (this.eq(ref)) {
	                    return this;
	                } else {
	                    return NULL;
	                }
	            }
	            return ref.intersect(this);
	        },
	        print: function(trow, tcol, mod) {
	            var col = this.col, row = this.row, rel = this.rel, abs;
	            if (trow == null && rel) {
	                var sheet = this.hasSheet() ? displaySheet(this.sheet) + "!" : "";
	                if (isFinite(col)) {
	                    col = rel & 1 ? ("C[" + col + "]") : ("C" + (col + 1));
	                } else {
	                    col = "";
	                }
	                if (isFinite(row)) {
	                    row = rel & 2 ? ("R[" + row + "]") : ("R" + (row + 1));
	                } else {
	                    row = "";
	                }
	                return sheet + row + col;
	            } else {
	                abs = this.absolute(trow, tcol);
	                if (mod) {
	                    // Hacks: see the big comment below in `absolute()`
	                    row = abs.row % 0x100000;
	                    col = abs.col % 0x4000;
	                    if (row < 0) {
	                        row += 0x100000;
	                    }
	                    if (col < 0) {
	                        col += 0x4000;
	                    }
	                    return displayRef(this._hasSheet && this.sheet, row, col, rel);
	                }
	                return abs.valid() ? displayRef(this._hasSheet && this.sheet, abs.row, abs.col, rel) : "#REF!";
	            }
	        },
	        absolute: function(arow, acol) {
	            var ret = this.clone();
	            if (ret.rel & 3 === 0) {
	                return ret;    // already absolute
	            }

	            // Hacks: we make coordinates modulo 0x4000 (max col) and 0x100000 (max row).  This
	            // fixes importing relative references in definedName-s from Excel.  Example in
	            // Excel: select cell E3, open the Name Manager (in Formula tab) and define name
	            // TEST with value Sheet1!A1:C3.  The serialization of this name in XLSX is:
	            //
	            //     <definedName name="TEST">Sheet1!XFA1048575:XFC1</definedName>
	            //
	            // This is insane, of course, but oh well.  Excel.  If you type in E3 =SUM(TEST) it
	            // works (it actually sums the cells), but if you type =SUM(Sheet1!XFA1048575:XFC1)
	            // you get back zero.  Let's see why SUM(TEST) works:
	            //
	            //     XFA1048575:XFC1                   E3
	            //     (zero-based indexes below)
	            //
	            //     R[1048574]C[16380]:R[0]C[16382] + R2C4 = R1048576C16384:R2C16386
	            //                                            % (0x100000, 0x4000)
	            //                                            = R0C0:R2C2 (== A1:C3)
	            //
	            // So XFA1048575:XFC1 is relocated to E3 at evaluation time, and because we take
	            // rows modulo 0x100000 and cols modulo 0x4000, we get back the correct range.
	            //
	            // IMO Excel should disallow A1-style relative references in name definitions
	            // (simply because the meaning of the A1:C3 you type in Name Manager depends on the
	            // active cell) and only allow R1C1 notation — that's unambiguous.  But it doesn't.
	            // Moreover, R1C1-style refs in XLSX are explicitly forbidden by the spec, and the
	            // hacks above are not documented — how else could we have fun implementing a XLSX
	            // reader?
	            if (ret.rel & 1) {
	                // relative col, add anchor
	                ret.col = (ret.col + acol) % 0x4000;
	            }
	            if (ret.rel & 2) {
	                // relative row, add anchor
	                ret.row = (ret.row + arow) % 0x100000;
	            }

	            ret.rel = 0;
	            return ret;
	        },
	        toRangeRef: function() {
	            return new RangeRef(this, this);
	        },
	        relative: function(arow, acol, rel) {
	            if (rel == null) {
	                rel = this.rel;
	            }
	            var row = rel & 2 ? this.row - arow : this.row;
	            var col = rel & 1 ? this.col - acol : this.col;
	            return new CellRef(row, col, rel)
	                .setSheet(this.sheet, this.hasSheet());
	        },
	        height: function() {
	            return 1;
	        },
	        width: function() {
	            return 1;
	        },
	        toString: function() {
	            return displayRef(null, this.row, this.col, 3);
	        },
	        isCell: function() {
	            return true;
	        },
	        leftColumn: function() {
	            return this;
	        },
	        rightColumn: function() {
	            return this;
	        },
	        topRow: function() {
	            return this;
	        },
	        bottomRow: function() {
	            return this;
	        },
	        forEachRow: function(callback) {
	            callback(this.toRangeRef());
	        },
	        forEachColumn: function(callback) {
	            callback(this.toRangeRef());
	        },
	        adjust: function(row, col, trow, tcol, forRow, start, delta) {
	            var ref = this.absolute(row, col);
	            if (forRow) {
	                if (ref.row >= start) {
	                    if (delta < 0 && ref.row < start - delta) {
	                        return NULL;
	                    }
	                    ref.row += delta;
	                }
	            } else {
	                if (ref.col >= start) {
	                    if (delta < 0 && ref.col < start - delta) {
	                        return NULL;
	                    }
	                    ref.col += delta;
	                }
	            }
	            if (trow != null && tcol != null) {
	                ref = ref.relative(trow, tcol, this.rel);
	            }
	            return ref;
	        },
	        valid: function() {
	            if (this.rel) {
	                throw new Error("valid() called on relative reference");
	            }
	            var col = this.col, row = this.row;
	            return !((isFinite(col) && col < 0) || (isFinite(row) && row < 0));
	        }
	    });

	    /* -----[ Range reference ]----- */

	    var RangeRef = Ref.extend({
	        ref: "range",
	        init: function RangeRef(tl, br) {
	            if (tl._hasSheet && br._hasSheet && tl.sheet.toLowerCase() != br.sheet.toLowerCase()) {
	                // "3D" reference
	                this.endSheet = br.sheet;
	            }
	            // we want to drop any sheet information from the cells here.
	            this.topLeft = new CellRef(tl.row, tl.col, tl.rel);
	            this.bottomRight = new CellRef(br.row, br.col, br.rel);
	            this.normalize();
	        },
	        clone: function() {
	            return new RangeRef(this.topLeft.clone(), this.bottomRight.clone()).setSheet(this.sheet, this.hasSheet());
	        },
	        _containsRange: function(range) {
	            return this._containsCell(range.topLeft)
	                && this._containsCell(range.bottomRight);
	        },
	        _containsCell: function(cell) {
	            return cell.sheet == this.sheet
	                && cell.row >= this.topLeft.row
	                && cell.col >= this.topLeft.col
	                && cell.row <= this.bottomRight.row
	                && cell.col <= this.bottomRight.col;
	        },
	        contains: function(ref) {
	            if (ref instanceof Array) {
	                var that = this;

	                return ref.some(function(_ref) { return that.contains(_ref); });
	            }
	            if (ref instanceof CellRef) {
	                return this._containsCell(ref);
	            }
	            if (ref instanceof RangeRef) {
	                return this._containsRange(ref);
	            }
	            return false;
	        },
	        _intersectRange: function(ref) {
	            if (this.sheet != ref.sheet) {
	                return NULL;
	            }
	            var a_left    = this.topLeft.col;
	            var a_top     = this.topLeft.row;
	            var a_right   = this.bottomRight.col;
	            var a_bottom  = this.bottomRight.row;
	            var b_left    = ref.topLeft.col;
	            var b_top     = ref.topLeft.row;
	            var b_right   = ref.bottomRight.col;
	            var b_bottom  = ref.bottomRight.row;
	            if (a_left <= b_right &&
	                b_left <= a_right &&
	                a_top <= b_bottom &&
	                b_top <= a_bottom)
	            {
	                return new RangeRef(
	                    // topLeft
	                    new CellRef(Math.max(a_top, b_top),
	                                Math.max(a_left, b_left)),
	                    // bottomRight
	                    new CellRef(Math.min(a_bottom, b_bottom),
	                                Math.min(a_right, b_right))
	                ).setSheet(this.sheet, this.hasSheet());
	            } else {
	                return NULL;
	            }
	        },
	        intersect: function(ref) {
	            if (ref instanceof CellRef) {
	                return this._containsCell(ref) ? ref : NULL;
	            }
	            if (ref instanceof RangeRef) {
	                return this._intersectRange(ref).simplify();
	            }
	            if (ref instanceof UnionRef) {
	                return ref.intersect(this);
	            }
	            return NULL;        // can't handle NameRef-s here.
	        },
	        simplify: function() {
	            if (this.isCell()) {
	                return new CellRef(
	                    this.topLeft.row,
	                    this.topLeft.col,
	                    this.topLeft.rel
	                ).setSheet(this.sheet, this.hasSheet());
	            }
	            return this;
	        },
	        normalize: function() {
	            var a = this.topLeft, b = this.bottomRight;
	            var r1 = a.row, c1 = a.col, r2 = b.row, c2 = b.col;
	            var rr1 = a.rel & 2, rc1 = a.rel & 1;
	            var rr2 = b.rel & 2, rc2 = b.rel & 1;
	            var tmp, changes = false;
	            // do not attempt to normalize unless relativeness of rows and cols are the same.
	            // https://github.com/telerik/kendo-ui-core/issues/4278
	            if (rr1 === rr2 && rc1 === rc2) {
	                if (r1 > r2) {
	                    changes = true;
	                    tmp = r1; r1 = r2; r2 = tmp;
	                    tmp = rr1; rr1 = rr2; rr2 = tmp;
	                }
	                if (c1 > c2) {
	                    changes = true;
	                    tmp = c1; c1 = c2; c2 = tmp;
	                    tmp = rc1; rc1 = rc2; rc2 = tmp;
	                }
	                if (changes) {
	                    this.topLeft = new CellRef(r1, c1, rc1 | rr1);
	                    this.bottomRight = new CellRef(r2, c2, rc2 | rr2);
	                }
	            }
	            return this;
	        },
	        print: function(trow, tcol, mod) {
	            if (mod || this.absolute(trow, tcol).valid()) {
	                var ret = this.topLeft.print(trow, tcol, mod)
	                    + ":"
	                    + this.bottomRight.print(trow, tcol, mod);
	                if (this.hasSheet()) {
	                    ret = displaySheet(this.sheet)
	                        + (this.endSheet ? ":" + displaySheet(this.endSheet) : "")
	                        + "!" + ret;
	                }
	                return ret;
	            }
	            return "#REF!";
	        },
	        absolute: function(arow, acol) {
	            return new RangeRef(
	                this.topLeft.absolute(arow, acol),
	                this.bottomRight.absolute(arow, acol)
	            ).setSheet(this.sheet, this.hasSheet());
	        },
	        relative: function(arow, acol, relTL, relBR) {
	            if (relBR == null) {
	                relBR = relTL;
	            }
	            return new RangeRef(
	                this.topLeft.relative(arow, acol, relTL),
	                this.bottomRight.relative(arow, acol, relBR)
	            ).setSheet(this.sheet, this.hasSheet());
	        },
	        height: function() {
	            if (this.topLeft.rel != this.bottomRight.rel) {
	                throw new Error("Mixed relative/absolute references");
	            }
	            return this.bottomRight.row - this.topLeft.row + 1;
	        },
	        width: function() {
	            if (this.topLeft.rel != this.bottomRight.rel) {
	                throw new Error("Mixed relative/absolute references");
	            }
	            return this.bottomRight.col - this.topLeft.col + 1;
	        },
	        collapse: function() {
	            return this.topLeft.toRangeRef();
	        },
	        leftColumn: function() {
	            return new RangeRef(this.topLeft, new CellRef(this.bottomRight.row, this.topLeft.col));
	        },
	        rightColumn: function() {
	            return new RangeRef(new CellRef(this.topLeft.row, this.bottomRight.col), this.bottomRight);
	        },
	        topRow: function() {
	            return new RangeRef(this.topLeft, new CellRef(this.topLeft.row, this.bottomRight.col));
	        },
	        bottomRow: function() {
	            return new RangeRef(new CellRef(this.bottomRight.row, this.topLeft.col), this.bottomRight);
	        },
	        toRangeRef: function() {
	            return this;
	        },
	        toRow: function(row) {
	            row += Math.max(0, this.topLeft.row);
	            return new RangeRef(
	                new CellRef(row, this.topLeft.col),
	                new CellRef(row, this.bottomRight.col)
	            ).setSheet(this.sheet, this.hasSheet());
	        },
	        toColumn: function(col) {
	            col += Math.max(0, this.topLeft.col);
	            return new RangeRef(
	                new CellRef(this.topLeft.row, col),
	                new CellRef(this.bottomRight.row, col)
	            ).setSheet(this.sheet, this.hasSheet());
	        },
	        toCell: function(row, col) {
	            row += Math.max(0, this.topLeft.row);
	            col += Math.max(0, this.topLeft.col);
	            return new CellRef(row, col, 0)
	                .setSheet(this.sheet, this.hasSheet());
	        },
	        forEachRow: function(callback) {
	            var startRow = this.topLeft.row;
	            var endRow = this.bottomRight.row;
	            var startCol = this.topLeft.col;
	            var endCol = this.bottomRight.col;

	            for (var i = startRow; i <= endRow; i++) {
	                callback(new RangeRef(
	                    new CellRef(i, startCol),
	                    new CellRef(i, endCol)
	                ));
	            }
	        },
	        forEachColumn: function(callback) {
	            var startRow = this.topLeft.row;
	            var endRow = this.bottomRight.row;
	            var startCol = this.topLeft.col;
	            var endCol = this.bottomRight.col;

	            for (var i = startCol; i <= endCol; i++) {
	                callback(new RangeRef(
	                    new CellRef(startRow, i),
	                    new CellRef(endRow, i)
	                ));
	            }
	        },
	        intersecting: function(refs) {
	            return refs.filter(function(ref) {
	                return ref.toRangeRef().intersects(this);
	            }, this);
	        },

	        union: function(refs, callback) {
	            var intersecting = this.intersecting(refs);

	            var topLeftRow = this.topLeft.row;
	            var topLeftCol = this.topLeft.col;
	            var bottomRightRow = this.bottomRight.row;
	            var bottomRightCol = this.bottomRight.col;

	            var modified = false;

	            intersecting.forEach(function(ref) {
	                ref = ref.toRangeRef();
	                if (ref.topLeft.row < topLeftRow) {
	                    modified = true;
	                    topLeftRow = ref.topLeft.row;
	                }

	                if (ref.topLeft.col < topLeftCol) {
	                    modified = true;
	                    topLeftCol = ref.topLeft.col;
	                }

	                if (ref.bottomRight.row > bottomRightRow) {
	                    modified = true;
	                    bottomRightRow = ref.bottomRight.row;
	                }

	                if (ref.bottomRight.col > bottomRightCol) {
	                    modified = true;
	                    bottomRightCol = ref.bottomRight.col;
	                }

	                if (callback) {
	                    callback(ref);
	                }
	            });

	            var result = new RangeRef(
	                new CellRef(topLeftRow, topLeftCol),
	                new CellRef(bottomRightRow, bottomRightCol)
	            );

	            if (modified) {
	                return result.union(refs, callback);
	            } else {
	                return result;
	            }
	        },
	        resize: function(options) {
	            var limit = Math.max.bind(Math, 0);
	            function num(value) { return value || 0; }

	            var top = this.topLeft.row + num(options.top);
	            var left = this.topLeft.col + num(options.left);
	            var bottom = this.bottomRight.row + num(options.bottom);
	            var right = this.bottomRight.col + num(options.right);

	            if (left < 0 && right < 0 || top < 0 && bottom < 0) {
	                return NULL;
	            } else if (top <= bottom && left <= right) {
	                return new RangeRef(new CellRef(limit(top), limit(left)),
	                                    new CellRef(limit(bottom), limit(right)));
	            } else {
	                return NULL;
	            }
	        },
	        move: function(rows, cols) {
	            return new RangeRef(
	                new CellRef(this.topLeft.row + rows,
	                            this.topLeft.col + cols),
	                new CellRef(this.bottomRight.row + rows,
	                            this.bottomRight.col + cols)
	            );
	        },
	        first: function() {
	            return this.topLeft.clone().setSheet(this.sheet, this.hasSheet());
	        },
	        isCell: function() {
	            return !this.endSheet && this.topLeft.eq(this.bottomRight);
	        },
	        toString: function() {
	            return this.topLeft + ":" + this.bottomRight;
	        },
	        adjust: function(row, col, trow, tcol, forRow, start, delta) {
	            var tl = this.topLeft.adjust(row, col, trow, tcol, forRow, start, delta);
	            var tr = this.bottomRight.adjust(row, col, trow, tcol, forRow, start, delta);
	            if (tl === NULL && tr === NULL) {
	                return NULL;
	            }
	            if (tl === NULL) {
	                tl = this.topLeft.absolute(row, col);
	                if (forRow) {
	                    tl.row = start;
	                } else {
	                    tl.col = start;
	                }
	                if (trow != null && tcol != null) {
	                    tl = tl.relative(trow, tcol, this.topLeft.rel);
	                }
	            }
	            else if (tr === NULL) {
	                tr = this.bottomRight.absolute(row, col);
	                if (forRow) {
	                    tr.row = start - 1;
	                } else {
	                    tr.col = start - 1;
	                }
	                if (trow != null && tcol != null) {
	                    tr = tr.relative(trow, tcol, this.bottomRight.rel);
	                }
	            }
	            return new RangeRef(tl, tr)
	                .setSheet(this.sheet, this.hasSheet())
	                .simplify();
	        },
	        valid: function() {
	            return this.topLeft.valid() && this.bottomRight.valid();
	        }
	    });

	    /* -----[ Union reference ]----- */

	    var UnionRef = Ref.extend({
	        init: function UnionRef(refs){
	            this.refs = refs;
	            this.length = refs.length;
	        },
	        clone: function() {
	            return new UnionRef(this.refs.slice());
	        },
	        intersect: function(ref) {
	            var a = [];
	            for (var i = 0; i < this.length; ++i) {
	                var x = ref.intersect(this.refs[i]);
	                if (x !== NULL) {
	                    a.push(x);
	                }
	            }
	            if (a.length > 0) {
	                return new UnionRef(a).simplify();
	            }
	            return NULL;
	        },
	        simplify: function() {
	            var u = new UnionRef(this.refs.reduce(function(a, ref){
	                ref = ref.simplify();
	                if (ref !== NULL) {
	                    a.push(ref);
	                }
	                return a;
	            }, []));
	            if (u.empty()) {
	                return NULL;
	            }
	            if (u.single()) {
	                return u.refs[0];
	            }
	            return u;
	        },
	        absolute: function(arow, acol) {
	            return new UnionRef(this.refs.map(function(ref){
	                return ref.absolute(arow, acol);
	            }));
	        },
	        forEach: function(callback, obj) {
	            this.refs.forEach(function(ref){
	                if (ref instanceof UnionRef) {
	                    ref.forEach(callback, obj);
	                } else {
	                    callback.call(obj, ref);
	                }
	            }, obj);
	        },
	        toRangeRef: function() {
	            return this.refs[0].toRangeRef();
	        },
	        contains: function(theRef) {
	            return this.refs.some(function(ref) { return ref.contains(theRef); });
	        },
	        map: function(callback, obj) {
	            var refs = [];
	            this.forEach(function(ref){
	                refs.push(callback.call(obj, ref));
	            });
	            return new UnionRef(refs);
	        },
	        first: function() {
	            return this.refs[0].first();
	        },
	        lastRange: function() {
	            return this.refs[this.length - 1];
	        },
	        size: function() {
	            return this.length;
	        },
	        single: function() {
	            return this.length == 1;
	        },
	        empty: function() {
	            return this.length === 0;
	        },
	        isCell: function() {
	            return this.single() && this.refs[0].isCell();
	        },
	        rangeAt: function(index) {
	            return this.refs[index];
	        },
	        nextRangeIndex: function(index) {
	            if (index === this.length - 1) {
	                return 0;
	            } else {
	                return index + 1;
	            }
	        },
	        previousRangeIndex: function(index) {
	            if (index === 0) {
	                return this.length - 1;
	            } else {
	                return index - 1;
	            }
	        },
	        concat: function(ref) {
	            return new UnionRef(this.refs.concat([ref]));
	        },
	        print: function(row, col, mod) {
	            return this.refs.map(function(ref) { return ref.print(row, col, mod); }).join(",");
	        },

	        replaceAt: function(index, ref) {
	            var newRefs = this.refs.slice();
	            newRefs.splice(index, 1, ref);
	            return new UnionRef(newRefs);
	        },

	        leftColumn: function() {
	            return this.map(function(ref) {
	                return ref.leftColumn();
	            });
	        },
	        rightColumn: function() {
	            return this.map(function(ref) {
	                return ref.rightColumn();
	            });
	        },
	        topRow: function() {
	            return this.map(function(ref) {
	                return ref.topRow();
	            });
	        },
	        bottomRow: function() {
	            return this.map(function(ref) {
	                return ref.bottomRow();
	            });
	        },
	        forEachRow: function(callback) {
	            this.forEach(function(ref) {
	                ref.forEachRow(callback);
	            });
	        },
	        forEachColumn: function(callback) {
	            this.forEach(function(ref) {
	                ref.forEachColumn(callback);
	            });
	        },
	        adjust: function(row, col, trow, tcol, forRow, start, delta) {
	            return this.map(function(ref){
	                return ref.adjust(row, col, trow, tcol, forRow, start, delta);
	            }).simplify();
	        },
	        toString: function() {
	            return this.refs.map(function(ref){
	                return ref.toString();
	            }).join(", ");
	        },
	        valid: function() {
	            for (var i = this.refs.length; --i >= 0;) {
	                if (this.refs[i].valid()) {
	                    return false;
	                }
	            }
	            return true;
	        },
	        renameSheet: function(oldSheetName, newSheetName) {
	            this.refs.forEach(function(ref){
	                ref.renameSheet(oldSheetName, newSheetName);
	            });
	        }
	    });

	    /* -----[ exports ]----- */

	    spreadsheet.NULLREF = NULL;
	    spreadsheet.SHEETREF = new RangeRef(new CellRef(0, 0), new CellRef(Infinity, Infinity));
	    spreadsheet.FIRSTREF = new CellRef(0, 0);
	    spreadsheet.Ref = Ref;
	    spreadsheet.NameRef = NameRef;
	    spreadsheet.CellRef = CellRef;
	    spreadsheet.RangeRef = RangeRef;
	    spreadsheet.UnionRef = UnionRef;

	    spreadsheet.SHEETREF.print = function() {
	        return "#SHEET";
	    };

	}, __webpack_require__(3));


/***/ })

/******/ });