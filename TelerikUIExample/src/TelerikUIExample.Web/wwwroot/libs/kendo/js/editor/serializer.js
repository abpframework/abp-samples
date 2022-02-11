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

	__webpack_require__(1021);
	module.exports = __webpack_require__(1021);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1021:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1022) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {

	// Imports ================================================================
	var kendo = window.kendo;
	var Editor = kendo.ui.editor;
	var dom = Editor.Dom;
	var extend = $.extend;

	var fontSizeMappings = 'xx-small,x-small,small,medium,large,x-large,xx-large'.split(',');
	var quoteRe = /"/g; //"
	var brRe = /<br[^>]*>/i;
	var pixelRe = /^\d+(\.\d*)?(px)?$/i;
	var emptyPRe = /<p>(?:&nbsp;)?<\/p>/i;
	var cssDeclaration = /(\*?[-#\/\*\\\w]+(?:\[[0-9a-z_-]+\])?)\s*:\s*((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/g;
	var sizzleAttr = /^sizzle-\d+/i;
	var scriptAttr = /^k-script-/i;
	var onerrorRe = /\s*onerror\s*=\s*(?:'|")?([^'">\s]*)(?:'|")?/i;
	var br = '<br class="k-br">';
	var bomSpan = "<span class='k-br'>\ufeff</span>";

	var div = document.createElement("div");
	div.innerHTML = " <hr>";
	var supportsLeadingWhitespace = div.firstChild.nodeType === 3;
	div = null;
	var isFunction = kendo.isFunction;

	var TD = "td";

	var Serializer = {
	    toEditableHtml: function(html) {
	        return (html || "")
	            .replace(/<!\[CDATA\[(.*)?\]\]>/g, "<!--[CDATA[$1]]-->")
	            .replace(/<(\/?)script([^>]*)>/ig, "<$1k:script$2>")
	            .replace(/<img([^>]*)>/ig, function(match) {
	                return match.replace(onerrorRe, "");
	            })
	            .replace(/(<\/?img[^>]*>)[\r\n\v\f\t ]+/ig, "$1")
	            .replace(/^<(table|blockquote)/i, br + '<$1')
	            .replace(/^[\s]*(&nbsp;|\u00a0)/i, '$1')
	            .replace(/<\/(table|blockquote)>$/i, '</$1>' + br);
	    },

	    _toEditableImmutables: function(body) {
	        var immutable = Editor.Immutables.immutable,
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

	    _fillEmptyElements: function(body) {
	        // fills empty elements to allow them to be focused
	        $(body).find("p,td").each(function() {
	            var p = $(this);
	            if (/^\s*$/g.test(p.text()) && !p.find("img,input").length) {
	                var node = this;
	                while (node.children[0] && node.children[0].nodeType != 3) {
	                    node = node.children[0];
	                }

	                if (node.nodeType == 1 && !dom.empty[dom.name(node)]) {
	                    if(dom.is(node, "td")) {
	                        node.innerHTML = kendo.ui.editor.emptyTableCellContent;
	                    }
	                    else {
	                        node.innerHTML = kendo.ui.editor.emptyElementContent;
	                    }
	                }
	            }
	        });
	    },

	    _removeSystemElements: function(body) {
	        // removes persisted system elements
	        $(".k-paste-container", body).remove();
	    },

	    _resetOrderedLists: function(root){
	        // fix for IE9 OL bug -- https://connect.microsoft.com/IE/feedback/details/657695/ordered-list-numbering-changes-from-correct-to-0-0
	        var ols = root.getElementsByTagName("ol"), i, ol, originalStart;

	        for (i = 0; i < ols.length; i++) {
	            ol = ols[i];
	            originalStart = ol.getAttribute("start");

	            ol.setAttribute("start", 1);

	            if (originalStart) {
	                ol.setAttribute("start", originalStart);
	            } else {
	                ol.removeAttribute(originalStart);
	            }
	        }
	    },

	    _preventScriptExecution: function(root) {
	        $(root).find("*").each(function() {
	            var attributes = this.attributes;
	            var attribute, i, l, name;
	            var attributesToRemove = [];

	            for (i = 0, l = attributes.length; i < l; i++) {
	                attribute = attributes[i];
	                name = attribute.nodeName;

	                if (attribute.specified && /^on/i.test(name)) {
	                    this.setAttribute("k-script-" + name, attribute.value);
	                    attributesToRemove.push(name);
	                }
	            }

	            for (i = 0, l = attributesToRemove.length; i < l; i++) {
	                this.removeAttribute(attributesToRemove[i]);
	            }
	        });
	    },

	    htmlToDom: function(html, root, options) {
	        var browser = kendo.support.browser;
	        var msie = browser.msie;
	        var o = options || {};
	        var immutables = o.immutables;

	        html = Serializer.toEditableHtml(html);

	        if(isFunction(o.custom)) {
	            html = o.custom(html) || html;
	        }
	        root.innerHTML = html;

	        if (immutables) {
	            immutables.deserialize(root);
	        }

	        if (msie) {
	            // unicode characters denormalize the DOM tree in IE9
	            dom.normalize(root);

	            Serializer._resetOrderedLists(root);
	        }

	        Serializer._preventScriptExecution(root);

	        Serializer._fillEmptyElements(root);

	        Serializer._removeSystemElements(root);

	        Serializer._toEditableImmutables(root);

	        // add k-table class to all tables
	        $("table", root).addClass("k-table");

	        return root;
	    },

	    domToXhtml: function(root, options) {
	        var result = [];
	        var immutables = options && options.immutables;

	        function semanticFilter(attributes) {
	            return $.grep(attributes, function(attr) {
	                return attr.name != "style";
	            });
	        }

	        function mapStart(node, tag) {
	            result.push('<' + tag);
	            attr(node);
	            result.push('>');
	        }

	        var tagMap = {
	            iframe: {
	                start: function (node) { mapStart(node, "iframe"); },
	                end: function () { result.push('</iframe>'); }
	            },
	            'k:script': {
	                start: function (node) { mapStart(node, "script"); },
	                end: function () { result.push('</script>'); },
	                skipEncoding: true
	            },
	            span: {
	                semantic: true,
	                start: function(node) {
	                    var style = node.style;
	                    var attributes = specifiedAttributes(node);
	                    var semanticAttributes = semanticFilter(attributes);

	                    if (semanticAttributes.length) {
	                        result.push("<span"); attr(node, semanticAttributes); result.push(">");
	                    }

	                    if (style.textDecoration == "underline") {
	                        result.push("<u>");
	                    }

	                    var font = [];
	                    if (style.color) {
	                        font.push('color="' + dom.toHex(style.color) + '"');
	                    }

	                    if (style.fontFamily) {
	                        font.push('face="' + style.fontFamily + '"');
	                    }

	                    if (style.fontSize) {
	                        var size = $.inArray(style.fontSize, fontSizeMappings);
	                        font.push('size="' + size + '"');
	                    }

	                    if (font.length) {
	                        result.push("<font " + font.join(" ") + ">");
	                    }
	                },
	                end: function(node) {
	                    var style = node.style;

	                    if (style.color || style.fontFamily || style.fontSize) {
	                        result.push("</font>");
	                    }

	                    if (style.textDecoration == "underline") {
	                        result.push("</u>");
	                    }

	                    if (semanticFilter(specifiedAttributes(node)).length) {
	                        result.push("</span>");
	                    }
	                }
	            },
	            strong: {
	                semantic: true,
	                start: function (node) { mapStart(node, "b"); },
	                end: function () { result.push('</b>'); }
	            },
	            em: {
	                semantic: true,
	                start: function (node) { mapStart(node, "i"); },
	                end: function () { result.push('</i>'); }
	            },
	            b: {
	                semantic: false,
	                start: function (node) { mapStart(node, "strong"); },
	                end: function () { result.push('</strong>'); }
	            },
	            i: {
	                semantic: false,
	                start: function (node) { mapStart(node, "em"); },
	                end: function () { result.push('</em>'); }
	            },
	            u: {
	                semantic: false,
	                start: function (node) {
	                    result.push('<span');

	                    var attributes = specifiedAttributes(node);
	                    var style = $(attributes).filter(function(i, item){ return item.name == "style"; })[0];
	                    var styleObj = { nodeName: "style", value: "text-decoration:underline;"};

	                    if (style) {
	                        styleObj.value  = style.value;
	                        if (!/text-decoration/i.test(styleObj.value)) {
	                            styleObj.value = "text-decoration:underline;" + styleObj.value;
	                        }
	                        attributes.splice($.inArray(style, attributes), 1);
	                    }
	                    attributes.push(styleObj);

	                    attr(node, attributes);
	                    result.push('>');
	                },
	                end: function () { result.push('</span>'); }
	            },
	            font: {
	                semantic: false,
	                start: function (node) {
	                    result.push('<span style="');

	                    var color = node.getAttribute('color');
	                    var size = fontSizeMappings[node.getAttribute('size')];
	                    var face = node.getAttribute('face');

	                    if (color) {
	                        result.push('color:');
	                        result.push(dom.toHex(color));
	                        result.push(';');
	                    }

	                    if (face) {
	                        result.push('font-family:');
	                        result.push(face);
	                        result.push(';');
	                    }

	                    if (size) {
	                        result.push('font-size:');
	                        result.push(size);
	                        result.push(';');
	                    }

	                    result.push('">');
	                },
	                end: function () {
	                    result.push('</span>');
	                }
	            }
	        };

	        tagMap.script = tagMap["k:script"];

	        options = options || {};

	        if (typeof options.semantic == "undefined") {
	            options.semantic = true;
	        }

	        function cssProperties(cssText) {
	            var trim = kendo.trim;
	            var css = trim(cssText);
	            var match;
	            var property, value;
	            var properties = [];

	            cssDeclaration.lastIndex = 0;

	            while (true) {
	                match = cssDeclaration.exec(css);

	                if (!match) {
	                    break;
	                }

	                property = trim(match[1].toLowerCase());
	                value = trim(match[2]);

	                if (property == "font-size-adjust" || property == "font-stretch") {
	                    continue;
	                }

	                if (property.indexOf('color') >= 0) {
	                    value = dom.toHex(value);
	                } else if (property.indexOf('font') >= 0) {
	                    value = value.replace(quoteRe, "'");
	                } else if (/\burl\(/g.test(value)) {
	                    value = value.replace(quoteRe, "");
	                }

	                properties.push({ property: property, value: value });
	            }

	            return properties;
	        }

	        function styleAttr(cssText) {
	            var properties = cssProperties(cssText);
	            var i;

	            for (i = 0; i < properties.length; i++) {
	                result.push(properties[i].property);
	                result.push(':');
	                result.push(properties[i].value);
	                result.push(';');
	            }
	        }

	        function specifiedAttributes(node) {
	            var result = [];
	            var attributes = node.attributes;
	            var attribute, i, l;
	            var name, value, specified;

	            for (i = 0, l = attributes.length; i < l; i++) {
	                attribute = attributes[i];

	                name = attribute.nodeName;
	                value = attribute.value;
	                specified = attribute.specified;

	                // In IE < 8 the 'value' attribute is not returned as 'specified'. The same goes for type="text"
	                if (name == 'value' && 'value' in node && node.value) {
	                    specified = true;
	                } else if (name == 'type' && value == 'text') {
	                    specified = true;
	                } else if (name == "class" && !value) {
	                    specified = false;
	                } else if (sizzleAttr.test(name)) {
	                    specified = false;
	                } else if (name == 'complete') {
	                    specified = false;
	                } else if (name == 'altHtml') {
	                    specified = false;
	                } else if (name == 'start' && dom.is(node, "ul")) {
	                    specified = false;
	                } else if (name == 'start' && dom.is(node, "ol") && value == "1") {
	                    specified = false;
	                } else if (name.indexOf('_moz') >= 0) {
	                    specified = false;
	                } else if (scriptAttr.test(name)) {
	                    specified = !!options.scripts;
	                } else if (name == 'data-role' && value == 'resizable' && (dom.is(node, "tr") || dom.is(node, "td"))) {
	                    specified = false;
	                }

	                if (specified) {
	                    result.push(attribute);
	                }
	            }

	            return result;
	        }

	        function attr(node, attributes) {
	            var i, l, attribute, name, value;

	            attributes = attributes || specifiedAttributes(node);

	            if (dom.is(node, 'img')) {
	                var width = node.style.width,
	                    height = node.style.height,
	                    $node = $(node);

	                if (width && pixelRe.test(width)) {
	                    $node.attr('width', parseInt(width, 10));
	                    dom.unstyle(node, { width: undefined });
	                }

	                if (height && pixelRe.test(height)) {
	                    $node.attr('height', parseInt(height, 10));
	                    dom.unstyle(node, { height: undefined });
	                }
	            }

	            if (!attributes.length) {
	                return;
	            }

	            // Remove the following if everything seems to be in order.
	            // https://github.com/telerik/kendo-ui-core/issues/3639
	            // attributes.sort(function (a, b) {
	            //     return a.nodeName > b.nodeName ? 1 : a.nodeName < b.nodeName ? -1 : 0;
	            // });

	            for (i = 0, l = attributes.length; i < l; i++) {
	                attribute = attributes[i];
	                name = attribute.nodeName;
	                value = attribute.value;

	                if (name == "class" && value == "k-table") {
	                    continue;
	                }

	                name = name.replace(scriptAttr, "");

	                result.push(' ');
	                result.push(name);
	                result.push('="');

	                if (name == 'style') {
	                    styleAttr(value || node.style.cssText);
	                } else if (name == 'src' || name == 'href') {
	                    result.push(kendo.htmlEncode(node.getAttribute(name, 2)));
	                } else {
	                    result.push(dom.fillAttrs[name] ? name : value);
	                }

	                result.push('"');
	            }
	        }

	        function children(node, skip, skipEncoding) {
	            for (var childNode = node.firstChild; childNode; childNode = childNode.nextSibling) {
	                child(childNode, skip, skipEncoding);
	            }
	        }

	        function text(node) {
	            return node.nodeValue.replace(/\ufeff/g, "");
	        }

	        function isEmptyBomNode(node) {
	            if (dom.isBom(node)) {
	                do {
	                    node = node.parentNode;

	                    if (dom.is(node, TD) && node.childNodes.length === 1) {
	                        return true;
	                    }

	                    if (node.childNodes.length !== 1) {
	                        return false;
	                    }
	                } while(!dom.isBlock(node));

	                return true;
	            }

	            return false;
	        }

	        function child(node, skip, skipEncoding) {
	            var nodeType = node.nodeType,
	                tagName, mapper,
	                parent, value, previous, jqNode;

	            if (immutables && Editor.Immutables.immutable(node)) {
	                result.push(immutables.serialize(node));
	            } else if (nodeType == 1) {
	                tagName = dom.name(node);
	                jqNode = $(node);

	                if (jqNode.hasClass("k-element-resize-handle-wrapper") || jqNode.hasClass("k-column-resize-handle-wrapper") || jqNode.hasClass("k-row-resize-handle-wrapper")) {
	                    return;
	                }

	                if (!tagName || dom.insignificant(node)) {
	                    return;
	                }

	                if (!options.scripts && (tagName == "script" || tagName == "k:script")) {
	                    return;
	                }

	                mapper = tagMap[tagName];

	                if (mapper) {
	                    if (typeof mapper.semantic == "undefined" ||
	                        (options.semantic ^ mapper.semantic)) {
	                        mapper.start(node);
	                        children(node, false, mapper.skipEncoding);
	                        mapper.end(node);
	                        return;
	                    }
	                }

	                result.push('<');
	                result.push(tagName);

	                attr(node);

	                if (dom.empty[tagName]) {
	                    result.push(' />');
	                } else {
	                    result.push('>');
	                    children(node, skip || dom.is(node, 'pre'));
	                    result.push('</');
	                    result.push(tagName);
	                    result.push('>');
	                }
	            } else if (nodeType == 3) {
	                if(isEmptyBomNode(node)) {
	                    result.push('&nbsp;');
	                    return;
	                }

	                value = text(node);

	                if (!skip && supportsLeadingWhitespace) {
	                    parent = node.parentNode;
	                    previous = node.previousSibling;

	                    if (!previous) {
	                         previous = (dom.isInline(parent) ? parent : node).previousSibling;
	                    }

	                    if (!previous || previous.innerHTML === "" || dom.isBlock(previous)) {
	                        value = value.replace(/^[\r\n\v\f\t ]+/, '');
	                    }

	                    value = value.replace(/ +/, ' ');
	                }

	                result.push(skipEncoding ? value : dom.encode(value, options));

	            } else if (nodeType == 4) {
	                result.push('<![CDATA[');
	                result.push(node.data);
	                result.push(']]>');
	            } else if (nodeType == 8) {
	                if (node.data.indexOf('[CDATA[') < 0) {
	                    result.push('<!--');
	                    result.push(node.data);
	                    result.push('-->');
	                } else {
	                    result.push('<!');
	                    result.push(node.data);
	                    result.push('>');
	                }
	            }
	        }

	        function textOnly(root) {
	            var childrenCount = root.childNodes.length;
	            var textChild = childrenCount && root.firstChild.nodeType == 3;

	            return textChild && (childrenCount == 1 || (childrenCount == 2 && dom.insignificant(root.lastChild)));
	        }

	        function runCustom() {
	            if (kendo.isFunction(options.custom)) {
	                result = options.custom(result) || result;
	            }
	        }

	        if (textOnly(root)) {
	            result = dom.encode(text(root.firstChild).replace(/[\r\n\v\f\t ]+/, ' '), options);
	            runCustom();

	            return result;
	        }

	        children(root);
	        result = result.join('');
	        runCustom();

	        // if serialized dom contains only whitespace elements, consider it empty (required field validation)
	        if (result.replace(brRe, "").replace(emptyPRe, "") === "") {
	            return "";
	        }

	        return result;
	    }

	};

	extend(Editor, {
	    Serializer: Serializer
	});

	})(window.kendo.jQuery);

	}, __webpack_require__(3));





/***/ }),

/***/ 1022:
/***/ (function(module, exports) {

	module.exports = require("./dom");

/***/ })

/******/ });