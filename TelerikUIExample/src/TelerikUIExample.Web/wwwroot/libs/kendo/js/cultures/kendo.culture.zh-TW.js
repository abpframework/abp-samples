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

	__webpack_require__(885);
	module.exports = __webpack_require__(885);


/***/ }),

/***/ 885:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["zh-TW"] = {
	        name: "zh-TW",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": ",",
	            ".": ".",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "%"
	            },
	            currency: {
	                name: "New Taiwan Dollar",
	                abbr: "TWD",
	                pattern: ["-$n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "NT$"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
	                    namesAbbr: ["週日","週一","週二","週三","週四","週五","週六"],
	                    namesShort: ["日","一","二","三","四","五","六"]
	                },
	                months: {
	                    names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
	                    namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
	                },
	                AM: ["上午","上午","上午"],
	                PM: ["下午","下午","下午"],
	                patterns: {
	                    d: "yyyy/M/d",
	                    D: "yyyy'年'M'月'd'日'",
	                    F: "yyyy'年'M'月'd'日' tt hh:mm:ss",
	                    g: "yyyy/M/d tt hh:mm",
	                    G: "yyyy/M/d tt hh:mm:ss",
	                    m: "M月d日",
	                    M: "M月d日",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "tt hh:mm",
	                    T: "tt hh:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy'年'M'月'",
	                    Y: "yyyy'年'M'月'"
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