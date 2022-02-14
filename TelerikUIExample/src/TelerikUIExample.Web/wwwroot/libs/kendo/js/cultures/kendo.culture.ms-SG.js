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

	__webpack_require__(585);
	module.exports = __webpack_require__(585);


/***/ }),

/***/ 585:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ms-SG"] = {
	        name: "ms-SG",
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
	                name: "Singapore Dollar",
	                abbr: "SGD",
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
	                    names: ["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],
	                    namesAbbr: ["Ahd","Isn","Sel","Rab","Kha","Jum","Sab"],
	                    namesShort: ["Ah","Is","Se","Ra","Kh","Ju","Sa"]
	                },
	                months: {
	                    names: ["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],
	                    namesAbbr: ["Jan","Feb","Mac","Apr","Mei","Jun","Jul","Ogo","Sep","Okt","Nov","Dis"]
	                },
	                AM: ["PG","pg","PG"],
	                PM: ["PTG","ptg","PTG"],
	                patterns: {
	                    d: "d/MM/yyyy",
	                    D: "dddd, d MMMM yyyy",
	                    F: "dddd, d MMMM yyyy h:mm:ss tt",
	                    g: "d/MM/yyyy h:mm tt",
	                    G: "d/MM/yyyy h:mm:ss tt",
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
	                firstDay: 0
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });