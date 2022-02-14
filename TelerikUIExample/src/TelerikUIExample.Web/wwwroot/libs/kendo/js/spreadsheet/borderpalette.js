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

	__webpack_require__(1652);
	module.exports = __webpack_require__(1652);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

	module.exports = require("../kendo.popup");

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

	module.exports = require("../kendo.colorpicker");

/***/ }),

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(978), __webpack_require__(962) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	    (function(kendo) {

	        var $ = kendo.jQuery;
	        var BORDER_TYPES = [
	            "allBorders",
	            "insideBorders",
	            "insideHorizontalBorders",
	            "insideVerticalBorders",
	            "outsideBorders",
	            "leftBorder",
	            "topBorder",
	            "rightBorder",
	            "bottomBorder",
	            "noBorders"
	        ];

	        var BORDER_PALETTE_MESSAGES = kendo.spreadsheet.messages.borderPalette = {
	            allBorders: "All borders",
	            insideBorders: "Inside borders",
	            insideHorizontalBorders: "Inside horizontal borders",
	            insideVerticalBorders: "Inside vertical borders",
	            outsideBorders: "Outside borders",
	            leftBorder: "Left border",
	            topBorder: "Top border",
	            rightBorder: "Right border",
	            bottomBorder: "Bottom border",
	            noBorders: "No border"
	        };

	        var COLOR_PICKER_MESSAGES = kendo.spreadsheet.messages.colorPicker = {
	            reset: "Reset color",
	            customColor: "Custom color...",
	            apply: "Apply",
	            cancel: "Cancel"
	        };

	        function withPreventDefault(f) {
	            return function(e) {
	                e.preventDefault();
	                return f.apply(this, arguments);
	            };
	        }

	        var ColorChooser = kendo.ui.Widget.extend({
	            init: function(element, options) {
	                kendo.ui.Widget.call(this, element, options);

	                this.element = element;
	                this.color = options.color;

	                this._resetButton();
	                this._colorPalette();
	                this._customColorPalette();
	                this._customColorButton();

	                this.resetButton.on("click", withPreventDefault(this.resetColor.bind(this)));
	                this.customColorButton.on("click", withPreventDefault(this.customColor.bind(this)));
	            },

	            options: {
	                name: "ColorChooser"
	            },

	            events: [
	                "change"
	            ],

	            destroy: function() {
	                kendo.unbind(this.dialog.element.find(".k-action-buttons"));
	                this.dialog.destroy();
	                this.colorPalette.destroy();
	                this.resetButton.off("click");
	                this.customColorButton.off("click");
	            },

	            value: function(value) {
	                if (value !== undefined) {
	                    this.color = value;
	                    this.customColorButton.find(".k-icon").css("background-color", this.color);
	                    this.colorPalette.value(null);
	                    this.flatColorPicker.value(this.color);
	                } else {
	                    return this.color;
	                }
	            },

	            _change: function(value) {
	                this.color = value;
	                this.trigger("change", { value: value });
	            },

	            _colorPalette: function() {
	                var element = $("<div />", {
	                    "class": "k-spreadsheet-color-palette"
	                });

	                var colorPalette = this.colorPalette = $("<div />").kendoColorPalette({
	                    palette: [ //metro palette
	                        "#ffffff", "#000000", "#d6ecff", "#4e5b6f", "#7fd13b", "#ea157a", "#feb80a", "#00addc", "#738ac8", "#1ab39f",
	                        "#f2f2f2", "#7f7f7f", "#a7d6ff", "#d9dde4", "#e5f5d7", "#fad0e4", "#fef0cd", "#c5f2ff", "#e2e7f4", "#c9f7f1",
	                        "#d8d8d8", "#595959", "#60b5ff", "#b3bcca", "#cbecb0", "#f6a1c9", "#fee29c", "#8be6ff", "#c7d0e9", "#94efe3",
	                        "#bfbfbf", "#3f3f3f", "#007dea", "#8d9baf", "#b2e389", "#f272af", "#fed46b", "#51d9ff", "#aab8de", "#5fe7d5",
	                        "#a5a5a5", "#262626", "#003e75", "#3a4453", "#5ea226", "#af0f5b", "#c58c00", "#0081a5", "#425ea9", "#138677",
	                        "#7f7f7f", "#0c0c0c", "#00192e", "#272d37", "#3f6c19", "#750a3d", "#835d00", "#00566e", "#2c3f71", "#0c594f"
	                    ],
	                    value: this.color,
	                    change: function(e) {
	                        this.customColorButton.find(".k-icon").css("background-color", "transparent");
	                        this.flatColorPicker.value(null);
	                        this._change(e.value);
	                    }.bind(this)
	                }).data("kendoColorPalette");

	                element
	                    .append(colorPalette.wrapper)
	                    .appendTo(this.element);
	            },

	            _customColorPalette: function() {
	                var element = $("<div />", {
	                    "class": "k-spreadsheet-window",
	                    "html": "<div></div>" +
	                            "<div class='k-action-buttons'>" +
	                                "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-" + kendo.ns + "bind='click: apply'><span class='k-button-text'>" + COLOR_PICKER_MESSAGES.apply + "</span></button>" +
	                                "<button class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-" + kendo.ns + "bind='click: close'><span class='k-button-text'>" + COLOR_PICKER_MESSAGES.cancel + "</span></button>" +
	                            "</div>"
	                });

	                var dialog = this.dialog = element.appendTo(document.body).kendoWindow({
	                    animation: false,
	                    scrollable: false,
	                    resizable: false,
	                    maximizable: false,
	                    modal: true,
	                    visible: false,
	                    width: "auto",
	                    open: function() {
	                        this.center();
	                    }
	                }).data("kendoWindow");

	                dialog.one("activate", function() {
	                    this.element.find("[" + kendo.attr("role") + "=flatcolorpicker]").data("kendoFlatColorPicker")._view._hueSlider.resize();
	                });

	                var flatColorPicker = this.flatColorPicker = dialog.element.children().first().kendoFlatColorPicker().data("kendoFlatColorPicker");

	                var viewModel = kendo.observable({
	                    apply: function() {
	                        this.customColorButton.find(".k-icon").css("background-color", flatColorPicker.value());
	                        this.colorPalette.value(null);
	                        this._change(flatColorPicker.value());
	                        dialog.close();
	                    }.bind(this),
	                    close: function() {
	                        flatColorPicker.value(null);
	                        dialog.close();
	                    }
	                });

	                kendo.bind(dialog.element.find(".k-action-buttons"), viewModel);
	            },

	            _resetButton: function() {
	                this.resetButton = $("<a role='button' class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-reset-color' href='#'>" +
	                                    "<span class='k-button-icon k-icon k-i-reset-color'></span>" +
	                                    '<span class="k-button-text">' + COLOR_PICKER_MESSAGES.reset + '</span>' +
	                                   "</a>").appendTo(this.element);
	            },

	            _customColorButton: function() {
	                this.customColorButton = $("<a role='button' class='k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-custom-color' href='#'>" +
	                                            "<span class='k-button-icon k-icon'></span>" +
	                                            '<span class="k-button-text">' + COLOR_PICKER_MESSAGES.customColor + '</span>' +
	                                           "</a>").appendTo(this.element);
	            },

	            resetColor: function() {
	                this.colorPalette.value(null);
	                this.flatColorPicker.value(null);
	                this._change(null);
	            },

	            customColor: function() {
	                this.dialog.open();
	            }

	        });

	        var BorderPalette = kendo.ui.Widget.extend({
	            init: function(element, options) {
	                kendo.ui.Widget.call(this, element, options);

	                this.element = element;
	                this.color = "#000";

	                this.element.addClass("k-spreadsheet-border-palette");

	                this._borderTypePalette();
	                this._borderColorPalette();

	                this.element.on("click", ".k-spreadsheet-border-type-palette .k-button", withPreventDefault(this._click.bind(this)));
	            },

	            options: {
	                name: "BorderPalette"
	            },

	            events: [
	                "change"
	            ],

	            destroy: function() {
	                this.colorChooser.destroy();
	                this.element.off("click");
	            },

	            _borderTypePalette: function() {
	                var messages = BORDER_PALETTE_MESSAGES;
	                var buttons = BORDER_TYPES.map(function(type) {
	                    return '<a role="button" title="' + messages[type] + '" aria-label="' + messages[type] + '" href="#" data-border-type="' + type + '" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button">' +
	                                '<span class="k-button-icon k-icon k-i-' + kendo.toHyphens(type) + '"></span>' +
	                           '</a>';
	                }).join("");

	                var element = $("<div />", {
	                    "class": "k-spreadsheet-border-type-palette",
	                    "html": buttons
	                });

	                element.appendTo(this.element);
	            },

	            _borderColorPalette: function() {
	                var element = $("<div />", {
	                    "class": "k-spreadsheet-border-color-palette"
	                });

	                element.appendTo(this.element);

	                this.colorChooser = new ColorChooser(element, {
	                    color: this.color,
	                    change: this._colorChange.bind(this)
	                });
	            },

	            _click: function(e) {
	                this.type = $(e.currentTarget).data("borderType");
	                this.trigger("change", { type: this.type, color: this.color });
	            },

	            _colorChange: function(e) {
	                this.color = e.value;
	                if (this.type) {
	                    this.trigger("change", { type: this.type, color: this.color });
	                }
	            }
	        });

	        kendo.spreadsheet.ColorChooser = ColorChooser;
	        kendo.spreadsheet.BorderPalette = BorderPalette;

	    })(window.kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });