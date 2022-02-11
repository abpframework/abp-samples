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

	module.exports = __webpack_require__(988);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(989) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {

	var kendo = window.kendo,
	    Class = kendo.Class,
	    extend = $.extend,
	    Editor = kendo.ui.editor,
	    formats = kendo.ui.Editor.fn.options.formats,
	    dom = Editor.Dom,
	    ToolTemplate = Editor.ToolTemplate,
	    FormatTool = Editor.FormatTool,
	    EditorUtils = Editor.EditorUtils,
	    registerTool = EditorUtils.registerTool,
	    registerFormat = EditorUtils.registerFormat,
	    RangeUtils = Editor.RangeUtils;

	var BlockFormatFinder = Class.extend({
	    init: function(format) {
	        this.format = format;
	    },

	    contains: function(node, children) {
	        var i, len, child;

	        for (i = 0, len = children.length; i < len; i++) {
	            child = children[i];
	            if (!child || !dom.isAncestorOrSelf(node, child)) {
	                return false;
	            }
	        }

	        return true;
	    },

	    findSuitable: function (nodes) {
	        var format = this.format,
	            suitable = [],
	            i, len, candidate;

	        for (i = 0, len = nodes.length; i < len; i++) {
	            for (var f = format.length - 1; f >= 0; f--) {
	                candidate = dom.ofType(nodes[i], format[f].tags) ? nodes[i] : dom.closestEditableOfType(nodes[i], format[f].tags);
	                if (candidate) {
	                    break;
	                }
	            }

	            if (!candidate || candidate.contentEditable === 'true') {
	                return [];
	            }

	            if ($.inArray(candidate, suitable) < 0) {
	                suitable.push(candidate);
	            }
	        }

	        this._resolveListsItems(suitable);

	        for (i = 0, len = suitable.length; i < len; i++) {
	            if (this.contains(suitable[i], suitable)) {
	                return [suitable[i]];
	            }
	        }

	        return suitable;
	    },
	    _resolveListsItems: function(nodes){
	        var i, node, wrapper;
	        for (i = 0; i < nodes.length; i++) {
	            node = nodes[i];
	            wrapper = dom.is(node, "li") ? node : dom.wrapper(node);
	            wrapper = wrapper && dom.list(wrapper) ? wrapper.children[0] : wrapper;
	            if (dom.is(wrapper, "li")) {
	                node = nodes[i] = wrapper;
	            }
	        }
	    },

	    findFormat: function (sourceNode, until) {
	        var format = this.format,
	            i, len, node, tags, attributes;
	        var editableParent = dom.editableParent(sourceNode);
	        var immutables = this.options && this.options.immutables;
	        var ImmutablesNS = Editor.Immutables;

	        for (i = 0, len = format.length; i < len; i++) {
	            node = sourceNode;
	            tags = format[i].tags;
	            attributes = format[i].attr;

	            if (immutables && tags && tags[0] == "immutable") {
	                var immutable = ImmutablesNS.immutableParent(node);
	                if (immutable && dom.attrEquals(immutable, attributes)) {
	                    return node;
	                }
	            }

	            while (node && dom.isAncestorOf(editableParent, node)) {
	                if (dom.ofType(node, tags) && dom.attrEquals(node, attributes)) {
	                    return node;
	                }

	                if(until && until(node)) {
	                    break;
	                }

	                node = node.parentNode;
	            }
	        }
	        return null;
	    },

	    getFormat: function (nodes) {
	        var that = this,
	            findFormat = function(node) {
	                    return that.findFormat(dom.isDataNode(node) ? node.parentNode : node);
	                },
	            result = findFormat(nodes[0]),
	            i, len;

	        if (!result) {
	            return "";
	        }

	        for (i = 1, len = nodes.length; i < len; i++) {
	            if (result != findFormat(nodes[i])) {
	                return "";
	            }
	        }

	        return result.nodeName.toLowerCase();
	    },

	    isFormatted: function (nodes, until) {
	        for (var i = 0, len = nodes.length; i < len; i++) {
	            if (!this.findFormat(nodes[i], until)) {
	                return false;
	            }
	        }

	        return true;
	    }
	});

	var BlockFormatter = Class.extend({
	    init: function (format, values) {
	        this.format = format;
	        this.values = values;
	        this.finder = new BlockFormatFinder(format);
	    },

	    wrap: function(tag, attributes, nodes) {

	        var commonAncestor = nodes.length == 1 ? dom.blockParentOrBody(nodes[0]) : dom.commonAncestor.apply(null, nodes);

	        if (dom.isInline(commonAncestor)) {
	            commonAncestor = dom.blockParentOrBody(commonAncestor);
	        }

	        var ancestors = dom.significantChildNodes(commonAncestor),
	            position = dom.findNodeIndex(ancestors[0]),
	            wrapper = dom.create(commonAncestor.ownerDocument, tag, attributes),
	            i, ancestor;

	        for (i = 0; i < ancestors.length; i++) {
	            ancestor = ancestors[i];
	            if (dom.isBlock(ancestor)) {
	                dom.attr(ancestor, attributes);

	                if (wrapper.childNodes.length) {
	                    dom.insertBefore(wrapper, ancestor);
	                    wrapper = wrapper.cloneNode(false);
	                }

	                position = dom.findNodeIndex(ancestor) + 1;

	                continue;
	            }

	            wrapper.appendChild(ancestor);
	        }

	        if (wrapper.firstChild) {
	            dom.insertAt(commonAncestor, wrapper, position);
	        }
	    },

	    apply: function (nodes) {
	        var format, values = this.values;

	        function attributes(format) {
	            return extend({}, format && format.attr, values);
	        }

	        this._handleImmutables(nodes, true);

	        var images = dom.filter("img", nodes);
	        var imageFormat = EditorUtils.formatByName("img", this.format);
	        var imageAttributes = attributes(imageFormat);
	        $.each(images, function() {
	            dom.attr(this, imageAttributes);
	        });

	        // only images were selected, no need to wrap
	        if (images.length == nodes.length) {
	            return;
	        }

	        var nonImages = dom.filter("img", nodes, true);
	        var formatNodes = this.finder.findSuitable(nonImages);

	        if (formatNodes.length) {
	            for (var i = 0, len = formatNodes.length; i < len; i++) {
	                format = EditorUtils.formatByName(dom.name(formatNodes[i]), this.format);
	                dom.attr(formatNodes[i], attributes(format));
	            }
	        } else {
	            format = this.format[0];
	            this.wrap(format.tags[0], attributes(format), nonImages);
	        }
	    },

	    _handleImmutables: function (nodes, applyFormatting) {
	        if (!this.immutables()) {
	            return;
	        }
	        var immutableFormat = EditorUtils.formatByName("immutable", this.format);
	        if (!immutableFormat) {
	            return;
	        }
	        var ImmutablesNS = Editor.Immutables;
	        var l = nodes.length - 1;
	        for (var i = l; i >= 0; i--) {
	            var immutableParent = ImmutablesNS.immutableParent(nodes[i]);
	            if (!immutableParent) {
	                continue;
	            }
	            if (immutableParent !== nodes[i + 1]) {
	                if (applyFormatting) {
	                    dom.attr(immutableParent, immutableFormat.attr);
	                } else {
	                    dom.unstyle(immutableParent, immutableFormat.attr.style);
	                }
	            }
	            nodes.splice(i, 1);
	        }
	    },

	    immutables: function() {
	        return this.editor && this.editor.options.immutables;
	    },

	    remove: function (nodes) {
	        var i, l, formatNode, namedFormat, name;

	        this._handleImmutables(nodes, false);

	        for (i = 0, l = nodes.length; i < l; i++) {
	            formatNode = this.finder.findFormat(nodes[i]);
	            if (formatNode) {
	                name = dom.name(formatNode);
	                namedFormat = EditorUtils.formatByName(name, this.format);
	                if (namedFormat.attr.style) {
	                    dom.unstyle(formatNode, namedFormat.attr.style);
	                }
	                if (namedFormat.attr.className) {
	                    dom.removeClass(formatNode, namedFormat.attr.className);
	                }
	            }
	        }
	    },

	    toggle: function (range) {
	        var that = this,
	            nodes = dom.filterBy(RangeUtils.nodes(range), dom.htmlIndentSpace, true);

	        if (that.finder.isFormatted(nodes)) {
	            that.remove(nodes);
	        } else {
	            that.apply(nodes);
	        }
	    }
	});

	var GreedyBlockFormatter = Class.extend({
	    init: function (format, values) {
	        var that = this;
	        that.format = format;
	        that.values = values;
	        that.finder = new BlockFormatFinder(format);
	    },

	    apply: function (nodes) {
	        var format = this.format;
	        var blocks = dom.blockParents(nodes);
	        var formatTag = format[0].tags[0];
	        var i, len, list, formatter, range;
	        var element;
	        var tagName;
	        var block;
	        var immutalbeParent;

	        if (blocks.length) {
	            for (i = 0, len = blocks.length; i < len; i++) {
	                block = blocks[i];
	                immutalbeParent = this.immutables() && Editor.Immutables.immutableParent(block);

	                if (!immutalbeParent) {
	                    tagName = dom.name(block);

	                    if (tagName == "li") {
	                        list = block.parentNode;
	                        formatter = new Editor.ListFormatter(list.nodeName.toLowerCase(), formatTag);
	                        range = this.editor.createRange();
	                        range.selectNode(blocks[i]);
	                        formatter.toggle(range);
	                    } else if (formatTag && (tagName == "td" || block.attributes.contentEditable)) {
	                        new BlockFormatter(format, this.values).apply(block.childNodes);
	                    } else {
	                        element = dom.changeTag(block, formatTag);
	                        dom.attr(element, format[0].attr);
	                    }
	                }
	            }
	        } else {
	            var blockFormatter = new BlockFormatter(format, this.values);
	            blockFormatter.editor = this.editor;
	            blockFormatter.apply(nodes);
	        }
	    },

	    toggle: function (range) {
	        var nodes = RangeUtils.textNodes(range);
	        if (!nodes.length) {
	            range.selectNodeContents(range.commonAncestorContainer);
	            nodes = RangeUtils.textNodes(range);
	            if (!nodes.length) {
	                nodes = dom.significantChildNodes(range.commonAncestorContainer);
	            }
	        }

	        this.apply(nodes);
	    },

	    immutables: function() {
	        return this.editor && this.editor.options.immutables;
	    }
	});

	var BlockFormatTool = FormatTool.extend({ init: function (options) {
	        FormatTool.fn.init.call(this, extend(options, {
	            finder: new BlockFormatFinder(options.format),
	            formatter: function () {
	                return new BlockFormatter(options.format);
	            }
	        }));
	    }
	});

	extend(Editor, {
	    BlockFormatFinder: BlockFormatFinder,
	    BlockFormatter: BlockFormatter,
	    GreedyBlockFormatter: GreedyBlockFormatter,
	    BlockFormatTool: BlockFormatTool
	});

	var listElements = ["ul","ol","li"];

	registerFormat("justifyLeft", [
	    { tags: dom.nonListBlockElements, attr: { style: { textAlign: "left" }} },
	    { tags: ["img"], attr: { style: { "float": "left", display: "", marginLeft: "", marginRight: "" }} },
	    { tags: ["immutable"], attr: { style: { "float": "left", display: "", marginLeft: "", marginRight: "" }} },
	    { tags: listElements, attr: { style: { textAlign: "left", listStylePosition: "" }} }
	]);
	registerTool("justifyLeft", new BlockFormatTool({
	    format: formats.justifyLeft,
	    template: new ToolTemplate({
	        template: EditorUtils.buttonTemplate,
	        title: "Justify Left"
	    })
	}));

	registerFormat("justifyCenter", [
	    { tags: dom.nonListBlockElements, attr: { style: { textAlign: "center" }} },
	    { tags: ["img"], attr: { style: { display: "block", marginLeft: "auto", marginRight: "auto", "float": "" }} },
	    { tags: ["immutable"], attr: { style: { display: "block", marginLeft: "auto", marginRight: "auto", "float": "" }} },
	    { tags: listElements, attr: { style: { textAlign: "center", listStylePosition: "inside" }} }
	]);
	registerTool("justifyCenter", new BlockFormatTool({
	    format: formats.justifyCenter,
	    template: new ToolTemplate({
	        template: EditorUtils.buttonTemplate,
	        title: "Justify Center"
	    })
	}));

	registerFormat("justifyRight", [
	    { tags: dom.nonListBlockElements, attr: { style: { textAlign: "right" }} },
	    { tags: ["img"], attr: { style: { "float": "right", display: "", marginLeft: "", marginRight: "" }} },
	    { tags: ["immutable"], attr: { style: { "float": "right", display: "", marginLeft: "", marginRight: "" }} },
	    { tags: listElements, attr: { style: { textAlign: "right", listStylePosition: "inside" }} }
	]);
	registerTool("justifyRight", new BlockFormatTool({
	    format: formats.justifyRight,
	    template: new ToolTemplate({
	        template: EditorUtils.buttonTemplate,
	        title: "Justify Right"
	    })
	}));

	registerFormat("justifyFull", [
	    { tags: dom.nonListBlockElements, attr: { style: { textAlign: "justify" }} },
	    { tags: ["img"], attr: { style: { display: "block", marginLeft: "auto", marginRight: "auto", "float": "" }} },
	    { tags: ["immutable"], attr: { style: { display: "block", marginLeft: "auto", marginRight: "auto", "float": "" }} },
	    { tags: listElements, attr: { style: { textAlign: "justify", listStylePosition: "" }} }
	]);
	registerTool("justifyFull", new BlockFormatTool({
	    format: formats.justifyFull,
	    template: new ToolTemplate({
	        template: EditorUtils.buttonTemplate,
	        title: "Justify Full"
	    })
	}));

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 989:
/***/ (function(module, exports) {

	module.exports = require("./format");

/***/ })

/******/ });