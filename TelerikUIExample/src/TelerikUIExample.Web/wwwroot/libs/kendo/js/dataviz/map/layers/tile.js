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

	module.exports = __webpack_require__(935);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 925:
/***/ (function(module, exports) {

	module.exports = require("../location");

/***/ }),

/***/ 931:
/***/ (function(module, exports) {

	module.exports = require("./base");

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(931), __webpack_require__(925) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	(function ($, undefined) {
	    // Imports ================================================================
	    var math = Math,

	        proxy = $.proxy,

	        kendo = window.kendo,
	        Class = kendo.Class,
	        template = kendo.template,

	        dataviz = kendo.dataviz,
	        deepExtend = kendo.deepExtend,

	        g = kendo.geometry,
	        Point = g.Point,

	        Layer = dataviz.map.layers.Layer,

	        util = kendo.util,
	        renderSize = util.renderSize,

	        drawingUtil = kendo.drawing.util,
	        round = drawingUtil.round,
	        limit = drawingUtil.limitValue;

	    // Image tile layer =============================================================
	    var TileLayer = Layer.extend({
	        init: function(map, options) {
	            Layer.fn.init.call(this, map, options);

	            if (typeof this.options.subdomains === "string") {
	                this.options.subdomains = this.options.subdomains.split("");
	            }

	            var viewType = this._viewType();
	            this._view = new viewType(this.element, this.options);
	        },

	        destroy: function() {
	            Layer.fn.destroy.call(this);

	            this._view.destroy();
	            this._view = null;
	        },

	        _beforeReset: function() {
	            var map = this.map;
	            var origin = map.locationToLayer(map.extent().nw).round();
	            this._view.viewOrigin(origin);
	        },

	        _reset: function(e) {
	            var tileTitle;

	            if(e) {
	                tileTitle = e.tileTitle;
	            } else {
	                tileTitle = "";
	            }

	            Layer.fn._reset.call(this);
	            this._updateView();
	            this._view.reset(tileTitle);
	        },

	        _viewType: function() {
	            return TileView;
	        },

	        _activate: function() {
	            Layer.fn._activate.call(this);

	            if (!kendo.support.mobileOS) {
	                if (!this._pan) {
	                    this._pan = kendo.throttle(
	                        proxy(this._render, this),
	                        100
	                    );
	                }

	                this.map.bind("pan", this._pan);
	            }
	        },

	        _deactivate: function() {
	            Layer.fn._deactivate.call(this);

	            if (this._pan) {
	                this.map.unbind("pan", this._pan);
	            }
	        },

	        _updateView: function() {
	            var view = this._view,
	                map = this.map,
	                extent = map.extent(),
	                extentToPoint = {
	                    nw: map.locationToLayer(extent.nw).round(),
	                    se: map.locationToLayer(extent.se).round()
	                };

	            view.center(map.locationToLayer(map.center()));
	            view.extent(extentToPoint);
	            view.zoom(map.zoom());
	        },

	        _resize: function() {
	            this._render();
	        },

	        _panEnd: function(e) {
	            Layer.fn._panEnd.call(this, e);
	            this._render();
	        },

	        _render: function() {
	            this._updateView();
	            this._view.render();
	        }
	    });

	    var TileView = Class.extend({
	        init: function(element, options) {
	            this.element = element;
	            this._initOptions(options);

	            this.pool = new TilePool();
	        },

	        options: {
	            tileSize: 256,
	            subdomains: ["a", "b", "c"],
	            urlTemplate: ""
	        },

	        center: function(center) {
	            this._center = center;
	        },

	        extent: function(extent) {
	            this._extent = extent;
	        },

	        viewOrigin: function(origin) {
	            this._viewOrigin = origin;
	        },

	        zoom: function(zoom) {
	            this._zoom = zoom;
	        },

	        pointToTileIndex: function(point) {
	            return new Point(
	                math.floor(point.x / this.options.tileSize),
	                math.floor(point.y / this.options.tileSize)
	            );
	        },

	        tileCount: function() {
	            var size = this.size(),
	                firstTileIndex = this.pointToTileIndex(this._extent.nw),
	                nw = this._extent.nw,
	                point = this.indexToPoint(firstTileIndex).translate(-nw.x, -nw.y);

	            return {
	                x: math.ceil((math.abs(point.x) + size.width) / this.options.tileSize),
	                y: math.ceil((math.abs(point.y) + size.height) / this.options.tileSize)
	            };
	        },

	        size: function() {
	            var nw = this._extent.nw,
	                se = this._extent.se,
	                diff = se.clone().translate(-nw.x, -nw.y);

	            return {
	                width: diff.x,
	                height: diff.y
	            };
	        },

	        indexToPoint: function(index) {
	            var x = index.x, y = index.y;

	            return new Point(
	                x * this.options.tileSize,
	                y * this.options.tileSize
	            );
	        },

	        subdomainText: function() {
	            var subdomains = this.options.subdomains;

	            return subdomains[this.subdomainIndex++ % subdomains.length];
	        },

	        destroy: function() {
	            this.element.empty();
	            this.pool.empty();
	        },

	        reset: function(tileTitle) {
	            this._tileTitle = tileTitle;
	            this.pool.reset();
	            this.subdomainIndex = 0;
	            this.render();
	        },

	        render: function() {
	            var size = this.tileCount(),
	                firstTileIndex = this.pointToTileIndex(this._extent.nw),
	                tile, x, y;

	            for (x = 0; x < size.x; x++) {
	                for (y = 0; y < size.y; y++) {
	                    tile = this.createTile({
	                        x: firstTileIndex.x + x,
	                        y: firstTileIndex.y + y
	                    });

	                    if (!tile.visible) {
	                        tile.show();
	                    }
	                }
	            }
	        },

	        createTile: function(currentIndex) {
	            var options = this.tileOptions(currentIndex);
	            var tile = this.pool.get(this._center, options);
	            if (tile.element.parent().length === 0) {
	                this.element.append(tile.element);
	            }

	            return tile;
	        },

	        tileOptions: function(currentIndex) {
	            var index = this.wrapIndex(currentIndex),
	                point = this.indexToPoint(currentIndex),
	                origin = this._viewOrigin,
	                offset = point.clone().translate(-origin.x, -origin.y);

	            return {
	                index: index,
	                currentIndex: currentIndex,
	                point: point,
	                offset: roundPoint(offset),
	                zoom: this._zoom,
	                size: this.options.tileSize,
	                subdomain: this.subdomainText(),
	                urlTemplate: this.options.urlTemplate,
	                errorUrlTemplate: this.options.errorUrlTemplate,
	                tileTitle: this._tileTitle
	            };
	        },

	        wrapIndex: function(index) {
	            var boundary = math.pow(2, this._zoom);
	            return {
	                x: this.wrapValue(index.x, boundary),
	                y: limit(index.y, 0, boundary - 1)
	            };
	        },

	        wrapValue: function(value, boundary) {
	            var remainder = (math.abs(value) % boundary);
	            if (value >= 0) {
	                value = remainder;
	            } else {
	                value = boundary - (remainder === 0 ? boundary : remainder);
	            }

	            return value;
	        }
	    });

	    var ImageTile = Class.extend({
	        init: function(id, options) {
	            this.id = id;
	            this.visible = true;

	            this._initOptions(options);
	            this.createElement();
	            this.show();
	        },

	        options: {
	            urlTemplate: "",
	            errorUrlTemplate: ""
	        },

	        createElement: function() {
	            this.element = $("<img style='position: absolute; display: block;' alt='" + this.options.tileTitle + "' />")
	                            .css({ width: this.options.size, height: this.options.size })
	                            .on("error", proxy(function(e) {
	                                if (this.errorUrl()) {
	                                    e.target.setAttribute("src", this.errorUrl());
	                                } else {
	                                    e.target.removeAttribute("src");
	                                }
	                            }, this));
	        },

	        show: function() {
	            var element = this.element[0];
	            element.style.top = renderSize(this.options.offset.y);
	            element.style.left = renderSize(this.options.offset.x);

	            var url = this.url();
	            if (url) {
	                element.setAttribute("src", url);
	            }

	            element.style.visibility = "visible";
	            this.visible = true;
	        },

	        hide: function() {
	            this.element[0].style.visibility = "hidden";
	            this.visible = false;
	        },

	        url: function() {
	            var urlResult = template(this.options.urlTemplate);

	            return urlResult(this.urlOptions());
	        },

	        errorUrl: function() {
	            var urlResult = template(this.options.errorUrlTemplate);

	            return urlResult(this.urlOptions());
	        },

	        urlOptions: function() {
	            var options = this.options;
	            return {
	                zoom: options.zoom,
	                subdomain: options.subdomain,
	                z: options.zoom,
	                x: options.index.x,
	                y: options.index.y,
	                s: options.subdomain,
	                quadkey: options.quadkey,
	                q: options.quadkey,
	                culture: options.culture,
	                c: options.culture
	            };
	        },

	        destroy: function() {
	            if (this.element) {
	                this.element.remove();
	                this.element = null;
	            }
	        }
	    });

	    var TilePool = Class.extend({
	        init: function() {
	            this._items = [];
	        },

	        options: {
	            maxSize: 100
	        },

	        get: function(center, options) {
	            if (this._items.length >= this.options.maxSize) {
	                this._remove(center);
	            }

	            return this._create(options);
	        },

	        empty: function() {
	            var items = this._items;
	            for (var i = 0; i < items.length; i++) {
	                items[i].destroy();
	            }

	            this._items = [];
	        },

	        reset: function() {
	            var items = this._items;
	            for (var i = 0; i < items.length; i++) {
	                items[i].hide();
	            }
	        },

	        _create: function(options) {
	            var items = this._items;
	            var tile;

	            // Build an unique token for the image
	            // This normally would be the URL, but we don't care about subdomains
	            var id = util.hashKey(
	                options.point.toString() +
	                options.offset.toString() +
	                options.zoom +
	                options.urlTemplate
	            );

	            for (var i = 0; i < items.length; i++) {
	                if (items[i].id === id) {
	                    tile = items[i];
	                    break;
	                }
	            }

	            if (tile) {
	                tile.show();
	            } else {
	                tile = new ImageTile(id, options);
	                this._items.push(tile);
	            }

	            return tile;
	        },

	        _remove: function(center) {
	            var items = this._items;
	            var maxDist = -1;
	            var index = -1;

	            for (var i = 0; i < items.length; i++) {
	                var dist = items[i].options.point.distanceTo(center);
	                if (dist > maxDist && !items[i].visible) {
	                    index = i;
	                    maxDist = dist;
	                }
	            }

	            if (index !== -1) {
	                items[index].destroy();
	                items.splice(index, 1);
	            }
	        }
	    });

	    // Methods ================================================================
	    function roundPoint(point) {
	        return new Point(round(point.x), round(point.y));
	    }

	    // Exports ================================================================
	    deepExtend(dataviz, {
	        map: {
	            layers: {
	                tile: TileLayer,
	                TileLayer: TileLayer,

	                ImageTile: ImageTile,
	                TilePool: TilePool,
	                TileView: TileView
	            }
	        }
	    });

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });