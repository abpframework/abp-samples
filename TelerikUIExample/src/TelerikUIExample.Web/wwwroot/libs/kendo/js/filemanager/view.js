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

	__webpack_require__(1041);
	module.exports = __webpack_require__(1041);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 965:
/***/ (function(module, exports) {

	module.exports = require("../kendo.treeview");

/***/ }),

/***/ 1041:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1042), __webpack_require__(965)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {

	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Observable = kendo.Observable,
	        extend = $.extend,
	        proxy = $.proxy,
	        keys = kendo.keys,

	        NAVIGATE = "navigate",
	        SELECT = "select",
	        EXPAND = "expand",
	        CHANGE = "change",
	        OPEN = "open",
	        LOAD = "load",
	        KEYDOWN = "keydown",
	        KEYDOWNACTION = "keydownAction",

	        NS = ".kendoFileManagerViewComponent",

	        fileManagerDraggables = [],
	        fileManagerDragOrigin = null;

	    var registerViewComponent = function(componentName, component) {
	        ui.filemanager.ViewComponents[componentName] = component;
	    };

	    var getViewComponent = function(componentName) {
	        return ui.filemanager.ViewComponents[componentName] || null;
	    };

	    var Component = Observable.extend({
	        init: function(widget, element, options) {
	            var that = this;

	            that.element = element;
	            that.options = options;

	            if(widget) {
	                that.widgetComponent = new widget(element, options);
	            } else {
	                throw new Error("The widget for the ViewComponent is not available! Please add the corresponding scripts!");
	            }

	            Observable.fn.init.call(that);
	        },

	        _bindEvents: function(){
	            this.widgetComponent.bind("dataBinding", proxy(this._binding, this));
	            this.widgetComponent.bind("dataBound", proxy(this._bound, this));
	        },

	        _binding: function(ev){
	            if(this.trigger("dataBinding", ev)) {
	                ev.preventDefault();
	            }
	        },

	        _bound: function(){
	            this.trigger("dataBound");
	        },

	        _setDSOptions: function (options, dataSourceOptions) {
	            if(!options.dataSource && dataSourceOptions) {
	                options.dataSource = dataSourceOptions;
	            }
	        },

	        _initDragAndDrop: function (element, filter) {
	            var that = this;

	            filter = filter || that.options.dropFilter;
	            element = element || that.element;

	            that.draggable = element.kendoDraggable({
	                filter: filter,
	                hint: proxy(that._hint, that),
	                cursorOffset: { top: -10, left: -50 },
	                holdToDrag: true,
	                ignore: "input, .k-focusable",
	                hold: proxy(that._hold, that)
	            }).data("kendoDraggable");

	            that.draggable.userEvents.minHold = 150;

	            that.droptarget = element.kendoDropTargetArea({
	                filter: filter,
	                drop: proxy(that._onDrop, that),
	                dragenter: function(ev){
	                    ev.dropTarget.addClass("k-filemanager-drop-target");
	                },
	                dragleave: function(ev){
	                    ev.dropTarget.removeClass("k-filemanager-drop-target");
	                }
	            }).data("kendoDraggable");
	        },

	        _hold: function (ev){
	            var that = this,
	                target = ev.currentTarget;

	            if(!target.is(".k-state-selected")) {
	                if(that.widgetComponent.selectable) {
	                    that.widgetComponent.selectable.clear();
	                }
	                that.widgetComponent.select(target);
	            }

	            if(that.widgetComponent.selectable) {
	                that.widgetComponent.selectable.userEvents.cancel();
	            }
	        },

	        _hint: function(target){
	            var that = this,
	                item = that.widgetComponent.dataItem(target),
	                selectedItems = that.widgetComponent.select();

	            fileManagerDragOrigin = that.widgetComponent;
	            fileManagerDraggables = selectedItems;

	            if(selectedItems.length > 1) {
	                return kendo.format("<div class='k-filemanager-drag-hint'><span class='k-icon k-i-{0}'></span> <span>{1} {2}</span></div>", "file", selectedItems.length, that.options.messages.items);
	            }

	            return kendo.format("<div class='k-filemanager-drag-hint'><span class='k-icon k-i-{0}'></span> <span>{1}</span></div>", (item.isDirectory ? "folder" : "file"), item.name);
	        },

	        _onDrop: function (ev){
	            var that = this,
	                target = that.widgetComponent.dataItem(ev.dropTarget),
	                targetId = target.id,
	                itemIds = [];

	            if(!target.isDirectory) {
	                return;
	            }

	            for (var i = 0; i < fileManagerDraggables.length; i++) {
	                var id = fileManagerDragOrigin.dataItem(fileManagerDraggables[i]).id;
	                itemIds.push(id);
	            }

	            this.trigger("drop",{target: targetId, items: itemIds});
	        },

	        getSelected: function(){
	            throw new Error("Not Implemented!");
	        },

	        refresh: function (dataSource) {
	            this.widgetComponent.setDataSource(dataSource);
	        },

	        destroy: function() {
	            kendo.destroy(this.element);
	        }
	    });

	    extend(kendo.ui.filemanager, {
	            ViewComponent: Component,
	            ViewComponents: {},
	            registerViewComponent: registerViewComponent,
	            getViewComponent: getViewComponent
	        }
	    );

	    var ListView = Component.extend({
	        init: function(element, options, explicitOptions) {
	            var that = this,
	                dataSourceOptions = explicitOptions.dataSource,
	                messages = explicitOptions.messages; // jshint ignore:line

	            options = extend({}, that.defaultOptions, options, {
	                messages: messages
	            });

	            that._setDSOptions(options, dataSourceOptions);
	            options.kendoKeydown = options.kendoKeydown || proxy(that._kendoKeydown , that);

	            Component.fn.init.call(this, ui.ListView, element, options);

	            that.listView = that.widgetComponent;
	            that._bindEvents();

	            if(explicitOptions.draggable !== false && !dataSourceOptions.isLocalBinding) {
	                that._initDragAndDrop();
	            }
	        },

	        defaultOptions: {
	            layout: "flex",
	            flex: {
	                direction: "row",
	                wrap: "wrap"
	            },
	            selectable: kendo.support.mobileOS ? "row" : "multiple",
	            template: "<div class='k-listview-item' title='#:name##:extension#'>" +
	                            "<div class='k-file-preview'><span class='k-file-icon k-icon k-i-#= !isDirectory ? kendo.getFileGroup(extension, true) : 'folder' #'></span></div>" +
	                            "<div class='k-file-name file-name'>#:name##:extension#</div>" +
	                      "</div>",
	            editTemplate: "<div class='k-listview-item'>" +
	                                "<div class='k-file-preview'><span class='k-file-icon k-icon k-i-#= !isDirectory ? kendo.getFileGroup(extension, true) : 'folder' #'></span></div>" +
	                                "<div class='k-file-name'><span class='k-textbox k-input k-input-md k-rounded-md k-input-solid'><input type='text' class='k-input-inner' data-bind='value:name' name='name' required='required' /><span></div>" +
	                          "</div>",
	            dropFilter: ".k-listview-item",
	            navigatable: true
	        },

	        _bindEvents: function (){
	            var that = this,
	                listView = that.listView;

	            listView.bind(CHANGE, proxy(that._select, that));
	            listView.element.on("dblclick" + NS, proxy(that._dblClick, that));
	            listView.element.on("mousedown" + NS, ".k-listview-item:not(.k-edit-item)", proxy(that._mousedown, that));
	            listView.element.on(KEYDOWN + NS, ".k-edit-item", proxy(that._keydown, that));
	            listView.element.on(KEYDOWN + NS, proxy(that._keydownAction, that));

	            listView.bind("edit", function(ev){
	                var sender = ev.sender;
	                var input = ev.item.find("input");

	                input.on("blur", function(){
	                    var isDirty = sender._modelFromElement(sender.editable.element).dirty;
	                    sender._closeEditable();
	                    if(!isDirty) {
	                        that.trigger("cancel");
	                    }
	                });
	            });

	            listView.bind("cancel", function(){
	                that.trigger("cancel");
	            });

	            Component.fn._bindEvents.call(this);
	        },

	        _select: function () {
	            var that = this,
	                dataItems = that.getSelected();

	            that.trigger(SELECT, {entries: dataItems});
	        },

	        _keydown: function(ev){
	            var that = this;
	            if (ev.keyCode === kendo.keys.ESC) {
	                that.listView._closeEditable();
	                that.trigger("cancel");
	            }
	        },

	        _keydownAction: function(ev) {
	            var that = this,
	                target = $(ev.target).find(".k-state-focused");

	            if(target.length && !target.is(".k-edit-item")) {
	                that.trigger(KEYDOWNACTION, { target: target, keyCode: ev.keyCode });
	            }
	        },

	        _mousedown: function(ev){
	            var that = this,
	                node = $(ev.target).closest(".k-listview-item");

	            if(ev.which === 3 && !node.is(".k-state-selected")) {
	                that.listView.selectable.clear();
	                that.listView.select(node);
	            }
	        },

	        _kendoKeydown : function (ev) {
	            var that = this;

	            if(ev.keyCode === keys.ENTER && !ev.preventKendoKeydown){
	                that._handleEnterKey(ev);
	            }
	        },

	        _handleEnterKey: function(ev){
	            var that = this,
	                target = $(ev.target),
	                node = that.listView.current();

	            if (that.widgetComponent.editable && target.is("input")) {
	                // Force blur to update item and close editable (cross browser)
	                target.trigger("blur");
	            } else if(!that.widgetComponent.editable) {
	                that._triggerOpen(node);
	            }

	            ev.preventKendoKeydown = true;
	        },

	        _dblClick: function(ev){
	            var that = this,
	                node = $(ev.target).closest(".k-listview-item");

	            that._triggerOpen(node);
	        },

	        _triggerOpen: function (node){
	            var that = this;

	            if(node.is(".k-edit-item")) {
	                return;
	            }

	            var item = that.listView.dataItem(node);

	            if(item) {
	                that.trigger(OPEN, { entry: item });
	            }
	        },

	        addFolder: function () {
	            this.listView.add();
	        },

	        edit: function (target) {
	            var that = this,
	                selected = that.listView.select();

	            that.listView.edit(target || selected);
	        },

	        getSelected: function(){
	            var that = this,
	            items = that.listView.select(),
	            dataItems = [];

	            for (var i = 0; i < items.length; i++) {
	                var item = that.listView.dataItem(items[i]);

	                if (item) {
	                    dataItems.push(item);
	                }
	            }

	            return dataItems;
	        },

	        destroy: function() {
	            this.listView.element.off(NS);
	            Component.fn.destroy.call(this);
	        }
	    });

	    ui.filemanager.registerViewComponent("list", ListView);

	    var TreeView = Component.extend({
	        init: function(element, options, explicitOptions) {
	            var that = this,
	                messages = explicitOptions.messages; // jshint ignore:line

	            options = extend({}, that.defaultOptions, options, {
	                messages: messages
	            });

	            Component.fn.init.call(this, ui.TreeView, element, options);

	            that.treeView = that.widgetComponent;
	            that._bindEvents();

	            if(explicitOptions.draggable !== false && !explicitOptions.isLocalBinding) {
	                that._initDragAndDrop();
	            }
	        },

	        defaultOptions: {
	            dataTextField: "name",
	            dropFilter: ".k-item"
	        },

	        _refreshDataSource: function(ev){
	            var that = this,
	                treeView = that.treeView,
	                action = ev.action,
	                node = ev.node,
	                parentNode = null,
	                items = ev.items.filter(function(item){
	                    return item.isDirectory;
	                }).map(function(item){
	                    return extend({}, item.toJSON(), {
	                        id: item.id || kendo.guid(),
	                        hasChildren: item.hasChildren,
	                        items: []
	                    });
	                });

	            if (node) {
	                parentNode = treeView.findByUid(treeView.dataSource.get(node.id).uid);
	                treeView._progress(parentNode, false);
	            }

	            if(!items.length) {
	                return;
	            }

	            if (action == "itemloaded" || (parentNode && action === "sync")) {
	                parentNode.find(".k-item").each(function(index, item){
	                    treeView.remove(item);
	                });
	                treeView.append(items, parentNode);

	                if (that._shouldFocus) {
	                    treeView.current(parentNode);
	                    treeView.focus();
	                }
	            } else if (action == "remove") {
	                this._remove(items[0].id);
	            } else if (action == "itemchange") {
	                var existingItem = treeView.dataSource.get(items[0].id);

	                if(existingItem) {
	                    existingItem.set(ev.field, items[0][ev.field]);
	                } else {
	                    treeView.append(items[0], parentNode);
	                }
	            } else if (!treeView.dataSource.data().length) {
	                treeView.append(items);
	            } else if (action === "sync" || (action === undefined && !parentNode)) {
	                treeView.items().each(function(index, item){
	                    treeView.remove(item);
	                });
	                treeView.append(items);

	                if (that._shouldFocus) {
	                    treeView.current(treeView._nextVisible($()));
	                    treeView.focus();
	                }
	            }

	        },

	        _remove: function(id){
	            var that = this,
	                treeView = that.treeView,
	                dataSource = treeView.dataSource,
	                item = dataSource.get(id),
	                node;

	            if(item) {
	                node = treeView.findByUid(item.uid);
	                treeView.remove(node);
	            }
	        },

	        _bindEvents: function () {
	            var that = this;

	            that.treeView.bind(SELECT, proxy(that._navigate, that));
	            that.treeView.bind(EXPAND, proxy(that._expand, that));
	            that.treeView.element.on(KEYDOWN, proxy(that._keydownAction, that));
	        },

	        _keydownAction: function (ev) {
	            var that = this,
	                target = $(ev.target).find(".k-focus").closest(".k-item");

	            that.trigger(KEYDOWNACTION, { target: target, keyCode: ev.keyCode });
	        },

	        _expand: function (ev) {
	            var that = this,
	                treeView = that.treeView,
	                entry = treeView.dataItem(ev.node);

	            ev.preventDefault();
	            that.trigger(LOAD, { entryId: entry.id });
	        },

	        _navigate: function (ev) {
	            var that= this,
	                node = ev.node,
	                entry = that.treeView.dataItem(node),
	                path = entry.id;

	            ev.preventDefault();

	            that.trigger(NAVIGATE, {path: path, entry: entry.toJSON()});
	        },

	        _hold: $.noop,

	        getSelected: function () {
	            var that = this,
	                selectedItem = that.treeView.element.find(".k-selected").closest(".k-item"),
	                item = that.treeView.dataItem(selectedItem);

	            return item;
	        },

	        refresh: function (id) {
	            var that = this,
	                treeView = that.treeView,
	                entry = treeView.dataSource.get(id),
	                node = entry && treeView.findByUid(entry.uid);

	            if(entry && node) {
	                treeView.element.find(".k-selected").removeClass("k-selected");
	                node.find("> div .k-in").removeClass("k-hover").addClass("k-selected");
	            }
	        },

	        reload: function () {
	            this.treeView.dataSource.read();
	        }
	    });

	    ui.filemanager.registerViewComponent("tree", TreeView);

	    if(kendo.ui.Grid) {
	        var Grid = Component.extend({
	            init: function(element, options, explicitOptions) {
	                var that = this,
	                    dataSourceOptions = explicitOptions.dataSource,
	                    messages = explicitOptions.messages;

	                options = extend({}, that.defaultOptions, options, {
	                    messages: messages
	                });

	                that._setDSOptions(options, dataSourceOptions);
	                that._setupColumns(options, messages);
	                options.kendoKeydown = options.kendoKeydown || proxy(that._kendoKeydown , that);

	                Component.fn.init.call(this, ui.Grid, element, options);

	                that.grid = that.widgetComponent;
	                that._bindEvents();

	                if(explicitOptions.draggable !== false && !dataSourceOptions.isLocalBinding) {
	                    that._initDragAndDrop();
	                }
	            },

	            defaultOptions: {
	                selectable: kendo.support.mobileOS ? "row" : "multiple",
	                editable: {
	                    mode: "inline",
	                    confirmation: false
	                },
	                sortable: true,
	                dropFilter: "tr:not(.k-grid-edit-row)",
	                navigatable: true
	            },

	            _setupColumns: function (options, messages) {
	                if(!options.columns) {
	                    options.columns = [
	                        { field: "name", title: messages.nameField || "Name", template: function(item) {
	                            var icon = !item.isDirectory ? kendo.getFileGroup(item.extension, true) : "folder";

	                            var template = "<div class='file-group-icon'>" +
	                                                "<span class='k-icon k-i-" + icon + "'></span>" +
	                                            "</div>" +
	                                            "<div class='file-name'>" + kendo.htmlEncode(item.name + item.extension) + "<div>";

	                            return template;
	                        }},
	                        { field: "created", title: messages.dateCreatedField , format: "{0:G}" },
	                        { field: "size", title: messages.sizeField, template: function(item){
	                            if(item.size > 0) {
	                                return kendo.getFileSizeMessage(item.size);
	                            } else {
	                                return "";
	                            }
	                        } }
	                    ];
	                }
	            },

	            _bindEvents: function (){
	                var that = this,
	                    grid = that.grid;

	                grid.bind(CHANGE, proxy(that._select, that));
	                grid.table.on("dblclick" + NS, proxy(that._dblClick, that));
	                grid.table.on("mousedown" + NS, "tr:not(.k-grid-edit-row)", proxy(that._mousedown, that));
	                grid.table.on(KEYDOWN + NS, ".k-grid-edit-row", proxy(that._keydown, that));
	                grid.table.on(KEYDOWN + NS, proxy(that._keydownAction, that));

	                grid.bind("edit", function(){
	                    that._toggleFocusable(true);
	                });

	                grid.bind("cancel", function(){
	                    that.trigger("cancel");
	                });

	                grid.saveRow = $.noop;

	                Component.fn._bindEvents.call(this);
	            },

	            _kendoKeydown : function(ev){
	                var that = this,
	                    current = that.grid.current(),
	                    node = current ? current.closest("tr[data-uid]") : null;

	                if(node && ev.keyCode === keys.ENTER && !ev.preventKendoKeydown){
	                    that._triggerOpen(node);
	                    ev.preventKendoKeydown = true;
	                }

	                if(ev.keyCode === keys.F2) {
	                    ev.preventKendoKeydown = true;
	                }
	            },

	            _keydownAction: function(ev) {
	                var that = this,
	                    target = $(ev.target).find(".k-state-focused").closest("tr");

	                if(target.length && !target.is(".k-grid-edit-row")) {
	                    that.trigger(KEYDOWNACTION, { target: target, keyCode: ev.keyCode });
	                }
	            },

	            _keydown: function(ev){
	                var that = this,
	                    grid = that.grid;

	                if (!$(ev.target).closest(".k-grid-edit-row").length) {
	                    return;
	                }

	                if(ev.keyCode === kendo.keys.ENTER) {
	                    setTimeout(function(){
	                        var editorContainer = that.grid._editContainer || $();

	                        // force blur event for inputs
	                        editorContainer.find("input").trigger("blur");

	                        that._closeEditable();
	                    });

	                    that._tryCancel();
	                }

	                if (ev.keyCode === kendo.keys.ESC) {
	                    grid.cancelChanges();
	                    that.trigger("cancel");
	                }
	            },

	            _mousedown: function(ev){
	                var that = this,
	                    node = $(ev.target).closest("tr[data-uid]");

	                if(ev.which === 1 && that.grid.editable) {
	                    setTimeout(function(){
	                        that._closeEditable();
	                    });

	                    that._tryCancel();
	                }

	                if(ev.which === 3 && !node.is(".k-state-selected")) {
	                    that.grid.selectable.clear();
	                    that.grid.select(node);
	                }
	            },

	            _tryCancel: function() {
	                var that = this,
	                    grid = that.grid,
	                    container;

	                if (grid.editable) {
	                    container = grid._editContainer;
	                    if (!container.find("input").val()) {
	                        grid.cancelChanges();
	                    }
	                }

	                setTimeout(function() {
	                    that._toggleFocusable(false);
	                });

	            },

	            _toggleFocusable: function(state) {
	                var that = this,
	                    grid = that.grid;

	                grid.table.find("tr,td").children().addBack().toggleClass("k-focusable", state);
	            },

	            _closeEditable: function(){
	                var that = this,
	                    container;

	                if(that.grid.editable && !that.grid.editable.options.model.dirty){
	                    container = that.grid._editContainer;
	                    that.grid._destroyEditable();
	                    that.grid._displayRow(container);
	                    that.trigger("cancel");
	                }
	            },

	            _select: function () {
	                var that = this,
	                    dataItems = that.getSelected();

	                that.trigger(SELECT, {entries: dataItems});
	            },

	            _dblClick: function(ev){
	                var that = this,
	                    node = $(ev.target).closest("tr[data-uid]");

	                that._triggerOpen(node);
	            },

	            _triggerOpen: function (node) {
	                var that = this;

	                if(node.is(".k-grid-edit-row")) {
	                    return;
	                }

	                var item = that.grid.dataItem(node);

	                if(item) {
	                    that.trigger(OPEN, { entry: item });
	                }
	            },

	            getSelected: function(){
	                var that = this,
	                items = that.grid.select(),
	                dataItems = [];

	                for (var i = 0; i < items.length; i++) {
	                    dataItems.push(that.grid.dataItem(items[i]));
	                }

	                return dataItems;
	            },

	            addFolder: function () {
	                this.grid.addRow();
	            },

	            edit: function (target) {
	                var that = this,
	                    selected = that.grid.select();

	                that.grid.editRow(target || selected);
	            },

	            destroy: function(){
	                this.grid.table.off(NS);
	                this.grid.element.off(NS);
	                Component.fn.destroy.call(this);
	            }
	        });

	        ui.filemanager.registerViewComponent("grid", Grid);
	    }

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1042:
/***/ (function(module, exports) {

	module.exports = require("../kendo.listview");

/***/ })

/******/ });