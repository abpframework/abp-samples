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

	module.exports = __webpack_require__(1374);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1124:
/***/ (function(module, exports) {

	module.exports = require("./kendo.menu");

/***/ }),

/***/ 1224:
/***/ (function(module, exports) {

	module.exports = require("./kendo.window");

/***/ }),

/***/ 1267:
/***/ (function(module, exports) {

	module.exports = require("./kendo.upload");

/***/ }),

/***/ 1275:
/***/ (function(module, exports) {

	module.exports = require("./kendo.dialog");

/***/ }),

/***/ 1374:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1375), __webpack_require__(1376), __webpack_require__(1124), __webpack_require__(1275), __webpack_require__(1377), __webpack_require__(1267), __webpack_require__(1224) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "orgchart",
	    name: "OrgChart",
	    category: "web",
	    description: "The OrgChart widget displays hierarchical organizational structure.",
	    depends: [ "core", "menu", "dialog", "form", "upload", "window" ]
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        DataBoundWidget = kendo.ui.DataBoundWidget,
	        OrgChartDataSource = kendo.data.OrgChartDataSource,
	        ContextMenu = kendo.ui.ContextMenu,

	        extend = $.extend,
	        proxy = $.proxy,
	        isArray = Array.isArray,

	        NS = ".kendoOrgChart",

	        CANCEL = "cancel",
	        CHANGE = "change",
	        CLICK = "click",
	        COLLAPSE = "collapse",
	        CREATE = "create",
	        DATABINDING = "dataBinding",
	        DATABOUND = "dataBound",
	        DELETE = "delete",
	        DESTROY = "destroy",
	        EDIT = "edit",
	        ERROR = "error",
	        EXPAND = "expand",
	        FOCUS = "focus",
	        KENDOKEYDOWN = "kendoKeydown",
	        MENU = "menu",
	        PROGRESS = "progress",
	        SAVE = "save",
	        SELECT = "select",
	        REQUEST_START = "requestStart",

	        DOT = ".",
	        SPACE = " ",
	        COMMA = ",",
	        ID = "id",
	        UID = "uid",
	        ACTION = "action";

	    var ORGCHART_STYLES = {
	        wrapper: "k-orgchart",
	        container: "k-orgchart-container",
	        line: "k-orgchart-line",
	        lineVertical: "k-orgchart-line-v",
	        lineHorizontal: "k-orgchart-line-h",
	        lineVerticalTop: "k-orgchart-line-v-top",
	        group: "k-orgchart-group",
	        groupVertical: "k-orgchart-group-v",
	        groupHorizontal: "k-orgchart-group-h",
	        nodesGroup: "k-orgchart-node-group",
	        nodesGroupContainer: "k-orgchart-node-group-container",
	        nodeContainer: "k-orgchart-node-container",
	        node: "k-orgchart-node",
	        card: "k-orgchart-card",
	        cardMenu: "k-orgchart-card-menu",
	        button: "k-orgchart-button",
	        focused: "k-state-focus",
	        plusIcon: "k-i-plus",
	        menuItem: "k-item",
	        avatarPreview: "k-orgchart-avatar-preview",
	        update: "k-orgchart-update",
	        cancel: "k-orgchart-cancel",
	        vstack: "k-vstack",
	        hstack: "k-hstack",
	        closeButton: "k-i-close"
	    };

	    var MENU_ITEMS = {
	        edit: "<li data-action='edit'>#: edit #</li>",
	        create: "<li data-action='create'>#: create #</li>",
	        destroy: "<li data-action='destroy'>#: destroy #</li>"
	    };

	    var GROUP_HEADER_TEMPLATE = '<div>' +
	        '<div class="k-orgchart-node-group-title">#: value #</div>' +
	        '<div class="k-orgchart-node-group-subtitle">#: field #</div>' +
	    '</div>';

	    var AVATAR_PREVIEW_TEMPLATE = '<div class="k-orgchart-avatar-preview k-hstack k-align-items-center k-pb-lg">' +
	        '<div class="k-avatar k-avatar-solid-primary k-avatar-solid k-avatar-lg k-rounded-full">' +
	            '<span class="k-avatar-image">' +
	                '<img src="#: avatar #" alt="#: name #">' +
	            '</span>' +
	        '</div>' +
	        '<div class="k-px-md">#: fileName #</div>' +
	        '<button class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button" aria-label="#: destroy #">' +
	            '<span class="k-button-icon k-icon k-i-delete"></span>' +
	        '</button>' +
	    '</div>';

	    var EDITOR_BUTTONS_TEMPLATE = '<div class="k-edit-buttons">' +
	        '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-orgchart-cancel">' +
	            '<span class="k-button-text">#: cancel #</span>' +
	        '</button>' +
	        '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary k-orgchart-update">' +
	            '<span class="k-button-text">#: save #</span>' +
	        '</button>' +
	    '</div>';

	    var OrgChart = DataBoundWidget.extend({
	        init: function(element, options, events) {
	            if (isArray(options)) {
	                options = { dataSource: options };
	            }

	            options = options || {};

	            DataBoundWidget.fn.init.call(this, element, options);

	            if (events) {
	                this._events = events;
	            }

	            this._wrapper();
	            this._view();
	            this._dataSource();
	            this._contextMenu();

	            if (this.options.autoBind) {
	                this.dataSource.fetch();
	            }

	            kendo.notify(this);
	        },

	        options: {
	            name: "OrgChart",
	            autoBind: true,
	            cardsColors: null,
	            dataSource: {},
	            editable: {
	                create: true,
	                destroy: true,
	                fields: true,
	                form: {
	                    buttonsTemplate: "",
	                    orientation: "vertical"
	                },
	                parent: true
	            },
	            groupField: null,
	            groupHeaderTemplate: GROUP_HEADER_TEMPLATE,
	            template: null,
	            messages: {
	                label: "Org Chart",
	                edit: "Edit",
	                create: "Create",
	                destroy: "Delete",
	                destroyContent: "Are you sure you want to delete this item and all its children?",
	                destroyTitle: "Delete item",
	                cancel: "Cancel",
	                save: "Save",
	                menuLabel: "Edit menu",
	                uploadAvatar: "Upload new avatar",
	                parent: "Parent",
	                name: "Name",
	                title: "Title",
	                none: "--None--",
	                expand: "expand",
	                collapse: "collapse"
	            }
	        },

	        events: [
	            CANCEL,
	            CHANGE,
	            COLLAPSE,
	            CREATE,
	            DATABINDING,
	            DATABOUND,
	            DELETE,
	            EDIT,
	            EXPAND,
	            KENDOKEYDOWN,
	            SAVE,
	            SELECT
	         ],

	        destroy: function() {
	            if(this._menu) {
	                this._menu.destroy();
	            }
	            if(this._editWindow) {
	                this._editWindow.destroy();
	            }
	            if(this._confirmDestroy) {
	                this._confirmDestroy.destroy();
	            }

	            this.view.destroy();

	            DataBoundWidget.fn.destroy.call(this);
	            this.wrapper.off(NS);
	        },

	        setDataSource: function(dataSource) {
	            this.options.dataSource = dataSource;
	            this._dataSource();

	            if (this.options.autoBind) {
	                dataSource.fetch();
	            }
	        },

	        setOptions: function(options) {
	            var that = this;

	            DataBoundWidget.fn.setOptions.call(that, options);
	        },

	        append: function(item, parent) {
	            var that = this,
	                $parent = that.view.jqueryItemElement(parent),
	                parentItem = that.dataItem($parent);

	            if(!$parent || !parentItem) {
	                return;
	            }

	            if(!parentItem.loaded()) {
	                that.dataSource.read({ id: parentItem.id })
	                    .then(function() {
	                        that.dataSource.add(extend({}, item, { parentId: parentItem.id }));
	                        that.dataSource.sync();
	                    });
	            } else {
	                that.dataSource.add(extend({}, item, { parentId: parentItem.id }));
	                that.dataSource.sync();
	            }
	        },

	        cancelChanges: function() {
	            if(this.dataSource.hasChanges()) {
	                this.dataSource.cancelChanges();
	            }
	        },

	        collapse: function(item) {
	            return this.view.collapse(item);
	        },

	        dataItem: function(item) {
	            var $item = this.view.jqueryItemElement(item);

	            if(!$item || !$item.data(UID)) {
	                return;
	            }

	            return this.dataSource.getByUid($item.data(UID));
	        },

	        delete: function(item) {
	            var $item = this.view.jqueryItemElement(item);

	            if(!$item) {
	                return;
	            }

	            this.dataSource.remove(this.dataItem($item));
	            this.dataSource.sync();
	        },

	        edit: function(item) {
	            var $item = this.view.jqueryItemElement(item),
	                dataItem = this.dataItem($item);

	            if(!$item || !dataItem) {
	                return;
	            }

	            this._edit(dataItem);
	        },

	        expand: function(item) {
	            return this.view.expand(item);
	        },

	        getCollapsedNodes: function() {
	            return this.wrapper.find("[aria-expanded='false']");
	        },

	        items: function() {
	            return this.wrapper.find(DOT + ORGCHART_STYLES.card);
	        },

	        parent: function(item) {
	            var $item = this.view.jqueryItemElement(item),
	                id;

	            if(!$item) {
	                return;
	            }

	            id = $item.closest(DOT + ORGCHART_STYLES.group).attr(ID);

	            return this.wrapper.find("[aria-owns='" + id + "']");
	        },

	        saveChanges: function() {
	            this.dataSource.sync();
	        },

	        select: function(item) {
	            var $item = this.view._getToSelect(item);

	            if(!$item) {
	                return;
	            } else {
	                return this.view.select($item);
	            }
	        },

	        _avatarPreview: function(item, fileName) {
	            var form = this._form,
	                avatar = item.avatar,
	                avatarRemove = function() {
	                    formWrapper.find(DOT + ORGCHART_STYLES.avatarPreview).remove();
	                    item.set("avatar", null);
	                },
	                formWrapper, data;

	            if(!form) {
	                return;
	            }

	            if (!fileName) {
	                fileName = avatar.split('\\').pop().split('/').pop();

	                if (!fileName || fileName.indexOf('.') == -1) {
	                    fileName = item.name;
	                }
	            }

	            data = {
	                name: item.name,
	                avatar: avatar,
	                fileName: fileName,
	                destroy: this.options.messages.destroy
	            };

	            formWrapper = form.wrapper;
	            formWrapper.find(DOT + ORGCHART_STYLES.avatarPreview).remove();

	            formWrapper.find('[type="file"]').closest(DOT + "k-form-field").prepend(kendo.template(AVATAR_PREVIEW_TEMPLATE)(data));
	            formWrapper.find(DOT + ORGCHART_STYLES.avatarPreview + SPACE + DOT + "k-button").on(CLICK, avatarRemove);
	        },

	        _contextMenu: function() {
	            var options = this.options,
	                editable = options.editable,
	                messages = options.messages,
	                menuOptions = {
	                    target: this.wrapper,
	                    filter: DOT + ORGCHART_STYLES.cardMenu,
	                    select: this._onMenuItemClick.bind(this),
	                    activate: this._onMenuOpen.bind(this),
	                    deactivate: this._onMenuClose.bind(this),
	                    showOn: "click",
	                    animation: false
	                },
	                menuElement;

	            if(editable === true ||
	                (editable !== false &&
	                    (editable.create || editable.destroy || editable.fields || editable.parent))) {
	                        menuElement = "<ul>";

	                        if(editable === true) {
	                            menuElement += MENU_ITEMS.edit;
	                            menuElement += MENU_ITEMS.create;
	                            menuElement += MENU_ITEMS.destroy;
	                        } else {
	                            if (editable.fields || editable.parent) {
	                                menuElement += MENU_ITEMS.edit;
	                            }
	                            if (editable.create) {
	                                menuElement += MENU_ITEMS.create;
	                            }
	                            if (editable.destroy) {
	                                menuElement += MENU_ITEMS.destroy;
	                            }
	                        }

	                        menuElement = kendo.template(menuElement)(messages);

	                        this._menu = new ContextMenu(menuElement, menuOptions);
	                    }
	        },

	        _dataSource: function() {
	            var ds = this.dataSource,
	                dsOptions = this.options.dataSource;

	            if (ds) {
	                ds.unbind(CHANGE, this._dataSourceChangeHandler);
	                ds.unbind(ERROR, this._errorHandler);
	                ds.unbind(PROGRESS, this._progressHandler);
	                ds.unbind(REQUEST_START, this._requestStartHandler);
	            }

	            this._dataSourceChangeHandler = proxy(this._onDataSourceChange, this);
	            this._errorHandler = proxy(this._onDataSourceError, this);
	            this._progressHandler = proxy(this._progress, this);
	            this._requestStartHandler = proxy(this._onDataSourceRequestStart, this);

	            ds = this.dataSource = OrgChartDataSource.create(dsOptions);

	            ds.bind(CHANGE, this._dataSourceChangeHandler);
	            ds.bind(ERROR, this._errorHandler);
	            ds.bind(PROGRESS, this._progressHandler);
	            ds.bind(REQUEST_START, this._requestStartHandler);

	            this.view.dataSource = ds;
	        },

	        _destroyItem: function(item) {
	            var that = this,
	                el = $("<div></div>"),
	                messages = that.options.messages,
	                restoreFocus = function() {
	                    that.wrapper
	                        .find(DOT + ORGCHART_STYLES.card + "[tabindex=0]" + COMMA + DOT + ORGCHART_STYLES.nodesGroup + "[tabindex=0]")
	                        .addClass(ORGCHART_STYLES.focused)
	                        .trigger("focus");
	                },
	                confirm = this._confirmDestroy = new kendo.ui.Confirm(el, {
	                    title: messages.destroyTitle,
	                    content: messages.destroyContent,
	                    messages:{
	                      okText: messages.destroy,
	                      cancel: messages.cancel
	                    },
	                    show: function() {
	                        setTimeout(function() {
	                            confirm.element.trigger("focus");
	                        });
	                    }
	                });

	            confirm.open();

	            confirm.result.done(function() {
	                if(!that.trigger(DELETE, { dataItem: item })) {
	                    that.dataSource.remove(item);
	                    that.dataSource.sync();
	                }

	                that.view._shouldRestoreSelection = true;
	                that.view._restoreSelection();
	            });

	            confirm.result.fail(restoreFocus);
	        },

	        _edit: function(dataItem) {
	            var that = this,
	                formElement = $("<div>"),
	                windowElement = $("<div>"),
	                messages = this.options.messages,
	                formOptions = this._formOptions(dataItem),
	                save;

	            if(!formOptions) {
	                return;
	            }

	            that._form = new kendo.ui.Form(formElement, formOptions);

	            if(!!dataItem.avatar) {
	                that._avatarPreview(dataItem);
	            }

	            windowElement.append(formElement);

	            that._editWindow = new kendo.ui.Window(windowElement, {
	                title: messages.edit,
	                width: "380 px",
	                modal: true,
	                close: function(e) {
	                    if(!save) {
	                        if(!that.trigger(CANCEL, { dataItem: dataItem })) {
	                            that.cancelChanges();
	                        } else {
	                            e.preventDefault();
	                        }
	                    } else {
	                        save = false;
	                    }
	                },
	                deactivate: function() {
	                    windowElement.off(CLICK);
	                    that._editWindow.destroy();
	                    that._editWindow = null;
	                    that.view._restoreSelection();
	                }
	            });

	            windowElement.append(kendo.template(EDITOR_BUTTONS_TEMPLATE)({
	                save: messages.save,
	                cancel: messages.cancel
	            }));

	            that._editWindow.center().open();

	            windowElement.on(CLICK, DOT + ORGCHART_STYLES.update, function() {
	                if(that._form.validate()) {
	                    save = true;

	                    if(!that.trigger(SAVE, { dataItem: dataItem })) {
	                        that._editWindow.close();
	                        that.saveChanges();
	                    }
	                }
	            });

	            windowElement.on(CLICK, DOT + ORGCHART_STYLES.cancel, function() {
	                that._editWindow.close();
	            });
	        },

	        _formOptions: function(item) {
	            var options = this.options,
	                messages = options.messages,
	                optionsForm = options.editable.form,
	                items = [],
	                parentsDs, optionsItems;

	            if(optionsForm) {
	                optionsItems = optionsForm.items;
	            }

	            if((!optionsItems || optionsItems.length === 0) &&
	                (options.editable === true || (options.editable && options.editable.parent))) {

	                parentsDs = [{
	                    id: null,
	                    name: messages.none
	                }].concat(this.dataSource.prospectParents(item));

	                items.push({
	                    field: "parentId",
	                    editor: "DropDownList",
	                    label: messages.parent,
	                    editorOptions: {
	                        dataSource: parentsDs,
	                        dataValueField: "id",
	                        dataTextField: "name",
	                        valuePrimitive: true
	                    }
	                });
	            }

	            if((!optionsItems || optionsItems.length === 0) &&
	                (options.editable === true || (options.editable && options.editable.fields))) {

	                items = items.concat([{
	                    field: "name",
	                    label: messages.name,
	                    validation: { required: true }
	                }, {
	                    field: "title",
	                    label: messages.title
	                }, {
	                    field: "avatar",
	                    label: messages.uploadAvatar,
	                    editor: proxy(this._uploadEditor, this, item)
	                }]);
	            }

	            if(optionsForm) {
	                delete optionsForm.formData;
	            }

	            if(items.length > 0 || (optionsItems && optionsItems.length > 0)) {
	                return extend(true, {}, {
	                    formData: item,
	                    items: items
	                }, optionsForm);
	            } else {
	                return false;
	            }
	        },

	        _onDataSourceChange: function(e) {
	            if(e.action === "add" || e.action === "itemchange" && this._editWindow) {
	                return;
	            }

	            if (!e.action || e.action === "sync") {
	                if (this.trigger(DATABINDING, e)) {
	                    this._progress(false);
	                    return;
	                }
	            }

	            this._progress(true);
	            this.view.refresh();

	            if (!e.action || e.action === "sync") {
	                this.trigger(DATABOUND);
	            }

	            this._progress(false);
	        },

	        _onDataSourceError: function() {
	            this._progress(false);
	        },

	        _onDataSourceRequestStart: function() {
	            this.view._cacheFocused();
	        },

	        _onMenuClose: function() {
	            if($(document.activeElement).closest("[role='alertdialog']").length === 0) {
	                this.wrapper.find("[tabindex='0']")
	                    .addClass(ORGCHART_STYLES.focused)
	                    .trigger("focus");
	            }
	        },

	        _onMenuItemClick: function(e) {
	            var that = this,
	                targetItem = $(e.target).closest(DOT + ORGCHART_STYLES.node).find(DOT + ORGCHART_STYLES.card),
	                dataItem = that.dataItem(targetItem),
	                action = $(e.item).data(ACTION),
	                newItem;

	            if(!dataItem) {
	                return;
	            }

	            if(action === EDIT) {
	                if(!that.trigger(EDIT, { dataItem: dataItem })) {
	                    that._edit(dataItem);
	                }
	            } else if(action === CREATE) {
	                if(!that.trigger(CREATE, { dataItem: dataItem })) {
	                    if(!dataItem.loaded()) {
	                        that.dataSource.read({ id: dataItem.id })
	                            .then(function() {
	                                newItem = that.dataSource.add({
	                                    parentId: dataItem.id
	                                });

	                                that._edit(newItem);
	                            });
	                    } else {
	                        newItem = that.dataSource.add({
	                            parentId: dataItem.id
	                        });

	                        that._edit(newItem);
	                    }
	                }
	            } else if(action === DESTROY) {
	                that._destroyItem(dataItem);
	            }
	        },

	        _onMenuOpen: function() {
	            this.view._cacheFocused();
	            this.wrapper.find(DOT + ORGCHART_STYLES.focused).removeClass(ORGCHART_STYLES.focused);
	            this._menu.element.find(DOT + ORGCHART_STYLES.menuItem).first().trigger(FOCUS);
	        },

	        _openMenu: function(focused) {
	            if(this._menu) {
	                this._menu.open(focused.find(DOT + ORGCHART_STYLES.cardMenu));
	            }
	        },

	        _progress: function(toggle) {
	            kendo.ui.progress(this.container, toggle);
	        },

	        _triggerCollapse: function(e) {
	            if(this.trigger(COLLAPSE, { item: e.item, dataItems: e.dataItems })) {
	                e.preventDefault();
	            }
	        },

	        _triggerExpand: function(e) {
	            if(this.trigger(EXPAND, { item: e.item, dataItems: e.dataItems })) {
	                e.preventDefault();
	            }
	        },

	        _triggerSelect: function(e) {
	            if(!this.trigger(SELECT, { item: e.item, dataItems: e.dataItems })) {
	                this.view.select(e.item);
	                this.trigger(CHANGE, { item: e.item, dataItems: e.dataItems });
	            }
	        },

	        _uploadEditor: function(item, container) {
	            var that = this;

	            $('<input type="file">')
	                .appendTo(container)
	                .kendoUpload({
	                    async: false,
	                    multiple: false,
	                    select: function(e) {
	                        var fileInfo = e.files[0];
	                        var raw = fileInfo.rawFile;
	                        var reader  = new FileReader();

	                        if(fileInfo.validationErrors && fileInfo.validationErrors.length > 0) {
	                            return;
	                        }

	                        if (raw) {
	                            reader.onloadend = function () {
	                                item.set("avatar", this.result);
	                                that._avatarPreview(item, raw.name);
	                            };

	                          reader.readAsDataURL(raw);
	                        }
	                    },
	                    validation: {
	                        allowedExtensions: [".gif", ".jpg", ".png"],
	                        maxFileSize: 1048576
	                    }
	                });
	        },

	        _view: function() {
	            if(this.options.groupField !== null && this.options.groupField !== undefined) {
	                this.view = new kendo.orgChart.GroupedView(this.container, this.options);
	            } else {
	                this.view = new kendo.orgChart.SingleView(this.container, this.options);
	            }

	            this.view.bind(SELECT, proxy(this._triggerSelect, this));
	            this.view.bind(EXPAND, proxy(this._triggerExpand, this));
	            this.view.bind(COLLAPSE, proxy(this._triggerCollapse, this));
	            this.view.bind(MENU, proxy(this._openMenu, this));

	        },

	        _wrapper: function() {
	            var container = $("<div class='k-orgchart-container'>");

	            this.wrapper = this.element;
	            this.container = container;

	            this.wrapper.addClass(ORGCHART_STYLES.wrapper);
	            this.wrapper.append(container);
	        }
	    });

	    kendo.ui.plugin(OrgChart);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

	// add validation to upload images only in the edit pop-up

/***/ }),

/***/ 1375:
/***/ (function(module, exports) {

	module.exports = require("./orgchart/data");

/***/ }),

/***/ 1376:
/***/ (function(module, exports) {

	module.exports = require("./orgchart/view");

/***/ }),

/***/ 1377:
/***/ (function(module, exports) {

	module.exports = require("./kendo.form");

/***/ })

/******/ });