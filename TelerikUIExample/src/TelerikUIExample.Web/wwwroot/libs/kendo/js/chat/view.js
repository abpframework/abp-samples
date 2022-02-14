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

	__webpack_require__(22);
	module.exports = __webpack_require__(22);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(23)  ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {

	    var kendo = window.kendo;
	    var Widget = kendo.ui.Widget;
	    var extend = $.extend;
	    var proxy = $.proxy;
	    var DOT = ".";
	    var SPACE = " ";
	    var NS = ".kendoChat";

	    var MESSAGE_GROUP_TEMPLATE = kendo.template(
	        '<div #:text# class="#=styles.messageGroup# #= url ? "" : styles.noAvatar #">' +
	            '<p class="#=styles.author#">#:text#</p>' +
	            '# if (url) { #' +
	                '<img src="#=url#" alt="#:text#" class="#=styles.avatar#">' +
	            '# } #' +
	        '</div>');

	    var SELF_MESSAGE_GROUP_TEMPLATE = kendo.template(
	        '<div me class="#=styles.messageGroup# #=styles.self# #= url ? "" : styles.noAvatar #">' +
	            '# if (url) { #' +
	                '<img src="#=url#" alt="#:text#" class="#=styles.avatar#">' +
	            '# } #' +
	        '</div>');

	    var TEXT_MESSAGE_TEMPLATE = kendo.template(
	        '<div class="#=styles.message#">' +
	            '<time class="#=styles.messageTime#">#= kendo.toString(kendo.parseDate(timestamp), "HH:mm:ss") #</time>' +
	            '<div class="#=styles.bubble#">#:text#</div>' +
	        '</div>');

	    var TYPING_INDICATOR_TEMPLATE = kendo.template(
	        '<div class="#=styles.messageListContent# #=styles.typingIndicatorBubble#">' +
	            '<p class="#=styles.author#">#:text#</p>' +
	            '<div class="#=styles.message#">' +
	                '<div class="#=styles.bubble#">' +
	                    '<div class="#=styles.typingIndicator#">' +
	                        '<span></span><span></span><span></span>' +
	                    '</div>' +
	                '</div>' +
	            '</div>' +
	        '</div>');

	    var SUGGESTED_ACTIONS_TEMPLATE = kendo.template(
	        '<div class="#=styles.suggestedActions#">' +
	            '# for (var i = 0; i < suggestedActions.length; i++) { #' +
	                '<span role="button" tabindex="0" class="#=styles.suggestedAction#" data-value="#:suggestedActions[i].value#">#:suggestedActions[i].title#</span>' +
	            '# } #' +
	        '</div>'
	        );

	    var HERO_CARD_TEMPLATE = kendo.template(
	        '<div class="#=styles.card# #=styles.cardRich#">' +
	            '# if (typeof images !== "undefined" && images.length > 0) { #' +
	                '<img src="#:images[0].url#" alt="#:images[0].alt#" class="#=styles.cardImage#" />' +
	            '# } #' +
	            '<div class="#=styles.cardBody#">' +
	                '# if (typeof title !== "undefined") { #' +
	                    '<h5 class="#=styles.cardTitle#">#:title#</h5>' +
	                '# } #' +
	                '# if (typeof subtitle !== "undefined") { #' +
	                    '<h6 class="#=styles.cardSubtitle#">#:subtitle#</h6>' +
	                '# } #' +
	                '# if (typeof text !== "undefined") { #' +
	                    '<p>#:text#</p>' +
	                '# } #' +
	            '</div>' +
	            '# if (typeof buttons !== "undefined" && buttons.length > 0) { #' +
	                '<div class="#=styles.cardActions# #=styles.cardActionsVertical#">' +
	                '# for (var i = 0; i < buttons.length; i++) { #' +
	                    '<span class="#=styles.cardAction#"><span class="#=styles.button# #=styles.buttonPrimary#" data-value="#:buttons[i].value#">#:buttons[i].title#</span></span>' +
	                '# } #' +
	                '</div>' +
	            '# } #' +
	        '</div>'
	        );

	    extend(kendo.chat, {
	        Templates: {},
	        Components: {}
	    });

	    kendo.chat.registerTemplate = function(templateName, template) {
	        kendo.chat.Templates[templateName] = kendo.template(template);
	    };

	    kendo.chat.getTemplate = function(templateName) {
	        return kendo.chat.Templates[templateName] || TEXT_MESSAGE_TEMPLATE;
	    };

	    kendo.chat.registerTemplate("text", TEXT_MESSAGE_TEMPLATE);
	    kendo.chat.registerTemplate("message", TEXT_MESSAGE_TEMPLATE);
	    kendo.chat.registerTemplate("typing", TYPING_INDICATOR_TEMPLATE);
	    kendo.chat.registerTemplate("suggestedAction", SUGGESTED_ACTIONS_TEMPLATE);
	    kendo.chat.registerTemplate("heroCard", HERO_CARD_TEMPLATE);
	    kendo.chat.registerTemplate("application/vnd.microsoft.card.hero", HERO_CARD_TEMPLATE);

	    kendo.chat.registerComponent = function(componentName, component) {
	        kendo.chat.Components[componentName] = component;
	    };

	    kendo.chat.getComponent = function(componentName) {
	        return kendo.chat.Components[componentName] || null;
	    };

	    var Component = kendo.chat.Component = kendo.Class.extend({
	        init: function(options, view) {
	            this.element = $('<div></div>');
	            this.options = options;
	            this.view = view;
	        },

	        destroy: function() {
	            kendo.destroy(this.element);
	        }
	    });

	    var Calendar = Component.extend({
	        init: function(options, view) {
	            Component.fn.init.call(this, options, view);

	            this.element.kendoCalendar({
	                change: function() {
	                    view.trigger("suggestedAction", { text: kendo.toString(this.value(), 'd'), type: "message" });
	                }
	            });
	        },

	        destroy: function() {
	        }
	    });
	    kendo.chat.registerComponent("calendar", Calendar);

	    var viewStyles = {
	        wrapper: "k-widget k-chat",
	        messageList: "k-avatars",
	        messageListContent: "k-message-list-content",
	        messageTime: "k-message-time",
	        messageGroup: "k-message-group",
	        message: "k-message",
	        only: "k-only",
	        first: "k-first",
	        middle: "k-middle",
	        last: "k-last",
	        author: "k-author",
	        avatar: "k-avatar",
	        noAvatar: "k-no-avatar",
	        self: "k-alt",
	        button: "k-button",
	        buttonDefaults: "k-button-md k-rounded-md k-button-solid k-button-solid-base",
	        iconButton: "k-icon-button",
	        buttonIcon: "k-button-icon",
	        buttonPrimary: "k-button-md k-rounded-md k-button-flat k-button-flat-primary",
	        scrollButtonIcon: "k-icon",
	        scrollButtonIconLeft: "k-i-arrow-chevron-left",
	        scrollButtonIconRight: "k-i-arrow-chevron-right",
	        typingIndicator: "k-typing-indicator",
	        typingIndicatorBubble: "k-typing-indicator-bubble",
	        bubble: "k-bubble",
	        suggestedActions: "k-quick-replies",
	        suggestedAction: "k-quick-reply",
	        cardWrapper: "k-card-container",
	        cardDeckScrollWrap: "k-card-deck-scrollwrap",
	        cardDeck: "k-card-deck",
	        cardList: "k-card-list",
	        card: "k-card",
	        cardRich: "k-card-type-rich",
	        cardBody: "k-card-body",
	        cardImage: "k-card-image",
	        cardTitle: "k-card-title",
	        cardSubtitle: "k-card-subtitle",
	        cardActions: "k-card-actions",
	        cardActionsVertical: "k-card-actions-vertical",
	        cardAction: "k-card-action",
	        selected: "k-state-selected"
	    };

	    var ChatView = kendo.chat.ChatView = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);

	            this._list();

	            this._lastSender = null;

	            this.typingParticipants = [];

	            this._attachEvents();

	            this._scrollable();
	        },

	        events: [
	        ],

	        options: {
	            messages: {
	                isTyping: " is typing.",
	                areTyping: " are typing.",
	                and: " and "
	            }
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            if (this._scrollDraggable) {
	                this._scrollDraggable.destroy();
	            }

	            this.element.empty();
	            this.element.off(NS);

	            this.list = null;
	            this._lastSender = null;
	        },

	        _list: function() {
	            var viewStyles = ChatView.styles;

	            this.element
	                .addClass(viewStyles.messageList)
	                .attr("role", "log")
	                .attr("aria-label", this.options.messages.messageListLabel);

	            this.list = $("<div>")
	                .addClass(viewStyles.messageListContent)
	                .appendTo(this.element);
	        },

	        _attachEvents: function() {
	            var styles = ChatView.styles;

	            this.element
	                .on("click" + NS, proxy(this._listClick, this))
	                .on("click" + NS, DOT + styles.message, proxy(this._messageClick, this))
	                .on("click" + NS, DOT + styles.suggestedAction, proxy(this._suggestedActionClick, this))
	                .on("click" + NS, DOT + styles.cardAction + SPACE + DOT + styles.button, proxy(this._cardActionClick, this));

	            this.element.on("keydown" + NS, DOT + styles.suggestedAction, proxy(this._suggestedActionKeydown, this));
	        },

	        _scrollable: function() {
	            var viewStyles = ChatView.styles;

	            this.element
	                .on("click" + NS, DOT + viewStyles.cardDeckScrollWrap + SPACE + DOT + viewStyles.button, proxy(this._scrollButtonClick, this));
	        },

	        _scrollButtonClick: function(e) {
	            var viewStyles = ChatView.styles;
	            var button = $(e.currentTarget);
	            var scrollToLeft = button.find(DOT + viewStyles.scrollButtonIconLeft).length !== 0;
	            var scrollContainer = button.siblings(DOT + viewStyles.cardDeck);
	            var lastCard = scrollContainer.find(DOT + viewStyles.card).last();
	            var cardWidth = lastCard.outerWidth(true);

	            if (scrollToLeft) {
	                kendo.scrollLeft(scrollContainer, kendo.scrollLeft(scrollContainer) - cardWidth);
	            } else {
	                kendo.scrollLeft(scrollContainer, kendo.scrollLeft(scrollContainer) + cardWidth);
	            }
	        },

	        getTemplate: function(templateName) {
	            return kendo.chat.getTemplate(templateName);
	        },

	        getComponent: function(type) {
	           return kendo.chat.getComponent(type);
	        },

	        renderMessage: function(message, sender) {
	            if (!message.timestamp) {
	                message.timestamp = new Date();
	            }

	            if (!message.text) {
	                message.text = "";
	            }

	            var bubbleElement = this._renderTemplate(message.type, message);

	            this._renderBubble(message.type, bubbleElement, sender);

	            if (message.type == "typing") {
	                if (this.typingParticipants.length > 0) {
	                    this._removeTypingParticipant(sender);
	                }
	            } else {
	                this._lastSender = sender.id;
	            }
	        },

	        renderSuggestedActions: function(suggestedActions) {
	            this._removeSuggestedActions();

	            var element = this._renderTemplate("suggestedAction", { suggestedActions: suggestedActions });

	            this.list.append(element);

	            this._scrollToBottom();
	        },

	        renderAttachments: function(options) {
	            var wrapper = this._renderAttachmentWrapper(options.attachmentLayout);
	            var cardContainer = options.attachmentLayout === "carousel" ? wrapper.find(DOT + ChatView.styles.cardDeck) : wrapper;
	            var attachments = options.attachments;

	            if (!attachments.length) {
	                return;
	            }

	            for (var i = 0; i < attachments.length; i++) {
	                var cardElement = this._renderTemplate(attachments[i].contentType, attachments[i].content);

	                cardContainer.append(cardElement);
	            }

	            this._removeSuggestedActions();
	            this._removeTypingIndicator();

	            this.list.append(wrapper);

	            this._lastSender = null;
	        },

	        renderComponent: function(type) {
	            var componentType = this.getComponent(type);
	            var component = new componentType({}, this);

	            this.list.append(component.element);

	            this._scrollToBottom();
	        },

	        _renderAttachmentWrapper: function(layout) {
	            var viewStyles = ChatView.styles;
	            var wrapper = $("<div>");

	            if (layout === "carousel") {
	                wrapper.addClass(viewStyles.cardDeckScrollWrap);

	                var buttonLeft = this._renderScrollButton(viewStyles.scrollButtonIconLeft);
	                wrapper.append(buttonLeft);

	                wrapper.append($("<div>").addClass(viewStyles.cardDeck));

	                var buttonRight = this._renderScrollButton(viewStyles.scrollButtonIconRight);
	                wrapper.append(buttonRight);
	            } else {
	                wrapper.addClass(viewStyles.cardList);
	            }

	            return wrapper;
	        },

	        _renderScrollButton: function(directionClass) {
	            var viewStyles = ChatView.styles;

	            return $("<button>")
	                .addClass(viewStyles.button)
	                .addClass(viewStyles.buttonDefaults)
	                .addClass(viewStyles.iconButton)
	                .append($("<span>")
	                    .addClass(viewStyles.buttonIcon)
	                    .addClass(viewStyles.scrollButtonIcon)
	                    .addClass(directionClass)
	                );
	        },

	        _removeSuggestedActions: function() {
	            this.list.find(DOT + ChatView.styles.suggestedActions).remove();
	        },

	        _listClick: function(e) {
	            var styles = ChatView.styles;
	            var targetElement = $(e.target);

	            if (targetElement.hasClass(styles.message) || targetElement.parents(DOT + styles.message).length) {
	                return;
	            }

	            this._clearSelection();
	        },

	        _messageClick: function(e) {
	            this._clearSelection();

	            $(e.currentTarget).addClass(ChatView.styles.selected);
	        },

	        _suggestedActionClick: function(e) {
	            var text = $(e.target).data("value") || "";

	            this.trigger("actionClick", { text: text });

	            this._removeSuggestedActions();
	        },

	        _suggestedActionKeydown: function(e) {
	            if (e.keyCode === kendo.keys.SPACEBAR || e.keyCode === kendo.keys.ENTER) {
	                this._suggestedActionClick(e);
	            }
	        },

	        _cardActionClick: function(e) {
	            var text = $(e.target).data("value") || "";

	            this.trigger("actionClick", { text: text });
	        },

	        _renderBubble: function(messageType, bubbleElement, sender) {
	            this._removeSuggestedActions();
	            this._removeTypingIndicator();

	            var group = this._getMessageGroup(sender, messageType);

	            this._appendToGroup(group, bubbleElement, messageType);

	            this._scrollToBottom();
	        },

	        _renderTemplate: function(type, options) {
	            var componentType = this.getComponent(type);
	            var element;

	            if (componentType) {
	                var component = new componentType(options, this);

	                element = component.element;
	            } else {
	                var template = this.getTemplate(type);
	                var templateOptions = extend(true, {}, options, { styles: ChatView.styles });

	                element = $(template(templateOptions));
	            }

	            return element;
	        },

	        _getMessageGroup: function(sender, messageType) {
	            var viewStyles = ChatView.styles;
	            var template = this._getMessageGroupTemplate(sender, messageType);
	            var appendTarget = messageType == "typing" ? this.element : this.list;
	            var group;

	            if (sender.id === this._lastSender && this._lastSender !== null && messageType !== "typing") {
	                group = this.list.find(DOT + viewStyles.messageGroup).last();

	                if (group.length) {
	                    return group;
	                }
	            }

	            return $(template({text: sender.name, url: sender.iconUrl, styles: viewStyles})).appendTo(appendTarget);
	        },

	        _getMessageGroupTemplate: function(sender, messageType) {
	            var isOwnMessage = sender.id === this.options.user.id;
	            var template = isOwnMessage ?
	                SELF_MESSAGE_GROUP_TEMPLATE :
	                MESSAGE_GROUP_TEMPLATE;

	            if(messageType == "typing") {
	                template = TYPING_INDICATOR_TEMPLATE;
	            }

	            return template;
	        },

	        _appendToGroup: function(group, messageElement, messageType) {
	            var viewStyles = ChatView.styles;
	            var children = group.find(DOT + viewStyles.message);
	            var childrenCount = children.length;
	            var indicator = this.element.find(DOT + viewStyles.typingIndicator);

	            if(indicator.length && messageType == "typing") {
	                return;
	            }

	            messageElement.addClass(childrenCount === 0 ? viewStyles.only : viewStyles.last);

	            children.filter(DOT + viewStyles.only)
	                .removeClass(viewStyles.only)
	                .addClass(viewStyles.first);

	            children.filter(DOT + viewStyles.last)
	                .removeClass(viewStyles.last)
	                .addClass(viewStyles.middle);

	            group.append(messageElement);
	        },

	        _renderTypingIndicator: function(sender) {
	            var indicator = this.element.find(DOT + viewStyles.typingIndicatorBubble),
	                indicatorList,
	                participants;

	            this._addTypingParticipant(sender);

	            if(indicator.length) {
	                participants = this._composeTypingParticipantsText(this.typingParticipants);

	                indicatorList = indicator.find(DOT + viewStyles.author).first();
	                indicatorList.text(participants);

	            } else {
	                $(TYPING_INDICATOR_TEMPLATE({
	                    text: sender.name + this.options.messages.isTyping,
	                    styles: viewStyles
	                })).appendTo(this.element);
	            }

	            this._scrollToBottom();
	        },

	        _addTypingParticipant: function(sender) {
	            var found = false;
	            for(var i = 0; i < this.typingParticipants.length; i += 1) {
	                if(this.typingParticipants[i].id == sender.id) {
	                    found = true;
	                    break;
	                }
	            }
	            if(!found) {
	                this.typingParticipants.push(sender);
	            }
	        },

	        _removeTypingParticipant: function(sender) {
	            var indicator = this.element.find(DOT + viewStyles.typingIndicatorBubble),
	                indicatorList,
	                participants;

	            if(indicator.length) {
	                for (var i = 0; i < this.typingParticipants.length; i += 1) {
	                    if (this.typingParticipants[i].id == sender.id) {
	                        this.typingParticipants.splice(i, 1);
	                    }
	                }

	                participants = this._composeTypingParticipantsText(this.typingParticipants);

	                if(participants === "") {
	                    indicator.remove();
	                } else {
	                    indicatorList = indicator.find(DOT + viewStyles.author).first();
	                    indicatorList.text(participants);
	                }
	            }
	        },

	        _composeTypingParticipantsText: function(participants) {
	            var messages = this.options.messages,
	                typingAction = participants.length == 1 ? messages.isTyping : messages.areTyping,
	                typingText = "";

	            if(participants.length === 0) {
	                return typingText;
	            }

	            typingText = this.typingParticipants.map(function(author) {
	                return author.name;
	            }).join(', ').replace(/,(?!.*,)/gmi, messages.and.trimRight()) + typingAction;

	            return typingText;
	        },

	        _removeTypingIndicator: function() {
	            var indicator = this.element.find(DOT + viewStyles.typingIndicatorBubble);

	            if(indicator.length) {
	                this.typingParticipants = [];
	                indicator.remove();
	            }
	        },

	        _clearSelection: function() {
	            var selectedClass = ChatView.styles.selected;

	            this.element.find(DOT + selectedClass).removeClass(selectedClass);
	        },

	        _scrollToBottom: function() {
	            this.element.scrollTop(this.element.prop("scrollHeight"));
	        }
	    });

	    extend(true, ChatView, { styles: viewStyles });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

	module.exports = require("../kendo.draganddrop");

/***/ })

/******/ });