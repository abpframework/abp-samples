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

	__webpack_require__(689);
	module.exports = __webpack_require__(689);


/***/ }),

/***/ 689:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ru-KZ"] = {
	        name: "ru-KZ",
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
	                name: "Kazakhstani Tenge",
	                abbr: "KZT",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "₸"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],
	                    namesAbbr: ["вс","пн","вт","ср","чт","пт","сб"],
	                    namesShort: ["вс","пн","вт","ср","чт","пт","сб"]
	                },
	                months: {
	                    names: ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],
	                    namesAbbr: ["янв.","февр.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "dd.MM.yyyy",
	                    D: "dddd, d MMMM yyyy 'г'.",
	                    F: "dddd, d MMMM yyyy 'г'. HH:mm:ss",
	                    g: "dd.MM.yyyy HH:mm",
	                    G: "dd.MM.yyyy HH:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy 'г'.",
	                    Y: "MMMM yyyy 'г'."
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