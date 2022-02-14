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

	__webpack_require__(1691);
	module.exports = __webpack_require__(1691);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1648:
/***/ (function(module, exports) {

	module.exports = require("./runtime");

/***/ }),

/***/ 1682:
/***/ (function(module, exports) {

	module.exports = require("../util/main");

/***/ }),

/***/ 1691:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// -*- fill-column: 100 -*-

	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1648), __webpack_require__(1682) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){
	    "use strict";

	    // WARNING: removing the following jshint declaration and turning
	    // == into === to make JSHint happy will break functionality.
	    /* jshint eqnull:true, newcap:false, laxbreak:true, validthis:true */
	    /* jshint latedef:false */

	    var util = kendo.util;
	    var spreadsheet = kendo.spreadsheet;
	    var calc = spreadsheet.calc;
	    var runtime = calc.runtime;
	    var defineFunction = runtime.defineFunction;
	    var defineAlias = runtime.defineAlias;
	    var CalcError = runtime.CalcError;
	    var RangeRef = spreadsheet.RangeRef;
	    var CellRef = spreadsheet.CellRef;
	    var UnionRef = spreadsheet.UnionRef;
	    var Matrix = runtime.Matrix;
	    var Ref = spreadsheet.Ref;
	    var NameRef = spreadsheet.NameRef;
	    var daysInMonth = runtime.daysInMonth;
	    var packDate = runtime.packDate;
	    var unpackDate = runtime.unpackDate;
	    var daysInYear = runtime.daysInYear;

	    /* -----[ Math functions ]----- */

	    [ "abs", "cos", "sin", "acos", "asin", "tan", "atan", "exp", "sqrt" ].forEach(function(name){
	        defineFunction(name, Math[name]).args([
	            [ "*n", "number" ]
	        ]);
	    });

	    defineFunction("ln", Math.log).args([
	        [ "*n", "number" ]
	    ]);

	    defineFunction("log", function(num, base){
	        return Math.log(num) / Math.log(base);
	    }).args([
	        [ "*num", "number++" ],
	        [ "*base", [ "or", "number++", [ "null", 10 ] ] ],
	        [ "?", [ "assert", "$base != 1", "DIV/0" ] ]
	    ]);

	    defineFunction("log10", function(num){
	        return Math.log(num) / Math.log(10);
	    }).args([
	        [ "*num", "number++" ]
	    ]);

	    defineFunction("pi", function(){
	        return Math.PI;
	    }).args([]);

	    defineFunction("sqrtpi", function(n){
	        return Math.sqrt(n * Math.PI);
	    }).args([
	        [ "*num", "number+" ]
	    ]);

	    defineFunction("degrees", function(rad){
	        return ((180 * rad) / Math.PI) % 360;
	    }).args([
	        [ "*radians", "number" ]
	    ]);

	    defineFunction("radians", function(deg){
	        return Math.PI * deg / 180;
	    }).args([
	        [ "*degrees", "number" ]
	    ]);

	    function _cosh(n){
	        return (Math.exp(n) + Math.exp(-n)) / 2;
	    }

	    defineFunction("cosh", _cosh).args([
	        [ "*num", "number" ]
	    ]);

	    defineFunction("acosh", function(n){
	        return Math.log(n + Math.sqrt(n - 1) * Math.sqrt(n + 1));
	    }).args([
	        [ "*num", "number" ],
	        [ "?", [ "assert", "$num >= 1" ] ]
	    ]);

	    function _sinh(n){
	        return (Math.exp(n) - Math.exp(-n)) / 2;
	    }

	    defineFunction("sinh", _sinh).args([
	        [ "*num", "number" ]
	    ]);

	    defineFunction("asinh", function(n){
	        return Math.log(n + Math.sqrt(n * n + 1));
	    }).args([
	        [ "*num", "number" ]
	    ]);

	    defineFunction("sec", function(n){
	        return 1 / Math.cos(n);
	    }).args([
	        [ "*num", "number" ]
	    ]);

	    defineFunction("sech", function(n){
	        return 1 / _cosh(n);
	    }).args([
	        [ "*num", "number" ]
	    ]);

	    defineFunction("csc", function(n){
	        return 1 / Math.sin(n);
	    }).args([
	        [ "*num", "number" ]
	    ]);

	    defineFunction("csch", function(n){
	        return 1 / _sinh(n);
	    }).args([
	        [ "*num", "number" ]
	    ]);

	    defineFunction("atan2", function(x, y){
	        return Math.atan(y / x);
	    }).args([
	        [ "*x", "divisor" ],
	        [ "*y", "number" ]
	    ]);

	    function _tanh(n) {
	        return _sinh(n) / _cosh(n);
	    }

	    defineFunction("tanh", _tanh).args([
	        [ "*num", "number" ]
	    ]);

	    defineFunction("atanh", function(n){
	        return Math.log(Math.sqrt(1 - n*n) / (1 - n));
	    }).args([
	        [ "*num", [ "and", "number", [ "(between)", -1, 1 ] ] ]
	    ]);

	    defineFunction("cot", function(n){
	        return 1 / Math.tan(n);
	    }).args([
	        [ "*num", "divisor" ]
	    ]);

	    defineFunction("coth", function(n){
	        return 1 / _tanh(n);
	    }).args([
	        [ "*num", "divisor" ]
	    ]);

	    defineFunction("acot", function(n){
	        return Math.PI / 2 - Math.atan(n);
	    }).args([
	        [ "*num", "number" ]
	    ]);

	    defineFunction("acoth", function(n){
	        return Math.log((n + 1) / (n - 1)) / 2;
	    }).args([
	        [ "*num", "number" ],
	        [ "?", [ "or",
	                 [ "assert", "$num < -1"],
	                 [ "assert", "$num > 1" ] ] ]
	    ]);

	    defineFunction("power", function(a, b){
	        return Math.pow(a, b);
	    }).args([
	        [ "*a", "number" ],
	        [ "*b", "number" ]
	    ]);

	    defineFunction("mod", function(a, b){
	        return a % b;
	    }).args([
	        [ "*a", "number" ],
	        [ "*b", "divisor" ]
	    ]);

	    defineFunction("quotient", function(a, b){
	        return Math.floor(a / b);
	    }).args([
	        [ "*a", "number" ],
	        [ "*b", "divisor" ]
	    ]);

	    defineFunction("ceiling", function(num, s){
	        return s ? s * Math.ceil(num / s) : 0;
	    }).args([
	        [ "*number", "number" ],
	        [ "*significance", "number" ],
	        [ "?", [ "assert", "$significance >= 0 || $number < 0" ] ]
	    ]);

	    defineFunction("ceiling.precise", function(num, s){
	        s = Math.abs(s);
	        return s ? s * Math.ceil(num / s) : 0;
	    }).args([
	        [ "*number", "number" ],
	        [ "*significance", [ "or", "number", [ "null", 1 ] ] ]
	    ]);

	    defineAlias("iso.ceiling", "ceiling.precise");

	    // XXX: how do we know if this function is correct?
	    //
	    // https://support.office.com/en-gb/article/CEILING-MATH-function-80f95d2f-b499-4eee-9f16-f795a8e306c8
	    //
	    // “There are many combinations of Significance and Mode values that affect rounding of negative
	    // numbers in different ways.” — right, thanks for the info. :-\
	    defineFunction("ceiling.math", function(num, s, mode){
	        if (!s || !num) {
	            return 0;
	        }
	        if (num < 0 && ((!mode && s < 0) || (mode && s > 0))) {
	            s = -s;
	        }
	        return s ? s * Math.ceil(num / s) : 0;
	    }).args([
	        [ "*number", "number" ],
	        [ "*significance", [ "or", "number", [ "null", "$number < 0 ? -1 : 1" ] ] ],
	        [ "*mode", [ "or", "logical", [ "null", 0 ] ] ]
	    ]);

	    defineFunction("floor", function(num, s){
	        return s ? s * Math.floor(num / s) : 0;
	    }).args([
	        [ "*number", "number" ],
	        [ "*significance", "number" ],
	        [ "?", [ "assert", "$significance >= 0 || $number < 0" ] ]
	    ]);

	    defineFunction("floor.precise", function(num, s){
	        s = Math.abs(s);
	        return s ? s * Math.floor(num / s) : 0;
	    }).args([
	        [ "*number", "number" ],
	        [ "*significance", [ "or", "number", [ "null", 1 ] ] ]
	    ]);

	    // XXX: check this
	    defineFunction("floor.math", function(num, s, mode){
	        if (!s || !num) {
	            return 0;
	        }
	        if (num < 0 && ((!mode && s < 0) || (mode && s > 0))) {
	            s = -s;
	        }
	        return s ? s * Math.floor(num / s) : 0;
	    }).args([
	        [ "*number", "number" ],
	        [ "*significance", [ "or", "number", [ "null", "$number < 0 ? -1 : 1" ] ] ],
	        [ "*mode", [ "or", "logical", [ "null", 0 ] ] ]
	    ]);

	    defineFunction("int", Math.floor).args([
	        [ "*number", "number" ]
	    ]);

	    defineFunction("mround", function(num, mult){
	        return mult ? mult * Math.round(num / mult) : 0;
	    }).args([
	        [ "*number", "number" ],
	        [ "*multiple", "number" ]
	    ]);

	    defineFunction("round", function(num, digits){
	        var sign = num < 0 ? -1 : 1;
	        if (sign < 0) { num = -num; }
	        digits = Math.pow(10, digits);
	        num *= digits;
	        num = Math.round(num);
	        return sign * num / digits;
	    }).args([
	        [ "*number", "number" ],
	        [ "*digits", "number" ]
	    ]);

	    defineFunction("roundup", function(num, digits){
	        digits = Math.pow(10, digits);
	        num *= digits;
	        num = num < 0 ? Math.floor(num) : Math.ceil(num);
	        return num / digits;
	    }).args([
	        [ "*number", "number" ],
	        [ "*digits", "number" ]
	    ]);

	    defineFunction("rounddown", function(num, digits){
	        digits = Math.pow(10, digits);
	        num *= digits;
	        num = num < 0 ? Math.ceil(num) : Math.floor(num);
	        return num / digits;
	    }).args([
	        [ "*number", "number" ],
	        [ "*digits", "number" ]
	    ]);

	    defineFunction("even", function(num){
	        var n = num < 0 ? Math.floor(num) : Math.ceil(num);
	        return n % 2 ? n + (n < 0 ? -1 : 1) : n;
	    }).args([
	        [ "*number", "number" ]
	    ]);

	    defineFunction("odd", function(num){
	        var n = num < 0 ? Math.floor(num) : Math.ceil(num);
	        return n % 2 ? n : n + (n < 0 ? -1 : 1);
	    }).args([
	        [ "*number", "number" ]
	    ]);

	    defineFunction("sign", function(num){
	        return num < 0 ? -1 : num > 0 ? 1 : 0;
	    }).args([
	        [ "*number", "number" ]
	    ]);

	    function _gcd(a, b) {
	        while (b) {
	            var r = a % b;
	            a = b;
	            b = r;
	        }
	        return a;
	    }

	    function _lcm(a, b) {
	        return Math.abs(a * b) / _gcd(a, b);
	    }

	    defineFunction("gcd", function(args){
	        var a = args[0];
	        for (var i = 1; i < args.length; ++i) {
	            a = _gcd(a, args[i]);
	        }
	        return a;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    defineFunction("lcm", function(args){
	        var a = args[0];
	        for (var i = 1; i < args.length; ++i) {
	            a = _lcm(a, args[i]);
	        }
	        return a;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    defineFunction("sum", function(numbers){
	        return numbers.reduce(function(sum, num){
	            return sum + num;
	        }, 0);
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    defineFunction("product", function(numbers){
	        return numbers.reduce(function(prod, num){
	            return prod * num;
	        }, 1);
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    defineFunction("sumproduct", function(first, rest) {
	        var sum = 0;
	        first.each(function(p, row, col){
	            if (typeof p == "number") {
	                for (var i = 0; i < rest.length; ++i) {
	                    var v = rest[i].get(row, col);
	                    if (typeof v != "number") {
	                        return;
	                    }
	                    p *= v;
	                }
	                sum += p;
	            }
	        });
	        return sum;
	    }).args([
	        [ "a1", "matrix" ],
	        [ "+",
	          [ "a2", [ "and", "matrix",
	                    [ "assert", "$a2.width == $a1.width" ],
	                    [ "assert", "$a2.height == $a1.height" ] ] ] ]
	    ]);

	    defineFunction("sumsq", function(numbers){
	        return numbers.reduce(function(sum, num){
	            return sum + num * num;
	        }, 0);
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    defineFunction("sumx2my2", function(a, b){
	        var sum = 0;
	        a.each(function(x, row, col){
	            var y = b.get(row, col);
	            if (typeof x == "number" && typeof y == "number") {
	                sum += x*x - y*y;
	            }
	        });
	        return sum;
	    }).args([
	        [ "a", "matrix" ],
	        [ "b", [ "and", "matrix",
	                 [ "assert", "$b.width == $a.width" ],
	                 [ "assert", "$b.height == $a.height" ] ] ]
	    ]);

	    defineFunction("sumx2py2", function(a, b){
	        var sum = 0;
	        a.each(function(x, row, col){
	            var y = b.get(row, col);
	            if (typeof x == "number" && typeof y == "number") {
	                sum += x*x + y*y;
	            }
	        });
	        return sum;
	    }).args([
	        [ "a", "matrix" ],
	        [ "b", [ "and", "matrix",
	                 [ "assert", "$b.width == $a.width" ],
	                 [ "assert", "$b.height == $a.height" ] ] ]
	    ]);

	    defineFunction("sumxmy2", function(a, b){
	        var sum = 0;
	        a.each(function(x, row, col){
	            var y = b.get(row, col);
	            if (typeof x == "number" && typeof y == "number") {
	                sum += (x - y) * (x - y);
	            }
	        });
	        return sum;
	    }).args([
	        [ "a", "matrix" ],
	        [ "b", [ "and", "matrix",
	                 [ "assert", "$b.width == $a.width" ],
	                 [ "assert", "$b.height == $a.height" ] ] ]
	    ]);

	    defineFunction("seriessum", function(x, n, m, a){
	        var sum = 0;
	        a.each(function(coef){
	            if (typeof coef != "number") {
	                throw new CalcError("VALUE");
	            }
	            sum += coef * Math.pow(x, n);
	            n += m;
	        });
	        return sum;
	    }).args([
	        [ "x", "number" ],
	        [ "y", "number" ],
	        [ "m", "number" ],
	        [ "a", "matrix" ]
	    ]);

	    defineFunction("min", function(numbers){
	        return numbers.length ? Math.min.apply(Math, numbers) : 0;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    defineFunction("max", function(numbers){
	        return numbers.length ? Math.max.apply(Math, numbers) : 0;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    defineFunction("counta", function(values){
	        return values.length;
	    }).args([
	        [ "values", [ "#collect", "anyvalue" ] ]
	    ]);

	    defineFunction("count", function(numbers){
	        return numbers.length;
	    }).args([
	        [ "numbers", [ "#collect", "number" ] ]
	    ]);

	    defineFunction("countunique", function(values){
	        var count = 0, seen = [];
	        values.forEach(function(val){
	            if (seen.indexOf(val) < 0) {
	                count++;
	                seen.push(val);
	            }
	        });
	        return count;
	    }).args([
	        [ "values", [ "#collect", "anyvalue" ] ]
	    ]);

	    defineFunction("countblank", function(a){
	        var count = 0;
	        function add(val) {
	            if (val == null || val === "") {
	                count++;
	            }
	        }
	        function loop(args){
	            for (var i = 0; i < args.length; ++i) {
	                var x = args[i];
	                if (x instanceof Matrix) {
	                    x.each(add, true);
	                } else {
	                    add(x);
	                }
	            }
	        }
	        loop(a);
	        return count;
	    }).args([
	        [ "+", [ "args", [ "or", "matrix", "anyvalue" ] ] ]
	    ]);

	    defineFunction("iseven", function(num){
	        return num % 2 === 0;
	    }).args([
	        [ "*number", "number" ]
	    ]);

	    defineFunction("isodd", function(num){
	        return num % 2 !== 0;
	    }).args([
	        [ "*number", "number" ]
	    ]);

	    defineFunction("n", function(val){
	        if (typeof val == "boolean") {
	            return val ? 1 : 0;
	        }
	        if (typeof val == "number") {
	            return val;
	        }
	        return 0;
	    }).args([
	        [ "*value", "anyvalue" ]
	    ]);

	    defineFunction("na", function(){
	        return new CalcError("N/A");
	    }).args([]);

	    /* -----[ the "*IFS" functions ]----- */

	    // helper function: take `args` like COUNTIFS (see Excel docs) and
	    // calls `f` for each cell matching all criteria.  `f` receives
	    // `chunks` (parsed args containing matrix and predicate) and
	    // row,col of matching cells.
	    function forIFS(args, f) {
	        var chunks = [], i = 0, matrix = args[0];
	        while (i < args.length) {
	            chunks.push({
	                matrix: args[i++],
	                pred: parseCriteria(args[i++])
	            });
	        }
	        ROW: for (var row = 0; row < matrix.height; ++row) {
	            COL: for (var col = 0; col < matrix.width; ++col) {
	                for (i = 0; i < chunks.length; ++i) {
	                    var val = chunks[i].matrix.get(row, col);
	                    if (!chunks[i].pred(val == null || val === "" ? 0 : val)) {
	                        continue COL;
	                    }
	                }
	                f(row, col);
	            }
	        }
	    }

	    var ARGS_COUNTIFS = [
	        [ "m1", "matrix" ],
	        [ "c1", "anyvalue" ],
	        [ [ "m2", "matrix" ],
	          [ "c2", "anyvalue" ] ]
	    ];

	    defineFunction("countifs", function(m1, c1, rest){
	        var count = 0;
	        rest.unshift(m1, c1);
	        forIFS(rest, function(){ count++; });
	        return count;
	    }).args(ARGS_COUNTIFS);

	    var ARGS_SUMIFS = [
	        [ "range", "matrix" ]
	    ].concat(ARGS_COUNTIFS);

	    defineFunction("sumifs", function(range, m1, c1, args){
	        // hack: insert a predicate that filters out non-numeric
	        // values; should also accept blank cells.  it's safe to
	        // modify args.
	        args.unshift(range, numericPredicate, m1, c1);
	        var sum = 0;
	        forIFS(args, function(row, col){
	            var val = range.get(row, col);
	            if (val) {
	                sum += val;
	            }
	        });
	        return sum;
	    }).args(ARGS_SUMIFS);

	    // similar to sumifs, but compute average of matching cells
	    defineFunction("averageifs", function(range, m1, c1, args){
	        args.unshift(range, numericPredicate, m1, c1);
	        var sum = 0, count = 0;
	        forIFS(args, function(row, col){
	            var val = range.get(row, col);
	            if (val == null || val === "") {
	                val = 0;
	            }
	            sum += val;
	            count++;
	        });
	        return count ? sum / count : new CalcError("DIV/0");
	    }).args(ARGS_SUMIFS);

	    defineFunction("countif", function(matrix, criteria){
	        criteria = parseCriteria(criteria);
	        var count = 0;
	        matrix.each(function(val){
	            if (criteria(val)) {
	                count++;
	            }
	        });
	        return count;
	    }).args([
	        [ "range", "matrix" ],
	        [ "*criteria", "anyvalue" ]
	    ]);

	    var ARGS_SUMIF = [
	        [ "range", "matrix" ],
	        [ "*criteria", "anyvalue" ],
	        [ "sumRange", [ "or", "area", "#matrix", [ "null", "$range" ] ] ]
	    ];

	    function fetchSumRange(continuation) {
	        return function(callback, range, criteria, sumRange) {
	            var self = this;
	            if (sumRange instanceof Ref) {
	                // make sure it covers the same area as `range`, as the “spec” mentions:
	                //
	                //     The sum_range argument does not have to be the same size and shape as the
	                //     range argument. The actual cells that are added are determined by using the
	                //     upper leftmost cell in the sum_range argument as the beginning cell, and then
	                //     including cells that correspond in size and shape to the range argument.
	                //
	                // It does make one wonder, since only the top-left cell in `sumRange` matters, why
	                // should it be a range at all?  Oh well, Excel.
	                var r = sumRange.clone().toRangeRef();
	                if (r.width() != range.width || r.height() != range.height) {
	                    if (!isFinite(r.topLeft.row)) {
	                        r.topLeft.row = 0;
	                    }
	                    if (!isFinite(r.topLeft.col)) {
	                        r.topLeft.col = 0;
	                    }
	                    r.bottomRight.row = r.topLeft.row + range.height - 1;
	                    r.bottomRight.col = r.topLeft.col + range.width - 1;
	                    return self.resolveCells([ r ], function(){
	                        callback(continuation(range, criteria, self.asMatrix(r)));
	                    });
	                }
	            }
	            callback(continuation(range, criteria, self.asMatrix(sumRange)));
	        };
	    }

	    defineFunction("sumif", fetchSumRange(function(range, criteria, sumRange){
	        var sum = 0;
	        criteria = parseCriteria(criteria);
	        range.each(function(val, row, col){
	            if (criteria(val)) {
	                var v = sumRange.get(row, col);
	                if (numericPredicate(v)) {
	                    sum += v || 0;
	                }
	            }
	        });
	        return sum;
	    })).argsAsync(ARGS_SUMIF);

	    defineFunction("averageif", fetchSumRange(function(range, criteria, sumRange){
	        var sum = 0, count = 0;
	        criteria = parseCriteria(criteria);
	        range.each(function(val, row, col){
	            if (criteria(val)) {
	                var v = sumRange.get(row, col);
	                if (numericPredicate(v)) {
	                    sum += v || 0;
	                    count++;
	                }
	            }
	        });
	        return count ? sum / count : new CalcError("DIV/0");
	    })).argsAsync(ARGS_SUMIF);

	    (function(def){
	        def("large", function(numbers, nth){
	            return numbers.sort(descending)[nth];
	        });
	        def("small", function(numbers, nth){
	            return numbers.sort(ascending)[nth];
	        });
	    })(function(name, handler){
	        defineFunction(name, function(matrix, nth){
	            var numbers = [];
	            var error = matrix.each(function(val){
	                if (val instanceof CalcError) {
	                    return val;
	                }
	                if (typeof val == "number") {
	                    numbers.push(val);
	                }
	            });
	            if (error) {
	                return error;
	            }
	            if (nth > numbers.length) {
	                return new CalcError("NUM");
	            }
	            return handler(numbers, nth - 1);
	        }).args([
	            [ "array", "matrix" ],
	            [ "*nth", "number++" ]
	        ]);
	    });

	    function _avg(numbers) {
	        return numbers.reduce(function(sum, num){
	            return sum + num;
	        }, 0) / numbers.length;
	    }

	    function _var_sp(numbers, divisor, avg) {
	        if (avg == null) {
	            avg = _avg(numbers);
	        }
	        return numbers.reduce(function(sum, num){
	            return sum + Math.pow(num - avg, 2);
	        }, 0) / divisor;
	    }

	    function _stdev_sp(numbers, divisor) {
	        return Math.sqrt(_var_sp(numbers, divisor));
	    }

	    // https://support.office.com/en-sg/article/STDEV-S-function-7d69cf97-0c1f-4acf-be27-f3e83904cc23
	    defineFunction("stdev.s", function(numbers){
	        return _stdev_sp(numbers, numbers.length - 1);
	    }).args([
	        [ "numbers", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$numbers.length >= 2", "NUM" ] ]
	    ]);

	    // https://support.office.com/en-sg/article/STDEV-P-function-6e917c05-31a0-496f-ade7-4f4e7462f285
	    defineFunction("stdev.p", function(numbers){
	        return _stdev_sp(numbers, numbers.length);
	    }).args([
	        [ "numbers", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$numbers.length >= 2", "NUM" ] ]
	    ]);

	    defineFunction("var.s", function(numbers){
	        return _var_sp(numbers, numbers.length - 1);
	    }).args([
	        [ "numbers", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$numbers.length >= 2", "NUM" ] ]
	    ]);

	    defineFunction("var.p", function(numbers){
	        return _var_sp(numbers, numbers.length);
	    }).args([
	        [ "numbers", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$numbers.length >= 2", "NUM" ] ]
	    ]);

	    defineFunction("median", function(numbers){
	        var n = numbers.length;
	        numbers.sort(ascending);
	        if (n % 2) {
	            // when length is odd, the median is the number in the middle
	            return numbers[n >> 1];
	        }
	        // that's the average of the two middle numbers, written in in a fancy way
	        return (numbers[n >>= 1] + numbers[n - 1]) / 2;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$numbers.length > 0", "N/A" ] ]
	    ]);

	    defineFunction("mode.sngl", function(numbers){
	        numbers.sort(ascending);
	        var prev = null, count = 0, max = 1, mode = null;
	        for (var i = 0; i < numbers.length; ++i) {
	            var n = numbers[i];
	            if (n != prev) {
	                count = 1;
	                prev = n;
	            } else {
	                count++;
	            }
	            if (count > max) {
	                max = count;
	                mode = n;
	            }
	        }
	        return mode == null ? new CalcError("N/A") : mode;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    defineFunction("mode.mult", function(numbers){
	        var seen = Object.create(null), max = 2, res = [];
	        numbers.forEach(function(num){
	            var s = seen[num] || 0;
	            seen[num] = ++s;
	            if (s == max) {
	                res.push(num);
	            } else if (s > max) {
	                max = s;
	                res = [ num ];
	            }
	        });
	        var m = new Matrix(this);
	        res.forEach(function(num, i){
	            m.set(i, 0, num);
	        });
	        return m;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    defineFunction("geomean", function(numbers){
	        var n = numbers.length;
	        var p = numbers.reduce(function(p, num){
	            if (num < 0) {
	                throw new CalcError("NUM");
	            }
	            return p * num;
	        }, 1);
	        return Math.pow(p, 1/n);
	    }).args([
	        [ "numbers", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$numbers.length > 0", "NUM" ] ]
	    ]);

	    defineFunction("harmean", function(numbers){
	        var n = numbers.length;
	        var s = numbers.reduce(function(s, num){
	            if (!num) {
	                throw new CalcError("DIV/0");
	            }
	            return s + 1 / num;
	        }, 0);
	        return n / s;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$numbers.length > 0", "NUM" ] ]
	    ]);

	    defineFunction("trimmean", function(numbers, p){
	        var n = numbers.length;
	        numbers.sort(ascending);
	        var discard = Math.floor(n * p);
	        if (discard % 2) {
	            --discard;
	        }
	        discard /= 2;
	        var sum = 0;
	        for (var i = discard; i < n-discard; ++i) {
	            sum += numbers[i];
	        }
	        return sum / (n - discard * 2);
	    }).args([
	        [ "numbers", [ "collect", "number", 1 ] ],
	        [ "percent", [ "and", "number", [ "[between)", 0, 1 ] ] ],
	        [ "?", [ "assert", "$numbers.length > 0", "NUM" ] ]
	    ]);

	    defineFunction("frequency", function(data, bins){
	        // apparently this always returns a vertical matrix in Excel, so we collect all numbers in
	        // bins instead of receiving it as a Matrix and try to mimic its shape.
	        data.sort(ascending);
	        bins.sort(ascending);
	        var prev = -Infinity;
	        var i = 0;
	        function count(max) {
	            var n = 0;
	            while (i < data.length && data[i] > prev && data[i] <= max) {
	                ++n; ++i;
	            }
	            return n;
	        }
	        var m = new Matrix(this);
	        bins.forEach(function(val, i){
	            var n = count(val);
	            prev = val;
	            m.set(i, 0, n);
	        });
	        m.set(m.height, 0, data.length - i);
	        return m;
	    }).args([
	        [ "data", [ "collect", "number", 1 ] ],
	        [ "bins", [ "collect", "number", 1 ] ]
	    ]);

	    defineFunction("rank.eq", function(val, numbers, asc) {
	        numbers.sort(asc ? ascending : descending);
	        var pos = numbers.indexOf(val);
	        return pos < 0 ? new CalcError("N/A") : pos + 1;
	    }).args([
	        [ "value", "number" ],
	        [ "numbers", [ "collect", "number" ] ],
	        [ "order", [ "or", "logical", [ "null", false ] ] ]
	    ]);

	    defineAlias("rank", "rank.eq");

	    defineFunction("rank.avg", function(val, numbers, asc) {
	        numbers.sort(asc ? ascending : descending);
	        var pos = numbers.indexOf(val);
	        if (pos < 0) {
	            return new CalcError("N/A");
	        }
	        for (var i = pos; numbers[i] == val; ++i){}
	        return (pos + i + 1) / 2;
	    }).args([
	        [ "value", "number" ],
	        [ "numbers", [ "collect", "number" ] ],
	        [ "order", [ "or", "logical", [ "null", false ] ] ]
	    ]);

	    // formula available at https://support.office.microsoft.com/en-us/article/KURT-function-cbbc2312-dfa6-4cc4-b5c0-1b3c59cc9377
	    defineFunction("kurt", function(numbers){
	        var n = numbers.length;
	        var avg = _avg(numbers);
	        var variance = _var_sp(numbers, n-1, avg);
	        var stddev = Math.sqrt(variance);
	        var sum = numbers.reduce(function(sum, num){
	            return sum + Math.pow((num - avg) / stddev, 4);
	        }, 0);
	        return n*(n+1)/((n-1)*(n-2)*(n-3)) * sum
	            - 3*Math.pow(n-1, 2)/((n-2)*(n-3));
	    }).args([
	        [ "numbers", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$numbers.length >= 4", "NUM" ] ]
	    ]);

	    function _percentrank(numbers, x, exc) {
	        var nlt = 0, ngt = 0, left = null, right = null, found = false;
	        numbers.forEach(function(num){
	            if (num < x) {
	                nlt++;
	                left = left == null ? num : Math.max(left, num);
	            } else if (num > x) {
	                ngt++;
	                right = right == null ? num : Math.min(right, num);
	            } else {
	                found = true;
	            }
	        });
	        if (!nlt && !ngt) {
	            return new CalcError("N/A");
	        }
	        if (found) {
	            if (exc) {
	                return (nlt + 1) / (numbers.length + 1);
	            }
	            return nlt / (nlt + ngt);
	        }
	        return ((right - x) * _percentrank(numbers, left, exc) +
	                (x - left) * _percentrank(numbers, right, exc)) / (right - left);
	    }

	    var ARGS_PERCENTRANK = [
	        [ "array", [ "collect", "number", 1 ] ],
	        [ "x", "number" ],
	        [ "significance", [ "or", [ "null", 3 ], "integer++" ] ],
	        [ "?", [ "assert", "$array.length > 0", "NUM" ] ]
	    ];

	    defineFunction("percentrank.inc", function(numbers, x, significance) {
	        var p = _percentrank(numbers, x, 0);
	        p = p.toFixed(significance + 1);
	        return parseFloat(p.substr(0, p.length - 1));
	    }).args(ARGS_PERCENTRANK);

	    defineFunction("percentrank.exc", function(numbers, x, significance) {
	        var p = _percentrank(numbers, x, 1);
	        p = p.toFixed(significance + 1);
	        return parseFloat(p.substr(0, p.length - 1));
	    }).args(ARGS_PERCENTRANK);

	    defineAlias("percentrank", "percentrank.inc");

	    function _covariance(x, y, divisor) {
	        var sum = 0;
	        var ax = _avg(x);
	        var ay = _avg(y);
	        var n = x.length;
	        for (var i = 0; i < n; ++i) {
	            sum += (x[i] - ax) * (y[i] - ay);
	        }
	        return sum / divisor;
	    }

	    defineFunction("covariance.p", function(x, y){
	        return _covariance(x, y, x.length);
	    }).args([
	        [ "array1", [ "collect", "number", 1 ] ],
	        [ "array2", [ "collect", "number", 1 ] ],
	        [ "?", [ "assert", "$array1.length == $array2.length", "N/A" ] ],
	        [ "?", [ "assert", "$array1.length > 0", "DIV/0" ] ]
	    ]);

	    defineFunction("covariance.s", function(x, y){
	        return _covariance(x, y, x.length - 1);
	    }).args([
	        [ "array1", [ "collect", "number", 1 ] ],
	        [ "array2", [ "collect", "number", 1 ] ],
	        [ "?", [ "assert", "$array1.length == $array2.length", "N/A" ] ],
	        [ "?", [ "assert", "$array1.length > 1", "DIV/0" ] ]
	    ]);

	    defineAlias("covar", "covariance.p");

	    /* -----[ Factorials ]----- */

	    var _fact = util.memoize(function(n){
	        for (var i = 2, fact = 1; i <= n; ++i) {
	            fact *= i;
	        }
	        return fact;
	    });

	    defineFunction("fact", _fact).args([
	        [ "*n", "integer+" ]
	    ]);

	    defineFunction("factdouble", function(n){
	        for (var i = 2 + (n&1), fact = 1; i <= n; i += 2) {
	            fact *= i;
	        }
	        return fact;
	    }).args([
	        [ "*n", "integer+" ]
	    ]);

	    defineFunction("multinomial", function(numbers){
	        var div = 1, sum = 0;
	        numbers.forEach(function(n){
	            if (n < 0) {
	                throw new CalcError("NUM");
	            }
	            sum += n;
	            div *= _fact(n);
	        });
	        return _fact(sum) / div;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ]
	    ]);

	    var _combinations = util.memoize(function (n, k){
	        for (var f1 = k + 1, f2 = 1, p1 = 1, p2 = 1; f2 <= n - k; ++f1, ++f2) {
	            p1 *= f1;
	            p2 *= f2;
	        }
	        return p1/p2;
	    });

	    defineFunction("combin", _combinations).args([
	        [ "*n", "integer++" ],
	        [ "*k", [ "and", "integer", [ "[between]", 0, "$n" ] ] ]
	    ]);

	    defineFunction("combina", function(n, k){
	        return _combinations(n + k - 1, n - 1);
	    }).args([
	        [ "*n", "integer++" ],
	        [ "*k", [ "and", "integer", [ "[between]", 1, "$n" ] ] ]
	    ]);

	    /* -----[ Statistical functions ]----- */

	    defineFunction("average", function(numbers){
	        var sum = numbers.reduce(function(sum, num){
	            return sum + num;
	        }, 0);
	        return sum / numbers.length;
	    }).args([
	        // most numeric functions must treat booleans as numbers (1 for TRUE
	        // and 0 for FALSE), but AVERAGE shouldn't.
	        [ "numbers", [ "collect", "number!" ] ],
	        [ "?", [ "assert", "$numbers.length > 0", "DIV/0" ] ]
	    ]);

	    defineFunction("averagea", function(values){
	        var sum = 0, count = 0;
	        values.forEach(function(num){
	            if (typeof num != "string") {
	                sum += num;
	            }
	            ++count;
	        });
	        return count ? sum / count : new CalcError("DIV/0");
	    }).args([
	        [ "values", [ "collect", "anyvalue" ] ]
	    ]);

	    function _percentile(numbers, rank) {
	        numbers.sort(ascending);
	        var n = numbers.length;
	        var k = rank | 0, d = rank - k;
	        if (k === 0) {
	            return numbers[0];
	        }
	        if (k >= n) {
	            return numbers[n - 1];
	        }
	        --k;
	        return numbers[k] + d * (numbers[k + 1] - numbers[k]);
	    }

	    function _percentile_inc(numbers, p){
	        // algorithm from https://en.wikipedia.org/wiki/Percentile#Microsoft_Excel_method
	        var rank = p * (numbers.length - 1) + 1;
	        return _percentile(numbers, rank);
	    }

	    function _percentile_exc(numbers, p){
	        // https://en.wikipedia.org/wiki/Percentile#NIST_method
	        var rank = p * (numbers.length + 1);
	        return _percentile(numbers, rank);
	    }

	    defineFunction("percentile.inc", _percentile_inc).args([
	        [ "numbers", [ "collect", "number", 1 ] ],
	        [ "p", [ "and", "number", [ "[between]", 0, 1 ] ] ]
	    ]);

	    defineFunction("percentile.exc", _percentile_exc).args([
	        [ "numbers", [ "collect", "number", 1 ] ],
	        [ "p", [ "and", "number", [ "(between)", 0, 1 ] ] ]
	    ]);

	    defineFunction("quartile.inc", function(numbers, quarter){
	        return _percentile_inc(numbers, quarter / 4);
	    }).args([
	        [ "numbers", [ "collect", "number", 1 ] ],
	        [ "quarter", [ "values", 0, 1, 2, 3, 4 ] ]
	    ]);

	    defineFunction("quartile.exc", function(numbers, quarter){
	        return _percentile_exc(numbers, quarter / 4);
	    }).args([
	        [ "numbers", [ "collect", "number", 1 ] ],
	        [ "quarter", [ "values", 0, 1, 2, 3, 4 ] ]
	    ]);

	    defineAlias("quartile", "quartile.inc");
	    defineAlias("percentile", "percentile.inc");

	    var AGGREGATE_FUNCS = [
	        "AVERAGE", "COUNT", "COUNTA", "MAX", "MIN", "PRODUCT",
	        "STDEV.S", "STDEV.P", "SUM", "VAR.S", "VAR.P", "MEDIAN",
	        "MODE.SNGL", "LARGE", "SMALL", "PERCENTILE.INC",
	        "QUARTILE.INC", "PERCENTILE.EXC", "QUARTILE.EXC"
	    ];

	    function fetchValuesForAggregate(self, args, options) {
	        var values = [];
	        var opt_ignore_hidden_rows = 1;
	        var opt_ignore_errors = 2;
	        var opt_use_aggregates = 4;
	        (function fetchValues(args) {
	            if (args instanceof Ref) {
	                self.getRefCells(args, true).forEach(function(cell){
	                    var value = cell.value;
	                    if ((options & opt_ignore_hidden_rows) && cell.hidden) {
	                        return;
	                    }
	                    if (cell.formula) {
	                        // XXX: formula.print is fast, but still, can't we do any better here?
	                        //      perhaps access the input string directly somehow?
	                        var str = cell.formula.print(cell.row, cell.col);
	                        if (/^\s*(?:aggregate|subtotal)\s*\(/i.test(str)) {
	                            if (!(options & opt_use_aggregates)) {
	                                return;
	                            }
	                        }
	                    }
	                    if ((options & opt_ignore_errors) && value instanceof CalcError) {
	                        return;
	                    }
	                    if (typeof value == "number" || value instanceof CalcError) {
	                        values.push(value);
	                    }
	                });
	            } else if (Array.isArray(args)) {
	                for (var i = 0; i < args.length; ++i) {
	                    fetchValues(args[i]);
	                }
	            } else if (args instanceof Matrix) {
	                args.each(fetchValues);
	            } else if (typeof args == "number") {
	                values.push(args);
	            } else if (args instanceof CalcError && !(options & opt_ignore_errors)) {
	                values.push(args);
	            }
	        })(args);
	        return values;
	    }

	    // AGGREGATE function
	    //
	    // https://support.office.com/en-SG/article/aggregate-function-c8caed56-07df-4aeb-9741-23693ffbe525
	    //
	    // we can only partially type-check this function.  also, we need to use the async version in
	    // order to resolve references and delegate values to the function to aggregate.
	    defineFunction("aggregate", function(callback, funcId, options, args){
	        // options is a bit field.  that makes sense; it's the documentation which doesn't.
	        var self = this;
	        self.resolveCells(args, function(){
	            var values;
	            if (funcId > 12) {
	                // "array form"
	                values = fetchValuesForAggregate(self, args[0], options);
	                var k = args[1];
	                if (k instanceof CellRef) {
	                    k = self.getRefData(k);
	                }
	                if (typeof k != "number") {
	                    return callback(new CalcError("VALUE"));
	                }
	            } else {
	                values = fetchValuesForAggregate(self, args, options);
	            }
	            self.func(AGGREGATE_FUNCS[funcId - 1], callback, values);
	        });
	    }).argsAsync([
	        [ "funcId", [ "values", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	                      11, 12, 13, 14, 15, 16, 17, 18, 19 ] ],
	        [ "options", [ "or",
	                       [ "null", 0 ],
	                       [ "values", 0, 1, 2, 3, 4, 5, 6, 7  ] ] ],
	        [ "args", "rest" ]
	    ]);

	    defineFunction("subtotal", function(callback, funcId){
	        var self = this;
	        var ignoreHidden = funcId > 100;
	        if (ignoreHidden) {
	            funcId -= 100;
	        }
	        var args = [];
	        for (var i = 2; i < arguments.length; ++i) {
	            args.push(arguments[i]);
	        }
	        self.resolveCells(args, function(){
	            var values = fetchValuesForAggregate(self, args, ignoreHidden ? 1 : 0);
	            self.func(AGGREGATE_FUNCS[funcId - 1], callback, values);
	        });
	    }).argsAsync([
	        [ "funcId", [ "values", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
	                      101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111 ] ],
	        [ "+", [ "ref", [ "or", "ref", "#matrix" ] ] ]
	    ]);

	    // https://support.office.com/en-sg/article/AVEDEV-function-ec78fa01-4755-466c-9a2b-0c4f9eacaf6d
	    defineFunction("avedev", function(numbers){
	        var avg = numbers.reduce(function(sum, num){
	            return sum + num;
	        }, 0) / numbers.length;
	        return numbers.reduce(function(sum, num){
	            return sum + Math.abs(num - avg);
	        }, 0) / numbers.length;
	    }).args([
	        [ "numbers", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$numbers.length >= 2", "NUM" ] ]
	    ]);

	    function _binom_dist(x, n, p, cumulative) {
	        if (!cumulative) {
	            return _combinations(n, x) * Math.pow(p, x) * Math.pow(1-p, n-x);
	        } else {
	            var sum = 0;
	            for (var j = 0; j <= x; ++j) {
	                sum += _combinations(n, j) * Math.pow(p, j) * Math.pow(1-p, n-j);
	            }
	            return sum;
	        }
	    }

	    defineFunction("binom.dist", _binom_dist).args([
	        [ "successes", "integer+" ],
	        [ "trials", [ "and", "integer", [ "assert", "$trials >= $successes" ] ] ],
	        [ "probability", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineAlias("binomdist", "binom.dist");

	    defineFunction("binom.inv", function(n, p, alpha){
	        // XXX: could a binary search be faster?
	        for (var x = 0; x <= n; ++x) {
	            if (_binom_dist(x, n, p, true) >= alpha) {
	                return x;
	            }
	        }
	        return new CalcError("N/A"); // XXX: is this right?
	    }).args([
	        [ "trials", "integer+" ],
	        [ "probability", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "alpha", [ "and", "number", [ "[between]", 0, 1 ] ] ]
	    ]);

	    defineAlias("critbinom", "binom.inv");

	    defineFunction("binom.dist.range", function(n, p, s, s2){
	        var sum = 0;
	        for (var k = s; k <= s2; ++k) {
	            sum += _combinations(n, k) * Math.pow(p, k) * Math.pow(1-p, n-k);
	        }
	        return sum;
	    }).args([
	        [ "trials", "integer+" ],
	        [ "probability", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "successes_min", [ "and", "integer", [ "[between]", 0, "$trials" ] ] ],
	        [ "successes_max", [ "or",
	                             [ "and", "integer",
	                               [ "[between]", "$successes_min", "$trials" ] ],
	                             [ "null", "$successes_min" ] ] ]
	    ]);

	    defineFunction("negbinom.dist", function(x, k, p, cumulative){
	        if (cumulative) {
	            var sum = 0;
	            while (x >= 0) {
	                sum += _combinations(x+k-1, x) * Math.pow(p, k) * Math.pow(1-p, x);
	                x--;
	            }
	            return sum;
	        }
	        return _combinations(x+k-1, x) * Math.pow(p, k) * Math.pow(1-p, x);
	    }).args([
	        [ "number_f", "integer+" ],
	        [ "number_s", "integer+" ],
	        [ "probability_s", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineAlias("negbinomdist", "negbinom.dist");

	    /* -----[ lookup functions ]----- */

	    defineFunction("address", function(row, col, abs, a1, sheet){
	        // by some lucky coincidence, we get the corret `rel` value by just subtracting 1 from the
	        // abs argument
	        var cell = new CellRef(row - 1, col - 1, abs - 1);
	        if (sheet) {
	            cell.setSheet(sheet, true);
	        }
	        return a1 ? cell.print(0, 0) : cell.print();
	    }).args([
	        [ "row", "integer++" ],
	        [ "col", "integer++" ],
	        [ "abs", [ "or", [ "null", 1 ], [ "values", 1, 2, 3, 4 ]]],
	        [ "a1", [ "or", [ "null", true ], "logical" ]],
	        [ "sheet", [ "or", "null", "string" ]]
	    ]);

	    defineFunction("areas", function(ref){
	        var count = 0;
	        (function loop(x){
	            if (x instanceof CellRef || x instanceof RangeRef) {
	                count++;
	            } else if (x instanceof UnionRef) {
	                x.refs.forEach(loop);
	            }
	            // XXX: NameRef if we add support
	        })(ref);
	        return count;
	    }).args([
	        [ "ref", "ref" ]
	    ]);

	    defineFunction("choose", function(index, args){
	        if (index > args.length) {
	            return new CalcError("N/A");
	        } else {
	            return args[index - 1];
	        }
	    }).args([
	        [ "*index", "integer" ],
	        [ "+", [ "value", "anything" ] ]
	    ]);

	    defineFunction("column", function(ref){
	        if (!ref) {
	            return this.formula.col + 1;
	        }
	        if (ref instanceof CellRef) {
	            return ref.col + 1;
	        }
	        return this.asMatrix(ref).mapCol(function(col){
	            return col + ref.topLeft.col + 1;
	        });
	    }).args([
	        [ "ref", [ "or", "area", "null" ]]
	    ]);

	    defineFunction("columns", function(m){
	        return m instanceof Ref ? m.width() : m.width;
	    }).args([
	        [ "ref", [ "or", "area", "#matrix" ] ]
	    ]);

	    defineFunction("formulatext", function(ref){
	        var cell = this.getRefCells(ref)[0]; // XXX: overkill, but oh well.
	        if (!cell.formula) {
	            return new CalcError("N/A");
	        }
	        return cell.formula.print(cell.row, cell.col);
	    }).args([
	        [ "ref", "ref" ]
	    ]);

	    defineFunction("hlookup", function(value, m, row, approx){
	        var resultCol = null;
	        m.eachCol(function(col){
	            var data = m.get(0, col);
	            if (approx) {
	                if (data > value) {
	                    return true;
	                }
	                resultCol = col;
	            } else if (data === value) {
	                resultCol = col;
	                return true;
	            }
	        });
	        if (resultCol == null) {
	            return new CalcError("N/A");
	        }
	        return m.get(row - 1, resultCol);
	    }).args([
	        [ "value", "anyvalue" ],
	        [ "range", "matrix" ],
	        [ "row", "integer++" ],
	        [ "approx", [ "or", "logical", [ "null", true ]]]
	    ]);

	    defineFunction("index", function(callback, ref, row, col, areanum){
	        var self = this;
	        if (ref instanceof UnionRef) {
	            ref = ref.refs[areanum - 1];
	        }
	        if ((!row && !col) || !ref) {
	            return callback(new CalcError("N/A"));
	        }
	        if (ref instanceof CellRef) {
	            ref = ref.toRangeRef();
	        }
	        if (ref instanceof RangeRef) {
	            if (row && col) {
	                if (col > ref.width() || row > ref.height()) {
	                    return callback(new CalcError("REF"));
	                }
	                // fetching a single cell
	                var cell = ref.toCell(row - 1, col - 1);
	                self.resolveCells([ cell ], function(){
	                    callback(self.getRefData(cell));
	                });
	                return;
	            }
	            if (!row) {
	                // fetch a full column
	                var colRange = ref.toColumn(col - 1);
	                self.resolveCells([ colRange ], function(){
	                    callback(self.asMatrix(colRange));
	                });
	                return;
	            }
	            if (!col) {
	                // fetch a full row
	                var rowRange = ref.toRow(row - 1);
	                self.resolveCells([ rowRange ], function(){
	                    callback(self.asMatrix(rowRange));
	                });
	                return;
	            }
	        }
	        else if (ref instanceof Matrix) {
	            if (ref.width > 1 && ref.height > 1) {
	                if (row && col) {
	                    return callback(ref.get(row - 1, col - 1));
	                }
	                if (!row) {
	                    return callback(ref.mapRow(function(row){
	                        return ref.get(row, col - 1);
	                    }));
	                }
	                if (!col) {
	                    return callback(ref.mapCol(function(col){
	                        return ref.get(row - 1, col);
	                    }));
	                }
	            }
	            if (ref.width == 1) {
	                return callback(ref.get(row - 1, 0));
	            }
	            if (ref.height == 1) {
	                return callback(ref.get(0, col - 1));
	            }
	        }
	        else {
	            callback(new CalcError("REF"));
	        }
	    }).argsAsync([
	        [ "range", [ "or", "ref", "matrix" ] ],
	        [ "row", [ "or", "integer+", "null" ] ],
	        [ "col", [ "or", "integer+", "null" ] ],
	        [ "areanum", [ "or", "integer++", [ "null", 1 ] ] ]
	    ]);

	    defineFunction("indirect", function(thing){
	        try {
	            // XXX: does more work than needed.  we could go for parseReference, but that one
	            // doesn't (yet?) support "SheetName!" prefix.
	            var f = this.formula;
	            var exp = calc.parseFormula(f.sheet, f.row, f.col, thing);
	            var ref = exp.ast;
	            if (ref instanceof NameRef) {
	                ref = this.ss.nameValue(ref, f.sheet, f.row, f.col);
	            }
	            if (!(ref instanceof Ref)) {
	                throw 1;
	            }
	            return ref.absolute(f.row, f.col);
	        } catch(ex) {
	            return new CalcError("REF");
	        }
	    }).args([
	        [ "thing", "string" ]
	    ]);

	    // XXX: LOOKUP.  seems to be deprecated in favor of HLOOKUP/VLOOKUP

	    // XXX: double-check this one.
	    defineFunction("match", function(val, m, type){
	        var index = 1, cmp;
	        if (type === 0) {
	            cmp = parseCriteria(val);
	        } else if (type === -1) {
	            cmp = parseCriteria("<=" + val);
	        } else if (type === 1) {
	            cmp = parseCriteria(">=" + val);
	        }
	        if (m.each(function(el){
	            if (el != null && cmp(el)) {
	                if (type !== 0 && val != el) {
	                    --index;
	                }
	                return true;
	            }
	            index++;
	        }, true) && index > 0) {
	            return index;
	        } else {
	            return new CalcError("N/A");
	        }
	    }).args([
	        [ "value", "anyvalue" ],
	        [ "range", "matrix" ],
	        [ "type", [ "or",
	                    [ "values", -1, 0, 1 ],
	                    [ "null", 1 ]]]
	    ]);

	    defineFunction("offset", function(ref, rows, cols, height, width){
	        var topLeft = (ref instanceof CellRef ? ref : ref.topLeft).clone();
	        topLeft.row += rows;
	        topLeft.col += cols;
	        if (topLeft.row < 0 || topLeft.col < 0) {
	            return new CalcError("VALUE");
	        }
	        if (height > 1 || width > 1) {
	            return new RangeRef(topLeft, new CellRef(topLeft.row + height - 1,
	                                                     topLeft.col + width - 1))
	                .setSheet(ref.sheet, ref.hasSheet());
	        }
	        return topLeft;
	    }).args([
	        [ "ref", "area" ],
	        [ "*rows", "integer" ],
	        [ "*cols", "integer" ],
	        [ "*height", [ "or", "integer++", [ "null", "$ref.height()" ]]],
	        [ "*width", [ "or", "integer++", [ "null", "$ref.width()" ]]]
	    ]);

	    defineFunction("row", function(ref){
	        if (!ref) {
	            return this.formula.row + 1;
	        }
	        if (ref instanceof CellRef) {
	            return ref.row + 1;
	        }
	        return this.asMatrix(ref).mapRow(function(row){
	            return row + ref.topLeft.row + 1;
	        });
	    }).args([
	        [ "ref", [ "or", "area", "null" ]]
	    ]);

	    defineFunction("rows", function(m){
	        return m instanceof Ref ? m.height() : m.height;
	    }).args([
	        [ "ref", [ "or", "area", "#matrix" ] ]
	    ]);

	    defineFunction("vlookup", function(value, m, col, approx){
	        var resultRow = null;
	        if (typeof value != "number") {
	            approx = false;
	        }
	        if (typeof value == "string") {
	            value = value.toLowerCase();
	        }
	        m.eachRow(function(row){
	            var data = m.get(row, 0);
	            if (approx) {
	                if (data > value) {
	                    return true;
	                }
	                resultRow = row;
	            } else {
	                if (typeof data == "string") {
	                    data = data.toLowerCase();
	                }
	                if (data === value) {
	                    resultRow = row;
	                    return true;
	                }
	            }
	        });
	        if (resultRow == null) {
	            return new CalcError("N/A");
	        }
	        return m.get(resultRow, col - 1);
	    }).args([
	        [ "value", "anyvalue" ],
	        [ "range", "matrix" ],
	        [ "col", "integer++" ],
	        [ "approx", [ "or", "logical", [ "null", true ]]]
	    ]);

	    /* -----[ Date and time functions ]----- */

	    defineFunction("date", function(year, month, date){
	        return packDate(year, month-1, date);
	    }).args([
	        [ "*year", "integer" ],
	        [ "*month", "integer" ],
	        [ "*date", "integer" ]
	    ]);

	    defineFunction("day", function(date){
	        return unpackDate(date).date;
	    }).args([
	        [ "*date", "date" ]
	    ]);

	    defineFunction("month", function(date){
	        return unpackDate(date).month + 1;
	    }).args([
	        [ "*date", "date" ]
	    ]);

	    defineFunction("year", function(date){
	        return unpackDate(date).year;
	    }).args([
	        [ "*date", "date" ]
	    ]);

	    defineFunction("weekday", function(date){
	        // XXX: TODO type
	        return unpackDate(date).day + 1;
	    }).args([
	        [ "*date", "date" ]
	    ]);

	    // https://support.office.com/en-GB/article/WEEKNUM-function-e5c43a03-b4ab-426c-b411-b18c13c75340
	    // XXX: this is a mess.
	    defineFunction("weeknum", function(date, type){
	        var fw = packDate(unpackDate(date).year, 0, 1);
	        var sy = unpackDate(fw);
	        var diff;
	        if (type == 21) {
	            // Monday-based weeks, first week is the one containing the first Thursday of the year
	            // we want to place in fw and sy the first Thursday
	            diff = 3 - (sy.day + 6) % 7;
	            if (diff < 0) {
	                diff += 7;
	            }
	            fw += diff;
	            sy.date += diff;
	            sy.day = 4;         // Thursday.
	            type = 1;
	        } else {
	            if (type == 1) {
	                type = 0;
	            } else if (type == 2) {
	                type = 1;
	            } else {
	                type = (type - 10) % 7;
	            }
	            // finally compatible with what we got:
	            // type == 0 means week starts on Sunday
	            //         1                      Monday
	            //         2                      Tuesday
	            // ...
	        }
	        diff = sy.day - type;
	        if (diff < 0) {
	            diff += 7;
	        }
	        fw -= diff;
	        return Math.ceil((date + 1 - fw) / 7);
	    }).args([
	        [ "*date", "date" ],
	        [ "*type", [ "or", [ "null", 1 ],
	                     [ "values", 1, 2, 11, 12, 13, 14, 15, 16, 17, 21 ] ] ]
	    ]);

	    function weeksInYear(year) {
	        var d = unpackDate(packDate(year, 0, 1));
	        if ((d.day == 4) || (d.day == 3 && runtime.isLeapYear(year))) {
	            // long year
	            return 53;
	        }
	        return 52;
	    }

	    defineFunction("isoweeknum", function isoweeknum(date){
	        // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_the_week_number_of_a_given_date
	        var d = unpackDate(date);
	        var dow = d.day || 7;
	        var wk = Math.floor((d.ord - dow + 10) / 7);
	        if (wk < 1) {
	            return weeksInYear(d.year - 1);
	        } else if (wk == 53 && wk > weeksInYear(d.year)) {
	            return 1;
	        }
	        return wk;
	    }).args([
	        [ "*date", "date" ]
	    ]);

	    defineFunction("now", function(){
	        return runtime.dateToSerial(new Date());
	    }).args([]);

	    defineFunction("today", function(){
	        return runtime.dateToSerial(new Date()) | 0;
	    }).args([]);

	    defineFunction("time", function(hh, mm, ss){
	        return runtime.packTime(hh, mm, ss, 0);
	    }).args([
	        [ "*hours", "integer" ],
	        [ "*minutes", "integer" ],
	        [ "*seconds", "integer" ]
	    ]);

	    defineFunction("hour", function(time){
	        return runtime.unpackTime(time).hours;
	    }).args([
	        [ "*time", "datetime" ]
	    ]);

	    defineFunction("minute", function(time){
	        return runtime.unpackTime(time).minutes;
	    }).args([
	        [ "*time", "datetime" ]
	    ]);

	    defineFunction("second", function(time){
	        return runtime.unpackTime(time).seconds;
	    }).args([
	        [ "*time", "datetime" ]
	    ]);

	    defineFunction("edate", function(base, months){
	        var d = unpackDate(base);
	        var m = d.month + months;
	        var y = d.year + Math.floor(m/12);
	        m %= 12;
	        if (m < 0) {
	            m += 12;
	        }
	        d = Math.min(d.date, daysInMonth(y, m));
	        return packDate(y, m, d);
	    }).args([
	        [ "*start_date", "date" ],
	        [ "*months", "integer" ]
	    ]);

	    defineFunction("eomonth", function(base, months){
	        var d = unpackDate(base);
	        var m = d.month + months;
	        var y = d.year + Math.floor(m/12);
	        m %= 12;
	        if (m < 0) {
	            m += 12;
	        }
	        d = daysInMonth(y, m);
	        return packDate(y, m, d);
	    }).args([
	        [ "*start_date", "date" ],
	        [ "*months", "integer" ]
	    ]);

	    defineFunction("workday", function(date, n, holidays){
	        // XXX: the algorithm here is pretty dumb, can we do better?
	        var inc = n > 0 ? 1 : -1;
	        n = Math.abs(n);
	        var dow = unpackDate(date).day;
	        while (n > 0) {
	            date += inc;
	            dow = (dow + inc) % 7;
	            if (dow > 0 && dow < 6 && holidays.indexOf(date) < 0) {
	                --n;
	            }
	        }
	        return date;
	    }).args([
	        [ "start_date", "date" ],
	        [ "days", "integer" ],
	        [ "holidays", [ "collect", "date" ] ]
	    ]);

	    defineFunction("networkdays", function(date, end, holidays){
	        // XXX: the algorithm here is pretty dumb, can we do better?
	        if (date > end) {
	            var tmp = date;
	            date = end;
	            end = tmp;
	        }
	        var count = 0;
	        var dow = unpackDate(date).day;
	        while (date <= end) {
	            if (dow > 0 && dow < 6 && holidays.indexOf(date) < 0) {
	                count++;
	            }
	            date++;
	            dow = (dow + 1) % 7;
	        }
	        return count;
	    }).args([
	        [ "start_date", "date" ],
	        [ "end_date", "date" ],
	        [ "holidays", [ "collect", "date" ] ]
	    ]);

	    defineFunction("days", function(start, end){
	        return end - start;
	    }).args([
	        [ "*start_date", "date" ],
	        [ "*end_date", "date" ]
	    ]);

	    function _days_360(start, end, method) {
	        var d1 = unpackDate(start);
	        var d2 = unpackDate(end);

	        // https://en.wikipedia.org/wiki/360-day_calendar
	        // humanity is a mess.
	        if (method) {
	            // EU method
	            if (d1.date == 31) {
	                d1.date = 30;
	            }
	            if (d2.date == 31) {
	                d2.date = 30;
	            }
	        } else {
	            // US method
	            if (d1.month == 1 && d2.month == 1
	                && d1.date == daysInMonth(d1.year, 1)
	                && d2.date == daysInMonth(d2.year, 1)) {
	                d2.date = 30;
	            }
	            if (d1.date == daysInMonth(d1.year, d1.month)) {
	                d1.date = 30;
	                if (d2.date == 31) {
	                    d2.date = 30;
	                }
	            } else {
	                if (d1.date == 30 && d2.date == 31) {
	                    d2.date = 30;
	                }
	            }
	        }

	        return (360 * (d2.year - d1.year)
	                + 30 * (d2.month - d1.month)
	                + (d2.date - d1.date));
	    }

	    runtime._days_360 = _days_360;

	    defineFunction("days360", _days_360).args([
	        [ "*start_date", "date" ],
	        [ "*end_date", "date" ],
	        [ "*method", [ "or", "logical", [ "null", false ] ] ]
	    ]);

	    defineFunction("yearfrac", function(start, end, method){
	        switch (method) {
	          case 0:
	            return _days_360(start, end, false) / 360;
	          case 1:
	            return (end - start) / daysInYear(unpackDate(start).year);
	          case 2:
	            return (end - start) / 360;
	          case 3:
	            return (end - start) / 365;
	          case 4:
	            return _days_360(start, end, true) / 360;
	        }
	    }).args([
	        [ "*start_date", "date" ],
	        [ "*end_date", "date" ],
	        [ "*method", [ "or", [ "null", 0 ], [ "values", 0, 1, 2, 3, 4 ] ] ]
	    ]);

	    defineFunction("datevalue", function(text){
	        var date = runtime.parseDate(text);
	        if (date) {
	            return runtime.dateToSerial(date);
	        }
	        return new CalcError("VALUE");
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineFunction("timevalue", function(text){
	        var m = text.toLowerCase().match(/(\d+):(\d+)(:(\d+)(\.(\d+))?)?\s*(am?|pm?)?/);
	        if (m) {
	            var hh = parseFloat(m[1]);
	            var mm = parseFloat(m[2]);
	            var ss = m[3] ? parseFloat(m[4]) : 0;
	            //var ms = m[5] ? parseFloat(m[6]) : 0;
	            var ampm = m[7];
	            if (ampm && (hh > 12 || hh < 1)) {
	                return new CalcError("VALUE");
	            }
	            if (/^p/.test(ampm)) {
	                hh += 12;
	            }
	            return runtime.packTime(hh, mm, ss, 0);
	        }
	        return new CalcError("VALUE");
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    /* -----[ Matrix functions ]----- */

	    defineFunction("mdeterm", function(m){
	        var error = m.each(function(val){
	            if (typeof val != "number") {
	                return new CalcError("VALUE");
	            }
	        }, true);
	        return error || m.determinant();
	    }).args([
	        [ "m", [ "and", "matrix",
	                 [ "assert", "$m.width == $m.height" ] ] ]
	    ]);

	    defineFunction("transpose", function(m){
	        return m.transpose();
	    }).args([
	        [ "range", "matrix" ]
	    ]);

	    defineFunction("mmult", function(a, b){
	        return a.multiply(b);
	    }).args([
	        [ "a", "matrix" ],
	        [ "b", [ "and", "matrix",
	                 [ "assert", "$b.height == $a.width" ] ] ]
	    ]);

	    defineFunction("munit", function(n){
	        return new Matrix(this).unit(n);
	    }).args([
	        [ "n", "integer+" ]
	    ]);

	    defineFunction("minverse", function(m){
	        var error = m.each(function(val){
	            if (typeof val != "number") {
	                return new CalcError("VALUE");
	            }
	        }, true);
	        return error || m.inverse() || new CalcError("VALUE");
	    }).args([
	        [ "m", [ "and", "matrix",
	                 [ "assert", "$m.width == $m.height" ] ] ]
	    ]);

	    /* -----[ Other ]----- */

	    defineFunction("rand", function() {
	        return Math.random();
	    }).args([]);

	    defineFunction("randbetween", function(min, max){
	        return min + Math.floor((max - min + 1) * Math.random());
	    }).args([
	        [ "min", "integer" ],
	        [ "max", [ "and", "integer", [ "assert", "$max >= $min" ] ] ]
	    ]);

	    defineFunction("true", function(){
	        return true;
	    }).args([]);

	    defineFunction("false", function(){
	        return true;
	    }).args([]);

	    defineFunction("roman", function(num){
	        return util.arabicToRoman(num).toUpperCase();
	    }).args([
	        [ "*number", "integer" ]
	    ]);

	    defineFunction("arabic", function(rom){
	        var num = util.romanToArabic(rom);
	        return num == null ? new CalcError("VALUE") : num;
	    }).args([
	        [ "*roman", "string" ]
	    ]);

	    defineFunction("base", function(number, radix, minLen){
	        var str = number.toString(radix).toUpperCase();
	        while (str.length < minLen) {
	            str = "0" + str;
	        }
	        return str;
	    }).args([
	        [ "*number", "integer" ],
	        [ "*radix", [ "and", "integer", [ "[between]", 2, 36 ] ] ],
	        [ "*minLen", [ "or", "integer+", [ "null", 0 ] ] ]
	    ]);

	    defineFunction("decimal", function(text, radix){
	        text = text.toUpperCase();
	        var val = 0;
	        for (var i = 0; i < text.length; ++i) {
	            var d = text.charCodeAt(i);
	            if (d >= 48 && d <= 57) {
	                d -= 48;
	            } else if (d >= 65 && d < (55 + radix)) {
	                d -= 55;
	            } else {
	                return new CalcError("VALUE");
	            }
	            val = val * radix + d;
	        }
	        return val;
	    }).args([
	        [ "*text", "string" ],
	        [ "*radix", [ "and", "integer", [ "[between]", 2, 36 ] ] ]
	    ]);

	    /* -----[ String functions ]----- */

	    defineFunction("char", function(code){
	        return String.fromCharCode(code);
	    }).args([
	        [ "*code", "integer+" ]
	    ]);

	    // From XRegExp
	    var RX_NON_PRINTABLE = /[\0-\x1F\x7F-\x9F\xAD\u0378\u0379\u037F-\u0383\u038B\u038D\u03A2\u0528-\u0530\u0557\u0558\u0560\u0588\u058B-\u058E\u0590\u05C8-\u05CF\u05EB-\u05EF\u05F5-\u0605\u061C\u061D\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB-\u07FF\u082E\u082F\u083F\u085C\u085D\u085F-\u089F\u08A1\u08AD-\u08E3\u08FF\u0978\u0980\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FC-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0C00\u0C04\u0C0D\u0C11\u0C29\u0C34\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5A-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C80\u0C81\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D01\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D4F-\u0D56\u0D58-\u0D5F\u0D64\u0D65\u0D76-\u0D78\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F5-\u13FF\u169D-\u169F\u16F1-\u16FF\u170D\u1715-\u171F\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191D-\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE-\u1AFF\u1B4C-\u1B4F\u1B7D-\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C80-\u1CBF\u1CC8-\u1CCF\u1CF7-\u1CFF\u1DE7-\u1DFB\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20BB-\u20CF\u20F1-\u20FF\u218A-\u218F\u23F4-\u23FF\u2427-\u243F\u244B-\u245F\u2700\u2B4D-\u2B4F\u2B5A-\u2BFF\u2C2F\u2C5F\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E3C-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u312E-\u3130\u318F\u31BB-\u31BF\u31E4-\u31EF\u321F\u32FF\u4DB6-\u4DBF\u9FCD-\u9FFF\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA698-\uA69E\uA6F8-\uA6FF\uA78F\uA794-\uA79F\uA7AB-\uA7F7\uA82C-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C5-\uA8CD\uA8DA-\uA8DF\uA8FC-\uA8FF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9E0-\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAA7C-\uAA7F\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F-\uABBF\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC2-\uFBD2\uFD40-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFE\uFDFF\uFE1A-\uFE1F\uFE27-\uFE2F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF]/g;

	    defineFunction("clean", function(text){
	        return text.replace(RX_NON_PRINTABLE, "");
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineFunction("code", function(text){
	        return text.charAt(0);
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineAlias("unichar", "char");
	    defineAlias("unicode", "code");

	    defineFunction("concatenate", function(args){
	        var out = "";
	        for (var i = 0; i < args.length; ++i) {
	            out += args[i];
	        }
	        return out;
	    }).args([
	        [ "+",
	          [ "*text", "string" ] ]
	    ]);

	    defineFunction("dollar", function(number, decimals){
	        var format = "$#,##0DECIMALS;($#,##0DECIMALS)";
	        var dec = "";
	        var denomitator = 1;

	        while (decimals-- > 0) {
	          dec += "0";
	        }

	        while (++decimals < 0) {
	          denomitator *= 10;
	        }

	        if (dec !== "") {
	          dec = "." + dec;
	        } else if (denomitator !== 1) {
	            number = Math.round(number / denomitator) * denomitator;
	        }

	        format = format.replace(/DECIMALS/g, dec);

	        return spreadsheet.formatting.text(number, format);
	    }).args([
	        [ "*number", "number" ],
	        [ "*decimals", [ "or", "integer", [ "null", 2 ] ] ]
	    ]);

	    defineFunction("exact", function(a, b){
	        return a === b;
	    }).args([
	        [ "*text1", "string" ],
	        [ "*text2", "string" ]
	    ]);

	    defineFunction("find", function(substring, string, start){
	        var pos = string.indexOf(substring, start - 1);
	        return pos < 0 ? new CalcError("VALUE") : pos + 1;
	    }).args([
	        [ "*substring", "string" ],
	        [ "*string", "string" ],
	        [ "*start", [ "or", "integer++", [ "null", 1 ] ] ]
	    ]);

	    defineFunction("fixed", function(number, decimals, noCommas){
	        var scale = Math.pow(10, decimals);
	        number = Math.round(number * scale) / scale;
	        var format = noCommas ? "0" : "#,##0";
	        if (decimals > 0) {
	            format += ".";
	            while (decimals-- > 0) { format += "0"; }
	        }
	        return spreadsheet.formatting.text(number, format);
	    }).args([
	        [ "*number", "number" ],
	        [ "*decimals", [ "or", "integer", [ "null", 2 ] ] ],
	        [ "*noCommas", [ "or", "boolean", [ "null", false ] ] ]
	    ]);

	    defineFunction("left", function(text, length){
	        return text.substr(0, length);
	    }).args([
	        [ "*text", "string" ],
	        [ "*length", [ "or", "integer+", [ "null", 1 ] ] ]
	    ]);

	    defineFunction("right", function(text, length){
	        return text.substr(-length);
	    }).args([
	        [ "*text", "string" ],
	        [ "*length", [ "or", "integer+", [ "null", 1 ] ] ]
	    ]);

	    defineFunction("len", function(text){
	        return text.length;
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineFunction("lower", function(text){
	        return text.toLowerCase();
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineFunction("upper", function(text){
	        return text.toUpperCase();
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineFunction("ltrim", function(text){
	        return text.replace(/^\s+/, "");
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineFunction("rtrim", function(text){
	        return text.replace(/\s+$/, "");
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineFunction("trim", function(text){
	        return text.replace(/^\s+|\s+$/, "");
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineFunction("mid", function(text, start, length){
	        return text.substr(start - 1, length);
	    }).args([
	        [ "*text", "string" ],
	        [ "*start", "integer++" ],
	        [ "*length", "integer+" ]
	    ]);

	    defineFunction("proper", function(text){
	        return text.toLowerCase().replace(/\b./g, function(s){
	            return s.toUpperCase();
	        });
	    }).args([
	        [ "*text", "string" ]
	    ]);

	    defineFunction("replace", function(text, start, length, newText){
	        return text.substr(0, --start) + newText + text.substr(start + length);
	    }).args([
	        [ "*text", "string" ],
	        [ "*start", "integer++" ],
	        [ "*length", "integer+" ],
	        [ "*newText", "string" ]
	    ]);

	    defineFunction("rept", function(text, number){
	        var out = "";
	        while (number-- > 0) { out += text; }
	        return out;
	    }).args([
	        [ "*text", "string" ],
	        [ "*number", "integer+" ]
	    ]);

	    defineFunction("search", function(substring, string, start){
	        var pos = string.toLowerCase().indexOf(substring.toLowerCase(), start - 1);
	        return pos < 0 ? new CalcError("VALUE") : pos + 1;
	    }).args([
	        [ "*substring", "string" ],
	        [ "*string", "string" ],
	        [ "*start", [ "or", "integer++", [ "null", 1 ] ] ]
	    ]);

	    defineFunction("substitute", function(text, oldText, newText, nth){
	        if (oldText === newText) {
	            return text;
	        }
	        var a = text.split(oldText);
	        if (nth == null) {
	            return a.join(newText);
	        }
	        text = "";
	        nth--;
	        for (var i = 0; i < a.length; ++i) {
	            text += a[i];
	            if (i < a.length - 1) {
	                if (i === nth) {
	                    text += newText;
	                } else {
	                    text += oldText;
	                }
	            }
	        }
	        return text;
	    }).args([
	        [ "*text", "string" ],
	        [ "*oldText", "string" ],
	        [ "*newText", "string" ],
	        [ "*nth", [ "or", "integer++", "null" ] ]
	    ]);

	    defineFunction("t", function(value){
	        return typeof value == "string" ? value : "";
	    }).args([
	        [ "*value", "anyvalue" ]
	    ]);

	    defineFunction("text", function(value, format){
	        return spreadsheet.formatting.text(value, format);
	    }).args([
	        [ "*value", "anyvalue" ],
	        [ "*format", "string" ]
	    ]);

	    defineFunction("value", function(value){
	        if (typeof value == "number") {
	            return value;
	        }
	        if (typeof value == "boolean") {
	            return +value;
	        }
	        // XXX: this is dirty.  we need it so we can parse i.e. "$12,345.50"
	        value = (value+"").replace(/[$€,]/g, "");
	        value = parseFloat(value);
	        return isNaN(value) ? new CalcError("VALUE") : value;
	    }).args([
	        [ "*value", "anyvalue" ]
	    ]);

	    function Hyperlink(link, text) {
	        this.link = link;
	        this.text = text;
	    }
	    Hyperlink.prototype.toString = function() {
	        return this.text;
	    };

	    defineFunction("hyperlink", function(link, text){
	        return new Hyperlink(link, text);
	    }).args([
	        [ "*link", "string" ],
	        [ "*text", [ "or", "string", [ "null", "$link" ] ] ]
	    ]);

	    //// other misc functions

	    defineFunction("iferror", function(value, valueIfError){
	        return value instanceof CalcError ? valueIfError : value;
	    }).args([
	        [ "*value", "forced!" ],
	        [ "*value_if_error", "anyvalue!" ]
	    ]);

	    //// utils

	    var parseCriteria = (function(){
	        var RXCACHE = Object.create(null);

	        function makeComparator(cmp, x) {
	            if (typeof x == "string") {
	                var num = parseFloat(x);
	                if (!isNaN(num) && num == x) {
	                    x = num;
	                }
	            }
	            return function(a) {
	                var b = x;
	                if (typeof a == "string" && typeof b == "string") {
	                    a = a.toLowerCase();
	                    b = b.toLowerCase();
	                }
	                return cmp(a, b);
	            };
	        }

	        function lc(a) {
	            var num, str;
	            if (typeof a == "string") {
	                a = a.toLowerCase();
	            }
	            if (/^[0-9.]+%$/.test(a)) {
	                str = a.substr(0, a.length - 1);
	                num = parseFloat(str);
	                if (!isNaN(num) && num == str) {
	                    a = num / 100;
	                }
	            } else if (/^[0-9.]+$/.test(a)) {
	                num = parseFloat(a);
	                if (!isNaN(num) && num == a) {
	                    a = num;
	                }
	            }
	            return a;
	        }

	        function compLT(a, b) { return lc(a) < lc(b); }
	        function compLTE(a, b) { return lc(a) <= lc(b); }
	        function compGT(a, b) { return lc(a) > lc(b); }
	        function compGTE(a, b) { return lc(a) >= lc(b); }
	        function compNE(a, b) { return !compEQ(a, b); }
	        function compEQ(a, b) {
	            if (b instanceof RegExp) {
	                return b.test(a);
	            }
	            if (typeof a == "string" || typeof b == "string") {
	                // if either one is string, make sure both are strings
	                a = String(a);
	                b = String(b);
	            }
	            return lc(a) == lc(b);
	        }

	        return function(cmp) {
	            if (typeof cmp == "function") {
	                return cmp;
	            }
	            var m;
	            if ((m = /^=(.*)$/.exec(cmp))) {
	                return makeComparator(compEQ, m[1]);
	            }
	            if ((m = /^<>(.*)$/.exec(cmp))) {
	                return makeComparator(compNE, m[1]);
	            }
	            if ((m = /^<=(.*)$/.exec(cmp))) {
	                return makeComparator(compLTE, m[1]);
	            }
	            if ((m = /^<(.*)$/.exec(cmp))) {
	                return makeComparator(compLT, m[1]);
	            }
	            if ((m = /^>=(.*)$/.exec(cmp))) {
	                return makeComparator(compGTE, m[1]);
	            }
	            if ((m = /^>(.*)$/.exec(cmp))) {
	                return makeComparator(compGT, m[1]);
	            }
	            if (/[?*]/.exec(cmp)) {
	                // has wildchars
	                var rx = RXCACHE[cmp];
	                if (!rx) {
	                    rx = cmp.replace(/(~\?|~\*|[\]({\+\.\|\^\$\\})\[]|[?*])/g, function(s){
	                        switch (s) {
	                          case "~?" : return "\\?";
	                          case "~*" : return "\\*";
	                          case "?"  : return ".";
	                          case "*"  : return ".*";
	                          default   : return "\\" + s;
	                        }
	                    });
	                    rx = RXCACHE[cmp] = new RegExp("^" + rx + "$", "i");
	                }
	                return makeComparator(compEQ, rx);
	            }
	            return makeComparator(compEQ, cmp);
	        };
	    })();

	    function numericPredicate(val) {
	        return typeof val == "number"
	            || typeof val == "boolean"
	            || val == null
	            || val === "";
	    }

	    function ascending(a, b) {
	        return a === b ? 0 : a < b ? -1 : 1;
	    }

	    function descending(a, b) {
	        return a === b ? 0 : a < b ? 1 : -1;
	    }

	    // var m = new Matrix();
	    // m.data = [[1, 2, 3], [4, 1, 6], [7, 8, 9]];
	    // //m.data = [[0, 2, 1], [2, 6, 1], [1, 1, 4]];
	    // //m.data = [[1,4,1,1], [1,4,0,1], [2,3,1,2], [3,2,6,4]];
	    // m.width = m.height = 3;
	    // var x = m.inverse();
	    // x.dump();

	}, __webpack_require__(3));


/***/ })

/******/ });