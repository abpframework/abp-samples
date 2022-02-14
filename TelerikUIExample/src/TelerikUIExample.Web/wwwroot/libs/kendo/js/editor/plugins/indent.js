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

	module.exports = __webpack_require__(996);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 996:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(997) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {

	// Imports ================================================================
	var kendo = window.kendo,
	    Class = kendo.Class,
	    extend = $.extend,
	    Editor = kendo.ui.editor,
	    dom = Editor.Dom,
	    EditorUtils = Editor.EditorUtils,
	    registerTool = EditorUtils.registerTool,
	    Command = Editor.Command,
	    Tool = Editor.Tool,
	    ToolTemplate = Editor.ToolTemplate,
	    RangeUtils = Editor.RangeUtils,
	    blockElements = dom.blockElements,
	    BlockFormatFinder = Editor.BlockFormatFinder,
	    BlockFormatter = Editor.BlockFormatter;

	function indent(node, value) {
	    var isRtl = $(node).css("direction") == "rtl",
	        indentDirection = isRtl ? "Right" : "Left",
	        property = dom.name(node) != "td" ? "margin" + indentDirection : "padding" + indentDirection;
	    if (value === undefined) {
	        return node.style[property] || 0;
	    } else {
	        if (value > 0) {
	            node.style[property] = value + "px";
	        } else {
	            node.style[property] = "";

	            if (!node.style.cssText) {
	                node.removeAttribute("style");
	            }
	        }
	    }
	}

	var IndentFormatter = Class.extend({
	    init: function() {
	        this.finder = new BlockFormatFinder([{tags:dom.blockElements}]);
	    },

	    apply: function (nodes) {
	        nodes = dom.filterBy(nodes, dom.htmlIndentSpace, true);
	        var formatNodes = this.finder.findSuitable(nodes),
	            targets = [],
	            i, len, formatNode, parentList, sibling;

	        formatNodes = this.mapImmutables(formatNodes);

	        if (formatNodes.length) {
	            for (i = 0, len = formatNodes.length; i < len; i++) {
	                if (dom.is(formatNodes[i], "li")) {
	                    if (!$(formatNodes[i]).index()) {
	                        targets.push(formatNodes[i].parentNode);
	                    } else if ($.inArray(formatNodes[i].parentNode, targets) < 0) {
	                        targets.push(formatNodes[i]);
	                    }
	                } else {
	                    targets.push(formatNodes[i]);
	                }
	            }

	            while (targets.length) {
	                formatNode = targets.shift();
	                if (dom.is(formatNode, "li")) {
	                    parentList = formatNode.parentNode;
	                    sibling = $(formatNode).prev("li");
	                    var siblingList = sibling.find("ul,ol").last();

	                    var nestedList = $(formatNode).children("ul,ol")[0];

	                    if (nestedList && sibling[0]) {
	                        if (siblingList[0]) {
	                           siblingList.append(formatNode);
	                           siblingList.append($(nestedList).children());
	                           dom.remove(nestedList);
	                        } else {
	                            sibling.append(nestedList);
	                            nestedList.insertBefore(formatNode, nestedList.firstChild);
	                        }
	                    } else {
	                        nestedList = sibling.children("ul,ol")[0];
	                        if (!nestedList) {
	                            nestedList = dom.create(formatNode.ownerDocument, dom.name(parentList), this.getListTypeAttr(parentList));
	                            sibling.append(nestedList);
	                        }

	                        while (formatNode && formatNode.parentNode == parentList) {
	                            nestedList.appendChild(formatNode);
	                            formatNode = targets.shift();
	                        }
	                    }
	                } else {
	                    var marginLeft = parseInt(indent(formatNode), 10) + 30;
	                    indent(formatNode, marginLeft);

	                    for (var targetIndex = 0; targetIndex < targets.length; targetIndex++) {
	                        if ($.contains(formatNode, targets[targetIndex])) {
	                            targets.splice(targetIndex, 1);
	                        }
	                    }
	                }
	            }
	        } else {
	            var formatter = new BlockFormatter([{tags:["p"]}], {style:{marginLeft:30}});

	            formatter.apply(nodes);
	        }
	    },

	    getListTypeAttr: function (list) {
	        var type = list.getAttribute("type");
	        var styleType = list.style.listStyleType;

	        return type ? { type: type } : { style: { listStyleType: styleType } };
	    },

	    mapImmutables: function(nodes){
	        if (!this.immutables) {
	            return nodes;
	        } else {
	            var immutables = [];
	            return $.map(nodes, function (node) {
	                var immutable = Editor.Immutables.immutableParent(node);
	                if (immutable) {
	                    if ($.inArray(immutable, immutables) === -1) {
	                        immutables.push(immutable);
	                    } else {
	                        return null;
	                    }
	                }
	                return immutable || node;
	            });
	        }
	    },

	    remove: function(nodes) {
	        nodes = dom.filterBy(nodes, dom.htmlIndentSpace, true);
	        var formatNodes = this.finder.findSuitable(nodes),
	            targetNode, i, len, list, listParent, siblings,
	            formatNode, marginLeft;

	        formatNodes = this.mapImmutables(formatNodes);

	        for (i = 0, len = formatNodes.length; i < len; i++) {
	            formatNode = $(formatNodes[i]);

	            if (formatNode.is("li")) {
	                list = formatNode.parent();
	                listParent = list.parent();
	                // listParent will be ul or ol in case of invalid dom - <ul><li></li><ul><li></li></ul></ul>
	                if (listParent.is("li,ul,ol") && !indent(list[0])) {
	                    // skip already processed nodes
	                    if (targetNode && $.contains(targetNode, listParent[0])) {
	                        continue;
	                    }

	                    siblings = formatNode.nextAll("li");
	                    if (siblings.length) {
	                        $(list[0].cloneNode(false)).appendTo(formatNode).append(siblings);
	                    }

	                    if (listParent.is("li")) {
	                        formatNode.insertAfter(listParent);
	                    } else {
	                        formatNode.appendTo(listParent);
	                    }

	                    if (!list.children("li").length) {
	                        list.remove();
	                    }

	                    continue;
	                } else {
	                    if (targetNode == list[0]) {
	                        // removing format on sibling LI elements
	                        continue;
	                    }
	                    targetNode = list[0];
	                }
	            } else {
	                targetNode = formatNodes[i];
	            }

	            marginLeft = parseInt(indent(targetNode), 10) - 30;
	            indent(targetNode, marginLeft);
	        }
	    }

	});

	var IndentCommand = Command.extend({
	    init: function(options) {
	        var that = this;
	        options.formatter = /** @ignore */ {
	            toggle : $.proxy(function(range) {
	                var indentFormatter = new IndentFormatter();
	                indentFormatter.immutables = this.editor && this.editor.options.immutables;
	                indentFormatter.apply(RangeUtils.nodes(range));
	            }, that)
	        };
	        Command.fn.init.call(this, options);
	    }
	});

	var OutdentCommand = Command.extend({
	    init: function(options) {
	        var that = this;
	        options.formatter = {
	            toggle : $.proxy(function(range) {
	                var indentFormatter = new IndentFormatter();
	                indentFormatter.immutables = this.editor && this.editor.options.immutables;
	                indentFormatter.remove(RangeUtils.nodes(range));
	            }, that)
	        };
	        Command.fn.init.call(this, options);
	    }
	});

	var OutdentTool = Tool.extend({
	    init: function(options) {
	        Tool.fn.init.call(this, options);

	        this.finder = new BlockFormatFinder([{tags:blockElements}]);
	    },

	    initialize: function(ui, options) {
	        Tool.fn.initialize.call(this, ui, options);

	        $.extend(this.options, {
	            immutables: options.editor && options.editor.options.immutables
	        });

	        ui.addClass("k-disabled");
	    },

	    update: function (ui, nodes) {
	        var suitableNodes = this.finder.findSuitable(nodes),
	            isOutdentable, listParentsCount, i, len, suitable, immutableParent;
	        for (i = 0, len = suitableNodes.length; i < len; i++) {
	            suitable = suitableNodes[i];

	            if (this.options.immutables) {
	                immutableParent = Editor.Immutables.immutableParent(suitable);
	                if (immutableParent) {
	                    suitable = immutableParent;
	                }
	            }

	            isOutdentable = indent(suitable);

	            if (!isOutdentable) {
	                listParentsCount = $(suitable).parents("ul,ol").length;
	                isOutdentable = (dom.is(suitable, "li") && (listParentsCount > 1 || indent(suitable.parentNode))) ||
	                                (dom.ofType(suitable, ["ul","ol"]) && listParentsCount > 0);
	            }

	            if (isOutdentable) {
	                ui.removeClass("k-disabled");
	                return;
	            }
	        }

	        ui.addClass("k-disabled").removeClass("k-hover");
	    }
	});

	extend(Editor, {
	    IndentFormatter: IndentFormatter,
	    IndentCommand: IndentCommand,
	    OutdentCommand: OutdentCommand,
	    OutdentTool: OutdentTool
	});

	registerTool("indent", new Tool({ command: IndentCommand, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Indent"}) }));
	registerTool("outdent", new OutdentTool({ command: OutdentCommand, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Outdent"})}));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 997:
/***/ (function(module, exports) {

	module.exports = require("./formatblock");

/***/ })

/******/ });