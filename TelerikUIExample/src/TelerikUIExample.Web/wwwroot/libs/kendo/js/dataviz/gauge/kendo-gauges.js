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

	module.exports = __webpack_require__(917);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 891:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.dataviz.core");

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.drawing");

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.core");

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.color");

/***/ }),

/***/ 917:
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
	        __webpack_require__(897),
	        __webpack_require__(893),
	        __webpack_require__(891)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {

	window.kendo.dataviz = window.kendo.dataviz || {};
	var dataviz = kendo.dataviz;
	var getSpacing = dataviz.getSpacing;
	var defined = dataviz.defined;
	var constants = dataviz.constants;
	var BLACK = constants.BLACK;
	var COORD_PRECISION = constants.COORD_PRECISION;
	var services = dataviz.services;
	var deepExtend = dataviz.deepExtend;
	var isArray = dataviz.isArray;
	var setDefaultOptions = dataviz.setDefaultOptions;
	var NumericAxis = dataviz.NumericAxis;
	var limitValue = dataviz.limitValue;
	var Box = dataviz.Box;
	var interpolateValue = dataviz.interpolateValue;
	var round = dataviz.round;
	var drawing = kendo.drawing;
	var DrawingGroup = drawing.Group;
	var DrawingPath = drawing.Path;
	var Animation = drawing.Animation;
	var AnimationFactory = drawing.AnimationFactory;
	var geometry = kendo.geometry;
	var Rect = geometry.Rect;
	var GeometryPoint = geometry.Point;
	var transform = geometry.transform;

	var ANGULAR_SPEED = 150;
	var LINEAR_SPEED = 250;
	var ARROW = "arrow";
	var ARROW_POINTER = "arrowPointer";
	var BAR_POINTER = "barPointer";
	var DEFAULT_HEIGHT = 200;
	var DEFAULT_LINE_WIDTH = 0.5;
	var DEFAULT_WIDTH = 200;
	var DEGREE = Math.PI / 180;
	var INSIDE = "inside";
	var LINEAR = "linear";
	var OUTSIDE = "outside";
	var RADIAL_POINTER = "radialPointer";
	var RADIAL_RANGE_POINTER = "radialRangePointer";

	function pad(bbox, value) {
	    var origin = bbox.getOrigin();
	    var size = bbox.getSize();
	    var spacing = getSpacing(value);

	    bbox.setOrigin([ origin.x - spacing.left, origin.y - spacing.top ]);
	    bbox.setSize([ size.width + (spacing.left + spacing.right), size.height + (spacing.top + spacing.bottom) ]);

	    return bbox;
	}

	var Group = DrawingGroup;
	var Path$1 = DrawingPath;
	var Text = drawing.Text;

	function buildLabelElement(label, options) {
	    var labelBox = label.box;
	    var textBox = label.children[0].box;
	    var border = options.border || {};
	    var background = options.background || "";

	    var wrapper = Path$1.fromRect(new Rect([ labelBox.x1, labelBox.y1 ], [ labelBox.width(), labelBox.height() ]), {
	        stroke: {}
	    });

	    var text = new Text(label.text, new GeometryPoint(textBox.x1, textBox.y1), {
	        font: options.font,
	        fill: { color: options.color }
	    });

	    var styleGeometry = pad(text.bbox().clone(), options.padding);

	    var styleBox = Path$1.fromRect(styleGeometry, {
	        stroke: {
	            color: border.width ? border.color : "",
	            width: border.width,
	            opacity: border.opacity,
	            dashType: border.dashType,
	            lineJoin: "round",
	            lineCap: "round"
	        },
	        fill: {
	            color: background
	        }
	    });

	    var elements = new Group();
	    elements.append(wrapper);
	    elements.append(styleBox);
	    elements.append(text);

	    return elements;
	}

	function getRange(range, min, max) {
	    var from = defined(range.from) ? range.from : constants.MIN_VALUE;
	    var to = defined(range.to) ? range.to : constants.MAX_VALUE;

	    range.from = Math.max(Math.min(to, from), min);
	    range.to = Math.min(Math.max(to, from), max);

	    return range;
	}

	function unpad(bbox, value) {
	    var spacing = getSpacing(value);

	    spacing.left = -spacing.left; spacing.top = -spacing.top;
	    spacing.right = -spacing.right; spacing.bottom = -spacing.bottom;

	    return pad(bbox, spacing);
	}

	var DEFAULT_MARGIN = 5;
	var Path = DrawingPath;
	var Surface = drawing.Surface;

	var Gauge = dataviz.Class.extend({
	    init: function(element, userOptions, theme, context) {
	        if (context === void 0) { context = {}; }

	        this.element = element;
	        this.theme = theme;
	        this.contextService = new services.ChartService(this, context);
	        this._originalOptions = deepExtend({}, this.options, userOptions);
	        this.options = deepExtend({}, this._originalOptions);
	        this._initTheme(theme);

	        this.redraw();
	    },

	    destroy: function() {
	        if (this.surface) {
	            this.surface.destroy();
	            this.surface = null;
	        }

	        delete this.element;
	        delete this.surfaceElement;
	    },

	    value: function(pointerValue) {
	        var pointer = this.pointers[0];

	        if (arguments.length === 0) {
	            return pointer.value();
	        }

	        pointer.value(pointerValue);
	        this._setValueOptions(pointerValue);
	    },

	    _draw: function() {
	        var surface = this.surface;

	        surface.clear();
	        surface.draw(this._visuals);
	    },

	    exportVisual: function() {
	        return this._visuals;
	    },

	    allValues: function(values) {
	        var pointers = this.pointers;
	        var allValues = [];

	        if (arguments.length === 0) {
	            for (var i = 0; i < pointers.length; i++) {
	                allValues.push(pointers[i].value());
	            }

	            return allValues;
	        }

	        if (isArray(values)) {
	            for (var i$1 = 0; i$1 < values.length; i$1++) {
	                if (dataviz.isNumber(values[i$1])) {
	                    pointers[i$1].value(values[i$1]);
	                }
	            }
	        }

	        this._setValueOptions(values);
	    },

	    _setValueOptions: function(values) {
	        var pointers = [].concat(this.options.pointer);
	        var arrayValues = [].concat(values);

	        for (var i = 0; i < arrayValues.length; i++) {
	            pointers[i].value = arrayValues[i];
	        }
	    },

	    resize: function() {
	        this.noTransitionsRedraw();
	    },

	    noTransitionsRedraw: function() {
	        var transitions = this.options.transitions;

	        this._toggleTransitions(false);

	        this.redraw();

	        this._toggleTransitions(transitions);
	    },

	    redraw: function() {
	        var size = this._surfaceSize();
	        var wrapper = new Rect([ 0, 0 ], [ size.width, size.height ]);

	        this._initSurface();

	        this.gaugeArea = this._createGaugeArea();

	        this._createModel();

	        var bbox = unpad(wrapper.bbox(), this._gaugeAreaMargin);
	        this.reflow(bbox);
	    },

	    setOptions: function(options, theme) {
	        this._originalOptions = deepExtend(this._originalOptions, options);
	        this.options = deepExtend({}, this._originalOptions);

	        this._initTheme(theme);

	        this.redraw();
	    },

	    setDirection: function(rtl) {
	        this.contextService.rtl = Boolean(rtl);
	        if (this.surface && this.surface.type === 'svg') {
	            this.surface.destroy();
	            this.surface = null;
	        }
	    },

	    setIntlService: function(intl) {
	        this.contextService.intl = intl;
	    },

	    _initTheme: function(theme) {
	        var currentTheme = theme || this.theme || {};
	        this.theme = currentTheme;

	        this.options = deepExtend({}, currentTheme, this.options);
	        var options = this.options;
	        var pointer = options.pointer;

	        if (isArray(pointer)) {
	            var pointers = [];
	            for (var i = 0; i < pointer.length; i++) {
	                pointers.push(deepExtend({}, currentTheme.pointer, pointer[i]));
	            }
	            options.pointer = pointers;
	        }
	    },

	    _createGaugeArea: function() {
	        var options = this.options.gaugeArea;
	        var size = this.surface.size();
	        var border = options.border || {};
	        var areaGeometry = new Rect([ 0, 0 ], [ size.width, size.height ]);

	        this._gaugeAreaMargin = options.margin || DEFAULT_MARGIN;

	        if (border.width > 0) {
	            areaGeometry = unpad(areaGeometry, border.width);
	        }

	        var gaugeArea = Path.fromRect(areaGeometry, {
	            stroke: {
	                color: border.width ? border.color : "",
	                width: border.width,
	                dashType: border.dashType,
	                lineJoin: "round",
	                lineCap: "round"
	            },
	            fill: {
	                color: options.background
	            }
	        });

	        return gaugeArea;
	    },

	    _initSurface: function() {
	        var ref = this;
	        var options = ref.options;
	        var surface = ref.surface;
	        var element = this._surfaceElement();
	        var size = this._surfaceSize();

	        dataviz.elementSize(element, size);

	        if (!surface || surface.options.type !== options.renderAs) {
	            if (surface) {
	                surface.destroy();
	            }

	            this.surface = Surface.create(element, {
	                type: options.renderAs
	            });
	        } else {
	            this.surface.clear();
	            this.surface.resize();
	        }
	    },

	    _surfaceSize: function() {
	        var options = this.options;
	        var size = this._getSize();

	        if (options.gaugeArea) {
	            deepExtend(size, options.gaugeArea);
	        }

	        return size;
	    },

	    _surfaceElement: function() {
	        if (!this.surfaceElement) {
	            this.surfaceElement = document.createElement('div');
	            this.element.appendChild(this.surfaceElement);
	        }

	        return this.surfaceElement;
	    },

	    getSize: function() {
	        return this._getSize();
	    },

	    _getSize: function() {
	        var element = this.element;
	        var defaultSize = this._defaultSize();
	        var width = element.offsetWidth;
	        var height = element.offsetHeight;

	        if (!width) {
	            width = defaultSize.width;
	        }

	        if (!height) {
	            height = defaultSize.height;
	        }

	        return { width: width, height: height };
	    },

	    _defaultSize: function() {
	        return {
	            width: DEFAULT_WIDTH,
	            height: DEFAULT_HEIGHT
	        };
	    },

	    _toggleTransitions: function(value) {
	        var this$1 = this;

	        this.options.transitions = value;
	        for (var i = 0; i < this.pointers.length; i++) {
	            this$1.pointers[i].options.animation.transitions = value;
	        }
	    }
	});

	setDefaultOptions(Gauge, {
	    plotArea: {},
	    theme: "default",
	    renderAs: "",
	    pointer: {},
	    scale: {},
	    gaugeArea: {}
	});

	var Path$2 = DrawingPath;
	var Group$2 = DrawingGroup;
	var Point = GeometryPoint;

	function renderAxisTick(tickRenderOptions, tickOptions) {
	    var position = tickRenderOptions.position;
	    var tickX = tickRenderOptions.tickX;
	    var tickY = tickRenderOptions.tickY;
	    var start, end;

	    if (tickRenderOptions.vertical) {
	        start = new Point(tickX, position);
	        end = new Point(tickX + tickOptions.size, position);
	    } else {
	        start = new Point(position, tickY);
	        end = new Point(position, tickY + tickOptions.size);
	    }

	    var tickPath = new Path$2({
	        stroke: {
	            color: tickOptions.color,
	            width: tickOptions.width
	        }
	    }).moveTo(start).lineTo(end);

	    return tickPath;
	}

	function renderTicks(tickGroup, tickPositions, tickRenderOptions, tickOptions) {
	    var count = tickPositions.length;

	    if (tickOptions.visible) {
	        var mirror = tickRenderOptions.mirror;
	        var lineBox = tickRenderOptions.lineBox;
	        for (var i = tickOptions.skip; i < count; i += tickOptions.step) {
	            if (i % tickOptions.skipUnit === 0) {
	                continue;
	            }

	            tickRenderOptions.tickX = mirror ? lineBox.x2 : lineBox.x2 - tickOptions.size;
	            tickRenderOptions.tickY = mirror ? lineBox.y1 - tickOptions.size : lineBox.y1;
	            tickRenderOptions.position = tickPositions[i];

	            tickGroup.append(renderAxisTick(tickRenderOptions, tickOptions));
	        }
	    }
	}

	var LinearScale = NumericAxis.extend({
	    init: function(options, service) {
	        var scaleOptions = options || {};
	        if (!defined(scaleOptions.reverse) && scaleOptions.vertical === false && (service || {}).rtl) {
	            scaleOptions = $.extend({}, scaleOptions, {
	                reverse: true
	            });
	        }

	        NumericAxis.fn.init.call(this, 0, 1, scaleOptions, service);

	        this.options.minorUnit = this.options.minorUnit || this.options.majorUnit / 10;
	    },

	    initUserOptions: function(options) {
	        var scaleOptions = deepExtend({}, this.options, options);
	        scaleOptions = deepExtend({}, scaleOptions , { labels: { mirror: scaleOptions.mirror } });
	        scaleOptions.majorUnit = scaleOptions.majorUnit || dataviz.autoMajorUnit(scaleOptions.min, scaleOptions.max);

	        return scaleOptions;
	    },

	    initFields: function() {
	    },

	    render: function() {
	        var elements = this.elements = new Group$2();
	        var labels = this.renderLabels();
	        var scaleLine = this.renderLine();
	        var scaleTicks = this.renderTicks();
	        var ranges = this.renderRanges();

	        elements.append(scaleLine, labels, scaleTicks, ranges);

	        return elements;
	    },

	    renderRanges: function() {
	        var this$1 = this;

	        var options = this.options;
	        var min = options.min;
	        var max = options.max;
	        var vertical = options.vertical;
	        var mirror = options.labels.mirror;
	        var ranges = options.ranges || [];
	        var elements = new Group$2();
	        var count = ranges.length;
	        var rangeSize = options.rangeSize || options.minorTicks.size / 2;

	        for (var i = 0; i < count; i++) {
	            var range = getRange(ranges[i], min, max);
	            var slot = this$1.getSlot(range.from, range.to);
	            var slotX = vertical ? this$1.lineBox() : slot;
	            var slotY = vertical ? slot : this$1.lineBox();
	            if (vertical) {
	                slotX.x1 -= rangeSize * (mirror ? -1 : 1);
	            } else {
	                slotY.y2 += rangeSize * (mirror ? -1 : 1);
	            }

	            elements.append(Path$2.fromRect(new Rect([ slotX.x1, slotY.y1 ], [ slotX.x2 - slotX.x1, slotY.y2 - slotY.y1 ]), {
	                fill: { color: range.color, opacity: range.opacity },
	                stroke: { }
	            }));
	        }

	        return elements;
	    },

	    renderLabels: function() {
	        var ref = this;
	        var labels = ref.labels;
	        var options = ref.options;
	        var elements = new Group$2();

	        for (var i = 0; i < labels.length; i++) {
	            elements.append(buildLabelElement(labels[i], options.labels));
	        }

	        return elements;
	    },

	    renderLine: function() {
	        var line = this.options.line;
	        var lineBox = this.lineBox();
	        var elements = new Group$2();

	        if (line.width > 0 && line.visible) {
	            var linePath = new Path$2({
	                stroke: {
	                    color: line.color,
	                    dashType: line.dashType,
	                    width: line.width
	                }
	            });

	            linePath.moveTo(lineBox.x1, lineBox.y1).lineTo(lineBox.x2, lineBox.y2);
	            elements.append(linePath);
	        }

	        return elements;
	    },

	    renderTicks: function() {
	        var ticks = new Group$2();
	        var options = this.options;
	        var majorUnit = options.majorTicks.visible ? options.majorUnit : 0;
	        var tickRenderOptions = {
	            vertical: options.vertical,
	            mirror: options.labels.mirror,
	            lineBox: this.lineBox()
	        };

	        renderTicks(ticks, this.getMajorTickPositions(), tickRenderOptions, options.majorTicks);
	        renderTicks(ticks, this.getMinorTickPositions(), tickRenderOptions, deepExtend({}, {
	            skipUnit: majorUnit / options.minorUnit
	        }, options.minorTicks));

	        return ticks;
	    }
	});

	setDefaultOptions(LinearScale, {
	    min: 0,
	    max: 50,

	    majorTicks: {
	        size: 15,
	        align: INSIDE,
	        color: BLACK,
	        width: DEFAULT_LINE_WIDTH,
	        visible: true
	    },

	    minorTicks: {
	        size: 10,
	        align: INSIDE,
	        color: BLACK,
	        width: DEFAULT_LINE_WIDTH,
	        visible: true
	    },

	    line: {
	        width: DEFAULT_LINE_WIDTH
	    },

	    labels: {
	        position: INSIDE,
	        padding: 2
	    },
	    mirror: false,
	    _alignLines: false
	});

	var Pointer = dataviz.Class.extend({
	    init: function(scale, userOptions) {

	        var ref = scale.options;
	        var min = ref.min;
	        var max = ref.max;
	        var options = this.options = deepExtend({}, this.options, userOptions);

	        options.fill = options.color;

	        this.scale = scale;

	        if (defined(options.value)) {
	            options.value = limitValue(options.value, min, max);
	        } else {
	            options.value = min;
	        }
	    },

	    value: function(newValue) {
	        var options = this.options;
	        var value = options.value;

	        if (arguments.length === 0) {
	            return value;
	        }

	        var ref = this.scale.options;
	        var min = ref.min;
	        var max = ref.max;

	        options._oldValue = defined(options._oldValue) ? options.value : min;
	        options.value = limitValue(newValue, min, max);

	        if (this.elements) {
	            this.repaint();
	        }
	    }
	});

	setDefaultOptions(Pointer, {
	    color: BLACK
	});

	var LinearPointer = Pointer.extend({
	    init: function(scale, options) {
	        Pointer.fn.init.call(this, scale, options);

	        this.options = deepExtend({
	            track: {
	                visible: defined(options.track)
	            }
	        }, this.options);
	    },

	    reflow: function() {
	        var ref = this;
	        var options = ref.options;
	        var scale = ref.scale;
	        var ref$1 = scale.options;
	        var mirror = ref$1.mirror;
	        var vertical = ref$1.vertical;
	        var scaleLine = scale.lineBox();
	        var trackSize = options.track.size || options.size;
	        var pointerHalfSize = options.size / 2;
	        var margin = getSpacing(options.margin);
	        var space = vertical ?
	                 margin[mirror ? "left" : "right"] :
	                 margin[mirror ? "bottom" : "top"];
	        var pointerBox, pointerRangeBox, trackBox;

	        space = mirror ? -space : space;

	        if (vertical) {
	            trackBox = new Box(
	                scaleLine.x1 + space, scaleLine.y1,
	                scaleLine.x1 + space, scaleLine.y2);

	            if (mirror) {
	                trackBox.x1 -= trackSize;
	            } else {
	                trackBox.x2 += trackSize;
	            }

	            if (options.shape !== BAR_POINTER) {
	                pointerRangeBox = new Box(
	                    scaleLine.x2 + space, scaleLine.y1 - pointerHalfSize,
	                    scaleLine.x2 + space, scaleLine.y2 + pointerHalfSize
	                );
	                pointerBox = pointerRangeBox;
	            }
	        } else {
	            trackBox = new Box(
	                scaleLine.x1, scaleLine.y1 - space,
	                scaleLine.x2, scaleLine.y1 - space);

	            if (mirror) {
	                trackBox.y2 += trackSize;
	            } else {
	                trackBox.y1 -= trackSize;
	            }

	            if (options.shape !== BAR_POINTER) {
	                pointerRangeBox = new Box(
	                    scaleLine.x1 - pointerHalfSize, scaleLine.y1 - space,
	                    scaleLine.x2 + pointerHalfSize, scaleLine.y1 - space
	                );
	                pointerBox = pointerRangeBox;
	            }
	        }

	        this.trackBox = trackBox;
	        this.pointerRangeBox = pointerRangeBox;
	        this.box = pointerBox || trackBox.clone().pad(options.border.width);
	    },

	    getElementOptions: function() {
	        var options = this.options;

	        return {
	            fill: {
	                color: options.color,
	                opacity: options.opacity
	            },
	            stroke: defined(options.border) ? {
	                color: options.border.width ? options.border.color || options.color : "",
	                width: options.border.width,
	                dashType: options.border.dashType,
	                opacity: options.opacity
	            } : null
	        };
	    },

	    _margin: function() {
	        var ref = this;
	        var scale = ref.scale;
	        var options = ref.options;
	        var ref$1 = scale.options;
	        var mirror = ref$1.mirror;
	        var vertical = ref$1.vertical;
	        var margin = getSpacing(options.margin);

	        var space = vertical ?
	            margin[mirror ? "left" : "right"] :
	            margin[mirror ? "bottom" : "top"];

	        return space;
	    }
	});

	setDefaultOptions(LinearPointer, {
	    shape: BAR_POINTER,

	    track: {
	        border: {
	            width: 1
	        }
	    },

	    color: BLACK,
	    border: {
	        width: 1
	    },
	    opacity: 1,

	    margin: getSpacing(3),
	    animation: {
	        type: BAR_POINTER
	    },
	    visible: true
	});

	var ArrowLinearPointerAnimation = Animation.extend({
	    setup: function() {
	        var options = this.options;
	        var margin = options.margin;
	        var from = options.from;
	        var to = options.to;
	        var vertical = options.vertical;
	        var axis = vertical ? "x1" : "y1";

	        if (options.mirror === vertical) {
	            from[axis] -= margin; to[axis] -= margin;
	        } else {
	            from[axis] += margin; to[axis] += margin;
	        }

	        var fromScale = this.fromScale = new GeometryPoint(from.x1, from.y1);
	        var toScale = this.toScale = new GeometryPoint(to.x1, to.y1);

	        if (options.duration !== 0) {
	            options.duration = Math.max((fromScale.distanceTo(toScale) / options.duration) * 1000, 1);
	        }
	    },

	    step: function(pos) {
	        var translateX = interpolateValue(this.fromScale.x, this.toScale.x, pos);
	        var translateY = interpolateValue(this.fromScale.y, this.toScale.y, pos);

	        this.element.transform(transform().translate(translateX, translateY));
	    }
	});

	setDefaultOptions(ArrowLinearPointerAnimation, {
	    easing: LINEAR,
	    duration: LINEAR_SPEED
	});

	AnimationFactory.current.register(ARROW_POINTER, ArrowLinearPointerAnimation);

	var Point$1 = GeometryPoint;
	var Path$3 = DrawingPath;

	var ArrowLinearPointer = LinearPointer.extend({
	    init: function(scale, options) {
	        LinearPointer.fn.init.call(this, scale, options);

	        if (!defined(this.options.size)) {
	            this.options.size = this.scale.options.majorTicks.size * 0.6;
	        }
	    },

	    pointerShape: function() {
	        var ref = this;
	        var scale = ref.scale;
	        var size = ref.options.size;
	        var halfSize = size / 2;
	        var sign = (scale.options.mirror ? -1 : 1);
	        var shape;

	        if (scale.options.vertical) {
	            shape = [
	                new Point$1(0, 0 - halfSize), new Point$1(0 - sign * size, 0), new Point$1(0, 0 + halfSize)
	            ];
	        } else {
	            shape = [
	                new Point$1(0 - halfSize, 0), new Point$1(0, 0 + sign * size), new Point$1(0 + halfSize, 0)
	            ];
	        }

	        return shape;
	    },

	    repaint: function() {
	        var ref = this;
	        var scale = ref.scale;
	        var options = ref.options;
	        var animation = new ArrowLinearPointerAnimation(this.elements, deepExtend(options.animation, {
	            vertical: scale.options.vertical,
	            mirror: scale.options.mirror,
	            margin: this._margin(options.margin),
	            from: scale.getSlot(options._oldValue),
	            to: scale.getSlot(options.value)
	        }));

	        if (options.animation.transitions === false) {
	            animation.options.duration = 0;
	        }

	        animation.setup();
	        animation.play();
	    },

	    render: function() {
	        var ref = this;
	        var scale = ref.scale;
	        var options = ref.options;
	        var elementOptions = this.getElementOptions();
	        var shape = this.pointerShape(options.value);

	        options.animation.type = ARROW_POINTER;

	        var elements = new Path$3({
	            stroke: elementOptions.stroke,
	            fill: elementOptions.fill
	        }).moveTo(shape[0]).lineTo(shape[1]).lineTo(shape[2]).close();

	        var slot = scale.getSlot(options.value);
	        elements.transform(transform().translate(slot.x1, slot.y1));

	        this.elements = elements;

	        return elements;
	    }
	});

	var BarLinearPointerAnimation = Animation.extend({
	    setup: function() {
	        var options = this.options;
	        var axis = this.axis = options.vertical ? constants.Y : constants.X;
	        var to = this.to = options.newPoints[0][axis];
	        var from = this.from = options.oldPoints[0][axis];

	        if (options.duration !== 0) {
	            options.duration = Math.max((Math.abs(to - from) / options.speed) * 1000, 1);
	        }

	        this._set(from);
	    },

	    step: function(pos) {
	        var value = interpolateValue(this.from, this.to, pos);
	        this._set(value);
	    },

	    _set: function(value) {
	        var setter = "set" + this.axis.toUpperCase();
	        var points = this.options.newPoints;

	        points[0][setter](value);
	        points[1][setter](value);
	    }
	});

	setDefaultOptions(BarLinearPointerAnimation, {
	    easing: LINEAR,
	    speed: LINEAR_SPEED
	});

	AnimationFactory.current.register(BAR_POINTER, BarLinearPointerAnimation);

	var Group$3 = DrawingGroup;
	var Path$4 = DrawingPath;

	var BarLinearPointer = LinearPointer.extend({
	    init: function(scale, options) {
	        LinearPointer.fn.init.call(this, scale, options);

	        if (!defined(this.options.size)) {
	            this.options.size = this.scale.options.majorTicks.size * 0.3;
	        }
	    },

	    pointerShape: function(value) {
	        var ref = this;
	        var scale = ref.scale;
	        var options = ref.options;
	        var ref$1 = scale.options;
	        var mirror = ref$1.mirror;
	        var vertical = ref$1.vertical;
	        var dir = mirror === vertical ? -1 : 1;
	        var size = options.size * dir;
	        var minSlot = scale.getSlot(scale.options.min);
	        var slot = scale.getSlot(value);
	        var axis = vertical ? constants.Y : constants.X;
	        var sizeAxis = vertical ? constants.X : constants.Y;
	        var margin = this._margin() * dir;

	        var p1 = new GeometryPoint();
	        p1[axis] = minSlot[axis + "1"];
	        p1[sizeAxis] = minSlot[sizeAxis + "1"];

	        var p2 = new GeometryPoint();
	        p2[axis] = slot[axis + "1"];
	        p2[sizeAxis] = slot[sizeAxis + "1"];

	        if (vertical) {
	            p1.translate(margin, 0);
	            p2.translate(margin, 0);
	        } else {
	            p1.translate(0, margin);
	            p2.translate(0, margin);
	        }

	        var p3 = p2.clone();
	        var p4 = p1.clone();

	        if (vertical) {
	            p3.translate(size, 0);
	            p4.translate(size, 0);
	        } else {
	            p3.translate(0, size);
	            p4.translate(0, size);
	        }

	        return [ p1, p2, p3, p4 ];
	    },

	    repaint: function() {
	        var ref = this;
	        var scale = ref.scale;
	        var options = ref.options;
	        var shape = this.pointerShape(options.value);
	        var pointerPath = this.pointerPath;
	        var oldShape = this.pointerShape(options._oldValue);

	        pointerPath.moveTo(shape[0]).lineTo(shape[1]).lineTo(shape[2]).lineTo(shape[3]).close();

	        var animation = new BarLinearPointerAnimation(pointerPath, deepExtend(options.animation, {
	            reverse: scale.options.reverse,
	            vertical: scale.options.vertical,
	            oldPoints: [ oldShape[1], oldShape[2] ],
	            newPoints: [ shape[1], shape[2] ]
	        }));

	        if (options.animation.transitions === false) {
	            animation.options.duration = 0;
	        }

	        animation.setup();
	        animation.play();
	    },

	    render: function() {
	        var group = new Group$3();
	        var elementOptions = this.getElementOptions();

	        if (this.options.track.visible) {
	            group.append(this.renderTrack());
	        }

	        var pointer = this.pointerPath = new Path$4({
	            stroke: elementOptions.stroke,
	            fill: elementOptions.fill
	        });

	        group.append(pointer);

	        this.elements = group;

	        return group;
	    },

	    renderTrack: function() {
	        var trackOptions = this.options.track;
	        var border = trackOptions.border || {};
	        var trackBox = this.trackBox.clone().pad(border.width || 0);

	        return new Path$4.fromRect(trackBox.toRect(), {
	            fill: {
	                color: trackOptions.color,
	                opacity: trackOptions.opacity
	            },
	            stroke: {
	                color: border.width ? border.color || trackOptions.color : "",
	                width: border.width,
	                dashType: border.dashType
	            }
	        });
	    }
	});

	var DEFAULT_MIN_WIDTH = 60;
	var DEFAULT_MIN_HEIGHT = 60;

	var Group$1 = DrawingGroup;

	var LinearGauge = Gauge.extend({
	    reflow: function(bbox) {
	        var pointers = this.pointers;
	        var bboxX = bbox.origin.x;
	        var bboxY = bbox.origin.y;

	        var box = new Box(bboxX, bboxY, bboxX + bbox.width(), bboxY + bbox.height());

	        this.scale.reflow(box);
	        this._shrinkScaleWidth(box);

	        for (var i = 0; i < pointers.length; i++) {
	            pointers[i].reflow();
	        }

	        this.bbox = this._getBox(box);
	        this._alignElements();
	        this._shrinkElements();
	        this._buildVisual();
	        this._draw();
	    },

	    _buildVisual: function() {
	        var visuals = new Group$1();
	        var scaleElements = this.scale.render();
	        var pointers = this.pointers;

	        visuals.append(this.gaugeArea);
	        visuals.append(scaleElements);

	        for (var i = 0; i < pointers.length; i++) {
	            var current = pointers[i];
	            visuals.append(current.render());
	            current.value(current.options.value);
	        }

	        this._visuals = visuals;
	    },

	    _createModel: function() {
	        var this$1 = this;

	        var options = this.options;
	        var scale = this.scale = new LinearScale(options.scale, this.contextService);

	        this.pointers = [];

	        var pointers = options.pointer;
	        pointers = isArray(pointers) ? pointers : [ pointers ];

	        for (var i = 0; i < pointers.length; i++) {
	            var currentOptions = deepExtend({}, pointers[i], {
	                animation: {
	                    transitions: options.transitions
	                }
	            });
	            var pointerType = currentOptions.shape === ARROW ? ArrowLinearPointer : BarLinearPointer;

	            this$1.pointers.push(new pointerType(scale, currentOptions));
	        }
	    },

	    _defaultSize: function() {
	        var vertical = this.options.scale.vertical;

	        return {
	            width: vertical ? DEFAULT_MIN_WIDTH : DEFAULT_WIDTH,
	            height: vertical ? DEFAULT_HEIGHT : DEFAULT_MIN_HEIGHT
	        };
	    },

	    _getBox: function(box) {
	        var ref = this;
	        var scale = ref.scale;
	        var pointers = ref.pointers;
	        var boxCenter = box.center();
	        var plotAreaBox = pointers[0].box.clone().wrap(scale.box);

	        for (var i = 0; i < pointers.length; i++) {
	            plotAreaBox.wrap(pointers[i].box.clone());
	        }

	        var size;
	        if (scale.options.vertical) {
	            size = plotAreaBox.width() / 2;
	            plotAreaBox = new Box(
	                boxCenter.x - size, box.y1,
	                boxCenter.x + size, box.y2
	            );
	        } else {
	            size = plotAreaBox.height() / 2;
	            plotAreaBox = new Box(
	                box.x1, boxCenter.y - size,
	                box.x2, boxCenter.y + size
	            );
	        }

	        return plotAreaBox;
	    },

	    _alignElements: function() {
	        var this$1 = this;

	        var ref = this;
	        var scale = ref.scale;
	        var pointers = ref.pointers;
	        var scaleBox = scale.box;
	        var box = pointers[0].box.clone().wrap(scale.box);
	        var plotAreaBox = this.bbox;

	        for (var i = 0; i < pointers.length; i++) {
	            box.wrap(pointers[i].box.clone());
	        }

	        var diff;
	        if (scale.options.vertical) {
	            diff = plotAreaBox.center().x - box.center().x;
	            scale.reflow(new Box(
	                scaleBox.x1 + diff, plotAreaBox.y1,
	                scaleBox.x2 + diff, plotAreaBox.y2
	            ));
	        } else {
	            diff = plotAreaBox.center().y - box.center().y;
	            scale.reflow(new Box(
	                scaleBox.x1, scaleBox.y1 + diff,
	                scaleBox.x2, scaleBox.y2 + diff
	            ));
	        }

	        for (var i$1 = 0; i$1 < pointers.length; i$1++) {
	            pointers[i$1].reflow(this$1.bbox);
	        }
	    },

	    _shrinkScaleWidth: function(bbox) {
	        var ref = this;
	        var scale = ref.scale;
	        if (!scale.options.vertical) {
	            var overflow = scale.contentBox().width() - bbox.width();
	            if (overflow > 0) {
	                scale.box.shrink(overflow, 0);
	                scale.box.alignTo(bbox, 'center');
	                scale.reflow(scale.box);
	            }
	        }
	    },

	    _shrinkElements: function() {
	        var this$1 = this;

	        var ref = this;
	        var scale = ref.scale;
	        var pointers = ref.pointers;
	        var scaleBox = scale.box.clone();
	        var pos = scale.options.vertical ? "y" : "x";
	        var pointerBox = pointers[0].box;

	        for (var i = 0; i < pointers.length; i++) {
	            pointerBox.wrap(pointers[i].box.clone());
	        }

	        scaleBox[pos + 1] += Math.max(scaleBox[pos + 1] - pointerBox[pos + 1], 0);
	        scaleBox[pos + 2] -= Math.max(pointerBox[pos + 2] - scaleBox[pos + 2], 0);

	        scale.reflow(scaleBox);

	        for (var i$1 = 0; i$1 < pointers.length; i$1++) {
	            pointers[i$1].reflow(this$1.bbox);
	        }
	    }
	});

	setDefaultOptions(LinearGauge, {
	    transitions: true,
	    gaugeArea: {
	        background: ""
	    },
	    scale: {
	        vertical: true
	    }
	});

	var GEO_ARC_ADJUST_ANGLE = 180;

	var Arc = drawing.Arc;
	var Path$5 = DrawingPath;
	var Group$5 = DrawingGroup;

	function drawTicks(arc, tickAngles, unit, tickOptions) {
	    var ticks = new Group$5();
	    var center = arc.center;
	    var radius = arc.getRadiusX();

	    if (tickOptions.visible) {
	        for (var i = 0; i < tickAngles.length; i++) {
	            var tickStart = arc.pointAt(tickAngles[i]);
	            var tickEnd = new GeometryPoint(center.x + radius - tickOptions.size, center.y).rotate(tickAngles[i], center);

	            ticks.append(new Path$5({
	                stroke: {
	                    color: tickOptions.color,
	                    width: tickOptions.width
	                }
	            }).moveTo(tickStart).lineTo(tickEnd));
	        }
	    }

	    return ticks;
	}

	function rangeSegment(from, to, color, opacity) {
	    return { from: from, to: to, color: color, opacity: opacity };
	}

	var RadialScale = NumericAxis.extend({
	    init: function(options, service) {
	        NumericAxis.fn.init.call(this, 0, 1, options, service);
	    },

	    initUserOptions: function(options) {
	        var scaleOptions = deepExtend({}, this.options, options);
	        scaleOptions.majorUnit = scaleOptions.majorUnit || dataviz.autoMajorUnit(scaleOptions.min, scaleOptions.max);
	        scaleOptions.minorUnit = scaleOptions.minorUnit || scaleOptions.majorUnit / 10;

	        return scaleOptions;
	    },

	    initFields: function() {
	    },

	    render: function(center, radius) {
	        var arc = this.renderArc(center, radius);

	        this.bbox = arc.bbox();
	        this.labelElements = this.renderLabels();
	        this.ticks = this.renderTicks();
	        this.ranges = this.renderRanges();
	    },

	    reflow: function(bbox) {
	        var center = bbox.center();
	        var radius = Math.min(bbox.height(), bbox.width()) / 2;

	        if (defined(this.bbox)) {
	            this.bbox = this.arc.bbox();
	            this.radius(this.arc.getRadiusX());
	            this.repositionRanges();
	            this.renderLabels();
	        } else {
	            return this.render(center, radius);
	        }
	    },

	    slotAngle: function(value) {
	        var ref = this.options;
	        var min = ref.min;
	        var max = ref.max;
	        var reverse = ref.reverse;
	        var startAngle = ref.startAngle;
	        var endAngle = ref.endAngle;
	        var angle = endAngle - startAngle;
	        var result;

	        if (reverse) {
	            result = endAngle - (value - min) / (max - min) * angle;
	        } else {
	            result = ((value - min) / (max - min) * angle) + startAngle;
	        }

	        return result + GEO_ARC_ADJUST_ANGLE;
	    },

	    hasRanges: function() {
	        var ranges = this.options.ranges;

	        return ranges && ranges.length;
	    },

	    ticksSize: function() {
	        var ref = this.options;
	        var majorTicks = ref.majorTicks;
	        var minorTicks = ref.minorTicks;
	        var size = 0;
	        if (majorTicks.visible) {
	            size = majorTicks.size;
	        }

	        if (minorTicks.visible) {
	            size = Math.max(minorTicks.size, size);
	        }

	        return size;
	    },

	    labelsCount: function() {
	        var count = NumericAxis.fn.labelsCount.call(this);
	        var options = this.options;
	        var angle = options.endAngle - options.startAngle;

	        if (angle >= 360 && (options.max % options.majorUnit === 0)) {
	            count -= 1;
	        }

	        return count;
	    },

	    renderLabels: function() {
	        var this$1 = this;

	        var options = this.options;
	        var arc = this.arc.clone();
	        var radius = arc.getRadiusX();
	        var tickAngles = this.tickAngles(arc, options.majorUnit);
	        var rangeSize = options.rangeSize = options.rangeSize || radius * 0.1;
	        var labelsGroup = new Group$5();

	        var rangeDistance = radius * 0.05;
	        if (defined(options.rangeDistance)) {
	            rangeDistance = options.rangeDistance;
	        } else {
	            options.rangeDistance = rangeDistance;
	        }

	        var labelsOptions = options.labels;
	        var isInside = labelsOptions.position === INSIDE;
	        var hasLabelElements = defined(this.labelElements);

	        if (isInside) {
	            radius -= this.ticksSize();

	            if (this.hasRanges() && !hasLabelElements) {
	                radius -= rangeSize + rangeDistance;
	            }
	            arc.setRadiusX(radius).setRadiusY(radius);
	        }

	        var labels = this.labels;
	        var count = labels.length;
	        var padding = getSpacing(labelsOptions.padding);
	        var paddingWidth = (padding.left + padding.right) / 2;
	        var paddingHeight = (padding.top + padding.bottom) / 2;

	        for (var i = 0; i < count; i++) {
	            var label = labels[i];
	            var halfWidth = label.box.width() / 2;
	            var halfHeight = label.box.height() / 2;
	            var angle = tickAngles[i];
	            var labelAngle = (angle - GEO_ARC_ADJUST_ANGLE) * DEGREE;

	            var lp = arc.pointAt(angle);
	            var cx = lp.x + (Math.cos(labelAngle) * (halfWidth + paddingWidth) * (isInside ? 1 : -1));
	            var cy = lp.y + (Math.sin(labelAngle) * (halfHeight + paddingHeight) * (isInside ? 1 : -1));

	            label.reflow(new Box(cx - halfWidth, cy - halfHeight, cx + halfWidth, cy + halfHeight));
	            var labelPos = new GeometryPoint(label.box.x1, label.box.y1);

	            var labelElement = (void 0);
	            if (!hasLabelElements) {
	                labelElement = buildLabelElement(label, options.labels);
	                labelsGroup.append(labelElement);
	            } else {
	                labelElement = this$1.labelElements.children[i];
	                var prevLabelPos = labelElement.bbox().origin;

	                var labelTransform = labelElement.transform() || transform();
	                labelTransform.translate(labelPos.x - prevLabelPos.x, labelPos.y - prevLabelPos.y);
	                labelElement.transform(labelTransform);
	            }

	            this$1.bbox = Rect.union(this$1.bbox, labelElement.bbox());
	        }

	        return labelsGroup;
	    },

	    repositionRanges: function() {
	        var ranges = this.ranges.children;

	        if (ranges.length > 0) {
	            var ref = this.options;
	            var rangeDistance = ref.rangeDistance;
	            var rangeSize = ref.rangeSize;
	            var rangeRadius = this.getRangeRadius();

	            if (this.options.labels.position === INSIDE) {
	                rangeRadius += rangeSize + rangeDistance;
	            }

	            var newRadius = rangeRadius + (rangeSize / 2);

	            for (var i = 0; i < ranges.length; i++) {
	                ranges[i]._geometry.setRadiusX(newRadius).setRadiusY(newRadius);
	            }

	            this.bbox = Rect.union(this.bbox, this.ranges.bbox());
	        }
	    },

	    renderRanges: function() {
	        var this$1 = this;

	        var segments = this.rangeSegments();
	        var segmentsCount = segments.length;
	        var result = new Group$5();

	        if (segmentsCount) {
	            var ref = this.options;
	            var rangeSize = ref.rangeSize;
	            var reverse = ref.reverse;
	            var rangeDistance = ref.rangeDistance;
	            var rangeRadius = this.getRangeRadius();

	            // move the ticks with a range distance and a range size
	            this.radius(this.radius() - rangeSize - rangeDistance);

	            for (var i = 0; i < segmentsCount; i++) {
	                var segment = segments[i];
	                var from = this$1.slotAngle(segment[reverse ? "to" : "from"]);
	                var to = this$1.slotAngle(segment[!reverse ? "to" : "from"]);

	                if (to - from !== 0) {
	                    result.append(this$1.createRange(from, to, rangeRadius, segment));
	                }
	            }
	        }

	        return result;
	    },

	    createRange: function(startAngle, endAngle, rangeRadius, options) {
	        var rangeSize = this.options.rangeSize;
	        var rangeGeom = new geometry.Arc(this.arc.center, {
	            radiusX: rangeRadius + (rangeSize / 2),
	            radiusY: rangeRadius + (rangeSize / 2),
	            startAngle: startAngle,
	            endAngle: endAngle
	        });

	        return new Arc(rangeGeom, {
	            stroke: {
	                width: rangeSize,
	                color: options.color,
	                opacity: options.opacity,
	                lineCap: options.lineCap
	            }
	        });
	    },

	    rangeSegments: function() {
	        var options = this.options;
	        var ranges = options.ranges || [];
	        var count = ranges.length;
	        var segments = [];

	        if (count) {
	            var min = options.min;
	            var max = options.max;
	            var defaultColor = options.rangePlaceholderColor;
	            segments.push(rangeSegment(min, max, defaultColor));

	            for (var i = 0; i < count; i++) {
	                var range = getRange(ranges[i], min, max);
	                var segmentsCount = segments.length;

	                for (var j = 0; j < segmentsCount; j++) {
	                    var segment = segments[j];

	                    if (segment.from <= range.from && range.from <= segment.to) {
	                        segments.push(rangeSegment(range.from, range.to, range.color, range.opacity));

	                        if (segment.from <= range.to && range.to <= segment.to) {
	                            segments.push(rangeSegment(range.to, segment.to, defaultColor, range.opacity));
	                        }

	                        segment.to = range.from;

	                        break;
	                    }
	                }
	            }
	        }

	        return segments;
	    },

	    getRangeRadius: function() {
	        var ref = this;
	        var arc = ref.arc;
	        var options = ref.options;
	        var rangeSize = options.rangeSize;
	        var rangeDistance = options.rangeDistance;
	        var majorTickSize = options.majorTicks.size;
	        var radius;

	        if (options.labels.position === OUTSIDE) {
	            radius = arc.getRadiusX() - majorTickSize - rangeDistance - rangeSize;
	        } else {
	            radius = arc.getRadiusX() - rangeSize;
	        }

	        return radius;
	    },

	    renderArc: function(center, radius) {
	        var options = this.options;

	        var arc = this.arc = new geometry.Arc(center, {
	            radiusX: radius,
	            radiusY: radius,
	            startAngle: options.startAngle + GEO_ARC_ADJUST_ANGLE,
	            endAngle: options.endAngle + GEO_ARC_ADJUST_ANGLE
	        });

	        return arc;
	    },

	    renderTicks: function() {
	        var ref = this;
	        var arc = ref.arc;
	        var options = ref.options;
	        var tickArc = arc.clone();

	        this.majorTickAngles = this.tickAngles(arc, options.majorUnit);
	        this.majorTicks = drawTicks(tickArc, this.majorTickAngles, options.majorUnit, options.majorTicks);

	        var allTicks = new Group$5();
	        allTicks.append(this.majorTicks);

	        var majorTickSize = options.majorTicks.size;
	        var minorTickSize = options.minorTicks.size;

	        this._tickDifference = majorTickSize - minorTickSize;

	        if (options.labels.position === OUTSIDE) {
	            var radius = tickArc.getRadiusX();
	            tickArc.setRadiusX(radius - majorTickSize + minorTickSize)
	                   .setRadiusY(radius - majorTickSize + minorTickSize);
	        }

	        this.minorTickAngles = this.normalizeTickAngles(this.tickAngles(arc, options.minorUnit));
	        this.minorTicks = drawTicks(tickArc, this.minorTickAngles, options.minorUnit, options.minorTicks);
	        allTicks.append(this.minorTicks);

	        return allTicks;
	    },

	    normalizeTickAngles: function(angles) {
	        var options = this.options;
	        var skip = options.majorUnit / options.minorUnit;

	        for (var i = angles.length - 1; i >= 0; i--) {
	            if (i % skip === 0) {
	                angles.splice(i, 1);
	            }
	        }

	        return angles;
	    },

	    tickAngles: function(ring, stepValue) {
	        var options = this.options;
	        var reverse = options.reverse;
	        var range = options.max - options.min;
	        var angle = ring.endAngle - ring.startAngle;
	        var tickCount = range / stepValue;
	        var pos = ring.startAngle;
	        var step = angle / tickCount;

	        if (reverse) {
	            pos += angle;
	            step = -step;
	        }

	        if (angle >= 360 && (options.max % stepValue === 0)) {
	            tickCount -= 1;
	        }

	        var positions = [];
	        for (var i = 0; i < tickCount; i++) {
	            positions.push(round(pos, COORD_PRECISION));
	            pos += step;
	        }

	        if (round(pos) <= ring.endAngle) {
	            positions.push(pos);
	        }

	        return positions;
	    },

	    radius: function(value) {
	        if (value) {
	            this.arc.setRadiusX(value).setRadiusY(value);
	            this.repositionTicks(this.majorTicks.children, this.majorTickAngles);
	            this.repositionTicks(this.minorTicks.children, this.minorTickAngles, true);
	        } else {
	            return this.arc.getRadiusX();
	        }
	    },

	    repositionTicks: function(ticks, tickAngles, minor) {
	        var diff = minor ? (this._tickDifference || 0) : 0;
	        var tickArc = this.arc;
	        var radius = tickArc.getRadiusX();

	        if (minor && this.options.labels.position === OUTSIDE && diff !== 0) {
	            tickArc = this.arc.clone();
	            tickArc.setRadiusX(radius - diff).setRadiusY(radius - diff);
	        }

	        for (var i = 0; i < ticks.length; i++) {
	            var newPoint = tickArc.pointAt(tickAngles[i]);
	            var segments = ticks[i].segments;
	            var xDiff = newPoint.x - segments[0].anchor().x;
	            var yDiff = newPoint.y - segments[0].anchor().y;

	            ticks[i].transform(new transform().translate(xDiff, yDiff));
	        }
	    }
	});

	setDefaultOptions(RadialScale, {
	    min: 0,
	    max: 100,

	    majorTicks: {
	        size: 15,
	        align: INSIDE,
	        color: BLACK,
	        width: DEFAULT_LINE_WIDTH,
	        visible: true
	    },

	    minorTicks: {
	        size: 10,
	        align: INSIDE,
	        color: BLACK,
	        width: DEFAULT_LINE_WIDTH,
	        visible: true
	    },

	    startAngle: -30,
	    endAngle: 210,

	    labels: {
	        position: INSIDE,
	        padding: 2
	    }
	});

	var RadialPointerAnimation = Animation.extend({
	    init: function(element, options) {
	        Animation.fn.init.call(this, element, options);

	        var animationOptions = this.options;

	        animationOptions.duration = Math.max((Math.abs(animationOptions.newAngle - animationOptions.oldAngle) / animationOptions.duration) * 1000, 1);
	    },

	    step: function(pos) {
	        var options = this.options;
	        var angle = interpolateValue(options.oldAngle, options.newAngle, pos);

	        this.element.transform(transform().rotate(angle, options.center));
	    }
	});

	setDefaultOptions(RadialPointerAnimation, {
	    easing: LINEAR,
	    duration: ANGULAR_SPEED
	});

	AnimationFactory.current.register(RADIAL_POINTER, RadialPointerAnimation);

	var CAP_SIZE = 0.05;
	var Circle = drawing.Circle;
	var Group$6 = DrawingGroup;
	var Path$6 = DrawingPath;

	var RadialPointer = Pointer.extend({
	    setAngle: function(angle) {
	        this.elements.transform(transform().rotate(angle, this.center));
	    },

	    repaint: function() {
	        var ref = this;
	        var scale = ref.scale;
	        var options = ref.options;
	        var oldAngle = scale.slotAngle(options._oldValue);
	        var newAngle = scale.slotAngle(options.value);

	        if (options.animation.transitions === false) {
	            this.setAngle(newAngle);
	        } else {
	            new RadialPointerAnimation(this.elements, deepExtend(options.animation, {
	                oldAngle: oldAngle,
	                newAngle: newAngle
	            })).play();
	        }
	    },

	    render: function() {
	        var ref = this;
	        var scale = ref.scale;
	        var options = ref.options;
	        var elements = new Group$6();

	        if (options.animation !== false) {
	            deepExtend(options.animation, {
	                startAngle: 0,
	                center: scale.arc.center,
	                reverse: scale.options.reverse
	            });
	        }

	        elements.append(this._renderNeedle(), this._renderCap());

	        this.elements = elements;
	        this.setAngle(DEGREE);

	        return elements;
	    },

	    reflow: function(arc) {
	        var center = this.center = arc.center;
	        var length = limitValue(this.options.length || 1, 0.1, 1.5);
	        var radius = this.radius = arc.getRadiusX() * length;
	        var capSize = this.capSize = Math.round(radius * this.options.cap.size);

	        this.bbox = Rect.fromPoints(new GeometryPoint(center.x - capSize, center.y - capSize),
	                                    new GeometryPoint(center.x + capSize, center.y + capSize));
	    },

	    _renderNeedle: function() {
	        var minorTickSize = this.scale.options.minorTicks.size;
	        var center = this.center;
	        var needleColor = this.options.color;

	        var needlePath = new Path$6({
	            fill: { color: needleColor },
	            stroke: { color: needleColor, width: DEFAULT_LINE_WIDTH }
	        });

	        needlePath.moveTo(center.x + this.radius - minorTickSize, center.y)
	                  .lineTo(center.x, center.y - (this.capSize / 2))
	                  .lineTo(center.x, center.y + (this.capSize / 2))
	                  .close();

	        return needlePath;
	    },

	    _renderCap: function() {
	        var options = this.options;
	        var capColor = options.cap.color || options.color;
	        var circle = new geometry.Circle(this.center, this.capSize);

	        var cap = new Circle(circle, {
	            fill: { color: capColor },
	            stroke: { color: capColor }
	        });

	        return cap;
	    }
	});

	setDefaultOptions(RadialPointer, {
	    cap: {
	        size: CAP_SIZE
	    },
	    arrow: {
	        width: 16,
	        height: 14
	    },
	    animation: {
	        type: RADIAL_POINTER,
	        duration: ANGULAR_SPEED
	    }
	});

	var Group$4 = DrawingGroup;

	var RadialGauge = Gauge.extend({
	    reflow: function(bbox) {
	        var this$1 = this;

	        var pointers = this.pointers;
	        this.scale.reflow(bbox);
	        this._initialPlotArea = this.scale.bbox;

	        for (var i = 0; i < pointers.length; i++) {
	            pointers[i].reflow(this$1.scale.arc);
	            this$1._initialPlotArea = Rect.union(this$1._initialPlotArea, pointers[i].bbox);
	        }

	        this.fitScale(bbox);
	        this.alignScale(bbox);
	        this._buildVisual(this.gaugeArea, pointers, this.scale);
	        this._draw();
	    },

	    _buildVisual: function(gaugeArea, pointers, scale) {
	        var visuals = this._visuals = new Group$4();

	        visuals.append(gaugeArea);
	        visuals.append(scale.ticks);
	        visuals.append(scale.ranges);
	        this._buildPointers(pointers);
	        visuals.append(scale.labelElements);
	    },

	    _buildPointers: function(pointers) {
	        var this$1 = this;

	        for (var i = 0; i < pointers.length; i++) {
	            var current = pointers[i];
	            current.render();
	            this$1._visuals.append(current.elements);

	            current.value(current.options.value);
	        }
	    },

	    fitScale: function(bbox) {
	        var this$1 = this;

	        var arc = this.scale.arc;
	        var plotAreaBox = this._initialPlotArea;
	        var step = Math.abs(this.getDiff(plotAreaBox, bbox));
	        var min = round(step, COORD_PRECISION);
	        var max = round(-step, COORD_PRECISION);
	        var minDiff, midDiff, maxDiff, mid, oldDiff;
	        var staleFlag = 0;
	        var i = 0;

	        while (i++ < 100) {
	            staleFlag = (oldDiff === maxDiff) ? (staleFlag + 1) : 0;

	            if (staleFlag > 5) {
	                break;
	            }

	            if (min !== mid) {
	                minDiff = this$1.getPlotBox(min, bbox, arc);
	                if (0 <= minDiff && minDiff <= 2) {
	                    break;
	                }
	            }

	            if (max !== mid) {
	                maxDiff = this$1.getPlotBox(max, bbox, arc);
	                if (0 <= maxDiff && maxDiff <= 2) {
	                    break;
	                }
	            }

	            if (minDiff > 0 && maxDiff > 0) {
	                mid = min * 2;
	            } else if (minDiff < 0 && maxDiff < 0) {
	                mid = max * 2;
	            } else {
	                mid = round(((min + max) / 2) || 1, COORD_PRECISION);
	            }

	            midDiff = this$1.getPlotBox(mid, bbox, arc);
	            if (0 <= midDiff && midDiff <= 2) {
	                break;
	            }

	            oldDiff = maxDiff;

	            if (midDiff > 0) {
	                max = mid;
	                maxDiff = midDiff;
	            } else {
	                min = mid;
	                minDiff = midDiff;
	            }
	        }
	    },

	    getPlotBox: function(step, bbox, arc) {
	        var this$1 = this;

	        var scale = this.scale;
	        var pointers = this.pointers;
	        var radius = arc.getRadiusX();
	        var scaleArc = arc.clone();

	        scaleArc.setRadiusX(radius + step).setRadiusY(radius + step);

	        scale.arc = scaleArc;
	        scale.reflow(bbox);
	        this.plotBbox = scale.bbox;

	        for (var i = 0; i < pointers.length; i++) {
	            pointers[i].reflow(scaleArc);
	            this$1.plotBbox = Rect.union(this$1.plotBbox, pointers[i].bbox);
	        }

	        return this.getDiff(this.plotBbox, bbox);
	    },

	    getDiff: function(plotBox, box) {
	        return Math.min(box.width() - plotBox.width(), box.height() - plotBox.height());
	    },

	    alignScale: function(bbox) {
	        var this$1 = this;

	        var plotBoxCenter = this.plotBbox.center();
	        var boxCenter = bbox.center();
	        var paddingX = plotBoxCenter.x - boxCenter.x;
	        var paddingY = plotBoxCenter.y - boxCenter.y;
	        var ref = this;
	        var scale = ref.scale;
	        var pointers = ref.pointers;

	        scale.arc.center.x -= paddingX;
	        scale.arc.center.y -= paddingY;

	        scale.reflow(bbox);

	        for (var i = 0; i < pointers.length; i++) {
	            pointers[i].reflow(scale.arc);
	            this$1.plotBbox = Rect.union(scale.bbox, pointers[i].bbox);
	        }
	    },

	    _createModel: function() {
	        var this$1 = this;

	        var options = this.options;
	        var pointers = options.pointer;
	        var scale = this.scale = new RadialScale(options.scale, this.contextService);

	        this.pointers = [];

	        var pointersArr = isArray(pointers) ? pointers : [ pointers ];
	        for (var i = 0; i < pointersArr.length; i++) {
	            var current = new RadialPointer(scale, deepExtend({}, pointersArr[i], {
	                animation: {
	                    transitions: options.transitions
	                }
	            }));

	            this$1.pointers.push(current);
	        }
	    }
	});

	setDefaultOptions(RadialGauge, {
	    transitions: true,
	    gaugeArea: {
	        background: ""
	    }
	});

	var ArcScale = RadialScale.extend({
	    rangeSegments: function() {
	        var ref = this.options;
	        var min = ref.min;
	        var max = ref.max;
	        var rangePlaceholderColor = ref.rangePlaceholderColor;
	        var rangeLineCap = ref.rangeLineCap;

	        return [ { from: min, to: max, color: rangePlaceholderColor, lineCap: rangeLineCap } ];
	    },

	    hasRanges: function() {
	        return true;
	    },

	    placeholderRangeAngle: function(angle) {
	        var geometry$$1 = this.ranges.children[0].geometry();

	        if (this.options.reverse) {
	            geometry$$1.setEndAngle(angle);
	        } else {
	            geometry$$1.setStartAngle(angle);
	        }
	    },

	    addRange: function(from, to, options) {
	        var reverse = this.options.reverse;

	        var startAngle = this.slotAngle(reverse ? to : from);
	        var endAngle = this.slotAngle(reverse ? from : to);

	        var range = this.createRange(startAngle, endAngle, this.getRangeRadius(), options);

	        this.ranges.append(range);

	        return range;
	    }
	});

	setDefaultOptions(ArcScale, {
	    min: 0,
	    max: 100,

	    majorTicks: {
	        visible: false
	    },

	    minorTicks: {
	        visible: false
	    },

	    labels: {
	        visible: false
	    },

	    startAngle: 0,
	    endAngle: 180,
	    rangeLineCap: 'round'
	});

	var MAX_DURATION = 800;

	var RangePointerAnimation = Animation.extend({
	    init: function(element, options) {
	        Animation.fn.init.call(this, element, options);

	        var animationOptions = this.options;
	        var duration = (Math.abs(animationOptions.newAngle - animationOptions.oldAngle) / animationOptions.duration) * 1000;
	        animationOptions.duration = limitValue(duration, ANGULAR_SPEED, MAX_DURATION);

	        var startColor = element.elements.options.get("stroke.color");
	        var color = element.currentColor();
	        if (startColor !== color) {
	            this.startColor = new kendo.Color(startColor);
	            this.color = new kendo.Color(color);
	        }
	    },

	    step: function(pos) {
	        var ref = this;
	        var options = ref.options;
	        var startColor = ref.startColor;
	        var color = ref.color;
	        var angle = interpolateValue(options.oldAngle, options.newAngle, pos);
	        this.element.angle(angle);

	        if (color) {
	            var r = round(interpolateValue(startColor.r, color.r, pos));
	            var g = round(interpolateValue(startColor.g, color.g, pos));
	            var b = round(interpolateValue(startColor.b, color.b, pos));

	            this.element.stroke(new kendo.Color(r, g, b).toHex());
	        }
	    }
	});

	setDefaultOptions(RangePointerAnimation, {
	    easing: LINEAR,
	    duration: ANGULAR_SPEED
	});

	AnimationFactory.current.register(RADIAL_RANGE_POINTER, RangePointerAnimation);

	var RangePointer = Pointer.extend({
	    repaint: function() {
	        var ref = this;
	        var scale = ref.scale;
	        var options = ref.options;
	        var oldAngle = scale.slotAngle(options._oldValue);
	        var newAngle = scale.slotAngle(options.value);

	        if (this.animation) {
	            this.animation.abort();
	        }

	        if (options.animation.transitions === false) {
	            this.angle(newAngle);
	            this.stroke(this.currentColor());
	        } else {
	            this.animation = new RangePointerAnimation(this, deepExtend(options.animation, {
	                oldAngle: oldAngle,
	                newAngle: newAngle
	            }));

	            this.animation.play();
	        }
	    },

	    angle: function(value) {
	        var geometry$$1 = this.elements.geometry();
	        if (this.scale.options.reverse) {
	            geometry$$1.setStartAngle(value);
	        } else {
	            geometry$$1.setEndAngle(value);
	        }
	        this.scale.placeholderRangeAngle(value);
	    },

	    stroke: function(value) {
	        this.elements.stroke(value);
	    },

	    render: function() {
	        if (this.elements) {
	            return;
	        }

	        var ref = this;
	        var scale = ref.scale;
	        var options = ref.options;

	        if (options.animation !== false) {
	            deepExtend(options.animation, {
	                startAngle: 0,
	                center: scale.arc.center,
	                reverse: scale.options.reverse
	            });
	        }

	        this.elements = scale.addRange(scale.options.min, this.options.value, {
	            color: this.currentColor(),
	            opacity: options.opacity,
	            lineCap: scale.options.rangeLineCap
	        });
	    },

	    currentColor: function() {
	        var ref = this.scale.options;
	        var min = ref.min;
	        var max = ref.max;
	        var ref$1 = this.options;
	        var colors = ref$1.colors;
	        var color = ref$1.color;
	        var value = ref$1.value;
	        var currentValue = dataviz.isNumber(value) ? value : min;

	        if (colors) {
	            for (var idx = 0; idx < colors.length; idx++) {
	                var ref$2 = colors[idx];
	                var rangeColor = ref$2.color;
	                var from = ref$2.from; if (from === void 0) { from = min; }
	                var to = ref$2.to; if (to === void 0) { to = max; }

	                if (from <= currentValue && currentValue <= to) {
	                    return rangeColor;
	                }
	            }
	        }

	        return color;
	    },

	    reflow: function() {
	        this.render();

	        this.bbox = this.elements.bbox();
	    }
	});

	setDefaultOptions(RangePointer, {
	    animation: {
	        type: RADIAL_RANGE_POINTER,
	        duration: ANGULAR_SPEED
	    }
	});

	var ArcGauge = RadialGauge.extend({
	    _initTheme: function(theme) {
	        RadialGauge.fn._initTheme.call(this, theme);

	        this.options.color = this.options.color || (this.theme.pointer || {}).color;
	    },

	    _createModel: function() {
	        var options = this.options;
	        var scale = this.scale = new ArcScale(options.scale, this.contextService);

	        var pointer = new RangePointer(scale, deepExtend({}, {
	            colors: options.colors,
	            color: options.color,
	            value: options.value,
	            opacity: options.opacity,
	            animation: {
	                transitions: options.transitions
	            }
	        }));

	        this.pointers = [ pointer ];
	    },

	    _buildPointers: function(pointers) {
	        for (var i = 0; i < pointers.length; i++) {
	            var current = pointers[i];
	            current.render();

	            current.value(current.options.value);
	        }
	    },

	    _setValueOptions: function(value) {
	        this.options.value = value;
	    },

	    currentColor: function() {
	        var pointer = this.pointers[0];
	        if (pointer) {
	            return pointer.currentColor();
	        }
	    },

	    centerLabelPosition: function(width, height) {
	        var size = this.getSize();
	        var center = this.scale.arc.center;

	        var left = center.x - width / 2;
	        var top = center.y - height / 2;

	        if (width < size.width) {
	            var right = left + width;

	            left = Math.max(left, 0);

	            if (right > size.width) {
	                left -= right - size.width;
	            }
	        }

	        if (height < size.height) {
	            var bbox = this.scale.bbox;
	            var yLimit = bbox.bottomRight().y;
	            var bottom = top + height;

	            top = Math.max(top, bbox.origin.y);

	            if (bottom > yLimit) {
	                top -= bottom - yLimit;
	            }
	        }

	        return {
	            left: left,
	            top: top
	        };
	    }
	});

	var defaultStartAngle = 90;

	var CircularGauge = ArcGauge.extend({
	    _createModel: function() {
	        var scaleOptions = this.options.scale;
	        if (typeof scaleOptions.startAngle !== 'number') {
	            scaleOptions.startAngle = defaultStartAngle;
	        }

	        scaleOptions.endAngle = scaleOptions.startAngle + 360;

	        ArcGauge.fn._createModel.call(this);
	    }
	});

	kendo.deepExtend(kendo.dataviz, {
	    Gauge: Gauge,
	    LinearGauge: LinearGauge,
	    LinearPointer: LinearPointer,
	    ArrowLinearPointer: ArrowLinearPointer,
	    BarLinearPointer: BarLinearPointer,
	    LinearScale: LinearScale,
	    RadialGauge: RadialGauge,
	    RadialPointer: RadialPointer,
	    RadialScale: RadialScale,
	    ArcGauge: ArcGauge,
	    RangePointer: RangePointer,
	    ArcScale: ArcScale,
	    CircularGauge: CircularGauge
	});

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ })

/******/ });