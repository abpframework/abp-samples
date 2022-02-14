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

	__webpack_require__(21);
	module.exports = __webpack_require__(21);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {

	    var kendo = window.kendo;
	    var Widget = kendo.ui.Widget;
	    var extend = $.extend;
	    var proxy = $.proxy;
	    var DOT = ".";
	    var NS = ".kendoChat";

	    var DATA_K_BUTTON_NAME = "kButtonName";
	    var SCROLL_LEFT_NAME = "chatToolbarScrollLeft";
	    var SCROLL_RIGHT_NAME = "chatToolbarScrollRight";
	    var VISIBLE = ":visible";
	    var DEFAULT_ANIMATION = {
	        effects: "expand:vertical",
	        duration: 200
	    };
	    var NO_ANIMATION = {
	        expand: {
	            show: true
	        },
	        collapse: {
	            hide: true
	        }
	    };

	    var toolbarStyles = {
	        button: "k-button",
	        buttonDefaults: "k-button-md k-rounded-md k-button-solid k-button-solid-base",
	        buttonList: "k-button-list",
	        scrollButton: "k-scroll-button",
	        scrollButtonLeft: "k-scroll-button-left",
	        scrollButtonRight: "k-scroll-button-right",
	        scrollButtonLeftIcon: "k-icon k-i-arrow-chevron-left",
	        scrollButtonRightIcon: "k-icon k-i-arrow-chevron-right",
	        iconButton: "k-icon-button"
	    };

	    var ChatToolBar = Widget.extend({
	        init: function(element, options) {
	            options = extend({}, options, { name: "ChatToolbar" });
	            var toolbarOptions = options.toolbar;
	            var buttonsDefined = toolbarOptions.buttons && toolbarOptions.buttons.length;

	            Widget.fn.init.call(this, element, options);

	            if (buttonsDefined) {
	                this._createButtonList();
	            }

	            if (buttonsDefined && toolbarOptions.scrollable &&
	                    this.buttonsWidth() > this.element.width()) {
	                this._initScrolling();
	            }

	            this._setupAnimation();

	            if(buttonsDefined && toolbarOptions.toggleable) {
	                this.toggle(true);
	            }

	            this.element.on("click" + NS, proxy(this._onClick, this));
	        },

	        events: [
	            "click"
	        ],

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            this.element.off(NS);
	            this.element.empty();
	        },

	        _createButtonList: function () {
	            var that = this;
	            var styles = ChatToolBar.styles;
	            var buttons = that.options.toolbar.buttons;
	            var buttonList = $("<div class='" + styles.buttonList + "'></div>");

	            for(var i = 0; i < buttons.length; i++) {
	                var button = that._createButton(buttons[i]);
	                buttonList.append(button);
	            }

	            buttonList.appendTo(this.element);

	            this.buttonList = buttonList;
	        },

	        _createButton: function (btnOptions) {
	            var styles = ChatToolBar.styles;
	            var buttonElm = $("<button>");

	            if (typeof btnOptions === "string") {
	                btnOptions = {
	                    name: btnOptions
	                };
	            }

	            buttonElm
	                .attr(btnOptions.attr || {})
	                .attr("title", btnOptions.text || btnOptions.name)
	                .attr("aria-label", btnOptions.text || btnOptions.name)
	                .attr("type", "button")
	                .addClass(btnOptions.name)
	                .data(DATA_K_BUTTON_NAME, btnOptions.name)
	                .addClass(styles.button)
	                .addClass(styles.buttonDefaults);

	            if (btnOptions.iconClass) {
	                buttonElm.addClass(styles.iconButton);
	                buttonElm.prepend("<span class='k-button-icon " + btnOptions.iconClass + "'></span>");
	            }

	            return buttonElm;
	        },

	        _onClick: function (ev) {
	            var styles = ChatToolBar.styles;
	            var target = $(ev.target).closest(DOT + styles.button);

	            if (target.is(DOT + styles.scrollButton) && !this._scrolling) {
	                this._scroll(target.data(DATA_K_BUTTON_NAME));
	            }

	            if(target.data(DATA_K_BUTTON_NAME)) {
	                this.trigger("click", {
	                    button: target[0],
	                    name: target.data(DATA_K_BUTTON_NAME),
	                    originalEvent: ev
	                });
	            }
	        },

	        _initScrolling: function () {
	            var styles = ChatToolBar.styles;

	            this.scrollButtonLeft = this._createButton({
	                name: SCROLL_LEFT_NAME,
	                iconClass: styles.scrollButtonLeftIcon,
	                attr: {
	                    "class": styles.scrollButton + " " + styles.scrollButtonLeft
	                }
	            });

	            this.scrollButtonRight = this._createButton({
	                name: SCROLL_RIGHT_NAME,
	                iconClass: styles.scrollButtonRightIcon,
	                attr: {
	                    "class": styles.scrollButton + " " + styles.scrollButtonRight
	                }
	            });

	            this.element.prepend(this.scrollButtonLeft);
	            this.element.append(this.scrollButtonRight);
	            this._refreshScrollButtons();

	            this.element.on("keydown" + NS, proxy(this._refreshScrollButtons, this));
	        },

	        _scroll: function (commandName) {
	            var that = this;
	            var buttonWidth = that.buttonWidth();
	            var maxScrollSize = this.maxScrollSize();
	            var scrollAmmount = commandName === SCROLL_LEFT_NAME ? buttonWidth * -1 : buttonWidth;
	            var currentScroll = this.currentScrollLeft();
	            var scrollValue = currentScroll + scrollAmmount;
	            scrollValue = Math.min(Math.max(scrollValue, 0), maxScrollSize);

	            if(commandName !== SCROLL_LEFT_NAME && commandName !== SCROLL_RIGHT_NAME) {
	                return;
	            }

	            kendo.scrollLeft(that.buttonList, scrollValue);
	            that._refreshScrollButtons(scrollValue);
	        },

	        _refreshScrollButtons: function (value) {
	            var maxScrollSize = this.maxScrollSize();
	            var currentScrollLeft = value === undefined || isNaN(parseInt(value, 10)) ? this.currentScrollLeft() : value;

	            if(!this.scrollButtonLeft && !this.scrollButtonRight) {
	                return;
	            }

	            this.scrollButtonLeft.toggle(currentScrollLeft !== 0);
	            this.scrollButtonRight.toggle(currentScrollLeft !== maxScrollSize);
	        },

	        _setupAnimation: function () {
	            var animation = this.options.toolbar.animation;
	            var defaultExpandAnimation = extend({}, DEFAULT_ANIMATION);
	            var defaultCollapseAnimation = extend({
	                reverse: true,
	                hide: true
	            }, DEFAULT_ANIMATION);

	            if (animation === false){
	                animation = extend(true, {}, NO_ANIMATION);
	            }  else {
	                animation = extend(true, {
	                    expand: defaultExpandAnimation,
	                    collapse: defaultCollapseAnimation
	                }, animation);
	            }

	            this.options.toolbar.animation = animation;
	        },

	        _animationComplete: function () {
	            this._refreshScrollButtons();
	        },

	        currentScrollLeft: function () {
	            return Math.round(kendo.scrollLeft(this.buttonList));
	        },

	        maxScrollSize: function () {
	            return Math.round(this.buttonList[0].scrollWidth - this.buttonList[0].clientWidth);
	        },

	        buttons: function () {
	            var styles = ChatToolBar.styles;
	            return this.buttonList ? this.buttonList.children(DOT + styles.button) : null;
	        },

	        buttonWidth: function () {
	            return Math.round(this.buttons().last().outerWidth(true));
	        },

	        buttonsWidth: function () {
	            var width = 0;

	            if(this.buttons()) {
	                width = this.buttonWidth() * this.buttons().length;
	            }

	            return width;
	        },

	        toggle: function (skipAnimation) {
	            var animation = this.options.toolbar.animation;

	            if (skipAnimation) {
	                animation = extend(true, {}, NO_ANIMATION);
	            }

	            animation.expand.complete = proxy(this._animationComplete, this);
	            animation.collapse.complete = proxy(this._animationComplete, this);

	            if(this.element.is(VISIBLE)) {
	                this.element.kendoStop().kendoAnimate(animation.collapse);
	            } else {
	                this.element.kendoStop().kendoAnimate(animation.expand);
	            }

	        }
	    });

	    extend(true, ChatToolBar, { styles: toolbarStyles });
	    extend(kendo.chat, {
	        ChatToolBar: ChatToolBar
	    });
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });