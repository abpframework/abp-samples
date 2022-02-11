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

	__webpack_require__(430);
	module.exports = __webpack_require__(430);


/***/ }),

/***/ 430:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["hu-HU"] = {
	        name: "hu-HU",
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
	                name: "Hungarian Forint",
	                abbr: "HUF",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "Ft"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],
	                    namesAbbr: ["V","H","K","Sze","Cs","P","Szo"],
	                    namesShort: ["V","H","K","Sze","Cs","P","Szo"]
	                },
	                months: {
	                    names: ["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],
	                    namesAbbr: ["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."]
	                },
	                AM: ["de.","de.","DE."],
	                PM: ["du.","du.","DU."],
	                patterns: {
	                    d: "yyyy. MM. dd.",
	                    D: "yyyy. MMMM d., dddd",
	                    F: "yyyy. MMMM d., dddd H:mm:ss",
	                    g: "yyyy. MM. dd. H:mm",
	                    G: "yyyy. MM. dd. H:mm:ss",
	                    m: "MMMM d.",
	                    M: "MMMM d.",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy. MMMM",
	                    Y: "yyyy. MMMM"
	                },
	                "/": ". ",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });