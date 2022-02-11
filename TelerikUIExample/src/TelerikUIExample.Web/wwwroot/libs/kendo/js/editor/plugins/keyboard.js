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

	module.exports = __webpack_require__(1000);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 980:
/***/ (function(module, exports) {

	module.exports = require("../command");

/***/ }),

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(980) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {

	// Imports ================================================================
	var kendo = window.kendo,
	    Class = kendo.Class,
	    editorNS = kendo.ui.editor,
	    RangeUtils = editorNS.RangeUtils,
	    dom = editorNS.Dom,
	    RestorePoint = editorNS.RestorePoint,
	    Marker = editorNS.Marker,
	    browser = kendo.support.browser,
	    bomSpan = "<span  class='k-br'>\ufeff</span>",
	    extend = $.extend;
	var nodeTypes = dom.nodeTypes;
	var PREVIOUS_SIBLING = "previousSibling";

	function selected(node, range) {
	    return range.startContainer === node && range.endContainer === node &&
	        range.startOffset === 0 && range.endOffset == node.childNodes.length;
	}

	function getSibling(node, direction, condition) {
	    var sibling = node ? node[direction] : null;

	    while (sibling && !condition(sibling)) {
	        sibling = sibling[direction];
	    }

	    return sibling;
	}

	var tableCells = "td,th,caption";
	var tableCellsWrappers = "table,tbody,thead,tfoot,tr";
	var tableElements = tableCellsWrappers + "," + tableCells;
	var inTable = function (range) { return !range.collapsed && $(range.commonAncestorContainer).is(tableCellsWrappers); };

	var RemoveTableContent = Class.extend({
	    remove: function(range) {
	        var that = this;
	        var marker = new Marker();
	        marker.add(range, false);

	        var nodes = RangeUtils.getAll(range, function (node) { return $(node).is(tableElements); });
	        var doc = RangeUtils.documentFromRange(range);
	        var start = marker.start;
	        var end = marker.end;
	        var cellsTypes = tableCells.split(",");
	        var startCell = dom.parentOfType(start, cellsTypes);
	        var endCell = dom.parentOfType(end, cellsTypes);
	        that._removeContent(start, startCell, true);
	        that._removeContent(end, endCell, false);
	        $(nodes).each(function(i, node) {
	            node = $(node);
	            (node.is(tableCells) ? node : node.find(tableCells)).each(function(j, cell) {
	                cell.innerHTML = "&#65279;";
	            });
	        });
	        if (startCell && !start.previousSibling) {
	            dom.insertBefore(doc.createTextNode("\ufeff"), start);
	        }
	        if (endCell && !end.nextSibling) {
	            dom.insertAfter(doc.createTextNode("\ufeff"), end);
	        }
	        if (startCell) {
	            range.setStartBefore(start);
	        } else if (nodes[0]) {
	            startCell = $(nodes[0]);
	            startCell = startCell.is(tableCells) ? startCell : startCell.find(tableCells).first();
	            if (startCell.length) {
	                range.setStart(startCell.get(0), 0);
	            }
	        }

	        range.collapse(true);

	        dom.remove(start);
	        dom.remove(end);
	    },
	    _removeContent: function (start, top, forwards) {
	        if (top) {
	            var sibling = forwards ? "nextSibling" : "previousSibling",
	                next,
	                getNext = function (node) {
	                    while (node && !node[sibling]) {
	                        node = node.parentNode;
	                    }
	                    return node && $.contains(top, node) ? node[sibling] : null;
	                };
	            start = getNext(start);
	            while (start) {
	                next = getNext(start);
	                dom.remove(start);
	                start = next;
	            }
	        }
	    }
	});

	var TypingHandler = Class.extend({
	    init: function(editor) {
	        this.editor = editor;
	    },

	    keydown: function (e) {
	        var that = this,
	            editor = that.editor,
	            keyboard = editor.keyboard,
	            isTypingKey = keyboard.isTypingKey(e),
	            evt = extend($.Event(), e);

	        that.editor.trigger("keydown", evt);

	        if (evt.isDefaultPrevented()) {
	            e.preventDefault();
	            return true;
	        }

	        if (!evt.isDefaultPrevented() && isTypingKey && !keyboard.isTypingInProgress()) {
	            var range = editor.getRange();
	            var body = editor.body;
	            that.startRestorePoint = new RestorePoint(range, body);

	            if (inTable(range)) {
	                var removeTableContent = new RemoveTableContent(editor);
	                removeTableContent.remove(range);
	                editor.selectRange(range);
	            }

	            if (browser.webkit && !range.collapsed && selected(body, range)) {
	                body.innerHTML = "";
	            }

	            if (editor.immutables && editorNS.Immutables.immutablesContext(range)) {
	                var backspaceHandler = new editorNS.BackspaceHandler(editor);
	                backspaceHandler.deleteSelection(range);
	            }

	            keyboard.startTyping(function () {
	                that._removeBomSpan();
	                that.endRestorePoint = editorNS._finishUpdate(editor, that.startRestorePoint);
	            });

	            return true;
	        }

	        return false;
	    },

	    keyup: function (e) {
	        var keyboard = this.editor.keyboard;

	        this.editor.trigger("keyup", e);

	        if (keyboard.isTypingInProgress()) {
	            keyboard.endTyping();
	            return true;
	        }

	        return false;
	    },

	    _removeBomSpan: function () {
	        var node = this.editor.getRange().commonAncestorContainer;

	        if(!dom.emptyNode(node)) {
	            if(node.nodeType === 3) {
	                node = node.parentNode;
	            }

	            if(dom.insignificant(node)) {
	                // typing in an insignificant node
	                // make it significant
	                node.textContent = dom.stripBom(node.textContent);
	                dom.unwrap(node);
	            }
	        }
	    }
	});

	var BackspaceHandler = Class.extend({
	    init: function(editor) {
	        this.editor = editor;
	    },
	    _addCaret: function(container) {
	        var caret = dom.create(this.editor.document, "a");

	        // Only if not Chrome: Make sure to include cared in the formatted inline node
	        if (!kendo.support.browser.chrome && container.firstChild &&
	            container.firstChild.nodeType === nodeTypes.ELEMENT_NODE) {

	            container = container.firstChild;
	        }

	        dom.insertAt(container, caret, 0);
	        dom.stripBomNode(caret.previousSibling);
	        dom.stripBomNode(caret.nextSibling);
	        return caret;
	    },
	    _restoreCaret: function(caret) {
	        var range = this.editor.createRange();

	        if (!caret.nextSibling && dom.isDataNode(caret.previousSibling)) {
	            range.setStart(caret.previousSibling, caret.previousSibling.length);
	        } else {
	            range.setStartAfter(caret);
	        }

	        range.collapse(true);
	        this.editor.selectRange(range);
	        dom.remove(caret);
	    },
	    _handleDelete: function(range) {
	        var node = range.endContainer;
	        var block = dom.closestEditableOfType(node, dom.blockElements);

	        if (block && editorNS.RangeUtils.isEndOf(range, block)) {
	            // join with next sibling
	            var next = dom.next(block);
	            if (!next || dom.name(next) != "p") {
	                return false;
	            }

	            var caretPlaceholder = dom.significantChildNodes(next)[0];
	            caretPlaceholder = (caretPlaceholder && dom.isInline(caretPlaceholder)) ? caretPlaceholder : next;
	            var caret = this._addCaret(caretPlaceholder);

	            this._merge(block, next);

	            this._restoreCaret(caret);

	            return true;
	        }

	        return false;
	    },
	    _cleanBomBefore: function(range) {
	        var offset = range.startOffset;
	        var node = range.startContainer;
	        var text = node.nodeValue;
	        var count = 0;
	        while (offset-count >= 0 && text[offset-count-1] == "\ufeff") {
	            count++;
	        }

	        if (count > 0) {
	            node.deleteData(offset-count, count);

	            range.setStart(node, Math.max(0, offset-count));
	            range.collapse(true);

	            this.editor.selectRange(range);
	        }
	    },
	    _handleBackspace: function(range) {
	        var node = range.startContainer;
	        var li = dom.closestEditableOfType(node, ['li']);
	        var block = dom.closestEditableOfType(node, 'p,h1,h2,h3,h4,h5,h6'.split(','));
	        var editor = this.editor;
	        var previousSibling;

	        if (dom.isDataNode(node)) {
	            if (range.collapsed && /^\s[\ufeff]+$/.test(node.nodeValue)) {
	                range.setStart(node, 0);
	                range.setEnd(node, node.length);
	                editor.selectRange(range);
	                return false;
	            }
	            this._cleanBomBefore(range);
	        }

	        previousSibling = getSibling(block, PREVIOUS_SIBLING, function(sibling) {
	            return !dom.htmlIndentSpace(sibling);
	        });

	        //deleting the first list item with empty content in IE results in invalid range
	        if (range.collapsed && range.startOffset !== range.endOffset && range.startOffset < 0) {
	            range.startOffset = 0;
	            range.endOffset = 0;
	            editor.selectRange(range);
	        }

	        var startAtLi = li && editorNS.RangeUtils.isStartOf(range, li);
	        var liIndex = li && $(li).index();
	        var startAtNonFirstLi = startAtLi && liIndex > 0;
	        if (startAtNonFirstLi) {
	            block = li;
	            previousSibling = dom.prev(li);
	        }

	        if(block && previousSibling && dom.is(previousSibling, 'table') && editorNS.RangeUtils.isStartOf(range, block)) {
	            if(block.innerText === ''){
	                block.innerHTML = '\ufeff';
	            }
	            return true;
	        }

	        // outdent
	        if (editorNS.RangeUtils.isStartOf(range, block) && parseInt(block.style.marginLeft,10) > 0) {
	            editor.exec("outdent");
	            return true;
	        }

	        // unwrap block
	        if ((block && previousSibling && editorNS.RangeUtils.isStartOf(range, block)) || startAtNonFirstLi) {
	            var caretPlaceholder = dom.significantChildNodes(block)[0];
	            caretPlaceholder = (caretPlaceholder && dom.isInline(caretPlaceholder)) ? caretPlaceholder : block;
	            var caret = this._addCaret(caretPlaceholder);
	            this._merge(previousSibling, block);
	            this._restoreCaret(caret);

	            return true;
	        }

	        // unwrap li element
	        if (startAtLi && liIndex === 0) {
	            var child = li.firstChild;
	            if (!child) {
	                li.innerHTML = editorNS.emptyElementContent;
	                child = li.firstChild;
	            }

	            var formatter = new editorNS.ListFormatter(dom.name(li.parentNode), "p");
	            range.selectNodeContents(li);
	            formatter.toggle(range);

	            if (dom.insignificant(child)) {
	                range.setStartBefore(child);
	            } else {
	                range.setStart(child, 0);
	            }

	            editor.selectRange(range);

	            return true;
	        }

	        var rangeStartNode = node.childNodes[range.startOffset - 1];
	        var linkRange = range;
	        var anchor = rangeStartNode && dom.closestEditableOfType(rangeStartNode, ['a']);
	        var previousNode = getSibling(rangeStartNode || node, PREVIOUS_SIBLING, function(sibling) {
	            return !dom.isDataNode(sibling) || (!dom.isBom(sibling) && sibling.length > 0);
	        });
	        if (anchor || ((range.startOffset === 0 || rangeStartNode) && dom.is(previousNode, "a"))) {
	            anchor = anchor || previousNode;
	            linkRange = editor.createRange();
	            linkRange.setStart(anchor, anchor.childNodes.length);
	            linkRange.collapse(true);
	        }

	        anchor = anchor || dom.closestEditableOfType(rangeStartNode || linkRange.startContainer, ['a']);
	        var isEndOfLink = anchor && editorNS.RangeUtils.isEndOf(linkRange, anchor);
	        if (isEndOfLink) {
	            var command = new editorNS.UnlinkCommand({ range: linkRange, body: editor.body, immutables: !!editor.immutables });
	            editor.execCommand(command);
	            editor._selectionChange();
	        }
	        return false;
	    },
	    _handleSelection: function(range) {
	        var ancestor = range.commonAncestorContainer;
	        var table = dom.closest(ancestor, "table");
	        var emptyParagraphContent = editorNS.emptyElementContent;
	        var editor = this.editor;
	        var parentElementOrNode;

	        if (inTable(range)) {
	            var removeTableContent = new RemoveTableContent(editor);
	            removeTableContent.remove(range);
	            editor.selectRange(range);
	            return true;
	        }

	        var marker = new Marker();
	        marker.add(range, false);

	        if(range.commonAncestorContainer === editor.body) {
	            this._surroundFullyContent(marker, range);
	        }

	        if (editor.immutables) {
	            this._handleImmutables(marker);
	        }

	        this._surroundFullySelectedAnchor(marker, range);

	        range.setStartAfter(marker.start);
	        range.setEndBefore(marker.end);

	        var start = range.startContainer;
	        var end = range.endContainer;

	        range.deleteContents();

	        if(end.tagName.toLocaleLowerCase() === "li" && dom.emptyNode(end)) {
	            range.selectNode(end);
	            range.deleteContents();
	        }

	        if (table && $(table).text() === "") {
	            range.selectNode(table);
	            range.deleteContents();
	        }

	        ancestor = range.commonAncestorContainer;

	        if (dom.name(ancestor) === "p" && ancestor.innerHTML === "") {
	            ancestor.innerHTML = emptyParagraphContent;
	            range.setStart(ancestor, 0);
	        }

	        this._join(start, end);

	        dom.insertAfter(editor.document.createTextNode("\ufeff"), marker.start);
	        marker.remove(range);

	        start = range.startContainer;
	        if (dom.name(start) == "tr") {
	            start = start.childNodes[Math.max(0, range.startOffset-1)];
	            range.setStart(start, dom.getNodeLength(start));
	        }

	        range.collapse(true);

	        editor.selectRange(range);

	        parentElementOrNode = start.parentElement || start.parentNode;

	        if (dom.isDataNode(start) && !dom.emptyNode(parentElementOrNode)) {
	            this._cleanBomBefore(range);
	        }

	        return true;
	    },
	    _handleImmutables: function (marker) {
	        var immutableParent = editorNS.Immutables.immutableParent;
	        var startImmutable = immutableParent(marker.start);
	        var endImmutable = immutableParent(marker.start);
	        if (startImmutable) {
	            dom.insertBefore(marker.start, startImmutable);
	        }
	        if (endImmutable) {
	            dom.insertAfter(marker.end, endImmutable);
	        }
	        if (startImmutable) {
	            dom.remove(startImmutable);
	        }
	        if (endImmutable && endImmutable.parentNode) {
	            dom.remove(endImmutable);
	        }
	    },
	    _surroundFullyContent: function(marker, range) {
	        var children = range.commonAncestorContainer.children,
	            startParent = children[0],
	            endParent = children[children.length - 1];

	        this._moveMarker(marker, range, startParent, endParent);
	    },
	    _surroundFullySelectedAnchor: function(marker, range) {
	        var start = marker.start,
	            startParent = $(start).closest("a").get(0),
	            end = marker.end,
	            endParent = $(end).closest("a").get(0);

	        this._moveMarker(marker, range, startParent, endParent);
	    },
	    _moveMarker: function(marker, range, startParent, endParent) {
	        var start = marker.start,
	            end = marker.end;

	        if(startParent && RangeUtils.isStartOf(range, startParent)){
	            dom.insertBefore(start, startParent);
	        }

	        if(endParent && RangeUtils.isEndOf(range, endParent)){
	            dom.insertAfter(end, endParent);
	        }
	    },
	    _root: function(node) {
	        while (node && dom.name(node) != "body" && node.parentNode && dom.name(node.parentNode) != "body") {
	            node = node.parentNode;
	        }

	        return node;
	    },
	    _join: function(start, end) {
	        start = this._root(start);
	        end = this._root(end);

	        if (start != end && dom.is(end, "p")) {
	            this._merge(start, end);
	        }
	    },
	    _merge: function(dest, src) {
	        dom.removeTrailingBreak(dest);

	        while (dest && src.firstChild) {
	            if (dest.nodeType == 1) {
	                dest = dom.list(dest) ? dest.children[dest.children.length - 1] : dest;

	                if (dest) {
	                    dest.appendChild(src.firstChild);
	                }
	            } else if (dest.nodeType === nodeTypes.TEXT_NODE) {
	                this._mergeWithTextNode(dest, src.firstChild);
	            } else {
	                dest.parentNode.appendChild(src.firstChild);
	            }
	        }

	        dom.remove(src);
	    },

	    _mergeWithTextNode: function(textNode, appendedNode) {
	        if (textNode && textNode.nodeType === nodeTypes.TEXT_NODE) {
	            if (textNode.nextSibling && this._isCaret(textNode.nextSibling)) {
	                dom.insertAfter(appendedNode, textNode.nextSibling);
	            }
	            else {
	                dom.insertAfter(appendedNode, textNode);
	            }
	        }
	    },

	    _isCaret: function(element) {
	        return $(element).is("a");
	    },

	    keydown: function(e) {
	        var method, startRestorePoint;
	        var editor = this.editor;
	        var range = editor.getRange();
	        var keyCode = e.keyCode;
	        var keys = kendo.keys;
	        var backspace = keyCode === keys.BACKSPACE;
	        var del = keyCode == keys.DELETE;

	        if (editor.immutables && editor.immutables.keydown(e, range)) {
	            return;
	        }

	        if ((backspace || del) && !range.collapsed) {
	            method = "_handleSelection";
	        } else if (backspace) {
	            method = "_handleBackspace";
	        } else if (del) {
	            method = "_handleDelete";
	        }

	        if (!method) {
	            return;
	        }

	        startRestorePoint = new RestorePoint(range, editor.body);

	        if (this[method](range)) {
	            e.preventDefault();

	            editorNS._finishUpdate(editor, startRestorePoint);
	        }
	    },
	    deleteSelection: function (range) {
	        this._handleSelection(range);
	    },
	    keyup: $.noop
	});

	var SystemHandler = Class.extend({
	    init: function(editor) {
	        this.editor = editor;
	        this.systemCommandIsInProgress = false;
	    },

	    createUndoCommand: function () {
	        this.startRestorePoint = this.endRestorePoint = editorNS._finishUpdate(this.editor, this.startRestorePoint);
	    },

	    changed: function () {
	        if (this.startRestorePoint) {
	            return this.startRestorePoint.html != this.editor.body.innerHTML;
	        }

	        return false;
	    },

	    keydown: function (e) {
	        var that = this,
	            editor = that.editor,
	            keyboard = editor.keyboard;

	        if (keyboard.isModifierKey(e)) {

	            if (keyboard.isTypingInProgress()) {
	                keyboard.endTyping(true);
	            }

	            that.startRestorePoint = new RestorePoint(editor.getRange(), editor.body);
	            return true;
	        }

	        if (keyboard.isSystem(e)) {
	            that.systemCommandIsInProgress = true;

	            if (that.changed()) {
	                that.systemCommandIsInProgress = false;
	                that.createUndoCommand();
	            }

	            return true;
	        }

	        return false;
	    },

	    keyup: function () {
	        var that = this;

	        if (that.systemCommandIsInProgress && that.changed()) {
	            that.systemCommandIsInProgress = false;
	            that.createUndoCommand();
	            return true;
	        }

	        return false;
	    }
	});

	var SelectAllHandler = Class.extend({
	    init: function(editor) {
	        this.editor = editor;
	    },

	    keydown: function (e) {
	        if (!browser.webkit || e.isDefaultPrevented() ||
	            !(e.ctrlKey && e.keyCode == 65 && !e.altKey && !e.shiftKey)) {
	            return;
	        }
	        if (this.editor.options.immutables) {
	            this._toSelectableImmutables();
	        }
	        this._selectEditorBody();
	    },

	    _selectEditorBody: function() {
	        var editor = this.editor;
	        var range = editor.getRange();
	        range.selectNodeContents(editor.body);

	        setTimeout(function() {
	            editor.selectRange(range);
	        });
	    },

	    _toSelectableImmutables: function() {
	        var editor = this.editor,
	            body = editor.body,
	            immutable = editorNS.Immutables.immutable,
	            emptyTextNode = dom.emptyTextNode,
	            first = body.firstChild,
	            last = body.lastChild;

	        while (emptyTextNode(first)){
	            first = first.nextSibling;
	        }

	        while (emptyTextNode(last)){
	            last = last.previousSibling;
	        }

	        if (first && immutable(first)) {
	            $(bomSpan).prependTo(body);
	        }

	        if (last && immutable(last)) {
	            $(bomSpan).appendTo(body);
	        }
	    },

	    keyup: $.noop
	});

	var Keyboard = Class.extend({
	    init: function(handlers) {
	        this.handlers = handlers;
	        this.typingInProgress = false;
	    },

	    isCharacter: function(keyCode) {
	        return (keyCode >= 48 && keyCode <= 90) || (keyCode >= 96 && keyCode <= 111) ||
	               (keyCode >= 186 && keyCode <= 192) || (keyCode >= 219 && keyCode <= 222) ||
	               keyCode == 229;
	    },

	    toolFromShortcut: function (tools, e) {
	        var key = String.fromCharCode(e.keyCode),
	            toolName,
	            toolOptions,
	            modifier = this._getShortcutModifier(e, navigator.platform);

	        for (toolName in tools) {
	            toolOptions = $.extend({ ctrl: false, alt: false, shift: false }, tools[toolName].options);

	            if ((toolOptions.key == key || toolOptions.key == e.keyCode) &&
	                toolOptions.ctrl == modifier &&
	                toolOptions.alt == e.altKey &&
	                toolOptions.shift == e.shiftKey) {
	                return toolName;
	            }
	        }
	    },

	    _getShortcutModifier: function (e, platform) {
	        var mac = platform.toUpperCase().indexOf('MAC') >= 0;
	        return mac ? e.metaKey : e.ctrlKey;
	    },

	    toolsFromShortcut: function (tools, e) {
	        var key = String.fromCharCode(e.keyCode),
	            toolName,
	            o,
	            matchesKey,
	            found = [];
	        var matchKey = function (toolKey) { return toolKey == key || toolKey == e.keyCode || toolKey == e.charCode; };

	        for (toolName in tools) {
	            o = $.extend({ ctrl: false, alt: false, shift: false }, tools[toolName].options);

	            matchesKey = Array.isArray(o.key) ? $.grep(o.key, matchKey).length > 0 : matchKey(o.key);
	            if (matchesKey &&
	                o.ctrl == e.ctrlKey &&
	                o.alt == e.altKey &&
	                o.shift == e.shiftKey) {
	                found.push(tools[toolName]);
	            }
	        }

	        return found;
	    },

	    isTypingKey: function (e) {
	        var keyCode = e.keyCode;
	        return (this.isCharacter(keyCode) && !e.ctrlKey && !e.altKey) ||
	               keyCode == 32 || keyCode == 13 || keyCode == 8 ||
	               (keyCode == 46 && !e.shiftKey && !e.ctrlKey && !e.altKey);
	    },

	    isModifierKey: function (e) {
	        var keyCode = e.keyCode;
	        return (keyCode == 17 && !e.shiftKey && !e.altKey) ||
	               (keyCode == 16 && !e.ctrlKey && !e.altKey) ||
	               (keyCode == 18 && !e.ctrlKey && !e.shiftKey);
	    },

	    isSystem: function (e) {
	        return e.keyCode == 46 && e.ctrlKey && !e.altKey && !e.shiftKey;
	    },

	    startTyping: function (callback) {
	        this.onEndTyping = callback;
	        this.typingInProgress = true;
	    },

	    stopTyping: function() {
	        if (this.typingInProgress && this.onEndTyping) {
	            this.onEndTyping();
	        }
	        this.typingInProgress = false;
	    },

	    endTyping: function (force) {
	        var that = this;
	        that.clearTimeout();
	        if (force) {
	            that.stopTyping();
	        } else {
	            that.timeout = window.setTimeout($.proxy(that.stopTyping, that), 1000);
	        }
	    },

	    isTypingInProgress: function () {
	        return this.typingInProgress;
	    },

	    clearTimeout: function () {
	        window.clearTimeout(this.timeout);
	    },

	    notify: function(e, what) {
	        var i, handlers = this.handlers;

	        for (i = 0; i < handlers.length; i++) {
	            if (handlers[i][what](e)) {
	                break;
	            }
	        }
	    },

	    keydown: function (e) {
	        this.notify(e, 'keydown');
	    },

	    keyup: function (e) {
	        this.notify(e, 'keyup');
	    }
	});

	extend(editorNS, {
	    TypingHandler: TypingHandler,
	    SystemHandler: SystemHandler,
	    BackspaceHandler: BackspaceHandler,
	    SelectAllHandler: SelectAllHandler,
	    Keyboard: Keyboard
	});

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });