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

	__webpack_require__(1620);
	module.exports = __webpack_require__(1620);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1620:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(20),
	        __webpack_require__(1621)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {

	var Workbook = kendo.ooxml.Workbook;

	kendo.ooxml.IntlService.register({
	    toString: kendo.toString
	});

	kendo.ooxml.Workbook = Workbook.extend({
	    toDataURL: function() {
	        var result = Workbook.fn.toDataURL.call(this);
	        if (typeof result !== 'string') {
	            throw new Error('The toDataURL method can be used only with jsZip 2. Either include jsZip 2 or use the toDataURLAsync method.');
	        }

	        return result;
	    },

	    toDataURLAsync: function() {
	        var deferred = $.Deferred();
	        var result = Workbook.fn.toDataURL.call(this);
	        if (typeof result === 'string') {
	            result = deferred.resolve(result);
	        } else if (result && result.then){
	            result.then(function(dataURI) {
	                deferred.resolve(dataURI);
	            }, function() {
	                deferred.reject();
	            });
	        }

	        return deferred.promise();
	    }
	});

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 1621:
/***/ (function(module, exports) {

	module.exports = require("./kendo-ooxml");

/***/ })

/******/ });