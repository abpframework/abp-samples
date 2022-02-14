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

	module.exports = __webpack_require__(1099);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1057), __webpack_require__(1100), __webpack_require__(1101), __webpack_require__(1102)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	    var __meta__ = { // jshint ignore:line
	        id: "captcha",
	        name: "Captcha",
	        category: "web",
	        description: "The Captcha widget displays captcha validation image and an input so that user case be validated against captcha value.",
	        depends: ["core", "slider", "textbox", "skeletoncontainer"]
	    };

	    (function ($, undefined) {
	        var kendo = window.kendo,
	            Widget = kendo.ui.Widget,
	            proxy = $.proxy,
	            extend = $.extend,
	            ajax = $.ajax,
	            isFunction = kendo.isFunction,

	            STRING = "string",

	            DOT = ".",
	            NS = DOT + "kendoCaptcha",

	            CLICK = "click",
	            BLUR = "blur",

	            CHANGE = "change",
	            REQUEST_START = "requestStart",
	            REQUEST_END = "requestEnd",
	            ERROR = "error";

	        var CaptchaStyles = {
	            wrapper: "k-widget k-captcha",
	            textbox: "k-textbox",
	            button: "k-button k-button-md k-rounded-md k-button-solid k-button-solid-base",
	            buttonIcon: "k-button-icon",
	            iconButton: "k-icon-button",
	            resetIcon: "k-icon k-i-reload",
	            audioIcon: "k-icon k-i-volume-up",
	            disabled: "k-state-disabled",
	            inputWrapper: "k-captcha-input k-vstack",
	            imageWrapper: "k-captcha-image-wrap k-hstack",
	            captchaImage: "k-captcha-image",
	            buttonsWrapper: "k-captcha-image-controls k-vstack",
	            volumeControlWrapper: "k-captcha-volume-control k-vstack k-pos-absolute",
	            hidden: "k-hidden",
	            success: "k-captcha-validation-message k-text-success",
	            loading: "k-captcha-loading"
	        };

	        var Captcha = Widget.extend({
	            init: function (element, options) {
	                var that = this;

	                Widget.fn.init.call(that, element, options);

	                that._captchaField = that.options.dataCaptchaField;
	                that._valueField = that.element.attr("name") || "captcha";
	                that._captchaIdField = that.options.dataCaptchaIdField;

	                that._wrapper();
	                that._idInput();
	                that._captchaImage();

	                if(that.options.audioButton || that.options.resetButton) {
	                    that._buttons();

	                }

	                if (!that.options.captcha || !that.options.captchaId) {
	                    that._resetHandler();
	                }

	                if (that.options.validateOnBlur) {
	                    that.element.on(BLUR + NS, function() {
	                        that._validationHandler();
	                    });
	                }

	                that.element.on(CHANGE + NS, function(ev) {
	                    delete that._isValid;
	                    that.trigger(CHANGE, { value: that.element.val(), originalEvent: ev });
	                });

	                kendo.notify(that);
	            },

	            events: [
	                CHANGE,
	                REQUEST_START,
	                REQUEST_END,
	                ERROR
	            ],

	            options: {
	                name: "Captcha",
	                dataCaptchaField: "captcha",
	                dataCaptchaIdField: "captchaId",
	                captchaId: "",
	                captcha: null,
	                handler: null,
	                audioHandler: null,
	                validationHandler: null,
	                validateOnBlur: false,
	                resetButton: true,
	                audioButton: true,
	                volumeControl: true,
	                messages: {
	                    reset: "Reset captcha",
	                    audio: "Speak captcha",
	                    imageAlt: "Type the Captcha code from the image",
	                    success: "Verification successful"
	                }
	            },

	            destroy: function() {
	                var that = this;

	                that.textbox.destroy();

	                if (that.resetButton) {
	                    that.resetButton.off(NS);
	                }

	                if (that.audioButton) {
	                    that.audioButton.off(NS);
	                }

	                that.element.off(NS);

	                // Just in case, destroy slider.
	                that._audioEnded();

	                Widget.fn.destroy.call(that);
	            },

	            _wrapper: function () {
	                var that = this,
	                    styles = Captcha.styles,
	                    wrapper = "<div class='" + styles.wrapper + "'><div class='" + styles.inputWrapper + "'></div></div>",
	                    imageWrapper = "<div class='" + styles.imageWrapper + "'></div>",
	                    cssText = that.element[0].style.cssText;

	                that.element.css("width", "auto");
	                that.element.css("height", "auto");
	                that.textbox = that.element.kendoTextBox().data("kendoTextBox");
	                that._inputWrapper = that.textbox.wrapper;
	                that.wrapper = that._inputWrapper.wrap(wrapper).parent().parent();
	                that.wrapper[0].style.cssText = cssText;
	                that.imageWrapper = $(imageWrapper);
	                that.wrapper.prepend(that.imageWrapper);
	            },

	            _captchaImage: function () {
	                var that = this,
	                    options = that.options,
	                    messages = options.messages,
	                    styles = Captcha.styles;


	                that.captchaImage = $("<div class=\"" + styles.captchaImage + "\">" +
	                                        "<img alt=\"" + messages.imageAlt + "\" src= \"" + (options.captcha || "") + "\"/>" +
	                                    "</div>").find("img");

	                that.imageWrapper.append(that.captchaImage.parent());

	                that._tabindex(that.captchaImage);
	            },

	            _idInput: function () {
	                var that = this,
	                    options = that.options,
	                    nameAttr = that._captchaIdField;

	                that.idInput = $("<input type=\"hidden\" name=\"" + nameAttr + "\" value=\"" + options.captchaId + "\" data-" + kendo.ns + "stop=\"true\" />");
	                that._inputWrapper.after(that.idInput);
	            },

	            _buttons: function () {
	                var that = this,
	                    styles = Captcha.styles;

	                that.buttonsWrapper = $("<div class=\"" + styles.buttonsWrapper + "\"></div>");
	                that.imageWrapper.append(that.buttonsWrapper);

	                if(that.options.audioButton) {
	                    that._audioButton();
	                }

	                if(that.options.resetButton) {
	                    that._resetButton();
	                }
	            },

	            _resetButton: function () {
	                var that = this,
	                    messages = that.options.messages,
	                    styles = Captcha.styles;

	                that.resetButton = $("<button type=\"button\" title=\"" + messages.reset + "\" class=\"" + styles.button + " " + styles.iconButton + "\">" +
	                                        "<span class=\"" + styles.buttonIcon + " " + styles.resetIcon + "\"></span>" +
	                                    "</button>");

	                that.buttonsWrapper.append(that.resetButton);

	                that.resetButton.on(CLICK + NS, proxy(that._resetHandler, that, true));
	            },

	            _audioButton: function () {
	                var that = this,
	                    messages = that.options.messages,
	                    styles = Captcha.styles;

	                that.audioButton = $("<button type=\"button\" title=\"" + messages.audio + "\" class=\"" + styles.button + " " + styles.iconButton + "\">" +
	                                        "<span class=\"" + styles.buttonIcon  + " " + styles.audioIcon + "\"></span>" +
	                                    "</button>");

	                that.buttonsWrapper.append(that.audioButton);

	                that.audioButton.on(CLICK + NS, proxy(that._audioHandler, that));
	            },

	            _resetHandler: function (focusResetButton) {
	                var that = this,
	                    handler = that.options.handler,
	                    deferred = $.Deferred(),
	                    success = proxy(that._resetCaptcha, that, deferred);

	                delete that._isValid;
	                that._toggleSuccessMessage(false);
	                that._audioEnded();
	                that._progress(true);

	                if (!handler) {
	                    window.console.error("Captcha's handler option is not defined!");
	                    deferred.reject({ msg: "Captcha's handler option is not defined!", error: "handler_not_defined" });
	                    that._progress(false);
	                    return deferred.promise();
	                }

	                that._callHandler("reset", handler, success)
	                    .done(function(){
	                        if (focusResetButton) {
	                            that.resetButton.trigger("focus");
	                        }
	                    })
	                    .fail(function(args){
	                        that._progress(false);
	                        deferred.reject(args);
	                    });
	                return deferred.promise();
	            },

	            _audioHandler: function () {
	                var that = this,
	                    handler = that.options.audioHandler,
	                    deferred = $.Deferred(),
	                    success = proxy(that._playAudio, that, deferred),
	                    data = {};

	                data[that._captchaIdField] = that.idInput.val();

	                if (!handler) {
	                    window.console.error("Captcha's audioHandler option is not defined!");
	                    deferred.reject({ msg: "Captcha's audioHandler option is not defined!", error: "handler_not_defined" });
	                    return deferred.promise();
	                }

	                that._callHandler("audio", handler, success, data).fail(deferred.reject);
	                return deferred.promise();
	            },

	            _validationHandler: function () {
	                var that = this,
	                    handler = that.options.validationHandler,
	                    deferred = $.Deferred(),
	                    success = proxy(that._validate, that, deferred),
	                    data = {};

	                delete that._isValid;

	                data[that._captchaIdField] = that.idInput.val();
	                data[that._valueField] = that.element.val();

	                if (!handler) {
	                    window.console.error("Captcha's validationHandler option is not defined!");
	                    deferred.reject({ msg: "Captcha's validationHandler option is not defined!", error: "handler_not_defined" });
	                    return deferred.promise();
	                }

	                that._callHandler("validation", handler, success, data).fail(deferred.reject);
	                return deferred.promise();
	            },

	            _callHandler: function(type, handler, success, data){
	                var that = this,
	                    error = proxy(that._error, that, type),
	                    requestEnd = proxy(that._requestEnd, that, type),
	                    args;

	                if (isFunction(handler)) {
	                    handler({success: success, data: data});
	                    return $.Deferred().promise();
	                } else {
	                    args = typeof handler === STRING ? { url: handler, cache: false } : extend({}, handler);
	                    args.success = success;
	                    args.data = extend({}, data, args.data);

	                    if(!that.trigger(REQUEST_START, { type: type, data: data })){
	                        return ajax(args).done(requestEnd).fail(error);
	                    }
	                }
	            },

	            _requestEnd: function (type, data) {
	                var that = this;
	                that.trigger(REQUEST_END, {type: type, data: data});
	            },

	            _error: function (type, jqXHR, textStatus, errorThrown) {
	                var that = this;
	                that.trigger(ERROR, {type: type, jqXHR: jqXHR, textStatus: textStatus, errorThrown: errorThrown});
	            },

	            _resetCaptcha: function (deferred, data) {
	                var that = this,
	                    id = data[that._captchaIdField],
	                    captcha = data[that._captchaField];

	                that.idInput.val(id);
	                that.captchaImage.attr("src", captcha || "");

	                that.captchaImage.one("load", function(){
	                    that._progress(false);
	                });

	                deferred.resolve(data);
	            },

	            _playAudio: function (deferred, data) {
	                var that = this;

	                if(that._canPlayWav()) {
	                    if(that.audioElement) {
	                        return;
	                    }

	                    that.audioElement = new Audio(data);
	                    that.audioElement.volume = that._audioVolume || that.audioElement.volume;

	                    if (that.options.volumeControl) {
	                        $(that.audioElement).on("loadeddata" + NS, function () {
	                            that._showVolumeControl(that.audioElement.volume);
	                        });
	                    }

	                    $(that.audioElement).on("ended" + NS + " error" + NS, proxy(that._audioEnded, that, deferred));

	                    that.audioElement.play();
	                } else if(that._canPlayWithPlugin()) {
	                    if(that.audioElement) {
	                        that.audioElement.play();
	                        return;
	                    }

	                    that.audioElement = that._createEmbedElement(data);
	                    that.wrapper.append(that.audioElement);
	                }
	            },

	            _createEmbedElement: function(src) {
	                var that = this,
	                    objectElement = document.createElement("embed");

	                objectElement.setAttribute("src", src);
	                objectElement.setAttribute("autostart", "true");
	                objectElement.setAttribute("pluginspage", that._audioPlugin);
	                objectElement.setAttribute("enablejavascript", "true");
	                objectElement.setAttribute("type", "audio/wav");
	                objectElement.setAttribute("tabIndex", "-1");

	                objectElement.style.width = "0px";
	                objectElement.style.height = "0px";
	                objectElement.style.position = "absolute";
	                objectElement.style.top = 0;
	                objectElement.style.left = 0;

	                return objectElement;
	            },

	            _showVolumeControl: function (volume) {
	                var that = this,
	                    styles = Captcha.styles,
	                    volumeControlWrapper = $("<div class=\"" + styles.volumeControlWrapper + "\"></div>");

	                if(that.volumeControl) {
	                    return;
	                }

	                that.volumeControlElm = $("<input />");
	                that.volumeControlWrapper = volumeControlWrapper.append(that.volumeControlElm);
	                that.imageWrapper.append(volumeControlWrapper);
	                that.volumeControlWrapper.css(that._isRtl() ? "right" : "left", that.wrapper.width());

	                that.volumeControl = that.volumeControlElm.kendoSlider({
	                    min: 0,
	                    max: 1,
	                    smallStep: 0.1,
	                    largeStep: 0.5,
	                    orientation: "vertical",
	                    showButtons: false,
	                    tickPlacement: "none",
	                    value: volume,
	                    tooltip: {
	                        enabled: false
	                    },
	                    change: function (ev) {
	                        that._audioVolume = that.audioElement.volume = ev.value;
	                    }
	                }).data("kendoSlider");
	            },

	            _audioEnded: function (deferred) {
	                var that = this;

	                if($(document.activeElement).is("a.k-draghandle")) {
	                    that.audioButton.trigger("focus");
	                }

	                if (that.volumeControl) {
	                    that.volumeControl.destroy();
	                    that.volumeControl.wrapper.remove();
	                    delete that.volumeControl;
	                    that.volumeControlElm.remove();
	                    that.volumeControlWrapper.remove();
	                    delete that.volumeControlElm;
	                    delete that.volumeControlWrapper;
	                }

	                if(that.audioElement) {
	                    that.audioElement.pause();
	                }

	                $(that.audioElement).off(NS);
	                $(that.audioElement).remove();
	                delete that.audioElement;

	                if(deferred && deferred.resolve) {
	                    deferred.resolve();
	                }
	            },

	            _canPlayWav: function () {
	                var that = this,
	                    audio;

	                if (that._canPlayAudio) {
	                    return that._canPlayAudio;
	                }

	                audio = new Audio();
	                that._canPlayAudio = audio.canPlayType("audio/wav").replace(/no/gi, "") !== "";

	                return that._canPlayAudio;
	            },

	            _canPlayWithPlugin: function () {
	                var that = this;

	                if (that._audioPlugin) {
	                    return that._audioPlugin;
	                }

	                that._audioPlugin = that._getPlugin();
	                return that._audioPlugin;
	            },

	            _getPlugin: function () {
	                var testNavigatorPlugins = function (name) {
	                    var plugins = navigator.plugins;
	                    for (var i = 0; i < plugins.length; i++) {

	                        var pluginName = plugins[i].name;

	                        if (pluginName.indexOf(name) !== -1) {
	                            return true;
	                        }
	                    }
	                    return false;
	                };

	                var testActiveXAvailability = function (objectName) {
	                    try {
	                        var control = new window.ActiveXObject(objectName);
	                        return !!control;
	                    } catch (e) {
	                        return false;
	                    }
	                };

	                if (testActiveXAvailability('QuickTime.QuickTime') ||
	                    testActiveXAvailability('QuickTimeCheckObject.QuickTimeCheck') ||
	                    testNavigatorPlugins("QuickTime Plug-in")) {
	                        return "http://www.apple.com/quicktime/download/";
	                }

	                if (testActiveXAvailability('WMPlayer.OCX') || testNavigatorPlugins("Windows Media")) {
	                    return "http://www.microsoft.com/Windows/MediaPlayer";
	                }
	            },

	            _validate: function (deferred, data) {
	                var that = this;
	                that._isValid = data;
	                that._toggleSuccessMessage(that._isValid);
	                deferred.resolve(data);
	            },

	            _toggleSuccessMessage: function (toggle) {
	                var that = this,
	                    idAttr = (that.element.attr("id") || that.element.attr("name")) + "-success",
	                    messages = that.options.messages;

	                $(that.successMessage).remove();
	                that.element.removeAttr("aria-describedby");

	                if (toggle) {
	                    that.successMessage = $("<span id=\"" + idAttr + "\" class=\"" + Captcha.styles.success + "\">" + messages.success + "</span>");
	                    that._inputWrapper.after(that.successMessage);
	                    that.element.attr("aria-describedby", idAttr);
	                }
	            },

	            _toggleButtons: function (toggle) {
	                var that = this;

	                if (that.resetButton) {
	                    that.resetButton.prop("disabled", !toggle);
	                }

	                if (that.audioButton) {
	                    that.audioButton.prop("disabled", !toggle);
	                }
	            },

	            _progress: function (toggle) {
	                var that = this;

	                that.wrapper.toggleClass(Captcha.styles.loading, toggle);
	                that._inputWrapper.toggleClass(Captcha.styles.disabled, toggle);
	                that._toggleButtons(!toggle);
	                that._toggleSkeleton(toggle);
	            },

	            _toggleSkeleton: function (toggle) {
	                var that = this;

	                if (that.skeleton) {
	                    that.skeleton.remove();
	                }

	                if (toggle) {
	                    that.skeleton = $("<span class='k-skeleton k-skeleton-rect k-skeleton-pulse' style=\"width: 100%; height: 100%;\"></span>");
	                    that.captchaImage.before(that.skeleton);
	                }
	            },

	            _isRtl: function () {
	                return kendo.support.isRtl(this.wrapper);
	            },

	            value: function () {
	                return this.element.val();
	            },

	            getCaptchaId: function () {
	                return this.idInput.val();
	            },

	            toJSON: function () {
	                var that = this,
	                    obj = {};

	                obj[that._valueField] = that.value();
	                obj[that._captchaIdField] = that.getCaptchaId();

	                return obj;
	            },

	            validate: function () {
	                return this._validationHandler();
	            },

	            isValid: function () {
	                return this._isValid;
	            },

	            enable: function (toggle) {
	                var that = this;

	                toggle = toggle !== false;

	                that._toggleButtons(toggle);

	                that.textbox.enable(toggle);

	                if(toggle) {
	                    that.captchaImage.removeAttr("tabIndex");
	                    that._tabindex(that.captchaImage);
	                } else {
	                    that.captchaImage.attr("tabIndex", "-1");
	                }

	                that.captchaImage.toggleClass(Captcha.styles.disabled, !toggle);
	                that.wrapper.toggleClass(Captcha.styles.disabled, !toggle);
	            },

	            readonly: function (toggle) {
	                var that = this;

	                toggle = toggle !== false;

	                if (that.resetButton) {
	                    that.resetButton.prop("disabled", toggle);
	                }

	                that.textbox.readonly(toggle);
	            },

	            speak: function () {
	                return this._audioHandler();
	            },

	            reset: function () {
	                return this._resetHandler();
	            }
	        });

	        kendo.ui.plugin(Captcha);

	        extend(true, Captcha, { styles: CaptchaStyles });

	    })(window.kendo.jQuery);

	    return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1100:
/***/ (function(module, exports) {

	module.exports = require("./kendo.slider");

/***/ }),

/***/ 1101:
/***/ (function(module, exports) {

	module.exports = require("./kendo.textbox");

/***/ }),

/***/ 1102:
/***/ (function(module, exports) {

	module.exports = require("./kendo.skeletoncontainer");

/***/ })

/******/ });