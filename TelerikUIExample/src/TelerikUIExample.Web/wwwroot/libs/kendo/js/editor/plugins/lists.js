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

	module.exports = __webpack_require__(1003);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 997:
/***/ (function(module, exports) {

	module.exports = require("./formatblock");

/***/ }),

/***/ 1003:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(997) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {

	// Imports ================================================================
	var kendo = window.kendo,
	    Class = kendo.Class,
	    extend = $.extend,
	    Editor = kendo.ui.editor,
	    dom = Editor.Dom,
	    RangeUtils = Editor.RangeUtils,
	    EditorUtils = Editor.EditorUtils,
	    Command = Editor.Command,
	    ToolTemplate = Editor.ToolTemplate,
	    FormatTool = Editor.FormatTool,
	    BlockFormatFinder = Editor.BlockFormatFinder,
	    textNodes = RangeUtils.textNodes,
	    registerTool = Editor.EditorUtils.registerTool;

	var ListFormatFinder = BlockFormatFinder.extend({
	    init: function(options) {
	        this.tag = options.tag;
	        this.attr = options.attr;
	        this.altAttr = options.altAttr;

	        var tags = this.tags = [this.tag == 'ul' ? 'ol' : 'ul', this.tag];
	        var format = [{ tags: tags, attr: this.attr }];

	        if (this.altAttr) {
	            format.push({
	                tags: tags,
	                attr: this.altAttr
	            });
	        }

	        BlockFormatFinder.fn.init.call(this, format);
	    },

	    matchesType: function (node) {
	        return dom.attrEquals(node, this.attr) || (this.altAttr && dom.attrEquals(node, this.altAttr));
	    },

	    isList: function(node){
	        return dom.list(node);
	    },

	    isFormatted: function (nodes) {
	        var formatNodes = [];
	        var formatNode, i;

	        for (i = 0; i < nodes.length; i++) {
	            formatNode = this.findFormat(nodes[i], this.isList);

	            if (formatNode && dom.name(formatNode) == this.tag && this.matchesType(formatNode)) {
	                formatNodes.push(formatNode);
	            }
	        }

	        if (formatNodes.length < 1) {
	            return false;
	        }

	        if (formatNodes.length != nodes.length) {
	            return false;
	        }

	        // check if sequential lists are selected
	        for (i = 0; i < formatNodes.length; i++) {
	            if (formatNodes[i].parentNode != formatNode.parentNode) {
	                break;
	            }

	            if (formatNodes[i] != formatNode) {
	                return false;
	            }
	        }

	        return true;
	    },

	    findSuitable: function (nodes) {
	        var candidate = this.findFormat(nodes[0], this.isList);

	        if (candidate && dom.name(candidate) == this.tag) {
	            return candidate;
	        }

	        return null;
	    }

	});

	var ListFormatter = Class.extend({
	    init: function(options, unwrapTag) {
	        var that = this;
	        options = $.isPlainObject(options) ? options : { tag: options, attr: null };
	        that.tag = options.tag;
	        that.attr = options.attr;
	        that.finder = new ListFormatFinder(options);
	        that.unwrapTag = unwrapTag;
	    },

	    isList: function(node) {
	        return dom.list(node);
	    },

	    immutables: function () {
	        return this.editor && !!this.editor.options.immutables;
	    },

	    wrap: function(list, nodes) {
	        var li = dom.create(list.ownerDocument, "li"),
	            i, node,
	            isImmutable = this.immutables() ? Editor.Immutables.immutable : $.noop;

	        for (i = 0; i < nodes.length; i++) {
	            node = nodes[i];

	            if (dom.is(node, 'li')) {
	                list.appendChild(node);
	                continue;
	            }

	            if (this.isList(node)) {
	                while (node.firstChild) {
	                    list.appendChild(node.firstChild);
	                }
	                continue;
	            }

	            if (dom.is(node, "td")) {
	                while (node.firstChild) {
	                    li.appendChild(node.firstChild);
	                }
	                list.appendChild(li);
	                node.appendChild(list);
	                list = list.cloneNode(false);
	                li = li.cloneNode(false);
	                continue;
	            }

	            li.appendChild(node);

	            if (dom.isBlock(node)) {
	                list.appendChild(li);
	                if (!isImmutable(node)) {
	                    dom.unwrap(node);
	                }
	                li = li.cloneNode(false);
	            }
	        }

	        if (li.firstChild) {
	            list.appendChild(li);
	        }
	    },

	    containsAny: function(parent, nodes) {
	        for (var i = 0; i < nodes.length; i++) {
	            if (dom.isAncestorOrSelf(parent, nodes[i])) {
	                return true;
	            }
	        }

	        return false;
	    },

	    suitable: function (candidate, nodes) {
	        if (candidate.className == "k-marker") {
	            var sibling = candidate.nextSibling;

	            if (sibling && dom.isBlock(sibling)) {
	                return false;
	            }

	            sibling = candidate.previousSibling;

	            if (sibling && dom.isBlock(sibling)) {
	                return false;
	            }
	        }

	        return this.containsAny(candidate, nodes) || dom.isInline(candidate) || candidate.nodeType == 3;
	    },

	    _parentLists: function(node) {
	        var editable = dom.closestEditable(node);

	        return $(node).parentsUntil(editable, "ul,ol");
	    },

	    split: function (range) {
	        var nodes = textNodes(range);
	        var start, end, parents;

	        if (nodes.length) {
	            start = dom.parentOfType(nodes[0], ['li']);
	            end = dom.parentOfType(nodes[nodes.length - 1], ['li']);
	            range.setStartBefore(start);
	            range.setEndAfter(end);

	            for (var i = 0, l = nodes.length; i < l; i++) {
	                var formatNode = this.finder.findFormat(nodes[i]);
	                if (formatNode) {
	                    parents = this._parentLists(formatNode);
	                    if (parents.length) {
	                        RangeUtils.split(range, parents.last()[0], true);
	                    } else {
	                        RangeUtils.split(range, formatNode, true);
	                    }
	                }
	            }
	        }
	    },

	    merge: function(tag, formatNode) {
	        var prev = formatNode.previousSibling, next;

	        while (prev && (prev.className == "k-marker" || (prev.nodeType == 3 && dom.isWhitespace(prev)))) {
	            prev = prev.previousSibling;
	        }

	        // merge with previous list
	        if (prev && dom.name(prev) == tag && this.finder.matchesType(prev)) {
	            while(formatNode.firstChild) {
	                prev.appendChild(formatNode.firstChild);
	            }
	            dom.remove(formatNode);
	            formatNode = prev;
	        }

	        next = formatNode.nextSibling;
	        while (next && (next.className == "k-marker" || (next.nodeType == 3 && dom.isWhitespace(next)))) {
	            next = next.nextSibling;
	        }

	        // merge with next list
	        if (next && dom.name(next) == tag && this.finder.matchesType(next)) {
	            while(formatNode.lastChild) {
	                next.insertBefore(formatNode.lastChild, next.firstChild);
	            }
	            dom.remove(formatNode);
	        }
	    },

	    breakable: function(node) {
	        return (
	            node != node.ownerDocument.body &&
	            !/table|tbody|thead|tr|td/.test(dom.name(node)) &&
	            !node.attributes.contentEditable
	        );
	    },

	    findSuitableNode: function (nodes) {
	        var that = this,
	            finder = that.finder,
	            tag = that.tag,
	            formatNode;

	        formatNode = finder.findSuitable(nodes);

	        if (!formatNode) {
	            // Find the opposite tag
	            finder = new ListFormatFinder({ tag: tag == "ul" ? "ol" : "ul" });
	            formatNode = finder.findSuitable(nodes);
	        }

	        if(!formatNode) {
	            // Find the same tag
	            finder = new ListFormatFinder({ tag: tag });
	            formatNode = finder.findSuitable(nodes);
	            formatNode = formatNode && that.finder.matchesType(formatNode) ? null : formatNode;
	        }


	        return formatNode;
	    },

	    applyOnSection: function (section, nodes) {
	        var tag = this.tag;
	        var attr = this.attr;
	        var commonAncestor = dom.closestSplittableParent(nodes);

	        var ancestors = [];
	        var formatNode = this.findSuitableNode(nodes);

	        var childNodes;

	        if (/table|tbody|thead/.test(dom.name(commonAncestor))) {
	            childNodes = $.map(nodes, function(node) {
	                return dom.parentOfType(node, ["td"]);
	            });
	        } else {
	            childNodes = dom.significantChildNodes(commonAncestor);

	            if ($.grep(childNodes, dom.isBlock).length) {
	                childNodes = $.grep(childNodes, $.proxy(function(node) {
	                    return this.containsAny(node, nodes);
	                }, this));
	            }

	            if (!childNodes.length) {
	                childNodes = nodes;
	            }
	        }

	        function pushAncestor() {
	            ancestors.push(this);
	        }

	        for (var i = 0; i < childNodes.length; i++) {
	            var child = childNodes[i];
	            var suitable = (!formatNode || !dom.isAncestorOrSelf(formatNode, child)) && this.suitable(child, nodes);

	            if (!suitable) {
	                continue;
	            }

	            if (formatNode && this.isList(child)) {
	                // merging lists
	                $.each(child.children, pushAncestor);
	                dom.remove(child);
	            } else {
	                ancestors.push(child);
	            }
	        }

	        if (ancestors.length == childNodes.length && this.breakable(commonAncestor)) {
	            ancestors = [commonAncestor];
	        }

	        if (!formatNode) {
	            formatNode = dom.create(commonAncestor.ownerDocument, tag, attr);
	            if(dom.isBlock(ancestors[0])) {
	                dom.mergeAttributes(ancestors[0], formatNode);
	            }
	            dom.insertBefore(formatNode, ancestors[0]);
	        }

	        this.wrap(formatNode, ancestors);

	        while (dom.isBom(formatNode.nextSibling)) {
	            dom.remove(formatNode.nextSibling);
	        }

	        if (!this.finder.matchesType(formatNode)) {
	            formatNode.removeAttribute("type");
	            formatNode.style.listStyleType = "";
	            dom.mergeAttributes(dom.create(commonAncestor.ownerDocument, tag, attr), formatNode, true);
	        }

	        if (formatNode && formatNode.getAttribute("type") === "") {
	            formatNode.removeAttribute("type");
	        }

	        if (!dom.is(formatNode, tag)) {
	            dom.changeTag(formatNode, tag);
	        }

	        this.merge(tag, formatNode);
	    },

	    apply: function (nodes) {
	        var i = 0,
	            sections = [],
	            lastSection,
	            lastNodes,
	            section,
	            node,
	            l = nodes.length,
	            immutableParent = this.immutables() ? Editor.Immutables.immutableParent : $.noop;

	        function addLastSection() {
	            if (lastSection) {
	                sections.push({
	                    section: lastSection,
	                    nodes: lastNodes
	                });
	            }
	        }

	        // split nodes into sections that need to be different lists
	        for (i = 0; i < l; i++) {
	            node = immutableParent(nodes[i]) || nodes[i];
	            section = dom.closestEditable(node, ["td","th","body"]);
	            if (!lastSection || section != lastSection) {
	                addLastSection();
	                lastNodes = [node];
	                lastSection = section;
	            } else {
	                lastNodes.push(node);
	            }
	        }

	        addLastSection();

	        for (i = 0; i < sections.length; i++) {
	            this.applyOnSection(sections[i].section, sections[i].nodes);
	        }
	    },

	    unwrap: function(ul) {
	        var fragment = ul.ownerDocument.createDocumentFragment(),
	            unwrapTag = this.unwrapTag,
	            parents,
	            li,
	            p,
	            child;

	        for (li = ul.firstChild; li; li = li.nextSibling) {
	            p = dom.create(ul.ownerDocument, unwrapTag || 'p');

	            while(li.firstChild) {
	                child = li.firstChild;

	                if (dom.isBlock(child)) {

	                    if (p.firstChild) {
	                        fragment.appendChild(p);
	                        p = dom.create(ul.ownerDocument, unwrapTag || 'p');
	                    }

	                    fragment.appendChild(child);
	                } else {
	                    p.appendChild(child);
	                }
	            }

	            if (p.firstChild) {
	                fragment.appendChild(p);
	            }
	        }

	        parents = this._parentLists(ul);

	        if (parents[0]) {
	            dom.insertAfter(fragment, parents.last()[0]);
	            parents.last().remove();
	        } else {
	            dom.insertAfter(fragment, ul);
	        }

	        dom.remove(ul);
	    },

	    remove: function (nodes) {
	        var formatNode;
	        for (var i = 0, l = nodes.length; i < l; i++) {
	            formatNode = this.finder.findFormat(nodes[i]);

	            if (formatNode) {
	                this.unwrap(formatNode);
	            }
	        }
	    },

	    toggle: function (range) {
	        var that = this,
	            nodes = textNodes(range),
	            ancestor = range.commonAncestorContainer;

	        if (!nodes.length) {
	            range.selectNodeContents(ancestor);
	            nodes = textNodes(range);
	            if (!nodes.length) {
	                var text = ancestor.ownerDocument.createTextNode("");
	                range.startContainer.appendChild(text);
	                nodes = [text];
	                range.selectNode(text.parentNode);
	            }
	        }
	        nodes = dom.filterBy(nodes, dom.htmlIndentSpace, true);
	        if (that.finder.isFormatted(nodes)) {
	            that.split(range);
	            that.remove(nodes);
	        } else {
	            that.apply(nodes);
	        }
	    }

	});

	var ListCommand = Command.extend({
	    init: function(options) {
	        options.formatter = new ListFormatter({ tag: options.tag, attr: options.attr });
	        Command.fn.init.call(this, options);
	    }
	});

	var ListTool = FormatTool.extend({
	    init: function(options) {
	        this.options = options;

	        FormatTool.fn.init.call(this, extend(options, {
	            finder: new ListFormatFinder(options)
	        }));
	    },

	    command: function (commandArguments) {
	        return new ListCommand(extend(commandArguments, { tag: this.options.tag, attr: this.options.attr }));
	    }
	});

	extend(Editor, {
	    ListFormatFinder: ListFormatFinder,
	    ListFormatter: ListFormatter,
	    ListCommand: ListCommand,
	    ListTool: ListTool
	});

	registerTool("insertUnorderedList", new ListTool({tag:'ul', attr: { style: { listStyleType: "" }, type: "" }, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Insert unordered list"})}));
	registerTool("insertOrderedList", new ListTool({tag:'ol', attr: { style: { listStyleType: "" }, type: "" }, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Insert ordered list"})}));
	registerTool("insertUpperRomanList", new ListTool({tag:'ol', attr: { style: { listStyleType: "upper-roman" }}, altAttr: { type: "I" }, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Insert upper roman list"})}));
	registerTool("insertLowerRomanList", new ListTool({tag:'ol', attr: { style: { listStyleType: "lower-roman" }}, altAttr: { type: "i" }, template: new ToolTemplate({template: EditorUtils.buttonTemplate, title: "Insert lower roman list"})}));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });