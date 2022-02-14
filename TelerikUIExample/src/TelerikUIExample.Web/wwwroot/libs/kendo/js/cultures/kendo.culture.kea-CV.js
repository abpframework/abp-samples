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

	__webpack_require__(476);
	module.exports = __webpack_require__(476);


/***/ }),

/***/ 476:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["kea-CV"] = {
	        name: "kea-CV",
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
	                name: "Cape Verdean Escudo",
	                abbr: "CVE",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": "$",
	                groupSize: [3],
	                symbol: "​"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["dumingu","sigunda-fera","tersa-fera","kuarta-fera","kinta-fera","sesta-fera","sabadu"],
	                    namesAbbr: ["dum","sig","ter","kua","kin","ses","sab"],
	                    namesShort: ["du","si","te","ku","ki","se","sa"]
	                },
	                months: {
	                    names: ["Janeru","Febreru","Marsu","Abril","Maiu","Junhu","Julhu","Agostu","Setenbru","Otubru","Nuvenbru","Dizenbru"],
	                    namesAbbr: ["Jan","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Otu","Nuv","Diz"]
	                },
	                AM: ["am","am","AM"],
	                PM: ["pm","pm","PM"],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "dddd, d 'di' MMMM 'di' yyyy",
	                    F: "dddd, d 'di' MMMM 'di' yyyy HH:mm:ss",
	                    g: "d/M/yyyy HH:mm",
	                    G: "d/M/yyyy HH:mm:ss",
	                    m: "d 'di' MMMM",
	                    M: "d 'di' MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM 'di' yyyy",
	                    Y: "MMMM 'di' yyyy"
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