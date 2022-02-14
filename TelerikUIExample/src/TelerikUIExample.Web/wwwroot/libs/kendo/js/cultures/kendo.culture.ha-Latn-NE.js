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

	__webpack_require__(416);
	module.exports = __webpack_require__(416);


/***/ }),

/***/ 416:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ha-Latn-NE"] = {
	        name: "ha-Latn-NE",
	        numberFormat: {
	            pattern: ["-n"],
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
	                name: "West African CFA Franc",
	                abbr: "XOF",
	                pattern: ["-$ n","$ n"],
	                decimals: 0,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "CFA"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Lahadi","Litinin","Talata","Laraba","Alhamis","Jummaʼa","Asabar"],
	                    namesAbbr: ["Lah","Lit","Tal","Lar","Alh","Jum","Asa"],
	                    namesShort: ["Lh","Li","Ta","Lr","Al","Ju","As"]
	                },
	                months: {
	                    names: ["Janairu","Faburairu","Maris","Afirilu","Mayu","Yuni","Yuli","Agusta","Satumba","Oktoba","Nuwamba","Disamba"],
	                    namesAbbr: ["Jan","Fab","Mar","Afi","May","Yun","Yul","Agu","Sat","Okt","Nuw","Dis"]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "dddd, d MMMM, yyyy",
	                    F: "dddd, d MMMM, yyyy HH:mm:ss",
	                    g: "d/M/yyyy HH:mm",
	                    G: "d/M/yyyy HH:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
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