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

	module.exports = __webpack_require__(898);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(899)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {

	    var dataviz = kendo.dataviz;
	    var services = dataviz.services;
	    var draw = kendo.drawing;

	    dataviz.SASS_THEMES = ["sass", "default-v2", "bootstrap-v4", "material-v2"];

	    dataviz.ExportMixin = {
	        extend: function(proto, skipLegacy) {
	            if (!proto.exportVisual) {
	                throw new Error("Mixin target has no exportVisual method defined.");
	            }

	            proto.exportSVG = this.exportSVG;
	            proto.exportImage = this.exportImage;
	            proto.exportPDF = this.exportPDF;

	            if (!skipLegacy) {
	                proto.svg = this.svg;
	                proto.imageDataURL = this.imageDataURL;
	            }
	        },

	        exportSVG: function(options) {
	            return draw.exportSVG(this.exportVisual(), options);
	        },

	        exportImage: function(options) {
	            return draw.exportImage(this.exportVisual(options), options);
	        },

	        exportPDF: function(options) {
	            return draw.exportPDF(this.exportVisual(), options);
	        },

	        svg: function() {
	            if (draw.svg.Surface) {
	                return draw.svg.exportGroup(this.exportVisual());
	            } else {
	                throw new Error("SVG Export failed. Unable to export instantiate kendo.drawing.svg.Surface");
	            }
	        },

	        imageDataURL: function() {
	            if (!kendo.support.canvas) {
	                return null;
	            }

	            if (draw.canvas.Surface) {
	                var container = $("<div />").css({
	                    display: "none",
	                    width: this.element.width(),
	                    height: this.element.height()
	                }).appendTo(document.body);

	                var surface = new draw.canvas.Surface(container[0]);
	                surface.draw(this.exportVisual());
	                var image = surface._rootElement.toDataURL();

	                surface.destroy();
	                container.remove();

	                return image;
	            } else {
	                throw new Error("Image Export failed. Unable to export instantiate kendo.drawing.canvas.Surface");
	            }
	        }
	    };

	    services.IntlService.register({
	       format: function(format) {
	           return kendo.format.apply(null, [format].concat(Array.prototype.slice.call(arguments, 1)));
	       },
	       toString: kendo.toString,
	       parseDate: kendo.parseDate,
	       firstDay: function() {
	           return kendo.culture().calendars.standard.firstDay;
	       }
	    });

	    services.TemplateService.register({
	       compile: kendo.template
	    });

	    dataviz.Point2D = dataviz.Point;
	    dataviz.Box2D = dataviz.Box;
	    dataviz.mwDelta = function(e) {
	        return dataviz.mousewheelDelta(e.originalEvent);
	    };

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

	module.exports = require("./kendo-core");

/***/ })

/******/ });