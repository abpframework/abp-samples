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

	module.exports = __webpack_require__(1384);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1086:
/***/ (function(module, exports) {

	module.exports = require("./kendo.mobile.scroller");

/***/ }),

/***/ 1384:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(1086),
	        __webpack_require__(1385),
	        __webpack_require__(1386),
	        __webpack_require__(1387),
	        __webpack_require__(1388),
	        __webpack_require__(1389),
	        __webpack_require__(1390),
	        __webpack_require__(1391)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "pdfviewer",
	    name: "PDFViewer",
	    category: "web",
	    description: "PDFViewer to display pdfs in the browser",
	    depends: ["core", "window", "dialog", "toolbar", "mobile.scroller", "upload", "combobox", "drawing", "binder", "dropdownlist", "numerictextbox"]
	};

	(function($, undefined) {
	    var NS = ".kendoPDFViewer",
	        kendo = window.kendo,
	        ui = kendo.ui,
	        proxy = $.proxy,
	        extend = $.extend,
	        drawing = kendo.drawing,
	        keys = $.extend({PLUS: 187, MINUS: 189, ZERO: 48, NUMPAD_ZERO: 96 }, kendo.keys),
	        Page,
	        Widget = ui.Widget,
	        progress = kendo.ui.progress,
	        SCROLL = "scroll",
	        RENDER = "render",
	        OPEN = "open",
	        ERROR = "error",
	        FOCUS = "focus" + NS,
	        KEYDOWN = "keydown" + NS,
	        MOUSEWHEEL = "DOMMouseScroll" + NS + " mousewheel" + NS,
	        UPDATE = "update",
	        ZOOM_SCALE = 1.25,
	        PAGE_CHANGE = "pagechange",
	        ZOOMSTART = "zoomStart",
	        ZOOMEND = "zoomEnd",
	        ZOOMCOMMAND = "ZoomCommand",
	        WHITECOLOR = "#ffffff",
	        TABINDEX = "tabindex",
	        PROCESSORS = {
	            pdfjs: "pdfjs",
	            dpl: "dpl"
	        },
	        styles = {
	            viewer: "k-pdf-viewer k-widget",
	            scroller: "k-canvas k-list-scroller",
	            enableTextSelection: "k-enable-text-select",
	            enablePanning: "k-enable-panning",
	            highlightClass: "k-search-highlight",
	            charClass: "k-text-char"
	        };

	    var PDFViewer = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            Widget.fn.init.call(that, element, kendo.deepExtend({}, this.options, options));

	            that._wrapper();

	            if (that.options.toolbar) {
	                that._renderToolbar();
	            }

	            that._initProcessor(options || {});
	            that._renderPageContainer();
	            that._loadDocument();

	            that._tabindex();
	            kendo.notify(that, kendo.ui);
	        },

	        events: [
	            RENDER,
	            OPEN,
	            ERROR,
	            ZOOMSTART,
	            ZOOMEND
	        ],

	        options: {
	            name: "PDFViewer",
	            view: {
	                type: "canvas"
	            },
	            pdfjsProcessing: {
	                file: null
	            },
	            dplProcessing: {
	                read: {
	                    url: null,
	                    type: "GET",
	                    dataType: "json",
	                    pageField: "pageNumber"
	                },
	                upload: {
	                    url: null,
	                    saveField: "file"
	                },
	                download: {
	                    url: null
	                },
	                loadOnDemand: false
	            },
	            toolbar: {
	                items: []
	            },
	            width: 1000,
	            height: 1200,
	            page: 1,
	            defaultPageSize: {
	                width: 794,
	                height: 1123
	            },
	            scale: null,
	            zoomMin: 0.5,
	            zoomMax: 4,
	            zoomRate: 0.25,
	            messages: {
	                defaultFileName: "Document",
	                toolbar: {
	                    zoom: {
	                        zoomLevel: "zoom level",
	                        zoomOut: "Zoom Out",
	                        zoomIn: "Zoom In",
	                        actualWidth: "Actual Width",
	                        autoWidth: "Automatic Width",
	                        fitToWidth: "Fit to Width",
	                        fitToPage: "Fit to Page"
	                    },
	                    open: "Open",
	                    exportAs: "Export",
	                    download: "Download",
	                    pager:  {
	                        first: "Go to the first page",
	                        previous: "Go to the previous page",
	                        next: "Go to the next page",
	                        last: "Go to the last page",
	                        of: " of {0} ",
	                        page: "page",
	                        pages: "pages"
	                    },
	                    print: "Print",
	                    toggleSelection: "Enable Selection",
	                    togglePan: "Enable Panning",
	                    search: "Search"
	                },
	                errorMessages: {
	                    notSupported: "Only pdf files allowed.",
	                    parseError: "PDF file fails to process.",
	                    notFound: "File is not found.",
	                    popupBlocked: "Popup is blocked."
	                },
	                dialogs: {
	                    exportAsDialog: {
	                        title: "Export...",
	                        defaultFileName: "Document",
	                        pdf: "Portable Document Format (.pdf)",
	                        png: "Portable Network Graphics (.png)",
	                        svg: "Scalable Vector Graphics (.svg)",
	                        labels: {
	                            fileName: "File name",
	                            saveAsType: "Save as",
	                            page: "Page"
	                        }
	                    },
	                    okText: "OK",
	                    save: "Save",
	                    cancel: "Cancel",
	                    search: {
	                        inputLabel: "Search Text",
	                        matchCase: "Match Case",
	                        next: "Next Match",
	                        previous: "Previous Match",
	                        close: "Close",
	                        of: "of"
	                    }
	                }
	            }
	        },

	        _wrapper: function () {
	            var that = this,
	                options = that.options;

	            that.wrapper = that.element;

	            that.wrapper
	                    .width(options.width)
	                    .height(options.height)
	                    .addClass(styles.viewer)
	                    .on(FOCUS, proxy(that._focus, that))
	                    .on(KEYDOWN, proxy(that._keydown, that));

	            that._allowResize = that.options.scale === null;
	            that._autoZoomScale = ZOOM_SCALE;
	            that.zoomScale = that.options.scale || that._autoZoomScale;

	            that._resizeHandler = kendo.onResize(function() {
	                that.resize();
	            });

	            that._pageNum = that.options.page;
	        },

	        _focus: function (e) {
	            if (this.toolbar) {
	                this.toolbar.wrapper.trigger("focus");
	            } else {
	                this.pageContainer.trigger("focus");
	            }
	            e.preventDefault();
	        },

	        _keydown: function (e) {
	            var plusShortcuts = [keys.PLUS, keys.NUMPAD_PLUS],
	                minusShortcuts = [keys.MINUS, keys.NUMPAD_MINUS],
	                zeroShortcuts = [keys.ZERO, keys.NUMPAD_ZERO],
	                shouldExecute = false,
	                args = {
	                    command: ZOOMCOMMAND,
	                    options: { updateComboBox: true }
	                };

	            if (!e.ctrlKey || this._blankPage || this.processingLib === PROCESSORS.dpl) {
	                return;
	            }

	            if (plusShortcuts.includes(e.keyCode)) {
	                args.options.zoomIn = true;
	                shouldExecute = true;
	            } else if (minusShortcuts.includes(e.keyCode)) {
	                args.options.zoomOut = true;
	                shouldExecute = true;
	            } else if (zeroShortcuts.includes(e.keyCode)) {
	                args.options.scale = ZOOM_SCALE;
	                shouldExecute = true;
	            }

	            if (shouldExecute) {
	                this.execute(args);
	                e.preventDefault();
	            }
	        },

	        _initProcessor: function (options) {
	            var that = this,
	                processingOptions;

	            processingOptions = options.dplProcessing ? that.options.dplProcessing : that.options.pdfjsProcessing;
	            that.processingLib = options.dplProcessing ? PROCESSORS.dpl : PROCESSORS.pdfjs;

	            that.processor = new kendo.pdfviewer[that.processingLib].processor(processingOptions, that);
	            Page = kendo.pdfviewer[that.processingLib].Page;
	        },

	        _renderToolbar: function () {
	            var that = this,
	                options = that.options;

	            var toolbarOptions = {
	                pager: {
	                    messages: options.messages.toolbar.pager
	                },
	                scale: options.scale,
	                resizable: true,
	                items: options.toolbar.items,
	                width: options.width,
	                action: that.execute.bind(that),
	                messages: options.messages.toolbar,
	                viewer: this
	            };

	            var toolbarElement = $("<div />");
	            toolbarElement.appendTo(that.element);
	            that.toolbar = new kendo.pdfviewer.Toolbar(toolbarElement, toolbarOptions);
	        },

	        _initErrorDialog: function (options) {
	            var that = this;

	            if (!that._errorDialog) {
	                options = extend(options, {
	                    messages: that.options.messages
	                });
	                var dialogInstance = new kendo.pdfviewer.dialogs.ErrorDialog(options);
	                that._errorDialog = dialogInstance._dialog;
	            }
	            return that._errorDialog;
	        },

	        _renderPageContainer: function () {
	            var that = this;

	            if (!that.pageContainer) {
	                that.pageContainer = $("<div />");
	                that.pageContainer.addClass(styles.scroller);
	                that.pageContainer.attr(TABINDEX, 0);
	                that.wrapper.append(that.pageContainer);
	            }
	        },

	        _triggerError: function (options) {
	            var dialog = this._initErrorDialog();
	            extend(options, {
	                dialog: dialog
	            });
	            if (this.pageContainer) {
	                progress(this.pageContainer, false);
	            }

	            if (this.trigger(ERROR, options))
	            {
	                return;
	            }

	            dialog.open().content(options.message);
	        },

	        _renderPages: function () {
	            var that = this,
	                document = that.document,
	                pagesData;

	            that.pages = [];

	            if (!document || !document.total) {
	                that._renderBlankPage();
	                return;
	            }

	            pagesData = document.pages;

	            for (var i = 1; i <= document.total; i++) {
	                var viewerPage,
	                    pageData = {
	                        processor: that.processor,
	                        number: i
	                    };

	                if (pagesData && pagesData.length) {
	                    pageData = extend(pageData, pagesData[i - 1]);
	                }

	                viewerPage = new Page(pageData, that);
	                that.pages.push(viewerPage);
	                that.pageContainer.append(viewerPage.element);
	            }

	            that._attachContainerEvents();
	            that._getVisiblePagesCount();
	        },

	        _renderBlankPage: function () {
	            this._blankPage = new Page(this.options.defaultPageSize, this);

	            this.pageContainer.append(this._blankPage.element);

	            this.trigger(UPDATE, { isBlank: true });
	        },

	        _resize: function () {
	            var that = this,
	                containerWidth,
	                ratio;

	            if (!that._allowResize) {
	                return;
	            }

	            if (!that.pages || !that.pages.length) {
	                if (that._blankPage) {
	                    ratio = containerWidth / that._blankPage.element.width();
	                    that._blankPage.resize(ratio);
	                }
	                return;
	            }

	            if (that.toolbar) {
	                that.toolbar.resize(true);
	            }

	            if (that._resizeHandler) {
	                clearTimeout(that._resizeHandler);
	            }
	            that._resizeHandler = setTimeout(that._resizePages.bind(that), 100);
	        },

	        _resizePages: function () {
	            var that = this,
	                containerWidth = that.pageContainer[0].clientWidth,
	                ratio = 0;

	            that.pages.forEach(function (page) {
	                var currentRatio = containerWidth / page.element.width();

	                if (currentRatio > ratio) {
	                    ratio = currentRatio;
	                }
	            });

	            if(that._autoFit) {
	                that.zoom(that._autoFit, true);
	                return;
	            }

	            ratio = Math.min(Math.max(ratio, that.options.zoomMin), ZOOM_SCALE);
	            if (ratio != that.zoomScale) {
	                that.zoom(ratio, true);
	                that.zoomScale = ratio;
	                that._allowResize = true;
	            }
	        },

	        _attachContainerEvents: function () {
	            var that = this;

	            that._wheel = kendo.throttle(
	                that._wheel.bind(that),
	                300
	            );

	            if(that.processingLib !== PROCESSORS.dpl) {
	                that.pageContainer.on(MOUSEWHEEL, function (e) {
	                    if (!e.ctrlKey) {
	                        return;
	                    }

	                    if (document.activeElement !== that.pageContainer[0]) {
	                        that.pageContainer.trigger("focus");
	                    }

	                    that._wheel(e);
	                    e.preventDefault();
	                });
	            }

	            that._scroller = new kendo.mobile.ui.Scroller(that.pageContainer, {
	                zoom: false,
	                elastic: true
	            });

	            that._scroller.scrollElement.addClass(styles.enablePanning);
	            that._scroller.bind(SCROLL, proxy(that._scroll, this));
	        },

	        _scroll: function (e) {
	            var that = this,
	                containerScrollHeight = that.pageContainer[0].scrollHeight,
	                containerHeight = that.pageContainer.height(),
	                containerScrollTop = e.scrollTop,
	                containerOffsetTop = that.pageContainer.offset().top,
	                total = that.pages.length,
	                pageNum = that._pageNum,
	                pageIndex = pageNum - 1,
	                pageToLoadNum = pageNum,
	                pageToLoad,
	                currentPage, currentPageTop, currentPageHeight,
	                previousPage, prevPageTop, prevPageHeight,
	                scrollDirection = containerScrollTop - that._prevScrollTop > 0 ? 1 : -1;

	                if (that._preventScroll || !total) {
	                    that._preventScroll = false;
	                    return;
	                }

	                that._scrollingStarted = true;

	                currentPage = that.pages[pageIndex];
	                currentPageTop = currentPage.element.offset().top - containerOffsetTop;
	                currentPageHeight = currentPage.element.height();

	                if (scrollDirection == -1 && that.pages[pageIndex + scrollDirection]) {
	                    previousPage = that.pages[pageIndex - that._visiblePagesCount] || that.pages[pageIndex + scrollDirection];
	                    prevPageTop = previousPage.element.offset().top - containerOffsetTop;
	                    prevPageHeight = previousPage.element.height();
	                }

	                if (Math.abs(containerScrollTop - (that._prevScrollTop || 0)) > containerHeight * that.zoomScale) {
	                    pageToLoadNum = Math.floor(containerScrollTop * (1 / (containerScrollHeight / total))) + 1;
	                } else if (currentPageTop < 0 && Math.abs(currentPageTop) >= currentPageHeight / 2 && scrollDirection === 1) {
	                    pageToLoadNum++;
	                } else if (previousPage && Math.abs(prevPageTop) <= prevPageHeight / 2) {
	                    pageToLoadNum--;
	                }

	                if (pageNum !== pageToLoadNum && pageToLoadNum >= 1 && pageToLoadNum <= total) {
	                    pageToLoad = that.pages[pageToLoadNum - 1].element;

	                    if (pageToLoad.offset().top > containerHeight) {
	                        return;
	                    }

	                    that._pageNum = pageToLoadNum;
	                    that._loadVisiblePages();

	                    that.trigger(UPDATE, { action: PAGE_CHANGE, page: pageToLoadNum, total: total });
	                }

	                that._prevScrollTop = containerScrollTop;
	        },

	        _wheel: function (e) {
	            var originalEvent = e.originalEvent,
	                delta = originalEvent.wheelDelta ? -originalEvent.wheelDelta : originalEvent.detail,
	                zoomIn = delta < 0;

	            this.execute({
	                command: ZOOMCOMMAND,
	                options: {
	                    zoomIn: zoomIn,
	                    zoomOut: !zoomIn,
	                    updateComboBox: true
	                }
	            });

	            e.preventDefault();
	        },

	        zoom: function (scale, preventComboBoxChange) {
	            var that = this;
	            if (!scale) {
	                return that.zoomScale;
	            }

	            return that.execute({
	                command: ZOOMCOMMAND,
	                options: {
	                    scale: scale,
	                    updateComboBox: !preventComboBoxChange
	                }
	            });
	        },

	        execute: function (options) {
	            var commandOptions = extend({ viewer: this }, options.options);
	            var command = new kendo.pdfviewer[options.command](commandOptions);
	            return command.exec();
	        },

	        _loadDocument: function () {
	            var that = this;
	            var page = that.options.page;

	            progress(that.pageContainer, true);
	            that.processor.fetchDocument().done(function (document) {
	                that._clearPages();
	                that.document = document;

	                that._renderPages();
	                that.resize(true);

	                if (document) {
	                    page = page >= 1 && page <= document.total ? page : 1;
	                    that.activatePage(page);
	                }

	                progress(that.pageContainer, false);
	            });
	        },

	        loadPage: function (number) {
	            var page = this.pages && this.pages[number - 1];

	            if (page) {
	                return page.load(this.zoomScale);
	            }
	        },

	        activatePage: function (number) {
	            var page = this.pages && this.pages[number - 1],
	                scroller = this._scroller,
	                scrollerTopPosition,
	                scrollerTopOffset,
	                pageTopOffset,
	                pageMargin;

	            if (!page) {
	                return;
	            }

	            scrollerTopPosition = scroller.scrollTop;
	            scrollerTopOffset = scroller.element.offset().top;
	            pageTopOffset = page.element.offset().top;
	            pageMargin = !this._autoFit ? parseInt(page.element.css("marginTop"), 10) : 0;

	            this._pageNum = number;
	            this._loadVisiblePages();

	            this._preventScroll = true;

	            this._scroller.scrollTo(0, -scrollerTopPosition - pageTopOffset + scrollerTopOffset + pageMargin);
	            this.trigger(UPDATE, { action: PAGE_CHANGE, page: number, total: this.pages.length });
	        },

	        _getVisiblePagesCount: function () {
	            var that = this,
	                loadedPagesHeight = 0,
	                updatedVisiblePagesCount = 0,
	                containerHeight = that.pageContainer[0].clientHeight,
	                index = 0;

	            while(loadedPagesHeight <= containerHeight && index < that.pages.length)
	            {
	                loadedPagesHeight += that.pages[index].element.height();
	                updatedVisiblePagesCount++;
	                index++;
	            }

	            that._visiblePagesCount = updatedVisiblePagesCount;
	        },

	        _loadVisiblePages: function () {
	            var pagesCount = this.pages && this.pages.length,
	                minVisiblePageNum =  Math.max(this._pageNum - this._visiblePagesCount, 1),
	                maxVisiblePageNum = Math.min(this._pageNum + this._visiblePagesCount, pagesCount);

	            this._visiblePages = this.pages.slice(minVisiblePageNum - 1, maxVisiblePageNum);

	            for (var i = minVisiblePageNum; i <= maxVisiblePageNum; i++)
	            {
	                this.loadPage(i);
	            }
	        },

	        _loadAllPages: function () {
	            var pagesCount = this.pages && this.pages.length;
	            var promises = [];

	            for (var i = 0; i <= pagesCount; i++)
	            {
	                promises.push(this.loadPage(i));
	            }

	            return promises;
	        },

	        fromFile: function (file) {
	            this.zoomScale = this.options.scale || ZOOM_SCALE;
	            this.zoom(this.zoomScale, true);
	            this.trigger(UPDATE, { action: "zoom", zoom: this.options.scale || "auto" });

	            this.processor._updateDocument(file);
	            this._loadDocument();
	        },

	        exportImage: function (options) {
	            var that = this;
	            var pageNumber = options.page;
	            var page = that.pages[pageNumber - 1] || that._blankPage;
	            var rootGroup = new drawing.Group();

	            page.load();

	            var background = kendo.drawing.Path.fromRect(new kendo.geometry.Rect([0, 0], [page.width, page.height]), {
	                fill: {
	                    color: WHITECOLOR
	                },
	                stroke: null
	            });

	            progress(that.pageContainer, true);
	            rootGroup.append(background, page.group);

	            drawing.exportImage(rootGroup).done(function (data) {
	                progress(that.pageContainer, false);
	                kendo.saveAs({
	                    dataURI: data,
	                    fileName: options.fileName,
	                    proxyURL: options.proxyURL || "",
	                    forceProxy: options.forceProxy,
	                    proxyTarget: options.proxyTarget
	                });
	            });
	        },

	        exportSVG: function (options) {
	            var that = this;
	            var pageNumber = options.page;
	            var page = that.pages[pageNumber - 1] || that._blankPage;

	            progress(that.pageContainer, true);

	            page.load();

	            drawing.exportSVG(page.group).done(function (data) {
	                progress(that.pageContainer, false);
	                kendo.saveAs({
	                    dataURI: data,
	                    fileName: options.fileName,
	                    proxyURL: options.proxyURL || "",
	                    forceProxy: options.forceProxy,
	                    proxyTarget: options.proxyTarget
	                });
	            });
	        },

	        setOptions: function (options)
	        {
	            var that = this;

	            if (options.pdfjsProcessing || options.dplProcessing) {
	                that._initProcessor(options || {});
	            }

	            options = $.extend(that.options, options);

	            Widget.fn.setOptions.call(that, options);

	            if (options.page) {
	                that._pageNum = options.page;
	                that.activatePage(options.page);
	            }

	            if (options.width) {
	                that.element.width(options.width);
	            }

	            if (options.height) {
	                that.element.height(options.height);
	            }
	        },

	        destroy: function ()
	        {
	            if (this._resizeHandler)
	            {
	                kendo.unbindResize(this._resizeHandler);
	            }

	            //destroy nested components
	            if (this._errorDialog) {
	                this._errorDialog.destroy();
	            }

	            if (this._saveDialog) {
	                this._saveDialog.destroy();
	            }

	            if (this._upload) {
	                this._upload.destroy();
	            }

	            if (this.toolbar) {
	                this.toolbar.unbind();
	                this.toolbar.destroy();
	                this.toolbar = null;
	            }

	            if (this.pages && this.pages.length) {
	                this.pages.forEach(function (page) {
	                    page.destroy();
	                });
	                this.pages = [];
	            }

	            if (this._scroller) {
	                this._scroller.unbind();
	                this._scroller.destroy();
	            }
	            this.pageContainer.off(NS);

	            Widget.fn.destroy.call(this);
	        },

	        _clearPages: function () {
	            this.pages = [];
	            this.document = null;
	            this._pageNum = 1;

	            this.pageContainer.off(NS);
	            this.pageContainer.empty();

	            if (this._scroller)
	            {
	                this._scroller.reset();
	                this._scroller.unbind();
	                this._scroller.destroy();
	            }
	        },

	        _toggleSelection: function (enable) {
	            var that = this;

	            if(enable === undefined) {
	                enable = true;
	            }

	            that._scroller.userEvents._shouldNotMove = enable;

	            that._scroller.scrollElement.toggleClass(styles.enableTextSelection, enable);
	            that._scroller.scrollElement.toggleClass(styles.enablePanning, !enable);
	        },


	        _initSearchDOM: function () {
	            var that = this;
	            var promise = new Promise(function (resolve) {
	                Promise.all(that._loadAllPages()).then(function(){
	                    that._searchDOM = new kendo.pdfviewer.SearchDOM({
	                        target: that._getTextLayers(),
	                        highlightClass: styles.highlightClass,
	                        charClass: styles.charClass
	                    });

	                    resolve();
	                });
	            });

	            return promise;
	        },

	        _getTextLayers: function () {
	            return this.pages.map(function(page){
	                return page.textLayer;
	            });
	        }
	    });

	    ui.plugin(PDFViewer);
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1385:
/***/ (function(module, exports) {

	module.exports = require("./pdfviewer/processors/pdfjs-processor");

/***/ }),

/***/ 1386:
/***/ (function(module, exports) {

	module.exports = require("./pdfviewer/processors/dpl-processor");

/***/ }),

/***/ 1387:
/***/ (function(module, exports) {

	module.exports = require("./pdfviewer/toolbar");

/***/ }),

/***/ 1388:
/***/ (function(module, exports) {

	module.exports = require("./pdfviewer/page");

/***/ }),

/***/ 1389:
/***/ (function(module, exports) {

	module.exports = require("./pdfviewer/search");

/***/ }),

/***/ 1390:
/***/ (function(module, exports) {

	module.exports = require("./pdfviewer/dialogs");

/***/ }),

/***/ 1391:
/***/ (function(module, exports) {

	module.exports = require("./pdfviewer/commands");

/***/ })

/******/ });