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

	__webpack_require__(857);
	module.exports = __webpack_require__(857);


/***/ }),

/***/ 857:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["wal-ET"] = {
	        name: "wal-ET",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": "’",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": "’",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Ethiopian Birr",
	                abbr: "ETB",
	                pattern: ["-$n","$n"],
	                decimals: 2,
	                ",": "’",
	                ".": ".",
	                groupSize: [3],
	                symbol: "Br"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["ወጋ","ሳይኖ","ማቆሳኛ","አሩዋ","ሃሙሳ","አርባ","ቄራ"],
	                    namesAbbr: ["ወጋ","ሳይኖ","ማቆሳኛ","አሩዋ","ሃሙሳ","አርባ","ቄራ"],
	                    namesShort: ["ወጋ","ሳይኖ","ማቆሳኛ","አሩዋ","ሃሙሳ","አርባ","ቄራ"]
	                },
	                months: {
	                    names: ["ጃንዩወሪ","ፌብሩወሪ","ማርች","ኤፕረል","ሜይ","ጁን","ጁላይ","ኦገስት","ሴፕቴምበር","ኦክተውበር","ኖቬምበር","ዲሴምበር"],
	                    namesAbbr: ["ጃንዩ","ፌብሩ","ማርች","ኤፕረ","ሜይ","ጁን","ጁላይ","ኦገስ","ሴፕቴ","ኦክተ","ኖቬም","ዲሴም"]
	                },
	                AM: ["ማለዶ","ማለዶ","ማለዶ"],
	                PM: ["ቃማ","ቃማ","ቃማ"],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd፥ dd MMMM ጋላሳ yyyy gg",
	                    F: "dddd፥ dd MMMM ጋላሳ yyyy gg h:mm:ss tt",
	                    g: "dd/MM/yyyy h:mm tt",
	                    G: "dd/MM/yyyy h:mm:ss tt",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 0
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });