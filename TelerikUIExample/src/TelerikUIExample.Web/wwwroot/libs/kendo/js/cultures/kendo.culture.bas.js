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

	__webpack_require__(89);
	module.exports = __webpack_require__(89);


/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["bas"] = {
	        name: "bas",
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
	                name: "",
	                abbr: "",
	                pattern: ["-n $","n $"],
	                decimals: 0,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "FCFA"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["ŋgwà nɔ̂y","ŋgwà njaŋgumba","ŋgwà ûm","ŋgwà ŋgê","ŋgwà mbɔk","ŋgwà kɔɔ","ŋgwà jôn"],
	                    namesAbbr: ["nɔy","nja","uum","ŋge","mbɔ","kɔɔ","jon"],
	                    namesShort: ["nɔy","nja","uum","ŋge","mbɔ","kɔɔ","jon"]
	                },
	                months: {
	                    names: ["Kɔndɔŋ","Màcɛ̂l","Màtùmb","Màtop","M̀puyɛ","Hìlòndɛ̀","Njèbà","Hìkaŋ","Dìpɔ̀s","Bìòôm","Màyɛsèp","Lìbuy li ńyèe"],
	                    namesAbbr: ["kɔn","mac","mat","mto","mpu","hil","nje","hik","dip","bio","may","liɓ"]
	                },
	                AM: ["I bikɛ̂glà","i bikɛ̂glà","I BIKƐ̂GLÀ"],
	                PM: ["I ɓugajɔp","i ɓugajɔp","I ƁUGAJƆP"],
	                patterns: {
	                    d: "d/M/yyyy",
	                    D: "dddd d MMMM yyyy",
	                    F: "dddd d MMMM yyyy HH:mm:ss",
	                    g: "d/M/yyyy HH:mm",
	                    G: "d/M/yyyy HH:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
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