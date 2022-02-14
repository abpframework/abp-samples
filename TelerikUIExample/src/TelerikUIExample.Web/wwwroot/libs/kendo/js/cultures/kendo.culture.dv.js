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

	__webpack_require__(161);
	module.exports = __webpack_require__(161);


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["dv"] = {
	        name: "dv",
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
	                name: "",
	                abbr: "",
	                pattern: ["n $-","n $"],
	                decimals: 2,
	                ",": ",",
	                ".": ".",
	                groupSize: [3],
	                symbol: "ރ."
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],
	                    namesAbbr: ["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],
	                    namesShort: ["އާ","ހޯ","އަ","ބު","ބު","ހު","ހޮ"]
	                },
	                months: {
	                    names: ["ޖަނަވަރީ","ފެބްރުއަރީ","މާރޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޮގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ"],
	                    namesAbbr: ["ޖަނަވަރީ","ފެބްރުއަރީ","މާރޗް","އޭޕްރިލް","މެއި","ޖޫން","ޖުލައި","އޮގަސްޓް","ސެޕްޓެމްބަރ","އޮކްޓޯބަރ","ނޮވެމްބަރ","ޑިސެމްބަރ"]
	                },
	                AM: ["މކ","މކ","މކ"],
	                PM: ["މފ","މފ","މފ"],
	                patterns: {
	                    d: "dd/MM/yy",
	                    D: "ddd, yyyy MMMM dd",
	                    F: "ddd, yyyy MMMM dd HH:mm:ss",
	                    g: "dd/MM/yy HH:mm",
	                    G: "dd/MM/yy HH:mm:ss",
	                    m: "MMMM dd",
	                    M: "MMMM dd",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy, MMMM",
	                    Y: "yyyy, MMMM"
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