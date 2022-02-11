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

	__webpack_require__(1049);
	module.exports = __webpack_require__(1049);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1050), __webpack_require__(1051)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	    (function ($, undefined) {
	        var kendo = window.kendo,
	            imageeditorNS = kendo.ui.imageeditor,
	            extend = $.extend,
	            proxy = $.proxy,
	            Class = kendo.Class;

	        var Command = Class.extend({
	            init: function (options) {
	                this.options = extend({}, options, this.options);
	                this.imageeditor = options.imageeditor;
	            }
	        });

	        var OpenPaneImageEditorCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    pane = new imageeditorNS.panes[that.options.value](imageeditor);

	                    pane.open();
	            }
	        });

	        var ZoomImageEditorCommand = Command.extend({
	            options: {
	                zoomStep: 0.05,
	                spacing: 20
	            },
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    options = that.options,
	                    value = options.value,
	                    imageeditor = that.imageeditor,
	                    imgHeight = imageeditor._image.height,
	                    currentZoom = imageeditor.getZoomLevel(),
	                    newHeight = imgHeight;

	                    if(!isNaN(value)) {
	                        value = parseFloat(value);
	                    } else if (typeof value === "string") {
	                        value = that._processStringValue(value, currentZoom);
	                    }

	                    newHeight = Math.round(imgHeight * value);

	                    if(newHeight > 0) {
	                        $(imageeditor._canvas).css("height", newHeight);
	                        imageeditor._zoomLevel = value;
	                    }

	                    if (imageeditor.currentPaneTool) {
	                        imageeditor.currentPaneTool.refresh();
	                    }
	            },
	            _processStringValue: function (value, initialZoom) {
	                var that = this,
	                    options = that.options,
	                    imageeditor = that.imageeditor,
	                    imgHeight = imageeditor._image.height,
	                    expectedHeight = imageeditor.canvasWrapper.height() - options.spacing,
	                    zoomStep = options.zoomStep;

	                switch (value) {
	                    case "zoomIn":
	                        return initialZoom + zoomStep;
	                    case "zoomOut":
	                        return initialZoom - zoomStep;
	                    case "fitToScreen":
	                        return Math.round((expectedHeight / imgHeight) * 100) / 100;
	                    default:
	                        return 1;
	                }
	            }
	        });

	        var CropImageEditorCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    options = that.options,
	                    imageeditor = that.imageeditor,
	                    canvas = imageeditor.getCanvasElement(),
	                    ctx = imageeditor.getCurrent2dContext(),
	                    croppedImage = ctx.getImageData(options.left, options.top, options.width, options.height);

	                ctx.clearRect(0, 0, canvas.width, canvas.height);
	                canvas.width = options.width;
	                canvas.height = options.height;
	                ctx.putImageData(croppedImage, 0, 0);

	                imageeditor.drawImage(canvas.toDataURL()).done(function(image){
	                    imageeditor.drawCanvas(image);
	                }).fail(function (ev) {
	                    imageeditor.trigger("error", ev);
	                });
	            }
	        });

	        var ResizeImageEditorCommand = Command.extend({
	            init: function (options) {
	                Command.fn.init.call(this, options);
	            },
	            exec: function () {
	                var that = this,
	                    options = that.options,
	                    imageeditor = that.imageeditor,
	                    canvas = imageeditor.getCanvasElement(),
	                    ctx = imageeditor.getCurrent2dContext(),
	                    image = imageeditor.getCurrentImage();

	                ctx.clearRect(0, 0, canvas.width, canvas.height);
	                canvas.width = options.width;
	                canvas.height = options.height;
	                ctx.drawImage(image, 0, 0, options.width, options.height);

	                imageeditor.drawImage(canvas.toDataURL()).done(function(image){
	                    imageeditor.drawCanvas(image);
	                }).fail(function (ev) {
	                    imageeditor.trigger("error", ev);
	                });
	            }
	        });

	        var UndoImageEditorCommand = Command.extend({
	            exec: function () {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    canvas = imageeditor.getCanvasElement(),
	                    ctx = imageeditor.getCurrent2dContext(),
	                    image = imageeditor.undoStack.pop();

	                if(image) {
	                    imageeditor.redoStack.push(imageeditor.getCurrentImage());
	                    delete imageeditor._image;

	                    ctx.clearRect(0, 0, canvas.width, canvas.height);
	                    canvas.width = image.width;
	                    canvas.height = image.height;
	                    ctx.drawImage(image, 0, 0, image.width, image.height);

	                    imageeditor.drawImage(canvas.toDataURL()).done(function(image){
	                        imageeditor.drawCanvas(image);
	                    }).fail(function (ev) {
	                        imageeditor.trigger("error", ev);
	                    });
	                }
	            }
	        });

	        var RedoImageEditorCommand = Command.extend({
	            exec: function () {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    canvas = imageeditor.getCanvasElement(),
	                    ctx = imageeditor.getCurrent2dContext(),
	                    image = imageeditor.redoStack.pop();

	                if(image) {
	                    imageeditor.undoStack.push(imageeditor.getCurrentImage());
	                    delete imageeditor._image;

	                    ctx.clearRect(0, 0, canvas.width, canvas.height);
	                    canvas.width = image.width;
	                    canvas.height = image.height;
	                    ctx.drawImage(image, 0, 0, image.width, image.height);

	                    imageeditor.drawImage(canvas.toDataURL()).done(function(image){
	                        imageeditor.drawCanvas(image);
	                    }).fail(function (ev) {
	                        imageeditor.trigger("error", ev);
	                    });
	                }
	            }
	        });

	        var SaveImageEditorCommand = Command.extend({
	            exec: function () {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    canvas = imageeditor.getCanvasElement();

	                kendo.saveAs(extend({}, imageeditor.options.saveAs, {
	                    dataURI: canvas.toDataURL()
	                }));
	            }
	        });

	        var OpenImageEditorCommand = Command.extend({
	            exec: function () {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    upload = imageeditor._upload;

	                if (!upload) {
	                    var input = $("<input type='file' />");
	                    input.kendoUpload({
	                        select: proxy(that.onSelect, that),
	                        error: proxy(that.onError, that),
	                        multiple: false,
	                        validation: {
	                            allowedExtensions: [".jpg", ".jpeg", ".gif", ".png", ".bmp", ".tiff", ".webp"]
	                        }
	                    });

	                    imageeditor._upload = upload = input.getKendoUpload();

	                }

	                upload.element.click();
	            },
	            onSelect: function (ev) {
	                var that = this,
	                    imageeditor = that.imageeditor,
	                    file = ev.files[0].rawFile,
	                    reader = new FileReader();

	                reader.addEventListener("load", function () {
	                    imageeditor.drawImage(reader.result).done(function(image){
	                        if (!imageeditor.trigger("imageLoaded", { image: image })) {
	                            imageeditor.drawCanvas(image);
	                            imageeditor._initUndoRedoStack();
	                            imageeditor._toggleTools();
	                        }
	                    }).fail(function (ev) {
	                        imageeditor.trigger("error", ev);
	                    });
	                }, false);


	                if (file) {
	                    reader.readAsDataURL(file);
	                }

	            },
	            onError: function(ev){
	                var that = this,
	                    imageeditor= that.imageeditor;

	                imageeditor.trigger("error", ev);
	            }
	        });

	        extend(kendo.ui.imageeditor, {
	            ImageEditorCommand: Command,
	            commands: {
	                OpenPaneImageEditorCommand: OpenPaneImageEditorCommand,
	                ZoomImageEditorCommand: ZoomImageEditorCommand,
	                CropImageEditorCommand: CropImageEditorCommand,
	                ResizeImageEditorCommand:ResizeImageEditorCommand,
	                UndoImageEditorCommand: UndoImageEditorCommand,
	                RedoImageEditorCommand: RedoImageEditorCommand,
	                SaveImageEditorCommand: SaveImageEditorCommand,
	                OpenImageEditorCommand: OpenImageEditorCommand
	            }
	    });

	    })(window.kendo.jQuery);

	    return window.kendo;

	}, __webpack_require__(3));

/***/ }),

/***/ 1050:
/***/ (function(module, exports) {

	module.exports = require("./pane");

/***/ }),

/***/ 1051:
/***/ (function(module, exports) {

	module.exports = require("../kendo.upload");

/***/ })

/******/ });