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

	module.exports = __webpack_require__(1096);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1094:
/***/ (function(module, exports) {

	module.exports = require("./kendo.badge");

/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057), __webpack_require__(1094) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "buttongroup",
	    name: "ButtonGroup",
	    category: "web",
	    description: "The Kendo ButtonGroup widget is a linear set of grouped buttons.",
	    depends: [ "core", "badge" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo;
	    var ui = kendo.ui;
	    var Widget = ui.Widget;
	    var keys = kendo.keys;
	    var proxy = $.proxy;
	    var template = kendo.template;
	    var NS = ".kendoButtonGroup";
	    var KWIDGET = "k-widget";
	    var KBUTTONGROUP = "k-button-group";
	    var KBUTTON = "k-button";
	    var KBUTTONDEFAULTS = "k-button-md k-rounded-md k-button-solid k-button-solid-base";
	    var KICONBUTTON = "k-icon-button";
	    var SELECTED = "k-selected";
	    var DISABLED = "k-disabled";
	    var SELECT = "select";
	    var CLICK = "click";
	    var KEYDOWN = "keydown";
	    var FOCUS = "focus";
	    var FOCUSOUT = "focusout";
	    var MOUSEDOWN = "mousedown";
	    var isIE = kendo.support.browser.msie;
	    var templates = {
	        item: template('<span ' +
	                        '#= item.enabled === false ? \"disabled\" : "" # ' +
	                        '>' +
	                        '#= icon(iconClass) #' +
	                        '#= image(item) #' +
	                        '# if(!!text) { #' +
	                            '<span class="k-button-text"> #= text # </span>' +
	                        '# } #' +
	                        '</span>'),
	        image: template('<img alt="icon" src="#=data.imageUrl#" class="k-button-icon"/>'),
	        icon: template('<span class="k-button-icon #=data#"></span>'),
	        empty: template("")
	    };

	    function createBadge(badgeOptions, item) {
	        var badgeEelement;

	        if (badgeOptions === null || badgeOptions === undefined) {
	            return;
	        }

	        if (badgeOptions.constructor !== Object) {
	            badgeOptions = { text: badgeOptions };
	        }

	        if (badgeOptions.position === undefined || badgeOptions.position === "") {
	            badgeOptions.position = "edge";

	            if (badgeOptions.align === undefined || badgeOptions.align === "") {
	                badgeOptions.align = "top end";
	            }
	        }

	        badgeOptions._classNames = ["k-button-badge"];

	        item.addClass("k-badge-container");

	        badgeEelement = $('<span />').appendTo(item);
	        item.badge = new ui.Badge(badgeEelement, badgeOptions);
	    }

	    var ButtonGroup = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that.wrapper = that.element;

	            if (that.options.items) {
	                that._renderItems(that.options.items);
	            }

	            that.selectedIndices = [];

	            that.element
	                .addClass(KWIDGET + " " + KBUTTONGROUP)
	                .attr("role", "group")
	                .attr("tabindex", that.element.attr("tabindex") || "0")
	                .children().each(function () {
	                    var item = $(this);
	                    that._updateClasses.bind(that)(item);
	                });

	            that._enable = true;

	            if (!that.options.enable || !that.options.enabled) {
	                that._enable = false;
	                that.element
	                        .attr("aria-disabled", true)
	                        .addClass(DISABLED);

	                that.element.children().addClass(DISABLED);
	            }

	            that.select(that.options.index);

	            that._attachEvents();
	        },

	        events: [
	            SELECT
	        ],

	        options: {
	            name: "ButtonGroup",
	            selection: "single",
	            index: -1,
	            enable: true,
	            enabled: true
	        },

	        current: function() {
	            return this.element.find("." + SELECTED);
	        },

	        _attachEvents: function() {
	            var that = this;

	            that.element
	                .on(CLICK + NS, "." + KBUTTON, proxy(that._click, that))
	                .on(FOCUS + NS, proxy(that._focus, that))
	                .on(FOCUSOUT + NS, proxy(that._focusout, that))
	                .on(KEYDOWN + NS, proxy(that._keyDown, that))
	                .on(MOUSEDOWN + NS, proxy(that._mouseDown, that));
	        },

	        _renderItems: function (items) {
	            var that = this;

	            items.forEach(function (item) {
	                var renderedItem = $(templates.item({
	                    image: item.imageUrl ? templates.image : templates.empty,
	                    icon: !item.imageUrl && (item.iconClass || item.icon) ? templates.icon : templates.empty,
	                    iconClass: item.iconClass || "k-icon k-i-" + item.icon,
	                    item: item,
	                    text: item.text ? item.encoded === false ? item.text : kendo.htmlEncode(item.text) : ""
	                }));

	                if (item.attributes) {
	                    renderedItem.attr(item.attributes);
	                }

	                if (item.selected) {
	                    renderedItem.addClass(SELECTED);
	                }

	                if ((item.iconClass || item.icon || item.imageUrl) && !item.text) {
	                    renderedItem.addClass(KICONBUTTON);
	                }

	                if (item.badge) {
	                    createBadge(item.badge, renderedItem);
	                }

	                renderedItem.appendTo(that.element);
	            });
	        },

	        _mouseDown: function (e) {
	            var x = e.clientX,
	                y = e.clientY,
	                elementMouseIsOver = document.elementFromPoint(x, y);
	            // Prevent programmatic focusing when clicking enabled button
	            if (elementMouseIsOver !== this.element[0]) {
	                this.preventFocus = true;
	                this.preventFocusOut = true;
	            }
	            // Manually trigger focus in IE
	            if(isIE) {
	                this._focus();
	            }
	        },

	        _focus: function () {
	            var element = $(this.element);

	            element.removeAttr("tabindex");
	            element.find("[role='button']").attr("tabindex", "0");

	            if (this.preventFocus) {
	                this.preventFocus = false;
	                return;
	            }

	            if (element.find("." + SELECTED).length) {
	                element.find("." + SELECTED).first().trigger("focus");
	            } else {
	                element.children().first().trigger("focus");
	            }
	        },

	        _focusout: function() {
	            var that = this;
	            var wrapper = that.wrapper;

	            if(this.preventFocusOut) {
	                this.preventFocusOut = false;
	                return;
	            }

	            setTimeout(function() {
	                if(!wrapper[0].contains(document.activeElement)) {
	                    wrapper.attr("tabindex", "0");
	                    wrapper.find("[role='button']").removeAttr("tabindex");
	                }
	            });
	        },

	        _keyDown: function (e) {
	            var that = this;
	            var buttonGroup = $(that.element);
	            var focusableItems = buttonGroup.find("." + KBUTTON);
	            var focusedElement = buttonGroup.find(":focus");
	            var currentIndex = focusableItems.index(focusedElement);
	            var isRtl =  kendo.support.isRtl(that.element);
	            var itemToFocus;

	            if ((e.keyCode === keys.LEFT && !isRtl) || (e.keyCode === keys.RIGHT && isRtl)) {
	                itemToFocus = currentIndex === 0 ? focusableItems.eq(focusableItems.length - 1) : $(focusableItems[currentIndex - 1]);
	                itemToFocus.trigger("focus");
	                e.preventDefault();
	            } else if ((e.keyCode === keys.LEFT && isRtl) || (e.keyCode === keys.RIGHT && !isRtl)) {
	                itemToFocus = currentIndex + 1 === focusableItems.length ? focusableItems.eq(0) : $(focusableItems[currentIndex + 1]);
	                itemToFocus.trigger("focus");
	                e.preventDefault();
	            } else if (e.keyCode === keys.ENTER || e.keyCode === keys.SPACEBAR) {
	                that._select(focusedElement);
	                e.preventDefault();
	            }
	        },

	        select: function (button) {
	            var that = this,
	                ariaPressed,
	                index = -1;

	            if (button === undefined || button === -1) {
	                return;
	            }

	            if (typeof button === "number") {
	                index = button;
	                button = that.element.children().eq(button);
	            } else if (button.nodeType) {
	                button = $(button);
	                index = button.index();
	            }

	            if (that.options.selection === "multiple") {
	                ariaPressed = button.attr("aria-pressed") === "true";
	                button
	                    .attr("aria-pressed", !ariaPressed)
	                    .toggleClass(SELECTED);

	                if (that.selectedIndices.indexOf(index) === -1) {
	                    that.selectedIndices.push(index);
	                } else {
	                    that.selectedIndices.splice(that.selectedIndices.indexOf(index), 1);
	                }

	            } else {
	                that.selectedIndices = [];
	                that.current()
	                        .attr("aria-pressed", false)
	                        .removeClass(SELECTED);

	                button
	                    .attr("aria-pressed", true)
	                    .addClass(SELECTED);

	                that.selectedIndices.push(index);
	            }
	        },

	        badge: function(item, value) {
	            var buttongroup = this.element;
	            var button = !isNaN(item) ? buttongroup.children().eq(item) : buttongroup.find(item);
	            var validValue = value || value === 0;
	            var badge;

	            if (!button.length) {
	                return;
	            }

	            badge = button.children(".k-badge").eq(0).data('kendoBadge');
	            if (!badge && validValue) {
	                createBadge({ text: kendo.htmlEncode(value)}, button);
	                return kendo.htmlEncode(value);
	            }

	            if (validValue) {
	                badge.text(kendo.htmlEncode(value));
	            } else if (value === false) {
	                badge.element.empty().remove();
	                badge.destroy();
	                return;
	            }

	            return badge ? badge.text() : null;
	        },

	        enable: function(enable) {
	            if(typeof enable == "undefined") {
	                enable = true;
	            }

	            this.element
	                    .attr("aria-disabled", !enable)
	                    .toggleClass(DISABLED, !enable);

	            this.element.children().toggleClass(DISABLED, !enable);

	            this._enable = this.options.enable = enable;
	        },

	        destroy: function() {
	            var that = this;

	            that.element.off(NS);
	            that.element.find('.k-badge').each(function(){
	                $(this).data('kendoBadge').destroy();
	            });

	            Widget.fn.destroy.call(that);
	        },

	        _updateClasses: function(button) {
	            var icon = kendo.attrValue(button, "icon");
	            var badge = kendo.attrValue(button, "badge");
	            var image = button.find("img").addClass("k-image");
	            var isEmpty = true;

	            button
	                .attr("aria-pressed", false)
	                .attr("role", "button")
	                .addClass(KBUTTON)
	                .addClass(KBUTTONDEFAULTS);

	            if (button.is("[disabled]") || button.hasClass(DISABLED)) {
	                button
	                    .addClass(DISABLED)
	                    .attr("aria-disabled", true)
	                    .removeAttr("disabled");
	            }

	            if (button.is("." + SELECTED)) {
	                button.removeClass(SELECTED);
	                if ((!button.hasClass(DISABLED) && this.options.selection === "single") ||
	                    this.options.selection === "multiple") {
	                    this.select(button[0]);
	                }
	            }

	            if (!image[0] && icon) {
	                button.prepend($(templates.icon("k-icon k-i-" + icon)));
	            }

	            button
	                .contents()
	                .filter(function() {
	                    return !$(this).hasClass("k-icon") && !$(this).hasClass("k-image");
	                }).each(function(){
	                    if (this.nodeType == 1 || this.nodeType == 3 && kendo.trim(this.nodeValue).length > 0) {
	                        isEmpty = false;
	                    }
	                });

	            if ((image[0] || icon) && isEmpty) {
	                button.addClass(KICONBUTTON);
	            }

	            if (badge || badge === 0) {
	                createBadge(badge, button);
	            }
	        },

	        _click: function(e) {
	            var target = $(e.target).closest("." + KBUTTON);

	            if (e.isDefaultPrevented()) {
	                return;
	            }

	            e.target.focus();

	            this._select(target);
	        },

	        _select: function (target) {
	            var button = target;

	            if (!this._enable || button.is("." + DISABLED)) {
	                return;
	            }

	            this.select(target[0]);
	            this.trigger(SELECT, { indices: this.selectedIndices});
	        }
	    });

	    ui.plugin(ButtonGroup);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });