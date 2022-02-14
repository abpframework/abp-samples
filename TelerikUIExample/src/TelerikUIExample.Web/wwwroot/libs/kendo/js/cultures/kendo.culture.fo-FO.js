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

	__webpack_require__(342);
	module.exports = __webpack_require__(342);


/***/ }),

/***/ 342:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["fo-FO"] = {
	        name: "fo-FO",
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
	                name: "Danish Krone",
	                abbr: "DKK",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "kr"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["sunnudagur","mánadagur","týsdagur","mikudagur","hósdagur","fríggjadagur","leygardagur"],
	                    namesAbbr: ["sun.","mán.","týs.","mik.","hós.","frí.","ley."],
	                    namesShort: ["su.","má.","tý.","mi.","hó.","fr.","le."]
	                },
	                months: {
	                    names: ["januar","februar","mars","apríl","mai","juni","juli","august","september","oktober","november","desember"],
	                    namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"]
	                },
	                AM: ["um fyr.","um fyr.","UM FYR."],
	                PM: ["um sein.","um sein.","UM SEIN."],
	                patterns: {
	                    d: "dd.MM.yyyy",
	                    D: "dddd, d. MMMM yyyy",
	                    F: "dddd, d. MMMM yyyy HH:mm:ss",
	                    g: "dd.MM.yyyy HH:mm",
	                    G: "dd.MM.yyyy HH:mm:ss",
	                    m: "d. MMMM",
	                    M: "d. MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
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