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

	__webpack_require__(566);
	module.exports = __webpack_require__(566);


/***/ }),

/***/ 566:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["mk"] = {
	        name: "mk",
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
	                name: "",
	                abbr: "",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "ден"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["недела","понеделник","вторник","среда","четврток","петок","сабота"],
	                    namesAbbr: ["нед.","пон.","вт.","сре.","чет.","пет.","саб."],
	                    namesShort: ["не","по","вт","ср","че","пе","са"]
	                },
	                months: {
	                    names: ["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"],
	                    namesAbbr: ["јан.","фев.","мар.","апр.","мај","јун.","јул.","авг.","септ.","окт.","ноем.","дек."]
	                },
	                AM: ["претпл.","претпл.","ПРЕТПЛ."],
	                PM: ["попл.","попл.","ПОПЛ."],
	                patterns: {
	                    d: "dd.M.yyyy",
	                    D: "dddd, dd MMMM yyyy",
	                    F: "dddd, dd MMMM yyyy HH:mm:ss",
	                    g: "dd.M.yyyy HH:mm",
	                    G: "dd.M.yyyy HH:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy 'г'.",
	                    Y: "MMMM yyyy 'г'."
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