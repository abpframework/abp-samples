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

	__webpack_require__(1690);
	module.exports = __webpack_require__(1690);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1676:
/***/ (function(module, exports) {

	module.exports = require("./references");

/***/ }),

/***/ 1690:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// -*- fill-column: 100 -*-

	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1676) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){
	    "use strict";

	    // WARNING: removing the following jshint declaration and turning
	    // == into === to make JSHint happy will break functionality.
	    /* jshint eqnull:true, newcap:false, laxbreak:true, shadow:true, validthis:true, -W054, loopfunc: true */
	    /* global console */
	    /* jshint latedef: nofunc */

	    var calc = {};
	    var spreadsheet = kendo.spreadsheet;
	    spreadsheet.calc = calc;
	    var exports = calc.runtime = {};
	    var Class = kendo.Class;

	    var Ref = spreadsheet.Ref;
	    var CellRef = spreadsheet.CellRef;
	    var RangeRef = spreadsheet.RangeRef;
	    var UnionRef = spreadsheet.UnionRef;
	    var NULL = spreadsheet.NULLREF;

	    /* -----[ Errors ]----- */

	    function CalcError(code) {
	        if (code instanceof CalcError) {
	            return code;
	        }
	        this.code = code;
	    }

	    CalcError.prototype.toString = function() {
	        return "#" + this.code + (this.code == "NAME" ? "?" : "!");
	    };

	    /* -----[ Context ]----- */

	    var Context = Class.extend({
	        init: function Context(callback, formula, ss, parent) {
	            this.callback = callback;
	            this.formula = formula;
	            this.ss = ss;
	            this.parent = parent;
	        },

	        resolve: function(val) {
	            var self = this;
	            if (val instanceof Ref) {
	                self.resolveCells([ val ], function(){
	                    self._resolve(val);
	                });
	            } else {
	                self._resolve(val);
	            }
	        },

	        error: function(val) {
	            return new CalcError(val);
	        },

	        _resolve: function(val) {
	            if (val === undefined) {
	                val = null;
	            } else if (Array.isArray(val)) {
	                val = this.asMatrix(val);
	            } else {
	                val = maybeRoundFloatErrors(val);
	            }
	            var f = this.formula;
	            if (f.arrayFormulaRange) {
	                // when this is an array formula, make sure we return a Matrix.  The value already
	                // *should* be a Matrix, so this won't incur speed penalty in normal cases.
	                val = this.asMatrix(val) || this.asMatrix([[ val ]]);
	            } else if (val instanceof RangeRef) {
	                val = this._arrayArg(val);
	            }
	            f.value = val;
	            if (this.ss.onFormula(f) && this.callback) {
	                this.callback.call(f, val);
	            }
	        },

	        resolveCells: function(a, f) {
	            var context = this, formulas = [];

	            (function loop(a){
	                for (var i = 0; i < a.length; ++i) {
	                    var x = a[i];
	                    if (x instanceof Ref) {
	                        add(context.getRefCells(x));
	                    }
	                    if (Array.isArray(x)) {
	                        // make sure we resolve cells in literal matrices
	                        loop(x);
	                    }
	                }
	            })(a);

	            if (!formulas.length) {
	                return f.call(context);
	            }

	            for (var pending = formulas.length, i = 0; i < formulas.length; ++i) {
	                fetch(formulas[i]);
	            }
	            function fetch(formula) { // jshint ignore:line, because you are stupid.
	                formula.exec(context.ss, function(){
	                    if (!--pending) {
	                        f.call(context);
	                    }
	                }, context);
	            }
	            function add(a) {
	                for (var i = 0; i < a.length; ++i) {
	                    var cell = a[i];
	                    if (cell.formula) {
	                        formulas.push(cell.formula);
	                    }
	                }
	                return true;
	            }
	        },

	        cellValues: function(a, wantNulls) {
	            var ret = [];
	            for (var i = 0; i < a.length; ++i) {
	                var val = a[i];
	                if (val instanceof Ref) {
	                    val = this.getRefData(val, wantNulls);
	                    ret = ret.concat(val);
	                } else if (Array.isArray(val)) {
	                    ret = ret.concat(this.cellValues(val, wantNulls));
	                } else if (val instanceof Matrix) {
	                    ret = ret.concat(this.cellValues(val.data, wantNulls));
	                } else {
	                    ret.push(val);
	                }
	            }
	            return ret;
	        },

	        fetchName: function(ref, callback) {
	            var f = this.formula;
	            var val = this.ss.nameValue(ref, f.sheet, f.row, f.col);
	            if (val instanceof Formula) {
	                // clone and relocate to calling formula, so that relative references in a named
	                // formula would work as expected.
	                val = val.clone(f.sheet, f.row, f.col, true);

	                // XXX: I don't like this dependency here; basically we only need ss.onFormula to
	                // return true and do nothing else.
	                var ss = new spreadsheet.ValidationFormulaContext(this.ss.workbook);

	                val.exec(ss, callback, this);
	            } else {
	                if (val instanceof Ref) {
	                    // relocate for relative refs
	                    val = val.absolute(f.row, f.col);
	                    if (val instanceof RangeRef && this.ss.isMerged(val)) {
	                        val = val.topLeft;
	                    }
	                    if (!val.sheet) {
	                        val.sheet = f.sheet;
	                    }
	                }
	                callback(val == null ? new CalcError("NAME") : val);
	            }
	        },

	        force: function(val) {
	            if (val instanceof Ref) {
	                return this.getRefData(val);
	            }
	            return val;
	        },

	        func: function(fname, callback, args) {
	            fname = fname.toLowerCase();
	            var f = FUNCS[fname];
	            if (f) {
	                return f.call(this, callback, args);
	            }
	            callback(new CalcError("NAME"));
	        },

	        bool: function(val) {
	            if (val instanceof Ref) {
	                val = this.getRefData(val);
	            }
	            if (typeof val == "string") {
	                return val.toLowerCase() == "true";
	            }
	            if (typeof val == "number") {
	                return val !== 0;
	            }
	            if (typeof val == "boolean") {
	                return val;
	            }
	            return val != null;
	        },

	        _arrayArg: function(ref) { // not necessarily a reference though
	            var f = this.formula;
	            if (!f.arrayFormulaRange && ref instanceof RangeRef) {
	                // if formula wasn't saved with Ctrl-Shift-Enter but a range is passed, Excel does
	                // something special:
	                //
	                // - if range is Wx1 (horizontal array) and current formula resides within the
	                //   horizontal bounds of the range, the appropriate cell is selected.  Example:
	                //   A1..D1 contain 1, 2, 3, 4 and we have in B2: =A1:D1, then B2 will get 2 (the
	                //   value in A2).  If the same formula is typed outside the horizontal span of the
	                //   range, say in E2: =A1:D1, then #VALUE! is returned.
	                //
	                // - similarly, if the range is 1xH (vertical array), the formula must reside within
	                //   the vertical bounds of the range and it gets the corresponding cell; otherwise,
	                //   #VALUE!.
	                if (ref.height() == 1 && f.col >= ref.topLeft.col && f.col <= ref.bottomRight.col) {
	                    return this.getRefData(new CellRef(ref.topLeft.row, f.col).setSheet(ref.sheet));
	                }
	                if (ref.width() == 1 && f.row >= ref.topLeft.row && f.row <= ref.bottomRight.row) {
	                    return this.getRefData(new CellRef(f.row, ref.topLeft.col).setSheet(ref.sheet));
	                }
	                return new CalcError("VALUE");
	            } else {
	                return this.asMatrix(ref);
	            }
	        },

	        asMatrix: function(range) {
	            if (range instanceof Matrix) {
	                return range;
	            }
	            var self = this;
	            if (range instanceof RangeRef) {
	                var tl = range.topLeft;
	                var top = tl.row, left = tl.col;
	                var cells = self.getRefCells(range);
	                var m = new Matrix(self);
	                if (isFinite(range.width())) {
	                    m.width = range.width();
	                }
	                if (isFinite(range.height())) {
	                    m.height = range.height();
	                }
	                if (!isFinite(top)) {
	                    top = 0;
	                }
	                if (!isFinite(left)) {
	                    left = 0;
	                }
	                cells.forEach(function(cell){
	                    m.set(cell.row - top,
	                          cell.col - left,
	                          cell.value);
	                });
	                return m;
	            }
	            if (Array.isArray(range) && range.length > 0) {
	                var m = new Matrix(self), row = 0;
	                range.forEach(function(line){
	                    var col = 0;
	                    var h = 1;
	                    line.forEach(function(el){
	                        var isRange = el instanceof RangeRef;
	                        if (el instanceof Ref && !isRange) {
	                            el = self.getRefData(el);
	                        }
	                        if (isRange || Array.isArray(el)) {
	                            el = self.asMatrix(el);
	                        }
	                        if (el instanceof Matrix) {
	                            el.each(function(el, r, c){
	                                m.set(row + r, col + c, el);
	                            });
	                            h = Math.max(h, el.height);
	                            col += el.width;
	                        } else {
	                            if(typeof el === "string" && el.length && !isNaN(el)) {
	                                el = Number(el);
	                            }

	                            m.set(row, col++, el);
	                        }
	                    });
	                    row += h;
	                });
	                return m;
	            }
	        },

	        getRefCells: function(refs, hiddenInfo, wantNulls) {
	            var f = this.formula;
	            return this.ss.getRefCells(refs, hiddenInfo, f.sheet, f.row, f.col, wantNulls);
	        },

	        getRefData: function(ref, wantNulls) {
	            var f = this.formula;
	            return this.ss.getData(ref, f.sheet, f.row, f.col, wantNulls);
	        },

	        workbook: function() {
	            return this.ss.workbook;
	        }
	    });

	    var Matrix = Class.extend({
	        init: function Matrix(context) {
	            this.context = context;
	            this.height = 0;
	            this.width = 0;
	            this.data = [];
	        },
	        clone: function() {
	            var m = new Matrix(this.context);
	            m.height = this.height;
	            m.width = this.width;
	            m.data = this.data.map(function(row){ return row.slice(); });
	            return m;
	        },
	        get: function(row, col) {
	            var line = this.data[row];
	            var val = line ? line[col] : null;
	            return val instanceof Ref ? this.context.getRefData(val) : val;
	        },
	        getNA: function(row, col) {
	            if (row < this.height && col < this.width) {
	                return this.get(row, col);
	            }
	            return new CalcError("N/A");
	        },
	        set: function(row, col, data) {
	            var line = this.data[row];
	            if (line == null) {
	                line = this.data[row] = [];
	            }
	            line[col] = data;
	            if (row >= this.height) {
	                this.height = row + 1;
	            }
	            if (col >= this.width) {
	                this.width = col + 1;
	            }
	        },
	        each: function(f, includeEmpty) {
	            for (var row = 0; row < this.height; ++row) {
	                for (var col = 0; col < this.width; ++col) {
	                    var val = this.get(row, col);
	                    if (includeEmpty || val != null) {
	                        val = f.call(this.context, val, row, col);
	                        if (val !== undefined) {
	                            return val;
	                        }
	                    }
	                }
	            }
	        },
	        map: function(f, includeEmpty) {
	            var m = new Matrix(this.context);
	            this.each(function(el, row, col){
	                // here `this` is actually the context
	                m.set(row, col, f.call(this, el, row, col));
	            }, includeEmpty);
	            return m;
	        },
	        eachRow: function(f) {
	            for (var row = 0; row < this.height; ++row) {
	                var val = f.call(this.context, row);
	                if (val !== undefined) {
	                    return val;
	                }
	            }
	        },
	        eachCol: function(f) {
	            for (var col = 0; col < this.width; ++col) {
	                var val = f.call(this.context, col);
	                if (val !== undefined) {
	                    return val;
	                }
	            }
	        },
	        mapRow: function(f) {
	            var m = new Matrix(this.context);
	            this.eachRow(function(row){
	                m.set(row, 0, f.call(this.context, row));
	            });
	            return m;
	        },
	        mapCol: function(f) {
	            var m = new Matrix(this.context);
	            this.eachCol(function(col){
	                m.set(0, col, f.call(this.context, col));
	            });
	            return m;
	        },
	        toString: function() {
	            return JSON.stringify(this.data);
	        },
	        transpose: function() {
	            var m = new Matrix(this.context);
	            this.each(function(el, row, col){
	                m.set(col, row, el);
	            });
	            return m;
	        },
	        unit: function(n) {
	            this.width = this.height = n;
	            var a = this.data = new Array(n);
	            for (var i = n; --i >= 0;) {
	                var row = a[i] = new Array(n);
	                for (var j = n; --j >= 0;) {
	                    row[j] = i == j ? 1 : 0;
	                }
	            }
	            return this;
	        },
	        multiply: function(b) {
	            var a = this, m = new Matrix(a.context);
	            for (var row = 0; row < a.height; ++row) {
	                for (var col = 0; col < b.width; ++col) {
	                    var s = 0;
	                    for (var i = 0; i < a.width; ++i) {
	                        var va = a.get(row, i);
	                        var vb = b.get(i, col);
	                        if (typeof va != "number" || typeof vb != "number") {
	                            throw new CalcError("VALUE");
	                        }
	                        s += va * vb;
	                    }
	                    m.set(row, col, s);
	                }
	            }
	            return m;
	        },
	        adds: function(b, s) {
	            var a = this, m = new Matrix(a.context);
	            var sign = s ? -1 : 1;
	            for (var row = 0; row < a.height; ++row) {
	                for (var col = 0; col < a.width; ++col) {
	                    var x = a.get(row, col),
	                        y = b.get(row, col);
	                    m.set(row, col, x + sign * y);
	                }
	            }
	            return m;
	        },
	        determinant: function() {
	            var a = this.clone().data;
	            var n = a.length;
	            var d = 1, C, L, i, k;
	            for (C = 0; C < n; C++) {
	                for (L = C; (L < n) && (!a[L][C]); L++) {}
	                if (L == n) {
	                    return 0;
	                }
	                if (L != C) {
	                    d = -d;
	                    for (k = C; k < n; k++) {
	                        var t = a[C][k];
	                        a[C][k] = a[L][k];
	                        a[L][k] = t;
	                    }
	                }
	                for (i = C+1; i < n; i++) {
	                    for (k = C+1; k < n; k++) {
	                        a[i][k] -= a[C][k] * a[i][C] / a[C][C];
	                    }
	                }
	                d *= a[C][C];
	            }
	            return d;
	        },
	        inverse: function() {
	            var n = this.width;
	            var m = this.augment(new Matrix(this.context).unit(n));
	            var a = m.data;
	            var tmp;

	            // Gaussian elimination
	            // https://en.wikipedia.org/wiki/Gaussian_elimination#Finding_the_inverse_of_a_matrix

	            // 1. Get zeros below main diagonal
	            for (var k = 0; k < n; ++k) {
	                var imax = argmax(k, n, function(i){ return a[i][k]; });
	                if (!a[imax][k]) {
	                    return null; // singular matrix
	                }
	                if (k != imax) {
	                    tmp = a[k];
	                    a[k] = a[imax];
	                    a[imax] = tmp;
	                }
	                for (var i = k+1; i < n; ++i) {
	                    for (var j = k+1; j < 2*n; ++j) {
	                        a[i][j] -= a[k][j] * a[i][k] / a[k][k];
	                    }
	                    a[i][k] = 0;
	                }
	            }

	            // 2. Get 1-s on main diagonal, dividing by pivot
	            for (var i = 0; i < n; ++i) {
	                for (var f = a[i][i], j = 0; j < 2*n; ++j) {
	                    a[i][j] /= f;
	                }
	            }

	            // 3. Get zeros above main diagonal.  Actually, we only care to compute the right side
	            // here (that will be the inverse), so in the inner loop below we go while j >= n,
	            // instead of j >= k.
	            for (var k = n; --k >= 0;) {
	                for (var i = k; --i >= 0;) {
	                    if (a[i][k]) {
	                        for (var j = 2*n; --j >= n;) {
	                            a[i][j] -= a[k][j] * a[i][k];
	                        }
	                    }
	                }
	            }

	            return m.slice(0, n, n, n);
	        },
	        augment: function(m) {
	            var ret = this.clone(), n = ret.width;
	            m.each(function(val, row, col){
	                ret.set(row, col + n, val);
	            });
	            return ret;
	        },
	        slice: function(row, col, height, width) {
	            var m = new Matrix(this.context);
	            for (var i = 0; i < height; ++i) {
	                for (var j = 0; j < width; ++j) {
	                    m.set(i, j, this.get(row + i, col + j));
	                }
	            }
	            return m;
	        }

	        // XXX: debug
	        // dump: function() {
	        //     this.data.forEach(function(row){
	        //         console.log(row.map(function(val){
	        //             var str = val.toFixed(3).replace(/\.?0*$/, function(s){
	        //                 return [ "", " ", "  ", "   ", "    " ][s.length];
	        //             });
	        //             if (val >= 0) { str = " " + str; }
	        //             return str;
	        //         }).join("  "));
	        //     });
	        // }
	    });

	    function argmax(i, end, f) {
	        var max = f(i), pos = i;
	        while (++i < end) {
	            var v = f(i);
	            if (v > max) {
	                max = v;
	                pos = i;
	            }
	        }
	        return pos;
	    }

	    /* -----[ Formula ]----- */

	    var Formula = Class.extend({
	        init: function Formula(refs, handler, printer, sheet, row, col, arrayFormulaRange){
	            this.refs = refs;
	            this.handler = handler;
	            this.print = printer;
	            this.absrefs = null;
	            this.sheet = sheet;
	            this.row = row;
	            this.col = col;
	            this.onReady = [];
	            this.pending = false;
	            this.arrayFormulaRange = arrayFormulaRange;
	        },
	        setArrayFormulaRange: function(ref) {
	            this.arrayFormulaRange = ref.clone().setSheet(this.sheet);
	        },
	        clone: function(sheet, row, col, forceRefs) {
	            var lcsheet = sheet.toLowerCase();
	            var refs = this.refs;
	            var range = this.arrayFormulaRange;
	            if (forceRefs || lcsheet != this.sheet.toLowerCase()) {
	                refs = refs.map(function(ref){
	                    if (!ref.hasSheet() && (!ref.sheet || ref.sheet.toLowerCase() != lcsheet)) {
	                        ref = ref.clone().setSheet(sheet);
	                    }
	                    return ref;
	                });
	                if (range) {
	                    range = range.clone().setSheet(sheet);
	                }
	            }
	            return new Formula(refs, this.handler, this.print, sheet, row, col, range);
	        },
	        deepClone: function() {
	            var refs = this.refs.map(function(ref){ return ref.clone(); });
	            return new Formula(refs, this.handler, this.print, this.sheet, this.row, this.col, this.arrayFormulaRange);
	        },
	        resolve: function(val) {
	            this.pending = false;
	            this.onReady.forEach(function(callback){
	                callback(val);
	            });
	        },
	        exec: function(ss, callback, parentContext) {
	            if ("value" in this) {
	                if (callback) {
	                    callback(this.value);
	                }
	            } else {
	                if (callback) {
	                    this.onReady.push(callback);
	                }

	                var ctx = new Context(this.resolve, this, ss, parentContext);
	                var level = 0;
	                // if the call chain leads back to this same formula, we have a circular dependency.
	                while (parentContext) {
	                    if (parentContext.formula === this) {
	                        this.pending = false;
	                        ctx.resolve(new CalcError("CIRCULAR"));
	                        return;
	                    }
	                    parentContext = parentContext.parent;
	                    ++level;
	                }

	                // pending is still useful for ASYNC formulas
	                if (this.pending) {
	                    return;
	                }
	                this.pending = true;

	                var next = function() {
	                    // compute and cache the absolute references
	                    if (!this.absrefs) {
	                        this.absrefs = this.refs.map(function(ref){
	                            return ref.absolute(this.row, this.col);
	                        }, this);
	                    }

	                    // finally invoke the handler given to us by the compiler in calc.js
	                    this.handler.call(ctx);
	                }.bind(this);

	                if (level < 20) {
	                    next();
	                } else {
	                    setTimeout(next, 0);
	                }
	            }
	        },
	        reset: function() {
	            this.onReady = [];
	            this.pending = false;
	            delete this.value;
	        },
	        renameSheet: function(oldSheetName, newSheetName) {
	            oldSheetName = oldSheetName.toLowerCase();
	            this.absrefs = null;
	            if (this.sheet.toLowerCase() == oldSheetName) {
	                this.sheet = newSheetName;
	            }
	            this.refs.forEach(function(ref){
	                ref.renameSheet(oldSheetName, newSheetName);
	            });
	        },
	        adjust: function(affectedSheet, operation, start, delta) {
	            affectedSheet = affectedSheet.toLowerCase();
	            var formulaRow = this.row;
	            var formulaCol = this.col;
	            var formulaSheet = this.sheet.toLowerCase();
	            var formulaMoves = false;
	            if (formulaSheet == affectedSheet) {
	                // move formula if it's after the change point
	                if (operation == "row" && formulaRow >= start) {
	                    this.row += delta;
	                    formulaMoves = true;
	                }
	                if (operation == "col" && formulaCol >= start) {
	                    this.col += delta;
	                    formulaMoves = true;
	                }
	            }
	            var newFormulaRow = this.row;
	            var newFormulaCol = this.col;
	            this.absrefs = null;
	            var prevRefs = this.refs;
	            var modified = formulaMoves;
	            this.refs = prevRefs.map(function(ref){
	                var newRef = adjust(ref);
	                if (!modified && !sameRef(newRef, ref)) {
	                    modified = true;
	                }
	                return newRef;
	            });

	            var prevRange = this.arrayFormulaRange;
	            if (prevRange) {
	                this.arrayFormulaRange = adjust(prevRange);
	                if (!modified && !sameRef(prevRange, this.arrayFormulaRange)) {
	                    modified = true;
	                }
	            }

	            if (modified) {
	                // return a clone of the original formula.  needed to undo operations like
	                // deleteRow, which can transform a reference into NULL.
	                return new Formula(prevRefs, this.handler, this.print, this.sheet, formulaRow, formulaCol, prevRange);
	            }

	            function adjust(ref){
	                if (ref === NULL) {
	                    return ref;
	                }
	                if (ref.sheet.toLowerCase() != affectedSheet) {
	                    if (formulaMoves) {
	                        // a reference to another sheet should still point to the same location
	                        // after adjustment; thus if row/col was removed before formula, relative
	                        // references must be adjusted by delta.
	                        if (operation == "row" && formulaRow >= start) {
	                            ref = ref.relative(delta, 0);
	                        }
	                        if (operation == "col" && formulaCol >= start) {
	                            ref = ref.relative(0, delta);
	                        }
	                    }
	                    return ref;
	                }
	                return ref.adjust(
	                    formulaRow, formulaCol,
	                    newFormulaRow, newFormulaCol,
	                    operation == "row",
	                    start, delta
	                );
	            }
	        },
	        toString: function() {
	            return this.print(this.row, this.col);
	        }
	    });

	    function sameRef(r1, r2) {
	        // note: r1.eq(r2) will not do, because it returns true for A1 and A1:A1 (CellRef
	        // vs. RangeRef).  To properly undo we need to assert that the references are exactly the
	        // same (including type).
	        if (r1.constructor !== r2.constructor) {
	            return false;
	        }
	        if (r1 instanceof CellRef) {
	            return r1.sheet == r2.sheet
	                && r1.row == r2.row
	                && r1.col == r2.col
	                && r1.rel == r2.rel;
	        }
	        if (r1 instanceof RangeRef) {
	            return sameRef(r1.topLeft     , r2.topLeft)
	                && sameRef(r1.bottomRight , r2.bottomRight)
	                && r1.endSheet == r2.endSheet;
	        }
	        if (r1 instanceof UnionRef) {
	            var i = r1.refs.length;
	            if (i != r2.refs.length) {
	                return false;
	            }
	            while (--i >= 0) {
	                if (!sameRef(r1.refs[i], r2.refs[i])) {
	                    return false;
	                }
	            }
	        }
	        return true;
	    }

	    // spreadsheet functions --------
	    var FUNCS = Object.create(null);

	    FUNCS["if"] = function(callback, args) {
	        var self = this;
	        var co = args[0], th = args[1], el = args[2];
	        // XXX: I don't like this resolveCells here.  We should try to declare IF with
	        // defineFunction.
	        this.resolveCells([ co ], function(){
	            var comatrix = self.asMatrix(co);
	            if (comatrix) {
	                // XXX: calling both branches in this case, since we'll typically need values from
	                // both.  We could optimize and call them only when first needed, but oh well.
	                th(function(th){
	                    el(function(el){
	                        var thmatrix = self.asMatrix(th);
	                        var elmatrix = self.asMatrix(el);
	                        callback(comatrix.map(function(val, row, col){
	                            if (val instanceof CalcError) {
	                                return val;
	                            } else if (self.bool(val)) {
	                                return thmatrix ? thmatrix.get(row, col) : th;
	                            } else {
	                                return elmatrix ? elmatrix.get(row, col) : el;
	                            }
	                        }));
	                    });
	                });
	            } else {
	                co = this.force(co);
	                if (co instanceof CalcError) {
	                    callback(co);
	                } else if (self.bool(co)) {
	                    th(callback);
	                } else {
	                    el(callback);
	                }
	            }
	        });
	    };

	    FUNCS["φ"] = function(callback) {
	        callback((1+Math.sqrt(5))/2);
	    };

	    // Lasciate ogni speranza, voi ch'entrate.
	    //
	    // XXX: document this function.
	    function compileArgumentChecks(functionName, args) {
	        var arrayArgs = "function arrayArgs(args) { var xargs = [], width = 0, height = 0, arrays = [], i = 0; ";
	        var resolve = "function resolve(args, callback) { var toResolve = [], i = 0; ";
	        var name, forced, main = "'use strict'; function check(args) { var stack = [], tmp, xargs = [], i = 0, m, err = 'VALUE'; ", haveForced = false;
	        var canBeArrayArg = false, hasArrayArgs = false;
	        main += args.map(comp).join("");
	        main += "if (i < args.length) return new CalcError('N/A'); ";
	        main += "return xargs; } ";
	        arrayArgs += "return { args: xargs, width: width, height: height, arrays: arrays }; } ";

	        var f;
	        if (haveForced) {
	            resolve += "this.resolveCells(toResolve, callback); } ";
	            f = new Function("CalcError", "round", main + resolve + arrayArgs + " return { resolve: resolve, check: check, arrayArgs: arrayArgs };");
	        } else {
	            f = new Function("CalcError", "round", main + " return { check: check };");
	        }
	        f = f(CalcError, limitPrecision);
	        if (!hasArrayArgs) {
	            delete f.arrayArgs;
	        }
	        return f;

	        function comp(x) {
	            name = x[0];
	            var code = "{ ";
	            if (Array.isArray(name)) {
	                arrayArgs += "while (i < args.length) { ";
	                resolve += "while (i < args.length) { ";
	                code += "xargs.push(tmp = []); stack.push(xargs); xargs = tmp; ";
	                code += "while (i < args.length) { ";
	                code += x.map(comp).join("");
	                code += "} ";
	                code += "xargs = stack.pop(); ";
	                resolve += "} ";
	                arrayArgs += "} ";
	            } else if (name == "+") {
	                arrayArgs += "while (i < args.length) { ";
	                resolve += "while (i < args.length) { ";
	                code += "if (i >= args.length) return new CalcError('N/A'); ";
	                code += "xargs.push(tmp = []); stack.push(xargs); xargs = tmp; ";
	                code += "do { ";
	                code += x.slice(1).map(comp).join("");
	                code += "} while (i < args.length); ";
	                code += "xargs = stack.pop(); ";
	                resolve += "} ";
	                arrayArgs += "} ";
	            } else if (name == "?") {
	                // standalone assertion without a new argument
	                code += "if (!(" + cond(x[1]) + ")) return new CalcError(err); ";
	            } else {
	                var type = x[1];
	                if (Array.isArray(type) && /^#?collect/.test(type[0])) {
	                    var wantNulls = /!$/.test(type[0]);
	                    var n = type[2];
	                    force();
	                    code += "try {"
	                        + "var $" + name + " = this.cellValues(args.slice(i";
	                    if (n) {
	                        code += ", i + " + n;
	                    }
	                    code += ")" + (wantNulls ? ",true" : "") + ").reduce(function(ret, $"+name+"){ ";
	                    if (type[0].charAt(0) != "#") {
	                        code += "if ($"+name+" instanceof CalcError) throw $"+name+"; ";
	                    }
	                    code += "if (" + cond(type[1]) + ") ret.push($"+name+"); ";
	                    code += "return ret; ";
	                    code += "}.bind(this), []); ";
	                    if (n) {
	                        code += "i += " + n + "; ";
	                    } else {
	                        code += "i = args.length; ";
	                    }
	                    code += "xargs.push($"+name+")"
	                        + "} catch(ex) { if (ex instanceof CalcError) return ex; throw ex; } ";
	                    resolve += "toResolve.push(args.slice(i)); ";
	                } else if (type == "rest") {
	                    code += "xargs.push(args.slice(i)); i = args.length; ";
	                } else {
	                    if ((canBeArrayArg = /^\*/.test(name))) {
	                        hasArrayArgs = true;
	                        name = name.substr(1);
	                    }
	                    code += "var $" + name + " = args[i++]; ";
	                    var allowError = false;
	                    if (/!$/.test(type)) {
	                        type = type.substr(0, type.length - 1);
	                        allowError = true;
	                    } else {
	                        code += "if ($"+name+" instanceof CalcError) return $"+name+"; ";
	                    }
	                    code += typeCheck(type, allowError) + "xargs.push($"+name+"); ";
	                }
	            }
	            code += "} ";
	            return code;
	        }

	        function force() {
	            if (forced) {
	                return "$"+name+"";
	            }
	            haveForced = true;
	            forced = true;
	            resolve += "toResolve.push(args[i++]); ";
	            return "($"+name+" = this.force($"+name+"))";
	        }

	        function forceNum(round) {
	            return "("
	                +     (round
	                       ? ("(typeof " + force() + " == 'number' ? ($"+name+" = round($"+name+"), true) : false) || ")
	                       : ("(typeof " + force() + " == 'number') || "))
	                +     "(typeof $"+name+" == 'boolean' ? ($"+name+" = +$" + name + ", true) : false) || "
	                +     "(typeof $"+name+" == 'string' && !/^(?:=|true|false)/i.test($"+name+") ? ("
	                +       "tmp = kendo.spreadsheet.calc.parse(0, 0, 0, $"+name+"), "
	                +       "/^date|number|percent$/.test(tmp.type) ? ($"+name+" = +tmp.value, true) : false"
	                +     ") : false)"
	                +  ")";
	        }

	        function typeCheck(type, allowError) {
	            forced = false;
	            var ret = "if (!(" + cond(type) + ")) { ";
	            if (forced && !allowError) {
	                ret += " if ($" + name + " instanceof CalcError) return $" + name + "; ";
	            }
	            ret += "return new CalcError(err); } ";
	            if (!forced) {
	                resolve += "i++; ";
	            }
	            if (canBeArrayArg) {
	                arrayArgs += "var $" + name + " = this._arrayArg(args[i]); "
	                    + "if ($" + name + ") { "
	                    + "xargs.push($" + name + "); "
	                    + "width = Math.max(width, $" + name + ".width); "
	                    + "height = Math.max(height, $" + name + ".height); "
	                    + "arrays.push(true) } else { "
	                    + "xargs.push(args[i]); "
	                    + "arrays.push(false); } i++; ";
	            } else {
	                arrayArgs += "xargs.push(args[i++]); arrays.push(false); ";
	            }
	            return ret;
	        }

	        function cond(type) {
	            if (Array.isArray(type)) {
	                if (type[0] == "or") {
	                    return "(" + type.slice(1).map(cond).join(") || (") + ")";
	                }
	                if (type[0] == "and") {
	                    return "(" + type.slice(1).map(cond).join(") && (") + ")";
	                }
	                if (type[0] == "values") {
	                    return "(" + type.slice(1).map(function(val){
	                        return force() + " === " + val;
	                    }).join(") || (") + ")";
	                }
	                if (type[0] == "null") {
	                    return "(" + cond("null") + " ? (($"+name+" = " + type[1] + "), true) : false)";
	                }
	                if (type[0] == "between" || type[0] == "[between]") {
	                    return "(" + force() + " >= " + type[1] + " && " + "$"+name+" <= " + type[2] + " ? true : ((err = 'NUM'), false))";
	                }
	                if (type[0] == "(between)") {
	                    return "(" + force() + " > " + type[1] + " && " + "$"+name+" < " + type[2] + " ? true : ((err = 'NUM'), false))";
	                }
	                if (type[0] == "(between]") {
	                    return "(" + force() + " > " + type[1] + " && " + "$"+name+" <= " + type[2] + " ? true : ((err = 'NUM'), false))";
	                }
	                if (type[0] == "[between)") {
	                    return "(" + force() + " >= " + type[1] + " && " + "$"+name+" < " + type[2] + " ? true : ((err = 'NUM'), false))";
	                }
	                if (type[0] == "assert") {
	                    var err = type[2] || "N/A";
	                    return "((" + type[1] + ") ? true : (err = " + JSON.stringify(err) + ", false))";
	                }
	                if (type[0] == "not") {
	                    return "!(" + cond(type[1]) + ")";
	                }
	                throw new Error("Unknown array type condition: " + type[0]);
	            }
	            if (type == "number" || type == "datetime") {
	                return forceNum(true);
	            }
	            if (type == "number!") {
	                return "(typeof " + force() + " == 'number' ? ($"+name+" = round($"+name+"), true) : false)";
	            }
	            if (type == "integer" || type == "date") {
	                return "(" + forceNum() + " && (($"+name+" |= 0), true))";
	            }
	            if (type == "divisor") {
	                return "(" + forceNum(true) + " && ($"+name+" == 0 ? ((err = 'DIV/0'), false) : true))";
	            }
	            if (type == "number+") {
	                return "(" + forceNum(true) + " && ($"+name+" >= 0 ? true : ((err = 'NUM'), false)))";
	            }
	            if (type == "integer+") {
	                return "(" + forceNum() + " && (($"+name+" |= 0) >= 0 ? true : ((err = 'NUM'), false)))";
	            }
	            if (type == "number++") {
	                return "(" + forceNum(true) + " && ($"+name+" > 0 ? true : ((err = 'NUM'), false)))";
	            }
	            if (type == "integer++") {
	                return "(" + forceNum() + " && (($"+name+" |= 0) > 0 ? true : ((err = 'NUM'), false)))";
	            }
	            if (type == "string") {
	                return "((typeof " + force() + " == 'string' || typeof $"+name+" == 'boolean' || typeof $"+name+" == 'number') ? ($"+name+" += '', true) : ($"+name+" === undefined ? (($"+name+" = ''), true) : false))";
	            }
	            if (type == "boolean") {
	                return "(typeof " + force() + " == 'boolean')";
	            }
	            if (type == "logical") {
	                return "(typeof " + force() + " == 'boolean' || (typeof $"+name+" == 'number' ? ($"+name+" = !!$"+name+", true) : false))";
	            }
	            if (type == "matrix") {
	                force();
	                return "((m = this.asMatrix($"+name+")) ? ($"+name+" = m) : false)";
	            }
	            if (type == "#matrix") {
	                return "((m = this.asMatrix($"+name+")) ? ($"+name+" = m) : false)";
	            }
	            if (type == "ref") {
	                return "($"+name+" instanceof kendo.spreadsheet.Ref)";
	            }
	            if (type == "area") {
	                return "($"+name+" instanceof kendo.spreadsheet.CellRef || $"+name+" instanceof kendo.spreadsheet.RangeRef)";
	            }
	            if (type == "cell") {
	                return "($"+name+" instanceof kendo.spreadsheet.CellRef)";
	            }
	            if (type == "null") {
	                return "(" + force() + " == null)";
	            }
	            if (type == "anyvalue") {
	                return "(" + force() + " != null && i <= args.length)";
	            }
	            if (type == "forced") {
	                return "(" + force() + ", i <= args.length)";
	            }
	            if (type == "anything") {
	                return "(i <= args.length)";
	            }
	            if (type == "blank") {
	                return "(" + force() + " == null || $"+name+" === '')";
	            }
	            throw new Error("Can't check for type: " + type);
	        }
	    }

	    function limitPrecision(num) {
	        return num === parseInt(num, 10) ? num : +num.toPrecision(14);
	    }

	    function maybeRoundFloatErrors(num) {
	        if (typeof num == "number") {
	            return limitPrecision(num);
	        } else {
	            return num;
	        }
	    }

	    function withErrorHandling(obj, f, args) {
	        if (args instanceof CalcError) {
	            return args;
	        }
	        try {
	            return f.apply(obj, args);
	        } catch(ex) {
	            if (ex instanceof CalcError) {
	                return ex;
	            } else {
	                throw ex;
	            }
	        }
	    }

	    function makeSyncFunction(handler, resolve, check, arrayArgs) {
	        return function(callback, args) {
	            function doit() {
	                if (arrayArgs) {
	                    var x = arrayArgs.call(this, args);
	                    args = x.args;
	                    if (x.width > 0 && x.height > 0) {
	                        var result = new Matrix(this);
	                        for (var row = 0; row < x.height; ++row) {
	                            for (var col = 0; col < x.width; ++col) {
	                                var xargs = [];
	                                for (var i = 0; i < args.length; ++i) {
	                                    if (x.arrays[i]) {
	                                        xargs[i] = args[i].getNA(row, col);
	                                    } else {
	                                        xargs[i] = args[i];
	                                    }
	                                }
	                                xargs = check.call(this, xargs);
	                                result.set(row, col, withErrorHandling(this, handler, xargs));
	                            }
	                        }
	                        return callback(result);
	                    }
	                }
	                var xargs = check.call(this, args);
	                callback(withErrorHandling(this, handler, xargs));
	            }
	            if (resolve) {
	                resolve.call(this, args, doit);
	            } else {
	                doit.call(this);
	            }
	        };
	    }

	    function makeAsyncFunction(handler, resolve, check, arrayArgs) {
	        return function(callback, args) {
	            function doit() {
	                if (arrayArgs) {
	                    var x = arrayArgs.call(this, args);
	                    args = x.args;
	                    if (x.width > 0 && x.height > 0) {
	                        var result = new Matrix(this);
	                        var count = x.width * x.height;
	                        var makeCallback = function(row, col) {
	                            return function(value) {
	                                result.set(row, col, value);
	                                --count;
	                                if (count === 0) {
	                                    return callback(result);
	                                }
	                            };
	                        };
	                        for (var row = 0; row < x.height && count > 0; ++row) {
	                            for (var col = 0; col < x.width && count > 0; ++col) {
	                                var xargs = [];
	                                for (var i = 0; i < args.length; ++i) {
	                                    if (x.arrays[i]) {
	                                        xargs[i] = args[i].getNA(row, col);
	                                    } else {
	                                        xargs[i] = args[i];
	                                    }
	                                }
	                                xargs = check.call(this, xargs);
	                                if (xargs instanceof CalcError) {
	                                    result.set(row, col, xargs);
	                                    --count;
	                                    if (count === 0) {
	                                        return callback(result);
	                                    }
	                                } else {
	                                    xargs.unshift(makeCallback(row, col));
	                                    handler.apply(this, xargs);
	                                }
	                            }
	                        }
	                        return;
	                    }
	                }
	                var x = check.call(this, args);
	                if (x instanceof CalcError) {
	                    callback(x);
	                } else {
	                    x.unshift(callback);
	                    handler.apply(this, x);
	                }
	            }
	            if (resolve) {
	                resolve.call(this, args, doit);
	            } else {
	                doit.call(this);
	            }
	        };
	    }

	    function defineFunction(name, func) {
	        name = name.toLowerCase();
	        FUNCS[name] = func;
	        return {
	            args: function(args, log) {
	                var code = compileArgumentChecks(name, args);
	                // XXX: DEBUG
	                if (log) {
	                    if (code.arrayArgs) {console.log(code.arrayArgs.toString());}
	                    if (code.resolve) {console.log(code.resolve.toString());}
	                    if (code.check) {console.log(code.check.toString());}
	                }
	                var f = FUNCS[name] = makeSyncFunction(func, code.resolve, code.check, code.arrayArgs);
	                f.kendoSpreadsheetArgs = args;
	                return this;
	            },
	            argsAsync: function(args, log) {
	                var code = compileArgumentChecks(name, args);
	                // XXX: DEBUG
	                if (log) {
	                    if (code.arrayArgs) {console.log(code.arrayArgs.toString());}
	                    if (code.resolve) {console.log(code.resolve.toString());}
	                    if (code.check) {console.log(code.check.toString());}
	                }
	                var f = FUNCS[name] = makeAsyncFunction(func, code.resolve, code.check, code.arrayArgs);
	                f.kendoSpreadsheetArgs = args;
	                return this;
	            }
	        };
	    }

	    /* -----[ date calculations ]----- */

	    // Julian days algorithms from http://www.hermetic.ch/cal_stud/jdn.htm#comp

	    function dateToJulianDays(y, m, d) {
	        m++;
	        return ((1461 * (y + 4800 + ((m - 14) / 12 | 0))) / 4 | 0) +
	            ((367 * (m - 2 - 12 * ((m - 14) / 12 | 0))) / 12 | 0) -
	            ((3 * (((y + 4900 + ((m - 14) / 12 | 0)) / 100 | 0))) / 4 | 0) +
	            d - 32075;
	    }

	    function julianDaysToDate(jd) {
	        var l, n, j, i, m, d, y;
	        l = jd + 68569;
	        n = (4 * l) / 146097 | 0;
	        l = l - ((146097 * n + 3) / 4 | 0);
	        i = (4000 * (l + 1) / 1461001) | 0;
	        l = l - ((1461 * i) / 4 | 0) + 31;
	        j = (80 * l) / 2447 | 0;
	        d = l - ((2447 * j) / 80 | 0);
	        l = j / 11 | 0;
	        m = j + 2 - (12 * l);
	        y = 100 * (n - 49) + i + l;
	        m--;
	        return {
	            year  : y,
	            month : m,
	            date  : d,
	            day   : (jd + 1) % 7,
	            ord   : ORDINAL_ADD_DAYS[isLeapYear(y)][m] + d
	        };
	    }

	    // This uses the Google Spreadsheet approach: treat 1899-12-31 as day 1, allowing to avoid
	    // implementing the "Leap Year Bug" yet still be Excel compatible for dates starting 1900-03-01.
	    var BASE_DATE = dateToJulianDays(1900, 0, -1);

	    var DAYS_IN_MONTH = [ 31, 28, 31,
	                          30, 31, 30,
	                          31, 31, 30,
	                          31, 30, 31 ];

	    var ORDINAL_ADD_DAYS = [
	        [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], // non-leap year
	        [ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 ]  // leap year
	    ];

	    function isLeapYear(yr) {
	        if (yr % 4) {
	            return 0;
	        }
	        if (yr % 100) {
	            return 1;
	        }
	        if (yr % 400) {
	            return 0;
	        }
	        return 1;
	    }

	    function daysInYear(yr) {
	        return isLeapYear(yr) ? 366 : 365;
	    }

	    function daysInMonth(yr, mo) {
	        return (isLeapYear(yr) && mo == 1) ? 29 : DAYS_IN_MONTH[mo];
	    }

	    function validDate(yr, mo, da) {
	        return mo >= 1 && mo <= 12 && da >= 1 && da <= daysInMonth(yr, mo - 1);
	    }

	    function unpackDate(serial) {
	        return julianDaysToDate((serial | 0) + BASE_DATE);
	    }

	    function packDate(year, month, date) {
	        return dateToJulianDays(year, month, date) - BASE_DATE;
	    }

	    var MS_IN_MIN = 60 * 1000;
	    var MS_IN_HOUR = 60 * MS_IN_MIN;
	    var MS_IN_DAY = 24 * MS_IN_HOUR;

	    function unpackTime(serial) {
	        var frac = serial - (serial|0);
	        if (frac < 0) {
	            frac++;
	        }
	        var ms = Math.round(MS_IN_DAY * frac);
	        var hours = Math.floor(ms / MS_IN_HOUR);
	        ms -= hours * MS_IN_HOUR;
	        var minutes = Math.floor(ms / MS_IN_MIN);
	        ms -= minutes * MS_IN_MIN;
	        var seconds = Math.floor(ms / 1000);
	        ms -= seconds * 1000;
	        return {
	            hours: hours,
	            minutes: minutes,
	            seconds: seconds,
	            milliseconds: ms
	        };
	    }

	    function serialToDate(serial) {
	        var d = unpackDate(serial), t = unpackTime(serial);
	        return new Date(d.year, d.month, d.date,
	                        t.hours, t.minutes, t.seconds, t.milliseconds);
	    }

	    function packTime(hh, mm, ss, ms) {
	        return (hh+(mm+(ss+ms/1000)/60)/60)/24;
	    }

	    function dateToSerial(date) {
	        var time = packTime(date.getHours(),
	                            date.getMinutes(),
	                            date.getSeconds(),
	                            date.getMilliseconds());
	        date = packDate(date.getFullYear(),
	                        date.getMonth(),
	                        date.getDate());
	        if (date < 0) {
	            return date - 1 + time;
	        } else {
	            return date + time;
	        }
	    }

	    function parseDate(str, format) {
	        if (format) {
	            format = kendo.spreadsheet.formatting.makeDateFormat(format);
	        }
	        return kendo.parseExactDate(str, format)
	            || kendo.parseExactDate(str)
	            || kendo.parseExactDate(str, [
	                "MMMM dd yyyy",
	                "MMMM dd yy",
	                "MMM dd yyyy",
	                "MMM dd yy",
	                "dd MMMM yyyy",
	                "dd MMMM yy",
	                "dd MMM yyyy",
	                "dd MMM yy",
	                "MMMM dd, yyyy",
	                "MMMM dd, yy",
	                "MMM dd, yyyy",
	                "MMM dd, yy",
	                "MMMM dd",
	                "MMM dd",
	                "MMMM yyyy",
	                "MMM yyyy",
	                "dd MMMM",
	                "dd MMM"
	            ]);
	    }

	    /* -----[ exports ]----- */

	    exports.CalcError = CalcError;
	    exports.Formula = Formula;
	    exports.Matrix = Matrix;

	    exports.packDate = packDate;
	    exports.unpackDate = unpackDate;
	    exports.packTime = packTime;
	    exports.unpackTime = unpackTime;
	    exports.serialToDate = serialToDate;
	    exports.dateToSerial = dateToSerial;
	    exports.daysInMonth = daysInMonth;
	    exports.validDate = validDate;
	    exports.isLeapYear = isLeapYear;
	    exports.daysInYear = daysInYear;
	    exports.parseDate = parseDate;
	    exports.limitPrecision = limitPrecision;

	    spreadsheet.dateToNumber = dateToSerial;
	    spreadsheet.numberToDate = serialToDate;
	    spreadsheet.defineFunction = defineFunction;
	    spreadsheet.CalcError = CalcError;

	    exports.defineFunction = defineFunction;
	    exports.defineAlias = function(alias, name) {
	        var orig = FUNCS[name];
	        if (!orig) {
	            throw new Error("Function " + name + " is not yet defined");
	        }
	        if (!orig.kendoSpreadsheetAliases) {
	            orig.kendoSpreadsheetAliases = [ name ];
	        }
	        orig.kendoSpreadsheetAliases.push(alias);
	        FUNCS[alias] = orig;
	    };
	    exports.FUNCS = FUNCS;

	    /* -----[ Excel operators ]----- */

	    var NUMBER_OR_ZERO = [ "or", "number", [ "null", 0 ] ];

	    var ARGS_NUMERIC = [
	        [ "*a", NUMBER_OR_ZERO ],
	        [ "*b", NUMBER_OR_ZERO ]
	    ];

	    var ARGS_ANYVALUE = [
	        [ "*a", "forced" ],
	        [ "*b", "forced" ]
	    ];

	    defineFunction("binary+", function(a, b){
	        return a + b;
	    }).args(ARGS_NUMERIC);

	    defineFunction("binary-", function(a, b){
	        return a - b;
	    }).args(ARGS_NUMERIC);

	    defineFunction("binary*", function(a, b){
	        return a * b;
	    }).args(ARGS_NUMERIC);

	    defineFunction("binary/", function(a, b){
	        return a / b;
	    }).args([
	        [ "*a", NUMBER_OR_ZERO ],
	        [ "*b", "divisor" ]
	    ]);

	    defineFunction("binary^", function(a, b){
	        return Math.pow(a, b);
	    }).args(ARGS_NUMERIC);

	    defineFunction("binary&", function(a, b){
	        if (a == null) { a = ""; }
	        if (b == null) { b = ""; }
	        return "" + a + b;
	    }).args([
	        [ "*a", [ "or", "number", "string", "boolean", "null" ] ],
	        [ "*b", [ "or", "number", "string", "boolean", "null" ] ]
	    ]);

	    function equals(a, b){
	        a = typeof(a) === "string" ? a.toLowerCase() : a;
	        b = typeof(b) === "string" ? b.toLowerCase() : b;

	        // special cases
	        if (a === false && b == null) { return true; }
	        if (b === false && a == null) { return true; }
	        if (a === 0     && b == null) { return true; }
	        if (b === 0     && a == null) { return true; }
	        if (a === ""    && b == null) { return true; }
	        if (b === ""    && a == null) { return true; }

	        return a === b;
	    }

	    defineFunction("binary=", equals).args(ARGS_ANYVALUE);

	    defineFunction("binary<>", function(a, b){
	        return !equals(a, b);
	    }).args(ARGS_ANYVALUE);

	    defineFunction("binary<", binaryCompare(function(a, b){
	        return a < b;
	    })).args(ARGS_ANYVALUE);

	    defineFunction("binary<=", binaryCompare(function(a, b){
	        return a <= b;
	    })).args(ARGS_ANYVALUE);

	    defineFunction("binary>", binaryCompare(function(a, b){
	        return a > b;
	    })).args(ARGS_ANYVALUE);

	    defineFunction("binary>=", binaryCompare(function(a, b){
	        return a >= b;
	    })).args(ARGS_ANYVALUE);

	    defineFunction("unary+", function(a){
	        return a;
	    }).args([
	        [ "*a", NUMBER_OR_ZERO ]
	    ]);

	    defineFunction("unary-", function(a){
	        return -a;
	    }).args([
	        [ "*a", NUMBER_OR_ZERO ]
	    ]);

	    defineFunction("unary%", function(a){
	        return a / 100;
	    }).args([
	        [ "*a", NUMBER_OR_ZERO ]
	    ]);

	    // range operator
	    defineFunction("binary:", function(a, b){
	        return new RangeRef(a, b)
	            .setSheet(a.sheet || this.formula.sheet, a.hasSheet());
	    }).args([
	        [ "a", "cell" ],
	        [ "b", "cell" ]
	    ]);

	    // union operator
	    defineFunction("binary,", function(a, b){
	        return new UnionRef([ a, b ]);
	    }).args([
	        [ "a", "ref" ],
	        [ "b", "ref" ]
	    ]);

	    // intersection operator
	    defineFunction("binary ", function(a, b){
	        return a.intersect(b);
	    }).args([
	        [ "a", "ref" ],
	        [ "b", "ref" ]
	    ]);

	    /* -----[ conditionals ]----- */

	    defineFunction("not", function(a){
	        return !this.bool(a);
	    }).args([
	        [ "*a", [ "or", "anyvalue", [ "null", 0 ] ] ]
	    ]);

	    /* -----[ the IS* functions ]----- */

	    defineFunction("isblank", function(val){
	        if (val instanceof CellRef) {
	            val = this.getRefData(val);
	            return val == null;
	        }
	        return false;
	    }).args([
	        [ "*value", "anything!" ]
	    ]);

	    defineFunction("iserror", function(val){
	        return val instanceof CalcError;
	    }).args([
	        [ "*value", "forced!" ]
	    ]);

	    defineFunction("iserr", function(val){
	        return val instanceof CalcError && val.code != "N/A";
	    }).args([
	        [ "*value", "forced!" ]
	    ]);

	    defineFunction("isna", function(val){
	        return val instanceof CalcError && val.code == "N/A";
	    }).args([
	        [ "*value", "forced!" ]
	    ]);

	    defineFunction("islogical", function(val){
	        return typeof val == "boolean";
	    }).args([
	        [ "*value", "forced!" ]
	    ]);

	    defineFunction("isnontext", function(val){
	        return typeof val != "string";
	    }).args([
	        [ "*value", "forced!" ]
	    ]);

	    defineFunction("istext", function(val){
	        return typeof val == "string";
	    }).args([
	        [ "*value", "forced!" ]
	    ]);

	    defineFunction("isnumber", function(val){
	        return typeof val == "number";
	    }).args([
	        [ "*value", "forced!" ]
	    ]);

	    defineFunction("isref", function(val){
	        // apparently should return true only for cell and range
	        return val instanceof CellRef || val instanceof RangeRef;
	    }).args([
	        [ "*value", "anything!" ]
	    ]);

	    /* -----[ resolve NameRef-s ]----- */

	    FUNCS[",getname"] = function(callback, args) {
	        this.fetchName(args[0], callback);
	    };

	    /// utils

	    function binaryCompare(func) {
	        return function(left, right){
	            if (typeof left == "string" && typeof right != "string") {
	                right = right == null ? "" : right + "";
	            }
	            if (typeof left != "string" && typeof right == "string") {
	                left = left == null ? "" : left + "";
	            }
	            if (typeof left == "number" && right == null) {
	                right = 0;
	            }
	            if (typeof right == "number" && left == null) {
	                left = 0;
	            }
	            if (typeof left == "string" && typeof right == "string") {
	                // string comparison is case insensitive
	                left = left.toLowerCase();
	                right = right.toLowerCase();
	            }
	            if (typeof right == typeof left) {
	                return func(left, right);
	            } else {
	                return new CalcError("VALUE");
	            }
	        };
	    }

	}, __webpack_require__(3));


/***/ })

/******/ });