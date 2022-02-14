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

	__webpack_require__(121);
	module.exports = __webpack_require__(121);


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ca"] = {
	        name: "ca",
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
	                symbol: "€"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
	                    namesAbbr: ["dg.","dl.","dt.","dc.","dj.","dv.","ds."],
	                    namesShort: ["dg.","dl.","dt.","dc.","dj.","dv.","ds."]
	                },
	                months: {
	                    names: ["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"],
	                    namesAbbr: ["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."]
	                },
	                AM: ["a. m.","a. m.","A. M."],
	                PM: ["p. m.","p. m.","P. M."],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "dddd, d MMMM 'de' yyyy",
	                    F: "dddd, d MMMM 'de' yyyy H:mm:ss",
	                    g: "d/M/yyyy H:mm",
	                    G: "d/M/yyyy H:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM 'de' yyyy",
	                    Y: "MMMM 'de' yyyy"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });