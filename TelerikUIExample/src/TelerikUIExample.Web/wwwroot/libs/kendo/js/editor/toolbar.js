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

	__webpack_require__(1028);
	module.exports = __webpack_require__(1028);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 973:
/***/ (function(module, exports) {

	module.exports = require("./range");

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(973) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($,undefined) {
	    var kendo = window.kendo;
	    var ui = kendo.ui;
	    var editorNS = ui.editor;
	    var Widget = ui.Widget;
	    var extend = $.extend;
	    var proxy = $.proxy;
	    var keys = kendo.keys;
	    var NS = ".kendoEditor";
	    var EditorUtils = editorNS.EditorUtils;
	    var ToolTemplate = editorNS.ToolTemplate;
	    var Tool = editorNS.Tool;
	    var outerWidth = kendo._outerWidth;
	    var outerHeight = kendo._outerHeight;
	    var OVERFLOWANCHOR = "overflowAnchor";

	    var focusable = ".k-tool-group:visible .k-tool:not(.k-disabled):not([disabled])," +
	                    ".k-tool.k-overflow-anchor:visible," +
	                    ".k-tool-group:visible .k-colorpicker:not(input)," +
	                    ".k-tool-group:visible .k-selectbox," +
	                    ".k-tool-group:visible .k-dropdown," +
	                    ".k-tool-group:visible .k-combobox .k-input-inner";

	    var toolNamesByCssClass = {
	        "k-i-sup-script": "superscript",
	        "k-i-sub-script": "subscript",
	        "k-i-align-left": "justifyLeft",
	        "k-i-align-center": "justifyCenter",
	        "k-i-align-right": "justifyRight",
	        "k-i-align-justify": "justifyFull",
	        "k-i-list-unordered": "insertUnorderedList",
	        "k-i-list-ordered": "insertOrderedList",
	        "k-i-list-roman-upper": "insertUpperRomanList",
	        "k-i-list-roman-lower": "insertLowerRomanList",
	        "k-i-import": "import",
	        "k-i-indent-increase": "indent",
	        "k-i-indent-decrease": "outdent",
	        "k-i-link-horizontal": "createLink",
	        "k-i-unlink-horizontal": "unlink",
	        "k-i-image": "insertImage",
	        "k-i-file-add": "insertFile",
	        "k-i-html": "viewHtml",
	        "k-i-foreground-color": "foreColor",
	        "k-i-paint": "backColor",
	        "k-i-table-insert": "createTable",
	        "k-i-table-column-insert-left": "addColumnLeft",
	        "k-i-table-column-insert-right": "addColumnRight",
	        "k-i-table-row-insert-above": "addRowAbove",
	        "k-i-table-row-insert-below": "addRowBelow",
	        "k-i-table-row-delete": "deleteRow",
	        "k-i-table-column-delete": "deleteColumn",
	        "k-i-table-properties": "tableWizard",
	        "k-i-table-wizard": "tableWizardInsert",
	        "k-i-table-position-left": "tableAlignLeft",
	        "k-i-table-position-center": "tableAlignCenter",
	        "k-i-table-position-right": "tableAlignRight",
	        "k-i-clear-css": "cleanFormatting",
	        "k-i-cells-merge-horizontally": "mergeCellsHorizontally",
	        "k-i-cells-merge-vertically": "mergeCellsVertically",
	        "k-i-cell-split-horizontally": "splitCellHorizontally",
	        "k-i-cell-split-vertically": "splitCellVertically",
	        "k-i-copy-format": "copyFormat",
	        "k-i-apply-format": "applyFormat",
	        ".k-i-undo": "undo",
	        "k-i-redo": "redo",

	    };

	    var OverflowAnchorTool = Tool.extend({
	        initialize: function(ui, options) {
	            var toolbar = options.editor.toolbar;

	            ui.attr("aria-controls", options.editor.element.attr("id"))
	                .on("click", $.proxy(function() {
	                    this.overflowPopup.toggle();
	                }, toolbar));
	        },

	        options: {
	            name: OVERFLOWANCHOR
	        },

	        command: $.noop,
	        update: $.noop,
	        destroy: $.noop

	    });

	    EditorUtils.registerTool(OVERFLOWANCHOR, new OverflowAnchorTool({
	        key: "",
	        ctrl: true,
	        template: new ToolTemplate({ template: EditorUtils.overflowAnchorTemplate })
	    }));

	    var Toolbar = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            options = extend({}, options, { name: "EditorToolbar" });

	            Widget.fn.init.call(that, element, options);

	            if (options.popup) {
	                that._initPopup();
	            }

	            if (options.resizable && options.resizable.toolbar) {
	                that._resizeHandler = kendo.onResize(function() {
	                    that.resize(true);
	                });

	                that.element.addClass("k-toolbar-resizable");
	            }
	        },

	        events: [
	            "execute"
	        ],

	        groups: {
	            basic: ["bold", "italic", "underline", "strikethrough"],
	            undo: ["undo", "redo"],
	            scripts: ["subscript", "superscript" ],
	            alignment: ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull" ],
	            links: ["insertImage", "insertFile", "createLink", "unlink"],
	            lists: ["insertUnorderedList", "insertOrderedList", "insertUpperRomanList", "insertLowerRomanList", "indent", "outdent"],
	            tablesInsert: ["createTable"],
	            tablesAddDelete: [ "addColumnLeft", "addColumnRight", "addRowAbove", "addRowBelow", "deleteRow", "deleteColumn" ],
	            tablesMerge: [ "mergeCellsHorizontally", "mergeCellsVertically", "splitCellHorizontally", "splitCellVertically" ],
	            tablesPosition: [ "tableAlignLeft", "tableAlignCenter", "tableAlignRight" ],
	            advanced: [ "viewHtml", "cleanFormatting", "print", "pdf", "exportAs", "import"],
	            fonts: [ "fontName", "fontSize" ],
	            colors: [ "foreColor", "backColor" ],
	            formatPainter: [ "copyFormat", "applyFormat" ]
	        },

	        overflowFlaseTools: [ "formatting", "fontName", "fontSize", "foreColor", "backColor", "insertHtml" ],

	        _initPopup: function() {
	            var that = this;
	            this.window = $(this.element)
	                .wrap("<div class='editorToolbarWindow' />")
	                .parent()
	                .prepend("<span class='k-editortoolbar-dragHandle'><span class='k-icon k-i-handler-drag'></span></span>")
	                .kendoWindow({
	                    title: false,
	                    resizable: false,
	                    draggable: {
	                        dragHandle: ".k-editortoolbar-dragHandle"
	                    },
	                    animation: {
	                        open: { effects: "fade:in" },
	                        close: { effects: "fade:out" }
	                    },
	                    minHeight: 42,
	                    visible: false,
	                    autoFocus: false,
	                    actions: [],
	                    dragend: function() {
	                        this._moved = true;
	                    }
	                })
	                .on("mousedown", function(e){
	                    if (!$(e.target).is(".k-icon")) {
	                        that.preventPopupHide = true;
	                    }
	                })
	                .on("focusout", function(){
	                    that.options.editor.element.focusout();
	                })
	                .data("kendoWindow");
	        },

	        _toggleOverflowStyles: function(element, show) {
	            element
	                .find("> li").toggleClass("k-item", show)
	                .find(".k-tool:not(.k-disabled), .k-overflow-button").toggleClass("k-overflow-button", show);
	        },

	        _initOverflowPopup: function(ui) {
	            var that = this;
	            var popupTemplate = "<ul class='k-editor-overflow-popup k-overflow-container k-list-container'></ul>";

	            that.overflowPopup = $(popupTemplate).appendTo("body").kendoPopup({
	                anchor: ui,
	                origin: kendo.support.isRtl(that.element) ? "bottom left" : "bottom right",
	                position: kendo.support.isRtl(that.element) ? "top left" : "top right",
	                copyAnchorStyles: false,
	                open: function(e) {
	                    if (this.element.is(":empty")) {
	                        e.preventDefault();
	                    }

	                    that._toggleOverflowStyles(this.element, true);
	                    ui.attr("aria-expanded", true);
	                },
	                close: function() {
	                    ui.attr("aria-expanded", false);
	                },
	                activate: proxy(that.focusOverflowPopup, that)
	            }).data("kendoPopup");
	        },

	        items: function() {
	            var isResizable = this.options.resizable && this.options.resizable.toolbar,
	                popup, result;

	            result = this.element.children().find("> *, select");

	            if (isResizable) {
	                popup = this.overflowPopup;
	                result = result.add(popup.element.children().find("> *"));
	            }

	            return result;
	        },

	        focused: function() {
	            var active = kendo._activeElement(),
	                popup = this.window,
	                overflowPopup = this.overflowPopup;

	            return (popup && $(active).closest(popup.wrapper).length) ||
	                (overflowPopup && overflowPopup.visible());
	        },

	        toolById: function(name) {
	            var id, tools = this.tools;

	            for (id in tools) {
	                if (id.toLowerCase() == name) {
	                    return tools[id];
	                }
	            }
	        },

	        toolGroupFor: function(toolName) {
	            var i, groups = this.groups;

	            if (this.isCustomTool(toolName)) {
	                return "custom";
	            }

	            for (i in groups) {
	                if ($.inArray(toolName, groups[i]) >= 0) {
	                    return i;
	                }
	            }
	        },

	        bindTo: function(editor) {
	            var that = this,
	                window = that.window;

	            // detach from editor that was previously listened to
	            if (that._editor) {
	                that._editor.unbind("select", proxy(that.resize, that));
	            }

	            that._editor = editor;

	            if (that.options.resizable && that.options.resizable.toolbar) {
	                editor.options.tools.push(OVERFLOWANCHOR);
	            }

	            // re-initialize the tools
	            that.tools = that.expandTools(editor.options.tools);
	            that.render();

	            that.element.find(".k-combobox .k-input-inner").on("keydown", function(e) {
	                var combobox = $(this).closest(".k-combobox").data("kendoComboBox"),
	                    key = e.keyCode;

	                if (key == keys.RIGHT || key == keys.LEFT) {
	                    combobox.close();
	                } else if (key == keys.DOWN) {
	                    if (!combobox.dropDown.isOpened()) {
	                        e.stopImmediatePropagation();
	                        combobox.open();
	                    }
	                }
	            });

	            that._attachEvents();

	            that.items().each(function initializeTool() {

	                var toolName = that._toolName(this),
	                    tool = toolName !== "moreVertical" ? that.tools[toolName] : that.tools.overflowAnchor,
	                    options = tool && tool.options,
	                    messages = editor.options.messages,
	                    description = options && options.tooltip || messages[toolName],
	                    ui = $(this);

	                if (!tool || !tool.initialize) {
	                    return;
	                }

	                if (toolName == "fontSize" || toolName == "fontName") {
	                    var inheritText = messages[toolName + "Inherit"];

	                    ui.find("input").val(inheritText).end()
	                      .find("span.k-input-inner").text(inheritText).end();
	                }

	                tool.initialize(ui, {
	                    title: that._appendShortcutSequence(description, tool),
	                    editor: that._editor
	                });

	                ui.closest(".k-widget", that.element).addClass("k-editor-widget");

	                ui.closest(".k-colorpicker", that.element).next(".k-colorpicker").addClass("k-editor-widget");
	            });

	            editor.bind("select", proxy(that.resize, that));

	            that.update();

	            if (window) {
	                window.wrapper.css({top: "", left: "", width: ""});
	            }
	        },

	        show: function() {
	            var that = this,
	                window = that.window,
	                editorOptions = that.options.editor,
	                wrapper, editorElement, editorOffset,
	                browser = kendo.support.browser;

	            if (window) {
	                wrapper = window.wrapper;
	                editorElement = editorOptions.element;

	                if (!wrapper.is(":visible") || !that.window.options.visible) {

	                    if (!wrapper[0].style.width) {
	                        wrapper.width(this._getWindowWidth());
	                    }

	                    // track content position when other parts of page change
	                    if (!window._moved) {
	                        editorOffset = editorElement.offset();
	                        wrapper.css({
	                            top: Math.max(0, parseInt(editorOffset.top, 10) - outerHeight(wrapper) - parseInt(that.window.element.css("padding-bottom"), 10)),
	                            left: Math.max(0, parseInt(editorOffset.left, 10))
	                        });
	                    }

	                    if ((browser.msie || browser.edge) && that._overlaps(editorElement)) {
	                        setTimeout(function() {
	                            window.open();
	                        }, 0);
	                    } else {
	                        window.open();
	                    }
	                }
	            }
	        },

	        _getWindowWidth: function(){
	            var that = this,
	                wrapper = that.window.wrapper,
	                editorElement = that.options.editor.element;

	            return outerWidth(editorElement) - parseInt(wrapper.css("border-left-width"), 10) - parseInt(wrapper.css("border-right-width"), 10);
	        },

	        _overlaps: function(box) {
	            var toolbarWrapper = this.window.wrapper,
	                toolbarWrapperOffset = toolbarWrapper.offset(),
	                toolbarWrapperLeft = toolbarWrapperOffset.left,
	                toolbarWrapperTop = toolbarWrapperOffset.top,
	                boxOffset = box.offset(),
	                boxOffsetLeft = boxOffset.left,
	                boxOffsetTop = boxOffset.top;

	            return !(boxOffsetLeft + box.width() < toolbarWrapperLeft ||
	                    boxOffsetLeft > toolbarWrapperLeft + toolbarWrapper.width() ||
	                    boxOffsetTop + box.height() < toolbarWrapperTop ||
	                    boxOffsetTop > toolbarWrapperTop + toolbarWrapper.height());
	        },

	        hide: function() {
	            if (this.window) {
	                this.window.close();
	            }
	        },

	        focus: function() {
	            var TABINDEX = "tabIndex";
	            var element = this.element;
	            var tabIndex = this._editor.element.attr(TABINDEX);

	            // Chrome can't focus something which has already been focused
	            element.attr(TABINDEX, tabIndex || 0).trigger("focus")
	                .find(focusable).first().trigger("focus");

	            if (!tabIndex && tabIndex !== 0) {
	                element.removeAttr(TABINDEX);
	            }
	        },

	        focusOverflowPopup: function() {
	            var TABINDEX = "tabIndex";
	            var element = this.overflowPopup.element;
	            var tabIndex = this._editor.element.attr(TABINDEX);

	            element.closest(".k-animation-container").addClass("k-overflow-wrapper");

	            element.attr(TABINDEX, tabIndex || 0)
	                .find(focusable).first().trigger("focus");

	            if (!tabIndex && tabIndex !== 0) {
	                element.removeAttr(TABINDEX);
	            }
	        },

	        _appendShortcutSequence: function(localizedText, tool) {
	            if (!tool.key) {
	                return localizedText;
	            }

	            var res = localizedText + " (";

	            if (tool.ctrl) {
	                res += "Ctrl + ";
	            }

	            if (tool.shift) {
	                res += "Shift + ";
	            }

	            if (tool.alt) {
	                res += "Alt + ";
	            }

	            res += tool.key + ")";

	            return res;
	        },

	        _nativeTools: [
	            "insertLineBreak",
	            "insertParagraph",
	            "redo",
	            "undo",
	            "autoLink"
	        ],

	        tools: {}, // tools collection is copied from defaultTools during initialization

	        isCustomTool: function(toolName) {
	            return !(toolName in kendo.ui.Editor.defaultTools);
	        },

	        // expand the tools parameter to contain tool options objects
	        expandTools: function(tools) {
	            var currentTool,
	                i,
	                nativeTools = this._nativeTools,
	                options,
	                defaultTools = kendo.deepExtend({}, kendo.ui.Editor.defaultTools),
	                result = {},
	                name;

	            for (i = 0; i < tools.length; i++) {
	                currentTool = tools[i];
	                name = currentTool.name;

	                if ($.isPlainObject(currentTool)) {
	                    if (name && defaultTools[name]) {
	                        // configured tool
	                        result[name] = extend({}, defaultTools[name]);
	                        extend(result[name].options, currentTool);
	                    } else {
	                        // custom tool
	                        options = extend({ cssClass: "k-i-gear", type: "button", title: "" }, currentTool);
	                        if (!options.name) {
	                            options.name = "custom";
	                        }

	                        options.cssClass = "k-" + options.name;

	                        if (!options.template && options.type == "button") {
	                            options.template = editorNS.EditorUtils.buttonTemplate;
	                            options.title = options.title || options.tooltip;
	                        }

	                        result[name] = {
	                            options: options
	                        };
	                    }
	                } else if (defaultTools[currentTool]) {
	                    // tool by name
	                    result[currentTool] = defaultTools[currentTool];
	                }
	            }

	            for (i = 0; i < nativeTools.length; i++) {
	                if (!result[nativeTools[i]]) {
	                    result[nativeTools[i]] = defaultTools[nativeTools[i]];
	                }
	            }

	            return result;
	        },

	        render: function() {
	            var that = this,
	                tools = that.tools,
	                options, template, toolElement,
	                toolName,
	                editorElement = that._editor.element,
	                element = that.element.empty(),
	                groupName, newGroupName,
	                toolConfig = that._editor.options.tools,
	                group, i, groupPosition = 0,
	                resizable = that.options.resizable && that.options.resizable.toolbar,
	                overflowFlaseTools = this.overflowFlaseTools;

	            function stringify(template) {
	                var result = "";

	                if (template.getHtml) {
	                    result = template.getHtml();
	                } else {
	                    if (!kendo.isFunction(template)) {
	                        template = kendo.template(template);
	                    }

	                    result = template(options);
	                }

	                return kendo.trim(result);
	            }

	            function endGroup() {
	                if (group.children().length) {
	                    if (resizable) {
	                        group.data("position", groupPosition);
	                        groupPosition++;
	                    }

	                    group.appendTo(element);
	                }
	            }

	            function startGroup(toolName) {
	                if (toolName !== OVERFLOWANCHOR) {
	                    group = $("<li class='k-tool-group' role='presentation' />");
	                    group.data("overflow", $.inArray(toolName, overflowFlaseTools) === -1 ? true : false);
	                } else {
	                    group = $("<li class='k-overflow-tools' />");
	                }
	            }

	            element.empty();

	            if (toolConfig.length) {
	                toolName = toolConfig[0].name || toolConfig[0];
	            }
	            startGroup(toolName, overflowFlaseTools);

	            for (i = 0; i < toolConfig.length; i++) {
	                toolName = toolConfig[i].name || toolConfig[i];
	                options = tools[toolName] && tools[toolName].options;

	                if (!options && $.isPlainObject(toolName)) {
	                    options = toolName;
	                }

	                template = options && options.template;

	                if (toolName == "break") {
	                    endGroup();
	                    $("<li class='k-row-break' role='presentation' />").appendTo(that.element);
	                    startGroup(toolName, overflowFlaseTools);
	                }

	                if (!template) {
	                    continue;
	                }

	                newGroupName = that.toolGroupFor(toolName);

	                if (groupName != newGroupName || toolName == OVERFLOWANCHOR) {
	                    endGroup();
	                    startGroup(toolName, overflowFlaseTools);
	                    groupName = newGroupName;
	                }

	                if (toolName == OVERFLOWANCHOR) {
	                    template.options.title = that.options.messages.overflowAnchor;
	                }

	                template = stringify(template);

	                toolElement = $(template).appendTo(group);

	                if (newGroupName == "custom") {
	                    endGroup();
	                    startGroup(toolName, overflowFlaseTools);
	                }

	                if (options.exec && toolElement.hasClass("k-tool")) {
	                    toolElement.on("click", proxy(options.exec, editorElement[0]));
	                }
	            }

	            endGroup();

	            $(that.element).children(":has(> .k-tool)").not(".k-overflow-tools").addClass("k-button-group");

	            that.updateGroups();

	            if (resizable) {
	                that._initOverflowPopup(that.element.find(".k-overflow-anchor"));
	            }

	            that.angular("compile", function(){
	                return { elements: that.element };
	            });
	        },

	        updateGroups: function() {
	            $(this.element).children().not(".k-overflow-tools").each(function() {
	                $(this).children()
	                    .removeClass("k-group-start k-group-end")
	                    .first().addClass("k-group-start").end()
	                    .last().addClass("k-group-end").end();
	            });
	        },

	        decorateFrom: function(body) {
	            this.items().filter(".k-decorated")
	                .each(function() {
	                    var selectBox = $(this).data("kendoSelectBox");

	                    if (selectBox) {
	                        selectBox.decorate(body);
	                    }
	                });
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            var id, tools = this.tools;

	            for (id in tools) {
	                if (tools[id].destroy) {
	                    tools[id].destroy();
	                }
	            }

	            if (this.window) {
	                this.window.destroy();
	            }

	            if (this._resizeHandler) {
	                kendo.unbindResize(this._resizeHandler);
	            }

	            if (this.overflowPopup) {
	                this.overflowPopup.destroy();
	            }
	        },

	        _attachEvents: function() {
	            var that = this,
	                popupElement = that.overflowPopup ? that.overflowPopup.element : $([]);

	            that.attachToolsEvents(that.element.add(popupElement));
	        },

	        attachToolsEvents: function(element) {
	            var that = this,
	                buttons = "[role=button].k-tool",
	                enabledButtons = buttons + ":not(.k-disabled)" + ", [role=button].k-i-import:not(.k-disabled)",
	                disabledButtons = buttons + ".k-disabled",
	                dropdown = ".k-dropdown",
	                colorpicker = ".k-colorpicker",
	                editorTools = [buttons, dropdown, colorpicker].join(",");

	            element.off(NS)
	                .on("mouseenter" + NS, enabledButtons, function() { $(this).addClass("k-hover"); })
	                .on("mouseleave" + NS, enabledButtons, function() { $(this).removeClass("k-hover"); })
	                .on("mousedown" + NS, editorTools, function(e) {
	                    e.preventDefault();
	                })
	                .on("keydown" + NS, focusable, function(e) {
	                    var current = this;
	                    var resizable = that.options.resizable && that.options.resizable.toolbar;
	                    var direction = kendo.support.isRtl(that.element) ? -1 : 1;
	                    var focusableItems;
	                    var focusElement,
	                        currentContainer,
	                        keyCode = e.keyCode;

	                    function move(direction, container, constrain) {
	                        var tools = container.find(focusable);
	                        var index = tools.index(current) + direction;

	                        if (constrain) {
	                            index = Math.max(0, Math.min(tools.length - 1, index));
	                        }

	                        return tools[index];
	                    }

	                    if (keyCode == keys.RIGHT || keyCode == keys.LEFT) {
	                        if (!$(current).is(".k-dropdown")) {
	                            focusElement = move(keyCode == keys.RIGHT ? 1 * direction : -1 * direction, that.element, true);
	                        } else {
	                            focusElement = $(current);
	                        }
	                    } else if (resizable && (keyCode == keys.UP || keyCode == keys.DOWN)) {
	                        focusElement = move(keyCode == keys.DOWN ? 1 : -1, that.overflowPopup.element, true);
	                    } else if (keyCode == keys.HOME) {
	                        focusElement = that.element.find(focusable)[0];
	                        e.preventDefault();
	                    } else if (keyCode == keys.END) {
	                        focusableItems = that.element.find(focusable).filter(function () {
	                            return $(this).css('visibility') !== 'hidden';
	                        });
	                        focusElement = focusableItems[focusableItems.length - 1];
	                        e.preventDefault();
	                    } else if (keyCode == keys.ESC) {
	                        if (that.overflowPopup && that.overflowPopup.visible()) {
	                            that.overflowPopup.close();
	                        }

	                        focusElement = that._editor;
	                    } else if (keyCode == keys.TAB && !(e.ctrlKey || e.altKey)) {
	                        if (resizable) {
	                            currentContainer = $(current.parentElement).hasClass("k-overflow-tool-group") ? that.overflowPopup.element : that.element;
	                        } else {
	                            currentContainer = that.element;
	                        }

	                        // skip tabbing to disabled tools, and focus the editing area when running out of tools
	                        if (e.shiftKey) {
	                            focusElement = move(-1, currentContainer);
	                        } else {
	                            focusElement = move(1, currentContainer);

	                            if (!focusElement || $(focusElement).closest(".k-overflow-tools").css("visibility") === "hidden") {
	                                focusElement = that._editor;
	                            }
	                        }
	                    }

	                    if (focusElement) {
	                        e.preventDefault();
	                        focusElement.focus();
	                    }

	                    if ((keyCode === keys.ENTER || keyCode === keys.SPACEBAR) && ( $(current).is("button") || $(current).is("a") ) && !$(current).attr("href") ) {
	                        //anchors without href attribute do not respond to Enter key
	                        that._executeToolCommand(current, e);
	                    }
	                })
	                .on("click" + NS, enabledButtons, function(e) {
	                    that._executeToolCommand(this, e);
	                })
	                .on("click" + NS, disabledButtons, function(e) { e.preventDefault(); });

	        },

	        _executeToolCommand: function(toolElement, e) {
	            var that = this;
	            var button = $(toolElement);
	            e.preventDefault();
	            e.stopPropagation();
	            button.removeClass("k-hover");
	            if (!button.is("[data-popup]")) {
	                that._editor.exec(that._toolName(toolElement));
	            }
	        },

	        _toolName: function (element) {
	            if (!element) {
	                return;
	            }

	            var className = element.className;

	            if (/k-tool\b/i.test(className)) {
	                className = element.firstChild.className;
	            }

	            var tool = $.grep(className.split(" "), function (x) {
	                return !/^k-(widget|tool|tool-icon|icon|state-hover|header|combobox|dropdown|selectbox|colorpicker)$/i.test(x);
	            });

	            if (tool[0]) {
	                var toolname = tool[0];
	                if (toolNamesByCssClass[toolname]) {
	                    toolname = toolNamesByCssClass[toolname];
	                }
	                if (toolname.indexOf("k-i-") >=0) {
	                    return kendo.toCamelCase(toolname.substring(toolname.indexOf("k-i-") + 4));
	                }
	                else {
	                    return toolname.substring(toolname.lastIndexOf("-") + 1);
	                }
	            }
	            return "custom";
	        },

	        refreshTools: function() {
	            var that = this,
	                editor = that._editor,
	                range = editor.getRange(),
	                nodes = editorNS.RangeUtils.textNodes(range),
	                immutables = editor.options.immutables,
	                immutablesContext = that._immutablesContext(range);

	            nodes = editorNS.Dom.filterBy(nodes, editorNS.Dom.htmlIndentSpace, true);

	            if (!nodes.length) {
	                nodes = [range.startContainer];
	            }

	            that.items().each(function() {
	                var tool = that.tools[that._toolName(this)];
	                if (tool) {
	                    var ui = $(this);
	                    if (tool.update) {
	                        tool.update(ui, nodes, editor.undoRedoStack);
	                    }

	                    if (immutables) {
	                        that._updateImmutablesState(tool, ui, immutablesContext);
	                    }
	                }
	            });
	            this.update();
	        },

	        _immutablesContext: function(range) {
	            if (this._editor.options.immutables) {
	                if (range.collapsed) {
	                    return editorNS.Immutables.immutablesContext(range);
	                } else {
	                    return editorNS.RangeUtils.editableTextNodes(range).length === 0;
	                }
	            }
	        },

	        _updateImmutablesState: function(tool, ui, immutablesContext) {
	            var name = tool.name;
	            var uiElement = ui;

	            var trackImmutables = tool.options.trackImmutables;
	            if (trackImmutables === undefined) {
	                trackImmutables = $.inArray(name, editorNS.Immutables.toolsToBeUpdated) > -1;
	            }

	            if (trackImmutables) {
	                var display = immutablesContext ? "none" : "";
	                if (!ui.is(".k-tool")) {
	                    var uiData = ui.data();
	                    for (var key in uiData) {
	                        if (key.match(/^kendo[A-Z][a-zA-Z]*/)) {
	                            var widget = uiData[key];
	                            uiElement = widget.wrapper;
	                            break;
	                        }
	                    }
	                }
	                uiElement.css("display", display);
	                var groupUi = uiElement.closest("li");
	                if (groupUi.children(":visible").length === 0) {
	                    groupUi.css("display", display);
	                }
	            }
	        },

	        update: function() {
	            this.updateGroups();
	        },

	        _resize: function(e) {
	            var containerWidth = e.width;
	            var resizable = this.options.resizable && this.options.resizable.toolbar;
	            var popup = this.overflowPopup;
	            var editorElement = this.options.editor.element;
	            var toolbarWindow = this.window;

	            this.refreshTools();

	            if (!resizable) {
	                return;
	            }

	            if(toolbarWindow) {
	                toolbarWindow.wrapper.width(this._getWindowWidth());

	                if(!toolbarWindow._moved) {
	                    toolbarWindow.wrapper.css({
	                        left: Math.max(0, parseInt(editorElement.offset().left, 10))
	                    });
	                }
	            }

	            if (popup.visible()) {
	                popup.close(true);
	            }

	            this._refreshWidths();

	            this._shrink(containerWidth);
	            this._stretch(containerWidth);

	            this._toggleOverflowStyles(this.element, false);
	            this._toggleOverflowStyles(this.overflowPopup.element, true);

	            this.element
	                .children("li.k-overflow-tools")
	                .css("visibility", popup.element.is(":empty") ? "hidden" : "visible");
	        },

	        _refreshWidths: function() {
	            this.element.children("li").each(function(idx, element) {
	                var group = $(element);
	                group.data("outerWidth", outerWidth(group, true));
	            });
	        },

	        _shrink: function(width) {
	            var group, visibleGroups;

	            if (width < this._groupsWidth()) {
	                visibleGroups = this._visibleGroups().filter(":not(.k-overflow-tools)");

	                for (var i = visibleGroups.length - 1; i >= 0; i--) {
	                    group = visibleGroups.eq(i);
	                    if (width > this._groupsWidth()) {
	                        break;
	                    } else {
	                        this._hideGroup(group);
	                    }
	                }
	            }
	        },

	        _stretch: function(width) {
	            var group, hiddenGroups;

	            if (width > this._groupsWidth()) {
	                hiddenGroups = this._hiddenGroups();

	                for (var i = 0; i < hiddenGroups.length ; i++) {
	                    group = hiddenGroups.eq(i);
	                    if (width < this._groupsWidth() || !this._showGroup(group, width)) {
	                        break;
	                    }
	                }
	            }
	        },

	        _hiddenGroups: function() {
	            var popup = this.overflowPopup;

	            var hiddenGroups = this.element.children("li.k-tool-group").filter(":hidden");

	            hiddenGroups = hiddenGroups.add(popup.element.children("li"));

	            hiddenGroups.sort(function(a, b) {
	                return ($(a).data("position") > $(b).data("position")) ? 1 : -1;
	            });

	            return hiddenGroups;
	        },

	        _visibleGroups: function() {
	            return this.element.children("li.k-tool-group, li.k-overflow-tools").filter(":visible");
	        },

	        _groupsWidth: function() {
	            var width = 0;

	            this._visibleGroups().each(function() {
	                width += $(this).data("outerWidth");
	            });

	            return Math.ceil(width);
	        },

	        _hideGroup: function(group) {
	            if (group.data("overflow")) {
	                var popup = this.overflowPopup;
	                group.detach().prependTo(popup.element).addClass("k-overflow-tool-group");
	            } else {
	                group.addClass("k-hidden");
	            }
	        },

	        _showGroup: function(group, width) {
	            var position, previous, groupWidth;

	            if (group.hasClass('k-disabled')) {
	                return true;
	            }

	            if (group.hasClass("k-overflow-tool-group")) {
	                groupWidth = group.data("outerWidth");
	            } else {
	                group.removeClass("k-hidden");
	                groupWidth = outerWidth(group, true);
	                group.addClass("k-hidden");
	            }

	            if (group.length && width > this._groupsWidth() + groupWidth) {
	                if (group.hasClass("k-overflow-tool-group")) {
	                    position = group.data("position");

	                    if (position === 0) {
	                        group.detach().prependTo(this.element);
	                    } else {
	                        previous = this.element.children().filter(function(idx, element) {
	                            return $(element).data("position") === position - 1;
	                        });

	                        group.detach().insertAfter(previous);
	                    }

	                    group.removeClass("k-overflow-tool-group");

	                } else {
	                    group.removeClass("k-hidden");
	                }

	                return true;
	            }

	            return false;
	        }

	    });

	$.extend(editorNS, {
	    Toolbar: Toolbar
	});

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });