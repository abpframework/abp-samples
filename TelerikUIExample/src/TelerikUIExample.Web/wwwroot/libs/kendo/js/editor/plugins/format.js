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

	module.exports = __webpack_require__(987);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 980:
/***/ (function(module, exports) {

	module.exports = require("../command");

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(980) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {

	var kendo = window.kendo,
	    extend = $.extend,
	    Editor = kendo.ui.editor,
	    Tool = Editor.Tool,
	    Command = Editor.Command,
	    EditorUtils = Editor.EditorUtils;

	var FormatCommand = Command.extend({
	    init: function (options) {
	        options.formatter = options.formatter();
	        var finder = options.formatter.finder;
	        if (finder && EditorUtils.formatByName("immutable", finder.format)) {
	            finder._initOptions({immutables: options.immutables});
	        }
	        Command.fn.init.call(this, options);
	    }
	});

	var FormatTool = Tool.extend({
	    init: function (options) {
	        Tool.fn.init.call(this, options);
	    },

	    command: function (commandArguments) {
	        var that = this;
	        return new FormatCommand(extend(commandArguments, {
	                formatter: that.options.formatter
	            }));
	    },

	    update: function(ui, nodes) {
	        var isFormatted = this.options.finder.isFormatted(nodes);

	        ui.toggleClass("k-selected", isFormatted);
	        ui.attr("aria-pressed", isFormatted);
	    }
	});

	$.extend(Editor, {
	    FormatCommand: FormatCommand,
	    FormatTool: FormatTool
	});

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });