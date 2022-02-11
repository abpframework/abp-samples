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

	__webpack_require__(1052);
	module.exports = __webpack_require__(1052);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

	module.exports = require("../kendo.draganddrop");

/***/ }),

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20), __webpack_require__(1053), __webpack_require__(1054), __webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	    (function ($, undefined) {
	        var kendo = window.kendo,
	            extend = $.extend,
	            proxy = $.proxy,
	            Class = kendo.Class,

	            NS = ".k-imageeditor-pane",

	            CLICK = "click";

	        var paneStyles = {
	            form: "k-imageeditor-pane-form",
	            button: "k-imageeditor-pane-button",
	            confirmButton: "k-imageeditor-pane-confirm-button",
	            cropOverlay: "k-imageeditor-crop-overlay",
	            crop: "k-imageeditor-crop",
	            resizeHandle: "k-resize-handle",
	            resizeHandlePrefix: "k-resize-"
	        };

	        var round = function(f) {
	            return Math.round(f * 1000) / 1000;
	        };

	        var Pane = Class.extend({
	            init: function (imageeditor) {
	                var that = this;

	                that.imageeditor = imageeditor;

	                if (that.imageeditor.currentPaneTool) {
	                    that.imageeditor.currentPaneTool.destroy();
	                }

	                that.element = $("<div></div>").addClass(paneStyles.form);
	            },
	            open: function () {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    commonMessages = imageeditor.options.messages.common;

	                imageeditor.paneWrapper.append(that.element);
	                that.formWidget = new kendo.ui.Form(that.element, extend(that.formSettings(), {
	                    buttonsTemplate: kendo.format("<button class='{0} k-button k-button-md k-rounded-md k-button-solid k-button-solid-base' data-action='cancel'><span class='k-button-text'>{2}</span></button>" +
	                                                    "<button class='{0} {1} k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary' data-action='confirm'><span class='k-button-text'>{3}</span></button>",
	                                                    paneStyles.button,
	                                                    paneStyles.confirmButton,
	                                                    commonMessages.cancel,
	                                                    commonMessages.confirm)
	                }));

	                that.bindButtonEvents();
	                imageeditor.paneWrapper.show();
	                imageeditor.currentPaneTool = that;
	            },
	            bindButtonEvents: function () {
	                var that = this,
	                    formWidget = that.formWidget,
	                    buttons = formWidget.element.find("." + paneStyles.button);

	                that._clickHandler = proxy(that._click, that);

	                buttons.on(CLICK + NS, that._clickHandler);
	            },
	            _click: function (ev) {
	                var that = this,
	                    target = $(ev.target).closest("." + paneStyles.button),
	                    action = target.data("action");

	                if(that[action]) {
	                    that[action]();
	                }
	            },
	            cancel: function () {
	                this.destroy();
	            },
	            confirm: function () {
	                window.console.error("Pane's confirm method is not implemented!");
	                this.destroy();
	            },
	            refresh: function () {
	            },
	            destroy: function () {
	                var that = this,
	                    imageeditor = that.imageeditor;

	                that.formWidget.element.find("." + paneStyles.button).off(NS);
	                that.formWidget.destroy();
	                imageeditor.paneWrapper.html("");
	                imageeditor.paneWrapper.hide();
	                delete imageeditor.currentPaneTool;
	            }
	        });

	        var CropPane = Pane.extend({
	            init: function (imageeditor) {
	                var that = this;
	                Pane.fn.init.call(that, imageeditor);
	                that.buildCropModel();
	                that.canvasUI();
	            },
	            confirm: function () {
	                var that = this,
	                    model = that.formWidget._model.toJSON();

	                that.destroy();

	                that.imageeditor.executeCommand({command: "CropImageEditorCommand", options: model });
	            },
	            formSettings: function () {
	                var that = this,
	                    cropMessages = that.imageeditor.options.messages.panes.crop,
	                    commonMessages = that.imageeditor.options.messages.common,
	                    aspectRatioItems = cropMessages.aspectRatioItems,
	                    aspectRatioDS = [];

	                if(aspectRatioItems) {
	                    for (var key in aspectRatioItems) {
	                        aspectRatioDS.push({value: key, text: aspectRatioItems[key]});
	                    }
	                } else {
	                    aspectRatioDS = [
	                        { value: "originalRatio", text: "Original ratio"},
	                        { value: "1:1", text: "1:1 (Square)"},
	                        { value: "4:5", text: "4:5 (8:10)"},
	                        { value: "5:7", text: "5:7"},
	                        { value: "2:3", text: "2:3 (4:6)"},
	                        { value: "16:9", text: "16:9"}
	                    ];
	                }

	                return {
	                    formData: that._model,
	                    change: proxy(that.onChange, that),
	                    items: [{
	                        type: "group",
	                        label: cropMessages.title || "Crop Image",
	                        layout: "grid",
	                        grid: { cols: 2, gutter: "0 8px" },
	                        items: [{
	                                label: cropMessages.aspectRatio || "Aspect ratio:",
	                                field: "aspectRatio",
	                                editor: "DropDownList",
	                                editorOptions: {
	                                    dataValueField: "value",
	                                    dataTextField: "text",
	                                    dataSource: aspectRatioDS
	                                },
	                                colSpan: 2
	                            }, {
	                                label: cropMessages.orientation,
	                                field: "orientation",
	                                editor: $.proxy(that._orientationEditor, that),
	                                colSpan: 2
	                            }, {
	                                label: commonMessages.width || "Width:",
	                                field: "width",
	                                attributes: { style: "max-width: 100px;" },
	                                editor: "NumericTextBox",
	                                editorOptions: {
	                                    format: "n0",
	                                    max: that._model.width,
	                                    min: 0
	                                },
	                                colSpan: 1
	                            }, {
	                                label: commonMessages.height || "Height:",
	                                field: "height",
	                                attributes: { style: "max-width: 100px;" },
	                                editor: "NumericTextBox",
	                                editorOptions: {
	                                    format: "n0",
	                                    max: that._model.height,
	                                    min: 0
	                                },
	                                colSpan: 1
	                            }, {
	                                label: commonMessages.lockAspectRatio || "Lock aspect ratio",
	                                field: "lockAspectRatio",
	                                colSpan: 2
	                            }
	                        ]
	                    }]
	                };
	            },
	            _orientationEditor: function(container, options){
	                var that = this,
	                    cropMessages = that.imageeditor.options.messages.panes.crop,
	                    value = options.model[options.field];

	                that._orientationWidget = $("<div name='" + options.field + "'></div>")
	                    .appendTo(container)
	                    .kendoButtonGroup({
	                        items: [
	                            { text: cropMessages.portrait || "Portrait", attributes: { "data-value": "portrait" }, selected: value === "portrait" },
	                            { text: cropMessages.landscape || "Landscape", attributes: { "data-value": "landscape" }, selected : value === "landscape" }
	                        ],
	                        select: function (ev) {
	                            var value = ev.sender.wrapper.find(".k-selected").data("value");
	                            options.model.set(options.field, value);
	                        }
	                    }).data("kendoButtonGroup");
	            },
	            buildCropModel: function () {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    canvas = imageeditor.getCanvasElement(),
	                    width = canvas.width,
	                    height = canvas.height;

	                    that._model = {
	                        top: 0,
	                        left: 0,
	                        aspectRatio: "originalRatio",
	                        width: width,
	                        height: height,
	                        orientation: (width - height < 0) ? "portrait" : "landscape",
	                        lockAspectRatio: true
	                    };
	            },
	            canvasUI: function () {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    canvasContainer = that.imageeditor.canvasContainer,
	                    cropOverlay = $("<div></div>").addClass(paneStyles.cropOverlay),
	                    cropElement = $("<div></div>").addClass(paneStyles.crop),
	                    handle = "<span class='" + paneStyles.resizeHandle + "'></span>",
	                    handles = [ "nw", "n", "ne", "w", "e", "sw", "s", "se" ],
	                    zoomLevel = imageeditor.getZoomLevel();

	                for (var i = 0; i < handles.length; i++) {
	                    var handleElm = $(handle)
	                        .addClass(paneStyles.resizeHandlePrefix + handles[i])
	                        .attr("data-orientation", handles[i]);

	                    that._initResizeHandle(handleElm);

	                    cropElement.append(handleElm);
	                }

	                that.cropElement = cropElement;

	                that._canvasUI = cropOverlay
	                    .append(cropElement)
	                    .appendTo(canvasContainer);

	                var width = Math.round(that._model.width * zoomLevel);
	                var height = Math.round(that._model.height * zoomLevel);
	                var borderWidth = parseInt(that.cropElement.css("border-top-width"), 10);

	                that.cropElement.css({
	                    width: width,
	                    height: height,
	                    backgroundImage: "url('"+ imageeditor._image.src + "')",
	                    backgroundSize: kendo.format("{0}px {1}px", width, height),
	                    backgroundClip: "content-box",
	                    backgroundPosition: kendo.format("-{0}px -{0}px", borderWidth)
	                });

	                that.cropElement.kendoDraggable({
	                    ignore: "." + paneStyles.resizeHandle,
	                    drag: function (ev) {
	                        that._adjustTopLeft(ev.target.offsetTop + ev.y.delta, ev.target.offsetLeft + ev.x.delta);
	                    }
	                });
	            },
	            refresh: function () {
	                var that = this,
	                    newModel = that.formWidget._model,
	                    zoomLevel = that.imageeditor.getZoomLevel(),
	                    width = Math.round(newModel.width * zoomLevel),
	                    height = Math.round(newModel.height * zoomLevel),
	                    top = Math.round(newModel.top * zoomLevel),
	                    left = Math.round(newModel.left * zoomLevel),
	                    borderWidth = parseInt(that.cropElement.css("border-top-width"), 10);

	                that.cropElement.css({
	                    top: top,
	                    left: left,
	                    width: width,
	                    height: height,
	                    backgroundSize: kendo.format("{0}px {1}px", that._model.width * zoomLevel, that._model.height * zoomLevel),
	                    backgroundPosition: kendo.format("-{0}px -{1}px", left + borderWidth, top + borderWidth)
	                });
	            },
	            _initResizeHandle: function (handle) {
	                var that = this;

	                handle.kendoDraggable({
	                    drag: function (ev) {
	                        var $target = $(ev.sender.element),
	                            newModel = that.formWidget._model,
	                            oldModel = that._model,
	                            orientation = $target.data("orientation"),
	                            adjustments = {},
	                            zoomLevel = that.imageeditor.getZoomLevel(),
	                            correctedLeft = newModel.left * zoomLevel,
	                            correctedTop = newModel.top * zoomLevel;

	                        if (orientation.indexOf("w") >= 0) {
	                            adjustments.left = that.cropElement[0].offsetLeft + ev.x.delta;
	                            adjustments.width = that.cropElement[0].offsetWidth - ev.x.delta;
	                        } else if (orientation.indexOf("e") >= 0) {
	                            adjustments.width = that.cropElement[0].offsetWidth + ev.x.delta;
	                        }

	                        if (orientation.indexOf("n") >= 0) {
	                            adjustments.top = that.cropElement[0].offsetTop + ev.y.delta;
	                            adjustments.height = that.cropElement[0].offsetHeight - ev.y.delta;
	                        } else if(orientation.indexOf("s") >= 0) {
	                            adjustments.height = that.cropElement[0].offsetHeight + ev.y.delta;
	                        }

	                        if(adjustments.width && ((adjustments.left || correctedLeft) + adjustments.width <= oldModel.width * zoomLevel)) {
	                            newModel.set("width", Math.round(adjustments.width / zoomLevel));
	                        }

	                        if(adjustments.height && ((adjustments.top || correctedTop) + adjustments.height <= oldModel.height * zoomLevel)) {
	                            newModel.set("height", Math.round(adjustments.height / zoomLevel));
	                        }

	                        if(adjustments.top || adjustments.left) {
	                            that._adjustTopLeft(adjustments.top, adjustments.left);
	                        }
	                    }
	                });
	            },
	            _adjustTopLeft: function (top, left, compare) {
	                var that = this,
	                    compareModel = compare || that.formWidget._model,
	                    newModel = that.formWidget._model,
	                    oldModel = that._model,
	                    zoomLevel = that.imageeditor.getZoomLevel();

	                if(top >= 0 && (top / zoomLevel) + compareModel.height <= oldModel.height) {
	                    newModel.set("top", Math.round(top / zoomLevel));
	                }

	                if(left >= 0 && (left / zoomLevel) + compareModel.width <= oldModel.width) {
	                    newModel.set("left", Math.round(left / zoomLevel));
	                }
	            },
	            onChange: function (ev) {
	                var that = this,
	                    zoomLevel = that.imageeditor.getZoomLevel(),
	                    newModel = ev.sender._model,
	                    oldModel = that._model,
	                    maxWidth = oldModel.width,
	                    maxHeight = oldModel.height,
	                    originalRatio = oldModel.width + ":" + oldModel.height,
	                    gcd = that._gcd(oldModel.width, oldModel.height);

	                originalRatio = oldModel.width/gcd + ":" + oldModel.height/gcd;

	                if(ev.field === "aspectRatio" && ev.value === "originalRatio") {
	                    newModel.set("top", 0);
	                    newModel.set("left", 0);
	                    newModel.set("orientation", oldModel.orientation);
	                    newModel.set("width", oldModel.width);
	                    newModel.set("height", oldModel.height);
	                } else if (ev.field === "orientation") {
	                    var tempModel = extend({}, newModel, {
	                        width: newModel.height,
	                        height: newModel.width
	                    });

	                    var newSize = that._calcSize(tempModel, originalRatio, maxWidth, maxHeight);

	                    newModel.set("width", newSize.width);
	                    newModel.set("height", newSize.height);
	                    that._orientationWidget.select(ev.value === "portrait" ? 0 : 1);
	                } else if(newModel.lockAspectRatio) {
	                    var force = ev.field;
	                    var size = that._calcSize(newModel, originalRatio, maxWidth, maxHeight, force);
	                    newModel.set("width", size.width);
	                    newModel.set("height", size.height);
	                }

	                var width = Math.round(newModel.width * zoomLevel);
	                var height = Math.round(newModel.height * zoomLevel);
	                var top = Math.round(newModel.top * zoomLevel);
	                var left = Math.round(newModel.left * zoomLevel);
	                var borderWidth = parseInt(that.cropElement.css("border-top-width"), 10);

	                that.cropElement.css({
	                    top: top,
	                    left: left,
	                    width: width,
	                    height: height,
	                    backgroundPosition: kendo.format("-{0}px -{1}px", left + borderWidth, top + borderWidth)
	                });
	            },
	            _calcSize: function (model, originalRatio, maxWidth, maxHeight, force) {
	                var width = Math.min(model.width, maxWidth),
	                    height = Math.min(model.height, maxHeight),
	                    isPortrait = model.orientation === "portrait",
	                    ratios = model.aspectRatio;

	                if(ratios.indexOf(":") < 0) {
	                    ratios = originalRatio;
	                }

	                ratios = ratios.split(":").map(function (value) {
	                    return parseInt(value, 10);
	                });

	                var wRatio = isPortrait ? Math.min(ratios[0], ratios[1]) : Math.max(ratios[0], ratios[1]);
	                var hRatio = !isPortrait ? Math.min(ratios[0], ratios[1]) : Math.max(ratios[0], ratios[1]);
	                var expectedRatio = round(wRatio/hRatio);
	                var realRatio = round(width/height);

	                var sizeByRatio = {
	                    width: Math.round(height * expectedRatio),
	                    height: Math.round(width / expectedRatio)
	                };

	                if (force === "width") {
	                    return {
	                        width: width,
	                        height: sizeByRatio.height
	                    };
	                }

	                if (force === "height") {
	                    return {
	                        width: sizeByRatio.width,
	                        height: height
	                    };
	                }

	                if (realRatio > expectedRatio) {
	                    width = sizeByRatio.width;
	                } else if (realRatio < expectedRatio){
	                    height = sizeByRatio.height;
	                }

	                return {
	                    width: width,
	                    height: height
	                };
	            },
	            _gcd: function (a, b) {
	                return (b === 0) ? a : this._gcd (b, a%b);
	            },
	            destroy: function () {
	                kendo.destroy(this._canvasUI);
	                this._canvasUI.remove();
	                Pane.fn.destroy.call(this);
	            }
	        });

	        var ResizePane = Pane.extend({
	            init: function (imageeditor) {
	                Pane.fn.init.call(this, imageeditor);
	                this.buildResizeModel();
	            },
	            confirm: function () {
	                var that = this,
	                    originalWidth = that._model.width,
	                    originalHeight = that._model.height,
	                    model = that.formWidget._model.toJSON();

	                if(model.measure === "percents") {
	                    model.width = originalWidth * (model.width / 100);
	                    model.height = originalHeight * (model.height / 100);
	                }

	                that.imageeditor.executeCommand({command: "ResizeImageEditorCommand", options: model });
	                that.destroy();
	            },
	            formSettings: function () {
	                var that = this,
	                    resizeMessages = that.imageeditor.options.messages.panes.resize,
	                    commonMessages = that.imageeditor.options.messages.common;

	                return {
	                    formData: that._model,
	                    change: proxy(that.onChange, that),
	                    items: [{
	                        type: "group",
	                        label: resizeMessages.title || "Resize image",
	                        layout: "grid",
	                        grid: { cols: 2, gutter: "0 8px" },
	                        items: [{
	                            label: commonMessages.width || "Width:",
	                            field: "width",
	                            attributes: { style: "max-width: 100px;" },
	                            editor: "NumericTextBox",
	                            editorOptions: {
	                                format: "n0",
	                                min: 0
	                            },
	                            colSpan: 1
	                        }, {
	                            field: "measureW",
	                            editor: "DropDownList",
	                            attributes: { style: "max-width: 100px;" },
	                            label: { text: "&nbsp;", encoded: false },
	                            editorOptions: {
	                                dataTextField: "text",
	                                dataValueField: "value",
	                                dataSource: [
	                                    { text: resizeMessages.pixels || "Pixels", value: "pixels" },
	                                    { text: resizeMessages.percents || "Percents", value: "percents" }
	                                ]
	                            },
	                            colSpan: 1
	                        }, {
	                            label: commonMessages.height || "Height:",
	                            field: "height",
	                            attributes: { style: "max-width: 100px;" },
	                            editor: "NumericTextBox",
	                            editorOptions: {
	                                format: "n0",
	                                min: 0
	                            },
	                            colSpan: 1
	                        }, {
	                            field: "measureH",
	                            label: { text: "&nbsp;", encoded: false },
	                            attributes: { style: "max-width: 100px;" },
	                            editor: "DropDownList",
	                            editorOptions: {
	                                dataTextField: "text",
	                                dataValueField: "value",
	                                dataSource: [
	                                    { text: resizeMessages.pixels || "Pixels", value: "pixels" },
	                                    { text: resizeMessages.percents || "Percents", value: "percents" }
	                                ]
	                            },
	                            colSpan: 1
	                        }, {
	                            label: commonMessages.lockAspectRatio || "Lock aspect ratio",
	                            field: "lockAspectRatio",
	                            colSpan: 2
	                        }]
	                    }]
	                };
	            },
	            buildResizeModel: function () {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    canvas = imageeditor.getCanvasElement(),
	                    width = canvas.width,
	                    height = canvas.height;

	                    that._model = {
	                        width: width,
	                        height: height,
	                        measure: "pixels",
	                        measureW: "pixels",
	                        measureH: "pixels",
	                        lockAspectRatio: true,
	                        ratio: round(width/height)
	                    };
	            },
	            onChange: function (ev) {
	                var that = this,
	                    newModel = ev.sender._model,
	                    aspectRatioLocked = newModel.lockAspectRatio;

	                if (ev.field === "measureW" || ev.field === "measureH") {
	                    newModel.set("measureW", ev.value);
	                    newModel.set("measureH", ev.value);
	                    newModel.set("measure", ev.value);
	                } else if (ev.field === "measure") {
	                    that.resetNumericsTo(ev.value);
	                } else if (ev.field === "width" && aspectRatioLocked && !that._preventChange) {
	                    newModel.set("height", newModel.width / newModel.ratio);
	                } else if (ev.field === "height" && aspectRatioLocked && !that._preventChange) {
	                    newModel.set("width", newModel.height * newModel.ratio);
	                }

	                newModel.set("ratio", round(newModel.width/newModel.height));
	            },
	            resetNumericsTo: function (type) {
	                var that = this,
	                    originalWidth = that._model.width,
	                    originalHeight = that._model.height,
	                    formWidget = that.formWidget,
	                    model = formWidget._model,
	                    widthNumeric = formWidget.element.find("[name=width]").data("kendoNumericTextBox"),
	                    heightNumeric = formWidget.element.find("[name=height]").data("kendoNumericTextBox"),
	                    isPercent = type === "percents",
	                    options = {
	                        percents: {
	                            format: "#\\\%"
	                        },
	                        pixels: {
	                            format: "n0"
	                        }
	                    };



	                widthNumeric.setOptions(options[type]);
	                heightNumeric.setOptions(options[type]);

	                that._preventChange = true;
	                model.set("width", isPercent ? (originalWidth / widthNumeric.value()) * 100 : originalWidth * (widthNumeric.value() / 100));
	                model.set("height", isPercent ? (originalHeight / heightNumeric.value()) * 100 : originalHeight * (heightNumeric.value() / 100));
	                that._preventChange = false;
	            }
	        });

	        extend(kendo.ui.imageeditor, {
	            ImageEditorPane: Pane,
	            panes: {
	                crop: CropPane,
	                resize: ResizePane
	            }
	    });

	    })(window.kendo.jQuery);

	    return window.kendo;

	}, __webpack_require__(3));

/***/ }),

/***/ 1053:
/***/ (function(module, exports) {

	module.exports = require("../kendo.form");

/***/ }),

/***/ 1054:
/***/ (function(module, exports) {

	module.exports = require("../kendo.buttongroup");

/***/ })

/******/ });