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

	__webpack_require__(136);
	module.exports = __webpack_require__(136);


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["cs"] = {
	        name: "cs",
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
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "Kč"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],
	                    namesAbbr: ["ne","po","út","st","čt","pá","so"],
	                    namesShort: ["ne","po","út","st","čt","pá","so"]
	                },
	                months: {
	                    names: ["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],
	                    namesAbbr: ["led","úno","bře","dub","kvě","čvn","čvc","srp","zář","říj","lis","pro"]
	                },
	                AM: ["dop.","dop.","DOP."],
	                PM: ["odp.","odp.","ODP."],
	                patterns: {
	                    d: "dd.MM.yyyy",
	                    D: "dddd d. MMMM yyyy",
	                    F: "dddd d. MMMM yyyy H:mm:ss",
	                    g: "dd.MM.yyyy H:mm",
	                    G: "dd.MM.yyyy H:mm:ss",
	                    m: "d. MMMM",
	                    M: "d. MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
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