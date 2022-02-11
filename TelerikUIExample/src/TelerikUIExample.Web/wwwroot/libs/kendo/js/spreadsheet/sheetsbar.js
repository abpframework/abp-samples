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

	__webpack_require__(1696);
	module.exports = __webpack_require__(1696);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1696:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20), __webpack_require__(1697) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	    (function(kendo) {

	        var $ = kendo.jQuery;
	        var outerWidth = kendo._outerWidth;
	        var DOT = ".";
	        var EMPTYCHAR = " ";
	        var sheetsBarClassNames = {
	            sheetsBarWrapper: "k-widget k-header",
	            sheetsBarSheetsWrapper: "k-tabstrip k-floatwrap k-tabstrip-bottom",
	            sheetsBarActive: "k-spreadsheet-sheets-bar-active",
	            sheetsBarInactive: "k-spreadsheet-sheets-bar-inactive",
	            sheetsBarAdd: "k-spreadsheet-sheets-bar-add",
	            sheetsBarRemove: "k-spreadsheet-sheets-remove",
	            sheetsBarItems: "k-spreadsheet-sheets-items",
	            sheetsBarEditor: "k-spreadsheet-sheets-editor",
	            sheetsBarScrollable: "k-tabstrip-scrollable",
	            sheetsBarNext: "k-tabstrip-next",
	            sheetsBarPrev: "k-tabstrip-prev",
	            sheetsBarKItem: "k-item k-tabstrip-item",
	            sheetsBarKActive: "k-state-active k-state-tab-on-top",
	            sheetsBarKTextbox: "k-textbox",
	            sheetsBarKLink: "k-link",
	            sheetsBarKIcon: "k-icon",
	            sheetsBarKFontIcon: "k-icon",
	            sheetsBarKButton: "k-button k-icon-button",
	            sheetsBarKButtonDefaults: "k-button-md k-rounded-md k-button-solid k-button-solid-base",
	            sheetsBarKButtonBare: "k-button-md k-rounded-md k-button-flat k-button-flat-base",
	            sheetsBarKArrowW: "k-i-arrow-60-left",
	            sheetsBarKArrowE: "k-i-arrow-60-right",
	            sheetsBarKReset: "k-reset k-tabstrip-items",
	            sheetsBarKIconX: "k-i-close",
	            sheetsBarKSprite: "k-sprite",
	            sheetsBarKIconPlus: "k-i-plus",
	            sheetsBarHintWrapper: "k-widget k-tabstrip k-tabstrip-bottom k-spreadsheet-sheets-items-hint",
	            sheetsBarKResetItems: "k-reset k-tabstrip-items"
	        };

	        var SheetsBar = kendo.ui.Widget.extend({
	            init: function(element, options) {
	                var classNames = SheetsBar.classNames;

	                kendo.ui.Widget.call(this, element, options);

	                element = this.element;

	                element.addClass(classNames.sheetsBarWrapper);

	                this._openDialog = options.openDialog;

	                this._tree = new kendo.dom.Tree(element[0]);

	                this._tree.render([this._addButton(), this._createSheetsWrapper([])]);

	                this._toggleScrollEvents(true);

	                this._createSortable();

	                this._sortable.bind("start", this._onSheetReorderStart.bind(this));

	                this._sortable.bind("end", this._onSheetReorderEnd.bind(this));

	                element.on("click", DOT + classNames.sheetsBarRemove, this._onSheetRemove.bind(this));

	                element.on("click", "li", this._onSheetSelect.bind(this));

	                element.on("dblclick", "li" + DOT + classNames.sheetsBarActive, this._createEditor.bind(this));

	                element.on("click", DOT + classNames.sheetsBarAdd, this._onAddSelect.bind(this));
	            },

	            options: {
	                name: "SheetsBar",
	                scrollable: {
	                    distance: 200
	                }
	            },

	            events: [
	                "select",
	                "reorder",
	                "rename"
	            ],

	            _createEditor: function () {
	                if (this._editor) {
	                    return;
	                }

	                this._renderSheets(this._sheets, this._selectedIndex, true);
	                this._editor = this.element
	                    .find(kendo.format("input{0}{1}",DOT,SheetsBar.classNames.sheetsBarEditor))
	                    .trigger("focus")
	                    .on("keydown", this._onEditorKeydown.bind(this))
	                    .on("blur", this._onEditorBlur.bind(this));
	            },

	            _destroyEditor: function(canceled) {
	                var newSheetName = canceled ? null : this._editor.val();
	                this._editor.off();
	                this._editor = null;
	                this._renderSheets(this._sheets, this._selectedIndex, false);
	                this._onSheetRename(newSheetName);
	            },

	            renderSheets: function(sheets, selectedIndex) {
	                if (!sheets || selectedIndex < 0) {
	                    return;
	                }

	                this._renderSheets(sheets, selectedIndex, false);
	            },

	            _renderSheets: function(sheets, selectedIndex, isInEditMode) {
	                var that = this;
	                var classNames = SheetsBar.classNames;

	                that._isRtl = kendo.support.isRtl(that.element);
	                that._sheets = sheets;
	                that._selectedIndex = selectedIndex;

	                that._renderHtml(isInEditMode, true);

	                if (!that._scrollableAllowed()) {
	                    return;
	                }

	                var sheetsWrapper = that._sheetsWrapper();

	                sheetsWrapper.addClass(classNames.sheetsBarScrollable + EMPTYCHAR + classNames.sheetsBarSheetsWrapper);

	                that._toggleScrollButtons();
	            },

	            _toggleScrollButtons: function (toggle) {
	                var that = this;
	                var ul = that._sheetsGroup();
	                var wrapper = that._sheetsWrapper();
	                var scrollLeft = kendo.scrollLeft(ul);
	                var prev = wrapper.find(DOT + SheetsBar.classNames.sheetsBarPrev);
	                var next = wrapper.find(DOT + SheetsBar.classNames.sheetsBarNext);

	                if (toggle === false) {
	                    prev.addClass( 'k-disabled' );
	                    next.addClass( 'k-disabled' );
	                } else {
	                    prev.toggleClass( 'k-disabled', !(that._isRtl ? scrollLeft < ul[0].scrollWidth - ul[0].offsetWidth - 1 : scrollLeft !== 0) );
	                    next.toggleClass( 'k-disabled', !(that._isRtl ? scrollLeft !== 0 : scrollLeft < ul[0].scrollWidth - ul[0].offsetWidth - 1) );
	                }

	            },

	            _toggleScrollEvents: function(toggle) {
	                var that = this;
	                var classNames = SheetsBar.classNames;
	                var options = that.options;
	                var scrollPrevButton;
	                var scrollNextButton;
	                var sheetsWrapper = that._sheetsWrapper();
	                scrollPrevButton = sheetsWrapper.find(DOT + classNames.sheetsBarPrev);
	                scrollNextButton = sheetsWrapper.find(DOT + classNames.sheetsBarNext);

	                if (toggle) {
	                    scrollPrevButton.on("mousedown", function () {
	                        that._nowScrollingSheets = true;
	                        that._scrollSheetsByDelta(options.scrollable.distance * (that._isRtl ? 1 : -1));
	                    });

	                    scrollNextButton.on("mousedown", function () {
	                        that._nowScrollingSheets = true;
	                        that._scrollSheetsByDelta(options.scrollable.distance * (that._isRtl ? -1 : 1));
	                    });

	                    scrollPrevButton.add(scrollNextButton).on("mouseup", function () {
	                        that._nowScrollingSheets = false;
	                    });
	                } else {
	                    scrollPrevButton.off();
	                    scrollNextButton.off();
	                }
	            },

	            _renderHtml: function(isInEditMode, renderScrollButtons) {
	                var idx;
	                var sheetElements = [];
	                var dom = kendo.dom;
	                var element = dom.element;
	                var sheets = this._sheets;
	                var selectedIndex = this._selectedIndex;
	                var classNames = SheetsBar.classNames;

	                for (idx = 0; idx < sheets.length; idx++) {
	                    var sheet = sheets[idx];
	                    var isSelectedSheet = (idx === selectedIndex);
	                    var attr = { className: classNames.sheetsBarKItem + EMPTYCHAR };
	                    var elementContent = [];

	                    if (isSelectedSheet) {
	                        attr.className += classNames.sheetsBarKActive + EMPTYCHAR + classNames.sheetsBarActive;
	                    } else {
	                        attr.className += classNames.sheetsBarInactive;
	                    }

	                    if (isSelectedSheet && isInEditMode) {
	                        elementContent.push(element("input", {
	                            type: "text",
	                            value: sheet.name(),
	                            className: classNames.sheetsBarKTextbox + EMPTYCHAR + classNames.sheetsBarEditor,
	                            maxlength: 50
	                        }, []));
	                    } else {
	                        elementContent.push(element("span", {
	                            className: classNames.sheetsBarKLink,
	                            title: sheet.name()
	                        }, [dom.text(sheet.name())]));

	                        if (sheets.length > 1) {
	                            var deleteIcon = element("span", {
	                                className: classNames.sheetsBarKIcon + EMPTYCHAR + classNames.sheetsBarKFontIcon + EMPTYCHAR + classNames.sheetsBarKIconX
	                            }, []);

	                            elementContent.push(element("span", {
	                                className: classNames.sheetsBarKLink + EMPTYCHAR + classNames.sheetsBarRemove,
	                                'data-type': 'remove'
	                            }, [deleteIcon]));
	                        }
	                    }

	                    sheetElements.push(element("li", attr, elementContent));
	                }

	                this._tree.render([this._addButton(),  this._createSheetsWrapper(sheetElements, renderScrollButtons)]);
	            },

	            _createSheetsWrapper: function(sheetElements, renderScrollButtons) {
	                var element = kendo.dom.element;
	                var classNames = SheetsBar.classNames;
	                var itemsWrapper = element('div', { className: 'k-tabstrip-items-wrapper k-hstack' } );
	                var childrenElements = [null, element("ul", {
	                    className: classNames.sheetsBarKReset
	                }, sheetElements), null ];

	                renderScrollButtons = true;

	                if (renderScrollButtons) {
	                    var baseButtonClass = classNames.sheetsBarKButton + EMPTYCHAR + classNames.sheetsBarKButtonBare + EMPTYCHAR;

	                    childrenElements[0] = (element("span", {className: baseButtonClass + classNames.sheetsBarPrev }, [
	                        element("span", {className: "k-button-icon" + EMPTYCHAR + classNames.sheetsBarKIcon + EMPTYCHAR + classNames.sheetsBarKArrowW}, [])
	                    ]));

	                    childrenElements[2] = (element("span", {className: baseButtonClass + classNames.sheetsBarNext }, [
	                        element("span", {className: "k-button-icon" + EMPTYCHAR + classNames.sheetsBarKIcon + EMPTYCHAR + classNames.sheetsBarKArrowE}, [])
	                    ]));
	                }

	                itemsWrapper.children = childrenElements;

	                return element("div", { className: classNames.sheetsBarItems }, [ itemsWrapper ]);
	            },

	            _createSortable: function() {
	                var classNames = SheetsBar.classNames;
	                this._sortable = new kendo.ui.Sortable(this.element, {
	                    filter: kendo.format("ul li.{0},ul li.{1}", classNames.sheetsBarActive, classNames.sheetsBarInactive),
	                    container: DOT + classNames.sheetsBarItems,
	                    axis: "x",
	                    animation: false,
	                    ignore: "input",
	                    end: function () {
	                        if (this.draggable.hint) {
	                            this.draggable.hint.remove();
	                        }
	                    },
	                    hint: function (element) {
	                        var hint = $(element).clone();
	                        return hint.wrap("<div class='" + classNames.sheetsBarHintWrapper + "'><ul class='" + classNames.sheetsBarKResetItems + "'></ul></div>").closest("div");
	                    }
	                });
	            },

	            _onEditorKeydown: function(e) {
	                if (this._editor) {
	                    if (e.which === 13) {
	                        this._destroyEditor();
	                    }

	                    if (e.which === 27) {
	                        this._destroyEditor(true);
	                    }
	                }
	            },

	            _onEditorBlur: function() {
	                if (this._editor) {
	                    this._destroyEditor();
	                }
	            },

	            _onSheetReorderEnd: function(e) {
	                e.preventDefault();
	                this.trigger("reorder", {oldIndex: e.oldIndex, newIndex: e.newIndex});
	            },

	            _onSheetReorderStart: function(e) {
	                if (this._editor) {
	                    e.preventDefault();
	                }
	            },

	            _onSheetRemove: function(e) {
	                var removedSheetName = $(e.target).closest("li").text();

	                if (this._editor) {
	                    this._destroyEditor();
	                }

	                var closeCallback = function(e) {
	                    var dlg = e.sender;

	                    if (dlg.isConfirmed()) {
	                        this.trigger("remove", { name: removedSheetName, confirmation: true });
	                    }
	                }.bind(this);

	                this._openDialog("confirmation", {
	                    close: closeCallback
	                });
	            },

	            _onSheetSelect: function(e) {
	                var selectedSheetText = $(e.target).text();

	                if ($(e.target).is(DOT + SheetsBar.classNames.sheetsBarEditor) || !selectedSheetText) {
	                    e.preventDefault();
	                    return;
	                }

	                if (this._editor) {
	                    this._destroyEditor();
	                }

	                this._scrollSheetsToItem($(e.target).closest("li"));

	                this.trigger("select", {name: selectedSheetText, isAddButton: false});
	            },

	            _onSheetRename: function(newSheetName) {
	                if (this._sheets[this._selectedIndex].name() === newSheetName || newSheetName === null) {
	                    return;
	                }

	                this.trigger("rename", {name: newSheetName, sheetIndex: this._selectedIndex });
	            },

	            _onAddSelect: function() {
	                this.trigger("select", {isAddButton: true});
	            },

	            _addButton: function() {
	                var element = kendo.dom.element;
	                var classNames = SheetsBar.classNames;
	                return element("a", {
	                    className: classNames.sheetsBarAdd + EMPTYCHAR + classNames.sheetsBarKButton + EMPTYCHAR + classNames.sheetsBarKButtonDefaults
	                }, [element("span", {className: "k-button-icon" + EMPTYCHAR + classNames.sheetsBarKIcon + EMPTYCHAR + classNames.sheetsBarKFontIcon + EMPTYCHAR + classNames.sheetsBarKIconPlus}, [])]);
	            },

	            destroy: function() {
	                this._sortable.destroy();
	            },

	            _scrollableAllowed: function() {
	                var options = this.options;
	                return options.scrollable && !isNaN(options.scrollable.distance);
	            },

	            _scrollSheetsToItem: function (item) {
	                var that = this;
	                var sheetsGroup = that._sheetsGroup();
	                var currentScrollOffset = kendo.scrollLeft(sheetsGroup);
	                var itemWidth = outerWidth(item);
	                var itemOffset = that._isRtl ? item.position().left : item.position().left - sheetsGroup.children().first().position().left;
	                var sheetsGroupWidth = sheetsGroup[0].offsetWidth;
	                var itemPosition;

	                if (that._isRtl) {
	                    if (itemOffset < 0) {
	                        itemPosition = currentScrollOffset + itemOffset - (sheetsGroupWidth - currentScrollOffset);
	                    } else if (itemOffset + itemWidth > sheetsGroupWidth) {
	                        itemPosition = currentScrollOffset + itemOffset - itemWidth;
	                    }
	                } else {
	                    if (currentScrollOffset + sheetsGroupWidth < itemOffset + itemWidth) {
	                        itemPosition = itemOffset + itemWidth - sheetsGroupWidth;
	                    } else if (currentScrollOffset > itemOffset) {
	                        itemPosition = itemOffset;
	                    }
	                }

	                sheetsGroup.finish().animate({ "scrollLeft": itemPosition }, "fast", "linear", function () {
	                    that._toggleScrollButtons();
	                });
	            },

	            _sheetsGroup: function() {
	                return this._sheetsWrapper().find("ul");
	            },

	            _sheetsWrapper: function() {
	                return this.element.find(DOT + SheetsBar.classNames.sheetsBarItems);
	            },

	            _scrollSheetsByDelta: function (delta) {
	                var that = this;
	                var sheetsGroup = that._sheetsGroup();
	                var scrLeft = kendo.scrollLeft(sheetsGroup);

	                sheetsGroup.finish().animate({ "scrollLeft": scrLeft + delta }, "fast", "linear", function () {
	                    if (that._nowScrollingSheets) {
	                        that._scrollSheetsByDelta(delta);
	                    } else {
	                        that._toggleScrollButtons();
	                    }
	                });
	            }
	        });

	        kendo.spreadsheet.SheetsBar = SheetsBar;
	        $.extend(true, SheetsBar, { classNames: sheetsBarClassNames });
	    })(window.kendo);
	}, __webpack_require__(3));


/***/ }),

/***/ 1697:
/***/ (function(module, exports) {

	module.exports = require("../kendo.sortable");

/***/ })

/******/ });