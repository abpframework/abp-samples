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

	module.exports = __webpack_require__(991);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(992) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {

	var kendo = window.kendo,
	    Editor = kendo.ui.editor,
	    Tool = Editor.Tool,
	    ToolTemplate = Editor.ToolTemplate,
	    DelayedExecutionTool = Editor.DelayedExecutionTool,
	    Command = Editor.Command,
	    dom = Editor.Dom,
	    EditorUtils = Editor.EditorUtils,
	    RangeUtils = Editor.RangeUtils,
	    registerTool = EditorUtils.registerTool;


	var FormattingTool = DelayedExecutionTool.extend({
	    init: function(options) {
	        var that = this;
	        Tool.fn.init.call(that, kendo.deepExtend({}, that.options, options));

	        that.type = "kendoSelectBox";

	        that.finder = {
	            getFormat: function() { return ""; }
	        };
	    },

	    options: {
	        items: [
	            { text: "Paragraph", value: "p" },
	            { text: "Quotation", value: "blockquote" },
	            { text: "Heading 1", value: "h1" },
	            { text: "Heading 2", value: "h2" },
	            { text: "Heading 3", value: "h3" },
	            { text: "Heading 4", value: "h4" },
	            { text: "Heading 5", value: "h5" },
	            { text: "Heading 6", value: "h6" }
	        ],
	        width: 110
	    },

	    toFormattingItem: function(item) {
	        var value = item.value;

	        if (!value) {
	            return item;
	        }

	        if (item.tag || item.className) {
	            return item;
	        }

	        var dot = value.indexOf(".");

	        if (dot === 0) {
	            item.className = value.substring(1);
	        } else if (dot == -1) {
	            item.tag = value;
	        } else {
	            item.tag = value.substring(0, dot);
	            item.className = value.substring(dot + 1);
	        }

	        return item;
	    },

	    command: function (args) {
	        var that = this;
	        var item = args.value;

	        item = this.toFormattingItem(item);

	        return new Editor.FormatCommand({
	            range: args.range,
	            formatter: function () {
	                var formatter,
	                    tags = (item.tag || item.context || "span").split(","),
	                    format = [{
	                        tags: tags,
	                        attr: { className: item.className || "" }
	                    }];

	                if ($.inArray(tags[0], dom.inlineElements) >= 0) {
	                    formatter = new Editor.GreedyInlineFormatter(format);
	                } else {
	                    formatter = new Editor.GreedyBlockFormatter(format);
	                }

	                formatter.editor = that.editor;
	                return formatter;
	            }
	        });
	    },

	    initialize: function(ui, initOptions) {
	        var editor = initOptions.editor;
	        var options = this.options;
	        var toolName = options.name;
	        var that = this;
	        var selectBox;

	        that.editor = editor;

	        ui.width(options.width);

	        selectBox = ui.kendoSelectBox({
	            dataTextField: "text",
	            dataValueField: "value",
	            dataSource: options.items || editor.options[toolName],
	            title: editor.options.messages[toolName],
	            autoSize: true,
	            change: function () {
	                var dataItem = this.dataItem();

	                if (dataItem) {
	                    Tool.exec(editor, toolName, dataItem.toJSON());
	                }
	            },
	            dataBound: function() {
	                var i, items = this.dataSource.data();

	                for (i = 0; i < items.length; i++) {
	                    items[i] = that.toFormattingItem(items[i]);
	                }
	            },
	            highlightFirst: false,
	            template: kendo.template(
	                '<span unselectable="on" style="display:block;#=(data.style||"")#">#:data.text#</span>'
	            )
	        }).data("kendoSelectBox");

	        ui.attr("title", initOptions.title);
	        selectBox.wrapper.attr("title", initOptions.title);

	        ui.addClass("k-decorated")
	            .closest(".k-widget")
	                .removeClass("k-" + toolName)
	                .find("*").addBack()
	                    .attr("unselectable", "on");
	    },

	    getFormattingValue: function(items, nodes) {
	        for (var i = 0; i < items.length; i++) {
	            var item = items[i];
	            var tag = item.tag || item.context || "";
	            var className = item.className ? "."+item.className : "";
	            var selector = tag + className;

	            var element = $(nodes[0]).closest(selector)[0];

	            if (!element) {
	                continue;
	            }

	            if (nodes.length == 1) {
	                return item.value;
	            }

	            for (var n = 1; n < nodes.length; n++) {
	                if (!$(nodes[n]).closest(selector)[0]) {
	                    break;
	                } else if (n == nodes.length - 1) {
	                    return item.value;
	                }
	            }
	        }

	        return "";
	    },

	    update: function(ui, nodes) {
	        var selectBox = $(ui).data(this.type);

	        // necessary until formatBlock is deleted
	        if (!selectBox) {
	            return;
	        }

	        var dataSource = selectBox.dataSource,
	            items = dataSource.data(),
	            i, context,
	            ancestor = dom.commonAncestor.apply(null, nodes);

	        if (ancestor != dom.closestEditable(ancestor) && this._ancestor == ancestor) {
	            return;
	        } else {
	            this._ancestor = ancestor;
	        }

	        for (i = 0; i < items.length; i++) {
	            context = items[i].context;

	            items[i].visible = !context || !!$(ancestor).closest(context).length;
	        }

	        dataSource.filter([{ field: "visible", operator: "eq", value: true }]);

	        DelayedExecutionTool.fn.update.call(this, ui, nodes);

	        selectBox.value(this.getFormattingValue(dataSource.view(), nodes));

	        selectBox.wrapper.toggleClass("k-disabled", !dataSource.view().length);
	    },

	    destroy: function() {
	        this._ancestor = null;
	    }
	});

	var CleanFormatCommand = Command.extend({
	    exec: function() {
	        var range = this.lockRange(true);
	        this.tagsToClean = this.options.remove || "strong,em,span,sup,sub,del,b,i,u,font".split(",");

	        RangeUtils.wrapSelectedElements(range);

	        var nodes = RangeUtils.mapAll(range, function(node) {
	            return node;
	        });


	        for(var c = nodes.length - 1; c >= 0; c--) {
	            var node = nodes[c];
	            if (!this.immutableParent(node)) {
	                this.clean(node);
	            }
	        }

	        this.releaseRange(range);
	    },

	    clean: function(node) {
	        if (!node || dom.isMarker(node)) {
	            return;
	        }

	        var name = dom.name(node);

	        if (name == "ul" || name == "ol") {
	            var listFormatter = new Editor.ListFormatter(name);
	            var prev = node.previousSibling;
	            var next = node.nextSibling;

	            listFormatter.unwrap(node);

	            // clean contents
	            for (; prev && prev != next; prev = prev.nextSibling) {
	                this.clean(prev);
	            }
	        } else if (name == "blockquote") {
	            dom.changeTag(node, "p");
	        } else if (node.nodeType == 1 && !dom.insignificant(node)) {
	            for (var i = node.childNodes.length-1; i >= 0; i--) {
	                this.clean(node.childNodes[i]);
	            }

	            node.removeAttribute("style");
	            node.removeAttribute("class");
	        } else {
	            unwrapListItem(node);
	        }

	        if ($.inArray(name, this.tagsToClean) > -1) {
	            dom.unwrap(node);
	        }
	    },

	    immutableParent: function(node) {
	        return this.immutables() && Editor.Immutables.immutableParent(node);
	    }
	});


	function unwrapListItem(node) {
	    var li = dom.closestEditableOfType(node, ["li"]);
	    if (li) {
	        var listFormatter = new Editor.ListFormatter(dom.name(li.parentNode));
	        var range = kendo.ui.editor.W3CRange.fromNode(node);
	        range.selectNode(li);
	        listFormatter.toggle(range);
	    }
	}

	$.extend(Editor, {
	    FormattingTool: FormattingTool,
	    CleanFormatCommand: CleanFormatCommand
	});

	registerTool("formatting", new FormattingTool({ template: new ToolTemplate({ template: EditorUtils.dropDownListTemplate, title: "Format" }) }));
	registerTool("cleanFormatting", new Tool({ command: CleanFormatCommand, template: new ToolTemplate({ template: EditorUtils.buttonTemplate, title: "Clean formatting" }) }));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 992:
/***/ (function(module, exports) {

	module.exports = require("./inlineformat");

/***/ })

/******/ });