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

	module.exports = __webpack_require__(1484);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1141:
/***/ (function(module, exports) {

	module.exports = require("./kendo.draganddrop");

/***/ }),

/***/ 1223:
/***/ (function(module, exports) {

	module.exports = require("./kendo.resizable");

/***/ }),

/***/ 1484:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057), __webpack_require__(1141), __webpack_require__(1223)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "tilelayout",
	    name: "TileLayout",
	    category: "web",
	    depends: [ "core" ],
	    features: [
	        {
	            id: "tilelayout-resizable",
	            name: "Resizable",
	            description: "Support for resizing",
	            depends: [ "resizable" ]
	        },
	        {
	            id: "tilelayout-reorderable",
	            name: "Reorderable",
	            description: "Support for reordering",
	            depends: [ "draganddrop" ]
	        }
	    ]
	};

	(function($) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        Draggable = ui.Draggable,
	        keys = kendo.keys,
	        selector = kendo.selectorFromClasses,
	        RESIZE = "resize",
	        REORDER = "reorder",
	        NS = ".kendoTileLayout",
	        DOWNCURSOR = "k-cursor-ns-resize",
	        RIGHTCURSOR = "k-cursor-ew-resize",
	        DIAGONALCURSOR = "k-cursor-nwse-resize",
	        RTLDIAGONALCURSOR = "k-cursor-nesw-resize",
	        GRABCURSOR = "k-cursor-grab",
	        GRABBINGCURSOR = "k-cursor-grabbing",
	        MINIMALSPAN = 1,
	        CURSORCLASSES = "k-cursor-nesw-resize k-cursor-nwse-resize k-cursor-ew-resize k-cursor-ns-resize";

	    var tileLayoutStyles = {
	        wrapper: "k-widget k-tilelayout",
	        item: "k-tilelayout-item k-card",
	        itemHeader: "k-tilelayout-item-header k-card-header",
	        itemHeaderTitle: "k-card-title",
	        itemBody: "k-tilelayout-item-body k-card-body",
	        reorderHint: "k-layout-item-hint k-layout-item-hint-reorder",
	        resizeHint: "k-layout-item-hint k-layout-item-hint-resize"
	    };

	    var TileLayout = Widget.extend( {
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            $.cssNumber.gridColumnStart = true;
	            $.cssNumber.gridColumnEnd = true;
	            $.cssNumber.gridRowStart = true;
	            $.cssNumber.gridRowEnd = true;

	            that.element = $(element).addClass(TileLayout.styles.wrapper);

	            that._setWrapperStyles();
	            that._initContainers();
	            that._resizable();
	            that._navigatable();
	            that._reorderable();
	        },

	        events: [
	            RESIZE,
	            REORDER
	        ],

	        options: {
	            name: "TileLayout",
	            columns: null,
	            gap : {
	                columns: 16,
	                rows: 16
	            },
	            containers: [],
	            resizable: false,
	            reorderable: false,
	            navigatable: false,
	            columnsWidth: "1fr",
	            rowsHeight: "1fr",
	            height: "",
	            width: ""
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            if (this._draggableInstance) {

	                this.element.find(".k-tilelayout-item").each(function() {
	                    var item = $(this);
	                    if (item.data("kendoDropTarget")) {
	                        item.data("kendoDropTarget").destroy();
	                    }
	                });

	                this._draggableInstance.destroy();
	                this._draggableInstance = null;
	            }

	            if (this.resizable) {
	                this.resizable.destroy();
	                this.resizable = null;
	            }

	            if (this.resizeHandle) {
	                this.resizeHandle.off(NS).remove();
	                this.resizeHandle = null;
	            }

	            this.element.off(NS);
	        },

	        setOptions: function(options) {
	            this.destroy();
	            kendo.deepExtend(this.options, options);
	            this.element.empty();
	            this.init(this.element, this.options);
	        },

	        getOptions: function() {
	            var result = $.extend(true, {}, this.options);
	            result.containers = kendo.deepExtend([], this.items);

	            return result;
	        },

	        _initContainers: function() {
	            var that = this;
	            var containers = that.options.containers;
	            var containerElements = that.element.children();
	            var hasElements = !!containerElements.length;
	            var id;
	            var container;
	            var header;
	            var headerSettings;
	            var body;
	            var containerSettings;
	            var headerContent;

	            that.items = [];
	            that.itemsMap = {};

	            if (hasElements) {
	                containerElements.each(function(i ,element) {
	                    id = kendo.guid();
	                    var current = $(element)
	                                    .addClass(TileLayout.styles.item)
	                                    .attr("id", id);

	                    that._addContainer(current, containers[i], i, id);
	                });
	            } else {
	                for (var i = 0; i < containers.length; i++) {
	                    id = kendo.guid();
	                    containerSettings = containers[i];
	                    container = $("<div></div>")
	                                        .addClass(TileLayout.styles.item)
	                                        .attr("id", id);

	                    headerSettings = containerSettings.header;
	                    if (headerSettings && (headerSettings.template || headerSettings.text)) {
	                        header = $("<div></div>").addClass(TileLayout.styles.itemHeader);
	                        if (that.options.reorderable) {
	                            header.addClass(GRABCURSOR);
	                        }

	                        headerContent = headerSettings.text ? "<div class='" + TileLayout.styles.itemHeaderTitle + "'>" + headerSettings.text + "</div>": null;
	                        header.append(headerContent || kendo.template(headerSettings.template)({}));
	                        header.appendTo(container);
	                    }
	                    body = $("<div></div>").addClass(TileLayout.styles.itemBody);
	                    if (!containerSettings.bodyTemplate) {
	                        throw new Error("Having a bodyTemplate for the container is mandatory");
	                    }
	                    body.append(kendo.template(containerSettings.bodyTemplate)({}));
	                    body.appendTo(container);
	                    container.appendTo(that.element);

	                    that._addContainer(container, containerSettings, i, id);
	                }
	            }
	        },

	        _addContainer: function (element, item, index, id) {
	            var that = this;
	            item.order = typeof item.order == 'number' ? item.order : index;
	            element.attr(kendo.attr("index"), item.order);
	            item.id = id;
	            that._setContainerCoordinates(element, item);
	            that.itemsMap[id] = item;
	            that.items.push(that.itemsMap[id]);
	        },

	        _setWrapperStyles: function () {
	            var that = this;
	            var options = that.options;
	            that.element.css({
	                "grid-template-columns": kendo.format("repeat({0}, minmax(0, {1}))", options.columns, typeof options.columnsWidth === "string" ? options.columnsWidth : options.columnsWidth + "px"),
	                "grid-auto-rows":  kendo.format("minmax(0, {0})", typeof options.rowsHeight === "string" ? options.rowsHeight : options.rowsHeight + "px"),
	                "column-gap": options.gap.columns,
	                "width": typeof options.width === "string" ? options.width : options.width + "px",
	                "height": typeof options.height === "string" ? options.height : options.height + "px",
	                "padding": options.gap.rows + "px " +options.gap.columns + "px ",
	                "row-gap": options.gap.rows
	            });
	        },

	        _setContainerCoordinates: function (element, settings) {
	            if (!settings) {
	                return;
	            }
	            element.css({
	                "order": settings.order,
					"grid-column-end": kendo.format("span {0}",settings.colSpan),
					"grid-row-end": kendo.format("span {0}",settings.rowSpan)
	            })
	            .attr(kendo.attr("index"), settings.order);
	        },

	        _updateContainers: function () {
	            var that = this;

	            for (var i = 0; i < that.items.length; i++) {
	                that._setContainerCoordinates(that.element.find("#" + that.items[i].id) , that.items[i]);
	            }
	        },

	        _createResizeHandle: function(container, side, down) {
	            var that = this;

	            if (that._isresizing) {
	                return;
	            }

	            if (that.resizeHandle &&  that.resizeHandle.data("div")[0] !== container[0]) {
	                that.resizeHandle.off(NS).remove();
	                that.resizeHandle = null;
	            }

	            if (!that.resizeHandle) {
	                that.resizeHandle = $(
	                    '<div class="k-resize-handle"></div>'
	                );
	                that.resizeHandle.appendTo(container);
	            }

	            that._positionResizeHandle(container, side, down);
	        },

	        _positionResizeHandle: function(container, side, down) {
	            var that = this;
	            var leftBorderWidth = parseFloat(container.css("borderRightWidth"));
	            var bottomBorderWidth = parseFloat(container.css("borderBottomWidth"));
	            var containerHeight = container.height();
	            var containerWidth = container.width();
	            var top = down ? containerHeight -6.5 -bottomBorderWidth : 0;
	            var left = side ? containerWidth -4.5 -leftBorderWidth: 0;
	            var width = 9;
	            var height = 9;
	            var cursorClass;

	            if (side && down) {
	                height = width = 25;
	                top-=12.5;
	                left-=12.5;
	                cursorClass = kendo.support.isRtl(that.element) ? RTLDIAGONALCURSOR : DIAGONALCURSOR;
	            } else if (side && !down) {
	                height = containerHeight;
	                cursorClass = RIGHTCURSOR;
	            } else if(!side && down) {
	                width = containerWidth;
	                cursorClass = DOWNCURSOR;
	            }

	            that.resizeHandle
	                .css({
	                    top: top,
	                    left: left,
	                    height: height,
	                    width: width
	                })
	                .attr("side", side)
	                .attr("down", down)
	                .removeClass(CURSORCLASSES)
	                .addClass(cursorClass)
	                .data("div", container)
	                .show();
	        },

	        _createResizeHint: function (container) {
	            var that = this;

	            if (that.hint) {
	                return;
	            }

	            var colSpan = container.css("grid-column-end");
	            var rowSpan = container.css("grid-row-end");
	            var order = container.css("order");

	            that.hint = $("<div class='" + TileLayout.styles.resizeHint + "'></div>")
	            .css({
	                "order": order,
				    "grid-column-end": colSpan,
	                "grid-row-end": rowSpan
	            })
	            .insertAfter(container);
	        },

	        _removeResizeHint: function () {
	            if (this._isresizing) {
	                return;
	            }

	            if (this.hint) {
	                this.hint.remove();
	                this.hint = null;
	            }
	        },

	        _positionHint: function (colSpan, rowSpan) {
	            var that = this;

	            if (colSpan) {
	                that.hint.css("grid-column-end", kendo.format("span {0}", colSpan));
	            }

	            if (rowSpan) {
	                that.hint.css("grid-row-end", kendo.format("span {0}", rowSpan));
	            }
	        },

	        _removeAbsoluteStyles: function (container) {
	            container.css("position", "");
	            container.css("left", "");
	            container.css("top", "");
	            container.css("width", "");
	            container.css("height", "");
	            container.css("z-index", "");
	        },

	        _positionAbsolutely: function (container) {
	            if (container.css("position") ==  "absolute") {
	                return;
	            }
	            var position = container.position();
	            var width = container.outerWidth();
	            var height = container.outerHeight();

	            container.css("position", "absolute");
	            container.css("left", position.left);
	            container.css("top", position.top);
	            container.css("width", width);
	            container.css("height", height);
	            container.css("z-index", 2);
	        },

	        _navigatable: function () {

	            if (!this.options.navigatable) {
	                return;
	            }

	            var that = this;

	            that.element.children().attr("tabindex", 0);
	            that.element.on("keydown" + NS, that, $.proxy(that._keyDown, that));
	        },

	        _keyDown: function (e) {
	            var target = $(e.target);
	            var canHandle = false;

	            if (!target.is(".k-tilelayout-item.k-card")) {
	                return;
	            }


	            if (e.ctrlKey && e.keyCode == keys.LEFT) {
	                canHandle = true;
	                this._resizeItem(target, "horizontal", -1);
	            }

	            if (e.ctrlKey && e.keyCode == keys.RIGHT) {
	                canHandle = true;
	                this._resizeItem(target,"horizontal", 1);
	            }

	            if (e.ctrlKey && e.keyCode == keys.UP) {
	                canHandle = true;
	                this._resizeItem(target, "vertical", -1);
	            }

	            if (e.ctrlKey && e.keyCode == keys.DOWN) {
	                canHandle = true;
	                this._resizeItem(target, "vertical", 1);
	            }

	            if (e.shiftKey && e.keyCode == keys.LEFT) {
	                canHandle = true;
	                this._reorderItem(target, -1);
	            }

	            if (e.shiftKey && e.keyCode == keys.RIGHT) {
	                canHandle = true;
	                this._reorderItem(target, 1);
	            }

	            if (canHandle) {
	                e.preventDefault();
	            }
	        },

	        _resizeItem: function (item, dir, delta) {
	            var that = this;
	            var id = item.attr("id");
	            var newSpan;
	            var maxSpan;

	            if (!that.options.resizable) {
	                return;
	            }

	            if (dir === "horizontal") {
	                newSpan = parseInt(item.css("grid-column-end").replace('span',''), 10)  + delta;
	                maxSpan = that.element.css("grid-template-columns").split(" ").length;

	                if (maxSpan >= newSpan && newSpan > 0) {
	                    that.itemsMap[id].colSpan = newSpan;
	                    item.css({
	                        "grid-column-end": kendo.format("span {0}", newSpan)
	                    });
	                }
	            } else {
	                newSpan = parseInt(item.css("grid-row-end").replace('span',''), 10) + delta;
	                maxSpan = that.element.css("grid-template-rows").split(" ").length;

	                if (maxSpan >= newSpan && newSpan > 0) {
	                    that.itemsMap[id].rowSpan = newSpan;
	                    item.css({
	                        "grid-row-end": kendo.format("span {0}", newSpan)
	                    });
	                }
	            }
	        },

	        _reorderItem: function (item, newOrder) {
	            if (!this.options.reorderable) {
	                return;
	            }

	            var oldOrder = parseInt(item.css("order"), 10);
	            var maxOrder  = this.element.children().length;
	            newOrder = oldOrder + newOrder;

	            if (newOrder >= 0 && newOrder < maxOrder) {
	                var target = this.element.find("> ["+kendo.attr("index") + "='" + newOrder + "']");

	                this.itemsMap[item.attr("id")].order = newOrder;
	                this.itemsMap[target.attr("id")].order = oldOrder;

	                this._updateContainers();
	                this._updateDOM();
	                item.trigger("focus");// need to restore focus after DOM gets reordered
	            }
	        },

	        _sortContainers:function (containers) {
	            var indexAttr = kendo.attr("index");

	            return containers.sort(function(a, b) {
	                a = $(a);
	                b = $(b);

	                var indexA = a.attr(indexAttr);
	                var indexB = b.attr(indexAttr);

	                if (indexA === undefined) {
	                    indexA = $(a).index();
	                }
	                if (indexB === undefined) {
	                    indexB = $(b).index();
	                }

	                indexA = parseInt(indexA, 10);
	                indexB = parseInt(indexB, 10);
	                return indexA > indexB ? 1 : (indexA < indexB ? -1 : 0);
	            });
	        },
	        _updateDOM: function () {
	            var that = this;
	            var containers = that.element.children(":visible");

	            containers = that._sortContainers(containers);

	            containers.each(function () {
	                $(this).appendTo(that.element);
	            });
	        },

	        _resizable: function () {
	            var that = this;
	            var side;
	            var down;
	            var id;
	            var fractionWidth;
	            var fractionHeight;
	            var currentContainer;
	            var lastXLocation = 0;
	            var lastYLocation = 0;
	            var initialWidth = 0;
	            var initialHeight = 0;
	            var startColSpan = 0;
	            var startRowSpan = 0;
	            var itemsMaxSpace = 0;
	            var rowsCount;

	            if (that.options.resizable) {
	                that.element.on("mousemove" + NS, selector(TileLayout.styles.item), function (e) {
	                    var rightPosition;
	                    var downPosition;
	                    var container = $(this);
	                    var rectPosition = container[0].getBoundingClientRect();

	                    rightPosition = Math.abs(rectPosition.right - e.clientX) < 16;
	                    downPosition = Math.abs(rectPosition.bottom - e.clientY) < 16;

	                    if (rightPosition && downPosition) {
	                        that._createResizeHandle(container, true, true);
	                    } else if (rightPosition) {
	                        that._createResizeHandle(container, true, false);
	                    } else  if (downPosition) {
	                        that._createResizeHandle(container, false, true);
	                    }
	                });

	                that.resizable = new ui.Resizable(that.element, {
	                    handle: "div.k-tilelayout-item > .k-resize-handle",
	                    start: function(e) {
	                        var resizeHandle = $(e.currentTarget);
	                        currentContainer = resizeHandle.data("div");
	                        id = currentContainer.attr("id");
	                        side = resizeHandle.attr("side");
	                        down = resizeHandle.attr("down");
	                        rowsCount = that.element.css("grid-template-rows").split(" ").length;

	                        if (side) {
	                            fractionWidth = that._calculateFractionWidth();
	                            itemsMaxSpace = that._calculateRightEndSide(fractionWidth);
	                            lastXLocation = e.x.location;
	                            initialWidth = currentContainer.width();
	                            startColSpan = parseInt(currentContainer.css("grid-column-end").replace('span',''), 10);
	                        }

	                        if (down) {
	                            fractionHeight = (that.element[0].scrollHeight - (rowsCount + 1)*that.options.gap.rows)/rowsCount;
	                            lastYLocation = e.y.location;
	                            initialHeight = currentContainer.height();
	                            startRowSpan = parseInt(currentContainer.css("grid-row-end").replace('span',''), 10);
	                        }

	                        that._isresizing = true;
	                    },
	                    resize: function(e) {
	                        var hintColumns = 0;
	                        var hintRows = 0;
	                        var mouseDeltaX = 0;
	                        var mouseDeltaY = 0;
	                        var overflowsLayout;
	                        var isBeyondMinimum;
	                        var deltaFromStart = 0;
	                        var resizeRowsCount = 0;
	                        var resizeColumnsCount = 0;
	                        var clientRect = that.element[0].getBoundingClientRect();

	                        that._positionAbsolutely(currentContainer);
	                        that._createResizeHint(currentContainer);

	                        if (side == "true") {
	                            mouseDeltaX = e.x.location - lastXLocation;
	                            overflowsLayout = (clientRect.left + itemsMaxSpace - window.scrollX - e.x.location) < that.options.gap.columns;
	                            isBeyondMinimum = (initialWidth + mouseDeltaX) < fractionWidth;

	                            if (!overflowsLayout && !isBeyondMinimum) {
	                                resizeColumnsCount = (mouseDeltaX)/(fractionWidth + that.options.gap.columns);
	                                deltaFromStart = mouseDeltaX -(Math.floor(resizeColumnsCount)*(fractionWidth + that.options.gap.columns));
	                                hintColumns = startColSpan + Math.floor(resizeColumnsCount) + ((deltaFromStart >= (fractionWidth/2))? 1: 0);
	                                that.itemsMap[id].colSpan = Math.max(hintColumns, MINIMALSPAN);
	                            } else {
	                                mouseDeltaX = 0;
	                            }
	                        }

	                        if (down == "true") {
	                            mouseDeltaY = e.y.location - lastYLocation;
	                            overflowsLayout = (clientRect.bottom + window.scrollY - e.y.location) < that.options.gap.rows;
	                            isBeyondMinimum = (initialHeight + mouseDeltaY) <= fractionHeight;

	                            if (!overflowsLayout && !isBeyondMinimum) {
	                                resizeRowsCount = (mouseDeltaY)/(fractionHeight + that.options.gap.rows);
	                                deltaFromStart = mouseDeltaY - (Math.floor(resizeRowsCount)*(fractionHeight + that.options.gap.rows));
	                                hintRows = startRowSpan + Math.floor(resizeRowsCount) + ((deltaFromStart >= (fractionHeight/2))? 1: 0);
	                                that.itemsMap[id].rowSpan = Math.max(hintRows, MINIMALSPAN);
	                            } else {
	                                mouseDeltaY = 0;
	                            }
	                        }

	                        that._positionHint(hintColumns, hintRows);
	                        that._positionResizeHandle(currentContainer, side == "true", down == "true");
	                        if (mouseDeltaY) {
	                            currentContainer.css("height", initialHeight + mouseDeltaY);
	                        }
	                        if (mouseDeltaX) {
	                            currentContainer.css("width", initialWidth + mouseDeltaX);
	                        }
	                    },
	                    resizeend: function() {
	                        that._isresizing = false;
	                        that._setContainerCoordinates(currentContainer, that.itemsMap[id]);
	                        that._removeAbsoluteStyles(currentContainer);
	                        that._removeResizeHint();
	                        that.trigger(RESIZE, {
	                            container: currentContainer
	                        });
	                    }
	                });
	            }
	        },

	        _calculateFractionWidth: function () {
	            var that = this;
	            var container = that.element.children().first();
	            var colSpan = that.itemsMap[container.attr("id")].colSpan;
	            var totalWidth = container.outerWidth();

	            return (totalWidth - (colSpan -1)*(that.options.gap.columns))/colSpan;
	        },

	        _calculateRightEndSide: function (fractionWidth) {
	            var that = this;
	            var columns = that.options.columns;
	            var columnGap = that.options.gap.columns;

	            return columns*(fractionWidth + columnGap) + columnGap;
	        },

	        _createDropHint: function (settings) {
	            this.dropHint = $("<div class='" + TileLayout.styles.reorderHint + "'></div>")
	                .css({
	                    "order": settings.order,
	                    "grid-column-end": settings.columnEnd,
	                    "grid-row-end": settings.rowEnd
	                })
	                .attr(kendo.attr("index"), settings.order)
	                .attr("direction", settings.direction);
	        },

	        _insertDropHint: function (container, direction) {
	            if (direction == "right") {
	                this.dropHint.insertAfter(container);
	            } else {
	                this.dropHint.insertBefore(container);
	            }
	        },

	        _removeDropHint: function () {
	            if (this.dropHint) {
	                this.dropHint.remove();
	                this.dropHint = null;
	            }
	        },

	        _reorderable: function () {
	            if (!this.options.reorderable) {
	                return;
	            }

	            var that = this;
	            var element = that.element;
	            var originalElement;
	            var itemSelector = selector(TileLayout.styles.item);
	            var headerSelector = selector(TileLayout.styles.itemHeader);
	            var group = kendo.guid();

	            this._draggableInstance = new Draggable(this.element, {
	                filter: headerSelector,
	                autoScroll: true,
	                ignore: ":input",
	                group: group,
	                hint: function(target) {
	                    var item = target.closest(itemSelector);
	                    var width = item.width();
	                    var height= item.height();
	                    var clone = item.clone();
	                    clone.find(headerSelector)
	                        .removeClass(GRABCURSOR)
	                        .addClass(GRABBINGCURSOR);
	                    return clone.width(width).height(height);
	                },
	                dragstart: function (e) {
	                    originalElement = $(e.currentTarget).closest(itemSelector);
	                },
	                drag: function (e) {
	                    var elementUnderCursor = kendo.elementUnderCursor(e);
	                    var hint = e.sender.hint;
	                    var dropContainer;
	                    var containerBoundaries;
	                    var pixelsToLeftBorder;
	                    var pixelsToRightBorder;
	                    var direction;

	                    var draggedItem = that._draggableInstance.currentTarget.closest(itemSelector);
	                    var newOrder;

	                    if (containsOrEqualTo(hint[0], elementUnderCursor)) {
	                        hint.hide();

	                        elementUnderCursor = kendo.elementUnderCursor(e);

	                        if (!containsOrEqualTo(originalElement[0], elementUnderCursor)) {

	                            if (that.dropHint && that.dropHint[0] == elementUnderCursor[0]) {
	                                hint.show();
	                                return;
	                            }

	                            dropContainer = $(elementUnderCursor);
	                            dropContainer = dropContainer.hasClass(TileLayout.styles.item) ? dropContainer : dropContainer.closest(itemSelector);

	                            if (dropContainer.hasClass(TileLayout.styles.item)) {
	                                containerBoundaries = dropContainer[0].getBoundingClientRect();
	                                pixelsToLeftBorder = e.clientX - containerBoundaries.left;
	                                pixelsToRightBorder = containerBoundaries.right - e.clientX;
	                                direction = pixelsToLeftBorder > pixelsToRightBorder ? "right" : "left";
	                                newOrder = dropContainer.css("order");

	                                if (that.dropHint && that.dropHint.attr("direction") !== direction) {
	                                    var clone = that.dropHint.clone();
	                                    clone.css("order", newOrder);
	                                    that.dropHint.remove();
	                                    that.dropHint = clone;

	                                    that._insertDropHint(dropContainer ,direction);

	                                    that.dropHint
	                                        .attr("direction", direction)
	                                        .attr(kendo.attr("index"), newOrder);
	                                } else if (!that.dropHint) {

	                                    var futureContainer = direction == "right" ? dropContainer.next() : dropContainer.prev();

	                                    if (futureContainer[0] != originalElement[0]) {
	                                        that._createDropHint({ order: newOrder, columnEnd: draggedItem.css("grid-column-end"), rowEnd: draggedItem.css("grid-row-end"), direction: direction });
	                                        originalElement.hide();
	                                        that._insertDropHint(dropContainer ,direction);
	                                    }
	                                }
	                            }
	                        }
	                        hint.show();
	                    }
	                },
	                dragend: function (e) {
	                    if (!that.dropHint) {
	                        e.sender.hint.remove();
	                        that._removeDropHint();
	                        return;
	                    }
	                    var newOrder = parseInt(that.dropHint.css("order"), 10);
	                    var container = e.currentTarget.closest(itemSelector);
	                    var items = that.element.find(itemSelector);
	                    var oldOrder = parseInt(container.css("order"), 10);
	                    var itemId = container.attr("id");
	                    var containers = that.element.children(":visible");
	                    var start;
	                    var end;
	                    var item;
	                    var direction;

	                    containers = that._sortContainers(containers);

	                    newOrder = containers.index(that.dropHint[0]);
	                    end = Math.max(newOrder, oldOrder);
	                    start = Math.min(newOrder, oldOrder);

	                    that.itemsMap[itemId].order = newOrder;

	                    direction = newOrder > oldOrder ? "right" : "left"; //this is direction of movement

	                    if (direction == "left") {
	                        end--;
	                    } else {
	                        start++;
	                    }

	                    for (var i = start; i <= end ; i++) {
	                        item = items.filter("["+kendo.attr("index") + "='" +i + "']");
	                        that.itemsMap[item.attr("id")].order += direction == "left" ? 1 : -1;
	                    }

	                    container.show();

	                    that._updateContainers();

	                    e.sender.hint.remove();
	                    that._removeDropHint();

	                    if (that.options.navigatable) {
	                        that._updateDOM();
	                    }

	                    that.trigger(REORDER, {
	                        newIndex: newOrder,
	                        oldIndex: oldOrder,
	                        container: container
	                    });
	                }
	            });

	            element.find(itemSelector).kendoDropTarget({
	                group: group,
	                dragenter: function(e) {
	                    if (that._isresizing) {
	                        return;
	                    }
	                    var dropContainer = $(e.dropTarget);
	                    var target = that._draggableInstance.currentTarget.closest(itemSelector);
	                    var dropContainerBoundaries;
	                    var pixelsToLeftBorder;
	                    var pixelsToRightBorder;
	                    var futureContainer;
	                    var direction;

	                    if (originalElement[0] != dropContainer[0]) {

	                        dropContainerBoundaries = dropContainer[0].getBoundingClientRect();
	                        pixelsToLeftBorder = e.clientX - dropContainerBoundaries.left;
	                        pixelsToRightBorder = dropContainerBoundaries.right - e.clientX;
	                        direction = pixelsToLeftBorder > pixelsToRightBorder ? "right" : "left";

	                        futureContainer = direction == "right" ? dropContainer.next() : dropContainer.prev();

	                        //handle the case when the container will be shown over the original one
	                        if (futureContainer[0] == originalElement[0]) {
	                            return;
	                        }

	                        that._removeDropHint();

	                        originalElement.hide();

	                        that._createDropHint({ order: dropContainer.css("order"), columnEnd: target.css("grid-column-end"), rowEnd: target.css("grid-row-end"), direction: direction});

	                        originalElement.hide();
	                        that._insertDropHint(dropContainer, direction);
	                    }
	                }
	            });
	        }
	    });

	    function containsOrEqualTo(parent, child) {
	        try {
	            return $.contains(parent, child) || parent == child;
	        } catch (e) {
	            return false;
	        }
	    }

	    ui.plugin(TileLayout);

	    $.extend(true, TileLayout, { styles: tileLayoutStyles });
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });