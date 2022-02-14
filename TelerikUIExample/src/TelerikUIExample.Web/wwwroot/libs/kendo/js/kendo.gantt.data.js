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

	module.exports = __webpack_require__(1293);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1076:
/***/ (function(module, exports) {

	module.exports = require("./kendo.data");

/***/ }),

/***/ 1293:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1076), __webpack_require__(1294)], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "gantt.data",
	    name: "GanttData",
	    category: "web",
	    description: "The Gantt Data.",
	    depends: [ "data", "treelist" ],
	    hidden: true
	};

	(function($, undefined) {
	    var isArray = Array.isArray,
	        extend = $.extend,
	        map = $.map,

	        kendoData = kendo.data,
	        Query = kendoData.Query,
	        DataSource = kendoData.DataSource,
	        TreeListDataSource = kendoData.TreeListDataSource,
	        TreeListModel = kendoData.TreeListModel,

	        PARENTIDFIELD = "parentId";

	    var createDataSource = function(type, name) {
	        return function(options) {
	            options = isArray(options) ? { data: options } : options;

	            var dataSource = options || {};
	            var data = dataSource.data;

	            dataSource.data = data;

	            if (!(dataSource instanceof type) && dataSource instanceof DataSource) {
	                throw new Error("Incorrect DataSource type. Only " + name + " instances are supported");
	            }

	            return dataSource instanceof type ? dataSource : new type(dataSource);
	        };
	    };

	    var dateCompareValidator = function(input) {
	        if (input.filter("[name=end], [name=start], [name=plannedEnd], [name=plannedStart]").length) {
	            var field = input.attr("name"),
	                picker = kendo.widgetInstance(input, kendo.ui),
	                dates = {},
	                container = input,
	                editable,
	                model;

	            while (container !== window && !editable) {
	                container = container.parent();

	                editable = container.data("kendoEditable");
	            }

	            model = editable ? editable.options.model : null;

	            if (!model) {
	                return true;
	            }

	            if(field.indexOf("planned") >= 0) {
	                dates.plannedStart = model.plannedStart;
	                dates.plannedEnd = model.plannedEnd;
	            } else {
	                dates.start = model.start;
	                dates.end = model.end;
	            }

	            dates[field] = picker ? picker.value() : kendo.parseDate(input.val());

	            if(field.indexOf("planned") >= 0) {
	                return dates.plannedStart <= dates.plannedEnd;
	            } else {
	                return dates.start <= dates.end;
	            }
	        }

	        return true;
	    };

	    var GanttDependency = kendo.data.Model.define({
	        id: "id",
	        fields: {
	            id: { type: "number", editable: false },
	            predecessorId: { type: "number" },
	            successorId: { type: "number" },
	            type: { type: "number" }
	        }
	    });

	    var GanttDependencyDataSource = DataSource.extend({
	        init: function(options) {
	            DataSource.fn.init.call(this, extend(true, {}, {
	                schema: {
	                    modelBase: GanttDependency,
	                    model: GanttDependency
	                }
	            }, options));
	        },

	        dependencies: function(id) {
	            var predecessors = this.predecessors(id),
	                successors = this.successors(id);

	            predecessors.push.apply(predecessors, successors);

	            return predecessors;
	        },

	        predecessors: function(id) {
	            return this._dependencies("successorId", id);
	        },

	        successors: function(id) {
	            return this._dependencies("predecessorId", id);
	        },

	        _dependencies: function(field, id) {
	            var data = this.view();
	            var filter = {
	                field: field,
	                operator: "eq",
	                value: id
	            };

	            data = new Query(data).filter(filter).toArray();

	            return data;
	        }
	    });

	    GanttDependencyDataSource.create = createDataSource(GanttDependencyDataSource, "GanttDependencyDataSource");

	    var GanttTask = TreeListModel.define({
	        fields: {
	            id: { type: "number", editable: false },
	            parentId: { type: "number", defaultValue: null, validation: { required: true }, nullable: true },
	            orderId: { type: "number", validation: { required: true } },
	            title: { type: "string", defaultValue: "New task" },
	            start: { type: "date", validation: { required: true } },
	            end: {
	                type: "date",
	                validation: {
	                    required: true,
	                    dateCompare: dateCompareValidator,
	                    message: "End date should be after or equal to the start date"
	                }
	            },
	            percentComplete: { type: "number", validation: { required: true, min:0, max: 1, step: 0.01 } },
	            summary: { type: "boolean" },
	            expanded: { type: "boolean", defaultValue: true },
	            plannedStart: { type: "date", defaultValue: null, nullable: true },
	            plannedEnd: {
	                type: "date",
	                defaultValue: null,
	                nullable: true,
	                validation: {
	                    dateCompare: dateCompareValidator,
	                    message: "Planned end date should be after or equal to the planned start date"
	                }
	            }
	        },

	        duration: function() {
	            var end = this.end,
	                start = this.start;

	            return end - start;
	        },

	        plannedDuration: function() {
	            var end = this.plannedEnd,
	                start = this.plannedStart;

	            if(end && start) {
	                return end - start;
	            }

	            return 0;
	        },

	        isMilestone: function() {
	            return this.duration() === 0;
	        },

	        _offset: function(value) {
	            var field = ["start", "end"],
	                newValue;

	            for (var i = 0; i < field.length; i++) {
	                newValue = new Date(this.get(field[i]).getTime() + value);
	                this.set(field[i], newValue);
	            }
	        },

	        _offsetPlanned: function(value) {
	            var field = ["plannedStart", "plannedEnd"],
	                newValue;

	            for (var i = 0; i < field.length; i++) {
	                newValue = new Date(this.get(field[i]).getTime() + value);
	                this.set(field[i], newValue);
	            }
	        }
	    });

	    GanttTask.define = function(base, options) {
	        if (options === undefined) {
	            options = base;
	            base = GanttTask;
	        }

	        var parentId = options.parentId || PARENTIDFIELD;

	        options.parentIdField = parentId;

	        var model = TreeListModel.define(base, options);

	        if (parentId) {
	            model.parentIdField = parentId;
	        }

	        return model;
	    };

	    var GanttDataSource = TreeListDataSource.extend({
	        init: function(options) {
	            TreeListDataSource.fn.init.call(this, extend(true, {}, {
	                schema: {
	                    modelBase: GanttTask,
	                    model: GanttTask
	                },
	                sort: { field: "orderId", dir: "asc" }
	            }, options));
	        },

	        add: function(task) {
	            if (!task) {
	                return;
	            }

	            task = this._toGanttTask(task);

	            return this.insert(this.taskSiblings(task).length, task);
	        },

	        insert: function(index, task) {
	            if (!task) {
	                return;
	            }

	            task = this._toGanttTask(task);

	            task.set("orderId", index);

	            task = DataSource.fn.insert.call(this, index, task);

	            this._reorderSiblings(task, this.taskSiblings(task).length - 1);
	            this._resolveSummaryFields(this.taskParent(task));

	            return task;
	        },

	        remove: function(task) {
	            var parentId = task.get("parentId"),
	                children = this.taskAllChildren(task);

	            this._removeItems(children);

	            task = TreeListDataSource.fn.remove.call(this, task);

	            this._childRemoved(parentId, task.get("orderId"));

	            return task;
	        },

	        taskAllChildren: function(task) {
	            var data = [],
	                that = this;
	            var callback = function(task) {
	                var tasks = that.taskChildren(task);

	                data.push.apply(data, tasks);
	                map(tasks, callback);
	            };

	            if (!!task) {
	                callback(task);
	            } else {
	                data = this.view();
	            }

	            return data;
	        },

	        taskChildren: function(task, fromView) {
	            var filter = {
	                field: "parentId",
	                operator: "eq",
	                value: null
	            };

	            var order = (this._sort && this._sort.length) ? this._sort : {
	                field: "orderId",
	                dir: "asc"
	            };
	            var taskId, data;

	            if(fromView) {
	                data = this.view();
	            } else {
	                data = this.data();
	            }

	            if (!!task) {
	                taskId = task.get("id");

	                if (taskId === undefined || taskId === null || taskId === "") {
	                    return [];
	                }

	                filter.value = taskId;
	            }

	            data = new Query(data).filter(filter).sort(order).toArray();

	            return data;
	        },

	        taskLevel: function(task) {
	            var level = 0,
	                parent = this.taskParent(task);

	            while (parent !== null) {
	                level += 1;
	                parent = this.taskParent(parent);
	            }

	            return level;
	        },

	        taskParent: function(task) {
	            if (!task || task.get("parentId") === null) {
	                return null;
	            }
	            return this.get(task.parentId);
	        },

	        taskSiblings: function(task) {
	            if (!task) {
	                return null;
	            }

	            var parent = this.taskParent(task);

	            return this.taskChildren(parent);
	        },

	        taskTree: function(task) {
	            var data = [],
	                current,
	                tasks = this.taskChildren(task, true);

	            for (var i = 0, l = tasks.length; i < l; i++) {
	                current = tasks[i];
	                data.push(current);

	                if (current.get("expanded")) {
	                    var children = this.taskTree(current);

	                    data.push.apply(data, children);
	                }
	            }

	            return data;
	        },

	        update: function(task, taskInfo) {
	            var that = this,
	                oldValue;

	            var offsetChildren = function(parentTask, offset) {
	                var children = that.taskAllChildren(parentTask);

	                for (var i = 0, l = children.length; i < l; i++) {
	                    children[i]._offset(offset);
	                }
	            };

	            var offsetChildrenPlanned = function(parentTask, offset) {
	                var children = that.taskAllChildren(parentTask);

	                for (var i = 0, l = children.length; i < l; i++) {
	                    children[i]._offsetPlanned(offset);
	                }
	            };

	            var modelChangeHandler = function(e) {
	                var field = e.field,
	                    model = e.sender;

	                switch (field) {
	                    case "start":
	                        that._resolveSummaryStart(that.taskParent(model));

	                        offsetChildren(model, model.get(field).getTime() - oldValue.getTime());
	                        break;
	                    case "end":
	                        that._resolveSummaryEnd(that.taskParent(model));
	                        break;
	                    case "plannedStart":
	                        that._resolveSummaryPlannedStart(that.taskParent(model));

	                        if(model.get(field) && oldValue) {
	                            offsetChildrenPlanned(model, model.get(field).getTime() - oldValue.getTime());
	                        }
	                        break;
	                    case "plannedEnd":
	                        that._resolveSummaryPlannedEnd(that.taskParent(model));
	                        break;
	                    case "percentComplete":
	                        that._resolveSummaryPercentComplete(that.taskParent(model));
	                        break;
	                    case "orderId":
	                        that._reorderSiblings(model, oldValue);
	                        break;
	                }
	            };

	            if (taskInfo.parentId !== undefined) {
	                oldValue = task.get("parentId");

	                if (oldValue !== taskInfo.parentId) {
	                    task.set("parentId", taskInfo.parentId);

	                    that._childRemoved(oldValue, task.get("orderId"));

	                    task.set("orderId", that.taskSiblings(task).length - 1);
	                    that._resolveSummaryFields(that.taskParent(task));
	                }

	                delete taskInfo.parentId;
	            }

	            task.bind("change", modelChangeHandler);
	            task.bind("equalSet", modelChangeHandler);

	            for (var field in taskInfo) {
	                oldValue = task.get(field);

	                if (field === "plannedStart" || field === "plannedEnd") {
	                    // Update plannedStart and plannedEnd only when oldValue is not undefined or new value is not null
	                    // That limitation is needed to avoid redundant update requests when custom edit template is used
	                    // and the plannedStart and plannedEnd fields are not updated upon edit
	                    if(oldValue !== undefined || taskInfo[field] !== null) {
	                        task.set(field, taskInfo[field]);
	                    }
	                } else if (field === "start" || field === "end") {
	                    task.set(field, taskInfo[field]);
	                } else if (task.get(field) !== taskInfo[field]) {
	                    task.set(field, taskInfo[field]);
	                }
	            }

	            task.unbind("change", modelChangeHandler);
	            task.unbind("equalSet", modelChangeHandler);
	        },

	        _childRemoved: function(parentId, index) {
	            var parent = parentId === null ? null : this.get(parentId),
	                children = this.taskChildren(parent);

	            for (var i = index, l = children.length; i < l; i++) {
	                children[i].set("orderId", i);
	            }

	            this._resolveSummaryFields(parent);
	        },

	        _resolveSummaryFields: function(summary) {
	            if (!summary) {
	                return;
	            }

	            this._updateSummary(summary);

	            if (!this.taskChildren(summary).length) {
	                return;
	            }

	            this._resolveSummaryStart(summary);
	            this._resolveSummaryEnd(summary);
	            this._resolveSummaryPlannedStart(summary);
	            this._resolveSummaryPlannedEnd(summary);
	            this._resolveSummaryPercentComplete(summary);
	        },

	        _resolveSummaryStart: function(summary) {
	            var that = this;
	            var getSummaryStart = function(parentTask) {
	                var children = that.taskChildren(parentTask);
	                var min = children[0].start.getTime();
	                var currentMin;

	                for (var i = 1, l = children.length; i < l; i++) {
	                    currentMin = children[i].start.getTime();
	                    if (currentMin < min) {
	                        min = currentMin;
	                    }
	                }

	                return new Date(min);
	            };

	            this._updateSummaryRecursive(summary, "start", getSummaryStart);
	        },

	        _resolveSummaryEnd: function(summary) {
	            var that = this;
	            var getSummaryEnd = function(parentTask) {
	                var children = that.taskChildren(parentTask);
	                var max = children[0].end.getTime();
	                var currentMax;

	                for (var i = 1, l = children.length; i < l; i++) {
	                    currentMax = children[i].end.getTime();
	                    if (currentMax > max) {
	                        max = currentMax;
	                    }
	                }

	                return new Date(max);
	            };

	            this._updateSummaryRecursive(summary, "end", getSummaryEnd);
	        },

	        _resolveSummaryPlannedStart: function(summary) {
	            var that = this;
	            var getSummaryPlannedStart = function(parentTask) {
	                var children = that.taskChildren(parentTask),
	                    min = null,
	                    currentMin;

	                for (var i = 0, l = children.length; i < l; i++) {
	                    if(children[i].plannedStart) {
	                        currentMin = children[i].plannedStart.getTime();
	                        if (!min || currentMin < min) {
	                            min = currentMin;
	                        }
	                    }
	                }

	                if(!min) {
	                    return null;
	                }

	                return new Date(min);
	            };

	            this._updateSummaryRecursive(summary, "plannedStart", getSummaryPlannedStart);
	        },

	        _resolveSummaryPlannedEnd: function(summary) {
	            var that = this;
	            var getSummaryPlannedEnd = function(parentTask) {
	                var children = that.taskChildren(parentTask),
	                    max = null,
	                    currentMax;

	                for (var i = 0, l = children.length; i < l; i++) {
	                    if(children[i].plannedEnd) {
	                        currentMax = children[i].plannedEnd.getTime();
	                        if (!max || currentMax > max) {
	                            max = currentMax;
	                        }
	                    }
	                }

	                if(!max) {
	                    return null;
	                }

	                return new Date(max);
	            };

	            this._updateSummaryRecursive(summary, "plannedEnd", getSummaryPlannedEnd);
	        },

	        _resolveSummaryPercentComplete: function(summary) {
	            var that = this;
	            var getSummaryPercentComplete = function(parentTask) {
	                var children = that.taskChildren(parentTask);
	                var percentComplete = new Query(children).aggregate([{
	                    field: "percentComplete",
	                    aggregate: "average"
	                }]);

	                return percentComplete.percentComplete.average;
	            };

	            this._updateSummaryRecursive(summary, "percentComplete", getSummaryPercentComplete);
	        },

	        _reorderSiblings: function(task, oldOrderId) {
	            var orderId = task.get("orderId"),
	                direction = orderId > oldOrderId,
	                startIndex = direction ? oldOrderId : orderId,
	                endIndex = direction ? orderId : oldOrderId,
	                newIndex = direction ? startIndex : startIndex + 1,
	                siblings = this.taskSiblings(task);

	            if(!siblings.length){
	                return;
	            }

	            endIndex = Math.min(endIndex, siblings.length - 1);

	            for (var i = startIndex; i <= endIndex; i++) {
	                if (siblings[i] === task) {
	                    continue;
	                }

	                siblings[i].set("orderId", newIndex);

	                newIndex += 1;
	            }
	        },

	        _toGanttTask: function(task) {
	            if (!(task instanceof GanttTask)) {
	                var taskInfo = task;

	                task = DataSource.fn._createNewModel.call(this);
	                task.accept(taskInfo);
	            }

	            return task;
	        },

	        _updateSummary: function(task) {
	            if (task !== null) {
	                var childCount = this.taskChildren(task).length;

	                task.set("summary", childCount > 0);
	            }
	        },

	        _updateSummaryRecursive: function(summary, field, callback) {
	            if (!summary) {
	                return;
	            }

	            var value = callback(summary);

	            summary.set(field, value);

	            var parent = this.taskParent(summary);

	            if (parent) {
	                this._updateSummaryRecursive(parent, field, callback);
	            }
	        }
	    });

	    GanttDataSource.create = createDataSource(GanttDataSource, "GanttDataSource");

	    extend(true, kendo.data, {
	        GanttDataSource: GanttDataSource,
	        GanttTask: GanttTask,
	        GanttDependencyDataSource: GanttDependencyDataSource,
	        GanttDependency: GanttDependency
	    });
	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));


/***/ }),

/***/ 1294:
/***/ (function(module, exports) {

	module.exports = require("./kendo.treelist");

/***/ })

/******/ });