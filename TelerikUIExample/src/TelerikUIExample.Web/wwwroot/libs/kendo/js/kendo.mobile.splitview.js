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

	module.exports = __webpack_require__(1363);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1337:
/***/ (function(module, exports) {

	module.exports = require("./kendo.mobile.pane");

/***/ }),

/***/ 1363:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1337) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "mobile.splitview",
	    name: "SplitView",
	    category: "mobile",
	    description: "The mobile SplitView is a tablet-specific view that consists of two or more mobile Pane widgets.",
	    depends: [ "mobile.pane" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.mobile.ui,
	        Widget = ui.Widget,
	        EXPANED_PANE_SHIM = "<div class='km-expanded-pane-shim'></div>",
	        View = ui.View;

	    var SplitView = View.extend({
	        init: function(element, options) {
	            var that = this,
	            pane, modalViews;

	            Widget.fn.init.call(that, element, options);
	            element = that.element;

	            $.extend(that, options);

	            that._id();

	            if (!that.options.$angular) {
	                that._layout();
	                that._overlay();
	            } else {
	                that._overlay();
	            }

	            that._style();

	            modalViews = element.children(that._locate("modalview"));

	            if (!that.options.$angular) {
	                kendo.mobile.init(modalViews);
	            } else {
	                modalViews.each(function(idx, element) {
	                    kendo.compileMobileDirective($(element), options.$angular[0]);
	                });
	            }

	            that.panes = [];
	            that._paramsHistory = [];

	            if (!that.options.$angular) {
	                that.content.children(kendo.roleSelector("pane")).each(function() {
	                    pane = kendo.initWidget(this, {}, ui.roles);
	                    that.panes.push(pane);
	                });
	            } else {
	                that.element.children(kendo.directiveSelector("pane")).each(function() {
	                    pane = kendo.compileMobileDirective($(this), options.$angular[0]);
	                    that.panes.push(pane);
	                });

	                that.element.children(kendo.directiveSelector("header footer")).each(function() {
	                    kendo.compileMobileDirective($(this), options.$angular[0]);
	                });
	            }

	            that.expandedPaneShim = $(EXPANED_PANE_SHIM).appendTo(that.element);

	            that._shimUserEvents = new kendo.UserEvents(that.expandedPaneShim, {
	                fastTap: true,
	                tap: function() {
	                    that.collapsePanes();
	                }
	            });
	        },

	        _locate: function(selectors) {
	            return this.options.$angular ? kendo.directiveSelector(selectors) : kendo.roleSelector(selectors);
	        },

	        options: {
	            name: "SplitView",
	            style: "horizontal"
	        },

	        expandPanes: function() {
	            this.element.addClass("km-expanded-splitview");
	        },

	        collapsePanes: function() {
	            this.element.removeClass("km-expanded-splitview");
	        },

	        // Implement view interface
	        _layout: function() {
	            var that = this,
	                element = that.element;

	            that.transition = kendo.attrValue(element, "transition");
	            kendo.mobile.ui.View.prototype._layout.call(this);
	            kendo.mobile.init(this.header.add(this.footer));
	            that.element.addClass("km-splitview");
	            that.content.addClass("km-split-content");
	        },

	        _style: function () {
	            var style = this.options.style,
	                element = this.element,
	                styles;

	            if (style) {
	                styles = style.split(" ");
	                $.each(styles, function () {
	                    element.addClass("km-split-" + this);
	                });
	            }
	        },

	        showStart: function() {
	            var that = this;
	            that.element.css("display", "");

	            if (!that.inited) {
	                that.inited = true;
	                $.each(that.panes, function() {
	                    if (this.options.initial) {
	                        this.navigateToInitial();
	                    } else {
	                        this.navigate("");
	                    }
	                });
	                that.trigger("init", {view: that});
	            } else {
	                this._invokeNgController();
	            }

	            that.trigger("show", {view: that});
	        }
	    });

	    ui.plugin(SplitView);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });