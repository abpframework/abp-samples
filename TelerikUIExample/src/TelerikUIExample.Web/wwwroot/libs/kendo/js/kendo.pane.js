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

	module.exports = __webpack_require__(1379);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1139:
/***/ (function(module, exports) {

	module.exports = require("./kendo.view");

/***/ }),

/***/ 1379:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(1139)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "pane",
	    name: "Pane",
	    category: "web",
	    description: "Pane",
	    depends: [ "view" ],
	    hidden: true
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        roleSelector = kendo.roleSelector,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        ViewEngine = kendo.ViewEngine,
	        View = kendo.View,

	        extend = $.extend,

	        NAVIGATE = "navigate",
	        VIEW_SHOW = "viewShow",
	        SAME_VIEW_REQUESTED = "sameViewRequested",
	        OS = kendo.support.mobileOS,
	        SKIP_TRANSITION_ON_BACK_BUTTON = OS.ios && !OS.appMode && OS.flatVersion >= 700,
	        BACK = "#:back";
	    var DOT = ".";

	    var classNames = {
	        pane: "k-pane",
	        paneWrapper: "k-pane-wrapper",
	        collapsiblePane: "k-collapsible-pane",
	        vertical: "k-vertical"
	    };

	    var Pane = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            options = that.options;
	            element = that.element;

	            element.addClass(classNames.pane);

	            if (that.options.collapsible) {
	                element.addClass(classNames.collapsiblePane);
	            }

	            this.history = [];

	            this.historyCallback = function(url, params, backButtonPressed) {
	                var transition = that.transition;
	                that.transition = null;

	                // swiping back in iOS leaves the app in a very broken state if we perform a transition
	                if (SKIP_TRANSITION_ON_BACK_BUTTON && backButtonPressed) {
	                    transition = "none";
	                }

	                return that.viewEngine.showView(url, transition, params);
	            };

	            this._historyNavigate = function(url) {
	                if (url === BACK) {
	                    if (that.history.length === 1) {
	                        return;
	                    }

	                    that.history.pop();
	                    url = that.history[that.history.length - 1];
	                } else {
	                    if (url instanceof View) {
	                        url = "";
	                    }
	                    that.history.push(url);
	                }

	                that.historyCallback(url, kendo.parseQueryStringParams(url));
	            };

	            this._historyReplace = function(url) {
	                var params = kendo.parseQueryStringParams(url);
	                that.history[that.history.length - 1] = url;
	                that.historyCallback(url, params);
	            };

	            that.viewEngine = new ViewEngine(extend({}, {
	                container: element,
	                transition: options.transition,
	                modelScope: options.modelScope,
	                rootNeeded: !options.initial,
	                serverNavigation: options.serverNavigation,
	                remoteViewURLPrefix: options.root || "",
	                layout: options.layout,
	                $angular: options.$angular,

	                showStart: function() {
	                    that.closeActiveDialogs();
	                },

	                after: function() {
	                },

	                viewShow: function(e) {
	                    that.trigger(VIEW_SHOW, e);
	                },

	                loadStart: function() {
	                },

	                loadComplete: function() {
	                },

	                sameViewRequested: function() {
	                    that.trigger(SAME_VIEW_REQUESTED);
	                },

	                viewTypeDetermined: function(e) {
	                    if (!e.remote || !that.options.serverNavigation)  {
	                        that.trigger(NAVIGATE, { url: e.url });
	                    }
	                }
	            }, this.options.viewEngine));


	            this._setPortraitWidth();

	            kendo.onResize(function() {
	                that._setPortraitWidth();
	            });
	        },

	        closeActiveDialogs: function() {
	            var dialogs = this.element.find(roleSelector("actionsheet popover modalview")).filter(":visible");
	            dialogs.each(function() {
	                kendo.widgetInstance($(this), ui).close();
	            });
	        },

	        navigateToInitial: function() {
	            var initial = this.options.initial;

	            if (initial) {
	                this.navigate(initial);
	            }

	            return initial;
	        },

	        options: {
	            name: "Pane",
	            portraitWidth: "",
	            transition: "",
	            layout: "",
	            collapsible: false,
	            initial: null,
	            modelScope: window
	        },

	        events: [
	            NAVIGATE,
	            VIEW_SHOW,
	            SAME_VIEW_REQUESTED
	        ],

	        append: function(html) {
	            return this.viewEngine.append(html);
	        },

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(that);

	            if (that.viewEngine) {
	                that.viewEngine.destroy();
	            }
	        },

	        navigate: function(url, transition) {
	            if (url instanceof View) {
	                url = url.id;
	            }

	            this.transition = transition;

	            this._historyNavigate(url);
	        },

	        replace: function(url, transition) {
	            if (url instanceof View) {
	                url = url.id;
	            }

	            this.transition = transition;

	            this._historyReplace(url);
	        },

	        view: function() {
	            return this.viewEngine.view();
	        },

	        _setPortraitWidth: function() {
	            var width,
	                portraitWidth = this.options.portraitWidth;

	            if (portraitWidth) {
	                width = kendo.mobile.application.element.is(DOT + classNames.vertical) ? portraitWidth : "auto";
	                this.element.css("width", width);
	            }
	        }
	    });

	    Pane.wrap = function(element, options) {
	        if (!element.is(roleSelector("view"))) {
	            element = element.wrap('<div data-' + kendo.ns + 'role="view" data-stretch="true"></div>').parent();
	        }

	        var paneContainer = element.wrap('<div class="' + classNames.paneWrapper + ' k-widget"><div></div></div>').parent();
	        var pane = new Pane(paneContainer, options);

	        pane.navigate("");

	        return pane;
	    };

	    // kendo.ui.Pane is already taken in kendo.draganddrop.js
	    kendo.Pane = Pane;
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });