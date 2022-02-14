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

	__webpack_require__(729);
	module.exports = __webpack_require__(729);


/***/ }),

/***/ 729:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["sl"] = {
	        name: "sl",
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
	                name: "",
	                abbr: "",
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
	                    names: ["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"],
	                    namesAbbr: ["ned.","pon.","tor.","sre.","čet.","pet.","sob."],
	                    namesShort: ["ned.","pon.","tor.","sre.","čet.","pet.","sob."]
	                },
	                months: {
	                    names: ["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],
	                    namesAbbr: ["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."]
	                },
	                AM: ["dop.","dop.","DOP."],
	                PM: ["pop.","pop.","POP."],
	                patterns: {
	                    d: "d. MM. yyyy",
	                    D: "dddd, dd. MMMM yyyy",
	                    F: "dddd, dd. MMMM yyyy HH:mm:ss",
	                    g: "d. MM. yyyy HH:mm",
	                    G: "d. MM. yyyy HH:mm:ss",
	                    m: "d. MMMM",
	                    M: "d. MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
	                },
	                "/": ". ",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });