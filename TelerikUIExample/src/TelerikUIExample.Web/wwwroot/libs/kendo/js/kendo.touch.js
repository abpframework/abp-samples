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

	module.exports = __webpack_require__(1491);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1117:
/***/ (function(module, exports) {

	module.exports = require("./kendo.userevents");

/***/ }),

/***/ 1491:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057), __webpack_require__(1117) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "touch",
	    name: "Touch",
	    category: "mobile",
	    description: "The kendo Touch widget provides a cross-platform compatible API for handling user-initiated touch events, multi-touch gestures and event sequences (drag, swipe, etc.). ",
	    depends: [ "core", "userevents" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,
	        proxy = $.proxy,
	        abs = Math.abs,
	        MAX_DOUBLE_TAP_DISTANCE = 20;

	    var Touch = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);
	            options = that.options;

	            element = that.element;
	            that.wrapper = element;

	            function eventProxy(name) {
	                return function(e) {
	                    that._triggerTouch(name, e);
	                };
	            }

	            function gestureEventProxy(name) {
	                return function(e) {
	                    that.trigger(name, { touches: e.touches, distance: e.distance, center: e.center, event: e.event });
	                };
	            }

	            that.events = new kendo.UserEvents(element, {
	                filter: options.filter,
	                surface: options.surface,
	                minHold: options.minHold,
	                multiTouch: options.multiTouch,
	                allowSelection: true,
	                fastTap: options.fastTap,
	                press: eventProxy("touchstart"),
	                hold: eventProxy("hold"),
	                tap: proxy(that, "_tap"),
	                gesturestart: gestureEventProxy("gesturestart"),
	                gesturechange: gestureEventProxy("gesturechange"),
	                gestureend: gestureEventProxy("gestureend")
	            });

	            if (options.enableSwipe) {
	                that.events.bind("start", proxy(that, "_swipestart"));
	                that.events.bind("move", proxy(that, "_swipemove"));
	            } else {
	                that.events.bind("start", proxy(that, "_dragstart"));
	                that.events.bind("move", eventProxy("drag"));
	                that.events.bind("end", eventProxy("dragend"));
	            }

	            kendo.notify(that);
	        },

	        events: [
	            "touchstart",
	            "dragstart",
	            "drag",
	            "dragend",
	            "tap",
	            "doubletap",
	            "hold",
	            "swipe",
	            "gesturestart",
	            "gesturechange",
	            "gestureend"
	        ],

	        options: {
	            name: "Touch",
	            surface: null,
	            global: false,
	            fastTap: false,
	            filter: null,
	            multiTouch: false,
	            enableSwipe: false,
	            minXDelta: 30,
	            maxYDelta: 20,
	            maxDuration: 1000,
	            minHold: 800,
	            doubleTapTimeout: 800
	        },

	        cancel: function() {
	            this.events.cancel();
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            this.events.destroy();
	        },

	        _triggerTouch: function(type, e) {
	            if (this.trigger(type, { touch: e.touch, event: e.event })) {
	                e.preventDefault();
	            }
	        },

	        _tap: function(e) {
	            var that = this,
	                lastTap = that.lastTap,
	                touch = e.touch;

	            if (lastTap &&
	                (touch.endTime - lastTap.endTime < that.options.doubleTapTimeout) &&
	                kendo.touchDelta(touch, lastTap).distance < MAX_DOUBLE_TAP_DISTANCE
	                ) {

	               that._triggerTouch("doubletap", e);
	               that.lastTap = null;
	            } else {
	                that._triggerTouch("tap", e);
	                that.lastTap = touch;
	            }
	        },

	        _dragstart: function(e) {
	            this._triggerTouch("dragstart", e);
	        },

	        _swipestart: function(e) {
	            if (abs(e.x.velocity) * 2 >= abs(e.y.velocity)) {
	                e.sender.capture();
	            }
	        },

	        _swipemove: function(e) {
	            var that = this,
	                options = that.options,
	                touch = e.touch,
	                duration = e.event.timeStamp - touch.startTime,
	                direction = touch.x.initialDelta > 0 ? "right" : "left";

	            if (
	                abs(touch.x.initialDelta) >= options.minXDelta &&
	                abs(touch.y.initialDelta) < options.maxYDelta &&
	                duration < options.maxDuration
	                )
	            {
	                that.trigger("swipe", {
	                    direction: direction,
	                    touch: e.touch
	                });

	                touch.cancel();
	            }
	        }
	    });

	    kendo.ui.plugin(Touch);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });