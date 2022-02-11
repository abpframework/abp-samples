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

	__webpack_require__(1710);
	module.exports = __webpack_require__(1710);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1710:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var kendo = window.kendo,
	        Observable = kendo.Observable,

	        proxy = $.proxy,
	        extend = $.extend,

	        DOT = ".",
	        NS = DOT + "kendoKeboardManager",
	        KEYDOWN = "keydown",
	        ACTION = "action";


	    var Keyboard = Observable.extend({
	        init: function (element) {
	            var that = this;

	            that.register = {};
	            that.element = element;

	            that._attachEvents();

	            Observable.fn.init.call(that);
	        },

	        registerShortcut: function (selector, shortcut, options) {
	            var that = this;

	            if (!that.register[selector]) {
	                that.register[selector] = [];
	            }

	            if (shortcut.keyCode && isNaN(shortcut.keyCode) && shortcut.keyCode.toUpperCase) {
	                shortcut.keyCode = shortcut.keyCode.toUpperCase().charCodeAt(0);
	            }

	            that.register[selector].push({
	                shortcut: extend({
	                    keyCode: null,
	                    ctrlKey: false,
	                    shiftKey: false,
	                    altKey: false
	                }, shortcut),
	                options: options
	            });

	        },

	        _attachEvents: function () {
	            var that = this,
	                handler = proxy(that._handler, that);

	            that.element.on(KEYDOWN + NS, handler);
	        },

	        _handler: function (ev) {
	            var that = this,
	                target = $(ev.target),
	                shortcuts, action;

	            for (var selector in that.register) {
	                if (target.is(selector)) {
	                    shortcuts = that.register[selector];
	                    action = that._getAction(shortcuts, ev);

	                    if (action) {
	                        that._trigger(action, ev);
	                        break;
	                    }
	                }
	            }
	        },

	        _trigger: function (action, ev) {
	            var that = this,
	                target = $(ev.target);

	            if (action.command) {
	                that.trigger(ACTION, extend({}, ev, {
	                    command: action.command,
	                    options: extend({}, {
	                        target: target
	                    }, action.options)
	                }));
	            }

	            if (action.handler) {
	                action.handler(ev);
	            }
	        },

	        _getAction: function (shortcuts, ev) {
	            var that = this;

	            for (var i = 0; i < shortcuts.length; i++) {
	                if (that._compareShortcut(shortcuts[i].shortcut, ev)) {
	                    return shortcuts[i].options;
	                }
	            }
	        },

	        _compareShortcut: function (shortcut, ev) {
	            var that = this;

	            for (var key in shortcut) {
	                var result = false;

	                switch (key) {
	                    case "ctrlKey":
	                        result = shortcut[key] !== that._getShortcutModifier(ev);
	                        break;
	                    default:
	                        result = shortcut[key] !== ev[key];
	                        break;
	                }

	                if(result) {
	                    return false;
	                }
	            }

	            return true;
	        },

	        _getShortcutModifier: function (ev) {
	            var mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
	            return mac ? ev.metaKey : ev.ctrlKey;
	        },

	        destroy: function(){
	            var that = this;

	            that.element.off(NS);
	        }
	    });

	    extend(kendo.ui.taskboard, {
	        KeyboardManager: Keyboard
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });