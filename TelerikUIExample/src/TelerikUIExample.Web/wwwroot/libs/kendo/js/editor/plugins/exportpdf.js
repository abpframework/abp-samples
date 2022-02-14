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

	module.exports = __webpack_require__(983);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 980:
/***/ (function(module, exports) {

	module.exports = require("../command");

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(980) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {

	    // Imports ================================================================
	    var kendo = window.kendo,
	        editorNS = kendo.ui.editor,
	        Command = editorNS.Command,
	        EditorUtils = editorNS.EditorUtils,
	        registerTool = EditorUtils.registerTool,
	        Tool = editorNS.Tool,
	        ToolTemplate = editorNS.ToolTemplate,
	        extend = $.extend;

	var ExportPdfCommand = Command.extend({
	    init: function(options) {
	        this.async = true;
	        Command.fn.init.call(this, options);
	    },

	    exec: function() {
	        var that = this;
	        var range = that.lockRange(true);
	        var editor = that.editor;

	        editor._destroyResizings();

	        editor.saveAsPDF().then(function() {
	            that.releaseRange(range);
	            editor._initializeColumnResizing();
	            editor._initializeRowResizing();
	            editor._initializeElementResizing();
	        });
	    }
	});

	extend(editorNS, {
	    ExportPdfCommand: ExportPdfCommand
	});

	registerTool("pdf", new Tool({ command: ExportPdfCommand, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Export PDF"})}));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });