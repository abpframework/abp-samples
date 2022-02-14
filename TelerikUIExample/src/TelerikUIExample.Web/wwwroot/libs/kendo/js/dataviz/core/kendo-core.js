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

	module.exports = __webpack_require__(900);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 893:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.drawing");

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.core");

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/***********************************************************************
	 * WARNING: this file is auto-generated.  If you change it directly,
	 * your modifications will eventually be lost.  The source code is in
	 * `kendo-charts` repository, you should make your changes there and
	 * run `src-modules/sync.sh` in this repository.
	 */
	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(896),
	        __webpack_require__(893)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {
	/* jshint curly:false */
	/* jshint -W058 */

	window.kendo.dataviz = window.kendo.dataviz || {};
	var drawing = kendo.drawing;
	var util = drawing.util;
	var Path = drawing.Path;
	var Group = drawing.Group;
	var Class = kendo.Class;
	var geometry = kendo.geometry;
	var Rect = geometry.Rect;
	var Circle = geometry.Circle;
	var geometryTransform = geometry.transform;
	var Segment = geometry.Segment;
	var dataviz = kendo.dataviz;

	var deepExtend = kendo.deepExtend;
	var isFunction = kendo.isFunction;
	var __common_getter_js = kendo.getter;

	var ARC = "arc";
	var AXIS_LABEL_CLICK = "axisLabelClick";
	var BLACK = "#000";
	var BOTTOM = "bottom";
	var CENTER = "center";
	var CIRCLE = "circle";
	var COORD_PRECISION = 3;
	var CROSS = "cross";
	var DATE = "date";
	var DEFAULT_FONT = "12px sans-serif";
	var DEFAULT_HEIGHT = 400;
	var DEFAULT_PRECISION = 10;
	var DEFAULT_WIDTH = 600;
	var END = "end";
	var FORMAT_REGEX = /\{\d+:?/;
	var HEIGHT = "height";
	var HIGHLIGHT_ZINDEX = 100;
	var INSIDE = "inside";
	var LEFT = "left";
	var MAX_VALUE = Number.MAX_VALUE;
	var MIN_VALUE = -Number.MAX_VALUE;
	var NONE = "none";
	var NOTE_CLICK = "noteClick";
	var NOTE_HOVER = "noteHover";
	var NOTE_LEAVE = "noteLeave";
	var OBJECT = "object";
	var OUTSIDE = "outside";
	var RIGHT = "right";
	var ROUNDED_RECT = "roundedRect";
	var START = "start";
	var STRING = "string";
	var TOP = "top";
	var TRIANGLE = "triangle";
	var VALUE = "value";
	var WHITE = "#fff";
	var WIDTH = "width";
	var X = "x";
	var Y = "y";
	var DEFAULT_SERIES_OPACITY = 1;

	var constants = {
		ARC: ARC,
		AXIS_LABEL_CLICK: AXIS_LABEL_CLICK,
		BLACK: BLACK,
		BOTTOM: BOTTOM,
		CENTER: CENTER,
		CIRCLE: CIRCLE,
		COORD_PRECISION: COORD_PRECISION,
		CROSS: CROSS,
		DATE: DATE,
		DEFAULT_FONT: DEFAULT_FONT,
		DEFAULT_HEIGHT: DEFAULT_HEIGHT,
		DEFAULT_PRECISION: DEFAULT_PRECISION,
		DEFAULT_WIDTH: DEFAULT_WIDTH,
		END: END,
		FORMAT_REGEX: FORMAT_REGEX,
		HEIGHT: HEIGHT,
		HIGHLIGHT_ZINDEX: HIGHLIGHT_ZINDEX,
		INSIDE: INSIDE,
		LEFT: LEFT,
		MAX_VALUE: MAX_VALUE,
		MIN_VALUE: MIN_VALUE,
		NONE: NONE,
		NOTE_CLICK: NOTE_CLICK,
		NOTE_HOVER: NOTE_HOVER,
		NOTE_LEAVE: NOTE_LEAVE,
		OBJECT: OBJECT,
		OUTSIDE: OUTSIDE,
		RIGHT: RIGHT,
		ROUNDED_RECT: ROUNDED_RECT,
		START: START,
		STRING: STRING,
		TOP: TOP,
		TRIANGLE: TRIANGLE,
		VALUE: VALUE,
		WHITE: WHITE,
		WIDTH: WIDTH,
		X: X,
		Y: Y,
		DEFAULT_SERIES_OPACITY: DEFAULT_SERIES_OPACITY
	};

	function isArray(value) {
	    return Array.isArray(value);
	}

	function addClass(element, classes) {
	    var classArray = isArray(classes) ? classes : [ classes ];

	    for (var idx = 0; idx < classArray.length; idx++) {
	        var className = classArray[idx];
	        if (element.className.indexOf(className) === -1) {
	            element.className += " " + className;
	        }
	    }
	}

	var SPACE_REGEX = /\s+/g;

	function removeClass(element, className) {
	    if (element && element.className) {
	        element.className = element.className.replace(className, "").replace(SPACE_REGEX, " ");
	    }
	}

	function alignPathToPixel(path) {
	    var offset = 0.5;
	    if (path.options.stroke && kendo.drawing.util.defined(path.options.stroke.width)) {
	        if (path.options.stroke.width % 2 === 0) {
	            offset = 0;
	        }
	    }

	    for (var i = 0; i < path.segments.length; i++) {
	        path.segments[i].anchor().round(0).translate(offset, offset);
	    }

	    return path;
	}

	function clockwise(angle1, angle2) {
	    // True if angle2 is clockwise of angle1
	    // assuming angles grow in clock-wise direction
	    // (as in the pie and radar charts)
	    return -angle1.x * angle2.y + angle1.y * angle2.x < 0;
	}

	function isNumber(value) {
	    return typeof value === "number" && !isNaN(value);
	}

	function isString(value) {
	    return typeof value === STRING;
	}

	function convertableToNumber(value) {
	    return isNumber(value) || (isString(value) && isFinite(value));
	}

	function isObject(value) {
	    return typeof value === "object";
	}

	function styleValue(value) {
	    if (isNumber(value)) {
	        return value + "px";
	    }
	    return value;
	}

	var SIZE_STYLES_REGEX = /width|height|top|left|bottom|right/i;

	function isSizeField(field) {
	    return SIZE_STYLES_REGEX.test(field);
	}

	function elementStyles(element, styles) {
	    var stylesArray = isString(styles) ? [ styles ] : styles;

	    if (isArray(stylesArray)) {
	        var result = {};
	        var style = window.getComputedStyle(element);

	        for (var idx = 0; idx < stylesArray.length; idx++) {
	            var field = stylesArray[idx];
	            result[field] = isSizeField(field) ? parseFloat(style[field]) : style[field];
	        }

	        return result;
	    } else if (isObject(styles)) {
	        for (var field$1 in styles) {
	            element.style[field$1] = styleValue(styles[field$1]);
	        }
	    }
	}

	function getSpacing(value, defaultSpacing) {
	    if (defaultSpacing === void 0) { defaultSpacing = 0; }

	    var spacing = { top: 0, right: 0, bottom: 0, left: 0 };

	    if (typeof(value) === "number") {
	        spacing[TOP] = spacing[RIGHT] = spacing[BOTTOM] = spacing[LEFT] = value;
	    } else {
	        spacing[TOP] = value[TOP] || defaultSpacing;
	        spacing[RIGHT] = value[RIGHT] || defaultSpacing;
	        spacing[BOTTOM] = value[BOTTOM] || defaultSpacing;
	        spacing[LEFT] = value[LEFT] || defaultSpacing;
	    }

	    return spacing;
	}

	var defaultImplementation = {
	    format: function (format, value) { return value; },

	    toString: function (value) { return value; },

	    parseDate: function (value) { return new Date(value); },

	    firstDay: function () { return 0; }
	};

	var current = defaultImplementation;

	var IntlService = Class.extend({

	});

	IntlService.register = function(userImplementation) {
	    current = userImplementation;
	};

	if (Object.defineProperties) {
	    Object.defineProperties(IntlService, {
	        implementation: {
	            get: function() {
	                return current;
	            }
	        }
	    });
	}

	var FORMAT_REPLACE_REGEX = /\{(\d+)(:[^\}]+)?\}/g;

	var FormatService = Class.extend({
	    init: function(intlService) {
	        this._intlService = intlService;
	    },

	    auto: function(formatString) {
	        var values = [], len = arguments.length - 1;
	        while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

	        var intl = this.intl;

	        if (isString(formatString) && formatString.match(FORMAT_REGEX)) {
	            return intl.format.apply(intl, [ formatString ].concat( values ));
	        }

	        return intl.toString(values[0], formatString);
	    },

	    localeAuto: function(formatString, values, locale) {
	        var intl = this.intl;
	        var result;

	        if (isString(formatString) && formatString.match(FORMAT_REGEX)) {
	            result = formatString.replace(FORMAT_REPLACE_REGEX, function(match, index, placeholderFormat) {
	                var value = values[parseInt(index, 10)];

	                return intl.toString(value, placeholderFormat ? placeholderFormat.substring(1) : "", locale);
	            });
	        } else {
	            result = intl.toString(values[0], formatString, locale);
	        }

	        return result;
	    }
	});

	if (Object.defineProperties) {
	    Object.defineProperties(FormatService.fn, {
	        intl: {
	            get: function() {
	                return this._intlService || IntlService.implementation;
	            },
	            set: function(value) {
	                this._intlService = value;
	            }
	        }
	    });
	}

	var ChartService = Class.extend({
	    init: function(chart, context) {
	        if (context === void 0) { context = {}; }

	        this._intlService = context.intlService;
	        this.sender = context.sender || chart;
	        this.format = new FormatService(context.intlService);
	        this.chart = chart;
	        this.rtl = Boolean(context.rtl);
	    },

	    notify: function(name, args) {
	        if (this.chart) {
	            this.chart.trigger(name, args);
	        }
	    },

	    isPannable: function(axis) {
	        var pannable = ((this.chart || {}).options || {}).pannable;
	        return pannable && pannable.lock !== axis;
	    }
	});

	if (Object.defineProperties) {
	    Object.defineProperties(ChartService.fn, {
	        intl: {
	            get: function() {
	                return this._intlService || IntlService.implementation;
	            },
	            set: function(value) {
	                this._intlService = value;
	                this.format.intl = value;
	            }
	        }
	    });
	}

	var current$1;

	var DomEventsBuilder = Class.extend({

	});

	DomEventsBuilder.register = function(userImplementation) {
	    current$1 = userImplementation;
	};

	DomEventsBuilder.create = function(element, events) {
	    if (current$1) {
	        return current$1.create(element, events);
	    }
	};

	var current$2 = {
	    compile: function(template) {
	        return template;
	    }
	};

	var TemplateService = Class.extend({

	});

	TemplateService.register = function(userImplementation) {
	    current$2 = userImplementation;
	};

	TemplateService.compile = function(template) {
	    return current$2.compile(template);
	};

	var services = {
		ChartService: ChartService,
		DomEventsBuilder: DomEventsBuilder,
		FormatService: FormatService,
		IntlService: IntlService,
		TemplateService: TemplateService
	};

	function getTemplate(options) {
	    if (options === void 0) { options = {}; }

	    var template;
	    if (options.template) {
	        options.template = template = TemplateService.compile(options.template);
	    } else if (isFunction(options.content)) {
	        template = options.content;
	    }

	    return template;
	}

	function grep(array, callback) {
	    var length = array.length;
	    var result = [];
	    for (var idx = 0; idx < length; idx++) {
	        if (callback(array[idx])) {
	            result .push(array[idx]);
	        }
	    }

	    return result;
	}

	function hasClasses(element, classNames) {
	    if (element.className) {
	        var names = classNames.split(" ");
	        for (var idx = 0; idx < names.length; idx++) {
	            if (element.className.indexOf(names[idx]) !== -1) {
	                return true;
	            }
	        }
	    }
	}

	var HashMap = function HashMap() {
	    this._map = {};
	};

	HashMap.prototype.get = function get (name) {
	    return this._map[this._key(name)];
	};

	HashMap.prototype.set = function set (name, value) {
	    this._map[this._key(name)] = value;
	};

	HashMap.prototype._key = function _key (name) {
	    return name instanceof Date ? name.getTime() : name;
	};

	function inArray(value, array) {
	    if (array) {
	        return array.indexOf(value) !== -1;
	    }
	}

	function interpolateValue(start, end, progress) {
	    return kendo.drawing.util.round(start + (end - start) * progress, COORD_PRECISION);
	}

	var TRIGGER = 'trigger';

	var InstanceObserver = Class.extend({
	    init: function(observer, handlers) {
	        this.observer = observer;
	        this.handlerMap = deepExtend({}, this.handlerMap, handlers);
	    },

	    trigger: function(name, args) {
	        var ref = this;
	        var observer = ref.observer;
	        var handlerMap = ref.handlerMap;
	        var isDefaultPrevented;
	        if (handlerMap[name]) {
	            isDefaultPrevented = this.callObserver(handlerMap[name], args);
	        } else if (observer[TRIGGER]) {
	            isDefaultPrevented = this.callObserver(TRIGGER, name, args);
	        }

	        return isDefaultPrevented;
	    },

	    callObserver: function(fnName) {
	        var args = [], len = arguments.length - 1;
	        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

	        return this.observer[fnName].apply(this.observer, args);
	    },

	    requiresHandlers: function(names) {
	        var this$1 = this;

	        if (this.observer.requiresHandlers) {
	            return this.observer.requiresHandlers(names);
	        }

	        for (var idx = 0; idx < names.length; idx++) {
	            if (this$1.handlerMap[names[idx]]) {
	                return true;
	            }
	        }
	    }
	});

	function map(array, callback) {
	    var length = array.length;
	    var result = [];
	    for (var idx = 0; idx < length; idx++) {
	        var value = callback(array[idx]);
	        if (kendo.drawing.util.defined(value)) {
	            result.push(value);
	        }
	    }
	    return result;
	}

	function mousewheelDelta(e) {
	    var delta = 0;

	    if (e.wheelDelta) {
	        delta = -e.wheelDelta / 120;
	        delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
	    }

	    if (e.detail) {
	        delta = kendo.drawing.util.round(e.detail / 3);
	    }

	    return delta;
	}

	var ref = kendo.drawing.util;
	var append = ref.append;
	var bindEvents = ref.bindEvents;
	var defined = ref.defined;
	var deg = ref.deg;
	var elementOffset = ref.elementOffset;
	var elementSize = ref.elementSize;
	var eventElement = ref.eventElement;
	var eventCoordinates = ref.eventCoordinates;
	var last = ref.last;
	var limitValue = ref.limitValue;
	var objectKey = ref.objectKey;
	var rad = ref.rad;
	var round = ref.round;
	var unbindEvents = ref.unbindEvents;
	var valueOrDefault = ref.valueOrDefault;

	var FontLoader = Class.extend({

	});

	FontLoader.fetchFonts = function(options, fonts, state) {
	    if (state === void 0) { state = { depth: 0 }; }

	    var MAX_DEPTH = 5;

	    if (!options || state.depth > MAX_DEPTH || !document.fonts) {
	        return;
	    }

	    Object.keys(options).forEach(function(key) {
	        var value = options[key];
	        if (key === "dataSource" || key[0] === "$" || !value) {
	            return;
	        }

	        if (key === "font") {
	            fonts.push(value);
	        } else if (typeof value === "object") {
	            state.depth++;
	            FontLoader.fetchFonts(value, fonts, state);
	            state.depth--;
	        }
	    });
	};

	FontLoader.loadFonts = function(fonts, callback) {
	    var promises = [];

	    if (fonts.length > 0 && document.fonts) {
	        try {
	            promises = fonts.map(function(font) {
	                return document.fonts.load(font);
	            });
	        } catch (e) {
	            // Silence font-loading errors
	            kendo.logToConsole(e);
	        }

	        Promise.all(promises).then(callback, callback);
	    } else {
	        callback();
	    }
	};

	FontLoader.preloadFonts = function(options, callback) {
	    var fonts = [];
	    FontLoader.fetchFonts(options, fonts);

	    FontLoader.loadFonts(fonts, callback);
	};

	function setDefaultOptions(type, options) {
	    var proto = type.prototype;
	    if (proto.options) {
	        proto.options = deepExtend({}, proto.options, options);
	    } else {
	        proto.options = options;
	    }
	}

	function sparseArrayLimits(arr) {
	    var min = MAX_VALUE;
	    var max = MIN_VALUE;

	    for (var idx = 0, length = arr.length; idx < length; idx++) {
	        var value = arr[idx];
	        if (value !== null && isFinite(value)) {
	            min = Math.min(min, value);
	            max = Math.max(max, value);
	        }
	    }

	    return {
	        min: min === MAX_VALUE ? undefined : min,
	        max: max === MIN_VALUE ? undefined : max
	    };
	}

	function find(array, predicate) {
	    for (var i = 0; i < array.length; i++) {
	        var item = array[i];
	        if (predicate(item, i, array)) {
	            return item;
	        }
	    }
	}

	var Matrix = geometry.Matrix;
	var matrixRegexp = /matrix\((.*)\)/;

	function parseMatrix(matrixString) {
	    var match = matrixString.match(matrixRegexp);
	    if (match === null || match.length !== 2) {
	        return Matrix.unit();
	    }

	    var members = match[1].split(',').map(function (x) { return parseFloat(x); });
	    return new (Function.prototype.bind.apply( Matrix, [ null ].concat( members) ));
	}

	function transformMatrix(element) {
	    var transform = getComputedStyle(element).transform;

	    if (transform === 'none') {
	        return Matrix.unit();
	    }

	    return parseMatrix(transform);
	}

	function elementScale(element) {
	    if (!element) {
	        return Matrix.unit();
	    }

	    var matrix = transformMatrix(element);
	    var parent = element.parentElement;
	    while (parent) {
	        var parentMatrix = transformMatrix(parent);
	        matrix = matrix.multiplyCopy(parentMatrix);
	        parent = parent.parentElement;
	    }

	    matrix.b = matrix.c = matrix.e = matrix.f = 0;
	    return matrix;
	}

	function autoTextColor(color) {
	    var isDark = new kendo.Color(color).isDark();
	    if (isDark) {
	        return WHITE;
	    }

	    return BLACK;
	}

	var DELETED = {};

	var LegacySet = Class.extend({
	    init: function(values) {
	        var this$1 = this;

	        this._index = {};
	        this._values = values ? values.slice(0) : [];

	        for (var i = 0; i < this._values.length; i++) {
	            this$1._index[this$1._values[i]] = i;
	        }
	    },

	    values: function() {
	        return this._values.filter(function (item) { return item !== DELETED; });
	    },

	    has: function(value) {
	        return this._index[value] !== undefined;
	    },

	    add: function(value) {
	        if (!this.has(value)) {
	            this._index[value] = this._values.length;
	            this._values.push(value);
	        }
	    },

	    delete: function(value) {
	        var index = this._index[value];
	        if (index !== undefined) {
	            this._values[index] = DELETED;
	            delete this._index[value];
	        }
	    },

	    clear: function() {
	        this._index = {};
	        this._values = [];
	    }
	});

	if (Object.defineProperties) {
	    Object.defineProperties(LegacySet.fn, {
	        size: {
	            get: function() {
	                return this._values.length;
	            }
	        }
	    });
	}

	var SetWrapper = Class.extend({
	    init: function(values) {
	        this._set = new Set(values);
	    },

	    values: function() {
	        return Array.from(this._set);
	    },

	    has: function(value) {
	        return this._set.has(value);
	    },

	    add: function(value) {
	        this._set.add(value);
	    },

	    delete: function(value) {
	        this._set.delete(value);
	    },

	    clear: function() {
	        this._set.clear();
	    }
	});

	if (Object.defineProperties) {
	    Object.defineProperties(SetWrapper.fn, {
	        size: {
	            get: function() {
	                return this._set.size;
	            }
	        }
	    });
	}

	// TODO: Drop LegacySet when removing support for IE10
	var supportsSet = function () {
	    var supported = false;

	    if (typeof Set === 'function') {
	        var set = new Set([1]);
	        supported = set.has(1);
	    }

	    return supported;
	};

	function createHashSet(values) {
	    if (supportsSet()) {
	        return new SetWrapper(values);
	    }

	    return new LegacySet(values);
	}

	function autoMajorUnit(min, max) {
	    var diff = round(max - min, DEFAULT_PRECISION - 1);

	    if (diff === 0) {
	        if (max === 0) {
	            return 0.1;
	        }

	        diff = Math.abs(max);
	    }

	    var scale = Math.pow(10, Math.floor(Math.log(diff) / Math.log(10)));
	    var relativeValue = round((diff / scale), DEFAULT_PRECISION);
	    var scaleMultiplier = 1;

	    if (relativeValue < 1.904762) {
	        scaleMultiplier = 0.2;
	    } else if (relativeValue < 4.761904) {
	        scaleMultiplier = 0.5;
	    } else if (relativeValue < 9.523809) {
	        scaleMultiplier = 1;
	    } else {
	        scaleMultiplier = 2;
	    }

	    return round(scale * scaleMultiplier, DEFAULT_PRECISION);
	}

	var Point = Class.extend({
	    init: function(x, y) {

	        this.x = x || 0;
	        this.y = y || 0;
	    },

	    clone: function() {
	        return new Point(this.x, this.y);
	    },

	    equals: function(point) {
	        return point && this.x === point.x && this.y === point.y;
	    },

	    rotate: function(center, degrees) {
	        var theta = rad(degrees);
	        var cosT = Math.cos(theta);
	        var sinT = Math.sin(theta);
	        var cx = center.x;
	        var cy = center.y;
	        var ref = this;
	        var x = ref.x;
	        var y = ref.y;

	        this.x = round(
	            cx + (x - cx) * cosT + (y - cy) * sinT,
	            COORD_PRECISION
	        );

	        this.y = round(
	            cy + (y - cy) * cosT - (x - cx) * sinT,
	            COORD_PRECISION
	        );

	        return this;
	    },

	    multiply: function(a) {

	        this.x *= a;
	        this.y *= a;

	        return this;
	    },

	    distanceTo: function(point) {
	        var dx = this.x - point.x;
	        var dy = this.y - point.y;

	        return Math.sqrt(dx * dx + dy * dy);
	    }
	});

	Point.onCircle = function(center, angle, radius) {
	    var radians = rad(angle);

	    return new Point(
	        center.x - radius * Math.cos(radians),
	        center.y - radius * Math.sin(radians)
	    );
	};

	var Box = Class.extend({
	    init: function(x1, y1, x2, y2) {

	        this.x1 = x1 || 0;
	        this.y1 = y1 || 0;
	        this.x2 = x2 || 0;
	        this.y2 = y2 || 0;
	    },

	    equals: function(box) {
	        return this.x1 === box.x1 && this.x2 === box.x2 &&
	            this.y1 === box.y1 && this.y2 === box.y2;
	    },

	    width: function() {
	        return this.x2 - this.x1;
	    },

	    height: function() {
	        return this.y2 - this.y1;
	    },

	    translate: function(dx, dy) {
	        this.x1 += dx;
	        this.x2 += dx;
	        this.y1 += dy;
	        this.y2 += dy;

	        return this;
	    },

	    move: function(x, y) {
	        var height = this.height();
	        var width = this.width();

	        if (defined(x)) {
	            this.x1 = x;
	            this.x2 = this.x1 + width;
	        }

	        if (defined(y)) {
	            this.y1 = y;
	            this.y2 = this.y1 + height;
	        }

	        return this;
	    },

	    wrap: function(targetBox) {
	        this.x1 = Math.min(this.x1, targetBox.x1);
	        this.y1 = Math.min(this.y1, targetBox.y1);
	        this.x2 = Math.max(this.x2, targetBox.x2);
	        this.y2 = Math.max(this.y2, targetBox.y2);

	        return this;
	    },

	    wrapPoint: function(point) {
	        var arrayPoint = isArray(point);
	        var x = arrayPoint ? point[0] : point.x;
	        var y = arrayPoint ? point[1] : point.y;
	        this.wrap(new Box(x, y, x, y));

	        return this;
	    },

	    snapTo: function(targetBox, axis) {

	        if (axis === X || !axis) {
	            this.x1 = targetBox.x1;
	            this.x2 = targetBox.x2;
	        }

	        if (axis === Y || !axis) {
	            this.y1 = targetBox.y1;
	            this.y2 = targetBox.y2;
	        }

	        return this;
	    },

	    alignTo: function(targetBox, anchor) {
	        var height = this.height();
	        var width = this.width();
	        var axis = anchor === TOP || anchor === BOTTOM ? Y : X;
	        var offset = axis === Y ? height : width;

	        if (anchor === CENTER) {
	            var targetCenter = targetBox.center();
	            var center = this.center();

	            this.x1 += targetCenter.x - center.x;
	            this.y1 += targetCenter.y - center.y;
	        } else if (anchor === TOP || anchor === LEFT) {
	            this[axis + 1] = targetBox[axis + 1] - offset;
	        } else {
	            this[axis + 1] = targetBox[axis + 2];
	        }

	        this.x2 = this.x1 + width;
	        this.y2 = this.y1 + height;

	        return this;
	    },

	    shrink: function(dw, dh) {

	        this.x2 -= dw;
	        this.y2 -= dh;

	        return this;
	    },

	    expand: function(dw, dh) {
	        this.shrink(-dw, -dh);
	        return this;
	    },

	    pad: function(padding) {
	        var spacing = getSpacing(padding);

	        this.x1 -= spacing.left;
	        this.x2 += spacing.right;
	        this.y1 -= spacing.top;
	        this.y2 += spacing.bottom;

	        return this;
	    },

	    unpad: function(padding) {
	        var spacing = getSpacing(padding);

	        spacing.left = -spacing.left;
	        spacing.top = -spacing.top;
	        spacing.right = -spacing.right;
	        spacing.bottom = -spacing.bottom;

	        return this.pad(spacing);
	    },

	    clone: function() {
	        return new Box(this.x1, this.y1, this.x2, this.y2);
	    },

	    center: function() {
	        return new Point(
	            this.x1 + this.width() / 2,
	            this.y1 + this.height() / 2
	        );
	    },

	    containsPoint: function(point) {

	        return point.x >= this.x1 && point.x <= this.x2 &&
	               point.y >= this.y1 && point.y <= this.y2;
	    },

	    points: function() {
	        return [
	            new Point(this.x1, this.y1),
	            new Point(this.x2, this.y1),
	            new Point(this.x2, this.y2),
	            new Point(this.x1, this.y2)
	        ];
	    },

	    getHash: function() {
	        return [ this.x1, this.y1, this.x2, this.y2 ].join(",");
	    },

	    overlaps: function(box) {
	        return !(box.y2 < this.y1 || this.y2 < box.y1 || box.x2 < this.x1 || this.x2 < box.x1);
	    },

	    rotate: function(rotation) {
	        var width = this.width();
	        var height = this.height();
	        var ref = this.center();
	        var cx = ref.x;
	        var cy = ref.y;

	        var r1 = rotatePoint(0, 0, cx, cy, rotation);
	        var r2 = rotatePoint(width, 0, cx, cy, rotation);
	        var r3 = rotatePoint(width, height, cx, cy, rotation);
	        var r4 = rotatePoint(0, height, cx, cy, rotation);

	        width = Math.max(r1.x, r2.x, r3.x, r4.x) - Math.min(r1.x, r2.x, r3.x, r4.x);
	        height = Math.max(r1.y, r2.y, r3.y, r4.y) - Math.min(r1.y, r2.y, r3.y, r4.y);

	        this.x2 = this.x1 + width;
	        this.y2 = this.y1 + height;

	        return this;
	    },

	    toRect: function() {
	        return new Rect([ this.x1, this.y1 ], [ this.width(), this.height() ]);
	    },

	    hasSize: function() {
	        return this.width() !== 0 && this.height() !== 0;
	    },

	    align: function(targetBox, axis, alignment) {
	        var c1 = axis + 1;
	        var c2 = axis + 2;
	        var sizeFunc = axis === X ? WIDTH : HEIGHT;
	        var size = this[sizeFunc]();

	        if (inArray(alignment, [ LEFT, TOP ])) {
	            this[c1] = targetBox[c1];
	            this[c2] = this[c1] + size;
	        } else if (inArray(alignment, [ RIGHT, BOTTOM ])) {
	            this[c2] = targetBox[c2];
	            this[c1] = this[c2] - size;
	        } else if (alignment === CENTER) {
	            this[c1] = targetBox[c1] + (targetBox[sizeFunc]() - size) / 2;
	            this[c2] = this[c1] + size;
	        }
	    }
	});

	function rotatePoint(x, y, cx, cy, angle) {
	    var theta = rad(angle);

	    return new Point(
	        cx + (x - cx) * Math.cos(theta) + (y - cy) * Math.sin(theta),
	        cy - (x - cx) * Math.sin(theta) + (y - cy) * Math.cos(theta)
	    );
	}

	var Ring = Class.extend({
	    init: function(center, innerRadius, radius, startAngle, angle) {

	        this.center = center;
	        this.innerRadius = innerRadius;
	        this.radius = radius;
	        this.startAngle = startAngle;
	        this.angle = angle;
	    },

	    clone: function() {
	        return new Ring(this.center, this.innerRadius, this.radius, this.startAngle, this.angle);
	    },

	    middle: function() {
	        return this.startAngle + this.angle / 2;
	    },

	    setRadius: function(newRadius, innerRadius) {
	        if (innerRadius) {
	            this.innerRadius = newRadius;
	        } else {
	            this.radius = newRadius;
	        }

	        return this;
	    },

	    point: function(angle, innerRadius) {
	        var radianAngle = rad(angle);
	        var ax = Math.cos(radianAngle);
	        var ay = Math.sin(radianAngle);
	        var radius = innerRadius ? this.innerRadius : this.radius;
	        var x = round(this.center.x - (ax * radius), COORD_PRECISION);
	        var y = round(this.center.y - (ay * radius), COORD_PRECISION);

	        return new Point(x, y);
	    },

	    adjacentBox: function(distance, width, height) {
	        var sector = this.clone().expand(distance);
	        var midAndle = sector.middle();
	        var midPoint = sector.point(midAndle);
	        var hw = width / 2;
	        var hh = height / 2;
	        var sa = Math.sin(rad(midAndle));
	        var ca = Math.cos(rad(midAndle));
	        var x = midPoint.x - hw;
	        var y = midPoint.y - hh;

	        if (Math.abs(sa) < 0.9) {
	            x += hw * -ca / Math.abs(ca);
	        }

	        if (Math.abs(ca) < 0.9) {
	            y += hh * -sa / Math.abs(sa);
	        }

	        return new Box(x, y, x + width, y + height);
	    },

	    containsPoint: function(p) {
	        var center = this.center;
	        var innerRadius = this.innerRadius;
	        var radius = this.radius;
	        var startAngle = this.startAngle;
	        var endAngle = this.startAngle + this.angle;
	        var dx = p.x - center.x;
	        var dy = p.y - center.y;
	        var vector = new Point(dx, dy);
	        var startPoint = this.point(startAngle);
	        var startVector = new Point(startPoint.x - center.x, startPoint.y - center.y);
	        var endPoint = this.point(endAngle);
	        var endVector = new Point(endPoint.x - center.x, endPoint.y - center.y);
	        var dist = round(dx * dx + dy * dy, COORD_PRECISION);

	        return (startVector.equals(vector) || clockwise(startVector, vector)) &&
	               !clockwise(endVector, vector) &&
	               dist >= innerRadius * innerRadius && dist <= radius * radius;
	    },

	    getBBox: function() {
	        var this$1 = this;

	        var box = new Box(MAX_VALUE, MAX_VALUE, MIN_VALUE, MIN_VALUE);
	        var startAngle = round(this.startAngle % 360);
	        var endAngle = round((startAngle + this.angle) % 360);
	        var innerRadius = this.innerRadius;
	        var allAngles = [ 0, 90, 180, 270, startAngle, endAngle ].sort(numericComparer);
	        var startAngleIndex = allAngles.indexOf(startAngle);
	        var endAngleIndex = allAngles.indexOf(endAngle);
	        var angles;

	        if (startAngle === endAngle) {
	            angles = allAngles;
	        } else {
	            if (startAngleIndex < endAngleIndex) {
	                angles = allAngles.slice(startAngleIndex, endAngleIndex + 1);
	            } else {
	                angles = [].concat(
	                    allAngles.slice(0, endAngleIndex + 1),
	                    allAngles.slice(startAngleIndex, allAngles.length)
	                );
	            }
	        }

	        for (var i = 0; i < angles.length; i++) {
	            var point = this$1.point(angles[i]);
	            box.wrapPoint(point);
	            box.wrapPoint(point, innerRadius);
	        }

	        if (!innerRadius) {
	            box.wrapPoint(this.center);
	        }

	        return box;
	    },

	    expand: function(value) {
	        this.radius += value;
	        return this;
	    }
	});

	function numericComparer(a, b) {
	    return a - b;
	}

	var Sector = Ring.extend({
	    init: function(center, radius, startAngle, angle) {
	        Ring.fn.init.call(this, center, 0, radius, startAngle, angle);
	    },

	    expand: function(value) {
	        return Ring.fn.expand.call(this, value);
	    },

	    clone: function() {
	        return new Sector(this.center, this.radius, this.startAngle, this.angle);
	    },

	    setRadius: function(newRadius) {
	        this.radius = newRadius;

	        return this;
	    }
	});

	var DIRECTION_ANGLE = 0.001; //any value that will make the endAngle bigger than the start angle will work here.

	var ShapeBuilder = Class.extend({
	    createRing: function(sector, options) {
	        var startAngle = sector.startAngle + 180;
	        var endAngle = sector.angle + startAngle;

	        //required in order to avoid reversing the arc direction in cases like 0.000000000000001 + 100 === 100
	        if (sector.angle > 0 && startAngle === endAngle) {
	            endAngle += DIRECTION_ANGLE;
	        }

	        var center = new geometry.Point(sector.center.x, sector.center.y);
	        var radius = Math.max(sector.radius, 0);
	        var innerRadius = Math.max(sector.innerRadius, 0);
	        var arc = new geometry.Arc(center, {
	            startAngle: startAngle,
	            endAngle: endAngle,
	            radiusX: radius,
	            radiusY: radius
	        });
	        var path = Path.fromArc(arc, options).close();

	        if (innerRadius) {
	            arc.radiusX = arc.radiusY = innerRadius;
	            var innerEnd = arc.pointAt(endAngle);
	            path.lineTo(innerEnd.x, innerEnd.y);
	            path.arc(endAngle, startAngle, innerRadius, innerRadius, true);
	        } else {
	            path.lineTo(center.x, center.y);
	        }

	        return path;
	    }
	});

	ShapeBuilder.current = new ShapeBuilder();

	var ChartElement = Class.extend({
	    init: function(options) {

	        this.children = [];

	        this.options = deepExtend({}, this.options, this.initUserOptions(options));
	    },

	    initUserOptions: function(options) {
	        return options;
	    },

	    reflow: function(targetBox) {
	        var children = this.children;
	        var box;

	        for (var i = 0; i < children.length; i++) {
	            var currentChild = children[i];
	            currentChild.reflow(targetBox);

	            box = box ? box.wrap(currentChild.box) : currentChild.box.clone();
	        }

	        this.box = box || targetBox;
	    },

	    destroy: function() {
	        var children = this.children;

	        if (this.animation) {
	            this.animation.destroy();
	        }

	        for (var i = 0; i < children.length; i++) {
	            children[i].destroy();
	        }
	    },

	    getRoot: function() {
	        var parent = this.parent;

	        return parent ? parent.getRoot() : null;
	    },

	    getSender: function() {
	        var service = this.getService();
	        if (service) {
	            return service.sender;
	        }
	    },

	    getService: function() {
	        var element = this;
	        while (element) {
	            if (element.chartService) {
	                return element.chartService;
	            }
	            element = element.parent;
	        }
	    },

	    translateChildren: function(dx, dy) {
	        var children = this.children;
	        var childrenCount = children.length;

	        for (var i = 0; i < childrenCount; i++) {
	            children[i].box.translate(dx, dy);
	        }
	    },

	    append: function() {
	        var arguments$1 = arguments;
	        var this$1 = this;

	        for (var i = 0; i < arguments.length; i++) {
	            var item = arguments$1[i];
	            this$1.children.push(item);
	            item.parent = this$1;
	        }
	    },

	    renderVisual: function() {
	        if (this.options.visible === false) {
	            return;
	        }

	        this.createVisual();

	        this.addVisual();

	        this.renderChildren();

	        this.createAnimation();
	        this.renderComplete();
	    },

	    addVisual: function() {
	        if (this.visual) {
	            this.visual.chartElement = this;

	            if (this.parent) {
	                this.parent.appendVisual(this.visual);
	            }
	        }
	    },

	    renderChildren: function() {
	        var children = this.children;
	        var length = children.length;
	        for (var i = 0; i < length; i++) {
	            children[i].renderVisual();
	        }
	    },

	    createVisual: function() {
	        this.visual = new Group({
	            zIndex: this.options.zIndex,
	            visible: valueOrDefault(this.options.visible, true)
	        });
	    },

	    createAnimation: function() {
	        if (this.visual && this.options.animation) {
	            this.animation = drawing.Animation.create(
	                this.visual, this.options.animation
	            );
	        }
	    },

	    appendVisual: function(childVisual) {
	        if (!childVisual.chartElement) {
	            childVisual.chartElement = this;
	        }

	        if (childVisual.options.noclip) {
	            this.clipRoot().visual.append(childVisual);
	        } else if (defined(childVisual.options.zIndex)) {
	            this.stackRoot().stackVisual(childVisual);
	        } else if (this.isStackRoot) {
	            this.stackVisual(childVisual);
	        } else if (this.visual) {
	            this.visual.append(childVisual);
	        } else {
	            // Allow chart elements without visuals to
	            // pass through child visuals
	            this.parent.appendVisual(childVisual);
	        }
	    },

	    clipRoot: function() {
	        if (this.parent) {
	            return this.parent.clipRoot();
	        }

	        return this;
	    },

	    stackRoot: function() {
	        if (this.parent) {
	            return this.parent.stackRoot();
	        }

	        return this;
	    },

	    stackVisual: function(childVisual) {
	        var zIndex = childVisual.options.zIndex || 0;
	        var visuals = this.visual.children;
	        var length = visuals.length;
	        var pos;

	        for (pos = 0; pos < length; pos++) {
	            var sibling = visuals[pos];
	            var here = valueOrDefault(sibling.options.zIndex, 0);
	            if (here > zIndex) {
	                break;
	            }
	        }

	        this.visual.insert(pos, childVisual);
	    },

	    traverse: function(callback) {
	        var children = this.children;
	        var length = children.length;

	        for (var i = 0; i < length; i++) {
	            var child = children[i];

	            callback(child);
	            if (child.traverse) {
	                child.traverse(callback);
	            }
	        }
	    },

	    closest: function(match) {
	        var element = this;
	        var matched = false;

	        while (element && !matched) {
	            matched = match(element);

	            if (!matched) {
	                element = element.parent;
	            }
	        }

	        if (matched) {
	            return element;
	        }
	    },

	    renderComplete: function() {},

	    hasHighlight: function() {
	        var options = (this.options || {}).highlight;
	        return !(!this.createHighlight || (options && options.visible === false));
	    },

	    toggleHighlight: function(show, opacity) {
	        var this$1 = this;

	        var options = (this.options || {}).highlight || {};
	        var customVisual = options.visual;
	        var highlight = this._highlight;

	        if (!highlight) {
	            var highlightOptions = {
	                fill: {
	                    color: WHITE,
	                    opacity: opacity || 0.2
	                },
	                stroke: {
	                    color: WHITE,
	                    width: 1,
	                    opacity: opacity || 0.2
	                }
	            };

	            if (customVisual) {
	                highlight = this._highlight = customVisual(
	                    $.extend(this.highlightVisualArgs(), {
	                        createVisual: function () { return this$1.createHighlight(highlightOptions); },
	                        sender: this.getSender(),
	                        series: this.series,
	                        dataItem: this.dataItem,
	                        category: this.category,
	                        value: this.value,
	                        percentage: this.percentage,
	                        runningTotal: this.runningTotal,
	                        total: this.total
	                    }
	                ));

	                if (!highlight) {
	                    return;
	                }
	            } else {
	                highlight = this._highlight = this.createHighlight(highlightOptions);
	            }

	            if (!defined(highlight.options.zIndex)) {
	                highlight.options.zIndex = valueOrDefault(options.zIndex, this.options.zIndex);
	            }

	            this.appendVisual(highlight);
	        }

	        highlight.visible(show);
	    },

	    createGradientOverlay: function(element, options, gradientOptions) {
	        var overlay = new Path($.extend({
	            stroke: {
	                color: "none"
	            },
	            fill: this.createGradient(gradientOptions),
	            closed: element.options.closed
	        }, options));

	        overlay.segments.elements(element.segments.elements());

	        return overlay;
	    },

	    createGradient: function(options) {
	        if (this.parent) {
	            return this.parent.createGradient(options);
	        }
	    },

	    supportsPointInactiveOpacity: function() {
	        return true;
	    }
	});

	ChartElement.prototype.options = { };

	var BoxElement = ChartElement.extend({
	    init: function(options) {
	        ChartElement.fn.init.call(this, options);

	        this.options.margin = getSpacing(this.options.margin);
	        this.options.padding = getSpacing(this.options.padding);
	    },

	    reflow: function(targetBox) {
	        var this$1 = this;

	        var options = this.options;
	        var width = options.width;
	        var height = options.height;
	        var shrinkToFit = options.shrinkToFit;
	        var hasSetSize = width && height;
	        var margin = options.margin;
	        var padding = options.padding;
	        var borderWidth = options.border.width;
	        var box;

	        var reflowPaddingBox = function () {
	            this$1.align(targetBox, X, options.align);
	            this$1.align(targetBox, Y, options.vAlign);
	            this$1.paddingBox = box.clone().unpad(margin).unpad(borderWidth);
	        };

	        var contentBox = targetBox.clone();
	        if (hasSetSize) {
	            contentBox.x2 = contentBox.x1 + width;
	            contentBox.y2 = contentBox.y1 + height;
	        }

	        if (shrinkToFit) {
	            contentBox.unpad(margin).unpad(borderWidth).unpad(padding);
	        }

	        ChartElement.fn.reflow.call(this, contentBox);

	        if (hasSetSize) {
	            box = this.box = new Box(0, 0, width, height);
	        } else {
	            box = this.box;
	        }

	        if (shrinkToFit && hasSetSize) {
	            reflowPaddingBox();
	            contentBox = this.contentBox = this.paddingBox.clone().unpad(padding);
	        } else {
	            contentBox = this.contentBox = box.clone();
	            box.pad(padding).pad(borderWidth).pad(margin);
	            reflowPaddingBox();
	        }

	        this.translateChildren(
	            box.x1 - contentBox.x1 + margin.left + borderWidth + padding.left,
	            box.y1 - contentBox.y1 + margin.top + borderWidth + padding.top
	        );

	        var children = this.children;
	        for (var i = 0; i < children.length; i++) {
	            var item = children[i];
	            item.reflow(item.box);
	        }
	    },

	    align: function(targetBox, axis, alignment) {
	        this.box.align(targetBox, axis, alignment);
	    },

	    hasBox: function() {
	        var options = this.options;
	        return options.border.width || options.background;
	    },

	    createVisual: function() {
	        ChartElement.fn.createVisual.call(this);

	        var options = this.options;
	        if (options.visible && this.hasBox()) {
	            this.visual.append(Path.fromRect(
	                this.paddingBox.toRect(),
	                this.visualStyle()
	            ));
	        }
	    },

	    visualStyle: function() {
	        var options = this.options;
	        var border = options.border || {};

	        return {
	            stroke: {
	                width: border.width,
	                color: border.color,
	                opacity: valueOrDefault(border.opacity, options.opacity),
	                dashType: border.dashType
	            },
	            fill: {
	                color: options.background,
	                opacity: options.opacity
	            },
	            cursor: options.cursor
	        };
	    }
	});

	setDefaultOptions(BoxElement, {
	    align: LEFT,
	    vAlign: TOP,
	    margin: {},
	    padding: {},
	    border: {
	        color: BLACK,
	        width: 0
	    },
	    background: "",
	    shrinkToFit: false,
	    width: 0,
	    height: 0,
	    visible: true
	});

	var ShapeElement = BoxElement.extend({
	    init: function(options, pointData) {
	        BoxElement.fn.init.call(this, options);

	        this.pointData = pointData;
	    },

	    getElement: function() {
	        var ref = this;
	        var options = ref.options;
	        var box = ref.paddingBox;
	        var type = options.type;
	        var rotation = options.rotation;
	        var center = box.center();
	        var halfWidth = box.width() / 2;
	        var halfHeight = box.height() / 2;

	        if (!options.visible || !this.hasBox()) {
	            return null;
	        }

	        var style = this.visualStyle();
	        var element;

	        if (type === CIRCLE) {
	            element = new drawing.Circle(
	                new Circle([
	                    round(box.x1 + halfWidth, COORD_PRECISION),
	                    round(box.y1 + halfHeight, COORD_PRECISION)
	                ], Math.min(halfWidth, halfHeight)),
	                style
	            );
	        } else if (type === TRIANGLE) {
	            element = Path.fromPoints([
	                [ box.x1 + halfWidth, box.y1 ],
	                [ box.x1, box.y2 ],
	                [ box.x2, box.y2 ]
	            ], style).close();
	        } else if (type === CROSS) {
	            element = new drawing.MultiPath(style);

	            element.moveTo(box.x1, box.y1).lineTo(box.x2, box.y2);
	            element.moveTo(box.x1, box.y2).lineTo(box.x2, box.y1);
	        } else {
	            var rect = box.toRect();
	            if (type === ROUNDED_RECT) {
	                var borderRadius = valueOrDefault(options.borderRadius, rect.width() / 5);
	                rect.setCornerRadius(borderRadius);
	            }

	            element = Path.fromRect(rect, style);
	        }

	        if (rotation) {
	            element.transform(geometryTransform()
	                .rotate(-rotation, [ center.x, center.y ])
	            );
	        }

	        element.options.zIndex = options.zIndex;

	        return element;
	    },

	    createElement: function() {
	        var this$1 = this;

	        var customVisual = this.options.visual;
	        var pointData = this.pointData || {};
	        var visual;

	        if (customVisual) {
	            visual = customVisual({
	                value: pointData.value,
	                dataItem: pointData.dataItem,
	                sender: this.getSender(),
	                series: pointData.series,
	                category: pointData.category,
	                rect: this.paddingBox.toRect(),
	                options: this.visualOptions(),
	                createVisual: function () { return this$1.getElement(); }
	            });
	        } else {
	            visual = this.getElement();
	        }

	        return visual;
	    },

	    visualOptions: function() {
	        var options = this.options;
	        return {
	            background: options.background,
	            border: options.border,
	            margin: options.margin,
	            padding: options.padding,
	            type: options.type,
	            size: options.width,
	            visible: options.visible
	        };
	    },

	    createVisual: function() {
	        this.visual = this.createElement();
	    }
	});

	setDefaultOptions(ShapeElement, {
	    type: CIRCLE,
	    align: CENTER,
	    vAlign: CENTER
	});

	var LINEAR = "linear";
	var RADIAL = "radial";

	var GRADIENTS = {
	    glass: {
	        type: LINEAR,
	        rotation: 0,
	        stops: [ {
	            offset: 0,
	            color: WHITE,
	            opacity: 0
	        }, {
	            offset: 0.25,
	            color: WHITE,
	            opacity: 0.3
	        }, {
	            offset: 1,
	            color: WHITE,
	            opacity: 0
	        } ]
	    },
	    sharpBevel: {
	        type: RADIAL,
	        stops: [ {
	            offset: 0,
	            color: WHITE,
	            opacity: 0.55
	        }, {
	            offset: 0.65,
	            color: WHITE,
	            opacity: 0
	        }, {
	            offset: 0.95,
	            color: WHITE,
	            opacity: 0.25
	        } ]
	    },
	    roundedBevel: {
	        type: RADIAL,
	        stops: [ {
	            offset: 0.33,
	            color: WHITE,
	            opacity: 0.06
	        }, {
	            offset: 0.83,
	            color: WHITE,
	            opacity: 0.2
	        }, {
	            offset: 0.95,
	            color: WHITE,
	            opacity: 0
	        } ]
	    },
	    roundedGlass: {
	        type: RADIAL,
	        supportVML: false,
	        stops: [ {
	            offset: 0,
	            color: WHITE,
	            opacity: 0
	        }, {
	            offset: 0.5,
	            color: WHITE,
	            opacity: 0.3
	        }, {
	            offset: 0.99,
	            color: WHITE,
	            opacity: 0
	        } ]
	    },
	    sharpGlass: {
	        type: RADIAL,
	        supportVML: false,
	        stops: [ {
	            offset: 0,
	            color: WHITE,
	            opacity: 0.2
	        }, {
	            offset: 0.15,
	            color: WHITE,
	            opacity: 0.15
	        }, {
	            offset: 0.17,
	            color: WHITE,
	            opacity: 0.35
	        }, {
	            offset: 0.85,
	            color: WHITE,
	            opacity: 0.05
	        }, {
	            offset: 0.87,
	            color: WHITE,
	            opacity: 0.15
	        }, {
	            offset: 0.99,
	            color: WHITE,
	            opacity: 0
	        } ]
	    },
	    bubbleShadow: {
	        type: RADIAL,
	        center: [ 0.5, 0.5 ],
	        radius: 0.5
	    }
	};

	function boxDiff(r, s) {
	    if (r.x1 === s.x1 && r.y1 === s.y1 && r.x2 === s.x2 && r.y2 === s.y2) {
	        return s;
	    }

	    var a = Math.min(r.x1, s.x1);
	    var b = Math.max(r.x1, s.x1);
	    var c = Math.min(r.x2, s.x2);
	    var d = Math.max(r.x2, s.x2);
	    var e = Math.min(r.y1, s.y1);
	    var f = Math.max(r.y1, s.y1);
	    var g = Math.min(r.y2, s.y2);
	    var h = Math.max(r.y2, s.y2);
	    var boxes = [];

	    // X = intersection, 0-7 = possible difference areas
	    // h +-+-+-+
	    // . |5|6|7|
	    // g +-+-+-+
	    // . |3|X|4|
	    // f +-+-+-+
	    // . |0|1|2|
	    // e +-+-+-+
	    // . a b c d

	    // we'll always have rectangles 1, 3, 4 and 6
	    boxes[0] = new Box(b, e, c, f);
	    boxes[1] = new Box(a, f, b, g);
	    boxes[2] = new Box(c, f, d, g);
	    boxes[3] = new Box(b, g, c, h);

	    // decide which corners
	    if (r.x1 === a && r.y1 === e || s.x1 === a && s.y1 === e) { // corners 0 and 7
	        boxes[4] = new Box(a, e, b, f);
	        boxes[5] = new Box(c, g, d, h);
	    } else { // corners 2 and 5
	        boxes[4] = new Box(c, e, d, f);
	        boxes[5] = new Box(a, g, b, h);
	    }

	    return grep(boxes, function(box) {
	        return box.height() > 0 && box.width() > 0;
	    })[0];
	}

	var RootElement = ChartElement.extend({
	    init: function(options) {
	        ChartElement.fn.init.call(this, options);

	        var rootOptions = this.options;
	        rootOptions.width = parseInt(rootOptions.width, 10);
	        rootOptions.height = parseInt(rootOptions.height, 10);

	        this.gradients = {};
	    },

	    reflow: function() {
	        var ref = this;
	        var options = ref.options;
	        var children = ref.children;
	        var currentBox = new Box(0, 0, options.width, options.height);

	        this.box = currentBox.unpad(options.margin);

	        for (var i = 0; i < children.length; i++) {
	            children[i].reflow(currentBox);
	            currentBox = boxDiff(currentBox, children[i].box) || new Box();
	        }
	    },

	    createVisual: function() {
	        this.visual = new Group();
	        this.createBackground();
	    },

	    createBackground: function() {
	        var options = this.options;
	        var border = options.border || {};
	        var box = this.box.clone().pad(options.margin).unpad(border.width);

	        var background = Path.fromRect(box.toRect(), {
	            stroke: {
	                color: border.width ? border.color : "",
	                width: border.width,
	                dashType: border.dashType
	            },
	            fill: {
	                color: options.background,
	                opacity: options.opacity
	            },
	            zIndex: -10
	        });

	        this.visual.append(background);
	    },

	    getRoot: function() {
	        return this;
	    },

	    createGradient: function(options) {
	        var gradients = this.gradients;
	        var hashCode = objectKey(options);
	        var gradient = GRADIENTS[options.gradient];
	        var drawingGradient;

	        if (gradients[hashCode]) {
	            drawingGradient = gradients[hashCode];
	        } else {
	            var gradientOptions = $.extend({}, gradient, options);
	            if (gradient.type === "linear") {
	                drawingGradient = new drawing.LinearGradient(gradientOptions);
	            } else {
	                if (options.innerRadius) {
	                    gradientOptions.stops = innerRadialStops(gradientOptions);
	                }
	                drawingGradient = new drawing.RadialGradient(gradientOptions);
	                drawingGradient.supportVML = gradient.supportVML !== false;
	            }
	            gradients[hashCode] = drawingGradient;
	        }

	        return drawingGradient;
	    },

	    cleanGradients: function() {
	        var gradients = this.gradients;
	        for (var hashCode in gradients) {
	            gradients[hashCode]._observers = [];//add clear observers method in drawing ObserversMixin
	        }
	    },

	    size: function() {
	        var options = this.options;
	        return new Box(0, 0, options.width, options.height);
	    }
	});

	setDefaultOptions(RootElement, {
	    width: DEFAULT_WIDTH,
	    height: DEFAULT_HEIGHT,
	    background: WHITE,
	    border: {
	        color: BLACK,
	        width: 0
	    },
	    margin: getSpacing(5),
	    zIndex: -2
	});

	function innerRadialStops(options) {
	    var stops = options.stops;
	    var usedSpace = ((options.innerRadius / options.radius) * 100);
	    var length = stops.length;
	    var currentStops = [];

	    for (var i = 0; i < length; i++) {
	        var currentStop = $.extend({}, stops[i]);
	        currentStop.offset = (currentStop.offset * (100 - usedSpace) + usedSpace) / 100;
	        currentStops.push(currentStop);
	    }

	    return currentStops;
	}

	var FloatElement = ChartElement.extend({
	    init: function(options) {
	        ChartElement.fn.init.call(this, options);
	        this._initDirection();
	    },

	    _initDirection: function() {
	        var options = this.options;
	        if (options.vertical) {
	            this.groupAxis = X;
	            this.elementAxis = Y;
	            this.groupSizeField = WIDTH;
	            this.elementSizeField = HEIGHT;
	            this.groupSpacing = options.spacing;
	            this.elementSpacing = options.vSpacing;
	        } else {
	            this.groupAxis = Y;
	            this.elementAxis = X;
	            this.groupSizeField = HEIGHT;
	            this.elementSizeField = WIDTH;
	            this.groupSpacing = options.vSpacing;
	            this.elementSpacing = options.spacing;
	        }
	    },

	    reflow: function(targetBox) {
	        this.box = targetBox.clone();
	        this.reflowChildren();
	    },

	    reflowChildren: function() {
	        var this$1 = this;

	        var ref = this;
	        var box = ref.box;
	        var elementAxis = ref.elementAxis;
	        var groupAxis = ref.groupAxis;
	        var elementSizeField = ref.elementSizeField;
	        var groupSizeField = ref.groupSizeField;
	        var ref$1 = this.groupOptions();
	        var groups = ref$1.groups;
	        var groupsSize = ref$1.groupsSize;
	        var maxGroupElementsSize = ref$1.maxGroupElementsSize;
	        var groupsCount = groups.length;
	        var groupsStart = box[groupAxis + 1] + this.alignStart(groupsSize, box[groupSizeField]());

	        if (groupsCount) {
	            var groupStart = groupsStart;

	            for (var groupIdx = 0; groupIdx < groupsCount; groupIdx++) {
	                var group = groups[groupIdx];
	                var groupElements = group.groupElements;
	                var elementStart = box[elementAxis + 1];
	                var groupElementsCount = groupElements.length;

	                for (var idx = 0; idx < groupElementsCount; idx++) {
	                    var element = groupElements[idx];
	                    var elementSize$$1 = this$1.elementSize(element);
	                    var groupElementStart = groupStart + this$1.alignStart(elementSize$$1[groupSizeField], group.groupSize);

	                    var elementBox = new Box();
	                    elementBox[groupAxis + 1] = groupElementStart;
	                    elementBox[groupAxis + 2] = groupElementStart + elementSize$$1[groupSizeField];
	                    elementBox[elementAxis + 1] = elementStart;
	                    elementBox[elementAxis + 2] = elementStart + elementSize$$1[elementSizeField];

	                    element.reflow(elementBox);

	                    elementStart += elementSize$$1[elementSizeField] + this$1.elementSpacing;
	                }
	                groupStart += group.groupSize + this$1.groupSpacing;
	            }
	            box[groupAxis + 1] = groupsStart;
	            box[groupAxis + 2] = groupsStart + groupsSize;
	            box[elementAxis + 2] = box[elementAxis + 1] + maxGroupElementsSize;
	        }
	    },

	    alignStart: function(size, maxSize) {
	        var start = 0;
	        var align = this.options.align;
	        if (align === RIGHT || align === BOTTOM) {
	            start = maxSize - size;
	        } else if (align === CENTER) {
	            start = (maxSize - size) / 2;
	        }
	        return start;
	    },

	    groupOptions: function() {
	        var this$1 = this;

	        var ref = this;
	        var box = ref.box;
	        var children = ref.children;
	        var elementSizeField = ref.elementSizeField;
	        var groupSizeField = ref.groupSizeField;
	        var elementSpacing = ref.elementSpacing;
	        var groupSpacing = ref.groupSpacing;
	        var maxSize = round(box[elementSizeField]());
	        var childrenCount = children.length;
	        var groups = [];

	        var groupSize = 0;
	        var groupElementsSize = 0;
	        var groupsSize = 0;
	        var maxGroupElementsSize = 0;
	        var groupElements = [];

	        for (var idx = 0; idx < childrenCount; idx++) {
	            var element = children[idx];
	            if (!element.box) {
	                element.reflow(box);
	            }

	            var elementSize$$1 = this$1.elementSize(element);
	            if (this$1.options.wrap && round(groupElementsSize + elementSpacing + elementSize$$1[elementSizeField]) > maxSize) {
	                groups.push({
	                    groupElements: groupElements,
	                    groupSize: groupSize,
	                    groupElementsSize: groupElementsSize
	                });
	                maxGroupElementsSize = Math.max(maxGroupElementsSize, groupElementsSize);
	                groupsSize += groupSpacing + groupSize;
	                groupSize = 0;
	                groupElementsSize = 0;
	                groupElements = [];
	            }
	            groupSize = Math.max(groupSize, elementSize$$1[groupSizeField]);
	            if (groupElementsSize > 0) {
	                groupElementsSize += elementSpacing;
	            }
	            groupElementsSize += elementSize$$1[elementSizeField];
	            groupElements.push(element);
	        }

	        groups.push({
	            groupElements: groupElements,
	            groupSize: groupSize,
	            groupElementsSize: groupElementsSize
	        });
	        maxGroupElementsSize = Math.max(maxGroupElementsSize, groupElementsSize);
	        groupsSize += groupSize;

	        return {
	            groups: groups,
	            groupsSize: groupsSize,
	            maxGroupElementsSize: maxGroupElementsSize
	        };
	    },

	    elementSize: function(element) {
	        return {
	            width: element.box.width(),
	            height: element.box.height()
	        };
	    },

	    createVisual: function() {}
	});

	setDefaultOptions(FloatElement, {
	    vertical: true,
	    wrap: true,
	    vSpacing: 0,
	    spacing: 0
	});

	var DrawingText = drawing.Text;

	var Text = ChartElement.extend({
	    init: function(content, options) {
	        ChartElement.fn.init.call(this, options);

	        this.content = content;

	        // Calculate size
	        this.reflow(new Box());
	    },

	    reflow: function(targetBox) {
	        var options = this.options;
	        var size = options.size = util.measureText(this.content, { font: options.font });

	        this.baseline = size.baseline;

	        this.box = new Box(targetBox.x1, targetBox.y1,
	                targetBox.x1 + size.width, targetBox.y1 + size.height);
	    },

	    createVisual: function() {
	        var ref = this.options;
	        var font = ref.font;
	        var color = ref.color;
	        var opacity = ref.opacity;
	        var cursor = ref.cursor;

	        this.visual = new DrawingText(this.content, this.box.toRect().topLeft(), {
	            font: font,
	            fill: { color: color, opacity: opacity },
	            cursor: cursor
	        });
	    }
	});

	setDefaultOptions(Text, {
	    font: DEFAULT_FONT,
	    color: BLACK
	});

	function rectToBox(rect) {
	    var origin = rect.origin;
	    var bottomRight = rect.bottomRight();

	    return new Box(origin.x, origin.y, bottomRight.x, bottomRight.y);
	}

	var ROWS_SPLIT_REGEX = /\n/m;

	var TextBox = BoxElement.extend({
	    init: function(content, options, data) {
	        BoxElement.fn.init.call(this, options);
	        this.content = content;
	        this.data = data;

	        this._initContainer();
	        if (this.options._autoReflow !== false) {
	            this.reflow(new Box());
	        }
	    },

	    _initContainer: function() {
	        var options = this.options;
	        var rows = String(this.content).split(ROWS_SPLIT_REGEX);
	        var floatElement = new FloatElement({ vertical: true, align: options.align, wrap: false });
	        var textOptions = deepExtend({ }, options, { opacity: 1, animation: null });

	        this.container = floatElement;
	        this.append(floatElement);

	        for (var rowIdx = 0; rowIdx < rows.length; rowIdx++) {
	            var text = new Text(rows[rowIdx].trim(), textOptions);
	            floatElement.append(text);
	        }
	    },

	    reflow: function(targetBox) {
	        var options = this.options;
	        var visualFn = options.visual;
	        this.container.options.align = options.align;

	        if (visualFn && !this._boxReflow) {
	            var visualBox = targetBox;
	            if (!visualBox.hasSize()) {
	                this._boxReflow = true;
	                this.reflow(visualBox);
	                this._boxReflow = false;
	                visualBox = this.box;
	            }
	            var visual = this.visual = visualFn(this.visualContext(visualBox));

	            if (visual) {
	                visualBox = rectToBox(visual.clippedBBox() || new Rect());

	                visual.options.zIndex = options.zIndex;
	            }

	            this.box = this.contentBox = this.paddingBox = visualBox;
	        } else {
	            BoxElement.fn.reflow.call(this, targetBox);

	            if (options.rotation) {
	                var margin = getSpacing(options.margin);
	                var box = this.box.unpad(margin);

	                this.targetBox = targetBox;
	                this.normalBox = box.clone();

	                box = this.rotate();
	                box.translate(margin.left - margin.right, margin.top - margin.bottom);

	                this.rotatedBox = box.clone();

	                box.pad(margin);
	            }
	        }
	    },

	    createVisual: function() {
	        var options = this.options;

	        this.visual = new Group({
	            transform: this.rotationTransform(),
	            zIndex: options.zIndex,
	            noclip: options.noclip
	        });

	        if (this.hasBox()) {
	            var box = Path.fromRect(this.paddingBox.toRect(), this.visualStyle());
	            this.visual.append(box);
	        }
	    },

	    renderVisual: function() {
	        if (!this.options.visible) {
	            return;
	        }

	        if (this.options.visual) {
	            var visual = this.visual;
	            if (visual && !defined(visual.options.noclip)) {
	                visual.options.noclip = this.options.noclip;
	            }
	            this.addVisual();
	            this.createAnimation();
	        } else {
	            BoxElement.fn.renderVisual.call(this);
	        }
	    },

	    visualContext: function(targetBox) {
	        var this$1 = this;

	        var context = {
	            text: this.content,
	            rect: targetBox.toRect(),
	            sender: this.getSender(),
	            options: this.options,
	            createVisual: function () {
	                this$1._boxReflow = true;
	                this$1.reflow(targetBox);
	                this$1._boxReflow = false;
	                return this$1.getDefaultVisual();
	            }
	        };
	        if (this.data) {
	            $.extend(context, this.data);
	        }

	        return context;
	    },

	    getDefaultVisual: function() {
	        this.createVisual();
	        this.renderChildren();
	        var visual = this.visual;
	        delete this.visual;
	        return visual;
	    },

	    rotate: function() {
	        var options = this.options;
	        this.box.rotate(options.rotation);
	        this.align(this.targetBox, X, options.align);
	        this.align(this.targetBox, Y, options.vAlign);
	        return this.box;
	    },

	    rotationTransform: function() {
	        var rotation = this.options.rotation;
	        if (!rotation) {
	            return null;
	        }

	        var ref = this.normalBox.center();
	        var cx = ref.x;
	        var cy = ref.y;
	        var boxCenter = this.rotatedBox.center();

	        return geometryTransform()
	                   .translate(boxCenter.x - cx, boxCenter.y - cy)
	                   .rotate(rotation, [ cx, cy ]);
	    }
	});

	var Title = ChartElement.extend({
	    init: function(options) {
	        ChartElement.fn.init.call(this, options);

	        this.append(
	            new TextBox(this.options.text, $.extend({}, this.options, {
	                vAlign: this.options.position
	            }))
	        );
	    },

	    reflow: function(targetBox) {
	        ChartElement.fn.reflow.call(this, targetBox);
	        this.box.snapTo(targetBox, X);
	    }
	});

	Title.buildTitle = function(options, parent, defaultOptions) {
	    var titleOptions = options;

	    if (typeof options === "string") {
	        titleOptions = { text: options };
	    }

	    titleOptions = $.extend({ visible: true }, defaultOptions, titleOptions);

	    var title;
	    if (titleOptions && titleOptions.visible && titleOptions.text) {
	        title = new Title(titleOptions);
	        parent.append(title);
	    }

	    return title;
	};

	setDefaultOptions(Title, {
	    color: BLACK,
	    position: TOP,
	    align: CENTER,
	    margin: getSpacing(5),
	    padding: getSpacing(5)
	});

	var AxisLabel = TextBox.extend({
	    init: function(value, text, index, dataItem, options) {
	        TextBox.fn.init.call(this, text, options);

	        this.text = text;
	        this.value = value;
	        this.index = index;
	        this.dataItem = dataItem;
	        this.reflow(new Box());
	    },

	    visualContext: function(targetBox) {
	        var context = TextBox.fn.visualContext.call(this, targetBox);

	        context.value = this.value;
	        context.dataItem = this.dataItem;
	        context.format = this.options.format;
	        context.culture = this.options.culture;

	        return context;
	    },

	    click: function(widget, e) {

	        widget.trigger(AXIS_LABEL_CLICK, {
	            element: eventElement(e),
	            value: this.value,
	            text: this.text,
	            index: this.index,
	            dataItem: this.dataItem,
	            axis: this.parent.options
	        });
	    },

	    rotate: function() {
	        if (this.options.alignRotation !== CENTER) {
	            var box = this.normalBox.toRect();
	            var transform = this.rotationTransform();

	            this.box = rectToBox(box.bbox(transform.matrix()));
	        } else {
	            TextBox.fn.rotate.call(this);
	        }

	        return this.box;
	    },

	    rotationTransform: function() {
	        var options = this.options;
	        var rotation = options.rotation;
	        if (!rotation) {
	            return null;
	        }

	        if (options.alignRotation === CENTER) {
	            return TextBox.fn.rotationTransform.call(this);
	        }

	        var rotationMatrix = geometryTransform().rotate(rotation).matrix();
	        var box = this.normalBox.toRect();
	        var rect = this.targetBox.toRect();

	        var rotationOrigin = options.rotationOrigin || TOP;
	        var alignAxis = rotationOrigin === TOP || rotationOrigin === BOTTOM ? X : Y;
	        var distanceAxis = rotationOrigin === TOP || rotationOrigin === BOTTOM ? Y : X;
	        var axisAnchor = rotationOrigin === TOP || rotationOrigin === LEFT ? rect.origin : rect.bottomRight();

	        var topLeft = box.topLeft().transformCopy(rotationMatrix);
	        var topRight = box.topRight().transformCopy(rotationMatrix);
	        var bottomRight = box.bottomRight().transformCopy(rotationMatrix);
	        var bottomLeft = box.bottomLeft().transformCopy(rotationMatrix);
	        var rotatedBox = Rect.fromPoints(topLeft, topRight, bottomRight, bottomLeft);

	        var translate = {};
	        translate[distanceAxis] = rect.origin[distanceAxis] - rotatedBox.origin[distanceAxis];

	        var distanceLeft = Math.abs(topLeft[distanceAxis] + translate[distanceAxis] - axisAnchor[distanceAxis]);
	        var distanceRight = Math.abs(topRight[distanceAxis] + translate[distanceAxis] - axisAnchor[distanceAxis]);

	        var alignStart, alignEnd;

	        if (round(distanceLeft, DEFAULT_PRECISION) === round(distanceRight, DEFAULT_PRECISION)) {
	            alignStart = topLeft;
	            alignEnd = topRight;
	        } else if (distanceRight < distanceLeft) {
	            alignStart = topRight;
	            alignEnd = bottomRight;
	        } else {
	            alignStart = topLeft;
	            alignEnd = bottomLeft;
	        }

	        var alignCenter = alignStart[alignAxis] + (alignEnd[alignAxis] - alignStart[alignAxis]) / 2;
	        translate[alignAxis] = rect.center()[alignAxis] - alignCenter;

	        return geometryTransform()
	            .translate(translate.x, translate.y)
	            .rotate(rotation);
	    }
	});

	setDefaultOptions(AxisLabel, {
	    _autoReflow: false
	});

	var DEFAULT_ICON_SIZE = 7;
	var DEFAULT_LABEL_COLOR = "#fff";

	var Note = BoxElement.extend({
	    init: function(fields, options, chartService) {
	        BoxElement.fn.init.call(this, options);

	        this.fields = fields;
	        this.chartService = chartService;

	        this.render();
	    },

	    hide: function() {
	        this.options.visible = false;
	    },

	    show: function() {
	        this.options.visible = true;
	    },

	    render: function() {
	        var this$1 = this;

	        var options = this.options;

	        if (options.visible) {
	            var label = options.label;
	            var icon = options.icon;
	            var box = new Box();
	            var childAlias = function () { return this$1; };
	            var size = icon.size;
	            var text = this.fields.text;
	            var width, height;

	            if (defined(label) && label.visible) {
	                var noteTemplate = getTemplate(label);
	                if (noteTemplate) {
	                    text = noteTemplate(this.fields);
	                } else if (label.format) {
	                    text = this.chartService.format.auto(label.format, text);
	                }

	                if (!label.color) {
	                    label.color = label.position === INSIDE ? DEFAULT_LABEL_COLOR : icon.background;
	                }

	                this.label = new TextBox(text, deepExtend({}, label));
	                this.label.aliasFor = childAlias;

	                if (label.position === INSIDE && !defined(size)) {
	                    if (icon.type === CIRCLE) {
	                        size = Math.max(this.label.box.width(), this.label.box.height());
	                    } else {
	                        width = this.label.box.width();
	                        height = this.label.box.height();
	                    }
	                    box.wrap(this.label.box);
	                }
	            }

	            icon.width = width || size || DEFAULT_ICON_SIZE;
	            icon.height = height || size || DEFAULT_ICON_SIZE;

	            var marker = new ShapeElement(deepExtend({}, icon));
	            marker.aliasFor = childAlias;

	            this.marker = marker;
	            this.append(marker);

	            if (this.label) {
	                this.append(this.label);
	            }

	            marker.reflow(new Box());
	            this.wrapperBox = box.wrap(marker.box);
	        }
	    },

	    reflow: function(targetBox) {
	        var ref = this;
	        var options = ref.options;
	        var label = ref.label;
	        var marker = ref.marker;
	        var wrapperBox = ref.wrapperBox;
	        var center = targetBox.center();
	        var length = options.line.length;
	        var position = options.position;

	        // TODO: Review
	        if (options.visible) {
	            var lineStart, box, contentBox;

	            if (inArray(position, [ LEFT, RIGHT ])) {
	                if (position === LEFT) {
	                    contentBox = wrapperBox.alignTo(targetBox, position).translate(-length, targetBox.center().y - wrapperBox.center().y);

	                    if (options.line.visible) {
	                        lineStart = [ targetBox.x1, center.y ];
	                        this.linePoints = [
	                            lineStart,
	                            [ contentBox.x2, center.y ]
	                        ];
	                        box = contentBox.clone().wrapPoint(lineStart);
	                    }
	                } else {
	                    contentBox = wrapperBox.alignTo(targetBox, position).translate(length, targetBox.center().y - wrapperBox.center().y);

	                    if (options.line.visible) {
	                        lineStart = [ targetBox.x2, center.y ];
	                        this.linePoints = [
	                            lineStart,
	                            [ contentBox.x1, center.y ]
	                        ];
	                        box = contentBox.clone().wrapPoint(lineStart);
	                    }
	                }
	            } else {
	                if (position === BOTTOM) {
	                    contentBox = wrapperBox.alignTo(targetBox, position).translate(targetBox.center().x - wrapperBox.center().x, length);

	                    if (options.line.visible) {
	                        lineStart = [ center.x, targetBox.y2 ];
	                        this.linePoints = [
	                            lineStart,
	                            [ center.x, contentBox.y1 ]
	                        ];
	                        box = contentBox.clone().wrapPoint(lineStart);
	                    }
	                } else {
	                    contentBox = wrapperBox.alignTo(targetBox, position).translate(targetBox.center().x - wrapperBox.center().x, -length);

	                    if (options.line.visible) {
	                        lineStart = [ center.x, targetBox.y1 ];
	                        this.linePoints = [
	                            lineStart,
	                            [ center.x, contentBox.y2 ]
	                        ];
	                        box = contentBox.clone().wrapPoint(lineStart);
	                    }
	                }
	            }

	            if (marker) {
	                marker.reflow(contentBox);
	            }

	            if (label) {
	                label.reflow(contentBox);
	                if (marker) {
	                    if (options.label.position === OUTSIDE) {
	                        label.box.alignTo(marker.box, position);
	                    }
	                    label.reflow(label.box);
	                }
	            }

	            this.contentBox = contentBox;
	            this.targetBox = targetBox;
	            this.box = box || contentBox;
	        }
	    },

	    createVisual: function() {
	        BoxElement.fn.createVisual.call(this);
	        this.visual.options.noclip = this.options.noclip;

	        if (this.options.visible) {
	            this.createLine();
	        }
	    },

	    renderVisual: function() {
	        var this$1 = this;

	        var options = this.options;
	        var customVisual = options.visual;
	        if (options.visible && customVisual) {
	            this.visual = customVisual($.extend(this.fields, {
	                sender: this.getSender(),
	                rect: this.targetBox.toRect(),
	                options: {
	                    background: options.background,
	                    border: options.background,
	                    icon: options.icon,
	                    label: options.label,
	                    line: options.line,
	                    position: options.position,
	                    visible: options.visible
	                },
	                createVisual: function () {
	                    this$1.createVisual();
	                    this$1.renderChildren();
	                    var defaultVisual = this$1.visual;
	                    delete this$1.visual;
	                    return defaultVisual;
	                }
	            }));
	            this.addVisual();
	        } else {
	            BoxElement.fn.renderVisual.call(this);
	        }
	    },

	    createLine: function() {
	        var options = this.options.line;

	        if (this.linePoints) {
	            var path = Path.fromPoints(this.linePoints, {
	                stroke: {
	                    color: options.color,
	                    width: options.width,
	                    dashType: options.dashType
	                }
	            });

	            alignPathToPixel(path);
	            this.visual.append(path);
	        }
	    },

	    click: function(widget, e) {
	        var args = this.eventArgs(e);

	        if (!widget.trigger(NOTE_CLICK, args)) {
	            e.preventDefault();
	        }
	    },

	    over: function(widget, e) {
	        var args = this.eventArgs(e);

	        if (!widget.trigger(NOTE_HOVER, args)) {
	            e.preventDefault();
	        }
	    },

	    out: function(widget, e) {
	        var args = this.eventArgs(e);

	        widget.trigger(NOTE_LEAVE, args);
	    },

	    eventArgs: function(e) {
	        var options = this.options;

	        return $.extend(this.fields, {
	            element: eventElement(e),
	            text: defined(options.label) ? options.label.text : "",
	            visual: this.visual
	        });
	    }
	});

	setDefaultOptions(Note, {
	    icon: {
	        visible: true,
	        type: CIRCLE
	    },
	    label: {
	        position: INSIDE,
	        visible: true,
	        align: CENTER,
	        vAlign: CENTER
	    },
	    line: {
	        visible: true
	    },
	    visible: true,
	    position: TOP,
	    zIndex: 2
	});

	function createAxisTick(options, tickOptions) {
	    var tickX = options.tickX;
	    var tickY = options.tickY;
	    var position = options.position;

	    var tick = new Path({
	        stroke: {
	            width: tickOptions.width,
	            color: tickOptions.color
	        }
	    });

	    if (options.vertical) {
	        tick.moveTo(tickX, position)
	            .lineTo(tickX + tickOptions.size, position);
	    } else {
	        tick.moveTo(position, tickY)
	            .lineTo(position, tickY + tickOptions.size);
	    }

	    alignPathToPixel(tick);

	    return tick;
	}

	function createAxisGridLine(options, gridLine) {
	    var lineStart = options.lineStart;
	    var lineEnd = options.lineEnd;
	    var position = options.position;

	    var line = new Path({
	        stroke: {
	            width: gridLine.width,
	            color: gridLine.color,
	            dashType: gridLine.dashType
	        }
	    });

	    if (options.vertical) {
	        line.moveTo(lineStart, position)
	            .lineTo(lineEnd, position);
	    } else {
	        line.moveTo(position, lineStart)
	            .lineTo(position, lineEnd);
	    }

	    alignPathToPixel(line);

	    return line;
	}

	var Axis = ChartElement.extend({
	    init: function(options, chartService) {
	        if (chartService === void 0) { chartService = new ChartService(); }

	        ChartElement.fn.init.call(this, options);

	        this.chartService = chartService;

	        if (!this.options.visible) {
	            this.options = deepExtend({}, this.options, {
	                labels: {
	                    visible: false
	                },
	                line: {
	                    visible: false
	                },
	                margin: 0,
	                majorTickSize: 0,
	                minorTickSize: 0
	            });
	        }

	        this.options.minorTicks = deepExtend({}, {
	            color: this.options.line.color,
	            width: this.options.line.width,
	            visible: this.options.minorTickType !== NONE
	        }, this.options.minorTicks, {
	            size: this.options.minorTickSize,
	            align: this.options.minorTickType
	        });

	        this.options.majorTicks = deepExtend({}, {
	            color: this.options.line.color,
	            width: this.options.line.width,
	            visible: this.options.majorTickType !== NONE
	        }, this.options.majorTicks, {
	            size: this.options.majorTickSize,
	            align: this.options.majorTickType
	        });

	        this.initFields();

	        if (!this.options._deferLabels) {
	            this.createLabels();
	        }

	        this.createTitle();
	        this.createNotes();
	    },

	    initFields: function() {
	    },

	    labelsRange: function() {
	        return {
	            min: this.options.labels.skip,
	            max: this.labelsCount()
	        };
	    },

	    normalizeLabelRotation: function(labelOptions) {
	        var rotation = labelOptions.rotation;

	        if (isObject(rotation)) {
	            labelOptions.alignRotation = rotation.align;
	            labelOptions.rotation = rotation.angle;
	        }
	    },

	    createLabels: function() {
	        var this$1 = this;

	        var options = this.options;
	        var align = options.vertical ? RIGHT : CENTER;
	        var labelOptions = deepExtend({ }, options.labels, {
	            align: align,
	            zIndex: options.zIndex
	        });
	        var step = Math.max(1, labelOptions.step);

	        this.clearLabels();

	        if (labelOptions.visible) {
	            this.normalizeLabelRotation(labelOptions);
	            if (labelOptions.rotation === "auto") {
	                labelOptions.rotation = 0;
	                options.autoRotateLabels = true;
	            }

	            var range = this.labelsRange();
	            for (var idx = range.min; idx < range.max; idx += step) {
	                var labelContext = { index: idx, count: range.max };
	                var label = this$1.createAxisLabel(idx, labelOptions, labelContext);
	                if (label) {
	                    this$1.append(label);
	                    this$1.labels.push(label);
	                }
	            }
	        }
	    },

	    clearLabels: function() {
	        this.children = grep(this.children, function (child) { return !(child instanceof AxisLabel); });
	        this.labels = [];
	    },

	    clearTitle: function() {
	        var this$1 = this;

	        if (this.title) {
	            this.children = grep(this.children, function (child) { return child !== this$1.title; });
	            this.title = undefined;
	        }
	    },

	    clear: function() {
	        this.clearLabels();
	        this.clearTitle();
	    },

	    lineBox: function() {
	        var ref = this;
	        var options = ref.options;
	        var box = ref.box;
	        var vertical = options.vertical;
	        var mirror = options.labels.mirror;
	        var axisX = mirror ? box.x1 : box.x2;
	        var axisY = mirror ? box.y2 : box.y1;
	        var lineWidth = options.line.width || 0;

	        return vertical ?
	            new Box(axisX, box.y1, axisX, box.y2 - lineWidth) :
	            new Box(box.x1, axisY, box.x2 - lineWidth, axisY);
	    },

	    createTitle: function() {
	        var options = this.options;
	        var titleOptions = deepExtend({
	            rotation: options.vertical ? -90 : 0,
	            text: "",
	            zIndex: 1,
	            visualSize: true
	        }, options.title);

	        if (titleOptions.visible && titleOptions.text) {
	            var title = new TextBox(titleOptions.text, titleOptions);
	            this.append(title);
	            this.title = title;
	        }
	    },

	    createNotes: function() {
	        var this$1 = this;

	        var options = this.options;
	        var notes = options.notes;
	        var items = notes.data || [];

	        this.notes = [];

	        for (var i = 0; i < items.length; i++) {
	            var item = deepExtend({}, notes, items[i]);
	            item.value = this$1.parseNoteValue(item.value);

	            var note = new Note({
	                value: item.value,
	                text: item.label.text,
	                dataItem: item
	            }, item, this$1.chartService);

	            if (note.options.visible) {
	                if (defined(note.options.position)) {
	                    if (options.vertical && !inArray(note.options.position, [ LEFT, RIGHT ])) {
	                        note.options.position = options.reverse ? LEFT : RIGHT;
	                    } else if (!options.vertical && !inArray(note.options.position, [ TOP, BOTTOM ])) {
	                        note.options.position = options.reverse ? BOTTOM : TOP;
	                    }
	                } else {
	                    if (options.vertical) {
	                        note.options.position = options.reverse ? LEFT : RIGHT;
	                    } else {
	                        note.options.position = options.reverse ? BOTTOM : TOP;
	                    }
	                }
	                this$1.append(note);
	                this$1.notes.push(note);
	            }
	        }
	    },

	    parseNoteValue: function(value) {
	        return value;
	    },

	    renderVisual: function() {
	        ChartElement.fn.renderVisual.call(this);

	        this.createPlotBands();
	    },

	    createVisual: function() {
	        ChartElement.fn.createVisual.call(this);

	        this.createBackground();
	        this.createLine();
	    },

	    gridLinesVisual: function() {
	        var gridLines = this._gridLines;
	        if (!gridLines) {
	            gridLines = this._gridLines = new Group({
	                zIndex: -2
	            });
	            this.appendVisual(this._gridLines);
	        }

	        return gridLines;
	    },

	    createTicks: function(lineGroup) {
	        var options = this.options;
	        var lineBox = this.lineBox();
	        var mirror = options.labels.mirror;
	        var majorUnit = options.majorTicks.visible ? options.majorUnit : 0;
	        var tickLineOptions = {
	            // TODO
	            // _alignLines: options._alignLines,
	            vertical: options.vertical
	        };

	        function render(tickPositions, tickOptions, skipUnit) {
	            var count = tickPositions.length;
	            var step = Math.max(1, tickOptions.step);

	            if (tickOptions.visible) {
	                for (var i = tickOptions.skip; i < count; i += step) {
	                    if (defined(skipUnit) && (i % skipUnit === 0)) {
	                        continue;
	                    }

	                    tickLineOptions.tickX = mirror ? lineBox.x2 : lineBox.x2 - tickOptions.size;
	                    tickLineOptions.tickY = mirror ? lineBox.y1 - tickOptions.size : lineBox.y1;
	                    tickLineOptions.position = tickPositions[i];

	                    lineGroup.append(createAxisTick(tickLineOptions, tickOptions));
	                }
	            }
	        }

	        render(this.getMajorTickPositions(), options.majorTicks);
	        render(this.getMinorTickPositions(), options.minorTicks, majorUnit / options.minorUnit);
	    },

	    createLine: function() {
	        var options = this.options;
	        var line = options.line;
	        var lineBox = this.lineBox();

	        if (line.width > 0 && line.visible) {
	            var path = new Path({
	                stroke: {
	                    width: line.width,
	                    color: line.color,
	                    dashType: line.dashType
	                }

	                /* TODO
	                zIndex: line.zIndex,
	                */
	            });

	            path.moveTo(lineBox.x1, lineBox.y1)
	                .lineTo(lineBox.x2, lineBox.y2);

	            if (options._alignLines) {
	                alignPathToPixel(path);
	            }

	            var group = this._lineGroup = new Group();
	            group.append(path);

	            this.visual.append(group);
	            this.createTicks(group);
	        }
	    },

	    getActualTickSize: function() {
	        var options = this.options;
	        var tickSize = 0;

	        if (options.majorTicks.visible && options.minorTicks.visible) {
	            tickSize = Math.max(options.majorTicks.size, options.minorTicks.size);
	        } else if (options.majorTicks.visible) {
	            tickSize = options.majorTicks.size;
	        } else if (options.minorTicks.visible) {
	            tickSize = options.minorTicks.size;
	        }

	        return tickSize;
	    },

	    createBackground: function() {
	        var ref = this;
	        var options = ref.options;
	        var box = ref.box;
	        var background = options.background;

	        if (background) {
	            this._backgroundPath = Path.fromRect(box.toRect(), {
	                fill: {
	                    color: background
	                },
	                stroke: null
	            });

	            this.visual.append(this._backgroundPath);
	        }
	    },

	    createPlotBands: function() {
	        var this$1 = this;

	        var options = this.options;
	        var plotBands = options.plotBands || [];
	        var vertical = options.vertical;
	        var plotArea = this.plotArea;

	        if (plotBands.length === 0) {
	            return;
	        }

	        var group = this._plotbandGroup = new Group({
	            zIndex: -1
	        });

	        var altAxis = grep(this.pane.axes, function (axis) { return axis.options.vertical !== this$1.options.vertical; })[0];

	        for (var idx = 0; idx < plotBands.length; idx++) {
	            var item = plotBands[idx];
	            var slotX = (void 0), slotY = (void 0);
	            var labelOptions = item.label;
	            var label = (void 0);

	            if (vertical) {
	                slotX = (altAxis || plotArea.axisX).lineBox();
	                slotY = this$1.getSlot(item.from, item.to, true);
	            } else {
	                slotX = this$1.getSlot(item.from, item.to, true);
	                slotY = (altAxis || plotArea.axisY).lineBox();
	            }

	            if (labelOptions) {
	                labelOptions.vAlign = labelOptions.position || LEFT;
	                label = this$1.createPlotBandLabel(
	                    labelOptions,
	                    item,
	                    new Box(
	                        slotX.x1,
	                        slotY.y1,
	                        slotX.x2,
	                        slotY.y2
	                    )

	                );
	            }

	            if (slotX.width() !== 0 && slotY.height() !== 0) {
	                var bandRect = new Rect(
	                    [ slotX.x1, slotY.y1 ],
	                    [ slotX.width(), slotY.height() ]
	                );

	                var path = Path.fromRect(bandRect, {
	                    fill: {
	                        color: item.color,
	                        opacity: item.opacity
	                    },
	                    stroke: null
	                });

	                group.append(path);
	                if (label) {
	                    group.append(label);
	                }
	            }
	        }

	        this.appendVisual(group);
	    },

	    createPlotBandLabel: function(label, item, box) {

	        if (label.visible === false) {
	            return null;
	        }

	        var text = label.text;
	        var textbox;

	        if (defined(label) && label.visible) {
	            var labelTemplate = getTemplate(label);
	            if (labelTemplate) {
	                text = labelTemplate({ text: text, item: item });
	            } else if (label.format) {
	                text = this.chartService.format.auto(label.format, text);
	            }

	            if (!label.color) {
	                label.color = this.options.labels.color;
	            }
	        }

	        textbox = new TextBox(text, label);
	        textbox.reflow(box);
	        textbox.renderVisual();

	        return textbox.visual;
	    },

	    createGridLines: function(altAxis) {
	        var options = this.options;
	        var minorGridLines = options.minorGridLines;
	        var majorGridLines = options.majorGridLines;
	        var minorUnit = options.minorUnit;
	        var vertical = options.vertical;
	        var axisLineVisible = altAxis.options.line.visible;
	        var majorUnit = majorGridLines.visible ? options.majorUnit : 0;
	        var lineBox = altAxis.lineBox();
	        var linePos = lineBox[vertical ? "y1" : "x1"];
	        var lineOptions = {
	            lineStart: lineBox[vertical ? "x1" : "y1"],
	            lineEnd: lineBox[vertical ? "x2" : "y2"],
	            vertical: vertical
	        };
	        var majorTicks = [];

	        var container = this.gridLinesVisual();

	        function render(tickPositions, gridLine, skipUnit) {
	            var count = tickPositions.length;
	            var step = Math.max(1, gridLine.step);

	            if (gridLine.visible) {
	                for (var i = gridLine.skip; i < count; i += step) {
	                    var pos = round(tickPositions[i]);
	                    if (!inArray(pos, majorTicks)) {
	                        if (i % skipUnit !== 0 && (!axisLineVisible || linePos !== pos)) {
	                            lineOptions.position = pos;
	                            container.append(createAxisGridLine(lineOptions, gridLine));

	                            majorTicks.push(pos);
	                        }
	                    }
	                }
	            }
	        }

	        render(this.getMajorTickPositions(), majorGridLines);
	        render(this.getMinorTickPositions(), minorGridLines, majorUnit / minorUnit);

	        return container.children;
	    },

	    reflow: function(box) {
	        var ref = this;
	        var options = ref.options;
	        var labels = ref.labels;
	        var title = ref.title;
	        var vertical = options.vertical;
	        var count = labels.length;
	        var sizeFn = vertical ? WIDTH : HEIGHT;
	        var titleSize = title ? title.box[sizeFn]() : 0;
	        var space = this.getActualTickSize() + options.margin + titleSize;
	        var rootBox = (this.getRoot() || {}).box || box;
	        var boxSize = rootBox[sizeFn]();
	        var maxLabelSize = 0;

	        for (var i = 0; i < count; i++) {
	            var labelSize = labels[i].box[sizeFn]();
	            if (labelSize + space <= boxSize) {
	                maxLabelSize = Math.max(maxLabelSize, labelSize);
	            }
	        }

	        if (vertical) {
	            this.box = new Box(
	                box.x1, box.y1,
	                box.x1 + maxLabelSize + space, box.y2
	            );
	        } else {
	            this.box = new Box(
	                box.x1, box.y1,
	                box.x2, box.y1 + maxLabelSize + space
	            );
	        }

	        this.arrangeTitle();
	        this.arrangeLabels();
	        this.arrangeNotes();
	    },

	    getLabelsTickPositions: function() {
	        return this.getMajorTickPositions();
	    },

	    labelTickIndex: function(label) {
	        return label.index;
	    },

	    arrangeLabels: function() {
	        var this$1 = this;

	        var ref = this;
	        var options = ref.options;
	        var labels = ref.labels;
	        var labelsBetweenTicks = this.labelsBetweenTicks();
	        var vertical = options.vertical;
	        var mirror = options.labels.mirror;
	        var tickPositions = this.getLabelsTickPositions();

	        for (var idx = 0; idx < labels.length; idx++) {
	            var label = labels[idx];
	            var tickIx = this$1.labelTickIndex(label);
	            var labelSize = vertical ? label.box.height() : label.box.width();
	            var firstTickPosition = tickPositions[tickIx];
	            var nextTickPosition = tickPositions[tickIx + 1];
	            var positionStart = (void 0), positionEnd = (void 0);

	            if (vertical) {
	                if (labelsBetweenTicks) {
	                    var middle = firstTickPosition + (nextTickPosition - firstTickPosition) / 2;
	                    positionStart = middle - (labelSize / 2);
	                } else {
	                    positionStart = firstTickPosition - (labelSize / 2);
	                }

	                positionEnd = positionStart;
	            } else {
	                if (labelsBetweenTicks) {
	                    positionStart = firstTickPosition;
	                    positionEnd = nextTickPosition;
	                } else {
	                    positionStart = firstTickPosition - (labelSize / 2);
	                    positionEnd = positionStart + labelSize;
	                }
	            }

	            this$1.positionLabel(label, mirror, positionStart, positionEnd);
	        }
	    },

	    positionLabel: function(label, mirror, positionStart, positionEnd) {
	        if (positionEnd === void 0) { positionEnd = positionStart; }

	        var options = this.options;
	        var vertical = options.vertical;
	        var lineBox = this.lineBox();
	        var labelOffset = this.getActualTickSize() + options.margin;
	        var labelBox;

	        if (vertical) {
	            var labelX = lineBox.x2;

	            if (mirror) {
	                labelX += labelOffset;
	                label.options.rotationOrigin = LEFT;
	            } else {
	                labelX -= labelOffset + label.box.width();
	                label.options.rotationOrigin = RIGHT;
	            }

	            labelBox = label.box.move(labelX, positionStart);
	        } else {
	            var labelY = lineBox.y1;

	            if (mirror) {
	                labelY -= labelOffset + label.box.height();
	                label.options.rotationOrigin = BOTTOM;
	            } else {
	                labelY += labelOffset;
	                label.options.rotationOrigin = TOP;
	            }

	            labelBox = new Box(
	                positionStart, labelY,
	                positionEnd, labelY + label.box.height()
	            );
	        }

	        label.reflow(labelBox);
	    },

	    autoRotateLabelAngle: function(labelBox, slotWidth) {
	        if (labelBox.width() < slotWidth) {
	            return 0;
	        }

	        if (labelBox.height() > slotWidth) {
	            return -90;
	        }

	        return -45;
	    },

	    autoRotateLabels: function() {
	        var this$1 = this;

	        if (!this.options.autoRotateLabels || this.options.vertical) {
	            return false;
	        }

	        var tickPositions = this.getMajorTickPositions();
	        var labels = this.labels;
	        var limit = Math.min(labels.length, tickPositions.length - 1);
	        var angle = 0;

	        for (var idx = 0; idx < limit; idx++) {
	            var width = Math.abs(tickPositions[idx + 1] - tickPositions[idx]);
	            var labelBox = labels[idx].box;
	            var labelAngle = this$1.autoRotateLabelAngle(labelBox, width);

	            if (labelAngle !== 0) {
	                angle = labelAngle;
	            }

	            if (angle === -90) {
	                break;
	            }
	        }

	        if (angle !== 0) {
	            for (var idx$1 = 0; idx$1 < labels.length; idx$1++) {
	                labels[idx$1].options.rotation = angle;
	                labels[idx$1].reflow(new Box());
	            }

	            return true;
	        }
	    },

	    arrangeTitle: function() {
	        var ref = this;
	        var options = ref.options;
	        var title = ref.title;
	        var mirror = options.labels.mirror;
	        var vertical = options.vertical;

	        if (title) {
	            if (vertical) {
	                title.options.align = mirror ? RIGHT : LEFT;
	                title.options.vAlign = title.options.position;
	            } else {
	                title.options.align = title.options.position;
	                title.options.vAlign = mirror ? TOP : BOTTOM;
	            }

	            title.reflow(this.box);
	        }
	    },

	    arrangeNotes: function() {
	        var this$1 = this;

	        for (var idx = 0; idx < this.notes.length; idx++) {
	            var item = this$1.notes[idx];
	            var value = item.options.value;
	            var slot = (void 0);

	            if (defined(value)) {
	                if (this$1.shouldRenderNote(value)) {
	                    item.show();
	                } else {
	                    item.hide();
	                }

	                slot = this$1.noteSlot(value);
	            } else {
	                item.hide();
	            }

	            item.reflow(slot || this$1.lineBox());
	        }
	    },

	    noteSlot: function(value) {
	        return this.getSlot(value);
	    },

	    alignTo: function(secondAxis) {
	        var lineBox = secondAxis.lineBox();
	        var vertical = this.options.vertical;
	        var pos = vertical ? Y : X;

	        this.box.snapTo(lineBox, pos);
	        if (vertical) {
	            this.box.shrink(0, this.lineBox().height() - lineBox.height());
	        } else {
	            this.box.shrink(this.lineBox().width() - lineBox.width(), 0);
	        }
	        this.box[pos + 1] -= this.lineBox()[pos + 1] - lineBox[pos + 1];
	        this.box[pos + 2] -= this.lineBox()[pos + 2] - lineBox[pos + 2];
	    },

	    axisLabelText: function(value, options, context) {
	        var this$1 = this;

	        var text;
	        var tmpl = getTemplate(options);
	        var defaultText = function () {
	            if (!options.format) {
	                return value;
	            }

	            return this$1.chartService.format.localeAuto(
	                options.format, [ value ], options.culture
	            );
	        };

	        if (tmpl) {
	            var templateContext = $.extend({}, context, {
	                get text() { return defaultText(); },
	                value: value,
	                format: options.format,
	                culture: options.culture
	            });

	            text = tmpl(templateContext);
	        } else {
	            text = defaultText();
	        }

	        return text;
	    },

	    slot: function(from , to, limit) {
	        var slot = this.getSlot(from, to, limit);
	        if (slot) {
	            return slot.toRect();
	        }
	    },

	    contentBox: function() {
	        var box = this.box.clone();
	        var labels = this.labels;
	        if (labels.length) {
	            var axis = this.options.vertical ? Y : X;
	            if (this.chartService.isPannable(axis)) {
	                var offset = this.maxLabelOffset();
	                box[axis + 1] -= offset.start;
	                box[axis + 2] += offset.end;
	            } else {
	                if (labels[0].options.visible) {
	                    box.wrap(labels[0].box);
	                }
	                var lastLabel = labels[labels.length - 1];
	                if (lastLabel.options.visible) {
	                    box.wrap(lastLabel.box);
	                }
	            }
	        }

	        return box;
	    },

	    maxLabelOffset: function() {
	        var this$1 = this;

	        var ref = this.options;
	        var vertical = ref.vertical;
	        var reverse = ref.reverse;
	        var labelsBetweenTicks = this.labelsBetweenTicks();
	        var tickPositions = this.getLabelsTickPositions();
	        var offsetField = vertical ? Y : X;
	        var labels = this.labels;
	        var startPosition = reverse ? 1 : 0;
	        var endPosition = reverse ? 0 : 1;
	        var maxStartOffset = 0;
	        var maxEndOffset = 0;

	        for (var idx = 0; idx < labels.length; idx++) {
	            var label = labels[idx];
	            var tickIx = this$1.labelTickIndex(label);
	            var startTick = (void 0), endTick = (void 0);

	            if (labelsBetweenTicks) {
	                startTick = tickPositions[tickIx + startPosition];
	                endTick = tickPositions[tickIx + endPosition];
	            } else {
	                startTick = endTick = tickPositions[tickIx];
	            }

	            maxStartOffset = Math.max(maxStartOffset, startTick - label.box[offsetField + 1]);
	            maxEndOffset = Math.max(maxEndOffset, label.box[offsetField + 2] - endTick);
	        }

	        return {
	            start: maxStartOffset,
	            end: maxEndOffset
	        };
	    },

	    limitRange: function(from, to, min, max, offset) {
	        var options = this.options;

	        if ((from < min && offset < 0 && (!defined(options.min) || options.min <= min)) || (max < to && offset > 0 && (!defined(options.max) || max <= options.max))) {
	            return null;
	        }

	        if ((to < min && offset > 0) || (max < from && offset < 0)) {
	            return {
	                min: from,
	                max: to
	            };
	        }

	        var rangeSize = to - from;
	        var minValue = from;
	        var maxValue = to;

	        if (from < min && offset < 0) {
	            minValue = limitValue(from, min, max);
	            maxValue = limitValue(from + rangeSize, min + rangeSize, max);
	        } else if (to > max && offset > 0) {
	            maxValue = limitValue(to, min, max);
	            minValue = limitValue(to - rangeSize, min, max - rangeSize);
	        }

	        return {
	            min: minValue,
	            max: maxValue
	        };
	    },

	    valueRange: function() {
	        return {
	            min: this.seriesMin,
	            max: this.seriesMax
	        };
	    },

	    labelsBetweenTicks: function() {
	        return !this.options.justified;
	    },

	    prepareUserOptions: function() {
	    }
	});

	setDefaultOptions(Axis, {
	    labels: {
	        visible: true,
	        rotation: 0,
	        mirror: false,
	        step: 1,
	        skip: 0
	    },
	    line: {
	        width: 1,
	        color: BLACK,
	        visible: true
	    },
	    title: {
	        visible: true,
	        position: CENTER
	    },
	    majorTicks: {
	        align: OUTSIDE,
	        size: 4,
	        skip: 0,
	        step: 1
	    },
	    minorTicks: {
	        align: OUTSIDE,
	        size: 3,
	        skip: 0,
	        step: 1
	    },
	    axisCrossingValue: 0,
	    majorTickType: OUTSIDE,
	    minorTickType: NONE,
	    majorGridLines: {
	        skip: 0,
	        step: 1
	    },
	    minorGridLines: {
	        visible: false,
	        width: 1,
	        color: BLACK,
	        skip: 0,
	        step: 1
	    },
	    // TODO: Move to line or labels options
	    margin: 5,
	    visible: true,
	    reverse: false,
	    justified: true,
	    notes: {
	        label: {
	            text: ""
	        }
	    },

	    _alignLines: true,
	    _deferLabels: false
	});

	var MILLISECONDS = "milliseconds";
	var SECONDS = "seconds";
	var MINUTES = "minutes";
	var HOURS = "hours";
	var DAYS = "days";
	var WEEKS = "weeks";
	var MONTHS = "months";
	var YEARS = "years";

	var TIME_PER_MILLISECOND = 1;
	var TIME_PER_SECOND = 1000;
	var TIME_PER_MINUTE = 60 * TIME_PER_SECOND;
	var TIME_PER_HOUR = 60 * TIME_PER_MINUTE;
	var TIME_PER_DAY = 24 * TIME_PER_HOUR;
	var TIME_PER_WEEK = 7 * TIME_PER_DAY;
	var TIME_PER_MONTH = 31 * TIME_PER_DAY;
	var TIME_PER_YEAR = 365 * TIME_PER_DAY;
	var TIME_PER_UNIT = {
	    "years": TIME_PER_YEAR,
	    "months": TIME_PER_MONTH,
	    "weeks": TIME_PER_WEEK,
	    "days": TIME_PER_DAY,
	    "hours": TIME_PER_HOUR,
	    "minutes": TIME_PER_MINUTE,
	    "seconds": TIME_PER_SECOND,
	    "milliseconds": TIME_PER_MILLISECOND
	};

	function absoluteDateDiff(a, b) {
	    var diff = a.getTime() - b;
	    var offsetDiff = a.getTimezoneOffset() - b.getTimezoneOffset();

	    return diff - (offsetDiff * TIME_PER_MINUTE);
	}

	function addTicks(date, ticks) {
	    return new Date(date.getTime() + ticks);
	}

	function toDate(value) {
	    var result;

	    if (value instanceof Date) {
	        result = value;
	    } else if (value) {
	        result = new Date(value);
	    }

	    return result;
	}

	function startOfWeek(date, weekStartDay) {
	    if (weekStartDay === void 0) { weekStartDay = 0; }

	    var daysToSubtract = 0;
	    var day = date.getDay();

	    if (!isNaN(day)) {
	        while (day !== weekStartDay) {
	            if (day === 0) {
	                day = 6;
	            } else {
	                day--;
	            }

	            daysToSubtract++;
	        }
	    }

	    return addTicks(date, -daysToSubtract * TIME_PER_DAY);
	}

	function adjustDST(date, hours) {
	    if (hours === 0 && date.getHours() === 23) {
	        date.setHours(date.getHours() + 2);
	        return true;
	    }

	    return false;
	}

	function addHours(date, hours) {
	    var roundedDate = new Date(date);

	    roundedDate.setMinutes(0, 0, 0);

	    var tzDiff = (date.getTimezoneOffset() - roundedDate.getTimezoneOffset()) * TIME_PER_MINUTE;

	    return addTicks(roundedDate, tzDiff + hours * TIME_PER_HOUR);
	}

	function addDuration(dateValue, value, unit, weekStartDay) {
	    var result = dateValue;

	    if (dateValue) {
	        var date = toDate(dateValue);
	        var hours = date.getHours();

	        if (unit === YEARS) {
	            result = new Date(date.getFullYear() + value, 0, 1);
	            adjustDST(result, 0);
	        } else if (unit === MONTHS) {
	            result = new Date(date.getFullYear(), date.getMonth() + value, 1);
	            adjustDST(result, hours);
	        } else if (unit === WEEKS) {
	            result = addDuration(startOfWeek(date, weekStartDay), value * 7, DAYS);
	            adjustDST(result, hours);
	        } else if (unit === DAYS) {
	            result = new Date(date.getFullYear(), date.getMonth(), date.getDate() + value);
	            adjustDST(result, hours);
	        } else if (unit === HOURS) {
	            result = addHours(date, value);
	        } else if (unit === MINUTES) {
	            result = addTicks(date, value * TIME_PER_MINUTE);

	            if (result.getSeconds() > 0) {
	                result.setSeconds(0);
	            }
	        } else if (unit === SECONDS) {
	            result = addTicks(date, value * TIME_PER_SECOND);
	        } else if (unit === MILLISECONDS) {
	            result = addTicks(date, value);
	        }

	        if (unit !== MILLISECONDS && result.getMilliseconds() > 0) {
	            result.setMilliseconds(0);
	        }
	    }

	    return result;
	}

	function floorDate(date, unit, weekStartDay) {
	    return addDuration(toDate(date), 0, unit, weekStartDay);
	}

	function ceilDate(dateValue, unit, weekStartDay) {
	    var date = toDate(dateValue);

	    if (date && floorDate(date, unit, weekStartDay).getTime() === date.getTime()) {
	        return date;
	    }

	    return addDuration(date, 1, unit, weekStartDay);
	}

	function dateComparer(a, b) {
	    if (a && b) {
	        return a.getTime() - b.getTime();
	    }

	    return -1;
	}

	function dateDiff(a, b) {
	    return a.getTime() - b;
	}

	function toTime(value) {
	    if (isArray(value)) {
	        var result = [];
	        for (var idx = 0; idx < value.length; idx++) {
	            result.push(toTime(value[idx]));
	        }

	        return result;
	    } else if (value) {
	        return toDate(value).getTime();
	    }
	}

	function dateEquals(a, b) {
	    if (a && b) {
	        return toTime(a) === toTime(b);
	    }

	    return a === b;
	}

	function timeIndex(date, start, baseUnit) {
	    return absoluteDateDiff(date, start) / TIME_PER_UNIT[baseUnit];
	}

	function dateIndex(value, start, baseUnit, baseUnitStep) {
	    var date = toDate(value);
	    var startDate = toDate(start);
	    var index;

	    if (baseUnit === MONTHS) {
	        index = (date.getMonth() - startDate.getMonth() + (date.getFullYear() - startDate.getFullYear()) * 12) +
	            timeIndex(date, new Date(date.getFullYear(), date.getMonth()), DAYS) / new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	    } else if (baseUnit === YEARS) {
	        index = date.getFullYear() - startDate.getFullYear() + dateIndex(date, new Date(date.getFullYear(), 0), MONTHS, 1) / 12;
	    } else if (baseUnit === DAYS || baseUnit === WEEKS) {
	        index = timeIndex(date, startDate, baseUnit);
	    } else {
	        index = dateDiff(date, start) / TIME_PER_UNIT[baseUnit];
	    }

	    return index / baseUnitStep;
	}

	function duration(a, b, unit) {
	    var diff;

	    if (unit === YEARS) {
	        diff = b.getFullYear() - a.getFullYear();
	    } else if (unit === MONTHS) {
	        diff = duration(a, b, YEARS) * 12 + b.getMonth() - a.getMonth();
	    } else if (unit === DAYS) {
	        diff = Math.floor(dateDiff(b, a) / TIME_PER_DAY);
	    } else {
	        diff = Math.floor(dateDiff(b, a) / TIME_PER_UNIT[unit]);
	    }

	    return diff;
	}

	function lteDateIndex(date, sortedDates) {
	    var low = 0;
	    var high = sortedDates.length - 1;
	    var index;

	    while (low <= high) {
	        index = Math.floor((low + high) / 2);
	        var currentDate = sortedDates[index];

	        if (currentDate < date) {
	            low = index + 1;
	            continue;
	        }

	        if (currentDate > date) {
	            high = index - 1;
	            continue;
	        }

	        while (dateEquals(sortedDates[index - 1], date)) {
	            index--;
	        }

	        return index;
	    }

	    if (sortedDates[index] <= date) {
	        return index;
	    }

	    return index - 1;
	}

	function parseDate(intlService, date) {
	    var result;
	    if (isString(date)) {
	        result = intlService.parseDate(date) || toDate(date);
	    } else {
	        result = toDate(date);
	    }
	    return result;
	}

	function parseDates(intlService, dates) {
	    if (isArray(dates)) {
	        var result = [];
	        for (var idx = 0; idx < dates.length; idx++) {
	            result.push(parseDate(intlService, dates[idx]));
	        }

	        return result;
	    }

	    return parseDate(intlService, dates);
	}

	function firstDay(options, intlService) {
	    if (isNumber(options.weekStartDay)) {
	        return options.weekStartDay;
	    }

	    if (intlService && intlService.firstDay) {
	        return intlService.firstDay();
	    }

	    return 0;
	}

	var MIN_CATEGORY_POINTS_RANGE = 0.01;

	function indexOf(value, arr) {
	    if (value instanceof Date) {
	        var length = arr.length;
	        for (var idx = 0; idx < length; idx++) {
	            if (dateEquals(arr[idx], value)) {
	                return idx;
	            }
	        }

	        return -1;
	    }

	    return arr.indexOf(value);
	}

	var CategoryAxis = Axis.extend({
	    initFields: function() {
	        this._ticks = {};
	    },

	    categoriesHash: function() {
	        return "";
	    },

	    clone: function() {
	        var copy = new CategoryAxis($.extend({}, this.options, {
	            categories: this.options.srcCategories
	        }), this.chartService);
	        copy.createLabels();

	        return copy;
	    },

	    initUserOptions: function(options) {
	        var categories = options.categories || [];
	        var definedMin = defined(options.min);
	        var definedMax = defined(options.max);
	        options.srcCategories = options.categories = categories;

	        if ((definedMin || definedMax) && categories.length) {
	            var min = definedMin ? Math.floor(options.min) : 0;
	            var max;

	            if (definedMax) {
	                max = options.justified ? Math.floor(options.max) + 1 : Math.ceil(options.max);
	            } else {
	                max = categories.length;
	            }

	            options.categories = options.categories.slice(min, max);
	        }

	        return options;
	    },

	    rangeIndices: function() {
	        var options = this.options;
	        var length = options.categories.length || 1;
	        var min = isNumber(options.min) ? options.min % 1 : 0;
	        var max;

	        if (isNumber(options.max) && options.max % 1 !== 0 && options.max < this.totalRange().max) {
	            max = length - (1 - options.max % 1);
	        } else {
	            max = length - (options.justified ? 1 : 0);
	        }

	        return {
	            min: min,
	            max: max
	        };
	    },

	    totalRangeIndices: function(limit) {
	        var options = this.options;
	        var min = isNumber(options.min) ? options.min : 0;
	        var max;

	        if (isNumber(options.max)) {
	            max = options.max;
	        } else if (isNumber(options.min)) {
	            max = min + options.categories.length;
	        } else {
	            max = this.totalRange().max || 1;
	        }

	        if (limit) {
	            var totalRange = this.totalRange();
	            min = limitValue(min, 0, totalRange.max);
	            max = limitValue(max, 0, totalRange.max);
	        }

	        return {
	            min: min,
	            max: max
	        };
	    },

	    range: function() {
	        var options = this.options;
	        var min = isNumber(options.min) ? options.min : 0;
	        var max = isNumber(options.max) ? options.max : this.totalRange().max;

	        return {
	            min: min,
	            max: max
	        };
	    },

	    roundedRange: function() {
	        return this.range();
	    },

	    totalRange: function() {
	        var options = this.options;
	        return { min: 0, max: Math.max(this._seriesMax || 0, options.srcCategories.length) - (options.justified ? 1 : 0) };
	    },

	    scaleOptions: function() {
	        var ref = this.rangeIndices();
	        var min = ref.min;
	        var max = ref.max;
	        var lineBox = this.lineBox();
	        var size = this.options.vertical ? lineBox.height() : lineBox.width();
	        var scale = size / ((max - min) || 1);

	        return {
	            scale: scale * (this.options.reverse ? -1 : 1),
	            box: lineBox,
	            min: min,
	            max: max
	        };
	    },

	    arrangeLabels: function() {
	        Axis.fn.arrangeLabels.call(this);
	        this.hideOutOfRangeLabels();
	    },

	    hideOutOfRangeLabels: function() {
	        var ref = this;
	        var box = ref.box;
	        var labels = ref.labels;

	        if (labels.length > 0) {
	            var valueAxis = this.options.vertical ? Y : X;
	            var start = box[valueAxis + 1];
	            var end = box[valueAxis + 2];
	            var firstLabel = labels[0];
	            var lastLabel = last(labels);

	            if (firstLabel.box[valueAxis + 1] > end || firstLabel.box[valueAxis + 2] < start) {
	                firstLabel.options.visible = false;
	            }
	            if (lastLabel.box[valueAxis + 1] > end || lastLabel.box[valueAxis + 2] < start) {
	                lastLabel.options.visible = false;
	            }
	        }
	    },

	    getMajorTickPositions: function() {
	        return this.getTicks().majorTicks;
	    },

	    getMinorTickPositions: function() {
	        return this.getTicks().minorTicks;
	    },

	    getLabelsTickPositions: function() {
	        return this.getTicks().labelTicks;
	    },

	    tickIndices: function(stepSize) {
	        var ref = this.rangeIndices();
	        var min = ref.min;
	        var max = ref.max;
	        var limit = Math.ceil(max);
	        var current = Math.floor(min);
	        var indices = [];

	        while (current <= limit) {
	            indices.push(current);
	            current += stepSize;
	        }

	        return indices;
	    },

	    getTickPositions: function(stepSize) {
	        var ref = this.options;
	        var vertical = ref.vertical;
	        var reverse = ref.reverse;
	        var ref$1 = this.scaleOptions();
	        var scale = ref$1.scale;
	        var box = ref$1.box;
	        var min = ref$1.min;
	        var pos = box[(vertical ? Y : X) + (reverse ? 2 : 1)];
	        var indices = this.tickIndices(stepSize);
	        var positions = [];

	        for (var idx = 0; idx < indices.length; idx++) {
	            positions.push(pos + round(scale * (indices[idx] - min), COORD_PRECISION));
	        }

	        return positions;
	    },

	    getTicks: function() {
	        var options = this.options;
	        var cache = this._ticks;
	        var range = this.rangeIndices();
	        var lineBox = this.lineBox();
	        var hash = lineBox.getHash() + range.min + "," + range.max + options.reverse + options.justified;

	        if (cache._hash !== hash) {
	            var hasMinor = options.minorTicks.visible || options.minorGridLines.visible;
	            cache._hash = hash;
	            cache.labelTicks = this.getTickPositions(1);
	            cache.majorTicks = this.filterOutOfRangePositions(cache.labelTicks, lineBox);
	            cache.minorTicks = hasMinor ? this.filterOutOfRangePositions(this.getTickPositions(0.5), lineBox) : [];
	        }

	        return cache;
	    },

	    filterOutOfRangePositions: function(positions, lineBox) {
	        if (!positions.length) {
	            return positions;
	        }

	        var axis = this.options.vertical ? Y : X;
	        var inRange = function (position) { return lineBox[axis + 1] <= position && position <= lineBox[axis + 2]; };

	        var end = positions.length - 1;
	        var startIndex = 0;
	        while (!inRange(positions[startIndex]) && startIndex <= end) {
	            startIndex++;
	        }

	        var endIndex = end;

	        while (!inRange(positions[endIndex]) && endIndex >= 0) {
	            endIndex--;
	        }

	        return positions.slice(startIndex, endIndex + 1);
	    },

	    getSlot: function(from, to, limit) {
	        var options = this.options;
	        var reverse = options.reverse;
	        var justified = options.justified;
	        var vertical = options.vertical;
	        var ref = this.scaleOptions();
	        var scale = ref.scale;
	        var box = ref.box;
	        var min = ref.min;
	        var valueAxis = vertical ? Y : X;
	        var lineStart = box[valueAxis + (reverse ? 2 : 1)];
	        var slotBox = box.clone();
	        var singleSlot = !defined(to);

	        var start = valueOrDefault(from, 0);
	        var end = valueOrDefault(to, start);
	        end = Math.max(end - 1, start);

	        // Fixes transient bug caused by iOS 6.0 JIT
	        // (one can never be too sure)
	        end = Math.max(start, end);

	        var p1 = lineStart + (start - min) * scale;
	        var p2 = lineStart + (end + 1 - min) * scale;

	        if (singleSlot && justified) {
	            p2 = p1;
	        }

	        if (limit) {
	            p1 = limitValue(p1, box[valueAxis + 1], box[valueAxis + 2]);
	            p2 = limitValue(p2, box[valueAxis + 1], box[valueAxis + 2]);
	        }

	        slotBox[valueAxis + 1] = reverse ? p2 : p1;
	        slotBox[valueAxis + 2] = reverse ? p1 : p2;

	        return slotBox;
	    },

	    limitSlot: function(slot) {
	        var vertical = this.options.vertical;
	        var valueAxis = vertical ? Y : X;
	        var lineBox = this.lineBox();
	        var limittedSlot = slot.clone();

	        limittedSlot[valueAxis + 1] = limitValue(slot[valueAxis + 1], lineBox[valueAxis + 1], lineBox[valueAxis + 2]);
	        limittedSlot[valueAxis + 2] = limitValue(slot[valueAxis + 2], lineBox[valueAxis + 1], lineBox[valueAxis + 2]);

	        return limittedSlot;
	    },

	    slot: function(from, to, limit) {
	        var min = Math.floor(this.options.min || 0);
	        var start = from;
	        var end = to;

	        if (typeof start === "string") {
	            start = this.categoryIndex(start);
	        } else if (isNumber(start)) {
	            start -= min;
	        }

	        if (typeof end === "string") {
	            end = this.categoryIndex(end);
	        } else if (isNumber(end)) {
	            end -= min;
	        }

	        return Axis.fn.slot.call(this, start, end, limit);
	    },

	    pointCategoryIndex: function(point) {
	        var ref = this.options;
	        var reverse = ref.reverse;
	        var justified = ref.justified;
	        var vertical = ref.vertical;
	        var valueAxis = vertical ? Y : X;
	        var ref$1 = this.scaleOptions();
	        var scale = ref$1.scale;
	        var box = ref$1.box;
	        var min = ref$1.min;
	        var max = ref$1.max;
	        var startValue = reverse ? max : min;
	        var lineStart = box[valueAxis + 1];
	        var lineEnd = box[valueAxis + 2];
	        var pos = point[valueAxis];

	        if (pos < lineStart || pos > lineEnd) {
	            return null;
	        }

	        var value = startValue + (pos - lineStart) / scale;
	        var diff = value % 1;

	        if (justified) {
	            value = Math.round(value);
	        } else if (diff === 0 && value > 0) {
	            value--;
	        }

	        return Math.floor(value);
	    },

	    getCategory: function(point) {
	        var index = this.pointCategoryIndex(point);

	        if (index === null) {
	            return null;
	        }

	        return this.options.categories[index];
	    },

	    categoryIndex: function(value) {
	        return this.totalIndex(value) - Math.floor(this.options.min || 0);
	    },

	    categoryAt: function(index, total) {
	        var options = this.options;

	        return (total ? options.srcCategories : options.categories)[index];
	    },

	    categoriesCount: function() {
	        return (this.options.categories || []).length;
	    },

	    translateRange: function(delta) {
	        var options = this.options;
	        var lineBox = this.lineBox();
	        var size = options.vertical ? lineBox.height() : lineBox.width();
	        var range = options.categories.length;
	        var scale = size / range;
	        var offset = round(delta / scale, DEFAULT_PRECISION);

	        return {
	            min: offset,
	            max: range + offset
	        };
	    },

	    zoomRange: function(rate) {
	        var rangeIndices = this.totalRangeIndices();
	        var ref = this.totalRange();
	        var totalMin = ref.min;
	        var totalMax = ref.max;
	        var min = limitValue(rangeIndices.min + rate, totalMin, totalMax);
	        var max = limitValue(rangeIndices.max - rate, totalMin, totalMax);

	        if (max - min > 0) {
	            return {
	                min: min,
	                max: max
	            };
	        }
	    },

	    scaleRange: function(scale) {
	        var range = this.options.categories.length;
	        var delta = scale * range;

	        return {
	            min: -delta,
	            max: range + delta
	        };
	    },

	    labelsCount: function() {
	        var labelsRange = this.labelsRange();

	        return labelsRange.max - labelsRange.min;
	    },

	    labelsRange: function() {
	        var options = this.options;
	        var justified = options.justified;
	        var labelOptions = options.labels;
	        var ref = this.totalRangeIndices(true);
	        var min = ref.min;
	        var max = ref.max;
	        var start = Math.floor(min);

	        if (!justified) {
	            min = Math.floor(min);
	            max = Math.ceil(max);
	        } else {
	            min = Math.ceil(min);
	            max = Math.floor(max);
	        }

	        var skip;

	        if (min > labelOptions.skip) {
	            skip = labelOptions.skip + labelOptions.step * Math.ceil((min - labelOptions.skip) / labelOptions.step);
	        } else {
	            skip = labelOptions.skip;
	        }

	        return {
	            min: skip - start,
	            max: (options.categories.length ? max + (justified ? 1 : 0) : 0) - start
	        };
	    },

	    createAxisLabel: function(index, labelOptions, labelContext) {
	        var options = this.options;
	        var dataItem = options.dataItems ? options.dataItems[index] : null;
	        var category = valueOrDefault(options.categories[index], "");

	        labelContext.dataItem = dataItem;
	        var text = this.axisLabelText(category, labelOptions, labelContext);

	        return new AxisLabel(category, text, index, dataItem, labelOptions);
	    },

	    shouldRenderNote: function(value) {
	        var range = this.totalRangeIndices();

	        return Math.floor(range.min) <= value && value <= Math.ceil(range.max);
	    },

	    noteSlot: function(value) {
	        var options = this.options;
	        var index = value - Math.floor(options.min || 0);
	        return this.getSlot(index);
	    },

	    arrangeNotes: function() {
	        Axis.fn.arrangeNotes.call(this);
	        this.hideOutOfRangeNotes();
	    },

	    hideOutOfRangeNotes: function() {
	        var ref = this;
	        var notes = ref.notes;
	        var box = ref.box;
	        if (notes && notes.length) {
	            var valueAxis = this.options.vertical ? Y : X;
	            var start = box[valueAxis + 1];
	            var end = box[valueAxis + 2];

	            for (var idx = 0; idx < notes.length; idx++) {
	                var note = notes[idx];
	                if (note.box && (end < note.box[valueAxis + 1] || note.box[valueAxis + 2] < start)) {
	                    note.hide();
	                }
	            }
	        }
	    },

	    pan: function(delta) {
	        var range = this.totalRangeIndices(true);
	        var ref = this.scaleOptions();
	        var scale = ref.scale;
	        var offset = round(delta / scale, DEFAULT_PRECISION);
	        var totalRange = this.totalRange();
	        var min = range.min + offset;
	        var max = range.max + offset;

	        return this.limitRange(min, max, 0, totalRange.max, offset);
	    },

	    pointsRange: function(start, end) {
	        var ref = this.options;
	        var reverse = ref.reverse;
	        var vertical = ref.vertical;
	        var valueAxis = vertical ? Y : X;
	        var range = this.totalRangeIndices(true);
	        var ref$1 = this.scaleOptions();
	        var scale = ref$1.scale;
	        var box = ref$1.box;
	        var lineStart = box[valueAxis + (reverse ? 2 : 1)];

	        var diffStart = start[valueAxis] - lineStart;
	        var diffEnd = end[valueAxis] - lineStart;

	        var min = range.min + diffStart / scale;
	        var max = range.min + diffEnd / scale;
	        var rangeMin = Math.min(min, max);
	        var rangeMax = Math.max(min, max);

	        if (rangeMax - rangeMin >= MIN_CATEGORY_POINTS_RANGE) {
	            return {
	                min: rangeMin,
	                max: rangeMax
	            };
	        }
	    },

	    valueRange: function() {
	        return this.range();
	    },

	    totalIndex: function(value) {
	        var options = this.options;
	        var index = this._categoriesMap ?
	            this._categoriesMap.get(value) : indexOf(value, options.srcCategories);

	        return index;
	    },

	    currentRangeIndices: function() {
	        var options = this.options;
	        var min = 0;

	        if (isNumber(options.min)) {
	            min = Math.floor(options.min);
	        }

	        var max;
	        if (isNumber(options.max)) {
	            max = options.justified ? Math.floor(options.max) : Math.ceil(options.max) - 1;
	        } else {
	            max = this.totalCount() - 1;
	        }

	        return {
	            min: min,
	            max: max
	        };
	    },

	    mapCategories: function() {
	        if (!this._categoriesMap) {
	            var map$$1 = this._categoriesMap = new HashMap();
	            var srcCategories = this.options.srcCategories;
	            for (var idx = 0; idx < srcCategories.length; idx++) {
	                map$$1.set(srcCategories[idx], idx);
	            }
	        }
	    },

	    totalCount: function() {
	        return Math.max(this.options.srcCategories.length, this._seriesMax || 0);
	    }
	});

	setDefaultOptions(CategoryAxis, {
	    type: "category",
	    vertical: false,
	    majorGridLines: {
	        visible: false,
	        width: 1,
	        color: BLACK
	    },
	    labels: {
	        zIndex: 1
	    },
	    justified: false,
	    _deferLabels: true
	});

	var COORDINATE_LIMIT = 300000;

	var DateLabelFormats = {
	    milliseconds: "HH:mm:ss.fff",
	    seconds: "HH:mm:ss",
	    minutes: "HH:mm",
	    hours: "HH:mm",
	    days: "M/d",
	    weeks: "M/d",
	    months: "MMM 'yy",
	    years: "yyyy"
	};

	var ZERO_THRESHOLD = 0.2;

	var AUTO = "auto";
	var BASE_UNITS = [
	    MILLISECONDS, SECONDS, MINUTES, HOURS, DAYS, WEEKS, MONTHS, YEARS
	];
	var FIT = "fit";

	function categoryRange(categories) {
	    var range = categories._range;
	    if (!range) {
	        range = categories._range = sparseArrayLimits(categories);
	        range.min = toDate(range.min);
	        range.max = toDate(range.max);
	    }

	    return range;
	}

	var EmptyDateRange = Class.extend({
	    init: function(options) {
	        this.options = options;
	    },

	    displayIndices: function() {
	        return {
	            min: 0,
	            max: 1
	        };
	    },

	    displayRange: function() {
	        return {};
	    },

	    total: function() {
	        return {};
	    },

	    valueRange: function() {
	        return {};
	    },

	    valueIndex: function() {
	        return -1;
	    },

	    values: function() {
	        return [];
	    },

	    totalIndex: function() {
	        return -1;
	    },

	    valuesCount: function() {
	        return 0;
	    },

	    totalCount: function() {
	        return 0;
	    },

	    dateAt: function() {
	        return null;
	    }
	});

	var DateRange = Class.extend({
	    init: function(start, end, options) {
	        this.options = options;
	        options.baseUnitStep = options.baseUnitStep || 1;

	        var roundToBaseUnit = options.roundToBaseUnit;
	        var justified = options.justified;

	        this.start = addDuration(start, 0, options.baseUnit, options.weekStartDay);
	        var lowerEnd = this.roundToTotalStep(end);
	        var expandEnd = !justified && dateEquals(end, lowerEnd) && !options.justifyEnd;

	        this.end = this.roundToTotalStep(end, !justified, expandEnd ? 1 : 0);

	        var min = options.min || start;
	        this.valueStart = this.roundToTotalStep(min);
	        this.displayStart = roundToBaseUnit ? this.valueStart : min;

	        var max = options.max;
	        if (!max) {
	            this.valueEnd = lowerEnd;
	            this.displayEnd = roundToBaseUnit || expandEnd ? this.end : end;
	        } else {
	            var next = !justified && dateEquals(max, this.roundToTotalStep(max)) ? -1 : 0;
	            this.valueEnd = this.roundToTotalStep(max, false, next);
	            this.displayEnd = roundToBaseUnit ? this.roundToTotalStep(max, !justified) : options.max;
	        }

	        if (this.valueEnd < this.valueStart) {
	            this.valueEnd = this.valueStart;
	        }
	        if (this.displayEnd <= this.displayStart) {
	            this.displayEnd = this.roundToTotalStep(this.displayStart, false, 1);
	        }
	    },

	    displayRange: function() {
	        return {
	            min: this.displayStart,
	            max: this.displayEnd
	        };
	    },

	    displayIndices: function() {
	        if (!this._indices) {
	            var options = this.options;

	            var baseUnit = options.baseUnit;
	            var baseUnitStep = options.baseUnitStep;

	            var minIdx = dateIndex(this.displayStart, this.valueStart, baseUnit, baseUnitStep);
	            var maxIdx = dateIndex(this.displayEnd, this.valueStart, baseUnit, baseUnitStep);

	            this._indices = { min: minIdx, max: maxIdx };
	        }

	        return this._indices;
	    },

	    total: function() {
	        return {
	            min: this.start,
	            max: this.end
	        };
	    },

	    totalCount: function() {
	        var last$$1 = this.totalIndex(this.end);

	        return last$$1 + (this.options.justified ? 1 : 0);
	    },

	    valueRange: function() {
	        return {
	            min: this.valueStart,
	            max: this.valueEnd
	        };
	    },

	    valueIndex: function(value) {
	        var options = this.options;
	        return Math.floor(dateIndex(value, this.valueStart, options.baseUnit, options.baseUnitStep));
	    },

	    totalIndex: function(value) {
	        var options = this.options;
	        return Math.floor(dateIndex(value, this.start, options.baseUnit, options.baseUnitStep));
	    },

	    dateIndex: function(value) {
	        var options = this.options;
	        return dateIndex(value, this.valueStart, options.baseUnit, options.baseUnitStep);
	    },

	    valuesCount: function() {
	        var maxIdx = this.valueIndex(this.valueEnd);

	        return maxIdx + 1;
	    },

	    values: function() {
	        var values = this._values;
	        if (!values) {
	            var options = this.options;
	            var range = this.valueRange();
	            this._values = values = [];

	            for (var date = range.min; date <= range.max;) {
	                values.push(date);
	                date = addDuration(date, options.baseUnitStep, options.baseUnit, options.weekStartDay);
	            }
	        }

	        return values;
	    },

	    dateAt: function(index, total) {
	        var options = this.options;

	        return addDuration(total ? this.start : this.valueStart, options.baseUnitStep * index, options.baseUnit, options.weekStartDay);
	    },

	    roundToTotalStep: function(value, upper, next) {
	        var ref = this.options;
	        var baseUnit = ref.baseUnit;
	        var baseUnitStep = ref.baseUnitStep;
	        var weekStartDay = ref.weekStartDay;
	        var start = this.start;

	        var step = dateIndex(value, start, baseUnit, baseUnitStep);
	        var roundedStep = upper ? Math.ceil(step) : Math.floor(step);

	        if (next) {
	            roundedStep += next;
	        }

	        return addDuration(start, roundedStep * baseUnitStep, baseUnit, weekStartDay);
	    }
	});

	function autoBaseUnit(options, startUnit, startStep) {
	    var categoryLimits = categoryRange(options.categories);
	    var span = (options.max || categoryLimits.max) - (options.min || categoryLimits.min);
	    var autoBaseUnitSteps = options.autoBaseUnitSteps;
	    var maxDateGroups = options.maxDateGroups;
	    var autoUnit = options.baseUnit === FIT;
	    var autoUnitIx = startUnit ? BASE_UNITS.indexOf(startUnit) : 0;
	    var baseUnit = autoUnit ? BASE_UNITS[autoUnitIx++] : options.baseUnit;
	    var units = span / TIME_PER_UNIT[baseUnit];
	    var totalUnits = units;
	    var unitSteps, step, nextStep;

	    while (!step || units >= maxDateGroups) {
	        unitSteps = unitSteps || autoBaseUnitSteps[baseUnit].slice(0);

	        do {
	            nextStep = unitSteps.shift();
	        } while (nextStep && startUnit === baseUnit && nextStep < startStep);

	        if (nextStep) {
	            step = nextStep;
	            units = totalUnits / step;
	        } else if (baseUnit === last(BASE_UNITS)) {
	            step = Math.ceil(totalUnits / maxDateGroups);
	            break;
	        } else if (autoUnit) {
	            baseUnit = BASE_UNITS[autoUnitIx++] || last(BASE_UNITS);
	            totalUnits = span / TIME_PER_UNIT[baseUnit];
	            unitSteps = null;
	        } else {
	            if (units > maxDateGroups) {
	                step = Math.ceil(totalUnits / maxDateGroups);
	            }
	            break;
	        }
	    }

	    options.baseUnitStep = step;
	    options.baseUnit = baseUnit;
	}

	function defaultBaseUnit(options) {
	    var categories = options.categories;
	    var count = defined(categories) ? categories.length : 0;
	    var minDiff = MAX_VALUE;
	    var lastCategory, unit;

	    for (var categoryIx = 0; categoryIx < count; categoryIx++) {
	        var category = categories[categoryIx];

	        if (category && lastCategory) {
	            var diff = absoluteDateDiff(category, lastCategory);
	            if (diff > 0) {
	                minDiff = Math.min(minDiff, diff);

	                if (minDiff >= TIME_PER_YEAR) {
	                    unit = YEARS;
	                } else if (minDiff >= TIME_PER_MONTH - TIME_PER_DAY * 3) {
	                    unit = MONTHS;
	                } else if (minDiff >= TIME_PER_WEEK) {
	                    unit = WEEKS;
	                } else if (minDiff >= TIME_PER_DAY) {
	                    unit = DAYS;
	                } else if (minDiff >= TIME_PER_HOUR) {
	                    unit = HOURS;
	                } else if (minDiff >= TIME_PER_MINUTE) {
	                    unit = MINUTES;
	                } else {
	                    unit = SECONDS;
	                }
	            }
	        }

	        lastCategory = category;
	    }

	    options.baseUnit = unit || DAYS;
	}

	function initUnit(options) {
	    var baseUnit = (options.baseUnit || "").toLowerCase();
	    var useDefault = baseUnit !== FIT && !inArray(baseUnit, BASE_UNITS);

	    if (useDefault) {
	        defaultBaseUnit(options);
	    }

	    if (baseUnit === FIT || options.baseUnitStep === AUTO) {
	        autoBaseUnit(options);
	    }

	    return options;
	}

	var DateCategoryAxis = CategoryAxis.extend({
	    clone: function() {
	        var copy = new DateCategoryAxis($.extend({}, this.options), this.chartService);
	        copy.createLabels();

	        return copy;
	    },

	    categoriesHash: function() {
	        var start = this.dataRange.total().min;
	        return this.options.baseUnit + this.options.baseUnitStep + start;
	    },

	    initUserOptions: function(options) {
	        return options;
	    },

	    initFields: function() {
	        CategoryAxis.fn.initFields.call(this);

	        var chartService = this.chartService;
	        var intlService = chartService.intl;
	        var options = this.options;

	        var categories = options.categories || [];
	        if (!categories._parsed) {
	            categories = parseDates(intlService, categories);
	            categories._parsed = true;
	        }

	        options = deepExtend({
	            roundToBaseUnit: true
	        }, options, {
	            categories: categories,
	            min: parseDate(intlService, options.min),
	            max: parseDate(intlService, options.max),
	            weekStartDay: firstDay(options, intlService)
	        });

	        if (chartService.panning && chartService.isPannable(options.vertical ? Y : X)) {
	            options.roundToBaseUnit = false;
	        }

	        options.userSetBaseUnit = options.userSetBaseUnit || options.baseUnit;
	        options.userSetBaseUnitStep = options.userSetBaseUnitStep || options.baseUnitStep;

	        this.options = options;
	        options.srcCategories = categories;

	        if (categories.length > 0) {
	            var range = categoryRange(categories);
	            var maxDivisions = options.maxDivisions;

	            this.dataRange = new DateRange(range.min, range.max, initUnit(options));

	            if (maxDivisions) {
	                var dataRange = this.dataRange.displayRange();

	                var divisionOptions = $.extend({}, options, {
	                    justified: true,
	                    roundToBaseUnit: false,
	                    baseUnit: 'fit',
	                    min: dataRange.min,
	                    max: dataRange.max,
	                    maxDateGroups: maxDivisions
	                });

	                var dataRangeOptions = this.dataRange.options;

	                autoBaseUnit(divisionOptions, dataRangeOptions.baseUnit, dataRangeOptions.baseUnitStep);

	                this.divisionRange = new DateRange(range.min, range.max, divisionOptions);
	            } else {
	                this.divisionRange = this.dataRange;
	            }

	        } else {
	            options.baseUnit = options.baseUnit || DAYS;
	            this.dataRange = this.divisionRange = new EmptyDateRange(options);
	        }

	        this.rangeLabels = [];
	    },

	    tickIndices: function(stepSize) {
	        var ref = this;
	        var dataRange = ref.dataRange;
	        var divisionRange = ref.divisionRange;
	        var valuesCount = divisionRange.valuesCount();

	        if (!this.options.maxDivisions || !valuesCount) {
	            return CategoryAxis.fn.tickIndices.call(this, stepSize);
	        }

	        var indices = [];
	        var values = divisionRange.values();
	        var offset = 0;

	        if (!this.options.justified) {
	            values = values.concat(divisionRange.dateAt(valuesCount));
	            offset = 0.5;//align ticks to the center of not justified categories
	        }

	        for (var idx = 0; idx < values.length; idx++) {
	            indices.push(dataRange.dateIndex(values[idx]) + offset);
	            if (stepSize !== 1 && idx >= 1) {
	                var last$$1 = indices.length - 1;
	                indices.splice(idx, 0, indices[last$$1 - 1] + (indices[last$$1] - indices[last$$1 - 1]) * stepSize);
	            }
	        }

	        return indices;
	    },

	    shouldRenderNote: function(value) {
	        var range = this.range();
	        var categories = this.options.categories || [];

	        return dateComparer(value, range.min) >= 0 && dateComparer(value, range.max) <= 0 && categories.length;
	    },

	    parseNoteValue: function(value) {
	        return parseDate(this.chartService.intl, value);
	    },

	    noteSlot: function(value) {
	        return this.getSlot(value);
	    },

	    translateRange: function(delta) {
	        var options = this.options;
	        var baseUnit = options.baseUnit;
	        var weekStartDay = options.weekStartDay;
	        var vertical = options.vertical;
	        var lineBox = this.lineBox();
	        var size = vertical ? lineBox.height() : lineBox.width();
	        var range = this.range();
	        var scale = size / (range.max - range.min);
	        var offset = round(delta / scale, DEFAULT_PRECISION);

	        if (range.min && range.max) {
	            var from = addTicks(options.min || range.min, offset);
	            var to = addTicks(options.max || range.max, offset);

	            range = {
	                min: addDuration(from, 0, baseUnit, weekStartDay),
	                max: addDuration(to, 0, baseUnit, weekStartDay)
	            };
	        }

	        return range;
	    },

	    scaleRange: function(delta) {
	        var rounds = Math.abs(delta);
	        var result = this.range();
	        var from = result.min;
	        var to = result.max;

	        if (from && to) {
	            while (rounds--) {
	                var range = dateDiff(from, to);
	                var step = Math.round(range * 0.1);
	                if (delta < 0) {
	                    from = addTicks(from, step);
	                    to = addTicks(to, -step);
	                } else {
	                    from = addTicks(from, -step);
	                    to = addTicks(to, step);
	                }
	            }

	            result = { min: from, max: to };
	        }

	        return result;
	    },

	    labelsRange: function() {
	        return {
	            min: this.options.labels.skip,
	            max: this.divisionRange.valuesCount()
	        };
	    },

	    pan: function(delta) {
	        if (this.isEmpty()) {
	            return null;
	        }

	        var options = this.options;
	        var lineBox = this.lineBox();
	        var size = options.vertical ? lineBox.height() : lineBox.width();
	        var ref = this.dataRange.displayRange();
	        var min = ref.min;
	        var max = ref.max;
	        var totalLimits = this.dataRange.total();
	        var scale = size / (max - min);
	        var offset = round(delta / scale, DEFAULT_PRECISION) * (options.reverse ? -1 : 1);
	        var from = addTicks(min, offset);
	        var to = addTicks(max, offset);

	        var panRange = this.limitRange(toTime(from), toTime(to), toTime(totalLimits.min), toTime(totalLimits.max), offset);

	        if (panRange) {
	            panRange.min = toDate(panRange.min);
	            panRange.max = toDate(panRange.max);
	            panRange.baseUnit = options.baseUnit;
	            panRange.baseUnitStep = options.baseUnitStep || 1;
	            panRange.userSetBaseUnit = options.userSetBaseUnit;
	            panRange.userSetBaseUnitStep = options.userSetBaseUnitStep;

	            return panRange;
	        }
	    },

	    pointsRange: function(start, end) {
	        if (this.isEmpty()) {
	            return null;
	        }

	        var pointsRange = CategoryAxis.fn.pointsRange.call(this, start, end);
	        var datesRange = this.dataRange.displayRange();
	        var indicesRange = this.dataRange.displayIndices();
	        var scale = dateDiff(datesRange.max, datesRange.min) / (indicesRange.max - indicesRange.min);
	        var options = this.options;

	        var min = addTicks(datesRange.min, pointsRange.min * scale);
	        var max = addTicks(datesRange.min, pointsRange.max * scale);

	        return {
	            min: min,
	            max: max,
	            baseUnit: options.userSetBaseUnit || options.baseUnit,
	            baseUnitStep: options.userSetBaseUnitStep || options.baseUnitStep
	        };
	    },

	    zoomRange: function(delta) {
	        if (this.isEmpty()) {
	            return null;
	        }

	        var options = this.options;
	        var fit = options.userSetBaseUnit === FIT;
	        var totalLimits = this.dataRange.total();
	        var ref = this.dataRange.displayRange();
	        var rangeMin = ref.min;
	        var rangeMax = ref.max;
	        var ref$1 = this.dataRange.options;
	        var weekStartDay = ref$1.weekStartDay;
	        var baseUnit = ref$1.baseUnit;
	        var baseUnitStep = ref$1.baseUnitStep;
	        var min = addDuration(rangeMin, delta * baseUnitStep, baseUnit, weekStartDay);
	        var max = addDuration(rangeMax, -delta * baseUnitStep, baseUnit, weekStartDay);

	        if (fit) {
	            var autoBaseUnitSteps = options.autoBaseUnitSteps;
	            var maxDateGroups = options.maxDateGroups;

	            var maxDiff = last(autoBaseUnitSteps[baseUnit]) * maxDateGroups * TIME_PER_UNIT[baseUnit];
	            var rangeDiff = dateDiff(rangeMax, rangeMin);
	            var diff = dateDiff(max, min);
	            var baseUnitIndex = BASE_UNITS.indexOf(baseUnit);
	            var autoBaseUnitStep, ticks;

	            if (diff < TIME_PER_UNIT[baseUnit] && baseUnit !== MILLISECONDS) {
	                baseUnit = BASE_UNITS[baseUnitIndex - 1];
	                autoBaseUnitStep = last(autoBaseUnitSteps[baseUnit]);
	                ticks = (rangeDiff - (maxDateGroups - 1) * autoBaseUnitStep * TIME_PER_UNIT[baseUnit]) / 2;
	                min = addTicks(rangeMin, ticks);
	                max = addTicks(rangeMax, -ticks);

	            } else if (diff > maxDiff && baseUnit !== YEARS) {
	                var stepIndex = 0;

	                do {
	                    baseUnitIndex++;
	                    baseUnit = BASE_UNITS[baseUnitIndex];
	                    stepIndex = 0;
	                    ticks = 2 * TIME_PER_UNIT[baseUnit];
	                    do {
	                        autoBaseUnitStep = autoBaseUnitSteps[baseUnit][stepIndex];
	                        stepIndex++;
	                    } while (stepIndex < autoBaseUnitSteps[baseUnit].length && ticks * autoBaseUnitStep < rangeDiff);
	                } while (baseUnit !== YEARS && ticks * autoBaseUnitStep < rangeDiff);

	                ticks = (ticks * autoBaseUnitStep - rangeDiff) / 2;
	                if (ticks > 0) {
	                    min = addTicks(rangeMin, -ticks);
	                    max = addTicks(rangeMax, ticks);
	                    min = addTicks(min, limitValue(max, totalLimits.min, totalLimits.max) - max);
	                    max = addTicks(max, limitValue(min, totalLimits.min, totalLimits.max) - min);
	                }
	            }
	        }

	        if (min < totalLimits.min) {
	            min = totalLimits.min;
	        }
	        if (max > totalLimits.max) {
	            max = totalLimits.max;
	        }

	        if (min && max && dateDiff(max, min) > 0) {
	            return {
	                min: min,
	                max: max,
	                baseUnit: options.userSetBaseUnit || options.baseUnit,
	                baseUnitStep: options.userSetBaseUnitStep || options.baseUnitStep
	            };
	        }
	    },

	    range: function() {
	        return this.dataRange.displayRange();
	    },

	    createLabels: function() {
	        CategoryAxis.fn.createLabels.call(this);
	        this.createRangeLabels();
	    },

	    clearLabels: function() {
	        CategoryAxis.fn.clearLabels.call(this);
	        this.rangeLabels = [];
	    },

	    arrangeLabels: function() {
	        this.arrangeRangeLabels();
	        CategoryAxis.fn.arrangeLabels.call(this);
	    },

	    arrangeRangeLabels: function() {
	        var ref = this;
	        var options = ref.options;
	        var rangeLabels = ref.rangeLabels;
	        if (rangeLabels.length === 0) {
	            return;
	        }

	        var lineBox = this.lineBox();
	        var vertical = options.vertical;
	        var mirror = options.rangeLabels.mirror || options.labels.mirror;

	        var firstLabel = rangeLabels[0];
	        if (firstLabel) {
	            var position = vertical ? lineBox.y1 - (firstLabel.box.height() / 2) : lineBox.x1;
	            this.positionLabel(firstLabel, mirror, position);
	        }

	        var lastLabel = rangeLabels[1];
	        if (lastLabel) {
	            var position$1 = vertical ? lineBox.y2 - (lastLabel.box.height() / 2) : lineBox.x2;
	            this.positionLabel(lastLabel, mirror, position$1);
	        }
	    },

	    autoRotateLabels: function() {
	        CategoryAxis.fn.autoRotateLabels.call(this);
	        this.autoRotateRangeLabels();
	    },

	    hideOutOfRangeLabels: function() {
	        CategoryAxis.fn.hideOutOfRangeLabels.call(this);
	        this.hideOverlappingLabels();
	    },

	    hideOverlappingLabels: function() {
	        var ref = this;
	        var rangeLabels = ref.rangeLabels;
	        var labels = ref.labels;
	        if (rangeLabels.length === 0) {
	            return;
	        }

	        function clip(rangeLabel, label) {
	            if (!label.options.visible || label.box.overlaps(rangeLabel.box)) {
	                label.options.visible = false;
	                return true;
	            }

	            return false;
	        }

	        var firstRangeLabel = rangeLabels[0];
	        if (firstRangeLabel && firstRangeLabel.options.visible) {
	            for (var i = 0; i < labels.length; i++) {
	                var overlaps = clip(firstRangeLabel, labels[i]);
	                if (!overlaps) {
	                    break;
	                }
	            }
	        }

	        var lastRangeLabel = rangeLabels[1];
	        if (lastRangeLabel && lastRangeLabel.options.visible) {
	            for (var i$1 = labels.length - 1; i$1 > 0; --i$1) {
	                var overlaps$1 = clip(lastRangeLabel, labels[i$1]);
	                if (!overlaps$1) {
	                    break;
	                }
	            }
	        }
	    },

	    contentBox: function() {
	        var box = CategoryAxis.fn.contentBox.call(this);
	        var rangeLabels = this.rangeLabels;

	        for (var i = 0; i < rangeLabels.length; i++) {
	            var label = rangeLabels[i];
	            if (label.options.visible) {
	                box.wrap(label.box);
	            }
	        }

	        return box;
	    },

	    createAxisLabel: function(index, labelOptions, labelContext) {
	        if (labelContext === void 0) { labelContext = {}; }

	        var options = this.options;
	        var dataItem = options.dataItems && !options.maxDivisions ? options.dataItems[index] : null;
	        var date = this.divisionRange.dateAt(index);
	        var unitFormat = labelOptions.dateFormats[this.divisionRange.options.baseUnit];

	        labelOptions.format = labelOptions.format || unitFormat;
	        labelContext.dataItem = dataItem;

	        var text = this.axisLabelText(date, labelOptions, labelContext);
	        if (text) {
	            return new AxisLabel(date, text, index, dataItem, labelOptions);
	        }
	    },

	    createRangeLabels: function() {
	        var this$1 = this;

	        var ref = this.divisionRange;
	        var displayStart = ref.displayStart;
	        var displayEnd = ref.displayEnd;
	        var options = this.options;
	        var labelOptions = $.extend({}, options.labels, options.rangeLabels, {
	            align: CENTER,
	            zIndex: options.zIndex
	        });

	        if (labelOptions.visible !== true) {
	            return;
	        }

	        this.normalizeLabelRotation(labelOptions);
	        labelOptions.alignRotation = CENTER;

	        if (labelOptions.rotation === "auto") {
	            labelOptions.rotation = 0;
	            options.autoRotateRangeLabels = true;
	        }

	        var unitFormat = labelOptions.dateFormats[this.divisionRange.options.baseUnit];
	        labelOptions.format = labelOptions.format || unitFormat;

	        var createLabel = function (index, date, text) {
	            if (text) {
	                var label = new AxisLabel(date, text, index, null, labelOptions);
	                this$1.append(label);
	                this$1.rangeLabels.push(label);
	            }
	        };

	        var startText = this.axisLabelText(displayStart, labelOptions, { index: 0, count: 2 });
	        createLabel(0, displayStart, startText);

	        var endText = this.axisLabelText(displayEnd, labelOptions, { index: 1, count: 2 });
	        createLabel(1, displayEnd, endText);
	    },

	    autoRotateRangeLabels: function() {
	        var this$1 = this;

	        var labels = this.rangeLabels;
	        if (!this.options.autoRotateRangeLabels || this.options.vertical || labels.length !== 2) {
	            return;
	        }

	        var rotateLabel = function (label, tickPositions, index) {
	            var width = Math.abs(tickPositions[index + 1] - tickPositions[index]) * 2;
	            var angle = this$1.autoRotateLabelAngle(label.box, width);
	            if (angle !== 0) {
	                label.options.rotation = angle;
	                label.reflow(new Box());
	            }
	        };

	        var tickPositions = this.getMajorTickPositions();
	        rotateLabel(labels[0], tickPositions, 0);
	        rotateLabel(labels[1], tickPositions, tickPositions.length - 2);
	    },

	    categoryIndex: function(value) {
	        return this.dataRange.valueIndex(value);
	    },

	    slot: function(from, to, limit) {
	        var dateRange = this.dataRange;
	        var start = from;
	        var end = to;

	        if (start instanceof Date) {
	            start = dateRange.dateIndex(start);
	        }

	        if (end instanceof Date) {
	            end = dateRange.dateIndex(end);
	        }

	        var slot = this.getSlot(start, end, limit);
	        if (slot) {
	            return slot.toRect();
	        }
	    },

	    getSlot: function(a, b, limit) {
	        var start = a;
	        var end = b;

	        if (typeof start === OBJECT) {
	            start = this.categoryIndex(start);
	        }

	        if (typeof end === OBJECT) {
	            end = this.categoryIndex(end);
	        }

	        return CategoryAxis.fn.getSlot.call(this, start, end, limit);
	    },

	    valueRange: function() {
	        var options = this.options;
	        var range = categoryRange(options.srcCategories);

	        return {
	            min: toDate(range.min),
	            max: toDate(range.max)
	        };
	    },

	    categoryAt: function(index, total) {
	        return this.dataRange.dateAt(index, total);
	    },

	    categoriesCount: function() {
	        return this.dataRange.valuesCount();
	    },

	    rangeIndices: function() {
	        return this.dataRange.displayIndices();
	    },

	    labelsBetweenTicks: function() {
	        return !this.divisionRange.options.justified;
	    },

	    prepareUserOptions: function() {
	        if (this.isEmpty()) {
	            return;
	        }

	        this.options.categories = this.dataRange.values();
	    },

	    getCategory: function(point) {
	        var index = this.pointCategoryIndex(point);

	        if (index === null) {
	            return null;
	        }

	        return this.dataRange.dateAt(index);
	    },

	    totalIndex: function(value) {
	        return this.dataRange.totalIndex(value);
	    },

	    currentRangeIndices: function() {
	        var range = this.dataRange.valueRange();
	        return {
	            min: this.dataRange.totalIndex(range.min),
	            max: this.dataRange.totalIndex(range.max)
	        };
	    },

	    totalRange: function() {
	        return this.dataRange.total();
	    },

	    totalCount: function() {
	        return this.dataRange.totalCount();
	    },

	    isEmpty: function() {
	        return !this.options.srcCategories.length;
	    },

	    roundedRange: function() {
	        if (this.options.roundToBaseUnit !== false || this.isEmpty()) {
	            return this.range();
	        }

	        var options = this.options;
	        var datesRange = categoryRange(options.srcCategories);

	        var dateRange = new DateRange(datesRange.min, datesRange.max, $.extend({}, options, {
	            justified: false,
	            roundToBaseUnit: true,
	            justifyEnd: options.justified
	        }));

	        return dateRange.displayRange();
	    }
	});

	setDefaultOptions(DateCategoryAxis, {
	    type: DATE,
	    labels: {
	        dateFormats: DateLabelFormats
	    },
	    rangeLabels: {
	        visible: false
	    },
	    autoBaseUnitSteps: {
	        milliseconds: [ 1, 10, 100 ],
	        seconds: [ 1, 2, 5, 15, 30 ],
	        minutes: [ 1, 2, 5, 15, 30 ],
	        hours: [ 1, 2, 3 ],
	        days: [ 1, 2, 3 ],
	        weeks: [ 1, 2 ],
	        months: [ 1, 2, 3, 6 ],
	        years: [ 1, 2, 3, 5, 10, 25, 50 ]
	    },
	    maxDateGroups: 10
	});

	function autoAxisMin(min, max, narrow) {
	    if (!min && !max) {
	        return 0;
	    }

	    var axisMin;

	    if (min >= 0 && max >= 0) {
	        var minValue = min === max ? 0 : min;

	        var diff = (max - minValue) / max;
	        if (narrow === false || (!narrow && diff > ZERO_THRESHOLD)) {
	            return 0;
	        }

	        axisMin = Math.max(0, minValue - ((max - minValue) / 2));
	    } else {
	        axisMin = min;
	    }

	    return axisMin;
	}

	function autoAxisMax(min, max, narrow) {
	    if (!min && !max) {
	        return 1;
	    }

	    var axisMax;

	    if (min <= 0 && max <= 0) {
	        var maxValue = min === max ? 0 : max;

	        var diff = Math.abs((maxValue - min) / maxValue);
	        if (narrow === false || (!narrow && diff > ZERO_THRESHOLD)) {
	            return 0;
	        }

	        axisMax = Math.min(0, maxValue - ((min - maxValue) / 2));
	    } else {
	        axisMax = max;
	    }

	    return axisMax;
	}

	function floor(value, step) {
	    return round(Math.floor(value / step) * step, DEFAULT_PRECISION);
	}

	function ceil(value, step) {
	    return round(Math.ceil(value / step) * step, DEFAULT_PRECISION);
	}

	function limitCoordinate(value) {
	    return Math.max(Math.min(value, COORDINATE_LIMIT), -COORDINATE_LIMIT);
	}

	var MIN_VALUE_RANGE = Math.pow(10, -DEFAULT_PRECISION + 1);

	var NumericAxis = Axis.extend({
	    init: function(seriesMin, seriesMax, options, chartService) {
	        Axis.fn.init.call(this, $.extend({}, options, {
	            seriesMin: seriesMin,
	            seriesMax: seriesMax
	        }), chartService);
	    },

	    initUserOptions: function(options) {
	        var autoOptions = autoAxisOptions(options.seriesMin, options.seriesMax, options);
	        this.totalOptions = totalAxisOptions(autoOptions, options);

	        return axisOptions(autoOptions, options);
	    },

	    initFields: function() {
	        this.totalMin = this.totalOptions.min;
	        this.totalMax = this.totalOptions.max;
	        this.totalMajorUnit = this.totalOptions.majorUnit;
	        this.seriesMin = this.options.seriesMin;
	        this.seriesMax = this.options.seriesMax;
	    },

	    clone: function() {
	        return new NumericAxis(
	            this.seriesMin,
	            this.seriesMax,
	            $.extend({}, this.options),
	            this.chartService
	        );
	    },

	    startValue: function() {
	        return 0;
	    },

	    range: function() {
	        var options = this.options;
	        return { min: options.min, max: options.max };
	    },

	    getDivisions: function(stepValue) {
	        if (stepValue === 0) {
	            return 1;
	        }

	        var options = this.options;
	        var range = options.max - options.min;

	        return Math.floor(round(range / stepValue, COORD_PRECISION)) + 1;
	    },

	    getTickPositions: function(unit, skipUnit) {
	        var options = this.options;
	        var vertical = options.vertical;
	        var reverse = options.reverse;
	        var lineBox = this.lineBox();
	        var lineSize = vertical ? lineBox.height() : lineBox.width();
	        var range = options.max - options.min;
	        var scale = lineSize / range;
	        var step = unit * scale;
	        var divisions = this.getDivisions(unit);
	        var dir = (vertical ? -1 : 1) * (reverse ? -1 : 1);
	        var startEdge = dir === 1 ? 1 : 2;
	        var positions = [];
	        var pos = lineBox[(vertical ? Y : X) + startEdge];
	        var skipStep = 0;

	        if (skipUnit) {
	            skipStep = skipUnit / unit;
	        }

	        for (var idx = 0; idx < divisions; idx++) {
	            if (idx % skipStep !== 0) {
	                positions.push(round(pos, COORD_PRECISION));
	            }

	            pos = pos + step * dir;
	        }

	        return positions;
	    },

	    getMajorTickPositions: function() {
	        return this.getTickPositions(this.options.majorUnit);
	    },

	    getMinorTickPositions: function() {
	        return this.getTickPositions(this.options.minorUnit);
	    },

	    getSlot: function(a, b, limit) {
	        if (limit === void 0) { limit = false; }

	        var options = this.options;
	        var vertical = options.vertical;
	        var reverse = options.reverse;
	        var valueAxis = vertical ? Y : X;
	        var lineBox = this.lineBox();
	        var lineStart = lineBox[valueAxis + (reverse ? 2 : 1)];
	        var lineSize = vertical ? lineBox.height() : lineBox.width();
	        var dir = reverse ? -1 : 1;
	        var step = dir * (lineSize / (options.max - options.min));
	        var slotBox = new Box(lineBox.x1, lineBox.y1, lineBox.x1, lineBox.y1);

	        var start = a;
	        var end = b;

	        if (!defined(start)) {
	            start = end || 0;
	        }

	        if (!defined(end)) {
	            end = start || 0;
	        }

	        if (limit) {
	            start = Math.max(Math.min(start, options.max), options.min);
	            end = Math.max(Math.min(end, options.max), options.min);
	        }

	        var p1, p2;

	        if (vertical) {
	            p1 = options.max - Math.max(start, end);
	            p2 = options.max - Math.min(start, end);
	        } else {
	            p1 = Math.min(start, end) - options.min;
	            p2 = Math.max(start, end) - options.min;
	        }

	        slotBox[valueAxis + 1] = limitCoordinate(lineStart + step * (reverse ? p2 : p1));
	        slotBox[valueAxis + 2] = limitCoordinate(lineStart + step * (reverse ? p1 : p2));

	        return slotBox;
	    },

	    getValue: function(point) {
	        var options = this.options;
	        var vertical = options.vertical;
	        var reverse = options.reverse;
	        var max = Number(options.max);
	        var min = Number(options.min);
	        var valueAxis = vertical ? Y : X;
	        var lineBox = this.lineBox();
	        var lineStart = lineBox[valueAxis + (reverse ? 2 : 1)];
	        var lineSize = vertical ? lineBox.height() : lineBox.width();
	        var dir = reverse ? -1 : 1;
	        var offset = dir * (point[valueAxis] - lineStart);
	        var step = (max - min) / lineSize;
	        var valueOffset = offset * step;

	        if (offset < 0 || offset > lineSize) {
	            return null;
	        }

	        var value = vertical ?
	                max - valueOffset :
	                min + valueOffset;

	        return round(value, DEFAULT_PRECISION);
	    },

	    translateRange: function(delta) {
	        var options = this.options;
	        var vertical = options.vertical;
	        var reverse = options.reverse;
	        var max = options.max;
	        var min = options.min;
	        var lineBox = this.lineBox();
	        var size = vertical ? lineBox.height() : lineBox.width();
	        var range = max - min;
	        var scale = size / range;
	        var offset = round(delta / scale, DEFAULT_PRECISION);

	        if ((vertical || reverse) && !(vertical && reverse )) {
	            offset = -offset;
	        }

	        return {
	            min: min + offset,
	            max: max + offset,
	            offset: offset
	        };
	    },

	    scaleRange: function(delta) {
	        var options = this.options;
	        var offset = -delta * options.majorUnit;

	        return {
	            min: options.min - offset,
	            max: options.max + offset
	        };
	    },

	    labelsCount: function() {
	        return this.getDivisions(this.options.majorUnit);
	    },

	    createAxisLabel: function(index, labelOptions, labelContext) {
	        var options = this.options;
	        var value = round(options.min + (index * options.majorUnit), DEFAULT_PRECISION);
	        var text = this.axisLabelText(value, labelOptions, labelContext);

	        return new AxisLabel(value, text, index, null, labelOptions);
	    },

	    shouldRenderNote: function(value) {
	        var range = this.range();
	        return range.min <= value && value <= range.max;
	    },

	    pan: function(delta) {
	        var range = this.translateRange(delta);
	        return this.limitRange(range.min, range.max, this.totalMin, this.totalMax, range.offset);
	    },

	    pointsRange: function(start, end) {
	        var startValue = this.getValue(start);
	        var endValue = this.getValue(end);
	        var min = Math.min(startValue, endValue);
	        var max = Math.max(startValue, endValue);

	        if (this.isValidRange(min, max)) {
	            return {
	                min: min,
	                max: max
	            };
	        }
	    },

	    zoomRange: function(delta) {
	        var ref = this;
	        var totalMin = ref.totalMin;
	        var totalMax = ref.totalMax;
	        var newRange = this.scaleRange(delta);
	        var min = limitValue(newRange.min, totalMin, totalMax);
	        var max = limitValue(newRange.max, totalMin, totalMax);

	        if (this.isValidRange(min, max)) {
	            return {
	                min: min,
	                max: max
	            };
	        }
	    },

	    isValidRange: function(min, max) {
	        return max - min > MIN_VALUE_RANGE;
	    }
	});

	function autoAxisOptions(seriesMin, seriesMax, options) {
	    var narrowRange = options.narrowRange;

	    var autoMin = autoAxisMin(seriesMin, seriesMax, narrowRange);
	    var autoMax = autoAxisMax(seriesMin, seriesMax, narrowRange);

	    var majorUnit = autoMajorUnit(autoMin, autoMax);
	    var autoOptions = {
	        majorUnit: majorUnit
	    };

	    if (options.roundToMajorUnit !== false) {
	        if (autoMin < 0 && remainderClose(autoMin, majorUnit, 1 / 3)) {
	            autoMin -= majorUnit;
	        }

	        if (autoMax > 0 && remainderClose(autoMax, majorUnit, 1 / 3)) {
	            autoMax += majorUnit;
	        }
	    }

	    autoOptions.min = floor(autoMin, majorUnit);
	    autoOptions.max = ceil(autoMax, majorUnit);

	    return autoOptions;
	}

	function totalAxisOptions(autoOptions, options) {
	    return {
	        min: defined(options.min) ? Math.min(autoOptions.min, options.min) : autoOptions.min,
	        max: defined(options.max) ? Math.max(autoOptions.max, options.max) : autoOptions.max,
	        majorUnit: autoOptions.majorUnit
	    };
	}

	function clearNullValues(options, fields) {
	    for (var idx = 0; idx < fields.length; idx++) {
	        var field = fields[idx];
	        if (options[field] === null) {
	            options[field] = undefined;
	        }
	    }
	}

	function axisOptions(autoOptions, userOptions) {
	    var options = userOptions;
	    var userSetMin, userSetMax;

	    if (userOptions) {
	        clearNullValues(userOptions, [ 'min', 'max' ]);

	        userSetMin = defined(userOptions.min);
	        userSetMax = defined(userOptions.max);

	        var userSetLimits = userSetMin || userSetMax;

	        if (userSetLimits) {
	            if (userOptions.min === userOptions.max) {
	                if (userOptions.min > 0) {
	                    userOptions.min = 0;
	                } else {
	                    userOptions.max = 1;
	                }
	            }
	        }

	        if (userOptions.majorUnit) {
	            autoOptions.min = floor(autoOptions.min, userOptions.majorUnit);
	            autoOptions.max = ceil(autoOptions.max, userOptions.majorUnit);
	        } else if (userSetLimits) {
	            options = deepExtend(autoOptions, userOptions);

	            // Determine an auto major unit after min/max have been set
	            autoOptions.majorUnit = autoMajorUnit(options.min, options.max);
	        }
	    }

	    autoOptions.minorUnit = (options.majorUnit || autoOptions.majorUnit) / 5;

	    var result = deepExtend(autoOptions, options);
	    if (result.min >= result.max) {
	        if (userSetMin && !userSetMax) {
	            result.max = result.min + result.majorUnit;
	        } else if (!userSetMin && userSetMax) {
	            result.min = result.max - result.majorUnit;
	        }
	    }

	    return result;
	}

	function remainderClose(value, divisor, ratio) {
	    var remainder = round(Math.abs(value % divisor), DEFAULT_PRECISION);
	    var threshold = divisor * (1 - ratio);

	    return remainder === 0 || remainder > threshold;
	}

	setDefaultOptions(NumericAxis, {
	    type: "numeric",
	    min: 0,
	    max: 1,
	    vertical: true,
	    majorGridLines: {
	        visible: true,
	        width: 1,
	        color: BLACK
	    },
	    labels: {
	        format: "#.####################"
	    },
	    zIndex: 1
	});

	var DateValueAxis = Axis.extend({
	    init: function(seriesMin, seriesMax, axisOptions, chartService) {
	        var min = toDate(seriesMin);
	        var max = toDate(seriesMax);

	        var intlService = chartService.intl;
	        var options = axisOptions || {};
	        options = deepExtend(options || {}, {
	            min: parseDate(intlService, options.min),
	            max: parseDate(intlService, options.max),
	            axisCrossingValue: parseDates(intlService, options.axisCrossingValues || options.axisCrossingValue),
	            weekStartDay: firstDay(options, intlService)
	        });
	        options = applyDefaults(min, max, options);

	        Axis.fn.init.call(this, options, chartService);

	        this.intlService = intlService;
	        this.seriesMin = min;
	        this.seriesMax = max;

	        var weekStartDay = options.weekStartDay || 0;
	        this.totalMin = toTime(floorDate(toTime(min) - 1, options.baseUnit, weekStartDay));
	        this.totalMax = toTime(ceilDate(toTime(max) + 1, options.baseUnit, weekStartDay));
	    },

	    clone: function() {
	        return new DateValueAxis(this.seriesMin, this.seriesMax, $.extend({}, this.options), this.chartService);
	    },

	    range: function() {
	        var options = this.options;
	        return { min: options.min, max: options.max };
	    },

	    getDivisions: function(stepValue) {
	        var options = this.options;

	        return Math.floor(
	            duration(options.min, options.max, options.baseUnit) / stepValue + 1
	        );
	    },

	    getTickPositions: function(step) {
	        var options = this.options;
	        var vertical = options.vertical;
	        var lineBox = this.lineBox();
	        var dir = (vertical ? -1 : 1) * (options.reverse ? -1 : 1);
	        var startEdge = dir === 1 ? 1 : 2;
	        var start = lineBox[(vertical ? Y : X) + startEdge];
	        var divisions = this.getDivisions(step);
	        var timeRange = dateDiff(options.max, options.min);
	        var lineSize = vertical ? lineBox.height() : lineBox.width();
	        var scale = lineSize / timeRange;
	        var weekStartDay = options.weekStartDay || 0;

	        var positions = [ start ];
	        for (var i = 1; i < divisions; i++) {
	            var date = addDuration(options.min, i * step, options.baseUnit, weekStartDay);
	            var pos = start + dateDiff(date, options.min) * scale * dir;

	            positions.push(round(pos, COORD_PRECISION));
	        }

	        return positions;
	    },

	    getMajorTickPositions: function() {
	        return this.getTickPositions(this.options.majorUnit);
	    },

	    getMinorTickPositions: function() {
	        return this.getTickPositions(this.options.minorUnit);
	    },

	    getSlot: function(a, b, limit) {
	        return NumericAxis.prototype.getSlot.call(
	            this, parseDate(this.intlService, a), parseDate(this.intlService, b), limit
	        );
	    },

	    getValue: function(point) {
	        var value = NumericAxis.prototype.getValue.call(this, point);

	        return value !== null ? toDate(value) : null;
	    },

	    labelsCount: function() {
	        return this.getDivisions(this.options.majorUnit);
	    },

	    createAxisLabel: function(index, labelOptions, labelContext) {
	        var options = this.options;
	        var offset = index * options.majorUnit;
	        var weekStartDay = options.weekStartDay || 0;
	        var date = options.min;

	        if (offset > 0) {
	            date = addDuration(date, offset, options.baseUnit, weekStartDay);
	        }

	        var unitFormat = labelOptions.dateFormats[options.baseUnit];
	        labelOptions.format = labelOptions.format || unitFormat;

	        var text = this.axisLabelText(date, labelOptions, labelContext);
	        return new AxisLabel(date, text, index, null, labelOptions);
	    },

	    translateRange: function(delta, exact) {
	        var options = this.options;
	        var baseUnit = options.baseUnit;
	        var weekStartDay = options.weekStartDay || 0;
	        var lineBox = this.lineBox();
	        var size = options.vertical ? lineBox.height() : lineBox.width();
	        var range = this.range();
	        var scale = size / dateDiff(range.max, range.min);
	        var offset = round(delta / scale, DEFAULT_PRECISION) * (options.reverse ? -1 : 1);
	        var from = addTicks(options.min, offset);
	        var to = addTicks(options.max, offset);

	        if (!exact) {
	            from = addDuration(from, 0, baseUnit, weekStartDay);
	            to = addDuration(to, 0, baseUnit, weekStartDay);
	        }

	        return {
	            min: from,
	            max: to,
	            offset: offset
	        };
	    },

	    scaleRange: function(delta) {
	        var ref = this.options;
	        var from = ref.min;
	        var to = ref.max;
	        var rounds = Math.abs(delta);

	        while (rounds--) {
	            var range = dateDiff(from, to);
	            var step = Math.round(range * 0.1);
	            if (delta < 0) {
	                from = addTicks(from, step);
	                to = addTicks(to, -step);
	            } else {
	                from = addTicks(from, -step);
	                to = addTicks(to, step);
	            }
	        }

	        return { min: from, max: to };
	    },

	    shouldRenderNote: function(value) {
	        var range = this.range();

	        return dateComparer(value, range.min) >= 0 && dateComparer(value, range.max) <= 0;
	    },

	    pan: function(delta) {
	        var range = this.translateRange(delta, true);
	        var limittedRange = this.limitRange(toTime(range.min), toTime(range.max), this.totalMin, this.totalMax, range.offset);

	        if (limittedRange) {
	            return {
	                min: toDate(limittedRange.min),
	                max: toDate(limittedRange.max)
	            };
	        }
	    },

	    pointsRange: function(start, end) {
	        var startValue = this.getValue(start);
	        var endValue = this.getValue(end);
	        var min = Math.min(startValue, endValue);
	        var max = Math.max(startValue, endValue);

	        return {
	            min: toDate(min),
	            max: toDate(max)
	        };
	    },

	    zoomRange: function(delta) {
	        var range = this.scaleRange(delta);
	        var min = toDate(limitValue(toTime(range.min), this.totalMin, this.totalMax));
	        var max = toDate(limitValue(toTime(range.max), this.totalMin, this.totalMax));

	        return {
	            min: min,
	            max: max
	        };
	    }
	});

	function timeUnits(delta) {
	    var unit = HOURS;

	    if (delta >= TIME_PER_YEAR) {
	        unit = YEARS;
	    } else if (delta >= TIME_PER_MONTH) {
	        unit = MONTHS;
	    } else if (delta >= TIME_PER_WEEK) {
	        unit = WEEKS;
	    } else if (delta >= TIME_PER_DAY) {
	        unit = DAYS;
	    }

	    return unit;
	}

	function applyDefaults(seriesMin, seriesMax, options) {
	    var min = options.min || seriesMin;
	    var max = options.max || seriesMax;
	    var baseUnit = options.baseUnit || (max && min ? timeUnits(absoluteDateDiff(max, min)) : HOURS);
	    var baseUnitTime = TIME_PER_UNIT[baseUnit];
	    var weekStartDay = options.weekStartDay || 0;
	    var autoMin = floorDate(toTime(min) - 1, baseUnit, weekStartDay) || toDate(max);
	    var autoMax = ceilDate(toTime(max) + 1, baseUnit, weekStartDay);
	    var userMajorUnit = options.majorUnit ? options.majorUnit : undefined;
	    var majorUnit = userMajorUnit || ceil(
	                        autoMajorUnit(autoMin.getTime(), autoMax.getTime()),
	                        baseUnitTime
	                    ) / baseUnitTime;
	    var actualUnits = duration(autoMin, autoMax, baseUnit);
	    var totalUnits = ceil(actualUnits, majorUnit);
	    var unitsToAdd = totalUnits - actualUnits;
	    var head = Math.floor(unitsToAdd / 2);
	    var tail = unitsToAdd - head;

	    if (!options.baseUnit) {
	        delete options.baseUnit;
	    }

	    options.baseUnit = options.baseUnit || baseUnit;
	    options.min = options.min || addDuration(autoMin, -head, baseUnit, weekStartDay);
	    options.max = options.max || addDuration(autoMax, tail, baseUnit, weekStartDay);
	    options.minorUnit = options.minorUnit || majorUnit / 5;
	    options.majorUnit = majorUnit;

	    return options;
	}

	setDefaultOptions(DateValueAxis, {
	    type: DATE,
	    majorGridLines: {
	        visible: true,
	        width: 1,
	        color: BLACK
	    },
	    labels: {
	        dateFormats: DateLabelFormats
	    }
	});

	var DEFAULT_MAJOR_UNIT = 10;

	var LogarithmicAxis = Axis.extend({
	    init: function(seriesMin, seriesMax, options, chartService) {

	        var axisOptions = deepExtend({ majorUnit: DEFAULT_MAJOR_UNIT, min: seriesMin, max: seriesMax }, options);
	        var base = axisOptions.majorUnit;
	        var autoMax = autoAxisMax$1(seriesMax, base);
	        var autoMin = autoAxisMin$1(seriesMin, seriesMax, axisOptions);
	        var range = initRange(autoMin, autoMax, axisOptions, options);

	        axisOptions.max = range.max;
	        axisOptions.min = range.min;
	        axisOptions.minorUnit = options.minorUnit || round(base - 1, DEFAULT_PRECISION);

	        Axis.fn.init.call(this, axisOptions, chartService);

	        this.totalMin = defined(options.min) ? Math.min(autoMin, options.min) : autoMin;
	        this.totalMax = defined(options.max) ? Math.max(autoMax, options.max) : autoMax;
	        this.logMin = round(log(range.min, base), DEFAULT_PRECISION);
	        this.logMax = round(log(range.max, base), DEFAULT_PRECISION);
	        this.seriesMin = seriesMin;
	        this.seriesMax = seriesMax;

	        this.createLabels();
	    },

	    clone: function() {
	        return new LogarithmicAxis(
	            this.seriesMin,
	            this.seriesMax,
	            $.extend({}, this.options),
	            this.chartService
	        );
	    },

	    startValue: function() {
	        return this.options.min;
	    },

	    getSlot: function(a, b, limit) {
	        var ref = this;
	        var options = ref.options;
	        var logMin = ref.logMin;
	        var logMax = ref.logMax;
	        var reverse = options.reverse;
	        var vertical = options.vertical;
	        var base = options.majorUnit;
	        var valueAxis = vertical ? Y : X;
	        var lineBox = this.lineBox();
	        var lineStart = lineBox[valueAxis + (reverse ? 2 : 1)];
	        var lineSize = vertical ? lineBox.height() : lineBox.width();
	        var dir = reverse ? -1 : 1;
	        var step = dir * (lineSize / (logMax - logMin));
	        var slotBox = new Box(lineBox.x1, lineBox.y1, lineBox.x1, lineBox.y1);
	        var start = a;
	        var end = b;

	        if (!defined(start)) {
	            start = end || 1;
	        }

	        if (!defined(end)) {
	            end = start || 1;
	        }

	        if (start <= 0 || end <= 0) {
	            return null;
	        }

	        if (limit) {
	            start = Math.max(Math.min(start, options.max), options.min);
	            end = Math.max(Math.min(end, options.max), options.min);
	        }

	        start = log(start, base);
	        end = log(end, base);

	        var p1, p2;

	        if (vertical) {
	            p1 = logMax - Math.max(start, end);
	            p2 = logMax - Math.min(start, end);
	        } else {
	            p1 = Math.min(start, end) - logMin;
	            p2 = Math.max(start, end) - logMin;
	        }

	        slotBox[valueAxis + 1] = limitCoordinate(lineStart + step * (reverse ? p2 : p1));
	        slotBox[valueAxis + 2] = limitCoordinate(lineStart + step * (reverse ? p1 : p2));

	        return slotBox;
	    },

	    getValue: function(point) {
	        var ref = this;
	        var options = ref.options;
	        var logMin = ref.logMin;
	        var logMax = ref.logMax;
	        var reverse = options.reverse;
	        var vertical = options.vertical;
	        var base = options.majorUnit;
	        var lineBox = this.lineBox();
	        var dir = vertical === reverse ? 1 : -1;
	        var startEdge = dir === 1 ? 1 : 2;
	        var lineSize = vertical ? lineBox.height() : lineBox.width();
	        var step = ((logMax - logMin) / lineSize);
	        var valueAxis = vertical ? Y : X;
	        var lineStart = lineBox[valueAxis + startEdge];
	        var offset = dir * (point[valueAxis] - lineStart);
	        var valueOffset = offset * step;

	        if (offset < 0 || offset > lineSize) {
	            return null;
	        }

	        var value = logMin + valueOffset;

	        return round(Math.pow(base, value), DEFAULT_PRECISION);
	    },

	    range: function() {
	        var options = this.options;
	        return { min: options.min, max: options.max };
	    },

	    scaleRange: function(delta) {
	        var base = this.options.majorUnit;
	        var offset = -delta;

	        return {
	            min: Math.pow(base, this.logMin - offset),
	            max: Math.pow(base, this.logMax + offset)
	        };
	    },

	    translateRange: function(delta) {
	        var ref = this;
	        var options = ref.options;
	        var logMin = ref.logMin;
	        var logMax = ref.logMax;
	        var reverse = options.reverse;
	        var vertical = options.vertical;
	        var base = options.majorUnit;
	        var lineBox = this.lineBox();
	        var size = vertical ? lineBox.height() : lineBox.width();
	        var scale = size / (logMax - logMin);
	        var offset = round(delta / scale, DEFAULT_PRECISION);

	        if ((vertical || reverse) && !(vertical && reverse )) {
	            offset = -offset;
	        }

	        return {
	            min: Math.pow(base, logMin + offset),
	            max: Math.pow(base, logMax + offset),
	            offset: offset
	        };
	    },

	    labelsCount: function() {
	        var floorMax = Math.floor(this.logMax);
	        var count = Math.floor(floorMax - this.logMin) + 1;

	        return count;
	    },

	    getMajorTickPositions: function() {
	        var ticks = [];

	        this.traverseMajorTicksPositions(function (position) {
	            ticks.push(position);
	        }, { step: 1, skip: 0 });

	        return ticks;
	    },

	    createTicks: function(lineGroup) {
	        var options = this.options;
	        var majorTicks = options.majorTicks;
	        var minorTicks = options.minorTicks;
	        var vertical = options.vertical;
	        var mirror = options.labels.mirror;
	        var lineBox = this.lineBox();
	        var ticks = [];
	        var tickLineOptions = {
	            // TODO
	            // _alignLines: options._alignLines,
	            vertical: vertical
	        };

	        function render(tickPosition, tickOptions) {
	            tickLineOptions.tickX = mirror ? lineBox.x2 : lineBox.x2 - tickOptions.size;
	            tickLineOptions.tickY = mirror ? lineBox.y1 - tickOptions.size : lineBox.y1;
	            tickLineOptions.position = tickPosition;

	            lineGroup.append(createAxisTick(tickLineOptions, tickOptions));
	        }

	        if (majorTicks.visible) {
	            this.traverseMajorTicksPositions(render, majorTicks);
	        }

	        if (minorTicks.visible) {
	            this.traverseMinorTicksPositions(render, minorTicks);
	        }

	        return ticks;
	    },

	    createGridLines: function(altAxis) {
	        var options = this.options;
	        var minorGridLines = options.minorGridLines;
	        var majorGridLines = options.majorGridLines;
	        var vertical = options.vertical;
	        var lineBox = altAxis.lineBox();
	        var lineOptions = {
	            lineStart: lineBox[vertical ? "x1" : "y1"],
	            lineEnd: lineBox[vertical ? "x2" : "y2"],
	            vertical: vertical
	        };
	        var majorTicks = [];

	        var container = this.gridLinesVisual();
	        function render(tickPosition, gridLine) {
	            if (!inArray(tickPosition, majorTicks)) {
	                lineOptions.position = tickPosition;
	                container.append(createAxisGridLine(lineOptions, gridLine));

	                majorTicks.push(tickPosition);
	            }
	        }

	        if (majorGridLines.visible) {
	            this.traverseMajorTicksPositions(render, majorGridLines);
	        }

	        if (minorGridLines.visible) {
	            this.traverseMinorTicksPositions(render, minorGridLines);
	        }

	        return container.children;
	    },

	    traverseMajorTicksPositions: function(callback, tickOptions) {
	        var ref = this._lineOptions();
	        var lineStart = ref.lineStart;
	        var step = ref.step;
	        var ref$1 = this;
	        var logMin = ref$1.logMin;
	        var logMax = ref$1.logMax;

	        for (var power = Math.ceil(logMin) + tickOptions.skip; power <= logMax; power += tickOptions.step) {
	            var position = round(lineStart + step * (power - logMin), DEFAULT_PRECISION);
	            callback(position, tickOptions);
	        }
	    },

	    traverseMinorTicksPositions: function(callback, tickOptions) {
	        var this$1 = this;

	        var ref = this.options;
	        var min = ref.min;
	        var max = ref.max;
	        var minorUnit = ref.minorUnit;
	        var base = ref.majorUnit;
	        var ref$1 = this._lineOptions();
	        var lineStart = ref$1.lineStart;
	        var step = ref$1.step;
	        var ref$2 = this;
	        var logMin = ref$2.logMin;
	        var logMax = ref$2.logMax;
	        var start = Math.floor(logMin);

	        for (var power = start; power < logMax; power++) {
	            var minorOptions = this$1._minorIntervalOptions(power);
	            for (var idx = tickOptions.skip; idx < minorUnit; idx += tickOptions.step) {
	                var value = minorOptions.value + idx * minorOptions.minorStep;
	                if (value > max) {
	                    break;
	                }
	                if (value >= min) {
	                    var position = round(lineStart + step * (log(value, base) - logMin), DEFAULT_PRECISION);
	                    callback(position, tickOptions);
	                }
	            }
	        }
	    },

	    createAxisLabel: function(index, labelOptions, labelContext) {
	        var power = Math.ceil(this.logMin + index);
	        var value = Math.pow(this.options.majorUnit, power);
	        var text = this.axisLabelText(value, labelOptions, labelContext);

	        return new AxisLabel(value, text, index, null, labelOptions);
	    },

	    shouldRenderNote: function(value) {
	        var range = this.range();
	        return range.min <= value && value <= range.max;
	    },

	    pan: function(delta) {
	        var range = this.translateRange(delta);
	        return this.limitRange(range.min, range.max, this.totalMin, this.totalMax, range.offset);
	    },

	    pointsRange: function(start, end) {
	        var startValue = this.getValue(start);
	        var endValue = this.getValue(end);
	        var min = Math.min(startValue, endValue);
	        var max = Math.max(startValue, endValue);

	        return {
	            min: min,
	            max: max
	        };
	    },

	    zoomRange: function(delta) {
	        var ref = this;
	        var options = ref.options;
	        var totalMin = ref.totalMin;
	        var totalMax = ref.totalMax;
	        var newRange = this.scaleRange(delta);
	        var min = limitValue(newRange.min, totalMin, totalMax);
	        var max = limitValue(newRange.max, totalMin, totalMax);
	        var base = options.majorUnit;
	        var acceptOptionsRange = max > min && options.min && options.max && (round(log(options.max, base) - log(options.min, base), DEFAULT_PRECISION) < 1);
	        var acceptNewRange = !(options.min === totalMin && options.max === totalMax) && round(log(max, base) - log(min, base), DEFAULT_PRECISION) >= 1;

	        if (acceptOptionsRange || acceptNewRange) {
	            return {
	                min: min,
	                max: max
	            };
	        }
	    },

	    _minorIntervalOptions: function(power) {
	        var ref = this.options;
	        var minorUnit = ref.minorUnit;
	        var base = ref.majorUnit;
	        var value = Math.pow(base, power);
	        var nextValue = Math.pow(base, power + 1);
	        var difference = nextValue - value;
	        var minorStep = difference / minorUnit;

	        return {
	            value: value,
	            minorStep: minorStep
	        };
	    },

	    _lineOptions: function() {
	        var ref = this.options;
	        var reverse = ref.reverse;
	        var vertical = ref.vertical;
	        var valueAxis = vertical ? Y : X;
	        var lineBox = this.lineBox();
	        var dir = vertical === reverse ? 1 : -1;
	        var startEdge = dir === 1 ? 1 : 2;
	        var lineSize = vertical ? lineBox.height() : lineBox.width();
	        var step = dir * (lineSize / (this.logMax - this.logMin));
	        var lineStart = lineBox[valueAxis + startEdge];

	        return {
	            step: step,
	            lineStart: lineStart,
	            lineBox: lineBox
	        };
	    }
	});

	function initRange(autoMin, autoMax, axisOptions, options) {
	    var min = axisOptions.min;
	    var max = axisOptions.max;

	    if (defined(axisOptions.axisCrossingValue) && axisOptions.axisCrossingValue <= 0) {
	        throwNegativeValuesError();
	    }

	    if (!defined(options.max)) {
	        max = autoMax;
	    } else if (options.max <= 0) {
	        throwNegativeValuesError();
	    }

	    if (!defined(options.min)) {
	        min = autoMin;
	    } else if (options.min <= 0) {
	        throwNegativeValuesError();
	    }

	    return {
	        min: min,
	        max: max
	    };
	}

	function autoAxisMin$1(min, max, options) {
	    var base = options.majorUnit;
	    var autoMin = min;
	    if (min <= 0) {
	        autoMin = max <= 1 ? Math.pow(base, -2) : 1;
	    } else if (!options.narrowRange) {
	        autoMin = Math.pow(base, Math.floor(log(min, base)));
	    }
	    return autoMin;
	}

	function autoAxisMax$1(max, base) {
	    var logMaxRemainder = round(log(max, base), DEFAULT_PRECISION) % 1;
	    var autoMax;
	    if (max <= 0) {
	        autoMax = base;
	    } else if (logMaxRemainder !== 0 && (logMaxRemainder < 0.3 || logMaxRemainder > 0.9)) {
	        autoMax = Math.pow(base, log(max, base) + 0.2);
	    } else {
	        autoMax = Math.pow(base, Math.ceil(log(max, base)));
	    }

	    return autoMax;
	}

	function throwNegativeValuesError() {
	    throw new Error("Non positive values cannot be used for a logarithmic axis");
	}

	function log(y, x) {
	    return Math.log(y) / Math.log(x);
	}

	setDefaultOptions(LogarithmicAxis, {
	    type: "log",
	    majorUnit: DEFAULT_MAJOR_UNIT,
	    minorUnit: 1,
	    axisCrossingValue: 1,
	    vertical: true,
	    majorGridLines: {
	        visible: true,
	        width: 1,
	        color: BLACK
	    },
	    zIndex: 1,
	    _deferLabels: true
	});

	var GridLinesMixin = {
	    createGridLines: function(altAxis) {
	        var options = this.options;
	        var radius = Math.abs(this.box.center().y - altAxis.lineBox().y1);
	        var gridLines = [];
	        var skipMajor = false;
	        var majorAngles, minorAngles;

	        if (options.majorGridLines.visible) {
	            majorAngles = this.majorGridLineAngles(altAxis);
	            skipMajor = true;

	            gridLines = this.renderMajorGridLines(
	                majorAngles, radius, options.majorGridLines
	            );
	        }

	        if (options.minorGridLines.visible) {
	            minorAngles = this.minorGridLineAngles(altAxis, skipMajor);

	            append(gridLines, this.renderMinorGridLines(
	                minorAngles, radius, options.minorGridLines, altAxis, skipMajor
	            ));
	        }

	        return gridLines;
	    },

	    renderMajorGridLines: function(angles, radius, options) {
	        return this.renderGridLines(angles, radius, options);
	    },

	    renderMinorGridLines: function(angles, radius, options, altAxis, skipMajor) {
	        var radiusCallback = this.radiusCallback && this.radiusCallback(radius, altAxis, skipMajor);
	        return this.renderGridLines(angles, radius, options, radiusCallback);
	    },

	    renderGridLines: function(angles, radius, options, radiusCallback) {
	        var style = {
	            stroke: {
	                width: options.width,
	                color: options.color,
	                dashType: options.dashType
	            }
	        };

	        var center = this.box.center();
	        var circle = new Circle([ center.x, center.y ], radius);
	        var container = this.gridLinesVisual();

	        for (var i = 0; i < angles.length; i++) {
	            var line = new Path(style);
	            if (radiusCallback) {
	                circle.radius = radiusCallback(angles[i]);
	            }

	            line.moveTo(circle.center)
	                .lineTo(circle.pointAt(angles[i] + 180));

	            container.append(line);
	        }

	        return container.children;
	    },

	    gridLineAngles: function(altAxis, size, skip, step, skipAngles) {
	        var this$1 = this;

	        var divs = this.intervals(size, skip, step, skipAngles);
	        var options = altAxis.options;
	        var altAxisVisible = options.visible && (options.line || {}).visible !== false;

	        return map(divs, function (d) {
	            var alpha = this$1.intervalAngle(d);

	            if (!altAxisVisible || alpha !== 90) {
	                return alpha;
	            }
	        });
	    }
	};

	var RadarCategoryAxis = CategoryAxis.extend({
	    range: function() {
	        return { min: 0, max: this.options.categories.length };
	    },

	    reflow: function(box) {
	        this.box = box;
	        this.reflowLabels();
	    },

	    lineBox: function() {
	        return this.box;
	    },

	    reflowLabels: function() {
	        var this$1 = this;

	        var ref = this;
	        var labels = ref.labels;
	        var labelOptions = ref.options.labels;
	        var skip = labelOptions.skip || 0;
	        var step = labelOptions.step || 1;
	        var measureBox = new Box();

	        for (var i = 0; i < labels.length; i++) {
	            labels[i].reflow(measureBox);
	            var labelBox = labels[i].box;

	            labels[i].reflow(this$1.getSlot(skip + i * step).adjacentBox(
	                0, labelBox.width(), labelBox.height()
	            ));
	        }
	    },

	    intervals: function(size, skipOption, stepOption, skipAngles) {
	        if (skipAngles === void 0) { skipAngles = false; }

	        var options = this.options;
	        var categories = options.categories.length;
	        var divCount = categories / size || 1;
	        var divAngle = 360 / divCount;
	        var skip = skipOption || 0;
	        var step = stepOption || 1;
	        var divs = [];
	        var angle = 0;

	        for (var i = skip; i < divCount; i += step) {
	            if (options.reverse) {
	                angle = 360 - i * divAngle;
	            } else {
	                angle = i * divAngle;
	            }

	            angle = round(angle, COORD_PRECISION) % 360;

	            if (!(skipAngles && inArray(angle, skipAngles))) {
	                divs.push(angle);
	            }
	        }

	        return divs;
	    },

	    majorIntervals: function() {
	        return this.intervals(1);
	    },

	    minorIntervals: function() {
	        return this.intervals(0.5);
	    },

	    intervalAngle: function(interval) {
	        return (360 + interval + this.options.startAngle) % 360;
	    },

	    majorAngles: function() {
	        var this$1 = this;

	        return map(this.majorIntervals(), function (interval) { return this$1.intervalAngle(interval); });
	    },

	    createLine: function() {
	        return [];
	    },

	    majorGridLineAngles: function(altAxis) {
	        var majorGridLines = this.options.majorGridLines;
	        return this.gridLineAngles(altAxis, 1, majorGridLines.skip, majorGridLines.step);
	    },

	    minorGridLineAngles: function(altAxis, skipMajor) {
	        var ref = this.options;
	        var minorGridLines = ref.minorGridLines;
	        var majorGridLines = ref.majorGridLines;
	        var majorGridLineAngles = skipMajor ? this.intervals(1, majorGridLines.skip, majorGridLines.step) : null;

	        return this.gridLineAngles(altAxis, 0.5, minorGridLines.skip, minorGridLines.step, majorGridLineAngles);
	    },

	    radiusCallback: function(radius, altAxis, skipMajor) {
	        if (altAxis.options.type !== ARC) {
	            var minorAngle = rad(360 / (this.options.categories.length * 2));
	            var minorRadius = Math.cos(minorAngle) * radius;
	            var majorAngles = this.majorAngles();

	            var radiusCallback = function(angle) {
	                if (!skipMajor && inArray(angle, majorAngles)) {
	                    return radius;
	                }

	                return minorRadius;
	            };
	            return radiusCallback;
	        }
	    },

	    createPlotBands: function() {
	        var this$1 = this;

	        var plotBands = this.options.plotBands || [];

	        var group = this._plotbandGroup = new Group({
	            zIndex: -1
	        });

	        for (var i = 0; i < plotBands.length; i++) {
	            var band = plotBands[i];
	            var slot = this$1.plotBandSlot(band);
	            var singleSlot = this$1.getSlot(band.from);

	            var head = band.from - Math.floor(band.from);
	            slot.startAngle += head * singleSlot.angle;

	            var tail = Math.ceil(band.to) - band.to;
	            slot.angle -= (tail + head) * singleSlot.angle;

	            var ring = ShapeBuilder.current.createRing(slot, {
	                fill: {
	                    color: band.color,
	                    opacity: band.opacity
	                },
	                stroke: {
	                    opacity: band.opacity
	                }
	            });
	            group.append(ring);
	        }

	        this.appendVisual(group);
	    },

	    plotBandSlot: function(band) {
	        return this.getSlot(band.from, band.to - 1);
	    },

	    getSlot: function(from, to) {
	        var options = this.options;
	        var justified = options.justified;
	        var box = this.box;
	        var divs = this.majorAngles();
	        var totalDivs = divs.length;
	        var slotAngle = 360 / totalDivs;
	        var fromValue = from;

	        if (options.reverse && !justified) {
	            fromValue = (fromValue + 1) % totalDivs;
	        }

	        fromValue = limitValue(Math.floor(fromValue), 0, totalDivs - 1);
	        var slotStart = divs[fromValue];

	        if (justified) {
	            slotStart = slotStart - slotAngle / 2;

	            if (slotStart < 0) {
	                slotStart += 360;
	            }
	        }

	        var toValue = limitValue(Math.ceil(to || fromValue), fromValue, totalDivs - 1);
	        var slots = toValue - fromValue + 1;
	        var angle = slotAngle * slots;

	        return new Ring(box.center(), 0, box.height() / 2, slotStart, angle);
	    },

	    slot: function(from, to) {
	        var slot = this.getSlot(from, to);
	        var startAngle = slot.startAngle + 180;
	        var endAngle = startAngle + slot.angle;

	        return new geometry.Arc([ slot.center.x, slot.center.y ], {
	            startAngle: startAngle,
	            endAngle: endAngle,
	            radiusX: slot.radius,
	            radiusY: slot.radius
	        });
	    },

	    pointCategoryIndex: function(point) {
	        var this$1 = this;

	        var length = this.options.categories.length;
	        var index = null;

	        for (var i = 0; i < length; i++) {
	            var slot = this$1.getSlot(i);
	            if (slot.containsPoint(point)) {
	                index = i;
	                break;
	            }
	        }

	        return index;
	    }
	});

	setDefaultOptions(RadarCategoryAxis, {
	    startAngle: 90,
	    labels: {
	        margin: getSpacing(10)
	    },
	    majorGridLines: {
	        visible: true
	    },
	    justified: true
	});
	deepExtend(RadarCategoryAxis.prototype, GridLinesMixin);

	var PolarAxis = Axis.extend({
	    init: function(options, chartService) {
	        Axis.fn.init.call(this, options, chartService);

	        var instanceOptions = this.options;

	        instanceOptions.minorUnit = instanceOptions.minorUnit || instanceOptions.majorUnit / 2;
	    },

	    getDivisions: function(stepValue) {
	        return NumericAxis.prototype.getDivisions.call(this, stepValue) - 1;
	    },

	    reflow: function(box) {
	        this.box = box;
	        this.reflowLabels();
	    },

	    reflowLabels: function() {
	        var this$1 = this;

	        var ref = this;
	        var options = ref.options;
	        var labels = ref.labels;
	        var labelOptions = ref.options.labels;
	        var skip = labelOptions.skip || 0;
	        var step = labelOptions.step || 1;

	        var measureBox = new Box();
	        var divs = this.intervals(options.majorUnit, skip, step);

	        for (var i = 0; i < labels.length; i++) {
	            labels[i].reflow(measureBox);
	            var labelBox = labels[i].box;

	            labels[i].reflow(this$1.getSlot(divs[i]).adjacentBox(0, labelBox.width(), labelBox.height()));
	        }
	    },

	    lineBox: function() {
	        return this.box;
	    },

	    intervals: function(size, skipOption, stepOption, skipAngles) {
	        if (skipAngles === void 0) { skipAngles = false; }

	        var min = this.options.min;
	        var divisions = this.getDivisions(size);
	        var divs = [];
	        var skip = skipOption || 0;
	        var step = stepOption || 1;

	        for (var i = skip; i < divisions; i += step) {
	            var current = (360 + min + i * size) % 360;
	            if (!(skipAngles && inArray(current, skipAngles))) {
	                divs.push(current);
	            }
	        }

	        return divs;
	    },

	    majorIntervals: function() {
	        return this.intervals(this.options.majorUnit);
	    },

	    minorIntervals: function() {
	        return this.intervals(this.options.minorUnit);
	    },

	    intervalAngle: function(i) {
	        return (540 - i - this.options.startAngle) % 360;
	    },

	    createLine: function() {
	        return [];
	    },

	    majorGridLineAngles: function(altAxis) {
	        var majorGridLines = this.options.majorGridLines;
	        return this.gridLineAngles(altAxis, this.options.majorUnit, majorGridLines.skip, majorGridLines.step);
	    },

	    minorGridLineAngles: function(altAxis, skipMajor) {
	        var options = this.options;
	        var minorGridLines = options.minorGridLines;
	        var majorGridLines = options.majorGridLines;
	        var majorGridLineAngles = skipMajor ? this.intervals(options.majorUnit, majorGridLines.skip, majorGridLines.step) : null;

	        return this.gridLineAngles(altAxis, options.minorUnit, minorGridLines.skip, minorGridLines.step, majorGridLineAngles);
	    },

	    plotBandSlot: function(band) {
	        return this.getSlot(band.from, band.to);
	    },

	    getSlot: function(a, b) {
	        var ref = this;
	        var options = ref.options;
	        var box = ref.box;
	        var startAngle = options.startAngle;
	        var start = limitValue(a, options.min, options.max);
	        var end = limitValue(b || start, start, options.max);

	        if (options.reverse) {
	            start *= -1;
	            end *= -1;
	        }

	        start = (540 - start - startAngle) % 360;
	        end = (540 - end - startAngle) % 360;

	        if (end < start) {
	            var tmp = start;
	            start = end;
	            end = tmp;
	        }

	        return new Ring(box.center(), 0, box.height() / 2, start, end - start);
	    },

	    slot: function(from, to) {
	        if (to === void 0) { to = from; }

	        var options = this.options;
	        var start = 360 - options.startAngle;
	        var slot = this.getSlot(from, to);
	        var min = Math.min(from, to);
	        var max = Math.max(from, to);
	        var startAngle, endAngle;

	        if (options.reverse) {
	            startAngle = min;
	            endAngle = max;
	        } else {
	            startAngle = 360 - max;
	            endAngle = 360 - min;
	        }

	        startAngle = (startAngle + start) % 360;
	        endAngle = (endAngle + start) % 360;

	        return new geometry.Arc([ slot.center.x, slot.center.y ], {
	            startAngle: startAngle,
	            endAngle: endAngle,
	            radiusX: slot.radius,
	            radiusY: slot.radius
	        });
	    },

	    getValue: function(point) {
	        var options = this.options;
	        var center = this.box.center();
	        var dx = point.x - center.x;
	        var dy = point.y - center.y;
	        var theta = Math.round(deg(Math.atan2(dy, dx)));
	        var start = options.startAngle;

	        if (!options.reverse) {
	            theta *= -1;
	            start *= -1;
	        }

	        return (theta + start + 360) % 360;
	    },

	    valueRange: function() {
	        return {
	            min: 0,
	            max: Math.PI * 2
	        };
	    }
	});

	setDefaultOptions(PolarAxis, {
	    type: "polar",
	    startAngle: 0,
	    reverse: false,
	    majorUnit: 60,
	    min: 0,
	    max: 360,
	    labels: {
	        margin: getSpacing(10)
	    },
	    majorGridLines: {
	        color: BLACK,
	        visible: true,
	        width: 1
	    },
	    minorGridLines: {
	        color: "#aaa"
	    }
	});

	deepExtend(PolarAxis.prototype, GridLinesMixin, {
	    createPlotBands: RadarCategoryAxis.prototype.createPlotBands,
	    majorAngles: RadarCategoryAxis.prototype.majorAngles,
	    range: NumericAxis.prototype.range,
	    labelsCount: NumericAxis.prototype.labelsCount,
	    createAxisLabel: NumericAxis.prototype.createAxisLabel
	});

	var RadarNumericAxisMixin = {
	    options: {
	        majorGridLines: {
	            visible: true
	        }
	    },

	    createPlotBands: function() {
	        var this$1 = this;

	        var ref = this.options;
	        var type = ref.majorGridLines.type;
	        var plotBands = ref.plotBands; if (plotBands === void 0) { plotBands = []; }
	        var altAxis = this.plotArea.polarAxis;
	        var majorAngles = altAxis.majorAngles();
	        var center = altAxis.box.center();
	        var group = this._plotbandGroup = new Group({
	            zIndex: -1
	        });

	        for (var i = 0; i < plotBands.length; i++) {
	            var band = plotBands[i];
	            var bandStyle = {
	                fill: {
	                    color: band.color,
	                    opacity: band.opacity
	                },
	                stroke: {
	                    opacity: band.opacity
	                }
	            };

	            var slot = this$1.getSlot(band.from, band.to, true);
	            var ring = new Ring(center, center.y - slot.y2, center.y - slot.y1, 0, 360);

	            var shape = (void 0);
	            if (type === ARC) {
	                shape = ShapeBuilder.current.createRing(ring, bandStyle);
	            } else {
	                shape = Path.fromPoints(this$1.plotBandPoints(ring, majorAngles), bandStyle).close();
	            }

	            group.append(shape);
	        }

	        this.appendVisual(group);
	    },

	    plotBandPoints: function(ring, angles) {
	        var innerPoints = [];
	        var outerPoints = [];
	        var center = [ ring.center.x, ring.center.y ];
	        var innerCircle = new Circle(center, ring.innerRadius);
	        var outerCircle = new Circle(center, ring.radius);

	        for (var i = 0; i < angles.length; i++) {
	            innerPoints.push(innerCircle.pointAt(angles[i] + 180));
	            outerPoints.push(outerCircle.pointAt(angles[i] + 180));
	        }

	        innerPoints.reverse();
	        innerPoints.push(innerPoints[0]);
	        outerPoints.push(outerPoints[0]);

	        return outerPoints.concat(innerPoints);
	    },

	    createGridLines: function(altAxis) {
	        var options = this.options;
	        var majorTicks = this.radarMajorGridLinePositions();
	        var majorAngles = altAxis.majorAngles();
	        var center = altAxis.box.center();
	        var gridLines = [];

	        if (options.majorGridLines.visible) {
	            gridLines = this.renderGridLines(
	                center, majorTicks, majorAngles, options.majorGridLines
	            );
	        }

	        if (options.minorGridLines.visible) {
	            var minorTicks = this.radarMinorGridLinePositions();
	            append(gridLines, this.renderGridLines(
	                center, minorTicks, majorAngles, options.minorGridLines
	            ));
	        }

	        return gridLines;
	    },

	    renderGridLines: function(center, ticks, angles, options) {
	        var style = {
	            stroke: {
	                width: options.width,
	                color: options.color,
	                dashType: options.dashType
	            }
	        };
	        var skip = options.skip; if (skip === void 0) { skip = 0; }
	        var step = options.step; if (step === void 0) { step = 0; }
	        var container = this.gridLinesVisual();

	        for (var tickIx = skip; tickIx < ticks.length; tickIx += step) {
	            var tickRadius = center.y - ticks[tickIx];
	            if (tickRadius > 0) {
	                var circle = new Circle([ center.x, center.y ], tickRadius);
	                if (options.type === ARC) {
	                    container.append(new drawing.Circle(circle, style));
	                } else {
	                    var line = new Path(style);
	                    for (var angleIx = 0; angleIx < angles.length; angleIx++) {
	                        line.lineTo(circle.pointAt(angles[angleIx] + 180));
	                    }

	                    line.close();
	                    container.append(line);
	                }
	            }
	        }

	        return container.children;
	    },

	    getValue: function(point) {
	        var lineBox = this.lineBox();
	        var altAxis = this.plotArea.polarAxis;
	        var majorAngles = altAxis.majorAngles();
	        var center = altAxis.box.center();
	        var radius = point.distanceTo(center);
	        var distance = radius;

	        if (this.options.majorGridLines.type !== ARC && majorAngles.length > 1) {
	            var dx = point.x - center.x;
	            var dy = point.y - center.y;
	            var theta = (deg(Math.atan2(dy, dx)) + 540) % 360;

	            majorAngles.sort(function(a, b) {
	                return angularDistance(a, theta) - angularDistance(b, theta);
	            });

	            // Solve triangle (center, point, axis X) using one side (radius) and two angles.
	            // Angles are derived from triangle (center, point, gridline X)
	            var midAngle = angularDistance(majorAngles[0], majorAngles[1]) / 2;
	            var alpha = angularDistance(theta, majorAngles[0]);
	            var gamma = 90 - midAngle;
	            var beta = 180 - alpha - gamma;

	            distance = radius * (Math.sin(rad(beta)) / Math.sin(rad(gamma)));
	        }

	        return this.axisType().prototype.getValue.call(
	            this, new Point(lineBox.x1, lineBox.y2 - distance)
	        );
	    }
	};

	function angularDistance(a, b) {
	    return 180 - Math.abs(Math.abs(a - b) - 180);
	}

	var RadarNumericAxis = NumericAxis.extend({
	    radarMajorGridLinePositions: function() {
	        return this.getTickPositions(this.options.majorUnit);
	    },

	    radarMinorGridLinePositions: function() {
	        var options = this.options;
	        var minorSkipStep = 0;

	        if (options.majorGridLines.visible) {
	            minorSkipStep = options.majorUnit;
	        }
	        return this.getTickPositions(options.minorUnit, minorSkipStep);
	    },

	    axisType: function() {
	        return NumericAxis;
	    }
	});

	deepExtend(RadarNumericAxis.prototype, RadarNumericAxisMixin);

	var RadarLogarithmicAxis = LogarithmicAxis.extend({
	    radarMajorGridLinePositions: function() {
	        var positions = [];

	        this.traverseMajorTicksPositions(function(position) {
	            positions.push(position);
	        }, this.options.majorGridLines);

	        return positions;
	    },

	    radarMinorGridLinePositions: function() {
	        var positions = [];

	        this.traverseMinorTicksPositions(function(position) {
	            positions.push(position);
	        }, this.options.minorGridLines);

	        return positions;
	    },

	    axisType: function() {
	        return LogarithmicAxis;
	    }
	});

	deepExtend(RadarLogarithmicAxis.prototype, RadarNumericAxisMixin);

	var WEIGHT = 0.333;
	var EXTREMUM_ALLOWED_DEVIATION = 0.01;

	var CurveProcessor = Class.extend({
	    init: function(closed) {

	        this.closed = closed;
	    },

	    process: function(dataPoints) {
	        var this$1 = this;

	        var points = dataPoints.slice(0);
	        var segments = [];
	        var closed = this.closed;
	        var length = points.length;

	        if (length > 2) {
	            this.removeDuplicates(0, points);
	            length = points.length;
	        }

	        if (length < 2 || (length === 2 && points[0].equals(points[1]))) {
	            return segments;
	        }

	        var p0 = points[0];
	        var p1 = points[1];
	        var p2 = points[2];

	        segments.push(new Segment(p0));

	        while (p0.equals(points[length - 1])) {
	            closed = true;
	            points.pop();
	            length--;
	        }

	        if (length === 2) {
	            var tangent = this.tangent(p0,p1, X, Y);

	            last(segments).controlOut(
	                this.firstControlPoint(tangent, p0, p1, X, Y)
	            );

	            segments.push(new Segment(
	                p1,
	                this.secondControlPoint(tangent, p0, p1, X, Y)
	            ));

	            return segments;
	        }

	        var initialControlPoint, lastControlPoint;

	        if (closed) {
	            p0 = points[length - 1]; p1 = points[0]; p2 = points[1];
	            var controlPoints = this.controlPoints(p0, p1, p2);
	            initialControlPoint = controlPoints[1];
	            lastControlPoint = controlPoints[0];
	        } else {
	            var tangent$1 = this.tangent(p0, p1, X,Y);
	            initialControlPoint = this.firstControlPoint(tangent$1, p0, p1, X, Y);
	        }

	        var cp0 = initialControlPoint;
	        for (var idx = 0; idx <= length - 3; idx++) {
	            this$1.removeDuplicates(idx, points);
	            length = points.length;
	            if (idx + 3 <= length) {
	                p0 = points[idx]; p1 = points[idx + 1]; p2 = points[idx + 2];
	                var controlPoints$1 = this$1.controlPoints(p0,p1,p2);

	                last(segments).controlOut(cp0);
	                cp0 = controlPoints$1[1];

	                var cp1 = controlPoints$1[0];
	                segments.push(new Segment(p1, cp1));
	            }
	        }

	        if (closed) {
	            p0 = points[length - 2]; p1 = points[length - 1]; p2 = points[0];
	            var controlPoints$2 = this.controlPoints(p0, p1, p2);

	            last(segments).controlOut(cp0);
	            segments.push(new Segment(
	                p1,
	                controlPoints$2[0]
	            ));

	            last(segments).controlOut(controlPoints$2[1]);
	            segments.push(new Segment(
	                p2,
	                lastControlPoint
	            ));
	        } else {
	            var tangent$2 = this.tangent(p1, p2, X, Y);

	            last(segments).controlOut(cp0);
	            segments.push(new Segment(
	                p2,
	                this.secondControlPoint(tangent$2, p1, p2, X, Y)
	            ));
	        }

	        return segments;
	    },

	    removeDuplicates: function(idx, points) {
	        while (points[idx + 1] && (points[idx].equals(points[idx + 1]) || points[idx + 1].equals(points[idx + 2]))) {
	            points.splice(idx + 1, 1);
	        }
	    },

	    invertAxis: function(p0, p1, p2) {
	        var invertAxis = false;

	        if (p0.x === p1.x) {
	            invertAxis = true;
	        } else if (p1.x === p2.x) {
	            if ((p1.y < p2.y && p0.y <= p1.y) || (p2.y < p1.y && p1.y <= p0.y)) {
	                invertAxis = true;
	            }
	        } else {
	            var fn = this.lineFunction(p0,p1);
	            var y2 = this.calculateFunction(fn, p2.x);
	            if (!(p0.y <= p1.y && p2.y <= y2) &&
	                !(p1.y <= p0.y && p2.y >= y2)) {
	                invertAxis = true;
	            }
	        }

	        return invertAxis;
	    },

	    isLine: function(p0, p1, p2) {
	        var fn = this.lineFunction(p0, p1);
	        var y2 = this.calculateFunction(fn, p2.x);

	        return (p0.x === p1.x && p1.x === p2.x) || round(y2, 1) === round(p2.y, 1);
	    },

	    lineFunction: function(p1, p2) {
	        var a = (p2.y - p1.y) / (p2.x - p1.x);
	        var b = p1.y - a * p1.x;

	        return [ b, a ];
	    },

	    controlPoints: function(p0, p1, p2) {
	        var xField = X;
	        var yField = Y;
	        var restrict = false;
	        var switchOrientation = false;
	        var tangent;

	        if (this.isLine(p0, p1, p2)) {
	            tangent = this.tangent(p0, p1, X, Y);
	        } else {
	            var monotonic = {
	                x: this.isMonotonicByField(p0, p1, p2, X),
	                y: this.isMonotonicByField(p0, p1, p2, Y)
	            };

	            if (monotonic.x && monotonic.y) {
	                tangent = this.tangent(p0, p2, X, Y);
	                restrict = true;
	            } else {
	                if (this.invertAxis(p0, p1, p2)) {
	                    xField = Y;
	                    yField = X;
	                }

	                if (monotonic[xField]) {
	                    tangent = 0;
	                } else {
	                    var sign;
	                    if ((p2[yField] < p0[yField] && p0[yField] <= p1[yField]) ||
	                        (p0[yField] < p2[yField] && p1[yField] <= p0[yField])) {
	                        sign = numberSign((p2[yField] - p0[yField]) * (p1[xField] - p0[xField]));
	                    } else {
	                        sign = -numberSign((p2[xField] - p0[xField]) * (p1[yField] - p0[yField]));
	                    }

	                    tangent = EXTREMUM_ALLOWED_DEVIATION * sign;
	                    switchOrientation = true;
	                }
	            }
	        }

	        var secondControlPoint = this.secondControlPoint(tangent, p0, p1, xField, yField);

	        if (switchOrientation) {
	            var oldXField = xField;
	            xField = yField;
	            yField = oldXField;
	        }

	        var firstControlPoint = this.firstControlPoint(tangent, p1, p2, xField, yField);

	        if (restrict) {
	            this.restrictControlPoint(p0, p1, secondControlPoint, tangent);
	            this.restrictControlPoint(p1, p2, firstControlPoint, tangent);
	        }

	        return [ secondControlPoint, firstControlPoint ];
	    },

	    restrictControlPoint: function(p1, p2, cp, tangent) {
	        if (p1.y < p2.y) {
	            if (p2.y < cp.y) {
	                cp.x = p1.x + (p2.y - p1.y) / tangent;
	                cp.y = p2.y;
	            } else if (cp.y < p1.y) {
	                cp.x = p2.x - (p2.y - p1.y) / tangent;
	                cp.y = p1.y;
	            }
	        } else {
	            if (cp.y < p2.y) {
	                cp.x = p1.x - (p1.y - p2.y) / tangent;
	                cp.y = p2.y;
	            } else if (p1.y < cp.y) {
	                cp.x = p2.x + (p1.y - p2.y) / tangent;
	                cp.y = p1.y;
	            }
	        }
	    },

	    tangent: function(p0, p1, xField, yField) {
	        var x = p1[xField] - p0[xField];
	        var y = p1[yField] - p0[yField];
	        var tangent;

	        if (x === 0) {
	            tangent = 0;
	        } else {
	            tangent = y / x;
	        }

	        return tangent;
	    },

	    isMonotonicByField: function(p0, p1, p2, field) {
	        return (p2[field] > p1[field] && p1[field] > p0[field]) ||
	                    (p2[field] < p1[field] && p1[field] < p0[field]);
	    },

	    firstControlPoint: function(tangent, p0, p3, xField, yField) {
	        var t1 = p0[xField];
	        var t2 = p3[xField];
	        var distance = (t2 - t1) * WEIGHT;

	        return this.point(t1 + distance, p0[yField] + distance * tangent, xField, yField);
	    },

	    secondControlPoint: function(tangent, p0, p3, xField, yField) {
	        var t1 = p0[xField];
	        var t2 = p3[xField];
	        var distance = (t2 - t1) * WEIGHT;

	        return this.point(t2 - distance, p3[yField] - distance * tangent, xField, yField);
	    },

	    point: function(xValue, yValue, xField, yField) {
	        var controlPoint = new geometry.Point();
	        controlPoint[xField] = xValue;
	        controlPoint[yField] = yValue;

	        return controlPoint;
	    },

	    calculateFunction: function(fn, x) {
	        var length = fn.length;
	        var result = 0;

	        for (var i = 0; i < length; i++) {
	            result += Math.pow(x,i) * fn[i];
	        }
	        return result;
	    }
	});

	function numberSign(value) {
	    return value <= 0 ? -1 : 1;
	}

	dataviz.Gradients = GRADIENTS;

	kendo.deepExtend(kendo.dataviz, {
	    constants: constants,
	    services: services,
	    autoMajorUnit: autoMajorUnit,
	    Point: Point,
	    Box: Box,
	    Ring: Ring,
	    Sector: Sector,
	    ShapeBuilder: ShapeBuilder,
	    ShapeElement: ShapeElement,
	    ChartElement: ChartElement,
	    BoxElement: BoxElement,
	    RootElement: RootElement,
	    FloatElement: FloatElement,
	    Text: Text,
	    TextBox: TextBox,
	    Title: Title,
	    AxisLabel: AxisLabel,
	    Axis: Axis,
	    Note: Note,
	    CategoryAxis: CategoryAxis,
	    DateCategoryAxis: DateCategoryAxis,
	    DateValueAxis: DateValueAxis,
	    NumericAxis: NumericAxis,
	    LogarithmicAxis: LogarithmicAxis,
	    PolarAxis: PolarAxis,
	    RadarCategoryAxis: RadarCategoryAxis,
	    RadarNumericAxis: RadarNumericAxis,
	    RadarLogarithmicAxis: RadarLogarithmicAxis,
	    CurveProcessor: CurveProcessor,
	    rectToBox: rectToBox,
	    addClass: addClass,
	    removeClass: removeClass,
	    alignPathToPixel: alignPathToPixel,
	    clockwise: clockwise,
	    convertableToNumber: convertableToNumber,
	    deepExtend: deepExtend,
	    elementStyles: elementStyles,
	    getSpacing: getSpacing,
	    getTemplate: getTemplate,
	    getter: __common_getter_js,
	    grep: grep,
	    hasClasses: hasClasses,
	    HashMap: HashMap,
	    inArray: inArray,
	    interpolateValue: interpolateValue,
	    InstanceObserver: InstanceObserver,
	    isArray: isArray,
	    isFunction: isFunction,
	    isNumber: isNumber,
	    isObject: isObject,
	    isString: isString,
	    map: map,
	    mousewheelDelta: mousewheelDelta,
	    FontLoader: FontLoader,
	    setDefaultOptions: setDefaultOptions,
	    sparseArrayLimits: sparseArrayLimits,
	    styleValue: styleValue,
	    find: find,
	    elementScale: elementScale,
	    autoTextColor: autoTextColor,
	    createHashSet: createHashSet,
	    append: append,
	    bindEvents: bindEvents,
	    Class: Class,
	    defined: defined,
	    deg: deg,
	    elementOffset: elementOffset,
	    elementSize: elementSize,
	    eventElement: eventElement,
	    eventCoordinates: eventCoordinates,
	    last: last,
	    limitValue: limitValue,
	    logToConsole: kendo.logToConsole,
	    objectKey: objectKey,
	    rad: rad,
	    round: round,
	    unbindEvents: unbindEvents,
	    valueOrDefault: valueOrDefault,
	    absoluteDateDiff: absoluteDateDiff,
	    addDuration: addDuration,
	    addTicks: addTicks,
	    ceilDate: ceilDate,
	    dateComparer: dateComparer,
	    dateDiff: dateDiff,
	    dateEquals: dateEquals,
	    dateIndex: dateIndex,
	    duration: duration,
	    floorDate: floorDate,
	    lteDateIndex: lteDateIndex,
	    startOfWeek: startOfWeek,
	    toDate: toDate,
	    parseDate: parseDate,
	    parseDates: parseDates,
	    toTime: toTime,
	    firstDay: firstDay
	});

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ })

/******/ });