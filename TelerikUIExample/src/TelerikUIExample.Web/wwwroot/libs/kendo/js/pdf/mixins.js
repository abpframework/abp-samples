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

	__webpack_require__(1629);
	module.exports = __webpack_require__(1629);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1629:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(1630)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($, undefined) {
	    
	kendo.PDFMixin = {
	    extend: function(proto) {
	        proto.events.push("pdfExport");
	        proto.options.pdf = this.options;
	        proto.saveAsPDF = this.saveAsPDF;
	        proto._drawPDF = this._drawPDF;
	        proto._drawPDFShadow = this._drawPDFShadow;
	    },
	    options: {
	        fileName  : "Export.pdf",
	        proxyURL  : "",

	        // paperSize can be an usual name, i.e. "A4", or an array of two Number-s specifying the
	        // width/height in points (1pt = 1/72in), or strings including unit, i.e. "10mm".  Supported
	        // units are "mm", "cm", "in" and "pt".  The default "auto" means paper size is determined
	        // by content.
	        paperSize : "auto",

	        // Export all pages, if applicable
	        allPages: false,

	        // True to reverse the paper dimensions if needed such that width is the larger edge.
	        landscape : false,

	        // An object containing { left, top, bottom, right } margins with units.
	        margin    : null,

	        // Optional information for the PDF Info dictionary; all strings except for the date.
	        title     : null,
	        author    : null,
	        subject   : null,
	        keywords  : null,
	        creator   : "Kendo UI PDF Generator v." + kendo.version,

	        // Creation Date; defaults to new Date()
	        date      : null
	    },

	    saveAsPDF: function() {
	        var progress = new $.Deferred();
	        var promise = progress.promise();
	        var args = { promise: promise };

	        if (this.trigger("pdfExport", args)) {
	            return;
	        }

	        var options = this.options.pdf;
	        options.multiPage = options.multiPage || options.allPages;

	        this._drawPDF(progress)
	        .then(function(root) {
	            return kendo.drawing.exportPDF(root, options);
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
	    },

	    _drawPDF: function(progress) {
	        var promise = new $.Deferred();

	        kendo.drawing.drawDOM(this.wrapper)
	        .done(function(group) {
	            var args = {
	                page: group,
	                pageNumber: 1,
	                progress: 1,
	                totalPages: 1
	            };

	            progress.notify(args);
	            promise.resolve(args.page);
	        })
	        .fail(function(err) {
	            promise.reject(err);
	        });

	        return promise;
	    },

	    _drawPDFShadow: function(settings, drawOptions) {
	        settings = settings || {};
	        var wrapper = this.wrapper;
	        var shadow = $("<div class='k-pdf-export-shadow'>");

	        // Content will be allowed to take up to 200" if no width is given.
	        if (settings.width) {
	            shadow.css({
	                width: settings.width,
	                overflow: "visible"
	            });
	        }

	        wrapper.before(shadow);
	        shadow.append(settings.content || wrapper.clone(true, true));

	        var defer = $.Deferred();

	        /* https://github.com/telerik/kendo/issues/4790 -- We need to
	         * allow a small timeout so that the browser finalizes the
	         * layout of any images here.  Another option would be to pass
	         * forcePageBreak: "-" to drawDOM, but that would make it
	         * clone the content as well and look for page breaks;
	         * needless work, so better do it here.
	         */
	        setTimeout(function(){
	            var promise = kendo.drawing.drawDOM(shadow, drawOptions);
	            promise.always(function() {
	                shadow.remove();
	            }).then(function(){
	                defer.resolve.apply(defer, arguments);
	            }).fail(function(){
	                defer.reject.apply(defer, arguments);
	            }).progress(function(){
	                defer.progress.apply(defer, arguments);
	            });
	        }, 15);

	        return defer.promise();
	    }
	};

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ }),

/***/ 1630:
/***/ (function(module, exports) {

	module.exports = require("./core");

/***/ })

/******/ });