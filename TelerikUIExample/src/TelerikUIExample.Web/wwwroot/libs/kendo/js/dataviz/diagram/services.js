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

	module.exports = __webpack_require__(914);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 893:
/***/ (function(module, exports) {

	module.exports = require("../../kendo.drawing");

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

	module.exports = require("./svg");

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(893), __webpack_require__(907) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	    (function ($, undefined) {
	        // Imports ================================================================
	        var kendo = window.kendo,
	            dataviz = kendo.dataviz,
	            diagram = dataviz.diagram,
	            Class = kendo.Class,
	            Group = diagram.Group,
	            Rect = diagram.Rect,
	            Rectangle = diagram.Rectangle,
	            Utils = diagram.Utils,
	            isUndefined = Utils.isUndefined,
	            Point = diagram.Point,
	            Circle = diagram.Circle,
	            Ticker = diagram.Ticker,
	            deepExtend = kendo.deepExtend,
	            Movable = kendo.ui.Movable,
	            util = kendo.drawing.util,
	            defined = util.defined,
	            inArray = $.inArray,
	            proxy = $.proxy;

	        // Constants ==============================================================
	        var Cursors = {
	                arrow: "default",
	                grip: "pointer",
	                cross: "pointer",
	                add: "pointer",
	                move: "move",
	                select: "pointer",
	                south: "s-resize",
	                east: "e-resize",
	                west: "w-resize",
	                north: "n-resize",
	                rowresize: "row-resize",
	                colresize: "col-resize"
	            },
	            HIT_TEST_DISTANCE = 10,
	            AUTO = "Auto",
	            TOP = "Top",
	            RIGHT = "Right",
	            LEFT = "Left",
	            BOTTOM = "Bottom",
	            DEFAULT_SNAP_SIZE = 10,
	            DEFAULT_SNAP_ANGLE = 10,
	            DRAG_START = "dragStart",
	            DRAG = "drag",
	            DRAG_END = "dragEnd",
	            ITEMROTATE = "itemRotate",
	            ITEMBOUNDSCHANGE = "itemBoundsChange",
	            MIN_SNAP_SIZE = 5,
	            MIN_SNAP_ANGLE = 5,
	            MOUSE_ENTER = "mouseEnter",
	            MOUSE_LEAVE = "mouseLeave",
	            ZOOM_START = "zoomStart",
	            ZOOM_END = "zoomEnd",
	            SCROLL_MIN = -20000,
	            SCROLL_MAX = 20000,
	            FRICTION = 0.90,
	            FRICTION_MOBILE = 0.93,
	            VELOCITY_MULTIPLIER = 5,
	            TRANSPARENT = "transparent",
	            PAN = "pan",
	            ROTATED = "rotated",
	            SOURCE = "source",
	            TARGET = "target",
	            HANDLE_NAMES = {
	                "-1": SOURCE,
	                "1": TARGET
	            };

	        diagram.Cursors = Cursors;

	        var PositionAdapter = kendo.Class.extend({
	            init: function (layoutState) {
	                this.layoutState = layoutState;
	                this.diagram = layoutState.diagram;
	            },
	            initState: function () {
	                this.froms = [];
	                this.tos = [];
	                this.subjects = [];
	                function pusher(id, bounds) {
	                    var shape = this.diagram.getShapeById(id);
	                    if (shape) {
	                        this.subjects.push(shape);
	                        this.froms.push(shape.bounds().topLeft());
	                        this.tos.push(bounds.topLeft());
	                    }
	                }

	                this.layoutState.nodeMap.forEach(pusher, this);
	            },
	            update: function (tick) {
	                if (this.subjects.length <= 0) {
	                    return;
	                }
	                for (var i = 0; i < this.subjects.length; i++) {
	                    //todo: define a Lerp function instead
	                    this.subjects[i].position(
	                        new Point(this.froms[i].x + (this.tos[i].x - this.froms[i].x) * tick, this.froms[i].y + (this.tos[i].y - this.froms[i].y) * tick)
	                    );
	                }
	            }
	        });

	        var LayoutUndoUnit = Class.extend({
	            init: function (initialState, finalState, animate) {
	                if (isUndefined(animate)) {
	                    this.animate = false;
	                }
	                else {
	                    this.animate = animate;
	                }
	                this._initialState = initialState;
	                this._finalState = finalState;
	                this.title = "Diagram layout";
	            },
	            undo: function () {
	                this.setState(this._initialState);
	            },
	            redo: function () {
	                this.setState(this._finalState);
	            },
	            setState: function (state) {
	                var diagram = state.diagram;
	                if (this.animate) {
	                    state.linkMap.forEach(
	                        function (id, points) {
	                            var conn = diagram.getShapeById(id);
	                            conn.visible(false);
	                            if (conn) {
	                                conn.points(points);
	                            }
	                        }
	                    );
	                    var ticker = new Ticker();
	                    ticker.addAdapter(new PositionAdapter(state));
	                    ticker.onComplete(function () {
	                        state.linkMap.forEach(
	                            function (id) {
	                                var conn = diagram.getShapeById(id);
	                                conn.visible(true);
	                            }
	                        );
	                    });
	                    ticker.play();
	                }
	                else {
	                    state.nodeMap.forEach(function (id, bounds) {
	                        var shape = diagram.getShapeById(id);
	                        if (shape) {
	                            shape.position(bounds.topLeft());
	                        }
	                    });
	                    state.linkMap.forEach(
	                        function (id, points) {
	                            var conn = diagram.getShapeById(id);
	                            if (conn) {
	                                conn.points(points);
	                            }
	                        }
	                    );
	                }
	            }
	        });

	        var CompositeUnit = Class.extend({
	            init: function (unit) {
	                this.units = [];
	                this.title = "Composite unit";
	                if (unit !== undefined) {
	                    this.units.push(unit);
	                }
	            },
	            add: function (undoUnit) {
	                this.units.push(undoUnit);
	            },
	            undo: function () {
	                for (var i = 0; i < this.units.length; i++) {
	                    this.units[i].undo();
	                }
	            },
	            redo: function () {
	                for (var i = 0; i < this.units.length; i++) {
	                    this.units[i].redo();
	                }
	            }
	        });

	        var ConnectionEditUnit = Class.extend({
	            init: function (item, redoSource, redoTarget) {
	                this.item = item;
	                this._redoSource = redoSource;
	                this._redoTarget = redoTarget;
	                if (defined(redoSource)) {
	                    this._undoSource = item.source();
	                }

	                if (defined(redoTarget)) {
	                    this._undoTarget = item.target();
	                }
	                this.title = "Connection Editing";
	            },
	            undo: function () {
	                if (this._undoSource !== undefined) {
	                    this.item._updateConnector(this._undoSource, "source");
	                }

	                if (this._undoTarget !== undefined) {
	                    this.item._updateConnector(this._undoTarget, "target");
	                }

	                this.item.updateModel();
	            },
	            redo: function () {
	                if (this._redoSource !== undefined) {
	                    this.item._updateConnector(this._redoSource, "source");
	                }

	                if (this._redoTarget !== undefined) {
	                    this.item._updateConnector(this._redoTarget, "target");
	                }

	                this.item.updateModel();
	            }
	        });

	        var ConnectionEditUndoUnit = Class.extend({
	            init: function (item, undoSource, undoTarget) {
	                this.item = item;
	                this._undoSource = undoSource;
	                this._undoTarget = undoTarget;
	                this._redoSource = item.source();
	                this._redoTarget = item.target();
	                this.title = "Connection Editing";
	            },
	            undo: function () {
	                this.item._updateConnector(this._undoSource, "source");
	                this.item._updateConnector(this._undoTarget, "target");
	                this.item.updateModel();
	            },
	            redo: function () {
	                this.item._updateConnector(this._redoSource, "source");
	                this.item._updateConnector(this._redoTarget, "target");
	                this.item.updateModel();
	            }
	        });

	        var DeleteConnectionUnit = Class.extend({
	            init: function (connection) {
	                this.connection = connection;
	                this.diagram = connection.diagram;
	                this.targetConnector = connection.targetConnector;
	                this.title = "Delete connection";
	            },
	            undo: function () {
	                this.diagram._addConnection(this.connection, false);
	            },
	            redo: function () {
	                this.diagram.remove(this.connection, false);
	            }
	        });

	        var DeleteShapeUnit = Class.extend({
	            init: function (shape) {
	                this.shape = shape;
	                this.diagram = shape.diagram;
	                this.title = "Deletion";
	            },
	            undo: function () {
	                this.diagram._addShape(this.shape, false);
	                this.shape.select(false);
	            },
	            redo: function () {
	                this.shape.select(false);
	                this.diagram.remove(this.shape, false);
	            }
	        });
	        /**
	         * Holds the undoredo state when performing a rotation, translation or scaling. The adorner is optional.
	         * @type {*}
	         */
	        var TransformUnit = Class.extend({
	            init: function (shapes, undoStates, adorner) {
	                this.shapes = shapes;
	                this.undoStates = undoStates;
	                this.title = "Transformation";
	                this.redoStates = [];
	                this.adorner = adorner;
	                for (var i = 0; i < this.shapes.length; i++) {
	                    var shape = this.shapes[i];
	                    this.redoStates.push(shape.bounds());
	                }
	            },
	            undo: function () {
	                for (var i = 0; i < this.shapes.length; i++) {
	                    var shape = this.shapes[i];
	                    shape.bounds(this.undoStates[i]);
	                    if (shape.hasOwnProperty("layout")) {
	                        shape.layout(shape, this.redoStates[i], this.undoStates[i]);
	                    }
	                    shape.updateModel();
	                }
	                if (this.adorner) {
	                    this.adorner.refreshBounds();
	                    this.adorner.refresh();
	                }
	            },
	            redo: function () {
	                for (var i = 0; i < this.shapes.length; i++) {
	                    var shape = this.shapes[i];
	                    shape.bounds(this.redoStates[i]);
	                    // the 'layout' property, if implemented, lets the shape itself work out what to do with the new bounds
	                    if (shape.hasOwnProperty("layout")) {
	                        shape.layout(shape, this.undoStates[i], this.redoStates[i]);
	                    }
	                    shape.updateModel();
	                }

	                if (this.adorner) {
	                    this.adorner.refreshBounds();
	                    this.adorner.refresh();
	                }
	            }
	        });

	        var AddConnectionUnit = Class.extend({
	            init: function (connection, diagram) {
	                this.connection = connection;
	                this.diagram = diagram;
	                this.title = "New connection";
	            },

	            undo: function () {
	                this.diagram.remove(this.connection, false);
	            },

	            redo: function () {
	                this.diagram._addConnection(this.connection, false);
	            }
	        });

	        var AddShapeUnit = Class.extend({
	            init: function (shape, diagram) {
	                this.shape = shape;
	                this.diagram = diagram;
	                this.title = "New shape";
	            },

	            undo: function () {
	                this.diagram.deselect();
	                this.diagram.remove(this.shape, false);
	            },

	            redo: function () {
	                this.diagram._addShape(this.shape, false);
	            }
	        });

	        var PanUndoUnit = Class.extend({
	            init: function (initialPosition, finalPosition, diagram) {
	                this.initial = initialPosition;
	                this.finalPos = finalPosition;
	                this.diagram = diagram;
	                this.title = "Pan Unit";
	            },
	            undo: function () {
	                this.diagram.pan(this.initial);
	            },
	            redo: function () {
	                this.diagram.pan(this.finalPos);
	            }
	        });

	        var RotateUnit = Class.extend({
	            init: function (adorner, shapes, undoRotates) {
	                this.shapes = shapes;
	                this.undoRotates = undoRotates;
	                this.title = "Rotation";
	                this.redoRotates = [];
	                this.redoAngle = adorner._angle;
	                this.adorner = adorner;
	                this.center = adorner._innerBounds.center();
	                for (var i = 0; i < this.shapes.length; i++) {
	                    var shape = this.shapes[i];
	                    this.redoRotates.push(shape.rotate().angle);
	                }
	            },
	            undo: function () {
	                var i, shape;
	                for (i = 0; i < this.shapes.length; i++) {
	                    shape = this.shapes[i];
	                    shape.rotate(this.undoRotates[i], this.center, false);
	                    if (shape.hasOwnProperty("layout")) {
	                        shape.layout(shape);
	                    }
	                    shape.updateModel();
	                }
	                if (this.adorner) {
	                    this.adorner._initialize();
	                    this.adorner.refresh();
	                }
	            },
	            redo: function () {
	                var i, shape;
	                for (i = 0; i < this.shapes.length; i++) {
	                    shape = this.shapes[i];
	                    shape.rotate(this.redoRotates[i], this.center, false);
	                    if (shape.hasOwnProperty("layout")) {
	                        shape.layout(shape);
	                    }
	                    shape.updateModel();
	                }
	                if (this.adorner) {
	                    this.adorner._initialize();
	                    this.adorner.refresh();
	                }
	            }
	        });

	        var ToFrontUnit = Class.extend({
	            init: function (diagram, items, initialIndices) {
	                this.diagram = diagram;
	                this.indices = initialIndices;
	                this.items = items;
	                this.title = "Rotate Unit";
	            },
	            undo: function () {
	                this.diagram._toIndex(this.items, this.indices);
	            },
	            redo: function () {
	                this.diagram.toFront(this.items, false);
	            }
	        });

	        var ToBackUnit = Class.extend({
	            init: function (diagram, items, initialIndices) {
	                this.diagram = diagram;
	                this.indices = initialIndices;
	                this.items = items;
	                this.title = "Rotate Unit";
	            },
	            undo: function () {
	                this.diagram._toIndex(this.items, this.indices);
	            },
	            redo: function () {
	                this.diagram.toBack(this.items, false);
	            }
	        });

	        /**
	         * Undo-redo service.
	         */
	        var UndoRedoService = kendo.Observable.extend({
	            init: function (options) {
	                kendo.Observable.fn.init.call(this, options);
	                this.bind(this.events, options);
	                this.stack = [];
	                this.index = 0;
	                this.capacity = 100;
	            },

	            events: ["undone", "redone"],

	            /**
	             * Starts the collection of units. Add those with
	             * the addCompositeItem method and call commit. Or cancel to forget about it.
	             */
	            begin: function () {
	                this.composite = new CompositeUnit();
	            },

	            /**
	             * Cancels the collection process of unit started with 'begin'.
	             */
	            cancel: function () {
	                this.composite = undefined;
	            },

	            /**
	             * Commits a batch of units.
	             */
	            commit: function (execute) {
	                if (this.composite.units.length > 0) {
	                    this._restart(this.composite, execute);
	                }
	                this.composite = undefined;
	            },

	            /**
	             * Adds a unit as part of the begin-commit batch.
	             * @param undoUnit
	             */
	            addCompositeItem: function (undoUnit) {
	                if (this.composite) {
	                    this.composite.add(undoUnit);
	                } else {
	                    this.add(undoUnit);
	                }
	            },

	            /**
	             * Standard addition of a unit. See also the batch version; begin-addCompositeUnit-commit methods.
	             * @param undoUnit The unit to be added.
	             * @param execute If false, the unit will be added but not executed.
	             */
	            add: function (undoUnit, execute) {
	                this._restart(undoUnit, execute);
	            },

	            /**
	             * Returns the number of undoable unit in the stack.
	             * @returns {Number}
	             */

	            pop: function() {
	                if (this.index > 0) {
	                    this.stack.pop();
	                    this.index--;
	                }
	            },

	            count: function () {
	                return this.stack.length;
	            },

	            /**
	             * Rollback of the unit on top of the stack.
	             */
	            undo: function () {
	                if (this.index > 0) {
	                    this.index--;
	                    this.stack[this.index].undo();
	                    this.trigger("undone");
	                }
	            },

	            /**
	             * Redo of the last undone action.
	             */
	            redo: function () {
	                if (this.stack.length > 0 && this.index < this.stack.length) {
	                    this.stack[this.index].redo();
	                    this.index++;
	                    this.trigger("redone");
	                }
	            },

	            _restart: function (composite, execute) {
	                // throw away anything beyond this point if this is a new branch
	                this.stack.splice(this.index, this.stack.length - this.index);
	                this.stack.push(composite);
	                if (execute !== false) {
	                    this.redo();
	                } else {
	                    this.index++;
	                }
	                // check the capacity
	                if (this.stack.length > this.capacity) {
	                    this.stack.splice(0, this.stack.length - this.capacity);
	                    this.index = this.capacity; //points to the end of the stack
	                }
	            },

	            /**
	             * Clears the stack.
	             */
	            clear: function () {
	                this.stack = [];
	                this.index = 0;
	            }
	        });

	// Tools =========================================

	        var EmptyTool = Class.extend({
	            init: function (toolService) {
	                this.toolService = toolService;
	            },
	            start: function () {
	            },
	            move: function () {
	            },
	            end: function () {
	            },
	            tryActivate: function () {
	                return false;
	            },
	            getCursor: function () {
	                return Cursors.arrow;
	            }
	        });

	        var ScrollerTool = EmptyTool.extend({
	            init: function (toolService) {
	                var tool = this;
	                var friction = kendo.support.mobileOS ? FRICTION_MOBILE : FRICTION;
	                EmptyTool.fn.init.call(tool, toolService);

	                var diagram = tool.toolService.diagram,
	                    canvas = diagram.canvas;

	                var scroller = diagram.scroller = tool.scroller = $(diagram.scrollable).kendoMobileScroller({
	                    friction: friction,
	                    velocityMultiplier: VELOCITY_MULTIPLIER,
	                    mousewheelScrolling: false,
	                    zoom: false,
	                    scroll: proxy(tool._move, tool)
	                }).data("kendoMobileScroller");

	                if (canvas.translate) {
	                    tool.movableCanvas = new Movable(canvas.element);
	                }

	                var virtualScroll = function (dimension, min, max) {
	                    dimension.makeVirtual();
	                    dimension.virtualSize(min || SCROLL_MIN, max || SCROLL_MAX);
	                };

	                virtualScroll(scroller.dimensions.x);
	                virtualScroll(scroller.dimensions.y);
	                scroller.disable();
	            },

	            tryActivate: function (p, meta) {
	                var toolService = this.toolService;
	                var options = toolService.diagram.options.pannable;
	                var enabled = meta.ctrlKey;

	                if (defined(options.key)) {
	                    if (!options.key || options.key == "none") {
	                        enabled = noMeta(meta) && !defined(toolService.hoveredItem);
	                    } else {
	                        enabled = meta[options.key + "Key"];
	                    }
	                }

	                return  options !== false && enabled && !defined(toolService.hoveredAdorner) && !defined(toolService._hoveredConnector);
	            },

	            start: function () {
	                this.scroller.enable();
	            },
	            move: function () {
	            },//the tool itself should not handle the scrolling. Let kendo scroller take care of this part. Check _move
	            _move: function (args) {
	                var tool = this,
	                    diagram = tool.toolService.diagram,
	                    canvas = diagram.canvas,
	                    scrollPos = new Point(args.scrollLeft, args.scrollTop);

	                if (canvas.translate) {
	                    diagram._storePan(scrollPos.times(-1));
	                    tool.movableCanvas.moveTo(scrollPos);
	                    canvas.translate(scrollPos.x, scrollPos.y);
	                } else {
	                    scrollPos = scrollPos.plus(diagram._pan.times(-1));
	                }

	                diagram.trigger(PAN, {pan: scrollPos});
	            },
	            end: function () {
	                this.scroller.disable();
	            },
	            getCursor: function () {
	                return Cursors.move;
	            }
	        });

	        /**
	         * The tool handling the transformations via the adorner.
	         * @type {*}
	         */
	        var PointerTool = Class.extend({
	            init: function (toolService) {
	                this.toolService = toolService;
	            },
	            tryActivate: function () {
	                return true; // the pointer tool is last and handles all others requests.
	            },
	            start: function (p, meta) {
	                var toolService = this.toolService,
	                    diagram = toolService.diagram,
	                    hoveredItem = toolService.hoveredItem;

	                if (hoveredItem) {
	                    toolService.selectSingle(hoveredItem, meta);
	                    if (hoveredItem.adorner) { //connection
	                        this.adorner = hoveredItem.adorner;
	                        this.handle = this.adorner._hitTest(p);
	                    }
	                }

	                if (!this.handle) {
	                    this.handle = diagram._resizingAdorner._hitTest(p);
	                    if (this.handle) {
	                        this.adorner = diagram._resizingAdorner;
	                    }
	                }

	                if (this.adorner) {
	                    if (!this.adorner.isDragHandle(this.handle) || !diagram.trigger(DRAG_START, { shapes: this.adorner.shapes, connections: [] })) {
	                        this.adorner.start(p);
	                    } else {
	                        toolService.startPoint = p;
	                        toolService.end(p);
	                    }
	                }
	            },

	            move: function (p) {
	                if (this.adorner) {
	                    this.adorner.move(this.handle, p);
	                    if (this.adorner.isDragHandle(this.handle)) {
	                        this.toolService.diagram.trigger(DRAG, { shapes: this.adorner.shapes, connections: [] });
	                    }
	                }
	            },

	            end: function () {
	                var diagram = this.toolService.diagram,
	                    adorner = this.adorner,
	                    unit;

	                if (adorner) {
	                    if (!adorner.isDragHandle(this.handle) || !diagram.trigger(DRAG_END, { shapes: adorner.shapes, connections: [] })) {
	                        unit = adorner.stop();
	                        if (unit) {
	                            diagram.undoRedoService.add(unit, false);
	                        }
	                    } else {
	                        adorner.cancel();
	                    }
	                }

	                this.adorner = undefined;
	                this.handle = undefined;
	            },
	            getCursor: function (p) {
	                return this.toolService.hoveredItem ? this.toolService.hoveredItem._getCursor(p) : Cursors.arrow;
	            }
	        });

	        var SelectionTool = Class.extend({
	            init: function (toolService) {
	                this.toolService = toolService;
	            },
	            tryActivate: function (p, meta) {
	                var toolService = this.toolService;
	                var selectable = toolService.diagram.options.selectable;
	                var enabled = selectable && selectable.multiple !== false;

	                if (enabled) {
	                    if (selectable.key && selectable.key != "none") {
	                        enabled = meta[selectable.key + "Key"];
	                    } else {
	                        enabled = noMeta(meta);
	                    }
	                }

	                return enabled && !defined(toolService.hoveredItem) && !defined(toolService.hoveredAdorner);
	            },
	            start: function (p) {
	                var diagram = this.toolService.diagram;
	                diagram.deselect();
	                diagram.selector.start(p);
	            },
	            move: function (p) {
	                var diagram = this.toolService.diagram;
	                diagram.selector.move(p);
	            },
	            end: function (p, meta) {
	                var diagram = this.toolService.diagram, hoveredItem = this.toolService.hoveredItem;
	                var rect = diagram.selector.bounds();
	                if ((!hoveredItem || !hoveredItem.isSelected) && !meta.ctrlKey) {
	                    diagram.deselect();
	                }
	                if (!rect.isEmpty()) {
	                    diagram.selectArea(rect);
	                }
	                diagram.selector.end();
	            },
	            getCursor: function () {
	                return Cursors.arrow;
	            }
	        });

	        var ConnectionTool = Class.extend({
	            init: function (toolService) {
	                this.toolService = toolService;
	                this.type = "ConnectionTool";
	            },
	            tryActivate: function() {
	                return this.toolService._hoveredConnector;
	            },
	            start: function (p, meta) {
	                var toolService = this.toolService,
	                    diagram = toolService.diagram,
	                    connector = toolService._hoveredConnector,
	                    connection = diagram._createConnection({}, connector._c, p);

	                if (canDrag(connection) && !diagram.trigger(DRAG_START, { shapes: [], connections: [connection], connectionHandle: TARGET }) && diagram._addConnection(connection)) {
	                    toolService._connectionManipulation(connection, connector._c.shape, true);
	                    toolService._removeHover();
	                    toolService.selectSingle(toolService.activeConnection, meta);
	                    if (meta.type == "touchmove") {
	                        diagram._cachedTouchTarget = connector.visual;
	                    }
	                } else {
	                    connection.source(null);
	                    toolService.end(p);
	                }
	            },

	            move: function (p) {
	                var toolService = this.toolService;
	                var connection = toolService.activeConnection;

	                connection.target(p);
	                toolService.diagram.trigger(DRAG, { shapes: [], connections: [connection], connectionHandle: TARGET  });
	                return true;
	            },

	            end: function (p) {
	                var toolService = this.toolService,
	                    d = toolService.diagram,
	                    connection = toolService.activeConnection,
	                    hoveredItem = toolService.hoveredItem,
	                    connector = toolService._hoveredConnector,
	                    target,
	                    cachedTouchTarget = d._cachedTouchTarget;

	                if (!connection) {
	                    return;
	                }

	                if (connector && connector._c != connection.sourceConnector) {
	                    target = connector._c;
	                } else if (hoveredItem && hoveredItem instanceof diagram.Shape) {
	                    target = hoveredItem.getConnector(AUTO) || hoveredItem.getConnector(p);
	                } else {
	                    target = p;
	                }

	                connection.target(target);

	                if (!d.trigger(DRAG_END, { shapes: [], connections: [connection], connectionHandle: TARGET })) {
	                    connection.updateModel();
	                    d._syncConnectionChanges();
	                } else {
	                    d.remove(connection, false);
	                    d.undoRedoService.pop();
	                }
	                toolService._connectionManipulation();

	                if(cachedTouchTarget) {
	                    d._connectorsAdorner.visual.remove(cachedTouchTarget);
	                    d._cachedTouchTarget = null;
	                }
	            },

	            getCursor: function () {
	                return Cursors.arrow;
	            }
	        });

	        var ConnectionEditTool = Class.extend({
	            init: function (toolService) {
	                this.toolService = toolService;
	                this.type = "ConnectionTool";
	            },

	            tryActivate: function (p, meta) {
	                var toolService = this.toolService,
	                    diagram = toolService.diagram,
	                    selectable =  diagram.options.selectable,
	                    item = toolService.hoveredItem,
	                    isActive = selectable !== false &&
	                               item && item.path && !(item.isSelected && meta.ctrlKey);

	                if (isActive) {
	                    this._c = item;
	                }

	                return isActive;
	            },

	            start: function (p, meta) {
	                var toolService = this.toolService;
	                var connection = this._c;

	                toolService.selectSingle(connection, meta);

	                var adorner = connection.adorner;

	                var handle, name;
	                if (adorner) {
	                    handle = adorner._hitTest(p);
	                    name = HANDLE_NAMES[handle];
	                }

	                if (canDrag(connection) && adorner && !toolService.diagram.trigger(DRAG_START, { shapes: [], connections: [connection], connectionHandle: name })) {
	                    this.handle = handle;
	                    this.handleName = name;
	                    adorner.start(p);
	                } else {
	                    toolService.startPoint = p;
	                    toolService.end(p);
	                }
	            },

	            move: function (p) {
	                var adorner = this._c.adorner;
	                if (canDrag(this._c) && adorner) {
	                    adorner.move(this.handle, p);
	                    this.toolService.diagram.trigger(DRAG, { shapes: [], connections: [this._c], connectionHandle: this.handleName });

	                    return true;
	                }
	            },

	            end: function (p) {
	                var connection = this._c;
	                var adorner = connection.adorner;
	                var toolService = this.toolService;
	                var diagram = toolService.diagram;

	                if (adorner) {
	                    if (canDrag(connection)) {
	                        var unit = adorner.stop(p);
	                        if (!diagram.trigger(DRAG_END, { shapes: [], connections: [connection], connectionHandle: this.handleName })) {
	                            diagram.undoRedoService.add(unit, false);
	                            connection.updateModel();
	                            diagram._syncConnectionChanges();
	                        } else {
	                            unit.undo();
	                        }
	                    }
	                }
	            },

	            getCursor: function () {
	                return Cursors.move;
	            }
	        });

	        function testKey(key, str) {
	            return str.charCodeAt(0) == key || str.toUpperCase().charCodeAt(0) == key;
	        }

	        /**
	         * The service managing the tools.
	         * @type {*}
	         */
	        var ToolService = Class.extend({
	            init: function (diagram) {
	                this.diagram = diagram;
	                this.tools = [
	                    new ScrollerTool(this),
	                    new ConnectionEditTool(this),
	                    new ConnectionTool(this),
	                    new SelectionTool(this),
	                    new PointerTool(this)
	                ]; // the order matters.

	                this.activeTool = undefined;
	            },

	            start: function (p, meta) {
	                meta = deepExtend({}, meta);
	                if (this.activeTool) {
	                    this.activeTool.end(p, meta);
	                }
	                this._updateHoveredItem(p);
	                this._activateTool(p, meta);
	                this.activeTool.start(p, meta);
	                this._updateCursor(p);
	                this.diagram.focus();
	                this.diagram.canvas.surface.suspendTracking();
	                this.startPoint = p;
	                return true;
	            },

	            move: function (p, meta) {
	                meta = deepExtend({}, meta);
	                var updateHovered = true;
	                if (this.activeTool) {
	                    updateHovered = this.activeTool.move(p, meta);
	                }
	                if (updateHovered) {
	                    this._updateHoveredItem(p);
	                }
	                this._updateCursor(p);
	                return true;
	            },

	            end: function (p, meta) {
	                meta = deepExtend({}, meta);
	                if (this.activeTool) {
	                    this.activeTool.end(p, meta);
	                }
	                this.diagram.canvas.surface.resumeTracking();
	                this.activeTool = undefined;
	                this._updateCursor(p);
	                return true;
	            },

	            keyDown: function (key, meta) {
	                var diagram = this.diagram;
	                meta = deepExtend({ ctrlKey: false, metaKey: false, altKey: false }, meta);
	                if ((meta.ctrlKey || meta.metaKey) && !meta.altKey) {// ctrl or option
	                    if (testKey(key, "a")) {// A: select all
	                        diagram.selectAll();
	                        diagram._destroyToolBar();
	                        return true;
	                    } else if (testKey(key, "z")) {// Z: undo
	                        diagram.undo();
	                        diagram._destroyToolBar();
	                        return true;
	                    } else if (testKey(key, "y")) {// y: redo
	                        diagram.redo();
	                        diagram._destroyToolBar();
	                        return true;
	                    } else if (testKey(key, "c")) {
	                        diagram.copy();
	                        diagram._destroyToolBar();
	                    } else if (testKey(key, "x")) {
	                        diagram.cut();
	                        diagram._destroyToolBar();
	                    } else if (testKey(key, "v")) {
	                        diagram.paste();
	                        diagram._destroyToolBar();
	                    } else if (testKey(key, "l")) {
	                        diagram.layout();
	                        diagram._destroyToolBar();
	                    } else if (testKey(key, "d")) {
	                        diagram._destroyToolBar();
	                        diagram.copy();
	                        diagram.paste();
	                    }
	                } else if (key === 46 || key === 8) {// del: deletion
	                    var toRemove = this.diagram._triggerRemove(diagram.select());
	                    if (toRemove.length) {
	                        this.diagram.remove(toRemove, true);
	                        this.diagram._syncChanges();
	                        this.diagram._destroyToolBar();
	                    }

	                    return true;
	                } else if (key === 27) {// ESC: stop any action
	                    this._discardNewConnection();
	                    diagram.deselect();
	                    diagram._destroyToolBar();
	                    return true;
	                }

	            },
	            wheel: function (p, meta) {
	                var diagram = this.diagram,
	                    delta = meta.delta,
	                    z = diagram.zoom(),
	                    options = diagram.options,
	                    zoomRate = options.zoomRate,
	                    zoomOptions = { point: p, meta: meta, zoom: z };

	                if (diagram.trigger(ZOOM_START, zoomOptions)) {
	                    return;
	                }

	                if (delta < 0) {
	                    z += zoomRate;
	                } else {
	                    z -= zoomRate;
	                }

	                z = kendo.dataviz.round(Math.max(options.zoomMin, Math.min(options.zoomMax, z)), 2);
	                zoomOptions.zoom = z;

	                diagram.zoom(z, zoomOptions);
	                diagram.trigger(ZOOM_END, zoomOptions);

	                return true;
	            },
	            setTool: function (tool, index) {
	                tool.toolService = this;
	                this.tools[index] = tool;
	            },

	            selectSingle: function(item, meta) {
	                var diagram = this.diagram;
	                var selectable = diagram.options.selectable;
	                if (selectable && !item.isSelected && item.options.selectable !== false) {
	                    var addToSelection = meta.ctrlKey && selectable.multiple !== false;
	                    diagram.select(item, { addToSelection: addToSelection });
	                }
	            },

	            _discardNewConnection: function () {
	                if (this.newConnection) {
	                    this.diagram.remove(this.newConnection);
	                    this.newConnection = undefined;
	                }
	            },
	            _activateTool: function (p, meta) {
	                for (var i = 0; i < this.tools.length; i++) {
	                    var tool = this.tools[i];
	                    if (tool.tryActivate(p, meta)) {
	                        this.activeTool = tool;
	                        break; // activating the first available tool in the loop.
	                    }
	                }
	            },
	            _updateCursor: function (p) {
	                var element = this.diagram.element;
	                var cursor = this.activeTool ? this.activeTool.getCursor(p) : (this.hoveredAdorner ? this.hoveredAdorner._getCursor(p) : (this.hoveredItem ? this.hoveredItem._getCursor(p) : Cursors.arrow));

	                element.css({cursor: cursor});
	            },
	            _connectionManipulation: function (connection, disabledShape, isNew) {
	                this.activeConnection = connection;
	                this.disabledShape = disabledShape;
	                if (isNew) {
	                    this.newConnection = this.activeConnection;
	                } else {
	                    this.newConnection = undefined;
	                }
	            },
	            _updateHoveredItem: function (p) {
	                var hit = this._hitTest(p);
	                var diagram = this.diagram;

	                if (hit != this.hoveredItem && (!this.disabledShape || hit != this.disabledShape)) {
	                    if (this.hoveredItem) {
	                        diagram.trigger(MOUSE_LEAVE, { item: this.hoveredItem });
	                        this.hoveredItem._hover(false);
	                    }

	                    if (hit && hit.options.enable) {
	                        diagram.trigger(MOUSE_ENTER, { item: hit });

	                        this.hoveredItem = hit; // Shape, connection or connector
	                        this.hoveredItem._hover(true);
	                    } else {
	                        this.hoveredItem = undefined;
	                    }
	                }
	            },
	            _removeHover: function () {
	                if (this.hoveredItem) {
	                    this.hoveredItem._hover(false);
	                    this.hoveredItem = undefined;
	                }
	            },
	            _hitTest: function (point) {
	                var hit, d = this.diagram, item, i;

	                // connectors
	                if (this._hoveredConnector) {
	                    this._hoveredConnector._hover(false);
	                    this._hoveredConnector = undefined;
	                }
	                if (d._connectorsAdorner._visible) {
	                    hit = d._connectorsAdorner._hitTest(point);
	                    if (hit) {
	                        return hit;
	                    }
	                }

	                hit = this.diagram._resizingAdorner._hitTest(point);
	                if (hit) {
	                    this.hoveredAdorner = d._resizingAdorner;
	                    if (hit.x !== 0 || hit.y !== 0) { // hit testing for resizers or rotator, otherwise if (0,0) than pass through.
	                        return;
	                    }
	                    hit = undefined;
	                } else {
	                    this.hoveredAdorner = undefined;
	                }

	                if (!this.activeTool || this.activeTool.type !== "ConnectionTool") {
	                    var selectedConnections = []; // only the connections should have higher presence because the connection edit point is on top of connector.
	                    // TODO: This should be reworked. The connection adorner should be one for all selected connections and should be hit tested prior the connections and shapes itself.
	                    for (i = 0; i < d._selectedItems.length; i++) {
	                        item = d._selectedItems[i];
	                        if (item instanceof diagram.Connection) {
	                            selectedConnections.push(item);
	                        }
	                    }
	                    hit = this._hitTestItems(selectedConnections, point);
	                }

	                return hit || this._hitTestElements(point);
	            },

	            _hitTestElements: function(point) {
	                var diagram = this.diagram;
	                var shapeHit = this._hitTestItems(diagram.shapes, point);
	                var connectionHit = this._hitTestItems(diagram.connections, point);
	                var hit;

	                if ((!this.activeTool || this.activeTool.type != "ConnectionTool") && shapeHit && connectionHit && !hitTestShapeConnectors(shapeHit, point)) {
	                    var mainLayer = diagram.mainLayer;
	                    var shapeIdx = inArray(shapeHit.visual, mainLayer.children);
	                    var connectionIdx = inArray(connectionHit.visual, mainLayer.children);
	                    hit = shapeIdx > connectionIdx ? shapeHit : connectionHit;
	                }
	                return hit || shapeHit || connectionHit;
	            },

	            _hitTestItems: function (array, point) {
	                var i, item, hit;
	                for (i = array.length - 1; i >= 0; i--) {
	                    item = array[i];
	                    hit = item._hitTest(point);
	                    if (hit) {
	                        return hit;
	                    }
	                }
	            }
	        });

	// Routing =========================================

	        /**
	         * Base class for connection routers.
	         */
	        var ConnectionRouterBase = kendo.Class.extend({
	            init: function () {
	            }
	            /*route: function (connection) {
	             },
	             hitTest: function (p) {

	             },
	             getBounds: function () {

	             }*/
	        });

	        /**
	         * Base class for polyline and cascading routing.
	         */
	        var LinearConnectionRouter = ConnectionRouterBase.extend({
	            init: function (connection) {
	                var that = this;
	                ConnectionRouterBase.fn.init.call(that);
	                this.connection = connection;
	            },
	            /**
	             * Hit testing for polyline paths.
	             */
	            hitTest: function (p) {
	                var rec = this.getBounds().inflate(HIT_TEST_DISTANCE);
	                if (!rec.contains(p)) {
	                    return false;
	                }
	                return diagram.Geometry.distanceToPolyline(p, this.connection.allPoints()) < HIT_TEST_DISTANCE;
	            },

	            /**
	             * Bounds of a polyline.
	             * @returns {kendo.dataviz.diagram.Rect}
	             */
	            getBounds: function () {
	                var points = this.connection.allPoints(),
	                    s = points[0],
	                    e = points[points.length - 1],
	                    right = Math.max(s.x, e.x),
	                    left = Math.min(s.x, e.x),
	                    top = Math.min(s.y, e.y),
	                    bottom = Math.max(s.y, e.y);

	                for (var i = 1; i < points.length - 1; ++i) {
	                    right = Math.max(right, points[i].x);
	                    left = Math.min(left, points[i].x);
	                    top = Math.min(top, points[i].y);
	                    bottom = Math.max(bottom, points[i].y);
	                }

	                return new Rect(left, top, right - left, bottom - top);
	            }
	        });

	        /**
	         * A simple poly-linear routing which does not alter the intermediate points.
	         * Does hold the underlying hit, bounds....logic.
	         * @type {*|Object|void|extend|Zepto.extend|b.extend}
	         */
	        var PolylineRouter = LinearConnectionRouter.extend({
	            init: function (connection) {
	                var that = this;
	                LinearConnectionRouter.fn.init.call(that);
	                this.connection = connection;
	            },
	            route: function () {
	                // just keep the points as is
	            }
	        });

	        var CascadingRouter = LinearConnectionRouter.extend({
	            SAME_SIDE_DISTANCE_RATIO: 5,

	            init: function (connection) {
	                var that = this;
	                LinearConnectionRouter.fn.init.call(that);
	                this.connection = connection;
	            },

	            routePoints: function(start, end, sourceConnector, targetConnector) {
	                var result;

	                if (sourceConnector && targetConnector) {
	                    result = this._connectorPoints(start, end, sourceConnector, targetConnector);
	                } else {
	                    result = this._floatingPoints(start, end, sourceConnector);
	                }
	                return result;
	            },

	            route: function () {
	                var sourceConnector = this.connection._resolvedSourceConnector;
	                var targetConnector = this.connection._resolvedTargetConnector;
	                var start = this.connection.sourcePoint();
	                var end = this.connection.targetPoint();
	                var points = this.routePoints(start, end, sourceConnector, targetConnector);
	                this.connection.points(points);
	            },

	            _connectorSides: [{
	                name: "Top",
	                axis: "y",
	                boundsPoint: "topLeft",
	                secondarySign: 1
	            }, {
	                name: "Left",
	                axis: "x",
	                boundsPoint: "topLeft",
	                secondarySign: 1
	            }, {
	                name: "Bottom",
	                axis: "y",
	                boundsPoint: "bottomRight",
	                secondarySign: -1
	            }, {
	                name: "Right",
	                axis: "x",
	                boundsPoint: "bottomRight",
	                secondarySign: -1
	            }],

	            _connectorSide: function(connector, targetPoint) {
	                var position = connector.position();
	                var shapeBounds = connector.shape.bounds(ROTATED);
	                var bounds = {
	                    topLeft: shapeBounds.topLeft(),
	                    bottomRight: shapeBounds.bottomRight()
	                };
	                var sides = this._connectorSides;
	                var min = util.MAX_NUM;
	                var sideDistance;
	                var minSide;
	                var axis;
	                var side;
	                for (var idx = 0; idx < sides.length; idx++) {
	                    side = sides[idx];
	                    axis = side.axis;
	                    sideDistance = Math.round(Math.abs(position[axis] - bounds[side.boundsPoint][axis]));
	                    if (sideDistance < min) {
	                        min = sideDistance;
	                        minSide = side;
	                    } else if (sideDistance === min &&
	                        (position[axis] - targetPoint[axis]) * side.secondarySign > (position[minSide.axis] - targetPoint[minSide.axis]) * minSide.secondarySign) {
	                        minSide = side;
	                    }
	                }
	                return minSide.name;
	            },

	            _sameSideDistance: function(connector) {
	                var bounds = connector.shape.bounds(ROTATED);
	                return Math.min(bounds.width, bounds.height) / this.SAME_SIDE_DISTANCE_RATIO;
	            },

	            _connectorPoints: function(start, end, sourceConnector, targetConnector) {
	                var sourceConnectorSide = this._connectorSide(sourceConnector, end);
	                var targetConnectorSide = this._connectorSide(targetConnector, start);
	                var deltaX = end.x - start.x;
	                var deltaY = end.y - start.y;
	                var sameSideDistance = this._sameSideDistance(sourceConnector);
	                var result = [];
	                var pointX, pointY;

	                if (sourceConnectorSide === TOP || sourceConnectorSide == BOTTOM) {
	                    if (targetConnectorSide == TOP || targetConnectorSide == BOTTOM) {
	                        if (sourceConnectorSide == targetConnectorSide) {
	                            if (sourceConnectorSide == TOP) {
	                                pointY = Math.min(start.y, end.y) - sameSideDistance;
	                            } else {
	                                pointY = Math.max(start.y, end.y) + sameSideDistance;
	                            }
	                            result = [new Point(start.x, pointY), new Point(end.x, pointY)];
	                        } else {
	                            result = [new Point(start.x, start.y + deltaY / 2), new Point(end.x, start.y + deltaY / 2)];
	                        }
	                    } else {
	                        result = [new Point(start.x, end.y)];
	                    }
	                } else {
	                    if (targetConnectorSide == LEFT || targetConnectorSide == RIGHT) {
	                        if (sourceConnectorSide == targetConnectorSide) {
	                            if (sourceConnectorSide == LEFT) {
	                                pointX = Math.min(start.x, end.x) - sameSideDistance;
	                            } else {
	                                pointX = Math.max(start.x, end.x) + sameSideDistance;
	                            }
	                            result = [new Point(pointX, start.y), new Point(pointX, end.y)];
	                        } else {
	                            result = [new Point(start.x + deltaX / 2, start.y), new Point(start.x + deltaX / 2, start.y + deltaY)];
	                        }
	                    } else {
	                        result = [new Point(end.x, start.y)];
	                    }
	                }
	                return result;
	            },

	            _floatingPoints: function(start, end, sourceConnector) {
	                var sourceConnectorSide = sourceConnector ? this._connectorSide(sourceConnector, end) : null;
	                var cascadeStartHorizontal = this._startHorizontal(start, end, sourceConnectorSide);
	                var points = [start, start, end, end];
	                var deltaX = end.x - start.x;
	                var deltaY = end.y - start.y;
	                var length = points.length;
	                var shiftX;
	                var shiftY;

	                // note that this is more generic than needed for only two intermediate points.
	                for (var idx = 1; idx < length - 1; ++idx) {
	                    if (cascadeStartHorizontal) {
	                        if (idx % 2 !== 0) {
	                            shiftX = deltaX / (length / 2);
	                            shiftY = 0;
	                        }
	                        else {
	                            shiftX = 0;
	                            shiftY = deltaY / ((length - 1) / 2);
	                        }
	                    }
	                    else {
	                        if (idx % 2 !== 0) {
	                            shiftX = 0;
	                            shiftY = deltaY / (length / 2);
	                        }
	                        else {
	                            shiftX = deltaX / ((length - 1) / 2);
	                            shiftY = 0;
	                        }
	                    }
	                    points[idx] = new Point(points[idx - 1].x + shiftX, points[idx - 1].y + shiftY);
	                }
	                // need to fix the wrong 1.5 factor of the last intermediate point
	                idx--;
	                if ((cascadeStartHorizontal && (idx % 2 !== 0)) || (!cascadeStartHorizontal && (idx % 2 === 0))) {
	                    points[length - 2] = new Point(points[length - 1].x, points[length - 2].y);
	                } else {
	                    points[length - 2] = new Point(points[length - 2].x, points[length - 1].y);
	                }

	                return [points[1], points[2]];
	            },

	            _startHorizontal: function (start, end, sourceSide) {
	                var horizontal;
	                if (sourceSide !== null && (sourceSide === RIGHT || sourceSide === LEFT)) {
	                    horizontal = true;
	                } else {
	                    horizontal = Math.abs(start.x - end.x) > Math.abs(start.y - end.y);
	                }

	                return horizontal;
	            }
	        });

	// Adorners =========================================

	        var AdornerBase = Class.extend({
	            init: function (diagram, options) {
	                var that = this;
	                that.diagram = diagram;
	                that.options = deepExtend({}, that.options, options);
	                that.visual = new Group();
	                that.diagram._adorners.push(that);
	            },
	            refresh: function () {

	            }
	        });

	        var ConnectionEditAdorner = AdornerBase.extend({
	            init: function (connection, options) {
	                var that = this, diagram;
	                that.connection = connection;
	                diagram = that.connection.diagram;
	                that._ts = diagram.toolService;
	                AdornerBase.fn.init.call(that, diagram, options);
	                var sp = that.connection.sourcePoint();
	                var tp = that.connection.targetPoint();
	                that.spVisual = new Circle(deepExtend(that.options.handles, { center: sp }));
	                that.epVisual = new Circle(deepExtend(that.options.handles, { center: tp }));
	                that.visual.append(that.spVisual);
	                that.visual.append(that.epVisual);
	            },

	            options: {
	                handles: {}
	            },

	            _getCursor: function () {
	                return Cursors.move;
	            },

	            start: function (p) {
	                this.handle = this._hitTest(p);
	                this.startPoint = p;
	                this._initialSource = this.connection.source();
	                this._initialTarget = this.connection.target();
	                switch (this.handle) {
	                    case -1:
	                        if (this.connection.targetConnector) {
	                            this._ts._connectionManipulation(this.connection, this.connection.targetConnector.shape);
	                        }
	                        break;
	                    case 1:
	                        if (this.connection.sourceConnector) {
	                            this._ts._connectionManipulation(this.connection, this.connection.sourceConnector.shape);
	                        }
	                        break;
	                }
	            },

	            move: function (handle, p) {
	                switch (handle) {
	                    case -1:
	                        this.connection.source(p);
	                        break;
	                    case 1:
	                        this.connection.target(p);
	                        break;
	                    default:
	                        var delta = p.minus(this.startPoint);
	                        this.startPoint = p;
	                        if (!this.connection.sourceConnector) {
	                            this.connection.source(this.connection.sourcePoint().plus(delta));
	                        }
	                        if (!this.connection.targetConnector) {
	                            this.connection.target(this.connection.targetPoint().plus(delta));
	                        }
	                        break;
	                }
	                this.refresh();
	                return true;
	            },

	            stop: function (p) {
	                var ts = this.diagram.toolService, item = ts.hoveredItem, target;
	                if (ts._hoveredConnector) {
	                    target = ts._hoveredConnector._c;
	                } else if (item && item instanceof diagram.Shape) {
	                    target = item.getConnector(AUTO) || item.getConnector(p);
	                } else {
	                    target = p;
	                }

	                if (this.handle === -1) {
	                    this.connection.source(target);
	                } else if (this.handle === 1) {
	                    this.connection.target(target);
	                }

	                this.handle = undefined;
	                this._ts._connectionManipulation();
	                return new ConnectionEditUndoUnit(this.connection, this._initialSource, this._initialTarget);
	            },

	            _hitTest: function (point) {
	                var sourcePoint = this.connection.sourcePoint();
	                var targetPoint = this.connection.targetPoint();
	                var radiusX = this.options.handles.width / 2 + HIT_TEST_DISTANCE;
	                var radiusY = this.options.handles.height / 2 + HIT_TEST_DISTANCE;
	                var sourcePointDistance = sourcePoint.distanceTo(point);
	                var targetPointDistance = targetPoint.distanceTo(point);
	                var sourceHandle = new Rect(sourcePoint.x, sourcePoint.y).inflate(radiusX, radiusY).contains(point);
	                var targetHandle = new Rect(targetPoint.x, targetPoint.y).inflate(radiusX, radiusY).contains(point);
	                var handle = 0;

	                if (sourceHandle && (!targetHandle || sourcePointDistance < targetPointDistance)) {
	                    handle = -1;
	                } else if (targetHandle && (!sourceHandle || targetPointDistance < sourcePointDistance)) {
	                    handle = 1;
	                }

	                return handle;
	            },

	            refresh: function () {
	                this.spVisual.redraw({ center: this.diagram.modelToLayer(this.connection.sourcePoint()) });
	                this.epVisual.redraw({ center: this.diagram.modelToLayer(this.connection.targetPoint()) });
	            }
	        });

	        var ConnectorsAdorner = AdornerBase.extend({
	            init: function (diagram, options) {
	                var that = this;
	                AdornerBase.fn.init.call(that, diagram, options);
	                that._refreshHandler = function (e) {
	                    if (e.item == that.shape) {
	                        that.refresh();
	                    }
	                };
	            },

	            show: function (shape) {
	                var that = this, len, i, ctr;
	                that._visible = true;
	                that.shape = shape;
	                that.diagram.bind(ITEMBOUNDSCHANGE, that._refreshHandler);
	                len = shape.connectors.length;
	                that.connectors = [];
	                that._clearVisual();
	                for (i = 0; i < len; i++) {
	                    ctr = new ConnectorVisual(shape.connectors[i]);
	                    that.connectors.push(ctr);
	                    that.visual.append(ctr.visual);
	                }
	                that.visual.visible(true);
	                that.refresh();
	            },

	            _clearVisual: function() {
	                var that = this;
	                if(that.diagram._cachedTouchTarget) {
	                    that._keepCachedTouchTarget();
	                } else {
	                    that.visual.clear();
	                }
	            },

	            _keepCachedTouchTarget: function () {
	                var that = this,
	                    visualChildren = that.visual.children;
	                var childrenCount = visualChildren.length;
	                var index = inArray(that.diagram._cachedTouchTarget, visualChildren);
	                for (var i = childrenCount - 1; i >= 0; i--) {
	                    if(i == index) {
	                        continue;
	                    }
	                    that.visual.remove(visualChildren[i]);
	                }
	            },

	            destroy: function () {
	                var that = this;
	                that.diagram.unbind(ITEMBOUNDSCHANGE, that._refreshHandler);
	                that.shape = undefined;
	                that._visible = undefined;
	                that.visual.visible(false);
	            },

	            _hitTest: function (p) {
	                var ctr, i;
	                for (i = 0; i < this.connectors.length; i++) {
	                    ctr = this.connectors[i];
	                    if (ctr._hitTest(p)) {
	                        ctr._hover(true);
	                        this.diagram.toolService._hoveredConnector = ctr;
	                        break;
	                    }
	                }
	            },

	            refresh: function () {
	                if (this.shape) {
	                    var bounds = this.shape.bounds();
	                        bounds = this.diagram.modelToLayer(bounds);
	                    this.visual.position(bounds.topLeft());
	                    $.each(this.connectors, function () {
	                        this.refresh();
	                    });
	                }
	            }
	        });

	        function hitToOppositeSide(hit, bounds) {
	            var result;

	            if (hit.x == -1 && hit.y == -1) {
	                result = bounds.bottomRight();
	            } else if (hit.x == 1 && hit.y == 1) {
	                result = bounds.topLeft();
	            } else if (hit.x == -1 && hit.y == 1) {
	                result = bounds.topRight();
	            } else if (hit.x == 1 && hit.y == -1) {
	                result = bounds.bottomLeft();
	            } else if (hit.x === 0 && hit.y == -1) {
	                result = bounds.bottom();
	            } else if (hit.x === 0 && hit.y == 1) {
	                result = bounds.top();
	            } else if (hit.x == 1 && hit.y === 0) {
	                result = bounds.left();
	            } else if (hit.x == -1 && hit.y === 0) {
	                result = bounds.right();
	            }

	            return result;
	        }

	        var ResizingAdorner = AdornerBase.extend({
	            init: function (diagram, options) {
	                var that = this;
	                AdornerBase.fn.init.call(that, diagram, options);
	                that._manipulating = false;
	                that.map = [];
	                that.shapes = [];

	                that._initSelection();
	                that._createHandles();
	                that.redraw();
	                that.diagram.bind("select", function (e) {
	                    that._initialize(e.selected);
	                });

	                that._refreshHandler = function () {
	                    if (!that._internalChange) {
	                        that.refreshBounds();
	                        that.refresh();
	                    }
	                };

	                that._rotatedHandler = function () {
	                    if (that.shapes.length == 1) {
	                        that._angle = that.shapes[0].rotate().angle;
	                    }
	                    that._refreshHandler();
	                };

	                that.diagram.bind(ITEMBOUNDSCHANGE, that._refreshHandler).bind(ITEMROTATE, that._rotatedHandler);
	                that.refreshBounds();
	                that.refresh();
	            },

	            options: {
	                handles: {
	                    fill: {
	                        color: "#fff"
	                    },
	                    stroke: {
	                        color: "#282828"
	                    },
	                    height: 7,
	                    width: 7,
	                    hover: {
	                        fill: {
	                            color: "#282828"
	                        },
	                        stroke: {
	                            color: "#282828"
	                        }
	                    }
	                },
	                selectable: {
	                    stroke: {
	                        color: "#778899",
	                        width: 1,
	                        dashType: "dash"
	                    },
	                    fill: {
	                        color: TRANSPARENT
	                    }
	                },
	                offset: 10
	            },

	            _initSelection: function() {
	                var that = this;
	                var diagram = that.diagram;
	                var selectable = diagram.options.selectable;
	                var options = deepExtend({}, that.options.selectable, selectable);
	                that.rect = new Rectangle(options);
	                that.visual.append(that.rect);
	            },

	            _resizable: function() {
	                return this.options.editable && this.options.editable.resize !== false;
	            },

	            _handleOptions: function() {
	                return (this.options.editable.resize || {}).handles || this.options.handles;
	            },

	            _createHandles: function() {
	                var handles, item, y, x;

	                if (this._resizable()) {
	                    handles = this._handleOptions();
	                    for (x = -1; x <= 1; x++) {
	                        for (y = -1; y <= 1; y++) {
	                            if ((x !== 0) || (y !== 0)) { // (0, 0) element, (-1, -1) top-left, (+1, +1) bottom-right
	                                item = new Rectangle(handles);
	                                item.drawingElement._hover = proxy(this._hover, this);
	                                this.map.push({ x: x, y: y, visual: item });
	                                this.visual.append(item);
	                            }
	                        }
	                    }
	                }
	            },

	            bounds: function (value) {
	                if (value) {
	                    this._innerBounds = value.clone();
	                    this._bounds = this.diagram.modelToLayer(value).inflate(this.options.offset, this.options.offset);
	                } else {
	                    return this._bounds;
	                }
	            },

	            _hitTest: function (p) {
	                var tp = this.diagram.modelToLayer(p),
	                    i, hit, handleBounds, handlesCount = this.map.length, handle;

	                if (this._angle) {
	                    tp = tp.clone().rotate(this._bounds.center(), this._angle);
	                }

	                if (this._resizable()) {
	                    for (i = 0; i < handlesCount; i++) {
	                        handle = this.map[i];
	                        hit = new Point(handle.x, handle.y);
	                        handleBounds = this._getHandleBounds(hit); //local coordinates
	                        handleBounds.offset(this._bounds.x, this._bounds.y);
	                        if (handleBounds.contains(tp)) {
	                            return hit;
	                        }
	                    }
	                }

	                if (this._bounds.contains(tp)) {
	                    return new Point(0, 0);
	                }
	            },

	            _getHandleBounds: function (p) {
	                if (this._resizable()) {
	                    var handles = this._handleOptions(),
	                        w = handles.width,
	                        h = handles.height,
	                        r = new Rect(0, 0, w, h);

	                    if (p.x < 0) {
	                        r.x = - w / 2;
	                    } else if (p.x === 0) {
	                        r.x = Math.floor(this._bounds.width / 2) - w / 2;
	                    } else if (p.x > 0) {
	                        r.x = this._bounds.width + 1.0 - w / 2;
	                    } if (p.y < 0) {
	                        r.y = - h / 2;
	                    } else if (p.y === 0) {
	                        r.y = Math.floor(this._bounds.height / 2) - h / 2;
	                    } else if (p.y > 0) {
	                        r.y = this._bounds.height + 1.0 - h / 2;
	                    }

	                    return r;
	                }
	            },

	            _getCursor: function (point) {
	                var hit = this._hitTest(point);
	                if (hit && (hit.x >= -1) && (hit.x <= 1) && (hit.y >= -1) && (hit.y <= 1) && this._resizable()) {
	                    var angle = this._angle;
	                    if (angle) {
	                        angle = 360 - angle;
	                        hit.rotate(new Point(0, 0), angle);
	                        hit = new Point(Math.round(hit.x), Math.round(hit.y));
	                    }

	                    if (hit.x == -1 && hit.y == -1) {
	                        return "nw-resize";
	                    }
	                    if (hit.x == 1 && hit.y == 1) {
	                        return "se-resize";
	                    }
	                    if (hit.x == -1 && hit.y == 1) {
	                        return "sw-resize";
	                    }
	                    if (hit.x == 1 && hit.y == -1) {
	                        return "ne-resize";
	                    }
	                    if (hit.x === 0 && hit.y == -1) {
	                        return "n-resize";
	                    }
	                    if (hit.x === 0 && hit.y == 1) {
	                        return "s-resize";
	                    }
	                    if (hit.x == 1 && hit.y === 0) {
	                        return "e-resize";
	                    }
	                    if (hit.x == -1 && hit.y === 0) {
	                        return "w-resize";
	                    }
	                }
	                return this._manipulating ? Cursors.move : Cursors.select;
	            },

	            _initialize: function() {
	                var that = this, i, item,
	                    items = that.diagram.select();

	                that.shapes = [];
	                for (i = 0; i < items.length; i++) {
	                    item = items[i];
	                    if (item instanceof diagram.Shape) {
	                        that.shapes.push(item);
	                        item._rotationOffset = new Point();
	                    }
	                }

	                that._angle = that.shapes.length == 1 ? that.shapes[0].rotate().angle : 0;
	                that._startAngle = that._angle;
	                that._rotates();
	                that._positions();
	                that.refreshBounds();
	                that.refresh();
	                that.redraw();
	            },

	            _rotates: function () {
	                var that = this, i, shape;
	                that.initialRotates = [];
	                for (i = 0; i < that.shapes.length; i++) {
	                    shape = that.shapes[i];
	                    that.initialRotates.push(shape.rotate().angle);
	                }
	            },

	            _positions: function () {
	                var that = this, i, shape;
	                that.initialStates = [];
	                for (i = 0; i < that.shapes.length; i++) {
	                    shape = that.shapes[i];
	                    that.initialStates.push(shape.bounds());
	                }
	            },

	            _hover: function(value, element) {
	                if (this._resizable()) {
	                    var handleOptions = this._handleOptions(),
	                        hover = handleOptions.hover,
	                        stroke = handleOptions.stroke,
	                        fill = handleOptions.fill;

	                    if (value && Utils.isDefined(hover.stroke)) {
	                        stroke = deepExtend({}, stroke, hover.stroke);
	                    }

	                    if (value && Utils.isDefined(hover.fill)) {
	                        fill = hover.fill;
	                    }
	                    element.stroke(stroke.color, stroke.width, stroke.opacity);
	                    element.fill(fill.color, fill.opacity);
	                }
	            },

	            start: function (p) {
	                this._sp = p;
	                this._cp = p;
	                this._lp = p;
	                this._manipulating = true;
	                this._internalChange = true;
	                this.shapeStates = [];
	                for (var i = 0; i < this.shapes.length; i++) {
	                    var shape = this.shapes[i];
	                    this.shapeStates.push(shape.bounds());
	                }
	            },

	            redraw: function () {
	                var i, handle,
	                    visibleHandles = this._resizable();

	                for (i = 0; i < this.map.length; i++) {
	                    handle = this.map[i];
	                    handle.visual.visible(visibleHandles);
	                }
	            },

	            angle: function(value) {
	                if (defined(value)) {
	                    this._angle = value;
	                }

	                return this._angle;
	            },

	            rotate: function() {
	                var center = this._innerBounds.center();
	                var currentAngle = this.angle();
	                this._internalChange = true;
	                for (var i = 0; i < this.shapes.length; i++) {
	                    var shape = this.shapes[i];
	                    currentAngle = (currentAngle + this.initialRotates[i] - this._startAngle) % 360;
	                    shape.rotate(currentAngle, center);
	                }
	                this.refresh();
	            },

	            move: function (handle, p) {
	                var delta, dragging,
	                    dtl = new Point(),
	                    dbr = new Point(),
	                    bounds, center, shape,
	                    i, angle, newBounds,
	                    changed = 0, staticPoint,
	                    scaleX, scaleY;

	                if (handle.y === -2 && handle.x === -1) {
	                    center = this._innerBounds.center();
	                    this._angle = this._truncateAngle(Utils.findAngle(center, p));
	                    for (i = 0; i < this.shapes.length; i++) {
	                        shape = this.shapes[i];
	                        angle = (this._angle + this.initialRotates[i] - this._startAngle) % 360;
	                        shape.rotate(angle, center);
	                        if (shape.hasOwnProperty("layout")) {
	                            shape.layout(shape);
	                        }
	                        this._rotating = true;
	                    }
	                    this.refresh();
	                } else {
	                    if (this.shouldSnap()) {
	                        var thr = this._truncateDistance(p.minus(this._lp));
	                        // threshold
	                        if (thr.x === 0 && thr.y === 0) {
	                            this._cp = p;
	                            return;
	                        }
	                        delta = thr;
	                        this._lp = new Point(this._lp.x + thr.x, this._lp.y + thr.y);
	                    } else {
	                        delta = p.minus(this._cp);
	                    }

	                    if (this.isDragHandle(handle)) {
	                        dbr = dtl = delta; // dragging
	                        dragging = true;
	                    } else {
	                        if (this._angle) { // adjust the delta so that resizers resize in the correct direction after rotation.
	                            delta.rotate(new Point(0, 0), this._angle);
	                        }
	                        if (handle.x == -1) {
	                            dtl.x = delta.x;
	                        } else if (handle.x == 1) {
	                            dbr.x = delta.x;
	                        }
	                        if (handle.y == -1) {
	                            dtl.y = delta.y;
	                        } else if (handle.y == 1) {
	                            dbr.y = delta.y;
	                        }
	                    }

	                    if (!dragging) {
	                        staticPoint = hitToOppositeSide(handle, this._innerBounds);
	                        scaleX = (this._innerBounds.width + delta.x * handle.x) / this._innerBounds.width;
	                        scaleY = (this._innerBounds.height + delta.y * handle.y) / this._innerBounds.height;
	                    }

	                    for (i = 0; i < this.shapes.length; i++) {
	                        shape = this.shapes[i];
	                        bounds = shape.bounds();
	                        if (dragging) {
	                            if (!canDrag(shape)) {
	                                continue;
	                            }
	                            newBounds = this._displaceBounds(bounds, dtl, dbr, dragging);
	                        } else {
	                            newBounds = bounds.clone();
	                            newBounds.scale(scaleX, scaleY, staticPoint, this._innerBounds.center(), shape.rotate().angle);
	                            var newCenter = newBounds.center(); // fixes the new rotation center.
	                            newCenter.rotate(bounds.center(), -this._angle);
	                            newBounds = new Rect(newCenter.x - newBounds.width / 2, newCenter.y - newBounds.height / 2, newBounds.width, newBounds.height);
	                        }
	                        if (newBounds.width >= shape.options.minWidth && newBounds.height >= shape.options.minHeight) { // if we up-size very small shape
	                            var oldBounds = bounds;
	                            shape.bounds(newBounds);
	                            if (shape.hasOwnProperty("layout")) {
	                                shape.layout(shape, oldBounds, newBounds);
	                            }
	                            if (oldBounds.width !== newBounds.width || oldBounds.height !== newBounds.height) {
	                                shape.rotate(shape.rotate().angle); // forces the rotation to update it's rotation center
	                            }
	                            changed += 1;
	                        }
	                    }

	                    if (changed) {
	                        if (changed == i) {
	                            newBounds = this._displaceBounds(this._innerBounds, dtl, dbr, dragging);
	                            this.bounds(newBounds);
	                        } else {
	                            this.refreshBounds();
	                        }
	                        this.refresh();
	                    }

	                    this._positions();
	                }

	                this._cp = p;
	            },

	            isDragHandle: function(handle) {
	                return handle.x === 0 && handle.y === 0;
	            },

	            cancel: function() {
	                var shapes = this.shapes;
	                var states = this.shapeStates;
	                for (var idx = 0; idx < shapes.length; idx++) {
	                    shapes[idx].bounds(states[idx]);
	                }
	                this.refreshBounds();
	                this.refresh();
	                this._manipulating = undefined;
	                this._internalChange = undefined;
	                this._rotating = undefined;
	            },

	            _truncatePositionToGuides: function (bounds) {
	                if (this.diagram.ruler) {
	                    return this.diagram.ruler.truncatePositionToGuides(bounds);
	                }
	                return bounds;
	            },

	            _truncateSizeToGuides: function (bounds) {
	                if (this.diagram.ruler) {
	                    return this.diagram.ruler.truncateSizeToGuides(bounds);
	                }
	                return bounds;
	            },

	            _truncateAngle: function (a) {
	                var snap = this.snapOptions();
	                var snapAngle = Math.max(snap.angle || DEFAULT_SNAP_ANGLE, MIN_SNAP_ANGLE);
	                return snap ? Math.floor((a % 360) / snapAngle) * snapAngle : (a % 360);
	            },

	            _truncateDistance: function (d) {
	                if (d instanceof diagram.Point) {
	                    return new diagram.Point(this._truncateDistance(d.x), this._truncateDistance(d.y));
	                } else {
	                    var snap = this.snapOptions() || {};
	                    var snapSize = Math.max(snap.size || DEFAULT_SNAP_SIZE, MIN_SNAP_SIZE);
	                    return snap ? Math.floor(d / snapSize) * snapSize : d;
	                }
	            },

	            snapOptions: function() {
	                var editable = this.diagram.options.editable;
	                var snap = ((editable || {}).drag || {}).snap || {};
	                return snap;
	            },

	            shouldSnap: function() {
	                var editable = this.diagram.options.editable;
	                var drag = (editable || {}).drag;
	                var snap = (drag || {}).snap;
	                return editable !== false && drag !== false && snap !== false;
	            },

	            _displaceBounds: function (bounds, dtl, dbr, dragging) {
	                var tl = bounds.topLeft().plus(dtl),
	                    br = bounds.bottomRight().plus(dbr),
	                    newBounds = Rect.fromPoints(tl, br),
	                    newCenter;
	                if (!dragging) {
	                    newCenter = newBounds.center();
	                    newCenter.rotate(bounds.center(), -this._angle);
	                    newBounds = new Rect(newCenter.x - newBounds.width / 2, newCenter.y - newBounds.height / 2, newBounds.width, newBounds.height);
	                }
	                return newBounds;
	            },

	            stop: function () {
	                var unit, i, shape;
	                if (this._cp != this._sp) {
	                    if (this._rotating) {
	                        unit = new RotateUnit(this, this.shapes, this.initialRotates);
	                        this._rotating = false;
	                    } else if (this._diffStates()) {
	                        if (this.diagram.ruler) {
	                            for (i = 0; i < this.shapes.length; i++) {
	                                shape = this.shapes[i];
	                                var bounds = shape.bounds();
	                                bounds = this._truncateSizeToGuides(this._truncatePositionToGuides(bounds));
	                                shape.bounds(bounds);
	                                this.refreshBounds();
	                                this.refresh();
	                            }
	                        }
	                        for (i = 0; i < this.shapes.length; i++) {
	                            shape = this.shapes[i];
	                            shape.updateModel();
	                        }
	                        unit = new TransformUnit(this.shapes, this.shapeStates, this);
	                        this.diagram._syncShapeChanges();
	                    }
	                }

	                this._manipulating = undefined;
	                this._internalChange = undefined;
	                this._rotating = undefined;
	                return unit;
	            },

	            _diffStates: function() {
	                var shapes = this.shapes;
	                var states = this.shapeStates;
	                for (var idx = 0; idx < shapes.length; idx++) {
	                    if (!shapes[idx].bounds().equals(states[idx])) {
	                        return true;
	                    }
	                }
	                return false;
	            },

	            refreshBounds: function () {
	                var bounds = this.shapes.length == 1 ?
	                    this.shapes[0].bounds().clone() :
	                    this.diagram.boundingBox(this.shapes, true);

	                this.bounds(bounds);
	            },

	            refresh: function () {
	                var that = this, b, bounds;
	                if (this.shapes.length > 0) {
	                    bounds = this.bounds();
	                    this.visual.visible(true);
	                    this.visual.position(bounds.topLeft());
	                    $.each(this.map, function () {
	                        b = that._getHandleBounds(new Point(this.x, this.y));
	                        this.visual.position(b.topLeft());
	                    });
	                    this.visual.position(bounds.topLeft());

	                    var center = new Point(bounds.width / 2, bounds.height / 2);
	                    this.visual.rotate(this._angle, center);
	                    this.rect.redraw({ width: bounds.width, height: bounds.height });
	                    if (this.rotationThumb) {
	                        var thumb = this.options.editable.rotate.thumb;
	                        this._rotationThumbBounds = new Rect(bounds.center().x, bounds.y + thumb.y, 0, 0).inflate(thumb.width);
	                        this.rotationThumb.redraw({ x: bounds.width / 2 - thumb.width / 2 });
	                    }
	                } else {
	                    this.visual.visible(false);
	                }
	            }
	        });

	        var Selector = Class.extend({
	            init: function (diagram) {
	                var selectable = diagram.options.selectable;
	                this.options = deepExtend({}, this.options, selectable);

	                this.visual = new Rectangle(this.options);
	                this.diagram = diagram;
	            },
	            options: {
	                stroke: {
	                    color: "#778899",
	                    width: 1,
	                    dashType: "dash"
	                },
	                fill: {
	                    color: TRANSPARENT
	                }
	            },
	            start: function (p) {
	                this._sp = this._ep = p;
	                this.refresh();
	                this.diagram._adorn(this, true);
	            },
	            end: function () {
	                this._sp = this._ep = undefined;
	                this.diagram._adorn(this, false);
	            },
	            bounds: function (value) {
	                if (value) {
	                    this._bounds = value;
	                }
	                return this._bounds;
	            },
	            move: function (p) {
	                this._ep = p;
	                this.refresh();
	            },
	            refresh: function () {
	                if (this._sp) {
	                    var visualBounds = Rect.fromPoints(this.diagram.modelToLayer(this._sp), this.diagram.modelToLayer(this._ep));
	                    this.bounds(Rect.fromPoints(this._sp, this._ep));
	                    this.visual.position(visualBounds.topLeft());
	                    this.visual.redraw({ height: visualBounds.height + 1, width: visualBounds.width + 1 });
	                }
	            }
	        });

	        var ConnectorVisual = Class.extend({
	            init: function (connector) {
	                this.options = deepExtend({}, connector.options);
	                this._c = connector;
	                this.visual = new Circle(this.options);
	                this.refresh();
	            },
	            _hover: function (value) {
	                var options = this.options,
	                    hover = options.hover,
	                    stroke = options.stroke,
	                    fill = options.fill;

	                if (value && Utils.isDefined(hover.stroke)) {
	                    stroke = deepExtend({}, stroke, hover.stroke);
	                }

	                if (value && Utils.isDefined(hover.fill)) {
	                    fill = hover.fill;
	                }

	                this.visual.redraw({
	                    stroke: stroke,
	                    fill: fill
	                });
	            },
	            refresh: function () {
	                var p = this._c.shape.diagram.modelToView(this._c.position()),
	                    relative = p.minus(this._c.shape.bounds("transformed").topLeft()),
	                    value = new Rect(p.x, p.y, 0, 0);
	                value.inflate(this.options.width / 2, this.options.height / 2);
	                this._visualBounds = value;
	                this.visual.redraw({ center: new Point(relative.x, relative.y) });
	            },
	            _hitTest: function (p) {
	                var tp = this._c.shape.diagram.modelToView(p);
	                return this._visualBounds.contains(tp);
	            }
	        });

	        function canDrag(element) {
	            var editable = element.options.editable;
	            return editable && editable.drag !== false;
	        }

	        function hitTestShapeConnectors(shape, point) {
	            var connector, position, rect;
	            for (var idx = 0; idx < shape.connectors.length; idx++) {
	                connector = shape.connectors[idx];
	                position = connector.position();
	                rect = new Rect(position.x, position.y);
	                rect.inflate(HIT_TEST_DISTANCE, HIT_TEST_DISTANCE);
	                if (rect.contains(point)) {
	                    return connector;
	                }
	            }
	        }

	        function noMeta(meta) {
	            return meta.ctrlKey === false && meta.altKey === false && meta.shiftKey === false;
	        }

	        deepExtend(diagram, {
	            CompositeUnit: CompositeUnit,
	            TransformUnit: TransformUnit,
	            PanUndoUnit: PanUndoUnit,
	            AddShapeUnit: AddShapeUnit,
	            AddConnectionUnit: AddConnectionUnit,
	            DeleteShapeUnit: DeleteShapeUnit,
	            DeleteConnectionUnit: DeleteConnectionUnit,
	            ConnectionEditAdorner: ConnectionEditAdorner,
	            ConnectionTool: ConnectionTool,
	            ConnectorVisual: ConnectorVisual,
	            UndoRedoService: UndoRedoService,
	            ResizingAdorner: ResizingAdorner,
	            Selector: Selector,
	            ToolService: ToolService,
	            ConnectorsAdorner: ConnectorsAdorner,
	            LayoutUndoUnit: LayoutUndoUnit,
	            ConnectionEditUnit: ConnectionEditUnit,
	            ToFrontUnit: ToFrontUnit,
	            ToBackUnit: ToBackUnit,
	            ConnectionRouterBase: ConnectionRouterBase,
	            PolylineRouter: PolylineRouter,
	            CascadingRouter: CascadingRouter,
	            SelectionTool: SelectionTool,
	            ScrollerTool: ScrollerTool,
	            PointerTool: PointerTool,
	            ConnectionEditTool: ConnectionEditTool,
	            RotateUnit: RotateUnit
	        });
	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ })

/******/ });