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

	module.exports = __webpack_require__(1103);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1104), __webpack_require__(1105), __webpack_require__(1106) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "chat",
	    name: "Chat",
	    category: "web",
	    description: "The Chat component.",
	    depends: [ "core", "draganddrop" ]
	};

	(function($, undefined) {

	    var kendo = window.kendo;
	    var Widget = kendo.ui.Widget;
	    var extend = $.extend;
	    var DOT = ".";

	    var chatStyles = {
	        wrapper: "k-widget k-chat",
	        canvas: "k-chat-canvas",
	        viewWrapper: "k-message-list",
	        messageBoxWrapper: "k-message-box",
	        toolbarBoxWrapper: "k-toolbar-box"
	    };

	    var Chat = Widget.extend({
	        init: function(element, options, events) {
	            Widget.fn.init.call(this, element, options);

	            if (events) {
	                this._events = events;
	            }

	            this._user();

	            this._wrapper();

	            this._view();

	            this._messageBox();

	            if(options && options.toolbar && options.toolbar.buttons) {
	                this._toolbar();
	            }

	            kendo.notify(this);
	        },

	        events: [
	            "typingStart",
	            "typingEnd",
	            "post",
	            "sendMessage",
	            "actionClick",
	            "toolClick"
	        ],

	        options: {
	            user: {
	                name: "User",
	                iconUrl: ""
	            },
	            name: "Chat",
	            messages: {
	                messageListLabel: "Message list",
	                placeholder: "Type a message...",
	                toggleButton: "Toggle toolbar",
	                sendButton: "Send message"
	            },
	            toolbar: false
	        },

	        setOptions: function(options) {
	            this._setEvents(options);
	            $.extend(true, this.options, options);

	            if (this.toolbar && "toolbar" in options) {
	                this.toolbar.destroy();
	                this.toolbar = null;
	            }

	            if (this.messageBox) {
	                this.messageBox.unbind();
	                this.messageBox.destroy();
	                this.messageBox = null;
	            }

	            this._messageBox();

	            if ("toolbar" in options) {
	                this._resetToolbarButtons(options);
	                this._toolbar();
	            }
	        },

	        _resetToolbarButtons: function (options) {
	            var toolbarBoxWrapper = this.wrapper.find(DOT + chatStyles.toolbarBoxWrapper);

	            if(!toolbarBoxWrapper.is(":visible")){
	                toolbarBoxWrapper.show();
	            }

	            if(options.toolbar && typeof options.toolbar == "object" && "buttons" in options.toolbar) {
	                this.options.toolbar.buttons = options.toolbar.buttons;
	            }
	        },

	        destroy: function() {
	            if (this.view) {
	                this.view.unbind();
	                this.view.destroy();
	                this.view = null;
	            }

	            if (this.messageBox) {
	                this.messageBox.unbind();
	                this.messageBox.destroy();
	                this.messageBox = null;
	            }

	            if(this.toolbar) {
	                this.toolbar.destroy();
	                this.toolbar = null;
	            }

	            Widget.fn.destroy.call(this);
	        },

	        _user: function() {
	            this.options.user.id = kendo.guid();
	        },

	        getUser: function() {
	            return extend(true, {}, this.options.user);
	        },

	        _wrapper: function() {
	            var chatStyles = Chat.styles;
	            var options = this.options;
	            var height = options.height;
	            var width = options.width;
	            var uiElements = "<div class='" + chatStyles.viewWrapper + "'></div>" +
	                             "<span class='" + chatStyles.messageBoxWrapper + "'></span>" +
	                             "<div class='" + chatStyles.toolbarBoxWrapper + "' role='toolbar' style='display:none;'></div>";

	            this.wrapper = this.element
	                .addClass(chatStyles.wrapper)
	                .append(uiElements);

	            if (options.toolbar && options.toolbar.buttons && options.toolbar.buttons.length) {
	                this.wrapper.find(DOT + chatStyles.toolbarBoxWrapper).show();
	            }

	            if (height) {
	                this.wrapper.height(height);
	            }

	            if (width) {
	                this.wrapper.css("max-width", width);
	            }
	        },

	        _view: function() {
	            var that = this;
	            var chatStyles = Chat.styles;
	            var options = extend(true, {}, this.options);

	            var element = this.wrapper.find(DOT + chatStyles.viewWrapper + "");

	            this.view = new kendo.chat.ChatView(element, options);

	            this.view
	                .bind("actionClick", function(args) {
	                    that.trigger("actionClick", args);

	                    that.postMessage(args.text);
	                });
	        },

	        _messageBox: function() {
	            var that = this;
	            var chatStyles = Chat.styles;
	            var options = extend(true, {}, this.options);
	            var element = this.wrapper.find(DOT + chatStyles.messageBoxWrapper + "");

	            this.messageBox = new kendo.chat.ChatMessageBox(element, options);

	            this.messageBox
	                .bind("typingStart", function(args) {
	                    that.trigger("typingStart", args);
	                })
	                .bind("typingEnd", function(args) {
	                    that.trigger("typingEnd", args);
	                })
	                .bind("sendMessage", function(args) {
	                    that.trigger("sendMessage", args);

	                    that.postMessage(args.text);
	                })
	                .bind("toggleToolbar", function() {
	                    that.toggleToolbar();
	                });
	        },

	        _toolbar: function() {
	            var that = this;
	            var chatStyles = Chat.styles;
	            var options = extend(true, {}, that.options);
	            var element = that.wrapper.find(DOT + chatStyles.toolbarBoxWrapper + "");

	            if(options.toolbar.scrollable === undefined) {
	                this.options.toolbar.scrollable = options.toolbar.scrollable = true;
	            }

	            if(options.toolbar.toggleable === undefined) {
	                this.options.toolbar.toggleable = options.toolbar.toggleable = false;
	            }

	            that.toolbar = new kendo.chat.ChatToolBar(element, options);

	            that.toolbar.bind("click", function(ev){
	                that.trigger("toolClick", {
	                    sender: that,
	                    name: ev.name,
	                    button: ev.button,
	                    messageBox: that.messageBox.input[0],
	                    originalEvent: ev.originalEvent
	                });
	            });
	        },

	        postMessage: function(message) {
	            var postArgs = extend(true, {}, { text: message, type: "message", timestamp: new Date(), from: this.getUser() });

	            this.trigger("post", postArgs);

	            this.renderMessage(postArgs, postArgs.from);
	        },

	        // TEST calling View renderMessage
	        renderMessage: function(message, sender) {
	            this.view.renderMessage(message, sender);
	        },

	        // TEST calling View renderSuggestedActions
	        renderSuggestedActions: function(suggestedActions) {
	            this.view.renderSuggestedActions(suggestedActions);
	        },

	        // TEST calling View renderCard
	        renderAttachments: function(options, sender) {
	            this.view.renderAttachments(options, sender);
	        },

	        toggleToolbar: function (skipAnimation) {
	            this.toolbar.toggle(skipAnimation);
	        },

	        renderUserTypingIndicator: function(sender) {
	            this.view._renderTypingIndicator(sender);
	        },

	        clearUserTypingIndicator: function(sender) {
	            this.view._removeTypingParticipant(sender);
	        },

	        removeTypingIndicator: function() {
	            this.view._removeTypingIndicator();
	        }
	    });

	    kendo.ui.plugin(Chat);

	    extend(true, Chat, { styles: chatStyles });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1104:
/***/ (function(module, exports) {

	module.exports = require("./chat/messageBox");

/***/ }),

/***/ 1105:
/***/ (function(module, exports) {

	module.exports = require("./chat/toolbar");

/***/ }),

/***/ 1106:
/***/ (function(module, exports) {

	module.exports = require("./chat/view");

/***/ })

/******/ });