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

	__webpack_require__(1716);
	module.exports = __webpack_require__(1716);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1716:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/***********************************************************************
	 * WARNING: this file is auto-generated.  If you change it directly,
	 * your modifications will eventually be lost.  The source code is in
	 * `kendo-drawing` repository, you should make your changes there and
	 * run `src-modules/sync.sh` in this repository.
	 */
	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(20)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {

	window.kendo.util = window.kendo.util || {};

	var LRUCache = kendo.Class.extend({
	    init: function(size) {

	        this._size = size;
	        this._length = 0;
	        this._map = {};
	    },

	    put: function(key, value) {
	        var map = this._map;
	        var entry = { key: key, value: value };

	        map[key] = entry;

	        if (!this._head) {
	            this._head = this._tail = entry;
	        } else {
	            this._tail.newer = entry;
	            entry.older = this._tail;
	            this._tail = entry;
	        }

	        if (this._length >= this._size) {
	            map[this._head.key] = null;
	            this._head = this._head.newer;
	            this._head.older = null;
	        } else {
	            this._length++;
	        }
	    },

	    get: function(key) {
	        var entry = this._map[key];

	        if (entry) {
	            if (entry === this._head && entry !== this._tail) {
	                this._head = entry.newer;
	                this._head.older = null;
	            }

	            if (entry !== this._tail) {
	                if (entry.older) {
	                    entry.older.newer = entry.newer;
	                    entry.newer.older = entry.older;
	                }

	                entry.older = this._tail;
	                entry.newer = null;

	                this._tail.newer = entry;
	                this._tail = entry;
	            }

	            return entry.value;
	        }
	    }
	});

	var REPLACE_REGEX = /\r?\n|\r|\t/g;
	var SPACE = ' ';

	function normalizeText(text) {
	    return String(text).replace(REPLACE_REGEX, SPACE);
	}

	function objectKey(object) {
	    var parts = [];
	    for (var key in object) {
	        parts.push(key + object[key]);
	    }

	    return parts.sort().join("");
	}

	// Computes FNV-1 hash
	// See http://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function
	function hashKey(str) {
	    // 32-bit FNV-1 offset basis
	    // See http://isthe.com/chongo/tech/comp/fnv/#FNV-param
	    var hash = 0x811C9DC5;

	    for (var i = 0; i < str.length; ++i) {
	        hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
	        hash ^= str.charCodeAt(i);
	    }

	    return hash >>> 0;
	}

	function zeroSize() {
	    return { width: 0, height: 0, baseline: 0 };
	}

	var DEFAULT_OPTIONS = {
	    baselineMarkerSize: 1
	};

	var defaultMeasureBox;

	if (typeof document !== "undefined") {
	    defaultMeasureBox = document.createElement("div");
	    defaultMeasureBox.style.cssText = "position: absolute !important; top: -4000px !important; width: auto !important; height: auto !important;" +
	              "padding: 0 !important; margin: 0 !important; border: 0 !important;" +
	              "line-height: normal !important; visibility: hidden !important; white-space: pre!important;";
	}

	var TextMetrics = kendo.Class.extend({
	    init: function(options) {

	        this._cache = new LRUCache(1000);
	        this.options = $.extend({}, DEFAULT_OPTIONS, options);
	    },

	    measure: function(text, style, options) {
	        if (options === void 0) { options = {}; }

	        if (typeof text === 'undefined' || text === null) {
	            return zeroSize();
	        }

	        var styleKey = objectKey(style);
	        var cacheKey = hashKey(text + styleKey);
	        var cachedResult = this._cache.get(cacheKey);

	        if (cachedResult) {
	            return cachedResult;
	        }

	        var size = zeroSize();
	        var measureBox = options.box || defaultMeasureBox;
	        var baselineMarker = this._baselineMarker().cloneNode(false);

	        for (var key in style) {
	            var value = style[key];
	            if (typeof value !== "undefined") {
	                measureBox.style[key] = value;
	            }
	        }

	        var textStr = options.normalizeText !== false ? normalizeText(text) : String(text);

	        measureBox.textContent = textStr;
	        measureBox.appendChild(baselineMarker);
	        document.body.appendChild(measureBox);

	        if (textStr.length) {
	            size.width = measureBox.offsetWidth - this.options.baselineMarkerSize;
	            size.height = measureBox.offsetHeight;
	            size.baseline = baselineMarker.offsetTop + this.options.baselineMarkerSize;
	        }

	        if (size.width > 0 && size.height > 0) {
	            this._cache.put(cacheKey, size);
	        }

	        measureBox.parentNode.removeChild(measureBox);

	        return size;
	    },

	    _baselineMarker: function() {
	        var marker = document.createElement("div");
	        marker.style.cssText = "display: inline-block; vertical-align: baseline;width: " +
	            this.options.baselineMarkerSize + "px; height: " + this.options.baselineMarkerSize + "px;overflow: hidden;";

	        return marker;
	    }
	});

	TextMetrics.current = new TextMetrics();

	function measureText(text, style, measureBox) {
	    return TextMetrics.current.measure(text, style, measureBox);
	}

	kendo.deepExtend(kendo.util, {
	    LRUCache: LRUCache,
	    TextMetrics: TextMetrics,
	    measureText: measureText,
	    objectKey: objectKey,
	    hashKey: hashKey,
	    normalizeText: normalizeText
	});

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ })

/******/ });