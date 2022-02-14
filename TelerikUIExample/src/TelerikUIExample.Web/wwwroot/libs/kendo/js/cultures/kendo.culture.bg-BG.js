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

	__webpack_require__(98);
	module.exports = __webpack_require__(98);


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["bg-BG"] = {
	        name: "bg-BG",
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
	                name: "Bulgarian Lev",
	                abbr: "BGN",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "лв."
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],
	                    namesAbbr: ["нед","пон","вт","ср","четв","пет","съб"],
	                    namesShort: ["нд","пн","вт","ср","чт","пт","сб"]
	                },
	                months: {
	                    names: ["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"],
	                    namesAbbr: ["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "d.M.yyyy 'г.'",
	                    D: "dd MMMM yyyy 'г.'",
	                    F: "dd MMMM yyyy 'г.' H:mm:ss",
	                    g: "d.M.yyyy 'г.' H:mm",
	                    G: "d.M.yyyy 'г.' H:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy 'г.'",
	                    Y: "MMMM yyyy 'г.'"
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