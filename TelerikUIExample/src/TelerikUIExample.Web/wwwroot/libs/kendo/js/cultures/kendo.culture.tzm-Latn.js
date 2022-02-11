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

	__webpack_require__(822);
	module.exports = __webpack_require__(822);


/***/ }),

/***/ 822:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["tzm-Latn"] = {
	        name: "tzm-Latn",
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
	                symbol: "DA"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["lh\u0027ed","letnayen","ttlata","larebâa","lexmis","ldjemâa","ssebt"],
	                    namesAbbr: ["lh\u0027d","let","ttl","lar","lex","ldj","sse"],
	                    namesShort: ["lh","lt","tt","la","lx","ld","ss"]
	                },
	                months: {
	                    names: ["Yennayer","Furar","Meghres","Yebrir","Magu","Yunyu","Yulyu","Ghuct","Cutenber","Tuber","Nunember","Dujanbir"],
	                    namesAbbr: ["Yen","Fur","Megh","Yeb","May","Yun","Yul","Ghu","Cut","Tub","Nun","Duj"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "dd-MM-yyyy",
	                    D: "dd MMMM, yyyy",
	                    F: "dd MMMM, yyyy H:mm:ss",
	                    g: "dd-MM-yyyy H:mm",
	                    G: "dd-MM-yyyy H:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM, yyyy",
	                    Y: "MMMM, yyyy"
	                },
	                "/": "-",
	                ":": ":",
	                firstDay: 6
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });