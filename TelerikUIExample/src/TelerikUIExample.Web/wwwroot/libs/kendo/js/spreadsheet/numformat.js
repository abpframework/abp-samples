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

	__webpack_require__(1680);
	module.exports = __webpack_require__(1680);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1667:
/***/ (function(module, exports) {

	module.exports = require("./calc");

/***/ }),

/***/ 1680:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// -*- fill-column: 100 -*-

	(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1667), __webpack_require__(1681), __webpack_require__(1682) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){
	    "use strict";

	    // WARNING: removing the following jshint declaration and turning
	    // == into === to make JSHint happy will break functionality.
	    /* jshint eqnull:true, newcap:false, laxbreak:true, shadow:true, -W054 */
	    /* jshint latedef: nofunc */

	    var util = kendo.util;
	    var calc = kendo.spreadsheet.calc;
	    var dom = kendo.dom;

	    var RX_COLORS = /^\[(black|green|white|blue|magenta|yellow|cyan|red)\]/i;
	    var RX_CONDITION = /^\[(<=|>=|<>|<|>|=)(-?[0-9.]+)\]/;

	    /* The proper amount of suffering for whoever designed the Excel
	       Custom Number Format would be to have him implement the
	       formatter himself. */

	    function parse(input) {
	        input = calc.InputStream(input);
	        var sections = [], haveConditional = false, decimalPart;

	        while (!input.eof()) {
	            var sec = readSection();
	            sections.push(sec);
	            if (sec.cond) {
	                haveConditional = true;
	            }
	        }

	        // From https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4:
	        //
	        //    A number format can have up to four sections of code, separated by semicolons. These
	        //    code sections define the format for positive numbers, negative numbers, zero values,
	        //    and text, in that order.
	        //
	        //    You do not have to include all code sections in your custom number format. If you
	        //    specify only two code sections for your custom number format, the first section is
	        //    used for positive numbers and zeros, and the second section is used for negative
	        //    numbers. If you specify only one code section, it is used for all numbers. If you want
	        //    to skip a code section and include a code section that follows it, you must include
	        //    the ending semicolon for the section that you skip.
	        //
	        // However, if sections have conditionals, it is not clear if:
	        //
	        //    - still at most four are allowed
	        //    - is the last section still for text
	        //
	        // We will assume that if no sections have conditionals, then there must be at most 4, and
	        // they will be interpreted in the order above.  If the first section contains a
	        // conditional, then there can be any number of them; if the last one is not conditional
	        // then it will be interpreted as text format.

	        if (!haveConditional) {
	            if (sections.length == 1) {
	                sections[0].cond = "num";
	            }
	            else if (sections.length == 2) {
	                sections[0].cond = { op: ">=", value: 0 };
	                sections[1].cond = { op: "<", value: 0 };
	            }
	            else if (sections.length >= 3) {
	                sections[0].cond = { op: ">", value: 0 };
	                sections[1].cond = { op: "<", value: 0 };
	                sections[2].cond = { op: "=", value: 0 };
	                if (sections.length > 3) {
	                    sections[3].cond = "text";
	                    sections = sections.slice(0, 4);
	                }
	            }
	        }

	        return sections;

	        function maybeColor() {
	            var m = input.skip(RX_COLORS);
	            if (m) {
	                return m[1].toLowerCase();
	            }
	        }

	        function maybeCondition() {
	            var m = input.skip(RX_CONDITION);
	            if (m) {
	                var val = parseFloat(m[2]);
	                if (!isNaN(val)) {
	                    return { op: m[1], value: val, custom: true };
	                }
	            }
	        }

	        function readFormat() {
	            var format = [], tok, prev = null;
	            while (!input.eof() && (tok = readNext())) {
	                // disambiguate: m/mm might mean month or minutes depending on surrounding context.
	                if (tok.type == "date") {
	                    if (prev && /^(el)?time$/.test(prev.type) && prev.part == "h"
	                        && tok.part == "m" && tok.format < 3) {
	                        // m or mm that follows hours should display minutes
	                        tok.type = "time";
	                    }
	                } else if (/^(el)?time$/.test(tok.type) && tok.part == "s") {
	                    if (prev && prev.type == "date" && prev.part == "m"
	                        && prev.format < 3) {
	                        // m or mm followed by seconds should display minutes
	                        prev.type = "time";
	                    }
	                }
	                if (!(/^(?:str|space|fill)$/.test(tok.type))) {
	                    prev = tok;
	                }
	                format.push(tok);
	            }
	            return format;
	        }

	        function maybeFraction(tok) {
	            if (tok.type != "date" || (tok.part == "m" && tok.format < 3)) {
	                var m = input.skip(/^\.(0+)/);
	                if (m) {
	                    tok.fraction = m[1].length;
	                    if (tok.type == "date") {
	                        tok.type = "time";
	                    }
	                }
	            }
	            return tok;
	        }

	        function readNext() {
	            var ch, m;
	            // numbers
	            if ((m = input.skip(/^([#0?]+)(?:,([#0?]+))+/))) {
	                // thousands separator.  seems convenient to treat
	                // this as a single token.
	                return { type: "digit", sep: true, format: m[1] + m[2], decimal: decimalPart };
	            }
	            if ((m = input.skip(/^[#0?]+/))) {
	                return { type: "digit", sep: false, format: m[0], decimal: decimalPart };
	            }
	            // XXX: handle this one!
	            if ((m = input.skip(/^(e)([+-])/i))) {
	                return { type: "exp", ch: m[1], sign: m[2] };
	            }
	            // dates
	            if ((m = input.skip(/^(d{1,4}|m{1,5}|yyyy|yy)/i))) {
	                m = m[1].toLowerCase();
	                return maybeFraction({ type: "date", part: m.charAt(0), format: m.length });
	            }
	            // time (interpret as a date)
	            if ((m = input.skip(/^(hh?|ss?)/i))) { // m and mm are handled above
	                m = m[1].toLowerCase();
	                return maybeFraction({ type: "time", part: m.charAt(0), format: m.length });
	            }
	            // elapsed time (interpret as interval of days)
	            if ((m = input.skip(/^\[(hh?|mm?|ss?)\]/i))) {
	                m = m[1].toLowerCase();
	                return maybeFraction({ type: "eltime", part: m.charAt(0), format: m.length });
	            }
	            if ((m = input.skip(/^(a[.]?m[.]?\/p[.]?m[.]?|a\/p)/i))) {
	                m = m[1].split("/");
	                return { type: "ampm", am: m[0], pm: m[1] };
	            }
	            switch ((ch = input.next())) { // JSHint sadness
	              case ";":
	                return null;
	              case "\\":
	                // quotes next character
	                return { type: "str", value: input.next() };
	              case '"':
	                return { type: "str", value: input.readEscaped(ch) };
	              case "@":
	                return { type: "text" };
	              case "_":
	                // whitespace of the width of following character
	                return { type: "space", value: input.next() };
	              case "*":
	                // fills cell width with the following character
	                return { type: "fill", value: input.next() };
	              case ".":
	                if (input.lookingAt(/^\s*[#0?]/)) {
	                    decimalPart = true;
	                    return { type: "dec" };
	                }
	                return { type: "str", value: "." };
	              case "%":
	                return { type: "percent" };
	              case ",":
	                return { type: "comma" };
	            }

	            // whatever we can't make sense of, output literally.
	            return { type: "str", value: ch };
	        }

	        function readSection() {
	            decimalPart = false;
	            var color = maybeColor(), cond = maybeCondition();
	            if (!color && cond) {
	                color = maybeColor();
	            }
	            return {
	                color : color,
	                cond  : cond,
	                body  : readFormat()
	            };
	        }
	    }

	    function print(sections) {
	        return sections.map(printSection).join(";");

	        function printSection(sec) {
	            var out = "";
	            if (sec.color) {
	                out += "[" + sec.color + "]";
	            }
	            if (sec.cond) {
	                if (!(sec.cond == "text" || sec.cond == "num")) {
	                    out += "[" + sec.cond.op + sec.cond.value + "]";
	                }
	            }
	            out += sec.body.map(printToken).join("");
	            return out;
	        }

	        function maybeFraction(fmt, tok) {
	            if (tok.fraction) {
	                fmt += "." + padLeft("", tok.fraction, "0");
	            }
	            return fmt;
	        }

	        function printToken(tok) {
	            if (tok.type == "digit") {
	                if (tok.sep) {
	                    return tok.format.charAt(0) + "," + tok.format.substr(1);
	                } else {
	                    return tok.format;
	                }
	            }
	            else if (tok.type == "exp") {
	                return tok.ch + tok.sign;
	            }
	            else if (tok.type == "date" || tok.type == "time") {
	                return maybeFraction(padLeft("", tok.format, tok.part), tok);
	            }
	            else if (tok.type == "eltime") {
	                return maybeFraction("[" + padLeft("", tok.format, tok.part) + "]", tok);
	            }
	            else if (tok.type == "ampm") {
	                return tok.am + "/" + tok.pm;
	            }
	            else if (tok.type == "str") {
	                return JSON.stringify(tok.value);
	            }
	            else if (tok.type == "text") {
	                return "@";
	            }
	            else if (tok.type == "space") {
	                return "_" + tok.value;
	            }
	            else if (tok.type == "fill") {
	                return "*" + tok.value;
	            }
	            else if (tok.type == "dec") {
	                return ".";
	            }
	            else if (tok.type == "percent") {
	                return "%";
	            }
	            else if (tok.type == "comma") {
	                return ",";
	            }
	        }
	    }

	    function adjustDecimals(sections, x) {
	        sections.forEach(function(sec) {
	            var diff = x;
	            if (sec.cond == "text") {
	                return;
	            }
	            var body = sec.body, adjusted = false, i = body.length;
	            while (diff !== 0 && --i >= 0) {
	                var tok = body[i];
	                if (tok.type == "digit") {
	                    if (tok.decimal) {
	                        adjusted = true;
	                        if (diff > 0) {
	                            tok.format += padLeft("", diff, "0");
	                        } else if (diff < 0) {
	                            var tmp = tok.format.length;
	                            tok.format = tok.format.substr(0, tmp + diff);
	                            diff += tmp - tok.format.length;
	                        }
	                        if (tok.format.length === 0) {
	                            body.splice(i, 1);
	                            while (--i >= 0) {
	                                tok = body[i];
	                                if (tok.type == "digit" && tok.decimal) {
	                                    ++i;
	                                    break;
	                                }
	                                if (tok.type == "dec") {
	                                    body.splice(i, 1);
	                                    break;
	                                }
	                            }
	                        }
	                    }
	                    if (diff > 0) {
	                        break;
	                    }
	                }
	            }
	            if (!adjusted && diff > 0) {
	                // no decimal part was found, insert one after the last digit token.
	                body.splice(
	                    i + 1, 0, {
	                        type    : "dec"
	                    }, {
	                        type    : "digit",
	                        sep     : false,
	                        decimal : true,
	                        format  : padLeft("", diff, "0")
	                    }
	                );
	            }
	        });
	    }

	    function TokenStream(parts) {
	        var index = 0;
	        return {
	            next: function() {
	                return parts[index++];
	            },
	            eof: function() {
	                return index >= parts.length;
	            },
	            ahead: function(n, f) {
	                if (index + n <= parts.length) {
	                    var val = f.apply(null, parts.slice(index, index + n));
	                    if (val) {
	                        index += n;
	                    }
	                    return val;
	                }
	            },
	            restart: function() {
	                index = 0;
	            }
	        };
	    }

	    function compileFormatPart(format) {
	        var input = TokenStream(format.body);
	        var hasDate = false;
	        var hasTime = false;
	        var hasAmpm = false;
	        var percentCount = 0;
	        var currency = /[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/;
	        var scaleCount = 0;
	        var code = "var intPart, decPart, isNegative, date, time; ";
	        var separeThousands = false;
	        var declen = 0;
	        var intFormat = [], decFormat = [];
	        var condition = format.cond;
	        var preamble = "";

	        if (condition == "text") {
	            preamble = "if (typeof value == 'string' || value instanceof kendo.spreadsheet.CalcError) { ";
	        }
	        else if (condition == "num") {
	            preamble = "if (typeof value == 'number') { ";
	        }
	        else if (condition) {
	            var op = condition.op == "=" ? "==" : condition.op;
	            preamble = "if (typeof value == 'number' && value "
	                + op + " " + condition.value + ") { ";
	            if (!condition.custom) {
	                code += "value = Math.abs(value); ";
	            }
	        }

	        if (format.color) {
	            code += "result.color = " + JSON.stringify(format.color) + "; ";
	        }

	        function checkComma(a, b) {
	            if ((a.type == "digit" && b.type == "comma") ||
	                (a.type == "comma" && a.hidden && b.type == "comma"))
	            {
	                b.hidden = true;
	                scaleCount++;
	            }
	        }

	        while (!input.eof()) {
	            input.ahead(2, checkComma);
	            var tok = input.next();
	            if (tok.type == "percent") {
	                percentCount++;
	            }
	            else if (tok.type == "digit") {
	                if (tok.decimal) {
	                    declen += tok.format.length;
	                    decFormat.push(tok.format);
	                } else {
	                    intFormat.push(tok.format);
	                    if (tok.sep) {
	                        separeThousands = true;
	                    }
	                }
	            }
	            else if (tok.type == "time") {
	                hasTime = true;
	            }
	            else if (tok.type == "date") {
	                hasDate = true;
	            }
	            else if (tok.type == "ampm") {
	                hasAmpm = hasTime = true;
	            }
	        }

	        if (percentCount > 0) {
	            code += "value *= " + Math.pow(100, percentCount) + "; ";
	        }
	        if (scaleCount > 0) {
	            code += "value /= " + Math.pow(1000, scaleCount) + "; ";
	        }
	        if (intFormat.length) {
	            code += "intPart = runtime.formatInt(culture, value, " + JSON.stringify(intFormat) + ", " + declen + ", " + separeThousands + "); ";
	            code += "isNegative = parseInt(intPart[0]) < 0;";
	        }
	        if (decFormat.length) {
	            code += "decPart = runtime.formatDec(value, " + JSON.stringify(decFormat) + ", " + declen + "); ";
	        }
	        if (intFormat.length || decFormat.length) {
	            code += "type = 'number'; ";
	        }
	        if (hasDate) {
	            code += "date = runtime.unpackDate(value); ";
	        }
	        if (hasTime) {
	            code += "time = runtime.unpackTime(value); ";
	        }
	        if (hasDate || hasTime) {
	            code += "type = 'date'; ";
	        }

	        if (percentCount > 0 || scaleCount > 0 || intFormat.length || decFormat.length || hasDate || hasTime) {
	            if (!preamble) {
	                preamble = "if (typeof value == 'number') { ";
	            }
	        }

	        input.restart();
	        code += "var matchedCurrency = false;";
	        while (!input.eof()) {
	            var tok = input.next();
	            if (tok.type == "dec") {
	                code += "output += culture.numberFormat['.']; ";
	            }
	            else if (tok.type == "comma" && !tok.hidden) {
	                code += "output += ','; ";
	            }
	            else if (tok.type == "percent") {
	                code += "type = 'percent'; ";
	                code += "output += culture.numberFormat.percent.symbol; ";
	            }
	            else if (tok.type == "str") {
	                if (currency.test(tok.value)) {
	                    code += "type = 'currency'; ";
	                    code += "if (isNegative) { output += '-'; matchedCurrency = true; }";
	                }
	                code += "output += " + JSON.stringify(tok.value) + "; ";
	            }
	            else if (tok.type == "text") {
	                code += "type = 'text'; ";
	                code += "output += value; ";
	            }
	            else if (tok.type == "space") {
	                code += "if (output) result.body.push(output); ";
	                code += "output = ''; ";
	                code += "result.body.push({ type: 'space', value: " + JSON.stringify(tok.value) + " }); ";
	            }
	            else if (tok.type == "fill") {
	                code += "output += runtime.fill(" + JSON.stringify(tok.value) + "); ";
	            }
	            else if (tok.type == "digit") {
	                code += "if (isNegative && intPart[0] && matchedCurrency) {intPart[0] = intPart[0].replace('-', '');}";
	                code += "output += " + (tok.decimal ? "decPart" : "intPart") + ".shift(); ";
	            }
	            else if (tok.type == "date") {
	                code += "output += runtime.date(culture, date, "
	                    + JSON.stringify(tok.part) + ", " + tok.format + "); ";
	            }
	            else if (tok.type == "time") {
	                code += "output += runtime.time(time, "
	                    + JSON.stringify(tok.part) + ", " + tok.format + ", " + hasAmpm + ", " + tok.fraction + "); ";
	            }
	            else if (tok.type == "eltime") {
	                code += "output += runtime.eltime(value, "
	                    + JSON.stringify(tok.part) + ", " + tok.format + ", " + tok.fraction + "); ";
	            }
	            else if (tok.type == "ampm") {
	                // XXX: should use culture?  As per the "spec", Excel
	                // displays whatever the token was (AM/PM, a/p etc.)
	                code += "output += time.hours < 12 ? " + JSON.stringify(tok.am) + " : " + JSON.stringify(tok.pm) + "; ";
	            }
	        }

	        code += "if (output) result.body.push(output); ";
	        code += "result.type = type; ";
	        code += "return result; ";

	        if (preamble) {
	            code = preamble + code + "}";
	        }

	        return code;
	    }

	    var TEXT = compileFormatPart({ cond: "text", body: [ { type: "text" } ] });

	    var compile = util.memoize(function(format) {
	        var tree = parse(format);
	        var code = tree.map(compileFormatPart);
	        code.push(TEXT);
	        code = code.join("\n");
	        code = "'use strict'; return function(value, culture){ "
	            + "if (!culture) culture = kendo.culture(); "
	            + "var output = '', type = null, result = { body: [] }; " + code + "; return result; };";
	        return new Function("runtime", code)(runtime);
	    });

	    // Attempts to produce a format compatible with kendo.parseDate from our Excel format.  Needed
	    // in runtime.parseDate (passing Excel format to kendo.parseDate will mess up the month or
	    // minutes).  https://github.com/telerik/kendo-ui-core/issues/3797
	    var makeDateFormat = util.memoize(function(format){
	        var tree = parse(format);
	        var section, found = false, hasAmpm = false;

	        // locate a section that contains date/time formatting.  only the first will be converted.
	        for (var i = 0; i < tree.length; ++i) {
	            section = tree[i];
	            for (var j = 0; j < section.body.length; ++j) {
	                if (/^(?:date|time|ampm)$/.test(section.body[j].type)) {
	                    found = true;
	                    if (section.body[j].type == "ampm") {
	                        hasAmpm = true;
	                    }
	                }
	            }
	            if (found) {
	                break;
	            }
	        }
	        if (!found) {
	            return null;
	        }

	        return section.body.map(printToken).join("");

	        // a little copy/paste goes a long way

	        function maybeFraction(fmt, tok) {
	            if (tok.fraction) {
	                fmt += padLeft("", Math.max(tok.fraction, 3), "f");
	            }
	            return fmt;
	        }

	        function printToken(tok) {
	            if (tok.type == "digit") {
	                if (tok.sep) {
	                    return tok.format.charAt(0) + "," + tok.format.substr(1);
	                } else {
	                    return tok.format;
	                }
	            }
	            else if (tok.type == "exp") {
	                return tok.ch + tok.sign;
	            }
	            else if (tok.type == "date" || tok.type == "time") {
	                var part = tok.part;
	                if (tok.type == "date" && /^m/.test(part)) {
	                    part = "M"; // month, not minutes
	                }
	                else if (tok.type == "time" && /^h/.test(part)) {
	                    if (!hasAmpm) {
	                        // 24-hours clock is H or HH
	                        part = part.toUpperCase();
	                    }
	                }
	                return maybeFraction(padLeft("", tok.format, part), tok);
	            }
	            else if (tok.type == "ampm") {
	                return "tt";
	            }
	            else if (tok.type == "str") {
	                // XXX: this is a bit wrong.  it doesn't look like kendo.toString / kendo.parseDate
	                // support arbitrary text (in Excel formats that's quoted), for example:
	                //    kendo.toString(new Date(), "here's the day dude: dd")
	                //  → "3ere'8 t3e 19ay 19u19e: 19"   (it's 19th June, 3 o'clock, probably 8 seconds)
	                return tok.value;
	            }
	            else if (tok.type == "space") {
	                return " ";
	            }
	            else if (tok.type == "dec") {
	                return ".";
	            }
	            else if (tok.type == "percent") {
	                return "%";
	            }
	            else if (tok.type == "comma") {
	                return ",";
	            }
	            else {
	                return "";
	            }
	        }
	    });

	    var runtime = {

	        unpackDate: calc.runtime.unpackDate,
	        unpackTime: calc.runtime.unpackTime,

	        date: function(culture, d, part, length) {
	            switch (part) {
	              case "d":
	                switch (length) {
	                  case 1: return d.date;
	                  case 2: return padLeft(d.date, 2, "0");
	                  case 3: return culture.calendars.standard.days.namesAbbr[d.day];
	                  case 4: return culture.calendars.standard.days.names[d.day];
	                }
	                break;
	              case "m":
	                switch (length) {
	                  case 1: return d.month + 1;
	                  case 2: return padLeft(d.month + 1, 2, "0");
	                  case 3: return culture.calendars.standard.months.namesAbbr[d.month];
	                  case 4: return culture.calendars.standard.months.names[d.month];
	                  case 5: return culture.calendars.standard.months.names[d.month].charAt(0);
	                }
	                break;
	              case "y":
	                switch (length) {
	                  case 2: return d.year % 100;
	                  case 4: return d.year;
	                }
	                break;
	            }
	            return "##";
	        },

	        time: function(t, part, length, ampm, fraclen) {
	            var ret, fraction;
	            switch (part) {
	              case "h":
	                ret = padLeft(ampm ? t.hours % 12 || 12 : t.hours, length, "0");
	                if (fraclen) {
	                    fraction = (t.minutes + (t.seconds + t.milliseconds / 1000) / 60) / 60;
	                }
	                break;
	              case "m":
	                ret = padLeft(t.minutes, length, "0");
	                if (fraclen) {
	                    fraction = (t.seconds + t.milliseconds / 1000) / 60;
	                }
	                break;
	              case "s":
	                ret = padLeft(t.seconds, length, "0");
	                if (fraclen) {
	                    fraction = t.milliseconds / 1000;
	                }
	                break;
	            }
	            if (fraction) {
	                ret += runtime.toFixed(fraction, fraclen).replace(/^0+/, "");
	            }
	            return ret;
	        },

	        eltime: function(value, part, length, fraclen) {
	            var ret, fraction;
	            switch (part) {
	              case "h":
	                ret = value * 24;
	                break;
	              case "m":
	                ret = value * 24 * 60;
	                break;
	              case "s":
	                ret = value * 24 * 60 * 60;
	                break;
	            }
	            if (fraclen) {
	                fraction = ret - (ret | 0);
	            }
	            ret = padLeft(ret | 0, length, "0");
	            if (fraction) {
	                ret += runtime.toFixed(fraction, fraclen).replace(/^0+/, "");
	            }
	            return ret;
	        },

	        fill: function(ch) {
	            // XXX: how to implement this?
	            return ch;
	        },

	        // formatting integer part is slightly different than decimal
	        // part, so they're implemented in two functions.  For the
	        // integer part we need to walk the value and the format
	        // backwards (right-to-left).

	        formatInt: function(culture, value, parts, declen, sep) {
	            // toFixed is perfect for rounding our value; if there is
	            // no format for decimals, for example, we want the number
	            // rounded up.
	            value = runtime.toFixed(value, declen).replace(/\..*$/, "");
	            var lastPart = parts[parts.length - 1];

	            if (declen > 0 && lastPart[parts.length - 1] != "0") {
	                // if the rounded number is zero and we have decimal
	                // format, consider it a non-significant digit (Excel
	                // won't display the leading zero for 0.2 in format #.#).
	                // the zero won't e omitted if using 0.0 format
	                if (value === "0") { value = ""; }
	                else if (value === "-0") { value = "-"; }
	            }

	            var shouldInsertMinus = false;
	            var iv = value.length - 1;
	            var result = [];
	            var len = 0, str;

	            function add(ch, skipMinus) {
	                if (sep && len && len % 3 === 0 && /^[0-9]$/.test(ch)) {
	                    str = culture.numberFormat[","] + str;
	                }
	                if(skipMinus && ch === "-") {
	                    shouldInsertMinus = true;
	                    ch = "0";
	                }
	                str = ch + str;
	                len++;
	            }

	            for (var j = parts.length; --j >= 0;) {
	                var format = parts[j];
	                str = "";
	                for (var k = format.length; --k >= 0;) {
	                    var chf = format.charAt(k);
	                    if (iv < 0) {
	                        if (chf == "0") {
	                            add("0");
	                        } else if (chf == "?") {
	                            add(" ");
	                        }
	                    } else {
	                        if (value == "0" && chf == "?") {
	                            add(" ");
	                        } else if (chf == "0") {
	                            add(value.charAt(iv), true);
	                        } else {
	                            add(value.charAt(iv));
	                        }
	                        iv--;
	                    }
	                }
	                if (j === 0) {
	                    while (iv >= 0) {
	                        add(value.charAt(iv--));
	                    }
	                }
	                result.unshift(str);
	            }

	            if(shouldInsertMinus) {
	                result[0] = "-" + result[0];
	            }

	            return result;
	        },

	        // for decimal part we walk in normal direction and pad on the
	        // right if required (for '0' or '?' chars).

	        formatDec: function(value, parts, declen) {
	            value = runtime.toFixed(value, declen);
	            var pos = value.indexOf(".");
	            if (pos >= 0) {
	                value = value.substr(pos + 1).replace(/0+$/, "");
	            } else {
	                value = "";
	            }

	            var iv = 0;
	            var result = [];

	            for (var j = 0; j < parts.length; ++j) {
	                var format = parts[j];
	                var str = "";
	                for (var k = 0; k < format.length; ++k) {
	                    var chf = format.charAt(k);
	                    if (iv < value.length) {
	                        str += value.charAt(iv++);
	                    } else if (chf == "0") {
	                        str += "0";
	                    } else if (chf == "?") {
	                        str += " ";
	                    }
	                }
	                result.push(str);
	            }

	            return result;
	        },

	        // JS's toFixed is broken, it's only OK to use it on integers.
	        toFixed: function(value, decimals) {
	            return (function toFixed(value, last) {
	                if (!isFinite(value)) {
	                    return "#NUM!";
	                }

	                // deal early with the trivial cases
	                if (value < 0) {    // JS's Math.round is broken with negative numbers
	                    return "-" + toFixed(-value);
	                }

	                if (decimals === 0) { // no decimals
	                    return String(Math.round(value));
	                }

	                if (value === Math.round(value) && !/e/i.test(String(value))) { // value is integer and not too big
	                    return value.toFixed(decimals);
	                }

	                // this handles cases like 0.3.toFixed(20) == "0.29999999999999998890", or
	                // 2.1825.toFixed(20) = "2.18250000000000010658".
	                // https://github.com/telerik/kendo-ui-core/issues/3520#issuecomment-333768221
	                // https://twitter.com/mcbazon/status/1035828655652593665
	                var num = digNumber(value);
	                var intpart = num.intpart;
	                var decpart = num.decpart;
	                if (decpart.length <= decimals) {
	                    while (decpart.length < decimals) {
	                        decpart += "0";
	                    }
	                    return intpart + "." + decpart;
	                }

	                if (last) {
	                    // "we should definitely not get here" (famous last words).  Let's MAKE SURE
	                    // there's no more recursion.
	                    return intpart + "." + decpart.substr(0, decimals);
	                }

	                // if there are more decimals than wanted, round and try again.
	                // it should not recurse more than once.
	                var f = Math.pow(10, decimals);
	                return toFixed(Math.round(value * f) / f, true);

	            })(Number(value.toFixed(14))); /* restrict to 14 decimals, because 0.1 + 0.2 ===
	                                                 * 0.30000000000000004 */
	        }

	    };

	    function padLeft(val, width, ch) {
	        val += "";
	        while (val.length < width) {
	            val = ch + val;
	        }
	        return val;
	    }

	    function padRight(val, width, ch) {
	        val += "";
	        while (val.length < width) {
	            val += ch;
	        }
	        return val;
	    }

	    // given a number, return { intpart, decpart } as strings.  the main difficulty here is that JS
	    // will stringify really large values in scientific notation (e.g. 1.23e+30, which is actually
	    // the integer 1230000000000000000000000000000).
	    function digNumber(num) {
	        var str = String(num).toLowerCase();
	        var intpart, decpart, m;
	        var pos = str.indexOf(".");
	        if (pos < 0) {
	            pos = str.indexOf("e");
	            if (pos < 0) {
	                intpart = str;
	                decpart = "";
	            } else {
	                intpart = str.substr(0, pos);
	                decpart = str.substr(pos);
	            }
	        } else {
	            intpart = str.substr(0, pos);
	            decpart = str.substr(pos + 1);
	        }
	        if ((m = /(\d*)e([-+]?\d+)/.exec(decpart))) {
	            var exp = parseInt(m[2], 10);
	            if (exp >= 0) {
	                decpart = padRight(m[1], exp, "0");
	                intpart += decpart.substr(0, exp);
	                decpart = decpart.substr(exp);
	            } else {
	                intpart = padLeft(intpart, -exp, "0");
	                decpart = intpart.substr(exp) + m[1];
	                intpart = intpart.substr(0, intpart.length + exp);
	            }
	        }
	        return { intpart: intpart || "0", decpart: decpart };
	    }

	    /* -----[ exports ]----- */

	    function text(f) {
	        var a = f.body;
	        var text = "";
	        for (var i = 0; i < a.length; ++i) {
	            var el = a[i];
	            if (typeof el == "string") {
	                text += el;
	            } else if (el.type == "space") {
	                text += " ";
	            }
	        }
	        return text;
	    }

	    kendo.spreadsheet.formatting = {
	        compile : compile,
	        parse: parse,
	        format: function(value, format, culture) {
	            var f = compile(format)(value, culture);
	            var span = dom.element("span");
	            span.__dataType = f.type;
	            var a = f.body;
	            if (f.color) {
	                span.attr.style = { color: f.color };
	            }
	            for (var i = 0; i < a.length; ++i) {
	                var el = a[i];
	                if (typeof el == "string") {
	                    span.children.push(dom.text(el));
	                } else if (el.type == "space") {
	                    span.children.push(dom.element("span", {
	                        style: { visibility: "hidden" }
	                    }, [ dom.text(el.value) ]));
	                }
	            }
	            return span;
	        },
	        text: function(value, format, culture) {
	            var f = compile(format)(value, culture);
	            return text(f);
	        },
	        textAndColor: function(value, format, culture) {
	            var f = compile(format)(value, culture);
	            return { text: text(f), color: f.color, type: f.type };
	        },
	        type: function(value, format) {
	            return compile(format)(value).type;
	        },
	        adjustDecimals: function(format, diff) {
	            var ast = parse(format);
	            adjustDecimals(ast, diff);
	            return print(ast);
	        },
	        makeDateFormat: makeDateFormat
	    };

	}, __webpack_require__(3));


/***/ }),

/***/ 1681:
/***/ (function(module, exports) {

	module.exports = require("../kendo.dom");

/***/ }),

/***/ 1682:
/***/ (function(module, exports) {

	module.exports = require("../util/main");

/***/ })

/******/ });