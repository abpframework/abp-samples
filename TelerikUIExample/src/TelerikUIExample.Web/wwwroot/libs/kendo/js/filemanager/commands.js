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

	__webpack_require__(1034);
	module.exports = __webpack_require__(1034);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	    (function ($, undefined) {
	        var kendo = window.kendo,
	            extend = $.extend,
	            deferred = $.Deferred,
	            proxy = $.proxy,
	            Class = kendo.Class;

	        var Command = Class.extend({
	            init: function (options) {
	                this.options = options;
	                this.filemanager = options.filemanager;
	            }
	        });

	        var CreateFolderCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    filemanager = that.filemanager,
	                    commandStack = filemanager._commandStack,
	                    dataSource = filemanager._viewDataSource || filemanager.dataSource,
	                    removeProxy = proxy(that._remove, that);

	                that._item = dataSource._createNewModel();

	                commandStack.push({ item: that._item.toJSON() }).fail(removeProxy);
	                dataSource.add(that._item);
	            },
	            _remove: function () {
	                var that = this,
	                    filemanager = that.filemanager,
	                    dataSource = filemanager._viewDataSource || filemanager.dataSource;

	                dataSource.pushDestroy(that._item);
	            }
	        });

	        var RenameCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    target = that.options.target,
	                    filemanager = that.filemanager,
	                    commandStack = filemanager._commandStack,
	                    viewItem = filemanager._view.widgetComponent.dataItem(target);

	                if(target && viewItem){
	                    commandStack.push({ target: target, item: viewItem });
	                    that.filemanager._view.edit(target);
	                } else {
	                    that._renameTreeViewItem(target);
	                }
	            },
	            _renameTreeViewItem: function(target){
	                var that = this,
	                    filemanager = that.filemanager,
	                    commandStack = filemanager._commandStack,
	                    uid = target.data("uid"),
	                    item = that.filemanager.treeView.widgetComponent.dataSource.getByUid(uid),
	                    realItem = that.filemanager.dataSource.get(item.id);

	                that.filemanager._prompt({
	                    type: "rename",
	                    defaultInput: realItem.name,
	                    target: target
	                }).done(function(newName){
	                    commandStack.push({ target: target, item: realItem });
	                    realItem.set("name", newName);
	                });
	            }
	        });

	        var DeleteCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    target = that.options.target,
	                    filemanager = that.filemanager,
	                    items = filemanager.getSelected(),
	                    viewItem = that.filemanager._view.widgetComponent.dataItem(target),
	                    itemsToRemove;

	                if(target && target.is(".k-state-selected") && items && items.length) {
	                    itemsToRemove = items;
	                } else if(target && viewItem) {
	                    itemsToRemove = viewItem;
	                } else if(target) {
	                    var uid = target.data("uid");
	                    var item = that.filemanager.treeView.widgetComponent.dataSource.getByUid(uid);
	                    var realItem = that.filemanager.dataSource.get(item.id);

	                    itemsToRemove = realItem;
	                }

	                filemanager._confirm({
	                    type: "delete",
	                    target: target
	                })
	                .done(function () {
	                    that.removeItems(itemsToRemove);
	                });
	            },
	            removeItems: function(items) {
	                var that = this;

	                that._itemsToRemove = Array.isArray(items) ? items : [items];

	                that._removeItem();
	            },
	            _removeItem: function(){
	                var that = this,
	                    filemanager = that.filemanager,
	                    commandStack = filemanager._commandStack,
	                    dataSource = filemanager.dataSource,
	                    itemToRemove = !!that._itemsToRemove.length && that._itemsToRemove.splice(0,1)[0];

	                if (itemToRemove) {
	                    commandStack.push({ item: itemToRemove })
	                        .then(proxy(that._removeItem, that), proxy(that._removeItem, that));

	                    dataSource.remove(itemToRemove);
	                }
	            }
	        });

	        var CopyCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                filemanager = that.filemanager,
	                dataSource = filemanager.dataSource,
	                commandStack = filemanager._commandStack,
	                items = that.options.items,
	                target = dataSource.get(that.options.target),
	                targetDataSource = target.children;

	                for (var i = 0; i < items.length; i++) {
	                    var item = dataSource.get(items[i]).toJSON();
	                    item.fileManagerNewItem = true;
	                    commandStack.push({ item: item, target: target });
	                    targetDataSource.add(item);
	                }
	            }
	        });

	        var MoveCommand = Command.extend({
	            init: function (options) {
	                var that = this;
	                Command.fn.init.call(that, options);
	                that._itemsToRemove = [];
	            },
	            exec: function () {
	                var that = this,
	                    filemanager = that.filemanager,
	                    commandStack = filemanager._commandStack,
	                    dataSource = filemanager.dataSource,
	                    items = that.options.items,
	                    target = dataSource.get(that.options.target),
	                    targetDataSource = target.children,
	                    promises = [];

	                for (var i = 0; i < items.length; i++) {
	                    var item = dataSource.get(items[i]);
	                    var cloning = item.toJSON();
	                    cloning.fileManagerNewItem = true;

	                    var promise = commandStack.push({ item: item, target: target })
	                        .then(proxy(that._delete, that));

	                        promises.push(promise);
	                        targetDataSource.add(cloning);
	                }

	                kendo.whenAll(promises).always(proxy(that._removeItem, that));
	            },
	            _delete: function(data){
	                var that = this;
	                that._itemsToRemove.push(data.item);
	            },
	            _removeItem: function(){
	                var that = this,
	                    filemanager = that.filemanager,
	                    commandStack = filemanager._commandStack,
	                    dataSource = filemanager.dataSource,
	                    itemToRemove = !!that._itemsToRemove.length && that._itemsToRemove.splice(0,1)[0];

	                if (itemToRemove) {
	                    commandStack.push({ item: itemToRemove })
	                        .then(proxy(that._removeItem, that), proxy(that._removeItem, that));

	                    dataSource.remove(itemToRemove);
	                }
	            }
	        });

	        var SortCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    options = that.options,
	                    filemanager = that.filemanager,
	                    sortOptions = filemanager.defaultSortOption;

	                extend(sortOptions, {
	                    dir: options.dir,
	                    field: options.field
	                });

	                filemanager._view.widgetComponent.dataSource.sort([ filemanager.folderSortOption, sortOptions ]);
	            }
	        });

	        var SearchCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    options = that.options,
	                    filemanager = that.filemanager,
	                    filter = {
	                        field: options.field,
	                        operator: options.operator,
	                        value: options.value
	                    };

	                filemanager._view.widgetComponent.dataSource.filter(filter);
	            }
	        });

	        var ChangeViewCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    options = that.options,
	                    filemanager = that.filemanager;

	                filemanager.view(options.value);
	                filemanager.resize(true);
	            }
	        });

	        var OpenDialogCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    filemanager = that.filemanager,
	                    dialog = filemanager[that.options.type];

	                if (dialog) {
	                    dialog.open();
	                } else {
	                    window.console.warn(kendo.format("The {0} dialog is not available!", that.options.type));
	                }
	            }
	        });

	        var TogglePaneCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function() {
	                var that = this,
	                    filemanager = that.filemanager,
	                    pane = filemanager[that.options.type],
	                    resizable = that.getResizable();

	                if (pane) {
	                    pane.toggle();

	                    if (resizable) {
	                        filemanager.wrapper
	                            .find(resizable.options.handle)
	                            .toggle();
	                    }
	                }
	            },
	            getResizable: function() {
	                var that = this,
	                    filemanager = that.filemanager,
	                    type = that.options.type;

	                if (!filemanager._resizeDraggable) {
	                    return;
	                }

	                return filemanager._resizeDraggable[type];
	            }
	        });

	        var CommandStack = Class.extend({
	            init: function(){
	                var that = this;

	                that._stack = {};
	                that._keys = [];
	            },
	            push: function(data){
	                var that = this,
	                    guid = kendo.guid();

	                that._keys.push(guid);
	                that._stack[guid] = {
	                    guid: guid,
	                    data: data,
	                    deferred: deferred()
	                };

	                return that._stack[guid].deferred;
	            },
	            next: function () {
	                var that = this,
	                    key = that.keys().splice(0,1),
	                    nextCommand = that._stack[key];

	                return nextCommand;
	            },
	            resolve: function(command){
	                var that = this;
	                delete that._stack[command.guid];
	                command.deferred.resolve(command.data);
	            },
	            reject: function(command){
	                var that = this;
	                delete that._stack[command.guid];
	                command.deferred.reject(command.data);
	            },
	            keys: function () {
	                return this._keys;
	            },
	            empty: function(){
	                return this.keys().length === 0;
	            }
	        });

	        extend(kendo.ui, {
	            filemanager: {
	                FileManagerCommand: Command,
	                CommandStack: CommandStack,
	                commands: {
	                    CreateFolderCommand: CreateFolderCommand,
	                    RenameCommand: RenameCommand,
	                    DeleteCommand: DeleteCommand,
	                    MoveCommand: MoveCommand,
	                    CopyCommand: CopyCommand,
	                    SortCommand: SortCommand,
	                    SearchCommand: SearchCommand,
	                    ChangeViewCommand: ChangeViewCommand,
	                    OpenDialogCommand: OpenDialogCommand,
	                    TogglePaneCommand: TogglePaneCommand
	                }
	            }
	        });

	    })(window.kendo.jQuery);

	    return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });