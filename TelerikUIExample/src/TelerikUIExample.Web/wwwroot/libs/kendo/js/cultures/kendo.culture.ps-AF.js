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

	__webpack_require__(656);
	module.exports = __webpack_require__(656);


/***/ }),

/***/ 656:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ps-AF"] = {
	        name: "ps-AF",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ".",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Afghan Afghani",
	                abbr: "AFN",
	                pattern: ["-n $","n $"],
	                decimals: 0,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "؋"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["یکشنبه","دوشنبه","سه‌شنبه","چارشنبه","پنجشنبه","جمعه","شنبه"],
	                    namesAbbr: ["یکشنبه","دوشنبه","سه‌شنبه","چارشنبه","پنجشنبه","جمعه","شنبه"],
	                    namesShort: ["ی","د","س","چ","پ","ج","ش"]
	                },
	                months: {
	                    names: ["وری","غويی","غبرګولی","چنګاښ","زمری","وږی","تله","لړم","ليندۍ","مرغومی","سلواغه","كب"],
	                    namesAbbr: ["وری","غويی","غبرګولی","چنګاښ","زمری","وږی","تله","لړم","ليندۍ","مرغومی","سلواغه","كب"]
	                },
	                AM: ["غ.م.","غ.م.","غ.م."],
	                PM: ["غ.و.","غ.و.","غ.و."],
	                patterns: {
	                    d: "yyyy/M/d",
	                    D: "d MMMM yyyy",
	                    F: "d MMMM yyyy H:mm:ss",
	                    g: "yyyy/M/d H:mm",
	                    G: "yyyy/M/d H:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
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