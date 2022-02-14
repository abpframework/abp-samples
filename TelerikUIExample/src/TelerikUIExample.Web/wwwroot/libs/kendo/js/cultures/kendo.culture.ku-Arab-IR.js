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

	__webpack_require__(516);
	module.exports = __webpack_require__(516);


/***/ }),

/***/ 516:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ku-Arab-IR"] = {
	        name: "ku-Arab-IR",
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
	                name: "Iranian Rial",
	                abbr: "IRR",
	                pattern: ["-$ n","$ n"],
	                decimals: 0,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "IRR"
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
	                AM: ["ب.ن","ب.ن","ب.ن"],
	                PM: ["د.ن","د.ن","د.ن"],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd, d MMMM yyyy",
	                    F: "dddd, d MMMM yyyy HH:mm:ss",
	                    g: "dd/MM/yyyy HH:mm",
	                    G: "dd/MM/yyyy HH:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
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