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

	module.exports = __webpack_require__(944);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(945)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {

	var dataviz = kendo.dataviz;
	var Chart = dataviz.ui.Chart;
	var KendoSparkline = dataviz.Sparkline;
	var ChartInstanceObserver = dataviz.ChartInstanceObserver;

	var extend = $.extend;

	var Sparkline = Chart.extend({

	    init: function(element, userOptions) {
	        var options = userOptions;
	        if (options instanceof kendo.data.ObservableArray) {
	            options = { seriesDefaults: { data: options } };
	        }

	        Chart.fn.init.call(this, element, KendoSparkline.normalizeOptions(options));
	    },

	    _createChart: function(options, themeOptions) {
	        this._instance = new KendoSparkline(this.element[0], options, themeOptions, {
	            observer: new ChartInstanceObserver(this),
	            sender: this,
	            rtl: this._isRtl()
	        });
	    },

	    _createTooltip: function() {
	        return new SparklineTooltip(this.element, extend({}, this.options.tooltip, {
	            rtl: this._isRtl()
	        }));
	    },

	    options: {
	        name: "Sparkline",
	        chartArea: {
	            margin: 2
	        },
	        axisDefaults: {
	            visible: false,
	            majorGridLines: {
	                visible: false
	            },
	            valueAxis: {
	                narrowRange: true
	            }
	        },
	        seriesDefaults: {
	            type: "line",
	            area: {
	                line: {
	                    width: 0.5
	                }
	            },
	            bar: {
	                stack: true
	            },
	            padding: 2,
	            width: 0.5,
	            overlay: {
	                gradient: null
	            },
	            highlight: {
	                visible: false
	            },
	            border: {
	                width: 0
	            },
	            markers: {
	                size: 2,
	                visible: false
	            }
	        },
	        tooltip: {
	            visible: true,
	            shared: true
	        },
	        categoryAxis: {
	            crosshair: {
	                visible: true,
	                tooltip: {
	                    visible: false
	                }
	            }
	        },
	        legend: {
	            visible: false
	        },
	        transitions: false,

	        pointWidth: 5,

	        panes: [{
	            clip: false
	        }]
	    }
	});

	dataviz.ui.plugin(Sparkline);

	var SparklineTooltip = dataviz.Tooltip.extend({
	    options: {
	        animation: {
	            duration: 0
	        }
	    },

	    _hideElement: function() {
	        if (this.element) {
	            this.element.hide().remove();
	        }
	    }
	});

	dataviz.SparklineTooltip = SparklineTooltip;

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 945:
/***/ (function(module, exports) {

	module.exports = require("./kendo-sparkline");

/***/ })

/******/ });