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

	module.exports = __webpack_require__(1426);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1076:
/***/ (function(module, exports) {

	module.exports = require("./kendo.data");

/***/ }),

/***/ 1137:
/***/ (function(module, exports) {

	module.exports = require("./kendo.fx");

/***/ }),

/***/ 1141:
/***/ (function(module, exports) {

	module.exports = require("./kendo.draganddrop");

/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1137), __webpack_require__(1076), __webpack_require__(1141) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "scrollview",
	    name: "ScrollView",
	    category: "web",
	    description: "The Kendo ScrollView widget is used to scroll content wider than the device screen.",
	    depends: [ "fx", "data", "draganddrop" ]
	};

	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        proxy = $.proxy,
	        Transition = kendo.effects.Transition,
	        Pane = kendo.ui.Pane,
	        keys = kendo.keys,
	        PaneDimensions = kendo.ui.PaneDimensions,
	        Widget = ui.DataBoundWidget,
	        DataSource = kendo.data.DataSource,

	        // Math
	        math = Math,
	        abs  = math.abs,
	        ceil = math.ceil,
	        round = math.round,
	        max = math.max,
	        min = math.min,
	        floor = math.floor,

	        CHANGE = "change",
	        CLICK = "click",
	        CHANGING = "changing",
	        REFRESH = "refresh",
	        CURRENT_PAGE_CLASS = "primary",
	        VIRTUAL_PAGE_CLASS = "scrollview-page",
	        FUNCTION = "function",
	        ITEM_CHANGE = "itemChange",
	        CLEANUP = "cleanup",
	        NS = ".ScrollView",
	        DOT = ".",
	        KEYDOWN = "keydown",
	        FOCUS = "focus",
	        FOCUSOUT = "focusout",
	        FOCUSED = "k-state-focused",
	        TABINDEX = "tabindex",

	        VIRTUAL_PAGE_COUNT = 3,
	        LEFT_PAGE = -1,
	        CETER_PAGE = 0,
	        RIGHT_PAGE = 1,

	        LEFT_SWIPE = -1,
	        NUDGE = 0,
	        RIGHT_SWIPE = 1;

	    function className(name) {
	        return "k-" + name;
	    }

	    var ScrollViewDataReader = kendo.Observable.extend({
	        init: function(dataSource) {
	            var that = this;
	            this.dataSource = dataSource;
	            this.pendingRequestArray = [];
	            this.initialFetch = false;
	            this.useRanges = dataSource.options.serverPaging;

	            kendo.Observable.fn.init.call(this);

	            dataSource.bind("change", function() {
	                that._change();
	            });
	        },

	        _change: function() {
	            this.trigger("reset", { offset: this.offset });
	        },

	        page: function(page, callback) {
	            var that = this;

	            if (!this.useRanges) {
	                this.dataSource.page(page + 1);
	                if (callback) {
	                    callback(that.dataSource.view());
	                } else {
	                    that.trigger("page", {page: page});
	                }
	             }
	             if (this.useRanges) {
	                this.dataSource.range(page * this.dataSource.pageSize(), this.dataSource.pageSize(), function() {
	                    if (callback) {
	                        callback(that.dataSource.view());
	                    } else {
	                        that.trigger("page", { page: page });
	                    }
	                });
	            }
	        },

	        scrollTo: function(page) {
	            var pageCount = Math.ceil(this.dataSource.total() / this.dataSource.pageSize() || 1);
	            var prevPage = page - 1;
	            var prevPrefetch = prevPage - 1;
	            var currentPage = page;
	            var nextPage = pageCount > 0 && page + 1 >= pageCount ? - 1 : page + 1;
	            var nextPrefetch = pageCount > 0 && nextPage + 1 >= pageCount ? - 1 : nextPage + 1;

	            if (nextPage >= 0) {
	                this.pendingRequestArray.push(nextPage);
	            }

	            if (prevPage >= 0) {
	                this.pendingRequestArray.push(prevPage);
	            }

	            if (prevPrefetch >= 0) {
	                this.pendingRequestArray.push(prevPrefetch);
	            }

	            if (nextPrefetch >= 0) {
	                this.pendingRequestArray.push(nextPrefetch);
	            }

	            this.page(currentPage);
	        },

	        getViewData: function() {
	            var view = this.dataSource.view();
	            var data;
	            if (this.dataSource.options.pageSize > 1) {
	                data = [];
	                for (var index = 0; index < view.length; index++) {
	                    data.push(view[index]);
	                }
	            }
	            else {
	                data = view[0];
	            }
	            return data;
	        },
	        destroy: function() {
	            var that = this;

	            that.dataSource.unbind();
	            that.dataSource = null;
	        }
	    });

	    kendo.ui.ScrollViewDataReader = ScrollViewDataReader;

	    var Pager = kendo.Class.extend({
	        init: function(scrollView) {
	            var that = this,
	                element = $("<ul class='" + className("scrollview-nav") + "'/>"),
	                navigationWrapElement = $("<div class='" + className("scrollview-nav-wrap") + "'></div>");

	            navigationWrapElement.append(element);
	            scrollView._navigationContainer.append(navigationWrapElement);

	            this._changeProxy = proxy(that, "_change");
	            this._refreshProxy = proxy(that, "_refresh");
	            scrollView.bind(CHANGE, this._changeProxy);
	            scrollView.bind(REFRESH, this._refreshProxy);
	            element.on(CLICK+NS, "li.k-link", proxy(this._click, scrollView));

	            $.extend(that, { element: element, scrollView: scrollView });

	            that._navigatable();
	        },

	        items: function() {
	            return this.element.children();
	        },

	        _focus: function () {
	            var that = this;
	            that._focused = true;
	            that._setCurrent(that.element.find(DOT + className(CURRENT_PAGE_CLASS)));
	        },

	        _blur: function () {
	            var that = this;

	            that._focused = false;

	            if (that._current) {
	                that._current.removeClass(FOCUSED);
	                that._current.removeAttr("id");
	                that.element.removeAttr("aria-activedescendant");
	            }
	        },

	        _keyDown: function (e) {
	            var that = this;
	            var handled;
	            var next;
	            var current = that._current;

	            var key = e.keyCode;

	            if (key == keys.LEFT) {
	                handled = true;
	                next = current.prev("li.k-link");

	                if (next.length) {
	                    that._setCurrent(next);
	                }
	            }

	            if (key == keys.RIGHT) {
	                handled = true;
	                next = current.next("li.k-link");

	                if (next.length) {
	                    that._setCurrent(next);
	                }
	            }

	            if (e.keyCode == keys.SPACEBAR || e.keyCode == keys.ENTER) {
	                handled = true;
	                that._current.trigger("click");
	            }

	            if (handled) {
	                e.preventDefault();
	                // prevent changing of items in scrollview
	                e.stopPropagation();
	            }
	        },

	        _setCurrent: function (current) {
	            if (!this._focused) {
	                return;
	            }
	            var that = this;
	            var id = kendo.guid();
	            var next = $(current);

	            if (that._current) {
	                $(that._current)
	                    .removeClass(FOCUSED)
	                    .removeAttr("id");

	                that.element.removeAttr("aria-activedescendant");
	            }

	            next
	                .attr("id", id)
	                .addClass(FOCUSED);

	            that.element.attr("aria-activedescendant", id);

	            that._current = next;
	        },

	        _navigatable: function() {
	            var that = this;
	            var pageable = that.scrollView.options.pageable || {};

	            if (!that.scrollView.options.navigatable) {
	                return;
	            }

	            that.element
	                .attr(TABINDEX, 0)
	                .attr("aria-label", that.scrollView.options.messages.pagerLabel)
	                .attr("role", "listbox");

	            that._ariaTemplate = kendo.template(pageable.ARIATemplate || "Item #=data.index#");

	            that.element.on(KEYDOWN+NS, that, proxy(that._keyDown, that));
	            that.element.on(FOCUS+NS, proxy(that._focus, that));
	            that.element.on(FOCUSOUT+NS, proxy(that._blur, that));
	        },

	        _refresh: function(e) {
	            var pageHTML = "";
	            var navigatable = this.scrollView.options.navigatable;
	            var current;

	            for (var idx = 0; idx < e.pageCount; idx ++) {
	                if (navigatable) {
	                    pageHTML += '<li class="k-link" role="option" aria-label="' + this._ariaTemplate({ index: idx }) +'" aria-selected="false"></li>';
	                } else {
	                    pageHTML += '<li class="k-link"></li>';
	                }
	            }

	            this.element.html(pageHTML);
	            current = this.items().eq(e.page);
	            current.addClass(className(CURRENT_PAGE_CLASS));

	            if (navigatable) {
	                current.attr("aria-selected", true);
	            }

	            this.scrollView._toggleNavigation({currentPage: e.page});
	        },

	        _change: function(e) {
	            if (e.isDefaultPrevented()) {
	                return;
	            }

	            var innerNavigationContainer = this.scrollView._navigationContainer.find(".k-scrollview-nav");
	            var scrollViewWidth = this.scrollView.element.width();
	            var containerOffset = (scrollViewWidth - innerNavigationContainer.width()) / 2;
	            var pageWidth = innerNavigationContainer.find("li.k-link").eq(0).outerWidth(true) / 2;
	            var items = this.items();
	            var navigatable = this.scrollView.options.navigatable;
	            var current;

	            items.removeClass(className(CURRENT_PAGE_CLASS));

	            current = items.eq(e.nextPage).addClass(className(CURRENT_PAGE_CLASS));
	            if (navigatable) {
	                items.attr("aria-selected", false);
	                this._setCurrent(current);
	                current.attr("aria-selected", true);
	            }

	            var itemOffset = this.items().eq(e.nextPage).length > 0 ?  this.items().eq(e.nextPage).position().left : 0;

	            if (itemOffset > scrollViewWidth / 2 || itemOffset < kendo.scrollLeft(innerNavigationContainer) + scrollViewWidth / 2) {

	                var translate = 0;
	                if (itemOffset > scrollViewWidth / 2) {
	                    translate = kendo.scrollLeft(innerNavigationContainer) + itemOffset - scrollViewWidth / 2;
	                }
	                else {
	                    translate = kendo.scrollLeft(innerNavigationContainer) - (scrollViewWidth / 2 -itemOffset);
	                }

	                translate += (containerOffset + pageWidth);

	                innerNavigationContainer.animate({"scrollLeft": translate }, 300);
	            }

	            this.scrollView._toggleNavigation({currentPage: e.currentPage, nextPage: e.nextPage});
	        },

	        _click: function(e) {
	            var newPage = $(e.currentTarget).index();

	            this.scrollTo(newPage);
	        },

	        destroy: function() {
	            this.scrollView.unbind(CHANGE, this._changeProxy);
	            this.scrollView.unbind(REFRESH, this._refreshProxy);
	            this.element.off(NS);
	            this.element.remove();
	        }
	    });

	    kendo.ui.ScrollViewPager = Pager;

	    var TRANSITION_END = "transitionEnd",
	        DRAG_START = "dragStart",
	        DRAG_END = "dragEnd";

	    var ElasticPane = kendo.Observable.extend({
	        init: function(element, options) {
	            var that = this;

	            kendo.Observable.fn.init.call(this);

	            this.element = element;
	            this.container = element.parent();

	            var movable,
	                transition,
	                userEvents,
	                dimensions,
	                dimension,
	                pane;

	            movable = new kendo.ui.Movable(that.element);

	            transition = new Transition({
	                axis: "x",
	                movable: movable,
	                onEnd: function() {
	                    that.trigger(TRANSITION_END);
	                }
	            });

	            userEvents = new kendo.UserEvents(element, {
	                fastTap: true,
	                start: function(e) {
	                    if (abs(e.x.velocity) * 2 >= abs(e.y.velocity)) {
	                        userEvents.capture();
	                    } else {
	                        userEvents.cancel();
	                    }

	                    that.trigger(DRAG_START, e);
	                    transition.cancel();
	                },
	                allowSelection: true,
	                end: function(e) {
	                    that.trigger(DRAG_END, e);
	                }
	            });

	            dimensions = new PaneDimensions({
	                element: that.element,
	                container: that.container
	            });

	            dimension = dimensions.x;

	            dimension.bind(CHANGE, function() {
	                that.trigger(CHANGE);
	            });

	            pane = new Pane({
	                dimensions: dimensions,
	                userEvents: userEvents,
	                movable: movable,
	                elastic: true
	            });

	            $.extend(that, {
	                duration: options && options.duration || 1,
	                movable: movable,
	                transition: transition,
	                userEvents: userEvents,
	                dimensions: dimensions,
	                dimension: dimension,
	                pane: pane
	            });

	            this.bind([TRANSITION_END, DRAG_START, DRAG_END, CHANGE], options);
	        },

	        size: function() {
	            return { width: this.dimensions.x.getSize(), height: this.dimensions.y.getSize() };
	        },

	        total: function() {
	            return this.dimension.getTotal();
	        },

	        offset: function() {
	            return -this.movable.x;
	        },

	        updateDimension: function() {
	            this.dimension.update(true);
	        },

	        refresh: function() {
	            this.dimensions.refresh();
	            this.dimensions.y.enabled = false;
	        },

	        moveTo: function(offset) {
	            this.movable.moveAxis("x", -offset);
	        },

	        transitionTo: function(offset, ease, instant) {
	            if (instant) {
	                this.moveTo(-offset);
	            } else {
	                this.transition.moveTo({ location: offset, duration: this.duration, ease: ease });
	            }
	        },
	        destroy: function() {
	            var that = this;

	            that.userEvents.destroy();
	            that.unbind();
	            that.movable = that.tansition = that.dimensions = that.dimension = that.pane = null;
	            that.element.remove();
	        }
	    });

	    kendo.ui.ScrollViewElasticPane = ElasticPane;

	    var ScrollViewContent = kendo.Observable.extend({
	        init: function(element, pane, options) {
	            var that = this;

	            kendo.Observable.fn.init.call(this);
	            that.element = element;
	            that.pane = pane;
	            that._getPages();
	            this.page = 0;
	            this.pageSize = options.pageSize || 1;
	            this.contentHeight = options.contentHeight;
	            this.enablePager = options.enablePager;
	            this.pagerOverlay = options.pagerOverlay;
	        },

	        scrollTo: function(page, instant) {
	            var that = this;

	            if (page == that.page && !instant) {
	                return;
	            }

	            if (!that.trigger("resize", { currentPage: this.page, nextPage: page, data: undefined })) {
	                that.page = page;
	                that.pane.transitionTo(- page * that.pane.size().width, Transition.easeOutExpo, instant);
	            }
	        },

	        paneMoved: function(swipeType, bounce, callback, /*internal*/ instant) {
	            var that = this,
	                pane = that.pane,
	                width = pane.size().width * that.pageSize,
	                approx = round,
	                ease = bounce ? Transition.easeOutBack : Transition.easeOutExpo,
	                snap,
	                nextPage;

	            if (swipeType === LEFT_SWIPE) {
	                approx = ceil;
	            } else if (swipeType === RIGHT_SWIPE) {
	                approx = floor;
	            }

	            nextPage = approx(pane.offset() / width);

	            if (nextPage < 0 || nextPage >= that.pageCount) {
	                var tansition = nextPage < 0 ? 0 : (- this.page * this.pane.size().width);
	                return this.pane.transitionTo(tansition, ease, instant);
	            }

	            snap = max(that.minSnap, min(-nextPage * width, that.maxSnap));

	            if (nextPage != that.page) {
	                if (callback && callback({ currentPage: that.page, nextPage: nextPage })) {
	                    snap = -that.page * pane.size().width;
	                }
	            }

	            pane.transitionTo(snap, ease, instant);
	        },

	        updatePage: function() {
	            var pane = this.pane,
	                page = round(pane.offset() / pane.size().width);

	            if (page != this.page) {
	                this.page = page;
	                return true;
	            }

	            return false;
	        },

	        forcePageUpdate: function() {
	            return this.updatePage();
	        },

	        resizeTo: function(size) {
	            var pane = this.pane,
	                width = size.width;

	            this.pageElements.width(width);

	            if (this.contentHeight === "100%") {
	                var containerHeight = this.element.parent().height();

	                if (this.enablePager === true) {
	                    var pager = this.element.parent().find("ul.k-scrollview-nav");
	                    if (!this.pagerOverlay && pager.length) {
	                        containerHeight -= kendo._outerHeight(pager, true);
	                    }
	                }

	                this.element.css("height", containerHeight);
	                this.pageElements.css("height", containerHeight);
	            }

	            // re-read pane dimension after the pageElements have been resized.
	            pane.updateDimension();

	            if (!this._paged) {
	                this.page = floor(pane.offset() / width);
	            }

	            this.scrollTo(this.page, true, true);

	            this.pageCount = floor(pane.total() / width);
	            this.minSnap = - (this.pageCount - 1) * width;
	            this.maxSnap = 0;
	        },

	        _getPages: function() {
	            this.pageElements = this.element.find(kendo.roleSelector("page"));
	            this._paged = this.pageElements.length > 0;
	        },

	        destroy: function() {
	            var that = this;

	            that.pane = null;
	            that.element.remove();
	        }
	    });

	    kendo.ui.ScrollViewContent = ScrollViewContent;

	    var VirtualScrollViewContent = kendo.Observable.extend({
	        init: function(element, pane, options) {
	            var that = this;

	            kendo.Observable.fn.init.call(this);

	            that.element = element;
	            that.pane = pane;
	            that.options = options;
	            that._templates();
	            that.page = options.page || 0;
	            that.pages = [];
	            that._initPages();
	            that.resizeTo(that.pane.size());

	            that.pane.dimension.forceEnabled();
	        },

	        setDataSource: function(dataSource) {
	            this.dataSource = DataSource.create(dataSource);
	            this._dataReader();
	            this._pendingPageRefresh = false;
	            this._pendingWidgetRefresh = false;
	        },

	        _viewShow: function() {
	            var that = this;
	            if (that._pendingWidgetRefresh) {
	                setTimeout(function() {
	                    that._resetPages();
	                }, 0);
	                that._pendingWidgetRefresh = false;
	            }
	        },

	        _dataReader: function() {
	            this.dataReader = new ScrollViewDataReader(this.dataSource);

	            this._pageProxy = proxy(this, "_onPage");
	            this._resetProxy = proxy(this, "_onReset");

	            this.dataReader.bind({
	                "page": this._pageProxy,
	                "reset": this._resetProxy
	            });
	        },

	        _templates: function() {
	            var template = this.options.template,
	                emptyTemplate = this.options.emptyTemplate,
	                templateProxy = {},
	                emptyTemplateProxy = {};

	            if (typeof template === FUNCTION) {
	                templateProxy.template = template;
	                template = "#=this.template(data)#";
	            }

	            this.template = proxy(kendo.template(template), templateProxy);

	            if (typeof emptyTemplate === FUNCTION) {
	                emptyTemplateProxy.emptyTemplate = emptyTemplate;
	                emptyTemplate = "#=this.emptyTemplate(data)#";
	            }

	            this.emptyTemplate = proxy(kendo.template(emptyTemplate), emptyTemplateProxy);
	        },

	        _initPages: function() {
	            var pages = this.pages,
	                element = this.element,
	                page;

	            for (var i = 0; i < VIRTUAL_PAGE_COUNT; i++) {
	                page = new Page(element);
	                pages.push(page);
	            }

	            this.pane.updateDimension();
	        },

	        resizeTo: function(size) {
	            var pages = this.pages,
	                pane = this.pane;

	            for (var i = 0; i < pages.length; i++) {
	                pages[i].setWidth(size.width);
	            }

	            if (this.options.contentHeight === "auto") {
	                this.element.css("height", this.pages[1].element.height());
	            }

	            else if (this.options.contentHeight === "100%") {
	                var containerHeight = this.element.parent().height();

	                if (this.options.enablePager === true) {
	                    var pager = this.element.parent().find("ul.k-scrollview-nav");
	                    if (!this.options.pagerOverlay && pager.length) {
	                        containerHeight -= kendo._outerHeight(pager, true);
	                    }
	                }

	                this.element.css("height", containerHeight);
	                pages[0].element.css("height", containerHeight);
	                pages[1].element.css("height", containerHeight);
	                pages[2].element.css("height", containerHeight);
	            }
	            else if (this.options.contentHeight) {
	                pages[0].element.css("height", this.options.contentHeight);
	                pages[1].element.css("height", this.options.contentHeight);
	                pages[2].element.css("height", this.options.contentHeight);
	            }

	            pane.updateDimension();

	            this._repositionPages();

	            this.width = size.width;
	        },

	        scrollTo: function(page, instant, silent) {
	            var that = this;
	            var dataReader = that.dataReader;

	            if (page == that.page && !instant) {
	                return;
	            }

	            dataReader.page(page, function(data) {
	                if (silent) {
	                    dataReader.scrollTo(page);
	                    return;
	                }
	                if (!that.trigger("resize", { currentPage: that.page, nextPage: page, data: data })) {
	                    if (!instant) {
	                        dataReader.pagerScroll = page > that.page ? - 1 : 1;
	                        that.page = page + dataReader.pagerScroll;
	                    } else {
	                        that.page = page;
	                    }
	                    dataReader.scrollTo(page);
	                }
	            });
	        },
	        paneMoved: function(swipeType, bounce, callback, /*internal*/ instant) {
	            var that = this,
	                pane = that.pane,
	                width = pane.size().width,
	                offset = pane.offset(),
	                thresholdPassed = Math.abs(offset) >= width / 3,
	                ease = bounce ? kendo.effects.Transition.easeOutBack : kendo.effects.Transition. easeOutExpo,
	                isEndReached = that.dataSource.options.serverPaging ? that.page + 2 > that.pageCount : false,
	                nextPage,
	                delta = 0,
	                data,
	                element;

	            if (swipeType === RIGHT_SWIPE) {
	                if (that.page !== 0) {
	                    delta = -1; //backward
	                }
	            } else if (swipeType === LEFT_SWIPE && !isEndReached) {
	                delta = 1; //forward
	            } else if (offset > 0 && (thresholdPassed && !isEndReached)) {
	                delta = 1; //forward
	            } else if (offset < 0 && thresholdPassed) {
	                if (that.page !== 0) {
	                    delta = -1; //backward
	                }
	            }

	            nextPage = that.page;
	            if (delta) {
	                nextPage = (delta > 0) ? nextPage + 1 : nextPage - 1;

	                if(that instanceof kendo.ui.VirtualScrollViewContent) {
	                    that.dataReader.page(nextPage);
	                    data = that.dataReader.getViewData();
	                }
	                else {
	                    data = undefined;
	                }

	                if (!(data instanceof Array)) {
	                    data = [data];
	                }
	                element = that.pages ? that.pages[1].element : undefined;

	            }

	            if (callback && that.page != nextPage && callback({ currentPage: that.page, nextPage: nextPage, element: element, data: data })) {
	                delta = 0;
	            }

	            if (delta === 0) {
	                that._cancelMove(ease, instant);
	            } else if (delta === -1) {
	                that._moveBackward(instant);
	            } else if (delta === 1) {
	                that._moveForward(instant);
	            }
	        },

	        updatePage: function() {
	            var pages = this.pages;

	            if (this.pane.offset() === 0) {
	                return false;
	            }

	            if (this.pane.offset() > 0) {
	                pages.push(this.pages.shift());//forward
	                this.page++;
	                if (this.page + 2 < this.pageCount) {
	                    this.dataReader.pendingRequestArray.push(this.page + 2);
	                }
	                if (this.page + 1 < this.pageCount) {
	                    this.dataReader.page(this.page + 1);
	                }

	                if (this.page + 1 == this.pageCount) {
	                    this.setPageContent(this.pages[2], null);
	                }

	            } else {
	                pages.unshift(this.pages.pop()); //back
	                this.page--;
	                if (this.page - 2 >= 0) {
	                    this.dataReader.pendingRequestArray.push(this.page - 2);
	                }
	                if (this.page - 1 >= 0) {
	                    this.dataReader.page(this.page - 1);
	                }
	            }

	            this._repositionPages();

	            this._resetMovable();

	            return true;
	        },

	        forcePageUpdate: function() {
	            var offset = this.pane.offset(),
	                threshold  = this.pane.size().width * 3/4;

	            if (abs(offset) > threshold) {
	                return this.updatePage();
	            }

	            return false;
	        },

	        _resetMovable: function() {
	            this.pane.moveTo(0);
	        },

	        _moveForward: function(instant) {
	            this.pane.transitionTo(-this.width, kendo.effects.Transition.easeOutExpo, instant);
	        },

	        _moveBackward: function(instant) {
	            this.pane.transitionTo(this.width, kendo.effects.Transition.easeOutExpo, instant);
	        },

	        _cancelMove: function(ease, /*internal*/ instant) {
	            this.pane.transitionTo(0, ease, instant);
	        },

	        _resetPages: function() {
	            this.page = this.options.page || 0;
	            this._repositionPages();

	            this.trigger("reset");
	        },

	        _onPage: function(e) {
	            if (e.page >= this.pageCount) {
	                this.setPageContent(this.pages[2], null);
	            }
	            if (this.page == e.page) {
	                if (!this.dataReader.pagerScroll || this.dataReader.pagerScroll === 0 && this.dataReader.initialFetch) {
	                    this.setPageContent(this.pages[1], this.dataReader.getViewData());
	                }
	                else {
	                    if (this.dataReader.pagerScroll < 0) {
	                        this._moveForward();
	                    }
	                    else {
	                        this._moveBackward();
	                    }

	                    this.dataReader.pagerScroll = 0;
	                    this.setPageContent(this.pages[1], this.dataReader.getViewData());
	                }
	            }
	            else if (this.page + 1 == e.page) {
	                this.setPageContent(this.pages[2], this.dataReader.getViewData());
	            }
	            else if (this.page - 1 == e.page) {
	                this.setPageContent(this.pages[0], this.dataReader.getViewData());
	            }

	            if (this.dataReader.pendingRequestArray.length > 0 && this.dataReader.initialFetch) {
	                var item = this.dataReader.pendingRequestArray.shift();
	                this.dataReader.page(item);
	            }
	        },

	        _onReset: function() {
	            this.pageCount = ceil(this.dataSource.total() / this.dataSource.pageSize());
	        },

	        _repositionPages: function() {
	            var pages = this.pages;

	            pages[0].position(LEFT_PAGE);
	            pages[1].position(CETER_PAGE);
	            pages[2].position(RIGHT_PAGE);
	        },

	        setPageContent: function(page, data) {
	            var template = this.template,
	                emptyTemplate = this.emptyTemplate;

	            if (data !== null && data !== undefined) {
	                page.content(template(data));
	            } else {
	                page.content(emptyTemplate({}));
	            }
	        },

	        destroy: function() {
	            var that = this;
	            var pages = that.pages;

	            that.dataReader.unbind();
	            that.dataSource.unbind();
	            that.dataReader = that.dataSource = that.pane = null;

	            for (var index = 0; index < pages.length; index++) {
	                pages[index].destroy();
	            }

	            that.element.remove();
	        }
	    });

	    kendo.ui.VirtualScrollViewContent = VirtualScrollViewContent;

	    var Page = kendo.Class.extend({
	        init: function(container) {
	            this.element = $("<li class='" + className(VIRTUAL_PAGE_CLASS) + "'></li>");
	            this.width = container.width();
	            this.element.width(this.width);
	            container.append(this.element);
	        },

	        content: function(theContent) {
	            this.element.html(theContent);
	        },

	        position: function(position) { //position can be -1, 0, 1
	            this.element.css("transform", "translate3d(" + this.width * position + "px, 0, 0)");
	        },

	        setWidth: function(width) {
	            this.width = width;
	            this.element.width(width);
	        },

	        destroy: function() {
	            var that = this;

	            that.element.remove();
	            that.element = null;
	        }
	    });

	    kendo.ui.VirtualPage = Page;

	    var ScrollView = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, options);

	            options = that.options;
	            element = that.element;

	            kendo.stripWhitespace(element[0]);

	            if (element.children().length === 0) {
	                element
	                .wrapInner("<ul class='k-scrollview-wrap'/>");
	            } else {
	                element
	                .wrapInner("<div class='k-scrollview-wrap'/>");
	            }

	            that.itemsWrapper = element.find(".k-scrollview-wrap");

	            element.addClass("k-widget " + className("scrollview"));

	            that._initNavigation();

	            if (this.options.pageable || this.options.enablePager) {
	                this.pager = new Pager(this);

	                if (this.options.pagerOverlay) {
	                    element.addClass(className("scrollview-overlay"));
	                }
	            } else {
	                this._changeProxy = proxy(that, "_toggleNavigation");
	                this.bind(CHANGE, this._changeProxy);
	            }

	            that.inner = element.children().first();
	            that.page = 0;

	            that.inner.css("height", options.contentHeight);

	            that.pane = new ElasticPane(that.inner, {
	                duration: this.options.duration,
	                transitionEnd: proxy(this, "_transitionEnd"),
	                dragStart: proxy(this, "_dragStart"),
	                dragEnd: proxy(this, "_dragEnd"),
	                change: proxy(this, REFRESH)
	            });

	            that.bind("resize", function() {
	                that.pane.refresh();
	            });

	            that.page = options.page;

	            var empty = this.inner.children().length === 0;

	            var content = empty ? new VirtualScrollViewContent(that.inner, that.pane, options) : new ScrollViewContent(that.inner, that.pane, options);

	            content.page = that.page;

	            content.bind("reset", function() {
	                this._pendingPageRefresh = false;
	                that.trigger(REFRESH, { pageCount: content.pageCount, page: content.page });
	                that._toggleNavigation({currentPage: content.page, nextPage: content.page });
	            });

	            content.bind("resize", function(e) {
	                var currentPage = content.page;
	                var nextPage = e.nextPage;

	                if (currentPage != nextPage) {
	                    e._defaultPrevented = that.trigger(CHANGE, { currentPage: content.page, nextPage: e.nextPage, data: e.data });
	                }
	                that._toggleNavigation({ currentPage: content.page, nextPage: e.nextPage});
	            });

	            content.bind(ITEM_CHANGE, function(e) {
	                that.trigger(ITEM_CHANGE, e);

	                that.angular("compile", function() {
	                    return { elements: e.item, data: [ { dataItem: e.data } ] };
	                });
	            });

	            content.bind(CLEANUP, function(e) {
	                that.angular("cleanup", function() {
	                    return { elements: e.item };
	                });
	            });

	            that._content = content;
	            that.setDataSource(options.dataSource);
	            that.viewInit();
	            that.viewShow();

	            that._navigatable();

	        },

	        options: {
	            name: "ScrollView",
	            ARIATemplate: "Item #=data.index# of #=data.total#",
	            page: 0,
	            duration: 400,
	            velocityThreshold: 0.8,
	            contentHeight: "auto",
	            pageSize: 1,
	            bounceVelocityThreshold: 1.6,
	            enablePager: true,
	            enableNavigationButtons: true,
	            pagerOverlay: true,
	            navigatable: false,
	            autoBind: true,
	            pageable: false,
	            template: "",
	            emptyTemplate: "",
	            messages: {
	                previousButtonLabel: "Previous",
	                nextButtonLabel: "Next",
	                pagerLabel: "ScrollView pager"
	            }
	        },

	        events: [
	            CHANGING,
	            CHANGE,
	            REFRESH
	        ],

	        destroy: function() {
	            Widget.fn.destroy.call(this);
	            this._content.destroy();
	            this.pane.destroy();

	            if (this.pager) {
	                this.pager.destroy();
	            }

	            this._navigationContainer.off(NS);
	            this._navigationContainer = null;
	            this.itemsWrapper.off(NS);
	            this.itemsWrapper = null;

	            if (this.options.navigatable) {
	                this.ariaLiveEl = this._current = null;
	            }

	            this.inner = null;
	            kendo.destroy(this.element);
	        },

	        viewInit: function() {
	            if (this.options.autoBind) {
	                this._content.scrollTo(this._content.page, true, true);
	            }
	        },

	        viewShow: function() {
	            this.pane.refresh();
	        },

	        refresh: function() {
	            var content = this._content;
	            var options = this.options;

	            content.resizeTo(this.pane.size());
	            this.page = content.page;

	            if (content instanceof ScrollViewContent || content.dataReader.initialFetch) {
	                if (options.enablePager) {
	                    this.trigger(REFRESH, { pageCount: content.pageCount, page: content.page });
	                }
	                else {
	                    this.trigger(CHANGE, { pageCount: content.pageCount, currentPage: content.page });
	                }
	            }
	        },

	        content: function(html) {
	           this.element.children().first().html(html);
	           this._content._getPages();
	           this.pane.refresh();
	        },

	        scrollTo: function(page, instant, silent) {
	            this._content.scrollTo(page, instant, silent);
	        },

	        prev: function() {
	            var that = this,
	                prevPage =  that._content.page - 1;

	            if (that._content instanceof VirtualScrollViewContent) {
	                that._content.paneMoved(RIGHT_SWIPE, undefined, function(eventData) {
	                    return that.trigger(CHANGE, eventData);
	                });
	            } else if (prevPage > -1) {
	                that.scrollTo(prevPage);
	            }
	        },

	        next: function() {
	            var that = this,
	                nextPage = that._content.page + 1;

	            if (that._content instanceof VirtualScrollViewContent) {
	                that._content.paneMoved(LEFT_SWIPE, undefined, function(eventData) {
	                    return that.trigger(CHANGE, eventData);
	                });
	            } else if (nextPage < that._content.pageCount) {
	                that.scrollTo(nextPage);
	            }
	        },

	        setDataSource: function(dataSource) {
	            var that = this;
	            if (!(this._content instanceof VirtualScrollViewContent)) {
	                return;
	            }
	            // the scrollview should have a ready datasource for MVVM to function properly. But an empty datasource should not empty the element
	            var emptyDataSource = !dataSource;
	            if (dataSource instanceof DataSource) {
	                dataSource.options.pageSize = dataSource.options.pageSize || 1;
	                this.dataSource = dataSource = new DataSource(dataSource.options);
	            }
	            else {
	                this.dataSource = DataSource.create(dataSource);
	            }

	            this._content.setDataSource(this.dataSource);

	            if (this.options.autoBind && !emptyDataSource) {
	                this.dataSource.fetch(function() {
	                    that._content.dataReader.initialFetch = true;
	                    that.scrollTo(that._content.page, true, true);
	                    that._content.trigger("reset");
	                });
	            }
	        },

	        items: function() {
	            return this.element.find(".k-" + VIRTUAL_PAGE_CLASS);
	        },

	        _updateAria: function () {
	            var content = this._content;
	            if (this.options.navigatable) {
	                this.ariaLiveEl.html(this._ariaTemplate({index: (content.page + 1), total: content.pageCount}));
	            }
	        },

	        _setCurrent: function (current) {
	            if (!this._focused) {
	                return;
	            }
	            var that = this;
	            var page = that._content.page;
	            var id = kendo.guid();
	            var children = that.itemsWrapper.children();
	            var next = $(current || children.eq(page));

	            if (that._content.pages) {
	                children.attr("aria-hidden", true);
	                that._content.pages[1].element.removeAttr("aria-hidden");
	                return;
	            }

	            if (that._current) {
	                $(that._current)
	                    .removeClass(FOCUSED)
	                    .removeAttr("id");

	                children.attr("aria-hidden", true);
	            }

	            next
	                .attr("id", id)
	                .removeAttr("aria-hidden")
	                .addClass(FOCUSED);

	            that.itemsWrapper.attr("aria-activedescendant", id);
	            that._updateAria();

	            that._current = next;
	        },

	        _dragStart: function() {
	            this._content.forcePageUpdate();
	        },

	        _dragEnd: function(e) {
	            var that = this,
	                velocity = e.x.velocity,
	                velocityThreshold = this.options.velocityThreshold,
	                swipeType = NUDGE,
	                bounce = abs(velocity) > this.options.bounceVelocityThreshold;

	            if (velocity > velocityThreshold) {
	                swipeType = RIGHT_SWIPE;
	            } else if (velocity < -velocityThreshold) {
	                swipeType = LEFT_SWIPE;
	            }

	            this._content.paneMoved(swipeType, bounce, function(eventData) {
	                return that.trigger(CHANGE, eventData);
	            });
	        },

	        _transitionEnd: function() {
	            this._content.updatePage();
	            if (this.options.navigatable) {
	                this._setCurrent();
	            }
	        },

	        _initNavigation: function() {
	            var that = this;
	            var prevArrow;
	            var nextArrow;
	            var messages = that.options.messages;
	            var navigationContainer = that._navigationContainer = $("<div class='k-scrollview-elements'></div>");

	            if (that.options.navigatable) {
	                prevArrow = $('<a class="k-scrollview-prev" aria-label="' + messages.previousButtonLabel + '"><span class="k-icon k-i-arrowhead-w"></span></a>');
	                nextArrow = $('<a class="k-scrollview-next" aria-label="' + messages.nextButtonLabel + '"><span class="k-icon k-i-arrowhead-e"></span></a>');
	            } else {
	                prevArrow = $('<a class="k-scrollview-prev"><span class="k-icon k-i-arrowhead-w"></span></a>');
	                nextArrow = $('<a class="k-scrollview-next"><span class="k-icon k-i-arrowhead-e"></span></a>');
	            }

	            prevArrow.hide();
	            nextArrow.hide();

	            navigationContainer.append(prevArrow);
	            navigationContainer.append(nextArrow);
	            that.element.append(navigationContainer);

	            if (that.options.navigatable) {
	                that.ariaLiveEl = $("<div aria-live='polite' aria-atomic='true' class='k-sr-only'></div>");
	                that.element.append(that.ariaLiveEl);
	            }

	            navigationContainer.on(CLICK+NS, "a.k-scrollview-prev", proxy(that.prev, that));
	            navigationContainer.on(CLICK+NS, "a.k-scrollview-next", proxy(that.next, that));
	        },

	        _navigatable: function () {
	            var that = this;
	            var navigationContainer = that._navigationContainer;

	            if (!that.options.navigatable) {
	                return;
	            }

	            that._ariaTemplate = kendo.template(that.options.ARIATemplate);

	            navigationContainer.find(">a.k-scrollview-prev").attr(TABINDEX, 0);
	            navigationContainer.find(">a.k-scrollview-next").attr(TABINDEX, 0);

	            navigationContainer.on(KEYDOWN + NS, that, function (e) {
	                var target = $(e.target);
	                if (e.keyCode == keys.SPACEBAR || e.keyCode == keys.ENTER) {
	                    e.preventDefault();
	                    target.click();
	                }
	            });

	            that.itemsWrapper
	                .attr("aria-roledescription", "carousel")
	                .attr(TABINDEX, 0);

	            that.itemsWrapper.on(KEYDOWN + NS, that, proxy(that._keyDown, that));
	            that.itemsWrapper.on(FOCUS + NS, proxy(that._focus, that));
	            that.itemsWrapper.on(FOCUSOUT + NS, proxy(that._blur, that));
	        },

	        _focus: function () {
	            var that = this;
	            that._focused = true;
	            that._setCurrent();
	        },

	        _blur: function () {
	            if (this._current) {
	                this._current.removeClass(FOCUSED);
	                this._current.removeAttr("id");
	                this.itemsWrapper.removeAttr("aria-activedescendant");
	            }
	        },

	        _keyDown: function (e) {
	            var that = this;
	            var handled;
	            var key = e.keyCode;

	            if (key == keys.LEFT) {
	                handled = true;
	                that.prev();
	            }

	            if (key == keys.RIGHT) {
	                handled = true;
	                that.next();
	            }

	            if (handled) {
	                e.preventDefault();
	                e.stopPropagation();
	            }
	        },

	        _toggleNavigation: function(e) {
	            var page = e.nextPage || e.nextPage === 0 ? e.nextPage : e.currentPage;
	            var navigationContainer = this._navigationContainer;
	            var prevArrow = navigationContainer.find(">a.k-scrollview-prev");
	            var nextArrow = navigationContainer.find(">a.k-scrollview-next");

	            prevArrow.hide();
	            nextArrow.hide();

	            if (page || page === 0) {
	                if (page !== 0) {
	                    prevArrow.show();
	                }
	                if (page != this._content.pageCount - 1) {
	                    nextArrow.show();
	                }
	            }
	        }
	    });

	    ui.plugin(ScrollView);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });