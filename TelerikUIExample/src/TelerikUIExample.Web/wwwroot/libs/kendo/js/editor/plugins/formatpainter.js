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

	module.exports = __webpack_require__(990);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 980:
/***/ (function(module, exports) {

	module.exports = require("../command");

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(980) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {

	var kendo = window.kendo,
	    Editor = kendo.ui.editor,
	    Tool = Editor.Tool,
	    Command = Editor.Command,
	    ToolTemplate = Editor.ToolTemplate,
	    EditorUtils = Editor.EditorUtils,
	    dom = Editor.Dom,
	    RangeUtils = Editor.RangeUtils,
	    registerTool = EditorUtils.registerTool;

	var CopyFormatCommand = Command.extend({
	    init: function (options) {
	        Command.fn.init.call(this, options);
	    },

	    exec: function(){
	        var range = this.lockRange(true);
	        this.inlineStyles = [];
	        this.blockStyles = [];
	        this.collectStyles(range);
	        this.editor.inlineStyles = this.inlineStyles;
	        this.editor.blockStyles = this.blockStyles;
	        this.releaseRange(range);
	    },

	    collectStyles: function(range) {
	        var rangeNodes = RangeUtils.nodes(range);
	        var node;

	        if(rangeNodes.length === 1) {
	            node = rangeNodes[0].parentNode;
	        } else {
	            node = range.startContainer;
	        }

	        while(node && !dom.is(node, "body") && node.getAttribute("data-role") !== "editor") {
	            if(dom.isBlock(node)) {
	                this.populateStyles(node, "blockStyles");
	                if (dom.is(node, "li")) {
	                    node = node.parentNode;
	                } else {
	                    node = null;
	                }
	            } else {
	                this.populateStyles(node, "inlineStyles");
	                node = node.parentNode;
	            }
	        }
	    },

	    populateStyles: function(node, destination) {
	        var styles = node.style;
	        var attributes = node.attributes;
	        var nodeStyles = {
	            tags: [ node.tagName ],
	            attr: {
	                style: {}
	            }
	        };
	        var styleValue, styleKey, attributeKey, attributeValue, i;

	        for(i = 0; styles && i < styles.length; i++) {
	            styleKey = styles[i];
	            styleValue = styles[styleKey];
	            nodeStyles.attr.style[styleKey] = styleValue;
	        }

	        for(i = 0; attributes && i < attributes.length; i++) {
	            attributeKey = attributes[i].nodeName;
	            attributeValue = attributes[i].nodeValue;
	            if(attributeKey === "style") {
	                continue;
	            } else if(attributeKey === "class") {
	                nodeStyles.attr.className = attributeValue;
	            } else {
	                nodeStyles.attr[attributeKey] = attributeValue;
	            }
	        }

	        this[destination].push(nodeStyles);
	    }
	});

	var ApplyFormatCommand = Command.extend({
	    init: function (options) {
	        Command.fn.init.call(this, options);
	    },

	    exec: function(){
	        var range = this.lockRange(true);
	        var markers = RangeUtils.getMarkers(range);
	        var editor = this.editor;
	        var inlineStyles = editor.inlineStyles;
	        var blockStyles = editor.blockStyles;
	        var nodes;

	        if((!inlineStyles || inlineStyles.length === 0) && (!blockStyles || blockStyles.length === 0)) {
	            return;
	        }

	        if(markers.length === 3) {
	            this.marker.removeCaret(range);
	            this.marker.caret = null;
	        }

	        this.removeEmptyElementsFromRange(range);
	        nodes = RangeUtils.nodes(range);
	        this.cleanInlineParents(nodes);
	        dom.normalize(range.commonAncestorContainer);

	        if(markers.length === 2) {
	            range.setStartAfter(markers[0]);
	            range.setEndBefore(markers[1]);
	        } else {
	            range.setStartBefore(nodes[0]);
	            range.setEndAfter(nodes[0]);
	        }

	        nodes = RangeUtils.nodes(range);

	        if(nodes && blockStyles && blockStyles.length) {
	            this.applyBlockStyles(nodes, blockStyles);
	        }

	        if(nodes && inlineStyles && inlineStyles.length) {
	            this.applyInlineStyles(nodes, inlineStyles);
	        }

	        this.releaseRange(range);
	    },

	    removeEmptyElementsFromRange: function(range) {
	        var isEmptyInline = function(node) {
	            return dom.isInline(node) && !node.firstChild && !dom.isMarker(node);
	        };
	        var emptyElements, i;

	        emptyElements = RangeUtils.getAll(range, isEmptyInline);

	        if (emptyElements && emptyElements.length > 0) {
	            for(i = 0; i < emptyElements.length; i++) {
	                emptyElements[i].parentNode.removeChild(emptyElements[i]);
	            }
	        }
	    },

	    cleanInlineParents: function(nodes) {
	        var i, node, parent, children, j, child, newNode;

	        for(i = 0; i < nodes.length; i++) {
	            node = nodes[i];
	            parent = node.parentNode;

	            if(this.immutableParent(node)) {
	                continue;
	            }

	            while(parent && dom.isInline(parent)) {
	                children = parent.childNodes;

	                for(j = 0; j < children.length; j++) {
	                    child = children[j];

	                    if(!dom.isMarker(child) && child !== node) {
	                        newNode = parent.cloneNode(true);
	                        newNode.innerHTML = "";
	                        dom.wrap(child, newNode);
	                    }
	                }

	                dom.unwrap(parent);
	                parent = node.parentNode;
	            }
	        }
	    },

	    applyBlockStyles: function(nodes, blockStyles) {
	        var formatTag = blockStyles[0].tags[0];
	        var attr = blockStyles[0].attr;
	        var document = this.editor.document;
	        var i, len, node, wrapper, blockParent, outerWrapper;
	        var previousNodes, nextNodes, previous, next, prevWrapper, nextWrapper, child, j, listItems;

	        for (i = 0, len = nodes.length; i < len; i++) {
	            node = nodes[i];

	            if(dom.isWhitespace(node) || this.immutableParent(node)) {
	                continue;
	            }

	            blockParent = dom.blockParentOrBody(node);

	            if (blockParent.tagName !== "BODY" && blockParent.tagName !== formatTag) {
	                if(blockParent.tagName !== "LI" && blockParent.tagName !== "TD" && blockParent.tagName !== "TH") {
	                    previousNodes = [];
	                    nextNodes = [];
	                    previous = node.previousSibling;
	                    next = node.nextSibling;

	                    while(previous) {
	                        if(!dom.isMarker(previous)) {
	                            previousNodes.push(previous);
	                        }

	                        previous = previous.previousSibling;
	                    }

	                    if(previousNodes.length) {
	                        prevWrapper = blockParent.cloneNode(true);
	                        prevWrapper.innerHTML = "";
	                        dom.insertBefore(prevWrapper, previousNodes[0]);

	                        for(j = 0; j < previousNodes.length; j++) {
	                            child = previousNodes[j];
	                            dom.insertAt(prevWrapper, child, 0);
	                        }
	                    }

	                    while(next) {
	                        if(!dom.isMarker(next)) {
	                            nextNodes.push(next);
	                        }

	                        next = next.nextSibling;
	                    }

	                    if(nextNodes.length) {
	                        nextWrapper = blockParent.cloneNode(true);
	                        nextWrapper.innerHTML = "";
	                        dom.insertBefore(nextWrapper, nextNodes[0]);

	                        for(j = 0; j < nextNodes.length; j++) {
	                            child = nextNodes[j];
	                            nextWrapper.appendChild(child);
	                        }
	                    }

	                    dom.unwrap(blockParent);
	                }

	                wrapper = dom.create(document, formatTag, attr);
	                dom.wrap(node, wrapper);
	            } else if (blockParent.tagName === formatTag) {
	                dom.attr(blockParent, attr);
	            }
	        }

	        if(blockParent && blockStyles.length === 2 && blockParent.tagName !== "LI" && formatTag === "LI") {
	            listItems = [];

	            while(dom.is(wrapper, "li")) {
	                listItems.push(wrapper);
	                wrapper = dom.prev(wrapper);
	            }

	            outerWrapper = dom.create(document, blockStyles[1].tags[0], blockStyles[1].attr);
	            dom.insertBefore(outerWrapper, listItems[listItems.length - 1]);
	            outerWrapper.appendChild(listItems[0]);

	            for (i = 1, len = listItems.length; i < len; i++) {
	                dom.insertBefore(listItems[i], outerWrapper.firstChild);
	            }
	        } else if(blockParent && blockStyles.length === 2 && blockParent.tagName !== "LI") {
	            outerWrapper = dom.create(document, blockStyles[1].tags[0], blockStyles[1].attr);
	            dom.wrap(wrapper, outerWrapper);
	        }
	    },

	    applyInlineStyles: function(nodes, inlineStyles) {
	        var document = this.editor.document;
	        var currentStyle, createdNode, topNode, i, newNode, node;

	        for(i = 0; i < inlineStyles.length; i++) {
	            currentStyle = inlineStyles[i];
	            createdNode = dom.create(document, currentStyle.tags[0], currentStyle.attr);

	            if(topNode) {
	                createdNode.appendChild(topNode);
	            }

	            topNode = createdNode;
	        }

	        if(topNode) {
	            for(i = 0; i < nodes.length; i++) {
	                node = nodes[i];
	                if(dom.isWhitespace(node) || this.immutableParent(node)) {
	                    continue;
	                }
	                newNode = topNode.cloneNode(true);
	                dom.insertBefore(newNode, node);

	                while(newNode.children && newNode.children.length) {
	                    newNode = newNode.children[0];
	                }

	                newNode.appendChild(node);
	            }
	        }
	    },

	    immutables: function() {
	        return this.editor && this.editor.options.immutables;
	    },

	    immutableParent: function(node) {
	        return this.immutables() && Editor.Immutables.immutableParent(node);
	    }
	});

	var CopyFormatTool = Tool.extend({
	    init: function (options) {
	        Tool.fn.init.call(this, options);
	    },

	    command: function (commandArguments) {
	        return new CopyFormatCommand(commandArguments);
	    }
	});

	var ApplyFormatTool = Tool.extend({
	    init: function (options) {
	        Tool.fn.init.call(this, options);
	    },

	    command: function (commandArguments) {
	        return new ApplyFormatCommand(commandArguments);
	    }
	});

	$.extend(Editor, {
	    CopyFormatCommand: CopyFormatCommand,
	    ApplyFormatCommand: ApplyFormatCommand,
	    CopyFormatTool: CopyFormatTool,
	    ApplyFormatTool: ApplyFormatTool
	});

	registerTool("copyFormat", new CopyFormatTool({ template: new ToolTemplate({ template: EditorUtils.buttonTemplate, title: "Copy format" }) }));
	registerTool("applyFormat", new ApplyFormatTool({ template: new ToolTemplate({ template: EditorUtils.buttonTemplate, title: "Apply format" }) }));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });