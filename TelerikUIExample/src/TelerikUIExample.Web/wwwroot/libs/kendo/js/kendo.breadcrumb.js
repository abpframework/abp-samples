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

	module.exports = __webpack_require__(1092);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "breadcrumb",
	    name: "Breadcrumb",
	    category: "web",
	    description: "The Breadcrumb widget displays navigation breadcrumb.",
	    depends: [ "core" ]
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,
	        extend = $.extend,
	        isPlainObject = $.isPlainObject,

	        proxy = $.proxy,

	        BREADCRUMB = ".kendoBreadcrumb",

	        ARIA_HIDDEN = "aria-hidden",
	        ARIA_LABEL = "aria-label",

	        CLICK = "click",
	        FOCUS = "focus",
	        BLUR = "blur",
	        KEYDOWN = "keydown",
	        CHANGE = "change",
	        DOT = ".";

	    var breadcrumbStyles = {
	        widget: "k-widget k-breadcrumb",
	        overlay: "k-breadcrumb-container",
	        textbox: "k-input-inner",
	        textboxWrapper: "k-textbox k-input k-input-md k-rounded-md k-input-solid",
	        link: "k-breadcrumb-link",
	        item: "k-breadcrumb-item",
	        delimiter: "k-breadcrumb-delimiter-icon",
	        rootItem: "k-breadcrumb-root-item",
	        rootLink: "k-breadcrumb-root-link",
	        overflowIcon: "k-breadcrumb-overflow-icon",
	        focused: "k-state-focused",
	        hidden: "k-hidden",
	        inputWrapper: "k-breadcrumb-input-container"
	    };

	    var Breadcrumb = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            options = options || {};

	            Widget.fn.init.call(that, element, options);

	            that._wrapper();

	            if(options.editable) {
	                that._editable();
	                that._tabindex();
	            }

	            that.wrapper.on(CLICK + BREADCRUMB, "a:not(.k-state-disabled)", proxy(that._click, that));

	            if(options.value || options.bindToLocation || !options.items) {
	                that._value();
	            } else if (options.items) {
	                that.items(options.items);
	            }

	            that._resizeHandler = kendo.onResize(function() {
	                that.resize(true);
	            });
	        },

	        options: {
	            editable: false,
	            navigational: false,
	            bindToLocation: false,
	            items: null,
	            name: "Breadcrumb",
	            gap: 0,
	            rootIcon: "home",
	            delimiterIcon: "arrow-chevron-right",
	            messages: {
	                rootTitle: "Go to root"
	            }
	        },

	        events: [ CHANGE, CLICK ],

	        destroy: function() {
	            var that = this;

	            Widget.fn.destroy.call(that);

	            kendo.unbindResize(that._resizeHandler);

	            that.wrapper
	                .add(that.wrapper.find("input"))
	                .add(that.wrapper.find("a"))
	                .off(BREADCRUMB);
	        },

	        items: function(items) {
	            var that = this;

	            if(items === undefined) {
	                return that.options.items;
	            }

	            that.options.items = items;
	            that._segments = items;
	            that.refresh();
	        },

	        _update: function(val) {
	            var that = this;

	            if (val !== that.value()) {
	                that._generateSegments(val);
	                that.refresh();
	                that.trigger(CHANGE, { sender: this, value: val });
	            }
	        },

	        _generateSegments: function (value) {
	            var that = this,
	                options = that.options,
	                items = options.items,
	                path, segments;

	            segments = that._split(value);

	            if(!items) {
	                that.options.items = that._segments = segments;
	                return;
	            }

	            that._segments = [];

	            for (var i = 0; i < segments.length; i++) {
	                path = that._path(items.slice(0, i + 1));

	                if (path !== "" && value.indexOf(path) > -1 && items[i] && items[i].text === segments[i]) {
	                    that._segments.push(items[i]);
	                } else {
	                    that._segments.push(segments[i]);
	                }
	            }
	        },

	        _click: function(e) {
	            var that = this,
	                options = that.options,
	                item = $(e.target).closest(DOT + breadcrumbStyles.item),
	                previousDomItems = item.prevAll().addBack(),
	                previousItems = that._getItems(previousDomItems),
	                path = that._path(previousItems),
	                segment = that._segments[item.index()];

	            if(!options.navigational) {
	                e.preventDefault();
	            }

	            if(!that.trigger(CLICK, { sender: that, originalEvent: e, isRoot: segment.type === "rootitem", item: segment})) {
	                that._update(path);
	            }
	        },

	        _getItems: function(items) {
	            var that = this;

	            return $.map(items, function(item) {
	                return that._segments[$(item).index()] || item.innerText;
	            });
	        },

	        _edit: function() {
	            var that = this,
	                input = that.input;

	            that.oldValue = that.value();
	            that.inputWrapper.css("height", that.wrapper.height());
	            that.overlay.hide();
	            that.input.val(that.value());
	            that.input.attr(ARIA_HIDDEN, false);
	            that.inputWrapper.show();

	            setTimeout(function() {
	                input.select();
	            });
	        },

	        _blur: function(shouldRestoreValue) {
	            var that = this,
	                input = that.input,
	                inputWrapper = that.inputWrapper,
	                wrapper = that.wrapper,
	                overlay = that.overlay,
	                val = input.val().replace(/\/{2,}/g, "/");

	            if (overlay.is(":visible")) {
	                return;
	            }

	            if (shouldRestoreValue) {
	                val = that.oldValue;
	            }

	            input.attr(ARIA_HIDDEN, true);
	            inputWrapper.hide();
	            overlay.show();
	            input.val("");
	            that._update(val);
	            wrapper.removeClass(breadcrumbStyles.focused);
	        },

	        _keydown: function(e) {
	            var that = this,
	                key = e.keyCode,
	                isEnter = key === kendo.keys.ENTER,
	                isEsc = key === kendo.keys.ESC;

	            if (isEnter || isEsc) {
	                that._blur(isEsc);

	                setTimeout(function() {
	                    that.overlay.find("a").first().trigger("focus");
	                });
	            }
	        },

	        isNavigational: function(target) {
	            var canNavigate =
	                target.hasClass(breadcrumbStyles.textbox) ||
	                target.closest(DOT + breadcrumbStyles.item);

	            if(target[0] === this.wrapper[0]) {
	                return false;
	            }

	            return canNavigate && !target.hasClass("k-breadcrumb-last-item");
	        },

	        _wrapperKeydown: function (ev) {
	            var that = this,
	                target = $(ev.target),
	                isNavigational = that.isNavigational(target);

	            if (ev.keyCode === kendo.keys.ENTER && !isNavigational) {
	                that._edit();
	            }
	        },

	        _wrapperClick: function (ev) {
	            var that = this,
	                target = $(ev.target),
	                isNavigational = that.isNavigational(target);

	            if(!isNavigational) {
	                this._edit();
	            }
	        },

	        _wrapperFocus: function(ev) {
	            $(ev.target).addClass(breadcrumbStyles.focused);
	        },

	        _wrapperBlur: function(ev) {
	            $(ev.target).removeClass(breadcrumbStyles.focused);
	        },

	        _wrapper: function() {
	            var that = this,
	                element = this.element,
	                elementIsInput = element.is("input"),
	                inputWrapper = $("<div class=\"" + breadcrumbStyles.inputWrapper + "\"><span class=\"" + breadcrumbStyles.textboxWrapper + "\"></span></div>");

	            that.wrapper = elementIsInput ? element
	                .wrap($("<nav />"))
	                .parent() : element;

	            if (elementIsInput) {
	                that.element
	                    .wrap(inputWrapper)
	                    .addClass(breadcrumbStyles.textbox);

	                that.inputWrapper = that.wrapper.find(DOT + breadcrumbStyles.inputWrapper).hide();
	            } else {
	                that.inputWrapper = that.wrapper
	                    .append(inputWrapper)
	                    .find(DOT + breadcrumbStyles.inputWrapper).hide();
	            }

	            that.wrapper.addClass(breadcrumbStyles.widget);
	            that.wrapper.attr(ARIA_LABEL, "Breadcrumb");

	            that.overlay = that.wrapper
	                .append($("<ol />").addClass(breadcrumbStyles.overlay))
	                .find(DOT + breadcrumbStyles.overlay);
	        },


	        _editable: function(){
	            var that = this,
	                element = that.element,
	                elementIsInput = element.is("input");

	            if(elementIsInput) {
	                that.input = that.element;
	            } else {
	                that.input = $("<input />");
	            }

	            that.inputWrapper.find(DOT + breadcrumbStyles.textboxWrapper.split(' ')[0]).append(that.input);

	            that.input
	                .addClass(breadcrumbStyles.textbox)
	                .attr(ARIA_HIDDEN, true);

	            that.input
	                .on(BLUR + BREADCRUMB, proxy(that._blur, that, false))
	                .on(KEYDOWN + BREADCRUMB, proxy(that._keydown, that));

	            that.wrapper
	                .on(FOCUS + BREADCRUMB, proxy(that._wrapperFocus, that))
	                .on(BLUR + BREADCRUMB, proxy(that._wrapperBlur, that))
	                .on(KEYDOWN + BREADCRUMB, proxy(that._wrapperKeydown, that))
	                .on(CLICK + BREADCRUMB, proxy(that._wrapperClick, that));
	        },

	        _value: function () {
	            var that = this,
	                options = that.options;

	            if (options.value) {
	                that.value(options.value);
	            } else if (options.bindToLocation) {
	                that.value(window.location.href.replace(/http(s?):\/\//,"").replace(/\/$/, ""));
	            } else {
	                that.value("");
	            }
	        },

	        _split: function(value) {
	            return value.split("/").filter(function (item, index) {
	                if(index > 0 && item === "") {
	                    return false;
	                }

	                return true;
	            });
	        },

	        isRtl: function() {
	            return kendo.support.isRtl(this.wrapper);
	        },

	        refresh: function() {
	            var that = this,
	                options = that.options,
	                messages = options.messages,
	                delimiterIcon = that.options.delimiterIcon,
	                html = "",
	                href = "",
	                isOnlyRoot = that.value() === "",
	                segments = that._segments,
	                segment,
	                idx,
	                length, isLastSegment;

	            if (delimiterIcon == "arrow-chevron-right" && that.isRtl()) {
	                delimiterIcon = "arrow-chevron-left";
	            }

	            for (idx = 0, length = segments.length; idx < length; idx++) {
	                segment = segments[idx];
	                isLastSegment = idx === segments.length - 1;

	                if (segment !== undefined) {
	                    if(!html) {
	                        href = "/";
	                    } else {
	                        href += segment.text || segment || "";
	                    }

	                    if(typeof segment === "string") {
	                        segment = {
	                            type: !html ? "rootitem" : "item",
	                            href: options.navigational ? href : "#",
	                            text: segment,
	                            showIcon: !html,
	                            showText: !!html,
	                            icon: !html ? options.rootIcon : "",
	                            itemClass: !html ? "k-breadcrumb-root-item" : "",
	                            linkClass: !html ? breadcrumbStyles.rootLink : "",
	                            delimiterIcon: delimiterIcon,
	                            renderDelimiter: !isLastSegment && !isOnlyRoot,
	                            lastSegment: isLastSegment,
	                            iconClass: ""
	                        };

	                        that._segments.splice(idx, 1, segment);
	                    } else if (isPlainObject(segment)) {
	                        segment = extend({}, segment, {
	                            type: segment.type ? segment.type.toLowerCase() : "item"
	                        });

	                        segment = extend({}, segment, {
	                            text: segment.text || "",
	                            title: segment.text || "",
	                            icon: segment.icon || (segment.type === "rootitem" ? options.rootIcon : ""),
	                            iconClass: segment.iconClass || "",
	                            lastSegment: isLastSegment,
	                            renderDelimiter: !isLastSegment && segments.length > 1,
	                            href: options.navigational ? segment.href : "#",
	                            delimiterIcon: delimiterIcon,
	                            itemClass: segment.itemClass || "",
	                            linkClass: segment.linkClass || "",
	                            showIcon: segment.showIcon === undefined ? segment.type === "rootitem" && segment.type !== "item" : segment.showIcon,
	                            showText: segment.showText === undefined ? segment.type === "item" && segment.type !== "rootitem" : segment.showText
	                        });

	                        if(segment.type === "rootitem") {
	                            segment.itemClass += " k-breadcrumb-root-item";
	                            segment.linkClass += " " +  breadcrumbStyles.rootLink;
	                        }
	                    }

	                    if(segment.type === "rootitem" && segment.text === "") {
	                        segment.title = messages.rootTitle;
	                    }

	                    href += href.match(/\/$/) ? "" : "/";

	                    html += kendo.template(this.itemTemplate)(segment);
	                }
	            }

	            this.overlay
	                .empty()
	                .append($(html));

	            this.resize(true);
	        },

	        itemTemplate: '<li class="k-breadcrumb-item #:itemClass# #if(lastSegment){#k-breadcrumb-last-item#}#">' +
	            '<a href="#:href#" class="#:linkClass# ' +
	                                     '#if(type !== "rootitem"){# k-breadcrumb-link#}#' +
	                                     '#if(showText && showIcon){# k-breadcrumb-icontext-link#}#' +
	                                     '#if(showIcon && !showText){# k-breadcrumb-icon-link#}#' +
	                                     '#if(lastSegment && type !== "rootitem"){# k-state-disabled#}#"' +
	                                     '#if(lastSegment){# aria-current="page"#}# title="#:text || title#">' +
	                '#if(showIcon) {#' +
	                    '<span class="#if(icon){#k-icon k-i-#:icon##}# #:iconClass#"></span>' +
	                '#}#' +
	                '#if(showText) {#' +
	                    '#:text#' +
	                '#}#' +
	            '</a>' +
	            '#if(renderDelimiter) {#' +
	                '<span class="k-breadcrumb-delimiter-icon k-icon k-i-#:delimiterIcon#" aria-hidden="true"></span>' +
	            '#}#' +
	            '#if(type === "rootitem" && renderDelimiter) {#' +
	                '<span class="k-breadcrumb-delimiter-icon k-hidden k-icon k-i-#:delimiterIcon#" aria-hidden="true"></span>' +
	            '#}#' +
	        '</li>',

	        _displayOverflowIcons: function(visible) {
	            var that = this,
	                rootItem = that.wrapper.find(DOT + breadcrumbStyles.rootItem);

	            if (visible) {
	                rootItem.find(DOT + breadcrumbStyles.delimiter)
	                    .addClass(breadcrumbStyles.overflowIcon)
	                    .removeClass(breadcrumbStyles.hidden);
	            } else {
	                rootItem.find(DOT + breadcrumbStyles.overflowIcon)
	                    .removeClass(breadcrumbStyles.overflowIcon)
	                    .last().addClass(breadcrumbStyles.hidden);
	            }
	        },

	        _shrinkItems: function() {
	            var that = this,
	                wrapper = that.wrapper,
	                overlay = that.overlay,
	                items = that.overlay.find(DOT + breadcrumbStyles.item + ":visible:not(.k-breadcrumb-root-item)"),
	                availableWidth = wrapper.width() - that.options.gap,
	                item;

	            if (items.length == 1) {
	                return;
	            }

	            for (var i = 0; i < items.length; i += 1) {
	                item = $(items[i]);

	                if (kendo._outerWidth(overlay) >= availableWidth) {
	                    if (i == items.length - 1) {
	                        break;
	                    }

	                    item.hide();
	                    that._displayOverflowIcons(true);
	                }
	            }
	        },

	        _showItem: function(item, overlayWidth, availableWidth) {
	            if (item.length && availableWidth > overlayWidth + kendo._outerWidth(item, true)) {
	                item.show();

	                return true;
	            }

	            return false;
	        },

	        _stretchItems: function() {
	            var that = this,
	                wrapper = that.wrapper,
	                overlay = that.overlay,
	                items = that.overlay.find(DOT + breadcrumbStyles.item + ":hidden:not(.k-breadcrumb-root-item)"),
	                availableWidth = wrapper.width() - that.options.gap,
	                item, overlayWidth;

	            if (!items.length) {
	                that._displayOverflowIcons(false);
	            }

	            for (var i = items.length - 1; i >= 0; i--) {
	                item = $(items[i]);

	                overlayWidth = kendo._outerWidth(overlay);

	                if (overlayWidth > availableWidth || !this._showItem(item, overlayWidth, availableWidth)) {
	                    break;
	                }
	            }
	        },

	        _resize: function() {
	            this._shrinkItems();
	            this._stretchItems();
	        },

	        getSize: function() {
	            return kendo.dimensions(this.wrapper);
	        },

	        value: function(val) {
	            var that = this;

	            if (val !== undefined) {
	                that._generateSegments(val);
	                that.refresh();
	                return;
	            }

	            return that._path(that._segments);
	        },

	        _path: function(trail) {
	            return $.map(trail, function(b) {
	                var text = isPlainObject(b) ? b.text : b;
	                return text === "/" ? "" : text;
	            }).join("/");
	        }
	    });

	    kendo.ui.plugin(Breadcrumb);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });