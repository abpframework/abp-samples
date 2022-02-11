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

	module.exports = __webpack_require__(1206);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "dom",
	    name: "Virtual DOM",
	    category: "framework",
	    depends: [ "core" ],
	    advanced: true
	};

	(function(kendo) {
	    function Node() {
	        this.node = null;
	    }

	    Node.prototype = {
	        remove: function() {
	            if (this.node.parentNode) {
	                this.node.parentNode.removeChild(this.node);
	            }
	            this.attr = {};
	        },
	        attr: {},
	        text: function() {
	            return "";
	        }
	    };

	    function NullNode() {
	    }

	    NullNode.prototype = {
	        nodeName: "#null",
	        attr: { style: {} },
	        children: [],
	        remove: function() {
	        }
	    };

	    var NULL_NODE = new NullNode();

	    function Element(nodeName, attr, children) {
	        this.nodeName = nodeName;

	        this.attr = attr || {};

	        this.children = children || [];
	    }

	    Element.prototype = new Node();

	    Element.prototype.appendTo = function(parent) {
	        var node = document.createElement(this.nodeName);

	        var children = this.children;

	        for (var index = 0; index < children.length; index++) {
	            children[index].render(node, NULL_NODE);
	        }

	        parent.appendChild(node);

	        return node;
	    };

	    Element.prototype.render = function(parent, cached) {
	        var node;

	        if (cached.nodeName !== this.nodeName) {
	            cached.remove();

	            node = this.appendTo(parent);
	        } else {
	            node = cached.node;

	            var index;

	            var children = this.children;

	            var length = children.length;

	            var cachedChildren = cached.children;

	            var cachedLength = cachedChildren.length;

	            if (Math.abs(cachedLength - length) > 2) {
	                this.render({
	                    appendChild: function(node) {
	                        parent.replaceChild(node, cached.node);
	                    }
	                }, NULL_NODE);

	                return;
	            }

	            for (index = 0; index < length; index++) {
	                children[index].render(node, cachedChildren[index] || NULL_NODE);
	            }

	            for (index = length; index < cachedLength; index++) {
	                cachedChildren[index].remove();
	            }
	        }

	        this.node = node;

	        this.syncAttributes(cached.attr);

	        this.removeAttributes(cached.attr);
	    };

	    Element.prototype.syncAttributes = function(cachedAttr) {
	        var attr = this.attr;

	        for (var name in attr) {
	            var value = attr[name];

	            var cachedValue = cachedAttr[name];

	            if (name === "style") {
	                this.setStyle(value, cachedValue);
	            } else if (value !== cachedValue) {
	                this.setAttribute(name, value, cachedValue);
	            }
	        }
	    };

	    Element.prototype.setStyle = function(style, cachedValue) {
	        var node = this.node;
	        var key;

	        if (cachedValue) {
	            for (key in style) {
	                if (style[key] !== cachedValue[key]) {
	                    node.style[key] = style[key];
	                }
	            }
	        } else {
	            for (key in style) {
	                node.style[key] = style[key];
	            }
	        }
	    };

	    Element.prototype.removeStyle = function(cachedStyle) {
	        var style = this.attr.style || {};
	        var node = this.node;

	        for (var key in cachedStyle) {
	            if (style[key] === undefined) {
	                node.style[key] = "";
	            }
	        }
	    };

	    Element.prototype.removeAttributes = function(cachedAttr) {
	        var attr = this.attr;

	        for (var name in cachedAttr) {
	            if (name === "style") {
	                this.removeStyle(cachedAttr.style);
	            } else if (attr[name] === undefined) {
	                this.removeAttribute(name);
	            }
	        }
	    };

	    Element.prototype.removeAttribute = function(name) {
	        var node = this.node;

	        if (name === "style") {
	            node.style.cssText = "";
	        } else if (name === "className") {
	            node.className = "";
	        } else {
	            node.removeAttribute(name);
	        }
	    };

	    Element.prototype.setAttribute = function(name, value) {
	        var node = this.node;

	        if (node[name] !== undefined) {
	            node[name] = value;
	        } else {
	            node.setAttribute(name, value);
	        }
	    };

	    Element.prototype.text = function() {
	        var str = "";
	        for (var i = 0; i < this.children.length; ++i) {
	            str += this.children[i].text();
	        }
	        return str;
	    };

	    function TextNode(nodeValue) {
	        this.nodeValue = String(nodeValue);
	    }

	    TextNode.prototype = new Node();

	    TextNode.prototype.nodeName = "#text";

	    TextNode.prototype.render = function(parent, cached) {
	        var node;

	        if (cached.nodeName !== this.nodeName) {
	            cached.remove();

	            node = document.createTextNode(this.nodeValue);

	            parent.appendChild(node);
	        } else {
	            node = cached.node;

	            if (this.nodeValue !== cached.nodeValue) {
	                if (node.parentNode) {
	                    // sometimes in IE parentNode is null (reason unknown),
	                    // and IE throws an error when you try to set a
	                    // parentless' nodeValue, because why not.
	                    node.nodeValue = this.nodeValue;
	                }
	            }
	        }

	        this.node = node;
	    };

	    TextNode.prototype.text = function() {
	        return this.nodeValue;
	    };

	    function HtmlNode(html) {
	        this.html = html;
	    }

	    HtmlNode.prototype = {
	       nodeName: "#html",
	       attr: {},
	       remove: function() {
	           for (var index = 0; index < this.nodes.length; index++) {
	               var el = this.nodes[index];
	               if (el.parentNode) {
	                   el.parentNode.removeChild(el);
	               }
	           }
	       },
	       render: function(parent, cached) {
	           if (cached.nodeName !== this.nodeName || cached.html !== this.html) {
	               cached.remove();

	               var lastChild = parent.lastChild;

	               insertHtml(parent, this.html);

	               this.nodes = [];

	               for (var child = lastChild ? lastChild.nextSibling : parent.firstChild; child; child = child.nextSibling) {
	                   this.nodes.push(child);
	               }
	           } else {
	               this.nodes = cached.nodes.slice(0);
	           }
	       }
	    };

	    var HTML_CONTAINER = document.createElement("div");

	    function insertHtml(node, html) {
	        HTML_CONTAINER.innerHTML = html;

	        while (HTML_CONTAINER.firstChild) {
	            node.appendChild(HTML_CONTAINER.firstChild);
	        }
	    }

	    function html(value) {
	        return new HtmlNode(value);
	    }

	    function element(nodeName, attrs, children) {
	        return new Element(nodeName, attrs, children);
	    }

	    function text(value) {
	        return new TextNode(value);
	    }

	    function Tree(root) {
	       this.root = root;
	       this.children = [];
	    }

	    Tree.prototype = {
	        html: html,
	        element: element,
	        text: text,
	        render: function(children) {
	            var cachedChildren = this.children;

	            var index;

	            var length;

	            for (index = 0, length = children.length; index < length; index++) {
	                var cached = cachedChildren[index];
	                if (!cached) {
	                    cached = NULL_NODE;
	                } else if (!cached.node || !cached.node.parentNode) {
	                    cached.remove();
	                    cached = NULL_NODE;
	                }
	                children[index].render(this.root, cached);
	            }

	            for (index = length; index < cachedChildren.length; index++) {
	                cachedChildren[index].remove();
	            }

	            this.children = children;
	        }
	    };

	    kendo.dom = {
	        html: html,
	        text: text,
	        element: element,
	        Tree: Tree,
	        Node: Node
	    };
	})(window.kendo);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });