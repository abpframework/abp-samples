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

	module.exports = __webpack_require__(1326);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1071:
/***/ (function(module, exports) {

	module.exports = require("./kendo.dropdownlist");

/***/ }),

/***/ 1100:
/***/ (function(module, exports) {

	module.exports = require("./kendo.slider");

/***/ }),

/***/ 1136:
/***/ (function(module, exports) {

	module.exports = require("./kendo.tooltip");

/***/ }),

/***/ 1326:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1100), __webpack_require__(1327), __webpack_require__(1071), __webpack_require__(1136)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function () {

	    var __meta__ = { // jshint ignore:line
	        id: "mediaplayer",
	        name: "MediaPlayer",
	        category: "web",
	        description: "",
	        depends: ["slider", "toolbar", "dropdownlist", "tooltip"]
	    };

	    (function ($, undefined) {
	        var kendo = window.kendo,
	            END = "end",
	            PAUSE = "pause",
	            PLAY = "play",
	            READY = "ready",
	            TIMECHANGE = "timeChange",
	            VOLUMECHANGE = "volumeChange",
	            FULLSCREEN_ENTER = "k-i-full-screen",
	            FULLSCREEN_EXIT = "k-i-full-screen-exit",
	            MUTE = "k-i-volume-off",
	            LOW_VOLUME = "k-i-volume-down",
	            HIGH_VOLUME = "k-i-volume-up",
	            VIDEO_QUALITY = "k-mediaplayer-quality",
	            STATE_PLAY = "k-i-play",
	            STATE_PAUSE = "k-i-pause",
	            TITLEBAR = "k-mediaplayer-titlebar",
	            TITLE = "k-title",
	            TOOLBARWRAP = "k-mediaplayer-toolbar-wrap",
	            TOOLBAR = "k-mediaplayer-toolbar",
	            SLIDER = "k-mediaplayer-seekbar",
	            VOLUME_SLIDER = "k-mediaplayer-volume",
	            MEDIA = "k-mediaplayer-media",
	            OVERLAY = "k-mediaplayer-overlay",
	            YTPLAYER = "k-mediaplayer-yt",
	            DOT = ".",
	            ui = kendo.ui,
	            ns = ".kendoMediaPlayer",
	            baseTime = new Date(1970, 0, 1),
	            timeZoneSec = baseTime.getTimezoneOffset() * 60,
	            Widget = kendo.ui.Widget,
	            isArray = Array.isArray,
	            timeFormats = {
	                shortTime: "mm:ss",
	                longTime: "HH:mm:ss"
	            },
	            template = kendo.template,
	            proxy = $.proxy,
	            keys = kendo.keys,
	            templates = {
	                htmlPlayer: "<video class='" + MEDIA + "'> </video>",
	                titleBar: template("<div class='" + TITLEBAR + "'><span class='" + TITLE + "'>Video Title</span></div>"),
	                toolBar: "<div class='" + TOOLBARWRAP + "'><div class='" + TOOLBAR + "'></div></div>",
	                youtubePlayer: "<div class='" + YTPLAYER + "'> </div>",
	                toolBarTime: "<span class='k-mediaplayer-currenttime'>00:00:00</span> / <span class='k-mediaplayer-duration'>00:00:00</span>",
	                slider: "<input class='" + SLIDER + "' value='0' title='seekbar' />",
	                volumeSlider: "<input class='" + VOLUME_SLIDER + "' title='volume'/>",
	                qualityDropDown: "<input class='" + VIDEO_QUALITY + "' title='video quality' />",
	                toolTip: "#= kendo.toString(new Date(value), 'HH:mm:ss') #"
	            };

	        var MediaPlayer = Widget.extend({
	            init: function (element, options) {
	                this.wrapper = $(element);

	                Widget.fn.init.call(this, element, options);

	                this.wrapper.addClass("k-mediaplayer k-widget");

	                options = this.options;

	                this._currentIndex = 0;

	                this._createTitlebar();

	                this._createToolbar();

	                this._createDropDown();

	                this._createSlider();

	                this._createVolumeSlider();

	                this._timers = {};

	                this._aria();

	                this._navigatable();

	                if (options.fullScreen) {
	                    this.fullScreen(true);
	                }

	                if (options.media) {
	                    this.media(this.options.media);
	                }

	                kendo.notify(this);
	            },

	            events: [
	                END,
	                PAUSE,
	                PLAY,
	                READY,
	                TIMECHANGE,
	                VOLUMECHANGE
	            ],

	            options: {
	                name: "MediaPlayer",
	                autoPlay: false,
	                autoRepeat: false,
	                volume: 100,
	                fullScreen: false,
	                mute: false,
	                navigatable: false,
	                forwardSeek: true,
	                media: null,
	                messages: {
	                    "pause": "Pause",
	                    "play": "Play",
	                    "mute": "Mute",
	                    "unmute": "Unmute",
	                    "quality": "Quality",
	                    "fullscreen": "Full Screen"
	                }
	            },

	            _msToTime: function (ms) {
	                var time = new Date(baseTime.getTime());
	                time.setSeconds(ms);
	                return time;
	            },

	            _timeToSec: function (time) {
	                var curTime = new Date(time).getTime();
	                return curTime / 1000;
	            },

	            _createTitlebar: function () {
	                this._titleBar = this.wrapper.find(DOT + TITLEBAR);
	                if (this._titleBar.length === 0) {
	                    this.wrapper.append(templates.titleBar);
	                    this._titleBar = this.wrapper.find(DOT + TITLEBAR);
	                }
	            },

	            _createSlider: function () {
	                var sliderElement = this.wrapper.find(DOT + SLIDER);
	                if (!this._slider) {
	                    this._sliderDragChangeHandler = proxy(this._sliderDragChange, this);
	                    this._sliderDraggingHandler = proxy(this._sliderDragging, this);
	                    sliderElement = this.wrapper.find(DOT + SLIDER);

	                    this._slider = new ui.Slider(sliderElement[0], {
	                        smallStep: 1000,
	                        tickPlacement: "none",
	                        showButtons: false,
	                        change: this._sliderDragChangeHandler,
	                        slide: this._sliderDraggingHandler,
	                        tooltip: {
	                            template: templates.toolTip
	                        },
	                        dragHandleTitle: this.options.messages.time
	                    });
	                }
	            },

	            _createVolumeSlider: function () {
	                var volumeSliderElement = this.wrapper.find(DOT + VOLUME_SLIDER);
	                if (!this._volumeSlider) {
	                    this._volumeDraggingHandler = proxy(this._volumeDragging, this);
	                    this._volumeChangeHandler = proxy(this._volumeChange, this);
	                    volumeSliderElement.width(87);
	                    this._volumeSlider = new ui.Slider(volumeSliderElement[0], {
	                        smallStep: 1,
	                        min: 0,
	                        max: 100,
	                        value: this.options.volume,
	                        slide: this._volumeDraggingHandler,
	                        change: this._volumeChangeHandler,
	                        tickPlacement: "none",
	                        showButtons: false,
	                        tooltip: { enabled: false },
	                        dragHandleTitle: this.options.messages.volume
	                    });
	                }
	            },

	            _resetTime: function () {
	                if (this._youTubeVideo) {
	                    this._ytmedia.seekTo(0, true);
	                } else {
	                    this._media.currentTime = 0;
	                }

	                this._mediaTimeUpdate();
	                $.grep(this._toolBar.options.items, function (e) { return !!e.template; }).template = templates.toolBarTime;
	            },

	            _currentUrl: function () {
	                var media = this.media();
	                return isArray(media.source) ? media.source[this._currentIndex].url : media.source;
	            },

	            _isYouTubeUrl: function () {
	                return !!this._currentUrl().match("youtube.com/|youtu.be/");
	            },

	            _setPlayerUrl: function () {
	                var oldPlayer = this._youTubeVideo;
	                this.stop();

	                this._youTubeVideo = this._isYouTubeUrl();

	                if (oldPlayer !== this._youTubeVideo) {
	                    this.wrapper.find(DOT + YTPLAYER).toggle();
	                    this.wrapper.find(DOT + MEDIA).toggle();
	                }

	                var initialized = this._media || this._ytmedia;

	                this._initializePlayer();

	                if (initialized) { //mute and volume settings should be persisted when switching between html and youtube players
	                    this.mute(this.mute());
	                    this.volume(this.volume());
	                }

	                if (!this._youTubeVideo) {
	                    this._videoOverlay.show();
	                    this.wrapper.find(DOT + MEDIA + " > source").remove();
	                    this.wrapper.find(DOT + MEDIA).attr("src", this._currentUrl());

	                    if (this.options.autoPlay) {
	                        this.play();
	                    }
	                }
	                else if (this._ytmedia) {
	                    if (this._videoOverlay) {
	                        this._videoOverlay.hide();
	                    }
	                    if (this.options.autoPlay) {
	                        this._ytmedia.loadVideoById(this._getMediaId());
	                        this._playStateToggle(true);
	                    }
	                    else {
	                        this._ytmedia.cueVideoById(this._getMediaId());
	                        this._playStateToggle(true);
	                    }
	                }
	            },

	            _createToolbar: function () {
	                var toolBarElement = this.wrapper.find(DOT + TOOLBAR);
	                if (toolBarElement.length === 0) {
	                    this._toolbarClickHandler = proxy(this._toolbarClick, this);
	                    this.wrapper.append(templates.toolBar);
	                    toolBarElement = this.wrapper.find(DOT + TOOLBAR);
	                    toolBarElement.width(this.wrapper.find(DOT + MEDIA).width());
	                    this._toolBar = new ui.ToolBar(toolBarElement, {
	                        click: this._toolbarClickHandler,
	                        resizable: false,
	                        items: [
	                            {
	                                type: "button",
	                                attributes: { "class": "k-play-button" },
	                                icon: "play",
	                                fillMode: "flat"
	                            },
	                            {
	                                template: templates.toolBarTime,
	                                attributes: { "class": "k-mediaplayer-currenttime-wrap" }
	                            },
	                            {
	                                type: "spacer"
	                            },
	                            {
	                                type: "button",
	                                attributes: { "class": "k-volume-button" },
	                                icon: "volume-up",
	                                fillMode: "flat"
	                            },
	                            {
	                                template: templates.volumeSlider,
	                                attributes: { "class": "k-mediaplayer-volume-wrap" }
	                            },
	                            {
	                                template: templates.qualityDropDown,
	                                attributes: { "class": "k-mediaplayer-quality-wrap" }
	                            },
	                            {
	                                type: "button",
	                                attributes: { "class": "k-fullscreen-button" },
	                                icon: "full-screen",
	                                fillMode: "flat"
	                            }
	                        ]
	                    });

	                    this._toolBar.wrapper.off("keydown");
	                    toolBarElement.before(templates.slider);

	                    this._volumeButton = toolBarElement.find(".k-volume-button");
	                    this._fullscreenButton = toolBarElement.find(".k-fullscreen-button");
	                    this._volumeButton.attr("title", this.options.mute ? this.options.messages.unmute : this.options.messages.mute);
	                    this._volumeButton.attr("aria-label", this.options.mute ? this.options.messages.unmute : this.options.messages.mute);
	                    this._fullscreenButton.attr("title", this.options.messages.fullscreen);
	                    this._fullscreenButton.attr("aria-label", this.options.messages.fullscreen);

	                    toolBarElement.width("auto");
	                    this._currentTimeElement = toolBarElement.find(".k-mediaplayer-currenttime");
	                    this._durationElement = toolBarElement.find(".k-mediaplayer-duration");
	                    this._playButton = toolBarElement.find(".k-play-button");
	                    this._playButtonSpan = this._playButton.find(".k-i-play");

	                    if (this.options.autoPlay) {
	                        this._playStateToggle(true);
	                    }

	                    if ( kendo.support.cssFlexbox === false ) {
	                        $([
	                            this._volumeButton[0],
	                            toolBarElement.find(".k-mediaplayer-volume-wrap")[0],
	                            toolBarElement.find(".k-mediaplayer-quality-wrap")[0],
	                            this._fullscreenButton[0]
	                        ]).wrapAll("<div class='k-align-right' />");
	                    }
	                }
	            },

	            _createDropDown: function () {
	                var dropDownElement = this.wrapper.find(DOT + VIDEO_QUALITY);
	                var media = this.media();
	                if (typeof dropDownElement.data("kendoDropDownList") === "undefined") {
	                    this._dropDownSelectHandler = proxy(this._dropDownSelect, this);
	                    this._dropDown = new ui.DropDownList(dropDownElement, {
	                        dataTextField: "quality",
	                        dataValueField: "url",
	                        popup: {
	                            position: "bottom",
	                            origin: "top",
	                            appendTo: this.wrapper
	                        },
	                        animation: {
	                            open: {
	                                effects: "slideIn:up",
	                                duration: 1
	                            }
	                        },
	                        select: this._dropDownSelectHandler
	                    });

	                    if (media && isArray(media.source)) {
	                        this._dropDown.setDataSource(media.source);
	                        this._dropDown.select(0);
	                    }

	                    this._dropDown.wrapper.addClass("k-button k-button-md k-rounded-md k-button-flat k-button-flat-base");
	                    this._dropDown.wrapper.attr("title", this.options.messages.quality).hide();
	                    this._dropDown.wrapper.find("span.k-i-arrow-s")
	                        .removeClass('k-i-arrow-s')
	                        .addClass('k-icon k-i-hd');
	                    this._dropDown.list.addClass("k-quality-list");
	                }
	            },

	            _dropDownSelect: function (e) {
	                if (this._currentIndex !== e.item.index()) {
	                    this._currentIndex = e.item.index();
	                    this._setPlayerUrl();
	                }
	            },

	            _toolbarClick: function (e) {
	                var target = $(e.target).children().first();
	                var isPaused = target.hasClass(STATE_PLAY);

	                if (!this.media()) {
	                    return;
	                }

	                if (target.hasClass(STATE_PLAY) || target.hasClass(STATE_PAUSE)) {
	                    if (isPaused) {
	                        this.play();
	                    }
	                    else {
	                        this.pause();
	                    }
	                }

	                if (target.hasClass(FULLSCREEN_ENTER) || target.hasClass(FULLSCREEN_EXIT)) {
	                    if (this._isInFullScreen) {
	                        target
	                            .removeClass(FULLSCREEN_EXIT)
	                            .addClass(FULLSCREEN_ENTER);
	                        this.fullScreen(false);
	                    } else {
	                        target
	                            .removeClass(FULLSCREEN_ENTER)
	                            .addClass(FULLSCREEN_EXIT);
	                        this.fullScreen(true);
	                    }
	                }

	                if (target.hasClass(MUTE) || target.hasClass(LOW_VOLUME) || target.hasClass(HIGH_VOLUME)) {
	                    var muted = this.mute();
	                    this.mute(!muted);
	                }
	            },

	            _sliderDragging: function () {
	                if (!this.media()) {
	                    return;
	                }

	                this._isDragging = true;
	            },

	            _sliderDragChange: function (e) {
	                var that = this;
	                var slider = e.sender;
	                var tzOffset = timeZoneSec * 1000;

	                if (!this.media()) {
	                    return;
	                }

	                that._sliderChangeFired = true;
	                that._isDragging = false;

	                if (!this.options.forwardSeek && slider.value() > this._seekBarLastPosition) {
	                    setTimeout(function () {
	                        slider.value(that._seekBarLastPosition);
	                    }, 1);
	                } else if (this._youTubeVideo) {
	                    that._ytmedia.seekTo(that._timeToSec(e.value - tzOffset));
	                } else {
	                    that._media.currentTime = that._timeToSec(e.value - tzOffset);
	                }
	                that.trigger(TIMECHANGE);
	                that._preventPlay = true;
	            },

	            _changeVolumeButtonImage: function (volume) {
	                var volumeButton = this._volumeButton;
	                var volumeElement = volumeButton.find("span");
	                var cssClass = volumeElement.attr("class");
	                cssClass = cssClass.substring(0, cssClass.lastIndexOf(" "));

	                if (volume === 0) {
	                    volumeElement.attr("class", cssClass + " " + MUTE);
	                    volumeButton.attr("title", this.options.messages.unmute);
	                    volumeButton.attr("aria-label", this.options.messages.unmute);
	                } else if (volume > 0 && volume < 51) {
	                    volumeElement.attr("class", cssClass + " " + LOW_VOLUME);
	                    volumeButton.attr("title", this.options.messages.mute);
	                    volumeButton.attr("aria-label", this.options.messages.mute);
	                } else {
	                    volumeElement.attr("class", cssClass + " " + HIGH_VOLUME);
	                    volumeButton.attr("title", this.options.messages.mute);
	                    volumeButton.attr("aria-label", this.options.messages.mute);
	                }
	            },

	            _volumeDragging: function (e) {
	                if (!this.media()) {
	                    return;
	                }
	                this.volume(e.value);
	                this._changeVolumeButtonImage(e.value);
	                this.trigger(VOLUMECHANGE);
	            },

	            _volumeChange: function (e) {
	                if (!this.media()) {
	                    return;
	                }
	                this.volume(e.value);
	                this._changeVolumeButtonImage(e.value);
	                this.trigger(VOLUMECHANGE);
	            },

	            _mediaTimeUpdate: function () {
	                var currentTime = (this._youTubeVideo) ? this._ytmedia.getCurrentTime() : this._media.currentTime;
	                currentTime = currentTime ? currentTime : 0;
	                var timeInMs = this._msToTime(currentTime);
	                this._currentTimeElement.text(kendo.toString(timeInMs, this._timeFormat));
	                if (!this._isDragging) {
	                    this._seekBarLastPosition = (currentTime + timeZoneSec) * 1000;
	                    this._slider.value(this._seekBarLastPosition);
	                }

	                return this.isPlaying();
	            },

	            _playStateToggle: function (play) {
	                if (typeof play === "undefined") {
	                    play = this._playButtonSpan.is(DOT + STATE_PLAY);
	                }

	                if (play) {
	                    this._playButtonSpan
	                        .removeClass(STATE_PLAY)
	                        .addClass(STATE_PAUSE);
	                    this._playButton.attr("title", this.options.messages.pause);
	                    this._playButton.attr("aria-label", this.options.messages.pause);
	                }
	                else {
	                    this._playButtonSpan
	                        .removeClass(STATE_PAUSE)
	                        .addClass(STATE_PLAY);
	                    this._playButton.attr("title", this.options.messages.play);
	                    this._playButton.attr("aria-label", this.options.messages.play);
	                }
	            },

	            _mediaEnded: function () {
	                this._playStateToggle(false);
	                this._currentTimeElement.text(kendo.toString(this._msToTime(0), this._timeFormat));
	                this._slider.value((0 + timeZoneSec) * 1000);
	                this.trigger(END);
	            },

	            _mediaPlay: function () {
	                this.trigger(PLAY);
	            },

	            _mediaReady: function () {
	                this.trigger(READY);
	            },

	            _mediaDurationChange: function () {
	                var durationTime = this._msToTime((this._youTubeVideo) ? this._ytmedia.getDuration() : this._media.duration);

	                this._timeFormat = durationTime.getHours() === 0 ? timeFormats.shortTime : timeFormats.longTime;

	                this._durationElement.text(kendo.toString(durationTime, this._timeFormat));
	                this._slider.setOptions({
	                    min: baseTime.getTime(),
	                    max: durationTime.getTime()
	                });

	                if (!this._isFirstRun) {
	                    this._resetTime();
	                    this._isFirstRun = true;
	                }
	            },

	            _createYoutubePlayer: function () {
	                this._mediaTimeUpdateHandler = proxy(this._mediaTimeUpdate, this);
	                this._mediaDurationChangeHandler = proxy(this._mediaDurationChange, this);

	                this.wrapper.prepend(templates.youtubePlayer);
	                this._ytPlayer = this.wrapper.find(DOT + YTPLAYER)[0];
	                $(this._ytPlayer)
	                    .css({
	                        width: this.wrapper.width(),
	                        height: this.wrapper.height()
	                    });

	                if (!window.YT || !window.YT.Player) {
	                    if (!window.onYouTubeIframeAPIReadyRegister) {
	                        window.onYouTubeIframeAPIReadyRegister = [];
	                        $.getScript("https://www.youtube.com/iframe_api");
	                        window.onYouTubeIframeAPIReady =
	                            function () {
	                                if (window.onYouTubeIframeAPIReadyRegister) {
	                                    for (var i = 0; i < window.onYouTubeIframeAPIReadyRegister.length; i++) {
	                                        window.onYouTubeIframeAPIReadyRegister[i]._youtubeApiReady();
	                                    }
	                                }
	                                window.onYouTubeIframeAPIReadyRegister.length = 0;
	                                window.onYouTubeIframeAPIReadyRegister = undefined;
	                            };
	                    }
	                    window.onYouTubeIframeAPIReadyRegister[window.onYouTubeIframeAPIReadyRegister.length] = this;
	                }
	                else {
	                    this._configurePlayer();
	                }
	            },

	            _poll: function (name, callback, interval, context) {
	                var that = this;

	                if (that._timers[name] !== null) {
	                    clearTimeout(that._timers[name]);
	                }

	                that._timers[name] = setTimeout((function (context) {
	                    return function callLater() {
	                        if (callback.call(context)) {
	                            that._timers[name] = setTimeout(callLater, interval);
	                        }
	                    };
	                })(context), interval);

	                return that._timers[name];
	            },

	            _youtubeApiReady: function () {
	                this._configurePlayer();
	            },

	            _configurePlayer: function () {
	                var vars = {
	                    'autoplay': +this.options.autoPlay,
	                    'wmode': 'transparent',
	                    'controls': 0,
	                    'rel': 0,
	                    'showinfo': 0
	                };

	                this._onYouTubePlayerReady = proxy(this._onYouTubePlayerReady, this);
	                window.onYouTubePlayerReady = this._onYouTubePlayerReady;
	                this._onPlayerStateChangeHandler = proxy(this._onPlayerStateChange, this);
	                window.onPlayerStateChange = this._onPlayerStateChange;

	                /*jshint unused:false */
	                var player = new window.YT.Player(this.wrapper.find(DOT + YTPLAYER)[0], {
	                    height: this.wrapper.height(),
	                    width: this.wrapper.width(),
	                    videoId: this._getMediaId(),
	                    playerVars: vars,
	                    events: {
	                        'onReady': this._onYouTubePlayerReady,
	                        'onStateChange': this._onPlayerStateChangeHandler
	                    }
	                });
	            },

	            _onYouTubePlayerReady: function (event) {
	                this._ytmedia = event.target;
	                this._ytmedia.getIframe().style.width = "100%";
	                this._ytmedia.getIframe().style.height = "100%";
	                this._youTubeVideo = true;
	                this._mediaDurationChangeHandler();

	                if (this.options.autoPlay) {
	                    this._playStateToggle(true);
	                    this._ytmedia.loadVideoById(this._getMediaId());
	                }
	                else {
	                    this._ytmedia.cueVideoById(this._getMediaId());
	                }

	                if (this.options.mute) {
	                    this.mute(true);
	                }

	                this.trigger(READY);
	            },

	            _updateTitle: function () {
	                this.titlebar().text(this.media().title || this.media().source);
	            },

	            _onPlayerStateChange: function (event) {

	                if (event.data === 0) {
	                    this._slider.value(0);
	                    this._paused = false;
	                    this._playStateToggle(true);
	                    this.trigger(END);
	                    if (this.options.autoRepeat) {
	                        this.play();
	                    }
	                }
	                else if (event.data === 1) {
	                    this._mediaDurationChange();
	                    this._ytmedia.setVolume(this.volume());
	                    if (this._sliderChangeFired) {
	                        this._sliderChangeFired = false;
	                    } else {
	                        this._uiDisplay(false);
	                    }
	                    this.trigger(PLAY);
	                    this._playStateToggle(true);

	                    this._poll("progress", this._mediaTimeUpdate, 500, this);
	                    this._paused = false;
	                }
	                else if (event.data === 2) {
	                    if (!this._paused) {
	                        this._uiDisplay(true);
	                        this._playStateToggle(false);
	                        this.trigger(PAUSE);
	                        this._paused = true;
	                    }
	                }
	            },

	            _getMediaId: function () {
	                var result = this._currentUrl();
	                var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	                var match = result.match(regExp);

	                if (match && match[7].length === 11) {
	                    result = match[7];
	                }

	                return result;
	            },

	            _mouseClick: function () {
	                if (this.isPaused()) {
	                    this.play();
	                } else {
	                    this.pause();
	                }
	            },

	            _initializePlayer: function () {
	                if (!this._mouseMoveHandler) {
	                    this._mouseMoveHandler = proxy(this._mouseMove, this);
	                    this._mouseInHandler = proxy(this._mouseIn, this);
	                    this._mouseOutHandler = proxy(this._mouseOut, this);

	                    $(this.wrapper)
	                        .on("mouseenter" + ns, this._mouseInHandler)
	                        .on("mouseleave" + ns, this._mouseOutHandler)
	                        .on("mousemove" + ns, this._mouseMoveHandler);
	                }

	                if (!this._ytmedia && this._youTubeVideo) {
	                    this._createYoutubePlayer();
	                }
	                else if (!this._media && !this._youTubeVideo) {
	                    this._createHtmlPlayer();
	                }
	            },

	            _createHtmlPlayer: function () {
	                if (!this._videoOverlay) {
	                    this._mouseClickHanlder = proxy(this._mouseClick, this);
	                    this.wrapper.append("<div class='" + OVERLAY + "'></div>");
	                    this._videoOverlay = this.wrapper.find(".k-mediaplayer-overlay")
	                        .on("click" + ns, this._mouseClickHanlder);
	                }

	                this._mediaTimeUpdateHandler = proxy(this._mediaTimeUpdate, this);
	                this._mediaDurationChangeHandler = proxy(this._mediaDurationChange, this);
	                this._mediaEndedHandler = proxy(this._mediaEnded, this);
	                this._mediaCanPlayHandler = proxy(this._mediaReady, this);
	                this._mediaPlayHandler = proxy(this._mediaPlay, this);
	                this._videoOverlay.after(templates.htmlPlayer);
	                this._media = this.wrapper.find(DOT + MEDIA)[0];
	                $(this._media)
	                    .css({
	                        width: "100%",
	                        height: "100%"
	                    });

	                if (this.options.mute) {
	                    this.mute(true);
	                }

	                this._media.ontimeupdate = this._mediaTimeUpdateHandler;
	                this._media.ondurationchange = this._mediaDurationChangeHandler;
	                this._media.oncanplay = this._mediaCanPlayHandler;
	                this._media.onplay = this._mediaPlayHandler;
	                this._media.onended = this._mediaEndedHandler;
	                this._media.loop = this.options.autoRepeat;
	            },

	            _mouseIn: function () {
	                this._uiDisplay(true);
	            },

	            _mouseOut: function () {
	                this._poll("mouseIdle", this._mouseIdle, 3000, this);
	            },

	            _mouseIdle: function () {
	                this._uiDisplay(false);
	                return false;
	            },

	            _mouseMove: function () {
	                if (!(this._titleBar.is(':animated') || this._toolBar.element.is(':animated') || this._slider.wrapper.is(':animated'))) {
	                    this._uiDisplay(true);
	                }
	                this._poll("mouseIdle", this._mouseIdle, 3000, this);
	            },

	            _uiDisplay: function (state) {
	                var animationSpeed = 'slow';
	                var uiElements = this._titleBar
	                    .add(this._toolBar.element.parent());

	                if (state) {
	                    uiElements.fadeIn(animationSpeed);
	                }
	                else {
	                    uiElements.fadeOut(animationSpeed);
	                    if (this.options.navigatable) {
	                        this.wrapper.trigger("focus");
	                    }
	                }
	            },

	            setOptions: function (options) {
	                Widget.fn.setOptions.call(this, options);
	            },

	            destroy: function () {
	                Widget.fn.destroy.call(this);

	                if (!this.isPaused()) {
	                    this.pause();
	                }

	                this.element.off(ns);
	                this.element.find(DOT + OVERLAY).off(ns);
	                this._timers = null;
	                this._mouseMoveHandler = null;
	                this._mouseOutHandler = null;
	                this._mouseInHandler = null;
	                this._mouseClickHanlder = null;
	                this._keyDownHandler = null;
	                this._fullscreenHandler = null;

	                this._toolbarClickHandler = null;
	                this._sliderDragChangeHandler = null;
	                this._sliderDraggingHandler = null;
	                this._volumeDraggingHandler = null;
	                this._volumeChangeHandler = null;
	                this._youtubeApiReadyHandler = null;
	                this._onYouTubePlayerReady = null;
	                this._onPlayerStateChangeHandler = null;
	                this._dropDownSelectHandler = null;

	                if (this._youTubeVideo) {
	                    this._ytmedia.destroy();
	                }
	                else {
	                    this._media.ontimeupdate = this._mediaTimeUpdateHandler = null;
	                    this._media.ondurationchange = this._mediaDurationChangeHandler = null;
	                    this._media.oncanplay = this._mediaCanPlayHandler = null;
	                    this._media.onplay = this._mediaPlayHandler = null;
	                    this._media.onended = this._mediaEndedHandler = null;
	                    this._media.src = "";
	                    this._media.remove();
	                }

	                this._mouseMoveTimer = null;
	                clearTimeout(this._mouseMoveTimer);

	                kendo.destroy(this.element);
	            },

	            seek: function (ms) {
	                if (typeof ms === 'undefined') {
	                    return 1000 * (this._youTubeVideo) ? this._ytmedia.getCurrentTime() : (this._media ? this._media.currentTime : 0);
	                }
	                var seconds = ms / 1000;
	                if (this._youTubeVideo) {
	                    if (seconds + 3 >= this._ytmedia.getDuration() | 0) {
	                        //avoid infinite bad request loop in youtube player.
	                        this._ytmedia.seekTo(this._ytmedia.getDuration() - 3 | 0, true);
	                    } else {
	                        this._ytmedia.seekTo(seconds, true);
	                    }
	                } else {
	                    this._media.currentTime = seconds;
	                }

	                return this;
	            },

	            play: function () {
	                if (this._youTubeVideo) {
	                    this._ytmedia.playVideo();
	                } else {
	                    if (kendo.support.mobileOS) {
	                        this._uiDisplay(false);
	                    }
	                    this._media.play();
	                }
	                this._paused = false;

	                this._playStateToggle(true);

	                return this;
	            },

	            stop: function () {
	                if (this._youTubeVideo && this._ytmedia) {
	                    this._ytmedia.stopVideo();
	                } else if (this._media && !this._youTubeVideo) {
	                    if (kendo.support.mobileOS) {
	                        this._uiDisplay(true);
	                    }
	                    this._media.pause();
	                    this._media.currentTime = 0;
	                }
	                this._paused = true;

	                this._playStateToggle(false);
	                return this;
	            },

	            pause: function () {
	                if (this._youTubeVideo) {
	                    this._ytmedia.pauseVideo();
	                } else {
	                    if (kendo.support.mobileOS) {
	                        this._uiDisplay(true);
	                    }
	                    this._media.pause();
	                }
	                this._paused = true;
	                this._playStateToggle(false);
	                this.trigger(PAUSE);
	                return this;
	            },

	            toolbar: function () {
	                return this._toolBar;
	            },

	            dropdown: function () {
	                return this._dropDown;
	            },

	            titlebar: function () {
	                return this._titleBar;
	            },

	            fullScreen: function (enterFullScreen) {
	                if (typeof enterFullScreen === 'undefined') {
	                    return this._isInFullScreen || false;
	                }
	                var element = this.element.get(0);
	                if (enterFullScreen) {
	                    // Handles the case when the action is triggered by code and not by user iteraction
	                    this.element.addClass("k-mediaplayer-fullscreen");
	                    if (element.requestFullscreen) {
	                        element.requestFullscreen();
	                    } else if (element.webkitRequestFullscreen) {
	                        element.webkitRequestFullscreen();
	                    } else if (element.mozRequestFullScreen) {
	                        element.mozRequestFullScreen();
	                    } else if (element.msRequestFullscreen) {
	                        element.msRequestFullscreen();
	                    }
	                    this._isInFullScreen = true;
	                } else {

	                    if (document.cancelFullscreen) {
	                        document.cancelFullscreen();
	                    } else if (document.webkitCancelFullScreen) {
	                        document.webkitCancelFullScreen();
	                    } else if (document.mozCancelFullScreen) {
	                        document.mozCancelFullScreen();
	                    } else if (document.msCancelFullscreen) {
	                        document.msCancelFullscreen();
	                    } else if (document.exitFullscreen) {
	                        document.exitFullscreen();
	                    } else if (document.msExitFullscreen) {
	                        document.msExitFullscreen();
	                    }
	                    // Handles the case when the action is triggered by code and not by user iteraction
	                    this.element.removeClass("k-mediaplayer-fullscreen");
	                    this._isInFullScreen = false;
	                }
	                this._slider.resize();
	            },

	            volume: function (value) {
	                if (typeof value === 'undefined') {
	                    return (typeof this._volume !== 'undefined') ? this._volume : this._volume = this.options.volume;
	                }
	                this._volume = value;
	                this.mute(value <= 0);

	                if (this._youTubeVideo) {
	                    this._ytmedia.setVolume(this._volume);
	                } else {
	                    this._media.volume = this._volume / 100;
	                }

	                this._volumeSlider.value(value);
	            },

	            mute: function (muted) {
	                var currentState = this._youTubeVideo ? (this._ytmedia && this._ytmedia.isMuted()) : (this._media && this._media.muted);
	                if (typeof muted === 'undefined' || muted === currentState) {
	                    return currentState;
	                }
	                if (this._youTubeVideo) {
	                    if (muted) {
	                        this._ytmedia.mute();
	                    }
	                    else {
	                        this._ytmedia.unMute();
	                    }
	                }
	                else {
	                    this._media.muted = muted;
	                }

	                if (muted) {
	                    this._volumeSlider.value(0);
	                }
	                else {
	                    this._volumeSlider.value((this._media && this._media.volume * 100) || (this._ytmedia && this._ytmedia.getVolume()));
	                }
	                this.trigger(VOLUMECHANGE);
	                this._changeVolumeButtonImage(this._volumeSlider.value());
	            },

	            isEnded: function () {
	                if (this._youTubeVideo) {
	                    return this._ytmedia.getPlayerState() === 0;
	                } else {
	                    return this._media.ended;
	                }
	            },

	            media: function (value) {
	                var dropdown = this.dropdown();
	                if (typeof value === 'undefined') {
	                    return (typeof this._mediaData !== 'undefined') ? this._mediaData : this._mediaData = this.options.media;
	                }

	                if (isArray(value.source)) {
	                    dropdown.setDataSource(value.source);
	                    dropdown.wrapper.show();
	                }
	                else {
	                    dropdown.wrapper.hide();
	                }

	                this._mediaData = value;

	                this._updateTitle();

	                this._setPlayerUrl();
	            },

	            isPaused: function () {
	                return this._paused;
	            },

	            isPlaying: function () {
	                return !this.isEnded() && !this._paused;
	            },

	            _aria: function () {
	                this.wrapper.attr("role", "region");
	                //this.wrapper.attr("aria-labelledby", "mediaplayerTitleBar");
	                //add onfocus with aria active descendant
	            },

	            _navigatable: function () {
	                this._fullscreenHandler = proxy(this._fullscreen, this);
	                $(document)
	                    .on("webkitfullscreenchange mozfullscreenchange fullscreenchange" + ns, this._fullscreenHandler);

	                if (this.options.navigatable) {
	                    this.wrapper.attr("tabIndex", 0);
	                    this._keyDownHandler = proxy(this._keyDown, this);
	                    this.wrapper
	                        .on("keydown" + ns, this._keyDownHandler);
	                }
	            },

	            _fullscreen: function () {
	                var isFullScreen = document.fullScreen ||
	                    document.mozFullScreen ||
	                    document.webkitIsFullScreen;

	                this._uiDisplay(true);
	                this._slider.resize();

	                if (!isFullScreen) {
	                    this.wrapper.find('span[class*="k-i-fullscreen"]')
	                        .removeClass(FULLSCREEN_EXIT)
	                        .addClass(FULLSCREEN_ENTER);
	                    this.fullScreen(false);
	                }
	            },

	            _keyDown: function (e) {
	                e.preventDefault();
	                var fsButton = this.wrapper.find('span[class*="k-i-fullscreen"]');
	                if (e.keyCode === keys.SPACEBAR) {
	                    if (this.isPlaying()) {
	                        this.pause();
	                    }
	                    else {
	                        this.play();
	                    }
	                }
	                else if (e.keyCode === keys.ENTER && !this._isInFullScreen) {
	                    fsButton
	                        .removeClass(FULLSCREEN_ENTER)
	                        .addClass(FULLSCREEN_EXIT);
	                    this.fullScreen(true);
	                }
	                else if (e.keyCode === 77) {
	                    var muted = this.mute();
	                    this.mute(!muted);
	                }
	                else if (e.keyCode === keys.ESC && this._isInFullScreen) {
	                    fsButton
	                        .removeClass(FULLSCREEN_EXIT)
	                        .addClass(FULLSCREEN_ENTER);
	                    this.fullScreen(false);
	                }
	            },

	            _error: function () {
	            },

	            _progress: function () {
	            }

	        });

	        ui.plugin(MediaPlayer);

	    })(window.kendo.jQuery);

	    return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1327:
/***/ (function(module, exports) {

	module.exports = require("./kendo.toolbar");

/***/ })

/******/ });