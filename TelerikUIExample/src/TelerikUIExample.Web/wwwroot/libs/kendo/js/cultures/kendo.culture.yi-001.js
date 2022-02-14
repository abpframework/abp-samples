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

	__webpack_require__(867);
	module.exports = __webpack_require__(867);


/***/ }),

/***/ 867:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["yi-001"] = {
	        name: "yi-001",
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
	                name: "Special Drawing Rights",
	                abbr: "XDR",
	                pattern: ["-$ n","$ n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "XDR"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"],
	                    namesAbbr: ["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"],
	                    namesShort: ["זונטיק","מאָנטיק","דינסטיק","מיטוואך","דאנערשטיק","פֿרײַטיק","שבת"]
	                },
	                months: {
	                    names: ["יאַנואַר","פֿעברואַר","מערץ","אַפּריל","מיי","יוני","יולי","אויגוסט","סעפּטעמבער","אקטאבער","נאוועמבער","דעצעמבער"],
	                    namesAbbr: ["יאַנ","פֿעב","מערץ","אַפּר","מיי","יוני","יולי","אויג","סעפּ","אקט","נאוו","דעצ"]
	                },
	                AM: ["פֿאַרמיטאָג","פֿאַרמיטאָג","פֿאַרמיטאָג"],
	                PM: ["נאָכמיטאָג","נאָכמיטאָג","נאָכמיטאָג"],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd, dטן MMMM yyyy",
	                    F: "dddd, dטן MMMM yyyy HH:mm:ss",
	                    g: "dd/MM/yyyy HH:mm",
	                    G: "dd/MM/yyyy HH:mm:ss",
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