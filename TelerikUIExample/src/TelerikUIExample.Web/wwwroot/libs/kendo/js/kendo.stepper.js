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

	module.exports = __webpack_require__(1471);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

	module.exports = require("./kendo.core");

/***/ }),

/***/ 1312:
/***/ (function(module, exports) {

	module.exports = require("./kendo.progressbar");

/***/ }),

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(f, define){
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1057), __webpack_require__(1312) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(function(){

	var __meta__ = { // jshint ignore:line
	    id: "stepper",
	    name: "Stepper",
	    category: "web",
	    description: "The Stepper widget displays navigation steps.",
	    depends: [ "core", "progressbar" ]
	};

	(function ($, undefined) {
	    var kendo = window.kendo,
	        Widget = kendo.ui.Widget,
	        keys = kendo.keys,
	        extend = $.extend,
	        proxy = $.proxy,

	        STEPPER = ".kendoStepper",

	        CLICK = "click",
	        ACTIVATE = "activate",
	        SELECT = "select",
	        KEYDOWN = "keydown",
	        FOCUSOUT = "focusout",

	        DOT = ".",
	        SPACE = " ",
	        VERTICAL = "vertical",
	        TABINDEX = "tabindex",

	        ARIA_CURRENT = "aria-current",
	        ARIA_DISABLED = "aria-disabled",
	        ARIA_INVALID = "aria-invalid",
	        ARIA_HIDDEN = "aria-hidden";

	    var stepStyles = {
	        step: "k-step",
	        firstStep: "k-step-first",
	        lastStep: "k-step-last",
	        doneStep: "k-step-done",
	        successStep: "k-step-success",
	        errorStep: "k-step-error",
	        currentStep: "k-step-current",
	        focusStep: "k-step-focus",
	        disabledStep: "k-step-disabled",
	        stepLink: "k-step-link",
	        stepIndicator: "k-step-indicator",
	        stepLabel: "k-step-label"
	    };

	    var stepperStyles = {
	        widget: "k-widget k-stepper",
	        stepperLinear: "k-stepper-linear",
	        stepList: "k-step-list",
	        stepListHorizontal: "k-step-list-horizontal",
	        stepListVertical: "k-step-list-vertical"
	    };

	    var Step = kendo.Class.extend({
	        init: function(options) {
	            this.options = extend({}, this.options, options);
	            this._render();
	        },

	        options: {
	            label: "",
	            icon: "",
	            successIcon: "",
	            iconTemplate: "",
	            enabled: true,
	            error: false,
	            selected: false,
	            isFirstStep: false,
	            isLastStep: false,
	            indicatorVisible: true,
	            labelVisible: true,
	            index: 0,
	            previous: false,
	            selectable: true
	        },

	        _indicatorTemplate: '<span class="k-step-indicator" aria-hidden="true">' +
	            '#if(successIcon && previous && !error) {#' +
	                '<span class="k-step-indicator-icon k-icon k-i-#: successIcon #"></span>' +
	            '#} else if(icon) {#' +
	                '<span class="k-step-indicator-icon k-icon k-i-#: icon #"></span>' +
	            '#} else if(previous && !error) {#' +
	                '<span class="k-step-indicator-icon k-icon k-i-check"></span>' +
	            '#} else {#' +
	                '<span class="k-step-indicator-text">#: index + 1 #</span>' +
	            '#}#' +
	        '</span>',

	        _labelTemplate: '<span class="k-step-label">' +
	            '<span class="k-step-text">' +
	                '#: label #' +
	            '</span>' +
	            ' ' +
	            '#if(error || (!indicatorVisible && !error && previous)) {#' +
	                '<span class="k-icon' +
	                    '#if(previous && !error){# k-i-check#}#' +
	                    '#if(error){# k-i-warning#}#' +
	                '" aria-hidden="true"></span>' +
	            '#}#' +
	        '</span>',

	        deselect: function() {
	            this.options.selected = false;
	            this._link();
	            this._stepClasses();
	        },

	        enable: function(value) {
	            if(this.options.enabled !== value) {
	                this.options.enabled = value;
	                this.options.selectable = value;
	                this._link();
	                this._stepClasses();
	            }
	        },

	        select: function() {
	            this.options.selected = true;
	            this._link();
	            this._stepClasses();
	        },

	        getEnabled: function() {
	            return this.options.enabled;
	        },

	        getIndex: function() {
	            return this.options.index;
	        },

	        setPrevious: function(previous) {
	            this.options.previous = previous;
	            this._link();
	            this._stepClasses();
	        },

	        getSelectable: function() {
	            return this.options.selectable;
	        },

	        getSelected: function() {
	            return this.options.selected;
	        },

	        setValid: function(valid) {
	            if(this.options.error === valid) {
	                this.options.error = !valid;
	                this._link();
	                this._stepClasses();
	            }
	        },

	        _indicator: function() {
	            var options = this.options,
	                stepIndicator;

	            if(!!options.iconTemplate) {
	                stepIndicator = $("<span>").addClass(stepStyles.stepIndicator).attr(ARIA_HIDDEN, "true");
	                stepIndicator.append(kendo.template(options.iconTemplate)(options));
	            } else {
	                stepIndicator = kendo.template(this._indicatorTemplate)(options);
	            }

	            this.element.find(DOT + stepStyles.stepLink).append(stepIndicator);
	        },

	        _label: function() {
	            var stepLabel = kendo.template(this._labelTemplate)(this.options);
	            this.element.find(DOT + stepStyles.stepLink).append(stepLabel);
	        },

	        _link: function() {
	            var options = this.options;

	            this.element.find(DOT + stepStyles.stepLink).empty();
	            this._linkAttributes();

	            if(options.indicatorVisible) {
	                this._indicator();
	            }
	            if(options.labelVisible) {
	                this._label();
	            }
	        },

	        _linkAttributes: function() {
	            var options = this.options,
	                link = this.element.find(DOT + stepStyles.stepLink);

	            link.removeAttr(ARIA_DISABLED + SPACE + ARIA_INVALID + SPACE + ARIA_CURRENT + SPACE + TABINDEX);

	            if(!options.selected) {
	                link.attr(TABINDEX, "-1");
	            } else {
	                link.attr(ARIA_CURRENT, "true");
	            }
	            if(!options.enabled || !options.selectable) {
	                link.attr(ARIA_DISABLED, "true");
	            }
	            if(options.error) {
	                link.attr(ARIA_INVALID, "true");
	            }
	        },

	        _render: function() {
	            var stepLink = $("<a href='#'>").addClass(stepStyles.stepLink).attr("title", this.options.label);

	            this.element = $("<li>").append(stepLink);

	            this._link();
	            this._stepClasses();
	        },

	        _stepClasses: function() {
	            var options = this.options,
	                stepClasses = stepStyles.step;

	            if(options.isFirstStep){
	                stepClasses += (SPACE + stepStyles.firstStep);
	            }
	            if(options.isLastStep){
	                stepClasses += (SPACE + stepStyles.lastStep);
	            }
	            if(!options.enabled){
	                stepClasses += (SPACE + stepStyles.disabledStep);
	            }
	            if(options.error){
	                stepClasses += (SPACE + stepStyles.errorStep);
	            }
	            if(options.previous){
	                stepClasses += (SPACE + stepStyles.doneStep);
	                if(!options.error) {
	                    stepClasses += (SPACE + stepStyles.successStep);
	                }
	            } else if(options.selected) {
	                stepClasses += (SPACE + stepStyles.currentStep);
	                stepClasses += (SPACE + stepStyles.focusStep);
	            }

	            this.element.removeClass().addClass(stepClasses);
	        }
	    });

	    var Stepper = Widget.extend({
	        init: function(element, options) {
	            var that = this;

	            options = options || {};

	            Widget.fn.init.call(that, element, options);

	            that._indicatorAndLabel();

	            that._wrapper();

	            if (options.steps && options.steps.length) {
	                that._processSteps(options.steps);
	                that._progressBar();
	            }

	            that._attachEvents();

	            that._resizeHandler = kendo.onResize(function() {
	                that.resize();
	            });
	        },

	        options: {
	            orientation: "horizontal",
	            linear: true,
	            indicator: true,
	            label: true,
	            selectOnFocus: false,
	            steps: null,
	            name: "Stepper"
	        },

	        events: [ ACTIVATE, SELECT, "kendoKeydown" ],

	        destroy: function() {
	            var that = this;

	            if(that.progressBar) {
	                Widget.fn.destroy.call(that.progressBar);
	            }

	            Widget.fn.destroy.call(that);

	            kendo.unbindResize(that._resizeHandler);

	            that.wrapper.off(STEPPER);
	        },

	        setOptions: function(options) {
	            var that = this;

	            Widget.fn.setOptions.call(that, options);

	            if(that.progressBar) {
	                Widget.fn.destroy.call(that.progressBar);
	            }

	            that._indicatorAndLabel();

	            that._addStepList();

	            if (that.options.steps && that.options.steps.length) {
	                that._processSteps(that.options.steps);
	                that._progressBar();
	            }
	        },

	        enable: function(value) {
	            var steps = this.steps(),
	                stepsOptions = this.options.steps;

	            var enableStep = function(step, idx) {
	                step.enable(value);
	                stepsOptions[idx] = step.options;
	            };

	            if(value) {
	                this.wrapper.removeAttr(ARIA_DISABLED);
	            } else {
	                this.wrapper.attr(ARIA_DISABLED, "true");
	            }

	            this.progressBar.enable(value);

	            steps.forEach(enableStep);
	        },

	        insertAt: function(index, stepOptions) {
	            var steps = this.options.steps,
	                selectedStep;
	            var findSelectedStep = function(step) {
	                if(step.selected) {
	                    selectedStep = step;
	                }
	            };

	            if(!stepOptions || isNaN(index)) {
	                return;
	            }
	            if(index < 0) {
	                index = steps.length + index;
	            }
	            if(index < 0) {
	                return;
	            }
	            if(!steps) {
	                steps = [];
	            }

	            if(steps.length === 0 || index >= steps.length) {
	                index = steps.length;
	            }

	            steps.forEach(findSelectedStep);

	            if(stepOptions.selected === true) {
	                selectedStep.selected = false;
	            }

	            steps.splice(index, 0, stepOptions);

	            this._createSteps();
	            this._renderSteps();
	            this._resetProgressBar();
	            this._calculateDimensions();
	        },

	        next: function() {
	            if(!this._steps || this._steps.length <= 1) {
	                return;
	            }

	            var selectedStep = this.selectedStep;
	            var selectedIndex = selectedStep.getIndex();

	            if(selectedIndex + 1 === this._steps.length) {
	                return;
	            } else {
	                this._select(selectedIndex + 1);
	            }
	        },

	        previous: function() {
	            if(!this._steps || this._steps.length <= 1) {
	                return;
	            }

	            var selectedStep = this.selectedStep;
	            var selectedIndex = selectedStep.getIndex();

	            if(selectedIndex === 0) {
	                return;
	            } else {
	                this._select(selectedIndex - 1);
	            }
	        },

	        removeAt: function(index) {
	            var steps = this.options.steps,
	                removedStep, newSelected, newSelectedIndex;

	            if(isNaN(index) || !steps || steps.length < 2 || index >= steps.length) {
	                return;
	            }
	            if(index < 0) {
	                index = steps.length + index;
	            }
	            if(index < 0) {
	                return;
	            }

	            removedStep = steps.splice(index, 1)[0];

	            if(removedStep.selected === true && steps.length > 0) {
	                if(index > 0) {
	                    newSelectedIndex = index - 1;
	                } else {
	                    newSelectedIndex = 0;
	                }

	                newSelected = steps[newSelectedIndex];

	                if(typeof newSelected === "string") {
	                    newSelected = {
	                        label: newSelected
	                    };
	                    steps[newSelectedIndex] = newSelected;
	                }

	                newSelected.selected = true;
	                newSelected.previous = false;
	            }

	            this._createSteps();
	            this._renderSteps();
	            this._resetProgressBar();
	            this._calculateDimensions();
	        },

	        resize: function() {
	            this._calculateDimensions();
	        },

	        select: function(stepIndex) {
	            var that = this;

	            if(stepIndex === undefined || stepIndex === null || isNaN(stepIndex)) {
	                return that.selectedStep;
	            }

	            if(stepIndex >= that._steps.length || stepIndex < 0) {
	                return;
	            }

	            stepIndex = Number(stepIndex);

	            that._select(stepIndex);
	        },

	        steps: function(steps) {
	            if(steps === undefined) {
	                return this._steps;
	            }

	            this._processSteps(steps);
	            this._resetProgressBar();
	            this._calculateDimensions();
	        },

	        _processSteps: function(steps) {
	            var that = this,
	                selectedStep;
	            var findSelectedStep = function(step) {
	                if(step.selected) {
	                    selectedStep = step;
	                }
	            };

	            steps.forEach(findSelectedStep);

	            if(!selectedStep) {
	                if(typeof steps[0] === "string") {
	                    steps[0] = {
	                        label: steps[0]
	                    };
	                }
	                steps[0].selected = true;
	            }

	            that.options.steps = steps;

	            that._createSteps();
	            that._renderSteps();
	        },

	        _addStepList: function() {
	            var that = this;

	            that.wrapper.empty().append($("<ol />").addClass(stepperStyles.stepList));
	            that._stepList = that.wrapper.find(DOT + stepperStyles.stepList);

	            if(that.options.orientation === VERTICAL) {
	                that._stepList.addClass(stepperStyles.stepListVertical);
	            } else {
	                that._stepList.addClass(stepperStyles.stepListHorizontal);
	            }
	        },

	        _attachEvents: function() {
	            var that = this;

	            that.wrapper
	                .on(CLICK + STEPPER, DOT + stepStyles.step, proxy(that._selectClickHandler, that))
	                .on(CLICK + STEPPER, proxy(that._wrapperClickHandler, that))
	                .on(FOCUSOUT + STEPPER, proxy(that._focusout, that))
	                .on(KEYDOWN + STEPPER, that, proxy(that._keydown, that));
	        },

	        _calculateDimensions: function() {
	            var orientation = this.options.orientation,
	                numberOfSteps = this._steps.length,
	                stepList = this._stepList,
	                steps = stepList.find(DOT + stepStyles.step),
	                stepWidth = stepList.width() / numberOfSteps,
	                stepHeight = stepList.height() / numberOfSteps,
	                progressElement = this.progressBar.element,
	                margin = "margin-left",
	                style = {};

	            if(orientation === VERTICAL) {
	                steps.css("max-height", 100 / numberOfSteps + "%");
	                progressElement.css({
	                    "margin-top": -1 * (stepList.height() - 16),
	                    "height": stepHeight * (numberOfSteps - 1)
	                });
	            } else {
	                steps.css("max-width", 100 / numberOfSteps + "%");

	                if(kendo.support.isRtl(this.wrapper)) {
	                    margin = "margin-right";
	                }
	                style[margin] = stepWidth / 2;
	                style.width = stepWidth * (numberOfSteps - 1);

	                progressElement.css(style);
	            }
	        },

	        _createStep: function(stepOptions, idx, isLastStep) {
	            var that = this,
	                isFirstStep = idx === 0,
	                options = that.options,
	                indicatorVisible = options.indicator,
	                labelVisible = options.label;

	            stepOptions = extend({}, stepOptions, {
	                enabled: stepOptions.enabled === false ? false : true
	            });

	            stepOptions = extend({}, stepOptions, {
	                isFirstStep: isFirstStep,
	                isLastStep: isLastStep,
	                indicatorVisible: indicatorVisible,
	                labelVisible: labelVisible,
	                index: idx
	            });

	            return new Step(stepOptions);
	        },

	        _createSteps: function() {
	            var that = this,
	                stepsOptions = that.options.steps,
	                selected = false,
	                step, idx, isLastStep, stepOpt;

	            that._steps = [];

	            for (idx = 0; idx < stepsOptions.length; idx++) {
	                stepOpt = stepsOptions[idx];

	                if(typeof stepOpt === "string") {
	                    stepOpt = {
	                        label: stepOpt
	                    };
	                }

	                if (stepOpt !== undefined) {
	                    isLastStep = idx === stepsOptions.length - 1;

	                    if(stepOpt.selected) {
	                        selected = true;
	                    } else {
	                        stepOpt = that._selectablePreviousState(stepOpt, selected, idx);
	                    }

	                    step = that._createStep(stepOpt, idx, isLastStep);
	                    that._steps.push(step);

	                    if(step.getSelected()) {
	                        that.selectedStep = step;
	                    }
	                }
	            }
	        },

	        _indicatorAndLabel: function() {
	            if(!this.options.indicator && !this.options.label) {
	                this.options.indicator = true;
	                this.options.label = true;
	            }
	        },

	        _focusout: function(e) {
	            var that = this;

	            if(!that.wrapper.get(0).contains(e.relatedTarget)) {
	                setTimeout(function() {
	                    that._leaveStepper();
	                });
	            }
	        },

	        _focusStep: function(newStep) {
	            var focusedStep = this.wrapper.find(DOT + stepStyles.focusStep),
	                allStepLinks = this.wrapper.find(DOT + stepStyles.stepLink);

	            if(newStep.length > 0) {
	                focusedStep.removeClass(stepStyles.focusStep);
	                allStepLinks.attr(TABINDEX, "-1");
	                newStep.find(DOT + stepStyles.stepLink).removeAttr(TABINDEX)[0].focus();
	            }
	        },

	        _focusNextStep: function() {
	            var focusedStep = $(document.activeElement).closest(DOT + stepStyles.step),
	                nextStep = focusedStep.next();

	            this._focusStep(nextStep);
	        },

	        _focusPreviousStep: function() {
	            var focusedStep = $(document.activeElement).closest(DOT + stepStyles.step),
	                previousStep = focusedStep.prev();

	            this._focusStep(previousStep);
	        },

	        _focusFirstStep: function() {
	            var wrapper = this.wrapper,
	                firstStep = wrapper.find(DOT + stepStyles.firstStep);

	            this._focusStep(firstStep);
	        },

	        _focusLastStep: function() {
	            var wrapper = this.wrapper,
	                lastStep = wrapper.find(DOT + stepStyles.lastStep);

	            this._focusStep(lastStep);
	        },

	        _keydown: function(e) {
	            var that = this,
	                keyCode = e.keyCode,
	                focusedStepElement = $(document.activeElement).closest(DOT + stepStyles.step),
	                focusedStepIndex = focusedStepElement.index(),
	                stepsCount = that.steps().length;

	            if(keyCode === keys.TAB) {
	                if(e.shiftKey && focusedStepIndex > 0) {
	                    e.preventDefault();
	                    that._tabKey(e, -1);
	                } else if(!e.shiftKey && focusedStepIndex < stepsCount - 1) {
	                    e.preventDefault();
	                    that._tabKey(e, +1);
	                }
	            } else if(keyCode > 34 && keyCode < 41){
	                e.preventDefault();
	                that._navKeys(e);
	            } else if(keyCode === keys.ENTER || keyCode === keys.SPACEBAR) {
	                e.preventDefault();
	                that._selectHandler(e, $(document.activeElement).closest(DOT + stepStyles.step));
	            } else {
	                e.preventDefault();
	            }
	        },

	        _leaveStepper: function() {
	            var selectedStep = this.wrapper.find(DOT + stepStyles.currentStep),
	                allStepLinks = this.wrapper.find(DOT + stepStyles.stepLink);

	            allStepLinks.removeClass(stepStyles.focusStep).attr(TABINDEX, "-1");

	            selectedStep.addClass(stepStyles.focusStep);
	            selectedStep.find(DOT + stepStyles.stepLink).removeAttr(TABINDEX);
	        },

	        _navKeys: function(e) {
	            var selectOnFocus = this.options.selectOnFocus;

	            if(selectOnFocus) {
	                this._navKeysSelect(e);
	            } else {
	                this._navKeysFocus(e);
	            }
	        },

	        _navKeysFocus: function(e) {
	            var keyCode = e.keyCode,
	                rtl = kendo.support.isRtl(this.wrapper),
	                orientation = this.options.orientation;

	            switch(keyCode) {
	                case keys.DOWN:
	                    if(rtl && orientation !== VERTICAL) {
	                        this._focusPreviousStep();
	                    } else {
	                        this._focusNextStep();
	                    }
	                    break;
	                case keys.RIGHT:
	                    if(rtl) {
	                        this._focusPreviousStep();
	                    } else {
	                        this._focusNextStep();
	                    }
	                    break;
	                case keys.UP:
	                    if(rtl && orientation !== VERTICAL) {
	                        this._focusNextStep();
	                    } else {
	                        this._focusPreviousStep();
	                    }
	                    break;
	                case keys.LEFT:
	                    if(rtl) {
	                        this._focusNextStep();
	                    } else {
	                        this._focusPreviousStep();
	                    }
	                    break;
	                case keys.HOME:
	                    this._focusFirstStep();
	                    break;
	                case keys.END:
	                    this._focusLastStep();
	                    break;
	            }
	        },

	        _navKeysSelect: function(e) {
	            var keyCode = e.keyCode,
	                focusedStepIndex = $(document.activeElement).closest(DOT + stepStyles.step).index(),
	                rtl = kendo.support.isRtl(this.wrapper),
	                steps = this.steps(),
	                orientation = this.options.orientation,
	                targetStep;

	            switch(keyCode) {
	                case keys.DOWN:
	                    if(rtl && orientation !== VERTICAL) {
	                        targetStep = steps[focusedStepIndex - 1];
	                    } else {
	                        targetStep = steps[focusedStepIndex + 1];
	                    }
	                    break;
	                case keys.RIGHT:
	                    if(rtl) {
	                        targetStep = steps[focusedStepIndex - 1];
	                    } else {
	                        targetStep = steps[focusedStepIndex + 1];
	                    }
	                    break;
	                case keys.UP:
	                    if(rtl && orientation !== VERTICAL) {
	                        targetStep = steps[focusedStepIndex + 1];
	                    } else {
	                        targetStep = steps[focusedStepIndex - 1];
	                    }
	                    break;
	                case keys.LEFT:
	                    if(rtl) {
	                        targetStep = steps[focusedStepIndex + 1];
	                    } else {
	                        targetStep = steps[focusedStepIndex - 1];
	                    }
	                    break;
	                case keys.HOME:
	                    targetStep = steps[0];
	                    break;
	                case keys.END:
	                    targetStep = steps[steps.length - 1];
	                    break;
	            }

	            if(targetStep) {
	                this._focusStep(targetStep.element);
	                this._selectHandlerOnKey(e, targetStep.element);
	            }
	        },

	        _progressBar: function() {
	            var wrapper = this.wrapper,
	                progressBarOptions = this._progressOptions();

	            this.progressBar = $("<div>").kendoProgressBar(progressBarOptions).getKendoProgressBar();
	            this.progressBar.element.addClass("k-pos-absolute k-overflow-hidden");

	            // TODO: for 2021 R2 the following line must be removed!
	            this.progressBar.element.css("position", "absolute");

	            this._calculateDimensions();

	            wrapper.append(this.progressBar.element);
	        },

	        _progressOptions: function() {
	            var options = this.options,
	                orientation = options.orientation,
	                stepsOptions = options.steps,
	                numberOfSteps, progressBarOptions;

	            if(!stepsOptions || stepsOptions.length === 0) {
	                return;
	            } else {
	                numberOfSteps = stepsOptions.length;
	            }

	            progressBarOptions = {
	                max: numberOfSteps - 1,
	                value: this.select().getIndex(),
	                orientation: orientation,
	                showStatus: false
	            };

	            if(orientation === VERTICAL) {
	                progressBarOptions.reverse = true;
	            }

	            return progressBarOptions;
	        },

	        _resetProgressBar: function() {
	            var progressBar = this.progressBar,
	                newOptions;

	            if(!progressBar) {
	                return;
	            }

	            newOptions = this._progressOptions();
	            progressBar.setOptions(newOptions);
	        },

	        _renderSteps: function() {
	            var steps = this._steps,
	                stepsList = this._stepList,
	                step, idx;

	            stepsList.empty();

	            for (idx = 0; idx < steps.length; idx++) {
	                step = steps[idx];
	                stepsList.append(step.element);
	            }
	        },

	        _resetStep: function(i, index, forward) {
	            var step = this._steps[i];

	            if(!forward && i < index) {
	                step.options.selectable = true;
	            } else if(i === index) {
	                step.options.previous = false;
	                step.options.selected = true;
	                step.options.selectable = true;
	            } else if (forward && i > index) {
	                step.options.selectable = true;
	            } else {
	                step.options.selected = false;
	                step.options.previous = forward;
	            }

	            if(this.options.linear && (i < index - 1 || i > index + 1)) {
	                step.options.selectable = false;
	            }

	            step._link();
	            step._stepClasses();
	            this.options.steps[i] = step.options;
	        },

	        _select: function(index) {
	            var options = this.options,
	                linear = options.linear,
	                selectedStep = this.select(),
	                selectedIndex = selectedStep.getIndex(),
	                stepsOptions = options.steps,
	                targetStep = this._steps[index],
	                forward, i, min, max;

	            if(!targetStep || !targetStep.getEnabled()) {
	                return;
	            }

	            if(index > selectedIndex) {
	                forward = true;

	                if(linear) {
	                    min = Math.max(selectedIndex - 1, 0);
	                    max = Math.min(index + 1, stepsOptions.length - 1);
	                } else {
	                    min = selectedIndex;
	                    max = index;
	                }
	            } else {
	                forward = false;

	                if(linear) {
	                    min = Math.max(index - 1, 0);
	                    max = Math.min(selectedIndex + 1, stepsOptions.length - 1);
	                } else {
	                    min = index;
	                    max = selectedIndex;
	                }
	            }

	            for(i = min; i <= max; i ++) {
	                this._resetStep(i, index, forward);
	            }

	            this.selectedStep = targetStep;
	            this.progressBar.value(index);
	        },

	        _selectablePreviousState: function(stepOpt, selected, idx) {
	            var stepsOptions = this.options.steps,
	                linear = this.options.linear;

	            if(!selected) {
	                stepOpt.previous = true;
	                if(linear && !stepsOptions[idx + 1].selected) {
	                    stepOpt.selectable = false;
	                } else {
	                    stepOpt.selectable = true;
	                }
	            } else if(linear && !stepsOptions[idx - 1].selected) {
	                stepOpt.selectable = false;
	            } else {
	                stepOpt.selectable = true;
	            }

	            return stepOpt;
	        },

	        _selectClickHandler: function(e) {
	            var stepElement = $(e.target).closest(DOT + stepStyles.step);

	            e.preventDefault();
	            this._preventWrapperClick = true;
	            this._selectHandler(e, stepElement);
	        },

	        _selectHandler: function(e, stepElement) {
	            var that = this,
	                step = that._steps[stepElement.index()],
	                currentStep = this.select();

	            if(!step || step.getIndex() === currentStep.getIndex() || !step.getEnabled() || !step.getSelectable()) {
	                that._focusStep(currentStep.element);

	                return;
	            }

	            if(!that.trigger(SELECT, { sender: that, originalEvent: e, step: step})) {
	                that._select(step.getIndex());
	                stepElement.find(DOT + stepStyles.stepLink)[0].focus();
	                that.trigger(ACTIVATE, { sender: that, originalEvent: e, step: step});
	            }
	        },

	        _selectHandlerOnKey: function(e, stepElement) {
	            var that = this,
	                step = that._steps[stepElement.index()];

	            if(!step.getEnabled() || !step.getSelectable()) {
	                return;
	            }

	            if(!that.trigger(SELECT, { sender: that, originalEvent: e, step: step})) {
	                that._select(step.getIndex());
	                stepElement.find(DOT + stepStyles.stepLink)[0].focus();
	                that.trigger(ACTIVATE, { sender: that, originalEvent: e, step: step});
	            }
	        },

	        _tabKey: function(e, shift) {
	            var selectOnFocus = this.options.selectOnFocus,
	                focusedStepElement = $(document.activeElement).closest(DOT + stepStyles.step),
	                focusedStepIndex = focusedStepElement.index(),
	                targetStep = $(focusedStepElement.parent().find(DOT + stepStyles.step)[focusedStepIndex + shift]);

	            this._focusStep(targetStep);

	            if(selectOnFocus) {
	                this._selectHandlerOnKey(e, targetStep);
	            }
	        },

	        _wrapper: function() {
	            var that = this,
	                element = that.element;

	            that.wrapper = element;
	            that.wrapper.addClass(stepperStyles.widget);

	            if(that.options.linear) {
	                that.wrapper.addClass(stepperStyles.stepperLinear);
	            }

	            this._addStepList();
	        },

	        _wrapperClickHandler: function(e) {
	            var currentStep = this.select();

	            if(!this._preventWrapperClick) {
	                e.preventDefault();
	                this._focusStep(currentStep.element);
	            } else {
	                this._preventWrapperClick = false;
	            }
	        }
	    });

	    kendo.stepper = {
	        Step: Step
	    };

	    kendo.ui.plugin(Stepper);

	})(window.kendo.jQuery);

	return window.kendo;

	}, __webpack_require__(3));

/***/ })

/******/ });