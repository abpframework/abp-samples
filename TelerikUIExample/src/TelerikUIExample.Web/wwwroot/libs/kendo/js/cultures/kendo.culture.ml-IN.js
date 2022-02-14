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

	__webpack_require__(569);
	module.exports = __webpack_require__(569);


/***/ }),

/***/ 569:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["ml-IN"] = {
	        name: "ml-IN",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3,2],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3,2],
	                symbol: "%"
	            },
	            currency: {
	                name: "Indian Rupee",
	                abbr: "INR",
	                pattern: ["-$n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "₹"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["ഞായറാഴ്‌ച","തിങ്കളാഴ്‌ച","ചൊവ്വാഴ്ച","ബുധനാഴ്‌ച","വ്യാഴാഴ്‌ച","വെള്ളിയാഴ്‌ച","ശനിയാഴ്‌ച"],
	                    namesAbbr: ["ഞായർ","തിങ്കൾ","ചൊവ്വ","ബുധൻ","വ്യാഴം","വെള്ളി","ശനി"],
	                    namesShort: ["ഞാ","തി","ചൊ","ബു","വ്യാ","വെ","ശ"]
	                },
	                months: {
	                    names: ["ജനുവരി","ഫെബ്രുവരി","മാർച്ച്","ഏപ്രിൽ","മേയ്","ജൂൺ","ജൂലൈ","ഓഗസ്റ്റ്","സെപ്റ്റംബർ","ഒക്‌ടോബർ","നവംബർ","ഡിസംബർ"],
	                    namesAbbr: ["ജനു","ഫെബ്രു","മാർ","ഏപ്രി","മേയ്","ജൂൺ","ജൂലൈ","ഓഗ","സെപ്റ്റം","ഒക്ടോ","നവം","ഡിസം"]
	                },
	                AM: ["AM","am","AM"],
	                PM: ["PM","pm","PM"],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "yyyy, MMMM d, dddd",
	                    F: "yyyy, MMMM d, dddd h:mm:ss tt",
	                    g: "d/M/yyyy h:mm tt",
	                    G: "d/M/yyyy h:mm:ss tt",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "h:mm tt",
	                    T: "h:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
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