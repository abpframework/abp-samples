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

	__webpack_require__(537);
	module.exports = __webpack_require__(537);


/***/ }),

/***/ 537:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["lo-LA"] = {
	        name: "lo-LA",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ".",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Laotian Kip",
	                abbr: "LAK",
	                pattern: ["$-n","$n"],
	                decimals: 0,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "₭"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["ວັນອາທິດ","ວັນຈັນ","ວັນອັງຄານ","ວັນພຸດ","ວັນພະຫັດ","ວັນສຸກ","ວັນເສົາ"],
	                    namesAbbr: ["ອາທິດ","ຈັນ","ອັງຄານ","ພຸດ","ພະຫັດ","ສຸກ","ເສົາ"],
	                    namesShort: ["ອາ.","ຈ.","ອ.","ພ.","ພຫ.","ສຸ.","ສ."]
	                },
	                months: {
	                    names: ["ມັງກອນ","ກຸມພາ","ມີນາ","ເມສາ","ພຶດສະພາ","ມິຖຸນາ","ກໍລະກົດ","ສິງຫາ","ກັນຍາ","ຕຸລາ","ພະຈິກ","ທັນວາ"],
	                    namesAbbr: ["ມ.ກ.","ກ.ພ.","ມ.ນ.","ມ.ສ.","ພ.ພ.","ມິ.ຖ.","ກ.ລ.","ສ.ຫ.","ກ.ຍ.","ຕ.ລ.","ພ.ຈ.","ທ.ວ."]
	                },
	                AM: ["ກ່ອນທ່ຽງ","ກ່ອນທ່ຽງ","ກ່ອນທ່ຽງ"],
	                PM: ["ຫຼັງທ່ຽງ","ຫຼັງທ່ຽງ","ຫຼັງທ່ຽງ"],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "dddd ທີ d MMMM gg yyyy",
	                    F: "dddd ທີ d MMMM gg yyyy H:mm:ss",
	                    g: "d/M/yyyy H:mm",
	                    G: "d/M/yyyy H:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
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