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

	module.exports = __webpack_require__(918);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(919)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {
	    var kendo = window.kendo;
	    var Widget = kendo.ui.Widget;
	    var dataviz = kendo.dataviz;
	    var LinearGauge = dataviz.LinearGauge;
	    var RadialGauge = dataviz.RadialGauge;
	    var ArcGauge = dataviz.ArcGauge;
	    var CircularGauge = dataviz.CircularGauge;
	    var draw = kendo.drawing;

	    function themeOptions(options) {
	        var themes = dataviz.ui.themes || {};
	        var themeName = options.theme || "";
	        var lowerName = themeName.toLowerCase();

	        if(dataviz.SASS_THEMES.indexOf(lowerName) != -1) {
	            return dataviz.autoTheme().gauge;
	        }

	        return (themes[themeName] || themes[lowerName] || {}).gauge;
	    }

	    var Gauge = Widget.extend({
	        init: function(element, userOptions) {
	            kendo.destroy(element);
	            $(element).empty();

	            Widget.fn.init.call(this, element);

	            this.options = kendo.deepExtend(this.options, userOptions);

	            this.wrapper = this.element;
	            this._createInstance();

	            this.element.addClass('k-gauge');

	            kendo.notify(this, dataviz.ui);
	        },

	        options: {
	            theme: "default",
	            renderAs: "",
	            pointer: {},
	            scale: {},
	            gaugeArea: {
	                background: ""
	            },
	            transitions: true
	        },

	        setOptions: function(options) {
	            this._instance.setOptions(options, themeOptions(options));

	            this._copyFields();
	        },

	        redraw: function() {
	            this._instance.redraw();
	            this._copyFields();
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            this._instance.destroy();
	        },

	        _createInstance: function() {
	            var gaugeType = this._gaugeType();
	            this._instance = new gaugeType(this.element[0], this.options, themeOptions(this.options));
	            this._copyFields();
	        },

	        _copyFields: function() {
	            this._originalOptions = this._instance._originalOptions;
	            this.options = this._instance.options;
	            this.surface = this._instance.surface;
	            this.bbox = this._instance.bbox;
	            this.gaugeArea = this._instance.gaugeArea;
	            this.pointers = this._instance.pointers;
	            this.scale = this._instance.scale;
	        },

	        _resize: function() {
	            this._instance.resize();
	        }
	    });

	    var proxyMembers = ["getSize", "value", "allValues", "exportVisual"];

	    function createProxyMember(name) {
	        Gauge.fn[name] = function() {
	            return this._instance[name].apply(this._instance, arguments);
	        };
	    }

	    for (var idx = 0; idx < proxyMembers.length; idx++) {
	        createProxyMember(proxyMembers[idx]);
	    }

	    dataviz.ExportMixin.extend(Gauge.fn);

	    var RadialGaugeWidget = Gauge.extend({

	        options: {
	            name: "RadialGauge"
	        },

	        _gaugeType: function() {
	            return RadialGauge;
	        }
	    });

	    var LinearGaugeWidget = Gauge.extend({

	        options: {
	            name: "LinearGauge",
	            scale: {
	                vertical: true
	            }
	        },

	        _gaugeType: function() {
	            return LinearGauge;
	        }
	    });

	    var ArcGaugeWidget = Gauge.extend({
	        init: function(element, userOptions) {
	            Gauge.fn.init.call(this, element, userOptions);

	            this.element.css('position', 'relative');
	            this.element.addClass('k-arcgauge');

	            this._centerTemplate();
	        },

	        options: {
	            name: "ArcGauge"
	        },

	        setOptions: function(options) {
	            Gauge.fn.setOptions.call(this, options);
	            this._centerTemplate();
	        },

	        redraw: function() {
	            Gauge.fn.redraw.call(this);
	            this._centerTemplate();
	        },

	        value: function(value) {
	            var instance = this._instance;
	            if (arguments.length === 0) {
	                return instance.value();
	            }

	            instance.value(value);

	            this._centerTemplate();
	        },

	        destroy: function() {
	            Gauge.fn.destroy.call(this);
	            delete this._centerElement;
	        },

	        exportVisual: function() {
	            if (this._centerElement) {
	                return false;
	            }

	            return Gauge.fn.exportVisual.call(this);
	        },

	        _resize: function() {
	            this._instance.resize();

	            this._centerTemplate();
	        },

	        _centerTemplate: function() {
	            if (this.options.centerTemplate) {
	                var template = kendo.template(this.options.centerTemplate);

	                var instance = this._instance;
	                var centerElement = this._getCenterElement();

	                centerElement.html(template({ color: instance.currentColor(), value: instance.value() }));

	                var position = instance.centerLabelPosition(centerElement.width(), centerElement.height());

	                centerElement.css(position);
	            } else if (this._centerElement) {
	                this._centerElement.remove();
	                this._centerElement = null;
	            }
	        },

	        _getCenterElement: function() {
	            var centerElement = this._centerElement;
	            if (!centerElement) {
	                centerElement = this._centerElement = $('<div></div>').addClass('k-arcgauge-label');
	                this.element.append(centerElement);
	            }

	            return centerElement;
	        },

	        _gaugeType: function() {
	            return ArcGauge;
	        }
	    });

	    var CircularGaugeWidget = ArcGaugeWidget.extend({
	        options: {
	            name: "CircularGauge"
	        },

	        _gaugeType: function() {
	            return CircularGauge;
	        }
	    });

	    function createExportMethod(name) {
	        ArcGaugeWidget.fn[name] = function(options) {
	            var gauge = this;
	            var method = draw[name];

	            if (!gauge._centerElement) {
	                return method(gauge.exportVisual(), options);
	            }

	            return draw.drawDOM(gauge.element).then(function(visual) {
	                return method(visual, options);
	            });
	        };
	    }

	    var exportMethods = ['exportSVG', 'exportImage', 'exportPDF'];

	    for (idx = 0; idx < exportMethods.length; idx++) {
	        createExportMethod(exportMethods[idx]);
	    }

	    dataviz.ui.plugin(LinearGaugeWidget);
	    dataviz.ui.plugin(RadialGaugeWidget);
	    dataviz.ui.plugin(ArcGaugeWidget);
	    dataviz.ui.plugin(CircularGaugeWidget);

	    kendo.deepExtend(dataviz, {
	        Gauge: Gauge,
	        LinearGauge: LinearGaugeWidget,
	        RadialGauge: RadialGaugeWidget,
	        ArcGauge: ArcGaugeWidget,
	        CircularGauge: CircularGaugeWidget
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 919:
/***/ (function(module, exports) {

	module.exports = require("./kendo-gauges");

/***/ })

/******/ });