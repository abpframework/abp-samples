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

	__webpack_require__(525);
	module.exports = __webpack_require__(525);


/***/ }),

/***/ 525:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["lb"] = {
	        name: "lb",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": " ",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %","n %"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "",
	                abbr: "",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "€"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"],
	                    namesAbbr: ["Son","Méi","Dën","Mët","Don","Fre","Sam"],
	                    namesShort: ["So","Mé","Dë","Më","Do","Fr","Sa"]
	                },
	                months: {
	                    names: ["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"],
	                    namesAbbr: ["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "dd.MM.yy",
	                    D: "d. MMMM yyyy",
	                    F: "d. MMMM yyyy HH:mm:ss",
	                    g: "dd.MM.yy HH:mm",
	                    G: "dd.MM.yy HH:mm:ss",
	                    m: "dd. MMMM",
	                    M: "dd. MMMM",
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