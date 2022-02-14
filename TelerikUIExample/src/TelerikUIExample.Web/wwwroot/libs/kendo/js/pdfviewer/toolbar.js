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

	__webpack_require__(1644);
	module.exports = __webpack_require__(1644);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = require("../kendo.combobox");

/***/ }),

/***/ 1039:
/***/ (function(module, exports) {

	module.exports = require("../kendo.toolbar");

/***/ }),

/***/ 1644:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1039), __webpack_require__(6), __webpack_require__(1645)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var kendo = window.kendo,
	        extend = $.extend,
	        proxy = $.proxy,
	        ACTION = "action",
	        KEYDOWN = "keydown",
	        CLICK = kendo.support.click,
	        CHANGE = "change",
	        ZOOMIN = "zoomin",
	        ZOOMOUT = "zoomout",
	        Item = kendo.toolbar.Item,
	        ToolBar = kendo.ui.ToolBar,
	        PREDEFINED_ZOOM_VALUES = {
	            auto: "auto",
	            actual: "actual",
	            fitToWidth: "fitToWidth",
	            fitToPage: "fitToPage"
	        },
	        styles = {
	            zoomOutIcon: "k-i-zoom-out",
	            zoomInIcon: "k-i-zoom-in",
	            zoomButtons: "k-button-flat k-button-flat-base",
	            zoomOverflowButtons: "k-button-solid k-button-solid-base k-overflow-button",
	            overflowHidden: "k-overflow-hidden"
	        };

	    var ZOOM_BUTTON_TEMPLATE = kendo.template('<a href="\\#" aria-label="#=text#" title="#=text#" data-command="#=command#" class="k-button k-button-md k-rounded-md # if(!showText) { # k-icon-button # } # #=className#">' +
	            '<span class="k-button-icon k-icon #= iconClass #"></span> ' +
	            '# if(showText) { #' +
	                '<span class="k-button-text">#= text #</span> ' +
	            '# } #' +
	        '</a>');
	    var ZOOM_COMBOBOX_TEMPLATE = kendo.template('<select title="#=zoomLevel#" aria-label="#=zoomLevel#">' +
	        '#for(var zoomIndex in zoomLevels){#' +
	            '# var zoomLevel = zoomLevels[zoomIndex]; #' +
	            '<option value="#= zoomLevel.percent || (zoomLevel + "%") #">${zoomLevel.text ? zoomLevel.text : zoomLevel + "%"}</option>' +
	        '#}#'  +
	    '</select>');

	    var DefaultTools = {
	        pager: {
	            type: "pager",
	            overflow: "never",
	            command: "PageChangeCommand"
	        },
	        spacer: { type: "spacer" },
	        zoom: {
	            type: "zoom",
	            command: "ZoomCommand",
	            zoomInOut: true,
	            combobox: { zoomLevels: [50, 100, 150, 200, 300, 400] },
	            enable: false,
	            attributes: { "class": "k-button-group" }
	        },
	        toggleSelection: {
	            type: "buttonGroup",
	            attributes: { "class": "k-toggle-selection-group" },
	            buttons: [
	                {
	                    togglable: true,
	                    text: "Enable Selection",
	                    command: "EnableSelectionCommand",
	                    icon: "cursor",
	                    showText: "overflow",
	                    name: "toggleSelection",
	                    group: "toggle-pan"
	                }, {
	                    togglable: true,
	                    text: "Enable Panning",
	                    command: "EnablePanCommand",
	                    icon: "hand",
	                    showText: "overflow",
	                    name: "togglePan",
	                    group: "toggle-pan",
	                    selected: true
	                }
	            ]
	        },
	        spacer2: { type: "spacer" },
	        search: {
	            type: "button",
	            text: "Search",
	            command: "OpenSearchCommand",
	            icon: "search",
	            name: "search",
	            showText: "overflow",
	            enable: false
	        },
	        open: {
	            type: "button",
	            text: "Open",
	            showText: "overflow",
	            name: "open",
	            icon: "folder-open",
	            command: "OpenCommand"
	        },
	        download: {
	            type: "button",
	            text: "Download",
	            showText: "overflow",
	            name: "download",
	            icon: "download",
	            command: "DownloadCommand",
	            enable: false
	        },
	        print: {
	            type: "button",
	            text: "Print",
	            showText: "overflow",
	            name: "print",
	            icon: "print",
	            command: "PrintCommand",
	            enable: false
	        }
	    };

	    var AllTools = extend({}, DefaultTools, {
	        exportAs: { type: "button", text: "Export", showText: "overflow", name: "exportAs", icon: "image-export", command: "ExportCommand" }
	    });

	    var ToolbarPager = Item.extend({
	        init: function(options, toolbar) {
	            var pagerElement = $("<div />");

	            this.options = extend(true, options, toolbar.options.pager);

	            this.toolbar = toolbar;

	            this.toolbar.pager = new kendo.pdfviewer.Pager(pagerElement, extend({}, options, {
	                change: proxy(this._change, this)
	            }));

	            this.element = pagerElement;
	            this.element.on(KEYDOWN, proxy(this._keydown, this));

	            this.attributes();
	            this.addUidAttr();
	            this.addOverflowAttr();
	        },
	        _change: function (e) {
	            if (this.options.change && this.options.change(e.page))
	            {
	                return;
	            }

	            this.toolbar.action({
	                command: "PageChangeCommand",
	                options: {
	                    value: e.page
	                }
	            });
	        },
	        _keydown: function (e) {
	            var that = this,
	                target = $(e.target),
	                keyCode = e.keyCode,
	                children = that.element.find(":kendoFocusable"),
	                targetIndex = children.index(target),
	                direction = e.shiftKey ? -1 : 1,
	                keys = kendo.keys;

	            if (keyCode === keys.TAB && children[targetIndex + direction]) {
	                children[targetIndex + direction].focus();
	                e.preventDefault();
	                e.stopPropagation();
	            } else if (keyCode === keys.RIGHT && children[targetIndex + 1]) {
	                children[targetIndex + 1].focus();
	                e.preventDefault();
	                e.stopPropagation();
	            } else if (keyCode === keys.LEFT && children[targetIndex - 1]) {
	                children[targetIndex - 1].focus();
	                e.preventDefault();
	                e.stopPropagation();
	            }
	        }
	    });

	    kendo.toolbar.registerComponent("pager", ToolbarPager);

	    function appendZoomButtons (element, messages, isOverflow) {
	        var className = isOverflow ? styles.zoomOverflowButtons : styles.zoomButtons;

	        element.append(ZOOM_BUTTON_TEMPLATE({
	            text: messages.zoomOut,
	            command: ZOOMOUT,
	            iconClass: styles.zoomOutIcon,
	            showText: isOverflow,
	            className: className
	        }));
	        element.append(ZOOM_BUTTON_TEMPLATE({
	            text: messages.zoomIn,
	            command: ZOOMIN,
	            iconClass:  styles.zoomInIcon,
	            showText: isOverflow,
	            className: className
	        }));
	    }

	    var ToolBarZoom = Item.extend({
	        init: function(options, toolbar) {
	            this._init(options, toolbar);
	            this.toolbar.zoom = this;

	            if (toolbar.options.scale)
	            {
	                this._initValue = toolbar.options.scale * 100 + "%";
	            }

	            this._appendElements();

	            this._click = kendo.throttle(
	                this._click.bind(this),
	                200
	            );
	            this._keydown = kendo.throttle(
	                this._keydown.bind(this),
	                200
	            );

	            this.element.on(CLICK, ".k-button", this._click);
	            this.element.on(KEYDOWN, ".k-button", this._keydown);

	            this.attributes();
	            this.addUidAttr();
	            this.addOverflowAttr();
	            this.enable(options.enable);
	        },

	        _init: function (options, toolbar) {
	            var zoomElement = $("<div />");

	            this.options = extend(true, options, {
	                messages: toolbar.options.messages.zoom
	            });

	            this.toolbar = toolbar;
	            this.element = zoomElement;
	        },

	        _appendElements: function () {
	            var options = this.options;

	            if (options.zoomInOut) {
	                appendZoomButtons(this.element, options.messages, false);
	            }

	            if (options.combobox) {
	                this._buildComboBox();
	            }
	        },

	        _buildComboBox: function () {
	            var that = this,
	                combobox,
	                messages = that.options.messages,
	                comboOptions = that.options.combobox,
	                zoomLevels = [{
	                    percent: PREDEFINED_ZOOM_VALUES.auto,
	                    text: messages.autoWidth
	                }, {
	                    percent: PREDEFINED_ZOOM_VALUES.actual,
	                    text: messages.actualWidth
	                }, {
	                    percent: PREDEFINED_ZOOM_VALUES.fitToWidth,
	                    text: messages.fitToWidth
	                }, {
	                    percent: PREDEFINED_ZOOM_VALUES.fitToPage,
	                    text: messages.fitToPage
	                }];

	            zoomLevels = zoomLevels.concat(comboOptions.zoomLevels);

	            combobox = $(ZOOM_COMBOBOX_TEMPLATE({
	                zoomLevels: zoomLevels,
	                zoomLevel: messages.zoomLevel
	            }));

	            if (!kendo.support.mobileOS) {
	                combobox = combobox.kendoComboBox(extend({
	                    autoWidth: true,
	                    clearButton: false,
	                    value: that._initValue
	                }, comboOptions)).getKendoComboBox();

	                that.element.append(combobox.wrapper);
	                that.combobox = combobox;
	                that._currentValue = combobox.value();
	            } else {
	                that.element.append(combobox);
	            }

	            combobox.bind(CHANGE, kendo.throttle(that.change.bind(that), 300));
	        },

	        change: function (e) {
	            var value = e.sender ? e.sender.value() : e.target.value,
	                parsedValue;

	            if (value.toString().match(/^[0-9]+%?$/)) {
	                parsedValue = parseInt(value.replace('%', ''), 10) / 100;
	            } else if (!PREDEFINED_ZOOM_VALUES[value]){
	                if (this.combobox)
	                {
	                    this.combobox.value(this._currentValue);
	                }
	                e.preventDefault();
	                return;
	            }

	            this._currentValue = value;
	            this.toolbar.action({
	                command: "ZoomCommand",
	                options: {
	                    scale: parsedValue || value
	                }
	            });
	        },

	        _buttonCommand: function (target) {
	            var button = $(target).closest(".k-button"),
	            command = button.data("command");

	            this.toolbar.action({
	                command: "ZoomCommand",
	                options: {
	                    zoomIn: command === ZOOMIN,
	                    zoomOut: command === ZOOMOUT,
	                    updateComboBox: true
	                }
	            });
	        },

	        _click: function (e) {
	            this._buttonCommand(e.target);
	        },

	        _keydown: function (e) {
	            var target = e.target,
	                keyCode = e.keyCode,
	                keys = kendo.keys,
	                children = this.element.find(":kendoFocusable"),
	                targetIndex = children.index($(target));

	            if (keyCode === keys.ENTER) {
	                this._buttonCommand(target);
	                e.preventDefault();
	            } else if (keyCode === keys.RIGHT && children[targetIndex + 1]) {
	                children[targetIndex + 1].focus();
	                e.preventDefault();
	                e.stopPropagation();
	            } else if (keyCode === keys.LEFT && children[targetIndex - 1]) {
	                children[targetIndex - 1].focus();
	                e.preventDefault();
	                e.stopPropagation();
	            }
	        },

	        enable: function (value) {
	            var element = this.element;

	            element.find(".k-button, select").toggleClass("k-disabled", !value);

	            if (this.combobox) {
	                this.combobox.enable(value);
	            }
	        },

	        destroy: function(){
	            if (this.combobox) {
	                this.combobox.destroy();
	            }
	        }
	    });

	    var ToolBarOverflowZoom = ToolBarZoom.extend({
	        _init: function (options, toolbar) {
	            var zoomElement = $("<li></li>");

	            this.options = extend(true, options, {
	                messages: toolbar.options.messages.zoom
	            });

	            this.toolbar = toolbar;
	            this.element = zoomElement;
	        },
	        _appendElements: function () {
	            var options = this.options;
	            if (options.zoomInOut) {
	                appendZoomButtons(this.element, options.messages, true);
	            }
	        },
	        overflowHidden: function() {
	            this.element.addClass(styles.overflowHidden);
	        }
	    });

	    kendo.toolbar.registerComponent("zoom", ToolBarZoom, ToolBarOverflowZoom);

	    var ViewerToolBar = ToolBar.extend({
	        init: function(element, options) {
	            var that = this;
	            var items = options.items && options.items.length ? options.items : Object.keys(DefaultTools);

	            that.options = options;

	            options.items = that._updateItems(items);

	            ToolBar.fn.init.call(that, element, options);

	            that.bind({
	                click: that._click,
	                toggle: that._click
	            });

	            options.viewer.bind({
	                update: that._update.bind(that)
	            });
	        },
	        events: [
	            ACTION
	        ],
	        _updateItems: function (items) {
	            var that = this;
	            var messages = this.options.messages;

	            return items.map(function (tool) {
	                var isBuiltInTool =  $.isPlainObject(tool) && Object.keys(tool).length === 1 && tool.name;
	                tool = isBuiltInTool ? tool.name : tool;
	                var toolOptions = $.isPlainObject(tool) ? tool : AllTools[tool];
	                var options;
	                var toolName =  toolOptions.name;

	                if (toolOptions.type === "buttonGroup") {
	                    toolOptions.buttons = that._updateItems(toolOptions.buttons);
	                } else if (toolOptions.type !== "pager") {
	                    options = {
	                        name: toolName,
	                        attributes: {
	                            "aria-label": messages[toolName],
	                            "title": messages[toolName],
	                            "data-command": toolOptions.command
	                        },
	                        overflow: toolOptions.overflow,
	                        fillMode: "flat"
	                    };
	                } else {
	                    options = {
	                        overflow: "never"
	                    };
	                }

	                kendo.deepExtend(toolOptions, options);

	                return toolOptions;
	            });
	        },
	        _click: function (e)
	        {
	            var command = $(e.target).data("command");

	            if (!command) {
	                return;
	            }

	            this.action({
	                command: command,
	                options: e.options
	            });
	        },
	        _update: function (e) {
	            var pageOptions = {
	                page: e.page || 1,
	                total: e.total || 1
	            };

	            if (this.zoom) {
	                this.zoom.enable(!e.isBlank);
	                if (e.action === "zoom") {
	                    this._updateZoomComboBox(e.zoom);
	                }
	            }

	            if ((e.action === "pagechange" || e.isBlank) && this.pager) {
	                this.pager.setOptions(pageOptions);
	            }

	            this.enable(this.wrapper.find(".k-toggle-selection-group"), !e.isBlank);

	            this.enable(this.wrapper.find("[data-command='OpenSearchCommand']"), !e.isBlank);
	            this.enable(this.wrapper.find("[data-command='DownloadCommand']"), !e.isBlank);
	            this.enable(this.wrapper.find("[data-command='PrintCommand']"), !e.isBlank);
	        },
	        _updateZoomComboBox: function (value) {
	            var isPredefined = value === PREDEFINED_ZOOM_VALUES.auto ||
	                                value === PREDEFINED_ZOOM_VALUES.actual;

	            if (!isPredefined) {
	                value = Math.round(value * 100) + '%';
	            }

	            if (this.zoom && this.zoom.combobox) {
	                this.zoom._currentValue = value;
	                this.zoom.combobox.value(value);
	            }
	        },
	        action: function (args)
	        {
	            this.trigger(ACTION, args);
	        },
	        destroy: function () {
	            if (this.pager) {
	                this.pager.destroy();
	            }

	            if (this.zoom) {
	                this.zoom.destroy();
	            }
	            ToolBar.fn.destroy.call(this);
	        }
	    });


	    extend(kendo.pdfviewer, {
	        Toolbar: ViewerToolBar,
	        DefaultTools: DefaultTools
	    });
	})(window.kendo.jQuery);

	return window.kendo;
	}, __webpack_require__(3));

/***/ }),

/***/ 1645:
/***/ (function(module, exports) {

	module.exports = require("./pager");

/***/ })

/******/ });