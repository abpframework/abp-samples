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

	__webpack_require__(1643);
	module.exports = __webpack_require__(1643);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1643:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var Class = kendo.Class,
	        extend = $.extend,
	        isArray = Array.isArray;

	    var SearchDOM = Class.extend({
	        init: function(options) {
	            var that = this;

	            that.options = extend({}, that.options, options);

	            that.processDom();
	        },

	        options: {
	            highlightClass: "k-search-highlight",
	            charClass: "k-text-char"
	        },

	        processDom: function () {
	            var that = this;

	            that.targets = isArray(that.options.target) ? that.options.target : [that.options.target];
	            that.textNodes = [];
	            that.charIndex = 0;
	            that.text = "";

	            that.targets.forEach(function (target) {
	                that.traverseToTextNode(target);
	            });

	            for (var i = 0; i < that.textNodes.length; i++) {
	                that.processTextNode(that.textNodes[i]);
	            }
	        },

	        traverseToTextNode: function (node) {
	            var that = this;

	            if(node.nodeType === 3) {
	                that.textNodes.push(node);
	            } else {
	                for (var i = 0; i < node.childNodes.length; i++) {
	                    that.traverseToTextNode(node.childNodes[i]);
	                }
	            }
	        },

	        processTextNode: function (node) {
	            var that = this;
	            var text = node.textContent;
	            var span;

	            that.text = that.text + text;

	            if(text.length > 0){
	                span = $(node).wrap("<span>").parent();
	                span.empty();
	                that.splitChars(span.get(0), text);
	                span.children().unwrap();
	            }
	        },

	        splitChars: function (span, text) {
	            var that = this;
	            var newHtml = "";

	            for (var i = 0; i < text.length; i++) {
	                newHtml = newHtml + "<span class='"+ that.options.charClass + "' " + kendo.attr("char-index") + "=" + that.charIndex + ">" + text[i] + "</span>";
	                that.charIndex++;
	            }

	            span.innerHTML = newHtml;
	        },

	        search: function (value, matchCase) {
	            var that = this;
	            var expression = new RegExp(value, !matchCase ? "gi" : "g");
	            var match;

	            that.matches = [];

	            that.resetMark();
	            that.resetHighlight();
	            that.resetMatchIndex();

	            if(value === "") {
	                return;
	            }

	            match = expression.exec(that.text);

	            while(match){
	                that.matches.push({
	                    startOffset: match.index,
	                    endOffset: match.index + match[0].length
	                });

	                match = expression.exec(that.text);
	            }

	            that.highlightAll();
	            that.mark();
	        },

	        highlightAll: function () {
	            var that = this;

	            that.matches.forEach(function (match, index) {
	                var start = match.startOffset;
	                var end = match.endOffset;

	                that.highlight(start, end, index + 1);
	            });
	        },

	        highlight: function (start, end, matchIndex) {
	            var that = this;

	            for (var i = start; i < end; i++) {
	                $(that.targets)
	                    .find("." + that.options.charClass + "[" + kendo.attr("char-index")  + "=" + i + "]")
	                    .addClass(that.options.highlightClass)
	                    .attr(kendo.attr("match-index"), matchIndex);
	            }
	        },

	        resetHighlight: function () {
	            var that = this;

	            $(that.targets)
	                .find("." + that.options.highlightClass)
	                .removeClass(that.options.highlightClass);
	        },

	        resetMatchIndex: function () {
	            var that = this;

	            $(that.targets)
	                .find("." + that.options.charClass + "[" + kendo.attr("match-index")  + "]")
	                .removeAttr(kendo.attr("match-index"));
	        },

	        mark: function () {
	            var that = this;

	            if(!that.currentIndex && that.currentIndex !== 0) {
	                that.currentIndex = 0;
	            } else if (that.currentIndex > that.matches.length) {
	                that.currentIndex = that.matches.length;
	            } else {
	                that.resetMark();
	            }

	            $(that.targets)
	                .find("." + that.options.charClass + "[" + kendo.attr("match-index")  + "=" + that.currentIndex + "]")
	                .wrapInner("<mark>");
	        },

	        resetMark: function () {
	            var that = this;
	            $(that.targets).find("mark").contents().unwrap();
	        },

	        nextMatch: function () {
	            var that = this;

	            that.currentIndex++;

	            if(that.currentIndex > that.matches.length) {
	                that.currentIndex = 1;
	            }

	            that.mark();
	        },

	        previousMatch: function () {
	            var that = this;

	            that.currentIndex--;

	            if(that.currentIndex < 1) {
	                that.currentIndex = that.matches.length;
	            }

	            that.mark();
	        },

	        getMarkedIndex: function () {
	            return this.matches.length ? this.currentIndex : 0;
	        },

	        getFirstMarked: function () {
	            return $(this.targets).find("mark").eq(0);
	        },

	        destroy: function () {
	            var that = this;

	            that.resetMark();
	            $(that.targets).children("span:not(." + that.options.charClass + ")").each(function(i, item){
	                $(item).text($(item).text());
	            });
	        }
	    });

	    extend(kendo.pdfviewer, {
	        SearchDOM: SearchDOM
	    });
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });