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

	__webpack_require__(844);
	module.exports = __webpack_require__(844);


/***/ }),

/***/ 844:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["vai-Vaii"] = {
	        name: "vai-Vaii",
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
	                name: "",
	                abbr: "",
	                pattern: ["-$n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "$"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["ꕞꕌꔵ","ꗳꗡꘉ","ꕚꕞꕚ","ꕉꕞꕒ","ꕉꔤꕆꕢ","ꕉꔤꕀꕮ","ꔻꔬꔳ"],
	                    namesAbbr: ["ꕞꕌꔵ","ꗳꗡꘉ","ꕚꕞꕚ","ꕉꕞꕒ","ꕉꔤꕆꕢ","ꕉꔤꕀꕮ","ꔻꔬꔳ"],
	                    namesShort: ["ꕞꕌꔵ","ꗳꗡꘉ","ꕚꕞꕚ","ꕉꕞꕒ","ꕉꔤꕆꕢ","ꕉꔤꕀꕮ","ꔻꔬꔳ"]
	                },
	                months: {
	                    names: ["ꖨꖕ ꕪꕴ ꔞꔀꕮꕊ","ꕒꕡꖝꖕ","ꕾꖺ","ꖢꖕ","ꖑꕱ","ꖱꘋ","ꖱꕞꔤ","ꗛꔕ","ꕢꕌ","ꕭꖃ","ꔞꘋꕔꕿ ꕸꖃꗏ","ꖨꖕ ꕪꕴ ꗏꖺꕮꕊ"],
	                    namesAbbr: ["ꖨꖕꔞ","ꕒꕡ","ꕾꖺ","ꖢꖕ","ꖑꕱ","ꖱꘋ","ꖱꕞ","ꗛꔕ","ꕢꕌ","ꕭꖃ","ꔞꘋ","ꖨꖕꗏ"]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd, d MMMM yyyy",
	                    F: "dddd, d MMMM yyyy h:mm:ss tt",
	                    g: "dd/MM/yyyy h:mm tt",
	                    G: "dd/MM/yyyy h:mm:ss tt",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
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