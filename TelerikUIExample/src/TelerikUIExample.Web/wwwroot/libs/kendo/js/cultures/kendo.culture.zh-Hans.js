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

	__webpack_require__(879);
	module.exports = __webpack_require__(879);


/***/ }),

/***/ 879:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["zh-Hans"] = {
	        name: "zh-Hans",
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
	                name: "",
	                abbr: "",
	                pattern: ["$-n","$n"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "¥"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
	                    namesAbbr: ["周日","周一","周二","周三","周四","周五","周六"],
	                    namesShort: ["日","一","二","三","四","五","六"]
	                },
	                months: {
	                    names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
	                    namesAbbr: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]
	                },
	                AM: ["上午","上午","上午"],
	                PM: ["下午","下午","下午"],
	                patterns: {
	                    d: "yyyy/M/d",
	                    D: "yyyy'年'M'月'd'日'",
	                    F: "yyyy'年'M'月'd'日' H:mm:ss",
	                    g: "yyyy/M/d H:mm",
	                    G: "yyyy/M/d H:mm:ss",
	                    m: "M月d日",
	                    M: "M月d日",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy'年'M'月'",
	                    Y: "yyyy'年'M'月'"
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