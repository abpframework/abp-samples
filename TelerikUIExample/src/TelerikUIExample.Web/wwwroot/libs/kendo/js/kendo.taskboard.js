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

	module.exports = __webpack_require__(1474);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1076:
/***/ (function(module, exports) {

	module.exports = require("./kendo.data");

/***/ }),

/***/ 1474:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(1475),
	        __webpack_require__(1476),
	        __webpack_require__(1477),
	        __webpack_require__(1478),
	        __webpack_require__(1479),
	        __webpack_require__(1480),
	        __webpack_require__(1481),

	        __webpack_require__(1076)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	    var __meta__ = { // jshint ignore:line
	        id: "taskboard",
	        name: "TaskBoard",
	        category: "web",
	        description: "The TaskBoard widget displays cards.",
	        depends: ["data", "sortable", "dialog", "form", "menu", "toolbar"]
	    };

	    var TaskBoardStyles = {
	        wrapper: "k-taskboard",
	        header: "k-taskboard-header",
	        content: "k-taskboard-content",
	        toolbar: "k-taskboard-toolbar k-toolbar-flat",
	        columnsContainer: "k-taskboard-columns-container",
	        card: "k-taskboard-card",
	        column: "k-taskboard-column",
	        selected: "k-state-selected",
	        disabled: "k-state-disabled",
	        ignoreDrag: "k-taskboard-drag-ignore"
	    };

	    var preventDefault = function (ev) { ev.preventDefault(); };

	    (function ($, undefined) {
	        var kendo = window.kendo,
	            Widget = kendo.ui.Widget,
	            DataSource = kendo.data.DataSource,
	            extend = $.extend,
	            ui = kendo.ui,
	            proxy = $.proxy,
	            isArray = Array.isArray,
	            isPlainObject = $.isPlainObject,

	            GENERIC = "_generic",

	            DOT = ".",

	            MOVE = "move",
	            MOVE_START = "moveStart",
	            MOVE_END = "moveEnd",
	            SELECT = "select",
	            EXECUTE = "execute",
	            ACTION = "action",
	            CHANGE = "change",
	            ERROR = "change",
	            DATABINDING = "dataBinding",
	            DATABOUND = "dataBound",
	            EDIT_CARD = "editCard",
	            SAVE_CARD = "saveCard",
	            DELETE_CARD = "deleteCard",
	            EDIT_COLUMN = "editColumn",
	            SAVE_COLUMN = "saveColumn",
	            DELETE_COLUMN = "deleteColumn",

	            COLUMNSDATABINDING = "columnsDataBinding",
	            COLUMNSDATABOUND = "columnsDataBound";

	        var TaskBoard = Widget.extend({
	            init: function (element, options) {
	                var that = this;

	                Widget.fn.init.call(that, element, options);

	                element = that.wrapper = that.element;

	                that._sortableIdentifier = that.element.attr("id") || kendo.guid();

	                that._wrapper();
	                that._columnsDataSource();
	                that._initResources();
	                that._dataSource();
	                that._initToolbar();
	                that._initCardMenu();
	                that._initKeyboard();

	                if (that.options.autoBind) {
	                    that.load();
	                }

	                kendo.notify(that);
	            },

	            events: [
	                MOVE,
	                MOVE_START,
	                MOVE_END,
	                CHANGE,
	                EXECUTE,
	                SELECT,
	                DATABINDING,
	                DATABOUND,
	                COLUMNSDATABINDING,
	                COLUMNSDATABOUND,
	                EDIT_CARD,
	                SAVE_CARD,
	                DELETE_CARD,
	                EDIT_COLUMN,
	                SAVE_COLUMN,
	                DELETE_COLUMN
	            ],

	            options: {
	                name: "TaskBoard",
	                autoBind: true,
	                height: 600,
	                width: "100%",
	                toolbar: true,
	                dataStatusField: "status",
	                dataTitleField: "title",
	                dataDescriptionField: "description",
	                dataCategoryField: "category",
	                dataOrderField: null,
	                cardMenu: true,
	                editable: true,
	                selectable: true,
	                reorderable: true,
	                previewPane: true,
	                search: {
	                    operator: "contains"
	                },
	                dataSource: [],
	                columns: [],
	                columnSettings: {
	                    dataStatusField: "status",
	                    dataTextField: "text",
	                    dataOrderField: null
	                },
	                resources: [],
	                messages: {
	                    edit: "Edit",
	                    createNewCard: "Create new card",
	                    create: "Create",
	                    search: "Search",
	                    previewCard: "Preview card",
	                    addCard: "Add card",
	                    editCard: "Edit card",
	                    deleteCard: "Delete Card",
	                    addColumn: "Add column",
	                    editColumn: "Edit column",
	                    deleteColumn: "Delete column",
	                    close: "Close",
	                    cancel: "Cancel",
	                    "delete": "Delete",
	                    saveChanges: "Save changes",
	                    title: "Title:",
	                    description: "Description:",
	                    newColumn: "New column",
	                    deleteColumnConfirm: "Are you sure you want to delete this column?",
	                    deleteCardConfirm: "Are you sure you want to delete this card?"
	                }
	            },

	            items: function () {
	                var that = this,
	                    result = $([]);

	                for (var key in that._columns) {
	                    $.merge(result, that._columns[key].cards());
	                }

	                return result;
	            },

	            itemsByStatus: function (status) {
	                var that = this,
	                    result = that._getColumn(status).cards();

	                return result;
	            },

	            itemsByColumn: function (columnElm) {
	                var that = this,
	                    column = that._getColumnByElement(columnElm);

	                if (column) {
	                    return column.cards();
	                }
	            },

	            load: function () {
	                var that = this,
	                    fetchPromises = [];

	                that._progress(true);

	                fetchPromises.push(that.columnsDataSource.fetch());

	                for (var key in that.resources) {
	                    fetchPromises.push(that.resources[key].dataSource.fetch());
	                }

	                $.when.apply(null, fetchPromises)
	                    .then(proxy(that.dataSource.read, that.dataSource));
	            },

	            dataItem: function (cardElm) {
	                var that = this,
	                    dataSource = that.dataSource,
	                    uid;

	                cardElm = $(cardElm);
	                uid = cardElm.attr(kendo.attr("uid"));

	                return dataSource.getByUid(uid);
	            },

	            columnDataItem: function (columnElm) {
	                var that = this,
	                    columnsDataSource = that.columnsDataSource,
	                    uid;

	                columnElm = $(columnElm);
	                uid = columnElm.attr(kendo.attr("uid"));

	                return columnsDataSource.getByUid(uid);
	            },

	            columns: function () {
	                var that = this,
	                    result = $([]);

	                for (var key in that._columns) {
	                    $.merge(result, that._columns[key].element);
	                }

	                return result;
	            },

	            columnByStatus: function (status) {
	                return this._getColumn(status).element;
	            },

	            select: function (card, toggle) {
	                var that = this;

	                if(!card) {
	                    return that.element
	                        .find(DOT + TaskBoard.styles.card + DOT + TaskBoard.styles.selected).eq(0);
	                }

	                card = $(card);
	                toggle = toggle !== false;

	                if (toggle) {
	                    that.element
	                        .find(DOT + TaskBoard.styles.card + DOT + TaskBoard.styles.selected)
	                        .removeClass(TaskBoard.styles.selected);
	                }

	                card.toggleClass(TaskBoard.styles.selected, toggle);
	            },

	            previewCard: function (cardElement) {
	                var that = this,
	                    options = that.options,
	                    args = that._extendExecArgs({ target: cardElement });

	                if (options.previewPane) {
	                    that._openPane(extend({
	                        pane: "Preview"
	                    }, args));
	                }
	            },

	            editCard: function (cardElement) {
	                var that = this,
	                    options = that.options,
	                    args;

	                cardElement = $(cardElement);
	                args = that._extendExecArgs({ target: cardElement });

	                if (options.editable) {
	                    that._openPane(extend({
	                        pane: "Edit"
	                    }, args));
	                }
	            },

	            saveCard: function () {
	                var that = this;

	                that.dataSource.sync();
	            },

	            deleteCard: function (cardElement) {
	                var that = this,
	                    card = that.dataItem(cardElement);

	                that.dataSource.remove(card);
	                that.dataSource.sync();
	            },

	            addCard: function (dataItem) {
	                var that = this,
	                    options = that.options,
	                    args = { card: dataItem };

	                if (options.editable) {
	                    that._openPane(extend({
	                        pane: "Create"
	                    }, args));
	                }
	            },

	            addColumn: function (index, data) {
	                var that = this,
	                    columnSettings = extend(true, {}, that.options.columnSettings, {
	                        messages: that.options.messages,
	                        states: that._buildStates(),
	                        sortableIdentifier: that._sortableIdentifier
	                    }),
	                    newColumn, model, column;

	                if(isNaN(index) && !data) {
	                    data = index;
	                    index = null;
	                }

	                model = that.columnsDataSource._createNewModel(data);
	                index = isNaN(index) || index === null ? that.columnsDataSource.data().length : index;
	                column = that.columns().eq(index);
	                that.columnsDataSource.insert(index, model);

	                newColumn = new ui.taskboard.NewColumn(columnSettings, model);

	                if (isNaN(index) || !column.length) {
	                    that.columnsContainer.append(newColumn.element);
	                } else {
	                    column.before(newColumn.element);
	                }

	                newColumn.bind(ACTION, that.executeCommand.bind(that));
	            },

	            editColumn: function (columnElement) {
	                var that = this;

	                columnElement = $(columnElement);

	                that._getColumnByElement(columnElement).edit();
	            },

	            saveColumn: function () {
	                var that = this;

	                that.columnsDataSource.sync();
	            },

	            deleteColumn: function (columnElement) {
	                var that = this,
	                    column = that.columnDataItem(columnElement);

	                that.columnsDataSource.remove(column);
	                that.columnsDataSource.sync();
	            },

	            registerShortcut: function (selector, shortcut, options) {
	                var that = this;

	                that.keyboardManager.registerShortcut(selector, shortcut, options);
	            },

	            enable: function (cardElement, toggle) {
	                cardElement = $(cardElement);

	                cardElement.toggleClass(TaskBoard.styles.disabled, toggle === false);
	                cardElement.attr("aria-disabled", toggle === false);
	            },

	            enableByColumn: function (columnElement, toggle) {
	                var that = this;

	                columnElement = $(columnElement);

	                that.itemsByColumn(columnElement).each(function(index, card){
	                    that.enable(card, toggle);
	                });
	            },

	            readOnly: function (cardElement, toggle) {
	                cardElement = $(cardElement);

	                toggle = toggle !== false;

	                cardElement.find("[" + kendo.attr("command") + "]").toggleClass(TaskBoard.styles.disabled, toggle);
	                cardElement.find("a,button").toggleClass(TaskBoard.styles.disabled, toggle);

	                cardElement.toggleClass(TaskBoard.styles.ignoreDrag, toggle);
	                cardElement.attr("aria-readonly", toggle);
	            },

	            readOnlyByColumn: function (columnElement, toggle) {
	                var that = this;

	                columnElement = $(columnElement);

	                that.itemsByColumn(columnElement).each(function(index, card){
	                    that.readOnly(card, toggle);
	                });
	            },

	            setDataSource: function (dataSource) {
	                var that = this;

	                that.options.dataSource = dataSource;
	                that._dataSource();

	                if (that.options.autoBind) {
	                    that.dataSource.read();
	                }
	            },

	            setColumnsDataSource: function (dataSource) {
	                var that = this;

	                that.options.columns = dataSource;
	                that._columnsDataSource();

	                if (that.options.autoBind) {
	                    that.columnsDataSource.fetch(function(){
	                        that._renderCards(that.dataSource.view());
	                    });
	                }
	            },

	            _getColumn: function (status) {
	                return this._columns[status];
	            },

	            _getColumnByElement: function (columnElement) {
	                var that = this;

	                columnElement = $(columnElement);

	                for (var key in that._columns) {
	                    if (that._columns[key].element[0] === columnElement[0]) {
	                        return that._columns[key];
	                    }
	                }
	            },

	            _openPane: function (options) {
	                var that = this,
	                    pane = new ui.taskboard.panes[options.pane](that, extend({}, that.options, {
	                        states: that._buildStates()
	                    }), options.card, that.resources, options.column),
	                    focusableElement, keyboardManager;

	                if (that.pane) {
	                    that._closePane();
	                }

	                that.pane = pane;
	                that.content.after(that.pane.element);
	                that.content.css("margin-right",
	                    that.pane.element.outerWidth() -
	                    parseInt(that.content.css("paddingRight"), 10));

	                that.pane.bind(ACTION, that.executeCommand.bind(that));

	                that.pane.keyboardManager = keyboardManager = new ui.taskboard.KeyboardManager(that.pane.element);

	                keyboardManager.bind(ACTION, that.executeCommand.bind(that));

	                keyboardManager.registerShortcut("*", {
	                    keyCode: kendo.keys.ESC
	                }, { command: "ClosePaneCommand" });

	                keyboardManager.registerShortcut("*", {
	                    keyCode: kendo.keys.ENTER
	                }, { command: "SaveChangesCommand", options: {
	                    card: that.pane._dataItem
	                } });

	                focusableElement = that.pane.element.find("input");

	                if (!focusableElement.length) {
	                    focusableElement = that.pane.element.find("button");
	                }

	                setTimeout(function () {
	                    focusableElement.eq(0).trigger("focus");
	                }, 0);
	            },

	            _closePane: function () {
	                var that = this;

	                if (that.pane) {
	                    that.pane.keyboardManager.destroy();
	                    that.pane.unbind(ACTION);
	                    that.pane.destroy();
	                    delete that.pane;

	                    that.content.css("margin-right", "");
	                }
	            },

	            _wrapper: function () {
	                var that = this,
	                    options = that.options,
	                    styles = TaskBoard.styles,
	                    headerElm = "<div class='" + styles.header + "'></div>",
	                    contentElm = "<div class='" + styles.content + "'></div>",
	                    colsContainer = "<div class='" + styles.columnsContainer + "'></div>";

	                that.element.addClass(styles.wrapper)
	                    .width(options.width)
	                    .height(options.height)
	                    .attr("role", "application");
	                that.header = $(headerElm).appendTo(that.element);
	                that.content = $(contentElm).appendTo(that.element);
	                that.columnsContainer = $(colsContainer).appendTo(that.content);
	            },

	            _initToolbar: function () {
	                var that = this,
	                    styles = TaskBoard.styles,
	                    options = that.options,
	                    toolbarElm = $("<div class='" + styles.toolbar + "'></div>"),
	                    toolbarOptions = isArray(options.toolbar) ? { items: options.toolbar } : options.toolbar;

	                if (options.toolbar === false) {
	                    return;
	                }

	                toolbarOptions = extend({}, toolbarOptions, {
	                    taskboard: this,
	                    messages: options.messages,
	                    action: that.executeCommand.bind(that),
	                    states: that._buildStates()
	                });

	                that.header.append(toolbarElm);
	                that.toolbar = new ui.taskboard.ToolBar(toolbarElm, toolbarOptions);
	            },

	            _buildStates: function () {
	                var that = this;

	                return {
	                    isEditable: that._isEditable(),
	                    isReorderable: that._isReorderable(),
	                    isSelectable: that._isSelectable(),
	                    isReadOnly: !that._isReorderable() && !that._isEditable(),
	                    isDisabled: !that._isReorderable() && !that._isEditable() && !that._isSelectable(),
	                    isSearchable: that._isSearchable(),
	                    notLocalColumns: !(that.columnsDataSource.transport instanceof kendo.data.LocalTransport),
	                    isRtl: kendo.support.isRtl(that.wrapper)
	                };
	            },

	            _isSearchable: function () {
	                return !!this.options.search;
	            },

	            _isEditable: function () {
	                return !!this.options.editable;
	            },

	            _isReorderable: function () {
	                return !!this.options.reorderable;
	            },

	            _isSelectable: function () {
	                return !!this.options.selectable;
	            },

	            executeCommand: function(args) {
	                var that = this,
	                    commandName = args.command,
	                    commandOptions = extend({ taskboard: this }, isPlainObject(args.options) ? that._extendExecArgs(args.options) : { value: args.options }),
	                    command = ui.taskboard.commands[commandName] && new ui.taskboard.commands[commandName](commandOptions);


	                if(!that.trigger(EXECUTE, args)) {
	                    if (command) {
	                        command.exec();
	                    } else {
	                        window.console.warn(kendo.format("Trying to use {0} command, but such is not available in the kendo.ui.taskboard.commands namespace!", commandName));
	                    }
	                }
	            },

	            _extendExecArgs: function (args) {
	                var that = this,
	                    target = args.draggableEvent ? args.item : args.target,
	                    columnElm, cardElm, columnDataItem, cardDataItem;

	                if (args.card) {
	                    target = that.items().filter(function (idx, elm) {
	                        return $(elm).attr(kendo.attr("uid")) === args.card.get("uid");
	                    });
	                }

	                if(!target || !(target && target.length)) {
	                    return args;
	                }

	                columnElm = args.columnElement || (target.is(DOT + TaskBoard.styles.column) ? target : target.parents(DOT + TaskBoard.styles.column));
	                columnDataItem = that.columnsDataSource.getByUid(columnElm.data(kendo.ns + "uid"));
	                cardElm = target.is(DOT + TaskBoard.styles.card) ? target : target.closest(DOT + TaskBoard.styles.card);
	                cardDataItem = that.dataSource.getByUid(cardElm.data(kendo.ns + "uid"));

	                return extend(args, {
	                    card: cardDataItem,
	                    cardElement: cardElm.length ? cardElm : undefined,
	                    column: columnDataItem,
	                    columnElement: columnElm.length ? columnElm : undefined
	                });
	            },


	            _select: function (card, toggle) {
	                var that = this;

	                if (toggle === null) {
	                    toggle = true;
	                }

	                if(!that.trigger(SELECT, { card: card })) {
	                    that.select(card, toggle);
	                    that.previewCard(card);
	                }
	            },

	            _columnsDataSource: function () {
	                var that = this,
	                    options = that.options,
	                    columnSettings = options.columnSettings,
	                    columnsDataSource = options.columns;

	                columnsDataSource = isArray(columnsDataSource) ? { data: columnsDataSource } : columnsDataSource;

	                if (columnSettings.dataOrderField && !columnsDataSource.sort) {
	                    columnsDataSource.sort = { field: columnSettings.dataOrderField, dir: "asc" };
	                }

	                if (!columnsDataSource.schema) {
	                    var fields = {};

	                    fields[columnSettings.dataStatusField] = { type: "string", defaultValue: function () { return kendo.guid().split("-")[0]; } };
	                    fields[columnSettings.dataTextField] = { type: "string" };

	                    if (columnSettings.dataOrderField) {
	                        fields[columnSettings.dataOrderField] = { type: "number" };
	                    }

	                    columnsDataSource.schema = {
	                        model: {
	                            fields: fields
	                        }
	                    };
	                }

	                if (that.columnsDataSource && that._columnsChangeHandler) {
	                    that.columnsDataSource.unbind(CHANGE, that._columnsChangeHandler);
	                    that.columnsDataSource.unbind(CHANGE, that._columnsErrorHandler);
	                } else {
	                    that._columnsChangeHandler = proxy(that._columnsDataSourceChange, that);
	                    that._columnsErrorHandler = proxy(that._error, that);
	                }

	                that.columnsDataSource = DataSource.create(columnsDataSource)
	                                .bind(CHANGE, that._columnsChangeHandler)
	                                .bind(ERROR, that._columnsErrorHandler);
	            },

	            _columnsDataSourceChange: function (ev) {
	                var that = this,
	                    view = that.columnsDataSource.view(),
	                    columnSettings = extend(true, {}, that.options.columnSettings, {
	                        messages: that.options.messages,
	                        states: that._buildStates(),
	                        sortableIdentifier: that._sortableIdentifier
	                     }),
	                    statusField = columnSettings.dataStatusField;

	                if (ev.action && ev.action !== "sync") {
	                    return;
	                }

	                if (that.trigger(COLUMNSDATABINDING, ev)) {
	                    return;
	                }

	                that._progress(true);

	                that._columns = {};
	                that.columnsContainer.html("");

	                for (var i = 0; i < view.length; i++) {
	                    var data = view[i];
	                    var status = data[statusField] || GENERIC;
	                    var column;

	                    column = that._columns[status] = new ui.taskboard.Column(columnSettings, data);
	                    that.columnsContainer.append(column.element);
	                    column.bind(ACTION, that.executeCommand.bind(that));
	                    column.bind(MOVE, proxy(that._move, that));
	                    column.bind(MOVE_END, proxy(that._moveEnd, that));
	                    column.bind(MOVE_START, proxy(that._moveStart, that));
	                    column.bind(CHANGE, proxy(that._changeOrder, that));
	                    that._tabindex(column.element);
	                }

	                if (ev.action === "sync" || ev.action === undefined) {
	                    that._renderCards(that.dataSource.view());
	                }

	                that._progress(false);
	                that.trigger(COLUMNSDATABOUND, ev);
	            },

	            _move: function (ev) {
	                this.trigger(MOVE, this._extendExecArgs(ev));
	            },

	            _moveEnd: function (ev) {
	                this.trigger(MOVE_END, this._extendExecArgs(ev));
	            },

	            _moveStart: function (ev) {
	                this.trigger(MOVE_START, this._extendExecArgs(ev));
	            },

	            _changeOrder: function (ev) {
	                this.trigger(CHANGE, this._extendExecArgs(ev));
	            },

	            _dataSource: function () {
	                var that = this,
	                    options = that.options,
	                    dataSource = options.dataSource;

	                    dataSource = isArray(dataSource) ? { data: dataSource } : dataSource;

	                if (options.dataOrderField && !dataSource.sort) {
	                    dataSource.sort = { field: options.dataOrderField, dir: "asc" };
	                }

	                if (!dataSource.schema) {
	                    var fields = {};

	                    fields[options.dataStatusField] = { type: "string" };
	                    fields[options.dataTitleField] = { type: "string" };
	                    fields[options.dataDescriptionField] = { type: "string" };
	                    fields[options.dataCategoryField] = { type: "string" };

	                    if (options.dataOrderField) {
	                        fields[options.dataOrderField] = { type: "number" };
	                    }

	                    dataSource.schema = {
	                        model: {
	                            fields: fields
	                        }
	                    };
	                }

	                if (that.dataSource && that._changeHandler) {
	                    that.dataSource.unbind(CHANGE, that._changeHandler);
	                    that.dataSource.unbind(ERROR, that._errorHandler);
	                } else {
	                    that._changeHandler = proxy(that._change, that);
	                    that._errorHandler = proxy(that._error, that);
	                }

	                that.dataSource = DataSource.create(dataSource)
	                                .bind(CHANGE, that._changeHandler);
	            },

	            _change: function (ev) {
	                var that = this;

	                if (ev.action && ev.action !== "sync") {
	                    return;
	                }

	                if (that.trigger(DATABINDING, ev)) {
	                    return;
	                }

	                that._progress(true);

	                that._clearColumns();
	                that._renderCards(that.dataSource.view());
	                that._closePane();

	                that.trigger(DATABOUND, ev);
	                that._progress(false);
	            },

	            _error: function () {
	                this._progress(false);
	            },

	            _renderCards: function (data) {
	                var that = this;

	                for (var i = 0; i < data.length; i++) {
	                    that._renderCard(data[i]);
	                }
	            },

	            _renderCard: function (card) {
	                var that = this,
	                    options = extend({}, that.options, { states: that._buildStates() }),
	                    statusField = options.dataStatusField,
	                    status = card[statusField] || GENERIC;

	                if (status && that._columns[status]) {
	                    card = new ui.taskboard.Card(options, card, that.resources);
	                    that._columns[status].addCard(card.element);
	                    that._tabindex(card.element);
	                }
	            },

	            _clearColumns: function () {
	                var that = this;

	                for (var key in that._columns) {
	                    that._columns[key].empty();
	                }
	            },

	            _initCardMenu: function(){
	                var that = this,
	                    options = that.options,
	                    cardMenuOptions = isArray(options.cardMenu) ? { items: options.cardMenu } : options.cardMenu;

	                cardMenuOptions = extend({}, {
	                    messages: options.messages,
	                    target: that.columnsContainer,
	                    filter: ".k-taskboard-card-menu-button",
	                    action: that.executeCommand.bind(that),
	                    showOn: "click",
	                    alignToAnchor: true,
	                    states: that._buildStates()
	                }, cardMenuOptions);

	                if(options.cardMenu === false) {
	                    return;
	                }

	                that.cardMenu = new ui.taskboard.CardMenu("<ul></ul>", cardMenuOptions);
	            },

	            _initResources: function () {
	                var that = this,
	                    resources = that.options.resources;

	                for (var i = 0; i < resources.length; i++) {
	                    that._addResource(resources[i]);
	                }
	            },

	            _addResource: function (resource) {
	                var that = this;

	                if (!that.resources) {
	                    that.resources = {};
	                }

	                that.resources[resource.field] = {
	                    field: resource.field,
	                    name: resource.name,
	                    title: resource.title || resource.field,
	                    dataTextField: resource.dataTextField || "text",
	                    dataValueField: resource.dataValueField || "value",
	                    dataColorField: resource.dataColorField || "color",
	                    valuePrimitive: resource.valuePrimitive === false ? false : true,
	                    multiple: resource.multiple || false,
	                    dataSource: that._resourceDataSource(resource.dataSource)
	                };
	            },

	            _resourceDataSource: function (resourceDS) {
	                var dataSource = isArray(resourceDS) ? { data: resourceDS } : resourceDS,
	                    dataSourceInstance = kendo.data.DataSource.create(dataSource);

	                return dataSourceInstance;
	            },

	            _progress: function (toggle) {
	                var that = this;

	                kendo.ui.progress(that.element, toggle);
	            },

	            _initKeyboard: function () {
	                var that = this;

	                that.keyboardManager = new ui.taskboard.KeyboardManager(that.element);

	                that.keyboardManager.bind(ACTION, that.executeCommand.bind(that));
	                that._registerShortcuts();
	            },

	            _registerShortcuts: function () {
	                var that = this,
	                    states = that._buildStates();

	                if (states.isEditable) {
	                    that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.column, {
	                        keyCode: kendo.keys.DELETE
	                    }, { command: "DeleteColumnCommand" });

	                    that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.column, {
	                        keyCode: "e",
	                        ctrlKey: true
	                    }, { command: "EditColumnCommand", handler: preventDefault });

	                    that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.column, {
	                        keyCode: "a",
	                        ctrlKey: true
	                    }, { command: "AddCardCommand", handler: preventDefault });

	                    that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.column + " *", {
	                        keyCode: kendo.keys.ESC
	                    }, { command: "CancelEditColumnCommand" });

	                    that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.card, {
	                        keyCode: kendo.keys.DELETE
	                    }, { command: "DeleteCardCommand" });

	                    that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.card, {
	                        keyCode: "e",
	                        ctrlKey: true
	                    }, { command: "EditCardCommand", handler: preventDefault });
	                }

	                if (states.isSelectable) {
	                    that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.card, {
	                        keyCode: kendo.keys.ENTER
	                    }, { command: "SelectCardCommand", handler: preventDefault });
	                }

	                that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.card, {
	                    keyCode: kendo.keys.UP
	                }, { command: "MoveFocusCommand", options: {value: "up"}, handler: preventDefault });

	                that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.card, {
	                    keyCode: kendo.keys.DOWN
	                }, { command: "MoveFocusCommand", options: {value: "down"}, handler: preventDefault });

	                that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.card, {
	                    keyCode: kendo.keys.LEFT
	                }, { command: "MoveFocusCommand", options: {value: "left"}, handler: preventDefault });

	                that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.card, {
	                    keyCode: kendo.keys.RIGHT
	                }, { command: "MoveFocusCommand", options: {value: "right"}, handler: preventDefault });

	                that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.column, {
	                    keyCode: kendo.keys.LEFT
	                }, { command: "MoveFocusCommand", options: {value: "left"}, handler: preventDefault });

	                that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.column, {
	                    keyCode: kendo.keys.RIGHT
	                }, { command: "MoveFocusCommand", options: {value: "right"}, handler: preventDefault });

	                that.keyboardManager.registerShortcut(DOT + TaskBoard.styles.column, {
	                    keyCode: kendo.keys.DOWN
	                }, { command: "MoveFocusCommand", options: {value: "down"}, handler: preventDefault });
	            },

	            destroy: function() {
	                var that = this;

	                if (that._columnsChangeHandler) {
	                    that.columnsDataSource.unbind(CHANGE, that._columnsChangeHandler);
	                    that.columnsDataSource.unbind(CHANGE, that._columnsErrorHandler);
	                }

	                if (that._changeHandler) {
	                    that.dataSource.unbind(CHANGE, that._changeHandler);
	                    that.dataSource.unbind(ERROR, that._errorHandler);
	                }

	                for (var key in that._columns) {
	                    that._columns[key].destroy();
	                }

	                if (that.toolbar) {
	                    that.toolbar.destroy();
	                }

	                if (that.cardMenu) {
	                    that.cardMenu.destroy();
	                }

	                if (that.keyboardManager) {
	                    that.keyboardManager.destroy();
	                }

	                if (that.pane) {
	                    that.closePane();
	                }

	                Widget.fn.destroy.call(that);
	            }
	        });

	        kendo.ui.plugin(TaskBoard);

	        extend(true, TaskBoard, { styles: TaskBoardStyles });

	    })(window.kendo.jQuery);

	    return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1475:
/***/ (function(module, exports) {

	module.exports = require("./taskboard/toolbar");

/***/ }),

/***/ 1476:
/***/ (function(module, exports) {

	module.exports = require("./taskboard/column");

/***/ }),

/***/ 1477:
/***/ (function(module, exports) {

	module.exports = require("./taskboard/card");

/***/ }),

/***/ 1478:
/***/ (function(module, exports) {

	module.exports = require("./taskboard/cardmenu");

/***/ }),

/***/ 1479:
/***/ (function(module, exports) {

	module.exports = require("./taskboard/commands");

/***/ }),

/***/ 1480:
/***/ (function(module, exports) {

	module.exports = require("./taskboard/pane");

/***/ }),

/***/ 1481:
/***/ (function(module, exports) {

	module.exports = require("./taskboard/keyboard");

/***/ })

/******/ });