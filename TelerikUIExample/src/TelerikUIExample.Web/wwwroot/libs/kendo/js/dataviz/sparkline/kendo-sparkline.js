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

	module.exports = __webpack_require__(942);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/***********************************************************************
	 * WARNING: this file is auto-generated.  If you change it directly,
	 * your modifications will eventually be lost.  The source code is in
	 * `kendo-charts` repository, you should make your changes there and
	 * run `src-modules/sync.sh` in this repository.
	 */
	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(943)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function () {

	window.kendo.dataviz = window.kendo.dataviz || {};
	var dataviz = kendo.dataviz;
	var constants = dataviz.constants;
	var Chart = dataviz.Chart;
	var elementSize = dataviz.elementSize;
	var deepExtend = dataviz.deepExtend;

	var TOP_OFFSET = -2;

	var SharedTooltip$1 = dataviz.SharedTooltip.extend({
	    _slotAnchor: function(coords, slot) {
	        var axis = this.plotArea.categoryAxis;
	        var vertical = axis.options.vertical;
	        var align = vertical ? {
	            horizontal: "left",
	            vertical: "center"
	        } : {
	            horizontal: "center",
	            vertical: "bottom"
	        };

	        var point;

	        if (vertical) {
	            point = new dataviz.Point(this.plotArea.box.x2, slot.center().y);
	        } else {
	            point = new dataviz.Point(slot.center().x, TOP_OFFSET);
	        }

	        return {
	            point: point,
	            align: align
	        };
	    },

	    _defaultAnchor: function(point, slot) {
	        return this._slotAnchor({}, slot);
	    }
	});

	var DEAULT_BAR_WIDTH = 150;
	var DEAULT_BULLET_WIDTH = 150;
	var NO_CROSSHAIR = [ constants.BAR, constants.BULLET ];

	function hide(children) {
	    var state = [];
	    for (var idx = 0; idx < children.length; idx++) {
	        var child = children[idx];
	        state[idx] = child.style.display;
	        child.style.display = "none";
	    }

	    return state;
	}

	function show(children, state) {
	    for (var idx = 0; idx < children.length; idx++) {
	        children[idx].style.display = state[idx];
	    }
	}

	function wrapNumber(value) {
	    return dataviz.isNumber(value) ? [ value ] : value;
	}

	var Sparkline = Chart.extend({
	    _setElementClass: function(element) {
	        dataviz.addClass(element, 'k-sparkline');
	    },

	    _initElement: function(element) {
	        Chart.fn._initElement.call(this, element);

	        this._initialWidth = Math.floor(elementSize(element).width);
	    },

	    _resize: function() {
	        var element = this.element;
	        var state = hide(element.childNodes);

	        this._initialWidth = Math.floor(elementSize(element).width);

	        show(element.childNodes, state);

	        Chart.fn._resize.call(this);
	    },

	    _modelOptions: function() {
	        var chartOptions = this.options;
	        var stage = this._surfaceWrap();
	        var displayState = hide(stage.childNodes);

	        var space = document.createElement('span');
	        space.innerHTML = '&nbsp;';

	        stage.appendChild(space);

	        var options = deepExtend({
	            width: this._autoWidth,
	            height: elementSize(stage).height,
	            transitions: chartOptions.transitions
	        }, chartOptions.chartArea, {
	            inline: true,
	            align: false
	        });

	        elementSize(stage, {
	            width: options.width,
	            height: options.height
	        });

	        stage.removeChild(space);

	        show(stage.childNodes, displayState);

	        if (this.surface) {
	            this.surface.resize();
	        }

	        return options;
	    },

	    _surfaceWrap: function() {
	        if (!this.stage) {
	            var stage = this.stage = document.createElement('span');
	            this.element.appendChild(stage);
	        }
	        return this.stage;
	    },

	    _createPlotArea: function(skipSeries) {
	        var plotArea = Chart.fn._createPlotArea.call(this, skipSeries);
	        this._autoWidth = this._initialWidth || this._calculateWidth(plotArea);

	        return plotArea;
	    },

	    _calculateWidth: function(plotArea) {
	        var options = this.options;
	        var margin = dataviz.getSpacing(options.chartArea.margin);
	        var charts = plotArea.charts;
	        var stage = this._surfaceWrap();
	        var total = 0;

	        for (var i = 0; i < charts.length; i++) {
	            var currentChart = charts[i];
	            var firstSeries = (currentChart.options.series || [])[0];
	            if (!firstSeries) {
	                continue;
	            }

	            if (firstSeries.type === constants.BAR) {
	                return DEAULT_BAR_WIDTH;
	            }

	            if (firstSeries.type === constants.BULLET) {
	                return DEAULT_BULLET_WIDTH;
	            }

	            if (firstSeries.type === constants.PIE) {
	                return elementSize(stage).height;
	            }

	            var categoryAxis = currentChart.categoryAxis;
	            if (categoryAxis) {
	                var pointsCount = categoryAxis.categoriesCount() *
	                    (!currentChart.options.isStacked && dataviz.inArray(firstSeries.type, [ constants.COLUMN, constants.VERTICAL_BULLET ]) ? currentChart.seriesOptions.length : 1);

	                total = Math.max(total, pointsCount);
	            }
	        }

	        var size = total * options.pointWidth;
	        if (size > 0) {
	            size += margin.left + margin.right;
	        }

	        return size;
	    },

	    _createSharedTooltip: function(options) {
	        return new SharedTooltip$1(this._plotArea, options);
	    }
	});

	Sparkline.normalizeOptions = function(userOptions) {
	    var options = wrapNumber(userOptions);

	    if (dataviz.isArray(options)) {
	        options = { seriesDefaults: { data: options } };
	    } else {
	        options = deepExtend({}, options);
	    }

	    if (!options.series) {
	        options.series = [ { data: wrapNumber(options.data) } ];
	    }

	    deepExtend(options, {
	        seriesDefaults: {
	            type: options.type
	        }
	    });

	    if (dataviz.inArray(options.series[0].type, NO_CROSSHAIR) ||
	        dataviz.inArray(options.seriesDefaults.type, NO_CROSSHAIR)) {
	        options = deepExtend({}, {
	            categoryAxis: {
	                crosshair: {
	                    visible: false
	                }
	            }
	        }, options);
	    }

	    return options;
	};

	dataviz.setDefaultOptions(Sparkline, {
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

	    panes: [ { clip: false } ]
	});

	kendo.deepExtend(kendo.dataviz, {
	    Sparkline: Sparkline
	});

	})();

	}, __webpack_require__(3));

/***/ }),

/***/ 943:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.dataviz.chart");

/***/ })

/******/ });