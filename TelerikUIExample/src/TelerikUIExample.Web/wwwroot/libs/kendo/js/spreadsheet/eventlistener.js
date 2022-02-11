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

	__webpack_require__(1664);
	module.exports = __webpack_require__(1664);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var $ = kendo.jQuery;

	    var KEY_NAMES = {
	        8: 'backspace',
	        9: 'tab',
	        13: 'enter',
	        27: 'esc',
	        37: 'left',
	        38: 'up',
	        39: 'right',
	        40: 'down',
	        35: 'end',
	        36: 'home',
	        32: 'spacebar',
	        33: 'pageup',
	        34: 'pagedown',
	        46: 'delete',
	        113: ':edit'
	    };

	    var Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

	    var isAlphaNum = function(keyCode) {
	        if ((keyCode > 47 && keyCode < 58)   || // number keys
	            (keyCode > 64 && keyCode < 91)   || // letter keys
	            (keyCode > 95 && keyCode < 112)  || // numpad keys
	            (keyCode > 185 && keyCode < 193) || // ;=,-./` (in order)
	            (keyCode > 218 && keyCode < 223) || // [\]' (in order)
	            (keyCode === 229)                   // combined key event?
	           ) {
	            return true;
	        }

	        return false;
	    };

	    var keyName = function(event) {
	        var keyCode = event.keyCode;
	        var name = KEY_NAMES[keyCode];

	        if (!name && isAlphaNum(keyCode)) {
	            name = ":alphanum";
	        }

	        // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
	        //
	        // Fix for https://github.com/telerik/kendo-ui-core/issues/2284
	        // (starting editor with `=` on Firefox)
	        if (!name && event.key && event.key.length == 1) {
	            name = ":alphanum";
	        }

	        return name;
	    };

	    var EventListener = kendo.Class.extend({
	        init: function(target, observer, handlers) {
	            this._handlers = {};
	            this.target = target;
	            this._observer = observer || window;

	            this.keyDownProxy = this.keyDown.bind(this);
	            this.mouseProxy = this.mouse.bind(this);
	            this.touchProxy = this.touch.bind(this);
	            this.threshold = 5;
	            this._pressLocation = null;

	            target.on("keydown", this.keyDownProxy);
	            target.on("contextmenu mousedown cut copy paste scroll wheel click dblclick focus", this.mouseProxy);
	            target.on("touchmove touchend", this.touchProxy);

	            $(document.documentElement).on("mousemove mouseup", this.mouseProxy);
	            $(document.documentElement).on("touchmove touchend", this.touchProxy);

	            if (handlers) {
	                for (var key in handlers) {
	                    this.on(key, handlers[key]);
	                }
	            }
	        },

	        keyDown: function(e) {
	            this.handleEvent(e, keyName(e.originalEvent));
	        },

	        touch: function(e) {
	            this.handleEvent(e, e.type);
	        },

	        mouse: function(e) {

	            var rightClick;

	            if (e.which) {
	                rightClick = (e.which == 3);
	            } else if (e.button) {
	                rightClick = (e.button == 2);
	            }

	            var type = e.type;

	            if (type === "mousedown") {
	                if (rightClick) {
	                   type = "rightmousedown";
	                } else {
	                    this._pressLocation = { x: e.pageX, y: e.pageY };
	                }
	            }

	            if (type === "mouseup") {
	                if (!rightClick) {
	                    this._pressLocation = null;
	                }
	            }

	            if (type === "mousemove" && this._pressLocation) {
	                var dx = this._pressLocation.x - e.pageX;
	                var dy = this._pressLocation.y - e.pageY;
	                var distance = Math.sqrt(dx*dx + dy*dy);

	                if (distance > this.threshold) {
	                    type = "mousedrag";
	                }
	            }

	            this.handleEvent(e, type);
	        },

	        handleEvent: function(e, name) {
	            var eventKey = "";

	            e.mod = Mac ? e.metaKey : (e.ctrlKey && !e.altKey);

	            if (e.altKey) {
	                eventKey += "alt+";
	            }

	            if (e.shiftKey) {
	                eventKey += "shift+";
	            }

	            if (e.ctrlKey) {
	                eventKey += "ctrl+";
	            }

	            eventKey += name;

	            var catchAllHandler = this._handlers['*+' + name];

	            if (catchAllHandler) {
	                catchAllHandler.call(this._observer, e, eventKey);
	            }

	            var handler = this._handlers[eventKey];

	            if (handler) {
	                handler.call(this._observer, e, eventKey);
	            }
	        },

	        on: function(event, callback) {
	            var handlers = this._handlers;

	            if (typeof callback === "string") {
	                callback = this._observer[callback];
	            }

	            if (typeof event === "string") {
	                event = event.split(",");
	            }

	            event.forEach(function(e) {
	                handlers[e] = callback;
	            });
	        },

	        destroy: function() {
	            this.target.off("keydown", this.keyDownProxy);
	            this.target.off("keydown", this.mouseProxy);
	            $(document.documentElement).off("mousemove mouseup", this.mouseProxy);
	        }
	    });

	    kendo.spreadsheet.EventListener = EventListener;
	})(window.kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });