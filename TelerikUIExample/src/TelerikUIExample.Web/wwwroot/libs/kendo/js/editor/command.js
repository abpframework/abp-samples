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

	__webpack_require__(966);
	module.exports = __webpack_require__(966);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(967) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($) {

	    // Imports ================================================================
	    var kendo = window.kendo,
	        Class = kendo.Class,
	        editorNS = kendo.ui.editor,
	        dom = editorNS.Dom,
	        RestorePoint = editorNS.RestorePoint,
	        Marker = editorNS.Marker,
	        extend = $.extend;

	function finishUpdate(editor, startRestorePoint) {
	    var endRestorePoint = editor.selectionRestorePoint = new RestorePoint(editor.getRange(), editor.body);
	    var command = new GenericCommand(startRestorePoint, endRestorePoint);
	    command.editor = editor;

	    editor.undoRedoStack.push(command);
	    editor.toolbar.refreshTools();

	    return endRestorePoint;
	}

	var Command = Class.extend({
	    init: function(options) {
	        this.options = options;
	        this.restorePoint = new RestorePoint(options.range, options.body, {immutables: options.immutables});
	        this.marker = new Marker();
	        this.formatter = options.formatter;
	    },

	    getRange: function () {
	        return this.restorePoint.toRange();
	    },

	    lockRange: function (expand) {
	        return this.marker.add(this.getRange(), expand);
	    },

	    releaseRange: function (range) {
	        this.marker.remove(range);
	        this.editor.selectRange(range);
	    },

	    undo: function () {
	        var point = this.restorePoint;
	        point.restoreHtml();
	        this.editor.selectRange(point.toRange());
	    },

	    redo: function () {
	        this.exec();
	    },

	    createDialog: function (content, options) {
	        var editor = this.editor;

	        return $(content).appendTo(document.body)
	            .kendoWindow(extend({}, editor.options.dialogOptions, options))
	            .closest(".k-window").toggleClass("k-rtl", kendo.support.isRtl(editor.wrapper)).end();
	    },

	    exec: function () {
	        var range = this.lockRange(true);
	        this.formatter.editor = this.editor;
	        this.formatter.toggle(range);
	        this.releaseRange(range);
	    },

	    immutables: function(){
	        return this.editor && this.editor.options.immutables;
	    },

	    expandImmutablesIn: function(range) {
	        if (this.immutables()) {
	            kendo.ui.editor.Immutables.expandImmutablesIn(range);
	            this.restorePoint = new RestorePoint(range, this.editor.body);
	        }
	    }
	});

	var GenericCommand = Class.extend({
	    init: function(startRestorePoint, endRestorePoint) {
	        this.body = startRestorePoint.body;
	        this.startRestorePoint = startRestorePoint;
	        this.endRestorePoint = endRestorePoint;
	    },

	    redo: function () {
	        dom.removeChildren(this.body);

	        this.body.innerHTML = this.endRestorePoint.html;
	        this.editor.selectRange(this.endRestorePoint.toRange());
	    },

	    undo: function () {
	        dom.removeChildren(this.body);

	        this.body.innerHTML = this.startRestorePoint.html;
	        this.editor.selectRange(this.startRestorePoint.toRange());
	    }
	});

	extend(editorNS, {
	    _finishUpdate: finishUpdate,
	    Command: Command,
	    GenericCommand: GenericCommand
	});

	})(window.kendo.jQuery);

	}, __webpack_require__(3));


/***/ }),

/***/ 967:
/***/ (function(module, exports) {

	module.exports = require("./immutables");

/***/ })

/******/ });