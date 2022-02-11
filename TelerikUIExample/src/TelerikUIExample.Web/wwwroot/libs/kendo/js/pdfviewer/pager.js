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

	__webpack_require__(1638);
	module.exports = __webpack_require__(1638);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1638:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var NS = ".kendoPDFViewer",
	        Widget = kendo.ui.Widget,
	        CHANGE = "change",
	        KEYDOWN = "keydown",
	        CLICK = kendo.support.click,
	        SHRINKWIDTH = 480,
	        kendoAttr = kendo.attr,
	        proxy = $.proxy,
	        extend = $.extend,
	        DOT = ".",
	        ARIA_DISABLED = "aria-disabled";

	    var pagerStyles = {
	        wrapperClass: "k-pager-wrap k-button-group",
	        iconFirst: "k-i-arrow-end-left",
	        iconLast: "k-i-arrow-end-right",
	        iconPrev: "k-i-arrow-60-left",
	        iconNext: "k-i-arrow-60-right",
	        first: "k-pager-first",
	        last: "k-pager-last",
	        nav: "k-pager-nav",
	        disabled: "k-disabled"
	    };

	    var Pager = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that.linkTemplate = kendo.template(that.options.linkTemplate);

	            that.element.addClass(pagerStyles.wrapperClass);

	            that._renderLinks();
	            that._toggleDisabledClass();
	            that._attachEvents();
	        },

	        options: {
	            linkTemplate: '<a href="\\#" aria-label="#=text#" title="#=text#" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button k-pager-nav #= wrapClass #" data-page="#=pageIdx#"><span class="k-button-icon k-icon #= iconClass #"></span></a>',
	            previousNext: true,
	            input: true,
	            page: 1,
	            total: 1,
	            messages: {}
	        },

	        events: [
	            CHANGE
	        ],

	        _pagerLink: function (iconClass, text, pageIdx, wrapClass) {
	            return this.linkTemplate({
	                iconClass: iconClass,
	                text: text,
	                wrapClass: wrapClass || "",
	                pageIdx: pageIdx
	            });
	        },

	        _renderLinks: function ()
	        {
	            var that = this,
	                options = that.options;

	            if (options.previousNext) {
	                that.firstLink = $(that._pagerLink(pagerStyles.iconFirst, options.messages.first, 1, pagerStyles.first));
	                that.prevLink = $(that._pagerLink(pagerStyles.iconPrev, options.messages.previous, options.page - 1));
	                that.nextLink = $(that._pagerLink(pagerStyles.iconNext, options.messages.next, options.page + 1));
	                that.lastLink = $(that._pagerLink(pagerStyles.iconLast, options.messages.last, options.total, pagerStyles.last));
	            }

	            that.element.append(that.firstLink);
	            that.element.append(that.prevLink);

	            if (options.input) {
	                that._renderInput();
	            }

	            that.element.append(that.nextLink);
	            that.element.append(that.lastLink);

	        },

	        _toggleDisabledClass: function () {
	            var that = this,
	                options = that.options,
	                total = !options.total;

	            if (that.nextLink && that.prevLink) {
	                that.prevLink.toggleClass(pagerStyles.disabled, total || options.page === 1);
	                that.nextLink.toggleClass(pagerStyles.disabled, total || options.page === options.total);
	                that.lastLink.toggleClass(pagerStyles.disabled, total || options.page === options.total);
	                that.firstLink.toggleClass(pagerStyles.disabled,total || options.page === 1);

	                that.prevLink.attr(ARIA_DISABLED, total || options.page === 1);
	                that.firstLink.attr(ARIA_DISABLED, total || options.page === 1);

	                that.nextLink.attr(ARIA_DISABLED, options.page === options.total);
	                that.lastLink.attr(ARIA_DISABLED, options.page === options.total);
	            }

	            if (that.input) {
	                that.input.toggleClass(pagerStyles.disabled, options.total <= 1);
	                that.input.attr(ARIA_DISABLED, options.total <= 1);
	            }
	        },

	        _attachEvents: function () {
	            var that = this;

	            that.element.on(CLICK + NS, DOT + pagerStyles.nav, proxy(that._click, that));
	            that.element.on(KEYDOWN + NS, DOT + pagerStyles.nav, function (e) {
	                if (e.keyCode === kendo.keys.ENTER)
	                {
	                    that._click(e);
	                    e.preventDefault();
	                }
	            });

	            if (that.input) {
	                that.input.on(KEYDOWN + NS, proxy(that._keydown, that));
	            }
	        },

	        _click: function (e) {
	            var target = $(e.currentTarget);
	            var page = parseInt(target.attr(kendoAttr("page")), 10);

	            if (e.isDefaultPrevented()) {
	                return;
	            }

	            this._change(page);
	        },

	        _keydown: function (e) {
	            var key = e.keyCode,
	                keys = kendo.keys,
	                input = $(e.target),
	                page = parseInt(input.val(), 10),
	                upDown = key === keys.UP || key === keys.DOWN,
	                allowedKeys = key === keys.RIGHT || key === keys.LEFT ||
	                                key === keys.BACKSPACE || key === keys.DELETE,
	                direction = upDown && key === keys.UP ? 1 : -1;

	            if (upDown) {
	                page += direction;
	            }

	            if (key === keys.ENTER || upDown) {
	                if (isNaN(page) || page < 1 || page > this.options.total) {
	                    page = this.options.page;
	                    input.val(page);
	                    return;
	                }
	                this._change(page);
	                e.preventDefault();
	            } else if (!e.key.match(/^\d+$/) && !allowedKeys) {
	                e.preventDefault();
	            }

	        },

	        _change: function (page) {
	            var that = this;

	            if (page >= 1 && page <= that.options.total) {
	                that.options.page = page;
	                if (that.input) {
	                    that.input.val(page);
	                }
	                that.prevLink.attr(kendoAttr("page"), page - 1);
	                that.nextLink.attr(kendoAttr("page"), page + 1);
	                that._toggleDisabledClass();
	            }

	            that.trigger(CHANGE, { page: page});
	        },

	        setOptions: function (options) {
	            var that = this,
	                prevTotal = that.options.total;

	            options = $.extend(that.options, options);

	            Widget.fn.setOptions.call(that, options);

	            if (options.input) {
	                if (prevTotal != options.total) {
	                    that._renderInput();
	                    that.input
	                            .on(KEYDOWN + NS, proxy(that._keydown, that));
	                }
	                else {
	                    that.input.val(options.total > 0 ? options.page : 1);
	                }
	            }

	            if (options.total > 1) {
	                that.prevLink.attr(kendoAttr("page"), options.page - 1);
	                that.nextLink.attr(kendoAttr("page"), options.page + 1);
	                that.lastLink.attr(kendoAttr("page"), options.total);
	            }

	            that._toggleDisabledClass();
	        },

	        _renderInput: function () {
	            var that = this,
	                totalMessage,
	                options = that.options,
	                shouldShrink = that.element.parent().width() <= SHRINKWIDTH,
	                inputTemplate,
	                pagerInputWrap = that.element.find(".k-pager-input");

	            if (that.input) {
	                that.input.off(NS);
	            }

	            totalMessage = options.total > 0 ? kendo.format(options.messages.of, options.total) : "";

	            if (!shouldShrink) {
	                totalMessage += options.total > 1 ? options.messages.pages : options.messages.page;
	            }

	            inputTemplate = '<span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" aria-label="' + options.page + totalMessage  +  '"></span>' + totalMessage;

	            if (pagerInputWrap.length) {
	                pagerInputWrap.html(inputTemplate);
	            } else {
	                that.element.append('<span class="k-pager-input k-label">' + inputTemplate +'</span>');
	            }

	            that.input = that.element
	                                .find("input")
	                                .val(options.total > 0 ? options.page : 1);
	        },

	        destroy: function() {
	            this.element.off(NS);

	            if (this.input) {
	                this.input.off(NS);
	            }
	            Widget.fn.destroy.call(this);
	        }
	    });


	    extend(kendo.pdfviewer, {
	        Pager: Pager
	    });
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });