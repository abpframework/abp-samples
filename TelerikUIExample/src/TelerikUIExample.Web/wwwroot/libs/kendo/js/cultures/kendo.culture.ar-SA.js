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

	__webpack_require__(66);
	module.exports = __webpack_require__(66);


/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ar-SA"] = {
	        name: "ar-SA",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %","n %"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Saudi Riyal",
	                abbr: "SAR",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "ر.س.‏"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
	                    namesAbbr: ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],
	                    namesShort: ["ح","ن","ث","ر","خ","ج","س"]
	                },
	                months: {
	                    names: ["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"],
	                    namesAbbr: ["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"]
	                },
	                AM: ["ص","ص","ص"],
	                PM: ["م","م","م"],
	                patterns: {
	                    d: "dd/MM/yy",
	                    D: "dd/MMMM/yyyy",
	                    F: "dd/MMMM/yyyy hh:mm:ss tt",
	                    g: "dd/MM/yy hh:mm tt",
	                    G: "dd/MM/yy hh:mm:ss tt",
	                    m: "dd MMMM",
	                    M: "dd MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "hh:mm tt",
	                    T: "hh:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM, yyyy",
	                    Y: "MMMM, yyyy"
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