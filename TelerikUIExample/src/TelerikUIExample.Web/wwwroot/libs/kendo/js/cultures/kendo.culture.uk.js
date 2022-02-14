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

	__webpack_require__(829);
	module.exports = __webpack_require__(829);


/***/ }),

/***/ 829:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["uk"] = {
	        name: "uk",
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
	                symbol: "₴"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["неділя","понеділок","вівторок","середа","четвер","п\u0027ятниця","субота"],
	                    namesAbbr: ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],
	                    namesShort: ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"]
	                },
	                months: {
	                    names: ["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"],
	                    namesAbbr: ["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "dd.MM.yyyy",
	                    D: "d MMMM yyyy' р.'",
	                    F: "d MMMM yyyy' р.' H:mm:ss",
	                    g: "dd.MM.yyyy H:mm",
	                    G: "dd.MM.yyyy H:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy' р.'",
	                    Y: "MMMM yyyy' р.'"
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