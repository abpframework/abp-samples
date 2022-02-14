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

	__webpack_require__(581);
	module.exports = __webpack_require__(581);


/***/ }),

/***/ 581:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["mr-IN"] = {
	        name: "mr-IN",
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
	                name: "Indian Rupee",
	                abbr: "INR",
	                pattern: ["$ -n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": "`",
	                groupSize: [3,2],
	                symbol: "₹"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["रविवार","सोमवार","मंगळवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],
	                    namesAbbr: ["रवि.","सोम.","मंगळ.","बुध.","गुरु.","शुक्र.","शनि."],
	                    namesShort: ["र","सो","मं","बु","गु","शु","श"]
	                },
	                months: {
	                    names: ["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर"],
	                    namesAbbr: ["जाने.","फेब्रु.","मार्च","एप्रि","मे","जून","जुलै","ऑग.","सप्टें.","ऑक्टो.","नोव्हें.","डिसें."]
	                },
	                AM: ["म.पू.","म.पू.","म.पू."],
	                PM: ["म.नं.","म.नं.","म.नं."],
	                patterns: {
	                    d: "dd-MM-yyyy",
	                    D: "dd MMMM yyyy",
	                    F: "dd MMMM yyyy HH:mm:ss",
	                    g: "dd-MM-yyyy HH:mm",
	                    G: "dd-MM-yyyy HH:mm:ss",
	                    m: "dd MMMM",
	                    M: "dd MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM, yyyy",
	                    Y: "MMMM, yyyy"
	                },
	                "/": "-",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });