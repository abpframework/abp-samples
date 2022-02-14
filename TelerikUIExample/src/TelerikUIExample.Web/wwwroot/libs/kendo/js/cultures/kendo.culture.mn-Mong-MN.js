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

	__webpack_require__(575);
	module.exports = __webpack_require__(575);


/***/ }),

/***/ 575:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["mn-Mong-MN"] = {
	        name: "mn-Mong-MN",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3,0],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3,0],
	                symbol: "%"
	            },
	            currency: {
	                name: "Mongolian Tugrik",
	                abbr: "MNT",
	                pattern: ["$-n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3,0],
	                symbol: "₮"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["ᠨᠢᠮ᠎ᠠ","ᠳᠠᠸᠠ","ᠮᠢᠭᠮᠠᠷ","ᡀᠠᠭᠪᠠ","ᠫᠦᠷᠪᠦ","ᠪᠠᠰᠠᠩ","ᠪᠢᠮᠪᠠ"],
	                    namesAbbr: ["ᠨᠢᠮ᠎ᠠ","ᠳᠠᠸᠠ","ᠮᠢᠭᠮᠠᠷ","ᡀᠠᠭᠪᠠ","ᠫᠦᠷᠪᠦ","ᠪᠠᠰᠠᠩ","ᠪᠢᠮᠪᠠ"],
	                    namesShort: ["ᠨ","ᠳ","ᠮ","ᡀ","ᠫ","ᠪ","ᠪ"]
	                },
	                months: {
	                    names: ["ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠦᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠤᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠶᠢᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ"],
	                    namesAbbr: ["ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠦᠷᠪᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠠᠪᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠵᠢᠷᠭᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠲᠤᠯᠤᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠨᠠᠢᠮᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠶᠢᠰᠦᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠰᠠᠷ᠎ᠠ","ᠠᠷᠪᠠᠨ ᠬᠤᠶ᠋ᠠᠳᠤᠭᠠᠷ ᠰᠠᠷ᠎ᠠ"]
	                },
	                AM: [""],
	                PM: [""],
	                patterns: {
	                    d: "yyyy/M/d",
	                    D: "yyyyᠣᠨ MMMM dᠡᠳᠦᠷ᠂ dddd",
	                    F: "yyyyᠣᠨ MMMM dᠡᠳᠦᠷ᠂ dddd H:mm:ss",
	                    g: "yyyy/M/d H:mm",
	                    G: "yyyy/M/d H:mm:ss",
	                    m: "MMMM dᠡᠳᠦᠷ",
	                    M: "MMMM dᠡᠳᠦᠷ",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyyᠣᠨ MMMM",
	                    Y: "yyyyᠣᠨ MMMM"
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