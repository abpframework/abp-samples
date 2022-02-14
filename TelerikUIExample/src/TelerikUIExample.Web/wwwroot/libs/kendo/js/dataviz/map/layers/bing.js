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

	module.exports = __webpack_require__(926);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(927) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	(function ($, undefined) {
	    // Imports ================================================================
	    var kendo = window.kendo,

	        dataviz = kendo.dataviz,
	        deepExtend = kendo.deepExtend,
	        defined = kendo.drawing.util.defined,

	        Extent = dataviz.map.Extent,
	        Location = dataviz.map.Location,
	        TileLayer = dataviz.map.layers.TileLayer,
	        TileView = dataviz.map.layers.TileView;

	    // Bing tile layer =============================================================
	    var BingLayer = TileLayer.extend({
	        init: function(map, options) {
	            this.options.baseUrl =
	                this._scheme() +
	                "://dev.virtualearth.net/REST/v1/Imagery/Metadata/";

	            TileLayer.fn.init.call(this, map, options);

	            this._onMetadata = $.proxy(this._onMetadata, this);
	            this._fetchMetadata();
	        },

	        options: {
	            imagerySet: "road"
	        },

	        _fetchMetadata: function() {
	            var options = this.options;

	            if (!options.key) {
	                throw new Error("Bing tile layer: API key is required");
	            }

	            $.ajax({
	                url: options.baseUrl + options.imagerySet,
	                data: {
	                    output: "json",
	                    include: "ImageryProviders",
	                    key: options.key,
	                    uriScheme: this._scheme()
	                },
	                type: "get",
	                dataType: "jsonp",
	                jsonp: "jsonp",
	                success: this._onMetadata
	            });
	        },

	        _scheme: function(proto) {
	            proto = proto || window.location.protocol;
	            return proto.replace(":", "") === "https" ? "https" : "http";
	        },

	        _onMetadata: function(data) {
	            if (data && data.resourceSets.length) {
	                var resource = this.resource = data.resourceSets[0].resources[0];

	                deepExtend(this._view.options, {
	                    urlTemplate: resource.imageUrl
	                        .replace("{subdomain}", "#= subdomain #")
	                        .replace("{quadkey}", "#= quadkey #")
	                        .replace("{culture}", "#= culture #"),
	                    subdomains: resource.imageUrlSubdomains
	                });

	                var options = this.options;
	                if (!defined(options.minZoom)) {
	                    options.minZoom = resource.zoomMin;
	                }
	                if (!defined(options.maxZoom)) {
	                    options.maxZoom = resource.zoomMax;
	                }

	                this._addAttribution();

	                if (this.element.css("display") !== "none") {
	                    this._reset();
	                }
	            }
	        },

	        _viewType: function() {
	            return BingView;
	        },

	        _addAttribution: function() {
	            var attr = this.map.attribution;
	            if (attr) {
	                var items = this.resource.imageryProviders;
	                if (items) {
	                    for (var i = 0; i < items.length; i++) {
	                        var item = items[i];
	                        for (var y = 0; y < item.coverageAreas.length; y++) {
	                            var area = item.coverageAreas[y];
	                            attr.add({
	                                text: item.attribution,
	                                minZoom: area.zoomMin,
	                                maxZoom: area.zoomMax,
	                                extent: new Extent(
	                                    new Location(area.bbox[2], area.bbox[1]),
	                                    new Location(area.bbox[0], area.bbox[3])
	                                )
	                            });
	                        }
	                    }
	                }
	            }
	        },

	        imagerySet: function(value) {
	            if (value) {
	                this.options.imagerySet = value;
	                this.map.attribution.clear();
	                this._fetchMetadata();
	            } else {
	                return this.options.imagerySet;
	            }
	        }
	    });

	    var BingView = TileView.extend({
	        options: {
	            culture: "en-US"
	        },

	        tileOptions: function(currentIndex) {
	            var options = TileView.fn.tileOptions.call(this, currentIndex);

	            options.culture = this.options.culture;
	            options.quadkey = this.tileQuadKey(this.wrapIndex(currentIndex));

	            return options;
	        },

	        tileQuadKey: function(index) {
	            var quadKey = "",
	                digit, mask, i;

	            for (i = this._zoom; i > 0; i--) {
	                digit = 0;
	                mask = 1 << (i - 1);

	                if ((index.x & mask) !== 0) {
	                    digit++;
	                }

	                if ((index.y & mask) !== 0) {
	                    digit += 2;
	                }

	                quadKey += digit;
	            }

	            return quadKey;
	        }
	    });

	    // Exports ================================================================
	    deepExtend(dataviz, {
	        map: {
	            layers: {
	                bing: BingLayer,
	                BingLayer: BingLayer,
	                BingView: BingView
	            }
	        }
	    });

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 927:
/***/ (function(module, exports) {

	module.exports = require("./tile");

/***/ })

/******/ });