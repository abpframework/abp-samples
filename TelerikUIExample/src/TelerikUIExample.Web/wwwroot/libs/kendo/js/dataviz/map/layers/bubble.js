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

	module.exports = __webpack_require__(928);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(929) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($, undefined) {
	    // Imports ================================================================
	    var kendo = window.kendo,
	        getter = kendo.getter,

	        dataviz = kendo.dataviz,
	        deepExtend = kendo.deepExtend,

	        g = kendo.geometry,
	        d = kendo.drawing,

	        util = d.util,
	        defined = util.defined,

	        map = dataviz.map,
	        Location = map.Location,
	        ShapeLayer = map.layers.ShapeLayer;

	    // Implementation =========================================================
	    var BubbleLayer = ShapeLayer.extend({
	        options: {
	            autoBind: true,
	            locationField: "location",
	            valueField: "value",
	            minSize: 0,
	            maxSize: 100,
	            scale: "sqrt",
	            symbol: "circle"
	        },

	        _load: function(data) {
	            this.surface.clear();

	            if (data.length === 0) {
	                return;
	            }

	            var opt = this.options;
	            var getValue = getter(opt.valueField);

	            data = data.slice(0);
	            data.sort(function(a, b) {
	                return getValue(b) - getValue(a);
	            });

	            var scaleType = this._scaleType();
	            var scale;
	            for (var i = 0; i < data.length; i++) {
	                var dataItem = data[i];
	                var location = getter(opt.locationField)(dataItem);
	                var value = getter(opt.valueField)(dataItem);

	                if (defined(location) && defined(value)) {
	                    if (!scale) {
	                        scale = new scaleType([0, value], [opt.minSize, opt.maxSize]);
	                    }

	                    location = Location.create(location);
	                    var center = this.map.locationToView(location);
	                    var size = scale.map(value);

	                    var symbol = this._createSymbol({
	                        center: center,
	                        size: size,
	                        style: opt.style,
	                        dataItem: dataItem,
	                        location: location
	                    });

	                    symbol.dataItem = dataItem;
	                    symbol.location = location;
	                    symbol.value = value;

	                    this._drawSymbol(symbol);
	                }
	            }
	        },

	        _scaleType: function() {
	            var scale = this.options.scale;

	            if (kendo.isFunction(scale)) {
	                return scale;
	            }

	            return dataviz.map.scales[scale];
	        },

	        _createSymbol: function(args) {
	            var symbol = this.options.symbol;
	            if (!kendo.isFunction(symbol)) {
	                symbol = dataviz.map.symbols[symbol];
	            }

	            return symbol(args);
	        },

	        _drawSymbol: function(shape) {
	            var args = { layer: this, shape: shape };
	            var cancelled = this.map.trigger("shapeCreated", args);
	            if (!cancelled) {
	                this.surface.draw(shape);
	            }
	        }
	    });

	    var SqrtScale = kendo.Class.extend({
	        init: function(domain, range) {
	            this._domain = domain;
	            this._range = range;

	            var domainRange = Math.sqrt(domain[1]) - Math.sqrt(domain[0]);
	            var outputRange = range[1] - range[0];
	            this._ratio = outputRange / domainRange;
	        },

	        map: function(value) {
	            var rel = (Math.sqrt(value) - Math.sqrt(this._domain[0])) * this._ratio;
	            return this._range[0] + rel;
	        }
	    });

	    var Symbols = {
	        circle: function (args) {
	            var geo = new g.Circle(args.center, args.size / 2);
	            return new d.Circle(geo, args.style);
	        },

	        square: function(args) {
	            var path = new d.Path(args.style);
	            var halfSize = args.size / 2;
	            var center = args.center;

	            path.moveTo(center.x - halfSize, center.y - halfSize)
	                .lineTo(center.x + halfSize, center.y - halfSize)
	                .lineTo(center.x + halfSize, center.y + halfSize)
	                .lineTo(center.x - halfSize, center.y + halfSize)
	                .close();

	            return path;
	        }
	    };

	    // Exports ================================================================
	    deepExtend(dataviz, {
	        map: {
	            layers: {
	                bubble: BubbleLayer,
	                BubbleLayer: BubbleLayer
	            },
	            scales: {
	                sqrt: SqrtScale
	            },
	            symbols: Symbols
	        }
	    });

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 929:
/***/ (function(module, exports) {

	module.exports = require("./shape");

/***/ })

/******/ });