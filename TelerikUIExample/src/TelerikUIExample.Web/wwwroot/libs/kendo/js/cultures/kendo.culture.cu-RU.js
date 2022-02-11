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

	__webpack_require__(139);
	module.exports = __webpack_require__(139);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["cu-RU"] = {
	        name: "cu-RU",
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
	                name: "Russian Ruble",
	                abbr: "RUB",
	                pattern: ["-n $","n $"],
	                decimals: 2,
	                ",": " ",
	                ".": ",",
	                groupSize: [3],
	                symbol: "₽"
	            }
	        },
	        calendars: {
	            standard: {
	                days: {
	                    names: ["недѣ́лѧ","понедѣ́льникъ","вто́рникъ","среда̀","четверто́къ","пѧто́къ","сꙋббѡ́та"],
	                    namesAbbr: ["ндⷧ҇ѧ","пнⷣе","втоⷬ҇","срⷣе","чеⷦ҇","пѧⷦ҇","сꙋⷠ҇"],
	                    namesShort: ["ндⷧ҇ѧ","пнⷣе","втоⷬ҇","срⷣе","чеⷦ҇","пѧⷦ҇","сꙋⷠ҇"]
	                },
	                months: {
	                    names: ["і҆аннꙋа́рїй","феврꙋа́рїй","ма́ртъ","а҆прі́ллїй","ма́їй","і҆ꙋ́нїй","і҆ꙋ́лїй","а҆́ѵгꙋстъ","септе́мврїй","ѻ҆ктѡ́врїй","ное́мврїй","деке́мврїй"],
	                    namesAbbr: ["і҆аⷩ҇","феⷡ҇","маⷬ҇","а҆пⷬ҇","маꙵ","і҆ꙋⷩ҇","і҆ꙋⷧ҇","а҆́ѵⷢ҇","сеⷫ҇","ѻ҆кⷮ","ноеⷨ","деⷦ҇"]
	                },
	                AM: ["ДП","дп","ДП"],
	                PM: ["ПП","пп","ПП"],
	                patterns: {
	                    d: "yyyy.MM.dd",
	                    D: "dddd, d MMMM 'л'. yyyy.",
	                    F: "dddd, d MMMM 'л'. yyyy. HH:mm:ss",
	                    g: "yyyy.MM.dd HH:mm",
	                    G: "yyyy.MM.dd HH:mm:ss",
	                    m: "MMMM d",
	                    M: "MMMM d",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "HH:mm",
	                    T: "HH:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy MMMM",
	                    Y: "yyyy MMMM"
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