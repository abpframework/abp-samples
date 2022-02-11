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

	__webpack_require__(1688);
	module.exports = __webpack_require__(1688);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

	module.exports = require("../kendo.core");

/***/ }),

/***/ 1688:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(20) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	(function(kendo) {

	    var RangeTreeNode = kendo.Class.extend({
	        init: function Node(level, value, left, right) {
	            this.level = level;
	            this.value = value;
	            this.left = left;
	            this.right = right;
	        }
	    });

	    var NilNode = new (function NIL() { // jshint ignore:line
	        this.left = this;
	        this.right = this;
	        this.level = 0;
	    })();

	    function skew(node) {
	        if (node.left.level === node.level) {
	            var temp = node;
	            node = node.left;
	            temp.left = node.right;
	            node.right = temp;
	        }

	        return node;
	    }

	    function split(node) {
	        if (node.right.right.level === node.level) {
	            var temp = node;
	            node = node.right;
	            temp.right = node.left;
	            node.left = temp;
	            node.level += 1;
	        }

	        return node;
	    }

	    function insert(node, value) {
	        if (node === NilNode) {
	            return new RangeTreeNode(1, value, NilNode, NilNode);
	        } else if (node.value.start > value.start) {
	            node.left = insert(node.left, value);
	        } else {
	            node.right = insert(node.right, value);
	        }

	        return split(skew(node));
	    }

	    function remove(node, value) {
	        if (node === NilNode) {
	            return node;
	        }

	        var diff = node.value.start - value.start;
	        if (diff === 0) {
	            if (node.left !== NilNode && node.right !== NilNode) {
	                var heir = node.left;

	                while (heir.right !== NilNode) {
	                    heir = heir.right;
	                }

	                node.value = heir.value;
	                node.left = remove(node.left, node.value);
	            } else if (node.left === NilNode) {
	                node = node.right;
	            } else {
	                node = node.left;
	            }
	        } else if (diff > 0) {
	            node.left = remove(node.left, value);
	        } else {
	            node.right = remove(node.right, value);
	        }

	        if (node.left.level < (node.level - 1) || node.right.level < (node.level - 1)) {
	            node.level -= 1;
	            if (node.right.level > node.level) {
	                node.right.level = node.level;
	            }

	            node = skew(node);
	            node.right = skew(node.right);
	            node.right.right = skew(node.right.right);
	            node = split(node);
	            node.right = split(node.right);
	        }

	        return node;
	    }

	    var Range = kendo.Class.extend({
	        init: function ValueRange(start, end, value) {
	            this.start = start;
	            this.end = end;
	            this.value = value;
	        },

	        intersects: function(range) {
	            return range.start <= this.end && range.end >= this.start;
	        },

	        clone: function() {
	            return new Range(this.start, this.end, this.value);
	        }
	    });

	    var RangeTree = kendo.Class.extend({
	        init: function() {
	            this.root = NilNode;
	        },

	        insert: function(value) {
	            this.root = insert(this.root, value);
	        },

	        remove: function(value) {
	            this.root = remove(this.root, value);
	        },

	        findrange: function(value) {
	            var node = this.root;

	            while (node != NilNode) {
	                if (value < node.value.start) {
	                    node = node.left;
	                } else if (value > node.value.end) {
	                    node = node.right;
	                } else {
	                    return node.value;
	                }
	            }

	            return null;
	        },

	        values: function() {
	            var result = [];
	            values(this.root, result);
	            return result;
	        },

	        intersecting: function(start, end) {
	            var ranges = [];
	            intersecting(this.root, new Range(start, end), ranges);
	            return ranges;
	        },

	        map: function(callback) {
	            var tree = new RangeTree();
	            map(tree, this.root, callback);
	            return tree;
	        },

	        clone: function() {
	            return this.map(function(value) {
	                return value.clone();
	            });
	        },

	        first: function() {
	            var first = this.root;
	            while(first.left != NilNode) {
	                first = first.left;
	            }

	            return first;
	        },

	        last: function() {
	            var last = this.root;
	            while(last.right != NilNode) {
	                last = last.right;
	            }

	            return last;
	        }
	    });

	    function values(node, result) {
	        if (node === NilNode) {
	            return;
	        }

	        values(node.left, result);
	        result.push(node.value);
	        values(node.right, result);
	    }

	    function intersecting(node, range, ranges) {
	        if (node === NilNode) {
	            return;
	        }

	        var value = node.value;

	        if (range.start < value.start) {
	            intersecting(node.left, range, ranges);
	        }

	        if (value.intersects(range)) {
	            ranges.push(value);
	        }

	        if (range.end > value.end) {
	            intersecting(node.right, range, ranges);
	        }
	    }

	    function map(tree, root, callback) {
	        if (root === NilNode) {
	            return;
	        }

	        map(tree, root.left, callback);
	        tree.insert(callback(root.value));
	        map(tree, root.right, callback);
	    }

	    var RangeList = kendo.Class.extend({
	        init: function(start, end, value) {
	            if (end === undefined) {
	                this.tree = start;
	            } else {
	                this.tree = new RangeTree();
	                this.tree.insert(new Range(start, end, value));
	            }
	        },

	        values: function() {
	            return this.tree.values();
	        },

	        map: function(callback) {
	            return new RangeList(this.tree.map(callback));
	        },

	        intersecting: function(start, end) {
	            return this.tree.intersecting(start, end);
	        },

	        first: function() {
	            return this.tree.first().value;
	        },

	        last: function() {
	            return this.tree.last().value;
	        },

	        insert: function(start, end, value) {
	            return this.tree.insert(new Range(start, end, value));
	        },

	        value: function(start, end, value) {
	            if (value === undefined) {
	                if (end === undefined) {
	                    end = start;
	                }
	                return this.intersecting(start, end)[0].value;
	            }

	            var ranges = this.tree.intersecting(start - 1, end + 1);

	            if (ranges.length) {
	                var firstRange = ranges[0], lastRange = ranges[ranges.length - 1];

	                if (firstRange.end < start) {
	                    if (firstRange.value === value) {
	                        start = firstRange.start;
	                    } else {
	                        ranges.shift();
	                    }
	                }

	                if (lastRange.start > end) {
	                    if (lastRange.value === value) {
	                        end = lastRange.end;
	                    } else {
	                        ranges.pop();
	                    }
	                }

	                for (var i = 0, length = ranges.length; i < length; i++) {
	                    var range = ranges[i];
	                    var rangeValue = range.value;
	                    var rangeStart = range.start;
	                    var rangeEnd = range.end;

	                    this.tree.remove(range);

	                    if (rangeStart < start) {
	                        if (rangeValue !== value) {
	                            this.insert(rangeStart, start - 1, rangeValue);
	                        } else {
	                            start = rangeStart;
	                        }
	                    }

	                    if (rangeEnd > end) {
	                        if (rangeValue !== value) {
	                            this.insert(end + 1, rangeEnd, rangeValue);
	                        } else {
	                            end = rangeEnd;
	                        }
	                    }
	                }
	            }

	            this.insert(start, end, value);
	        },

	        expandedValues: function(start, end) {
	            var ranges = this.intersecting(start, end);
	            var result = [];

	            var rangeIndex = 0;

	            for (var i = start; i <= end; i++) {
	                if (ranges[rangeIndex].end < i) {
	                    rangeIndex ++;
	                }

	                result.push({ index: i - start, value: ranges[rangeIndex].value });
	            }

	            return result;
	        },

	        sortedIndices: function(start, end, valueComparer, indices) {
	            var result = this.expandedValues(start, end);

	            var comparer = function(a, b) {
	                if (a.value === b.value) {
	                    return a.index - b.index;
	                }

	                return valueComparer(a.value, b.value);
	            };

	            if (indices) {
	                comparer = function(a, b) {
	                    var x = indices[a.index];
	                    var y = indices[b.index];

	                    if (x.value === y.value) {
	                        return valueComparer(a.value, b.value);
	                    }

	                    return a.index - b.index;
	                };
	            }

	            result.sort(comparer);

	            return result;
	        },

	        sort: function(start, end, indices) {
	            if (this.intersecting(start, end).length === 1) {
	                return;
	            }

	            var values = this.expandedValues(start, end);

	            for (var i = 0, len = indices.length; i < len; i++) {
	                this.value(i + start, i + start, values[indices[i].index].value);
	            }
	        },

	        copy: function(sourceStart, sourceEnd, targetStart) {
	            var values = this.intersecting(sourceStart, sourceEnd);

	            var start = targetStart;
	            var end;

	            for (var i = 0, len = values.length; i < len; i++) {
	                var rangeStart = values[i].start;

	                if (rangeStart < sourceStart) {
	                    rangeStart = sourceStart;
	                }

	                var rangeEnd = values[i].end;

	                if (rangeEnd > sourceEnd) {
	                    rangeEnd = sourceEnd;
	                }

	                end = start + (rangeEnd - rangeStart);

	                this.value(start, end, values[i].value);

	                start = ++end;
	            }
	        },

	        iterator: function(start, end) {
	            return new Iterator(start, end, this.intersecting(start, end));
	        },

	        getState: function() {
	            return this.tree.clone();
	        },

	        setState: function(state) {
	            this.tree = state.clone();
	        },

	        toJSON: function() {
	            return this.values();
	        },

	        fromJSON: function(values) {
	            values.forEach(function(v){
	                this.value(v.start, v.end, v.value);
	            }, this);
	        }
	    });

	    var Iterator = kendo.Class.extend({
	        init: function(start, end, ranges) {
	            this.start = start;
	            this.end = end;
	            this.index = 0;
	            this.ranges = ranges;
	        },

	        unique: function() {
	            return this.ranges.map(function(range) {
	                return range.value;
	            });
	        },

	        at: function(index) {
	            while (this.ranges[this.index] && this.ranges[this.index].end < index) {
	                this.index ++;
	            }

	            return this.ranges[this.index] && this.ranges[this.index].value;
	        },

	        forEach: function(callback) {
	            for (var i = this.start; i <= this.end; i++) {
	                callback(this.at(i), i);
	            }

	            this.index = 0;
	        }
	    });

	    var SparseRangeList = RangeList.extend({
	        init: function(start, end, value) {
	            this.tree = new RangeTree();
	            this.range = new Range(start, end, value);
	        },

	        intersecting: function(start, end) {
	            var ranges = this.tree.intersecting(start, end);
	            var result = [];
	            var range;

	            if (!ranges.length) {
	                return [this.range];
	            }

	            for (var i = 0, len = ranges.length; i < len; i++) {
	                range = ranges[i];
	                if (range.start > start) {
	                    result.push(new Range(start, range.start - 1, this.range.value));
	                }

	                result.push(range);
	                start = range.end + 1;
	            }

	            if (range.end < end) {
	                result.push(new Range(range.end + 1, end, this.range.value));
	            }

	            return result;
	        },

	        insert: function(start, end, value) {
	            if (value !== this.range.value) {
	                this.tree.insert(new Range(start, end, value));
	            }
	        },

	        lastRangeStart: function() {
	            var node = this.tree.root;

	            if (node === NilNode) {
	                return this.range.start;
	            }

	            while(node.right !== NilNode) {
	                node = node.right;
	            }

	            return node.value.end + 1;
	        }
	    });


	    kendo.spreadsheet.RangeTree = RangeTree;
	    kendo.spreadsheet.RangeList = RangeList;
	    kendo.spreadsheet.SparseRangeList = SparseRangeList;
	    kendo.spreadsheet.ValueRange = Range;
	})(kendo);
	}, __webpack_require__(3));


/***/ })

/******/ });