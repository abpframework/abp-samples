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

	__webpack_require__(439);
	module.exports = __webpack_require__(439);


/***/ }),

/***/ 439:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["id-ID"] = {
	        name: "id-ID",
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
	                name: "Indonesian Rupiah",
	                abbr: "IDR",
	                pattern: ["-$n","$n"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "Rp"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],
	                    namesAbbr: ["Min","Sen","Sel","Rab","Kam","Jum","Sab"],
	                    namesShort: ["Min","Sen","Sel","Rab","Kam","Jum","Sab"]
	                },
	                months: {
	                    names: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
	                    namesAbbr: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd, dd MMMM yyyy",
	                    F: "dddd, dd MMMM yyyy HH.mm.ss",
	                    g: "dd/MM/yyyy HH.mm",
	                    G: "dd/MM/yyyy HH.mm.ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH.mm",
	                    T: "HH.mm.ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
	                },
	                "/": "/",
	                ":": ".",
	                firstDay: 0
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });