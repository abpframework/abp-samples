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

	__webpack_require__(404);
	module.exports = __webpack_require__(404);


/***/ }),

/***/ 404:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["gsw-CH"] = {
	        name: "gsw-CH",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": "’",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %","n %"],
	                decimals: 2,
	                ",": "’",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Swiss Franc",
	                abbr: "CHF",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": "’",
	                ".": ".",
	                groupSize: [3],
	                symbol: "CHF"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Sunntig","Määntig","Ziischtig","Mittwuch","Dunschtig","Friitig","Samschtig"],
	                    namesAbbr: ["Su.","Mä.","Zi.","Mi.","Du.","Fr.","Sa."],
	                    namesShort: ["Su.","Mä.","Zi.","Mi.","Du.","Fr.","Sa."]
	                },
	                months: {
	                    names: ["Januar","Februar","März","April","Mai","Juni","Juli","Auguscht","Septämber","Oktoober","Novämber","Dezämber"],
	                    namesAbbr: ["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]
	                },
	                AM: ["vorm.","vorm.","VORM."],
	                PM: ["nam.","nam.","NAM."],
	                patterns: {
	                    d: "dd.MM.yyyy",
	                    D: "dddd, d. MMMM yyyy",
	                    F: "dddd, d. MMMM yyyy HH:mm:ss",
	                    g: "dd.MM.yyyy HH:mm",
	                    G: "dd.MM.yyyy HH:mm:ss",
	                    m: "d. MMMM",
	                    M: "d. MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
	                },
	                "/": ".",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });