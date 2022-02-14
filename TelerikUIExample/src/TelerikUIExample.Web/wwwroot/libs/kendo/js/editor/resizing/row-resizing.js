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

	module.exports = __webpack_require__(1018);


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

/***/ 1012:
/***/ (function(module, exports) {

	module.exports = require("./table-element-resizing");

/***/ }),

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(982), __webpack_require__(1011), __webpack_require__(1012)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	(function(kendo, undefined) {
	    var math = window.Math;
	    var abs = math.abs;

	    var $ = kendo.jQuery;
	    var extend = $.extend;

	    var Editor = kendo.ui.editor;
	    var TableElementResizing = Editor.TableElementResizing;
	    var ResizingUtils = Editor.ResizingUtils;
	    var getScrollBarWidth = ResizingUtils.getScrollBarWidth;
	    var constrain = ResizingUtils.constrain;
	    var calculatePercentageRatio = ResizingUtils.calculatePercentageRatio;
	    var inPercentages = ResizingUtils.inPercentages;
	    var toPercentages = ResizingUtils.toPercentages;
	    var toPixels = ResizingUtils.toPixels;
	    var outerHeight = kendo._outerHeight;

	    var NS = ".kendoEditorRowResizing";
	    var RESIZE_HANDLE_CLASS = "k-row-resize-handle";
	    var RESIZE_HANDLE_MARKER_WRAPPER_CLASS = "k-row-resize-marker-wrapper";
	    var RESIZE_MARKER_CLASS = "k-row-resize-marker";

	    var BODY = "body";
	    var TR = "tr";
	    var TBODY = "tbody";
	    var THEAD = "thead";

	    var COMMA = ",";
	    var HEIGHT = "height";

	    var RowResizing = TableElementResizing.extend({
	        options: {
	            tags: [TR],
	            min: 20,
	            rootElement: null,
	            eventNamespace: NS,
	            rtl: false,
	            handle: {
	                dataAttribute: "row",
	                width: 0,
	                height: 10,
	                classNames: {
	                    handle: RESIZE_HANDLE_CLASS,
	                    marker: RESIZE_MARKER_CLASS
	                },
	                template:
	                    '<div class="k-row-resize-handle-wrapper" unselectable="on" contenteditable="false">' +
	                        '<div class="' + RESIZE_HANDLE_CLASS + '">' +
	                            '<div class="' + RESIZE_HANDLE_MARKER_WRAPPER_CLASS + '">' +
	                                '<div class="' + RESIZE_MARKER_CLASS + '"></div>' +
	                            '</div>'+
	                        '</div>' +
	                    '</div>'
	            }
	        },

	        elementBorderHovered: function(tableElement, e) {
	            var that = this;
	            var handleHeight = that.options.handle[HEIGHT];
	            var borderOffset = tableElement.offset().top + outerHeight(tableElement);
	            var mousePosition = e.clientY + $(tableElement[0].ownerDocument).scrollTop();

	            if ((mousePosition > (borderOffset - handleHeight)) && (mousePosition < (borderOffset + handleHeight))) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        },

	        setResizeHandlePosition: function(row) {
	            var that = this;
	            var options = that.options;
	            var handleHeight = options.handle[HEIGHT];
	            var rootElement = $(options.rootElement);
	            var scrollTopOffset = rootElement.is(BODY) ? 0 : rootElement.scrollTop();
	            var scrollLeftOffset = rootElement.is(BODY) ? 0 : kendo.scrollLeft(rootElement);
	            var scrollBarWidth = options.rtl ? getScrollBarWidth(rootElement[0]) : 0;

	            var rowOffsetLeft = row.offset().left -
	                                    (rootElement.offset().left + parseFloat(rootElement.css("borderLeftWidth"))) -
	                                    parseFloat(row.css("marginLeft"));
	            var rowOffsetTop = row.offset().top -
	                                    (rootElement.offset().top + parseFloat(rootElement.css("borderTopWidth"))) -
	                                    parseFloat(row.css("marginTop"));
	            var browser = kendo.support.browser;

	            if(options.rtl && (browser.mozilla || (browser.webkit && browser.version >= 85))) {
	                scrollLeftOffset = scrollLeftOffset * -1;
	            }

	            that.resizeHandle.css({
	                top: rowOffsetTop + outerHeight(row) + scrollTopOffset - (handleHeight / 2),
	                left: rowOffsetLeft + (scrollLeftOffset - scrollBarWidth),
	                position: "absolute"
	            });
	        },

	        setResizeHandleDimensions: function() {
	            var that = this;
	            var innerTableElement = $(that.element.tHead || that.element.tBodies[0]);

	            that.resizeHandle.css({
	                width: innerTableElement.width(),
	                height: that.options.handle[HEIGHT]
	            });
	        },

	        setResizeHandleDragPosition: function(e) {
	            var that = this;
	            var options = that.options;
	            var min = options.min;
	            var tableHead =  $(that.element).children(THEAD);
	            var tableBody =  $(that.element).children(TBODY);
	            var topInnerTableElement = tableHead.length > 0 ? tableHead : tableBody;
	            var resizeHandle = $(that.resizeHandle);
	            var row = $(e.currentTarget).data(options.handle.dataAttribute);
	            var $row = $(row);
	            var rootElement = $(options.rootElement);
	            var scrollTopOffset = rootElement.is(BODY) ? 0 : rootElement.scrollTop();
	            var tableTopOffset = topInnerTableElement.offset().top -
	                                    (rootElement.offset().top + parseFloat(rootElement.css("borderTopWidth"))) -
	                                    parseFloat(topInnerTableElement.css("marginTop"));

	            var rowOffsetTop = $row.offset().top -
	                                (rootElement.offset().top + parseFloat(rootElement.css("borderTopWidth"))) -
	                                parseFloat($row.css("marginTop"));

	            var resizeHandleOffsetTop = resizeHandle.offset().top -
	                                (Math.max(0 , rootElement.offset().top) + parseFloat(rootElement.css("borderTopWidth"))) -
	                                parseFloat(resizeHandle.css("marginTop"));

	            var handleOffset = constrain({
	                value: resizeHandleOffsetTop + scrollTopOffset + e.y.delta,
	                min: rowOffsetTop + scrollTopOffset + min,
	                max: tableTopOffset + outerHeight(tableHead) + outerHeight(tableBody) + scrollTopOffset - options.handle[HEIGHT] - min
	            });

	            resizeHandle.css({ top: handleOffset });
	        },

	        resize: function(e) {
	            var that = this;
	            var options = that.options;
	            var row = $(e.currentTarget).data(options.handle.dataAttribute);
	            var currentRowHeight = outerHeight($(row));
	            var element = $(that.element);
	            var initialTableHeight = outerHeight(element);
	            var tableHead = element.children(THEAD);
	            var tableHeadHeight = tableHead.length > 0 ? tableHead.height() : 0;
	            var tableBody = element.children(TBODY);
	            var tableBodyHeight = tableBody.height();
	            var initialStyleHeight = row.style[HEIGHT];
	            var newRowHeight = constrain({
	                value: currentRowHeight + e.y.initialDelta,
	                min: options.min,
	                max: abs(tableHeadHeight + tableBodyHeight - options.min)
	            });

	            that._setRowsHeightInPixels();
	            row.style[HEIGHT] = toPixels(newRowHeight);
	            that._setTableHeight(initialTableHeight + (newRowHeight - currentRowHeight));

	            if (inPercentages(initialStyleHeight)) {
	                //resize rows in percentages as late as possible to prevent incorrect precision calculations
	                that._setRowsHeightInPercentages();
	            }
	        },

	        _setRowsHeightInPixels: function() {
	            var that = this;
	            var rows = $(that.element).children(TBODY + COMMA + THEAD).children(TR);
	            var length = rows.length;
	            var currentRowsHeights = rows.map(function() {
	                return outerHeight($(this));
	            });
	            var i;

	            for (i = 0; i < length; i++) {
	                rows[i].style[HEIGHT] = toPixels(currentRowsHeights[i]);
	            }
	        },

	        _setRowsHeightInPercentages: function() {
	            var that = this;
	            var tableHead = $(that.element).children(THEAD);
	            var tableHeadHeight = tableHead.length > 0 ? tableHead.height() : 0;
	            var tableBody = $(that.element).children(TBODY);
	            var tableBodyHeight = tableBody.height();
	            var rows = $(that.element).children(THEAD + COMMA + TBODY).children(TR);
	            var length = rows.length;
	            var currentRowsHeights = rows.map(function() {
	                return outerHeight($(this));
	            });
	            var i;

	            for (i = 0; i < length; i++) {
	                rows[i].style[HEIGHT] = toPercentages(calculatePercentageRatio(currentRowsHeights[i], tableHeadHeight + tableBodyHeight));
	            }
	        },

	        _setTableHeight: function(newHeight) {
	            var element = this.element;

	            if (inPercentages(element.style[HEIGHT])) {
	                element.style[HEIGHT] = toPercentages(calculatePercentageRatio(newHeight, $(element).parent().height()));
	            }
	            else {
	                element.style[HEIGHT] = toPixels(newHeight);
	            }
	        }
	    });

	    RowResizing.create = function(editor) {
	        TableElementResizing.create(editor, {
	            name: "rowResizing",
	            type: RowResizing,
	            eventNamespace: NS
	        });
	    };

	    RowResizing.dispose = function(editor) {
	        TableElementResizing.dispose(editor, {
	            eventNamespace: NS
	        });
	    };

	    extend(Editor, {
	        RowResizing: RowResizing
	    });

	})(window.kendo);

	}, __webpack_require__(3));


/***/ })

/******/ });