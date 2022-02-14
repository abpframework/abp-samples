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

	module.exports = __webpack_require__(1269);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1223:
/***/ (function(module, exports) {

	module.exports = require("./kendo.resizable");

/***/ }),

/***/ 1267:
/***/ (function(module, exports) {

	module.exports = require("./kendo.upload");

/***/ }),

/***/ 1268:
/***/ (function(module, exports) {

	module.exports = require("./kendo.breadcrumb");

/***/ }),

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(1274),
	        __webpack_require__(1271),
	        __webpack_require__(1272),
	        __webpack_require__(1273),
	        __webpack_require__(1270),

	        __webpack_require__(1268),
	        __webpack_require__(1267),
	        __webpack_require__(1275),
	        __webpack_require__(1223)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "filemanager",
	    name: "FileManager",
	    category: "web",
	    description: "The FileManager widget displays offers file management functionality.",
	    depends: [ "core", "data", "listview", "toolbar", "breadcrumb", "menu", "treeview", "upload", "dialog", "switch", "resizable", "selectable", "editable" ],
	    features: [{
	        id: "filemanager-grid-view",
	        name: "GridView",
	        description: "Support for GridView",
	        depends: [ "grid" ]
	    }]
	};

	(function($, undefined) {
	    var ui = kendo.ui,
	        extend = $.extend,
	        isPlainObject = $.isPlainObject,
	        isArray = Array.isArray,
	        DataBoundWidget = ui.DataBoundWidget,
	        proxy = $.proxy,
	        template = kendo.template,
	        outerHeight = kendo._outerHeight,

	        NAVIGATE = "navigate",
	        SELECT = "select",
	        OPEN = "open",
	        ERROR = "error",
	        CHANGE = "change",
	        UPLOAD = "upload",
	        SUCCESS = "success",
	        CLOSE = "close",
	        HIDE = "hide",
	        LOAD = "load",
	        DATABINDING = "dataBinding",
	        DATABOUND = "dataBound",
	        DROP = "drop",
	        EXECUTE = "execute",
	        COMMAND = "command",
	        KEYDOWNACTION = "keydownAction",
	        CANCEL = "cancel",

	        TREE_TYPE = "tree",
	        DOT = ".";

	    var fileManagerStyles = {
	        wrapper: "k-widget k-filemanager",
	        header: "k-filemanager-header",
	        navigation: "k-filemanager-navigation",
	        contentContainer: "k-filemanager-content-container",
	        content: "k-filemanager-content",
	        preview: "k-filemanager-preview",
	        toolbar: "k-filemanager-toolbar",
	        treeview: "k-filemanager-treeview",
	        breadcrumb: "k-filemanager-breadcrumb",
	        view: "k-filemanager-view",
	        grid: "k-filemanager-grid",
	        list: "k-filemanager-listview",
	        upload: "k-filemanager-upload",
	        uploadDialog: "k-filemanager-upload-dialog",
	        splitBar: "k-splitbar",
	        splitBarHorizontal: "k-splitbar-horizontal k-splitbar-draggable-horizontal",
	        splitBarHover: "k-splitbar-horizontal-hover",
	        splitBarIcon: "k-icon k-resize-handle",
	        splitBarNavigation: "k-filemanager-splitbar-navigation",
	        splitBarPreview: "k-filemanager-splitbar-preview",
	        resizable: "k-filemanager-resizable"
	    };

	    var fileManagerTemplateStyles = {
	        filePreview: "k-file-preview",
	        fileInfo: "k-file-info",
	        fileName: "k-file-name",
	        fileMeta: "k-file-meta",
	        metaLabel: "k-file-meta-label",
	        metaValue: "k-file-meta-value",
	        extension: "k-file-type",
	        size: "k-file-size",
	        created: "k-file-created",
	        modified: "k-file-modified"
	    };

	    var viewTypes = {
	        grid: "grid",
	        list: "list"
	    };

	    var NO_FILE_PREVIEW_TEMPLATE = '' +
	        '<div class="#:styles.fileInfo#">' +
	            '<div class="#:styles.filePreview#">' +
	                '<span class="k-file-icon k-icon k-i-none"></span>' +
	            '</div>' +
	            '<span class="#:styles.fileName#" k-no-file-selected>#: messages.noFileSelected #</span>' +
	        '</div>';

	    var SINGLE_FILES_PREVIEW_TEMPLATE = '' +
	        '<div class="#:styles.fileInfo#">' +
	            '<div class="#:styles.filePreview#">' +
	                '<span class="k-file-icon k-icon k-i-#: !selection[0].isDirectory ? kendo.getFileGroup(selection[0].extension, true) : "folder" #"></span>' +
	            '</div>' +
	            '<span class="#:styles.fileName#">#:selection[0].name#</span>' +
	            '#if(metaFields){#' +
	                '<dl class="#:styles.fileMeta#">'+
	                    '#for(var i = 0; i < metaFields.length; i+=1){#' +
	                        '#var field = metaFields[i]#' +
	                        '<dt class="#:styles.metaLabel#">#:messages[field]#: </dt>' +
	                        '<dd class="#:styles.metaValue# #:styles[field]#">' +
	                            '#if(field == "size"){#' +
	                                ' #:kendo.getFileSizeMessage(selection[0][field])#' +
	                            '#} else if(selection[0][field] instanceof Date) {#' +
	                                ' #:kendo.toString(selection[0][field], "G")#' +
	                            '#} else if(field == "extension") {#' +
	                                ' #: !selection[0].isDirectory ? kendo.getFileGroup(selection[0].extension) : "folder"#' +
	                            '#} else {#' +
	                                ' #:selection[0][field]#' +
	                            '#}#' +
	                        '</dd>'+
	                        '<dd class="k-line-break"></dd>' +
	                    '# } #' +
	                '</dl>' +
	            '#}#' +
	        '</div>';

	    var MULTIPLE_FILES_PREVIEW_TEMPLATE = '' +
	        '<div class="#:styles.fileInfo#">' +
	            '<div class="#:styles.filePreview#">' +
	                '<span class="k-file-icon k-icon k-i-file"></span>' +
	            '</div>' +
	            '<span class="#:styles.fileName#">' +
	                '#:selection.length# ' +
	                '#:messages.items#' +
	            '</span>' +
	        '</div>';

	    var FileManager = DataBoundWidget.extend({
	        init: function(element, options) {
	            var that = this;

	            DataBoundWidget.fn.init.call(that, element, options);

	            that.options = kendo.deepExtend({}, that.options, options);

	            that.defaultSortOption = { field: "name", dir: "asc" };
	            that.folderSortOption = { field: "isDirectory", dir: "desc" };

	            that._commandStack = new ui.filemanager.CommandStack();

	            that._dataSource();

	            that._wrapper();

	            that._renderHeader();

	            that._renderContentContainer();

	            that._initContextMenu();

	            that._renderNavigation();

	            that._renderContent();

	            that._renderPreview();

	            that._initUploadDialog();

	            that._resizable();

	            that.resize();

	            kendo.notify(that, kendo.ui);
	        },

	        options: {
	            name: "FileManager",
	            height: 500,
	            resizable: true,
	            initialView: viewTypes.list,
	            toolbar: {
	                resizable: true
	            },
	            contextMenu: {},
	            upload: {},
	            uploadUrl: "",
	            views: {},
	            breadcrumb: {},
	            draggable: true,
	            dialogs: {
	                upload: {
	                    width: 530
	                },
	                moveConfirm: {
	                    width: 350,
	                    closable: true
	                },
	                deleteConfirm: {
	                    width: 360,
	                    closable: true
	                },
	                renamePrompt: {
	                    width: 350,
	                    closable: true
	                }
	            },
	            previewPane: {
	                metaFields: ["extension", "size", "created", "modified"],
	                noFileTemplate: NO_FILE_PREVIEW_TEMPLATE,
	                singleFileTemplate: SINGLE_FILES_PREVIEW_TEMPLATE,
	                multipleFilesTemplate: MULTIPLE_FILES_PREVIEW_TEMPLATE
	            },
	            messages: {
	                toolbar: {
	                    createFolder: "New Folder",
	                    upload: "Upload",
	                    sortDirection: "Sort Direction",
	                    sortDirectionAsc: "Sort Direction Ascending",
	                    sortDirectionDesc: "Sort Direction Descending",
	                    sortField: "Sort By",
	                    nameField: "Name",
	                    sizeField: "File Size",
	                    typeField: "Type",
	                    dateModifiedField: "Date Modified",
	                    dateCreatedField: "Date Created",
	                    listView: "List View",
	                    gridView: "Grid View",
	                    search: "Search",
	                    details: "View Details",
	                    detailsChecked: "On",
	                    detailsUnchecked: "Off",
	                    "delete": "Delete",
	                    rename: "Rename"
	                },
	                views: {
	                    nameField: "Name",
	                    sizeField: "File Size",
	                    typeField: "Type",
	                    dateModifiedField: "Date Modified",
	                    dateCreatedField: "Date Created",
	                    items: "items",
	                    listLabel: "FileManager ListView",
	                    gridLabel: "FileManager Grid",
	                    treeLabel: "FileManager TreeView"
	                },
	                dialogs: {
	                    upload: {
	                        title: "Upload Files",
	                        clear: "Clear List",
	                        done: "Done"
	                    },
	                    moveConfirm: {
	                        title: "Confirm",
	                        content: "<p style='text-align: center;'>Do you want to move or copy?</p>",
	                        okText: "Copy",
	                        cancel: "Move",
	                        close: "close"
	                    },
	                    deleteConfirm: {
	                        title: "Confirm",
	                        content: "<p style='text-align: center;'>Are you sure you want to delete the selected file(s)?</br>You cannot undo this action.</p>",
	                        okText: "Delete",
	                        cancel: "Cancel",
	                        close: "close"
	                    },
	                    renamePrompt: {
	                        title: "Prompt",
	                        content: "<p style='text-align: center;'>Enter new name for the file.</p>",
	                        okText: "Rename",
	                        cancel: "Cancel",
	                        close: "close"
	                    }
	                },
	                previewPane: {
	                    noFileSelected: "No File Selected",
	                    extension: "Type",
	                    size: "Size",
	                    created: "Date Created",
	                    createdUtc: "Date Created UTC",
	                    modified: "Date Modified",
	                    modifiedUtc: "Date Modified UTC",
	                    items: "items"
	                }
	            }
	        },

	        events: [
	            NAVIGATE,
	            SELECT,
	            OPEN,
	            DATABINDING,
	            DATABOUND,
	            ERROR,
	            DROP,
	            EXECUTE,
	            COMMAND
	        ],

	        _dataSource: function () {
	            var that = this,
	                options = that.options,
	                dataSourceOptions = options.dataSource || {},
	                typeSortOrder = that.folderSortOption,
	                nameSortOrder = that.defaultSortOption,
	                dataSource;

	            if (!(dataSourceOptions instanceof kendo.data.FileManagerDataSource)) {
	                if(isArray(dataSourceOptions)){
	                    dataSource = {
	                        data: dataSourceOptions,
	                        autoSync: false,
	                        sort: [typeSortOrder, nameSortOrder]
	                     };
	                } else {
	                    dataSource = extend(true, dataSourceOptions, {
	                        autoSync: false,
	                        sort: [typeSortOrder, nameSortOrder]
	                    });
	                }

	                if (dataSourceOptions && isPlainObject(dataSourceOptions.schema)) {
	                    dataSource.schema = dataSourceOptions.schema;
	                } else if (isPlainObject(kendo.data.schemas.filemanager)) {
	                    dataSource.schema = kendo.data.schemas.filemanager;
	                }
	            } else {
	                dataSource = dataSourceOptions;
	            }

	            if (that.dataSource && that._errorHandler) {
	                that.dataSource.unbind(ERROR, that._errorHandler);
	                that.dataSource.unbind(CHANGE, that._changeHandler);
	            } else {
	                that._errorHandler = proxy(that._error, that);
	                that._changeHandler = proxy(that._change, that);
	            }

	            that.dataSource = kendo.data.FileManagerDataSource.create(dataSource)
	                .bind(ERROR, that._errorHandler)
	                .bind(CHANGE, that._changeHandler);
	        },

	        _error: function (ev) {
	            if(!this.trigger(ERROR, ev)) {
	                window.console.warn('Error! The requested URL returned ' + ev.xhr.status + ' - ' + ev.xhr.statusText);
	            }
	        },

	        _wrapper: function() {
	            var that = this,
	                options = that.options,
	                width = options.width,
	                height = options.height;

	            that.wrapper = that.element
	                .addClass(fileManagerStyles.wrapper);

	            if (width) {
	                that.wrapper.width(width);
	            }

	            if (height) {
	                that.wrapper.height(height);
	            }

	            that._resizeHandler = kendo.onResize(function() {
	                that.resize(true);
	            });
	        },

	        _renderHeader: function () {
	            var that = this,
	                options = that.options;

	            if (options.toolbar) {
	                that.header = $("<div />").addClass(fileManagerStyles.header);
	                that.header.append(that._initToolbar().element);
	            }

	            that.wrapper.append(that.header);
	        },

	        _renderContentContainer: function() {
	            var that = this,
	                container = $("<div />").addClass(fileManagerStyles.contentContainer);

	            that.contentContainer = container;

	            that.wrapper.append(that.contentContainer);
	        },

	        _initContextMenu: function(){
	            var that = this,
	                options = that.options,
	                menuOptions = extend({}, options.contextMenu, {
	                    filemanager: that,
	                    messages: options.messages.toolbar,
	                    target: that.contentContainer,
	                    filter: "[data-uid]",
	                    action: that.executeCommand.bind(that),
	                    isLocalBinding: that.dataSource.isLocalBinding
	                });

	            if(options.contextMenu === false) {
	                return;
	            }

	            that.contextMenu = new ui.filemanager.ContextMenu("<ul></ul>", menuOptions);

	            that.contextMenu.bind(OPEN, proxy(that._cacheFocus, that));
	        },

	        _renderNavigation: function() {
	            var that = this;

	            that.navigation = $("<div />").addClass(fileManagerStyles.navigation);
	            that.navigation.append(that._initTreeView().element);

	            that.contentContainer.append(that.navigation);
	        },

	        _renderContent: function() {
	            var that = this,
	                options = that.options,
	                toolbar = that.toolbar;

	            that.content = $("<div />").addClass(fileManagerStyles.content);

	            if (options.breadcrumb) {
	                that.content.append(that._initBreadcrumb().element);
	            }

	            that.content.append(that._initView());

	            if (!toolbar || !toolbar.isToolEnabled(toolbar.defaultTools.upload.name)) {
	                that.content.append(that._initUpload().wrapper.hide());
	            }

	            that.contentContainer.append(that.content);
	        },

	        _renderPreview: function() {
	            var that = this,
	                enablePreview = that.options.previewPane;

	            if (!enablePreview) {
	               return;
	            }

	            that.preview = $("<div />").addClass(fileManagerStyles.preview);
	            that.previewContainer = $("<div />").addClass(fileManagerStyles.previewContainer);
	            that.preview.append(that.previewContainer);

	            that._setPreviewPaneContent();

	            that.contentContainer.append(that.preview.hide());
	        },

	        _setPreviewPaneContent: function() {
	            var that = this,
	                options = that.options,
	                previewPaneMessages = options.messages.previewPane,
	                previewPaneOptions = options.previewPane,
	                selection = that.getSelected(),
	                previewTemplate;

	            if (!selection) {
	                previewTemplate = template(previewPaneOptions.noFileTemplate)({
	                    styles: fileManagerTemplateStyles,
	                    messages: previewPaneMessages
	                });

	                that.previewContainer.html(previewTemplate);
	                return;
	            }

	            previewTemplate = selection.length === 1 ?
	                previewPaneOptions.singleFileTemplate :
	                previewPaneOptions.multipleFilesTemplate;

	            previewTemplate = template(previewTemplate)({
	                styles: fileManagerTemplateStyles,
	                messages: previewPaneMessages,
	                selection: selection,
	                metaFields: previewPaneOptions.metaFields
	            });

	            that.previewContainer.html(previewTemplate);
	        },

	        _initToolbar: function () {
	            var that = this,
	                options = that.options,
	                toolbarElement = $("<div />").addClass(fileManagerStyles.toolbar),
	                toolbarOptions = extend({}, options.toolbar, {
	                    filemanager: this,
	                    messages: options.messages.toolbar,
	                    action: that.executeCommand.bind(that)
	                });

	            that.toolbar = new ui.filemanager.ToolBar(toolbarElement, toolbarOptions);

	            return that.toolbar;
	        },

	        _initTreeView: function() {
	            var that = this,
	                treeViewElement = $("<div />").addClass(fileManagerStyles.treeview),
	                options = that.options.views[TREE_TYPE],
	                explicitOptions = extend(true, {}, {
	                    dataSource: that.options.dataSource,
	                    messages: that.options.messages.views,
	                    draggable: that.options.draggable,
	                    isLocalBinding: that.dataSource.isLocalBinding
	                });

	            that.treeView = new ui.filemanager.ViewComponents[TREE_TYPE](treeViewElement, options, explicitOptions);

	            that.treeView.bind(NAVIGATE, proxy(that._navigate, that))
	                         .bind(LOAD, proxy(that._load, that))
	                         .bind(DROP, proxy(that._drop, that))
	                         .bind(KEYDOWNACTION, proxy(that._keydownAction, that));

	            return that.treeView;
	        },

	        _drop: function (ev) {
	            var that = this;

	            if(!that.trigger(DROP, ev) && ev.items.indexOf(ev.target) < 0) {
	                that._confirm({
	                    type: "move",
	                    target: ev.target
	                }).done(function(){
	                    that.executeCommand({command: "CopyCommand", options: ev});
	                }).fail(function(){
	                    that.executeCommand({command: "MoveCommand", options: ev});
	                });
	            }
	        },

	        _keydownAction: function (ev) {
	            var that = this,
	                keyCode = ev.keyCode,
	                keys = kendo.keys;

	            if (keyCode === keys.DELETE) {
	                that.executeCommand({command: "DeleteCommand", options: { target: ev.target } });
	            }

	            if (keyCode === keys.F2) {
	                that.executeCommand({command: "RenameCommand", options: { target: ev.target } });
	            }
	        },

	        _confirm: function(options){
	            var that = this,
	                messages = that.options.messages.dialogs[options.type + "Confirm"];

	            var confirm = $("<div></div>").kendoConfirm(extend({}, {
	                title: messages.title,
	                content: messages.content,
	                messages: messages
	            }, that.options.dialogs[options.type + "Confirm"])).data("kendoConfirm");

	            confirm.bind(OPEN, proxy(that._cacheFocus, that));
	            confirm.bind(HIDE, proxy(that._restoreFocus, that, options.target));

	            confirm.open();

	            confirm.wrapper.removeClass("k-confirm");

	            return confirm.result;
	        },

	        _prompt: function(options){
	            var that = this,
	                messages = this.options.messages.dialogs[options.type + "Prompt"];

	            var prompt = $("<div></div>").kendoPrompt(extend({}, {
	                title: messages.title,
	                content: messages.content,
	                messages: messages,
	                value: options.defaultInput
	            },this.options.dialogs[options.type + "Prompt"])).data("kendoPrompt");

	            prompt.bind(OPEN, proxy(that._cacheFocus, that));
	            prompt.bind(CLOSE, proxy(that._restoreFocus, that, options.target));

	            prompt.open();

	            prompt.wrapper.removeClass("k-prompt");

	            return prompt.result;
	        },

	        _cacheFocus: function() {
	            var that = this,
	                activeElement = $(document.activeElement),
	                view = that.view(),
	                treeView = that.treeView.widgetComponent;

	            if (that.contextMenu && that.contextMenu.popup.visible()) {
	                return;
	            }

	            that.treeView._shouldFocus = false;

	            if ((treeView.current() && treeView.current().find(".k-state-focused").length) ||
	                activeElement.hasClass(fileManagerStyles.treeview)){
	                that.treeView._shouldFocus = true;
	                view._focusElement = activeElement;
	                return;
	            }

	            view._focusElement = activeElement.hasClass(fileManagerStyles[that._viewType]) ?
	                activeElement :
	                null;
	        },

	        _restoreFocus: function(target) {
	            var that = this,
	                view = that.view();

	            if (!target) {
	                return;
	            }

	            if (view._focusElement) {
	                view._focusElement.trigger("focus");
	            } else if (target.closest && target.closest(":kendoFocusable").length) {
	                target.closest(":kendoFocusable").trigger("focus");
	            }
	        },

	        _initView: function() {
	            var that = this,
	                viewWrapper = $("<div />").addClass(fileManagerStyles.view),
	                initialView = that.options.initialView;

	            that.viewWrapper = viewWrapper;
	            that.viewWrapper.append(that.view(initialView));

	            return viewWrapper;
	        },

	        _initBreadcrumb: function() {
	            var that = this,
	                options = that.options,
	                breadcrumbElement = $("<nav />").addClass(fileManagerStyles.breadcrumb),
	                breadcrumbOptions = extend({}, {
	                    items: [
	                        {type:"rootitem", text: "" }
	                    ],
	                    change: proxy(that._breadcrumbChange, that)
	                }, options.breadcrumb);

	            that.breadcrumb = new ui.Breadcrumb(breadcrumbElement, breadcrumbOptions);

	            return that.breadcrumb;
	        },

	        _breadcrumbChange: function(ev){
	            var entry = ev.sender.items().filter(function(item) {
	                return item.path === ev.value.substring(1);
	            }).shift();

	            this._navigate({ path: entry ? entry.id : "" });
	        },

	        _initUploadDialog: function() {
	            var that = this,
	                options = that.options,
	                dialogMessages = options.messages.dialogs.upload,
	                dialogElement = $("<div />"),
	                dialogOptions = extend({}, {
	                    title: dialogMessages.title,
	                    modal: true,
	                    visible: false,
	                    width: 500,
	                    actions: [
	                        { text: dialogMessages.clear, action: proxy(that._clearUploadFilesList, that) },
	                        { text: dialogMessages.done, primary: true }
	                    ],
	                    messages: dialogMessages
	                }, options.dialogs.upload),
	                uploadInstance;

	            if (!that._shouldInitUpload()) {
	                return;
	            }

	            uploadInstance = that._initUpload();

	            that.uploadDialog = new ui.Dialog(dialogElement, dialogOptions);
	            that.uploadDialog.wrapper.addClass(fileManagerStyles.uploadDialog);
	            that.uploadDialog.element.append(uploadInstance.wrapper);

	            that.uploadDialog.bind(OPEN, proxy(that._toggleUploadDropZone, that, ""));
	            that.uploadDialog.bind(CLOSE, proxy(that._toggleUploadDropZone, that, that.viewWrapper));

	            return that.uploadDialog;
	        },

	        _shouldInitUpload: function() {
	            var that = this,
	                options = that.options,
	                shouldInit = false;

	            if ((options.uploadUrl || (options.upload.async && options.upload.async.saveUrl)) &&
	                options.upload !== false) {
	                    shouldInit = true;
	            }

	            return shouldInit;
	        },

	        _initUpload: function() {
	            var that = this,
	                options = that.options,
	                uploadElement = $("<input type='file' name='file'/>").addClass(fileManagerStyles.upload),
	                uploadOptions = extend(true, {
	                    async: {
	                         autoUpload: true,
	                         saveUrl: options.uploadUrl
	                    },
	                    dropZone: that.viewWrapper
	                }, options.upload);

	            that.upload = new ui.Upload(uploadElement[0], uploadOptions);

	            that.upload.bind(UPLOAD, proxy(that._sendUploadPathParameter, that));
	            that.upload.bind(SUCCESS, proxy(that._success, that));

	            return that.upload;
	        },

	        _sendUploadPathParameter: function(ev) {
	            ev.data = extend(ev.data, { path: this.path() });
	        },

	        _success: function(){
	            this._view.widgetComponent.dataSource.read();
	        },

	        _clearUploadFilesList: function() {
	            var that = this,
	                upload = that.upload;

	            if (upload) {
	                upload.clearAllFiles();
	            }
	        },

	        _toggleUploadDropZone: function(zone) {
	            var that = this,
	                upload = that.upload;

	            if (upload) {
	                upload.setOptions({ dropZone: zone});
	            }
	        },

	        _binding: function (ev){
	            if(this.trigger(DATABINDING, { source: "view", action: ev.action, items: ev.items, index: ev.index })){
	                ev.preventDefault();
	            }
	        },

	        _bound: function (){
	            if (this.options.previewPane) {
	                this._setPreviewPaneContent();
	            }
	            this.trigger(DATABOUND);
	        },

	        _createResizableSplitBar: function(cssClass) {
	            var splitBar = $("<div />")
	                    .addClass(fileManagerStyles.splitBar)
	                    .addClass(fileManagerStyles.splitBarHorizontal)
	                    .addClass(cssClass),
	                icon = $("<span />").addClass(fileManagerStyles.splitBarIcon);

	            splitBar.append(icon);

	            splitBar.hover(function () {
	                $(this).toggleClass(fileManagerStyles.splitBarHover);
	            });

	            return splitBar;
	        },

	        _initResizableNavigation: function() {
	            var that = this,
	                wrapper = that.wrapper,
	                splitBar = that._createResizableSplitBar(fileManagerStyles.splitBarNavigation),
	                contentWrapper = wrapper.find(DOT + fileManagerStyles.content),
	                navigationWrapper = wrapper.find(DOT + fileManagerStyles.navigation),
	                contentWrapperWidth,
	                navigationWrapperWidth;

	            splitBar.insertAfter(navigationWrapper);

	            that._resizeDraggable.navigation = that.wrapper.find(splitBar)
	                .end()
	                .kendoResizable({
	                    handle: DOT + fileManagerStyles.splitBarNavigation,
	                    start: function () {
	                        contentWrapperWidth = contentWrapper.width();
	                        navigationWrapperWidth = navigationWrapper.width();
	                    },
	                    resize: function(e) {
	                        var delta = e.x.initialDelta;

	                        if (kendo.support.isRtl(wrapper)) {
	                            delta *= -1;
	                        }

	                        if (navigationWrapperWidth + delta < -2 || contentWrapperWidth - delta < -2) {
	                            return;
	                        }

	                        navigationWrapper.width(navigationWrapperWidth + delta);
	                    }
	                }).getKendoResizable();
	        },

	        _initResizablePreview: function() {
	            var that = this,
	                wrapper = that.wrapper,
	                splitBar = that._createResizableSplitBar(fileManagerStyles.splitBarPreview),
	                contentWrapper = wrapper.find(DOT + fileManagerStyles.content),
	                previewWrapper = wrapper.find(DOT + fileManagerStyles.preview),
	                contentWrapperWidth,
	                previewWrapperWidth;

	            if (!that.options.previewPane) {
	                return;
	            }

	            splitBar.insertBefore(previewWrapper).hide();

	            that._resizeDraggable.preview = wrapper.find(splitBar)
	                .end()
	                .kendoResizable({
	                    handle: DOT + fileManagerStyles.splitBarPreview,
	                    start: function () {
	                        contentWrapperWidth = contentWrapper.width();
	                        previewWrapperWidth = previewWrapper.width();
	                    },
	                    resize: function(e) {
	                        var delta = e.x.initialDelta;

	                        if (kendo.support.isRtl(wrapper)) {
	                            delta *= -1;
	                        }

	                        if (previewWrapperWidth - delta < -2 || contentWrapperWidth + delta < -2) {
	                            return;
	                        }

	                        previewWrapper.width(previewWrapperWidth - delta);
	                    }
	                }).getKendoResizable();
	        },

	        _resizable: function() {
	            var that = this,
	                options = that.options;

	            that._resizeDraggable = {};

	            if (!options.resizable) {
	                return;
	            }

	            that.wrapper.addClass(fileManagerStyles.resizable);

	            that._initResizableNavigation();

	            that._initResizablePreview();
	        },

	        view: function(type) {
	            var that = this,
	                element = $('<div aria-label="' + that.options.messages.views[type + "Label"] + '"></div>'),
	                options = that.options.views[type],
	                explicitOptions = extend(true, {}, {
	                    dataSource: that._viewDataSource || that.dataSource,
	                    messages: that.options.messages.views,
	                    draggable: that.options.draggable
	                });

	            if(type === undefined) {
	                return that._view;
	            }

	            if(!ui.filemanager.ViewComponents[type]) {
	                throw new Error(kendo.format("There is no {0} ViewComponent registered!", type));
	            }

	            if(that._view && that._view.destroy) {
	                that._view.destroy();
	                that.viewWrapper.empty();
	            }

	            that._viewType = type;
	            that._view = new ui.filemanager.ViewComponents[type](element, options, explicitOptions);

	            that._view.bind(SELECT, proxy(that._select, that));
	            that._view.bind(OPEN, proxy(that._open, that));
	            that._view.bind(DATABINDING, proxy(that._binding, that));
	            that._view.bind(DATABOUND, proxy(that._bound, that));
	            that._view.bind(DROP, proxy(that._drop, that));
	            that._view.bind(KEYDOWNACTION, proxy(that._keydownAction, that));
	            that._view.bind(CANCEL, proxy(that._cancel, that));

	            that._view.element.addClass(fileManagerStyles[type]);

	            that.viewWrapper
	                .removeClass(
	                    Object.keys(ui.filemanager.ViewComponents).map(function(el) {
	                        return fileManagerStyles.view + "-" + el;
	                    }).join(" ")
	                )
	                .addClass(fileManagerStyles.view + "-" + type);

	            that.viewWrapper.append(that._view.element);
	        },

	        executeCommand: function(args) {
	            var commandName = args.command,
	                commandOptions = extend({ filemanager: this }, isPlainObject(args.options) ? args.options : {value: args.options}),
	                command = new ui.filemanager.commands[commandName](commandOptions);

	            if(!this.trigger(EXECUTE, args)) {
	                return command.exec();
	            }
	        },

	        _navigate: function(ev){
	            var that = this,
	                path = ev.path;

	            if(!that.trigger(NAVIGATE, { path: path })) {
	                that.navigate(path);
	            }
	        },

	        _load: function(ev){
	            var entry = this.dataSource.get(ev.entryId);
	            entry.load();
	        },

	        _select: function (ev) {
	            if (this.options.previewPane) {
	                this._setPreviewPaneContent();
	            }

	            this.trigger(SELECT, { entries: ev.entries });
	        },

	        _open: function (ev) {
	            var that = this,
	                entry = ev.entry;

	            that.trigger(OPEN, { entry: entry });

	            if(entry.isDirectory) {
	                that._navigate({ path: entry.id });
	            }
	        },

	        _cancel: function () {
	            var that = this,
	                commandStack = that._commandStack,
	                command = commandStack.next();

	            commandStack.reject(command);
	            that.trigger(COMMAND, { status: "cancel", action: "itemchange", data: command.data });
	        },

	        _change: function (ev) {
	            var that = this,
	                commandStack = that._commandStack,
	                targetDataSource = ev.node ? ev.node.children : that.dataSource;

	            if(that.trigger(DATABINDING, { source: "tree", action: ev.action, items: ev.items, index: ev.index })){
	                return;
	            }

	            that.treeView._refreshDataSource(ev);

	            if(ev.action === "remove" || ev.action === "itemchange" || ev.action === "add") {
	                if (commandStack.empty()) {
	                    targetDataSource.sync();
	                } else {
	                    var command = commandStack.next();

	                    targetDataSource.sync().then(function(res){
	                        commandStack.resolve(command);
	                        that.trigger(COMMAND, { status: "success", action: ev.action, data: command.data, response: res });
	                    }).fail(function(res){
	                        commandStack.reject(command);
	                        that.trigger(COMMAND, { status: "fail", action: ev.action, data: command.data, response: res });
	                    });
	                }
	            }

	            if(ev.action === "remove" && that._viewDataSource && that._viewDataSource.parent() && ev.items[0] === that._viewDataSource.parent()) {
	                that._navigateToParent(ev.items[0]);
	            }

	            if(ev.action == "itemchange" && that._viewDataSource && that._viewDataSource.parent() && that.path().indexOf(ev.items[0].id) >= 0) {
	                that._navigateToParent(ev.items[0]);
	            }

	            if(ev.action === "itemchange") {
	                ev.items[0].loaded(false);
	            }
	        },

	        _navigateToParent: function(item){
	            var that = this;
	            var parent = item.parentNode();
	            var parentNodePath = parent ? parent.id : "";
	            that._navigate({path: parentNodePath});
	        },

	        _buildBreadcrumbPath: function (entry){
	            var that = this,
	                breadcrumb = that.breadcrumb,
	                items = [];

	            while(entry) {
	                items.push({
	                    id: entry.id,
	                    text: entry.name,
	                    path: entry.path
	                });

	                entry = entry.parentNode && entry.parentNode();
	            }

	            items.push({ type: "rootItem", id: "", text: ""  });

	            breadcrumb.items(items.reverse());
	        },

	        _adjustDimensions: function() {
	            var that = this,
	                wrapper = that.wrapper,
	                gridSelector = DOT + fileManagerStyles.grid,
	                listViewSelector = DOT + fileManagerStyles.list,
	                contentContainer = DOT + fileManagerStyles.contentContainer,
	                totalHeight = wrapper.height(),
	                toolbarHeight = 0,
	                breadcrumbHeight = 0;

	            if (that.toolbar) {
	                toolbarHeight = outerHeight(that.toolbar.wrapper);
	            }

	            if (that.breadcrumb) {
	                breadcrumbHeight = outerHeight(that.breadcrumb.wrapper);
	            }

	            if (that.options.height !== "auto") {
	                wrapper
	                    .find([gridSelector].join(","))
	                    .height(totalHeight - (toolbarHeight + breadcrumbHeight + 1));

	                wrapper
	                    .find(listViewSelector)
	                    .parent()
	                    .height(totalHeight - (toolbarHeight + breadcrumbHeight + 1));

	                wrapper
	                    .find(contentContainer)
	                    .height(totalHeight - toolbarHeight);
	            }
	        },

	        _resize: function() {
	            this._adjustDimensions();
	            kendo.resize(this.element.children());
	        },

	        setDataSource: function(dataSource) {
	            var that = this;

	            that.options.dataSource = dataSource;
	            that._dataSource();

	            if(that.toolbar) {
	                that.toolbar.destroy();
	                that.header.empty();
	                that.header.append(that._initToolbar().element);
	            }

	            if(that.treeView){
	                that.treeView.destroy();
	                that.navigation.empty();
	                that.navigation.append(that._initTreeView().element);
	            }

	            if(that._view) {
	                that.view(that._viewType|| that.options.initialView);
	            }

	            that._initContextMenu();

	        },

	        refresh: function (){
	            var that = this,
	                dataSource = that._viewDataSource || that.dataSource;

	            dataSource.read();
	        },

	        getSize: function() {
	            return kendo.dimensions(this.wrapper);
	        },

	        getSelected: function(){
	            var that = this,
	                items = that._view.getSelected(),
	                treeView = that.treeView;

	            if(items && items.length) {
	                return items;
	            }

	            var item = treeView.getSelected();

	            if(item) {
	                return [ that.dataSource.get(item.id) ];
	            }
	        },

	        path: function () {
	            return this._path || "";
	        },

	        navigate: function (path) {
	            var that = this,
	                dataSource = that.dataSource,
	                entry = dataSource.get(path.replace(/^\//, "")),
	                view = that._view,
	                treeView = that.treeView,
	                breadcrumb = that.breadcrumb,
	                isRoot = path === "" || path === "/";

	            if(!entry && !isRoot) {
	                window.console.warn('Error! Could not navigate to the folder at the requested path(' + path + '). Make sure that the parent folder of the target folder has already been loaded.');
	                return;
	            }

	            that._path = path;

	            if(that.trigger(DATABINDING, { source: "navigation", action: "rebind", items: [entry] })){
	                return;
	            }

	            if(breadcrumb) {
	                that._buildBreadcrumbPath(entry);
	            }

	            if(isRoot) {
	                dataSource.sort([ that.folderSortOption, that.defaultSortOption ]);
	                that._viewDataSource = dataSource;
	                view.refresh(that._viewDataSource);
	                treeView.treeView.select($());

	                if (that.options.previewPane) {
	                    that._setPreviewPaneContent();
	                }

	                return;
	            }

	            if(entry.loaded && !entry.loaded()) {
	                entry.load();
	            }

	            if(view) {
	                that._viewDataSource = entry.children;
	                that._viewDataSource._sort = [ that.folderSortOption, that.defaultSortOption ];
	                view.refresh(that._viewDataSource);
	            }

	            if(treeView) {
	                treeView.refresh(entry.id);
	            }

	            if (that.options.previewPane) {
	                that._setPreviewPaneContent();
	            }
	        },

	        items: function () {
	            var that = this;

	            return that.treeView.widgetComponent.items().add(that._view.widgetComponent.items());
	        },

	        destroy: function() {
	            var that = this;

	            DataBoundWidget.fn.destroy.call(that);

	            that.dataSource
	                .unbind(ERROR, that._errorHandler)
	                .unbind(CHANGE, that._changeHandler);

	            if (that._resizeDraggable.navigation) {
	                that._resizeDraggable.navigation.destroy();
	                that._resizeDraggable.navigation = null;
	            }

	            if (that._resizeDraggable.preview) {
	                that._resizeDraggable.preview.destroy();
	                that._resizeDraggable.preview = null;
	            }

	            if (that.uploadDialog) {
	                that.uploadDialog.destroy();
	                that.uploadDialog = null;
	            }

	            if (that.upload) {
	                that.upload.destroy();
	                that.upload = null;
	            }

	            if (that.contextMenu) {
	                that.contextMenu.destroy();
	                that.contextMenu = null;
	            }

	            kendo.unbindResize(that._resizeHandler);

	            that.dataSource = null;
	            that._viewDataSource = null;

	            kendo.destroy(that.element);
	        }
	    });

	    ui.plugin(FileManager);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ }),

/***/ 1270:
/***/ (function(module, exports) {

	module.exports = require("./filemanager/contextmenu");

/***/ }),

/***/ 1271:
/***/ (function(module, exports) {

	module.exports = require("./filemanager/view");

/***/ }),

/***/ 1272:
/***/ (function(module, exports) {

	module.exports = require("./filemanager/toolbar");

/***/ }),

/***/ 1273:
/***/ (function(module, exports) {

	module.exports = require("./filemanager/data");

/***/ }),

/***/ 1274:
/***/ (function(module, exports) {

	module.exports = require("./filemanager/commands");

/***/ }),

/***/ 1275:
/***/ (function(module, exports) {

	module.exports = require("./kendo.dialog");

/***/ })

/******/ });