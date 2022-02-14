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

	__webpack_require__(644);
	module.exports = __webpack_require__(644);


/***/ }),

/***/ 644:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["pa-Arab-PK"] = {
	        name: "pa-Arab-PK",
	        numberFormat: {
	            pattern: ["- n"],
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
	                name: "Pakistani Rupee",
	                abbr: "PKR",
	                pattern: ["-$ n","$ n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "Rs"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["پير","منگل","بدھ","جمعرات","جمعه","هفته","اتوار"],
	                    namesAbbr: ["پير","منگل","بدھ","جمعرات","جمعه","هفته","اتوار"],
	                    namesShort: ["پ","م","ب","ج","ج","ه","ا"]
	                },
	                months: {
	                    names: ["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],
	                    namesAbbr: ["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "dd-MM-yy",
	                    D: "dd MMMM yyyy dddd",
	                    F: "dd MMMM yyyy dddd h.mm.ss tt",
	                    g: "dd-MM-yy h.mm tt",
	                    G: "dd-MM-yy h.mm.ss tt",
	                    m: "dd MMMM",
	                    M: "dd MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h.mm tt",
	                    T: "h.mm.ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM, yyyy",
	                    Y: "MMMM, yyyy"
	                },
	                "/": "-",
	                ":": ".",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });