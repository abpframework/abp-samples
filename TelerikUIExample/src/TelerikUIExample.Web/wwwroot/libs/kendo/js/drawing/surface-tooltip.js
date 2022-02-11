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

	__webpack_require__(961);
	module.exports = __webpack_require__(961);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 954:
/***/ (function(module, exports) {

	module.exports = require("./kendo-drawing");

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(962), __webpack_require__(954) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function ($) {

	    var NS = ".kendo";
	    var kendo = window.kendo;
	    var deepExtend = kendo.deepExtend;
	    var utils = kendo.drawing.util;
	    var defined = utils.defined;
	    var limitValue = utils.limitValue;
	    var eventCoordinates = utils.eventCoordinates;
	    var outerWidth = kendo._outerWidth;
	    var outerHeight = kendo._outerHeight;
	    var proxy = $.proxy;

	    var TOOLTIP_TEMPLATE = '<div class="k-tooltip">' +
	            '<div class="k-tooltip-content"></div>' +
	        '</div>';
	    var TOOLTIP_CLOSE_TEMPLATE = '<div class="k-tooltip-button"><a href="\\#" class="k-icon k-i-close">close</a></div>';

	    var SurfaceTooltip = kendo.Class.extend({
	        init: function(surface, options) {
	            this.element = $(TOOLTIP_TEMPLATE);
	            this.content = this.element.children(".k-tooltip-content");

	            options = options || {};

	            this.options = deepExtend({}, this.options, this._tooltipOptions(options));
	            this.popupOptions = {
	                appendTo: options.appendTo,
	                animation: options.animation,
	                copyAnchorStyles: false,
	                collision: "fit fit"
	            };

	            this._openPopupHandler = $.proxy(this._openPopup, this);

	            this.surface = surface;
	            this._bindEvents();
	        },

	        options: {
	            position: "top",
	            showOn: "mouseenter",
	            offset: 7,
	            autoHide: true,
	            hideDelay: 0,
	            showAfter: 100
	        },

	        _bindEvents: function() {
	            this._showHandler = proxy(this._showEvent, this);
	            this._surfaceLeaveHandler = proxy(this._surfaceLeave, this);
	            this._mouseleaveHandler = proxy(this._mouseleave, this);
	            this._mousemoveHandler = proxy(this._mousemove, this);

	            this.surface.bind("click", this._showHandler);
	            this.surface.bind("mouseenter", this._showHandler);
	            this.surface.bind("mouseleave", this._mouseleaveHandler);
	            this.surface.bind("mousemove", this._mousemoveHandler);

	            this.surface.element.on("mouseleave" + NS, this._surfaceLeaveHandler);

	            this.element.on("click" + NS, ".k-tooltip-button", proxy(this._hideClick, this));
	            this.element.on("mouseleave" + NS, proxy(this._tooltipLeave, this));
	        },

	        getPopup: function() {
	            if (!this.popup) {
	                this.popup = new kendo.ui.Popup(this.element, this.popupOptions);
	            }

	            return this.popup;
	        },

	        destroy: function() {
	            var popup = this.popup;

	            this.surface.unbind("click", this._showHandler);
	            this.surface.unbind("mouseenter", this._showHandler);
	            this.surface.unbind("mouseleave", this._mouseleaveHandler);
	            this.surface.unbind("mousemove", this._mousemoveHandler);

	            this.surface.element.off("mouseleave" + NS, this._surfaceLeaveHandler);
	            this.element.off("click" + NS);
	            this.element.off("mouseleave" + NS);

	            if (popup) {
	                popup.destroy();
	                delete this.popup;
	            }
	            delete this.popupOptions;

	            clearTimeout(this._timeout);

	            delete this.element;
	            delete this.content;
	            delete this.surface;
	        },

	        _tooltipOptions: function(options) {
	            options = options || {};
	            return {
	                position: options.position,
	                showOn: options.showOn,
	                offset: options.offset,
	                autoHide: options.autoHide,
	                width: options.width,
	                height: options.height,
	                content: options.content,
	                shared: options.shared,
	                hideDelay: options.hideDelay,
	                showAfter: options.showAfter
	            };
	        },

	        _tooltipShape: function(shape) {
	            while(shape && !shape.options.tooltip) {
	                shape = shape.parent;
	            }
	            return shape;
	        },

	        _updateContent: function(target, shape, options) {
	            var content = options.content;
	            if (kendo.isFunction(content)) {
	                content = content({
	                    element: shape,
	                    target: target
	                });
	            }

	            if (content) {
	                this.content.html(content);
	                return true;
	            }
	        },

	        _position: function(shape, options, elementSize, event) {
	            var position = options.position;
	            var tooltipOffset = options.offset || 0;
	            var surface = this.surface;
	            var offset = surface._instance._elementOffset();
	            var size = surface.getSize();
	            var surfaceOffset = surface._instance._offset;
	            var bbox = shape.bbox();
	            var width = elementSize.width;
	            var height = elementSize.height;
	            var left = 0, top = 0;

	            bbox.origin.translate(offset.left, offset.top);
	            if (surfaceOffset) {
	                bbox.origin.translate(-surfaceOffset.x, -surfaceOffset.y);
	            }

	            if (position == "cursor" && event) {
	                var coord = eventCoordinates(event);
	                left = coord.x - width / 2;
	                top = coord.y - height - tooltipOffset;
	            } else if (position == "left") {
	                left = bbox.origin.x - width - tooltipOffset;
	                top = bbox.center().y - height / 2;
	            } else if (position == "right") {
	                left = bbox.bottomRight().x + tooltipOffset;
	                top = bbox.center().y - height / 2;
	            } else if (position == "bottom") {
	                left = bbox.center().x - width / 2;
	                top = bbox.bottomRight().y + tooltipOffset;
	            } else {
	                left = bbox.center().x - width / 2;
	                top = bbox.origin.y - height - tooltipOffset;
	            }

	            return {
	                left: limitValue(left, offset.left, offset.left + size.width),
	                top: limitValue(top, offset.top, offset.top + size.height)
	            };
	        },

	        show: function(shape, options) {
	            this._show(shape, shape, deepExtend({}, this.options, this._tooltipOptions(shape.options.tooltip), options));
	        },

	        hide: function() {
	            var popup = this.popup;
	            var current = this._current;

	            delete this._current;
	            clearTimeout(this._showTimeout);
	            if (popup && popup.visible() && current &&
	                !this.surface.trigger("tooltipClose", { element: current.shape, target: current.target, popup: popup})) {
	                popup.close();
	            }
	        },

	        _hideClick: function(e) {
	            e.preventDefault();
	            this.hide();
	        },

	        _show: function(target, shape, options, event, delay) {
	            var current = this._current;

	            clearTimeout(this._timeout);

	            if (current && ((current.shape === shape && options.shared) || current.target === target)) {
	                return;
	            }

	            clearTimeout(this._showTimeout);

	            var popup = this.getPopup();

	            if (!this.surface.trigger("tooltipOpen", { element: shape, target: target, popup: popup }) &&
	                this._updateContent(target, shape, options)) {

	                this._autoHide(options);
	                var elementSize = this._measure(options);

	                if (popup.visible()) {
	                    popup.close(true);
	                }

	                this._current = {
	                    options: options,
	                    elementSize: elementSize,
	                    shape: shape,
	                    target: target,
	                    position: this._position(options.shared ? shape: target, options, elementSize, event)
	                };

	                if (delay) {
	                    this._showTimeout = setTimeout(this._openPopupHandler, options.showAfter || 0);
	                } else {
	                    this._openPopup();
	                }
	            }
	        },

	        _openPopup: function() {
	            var current = this._current;
	            var position = current.position;

	            this.getPopup().open(position.left, position.top);
	        },

	        _autoHide: function(options) {
	            if (options.autoHide && this._closeButton) {
	                this.element.removeClass("k-tooltip-closable");
	                this._closeButton.remove();
	                delete this._closeButton;
	            }

	            if (!options.autoHide && !this._closeButton) {
	                this.element.addClass("k-tooltip-closable");
	                this._closeButton = $(TOOLTIP_CLOSE_TEMPLATE).appendTo(this.element);
	            }
	        },

	        _showEvent: function(e) {
	            var shape = this._tooltipShape(e.element);

	            if (shape) {
	                var options = deepExtend({}, this.options, this._tooltipOptions(shape.options.tooltip));

	                if (options && options.showOn == e.type) {
	                    this._show(e.element, shape, options, e.originalEvent, true);
	                }
	            }
	        },

	        _measure: function(options) {
	            var popup = this.getPopup();
	            var width, height;
	            this.element.css({
	                width: "auto",
	                height: "auto"
	            });
	            var visible = popup.visible();
	            if (!visible) {
	                popup.wrapper.show();
	            }

	            this.element.css({
	                width: defined(options.width) ? options.width : "auto",
	                height: defined(options.height) ? options.height : "auto"
	            });

	            width = outerWidth(this.element);
	            height = outerHeight(this.element);

	            if (!visible) {
	                popup.wrapper.hide();
	            }

	            return {
	                width: width,
	                height: height
	            };
	        },

	        _mouseleave: function(e) {
	            if (this.popup && !this._popupRelatedTarget(e.originalEvent)) {
	                var tooltip = this;
	                var current = tooltip._current;

	                if (current && current.options.autoHide) {
	                    tooltip._timeout = setTimeout(function() {
	                        clearTimeout(tooltip._showTimeout);
	                        tooltip.hide();
	                    }, current.options.hideDelay || 0);
	                }
	            }
	        },

	        _mousemove: function(e) {
	            var current = this._current;
	            if (current && e.element) {
	                var options = current.options;
	                if (options.position == "cursor") {
	                    var position = this._position(e.element, options, current.elementSize, e.originalEvent);
	                    current.position = position;
	                    this.getPopup().wrapper.css({left: position.left, top: position.top});
	                }
	            }
	        },

	        _surfaceLeave: function(e) {
	            if (this.popup && !this._popupRelatedTarget(e)) {
	                clearTimeout(this._showTimeout);
	                this.hide();
	            }
	        },

	        _popupRelatedTarget: function(e) {
	            return e.relatedTarget && $(e.relatedTarget).closest(this.popup.wrapper).length;
	        },

	        _tooltipLeave: function() {
	            var tooltip = this;
	            var current = tooltip._current;
	            if (current && current.options.autoHide) {
	                tooltip._timeout = setTimeout(function() {
	                    tooltip.hide();
	                }, current.options.hideDelay || 0);
	            }
	        }
	    });

	    kendo.drawing.SurfaceTooltip = SurfaceTooltip;

	})(window.kendo.jQuery);

	}, __webpack_require__(3));

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

	module.exports = require("../kendo.popup");

/***/ })

/******/ });