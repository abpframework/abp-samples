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

	module.exports = __webpack_require__(1495);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1076:
/***/ (function(module, exports) {

	module.exports = require("./kendo.data");

/***/ }),

/***/ 1141:
/***/ (function(module, exports) {

	module.exports = require("./kendo.draganddrop");

/***/ }),

/***/ 1495:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1076), __webpack_require__(1141) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "treeview.draganddrop",
	    name: "Hierarchical Drag & Drop",
	    category: "framework",
	    depends: [ "core", "draganddrop" ],
	    advanced: true
	};

	(function($, undefined){
	    var kendo = window.kendo;
	    var ui = kendo.ui;
	    var proxy = $.proxy;
	    var extend = $.extend;
	    var VISIBILITY = "visibility";
	    var KSTATEHOVER = "k-state-hover";
	    var INPUTSELECTOR = "input,a:not(.k-in),textarea,.k-multiselect-wrap,select,button,a.k-button>.k-icon,button.k-button>.k-icon,span.k-icon.k-i-arrow-60-right,span.k-icon.k-i-arrow-45-down-right";
	    var DROPHINTTEMPLATE = "<div class='k-drop-hint k-drop-hint-h'>" +
	                                "<div class='k-drop-hint-start'></div>" +
	                                "<div class='k-drop-hint-line'></div>" +
	                            "</div>";

	    ui.HierarchicalDragAndDrop = kendo.Class.extend({
	        init: function (element, options) {
	            this.element = element;
	            this.hovered = element;
	            this.options = extend({
	                dragstart: $.noop, drag: $.noop, drop: $.noop, dragend: $.noop
	            }, options);

	            this._draggable = new ui.Draggable(element, {
	                ignore: INPUTSELECTOR,
	                filter: options.filter,
	                autoScroll: options.autoScroll,
	                cursorOffset: {
	                    left: 10,
	                    top: kendo.support.mobileOS ? -40 / kendo.support.zoomLevel() : 10
	                },
	                hint: proxy(this._hint, this),
	                dragstart: proxy(this.dragstart, this),
	                dragcancel: proxy(this.dragcancel, this),
	                drag: proxy(this.drag, this),
	                dragend: proxy(this.dragend, this),
	                $angular: options.$angular,
	                holdToDrag: options.holdToDrag
	            });
	        },

	        _hint: function(element) {
	            return "<div class='k-drag-clue'>" +
	                        "<span class='k-icon k-drag-status'></span>" +
	                        this.options.hintText(element) +
	                    "</div>";
	        },

	        _removeTouchHover: function() {
	            if (kendo.support.touch && this.hovered) {
	                this.hovered.find("." + KSTATEHOVER).removeClass(KSTATEHOVER);
	                this.hovered = false;
	            }
	        },

	        _hintStatus: function(newStatus) {
	            var statusElement = this._draggable.hint.find(".k-drag-status")[0];

	            if (newStatus) {
	                statusElement.className = "k-icon k-drag-status " + newStatus;
	            } else {
	                return kendo.trim(statusElement.className.replace(/(p|k)-(icon|drag-status)/g, ""));
	            }
	        },

	        dragstart: function (e) {
	            this.source = e.currentTarget.closest(this.options.itemSelector);

	            if (this.options.dragstart(this.source)) {
	                e.preventDefault();
	            }

	            if (this.options.reorderable) {
	                this.dropHint = $(DROPHINTTEMPLATE)
	                    .css(VISIBILITY, "hidden")
	                    .appendTo(this.element);
	            } else {
	                this.dropHint = $();
	            }
	        },

	        drag: function (e) {
	            var options = this.options;
	            var source = this.source;
	            var target = this.dropTarget = $(kendo.eventTarget(e));
	            var container = target.closest(options.allowedContainers);
	            var hoveredItem, itemHeight, itemTop, itemContent, delta;
	            var insertOnTop, insertOnBottom, addChild;
	            var itemData, position, status;

	            if (!container.length) {
	                // dragging outside of allowed elements
	                status = "k-i-cancel";
	                this._removeTouchHover();
	            } else if (source[0] == target[0] || options.contains(source[0], target[0])) {
	                // dragging item within itself
	                status = "k-i-cancel";
	            } else {
	                // moving or reordering item
	                status = "k-i-insert-middle";

	                itemData = options.itemFromTarget(target);
	                hoveredItem = itemData.item;

	                if (hoveredItem.length) {
	                    this._removeTouchHover();
	                    itemHeight = kendo._outerHeight(hoveredItem);
	                    itemContent = itemData.content;

	                    if (options.reorderable) {
	                        delta = itemHeight / (itemContent.length > 0 ? 4 : 2);
	                        itemTop = kendo.getOffset(hoveredItem).top;

	                        insertOnTop = e.y.location < (itemTop + delta);
	                        insertOnBottom = (itemTop + itemHeight - delta) < e.y.location;
	                        addChild = itemContent.length && !insertOnTop && !insertOnBottom;
	                    } else {
	                        addChild = true;
	                        insertOnTop = false;
	                        insertOnBottom = false;
	                    }

	                    this.hovered = addChild ? container : false;

	                    this.dropHint.css(VISIBILITY, addChild ? "hidden" : "visible");

	                    if (this._lastHover && this._lastHover[0] != itemContent[0]) {
	                        this._lastHover.removeClass(KSTATEHOVER);
	                    }

	                    this._lastHover = itemContent.toggleClass(KSTATEHOVER, addChild);

	                    if (addChild) {
	                        status = "k-i-plus";
	                    } else {
	                        position = hoveredItem.position();
	                        position.top += insertOnTop ? 0 : itemHeight;

	                        this.dropHint.css(position)
	                            [insertOnTop ? "prependTo" : "appendTo"]
	                            (options.dropHintContainer(hoveredItem));

	                        if (insertOnTop && itemData.first) {
	                            status = "k-i-insert-up";
	                        }

	                        if (insertOnBottom && itemData.last) {
	                            status = "k-i-insert-down";
	                        }
	                    }
	                } else if (target[0] != this.dropHint[0]) {
	                    if (this._lastHover) {
	                        this._lastHover.removeClass(KSTATEHOVER);
	                    }

	                    if (!$.contains(this.element[0], container[0])) {
	                        // moving node to different element
	                        status = "k-i-plus";
	                    } else {
	                        status = "k-i-cancel";
	                    }
	                }
	            }

	            this.options.drag({
	                originalEvent: e.originalEvent,
	                source: source,
	                target: target,
	                pageY: e.y.location,
	                pageX: e.x.location,
	                status: status.substring(2),
	                setStatus: function(value) {
	                    status = value;
	                }
	            });

	            if (status.indexOf("k-i-insert") !== 0) {
	                this.dropHint.css(VISIBILITY, "hidden");
	            }

	            this._hintStatus(status);
	        },

	        dragcancel: function() {
	            this.dropHint.remove();
	        },

	        dragend: function (e) {
	            var position = "over",
	                source = this.source,
	                destination,
	                dropHint = this.dropHint,
	                dropTarget = this.dropTarget,
	                eventArgs, dropPrevented;

	            if (dropHint.css(VISIBILITY) == "visible") {
	                position = this.options.dropPositionFrom(dropHint);
	                destination = dropHint.closest(this.options.itemSelector);
	            } else if (dropTarget) {
	                destination = dropTarget.closest(this.options.itemSelector);

	                // moving node to root element
	                if (!destination.length) {
	                    destination = dropTarget.closest(this.options.allowedContainers);
	                }
	            }

	            eventArgs = {
	                originalEvent: e.originalEvent,
	                source: source[0],
	                destination: destination[0],
	                valid: this._hintStatus() != "k-i-cancel",
	                setValid: function(newValid) {
	                    this.valid = newValid;
	                },
	                dropTarget: dropTarget[0],
	                position: position
	            };

	            dropPrevented = this.options.drop(eventArgs);

	            dropHint.remove();
	            this._removeTouchHover();
	            if (this._lastHover) {
	                this._lastHover.removeClass(KSTATEHOVER);
	            }

	            if (!eventArgs.valid || dropPrevented) {
	                this._draggable.dropped = eventArgs.valid;
	                return;
	            }

	            this._draggable.dropped = true;

	            this.options.dragend({
	                originalEvent: e.originalEvent,
	                source: source,
	                destination: destination,
	                position: position
	            });
	        },

	        destroy: function() {
	            this._lastHover = this.hovered = null;
	            this._draggable.destroy();
	        }
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });