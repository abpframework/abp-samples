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

	__webpack_require__(1708);
	module.exports = __webpack_require__(1708);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1697:
/***/ (function(module, exports) {

	module.exports = require("../kendo.sortable");

/***/ }),

/***/ 1708:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1697)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Observable = kendo.Observable,
	        extend = $.extend,
	        proxy = $.proxy,

	        DOT = ".",
	        NS = DOT + "kendoTaskBoardColumn",

	        CLICK = "click",
	        BLUR = "blur",

	        MOVE = "move",
	        MOVE_START = "moveStart",
	        MOVE_END = "moveEnd",
	        CHANGE = "change",
	        ACTION = "action";

	    var TaskBoardColumnStyles = {
	        element: "k-taskboard-column",
	        header: "k-taskboard-column-header",
	        headerText: "k-taskboard-column-header-text",
	        ellipsis: "k-text-ellipsis",
	        spacer: "k-spacer",
	        actions: "k-taskboard-column-header-actions",
	        cardsContainer: "k-taskboard-column-cards-container",
	        columnCards: "k-taskboard-column-cards",
	        actionButton: "k-taskboard-column-action-button",
	        button: "k-button k-icon-button k-button-md k-rounded-md k-button-flat k-button-flat-base",
	        card: "k-taskboard-card",
	        cardTitle: "k-card-title",
	        sortableSuffix: "-kendosortable",
	        textbox: "k-textbox k-input k-input-md k-rounded-md k-input-solid",
	        input: "k-input-inner",
	        newColumn: "k-taskboard-column-new",
	        editColumn: "k-taskboard-column-edit",
	        disabled: "k-state-disabled",
	        dragPlaceholder: "k-taskboard-drag-placeholder",
	        dragHint: "k-taskboard-drag-hint",
	        ignoreDrag: "k-taskboard-drag-ignore",
	        grabbingCursor: "k-cursor-grabbing"
	    };

	    function preventDefault(ev) { ev.preventDefault(); }

	    var TaskBoardColumn = Observable.extend({
	        init: function (options, dataItem) {
	            var that = this;

	            that._dataItem = dataItem;
	            that.options = extend(true, {}, options);

	            that.sortableUniqueClass = that.options.sortableIdentifier + TaskBoardColumn.styles.sortableSuffix;
	            that._render();
	            that._attachEvents();

	            if(options.states.isReorderable) {
	                that._initSortable();
	            }

	            Observable.fn.init.call(that);
	        },

	        empty: function () {
	            var that = this;
	            that.container.empty();
	        },

	        addCard: function (cardHtml) {
	            var that = this;
	            that.container.append(cardHtml);
	        },

	        edit: function () {
	            var that = this,
	                styles = TaskBoardColumn.styles;

	            that.element.addClass(styles.editColumn);
	            that._renderEditHeader();
	        },

	        getDataItem: function () {
	            return this._dataItem;
	        },

	        cards: function () {
	            var that = this;

	            return that.container.children();
	        },

	        template: '<div class="#: styles.headerText # #: styles.ellipsis #">{0}</div>' +
	                  '<span class="#: styles.spacer #"></span>' +
	                  '#=buttons#',

	        editTemplate: '<div class="#: styles.headerText # #: styles.ellipsis #">' +
	                        '<span class="#: styles.textbox #">' +
	                            '<input class="#: styles.input #" placeholder="#: {0} ? messages.editColumn : messages.newColumn #" #:kendo.attr("command")#="SaveColumnCommand" value="#:{0}#" />' +
	                        '</span>' +
	                        '</div>' +
	                        '<span class="#: styles.spacer #"></span>' +
	                        '#=buttons#',

	        actionButton: '<button class="#: styles.actionButton # #: styles.button #" title="#:text#" #:kendo.attr("command")#="#:command#" #if(options){##:kendo.attr("options")#="#:options#"#}#>' +
	                        '<i class="k-button-icon #:icon# #:spriteCssClass#"></i>' +
	                      '</button>',

	        builtinButtons: {
	            "editColumn": { name: "editColumn", icon: "edit", text: "Edit Column", command: "EditColumnCommand", rules: "isEditable" },
	            "addCard": { name: "addCard", icon: "add", text: "Add Card", command: "AddCardCommand", rules: "isEditable" },
	            "deleteColumn": { name: "deleteColumn", icon: "close", text: "Delete Column", command: "DeleteColumnCommand", rules: "isEditable" }
	        },

	        defaultButtons: [ "editColumn", "addCard", "deleteColumn" ],

	        _render: function () {
	            var that = this,
	                styles = TaskBoardColumn.styles,
	                headerLabelId = kendo.guid(),
	                element = $("<div class='" + styles.element + "'></div>")
	                    .attr(kendo.attr("uid"), that._dataItem.uid)
	                    .css({
	                        width: that.options.width
	                    })
	                    .attr("role", "list").attr("aria-labelledby", headerLabelId),
	                header = $("<div class='" + styles.header + "'></div>"),
	                cardsContainer = $("<div class='" + styles.cardsContainer + "'></div>"),
	                columnCards = $("<div class='" + styles.columnCards + "'></div>");

	            that.header = header.appendTo(element).attr("id", headerLabelId);

	            that._renderHeader();

	            cardsContainer.appendTo(element);
	            that.container = columnCards
	                                .appendTo(cardsContainer)
	                                .addClass(that.sortableUniqueClass);

	            that.element = element;
	        },

	        _renderHeader: function () {
	            var that = this,
	                styles = TaskBoardColumn.styles,
	                options = that.options,
	                template = options.template ? options.template : kendo.format(that.template, "#:" + options.dataTextField + "#");

	            that.header.append(kendo.template(template)(extend(true, {}, {
	                styles: styles,
	                buttons: that._buildActionsHtml()
	            }, that._dataItem)));
	        },

	        _renderEditHeader: function () {
	            var that = this,
	                styles = TaskBoardColumn.styles,
	                options = that.options,
	                template = options.editTemplate ? options.editTemplate : kendo.format(that.editTemplate, options.dataTextField);

	            that.header.html("");

	            that.header.append(kendo.template(template)(extend(true, {}, {
	                styles: styles,
	                messages: options.messages,
	                buttons: that._buildActionsHtml()
	            }, that._dataItem)));

	            setTimeout(function () {
	                that.header.find("input").trigger("focus");
	            }, 0);

	            that.header.find(DOT + styles.actions).addClass(styles.disabled);
	        },

	        _buildActionsHtml: function () {
	            var that = this,
	                options = that.options,
	                messages = options.messages,
	                buttons = options.buttons || that.defaultButtons,
	                styles = TaskBoardColumn.styles,
	                html = "<div class='" + styles.actions + "'>";

	            for (var i = 0; i < buttons.length; i++) {
	                var button = buttons[i];
	                button = ($.isPlainObject(button) && Object.keys(button).length === 1 && button.name) ? button.name : button;

	                if(typeof button === "string") {
	                    button = extend(true, {},
	                        that.builtinButtons[button] || { spriteCssClass: button, command: button + "Command" },
	                        { text: messages[button] || button }
	                    );
	                } else if ($.isPlainObject(button) && button.name) {
	                    button = extend(true, button,
	                        { text: messages[button.name] }
	                    );
	                }

	                if (!that._validateRules(button)) {
	                    continue;
	                }

	                var icon = button.icon ? "k-icon k-i-" + button.icon : "";

	                button.icon = icon;
	                button.spriteCssClass = button.spriteCssClass || "";

	                html += kendo.template(that.actionButton)(extend(true, {}, {
	                    styles: styles,
	                    options: false
	                }, button));
	            }

	            html += "</div>";

	            return html;
	        },

	        _validateRules: function (tool) {
	            var that = this,
	                states = that.options.states,
	                rules = tool.rules ? tool.rules.split(";") : [];

	            if(!rules.length) {
	                return true;
	            }

	            for (var i = 0; i < rules.length; i++) {
	                if(!states[rules[i]]){
	                    return false;
	                }
	            }

	            return true;
	        },

	        _actionClick: function (ev) {
	            var that = this,
	                target = $(ev.target).closest("[" + kendo.attr("command") + "]"),
	                command = target.attr(kendo.attr("command")),
	                options = target.attr(kendo.attr("options"));

	            options = typeof(options) === "string" ? { value: options } : options;

	            if (!command) {
	                return;
	            }

	            that.trigger(ACTION, {
	                command: command,
	                options: extend({ target: target }, options)
	            });
	        },

	        _textboxBlur: function (ev) {
	            var that = this,
	                target = $(ev.target).closest("[" + kendo.attr("command") + "]"),
	                command = target.attr(kendo.attr("command")),
	                options = target.attr(kendo.attr("options"));

	            options = typeof(options) === "string" ? { value: options } : options;

	            if (!command) {
	                return;
	            }

	            that.trigger(ACTION, {
	                command: command,
	                options: extend({ target: target }, options)
	            });
	        },

	        _attachEvents: function () {
	            var that = this;

	            that.header.on(CLICK + NS,
	                DOT + TaskBoardColumn.styles.actionButton,
	                proxy(that._actionClick, that));

	            that.header.on(BLUR + NS,
	                DOT + TaskBoardColumn.styles.input,
	                proxy(that._textboxBlur, that));

	            that.header.on("keyup" + NS,
	                DOT + TaskBoardColumn.styles.input,
	                function (ev) {
	                    if (ev.keyCode === kendo.keys.ENTER) {
	                        that._textboxBlur(ev);
	                    }
	                }
	            );

	            if (that.container) {
	                that.container.on(CLICK + NS,
	                    DOT + TaskBoardColumn.styles.card + " [" + kendo.attr("command") + "]",
	                    proxy(that._actionClick, that));

	                that.container.on(CLICK + NS,
	                    DOT + TaskBoardColumn.styles.card + " a." + TaskBoardColumn.styles.cardTitle,
	                    preventDefault);

	            }
	        },

	        _initSortable: function () {
	            var that = this,
	                isRtl = that.options.states.isRtl,
	                dirClass = isRtl ? " k-rtl" : "",
	                container = that.container;

	            if (!that.container) {
	                return;
	            }

	            that.sortable = new ui.Sortable(container, {
	                ignore: DOT + TaskBoardColumn.styles.ignoreDrag + " *",
	                connectWith: DOT + that.sortableUniqueClass,
	                filter: DOT + TaskBoardColumn.styles.card,
	                hint: function(element) {
	                    return element.clone()
	                        .addClass(TaskBoardColumn.styles.dragHint + " " + TaskBoardColumn.styles.grabbingCursor + dirClass)
	                        .css({
	                        width: element[0].offsetWidth,
	                        height: element[0].offsetHeight
	                    });
	                },
	                placeholder: function(element) {
	                    return $("<div></div>")
	                        .addClass(TaskBoardColumn.styles.dragPlaceholder)
	                        .css({
	                            height: element[0].offsetHeight
	                        });
	                },
	                move: proxy(that._move, that),
	                start: proxy(that._start, that),
	                end: proxy(that._end, that),
	                change: proxy(that._change, that)
	            });

	            that.sortable.draggable.userEvents.unbind("select");
	            that.sortable.draggable.userEvents.bind("select", proxy(that._select, that));
	        },

	        _select: function (ev) {
	            var ignoreDragSelectors = TaskBoardColumn.ignoreDragSelectors;
	            var target = $(ev.event.target);

	            for (var i = 0; i < ignoreDragSelectors.length; i++) {
	                if (target.is(ignoreDragSelectors[i])) {
	                    ev.preventDefault();
	                    break;
	                }
	            }
	        },

	        _move: function (ev) {
	            extend(ev, {
	                columnElement: ev.sender.element.parents(DOT + TaskBoardColumn.styles.element)
	            });
	            this.trigger(MOVE, ev);
	        },

	        _start: function (ev) {
	            extend(ev, {
	                columnElement: ev.sender.element.parents(DOT + TaskBoardColumn.styles.element)
	            });
	            this.trigger(MOVE_START, ev);
	        },

	        _end: function (ev) {
	            extend(ev, {
	                columnElement: ev.sender.element.parents(DOT + TaskBoardColumn.styles.element)
	            });
	            this.trigger(MOVE_END, ev);
	        },

	        _change: function (ev) {
	            var that = this;

	            extend(ev, {
	                columnElement: ev.sender.element.parents(DOT + TaskBoardColumn.styles.element)
	            });

	            that.trigger(CHANGE, ev);

	            if ((ev.action === "receive" && ev.newIndex >= 0) || (ev.action === "sort" && ev.newIndex !== ev.oldIndex)) {
	                that.trigger(ACTION, {
	                    command: "MoveCardCommand",
	                    options: ev
	                });
	            }
	        },

	        destroy: function () {
	            var that = this;

	            that.header.off(NS);
	            that.container.off(NS);

	            if (that.sortable) {
	                that.sortable.destroy();
	            }
	        }
	    });

	    var TaskBoardNewColumn = TaskBoardColumn.extend({
	        _render: function () {
	            var that = this,
	                styles = TaskBoardColumn.styles,
	                element = $("<div class='" + styles.element + "'></div>").addClass(styles.newColumn).attr(kendo.attr("uid"), that._dataItem.uid),
	                header = $("<div class='" + styles.header + "'></div>");

	            that.header = header.appendTo(element);

	            that._renderEditHeader();

	            that.element = element;
	        }
	    });

	    extend(kendo.ui.taskboard, {
	        Column: TaskBoardColumn,
	        NewColumn: TaskBoardNewColumn
	    });

	    extend(true, kendo.ui.taskboard.Column, {
	        styles: TaskBoardColumnStyles,
	        ignoreDragSelectors: ["img"]
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });