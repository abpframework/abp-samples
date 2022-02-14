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

	__webpack_require__(676);
	module.exports = __webpack_require__(676);


/***/ }),

/***/ 676:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["quz-PE"] = {
	        name: "quz-PE",
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
	                name: "Peruvian Sol",
	                abbr: "PEN",
	                pattern: ["$ -n","$ n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "S/"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
	                    namesAbbr: ["Dom","Lun","Mar","Mié","Jue","Vie","Sab"],
	                    namesShort: ["D","L","M","X","J","V","S"]
	                },
	                months: {
	                    names: ["Qulla puquy","Hatun puquy","Pauqar waray","ayriwa","Aymuray","Inti raymi","Anta Sitwa","Qhapaq Sitwa","Uma raymi","Kantaray","Ayamarq\u0027a","Kapaq Raymi"],
	                    namesAbbr: ["Qul","Hat","Pau","ayr","Aym","Int","Ant","Qha","Uma","Kan","Aya","Kap"]
	                },
	                AM: ["a.m.","a.m.","A.M."],
	                PM: ["p.m.","p.m.","P.M."],
	                patterns: {
	                    d: "dd/MM/yyyy",
	                    D: "dddd, d MMMM, yyyy",
	                    F: "dddd, d MMMM, yyyy hh:mm:ss tt",
	                    g: "dd/MM/yyyy hh:mm tt",
	                    G: "dd/MM/yyyy hh:mm:ss tt",
	                    m: "d MMMM",
	                    M: "d MMMM",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "hh:mm tt",
	                    T: "hh:mm:ss tt",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "MMMM' de 'yyyy",
	                    Y: "MMMM' de 'yyyy"
	                },
	                "/": "/",
	                ":": ":",
	                firstDay: 1
	            }
	        }
	    }
	})(this);


/***/ })

/******/ });