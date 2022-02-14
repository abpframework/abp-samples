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

	__webpack_require__(520);
	module.exports = __webpack_require__(520);


/***/ }),

/***/ 520:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ky-KG"] = {
	        name: "ky-KG",
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
	                name: "Kyrgystani Som",
	                abbr: "KGS",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "сом"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["жекшемби","дүйшөмбү","шейшемби","шаршемби","бейшемби","жума","ишемби"],
	                    namesAbbr: ["Жш","Дш","Шш","Шр","Бш","Жм","Иш"],
	                    namesShort: ["Жш","Дш","Шш","Шр","Бш","Жм","Иш"]
	                },
	                months: {
	                    names: ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
	                    namesAbbr: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "d-MMM yy",
	                    D: "dd-MMMM yyyy'-ж.'",
	                    F: "dd-MMMM yyyy'-ж.' HH:mm:ss",
	                    g: "d-MMM yy HH:mm",
	                    G: "d-MMM yy HH:mm:ss",
	                    m: "d-MMMM",
	                    M: "d-MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy'-ж.'",
	                    Y: "MMMM yyyy'-ж.'"
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