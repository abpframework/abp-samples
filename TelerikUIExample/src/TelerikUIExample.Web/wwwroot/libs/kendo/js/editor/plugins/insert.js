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

	module.exports = __webpack_require__(999);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 980:
/***/ (function(module, exports) {

	module.exports = require("../command");

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(980) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {

	    // Imports ================================================================
	    var kendo = window.kendo,
	        editorNS = kendo.ui.editor,
	        Command = editorNS.Command,
	        GenericCommand = editorNS.GenericCommand,
	        EditorUtils = editorNS.EditorUtils,
	        registerTool = EditorUtils.registerTool,
	        Tool = editorNS.Tool,
	        ToolTemplate = editorNS.ToolTemplate,
	        RestorePoint = editorNS.RestorePoint,
	        extend = $.extend;

	var InsertHtmlCommand = Command.extend({
	    init: function(options) {
	        Command.fn.init.call(this, options);

	        this.managesUndoRedo = true;
	    },

	    exec: function() {
	        var editor = this.editor;
	        var options = this.options;
	        var range = options.range;
	        var body = editor.body;
	        var startRestorePoint = new RestorePoint(range, body);
	        var html = options.html || options.value || '';

	        editor.selectRange(range);

	        editor.clipboard.paste(html, options);

	        if (options.postProcess) {
	            options.postProcess(editor, editor.getRange());
	        }

	        var genericCommand = new GenericCommand(startRestorePoint, new RestorePoint(editor.getRange(), body));
	        genericCommand.editor = editor;
	        editor.undoRedoStack.push(genericCommand);

	        editor.focus();
	    }
	});

	var InsertHtmlTool = Tool.extend({
	    initialize: function(ui, initOptions) {
	        var editor = initOptions.editor,
	            options = this.options,
	            dataSource = options.items ? options.items : editor.options.insertHtml;

	        this._selectBox = new editorNS.SelectBox(ui, {
	            dataSource: dataSource,
	            dataTextField: "text",
	            dataValueField: "value",
	            change: function () {
	                Tool.exec(editor, 'insertHtml', this.value());
	            },
	            title: editor.options.messages.insertHtml,
	            highlightFirst: false
	        });

	        ui.attr("title", initOptions.title);
	        this._selectBox.wrapper.attr("title", initOptions.title);
	    },

	    command: function (commandArguments) {
	        return new InsertHtmlCommand(commandArguments);
	    },

	    update: function(ui) {
	        var selectbox = ui.data("kendoSelectBox") || ui.find("select").data("kendoSelectBox");
	        selectbox.close();
	        selectbox.value(selectbox.options.title);
	    }
	});

	extend(editorNS, {
	    InsertHtmlCommand: InsertHtmlCommand,
	    InsertHtmlTool: InsertHtmlTool
	});

	registerTool("insertHtml", new InsertHtmlTool({template: new ToolTemplate({template: EditorUtils.dropDownListTemplate, title: "Insert HTML", initialValue: "Insert HTML"})}));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });