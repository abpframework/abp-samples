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

	__webpack_require__(428);
	module.exports = __webpack_require__(428);


/***/ }),

/***/ 428:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["hsb-DE"] = {
	        name: "hsb-DE",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ".",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %","n %"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Euro",
	                abbr: "EUR",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "€"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["njedźela","póndźela","wutora","srjeda","štwórtk","pjatk","sobota"],
	                    namesAbbr: ["nje","pón","wut","srj","štw","pja","sob"],
	                    namesShort: ["nj","pó","wu","sr","št","pj","so"]
	                },
	                months: {
	                    names: ["januar","februar","měrc","apryl","meja","junij","julij","awgust","september","oktober","nowember","december"],
	                    namesAbbr: ["jan","feb","měr","apr","mej","jun","jul","awg","sep","okt","now","dec"]
	                },
	                AM: ["dopołdnja","dopołdnja","DOPOŁDNJA"],
	                PM: ["popołdnju","popołdnju","POPOŁDNJU"],
	                patterns: {
	                    d: "d.M.yyyy",
	                    D: "dddd, d. MMMM yyyy",
	                    F: "dddd, d. MMMM yyyy H:mm:ss",
	                    g: "d.M.yyyy H:mm 'hodź'.",
	                    G: "d.M.yyyy H:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm 'hodź'.",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
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