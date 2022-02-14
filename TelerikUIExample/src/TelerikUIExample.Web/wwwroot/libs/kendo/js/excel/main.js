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

	__webpack_require__(1030);
	module.exports = __webpack_require__(1030);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = require("../kendo.data");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1030:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(5), __webpack_require__(1031) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, kendo){

	    var ExcelExporter = kendo.excel.ExcelExporter;

	    var extend = $.extend;

	    kendo.excel.TemplateService.register({
	        compile: kendo.template
	    });

	    kendo.ExcelExporter = kendo.Class.extend({
	        init: function(options) {
	            this.options = options;
	            var dataSource = options.dataSource;

	            if (dataSource instanceof kendo.data.DataSource) {

	                if (!dataSource.filter()) {
	                    dataSource.options.filter = undefined;
	                }

	                this.dataSource = new dataSource.constructor(extend(
	                    {},
	                    dataSource.options,
	                    {
	                        page: options.allPages ? 0 : dataSource.page(),
	                        filter: dataSource.filter(),
	                        pageSize: options.allPages ? dataSource.total() : dataSource.pageSize() || dataSource.total(),
	                        sort: dataSource.sort(),
	                        group: dataSource.group(),
	                        aggregate: dataSource.aggregate()
	                    }));

	                var data = dataSource.data();

	                if (data.length > 0) {
	                    if (options.hierarchy) {
	                        for (var i = 0; i < data.length; i++) {
	                            if (data[i].expanded === false || data[i].expanded === undefined) {
	                                data[i].expanded = true;
	                            }
	                        }
	                    }
	                    // Avoid toJSON() for perf and avoid data() to prevent reparenting.
	                    this.dataSource._data = data;

	                    var transport = this.dataSource.transport;
	                    if (dataSource._isServerGrouped() && transport.options && transport.options.data) { // clear the transport data when using aspnet-mvc transport
	                        transport.options.data = null;
	                    }
	                }

	            } else {
	                this.dataSource = kendo.data.DataSource.create(dataSource);
	            }
	        },

	        _hierarchy: function() {
	            var hierarchy = this.options.hierarchy;
	            var dataSource = this.dataSource;

	            if (hierarchy && dataSource.level) {
	                hierarchy = {
	                    itemLevel: function(item) {
	                        return dataSource.level(item);
	                    }
	                };

	                var view = dataSource.view();
	                var depth = 0;
	                var level;

	                for (var idx = 0; idx < view.length; idx++) {
	                    level = dataSource.level(view[idx]);

	                    if (level > depth) {
	                        depth = level;
	                    }
	                }

	                hierarchy.depth = depth + 1;
	            } else {
	                hierarchy = false;
	            }

	            return {
	                hierarchy: hierarchy
	            };
	        },

	        workbook: function() {
	            return $.Deferred($.proxy(function(d) {
	                this.dataSource.fetch()
	                    .then($.proxy(function() {

	                        var workbook = new ExcelExporter(extend({}, this.options, this._hierarchy(), {
	                            data: this.dataSource.view(),
	                            groups: this.dataSource.group(),
	                            aggregates: this.dataSource.aggregates()
	                        })).workbook();

	                        d.resolve(workbook, this.dataSource.view());
	                    }, this));
	            }, this)).promise();
	        }
	    });


	})(kendo.jQuery, kendo);

	return kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1031:
/***/ (function(module, exports) {

	module.exports = require("./kendo-excel");

/***/ })

/******/ });