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

	__webpack_require__(740);
	module.exports = __webpack_require__(740);


/***/ }),

/***/ 740:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["sms-FI"] = {
	        name: "sms-FI",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": " ",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n %","n %"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "Euro",
	                abbr: "EUR",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "€"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["pâ´sspei´vv","vuõssargg","mââibargg","seärad","neljdpei´vv","piâtnâc","sue´vet"],
	                    namesAbbr: ["pâ","vu","mâ","se","ne","pi","su"],
	                    namesShort: ["pâ","v","m","s","n","pi","s"]
	                },
	                months: {
	                    names: ["ođđee´jjmään","tä´lvvmään","pâ´zzlâšttam-mään","njuhččmään","vue´ssmään","ǩie´ssmään","suei´nnmään","på´rǧǧmään","čõhččmään","kålggmään","skamm-mään","rosttovmään"],
	                    namesAbbr: ["ođđee´jjmään","tä´lvvmään","pâ´zzlâšttam-mään","njuhččmään","vue´ssmään","ǩie´ssmään","suei´nnmään","på´rǧǧmään","čõhččmään","kålggmään","skamm-mään","rosttovmään"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "d.M.yyyy",
	                    D: "MMMM d'. p. 'yyyy",
	                    F: "MMMM d'. p. 'yyyy H:mm:ss",
	                    g: "d.M.yyyy H:mm",
	                    G: "d.M.yyyy H:mm:ss",
	                    m: "MMMM d'. p. '",
	                    M: "MMMM d'. p. '",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
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