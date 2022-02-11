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

	__webpack_require__(1717);
	module.exports = __webpack_require__(1717);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1717:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {
	    var UndoRedoStack = kendo.Observable.extend({
	        init: function(options) {
	            kendo.Observable.fn.init.call(this, options);
	            this.clear();
	        },
	        events: [ "undo", "redo" ],
	        push: function (command) {
	            this.stack = this.stack.slice(0, this.currentCommandIndex + 1);
	            this.currentCommandIndex = this.stack.push(command) - 1;
	        },
	        undo: function () {
	            if (this.canUndo()) {
	                var command = this.stack[this.currentCommandIndex--];
	                command.undo();
	                this.trigger("undo", { command: command });
	            }
	        },
	        redo: function () {
	            if (this.canRedo()) {
	                var command = this.stack[++this.currentCommandIndex];
	                command.redo();
	                this.trigger("redo", { command: command });
	            }
	        },
	        clear: function() {
	            this.stack = [];
	            this.currentCommandIndex = -1;
	        },
	        canUndo: function () {
	            return this.currentCommandIndex >= 0;
	        },
	        canRedo: function () {
	            return this.currentCommandIndex != this.stack.length - 1;
	        }
	    });

	    kendo.deepExtend(kendo, {
	        util: {
	            UndoRedoStack: UndoRedoStack
	        }
	    });
	})(kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });