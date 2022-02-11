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

	module.exports = __webpack_require__(1265);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1071:
/***/ (function(module, exports) {

	module.exports = require("./kendo.dropdownlist");

/***/ }),

/***/ 1265:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1266), __webpack_require__(1071), __webpack_require__(1267), __webpack_require__(1268) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "filebrowser",
	    name: "FileBrowser",
	    category: "web",
	    description: "",
	    hidden: true,
	    depends: [ "selectable", "listview", "dropdownlist", "upload", "breadcrumb" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,
	        isPlainObject = $.isPlainObject,
	        proxy = $.proxy,
	        extend = $.extend,
	        placeholderSupported = kendo.support.placeholder,
	        isFunction = kendo.isFunction,
	        trimSlashesRegExp = /(^\/|\/$)/g,
	        CHANGE = "change",
	        APPLY = "apply",
	        ERROR = "error",
	        CLICK = "click",
	        NS = ".kendoFileBrowser",
	        SEARCHBOXNS = ".kendoSearchBox",
	        NAMEFIELD = "name",
	        SIZEFIELD = "size",
	        TYPEFIELD = "type",
	        DEFAULTSORTORDER = { field: TYPEFIELD, dir: "asc" },
	        EMPTYTILE = kendo.template('<div class="k-listview-item k-listview-item-empty"><span class="k-file-preview"><span class="k-file-icon k-icon k-i-none"></span></span><span class="k-file-name">${text}</span></div>'),
	        TOOLBARTMPL = '<div class="k-widget k-filebrowser-toolbar k-toolbar k-floatwrap">' +

	                            '# if (showCreate) { #' +
	                                '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button"><span class="k-i-button-icon k-icon k-i-folder-add"></span></button>' +
	                            '# } #' +

	                            '# if (showUpload) { # ' +
	                                '<div class="k-widget k-upload">' +
	                                    '<div class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-upload-button">' +
	                                        '<span class="k-button-icon k-icon k-i-plus"></span>' +
	                                        '<span class="k-button-text">#=messages.uploadFile#</span>' +
	                                        '<input type="file" name="file" />' +
	                                    '</div>' +
	                                '</div>' +
	                            '# } #' +

	                            '# if (showDelete) { #' +
	                                '<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button k-disabled"><span class="k-button-icon k-icon k-i-close"></span></button>' +
	                            '# } #' +
	                            '<div class="k-tiles-arrange">' +
	                                '<label>#=messages.orderBy#: <select></select></label>' +
	                            '</div>' +

	                            '<span class="k-toolbar-spacer"></span>' +

	                            '<input data-role="searchbox" />' +

	                        '</div>';

	    extend(true, kendo.data, {
	        schemas: {
	            "filebrowser": {
	                data: function(data) {
	                    return data.items || data || [];
	                },
	                model: {
	                    id: "name",
	                    fields: {
	                        name: "name",
	                        size: "size",
	                        type: "type"
	                    }
	                }
	            }
	        }
	    });

	    extend(true, kendo.data, {
	        transports: {
	            "filebrowser": kendo.data.RemoteTransport.extend({
	                init: function(options) {
	                    kendo.data.RemoteTransport.fn.init.call(this, $.extend(true, {}, this.options, options));
	                },
	                _call: function(type, options) {
	                    options.data = $.extend({}, options.data, { path: this.options.path() });

	                    if (isFunction(this.options[type])) {
	                        this.options[type].call(this, options);
	                    } else {
	                        kendo.data.RemoteTransport.fn[type].call(this, options);
	                    }
	                },
	                read: function(options) {
	                    this._call("read", options);
	                },
	                create: function(options) {
	                    this._call("create", options);
	                },
	                destroy: function(options) {
	                    this._call("destroy", options);
	                },
	                update: function() {
	                    //updates are handled by the upload
	                },
	                options: {
	                    read: {
	                        type: "POST"
	                    },
	                    update: {
	                        type: "POST"
	                    },
	                    create: {
	                        type: "POST"
	                    },
	                    destroy: {
	                        type: "POST"
	                    }
	                }
	            })
	        }
	    });

	    function bindDragEventWrappers(element, onDragEnter, onDragLeave) {
	        var hideInterval, lastDrag;

	        element
	            .on("dragenter" + NS, function() {
	                onDragEnter();
	                lastDrag = new Date();

	                if (!hideInterval) {
	                    hideInterval = setInterval(function() {
	                        var sinceLastDrag = new Date() - lastDrag;
	                        if (sinceLastDrag > 100) {
	                            onDragLeave();

	                            clearInterval(hideInterval);
	                            hideInterval = null;
	                        }
	                    }, 100);
	                }
	            })
	            .on("dragover" + NS, function() {
	                lastDrag = new Date();
	            });
	    }

	    function concatPaths(path, name) {
	        if(path === undefined || !path.match(/\/$/)) {
	            path = (path || "") + "/";
	        }
	        return path + name;
	    }

	    function sizeFormatter(value) {
	        if(!value) {
	            return "";
	        }

	        var suffix = " bytes";

	        if (value >= 1073741824) {
	            suffix = " GB";
	            value /= 1073741824;
	        } else if (value >= 1048576) {
	            suffix = " MB";
	            value /= 1048576;
	        } else  if (value >= 1024) {
	            suffix = " KB";
	            value /= 1024;
	        }

	        return Math.round(value * 100) / 100 + suffix;
	    }

	    function fieldName(fields, name) {
	        var descriptor = fields[name];

	        if (isPlainObject(descriptor)) {
	            return descriptor.from || descriptor.field || name;
	        }
	        return descriptor;
	    }

	    var FileBrowser = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            options = options || {};

	            Widget.fn.init.call(that, element, options);

	            that.element.addClass("k-filebrowser");

	            that.element
	                .on(CLICK + NS, ".k-filebrowser-toolbar button:not(.k-disabled):has(.k-i-close)", proxy(that._deleteClick, that))
	                .on(CLICK + NS, ".k-filebrowser-toolbar button:not(.k-disabled):has(.k-i-folder-add)", proxy(that._addClick, that))
	                .on("keydown" + NS, ".k-listview-item.k-state-selected input", proxy(that._directoryKeyDown, that))
	                .on("blur" + NS, ".k-listview-item.k-state-selected input", proxy(that._directoryBlur, that));

	            that._dataSource();

	            that.refresh();

	            that.path(that.options.path);
	        },

	        options: {
	            name: "FileBrowser",
	            messages: {
	                uploadFile: "Upload",
	                orderBy: "Arrange by",
	                orderByName: "Name",
	                orderBySize: "Size",
	                directoryNotFound: "A directory with this name was not found.",
	                emptyFolder: "Empty Folder",
	                deleteFile: 'Are you sure you want to delete "{0}"?',
	                invalidFileType: "The selected file \"{0}\" is not valid. Supported file types are {1}.",
	                overwriteFile: "A file with name \"{0}\" already exists in the current directory. Do you want to overwrite it?",
	                dropFilesHere: "drop file here to upload",
	                search: "Search"
	            },
	            transport: {},
	            path: "/",
	            fileTypes: "*.*"
	        },

	        events: [ERROR, CHANGE, APPLY],

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(that);

	            that.dataSource
	                .unbind(ERROR, that._errorHandler);

	            that.element
	                .add(that.list)
	                .add(that.toolbar)
	                .off(NS);

	            kendo.destroy(that.element);
	        },

	        value: function() {
	            var that = this,
	                selected = that._selectedItem(),
	                path,
	                fileUrl = that.options.transport.fileUrl;

	            if (selected && selected.get(TYPEFIELD) === "f") {
	                path = concatPaths(that.path(), selected.get(NAMEFIELD)).replace(trimSlashesRegExp, "");
	                if (fileUrl) {
	                    path = isFunction(fileUrl) ? fileUrl(path) : kendo.format(fileUrl, encodeURIComponent(path));
	                }
	                return path;
	            }
	        },

	        _selectedItem: function() {
	            var listView = this.listView,
	                selected = listView.select();

	            if (selected.length) {
	                return this.dataSource.getByUid(selected.attr(kendo.attr("uid")));
	            }
	        },

	        _toolbar: function() {
	            var that = this,
	                template = kendo.template(TOOLBARTMPL),
	                messages = that.options.messages,
	                arrangeBy = [
	                    { text: messages.orderByName, value: "name" },
	                    { text: messages.orderBySize, value: "size" }
	                ];

	            that.toolbar = $(template({
	                    messages: messages,
	                    showUpload: that.options.transport.uploadUrl,
	                    showCreate: that.options.transport.create,
	                    showDelete: that.options.transport.destroy
	                }))
	                .appendTo(that.element)
	                .find(".k-upload input")
	                .kendoUpload({
	                    multiple: false,
	                    localization: {
	                        dropFilesHere: messages.dropFilesHere
	                    },
	                    async: {
	                        saveUrl: that.options.transport.uploadUrl,
	                        autoUpload: true
	                    },
	                    upload: proxy(that._fileUpload, that),
	                    error: function(e) {
	                        that._error({ xhr: e.XMLHttpRequest, status: "error" });
	                    }
	                }).end();

	            that.upload = that.toolbar
	                .find(".k-upload input")
	                .data("kendoUpload");

	            that.arrangeBy = that.toolbar.find(".k-tiles-arrange select")
	                .kendoDropDownList({
	                    dataSource: arrangeBy,
	                    dataTextField: "text",
	                    dataValueField: "value",
	                    change: function() {
	                        that.orderBy(this.value());
	                    }
	                })
	                .data("kendoDropDownList");

	            that.searchBox = that.toolbar.find("input[data-role='searchbox']")
	                .kendoSearchBox({
	                    label: that.options.messages.search,
	                    change: function() {
	                        that.search(this.value());
	                    }
	                }).data("kendoSearchBox");

	            that._attachDropzoneEvents();
	        },

	        _attachDropzoneEvents: function() {
	            var that = this;

	            if (that.options.transport.uploadUrl) {
	                bindDragEventWrappers($(document.documentElement),
	                    $.proxy(that._dropEnter, that),
	                    $.proxy(that._dropLeave, that)
	                );
	                that._scrollHandler = proxy(that._positionDropzone, that);
	            }
	        },

	        _dropEnter: function() {
	            this._positionDropzone();
	            $(document).on("scroll" + NS, this._scrollHandler);
	        },

	        _dropLeave: function() {
	            this._removeDropzone();
	            $(document).off("scroll" + NS, this._scrollHandler);
	        },

	        _positionDropzone: function() {
	            var that = this,
	                element = that.element,
	                offset = element.offset();

	            that.toolbar.find(".k-dropzone")
	                .addClass("k-filebrowser-dropzone")
	                .offset(offset)
	                .css({
	                    width: element[0].clientWidth,
	                    height: element[0].clientHeight,
	                    lineHeight: element[0].clientHeight + "px"
	                });
	        },

	        _removeDropzone: function() {
	            this.toolbar.find(".k-dropzone")
	                .removeClass("k-filebrowser-dropzone")
	                .css({ width: "", height: "", lineHeight: "", top: "", left: "" });
	        },

	        _deleteClick: function() {
	            var that = this,
	                item = that.listView.select(),
	                message = kendo.format(that.options.messages.deleteFile, item.find(".k-file-name").text());

	            if (item.length && that._showMessage(message, "confirm")) {
	                that.listView.remove(item);
	            }
	        },

	        _addClick: function() {
	            this.createDirectory();
	        },

	        _getFieldName: function(name) {
	            return fieldName(this.dataSource.reader.model.fields, name);
	        },

	        _fileUpload: function(e) {
	            var that = this,
	                options = that.options,
	                fileTypes = options.fileTypes,
	                filterRegExp = new RegExp(("(" + fileTypes.split(",").join(")|(") + ")").replace(/\*\./g , ".*."), "i"),
	                fileName = e.files[0].name,
	                fileSize = e.files[0].size,
	                fileNameField = NAMEFIELD,
	                sizeField = SIZEFIELD,
	                file;

	            if (filterRegExp.test(fileName)) {
	                e.data = { path: that.path() };

	                file = that._createFile(fileName, fileSize);

	                if (!file) {
	                    e.preventDefault();
	                } else {
	                    that.upload.one("success", function(e) {
	                        var model = that._insertFileToList(file);

	                        if(model._override) {
	                            model.set(fileNameField, e.response[that._getFieldName(fileNameField)]);
	                            model.set(sizeField, e.response[that._getFieldName(sizeField)]);

	                            that.listView.dataSource.pushUpdate(model);
	                        }

	                        that._tiles = that.listView.items().filter("[" + kendo.attr("type") + "=f]");
	                    });
	                }
	            } else {
	                e.preventDefault();
	                that._showMessage(kendo.format(options.messages.invalidFileType, fileName, fileTypes));
	            }
	        },

	        _findFile: function(name) {
	            var data = this.dataSource.data(),
	                idx,
	                result,
	                typeField = TYPEFIELD,
	                nameField = NAMEFIELD,
	                length;

	            name = name.toLowerCase();

	            for (idx = 0, length = data.length; idx < length; idx++) {
	                if (data[idx].get(typeField) === "f" &&
	                    data[idx].get(nameField).toLowerCase() === name) {

	                    result = data[idx];
	                    break;
	                }
	            }
	            return result;
	        },

	        _createFile: function(fileName, fileSize) {
	            var that = this,
	                model = {},
	                typeField = TYPEFIELD,
	                file = that._findFile(fileName);

	            if (file) {
	                if (!that._showMessage(kendo.format(that.options.messages.overwriteFile, fileName), "confirm")) {
	                    return null;
	                } else {
	                    file._override = true;
	                    return file;
	                }
	            }

	            model[typeField] = "f";
	            model[NAMEFIELD] = fileName;
	            model[SIZEFIELD] = fileSize;

	            return model;
	        },

	        _insertFileToList: function(model) {
	            var index;
	            if(model._override) {
	                return model;
	            }

	            var dataSource = this.dataSource;
	            var view = dataSource.view();

	            for (var i = 0, length = view.length; i < length; i++) {
	                if (view[i].get(TYPEFIELD) === "f") {
	                    index = i;
	                    break;
	                }
	            }

	            return dataSource.insert(++index, model);
	        },

	        createDirectory: function() {
	            var that = this,
	                idx,
	                length,
	                lastDirectoryIdx = 0,
	                typeField = TYPEFIELD,
	                nameField = NAMEFIELD,
	                view = that.dataSource.data(),
	                name = that._nameDirectory(),
	                model = new that.dataSource.reader.model();

	            for (idx = 0, length = view.length; idx < length; idx++) {
	                if (view[idx].get(typeField) === "d") {
	                    lastDirectoryIdx = idx;
	                }
	            }

	            model.set(typeField, "d");
	            model.set(nameField, name);

	            that.listView.one("dataBound", function() {
	                var selected = that.listView.items()
	                    .filter("[" + kendo.attr("uid") + "=" + model.uid + "]");

	                if (selected.length) {
	                    this.edit(selected);
	                }

	                this.element.scrollTop(selected.attr("offsetTop") - this.element[0].offsetHeight);

	                setTimeout(function() {
	                    that.listView.element.find('.k-edit-item input').select();
	                });
	            })
	            .one("save", function(e) {
	                var value = e.model.get(nameField);

	                if (!value) {
	                    e.model.set(nameField, name);
	                } else {
	                    e.model.set(nameField, that._nameExists(value, model.uid) ? that._nameDirectory() : value);
	                }
	            });

	            that.dataSource.insert(++lastDirectoryIdx, model);
	        },

	        _directoryKeyDown: function(e) {
	            if (e.keyCode == 13) {
	                e.currentTarget.blur();
	            }
	        },

	        _directoryBlur: function() {
	            this.listView.save();
	        },

	        _nameExists: function(name, uid) {
	            var data = this.dataSource.data(),
	                typeField = TYPEFIELD,
	                nameField = NAMEFIELD,
	                idx,
	                length;

	            for (idx = 0, length = data.length; idx < length; idx++) {
	                if (data[idx].get(typeField) === "d" &&
	                    data[idx].get(nameField).toLowerCase() === name.toLowerCase() &&
	                    data[idx].uid !== uid) {
	                    return true;
	                }
	            }
	            return false;
	        },

	        _nameDirectory: function() {
	            var name = "New folder",
	                data = this.dataSource.data(),
	                directoryNames = [],
	                typeField = TYPEFIELD,
	                nameField = NAMEFIELD,
	                candidate,
	                idx,
	                length;

	            for (idx = 0, length = data.length; idx < length; idx++) {
	                if (data[idx].get(typeField) === "d" && data[idx].get(nameField).toLowerCase().indexOf(name.toLowerCase()) > -1) {
	                    directoryNames.push(data[idx].get(nameField));
	                }
	            }

	            if ($.inArray(name, directoryNames) > -1) {
	                idx = 2;

	                do {
	                    candidate = name + " (" + idx + ")";
	                    idx++;
	                } while ($.inArray(candidate, directoryNames) > -1);

	                name = candidate;
	            }

	            return name;
	        },

	        orderBy: function(field) {
	            this.dataSource.sort([
	                { field: TYPEFIELD, dir: "asc" },
	                { field: field, dir: "asc" }
	            ]);
	        },

	        search: function(name) {
	            this.dataSource.filter({
	                field: NAMEFIELD,
	                operator: "contains",
	                value: name
	            });
	        },

	        _content: function() {
	            var that = this;

	            that.list = $('<div class="k-filemanager-listview" />')
	                .appendTo(that.element)
	                .on("dblclick" + NS, ".k-listview-item", proxy(that._dblClick, that));

	            that.listView = new kendo.ui.ListView(that.list, {
	                layout: "flex",
	                flex: {
	                    direction: "row",
	                    wrap: "wrap"
	                },
	                dataSource: that.dataSource,
	                template: that._itemTmpl(),
	                editTemplate: that._editTmpl(),
	                selectable: true,
	                autoBind: false,
	                dataBinding: function(e) {
	                    that.toolbar.find(".k-i-close").parent().addClass("k-disabled");

	                    if (e.action === "remove" || e.action === "sync") {
	                        e.preventDefault();
	                        kendo.ui.progress(that.listView.content, false);
	                    }
	                },
	                dataBound: function() {
	                    if (that.dataSource.view().length) {
	                        that._tiles = this.items().filter("[" + kendo.attr("type") + "=f]");
	                    } else {
	                        this.content.append(EMPTYTILE({ text: that.options.messages.emptyFolder }));
	                    }
	                },
	                change: proxy(that._listViewChange, that)
	            });
	        },

	        _dblClick: function(e) {
	            var that = this,
	                li = $(e.currentTarget);

	            if (li.hasClass("k-edit-item")) {
	                that._directoryBlur();
	            }

	            if (li.filter("[" + kendo.attr("type") + "=d]").length) {
	                var folder = that.dataSource.getByUid(li.attr(kendo.attr("uid")));
	                if (folder) {
	                    that.path(concatPaths(that.path(), folder.get(NAMEFIELD)));
	                    that.breadcrumbs.value("/" + that.path());
	                }
	            } else if (li.filter("[" + kendo.attr("type") + "=f]").length) {
	                that.trigger(APPLY);
	            }
	        },

	        _listViewChange: function() {
	            var selected = this._selectedItem();

	            if (selected) {
	                this.toolbar.find(".k-i-close").parent().removeClass("k-disabled");
	                this.trigger(CHANGE, { selected: selected });
	            }
	        },

	        _dataSource: function() {
	            var that = this,
	                options = that.options,
	                transport = options.transport,
	                typeSortOrder = extend({}, DEFAULTSORTORDER),
	                nameSortOrder = { field: NAMEFIELD, dir: "asc" },
	                schema,
	                dataSource = {
	                    type: transport.type || "filebrowser",
	                    sort: [typeSortOrder, nameSortOrder]
	                };

	            if (isPlainObject(transport)) {
	                transport.path = proxy(that.path, that);
	                dataSource.transport = transport;
	            }

	            if (isPlainObject(options.schema)) {
	                dataSource.schema = options.schema;
	            } else if (transport.type && isPlainObject(kendo.data.schemas[transport.type])) {
	                schema = kendo.data.schemas[transport.type];
	            }

	            if (that.dataSource && that._errorHandler) {
	                that.dataSource.unbind(ERROR, that._errorHandler);
	            } else {
	                that._errorHandler = proxy(that._error, that);
	            }

	            that.dataSource = kendo.data.DataSource.create(dataSource)
	                .bind(ERROR, that._errorHandler);
	        },

	        _navigation: function() {
	            var that = this,
	                navigation = $('<div class="k-floatwrap"><nav></nav></div>')
	                    .appendTo(this.element);

	            that.breadcrumbs = navigation.find("nav").first()
	                    .kendoBreadcrumb({
	                        editable: true,
	                        gap: 50,
	                        value: that.options.path || "/",
	                        change: function() {
	                            that.path(this.value());
	                        }
	                    }).data("kendoBreadcrumb");
	        },

	        _error: function(e) {
	            var that = this,
	                status;

	            if (!that.trigger(ERROR, e)) {
	                status = e.xhr.status;

	                if (e.status == 'error') {
	                    if (status == '404') {
	                        that._showMessage(that.options.messages.directoryNotFound);
	                    } else if (status != '0') {
	                        that._showMessage('Error! The requested URL returned ' + status + ' - ' + e.xhr.statusText);
	                    }
	                } else if (status == 'timeout') {
	                    that._showMessage('Error! Server timeout.');
	                }

	                var dataSource = that.dataSource;
	                if (dataSource.hasChanges()) {
	                    dataSource.cancelChanges();
	                }
	            }
	        },

	        _showMessage: function(message, type) {
	            return window[type || "alert"](message);
	        },

	        refresh: function() {
	            var that = this;
	            that._navigation();
	            that._toolbar();
	            that._content();
	        },

	        _editTmpl: function() {
	            var html = '<div class="k-listview-item k-state-selected" ' + kendo.attr("uid") + '="#=uid#" ';

	            html += kendo.attr("type") + '="${' + TYPEFIELD + '}">';
	            html += '#if(' + TYPEFIELD + ' == "d") { #';
	            html += '<div class="k-file-preview"><span class="k-file-icon k-icon k-i-folder"></span></div>';
	            html += "#}else{#";
	            html += '<div class="k-file-preview"><span class="k-file-icon k-icon k-i-loading"></span></div>';
	            html += "#}#";
	            html += '#if(' + TYPEFIELD + ' == "d") { #';
	            html += '<span class="k-file-name"><span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"><input class="k-input-inner" ' + kendo.attr("bind") + '="value:' + NAMEFIELD + '"/></span></span>';
	            html += "#}#";
	            html += '</div>';

	            return proxy(kendo.template(html), { sizeFormatter: sizeFormatter } );
	        },

	        _itemTmpl: function() {
	            var html = '<div class="k-listview-item" ' + kendo.attr("uid") + '="#=uid#" ';

	            html += kendo.attr("type") + '="${' + TYPEFIELD + '}">';
	            html += '#if(' + TYPEFIELD + ' == "d") { #';
	            html += '<div class="k-file-preview"><span class="k-file-icon k-icon k-i-folder"></span></div>';
	            html += "#}else{#";
	            html += '<div class="k-file-preview"><span class="k-file-icon k-icon k-i-file"></span></div>';
	            html += "#}#";
	            html += '<span class="k-file-name">${' + NAMEFIELD + '}</span>';
	            html += '#if(' + TYPEFIELD + ' == "f") { # <span class="k-file-size">${this.sizeFormatter(' + SIZEFIELD + ')}</span> #}#';
	            html += '</div>';

	            return proxy(kendo.template(html), { sizeFormatter: sizeFormatter } );
	        },

	        path: function(value) {
	            var that = this,
	                path = that._path || "";

	            if (value !== undefined) {
	                that._path = value.replace(trimSlashesRegExp, "") + "/";
	                that.dataSource.read({ path: that._path });
	                return;
	            }

	            if (path) {
	                path = path.replace(trimSlashesRegExp, "");
	            }

	            return path === "/" || path === "" ? "" : (path + "/");
	        }
	    });

	    var SearchBox = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            options = options || {};

	            Widget.fn.init.call(that, element, options);

	            if (placeholderSupported) {
	                that.element.attr("placeholder", that.options.label);
	            }

	            that._wrapper();

	            that.element
	                .on("keydown" + SEARCHBOXNS, proxy(that._keydown, that))
	                .on("change" + SEARCHBOXNS, proxy(that._updateValue, that));

	            that.wrapper
	                .on(CLICK + SEARCHBOXNS, "a", proxy(that._click, that));

	            if (!placeholderSupported) {
	                that.element.on("focus" + SEARCHBOXNS, proxy(that._focus, that))
	                    .on("blur" + SEARCHBOXNS, proxy(that._blur, that));
	            }
	        },

	        options: {
	            name: "SearchBox",
	            label: "Search",
	            value: ""
	        },

	        events: [ CHANGE ],

	        destroy: function() {
	            var that = this;

	            that.wrapper
	                .add(that.element)
	                .add(that.label)
	                .off(SEARCHBOXNS);

	            Widget.fn.destroy.call(that);
	        },

	        _keydown: function(e) {
	            if (e.keyCode === 13) {
	                this._updateValue();
	            }
	        },

	        _click: function(e) {
	            e.preventDefault();
	            this._updateValue();
	        },

	        _updateValue: function() {
	            var that = this,
	                value = that.element.val();

	            if (value !== that.value()) {
	                that.value(value);

	                that.trigger(CHANGE);
	            }
	        },

	        _blur: function() {
	            this._updateValue();
	            this._toggleLabel();
	        },

	        _toggleLabel: function() {
	            if (!placeholderSupported) {
	                this.label.toggle(!this.element.val());
	            }
	        },

	        _focus: function() {
	            this.label.hide();
	        },

	        _wrapper: function() {
	            var element = this.element,
	                wrapper = element.parents(".k-search-wrap");

	            element[0].style.width = "";
	            element.addClass("k-input-inner");

	            if (!wrapper.length) {
	                wrapper = element.wrap($('<div class="k-widget k-search-wrap"><span class="k-textbox k-input k-input-md k-rounded-md k-input-solid"></span></div>')).parents(".k-search-wrap");
	                if (!placeholderSupported) {
	                    $('<label style="display:block">' + this.options.label + '</label>').insertBefore(element);
	                }
	                $('<span class="k-input-suffix"><a href="#" class="k-icon k-i-zoom k-search"/></span>').appendTo(wrapper.find(".k-textbox"));
	            }

	            this.wrapper = wrapper;
	            this.label = wrapper.find(">label");
	        },

	        value: function(value) {
	            var that = this;

	            if (value !== undefined) {
	                that.options.value = value;
	                that.element.val(value);
	                that._toggleLabel();
	                return;
	            }
	            return that.options.value;
	        }
	    });

	    kendo.ui.plugin(FileBrowser);
	    kendo.ui.plugin(SearchBox);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1266:
/***/ (function(module, exports) {

	module.exports = require("./kendo.listview");

/***/ }),

/***/ 1267:
/***/ (function(module, exports) {

	module.exports = require("./kendo.upload");

/***/ }),

/***/ 1268:
/***/ (function(module, exports) {

	module.exports = require("./kendo.breadcrumb");

/***/ })

/******/ });