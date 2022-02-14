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

	module.exports = __webpack_require__(1004);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 980:
/***/ (function(module, exports) {

	module.exports = require("../command");

/***/ }),

/***/ 1004:
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

	var PrintCommand = Command.extend({
	    init: function(options) {
	        Command.fn.init.call(this, options);

	        this.managesUndoRedo = true;
	    },

	    exec: function() {
	        var editor = this.editor;

	        if (kendo.support.browser.msie) {
	            editor.document.execCommand("print", false, null);
	        } else if (editor.window.print) {
	            editor.window.print();
	        }
	    }
	});

	extend(editorNS, {
	    PrintCommand: PrintCommand
	});

	registerTool("print", new Tool({ command: PrintCommand, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Print"})}));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });