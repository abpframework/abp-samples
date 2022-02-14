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

	__webpack_require__(794);
	module.exports = __webpack_require__(794);


/***/ }),

/***/ 794:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["tg-Cyrl"] = {
	        name: "tg-Cyrl",
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
	                name: "",
	                abbr: "",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "смн"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["якшанбе","душанбе","сешанбе","чоршанбе","панҷшанбе","ҷумъа","шанбе"],
	                    namesAbbr: ["пкш","дшб","сшб","чшб","пшб","ҷум","шнб"],
	                    namesShort: ["яш","дш","сш","чш","пш","ҷм","шб"]
	                },
	                months: {
	                    names: ["январ","феврал","март","апрел","май","июн","июл","август","сентябр","октябр","ноябр","декабр"],
	                    namesAbbr: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "dd.MM.yyyy",
	                    D: "d MMMM yyyy' с.'",
	                    F: "d MMMM yyyy' с.' HH:mm:ss",
	                    g: "dd.MM.yyyy HH:mm",
	                    G: "dd.MM.yyyy HH:mm:ss",
	                    m: "dd MMMM",
	                    M: "dd MMMM",
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