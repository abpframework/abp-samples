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

	__webpack_require__(317);
	module.exports = __webpack_require__(317);


/***/ }),

/***/ 317:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["fa-IR"] = {
	        name: "fa-IR",
	        numberFormat: {
	            pattern: ["n-"],
	            decimals: 2,
	            ",": ",",
	            ".": "/",
	            groupSize: [3],
	            percent: {
	                pattern: ["n- %","n %"],
	                decimals: 2,
	                ",": ",",
	                ".": "/",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Iranian Rial",
	                abbr: "IRR",
	                pattern: ["n-$","n$"],
	                decimals: 2,
	                ",": ",",
	                ".": "/",
	                groupSize: [3],
	                symbol: "ريال"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
	                    namesAbbr: ["يكشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],
	                    namesShort: ["ی","د","س","چ","پ","ج","ش"]
	                },
	                months: {
	                    names: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],
	                    namesAbbr: ["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"]
	                },
	                AM: ["ق.ظ","ق.ظ","ق.ظ"],
	                PM: ["ب.ظ","ب.ظ","ب.ظ"],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd, d MMMM yyyy",
	                    F: "dddd, d MMMM yyyy hh:mm:ss tt",
	                    g: "dd/MM/yyyy hh:mm tt",
	                    G: "dd/MM/yyyy hh:mm:ss tt",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "hh:mm tt",
	                    T: "hh:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM, yyyy",
	                    Y: "MMMM, yyyy"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 6
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });