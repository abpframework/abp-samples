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

	module.exports = __webpack_require__(1401);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1108:
/***/ (function(module, exports) {

	module.exports = require("./kendo.toggleinputbase");

/***/ }),

/***/ 1109:
/***/ (function(module, exports) {

	module.exports = require("./html/input");

/***/ }),

/***/ 1401:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1108), __webpack_require__(1109)  ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "radiobutton",
	    name: "RadioButton",
	    category: "web",
	    description: "The RadioButton widget is used to display an input of type radio.",
	    depends: [ "toggleinputbase" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        ToggleInputBase = ui.ToggleInputBase;

	    var RadioButton = ToggleInputBase.extend({
	        init: function(element, options) {
	            ToggleInputBase.fn.init.call(this, element, options);

	            if (options && options.value && options.value.length) {
	                this.element.attr("value", options.value);
	            }
	        },

	        options: {
	            name: "RadioButton",
	            checked: null,
	            value: "",
	            enabled: true,
	            encoded: true,
	            label: null,
	            size: "medium"
	        },

	        RENDER_INPUT: kendo.html.renderRadioButton,
	        NS: ".kendoRadioButton"
	    });

	    kendo.cssProperties.registerPrefix("RadioButton", "k-radio-");

	    ui.plugin(RadioButton);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });