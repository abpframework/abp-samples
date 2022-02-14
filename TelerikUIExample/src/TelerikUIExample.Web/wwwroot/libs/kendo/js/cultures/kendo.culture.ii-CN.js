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

	__webpack_require__(443);
	module.exports = __webpack_require__(443);


/***/ }),

/***/ 443:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ii-CN"] = {
	        name: "ii-CN",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Chinese Yuan",
	                abbr: "CNY",
	                pattern: ["$-n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "¥"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["ꑭꆏꑍ","ꆏꊂ꒔","ꆏꊂꑍ","ꆏꊂꌕ","ꆏꊂꇖ","ꆏꊂꉬ","ꆏꊂꃘ"],
	                    namesAbbr: ["ꑭꆏ","ꆏ꒔","ꆏꑍ","ꆏꌕ","ꆏꇖ","ꆏꉬ","ꆏꃘ"],
	                    namesShort: ["ꆏ","꒔","ꑍ","ꌕ","ꇖ","ꉬ","ꃘ"]
	                },
	                months: {
	                    names: ["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊯꊪꆪ","ꊰꑋꆪ"],
	                    namesAbbr: ["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊯꊪꆪ","ꊰꑋꆪ"]
	                },
	                AM: ["ꂵꆪꈌꈐ","ꂵꆪꈌꈐ","ꂵꆪꈌꈐ"],
	                PM: ["ꂵꆪꈌꉈ","ꂵꆪꈌꉈ","ꂵꆪꈌꉈ"],
	                patterns: {
	                    d: "yyyy/M/d",
	                    D: "yyyy'ꈎ' M'ꆪ' d'ꑍ'",
	                    F: "yyyy'ꈎ' M'ꆪ' d'ꑍ' tt h:mm:ss",
	                    g: "yyyy/M/d tt h:mm",
	                    G: "yyyy/M/d tt h:mm:ss",
	                    m: "M’ ꆪ’d’ ꑍ’",
	                    M: "M’ ꆪ’d’ ꑍ’",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "tt h:mm",
	                    T: "tt h:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy'ꈎ' M'ꆪ'",
	                    Y: "yyyy'ꈎ' M'ꆪ'"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });