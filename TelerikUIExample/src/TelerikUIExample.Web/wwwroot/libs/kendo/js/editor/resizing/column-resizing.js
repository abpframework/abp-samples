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

	module.exports = __webpack_require__(1010);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 982:
/***/ (function(module, exports) {

	module.exports = require("../main");

/***/ }),

/***/ 1010:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(982), __webpack_require__(1011), __webpack_require__(1012), __webpack_require__(1013)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	(function(kendo, undefined) {
	    var global = window;
	    var math = global.Math;
	    var abs = math.abs;

	    var $ = kendo.jQuery;
	    var extend = $.extend;

	    var Editor = kendo.ui.editor;
	    var dom = Editor.Dom;
	    var TableElementResizing = Editor.TableElementResizing;
	    var ResizingUtils = Editor.ResizingUtils;
	    var constrain = ResizingUtils.constrain;
	    var calculatePercentageRatio = ResizingUtils.calculatePercentageRatio;
	    var getScrollBarWidth = ResizingUtils.getScrollBarWidth;
	    var inPercentages = ResizingUtils.inPercentages;
	    var toPercentages = ResizingUtils.toPercentages;
	    var toPixels = ResizingUtils.toPixels;
	    var outerWidth = kendo._outerWidth;

	    var NS = ".kendoEditorColumnResizing";
	    var RESIZE_HANDLE_CLASS = "k-column-resize-handle";
	    var RESIZE_MARKER_CLASS = "k-column-resize-marker";

	    var BODY = "body";
	    var TBODY = "tbody";
	    var THEAD = "thead";
	    var TD = "td";
	    var TH = "th";
	    var TR = "tr";

	    var COLATTR = "col-index";

	    var COMMA = ",";
	    var WIDTH = "width";

	    var ColumnResizing = TableElementResizing.extend({
	        options: {
	            tags: [TD, TH],
	            min: 20,
	            rootElement: null,
	            eventNamespace: NS,
	            rtl: false,
	            handle: {
	                dataAttribute: "column",
	                width: 10,
	                height: 0,
	                classNames: {
	                    handle: RESIZE_HANDLE_CLASS,
	                    marker: RESIZE_MARKER_CLASS
	                },
	                template:
	                    '<div class="k-column-resize-handle-wrapper" unselectable="on" contenteditable="false">' +
	                        '<div class="' + RESIZE_HANDLE_CLASS + '">' +
	                            '<div class="' + RESIZE_MARKER_CLASS + '"></div>' +
	                        '</div>' +
	                    '</div>'
	            }
	        },

	        elementBorderHovered: function(column, e) {
	            var that = this;
	            var options = that.options;
	            var handleWidth = options.handle.width;
	            var borderOffset = column.offset().left + (options.rtl ? 0 : outerWidth(column));


	            var mousePosition = e.clientX + $(column[0].ownerDocument).scrollLeft();

	            if ((mousePosition > (borderOffset - handleWidth)) && (mousePosition < (borderOffset + handleWidth))) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        },

	        setResizeHandlePosition: function(column) {
	            var that = this;
	            var tableInnerElement = $(that.element.tHead || that.element.tBodies[0]);
	            var options = that.options;
	            var rtl = options.rtl;
	            var handleWidth = options.handle.width;
	            var rootElement = $(options.rootElement);
	            var scrollTopOffset = rootElement.is(BODY) ? 0 : rootElement.scrollTop();
	            var scrollLeftOffset = rootElement.is(BODY) ? 0 : kendo.scrollLeft(rootElement);
	            var columnWidthOffset = rtl ? 0 : outerWidth(column);
	            var scrollBarWidth = rtl ? getScrollBarWidth(rootElement[0]) : 0;
	            var columnOffsetLeft = column.offset().left -
	                                    (rootElement.offset().left + parseFloat(rootElement.css("borderLeftWidth"))) -
	                                    parseFloat(column.css("marginLeft"));
	            var innerElementOffsetTop = tableInnerElement.offset().top -
	                                    (rootElement.offset().top + parseFloat(rootElement.css("borderTopWidth"))) -
	                                    parseFloat(tableInnerElement.css("marginTop"));
	            var browser = kendo.support.browser;

	            if(rtl && (browser.mozilla || (browser.webkit && browser.version >= 85))) {
	                scrollLeftOffset = scrollLeftOffset * -1;
	            }

	            that.resizeHandle.css({
	                top: innerElementOffsetTop + scrollTopOffset,
	                left: columnOffsetLeft + columnWidthOffset + (scrollLeftOffset - scrollBarWidth) - (handleWidth / 2),
	                position: "absolute"
	            });
	        },

	        setResizeHandleDimensions: function() {
	            var that = this;
	            var tableHead = $(that.element).children(THEAD);
	            var tableBody = $(that.element).children(TBODY);
	            var fullHeight = tableHead.length > 0 ? tableHead.height() + tableBody.height() : tableBody.height();

	            that.resizeHandle.css({
	                width: that.options.handle.width,
	                height: fullHeight
	            });
	        },

	        setResizeHandleDragPosition: function(e) {
	            var that = this;
	            var column = $($(e.currentTarget).data(that.options.handle.dataAttribute));
	            var options = that.options;
	            var rootElement = $(options.rootElement);
	            var handleWidth = options.handle ? options.handle.width : 0;
	            var min = options.min;
	            var rtl = options.rtl;
	            var columnWidth = outerWidth(column);
	            var columnLeftOffset = column.offset().left -
	                                    (rootElement.offset().left + parseFloat(rootElement.css("borderLeftWidth"))) -
	                                    parseFloat(column.css("marginLeft"));
	            var adjacentColumnWidth = outerWidth(column.next());
	            var resizeHandle = $(that.resizeHandle);
	            var scrollLeftOffset = rootElement.is(BODY) ? 0 : kendo.scrollLeft(rootElement);
	            var scrollBarWidth = rtl ? getScrollBarWidth(rootElement[0]) : 0;
	            var resizeHandleOffsetLeft = resizeHandle.offset().left -
	                                            (rootElement.offset().left + parseFloat(rootElement.css("borderLeftWidth"))) -
	                                            parseFloat(resizeHandle.css("marginLeft"));
	            var browser = kendo.support.browser;

	            if(rtl && (browser.mozilla || (browser.webkit && browser.version >= 85))) {
	                scrollLeftOffset = scrollLeftOffset * -1;
	            }

	            var handleOffset = constrain({
	                value: resizeHandleOffsetLeft + (scrollLeftOffset - scrollBarWidth) + e.x.delta,
	                min: columnLeftOffset + (scrollLeftOffset - scrollBarWidth) - (rtl ? adjacentColumnWidth : 0) + min,
	                max: columnLeftOffset + columnWidth + (scrollLeftOffset - scrollBarWidth) + (rtl ? 0 : adjacentColumnWidth) - handleWidth - min
	            });

	            resizeHandle.css({ left: handleOffset });
	        },

	        resize: function(e) {
	            var that = this;
	            var column = $($(e.currentTarget).data(that.options.handle.dataAttribute));
	            var options = that.options;
	            var rtlModifier = options.rtl ? (-1) : 1;
	            var min = options.min;
	            var initialDeltaX = rtlModifier * e.x.initialDelta;
	            var newWidth;
	            var initialAdjacentColumnWidth;
	            var initialColumnWidth;
	            var colIndex;
	            var nextColumn;

	            dom.reMapTableColumns(that.element, COLATTR);

	            colIndex = parseInt(column.attr(COLATTR), 10);

	            if(column.prop("colSpan") > 1) {
	                column = $(that.element).find("[" + COLATTR + "=" + (colIndex + column.prop("colSpan") - 1) + "]").eq(0);
	                colIndex = parseInt(column.attr(COLATTR), 10);
	            }

	            nextColumn = $(that.element).find("[" + COLATTR + "=" + (colIndex + 1) + "]:not([colspan])");

	            that._setTableComputedWidth();
	            that._setColumnsComputedWidth();

	            initialColumnWidth = outerWidth(column);
	            initialAdjacentColumnWidth = outerWidth(nextColumn);

	            newWidth = constrain({
	                value: initialColumnWidth + initialDeltaX,
	                min: min,
	                max: initialColumnWidth + initialAdjacentColumnWidth - min
	            });

	            that._resizeColumn(column[0], newWidth);
	            that._resizeTopAndBottomColumns(column[0], newWidth);
	            that._resizeAdjacentColumns(parseInt(column.attr(COLATTR),10), initialAdjacentColumnWidth, initialColumnWidth, (initialColumnWidth - newWidth));

	            dom.clearTableMappings(that.element, COLATTR);
	        },

	        _setTableComputedWidth: function() {
	            var element = this.element;

	            if (element.style[WIDTH] === "") {
	                element.style[WIDTH] = toPixels(outerWidth($(element)));
	            }
	        },

	        _setColumnsComputedWidth: function() {
	            var that = this;
	            var tableInnerElement = $(that.element.tHead || that.element.tBodies[0]);
	            var innerElementWidth = outerWidth(tableInnerElement);
	            var columns = tableInnerElement.children(TR).children(TD);
	            var length = columns.length;
	            var currentColumnsWidths = columns.map(function() {
	                return outerWidth($(this));
	            });
	            var i;

	            for (i = 0; i < length; i++) {
	                if (inPercentages(columns[i].style[WIDTH])) {
	                    columns[i].style[WIDTH] = toPercentages(calculatePercentageRatio(currentColumnsWidths[i], innerElementWidth));
	                }
	                else {
	                    columns[i].style[WIDTH] = toPixels(currentColumnsWidths[i]);
	                }
	            }
	        },

	        _resizeTopAndBottomColumns: function(column, newWidth) {
	            var that = this;
	            var columnIndex = $(column).attr(COLATTR);
	            var topAndBottomColumns = $(that.element).children(TBODY + COMMA + THEAD).children(TR).children(that.options.tags.join(COMMA))
	                .filter(function() {
	                    var cell = this;
	                    return ($(cell).attr(COLATTR) === columnIndex && cell !== column);
	                });
	            var length = topAndBottomColumns.length;
	            var i;

	            for (i = 0; i < length; i++) {
	                that._resizeColumn(topAndBottomColumns[i], newWidth);
	            }
	        },

	        _resizeColumn: function(column, newWidth) {
	            var innerTableElement = $(this.element.tHead || this.element.tBodies[0]);
	            if (inPercentages(column.style[WIDTH])) {
	                column.style[WIDTH] = toPercentages(calculatePercentageRatio(newWidth, outerWidth(innerTableElement)));
	            }
	            else {
	                column.style[WIDTH] = toPixels(newWidth);
	            }
	        },

	        _resizeAdjacentColumns: function(columnIndex, initialAdjacentColumnWidth, initialColumnWidth, deltaWidth) {
	            var that = this;
	            var adjacentColumns = $(that.element).children(TBODY + COMMA + THEAD).children(TR).children(that.options.tags.join(COMMA))
	                .filter(function() {
	                    return (parseInt($(this).attr(COLATTR),10) === (columnIndex + 1));
	                });
	            var length = adjacentColumns.length;
	            var i;

	            for (i = 0; i < length; i++) {
	                that._resizeAdjacentColumn(adjacentColumns[i], initialAdjacentColumnWidth, initialColumnWidth, deltaWidth);
	            }
	        },

	        _resizeAdjacentColumn: function(adjacentColumn, initialAdjacentColumnWidth, initialColumnWidth, deltaWidth) {
	            var that = this;
	            var min = that.options.min;
	            var newWidth;

	            newWidth = constrain({
	                value: initialAdjacentColumnWidth + deltaWidth,
	                min: min,
	                max: abs(initialColumnWidth + initialAdjacentColumnWidth - min)
	            });

	            that._resizeColumn(adjacentColumn, newWidth);
	        }
	    });

	    ColumnResizing.create = function(editor) {
	        TableElementResizing.create(editor, {
	            name: "columnResizing",
	            type: ColumnResizing,
	            eventNamespace: NS
	        });
	    };

	    ColumnResizing.dispose = function(editor) {
	        TableElementResizing.dispose(editor, {
	            eventNamespace: NS
	        });
	    };

	    extend(Editor, {
	        ColumnResizing: ColumnResizing
	    });

	})(window.kendo);

	}, __webpack_require__(3));


/***/ }),

/***/ 1011:
/***/ (function(module, exports) {

	module.exports = require("./resizing-utils");

/***/ }),

/***/ 1012:
/***/ (function(module, exports) {

	module.exports = require("./table-element-resizing");

/***/ }),

/***/ 1013:
/***/ (function(module, exports) {

	module.exports = require("../dom");

/***/ })

/******/ });