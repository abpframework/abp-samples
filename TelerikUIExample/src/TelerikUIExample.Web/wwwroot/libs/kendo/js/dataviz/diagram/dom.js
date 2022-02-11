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

	module.exports = __webpack_require__(901);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 890:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.data");

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.dataviz.core");

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.dataviz.themes");

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(890), __webpack_require__(903), __webpack_require__(904),
	           __webpack_require__(905),
	           __webpack_require__(906),
	           __webpack_require__(902),
	           __webpack_require__(891),
	           __webpack_require__(892),
	           __webpack_require__(907),
	           __webpack_require__(908),
	           __webpack_require__(909) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	    (function ($, undefined) {
	        // Imports ================================================================
	        var dataviz = kendo.dataviz,
	            draw = kendo.drawing,
	            geom = kendo.geometry,
	            diagram = dataviz.diagram,
	            Widget = kendo.ui.Widget,
	            Class = kendo.Class,
	            proxy = $.proxy,
	            deepExtend = kendo.deepExtend,
	            outerWidth = kendo._outerWidth,
	            outerHeight = kendo._outerHeight,
	            extend = $.extend,
	            HierarchicalDataSource = kendo.data.HierarchicalDataSource,
	            Canvas = diagram.Canvas,
	            Group = diagram.Group,
	            Rectangle = diagram.Rectangle,
	            Circle = diagram.Circle,
	            CompositeTransform = diagram.CompositeTransform,
	            Rect = diagram.Rect,
	            Path = diagram.Path,
	            DeleteShapeUnit = diagram.DeleteShapeUnit,
	            DeleteConnectionUnit = diagram.DeleteConnectionUnit,
	            TextBlock = diagram.TextBlock,
	            Image = diagram.Image,
	            Point = diagram.Point,
	            Intersect = diagram.Intersect,
	            ConnectionEditAdorner = diagram.ConnectionEditAdorner,
	            UndoRedoService = diagram.UndoRedoService,
	            ToolService = diagram.ToolService,
	            Selector = diagram.Selector,
	            ResizingAdorner = diagram.ResizingAdorner,
	            ConnectorsAdorner = diagram.ConnectorsAdorner,
	            Cursors = diagram.Cursors,
	            Utils = diagram.Utils,
	            Observable = kendo.Observable,
	            ToBackUnit = diagram.ToBackUnit,
	            ToFrontUnit = diagram.ToFrontUnit,
	            PolylineRouter = diagram.PolylineRouter,
	            CascadingRouter = diagram.CascadingRouter,
	            isUndefined = Utils.isUndefined,
	            isDefined = Utils.isDefined,
	            defined = draw.util.defined,
	            isArray = Array.isArray,
	            isFunction = kendo.isFunction,
	            isString = Utils.isString,
	            isPlainObject = $.isPlainObject,

	            math = Math;

	        // Constants ==============================================================
	        var NS = ".kendoDiagram",
	            CASCADING = "cascading",
	            ITEMBOUNDSCHANGE = "itemBoundsChange",
	            CHANGE = "change",
	            CLICK = "click",
	            DRAG = "drag",
	            DRAG_END = "dragEnd",
	            DRAG_START = "dragStart",
	            MOUSE_ENTER = "mouseEnter",
	            MOUSE_LEAVE = "mouseLeave",
	            ERROR = "error",
	            AUTO = "Auto",
	            TOP = "Top",
	            RIGHT = "Right",
	            LEFT = "Left",
	            BOTTOM = "Bottom",
	            MAXINT = 9007199254740992,
	            SELECT = "select",
	            ITEMROTATE = "itemRotate",
	            PAN = "pan",
	            ZOOM_START = "zoomStart",
	            ZOOM_END = "zoomEnd",
	            NONE = "none",
	            DEFAULT_CANVAS_WIDTH = 600,
	            DEFAULT_CANVAS_HEIGHT = 600,
	            DEFAULT_SHAPE_TYPE = "rectangle",
	            DEFAULT_SHAPE_WIDTH = 100,
	            DEFAULT_SHAPE_HEIGHT = 100,
	            DEFAULT_SHAPE_MINWIDTH = 20,
	            DEFAULT_SHAPE_MINHEIGHT = 20,
	            DEFAULT_SHAPE_POSITION = 0,
	            DEFAULT_CONNECTION_BACKGROUND = "Yellow",
	            MAX_VALUE = Number.MAX_VALUE,
	            MIN_VALUE = -Number.MAX_VALUE,
	            ABSOLUTE = "absolute",
	            TRANSFORMED = "transformed",
	            ROTATED = "rotated",
	            TRANSPARENT = "transparent",
	            WIDTH = "width",
	            HEIGHT = "height",
	            X = "x",
	            Y = "y",
	            MOUSEWHEEL_NS = "DOMMouseScroll" + NS + " mousewheel" + NS,
	            MOBILE_ZOOM_RATE = 0.05,
	            MOBILE_PAN_DISTANCE = 5,
	            BUTTON_TEMPLATE = '<a class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base #=className#" href="\\#">' +
	                '<span class="k-button-icon #=iconClass# #=imageClass#"></span>' +
	                '<span class="k-button-text">#=text#</span>' +
	            '</a>',
	            CONNECTION_CONTENT_OFFSET = 5;

	        diagram.DefaultConnectors = [{
	            name: TOP
	        }, {
	            name: BOTTOM
	        }, {
	            name: LEFT
	        }, {
	            name: RIGHT
	        }, {
	            name: AUTO,
	            position: function (shape) {
	                return shape.getPosition("center");
	            }
	        }];

	        var defaultButtons = {
	            cancel: {
	                text: "Cancel",
	                imageClass: "k-i-cancel",
	                className: "k-diagram-cancel",
	                iconClass: "k-icon"
	            },
	            update: {
	                text: "Update",
	                imageClass: "k-i-checkmark",
	                className: "k-diagram-update",
	                iconClass: "k-icon"
	            }
	        };

	        diagram.shapeDefaults = function(extra) {
	            var defaults = {
	                type: DEFAULT_SHAPE_TYPE,
	                path: "",
	                autoSize: true,
	                visual: null,
	                x: DEFAULT_SHAPE_POSITION,
	                y: DEFAULT_SHAPE_POSITION,
	                minWidth: DEFAULT_SHAPE_MINWIDTH,
	                minHeight: DEFAULT_SHAPE_MINHEIGHT,
	                width: DEFAULT_SHAPE_WIDTH,
	                height: DEFAULT_SHAPE_HEIGHT,
	                hover: {},
	                editable: {
	                    connect: true,
	                    tools: []
	                },
	                connectors: diagram.DefaultConnectors,
	                rotation: {
	                    angle: 0
	                }
	            };

	            Utils.simpleExtend(defaults, extra);

	            return defaults;
	        };

	        function mwDelta(e) {
	            var origEvent = e.originalEvent,
	                delta = 0;

	            if (origEvent.wheelDelta) {
	                delta = -origEvent.wheelDelta / 40;
	                delta = delta > 0 ? math.ceil(delta) : math.floor(delta);
	            } else if (origEvent.detail) {
	                delta = origEvent.detail;
	            }

	            return delta;
	        }

	        function isAutoConnector(connector) {
	            return connector.options.name.toLowerCase() === AUTO.toLowerCase();
	        }

	        function closestConnector(point, connectors) {
	            var minimumDistance = MAXINT, resCtr, connector;
	            for (var i = 0; i < connectors.length; i++) {
	                connector = connectors[i];
	                if (!isAutoConnector(connector)) {
	                    var dist = point.distanceTo(connector.position());
	                    if (dist < minimumDistance) {
	                        minimumDistance = dist;
	                        resCtr = connector;
	                    }
	                }
	            }
	            return resCtr;
	        }

	        function indicesOfItems(group, visuals) {
	            var i, indices = [], visual;
	            var children = group.drawingContainer().children;
	            var length = children.length;
	            for (i = 0; i < visuals.length; i++) {
	                visual = visuals[i];
	                for (var j = 0; j < length; j++) {
	                    if (children[j] == visual.drawingContainer()) {
	                        indices.push(j);
	                        break;
	                    }
	                }
	            }
	            return indices;
	        }

	        var DiagramElement = Observable.extend({
	            init: function (options) {
	                var that = this;
	                that.dataItem = (options || {}).dataItem;
	                Observable.fn.init.call(that);
	                that.options = deepExtend({ id: diagram.randomId() }, that.options, options);
	                that.isSelected = false;
	                that.visual = new Group({
	                    id: that.options.id,
	                    autoSize: that.options.autoSize
	                });
	                that.id = that.options.id;
	                that._template();
	            },

	            options: {
	                hover: {},
	                cursor: Cursors.grip,
	                content: {
	                    align: "center middle"
	                },
	                selectable: true,
	                serializable: true,
	                enable: true
	            },

	            _getCursor: function (point) {
	                if (this.adorner) {
	                    return this.adorner._getCursor(point);
	                }
	                return this.options.cursor;
	            },

	            visible: function (value) {
	                if (isUndefined(value)) {
	                    return this.visual.visible();
	                } else {
	                    this.visual.visible(value);
	                }
	            },

	            bounds: function () {
	            },

	            refresh: function () {
	                this.visual.redraw();
	            },

	            position: function (point) {
	                this.options.x = point.x;
	                this.options.y = point.y;
	                this.visual.position(point);
	            },

	            toString: function () {
	                return this.options.id;
	            },

	            serialize: function () {
	                // the options json object describes the shape perfectly. So this object can serve as shape serialization.
	                var json = deepExtend({}, {options: this.options});
	                if (this.dataItem) {
	                    json.dataItem = this.dataItem.toString();
	                }
	                return json;
	            },

	            _content: function (content) {
	                if (content !== undefined) {
	                    var options = this.options;

	                    if (diagram.Utils.isString(content)) {
	                        options.content.text = content;
	                    } else {
	                        deepExtend(options.content, content);
	                    }

	                    var contentOptions = options.content;
	                    var contentVisual = this._contentVisual;

	                    if (!contentVisual) {
	                        this._createContentVisual(contentOptions);
	                    } else {
	                        this._updateContentVisual(contentOptions);
	                    }
	                }

	                return this.options.content.text;
	            },

	            _createContentVisual: function(options) {
	                if (options.text) {
	                    this._contentVisual = new TextBlock(options);
	                    this._contentVisual._includeInBBox = false;
	                    this.visual.append(this._contentVisual);
	                }
	            },

	            _updateContentVisual: function(options) {
	                this._contentVisual.redraw(options);
	            },

	            _hitTest: function (point) {
	                var bounds = this.bounds();
	                return this.visible() && bounds.contains(point) && this.options.enable;
	            },

	            _template: function () {
	                var that = this;
	                if (that.options.content.template) {
	                    var data = that.dataItem || {},
	                        elementTemplate = kendo.template(that.options.content.template, {
	                            paramName: "dataItem"
	                        });

	                    that.options.content.text = elementTemplate(data);
	                }
	            },

	            _canSelect: function () {
	                return this.options.selectable !== false;
	            },

	            toJSON: function() {
	                return {
	                    id: this.options.id
	                };
	            }
	        });

	        var Connector = Class.extend({
	            init: function (shape, options) {
	                this.options = deepExtend({}, this.options, options);
	                this.connections = [];
	                this.shape = shape;
	            },
	            options: {
	                width: 7,
	                height: 7,
	                fill: {
	                    color: DEFAULT_CONNECTION_BACKGROUND
	                },
	                hover: {}
	            },
	            position: function () {
	                if (this.options.position) {
	                    return this.options.position(this.shape);
	                } else {
	                    return this.shape.getPosition(this.options.name);
	                }
	            },
	            toJSON: function () {
	                return {
	                    shapeId: this.shape.toString(),
	                    connector: this.options.name
	                };
	            }
	        });

	        Connector.parse = function (diagram, str) {
	            var tempStr = str.split(":"),
	                id = tempStr[0],
	                name = tempStr[1] || AUTO;

	            for (var i = 0; i < diagram.shapes.length; i++) {
	                var shape = diagram.shapes[i];
	                if (shape.options.id == id) {
	                    return shape.getConnector(name.trim());
	                }
	            }
	        };

	        var Shape = DiagramElement.extend({
	            init: function (options, diagram) {
	                var that = this;
	                DiagramElement.fn.init.call(that, options);
	                this.diagram = diagram;
	                this.updateOptionsFromModel();
	                options = that.options;
	                that.connectors = [];
	                that.type = options.type;
	                that.createShapeVisual();
	                that.updateBounds();
	                that.content(that.content());

	                that._createConnectors();
	            },

	            options: diagram.shapeDefaults(),

	            _setOptionsFromModel: function(model) {
	                var modelOptions = filterShapeDataItem(model || this.dataItem);
	                this.options = deepExtend({}, this.options, modelOptions);

	                this.redrawVisual();
	            },

	            updateOptionsFromModel: function(model, field) {
	                if (this.diagram && this.diagram._isEditable) {
	                    var modelOptions = filterShapeDataItem(model || this.dataItem);

	                    if (model && field) {
	                        if (!dataviz.inArray(field, ["x", "y", "width", "height"])) {
	                            if (this.options.visual) {
	                                this._redrawVisual();
	                            } else if (modelOptions.type) {
	                                this.options = deepExtend({}, this.options, modelOptions);
	                                this._redrawVisual();
	                            }

	                            if (this.options.content) {
	                                this._template();
	                                this.content(this.options.content);
	                            }
	                        } else {
	                            var bounds = this.bounds();
	                            bounds[field] = model[field];
	                            this.bounds(bounds);
	                        }
	                    } else {
	                        this.options = deepExtend({}, this.options, modelOptions);
	                    }
	                }
	            },

	            _redrawVisual: function() {
	                this.visual.clear();
	                this._contentVisual = null;
	                this.options.dataItem = this.dataItem;
	                this.createShapeVisual();
	                this.updateBounds();
	            },

	            redrawVisual: function() {
	                this._redrawVisual();
	                if (this.options.content) {
	                    this._template();
	                    this.content(this.options.content);
	                }
	            },

	            updateModel: function(syncChanges) {
	                var diagram = this.diagram;
	                if (diagram && diagram._isEditable) {
	                    var bounds = this._bounds;
	                    var model = this.dataItem;

	                    if (model) {
	                        diagram._suspendModelRefresh();
	                        if (defined(model.x) && bounds.x !== model.x) {
	                            model.set("x", bounds.x);
	                        }

	                        if (defined(model.y) && bounds.y !== model.y) {
	                            model.set("y", bounds.y);
	                        }

	                        if (defined(model.width) && bounds.width !== model.width) {
	                            model.set("width", bounds.width);
	                        }

	                        if (defined(model.height) && bounds.height !== model.height) {
	                            model.set("height", bounds.height);
	                        }

	                        this.dataItem = model;
	                        diagram._resumeModelRefresh();

	                        if (syncChanges) {
	                            diagram._syncShapeChanges();
	                        }
	                    }
	                }
	            },

	            updateBounds: function() {
	                var bounds = this.visual._measure(true);
	                var options = this.options;
	                this.bounds(new Rect(options.x, options.y, bounds.width, bounds.height));
	                this._rotate();
	                this._alignContent();
	            },

	            content: function(content) {
	                var result = this._content(content);

	                this._alignContent();

	                return result;
	            },

	            _alignContent: function() {
	                var contentOptions = this.options.content || {};
	                var contentVisual = this._contentVisual;
	                if (contentVisual && contentOptions.align) {
	                    var containerRect = this.visual._measure();
	                    var aligner = new diagram.RectAlign(containerRect);
	                    var contentBounds = contentVisual.drawingElement.bbox(null);

	                    var contentRect = new Rect(0, 0, contentBounds.width(), contentBounds.height());
	                    var alignedBounds = aligner.align(contentRect, contentOptions.align);

	                    contentVisual.position(alignedBounds.topLeft());
	                }
	            },

	            _createConnectors: function() {
	                var options = this.options,
	                    length = options.connectors.length,
	                    connectorDefaults = options.connectorDefaults,
	                    connector, i;

	                for (i = 0; i < length; i++) {
	                    connector = new Connector(
	                        this, deepExtend({},
	                            connectorDefaults,
	                            options.connectors[i]
	                        )
	                    );
	                    this.connectors.push(connector);
	                }
	            },

	            bounds: function (value) {
	                var bounds;

	                if (value) {
	                    if (isString(value)) {
	                        switch (value) {
	                            case TRANSFORMED :
	                                bounds = this._transformedBounds();
	                                break;
	                            case ABSOLUTE :
	                                bounds = this._transformedBounds();
	                                var pan = this.diagram._pan;
	                                bounds.x += pan.x;
	                                bounds.y += pan.y;
	                                break;
	                            case ROTATED :
	                                bounds = this._rotatedBounds();
	                                break;
	                            default:
	                                bounds = this._bounds;
	                        }
	                    } else {
	                        this._setBounds(value);
	                        this._triggerBoundsChange();
	                        if (!(this.diagram && this.diagram._layouting)) {
	                            this.refreshConnections();
	                        }
	                    }
	                } else {
	                    bounds = this._bounds;
	                }

	                return bounds;
	            },

	            _setBounds: function(rect) {
	                var options = this.options;
	                var topLeft = rect.topLeft();
	                var x = options.x = topLeft.x;
	                var y = options.y = topLeft.y;
	                var width = options.width = math.max(rect.width, options.minWidth);
	                var height = options.height = math.max(rect.height, options.minHeight);

	                this._bounds = new Rect(x, y, width, height);

	                this.visual.redraw({
	                    x: x,
	                    y: y,
	                    width: width,
	                    height: height
	                });
	            },

	            position: function (point) {
	                if (point) {
	                    this.bounds(new Rect(point.x, point.y, this._bounds.width, this._bounds.height));
	                } else {
	                    return this._bounds.topLeft();
	                }
	            },
	            /**
	             * Returns a clone of this shape.
	             * @returns {Shape}
	             */
	            clone: function () {
	                var json = this.serialize();

	                json.options.id = diagram.randomId();

	                if (this.diagram && this.diagram._isEditable && defined(this.dataItem)) {
	                    json.options.dataItem = cloneDataItem(this.dataItem);
	                }

	                return new Shape(json.options);
	            },

	            select: function (value) {
	                var diagram = this.diagram, selected, deselected;
	                if (isUndefined(value)) {
	                    value = true;
	                }

	                if (this._canSelect()) {
	                    if (this.isSelected != value) {
	                        selected = [];
	                        deselected = [];
	                        this.isSelected = value;
	                        if (this.isSelected) {
	                            diagram._selectedItems.push(this);
	                            selected.push(this);
	                        } else {
	                            Utils.remove(diagram._selectedItems, this);
	                            deselected.push(this);
	                        }

	                        if (!diagram._internalSelection) {
	                            diagram._selectionChanged(selected, deselected);
	                        }

	                        return true;
	                    }
	                }
	            },

	            rotate: function (angle, center, undoable) { // we assume the center is always the center of the shape.
	                var rotate = this.visual.rotate();
	                if (angle !== undefined) {
	                    if (undoable !== false && this.diagram && this.diagram.undoRedoService && angle !== rotate.angle) {
	                        this.diagram.undoRedoService.add(
	                            new diagram.RotateUnit(this.diagram._resizingAdorner, [this], [rotate.angle]), false);
	                    }

	                    var b = this.bounds(),
	                        sc = new Point(b.width / 2, b.height / 2),
	                        deltaAngle,
	                        newPosition;

	                    if (center) {
	                        deltaAngle = angle - rotate.angle;
	                        newPosition = b.center().rotate(center, 360 - deltaAngle).minus(sc);
	                        this._rotationOffset = this._rotationOffset.plus(newPosition.minus(b.topLeft()));
	                        this.position(newPosition);
	                    }

	                    this.visual.rotate(angle, sc);
	                    this.options.rotation.angle = angle;

	                    if (this.diagram && this.diagram._connectorsAdorner) {
	                        this.diagram._connectorsAdorner.refresh();
	                    }

	                    this.refreshConnections();

	                    if (this.diagram) {
	                        this.diagram.trigger(ITEMROTATE, { item: this });
	                    }
	                }

	                return rotate;
	            },

	            connections: function (type) { // in, out, undefined = both
	                var result = [], i, j, con, cons, ctr;

	                for (i = 0; i < this.connectors.length; i++) {
	                    ctr = this.connectors[i];
	                    cons = ctr.connections;
	                    for (j = 0, cons; j < cons.length; j++) {
	                        con = cons[j];
	                        if (type == "out") {
	                            var source = con.source();
	                            if (source.shape && source.shape == this) {
	                                result.push(con);
	                            }
	                        } else if (type == "in") {
	                            var target = con.target();
	                            if (target.shape && target.shape == this) {
	                                result.push(con);
	                            }
	                        } else {
	                            result.push(con);
	                        }
	                    }
	                }

	                return result;
	            },

	            refreshConnections: function () {
	                $.each(this.connections(), function () {
	                    this.refresh();
	                });
	            },
	            /**
	             * Gets a connector of this shape either by the connector's supposed name or
	             * via a Point in which case the closest connector will be returned.
	             * @param nameOrPoint The name of a Connector or a Point.
	             * @returns {Connector}
	             */
	            getConnector: function (nameOrPoint) {
	                var i, ctr;
	                if (isString(nameOrPoint)) {
	                    nameOrPoint = nameOrPoint.toLocaleLowerCase();
	                    for (i = 0; i < this.connectors.length; i++) {
	                        ctr = this.connectors[i];
	                        if (ctr.options.name.toLocaleLowerCase() == nameOrPoint) {
	                            return ctr;
	                        }
	                    }
	                } else if (nameOrPoint instanceof Point) {
	                    return closestConnector(nameOrPoint, this.connectors);
	                } else {
	                    return this.connectors.length ? this.connectors[0] : null;
	                }
	            },

	            getPosition: function (side) {
	                var b = this.bounds(),
	                    fnName = side.charAt(0).toLowerCase() + side.slice(1);

	                if (isFunction(b[fnName])) {
	                    return this._transformPoint(b[fnName]());
	                }

	                return b.center();
	            },

	            redraw: function (options) {
	                if (options) {
	                    var shapeOptions = this.options;
	                    var boundsChange;

	                    this.shapeVisual.redraw(this._visualOptions(options));

	                    if (this._diffNumericOptions(options, [WIDTH, HEIGHT, X, Y])) {
	                        this.bounds(new Rect(shapeOptions.x, shapeOptions.y, shapeOptions.width, shapeOptions.height));
	                        boundsChange = true;
	                    }

	                    if (options.connectors) {
	                        shapeOptions.connectors = options.connectors;
	                        this._updateConnectors();
	                    }

	                    shapeOptions = deepExtend(shapeOptions, options);

	                    if  (options.rotation || boundsChange) {
	                        this._rotate();
	                    }

	                    if (shapeOptions.content) {
	                        this.content(shapeOptions.content);
	                    }
	                }
	            },

	            _updateConnectors: function() {
	                var connections = this.connections();
	                this.connectors = [];
	                this._createConnectors();
	                var connection;
	                var source;
	                var target;

	                for (var idx = 0; idx < connections.length; idx++) {
	                    connection = connections[idx];
	                    source = connection.source();
	                    target = connection.target();
	                    if (source.shape && source.shape === this) {
	                        connection.source(this.getConnector(source.options.name) || null);
	                    } else if (target.shape && target.shape === this) {
	                        connection.target(this.getConnector(target.options.name) || null);
	                    }
	                    connection.updateModel();
	                }
	            },

	            _diffNumericOptions: diagram.diffNumericOptions,

	            _visualOptions: function(options) {
	                return {
	                    data: options.path,
	                    source: options.source,
	                    hover: options.hover,
	                    fill: options.fill,
	                    stroke: options.stroke
	                };
	            },

	            _triggerBoundsChange: function () {
	                if (this.diagram) {
	                    this.diagram.trigger(ITEMBOUNDSCHANGE, {item: this, bounds: this._bounds.clone()}); // the trigger modifies the arguments internally.
	                }
	            },

	            _transformPoint: function (point) {
	                var rotate = this.rotate(),
	                    bounds = this.bounds(),
	                    tl = bounds.topLeft();

	                if (rotate.angle) {
	                    point.rotate(rotate.center().plus(tl), 360 - rotate.angle);
	                }

	                return point;
	            },

	            _transformedBounds: function () {
	                var bounds = this.bounds(),
	                    tl = bounds.topLeft(),
	                    br = bounds.bottomRight();

	                return Rect.fromPoints(this.diagram.modelToView(tl), this.diagram.modelToView(br));
	            },

	            _rotatedBounds: function () {
	                var bounds = this.bounds().rotatedBounds(this.rotate().angle),
	                    tl = bounds.topLeft(),
	                    br = bounds.bottomRight();

	                return Rect.fromPoints(tl, br);
	            },

	            _rotate: function () {
	                var rotation = this.options.rotation;

	                if (rotation && rotation.angle) {
	                    this.rotate(rotation.angle);
	                }

	                this._rotationOffset = new Point();
	            },

	            _hover: function (value) {
	                var options = this.options,
	                    hover = options.hover,
	                    stroke = options.stroke,
	                    fill = options.fill;

	                if (value && isDefined(hover.stroke)) {
	                    stroke = deepExtend({}, stroke, hover.stroke);
	                }

	                if (value && isDefined(hover.fill)) {
	                    fill = hover.fill;
	                }

	                this.shapeVisual.redraw({
	                    stroke: stroke,
	                    fill: fill
	                });

	                if (options.editable && options.editable.connect) {
	                    this.diagram._showConnectors(this, value);
	                }
	            },

	            _hitTest: function (value) {
	                if (this.visible()) {
	                    var bounds = this.bounds(), rotatedPoint,
	                        angle = this.rotate().angle;

	                    if (value.isEmpty && !value.isEmpty()) { // rect selection
	                        return Intersect.rects(value, bounds, angle ? angle : 0);
	                    } else { // point
	                        rotatedPoint = value.clone().rotate(bounds.center(), angle); // cloning is important because rotate modifies the point inline.
	                        if (bounds.contains(rotatedPoint)) {
	                            return this;
	                        }
	                    }
	                }
	            },

	            toJSON: function() {
	                return {
	                    shapeId: this.options.id
	                };
	            },

	            createShapeVisual: function() {
	                var options = this.options;
	                var visualOptions = this._visualOptions(options);
	                var visualTemplate = options.visual;
	                var type = (options.type + "").toLocaleLowerCase();
	                var shapeVisual;

	                visualOptions.width = options.width;
	                visualOptions.height = options.height;

	                if (isFunction(visualTemplate)) { // custom template
	                    shapeVisual = visualTemplate.call(this, options);
	                } else if (visualOptions.data) {
	                    shapeVisual = new Path(visualOptions);
	                    translateToOrigin(shapeVisual);
	                } else if (type == "rectangle"){
	                    shapeVisual = new Rectangle(visualOptions);
	                } else if (type == "circle") {
	                    shapeVisual = new Circle(visualOptions);
	                } else if (type == "text") {
	                    shapeVisual = new TextBlock(visualOptions);
	                } else if (type == "image") {
	                    shapeVisual = new Image(visualOptions);
	                } else {
	                    shapeVisual = new Path(visualOptions);
	                }

	                this.shapeVisual = shapeVisual;
	                this.visual.append(this.shapeVisual);
	            }
	        });

	        /**
	         * The visual link between two Shapes through the intermediate of Connectors.
	         */
	        var Connection = DiagramElement.extend({
	            init: function (from, to, options) {
	                var that = this;
	                DiagramElement.fn.init.call(that, options);
	                this.updateOptionsFromModel();
	                this._initRouter();
	                that.path = new diagram.Polyline(that.options);
	                that.path.fill(TRANSPARENT);
	                that.visual.append(that.path);
	                that._sourcePoint = that._targetPoint = new Point();
	                that._setSource(from);
	                that._setTarget(to);
	                that.content(that.options.content);
	                that.definers = [];
	                if (defined(options) && options.points) {
	                    that.points(options.points);
	                }
	            },

	            options: {
	                hover: {
	                    stroke: {}
	                },
	                startCap: NONE,
	                endCap: NONE,
	                points: [],
	                selectable: true,
	                fromConnector: AUTO,
	                toConnector: AUTO
	            },

	            _setOptionsFromModel: function(model) {
	                this.updateOptionsFromModel(model || this.dataItem);
	            },

	            updateOptionsFromModel: function(model) {
	                if (this.diagram && this.diagram._isEditable) {
	                    var dataMap = this.diagram._dataMap;
	                    var options = filterConnectionDataItem(model || this.dataItem);

	                    if (model) {
	                        if (defined(options.from)) {
	                            var from = dataMap[options.from];
	                            if (from && defined(options.fromConnector)) {
	                               from = from.getConnector(options.fromConnector);
	                            }
	                            this.source(from);
	                        } else if (defined(options.fromX) && defined(options.fromY)) {
	                            this.source(new Point(options.fromX, options.fromY));
	                        }

	                        if (defined(options.to)) {
	                            var to = dataMap[options.to];
	                            if (to && defined(options.toConnector)) {
	                                to = to.getConnector(options.toConnector);
	                            }
	                            this.target(to);
	                        } else if (defined(options.toX) && defined(options.toY)) {
	                            this.target(new Point(options.toX, options.toY));
	                        }

	                        if (defined(options.type) && this.type() !== options.type) {
	                            this.points([]);
	                            this.type(options.type);
	                        }

	                        this.dataItem = model;

	                        this._template();
	                        this.redraw(this.options);
	                    } else {
	                        this.options = deepExtend({}, options, this.options);
	                    }
	                }
	            },

	            updateModel: function(syncChanges) {
	                if (this.diagram && this.diagram._isEditable) {
	                    if (this.diagram.connectionsDataSource) {
	                        var model = this.diagram.connectionsDataSource.getByUid(this.dataItem.uid);

	                        if (model) {
	                            this.diagram._suspendModelRefresh();
	                            if (defined(this.options.fromX) && this.options.fromX !== null) {
	                                clearField("from", model);
	                                clearField("fromConnector", model);
	                                model.set("fromX", this.options.fromX);
	                                model.set("fromY", this.options.fromY);
	                            } else  {
	                                model.set("from", this.options.from);
	                                if (defined(model.fromConnector)) {
	                                    model.set("fromConnector", this.sourceConnector ? this.sourceConnector.options.name : null);
	                                }
	                                clearField("fromX", model);
	                                clearField("fromY", model);
	                            }

	                            if (defined(this.options.toX) && this.options.toX !== null) {
	                                clearField("to", model);
	                                clearField("toConnector", model);
	                                model.set("toX", this.options.toX);
	                                model.set("toY", this.options.toY);
	                            } else {
	                                model.set("to", this.options.to);
	                                if (defined(model.toConnector)) {
	                                    model.set("toConnector", this.targetConnector ? this.targetConnector.options.name : null);
	                                }
	                                clearField("toX", model);
	                                clearField("toY", model);
	                            }

	                            if (defined(this.options.type) && defined(model.type)) {
	                                model.set("type", this.options.type);
	                            }

	                            this.dataItem = model;
	                            this.diagram._resumeModelRefresh();

	                            if (syncChanges) {
	                                this.diagram._syncConnectionChanges();
	                            }
	                        }
	                    }
	                }
	            },

	            /**
	             * Gets the Point where the source of the connection resides.
	             * If the endpoint in Auto-connector the location of the resolved connector will be returned.
	             * If the endpoint is floating the location of the endpoint is returned.
	             */
	            sourcePoint: function () {
	                return this._resolvedSourceConnector ? this._resolvedSourceConnector.position() : this._sourcePoint;
	            },

	            _setSource: function(source) {
	                var shapeSource = source instanceof Shape;
	                var defaultConnector = this.options.fromConnector || AUTO;
	                var dataItem;
	                if (shapeSource && !source.getConnector(defaultConnector)) {
	                    return;
	                }

	                if (source !== undefined) {
	                    this.from = source;
	                }

	                this._removeFromSourceConnector();

	                if (source === null) { // detach
	                    if (this.sourceConnector) {
	                        this._sourcePoint = (this._resolvedSourceConnector || this.sourceConnector).position();
	                        this._clearSourceConnector();
	                        this._setFromOptions(null, this._sourcePoint);
	                    }
	                } else if (source instanceof Connector) {
	                    dataItem = source.shape.dataItem;
	                    if (dataItem) {
	                        this._setFromOptions(dataItem.id);
	                    }
	                    this.sourceConnector = source;
	                    this.sourceConnector.connections.push(this);
	                } else if (source instanceof Point) {
	                    this._setFromOptions(null, source);
	                    this._sourcePoint = source;
	                    if (this.sourceConnector) {
	                        this._clearSourceConnector();
	                    }

	                } else if (shapeSource) {
	                    dataItem = source.dataItem;
	                    if (dataItem) {
	                        this._setFromOptions(dataItem.id);
	                    }

	                    this.sourceConnector = source.getConnector(defaultConnector);
	                    this.sourceConnector.connections.push(this);
	                }
	            },

	            source: function (source, undoable) {
	                if (isDefined(source)) {
	                    if (undoable && this.diagram) {
	                        this.diagram.undoRedoService.addCompositeItem(new diagram.ConnectionEditUnit(this, source));
	                    }
	                    this._setSource(source);
	                    this.refresh();
	                }
	                return this.sourceConnector ? this.sourceConnector : this._sourcePoint;
	            },

	            _setFromOptions: function(from, fromPoint) {
	                this.options.from = from;
	                if (fromPoint)  {
	                    this.options.fromX = fromPoint.x;
	                    this.options.fromY = fromPoint.y;
	                } else {
	                    this.options.fromX = null;
	                    this.options.fromY = null;
	                }
	            },

	            /**
	             * Gets or sets the PathDefiner of the sourcePoint.
	             * The left part of this definer is always null since it defines the source tangent.
	             * @param value
	             * @returns {*}
	             */
	            sourceDefiner: function (value) {
	                if (value) {
	                    if (value instanceof diagram.PathDefiner) {
	                        value.left = null;
	                        this._sourceDefiner = value;
	                        this.source(value.point); // refresh implicit here
	                    } else {
	                        throw "The sourceDefiner needs to be a PathDefiner.";
	                    }
	                } else {
	                    if (!this._sourceDefiner) {
	                        this._sourceDefiner = new diagram.PathDefiner(this.sourcePoint(), null, null);
	                    }
	                    return this._sourceDefiner;
	                }
	            },

	            /**
	             * Gets  the Point where the target of the connection resides.
	             */
	            targetPoint: function () {
	                return this._resolvedTargetConnector ? this._resolvedTargetConnector.position() : this._targetPoint;
	            },

	            _setTarget: function(target) {
	                var shapeTarget = target instanceof Shape;
	                var defaultConnector = this.options.toConnector || AUTO;
	                var dataItem;

	                if (shapeTarget && !target.getConnector(defaultConnector)) {
	                    return;
	                }

	                if (target !== undefined) {
	                    this.to = target;
	                }

	                this._removeFromTargetConnector();

	                if (target === null) { // detach
	                    if (this.targetConnector) {
	                        this._targetPoint = (this._resolvedTargetConnector || this.targetConnector).position();
	                        this._clearTargetConnector();
	                        this._setToOptions(null, this._targetPoint);
	                    }
	                } else if (target instanceof Connector) {
	                    dataItem = target.shape.dataItem;
	                    if (dataItem) {
	                        this._setToOptions(dataItem.id);
	                    }
	                    this.targetConnector = target;
	                    this.targetConnector.connections.push(this);
	                } else if (target instanceof Point) {
	                    this._setToOptions(null, target);
	                    this._targetPoint = target;
	                    if (this.targetConnector) {
	                        this._clearTargetConnector();
	                    }
	                } else if (shapeTarget) {
	                    dataItem = target.dataItem;
	                    if (dataItem) {
	                        this._setToOptions(dataItem.id);
	                    }
	                    this.targetConnector = target.getConnector(defaultConnector);
	                    this.targetConnector.connections.push(this);
	                }
	            },

	            target: function (target, undoable) {
	                if (isDefined(target)) {
	                    if (undoable && this.diagram) {
	                        this.diagram.undoRedoService.addCompositeItem(new diagram.ConnectionEditUnit(this, undefined, target));
	                    }
	                    this._setTarget(target);

	                    this.refresh();
	                }
	                return this.targetConnector ? this.targetConnector : this._targetPoint;
	            },

	            _setToOptions: function(to, toPoint) {
	                this.options.to = to;
	                if (toPoint)  {
	                    this.options.toX = toPoint.x;
	                    this.options.toY = toPoint.y;
	                } else {
	                    this.options.toX = null;
	                    this.options.toY = null;
	                }
	            },

	            /**
	             * Gets or sets the PathDefiner of the targetPoint.
	             * The right part of this definer is always null since it defines the target tangent.
	             * @param value
	             * @returns {*}
	             */
	            targetDefiner: function (value) {
	                if (value) {
	                    if (value instanceof diagram.PathDefiner) {
	                        value.right = null;
	                        this._targetDefiner = value;
	                        this.target(value.point); // refresh implicit here
	                    } else {
	                        throw "The sourceDefiner needs to be a PathDefiner.";
	                    }
	                } else {
	                    if (!this._targetDefiner) {
	                        this._targetDefiner = new diagram.PathDefiner(this.targetPoint(), null, null);
	                    }
	                    return this._targetDefiner;
	                }
	            },

	            _updateConnectors: function() {
	                this._updateConnector(this.source(), "source");
	                this._updateConnector(this.target(), "target");
	            },

	            _updateConnector: function(instance, name) {
	                var that = this;
	                var diagram = that.diagram;
	                if (instance instanceof Connector && !diagram.getShapeById(instance.shape.id)) {
	                    var dataItem = instance.shape.dataItem;
	                    var connectorName = instance.options.name;
	                    var setNewTarget = function() {
	                        var shape = diagram._dataMap[dataItem.id];
	                        instance = shape.getConnector(connectorName);
	                        that[name](instance, false);
	                        that.updateModel();
	                    };
	                    if (diagram._dataMap[dataItem.id]) {
	                       setNewTarget();
	                    } else {
	                        var inactiveItem = diagram._inactiveShapeItems.getByUid(dataItem.uid);
	                        if (inactiveItem) {
	                            diagram._deferredConnectionUpdates.push(inactiveItem.onActivate(setNewTarget));
	                        }
	                    }
	                } else {
	                    that[name](instance, false);
	                }
	            },

	            content: function(content) {
	                var result = this._content(content);
	                if (defined(content)) {
	                    this._alignContent();
	                }
	                return result;
	            },

	            _createContentVisual: function(options) {
	                var visual;
	                if (isFunction(options.visual)) {
	                    visual = options.visual.call(this, options);
	                } else if (options.text) {
	                    visual = new TextBlock(options);
	                }

	                if (visual) {
	                    this._contentVisual = visual;
	                    visual._includeInBBox = false;
	                    this.visual.append(visual);
	                }

	                return visual;
	            },

	            _updateContentVisual: function(options) {
	                if (isFunction(options.visual)) {
	                    this.visual.remove(this._contentVisual);
	                    this._createContentVisual(options);
	                } else {
	                    this._contentVisual.redraw(options);
	                }
	            },

	            _alignContent: function() {
	                if (this._contentVisual) {
	                    var offset = CONNECTION_CONTENT_OFFSET;
	                    var points = this.allPoints();
	                    var endIdx = math.floor(points.length / 2);
	                    var startIdx = endIdx - 1;

	                    while(startIdx > 0 && points[startIdx].equals(points[endIdx])) {
	                        startIdx--;
	                        endIdx++;
	                    }

	                    var endPoint = points[endIdx];
	                    var startPoint = points[startIdx];

	                    var boundingBox = this._contentVisual._measure();
	                    var width = boundingBox.width;
	                    var height = boundingBox.height;
	                    var alignToPath = points.length % 2 === 0;
	                    var distance = startPoint.distanceTo(endPoint);

	                    if (alignToPath && points.length > 2 && distance > 0 &&
	                        ((startPoint.y === endPoint.y && distance < width) || (startPoint.x === endPoint.x && distance < height))) {
	                        alignToPath = false;
	                        offset = 0;
	                    }

	                    var point;

	                    if (alignToPath) {
	                        var angle  = draw.util.deg(math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x));
	                        point = new Point((endPoint.x - startPoint.x) / 2 + startPoint.x, (endPoint.y - startPoint.y) / 2 + startPoint.y);

	                        if (math.abs(angle) === 90) {
	                            point.x += offset;
	                            point.y-= height / 2;
	                        } else if (angle % 180 === 0) {
	                            point.x -= width / 2;
	                            point.y -= height + offset;
	                        } else if (angle < -90 || (0 < angle && angle < 90)) {
	                            point.y-= height;
	                        } else if (angle < 0 || angle > 90) {
	                            point.x -= width;
	                            point.y -= height;
	                        }
	                    } else {
	                        var midIdx = math.floor(points.length / 2);
	                        point = points[midIdx].clone();
	                        startPoint = points[midIdx - 1];
	                        endPoint = points[midIdx + 1];

	                        var offsetX = startPoint.x <= point.x && endPoint.x <= point.x ? offset : -boundingBox.width - offset;
	                        var offsetY = startPoint.y <= point.y && endPoint.y <= point.y ? offset : -boundingBox.height - offset;

	                        point.x += offsetX;
	                        point.y += offsetY;
	                    }

	                    this._contentVisual.position(point);
	                }
	            },

	            /**
	             * Selects or unselects this connections.
	             * @param value True to select, false to unselect.
	             */
	            select: function (value) {
	                var diagram = this.diagram, selected, deselected;
	                if (this._canSelect()) {
	                    if (this.isSelected !== value) {
	                        this.isSelected = value;
	                        selected = [];
	                        deselected = [];
	                        if (this.isSelected) {
	                            this.adorner = new ConnectionEditAdorner(this, this.options.selection);
	                            diagram._adorn(this.adorner, true);
	                            diagram._selectedItems.push(this);
	                            selected.push(this);
	                        } else {
	                            if (this.adorner) {
	                                diagram._adorn(this.adorner, false);
	                                Utils.remove(diagram._selectedItems, this);
	                                this.adorner = undefined;
	                                deselected.push(this);
	                            }
	                        }

	                        if (this.adorner) {
	                            this.adorner.refresh();
	                        }

	                        if (!diagram._internalSelection) {
	                            diagram._selectionChanged(selected, deselected);
	                        }
	                        return true;
	                    }
	                }
	            },
	            /**
	             * Gets or sets the bounds of this connection.
	             * @param value A Rect object.
	             * @remark This is automatically set in the refresh().
	             * @returns {Rect}
	             */
	            bounds: function (value) {
	                if (value && !isString(value)) {
	                    this._bounds = value;
	                } else {
	                    return this._bounds;
	                }
	            },
	            /**
	             * Gets or sets the connection type (see ConnectionType enumeration).
	             * @param value A ConnectionType value.
	             * @returns {ConnectionType}
	             */
	            type: function (value) {
	                var options = this.options;
	                if (value) {
	                    if (value !== options.type) {
	                        options.type = value;
	                        this._initRouter();
	                        this.refresh();
	                    }
	                } else {
	                    return options.type;
	                }
	            },

	            _initRouter: function() {
	                var type = (this.options.type || "").toLowerCase();
	                if (type == CASCADING) {
	                    this._router = new CascadingRouter(this);
	                } else {
	                    this._router = new PolylineRouter(this);
	                }
	            },
	            /**
	             * Gets or sets the collection of *intermediate* points.
	             * The 'allPoints()' property will return all the points.
	             * The 'definers' property returns the definers of the intermediate points.
	             * The 'sourceDefiner' and 'targetDefiner' return the definers of the endpoints.
	             * @param value
	             */
	            points: function (value) {
	                if (value) {
	                    this.definers = [];
	                    for (var i = 0; i < value.length; i++) {
	                        var definition = value[i];
	                        if (definition instanceof diagram.Point) {
	                            this.definers.push(new diagram.PathDefiner(definition));
	                        } else if (definition.hasOwnProperty("x") && definition.hasOwnProperty("y")) { // e.g. Clipboard does not preserve the Point definition and tunred into an Object
	                            this.definers.push(new diagram.PathDefiner(new Point(definition.x, definition.y)));
	                        } else {
	                            throw "A Connection point needs to be a Point or an object with x and y properties.";
	                        }
	                    }

	                } else {
	                    var pts = [];
	                    if (isDefined(this.definers)) {
	                        for (var k = 0; k < this.definers.length; k++) {
	                            pts.push(this.definers[k].point);
	                        }
	                    }
	                    return pts;
	                }
	            },
	            /**
	             * Gets all the points of this connection. This is the combination of the sourcePoint, the points and the targetPoint.
	             * @returns {Array}
	             */
	            allPoints: function () {
	                var pts = [this.sourcePoint()];
	                if (this.definers) {
	                    for (var k = 0; k < this.definers.length; k++) {
	                        pts.push(this.definers[k].point);
	                    }
	                }
	                pts.push(this.targetPoint());
	                return pts;
	            },

	            refresh: function () {
	                this._resolveConnectors();
	                this._refreshPath();
	                this._alignContent();

	                if (this.adorner) {
	                    this.adorner.refresh();
	                }
	            },

	            _resolveConnectors: function () {
	                var connection = this,
	                    sourcePoint, targetPoint,
	                    sourceConnectors, targetConnectors,
	                    source = connection.source(),
	                    target = connection.target();

	                if (source instanceof Point) {
	                    sourcePoint = source;
	                } else if (source instanceof Connector) {
	                    if (isAutoConnector(source)) {
	                        sourceConnectors = source.shape.connectors;
	                    } else {
	                        sourceConnectors = [source];
	                    }
	                }

	                if (target instanceof Point) {
	                    targetPoint = target;
	                } else if (target instanceof Connector) {
	                    if (isAutoConnector(target)) {
	                        targetConnectors = target.shape.connectors;
	                    } else {
	                        targetConnectors = [target];
	                    }
	                }

	                if (sourcePoint) {
	                    if (targetConnectors) {
	                        connection._resolvedTargetConnector = closestConnector(sourcePoint, targetConnectors);
	                    }
	                } else if (sourceConnectors) {
	                    if (targetPoint) {
	                        connection._resolvedSourceConnector = closestConnector(targetPoint, sourceConnectors);
	                    } else if (targetConnectors) {
	                        this._resolveAutoConnectors(sourceConnectors, targetConnectors);
	                    }
	                }
	            },

	            _resolveAutoConnectors: function(sourceConnectors, targetConnectors) {
	                var minNonConflict = MAXINT;
	                var minDist = MAXINT;
	                var minNonConflictSource, minNonConflictTarget;
	                var sourcePoint, targetPoint;
	                var minSource, minTarget;
	                var sourceConnector, targetConnector;
	                var sourceIdx, targetIdx;
	                var dist;

	                for (sourceIdx = 0; sourceIdx < sourceConnectors.length; sourceIdx++) {
	                    sourceConnector = sourceConnectors[sourceIdx];
	                    if (!isAutoConnector(sourceConnector)) {
	                        sourcePoint = sourceConnector.position();

	                        for (targetIdx = 0; targetIdx < targetConnectors.length; targetIdx++) {
	                            targetConnector = targetConnectors[targetIdx];
	                            if (!isAutoConnector(targetConnector)) {
	                                targetPoint = targetConnector.position();
	                                dist = math.round(sourcePoint.distanceTo(targetPoint));

	                                if (dist < minNonConflict && this.diagram && this._testRoutePoints(sourcePoint, targetPoint, sourceConnector, targetConnector)) {
	                                    minNonConflict = dist;
	                                    minNonConflictSource = sourceConnector;
	                                    minNonConflictTarget = targetConnector;
	                                }

	                                if (dist < minDist) {
	                                    minSource = sourceConnector;
	                                    minTarget = targetConnector;
	                                    minDist = dist;
	                                }
	                            }
	                        }
	                    }
	                }

	                if (minNonConflictSource) {
	                    minSource = minNonConflictSource;
	                    minTarget = minNonConflictTarget;
	                }

	                this._resolvedSourceConnector = minSource;
	                this._resolvedTargetConnector = minTarget;
	            },

	            _testRoutePoints: function(sourcePoint, targetPoint, sourceConnector, targetConnector) {
	                var router = this._router;
	                var passRoute = true;
	                if (router instanceof CascadingRouter) {
	                    var points = router.routePoints(sourcePoint, targetPoint, sourceConnector, targetConnector),
	                        start, end,
	                         rect, exclude;

	                    exclude = this._getRouteExclude(sourcePoint, targetPoint, sourceConnector.shape, targetConnector.shape);
	                    points.unshift(sourcePoint);
	                    points.push(targetPoint);


	                    for (var idx = 1; idx < points.length; idx++) {
	                        start = points[idx - 1];
	                        end = points[idx];
	                        rect = new Rect(math.min(start.x, end.x), math.min(start.y, end.y),
	                                        math.abs(start.x - end.x), math.abs(start.y - end.y));
	                        if (rect.width > 0) {
	                            rect.x++;
	                            rect.width-=2;
	                        }
	                        if (rect.height > 0) {
	                            rect.y++;
	                            rect.height-=2;
	                        }

	                        if (!rect.isEmpty() && this.diagram._shapesQuadTree.hitTestRect(rect, exclude)) {
	                            passRoute = false;
	                            break;
	                        }
	                    }
	                }
	                return passRoute;
	            },

	            _getRouteExclude: function(sourcePoint, targetPoint, sourceShape, targetShape) {
	                var exclude = [];
	                if (this._isPointInsideShape(sourcePoint, sourceShape)){
	                    exclude.push(sourceShape);
	                }
	                if (this._isPointInsideShape(targetPoint, targetShape)){
	                    exclude.push(targetShape);
	                }
	                return exclude;
	            },

	            _isPointInsideShape: function (point, shape) {
	                var bounds = shape.bounds(), rotatedPoint,
	                    angle = shape.rotate().angle,
	                    pointX, pointY,
	                    boundsX = bounds.x,
	                    boundsY = bounds.y;

	                rotatedPoint = point.clone().rotate(bounds.center(), angle);
	                pointX = rotatedPoint.x;
	                pointY = rotatedPoint.y;
	                return pointX > boundsX && pointX < (boundsX + bounds.width) && pointY > boundsY && pointY < (boundsY + bounds.height);
	            },

	            redraw: function (options) {
	                if (options) {
	                    this.options = deepExtend({}, this.options, options);

	                    var points = this.options.points;

	                    if (defined(points) && points.length > 0) {
	                        this.points(points);
	                        this._refreshPath();
	                    }

	                    if ((options && options.content) || options.text) {
	                        this.content(options.content);
	                    }

	                    this.path.redraw({
	                        fill: options.fill,
	                        stroke: options.stroke,
	                        startCap: options.startCap,
	                        endCap: options.endCap
	                    });
	                }
	            },
	            /**
	             * Returns a clone of this connection.
	             * @returns {Connection}
	             */
	            clone: function () {
	                var json = this.serialize();

	                if (this.diagram && this.diagram._isEditable && defined(this.dataItem)) {
	                    json.options.dataItem = cloneDataItem(this.dataItem);
	                }

	                return new Connection(this.from, this.to, json.options);
	            },
	            /**
	             * Returns a serialized connection in json format. Consist of the options and the dataItem.
	             * @returns {Connection}
	             */
	            serialize: function () {
	                var from = this.from.toJSON ? this.from.toJSON : this.from.toString(),
	                    to = this.to.toJSON ? this.to.toJSON : this.to.toString();

	                var json = deepExtend({}, {
	                    options: this.options,
	                    from: from,
	                    to: to
	                });

	                if (defined(this.dataItem)) {
	                    json.dataItem = this.dataItem.toString();
	                }

	                json.options.points = this.points();
	                return json;
	            },

	            /**
	             * Returns whether the given Point or Rect hits this connection.
	             * @param value
	             * @returns {Connection}
	             * @private
	             */
	            _hitTest: function (value) {
	                if (this.visible()) {
	                    var p = new Point(value.x, value.y), from = this.sourcePoint(), to = this.targetPoint();
	                    if (value.isEmpty && !value.isEmpty() && value.contains(from) && value.contains(to)) {
	                        return this;
	                    }
	                    if (this._router.hitTest(p)) {
	                        return this;
	                    }
	                }
	            },

	            _hover: function (value) {
	                var color = (this.options.stroke || {}).color;

	                if (value && isDefined(this.options.hover.stroke.color)) {
	                    color = this.options.hover.stroke.color;
	                }

	                this.path.redraw({
	                    stroke: {
	                        color: color
	                    }
	                });
	            },

	            _refreshPath: function () {
	                if (!defined(this.path)) {
	                    return;
	                }
	                this._drawPath();
	                this.bounds(this._router.getBounds());
	            },

	            _drawPath: function () {
	                if (this._router) {
	                    this._router.route(); // sets the intermediate points
	                }
	                var source = this.sourcePoint();
	                var target = this.targetPoint();
	                var points = this.points();

	                this.path.redraw({
	                    points: [source].concat(points, [target])
	                });
	            },

	            _clearSourceConnector: function () {
	                this.sourceConnector = undefined;
	                this._resolvedSourceConnector = undefined;
	            },

	            _clearTargetConnector: function () {
	                this.targetConnector = undefined;
	                this._resolvedTargetConnector = undefined;
	            },

	            _removeFromSourceConnector: function() {
	                if (this.sourceConnector) {
	                    Utils.remove(this.sourceConnector.connections, this);
	                }
	            },

	            _removeFromTargetConnector: function() {
	                if (this.targetConnector) {
	                    Utils.remove(this.targetConnector.connections, this);
	                }
	            },

	            toJSON: function() {
	                var connection = this;
	                var from, to, point;
	                if (connection.from && connection.from.toJSON) {
	                    from = connection.from.toJSON();
	                } else {
	                    point = connection._sourcePoint;
	                    from = {
	                        x: point.x,
	                        y: point.y
	                    };
	                }

	                if (connection.to && connection.to.toJSON) {
	                    to = connection.to.toJSON();
	                } else {
	                    point = connection._targetPoint;
	                    to = {
	                        x: point.x,
	                        y: point.y
	                    };
	                }

	                return {
	                    from : from,
	                    to: to
	                };
	            }
	        });

	        var Diagram = Widget.extend({
	            init: function (element, userOptions) {
	                var that = this;

	                kendo.destroy(element);
	                Widget.fn.init.call(that, element, userOptions);

	                that._initTheme();

	                that._initElements();
	                that._extendLayoutOptions(that.options);
	                that._initDefaults(userOptions);
	                that._interactionDefaults();

	                that._initCanvas();

	                that.mainLayer = new Group({
	                    id: "main-layer"
	                });
	                that.canvas.append(that.mainLayer);

	                that._shapesQuadTree = new ShapesQuadTree(that);

	                that._pan = new Point();
	                that._adorners = [];
	                that.adornerLayer = new Group({
	                    id: "adorner-layer"
	                });
	                that.canvas.append(that.adornerLayer);

	                that._createHandlers();

	                that._initialize();

	                that._resizingAdorner = new ResizingAdorner(that, { editable: that.options.editable });
	                that._connectorsAdorner = new ConnectorsAdorner(that);

	                that._adorn(that._resizingAdorner, true);
	                that._adorn(that._connectorsAdorner, true);

	                that.selector = new Selector(that);
	                // TODO: We may consider using real Clipboard API once is supported by the standard.
	                that._clipboard = [];

	                that.pauseMouseHandlers = false;

	                that._fetchFreshData();

	                that._createGlobalToolBar();

	                that._createOptionElements();

	                that.zoom(that.options.zoom);

	                that.canvas.draw();
	            },

	            options: {
	                name: "Diagram",
	                theme: "default",
	                layout: "",
	                zoomRate: 0.1,
	                zoom: 1,
	                zoomMin: 0,
	                zoomMax: 2,
	                dataSource: {},
	                draggable: true,
	                template: "",
	                autoBind: true,
	                editable: {
	                    rotate: {},
	                    resize: {},
	                    text: true,
	                    tools: [],
	                    drag: {
	                        snap: {
	                            size: 10,
	                            angle: 10
	                        }
	                    },
	                    remove: true
	                },
	                pannable: {},
	                selectable: {
	                    key: "none"
	                },
	                tooltip: { enabled: true, format: "{0}" },
	                copy: {
	                    enabled: true,
	                    offsetX: 20,
	                    offsetY: 20
	                },
	                shapeDefaults: diagram.shapeDefaults({ undoable: true }),
	                connectionDefaults: {
	                    editable: {
	                        tools: []
	                    },
	                    type: CASCADING
	                },
	                shapes: [],
	                connections: []
	            },

	            events: [
	                ZOOM_END,
	                ZOOM_START,
	                PAN, SELECT,
	                ITEMROTATE,
	                ITEMBOUNDSCHANGE,
	                CHANGE,
	                CLICK,
	                MOUSE_ENTER,
	                MOUSE_LEAVE,
	                "toolBarClick",
	                "save",
	                "cancel",
	                "edit",
	                "remove",
	                "add",
	                "dataBound",
	                DRAG_START,
	                DRAG,
	                DRAG_END
	            ],

	            items: function() {
	                return $();
	            },

	            _createGlobalToolBar: function() {
	                var editable = this.options.editable;
	                if (editable) {
	                    var tools = editable.tools;
	                    if (this._isEditable && tools !== false && (!tools || tools.length === 0)) {
	                        tools = ["createShape", "undo", "redo", "rotateClockwise", "rotateAnticlockwise"];
	                    }

	                    if (tools && tools.length) {
	                        this.toolBar = new DiagramToolBar(this, {
	                            tools: tools || {},
	                            click: proxy(this._toolBarClick, this),
	                            modal: false
	                        });

	                        this.toolBar.element.css({
	                            textAlign: "left"
	                        });

	                        this.element.prepend(this.toolBar.element);
	                        this._resize();
	                    }
	                }
	            },

	            createShape: function() {
	                if ((this.editor && this.editor.end()) || !this.editor) {
	                    var dataSource = this.dataSource;
	                    var view = dataSource.view() || [];
	                    var index = view.length;
	                    var model = createModel(dataSource, {});
	                    var shape = this._createShape(model, {});

	                    if (!this.trigger("add", { shape: shape })) {
	                        dataSource.insert(index, model);
	                        var inactiveItem = this._inactiveShapeItems.getByUid(model.uid);
	                        inactiveItem.element = shape;
	                        this.edit(shape);
	                    }
	                }
	            },

	            _createShape: function(dataItem, options) {
	                options = deepExtend({}, this.options.shapeDefaults, options);
	                options.dataItem = dataItem;
	                var shape = new Shape(options, this);
	                return shape;
	            },

	            createConnection: function() {
	                if (((this.editor && this.editor.end()) || !this.editor)) {
	                    var connectionsDataSource = this.connectionsDataSource;
	                    var view = connectionsDataSource.view() || [];
	                    var index = view.length;
	                    var model = createModel(connectionsDataSource, {});
	                    var connection = this._createConnection(model);
	                    if (!this.trigger("add", { connection: connection })) {
	                        this._connectionsDataMap[model.uid] = connection;
	                        connectionsDataSource.insert(index, model);
	                        this.addConnection(connection, false);
	                        this.edit(connection);
	                    }
	                }
	            },

	            _createConnection: function(dataItem, source, target) {
	                var options = deepExtend({}, this.options.connectionDefaults);
	                options.dataItem = dataItem;

	                var connection = new Connection(source || new Point(), target || new Point(), options);

	                return connection;
	            },

	            editModel: function(dataItem, editorType) {
	                this.cancelEdit();
	                var editors, template;
	                var editable = this.options.editable;

	                if (editorType == "shape") {
	                    editors = editable.shapeEditors;
	                    template = editable.shapeTemplate;
	                } else if (editorType == "connection") {
	                    var connectionSelectorHandler = proxy(connectionSelector, this);
	                    editors = deepExtend({}, { from: connectionSelectorHandler, to: connectionSelectorHandler }, editable.connectionEditors);
	                    template = editable.connectionTemplate;
	                } else {
	                    return;
	                }

	                this.editor = new PopupEditor(this.element, {
	                    update: proxy(this._update, this),
	                    cancel: proxy(this._cancel, this),
	                    model: dataItem,
	                    type: editorType,
	                    target: this,
	                    editors: editors,
	                    template: template
	                });

	                this.trigger("edit", this._editArgs());
	            },

	            edit: function(item) {
	                if (item.dataItem) {
	                    var editorType = item instanceof Shape ? "shape" : "connection";
	                    this.editModel(item.dataItem, editorType);
	                }
	            },

	            cancelEdit: function() {
	                if (this.editor) {
	                    this._getEditDataSource().cancelChanges(this.editor.model);

	                    this._destroyEditor();
	                }
	            },

	            saveEdit: function() {
	                if (this.editor && this.editor.end() &&
	                    !this.trigger("save", this._editArgs())) {
	                    this._getEditDataSource().sync();
	                }
	            },

	            _update: function() {
	                if (this.editor && this.editor.end() &&
	                    !this.trigger("save", this._editArgs())) {
	                    this._getEditDataSource().sync();
	                    this._destroyEditor();
	                }
	            },

	            _cancel: function() {
	                if (this.editor && !this.trigger("cancel", this._editArgs())) {
	                    var model = this.editor.model;
	                    this._getEditDataSource().cancelChanges(model);
	                    var element = this._connectionsDataMap[model.uid] || this._dataMap[model.id];
	                    if (element) {
	                        element._setOptionsFromModel(model);
	                    }
	                    this._destroyEditor();
	                }
	            },

	            _getEditDataSource: function() {
	                return this.editor.options.type === "shape" ? this.dataSource : this.connectionsDataSource;
	            },

	            _editArgs: function() {
	                var result = { container: this.editor.wrapper };
	                result[this.editor.options.type] = this.editor.model;
	                return result;
	            },

	            _destroyEditor: function() {
	                if (this.editor) {
	                    this.editor.close();
	                    this.editor = null;
	                }
	            },

	            _initElements: function() {
	                this.wrapper = this.element.empty()
	                    .css("position", "relative")
	                    .attr("tabindex", 0)
	                    .addClass("k-widget k-diagram");

	                this.scrollable = $("<div />").appendTo(this.element);
	            },

	            _initDefaults: function(userOptions) {
	                var options = this.options;
	                var editable = options.editable;
	                var shapeDefaults = options.shapeDefaults;
	                var connectionDefaults = options.connectionDefaults;
	                var userShapeDefaults = (userOptions || {}).shapeDefaults;
	                if (editable === false) {
	                    shapeDefaults.editable = false;
	                    connectionDefaults.editable = false;
	                } else {
	                    copyDefaultOptions(editable, shapeDefaults.editable, ["drag", "remove", "connect"]);
	                    copyDefaultOptions(editable, connectionDefaults.editable, ["drag", "remove"]);
	                }

	                if (userShapeDefaults && userShapeDefaults.connectors) {
	                    options.shapeDefaults.connectors = userShapeDefaults.connectors;
	                }
	            },

	            _interactionDefaults: function() {
	                var options = this.options;
	                var selectable = options.selectable;
	                var pannable = options.pannable;
	                var mobile = kendo.support.mobileOS;

	                if (selectable && !defined(selectable.multiple)) {
	                    options.selectable = deepExtend({
	                        multiple: mobile ? false : true
	                    }, options.selectable);
	                }

	                if (pannable && !defined(pannable.key)) {
	                    options.pannable = deepExtend({
	                        key: mobile ? "none" : "ctrl"
	                    }, options.pannable);
	                }
	            },

	            _initCanvas: function() {
	                var canvasContainer = $("<div class='k-layer'></div>").appendTo(this.scrollable)[0];
	                var viewPort = this.viewport();
	                this.canvas = new Canvas(canvasContainer, {
	                    width: viewPort.width || DEFAULT_CANVAS_WIDTH,
	                    height: viewPort.height || DEFAULT_CANVAS_HEIGHT
	                });
	            },

	            _createHandlers: function () {
	                var that = this;
	                var element = that.element;

	                element.on(MOUSEWHEEL_NS, proxy(that._wheel, that))
	                .on("keydown" + NS, proxy(that._keydown, that));

	                that._userEvents = new kendo.UserEvents(this.scrollable, {
	                    multiTouch: true,
	                    fastTap: true,
	                    tap: proxy(that._tap, that),
	                    start: proxy(that._dragStart, that),
	                    move: proxy(that._drag, that),
	                    end: proxy(that._dragEnd, that),
	                    gesturestart: proxy(that._gestureStart, that),
	                    gesturechange: proxy(that._gestureChange, that),
	                    gestureend: proxy(that._gestureEnd, that),
	                    doubleTap: proxy(that._doubleTap, that),
	                    supportDoubleTap: true
	                });

	                that.toolService = new ToolService(that);

	                this.scrollable
	                    .on("mouseover" + NS, proxy(that._mouseover, that))
	                    .on("mouseout" + NS, proxy(that._mouseout, that))
	                    .on("mousemove" + NS, proxy(that._mouseMove, that))
	                    .on("mousedown" + NS, proxy(that._mouseDown, that))
	                    .on("mouseup" + NS, proxy(that._mouseUp, that));

	                this._syncHandler = proxy(that._syncChanges, that);

	                that._resizeHandler = proxy(that.resize, that, false);
	                kendo.onResize(that._resizeHandler);

	                this.bind(ZOOM_START, proxy(that._destroyToolBar, that));
	                this.bind(PAN, proxy(that._destroyToolBar, that));
	            },

	            _dragStart: function (e) {
	                this._pauseMouseHandlers = true;
	                var point = this._eventPositions(e, true);

	                var event = e.event;
	                if (this.toolService.start(point, this._meta(event))) {
	                    this._destroyToolBar();
	                    event.preventDefault();
	                }
	            },

	            _drag: function (e) {
	                var p = this._eventPositions(e);
	                var event = e.event;
	                if (this.toolService.move(p, this._meta(event))) {
	                    event.preventDefault();
	                }
	            },

	            _dragEnd: function (e) {
	                this._pauseMouseHandlers = false;
	                var p = this._eventPositions(e);
	                var event = e.event;
	                if (this.toolService.end(p, this._meta(event))) {
	                    this._createToolBar();
	                    event.preventDefault();
	                }
	            },

	            _mouseMove: function (e) {
	                if (!this._pauseMouseHandlers) {
	                    var p = this._eventPositions(e);
	                    this.toolService._updateHoveredItem(p);
	                    this.toolService._updateCursor(p);
	                }
	            },

	            _mouseDown: function () {
	                this._pauseMouseHandlers = true;
	            },

	            _mouseUp: function () {
	                this._pauseMouseHandlers = false;
	            },

	            _tap: function(e) {
	                var toolService = this.toolService;
	                var selectable = this.options.selectable;
	                var point = this._eventPositions(e);
	                var focused = this.focus();

	                toolService._updateHoveredItem(point);

	                if (toolService.hoveredItem) {
	                    var item = toolService.hoveredItem;

	                    this.trigger("click", {
	                        item: item,
	                        point: point,
	                        meta: this._meta(e.event)
	                    });

	                    if (selectable && item.options.selectable !== false) {
	                        var multiple = selectable.multiple !== false;
	                        var ctrlPressed = kendo.support.mobileOS || this._meta(e.event).ctrlKey;

	                        if (item.isSelected) {
	                            if (ctrlPressed) {
	                                this._destroyToolBar();
	                                item.select(false);
	                            } else {
	                                this._createToolBar(focused);
	                            }
	                        } else {
	                            this._destroyToolBar();
	                            this.select(item, {
	                                addToSelection: multiple && ctrlPressed
	                            });
	                            this._createToolBar(focused);
	                        }
	                    }
	                } else if (selectable) {
	                    this._destroyToolBar();
	                    this.deselect();
	                }
	            },

	            _keydown: function (e) {
	                if (this.toolService.keyDown(e.keyCode, this._meta(e))) {
	                    e.preventDefault();
	                }
	            },

	            _wheel: function (e) {
	                var delta = mwDelta(e),
	                    p = this._eventPositions(e),
	                    meta = deepExtend(this._meta(e), { delta: delta });

	                if (this.toolService.wheel(p, meta)) {
	                    e.preventDefault();
	                }
	            },

	            _meta: function (e) {
	                return { ctrlKey: e.ctrlKey, metaKey: e.metaKey, altKey: e.altKey, shiftKey: e.shiftKey, type: e.type };
	            },

	            _eventPositions: function (e, start) {
	                var point;
	                if (e.touch) {
	                    var field = start ? "startLocation" : "location";
	                    point = new Point(e.x[field], e.y[field]);
	                } else {
	                    var event = e.originalEvent;
	                    point = new Point(event.pageX, event.pageY);
	                }

	                return this.documentToModel(point);
	            },

	            _gestureStart: function(e) {
	                this._destroyToolBar();
	                this.scroller.disable();
	                var initialCenter = this.documentToModel(new Point(e.center.x, e.center.y));
	                var eventArgs = {
	                    point: initialCenter,
	                    zoom: this.zoom()
	                };

	                if (this.trigger(ZOOM_START, eventArgs)) {
	                    return;
	                }

	                this._gesture = e;
	                this._initialCenter = initialCenter;
	            },

	            _gestureChange: function(e) {
	                var previousGesture = this._gesture;
	                var initialCenter = this._initialCenter;
	                var center = this.documentToView(new Point(e.center.x, e.center.y));
	                var scaleDelta = e.distance / previousGesture.distance;
	                var zoom = this._zoom;
	                var updateZoom = false;

	                if (math.abs(scaleDelta - 1) >= MOBILE_ZOOM_RATE) {
	                    this._zoom = zoom = this._getValidZoom(zoom * scaleDelta);
	                    this.options.zoom = zoom;
	                    this._gesture = e;
	                    updateZoom = true;
	                }

	                var zoomedPoint = initialCenter.times(zoom);
	                var pan = center.minus(zoomedPoint);
	                if (updateZoom || this._pan.distanceTo(pan) >= MOBILE_PAN_DISTANCE) {
	                    this._panTransform(pan);
	                    this._updateAdorners();
	                }

	                e.preventDefault();
	            },

	            _doubleTap: function(e) {
	                var diagram = this;
	                var pointPosition = this._eventPositions(e);
	                var options = diagram.options;
	                var zoomRate = options.zoomRate;
	                var zoom = diagram.zoom() + zoomRate;
	                var meta = this._meta(e);
	                var zoomOptions = { point: pointPosition, meta: meta, zoom: zoom };


	                if (diagram.trigger(ZOOM_START, zoomOptions)) {
	                    return;
	                }

	                zoom = kendo.dataviz.round(Math.max(options.zoomMin, Math.min(options.zoomMax, zoom)), 2);
	                zoomOptions.zoom = zoom;

	                diagram.zoom(zoom, zoomOptions);
	                diagram.trigger(ZOOM_END, zoomOptions);
	            },

	            _gestureEnd: function() {
	                if (this.options.pannable !== false)  {
	                    this.scroller.enable();
	                }
	                this.trigger(ZOOM_END, {
	                    point: this._initialCenter,
	                    zoom: this.zoom()
	                });
	            },

	            _resize: function() {
	                var viewport = this.viewport();
	                if (this.canvas) {
	                    this.canvas.size(viewport);
	                }

	                if (this.scrollable && this.toolBar) {
	                    this.scrollable.height(viewport.height);
	                }
	            },

	            _mouseover: function(e) {
	                var node = e.target._kendoNode;
	                if (node && node.srcElement._hover) {
	                    node.srcElement._hover(true, node.srcElement);
	                }
	            },

	            _mouseout: function(e) {
	                var node = e.target._kendoNode;
	                if (node && node.srcElement._hover) {
	                    node.srcElement._hover(false, node.srcElement);
	                }
	            },

	            _initTheme: function() {
	                var that = this;
	                var themeName = ((that.options || {}).theme || "").toLowerCase();
	                var themes = dataviz.ui.themes || {};
	                var themeOptions;

	                if(dataviz.SASS_THEMES.indexOf(themeName) != -1) {
	                    themeOptions = dataviz.autoTheme().diagram;
	                }
	                else {
	                    themeOptions = (themes[themeName] || {}).diagram;
	                }

	                that.options = deepExtend({}, themeOptions, that.options);
	                if (that.options.editable === true) {
	                    deepExtend(that.options, {
	                        editable: (themeOptions || {}).editable
	                    });
	                }
	            },

	            _createOptionElements: function() {
	                var options = this.options;
	                var shapesLength = options.shapes.length;

	                if (shapesLength) {
	                    this._createShapes();
	                }

	                if (options.connections.length) {
	                    this._createConnections();
	                }

	                if (shapesLength && options.layout) {
	                    this.layout(options.layout);
	                }
	            },

	            _createShapes: function() {
	                var that = this,
	                    options = that.options,
	                    shapes = options.shapes,
	                    shape, i;

	                for (i = 0; i < shapes.length; i++) {
	                    shape = shapes[i];
	                    that.addShape(shape);
	                }
	            },

	            _createConnections: function() {
	                var diagram = this,
	                    options = diagram.options,
	                    defaults = options.connectionDefaults,
	                    connections = options.connections,
	                    conn, source, target, i;

	                for(i = 0; i < connections.length; i++) {
	                    conn = connections[i];
	                    source = diagram._findConnectionTarget(conn.from);
	                    target = diagram._findConnectionTarget(conn.to);

	                    diagram.connect(source, target, deepExtend({}, defaults, conn));
	                }
	            },

	            _findConnectionTarget: function(options) {
	                options = options || {};
	                var diagram = this;
	                var shapeId = isString(options) ? options : options.shapeId || options.id;
	                var target;
	                if (shapeId) {
	                    target = diagram.getShapeById(shapeId);
	                    if (options.connector) {
	                        target = target.getConnector(options.connector);
	                    }
	                } else {
	                    target = new Point(options.x || 0, options.y || 0);
	                }

	                return target;
	            },

	            destroy: function () {
	                var that = this;
	                Widget.fn.destroy.call(that);

	                if (this._userEvents) {
	                    this._userEvents.destroy();
	                }

	                kendo.unbindResize(that._resizeHandler);

	                that.clear();
	                that.element.off(NS);
	                that.scroller.wrapper.off(NS);
	                that.canvas.destroy(true);
	                that.canvas = undefined;

	                that._destroyEditor();
	                that.destroyScroller();
	                that._destroyGlobalToolBar();
	                that._destroyToolBar();
	            },

	            destroyScroller: function () {
	                var scroller = this.scroller;

	                if (!scroller) {
	                    return;
	                }

	                scroller.destroy();
	                scroller.element.remove();
	                this.scroller = null;
	            },

	            save: function () {
	                var json = {
	                    shapes: [],
	                    connections: []
	                };
	                var i, connection, shape;

	                for (i = 0; i < this.shapes.length; i++) {
	                    shape = this.shapes[i];
	                    if (shape.options.serializable) {
	                        json.shapes.push(shape.options);
	                    }
	                }

	                for (i = 0; i < this.connections.length; i++) {
	                    connection = this.connections[i];

	                    json.connections.push(deepExtend({}, connection.options, connection.toJSON()));
	                }

	                return json;
	            },

	            focus: function() {
	                if (!this.element.is(kendo._activeElement())) {
	                    var element = this.element,
	                        scrollContainer = element[0],
	                        containers = [],
	                        offsets = [],
	                        documentElement = document.documentElement,
	                        i;

	                    do {
	                        scrollContainer = scrollContainer.parentNode;

	                        if (scrollContainer.scrollHeight > scrollContainer.clientHeight) {
	                            containers.push(scrollContainer);
	                            offsets.push(scrollContainer.scrollTop);
	                        }
	                    } while (scrollContainer != documentElement);

	                    element.trigger("focus");

	                    for (i = 0; i < containers.length; i++) {
	                        containers[i].scrollTop = offsets[i];
	                    }
	                    return true;
	                }
	            },

	            load: function(options) {
	                this.clear();

	                this.setOptions(options);
	                this._createShapes();
	                this._createConnections();
	            },

	            setOptions: function(options) {
	                deepExtend(this.options, options);
	            },

	            clear: function () {
	                var that = this;

	                that.select(false);
	                that.mainLayer.clear();
	                that._shapesQuadTree.clear();
	                that._initialize();
	            },
	            /**
	             * Connects two items.
	             * @param source Shape, Connector, Point.
	             * @param target Shape, Connector, Point.
	             * @param options Connection options that will be passed to the newly created connection.
	             * @returns The newly created connection.
	             */
	            connect: function (source, target, options) {
	                var connection;
	                if (this.connectionsDataSource && this._isEditable) {
	                    var dataItem = this.connectionsDataSource.add({});
	                    connection = this._connectionsDataMap[dataItem.uid];
	                    connection.source(source);
	                    connection.target(target);
	                    connection.redraw(options);
	                    connection.updateModel();
	                } else {
	                    connection = new Connection(source, target,
	                        deepExtend({ }, this.options.connectionDefaults, options));

	                    this.addConnection(connection);
	                }

	                return connection;
	            },
	            /**
	             * Determines whether the the two items are connected.
	             * @param source Shape, Connector, Point.
	             * @param target Shape, Connector, Point.
	             * @returns true if the two items are connected.
	             */
	            connected: function (source, target) {
	                for (var i = 0; i < this.connections.length; i++) {
	                    var c = this.connections[i];
	                    if (c.from == source && c.to == target) {
	                        return true;
	                    }
	                }

	                return false;
	            },
	            /**
	             * Adds connection to the diagram.
	             * @param connection Connection.
	             * @param undoable Boolean.
	             * @returns The newly created connection.
	             */
	            addConnection: function (connection, undoable) {
	                if (undoable !== false) {
	                    this.undoRedoService.add(
	                        new diagram.AddConnectionUnit(connection, this), false);
	                }

	                connection.diagram = this;
	                connection._setOptionsFromModel();
	                connection.refresh();
	                this.mainLayer.append(connection.visual);
	                this.connections.push(connection);

	                this.trigger(CHANGE, {
	                    added: [connection],
	                    removed: []
	                });

	                return connection;
	            },

	            _addConnection: function (connection, undoable) {
	                var connectionsDataSource = this.connectionsDataSource;
	                var dataItem;
	                if (connectionsDataSource && this._isEditable) {
	                    dataItem = createModel(connectionsDataSource, cloneDataItem(connection.dataItem));
	                    connection.dataItem = dataItem;
	                    connection.updateModel();

	                    if (!this.trigger("add", { connection: connection })) {
	                        this._connectionsDataMap[dataItem.uid] = connection;

	                        connectionsDataSource.add(dataItem);
	                        this.addConnection(connection, undoable);
	                        connection._updateConnectors();

	                        return connection;
	                    }
	                } else if (!this.trigger("add", { connection: connection })) {
	                    this.addConnection(connection, undoable);
	                    connection._updateConnectors();
	                    return connection;
	                }
	            },

	            /**
	             * Adds shape to the diagram.
	             * @param item Shape, Point. If point is passed it will be created new Shape and positioned at that point.
	             * @param options. The options to be passed to the newly created Shape.
	             * @returns The newly created shape.
	             */
	            addShape: function(item, undoable) {
	                var shape,
	                    shapeDefaults = this.options.shapeDefaults;

	                if (item instanceof Shape) {
	                    shape = item;
	                } else if (!(item instanceof kendo.Class)) {
	                    shapeDefaults = deepExtend({}, shapeDefaults, item || {});
	                    shape = new Shape(shapeDefaults, this);
	                } else {
	                    return;
	                }

	                if (undoable !== false) {
	                    this.undoRedoService.add(new diagram.AddShapeUnit(shape, this), false);
	                }

	                this.shapes.push(shape);
	                if (shape.diagram !== this) {
	                    this._shapesQuadTree.insert(shape);
	                    shape.diagram = this;
	                }
	                this.mainLayer.append(shape.visual);

	                this.trigger(CHANGE, {
	                    added: [shape],
	                    removed: []
	                });

	                return shape;
	            },

	            _addShape: function(shape, undoable) {
	                var that = this;
	                var dataSource = that.dataSource;
	                var dataItem;
	                if (dataSource && this._isEditable) {
	                    dataItem = createModel(dataSource, cloneDataItem(shape.dataItem));
	                    shape.dataItem = dataItem;
	                    shape.updateModel();

	                    if (!this.trigger("add", { shape: shape })) {
	                        this.dataSource.add(dataItem);
	                        var inactiveItem = this._inactiveShapeItems.getByUid(dataItem.uid);
	                        inactiveItem.element = shape;
	                        inactiveItem.undoable = undoable;
	                        return shape;
	                    }
	                } else if (!this.trigger("add", { shape: shape })) {
	                    return this.addShape(shape, undoable);
	                }
	            },
	            /**
	             * Removes items (or single item) from the diagram.
	             * @param items DiagramElement, Array of Items.
	             * @param undoable.
	             */

	           remove: function(items, undoable) {
	                items = isArray(items) ? items.slice(0) : [items];
	                var elements = splitDiagramElements(items);
	                var shapes = elements.shapes;
	                var connections = elements.connections;
	                var i;

	                if (!defined(undoable)) {
	                    undoable = true;
	                }

	                if (undoable) {
	                    this.undoRedoService.begin();
	                }

	                this._suspendModelRefresh();
	                for (i = shapes.length - 1; i >= 0; i--) {
	                   this._removeItem(shapes[i], undoable, connections);
	                }

	                for (i = connections.length - 1; i >= 0; i--) {
	                    this._removeItem(connections[i], undoable);
	                }

	                this._resumeModelRefresh();

	                if (undoable) {
	                    this.undoRedoService.commit(false);
	                }

	                this.trigger(CHANGE, {
	                    added: [],
	                    removed: items
	                });
	            },

	            _removeShapeDataItem: function(item) {
	                if (this._isEditable) {
	                    this.dataSource.remove(item.dataItem);
	                    delete this._dataMap[item.dataItem.id];
	                }
	            },

	            _removeConnectionDataItem: function(item) {
	                if (this._isEditable) {
	                    this.connectionsDataSource.remove(item.dataItem);
	                    delete this._connectionsDataMap[item.dataItem.uid];
	                }
	            },

	            _triggerRemove: function(items){
	                var toRemove = [];
	                var item, args, editable;

	                for (var idx = 0; idx < items.length; idx++) {
	                    item = items[idx];
	                    editable = item.options.editable;
	                    if (item instanceof Shape) {
	                        args = { shape: item };
	                    } else {
	                        args = { connection: item };
	                    }
	                    if (editable && editable.remove !== false && !this.trigger("remove", args)) {
	                        toRemove.push(item);
	                    }
	                }
	                return toRemove;
	            },

	            /**
	             * Executes the next undoable action on top of the undo stack if any.
	             */
	            undo: function () {
	                this.undoRedoService.undo();
	            },
	            /**
	             * Executes the previous undoable action on top of the redo stack if any.
	             */
	            redo: function () {
	                this.undoRedoService.redo();
	            },
	            /**
	             * Selects items on the basis of the given input or returns the current selection if none.
	             * @param itemsOrRect DiagramElement, Array of elements, "All", false or Rect. A value 'false' will deselect everything.
	             * @param options
	             * @returns {Array}
	             */
	            select: function (item, options) {
	                if (isDefined(item)) {
	                    options = deepExtend({ addToSelection: false }, options);

	                    var addToSelection = options.addToSelection,
	                        items = [],
	                        selected = [],
	                        i, element;

	                    if (!addToSelection) {
	                        this.deselect();
	                    }

	                    this._internalSelection = true;

	                    if (item instanceof Array) {
	                        items = item;
	                    } else if (item instanceof DiagramElement) {
	                        items = [ item ];
	                    }

	                    for (i = 0; i < items.length; i++) {
	                        element = items[i];
	                        if (element.select(true)) {
	                            selected.push(element);
	                        }
	                    }

	                    this._selectionChanged(selected, []);

	                    this._internalSelection = false;
	                } else {
	                    return this._selectedItems;
	                }
	            },

	            selectAll: function() {
	                this.select(this.shapes.concat(this.connections));
	            },

	            selectArea: function(rect) {
	                var i, items, item;
	                this._internalSelection = true;
	                var selected = [];
	                if (rect instanceof Rect) {
	                    items = this.shapes.concat(this.connections);
	                    for (i = 0; i < items.length; i++) {
	                        item = items[i];
	                        if ((!rect || item._hitTest(rect)) && item.options.enable) {
	                            if (item.select(true)) {
	                                selected.push(item);
	                            }
	                        }
	                    }
	                }

	                this._selectionChanged(selected, []);
	                this._internalSelection = false;
	            },

	            deselect: function(item) {
	                this._internalSelection = true;
	                var deselected = [],
	                    items = [],
	                    element, i;

	                if (item instanceof Array) {
	                    items = item;
	                } else if (item instanceof DiagramElement) {
	                    items.push(item);
	                } else if (!isDefined(item)) {
	                    items = this._selectedItems.slice(0);
	                }

	                for (i = 0; i < items.length; i++) {
	                    element = items[i];
	                    if (element.select(false)) {
	                        deselected.push(element);
	                    }
	                }

	                this._selectionChanged([], deselected);
	                this._internalSelection = false;
	            },
	            /**
	             * Brings to front the passed items.
	             * @param items DiagramElement, Array of Items.
	             * @param undoable. By default the action is undoable.
	             */
	            toFront: function (items, undoable) {
	                if (!items) {
	                    items = this._selectedItems.slice();
	                }

	                var result = this._getDiagramItems(items), indices;
	                if (!defined(undoable) || undoable) {
	                    indices = indicesOfItems(this.mainLayer, result.visuals);
	                    var unit = new ToFrontUnit(this, items, indices);
	                    this.undoRedoService.add(unit);
	                } else {
	                    this.mainLayer.toFront(result.visuals);
	                    this._fixOrdering(result, true);
	                }
	            },
	            /**
	             * Sends to back the passed items.
	             * @param items DiagramElement, Array of Items.
	             * @param undoable. By default the action is undoable.
	             */
	            toBack: function (items, undoable) {
	                if (!items) {
	                    items = this._selectedItems.slice();
	                }

	                var result = this._getDiagramItems(items), indices;
	                if (!defined(undoable) || undoable) {
	                    indices = indicesOfItems(this.mainLayer, result.visuals);
	                    var unit = new ToBackUnit(this, items, indices);
	                    this.undoRedoService.add(unit);
	                } else {
	                    this.mainLayer.toBack(result.visuals);
	                    this._fixOrdering(result, false);
	                }
	            },
	            /**
	             * Bring into view the passed item(s) or rectangle.
	             * @param items DiagramElement, Array of Items, Rect.
	             * @param options. align - controls the position of the calculated rectangle relative to the viewport.
	             * "Center middle" will position the items in the center. animate - controls if the pan should be animated.
	             */
	            bringIntoView: function (item, options) { // jQuery|Item|Array|Rect
	                var viewport = this.viewport();
	                var aligner = new diagram.RectAlign(viewport);
	                var current, rect, original, newPan;

	                if (viewport.width === 0 || viewport.height === 0) {
	                    return;
	                }

	                options = deepExtend({animate: false, align: "center middle"}, options);
	                if (options.align == "none") {
	                    options.align = "center middle";
	                }

	                if (item instanceof DiagramElement) {
	                    rect = item.bounds(TRANSFORMED);
	                } else if (isArray(item)) {
	                    rect = this.boundingBox(item);
	                } else if (item instanceof Rect) {
	                    rect = item.clone();
	                }

	                original = rect.clone();

	                rect.zoom(this._zoom);

	                if (rect.width > viewport.width || rect.height > viewport.height) {
	                    this._zoom = this._getValidZoom(math.min(viewport.width / original.width, viewport.height / original.height));
	                    rect = original.clone().zoom(this._zoom);
	                }

	                this._zoomMainLayer();

	                current = rect.clone();
	                aligner.align(rect, options.align);

	                newPan = rect.topLeft().minus(current.topLeft());
	                this.pan(newPan.times(-1), options.animate);
	            },

	            alignShapes: function (direction) {
	                if (isUndefined(direction)) {
	                    direction = "Left";
	                }
	                var items = this.select(),
	                    val,
	                    item,
	                    i;

	                if (items.length === 0) {
	                    return;
	                }

	                switch (direction.toLowerCase()) {
	                    case "left":
	                    case "top":
	                        val = MAX_VALUE;
	                        break;
	                    case "right":
	                    case "bottom":
	                        val = MIN_VALUE;
	                        break;
	                }

	                for (i = 0; i < items.length; i++) {
	                    item = items[i];
	                    if (item instanceof Shape) {
	                        switch (direction.toLowerCase()) {
	                            case "left":
	                                val = math.min(val, item.options.x);
	                                break;
	                            case "top":
	                                val = math.min(val, item.options.y);
	                                break;
	                            case "right":
	                                val = math.max(val, item.options.x);
	                                break;
	                            case "bottom":
	                                val = math.max(val, item.options.y);
	                                break;
	                        }
	                    }
	                }
	                var undoStates = [];
	                var shapes = [];
	                for (i = 0; i < items.length; i++) {
	                    item = items[i];
	                    if (item instanceof Shape) {
	                        shapes.push(item);
	                        undoStates.push(item.bounds());
	                        switch (direction.toLowerCase()) {
	                            case "left":
	                            case "right":
	                                item.position(new Point(val, item.options.y));
	                                break;
	                            case "top":
	                            case "bottom":
	                                item.position(new Point(item.options.x, val));
	                                break;
	                        }
	                    }
	                }
	                var unit = new diagram.TransformUnit(shapes, undoStates);
	                this.undoRedoService.add(unit, false);
	            },

	            zoom: function (zoom, options) {
	                if (zoom) {
	                    var staticPoint = options ? options.point : new diagram.Point(0, 0);
	                    // var meta = options ? options.meta : 0;
	                    zoom = this._zoom = this._getValidZoom(zoom);

	                    if (!isUndefined(staticPoint)) {//Viewpoint vector is constant
	                        staticPoint = new diagram.Point(math.round(staticPoint.x), math.round(staticPoint.y));
	                        var zoomedPoint = staticPoint.times(zoom);
	                        var viewportVector = this.modelToView(staticPoint);
	                        var raw = viewportVector.minus(zoomedPoint);//pan + zoomed point = viewpoint vector
	                        this._storePan(new diagram.Point(math.round(raw.x), math.round(raw.y)));
	                    }

	                    if (options) {
	                        options.zoom = zoom;
	                    }

	                    this._panTransform();

	                    this.canvas.surface.hideTooltip();

	                    this._updateAdorners();
	                }

	                return this._zoom;
	            },

	            _getPan: function(pan) {
	                var canvas = this.canvas;
	                if (!canvas.translate) {
	                    pan = pan.plus(this._pan);
	                }
	                return pan;
	            },

	            pan: function (pan, animate) {
	                if (pan instanceof Point) {
	                    var that = this;
	                    var scroller = that.scroller;
	                    pan = that._getPan(pan);
	                    pan = pan.times(-1);

	                    if (animate) {
	                        scroller.animatedScrollTo(pan.x, pan.y, function() {
	                            that._updateAdorners();
	                        });
	                    } else {
	                        scroller.scrollTo(pan.x, pan.y);
	                        that._updateAdorners();
	                    }
	                } else {
	                    return this._pan.times(-1);
	                }
	            },

	            viewport: function () {
	                var element = this.element;
	                var width = element.width();
	                var height = element.height();

	                if (this.toolBar) {
	                    height -= outerHeight(this.toolBar.element);
	                }

	                return new Rect(0, 0, width, height);
	            },
	            copy: function () {
	                if (this.options.copy.enabled) {
	                    this._clipboard = [];
	                    this._copyOffset = 1;
	                    for (var i = 0; i < this._selectedItems.length; i++) {
	                        var item = this._selectedItems[i];
	                        this._clipboard.push(item);
	                    }
	                }
	            },
	            cut: function () {
	                if (this.options.copy.enabled) {
	                    this._clipboard = [];
	                    this._copyOffset = 0;
	                    for (var i = 0; i < this._selectedItems.length; i++) {
	                        var item = this._selectedItems[i];
	                        this._clipboard.push(item);
	                    }
	                    this.remove(this._clipboard, true);
	                }
	            },

	            paste: function () {
	                if (this._clipboard.length > 0) {
	                    var item, copied, i;
	                    var mapping = {};
	                    var elements = splitDiagramElements(this._clipboard);
	                    var connections = elements.connections;
	                    var shapes = elements.shapes;
	                    var offset = {
	                        x: this._copyOffset * this.options.copy.offsetX,
	                        y: this._copyOffset * this.options.copy.offsetY
	                    };
	                    this.deselect();
	                    // first the shapes
	                    for (i = 0; i < shapes.length; i++) {
	                        item = shapes[i];
	                        copied = item.clone();
	                        mapping[item.id] = copied;
	                        copied.position(new Point(item.options.x + offset.x, item.options.y + offset.y));
	                        copied.diagram = this;
	                        copied = this._addShape(copied);
	                        if (copied) {
	                            copied.select();
	                        }
	                    }
	                    // then the connections
	                    for (i = 0; i < connections.length; i++) {
	                        item = connections[i];
	                        copied = this._addConnection(item.clone());
	                        if (copied) {
	                            this._updateCopiedConnection(copied, item, "source", mapping, offset);
	                            this._updateCopiedConnection(copied, item, "target", mapping, offset);

	                            copied.select(true);
	                            copied.updateModel();
	                        }
	                    }

	                    this._syncChanges();

	                    this._copyOffset += 1;
	                }
	            },

	            _updateCopiedConnection: function(connection, sourceConnection, connectorName, mapping, offset) {
	                var onActivate, inactiveItem, targetShape;
	                var target = sourceConnection[connectorName]();
	                var diagram = this;
	                if (target instanceof Connector && mapping[target.shape.id]) {
	                    targetShape = mapping[target.shape.id];
	                    if (diagram.getShapeById(targetShape.id)) {
	                        connection[connectorName](targetShape.getConnector(target.options.name));
	                    } else {
	                        inactiveItem = diagram._inactiveShapeItems.getByUid(targetShape.dataItem.uid);
	                        if (inactiveItem) {
	                            onActivate = function(item) {
	                                targetShape = diagram._dataMap[item.id];
	                                connection[connectorName](targetShape.getConnector(target.options.name));
	                                connection.updateModel();
	                            };
	                            diagram._deferredConnectionUpdates.push(inactiveItem.onActivate(onActivate));
	                        }
	                    }
	                } else {
	                    connection[connectorName](new Point(sourceConnection[connectorName + "Point"]().x + offset.x, sourceConnection[connectorName + "Point"]().y + offset.y));
	                }
	            },
	            /**
	             * Gets the bounding rectangle of the given items.
	             * @param items DiagramElement, Array of elements.
	             * @param origin Boolean. Pass 'true' if you need to get the bounding box of the shapes without their rotation offset.
	             * @returns {Rect}
	             */
	            boundingBox: function (items, origin) {
	                var rect = Rect.empty(), temp,
	                    di = isDefined(items) ? this._getDiagramItems(items) : {shapes: this.shapes};
	                if (di.shapes.length > 0) {
	                    var item = di.shapes[0];
	                    rect = item.bounds(ROTATED);
	                    for (var i = 1; i < di.shapes.length; i++) {
	                        item = di.shapes[i];
	                        temp = item.bounds(ROTATED);
	                        if (origin === true) {
	                            temp.x -= item._rotationOffset.x;
	                            temp.y -= item._rotationOffset.y;
	                        }
	                        rect = rect.union(temp);
	                    }
	                }
	                return rect;
	            },

	            _containerOffset: function() {
	                var containerOffset = this.element.offset();
	                if (this.toolBar) {
	                    containerOffset.top += outerHeight(this.toolBar.element);
	                }
	                return containerOffset;
	            },

	            documentToView: function(point) {
	                var containerOffset = this._containerOffset();

	                return new Point(point.x - containerOffset.left, point.y - containerOffset.top);
	            },
	            viewToDocument: function(point) {
	                var containerOffset = this._containerOffset();

	                return new Point(point.x + containerOffset.left, point.y + containerOffset.top);
	            },
	            viewToModel: function(point) {
	                return this._transformWithMatrix(point, this._matrixInvert);
	            },
	            modelToView: function(point) {
	                return this._transformWithMatrix(point, this._matrix);
	            },
	            modelToLayer: function(point) {
	                return this._transformWithMatrix(point, this._layerMatrix);
	            },
	            layerToModel: function(point) {
	                return this._transformWithMatrix(point, this._layerMatrixInvert);
	            },
	            documentToModel: function(point) {
	                var viewPoint = this.documentToView(point);
	                if (!this.canvas.translate) {
	                    viewPoint.x = viewPoint.x + this.scroller.scrollLeft;
	                    viewPoint.y = viewPoint.y + this.scroller.scrollTop;
	                }
	                return this.viewToModel(viewPoint);
	            },
	            modelToDocument: function(point) {
	                return this.viewToDocument(this.modelToView(point));
	            },
	            _transformWithMatrix: function(point, matrix) {
	                var result = point;
	                if (point instanceof Point) {
	                    if (matrix) {
	                        result = matrix.apply(point);
	                    }
	                }
	                else {
	                    var tl = this._transformWithMatrix(point.topLeft(), matrix),
	                        br = this._transformWithMatrix(point.bottomRight(), matrix);
	                    result = Rect.fromPoints(tl, br);
	                }
	                return result;
	            },

	            setDataSource: function(dataSource) {
	                this.options.dataSource = dataSource;
	                this._dataSource();
	                if (this.options.autoBind) {
	                    this.dataSource.fetch();
	                }
	            },

	            setConnectionsDataSource: function(dataSource) {
	                this.options.connectionsDataSource = dataSource;
	                this._connectionDataSource();
	                if (this.options.autoBind) {
	                    this.connectionsDataSource.fetch();
	                }
	            },

	            /**
	             * Performs a diagram layout of the given type.
	             * @param layoutType The layout algorithm to be applied (TreeLayout, LayeredLayout, SpringLayout).
	             * @param options Layout-specific options.
	             */
	            layout: function (options) {
	                this._layouting = true;
	                // TODO: raise layout event?
	                var type;
	                if(isUndefined(options)) {
	                    options = this.options.layout;
	                }
	                if (isUndefined(options) || isUndefined(options.type)) {
	                    type = "Tree";
	                }
	                else {
	                    type = options.type;
	                }
	                var l;
	                switch (type.toLowerCase()) {
	                    case "tree":
	                        l = new diagram.TreeLayout(this);
	                        break;

	                    case "layered":
	                        l = new diagram.LayeredLayout(this);
	                        break;

	                    case "forcedirected":
	                    case "force":
	                    case "spring":
	                    case "springembedder":
	                        l = new diagram.SpringLayout(this);
	                        break;
	                    default:
	                        throw "Layout algorithm '" + type + "' is not supported.";
	                }
	                var initialState = new diagram.LayoutState(this);
	                var finalState = l.layout(options);
	                if (finalState) {
	                    var unit = new diagram.LayoutUndoUnit(initialState, finalState, options ? options.animate : null);
	                    this.undoRedoService.add(unit);
	                }
	                this._layouting = false;
	                this._redrawConnections();
	            },
	            /**
	             * Gets a shape on the basis of its identifier.
	             * @param id (string) the identifier of a shape.
	             * @returns {Shape}
	             */
	            getShapeById: function (id) {
	                var found;
	                found = Utils.first(this.shapes, function (s) {
	                    return s.visual.id === id;
	                });
	                if (found) {
	                    return found;
	                }
	                found = Utils.first(this.connections, function (c) {
	                    return c.visual.id === id;
	                });
	                return found;
	            },

	            getShapeByModelId: function (id) {
	                var shape;
	                if (this._isEditable) {
	                    shape = this._dataMap[id];
	                } else {
	                    shape = Utils.first(this.shapes, function(shape) {
	                        return (shape.dataItem || {}).id === id;
	                    });
	                }
	                return shape;
	            },

	            getShapeByModelUid: function(uid) {
	                var shape;
	                if (this._isEditable) {
	                    shape = Utils.first(this.shapes, function(shape) {
	                        return (shape.dataItem || {}).uid === uid;
	                    });
	                } else {
	                    shape = this._dataMap[uid];
	                }
	                return shape;
	            },

	            getConnectionByModelId: function(id) {
	                var connection;
	                if (this.connectionsDataSource) {
	                    connection = Utils.first(this.connections, function(connection) {
	                        return (connection.dataItem || {}).id === id;
	                    });
	                }
	                return connection;
	            },

	            getConnectionByModelUid: function(uid) {
	                var connection;
	                if (this.connectionsDataSource) {
	                    connection = this._connectionsDataMap[uid];
	                }
	                return connection;
	            },

	            _extendLayoutOptions: function(options) {
	                if(options.layout) {
	                    options.layout = deepExtend({}, diagram.LayoutBase.fn.defaultOptions || {}, options.layout);
	                }
	            },

	            _selectionChanged: function (selected, deselected) {
	                if (selected.length || deselected.length) {
	                    this.trigger(SELECT, { selected: selected, deselected: deselected });
	                }
	            },
	            _getValidZoom: function (zoom) {
	                return math.min(math.max(zoom, this.options.zoomMin), this.options.zoomMax);
	            },
	            _panTransform: function (pos) {
	                var diagram = this,
	                    pan = pos || diagram._pan;

	                if (diagram.canvas.translate) {
	                    diagram.scroller.scrollTo(pan.x, pan.y);
	                    diagram._zoomMainLayer();
	                } else {
	                    diagram._storePan(pan);
	                    diagram._transformMainLayer();
	                }
	            },

	            _finishPan: function () {
	                this.trigger(PAN, {total: this._pan, delta: Number.NaN});
	            },
	            _storePan: function (pan) {
	                this._pan = pan;
	                this._storeViewMatrix();
	            },
	            _zoomMainLayer: function () {
	                var zoom = this._zoom;

	                var transform = new CompositeTransform(0, 0, zoom, zoom);
	                transform.render(this.mainLayer);
	                this._storeLayerMatrix(transform);
	                this._storeViewMatrix();
	            },
	            _transformMainLayer: function () {
	                var pan = this._pan,
	                    zoom = this._zoom;

	                var transform = new CompositeTransform(pan.x, pan.y, zoom, zoom);
	                transform.render(this.mainLayer);
	                this._storeLayerMatrix(transform);
	                this._storeViewMatrix();
	            },
	            _storeLayerMatrix: function(canvasTransform) {
	                this._layerMatrix = canvasTransform.toMatrix();
	                this._layerMatrixInvert = canvasTransform.invert().toMatrix();
	            },
	            _storeViewMatrix: function() {
	                var pan = this._pan,
	                    zoom = this._zoom;

	                var transform = new CompositeTransform(pan.x, pan.y, zoom, zoom);
	                this._matrix = transform.toMatrix();
	                this._matrixInvert = transform.invert().toMatrix();
	            },
	            _toIndex: function (items, indices) {
	                var result = this._getDiagramItems(items);
	                this.mainLayer.toIndex(result.visuals, indices);
	                this._fixOrdering(result, false);
	            },
	            _fixOrdering: function (result, toFront) {
	                var shapePos = toFront ? this.shapes.length - 1 : 0,
	                    conPos = toFront ? this.connections.length - 1 : 0,
	                    i, item;
	                for (i = 0; i < result.shapes.length; i++) {
	                    item = result.shapes[i];
	                    Utils.remove(this.shapes, item);
	                    Utils.insert(this.shapes, item, shapePos);
	                }
	                for (i = 0; i < result.cons.length; i++) {
	                    item = result.cons[i];
	                    Utils.remove(this.connections, item);
	                    Utils.insert(this.connections, item, conPos);
	                }
	            },
	            _getDiagramItems: function (items) {
	                var i, result = {}, args = items;
	                result.visuals = [];
	                result.shapes = [];
	                result.cons = [];

	                if (!items) {
	                    args = this._selectedItems.slice();
	                } else if (!isArray(items)) {
	                    args = [items];
	                }

	                for (i = 0; i < args.length; i++) {
	                    var item = args[i];
	                    if (item instanceof Shape) {
	                        result.shapes.push(item);
	                        result.visuals.push(item.visual);
	                    } else if (item instanceof Connection) {
	                        result.cons.push(item);
	                        result.visuals.push(item.visual);
	                    }
	                }

	                return result;
	            },

	            _removeItem: function (item, undoable, removedConnections) {
	                item.select(false);
	                if (item instanceof Shape) {
	                    this._removeShapeDataItem(item);
	                    this._removeShape(item, undoable, removedConnections);
	                } else if (item instanceof Connection) {
	                    this._removeConnectionDataItem(item);
	                    this._removeConnection(item, undoable);
	                }

	                this.mainLayer.remove(item.visual);
	            },

	            _removeShape: function (shape, undoable, removedConnections) {
	                var i, connection, connector,
	                    sources = [], targets = [];
	                this.toolService._removeHover();

	                if (undoable) {
	                    this.undoRedoService.addCompositeItem(new DeleteShapeUnit(shape));
	                }
	                Utils.remove(this.shapes, shape);
	                this._shapesQuadTree.remove(shape);

	                for (i = 0; i < shape.connectors.length; i++) {
	                    connector = shape.connectors[i];
	                    for (var j = 0; j < connector.connections.length; j++) {
	                        connection = connector.connections[j];
	                        if (!removedConnections || !dataviz.inArray(connection, removedConnections)) {
	                            if (connection.sourceConnector == connector) {
	                                sources.push(connection);
	                            } else if (connection.targetConnector == connector) {
	                                targets.push(connection);
	                            }
	                        }
	                    }
	                }

	                for (i = 0; i < sources.length; i++) {
	                    sources[i].source(null, undoable);
	                    sources[i].updateModel();
	                }
	                for (i = 0; i < targets.length; i++) {
	                    targets[i].target(null, undoable);
	                    targets[i].updateModel();
	                }
	            },

	            _removeConnection: function (connection, undoable) {
	                if (connection.sourceConnector) {
	                    Utils.remove(connection.sourceConnector.connections, connection);
	                }
	                if (connection.targetConnector) {
	                    Utils.remove(connection.targetConnector.connections, connection);
	                }
	                if (undoable) {
	                    this.undoRedoService.addCompositeItem(new DeleteConnectionUnit(connection));
	                }

	                Utils.remove(this.connections, connection);
	            },

	            _removeDataItems: function(items, recursive) {
	                var item, children, shape, idx;
	                items = isArray(items) ? items : [items];

	                while (items.length) {
	                    item = items.shift();
	                    shape = this._dataMap[item.uid];
	                    if (shape) {
	                        this._removeShapeConnections(shape);
	                        this._removeItem(shape, false);
	                        delete this._dataMap[item.uid];
	                        if (recursive && item.hasChildren && item.loaded()) {
	                            children = item.children.data();
	                            for (idx = 0; idx < children.length; idx++) {
	                                items.push(children[idx]);
	                            }
	                        }
	                    }
	                }
	            },

	            _removeShapeConnections: function(shape) {
	                var connections = shape.connections();
	                var idx;

	                if (connections) {
	                    for (idx = 0; idx < connections.length; idx++) {
	                        this._removeItem(connections[idx], false);
	                    }
	                }
	            },

	            _addDataItem: function(dataItem, undoable) {
	                if (!defined(dataItem)) {
	                    return;
	                }

	                var shape = this._dataMap[dataItem.id];
	                if (shape) {
	                    return shape;
	                }

	                var options = deepExtend({}, this.options.shapeDefaults);
	                options.dataItem = dataItem;
	                shape = new Shape(options, this);
	                this.addShape(shape, undoable !== false);
	                this._dataMap[dataItem.id] = shape;
	                return shape;
	            },

	            _addDataItemByUid: function(dataItem) {
	                if (!defined(dataItem)) {
	                    return;
	                }

	                var shape = this._dataMap[dataItem.uid];
	                if (shape) {
	                    return shape;
	                }

	                var options = deepExtend({}, this.options.shapeDefaults);
	                options.dataItem = dataItem;
	                shape = new Shape(options, this);
	                this.addShape(shape);
	                this._dataMap[dataItem.uid] = shape;
	                return shape;
	            },

	            _addDataItems: function(items, parent) {
	                var item, idx, shape, parentShape, connection;
	                for (idx = 0; idx < items.length; idx++) {
	                    item = items[idx];
	                    shape = this._addDataItemByUid(item);
	                    parentShape = this._addDataItemByUid(parent);
	                    if (parentShape && !this.connected(parentShape, shape)) { // check if connected to not duplicate connections.
	                        connection = this.connect(parentShape, shape);
	                    }
	                }
	            },

	            _refreshSource: function (e) {
	                var that = this,
	                    node = e.node,
	                    action = e.action,
	                    items = e.items,
	                    options = that.options,
	                    idx,
	                    dataBound;

	                if (e.field) {
	                    for (idx = 0; idx < items.length; idx++) {
	                        if (this._dataMap[items[idx].uid]) {
	                            this._dataMap[items[idx].uid].redrawVisual();
	                        }
	                    }
	                    return;
	                }

	                if (action == "remove") {
	                    this._removeDataItems(e.items, true);
	                } else {

	                    if ((!action || action === "itemloaded") && !this._bindingRoots) {
	                        this._bindingRoots = true;
	                        dataBound = true;
	                    }

	                    if (!action && !node) {
	                        that.clear();
	                    }

	                    this._addDataItems(items, node);

	                    for (idx = 0; idx < items.length; idx++) {
	                        items[idx].load();
	                    }
	                }

	                if (options.layout && (dataBound || action == "remove" || action == "add")) {
	                    that.layout(options.layout);
	                }

	                if (dataBound) {
	                    this.trigger("dataBound");
	                    this._bindingRoots = false;
	                }
	            },

	            _addItem: function (item) {
	                if (item instanceof Shape) {
	                    this.addShape(item);
	                } else if (item instanceof Connection) {
	                    this.addConnection(item);
	                }
	            },

	            _createToolBar: function(preventClosing) {
	                var diagram = this.toolService.diagram;

	                if (!this.singleToolBar && diagram.select().length === 1) {
	                    var element = diagram.select()[0];
	                    if (element && element.options.editable !== false) {
	                        var editable = element.options.editable;
	                        var tools = editable.tools;
	                        if (this._isEditable && tools.length === 0) {
	                            if (element instanceof Shape) {
	                                tools = ["edit", "rotateClockwise", "rotateAnticlockwise"];
	                            } else if (element instanceof Connection) {
	                                tools = ["edit"];
	                            }

	                            if (editable && editable.remove !== false) {
	                                tools.push("delete");
	                            }
	                        }

	                        if (tools && tools.length) {
	                            var padding = 20;
	                            var point;
	                            this.singleToolBar = new DiagramToolBar(diagram, {
	                                tools: tools,
	                                click: proxy(this._toolBarClick, this),
	                                modal: true,
	                                popupZIndex: parseInt(diagram.element.closest(".k-window").css("zIndex"), 10) + 10
	                            });
	                            var popupWidth = outerWidth(this.singleToolBar._popup.element);
	                            var popupHeight = outerHeight(this.singleToolBar._popup.element);
	                            if (element instanceof Shape) {
	                                var shapeBounds = this.modelToView(element.bounds(ROTATED));
	                                point = new Point(shapeBounds.x, shapeBounds.y).minus(new Point(
	                                    (popupWidth - shapeBounds.width) / 2,
	                                    popupHeight + padding));
	                            } else if (element instanceof Connection) {
	                                var connectionBounds = this.modelToView(element.bounds());

	                                point = new Point(connectionBounds.x, connectionBounds.y)
	                                    .minus(new Point(
	                                        (popupWidth - connectionBounds.width - 20) / 2,
	                                        popupHeight + padding
	                                    ));
	                            }

	                            if (point) {
	                                if (!this.canvas.translate) {
	                                    point = point.minus(new Point(this.scroller.scrollLeft, this.scroller.scrollTop));
	                                }
	                                point = this.viewToDocument(point);
	                                point = new Point(math.max(point.x, 0), math.max(point.y, 0));
	                                this.singleToolBar.showAt(point);
	                                if (preventClosing) {
	                                    this.singleToolBar._popup.one("close", preventDefault);
	                                }
	                            } else {
	                                this._destroyToolBar();
	                            }
	                        }
	                    }
	                }
	            },

	            _toolBarClick: function(e) {
	                this.trigger("toolBarClick", e);
	                this._destroyToolBar();
	            },

	            _normalizePointZoom: function (point) {
	                return point.times(1 / this.zoom());
	            },

	            _initialize: function () {
	                this.shapes = [];
	                this._selectedItems = [];
	                this.connections = [];
	                this._dataMap = {};
	                this._connectionsDataMap = {};
	                this._inactiveShapeItems = new InactiveItemsCollection();
	                this._deferredConnectionUpdates = [];
	                this.undoRedoService = new UndoRedoService({
	                    undone: this._syncHandler,
	                    redone: this._syncHandler
	                });
	                this.id = diagram.randomId();
	            },

	            _fetchFreshData: function () {
	                var that = this;
	                that._dataSource();

	                if (that._isEditable) {
	                    that._connectionDataSource();
	                }

	                if (that.options.autoBind) {
	                    if (that._isEditable) {
	                        this._loadingShapes = true;
	                        this._loadingConnections = true;
	                        that.dataSource.fetch();
	                        that.connectionsDataSource.fetch();
	                    } else {
	                        that.dataSource.fetch();
	                    }
	                }
	            },

	            _dataSource: function() {
	                if (defined(this.options.connectionsDataSource)) {
	                    this._isEditable = true;
	                    var dsOptions = this.options.dataSource || {};
	                    var ds = isArray(dsOptions) ? { data: dsOptions } : dsOptions;

	                    if (this.dataSource && this._shapesRefreshHandler) {
	                        this.dataSource
	                            .unbind("change", this._shapesRefreshHandler)
	                            .unbind("requestStart", this._shapesRequestStartHandler)
	                            .unbind("error", this._shapesErrorHandler);
	                    } else {
	                        this._shapesRefreshHandler = proxy(this._refreshShapes, this);
	                        this._shapesRequestStartHandler = proxy(this._shapesRequestStart, this);
	                        this._shapesErrorHandler = proxy(this._error, this);
	                    }

	                    this.dataSource = kendo.data.DataSource.create(ds)
	                        .bind("change", this._shapesRefreshHandler)
	                        .bind("requestStart", this._shapesRequestStartHandler)
	                        .bind("error", this._shapesErrorHandler);
	                } else {
	                    this._treeDataSource();
	                    this._isEditable = false;
	                }
	            },

	            _connectionDataSource: function() {
	                var dsOptions = this.options.connectionsDataSource;
	                if (dsOptions) {
	                    var ds = isArray(dsOptions) ? { data: dsOptions } : dsOptions;

	                    if (this.connectionsDataSource && this._connectionsRefreshHandler) {
	                        this.connectionsDataSource
	                            .unbind("change", this._connectionsRefreshHandler)
	                            .unbind("requestStart", this._connectionsRequestStartHandler)
	                            .unbind("error", this._connectionsErrorHandler);
	                    } else {
	                        this._connectionsRefreshHandler = proxy(this._refreshConnections, this);
	                        this._connectionsRequestStartHandler = proxy(this._connectionsRequestStart, this);
	                        this._connectionsErrorHandler = proxy(this._connectionsError, this);
	                    }

	                    this.connectionsDataSource = kendo.data.DataSource.create(ds)
	                        .bind("change", this._connectionsRefreshHandler)
	                        .bind("requestStart", this._connectionsRequestStartHandler)
	                        .bind("error", this._connectionsErrorHandler);
	                }
	            },

	            _shapesRequestStart: function(e) {
	                if (e.type == "read") {
	                    this._loadingShapes = true;
	                }
	            },

	            _connectionsRequestStart: function(e) {
	                if (e.type == "read") {
	                    this._loadingConnections = true;
	                }
	            },

	            _error: function () {
	                this._loadingShapes = false;
	            },

	            _connectionsError: function() {
	                this._loadingConnections = false;
	            },

	            _refreshShapes: function(e) {
	                if (e.action === "remove") {
	                    if (this._shouldRefresh()) {
	                        this._removeShapes(e.items);
	                    }
	                } else if (e.action === "itemchange") {
	                    if (this._shouldRefresh()) {
	                        this._updateShapes(e.items, e.field);
	                    }
	                } else if (e.action === "add") {
	                    this._inactiveShapeItems.add(e.items);
	                } else if (e.action === "sync") {
	                    this._syncShapes(e.items);
	                } else {
	                    this.refresh();
	                }
	            },

	            _shouldRefresh: function() {
	                return !this._suspended;
	            },

	            _suspendModelRefresh: function() {
	                this._suspended = (this._suspended || 0) + 1;
	            },

	            _resumeModelRefresh: function() {
	                this._suspended = math.max((this._suspended || 0) - 1, 0);
	            },

	            refresh: function() {
	                this._loadingShapes = false;
	                if (!this._loadingConnections) {
	                    this._rebindShapesAndConnections();
	                }
	            },

	            _rebindShapesAndConnections: function() {
	                this.clear();
	                this._addShapes(this.dataSource.view());
	                if (this.connectionsDataSource) {
	                    this._addConnections(this.connectionsDataSource.view(), false);
	                }

	                if (this.options.layout) {
	                    this.layout(this.options.layout);
	                } else {
	                    this._redrawConnections();
	                }
	                this.trigger("dataBound");
	            },

	            refreshConnections: function() {
	                this._loadingConnections = false;
	                if (!this._loadingShapes) {
	                    this._rebindShapesAndConnections();
	                }
	            },

	            _redrawConnections: function() {
	                var connections = this.connections;
	                for (var idx = 0; idx < connections.length; idx++) {
	                    connections[idx].refresh();
	                }
	            },

	            _removeShapes: function(items) {
	                var dataMap = this._dataMap;
	                var item, i;
	                for (i = 0; i < items.length; i++) {
	                    item = items[i];
	                    if (dataMap[item.id]) {
	                        this.remove(dataMap[item.id], false);
	                        dataMap[item.id] = null;
	                    }
	                }
	            },

	            _syncShapes: function() {
	                var diagram = this;
	                var inactiveItems = diagram._inactiveShapeItems;
	                inactiveItems.forEach(function(inactiveItem) {
	                    var dataItem = inactiveItem.dataItem;
	                    var shape = inactiveItem.element;
	                    if (!dataItem.isNew()) {
	                        if (shape) {
	                            shape._setOptionsFromModel();
	                            diagram.addShape(shape, inactiveItem.undoable);
	                            diagram._dataMap[dataItem.id] = shape;
	                        } else {
	                            diagram._addDataItem(dataItem);
	                        }
	                        inactiveItem.activate();
	                        inactiveItems.remove(dataItem);
	                    }
	                });
	            },

	            _updateShapes: function(items, field) {
	                for (var i = 0; i < items.length; i++) {
	                    var dataItem = items[i];

	                    var shape = this._dataMap[dataItem.id];
	                    if (shape) {
	                        shape.updateOptionsFromModel(dataItem, field);
	                    }
	                }
	            },

	            _addShapes: function(dataItems) {
	                for (var i = 0; i < dataItems.length; i++) {
	                    this._addDataItem(dataItems[i], false);
	                }
	            },

	            _refreshConnections: function(e) {
	                if (e.action === "remove") {
	                    if (this._shouldRefresh()) {
	                        this._removeConnections(e.items);
	                    }
	                } else if (e.action === "add") {
	                    this._addConnections(e.items);
	                } else if (e.action === "sync") {
	                    //TO DO: include logic to update the connections with different values returned from the server.
	                } else if (e.action === "itemchange") {
	                    if (this._shouldRefresh()) {
	                        this._updateConnections(e.items);
	                    }
	                } else {
	                    this.refreshConnections();
	                }
	            },

	            _removeConnections: function(items) {
	                for (var i = 0; i < items.length; i++) {
	                    this.remove(this._connectionsDataMap[items[i].uid], false);
	                    this._connectionsDataMap[items[i].uid] = null;
	                }
	            },

	            _updateConnections: function(items) {
	                for (var i = 0; i < items.length; i++) {
	                    var dataItem = items[i];

	                    var connection = this._connectionsDataMap[dataItem.uid];
	                    connection.updateOptionsFromModel(dataItem);
	                }
	            },

	            _addConnections: function(connections, undoable) {
	                var length = connections.length;

	                for (var i = 0; i < length; i++) {
	                    var dataItem = connections[i];
	                    this._addConnectionDataItem(dataItem, undoable);
	                }
	            },

	            _addConnectionDataItem: function(dataItem, undoable) {
	                if (!this._connectionsDataMap[dataItem.uid]) {
	                    var from = this._validateConnector(dataItem.from);
	                    if (!defined(from) || from === null) {
	                        from = new Point(dataItem.fromX, dataItem.fromY);
	                    }

	                    var to = this._validateConnector(dataItem.to);
	                    if (!defined(to) || to === null) {
	                        to = new Point(dataItem.toX, dataItem.toY);
	                    }

	                    if (defined(from) && defined(to)) {
	                        var options = deepExtend({}, this.options.connectionDefaults);
	                        options.dataItem = dataItem;
	                        var connection = new Connection(from, to, options);

	                        this._connectionsDataMap[dataItem.uid] = connection;
	                        this.addConnection(connection, undoable);
	                    }
	                }
	            },

	            _validateConnector: function(value) {
	                var connector;

	                if (defined(value) && value !== null) {
	                    connector = this._dataMap[value];
	                }

	                return connector;
	            },

	            _treeDataSource: function () {
	                var that = this,
	                    options = that.options,
	                    dataSource = options.dataSource;

	                dataSource = isArray(dataSource) ? { data: dataSource } : dataSource;

	                if (dataSource instanceof kendo.data.DataSource && !(dataSource instanceof kendo.data.HierarchicalDataSource)) {
	                    throw new Error("Incorrect DataSource type. If a single dataSource instance is set to the diagram then it should be a HierarchicalDataSource. You should set only the options instead of an instance or a HierarchicalDataSource instance or supply connectionsDataSource as well.");
	                }

	                if (!dataSource.fields) {
	                    dataSource.fields = [
	                        { field: "text" },
	                        { field: "url" },
	                        { field: "spriteCssClass" },
	                        { field: "imageUrl" }
	                    ];
	                }
	                if (that.dataSource && that._refreshHandler) {
	                    that._unbindDataSource();
	                }

	                that._refreshHandler = proxy(that._refreshSource, that);
	                that._errorHandler = proxy(that._error, that);

	                that.dataSource = HierarchicalDataSource.create(dataSource)
	                    .bind(CHANGE, that._refreshHandler)
	                    .bind(ERROR, that._errorHandler);
	            },

	            _unbindDataSource: function () {
	                var that = this;

	                that.dataSource.unbind(CHANGE, that._refreshHandler).unbind(ERROR, that._errorHandler);
	            },

	            _adorn: function (adorner, isActive) {
	                if (isActive !== undefined && adorner) {
	                    if (isActive) {
	                        this._adorners.push(adorner);
	                        this.adornerLayer.append(adorner.visual);
	                    }
	                    else {
	                        Utils.remove(this._adorners, adorner);
	                        this.adornerLayer.remove(adorner.visual);
	                    }
	                }
	            },

	            _showConnectors: function (shape, value) {
	                if (value) {
	                    this._connectorsAdorner.show(shape);
	                } else {
	                    this._connectorsAdorner.destroy();
	                }
	            },

	            _updateAdorners: function() {
	                var adorners = this._adorners;

	                for(var i = 0; i < adorners.length; i++) {
	                    var adorner = adorners[i];

	                    if (adorner.refreshBounds) {
	                        adorner.refreshBounds();
	                    }
	                    adorner.refresh();
	                }
	            },

	            _refresh: function () {
	                for (var i = 0; i < this.connections.length; i++) {
	                    this.connections[i].refresh();
	                }
	            },

	            _destroyToolBar: function() {
	                if (this.singleToolBar) {
	                    this.singleToolBar.hide();
	                    this.singleToolBar.destroy();
	                    this.singleToolBar = null;
	                }
	            },

	            _destroyGlobalToolBar: function() {
	                if (this.toolBar) {
	                    this.toolBar.hide();
	                    this.toolBar.destroy();
	                    this.toolBar = null;
	                }
	            },

	            exportDOMVisual: function() {
	                var viewBox = this.canvas._viewBox;
	                var scrollOffset = geom.transform()
	                                       .translate(-viewBox.x, -viewBox.y);

	                var viewRect = new geom.Rect([0, 0], [viewBox.width, viewBox.height]);
	                var clipPath = draw.Path.fromRect(viewRect);
	                var wrap = new draw.Group({ transform: scrollOffset });
	                var clipWrap = new draw.Group({ clip: clipPath });
	                var root = this.canvas.drawingElement.children[0];

	                clipWrap.append(wrap);

	                // Don't reparent the root
	                wrap.children.push(root);

	                return clipWrap;
	            },

	            exportVisual: function() {
	                var scale = geom.transform().scale(1 / this._zoom);
	                var wrap = new draw.Group({
	                    transform: scale
	                });

	                var root = this.mainLayer.drawingElement;
	                wrap.children.push(root);

	                return wrap;
	            },

	            _syncChanges: function() {
	                this._syncShapeChanges();
	                this._syncConnectionChanges();
	            },

	            _syncShapeChanges: function() {
	                if (this.dataSource && this._isEditable) {
	                    this.dataSource.sync();
	                }
	            },

	            _syncConnectionChanges: function() {
	                var that = this;
	                if (that.connectionsDataSource && that._isEditable) {
	                    $.when.apply($, that._deferredConnectionUpdates).then(function() {
	                        that.connectionsDataSource.sync();
	                    });
	                    that.deferredConnectionUpdates = [];
	                }
	            }
	        });

	        dataviz.ExportMixin.extend(Diagram.fn, true);

	        if (kendo.PDFMixin) {
	            kendo.PDFMixin.extend(Diagram.fn);
	        }

	        function filterShapeDataItem(dataItem) {
	            var result = {};

	            dataItem = dataItem || {};

	            if (defined(dataItem.text) && dataItem.text !== null) {
	                result.text = dataItem.text;
	            }

	            if (defined(dataItem.x) && dataItem.x !== null) {
	                result.x = dataItem.x;
	            }

	            if (defined(dataItem.y) && dataItem.y !== null) {
	                result.y = dataItem.y;
	            }

	            if (defined(dataItem.width) && dataItem.width !== null) {
	                result.width = dataItem.width;
	            }

	            if (defined(dataItem.height) && dataItem.height !== null) {
	                result.height = dataItem.height;
	            }

	            if (defined(dataItem.type) && dataItem.type !== null) {
	                result.type = dataItem.type;
	            }

	            return result;
	        }

	        function filterConnectionDataItem(dataItem) {
	            var result = {};

	            dataItem = dataItem || {};

	            if (defined(dataItem.text) && dataItem.text !== null) {
	                result.content = dataItem.text;
	            }

	            if (defined(dataItem.type) && dataItem.type !== null) {
	                result.type = dataItem.type;
	            }

	            if (defined(dataItem.from) && dataItem.from !== null) {
	                result.from = dataItem.from;
	            }

	            if (defined(dataItem.fromConnector) && dataItem.fromConnector !== null) {
	                result.fromConnector = dataItem.fromConnector;
	            }

	            if (defined(dataItem.fromX) && dataItem.fromX !== null) {
	                result.fromX = dataItem.fromX;
	            }

	            if (defined(dataItem.fromY) && dataItem.fromY !== null) {
	                result.fromY = dataItem.fromY;
	            }

	            if (defined(dataItem.to) && dataItem.to !== null) {
	                result.to = dataItem.to;
	            }

	            if (defined(dataItem.toConnector) && dataItem.toConnector !== null) {
	                result.toConnector = dataItem.toConnector;
	            }

	            if (defined(dataItem.toX) && dataItem.toX !== null) {
	                result.toX = dataItem.toX;
	            }

	            if (defined(dataItem.toY) && dataItem.toY !== null) {
	                result.toY = dataItem.toY;
	            }

	            return result;
	        }


	        var DiagramToolBar = kendo.Observable.extend({
	            init: function(diagram, options) {
	                kendo.Observable.fn.init.call(this);
	                this.diagram = diagram;
	                this.options = deepExtend({}, this.options, options);
	                this._tools = [];
	                this.createToolBar();
	                this.createTools();
	                this.appendTools();

	                if (this.options.modal) {
	                    this.createPopup();
	                }

	                this.bind(this.events, options);
	            },

	            events: ["click"],

	            createPopup: function() {
	                this.container = $("<div/>").append(this.element);
	                this._popup = this.container.kendoPopup({}).getKendoPopup();
	            },

	            appendTools: function() {
	                for (var i = 0; i < this._tools.length; i++) {
	                    var tool = this._tools[i];
	                    if (tool.buttons && tool.buttons.length || !defined(tool.buttons)) {
	                        this._toolBar.add(tool);
	                    }
	                }
	            },

	            createToolBar: function() {
	                this.element = $("<div/>");
	                this._toolBar = this.element
	                    .kendoToolBar({
	                        click: proxy(this.click, this),
	                        resizable: false
	                    }).getKendoToolBar();

	                this.element.css("border", "none");
	            },

	            createTools: function() {
	                for (var i = 0; i < this.options.tools.length; i++) {
	                    this.createTool(this.options.tools[i]);
	                }
	            },

	            createTool: function(tool) {
	                if (!isPlainObject(tool)) {
	                    tool = {
	                        name: tool
	                    };
	                }
	                var toolName = tool.name + "Tool";
	                if (this[toolName]) {
	                    this[toolName](tool);
	                } else {
	                    this._tools.push(deepExtend({}, tool, {
	                        attributes: this._setAttributes({action: tool.name})
	                    }));
	                }
	            },

	            showAt: function(point) {
	                var popupZIndex = parseInt(this.options.popupZIndex, 10);

	                if (this._popup) {
	                    this._popup.open(point.x, point.y);

	                    if (popupZIndex) {
	                        this._popup.wrapper.css("zIndex", popupZIndex);
	                    }
	                }
	            },

	            hide: function() {
	                if (this._popup) {
	                    this._popup.close();
	                }
	            },

	            newGroup: function() {
	                return {
	                    type: "buttonGroup",
	                    buttons: []
	                };
	            },

	            editTool: function() {
	                this._tools.push({
	                    icon: "edit",
	                    showText: "overflow",
	                    type: "button",
	                    text: "Edit",
	                    attributes: this._setAttributes({ action: "edit" })
	                });
	            },

	            deleteTool: function() {
	                this._tools.push({
	                    icon: "close",
	                    showText: "overflow",
	                    type: "button",
	                    text: "Delete",
	                    attributes: this._setAttributes({ action: "delete" })
	                });
	            },

	            rotateAnticlockwiseTool: function(options) {
	                this._appendGroup("rotate");
	                this._rotateGroup.buttons.push({
	                    icon: "rotate-left",
	                    showText: "overflow",
	                    text: "RotateAnticlockwise",
	                    group: "rotate",
	                    attributes: this._setAttributes({ action: "rotateAnticlockwise", step: options.step })
	                });
	            },

	            rotateClockwiseTool: function(options) {
	                this._appendGroup("rotate");
	                this._rotateGroup.buttons.push({
	                    icon: "rotate-right",
	                    attributes: this._setAttributes({ action: "rotateClockwise", step: options.step }),
	                    showText: "overflow",
	                    text: "RotateClockwise",
	                    group: "rotate"
	                });
	            },

	            createShapeTool: function() {
	                this._appendGroup("create");
	                this._createGroup.buttons.push({
	                    icon: "shape",
	                    showText: "overflow",
	                    text: "CreateShape",
	                    group: "create",
	                    attributes: this._setAttributes({ action: "createShape" })
	                });
	            },

	            createConnectionTool: function() {
	                this._appendGroup("create");
	                this._createGroup.buttons.push({
	                    icon: "connector",
	                    showText: "overflow",
	                    text: "CreateConnection",
	                    group: "create",
	                    attributes: this._setAttributes({ action: "createConnection" })
	                });
	            },

	            undoTool: function() {
	                this._appendGroup("history");
	                this._historyGroup.buttons.push({
	                    icon: "undo",
	                    showText: "overflow",
	                    text: "Undo",
	                    group: "history",
	                    attributes: this._setAttributes({ action: "undo" })
	                });
	            },

	            redoTool: function() {
	                this._appendGroup("history");
	                this._historyGroup.buttons.push({
	                    icon: "redo",
	                    showText: "overflow",
	                    text: "Redo",
	                    group: "history",
	                    attributes: this._setAttributes({ action: "redo" })
	                });
	            },

	            _appendGroup: function(name) {
	                var prop = "_" + name + "Group";
	                if (!this[prop]) {
	                    this[prop] = this.newGroup();
	                    this._tools.push(this[prop]);
	                }
	            },

	            _setAttributes: function(attributes) {
	                var attr = {};

	                if (attributes.action) {
	                    attr[kendo.attr("action")] = attributes.action;
	                }

	                if (attributes.step) {
	                    attr[kendo.attr("step")] = attributes.step;
	                }

	                return attr;
	            },

	            _getAttributes: function(element) {
	                var attr = {};

	                var action = element.attr(kendo.attr("action"));
	                if (action) {
	                    attr.action = action;
	                }

	                var step = element.attr(kendo.attr("step"));
	                if (step) {
	                    attr.step = step;
	                }

	                return attr;
	            },

	            click: function(e) {
	                var attributes = this._getAttributes($(e.target));
	                var action = attributes.action;

	                if (action && this[action]) {
	                    this[action](attributes);
	                }

	                this.trigger("click", this.eventData(action, e.target));
	            },

	            eventData: function(action, target) {
	                var elements = this.selectedElements(),
	                    length = elements.length,
	                    shapes = [], connections = [], element;

	                for (var idx = 0; idx < length; idx++) {
	                    element = elements[idx];
	                    if (element instanceof Shape) {
	                        shapes.push(element);
	                    } else {
	                        connections.push(element);
	                    }
	                }

	                return {
	                    shapes: shapes,
	                    connections: connections,
	                    action: action,
	                    target: target
	                };
	            },

	            "delete": function() {
	                var diagram = this.diagram;
	                var toRemove = diagram._triggerRemove(this.selectedElements());
	                if (toRemove.length) {
	                    this.diagram.remove(toRemove, true);
	                    this.diagram._syncChanges();
	                }
	            },

	            edit: function() {
	                var selectedElemens = this.selectedElements();
	                if (selectedElemens.length === 1) {
	                    this.diagram.edit(selectedElemens[0]);
	                }
	            },

	            rotateClockwise: function(options) {
	                var angle = parseFloat(options.step || 90);
	                this._rotate(angle);
	            },

	            rotateAnticlockwise: function(options) {
	                var angle = parseFloat(options.step || 90);
	                this._rotate(-angle);
	            },

	            _rotate: function(angle) {
	                var adorner = this.diagram._resizingAdorner;
	                adorner.angle(adorner.angle() + angle);
	                adorner.rotate();
	            },

	            selectedElements: function() {
	                return this.diagram.select();
	            },

	            createShape: function() {
	                this.diagram.createShape();
	            },

	            createConnection: function() {
	                this.diagram.createConnection();
	            },

	            undo: function() {
	                this.diagram.undo();
	            },

	            redo: function() {
	                this.diagram.redo();
	            },

	            destroy: function() {
	                this.diagram = null;
	                this.element = null;
	                this.options = null;

	                if (this._toolBar) {
	                    this._toolBar.destroy();
	                }

	                if (this._popup) {
	                    this._popup.destroy();
	                }
	            }
	        });

	        var Editor = kendo.Observable.extend({
	            init: function(element, options) {
	                kendo.Observable.fn.init.call(this);

	                this.options = extend(true, {}, this.options, options);
	                this.element = element;
	                this.model = this.options.model;
	                this.fields = this._getFields();
	                this._initContainer();
	                this.createEditable();
	            },

	            options: {
	                editors: {}
	            },

	            _initContainer: function() {
	                this.wrapper = this.element;
	            },

	            createEditable: function() {
	                var options = this.options;

	                this.editable = new kendo.ui.Editable(this.wrapper, {
	                    fields: this.fields,
	                    target: options.target,
	                    clearContainer: false,
	                    model: this.model
	                });
	            },

	            _isEditable: function(field) {
	                return this.model.editable && this.model.editable(field);
	            },

	            _getFields: function() {
	                var fields = [];
	                var modelFields = this.model.fields;

	                for (var field in modelFields) {
	                    var result = {};
	                    if (this._isEditable(field)) {
	                        var editor = this.options.editors[field];
	                        if (editor) {
	                            result.editor = editor;
	                        }
	                        result.field = field;
	                        fields.push(result);
	                    }
	                }

	                return fields;
	            },

	            end: function() {
	                return this.editable.end();
	            },

	            destroy: function() {
	                this.editable.destroy();
	                this.editable.element.find("[" + kendo.attr("container-for") + "]").empty();
	                this.model = this.wrapper = this.element = this.columns = this.editable = null;
	            }
	        });

	        var PopupEditor = Editor.extend({
	            init: function(element, options) {
	                Editor.fn.init.call(this, element, options);
	                this.bind(this.events, this.options);

	                this.open();
	            },

	            events: [ "update", "cancel" ],

	            options: {
	                window: {
	                    modal: true,
	                    resizable: false,
	                    draggable: true,
	                    title: "Edit",
	                    visible: false
	                }
	            },

	            _initContainer: function() {
	                var that = this;
	                this.wrapper = $('<div class="k-popup-edit-form"/>')
	                    .attr(kendo.attr("uid"), this.model.uid);

	                var formContent = "";

	                if (this.options.template) {
	                    formContent += this._renderTemplate();
	                    this.fields = [];
	                } else {
	                    formContent += this._renderFields();
	                }

	                formContent += this._renderButtons();

	                this.wrapper.append(
	                    $('<div class="k-edit-form-container"/>').append(formContent));

	                this.window = new kendo.ui.Window(this.wrapper.appendTo(this.element), this.options.window);
	                this.window.bind("close", function(e) {
	                    //The bellow line is required due to: draggable window in IE, change event will be triggered while the window is closing
	                    if (e.userTriggered) {
	                        e.sender.element.trigger("focus");
	                        that._cancelClick(e);
	                    }
	                });

	                this._attachButtonEvents();
	            },

	            _renderTemplate: function() {
	                var template = this.options.template;

	                if (typeof template === "string") {
	                    template = kendo.unescape(template);
	                }

	                template = kendo.template(template)(this.model);

	                return template;
	            },

	            _renderFields: function() {
	                var form = "";
	                for (var i = 0; i < this.fields.length; i++) {
	                    var field = this.fields[i];

	                    form += '<div class="k-edit-label"><label for="' + field.field + '">' + (field.field || "") + '</label></div>';

	                    if (this._isEditable(field.field)) {
	                        form += '<div ' + kendo.attr("container-for") + '="' + field.field +
	                        '" class="k-edit-field"></div>';
	                    }
	                }

	                return form;
	            },

	            _renderButtons: function() {
	                var form = '<div class="k-edit-buttons">';
	                form += this._createButton("update");
	                form += this._createButton("cancel");
	                form += '</div>';
	                return form;
	            },

	            _createButton: function(name) {
	                return kendo.template(BUTTON_TEMPLATE)(defaultButtons[name]);
	            },

	            _attachButtonEvents: function() {
	                this._cancelClickHandler = proxy(this._cancelClick, this);
	                this.window.element.on(CLICK + NS, "a.k-diagram-cancel", this._cancelClickHandler);

	                this._updateClickHandler = proxy(this._updateClick, this);
	                this.window.element.on(CLICK + NS, "a.k-diagram-update", this._updateClickHandler);
	            },

	            _updateClick: function(e) {
	                e.preventDefault();
	                this.trigger("update");
	            },

	            _cancelClick: function (e) {
	                e.preventDefault();
	                this.trigger("cancel");
	            },

	            open: function() {
	                this.window.center().open();
	            },

	            close: function() {
	                this.window.bind("deactivate", proxy(this.destroy, this)).close();
	            },

	            destroy: function() {
	                this.window.close().destroy();
	                this.window.element.off(CLICK + NS, "a.k-diagram-cancel", this._cancelClickHandler);
	                this.window.element.off(CLICK + NS, "a.k-diagram-update", this._updateClickHandler);
	                this._cancelClickHandler = null;
	                this._editUpdateClickHandler = null;
	                this.window = null;
	                Editor.fn.destroy.call(this);
	            }
	        });

	        function connectionSelector(container, options) {
	            var model = this.dataSource.reader.model;
	            if (model) {
	                var textField = model.fn.fields.text ? "text": model.idField;
	                $("<input name='" + options.field + "' />")
	                    .appendTo(container).kendoDropDownList({
	                        dataValueField: model.idField,
	                        dataTextField: textField,
	                        dataSource: this.dataSource.data().toJSON(),
	                        optionLabel: " ",
	                        valuePrimitive: true
	                    });
	            }
	        }

	        function InactiveItem(dataItem) {
	            this.dataItem = dataItem;
	            this.callbacks = [];
	        }

	        InactiveItem.fn = InactiveItem.prototype = {
	            onActivate: function(callback) {
	                var deffered = $.Deferred();
	                this.callbacks.push({
	                    callback: callback,
	                    deferred: deffered
	                });
	                return deffered;
	            },

	            activate: function() {
	                var callbacks = this.callbacks;
	                var item;
	                for (var idx = 0; idx < callbacks.length; idx++) {
	                    item = this.callbacks[idx];
	                    item.callback(this.dataItem);
	                    item.deferred.resolve();
	                }
	                this.callbacks = [];
	            }
	        };

	        function InactiveItemsCollection() {
	            this.items = {};
	        }

	        InactiveItemsCollection.fn = InactiveItemsCollection.prototype = {
	            add: function(items) {
	                for(var idx = 0; idx < items.length; idx++) {
	                    this.items[items[idx].uid] = new InactiveItem(items[idx]);
	                }
	            },

	            forEach: function(callback){
	                for (var uid in this.items) {
	                    callback(this.items[uid]);
	                }
	            },

	            getByUid: function(uid) {
	                return this.items[uid];
	            },

	            remove: function(item) {
	                delete this.items[item.uid];
	            }
	        };

	        var QuadRoot = Class.extend({
	            init: function() {
	                this.shapes = [];
	            },

	            _add: function(shape, bounds) {
	                this.shapes.push({
	                    bounds: bounds,
	                    shape: shape
	                });
	                shape._quadNode = this;
	            },

	            insert: function(shape, bounds) {
	                this._add(shape, bounds);
	            },

	            remove: function(shape) {
	                var shapes = this.shapes;
	                var length = shapes.length;

	                for (var idx = 0; idx < length; idx++) {
	                    if (shapes[idx].shape === shape) {
	                        shapes.splice(idx, 1);
	                        break;
	                    }
	                }
	            },

	            hitTestRect: function(rect, exclude) {
	                var shapes = this.shapes;
	                var length = shapes.length;

	                for (var i = 0; i < length; i++) {
	                    if (this._testRect(shapes[i].shape, rect) && !dataviz.inArray(shapes[i].shape, exclude)) {
	                        return true;
	                    }
	                }
	            },

	            _testRect: function(shape, rect) {
	                var angle = shape.rotate().angle;
	                var bounds = shape.bounds();
	                var hit;
	                if (!angle) {
	                    hit = bounds.overlaps(rect);
	                } else {
	                    hit = Intersect.rects(rect, bounds, -angle);
	                }
	                return hit;
	            }
	        });

	        var QuadNode = QuadRoot.extend({
	            init: function(rect) {
	                QuadRoot.fn.init.call(this);
	                this.children = [];
	                this.rect = rect;
	            },

	            inBounds: function(rect) {
	                var nodeRect = this.rect;
	                var nodeBottomRight = nodeRect.bottomRight();
	                var bottomRight = rect.bottomRight();
	                var inBounds = nodeRect.x <= rect.x && nodeRect.y <= rect.y && bottomRight.x <= nodeBottomRight.x &&
	                    bottomRight.y <= nodeBottomRight.y;
	                return inBounds;
	            },

	            overlapsBounds: function(rect) {
	                return this.rect.overlaps(rect);
	            },

	            insert: function (shape, bounds) {
	                var inserted = false;
	                var children = this.children;
	                var length = children.length;
	                if (this.inBounds(bounds)) {
	                    if (!length && this.shapes.length < 4) {
	                        this._add(shape, bounds);
	                    } else {
	                        if (!length) {
	                            this._initChildren();
	                        }

	                        for (var idx = 0; idx < children.length; idx++) {
	                            if (children[idx].insert(shape, bounds)) {
	                                inserted = true;
	                                break;
	                            }
	                        }

	                        if (!inserted) {
	                            this._add(shape, bounds);
	                        }
	                    }
	                    inserted = true;
	                }

	                return inserted;
	            },

	            _initChildren: function() {
	                var rect = this.rect,
	                    children = this.children,
	                    shapes = this.shapes,
	                    center = rect.center(),
	                    halfWidth = rect.width / 2,
	                    halfHeight = rect.height / 2,
	                    childIdx, shapeIdx;

	                children.push(
	                    new QuadNode(new Rect(rect.x, rect.y, halfWidth, halfHeight)),
	                    new QuadNode(new Rect(center.x, rect.y, halfWidth, halfHeight)),
	                    new QuadNode(new Rect(rect.x, center.y, halfWidth, halfHeight)),
	                    new QuadNode(new Rect(center.x, center.y, halfWidth, halfHeight))
	                );
	                for (shapeIdx = shapes.length - 1; shapeIdx >= 0; shapeIdx--) {
	                    for (childIdx = 0; childIdx < children.length; childIdx++) {
	                        if (children[childIdx].insert(shapes[shapeIdx].shape, shapes[shapeIdx].bounds)) {
	                            shapes.splice(shapeIdx, 1);
	                            break;
	                        }
	                    }
	                }
	            },

	            hitTestRect: function(rect, exclude) {
	                var idx;
	                var children = this.children;
	                var length = children.length;
	                var hit = false;

	                if (this.overlapsBounds(rect)) {
	                    if (QuadRoot.fn.hitTestRect.call(this, rect, exclude)) {
	                        hit = true;
	                    } else {
	                         for (idx = 0; idx < length; idx++) {
	                            if (children[idx].hitTestRect(rect, exclude)) {
	                               hit = true;
	                               break;
	                            }
	                        }
	                    }
	                }

	                return hit;
	            }
	        });

	        var ShapesQuadTree = Class.extend({
	            ROOT_SIZE: 1000,

	            init: function(diagram) {
	                var boundsChangeHandler = proxy(this._boundsChange, this);
	                diagram.bind(ITEMBOUNDSCHANGE, boundsChangeHandler);
	                diagram.bind(ITEMROTATE, boundsChangeHandler);
	                this.initRoots();
	            },

	            initRoots: function() {
	                this.rootMap = {};
	                this.root = new QuadRoot();
	            },

	            clear: function() {
	                this.initRoots();
	            },

	            _boundsChange: function(e) {
	                if (e.item._quadNode) {
	                    e.item._quadNode.remove(e.item);
	                }
	                this.insert(e.item);
	            },

	            insert: function(shape) {
	                var bounds = shape.bounds(ROTATED);
	                var rootSize = this.ROOT_SIZE;
	                var sectors = this.getSectors(bounds);
	                var x = sectors[0][0];
	                var y = sectors[1][0];

	                if (this.inRoot(sectors)) {
	                    this.root.insert(shape, bounds);
	                } else {
	                    if (!this.rootMap[x]) {
	                        this.rootMap[x] = {};
	                    }

	                    if (!this.rootMap[x][y]) {
	                        this.rootMap[x][y] = new QuadNode(
	                            new Rect(x * rootSize, y * rootSize, rootSize, rootSize)
	                        );
	                    }

	                    this.rootMap[x][y].insert(shape, bounds);
	                }
	            },

	            remove: function(shape) {
	                if (shape._quadNode) {
	                    shape._quadNode.remove(shape);
	                }
	            },

	            inRoot: function(sectors) {
	                return sectors[0].length > 1 || sectors[1].length > 1;
	            },

	            getSectors: function(rect) {
	                var rootSize = this.ROOT_SIZE;
	                var bottomRight = rect.bottomRight();
	                var bottomX = math.floor(bottomRight.x / rootSize);
	                var bottomY = math.floor(bottomRight.y / rootSize);
	                var sectors = [[],[]];
	                for (var x = math.floor(rect.x / rootSize); x <= bottomX; x++) {
	                    sectors[0].push(x);
	                }
	                for (var y = math.floor(rect.y / rootSize); y <= bottomY; y++) {
	                    sectors[1].push(y);
	                }
	                return sectors;
	            },

	            hitTestRect: function(rect, exclude) {
	                var sectors = this.getSectors(rect);
	                var xIdx, yIdx, x, y;
	                var root;

	                if (this.root.hitTestRect(rect, exclude)) {
	                    return true;
	                }

	                for (xIdx = 0; xIdx < sectors[0].length; xIdx++) {
	                    x = sectors[0][xIdx];
	                    for (yIdx = 0; yIdx < sectors[1].length; yIdx++) {
	                        y = sectors[1][yIdx];
	                        root = (this.rootMap[x] || {})[y];
	                        if (root && root.hitTestRect(rect, exclude)) {
	                            return true;
	                        }
	                    }
	                }

	                return false;
	            }
	        });

	        function cloneDataItem(dataItem) {
	            var result = dataItem;
	            if (dataItem instanceof kendo.data.Model) {
	                result = dataItem.toJSON();
	                result[dataItem.idField] = dataItem._defaultId;
	            }
	            return result;
	        }

	        function splitDiagramElements(elements) {
	            var connections = [];
	            var shapes = [];
	            var element, idx;
	            for (idx = 0; idx < elements.length; idx++) {
	                element = elements[idx];
	                if (element instanceof Shape) {
	                    shapes.push(element);
	                } else {
	                    connections.push(element);
	                }
	            }
	            return {
	                shapes: shapes,
	                connections: connections
	            };
	        }

	        function createModel(dataSource, model) {
	            if (dataSource.reader.model) {
	                return new dataSource.reader.model(model);
	            }

	            return new kendo.data.ObservableObject(model);
	        }

	        function clearField(field, model) {
	            if (defined(model[field])) {
	                model.set(field, null);
	            }
	        }

	        function copyDefaultOptions(mainOptions, elementOptions, fields) {
	            var field;
	            for (var idx = 0; idx < fields.length; idx++) {
	                field = fields[idx];
	                if (elementOptions && !defined(elementOptions[field])) {
	                    elementOptions[field] = mainOptions[field];
	                }
	            }
	        }

	        function translateToOrigin(visual) {
	            var bbox = visual.drawingContainer().clippedBBox(null);
	            if (bbox.origin.x !== 0 || bbox.origin.y !== 0) {
	                visual.position(-bbox.origin.x, -bbox.origin.y);
	            }
	        }

	        function preventDefault(e) {
	            e.preventDefault();
	        }

	        dataviz.ui.plugin(Diagram);

	        deepExtend(diagram, {
	            Shape: Shape,
	            Connection: Connection,
	            Connector: Connector,
	            DiagramToolBar: DiagramToolBar,
	            QuadNode: QuadNode,
	            QuadRoot: QuadRoot,
	            ShapesQuadTree: ShapesQuadTree,
	            PopupEditor: PopupEditor
	        });
	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 902:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.dropdownlist");

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.draganddrop");

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.toolbar");

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.editable");

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.window");

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

	module.exports = require("./svg");

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

	module.exports = require("./services");

/***/ }),

/***/ 909:
/***/ (function(module, exports) {

	module.exports = require("./layout");

/***/ })

/******/ });