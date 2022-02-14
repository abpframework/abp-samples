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

	__webpack_require__(1674);
	module.exports = __webpack_require__(1674);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1674:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo, window) {

	    /* jshint eqnull:true */
	    /* jshint latedef: nofunc */

	    var $ = kendo.jQuery;
	    var Widget = kendo.ui.Widget;
	    var ns = ".kendoFormulaInput";
	    var keys = kendo.keys;
	    var classNames = {
	        wrapper: "k-spreadsheet-formula-input",
	        listWrapper: "k-spreadsheet-formula-list"
	    };
	    var styles = [
	        "font-family",
	        "font-size",
	        "font-stretch",
	        "font-style",
	        "font-weight",
	        "letter-spacing",
	        "text-transform",
	        "line-height"
	    ];

	    //move to core
	    var KEY_NAMES = {
	        27: 'esc',
	        37: 'left',
	        39: 'right',
	        35: 'end',
	        36: 'home',
	        32: 'spacebar'
	    };

	    var PRIVATE_FORMULA_CHECK = /(^_|[^a-z0-9]$)/i;

	    var FormulaInput = Widget.extend({
	        init: function(element, options) {
	            Widget.call(this, element, options);

	            element = this.element;

	            element.addClass(FormulaInput.classNames.wrapper)
	                .attr("contenteditable", true)
	                .attr("spellcheck", false)
	                .css("white-space", "pre");

	            if (options && options.formulaBarWidth) {
	                element.css("max-width", options.formulaBarWidth - 16 + "px");
	            }

	            if (this.options.autoScale) {
	                element.on("input", this.scale.bind(this));
	            }

	            this._highlightedRefs = [];

	            this._formulaSource();

	            this._formulaList();

	            this._popup();

	            this._tooltip();

	            element
	                .on("keydown", this._keydown.bind(this))
	                .on("keyup", this._keyup.bind(this))
	                .on("blur", this._blur.bind(this))
	                .on("input click", this._input.bind(this))
	                .on("focus", this._focus.bind(this))
	                .on("paste", this._paste.bind(this));
	        },

	        options: {
	            name: "FormulaInput",
	            autoScale: false,
	            filterOperator: "startswith",
	            scalePadding: 30,
	            minLength: 1,
	            formulaBarWidth: null
	        },

	        events: [
	            "keyup",
	            "focus"
	        ],

	        enable: function(enable) {
	            if (enable === undefined) {
	                return this.element.attr("contenteditable") === "true";
	            }

	            if (enable) {
	                this.element.attr("contenteditable", enable);
	            } else {
	                this.element.removeAttr("contenteditable");
	            }

	            this.element.toggleClass("k-state-disabled", !enable);
	        },

	        getPos: function() {
	            var div = this.element[0];
	            var sel = window.getSelection();
	            var a = lookup(sel.focusNode, sel.focusOffset);
	            var b = lookup(sel.anchorNode, sel.anchorOffset);
	            if (a != null && b != null) {
	                if (a > b) {
	                    var tmp = a;
	                    a = b;
	                    b = tmp;
	                }
	                return { begin: a, end: b, collapsed: a == b };
	            }
	            function lookup(lookupNode, pos) {
	                try {
	                    (function loop(node){
	                        if (node === lookupNode) {
	                            throw pos;
	                        } else if (node.nodeType == 1 /* Element */) {
	                            for (var i = node.firstChild; i; i = i.nextSibling) {
	                                loop(i);
	                            }
	                        } else if (node.nodeType == 3 /* Text */) {
	                            pos += node.nodeValue.length;
	                        }
	                    })(div);
	                } catch (index) {
	                    return index;
	                }
	            }
	        },

	        setPos: function(begin, end) {
	            var eiv = this.element[0];
	            begin = lookup(eiv, begin);
	            if (end != null) {
	                end = lookup(eiv, end);
	            } else {
	                end = begin;
	            }
	            if (begin && end) {
	                var range = document.createRange();
	                range.setStart(begin.node, begin.pos);
	                range.setEnd(end.node, end.pos);
	                var sel = window.getSelection();
	                var currentRange = sel.getRangeAt(0);
	                if (differ(range, currentRange))  {
	                    sel.removeAllRanges();
	                    sel.addRange(range);
	                }
	            }
	            function differ(a, b) {
	                return (
	                    a.startOffset != b.startOffset ||
	                    a.endOffset != b.endOffset ||
	                    a.startContainer != b.endContainer ||
	                    a.endContainer != b.endContainer
	                );
	            }
	            function lookup(node, pos) {
	                try {
	                    (function loop(node){
	                        if (node.nodeType == 3 /* Text */) {
	                            var len = node.nodeValue.length;
	                            if (len >= pos) {
	                                throw node;
	                            }
	                            pos -= len;
	                        } else if (node.nodeType == 1 /* Element */) {
	                            for (var i = node.firstChild; i; i = i.nextSibling) {
	                                loop(i);
	                            }
	                        }
	                    })(node);
	                } catch (el) {
	                    return { node: el, pos: pos };
	                }
	            }
	        },

	        end: function() {
	            this.setPos(this.length());
	        },

	        home: function() {
	            this.setPos(0);
	        },

	        select: function() {
	            this.setPos(0, this.length());
	        },

	        length: function() {
	            return this.value().length;
	        },

	        _formulaSource: function() {
	            var result = [];
	            var value;

	            for (var key in kendo.spreadsheet.calc.runtime.FUNCS) {
	                if (!PRIVATE_FORMULA_CHECK.test(key)) {
	                    value = key.toUpperCase();
	                    result.push({ value: value, text: value });
	                }
	            }

	            this.formulaSource = new kendo.data.DataSource({ data: result });
	        },

	        _formulaList: function() {
	            this.list = new kendo.ui.StaticList($('<ul />')
	                .addClass(FormulaInput.classNames.listWrapper)
	                .insertAfter(this.element), {
	                    autoBind: false,
	                    selectable: true,
	                    change: this._formulaListChange.bind(this),
	                    dataSource: this.formulaSource,
	                    dataValueField: "value",
	                    template: "#:data.value#"
	                });

	            this.list.element.on("mousedown", function(e) {
	                e.preventDefault();
	            });
	        },

	        _formulaListChange: function() {
	            var tokenCtx = this._tokenContext();

	            if (!tokenCtx || this._mute) {
	                return;
	            }

	            var activeToken = tokenCtx.token;
	            var completion = this.list.value()[0];
	            var ctx = {
	                replace: true,
	                token: activeToken,
	                end: activeToken.end
	            };

	            if (!tokenCtx.nextToken || tokenCtx.nextToken.value != "(") {
	                completion += "(";
	            }

	            this._replaceAt(ctx, completion);
	            this.popup.close();
	        },

	        _popup: function() {
	            this.popup = new kendo.ui.Popup(this.list.element, {
	                anchor: this.element
	            });
	        },

	        _blur: function() {
	            this.popup.close();
	            clearTimeout(this._focusId);
	            this.trigger("blur");
	        },

	        _isFormula: function() {
	            return /^=/.test(this.value());
	        },

	        _keydown: function(e) {
	            var key = e.keyCode;
	            var that = this;

	            if (KEY_NAMES[key]) {
	                that.popup.close();
	                that._navigated = true;
	            } else if (that._move(key)) {
	                that._navigated = true;
	                e.preventDefault();
	            }

	            that._keyDownTimeout = setTimeout(that._syntaxHighlight.bind(that));
	        },

	        _keyup: function() {
	            var popup = this.popup;
	            var value;

	            if (this._isFormula() && !this._navigated) {
	                value = ((this._tokenContext() || {}).token || {}).value;

	                this.filter(value);

	                if (!value || !this.formulaSource.view().length) {
	                    popup.close();
	                } else {
	                    popup[popup.visible() ? "position" : "open"]();
	                    this.list.focusFirst();
	                }
	            }

	            this._navigated = false;
	            this._syntaxHighlight();

	            this.trigger("keyup");
	        },

	        _input: function() {
	            this._syntaxHighlight();
	        },

	        _focus: function() {
	            setTimeout(this._sync.bind(this));
	            this._focusTimeout = setTimeout(this._syntaxHighlight.bind(this));
	            this.trigger("focus");
	        },

	        _paste: function(ev) {
	            ev.preventDefault();
	            var pos = this.getPos();
	            var text;
	            if (kendo.support.browser.msie) {
	                text = window.clipboardData.getData("Text");
	            } else {
	                text = ev.originalEvent.clipboardData.getData("text/plain");
	            }
	            var val = this.value();
	            val = val.substr(0, pos.begin) + text + val.substr(pos.end);
	            this.value(val);
	            this.setPos(pos.begin + text.length);
	            this.scale();
	        },

	        _move: function(key) {
	            var list = this.list;
	            var popup = this.popup;
	            if (popup.visible()) {
	                if (key === keys.DOWN) {
	                    list.focusNext();
	                    if (!list.focus()) {
	                        list.focusFirst();
	                    }
	                    return true;
	                }
	                if (key === keys.UP) {
	                    list.focusPrev();
	                    if (!list.focus()) {
	                        list.focusLast();
	                    }
	                    return true;
	                }
	                if (key === keys.ENTER) {
	                    list.select(list.focus());
	                    popup.close();
	                    return true;
	                }
	                if (key === keys.TAB) {
	                    list.select(list.focus());
	                    popup.close();
	                    return true;
	                }
	                if (key === keys.PAGEUP) {
	                    list.focusFirst();
	                    return true;
	                }
	                if (key === keys.PAGEDOWN) {
	                    list.focusLast();
	                    return true;
	                }
	            }
	            return key === keys.ENTER || key === keys.TAB;
	        },

	        _tokenContext: function() {
	            var point = this.getPos();
	            var value = this.value();

	            if (!value || !point || !point.collapsed) {
	                return null;
	            }

	            var tokens = kendo.spreadsheet.calc.tokenize(value, this.row(), this.col());
	            var tok;

	            for (var i = 0; i < tokens.length; ++i) {
	                tok = tokens[i];
	                if (touches(tok, point) && /^(?:str|sym|func)$/.test(tok.type)) {
	                    return { token: tok, nextToken: tokens[i + 1] };
	                }
	            }

	            return null;
	        },

	        _sync: function() {
	            if (this._editorToSync && this.isActive()) {
	                this._editorToSync.value(this.value());
	            }
	        },

	        _textContainer: function() {
	            var computedStyles = kendo.getComputedStyles(this.element[0], styles);

	            computedStyles.position = "absolute";
	            computedStyles.visibility = "hidden";
	            computedStyles.whiteSpace = "pre";
	            computedStyles.top = -3333;
	            computedStyles.left = -3333;

	            this._span = $("<span style='white-space: pre'/>").css(computedStyles).insertAfter(this.element);
	        },

	        _tooltip: function() {
	            this._cellTooltip = $('<div class="k-widget k-tooltip" style="position:absolute; display:none">A1</div>').insertAfter(this.element);
	        },

	        tooltip: function(value) {
	            this._cellTooltip.text(value);
	        },

	        toggleTooltip: function(show) {
	            this._cellTooltip.toggle(show);
	        },

	        isActive: function() {
	            return this.element[0] === kendo._activeElement();
	        },

	        filter: function(value) {
	            if (!value || value.length < this.options.minLength) {
	                return;
	            }

	            this._mute = true;
	            this.list.select(-1);
	            this._mute = false;

	            this.formulaSource.filter({
	                field: this.list.options.dataValueField,
	                operator: this.options.filterOperator,
	                value: value
	            });
	        },

	        hide: function() {
	            this.enable(false);
	            this.element.hide();
	            this._cellTooltip.hide();
	        },

	        show: function() {
	            this.enable(true);
	            this.element.show();
	        },

	        row: function() {
	            if (this.activeCell) {
	                return this.activeCell.row;
	            }
	        },

	        col: function() {
	            if (this.activeCell) {
	                return this.activeCell.col;
	            }
	        },

	        position: function(rectangle) {
	            if (!rectangle) {
	                return;
	            }

	            this.show();

	            this.element
	                .css({
	                    "top": rectangle.top + 1 + "px",
	                    "left": rectangle.left + 1 + "px"
	                });

	            this._cellTooltip.css({
	                "top": (rectangle.top - this._cellTooltip.height() - 10) + "px",
	                "left": rectangle.left
	            });
	        },

	        resize: function(rectangle) {
	            if (!rectangle) {
	                return;
	            }

	            this.element.css({
	                width: rectangle.width - 1,
	                height: rectangle.height - 1
	            });
	        },

	        canInsertRef: function(isKeyboardAction) {
	            return this._canInsertRef(isKeyboardAction);
	        },

	        _canInsertRef: function(isKeyboardAction) {
	            if (this.popup.visible()) {
	                return null;
	            }
	            var strictMode = isKeyboardAction;
	            var point = this.getPos();
	            var tokens, tok;

	            if (point && this._isFormula()) {
	                if (point.begin === 0) {
	                    return null;
	                }

	                tokens = kendo.spreadsheet.calc.tokenize(this.value(), this.row(), this.col());

	                for (var i = 0; i < tokens.length; ++i) {
	                    tok = tokens[i];
	                    if (touches(tok, point)) {
	                        return canReplace(tok);
	                    }
	                    if (afterPoint(tok)) {
	                        return canInsertBetween(tokens[i-1], tok);
	                    }
	                }
	                return canInsertBetween(tok, null);
	            }

	            return null;

	            function afterPoint(tok) {
	                return tok.begin > point.begin;
	            }
	            function canReplace(tok) {
	                if (tok) {
	                    if (/^(?:num|str|bool|sym|ref)$/.test(tok.type)) {
	                        return { replace: true, token: tok, end: tok.end };
	                    }
	                    if (/^(?:op|punc|startexp)$/.test(tok.type)) {
	                        if (tok.end == point.end) {
	                            return canInsertBetween(tok, tokens[i+1]);
	                        }
	                        return canInsertBetween(tokens[i-1], tok);
	                    }
	                }
	            }
	            function canInsertBetween(left, right) {
	                if (left == null) {
	                    return null;
	                }
	                if (right == null) {
	                    if (/^(?:op|startexp)$/.test(left.type) || isOpenParen(left.value)) {
	                        return { token: left, end: point.end };
	                    }
	                    return null;
	                }
	                if (strictMode) {
	                    if (left.type == "op" && /^(?:punc|op)$/.test(right.type)) {
	                        return { token: left, end: point.end };
	                    }
	                } else {
	                    if (left.type == "startexp") {
	                        return { token: left, end: point.end };
	                    }
	                    if (/^(?:op|punc)$/.test(left.type) && /^[,;({]$/.test(left.value)) {
	                        return { token: left, end: point.end };
	                    }
	                    if (/^(?:ref|sym)/.test(left.type)) {
	                        return { token: left, replace: true, end: left.end };
	                    }
	                    if (/^(?:ref|sym)/.test(right.type)) {
	                        return { token: right, replace: true, end: right.end };
	                    }
	                }
	                return false;
	            }
	        },

	        refAtPoint: function(sheet) {
	            var x = this._canInsertRef();
	            if (x) {
	                var ref = sheet.selection()._ref.simplify().clone().relative(0, 0, 3);
	                if (sheet.isMerged(ref)) {
	                    ref = ref.topLeft;
	                }
	                if (sheet !== this.activeSheet) {
	                    ref = ref.setSheet(sheet.name(), true);
	                }
	                this._replaceAt(x, ref.print(0, 0));
	            }
	        },

	        _replaceAt: function(ctx, newValue) {
	            var value = this.value();
	            var tok = ctx.token;
	            var rest = value.substr(ctx.end);
	            value = value.substr(0, ctx.replace ? tok.begin : ctx.end) + newValue;
	            var point = value.length;
	            value += rest;
	            this._value(value);
	            this.setPos(point);
	            this.scale();
	            this._syntaxHighlight();
	        },

	        syncWith: function(formulaInput) {
	            var self = this;

	            // IE does not support "input" event on elements with contenteditable
	            // https://developer.mozilla.org/en-US/docs/Web/Events/input#Browser_compatibility
	            var eventName = "input" + ns;
	            var handler = self._sync.bind(self), iehandler;
	            if (kendo.support.browser.msie) {
	                eventName = "keydown" + ns;
	                iehandler = function() {
	                    setTimeout(handler);
	                };
	            }

	            self._editorToSync = formulaInput;
	            self.element.off(eventName).on(eventName, iehandler || handler);
	        },

	        scale: function() {
	            var element = this.element;
	            var width, height;

	            if (!this._span) {
	                this._textContainer();
	            }

	            this._span.html(element.html());

	            width = this._span.width() + this.options.scalePadding;
	            height = this._span.height();

	            if (width > element.width()) {
	                element.width(width);
	            }
	            if (height > element.height()) {
	                element.height(height);
	            }

	            this._sync();
	        },

	        _value: function(value) {
	            this.element.text(value);
	        },

	        value: function(value) {
	            if (value === undefined) {
	                // jQuery's .text() discards the newlines for some reason
	                var txt = this.element[0].innerText;
	                return txt.replace(/\n$/, "");
	            }

	            this._value(value);
	            this._syntaxHighlight();
	        },

	        highlightedRefs: function() {
	            return this._highlightedRefs.slice();
	        },

	        _syntaxHighlight: function() {
	            var pos = this.getPos();
	            var value = this.value();
	            var refClasses = kendo.spreadsheet.Pane.classNames.series;
	            var highlightedRefs = [];
	            var refIndex = 0;
	            var parens = [];
	            var tokens = [];
	            var activeToken;

	            if (pos && !pos.collapsed) {
	                // Backward selection (hold shift, move right to left)
	                // will not work properly if we continuously re-set
	                // the HTML.  If the selection is on, presumably the
	                // text has already been highlighted, so stop here.
	                return;
	            }

	            if (!(/^=/.test(value))) {
	                // if an user deleted the initial =, reset the text to
	                // discard any highlighting.  Only do that once.
	                if (this._highlightedRefs.length) {
	                    this._highlightedRefs = [];
	                    this.element.text(value);
	                }

	                // also make sure the completion popup goes away
	                if (this.popup) {
	                    this.popup.close();
	                }

	                return; // avoid messing with the cursor position below
	            } else {
	                tokens = kendo.spreadsheet.calc.tokenize(value, this.row(), this.col());
	                tokens.forEach(function(tok){
	                    tok.active = false;
	                    tok.cls = [ "k-syntax-" + tok.type ];

	                    if (tok.type == "ref") {
	                        tok.colorClass = refClasses[(refIndex++) % refClasses.length];
	                        tok.cls.push(tok.colorClass);
	                        highlightedRefs.push(tok);
	                    }
	                    if (pos && tok.type == "punc") {
	                        if (isOpenParen(tok.value)) {
	                            parens.unshift(tok);
	                        } else if (isCloseParen(tok.value)) {
	                            var open = parens.shift();
	                            if (open) {
	                                if (isMatchingParen(tok.value, open.value)) {
	                                    if (touches(tok, pos) || touches(open, pos)) {
	                                        tok.cls.push("k-syntax-paren-match");
	                                        open.cls.push("k-syntax-paren-match");
	                                    }
	                                } else {
	                                    tok.cls.push("k-syntax-error");
	                                    open.cls.push("k-syntax-error");
	                                }
	                            } else {
	                                tok.cls.push("k-syntax-error");
	                            }
	                        }
	                    }
	                    if (pos && touches(tok, pos)) {
	                        tok.cls.push("k-syntax-at-point");
	                        tok.active = true;
	                        activeToken = tok;
	                    }
	                    if (tok.type == "func" && !knownFunction(tok.value) && (!pos || !touches(tok, pos))) {
	                        tok.cls.push("k-syntax-error");
	                    }
	                });
	                tokens.reverse().forEach(function(tok){
	                    var begin = tok.begin, end = tok.end;
	                    var text = kendo.htmlEncode(value.substring(begin, end));
	                    value = value.substr(0, begin) +
	                        "<span class='" + tok.cls.join(" ") + "'>" + text + "</span>" +
	                        value.substr(end);
	                });
	                this.element.html(value);
	            }
	            if (pos) {
	                this.setPos(pos.begin, pos.end);
	            }

	            this._highlightedRefs = highlightedRefs;
	        },

	        destroy: function() {
	            this._editorToSync = null;

	            this.element.off(ns);

	            clearTimeout(this._focusTimeout);
	            clearTimeout(this._keyDownTimeout);

	            this._cellTooltip = null;
	            this._span = null;

	            this.popup.destroy();
	            this.popup = null;

	            Widget.fn.destroy.call(this);
	        },

	        insertNewline: function() {
	            var val = this.value();
	            var pos = this.getPos();
	            var eof = pos.end == val.length;
	            val = val.substr(0, pos.begin) + (eof ? "\n\n" : "\n" + val.substr(pos.end));
	            this.value(val);
	            this.setPos(pos.begin + 1);
	        }
	    });

	    function isOpenParen(ch) {
	        return ch == "(" || ch == "[" || ch == "{";
	    }

	    function isCloseParen(ch) {
	        return ch == ")" || ch == "]" || ch == "}";
	    }

	    function isMatchingParen(close, open) {
	        return open == "(" ? close == ")"
	            :  open == "[" ? close == "]"
	            :  open == "{" ? close == "}"
	            :  false;
	    }

	    function touches(pos, target) {
	        return pos.begin <= target.begin && pos.end >= target.end;
	    }

	    function knownFunction(name) {
	        return kendo.spreadsheet.calc.runtime.FUNCS[name.toLowerCase()];
	    }

	    kendo.spreadsheet.FormulaInput = FormulaInput;
	    $.extend(true, FormulaInput, { classNames: classNames });
	})(kendo, window);
	}, __webpack_require__(3));


/***/ })

/******/ });