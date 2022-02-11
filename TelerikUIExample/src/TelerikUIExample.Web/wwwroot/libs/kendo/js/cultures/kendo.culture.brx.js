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

	__webpack_require__(112);
	module.exports = __webpack_require__(112);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["brx"] = {
	        name: "brx",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3,2],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3,2],
	                symbol: "%"
	            },
	            currency: {
	                name: "",
	                abbr: "",
	                pattern: ["-$ n","$ n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3,2],
	                symbol: "₹"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["रबिबार","समबार","मंगलबार","बुदबार","बिसथिबार","सुखुरबार","सुनिबार"],
	                    namesAbbr: ["रबि","सम","मंगल","बुद","बिसथि","सुखुर","सुनि"],
	                    namesShort: ["रबि","सम","मंगल","बुद","बिसथि","सुखुर","सुनि"]
	                },
	                months: {
	                    names: ["जानुवारी","फेब्रुवारी","मार्स","एफ्रिल","मे","जुन","जुलाइ","आगस्थ","सेबथेज्ब़र","अखथबर","नबेज्ब़र","दिसेज्ब़र"],
	                    namesAbbr: ["जानुवारी","फेब्रुवारी","मार्स","एफ्रिल","मे","जुन","जुलाइ","आगस्थ","सेबथेज्ब़र","अखथबर","नबेज्ब़र","दिसेज्ब़र"]
	                },
	                AM: ["फुं","फुं","फुं"],
	                PM: ["बेलासे","बेलासे","बेलासे"],
	                patterns: {
	                    d: "M/d/yyyy",
	                    D: "dddd, MMMM d, yyyy",
	                    F: "dddd, MMMM d, yyyy h:mm:ss tt",
	                    g: "M/d/yyyy h:mm tt",
	                    G: "M/d/yyyy h:mm:ss tt",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
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