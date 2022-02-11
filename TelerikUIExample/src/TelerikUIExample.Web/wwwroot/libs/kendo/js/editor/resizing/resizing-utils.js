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

	module.exports = __webpack_require__(1017);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 982:
/***/ (function(module, exports) {

	module.exports = require("../main");

/***/ }),

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(982)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	(function(kendo, undefined) {
	    var global = window;
	    var math = global.Math;
	    var min = math.min;
	    var max = math.max;
	    var parseFloat = global.parseFloat;

	    var $ = kendo.jQuery;
	    var extend = $.extend;

	    var Editor = kendo.ui.editor;

	    var PERCENTAGE = "%";
	    var PIXEL = "px";
	    var REGEX_NUMBER_IN_PERCENTAGES = /(\d+)(\.?)(\d*)%/;
	    var REGEX_NUMBER_IN_PIXELS = /(\d+)(\.?)(\d*)px/;
	    var STRING = "string";

	    function constrain(options) {
	        var value = options.value;
	        var lowerBound = options.min;
	        var upperBound = options.max;

	        return max(min(parseFloat(value), parseFloat(upperBound)), parseFloat(lowerBound));
	    }

	    function getScrollBarWidth(element) {
	        if  (element && !$(element).is("body") && element.scrollHeight > element.clientHeight) {
	            return kendo.support.scrollbar();
	        }

	        return 0;
	    }

	    function calculatePercentageRatio(value, total) {
	        if (inPercentages(value)) {
	            return parseFloat(value);
	        }
	        else {
	            return ((parseFloat(value) / total) * 100);
	        }
	    }

	    function inPercentages(value) {
	        return (typeof(value) === STRING && REGEX_NUMBER_IN_PERCENTAGES.test(value));
	    }

	    function inPixels(value) {
	        return (typeof(value) === STRING && REGEX_NUMBER_IN_PIXELS.test(value));
	    }

	    function toPercentages(value) {
	        return (parseFloat(value) + PERCENTAGE);
	    }

	    function toPixels(value) {
	        return (parseFloat(value) + PIXEL);
	    }

	    var ResizingUtils = {
	        constrain: constrain,
	        getScrollBarWidth: getScrollBarWidth,
	        calculatePercentageRatio: calculatePercentageRatio,
	        inPercentages: inPercentages,
	        inPixels: inPixels,
	        toPercentages: toPercentages,
	        toPixels: toPixels
	    };

	    extend(Editor, {
	        ResizingUtils: ResizingUtils
	    });
	})(window.kendo);

	}, __webpack_require__(3));


/***/ })

/******/ });