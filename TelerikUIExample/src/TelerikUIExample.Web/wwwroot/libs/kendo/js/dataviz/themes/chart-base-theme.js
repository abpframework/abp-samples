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

	module.exports = __webpack_require__(950);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 891:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.dataviz.core");

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/***********************************************************************
	 * WARNING: this file is auto-generated.  If you change it directly,
	 * your modifications will eventually be lost.  The source code is in
	 * `kendo-charts` repository, you should make your changes there and
	 * run `src-modules/sync.sh` in this repository.
	 */
	(function(f, define){
	     !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(891) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function () {

	window.kendo.dataviz = window.kendo.dataviz || {};

	var BAR_GAP = 1.5;
	var BAR_SPACING = 0.4;
	var BLACK = '#000';
	var SANS = 'Arial, Helvetica, sans-serif';
	var SANS11 = "11px " + SANS;
	var SANS12 = '12px ' + SANS;
	var SANS16 = '16px ' + SANS;
	var TRANSPARENT = 'transparent';
	var WHITE = '#fff';

	var notes = function () { return ({
	    icon: {
	        border: {
	            width: 1
	        }
	    },
	    label: {
	        font: SANS12,
	        padding: 3
	    },
	    line: {
	        length: 10,
	        width: 2
	    },
	    visible: true
	}); };

	var axisDefaults = function () { return ({
	    labels: {
	        font: SANS12
	    },
	    notes: notes(),
	    title: {
	        font: SANS16,
	        margin: 5
	    }
	}); };

	var areaSeries = function () { return ({
	    highlight: {
	        markers: {
	            border: {}
	        }
	    },
	    line: {
	        opacity: 1,
	        width: 0
	    },
	    markers: {
	        size: 6,
	        visible: false
	    },
	    opacity: 0.4
	}); };

	var rangeAreaSeries = function () { return ({
	    highlight: {
	        markers: {
	            border: {}
	        }
	    },
	    line: {
	        opacity: 1,
	        width: 0
	    },
	    markers: {
	        size: 6,
	        visible: false
	    },
	    opacity: 0.4
	}); };

	var barSeries = function () { return ({
	    gap: BAR_GAP,
	    spacing: BAR_SPACING
	}); };

	var boxPlotSeries = function () { return ({
	    outliersField: "",
	    meanField: "",
	    border: {
	        _brightness: 0.8,
	        width: 1
	    },
	    downColor: WHITE,
	    gap: 1,
	    highlight: {
	        border: {
	            opacity: 1,
	            width: 2
	        },
	        whiskers: {
	            width: 3
	        },
	        mean: {
	            width: 2
	        },
	        median: {
	            width: 2
	        }
	    },
	    mean: {
	        width: 2
	    },
	    median: {
	        width: 2
	    },
	    spacing: 0.3,
	    whiskers: {
	        width: 2
	    }
	}); };

	var bubbleSeries = function () { return ({
	    border: {
	        width: 0
	    },
	    labels: {
	        background: TRANSPARENT
	    },
	    opacity: 0.6
	}); };

	var bulletSeries = function () { return ({
	    gap: BAR_GAP,
	    spacing: BAR_SPACING,
	    target: {
	        color: "#ff0000"
	    }
	}); };

	var candlestickSeries = function () { return ({
	    border: {
	        _brightness: 0.8,
	        width: 1
	    },
	    downColor: WHITE,
	    gap: 1,
	    highlight: {
	        border: {
	            opacity: 1,
	            width: 2
	        },
	        line: {
	            width: 2
	        }
	    },
	    line: {
	        color: BLACK,
	        width: 1
	    },
	    spacing: 0.3
	}); };

	var columnSeries = function () { return ({
	    gap: BAR_GAP,
	    spacing: BAR_SPACING
	}); };

	var donutSeries = function () { return ({
	    margin: 1
	}); };

	var lineSeries = function () { return ({
	    width: 2
	}); };

	var ohlcSeries = function () { return ({
	    gap: 1,
	    highlight: {
	        line: {
	            opacity: 1,
	            width: 3
	        }
	    },
	    line: {
	        width: 1
	    },
	    spacing: 0.3
	}); };

	var radarAreaSeries = function () { return ({
	    line: {
	        opacity: 1,
	        width: 0
	    },
	    markers: {
	        size: 6,
	        visible: false
	    },
	    opacity: 0.5
	}); };

	var radarLineSeries = function () { return ({
	    markers: {
	        visible: false
	    },
	    width: 2
	}); };

	var rangeBarSeries = function () { return ({
	    gap: BAR_GAP,
	    spacing: BAR_SPACING
	}); };

	var rangeColumnSeries = function () { return ({
	    gap: BAR_GAP,
	    spacing: BAR_SPACING
	}); };

	var scatterLineSeries = function () { return ({
	    width: 1
	}); };

	var waterfallSeries = function () { return ({
	    gap: 0.5,
	    line: {
	        color: BLACK,
	        width: 1
	    },
	    spacing: BAR_SPACING
	}); };

	var pieSeries = function () { return ({
	    labels: {
	        background: '',
	        color: '',
	        padding: {
	            top: 5,
	            bottom: 5,
	            left: 7,
	            right: 7
	        }
	    }
	}); };

	var funnelSeries = function () { return ({
	    labels: {
	        background: '',
	        color: '',
	        padding: {
	            top: 5,
	            bottom: 5,
	            left: 7,
	            right: 7
	        }
	    }
	}); };

	var heatmapSeries = function () { return ({
	    labels: {
	        color: '',
	        background: TRANSPARENT,
	        visible: true
	    },
	    highlight: {
	        border: {
	            width: 0
	        }
	    }
	}); };

	var seriesDefaults = function (options) { return ({
	    visible: true,
	    labels: {
	        font: SANS11
	    },
	    overlay: options.gradients ? {} : {
	        gradient: "none"
	    },
	    area: areaSeries(),
	    rangeArea: rangeAreaSeries(),
	    verticalRangeArea: rangeAreaSeries(),
	    bar: barSeries(),
	    boxPlot: boxPlotSeries(),
	    bubble: bubbleSeries(),
	    bullet: bulletSeries(),
	    candlestick: candlestickSeries(),
	    column: columnSeries(),
	    heatmap: heatmapSeries(),
	    pie: pieSeries(),
	    donut: donutSeries(),
	    funnel: funnelSeries(),
	    horizontalWaterfall: waterfallSeries(),
	    line: lineSeries(),
	    notes: notes(),
	    ohlc: ohlcSeries(),
	    radarArea: radarAreaSeries(),
	    radarLine: radarLineSeries(),
	    polarArea: radarAreaSeries(),
	    polarLine: radarLineSeries(),
	    rangeBar: rangeBarSeries(),
	    rangeColumn: rangeColumnSeries(),
	    scatterLine: scatterLineSeries(),
	    verticalArea: areaSeries(),
	    verticalBoxPlot: boxPlotSeries(),
	    verticalBullet: bulletSeries(),
	    verticalLine: lineSeries(),
	    waterfall: waterfallSeries()
	}); };

	var title = function () { return ({
	    font: SANS16
	}); };

	var legend = function () { return ({
	    labels: {
	        font: SANS12
	    }
	}); };

	var baseTheme = function (options) {
	    if (options === void 0) { options = {}; }

	    return ({
	    axisDefaults: axisDefaults(),
	    categoryAxis: {
	        majorGridLines: {
	            visible: true
	        }
	    },
	    navigator: {
	        pane: {
	            height: 90,
	            margin: {
	                top: 10
	            }
	        }
	    },
	    seriesDefaults: seriesDefaults(options),
	    title: title(),
	    legend: legend()
	});
	};

	kendo.deepExtend(kendo.dataviz, {
	    chartBaseTheme: baseTheme
	});

	})();

	}, __webpack_require__(3));

/***/ })

/******/ });