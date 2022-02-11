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

	__webpack_require__(1038);
	module.exports = __webpack_require__(1038);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1039), __webpack_require__(1040)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var kendo = window.kendo,
	        extend = $.extend,
	        proxy = $.proxy,
	        ToolBar = kendo.ui.ToolBar,
	        Item = kendo.toolbar.Item,

	        CLICK = "click",
	        TOGGLE = "toggle",
	        CLOSE = "close",
	        ACTION = "action",
	        CHANGE = "change",
	        NS = ".fileManagerToolbar";

	    var FileManagerToolBar = ToolBar.extend({
	        init: function(element, options) {
	            var that = this;

	            that._extendOptions(options);

	            ToolBar.fn.init.call(that, element, options);

	            that._attachEvents();
	        },

	        events: ToolBar.fn.events.concat([
	            ACTION
	        ]),

	        defaultTools: {
	            createFolder: { type: "button", text: "New Folder", name: "createFolder", command: "CreateFolderCommand", rules: "{ \"remote\": true }" },
	            upload: { type: "button",  text: "Upload", name: "upload", command: "OpenDialogCommand", options: "{ \"type\": \"uploadDialog\" }", rules: "{ \"remote\": true }" },
	            sortDirection: { type: "buttonGroup", text: "Sort Direction", name:"sortDirection",
	                buttons: [
	                    { name: "sortDirectionAsc", icon: "sort-asc-sm", togglable: true, group: "sortDirection", command: "SortCommand", options: "{ \"dir\": \"asc\" }", selected: true },
	                    { name: "sortDirectionDesc", icon: "sort-desc-sm", togglable: true, group: "sortDirection", command: "SortCommand", options: "{ \"dir\": \"desc\" }" }
	                ]
	            },
	            sortField: { type: "splitButton", text: "Sort By", name: "sortField", command: "SortCommand", menuButtons: [
	                { name: "nameField", text: "Name", options: "{\"field\": \"name\"}", command: "SortCommand" },
	                { name: "typeField", text: "Type", options: "{\"field\": \"extension\"}", command: "SortCommand" },
	                { name: "sizeField", text: "Size", options: "{\"field\": \"size\"}", command: "SortCommand" },
	                { name: "dateCreatedField", text: "Date created", options: "{\"field\": \"createdUtc\"}", command: "SortCommand" },
	                { name: "dateModifiedField", text: "Date modified", options: "{\"field\": \"modifiedUtc\"}", command: "SortCommand" }
	            ] },
	            changeView: { type: "buttonGroup", text: "Change View", name:"changeView",
	                buttons: [
	                    { name: "gridView", icon: "grid-layout", togglable: true, group: "changeView", command: "ChangeViewCommand", options: "grid" },
	                    { name: "listView", icon: "grid", togglable: true, group: "changeView", command: "ChangeViewCommand", options: "list" }
	                ]
	            },
	            spacer: { type: "spacer" },
	            details: { type: "fileManagerDetailsToggle", text: "View Details", name: "details", overflow: "never", command: "TogglePaneCommand", options: "{ \"type\": \"preview\" }"},
	            search: { type: "fileManagerSearch", text: "Search", name: "search", command: "SearchCommand", icon: "search", overflow: "never", options: "{ \"field\": \"name\", \"operator\": \"startswith\" }" }
	        },

	        _attachEvents: function() {
	            var that = this;

	            that.bind(TOGGLE, proxy(that._click, that));
	            that.bind(CLOSE, proxy(that._click, that));
	            that.bind(CLICK, proxy(that._click, that));
	            that.bind(CHANGE, proxy(that._change, that));
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
	                    toolOptions, toolRules, attributes;

	                tool = isBuiltInTool ? tool.name : tool;
	                toolOptions = $.isPlainObject(tool) ? tool : extend({}, that.defaultTools[tool]);
	                toolRules = toolOptions.rules ? JSON.parse(toolOptions.rules) : {};
	                attributes = {
	                    "aria-label": messages[toolOptions.name],
	                    "title": messages[toolOptions.name],
	                    "data-command": toolOptions.command,
	                    "data-options": toolOptions.options
	                };

	                if (toolOptions.type === "fileManagerDetailsToggle") {
	                    delete attributes["aria-label"];
	                }

	                kendo.deepExtend(toolOptions, {
	                    id: toolOptions.name + "-" + kendo.guid(),
	                    name: toolOptions.name,
	                    text: messages[toolOptions.name],
	                    attributes: attributes,
	                    overflow: toolOptions.overflow
	                });

	                if(toolOptions.type === "buttonGroup") {
	                    delete toolOptions.attributes["aria-label"];
	                    toolOptions.buttons = toolOptions.buttons.map(proxy(that._mapButtonGroups, that));
	                }

	                if(toolOptions.type === "splitButton") {
	                    toolOptions.menuButtons = toolOptions.menuButtons.map(proxy(that._mapMenuButtons, that));
	                }

	                if (toolRules.remote && that.options.filemanager.dataSource.isLocalBinding) {
	                    toolOptions.hidden = true;
	                }

	                return toolOptions;
	            }, that);
	        },

	        _mapButtonGroups: function(button) {
	            var that = this,
	                messages = that.options.messages;

	            if(button.group === "changeView" && button.options === that.options.filemanager.options.initialView) {
	                button.selected = true;
	            }

	            return kendo.deepExtend(button,{
	                attributes: extend({}, button.attributes, {
	                    "aria-label": messages[button.name],
	                    "title": messages[button.name],
	                    "data-command": button.command,
	                    "data-options": button.options
	                })
	            });
	        },

	        _mapMenuButtons: function(button) {
	            var that = this,
	                messages = that.options.messages;

	            return kendo.deepExtend(button,{
	                text: messages[button.name],
	                attributes: extend({}, button.attributes, {
	                    "aria-label": messages[button.name],
	                    "title": messages[button.name],
	                    "data-command": button.command,
	                    "data-options": button.options
	                })
	            });
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

	        _change: function (ev) {
	            var command = $(ev.target).data("command"),
	                options = $(ev.target).data("options");

	            options = extend({}, options, { value: $(ev.target).val() });

	            if (!command) {
	                return;
	            }

	            this.action({
	                command: command,
	                options: options
	            });
	        },

	        isToolEnabled: function(toolName) {
	            var that = this,
	                options = that.options,
	                found = false;

	            for(var i = 0; i < options.items.length; i++) {
	                if (options.items[i].name == toolName) {
	                    found = true;
	                    break;
	                }
	            }

	            return options.items[toolName] || found;
	        },

	        action: function (args) {
	            this.trigger(ACTION, args);
	        },

	        destroy: function () {
	            if(this.fileManagerSearch) {
	                this.fileManagerSearch.destroy();
	            }

	            ToolBar.fn.destroy.call(this);
	        }
	    });

	    var SearchTool = Item.extend({
	        init: function(options, toolbar) {
	            var that = this,
	                element = $("<div class='k-filemanager-search-tool'></div>"),
	                input = $("<input class='k-input-inner' autocomplete='off' />"),
	                icon = $("<span class='k-input-icon k-icon k-i-search'/>"),
	                inputWrapper = $('<span class="k-searchbox k-input k-input-md k-rounded-md k-input-solid"></span>');


	            that.element = element;
	            that.input = input;
	            that.icon = icon;
	            that.options = options;
	            that.options.type = "fileManagerSearch";
	            that.toolbar = toolbar;

	            that.attributes();
	            that.renderIcon();
	            that.addUidAttr();
	            that.addIdAttr();
	            that.addOverflowAttr();

	            that.input.attr({
	                placeholder: that.options.text,
	                title: that.options.text
	            });

	            inputWrapper.append(icon).append(that.input);
	            that.element.append(inputWrapper);

	            that._bindEvents();
	            that.toolbar.fileManagerSearch = that;
	        },
	        attributes: function () {
	            if (this.options.attributes) {
	                this.input.attr(this.options.attributes);
	            }
	        },
	        renderIcon: function() {
	            if (this.options.icon) {
	                this.icon.addClass("k-icon k-i-" + this.options.icon);
	            }
	        },
	        _bindEvents: function(){
	            this._inputHandler = proxy(this._input, this);
	            this.input.on("input" + NS, this._inputHandler);
	        },
	        _input: function (ev) {
	            this.toolbar.trigger(CHANGE, {target: ev.target});
	        },
	        destroy: function(){
	            this.element.off(NS);
	        }
	    });

	    kendo.toolbar.registerComponent("fileManagerSearch", SearchTool);

	    var FileManagerDetailsToggle = Item.extend({
	        init: function(options, toolbar) {
	            var that = this,
	                element = $("<div class='k-filemanager-details-toggle'></div>"),
	                label = $("<label>" + options.text + "</label>"),
	                switchElement = $("<input title='"+ options.text +"' />");

	            that.element = element;
	            that.input = switchElement;
	            that.label = label;
	            that.options = options;
	            that.toolbar = toolbar;

	            that.attributes();
	            that.addUidAttr();
	            that.addIdAttr();
	            that.addOverflowAttr();

	            that.element.append(that.label);
	            that.element.append(that.input);

	            that.input.attr("aria-label", options.text);

	            that.switchInstance = new kendo.ui.Switch(that.input, {
	                change: proxy(that._change, that),
	                messages: {
	                    checked: toolbar.options.messages.detailsChecked,
	                    unchecked: toolbar.options.messages.detailsUnchecked
	                }
	            });

	            that.label.on(CLICK + NS, proxy(that._click, that));

	            that.toolbar.fileManagerDetailsToggle = that;
	        },
	        _change: function (ev) {
	            this.toolbar.trigger(CHANGE, { target: ev.sender.wrapper.parent() });
	        },
	        _click: function(ev) {
	            this.switchInstance.toggle();

	            this.toolbar.trigger(CHANGE, { target: $(ev.target).parent() });
	        },
	        destroy: function() {
	            this.element.off(NS);
	        }
	    });

	    kendo.toolbar.registerComponent("fileManagerDetailsToggle", FileManagerDetailsToggle);

	    extend(kendo.ui.filemanager, {
	        ToolBar: FileManagerToolBar
	    });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ }),

/***/ 1039:
/***/ (function(module, exports) {

	module.exports = require("../kendo.toolbar");

/***/ }),

/***/ 1040:
/***/ (function(module, exports) {

	module.exports = require("../kendo.switch");

/***/ })

/******/ });