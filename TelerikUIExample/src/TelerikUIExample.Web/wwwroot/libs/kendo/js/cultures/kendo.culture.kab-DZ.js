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

	__webpack_require__(470);
	module.exports = __webpack_require__(470);


/***/ }),

/***/ 470:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["kab-DZ"] = {
	        name: "kab-DZ",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": " ",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Algerian Dinar",
	                abbr: "DZD",
	                pattern: ["-n$","n$"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "DA"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Yanass","Sanass","Kraḍass","Kuẓass","Samass","Sḍisass","Sayass"],
	                    namesAbbr: ["Yan","San","Kraḍ","Kuẓ","Sam","Sḍis","Say"],
	                    namesShort: ["Cr","Ri","Ra","Hd","Mh","Sm","Sd"]
	                },
	                months: {
	                    names: ["Yennayer","Fuṛar","Meɣres","Yebrir","Mayyu","Yunyu","Yulyu","Ɣuct","Ctembeṛ","Tubeṛ","Wambeṛ","Duǧembeṛ"],
	                    namesAbbr: ["Yen","Fur","Meɣ","Yeb","May","Yun","Yul","Ɣuc","Cte","Tub","Wam","Duj"]
	                },
	                AM: ["n tufat","n tufat","N TUFAT"],
	                PM: ["n tmeddit","n tmeddit","N TMEDDIT"],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "dddd d MMMM yyyy",
	                    F: "dddd d MMMM yyyy h:mm:ss tt",
	                    g: "d/M/yyyy h:mm tt",
	                    G: "d/M/yyyy h:mm:ss tt",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
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