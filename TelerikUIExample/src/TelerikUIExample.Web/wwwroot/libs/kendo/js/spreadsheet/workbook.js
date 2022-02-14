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

	__webpack_require__(1704);
	module.exports = __webpack_require__(1704);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1648:
/***/ (function(module, exports) {

	module.exports = require("./runtime");

/***/ }),

/***/ 1676:
/***/ (function(module, exports) {

	module.exports = require("./references");

/***/ }),

/***/ 1704:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(1648), __webpack_require__(1676), __webpack_require__(1705) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    // jshint latedef: nofunc
	    // jshint eqnull: true, laxbreak: true

	    var $ = kendo.jQuery;
	    var Formula = kendo.spreadsheet.calc.runtime.Formula;
	    var Ref = kendo.spreadsheet.Ref;
	    var CalcError = kendo.spreadsheet.CalcError;

	    kendo.spreadsheet.messages.workbook = {
	        defaultSheetName: "Sheet"
	    };

	    function loadBinary(url, callback) {
	        var xhr = new XMLHttpRequest();
	        xhr.onload = function() {
	            callback(xhr.response, xhr.getResponseHeader("Content-Type"));
	        };
	        xhr.onerror = function() {
	            callback(null);
	        };
	        xhr.open("GET", url);
	        xhr.responseType = "arraybuffer";
	        xhr.send();
	    }

	    var Workbook = kendo.Observable.extend({
	        options: {},

	        init: function(options, view) {
	            kendo.Observable.fn.init.call(this);

	            this.options = options;

	            this._view = view;
	            this._sheets = [];
	            this._images = {};
	            this._imgID = 0;

	            this._sheetsSearchCache = {};

	            this._sheet = this.insertSheet({
	                rows: this.options.rows,
	                columns: this.options.columns,
	                rowHeight: this.options.rowHeight,
	                columnWidth: this.options.columnWidth,
	                headerHeight: this.options.headerHeight,
	                headerWidth: this.options.headerWidth,
	                dataSource: this.options.dataSource
	            });

	            this.undoRedoStack = new kendo.util.UndoRedoStack();
	            this.undoRedoStack.bind(["undo", "redo"], this._onUndoRedo.bind(this));

	            this._context = new kendo.spreadsheet.FormulaContext(this);
	            this._validationContext = new kendo.spreadsheet.ValidationFormulaContext(this);
	            this._names = Object.create(null);

	            this.fromJSON(this.options);
	        },

	        clipboard: function() {
	            if(!this._clipboard) {
	                 this._clipboard = new kendo.spreadsheet.Clipboard(this);
	            }
	            return this._clipboard;
	        },

	        destroy: function() {
	            this.unbind();

	            if (this._clipboard) {
	                this._clipboard.destroy();
	            }
	        },

	        events: [
	            "cut",
	            "copy",
	            "paste",
	            "changing",
	            "change",
	            "excelImport",
	            "excelExport",
	            "insertSheet",
	            "removeSheet",
	            "selectSheet",
	            "renameSheet",
	            "insertRow",
	            "insertColumn",
	            "deleteRow",
	            "deleteColumn",
	            "hideRow",
	            "hideColumn",
	            "unhideRow",
	            "unhideColumn",
	            "select",
	            "changeFormat",
	            "dataBinding",
	            "dataBound",
	            "progress"
	        ],

	        _sheetChanging: function(e) {
	            if (this.trigger("changing", e)) {
	                e.preventDefault();
	            }
	        },

	        _sheetChange: function(e) {
	            this.trigger("change", e);
	        },

	        _sheetInsertRow: function(e) {
	            if (this.trigger("insertRow", {
	                sheet: e.sender,
	                index: e.index
	            })) {
	                e.preventDefault();
	            }
	        },

	        _sheetInsertColumn: function(e) {
	            if (this.trigger("insertColumn", {
	                sheet: e.sender,
	                index: e.index
	            })) {
	                e.preventDefault();
	            }
	        },

	        _sheetDeleteRow: function(e) {
	            if (this.trigger("deleteRow", {
	                sheet: e.sender,
	                index: e.index
	            })) {
	                e.preventDefault();
	            }
	        },

	        _sheetDeleteColumn: function(e) {
	            if (this.trigger("deleteColumn", {
	                sheet: e.sender,
	                index: e.index
	            })) {
	                e.preventDefault();
	            }
	        },

	        _sheetHideRow: function(e) {
	            if (this.trigger("hideRow", {
	                sheet: e.sender,
	                index: e.index
	            })) {
	                e.preventDefault();
	            }
	        },

	        _sheetHideColumn: function(e) {
	            if (this.trigger("hideColumn", {
	                sheet: e.sender,
	                index: e.index
	            })) {
	                e.preventDefault();
	            }
	        },

	        _sheetUnhideRow: function(e) {
	            if (this.trigger("unhideRow", {
	                sheet: e.sender,
	                index: e.index
	            })) {
	                e.preventDefault();
	            }
	        },

	        _sheetUnhideColumn: function(e) {
	            if (this.trigger("unhideColumn", {
	                sheet: e.sender,
	                index: e.index
	            })) {
	                e.preventDefault();
	            }
	        },

	        _sheetSelect: function(e) {
	            this.trigger("select", e);
	        },

	        _sheetDataBinding: function(e) {
	            if (this.trigger("dataBinding", {
	                sheet: e.sender
	            })) {
	                e.preventDefault();
	            }
	        },

	        _sheetDataBound: function(e) {
	            this.trigger("dataBound", {
	                sheet: e.sender
	            });
	        },

	        _sheetProgress: function(e) {
	            var that = this;

	            setTimeout(function() {
	                that.trigger("progress", {
	                    toggle: e.toggle
	                });
	            });
	        },

	        _sheetCommandRequest: function(e) {
	            this.trigger("commandRequest", e);
	        },

	        _inputForRef: function(ref) {
	            var self = this;
	            return self._sheet.withCultureDecimals(function(){
	                return new kendo.spreadsheet.Range(ref, self._sheet).input();
	            });
	        },

	        _onUndoRedo: function(e) {
	            e.command.range().select();
	        },

	        execute: function(options) {
	            var commandOptions = $.extend({ workbook: this }, options.options);
	            var command = new kendo.spreadsheet[options.command](commandOptions);
	            var sheet = this.activeSheet();

	            if (commandOptions.origin) {
	                command.origin(commandOptions.origin);
	            }

	            if (commandOptions.operatingRange) {
	                command.range(commandOptions.operatingRange);
	            } else {
	                command.range(sheet.selection());
	            }

	            if (commandOptions.editRange) {
	                command._editRange = commandOptions.editRange;
	            }

	            var result = command.exec();

	            if (!result || result.reason !== "error") {
	                if (!command.cannotUndo) {
	                    this.undoRedoStack.push(command);
	                }
	            }

	            // when the undo/redo stack is truncated (by e.g. adding a
	            // non-redo command after undoing) it's possible to
	            // discard images from the dropped commands.
	            this.cleanupImages();

	            return result;
	        },

	        resetFormulas: function() {
	            this._sheets.forEach(function(sheet){
	                sheet.resetFormulas();
	            });
	        },

	        resetValidations: function() {
	            this._sheets.forEach(function(sheet){
	                sheet.resetValidations();
	            });
	        },

	        refresh: function(reason) {
	            if (reason.recalc) {
	                this.resetFormulas();
	                this.resetValidations();
	                this._sheet.recalc(this._context);
	                this._sheet.revalidate(this._validationContext);
	            }
	        },

	        activeSheet: function(sheet) {
	            if (sheet === undefined) {
	                return this._sheet;
	            }

	            if (!this.sheetByName(sheet.name())) {
	                return;
	            }

	            this._sheet = sheet;

	            //TODO: better way to get all reasons?
	            sheet.triggerChange(kendo.spreadsheet.ALL_REASONS);
	        },

	        moveSheetToIndex: function(sheet, toIndex) {
	            var fromIndex = this.sheetIndex(sheet);
	            var sheets = this._sheets;

	            if (fromIndex === -1) {
	                return;
	            }

	            this._sheetsSearchCache = {};

	            sheets.splice(toIndex, 0, sheets.splice(fromIndex, 1)[0]);

	            this.trigger("change", { sheetSelection: true });
	        },

	        insertSheet: function(options) {
	            options = options || {};
	            var that = this;
	            var insertIndex = typeof options.index === "number" ? options.index : that._sheets.length;
	            var sheetName;
	            var sheets = that._sheets;

	            var getUniqueSheetName = function(sheetNameSuffix) {
	                sheetNameSuffix = sheetNameSuffix ? sheetNameSuffix : 1;

	                var name = kendo.spreadsheet.messages.workbook.defaultSheetName + sheetNameSuffix;

	                if (!that.sheetByName(name)) {
	                    return name;
	                }

	                return getUniqueSheetName(sheetNameSuffix + 1);
	            };

	            if (options.name && that.sheetByName(options.name)) {
	                return;
	            }

	            this._sheetsSearchCache = {};

	            sheetName = options.name || getUniqueSheetName();

	            var sheet = new kendo.spreadsheet.Sheet(
	                options.rows || this.options.rows,
	                options.columns || this.options.columns,
	                options.rowHeight || this.options.rowHeight,
	                options.columnWidth || this.options.columnWidth,
	                options.headerHeight || this.options.headerHeight,
	                options.headerWidth || this.options.headerWidth,
	                options.defaultCellStyle || this.options.defaultCellStyle
	            );

	            sheet._workbook = this;

	            sheet._name(sheetName);

	            this._bindSheetEvents(sheet);

	            sheets.splice(insertIndex, 0, sheet);

	            if (options.data) {
	                sheet.fromJSON(options.data);
	            }

	            if (options.dataSource) {
	                sheet.setDataSource(options.dataSource);
	            }

	            this.trigger("change", { sheetSelection: true });

	            return sheet;
	        },

	        _bindSheetEvents: function(sheet) {
	            sheet.bind("changing", this._sheetChanging.bind(this));
	            sheet.bind("change", this._sheetChange.bind(this));
	            sheet.bind("insertRow", this._sheetInsertRow.bind(this));
	            sheet.bind("insertColumn", this._sheetInsertColumn.bind(this));
	            sheet.bind("deleteRow", this._sheetDeleteRow.bind(this));
	            sheet.bind("deleteColumn", this._sheetDeleteColumn.bind(this));
	            sheet.bind("hideRow", this._sheetHideRow.bind(this));
	            sheet.bind("hideColumn", this._sheetHideColumn.bind(this));
	            sheet.bind("unhideRow", this._sheetUnhideRow.bind(this));
	            sheet.bind("unhideColumn", this._sheetUnhideColumn.bind(this));
	            sheet.bind("select", this._sheetSelect.bind(this));
	            sheet.bind("commandRequest", this._sheetCommandRequest.bind(this));
	            sheet.bind("dataBinding", this._sheetDataBinding.bind(this));
	            sheet.bind("dataBound", this._sheetDataBound.bind(this));
	            sheet.bind("progress", this._sheetProgress.bind(this));
	        },

	        sheets: function() {
	            return this._sheets.slice();
	        },

	        sheetByName: function (sheetName) {
	            return this._sheets[this.sheetIndex(sheetName)];
	        },

	        sheetByIndex: function(index) {
	            return this._sheets[index];
	        },

	        sheetIndex: function(sheet) {
	            var sheets = this._sheets;
	            var sheetName = (typeof sheet == "string" ? sheet : sheet.name()).toLowerCase();
	            var idx = this._sheetsSearchCache[sheetName];

	            if (idx >= 0) {
	                return idx;
	            }

	            for(idx = 0; idx < sheets.length; idx++) {
	                var name = sheets[idx].name().toLowerCase();
	                this._sheetsSearchCache[name] = idx;

	                if (name === sheetName) {
	                    return idx;
	                }
	            }

	            return -1;
	        },

	        renameSheet: function(sheet, newSheetName) {
	            var oldSheetName = sheet.name().toLowerCase();

	            if (!newSheetName ||
	                oldSheetName === newSheetName.toLowerCase() ||
	                this.sheetByName(newSheetName)) {
	                return;
	            }

	            sheet = this.sheetByName(oldSheetName);

	            if (!sheet) {
	                return;
	            }

	            this._sheetsSearchCache = {};

	            if (this.trigger("renameSheet", {
	                sheet: sheet,
	                newSheetName: newSheetName
	            })) {
	                return;
	            }

	            // update references
	            this._sheets.forEach(function(sheet){
	                sheet._forFormulas(function(formula){
	                    formula.renameSheet(oldSheetName, newSheetName);
	                });
	            });

	            this.forEachName(function(def, name){
	                // 1. redefine sheet-local names
	                if (def.nameref.renameSheet(oldSheetName, newSheetName)) {
	                    this.undefineName(name);
	                    def.name = def.nameref.print();
	                    this.nameDefinition(def.name, def);
	                }
	                // 2. if the value is reference or formula, update it
	                if (def.value instanceof Ref || def.value instanceof Formula) {
	                    def.value.renameSheet(oldSheetName, newSheetName);
	                }
	            }.bind(this));

	            sheet._name(newSheetName);

	            this.trigger("change", { sheetSelection: true });

	            return sheet;
	        },

	        removeSheet: function(sheet) {
	            var that = this;
	            var sheets = that._sheets;
	            var name = sheet.name();
	            var index = that.sheetIndex(sheet);

	            if (sheets.length === 1) {
	                return;
	            }

	            if (this.trigger("removeSheet", { sheet: sheet })) {
	                return;
	            }

	            this._sheetsSearchCache = {};

	            if (index > -1) {
	                sheet.unbind();

	                sheets.splice(index, 1);

	                if (that.activeSheet().name() === name) {
	                    var newSheet = sheets[index === sheets.length ? index-1 : index];
	                    that.activeSheet(newSheet);
	                } else {
	                    this.trigger("change", { recalc: true,  sheetSelection: true });
	                }
	            }
	        },

	        _clearSheets: function() {
	            for (var i = 0; i < this._sheets.length; i++) {
	                this._sheets[i]._activeDrawing = [];
	                this._sheets[i]._drawings = [];
	                this._sheets[i].unbind();
	            }
	            this._sheets = [];
	            this._sheetsSearchCache = {};
	            this._names = {};
	            this._images = {};
	            this._imgID = 0;
	        },

	        // _loadImages: function() {
	        //     var self = this;
	        //     var ids = Object.keys(self._images);
	        //     var count = ids.length;
	        //     if (count) {
	        //         ids.forEach(function(id){
	        //             var img = self._images[id];
	        //             if (!img.blob) {
	        //                 loadBinary(img.url, function(data, type) {
	        //                     // XXX: can we do something better in case of error?
	        //                     if (data != null) {
	        //                         img.blob = new Blob([ data ], { type: type });
	        //                         delete img.url;
	        //                     }
	        //                     next();
	        //                 });
	        //             }
	        //         });
	        //     } else {
	        //         next();
	        //     }
	        //     function next() {
	        //         if (--count <= 0) {
	        //             self.activeSheet().triggerChange({ layout: true });
	        //         }
	        //     }
	        // },

	        fromJSON: function(json) {
	            if (json.sheets) {
	                this._clearSheets();

	                if (json.images) {
	                    this._imgID = 0;
	                    this._images = {};
	                    Object.keys(json.images).forEach(function(id){
	                        if (!isNaN(id)) {
	                            var num = parseFloat(id);
	                            if (isFinite(num)) {
	                                this._imgID = Math.max(this._imgID, num);
	                            }
	                        }
	                        this._images[id] = { url: json.images[id] };
	                    }, this);
	                    // this._loadImages();
	                }

	                for (var idx = 0; idx < json.sheets.length; idx++) {
	                    var data = json.sheets[idx];
	                    var args = sheetParamsFromJSON(data, this.options);
	                    var sheet = this.insertSheet({
	                        rows         : args.rowCount,
	                        columns      : args.columnCount,
	                        rowHeight    : args.rowHeight,
	                        columnWidth  : args.columnWidth,
	                        headerHeight : args.headerHeight,
	                        headerWidth  : args.headerWidth,
	                        data         : data
	                    });

	                    if (data.dataSource) {
	                        sheet.setDataSource(data.dataSource);
	                    }
	                }
	            }

	            if (json.activeSheet) {
	                this.activeSheet(this.sheetByName(json.activeSheet));
	            } else {
	                this.activeSheet(this._sheets[0]);
	            }

	            if (json.names) {
	                json.names.forEach(function(def){
	                    this.defineName(def.name, def.value, def.hidden);
	                }, this);
	            }
	        },

	        toJSON: function() {
	            this.resetFormulas();
	            this.resetValidations();
	            var names = Object.keys(this._names).map(function(name){
	                var def = this._names[name];
	                var val = def.value;
	                if (val instanceof Ref || val instanceof Formula) {
	                    val = val.print(0, 0, true);
	                } else if (val instanceof CalcError) {
	                    val = val + "";
	                } else {
	                    val = JSON.stringify(val);
	                }
	                return {
	                    value     : val,
	                    hidden    : def.hidden,
	                    name      : def.name,

	                    // these two are not really useful in
	                    // deserialization, but are handy in OOXML export.
	                    sheet     : def.nameref.sheet,
	                    localName : def.nameref.name
	                };
	            }, this);
	            return {
	                activeSheet: this.activeSheet().name(),
	                sheets: this._sheets.map(function(sheet) {
	                    sheet.recalc(this._context);
	                    sheet.revalidate(this._validationContext);
	                    return sheet.toJSON();
	                }, this),
	                names: names,
	                columnWidth: this.options.columnWidth,
	                rowHeight: this.options.rowHeight
	            };
	        },

	        saveJSON: function() {
	            var self = this;
	            var deferred = new $.Deferred();
	            var data = self.toJSON();
	            var ids = Object.keys(self._images).filter(function(id){
	                return self.usesImage(id) === 1;
	            });
	            var count = ids.length;
	            data.images = {};
	            if (count) {
	                ids.forEach(function(id){
	                    var img = self._images[id];
	                    if (img.blob) {
	                        var reader = new FileReader();
	                        reader.onload = function() {
	                            data.images[id] = reader.result;
	                            next();
	                        };
	                        reader.readAsDataURL(img.blob);
	                    } else {
	                        data.images[id] = img.url;
	                        next();
	                    }
	                });
	            } else {
	                next();
	            }
	            return deferred.promise();

	            function next() {
	                if (--count <= 0) {
	                    deferred.resolve(data);
	                }
	            }
	        },

	        fromFile: function(file) {
	            var deferred = new $.Deferred();
	            var promise = deferred.promise();
	            var args = { file: file, promise: promise };

	            if (file && !this.trigger("excelImport", args)) {
	                this._clearSheets();
	                kendo.spreadsheet.readExcel(file, this, deferred);
	            } else {
	                deferred.reject();
	            }

	            return promise;
	        },

	        saveAsExcel: function(options) {
	            var self = this;
	            options = $.extend({}, self.options.excel, options);
	            var data = self.toJSON();

	            if (self.trigger("excelExport", { workbook: data })) {
	                return;
	            }

	            var ids = Object.keys(self._images).filter(function(id){
	                return self.usesImage(id) === 1;
	            });
	            var count = ids.length;
	            var images = count ? {} : null;
	            if (count) {
	                ids.forEach(function(id){
	                    var img = self._images[id];
	                    if (img.blob) {
	                        var reader = new FileReader();
	                        reader.onload = function() {
	                            images[id] = {
	                                type: img.blob.type,
	                                name: img.blob.name,
	                                data: reader.result
	                            };
	                            next();
	                        };
	                        reader.readAsArrayBuffer(img.blob);
	                    } else {
	                        loadBinary(img.url, function(data, type){
	                            images[id] = { type: type, data: data };
	                            next();
	                        });
	                    }
	                });
	            } else {
	                next();
	            }

	            function next() {
	                if (--count <= 0) {
	                    data.images = images;
	                    var workbook = new kendo.ooxml.Workbook(data);
	                    kendo.saveAs({
	                        dataURI: options.forceProxy ? workbook.toDataURL() : workbook.toBlob(),
	                        fileName: data.fileName || options.fileName,
	                        proxyURL: options.proxyURL,
	                        forceProxy: options.forceProxy
	                    });
	                }
	            }
	        },

	        draw: function(options, callback) {
	            if (typeof options == "function" && !callback) {
	                callback = options;
	                options = {};
	            }
	            var parts = [], sheets = this._sheets;
	            (function loop(i){
	                if (i < sheets.length) {
	                    sheets[i].draw(kendo.spreadsheet.SHEETREF, options, function(group){
	                        parts.push(group);
	                        loop(i + 1);
	                    });
	                } else {
	                    var group = parts[0];
	                    for (i = 1; i < parts.length; ++i) {
	                        group.children = group.children.concat(parts[i].children);
	                    }
	                    callback(group);
	                }
	            })(0);
	        },

	        nameForRef: function(ref, sheet) {
	            if (sheet === undefined) {
	                sheet = ref.sheet;
	            }
	            sheet = sheet.toLowerCase();
	            var str = ref + "";
	            for (var name in this._names) {
	                var def = this._names[name];
	                var val = def.value;
	                if (val instanceof Ref) {
	                    if (!val.sheet || (val.sheet && sheet == val.sheet.toLowerCase())) {
	                        if (val + "" == str) {
	                            return def;
	                        }
	                    }
	                }
	            }
	            return { name: str };
	        },

	        defineName: function(name, value, hidden) {
	            var x = kendo.spreadsheet.calc.parseNameDefinition(name, value);
	            name = x.name.print();
	            this._names[name.toLowerCase()] = {
	                value   : x.value,
	                hidden  : hidden,
	                name    : name,
	                nameref : x.name
	            };
	        },

	        undefineName: function(name) {
	            delete this._names[name.toLowerCase()];
	        },

	        nameValue: function(name) {
	            name = name.toLowerCase();
	            if (name in this._names) {
	                return this._names[name].value;
	            }
	            return null;
	        },

	        nameDefinition: function(name, def) {
	            name = name.toLowerCase();
	            if (arguments.length > 1) {
	                if (def === undefined) {
	                    delete this._names[name];
	                } else {
	                    this._names[name] = def;
	                }
	            }
	            return this._names[name];
	        },

	        forEachName: function(func) {
	            Object.keys(this._names).forEach(function(name){
	                func(this._names[name], name);
	            }, this);
	        },

	        adjustNames: function(affectedSheet, forRow, start, delta) {
	            affectedSheet = affectedSheet.toLowerCase();
	            Object.keys(this._names).forEach(function(name){
	                var def = this._names[name];
	                var x = def.value;
	                if (x instanceof Ref &&
	                    x.sheet.toLowerCase() == affectedSheet) {
	                    def.value = x.adjust(null, null, null, null, forRow, start, delta);
	                }
	                else if (x instanceof Formula) {
	                    x.adjust(affectedSheet, forRow ? "row" : "col", start, delta);
	                }
	            }, this);
	        },

	        addImage: function(image) {
	            var id = String(++this._imgID);
	            if (typeof image == "string") {
	                this._images[id] = { url: image };
	            } else {
	                this._images[id] = { blob: image };
	            }
	            return id;
	        },

	        imageUrl: function(id) {
	            var img = this._images[id];
	            var url = img.url;
	            if (!url) {
	                url = img.url = window.URL.createObjectURL(img.blob);
	            }
	            return url;
	        },

	        cleanupImages: function() {
	            Object.keys(this._images).forEach(function(id){
	                if (!this.usesImage(id)) {
	                    var url = this._images[id].url;
	                    if (url) {
	                        window.URL.revokeObjectURL(url);
	                    }
	                    delete this._images[id];
	                }
	            }, this);
	        },

	        usesImage: function(img) {
	            var i;
	            var sheets = this._sheets;
	            for (i = sheets.length; --i >= 0;) {
	                if (sheets[i].usesImage(img)) {
	                    return 1;
	                }
	            }
	            var stack = this.undoRedoStack.stack;
	            for (i = stack.length; --i >= 0;) {
	                if (stack[i].usesImage(img)) {
	                    return 2; // signal that it's only in the undo stack
	                }
	            }
	            return false;
	        }

	    });

	    function sheetParamsFromJSON(data, options) {
	        function or(a, b, c) {
	            return a !== undefined ? a : b !== undefined ? b : c;
	        }

	        var rowCount     = or(data.rowCount, options.rows, 200),
	            columnCount  = or(data.columnCount, options.columns, 50),
	            rowHeight    = or(data.rowHeight, options.rowHeight, 20),
	            columnWidth  = or(data.columnWidth, options.columnWidth, 64),
	            headerHeight = or(data.headerHeight, options.headerHeight, 20),
	            headerWidth  = or(data.headerWidth, options.headerWidth, 32);

	        if (data.rows !== undefined) {
	            for (var i = 0; i < data.rows.length; ++i) {
	                var row = data.rows[i];
	                var ri = or(row.index, i);
	                if (ri >= rowCount) { rowCount = ri + 1; }
	                if (row.cells) {
	                    for (var j = 0; j < row.cells.length; ++j) {
	                        var cell = row.cells[j];
	                        var ci = or(cell.index, j);
	                        if (ci >= columnCount) { columnCount = ci + 1; }
	                    }
	                }
	            }
	        }

	        return {
	            rowCount     : rowCount,
	            columnCount  : columnCount,
	            rowHeight    : rowHeight,
	            columnWidth  : columnWidth,
	            headerHeight : headerHeight,
	            headerWidth  : headerWidth
	        };
	    }

	    kendo.spreadsheet.Workbook = Workbook;
	    if (kendo.PDFMixin) {
	        kendo.PDFMixin.extend(Workbook.prototype);

	        Workbook.prototype.saveAsPDF = function(options) {
	            var progress = new $.Deferred();
	            var promise = progress.promise();
	            var args = { promise: promise };
	            if (this.trigger("pdfExport", args)) {
	                return;
	            }

	            this._drawPDF(options, progress)
	            .then(function(root) {
	                return options.forceProxy
	                    ? kendo.pdf.exportPDF(root) // produce data URI for proxy
	                    : kendo.pdf.exportPDFToBlob(root);
	            })
	            .done(function(dataURI) {
	                kendo.saveAs({
	                    dataURI: dataURI,
	                    fileName: options.fileName,
	                    proxyURL: options.proxyURL,
	                    forceProxy: options.forceProxy,
	                    proxyTarget: options.proxyTarget
	                });

	                progress.resolve();
	            })
	            .fail(function(err) {
	                progress.reject(err);
	            });

	            return promise;
	        };

	        Workbook.prototype._drawPDF = function(options) {
	            var result = new $.Deferred();
	            var callback = function(group) {
	                result.resolve(group);
	            };
	            switch(options.area) {
	            case "workbook":
	                options.workbook.draw(options, callback);
	                break;
	            case "sheet":
	                options.workbook.activeSheet().draw(options, callback);
	                break;
	            case "selection":
	                options.workbook.activeSheet().selection().draw(options, callback);
	                break;
	            }

	            return result.promise();
	        };
	    }
	})(kendo);

	}, __webpack_require__(3));


/***/ }),

/***/ 1705:
/***/ (function(module, exports) {

	module.exports = require("./excel-reader");

/***/ })

/******/ });