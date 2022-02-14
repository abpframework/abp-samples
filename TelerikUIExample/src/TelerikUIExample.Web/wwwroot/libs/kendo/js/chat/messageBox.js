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

	__webpack_require__(19);
	module.exports = __webpack_require__(19);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 19:
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
	    var keys = kendo.keys;
	    var SEND_ICON = '<svg version="1.1" ixmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve"><path d="M0,14.3c-0.1,0.6,0.3,0.8,0.8,0.6l14.8-6.5c0.5-0.2,0.5-0.6,0-0.8L0.8,1.1C0.3,0.9-0.1,1.1,0,1.7l0.7,4.2C0.8,6.5,1.4,7,1.9,7.1l8.8,0.8c0.6,0.1,0.6,0.1,0,0.2L1.9,8.9C1.4,9,0.8,9.5,0.7,10.1L0,14.3z"/></svg>';
	    var TOGGLE_ICON = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g>   <path d="M128,240c0-26.4-21.6-48-48-48s-48,21.6-48,48s21.6,48,48,48S128,266.4,128,240z"/>   <path d="M192,240c0,26.4,21.6,48,48,48c26.4,0,48-21.6,48-48s-21.6-48-48-48C213.6,192,192,213.6,192,240z"/>   <path d="M352,240c0,26.4,21.6,48,48,48c26.4,0,48-21.6,48-48s-21.6-48-48-48C373.6,192,352,213.6,352,240z"/></g></svg>';

	    var messageBoxStyles = {
	        input: "k-input-inner",
	        inputWrapper: "k-textbox k-input k-input-lg k-input-solid",
	        button: "k-button",
	        buttonFlat: "k-button-lg k-button-flat k-button-flat-base",
	        iconButton: "k-icon-button",
	        buttonIcon: "k-button-icon",
	        buttonSend: "k-button-send",
	        buttonToggle: "k-button-toggle",
	        iconAdd: "k-icon k-i-add",
	        hidden: "k-hidden",
	        inputSuffix: "k-input-suffix"
	    };

	    var ChatMessageBox = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);

	            this._wrapper();

	            this._attachEvents();

	            this._typing = false;
	        },

	        events: [
	        ],

	        options: {
	            messages: {
	                placeholder: "Type a message...",
	                toggleButton: "Toggle toolbar",
	                sendButton: "Send message"
	            }
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            if (this.input) {
	                this.input.off(NS);
	                this.input.remove();
	                this.input = null;
	            }

	            this.element.off(NS);
	            this.element.empty();
	        },

	        _wrapper: function() {
	            var styles = ChatMessageBox.styles;
	            var options = this.options;
	            var messages = options.messages;
	            var inputId = "inputId_" + kendo.guid();

	            $("<label>")
	                .addClass(styles.hidden)
	                .html(messages.placeholder)
	                .attr("for", inputId)
	                .appendTo(this.element);

	            this.inputWrapper = this.element
	                .addClass(styles.inputWrapper)
	                .appendTo(this.element);

	            this.input = $("<input type='text'>")
	                .addClass(styles.input)
	                .attr("id", inputId)
	                .attr("placeholder", messages.placeholder)
	                .appendTo(this.inputWrapper);

	            this.inputSuffix = $("<span></span>")
	                .addClass(styles.inputSuffix)
	                .appendTo(this.inputWrapper);

	            if (options.toolbar && options.toolbar.toggleable && options.toolbar.buttons && options.toolbar.buttons.length) {
	                $("<button>")
	                    .addClass(styles.button)
	                    .addClass(styles.buttonFlat)
	                    .addClass(styles.iconButton)
	                    .addClass(styles.buttonToggle)
	                    .attr("type", "button")
	                    .append($(TOGGLE_ICON))
	                    .appendTo(this.inputSuffix)
	                    .attr("title", messages.toggleButton)
	                    .attr("aria-label", messages.toggleButton);
	            }

	            $("<button>")
	                .addClass(styles.button)
	                .addClass(styles.buttonFlat)
	                .addClass(styles.iconButton)
	                .addClass(styles.buttonSend)
	                .append($(SEND_ICON))
	                .appendTo(this.inputSuffix)
	                .attr("title", messages.sendButton)
	                .attr("aria-label", messages.sendButton);
	        },

	        _attachEvents: function() {
	            var styles = ChatMessageBox.styles;

	            this.input
	                .on("keydown" + NS, proxy(this._keydown, this))
	                .on("input" + NS, proxy(this._input, this))
	                .on("focusout" + NS, proxy(this._inputFocusout, this));

	            this.element
	                .on("click" + NS, DOT + styles.buttonSend, proxy(this._buttonClick, this));

	            this.element
	                .on("click" + NS, DOT + styles.buttonToggle, proxy(this._toggleToolbar, this));
	        },

	        _input: function() {
	            var currentValue = this.input.val();
	            var start = currentValue.length > 0;

	            this._triggerTyping(start);
	        },

	        _keydown: function(e) {
	            var key = e.keyCode;

	            switch (key) {
	                case keys.ENTER:
	                    e.preventDefault();

	                    this._sendMessage();
	                    break;
	            }
	        },

	        _buttonClick: function(e) {
	            e.preventDefault();

	            this._sendMessage();
	        },

	        _sendMessage: function() {
	            var value = this.input.val();

	            if (!value.length) {
	                return;
	            }

	            this._triggerTyping(false);

	            var args = {
	                text: value
	            };

	            this.trigger("sendMessage", args);

	            this.input.val("");
	        },

	        _inputFocusout: function() {
	            this._triggerTyping(false);
	        },

	        _triggerTyping: function(start) {
	            if (start) {
	                if (!this._typing) {
	                    this.trigger("typingStart", {});
	                    this._typing = true;
	                }
	            } else {
	                if (this._typing) {
	                    this.trigger("typingEnd", {});
	                    this._typing = false;
	                }
	            }
	        },

	        _toggleToolbar: function (ev) {
	            this.trigger("toggleToolbar", { originalEvent: ev });
	        }
	    });

	    extend(true, ChatMessageBox, { styles: messageBoxStyles });
	    extend(kendo, {
	        chat: {
	            ChatMessageBox: ChatMessageBox
	        }
	    });
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ })

/******/ });