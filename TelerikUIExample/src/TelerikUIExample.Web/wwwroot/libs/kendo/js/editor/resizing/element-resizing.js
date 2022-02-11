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

	module.exports = __webpack_require__(1015);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 982:
/***/ (function(module, exports) {

	module.exports = require("../main");

/***/ }),

/***/ 1011:
/***/ (function(module, exports) {

	module.exports = require("./resizing-utils");

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(982), __webpack_require__(1016), __webpack_require__(1011)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	(function(kendo, undefined) {
	    var global = window;
	    var math = global.Math;
	    var min = math.min;
	    var max = math.max;

	    var $ = kendo.jQuery;
	    var contains = $.contains;
	    var extend = $.extend;
	    var proxy = $.proxy;

	    var browser = kendo.support.browser;
	    var Editor = kendo.ui.editor;
	    var Class = kendo.Class;
	    var ElementResizeHandle = Editor.ElementResizeHandle;
	    var ResizingUtils = Editor.ResizingUtils;
	    var calculatePercentageRatio = ResizingUtils.calculatePercentageRatio;
	    var constrain = ResizingUtils.constrain;
	    var inPercentages = ResizingUtils.inPercentages;
	    var inPixels = ResizingUtils.inPixels;
	    var toPercentages = ResizingUtils.toPercentages;
	    var toPixels = ResizingUtils.toPixels;
	    var outerWidth = kendo._outerWidth;
	    var outerHeight = kendo._outerHeight;
	    var RangeUtils = Editor.RangeUtils;

	    var NS = ".kendoEditorElementResizing";
	    var RESIZE_HANDLE_WRAPPER_CLASS = "k-element-resize-handle-wrapper";
	    var TABLE_CLASS = "k-table";
	    var ELEMENT_RESIZING_CLASS = "k-element-resizing";

	    var DRAG_START = "dragStart";
	    var DRAG = "drag";
	    var DRAG_END = "dragEnd";
	    var KEY_DOWN = "keydown";
	    var MOUSE_DOWN = "mousedown";
	    var MOUSE_OVER = "mouseover";
	    var MOUSE_OUT = "mouseout";
	    var SELECT = "select";
	    var DROP = "drop";

	    var COLUMN = "td";
	    var ROW = "tr";
	    var TBODY = "tbody";
	    var THEAD = "thead";
	    var TABLE = "table";
	    var IMG = "img";
	    var ELEMENT_TYPES = ["TABLE", "IMG"];

	    var COMMA = ",";
	    var WIDTH = "width";
	    var HEIGHT = "height";

	    var EAST = "east";
	    var NORTH = "north";
	    var NORTHEAST = "northeast";
	    var NORTHWEST = "northwest";
	    var SOUTH = "south";
	    var SOUTHEAST = "southeast";
	    var SOUTHWEST = "southwest";
	    var WEST = "west";

	    var DOT = ".";

	    function isUndefined(value) {
	        return typeof(value) === "undefined";
	    }

	    var ElementResizing = Class.extend({
	        init: function(element, options) {
	            var that = this;

	            that.options = extend({}, that.options, options);
	            that.handles = [];

	            // Check whether the element is TABLE or IMG
	            if (ELEMENT_TYPES.indexOf(element.nodeName) >= 0) {
	                that.element = element;
	            }
	        },

	        destroy: function() {
	            var that = this;

	            $(that.element).off(NS);
	            that.element = null;

	            $(that.options.rootElement).off(KEY_DOWN + NS);

	            that._destroyResizeHandles();
	        },

	        options: {
	            appendHandlesTo: null,
	            rtl: false,
	            rootElement: null,
	            minWidth: 10,
	            minHeight: 10,
	            handles: [{
	                direction: NORTHWEST
	            }, {
	                direction: NORTH
	            }, {
	                direction: NORTHEAST
	            }, {
	                direction: EAST
	            }, {
	                direction: SOUTHEAST
	            }, {
	                direction: SOUTH
	            }, {
	                direction: SOUTHWEST
	            }, {
	                direction: WEST
	            }]
	        },

	        resize: function(args) {
	            var that = this;
	            var deltas = extend({}, {
	                deltaX: 0,
	                deltaY: 0,
	                initialDeltaX: 0,
	                initialDeltaY: 0
	            }, args);

	            that._resizeWidth(deltas.deltaX, deltas.initialDeltaX);
	            that._resizeHeight(deltas.deltaY, deltas.initialDeltaY);

	            that.showResizeHandles();
	        },

	        _resizeWidth: function() {
	            return false;
	        },

	        _resizeHeight: function() {
	            return false;
	        },

	        _getMaxDimensionValue: function(dimension) {
	            var that = this;
	            var element = $(that.element);
	            var dimensionLowercase = dimension.toLowerCase();
	            var rtlModifier = that.options.rtl ? (-1) : 1;
	            var parent = $(that.element).parent();
	            var parentElement = parent[0];
	            var parentDimension = parent[dimensionLowercase]();
	            var parentScrollOffset = rtlModifier * (dimension === WIDTH ? kendo.scrollLeft(parent) : parent.scrollTop());

	            if (parentElement && parentElement === element.closest(COLUMN)[0]) {
	                if (parentElement.style[dimensionLowercase] === "" && !inPercentages(that.element.style[dimensionLowercase])) {
	                    return Infinity;
	                }
	                else {
	                    return (parentDimension + parentScrollOffset);
	                }
	            }
	            else {
	                return (parentDimension + parentScrollOffset);
	            }
	        },

	        showResizeHandles: function() {
	            var that = this;

	            that._initResizeHandles();
	            that._showResizeHandles();
	        },

	        _initResizeHandles: function() {
	            var that = this;
	            var handles = that.handles;
	            var options = that.options;
	            var handleOptions = that.options.handles;
	            var length = handleOptions.length;
	            var i;

	            if (handles && handles.length > 0) {
	                return;
	            }

	            for (i = 0; i < length; i++) {
	                that.handles.push(new ElementResizeHandle(extend({
	                    appendTo: options.appendHandlesTo,
	                    resizableElement: that.element,
	                    rootElement: options.rootElement,
	                    rtl: options.rtl
	                }, handleOptions[i])));
	            }

	            that._bindToResizeHandlesEvents();
	        },

	        _destroyResizeHandles: function() {
	            var that = this;
	            var length = that.handles ? that.handles.length : 0;

	            for (var i = 0; i < length; i++) {
	                that.handles[i].destroy();
	            }

	            that.handles = [];
	        },

	        _showResizeHandles: function() {
	            var that = this;
	            var handles = that.handles || [];
	            var length = handles.length;
	            var i;

	            for (i = 0; i < length; i++) {
	                that.handles[i].show();
	            }
	        },

	        _bindToResizeHandlesEvents: function() {
	            return false;
	        },

	        _onResizeHandleDragStart: function() {
	            var that = this;
	            var element = $(that.element);

	            element.addClass(ELEMENT_RESIZING_CLASS);

	            that._initialElementHeight = outerHeight(element);
	            that._initialElementWidth = outerWidth(element);
	            that._disableKeyboard();
	        },

	        _onResizeHandleDrag: function(e) {
	            this.resize(e);
	        },

	        _onResizeHandleDragEnd: function() {
	            var that = this;
	            $(that.element).removeClass(ELEMENT_RESIZING_CLASS);
	            that._enableKeyboard();
	        },

	        _enableKeyboard: function() {
	            $(this.options.rootElement).off(KEY_DOWN + NS);
	        },

	        _disableKeyboard: function() {
	            $(this.options.rootElement).on(KEY_DOWN + NS, function(e) {
	                e.preventDefault();
	            });
	        }
	    });

	    var TableResizing = ElementResizing.extend({
	        _bindToResizeHandlesEvents: function() {
	            var that = this;
	            var handles = that.handles || [];
	            var length = handles.length;
	            var i;
	            var handle;

	            for (i = 0; i < length; i++) {
	                handle = handles[i];
	                handle.bind(DRAG_START, proxy(that._onResizeHandleDragStart, that));
	                handle.bind(DRAG, proxy(that._onResizeHandleDrag, that));
	                handle.bind(DRAG_END, proxy(that._onResizeHandleDragEnd, that));
	                handle.bind(MOUSE_OVER, proxy(that._onResizeHandleMouseOver, that));
	                handle.bind(MOUSE_OUT, proxy(that._onResizeHandleMouseOut, that));
	            }
	        },

	        _hasRowsInPixels: function() {
	            var that = this;
	            var rows = $(that.element).children(THEAD + COMMA + TBODY).children(ROW);

	            for (var i = 0; i < rows.length; i++) {
	                if (rows[i].style.height === "" || inPixels(rows[i].style.height)) {
	                    return true;
	                }
	            }

	            return false;
	        },

	        _resizeWidth: function(delta, initialDelta) {
	            var that = this;
	            var element = $(that.element);
	            var styleWidth = element[0].style[WIDTH];
	            var currentWidth = outerWidth(element);
	            var parentWidth = element.parent().width();
	            var maxWidth = that._getMaxDimensionValue(WIDTH);
	            var newWidth;
	            var ratioValue;
	            var ratioTotalValue;
	            var constrainedWidth;

	            if (delta === 0) {
	                return;
	            }

	            if (isUndefined(that._initialElementWidth)) {
	                that._initialElementWidth = currentWidth;
	            }

	            //use initial delta instead of delta as changing the width with a small value (e.g. 1px)
	            //on each drag does not work due to browser calculation of computed styles
	            constrainedWidth = constrain({
	                value: that._initialElementWidth + initialDelta,
	                min: that.options.minWidth,
	                max: maxWidth
	            });

	            if (inPercentages(styleWidth)) {
	                //detect resizing greater than 100%
	                if (currentWidth + delta > parentWidth) {
	                    ratioValue = max(constrainedWidth, parentWidth);
	                    ratioTotalValue = min(constrainedWidth, parentWidth);
	                }
	                else {
	                    ratioValue = min(constrainedWidth, parentWidth);
	                    ratioTotalValue = max(constrainedWidth, parentWidth);
	                }

	                newWidth = toPercentages(calculatePercentageRatio(ratioValue, ratioTotalValue));
	            }
	            else {
	                newWidth = toPixels(constrainedWidth);
	            }

	            that._setColumnsWidth();

	            element[0].style[WIDTH] = newWidth;
	        },

	        _resizeHeight: function(delta, initialDelta) {
	            var that = this;
	            var element = $(that.element);
	            var styleHeight = element[0].style[HEIGHT];
	            var currentHeight = outerHeight(element);
	            var parent = element.parent();
	            var parentHeight = parent.height();
	            var maxHeight = that._getMaxDimensionValue(HEIGHT);
	            var newHeight;
	            var ratioValue;
	            var ratioTotalValue;
	            var constrainedHeight;
	            var minHeight = that.options.minHeight;
	            var hasRowsInPixels = that._hasRowsInPixels();

	            if (delta === 0) {
	                return;
	            }

	            if (isUndefined(that._initialElementHeight)) {
	                that._initialElementHeight = currentHeight;
	            }

	            //use initial delta instead of delta as changing the height with a small value (e.g. 1px)
	            //on each drag does not work due to browser calculation of computed styles
	            constrainedHeight = constrain({
	                value: that._initialElementHeight + initialDelta,
	                min: minHeight,
	                max: maxHeight
	            });

	            if (hasRowsInPixels && delta < 0) {
	                //decreasing table height when rows are sized in pixels is not possible
	                that._setRowsHeightInPercentages();
	            }

	            if (inPercentages(styleHeight)) {
	                //detect resizing greater than 100%
	                if (currentHeight + delta > parentHeight) {
	                    ratioValue = max(constrainedHeight, parentHeight);
	                    ratioTotalValue = min(constrainedHeight, parentHeight);
	                }
	                else {
	                    ratioValue = min(constrainedHeight, parentHeight);
	                    ratioTotalValue = max(constrainedHeight, parentHeight);
	                }

	                newHeight = toPercentages(calculatePercentageRatio(ratioValue, ratioTotalValue));
	            }
	            else {
	                newHeight = toPixels(constrainedHeight);
	            }

	            element[0].style[HEIGHT] = newHeight;

	            if (hasRowsInPixels && delta < 0) {
	                //restore original rows height unit
	                that._setRowsHeightInPixels();
	            }
	        },

	        _setColumnsWidth: function() {
	            var that = this;
	            var element = $(that.element);
	            var parentElement = element.parent()[0];
	            var parentColumn = element.closest(COLUMN);
	            var columns = parentColumn.closest(ROW).children();
	            var columnsLength = columns.length;
	            var i;

	            function isWidthInPercentages(element) {
	                var styleWidth = element.style.width;

	                if (styleWidth !== "") {
	                    return inPercentages(styleWidth) ? true : false;
	                }
	                else {
	                    return $(element).hasClass(TABLE_CLASS) ? true : false;
	                }
	            }

	            if (isWidthInPercentages(element[0]) && parentElement === parentColumn[0] && parentElement.style[WIDTH] === "") {
	                for (i = 0; i < columnsLength; i++) {
	                    columns[i].style[WIDTH] = toPixels($(columns[i]).width());
	                }
	            }
	        },

	        _setRowsHeightInPercentages: function() {
	            var that = this;
	            var tableHead = $(that.element).children(THEAD);
	            var tableHeadHeight = tableHead.length > 0 ? tableHead.height() : 0;
	            var tableBody = $(that.element).children(TBODY);
	            var tableBodyHeight = tableBody.height();
	            var rows = $(that.element).children(THEAD + COMMA + TBODY).children(ROW);
	            var length = rows.length;
	            var currentRowsHeights = rows.map(function() {
	                return outerHeight($(this));
	            });
	            var i;

	            for (i = 0; i < length; i++) {
	                rows[i].style[HEIGHT] = toPercentages(calculatePercentageRatio(currentRowsHeights[i], tableHeadHeight + tableBodyHeight));
	            }
	        },

	        _setRowsHeightInPixels: function() {
	            var that = this;
	            var rows = $(that.element).children(THEAD + COMMA + TBODY).children(ROW);
	            var length = rows.length;
	            var currentRowsHeights = rows.map(function() {
	                return outerHeight($(this));
	            });
	            var i;

	            for (i = 0; i < length; i++) {
	                rows[i].style[HEIGHT] = toPixels(currentRowsHeights[i]);
	            }
	        }
	    });

	    var ImageResizing = ElementResizing.extend({
	        _bindToResizeHandlesEvents: function() {
	            var that = this;
	            var handles = that.handles || [];
	            var length = handles.length;
	            var i;
	            var handle;

	            for (i = 0; i < length; i++) {
	                handle = handles[i];
	                handle.bind(DRAG_START, proxy(that._onResizeHandleDragStart, that));

	                if(handle.options.direction === "north" || handle.options.direction === "south") {
	                    handle.bind(DRAG, proxy(that._onResizeHandleDragVertical, that));
	                } else if(handle.options.direction === "east" || handle.options.direction === "west") {
	                    handle.bind(DRAG, proxy(that._onResizeHandleDragHorizontal, that));
	                } else {
	                    handle.bind(DRAG, proxy(that._onResizeHandleDragLocked, that));
	                }

	                handle.bind(DRAG_END, proxy(that._onResizeHandleDragEnd, that));
	                handle.bind(MOUSE_OVER, proxy(that._onResizeHandleMouseOver, that));
	                handle.bind(MOUSE_OUT, proxy(that._onResizeHandleMouseOut, that));
	            }
	        },

	        _getDeltas: function(args) {
	            return extend({}, {
	                deltaX: 0,
	                deltaY: 0,
	                initialDeltaX: 0,
	                initialDeltaY: 0
	            }, args);
	        },

	        _onResizeHandleDragVertical: function(args) {
	            var deltas = this._getDeltas(args);

	            this._resizeHeight(deltas.deltaY, deltas.initialDeltaY);
	            this.showResizeHandles();
	        },

	        _onResizeHandleDragHorizontal: function(args) {
	            var deltas = this._getDeltas(args);

	            this._resizeWidth(deltas.deltaX, deltas.initialDeltaX);
	            this.showResizeHandles();
	        },

	        _onResizeHandleDragLocked: function(args) {
	            var min = Math.min(Math.abs(args.initialDeltaX), Math.abs(args.initialDeltaY)),
	                initialWidth = this._initialElementWidth,
	                initialHeight = this._initialElementHeight,
	                deltas;

	            if(min === args.initialDeltaX || min === args.initialDeltaX * -1) {
	                args.initialDeltaY = args.initialDeltaX * initialHeight / initialWidth;
	                args.deltaY = args.deltaX;
	            } else if (min === args.initialDeltaY || min === args.initialDeltaY * -1) {
	                args.initialDeltaX = args.initialDeltaY * initialWidth / initialHeight;
	                args.deltaX = args.deltaY;
	            }

	            deltas = this._getDeltas(args);

	            this._resizeWidth(deltas.deltaX, deltas.initialDeltaX);
	            this._resizeHeight(deltas.deltaY, deltas.initialDeltaY);

	            this.showResizeHandles();
	        },

	        _resizeWidth: function(delta, initialDelta) {
	            var that = this;
	            var element = $(that.element);
	            var currentWidth = outerWidth(element);
	            var newWidth;
	            var constrainedWidth;

	            if (delta === 0) {
	                return;
	            }

	            if (isUndefined(that._initialElementWidth)) {
	                that._initialElementWidth = currentWidth;
	            }

	            //use initial delta instead of delta as changing the width with a small value (e.g. 1px)
	            //on each drag does not work due to browser calculation of computed styles
	            constrainedWidth = constrain({
	                value: that._initialElementWidth + initialDelta,
	                min: that.options.minWidth,
	                max: that._getMaxDimensionValue(WIDTH)
	            });

	            newWidth = toPixels(constrainedWidth);
	            element[0].style[WIDTH] = newWidth;
	            element.attr(WIDTH, Math.floor(constrainedWidth));
	        },

	        _resizeHeight: function(delta, initialDelta) {
	            var that = this;
	            var element = $(that.element);
	            var currentHeight = outerHeight(element);
	            var newHeight;
	            var constrainedHeight;

	            if (delta === 0) {
	                return;
	            }

	            if (isUndefined(that._initialElementHeight)) {
	                that._initialElementHeight = currentHeight;
	            }

	            //use initial delta instead of delta as changing the height with a small value (e.g. 1px)
	            //on each drag does not work due to browser calculation of computed styles
	            constrainedHeight = constrain({
	                value: that._initialElementHeight + initialDelta,
	                min: that.options.minHeight,
	                max: Number.MAX_SAFE_INTEGER
	            });

	            newHeight = toPixels(constrainedHeight);
	            element[0].style[HEIGHT] = newHeight;
	            element.attr(HEIGHT, Math.floor(constrainedHeight));
	        }
	    });

	    var ElementResizingFactory = Class.extend({
	        create: function(editor) {
	            var factory = this;

	            $(editor.body)
	                .on("dragstart" + NS, function() {
	                    var nodes = RangeUtils.nodes(editor.getRange()),
	                        hasImg = false;

	                    nodes.forEach(function(node) {
	                        if(node.nodeName === "IMG") {
	                            hasImg = true;
	                        }
	                    });

	                    if(hasImg && nodes.length > 1) {
	                        editor.elementResizing._destroyResizeHandles();
	                    }
	                })
	                .on(DROP + NS, function() {
	                    setTimeout(function() {
	                        var image = RangeUtils.image(editor.getRange());

	                        if(image) {
	                            editor.elementResizing._destroyResizeHandles();
	                            editor.elementResizing.element = image;
	                            editor.elementResizing.showResizeHandles();
	                        }
	                    });
	                })
	                .on(MOUSE_DOWN + NS, TABLE + COMMA + IMG, function(e) {
	                    var eventTarget = e.target;
	                    var eventCurrentTarget = e.currentTarget;
	                    var elementResizing = editor.elementResizing;
	                    var element = elementResizing ? elementResizing.element : null;

	                    if (elementResizing) {
	                        if (element && eventCurrentTarget !== element) {
	                            if (contains(eventCurrentTarget, element) && element !== eventTarget && contains(element, eventTarget)) {
	                                //prevent a parent table resizing init when clicking on a nested table when the event bubbles
	                                //instead of stopping event propagation
	                                return;
	                            }
	                            else {
	                                if (element !== eventTarget) {
	                                    editor._destroyElementResizing();
	                                    factory._initResizing(editor, eventCurrentTarget);
	                                }
	                            }
	                        }
	                    }
	                    else {
	                        factory._initResizing(editor, eventCurrentTarget);
	                    }

	                    editor._showElementResizeHandles();
	                })
	                .on(MOUSE_DOWN + NS, function(e) {
	                    var elementResizing = editor.elementResizing;
	                    var element = elementResizing ? elementResizing.element : null;
	                    var target = e.target;
	                    var isResizeHandleOrChild = $(target).hasClass(RESIZE_HANDLE_WRAPPER_CLASS) || $(target).parents(DOT + RESIZE_HANDLE_WRAPPER_CLASS).length > 0;

	                    if (elementResizing && element !== target && !contains(element, target) && !isResizeHandleOrChild) {
	                        editor._destroyElementResizing();
	                    }
	                });
	        },

	        dispose: function(editor) {
	            $(editor.body).off(NS);
	        },

	        _initResizing: function(editor, element) {
	            // table and image resizing is natively supported in IE
	            // https://stackoverflow.com/questions/53831846/resizing-images-in-contenteditable-div-stopped-working-in-firefox
	            // Enable custom resize handlers for FF too
	            if (!browser.msie) {
	                if($(element).is(TABLE)) {
	                    editor.elementResizing = editor.tableResizing = new TableResizing(element, {
	                        appendHandlesTo: editor.body,
	                        rtl: kendo.support.isRtl(editor.element),
	                        rootElement: editor.body
	                    });
	                } else if($(element).is(IMG)) {
	                    editor.elementResizing = new ImageResizing(element, {
	                        appendHandlesTo: editor.body,
	                        rtl: kendo.support.isRtl(editor.element),
	                        rootElement: editor.body
	                    });
	                }

	                if (editor._showElementResizeHandlesProxy) {
	                    editor.unbind(SELECT, editor._showElementResizeHandlesProxy);
	                    editor.bind(SELECT, editor._showElementResizeHandlesProxy);
	                }
	            }
	        }
	    });

	    ElementResizingFactory.current = new ElementResizingFactory();

	    extend(Editor, {
	        TableResizing: TableResizing,
	        ImageResizing: ImageResizing,
	        ElementResizing: ElementResizing,
	        ElementResizingFactory: ElementResizingFactory
	    });

	})(window.kendo);

	}, __webpack_require__(3));


/***/ }),

/***/ 1016:
/***/ (function(module, exports) {

	module.exports = require("./element-resize-handle");

/***/ })

/******/ });