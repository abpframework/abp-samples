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

	module.exports = __webpack_require__(1641);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1641:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(1642)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "pdfjs-processor",
	    name: "PDFJS-Processor",
	    category: "framework",
	    depends: [ "core" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        Class = kendo.Class,
	        extend = $.extend,
	        atob = window.atob,
	        PDFJS;

	    var PDFJSProcessor = Class.extend({
	        init: function(options, viewer) {
	            var that = this;

	            if (kendo.pdfviewer.pdfjs.isLoaded()) {
	                PDFJS = kendo.pdfviewer.pdfjs.lib;
	            }

	            that.file = options.file;
	            that.viewer = viewer;
	        },
	        fetchDocument: function () {
	            var that = this,
	                deferred = $.Deferred(),
	                messages = that.viewer.options.messages.errorMessages;

	            if (!that.file) {
	                return deferred.resolve();
	            }

	            if (that._isBase64Data() && atob)
	            {
	                that.file.data = atob(that.file.data);
	            }

	            PDFJS.getDocument(this.file).promise.then(function (pdf) {
	                var pageSizes = [];
	                that.pdf = pdf;
	                that.pagePromises = [];
	                that._downloadData = $.Deferred();

	                pdf.getData().then(function (data) {
	                    var blob = new Blob([data], { type: 'application/pdf' });
	                    that._downloadData.resolve({
	                        file: blob
	                    });
	                });

	                for (var i = 1; i <= pdf.numPages; i++) {
	                    that.pagePromises.push(pdf.getPage(i));
	                }

	                Promise.all(that.pagePromises).then(function (pagePromises) {
	                    pageSizes = pagePromises.map(function (pagePromise) {
	                        var viewport = pagePromise.getViewport({scale: 4/3});
	                        return {
	                            width: viewport.width,
	                            height: viewport.height
	                        };
	                    });

	                    deferred.resolve({
	                        total: pdf.numPages,
	                        pages: pageSizes
	                    });
	                }).catch(function (e) { // jshint ignore:line
	                    that.viewer._triggerError({
	                        error: e.message,
	                        message: messages.parseError
	                    });
	                });

	            }).catch(function (e) { // jshint ignore:line
	                var notFoundError = e.name.includes("Missing");
	                var alertMessage = notFoundError ? messages.notFound : messages.parseError;
	                that.viewer._triggerError({
	                    error: e.message,
	                    message: alertMessage
	                });
	                if (notFoundError) {
	                    that.viewer._renderBlankPage();
	                }
	            });

	            return deferred;
	        },
	        fetchPageData: function (number) {
	            return this.pagePromises[number - 1];
	        },
	        downloadFile: function (fileName) {
	            var that = this;
	            kendo.ui.progress(that.viewer.pageContainer, true);

	            that._downloadData.done(function (result) {
	                kendo.ui.progress(that.viewer.pageContainer, false);

	                var reader = new FileReader();
	                reader.readAsDataURL(result.file);

	                reader.onload = function() {
	                    kendo.saveAs({
	                        dataURI: reader.result,
	                        fileName: fileName + ".pdf",
	                        proxyURL: function() {
	                            return reader.result;
	                        }
	                    });
	                };
	            });
	        },
	        _updateDocument: function (file) {
	            if(this.pdf && this.pdf.loadingTask) {
	                this.pdf.loadingTask.destroy();
	            }

	            this.file = file;
	        },
	        _isBase64Data: function () {
	            var data = this.file.data,
	                notBase64 = /[^A-Z0-9+\/=]/i,
	                length = data && data.length,
	                equalSign;

	            if (!length || length % 4 !== 0 || notBase64.test(data)) {
	                return false;
	            }

	            equalSign = data.indexOf('=');

	            return equalSign === -1 ||
	                equalSign === length - 1 ||
	                (equalSign === length - 2 && data[length - 1] === '=');
	        },
	        renderTextLayer: function (params) {
	            PDFJS.renderTextLayer(params);
	        }
	    });

	    extend(kendo.pdfviewer.pdfjs, {
	        processor: PDFJSProcessor
	    });
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1642:
/***/ (function(module, exports) {

	module.exports = require("../pdfjs");

/***/ })

/******/ });