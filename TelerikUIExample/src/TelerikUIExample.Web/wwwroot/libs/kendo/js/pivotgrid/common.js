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

	__webpack_require__(1646);
	module.exports = __webpack_require__(1646);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1646:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	        __webpack_require__(20)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function () {

	window.kendo.pivotgrid = window.kendo.pivotgrid || {};
	window.kendo.pivotgrid.common = (function (exports) {
	    

	    var filterFunctionFormats = {
	        contains: ", InStr({0}.CurrentMember.MEMBER_CAPTION,\"{1}\") > 0",
	        doesnotcontain: ", InStr({0}.CurrentMember.MEMBER_CAPTION,\"{1}\")",
	        endswith: ", Right({0}.CurrentMember.MEMBER_CAPTION,Len(\"{1}\"))=\"{1}\"",
	        eq: ", {0}.CurrentMember.MEMBER_CAPTION = \"{1}\"",
	        neq: ", {0}.CurrentMember.MEMBER_CAPTION = \"{1}\"",
	        startswith: ", Left({0}.CurrentMember.MEMBER_CAPTION,Len(\"{1}\"))=\"{1}\""
	    };
	    var operators = {
	        doesnotcontain: 'doesnotcontain',
	        in: 'in',
	        neq: "neq"
	    };
	    /**
	     * @hidden
	     */
	    function serializeFilters(filters, cube) {
	        var command = "";
	        var current = "";
	        for (var idx = filters.length - 1; idx >= 0; idx--) {
	            current = "SELECT (";
	            current += serializeExpression(filters[idx]);
	            current += ") ON 0";
	            if (idx === filters.length - 1) {
	                current += " FROM [" + cube + "]";
	                command = current;
	            }
	            else {
	                command = current + " FROM ( " + command + " )";
	            }
	        }
	        return command;
	    }
	    function serializeExpression(expression) {
	        var command = '';
	        var value = String(expression.value);
	        var field = expression.field;
	        var operator = expression.operator;
	        if (operator === operators.in) {
	            command += "{";
	            command += value;
	            command += "}";
	        }
	        else {
	            command += operator === operators.neq || operator === operators.doesnotcontain ? '-' : '';
	            command += "Filter(";
	            command += field + ".MEMBERS";
	            command += formatString(filterFunctionFormats[operator], field, value);
	            command += ")";
	        }
	        return command;
	    }
	    function formatString(str) {
	        var values = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            values[_i - 1] = arguments[_i];
	        }
	        values.forEach(function (value, index) {
	            str = str.replace(new RegExp("\\{" + index + "\\}", 'g'), value);
	        });
	        return str;
	    }

	    /**
	     * @hidden
	     */
	    function serializeMembers(members, measures, sort) {
	        var command = "";
	        members = members || [];
	        var parsed = parseDescriptors(members);
	        var expanded = parsed.expanded;
	        var rootNames = getRootNames(parsed.root);
	        var crossJoinCommands = [];
	        var length = expanded.length;
	        var idx = 0;
	        var memberName;
	        var names = [];
	        if (rootNames.length > 1 || measures.length > 1) {
	            crossJoinCommands.push(crossJoinCommand(rootNames, measures));
	            for (; idx < length; idx++) {
	                memberName = expandMemberDescriptor(expanded[idx].name, sort);
	                names = mapNames(memberName, rootNames);
	                crossJoinCommands.push(crossJoinCommand(names, measures));
	            }
	            command += crossJoinCommands.join(",");
	        }
	        else {
	            for (; idx < length; idx++) {
	                memberName = expandMemberDescriptor(expanded[idx].name, sort);
	                names.push(memberName[0]);
	            }
	            command += rootNames.concat(names).join(",");
	        }
	        return command;
	    }
	    /**
	     * @hidden
	     */
	    function measureNames(measures) {
	        var length = measures.length;
	        var result = [];
	        var measure;
	        for (var idx = 0; idx < length; idx++) {
	            measure = measures[idx];
	            result.push(measure.name !== undefined ? measure.name : measure);
	        }
	        return result;
	    }
	    function getRootNames(members) {
	        var root = [];
	        members.forEach(function (member) {
	            var name = member.name[0];
	            var hierarchyName = baseHierarchyPath(name);
	            if (!root.some(function (n) { return n.indexOf(hierarchyName) === 0; })) {
	                root.push(name);
	            }
	        });
	        return root;
	    }
	    function parseDescriptors(members) {
	        var expanded = [];
	        var child = [];
	        var root = [];
	        var idx = 0;
	        var found;
	        for (; idx < members.length; idx++) {
	            var member = members[idx];
	            var name_1 = member.name;
	            found = false;
	            if (name_1.length > 1) {
	                child.push(member);
	            }
	            else {
	                var hierarchyName = baseHierarchyPath(name_1[0]);
	                for (var j = 0, l = root.length; j < l; j++) {
	                    if (root[j].name[0].indexOf(hierarchyName) === 0) {
	                        found = true;
	                        break;
	                    }
	                }
	                if (!found) {
	                    root.push(member);
	                }
	                if (member.expand) {
	                    expanded.push(member);
	                }
	            }
	        }
	        expanded = expanded.concat(child);
	        return {
	            expanded: expanded,
	            root: root
	        };
	    }
	    function mapNames(names, rootNames) {
	        var rootLength = rootNames.length;
	        rootNames = rootNames.slice(0);
	        for (var idx = 0; idx < names.length; idx++) {
	            var name_2 = names[idx];
	            for (var j = 0; j < rootLength; j++) {
	                var rootName = baseHierarchyPath(rootNames[j]);
	                if (name_2.indexOf(rootName) !== -1) {
	                    rootNames[j] = name_2;
	                    break;
	                }
	            }
	        }
	        return rootNames;
	    }
	    function crossJoinCommand(members, measures) {
	        var tmp = members.slice(0);
	        if (measures.length > 1) {
	            tmp.push("{" + measureNames(measures).join(",") + "}");
	        }
	        return crossJoin(tmp);
	    }
	    function expandMemberDescriptor(names, sort) {
	        var idx = names.length - 1;
	        var name = names[idx];
	        var sortDescriptor = sortDescriptorForMember(sort, name);
	        if (sortDescriptor && sortDescriptor.dir) {
	            name = "ORDER(" + name + ".Children," + sortDescriptor.field + ".CurrentMember.MEMBER_CAPTION," + sortDescriptor.dir + ")";
	        }
	        else {
	            name += ".Children";
	        }
	        names[idx] = name;
	        return names;
	    }
	    function sortDescriptorForMember(sort, member) {
	        for (var idx = 0, length_1 = sort.length; idx < length_1; idx++) {
	            if (member.indexOf(sort[idx].field) === 0) {
	                return sort[idx];
	            }
	        }
	        return null;
	    }
	    function baseHierarchyPath(memberName) {
	        var parts = memberName.split(".");
	        if (parts.length > 2) {
	            return parts[0] + "." + parts[1];
	        }
	        return memberName;
	    }
	    function crossJoin(names) {
	        var result = "CROSSJOIN({";
	        var name;
	        if (names.length > 2) {
	            name = names.pop();
	            result += crossJoin(names);
	        }
	        else {
	            result += names.shift();
	            name = names.pop();
	        }
	        result += "},{";
	        result += name;
	        result += "})";
	        return result;
	    }

	    /**
	     * @hidden
	     */
	    function createRequestBody(options) {
	        var command = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Header/><Body><Execute xmlns="urn:schemas-microsoft-com:xml-analysis"><Command><Statement>';
	        var _a = options.columnAxes, columnAxes = _a === void 0 ? [] : _a, _b = options.rowAxes, rowAxes = _b === void 0 ? [] : _b;
	        var _c = options.measureAxes, measureAxes = _c === void 0 ? [] : _c, _d = options.sort, sort = _d === void 0 ? [] : _d, _e = options.filter, filter = _e === void 0 ? [] : _e;
	        var measuresRowAxis = options.measuresAxis === "rows";
	        command += "SELECT NON EMPTY {";
	        if (!columnAxes.length && rowAxes.length && (!measureAxes.length || (measureAxes.length && measuresRowAxis))) {
	            columnAxes = rowAxes;
	            rowAxes = [];
	            measuresRowAxis = false;
	        }
	        if (!columnAxes.length && !rowAxes.length) {
	            measuresRowAxis = false;
	        }
	        if (columnAxes.length) {
	            command += serializeMembers(columnAxes, !measuresRowAxis ? measureAxes : [], sort);
	        }
	        else if (measureAxes.length && !measuresRowAxis) {
	            command += measureNames(measureAxes).join(",");
	        }
	        command += "} DIMENSION PROPERTIES CHILDREN_CARDINALITY, PARENT_UNIQUE_NAME ON COLUMNS";
	        if (rowAxes.length || (measuresRowAxis && measureAxes.length > 1)) {
	            command += ", NON EMPTY {";
	            if (rowAxes.length) {
	                command += serializeMembers(rowAxes, measuresRowAxis ? measureAxes : [], sort);
	            }
	            else {
	                command += measureNames(measureAxes).join(",");
	            }
	            command += "} DIMENSION PROPERTIES CHILDREN_CARDINALITY, PARENT_UNIQUE_NAME ON ROWS";
	        }
	        if (filter.length) {
	            command += " FROM ";
	            command += "(";
	            command += serializeFilters(filter, options.connection.cube);
	            command += ")";
	        }
	        else {
	            command += " FROM [" + options.connection.cube + "]";
	        }
	        if (measureAxes.length === 1 && columnAxes.length) {
	            command += " WHERE (" + measureNames(measureAxes).join(",") + ")";
	        }
	        command += '</Statement></Command><Properties><PropertyList><Catalog>' + options.connection.catalog + '</Catalog><Format>Multidimensional</Format></PropertyList></Properties></Execute></Body></Envelope>';
	        return command.replace(/&/g, "&amp;");
	    }

	    /*! *****************************************************************************
	    Copyright (c) Microsoft Corporation.

	    Permission to use, copy, modify, and/or distribute this software for any
	    purpose with or without fee is hereby granted.

	    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	    PERFORMANCE OF THIS SOFTWARE.
	    ***************************************************************************** */

	    var __assign = function() {
	        __assign = Object.assign || function __assign(t) {
	            for (var s, i = 1, n = arguments.length; i < n; i++) {
	                s = arguments[i];
	                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	            }
	            return t;
	        };
	        return __assign.apply(this, arguments);
	    };

	    function __awaiter(thisArg, _arguments, P, generator) {
	        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	        return new (P || (P = Promise))(function (resolve, reject) {
	            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	            step((generator = generator.apply(thisArg, _arguments || [])).next());
	        });
	    }

	    function __generator(thisArg, body) {
	        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	        function verb(n) { return function (v) { return step([n, v]); }; }
	        function step(op) {
	            if (f) throw new TypeError("Generator is already executing.");
	            while (_) try {
	                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	                if (y = 0, t) op = [op[0] & 2, t.value];
	                switch (op[0]) {
	                    case 0: case 1: t = op; break;
	                    case 4: _.label++; return { value: op[1], done: false };
	                    case 5: _.label++; y = op[1]; op = [0]; continue;
	                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                    default:
	                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                        if (t[2]) _.ops.pop();
	                        _.trys.pop(); continue;
	                }
	                op = body.call(thisArg, _);
	            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	        }
	    }

	    /** @deprecated */
	    function __spreadArrays() {
	        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	        for (var r = Array(s), k = 0, i = 0; i < il; i++)
	            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	                r[k] = a[j];
	        return r;
	    }

	    /**
	     * @hidden
	     */
	    function parseResponse(response) {
	        var xmlDoc = new DOMParser().parseFromString(response, "text/xml");
	        var axes = Array.from(xmlDoc.querySelectorAll("Axis"));
	        var cells = Array.from(xmlDoc.querySelectorAll("CellData > Cell"))
	            .map(function (cell) { return ({
	            fmtValue: getPropertyValue(cell, "FmtValue"),
	            ordinal: parseInt(cell.getAttribute("CellOrdinal"), 10),
	            value: getPropertyValue(cell, "Value")
	        }); });
	        var columns = { tuples: [] };
	        var rows = { tuples: [] };
	        var data = [];
	        axes.forEach(function (axis) {
	            if (axis.getAttribute('name') !== "SlicerAxis") {
	                var tuples = columns.tuples.length === 0 ? columns.tuples : rows.tuples;
	                Array.prototype.push.apply(tuples, translateAxis(axis));
	            }
	        });
	        var indexedData = new Array(rows.tuples.length * columns.tuples.length).fill(null);
	        cells.forEach(function (c) { indexedData[c.ordinal] = c; });
	        var counter = 0;
	        rows.tuples.forEach(function (rowTuple) {
	            columns.tuples.forEach(function (colTuple) {
	                data.push({
	                    columnTuple: colTuple,
	                    data: indexedData[counter],
	                    rowTuple: rowTuple
	                });
	                counter++;
	            });
	        });
	        return { columns: columns, data: data, rows: rows };
	    }
	    /**
	     * @hidden
	     */
	    function getPropertyValue(member, name) {
	        var node = member.querySelector(name);
	        return node ? node.textContent : "";
	    }
	    function translateAxis(axis) {
	        var tuples = Array.from(axis.querySelectorAll("Tuple"));
	        return tuples.map(function (tuple) {
	            var memberElements = Array.from(tuple.querySelectorAll("Member"));
	            var members = memberElements.map(function (member) {
	                var lNum = parseInt(getPropertyValue(member, "LNum") || "0", 10);
	                var hasChildren = parseInt(getPropertyValue(member, "CHILDREN_CARDINALITY") || "0", 10) > 0;
	                return {
	                    caption: getPropertyValue(member, "Caption"),
	                    children: [],
	                    hasChildren: hasChildren,
	                    hierarchy: member.getAttribute('Hierarchy'),
	                    levelName: getPropertyValue(member, "LName"),
	                    levelNum: lNum,
	                    name: getPropertyValue(member, "UName"),
	                    parentName: getPropertyValue(member, "PARENT_UNIQUE_NAME")
	                };
	            });
	            return { members: members };
	        });
	    }

	    /**
	     * @hidden
	     */
	    var discoverCommands = {
	        schemaCatalogs: "DBSCHEMA_CATALOGS",
	        schemaCubes: "MDSCHEMA_CUBES",
	        schemaDimensions: "MDSCHEMA_DIMENSIONS",
	        schemaHierarchies: "MDSCHEMA_HIERARCHIES",
	        schemaKPIs: "MDSCHEMA_KPIS",
	        schemaLevels: "MDSCHEMA_LEVELS",
	        schemaMeasures: "MDSCHEMA_MEASURES",
	        schemaMembers: "MDSCHEMA_MEMBERS"
	    };
	    /**
	     * @hidden
	     */
	    function createDiscoverBody(options) {
	        var properties = {};
	        var command = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Header/><Body><Discover xmlns="urn:schemas-microsoft-com:xml-analysis">';
	        command += "<RequestType>" + (discoverCommands[options.command] || options.command) + "</RequestType>";
	        command += "<Restrictions>" + serializeOptions("RestrictionList", options.restrictions, true) + "</Restrictions>";
	        if (options.connection && options.connection.catalog) {
	            properties.Catalog = options.connection.catalog;
	        }
	        command += "<Properties>" + serializeOptions("PropertyList", properties, false) + "</Properties>";
	        command += '</Discover></Body></Envelope>';
	        return command;
	    }
	    function serializeOptions(parentTagName, options, capitalize) {
	        var result = "";
	        if (options) {
	            result += "<" + parentTagName + ">";
	            var value = void 0;
	            for (var key in options) {
	                if (options[key]) {
	                    value = options[key];
	                    if (capitalize) {
	                        key = key.replace(/([A-Z]+(?=$|[A-Z][a-z])|[A-Z]?[a-z]+)/g, "$1_").toUpperCase().replace(/_$/, "");
	                    }
	                    result += "<" + key + ">" + value + "</" + key + ">";
	                }
	            }
	            result += "</" + parentTagName + ">";
	        }
	        else {
	            result += "<" + parentTagName + "/>";
	        }
	        return result;
	    }

	    /**
	     * @hidden
	     */
	    function parseCubes(response) {
	        var xmlDoc = new DOMParser().parseFromString(response, "text/xml");
	        var rows = Array.from(xmlDoc.querySelectorAll("DiscoverResponse > return > root > row"))
	            .map(function (row) { return ({
	            name: getPropertyValue(row, "CUBE_NAME"),
	            caption: getPropertyValue(row, "CUBE_CAPTION"),
	            description: getPropertyValue(row, "DESCRIPTION"),
	            type: getPropertyValue(row, "CUBE_TYPE")
	        }); });
	        return rows;
	    }
	    /**
	     * @hidden
	     */
	    function parseCatalogs(response) {
	        var xmlDoc = new DOMParser().parseFromString(response, "text/xml");
	        var rows = Array.from(xmlDoc.querySelectorAll("DiscoverResponse > return > root > row"))
	            .map(function (row) { return ({
	            name: getPropertyValue(row, "CATALOG_NAME"),
	            description: getPropertyValue(row, "DESCRIPTION")
	        }); });
	        return rows;
	    }
	    /**
	     * @hidden
	     */
	    function parseMeasures(response) {
	        var xmlDoc = new DOMParser().parseFromString(response, "text/xml");
	        var rows = Array.from(xmlDoc.querySelectorAll("DiscoverResponse > return > root > row"))
	            .map(function (row) { return ({
	            name: getPropertyValue(row, "MEASURE_NAME"),
	            caption: getPropertyValue(row, "MEASURE_CAPTION"),
	            uniqueName: getPropertyValue(row, "MEASURE_UNIQUE_NAME"),
	            description: getPropertyValue(row, "DESCRIPTION"),
	            aggregator: getPropertyValue(row, "MEASURE_AGGREGATOR"),
	            groupName: getPropertyValue(row, "MEASUREGROUP_NAME"),
	            displayFolder: getPropertyValue(row, "MEASURE_DISPLAY_FOLDER"),
	            defaultFormat: getPropertyValue(row, "DEFAULT_FORMAT_STRING")
	        }); });
	        return rows;
	    }
	    /**
	     * @hidden
	     */
	    function parseKPIs(response) {
	        var xmlDoc = new DOMParser().parseFromString(response, "text/xml");
	        var rows = Array.from(xmlDoc.querySelectorAll("DiscoverResponse > return > root > row"))
	            .map(function (row) { return ({
	            name: getPropertyValue(row, "KPI_NAME"),
	            uniqueName: getPropertyValue(row, "KPI_NAME"),
	            caption: getPropertyValue(row, "KPI_CAPTION"),
	            value: getPropertyValue(row, "KPI_VALUE"),
	            goal: getPropertyValue(row, "KPI_GOAL"),
	            status: getPropertyValue(row, "KPI_STATUS"),
	            trend: getPropertyValue(row, "KPI_TREND"),
	            statusGraphic: getPropertyValue(row, "KPI_STATUS_GRAPHIC"),
	            trendGraphic: getPropertyValue(row, "KPI_TREND_GRAPHIC"),
	            description: getPropertyValue(row, "KPI_DESCRIPTION"),
	            groupName: getPropertyValue(row, "MEASUREGROUP_NAME"),
	            type: "kpi"
	        }); });
	        return rows;
	    }
	    /**
	     * @hidden
	     */
	    function parseDimensions(response) {
	        var xmlDoc = new DOMParser().parseFromString(response, "text/xml");
	        var rows = Array.from(xmlDoc.querySelectorAll("DiscoverResponse > return > root > row"))
	            .map(function (row) { return ({
	            caption: getPropertyValue(row, "DIMENSION_CAPTION"),
	            defaultHierarchy: getPropertyValue(row, "DEFAULT_HIERARCHY"),
	            description: getPropertyValue(row, "DESCRIPTION"),
	            name: getPropertyValue(row, "DIMENSION_NAME"),
	            type: parseInt(getPropertyValue(row, "DIMENSION_TYPE"), 10),
	            uniqueName: getPropertyValue(row, "DIMENSION_UNIQUE_NAME")
	        }); });
	        return rows;
	    }
	    /**
	     * @hidden
	     */
	    function parseHierarchies(response) {
	        var xmlDoc = new DOMParser().parseFromString(response, "text/xml");
	        var rows = Array.from(xmlDoc.querySelectorAll("DiscoverResponse > return > root > row"))
	            .map(function (row) { return ({
	            name: getPropertyValue(row, "HIERARCHY_NAME"),
	            caption: getPropertyValue(row, "HIERARCHY_CAPTION"),
	            description: getPropertyValue(row, "DESCRIPTION"),
	            uniqueName: getPropertyValue(row, "HIERARCHY_UNIQUE_NAME"),
	            dimensionUniqueName: getPropertyValue(row, "DIMENSION_UNIQUE_NAME"),
	            displayFolder: getPropertyValue(row, "HIERARCHY_DISPLAY_FOLDER"),
	            origin: getPropertyValue(row, "HIERARCHY_ORIGIN"),
	            defaultMember: getPropertyValue(row, "DEFAULT_MEMBER")
	        }); });
	        return rows;
	    }
	    /**
	     * @hidden
	     */
	    function parseLevels(response) {
	        var xmlDoc = new DOMParser().parseFromString(response, "text/xml");
	        var rows = Array.from(xmlDoc.querySelectorAll("DiscoverResponse > return > root > row"))
	            .map(function (row) { return ({
	            name: getPropertyValue(row, "LEVEL_NAME"),
	            caption: getPropertyValue(row, "LEVEL_CAPTION"),
	            description: getPropertyValue(row, "DESCRIPTION"),
	            uniqueName: getPropertyValue(row, "LEVEL_UNIQUE_NAME"),
	            dimensionUniqueName: getPropertyValue(row, "DIMENSION_UNIQUE_NAME"),
	            displayFolder: getPropertyValue(row, "LEVEL_DISPLAY_FOLDER"),
	            orderingProperty: getPropertyValue(row, "LEVEL_ORDERING_PROPERTY"),
	            origin: getPropertyValue(row, "LEVEL_ORIGIN"),
	            hierarchyUniqueName: getPropertyValue(row, "HIERARCHY_UNIQUE_NAME")
	        }); });
	        return rows;
	    }
	    /**
	     * @hidden
	     */
	    function parseMembers(response) {
	        var xmlDoc = new DOMParser().parseFromString(response, "text/xml");
	        var rows = Array.from(xmlDoc.querySelectorAll("DiscoverResponse > return > root > row"))
	            .map(function (row) { return ({
	            name: getPropertyValue(row, "MEMBER_NAME"),
	            caption: getPropertyValue(row, "MEMBER_CAPTION"),
	            uniqueName: getPropertyValue(row, "MEMBER_UNIQUE_NAME"),
	            dimensionUniqueName: getPropertyValue(row, "DIMENSION_UNIQUE_NAME"),
	            hierarchyUniqueName: getPropertyValue(row, "HIERARCHY_UNIQUE_NAME"),
	            levelUniqueName: getPropertyValue(row, "LEVEL_UNIQUE_NAME"),
	            childrenCardinality: getPropertyValue(row, "CHILDREN_CARDINALITY")
	        }); });
	        return rows;
	    }

	    var discoverParser = {
	        schemaCatalogs: parseCatalogs,
	        schemaCubes: parseCubes,
	        schemaDimensions: parseDimensions,
	        schemaHierarchies: parseHierarchies,
	        schemaKPIs: parseKPIs,
	        schemaLevels: parseLevels,
	        schemaMeasures: parseMeasures,
	        schemaMembers: parseMembers
	    };
	    /**
	     * Fetches the data.
	     *
	     * @param options RequestOptions
	     * @returns Promise<ResponseData>
	     *
	     * @example
	     * const options: RequestOptions = { ... };
	     *
	     * fetchData(options).then(createDataState).then((dataState: DataState) => {
	     *  // Update the UI
	     * });
	     */
	    /**
	     * @hidden
	     */
	    var fetchData = function (fetchOptions, options) { return __awaiter(void 0, void 0, void 0, function () {
	        var init, response, stringResponse;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    init = __assign({ body: createRequestBody(options), headers: { 'Content-Type': 'text/xml' }, method: 'POST' }, fetchOptions.init);
	                    return [4 /*yield*/, fetch(fetchOptions.url, init)];
	                case 1:
	                    response = _a.sent();
	                    return [4 /*yield*/, response.text()];
	                case 2:
	                    stringResponse = _a.sent();
	                    return [2 /*return*/, parseResponse(stringResponse)];
	            }
	        });
	    }); };
	    /**
	     * @hidden
	     */
	    var fetchDiscover = function (fetchOptions, options) { return __awaiter(void 0, void 0, void 0, function () {
	        var init, response, stringResponse;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    init = __assign({ body: createDiscoverBody(options), headers: { 'Content-Type': 'text/xml' }, method: 'POST' }, fetchOptions.init);
	                    return [4 /*yield*/, fetch(fetchOptions.url, init)];
	                case 1:
	                    response = _a.sent();
	                    return [4 /*yield*/, response.text()];
	                case 2:
	                    stringResponse = _a.sent();
	                    return [2 /*return*/, discoverParser[options.command](stringResponse)];
	            }
	        });
	    }); };

	    /**
	     * Creates the state object. See `fetchData`.
	     *
	     * @param response - ResponseData
	     * @returns DataState
	     */
	    /**
	     * @hidden
	     */
	    var createDataState = function (response) {
	        var state = {
	            columns: response.columns.tuples,
	            data: response.data,
	            rows: response.rows.tuples
	        };
	        return state;
	    };

	    /**
	     * Creates a collection of AxisDescriptor base on the expandTree.
	     * @param expandTree - { [key: string]: boolean }
	     * @returns AxisDescriptor[]
	     *
	     * @example
	     * See `setRowExpand` or `setColumnExpand` functions.
	     */
	    /**
	     * @hidden
	     */
	    function createAxisDescriptors(expandTree) {
	        var descriptors = [];
	        for (var _i = 0, _a = Object.keys(expandTree); _i < _a.length; _i++) {
	            var key = _a[_i];
	            descriptors.push({ name: JSON.parse(key), expand: expandTree[key] });
	        }
	        return descriptors;
	    }

	    /**
	     * Sets sort descriptors to request options.
	     *
	     * @param options - RequestOptions
	     * @param sort - SortDescriptor[]
	     *
	     * @example
	     * const options: RequestOptions = { ... };
	     * const sort: SortDescriptor[] = [{ ... }, { ... }];
	     * setSort(options, sort);
	     * // skip the sort parameter to clear current filter - setSort(options);
	     *
	     * fetchData(options).then(createDataState).then((dataState: DataState) => {
	     *  // Update the UI
	     * });
	     */
	    /**
	     * @hidden
	     */
	    var setSort = function (options, sort) {
	        if (sort === void 0) { sort = []; }
	        options.sort = sort;
	    };

	    /**
	     * Sets filter descriptors to request options.
	     *
	     * @param options - RequestOptions
	     * @param filter - FilterDescriptor[]
	     *
	     * @example
	     * const options: RequestOptions = { ... };
	     * const filter: FilterDescriptor[] = [{ ... }, { ... }];
	     * setFilter(options, filter);
	     * // skip the filter parameter to clear current filter - setFilter(options);
	     *
	     * fetchData(options).then(createDataState).then((dataState: DataState) => {
	     *  // Update the UI
	     * });
	     */
	    /**
	     * @hidden
	     */
	    var setFilter = function (options, filter) {
	        if (filter === void 0) { filter = []; }
	        options.filter = filter;
	    };

	    // A typical tree depth count won't work for the Pivot,
	    // as each branch can have lower number of nodes than the total number of levels
	    /**
	     * @hidden
	     */
	    var getMaxNesting = function (node, set) {
	        if (set === void 0) { set = new Set(); }
	        (node.children || []).forEach(function (child) {
	            set.add(child.levelName);
	            getMaxNesting(child, set);
	        });
	        return set.size;
	    };
	    /**
	     * @hidden
	     */
	    var getMaxExpansion = function (node) {
	        var expanded = 0;
	        (node.children || []).forEach(function (child) {
	            expanded += (getMaxExpansion(child) || 1);
	        });
	        return expanded;
	    };
	    /**
	     * @hidden
	     */
	    var generateNormalizedPath = function (node, parent) {
	        return (parent && (parent.hierarchy === node.hierarchy)
	            ? __spreadArrays((parent.normalizedPath || []).slice(0, -1), [node.name || null]) : __spreadArrays(((parent && parent.normalizedPath) ? parent.normalizedPath : []), [node.name])).filter(Boolean);
	    };
	    /**
	     * @hidden
	     */
	    var generatePath = function (node, parent) {
	        return (parent && (parent.hierarchy === node.hierarchy)
	            ? __spreadArrays((parent.path || []).slice(0, -1), [((node.levelNum === 0 ? node.hierarchy : node.name) || null)]) : __spreadArrays(((parent && parent.path) ? parent.path : []), [node.levelNum === 0 ? node.hierarchy : node.name])).filter(Boolean);
	    };
	    /**
	     * @hidden
	     */
	    var toMatrix = function (node, rowIndex, colIndex, maxDepth, maxBreadth, matrix, leafs, parent) {
	        if (rowIndex === void 0) { rowIndex = -1; }
	        if (colIndex === void 0) { colIndex = 0; }
	        if (maxDepth === void 0) { maxDepth = undefined; }
	        if (maxBreadth === void 0) { maxBreadth = undefined; }
	        if (matrix === void 0) { matrix = undefined; }
	        if (leafs === void 0) { leafs = undefined; }
	        if (parent === void 0) { parent = undefined; }
	        var branchDepth = getMaxNesting(node);
	        var branchBreadth = getMaxExpansion(node);
	        var depth = maxDepth || branchDepth;
	        var breadth = maxBreadth || branchBreadth;
	        var matrixResult = matrix ? matrix.slice() : [];
	        var leafsResult = leafs ? leafs.slice() : new Array(breadth);
	        var index = matrixResult.findIndex(function (l) { return l && l.name === node.levelName && l.level === node.levelNum; });
	        var level = matrixResult[index];
	        var row = {
	            name: node.levelName,
	            level: node.levelNum,
	            index: rowIndex,
	            cells: new Array(breadth).fill(null)
	        };
	        var inject = rowIndex !== -1 && colIndex !== -1;
	        var cell = {
	            caption: node.caption,
	            name: node.name,
	            levelName: node.levelName,
	            levelNum: node.levelNum,
	            hasChildren: node.hasChildren,
	            parentName: node.parentName,
	            hierarchy: node.hierarchy,
	            total: (node.total !== undefined ? node.total : false) || (parent && parent.children.length <= 1 && parent.total),
	            parent: parent,
	            rowIndex: rowIndex,
	            colIndex: colIndex,
	            depth: 1,
	            breadth: 1,
	            path: node.path || [],
	            normalizedPath: node.normalizedPath || [],
	            children: node.children.filter(function (c) { return c.hierarchy === node.hierarchy; })
	        };
	        if (inject) {
	            if (level) {
	                level.cells[colIndex] = cell;
	                if (level.index >= rowIndex) {
	                    rowIndex = level.index;
	                }
	            }
	            else {
	                if (matrixResult[rowIndex] && matrixResult[rowIndex].cells.length) {
	                    for (var idx = rowIndex; idx < matrixResult.length; idx++) {
	                        var shiftedRow = matrixResult[idx];
	                        shiftedRow.index++;
	                    }
	                    matrixResult.splice(rowIndex, 0, row);
	                    matrixResult[rowIndex].cells[colIndex] = cell;
	                }
	                else {
	                    matrixResult[rowIndex] = row;
	                    matrixResult[rowIndex].cells[colIndex] = cell;
	                }
	            }
	        }
	        var collOffset = 0;
	        if (node.children && node.children.length) {
	            node.children.forEach(function (child) {
	                var _a = toMatrix(child, rowIndex + 1, colIndex + collOffset, depth, breadth, matrixResult, leafsResult, cell), newMatrix = _a[0], newLeafs = _a[1], childBreadth = _a[3];
	                collOffset += (childBreadth || 1);
	                matrixResult = newMatrix.slice();
	                leafsResult = newLeafs.slice();
	            });
	        }
	        else if (node.normalizedPath) {
	            leafsResult[colIndex] = { total: cell.total, path: node.normalizedPath };
	        }
	        cell.depth = branchDepth;
	        cell.breadth = branchBreadth;
	        return [
	            matrixResult,
	            leafsResult,
	            branchDepth,
	            branchBreadth
	        ];
	    };
	    var withTotal = function (root, parent, index) {
	        if (parent === void 0) { parent = null; }
	        if (index === void 0) { index = 0; }
	        var hierarchy;
	        var alt = __assign(__assign({}, root), { total: true, hasChildren: false, children: [] });
	        for (var childIndex = 0; childIndex < root.children.length; childIndex++) {
	            var child = withTotal(root.children[childIndex], root, childIndex);
	            hierarchy = hierarchy || child.hierarchy;
	            if (child.hierarchy !== hierarchy
	                && parent
	                && !parent.children.some(function (c) { return c.total && c.name === alt.name; })
	                && !root.total) {
	                alt.children.push(child);
	                root.children.splice(childIndex, 1);
	                childIndex--;
	            }
	        }
	        if (root.children.filter(function (c) { return !c.total; }).length >= 1
	            && parent
	            && !parent.children.some(function (c) { return c.total && c.name === alt.name; })
	            && !root.total) {
	            var childHierarchy = root.children[0].hierarchy;
	            if (root.hierarchy === childHierarchy) {
	                parent.children.splice(index + 1, 0, alt);
	            }
	        }
	        return root;
	    };
	    /**
	     * @hidden
	     */
	    var toTree = function (tuples) {
	        var root = { children: [] };
	        var map = {};
	        var _loop_1 = function (tupleIndex) {
	            var tuple = copy(tuples[tupleIndex]);
	            var key = "";
	            var _loop_2 = function (memberIndex) {
	                var member = tuple.members[memberIndex];
	                var parent_1;
	                if (root.children && root.children.length === 0) {
	                    parent_1 = root;
	                }
	                else if (map[key] && !map[key + member.name] && member.levelNum === 0) {
	                    parent_1 = map[key];
	                }
	                else if (map[key + member.parentName] && member.levelNum > 0 && !map[key + member.parentName + member.name]) {
	                    parent_1 = map[key + member.parentName];
	                }
	                else if (!map[key + member.parentName] && member.levelNum > 0 && !map[key + member.parentName + member.name]) {
	                    var parentKey = Object.keys(map)
	                        .find(function (e) { return e.indexOf(member.hierarchy) === 0
	                        && e.lastIndexOf(key + member.parentName) + (key + member.parentName).length === e.length; });
	                    if (parentKey) {
	                        parent_1 = map[parentKey];
	                    }
	                }
	                if (parent_1) {
	                    member.path = generatePath(member, parent_1);
	                    member.normalizedPath = generateNormalizedPath(member, parent_1);
	                    var intruderIndex = parent_1.children.findIndex(function (c) { return c.hierarchy !== parent_1.hierarchy; });
	                    if (intruderIndex !== -1) {
	                        parent_1.children.splice(Math.max(intruderIndex, 0), 0, member);
	                    }
	                    else {
	                        parent_1.children.push(member);
	                    }
	                }
	                key += member.parentName += member.name;
	                if (!map[key]) {
	                    map[key] = member;
	                }
	            };
	            for (var memberIndex = 0; memberIndex < tuple.members.length; memberIndex++) {
	                _loop_2(memberIndex);
	            }
	        };
	        for (var tupleIndex = 0; tupleIndex < tuples.length; tupleIndex++) {
	            _loop_1(tupleIndex);
	        }
	        return copy(withTotal(root));
	    };
	    /**
	     * @hidden
	     */
	    var toData = function (data, columns, rows, breadth, depth) {
	        var result = Array.from(new Array(depth), function () { return ({ cells: Array.from(new Array(breadth), function () { return null; }) }); });
	        var hash = function (names) { return names.join('|'); };
	        var membersNames = function (tuple) { return tuple.members.map(function (m) { return m.name; }); };
	        var columnsIndexes = new Map();
	        var rowsIndexes = new Map();
	        columns.forEach(function (colMembers, idx) { columnsIndexes.set(hash(colMembers.path), idx); });
	        rows.forEach(function (rowMembers, idx) { rowsIndexes.set(hash(rowMembers.path), idx); });
	        data.forEach(function (item) {
	            var colIndex = columnsIndexes.get(hash(membersNames(item.columnTuple)));
	            var rowIndex = rowsIndexes.get(hash(membersNames(item.rowTuple)));
	            if (colIndex !== undefined && rowIndex !== undefined) {
	                if (!result[rowIndex].cells[colIndex]) {
	                    result[rowIndex].row = rows[rowIndex].path;
	                    result[rowIndex].cells[colIndex] = item;
	                }
	            }
	        });
	        return result;
	    };
	    var rotateMatrix = function (matrix, leafs, depth, breadth) {
	        var result = new Array(breadth);
	        for (var colIndex = 0; colIndex < breadth; colIndex++) {
	            for (var rowIndex = 0; rowIndex < depth; rowIndex++) {
	                if (matrix[rowIndex] && matrix[rowIndex].cells[colIndex]) {
	                    var cell = matrix[rowIndex].cells[colIndex];
	                    if (!result[colIndex]) {
	                        result[colIndex] = {
	                            cells: new Array(depth).fill(null)
	                        };
	                    }
	                    result[colIndex].cells[rowIndex] = __assign(__assign({}, cell), { rowSpan: cell.colSpan, colSpan: cell.rowSpan });
	                }
	            }
	        }
	        return [result, leafs, breadth, depth];
	    };
	    /**
	     * @hidden
	     */
	    var toColumns = function (root) {
	        var _a = toMatrix(root), matrix = _a[0], leafs = _a[1], depth = _a[2], breadth = _a[3];
	        for (var colIndex = 0; colIndex < breadth; colIndex++) {
	            var cell = null;
	            for (var rowIndex = 0; rowIndex < depth; rowIndex++) {
	                if (matrix[rowIndex]) {
	                    var next = matrix[rowIndex].cells[colIndex];
	                    if (!next && cell) {
	                        cell.rowSpan = (cell.rowSpan || 1) + 1;
	                    }
	                    if (cell) {
	                        cell.colSpan = cell.breadth || 1;
	                    }
	                    if (next) {
	                        cell = next;
	                    }
	                }
	            }
	        }
	        return [matrix, leafs, depth, breadth];
	    };
	    /**
	     * @hidden
	     */
	    var toRows = function (root) {
	        var _a = toMatrix(root), matrix = _a[0], leafs = _a[1], depth = _a[2], breadth = _a[3];
	        for (var colIndex = 0; colIndex < breadth; colIndex++) {
	            var cell = null;
	            for (var rowIndex = 0; rowIndex < depth; rowIndex++) {
	                if (matrix[rowIndex]) {
	                    var next = matrix[rowIndex].cells[colIndex];
	                    if (!next && cell) {
	                        cell.rowSpan = (cell.rowSpan || 1) + 1;
	                    }
	                    if (cell) {
	                        cell.colSpan = cell.breadth;
	                    }
	                    if (next) {
	                        cell = next;
	                    }
	                }
	            }
	        }
	        return rotateMatrix(matrix, leafs, depth, breadth);
	    };
	    /**
	     * @hidden
	     */
	    function copy(obj) {
	        return JSON.parse(JSON.stringify(obj));
	    }
	    var kpiMeasure = function (name, measure, type) {
	        return {
	            hierarchyUniqueName: name,
	            uniqueName: measure,
	            caption: measure,
	            measure: measure,
	            name: measure,
	            type: type,
	            kpi: true
	        };
	    };
	    /**
	     * @hidden
	     */
	    function buildKPIMeasures(node) {
	        var name = node.name;
	        return [
	            kpiMeasure(name, node.value, "value"),
	            kpiMeasure(name, node.goal, "goal"),
	            kpiMeasure(name, node.status, "status"),
	            kpiMeasure(name, node.trend, "trend")
	        ];
	    }
	    /**
	     * @hidden
	     */
	    var addKPI = function (data) {
	        var found;
	        var idx = 0;
	        for (; idx < data.length; idx++) {
	            if (data[idx].type === 2) {
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
	    };
	    /**
	     * @hidden
	     */
	    var compareAxisWithField = function (a, b) { return String(a.name) === String([(b.defaultHierarchy
	            ? b.defaultHierarchy
	            : b.uniqueName)]); };
	    /**
	     * @hidden
	     */
	    var compareAxes = function (a, b) { return String(a.name) === String(b.name); };

	    /**
	     * @hidden
	     */
	    exports.HEADERS_ACTION = void 0;
	    (function (HEADERS_ACTION) {
	        HEADERS_ACTION["toggle"] = "HEADERS_ACTION_TOGGLE";
	        HEADERS_ACTION["expand"] = "HEADERS_ACTION_EXPAND";
	        HEADERS_ACTION["collapse"] = "HEADERS_ACTION_COLLAPSE";
	    })(exports.HEADERS_ACTION || (exports.HEADERS_ACTION = {}));
	    var findPath = function (node, matchFn, matched) {
	        var result = new Set();
	        node.children.forEach(function (child) {
	            var match = matchFn(child);
	            if (matched) {
	                result.add(String(child.path));
	            }
	            findPath(child, matchFn, (matched || match)).map(function (h) {
	                result.add(h);
	            });
	        });
	        return Array.from(result.values());
	    };
	    /**
	     * @hidden
	     */
	    var headersReducer = function (state, action) {
	        switch (action.type) {
	            case exports.HEADERS_ACTION.toggle: {
	                var existing = state.find((function (s) { return String(s.name) === String(action.payload); }));
	                return headersReducer(state, __assign(__assign({}, action), { type: existing && (existing.expand)
	                        ? exports.HEADERS_ACTION.collapse
	                        : exports.HEADERS_ACTION.expand }));
	            }
	            case exports.HEADERS_ACTION.expand: {
	                var existing_1 = state.find((function (s) { return String(s.name) === String(action.payload); }));
	                if (existing_1 && existing_1.expand === true) {
	                    return state;
	                }
	                else if (existing_1 && (existing_1.expand === false || existing_1.expand === undefined)) {
	                    return state.map(function (s) { return s === existing_1 ? (__assign(__assign({}, existing_1), { expand: true })) : s; });
	                }
	                else {
	                    return __spreadArrays(state, [{ name: action.payload, expand: true }]);
	                }
	            }
	            case exports.HEADERS_ACTION.collapse: {
	                var filtered_1 = findPath(action.tree, function (node) { return !node.total && String(node.path) === String(action.payload); });
	                var newState = __spreadArrays(state).filter(function (h) { return !filtered_1.some(function (f) { return f === String(h.name); }); })
	                    .map(function (h) { return (__assign(__assign({}, h), { expand: Boolean(h.expand) })); })
	                    .map(function (h) { return (String(h.name) === String(action.payload))
	                    ? action.payload.length > 1 ? undefined : { name: action.payload, expand: false }
	                    : h; })
	                    .filter(Boolean);
	                return newState;
	            }
	            default: {
	                return state;
	            }
	        }
	    };

	    /**
	     * @hidden
	     */
	    exports.PIVOT_CONFIGURATOR_ACTION = void 0;
	    (function (PIVOT_CONFIGURATOR_ACTION) {
	        // Selection
	        PIVOT_CONFIGURATOR_ACTION["toggleSelection"] = "PIVOT_CONFIGURATOR_ACTION_TOGGLE_SELECTION";
	        PIVOT_CONFIGURATOR_ACTION["addColumnAxis"] = "PIVOT_CONFIGURATOR_ACTION_ADD_COLUMN_AXIS";
	        PIVOT_CONFIGURATOR_ACTION["addColumnAxes"] = "PIVOT_CONFIGURATOR_ACTION_ADD_COLUMN_AXES";
	        PIVOT_CONFIGURATOR_ACTION["removeColumnAxis"] = "PIVOT_CONFIGURATOR_ACTION_REMOVE_COLUMN_AXIS";
	        PIVOT_CONFIGURATOR_ACTION["removeColumnAxes"] = "PIVOT_CONFIGURATOR_ACTION_REMOVE_COLUMN_AXES";
	        PIVOT_CONFIGURATOR_ACTION["addRowAxis"] = "PIVOT_CONFIGURATOR_ACTION_ADD_ROW_AXIS";
	        PIVOT_CONFIGURATOR_ACTION["addRowAxes"] = "PIVOT_CONFIGURATOR_ACTION_ADD_ROW_AXES";
	        PIVOT_CONFIGURATOR_ACTION["removeRowAxis"] = "PIVOT_CONFIGURATOR_ACTION_REMOVE_ROW_AXIS";
	        PIVOT_CONFIGURATOR_ACTION["removeRowAxes"] = "PIVOT_CONFIGURATOR_ACTION_REMOVE_ROW_AXES";
	        PIVOT_CONFIGURATOR_ACTION["addMeasureAxis"] = "PIVOT_CONFIGURATOR_ACTION_ADD_MEASURE_AXIS";
	        PIVOT_CONFIGURATOR_ACTION["addMeasureAxes"] = "PIVOT_CONFIGURATOR_ACTION_ADD_MEASURE_AXES";
	        PIVOT_CONFIGURATOR_ACTION["removeMeasureAxis"] = "PIVOT_CONFIGURATOR_ACTION_REMOVE_MEASURE_AXIS";
	        PIVOT_CONFIGURATOR_ACTION["removeMeasureAxes"] = "PIVOT_CONFIGURATOR_ACTION_REMOVE_MEASURE_AXES";
	        // Removal
	        PIVOT_CONFIGURATOR_ACTION["remove"] = "PIVOT_CONFIGURATOR_ACTION_REMOVE";
	        // Sort
	        PIVOT_CONFIGURATOR_ACTION["setSort"] = "PIVOT_CONFIGURATOR_ACTION_SET_SORT";
	        // Filter
	        PIVOT_CONFIGURATOR_ACTION["setFilter"] = "PIVOT_CONFIGURATOR_ACTION_SET_FILTER";
	        PIVOT_CONFIGURATOR_ACTION["addFilter"] = "PIVOT_CONFIGURATOR_ACTION_ADD_FILTER";
	        PIVOT_CONFIGURATOR_ACTION["changeFilter"] = "PIVOT_CONFIGURATOR_ACTION_CHANGE_FILTER";
	        PIVOT_CONFIGURATOR_ACTION["removeFilter"] = "PIVOT_CONFIGURATOR_ACTION_REMOVE_FILTER";
	        // Drag
	        PIVOT_CONFIGURATOR_ACTION["setDragItem"] = "PIVOT_CONFIGURATOR_ACTION_SET_DRAGITEM";
	        PIVOT_CONFIGURATOR_ACTION["drop"] = "PIVOT_CONFIGURATOR_ACTION_DROP";
	        PIVOT_CONFIGURATOR_ACTION["setDropZone"] = "PIVOT_CONFIGURATOR_ACTION_SET_DROP_ZONE";
	        PIVOT_CONFIGURATOR_ACTION["setDropTarget"] = "PIVOT_CONFIGURATOR_ACTION_SET_DROP_TARGET";
	        PIVOT_CONFIGURATOR_ACTION["setDropDirection"] = "PIVOT_CONFIGURATOR_ACTION_SET_DROP_DIRECTION";
	    })(exports.PIVOT_CONFIGURATOR_ACTION || (exports.PIVOT_CONFIGURATOR_ACTION = {}));
	    /**
	     * @hidden
	     */
	    var configuratorReducer = function (state, action) {
	        var newRows;
	        var newColumns;
	        var newMeasures;
	        var newSort;
	        var newFilter;
	        var newDragitem;
	        var newDropZone;
	        var newDropDirection;
	        var newDropTarget;
	        switch (action.type) {
	            case exports.PIVOT_CONFIGURATOR_ACTION.toggleSelection: {
	                if (Array.isArray(action.payload)) ;
	                else {
	                    var payload_1 = action.payload;
	                    if (payload_1.type === 2 || 'aggregator' in payload_1) {
	                        if (state.measureAxes.some(function (s) { return compareAxisWithField(s, payload_1); })) {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.removeMeasureAxis }));
	                        }
	                        else {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.addMeasureAxis }));
	                        }
	                    }
	                    else if (payload_1.type === 'kpi') {
	                        var measures = buildKPIMeasures(payload_1);
	                        if (measures.every(function (m) { return state.measureAxes.some(function (s) { return compareAxisWithField(s, m); }); })) {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.removeMeasureAxes, payload: measures }));
	                        }
	                        else {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.addMeasureAxes, payload: measures.filter(function (m) { return !state.measureAxes.some(function (s) { return compareAxisWithField(s, m); }); }) }));
	                        }
	                    }
	                    else if (action.payload.kpi) {
	                        if (state.measureAxes.some(function (s) { return compareAxisWithField(s, payload_1); })) {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.removeMeasureAxis }));
	                        }
	                        else {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.addMeasureAxis }));
	                        }
	                    }
	                    else {
	                        if (state.columnAxes.some(function (s) { return compareAxisWithField(s, payload_1); })) {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.removeColumnAxis }));
	                        }
	                        else if (state.rowAxes.some(function (s) { return compareAxisWithField(s, payload_1); })) {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.removeRowAxis }));
	                        }
	                        else if ((state.columnAxes && state.columnAxes.length) && (!state.rowAxes || !state.rowAxes.length)) {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.addRowAxis }));
	                        }
	                        else {
	                            return configuratorReducer(state, __assign(__assign({}, action), { type: exports.PIVOT_CONFIGURATOR_ACTION.addColumnAxis }));
	                        }
	                    }
	                }
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.addColumnAxis: {
	                newColumns = __spreadArrays((state.columnAxes || []), [
	                    { name: [action.payload.defaultHierarchy || action.payload.uniqueName] }
	                ]);
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.addColumnAxes: {
	                // TODO;
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.removeColumnAxis: {
	                newColumns = __spreadArrays((state.columnAxes || []).filter(function (s) { return !compareAxisWithField(s, action.payload); }));
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.removeColumnAxes: {
	                // TODO;
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.addRowAxis: {
	                newRows = __spreadArrays((state.rowAxes || []), [
	                    { name: [action.payload.defaultHierarchy || action.payload.uniqueName] }
	                ]);
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.addRowAxes: {
	                // TODO;
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.removeRowAxis: {
	                newRows = __spreadArrays((state.rowAxes || []).filter(function (s) { return !compareAxisWithField(s, action.payload); }));
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.removeRowAxes: {
	                // TODO;
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.addMeasureAxis: {
	                newMeasures = __spreadArrays((state.measureAxes || []), [
	                    { name: [action.payload.defaultHierarchy || action.payload.uniqueName] }
	                ]);
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.removeMeasureAxis: {
	                newMeasures = __spreadArrays((state.measureAxes || []).filter(function (s) { return !compareAxisWithField(s, action.payload); }));
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.addMeasureAxes: {
	                newMeasures = __spreadArrays((state.measureAxes || []), (action.payload || []).map(function (p) { return ({ name: [p.defaultHierarchy || p.uniqueName] }); }));
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.removeMeasureAxes: {
	                newMeasures = __spreadArrays((state.measureAxes || []).filter(function (s) { return !action.payload.some(function (p) { return compareAxisWithField(s, p); }); }));
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.remove: {
	                if (state.columnAxes.some(function (s) { return compareAxes(s, action.payload); })) {
	                    newColumns = __spreadArrays(state.columnAxes.filter(function (s) { return !compareAxes(s, action.payload); }));
	                }
	                if (state.rowAxes.some(function (s) { return compareAxes(s, action.payload); })) {
	                    newRows = __spreadArrays(state.rowAxes.filter(function (s) { return !compareAxes(s, action.payload); }));
	                }
	                if (state.measureAxes.some(function (s) { return compareAxes(s, action.payload); })) {
	                    newMeasures = __spreadArrays(state.measureAxes.filter(function (s) { return !compareAxes(s, action.payload); }));
	                }
	                break;
	            }
	            case exports.PIVOT_CONFIGURATOR_ACTION.setDragItem:
	                newDragitem = action.payload;
	                break;
	            case exports.PIVOT_CONFIGURATOR_ACTION.setDropZone:
	                newDropZone = action.payload;
	                break;
	            case exports.PIVOT_CONFIGURATOR_ACTION.setDropTarget:
	                newDropTarget = action.payload;
	                break;
	            case exports.PIVOT_CONFIGURATOR_ACTION.setDropDirection:
	                newDropDirection = action.payload;
	                break;
	            case exports.PIVOT_CONFIGURATOR_ACTION.drop:
	                if (state.dragItem && state.dropZone) {
	                    var currentColumn = state.columnAxes.find(function (s) { return compareAxes(s, action.payload); });
	                    var currentRow = state.rowAxes.find(function (s) { return compareAxes(s, action.payload); });
	                    var currentMeasure = state.measureAxes.find(function (s) { return compareAxes(s, action.payload); });
	                    var current = void 0;
	                    if (currentColumn) {
	                        current = currentColumn;
	                        newColumns = __spreadArrays(state.columnAxes.filter(function (s) { return !compareAxes(s, action.payload); }));
	                    }
	                    if (currentRow) {
	                        current = currentRow;
	                        newRows = __spreadArrays(state.rowAxes.filter(function (s) { return !compareAxes(s, action.payload); }));
	                    }
	                    if (currentMeasure) {
	                        current = currentMeasure;
	                        newMeasures = __spreadArrays(state.measureAxes.filter(function (s) { return !compareAxes(s, action.payload); }));
	                    }
	                    switch (state.dropZone) {
	                        case 'columnAxes': {
	                            newColumns = newColumns || state.columnAxes.slice();
	                            var insertAtIndex = -1;
	                            if (state.dropTarget && state.dropDirection) {
	                                var offset = state.dropDirection
	                                    ? state.dropDirection === 'before'
	                                        ? 0
	                                        : 1
	                                    : 0;
	                                insertAtIndex = newColumns.findIndex(function (c) { return compareAxes(c, state.dropTarget); }) + offset;
	                            }
	                            if (insertAtIndex >= 0) {
	                                newColumns.splice(insertAtIndex, 0, current);
	                            }
	                            else {
	                                newColumns.push(current);
	                            }
	                            break;
	                        }
	                        case 'rowAxes': {
	                            newRows = newRows || state.rowAxes.slice();
	                            var insertAtIndex = -1;
	                            if (state.dropTarget && state.dropDirection) {
	                                var offset = state.dropDirection
	                                    ? state.dropDirection === 'before'
	                                        ? 0
	                                        : 1
	                                    : 0;
	                                insertAtIndex = newRows.findIndex(function (c) { return compareAxes(c, state.dropTarget); }) + offset;
	                            }
	                            if (insertAtIndex >= 0) {
	                                newRows.splice(insertAtIndex, 0, current);
	                            }
	                            else {
	                                newRows.push(current);
	                            }
	                            break;
	                        }
	                        case 'measureAxes': {
	                            newMeasures = newMeasures || state.measureAxes.slice();
	                            var insertAtIndex = -1;
	                            if (state.dropTarget && state.dropDirection) {
	                                var offset = state.dropDirection
	                                    ? state.dropDirection === 'before'
	                                        ? 0
	                                        : 1
	                                    : 0;
	                                insertAtIndex = newMeasures.findIndex(function (c) { return compareAxes(c, state.dropTarget); }) + offset;
	                            }
	                            if (insertAtIndex >= 0) {
	                                newMeasures.splice(insertAtIndex, 0, current);
	                            }
	                            else {
	                                newMeasures.push(current);
	                            }
	                            break;
	                        }
	                    }
	                }
	                newDragitem = null;
	                newDropZone = null;
	                newDropTarget = null;
	                break;
	            case exports.PIVOT_CONFIGURATOR_ACTION.setSort:
	                newSort = action.payload;
	                break;
	            case exports.PIVOT_CONFIGURATOR_ACTION.setFilter:
	                if (Array.isArray(action.payload)) {
	                    newFilter = action.payload;
	                }
	                else {
	                    newFilter = [action.payload];
	                }
	                break;
	            case exports.PIVOT_CONFIGURATOR_ACTION.addFilter:
	                newFilter = (state.filter || []).slice();
	                if (Array.isArray(action.payload)) {
	                    newFilter.push.apply(newFilter, action.payload);
	                }
	                else {
	                    newFilter.push(action.payload);
	                }
	                break;
	            case exports.PIVOT_CONFIGURATOR_ACTION.changeFilter:
	                newFilter = (Array.isArray(action.payload)
	                    ? (state.filter || []).map(function (f) { return action.payload.some(function (a) { return a.field === f.field; })
	                        ? action.payload.find(function (a) { return a.field === f.field; })
	                        : f; })
	                    : (state.filter || []).map(function (f) { return f.field === action.payload.field
	                        ? action.payload
	                        : f; }));
	                break;
	            case exports.PIVOT_CONFIGURATOR_ACTION.removeFilter:
	                newFilter = (state.filter || []).slice();
	                if (Array.isArray(action.payload)) {
	                    newFilter = newFilter.filter(function (f) { return !action.payload.some(function (p) { return p.field === f.field &&
	                        p.operator === f.operator; }); });
	                }
	                else {
	                    newFilter = newFilter.filter(function (f) { return !(f.field === action.payload.field
	                        && f.operator === action.payload.operator); });
	                }
	                break;
	        }
	        return {
	            dragItem: newDragitem,
	            dropTarget: newDropTarget,
	            dropDirection: newDropDirection,
	            dropZone: newDropZone,
	            columnAxes: newColumns,
	            rowAxes: newRows,
	            measureAxes: newMeasures,
	            filter: newFilter,
	            sort: newSort
	        };
	    };

	    exports.addKPI = addKPI;
	    exports.buildKPIMeasures = buildKPIMeasures;
	    exports.compareAxes = compareAxes;
	    exports.configuratorReducer = configuratorReducer;
	    exports.createAxisDescriptors = createAxisDescriptors;
	    exports.createDataState = createDataState;
	    exports.createDiscoverBody = createDiscoverBody;
	    exports.createRequestBody = createRequestBody;
	    exports.discoverCommands = discoverCommands;
	    exports.fetchData = fetchData;
	    exports.fetchDiscover = fetchDiscover;
	    exports.headersReducer = headersReducer;
	    exports.parseResponse = parseResponse;
	    exports.setFilter = setFilter;
	    exports.setSort = setSort;
	    exports.toColumns = toColumns;
	    exports.toData = toData;
	    exports.toRows = toRows;
	    exports.toTree = toTree;

	    Object.defineProperty(exports, '__esModule', { value: true });

	    return exports;

	})({});

	})();

	}, __webpack_require__(3));

/***/ })

/******/ });