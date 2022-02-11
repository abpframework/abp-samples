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

	module.exports = __webpack_require__(949);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 891:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.dataviz.core");

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	     !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(891) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {
	    var cache;
	    var SERIES_COLORS = 30;

	    function seriesTemplate() {
	        var template =
	            '<div class="k-var--series-a"></div>' +
	            '<div class="k-var--series-b"></div>' +
	            '<div class="k-var--series-c"></div>' +
	            '<div class="k-var--series-d"></div>' +
	            '<div class="k-var--series-e"></div>' +
	            '<div class="k-var--series-f"></div>';

	        for (var i = 0; i < SERIES_COLORS; i++) {
	            template += '<div class="k-var--series-' + (i + 1) + '"></div>';
	        }

	        return template;
	    }

	    function autoTheme(force) {
	        if (!force && cache) {
	            return cache;
	        }

	        var theme = { chart: kendo.dataviz.chartBaseTheme() };
	        var hook = $(
	            '<div style="display: none">' +
	            '  <div class="k-var--accent"></div>' +
	            '  <div class="k-var--accent-contrast"></div>' +
	            '  <div class="k-var--base"></div>' +
	            '  <div class="k-var--background"></div>' +
	            '  <div class="k-var--normal-background"></div>' +
	            '  <div class="k-var--normal-text-color"></div>' +
	            '  <div class="k-var--hover-background"></div>' +
	            '  <div class="k-var--hover-text-color"></div>' +
	            '  <div class="k-var--selected-background"></div>' +
	            '  <div class="k-var--selected-text-color"></div>' +
	            '  <div class="k-var--chart-error-bars-background"></div>' +
	            '  <div class="k-var--chart-notes-background"></div>' +
	            '  <div class="k-var--chart-notes-border"></div>' +
	            '  <div class="k-var--chart-notes-lines"></div>' +
	            '  <div class="k-var--chart-crosshair-background"></div>' +
	            '  <div class="k-var--chart-inactive"></div>' +
	            '  <div class="k-var--chart-major-lines"></div>' +
	            '  <div class="k-var--chart-minor-lines"></div>' +
	            '  <div class="k-var--chart-area-opacity"></div>' +
	            '  <div class="k-var--chart-area-inactive-opacity"></div>' +
	            '  <div class="k-var--chart-line-inactive-opacity"></div>' +
	            '  <div class="k-widget k-chart">' +
	            '      <div class="k-var--chart-font"></div>' +
	            '      <div class="k-var--chart-title-font"></div>' +
	            '      <div class="k-var--chart-pane-title-font"></div>' +
	            '      <div class="k-var--chart-label-font"></div>' +
	            '  </div>' +
	            '  <div class="k-var--series-unset"></div>' +
	            '  <div class="k-var--series">' +
	                   seriesTemplate() +
	            '  </div>' +
	            '  <div class="k-var--gauge-pointer"></div>' +
	            '  <div class="k-var--gauge-track"></div>' +
	            '</div>').appendTo(document.body);

	        function mapColor(key, varName) {
	            set(key, queryStyle(varName, "backgroundColor"));
	        }

	        function queryStyle(varName, prop) {
	            return hook.find(".k-var--" + varName).css(prop);
	        }

	        function set(path, value) {
	            var store = theme;
	            var parts = path.split('.');
	            var key = parts.shift();

	            while (parts.length > 0) {
	                store = store[key] = store[key] || {};
	                key = parts.shift();
	            }

	            store[key] = value;
	        }

	        function setInactiveOpacity(seriesTypes, selector) {
	            var inactiveOpacity = parseFloat(queryStyle(selector, "opacity"));
	            if (!isNaN(inactiveOpacity) && inactiveOpacity < 1) {
	                seriesTypes.forEach(function(type) {
	                    set("chart.seriesDefaults." + type + ".highlight.inactiveOpacity", inactiveOpacity);
	                });
	            }
	        }

	        (function setColors() {
	            mapColor("chart.axisDefaults.crosshair.color", "chart-crosshair-background");
	            mapColor("chart.axisDefaults.labels.color", "normal-text-color");
	            mapColor("chart.axisDefaults.line.color", "chart-major-lines");
	            mapColor("chart.axisDefaults.majorGridLines.color", "chart-major-lines");
	            mapColor("chart.axisDefaults.minorGridLines.color", "chart-minor-lines");
	            mapColor("chart.axisDefaults.notes.icon.background", "chart-notes-background");
	            mapColor("chart.axisDefaults.notes.icon.border.color", "chart-notes-border");
	            mapColor("chart.axisDefaults.notes.line.color", "chart-notes-lines");
	            mapColor("chart.axisDefaults.title.color", "normal-text-color");
	            mapColor('chart.chartArea.background', 'background');
	            mapColor("chart.legend.inactiveItems.labels.color", "chart-inactive");
	            mapColor("chart.legend.inactiveItems.markers.color", "chart-inactive");
	            mapColor("chart.legend.labels.color", "normal-text-color");
	            mapColor("chart.seriesDefaults.boxPlot.downColor", "chart-major-lines");
	            mapColor("chart.seriesDefaults.boxPlot.mean.color", "base");
	            mapColor("chart.seriesDefaults.boxPlot.median.color", "base");
	            mapColor("chart.seriesDefaults.boxPlot.whiskers.color", "accent");
	            mapColor("chart.seriesDefaults.bullet.target.color", "accent");
	            mapColor("chart.seriesDefaults.candlestick.downColor", "normal-text-color");
	            mapColor("chart.seriesDefaults.candlestick.line.color", "normal-text-color");
	            mapColor("chart.seriesDefaults.errorBars.color", "chart-error-bars-background");
	            mapColor("chart.seriesDefaults.horizontalWaterfall.line.color", "chart-major-lines");
	            mapColor("chart.seriesDefaults.icon.border.color", "chart-major-lines");
	            mapColor("chart.seriesDefaults.labels.background", "background");
	            mapColor("chart.seriesDefaults.labels.color", "normal-text-color");
	            mapColor("chart.seriesDefaults.notes.icon.background", "chart-notes-background");
	            mapColor("chart.seriesDefaults.notes.icon.border.color", "chart-notes-border");
	            mapColor("chart.seriesDefaults.notes.line.color", "chart-notes-lines");
	            mapColor("chart.seriesDefaults.verticalBoxPlot.downColor", "chart-major-lines");
	            mapColor("chart.seriesDefaults.verticalBoxPlot.mean.color", "base");
	            mapColor("chart.seriesDefaults.verticalBoxPlot.median.color", "base");
	            mapColor("chart.seriesDefaults.verticalBoxPlot.whiskers.color", "accent");
	            mapColor("chart.seriesDefaults.verticalBullet.target.color", "accent");
	            mapColor("chart.seriesDefaults.waterfall.line.color", "chart-major-lines");
	            mapColor("chart.title.color", "normal-text-color");

	            mapColor("diagram.shapeDefaults.fill.color", "accent");
	            mapColor("diagram.shapeDefaults.content.color", "accent-contrast");
	            mapColor("diagram.shapeDefaults.connectorDefaults.fill.color", "normal-text-color");
	            mapColor("diagram.shapeDefaults.connectorDefaults.stroke.color", "accent-contrast");
	            mapColor("diagram.shapeDefaults.connectorDefaults.hover.fill.color", "accent-contrast");
	            mapColor("diagram.shapeDefaults.connectorDefaults.hover.stroke.color", "normal-text-color");
	            mapColor("diagram.editable.resize.handles.stroke.color", "normal-text-color");
	            mapColor("diagram.editable.resize.handles.fill.color", "normal-background");
	            mapColor("diagram.editable.resize.handles.hover.stroke.color", "normal-text-color");
	            mapColor("diagram.editable.resize.handles.hover.fill.color", "normal-text-color");
	            mapColor("diagram.selectable.stroke.color", "normal-text-color");
	            mapColor("diagram.connectionDefaults.stroke.color", "normal-text-color");
	            mapColor("diagram.connectionDefaults.content.color", "normal-text-color");
	            mapColor("diagram.connectionDefaults.selection.handles.fill.color", "accent-contrast");
	            mapColor("diagram.connectionDefaults.selection.handles.stroke.color", "normal-text-color");
	            mapColor("diagram.connectionDefaults.selection.stroke.color", "normal-text-color");

	            mapColor("gauge.pointer.color", "gauge-pointer");
	            mapColor("gauge.scale.labels.color", "normal-text-color");
	            mapColor("gauge.scale.minorTicks.color", "normal-text-color");
	            mapColor("gauge.scale.majorTicks.color", "normal-text-color");
	            mapColor("gauge.scale.line.color", "normal-text-color");
	            mapColor("gauge.scale.rangePlaceholderColor", "gauge-track");

	            var opacity = parseFloat(queryStyle("chart-area-opacity", "opacity"));
	            if (!isNaN(opacity)) {
	                set("chart.seriesDefaults.area.opacity", opacity);
	                set("chart.seriesDefaults.radarArea.opacity", opacity);
	                set("chart.seriesDefaults.verticalArea.opacity", opacity);
	                set("chart.seriesDefaults.labels.opacity", opacity);
	            }

	            setInactiveOpacity(["area", "verticalArea"], "chart-area-inactive-opacity");
	            setInactiveOpacity(["line", "verticalLine"], "chart-line-inactive-opacity");
	        })();

	        (function setSizes() {
	            set("diagram.connectionDefaults.selection.handles.width", 8);
	            set("diagram.connectionDefaults.selection.handles.height", 8);
	        })();

	        (function setFonts() {
	            function font(varName) {
	                return queryStyle(varName, "fontWeight") + " " +
	                       queryStyle(varName, "fontSize") + " " +
	                       queryStyle(varName, "fontFamily");
	            }

	            var defaultFont = font("chart-font");
	            var titleFont = font("chart-title-font");
	            var paneTitleFont = font("chart-pane-title-font");
	            var labelFont = font("chart-label-font");

	            set("chart.axisDefaults.labels.font", labelFont);
	            set("chart.axisDefaults.notes.label.font", defaultFont);
	            set("chart.axisDefaults.title.font", defaultFont);
	            set("chart.legend.labels.font", defaultFont);
	            set("chart.seriesDefaults.labels.font", labelFont);
	            set("chart.seriesDefaults.notes.label.font", defaultFont);
	            set("chart.title.font", titleFont);
	            set("chart.paneDefaults.title.font", paneTitleFont);
	        })();

	        (function setSeriesColors() {
	            function letterPos(letter) {
	                return letter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
	            }

	            function seriesPos(name) {
	                var alpha = name.match(/series-([a-z])$/);
	                if (alpha !== null) {
	                    return letterPos(alpha[1]);
	                }

	                var num = name.split('--series-')[1];
	                return parseInt(num, 10) - 1;
	            }

	            var series = $(".k-var--series div").toArray();
	            var unsetColor = $('.k-var--series-unset').css("backgroundColor");
	            var seriesColors = series.reduce(
	              function(arr, el) {
	                var pos = seriesPos(el.className);
	                var color = $(el).css("backgroundColor");

	                if (color !== unsetColor) {
	                    arr[pos] = color;
	                }

	                return arr;
	              },
	              [] // Will populate the series colors in this array
	            );

	            set("chart.seriesColors", seriesColors);
	        })();

	        hook.remove();

	        cache = theme;

	        return theme;
	    }

	    kendo.dataviz.autoTheme = autoTheme;
	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });