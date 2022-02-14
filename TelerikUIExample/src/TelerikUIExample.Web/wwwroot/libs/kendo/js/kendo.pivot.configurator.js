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

	module.exports = __webpack_require__(1392);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1064:
/***/ (function(module, exports) {

	module.exports = require("./kendo.dom");

/***/ }),

/***/ 1218:
/***/ (function(module, exports) {

	module.exports = require("./html/chip");

/***/ }),

/***/ 1219:
/***/ (function(module, exports) {

	module.exports = require("./html/chiplist");

/***/ }),

/***/ 1392:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1064), __webpack_require__(1218), __webpack_require__(1219) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function() {

	var __meta__ = { // jshint ignore:line
	    id: "pivot.configurator",
	    name: "PivotConfigurator",
	    category: "web",
	    depends: [ "dropdownlist", "treeview", "pivot.fieldmenu" ],
	    hidden: true
	};

	/*jshint eqnull: true, laxbreak:true */
	(function($, undefined) {
	    var kendo = window.kendo,
	        ui = kendo.ui,
	        Widget = ui.Widget,
	        common = window.kendo.pivotgrid.common,
	        fetchDiscover = common.fetchDiscover,
	        configuratorReducer = common.configuratorReducer,
	        PIVOT_CONFIGURATOR_ACTION = common.PIVOT_CONFIGURATOR_ACTION,
	        ns = ".kendoPivotConfigurator",
	        HOVER_EVENTS = "mouseenter" + ns + " mouseleave" + ns,
	        SETTINGS_TEMPLATE = kendo.template('<div class="k-pivotgrid-configurator-header">' +
	                                            '<div class="k-pivotgrid-configurator-header-text">#:title#</div>' +
	                                          '</div>'),
	        CONTENT_TEMPLATE = kendo.template('<div class="k-pivotgrid-configurator-content">' +
	            '<form class="#:formClass#">' +
	                '#if (horizontal) {# <div class="k-form-field-wrapper"> #}#' +
	                '<div class="k-form-field">' +
	                    '<label class="k-label">Fields</label>' +
	                '</div>' +
	                '<div class="k-form-field">' +
	                  '<div class="k-fields-list-wrapper"></div>' +
	                '</div>' +
	                '#if (horizontal) {# </div><div class="k-form-field-wrapper"> #}#' +
	                '<div class="k-form-field">' +
	                    '<label class="k-label">Columns</label>' +
	                '</div>' +
	                '<div class="k-chip-list k-column-fields"></div>' +
	                '<div class="k-form-field">' +
	                    '<label class="k-label">Rows</label>' +
	                '</div>' +
	                '<div class="k-chip-list k-row-fields"></div>' +
	                '#if (horizontal) {# </div><div class="k-form-field-wrapper"> #}#' +
	                '<div class="k-form-field">' +
	                    '<label class="k-label">Values</label>' +
	                '</div>' +
	                '<div class="k-chip-list k-column-fields"></div>' +
	                '#if (horizontal) {# </div> #}#' +
	            '</form>' +
	        '</div>'),
	        TARGET_ITEM_TEMPLATE = '<span>' +
	                '<span class="k-chip-label">#:name#</span>' +
	                '#if (menuenabled) {# <span class="k-icon k-i-more-vertical"></span> #}#' +
	            '</span>',
	        ACTIONS_TEMPLATE = kendo.template(
	                '<div class="k-pivotgrid-configurator-actions k-actions k-hstack k-justify-content-end">' +
	                  '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">' +
	                    '<span class="k-button-text">#:cancelText#</span>' +
	                  '</button>' +
	                  '<button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary">' +
	                    '<span class="k-button-text">#:applyText#</span>' +
	                  '</button>' +
	                '</div>'),
	        SETTING_CONTAINER_TEMPLATE = kendo.template('<div class="k-pivotgrid-target k-pivotgrid-configurator-section"><strong>${name}</strong><div class="k-pivotgrid-target-wrap"></div>');

	    function addKPI(data) {
	        var found;
	        var idx = 0;
	        var length = data.length;

	        for (; idx < length; idx++) {
	            if (data[idx].type == 2) {
	                found = true;
	                break;
	            }
	        }

	        if (found) {
	            data.splice(idx + 1, 0, {
	                caption: "KPIs",
	                defaultHierarchy: "[KPIs]",
	                name: "KPIs",
	                uniqueName: "[KPIs]"
	            });
	        }
	    }

	    function kpiNode(node) {
	        return {
	            name: node.uniqueName,
	            type: node.type
	        };
	    }

	    function normalizeKPIs(data) {
	        for (var idx = 0, length = data.length; idx < length; idx++) {
	            data[idx].uniqueName = data[idx].name;
	            data[idx].type = "kpi";
	        }

	        return data;
	    }

	    function settingTargetFromNode(node) {
	        var target = $(node).closest(".k-pivot-setting");

	        if (target.length) {
	            return target.data("kendoPivotSettingTarget");
	        }
	        return null;
	    }

	    var PivotConfiguratorV2 = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);

	            this.element.addClass("k-widget k-pivotgrid-configurator k-pos-relative");

	            this._dataSource();

	            this._layout();

	            this.refresh();

	            if (options.height) {
	                this.element.height(options.height);
	            }

	            kendo.notify(this);
	        },

	        events: [],

	        options: {
	            name: "PivotConfiguratorV2",
	            orientation: "vertical",
	            filterable: false,
	            sortable: false,
	            messages: {
	                title: "Settings",
	                cancelButtonText: "Cancel",
	                applyButtonText: "Apply",
	                measures: "Select some fields to begin setup",
	                columns: "Select some fields to begin setup",
	                rows: "Select some fields to begin setup"
	            }
	        },

	        setDataSource: function(dataSource) {
	            this.options.dataSource = dataSource;

	            this._dataSource();

	            if (this.measures) {
	                this.measures.setDataSource(dataSource);
	            }

	            if (this.rows) {
	                this.rows.setDataSource(dataSource);
	            }

	            if (this.columns) {
	                this.columns.setDataSource(dataSource);
	            }

	            this.refresh();
	        },

	        _dataSource: function() {
	            var that = this;

	            if (that.dataSource && that._refreshHandler) {
	                that.dataSource.unbind("change", that._refreshHandler)
	                               .unbind("error", that._errorHandler)
	                               .unbind("progress", that._progressHandler);
	            } else {
	                that._errorHandler = $.proxy(that._error, that);
	                that._refreshHandler = $.proxy(that.refresh, that);
	                that._progressHandler = $.proxy(that._requestStart, that);
	            }

	            that.dataSource = kendo.data.PivotDataSourceV2.create(that.options.dataSource);
	            that.dataSource.bind("change", that._refreshHandler)
	                           .bind("error", that._errorHandler)
	                           .bind("progress", that._progressHandler);
	        },

	        _layout: function() {

	            var that = this;
	            var options = that.options;
	            var messages = options.messages;
	            var horizontal = options.orientation == "horizontal";

	            var panel = $("<div class='k-pivotgrid-configurator-panel k-pivotgrid-configurator-push'></div>");

	            panel.addClass(horizontal ? "k-pivotgrid-configurator-horizontal" : "k-pivotgrid-configurator-vertical");

	            that.element.append(panel);

	            that.panel = panel;

	            $(SETTINGS_TEMPLATE({ title: this.options.messages.title })).appendTo(that.panel);

	            $(CONTENT_TEMPLATE({ formClass: horizontal ? "k-form k-form-horizontal" : "k-form", filterable: options.filterable, horizontal: horizontal }))
	                .appendTo(that.panel).find(".k-chip-list")
	                .each(function(index, elm) {
	                    kendo.html.renderChipList(elm, $.extend({}, options));
	                });

	            that._fields();
	            $(ACTIONS_TEMPLATE({ cancelText: messages.cancelButtonText, applyText: messages.applyButtonText })).appendTo(that.panel);
	            that._targets();

	            that.element.on("click" + ns, ".k-pivotgrid-configurator-actions > button", $.proxy(that._actions, that));
	        },

	        _actions: function(e) {
	            e.preventDefault();

	            var target = $(e.currentTarget);
	            if (target.index()) {
	                this.columns._applyState();
	                this.rows._applyState();
	                this.measures._applyState();
	                this.dataSource.read();
	            } else {
	                this.columns._cancelChanges();
	                this.rows._cancelChanges();
	                this.measures._cancelChanges();
	                this.treeView.dataSource.read();
	            }
	        },

	        _targets: function() {
	            var that = this;
	            var columns = that.panel.find(".k-column-fields").first();
	            var rows = that.panel.find(".k-row-fields");
	            var measures = that.panel.find(".k-chip-list").last();
	            var options = this.options;

	            var targetItemTemplate = kendo.html.renderChip(TARGET_ITEM_TEMPLATE, $.extend({}, options, {
	                fillMode: "solid",
	                themeColor: "base",
	                rounded: "full",
	                removable: true,
	                removeIcon: "close-circle"
	            }));

	            this.columns = this._createTarget(columns, {
	                filterable: options.filterable,
	                sortable: options.sortable,
	                template: targetItemTemplate,
	                connectWith: rows,
	                messages: {
	                    empty: options.messages.columns
	                }
	            });

	            this.rows = this._createTarget(rows, {
	                filterable: options.filterable,
	                sortable: options.sortable,
	                template: targetItemTemplate,
	                setting: "rows",
	                connectWith: columns,
	                messages: {
	                    empty: this.options.messages.rows
	                }
	            });

	            this.measures = this._createTarget(measures, {
	                setting: "measures",
	                template: targetItemTemplate,
	                messages: {
	                    empty: options.messages.measures
	                }
	            });
	        },

	        _createTarget: function(element, options) {
	            var that = this;
	            return new kendo.ui.PivotSettingTargetV2(element, $.extend({
	                dataSource: this.dataSource,
	                hint: function(element) {
	                    return element.clone();
	                },
	                remove: function(e) {
	                    var item = that.treeView.wrapper
	                        .find("[data-name='" + e.name + "']")
	                        .closest("li");
	                    var id = item.attr(kendo.attr("uid"));
	                    var dataItem = that.treeView.dataSource.getByUid(id);

	                    if (dataItem) {
	                        dataItem.checked = false;
	                        item.find("input").attr("checked", false);
	                    }
	                },
	                template: options.template
	            }, options));
	        },

	        _fields: function() {
	            var that = this;
	            var container = that.element.find(".k-fields-list-wrapper");

	            this.treeView = $("<div/>").appendTo(container)
	                .kendoTreeView({
	                    checkboxes: {
	                        checkChildren: true,
	                        template: '#if ((item.hasChildren || item.aggregator) && item.uniqueName !== "[KPIs]" && item.uniqueName !== "[Measures]") {# <input type="checkbox" data-name="#:item.uniqueName#" #= item.checked ? "checked" : "" # class="k-checkbox k-checkbox-md k-rounded-md" id="#:item.uid#" tabindex="-1"> #}#'
	                    },
	                    dataTextField: "caption",
	                    autoBind: false,
	                    check: function(e) {
	                      var dataItem = e.sender.dataItem(e.node);
	                      var action = {
	                        type: PIVOT_CONFIGURATOR_ACTION.toggleSelection,
	                        payload: dataItem
	                      };
	                      var state = {
	                        columnAxes: that.columns._state(),
	                        rowAxes: that.rows._state(),
	                        measureAxes: that.measures._state()
	                      };
	                      var result = configuratorReducer(state, action);

	                      if (dataItem.defaultHierarchy && dataItem.items.length) {
	                          that._checkMembers([{ name: dataItem.defaultHierarchy }], dataItem.items);
	                          dataItem.items.trigger("change");
	                      }

	                      if (result.columnAxes) {
	                          that.columns._state(result.columnAxes);
	                          that.columns._redraw();
	                      }
	                      if (result.rowAxes) {
	                          that.rows._state(result.rowAxes);
	                          that.rows._redraw();
	                      }
	                      if (result.measureAxes) {
	                          that.measures._state(result.measureAxes);
	                          that.measures._redraw();
	                      }
	                    },
	                    dataSource: this._treeViewDataSource()
	                 })
	                .data("kendoTreeView");

	            this.treeView.wrapper.off("click", this.treeView._clickHandler);
	        },

	        _treeViewDataSource: function() {
	            var that = this;

	            return kendo.data.HierarchicalDataSource.create({
	                schema: {
	                    model: {
	                        id: "uniqueName",
	                        hasChildren: function(item) {
	                            return !("hierarchyUniqueName" in item) && !("aggregator" in item);
	                        }
	                    }
	                },
	                transport: {
	                    read: function(options) {
	                        var node;
	                        var transport = that.dataSource.transport;
	                        var catalog = transport.catalog();
	                        var cube = transport.cube();
	                        var fetchOptions = {
	                            url: transport.options.read
	                        };
	                        var columns = that.columns._state();
	                        var rows = that.rows._state();
	                        var measures = that.measures._state();
	                        var members = columns.concat(rows).concat(measures);

	                        if ($.isEmptyObject(options.data)) {
	                            var fetchOpts = {
	                                connection: {
	                                    catalog: catalog,
	                                    cube: cube
	                                },
	                                restrictions: {
	                                    catalogName: catalog,
	                                    cubeName: cube
	                                },
	                                command: 'schemaDimensions'
	                            };

	                            fetchDiscover(fetchOptions, fetchOpts)
	                                .then(function(newFields) {
	                                    that._checkMembers(members, newFields);
	                                    addKPI(newFields);
	                                    options.success(newFields);
	                                 });
	                        } else {
	                            //Hack to get the actual node as the HierarchicalDataSource does not support passing it
	                            node = that.treeView.dataSource.get(options.data.uniqueName);

	                            if (node.uniqueName === "[KPIs]") {
	                                fetchDiscover(fetchOptions, that._getKPIOptions(catalog, cube))
	                                .then(function(newFields) {
	                                    options.success(normalizeKPIs(newFields));
	                                });
	                            } else if (node.type == "kpi") {
	                                options.success(buildKPImeasures(node));
	                            } else {
	                                fetchDiscover(fetchOptions ,that._loadFieldsCommand(node, catalog, cube))
	                                .then(function(newFields) {
	                                    that._checkMembers(members, newFields);
	                                    options.success(newFields);
	                                });
	                            }
	                        }
	                    }
	                }
	            });
	        },

	        _checkMembers: function(members, newData) {
	            var hash = {};
	            var index = 0;

	            for (index = 0; index < members.length; index++) {
	                hash[members[index].name] = true;
	            }

	            for (index = 0; index < newData.length; index++) {
	                if (hash[newData[index].uniqueName]) {
	                    newData[index].checked = true;
	                }
	            }
	        },

	        _getKPIOptions: function(catalog, cube) {
	            return {
	                connection: {
	                    catalog: catalog,
	                    cube: cube
	                },
	                restrictions: {
	                    catalogName: catalog,
	                    cubeName: cube
	                },
	                command: 'schemaKPIs'
	            };
	        },

	        _loadFieldsCommand: function(field, catalog, cube) {
	            var command;
	            var dimensionUniqueName;
	            var hierarchyUniqueName;

	            if (field.type === 2) {
	                command = 'schemaMeasures';
	            } else if (field.dimensionUniqueName) {
	                command = 'schemaLevels';
	                hierarchyUniqueName = field.uniqueName;
	            } else {
	                command = 'schemaHierarchies';
	                dimensionUniqueName = field.uniqueName;
	            }

	            var options = {
	                connection: {
	                    catalog: catalog,
	                    cube: cube
	                },
	                restrictions: {
	                    catalogName: catalog,
	                    cubeName: cube,
	                    hierarchyUniqueName: hierarchyUniqueName,
	                    dimensionUniqueName: dimensionUniqueName
	                },
	                command: command
	            };

	            return options;
	        },

	        _progress: function(toggle) {
	            kendo.ui.progress(this.element, toggle);
	        },

	        _error: function() {
	            this._progress(false);
	        },

	        _requestStart: function() {
	            this._progress(true);
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            this.dataSource.unbind("change", this._refreshHandler);

	            this.element.off(ns);

	            this.rows.destroy();
	            this.columns.destroy();
	            this.measures.destroy();
	            this.treeView.destroy();

	            this.element = null;
	            this._refreshHandler = null;
	        },

	        refresh: function() {
	            if (this.treeView) {
	                this.treeView.dataSource.fetch();
	            }

	            this._progress(false);
	        }

	    });

	    ui.plugin(PivotConfiguratorV2);

	    var PivotConfigurator = Widget.extend({
	        init: function(element, options) {
	            Widget.fn.init.call(this, element, options);

	            this.element.addClass("k-pivotgrid-configurator-panel kendo-jquery");

	            if (this.options.height) {
	                this.element.outerHeight(this.options.height);
	            }

	            this._dataSource();

	            this._layout();

	            this.refresh();

	            kendo.notify(this);
	        },

	        events: [],

	        options: {
	            name: "PivotConfigurator",
	            filterable: false,
	            sortable: false,
	            messages: {
	                measures: "Drop Data Fields Here",
	                columns: "Drop Column Fields Here",
	                rows: "Drop Rows Fields Here",
	                measuresLabel: "Measures",
	                columnsLabel: "Columns",
	                rowsLabel: "Rows",
	                fieldsLabel: "Fields"
	            }
	        },

	        _dataSource: function() {
	            var that = this;

	            if (that.dataSource && that._refreshHandler) {
	                that.dataSource.unbind("change", that._refreshHandler)
	                               .unbind("error", that._errorHandler)
	                               .unbind("progress", that._progressHandler);
	            } else {
	                that._errorHandler = $.proxy(that._error, that);
	                that._refreshHandler = $.proxy(that.refresh, that);
	                that._progressHandler = $.proxy(that._requestStart, that);
	            }

	            that.dataSource = kendo.data.PivotDataSource.create(that.options.dataSource);
	            that.dataSource.bind("change", that._refreshHandler)
	                           .bind("error", that._errorHandler)
	                           .bind("progress", that._progressHandler);
	        },

	        setDataSource: function(dataSource) {
	            this.options.dataSource = dataSource;

	            this._dataSource();

	            if (this.measures) {
	                this.measures.setDataSource(dataSource);
	            }

	            if (this.rows) {
	                this.rows.setDataSource(dataSource);
	            }

	            if (this.columns) {
	                this.columns.setDataSource(dataSource);
	            }

	            this.refresh();
	        },

	        _treeViewDataSource: function() {
	            var that = this;

	            return kendo.data.HierarchicalDataSource.create({
	                schema: {
	                    model: {
	                        id: "uniqueName",
	                        hasChildren: function(item) {
	                            return !("hierarchyUniqueName" in item) && !("aggregator" in item);
	                        }
	                    }
	                },
	                transport: {
	                    read: function(options) {
	                        var promise;
	                        var node;
	                        var kpi;

	                        if ($.isEmptyObject(options.data)) {
	                            promise = that.dataSource.schemaDimensions();

	                            promise.done(function(data) {
	                                        if (!that.dataSource.cubeBuilder) {
	                                            addKPI(data);
	                                        }
	                                        options.success(data);
	                                    })
	                                    .fail(options.error);
	                        } else {
	                            //Hack to get the actual node as the HierarchicalDataSource does not support passing it
	                            node = that.treeView.dataSource.get(options.data.uniqueName);

	                            if (node.uniqueName === "[KPIs]") {
	                                kpi = true;
	                                promise = that.dataSource.schemaKPIs();
	                                promise.done(function(data) {
	                                            options.success(normalizeKPIs(data));
	                                       })
	                                       .fail(options.error);
	                            } else if (node.type == "kpi") {
	                                kpi = true;
	                                options.success(buildKPImeasures(node));
	                            }

	                            if (!kpi) {
	                                if (node.type == 2) { //measure
	                                    promise = that.dataSource.schemaMeasures();
	                                } else if (node.dimensionUniqueName) { // hierarchy
	                                    promise = that.dataSource.schemaLevels(options.data.uniqueName);
	                                } else { // dimension
	                                    promise = that.dataSource.schemaHierarchies(options.data.uniqueName);
	                                }

	                                promise.done(options.success)
	                                        .fail(options.error);
	                            }
	                        }
	                    }
	                }
	            });
	        },

	        _progress: function(toggle) {
	            kendo.ui.progress(this.element, toggle);
	        },

	        _error: function() {
	            this._progress(false);
	        },

	        _requestStart: function() {
	            this._progress(true);
	        },

	        _layout: function() {
	            $('<div class="k-pivotgrid-configurator"><div class="k-pivotgrid-configurator-content"></div></div>').appendTo(this.element);
	            this.form = this.element.find('.k-pivotgrid-configurator-content');

	            this._fields();
	            this._targets();
	        },

	        _fields: function() {
	            var container = $('<div class="k-pivotgrid-fields k-pivotgrid-configurator-section"><strong>' + this.options.messages.fieldsLabel + '</strong><div class="k-fields-list-wrapper"></div></div>').appendTo(this.form);

	            var template = '# if (item.type == 2 || item.uniqueName == "[KPIs]") { #' +
	                           '<span class="k-icon k-i-#= (item.type == 2 ? \"sum\" : \"kpi\") #"></span>' +
	                           '# } else if (item.type && item.type !== "kpi") { #' +
	                           '<span class="k-icon k-i-arrows-dimensions"></span>' +
	                           '# } #' +
	                           '#: item.caption || item.name #';

	            this.treeView = $("<div/>").appendTo(container.find('.k-fields-list-wrapper'))
	                .kendoTreeView({
	                    template: template,
	                    dataTextField: "caption",
	                    dragAndDrop: true,
	                    autoBind: false,
	                    dataSource: this._treeViewDataSource(),
	                    dragstart: function(e) {
	                        var dataItem = this.dataItem(e.sourceNode);

	                        if ((!dataItem.hasChildren && !dataItem.aggregator && !dataItem.measure) || (dataItem.type == 2) || dataItem.uniqueName === "[KPIs]") {
	                            e.preventDefault();
	                        }
	                    },
	                    drag: function(e) {
	                        var status = "k-i-cancel";
	                        var setting = settingTargetFromNode(e.dropTarget);

	                        if (setting && setting.validate(this.dataItem(e.sourceNode))) {
	                            status = "k-i-plus";
	                        }

	                        e.setStatusClass(status);
	                    },
	                    drop: function(e) {
	                        e.preventDefault();

	                        var setting = settingTargetFromNode(e.dropTarget);
	                        var node = this.dataItem(e.sourceNode);
	                        var idx, length, measures;
	                        var name;

	                        if (setting && setting.validate(node)) {
	                            name = node.defaultHierarchy || node.uniqueName;

	                            if (node.type === "kpi") {
	                                measures = buildKPImeasures(node);
	                                length = measures.length;
	                                name = [];

	                                for (idx = 0; idx < length; idx++) {
	                                    name.push(kpiNode(measures[idx]));
	                                }
	                            } else if (node.kpi) {
	                                name = [kpiNode(node)];
	                            }

	                            setting.add(name);
	                        }
	                    }
	                 })
	                .data("kendoTreeView");
	        },

	        _createTarget: function(element, options) {
	            var template = '';
	            var sortable = options.sortable;
	            var icons = '';

	            if (sortable) {
	                icons += '#if (data.sortIcon) {#';
	                icons += '<span class="k-chip-action"><span class="k-icon ${data.sortIcon}-sm"></span></span>';
	                icons += '#}#';
	            }

	            if (options.filterable || sortable) {
	                icons += '<span class="k-setting-fieldmenu k-chip-action"><span class="k-icon k-i-more-vertical"></span></span>';
	            }

	            icons += '<span class="k-setting-delete k-chip-action"><span class="k-icon k-i-close"></span></span>';

	            template = ''
	                + '<span class="k-chip k-chip-md k-rounded-full k-chip-solid k-chip-solid-base" data-' + kendo.ns + 'name="${data.name}">'
	                    + '<span class="k-chip-content">'
	                        + '<span class="k-chip-text">${data.name}</span>'
	                    + '</span>'
	                    + '<span class="k-chip-actions k-field-actions">' + icons + '</span>'
	                + '</span>';

	            return new kendo.ui.PivotSettingTarget(element, $.extend({
	                dataSource: this.dataSource,
	                template: template,
	                emptyTemplate: '<span class="k-empty">${data}</span>'
	            }, options));
	        },

	        _targets: function() {
	            var container = $('<div class="k-pivotgrid-targets"/>').appendTo(this.form);

	            var columnsContainer = $(SETTING_CONTAINER_TEMPLATE({ name: this.options.messages.columnsLabel, icon: "k-i-columns" })).appendTo(container);
	            var columns = $('<div class="k-column-fields k-chip-list" />').appendTo(columnsContainer.find('.k-pivotgrid-target-wrap'));

	            var rowsContainer = $(SETTING_CONTAINER_TEMPLATE({ name: this.options.messages.rowsLabel, icon: "k-i-rows" })).appendTo(container);
	            var rows = $('<div class="k-column-fields k-chip-list" />').appendTo(rowsContainer.find('.k-pivotgrid-target-wrap'));

	            var measuresContainer = $(SETTING_CONTAINER_TEMPLATE({ name: this.options.messages.measuresLabel, icon: "k-i-sum" })).appendTo(container);
	            var measures = $('<div class="k-column-fields k-chip-list" />').appendTo(measuresContainer.find('.k-pivotgrid-target-wrap'));

	            var options = this.options;

	            this.columns = this._createTarget(columns, {
	                filterable: options.filterable,
	                sortable: options.sortable,
	                connectWith: rows,
	                messages: {
	                    empty: options.messages.columns,
	                    fieldMenu: options.messages.fieldMenu
	                }
	            });

	            this.rows = this._createTarget(rows, {
	                filterable: options.filterable,
	                sortable: options.sortable,
	                setting: "rows",
	                connectWith: columns,
	                messages: {
	                    empty: this.options.messages.rows,
	                    fieldMenu: this.options.messages.fieldMenu
	                }
	            });

	            this.measures = this._createTarget(measures, {
	                setting: "measures",
	                messages: {
	                    empty: options.messages.measures
	                }
	            });

	            columns
	                .add(rows)
	                .add(measures)
	                .on(HOVER_EVENTS, ".k-item:not(.k-empty)", this._toggleHover);
	        },

	        _toggleHover: function(e) {
	            $(e.currentTarget).toggleClass("k-state-hover", e.type === "mouseenter");
	        },

	        _resize: function() {
	            var element = this.element;
	            var height = this.options.height;

	            if (!height) {
	                return;
	            }

	            element.outerHeight(height);
	        },

	        refresh: function() {
	            var dataSource = this.dataSource;

	            if (dataSource.cubeBuilder || this._cube !== dataSource.cube() || this._catalog !== dataSource.catalog()) {
	                this.treeView.dataSource.fetch();
	            }

	            this._catalog = this.dataSource.catalog();
	            this._cube = this.dataSource.cube();

	            this._resize();

	            this._progress(false);
	        },

	        destroy: function() {
	            Widget.fn.destroy.call(this);

	            this.dataSource.unbind("change", this._refreshHandler);

	            this.form.find(".k-pivot-setting").off(ns);

	            this.rows.destroy();
	            this.columns.destroy();
	            this.measures.destroy();
	            this.treeView.destroy();

	            this.element = null;
	            this._refreshHandler = null;
	        }
	    });

	    function kpiMeasure(name, measure, type) {
	        return {
	            hierarchyUniqueName: name,
	            uniqueName: measure,
	            caption: measure,
	            measure: measure,
	            name: measure,
	            type: type,
	            kpi: true
	        };
	    }

	    function buildKPImeasures(node) {
	        var name = node.name;
	        return [
	            kpiMeasure(name, node.value, "value"),
	            kpiMeasure(name, node.goal, "goal"),
	            kpiMeasure(name, node.status, "status"),
	            kpiMeasure(name, node.trend, "trend")
	        ];
	    }

	    kendo.cssProperties.registerPrefix("HTMLChip", "k-chip-");

	    kendo.cssProperties.registerValues("HTMLChip", [{
	        prop: "rounded",
	        values: kendo.cssProperties.roundedValues.concat([['full', 'full']])
	    }]);

	    ui.plugin(PivotConfigurator);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ })

/******/ });