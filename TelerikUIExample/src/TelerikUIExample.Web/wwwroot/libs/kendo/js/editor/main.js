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

	__webpack_require__(974);
	module.exports = __webpack_require__(974);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = require("../kendo.combobox");

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*jshint scripturl: true */
	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(975),
	        __webpack_require__(6),
	        __webpack_require__(976),
	        __webpack_require__(977),
	        __webpack_require__(978)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($,undefined) {

	    // Imports ================================================================
	    var kendo = window.kendo,
	        Class = kendo.Class,
	        Widget = kendo.ui.Widget,
	        os = kendo.support.mobileOS,
	        browser = kendo.support.browser,
	        extend = $.extend,
	        proxy = $.proxy,
	        deepExtend = kendo.deepExtend,
	        keys = kendo.keys;

	    var SELECT = "select";
	    var SELECT_OVERLAY_SELECTOR = "select.k-select-overlay";
	    var PLACEHOLDER_CLASS= "k-placeholder";
	    var PLACEHOLDER_TAG_ID = "placeholder";
	    var REFRESH_INTERVAL = 200;
	    var DEFAULT_LANGUAGE = "en";

	    // options can be: template (as string), cssClass, title, defaultValue
	    var ToolTemplate = Class.extend({
	        init: function(options) {
	            this.options = options;
	        },

	        getHtml: function() {
	            var options = this.options;
	            return kendo.template(options.template, {useWithBlock:false})(options);
	        }
	    });

	    var EditorUtils = {
	        editorWrapperTemplate:
	            '<table cellspacing="0" cellpadding="0" class="k-widget k-editor" role="presentation">' +
	                '<tbody>' +
	                    '<tr role="presentation"><td class="k-editor-toolbar-wrap" role="presentation"><ul class="k-toolbar k-editor-toolbar" role="toolbar"></ul></td></tr>' +
	                    '<tr><td class="k-editable-area k-editor-content"></td></tr>' +
	                '</tbody>' +
	            '</table>',

	        buttonTemplate:
	            '# var iconCssClass = "k-icon k-i-" + kendo.toHyphens(data.cssClass.replace("k-", ""));#' +
	            '# var dataPopup = data.popup ? "data-popup" : "";#' +
	            '<button type="button" tabindex="0" role="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-tool" #= dataPopup # title="#= data.title #" aria-label="#= data.title #">' +
	                '<span class="#= iconCssClass #"></span>' +
	                '<span class="k-tool-text k-button-text">#= data.title #</span>' +
	            '</button>',

	        iconTextButtonTemplate:
	            '# var iconCssClass = "k-icon k-i-" + kendo.toHyphens(data.cssClass.replace("k-", ""));#' +
	            '# var dataPopup = data.popup ? "data-popup" : "";#' +
	            '<button type="button" tabindex="0" role="button" class="k-i-import k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" #= dataPopup # title="#= data.title #" aria-label="#= data.title #">' +
	                '<span class="k-button-icon #= iconCssClass #"></span>' +
	                '<span class="k-button-text">#= data.title #</span>' +
	            '</button>',

	        tableWizardButtonTemplate:
	            '# var iconCssClass = "k-icon k-i-" + kendo.toHyphens(data.cssClass.replace("k-", ""));#' +
	            '# var dataPopup = data.popup ? "data-popup" : "";#' +
	            '<button type="button" tabindex="0" role="button" class="k-tool k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" #= dataPopup # title="#= data.title #" aria-label="#= data.title #">'+
	                '<span class="#= iconCssClass #"></span>' +
	                '<span class="k-tool-text">#= data.title #</span>'+
	            '</button>',

	        colorPickerTemplate:
	            '<input class="k-colorpicker k-icon k-i-#= data.cssClass.replace("k-", "") #" />',

	        comboBoxTemplate:
	            '<select title="#= data.title #" aria-label="#= data.title #" class="#= data.cssClass #"></select>',

	        dropDownListTemplate:
	            '<span class="k-editor-dropdown"><select title="#= data.title #" aria-label="#= data.title #" class="#= data.cssClass #"></select></span>',

	        separatorTemplate:
	            '<span class="k-separator"></span>',

	        overflowAnchorTemplate:
	            '<button type="button" tabindex="0" role="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-tool k-overflow-anchor" data-popup' +
	                ' title="#= data.title #" aria-label="#= data.title #" aria-haspopup="true" aria-expanded="false">' +
	                '<span class="k-icon k-i-more-vertical k-button-icon"></span>' +
	            '</button>',

	        formatByName: function(name, format) {
	            for (var i = 0; i < format.length; i++) {
	                if ($.inArray(name, format[i].tags) >= 0) {
	                    return format[i];
	                }
	            }
	        },

	        getToolCssClass: function (name) {
	            var toolCssClassNames = {

	                superscript: "sup-script",
	                subscript: "sub-script",
	                justifyLeft: "align-left",
	                justifyCenter: "align-center",
	                justifyRight: "align-right",
	                justifyFull: "align-justify",
	                insertUnorderedList: "list-unordered",
	                insertOrderedList: "list-ordered",
	                insertUpperRomanList: "list-roman-upper",
	                insertLowerRomanList: "list-roman-lower",
	                "import": "import",
	                indent: "indent-increase",
	                outdent: "indent-decrease",
	                createLink: "link-horizontal",
	                unlink: "unlink-horizontal",
	                insertImage: "image",
	                insertFile: "file-add",
	                viewHtml: "html",
	                foreColor: "foreground-color",
	                backColor: "paint",
	                createTable: "table-insert",
	                addColumnLeft: "table-column-insert-left",
	                addColumnRight: "table-column-insert-right",
	                addRowAbove: "table-row-insert-above",
	                addRowBelow: "table-row-insert-below",
	                deleteRow: "table-row-delete",
	                deleteColumn: "table-column-delete",
	                mergeCellsHorizontally: "cells-merge-horizontally",
	                mergeCellsVertically: "cells-merge-vertically",
	                splitCellHorizontally: "cell-split-horizontally",
	                splitCellVertically: "cell-split-vertically",
	                tableWizard: "table-properties",
	                tableWizardInsert: "table-wizard",
	                tableAlignLeft: "table-position-left",
	                tableAlignCenter: "table-position-center",
	                tableAlignRight: "table-position-right",
	                cleanFormatting: "clear-css",
	                copyFormat: "copy-format",
	                applyFormat: "apply-format"
	            };

	            var cssClass = toolCssClassNames[name];
	            if(cssClass) {
	                return cssClass;
	            }
	            return name;
	        },

	        registerTool: function(toolName, tool) {
	            var toolOptions = tool.options;
	            if (toolOptions && toolOptions.template) {
	                toolOptions.template.options.cssClass = "k-" + EditorUtils.getToolCssClass(toolName);
	            }

	            if (!tool.name) {
	                tool.options.name = toolName;
	                tool.name = toolName.toLowerCase();
	            }

	            Editor.defaultTools[toolName] = tool;
	        },

	        registerFormat: function(formatName, format) {
	            Editor.fn.options.formats[formatName] = format;
	        },

	        cacheComments: function (content, comments) {
	            for(var index in comments){
	                content = content.replace(comments[index], "{" + index + "}");
	            }
	            return content;
	        },

	        retrieveComments: function (content, comments) {
	            for(var index in comments){
	                content = content.replace("{" + index + "}", comments[index]);
	            }
	            return content;
	        }
	    };

	    var messages = {
	        bold: "Bold",
	        italic: "Italic",
	        underline: "Underline",
	        strikethrough: "Strikethrough",
	        superscript: "Superscript",
	        subscript: "Subscript",
	        justifyCenter: "Center text",
	        justifyLeft: "Align text left",
	        justifyRight: "Align text right",
	        justifyFull: "Justify",
	        insertUnorderedList: "Insert unordered list",
	        insertOrderedList: "Insert ordered list",
	        indent: "Indent",
	        outdent: "Outdent",
	        createLink: "Insert hyperlink",
	        unlink: "Remove hyperlink",
	        insertImage: "Insert image",
	        insertFile: "Insert file",
	        insertHtml: "Insert HTML",
	        viewHtml: "View HTML",
	        fontName: "Select font family",
	        fontNameInherit: "(inherited font)",
	        fontSize: "Select font size",
	        fontSizeInherit: "(inherited size)",
	        formatBlock: "Format",
	        formatting: "Format",
	        foreColor: "Color",
	        backColor: "Background color",
	        style: "Styles",
	        emptyFolder: "Empty Folder",
	        editAreaTitle: "Editable area. Press F10 for toolbar.",
	        uploadFile: "Upload",
	        overflowAnchor: "More tools",
	        orderBy: "Arrange by:",
	        orderBySize: "Size",
	        orderByName: "Name",
	        invalidFileType: "The selected file \"{0}\" is not valid. Supported file types are {1}.",
	        deleteFile: 'Are you sure you want to delete "{0}"?',
	        overwriteFile: 'A file with name "{0}" already exists in the current directory. Do you want to overwrite it?',
	        directoryNotFound: "A directory with this name was not found.",
	        imageWebAddress: "Web address",
	        imageAltText: "Alternate text",
	        imageWidth: "Width (px)",
	        imageHeight: "Height (px)",
	        fileWebAddress: "Web address",
	        fileTitle: "Title",
	        fileText: "Text",
	        linkWebAddress: "Web address",
	        linkText: "Text",
	        linkToolTip: "ToolTip",
	        linkOpenInNewWindow: "Open link in new window",
	        dialogUpdate: "Update",
	        dialogInsert: "Insert",
	        dialogOk: "Ok",
	        dialogCancel: "Cancel",
	        cleanFormatting: "Clean formatting",
	        createTable: "Create a table",
	        createTableHint: "Create a {0} x {1} table",
	        addColumnLeft: "Add column on the left",
	        addColumnRight: "Add column on the right",
	        addRowAbove: "Add row above",
	        addRowBelow: "Add row below",
	        deleteRow: "Delete row",
	        deleteColumn: "Delete column",
	        mergeCellsHorizontally: "Merge cells horizontally",
	        mergeCellsVertically: "Merge cells vertically",
	        splitCellHorizontally: "Split cells horizontally",
	        splitCellVertically: "Split cells vertically",
	        tableAlignLeft: "Table Align Left",
	        tableAlignCenter: "Table Align Center",
	        tableAlignRight: "Table Align Right",
	        tableWizard: "Table Wizard",
	        tableTab: "Table",
	        cellTab: "Cell",
	        accessibilityTab: "Accessibility",
	        caption: "Caption",
	        summary: "Summary",
	        width: "Width",
	        height: "Height",
	        units: "Units",
	        cellSpacing: "Cell Spacing",
	        cellPadding: "Cell Padding",
	        cellMargin: "Cell Margin",
	        alignment: "Alignment",
	        background: "Background",
	        cssClass: "CSS Class",
	        id: "ID",
	        border: "Border",
	        borderStyle: "Border Style",
	        collapseBorders: "Collapse borders",
	        wrapText: "Wrap text",
	        associateCellsWithHeaders: "Associate headers",
	        alignLeft: "Align Left",
	        alignCenter: "Align Center",
	        alignRight: "Align Right",
	        alignLeftTop: "Align Left Top",
	        alignCenterTop: "Align Center Top",
	        alignRightTop: "Align Right Top",
	        alignLeftMiddle: "Align Left Middle",
	        alignCenterMiddle: "Align Center Middle",
	        alignRightMiddle: "Align Right Middle",
	        alignLeftBottom: "Align Left Bottom",
	        alignCenterBottom: "Align Center Bottom",
	        alignRightBottom: "Align Right Bottom",
	        alignRemove: "Remove Alignment",
	        columns: "Columns",
	        rows: "Rows",
	        selectAllCells: "Select All Cells",
	        exportAs: "Export As",
	        "import": "Import",
	        print: "Print",
	        headerRows: "Header Rows",
	        headerColumns: "Header Cols",
	        tableSummaryPlaceholder: "Summary attribute is not HTML5 compatible.",
	        associateNone: "None",
	        associateScope: "Associate using 'scope' attribute",
	        associateIds: "Associate using Ids",
	        copyFormat: "Copy format",
	        applyFormat: "Apply format",
	        borderNone: "None",
	        undo: "Undo",
	        redo: "Redo"
	    };

	    var supportedBrowser = !os || (os.ios && os.flatVersion >= 500) || (!os.ios && typeof(document.documentElement.contentEditable) != 'undefined');

	    var toolGroups = {
	        basic: [ "bold", "italic", "underline" ],
	        alignment: [ "justifyLeft", "justifyCenter", "justifyRight" ],
	        lists: [ "insertUnorderedList", "insertOrderedList" ],
	        indenting: [ "indent", "outdent" ],
	        formatPainter: [ "copyFormat", "applyFormat" ],
	        links: [ "createLink", "unlink" ],
	        tables: [ "tableWizard", "createTable", "addColumnLeft", "addColumnRight", "addRowAbove", "addRowBelow", "deleteRow", "deleteColumn", "mergeCellsHorizontally", "mergeCellsVertically", "splitCellHorizontally", "splitCellVertically", "tableAlignLeft", "tableAlignCenter", "tableAlignRight" ]
	    };

	    var Editor = Widget.extend({
	        init: function (element, options) {
	            var that = this,
	                value,
	                editorNS = kendo.ui.editor,
	                toolbarContainer,
	                toolbarOptions,
	                type, comments;
	            var domElement;
	            var dom = editorNS.Dom;

	            /* suppress initialization in mobile webkit devices (w/o proper contenteditable support) */
	            if (!supportedBrowser) {
	                return;
	            }

	            Widget.fn.init.call(that, element, options);

	            that.options = deepExtend({}, that.options, options);
	            that.options.tools = that.options.tools.slice();

	            element = that.element;
	            domElement = element[0];

	            type = dom.name(domElement);

	            this._registerHandler(
	                element.closest("form"), "submit", proxy(that.update, that, undefined)
	            );

	            toolbarOptions = extend({}, that.options);
	            toolbarOptions.editor = that;

	            if (type == "textarea") {
	                that._wrapTextarea();

	                toolbarContainer = that.wrapper.find(".k-editor-toolbar");

	                if (domElement.id) {
	                    toolbarContainer.attr("aria-controls", domElement.id);
	                }
	            } else {
	                that.element.attr("contenteditable", true).addClass("k-widget k-editor k-editor-inline");

	                toolbarOptions.popup = true;

	                toolbarContainer = $('<ul class="k-toolbar k-editor-toolbar" role="toolbar" />').insertBefore(element);
	            }

	            that.toolbar = new editorNS.Toolbar(toolbarContainer[0], toolbarOptions);

	            that.toolbar.bindTo(that);

	            if (type == "textarea") {
	                setTimeout(function () {
	                    var heightStyle = that.wrapper[0].style.height;
	                    var expectedHeight = parseInt(heightStyle, 10);
	                    var actualHeight = that.wrapper.height();
	                    if (heightStyle.indexOf("px") > 0 && !isNaN(expectedHeight) && actualHeight > expectedHeight) {
	                        that.wrapper.height(expectedHeight - (actualHeight - expectedHeight));
	                    }
	                });
	            }

	            that._resizable();
	            that._initializeContentElement(that);

	            that.keyboard = new editorNS.Keyboard([
	                new editorNS.BackspaceHandler(that),
	                new editorNS.TypingHandler(that),
	                new editorNS.SystemHandler(that),
	                new editorNS.SelectAllHandler(that)
	            ]);

	            that.clipboard = new editorNS.Clipboard(this);

	            that.undoRedoStack = new kendo.util.UndoRedoStack();

	            if (options && options.value) {
	                value = options.value;
	            } else if (that.textarea) {
	                // indented HTML introduces problematic ranges in IE
	                value = domElement.value;

	                if(!value.replace(/\s/g, '').length) {
	                    value = value.replace(/\s/g, '');
	                }

	                // revert encoding of value when content is fetched from cache
	                if (that.options.encoded && domElement.defaultValue && domElement.defaultValue.trim().length) {
	                    value = domElement.defaultValue;
	                }

	                var deserializedRoot = editorNS.Serializer.htmlToDom(value, $("<div></div>")[0], that.options.deserialization);
	                comments = dom.getAllComments(deserializedRoot);
	                value = EditorUtils.cacheComments(value, comments);
	                value = value.replace(/[\r\n\v\f\t ]+/ig, " ");
	                value = EditorUtils.retrieveComments(value, comments);
	            } else {
	                value = domElement.innerHTML;
	            }

	            that.value(value || '\ufeff');

	            // using $.proxy here will break #5337
	            this._registerHandler(document, {
	                "mousedown": function() { that._endTyping(); },
	                "mouseup": function(e) { that._mouseup(e); }
	            });

	            that._initializeImmutables();

	            that.toolbar.resize();

	            kendo.notify(that);
	        },

	        setOptions: function(options) {
	            var editor = this;

	            Widget.fn.setOptions.call(editor, options);
	            if (options.tools) {
	                editor.toolbar.bindTo(editor);
	            }

	            this._initializePlaceholder();
	        },

	        _togglePlaceholder: function(show) {
	            var that = this,
	                body = that.body,
	                $body = $(body),
	                placeholder = that.options.placeholder;

	            if(!that.textarea || !placeholder) {
	                return;
	            }

	            $body.attr('aria-label', function() {
	                return  show ? placeholder : "";
	            });

	            $body.toggleClass(PLACEHOLDER_CLASS, show);
	        },

	        _endTyping: function() {
	            var keyboard = this.keyboard;

	            try {
	                if (keyboard.isTypingInProgress()) {
	                    keyboard.endTyping(true);
	                    this.saveSelection();
	                }
	            } catch (e) { }
	        },

	        _selectionChange: function() {
	            this._selectionStarted = false;
	            this.saveSelection();
	            this.trigger("select", {});
	        },

	        _resizable: function() {
	            var resizable = this.options.resizable;
	            var isResizable = $.isPlainObject(resizable) ? (resizable.content === undefined || resizable.content === true) : resizable;

	            if (isResizable && this.textarea) {
	                var draggableElement = $("<div class='k-resize-handle'><span class='k-icon k-i-arrow-45-down-right'></span></div>")
	                    .insertAfter(this.textarea);

	                this.wrapper.addClass('k-resizable');

	                this.wrapper.kendoResizable(extend({}, this.options.resizable, {
	                    draggableElement: draggableElement,
	                    start: function(e) {
	                        var editor = this.editor = $(e.currentTarget).closest(".k-editor");
	                        this.initialSize = editor.height();
	                        editor.find("td").last().append("<div class='k-overlay' />");
	                    },
	                    resize: function(e) {
	                        var delta = e.y.initialDelta;
	                        var newSize = this.initialSize + delta;
	                        var min = this.options.min || 0;
	                        var max = this.options.max || Infinity;

	                        newSize = Math.min(max, Math.max(min, newSize));

	                        this.editor.height(newSize);
	                    },
	                    resizeend: function() {
	                        this.editor.find(".k-overlay").remove();
	                        this.editor = null;
	                    }
	                }));

	                if (kendo.support.mobileOS.ios) {
	                    var resizableWidget = this.wrapper.getKendoResizable();
	                    resizableWidget.draggable.options.ignore = SELECT_OVERLAY_SELECTOR;
	                }
	            }
	        },

	        _initializeElementResizing: function() {
	            var editor = this;

	            kendo.ui.editor.ElementResizingFactory.current.create(editor);

	            editor._showElementResizeHandlesProxy = proxy(editor._showElementResizeHandles, editor);
	            editor.bind(SELECT, editor._showElementResizeHandlesProxy);
	        },

	        _destroyElementResizing: function() {
	            var editor = this;
	            var elementResizing = editor.elementResizing;

	            if (elementResizing) {
	                elementResizing.destroy();
	                editor.elementResizing = null;
	            }

	            if (editor._showElementResizeHandlesProxy) {
	                editor.unbind(SELECT, editor._showElementResizeHandlesProxy);
	            }
	        },

	        _showElementResizeHandles: function() {
	            var editor = this;
	            var elementResizing = editor.elementResizing;

	            if (elementResizing && elementResizing.element && elementResizing.element.parentNode) {
	                elementResizing.showResizeHandles();
	            } else if (elementResizing && (!elementResizing.element || !elementResizing.element.parentNode)) {
	                editor._destroyElementResizing();
	            }
	        },

	        _initializeColumnResizing: function() {
	            kendo.ui.editor.ColumnResizing.create(this);
	        },

	        _destroyColumnResizing: function() {
	            var editor = this;

	            if (editor.columnResizing) {
	                editor.columnResizing.destroy();
	                editor.columnResizing = null;
	            }
	        },

	        _initializeRowResizing: function() {
	            kendo.ui.editor.RowResizing.create(this);
	        },

	        _destroyRowResizing: function() {
	            var editor = this;

	            if (editor.rowResizing) {
	                editor.rowResizing.destroy();
	                editor.rowResizing = null;
	            }
	        },

	        _wrapTextarea: function() {
	            var that = this,
	                textarea = that.element,
	                w = textarea[0].style.width,
	                h = textarea[0].style.height,
	                template = EditorUtils.editorWrapperTemplate,
	                editorWrap = $(template).insertBefore(textarea).width(w).height(h),
	                editArea = editorWrap.find(".k-editable-area");

	            textarea.attr("autocomplete", "off")
	                .appendTo(editArea).addClass("k-content k-raw-content").css("display", "none");

	            that.textarea = textarea;
	            that.wrapper = editorWrap;
	        },

	        _createContentElement: function(stylesheets) {
	            var editor = this;
	            var iframe, wnd, doc;
	            var textarea = editor.textarea;
	            var specifiedDomain = editor.options.domain;
	            var domain = specifiedDomain || document.domain;
	            var domainScript = "";
	            var src = 'javascript:""';
	            var lang ="";

	            textarea.hide();

	            iframe = $("<iframe />", { title: editor.options.messages.editAreaTitle, frameBorder: "0" })[0];

	            $(iframe)
	                .css("display", "")
	                .addClass("k-content k-iframe")
	                .attr("tabindex", textarea[0].tabIndex)
	                .insertBefore(textarea);

	            // automatically relax same-origin policy if document.domain != location.hostname,
	            // or forcefully relax if options.domain is specified (for document.domain = document.domain scenario)
	            if (specifiedDomain || domain != location.hostname) {
	                // relax same-origin policy
	                domainScript = "<script>document.domain=\"" + domain + "\"</script>";
	                src = "javascript:document.write('" + domainScript + "')";
	                iframe.src = src;
	            }

	            if(!iframe.src) {
	                iframe.src = "";
	            }

	            wnd = iframe.contentWindow || iframe;
	            doc = wnd.document || iframe.contentDocument;

	            $(iframe).one("load", function() {
	                editor.toolbar.decorateFrom(doc.body);
	            });

	            lang = document.getElementsByTagName("html")[0].getAttribute("lang") || DEFAULT_LANGUAGE;

	            doc.open();
	            doc.write(
	                "<!DOCTYPE html><html lang='" + lang + "'><head>" +
	                "<meta charset='utf-8' />" +
	                "<title>Kendo UI Editor content</title>" +
	                "<style>" +
	                    "html{padding:0;margin:0;height:100%;min-height:100%;cursor:text;}" +
	                    "body{padding:0;margin:0;}" +
	                    "body{box-sizing:border-box;font-size:12px;font-family:Verdana,Geneva,sans-serif;margin-top:-1px;padding:5px .4em 0;" +
	                    "word-wrap: break-word;-webkit-nbsp-mode: space;-webkit-line-break: after-white-space;" +
	                    (kendo.support.isRtl(textarea) ? "direction:rtl;" : "") +
	                    (os.ios ? "word-break:keep-all;" : "") +
	                    "}" +
	                    "h1{font-size:2em;margin:.67em 0}h2{font-size:1.5em}h3{font-size:1.16em}h4{font-size:1em}h5{font-size:.83em}h6{font-size:.7em}" +
	                    "p{margin:0 0 1em;}.k-marker{display:none;}.k-paste-container,.Apple-style-span{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}" +
	                    "ul,ol{padding-left:2.5em}" +
	                    "span{-ms-high-contrast-adjust:none;}" +
	                    "a{color:#00a}" +
	                    "code{font-size:1.23em}" +
	                    "telerik\\3Ascript{display: none;}" +
	                    ".k-table{width:100%;border-spacing:0;margin: 0 0 1em;}" +
	                    ".k-table td{min-width:1px;padding:.2em .3em;}" +
	                    ".k-table,.k-table td{outline:0;border: 1px dotted #ccc;}" +
	                    ".k-table th{outline:0;border: 1px dotted #999;}" +
	                    ".k-table p{margin:0;padding:0;}" +
	                    ".k-column-resize-handle-wrapper {position: absolute; height: 10px; width:10px; cursor: col-resize; z-index: 2;}" +
	                    ".k-column-resize-handle {width: 100%; height: 100%;}" +
	                    ".k-column-resize-handle > .k-column-resize-marker {width:2px; height:100%; margin:0 auto; background-color:#00b0ff; display:none; opacity:0.8;}" +
	                    ".k-row-resize-handle-wrapper {position: absolute; cursor: row-resize; z-index:2; width: 10px; height: 10px;}" +
	                    ".k-row-resize-handle {display: table; width: 100%; height: 100%;}" +
	                    ".k-row-resize-marker-wrapper{display: table-cell; height:100%; width:100%; margin:0; padding:0; vertical-align: middle;}" +
	                    ".k-row-resize-marker{margin: 0; padding:0; width:100%; height:2px; background-color: #00b0ff; opacity:0.8; display:none;}" +
	                    ".k-element-resize-handle-wrapper {position: absolute; background-color: #fff; border: 1px solid #000; z-index: 100; width: 5px; height: 5px;}" +
	                    ".k-element-resize-handle {width: 100%; height: 100%;}" +
	                    ".k-element-resize-handle.k-resize-east{cursor:e-resize;}" +
	                    ".k-element-resize-handle.k-resize-north{cursor:n-resize;}" +
	                    ".k-element-resize-handle.k-resize-northeast{cursor:ne-resize;}" +
	                    ".k-element-resize-handle.k-resize-northwest{cursor:nw-resize;}" +
	                    ".k-element-resize-handle.k-resize-south{cursor:s-resize;}" +
	                    ".k-element-resize-handle.k-resize-southeast{cursor:se-resize;}" +
	                    ".k-element-resize-handle.k-resize-southwest{cursor:sw-resize;}" +
	                    ".k-element-resize-handle.k-resize-west{cursor:w-resize;}" +
	                    ".k-table.k-element-resizing{opacity:0.6;}" +
	                    ".k-placeholder{color:grey}" +
	                    "k\\:script{display:none;}" +
	                "</style>" +
	                domainScript +
	                $.map(stylesheets, function(href){
	                    return "<link rel='stylesheet' href='" + href + "'>";
	                }).join("") +
	                "</head><body autocorrect='off' contenteditable='true'></body></html>"
	            );
	            doc.close();

	            return wnd;
	        },

	        _blur: function() {
	            var textarea = this.textarea;
	            var old = textarea ? textarea.val() : this._oldValue;
	            var value = this.options.encoded ? this.encodedValue() : this.value();

	            this.update();

	            if (textarea) {
	                textarea.trigger("blur");
	            }

	            if (value != old) {
	                this.trigger("change");
	                if(textarea) {
	                    textarea.trigger("change");
	                }
	            }
	        },

	        _spellCorrect: function(editor) {
	            var beforeCorrection;
	            var falseTrigger = false;

	            this._registerHandler(editor.body, {
	                "contextmenu": function() {
	                    editor.one("select", function() {
	                        beforeCorrection = null;
	                    });

	                    editor._spellCorrectTimeout = setTimeout(function() {
	                        beforeCorrection = new kendo.ui.editor.RestorePoint(editor.getRange(), editor.body);
	                        falseTrigger = false;
	                    }, 10);
	                },
	                "input": function() {
	                    if (!beforeCorrection) {
	                        return;
	                    }

	                    if (kendo.support.browser.mozilla && !falseTrigger) {
	                        falseTrigger = true;
	                        return;
	                    }

	                    kendo.ui.editor._finishUpdate(editor, beforeCorrection);
	                }
	            });
	        },

	        _registerHandler: function(element, type, handler) {
	            var editor = this;
	            var NS = ".kendoEditor";
	            var eventNames;
	            var i;

	            element = $(element);

	            if (!this._handlers) {
	                this._handlers = [];
	            }

	            if (element.length) {
	                if ($.isPlainObject(type)) {
	                    for (var t in type) {
	                        if (type.hasOwnProperty(t)) {
	                            this._registerHandler(element, t, type[t]);
	                        }
	                    }
	                } else {
	                    //map the original event to handle interaction on mobile platforms
	                    eventNames = kendo.applyEventMap(type).split(" ");

	                    for (i = 0; i < eventNames.length; i++) {
	                        editor._handlers.push({
	                            element: element,
	                            type: eventNames[i] + NS,
	                            handler: handler
	                        });

	                        element.on(eventNames[i] + NS, handler);
	                    }
	                }
	            }
	        },

	        _deregisterHandlers: function() {
	            var handlers = this._handlers;

	            for (var i = 0; i < handlers.length; i++) {
	                var h = handlers[i];
	                h.element.off(h.type, h.handler);
	            }

	            this._handlers = [];
	        },

	        _initializeContentElement: function() {
	            var editor = this;
	            var doc;
	            var blurTrigger;
	            var mousedownTrigger;

	            if (editor.textarea) {
	                editor.window = editor._createContentElement(editor.options.stylesheets);
	                doc = editor.document = editor.window.contentDocument || editor.window.document;

	                // Ensure that body exists as various Firefox plugins can cause a delay of the body creation
	                // https://github.com/telerik/kendo-ui-core/issues/3515
	                if (!doc.body) {
	                    var body = doc.createElement("body");
	                    body.setAttribute("contenteditable", "true");
	                    body.setAttribute("autocorrect", "off");
	                    doc.getElementsByTagName("html")[0].appendChild(body);

	                    var interval = setInterval(function (){
	                        if ($(editor.document).find("body").length > 1) {
	                            $(editor.document).find("body").last().remove();
	                            window.clearInterval(interval);
	                        }
	                    },10);
	                }

	                editor.body = doc.body;

	                blurTrigger = editor.window;
	                mousedownTrigger = doc;

	                this._registerHandler(doc, "mouseup", proxy(this._mouseup, this));
	            } else {
	                editor.window = window;
	                doc = editor.document = document;
	                editor.body = editor.element[0];

	                blurTrigger = editor.body;
	                mousedownTrigger = editor.body;

	                editor.toolbar.decorateFrom(editor.body);
	            }

	            this._registerHandler(blurTrigger, "blur", proxy(this._blur, this));
	            editor._registerHandler(mousedownTrigger, "down", proxy(editor._mousedown, editor));

	            try {
	                doc.execCommand("enableInlineTableEditing", null, false);
	            } catch(e) { }

	            if (kendo.support.touch) {
	                this._registerHandler(doc, {
	                    "keydown": function() {
	                        // necessary in iOS when touch events are bound to the page
	                        if (kendo._activeElement() != doc.body) {
	                            editor.window.focus();
	                        }
	                    }
	                });
	            }

	            this._initializePlaceholder();

	            this._spellCorrect(editor);

	            this._registerHandler(editor.document, {
	                "mouseover dragenter": function(e){
	                    var height = $(editor.body).height();
	                    var htmlHeight = $(editor.body.parentElement).height();

	                    if (htmlHeight > height && e.target.nodeName.toLowerCase() === "html") {
	                        editor._cachedHeight = "" + editor.body.style.height;
	                        editor.body.style.height = "100%";
	                    }
	                },
	                "mouseout dragleave drop contextmenu": function(e){
	                    var restoreHeight = function(){
	                        if (editor._cachedHeight !== undefined && e.target === editor.body) {
	                            editor.body.style.height = editor._cachedHeight;
	                            delete editor._cachedHeight;
	                        }
	                    };

	                    if (e.type === "contextmenu") {
	                        setTimeout(function(){
	                            restoreHeight();
	                        }, 10);
	                    } else {
	                        restoreHeight();
	                    }

	                }
	            });

	            this._registerHandler(editor.body, {
	                "keydown": function (e) {
	                    var range;

	                    if ((e.keyCode === keys.BACKSPACE || e.keyCode === keys.DELETE) && editor.body.getAttribute("contenteditable") !== "true") {
	                        return false;
	                    }

	                    if (e.keyCode === keys.F10) {
	                        // Handling with timeout to avoid the default IE menu
	                        setTimeout(proxy(editor.toolbar.focus, editor.toolbar), 100);
	                        editor.toolbar.preventPopupHide = true;
	                        e.preventDefault();
	                        return;
	                    } else if (e.keyCode == keys.LEFT || e.keyCode == keys.RIGHT) {
	                        // skip bom nodes when navigating with arrows
	                        range = editor.getRange();
	                        var left = e.keyCode == keys.LEFT;
	                        var container = range[left ? "startContainer" : "endContainer"];
	                        var offset = range[left ? "startOffset" : "endOffset"];
	                        var direction = left ? -1 : 1;

	                        var next = offset + direction;
	                        var nextChar = left ? next : offset;

	                        if (container.nodeType == 3 && container.nodeValue[nextChar] == "\ufeff") {
	                            range.setStart(container, next);
	                            range.collapse(true);
	                            editor.selectRange(range);
	                        }
	                    }

	                    var tools = editor.toolbar.tools;
	                    var toolName = editor.keyboard.toolFromShortcut(tools, e);
	                    var toolOptions = toolName ? tools[toolName].options : {};
	                    if (toolName && !toolOptions.keyPressCommand) {
	                        e.preventDefault();

	                        if (!/^(undo|redo)$/.test(toolName)) {
	                            editor.keyboard.endTyping(true);
	                        }

	                        editor.trigger("keydown", e);
	                        editor.exec(toolName);
	                        editor._runPostContentKeyCommands(e);

	                        return false;
	                    }

	                    editor.keyboard.clearTimeout();

	                    editor.keyboard.keydown(e);
	                },
	                "keypress": function(e) {
	                    setTimeout(function () {
	                        editor._runPostContentKeyCommands(e);
	                        editor._showElementResizeHandles();
	                    }, 0);
	                },
	                "keyup": function (e) {
	                    var selectionCodes = [
	                       keys.BACKSPACE,
	                       keys.TAB,
	                       keys.PAGEUP,
	                       keys.PAGEDOWN,
	                       keys.END,
	                       keys.HOME,
	                       keys.LEFT,
	                       keys.UP,
	                       keys.RIGHT,
	                       keys.DOWN,
	                       keys.INSERT,
	                       keys.DELETE
	                    ];

	                    if ($.inArray(e.keyCode, selectionCodes) > -1 || (e.keyCode == 65 && e.ctrlKey && !e.altKey && !e.shiftKey)) {
	                        window.clearTimeout(this._refreshInterval);
	                        this._refreshInterval = window.setTimeout(function(){
	                            editor._selectionChange();
	                        }, REFRESH_INTERVAL);
	                    }

	                    editor.keyboard.keyup(e);
	                },
	                "click": function(e) {
	                    var dom = kendo.ui.editor.Dom, range;

	                    if (dom.name(e.target) === "img") {
	                        range = editor.createRange();
	                        range.selectNode(e.target);
	                        editor.selectRange(range);
	                    }
	                },
	                "cut copy paste drop dragover": function (e) {
	                    editor.clipboard["on" + e.type](e);
	                },
	                "focusin": function () {
	                    if (editor.body.hasAttribute("contenteditable")) {
	                        $(this).addClass("k-state-active");
	                        editor.toolbar.show();
	                        editor._togglePlaceholder(false);
	                    }
	                },
	                "focusout": function() {
	                    setTimeout(function() {
	                        var active = kendo._activeElement();
	                        var body = editor.body;
	                        var toolbar = editor.toolbar;

	                        if (toolbar.options.popup) {
	                            var toolbarContainerElement = toolbar.window.element.get(0);
	                            if (toolbarContainerElement && !($.contains(toolbarContainerElement, active) || toolbarContainerElement == active)) {
	                                toolbar.preventPopupHide = false;
	                            }
	                        }

	                        if (active != body && !$.contains(body, active) && !toolbar.focused() && !toolbar.preventPopupHide) {
	                            $(body).removeClass("k-state-active");
	                            toolbar.hide();
	                        }

	                        editor._togglePlaceholder(!editor.value().trim());
	                    }, 10);
	                }
	            });

	            editor._initializeColumnResizing();
	            editor._initializeRowResizing();
	            editor._initializeElementResizing();
	        },

	        _initializePlaceholder: function() {
	            var that = this,
	                placeholder = that.options.placeholder,
	                style, $head;

	            if(!that.textarea || !placeholder) {
	                return;
	            }

	            style = "<style id='"+ PLACEHOLDER_TAG_ID +"'>." +
	                        PLACEHOLDER_CLASS +  ":before { content: '"+ placeholder + "'; }" +
	                    "</style>";

	            $head = $(that.document.head);
	            $head.find("#" + PLACEHOLDER_TAG_ID).remove();
	            $head.append(style);

	            that._togglePlaceholder(!that.value().trim());
	        },

	        _initializeImmutables: function(){
	            var that = this,
	                editorNS = kendo.ui.editor;

	            if (that.options.immutables){
	                that.immutables = new editorNS.Immutables(that);
	            }
	        },

	        _mousedown: function (e) {
	            var editor = this;
	            editor._selectionStarted = true;

	            if ($(editor.body).parents('.k-window').length) {
	                e.stopPropagation();
	            }

	            // handle middle-click and ctrl-click on links
	            if (browser.gecko) {
	                return;
	            }

	            var target = $(e.target).closest("a[href]");

	            if ((e.which == 2 || (e.which == 1 && e.ctrlKey)) && target &&  target.is("a[href]")) {
	                window.open(target.attr("href"), "_new");
	            }

	            if(e.target.tagName && e.target.tagName.toLowerCase() === "html") {
	                setTimeout(function(){
	                    editor.body.focus();
	                }, 0);
	            }
	        },

	        _mouseup: function(e) {
	            var that = this;

	            if (kendo.support.mobileOS.ios && e && $(e.target).is(SELECT_OVERLAY_SELECTOR)) {
	                return;
	            }

	            if (that._selectionStarted) {
	                setTimeout(function() {
	                    that._selectionChange();
	                }, 1);
	            }
	        },

	        _runPostContentKeyCommands: function (e) {
	            var range = this.getRange();
	            var tools = this.keyboard.toolsFromShortcut(this.toolbar.tools, e);

	            for (var i = 0; i < tools.length; i++) {
	                var tool = tools[i];
	                var o = tool.options;
	                if (!o.keyPressCommand) {
	                    continue;
	                }

	                var cmd = new o.command({range: range});
	                if (cmd.changesContent()) {
	                    this.keyboard.endTyping(true);
	                    this.exec(tool.name);
	                }
	            }
	        },

	        refresh: function() {
	            var that = this;

	            if (that.textarea) {
	                that._destroyResizings();
	                // preserve updated value before re-initializing
	                // don't use update() to prevent the editor from encoding the content too early
	                var value = that.value();
	                that.textarea.val(value);
	                that.wrapper.find("iframe").remove();
	                that._initializeContentElement(that);
	                that.value(value);
	            }
	        },

	        events: [
	            "select",
	            "change",
	            "execute",
	            "error",
	            "paste",
	            "keydown",
	            "keyup"
	        ],

	        options: {
	            name: "Editor",
	            messages: messages,
	            placeholder: "",
	            formats: {},
	            encoded: true,
	            domain: null,
	            resizable: false,
	            deserialization: {
	                custom: null
	            },
	            serialization: {
	                entities: true,
	                semantic: true,
	                scripts: false
	            },
	            pasteCleanup: {
	                all: false,
	                css: false,
	                custom: null,
	                keepNewLines: false,
	                msAllFormatting: false,
	                msConvertLists: true,
	                msTags: true,
	                none: false,
	                span: false
	            },
	            stylesheets: [],
	            dialogOptions: {
	                modal: true, resizable: false, draggable: true,
	                animation: false
	            },
	            imageBrowser: null,
	            fileBrowser: null,
	            fontName: [
	                { text: "Arial", value: "Arial, Helvetica, sans-serif" },
	                { text: "Courier New", value: "\"Courier New\", Courier, monospace" },
	                { text: "Georgia", value: "Georgia, serif" },
	                { text: "Impact", value: "Impact, Charcoal, sans-serif" },
	                { text: "Lucida Console", value: "\"Lucida Console\", Monaco, monospace" },
	                { text: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
	                { text: "Times New Roman", value: "\"Times New Roman\", Times, serif" },
	                { text: "Trebuchet MS", value: "\"Trebuchet MS\", Helvetica, sans-serif" },
	                { text: "Verdana", value: "Verdana, Geneva, sans-serif" }
	            ],
	            fontSize: [
	                { text: "1 (8pt)",  value: "xx-small" },
	                { text: "2 (10pt)", value: "x-small" },
	                { text: "3 (12pt)", value: "small" },
	                { text: "4 (14pt)", value: "medium" },
	                { text: "5 (18pt)", value: "large" },
	                { text: "6 (24pt)", value: "x-large" },
	                { text: "7 (36pt)", value: "xx-large" }
	            ],
	            formatBlock: [
	                { text: "Paragraph", value: "p" },
	                { text: "Quotation", value: "blockquote" },
	                { text: "Heading 1", value: "h1" },
	                { text: "Heading 2", value: "h2" },
	                { text: "Heading 3", value: "h3" },
	                { text: "Heading 4", value: "h4" },
	                { text: "Heading 5", value: "h5" },
	                { text: "Heading 6", value: "h6" }
	            ],
	            tools: [].concat.call(
	                ["formatting"],
	                toolGroups.basic,
	                ["undo", "redo"],
	                toolGroups.alignment,
	                toolGroups.formatPainter,
	                toolGroups.lists,
	                toolGroups.indenting,
	                toolGroups.links,
	                ["insertImage"],
	                toolGroups.tables
	            )
	        },

	        destroy: function() {
	            var editor = this;

	            Widget.fn.destroy.call(this);

	            this._endTyping(true);

	            this._deregisterHandlers();

	            clearTimeout(this._spellCorrectTimeout);

	            this._focusOutside();

	            this.toolbar.destroy();

	            editor._destroyUploadWidget();

	            editor._destroyResizings();

	            kendo.destroy(this.wrapper);
	        },

	        _destroyResizings: function() {
	            var editor = this;

	            editor._destroyElementResizing();
	            kendo.ui.editor.ElementResizingFactory.current.dispose(editor);
	            editor._destroyRowResizing();
	            kendo.ui.editor.RowResizing.dispose(editor);
	            editor._destroyColumnResizing();
	            kendo.ui.editor.ColumnResizing.dispose(editor);
	        },

	        _focusOutside: function () {
	            // move focus outside the Editor, see https://github.com/telerik/kendo/issues/3673
	            if (kendo.support.browser.msie && this.textarea) {
	                var tempInput = $("<input style='position:fixed;left:1px;top:1px;width:1px;height:1px;font-size:0;border:0;opacity:0' />").appendTo(document.body).trigger("focus");
	                tempInput.trigger("blur").remove();
	            }
	        },

	        _destroyUploadWidget: function(){
	            var editor = this;
	            if (editor._uploadWidget) {
	                editor._uploadWidget.destroy();
	                editor._uploadWidget = null;
	            }
	        },

	        state: function(toolName) {
	            var tool = Editor.defaultTools[toolName];
	            var finder = tool && (tool.options.finder || tool.finder);
	            var RangeUtils = kendo.ui.editor.RangeUtils;
	            var range, textNodes;

	            if (finder) {
	                range = this.getRange();

	                textNodes = RangeUtils.textNodes(range);

	                if (!textNodes.length && range.collapsed) {
	                    textNodes = [range.startContainer];
	                }

	                return finder.getFormat ? finder.getFormat(textNodes) : finder.isFormatted(textNodes);
	            }

	            return false;
	        },

	        value: function (html) {
	            var body = this.body,
	                editorNS = kendo.ui.editor,
	                options = this.options,
	                currentHtml = editorNS.Serializer.domToXhtml(body, options.serialization);

	            if (html === undefined) {
	                return currentHtml;
	            }

	            if (html == currentHtml) {
	                return;
	            }

	            editorNS.Serializer.htmlToDom(html, body, options.deserialization);

	            this.selectionRestorePoint = null;
	            this.update();

	            this.toolbar.refreshTools();
	        },

	        saveSelection: function(range) {
	            range = range || this.getRange();
	            var container = range.commonAncestorContainer,
	                body = this.body;

	            if (container == body || $.contains(body, container)) {
	                this.selectionRestorePoint = new kendo.ui.editor.RestorePoint(range, body);
	            }
	        },

	        _focusBody: function() {
	            var body = this.body;
	            var iframe = this.wrapper && this.wrapper.find("iframe")[0];
	            var documentElement = this.document.documentElement;
	            var activeElement = kendo._activeElement();
	            var scrollTop;


	            if(!iframe && body.scrollHeight > body.clientHeight) {
	                scrollTop = body.scrollTop;
	                body.focus();
	                body.scrollTop = scrollTop;

	            } else if(activeElement != body && activeElement != iframe) {
	                scrollTop = documentElement.scrollTop;
	                body.focus();
	                documentElement.scrollTop = scrollTop;
	            }
	        },

	        restoreSelection: function() {
	            this._focusBody();

	            if (this.selectionRestorePoint) {
	                this.selectRange(this.selectionRestorePoint.toRange());
	            }
	        },

	        focus: function () {
	            this.restoreSelection();
	        },

	        update: function (value) {
	            value = value || this.options.encoded ? this.encodedValue() : this.value();

	            if (this.textarea) {
	                this.textarea.val(value);
	                this._togglePlaceholder(!value.trim());
	            } else {
	                this._oldValue = value;
	            }
	        },

	        encodedValue: function () {
	            return kendo.ui.editor.Dom.encode(this.value());
	        },

	        createRange: function (document) {
	            return kendo.ui.editor.RangeUtils.createRange(document || this.document);
	        },

	        getSelection: function () {
	            return kendo.ui.editor.SelectionUtils.selectionFromDocument(this.document);
	        },

	        selectRange: function(range) {
	            this._focusBody();
	            var selection = this.getSelection();
	            selection.removeAllRanges();
	            selection.addRange(range);
	            this.saveSelection(range);
	        },

	        getRange: function () {
	            var selection = this.getSelection(),
	                range = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : this.createRange(),
	                doc = this.document;

	            if (range.startContainer == doc && range.endContainer == doc && !range.startOffset && !range.endOffset) {
	                range.setStart(this.body, 0);
	                range.collapse(true);
	            }

	            return range;
	        },

	        _containsRange: function (range) {
	            var dom = kendo.ui.editor.Dom;
	            var body = this.body;
	            return range && dom.isAncestorOrSelf(body, range.startContainer) &&
	                dom.isAncestorOrSelf(body, range.endContainer);
	        },

	        _deleteSavedRange: function () {
	            if ("_range" in this) {
	                delete this._range;
	            }
	        },

	        selectedHtml: function() {
	            return kendo.ui.editor.Serializer.domToXhtml(this.getRange().cloneContents());
	        },

	        paste: function (html, options) {
	            this.focus();

	            var command = new kendo.ui.editor.InsertHtmlCommand($.extend({
	                range: this.getRange(),
	                html: html
	            }, options));

	            command.editor = this;

	            command.exec();
	        },

	        exec: function (name, params) {
	            var that = this;
	            var command = null;
	            var range, tool, prevented;

	            if (!name) {
	                throw new Error("kendoEditor.exec(): `name` parameter cannot be empty");
	            }

	            if (that.body.getAttribute("contenteditable") !== "true" &&
	                name !== "print" &&
	                name !== "pdf" &&
	                name !== "exportAs") {
	                return false;
	            }

	            name = name.toLowerCase();

	            if (!that.keyboard.isTypingInProgress()) {
	                that._focusBody();
	                that.selectRange(that._range || that.getRange());
	            }

	            tool = that.toolbar.toolById(name);

	            if (!tool) {
	                // execute non-toolbar tool
	                for (var id in Editor.defaultTools) {
	                    if (id.toLowerCase() == name) {
	                        tool = Editor.defaultTools[id];
	                        break;
	                    }
	                }
	            }

	            if (tool) {
	                range = that.getRange();

	                if (tool.command) {
	                    command = tool.command(extend({ range: range, body: that.body, immutables: !!that.immutables }, params));
	                }

	                prevented = that.trigger("execute", { name: name, command: command });

	                if (prevented) {
	                    return;
	                }

	                if (/^(undo|redo)$/i.test(name)) {
	                    that.undoRedoStack[name]();
	                } else if (command) {
	                    that.execCommand(command);

	                    if (command.async) {
	                        command.change = proxy(that._selectionChange, that);
	                        return;
	                    }
	                }

	                that._selectionChange();
	            }
	        },

	        execCommand: function(command) {
	            if (!command.managesUndoRedo) {
	                this.undoRedoStack.push(command);
	            }

	            command.editor = this;
	            command.exec();
	        }
	    });

	    Editor.defaultTools = {};

	    kendo.ui.plugin(Editor);

	    var Tool = Class.extend({
	        init: function(options) {
	            this.options = options;
	        },

	        initialize: function(ui, options) {
	            ui.attr({ unselectable: "on", title: options.title, "aria-label": options.title });
	        },

	        command: function (commandArguments) {
	            return new this.options.command(commandArguments);
	        },

	        update: $.noop
	    });

	    Tool.exec = function (editor, name, value) {
	        editor.exec(name, { value: value });
	    };

	    var UndoTool = Tool.extend({
	        command:  $.noop,
	        update: function (ui, nodes, undoRedoStack) {
	            var that = this,
	                name = that.options.name;

	            switch (name) {
	                case "undo":
	                    ui.attr("disabled", !undoRedoStack.canUndo());
	                    break;
	                case "redo":
	                    ui.attr("disabled", !undoRedoStack.canRedo());
	                    break;
	                default:
	                    break;
	            }
	        }
	    });

	    EditorUtils.registerTool("separator", new Tool({ template: new ToolTemplate({template: EditorUtils.separatorTemplate})}));
	    EditorUtils.registerTool("undo", new UndoTool({ key: "Z", ctrl: true, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Undo"})}));
	    EditorUtils.registerTool("redo", new UndoTool({key: "Y", ctrl: true, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Redo"})}));

	    // Exports ================================================================

	    var emptyElementContent = '\ufeff';
	    var emptyTableCellContent = emptyElementContent;

	    if(browser.msie || browser.edge) {
	        emptyTableCellContent = emptyElementContent = "&nbsp;";
	    }

	    extend(kendo.ui, {
	        editor: {
	            ToolTemplate: ToolTemplate,
	            EditorUtils: EditorUtils,
	            Tool: Tool,
	            emptyElementContent: emptyElementContent,
	            emptyTableCellContent: emptyTableCellContent
	        }
	    });

	    if (kendo.PDFMixin) {
	        kendo.PDFMixin.extend(Editor.prototype);
	        Editor.prototype._drawPDF = function() {
	            return kendo.drawing.drawDOM(this.body, this.options.pdf);
	        };
	        Editor.prototype.saveAsPDF = function() {
	            var progress = new $.Deferred();
	            var promise = progress.promise();
	            var args = { promise: promise };

	            if (this.trigger("pdfExport", args)) {
	                return;
	            }

	            var options = this.options.pdf;

	            this._drawPDF(progress)
	            .then(function(root) {
	                return kendo.drawing.exportPDF(root, options);
	            })
	            .done(function(dataURI) {
	                kendo.saveAs({
	                    dataURI: dataURI,
	                    fileName: options.fileName,
	                    proxyURL: options.proxyURL,
	                    proxyTarget: options.proxyTarget,
	                    forceProxy: options.forceProxy
	                });
	                progress.resolve();
	            })
	            .fail(function(err) {
	                progress.reject(err);
	            });

	            return promise;
	        };
	    }

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 975:
/***/ (function(module, exports) {

	module.exports = require("../util/undoredostack");

/***/ }),

/***/ 976:
/***/ (function(module, exports) {

	module.exports = require("../kendo.dropdownlist");

/***/ }),

/***/ 977:
/***/ (function(module, exports) {

	module.exports = require("../kendo.window");

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

	module.exports = require("../kendo.colorpicker");

/***/ })

/******/ });