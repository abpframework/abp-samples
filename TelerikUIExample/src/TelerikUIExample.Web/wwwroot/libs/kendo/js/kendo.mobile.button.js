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

	module.exports = __webpack_require__(1350);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1117:
/***/ (function(module, exports) {

	module.exports = require("./kendo.userevents");

/***/ }),

/***/ 1350:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1117) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "mobile.button",
	    name: "Button",
	    category: "mobile",
	    description: "The Button widget navigates between mobile Application views when pressed.",
	    depends: [ "userevents" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        mobile = kendo.mobile,
	        ui = mobile.ui,
	        Widget = ui.Widget,
	        support = kendo.support,
	        os = support.mobileOS,
	        ANDROID3UP = os.android && os.flatVersion >= 300,
	        CLICK = "click",
	        DISABLED = "disabled",
	        DISABLEDSTATE = "km-state-disabled";

	    function highlightButton(widget, event, highlight) {
	        $(event.target).closest(".km-button,.km-detail").toggleClass("km-state-active", highlight);

	        if (ANDROID3UP && widget.deactivateTimeoutID) {
	            clearTimeout(widget.deactivateTimeoutID);
	            widget.deactivateTimeoutID = 0;
	        }
	    }

	    function createBadge(value) {
	        return $('<span class="km-badge">' + value + '</span>');
	    }

	    var Button = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);
	            var useTap = that.options.clickOn === "up";

	            that._wrap();
	            that._style();

	            if (!useTap) {
	                that.element.attr("data-navigate-on-press", true);
	            }

	            that.options.enable = that.options.enable && !that.element.attr(DISABLED);
	            that.enable(that.options.enable);

	            that._userEvents = new kendo.UserEvents(that.element, {
	                allowSelection: !useTap,
	                fastTap: true,
	                press: function(e) {
	                    that._activate(e);
	                },
	                release: function(e) {
	                    highlightButton(that, e, false);
	                    if (!useTap) { e.event.stopPropagation(); }
	                }
	            });

	            that._userEvents.bind(useTap ? "tap" : "press", function(e) {
	                that._release(e);
	            });


	            if (ANDROID3UP) {
	                that.element.on("move", function(e) { that._timeoutDeactivate(e); });
	            }
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            this._userEvents.destroy();
	        },

	        events: [
	            CLICK
	        ],

	        options: {
	            name: "Button",
	            icon: "",
	            style: "",
	            badge: "",
	            clickOn: "up",
	            enable: true
	        },

	        badge: function (value) {
	            var badge = this.badgeElement = this.badgeElement || createBadge(value).appendTo(this.element);

	            if (value || value === 0) {
	                badge.html(value);
	                return this;
	            }

	            if (value === false) {
	                badge.empty().remove();
	                this.badgeElement = false;
	                return this;
	            }

	            return badge.html();
	        },

	        enable: function(enable) {
	            var element = this.element;

	            if(typeof enable == "undefined") {
	                enable = true;
	            }

	            this.options.enable = enable;

	            if(enable) {
	                element.prop(DISABLED, false);
	            } else {
	                element.attr(DISABLED, DISABLED);
	            }

	            element.toggleClass(DISABLEDSTATE, !enable);
	        },

	        _timeoutDeactivate: function(e) {
	            if (!this.deactivateTimeoutID) {
	                this.deactivateTimeoutID = setTimeout(highlightButton, 500, this, e, false);
	            }
	        },

	        _activate: function(e) {
	            var activeElement = document.activeElement,
	                nodeName = activeElement ? activeElement.nodeName : "";

	            if(this.options.enable) {
	                highlightButton(this, e, true);

	                if (nodeName == "INPUT" || nodeName == "TEXTAREA") {
	                    activeElement.blur(); // Hide device keyboard
	                }
	            }
	        },

	        _release: function(e) {
	            var that = this;

	            if (e.which > 1) {
	                return;
	            }

	            if(!that.options.enable) {
	                e.preventDefault();
	                return;
	            }

	            if (that.trigger(CLICK, {target: $(e.target), button: that.element})) {
	                e.preventDefault();
	            }
	        },

	        _style: function() {
	            var style = this.options.style,
	                element = this.element,
	                styles;

	            if (style) {
	                styles = style.split(" ");
	                $.each(styles, function() {
	                    element.addClass("km-" + this);
	                });
	            }
	        },

	        _wrap: function() {
	            var that = this,
	                icon = that.options.icon,
	                badge = that.options.badge,
	                iconSpan = '<span class="km-icon km-' + icon,
	                element = that.element.addClass("km-button"),
	                span = element.children("span:not(.km-icon)").addClass("km-text"),
	                image = element.find("img").addClass("km-image");

	            if (!span[0] && element.html()) {
	                span = element.wrapInner('<span class="km-text" />').children("span.km-text");
	            }

	            if (!image[0] && icon) {
	                if (!span[0]) {
	                    iconSpan += " km-notext";
	                }
	                that.iconElement = element.prepend($(iconSpan + '" />'));
	            }

	            if (badge || badge === 0) {
	                that.badgeElement = createBadge(badge).appendTo(element);
	            }
	        }
	    });

	    var BackButton = Button.extend({
	        options: {
	            name: "BackButton",
	            style: "back"
	        },

	        init: function(element, options) {
	            var that = this;
	            Button.fn.init.call(that, element, options);

	            if (typeof that.element.attr("href") === "undefined") {
	                that.element.attr("href", "#:back");
	            }
	        }
	    });

	    var DetailButton = Button.extend({
	        options: {
	            name: "DetailButton",
	            style: ""
	        },

	        init: function(element, options) {
	            Button.fn.init.call(this, element, options);
	        },

	        _style: function() {
	            var style = this.options.style + " detail",
	                element = this.element;

	            if (style) {
	                var styles = style.split(" ");
	                $.each(styles, function() {
	                    element.addClass("km-" + this);
	                });
	            }
	        },

	        _wrap: function() {
	            var that = this,
	                icon = that.options.icon,
	                iconSpan = '<span class="km-icon km-' + icon,
	                element = that.element,
	                span = element.children("span"),
	                image = element.find("img").addClass("km-image");

	            if (!image[0] && icon) {
	                if (!span[0]) {
	                    iconSpan += " km-notext";
	                }
	                element.prepend($(iconSpan + '" />'));
	            }
	        }

	    });

	    ui.plugin(Button);
	    ui.plugin(BackButton);
	    ui.plugin(DetailButton);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });