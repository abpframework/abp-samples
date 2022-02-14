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

	__webpack_require__(1709);
	module.exports = __webpack_require__(1709);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1634:
/***/ (function(module, exports) {

	module.exports = require("../kendo.dialog");

/***/ }),

/***/ 1709:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1634)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	    (function ($, undefined) {
	        var kendo = window.kendo,
	            extend = $.extend,
	            isPlainObject = $.isPlainObject,
	            Class = kendo.Class;

	        var TaskBoardCommand = Class.extend({
	            init: function (options) {
	                this.options = options;
	                this.taskboard = options.taskboard;
	            },
	            _confirm: function (title, content, okText, cancel) {
	                var that = this,
	                    taskboard = that.taskboard,
	                    taskboardOptions = taskboard.options,
	                    confirm;

	                if (isPlainObject(taskboardOptions.editable) && taskboardOptions.editable.confirmation === false ) {
	                    var fakePromise = $.Deferred();
	                    fakePromise.resolve();
	                    return fakePromise;
	                }

	                confirm = $("<div></div>").kendoConfirm(extend({}, {
	                    title: title,
	                    content: content,
	                    messages: {
	                        okText: okText,
	                        cancel: cancel
	                    },
	                    buttonLayout: "normal"
	                })).data("kendoConfirm");

	                confirm.open();

	                return confirm.result;
	            }
	        });

	        // Column commands
	        var AddColumnCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    taskboard = that.taskboard;

	                if (taskboard.trigger("editColumn", { column: null })) {
	                    return;
	                }

	                taskboard.columns().each(function(index, column){
	                    taskboard.enableByColumn(column, false);
	                });
	                taskboard.addColumn();
	            }
	        });

	        var EditColumnCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    options = that.options,
	                    taskboard = that.taskboard;

	                if (taskboard.trigger("editColumn", { column: options.column })) {
	                    return;
	                }

	                taskboard.columns().each(function(index, column){
	                    taskboard.enableByColumn(column, false);
	                });
	                taskboard.editColumn(options.columnElement);
	            }
	        });

	        var DeleteColumnCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    options = that.options,
	                    taskboard = that.taskboard,
	                    taskboardOptions = taskboard.options,
	                    messages = taskboardOptions.messages,
	                    columnDS = taskboard.columnsDataSource;

	                var result = that._confirm(messages.deleteColumn, messages.deleteColumnConfirm, messages["delete"], messages.cancel);

	                result.done(function () {
	                    if (taskboard.trigger("deleteColumn", { column: options.column })) {
	                        taskboard.dataSource.cancelChanges();
	                        return;
	                    }

	                    columnDS.remove(options.column);
	                    columnDS.sync();
	                });
	            }
	        });

	        var SaveColumnCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    options = that.options,
	                    taskboard = that.taskboard,
	                    columnSettings = taskboard.options.columnSettings,
	                    columnDS = taskboard.columnsDataSource,
	                    column = options.column,
	                    text = options.target.val();

	                if (taskboard.trigger("saveColumn", { column: options.column })) {
	                    taskboard.dataSource.cancelChanges();
	                    return;
	                }

	                column.set(columnSettings.dataTextField, text);
	                columnDS.sync();
	            }
	        });

	        var CancelEditColumnCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    taskboard = that.taskboard,
	                    columnDS = taskboard.columnsDataSource;

	                columnDS.cancelChanges();
	            }
	        });

	        //Move focus command
	        var MoveFocusCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    taskboard = that.taskboard,
	                    options = that.options,
	                    cardElement = options.cardElement,
	                    columnElement = options.columnElement,
	                    columns = taskboard.columns(),
	                    currentColumnIndex = columnElement.index(),
	                    direction = options.value,
	                    columnIndex, column;

	                switch (direction) {
	                    case "left":
	                        columnIndex = Math.max(0, currentColumnIndex - 1);
	                        break;
	                    case "right":
	                        columnIndex = Math.min(columns.length - 1,  currentColumnIndex + 1);
	                        break;
	                    default:
	                        columnIndex = currentColumnIndex;
	                        break;
	                }

	                that.columns = columns;
	                that.columnIndex = columnIndex;
	                that.column = column = taskboard._getColumnByElement(columns.eq(columnIndex));
	                that.cards = column.cards();

	                if (cardElement) {
	                    that._moveFromCardFocus(direction, cardElement);
	                } else if (columnElement && direction === "down") {
	                    that.cards.eq(0).trigger("focus");
	                } else {
	                    columns.eq(columnIndex).trigger("focus");
	                }
	            },
	            _moveFromCardFocus: function (direction, cardElement) {
	                var that = this,
	                    currentIndex = cardElement.index(),
	                    focusCard, index, seekFocusableCard = false;

	                switch (direction) {
	                    case "up":
	                        index = currentIndex - 1;
	                        break;
	                    case "down":
	                        index = currentIndex + 1;
	                        break;
	                    default:
	                        seekFocusableCard = true;
	                        index = currentIndex;
	                        break;
	                }

	                focusCard = that.cards.eq(index);

	                if (!focusCard.length && seekFocusableCard) {
	                    focusCard = that._getFocusableCard(index, direction);
	                }

	                if (index >= 0) {
	                    focusCard.trigger("focus");
	                } else {
	                    that.options.columnElement.focus();
	                }
	            },
	            _getFocusableCard: function (index, direction) {
	                var that = this,
	                    lastIndex = that.cards.length - 1,
	                    focusable = that.cards.eq(Math.min(index, lastIndex));

	                if(focusable.length) {
	                    return focusable;
	                }

	                if(that.columnIndex <= 0 || that.columnIndex >= that.columns.length - 1) {
	                    return;
	                }

	                switch (direction) {
	                    case "left":
	                        that.columnIndex = Math.max(0, that.columnIndex - 1);
	                        break;
	                    case "right":
	                        that.columnIndex = Math.min(that.columns.length - 1,  that.columnIndex + 1);
	                        break;
	                }

	                that.column = that.taskboard._getColumnByElement(that.columns.eq(that.columnIndex));
	                that.cards = that.column.cards();

	                return that._getFocusableCard(index, direction);

	            }
	        });

	        // Card commands
	        var TaskBoardBaseCardCommand = TaskBoardCommand.extend({
	            _updateOrder: function (column, currentIndex) {
	                var that = this,
	                    taskboard = that.taskboard,
	                    taskBoardOptions = taskboard.options,
	                    dataOrderField = taskBoardOptions.dataOrderField,
	                    options = that.options,
	                    currentCard = options.card,
	                    cardIndex = options.cardElement ? options.cardElement.index() : column.cards().length,
	                    newIndex = currentIndex,
	                    cards = column.cards().map(function (idx, card) {
	                        return taskboard.dataItem(card);
	                    }),
	                    prevCard = cards[cardIndex - 1],
	                    nextCard;

	                    currentCard.set(dataOrderField, newIndex);

	                    if (prevCard && prevCard.get(dataOrderField) >= currentCard.get(dataOrderField)) {
	                        currentCard.set(dataOrderField, prevCard.get(dataOrderField) + 1);
	                    }

	                    for (var i = newIndex + 1; i < cards.length; i++) {
	                        nextCard = cards[i];

	                        if (nextCard.get(dataOrderField) <= currentCard.get(dataOrderField)) {
	                            nextCard.set(dataOrderField, currentCard.get(dataOrderField) + 1);
	                            currentCard = nextCard;
	                        } else {
	                            break;
	                        }
	                    }
	            }
	        });

	        var SelectCardCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    taskboard = that.taskboard,
	                    options = that.options,
	                    cardElement = options.cardElement;

	                taskboard._select(cardElement, true);
	                cardElement.focus();
	            }
	        });

	        var SaveChangesCommand = TaskBoardBaseCardCommand.extend({
	            exec: function () {
	                var that = this,
	                    taskboard = that.taskboard,
	                    taskBoardOptions = taskboard.options,
	                    options = that.options,
	                    receivedStatus = options.card.get(taskBoardOptions.dataStatusField),
	                    targetColumn = taskboard._getColumn(receivedStatus),
	                    activeElm = $(document.activeElement);

	                if (activeElm.length) {
	                    activeElm.trigger("change");
	                }

	                if(taskboard.pane && taskboard.pane.form && !taskboard.pane.form.validate()) {
	                    return;
	                }

	                if (taskboard.trigger("saveCard", { card: options.card })) {
	                    taskboard.dataSource.cancelChanges();
	                    return;
	                }

	                if (targetColumn && taskBoardOptions.dataOrderField) {
	                    that._updateOrder(targetColumn, options.card.get(taskBoardOptions.dataOrderField));
	                }

	                taskboard.dataSource.sync().then(function () {
	                    taskboard.columns().eq(0).trigger("focus");
	                });
	            }
	        });

	        var DeleteCardCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    taskboard = that.taskboard,
	                    messages = taskboard.options.messages,
	                    options = that.options;

	                var result = that._confirm(messages.deleteCard, messages.deleteCardConfirm, messages["delete"], messages.cancel);

	                result.done(function () {
	                    if (taskboard.trigger("deleteCard", { card: options.card })) {
	                        taskboard.dataSource.cancelChanges();
	                        return;
	                    }

	                    taskboard.dataSource.remove(options.card);
	                    taskboard.dataSource.sync();
	                });
	            }
	        });

	        var MoveCardCommand = TaskBoardBaseCardCommand.extend({
	            exec: function () {
	                var that = this,
	                    taskboard = that.taskboard,
	                    taskBoardOptions = taskboard.options,
	                    columnSettings = taskBoardOptions.columnSettings,
	                    options = that.options,
	                    receivedStatus = options.column.get(columnSettings.dataStatusField);

	                options.card.set(taskBoardOptions.dataStatusField, receivedStatus);

	                if (taskBoardOptions.dataOrderField) {
	                    that._updateOrder(taskboard._getColumn(receivedStatus), options.newIndex);
	                }

	                taskboard.dataSource.sync();
	            }
	        });

	        var EditCardCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    taskboard = that.taskboard,
	                    options = that.options;

	                if (taskboard.trigger("editCard", { card: options.card })) {
	                    return;
	                }

	                taskboard._openPane(extend({
	                    pane: "Edit"
	                }, options));
	            }
	        });

	        var AddCardCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    taskboard = that.taskboard,
	                    options = that.options;

	                if (taskboard.trigger("editCard", { card: null })) {
	                    return;
	                }
	                taskboard.dataSource.cancelChanges();
	                taskboard._openPane(extend({
	                    pane: "Create"
	                }, options));
	            }
	        });

	        // Pane commands
	        var OpenPaneCommand = TaskBoardCommand.extend({
	            exec: function() {
	                var that = this,
	                    options = that.options,
	                    taskboard = that.taskboard;

	                taskboard._openPane({
	                    pane: options.value,
	                    card: options.card,
	                    cardElement: options.cardElement,
	                    column: options.column,
	                    columnElement: options.columnElement
	                });
	            }
	        });

	        var ClosePaneCommand = TaskBoardCommand.extend({
	            exec: function() {
	                var that = this,
	                    taskboard = that.taskboard;

	                taskboard._closePane();
	                taskboard.dataSource.cancelChanges();
	            }
	        });

	        // Search command

	        var SearchCommand = TaskBoardCommand.extend({
	            exec: function () {
	                var that = this,
	                    value = that.options.value,
	                    taskboard = that.taskboard,
	                    taskboardOptions = taskboard.options,
	                    searchOptions = taskboardOptions.search,
	                    operator = searchOptions.operator,
	                    fields = (searchOptions && searchOptions.fields) || [ taskboardOptions.dataTitleField, taskboardOptions.dataDescriptionField ],
	                    filters;

	                filters = that._buildFilters(fields, operator, value);

	                taskboard.dataSource.filter(filters);
	            },
	            _buildFilters: function (fields, operator, value) {
	                var filters = fields.map(function (field) {
	                    return { field: field, operator: operator, value: value };
	                });

	                return  { logic: "or", filters: filters };
	            }
	        });

	        extend(kendo.ui.taskboard, {
	            Command: TaskBoardCommand,
	            commands: {
	                AddColumnCommand: AddColumnCommand,
	                EditColumnCommand: EditColumnCommand,
	                DeleteColumnCommand: DeleteColumnCommand,
	                SaveColumnCommand: SaveColumnCommand,
	                CancelEditColumnCommand: CancelEditColumnCommand,
	                OpenPaneCommand: OpenPaneCommand,
	                ClosePaneCommand: ClosePaneCommand,
	                SelectCardCommand: SelectCardCommand,
	                MoveFocusCommand: MoveFocusCommand,
	                SaveChangesCommand: SaveChangesCommand,
	                DeleteCardCommand: DeleteCardCommand,
	                MoveCardCommand: MoveCardCommand,
	                EditCardCommand: EditCardCommand,
	                AddCardCommand: AddCardCommand,
	                SearchCommand: SearchCommand
	            }
	        });

	    })(window.kendo.jQuery);

	    return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });