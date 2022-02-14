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

	__webpack_require__(92);
	module.exports = __webpack_require__(92);


/***/ }),

/***/ 92:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["be-BY"] = {
	        name: "be-BY",
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
	                name: "Belarusian Ruble",
	                abbr: "BYN",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "Br"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["нядзеля","панядзелак","аўторак","серада","чацвер","пятніца","субота"],
	                    namesAbbr: ["нд","пн","аўт","ср","чц","пт","сб"],
	                    namesShort: ["нд","пн","аў","ср","чц","пт","сб"]
	                },
	                months: {
	                    names: ["студзень","люты","сакавік","красавік","май","чэрвень","ліпень","жнівень","верасень","кастрычнік","лістапад","снежань"],
	                    namesAbbr: ["студз","лют","сак","крас","май","чэрв","ліп","жн","вер","кастр","ліст","снеж"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "dd.MM.yy",
	                    D: "d MMMM yyyy",
	                    F: "d MMMM yyyy HH:mm:ss",
	                    g: "dd.MM.yy HH:mm",
	                    G: "dd.MM.yy HH:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy г.",
	                    Y: "MMMM yyyy г."
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