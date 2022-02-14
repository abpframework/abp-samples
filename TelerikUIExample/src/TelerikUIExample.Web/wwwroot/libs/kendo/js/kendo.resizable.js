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

	module.exports = __webpack_require__(1406);


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

/***/ 1406:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057), __webpack_require__(1141) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "resizable",
	    name: "Resizable",
	    category: "framework",
	    depends: [ "core", "draganddrop" ],
	    advanced: true
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        proxy = $.proxy,
	        isFunction = kendo.isFunction,
	        extend = $.extend,
	        HORIZONTAL = "horizontal",
	        VERTICAL = "vertical",
	        START = "start",
	        RESIZE = "resize",
	        RESIZEEND = "resizeend";

	    var Resizable = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            that.orientation = that.options.orientation.toLowerCase() != VERTICAL ? HORIZONTAL : VERTICAL;
	            that._positionMouse = that.orientation == HORIZONTAL ? "x" : "y";
	            that._position = that.orientation == HORIZONTAL ? "left" : "top";
	            that._sizingDom = that.orientation == HORIZONTAL ? "outerWidth" : "outerHeight";

	            that.draggable = new ui.Draggable(options.draggableElement || element, {
	                distance: 1,
	                filter: options.handle,
	                drag: proxy(that._resize, that),
	                dragcancel: proxy(that._cancel, that),
	                dragstart: proxy(that._start, that),
	                dragend: proxy(that._stop, that)
	            });

	            that.userEvents = that.draggable.userEvents;
	        },

	        events: [
	            RESIZE,
	            RESIZEEND,
	            START
	        ],

	        options: {
	            name: "Resizable",
	            orientation: HORIZONTAL
	        },

	        resize: function() {
	            // Overrides base widget resize
	        },

	        _max: function(e) {
	            var that = this,
	                hintSize = that.hint ? that.hint[that._sizingDom]() : 0,
	                size = that.options.max;

	            return isFunction(size) ? size(e) : size !== undefined ? (that._initialElementPosition + size) - hintSize : size;
	        },

	        _min: function(e) {
	            var that = this,
	                size = that.options.min;

	            return isFunction(size) ? size(e) : size !== undefined ? that._initialElementPosition + size : size;
	        },

	        _start: function(e) {
	            var that = this,
	                hint = that.options.hint,
	                el = $(e.currentTarget);

	            that._initialElementPosition = el.position()[that._position];
	            that._initialMousePosition = e[that._positionMouse].startLocation;

	            if (hint) {
	                that.hint = isFunction(hint) ? $(hint(el)) : hint;

	                that.hint.css({
	                    position: "absolute"
	                })
	                .css(that._position, that._initialElementPosition)
	                .appendTo(that.element);
	            }

	            that.trigger(START, e);

	            that._maxPosition = that._max(e);
	            that._minPosition = that._min(e);

	            $(document.body).css("cursor", el.css("cursor"));
	        },

	        _resize: function(e) {
	            var that = this,
	                maxPosition = that._maxPosition,
	                minPosition = that._minPosition,
	                currentPosition = that._initialElementPosition + (e[that._positionMouse].location - that._initialMousePosition),
	                position;

	            position = minPosition !== undefined ? Math.max(minPosition, currentPosition) : currentPosition;
	            that.position = position =  maxPosition !== undefined ? Math.min(maxPosition, position) : position;

	            if(that.hint) {
	                that.hint.toggleClass(that.options.invalidClass || "", position == maxPosition || position == minPosition)
	                         .css(that._position, position);
	            }

	            that.resizing = true;
	            that.trigger(RESIZE, extend(e, { position: position }));
	        },

	        _stop: function(e) {
	            var that = this;

	            if(that.hint) {
	                that.hint.remove();
	            }

	            that.resizing = false;
	            that.trigger(RESIZEEND, extend(e, { position: that.position }));
	            $(document.body).css("cursor", "");
	        },

	        _cancel: function(e) {
	            var that = this;

	            if (that.hint) {
	                that.position = undefined;
	                that.hint.css(that._position, that._initialElementPosition);
	                that._stop(e);
	            }
	        },

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(that);

	            if (that.draggable) {
	                that.draggable.destroy();
	            }
	        },

	        press: function(target) {
	            if (!target) {
	                return;
	            }

	            var position = target.position(),
	                that = this;

	            that.userEvents.press(position.left, position.top, target[0]);
	            that.targetPosition = position;
	            that.target = target;
	        },

	        move: function(delta) {
	            var that = this,
	                orientation = that._position,
	                position = that.targetPosition,
	                current = that.position;

	            if (current === undefined) {
	                current = position[orientation];
	            }

	            position[orientation] = current + delta;

	            that.userEvents.move(position.left, position.top);
	        },

	        end: function() {
	            this.userEvents.end();
	            this.target = this.position = undefined;
	        }
	    });

	    kendo.ui.plugin(Resizable);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });