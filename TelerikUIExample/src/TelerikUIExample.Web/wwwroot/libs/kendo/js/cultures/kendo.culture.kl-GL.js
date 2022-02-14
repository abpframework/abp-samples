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

	__webpack_require__(486);
	module.exports = __webpack_require__(486);


/***/ }),

/***/ 486:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["kl-GL"] = {
	        name: "kl-GL",
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
	                name: "Danish Krone",
	                abbr: "DKK",
	                pattern: ["$ -n","$n"],
	                decimals: 2,
	                ",": ".",
	                ".": ",",
	                groupSize: [3,0],
	                symbol: "kr."
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["sapaat","ataasinngorneq","marlunngorneq","pingasunngorneq","sisamanngorneq","tallimanngorneq","arfininngorneq"],
	                    namesAbbr: ["sap.","at.","marl.","ping.","sis.","tall.","arf."],
	                    namesShort: ["sa","at","ma","pi","si","ta","ar"]
	                },
	                months: {
	                    names: ["januaari","februaari","marsi","apriili","maaji","juuni","juuli","aggusti","septembari","oktobari","novembari","decembari"],
	                    namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","dec"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "dd-MM-yyyy",
	                    D: "MMMM d'.-at, 'yyyy",
	                    F: "MMMM d'.-at, 'yyyy HH:mm:ss",
	                    g: "dd-MM-yyyy HH:mm",
	                    G: "dd-MM-yyyy HH:mm:ss",
	                    m: "MMMM d'.-at'",
	                    M: "MMMM d'.-at'",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM yyyy",
	                    Y: "MMMM yyyy"
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