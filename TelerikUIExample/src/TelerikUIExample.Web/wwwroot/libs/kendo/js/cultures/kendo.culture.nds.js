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

	__webpack_require__(601);
	module.exports = __webpack_require__(601);


/***/ }),

/***/ 601:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["nds"] = {
	        name: "nds",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ".",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %","n %"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "",
	                abbr: "",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3],
	                symbol: "€"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Sünndag","Maandag","Dingsdag","Middeweken","Dunnersdag","Freedag","Sünnavend"],
	                    namesAbbr: ["Sü.","Ma.","Di.","Mi.","Du.","Fr.","Sa."],
	                    namesShort: ["Sü.","Ma.","Di.","Mi.","Du.","Fr.","Sa."]
	                },
	                months: {
	                    names: ["Januaar","Februaar","März","April","Mai","Juni","Juli","August","September","Oktover","November","Dezember"],
	                    namesAbbr: ["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."]
	                },
	                AM: ["vm","vm","VM"],
	                PM: ["nm","nm","NM"],
	                patterns: {
	                    d: "d.MM.yyyy",
	                    D: "dddd, 'de' d. MMMM yyyy",
	                    F: "dddd, 'de' d. MMMM yyyy 'Klock' H.mm:ss",
	                    g: "d.MM.yyyy 'Kl'. H.mm",
	                    G: "d.MM.yyyy 'Klock' H.mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "'Kl'. H.mm",
	                    T: "'Klock' H.mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
	                },
	                "/": ".",
	                ":": ".",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });