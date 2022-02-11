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

	module.exports = __webpack_require__(1264);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1264:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1057)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	var __meta__ = {// jshint ignore:line
	    id: "expansionpanel",
	    name: "ExpansionPanel",
	    category: "web",
	    description: "The ExpansionPanel provides an expandable details-summary view",
	    depends: ["core"]
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,
	        ui = kendo.ui,
	        keys = kendo.keys,
	        extend = $.extend,
	        NS = ".kendoExpansionPanel",
	        EXPAND = "expand",
	        COLLAPSE = "collapse",
	        COMPLETE = "complete",
	        STATEDISABLED = "k-state-disabled",
	        ARIA_DISABLED = "aria-disabled",
	        ARIA_EXPANDED = "aria-expanded",
	        ARIA_HIDDEN = "aria-hidden",
	        EXPANDED = "k-expanded",
	        EXPANDER_CONTENT = "k-expander-content",
	        EXPANDER_CONTENT_WRAPPER = "k-expander-content-wrapper",
	        INDICATOR = ".k-expander-indicator",
	        FOCUSED = "k-state-focus",
	        CLICK = "click",
	        KEYDOWN = "keydown",
	        HEIGHT = "height",
	        proxy = $.proxy,

	        headerTemplate = '<div #if(!useBareTemplate){# class="k-expander-header" #}#  data-#=ns#expander-header role="button" tabindex="0" aria-controls="#: elementId #">'+
	                            '#if(!useBareTemplate){#' +
	                                '<div class="k-expander-title">#:title#</div>'+
	                            '#} else {#' +
	                                '#=title#' +
	                            '#}#' +
	                            '<span class="k-expander-spacer"></span>'+
	                            '#if(!useBareTemplate){#' +
	                                '<div class="k-expander-sub-title">#:subTitle#</div>'+
	                            '#}#' +
	                            '<span class="k-expander-indicator #:iconClass#"></span>'+
	                        '</div>';

	    var ExpansionPanel = Widget.extend({
	        init: function (element, options) {
	            var that = this;
	            var headerAttribute = kendo.attr("expander-header");

	            Widget.fn.init.call(that, element, options);
	            options = $.extend(true, {}, options);

	            that._wrapper();
	            that._animations(options);

	            that.element.attr(ARIA_HIDDEN, !options.expanded);

	            if (!that.options.useBareTemplate) {
	                that.element.addClass(EXPANDER_CONTENT);
	            }

	            that.wrapper
	                .on(CLICK + NS, '[' + headerAttribute + ']', proxy(that._click, that))
	                .on("focusin" + NS, proxy(that._focus, that))
	                .on("focusout" + NS, proxy(that._blur, that))
	                .on(KEYDOWN + NS, proxy(that._keydown, that));

	            that.toggle(that.options.expanded, false);

	            kendo.notify(that);
	        },

	        events: [
	            EXPAND,
	            COLLAPSE,
	            COMPLETE
	        ],

	        options: {
	            name: 'ExpansionPanel',
	            disabled: false,
	            expanded: false,
	            animation: {
	                expand: {
	                    effects: "expand:vertical",
	                    duration: 200
	                },
	                collapse: { // if collapse animation effects are defined, they will be used instead of expand.reverse
	                    duration: 200
	                }
	            },
	            height: null,
	            toggleable: true,
	            expandIconClass: "k-icon k-i-arrow-chevron-down",
	            collapseIconClass: "k-icon k-i-arrow-chevron-up",
	            title: '',
	            subTitle: '',
	            headerClass: null,
	            useBareTemplate: false
	        },

	        _wrapper: function () {
	            var that = this;
	            var element = that.element;
	            var DOMElement = element[0];
	            var wrapper;
	            var header;
	            var elementId = element.attr("id");

	            if(!elementId) {
	                elementId = kendo.guid();
	                element.attr("id", elementId);
	            }

	            wrapper = element.wrap("<div class='k-widget k-expander" + (that.options.expanded ? " " + EXPANDED : "") + "'></div>").parent();
	            header = kendo.template(headerTemplate)({
	                title: that.options.title,
	                subTitle: that.options.subTitle,
	                iconClass: that.options.expanded ? that.options.expandIconClass : that.options.collapseIconClass,
	                useBareTemplate: that.options.useBareTemplate,
	                ns: kendo.ns,
	                elementId: elementId
	            });
	            that.header = $(header);
	            wrapper.prepend(that.header);
	            that._indicator = wrapper.find(INDICATOR);
	            wrapper[0].style.cssText = DOMElement.style.cssText;
	            DOMElement.style.width = "100%";

	            that.wrapper = wrapper.addClass(that.options.disabled ? STATEDISABLED : '');
	            that.contentWrapper = that.element.wrap('<div></div>').parent().addClass(EXPANDER_CONTENT_WRAPPER);

	            that.header.attr(ARIA_DISABLED, that.options.disabled)
	                        .attr(ARIA_EXPANDED, that.options.expanded);

	            if (!that.options.useBareTemplate) {
	                wrapper.addClass(DOMElement.className);
	            }

	            if (that.options.height) {
	                that.wrapper.css(HEIGHT, that.options.height);
	            }

	            if (that.options.headerClass) {
	                that.header.addClass(that.options.headerClass);
	            }
	        },

	        _animations: function(options) {
	            if (options && ("animation" in options) && !options.animation) {
	                options.animation = { expand: { effects: {} }, collapse: { hide: true, effects: {} } };
	            }
	        },

	        _click: function (e) {
	            var that = this;
	            var expanded = that._indicator.hasClass(that.options.collapseIconClass);
	            var element = that.element;

	            e.stopPropagation();

	            if (!that.options.toggleable) {
	                e.preventDefault();
	                return;
	            }

	            if (!that.trigger( expanded ? COLLAPSE : EXPAND, { item: element[0] })) {
	                that.toggle();
	            }
	        },

	        toggle: function(expand, animate) {
	            var that = this,
	                animationSettings = that.options.animation,
	                animation = animationSettings.expand,
	                hasCollapseAnimation = animationSettings.collapse && "effects" in animationSettings.collapse,
	                collapse = extend({}, animationSettings.expand, animationSettings.collapse),
	                element = that.element,
	                wrapper = that.wrapper;

	            if (expand !== undefined) {
	                if (animate === false) {
	                    collapse = null;
	                }
	            } else {
	                expand = !that._indicator.hasClass(that.options.collapseIconClass);
	            }

	            if (!hasCollapseAnimation) {
	                collapse = extend(collapse, {reverse: true});
	            }

	            if (!expand) {
	                animation = extend(collapse, { hide: true });

	                animation.complete = proxy(that._completeHandler, that);
	            } else {
	                animation = extend( { complete:  proxy(that._completeHandler, that) }, animation );
	            }

	            if (expand) {
	                that._indicator.removeClass(this.options.expandIconClass);
	                that._indicator.addClass(this.options.collapseIconClass);
	                wrapper.addClass(EXPANDED);
	            } else {
	                that._indicator.removeClass(this.options.collapseIconClass);
	                that._indicator.addClass(this.options.expandIconClass);
	                wrapper.removeClass(EXPANDED);
	            }

	            element.attr(ARIA_HIDDEN, !expand);
	            that.header.attr(ARIA_EXPANDED, expand);

	            that.contentWrapper
	            .kendoStop(true, true)
	            .kendoAnimate(animation);
	        },

	        _completeHandler: function () {
	            this.trigger(COMPLETE);
	        },

	        _keydown: function(e) {
	            var that = this,
	                key = e.keyCode;

	            if ((key == keys.ENTER || key == keys.SPACEBAR) && $(e.target).is("[data-expander-header]")) {
	                that._click(e);
	                e.preventDefault();
	            }
	        },

	        destroy: function() {
	            var that = this;

	            that.wrapper.off(NS);
	            Widget.fn.destroy.call(that);
	        },

	        enable: function(enabled) {
	            this.wrapper.toggleClass(STATEDISABLED, !enabled);
	            this.header.attr(ARIA_DISABLED, !enabled);
	        },

	        _blur: function () {
	            var that = this;

	            if (that.header) {
	                that.wrapper.removeClass(FOCUSED);
	            }
	        },

	        _focus: function () {
	            var that = this;

	            if (that.wrapper) {
	                that.wrapper.addClass(FOCUSED);
	            }
	        }
	    });
	    ui.plugin(ExpansionPanel);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });