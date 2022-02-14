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

	__webpack_require__(1055);
	module.exports = __webpack_require__(1055);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 976:
/***/ (function(module, exports) {

	module.exports = require("../kendo.dropdownlist");

/***/ }),

/***/ 1039:
/***/ (function(module, exports) {

	module.exports = require("../kendo.toolbar");

/***/ }),

/***/ 1055:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1039), __webpack_require__(976)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        extend = $.extend,
	        proxy = $.proxy,
	        ToolBar = kendo.ui.ToolBar,
	        Item = kendo.toolbar.Item,

	        CLICK = "click",
	        DROPDOWNCHANGE = "dropDownChange",
	        ACTION = "action";

	    var ImageEditorToolBar = ToolBar.extend({
	        init: function(element, options) {
	            var that = this;

	            that._extendOptions(options);

	            ToolBar.fn.init.call(that, element, options);

	            that._attachEvents();
	            that.toggleTools();
	        },

	        events: ToolBar.fn.events.concat([
	            DROPDOWNCHANGE,
	            ACTION
	        ]),

	        defaultTools: {
	            open: { type: "button", icon: "upload", name: "open", command: "OpenImageEditorCommand", showText: "overflow" },
	            save: { type: "button", icon: "download", name: "save", command: "SaveImageEditorCommand", showText: "overflow", toggleCondition:"canExport" },
	            separator: { type: "separator" },
	            undo: { type: "button", icon: "undo", name: "undo", command: "UndoImageEditorCommand", showText: "overflow", toggleCondition:"undo" },
	            redo: { type: "button", icon: "redo", name: "redo", command: "RedoImageEditorCommand", showText: "overflow", toggleCondition:"redo" },
	            separator1: { type: "separator" },
	            crop: { type: "button", icon: "crop", name: "crop", command: "OpenPaneImageEditorCommand", options: "crop", showText: "overflow", toggleCondition:"canExport"  },
	            resize: { type: "button", icon: "image-resize", name: "resize", command: "OpenPaneImageEditorCommand", options: "resize", showText: "overflow", toggleCondition:"canExport"  },
	            zoomIn: { type: "button", icon: "zoom-in", name: "zoomIn", command: "ZoomImageEditorCommand", showText: "overflow", options: "zoomIn", toggleCondition:"enable"  },
	            zoomOut: { type: "button", icon: "zoom-out", name: "zoomOut", command: "ZoomImageEditorCommand", showText: "overflow", options: "zoomOut", toggleCondition:"enable"  },
	            zoomDropdown: { type: "imageEditorZoomDropDown", name: "zoomDropdown", command: "ZoomImageEditorCommand", text: "Zoom options", toggleCondition:"enable" , items: [
	                { name: "zoomActualSize", icon: "zoom-actual-size", text: "Show actual size", options: "actualSize" },
	                { name: "zoomFitToScreen", icon: "zoom-best-fit", text: "Fit to screen", options: "fitToScreen" }
	            ]}
	        },

	        _attachEvents: function() {
	            var that = this;

	            that.bind(DROPDOWNCHANGE, proxy(that._dropDownChange, that));
	            that.bind(CLICK, proxy(that._click, that));
	        },

	        _extendOptions: function(options) {
	            var that = this,
	                tools = options.items ? options.items : Object.keys(that.defaultTools);

	            that.options = options;

	            that.options.items = that._extendToolsOptions(tools);
	        },

	        _extendToolsOptions: function(tools) {
	            var that = this,
	                messages = that.options.messages;

	            if (!tools.length) {
	                return;
	            }

	            return tools.map(function (tool) {
	                var isBuiltInTool =  $.isPlainObject(tool) && Object.keys(tool).length === 1 && tool.name,
	                    toolOptions, text;

	                tool = isBuiltInTool ? tool.name : tool;
	                toolOptions = $.isPlainObject(tool) ? tool : extend({}, that.defaultTools[tool]);

	                text = messages[toolOptions.name] || toolOptions.text;

	                kendo.deepExtend(toolOptions, {
	                    id: toolOptions.name + "-" + kendo.guid(),
	                    name: toolOptions.name,
	                    text: text,
	                    attributes: {
	                        "aria-label": text,
	                        "title": text,
	                        "data-command": toolOptions.command,
	                        "data-options": toolOptions.options,
	                        "data-toggle": toolOptions.toggleCondition
	                    },
	                    overflow: toolOptions.overflow
	                });

	                if(toolOptions.type === "imageEditorZoomDropDown") {
	                    toolOptions.items = that._extendToolsOptions(toolOptions.items);
	                }

	                return toolOptions;
	            }, that);
	        },

	        _click: function(ev) {
	            var command = $(ev.target).data("command"),
	                options = $(ev.target).data("options");

	            if (!command) {
	                return;
	            }

	            this.action({
	                command: command,
	                options: options
	            });
	        },

	        _dropDownChange: function (ev) {
	            if (!ev.command) {
	                return;
	            }

	            this.action({
	                command: ev.command,
	                options: ev.options
	            });
	        },

	        action: function (args) {
	            this.trigger(ACTION, args);
	        },

	        toggleTools: function (conditions) {
	            var that = this,
	                tools = that.element.find("[data-toggle]");

	            tools.each(function(index, elm){
	                var tool = $(elm),
	                    widget = null,
	                    condition = tool.data("toggle"),
	                    toToggle = conditions && conditions[condition];

	                if (tool.is("[data-role]")) {
	                    widget = kendo.widgetInstance(tool);
	                }

	                if (widget && widget.enable){
	                    widget.enable(toToggle || false);
	                } else {
	                    that.enable(tool, toToggle);
	                }
	            });
	        },

	        destroy: function () {
	            var that = this;

	            if (that.zoomDropdown) {
	                that.zoomDropdown.destroy();
	            }

	            ToolBar.fn.destroy.call(this);
	        }
	    });

	    var ImageEditorZoomDropDown = Item.extend({
	        init: function(options, toolbar) {
	            var that = this,
	                element =  $("<div></div>"),
	                input = $("<input />").attr(options.attributes),
	                template = "<span class=\"k-icon k-i-#:icon#\"></span> #:text#";

	                that.element = element;
	                that.input = input;
	                that.toolbar = toolbar;

	                that.dropDown = new ui.DropDownList(that.input, {
	                    optionLabel: { text: options.text, icon: "" },
	                    dataTextField: "text",
	                    dataSource: options.items,
	                    template: template,
	                    change: proxy(that._change, that)
	                });

	                that.element.append(that.dropDown.wrapper);
	                that.dropDown.list.find(".k-list-optionlabel").hide();

	                that.toolbar.zoomDropdown = that;
	        },
	        _change: function (ev) {
	            var that = this;
	            that.toolbar.trigger(DROPDOWNCHANGE, {
	                command: ev.sender.element.data("command"),
	                options: ev.sender.dataItem().options
	            });
	        },
	        destroy: function(){
	            this.dropDown.destroy();
	        }
	    });

	    kendo.toolbar.registerComponent("imageEditorZoomDropDown", ImageEditorZoomDropDown);

	    extend(kendo.ui, {
	        imageeditor: {
	            ToolBar: ImageEditorToolBar,
	            ZoomDropDown: ImageEditorZoomDropDown
	        }
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });