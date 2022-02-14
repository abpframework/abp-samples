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

	__webpack_require__(1706);
	module.exports = __webpack_require__(1706);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1706:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function($, undefined) {
	    var kendo = window.kendo,
	        Observable = kendo.Observable,
	        extend = $.extend;

	    var TaskBoardCardStyles = {
	        element: "k-taskboard-card",
	        card: "k-card",
	        header: "k-card-header",
	        hbox: "k-hbox",
	        title: "k-card-title",
	        link: "k-link",
	        spacer: "k-spacer",
	        button: "k-button",
	        cardMenuButton: "k-taskboard-card-menu-button k-icon-button",
	        flatButton: "k-button-md k-rounded-md k-button-flat k-button-flat-base",
	        body: "k-card-body",
	        actionsIcon: "k-icon k-i-more-vertical",
	        moveCursor: "k-cursor-move",
	        categoryBorder: "k-taskboard-card-category",
	        headerActions: "k-card-header-actions",
	        disabled: "k-state-disabled"
	    };

	    var TaskBoardCard = Observable.extend({
	        init: function (options, dataItem, resources) {
	            var that = this;

	            that._dataItem = dataItem;
	            that.resources = resources;

	            that.options = extend(true, {}, options);

	            that._render();

	            Observable.fn.init.call(that);
	        },

	        headerTemplate: '<div class="#:styles.header# #:styles.hbox#">' +
	                            '<a class="#:styles.title# #:styles.link#" href="\\#" #if(selectable){##:kendo.attr("command")#="SelectCardCommand"#}#>#:{0}#</a>' +
	                            '<span class="#:styles.spacer#"></span>' +
	                            '#=cardMenuButton#' +
	                        '</div>',
	        bodyTemplate: '<div class="#:styles.body#"><p>#:{0}#</p></div>',
	        cardMenuButtonTemplate: '<div class="#:styles.headerActions#"><button class="#:styles.button# #:styles.flatButton# #:styles.cardMenuButton#">' +
	                                    '<span class="k-button-icon #:styles.actionsIcon#"></span>' +
	                                '</button></div>',

	        _render: function(){
	            var that = this,
	                options = that.options,
	                styles = TaskBoardCard.styles,
	                template = options.template || that._buildTemplate(),
	                element = $("<div class='" + styles.element + " " + styles.card + " " + styles.moveCursor + "'></div>"),
	                cardMenuButtonTemplate = options.cardMenu ? that.cardMenuButtonTemplate : "",
	                resources = that._resources(that._dataItem),
	                borderDir = options.states.isRtl ? "borderRightColor" : "borderLeftColor",
	                categoryColor;

	            element
	                .attr(kendo.attr("uid"), that._dataItem.uid)
	                .attr("aria-disabled", !options.states.isDisabled)
	                .attr("role", "listitem")
	                .toggleClass(styles.disabled, options.states.isDisabled);

	            categoryColor = (resources[options.dataCategoryField] && resources[options.dataCategoryField].color) ||
	                                that._dataItem.get(options.dataCategoryField);

	            if (categoryColor) {
	                element.addClass(styles.categoryBorder).css(borderDir, categoryColor);
	            }

	            element.append(kendo.template(template)(extend(true, {}, {
	                styles: styles,
	                cardMenuButton: kendo.template(cardMenuButtonTemplate)({ styles: styles }),
	                selectable: options.states.isSelectable,
	                resources: resources
	            }, that._dataItem)));

	            that.element = element;
	        },

	        _resources: function(card) {
	            var that = this,
	                resources = {};

	            if (!that.resources) {
	                return resources;
	            }

	            for (var key in that.resources) {
	                var resource = that.resources[key];
	                var field = resource.field;
	                var cardResources = kendo.getter(field)(card);

	                if (!cardResources) {
	                    continue;
	                }

	                if (!resource.multiple) {
	                    cardResources = [cardResources];
	                }

	                var data = resource.dataSource.view();

	                for (var resourceIndex = 0; resourceIndex < cardResources.length; resourceIndex++) {
	                    var cardResource = null;

	                    var value = cardResources[resourceIndex];

	                    if (!resource.valuePrimitive) {
	                        value = kendo.getter(resource.dataValueField)(value);
	                    }

	                    for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
	                        if (data[dataIndex].get(resource.dataValueField) == value) {
	                            cardResource = data[dataIndex];
	                            break;
	                        }
	                    }

	                    if (cardResource !== null) {
	                        var resourceColor = kendo.getter(resource.dataColorField)(cardResource);
	                        var result = {
	                            field: resource.field,
	                            title: resource.title,
	                            name: resource.name,
	                            text: kendo.getter(resource.dataTextField)(cardResource),
	                            value: value,
	                            color: resourceColor
	                        };

	                        if(resource.multiple){
	                            if(resources[resource.field]) {
	                                resources[resource.field].push(result);
	                            } else {
	                                resources[resource.field] = [result];
	                            }
	                        } else {
	                            resources[resource.field] = result;
	                        }
	                    }
	                }
	            }
	            return resources;
	        },

	        _buildTemplate: function () {
	            var that = this,
	                options = that.options,
	                headerTemplate = kendo.format(that.headerTemplate, options.dataTitleField),
	                bodyTemplate = kendo.format(that.bodyTemplate, options.dataDescriptionField);

	            return headerTemplate + bodyTemplate;
	        }
	    });

	    extend(kendo.ui.taskboard, {
	        Card: TaskBoardCard
	    });

	    extend(true, kendo.ui.taskboard.Card, { styles: TaskBoardCardStyles });

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });