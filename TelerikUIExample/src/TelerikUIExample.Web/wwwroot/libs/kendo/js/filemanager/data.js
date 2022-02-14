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

	__webpack_require__(1037);
	module.exports = __webpack_require__(1037);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = require("../kendo.data");

/***/ }),

/***/ 1037:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var kendo = window.kendo,
	        extend = $.extend,
	        data = kendo.data,
	        Node = data.Node,
	        HierarchicalDataSource = data.HierarchicalDataSource,
	        DataSource = data.DataSource;

	    extend(true, kendo.data, {
	        schemas: {
	            "filemanager": {
	                data: function(data) {
	                    return data.items || data || [];
	                },
	                model: {
	                    id: "path",
	                    hasChildren: "hasDirectories",
	                    fields: {
	                        name: {editable: true, type: "string", defaultValue: "New Folder" },
	                        size: {editable: false, type: "number"},
	                        path: {editable: false, type: "string"},
	                        extension: {editable: false, type: "string"},
	                        isDirectory: {editable: false, defaultValue: true, type: "boolean"},
	                        hasDirectories: {editable: false, defaultValue: false, type: "boolean"},
	                        created: { type: "date", editable: false},
	                        createdUtc: { type: "date", editable: false },
	                        modified: { type: "date", editable: false},
	                        modifiedUtc: { type: "date", editable: false }
	                    }
	                }
	            }
	        }
	    });

	    var FileEntry = Node.define({
	        init: function(value){
	            var that = this,
	                isDirectory = this.isDirectory;

	            Node.fn.init.call(this, value);

	            if(typeof isDirectory === "string"){
	            isDirectory = kendo.getter(isDirectory);
	            }

	            if (kendo.isFunction(isDirectory)) {
	                var isDirectoryObject = isDirectory.call(that, that);

	                if(isDirectoryObject && isDirectoryObject.length === 0){
	                    that.isDirectory = false;
	                } else{
	                    that.isDirectory = !!isDirectoryObject;
	                }
	            }

	            if (that.isDirectory) {
	                that._initChildren();
	            }
	        },
	        _initChildren: function() {
	            var that = this;
	            var children, transport, parameterMap;

	            if (!(that.children instanceof kendo.data.FileManagerDataSource)) {
	                children = that.children = new kendo.data.FileManagerDataSource(that._childrenOptions);

	                transport = children.transport;
	                parameterMap = transport.parameterMap;

	                transport.parameterMap = function(data, type) {
	                    if(type === "read" || type === "create") {
	                        data.target = that.id;
	                    }

	                    if (parameterMap) {
	                        data = parameterMap.call(that, data, type);
	                    }

	                    return data;
	                };

	                children.parent = function(){
	                    return that;
	                };

	                children.bind("change", function(e){
	                    e.node = e.node || that;
	                    that.trigger("change", e);
	                });

	                children.bind("error", function(e){
	                    var collection = that.parent();

	                    if (collection) {
	                        e.node = e.node || that;
	                        collection.trigger("error", e);
	                    }
	                });

	                that._updateChildrenField();
	            }
	        },
	        isNew: function() {
	            if(this.fileManagerNewItem) {
	                delete this.fileManagerNewItem;
	                return true;
	            }

	            return this.id === this._defaultId;
	        }
	    });


	    var FileManagerDataSource = HierarchicalDataSource.extend({
	        init: function(options) {
	            var fileEntry = FileEntry.define({
	                children: options
	            });

	            if(options.filter && !options.serverFiltering){
	                this._hierarchicalFilter = options.filter;
	                options.filter = null;
	            }

	            DataSource.fn.init.call(this, $.extend(true, {}, { schema: { modelBase: fileEntry, model: fileEntry } }, options));

	            this.isLocalBinding = this.transport instanceof kendo.data.LocalTransport;

	            this._attachBubbleHandlers();
	        },
	        insert: function(index, model) {
	            var parentNode = this.parent();

	            if (parentNode && parentNode._initChildren) {
	                if(model && model.isDirectory) {
	                    parentNode.hasDirectories = true;
	                }
	                parentNode.hasChildren = true;
	                parentNode._initChildren();
	            }

	            return DataSource.fn.insert.call(this, index, model);
	        },
	        remove: function(node){
	            var that = this,
	                parentNode = node.parentNode(),
	                dataSource = that,
	                result;

	            if (parentNode && parentNode._initChildren) {
	                dataSource = parentNode.children;
	            }

	            that._cleanDestroyed(node);

	            result = DataSource.fn.remove.call(dataSource, node);

	            if (parentNode && (dataSource.data() && !dataSource.data().length)) {
	                parentNode.hasChildren = false;
	            } else if(parentNode && !this._hasDirectories(parentNode)) {
	                parentNode.hasDirectories = false;
	            }

	            return result;
	        },
	        _cleanDestroyed: function(node){
	            var that = this,
	                dataSource = that;

	            if (node.parentNode && node.parentNode()) {
	                node = node.parentNode();
	                dataSource = node.children;
	                dataSource._destroyed = [];
	                that._cleanDestroyed(node);
	            } else {
	                dataSource._destroyed = [];
	            }
	        },
	        _hasDirectories: function(node){
	            var result;

	            if(!node.children.data()) {
	                return false;
	            }

	            result = node.children.data().filter(function(item){
	                return item.isDirectory;
	            });

	            return !!result.length;
	        }
	    });

	    FileManagerDataSource.create = function(options) {
	        options = options && options.push ? { data: options } : options;

	        var dataSource = options || {},
	            data = dataSource.data;

	        if (data && data._dataSource) {
	            return data._dataSource;
	        }

	        dataSource.data = data;

	        return dataSource instanceof FileManagerDataSource ? dataSource : new FileManagerDataSource(dataSource);
	    };

	    kendo.observableFileManagerData = function(array) {
	        var dataSource = FileManagerDataSource.create({
	            data: array,
	            schema: kendo.data.schemas.filemanager
	        });

	        dataSource.fetch();

	        dataSource._data._dataSource = dataSource;

	        return dataSource._data;
	    };

	    extend(kendo.data, {
	        FileManagerDataSource: FileManagerDataSource,
	        FileEntry: FileEntry
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });