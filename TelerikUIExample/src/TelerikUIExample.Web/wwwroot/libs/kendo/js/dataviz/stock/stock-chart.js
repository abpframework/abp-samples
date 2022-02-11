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

	module.exports = __webpack_require__(947);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(948)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {

	    var kendo = window.kendo;
	    var dataviz = kendo.dataviz;
	    var ChartInstanceObserver = dataviz.ChartInstanceObserver;
	    var Chart = dataviz.ui.Chart;
	    var KendoStockChart = dataviz.StockChart;
	    var constants = dataviz.constants;
	    var NAVIGATOR_AXIS = constants.NAVIGATOR_AXIS;
	    var NAVIGATOR_PANE = constants.NAVIGATOR_PANE;
	    var deepExtend = kendo.deepExtend;
	    var defined = dataviz.defined;
	    var proxy = $.proxy;

	    var CHANGE = "change";

	    var StockInstanceObserver = ChartInstanceObserver.extend({
	        handlerMap: {
	            navigatorFilter: '_onNavigatorFilter',
	            navigatorCreated: '_onNavigatorCreated'
	        }
	    });

	    var StockChart = Chart.extend({

	        options: {
	            name: "StockChart",
	            dateField: "date",
	            axisDefaults: {
	                categoryAxis: {
	                    type: "date",
	                    baseUnit: "fit",
	                    justified: true
	                },
	                valueAxis: {
	                    narrowRange: true,
	                    labels: {
	                        format: "C"
	                    }
	                }
	            },
	            navigator: {
	                select: {},
	                seriesDefaults: {
	                    markers: {
	                        visible: false
	                    },
	                    tooltip: {
	                        visible: true,
	                        template: "#= kendo.toString(category, 'd') #"
	                    },
	                    line: {
	                        width: 2
	                    }
	                },
	                hint: {},
	                visible: true
	            },
	            tooltip: {
	                visible: true
	            },
	            legend: {
	                visible: false
	            },
	            persistSeriesVisibility: true
	        },

	        _createChart: function(options, themeOptions) {
	            this._initNavigatorOptions(options);
	            this._instance = new KendoStockChart(this.element[0], options, themeOptions, {
	                observer: new StockInstanceObserver(this),
	                sender: this,
	                rtl: this._isRtl()
	            });
	        },

	        _initNavigatorOptions: function(options) {
	            var navigatorOptions = options.navigator || {};
	            var support = kendo.support;
	            var isTouch = support.touch;
	            var isFirefox = support.browser.mozilla;

	            deepExtend(navigatorOptions, {
	                autoBindElements: !navigatorOptions.dataSource,
	                partialRedraw: navigatorOptions.dataSource,
	                liveDrag: !isTouch && !isFirefox
	            });
	        },

	        _initDataSource: function(userOptions) {
	            var options = userOptions || {},
	                dataSource = options.dataSource,
	                hasServerFiltering = dataSource && dataSource.serverFiltering,
	                mainAxis = [].concat(options.categoryAxis)[0],
	                naviOptions = options.navigator || {},
	                select = naviOptions.select,
	                hasSelect = select && select.from && select.to;

	            if (hasServerFiltering && hasSelect) {
	                var filter = [].concat(dataSource.filter || []);

	                var from = kendo.parseDate(select.from);
	                var to = kendo.parseDate(select.to);
	                var dummyAxis = new dataviz.DateCategoryAxis(deepExtend({
	                    baseUnit: "fit"
	                }, mainAxis, {
	                    categories: [from, to]
	                }), kendo);

	                dataSource.filter = buildFilter(dummyAxis.range().min, to).concat(filter);
	            }

	            Chart.fn._initDataSource.call(this, userOptions);
	        },

	        _onNavigatorCreated: function(e) {
	            this._instance = e.sender;
	            this.options = e.sender.options;
	            this._navigator = this.navigator = e.navigator;
	            this._initNavigatorDataSource();
	        },

	        _initNavigatorDataSource: function() {
	            var navigatorOptions = this.options.navigator;
	            var autoBind = navigatorOptions.autoBind;
	            var dsOptions = navigatorOptions.dataSource;

	            if (dsOptions) {
	                this._navigatorDataChangedHandler = this._navigatorDataChangedHandler || proxy(this._onNavigatorDataChanged, this);
	                this._navigatorDataSource = kendo.data.DataSource
	                    .create(dsOptions)
	                    .bind(CHANGE, this._navigatorDataChangedHandler);

	                if (!defined(autoBind)) {
	                   autoBind = this.options.autoBind;
	                }

	                if (autoBind) {
	                    this._navigatorDataSource.fetch();
	                }
	            }
	        },

	        _bindNavigatorSeries: function(series, data) {
	            var seriesIx, currentSeries,
	                seriesLength = series.length;

	            for (seriesIx = 0; seriesIx < seriesLength; seriesIx++) {
	                currentSeries = series[seriesIx];

	                if (currentSeries.axis == NAVIGATOR_AXIS && this._isBindable(currentSeries)) {
	                    currentSeries.data = data;
	                }
	            }
	        },

	        _onNavigatorDataChanged: function() {
	            var chart = this,
	                instance = chart._instance,
	                categoryAxes = chart.options.categoryAxis,
	                axisIx,
	                axesLength = categoryAxes.length,
	                data = chart._navigatorDataSource.view(),
	                currentAxis,
	                naviCategories;

	            this._bindNavigatorSeries(chart.options.series, data);
	            if (chart._sourceSeries) {
	                this._bindNavigatorSeries(chart._sourceSeries, data);
	            }

	            for (axisIx = 0; axisIx < axesLength; axisIx++) {
	                currentAxis = categoryAxes[axisIx];

	                if (currentAxis.pane == NAVIGATOR_PANE) {
	                    if (currentAxis.name == NAVIGATOR_AXIS) {
	                        chart._bindCategoryAxis(currentAxis, data, axisIx);
	                        naviCategories = currentAxis.categories;
	                    } else {
	                        currentAxis.categories = naviCategories;
	                    }
	                }
	            }

	            if (instance._model) {
	                var navigator = this.navigator;
	                navigator.redraw();
	                navigator.setRange();

	                if (!chart.options.dataSource || (chart.options.dataSource && chart._dataBound)) {
	                    navigator.redrawSlaves();
	                }
	            }
	        },

	        _bindCategories: function() {
	            Chart.fn._bindCategories.call(this);
	            if (this._instance) {
	                this._instance.copyNavigatorCategories();
	            }
	        },

	        _onDataChanged: function() {
	            Chart.fn._onDataChanged.call(this);

	            this._dataBound = true;
	        },

	        setOptions: function(options) {
	            this._removeNavigatorDataSource();
	            this._initNavigatorOptions(options);
	            this._instance.destroyNavigator();
	            Chart.fn.setOptions.call(this, options);
	        },

	        _onNavigatorFilter: function(e) {
	            this.dataSource.filter(buildFilter(e.from, e.to));
	        },

	        requiresHandlers: function(names) {
	            if (dataviz.inArray('navigatorFilter', names)) {
	                var dataSource = this.dataSource;
	                var hasServerFiltering = dataSource && dataSource.options.serverFiltering;
	                return hasServerFiltering && this.options.navigator.dataSource;
	            }

	            return Chart.fn.requiresHandlers.call(this, names);
	        },

	        _removeNavigatorDataSource: function() {
	            var navigatorDataSource = this._navigatorDataSource;
	            if (navigatorDataSource) {
	                navigatorDataSource.unbind(CHANGE, this._navigatorDataChangedHandler);
	                delete this._navigatorDataSource;
	            }
	        },

	        destroy: function() {
	            Chart.fn.destroy.call(this);
	            this._removeNavigatorDataSource();
	        }
	    });

	    dataviz.ui.plugin(StockChart);

	    function buildFilter(from, to) {
	        return [{
	            field: "Date", operator: "gte", value: from
	        }, {
	            field: "Date", operator: "lt", value: to
	        }];
	    }

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

	module.exports = require("./kendo-stock-chart");

/***/ })

/******/ });