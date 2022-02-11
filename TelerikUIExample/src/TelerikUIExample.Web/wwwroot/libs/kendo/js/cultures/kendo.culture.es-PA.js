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

	__webpack_require__(301);
	module.exports = __webpack_require__(301);


/***/ }),

/***/ 301:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["es-PA"] = {
	        name: "es-PA",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %","n %"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Panamanian Balboa",
	                abbr: "PAB",
	                pattern: ["-$n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "B/."
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],
	                    namesAbbr: ["dom.","lun.","mar.","mié.","jue.","vie.","sáb."],
	                    namesShort: ["DO","LU","MA","MI","JU","VI","SA"]
	                },
	                months: {
	                    names: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
	                    namesAbbr: ["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sep.","oct.","nov.","dic."]
	                },
	                AM: ["a. m.","a. m.","A. M."],
	                PM: ["p. m.","p. m.","P. M."],
	                patterns: {
	                    d: "MM/dd/yyyy",
	                    D: "dddd, d 'de' MMMM 'de' yyyy",
	                    F: "dddd, d 'de' MMMM 'de' yyyy h:mm:ss tt",
	                    g: "MM/dd/yyyy h:mm tt",
	                    G: "MM/dd/yyyy h:mm:ss tt",
	                    m: "d 'de' MMMM",
	                    M: "d 'de' MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM 'de' yyyy",
	                    Y: "MMMM 'de' yyyy"
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