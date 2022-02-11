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

	module.exports = __webpack_require__(1640);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 896:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.core");

/***/ }),

/***/ 1640:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(896)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "dpl-processor",
	    name: "DPL-Processor",
	    category: "framework",
	    depends: [ "core" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        extend = $.extend,
	        Class = kendo.Class;

	    var DPLProcessor = Class.extend({
	        init: function(options, viewer) {
	            var that = this;

	            that.options = options;
	            that.read = options.read;
	            that.upload = options.upload;
	            that.download = options.download;

	            that.viewer = viewer;
	        },
	        fetchDocument: function () {
	            var that = this,
	                deferred = $.Deferred(),
	                errorMessages = that.viewer.options.messages.errorMessages;

	            if (!that.read) {
	                return deferred.resolve();
	            }

	            $.ajax({
	                type: that.read.type,
	                url: that.read.url,
	                dataType: that.read.dataType,
	                success: function (data) {
	                    if (typeof data != "string") {
	                        data = kendo.stringify(data);
	                    }
	                    deferred.resolve(JSON.parse(data));
	                },
	                error: function (xhr) {
	                    that.viewer._triggerError({
	                        error: xhr.responseText,
	                        message: errorMessages.parseError
	                    });
	                }
	            });

	            return deferred;
	        },
	        fetchPageData: function (number) {
	            var that = this;
	            var deferred = $.Deferred();
	            var page = that.viewer.document.pages[number - 1];
	            var data = {};
	            data[that.read.pageField] = number;

	            if (!page.geometries.length) {
	                $.ajax({
	                    type: that.read.type,
	                    url: that.read.url,
	                    data: data,
	                    success: function (data) {
	                        deferred.resolve(JSON.parse(data));
	                    },
	                    error: function (xhr) {
	                        that.viewer._triggerError({
	                            error: xhr.responseText,
	                            message: that.viewer.options.messages.errorMessages.parseError
	                        });
	                    }
	                });
	            } else {
	                deferred.resolve(page);
	            }

	            return deferred;
	        },
	        downloadFile: function (fileName) {
	            window.location = this.download.url + "?file=" + fileName;
	        },

	        fromJSON: function (json)
	        {
	            var viewer = this.viewer;
	            viewer._clearPages();

	            viewer.document = json;
	            viewer.document.total = viewer.document.pages.length;

	            viewer._renderPages();
	            viewer.resize(true);

	            viewer.activatePage(1);
	        }
	    });

	    extend(kendo.pdfviewer, {
	        dpl: {
	            processor: DPLProcessor
	        }
	    });
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });