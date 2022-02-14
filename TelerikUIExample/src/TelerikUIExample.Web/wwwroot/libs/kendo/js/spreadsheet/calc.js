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

	__webpack_require__(1653);
	module.exports = __webpack_require__(1653);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1648:
/***/ (function(module, exports) {

	module.exports = require("./runtime");

/***/ }),

/***/ 1653:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// -*- fill-column: 100 -*-

	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1648) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){
	    "use strict";

	    // WARNING: removing the following jshint declaration and turning
	    // == into === to make JSHint happy will break functionality.
	    /* jshint eqnull:true, newcap:false, laxbreak:true, shadow:true, -W054 */
	    /* jshint latedef: false */

	    var util = kendo.util;
	    var spreadsheet = kendo.spreadsheet;
	    var Ref = spreadsheet.Ref;
	    var RangeRef = spreadsheet.RangeRef;
	    var CellRef = spreadsheet.CellRef;
	    var NameRef = spreadsheet.NameRef;
	    var exports = spreadsheet.calc;
	    var runtime = exports.runtime;

	    // Excel formula parser and compiler to JS.
	    // some code adapted from http://lisperator.net/pltut/

	    // these two will hold the same operators, except that when the comma is used as decimal
	    // separator, the union operator must be the semicolon (;) instead of comma.
	    var OPERATORS_STANDARD = Object.create(null);
	    var OPERATORS_COMMA = Object.create(null);

	    (function(ops){
	        ops.forEach(function(cls, i){
	            cls.forEach(function(op){
	                OPERATORS_STANDARD[op] = ops.length - i;
	                OPERATORS_COMMA[op == "," ? ";" : op] = ops.length - i;
	            });
	        });
	    })([
	        [ ":" ],
	        [ " " ],
	        [ "," ],
	        [ "%" ],
	        [ "^" ],
	        [ "*", "/" ],
	        [ "+", "-" ],
	        [ "&" ],
	        [ "=", "<", ">", "<=", ">=", "<>" ]
	    ]);

	    var OPERATORS = OPERATORS_STANDARD;

	    var SEPARATORS = {
	        DEC: ".",
	        ARG: ",",
	        COL: ","
	    };

	    function setDecimalSeparator(sep) {
	        SEPARATORS.DEC = sep;
	        SEPARATORS.ARG = sep == "," ? ";" : ",";
	        SEPARATORS.COL = sep == "," ? "\\" : ",";
	        OPERATORS = sep == "," ? OPERATORS_COMMA : OPERATORS_STANDARD;
	    }

	    exports.withDecimalSeparator = function(sep, f) {
	        if (SEPARATORS.DEC == sep) {
	            return f();
	        }
	        var save = SEPARATORS.DEC;
	        setDecimalSeparator(sep);
	        try {
	            return f();
	        } finally {
	            setDecimalSeparator(save);
	        }
	    };

	    exports._separators = SEPARATORS;

	    var ParseError = kendo.Class.extend({
	        init: function ParseError(message, pos) {
	            this.message = message;
	            this.pos = pos;
	        },
	        toString: function() {
	            return this.message;
	        }
	    });

	    var TRUE = { type: "bool", value: true };
	    var FALSE = { type: "bool", value: false };

	    function getcol(str) {
	        str = str.toUpperCase();
	        for (var col = 0, i = 0; i < str.length; ++i) {
	            col = col * 26 + str.charCodeAt(i) - 64;
	        }
	        return col - 1;
	    }

	    function getrow(str) {
	        return parseInt(str, 10) - 1;
	    }

	    function parseReference(name, noThrow) {
	        if (name.toLowerCase() == "#sheet") {
	            return spreadsheet.SHEETREF;
	        }
	        OUT: {
	            // this is redundant, but let's keep it fast for the most
	            // common case — A1.  If this fails, we'll try to employ the
	            // whole tokenizer.
	            var m;
	            if ((m = /^(\$)?([a-z]+)(\$)?(\d+)$/i.exec(name))) {
	                var row = getrow(m[4]), col = getcol(m[2]);
	                if (row < 0x100000 && col < 0x4000) {
	                    return new CellRef(getrow(m[4]), getcol(m[2]));
	                }
	                // no NameRef-s from this function
	                break OUT;      // jshint ignore:line
	            }
	            var stream = TokenStream(name, {});
	            var a = [];
	            while (true) {
	                var ref = stream.next();
	                if (ref instanceof CellRef) {
	                    // this function always makes absolute references
	                    ref.rel = 0;
	                } else if (ref instanceof RangeRef) {
	                    ref.topLeft.rel = 0;
	                    ref.bottomRight.rel = 0;
	                } else {
	                    break OUT;  // jshint ignore:line
	                }
	                a.push(ref);
	                if (stream.eof()) {
	                    break;
	                }
	                if (!stream.is("op", SEPARATORS.ARG)) {
	                    break OUT;  // jshint ignore:line
	                }
	                stream.next();
	            }
	            return a.length == 1 ? a[0] : new spreadsheet.UnionRef(a);
	        }
	        if (!noThrow) {
	            throw new Error("Cannot parse reference: " + name);
	        }
	    }

	    function parseFormula(sheet, row, col, input) {
	        var refs = [];
	        input = TokenStream(input, { row: row, col: col });
	        var is = input.is;

	        return {
	            type: "exp",
	            ast: parseExpression(true),
	            refs: refs,
	            sheet: sheet,
	            row: row,
	            col: col
	        };

	        function addReference(ref) {
	            ref.index = refs.length;
	            refs.push(ref);
	            return ref;
	        }

	        function skip(type, value, allowEOF) {
	            if (is(type, value)) {
	                return input.next();
	            } else {
	                var tok = input.peek();
	                if (tok) {
	                    input.croak("Expected " + type + " «" + value + "» but found " + tok.type + " «" + tok.value + "»");
	                } else if (!allowEOF) {
	                    input.croak("Expected " + type + " «" + value + "»");
	                }
	            }
	        }

	        function parseExpression(commas) {
	            return maybeBinary(maybeIntersect(parseAtom()), 0, commas);
	        }

	        function parseSymbol(tok) {
	            if (tok.upper == "TRUE" || tok.upper == "FALSE") {
	                return tok.upper == "TRUE" ? TRUE : FALSE;
	            }
	            return addReference(new NameRef(tok.value));
	        }

	        function parseFuncall() {
	            var fname = input.next();
	            fname = fname.value;
	            skip("punc", "(");
	            var args = [];
	            while (1) {
	                if (is("punc", ")")) {
	                    break;
	                }
	                if (is("op", SEPARATORS.ARG)) {
	                    args.push({ type: "null" });
	                    input.next();
	                    continue;
	                }
	                args.push(parseExpression(false));
	                if (input.eof() || is("punc", ")")) {
	                    break;
	                }
	                skip("op", SEPARATORS.ARG);
	            }
	            skip("punc", ")", true);
	            return {
	                type: "func",
	                func: fname,
	                args: args
	            };
	        }

	        function fixReference(ref) {
	            if (!ref.hasSheet()) {
	                ref.setSheet(sheet);
	            }
	            return addReference(ref);
	        }

	        function parseAtom() {
	            var exp;
	            if (is("ref")) {
	                exp = fixReference(input.next());
	            }
	            else if (is("func")) {
	                exp = parseFuncall();
	            }
	            else if (is("punc", "(")) {
	                input.next();
	                exp = parseExpression(true);
	                skip("punc", ")", true);
	            }
	            else if (is("punc", "{")) {
	                input.next();
	                exp = parseArray();
	                skip("punc", "}", true);
	            }
	            else if (is("num") || is("str") || is("error")) {
	                exp = input.next();
	            }
	            else if (is("sym")) {
	                exp = parseSymbol(input.next());
	            }
	            else if (is("op", "+") || is("op", "-")) {
	                exp = {
	                    type: "prefix",
	                    op: input.next().value,
	                    exp: parseAtom()
	                };
	            }
	            else if (!input.peek()) {
	                input.croak("Incomplete expression");
	            }
	            else if (is("punc", "[")) {
	                input.croak("External reference not supported");
	            }
	            else {
	                input.croak("Parse error");
	            }
	            return maybePercent(exp);
	        }

	        function parseArray() {
	            var row = [], value = [ row ], first = true;
	            while (!input.eof() && !is("punc", "}")) {
	                if (first) {
	                    first = false;
	                } else if (is(null, ";")) {
	                    value.push(row = []);
	                    input.next();
	                } else {
	                    skip(null, SEPARATORS.COL);
	                }
	                row.push(parseExpression(false));
	            }
	            return {
	                type: "matrix",
	                value: value
	            };
	        }

	        function maybeIntersect(exp) {
	            if (is("punc", "(") || is("ref") || is("num") || is("func")) {
	                return {
	                    type: "binary",
	                    op: " ",
	                    left: exp,
	                    right: parseExpression(false)
	                };
	            } else {
	                return exp;
	            }
	        }

	        function maybePercent(exp) {
	            if (is("op", "%")) {
	                input.next();
	                return maybePercent({
	                    type: "postfix",
	                    op: "%",
	                    exp: exp
	                });
	            } else {
	                return exp;
	            }
	        }

	        function maybeBinary(left, my_prec, commas) {
	            var tok = is("op");
	            if (tok && (commas || tok.value != SEPARATORS.ARG)) {
	                var his_prec = OPERATORS[tok.value];
	                if (his_prec > my_prec) {
	                    input.next();
	                    var right = maybeBinary(parseAtom(), his_prec, commas);
	                    return maybeBinary({
	                        type: "binary",
	                        op: tok.value == ";" ? "," : tok.value, // translate union back to comma
	                        left: left,
	                        right: right
	                    }, my_prec, commas);
	                }
	            }
	            return left;
	        }
	    }

	    function parseNameDefinition(name, def) {
	        var nameRef = parseFormula(null, 0, 0, name);
	        if (!(nameRef.ast instanceof NameRef)) {
	            throw new ParseError("Invalid name: " + name);
	        }
	        nameRef = nameRef.ast;

	        if (!(def instanceof Ref)) {
	            var defAST = parseFormula(nameRef.sheet, 0, 0, def);
	            if (defAST.ast instanceof Ref) {
	                def = defAST.ast;   // single reference
	            } else if (/^(?:str|num|bool|error)$/.test(defAST.ast.type)) {
	                def = defAST.ast.value; // constant
	            } else {
	                def = makeFormula(defAST); // formula
	            }
	        }

	        return {
	            name: nameRef,
	            value: def
	        };
	    }

	    var makeClosure = (function(cache){
	        return function(code) {
	            var f = cache[code];
	            if (!f) {
	                f = cache[code] = new Function("'use strict';return(" + code + ")")();
	            }
	            return f;
	        };
	    })(Object.create(null));

	    function makePrinter(exp) {
	        return makeClosure("function(row, col, mod){return(" + print(exp.ast, exp, 0) + ")}");
	        function print(node, parent, prec) { // jshint ignore:line, because you are stupid.
	            switch (node.type) {
	              case "num":
	                return "(kendo.spreadsheet.calc._separators.DEC == '.' ? "
	                    +  JSON.stringify(JSON.stringify(node.value)) + " : "
	                    +  JSON.stringify(JSON.stringify(node.value))
	                    +  ".replace('.' , kendo.spreadsheet.calc._separators.DEC))";
	              case "bool":
	                return JSON.stringify(node.value);
	              case "error":
	                return JSON.stringify("#" + node.value);
	              case "str":
	                return JSON.stringify(JSON.stringify(node.value));
	              case "ref":
	                return "this.refs[" + node.index + "].print(row, col, mod)";
	              case "prefix":
	                return withParens(function(){
	                    return JSON.stringify(node.op) + " + " + print(node.exp, node, OPERATORS[node.op]);
	                });
	              case "postfix":
	                return withParens(function(){
	                    return print(node.exp, node, OPERATORS[node.op]) + " + " + JSON.stringify(node.op);
	                });
	              case "binary":
	                return withParens(function(){
	                    var left = parenthesize(
	                        print(node.left, node, OPERATORS[node.op]),
	                        node.left instanceof NameRef && node.op == ":"
	                    );
	                    var right = parenthesize(
	                        print(node.right, node, OPERATORS[node.op]),
	                        node.right instanceof NameRef && node.op == ":"
	                    );
	                    if (/^[,;]/.test(node.op)) {
	                        return left + " + kendo.spreadsheet.calc._separators.ARG + " + right;
	                    } else {
	                        return left + " + " + JSON.stringify(node.op) + " + " + right;
	                    }
	                });
	              case "func":
	                return JSON.stringify(node.func + "(") + " + "
	                    + (node.args.length > 0
	                       ? node.args.map(function(arg){
	                           return print(arg, node, 0);
	                       }).join(" + kendo.spreadsheet.calc._separators.ARG + ' ' + ")
	                       : "''")
	                    + " + ')'";
	              case "matrix":
	                return "'{ ' + " + node.value.map(function(el){
	                    return el.map(function(el){
	                        return print(el, node, 0);
	                    }).join(" + kendo.spreadsheet.calc._separators.COL + ' ' + ");
	                }).join(" + '; ' + ") + "+ ' }'";
	              case "null":
	                return "''";
	            }
	            throw new Error("Cannot make printer for node " + node.type);

	            function withParens(f) {
	                var op = node.op;
	                var needParens = (OPERATORS[op] < prec
	                                  || (!prec && op == ",")
	                                  || (parent.type == "prefix" && prec == OPERATORS[op] && parent.op == "-")
	                                  || (parent.type == "binary" && prec == OPERATORS[op] && node === parent.right));
	                return parenthesize(f(), needParens);
	            }
	        }
	        function parenthesize(code, cond) {
	            return cond ? "'(' + " + code + " + ')'" : code;
	        }
	    }

	    function toCPS(ast, k) {
	        var GENSYM = 0;
	        return cps(ast, k);

	        function cps(node, k){
	            switch (node.type) {
	              case "ref"     : return cpsRef(node, k);
	              case "num"     :
	              case "str"     :
	              case "null"    :
	              case "error"   :
	              case "bool"    : return cpsAtom(node, k);
	              case "prefix"  :
	              case "postfix" : return cpsUnary(node, k);
	              case "binary"  : return cpsBinary(node, k);
	              case "func"    : return cpsFunc(node, k);
	              case "lambda"  : return cpsLambda(node, k);
	              case "matrix"  : return cpsMatrix(node.value, k, true);
	            }
	            throw new Error("Cannot CPS " + node.type);
	        }

	        function cpsRef(node, k) {
	            return node.ref == "name" ? cpsNameRef(node, k) : cpsAtom(node, k);
	        }

	        function cpsAtom(node, k) {
	            return k(node);
	        }

	        function cpsNameRef(node, k) {
	            return {
	                type: "func",
	                func: ",getname",
	                args: [ makeContinuation(k), node ]
	            };
	        }

	        function cpsUnary(node, k) {
	            return cps({
	                type: "func",
	                func: "unary" + node.op,
	                args: [ node.exp ]
	            }, k);
	        }

	        function cpsBinary(node, k) {
	            return cps({
	                type: "func",
	                func: "binary" + node.op,
	                args: [ node.left, node.right ]
	            }, k);
	        }

	        function cpsIf(co, th, el, k) {
	            return cps(co, function(co){
	                // compile THEN and ELSE into a lambda which takes a callback to invoke with the
	                // result of the branches, and the IF itself will become a call the internal "if"
	                // function.
	                var rest = makeContinuation(k);
	                var thenK = gensym("T");
	                var elseK = gensym("E");
	                return {
	                    type: "func",
	                    func: "if",
	                    args: [
	                        rest,
	                        co, // condition
	                        { // then
	                            type: "lambda",
	                            vars: [ thenK ],
	                            body: cps(th || TRUE, function(th){
	                                return {
	                                    type: "call",
	                                    func: { type: "var", name: thenK },
	                                    args: [ th ]
	                                };
	                            })
	                        },
	                        { // else
	                            type: "lambda",
	                            vars: [ elseK ],
	                            body: cps(el || FALSE, function(el){
	                                return {
	                                    type: "call",
	                                    func: { type: "var", name: elseK },
	                                    args: [ el ]
	                                };
	                            })
	                        }
	                    ]
	                };
	            });
	        }

	        function cpsAnd(args, k) {
	            if (args.length === 0) {
	                return cpsAtom(TRUE, k);
	            }
	            return cps({
	                type: "func",
	                func: "IF",
	                args: [
	                    // first item
	                    args[0],
	                    // if true, apply AND for the rest
	                    {
	                        type: "func",
	                        func: "AND",
	                        args: args.slice(1)
	                    },
	                    // otherwise return false
	                    FALSE
	                ]
	            }, k);
	        }

	        function cpsOr(args, k) {
	            if (args.length === 0) {
	                return cpsAtom(FALSE, k);
	            }
	            return cps({
	                type: "func",
	                func: "IF",
	                args: [
	                    // first item
	                    args[0],
	                    // if true, return true
	                    TRUE,
	                    // otherwise apply OR for the rest
	                    {
	                        type: "func",
	                        func: "OR",
	                        args: args.slice(1)
	                    }
	                ]
	            }, k);
	        }

	        function cpsFunc(node, k) {
	            switch (node.func.toLowerCase()) {
	              case "if":
	                return cpsIf(node.args[0], node.args[1], node.args[2], k);
	              case "and":
	                return cpsAnd(node.args, k);
	              case "or":
	                return cpsOr(node.args, k);
	              case "true":
	                return k(TRUE);
	              case "false":
	                return k(FALSE);
	            }
	            // actual function
	            return (function loop(args, i){
	                if (i == node.args.length) {
	                    return {
	                        type : "func",
	                        func : node.func,
	                        args : args
	                    };
	                }
	                else {
	                    return cps(node.args[i], function(value){
	                        return loop(args.concat([ value ]), i + 1);
	                    });
	                }
	            })([ makeContinuation(k) ], 0);
	        }

	        function cpsLambda(node, k) {
	            var cont = gensym("K");
	            var body = cps(node.body, function(body){
	                return { type: "call",
	                         func: { type: "var", value: cont },
	                         args: [ body ] };
	            });
	            return k({ type: "lambda",
	                       vars: [ cont ].concat(node.vars),
	                       body: body });
	        }

	        function cpsMatrix(elements, k, isMatrix) {
	            var a = [];
	            return (function loop(i){
	                if (i == elements.length) {
	                    return k({
	                        type: "matrix",
	                        value: a
	                    });
	                } else {
	                    return (isMatrix ? cpsMatrix : cps)(elements[i], function(val){
	                        a[i] = val;
	                        return loop(i + 1);
	                    });
	                }
	            })(0);
	        }

	        function makeContinuation(k) {
	            var cont = gensym("R");
	            return {
	                type : "lambda",
	                vars : [ cont ],
	                body : k({ type: "var", name: cont })
	            };
	        }

	        function gensym(name) {
	            if (!name) {
	                name = "";
	            }
	            name = "_" + name;
	            return name + (++GENSYM);
	        }
	    }

	    var FORMULA_CACHE = Object.create(null);

	    function makeFormula(exp) {
	        var printer = makePrinter(exp);
	        var hash = printer.call(exp); // needs .refs
	        var formula = FORMULA_CACHE[hash];
	        if (formula) {
	            // we need to clone because formulas cache the result; even if the formula is the same,
	            // its value will depend on its location, hence we need different objects.  Still, using
	            // this cache is a good idea because we'll reuse the same refs array, handler and
	            // printer instead of allocating new ones (and we skip compiling it).
	            return formula.clone(exp.sheet, exp.row, exp.col);
	        }
	        var code = js(toCPS(exp.ast, function(ret){
	            return {
	                type: "return",
	                value: ret
	            };
	        }));

	        code = [
	            "function(){",
	            "var context = this, refs = context.formula.absrefs",
	            code,
	            "}"
	        ].join(";\n");

	        formula = new runtime.Formula(exp.refs, makeClosure(code), printer, exp.sheet, exp.row, exp.col);
	        FORMULA_CACHE[hash] = formula.clone(exp.sheet, exp.row, exp.col);
	        return formula;

	        function js(node){
	            var type = node.type;
	            if (type == "num") {
	                return node.value + "";
	            }
	            else if (type == "str") {
	                return JSON.stringify(node.value);
	            }
	            else if (type == "error") {
	                return "context.error(" + JSON.stringify(node.value) + ")";
	            }
	            else if (type == "return") {
	                return "context.resolve(" + js(node.value) + ")";
	            }
	            else if (type == "func") {
	                return "context.func(" + JSON.stringify(node.func) + ", "
	                    + js(node.args[0]) + ", " // the callback
	                    + jsArray(node.args.slice(1)) // the arguments
	                    + ")";
	            }
	            else if (type == "call") {
	                return js(node.func) + "(" + node.args.map(js).join(", ") + ")";
	            }
	            else if (type == "ref") {
	                return "refs[" + node.index + "]";
	            }
	            else if (type == "bool") {
	                return "" + node.value;
	            }
	            else if (type == "if") {
	                return "(context.bool(" + js(node.co) + ") ? " + js(node.th) + " : " + js(node.el) + ")";
	            }
	            else if (type == "lambda") {
	                return "(function("
	                    + node.vars.join(", ")
	                    + "){ return(" + js(node.body) + ") })";
	            }
	            else if (type == "var") {
	                return node.name;
	            }
	            else if (type == "matrix") {
	                return jsArray(node.value);
	            }
	            else if (type == "null") {
	                return "null";
	            }
	            else {
	                throw new Error("Cannot compile expression " + type);
	            }
	        }

	        function jsArray(a) {
	            return "[ " + a.map(js).join(", ") + " ]";
	        }
	    }

	    function identity(x) {
	        return x;
	    }

	    function TokenStream(input, options) {
	        input = RawTokenStream(InputStream(input), options);
	        var ahead = input.ahead;
	        var skip = input.skip;
	        var token = null;
	        var fixCell = options.row != null && options.col != null
	            ? function(cell) {
	                if (cell.rel & 1) {
	                    cell.col -= options.col;
	                }
	                if (cell.rel & 2) {
	                    cell.row -= options.row;
	                }
	                return cell;
	            }
	            : identity;

	        var addPos = options.forEditor
	            ? function(thing, startToken, endToken) {
	                thing.begin = startToken.begin;
	                thing.end = endToken.end;
	                return thing;
	            }
	            : identity;

	        return {
	            peek  : peek,
	            next  : next,
	            croak : input.croak,
	            eof   : input.eof,
	            is    : is
	        };

	        function is(type, value) {
	            var tok = peek();
	            return tok != null
	                && (type == null || tok.type === type)
	                && (value == null || tok.value === value)
	                ? tok : null;
	        }

	        function peek() {
	            if (token == null) {
	                token = readNext();
	            }
	            return token;
	        }

	        function next() {
	            if (token != null) {
	                var tmp = token;
	                token = null;
	                return tmp;
	            }
	            return readNext();
	        }

	        function readNext() {
	            var ret;
	            var t = input.peek();
	            if (t) {
	                if (t.type == "sym" || t.type == "rc" || t.type == "num") {
	                    ret =  ahead(8, refRange3D)
	                        || ahead(6, refCell3D)
	                        || ahead(6, refSheetRange)
	                        || ahead(4, refSheetCell)
	                        || ahead(4, refRange)
	                        || ahead(2, refCell)
	                        || ahead(2, funcall);
	                }
	                if (!ret) {
	                    ret = input.next();
	                }
	            }
	            return ret;
	        }

	        function toCell(tok, isFirst) {
	            if (tok.type == "rc") {
	                // RC notation is read properly without knowing where
	                // we are, so no need to fixCell on this one.
	                // However, if only absolute refs were asked for (from
	                // i.e. parseReference) I feel it's alright to yell
	                // about it here.
	                if (tok.rel && !options.forEditor && (options.row == null || options.col == null)) {
	                    input.croak("Cannot read relative cell in RC notation");
	                }
	                return new CellRef(tok.row, tok.col, tok.rel);
	            }
	            if (tok.type == "num") {
	                if (tok.value <= 1048577) {
	                    // whole row
	                    return fixCell(new CellRef(
	                        getrow(tok.value),
	                        isFirst ? -Infinity : +Infinity,
	                        2
	                    ));
	                } else {
	                    return null;
	                }
	            }
	            // otherwise it's "sym".  The OOXML spec (SpreadsheetML
	            // 18.2.5) defines the maximum value to be interpreted as
	            // a cell reference to be XFD1048576.
	            var name = tok.value;
	            var m = /^(\$)?([a-z]+)(\$)?(\d+)$/i.exec(name);
	            if (m) {
	                var row = getrow(m[4]), col = getcol(m[2]);
	                if (row <= 1048576 && col <= 16383) {
	                    return fixCell(new CellRef(
	                        getrow(m[4]),
	                        getcol(m[2]),
	                        (m[1] ? 0 : 1) | (m[3] ? 0 : 2)
	                    ));
	                } else {
	                    return null;
	                }
	            }
	            var abs = name.charAt(0) == "$";
	            if (abs) {
	                name = name.substr(1);
	            }
	            if (/^\d+$/.test(name)) {
	                var row = getrow(name);
	                if (row <= 1048576) {
	                    return fixCell(new CellRef(
	                        getrow(name),
	                        isFirst ? -Infinity : +Infinity,
	                        (abs ? 0 : 2)
	                    ));
	                }
	            } else {
	                var col = getcol(name);
	                if (col <= 16383) {
	                    return fixCell(new CellRef(
	                        isFirst ? -Infinity : +Infinity,
	                        getcol(name),
	                        (abs ? 0 : 1)
	                    ));
	                }
	            }
	        }

	        // Sheet1(a) :(b) Sheet2(c) !(d) A1(e) :(f) C3(g) not followed by paren (h)
	        function refRange3D(a, b, c, d, e, f, g, h) {
	            if (a.type == "sym" &&
	                b.type == "op" && b.value == ":" &&
	                c.type == "sym" &&
	                d.type == "punc" && d.value == "!" &&
	                (e.type == "sym" || e.type == "rc" || (e.type == "num" && e.value == e.value|0)) &&
	                f.type == "op" && f.value == ":" &&
	                (g.type == "sym" || g.type == "rc" || (g.type == "num" && g.value == g.value|0)) &&
	                g.type == e.type &&
	                !(h.type == "punc" && h.value == "(" && !g.space))
	            {
	                var tl = toCell(e, true), br = toCell(g, false);
	                if (tl && br) {
	                    // skip them except the last one, we only wanted to
	                    // ensure it's not paren.
	                    skip(7);
	                    return addPos(new RangeRef(
	                        tl.setSheet(a.value, true),
	                        br.setSheet(c.value, true)
	                    ).setSheet(a.value, true), a, g);
	                }
	            }
	        }

	        // Sheet1(a) :(b) Sheet2(c) !(d) A1(e) not followed by paren (f)
	        function refCell3D(a, b, c, d, e, f) {
	            if (a.type == "sym" &&
	                b.type == "op" && b.value == ":" &&
	                c.type == "sym" &&
	                d.type == "punc" && d.value == "!" &&
	                (e.type == "sym" || e.type == "rc" || (e.type == "num" && e.value == e.value|0)) &&
	                !(f.type == "punc" && f.value == "(" && !e.space))
	            {
	                var tl = toCell(e);
	                if (tl) {
	                    skip(5);
	                    var br = tl.clone();
	                    return addPos(new RangeRef(
	                        tl.setSheet(a.value, true),
	                        br.setSheet(c.value, true)
	                    ).setSheet(a.value, true), a, e);
	                }
	            }
	        }

	        // Sheet1(a) !(b) A1(c) :(d) C3(e) not followed by paren (f)
	        function refSheetRange(a, b, c, d, e, f) {
	            if (a.type == "sym" &&
	                b.type == "punc" && b.value == "!" &&
	                (c.type == "sym" || c.type == "rc" || (c.type == "num" && c.value == c.value|0)) &&
	                d.type == "op" && d.value == ":" &&
	                (e.type == "sym" || e.type == "rc" || (e.type == "num" && e.value == e.value|0)) &&
	                !(f.type == "punc" && f.value == "(" && !e.space))
	            {
	                var tl = toCell(c, true), br = toCell(e, false);
	                if (tl && br) {
	                    skip(5);
	                    return addPos(new RangeRef(tl, br).setSheet(a.value, true), a, e);
	                }
	            }
	        }

	        // Sheet1(a) !(b) A1(c) not followed by paren (d)
	        function refSheetCell(a, b, c, d) {
	            if (a.type == "sym" &&
	                b.type == "punc" && b.value == "!" &&
	                (c.type == "sym" || c.type == "rc" || (c.type == "num" && c.value == c.value|0)) &&
	                !(d.type == "punc" && d.value == "(" && !c.space))
	            {
	                skip(3);
	                var x = toCell(c);
	                if (!x || !isFinite(x.row)) {
	                    x = new NameRef(c.value);
	                }
	                return addPos(x.setSheet(a.value, true), a, c);
	            }
	        }

	        // A1(a) :(b) C3(c) not followed by paren (d)
	        function refRange(a, b, c, d) {
	            if ((a.type == "sym" || a.type == "rc" || (a.type == "num" && a.value == a.value|0)) &&
	                (b.type == "op" && b.value == ":") &&
	                (c.type == "sym" || c.type == "rc" || (c.type == "num" && c.value == c.value|0)) &&
	                !(d.type == "punc" && d.value == "(" && !c.space))
	            {
	                var tl = toCell(a, true), br = toCell(c, false);
	                if (tl && br) {
	                    skip(3);
	                    return addPos(new RangeRef(tl, br), a, c);
	                }
	            }
	        }

	        // A1(a) not followed by paren (b)
	        function refCell(a, b) {
	            if ((a.type == "sym" || a.type == "rc") && !(b.type == "punc" && b.value == "(" && !a.space)) {
	                var x = toCell(a);
	                if (x && isFinite(x.row) && isFinite(x.col)) {
	                    skip(1);
	                    return addPos(x, a, a);
	                }
	            }
	        }

	        function funcall(a, b) {
	            if (a.type == "sym" && b.type == "punc" && b.value == "(" && !a.space) {
	                a.type = "func";
	                skip(1);
	                return a;       // already has position
	            }
	        }
	    }

	    function isWhitespace(ch) {
	        return " \t\r\n\xa0\u200b".indexOf(ch) >= 0;
	    }

	    var EOF = { type: "eof" };

	    function RawTokenStream(input, options) {
	        var tokens = [], index = 0;
	        var readWhile = input.readWhile;

	        return {
	            next  : next,
	            peek  : peek,
	            eof   : eof,
	            croak : input.croak,
	            ahead : ahead,
	            skip  : skip
	        };

	        function isDigit(ch) {
	            return (/[0-9]/i.test(ch));
	        }

	        function isIdStart(ch) {
	            return (/[a-z$_]/i.test(ch) || util.isUnicodeLetter(ch));
	        }

	        function isId(ch) {
	            return isIdStart(ch) || isDigit(ch) || ch == ".";
	        }

	        function isOpChar(ch) {
	            return ch in OPERATORS;
	        }

	        function isPunc(ch) {
	            return "\\!;(){}[]".indexOf(ch) >= 0;
	        }

	        function readNumber() {
	            // XXX: TODO: exponential notation
	            var has_dot = false;
	            var number = readWhile(function(ch){
	                if (ch == SEPARATORS.DEC) {
	                    if (has_dot) {
	                        return false;
	                    }
	                    has_dot = true;
	                    return true;
	                }
	                return isDigit(ch);
	            });
	            if (number == SEPARATORS.DEC) {
	                return { type: "punc", value: SEPARATORS.DEC };
	            } else {
	                return { type: "num", value: parseFloat(number.replace(SEPARATORS.DEC, ".")) };
	            }
	        }

	        function symbol(id, quote) {
	            return {
	                type  : "sym",
	                value : id,
	                upper : id.toUpperCase(),
	                space : isWhitespace(input.peek()),
	                quote : quote
	            };
	        }

	        function getRC(a, b, c) {
	            if (!a && !b && !c) {
	                return null;
	            }
	            if ((!a && !c) || (a && c)) {
	                var num = b ? parseInt(b, 10) : 0;
	                return a ? num : num - 1;
	            }
	        }

	        function readSymbol() {
	            var m = input.lookingAt(/^R(\[)?(-?[0-9]+)?(\])?C(\[)?(-?[0-9]+)?(\])?/i);
	            if (m) {
	                var row = getRC(m[1], m[2], m[3]);
	                var col = getRC(m[4], m[5], m[6]);
	                if (row != null && col != null) {
	                    input.skip(m);
	                    return {
	                        type: "rc",
	                        row: row,
	                        col: col,
	                        rel: ((m[4] || !(m[4] || m[5] || m[6]) ? 1 : 0) // col
	                              |
	                              (m[1] || !(m[1] || m[2] || m[3]) ? 2 : 0) // row
	                             )
	                    };
	                }
	            }
	            return symbol(readWhile(isId));
	        }

	        function readString() {
	            input.next();
	            return { type: "str", value: input.readEscaped('"') };
	        }

	        function readSheetName() {
	            input.next();
	            return symbol(input.readEscaped("'"), true);
	        }

	        function readOperator() {
	            return {
	                type  : "op",
	                value : readWhile(function(ch, op){
	                    return (op + ch) in OPERATORS;
	                })
	            };
	        }

	        function readPunc() {
	            return {
	                type  : "punc",
	                value : input.next()
	            };
	        }

	        function readNext() {
	            if (input.eof()) {
	                return null;
	            }
	            var ch = input.peek(), m;
	            if (ch == '"') {
	                return readString();
	            }
	            if (ch == "'") {
	                return readSheetName();
	            }
	            if (isDigit(ch) || ch == SEPARATORS.DEC) {
	                return readNumber();
	            }
	            if (isIdStart(ch)) {
	                return readSymbol();
	            }
	            if (isOpChar(ch)) {
	                return readOperator();
	            }
	            if (isPunc(ch)) {
	                return readPunc();
	            }
	            if ((m = input.lookingAt(/^#([a-z\/]+)[?!]?/i))) {
	                input.skip(m);
	                return { type: "error", value: m[1] };
	            }
	            if (!options.forEditor) {
	                input.croak("Can't handle character with code: " + ch.charCodeAt(0));
	            }
	            return { type: "error", value: input.next() };
	        }

	        function peek() {
	            while (tokens.length <= index) {
	                readWhile(isWhitespace);
	                var begin = input.pos();
	                var tok = readNext();
	                if (options.forEditor && tok) {
	                    tok.begin = begin;
	                    tok.end = input.pos();
	                }
	                tokens.push(tok);
	            }
	            return tokens[index];
	        }

	        function next() {
	            var tok = peek();
	            if (tok) {
	                index++;
	            }
	            return tok;
	        }

	        function ahead(n, f) {
	            var pos = index, a = [];
	            while (n-- > 0) {
	                a.push(next() || EOF);
	            }
	            index = pos;
	            return f.apply(a, a);
	        }

	        function skip(n) {
	            index += n;
	        }

	        function eof() {
	            return peek() == null;
	        }
	    }

	    function InputStream(input) {
	        var pos = 0, line = 1, col = 0;
	        return {
	            next        : next,
	            peek        : peek,
	            eof         : eof,
	            croak       : croak,
	            readWhile   : readWhile,
	            readEscaped : readEscaped,
	            lookingAt   : lookingAt,
	            skip        : skip,
	            forward     : forward,
	            pos         : location
	        };
	        function location() { // jshint ignore:line, :-(
	            return pos;
	        }
	        function next() {
	            var ch = input.charAt(pos++);
	            if (ch == "\n") {
	                line++;
	                col = 0;
	            } else {
	                col++;
	            }
	            return ch;
	        }
	        function peek() {
	            return input.charAt(pos);
	        }
	        function eof() {
	            return peek() === "";
	        }
	        function croak(msg) {
	            throw new ParseError(msg + " (input: " + input + ")", pos);
	        }
	        function skip(ch) {
	            if (typeof ch == "string") {
	                if (input.substr(pos, ch.length) != ch) {
	                    croak("Expected " + ch);
	                }
	                forward(ch.length);
	            } else if (ch instanceof RegExp) {
	                var m = ch.exec(input.substr(pos));
	                if (m) {
	                    forward(m[0].length);
	                    return m;
	                }
	            } else {
	                // assuming RegExp match data
	                forward(ch[0].length);
	            }
	        }
	        function forward(n) {
	            while (n-- > 0) {
	                next();
	            }
	        }
	        function readEscaped(end) {
	            var escaped = false, str = "";
	            while (!eof()) {
	                var ch = next();
	                if (escaped) {
	                    str += ch;
	                    escaped = false;
	                } else if (ch == "\\") {
	                    escaped = true;
	                } else if (ch == end) {
	                    break;
	                } else {
	                    str += ch;
	                }
	            }
	            return str;
	        }
	        function readWhile(predicate) {
	            var str = "";
	            while (!eof() && predicate(peek(), str)) {
	                str += next();
	            }
	            return str;
	        }
	        function lookingAt(rx) {
	            return rx.exec(input.substr(pos));
	        }
	    }

	    //// exports

	    var FORMAT_PARSERS = [];

	    var registerFormatParser = exports.registerFormatParser = function(p) {
	        FORMAT_PARSERS.push(p);
	    };

	    exports.parse = function(sheet, row, col, input, format) {
	        if (input instanceof Date) {
	            return { type: "date", value: runtime.dateToSerial(input) };
	        }
	        if (typeof input == "number") {
	            return { type: "number", value: input };
	        }
	        if (typeof input == "boolean") {
	            return { type: "boolean", value: input };
	        }
	        input += "";
	        if (/^'/.test(input)) {
	            return {
	                type: "string",
	                value: input.substr(1)
	            };
	        }
	        // trivial (integer) percent values; more complex formats are handled below via
	        // registerFormatParser; this case could be dropped completely.
	        if (/^-?[0-9]+%$/.test(input)) {
	            var str = input.substr(0, input.length - 1);
	            var num = parseFloat(str);
	            if (!isNaN(num) && num == str) {
	                return {
	                    type: "percent",
	                    value: num / 100
	                };
	            }
	        }
	        if (/^=/.test(input)) {
	            input = input.substr(1);
	            if (/\S/.test(input)) {
	                return parseFormula(sheet, row, col, input);
	            } else {
	                return {
	                    type: "string",
	                    value: "=" + input
	                };
	            }
	        }
	        for (var i = 0; i < FORMAT_PARSERS.length; ++i) {
	            var result = FORMAT_PARSERS[i](input);
	            if (result) {
	                return result;
	            }
	        }
	        if (input.toLowerCase() == "true") {
	            return { type: "boolean", value: true };
	        }
	        if (input.toLowerCase() == "false") {
	            return { type: "boolean", value: false };
	        }
	        var date = runtime.parseDate(input, format);
	        if (date) {
	            return { type: "date", value: runtime.dateToSerial(date) };
	        }
	        var num = parseFloat(input);
	        if (!isNaN(num) && input.length > 0 && num == input) {
	            format = null;
	            if (num != Math.floor(num)) {
	                format = "0." + String(num).split(".")[1].replace(/\d/g, "0");
	            }
	            return {
	                type: "number",
	                value: num,
	                format: format
	            };
	        }
	        return {
	            type: "string",
	            value: input
	        };
	    };

	    function tokenize(input, row, col) {
	        var tokens = [];
	        input = TokenStream(input, { forEditor: true, row: row, col: col });
	        while (!input.eof()) {
	            tokens.push(next());
	        }
	        var tok = tokens[0];
	        if (tok.type == "op" && tok.value == "=") {
	            tok.type = "startexp";
	        }
	        return tokens;

	        function next() {
	            var tok = input.next();
	            if (tok.type == "sym") {
	                if (tok.upper == "TRUE") {
	                    tok.type = "bool";
	                    tok.value = true;
	                } else if (tok.upper == "FALSE") {
	                    tok.type = "bool";
	                    tok.value = false;
	                }
	            } else if (tok.type == "ref") {
	                tok = {
	                    type  : "ref",
	                    ref   : (row != null && col != null ? tok.absolute(row, col) : tok),
	                    begin : tok.begin,
	                    end   : tok.end
	                };
	            }
	            return tok;
	        }
	    }

	    // The `sqref` attribute in dataValidation (XLSX) will contain a space-separated list of
	    // references.  This helper is called from excel-reader.js to parse them.
	    function parseSqref(input, row, col) {
	        row = row || 0;
	        col = col || 0;
	        input = TokenStream(input, { row: row, col: col });
	        var refs = [];
	        while (!input.eof()) {
	            var ref = input.next();
	            if (ref.type != "ref") {
	                throw new ParseError("Expecting a reference but got: " + JSON.stringify(ref));
	            }
	            refs.push(ref.absolute(row, col));
	        }
	        return refs;
	    }

	    exports.parseNameDefinition = parseNameDefinition;
	    exports.parseFormula = parseFormula;
	    exports.parseReference = parseReference;
	    exports.compile = makeFormula;
	    exports.parseSqref = parseSqref;

	    exports.InputStream = InputStream;
	    exports.ParseError = ParseError;
	    exports.tokenize = tokenize;

	    /* -----[ a few special formats ]----- */

	    // various time formats
	    registerFormatParser(function(input){
	        var m, date = 0, format = "";
	        // have date part?
	        if ((m = /^(\d+)([-/.])(\d+)\2(\d{2}(?:\d{2})?)(\s*)/.exec(input))) {
	            var mo = parseInt(m[1], 10);
	            var sep = m[2];
	            var da = parseInt(m[3], 10);
	            var yr = parseInt(m[4], 10);
	            if (yr < 30) {
	                yr += 2000;
	            } else if (yr < 100) {
	                yr += 1900;
	            }
	            var monthFirst = true;
	            if (mo > 12) {
	                var tmp = mo;
	                mo = da;
	                da = tmp;
	                monthFirst = false;
	            }
	            if (!runtime.validDate(yr, mo, da)) {
	                return null;
	            }
	            date = runtime.packDate(yr, mo - 1, da);
	            if (date < 0) { date--; }
	            if (monthFirst) {
	                format = ["mm", "dd", "yyyy"].join(sep);
	            } else {
	                format = ["dd", "mm", "yyyy"].join(sep);
	            }
	            format += m[5];
	            input = input.substr(m[0].length); // skip the date
	        }
	        // hh:mm
	        if ((m = /^(\d+):(\d+)$/.exec(input))) {
	            var hh = parseInt(m[1], 10);
	            var mm = parseInt(m[2], 10);
	            return {
	                type   : "date",
	                format : format + "hh:mm",
	                value  : date + runtime.packTime(hh, mm, 0, 0)
	            };
	        }
	        // mm:ss.ms
	        if ((m = /^(\d+):(\d+)(\.\d+)$/.exec(input))) {
	            var mm = parseInt(m[1], 10);
	            var ss = parseInt(m[2], 10);
	            var ms = parseFloat(m[3]) * 1000;
	            return {
	                type   : "date",
	                format : format + "mm:ss.00",
	                value  : date + runtime.packTime(0, mm, ss, ms)
	            };
	        }
	        // hh:mm:ss
	        if ((m = /^(\d+):(\d+):(\d+)$/.exec(input))) {
	            var hh = parseInt(m[1], 10);
	            var mm = parseInt(m[2], 10);
	            var ss = parseInt(m[3], 10);
	            return {
	                type   : "date",
	                format : format + "hh:mm:ss",
	                value  : date + runtime.packTime(hh, mm, ss, 0)
	            };
	        }
	        // hh:mm:ss.ms
	        if ((m = /^(\d+):(\d+):(\d+)(\.\d+)$/.exec(input))) {
	            var hh = parseInt(m[1], 10);
	            var mm = parseInt(m[2], 10);
	            var ss = parseInt(m[3], 10);
	            var ms = parseFloat(m[4]) * 1000;
	            return {
	                type   : "date",
	                format : format + "hh:mm:ss.00",
	                value  : date + runtime.packTime(hh, mm, ss, ms)
	            };
	        }
	    });

	    // Support numeric formats with thousands separator and/or currency symbol, like `1,234,567.00`,
	    // `$1234`, `123,456.78 $` etc.  I apologize for this code.
	    registerFormatParser(function(input){
	        var m, n;
	        var culture = kendo.culture();
	        var comma = culture.numberFormat[","];
	        var dot = culture.numberFormat["."];
	        var currency = culture.numberFormat.currency.symbol;
	        var rxnum = getNumberRegexp(comma, dot);
	        var rxcur = new RegExp("^\\s*\\" + currency + "\\s*");
	        var sign = 1;
	        var format = "";
	        var suffix = "";
	        var has_currency = false;
	        var has_percent = false;

	        input = InputStream(input.replace(/^\s+|\s+$/g, ""));

	        // has minus before currency?
	        if (input.skip(/^-\s*/)) {
	            sign = -1;
	        }

	        // has currency before number?
	        if ((m = input.skip(rxcur))) {
	            has_currency = true;
	            format += '"' + m[0] + '"';
	        }

	        // has minus after currency?
	        if (input.skip(/^-\s*/)) {
	            if (sign < 0) {
	                return null;    // not a number
	            }
	            sign = -1;
	        }

	        // read the number itself
	        if (!(n = input.skip(rxnum))) {
	            return null;        // not a number
	        }
	        format += "0";

	        // has currency after number?
	        if ((m = input.skip(rxcur))) {
	            if (has_currency) {
	                return null;    // either before or after, not both.
	            }
	            has_currency = true;
	            suffix = '"' + m[0] + '"';
	        }

	        // has percent after number?
	        if (!has_currency && (m = input.skip(/^\s*%\s*/))) {
	            has_percent = true;
	            suffix = m[0];      // no quotes this time, % is special in format
	        }

	        if (!input.eof()) {
	            return null;        // should anything else follow, not a number
	        }

	        if (n[2] || has_currency) {
	            format = format.replace("0", "#");
	            format += ",0";
	        }
	        if (n[3]) {
	            format += "." + repeat("0", n[3].length - 1);
	        }
	        var value = n[0]
	            .replace(new RegExp("\\" + comma, "g"), "")
	            .replace(new RegExp("\\" + dot, "g"), ".");

	        value = parseFloat(value);
	        if (has_percent) {
	            value /= 100;
	        }

	        format += suffix;
	        if (has_currency) {
	            format += ';-' + format;
	        }

	        return {
	            type: "number",
	            currency: has_currency,
	            format: format,
	            value: sign * value
	        };
	    });

	    registerFormatParser(function(input){
	        var m;
	        if ((m = /^([0-9]*)\.([0-9]+)(\s*%)$/.exec(input))) {
	            return {
	                type: "number",
	                value: parseFloat(input) / 100,
	                format: "0." + repeat("0", m[2].length) + m[3]
	            };
	        }
	    });

	    var NUMBER_FORMAT_RX = {};
	    function getNumberRegexp(comma, dot) {
	        var id = comma + dot;
	        var rx = NUMBER_FORMAT_RX[id];
	        if (!rx) {
	            rx = "^(\\d+(COM\\d{3})*(DOT\\d+)?)";
	            rx = rx.replace(/DOT/g, "\\" + dot).replace(/COM/g, "\\" + comma);
	            rx = new RegExp(rx);
	            NUMBER_FORMAT_RX[id] = rx;
	        }
	        return rx;
	    }

	    function repeat(str, len) {
	        var out = "";
	        while (len-- > 0) {
	            out += str;
	        }
	        return out;
	    }

	}, __webpack_require__(3));


/***/ })

/******/ });