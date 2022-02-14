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

	__webpack_require__(872);
	module.exports = __webpack_require__(872);


/***/ }),

/***/ 872:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["zgh-Tfng"] = {
	        name: "zgh-Tfng",
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
	                pattern: ["-n$","n$"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "MAD"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["ⴰⵙⴰⵎⴰⵙ","ⴰⵢⵏⴰⵙ","ⴰⵙⵉⵏⴰⵙ","ⴰⴽⵕⴰⵙ","ⴰⴽⵡⴰⵙ","ⴰⵙⵉⵎⵡⴰⵙ","ⴰⵙⵉⴹⵢⴰⵙ"],
	                    namesAbbr: ["ⴰⵙⴰ","ⴰⵢⵏ","ⴰⵙⵉ","ⴰⴽⵕ","ⴰⴽⵡ","ⴰⵙⵉⵎ","ⴰⵙⵉⴹ"],
	                    namesShort: ["ⴰⵙⴰ","ⴰⵢⵏ","ⴰⵙⵉ","ⴰⴽⵕ","ⴰⴽⵡ","ⴰⵙⵉⵎ","ⴰⵙⵉⴹ"]
	                },
	                months: {
	                    names: ["ⵉⵏⵏⴰⵢⵔ","ⴱⵕⴰⵢⵕ","ⵎⴰⵕⵚ","ⵉⴱⵔⵉⵔ","ⵎⴰⵢⵢⵓ","ⵢⵓⵏⵢⵓ","ⵢⵓⵍⵢⵓⵣ","ⵖⵓⵛⵜ","ⵛⵓⵜⴰⵏⴱⵉⵔ","ⴽⵜⵓⴱⵔ","ⵏⵓⵡⴰⵏⴱⵉⵔ","ⴷⵓⵊⴰⵏⴱⵉⵔ"],
	                    namesAbbr: ["ⵉⵏⵏ","ⴱⵕⴰ","ⵎⴰⵕ","ⵉⴱⵔ","ⵎⴰⵢ","ⵢⵓⵏ","ⵢⵓⵍ","ⵖⵓⵛ","ⵛⵓⵜ","ⴽⵜⵓ","ⵏⵓⵡ","ⴷⵓⵊ"]
	                },
	                AM: ["ⵜⵉⴼⴰⵡⵜ","ⵜⵉⴼⴰⵡⵜ","ⵜⵉⴼⴰⵡⵜ"],
	                PM: ["ⵜⴰⴷⴳⴳⵯⴰⵜ","ⵜⴰⴷⴳⴳⵯⴰⵜ","ⵜⴰⴷⴳⴳⵯⴰⵜ"],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "dddd d MMMM yyyy",
	                    F: "dddd d MMMM yyyy HH:mm:ss",
	                    g: "d/M/yyyy HH:mm",
	                    G: "d/M/yyyy HH:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
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