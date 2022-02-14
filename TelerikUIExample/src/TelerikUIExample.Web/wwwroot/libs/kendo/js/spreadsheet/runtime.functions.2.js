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

	__webpack_require__(1692);
	module.exports = __webpack_require__(1692);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1648:
/***/ (function(module, exports) {

	module.exports = require("./runtime");

/***/ }),

/***/ 1692:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// -*- fill-column: 100 -*-

	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1648) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){
	    "use strict";

	    // WARNING: removing the following jshint declaration and turning
	    // == into === to make JSHint happy will break functionality.
	    /* jshint eqnull:true, newcap:false, laxbreak:true, validthis:true */
	    /* jshint latedef: nofunc */

	    var spreadsheet = kendo.spreadsheet;
	    var calc = spreadsheet.calc;
	    var runtime = calc.runtime;
	    var defineFunction = runtime.defineFunction;
	    var CalcError = runtime.CalcError;
	    var packDate = runtime.packDate;
	    var unpackDate = runtime.unpackDate;
	    var isLeapYear = runtime.isLeapYear;
	    var daysInMonth = runtime.daysInMonth;
	    var _days_360 = runtime._days_360;

	    /* -----[ Spreadsheet API ]----- */

	    defineFunction("ERF", function(ll, ul) {
	        if (ul == null) {
	            return ERF(ll);
	        }
	        return ERF(ul) - ERF(ll);
	    }).args([
	        [ "lower_limit", "number" ],
	        [ "upper_limit", [ "or", "number", "null" ] ]
	    ]);

	    defineFunction("ERFC", ERFC).args([
	        [ "x", "number" ]
	    ]);

	    defineFunction("GAMMALN", GAMMALN).args([
	        [ "x", "number++" ]
	    ]);

	    defineFunction("GAMMA", GAMMA).args([
	        [ "x", "number" ]
	    ]);

	    defineFunction("GAMMA.DIST", GAMMA_DIST).args([
	        [ "x", "number+" ],
	        [ "alpha", "number++" ],
	        [ "beta", "number++" ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineFunction("GAMMA.INV", GAMMA_INV).args([
	        [ "p", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "alpha", "number++" ],
	        [ "beta", "number++" ]
	    ]);

	    defineFunction("NORM.S.DIST", NORM_S_DIST).args([
	        [ "z", "number" ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineFunction("NORM.S.INV", NORM_S_INV).args([
	        [ "p", [ "and", "number", [ "[between]", 0, 1 ] ] ]
	    ]);

	    defineFunction("NORM.DIST", NORM_DIST).args([
	        [ "x", "number" ],
	        [ "mean", "number" ],
	        [ "stddev", "number++" ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineFunction("NORM.INV", NORM_INV).args([
	        [ "p", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "mean", "number" ],
	        [ "stddev", "number++" ]
	    ]);

	    defineFunction("BETADIST", BETADIST).args([
	        [ "x", "number" ],
	        [ "alpha", "number++" ],
	        [ "beta", "number++" ],
	        [ "A", [ "or", "number", [ "null", 0 ] ] ],
	        [ "B", [ "or", "number", [ "null", 1 ] ] ],
	        [ "?", [ "assert", "$x >= $A", "NUM" ] ],
	        [ "?", [ "assert", "$x <= $B", "NUM" ] ],
	        [ "?", [ "assert", "$A < $B", "NUM" ] ]
	    ]);

	    defineFunction("BETA.DIST", BETA_DIST).args([
	        [ "x", "number" ],
	        [ "alpha", "number++" ],
	        [ "beta", "number++" ],
	        [ "cumulative", "logical" ],
	        [ "A", [ "or", "number", [ "null", 0 ] ] ],
	        [ "B", [ "or", "number", [ "null", 1 ] ] ],
	        [ "?", [ "assert", "$x >= $A", "NUM" ] ],
	        [ "?", [ "assert", "$x <= $B", "NUM" ] ],
	        [ "?", [ "assert", "$A < $B", "NUM" ] ]
	    ]);

	    defineFunction("BETA.INV", BETA_INV).args([
	        [ "p", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "alpha", "number++" ],
	        [ "beta", "number++" ],
	        [ "A", [ "or", "number", [ "null", 0 ] ] ],
	        [ "B", [ "or", "number", [ "null", 1 ] ] ]
	    ]);

	    defineFunction("CHISQ.DIST", chisq_left).args([
	        [ "x", "number+" ],
	        [ "deg_freedom", "integer++" ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineFunction("CHISQ.DIST.RT", chisq_right).args([
	        [ "x", "number+" ],
	        [ "deg_freedom", "integer++" ]
	    ]);

	    defineFunction("CHISQ.INV", chisq_left_inv).args([
	        [ "p", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "deg_freedom", "integer++" ]
	    ]);

	    defineFunction("CHISQ.INV.RT", chisq_right_inv).args([
	        [ "p", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "deg_freedom", "integer++" ]
	    ]);

	    defineFunction("CHISQ.TEST", function(ac, ex){
	        return chisq_test(ac.data, ex.data);
	    }).args([
	        [ "actual_range", "matrix" ],
	        [ "expected_range", "matrix" ],
	        [ "?", [ "assert", "$actual_range.width == $expected_range.width" ] ],
	        [ "?", [ "assert", "$actual_range.height == $expected_range.height" ] ]
	    ]);

	    defineFunction("EXPON.DIST", expon).args([
	        [ "x", "number+" ],
	        [ "lambda", "number++" ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineFunction("POISSON.DIST", poisson).args([
	        [ "x", "integer+" ],
	        [ "mean", "number+" ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineFunction("F.DIST", Fdist).args([
	        [ "x", "number+" ],
	        [ "deg_freedom1", "integer++" ],
	        [ "deg_freedom2", "integer++" ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineFunction("F.DIST.RT", Fdist_right).args([
	        [ "x", "number+" ],
	        [ "deg_freedom1", "integer++" ],
	        [ "deg_freedom2", "integer++" ]
	    ]);

	    defineFunction("F.INV", Finv).args([
	        [ "p", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "deg_freedom1", "integer++" ],
	        [ "deg_freedom2", "integer++" ]
	    ]);

	    defineFunction("F.INV.RT", Finv_right).args([
	        [ "p", [ "and", "number", [ "[between]", 0, 1 ] ] ],
	        [ "deg_freedom1", "integer++" ],
	        [ "deg_freedom2", "integer++" ]
	    ]);

	    defineFunction("F.TEST", Ftest).args([
	        [ "array1", [ "collect", "number", 1 ] ],
	        [ "array2", [ "collect", "number", 1 ] ],
	        [ "?", [ "assert", "$array1.length >= 2", "DIV/0" ] ],
	        [ "?", [ "assert", "$array2.length >= 2", "DIV/0" ] ]
	    ]);

	    defineFunction("FISHER", fisher).args([
	        [ "x", [ "and", "number", [ "(between)", -1, 1 ] ] ]
	    ]);

	    defineFunction("FISHERINV", fisherinv).args([
	        [ "y", "number" ]
	    ]);

	    defineFunction("T.DIST", Tdist).args([
	        [ "x", "number" ],
	        [ "deg_freedom", "integer++" ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineFunction("T.DIST.RT", Tdist_right).args([
	        [ "x", "number" ],
	        [ "deg_freedom", "integer++" ]
	    ]);

	    defineFunction("T.DIST.2T", Tdist_2tail).args([
	        [ "x", "number+" ],
	        [ "deg_freedom", "integer++" ]
	    ]);

	    defineFunction("T.INV", Tdist_inv).args([
	        [ "p", [ "and", "number", [ "(between]", 0, 1 ] ] ],
	        [ "deg_freedom", "integer++" ]
	    ]);

	    defineFunction("T.INV.2T", Tdist_2tail_inv).args([
	        [ "p", [ "and", "number", [ "(between]", 0, 1 ] ] ],
	        [ "deg_freedom", "integer++" ]
	    ]);

	    defineFunction("T.TEST", Tdist_test).args([
	        [ "array1", [ "collect", "number", 1 ] ],
	        [ "array2", [ "collect", "number", 1 ] ],
	        [ "tails", [ "and", "integer", [ "values", 1, 2 ] ] ],
	        [ "type", [ "and", "integer", [ "values", 1, 2, 3 ] ] ],
	        [ "?", [ "assert", "$type != 1 || $array1.length == $array2.length", "N/A" ] ],
	        [ "?", [ "assert", "$array1.length >= 2", "DIV/0" ] ],
	        [ "?", [ "assert", "$array2.length >= 2", "DIV/0" ] ]
	    ]);

	    defineFunction("CONFIDENCE.T", confidence_t).args([
	        [ "alpha", [ "and", "number", [ "(between)", 0, 1 ] ] ],
	        [ "standard_dev", "number++" ],
	        [ "size", [ "and", "integer++",
	                    [ "assert", "$size != 1", "DIV/0" ] ] ]
	    ]);

	    defineFunction("CONFIDENCE.NORM", confidence_norm).args([
	        [ "alpha", [ "and", "number", [ "(between)", 0, 1 ] ] ],
	        [ "standard_dev", "number++" ],
	        [ "size", [ "and", "integer++" ] ]
	    ]);

	    defineFunction("GAUSS", gauss).args([
	        [ "z", "number" ]
	    ]);

	    defineFunction("PHI", phi).args([
	        [ "x", "number" ]
	    ]);

	    defineFunction("LOGNORM.DIST", lognorm_dist).args([
	        [ "x", "number++" ],
	        [ "mean", "number" ],
	        [ "standard_dev", "number++" ],
	        [ "cumulative", "logical" ]
	    ]);

	    defineFunction("LOGNORM.INV", lognorm_inv).args([
	        [ "probability", [ "and", "number", [ "(between)", 0, 1 ] ] ],
	        [ "mean", "number" ],
	        [ "standard_dev", "number++" ]
	    ]);

	    defineFunction("PROB", prob).args([
	        [ "x_range", [ "collect", "number", 1 ] ],
	        [ "prob_range", [ "collect", "number", 1 ] ],
	        [ "lower_limit", "number" ],
	        [ "upper_limit", [ "or", "number", [ "null", "$lower_limit" ] ] ],
	        [ "?", [ "assert", "$prob_range.length == $x_range.length", "N/A" ] ]
	    ]);

	    defineFunction("SLOPE", slope).args([
	        [ "known_y", [ "collect", "number", 1 ] ],
	        [ "known_x", [ "collect", "number", 1 ] ],
	        [ "?", [ "assert", "$known_x.length == $known_y.length", "N/A" ] ],
	        [ "?", [ "assert", "$known_x.length > 0 && $known_y.length > 0", "N/A" ] ]
	    ]);

	    defineFunction("INTERCEPT", intercept).args([
	        [ "known_y", [ "collect", "number", 1 ] ],
	        [ "known_x", [ "collect", "number", 1 ] ],
	        [ "?", [ "assert", "$known_x.length == $known_y.length", "N/A" ] ],
	        [ "?", [ "assert", "$known_x.length > 0 && $known_y.length > 0", "N/A" ] ]
	    ]);

	    defineFunction("PEARSON", pearson).args([
	        [ "array1", [ "collect!", "anything", 1 ] ],
	        [ "array2", [ "collect!", "anything", 1 ] ],
	        [ "?", [ "assert", "$array2.length == $array1.length", "N/A" ] ],
	        [ "?", [ "assert", "$array2.length > 0 && $array1.length > 0", "N/A" ] ]
	    ]);

	    defineFunction("RSQ", rsq).args([
	        [ "known_y", [ "collect", "number", 1 ] ],
	        [ "known_x", [ "collect", "number", 1 ] ],
	        [ "?", [ "assert", "$known_x.length == $known_y.length", "N/A" ] ],
	        [ "?", [ "assert", "$known_x.length > 0 && $known_y.length > 0", "N/A" ] ],
	        [ "?", [ "assert", "$known_x.length != 1 && $known_y.length != 1", "N/A" ] ]
	    ]);

	    defineFunction("STEYX", steyx).args([
	        [ "known_y", [ "collect", "number", 1 ] ],
	        [ "known_x", [ "collect", "number", 1 ] ],
	        [ "?", [ "assert", "$known_x.length == $known_y.length", "N/A" ] ],
	        [ "?", [ "assert", "$known_x.length >= 3 && $known_y.length >= 3", "DIV/0" ] ]
	    ]);

	    defineFunction("FORECAST", forecast).args([
	        [ "x", "number" ],
	        [ "known_y", [ "collect", "number", 1 ] ],
	        [ "known_x", [ "collect", "number", 1 ] ],
	        [ "?", [ "assert", "$known_x.length == $known_y.length", "N/A" ] ],
	        [ "?", [ "assert", "$known_x.length > 0 && $known_y.length > 0", "N/A" ] ]
	    ]);

	    defineFunction("LINEST", linest).args([
	        [ "known_y", "matrix" ],
	        [ "known_x", [ "or", "matrix", "null" ] ],
	        [ "const", [ "or", "logical", [ "null", true ] ] ],
	        [ "stats", [ "or", "logical", [ "null", false ] ] ]
	    ]);

	    defineFunction("LOGEST", logest).args([
	        [ "known_y", "matrix" ],
	        [ "known_x", [ "or", "matrix", "null" ] ],
	        [ "const", [ "or", "logical", [ "null", true ] ] ],
	        [ "stats", [ "or", "logical", [ "null", false ] ] ]
	    ]);

	    defineFunction("TREND", trend).args([
	        [ "known_y", "matrix" ],
	        [ "known_x", [ "or", "matrix", "null" ] ],
	        [ "new_x", [ "or", "matrix", "null" ] ],
	        [ "const", [ "or", "logical", [ "null", true ] ] ]
	    ]);

	    defineFunction("GROWTH", growth).args([
	        [ "known_y", "matrix" ],
	        [ "known_x", [ "or", "matrix", "null" ] ],
	        [ "new_x", [ "or", "matrix", "null" ] ],
	        [ "const", [ "or", "logical", [ "null", true ] ] ]
	    ]);

	    defineFunction("FV", FV).args([
	        [ "rate", "number" ],
	        [ "nper", "number" ],
	        [ "pmt", [ "or", "number", [ "null", 0 ] ] ],
	        [ "pv", [ "or", "number", [ "null", 0 ] ] ],
	        [ "type", [ "or", [ "values", 0, 1 ], [ "null", 0 ] ] ],
	        [ "?", [ "assert", "$pmt || $pv" ] ]
	    ]);

	    defineFunction("PV", PV).args([
	        [ "rate", "number" ],
	        [ "nper", "number" ],
	        [ "pmt", [ "or", "number", [ "null", 0 ] ] ],
	        [ "fv", [ "or", "number", [ "null", 0 ] ] ],
	        [ "type", [ "or", [ "values", 0, 1 ], [ "null", 0 ] ] ]
	    ]);

	    defineFunction("PMT", PMT).args([
	        [ "rate", "number" ],
	        [ "nper", "number" ],
	        [ "pmt", "number" ],
	        [ "fv", [ "or", "number", [ "null", 0 ] ] ],
	        [ "type", [ "or", [ "values", 0, 1 ], [ "null", 0 ] ] ]
	    ]);

	    defineFunction("NPER", NPER).args([
	        [ "rate", "number" ],
	        [ "pmt", "number" ],
	        [ "pv", "number" ],
	        [ "fv", [ "or", "number", [ "null", 0 ] ] ],
	        [ "type", [ "or", [ "values", 0, 1 ], [ "null", 0 ] ] ]
	    ]);

	    defineFunction("RATE", RATE).args([
	        [ "nper", "number" ],
	        [ "pmt", [ "or", "number", [ "null", 0 ] ] ],
	        [ "pv", "number" ],
	        [ "fv", [ "or", "number", [ "null", 0 ] ] ],
	        [ "type", [ "or", [ "values", 0, 1 ], [ "null", 0 ] ] ],
	        [ "guess", [ "or", "number++", [ "null", 0.01 ] ] ],
	        [ "?", [ "assert", "$pmt || $fv" ] ]
	    ]);

	    defineFunction("IPMT", IPMT).args([
	        [ "rate", "number" ],
	        [ "per", "number++" ],
	        [ "nper", "number++" ],
	        [ "pv", "number" ],
	        [ "fv", [ "or", "number", [ "null", 0 ] ] ],
	        [ "type", [ "or", [ "values", 0, 1 ], [ "null", 0 ] ] ],
	        [ "?", [ "assert", "$per >= 1 && $per <= $nper" ] ]
	    ]);

	    defineFunction("PPMT", PPMT).args([
	        [ "rate", "number" ],
	        [ "per", "number++" ],
	        [ "nper", "number++" ],
	        [ "pv", "number" ],
	        [ "fv", [ "or", "number", [ "null", 0 ] ] ],
	        [ "type", [ "or", [ "values", 0, 1 ], [ "null", 0 ] ] ],
	        [ "?", [ "assert", "$per >= 1 && $per <= $nper" ] ]
	    ]);

	    defineFunction("CUMPRINC", CUMPRINC).args([
	        [ "rate", "number++" ],
	        [ "nper", "number++" ],
	        [ "pv", "number++" ],
	        [ "start_period", "number++" ],
	        [ "end_period", "number++" ],
	        [ "type", [ "or", [ "values", 0, 1 ], [ "null", 0 ] ] ],
	        [ "?", [ "assert", "$end_period >= $start_period", "NUM" ] ]
	    ]);

	    defineFunction("CUMIPMT", CUMIPMT).args([
	        [ "rate", "number++" ],
	        [ "nper", "number++" ],
	        [ "pv", "number++" ],
	        [ "start_period", "number++" ],
	        [ "end_period", "number++" ],
	        [ "type", [ "or", [ "values", 0, 1 ], [ "null", 0 ] ] ],
	        [ "?", [ "assert", "$end_period >= $start_period", "NUM" ] ]
	    ]);

	    defineFunction("NPV", NPV).args([
	        [ "rate", "number" ],
	        [ "values", [ "collect", "number" ] ],
	        [ "?", [ "assert", "$values.length > 0", "N/A" ] ]
	    ]);

	    defineFunction("IRR", IRR).args([
	        [ "values", [ "collect", "number", 1 ] ],
	        [ "guess", [ "or", "number", [ "null", 0.1 ] ] ]
	    ]);

	    defineFunction("EFFECT", EFFECT).args([
	        [ "nominal_rate", "number++" ],
	        [ "npery", "integer++" ]
	    ]);

	    defineFunction("NOMINAL", NOMINAL).args([
	        [ "effect_rate", "number++" ],
	        [ "npery", "integer++" ]
	    ]);

	    defineFunction("XNPV", XNPV).args([
	        [ "rate", "number" ],
	        [ "values", [ "collect", "number", 1 ] ],
	        [ "dates", [ "collect", "date", 1 ] ],
	        [ "?", [ "assert", "$values.length == $dates.length", "NUM" ] ]
	    ]);

	    defineFunction("XIRR", XIRR).args([
	        [ "values", [ "collect", "number", 1 ] ],
	        [ "dates", [ "collect", "date", 1 ] ],
	        [ "guess", [ "or", "number", [ "null", 0.1 ] ] ],
	        [ "?", [ "assert", "$values.length == $dates.length", "NUM" ] ]
	    ]);

	    defineFunction("ISPMT", ISPMT).args([
	        [ "rate", "number" ],
	        [ "per", "number++" ],
	        [ "nper", "number++" ],
	        [ "pv", "number" ],
	        [ "?", [ "assert", "$per >= 1 && $per <= $nper" ] ]
	    ]);

	    defineFunction("DB", DB).args([
	        [ "cost", "number" ],
	        [ "salvage", "number" ],
	        [ "life", "number++" ],
	        [ "period", "number++" ],
	        [ "month", [ "or", "number", [ "null", 12 ] ] ]
	    ]);

	    defineFunction("DDB", DDB).args([
	        [ "cost", "number" ],
	        [ "salvage", "number" ],
	        [ "life", "number++" ],
	        [ "period", "number++" ],
	        [ "factor", [ "or", "number", [ "null", 2 ] ] ]
	    ]);

	    defineFunction("SLN", SLN).args([
	        [ "cost", "number" ],
	        [ "salvage", "number" ],
	        [ "life", "number++" ]
	    ]);

	    defineFunction("SYD", SYD).args([
	        [ "cost", "number" ],
	        [ "salvage", "number" ],
	        [ "life", "number++" ],
	        [ "per", "number++" ]
	    ]);

	    defineFunction("VDB", VDB).args([
	        [ "cost", "number+" ],
	        [ "salvage", "number+" ],
	        [ "life", "number++" ],
	        [ "start_period", "number+" ],
	        [ "end_period", "number+" ],
	        [ "factor", [ "or", "number+", [ "null", 2 ] ] ],
	        [ "no_switch", [ "or", "logical", [ "null", false ] ] ],
	        [ "?", [ "assert", "$end_period >= $start_period", "NUM" ] ]
	    ]);

	    var COUPS_ARGS = [
	        [ "settlement", "date" ],
	        [ "maturity", "date" ],
	        [ "frequency", [ "and", "integer", [ "values", 1, 2, 4 ] ] ],
	        [ "basis", [ "or", [ "null", 0 ],
	                     [ "and", "integer", [ "values", 0, 1, 2, 3, 4 ] ] ] ],
	        [ "?", [ "assert", "$settlement < $maturity", "NUM" ] ]
	    ];

	    defineFunction("COUPDAYBS", COUPDAYBS).args(COUPS_ARGS);

	    defineFunction("COUPDAYS", COUPDAYS).args(COUPS_ARGS);

	    defineFunction("COUPDAYSNC", COUPDAYSNC).args(COUPS_ARGS);

	    defineFunction("COUPPCD", COUPPCD).args(COUPS_ARGS);

	    defineFunction("COUPNCD", COUPNCD).args(COUPS_ARGS);

	    defineFunction("COUPNUM", COUPNUM).args(COUPS_ARGS);

	    defineFunction("ACCRINTM", ACCRINTM).args([
	        [ "issue", "date" ],
	        [ "settlement", "date" ],
	        [ "rate", "number++" ],
	        [ "par", [ "or", [ "null", 1000 ], "number++" ] ],
	        [ "basis", [ "or", [ "null", 0 ],
	                     [ "and", "integer", [ "values", 0, 1, 2, 3, 4 ] ] ] ],
	        [ "?", [ "assert", "$issue < $settlement", "NUM" ] ]
	    ]);

	    defineFunction("ACCRINT", ACCRINT).args([
	        [ "issue", "date" ],
	        [ "first_interest", "date" ],
	        [ "settlement", "date" ],
	        [ "rate", "number++" ],
	        [ "par", [ "or", [ "null", 1000 ], "number++" ] ],
	        [ "frequency", [ "and", "integer", [ "values", 1, 2, 4 ] ] ],
	        [ "basis", [ "or", [ "null", 0 ],
	                     [ "and", "integer", [ "values", 0, 1, 2, 3, 4 ] ] ] ],
	        [ "calc_method", [ "or", "logical", [ "null", true ] ] ],
	        [ "?", [ "assert", "$issue < $settlement", "NUM" ] ]
	    ]);

	    defineFunction("DISC", DISC).args([
	        [ "settlement", "date" ],
	        [ "maturity", "date" ],
	        [ "pr", "number++" ],
	        [ "redemption", "number++" ],
	        [ "basis", [ "or", [ "null", 0 ],
	                     [ "and", "integer", [ "values", 0, 1, 2, 3, 4 ] ] ] ],
	        [ "?", [ "assert", "$settlement < $maturity", "NUM" ] ]
	    ]);

	    defineFunction("INTRATE", INTRATE).args([
	        [ "settlement", "date" ],
	        [ "maturity", "date" ],
	        [ "investment", "number++" ],
	        [ "redemption", "number++" ],
	        [ "basis", [ "or", [ "null", 0 ],
	                     [ "and", "integer", [ "values", 0, 1, 2, 3, 4 ] ] ] ],
	        [ "?", [ "assert", "$settlement < $maturity", "NUM" ] ]
	    ]);

	    defineFunction("RECEIVED", RECEIVED).args([
	        [ "settlement", "date" ],
	        [ "maturity", "date" ],
	        [ "investment", "number++" ],
	        [ "discount", "number++" ],
	        [ "basis", [ "or", [ "null", 0 ],
	                     [ "and", "integer", [ "values", 0, 1, 2, 3, 4 ] ] ] ],
	        [ "?", [ "assert", "$settlement < $maturity", "NUM" ] ]
	    ]);

	    defineFunction("PRICE", PRICE).args([
	        [ "settlement", "date" ],
	        [ "maturity", "date" ],
	        [ "rate", "number++" ],
	        [ "yld", "number++" ],
	        [ "redemption", "number++" ],
	        [ "frequency", [ "and", "integer", [ "values", 1, 2, 4 ] ] ],
	        [ "basis", [ "or", [ "null", 0 ],
	                     [ "and", "integer", [ "values", 0, 1, 2, 3, 4 ] ] ] ],
	        [ "?", [ "assert", "$settlement < $maturity", "NUM" ] ]
	    ]);

	    defineFunction("PRICEDISC", PRICEDISC).args([
	        [ "settlement", "date" ],
	        [ "maturity", "date" ],
	        [ "discount", "number++" ],
	        [ "redemption", "number++" ],
	        [ "basis", [ "or", [ "null", 0 ],
	                     [ "and", "integer", [ "values", 0, 1, 2, 3, 4 ] ] ] ],
	        [ "?", [ "assert", "$settlement < $maturity", "NUM" ] ]
	    ]);

	    /* -----[ utils ]----- */

	    // function resultAsMatrix(f) {
	    //     return function() {
	    //         var a = f.apply(this, arguments);
	    //         return this.asMatrix(a);
	    //     };
	    // }

	    /* -----[ definitions: statistical functions ]----- */

	    var MAX_IT = 300,     // Maximum allowed number of iterations
	        EPS = 2.2204e-16, // Relative accuracy; 1-3*(4/3-1) = 2.220446049250313e-16
	        FP_MIN = 1.0e-30, // Near the smallest representable as floating-point, number.
	        f_abs = Math.abs;

	    function ERF(x) {
	        if (f_abs(x) >= 3.3) {
	            return 1 - ERFC(x);
	        }
	        var S = x > 0 ? 1 : -1;
	        if (S == -1) {
	            x = -x;
	        }
	        var m = 0, an = 1;
	        for (var n = 1; n < 100; n++) {
	            m += an;
	            an *= 2*x*x/(2*n+1);
	        }
	        return S*2/Math.sqrt(Math.PI)*x*Math.exp(-x*x)*m;
	    }

	    function ERFC(x) {
	        if (f_abs(x) < 3.3) {
	            return 1 - ERF(x);
	        }
	        var s = 1;
	        if (x < 0) {
	            s = -1;
	            x = -x;
	        }
	        var frac = x;
	        for (var n = 8; n >= 1; n -= 0.5) {
	            frac = x + n/frac;
	        }
	        frac = 1 / (x + frac);
	        return s == 1
	            ? Math.exp(-x*x)/Math.sqrt(Math.PI)*frac
	            : 2 - Math.exp(-x*x)/Math.sqrt(Math.PI)*frac;
	    }

	    function GAMMALN(x) { // Returns the value ln[Γ(x)] for x > 0.
	        var cof = [
	            1.000000000190015, 76.18009172947146, -86.50532032941677,
	            24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5
	        ];
	        var y = x, tmp = x + 5.5, ser = cof[0];
	        tmp -= (x + 0.5) * Math.log(tmp);
	        for (var j = 1; j <= 6; j++) {
	            y += 1;
	            ser += cof[j] / y;
	        }
	        return -tmp + Math.log(Math.sqrt(2*Math.PI) * ser / x); // log(Γ(x)) = log(Γ(x+1)) - log(x)
	    }

	    function GAMMA(x) { // returns Infinity for 0 or negative _integer argument.
	        if (x > 0) {
	            return Math.exp(GAMMALN(x));
	        }
	        var pi = Math.PI, y = -x; // For x<0 we use the reflection formula: Γ(x)Γ(1-x) = PI / sin(PI*x)
	        return -pi / (y*GAMMA(y)*Math.sin(pi*y));
	    }

	    function BETALN(a, b) {
	        return GAMMALN(a) + GAMMALN(b) - GAMMALN(a+b);
	    }

	    function BETA(a, b) {
	        return Math.exp(BETALN(a, b));
	    }

	    function gamma_inc(a, x) { // returns the normalized incomplete gamma function P(a, x); x > 0.
	        return x < a+1.0 ? g_series(a, x) : 1 - g_contfrac(a, x);
	    }

	    function g_series(a, x) { // evaluate P(a, x) by its series representation (converges quickly for x < a+1).
	        var sum = 1/a,
	            frac = sum,
	            ap = a;
	        var gln = GAMMALN(a), n;
	        for (n = 1; n <= MAX_IT; n++) {
	            ap++;
	            frac *= x/ap;
	            sum += frac;
	            if (f_abs(frac) < f_abs(sum)*EPS) {
	                break; // already the last frac is too small versus the current sum value
	            }
	        }
	        return sum * Math.exp(-x + a*Math.log(x) - gln); // e^{-x} * x^a * Γ(a) * sum
	    }

	    function g_contfrac(a, x) { // Q(a, x) by its continued fraction representation (converges quickly for x > a + 1); modified Lentz’s method (Numerical Recipes (The Art of Scientific Computing), 2rd Edition $5.2)
	        var f = FP_MIN, c = f, d = 0, aj = 1, bj = x + 1 - a;
	        var gln = GAMMALN(a);
	        for (var i = 1; i <= MAX_IT; i++) {
	            d = bj + aj * d;
		    if (f_abs(d) < FP_MIN) {
	                d = FP_MIN;
	            }
		    c = bj + aj / c;
		    if (f_abs(c) < FP_MIN) {
	                c = FP_MIN;
	            }
		    d = 1 / d;
		    var delta = c * d;
		    f *= delta;
	    	    if (f_abs(delta - 1) < EPS) {
	                break;
	            }
		    bj += 2;
		    aj = -i * (i - a);
		}
		return f * Math.exp(-x - gln + a * Math.log(x));
	    }

	    function GAMMA_DIST(x, a, b, cumulative) { // a > 0, b > 0; x >= 0
	        if (!cumulative) {
	            return Math.pow(x/b, a-1)*Math.exp(-x/b)/(b*GAMMA(a)); // the PDF of the Gamma distribution
	        }
	        return gamma_inc(a, x/b); // (else) compute the CDF (using the incomplete Gamma function)
	    }

	    function GAMMA_INV(p, a, b) { // the quantile function of the Gamma distribution
		if (p === 0) {
	            return 0;
	        }
		if (p == 1) {
	            return Infinity;
	        }
		var m = 0, M = 10, x = 0, ab = a*b;
		if (ab > 1) {
	            M *= ab;
	        }
		for (var i = 0; i < MAX_IT; i++) {
		    x = 0.5*(m + M); // console.log(x);
		    var q = GAMMA_DIST(x, a, b, true);
		    if (f_abs(p - q) < 1e-16) {
	                break;
	            }
		    if (q > p) {
	                M = x;
	            } else {
	                m = x;
	            }
		}
		return x;
	    }

	    function NORM_S_DIST(x, cumulative) {
	        if (!cumulative) {
	            return Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);
	        }
	        return 0.5 + 0.5*ERF(x/Math.sqrt(2));
	    }

	    function NORM_S_INV(p) { // see [1] $26.2.3 and http://home.online.no/~pjacklam/notes/invnorm/#References
	        // Coefficients in rational approximations.
	        var a = [-3.969683028665376e+01,  2.209460984245205e+02,
	                 -2.759285104469687e+02,  1.383577518672690e+02,
	                 -3.066479806614716e+01,  2.506628277459239e+00],
	            b = [-5.447609879822406e+01,  1.615858368580409e+02,
	                 -1.556989798598866e+02,  6.680131188771972e+01,
	                 -1.328068155288572e+01],
	            c = [-7.784894002430293e-03, -3.223964580411365e-01,
	                 -2.400758277161838e+00, -2.549732539343734e+00,
	                 4.374664141464968e+00,  2.938163982698783e+00],
	            d = [ 7.784695709041462e-03,  3.224671290700398e-01,
	                  2.445134137142996e+00,  3.754408661907416e+00];
	        // Define break-points.
	        var plow  = 0.02425,
	            phigh = 1 - plow;
	        var q, r;
	        // Rational approximation for lower region:
	        if (p < plow) {
	            q = Math.sqrt(-2*Math.log(p));
	            return (((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
	        }
	        // Rational approximation for upper region:
	        if (phigh < p) {
	            q = Math.sqrt(-2*Math.log(1-p));
	            return -(((((c[0]*q+c[1])*q+c[2])*q+c[3])*q+c[4])*q+c[5]) / ((((d[0]*q+d[1])*q+d[2])*q+d[3])*q+1);
	        }
	        // Rational approximation for central region:
	        q = p - 0.5;
	        r = q*q;
	        return (((((a[0]*r+a[1])*r+a[2])*r+a[3])*r+a[4])*r+a[5])*q / (((((b[0]*r+b[1])*r+b[2])*r+b[3])*r+b[4])*r+1);
	    }

	    function NORM_DIST(x, m, s, cumulative) {
	        if (!cumulative) {
	            return Math.exp(-(x-m)*(x-m)/(2*s*s))/(s*Math.sqrt(2*Math.PI)); // NORM_S_DIST((x-m)/s)/s;
	        }
	        return NORM_S_DIST((x-m)/s, true);
	    }

	    function NORM_INV(p, m, s) {
	        return m + s*NORM_S_INV(p);
	    }

	    function betastd_pdf(x, a, b) {
	        return Math.exp((a-1)*Math.log(x) + (b-1)*Math.log(1-x) - BETALN(a, b));
	    }

	    function betastd_cdf(x, a, b) {
	        var k = Math.exp(a*Math.log(x) + b*Math.log(1-x) - BETALN(a, b));
	        return x < (a+1)/(a+b+2) ? k*beta_lentz(a, b, x)/a : 1 - k*beta_lentz(b, a, 1-x)/b;
	    }

	    function beta_lentz(a, b, x) { // estimates continued fraction by modified Lentz’s method ([2] $8.17.22)
	        var m, m2;
	        var aa, c, d, del, h, qab, qam, qap;
	        qab = a + b; // These q’s will be used in factors that occur in the coefficients d_n
	        qap = a + 1;
	        qam = a - 1;
	        c = 1; // First step of Lentz’s method.
	        d = 1 - qab * x / qap;
	        if (f_abs(d) < FP_MIN) {
	            d = FP_MIN;
	        }
	        d = 1/d;
	        h = d;
	        for (m = 1; m <= MAX_IT; m++) {
	            m2 = 2*m;
	            aa = m*(b - m)*x / ((qam + m2)*(a + m2));
	            d = 1 + aa*d; // One step (the even one) of the recurrence.
	            if (f_abs(d) < FP_MIN) {
	                d = FP_MIN;
	            }
	            c = 1 + aa/c;
	            if (f_abs(c) < FP_MIN) {
	                c = FP_MIN;
	            }
	            d = 1/d;
	            h *= d*c;
	            aa = -(a + m)*(qab + m)*x / ((a + m2)*(qap + m2));
	            d = 1 + aa*d; // Next step of the recurrence (the odd one).
	            if (f_abs(d) < FP_MIN) {
	                d = FP_MIN;
	            }
	            c = 1 + aa/c;
	            if (f_abs(c) < FP_MIN) {
	                c = FP_MIN;
	            }
	            d = 1/d;
	            del = d*c;
	            h *= del;
	            if (f_abs(del - 1) < EPS) {
	                break;
	            }
	        }
	        return h; // if(m > MAX_IT) throw new Error("a or b too big, or MAX_IT too small");
	    }

	    function betastd_inv(p, a, b) { // the quantile function of the standard Beta distribution
		var m = 0, M = 1, x = 0;
		for (var i = 0; i < MAX_IT; i++) {
		    x = 0.5*(m + M);
		    var q = betastd_cdf(x, a, b);
		    if (f_abs(p - q) < EPS) {
	                break;
	            }
		    if (q > p) {
	                M = x;
	            } else {
	                m = x;
	            }
		}
		return x;
	    }

	    function BETADIST(x, a, b, m, M) {
	        return betastd_cdf((x-m)/(M-m), a, b);
	    }

	    function BETA_DIST(x, a, b, cdf, m, M) {
	        if (cdf) {
	            return betastd_cdf((x-m)/(M-m), a, b);
	        }
	        return betastd_pdf((x-m)/(M-m), a, b) / (M-m);
	    }

	    function BETA_INV(p, a, b, m, M) {
	        return m + (M-m)*betastd_inv(p, a, b);
	    }

	    function chisq_left(x, n, cds) {  // CHISQ.DIST(x,deg_freedom,cumulative)
	        return GAMMA_DIST(x, n/2, 2, cds);
	    }

	    function chisq_right(x, n) { // CHISQ.DIST.RT(x,deg_freedom)
	        return 1 - chisq_left(x, n, true);
	    }

	    function chisq_left_inv(p, n) { // CHISQ.INV( probability, degrees_freedom )
	        return GAMMA_INV(p, n/2, 2);
	    }

	    function chisq_right_inv(p, n) { // CHISQ.INV.RT(probability,deg_freedom)
	        return chisq_left_inv(1-p, n);
	    }

	    function chisq_test(obsv, expect) {
	        var rows = obsv.length, cols = obsv[0].length;
	        var x = 0, i, j;
	        for (i = 0; i < rows; i++) {
	            for (j = 0; j < cols; j++) {
	                var eij = expect[i][j];
	                var delta = obsv[i][j] - eij;
	                delta *= delta;
	                x += delta/eij;
	            }
	        }
	        var n = (rows - 1)*(cols - 1);
	        return chisq_right(x, n);
	    }

	    function expon(x, r, cdf) { // EXPON.DIST(x, lambda, cumulative)
	        if (cdf) {
	            return 1 - Math.exp(-r*x);
	        }
	        return r * Math.exp(-r*x);
	    }

	    function poisson(k, m, cdf) { // POISSON.DIST(x, mean, cumulative)
	        if (cdf) {
	            return 1 - chisq_left(2*m, 2*(k+1), true);
	        }
	        //return chisq_left(2*m, 2*k, true) - chisq_left(2*m, 2*(k+1), true);
	        var lnf = 0;
	        for (var i = 2; i <= k; i++) {
	            lnf += Math.log(i); // compute log(k!)
	        }
	        return Math.exp(k*Math.log(m) - m - lnf);
	    }

	    function Fdist(x, n, d, cdf) { //F.DIST(x,deg_freedom1,deg_freedom2,cumulative)
	        if (cdf) {
	            return betastd_cdf(n*x/(d+n*x), n/2, d/2);
	        }
	        var u = n/d;
	        n /= 2; d /= 2;
	        return u/BETA(n, d) * Math.pow(u*x, n-1) / Math.pow(1+u*x, n+d);
	    }

	    function Fdist_right(x, n, d) { // F.DIST.RT(x,deg_freedom1,deg_freedom2)
	        return 1 - Fdist(x, n, d, true);
	    }

	    function Finv_right(p, n, d) { // F.INV.RT(probability,deg_freedom1,deg_freedom2
	        return d/n*(1/BETA_INV(p, d/2, n/2, 0, 1) - 1);
	    }

	    function Finv(p, n, d) { // F.INV(probability,deg_freedom1,deg_freedom2
	        return d/n*(1/BETA_INV(1-p, d/2, n/2, 0, 1) - 1);
	    }

	    function _mean(arr) {
	        var me = 0, n = arr.length;
	        for (var i = 0; i < n; i++) {
	            me += arr[i];
	        }
	        return me / n;
	    }

	    function _var_sq(arr, m) { // returns the (n-1)-part of the sum of the squares of deviations from m (= VAR)
	        var v = 0, n = arr.length;
	        for (var i = 0; i < n; i++) {
	            var delta = arr[i] - m;
	            v += delta*delta;
	        }
	        return v / (n-1);
	    }

	    function Ftest(arr1, arr2) { // F.TEST(array1,array2)
	        var n1 = arr1.length - 1, n2 = arr2.length - 1;
	        var va1 = _var_sq(arr1, _mean(arr1)),
	            va2 = _var_sq(arr2, _mean(arr2));
	        if (!va1 || !va2) {
	            throw new CalcError("DIV/0");
	        }
	        return 2*Fdist(va1 / va2, n1, n2, true);
	    }

	    function fisher(x) { // FISHER(x)
	        return 0.5*Math.log((1+x)/(1-x));
	    }

	    function fisherinv(x) { // FISHERINV(x)
	        var e2 = Math.exp(2*x);
	        return (e2 - 1)/(e2 + 1);
	    }

	    function Tdist(x, n, cdf) { // T.DIST(x,deg_freedom, cumulative)
	        if (cdf) {
	            return 1 - 0.5*betastd_cdf(n/(x*x+n), n/2, 0.5);
	        }
	        return 1/(Math.sqrt(n)*BETA(0.5, n/2)) * Math.pow(1 + x*x/n, -(n+1)/2);
	    }

	    function Tdist_right(x, n) { // T.DIST.RT(x,deg_freedom)
	        return 1 - Tdist(x, n, true);
	    }

	    function Tdist_2tail(x, n) { // T.DIST.2T(x,deg_freedom)
	        if (x < 0) {
	            x = -x;
	        }
	        return 2*Tdist_right(x, n);
	    }

	    function Tdist_inv(p, n) { // T.INV(probability,deg_freedom)
	        var x = betastd_inv(2*Math.min(p, 1-p), n/2, 0.5); // ibetainv();
	        x = Math.sqrt(n * (1 - x) / x);
	        return (p > 0.5) ? x : -x;
	    }

	    function Tdist_2tail_inv(p, n) { // T.INV.2T(probability,deg_freedom)
	        // T2 = 2T_r = p => T_r(x,n) = p/2 => 1 - T(x,n,true) = p/2 => x = T^-1(1-p/2, n)
	        return Tdist_inv(1-p/2, n);
	    }

	    function Tdist_test(gr1, gr2, tail, type) { // T.TEST(array1,array2,tails,type)
	        var n1 = gr1.length, n2 = gr2.length;
	        var t_st, df; // the t-statistic and the "degree of freedom"
	        if (type == 1) { // paired (dependent) samples
	            var d = 0, d2 = 0;
	            for (var i = 0; i < n1; i++) {
	                var delta = gr1[i] - gr2[i];
	                d += delta;
	                d2 += delta*delta;
	            }
	            var md = d/n1; //, md2 = d2 / n1;
	            t_st = md / Math.sqrt((d2 - d*md)/(n1*(n1-1))); // has a "Student T" distribution
	            return tail == 1 ? Tdist_right(t_st, n1-1) : Tdist_2tail(t_st, n1-1);
	        }
	        // unpaired (independent) samples
	        var m1 = _mean(gr1), m2 = _mean(gr2),
	            v1 = _var_sq(gr1, m1), v2 = _var_sq(gr2, m2);
	        if (type == 3) { // unpaired, unequal variances
	            var u1 = v1/n1, u2 = v2/n2, u = u1 + u2;
	            var q1 = u1/u, q2 = u2/u; // u==0 must be invalidated
	            df = 1/(q1*q1/(n1-1) + q2*q2/(n2-1));
	            t_st =  f_abs(m1-m2)/Math.sqrt(u);
	            return tail == 1 ? Tdist_right(t_st, df) : Tdist_2tail(t_st, df);
	        }
	        else { // (type == 2) unpaired, equal variances ("equal" in the sense that there is no significant difference in variance in both groups - a prealable F-test could revealed that)
	            df = n1 + n2 - 2;
	            t_st = f_abs(m1-m2)*Math.sqrt(df*n1*n2/((n1+n2)*((n1-1)*v1+(n2-1)*v2)));
	            return tail == 1 ? Tdist_right(t_st, df) : Tdist_2tail(t_st, df);
	        }
	    }

	    function confidence_t(alpha, stddev, size) { // CONFIDENCE.T(alpha,standard_dev,size)
	        return -Tdist_inv(alpha/2, size-1)*stddev/Math.sqrt(size);
	    }

	    function confidence_norm(alpha, stddev, size) { // CONFIDENCE.NORM(alpha,standard_dev,size)
	        return -NORM_S_INV(alpha/2)*stddev/Math.sqrt(size);
	    }

	    function gauss(z) { // GAUSS(z)
	        return NORM_S_DIST(z, true) - 0.5;
	    }

	    function phi(x) { // PHI(x)
	        return NORM_S_DIST(x);
	    }

	    function lognorm_dist(x, m, s, cumulative) { // LOGNORM.DIST(x,mean,standard_dev,cumulative)
	        if (cumulative) {
	            return 0.5 + 0.5*ERF((Math.log(x)-m)/(s*Math.sqrt(2)));
	        }
	        var t = Math.log(x)-m;
	        return Math.exp(-t*t/(2*s*s))/(x*s*Math.sqrt(2*Math.PI));
	    }

	    function lognorm_inv(p, m, s) { //LOGNORM.INV(probability, mean, standard_dev)
	        return Math.exp(NORM_INV(p, m, s));
	    }

	    function prob(x_, p_, lw, up) { //PROB(x_range, prob_range, [lower_limit], [upper_limit])
	        var n = x_.length;
	        var s = 0, i;
	        for (i = 0; i < n; i++) {
	            if (p_[i] <= 0 || p_[i] > 1) {
	                throw new CalcError("NUM");
	            }
	            s += p_[i];
	        }
	        if (s != 1) {
	            throw new CalcError("NUM");
	        }
	        var res = 0;
	        for (i = 0; i < n; i++) {
	            var x = x_[i];
	            if (x >= lw && x <= up) {
	                res += p_[i];
	            }
	        }
	        return res;
	    }

	    function slope(y_, x_) { // SLOPE(known_y's, known_x's)
	        var mx = _mean(x_), my = _mean(y_), b1 = 0, b2 = 0;
	        for (var i = 0, n = y_.length; i < n; i++) {
	            var t = x_[i] - mx;
	            b1 += t*(y_[i] - my);
	            b2 += t*t;
	        }
	        return b1/b2;
	    }

	    function intercept(y_, x_) { // INTERCEPT(known_y's, known_x's)
	        var mx = _mean(x_), my = _mean(y_);
	        // return my - mx*slope(y_, x_);  //but repeating the calls for _mean()
	        var b1 = 0, b2 = 0;
	        for (var i = 0, n = y_.length; i < n; i++) {
	            var t = x_[i] - mx;
	            b1 += t*(y_[i] - my);
	            b2 += t*t;
	        }
	        return my - b1*mx/b2;
	    }

	    function pearson(x_, y_) { // PEARSON(array1, array2)
	        whipNumberArrays(x_, y_);
	        var mx = _mean(x_), my = _mean(y_);
	        var s1 = 0, s2 = 0, s3 = 0;
	        for(var i = 0, n = x_.length; i < n; i++) {
	            var t1 = x_[i] - mx, t2 = y_[i] - my;
	            s1 += t1*t2;
	            s2 += t1*t1;
	            s3 += t2*t2;
	        }
	        return s1/Math.sqrt(s2*s3);
	    }

	    function rsq(x_, y_) { // RSQ(known_y's,known_x's)
	        var r = pearson(x_, y_);
	        return r*r;
	    }

	    function steyx(y_, x_) { //STEYX(known_y's, known_x's)
	        var n = x_.length;
	        var mx = _mean(x_), my = _mean(y_);
	        var s1 = 0, s2 = 0, s3 = 0;
	        for (var i = 0; i < n; i++) {
	            var t1 = x_[i] - mx, t2 = y_[i] - my;
	            s1 += t2*t2;
	            s2 += t1*t2;
	            s3 += t1*t1;
	        }
	        return Math.sqrt((s1 - s2*s2/s3)/(n-2));
	    }

	    function forecast(x, y_, x_) { //FORECAST(x, known_y's, known_x's)
	        var mx = _mean(x_), my = _mean(y_);
	        var s1 = 0, s2 = 0;
	        for (var i = 0, n = x_.length; i < n; i++) {
	            var t1 = x_[i] - mx, t2 = y_[i] - my;
	            s1 += t1*t2;
	            s2 += t1*t1;
	        }
	        if (s2 === 0) {
	            throw new CalcError("N/A");
	        }
	        var b = s1/s2, a = my - b*mx;
	        return a + b*x;
	    }

	    function _mat_mean(Mat) { // returns the mean value of a Matrix(n, 1)
	        var n = Mat.height, sum = 0;
	        for (var i=0; i < n; i++) {
	            sum += Mat.data[i][0];
	        }
	        return sum/n;
	    }

	    function _mat_devsq(Mat, mean) { // returns the sum of squares of deviations for a Matrix(n, 1)
	        var n = Mat.height, sq = 0;
	        for (var i=0; i < n; i++) {
	            var x = Mat.data[i][0] - mean;
	            sq += x*x;
	        }
	        return sq;
	    }

	    function linest(Y, X, konst, stats) { // LINEST(known_y's, [known_x's], [const], [stats])
	        var i = 0;

	        if (!X) {
	            // if not passed, X should default to array {1, 2, 3, ...} (same size as Y)
	            X = Y.map(function(){ return ++i; });
	        }

	        if (konst) { // adding 1's column is unnecessary when const==false (meaning that y_intercept==0)
	            X = X.clone();
	            X.eachRow(function(row){
	                X.data[row].unshift(1);
	            });
	            ++X.width;
	        }

	        var Xt = X.transpose();
	        var B = Xt.multiply(X).inverse().multiply(Xt).multiply(Y); // the last square estimate of the coefficients
	        var line_1 = [];
	        for (i = B.height-1; i >= 0; i--) {
	            line_1.push(B.data[i][0]); // regression coefficients ('slopes') and the y_intercept
	        }
	        if (!konst) {
	            line_1.push(0); // display 0 for y_intercept, when const==false
	        }
	        if (!stats) {
	            return this.asMatrix([ line_1 ]); // don't display statistics about the regression, when stats==false
	        }

	        var Y1 = X.multiply(B); // the predicted Y values
	        var y_y1 = Y.adds(Y1, true); // the errors of the predictions (= Y - Y1)
	        var mp = !konst? 0 : _mat_mean(Y1);
	        var SSreg = _mat_devsq(Y1, mp); // The regression sum of squares
	        var me = !konst? 0 : _mat_mean(y_y1);
	        var SSresid = _mat_devsq(y_y1, me); // The residual sum of squares
	        var line_5 = [];
	        line_5.push(SSreg, SSresid);
	        var R2 = SSreg / (SSreg + SSresid); // The coefficient of determination
	        var degfre = Y.height - X.width; // The degrees of freedom
	        var err_est = Math.sqrt(SSresid / degfre); // The standard error for the y estimate
	        var line_3 = [];
	        line_3.push(R2, err_est);
	        var F_sta = !konst ? (R2/X.width)/((1-R2)/(degfre)) : (SSreg/(X.width-1))/(SSresid/degfre); // The F statistic
	        var line_4 = [];
	        line_4.push(F_sta, degfre);
	        var SCP = Xt.multiply(X).inverse();
	        var line_2 = [];
	        for (i=SCP.height-1; i >= 0; i--) { // The standard errors (of coefficients an y-intercept)
	            line_2.push(Math.sqrt(SCP.data[i][i]*SSresid/degfre));
	        }
	        return this.asMatrix([line_1, line_2, line_3, line_4, line_5]);
	    }

	    function logest(Y, X, konst, stats) { // LOGEST(known_y's, [known_x's], [const], [stats])
	        return linest.call(this, Y.map(Math.log), X, konst, stats).map(Math.exp);
	    }

	    function trend(Y, X, W, konst) { // TREND(known_y's, [known_x's], [new_x's], [const])
	        var i = 0;

	        if (!X) {
	            // if not passed, X should default to array {1, 2, 3, ...} (same size as Y)
	            X = Y.map(function(){ return ++i; });
	        }

	        if (konst) { // adding 1's column is unnecessary when const==false (meaning that y_intercept==0)
	            X = X.clone();
	            X.eachRow(function(row){
	                X.data[row].unshift(1);
	            });
	            ++X.width;
	        }

	        var Xt = X.transpose();
	        var B = Xt.multiply(X).inverse().multiply(Xt).multiply(Y); // the last square estimate of the coefficients

	        if (!W) {
	            W = X;
	        } else {
	            if (konst) { // for non-zero y_intercept
	                W = W.clone();
	                W.eachRow(function(row){
	                    W.data[row].unshift(1);
	                });
	                ++W.width;
	            }
	        }
	        return W.multiply(B); // the predicted Y values for the W values
	    }

	    function growth(Y, X, new_X, konst) { // GROWTH(known_y's, [known_x's], [new_x's], [const])
	        // = EXP(TREND(LN(Y_), X_, new_X, const))
	        return trend.call(this, Y.map(Math.log), X, new_X, konst).map(Math.exp);
	    }

	    /*
	      [1] Handbook of Mathematical Functions (NIST, 1964-2010):
	      https://en.wikipedia.org/wiki/Abramowitz_and_Stegun
	      http://dlmf.nist.gov/
	      http://www.aip.de/groups/soe/local/numres/

	      [2] https://en.wikibooks.org/wiki/Statistics/Numerical_Methods/Numerics_in_Excel
	    */

	    /* -----[ financial functions ]----- */

	    //// find the root of a function known an initial guess (Newton's method) ////
	    function root_newton(func, guess, max_it, eps) { // func(x) must return [value_F(x), value_F'(x)]
	        var MAX_IT = max_it || 20, // maximum number of iterations
	            EPS = eps || 1E-7; // accuracy
	        var root = guess;
	        for (var j = 1; j <= MAX_IT; j++) {
	            var f_d = func(root),
	                f = f_d[0], // the value of the function
	                df = f_d[1]; // the value of the derivative
	            var dx = f / df;
	            root -= dx;
	            if (Math.abs(dx) < EPS) {
	                return root;
	            }
	        }
	        return new CalcError("NUM");
	    }


	    /* https://support.office.com/en-us/article/PV-function-23879d31-0e02-4321-be01-da16e8168cbd
	       if(rate==0):
	       PMT * nper + PV + FV = 0
	       else: //the basic equation (with six variables) implied in financial problems
	       PV * (1+rate)^nper + PMT * (1+rate*type) * ((1+rate)^nper-1) / rate + FV = 0         [1]
	    */



	    //// FV (final or future value) ////
	    /* I initially invest £1000 in a saving scheme and then at the end of each month I invest an
	       extra £50. If the interest rate is 0.5% per month and I continue this process for two year,
	       how much will my saving be worth: =FV(0.005, 24, -50, -1000, 0) */
	    function FV(rate, nper, pmt, pv, type) { // FV(rate,nper,pmt,[pv],[type])
	        var h1 = Math.pow(1+rate, nper);
	        var h2 = rate ? (h1 - 1)/rate : nper;
	        return -(pv * h1 + pmt * h2 * (1 + rate*type));
	    }

	    //// PV (present value of investment) ////
	    /* If I wish to accumulate £5000 in four years time by depositing £75 per month in a fixed
	       rate account with interest rate of 0.4% per month, what initial investment must I also
	       make: =PV(0.004, 4*12, -75, 5000, 0) */
	    function PV(rate, nper, pmt, fv, type) { // PV(rate, nper, pmt, [fv], [type])
	        if (!rate) {
	            return -fv - pmt*nper;
	        }
	        var h1 = Math.pow(1+rate, nper);
	        return -(fv + pmt * (h1 - 1)/rate * (1 + rate*type)) / h1;
	    }

	    //// PMT monthly payments (= principal part PPMT + interest part IPMT) ////
	    /* How much will the monthly repayments be if I borrow £100,000 over 20 years with an
	       effective monthly interest rate is 0.5%: =PMT(0.005, 12*20, 100000, 0, 0) */
	    function PMT(rate, nper, pv, fv, type) { // PMT(rate, nper, pv, [fv], [type])
	        if (!rate) {
	            return -(fv + pv)/nper;
	        }
	        var h1 = Math.pow(1+rate, nper);
	        return -rate*(fv + pv*h1)/((1 + rate*type)*(h1 - 1));
	    }

	    //// NPER (number of periods for an investment) ////
	    /* How long would it take me to pay off a loan of £10,000 at a rate of 0.5% per month if I
	       can afford to pay £100 per month: =NPER(0.5%, -100, 10000, 0, 0) */
	    function NPER(rate, pmt, pv, fv, type) { // NPER(rate,pmt,pv,[fv],[type])
	        if (!rate) {
	            return -(fv + pv) / pmt;
	        }
	        var h1 = pmt*(1 + rate*type);
	        return Math.log((h1 - fv*rate)/(h1 + pv*rate)) / Math.log(1 + rate);
	    }

	    //// RATE (the interest rate per period) ////
	    /* I borrow £1000 over 1 year making payments of £100 per month at the end of each
	       month. What is the monthly interest rate: =RATE(12, −100, 1000, 0, 0, 0) */

	    function RATE (nper, pmt, pv, fv, type, guess) { // RATE(nper, pmt, pv, [fv], [type], [guess])
	        function xfd(x) { // returns F(x) and F'(x), where F is given by the equation [1]
	            var h2 = Math.pow(1+x, nper-1), h1 = h2*(1+x);
	            return [ pv*h1 + pmt*(1/x + type)*(h1 - 1) + fv,
	                     nper*pv*h2 + pmt*(-(h1 - 1)/(x*x) + (1/x + type)*nper*h2) ];
	        }
	        return root_newton(xfd, guess); // a root of the equation F(x)=0
	    }

	    //// IPMT (interest part of a loan or investment) ////
	    //// PPMT (principal part of a loan) ////

	    function IPMT(rate, per, nper, pv, fv, type) { // IPMT(rate, per, nper, pv, [fv], [type])
	        if(type==1 && per==1) { // interest before beginnig of the payments... = ZERO
	            return 0;
	        }
	        var pmt = PMT(rate, nper, pv, fv, type);
	        var ipmt = FV(rate, per - 1, pmt, pv, type) * rate;
	        return type ? ipmt/(1 + rate) : ipmt;
	    }

	    function PPMT(rate, per, nper, pv, fv, type) { // PPMT(rate, per, nper, pv, [fv], [type])
	        var pmt = PMT(rate, nper, pv, fv, type);
	        return pmt - IPMT(rate, per, nper, pv, fv, type);
	    }

	    //// CUMPRINC (cumulative principal paid) ////
	    /* The amount financed is $200,000 at an interest rate of 7.25% for 30 years. How much is the amount of principal
	       and the amount of interest paid in the first year: CUMPRINC(0.0725/12, 12*30, 200000, 1, 12, 0)
	       and CUMIPMT(0.0725/12, 12*30, 200000, 1, 12, 0) */
	    function CUMPRINC(rate, nper, pv, start, end, type) { // CUMPRINC(rate, nper, pv, start_period, end_period, type)
	        if(type == 1) { // start >= 1 (as in Excel), but if pay at beginning of the period (type==1),
	            start --;    // then periods must be counted from Zero (decreasing given start and end parameters)
	            end --;
	        }
	        var tn = Math.pow(1 + rate, nper),
	            ts = Math.pow(1 + rate, start-1),
	            te = Math.pow(1 + rate, end);
	        var monthlyPayment = rate * pv * tn / (tn - 1);
	        var remainingBalanceAtStart = ts * pv - ((ts - 1) / rate) * monthlyPayment;
	        var remainingBalanceAtEnd = te * pv - ((te - 1) / rate) * monthlyPayment;
	        return remainingBalanceAtEnd - remainingBalanceAtStart;
	    }

	    //// CUMIPMT (cumulative  interest paid) ////
	    function CUMIPMT(rate, nper, pv, start, end, type) { // CUMIPMT(rate, nper, pv, start_period, end_period, type)
	        var cip = 0;
	        for(var i=start; i<=end; i++) {
	            cip += IPMT(rate, i, nper, pv, 0, type);
	        }
	        return cip;
	    }

	    //// NPV (Net Present Value of an investment based on a series of periodic cash flows and a discount rate) ////
	    function NPV(rate, flows) { // NPV(rate,value1,[value2],...)
	        var npv = 0;
	        for(var i=0, n=flows.length; i < n; i++) {
	            npv += flows[i]*Math.pow(1 + rate, -i-1);
	        }
	        return npv;
	    }

	    //// IRR (Internal Rate of Return on an investment based on a series of periodic cash flows) ////
	    function IRR(flows, guess) { // IRR(values, [guess])
	        function xfd(x) {
	            var npv = 0, npv1 = 0;
	            for(var j=0, n=flows.length; j < n; j++) {
	                npv += flows[j]*Math.pow(1 + x, -j-1); // construct the NPV(x) value,
	                npv1 += -j*flows[j]*Math.pow(1+x, -j-2); // the value in x of the NPV()-derivative
	            }
	            return [npv, npv1];
	        }
	        return root_newton(xfd, guess);
	    }

	    //// EFFECT (effective annual interest rate) ////
	    /* which investment option is better - one that pays 5 percent after one year, or a
	       savings account that pays a monthly interest of 4.75 percent:
	       = (5% - EFFECT(4.75%, 12)) * 10000 */
	    function EFFECT(nominal_rate, npery) { // EFFECT(nominal_rate, npery)
	        return Math.pow(1 + nominal_rate/npery, npery) - 1;
	    }

	    //// NOMINAL (nominal annual interest rate) ////
	    function NOMINAL(effect_rate, npery) { // NOMINAL(effect_rate, npery)
	        return npery*(Math.pow(effect_rate + 1, 1/npery) - 1);
	    }

	    //// XNPV (Net Present Value of a series of cashflows at irregular intervals) ////
	    function XNPV(rate, values, dates) { // XNPV(rate, values, dates)
	        var npv = 0;
	        for(var i=0, n=values.length; i < n; i++) {
	            npv += values[i]*Math.pow(1 + rate, (dates[0]-dates[i])/365);
	        }
	        return npv;
	    }

	    //// XIRR (Internal Rate of Return of a series of cashflows at irregular intervals) ////
	    function XIRR(values, dates, guess) { // XIRR(values, dates, [guess])
	        function xfd(x) {
	            var npv = values[0], npv1 = 0;
	            for(var j=1, n=values.length; j < n; j++) {
	                var delta = (dates[0] - dates[j]) / 365;
	                npv += values[j]*Math.pow(1 + x, delta); // construct the XNPV(x) value,
	                npv1 += delta*values[j]*Math.pow(1+x, delta - 1); // the value in x of the XNPV()-derivative
	            }
	            return [npv, npv1];
	        }
	        return root_newton(xfd, guess); // , 100, 0.1);
	    }

	    //// ISPMT (Interest paid during a Specific Period of an investment) ////
	    function ISPMT(rate, per, nper, pv) { // ISPMT(rate, per, nper, pv)
	        var tmp = -pv*rate;
	        return tmp*(1 - per/nper);
	    }

	    //// DB (Declining Balance depreciation) ////
	    function DB(cost, salvage, life, period, month) { // DB(cost, salvage, life, period, [month])
	        var rate = 1 - Math.pow(salvage/cost, 1/life);
	        rate = Math.floor(rate*1000 + 0.5) / 1000; // rounded to three decimals
	        var db = cost * rate * month / 12;
	        if(period == 1) {
	            return db;
	        }
	        for(var i=1; i < life; i++) {
	            if(i == period - 1) {
	                return (cost - db) * rate;
	            }
	            db += (cost - db) * rate;
	        }
	        return (cost - db) * rate * (12 - month) / 12;
	    }

	    //// DDB (Double Declining Balance depreciation) ////
	    function DDB(cost, salvage, life, period, factor) { // DDB(cost, salvage, life, period, [factor])
	        var f = factor / life;
	        var prior = -cost * (Math.pow(1-f, period-1) - 1);
	        var dep = (cost - prior) * f;
	        /* Depreciation cannot exceed book value.  */
	        dep = Math.min(dep, Math.max(0, cost - prior - salvage));
	        return dep;
	    }

	    //// SLN (straight-line depreciation) ////
	    function SLN(cost, salvage, life) { // SLN(cost, salvage, life)
	        return (cost - salvage) / life;
	    }

	    //// SYD (Sum-of-Years' digits Depreciation) ////
	    function SYD(cost, salvage, life, per) { // SYD(cost, salvage, life, per)
	        return (cost - salvage) * (life - per + 1) * 2 / (life * (life + 1));
	    }

	    //// VDB (Variable Declining Balance) ////
	    //
	    // Code adapted from Gnumeric, which in turn took it from OpenOffice.  The original code is
	    // available under GNU Lesser General Public License (LGPL).
	    // https://github.com/GNOME/gnumeric/blob/master/plugins/fn-financial/sc-fin.c
	    function VDB (cost, salvage, life, start, end, factor, no_switch) {
	        var interest = factor >= life ? 1 : factor / life;

	        function _getGDA(value, period) {
	            var gda, oldValue, newValue;
	            if (interest == 1) {
	                oldValue = period == 1 ? value : 0;
	            } else {
	                oldValue = value * Math.pow(1 - interest, period - 1);
	            }
	            newValue = value * Math.pow(1 - interest, period);
	            gda = newValue < salvage ? oldValue - salvage : oldValue - newValue;
	            return gda < 0 ? 0 : gda;
	        }

	        function _interVDB(cost, life1, period) {
	            var remValue = cost - salvage;
	            var intEnd = Math.ceil(period);
	            var term, lia = 0, vdb = 0, nowLia = false;
	            for (var i = 1; i <= intEnd; i++) {
	                if (!nowLia) {
	                    var gda = _getGDA(cost, i);
	                    lia = remValue / (life1 - i + 1);
	                    if (lia > gda) {
	                        term = lia;
	                        nowLia = true;
	                    } else {
	                        term = gda;
	                        remValue -= gda;
	                    }
	                } else {
	                    term = lia;
	                }
	                if (i == intEnd) {
	                    term *= period + 1 - intEnd;
	                }
	                vdb += term;
	            }
	            return vdb;
	        }

	        var intStart = Math.floor(start), intEnd = Math.ceil(end);
	        var vdb = 0;
	        if (no_switch) {
	            for (var i = intStart + 1; i <= intEnd; i++) {
	                var term = _getGDA(cost, i);
	                if (i == intStart + 1) {
	                    term *= Math.min(end, intStart + 1) - start;
	                } else {
	                    if (i == intEnd) {
	                        term *= end + 1 - intEnd;
	                    }
	                }
	                vdb += term;
	            }
	        } else {
	            var life1 = life;
	            if (start != Math.floor(start)) {
	                if (factor > 1) {
	                    if (start >= life / 2) {
	                        var part = start - life / 2;
	                        start = life / 2;
	                        end -= part;
	                        life1 += 1;
	                    }
	                }
	            }
	            cost -= _interVDB(cost, life1, start);
	            vdb = _interVDB(cost, life - start, end - start);
	        }
	        return vdb;
	    }

	    /*************************************************************************************/

	    /*   (from  http://beginnersinvest.about.com)
	         an investor agrees to loan money to a company or government in exchange for a predetermined interest rate for a pre-determined length of time.

	         If an investor wanted to buy a $25,000 Coca-Cola bond with a 30 year maturity and an 10% coupon, it would work like this: He would send in the $25,000 from his savings account and get a $25,000 engraved bond certificate in exchange. After 30 years, he would be able to get his whole $25,000 back from the Coca-Cola company (of course, he can always sell it before then if he needs the money).

	         Every year, he’s entitled to receive 10% interest on the money he lent, or $2,500. Since most companies in the United States pay interest semi-annually, he would likely have 60 coupons attached to his bond for $1,250 each.
	         Every June 30th and December 31st, the investor would go down, clip the proper coupon, send it in, and get their money.

	         Although the practice is now defunct, the terminology stuck and interest payments on bonds will forever be known as coupons.
	    */


	    // "Use EDATE to calculate maturity dates or due dates that fall on the same day of the month as the date of issue."
	    // See also: DATEDIF, DAY, DAYS, DAY360, EOMONTH (wich can be useful to determine limits of coupon periods)
	    function _edate(base, months) { // EDATE(start_date, months)
	        var d = unpackDate(base);
	        var m = d.month + months;
	        var y = d.year + Math.floor(m/12);
	        m %= 12;
	        if (m < 0) {
	            m += 12;
	        }
	        d = Math.min(d.date, daysInMonth(y, m));
	        return packDate(y, m, d);
	    }

	    function _daysBetween(from, to, basis) {
	        if (basis == 1 || basis == 2 || basis == 3) { // Actual/Actual || Actual/360 || Actual/365
	            return to - from;
	        }
	        return _days_360(from, to, basis);
	    }

	    // Find coupon dates that enclose the settlement date, counting backward from the maturity date.
	    /* independent of the 'basis' convention to count days - here we have no need to count days */
	    function _borderCoupons(settlement, maturity, freq) {
	        var sett = unpackDate(settlement), base = unpackDate(maturity);
	        var periods = base.year - sett.year;
	        if (periods > 0) {
	            periods = (periods - 1) * freq;
	        }
	        var prev, next, months = 12/freq;
	        do {
	            periods++;
	            prev = _edate(maturity, - periods*months);
	        } while (settlement < prev);
	        periods--;
	        next = _edate(maturity, - periods*months);
	        return [ prev, next ];
	    }

	    // Find coupon dates that enclose the settlement date, counting forward from the first-coupon payment.
	    /* independent of the 'basis' convention to count days - here we have no need to count days */
	    function _borderCoupons_fw(first, settlement, freq) {
	        var sett = unpackDate(settlement), base = unpackDate(first);
	        var periods = sett.year - base.year;
	        if (periods > 0) {
	            periods = (periods - 1) * freq;
	        }
	        var prev = first, next, months = 12/freq;
	        while (settlement > prev) {
	            next = prev;
	            periods++;
	            prev = _edate(first, periods*months);
	        }
	        return [ next, prev ];
	    }

	    //// COUPDAYBS (COUPon DAYs Beginning to Settlement) ////
	    /* returns the number of days from the beginning of the coupon period to the settlement date */
	    function COUPDAYBS(settlement, maturity, frequency, basis) { // COUPDAYBS(settlement, maturity, frequency, [basis])
	        var prev = _borderCoupons(settlement, maturity, frequency)[0];
	        return _daysBetween(prev, settlement, basis);
	    }

	    //// COUPDAYS (COUPon DAYs containing Settlement) ////
	    /* Returns the number of days in the coupon period that contains the settlement date */
	    function COUPDAYS(settl, matur, freq, basis) { // COUPDAYS(settlement, maturity, frequency, [basis])
	        if (basis == 1) {
	            var borders = _borderCoupons(settl, matur, freq);
	            return _daysBetween(borders[0], borders[1], 1);
	        }
	        if (basis == 3) {
	            return 365/freq;
	        }
	        return 360/freq;
	    }

	    //// COUPDAYSNC (COUPon DAYs Settlement to Next Coupon) ////
	    /* Returns the number of days from the settlement date to the next coupon date */
	    function COUPDAYSNC(settl, matur, freq, basis) { // COUPDAYSNC(settlement, maturity, frequency, [basis])
	        var next = _borderCoupons(settl, matur, freq)[1];
	        return _daysBetween(settl, next, basis);
	    }

	    //// COUPPCD (COUPon, Previous Coupon Date) ////
	    /* Returns the previous coupon date before the settlement date */
	    function COUPPCD(settl, matur, freq/*, basis*/) { // COUPPCD(settlement, maturity, frequency, [basis])
	        // It is no need to count days, so 'basis' becomes a inutil parameter.
	        return _borderCoupons(settl, matur, freq)[0];
	    }

	    //// COUPNCD (COUPon, Next Coupon Date) ////
	    /* Returns the next coupon date after the settlement date */
	    function COUPNCD(settl, matur, freq/*, basis*/) { // COUPNCD(settlement, maturity, frequency, [basis])
	        // It is no need to count days, so 'basis' becomes a inutil parameter.
	        return _borderCoupons(settl, matur, freq)[1];
	    }

	    function COUPNUM(settl, matur, freq/*, basis*/) { // COUPNUM(settlement, maturity, frequency, [basis])
	        var sett = unpackDate(settl),
	            mat = unpackDate(matur);
	        var months = 12*(mat.year - sett.year) + mat.month - sett.month;
	        //// Discount the last month if there are not enough days? Finally - we decide to not discount.
	        //// (if this "last month" have 2 days, Excel.COUPNUM returns 6 but GoogleSpreads give only 5)
	        //    var res = _edate(matur, -months);
	        //    if (sett.date >= unpackDate(res).date) {
	        //        months--; // an incomplete last month correspond to a qvasi-coupon period
	        //    }
	        return 1 + (months * freq / 12 | 0);
	    }

	    function daysInYear(yr, basis) {
	        if (basis == 3) { return 365; }
	        if (basis == 1) { return isLeapYear(yr) ? 366 : 365; }
	        return 360;
	    }

	    //// ACCRINTM  the accrued interest for a security that pays interest at maturity ////
	    function ACCRINTM(issue, maturity, rate, par, basis) { // ACCRINTM(issue, settlement, rate, par, [basis])
	        var year_days = daysInYear(unpackDate(maturity).year, basis); // 360;
	        return rate*par * _daysBetween(issue, maturity, basis) / year_days;
	    }

	    function ACCRINT(issue, first, settl, rate, par, freq, basis, calc) {
	        var accr = 0, cost = par * rate / freq;
	        var brace, prev, next, prev1, next1, nrc;

	        var annual = basis % 2 === 0 ? 360 : 365; // only if to >> from, we eventually need to count leap years
	        function _numCoupons(from, to) { // better than COUPNUM(from, to, freq, basis)-1
	            return (to - from)*freq/annual | 0;
	        }

	        if (settl <= first) {
	            brace = _borderCoupons(settl, first, freq);
	            prev = brace[0];
	            next = brace[1];
	            if (prev <= issue) {
	                return cost * _daysBetween(issue, settl, basis) / _daysBetween(prev, next, basis);
	            }
	            brace = _borderCoupons(issue, prev, freq);
	            prev1 = brace[0];
	            next1 = brace[1];
	            nrc = _numCoupons(next1, settl); // when settl==next, days are counted implicitly by nrc
	            return cost *
	                (nrc +
	                 _daysBetween(issue, next1, basis) / _daysBetween(prev1, next1, basis) +
	                 (settl < next? _daysBetween(prev, settl, basis) / _daysBetween(prev, next, basis) : 0));
	        } else {
	            brace = _borderCoupons_fw(first, settl, freq);
	            prev = brace[0];
	            next = brace[1];
	            nrc = _numCoupons(first, settl); // COUPNUM(first, settl, freq, basis) - 1;
	            if (next == settl) {
	                accr = cost * nrc;
	            } else {
	                accr = cost * (nrc + _daysBetween(prev, settl, basis) / _daysBetween(prev, next, basis));
	            }
	            if (!calc) { return accr; } // Only the accrued interest between first and settlement dates.
	            brace = _borderCoupons(issue, first, freq); // Add the accrued interest between issue and first dates.
	            prev = brace[0];
	            next = brace[1];
	            nrc = _numCoupons(issue, first);
	            accr += cost * (nrc + _daysBetween(issue, next, basis) / _daysBetween(prev, next, basis));
	            return accr; // accrued interest between issue and settlement dates
	        }
	    }

	    //// DISC  the discount rate for a security (given price and redemption values per 100$ face value) ////
	    function DISC(settl, matur, pr, redemption, basis) { // DISC(settlement, maturity, pr, redemption, [basis])
	        var annual = basis % 2 === 0 ? 360 : (isLeapYear(unpackDate(settl).year) ? 366 : 365);
	        return (redemption - pr)/redemption*annual/_daysBetween(settl, matur, basis);
	    }

	    //// INTRATE  the interest rate for a fully invested security ////
	    function INTRATE(settl, matur, investment, redemption, basis) { // INTRATE(settlement, maturity, investment, redemption, [basis])
	        var annual = basis % 2 === 0 ? 360 : (isLeapYear(unpackDate(settl).year) ? 366 : 365);
	        return (redemption - investment)/investment*annual/_daysBetween(settl, matur, basis);
	    }

	    //// RECEIVED  the amount received at maturity for a fully invested security ////
	    function RECEIVED(settl, matur, investment, discount, basis) { // RECEIVED(settlement, maturity, investment, discount, [basis])
	        var annual = basis % 2 === 0 ? 360 : (isLeapYear(unpackDate(settl).year) ? 366 : 365);
	        return investment/(1 - discount*_daysBetween(settl, matur, basis)/annual);
	    }

	    //// PRICE  the price per $100 face value of a security that pays periodic interest ////
	    function PRICE(settl, matur, rate, yld, redemption, freq, basis) { // PRICE(settlement, maturity, rate, yld, redemption, frequency, [basis])
	        var N = 1 + ((matur - settl)*freq/(basis % 2 === 0 ? 360 : 365) | 0); // coupons playable between settlement and maturity dates
	        var brace = _borderCoupons(settl, matur, freq),
	            prev = brace[0], next = brace[1];
	        var beg_settl = _daysBetween(prev, settl, basis),
	            settl_end = _daysBetween(settl, next, basis),
	            beg_end = _daysBetween(prev, next, basis);
	        var den = 100*rate/freq,
	            yf = yld/freq,
	            frac = settl_end / beg_end;
	        if (N == 1) {
	            return (redemption + den)/(1 + frac*yf) - beg_settl / beg_end * den;
	        }
	        return redemption / Math.pow(1 + yf, N-1+frac)
	            + den * Math.pow(1 + yf, 1-N-frac) * (Math.pow(1+yf, N) - 1) / yf
	            - beg_settl / beg_end * den;
	    }

	    //// PRICEDISC  the price per $100 face value of a discounted security ////
	    function PRICEDISC(settl, matur, discount, redemption, basis) { // PRICEDISC(settlement, maturity, discount, redemption, [basis])
	        var dsm = _daysBetween(settl, matur, basis),
	            dy = daysInYear(unpackDate(matur).year, basis);
	        return redemption - discount*redemption*dsm/dy;
	    }

	    // Used in PEARSON, more could follow.  In some situations Excel appears to silently ignore
	    // missing or non-numeric values, for example if some value in a is missing a corresponding
	    // value in b, then the one in a is going to be ignored as if not present.  Arrays must have the
	    // same number of elements.  I couldn't come up with a good name for this function.
	    function whipNumberArrays(a, b) {
	        for (var i = a.length; --i >= 0;) {
	            if (typeof a[i] != "number" || typeof b[i] != "number") {
	                a.splice(i, 1);
	                b.splice(i, 1);
	            }
	        }
	    }

	}, __webpack_require__(3));


/***/ })

/******/ });