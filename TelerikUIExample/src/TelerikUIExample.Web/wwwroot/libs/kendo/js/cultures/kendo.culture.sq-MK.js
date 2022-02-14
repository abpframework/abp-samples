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

	__webpack_require__(751);
	module.exports = __webpack_require__(751);


/***/ }),

/***/ 751:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["sq-MK"] = {
	        name: "sq-MK",
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
	                name: "Macedonian Denar",
	                abbr: "MKD",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "den"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["e diel","e hënë","e martë","e mërkurë","e enjte","e premte","e shtunë"],
	                    namesAbbr: ["Die","Hën","Mar","Mër","Enj","Pre","Sht"],
	                    namesShort: ["die","hën","mar","mër","enj","pre","sht"]
	                },
	                months: {
	                    names: ["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor"],
	                    namesAbbr: ["jan","shk","mar","pri","maj","qer","korr","gush","sht","tet","nën","dhj"]
	                },
	                AM: ["p.d.","p.d.","P.D."],
	                PM: ["m.d.","m.d.","M.D."],
	                patterns: {
	                    d: "d.M.yyyy",
	                    D: "dddd, d MMMM yyyy",
	                    F: "dddd, d MMMM yyyy HH:mm:ss",
	                    g: "d.M.yyyy HH:mm",
	                    G: "d.M.yyyy HH:mm:ss",
	                    m: "d MMMM",
	                    M: "d MMMM",
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