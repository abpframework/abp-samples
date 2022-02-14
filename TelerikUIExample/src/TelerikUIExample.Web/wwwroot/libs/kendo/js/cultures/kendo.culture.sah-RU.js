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

	__webpack_require__(700);
	module.exports = __webpack_require__(700);


/***/ }),

/***/ 700:
/***/ (function(module, exports) {

	(function( window, undefined ) {
	    kendo.cultures["sah-RU"] = {
	        name: "sah-RU",
	        numberFormat: {
	            pattern: ["-n"],
	            decimals: 2,
	            ",": " ",
	            ".": ",",
	            groupSize: [3],
	            percent: {
	                pattern: ["-n%","n%"],
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
	                    names: ["Өрөбүл","энидиэнньик","Оптуорунньук","Сэрэдээ","Чэппиэр","Бээтинсэ","Субуота"],
	                    namesAbbr: ["Өр","Бн","Оп","Ср","Чп","Бт","Сб"],
	                    namesShort: ["Өр","Бн","Оп","Ср","Чп","Бт","Сб"]
	                },
	                months: {
	                    names: ["Тохсунньу","Олунньу","Кулун тутар","Муус устар","Ыам ыйа","Бэс ыйа","От ыйа","Атырдьах ыйа","Балаҕан ыйа","Алтынньы","Сэтинньи","Ахсынньы"],
	                    namesAbbr: ["Тхс","Олн","Клн","Мсу","Ыам","Бэс","Оты","Атр","Блҕ","Алт","Сэт","Ахс"]
	                },
	                AM: ["КИ","ки","КИ"],
	                PM: ["КК","кк","КК"],
	                patterns: {
	                    d: "dd.MM.yyyy",
	                    D: "dddd, yyyy 'с.' MMMM d 'күнэ'",
	                    F: "dddd, yyyy 'с.' MMMM d 'күнэ' H:mm:ss",
	                    g: "dd.MM.yyyy H:mm",
	                    G: "dd.MM.yyyy H:mm:ss",
	                    m: "MMMM d күнэ",
	                    M: "MMMM d күнэ",
	                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	                    t: "H:mm",
	                    T: "H:mm:ss",
	                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
	                    y: "yyyy 'с.' MMMM",
	                    Y: "yyyy 'с.' MMMM"
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