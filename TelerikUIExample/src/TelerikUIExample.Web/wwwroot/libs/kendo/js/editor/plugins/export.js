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

	module.exports = __webpack_require__(981);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(982) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {

	var kendo = window.kendo,
	    extend = $.extend,
	    proxy = $.proxy,
	    Editor = kendo.ui.editor,
	    EditorUtils = Editor.EditorUtils,
	    Command = Editor.Command,
	    Tool = Editor.Tool,
	    registerTool = EditorUtils.registerTool,
	    ToolTemplate = Editor.ToolTemplate,
	    defaultExportAsItems = [
	        { text: 'Docx', value: 'docx' },
	        { text: 'Rtf', value: 'rtf' },
	        { text: 'Pdf', value: 'pdf' },
	        { text: 'Html', value: 'html' },
	        { text: 'Plain Text', value: 'txt' }
	    ];

	var ExportAsCommand = Command.extend({
	    init: function(options) {
	        var cmd = this;
	        cmd.options = options;
	        Command.fn.init.call(cmd, options);
	        cmd.attributes = null;
	        cmd.exportType = options.exportType;
	    },

	    exec: function() {
	        var cmd = this;
	        var range = this.lockRange(true);
	        cmd.postToProxy();
	        cmd.releaseRange(range);
	    },

	    postToProxy: function() {
	        this.generateForm().appendTo('body').submit().remove();
	    },

	    generateForm: function() {
	        var cmd = this;
	        var exportAsOptions = cmd.editor.options.exportAs;
	        var form = $('<form>').attr({
	            action: exportAsOptions && exportAsOptions.proxyURL || "",
	            method: 'POST'
	        });

	        form.append([
	            cmd.valueInput(),
	            cmd.exportTypeInput(),
	            cmd.fileNameInput()
	        ]);

	        return form;
	    },

	    valueInput: function() {
	        var editor = this.editor;
	        return $('<input>').attr({
	            value: editor.encodedValue(),
	            name: 'value',
	            type: 'hidden'
	        });
	    },

	    exportTypeInput: function() {
	        var cmd = this;
	        return $('<input>').attr({
	            value: cmd.exportType,
	            name: 'exportType',
	            type: 'hidden'
	        });

	    },

	    fileNameInput: function() {
	        var editor = this.editor;
	        var exportAsOptions = editor.options.exportAs;
	        var fileName = exportAsOptions && exportAsOptions.fileName || editor.element.attr("id") || "editor";
	        return $('<input>').attr({
	            value: fileName,
	            name: 'fileName',
	            type: 'hidden'
	        });
	    }
	});

	var ExportAsTool = Tool.extend({
	    init: function(options) {
	        var tool = this;
	        Tool.fn.init.call(tool, kendo.deepExtend({}, tool.options, options));
	        tool.type = 'kendoSelectBox';
	    },

	    options: {
	        items: defaultExportAsItems,
	        width: 140
	    },

	    command: function(args) {
	        var value = args.value;
	        return new Editor.ExportAsCommand({
	            range: args.range,
	            exportType: value.exportType
	        });
	    },

	    initialize: function(ui, initOptions) {
	        var tool = this;
	        var editor = initOptions.editor;
	        var options = tool.options;
	        var toolName = options.name;
	        var changeHandler = proxy(tool.changeHandler, tool);
	        var dataSource = options.items || editor.options[toolName];
	        var displayName = editor.options.messages[toolName];
	        var selectBox;

	        dataSource.unshift({
	            text: displayName,
	            value: ""
	        });
	        tool.editor = editor;
	        ui.width(options.width);
	        selectBox = ui.kendoSelectBox({
	            dataTextField: 'text',
	            dataValueField: 'value',
	            dataSource: dataSource,
	            autoSize: true,
	            change: changeHandler,
	            open: function(e) {
	                var sender = e.sender;
	                sender.items()[0].style.display = "none";
	                sender.unbind("open");
	            },
	            highlightFirst: false,
	            template: kendo.template('<span unselectable="on" style="display:block;#=(data.style||"")#">#:data.text#</span>'),
	            valueTemplate: '<span class="k-editor-export"><span class="k-icon k-i-export"></span><span class="k-export-tool-text">' + displayName + '</span></span>'
	        }).data("kendoSelectBox");

	        ui.attr("title", initOptions.title);
	        selectBox.wrapper.attr("title", initOptions.title);

	        ui.addClass('k-decorated').closest('.k-widget').removeClass('k-' + toolName).find('*').addBack().attr('unselectable', 'on');
	    },

	    changeHandler: function(e) {
	        var sender = e.sender;
	        var dataItem = sender.dataItem();
	        var value = dataItem && dataItem.value;

	        this._exec(value);
	        sender.value("");
	    },

	    _exec: function(value) {
	        if (value) {
	            Tool.exec(this.editor, this.options.name, { exportType: value } );
	        }
	    },

	    destroy: function() {
	        this._ancestor = null;
	    }
	});

	extend(Editor, {
	    ExportAsTool: ExportAsTool,
	    ExportAsCommand: ExportAsCommand
	});

	registerTool('exportAs', new ExportAsTool({
	    template: new ToolTemplate({
	        template: EditorUtils.dropDownListTemplate,
	        title: 'Export As'
	    })
	}));

	}(window.kendo.jQuery));

	}, __webpack_require__(3));


/***/ }),

/***/ 982:
/***/ (function(module, exports) {

	module.exports = require("../main");

/***/ })

/******/ });