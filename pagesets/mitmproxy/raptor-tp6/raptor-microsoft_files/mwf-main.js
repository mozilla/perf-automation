var mwf =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7), __webpack_require__(8), __webpack_require__(12), __webpack_require__(13), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(22), __webpack_require__(20), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(30), __webpack_require__(31), __webpack_require__(32), __webpack_require__(33), __webpack_require__(35), __webpack_require__(1), __webpack_require__(36), __webpack_require__(37), __webpack_require__(38), __webpack_require__(41), __webpack_require__(42), __webpack_require__(44), __webpack_require__(40), __webpack_require__(45), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49), __webpack_require__(51), __webpack_require__(50), __webpack_require__(52), __webpack_require__(9), __webpack_require__(53), __webpack_require__(54), __webpack_require__(55), __webpack_require__(56), __webpack_require__(11), __webpack_require__(57)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, actionBar_1, actionToggle_1, alert_1, autosuggest_1, backToTop_1, button_1, carousel_1, checkbox_1, sequenceIndicator_1, choiceSummary_1, combo_1, compareChart_1, contentToggle_1, dateTimePicker_1, deviceActions_1, dialog_1, drawer_1, file_1, flyout_1, heroItem_1, immersiveHeroItem_1, inPageNavigation_1, mosaicPlacement_1, multiFeature_1, pageBar_1, pageBehaviors_1, pagination_1, pivot_1, productPlacement_1, refineMenu_1, refineItem_1, select_1, selectButton_1, selectMenu_1, slider_1, componentFactory_1, social_1, supplementalNavigation_1, table_1, toggle_1, tooltip_1, video_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    __export(actionBar_1);
	    __export(actionToggle_1);
	    __export(alert_1);
	    __export(autosuggest_1);
	    __export(backToTop_1);
	    __export(button_1);
	    __export(carousel_1);
	    __export(checkbox_1);
	    __export(sequenceIndicator_1);
	    __export(choiceSummary_1);
	    __export(combo_1);
	    __export(compareChart_1);
	    __export(contentToggle_1);
	    __export(dateTimePicker_1);
	    __export(deviceActions_1);
	    __export(dialog_1);
	    __export(drawer_1);
	    __export(file_1);
	    __export(flyout_1);
	    __export(heroItem_1);
	    __export(immersiveHeroItem_1);
	    __export(inPageNavigation_1);
	    __export(mosaicPlacement_1);
	    __export(multiFeature_1);
	    __export(pageBar_1);
	    __export(pageBehaviors_1);
	    __export(pagination_1);
	    __export(pivot_1);
	    __export(productPlacement_1);
	    __export(refineMenu_1);
	    __export(refineItem_1);
	    __export(select_1);
	    __export(selectButton_1);
	    __export(selectMenu_1);
	    __export(slider_1);
	    __export(componentFactory_1);
	    __export(social_1);
	    __export(supplementalNavigation_1);
	    __export(table_1);
	    __export(toggle_1);
	    __export(tooltip_1);
	    __export(video_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, hero_item_base_1, htmlExtensions_1) {
	    "use strict";
	    /**
	    * @class ImmersiveHeroItem
	    * @description - The Immersive Hero Item module
	    * @export
	    */
	    var ImmersiveHeroItem = (function (_super) {
	        __extends(ImmersiveHeroItem, _super);
	        /**
	        * @name - constructor
	        * @memberof ImmersiveHeroItem
	        * @description - Constructor for the ImmersiveHeroItem class.
	        * @param {HTMLElement} immersiveHeroItemElement - The native element to attach the ImmersiveHeroItem behavior to.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function ImmersiveHeroItem(immersiveHeroItemElement, params) {
	            var _this = this;
	            if (params === void 0) { params = null; }
	            _super.call(this, immersiveHeroItemElement, params);
	            this.immersiveHeroItemElement = immersiveHeroItemElement;
	            /**
	            * @name - handleWindowEvent
	            * @memberof ImmersiveHeroItem
	            * @description - calls a function to resize the image
	            * @private
	            * @returns {void}
	            */
	            this.handleWindowEvent = function () {
	                _this.resizeImage();
	                // checking to see if the width of the window has changed
	                // certain mobile devices were performing resize on scroll events when it had not
	                if (_this.windowWidth !== window.innerWidth) {
	                    _this.windowWidth = window.innerWidth;
	                }
	            };
	        }
	        /**
	        * @name - update
	        * @memberof ImmersiveHeroItem
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @override
	        * @returns {boolean}
	        */
	        ImmersiveHeroItem.prototype.update = function () {
	            if (!_super.prototype.update.call(this)) {
	                return false;
	            }
	            this.image = htmlExtensions_1.selectFirstElement(ImmersiveHeroItem.imageSelector, this.immersiveHeroItemElement);
	            this.title = htmlExtensions_1.selectFirstElement(ImmersiveHeroItem.titleSelector, this.immersiveHeroItemElement);
	            this.isTopAligned = htmlExtensions_1.hasClass(this.immersiveHeroItemElement, 'f-align-top');
	            this.windowWidth = window.innerWidth;
	            if (!this.image) {
	                this.handleTextOnly();
	            }
	            else {
	                this.resizeImage();
	                this.resizeThrottledEvent = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.resize, this.handleWindowEvent, 50);
	            }
	        };
	        /**
	        * @name - teardown
	        * @memberof ImmersiveHeroItem
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        ImmersiveHeroItem.prototype.teardown = function () {
	            _super.prototype.teardown.call(this);
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.resize, this.resizeThrottledEvent);
	            // Reset non static members
	            this.image = null;
	            this.sectionHeight = null;
	            this.title = null;
	            this.titleHeight = null;
	            this.isTopAligned = null;
	        };
	        /**
	        * @name - handleTextOnly
	        * @memberof ImmersiveHeroItem
	        * @description - handles text alignment if image is missing from bottom aligned option
	        * @private
	        * @returns {void}
	        */
	        ImmersiveHeroItem.prototype.handleTextOnly = function () {
	            if (!this.isTopAligned && this.title.parentElement) {
	                var titleWrapper = this.title.parentElement;
	                htmlExtensions_1.css(titleWrapper, 'top', 'auto');
	                htmlExtensions_1.css(titleWrapper, 'bottom', '0px');
	            }
	        };
	        /**
	        * @name - resizeImage
	        * @memberof ImmersiveHeroItem
	        * @description - resizes the image based on breakpoints
	        * @private
	        * @returns {void}
	        */
	        ImmersiveHeroItem.prototype.resizeImage = function () {
	            if (!this.immersiveHeroItemElement || !this.title || !this.image) {
	                return;
	            }
	            var elementRect = htmlExtensions_1.getClientRect(this.immersiveHeroItemElement);
	            var titleRect = htmlExtensions_1.getClientRect(this.title);
	            var top = this.isTopAligned ? titleRect.top - elementRect.top : htmlExtensions_1.getClientRect(this.image).top - elementRect.top;
	            this.titleHeight = titleRect.height + top;
	            this.sectionHeight = elementRect.height;
	            var imageHeight = this.sectionHeight - this.titleHeight + 'px';
	            htmlExtensions_1.css(this.image, 'height', imageHeight);
	        };
	        /**
	        * @name - onCollectionItemHidden
	        * @memberof - ImmersiveHeroItem
	        * @description - This is our implementation of ICollectionItem.onCollectionItemHidden()
	        *                It's called when this item is hidden by its containing carousel, if any.
	        * @public
	        * @returns {void}
	        */
	        ImmersiveHeroItem.prototype.onCollectionItemHidden = function () {
	            // We don't need to do anything when this item is hidden.
	        };
	        /**
	        * @name - onCollectionItemShown
	        * @memberof - ImmersiveHeroItem
	        * @description - This is our implementation of ICollectionItem.onCollectionItemShown()
	        *                It's called when this item is shown by its containing carousel, if any.
	        * @public
	        * @returns {void}
	        */
	        ImmersiveHeroItem.prototype.onCollectionItemShown = function () {
	            // Our images are initialized with a height of zero so we need to resize them when they are shown.
	            this.resizeImage();
	        };
	        /**
	        * @name - selector
	        * @memberof ImmersiveHeroItem
	        * @description - Selector to use to find ImmersiveHeroItem components in the document.
	        * @public
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        ImmersiveHeroItem.selector = '.m-immersive-hero-item';
	        /**
	        * @name - titleSelector
	        * @memberof ImmersiveHeroItem
	        * @description - The title area selector
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        ImmersiveHeroItem.titleSelector = 'div > div';
	        /**
	        * @name - imageSelector
	        * @memberof ImmersiveHeroItem
	        * @description - The optional foreground image selector
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        ImmersiveHeroItem.imageSelector = 'div > .c-image > img';
	        return ImmersiveHeroItem;
	    }(hero_item_base_1.HeroItemBase));
	    exports.ImmersiveHeroItem = ImmersiveHeroItem;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="hero-item-base"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(6), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, publisher_1, htmlExtensions_1, stringExtensions_1) {
	    "use strict";
	    /**
	    * @class HeroItemBase
	    * @classdesc - The abstract HeroItemBase class which other xxxHeroItem classes extend to
	    * inherit common behavior like sloppy click support.
	    * @export
	    */
	    var HeroItemBase = (function (_super) {
	        __extends(HeroItemBase, _super);
	        /**
	        * @name - constructor
	        * @memberof HeroItemBase
	        * @description - Constructor for the HeroItem component.
	        * @public
	        * @param {HTMLElement} heroItemBaseElement - the native element to attach the HeroItemBase behavior to.
	        * @param {any} params- The parameter object with the class name to match against the MWF class
	        *                      attribute value to determine whether or not to initialize this element
	        *                      in the scope of the currently active constructor class hierarchy.
	        */
	        function HeroItemBase(heroItemBaseElement, params) {
	            var _this = this;
	            _super.call(this, heroItemBaseElement, params);
	            this.heroItemBaseElement = heroItemBaseElement;
	            /**
	            * @name - initialized
	            * @memberof HeroItemBase
	            * @description - Indicates whether or not the HeroItemBase initialization has completed.
	            *                This is usefull for test code to determine when the HeroItem is testable.
	            * @private
	            * @type {boolean}
	            */
	            this.initialized = false;
	            /**
	            * @name - handleValidUserInteraction
	            * @memberof HeroItemBase
	            * @description - actions to take when a valid user interaction occurs (a regular click or touch "tap")
	            * @private
	            * @param {MouseEvent} event - The mouse event
	            * @param {HTMLElement} target - The element clicked on (this parameter is useful for unit testing)
	            * @returns {void}
	            */
	            this.handleValidUserInteraction = function (event, target) {
	                // If we don't have a valid target that's not one of our calls to action do nothing.
	                if (!target ||
	                    (_this.callsToAction.indexOf(target) !== -1) ||
	                    (_this.callsToAction.indexOf(target.parentElement) !== -1)) {
	                    return;
	                }
	                // Check for valid href one more time so we don't publish when navigation won't happen.
	                if (!_this.verifyCallToAction()) {
	                    // This should only happen if someone removes the href post update()
	                    _this.heroItemBaseElement.removeAttribute(HeroItemBase.dataJsHref);
	                    return;
	                }
	                if (!_this.heroItemBaseElement.hasAttribute(HeroItemBase.dataJsHref)) {
	                    _this.heroItemBaseElement.setAttribute(HeroItemBase.dataJsHref, _this.callsToAction[0].href);
	                }
	                // When the click was somewhere within the HeroItem but not on any of its call-to-actions see
	                // if we have any subscribers that would like to act on it, otherwise do our default action.
	                var notification = { preventDefault: false, event: event, targetElement: target, targetUri: _this.callsToAction[0].href };
	                _this.preventDefaultClickAction = false;
	                _this.initiatePublish(notification);
	                if (!_this.preventDefaultClickAction) {
	                    // Either we have no subscribers or one or more of our subscribers wished to prevent our
	                    // default action of navigating to the href of the first call-to-action.
	                    htmlExtensions_1.stopPropagation(event);
	                    _this.navigateToUrl(_this.callsToAction[0].href);
	                }
	                else {
	                    _this.preventDefaultClickAction = false;
	                }
	            };
	            /**
	            * @name - handleMouseAndTouchStart
	            * @memberof HeroItemBase
	            * @description - records the starting coordinates for a mouse or touch event
	            * @private
	            * @param {MouseEvent} event - The mouse event
	            * @returns {void}
	            */
	            this.handleMouseAndTouchStart = function (event) {
	                _this.startCoordinates = htmlExtensions_1.getCoordinates(event);
	            };
	            /**
	            * @name - handleMouseAndTouchEnd
	            * @memberof HeroItemBase
	            * @description - Handles the mouseup event.
	            * @private
	            * @param {MouseEvent} event - The mouse event
	            * @returns {void}
	            */
	            this.handleMouseAndTouchEnd = function (event) {
	                _this.determineIfValidUserInteraction(event, _this.heroItemBaseElement);
	            };
	            if (!observableComponent_1.ObservableComponent.shouldInitializeAsClass(heroItemBaseElement, params)) {
	                return;
	            }
	            htmlExtensions_1.SafeBrowserApis.requestAnimationFrame.call(window, function () { return _this.update(); });
	        }
	        /**
	        * @name - update
	        * @memberof HeroItemBase
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @override
	        * @returns {boolean}
	        */
	        HeroItemBase.prototype.update = function () {
	            if (!this.heroItemBaseElement) {
	                return false;
	            }
	            this.callsToAction = htmlExtensions_1.selectElementsT(this.constructor.callToActionSelector, this.heroItemBaseElement);
	            this.addEventListeners();
	            this.initialized = true;
	            return true;
	        };
	        /**
	        * @name - teardown
	        * @memberof HeroItemBase
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        HeroItemBase.prototype.teardown = function () {
	            this.removeEventListeners();
	            this.initialized = false;
	        };
	        /**
	        * @name - publish
	        * @memberof HeroItemBase
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @override
	        * @param {IHeroItemSubscriber} subscriber - The subscriber to make the callback to.
	        * @param {any} [context] - The publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        HeroItemBase.prototype.publish = function (subscriber, context) {
	            if (subscriber.onHeroItemClicked) {
	                subscriber.onHeroItemClicked(context);
	                this.preventDefaultClickAction = this.preventDefaultClickAction || context.preventDefault;
	            }
	        };
	        /**
	        * @name - addEventListeners
	        * @memberof HeroItemBase
	        * @description - Add the event listeners for the sloppy click support.
	        * @private
	        * @returns {void}
	        */
	        HeroItemBase.prototype.addEventListeners = function () {
	            if (this.verifyCallToAction()) {
	                this.heroItemBaseElement.setAttribute(HeroItemBase.dataJsHref, this.callsToAction[0].href);
	                htmlExtensions_1.addEvent(this.heroItemBaseElement, htmlExtensions_1.eventTypes.mousedown, this.handleMouseAndTouchStart);
	                htmlExtensions_1.addEvent(this.heroItemBaseElement, htmlExtensions_1.eventTypes.mouseup, this.handleMouseAndTouchEnd);
	            }
	        };
	        /**
	        * @name - removeEventListeners
	        * @memberof HeroItemBase
	        * @description - Remove the event listeners for the sloppy click support.
	        * @private
	        * @returns {void}
	        */
	        HeroItemBase.prototype.removeEventListeners = function () {
	            htmlExtensions_1.addEvent(this.heroItemBaseElement, htmlExtensions_1.eventTypes.mousedown, this.handleMouseAndTouchStart);
	            htmlExtensions_1.addEvent(this.heroItemBaseElement, htmlExtensions_1.eventTypes.mouseup, this.handleMouseAndTouchEnd);
	        };
	        /**
	        * @name - determineIfValidUserInteraction
	        * @memberof HeroItemBase
	        * @description - Determines if the user interaction is valid for activating the call-to-action
	        * @private
	        * @param {MouseEvent} event - The mouse event
	        * @param {HTMLElement} target - The element clicked on (this parameter is useful for unit testing)
	        * @returns {void}
	        */
	        HeroItemBase.prototype.determineIfValidUserInteraction = function (event, target) {
	            var startCoordinates = this.startCoordinates;
	            var endCoordinates = htmlExtensions_1.getCoordinates(event);
	            var buttonCode = event.which || event.button;
	            // left-mouse button is code 1 -- ignore any other code for middle-mouse button, right-mouse button, etc.
	            if (buttonCode === 1 && startCoordinates && endCoordinates && !this.isSwipe(startCoordinates, endCoordinates)) {
	                this.handleValidUserInteraction(event, target);
	            }
	        };
	        /**
	         * @name - isSwipe
	         * @memberof HeroItemBase
	         * @description - Determines whether the event should be considered a swipe event
	         * @private
	         * @param {Coordinate} startCoordinates - The starting coordinates of the event chord
	         * @param {Coordinate} endCoordinates - The ending coordinates of the event chord
	         * @returns {boolean} - true if the event should be considered a swipe event, otherwise false
	         */
	        HeroItemBase.prototype.isSwipe = function (startCoordinates, endCoordinates) {
	            if (!startCoordinates || !endCoordinates) {
	                return false;
	            }
	            var deltaY = Math.abs(endCoordinates.y - startCoordinates.y);
	            var deltaX = Math.abs(endCoordinates.x - startCoordinates.x);
	            return deltaX > HeroItemBase.minimumSwipeDistance ||
	                deltaY > HeroItemBase.minimumSwipeDistance;
	        };
	        /**
	        * @name - navigateToUrl
	        * @memberof HeroItemBase
	        * @description - Navigates to the given url.
	        *                This separate method exists so jasmine spies can intercept it can circumvent the navigation during testing.
	        * @private
	        * @param {string} url - The destination url
	        * @returns {void}
	        */
	        HeroItemBase.prototype.navigateToUrl = function (url) {
	            if (!stringExtensions_1.isNullOrWhiteSpace(url)) {
	                location.href = url;
	            }
	        };
	        /**
	        * @name - verifyCallToAction
	        * @memberof HeroItemBase
	        * @description - Verifies the Hero Item has at least one Call To Action AND the first CTA has a hyperlink
	        * @private
	        * @returns {boolean} - true if the Hero Item has at least one Call to Action AND the first CTA has a hyperlink, else false
	        */
	        HeroItemBase.prototype.verifyCallToAction = function () {
	            return this.callsToAction && this.callsToAction.length && !stringExtensions_1.isNullOrWhiteSpace(this.callsToAction[0].href);
	        };
	        /**
	        * @name - dataJsHref
	        * @memberof HeroItemBase
	        * @description - The attribute name to populate to indicate js-href clickability
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        HeroItemBase.dataJsHref = 'data-js-href';
	        /**
	        * @name - minimumSwipeDistance
	        * @memberof HeroItemBase
	        * @description - The number of pixels a pointer, mouse, or touch chord must traverse to be considered a valid swipe
	        * @private
	        * @static
	        * @readonly
	        * @type {number}
	        */
	        HeroItemBase.minimumSwipeDistance = 30;
	        /**
	        * @name - callToActionSelector
	        * @memberof HeroItemBase
	        * @description - The CSS selector for the Call To Action anchor tags
	        * @protected
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        HeroItemBase.callToActionSelector = 'a.c-call-to-action';
	        return HeroItemBase;
	    }(publisher_1.Publisher));
	    exports.HeroItemBase = HeroItemBase;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1) {
	    "use strict";
	    /**
	    * @class - ObservableComponent
	    * @classdesc - An abstract base class for all observable components.
	    *              All inhertied classes should implement setup, update and teardown.
	    *              Observable Components will use MutationObserver browser API that is supported in all modern browsers.
	    *              For older browsers (IE10, IE9), it uses MutationEvents.
	    *              To live with the performance issue of MutationEvents, it uses debouncing of events.
	    *              Currently IE8 is not supported. This scenario may not be needed for IE8 because
	    *              it's targeted more towards SPA pages and Ajax heavy pages.
	    *              If IE8 support needed, there are polyfills that we can consider.
	    * @export
	    * @abstract
	    */
	    var ObservableComponent = (function () {
	        /**
	        * @name - constructor
	        * @memberof - ObservableComponent
	        * @description - Constructor for the ObservableComponent.
	        * @param {HTMLElement} element - The native element to observe.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function ObservableComponent(element, params) {
	            if (params === void 0) { params = null; }
	            this.element = element;
	            /**
	            * @name - ignoreNextDOMChange
	            * @memberof - ObservableComponent
	            * @description - The value indicating whether we should ignore the next set of DOM changes.
	            *                We use this to ignore DOM changes we are causing ourselves when we update the page.
	            *                NOTE: This is only used for modern mutations, and should be removed when we have a better solution.
	            * @protected
	            * @type {boolean}
	            */
	            this.ignoreNextDOMChange = false;
	            if (ObservableComponent.shouldInitializeAsClass(element, params)) {
	                this.setObserver();
	            }
	        }
	        /**
	        * @name - unObserve
	        * @memberof - ObservableComponent
	        * @description - stop observing an element.
	        * @protected
	        */
	        ObservableComponent.prototype.unObserve = function () {
	            if (this.modernObserver) {
	                this.modernObserver.disconnect();
	            }
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.DOMNodeInserted, this.obsoleteNodeInsertedEventHander);
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.DOMNodeRemoved, this.obsoleteNodeRemovedEventHandler);
	        };
	        /**
	        * @name - setObserver
	        * @memberof - ObservableComponent
	        * @description - Sets proper observer based on a browser.
	        * @private
	        * @returns {void}
	        */
	        ObservableComponent.prototype.setObserver = function () {
	            // Chrome, FF, IE 11+, Opera, Safari (with webkit prefix)
	            // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
	            if (typeof ObservableComponent.mutationObserver !== 'undefined') {
	                this.observeModern();
	            }
	            else if ('MutationEvent' in window) {
	                this.observeObsolete();
	            }
	            else {
	            }
	        };
	        /**
	        * @name - observeModern
	        * @memberof - ObservableComponent
	        * @description - Uses MutationObserver for modern browsers to call update or teardown methods
	        *                if a node is added or removed in a component container.
	        * @private
	        * @returns {void}
	        */
	        ObservableComponent.prototype.observeModern = function () {
	            var _this = this;
	            // todo - bruk - need to revisit this config based on the need of watching for other changes.
	            var observerConfig = {
	                childList: true,
	                subtree: true
	            };
	            this.modernObserver = new MutationObserver(function (mutations) { _this.onModernMutations(mutations); });
	            this.modernObserver.observe(this.element, observerConfig);
	        };
	        /**
	        * @name - onModernMutations
	        * @memberof - ObservableComponent
	        * @description - Handle the modern observer's mutation event.
	        * @private
	        * @param {MutationRecord[]} mutations - The list of mutation records to process.
	        * @returns {void}
	        */
	        ObservableComponent.prototype.onModernMutations = function (mutations) {
	            if (this.ignoreNextDOMChange) {
	                this.ignoreNextDOMChange = false;
	                return;
	            }
	            var needToTeardown = false;
	            var needToUpdate = false;
	            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
	                var mutation = mutations_1[_i];
	                // Make calls based on nodes added to the DOM
	                for (var index = 0, length_1 = mutation.addedNodes.length; index < length_1; index++) {
	                    // NodeType 1 is an Element node
	                    // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
	                    if (mutation.addedNodes[index].nodeType === 1) {
	                        // Something was added, call update.
	                        needToTeardown = true;
	                        needToUpdate = true;
	                    }
	                }
	                // Make calls based on nodes removed from the DOM
	                for (var index = 0, length_2 = mutation.removedNodes.length; index < length_2; index++) {
	                    // NodeType 1 is an Element node
	                    // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
	                    if (mutation.removedNodes[index].nodeType === 1) {
	                        needToTeardown = true;
	                        // If the whole component wasn't deleted call update.
	                        if (mutation.removedNodes[index] !== this.element) {
	                            needToUpdate = true;
	                        }
	                    }
	                }
	            }
	            if (needToTeardown) {
	                this.teardown();
	            }
	            if (needToUpdate) {
	                this.update();
	            }
	        };
	        /**
	        * @name - observeObsolete
	        * @memberof - ObservableComponent
	        * @description - Add mutation event listeners for older browsers to call update or teardown methods
	        *                if a node is added or removed in a component's DOM.
	        * @private
	        * @returns {void}
	        */
	        ObservableComponent.prototype.observeObsolete = function () {
	            var _this = this;
	            this.obsoleteNodeInsertedEventHander = htmlExtensions_1.addDebouncedEvent(this.element, htmlExtensions_1.eventTypes.DOMNodeInserted, function () {
	                _this.onObsoleteNodeInserted();
	            });
	            this.obsoleteNodeRemovedEventHandler = htmlExtensions_1.addDebouncedEvent(this.element, htmlExtensions_1.eventTypes.DOMNodeRemoved, function (event) {
	                _this.onObsoleteNodeRemoved(event);
	            });
	        };
	        /**
	        * @name - onObsoleteNodeInserted
	        * @memberof - ObservableComponent
	        * @description - Handle the obsolete observer's node inserted event.
	        * @private
	        * @returns {void}
	        */
	        ObservableComponent.prototype.onObsoleteNodeInserted = function () {
	            if (this.ignoreNextDOMChange) {
	                return;
	            }
	            // A node was inserted into the component's DOM so we need to tear it down and reconstruct it.
	            this.teardown();
	            this.update();
	        };
	        /**
	        * @name - onObsoleteNodeRemoved
	        * @memberof - ObservableComponent
	        * @description - Handle the obsolete observer's node removed event.
	        * @private
	        * @param {any} event - The node removed event.
	        * @returns {void}
	        */
	        ObservableComponent.prototype.onObsoleteNodeRemoved = function (event) {
	            if (this.ignoreNextDOMChange) {
	                return;
	            }
	            // Call the component teardown method because either all or some portion of the component was removed.
	            this.teardown();
	            // If the whole component wasn't deleted call its update method.
	            if (htmlExtensions_1.getEventTargetOrSrcElement(event) !== this.element) {
	                this.update();
	            }
	        };
	        /**
	        * @name - shouldInitializeAsClass
	        * @memberof - ObservableComponent
	        * @description - Determines whether or not this element should be initialized as the specified class.
	        * @public
	        * @static
	        * @param {HTMLElement} element - The element to check the class suitability for.
	        * @param {any} params- The parameter object with the class name to match against the MWF class
	        *                      attribute value to determine whether or not to initialize this element
	        *                      in the scope of the currently active constructor class hierarchy.
	        * @returns {boolean}
	        */
	        ObservableComponent.shouldInitializeAsClass = function (element, params) {
	            var mwfClass = !element ? null : element.getAttribute(ObservableComponent.mwfClassAttribute);
	            // This jsInit code is just for backwards compatibility, it is deprecated and can be removed in v2.
	            var jsInit = !element ? null : element.getAttribute(ObservableComponent.initializeAttribute);
	            if (jsInit === 'false') {
	                return false;
	            }
	            // End of backwards compatibility for deprecated jsInit attribute.
	            return !!element && (!mwfClass || (!!params && (mwfClass === params.mwfClass)));
	        };
	        /**
	        * @name - mwfClassAttribute
	        * @memberof - ObservableComponent
	        * @description - The MWF class attribute name. This indicates which MWF class to use with the element markup.
	        * @protected
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        ObservableComponent.mwfClassAttribute = 'data-mwf-class';
	        /**
	        * @name - initializeAttribute
	        * @memberof - ObservableComponent
	        * @description - initialize attribute name.
	        *                This data-js-initialize code is just for backwards compatibility, it is deprecated and can be removed in v2.
	        * @protected
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        ObservableComponent.initializeAttribute = 'data-js-initialize';
	        /**
	        * @name - mutationObserver
	        * @memberof - ObservableComponent
	        * @description - A reference to the browsers MutationObserver, if any.
	        * @private
	        * @static
	        * @type {boolean}
	        */
	        // Check MutationObserver
	        ObservableComponent.mutationObserver = window.MutationObserver
	            || window.WebKitMutationObserver
	            || window.MozMutationObserver;
	        return ObservableComponent;
	    }());
	    exports.ObservableComponent = ObservableComponent;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, stringExtensions_1) {
	    "use strict";
	    /********************************* Safe browser APIs  ***********************************/
	    /* If this module growing big, consider to put in its own file. *************************/
	    /**
	     * @name - SafeBrowserApis
	     * A module to have browser apis in a safe manner.
	     * If an API supported return, otherwise have a fallback.
	     */
	    var SafeBrowserApis;
	    (function (SafeBrowserApis) {
	        // Usage:
	        // requestAnimationFrame should be called in window context.
	        // requestAnimationFrame.call(window, function() { / * doing something * /}
	        SafeBrowserApis.requestAnimationFrame = window.requestAnimationFrame || function (callback) {
	            // check for function to ensure requestAnimationFrame doesn't act like eval
	            if (typeof callback === 'function') {
	                window.setTimeout(callback, 16.7);
	            }
	        };
	    })(SafeBrowserApis = exports.SafeBrowserApis || (exports.SafeBrowserApis = {}));
	    /********************************* Safe browser APIs  ***********************************/
	    /**
	     * Market direction.
	     */
	    (function (Direction) {
	        // Right to left. Keep right to work with the current CSS implemenation.
	        Direction[Direction["right"] = 0] = "right";
	        // Left to right. Keep left to work with the current CSS implemenation.
	        Direction[Direction["left"] = 1] = "left";
	    })(exports.Direction || (exports.Direction = {}));
	    var Direction = exports.Direction;
	    /**
	     * List of event types.
	     */
	    (function (eventTypes) {
	        eventTypes[eventTypes["animationend"] = 0] = "animationend";
	        eventTypes[eventTypes["blur"] = 1] = "blur";
	        eventTypes[eventTypes["change"] = 2] = "change";
	        eventTypes[eventTypes["click"] = 3] = "click";
	        eventTypes[eventTypes["DOMContentLoaded"] = 4] = "DOMContentLoaded";
	        eventTypes[eventTypes["DOMNodeInserted"] = 5] = "DOMNodeInserted";
	        eventTypes[eventTypes["DOMNodeRemoved"] = 6] = "DOMNodeRemoved";
	        eventTypes[eventTypes["ended"] = 7] = "ended";
	        eventTypes[eventTypes["error"] = 8] = "error";
	        eventTypes[eventTypes["focus"] = 9] = "focus";
	        eventTypes[eventTypes["focusin"] = 10] = "focusin";
	        eventTypes[eventTypes["load"] = 11] = "load";
	        eventTypes[eventTypes["keydown"] = 12] = "keydown";
	        eventTypes[eventTypes["keypress"] = 13] = "keypress";
	        eventTypes[eventTypes["keyup"] = 14] = "keyup";
	        eventTypes[eventTypes["loadedmetadata"] = 15] = "loadedmetadata";
	        eventTypes[eventTypes["mousedown"] = 16] = "mousedown";
	        eventTypes[eventTypes["mousemove"] = 17] = "mousemove";
	        eventTypes[eventTypes["mouseout"] = 18] = "mouseout";
	        eventTypes[eventTypes["mouseover"] = 19] = "mouseover";
	        eventTypes[eventTypes["mouseup"] = 20] = "mouseup";
	        eventTypes[eventTypes["onreadystatechange"] = 21] = "onreadystatechange";
	        eventTypes[eventTypes["resize"] = 22] = "resize";
	        eventTypes[eventTypes["scroll"] = 23] = "scroll";
	        eventTypes[eventTypes["submit"] = 24] = "submit";
	        eventTypes[eventTypes["timeupdate"] = 25] = "timeupdate";
	        eventTypes[eventTypes["touchstart"] = 26] = "touchstart";
	        eventTypes[eventTypes["touchend"] = 27] = "touchend";
	        eventTypes[eventTypes["wheel"] = 28] = "wheel";
	    })(exports.eventTypes || (exports.eventTypes = {}));
	    var eventTypes = exports.eventTypes;
	    /** Add an event handler to an event target.
	    * @param {EventTarget | EventTarget[]} target - The event targets to add the event listener to.
	    * @param {eventTypes} name - The name of the event to add a listener for.
	    * @param {EventListener} listener - The event listener.
	    * @param {boolean} useCapture - (optional) true means the event should be handled in the capturing phase; else the bubbling phase
	    */
	    function addEvent(target, eventType, listener, useCapture) {
	        if (useCapture === void 0) { useCapture = false; }
	        for (var _i = 0, _a = toArray(target); _i < _a.length; _i++) {
	            var t = _a[_i];
	            bindEventToDOM(t, listener, useCapture, eventTypes[eventType]);
	        }
	    }
	    exports.addEvent = addEvent;
	    /** Add one or many event handlers to the dom based on the the eventTypes provided.
	    * @param {EventTarget | EventTarget[]} target - The event targets to add the event listener to.
	    * @param {string} name - Event name or names. Multiple names should delimited with a space.
	    * @param {EventListener} listener - The event listener.
	    * @param {boolean} [useCapture=false] - true means the event should be handled in the capturing phase; else the bubbling phase
	    */
	    function addEvents(target, eventTypes, listener, useCapture) {
	        if (useCapture === void 0) { useCapture = false; }
	        if (stringExtensions_1.isNullOrWhiteSpace(eventTypes)) {
	            return;
	        }
	        for (var _i = 0, _a = toArray(target); _i < _a.length; _i++) {
	            var t = _a[_i];
	            for (var _b = 0, _c = eventTypes.split(/\s+/); _b < _c.length; _b++) {
	                var eventType = _c[_b];
	                if (!stringExtensions_1.isNullOrWhiteSpace(eventType)) {
	                    bindEventToDOM(t, listener, useCapture, eventType);
	                }
	            }
	        }
	    }
	    exports.addEvents = addEvents;
	    /**
	    * Remove event handlers to the dom based on the the eventTypes provided.
	    * @param {EventTarget | EventTarget[]} target - The event targets to add the event listener to.
	    * @param {string} name - Event name or names. Multiple names should delimited with a space.
	    * @param {EventListener} listener - The event listener.
	    * @param {boolean} [useCapture=false] - true means the event should be handled in the capturing phase; else the bubbling phase
	    */
	    function removeEvents(target, eventTypes, listener, useCapture) {
	        if (useCapture === void 0) { useCapture = false; }
	        for (var _i = 0, _a = toArray(target); _i < _a.length; _i++) {
	            var t = _a[_i];
	            for (var _b = 0, _c = toArray(eventTypes); _b < _c.length; _b++) {
	                var eventType = _c[_b];
	                if (!stringExtensions_1.isNullOrWhiteSpace(eventType)) {
	                    removeEventFromDOM(t, listener, useCapture, eventType);
	                }
	            }
	        }
	    }
	    exports.removeEvents = removeEvents;
	    /** prevent the default behavior of an event.
	     * @param  {Event} event - the event.
	     * @returns void
	     */
	    function preventDefault(event) {
	        event = getEvent(event);
	        if (event) {
	            if (event.preventDefault) {
	                event.preventDefault();
	            }
	            else {
	                event.returnValue = false;
	            }
	        }
	    }
	    exports.preventDefault = preventDefault;
	    /** Add a throttled event handler to an event target to prevent performance issues when an event is fired frequently (ie mousemove, resize)
	    * http://demo.nimius.net/debounce_throttle/ has a good demo of throttling and debouncing optimizations of an event.
	    * @param {EventTarget} target - The event target to add the event listener to.
	    * @param {eventTypes} name - The name of the event to add a listener for.
	    * @param {EventListener} listener - The event listener.
	    * @param {number} threshold - the threshold in milliseconds to throttle to. (default 150ms)
	    * @returns {Function} - returns a throttled event handler that will be used to be removed if needed.
	    */
	    function addThrottledEvent(target, name, listener, threshold) {
	        if (threshold === void 0) { threshold = 150; }
	        var timer;
	        var last = 0;
	        var throttledEventHandler = function (event) {
	            var now = Date.now();
	            clearTimeout(timer);
	            if (!!last && (now < last + threshold)) {
	                // threshold has not elapsed, throttle this event
	                timer = setTimeout(function () {
	                    last = now;
	                    listener(event);
	                }, threshold - (now - last));
	            }
	            else {
	                last = now;
	                listener(event);
	            }
	        };
	        addEvent(target, name, throttledEventHandler);
	        return throttledEventHandler;
	    }
	    exports.addThrottledEvent = addThrottledEvent;
	    /** Add a throttled event handler to elements to prevent performance issues when an event is fired frequently (ie mousemove, resize)
	    * http://demo.nimius.net/debounce_throttle/ has a good demo of throttling and debouncing optimizations of an event.
	    * @param {EventTarget} target - The event target to add the event listener to.
	    * @param {eventTypes} name - The name of the event to add a listener for.
	    * @param {EventListener} listener - The event listener.
	    * @param {number} threshold - the threshold in milliseconds to throttle to. (default 150ms)
	    * @returns {Function} - returns a throttled event handler that will be used to be removed if needed.
	    */
	    function addThrottledEvents(target, eventTypes, listener, useCapture, threshold) {
	        if (useCapture === void 0) { useCapture = false; }
	        if (threshold === void 0) { threshold = 150; }
	        function throttle(listener) {
	            var timer;
	            var last = 0;
	            var throttledEventHandler = function (event) {
	                var now = Date.now();
	                clearTimeout(timer);
	                if (!!last && (now < last + threshold)) {
	                    // threshold has not elapsed, throttle this event
	                    timer = setTimeout(function () {
	                        last = now;
	                        listener(event);
	                    }, threshold - (now - last));
	                }
	                else {
	                    last = now;
	                    listener(event);
	                }
	            };
	            return throttledEventHandler;
	        }
	        if (stringExtensions_1.isNullOrWhiteSpace(eventTypes)) {
	            return;
	        }
	        for (var _i = 0, _a = toArray(target); _i < _a.length; _i++) {
	            var t = _a[_i];
	            for (var _b = 0, _c = eventTypes.split(/\s+/); _b < _c.length; _b++) {
	                var eventType = _c[_b];
	                if (!stringExtensions_1.isNullOrWhiteSpace(eventType)) {
	                    var throttledListener = throttle(listener);
	                    bindEventToDOM(t, throttledListener, useCapture, eventType);
	                }
	            }
	        }
	    }
	    exports.addThrottledEvents = addThrottledEvents;
	    /** Add a debounced event handler to an event target.
	    * @param {EventTarget} target - The event target to add the event listener to.
	    * @param {eventTypes} name - The name of the event to add a listener for.
	    * @param {EventListener} listener - The event listener.
	    * @param {number} delay - the number of milliseconds to delay for during throttling.
	    * @returns {EventListener} - returns a debounced event handler that will be used to be removed if needed.
	    */
	    function addDebouncedEvent(target, name, listener, delay) {
	        if (delay === void 0) { delay = 150; }
	        var timer;
	        var debounceEventHandler = function (event) {
	            window.clearTimeout(timer);
	            timer = setTimeout(function () { listener(event); }, delay);
	        };
	        addEvent(target, name, debounceEventHandler);
	        return debounceEventHandler;
	    }
	    exports.addDebouncedEvent = addDebouncedEvent;
	    /**
	     * Call an event listener when document is ready.
	    * @param  {EventListener} listener
	    * @returns void
	    */
	    function documentReady(listener) {
	        if (document.readyState !== 'loading') {
	            listener.call(null);
	        }
	        else if (document.addEventListener) {
	            document.addEventListener(eventTypes[eventTypes.DOMContentLoaded], listener, false);
	        }
	        else if (document.attachEvent) {
	            document.attachEvent(eventTypes[eventTypes.onreadystatechange], function () {
	                if (document.readyState !== 'loading') {
	                    listener.call(null);
	                }
	            });
	        }
	    }
	    exports.documentReady = documentReady;
	    /**
	     * Deferred a call back call either on load or on timeout of on load.
	     *
	     * @export
	     * @param {EventListener} listener -- a call back to be executed.
	     * @param {number} onLoadTimeout - an onload timeout.
	     * Usage:
	     * var callBackFunction = function() {/ * does something * /};
	     * onDeferred(callBackFunction, 4000);
	     * Usage with arrow function
	     * onDeferred(() => {/ * do something * /}, 4000)
	     */
	    function onDeferred(listener, onLoadTimeout) {
	        var timeoutAwareListener;
	        var deferredTimeout = setTimeout(function () {
	            clearTimeout(deferredTimeout);
	            removeEvent(window, eventTypes.load, timeoutAwareListener);
	            listener.call(null);
	        }, onLoadTimeout);
	        timeoutAwareListener = function () {
	            clearTimeout(deferredTimeout);
	            // make it async to release the main thread.
	            SafeBrowserApis.requestAnimationFrame.call(window, listener);
	        };
	        if (document.readyState === 'complete') {
	            clearTimeout(deferredTimeout);
	            listener.call(null);
	        }
	        else {
	            addEvent(window, eventTypes.load, timeoutAwareListener);
	        }
	    }
	    exports.onDeferred = onDeferred;
	    /** Add a css class to an element.
	     * @param  {HTMLElement} element - The element to add the css class to.
	     * @param  {string} cssClass - The css class to add.
	     */
	    function addClass(element, cssClass) {
	        if ((!!element) && (!stringExtensions_1.isNullOrWhiteSpace(cssClass)) && (!hasClass(element, cssClass))) {
	            if (element.classList) {
	                element.classList.add(cssClass);
	            }
	            else {
	                element.className = (element.className + ' ' + cssClass).trim();
	            }
	        }
	    }
	    exports.addClass = addClass;
	    /** Remove a css class from an element.
	     * @param  {HTMLElement | HTMLElement[]} element - The element(s) to remove the css class from.
	     * @param  {string} cssClass - The css class to remove.
	     */
	    function removeClass(elements, cssClass) {
	        if ((!!elements) && (!stringExtensions_1.isNullOrWhiteSpace(cssClass))) {
	            for (var _i = 0, _a = toArray(elements); _i < _a.length; _i++) {
	                var element = _a[_i];
	                if (element.className) {
	                    element.className = (' ' + element.className + ' ').replace(' ' + cssClass.trim() + ' ', ' ').trim();
	                }
	            }
	        }
	    }
	    exports.removeClass = removeClass;
	    /** Remove an array of css classes from an element.
	     * @param  {HTMLElement} element - The element to remove the css class from.
	     * @param  {string[]} cssClasses - The css classes to remove.
	     */
	    function removeClasses(element, cssClasses) {
	        if (cssClasses) {
	            for (var _i = 0, cssClasses_1 = cssClasses; _i < cssClasses_1.length; _i++) {
	                var cssClass = cssClasses_1[_i];
	                removeClass(element, cssClass);
	            }
	        }
	    }
	    exports.removeClasses = removeClasses;
	    /** Add an array of css classes from an element.
	     * @param  {HTMLElement} element - The element to remove the css class from.
	     * @param  {string[]} cssClasses - The css classes to be added.
	     */
	    function addClasses(element, cssClasses) {
	        if (cssClasses) {
	            for (var _i = 0, cssClasses_2 = cssClasses; _i < cssClasses_2.length; _i++) {
	                var cssClass = cssClasses_2[_i];
	                addClass(element, cssClass);
	            }
	        }
	    }
	    exports.addClasses = addClasses;
	    /** Checks for the presence of a css class on an element.
	     * @param  {HTMLElement} element - The element to check the css class of.
	     * @param  {string} cssClass - The css class to check for.
	     * @return True if the element's className has the specified class, otherwise false.
	     */
	    // TODO: user classList for supported browsers
	    function hasClass(element, cssClass) {
	        return ((!element) || stringExtensions_1.isNullOrWhiteSpace(cssClass) ||
	            stringExtensions_1.isNullOrWhiteSpace(element.className)) ?
	            false :
	            (' ' + element.className + ' ').indexOf(' ' + cssClass.trim() + ' ') > -1;
	    }
	    exports.hasClass = hasClass;
	    /**
	     * Removes an element from the DOM
	     * @param element - The HTMLElement to remove
	     * @return {Node} - The removed node.
	     */
	    function removeElement(element) {
	        return element ? element.parentElement.removeChild(element) : element;
	    }
	    exports.removeElement = removeElement;
	    /** Select elements in a context.
	    * @param  {string} selector - can be class, id or tag selector.
	    * @param  {HTMLElement} [context] - any element to scope the selection. It's optional. If not provided document will be assumed.
	    * @returns HTMLElement[]
	    */
	    function selectElements(selector, context) {
	        return selectElementsT(selector, context);
	    }
	    exports.selectElements = selectElements;
	    /** Select first element from the selected elements using provided selector.
	    * @param {string} selector - element selector.
	    * @param {HTMLElement} [context] - an optional context to scope the selection.
	    * @returns {HTMLElement} - the first element from the match.
	    */
	    function selectFirstElement(selector, context) {
	        var elementsSelected = selectElementsT(selector, context);
	        return (!elementsSelected || !elementsSelected.length) ? null : elementsSelected[0];
	    }
	    exports.selectFirstElement = selectFirstElement;
	    /** Select elements in a context.
	     * @param  {string} selector - can be class, id or tag selector.
	     * @param  {HTMLElement} [context] - any element to scope the selection. It's optional. If not provided document will be assumed.
	     * @returns T[]
	     */
	    // TODO (sekeatin) Add support for "> a" -> ":scope > a" selector support
	    function selectElementsT(selector, context) {
	        if (stringExtensions_1.isNullOrWhiteSpace(selector)) {
	            return [];
	        }
	        var currentContext = context || document;
	        // check if the first character is class or id.
	        if (/^[\#.]?[\w-]+$/.test(selector)) {
	            switch (selector[0]) {
	                case '.':
	                    if (currentContext.getElementsByClassName) {
	                        return nodeListToArray(currentContext.getElementsByClassName(selector.slice(1)));
	                    }
	                    else {
	                        return nodeListToArray(currentContext.querySelectorAll(selector));
	                    }
	                case '#':
	                    var element = currentContext.querySelector(selector);
	                    return (element ? [element] : []);
	            }
	            return nodeListToArray(currentContext.getElementsByTagName(selector));
	        }
	        return nodeListToArray(currentContext.querySelectorAll(selector));
	    }
	    exports.selectElementsT = selectElementsT;
	    /** Select first element from the selected elements using provided selector.
	    * @param {string} selector - element selector.
	    * @param {HTMLElement} [context] - an optional context to scope the selection.
	    * @returns {T} - the first element from the match.
	       */
	    function selectFirstElementT(selector, context) {
	        var elementsSelected = selectElementsT(selector, context);
	        return (!elementsSelected || !elementsSelected.length) ? null : elementsSelected[0];
	    }
	    exports.selectFirstElementT = selectFirstElementT;
	    /**
	     * Select elements in a context with a comma delimited list of selectors.
	     *
	     * @export
	     * @param {string} selectorsr - comma delimited list of classes, ids or tag selectors.
	     * @param  {Element} [context] - any element to scope the selection. It's optional. If not provided document will be assumed.
	     * @returns Element[]
	     */
	    function selectElementsFromSelectors(selectors, context) {
	        var currentContext = context || document;
	        var selectorList;
	        var selectedList;
	        selectorList = selectors.split(',');
	        for (var _i = 0, selectorList_1 = selectorList; _i < selectorList_1.length; _i++) {
	            var selector = selectorList_1[_i];
	            selectedList += this.selectElements(selector, currentContext);
	        }
	        return selectedList;
	    }
	    exports.selectElementsFromSelectors = selectElementsFromSelectors;
	    /**
	     * Convert node list to array.
	     * @param  {NodeListOf<T extends Node>} nodeList
	     */
	    function nodeListToArray(nodeList) {
	        if (!nodeList) {
	            return [];
	        }
	        var elements = [];
	        for (var n = 0; n < nodeList.length; n++) {
	            elements.push(nodeList[n]);
	        }
	        return elements;
	    }
	    exports.nodeListToArray = nodeListToArray;
	    /** get the dir attribute value from html element.
	    * @returns string - the dir information from the html element.
	    */
	    function getDirection(context) {
	        if (context === void 0) { context = document.documentElement; }
	        while (context !== null) {
	            var dir = context.getAttribute('dir');
	            if (!!dir) {
	                return dir === 'rtl' ? Direction.right : Direction.left;
	            }
	            else {
	                context = context.parentElement;
	            }
	        }
	        return Direction.left;
	    }
	    exports.getDirection = getDirection;
	    /** Gets the client bounding rectangle of an element.
	    * @param  {any} element - an element to check its bounding client rectangle.
	    * @returns {any} - an object bag that has top, bottom, left, right, width & height.
	    */
	    /* tslint:disable */
	    function getClientRect(element) {
	        if (!element) {
	            return;
	        }
	        var box = element.getBoundingClientRect();
	        var clone = {};
	        // need to clone and add width and height for IE8.
	        // we can't add in the object itself because it returns freeze() object that couldn't accept additional property.
	        for (var property in box) {
	            // ClientRect's hasOwnProperty fails so we can't use it to check
	            // our copy. This just copies directly
	            // that is the reason tslint:disable added at the top of the method because forin rule fails with this code.
	            clone[property] = box[property];
	        }
	        if (typeof clone.width === 'undefined') {
	            clone.width = element.offsetWidth;
	        }
	        if (typeof clone.height === 'undefined') {
	            clone.height = element.offsetHeight;
	        }
	        return clone;
	    }
	    exports.getClientRect = getClientRect;
	    /** Sets or gets CSS properties
	     * @param  {HTMLElement} element
	     * @param  {string} property - The CSS property name
	     * @param  {any} [value] - The value to set on the CSS property
	     * @returns {any} - The value of the CSS property
	     */
	    function css(element, property, value) {
	        if (!element) {
	            return null;
	        }
	        if (!!value || value === '') {
	            element.style[property] = value;
	        }
	        else {
	            value = element.style[property];
	            if (stringExtensions_1.isNullOrWhiteSpace(value)) {
	                value = getComputedStyle(element);
	                value = value[property];
	            }
	            return value;
	        }
	    }
	    exports.css = css;
	    /**
	    * Remove an event from an {EventTarget} or {EventTarget[]}.
	    * @param eventTargets - The {EventTarget[]} to detattach from.
	    * @param eventType - The event type name.
	    * @param listener - The event listener.
	    * @param [useCapture] - Whether or not the useCapture flag was added to the original listener.
	    */
	    function removeEvent(eventTargets, name, listener, useCapture) {
	        if (!eventTargets || !name || !listener) {
	            return;
	        }
	        for (var _i = 0, _a = toArray(eventTargets); _i < _a.length; _i++) {
	            var target = _a[_i];
	            removeEventFromDOM(target, listener, useCapture, eventTypes[name]);
	        }
	    }
	    exports.removeEvent = removeEvent;
	    /**
	    * Check if an object is an Array. Returns true if the supplied object is an Array, false otherwise.
	    * @param obj - The object that to check.
	    */
	    function isArray(obj) {
	        return Array.isArray ?
	            Array.isArray(obj) :
	            ({}).toString.call(obj) === '[object Array]';
	    }
	    exports.isArray = isArray;
	    /**
	     * Coerces objects into Arrays if they aren't already an Array. If
	     * the supplied object is already an array, returns that object.
	     * @param obj - The object to arrayify.
	     */
	    function toArray(obj) {
	        return isArray(obj) ? obj : [obj];
	    }
	    exports.toArray = toArray;
	    /**
	    * @name - isDescendent
	    * @description - Checks to see if an element is a child of another element
	    * @param {HTMLElement} parent - The element that child is checked against
	    * @param {HTMLElement} child - The element being checked
	    * @returns {boolean, null} - returns null if either @param is a null value
	    * @export
	    */
	    function isDescendent(parent, child) {
	        if (parent == null || child == null) {
	            return null;
	        }
	        var ancestor = child.parentNode;
	        while (ancestor != null) {
	            if (ancestor === parent) {
	                return true;
	            }
	            else {
	                ancestor = ancestor.parentNode;
	            }
	        }
	        return false;
	    }
	    exports.isDescendent = isDescendent;
	    /**
	    * @name - getText
	    * @description - Get the text content of an HTMLElement
	    * @public
	    * @param  {HTMLElement | Element} element - The element to get the text of.
	    * @returns {string} - The element's text content.
	    */
	    function getText(element) {
	        return !!element ? element.innerText || element.textContent || '' : '';
	    }
	    exports.getText = getText;
	    /**
	    * @name - setText
	    * @description - Sets the text content of an HTMLElement
	    * @public
	    * @param  {HTMLElement} element - The element to add the text to.
	    * @param  {HTMLElement} text - The text to add to the element.
	    * @returns {Void}
	    */
	    function setText(element, text) {
	        if (!!element && text !== null) {
	            element.textContent ? element.textContent = text : element.innerHTML = text;
	        }
	    }
	    exports.setText = setText;
	    /**
	     * Remove all inner HTML from a parent element - used to delete child elements
	     * @param {HTMLElement} parentElement - the parent element from which all children should be removed
	     * @returns void
	     */
	    function removeInnerHtml(parentElement) {
	        if (parentElement) {
	            parentElement.innerHTML = '';
	        }
	    }
	    exports.removeInnerHtml = removeInnerHtml;
	    /**
	     * @name - getEventTargetOrSrcElement
	     * @description - Gets the event target element or event src element.
	     * @param {Event} event - The event.
	     * @returns {HTMLElement} - The event element.
	     */
	    function getEventTargetOrSrcElement(event) {
	        event = getEvent(event);
	        return (event.target || event.srcElement);
	    }
	    exports.getEventTargetOrSrcElement = getEventTargetOrSrcElement;
	    /**
	     * @name getEvent
	     * @description - Gets the event from the passed event or the window event.
	     * @param {Event} event - The event.
	     * @returns - The event.
	     */
	    function getEvent(event) {
	        return event || window.event;
	    }
	    exports.getEvent = getEvent;
	    /**
	     * Binds an event handler to a target.
	     *
	     * @param {EventTarget} target - an event target.
	     * @param {EventListener} listener - a listner to an event.
	     * @param {boolean} [useCapture=false] - a flag to indicate either to use a capture or not.
	     * @param {string} eventType - an event name.
	     */
	    function bindEventToDOM(target, listener, useCapture, eventType) {
	        if (useCapture === void 0) { useCapture = false; }
	        if (!!target) {
	            window.addEventListener
	                ? target.addEventListener(eventType, listener, useCapture)
	                : target.attachEvent('on' + eventType, listener);
	        }
	    }
	    /**
	     * remove an event handler from a target.
	     *
	     * @param {EventTarget} target - an event target.
	     * @param {EventListener} listener - a listner to an event.
	     * @param {boolean} [useCapture=false] - a flag to indicate either to use a capture or not.
	     * @param {string} eventType - an event name.
	     */
	    function removeEventFromDOM(target, listener, useCapture, eventType) {
	        if (useCapture === void 0) { useCapture = false; }
	        if (!!target) {
	            window.removeEventListener
	                ? target.removeEventListener(eventType, listener, useCapture)
	                : target.detachEvent('on' + eventType, listener);
	        }
	    }
	    /**
	     * Fires custom event.
	     * @export
	     * @param {HTMLElement} element - an element to fire a custom event.
	     * @param {eventTypes | string} eventType - the name of custom event.
	     * @param {*} [data] - data to be attached to the custom event.
	     * @return {Event} - the created custom event
	    */
	    function customEvent(element, eventType, data) {
	        if (data === void 0) { data = {}; }
	        if (!element || !eventType) {
	            return null;
	        }
	        var eventName = (typeof eventType === 'string') ? eventType : eventTypes[eventType];
	        var event = null;
	        data.bubbles = typeof data.bubbles === 'undefined' ? true : data.bubbles;
	        data.cancelable = typeof data.cancelable === 'undefined' ? true : data.cancelable;
	        // IE9 and above adds CustomEvent as object to the window, but with correct implementations, it should be a function
	        // Check if CustomEvent is function to avoid exceptions in IE9 and above
	        if (window.CustomEvent && typeof window.CustomEvent === "function") {
	            event = new CustomEvent(eventName, data);
	        }
	        else if (document.createEvent) {
	            event = document.createEvent('CustomEvent');
	            event.initCustomEvent(eventName, data.bubbles, data.cancelable, data.detail);
	        }
	        else {
	            event = document.createEventObject();
	            element.fireEvent('on' + eventName, event);
	        }
	        element.dispatchEvent(event);
	        return event;
	    }
	    exports.customEvent = customEvent;
	    /**
	     * stop propagation of an event
	     *
	     * @param {EventTarget} target - an event target.
	     * @return {void}
	     */
	    function stopPropagation(event) {
	        if (event.stopPropagation) {
	            event.stopPropagation();
	        }
	        else {
	            event.returnValue = false;
	        }
	    }
	    exports.stopPropagation = stopPropagation;
	    /**
	    * @name - getScrollY
	    * @description - Get cross-browser window scrollY.
	    * @param {Window} - context?: the context of the call, defaults to window
	    * @return {number}
	    */
	    function getScrollY(context) {
	        if (context === void 0) { context = window; }
	        return context.scrollY || context.pageYOffset || ((context.document.compatMode === "CSS1Compat") ? context.document.documentElement.scrollTop : context.document.body.scrollTop);
	    }
	    exports.getScrollY = getScrollY;
	    /**
	     * @name - getOffsetParent
	     * @description - Get the OffsetParent of the given element. This function returns the documentElement if there
	     * is no offsetParent above the element
	     * @export
	     * @param {HTMLElement} element The element to get the offsetParent of
	     * @return {HTMLElement} The offsetParent of the element or the documentElement if there is no parent in between
	     */
	    function getOffsetParent(element) {
	        // This function is largely inspired by jQuery source. CTRL+F for `offsetParent:` to find it.
	        // https://code.jquery.com/jquery-3.1.1.js
	        if (!element) {
	            return window.document.documentElement;
	        }
	        var docElement = element.ownerDocument.documentElement;
	        var offsetParent = element.offsetParent;
	        while (offsetParent && css(offsetParent, "position") == "static") {
	            offsetParent = offsetParent.offsetParent;
	        }
	        return offsetParent || docElement;
	    }
	    exports.getOffsetParent = getOffsetParent;
	    /**
	    * @name - scrollElementIntoView
	    * @description - Scrolls the element into view within its scroll container.
	    * @export
	    * @param {HTMLElement} element - The element to scroll into view.
	    * @param {HTMLElement} scrollContainer - The scroll container of the element.
	    * @returns {void}
	    */
	    function scrollElementIntoView(element, scrollContainer) {
	        if (!element || !scrollContainer) {
	            return;
	        }
	        var height = scrollContainer.clientHeight;
	        var scrollHeight = scrollContainer.scrollHeight;
	        if (scrollHeight > height) {
	            scrollContainer.scrollTop = Math.min(element.offsetTop - scrollContainer.firstElementChild.offsetTop, scrollHeight - height);
	        }
	    }
	    exports.scrollElementIntoView = scrollElementIntoView;
	    /**
	     * @name - isImageLoadedSuccessfully
	     * @description - Determines whether or not an image is loaded successfully
	                      see http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript
	     * @param {HTMLImageElement} - image: The image element
	     * @return {boolean} - If true, image is loaded successfully; else false
	     * @todo - 9256666 - write unit tests
	     */
	    function isImageLoadedSuccessfully(image) {
	        // If the browser doesn't support complete or naturalHeight then we can't know for certain whether the image correctly loaded or not.
	        if (typeof image.complete !== 'undefined' && typeof image.naturalHeight !== 'undefined') {
	            return image && image.complete && image.naturalHeight > 0;
	        }
	        // Return true to allow default browser behavior to happen so we don't accidentally replace a good image with a placeholder.
	        return true;
	    }
	    exports.isImageLoadedSuccessfully = isImageLoadedSuccessfully;
	    /**
	     * @name - getCoordinates
	     * @description - get coordinates from an event
	     * @export
	     * @param {*} event - an event to read coordinates from
	     * @returns {Coordinate}
	     */
	    function getCoordinates(event) {
	        var touches = event.touches && event.touches.length ? event.touches : [event];
	        var eventObject = (event.changedTouches && event.changedTouches[0]) || touches[0];
	        return {
	            x: eventObject.clientX,
	            y: eventObject.clientY
	        };
	    }
	    exports.getCoordinates = getCoordinates;
	    /**
	     * @name - getParent
	     * @description - Steps parent by parent until it finds the parent with the requested selector - Will return 'null' if a parent does not exist
	     * @export
	     * @param {HTMLElement} element
	     * @param {string} selector
	     * @returns {HTMLElement}
	     */
	    function getParent(element, selector) {
	        /**
	         * TODO: Task 10141507
	         * Add test for this method
	         */
	        var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;
	        while (element) {
	            if (matchesSelector.call(element, selector)) {
	                break;
	            }
	            element = element.parentElement;
	        }
	        return element;
	    }
	    exports.getParent = getParent;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="stringExtensions"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    /**
	    * @name - isNullOrWhiteSpace
	    * @description - Determines if the specified string is undefined, null, empty, or whitespace.
	    * @export
	    * @public
	    * @param {string} value - The string to examine.
	    * @returns {boolean} - True if the value is undefined, null, empty, or whitespace, otherwise false.
	    */
	    function isNullOrWhiteSpace(value) {
	        return (!value) || (!trim(value));
	    }
	    exports.isNullOrWhiteSpace = isNullOrWhiteSpace;
	    /**
	    * @name - trim
	    * @description - Trims leading and trailing whitespace from the string.
	    * @export
	    * @public
	    * @param {string} value - The string to examine.
	    * @returns {string} - The trimmed string.
	    */
	    function trim(value) {
	        if (!value) {
	            return null;
	        }
	        if (value.trim) {
	            return value.trim();
	        }
	        return value.replace(/^\s+|\s+$/g, '');
	    }
	    exports.trim = trim;
	    /**
	    * @name - startsWith
	    * @description - Determines if the specified string starts with the specified value.
	    * @export
	    * @public
	    * @param {string} value - The string to look in.
	    * @param {string} prefix - The prefix to look for.
	    * @returns {boolean} - True if the string starts with the prefix, otherwise false.
	    */
	    function startsWith(value, prefix, ignoreCase) {
	        if (ignoreCase === void 0) { ignoreCase = true; }
	        if (!value || !prefix) {
	            return false;
	        }
	        if (ignoreCase) {
	            value = value.toLocaleLowerCase();
	            prefix = prefix.toLocaleLowerCase();
	        }
	        if (value.startsWith) {
	            return value.startsWith(prefix);
	        }
	        return value.indexOf(prefix) === 0;
	    }
	    exports.startsWith = startsWith;
	    /**
	    * @name - endsWith
	    * @description - Determines if the specified string ends with the specified value.
	    * @export
	    * @public
	    * @param {string} value - The string to look in.
	    * @param {string} suffix - The suffix to look for.
	    * @returns {boolean} - True if the string ends with the suffix, otherwise false.
	    */
	    function endsWith(value, suffix, ignoreCase) {
	        if (ignoreCase === void 0) { ignoreCase = true; }
	        if (!value || !suffix) {
	            return false;
	        }
	        if (ignoreCase) {
	            value = value.toLocaleLowerCase();
	            suffix = suffix.toLocaleLowerCase();
	        }
	        if (value.endsWith) {
	            return value.endsWith(suffix);
	        }
	        return value.lastIndexOf(suffix) === value.length - suffix.length;
	    }
	    exports.endsWith = endsWith;
	    /**
	    * @name - getMatchLength
	    * @description - Gets the number of characters the two specified strings match for.
	    * @export
	    * @public
	    * @param {string} string1 - The first string.
	    * @param {string} string2 - The second string.
	    * @returns {number} - The number of characters the two specified strings match for, if any.
	    */
	    function getMatchLength(string1, string2, ignoreCase) {
	        if (ignoreCase === void 0) { ignoreCase = true; }
	        if (!string1 || !string2) {
	            return 0;
	        }
	        var match = 0;
	        if (ignoreCase) {
	            string1 = string1.toLocaleLowerCase();
	            string2 = string2.toLocaleLowerCase();
	        }
	        while (string1.charCodeAt(match) === string2.charCodeAt(match)) {
	            match++;
	        }
	        return match;
	    }
	    exports.getMatchLength = getMatchLength;
	    /**
	    * @name - format
	    * @description - Builds a string from a format specifier and replacement parameters.
	    * @export
	    * @public
	    * @param {string} formatSpecifier - The format specifier for the formatted string.
	    * @param {any[]} params - The replacement string parameters.
	    * @returns {string} - The formatted string.
	    */
	    function format(formatSpecifier) {
	        var parameters = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            parameters[_i - 1] = arguments[_i];
	        }
	        return formatSpecifier.replace(/{(\d+)}/g, function (match, index) {
	            if (index >= parameters.length) {
	                return match;
	            }
	            var value = parameters[index];
	            if ((typeof value !== 'number') && !value) {
	                return '';
	            }
	            if (typeof value === 'string') {
	                return value;
	            }
	            return value.toString();
	        });
	    }
	    exports.format = format;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1) {
	    "use strict";
	    /**
	    * @class - Publisher
	    * @classdesc - The abstract Publisher base class that implements IPublisher interface.
	    *              This allows subscribers to subscribe to notifications and notifications to be published to subscribers.
	    * @extends {ObservableComponent}
	    * @implements {IPublisher}
	    * @abstract
	    */
	    var Publisher = (function (_super) {
	        __extends(Publisher, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Publisher.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function Publisher(element, params) {
	            if (params === void 0) { params = null; }
	            _super.call(this, element, params);
	            this.element = element;
	        }
	        /**
	        * @name - subscribe
	        * @description - Called by subscribers who wish to subscribe to notifications.
	        * @public
	        * @param {T} subscriber - An object that implements ISubscriber.
	        * @returns - True if the subscription is successful, otherwise false.
	        */
	        Publisher.prototype.subscribe = function (subscriber) {
	            if (!subscriber) {
	                return false;
	            }
	            if (!this.subscribers) {
	                this.subscribers = [];
	            }
	            else {
	                if (this.subscribers.indexOf(subscriber) !== -1) {
	                    return false;
	                }
	            }
	            this.subscribers.push(subscriber);
	            return true;
	        };
	        /**
	        * @name - unsubscribe
	        * @description - Called by subscribers who wish to unsubscribe from notifications.
	        * @public
	        * @param {T} subscriber - A subscribed object that implements ISubscriber.
	        * @returns - True if the unsubscription is successful, otherwise false.
	        */
	        Publisher.prototype.unsubscribe = function (subscriber) {
	            if (!subscriber || !this.subscribers || !this.subscribers.length) {
	                return false;
	            }
	            var index = this.subscribers.indexOf(subscriber);
	            if (index === -1) {
	                return false;
	            }
	            this.subscribers.splice(index, 1);
	            return true;
	        };
	        /**
	        * @name - hasSubscribers
	        * @description - Determines whether or not this publisher currently has any subscribers.
	        * @protected
	        * @returns - True if this publisher currently has any subscribers, otherwise false.
	        */
	        Publisher.prototype.hasSubscribers = function () {
	            return !!this.subscribers && (this.subscribers.length > 0);
	        };
	        /**
	        * @name - initiatePublish
	        * @description - Called by the derived class to initiate a publish to all subscribers.
	        * @protected
	        * @param {any} context - The publish context used by the derived class to determine which interface callback to make.
	        * @returns {void}
	        */
	        Publisher.prototype.initiatePublish = function (context) {
	            if (this.hasSubscribers()) {
	                for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
	                    var subscriber = _a[_i];
	                    this.publish(subscriber, context);
	                }
	            }
	        };
	        /**
	        * @name - update
	        * @description - Update the component state.
	        * @protected
	        * @returns {void}
	        */
	        Publisher.prototype.update = function () {
	            // Nothing to do here but derived classes may override...
	        };
	        /**
	        * @name - teardown
	        * @description - Cleaning up the old state of the component.
	        * @protected
	        * @returns {void}
	        */
	        Publisher.prototype.teardown = function () {
	            // Nothing to do here but derived classes may override...
	        };
	        return Publisher;
	    }(observableComponent_1.ObservableComponent));
	    exports.Publisher = Publisher;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, htmlExtensions_1) {
	    "use strict";
	    /**
	     * The action bar module
	     * @class
	     * @classdesc Allow overflow of the action bar to move into the overflow dropdown.
	     */
	    var ActionBar = (function (_super) {
	        __extends(ActionBar, _super);
	        /**
	         * @constructor
	         * @description - Constructor for the ActionBar module.
	         * @public
	         * @param {HTMLElement} element - the native element to attach the ActionBar behavior to.
	         */
	        function ActionBar(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - toggleOverflow
	            * @description - toggles show/hide the overflow
	            * @private
	            * @returns {void}
	            */
	            this.toggleOverflow = function () {
	                if (_this.showOverflow) {
	                    _this.overflow.setAttribute(ActionBar.ariaHiddenAttribute, 'true');
	                    _this.overflowToggle.setAttribute(ActionBar.ariaExpandedAttribute, 'false');
	                    _this.showOverflow = false;
	                }
	                else {
	                    _this.overflow.setAttribute(ActionBar.ariaHiddenAttribute, 'false');
	                    _this.overflowToggle.setAttribute(ActionBar.ariaExpandedAttribute, 'true');
	                    _this.showOverflow = true;
	                }
	            };
	            /**
	            * @name - handleWindowResize
	            * @description - updates on window resize
	            * @private
	            * @returns {void}
	            */
	            this.handleWindowResize = function () {
	                _this.updateWidth();
	                _this.linksClipped();
	            };
	            if (!element) {
	                return;
	            }
	            this.update();
	        }
	        /**
	         * @name - update
	         * @description - Updates the module if there is any change to its underlying DOM.
	         * @protected
	         * @returns {void}
	         */
	        ActionBar.prototype.update = function () {
	            this.overflow = htmlExtensions_1.selectFirstElement(ActionBar.overflowSelector, this.element);
	            this.overflowToggle = htmlExtensions_1.selectFirstElement(ActionBar.overflowToggleSelector, this.element);
	            this.barLinks = this.getBarLinks();
	            this.staticOverflowLinks = this.getStaticOverflowLinks();
	            this.linksWidth = this.getLinksWidth();
	            this.totalLinksWidth = this.getTotalLinksWidth();
	            this.overflowToggleWidth = htmlExtensions_1.getClientRect(this.overflowToggle).width;
	            this.showOverflow = (this.overflowToggle.hasAttribute(ActionBar.ariaHiddenAttribute)
	                && this.overflowToggle.getAttribute(ActionBar.ariaHiddenAttribute)) ? true : false;
	            this.duplicateLinksToOverflow();
	            this.handleWindowResize();
	            htmlExtensions_1.addEvent(this.overflowToggle, htmlExtensions_1.eventTypes.click, this.toggleOverflow);
	            this.resizeThrottledEventHandler = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.resize, this.handleWindowResize);
	        };
	        /**
	         * @name - teardown
	         * @description - Called by ObservableComponent when the component needs to clean up its state.
	         *                Components should remove any event bindings they've added to ensure they are
	         *                not duplicated during repeated update/teardown cycles.
	         * @protected
	         * @returns {void}
	         */
	        ActionBar.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.overflowToggle, htmlExtensions_1.eventTypes.click, this.toggleOverflow);
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.resize, this.resizeThrottledEventHandler);
	        };
	        /**
	        * @name - duplicateLinksToOverflow
	        * @description - duplicates links on the bar to the overflow
	        * @private
	        * @returns {void}
	        */
	        ActionBar.prototype.duplicateLinksToOverflow = function () {
	            var newListItem = document.createElement('li');
	            var newList = document.createElement('ul');
	            this.overflowLinks = [];
	            this.setDataAttributes();
	            for (var _i = 0, _a = this.barLinks; _i < _a.length; _i++) {
	                var link = _a[_i];
	                var duplicateLink = link.cloneNode(true);
	                this.overflowLinks.push(duplicateLink);
	                newList.appendChild(duplicateLink);
	            }
	            newListItem.appendChild(newList);
	            this.ignoreNextDOMChange = true;
	            this.overflow.insertBefore(newListItem, this.staticOverflowLinks[0]);
	        };
	        /**
	        * @name - getStaticOverflowLinks
	        * @description - returns the original links in the overflow
	        * @private
	        * @returns {HTMLElement[]}
	        */
	        ActionBar.prototype.getStaticOverflowLinks = function () {
	            var staticOverflowLinks = htmlExtensions_1.selectElements(ActionBar.overflowLinkSelector, this.element);
	            var cleanStaticOverflowLinks = [];
	            for (var _i = 0, staticOverflowLinks_1 = staticOverflowLinks; _i < staticOverflowLinks_1.length; _i++) {
	                var link = staticOverflowLinks_1[_i];
	                if (!htmlExtensions_1.hasClass(link, ActionBar.overflowClass)) {
	                    cleanStaticOverflowLinks.push(link);
	                }
	            }
	            return cleanStaticOverflowLinks;
	        };
	        /**
	        * @name - updateWidth
	        * @description - updates the width of the module
	        * @private
	        * @returns {void}
	        */
	        ActionBar.prototype.updateWidth = function () {
	            this.width = htmlExtensions_1.getClientRect(this.overflowToggle).right - htmlExtensions_1.getClientRect(this.barLinks[0]).left;
	        };
	        /**
	        * @name - getBarLinks
	        * @description - returns an array of links on the bar
	        * @private
	        * @returns {HTMLElement[]}
	        */
	        ActionBar.prototype.getBarLinks = function () {
	            var links = htmlExtensions_1.selectElements(ActionBar.barLinkSelector, this.element);
	            var cleanLinks = [];
	            for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
	                var link = links_1[_i];
	                if (!htmlExtensions_1.hasClass(link, ActionBar.overflowClass)) {
	                    cleanLinks.push(link);
	                }
	            }
	            return cleanLinks;
	        };
	        /**
	        * @name - getLinksWidth
	        * @description - returns an array containing the width for each link on the bar
	        * @private
	        * @returns {number[]}
	        */
	        ActionBar.prototype.getLinksWidth = function () {
	            var linksWidth = [];
	            for (var _i = 0, _a = this.barLinks; _i < _a.length; _i++) {
	                var link = _a[_i];
	                if (!htmlExtensions_1.hasClass(link, ActionBar.overflowClass)) {
	                    linksWidth.push(htmlExtensions_1.getClientRect(link).width);
	                }
	            }
	            return linksWidth;
	        };
	        /**
	        * @name - getTotalLinksWidth
	        * @description - returns the total width of all links on the bar
	        * @private
	        * @returns {number}
	        */
	        ActionBar.prototype.getTotalLinksWidth = function () {
	            var totalLinksWidth = 0;
	            for (var _i = 0, _a = this.linksWidth; _i < _a.length; _i++) {
	                var width = _a[_i];
	                totalLinksWidth += width;
	            }
	            return totalLinksWidth;
	        };
	        /**
	        * @name - linksClipped
	        * @description - updates arrays for bar and overflow links containing ids
	        * @private
	        * @returns {void}
	        */
	        ActionBar.prototype.linksClipped = function () {
	            this.barLinkIds = [];
	            this.overflowLinkIds = [];
	            var linkIds = [];
	            var linkCount = 0;
	            var allowedWidth = this.width - this.overflowToggleWidth;
	            var visibleLinkWidth = 0;
	            for (var i = 0, linkLength = this.barLinks.length; i < linkLength; i++) {
	                visibleLinkWidth += this.linksWidth[i];
	                if (visibleLinkWidth < allowedWidth) {
	                    this.barLinkIds.push(i);
	                    linkCount++;
	                }
	                else {
	                    this.overflowLinkIds.push(i);
	                }
	            }
	            this.toggleLinks();
	        };
	        /**
	        * @name - setDataAttributes
	        * @description - sets the data attributes for overflow and overflow-id
	        * @private
	        * @returns {void}
	        */
	        ActionBar.prototype.setDataAttributes = function () {
	            for (var i = 0, linksLength = this.barLinks.length; i < linksLength; i++) {
	                this.barLinks[i].setAttribute(ActionBar.overflowIdAttribute, String(i));
	                this.barLinks[i].setAttribute(ActionBar.overflowAttribute, 'false');
	            }
	        };
	        /**
	        * @name - showOverflowLink
	        * @description - shows an overflow link
	        * @private
	        * @param {index} number
	        * @returns {void}
	        */
	        ActionBar.prototype.showOverflowLink = function (index) {
	            this.barLinks[index].setAttribute(ActionBar.overflowAttribute, 'true');
	            this.overflowLinks[index].setAttribute(ActionBar.overflowAttribute, 'true');
	        };
	        /**
	        * @name - hideOverflowLink
	        * @description - hides an overflow link
	        * @private
	        * @param {index} number
	        * @returns {void}
	        */
	        ActionBar.prototype.hideOverflowLink = function (index) {
	            this.barLinks[index].setAttribute(ActionBar.overflowAttribute, 'false');
	            this.overflowLinks[index].setAttribute(ActionBar.overflowAttribute, 'false');
	        };
	        /**
	        * @name - toggleLinks
	        * @description - updates data attributes for showing/hiding links
	        * @private
	        * @returns {void}
	        */
	        ActionBar.prototype.toggleLinks = function () {
	            for (var _i = 0, _a = this.overflowLinkIds; _i < _a.length; _i++) {
	                var linkId = _a[_i];
	                this.showOverflowLink(linkId);
	            }
	            for (var _b = 0, _c = this.barLinkIds; _b < _c.length; _b++) {
	                var linkId = _c[_b];
	                this.hideOverflowLink(linkId);
	            }
	        };
	        /**
	         * @name - selector
	         * @description - selector for the ActionBar module.
	         * @static
	         * @public
	         * @type {string}
	         */
	        ActionBar.selector = '.m-action-bar';
	        /**
	         * @name - overflowClass
	         * @description - the class for the overflow.
	         * @private
	         * @static
	         * @type {string}
	         */
	        ActionBar.overflowClass = 'f-overflow';
	        /**
	         * @name - ariaHiddenAttribute
	         * @description - the aria-hidden attribute
	         * @private
	         * @static
	         * @type {string}
	         */
	        ActionBar.ariaHiddenAttribute = 'aria-hidden';
	        /**
	         * @name - ariaExpandedAttribute
	         * @description - the aria-expanded attribute
	         * @private
	         * @static
	         * @type {string}
	         */
	        ActionBar.ariaExpandedAttribute = 'aria-expanded';
	        /**
	         * @name - overflowSelector
	         * @description - the overflow selector
	         * @private
	         * @static
	         * @type {string}
	         */
	        ActionBar.overflowSelector = ActionBar.selector + ' > .f-overflow > ul';
	        /**
	         * @name - overflowLinkSelector
	         * @description - the overflow link selector
	         * @private
	         * @static
	         * @type {string}
	         */
	        ActionBar.overflowLinkSelector = ActionBar.overflowSelector + ' > li';
	        /**
	         * @name - overflowToggleSelector
	         * @description - the overflow toggle button selector
	         * @private
	         * @static
	         * @type {string}
	         */
	        ActionBar.overflowToggleSelector = ActionBar.selector + ' > .f-overflow > button';
	        /**
	         * @name - barLinkSelector
	         * @description - the links on the bar selector
	         * @private
	         * @static
	         * @type {string}
	         */
	        ActionBar.barLinkSelector = ActionBar.selector + ' > li';
	        /**
	         * @name - overflowAttribute
	         * @description - the overflow attribute (boolean value)
	         * @private
	         * @static
	         * @type {string}
	         */
	        ActionBar.overflowAttribute = 'data-overflow';
	        /**
	         * @name - overflowIdAttribute
	         * @description - the overflow id attribute (number value)
	         * @private
	         * @static
	         * @type {string}
	         */
	        ActionBar.overflowIdAttribute = 'data-overflow-id';
	        return ActionBar;
	    }(observableComponent_1.ObservableComponent));
	    exports.ActionBar = ActionBar;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(9), __webpack_require__(11), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, publisher_1, componentFactory_1, tooltip_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	     * @class ActionToggle component
	     * @classdesc - The ActionToggle component
	     * @export
	     */
	    var ActionToggle = (function (_super) {
	        __extends(ActionToggle, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the ActionToggle component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the ActionToggle behavior to.
	        */
	        function ActionToggle(element) {
	            var _this = this;
	            _super.call(this, element);
	            this.element = element;
	            /**
	            * @name - updateActionToggleState
	            * @description - Updates the button's ux state.
	            * @param {boolean} targetState - True for toggled and false for initial
	            * @private
	            * @returns {void}
	            */
	            this.updateActionToggleState = function (targetState) {
	                if (targetState === _this.isToggled()) {
	                    return;
	                }
	                if (targetState) {
	                    htmlExtensions_1.addClass(_this.element, ActionToggle.initializeToggledClassName);
	                    // Toggle the glyph classes if needed
	                    if (!!_this.initialGlyph) {
	                        htmlExtensions_1.removeClass(_this.element, _this.initialGlyph);
	                    }
	                    if (!!_this.toggledGlyph) {
	                        htmlExtensions_1.addClass(_this.element, _this.toggledGlyph);
	                    }
	                    // Toggle the label for actionToggle
	                    if (!!_this.element.getAttribute(ActionToggle.ariaLabelAttribute)) {
	                        _this.element.setAttribute(ActionToggle.ariaLabelAttribute, _this.localizedToggledLabelValue);
	                    }
	                    else {
	                        htmlExtensions_1.setText(_this.element, _this.localizedToggledLabelValue);
	                    }
	                    if (!!_this.tooltip) {
	                        _this.tooltip.setContent(_this.localizedToggledLabelValue);
	                    }
	                }
	                else {
	                    htmlExtensions_1.removeClass(_this.element, ActionToggle.initializeToggledClassName);
	                    // Toggle the glyph classes if needed
	                    if (!!_this.toggledGlyph) {
	                        htmlExtensions_1.removeClass(_this.element, _this.toggledGlyph);
	                    }
	                    if (!!_this.initialGlyph) {
	                        htmlExtensions_1.addClass(_this.element, _this.initialGlyph);
	                    }
	                    // Toggle the label for actionToggle
	                    if (!!_this.element.getAttribute(ActionToggle.ariaLabelAttribute)) {
	                        _this.element.setAttribute(ActionToggle.ariaLabelAttribute, _this.localizedInitialLabelValue);
	                    }
	                    else {
	                        htmlExtensions_1.setText(_this.element, _this.localizedInitialLabelValue);
	                    }
	                    if (!!_this.tooltip) {
	                        _this.tooltip.setContent(_this.localizedInitialLabelValue);
	                    }
	                }
	                _this.initiatePublish({ toggled: targetState });
	            };
	            /**
	            * @name - onActionToggleChange
	            * @private
	            * @description - The action toggle button's click/mouse/tap event listener.
	            * @returns {void}
	            */
	            this.onActionToggleChange = function () {
	                _this.updateActionToggleState(!_this.isToggled());
	            };
	            /**
	            * @name - handleKeydownEvent
	            * @description - event handler for keyboard events
	            * @param {KeyboardEvent} event - the keyboard event
	            * @private
	            * @returns {void}
	            */
	            this.handleKeydownEvent = function (event) {
	                switch (utility_1.getKeyCode(event)) {
	                    case 13 /* Enter */:
	                    case 32 /* Space */:
	                        htmlExtensions_1.preventDefault(event);
	                        _this.updateActionToggleState(!_this.isToggled());
	                        break;
	                    case 27 /* Escape */:
	                        htmlExtensions_1.preventDefault(event);
	                        _this.updateActionToggleState(false);
	                        break;
	                }
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        ActionToggle.prototype.update = function () {
	            var _this = this;
	            if (!this.element) {
	                return;
	            }
	            this.initializeLocalization();
	            var initialState = htmlExtensions_1.hasClass(this.element, ActionToggle.initializeToggledClassName);
	            var tooltipId = this.element.getAttribute(tooltip_1.Tooltip.dataDescribedByAttribute);
	            if (!!tooltipId) {
	                componentFactory_1.ComponentFactory.create([{
	                        component: tooltip_1.Tooltip,
	                        eventToBind: 'DOMContentLoaded',
	                        elements: [document.getElementById(tooltipId)],
	                        callback: function (results) {
	                            if (!!results || !!results.length) {
	                                _this.tooltip = results[0];
	                                _this.tooltip.setContent(initialState ? _this.localizedToggledLabelValue : _this.localizedInitialLabelValue);
	                            }
	                        }
	                    }]);
	            }
	            if (initialState) {
	                // Remove the toggle indicator to force a state switch in the first call to updateActionToggleState()
	                htmlExtensions_1.removeClass(this.element, ActionToggle.initializeToggledClassName);
	            }
	            this.updateActionToggleState(initialState);
	            // Bind listeners
	            htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.click, this.onActionToggleChange);
	            htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.handleKeydownEvent);
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        ActionToggle.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.click, this.onActionToggleChange);
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.handleKeydownEvent);
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {IActionToggleSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        ActionToggle.prototype.publish = function (subscriber, context) {
	            if (subscriber.onActionToggled) {
	                subscriber.onActionToggled(context);
	            }
	        };
	        /**
	        * @name - isToggled
	        * @memberof - ActionToggle
	        * @description - Gets the current toggled state.
	        * @public
	        * @returns {boolean} - true if the ActionToggle is toggled, otherwise false.
	        */
	        ActionToggle.prototype.isToggled = function () {
	            return htmlExtensions_1.hasClass(this.element, ActionToggle.initializeToggledClassName);
	        };
	        /**
	        * @name - initializeLocalization
	        * @description - Initialize all the localization strings.
	        * @private
	        * @returns {void}
	        */
	        ActionToggle.prototype.initializeLocalization = function () {
	            if (!!this.element.getAttribute(ActionToggle.ariaLabelAttribute)) {
	                this.localizedInitialLabelValue = this.element.getAttribute(ActionToggle.ariaLabelAttribute);
	            }
	            else if (!!htmlExtensions_1.getText(this.element)) {
	                this.localizedInitialLabelValue = htmlExtensions_1.getText(this.element);
	            }
	            this.localizedToggledLabelValue = this.element.getAttribute(ActionToggle.localizedToggledLabelAttribute);
	            for (var _i = 0, _a = this.element.className.split(' '); _i < _a.length; _i++) {
	                var className = _a[_i];
	                if (className.indexOf('glyph-') >= 0) {
	                    this.initialGlyph = className;
	                    break;
	                }
	            }
	            this.toggledGlyph = this.element.getAttribute(ActionToggle.toggledGlyphAttribute);
	        };
	        /**
	        * @name - actionToggleSelector
	        * @description - The selector for action toggle items.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ActionToggle.selector = '.c-action-toggle';
	        /**
	        * @name - ariaLabelAttribute
	        * @description - The aria-label attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        ActionToggle.ariaLabelAttribute = 'aria-label';
	        /**
	        * @name - initializeToggledClassName
	        * @description - The classname used to initialize the control as toggled or not.
	        * @static
	        * @private
	        * @type {string}
	        */
	        ActionToggle.initializeToggledClassName = 'f-toggle';
	        /**
	        * @name - toggledGlyphAttribute
	        * @description - The attribute for the toggled glyph of the actionToggle
	        * @private
	        * @static
	        * @type {string}
	        */
	        ActionToggle.toggledGlyphAttribute = 'data-toggled-glyph';
	        /**
	        * @name - localizedToggledLabelAttribute
	        * @description - The localized value for the attribute for the toggled label of the actionToggle
	        * @private
	        * @static
	        * @type {string}
	        */
	        ActionToggle.localizedToggledLabelAttribute = 'data-toggled-label';
	        return ActionToggle;
	    }(publisher_1.Publisher));
	    exports.ActionToggle = ActionToggle;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class ComponentFactory
	    * @classdesc - The ComponentFactory which handles creating and finding components.
	    * @export
	    */
	    var ComponentFactory = (function () {
	        function ComponentFactory() {
	        }
	        /**
	        * @name - create
	        * @memberof ComponentFactory
	        * @description - A factory method to create components.
	        * @static
	        * @public
	        * @param {FactoryInput[]} factoryInputs - an array of ComponentFactory.FactoryInput object.
	        * FactoryInput object has the following properties.
	        * 1. selector - the css selector to bind the component to.
	        *               A component that will be created using a factory *MUST* have a default selector.
	        * 2. context - the context css selector.
	        * 2. eventToBind - an event that will be listned before a component binded to the DOM.
	        * 3. component - a component class from where a component object to be created from.
	        *                You can also use c to save on bytes.
	        * 4. elements - an optional array of existing elements to bind to instead of a selector to find elements by.
	        * 5. callback - a call back function that will be called when the component is successfully created.
	        *
	        * Example - 1 - Creating components with default selector.
	        * ComponentFactory.create([{'component': Carousel},
	        *                          {'component': Slider}]);
	        * Or
	        * ComponentFactory.create([{'c': Carousel},
	        *                          {'c': Slider}]);
	        *
	        * Example - 2 - Creating component with a given selector.
	        * ComponentFactory.create([{'component': Carousel, selector: '#myCarousel'}
	        *                         ,{'component': Slider, selector: '#mySlider'}]);
	        * Or
	        * ComponentFactory.create([{'c': Carousel, selector: '#myCarousel'}
	        *                         ,{'c': Slider, selector: '#mySlider'}]);
	        *
	        * Example - 3 - Creating component with a given selector and a callback function.
	        * Callback function example:
	        * function setSliderMax(slider) {
	        *      slider.setValue(120);
	        * }
	        *
	        * ComponentFactory.create([{'component': Slider, selector: '#myslider', callback: setSliderMax}]);
	        * Or
	        * ComponentFactory.create([{'c': Slider, selector: '#myslider', callback: setSliderMax}]);
	        *
	        * Example - 4 - creating component with a given selector in a given context.
	        *
	        * ComponentFactory.create([{'component': Slider, selector: '#myslider', callback: setSliderMax, context: '.myContainer'}]);
	        *
	        * Example - 5 - creating component for an existing element.
	        *
	        * ComponentFactory.create([{'component': Slider, eventToBind: 'DOMContentLoaded', elements: [this.myslider], callback: setSliderMax}]);
	        * @returns {void}
	        */
	        ComponentFactory.create = function (factoryInputs) {
	            for (var _i = 0, factoryInputs_1 = factoryInputs; _i < factoryInputs_1.length; _i++) {
	                var factoryInput = factoryInputs_1[_i];
	                if (!factoryInput.c && !factoryInput.component) {
	                    throw 'factoryInput should has either component or c to tell the factory what component to create.' +
	                        'Eg.ComponentFactory.create([{ c: Carousel] or ComponentFactory.create([component: Carousel]))';
	                }
	                ComponentFactory.createComponent(factoryInput.component || factoryInput.c, factoryInput);
	            }
	        };
	        /**
	        * @name - createComponent
	        * @memberof ComponentFactory
	        * @description - Creates a component, Bind to Html and execute a call back function after the component is created.
	        * @static
	        * @private
	        * @template T - a generic type.
	        * @param {{ new (componentContainer: HTMLElement): T; selector: string }} type - the type of componet to be created.
	        * @param {FactoryInput} [input] - the FactoryInput object that has call back.
	        * @returns {void}
	        */
	        ComponentFactory.createComponent = function (type, input) {
	            if (!type) {
	                return;
	            }
	            var eventToBind = (input && input.eventToBind) ? input.eventToBind : '';
	            var selector = (input && input.selector) ? input.selector : type.selector;
	            var context = (input && input.context) ? input.context : null;
	            var results = [];
	            var bindFunction = function (typeName, selector, params) {
	                var elements = input.elements ? input.elements : selector ? htmlExtensions_1.selectElementsT(selector, context) : [document.body];
	                for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
	                    var componentContainer = elements_1[_i];
	                    if (!componentContainer.mwfInstances) {
	                        componentContainer.mwfInstances = [];
	                    }
	                    if (!componentContainer.mwfInstances[typeName]) {
	                        var component = new type(componentContainer, params);
	                        componentContainer.mwfInstances[typeName] = component;
	                        results.push(component);
	                    }
	                    else {
	                        results.push(componentContainer.mwfInstances[typeName]);
	                    }
	                }
	            };
	            switch (eventToBind) {
	                // todo - bruk - may need to review if there is a need to bind to a different state.
	                case 'DOMContentLoaded':
	                    htmlExtensions_1.documentReady(function () {
	                        ComponentFactory.callBindFunction(type, selector, bindFunction, input, results);
	                    });
	                    break;
	                case 'load':
	                default:
	                    if (ComponentFactory.onDeferredHappened) {
	                        ComponentFactory.callBindFunction(type, selector, bindFunction, input, results);
	                    }
	                    else {
	                        ComponentFactory.deferredFunctions
	                            .push(function () { return ComponentFactory.callBindFunction(type, selector, bindFunction, input, results); });
	                        break;
	                    }
	            }
	        };
	        /**
	        * @name - callBindFunction
	        * @memberof ComponentFactory
	        * @description - A call to a function that will bind to DOM and wrapped with perf marker and call back call.
	        * @static
	        * @private
	        * @template T
	        * @param {any} type - The type of the component. Used for perf marker to correlate to our components.
	        * @param {string} selector - A selector a user provided.
	        * @param {Function} bindFunction - A function that actually bind to the DOM
	        * @param {FactoryInput} [input = null] - Factory input that has a call back.
	        * @param {T[]} results - results that has list of component containers to execute the callback against.
	        * @returns {void}
	        */
	        ComponentFactory.callBindFunction = function (type, selector, bindFunction, input, results) {
	            if (input === void 0) { input = null; }
	            var typeName = ComponentFactory.getTypeName(type);
	            var markerName = typeName || selector || '';
	            utility_1.createPerfMarker(markerName + '_Begin');
	            bindFunction(typeName, selector, { mwfClass: typeName });
	            utility_1.createPerfMarker(markerName + '_End');
	            if (input && input.callback) {
	                input.callback(results);
	            }
	        };
	        /**
	        * @name - getTypeName
	        * @memberof ComponentFactory
	        * @description - Gets the name of type if it can.
	        * @static
	        * @private
	        * @param {any} type - The type to try to obtain the name of.
	        *                     NOTE: type is already validated at the public ComponentFactory.create() level.
	        * @returns {string} - The type's name if determined, otherwise undefined.
	        */
	        ComponentFactory.getTypeName = function (type) {
	            // todo - bug#10921102 - this is a temporary fix to resolve bug#10874769.
	            if (type.typeName) {
	                return type.typeName;
	            }
	            if (type.name) {
	                return type.name;
	            }
	            var parts = ComponentFactory.typeNameRegEx.exec(type.toString());
	            if (parts && (parts.length > 1)) {
	                return parts[1];
	            }
	        };
	        /**
	        * @name - enumerateComponents
	        * @memberof ComponentFactory
	        * @description - Enumerates the MWF component/module instances associated with the specified HTMLElment.
	        * @public
	        * @static
	        * @param {HTMLElement} element - The element to enumerate the MWF component/modules of.
	        * @param {IEnumerateComponents} callback - The enumeration callback to call for each associatedMWF component/module.
	        *                                          The callback can return false to terminate the enumeration,
	        * @returns {void}
	        */
	        ComponentFactory.enumerateComponents = function (element, callback) {
	            if (!element || !callback) {
	                return;
	            }
	            var mwfInstances = element.mwfInstances;
	            for (var property in mwfInstances) {
	                if (mwfInstances.hasOwnProperty(property)) {
	                    var mwfInstance = mwfInstances[property];
	                    if (mwfInstance) {
	                        if (!callback(property, mwfInstance)) {
	                            break;
	                        }
	                    }
	                }
	            }
	        };
	        /**
	        * @name - typeNameRegEx
	        * @memberof ComponentFactory
	        * @description - The regular expression to use to try to find an MWF type's name on
	        *                browsers that don't support type.name (like IE)
	        * @static
	        * @private
	        * @type {RegEx}
	        */
	        ComponentFactory.typeNameRegEx = /function\s+(\S+)\s*\(/;
	        /**
	        * @name - onLoadTimeoutMs
	        * @memberof ComponentFactory
	        * @description - The timeout to wait for the onload event
	        * @static
	        * @public
	        * @type {number}
	        */
	        ComponentFactory.onLoadTimeoutMs = 6000;
	        /**
	        * @name - onDeferredHappened
	        * @memberof ComponentFactory
	        * @description - Indicates whether or not the deferred event has already happened or not
	        * @static
	        * @public
	        * @type {boolean}
	        */
	        ComponentFactory.onDeferredHappened = false;
	        /**
	        * @name - deferredFunctions
	        * @memberof ComponentFactory
	        * @description - The list of deferred functions to callback on deferred
	        * @static
	        * @public
	        * @type {Function[]}
	        */
	        ComponentFactory.deferredFunctions = [];
	        return ComponentFactory;
	    }());
	    exports.ComponentFactory = ComponentFactory;
	    (
	    // A self executor to register on deferred callback once.
	    // A self executor to register on deferred callback once.
	    function () {
	        htmlExtensions_1.onDeferred(function () {
	            var registeredFunctions = ComponentFactory.deferredFunctions;
	            if (!registeredFunctions || registeredFunctions.length > 0) {
	                for (var _i = 0, registeredFunctions_1 = registeredFunctions; _i < registeredFunctions_1.length; _i++) {
	                    var registerFunction = registeredFunctions_1[_i];
	                    if (typeof registerFunction === 'function') {
	                        htmlExtensions_1.SafeBrowserApis.requestAnimationFrame.call(window, registerFunction);
	                    }
	                }
	            }
	            ComponentFactory.onDeferredHappened = true;
	        }, ComponentFactory.onLoadTimeoutMs);
	    })();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, stringExtensions_1) {
	    "use strict";
	    /**
	    * @name - isNumber
	    * @description - Checks whether the provided value is a 'number' and not a NaN.
	    * @export
	    * @param {any} value - The value to test.
	    * @returns {boolean} - True if number, otherwise false
	    */
	    function isNumber(value) {
	        return ((!isNaN(value)) && ((typeof value) === 'number'));
	    }
	    exports.isNumber = isNumber;
	    /**
	    * @name - getWindowWidth
	    * @description - Gets the current window width.
	    * @export
	    * @returns {number} - The current window width.
	    */
	    function getWindowWidth() {
	        var clientWidth = window.innerWidth && document.documentElement.clientWidth ?
	            Math.min(window.innerWidth, document.documentElement.clientWidth) :
	            window.innerWidth ||
	                document.documentElement.clientWidth;
	        return clientWidth;
	    }
	    exports.getWindowWidth = getWindowWidth;
	    /**
	    * @name - getWindowHeight
	    * @description - Gets the current window height.
	    * @export
	    * @returns {number} - The current window height.
	    */
	    function getWindowHeight() {
	        return window.innerHeight && document.documentElement.clientHeight
	            ? Math.min(window.innerHeight, document.documentElement.clientHeight)
	            : window.innerHeight || document.documentElement.clientHeight;
	    }
	    exports.getWindowHeight = getWindowHeight;
	    /**
	    * @name - getDimensions
	    * @description - Gets the dimension of an element.
	    * @export
	    * @param  {HTMLElement} containerElement - The container element.
	    * @returns {IClientDimension} - The client dimension.
	    *          {IClientDimension.width} - The client width
	    *          {IClientDimension.height} - The client height
	    */
	    function getDimensions(containerElement) {
	        if (containerElement == null) {
	            return;
	        }
	        return {
	            width: containerElement.clientWidth,
	            height: containerElement.clientHeight
	        };
	    }
	    exports.getDimensions = getDimensions;
	    /**
	    * @name - getVirtualKey
	    * @description - Gets the virtual key string associated with a keyboard event.
	    *                This method is for use with DOM level 4 and up events that use the key property.
	    *                It also has (hopefully temporary) hacks to map around the non-standard
	    *                keyIdentity property used by the QtWebKit that PhantomJs uses and the
	    *                non-standard key identifier values used by Edge.
	    * @export
	    * @param  {KeyboardEvent} event - The keyboard event.
	    * @returns {string} - The virtual key string.
	    */
	    function getVirtualKey(event) {
	        var virtualKey;
	        event = event || window.event;
	        if (!event) {
	            return virtualKey;
	        }
	        // TODO: 9575694 - Remove this compatibility mapping once phantomjs+qtwebkit (argh) uses the W3C standard
	        //         KeyboardEvent.key property instead of KeyboardEvent.keyIdentifier.
	        virtualKey = event.key || event.keyIdentifier;
	        if (!virtualKey) {
	            return virtualKey;
	        }
	        // TODO: 9575694 - Remove this compatibility mapping once Edge (argh) reports the W3C standard key identifiers.
	        //          Spec: http://www.w3.org/TR/uievents-key/#keys-navigation
	        //          Test page: http://www.movable-type.co.uk/dev/keyboardevent-key-values.html
	        switch (virtualKey) {
	            case 'Left': return 'ArrowLeft';
	            case 'Right': return 'ArrowRight';
	            case 'Up': return 'ArrowUp';
	            case 'Down': return 'ArrowDown';
	            case 'Esc': return 'Escape';
	            default: return virtualKey;
	        }
	    }
	    exports.getVirtualKey = getVirtualKey;
	    /**
	    * @name - getKeyCode
	    * @description - Gets the numeric key code associated with a keyboard event.
	    *                This method is for use with DOM level 3 events that still
	    *                use the deprecated keyCode property.
	    * @export
	    * @param  {KeyboardEvent} event - The keyboard event.
	    * @returns {number} - The key code.
	    */
	    function getKeyCode(event) {
	        event = event || window.event;
	        return (event == null) ? null : event.which || event.keyCode || event.charCode;
	    }
	    exports.getKeyCode = getKeyCode;
	    /**
	    * @name - setCookie
	    * @description - Assigns the given value to the named cookie.
	    *                Optionally, an expiary date can be assigned, which is {days} days from now.
	    * @export
	    * @public
	    * @param name - The name of the cookie.
	    * @param value - The value for the cookie.
	    * @param path - The path where the cookie is used.
	    * @param days - Th enumber of days from now you would to make the expiary date for the new cookie.
	    * @returns {void}
	    */
	    function setCookie(name, value, path, days) {
	        var expires = '';
	        if (days) {
	            var date = new Date();
	            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	            expires = '; expires=' + date.toUTCString();
	        }
	        window.document.cookie = name + '=' + encodeURIComponent(value) + expires + ("; path=" + path + ";");
	    }
	    exports.setCookie = setCookie;
	    /**
	    * @name - getCookie
	    * @description - Get the value associated with the given cookie.
	    * @export
	    * @public
	    * @param name - The name of the cookie.
	    * @returns {string} - The value of the specified cookie if the cookie exists, otherwise null.
	    */
	    function getCookie(name) {
	        if (!!name) {
	            for (var _i = 0, _a = document.cookie.split('; '); _i < _a.length; _i++) {
	                var cookie = _a[_i];
	                var delimiterIndex = cookie.indexOf('=');
	                var cookieName = decodeQuotedCookie(cookie.substring(0, delimiterIndex));
	                if (cookieName === name) {
	                    return decodeQuotedCookie(cookie.substring(cookieName.length + 1));
	                }
	            }
	        }
	        return null;
	    }
	    exports.getCookie = getCookie;
	    /**
	    * @name - decodeQuotedCookie
	    * @description - Decodes the given cookie value, removing quotes.
	    * @private
	    * @param value - The value of the cookie.
	    * @returns {string} - The decoded value.
	    */
	    function decodeQuotedCookie(value) {
	        value = decodeURIComponent(value.replace('/\+/g', ' '));
	        //unRfc2068
	        if (value.indexOf('"') === 0) {
	            // This is a quoted cookie as according to RFC2068, unescape
	            value = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
	        }
	        return value;
	    }
	    /**
	    * @name - detectContrast
	    * @description -
	    *      Gets the contrast value for the specified hex color value (RRGGBB).
	    *      http://stackoverflow.com/questions/5650924/javascript-color-contraster
	    * @export
	    * @param  {string} hexValue - The color hexValue.
	    * @returns {Contrast} - The contrast value if detectable, otherwise null.
	    */
	    function detectContrast(hexValue) {
	        if (!!hexValue && (hexValue.length === 6)) {
	            var red = parseInt(hexValue.substring(0, 2), 16);
	            var green = parseInt(hexValue.substring(2, 4), 16);
	            var blue = parseInt(hexValue.substring(4, 6), 16);
	            if (!isNaN(red) && !isNaN(green) && !isNaN(blue)) {
	                var brightness = ((red * 299) + (green * 587) + (blue * 114)) / 255000;
	                return (brightness >= 0.5) ? 2 /* dark */ : 1 /* light */;
	            }
	        }
	        return null;
	    }
	    exports.detectContrast = detectContrast;
	    ;
	    /**
	    * @name - pointInRect
	    * @description - Determines if the specified point lies within the specified rectangle.
	    *                Note this assumes the HTML coordinate system where top is less than bottom.
	    * @export
	    * @public
	    * @param  {number} x - The x coordinate of the point.
	    * @param  {number} y - The y coordinate of the point.
	    * @param  {ClientRect} rectangle - The rectangle.
	    * @returns {boolean} - True if the point lies within the rectangle, otherwise false.
	    */
	    function pointInRect(x, y, rectangle) {
	        if (!rectangle || !isNumber(x) || !isNumber(y) ||
	            !isNumber(rectangle.left) || !isNumber(rectangle.right) ||
	            !isNumber(rectangle.top) || !isNumber(rectangle.bottom)) {
	            return false;
	        }
	        return (x >= rectangle.left) && (x <= rectangle.right) && (y >= rectangle.top) && (y <= rectangle.bottom);
	    }
	    exports.pointInRect = pointInRect;
	    ;
	    /**
	    * @name - apiDeprecated
	    * @description - Write an error message to console for deprecated methods.
	    * @export
	    * @public
	    * @param  {string} message - The message to write to the error console.
	    * @returns {void}
	    */
	    function apiDeprecated(message) {
	        if (console && console.warn) {
	            console.warn(message);
	        }
	        else if (console && console.error) {
	            console.error(message);
	        }
	    }
	    exports.apiDeprecated = apiDeprecated;
	    /**
	    * @name - createPerfMarker
	    * @description - Creates a performance marker if supported and have the switch available.
	    * @export
	    * @public
	    * @param  {string} message - The message to write to the error console.
	    * @returns {void}
	    */
	    function createPerfMarker(name) {
	        // This is ONERF specific code for perf analysis.
	        /*!/#IFDEF perf_marker_global || log_define_timing */
	        if (stringExtensions_1.isNullOrWhiteSpace(name) || !window.performance || !window.performance.mark) {
	            return;
	        }
	        var normalizedName = name.split(' ').join('_');
	        // Create the performance mark
	        window.performance.mark(normalizedName);
	        if (window.console && window.console.timeStamp) {
	            window.console.timeStamp(normalizedName);
	        }
	        /*!/#ENDIF*/
	    }
	    exports.createPerfMarker = createPerfMarker;
	    /**
	    * @name - toElapsedTimeString
	    * @description - Formats the number (of seconds) as elapsed time.
	    * @export
	    * @public
	    * @param  {number} seconds - The number of elapsed seconds.
	    * @returns {string} - The elapsed time in h:mm:ss format.
	    */
	    function toElapsedTimeString(seconds) {
	        if (!isNumber(seconds) || (seconds <= 0)) {
	            return '00:00';
	        }
	        var hours = Math.floor(seconds / 3600);
	        var remainder = seconds % 3600;
	        var minutes = Math.floor(remainder / 60);
	        var elapsedTime = (hours > 0) ? hours + ':' : '';
	        seconds = Math.floor(remainder % 60);
	        elapsedTime += ((minutes < 10) ? '0' : '') + minutes;
	        elapsedTime += ':' + ((seconds === 0) ? '00' : (((seconds < 10) ? '0' : '') + seconds));
	        return elapsedTime;
	    }
	    exports.toElapsedTimeString = toElapsedTimeString;
	    ;
	    /**
	    * @name - parseJson
	    * @description - Parses a json string into an object.
	    * @public
	    * @export
	    * @param {string} json - The json to parse.
	    * @returns {any} - The object defined by the json if the parse succeeds.
	    * @throws {any} - JSON.parse() may throw or we may throw is JSON.parse is unavailble.
	    */
	    function parseJson(json) {
	        if (!JSON || !JSON.parse) {
	            throw new Error('JSON.parse unsupported.');
	        }
	        if (!json) {
	            throw new Error('Invalid json.');
	        }
	        return JSON.parse(json);
	    }
	    exports.parseJson = parseJson;
	    /**
	    * @name - extend
	    * @description - extends an object with properties/values from one or more others.
	    * @export
	    * @public
	    * @param  {any[]} parameters - The objects to merge together.
	    * @returns {any} - The extended object.
	    */
	    function extend() {
	        var parameters = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            parameters[_i - 0] = arguments[_i];
	        }
	        for (var index = 1; index < parameters.length; index++) {
	            for (var key in parameters[index]) {
	                if (parameters[index].hasOwnProperty(key)) {
	                    if (typeof parameters[index][key] === 'object') {
	                        parameters[0][key] = extend(parameters[0][key] || {}, parameters[index][key]);
	                    }
	                    else {
	                        parameters[0][key] = parameters[index][key];
	                    }
	                }
	            }
	        }
	        return arguments[0];
	    }
	    exports.extend = extend;
	    /**
	     * @name - poll
	     * @description - Generic polling function which polls for certain criteria. If criteria is met, stop and call successCallback.
	     *                If criteria is not met, try again after a certain interval.
	     *                If a timeout and timeoutCallback are provided, discontinue polling and call timeoutCallback if timeout is
	     *                exceeded before criteria is met.
	     * @export
	     * @public
	     * @param {Function} checkcriteria - Function which determines whether or not a desired criteria has been met and returns true if yes.
	     *                                    For example, the function might evaluate to something like:
	     *                                    return document.getElementById('someId').offsetTop > 0;
	     * @param {number} interval - value (in milliseconds, 100 by default) which defines how often to check the conditon
	     * @param {number} timeout - timeout value (in milliseconds); if not provided or provided value is less than zero,
	     *                           then there is no timeout
	     * @param {Function} successCallback - optional function to call when the criteria is met - if not provided, polling will quietly stop
	     * @param {Function} timeoutCallback - optional function to be called when the poll times out - if not provided, polling will quietly stop
	     * @todo - 8495865 - add unit tests for this method
	     */
	    function poll(checkCriteria, interval, timeout, successCallback, timeoutCallback) {
	        var endTime;
	        if (!timeout || timeout < 0) {
	            endTime = Number(new Date('9999-12-31'));
	        }
	        else {
	            endTime = Number(new Date()) + timeout;
	        }
	        interval = interval || 100;
	        (function internalPoll() {
	            var successful = checkCriteria();
	            if (successful && successCallback) {
	                successCallback();
	            }
	            else if (successful) {
	                // criteria met without successCallback provided - quietly stop
	                return;
	            }
	            else if (Number(new Date()) < endTime) {
	                setTimeout(internalPoll, interval);
	            }
	            else if (timeoutCallback) {
	                timeoutCallback();
	            }
	            else {
	                // timeout exceeded without timeoutCallback provided - quietly stop
	                return;
	            }
	        })();
	    }
	    exports.poll = poll;
	    /**
	     * @name - getQSPValue
	     * @description - Gets a query string parameter value from a URL.
	     * @export
	     * @param {string} queryStringParamName - The query string parameter name.
	     * @returns {string} - The QSP’s value if present, otherwise an empty string.
	    */
	    function getQSPValue(queryStringParamName) {
	        queryStringParamName = queryStringParamName.replace(/[\[\]]/g, '\\$&');
	        var regex = new RegExp('[\\?&]' + queryStringParamName.toLowerCase() + '=([^&#]*)');
	        var results = regex.exec(location.search.toLowerCase());
	        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	    }
	    exports.getQSPValue = getQSPValue;
	    ;
	    /**
	     * @name - Viewports
	     * Config describing various attributes of the css viewport values for MWF.
	     */
	    var Viewports;
	    (function (Viewports) {
	        Viewports.allWidths = [320, 540, 768, 1084, 1400, 1779];
	        Viewports.vpMin = Viewports.allWidths[0];
	        Viewports.vpMax = 2048;
	        /**
	         * Get the mwf vp-* number representing the grid viewport.
	         *
	         * @static
	         * @returns {Names} - the mwf vp-* number representing the grid viewport.
	         */
	        function getViewport() {
	            if (window.matchMedia) {
	                for (var i = 0; i < Viewports.allWidths.length; ++i) {
	                    if (!window.matchMedia('(min-width:' + Viewports.allWidths[i] + 'px)').matches) {
	                        return i;
	                    }
	                }
	            }
	            else {
	                for (var i = 0; i < Viewports.allWidths.length; ++i) {
	                    if (!(getWindowWidth() >= Viewports.allWidths[i])) {
	                        return i;
	                    }
	                }
	            }
	            return Viewports.allWidths.length;
	        }
	        Viewports.getViewport = getViewport;
	    })(Viewports = exports.Viewports || (exports.Viewports = {}));
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="tooltip"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - Tooltip
	    * @classdesc - The Tooltip component
	    * @export
	    */
	    var Tooltip = (function (_super) {
	        __extends(Tooltip, _super);
	        /**
	         * @name - constructor
	         * @description - Constructor for the Tooltip component.
	         * @public
	         * @param {HTMLElement} element - the native element to attach the Tooltip behavior to.
	         */
	        function Tooltip(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	             * @name - isVisible
	             * @description - Flag indicating whether or not the Tooltip is currently visible.
	             * @private
	             * @type {boolean}
	             */
	            this.isVisible = false;
	            /**
	             * @name - timer
	             * @description - The timer used to delay the showing of the tooltip.
	             * @private
	             * @type {number}
	             */
	            this.timer = 0;
	            /**
	             * @name - exposeToScreenReaders
	             * @description - Describes whether the tooltip should  be exposed to screen-readers when shown visually.
	             *               There are certain cases where this content shouldn't be exposed to screen-readers,
	             *               such as when it contains content that is redundant to screen-readers but not to
	             *               keyboard/mouse users.
	             * @private
	             * @type {boolean}
	             */
	            this.exposeToScreenReaders = true;
	            /**
	              * @name - onFocus
	              * @description - Handles the focus event
	              * @private
	              * @param {FocusEvent} event - The FocusEvent event.
	              * @returns {void}
	              */
	            this.onFocus = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                if (event && event.type !== 'mouseover') {
	                    _this.actOnFocus();
	                }
	            };
	            /**
	              * @name - handleKeydownWhenFocused
	              * @description - Handles keydown event when tooltip is displayed via keyboard focus
	              * @private
	              * @param {KeyboardEvent} - event: the event object
	              * @returns {void}
	              */
	            this.handleKeydownWhenFocused = function (event) {
	                if (!_this.isVisible) {
	                    return;
	                }
	                event = htmlExtensions_1.getEvent(event);
	                var keyCode = utility_1.getKeyCode(event);
	                switch (keyCode) {
	                    case 27 /* Escape */:
	                        _this.hide();
	                        break;
	                    case 38 /* ArrowUp */:
	                    case 40 /* ArrowDown */:
	                        htmlExtensions_1.preventDefault(event);
	                        break;
	                }
	            };
	            /**
	              * @name - onBlur
	              * @description - Handles the blur event
	              * @private
	              * @returns {void}
	              */
	            this.onBlur = function () {
	                _this.hide();
	                htmlExtensions_1.addEvent(_this.controller, htmlExtensions_1.eventTypes.focus, _this.onFocus);
	                htmlExtensions_1.removeEvent(_this.controller, htmlExtensions_1.eventTypes.blur, _this.onBlur);
	                htmlExtensions_1.removeEvent(_this.controller, htmlExtensions_1.eventTypes.keydown, _this.handleKeydownWhenFocused);
	            };
	            /**
	             * @name - onMouseOver
	             * @description - Handles the mouseover event.
	             * @param {MouseEvent} - event: the event object
	             * @private
	             * @returns {void}
	             */
	            this.onMouseOver = function (event) {
	                if (_this.isVisible) {
	                    return;
	                }
	                event = htmlExtensions_1.getEvent(event);
	                _this.tooltipXPosition = event.clientX;
	                _this.tooltipYPosition = event.clientY;
	                _this.actOnMouseOver();
	            };
	            /**
	             * @name - onMouseOut
	             * @description - Handles the mouseout event.
	             * @private
	             * @returns {void}
	             */
	            this.onMouseOut = function () {
	                if (_this.timer > 0) {
	                    window.clearTimeout(_this.timer);
	                    _this.timer = 0;
	                }
	                _this.hide();
	                htmlExtensions_1.removeEvent(_this.controller, htmlExtensions_1.eventTypes.mouseout, _this.onMouseOut);
	                htmlExtensions_1.addEvent(_this.controller, htmlExtensions_1.eventTypes.mouseover, _this.onMouseOver);
	            };
	            /**
	             * @name - showForMouse
	             * @description - Show the tooltip when activated by a mouse
	             * @private
	             * @returns {void}
	             */
	            this.showForMouse = function () {
	                _this.show();
	                // Removing binding of mouseover because we're already over the tooltip
	                htmlExtensions_1.removeEvent(_this.controller, htmlExtensions_1.eventTypes.mouseover, _this.onMouseOver);
	            };
	            /**
	             * @name - onScroll
	             * @description - Scroll event handler
	             * @param - {UIEvent} - event: the event object
	             * @private
	             * @returns {void}
	             */
	            this.onScroll = function (event) {
	                if (!_this.isVisible || _this.animationFrameRequested) {
	                    return;
	                }
	                _this.animationFrameRequested = true;
	                htmlExtensions_1.SafeBrowserApis.requestAnimationFrame.call(window, function () { return _this.handleScroll(); });
	            };
	            this.update();
	        }
	        /**
	         * @name - update
	         * @description - Updates the component if there is any change to its underlying DOM.
	         * @protected
	         * @returns {void}
	         */
	        Tooltip.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            var tooltipId = this.element.getAttribute('id');
	            this.controller = htmlExtensions_1.selectFirstElement("[" + Tooltip.ariaDescribedByAttribute + "=\"" + tooltipId + "\"]");
	            if (!this.controller) {
	                this.controller = htmlExtensions_1.selectFirstElement("[" + Tooltip.dataDescribedByAttribute + "=\"" + tooltipId + "\"]");
	                // If we get the controller via the data-f-describedby attribute,
	                // we are deliberately not associating the tooltip with aria attributes
	                // so we should not expose the tooltip to screen readers.
	                this.exposeToScreenReaders = !!this.controller ? false : true;
	            }
	            this.element.setAttribute(Tooltip.ariaHidden, 'true');
	            if (!this.exposeToScreenReaders) {
	                htmlExtensions_1.addClass(this.element, Tooltip.hiddenClass);
	                htmlExtensions_1.addClass(this.element, Tooltip.hiddenFromScreenReadersClass);
	            }
	            if (!!this.controller) {
	                htmlExtensions_1.addEvent(this.controller, htmlExtensions_1.eventTypes.mouseover, this.onMouseOver);
	                htmlExtensions_1.addEvent(this.controller, htmlExtensions_1.eventTypes.focus, this.onFocus);
	                htmlExtensions_1.addEvent(window, htmlExtensions_1.eventTypes.scroll, this.onScroll);
	            }
	        };
	        /**
	         * @name - teardown
	         * @description - Called by ObservableComponent when the component needs to clean up its state.
	         *                Components should remove any event bindings they've added to ensure they are
	         *                not duplicated during repeated update/teardown cycles.
	         * @protected
	         * @returns {void}
	         */
	        Tooltip.prototype.teardown = function () {
	            // Remove the click listener.
	            htmlExtensions_1.removeEvent(this.controller, htmlExtensions_1.eventTypes.mouseover, this.onMouseOver);
	            htmlExtensions_1.removeEvent(this.controller, htmlExtensions_1.eventTypes.mouseout, this.onMouseOut);
	            htmlExtensions_1.removeEvent(this.controller, htmlExtensions_1.eventTypes.focus, this.onFocus);
	            htmlExtensions_1.removeEvent(this.controller, htmlExtensions_1.eventTypes.blur, this.onBlur);
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.scroll, this.onScroll);
	            // Reset non static members
	            this.controller = null;
	            this.isVisible = false;
	            this.tooltipXPosition = 0;
	            this.tooltipYPosition = 0;
	            // Clear our timer.
	            if (this.timer > 0) {
	                window.clearTimeout(this.timer);
	                this.timer = 0;
	            }
	        };
	        /**
	          * @name - actOnFocus
	          * @description - Handles non-event based focus logic
	          * @private
	          * @returns {void}
	          */
	        Tooltip.prototype.actOnFocus = function () {
	            htmlExtensions_1.removeClass(this.element, Tooltip.hookHover);
	            htmlExtensions_1.addClass(this.element, Tooltip.hookFocus);
	            var clientRect = htmlExtensions_1.getClientRect(this.controller);
	            this.tooltipXPosition = clientRect.left;
	            this.tooltipYPosition = clientRect.bottom;
	            this.show();
	            htmlExtensions_1.addEvent(this.controller, htmlExtensions_1.eventTypes.blur, this.onBlur);
	            htmlExtensions_1.addEvent(this.controller, htmlExtensions_1.eventTypes.keydown, this.handleKeydownWhenFocused);
	            htmlExtensions_1.removeEvent(this.controller, htmlExtensions_1.eventTypes.focus, this.onFocus);
	        };
	        /**
	         * @name - actOnMouseOver
	         * @description - Handles non-event based mouseOver logic
	         * @private
	         * @returns {void}
	         */
	        Tooltip.prototype.actOnMouseOver = function () {
	            htmlExtensions_1.removeClass(this.element, Tooltip.hookFocus);
	            htmlExtensions_1.addClass(this.element, Tooltip.hookHover);
	            this.timer = window.setTimeout(this.showForMouse, Tooltip.timerDelay);
	            htmlExtensions_1.addEvent(this.controller, htmlExtensions_1.eventTypes.mouseout, this.onMouseOut);
	        };
	        /**
	         * @name - handleScroll
	         * @description - Handles business logic of scroll event
	         * @private
	         * @returns {void}
	         */
	        Tooltip.prototype.handleScroll = function () {
	            this.animationFrameRequested = false;
	            var scrollY = htmlExtensions_1.getScrollY();
	            var offset = this.scrollYOnShow - scrollY;
	            this.setPosition({
	                top: this.tooltipYPosition + offset
	            });
	        };
	        /**
	          * @name - show
	          * @description - Show the tooltip, by calling the show callback function
	          * @private
	          * @returns {void}
	          */
	        Tooltip.prototype.show = function () {
	            this.isVisible = true;
	            this.scrollYOnShow = htmlExtensions_1.getScrollY();
	            if (this.exposeToScreenReaders) {
	                this.element.setAttribute(Tooltip.ariaHidden, 'false');
	            }
	            else {
	                htmlExtensions_1.removeClass(this.element, Tooltip.hiddenClass);
	            }
	            this.setPosition({
	                left: this.tooltipXPosition,
	                top: this.tooltipYPosition
	            });
	        };
	        /**
	         * @name - hide
	         * @description - Hide the tooltip.
	         * @private
	         * @returns {void}
	         */
	        Tooltip.prototype.hide = function () {
	            if (!!this.element && this.isVisible) {
	                this.isVisible = false;
	                if (this.exposeToScreenReaders) {
	                    this.element.setAttribute(Tooltip.ariaHidden, 'true');
	                }
	                else {
	                    htmlExtensions_1.addClass(this.element, Tooltip.hiddenClass);
	                }
	                htmlExtensions_1.removeClass(this.element, Tooltip.hookHover);
	                htmlExtensions_1.removeClass(this.element, Tooltip.hookFocus);
	            }
	        };
	        /**
	          * @name - setContent
	          * @description - Set the content of the tooltip
	          * @param {string} - content: The text-content to set the tooltip to
	          * @public
	          * @returns {void}
	          */
	        Tooltip.prototype.setContent = function (content) {
	            if (!!this.element) {
	                htmlExtensions_1.setText(this.element, content);
	            }
	        };
	        /**
	          * @name - setPosition
	          * @description - Set the tooltip's position by setting the left and top styles
	          * @param {ISetPostition} - position: the position values
	          * @private
	          * @returns {void}
	          */
	        Tooltip.prototype.setPosition = function (position) {
	            if (!position) {
	                return;
	            }
	            if (!!position.left) {
	                htmlExtensions_1.css(this.element, 'left', position.left + 'px');
	            }
	            if (!!position.top) {
	                htmlExtensions_1.css(this.element, 'top', position.top + 'px');
	            }
	        };
	        /**
	         * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	         */
	        Tooltip.init = function (input) {
	            utility_1.apiDeprecated('Tooltip.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Tooltip,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	         * @name - selector
	         * @description - The tooltip component selector.
	         * @static
	         * @public
	         * @type {string}
	         */
	        Tooltip.selector = '.c-tooltip';
	        /**
	         * @name - ariaHidden
	         * @description - aria-hidden attribute name. Set to true/false to hide/show the Tooltip.
	         * @static
	         * @private
	         * @type {string}
	         */
	        Tooltip.ariaHidden = 'aria-hidden';
	        /**
	         * @name - hiddenClass
	         * @description - hidden class-name.
	         * @static
	         * @private
	         * @type {string}
	         */
	        Tooltip.hiddenClass = 'x-hidden';
	        /**
	         * @name - timerDelay
	         * @description - The delay (milliseconds) to wait on hover before showing the Tooltip.
	         * @static
	         * @private
	         * @type {number}
	         */
	        Tooltip.timerDelay = 800;
	        /**
	         * @name - hookFocus
	         * @description - This is a hook for changing state of element to focus.
	         * @static
	         * @private
	         * @type {string}
	         */
	        Tooltip.hookFocus = 'hook-focus';
	        /**
	         * @name - hoverHover
	         * @description - This is a hook for changing state of element to hover.
	         * @static
	         * @private
	         * @type {string}
	         */
	        Tooltip.hookHover = 'hook-hover';
	        /**
	         * @name - ariaDescribedByAttribute
	         * @description - the aria attribute to that associates elements with the tooltip
	         *
	         * @public
	         * @static
	         * @type {string}
	         */
	        Tooltip.ariaDescribedByAttribute = 'aria-describedby';
	        /**
	         * @name - dataDescribedByAttribute
	         * @description - the data attribute to that associates elements with the tooltip
	         *
	         * @public
	         * @static
	         * @type {string}
	         */
	        Tooltip.dataDescribedByAttribute = 'data-f-describedby';
	        /**
	         * @name - hiddenFromScreenReadersClass
	         * @description - The class to add when the tooltip is hidden from screen-readers
	         *
	         * @static
	         * @private
	         * @type {boolean}
	         */
	        Tooltip.hiddenFromScreenReadersClass = 'f-hidden-from-screen-readers';
	        return Tooltip;
	    }(observableComponent_1.ObservableComponent));
	    exports.Tooltip = Tooltip;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="alert"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(6), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, publisher_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - Alert
	    * @classdesc - The Alert component
	    * @export
	     */
	    var Alert = (function (_super) {
	        __extends(Alert, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Alert component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the Alert behavior to.
	        */
	        function Alert(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - closeAlertAndRemoveEvent
	            * @description - Remove the click events and the Alert element from the DOM.
	            * @public
	            * @returns {void}
	            */
	            this.closeAlertAndRemoveEvent = function () {
	                htmlExtensions_1.removeEvent(_this.closeButton, htmlExtensions_1.eventTypes.click, _this.closeAlertAndRemoveEvent);
	                htmlExtensions_1.removeElement(_this.element);
	                _this.initiatePublish();
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        Alert.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            // Get close button
	            this.closeButton = htmlExtensions_1.selectFirstElement('button.c-action-trigger.glyph-cancel', this.element);
	            if (!!this.closeButton) {
	                // Attach events
	                htmlExtensions_1.addEvent(this.closeButton, htmlExtensions_1.eventTypes.click, this.closeAlertAndRemoveEvent, false);
	            }
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        Alert.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.closeButton, htmlExtensions_1.eventTypes.click, this.closeAlertAndRemoveEvent, false);
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {IAlertSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        Alert.prototype.publish = function (subscriber, context) {
	            subscriber.onAlertClosed();
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	         */
	        Alert.init = function (input) {
	            utility_1.apiDeprecated('Alert.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Alert,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - selector to use to find Alert components in the document.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Alert.selector = '.m-alert';
	        return Alert;
	    }(publisher_1.Publisher));
	    exports.Alert = Alert;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="autosuggest"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(4), __webpack_require__(5), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, publisher_1, htmlExtensions_1, stringExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - AutoSuggest
	    * @classdesc - The AutoSuggest component
	    * @export
	    */
	    var AutoSuggest = (function (_super) {
	        __extends(AutoSuggest, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the AutoSuggest component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the AutoSuggest behavior to.
	        * @param {number} customItemScrollCount - the number of suggestions to display.
	        */
	        function AutoSuggest(element, customItemScrollCount) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - suggestionClickListeners
	            * @description - This keeps a reference to all the suggestion event listeners so they can be removed on teardown.
	            * @private
	            * @type {EventListener[]}
	            */
	            this.suggestionClickListeners = [];
	            /**
	            * @name - updateSuggestions
	            * @description - method to be called by consumer (partner) with new autosuggest data (suggestions).
	            *                It will update the autosuggest menu.
	            * @public
	            * @param {IAutoSuggestData[]} suggestions - The list of matching suggestions.
	            * @returns {void}
	            */
	            this.updateSuggestions = function (suggestions) {
	                _this.reconstructMenu(suggestions);
	                _this.show();
	            };
	            /**
	            * @name - handleInputKeyup
	            * @description - Handles the input keyup event.
	            * @private
	            * @param {KeyboardEvent} event - the keyboard event.
	            * @returns {void}
	            */
	            this.handleInputKeyup = function (event) {
	                switch (utility_1.getKeyCode(event)) {
	                    case 27 /* Escape */:
	                        break;
	                    case 38 /* ArrowUp */:
	                        break;
	                    case 40 /* ArrowDown */:
	                        break;
	                    default:
	                        _this.initiatePublish();
	                }
	            };
	            /**
	            * @name - handleInputKeydown
	            * @description - Handles the input keydown event.
	            * @private
	            * @param {KeyboardEvent} event - the keyboard event.
	            * @returns {void}
	            */
	            this.handleInputKeydown = function (event) {
	                switch (utility_1.getKeyCode(event)) {
	                    case 9 /* Tab */:
	                    case 27 /* Escape */:
	                        _this.hide();
	                        break;
	                    case 38 /* ArrowUp */:
	                        event.preventDefault();
	                        _this.handleInputArrowKey(true);
	                        break;
	                    case 40 /* ArrowDown */:
	                        event.preventDefault();
	                        _this.handleInputArrowKey(false);
	                        break;
	                }
	            };
	            /**
	            * @name - handleMenuKeydown
	            * @description - Handles the menu keydown event.
	            * @private
	            * @param {KeyboardEvent} event - the keyboard event.
	            * @returns {void}
	            */
	            this.handleMenuKeydown = function (event) {
	                switch (utility_1.getKeyCode(event)) {
	                    case 13 /* Enter */:
	                        _this.selectSuggestion(_this.selectedSuggestion, true);
	                        break;
	                    case 27 /* Escape */:
	                        _this.hide();
	                        break;
	                    case 38 /* ArrowUp */:
	                        htmlExtensions_1.preventDefault(event);
	                        _this.handleMenuArrowKey(true);
	                        break;
	                    case 40 /* ArrowDown */:
	                        htmlExtensions_1.preventDefault(event);
	                        _this.handleMenuArrowKey(false);
	                        break;
	                }
	            };
	            /**
	            * @name - handleClickWhenMenuOpen
	            * @description - Handles the click event when the menu is open.
	            *                Calls closeMenuFromClick which does the real work.
	            *                (done for testability)
	            * @private
	            * @param {MouseEvent} event - the mouse event.
	            * @returns {void}
	            */
	            this.handleClickWhenMenuOpen = function (event) {
	                _this.closeMenuFromClick(htmlExtensions_1.getEventTargetOrSrcElement(event));
	            };
	            /**
	            * @name - handleInputClick
	            * @description - Handles the click event on the input element.
	            *                Calls show which does the real work.
	            *                (done for testability)
	            * @private
	            * @param {MouseEvent} event - the mouse event.
	            * @returns {void}
	            */
	            this.handleInputClick = function (event) {
	                _this.show();
	            };
	            /**
	            * @name - selectSuggestionFromClick
	            * @description - Handles the click event on a suggestion.
	            *                Calls selectSuggestion which does the real work.
	            *                (done for testability)
	            * @private
	            * @param {HTMLElement} suggestion - the mouse event.
	            * @returns {void}
	            */
	            this.selectSuggestionFromClick = function (suggestion) {
	                _this.selectSuggestion(suggestion, true);
	            };
	            /**
	            * @name - buildStringSuggestionHtml
	            * @description - Takes an autosuggestion of type 'string' and builds the correct HTML for the suggestion,
	            *                then appends it to the suggestion menu.
	            * @private
	            * @param {string} suggestion - the string to add to the suggestion list
	            * @returns {void}
	            */
	            this.buildStringSuggestionHtml = function (suggestion) {
	                var listItemElement = document.createElement('li');
	                listItemElement.setAttribute('class', 'c-menu-item');
	                listItemElement.setAttribute('role', 'presentation');
	                listItemElement.setAttribute('title', suggestion);
	                listItemElement.innerHTML = '<span role="option" tabindex="0">' + _this.highlight(suggestion) + '</span>';
	                _this.ignoreNextDOMChange = true;
	                _this.menu.appendChild(listItemElement);
	            };
	            /**
	             * @name - buildProductSuggestionHtml
	             * @description - Takes a autosuggestion of type 'product' and builds the correct HTML for the suggestion, then appends
	             *                it to the suggestion menu. Product is not searchable.
	             *
	             * @private
	             * @param {string} suggestion - the string to add to the suggestion list
	             * @param {HTMLElement} menu - the suggestions list
	             * @returns {void}
	             */
	            this.buildProductSuggestionHtml = function (suggestion) {
	                var listItemElement = document.createElement('li');
	                listItemElement.setAttribute('class', 'c-menu-item');
	                listItemElement.setAttribute('role', 'presentation');
	                listItemElement.setAttribute('title', suggestion.title);
	                _this.searchable(listItemElement, false);
	                var productElement = document.createElement('a');
	                productElement.setAttribute('class', 'f-product');
	                productElement.setAttribute('href', suggestion.targetUrl);
	                var imageHtml = '';
	                if (suggestion.imageSrc) {
	                    var imageStyle = '';
	                    var imageClass = "class=\"c-image" + (suggestion.isImageRound ? ' f-round' : '') + "\"";
	                    if (!stringExtensions_1.isNullOrWhiteSpace(suggestion.backgroundColor) && (suggestion.backgroundColor.toLowerCase() !== 'transparent')) {
	                        imageStyle = "style=\"background:" + suggestion.backgroundColor + "\"";
	                    }
	                    imageHtml = "<img " + imageClass + " src=\"" + suggestion.imageSrc + "\" " + imageStyle + "/>";
	                }
	                var categoryHtml = suggestion.category ? "<span class=\"c-meta-text\">" + suggestion.category + "</span>" : '';
	                productElement.innerHTML =
	                    imageHtml + "<div><span>" + suggestion.title + "</span>" + categoryHtml + "</div>";
	                listItemElement.appendChild(productElement);
	                _this.ignoreNextDOMChange = true;
	                _this.menu.appendChild(listItemElement);
	            };
	            this.itemScrollCount = customItemScrollCount || AutoSuggest.defaultItemScrollCount;
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        AutoSuggest.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            this.input = htmlExtensions_1.selectFirstElement('[aria-controls=' + this.element.id + ']');
	            if (!this.input) {
	                return;
	            }
	            this.menu = htmlExtensions_1.selectFirstElement('.c-menu', this.element);
	            if (!this.menu) {
	                return;
	            }
	            this.noResults = htmlExtensions_1.selectFirstElement('.f-auto-suggest-no-results', this.element);
	            if (!this.noResults) {
	                return;
	            }
	            this.form = this.element.parentElement;
	            if (!this.form) {
	                return;
	            }
	            htmlExtensions_1.addEvent(this.input, htmlExtensions_1.eventTypes.keyup, this.handleInputKeyup, true);
	            htmlExtensions_1.addEvent(this.input, htmlExtensions_1.eventTypes.keydown, this.handleInputKeydown, true);
	            htmlExtensions_1.addEvent(this.input, htmlExtensions_1.eventTypes.click, this.handleInputClick, true);
	            this.reconstructMenu(null, true);
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        AutoSuggest.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.input, htmlExtensions_1.eventTypes.keyup, this.handleInputKeyup, true);
	            htmlExtensions_1.removeEvent(this.input, htmlExtensions_1.eventTypes.keydown, this.handleInputKeydown, true);
	            htmlExtensions_1.removeEvent(this.input, htmlExtensions_1.eventTypes.click, this.handleInputClick, true);
	            htmlExtensions_1.removeEvent(document.body, htmlExtensions_1.eventTypes.click, this.handleClickWhenMenuOpen);
	            for (var i = 0; i < this.suggestions.length; ++i) {
	                htmlExtensions_1.removeEvent(this.suggestions[i], htmlExtensions_1.eventTypes.keydown, this.handleMenuKeydown);
	                htmlExtensions_1.removeEvent(this.suggestions[i], htmlExtensions_1.eventTypes.click, this.suggestionClickListeners[i++]);
	            }
	            // Reset non static members
	            this.form = null;
	            this.input = null;
	            this.menu = null;
	            this.noResults = null;
	            this.suggestions = null;
	            this.selectedSuggestion = null;
	        };
	        /**
	         * @name - searchable
	         * @description - Gets or Sets the searchable property of the menu-item. A searchable item has a value that can be entered into the
	         * autosuggest's parent form. For example, the string type is searchable, while the product type navigates away, so is not searchable.
	         * Searchable is true if undefined.
	         *
	         * @private
	         * @param {HTMLElement} menu - the suggestions menu-item
	         * @param {boolean} [isSearchable] - the value to set the li to. If missing, gets the value.
	         * @returns {void | boolean} - returns true if the suggestion is searchable
	         */
	        AutoSuggest.prototype.searchable = function (option, isSearchable) {
	            var dataAttribute = 'data-is-searchable';
	            if (isSearchable === undefined) {
	                return option.getAttribute(dataAttribute) !== 'false';
	            }
	            else {
	                option.setAttribute(dataAttribute, isSearchable.toString());
	            }
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {IAutoSuggestSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        AutoSuggest.prototype.publish = function (subscriber, context) {
	            subscriber.onMatchPatternChanged({ pattern: this.input.value });
	        };
	        /**
	        * @name - handleInputArrowKey
	        * @description - Handles arrow keys on the input menu.
	        * @private
	        * @param {boolean} isUpArrow - true means the arrow key pressed was the up arrow, false means the down arrow key was pressed
	        * @returns {void}
	        */
	        AutoSuggest.prototype.handleInputArrowKey = function (isArrowUp) {
	            var suggestions = this.suggestions;
	            var suggestionsLength = this.suggestions ? this.suggestions.length : 0;
	            // just ignore the arrow key if there aren't any suggestions
	            if (suggestionsLength > 0) {
	                if (!this.selectedSuggestion) {
	                    // If nothing has been selected beforehand, select the first item.
	                    this.selectSuggestion(suggestions[0]);
	                }
	                else {
	                    var currentSuggestionIndex = suggestions.indexOf(this.selectedSuggestion);
	                    if (isArrowUp && currentSuggestionIndex === 0) {
	                        this.selectSuggestion(suggestions[suggestionsLength - 1]);
	                    }
	                    else if (isArrowUp) {
	                        this.selectSuggestion(suggestions[currentSuggestionIndex - 1]);
	                    }
	                    else if (currentSuggestionIndex === suggestionsLength - 1) {
	                        this.selectSuggestion(suggestions[0]);
	                    }
	                    else {
	                        this.selectSuggestion(suggestions[currentSuggestionIndex + 1]);
	                    }
	                }
	            }
	        };
	        /**
	        * @name - handleMenuArrowKey
	        * @description - Handles arrow keys on the suggestion menu.
	        * @private
	        * @param {boolean} isUpArrow - true means the arrow key pressed was the up arrow, false means the down arrow key was pressed
	        * @returns {void}
	        */
	        AutoSuggest.prototype.handleMenuArrowKey = function (isUpArrow) {
	            var suggestions = this.suggestions;
	            var suggestionsLength = this.suggestions ? this.suggestions.length : 0;
	            // just ignore the arrow key if there aren't any suggestions
	            if (suggestionsLength > 0) {
	                var currentSuggestionIndex = suggestions.indexOf(this.selectedSuggestion);
	                if (isUpArrow && currentSuggestionIndex === 0) {
	                    // user presses up while on the first suggestion
	                    this.input.focus();
	                }
	                else if (isUpArrow) {
	                    this.selectSuggestion(suggestions[currentSuggestionIndex - 1]);
	                }
	                else if (currentSuggestionIndex === suggestionsLength - 1) {
	                    // users presses down while on the last suggestion
	                    this.input.focus();
	                }
	                else {
	                    this.selectSuggestion(suggestions[currentSuggestionIndex + 1]);
	                }
	            }
	        };
	        /**
	        * @name - selectSuggestion
	        * @description - Deselects the current suggestion and selects the new suggestion.
	        * @private
	        * @param {HTMLElement} suggestion - the new suggestion
	        * @param {boolean} submitOnSelection - if true, submit the form once the item is fully selected
	        * @returns {void}
	        */
	        AutoSuggest.prototype.selectSuggestion = function (suggestion, submitOnSelection) {
	            if (submitOnSelection === void 0) { submitOnSelection = false; }
	            if (!suggestion) {
	                return;
	            }
	            // unselect the current suggestion
	            if (this.selectedSuggestion) {
	                this.selectedSuggestion.setAttribute('data-selected', 'false');
	            }
	            // select and focus on the new suggestion
	            this.selectedSuggestion = suggestion;
	            this.selectedSuggestion.setAttribute('data-selected', 'true');
	            htmlExtensions_1.selectFirstElement('li > a, li > span', this.selectedSuggestion).focus();
	            // update the input value, removing <strong> tags if present. The input form should be empty if the suggestion is not searchable. 
	            if (this.searchable(this.selectedSuggestion)) {
	                var text = this.selectedSuggestion.innerText || this.selectedSuggestion.textContent || '';
	                this.input.value = text;
	            }
	            else {
	                this.input.value = '';
	            }
	            if (submitOnSelection && this.searchable(this.selectedSuggestion)) {
	                this.hide();
	                this.form.submit();
	            }
	        };
	        /**
	        * @name - hide
	        * @description - Hides the menu and no results.
	        * @public
	        * @param {HTMLElement} menu - the suggestions menu
	        * @param {HTMLElement} noResults - the no results display
	        * @returns {void}
	        */
	        AutoSuggest.prototype.hide = function () {
	            this.menu.setAttribute(AutoSuggest.ariaHidden, 'true');
	            this.noResults.setAttribute(AutoSuggest.ariaHidden, 'true');
	            this.input.setAttribute(AutoSuggest.ariaExpanded, 'false');
	            htmlExtensions_1.removeEvent(document.body, htmlExtensions_1.eventTypes.click, this.handleClickWhenMenuOpen);
	        };
	        /**
	        * @name - show
	        * @description - Shows the auto suggest menu or noresults as appropriate.
	        * @public
	        * @returns {void}
	        */
	        AutoSuggest.prototype.show = function () {
	            // If the input value is empty don't show either the menu or the noresults.
	            if (stringExtensions_1.isNullOrWhiteSpace(this.input.value)) {
	                this.hide();
	                return;
	            }
	            this.input.setAttribute(AutoSuggest.ariaExpanded, 'true');
	            // If there are no matching suggestions hide the menu and show the noresults
	            if (!this.suggestions || !this.suggestions.length) {
	                this.noResults.setAttribute(AutoSuggest.ariaHidden, 'false');
	                this.menu.setAttribute(AutoSuggest.ariaHidden, 'true');
	                return;
	            }
	            // We have matching suggestions, show the menu and hide the noresults
	            this.noResults.setAttribute(AutoSuggest.ariaHidden, 'true');
	            this.menu.setAttribute(AutoSuggest.ariaHidden, 'false');
	            // Conditionally restrict the number of suggestions displayed in the menu
	            // This is done here because the menu must be shown for suggestions to have an offsetHeight
	            if (htmlExtensions_1.hasClass(this.menu, 'f-auto-suggest-scroll')) {
	                htmlExtensions_1.css(this.menu, 'maxHeight', (this.suggestions[0].offsetHeight * this.itemScrollCount) + 'px');
	            }
	            htmlExtensions_1.addEvent(document.body, htmlExtensions_1.eventTypes.click, this.handleClickWhenMenuOpen);
	        };
	        /**
	        * @name - closeMenuFromClick
	        * @description - Closes the menu if the click is outside the form.
	        * @private
	        * @param {HTMLElement} clickTarget - the click target
	        * @returns {void}
	        */
	        AutoSuggest.prototype.closeMenuFromClick = function (clickTarget) {
	            if (!this.form.contains(clickTarget)) {
	                this.hide();
	            }
	        };
	        /**
	        * @name - reconstructMenu
	        * @description - Reconstructs the menu from the specified suggestions.
	        * @private
	        * @param {IAutoSuggestData[]} suggestions - The list of matching suggestions.
	        * @param {boolean} fromMarkup - If true build the menu from the existing DOM ignoring the specified suggestions.
	        * @returns {void}
	        */
	        AutoSuggest.prototype.reconstructMenu = function (newSuggestions, fromMarkup) {
	            var _this = this;
	            if (fromMarkup === void 0) { fromMarkup = false; }
	            this.suggestions = null;
	            this.suggestionClickListeners = [];
	            // Replace any existing suggestions with any new suggestions.
	            if (!fromMarkup) {
	                this.ignoreNextDOMChange = true;
	                htmlExtensions_1.removeInnerHtml(this.menu);
	                for (var _i = 0, newSuggestions_1 = newSuggestions; _i < newSuggestions_1.length; _i++) {
	                    var suggestion = newSuggestions_1[_i];
	                    var option = null;
	                    switch (suggestion.type) {
	                        case 'string':
	                            this.buildStringSuggestionHtml(suggestion.value);
	                            break;
	                        case 'product':
	                            this.buildProductSuggestionHtml(suggestion.value);
	                            break;
	                    }
	                }
	            }
	            this.suggestions = htmlExtensions_1.nodeListToArray(this.menu.children);
	            var _loop_1 = function(i) {
	                htmlExtensions_1.addEvent(this_1.suggestions[i], htmlExtensions_1.eventTypes.keydown, this_1.handleMenuKeydown);
	                htmlExtensions_1.addEvent(this_1.suggestions[i], htmlExtensions_1.eventTypes.click, this_1.suggestionClickListeners[i] = function () {
	                    _this.selectSuggestionFromClick(_this.suggestions[i]);
	                });
	            };
	            var this_1 = this;
	            for (var i = 0; i < this.suggestions.length; ++i) {
	                _loop_1(i);
	            }
	        };
	        /**
	         * @name - highlight
	         * @description - Highlights the substring of the given string that matches the imput box.
	         * @private
	         * @returns {string} - the highlighted html string
	         */
	        AutoSuggest.prototype.highlight = function (suggestion) {
	            var inputValue = this.input.value;
	            return suggestion.replace(inputValue, "<strong>" + this.input.value + "</strong>");
	        };
	        /**
	        * @name - selector
	        * @description - selector to use to find AutoSuggest components in the document.
	        * @static
	        * @public
	        * @type {string}
	        */
	        AutoSuggest.selector = '.m-auto-suggest';
	        /**
	        * @name - defaultItemScrollCount
	        * @description - Default number of suggestions to display.
	        * @static
	        * @private
	        * @type {number}
	        */
	        AutoSuggest.defaultItemScrollCount = 5;
	        /**
	        * @name - ariaHidden
	        * @description - This attribute to set to true/false to indicate whether or not the autosuggest results are hidden.
	        * @static
	        * @private
	        * @type {string}
	        */
	        AutoSuggest.ariaHidden = 'aria-hidden';
	        /**
	        * @name - ariaExpanded
	        * @description - This attribute to set to true/false to indicate whether or not the autosuggest results are hidden.
	        * @static
	        * @private
	        * @type {string}
	        */
	        AutoSuggest.ariaExpanded = 'aria-expanded';
	        return AutoSuggest;
	    }(publisher_1.Publisher));
	    exports.AutoSuggest = AutoSuggest;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="backToTop"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(10), __webpack_require__(3), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1, utility_1, observableComponent_1, componentFactory_1) {
	    "use strict";
	    /**
	     * The Back To Top module
	     * @class
	     * @classdesc Add a back to top link at the bottom of the window when the user scrolls down 2x the window height
	     */
	    var BackToTop = (function (_super) {
	        __extends(BackToTop, _super);
	        function BackToTop(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	             * @name - toggleBackToTop
	             * @description - Show the back to top link when the scrollbar position is below 2x the height of the window height.
	             * @returns {Void}
	             */
	            this.toggleBackToTop = function () {
	                var scrollBarPosition = window.pageYOffset || document.body.scrollTop;
	                var height = utility_1.getWindowHeight();
	                var value = scrollBarPosition >= (2 * height) ? 'false' : 'true';
	                _this.element.setAttribute('aria-disabled', value);
	            };
	            if (!element) {
	                return;
	            }
	            this.update();
	        }
	        /**
	         * updates the BackToTop component if there is any change in the DOM inside BackToTop container.
	         *
	         * @protected
	         * @returns {void}
	         */
	        BackToTop.prototype.update = function () {
	            this.scrollThrottledEventHandler = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.scroll, this.toggleBackToTop);
	        };
	        /**
	         * cleans out previous bindings to avoid double binding when a component is updated.
	         *
	         * @protected
	         */
	        BackToTop.prototype.teardown = function () {
	            // clean up throttled event handlers.
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.scroll, this.scrollThrottledEventHandler);
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        BackToTop.init = function (input) {
	            utility_1.apiDeprecated('BackToTop.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: BackToTop,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        // String for the component selector
	        BackToTop.selector = '.m-back-to-top';
	        return BackToTop;
	    }(observableComponent_1.ObservableComponent));
	    exports.BackToTop = BackToTop;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="button"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - Button
	    * @classdesc - The Button component
	    * @description - The primary purpose of this script is to ensure that a
	    *                'button' built with an anchor element will emit the same events
	    *                as a button element.
	    * @export
	    */
	    var Button = (function (_super) {
	        __extends(Button, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Button component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the Button behavior too.
	        */
	        function Button(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - handleKeydown
	            * @description - Handles Keydown events
	            * @param {KeyboardEvent} - event: the event object
	            * @private
	            * @returns {void}
	            */
	            this.handleKeydown = function (event) {
	                var keyCode = utility_1.getKeyCode(event);
	                switch (keyCode) {
	                    case 32 /* Space */:
	                        // Prevent browser scroll
	                        htmlExtensions_1.preventDefault(event);
	                        _this.emitClickEvent();
	                        break;
	                }
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        Button.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            // If the anchor looks like a button and quacks like a button,
	            // we need to make it to behave like a button.
	            if (this.element.nodeName === 'A' && (this.element.getAttribute('role') || '').toLowerCase() === 'button') {
	                htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.handleKeydown);
	            }
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        Button.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.handleKeydown);
	        };
	        /**
	        * @name - emitClickEvent
	        * @description - Create and dispatch a synthetic click event
	        * @private
	        * @returns {void}
	        */
	        Button.prototype.emitClickEvent = function () {
	            htmlExtensions_1.customEvent(this.element, htmlExtensions_1.eventTypes.click);
	        };
	        /**
	        * @name - selector
	        * @description - The Button component selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Button.selector = '.c-button';
	        return Button;
	    }(observableComponent_1.ObservableComponent));
	    exports.Button = Button;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(17), __webpack_require__(21), __webpack_require__(6), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, multi_slide_carousel_1, single_slide_carousel_1, publisher_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - Carousel
	    * @classdesc - The Carousel module is deprecated. Please use MultiSlideCarousel or SingleSlideCarousel instead.
	    * @extends {Publisher<ICarouselSubscriber>}
	    * @deprecated
	    * @export
	    */
	    var Carousel = (function (_super) {
	        __extends(Carousel, _super);
	        /**
	        * @name - constructor
	        * @memberof - Carousel
	        * @description - Constructor for the Carousel class.
	        *                The Carousel module is deprecated. Please use MultiSlideCarousel or SingleSlideCarousel instead.
	        * @deprecated
	        * @param {HTMLElement} carouselElement - The native element to attach the Carousel behavior to.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function Carousel(carouselElement, params) {
	            if (params === void 0) { params = null; }
	            _super.call(this, carouselElement, params);
	            utility_1.apiDeprecated('Carousel is deprecated, please use either MultiSlideCarousel or SingleSlideCarousel instead.');
	            var carousel = null;
	            if (!!carouselElement) {
	                componentFactory_1.ComponentFactory.create([{
	                        elements: [carouselElement],
	                        component: htmlExtensions_1.hasClass(carouselElement, Carousel.multiSlideClass) ? multi_slide_carousel_1.MultiSlideCarousel : single_slide_carousel_1.SingleSlideCarousel,
	                        callback: function (results) { carousel = (results && results.length) ? results[0] : null; },
	                        eventToBind: 'DOMContentLoaded'
	                    }]);
	            }
	            return carousel;
	        }
	        /**
	        * @name - publish
	        * @description - Abstract publish callback called by the initiatePublish method during a publish cycle.
	        *                This method will be overridden by the derived class.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @override
	        * @param {ICarouselSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        Carousel.prototype.publish = function (subscriber, context) {
	            utility_1.apiDeprecated('Carousel is deprecated, please use either MultiSlideCarousel or SingleSlideCarousel instead.');
	        };
	        /**
	        * @name - selector
	        * @memberof - Carousel
	        * @description - The carousel element selector.
	        * @public
	        * @static
	        * @type {string}
	        */
	        Carousel.selector = '.c-carousel';
	        /**
	        * @name - multiSlideClass
	        * @memberof - Carousel
	        * @description - The multi-slide class name.
	        * @private
	        * @static
	        * @type {string}
	        */
	        Carousel.multiSlideClass = 'f-multi-slide';
	        return Carousel;
	    }(publisher_1.Publisher));
	    exports.Carousel = Carousel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(18), __webpack_require__(9), __webpack_require__(20), __webpack_require__(8), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, carousel_base_1, componentFactory_1, sequenceIndicator_1, actionToggle_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - MultiSlideCarousel
	    * @classdesc - The MultiSlideCarousel class. This class is intended for carousel's containing multiple slides
	    *              where each slide will take up the entire width of the carousel.
	    * @extends {CarouselBase}
	    * @implements {IActionToggleSubscriber}
	    * @implements {IControllerSubscriber}
	    * @export
	    */
	    var MultiSlideCarousel = (function (_super) {
	        __extends(MultiSlideCarousel, _super);
	        /**
	        * @name - constructor
	        * @memberof - MultiSlideCarousel
	        * @description - Constructor for the MultiSlideCarousel class.
	        * @param {HTMLElement} carouselElement - The native element to attach the MultiSlideCarousel behavior to.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function MultiSlideCarousel(carouselElement, params) {
	            var _this = this;
	            if (params === void 0) { params = null; }
	            _super.call(this, carouselElement, params);
	            this.carouselElement = carouselElement;
	            /**
	            * @name - isAutoPlayPaused
	            * @memberof - MultiSlideCarousel
	            * @description - The auto-play paused state.
	            * @private
	            * @type {boolean}
	            */
	            this.isAutoPlayPaused = true;
	            /**
	            * @name - autoPlayTimer
	            * @memberof - MultiSlideCarousel
	            * @description - The auto-play timer.
	            * @private
	            * @type {number}
	            */
	            this.autoPlayTimer = -1;
	            /**
	            * @name - hasContentFocus
	            * @memberof - MultiSlideCarousel
	            * @description - Indicates whether or not one of our focusable content elements has focus.
	            * @private
	            * @type {boolean}
	            */
	            this.hasContentFocus = false;
	            /**
	            * @name onActionToggled
	            * @memberof - MultiSlideCarousel
	            * @description Handler for the auto-play ActionToggle's onActionToggled notifications.
	            * @public
	            * @param {IActionToggleNotification} notification - The notification from the action toggle component.
	            * @returns {void}
	            */
	            this.onActionToggled = function (notification) {
	                if (!!notification) {
	                    if (notification.toggled) {
	                        _this.startAutoPlay();
	                    }
	                    else {
	                        _this.pauseAutoPlay();
	                    }
	                }
	            };
	            ///////////////////////////////////////////////////////////////////////////////////////////////
	            // Event handers section.
	            ///////////////////////////////////////////////////////////////////////////////////////////////
	            /**
	            * @name suspendAutoPlay
	            * @memberof - MultiSlideCarousel
	            * @description Suspends the auto-play behavior (on mouseover) temporarily wihtout pausing it.
	            *              This is different than pausing it with the auto-play ActionToggle.
	            * @private
	            * @returns {void}
	            */
	            this.suspendAutoPlay = function () {
	                _this.clearAutoPlayTimers();
	            };
	            /**
	            * @name resumeAutoPlay
	            * @memberof - MultiSlideCarousel
	            * @description Resumes the auto-play behavior (on mouseout) if isAutoPlayPaused is false.
	            * @private
	            * @returns {void}
	            */
	            this.resumeAutoPlay = function () {
	                if (!_this.isAutoPlayPaused) {
	                    _this.setAutoPlayInterval();
	                }
	            };
	            /**
	            * @name onContentFocus
	            * @memberof - MultiSlideCarousel
	            * @description - Called when any of the focusable content items gets focus.
	            *                We use this to suspend autoPlay when any content item has focus.
	            * @returns {void}
	            */
	            this.onContentFocus = function () {
	                _this.hasContentFocus = true;
	                _this.suspendAutoPlay();
	            };
	            /**
	            * @name onContentBlur
	            * @memberof - MultiSlideCarousel
	            * @description - Called when any of the focusable content items loses focus.
	            *                We use this to resume autoPlay when any content item loses focus.
	            * @returns {void}
	            */
	            this.onContentBlur = function () {
	                _this.hasContentFocus = false;
	                _this.resumeAutoPlay();
	            };
	        }
	        /**
	        * @name - update
	        * @memberof - MultiSlideCarousel
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @override
	        * @returns {boolean} - true if successful, otherwise false.
	        */
	        MultiSlideCarousel.prototype.update = function () {
	            var _this = this;
	            if (!_super.prototype.update.call(this)) {
	                return false;
	            }
	            var actionToggleButton = htmlExtensions_1.selectFirstElement(actionToggle_1.ActionToggle.selector, this.carouselElement);
	            if (!!actionToggleButton) {
	                actionToggleButton.setAttribute('aria-hidden', (this.slides.length > 1) ? 'false' : 'true');
	                componentFactory_1.ComponentFactory.create([{
	                        component: actionToggle_1.ActionToggle,
	                        elements: [actionToggleButton],
	                        callback: function (results) {
	                            if (results.length > 0) {
	                                _this.autoPlayActionToggle = results[0];
	                                // If we have an auto-play ActionToggle we need to subscribe to its notifications, add event listeners for pausing
	                                // the auto-play behavior when the mouse is hovering over the carousel, and initiate autoplay if appropriate.
	                                if (!!_this.autoPlayActionToggle) {
	                                    // Subscribe to the ActionToggle notifications.
	                                    _this.autoPlayActionToggle.subscribe(_this);
	                                    htmlExtensions_1.addEvent(_this.carouselElement, htmlExtensions_1.eventTypes.mouseover, _this.suspendAutoPlay);
	                                    htmlExtensions_1.addEvent(_this.carouselElement, htmlExtensions_1.eventTypes.mouseout, _this.resumeAutoPlay);
	                                    _this.focusContentElements = htmlExtensions_1.selectElements(MultiSlideCarousel.focusContentSelector, _this.carouselElement);
	                                    if (_this.focusContentElements) {
	                                        _this.hasContentFocus = (_this.focusContentElements.indexOf(document.activeElement) !== -1);
	                                        htmlExtensions_1.addEvent(_this.focusContentElements, htmlExtensions_1.eventTypes.focus, _this.onContentFocus);
	                                        htmlExtensions_1.addEvent(_this.focusContentElements, htmlExtensions_1.eventTypes.blur, _this.onContentBlur);
	                                    }
	                                    // Set the duration of the delay between switching slides, default is 6 seconds
	                                    _this.autoPlayIntervalDuration = Math.max(MultiSlideCarousel.autoPlayMinimumInterval, parseInt(_this.carouselElement.getAttribute(MultiSlideCarousel.autoPlayIntervalAttribute), 10) ||
	                                        MultiSlideCarousel.autoPlayDefaultInterval);
	                                    // Start on load if f-auto-play exists on carousel
	                                    // If we are running for visual diffing though, we shouldn't turn on the autoplay.
	                                    if (htmlExtensions_1.hasClass(_this.carouselElement, MultiSlideCarousel.autoPlayClass) &&
	                                        (_this.slides.length > 1) &&
	                                        _this.autoPlayActionToggle.isToggled() &&
	                                        !_this.hasContentFocus &&
	                                        (utility_1.getQSPValue('mwfrun').toLowerCase() !== 'formwfvdiff')) {
	                                        _this.startAutoPlay();
	                                    }
	                                }
	                            }
	                        },
	                        eventToBind: 'DOMContentLoaded',
	                    }]);
	            }
	            this.loadMultiSlideController();
	            return true;
	        };
	        /**
	        * @name - teardown
	        * @memberof - MultiSlideCarousel
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        MultiSlideCarousel.prototype.teardown = function () {
	            _super.prototype.teardown.call(this);
	            if (!!this.autoPlayActionToggle) {
	                this.autoPlayActionToggle.unsubscribe(this);
	                htmlExtensions_1.removeEvent(this.carouselElement, htmlExtensions_1.eventTypes.mouseover, this.suspendAutoPlay);
	                htmlExtensions_1.removeEvent(this.carouselElement, htmlExtensions_1.eventTypes.mouseout, this.resumeAutoPlay);
	                if (this.focusContentElements) {
	                    htmlExtensions_1.removeEvent(this.focusContentElements, htmlExtensions_1.eventTypes.focus, this.onContentFocus);
	                    htmlExtensions_1.removeEvent(this.focusContentElements, htmlExtensions_1.eventTypes.blur, this.onContentBlur);
	                }
	                // Clear timers, if any
	                this.clearAutoPlayTimers();
	                this.isAutoPlayPaused = true;
	                this.autoPlayActionToggle = null;
	            }
	            this.hasContentFocus = false;
	            if (!!this.sequenceIndicator) {
	                this.sequenceIndicator.unsubscribe(this);
	            }
	        };
	        /**
	        * @name getSlides
	        * @memberof - MultiSlideCarousel
	        * @description - Get the individual slides in this multi-slide carousel.
	        * @protected
	        * @override
	        * @returns {HTMLElement[]}
	        */
	        MultiSlideCarousel.prototype.getSlides = function () {
	            return htmlExtensions_1.selectElements(carousel_base_1.CarouselBase.allChildSelectors, this.carouselElement);
	        };
	        /**
	        * @name getFirstActiveIndex
	        * @memberof - MultiSlideCarousel
	        * @description - Gets the index of the first active slide.
	        * @protected
	        * @override
	        * @returns {number}
	        */
	        MultiSlideCarousel.prototype.getFirstActiveIndex = function () {
	            for (var index = 0; index < this.slides.length; index++) {
	                if (htmlExtensions_1.hasClass(this.slides[index], carousel_base_1.CarouselBase.activeClass)) {
	                    return index;
	                }
	            }
	            return 0;
	        };
	        /**
	        * @name - isScrollablePrevious
	        * @memberof - MultiSlideCarousel
	        * @description - Determines whether or not the carousel can "scroll previous".
	        * @protected
	        * @override
	        * @returns {boolean}
	        */
	        MultiSlideCarousel.prototype.isScrollablePrevious = function () {
	            return !!this.slides && (this.slides.length > 1);
	        };
	        /**
	        * @name - isScrollableNext
	        * @memberof - MultiSlideCarousel
	        * @description - Determines whether or not the carousel can "scroll next".
	        * @protected
	        * @override
	        * @returns {boolean}
	        */
	        MultiSlideCarousel.prototype.isScrollableNext = function () {
	            return !!this.slides && (this.slides.length > 1);
	        };
	        /**
	        * @name - previousSlide
	        * @memberof - MultiSlideCarousel
	        * @description - Go to previous slide.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        MultiSlideCarousel.prototype.previousSlide = function () {
	            this.setActiveSlide(this.activeIndex === 0 ? this.slides.length - 1 : this.activeIndex - 1);
	        };
	        /**
	        * @name - nextSlide
	        * @memberof - MultiSlideCarousel
	        * @description - Go to next slide.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        MultiSlideCarousel.prototype.nextSlide = function () {
	            this.setActiveSlide(this.activeIndex === this.slides.length - 1 ? 0 : this.activeIndex + 1);
	        };
	        /**
	        * @name - setActiveSlide
	        * @memberof - MultiSlideCarousel
	        * @description - Sets the active carousel slide.
	        * @public
	        * @param  {number} toIndex - The index of the slide to make active.
	        * @param  {boolean} [userInitiated = true] - Whether or not this slide change is the result of a user initiated
	        *                                            action like controller or paddle click or swipe, or not like autoplay.
	        * @returns {boolean}
	        */
	        MultiSlideCarousel.prototype.setActiveSlide = function (toIndex, userInitiated) {
	            if (userInitiated === void 0) { userInitiated = true; }
	            var previousActiveIndex = this.activeIndex;
	            if (!_super.prototype.setActiveSlide.call(this, toIndex, userInitiated)) {
	                return;
	            }
	            if (previousActiveIndex !== -1) {
	                // Remove active and animation classes from the currently active slide.
	                htmlExtensions_1.removeClasses(this.slides[previousActiveIndex], [carousel_base_1.CarouselBase.activeClass,
	                    MultiSlideCarousel.animateNextClass,
	                    MultiSlideCarousel.animatePreviousClass]);
	                // Add the animate class associated with our animation direction
	                htmlExtensions_1.addClass(this.slides[this.activeIndex], previousActiveIndex < toIndex
	                    ? MultiSlideCarousel.animateNextClass
	                    : MultiSlideCarousel.animatePreviousClass);
	            }
	            // Call resumeAutoPlay to restart the auto-play timer if auto-play is active.
	            this.resumeAutoPlay();
	            // Update the SequenceIndicator's index to match the carousel's index
	            if (this.sequenceIndicator) {
	                this.sequenceIndicator.setControllerIndex(toIndex, false);
	            }
	            var previousItem = (previousActiveIndex === -1) ? null : _super.prototype.getCollectionItem.call(this, this.slides[previousActiveIndex]);
	            var currentItem = _super.prototype.getCollectionItem.call(this, this.slides[this.activeIndex]);
	            if (previousItem) {
	                previousItem.onCollectionItemHidden();
	            }
	            if (currentItem) {
	                currentItem.onCollectionItemShown();
	            }
	            _super.prototype.initiatePublish.call(this, {
	                fullyVisibleItemRange: [toIndex, toIndex],
	                partiallyVisibleItemRange: [toIndex, toIndex],
	                userInitiated: userInitiated
	            });
	        };
	        /**
	        * @name - startAutoPlay
	        * @memberof - MultiSlideCarousel
	        * @description - Starts the carousel's auto-play behavior.
	        * @private
	        * @returns {void}
	        */
	        MultiSlideCarousel.prototype.startAutoPlay = function () {
	            this.setAutoPlayInterval();
	            this.isAutoPlayPaused = false;
	        };
	        /**
	        * @name - pauseAutoPlay
	        * @memberof - MultiSlideCarousel
	        * @description - Pauses the carousel's auto-play behavior.
	        * @private
	        * @returns {void}
	        */
	        MultiSlideCarousel.prototype.pauseAutoPlay = function () {
	            this.isAutoPlayPaused = true;
	            this.clearAutoPlayTimers();
	        };
	        /**
	        * @name - setAutoPlayInterval
	        * @memberof - MultiSlideCarousel
	        * @description - Sets a timer callback for playing the next slide.
	        * @private
	        * @returns void
	        */
	        MultiSlideCarousel.prototype.setAutoPlayInterval = function () {
	            var _this = this;
	            this.clearAutoPlayTimers();
	            this.autoPlayTimer =
	                setTimeout(function () {
	                    _this.setActiveSlide(_this.activeIndex === _this.slides.length - 1 ? 0 : _this.activeIndex + 1, false);
	                }, this.autoPlayIntervalDuration);
	        };
	        /**
	        * @name clearAutoPlayTimers
	        * @memberof - MultiSlideCarousel
	        * @description Helper function for clearing timers
	        * @private
	        * @returns {void}
	        */
	        MultiSlideCarousel.prototype.clearAutoPlayTimers = function () {
	            if (this.autoPlayTimer !== -1) {
	                clearTimeout(this.autoPlayTimer);
	                this.autoPlayTimer = -1;
	            }
	        };
	        /**
	        * @name loadMultiSlideController
	        * @memberof - MultiSlideCarousel
	        * @description - Loads the MultiSlideCarousel's controller.
	        *                By default this will look for the standard MultiSlideCarousel's SequenceIndicator.
	        *                Other implementations may override this method to load an alternate controller of their choice.
	        * @protected
	        * @returns {void}
	        */
	        MultiSlideCarousel.prototype.loadMultiSlideController = function () {
	            var _this = this;
	            var sequenceIndicator = htmlExtensions_1.selectFirstElement(sequenceIndicator_1.SequenceIndicator.selector, this.carouselElement);
	            if (!!sequenceIndicator) {
	                componentFactory_1.ComponentFactory.create([{
	                        component: sequenceIndicator_1.SequenceIndicator,
	                        elements: [sequenceIndicator],
	                        callback: function (results) {
	                            if (results && results.length) {
	                                _this.sequenceIndicator = results[0];
	                                // Subscribe to the sequenceIndicator.
	                                if (!!_this.sequenceIndicator) {
	                                    sequenceIndicator.setAttribute('aria-hidden', (_this.slides.length > 1) ? 'false' : 'true');
	                                    _this.sequenceIndicator.subscribe(_this);
	                                }
	                            }
	                        },
	                        eventToBind: 'DOMContentLoaded'
	                    }]);
	            }
	        };
	        /**
	        * @name - onControllerIndexChanged
	        * @memberof - MultiSlideCarousel
	        * @description - Implements IControllerSubscriber's onControllerIndexChanged method.
	        * @public
	        * @param  {IControllerNotification} notification - The controller notification with the desired new index.
	        * @returns {void}
	        */
	        MultiSlideCarousel.prototype.onControllerIndexChanged = function (notification) {
	            if (!!notification) {
	                this.setActiveSlide(notification.currentIndex);
	            }
	        };
	        /**
	        * @name - selector
	        * @memberof - MultiSlideCarousel
	        * @description - The multi-slide carousel element selector.
	        * @public
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        MultiSlideCarousel.selector = '.c-carousel[class*=f-multi-slide]';
	        /**
	        * @name - animateNextClass
	        * @memberof - MultiSlideCarousel
	        * @description - The slide animate-next class.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        MultiSlideCarousel.animateNextClass = 'f-animate-next';
	        /**
	        * @name - animatePreviousClass
	        * @memberof - MultiSlideCarousel
	        * @description - The slide animate-previous class.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        MultiSlideCarousel.animatePreviousClass = 'f-animate-previous';
	        /**
	        * @name - focusContentSelector
	        * @memberof - MultiSlideCarousel
	        * @description - The focusable content elements selector.
	        *                We use this to find the focusable content elements that
	        *                we want to suspend autoplay for when they have the focus.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        MultiSlideCarousel.focusContentSelector = '.c-call-to-action';
	        /**
	        * @name - autoPlayClass
	        * @memberof - MultiSlideCarousel
	        * @description - The slide auto-play class.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        MultiSlideCarousel.autoPlayClass = 'f-auto-play';
	        /**
	        * @name - autoPlayIntervalAttribute
	        * @memberof - MultiSlideCarousel
	        * @description - The auto-play interval attribute name.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        MultiSlideCarousel.autoPlayIntervalAttribute = 'data-js-interval';
	        /**
	        * @name - autoPlayDefaultInterval
	        * @memberof - MultiSlideCarousel
	        * @description - The auto-play default interval value.
	        *                Default to 6 seconds to meet WCAG requirements
	        * @private
	        * @static
	        * @readonly
	        * @type {number}
	        */
	        MultiSlideCarousel.autoPlayDefaultInterval = 6000;
	        /**
	        * @name - autoPlayMinimumInterval
	        * @memberof - MultiSlideCarousel
	        * @description - The auto-play minimum interval value.
	        *                WCAG requires animations to pause for 5 seconds or longer.
	        * @private
	        * @static
	        * @readonly
	        * @type {number}
	        */
	        MultiSlideCarousel.autoPlayMinimumInterval = 5000;
	        return MultiSlideCarousel;
	    }(carousel_base_1.CarouselBase));
	    exports.MultiSlideCarousel = MultiSlideCarousel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(6), __webpack_require__(19), __webpack_require__(5), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, publisher_1, swipe_1, stringExtensions_1, htmlExtensions_1) {
	    "use strict";
	    /**
	    * @class - CarouselBase
	    * @classdesc - The abstract CarouselBase class
	    * @extends {Publisher<ICarouselSubscriber>}
	    * @export
	    */
	    var CarouselBase = (function (_super) {
	        __extends(CarouselBase, _super);
	        /**
	        * @name - constructor
	        * @memberof - CarouselBase
	        * @description - Constructor for the CarouselBase abstract class.
	        * @param {HTMLElement} carouselElement - The native element to attach the CarouselBase behavior to.
	        * @param {any} params- The parameter object with the class name to match against the MWF class
	        *                      attribute value to determine whether or not to initialize this element
	        *                      in the scope of the currently active constructor class hierarchy.
	        */
	        function CarouselBase(carouselElement, params) {
	            var _this = this;
	            _super.call(this, carouselElement, params);
	            this.carouselElement = carouselElement;
	            /**
	            * @name - activeIndex
	            * @memberof - CarouselBase
	            * @description - stores the active index.
	            * @protected
	            * @type {number}
	            */
	            this.activeIndex = -1;
	            // ///////////////////////////////////////////////////////////////////////////////////////////////
	            // // Event handers section.
	            // ///////////////////////////////////////////////////////////////////////////////////////////////
	            /**
	            * @name - onFlipperClicked
	            * @description - The flipper click event listener
	            * @private
	            * @param {UIEvent} event - The click event.
	            * @returns {void}
	            */
	            this.onFlipperClicked = function (event) {
	                htmlExtensions_1.getEventTargetOrSrcElement(event) === _this.previousButton
	                    ? _this.previousSlide()
	                    : _this.nextSlide();
	            };
	            /**
	            * @name swipeHandler
	            * @memberof - CarouselBase
	            * @description - The carousel swipe handler.
	            * @private
	            * @param {SwipeDirection} swipeDirection - The direction of the swipe.
	            * @returns {void}
	            */
	            this.swipeHandler = function (swipeDirection) {
	                var next = (swipeDirection === swipe_1.SwipeDirection.Right) ? (_this.direction === htmlExtensions_1.Direction.left) : (_this.direction !== htmlExtensions_1.Direction.left);
	                if (next && _this.isScrollableNext()) {
	                    _this.nextSlide();
	                }
	                else if (!next && _this.isScrollablePrevious()) {
	                    _this.previousSlide();
	                }
	            };
	            if (!observableComponent_1.ObservableComponent.shouldInitializeAsClass(carouselElement, params)) {
	                return;
	            }
	            this.direction = htmlExtensions_1.getDirection();
	            this.directionValue = htmlExtensions_1.Direction[this.direction];
	            this.requestAnimationFrame = htmlExtensions_1.SafeBrowserApis.requestAnimationFrame;
	            // If pointer event supported, add the required css.
	            // IE11 and Edge implements pointerEvents and favor the browser default behavior if touchAction is not set to none.
	            // https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
	            // http://www.michaelbromley.co.uk/blog/193/a-note-on-touch-pointer-events-in-ie11
	            if (window.navigator.pointerEnabled) {
	                htmlExtensions_1.css(this.carouselElement, 'touchAction', 'pan-y');
	            }
	            this.requestAnimationFrame.call(window, function () { return _this.update(); });
	        }
	        /**
	        * @name - update
	        * @memberof - CarouselBase
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {boolean} - true if successful, otherwise false.
	        */
	        CarouselBase.prototype.update = function () {
	            var _this = this;
	            if (!this.carouselElement || !this.hasSlides()) {
	                return false;
	            }
	            this.requestAnimationFrame.call(window, function () { return _this.setActiveSlide(_this.getFirstActiveIndex(), false); });
	            // Get previous and next buttons
	            this.previousButton = htmlExtensions_1.selectFirstElement(CarouselBase.previousButtonSelector, this.carouselElement);
	            this.nextButton = htmlExtensions_1.selectFirstElement(CarouselBase.nextButtonSelector, this.carouselElement);
	            // Add previous and next button click handlers
	            if (!!this.previousButton && !!this.nextButton) {
	                htmlExtensions_1.addEvent(this.previousButton, htmlExtensions_1.eventTypes.click, this.onFlipperClicked);
	                htmlExtensions_1.addEvent(this.nextButton, htmlExtensions_1.eventTypes.click, this.onFlipperClicked);
	            }
	            // Instantiate a swipe object for swipe support.
	            this.swipe = new swipe_1.Swipe(this.carouselElement, { 'end': this.swipeHandler });
	            return true;
	        };
	        /**
	        * @name - teardown
	        * @memberof - CarouselBase
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        CarouselBase.prototype.teardown = function () {
	            // Clean up previous and next button handlers.
	            if (!!this.previousButton && !!this.nextButton) {
	                htmlExtensions_1.removeEvent(this.previousButton, htmlExtensions_1.eventTypes.click, this.onFlipperClicked);
	                htmlExtensions_1.removeEvent(this.nextButton, htmlExtensions_1.eventTypes.click, this.onFlipperClicked);
	            }
	            // Clean up swipe handler.
	            if (this.swipe) {
	                this.swipe.tearDown();
	            }
	            // Reset members.
	            this.activeIndex = -1;
	            this.slides = null;
	            this.previousButton = null;
	            this.nextButton = null;
	        };
	        /**
	        * @name hasSlides
	        * @memberof - CarouselBase
	        * @description - Determines if this carousel has any slides.
	        * @private
	        * @returns {boolean} - true if this carousel has any slides, otherwise false.
	        */
	        CarouselBase.prototype.hasSlides = function () {
	            this.slides = this.getSlides();
	            // make sure we actually have slides.
	            return !!this.slides && !!this.slides.length;
	        };
	        /**
	        * @name getCollectionItem
	        * @memberof - CarouselBase
	        * @description - Get the collection item for the specified slide.
	        * @protected
	        * @param  {HTMLElement} slide - The slide to get the collection item of.
	        * @returns {ICollectionItem} - The mwfInstance that implements ICollectionItem if found, otherwise null.
	        */
	        CarouselBase.prototype.getCollectionItem = function (slide) {
	            var collectionItem;
	            if (!!slide && !!slide.firstElementChild) {
	                componentFactory_1.ComponentFactory.enumerateComponents(slide.firstElementChild, function (typeName, component) {
	                    if (component.onCollectionItemHidden && component.onCollectionItemShown) {
	                        collectionItem = component;
	                    }
	                    return !collectionItem;
	                });
	            }
	            return collectionItem;
	        };
	        /**
	        * @name - setActiveSlide
	        * @memberof - CarouselBase
	        * @description - Sets the active carousel slide.
	        * @protected
	        * @param  {number} toIndex - The index of the slide to make active.
	        * @param  {boolean} [userInitiated = true] - Whether or not this slide change is the result of a user initiated
	        *                                            action like controller or paddle click or swipe, or not like autoplay.
	        * @returns {boolean}
	        */
	        CarouselBase.prototype.setActiveSlide = function (toIndex, userInitiated) {
	            if (userInitiated === void 0) { userInitiated = true; }
	            if ((toIndex < 0) || (toIndex >= this.slides.length) || (toIndex === this.activeIndex)) {
	                return false;
	            }
	            if ((this.activeIndex >= 0) && (this.activeIndex < this.slides.length)) {
	                // Remove the active class from the currently active slide.
	                htmlExtensions_1.removeClass(this.slides[this.activeIndex], CarouselBase.activeClass);
	            }
	            // Update the active index.
	            this.activeIndex = toIndex;
	            // Add the active class to the new active slide.
	            htmlExtensions_1.addClass(this.slides[toIndex], CarouselBase.activeClass);
	            // Update the carousel theme and flipper visibility.
	            this.updateTheme();
	            this.updateFlippers();
	            return true;
	        };
	        /**
	        * @name updateTheme
	        * @memberof - CarouselBase
	        * @description - Updates the carousel's theme to match the theme of the active slide.
	        * @private
	        * @returns {void}
	        */
	        CarouselBase.prototype.updateTheme = function () {
	            // First remove any existing theme classes from the carousel.
	            htmlExtensions_1.removeClasses(this.carouselElement, [CarouselBase.themeDarkClass, CarouselBase.themeLightClass]);
	            var theme = this.slides[this.activeIndex].getAttribute(CarouselBase.slideThemeAttribute);
	            // Then if the active slide has a theme add that to the carousel.
	            if (!stringExtensions_1.isNullOrWhiteSpace(theme)) {
	                htmlExtensions_1.addClass(this.carouselElement, CarouselBase.themePrefix + theme);
	            }
	        };
	        /**
	        * @name - updateFlippers
	        * @memberof - CarouselBase
	        * @description - Updates the visibility state of the flippers.
	        * @protected
	        * @returns {void}
	        */
	        CarouselBase.prototype.updateFlippers = function () {
	            if (this.isScrollableNext()) {
	                htmlExtensions_1.addClass(this.carouselElement, CarouselBase.nextFlipperClass);
	            }
	            else {
	                htmlExtensions_1.removeClass(this.carouselElement, CarouselBase.nextFlipperClass);
	            }
	            if (this.isScrollablePrevious()) {
	                htmlExtensions_1.addClass(this.carouselElement, CarouselBase.previousFlipperClass);
	            }
	            else {
	                htmlExtensions_1.removeClass(this.carouselElement, CarouselBase.previousFlipperClass);
	            }
	        };
	        /**
	        * @name - publish
	        * @memberof - CarouselBase
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @override
	        * @param {ICarouselSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        CarouselBase.prototype.publish = function (subscriber, context) {
	            subscriber.onSlideRangeChanged(context);
	        };
	        /**
	        * @name - selector
	        * @memberof - CarouselBase
	        * @description - The carousel element selector.
	        * @public
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.selector = '.c-carousel';
	        /**
	        * @name - activeClass
	        * @memberof - CarouselBase
	        * @description - the active class.
	        * @protected
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.activeClass = 'f-active';
	        /**
	        * @name - allChildSelectors
	        * @memberof - CarouselBase
	        * @description - The carousel slide elements selector.
	        * @protected
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.allChildSelectors = CarouselBase.selector + ' > * > ul > li';
	        /**
	        * @name - slideThemeAttribute
	        * @memberof - CarouselBase
	        * @description - the slide theme attribute.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.slideThemeAttribute = 'data-f-theme';
	        /**
	        * @name - themePrefix
	        * @memberof - CarouselBase
	        * @description - the prefix for the set theme.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.themePrefix = 'theme-';
	        /**
	        * @name - previousFlipperClass
	        * @memberof - CarouselBase
	        * @description - the previous flipper class.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.previousFlipperClass = 'f-scrollable-previous';
	        /**
	        * @name - nextFlipperClass
	        * @memberof - CarouselBase
	        * @description - the next flipper class.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.nextFlipperClass = 'f-scrollable-next';
	        /**
	        * @name - themeLightClass
	        * @memberof - CarouselBase
	        * @description - the theme light class.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.themeLightClass = 'theme-light';
	        /**
	        * @name - themeDarkClass
	        * @memberof - CarouselBase
	        * @description - the theme dark class.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.themeDarkClass = 'theme-dark';
	        /**
	        * @name - previousButtonSelector
	        * @memberof - CarouselBase
	        * @description - the previous button class, f-left is deprecated.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.previousButtonSelector = '.c-flipper.f-previous, .c-flipper.f-left';
	        /**
	        * @name - nextButtonSelector
	        * @memberof - CarouselBase
	        * @description - the next button class, f-right is deprecated.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        CarouselBase.nextButtonSelector = '.c-flipper.f-next, .c-flipper.f-right';
	        return CarouselBase;
	    }(publisher_1.Publisher));
	    exports.CarouselBase = CarouselBase;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1) {
	    "use strict";
	    var Swipe = (function () {
	        /**
	         * Creates an instance of Swipe.
	         *
	         * @param {HTMLElement} element - An element on which a swipe event to be binded.
	         * @param {*} SwipeEventHandlers - An event handler provided by the client in the following format.
	         * {
	         * 'start': function() { // start handler},
	         * 'cancel': function() { // cancel handler },
	         * 'move': function() { // move handler},
	         * 'end': function() { // end handler }
	         *  }
	         * @param {string[]} [pointerTypes] - by default touch, pointer and mouse are supported.
	         * But caller can specify the pointer type to use.
	         * For example, the following initialization will use only touch.
	         * new Swipe(myElement, someHandler, ['touch']);
	         */
	        function Swipe(element, swipeEventHandlers, pointerTypes) {
	            var _this = this;
	            this.element = element;
	            this.swipeEventHandlers = swipeEventHandlers;
	            /**
	             * A flag that indicate a swipe is still active or not.
	             *
	             * @private
	             */
	            this.active = false;
	            /**
	             * A distance marker (in px) to be consider the movement as a swipe.
	             *
	             * @private
	             */
	            this.swipeDistanceMarker = 10;
	            /**
	             * Cross browser events used for swipe.
	             *
	             * @private
	             * @type {*}
	             */
	            this.pointerEvents = {
	                'mouse': {
	                    start: 'mousedown',
	                    move: 'mousemove',
	                    end: 'mouseup'
	                },
	                'touch': {
	                    start: 'touchstart',
	                    move: 'touchmove',
	                    end: 'touchend',
	                    cancel: 'touchcancel'
	                },
	                'pointer': {
	                    start: 'pointerdown',
	                    move: 'pointermove',
	                    end: 'pointerup',
	                    cancel: 'pointercancel'
	                }
	            };
	            /**
	             * The maximum vertical delta for a swipe should be less than 200px.
	             *
	             * @private
	             */
	            this.maximumVerticalDistance = 200;
	            /**
	             * Vertical distance should not be more than a fraction of the horizontal distance.
	             *
	             * @private
	             */
	            this.maximumVerticalRatio = 0.85;
	            /**
	             * At least a 30px lateral motion is necessary for a swipe.
	             *
	             * @private
	             */
	            this.minimumHorizontalDistance = 30;
	            /**
	             * An end event handler, that will be called when the end event is fired.
	             * For example, in case of 'pointerEvents' this method will be called on 'pointerup' event.
	             *
	             * @param {event} event = An event like mousedown, pointerdown or touchstart.
	             * @private
	             */
	            this.endHandler = function (event) {
	                if (!_this.active) {
	                    return;
	                }
	                _this.active = false;
	                var currentCoordinates = htmlExtensions_1.getCoordinates(event);
	                if (_this.validSwipe(currentCoordinates, _this.startCoordinate)) {
	                    var swipeDirection = (currentCoordinates.x - _this.startCoordinate.x) > 0 ? SwipeDirection.Left : SwipeDirection.Right;
	                    _this.swipeEventHandlers.end && _this.swipeEventHandlers.end(swipeDirection);
	                }
	            };
	            /**
	             * A start event handler, that will be called when the start event is fired.
	             * For example, in case of 'pointerEvents' this method will be called when 'pointerDown' event is fired.
	             *
	             * @param {event} event = An event like mousedown, pointerdown or touchstart.
	             * @private
	             */
	            this.startHandler = function (event) {
	                _this.startCoordinate = htmlExtensions_1.getCoordinates(event);
	                _this.active = true;
	                _this.totalX = 0;
	                _this.totalY = 0;
	                _this.endCoordinate = _this.startCoordinate;
	                _this.swipeEventHandlers.start && _this.swipeEventHandlers.start(_this.startCoordinate, event);
	            };
	            /**
	             * A cancel event handler, that will be called when cancel event is fired.
	             * For example, in case of 'pointerEvents' this method will be called when 'pointerCancel' event is fired.
	             *
	             * @param {event} event = A cancel event like touchcancel or pointercancel.
	             * @private
	             */
	            this.cancelHandler = function (event) {
	                _this.active = false;
	                _this.swipeEventHandlers.cancel && _this.swipeEventHandlers.cancel(event);
	            };
	            /**
	             * A move event handler. This handler will do the following things that will help to decide whether a user action is a swipe or not.
	             * 1. If the total movment is less than the distance marker, it will ignore.
	             * 2. If a user is moving more to the y direction instead of the x direction,
	             *    it cancel the swipe and let the browser default behavior to take over.
	             * 3. If the above two aren't met, the code cancel the default behavior of the event and call the move handler if any.
	             * todo - bruk - add unit test.
	             *
	             * @param {event} event = A user pointer or mouse or touch event.
	             *
	             * @private
	             */
	            this.moveHandler = function (event) {
	                if (!_this.active || !_this.startCoordinate) {
	                    return;
	                }
	                var coords = htmlExtensions_1.getCoordinates(event);
	                _this.totalX += Math.abs(coords.x - _this.endCoordinate.x);
	                _this.totalY += Math.abs(coords.y - _this.endCoordinate.y);
	                _this.endCoordinate = coords;
	                if (_this.totalX < _this.swipeDistanceMarker && _this.totalY < _this.swipeDistanceMarker) {
	                    return;
	                }
	                if (_this.totalY > _this.totalX) {
	                    _this.active = false;
	                    _this.swipeEventHandlers.cancel && _this.swipeEventHandlers.cancel(event);
	                    return;
	                }
	                htmlExtensions_1.preventDefault(event);
	                _this.swipeEventHandlers.move && _this.swipeEventHandlers.move(coords, event);
	            };
	            if (!this.element || !swipeEventHandlers) {
	                return;
	            }
	            // If client doesn't provide any support all.
	            this.pointerTypes = pointerTypes || ['touch', 'pointer', 'mouse'];
	            // Add event hanlders to different events fired when an input is in motion.
	            htmlExtensions_1.addEvents(this.element, this.getEvents(this.pointerTypes, 'start'), this.startHandler);
	            htmlExtensions_1.addEvents(this.element, this.getEvents(this.pointerTypes, 'move'), this.moveHandler);
	            htmlExtensions_1.addEvents(this.element, this.getEvents(this.pointerTypes, 'end'), this.endHandler);
	            htmlExtensions_1.addEvents(this.element, this.getEvents(this.pointerTypes, 'cancel'), this.cancelHandler);
	        }
	        /**
	         * Get all cross browser events for a given event type. Like for move, get 'mousemove touchmove pointermove'
	        *
	        * @private
	        * @param {string[]} pointerTypes
	        * @param {string} eventType
	        * @returns
	        */
	        Swipe.prototype.getEvents = function (pointerTypes, eventType) {
	            var result = [];
	            for (var _i = 0, pointerTypes_1 = pointerTypes; _i < pointerTypes_1.length; _i++) {
	                var pointerType = pointerTypes_1[_i];
	                var eventName = this.pointerEvents[pointerType][eventType];
	                if (eventName) {
	                    result.push(eventName);
	                }
	            }
	            return result.join(' ');
	        };
	        /**
	         * Clearing up DOM bindings.
	         */
	        Swipe.prototype.tearDown = function () {
	            htmlExtensions_1.removeEvents(this.element, this.getEvents(this.pointerTypes, 'start'), this.startHandler);
	            htmlExtensions_1.removeEvents(this.element, this.getEvents(this.pointerTypes, 'move'), this.moveHandler);
	            htmlExtensions_1.removeEvents(this.element, this.getEvents(this.pointerTypes, 'end'), this.endHandler);
	            htmlExtensions_1.removeEvents(this.element, this.getEvents(this.pointerTypes, 'cancel'), this.cancelHandler);
	        };
	        /**
	        * check the validity of a swipe. For a swipe to be a valid swipe the following conditions should met.
	        * 1. The vertical movement of the input should be less than the maximum allowed not to be considered as a vertical swipe.
	        * 2. The horizoantal movement of the input should be greater than the minimum distance considered a swipe.
	        * 3. The ratio of vertical movement to horizontal movement should be less than a given ratio -
	        *    to make sure the movement is uni-directional.
	        *
	        * @private
	        * @param {HtmlExtensions.Coordinate} currentCoordinates - the current coordinate by the time of the end of the swipe action.
	        * @param {HtmlExtensions.Coordinate} startCoordinates - the starting coordinate when the swipe action started.
	        * @returns {Boolean}
	        */
	        Swipe.prototype.validSwipe = function (currentCoordinates, startCoordinates) {
	            if (!startCoordinates) {
	                return false;
	            }
	            var deltaY = Math.abs(currentCoordinates.y - startCoordinates.y);
	            var deltaX = Math.abs(currentCoordinates.x - startCoordinates.x);
	            return deltaY < this.maximumVerticalDistance &&
	                deltaX > this.minimumHorizontalDistance &&
	                deltaY / deltaX < this.maximumVerticalRatio;
	        };
	        return Swipe;
	    }());
	    exports.Swipe = Swipe;
	    (function (SwipeDirection) {
	        SwipeDirection[SwipeDirection["Left"] = 0] = "Left";
	        SwipeDirection[SwipeDirection["Right"] = 1] = "Right";
	    })(exports.SwipeDirection || (exports.SwipeDirection = {}));
	    var SwipeDirection = exports.SwipeDirection;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(6), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, publisher_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class SequenceIndicator component
	    * @classdesc - The SequenceIndicator component
	    * @extends {Publisher<IControllerSubscriber | ISequenceIndicatorSubscriber>}
	    * @implements {IController}
	    * @export
	    */
	    var SequenceIndicator = (function (_super) {
	        __extends(SequenceIndicator, _super);
	        /**
	        * @name - constructor
	        * @memberof - SequenceIndicator
	        * @description - Constructor for the SequenceIndicator component.
	        * @public
	        * @param {HTMLElement} sequenceIndicatorElement - The native element to attach the SequenceIndicator behavior to.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function SequenceIndicator(sequenceIndicatorElement, params) {
	            var _this = this;
	            if (params === void 0) { params = null; }
	            _super.call(this, sequenceIndicatorElement, params);
	            this.sequenceIndicatorElement = sequenceIndicatorElement;
	            /**
	            * @name - selectedAttribute
	            * @memberof - SequenceIndicator
	            * @description - The attribute name to use to store selected state.
	            * @private
	            * @static
	            * @type {string}
	            */
	            this.selectedAttribute = SequenceIndicator.ariaSelected;
	            /**
	            * @name - setActiveIndex
	            * @memberof - SequenceIndicator
	            * @description - Sets the active sequence indicator item.
	            *                This method needs to remain until v2 for backward compatibility.
	            * @public
	            * @param {number} The index in this.items to set to active.
	            * @returns {boolean} - true if the index is changed, otherwise false.
	            */
	            this.setActiveIndex = function (index) {
	                utility_1.apiDeprecated('SequenceIndicator.setActiveIndex() is deprecated, please use SequenceIndicator.setControllerIndex() instead.');
	                return _this.setControllerIndex(index);
	            };
	            /**
	            * @name - setControllerIndex
	            * @memberof - SequenceIndicator
	            * @description - Implements IController's setControllerIndex method to set the SequenceIndicator's index.
	            * @public
	            * @param {number} toIndex - The desired new index.
	            * @param {boolean} [forceFocus = false] - Whether or not to force setting the focus to the new index element.
	            * @returns {boolean} - true if the index is changed, otherwise false.
	            */
	            this.setControllerIndex = function (toIndex, forceFocus) {
	                if (forceFocus === void 0) { forceFocus = false; }
	                // Range check passed index to make sure it's valid
	                if ((toIndex < 0) || (toIndex > _this.items.length - 1) || (toIndex === _this.activeIndex)) {
	                    return false;
	                }
	                var previousIndex = _this.activeIndex;
	                var activeElement = _this.items[_this.activeIndex];
	                var toElement = _this.items[toIndex];
	                // If focus is on the active element, we need to make sure we don't loose
	                // focus when we change selected states.
	                var isFocused = document.activeElement === activeElement;
	                // Change DOM
	                _this.deselectItem(activeElement);
	                _this.selectItem(toElement);
	                // Change activeElement now that we've updated everything's state
	                _this.activeIndex = toIndex;
	                if (forceFocus || isFocused) {
	                    toElement.focus();
	                }
	                _this.initiatePublish({
	                    previousIindex: previousIndex,
	                    currentIndex: toIndex,
	                    index: toIndex
	                });
	                return true;
	            };
	            /**
	            * @memberof - SequenceIndicator
	            * @name - handleClickEvent
	            * @description - Event handler for click events
	            * @private
	            * @param {UIEvent} event - The click event.
	            * @returns {void}
	            */
	            this.handleClickEvent = function (event) {
	                htmlExtensions_1.preventDefault(event);
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                if (target) {
	                    var role = target.getAttribute('role');
	                    if (!role && target.parentElement) {
	                        target = (target.parentElement.getAttribute('role') === 'tab') ? target.parentElement : null;
	                    }
	                    _this.setControllerIndex(_this.items.indexOf(target));
	                }
	            };
	            /**
	            * @memberof - SequenceIndicator
	            * @name - onKeydown
	            * @description - Listener for keyboard events
	            * @private
	            * @param {KeyboardEvent} event - The keydown event.
	            * @returns {void}
	            */
	            this.onKeydown = function (event) {
	                switch (utility_1.getKeyCode(event)) {
	                    case 39 /* ArrowRight */:
	                    case 40 /* ArrowDown */:
	                        _this.next();
	                        break;
	                    case 37 /* ArrowLeft */:
	                    case 38 /* ArrowUp */:
	                        _this.previous();
	                        break;
	                    default: {
	                        switch (utility_1.getVirtualKey(event)) {
	                            case 'ArrowRight':
	                            case 'ArrowDown': {
	                                _this.next();
	                                break;
	                            }
	                            case 'ArrowLeft':
	                            case 'ArrowUp': {
	                                _this.previous();
	                                break;
	                            }
	                            default: break;
	                        }
	                        break;
	                    }
	                }
	            };
	            if (observableComponent_1.ObservableComponent.shouldInitializeAsClass(sequenceIndicatorElement, params)) {
	                this.update();
	            }
	        }
	        /**
	        * @name - update
	        * @memberof - SequenceIndicator
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @override
	        * @returns {boolean}
	        */
	        SequenceIndicator.prototype.update = function () {
	            var activeIndex;
	            if (!this.sequenceIndicatorElement) {
	                return false;
	            }
	            // Check if element is deprecated shape or not
	            if (this.sequenceIndicatorElement.getAttribute('role') === 'radiogroup') {
	                this.selectedAttribute = SequenceIndicator.ariaChecked;
	            }
	            this.items = htmlExtensions_1.selectElements(this.constructor.itemSelector, this.sequenceIndicatorElement);
	            if (!this.items.length) {
	                return false;
	            }
	            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
	                var item = _a[_i];
	                if (item.getAttribute(this.selectedAttribute) === SequenceIndicator.selectedValue) {
	                    activeIndex = this.items.indexOf(item);
	                }
	                // Deselect everything initially to make sure we don't have multiple selected items
	                this.deselectItem(item);
	            }
	            // Make sure we
	            this.setControllerIndex(activeIndex || 0);
	            // Bind listener
	            htmlExtensions_1.addEvent(this.sequenceIndicatorElement, htmlExtensions_1.eventTypes.click, this.handleClickEvent);
	            htmlExtensions_1.addEvent(this.sequenceIndicatorElement, htmlExtensions_1.eventTypes.keydown, this.onKeydown, true);
	            return true;
	        };
	        /**
	        * @name - teardown
	        * @memberof - SequenceIndicator
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        SequenceIndicator.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.sequenceIndicatorElement, htmlExtensions_1.eventTypes.click, this.handleClickEvent);
	            htmlExtensions_1.removeEvent(this.sequenceIndicatorElement, htmlExtensions_1.eventTypes.keydown, this.onKeydown);
	        };
	        /**
	        * @name - publish
	        * @memberof - SequenceIndicator
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @override
	        * @param {IControllerSubscriber | ISequenceIndicatorSubscriber} subscriber - The subscriber to make the callback to.
	        * @param {any} context - The publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        SequenceIndicator.prototype.publish = function (subscriber, context) {
	            var sequenceIndicatorSubscriber = subscriber;
	            var controllerSubscriber = subscriber;
	            if (sequenceIndicatorSubscriber.onIndexChanged) {
	                sequenceIndicatorSubscriber.onIndexChanged(context);
	            }
	            if (controllerSubscriber.onControllerIndexChanged) {
	                controllerSubscriber.onControllerIndexChanged(context);
	            }
	        };
	        /**
	        * @name - selectItem
	        * @memberof - SequenceIndicator
	        * @description - Sets the selection properties for a sequence indicator item
	        * @private
	        * @param {HTMLElement} element - the element to select
	        * @returns {void}
	        */
	        SequenceIndicator.prototype.selectItem = function (element) {
	            if (!!element) {
	                element.setAttribute(this.selectedAttribute, SequenceIndicator.selectedValue);
	                element.setAttribute('tabindex', '0');
	                // For LogoController we also need to do this. Can we remove in V2?
	                htmlExtensions_1.addClass(element, SequenceIndicator.activeItemClass);
	            }
	        };
	        /**
	        * @name - deselectItem
	        * @memberof - SequenceIndicator
	        * @description - Sets the deselection properties for a sequence indicator item
	        * @private
	        * @param {HTMLElement} element - the element to deselect
	        * @returns {void}
	        */
	        SequenceIndicator.prototype.deselectItem = function (element) {
	            if (!!element) {
	                element.setAttribute(this.selectedAttribute, SequenceIndicator.deselectedValue);
	                element.setAttribute('tabindex', '-1');
	                // For LogoController we also need to do this. Can we remove in V2?
	                htmlExtensions_1.removeClass(element, SequenceIndicator.activeItemClass);
	            }
	        };
	        /**
	        * @name - next
	        * @memberof - SequenceIndicator
	        * @description - Go to the next item
	        * @private
	        * @returns {void}
	        */
	        SequenceIndicator.prototype.next = function () {
	            var index;
	            index = this.activeIndex === this.items.length - 1 ? 0 : this.activeIndex + 1;
	            this.setControllerIndex(index);
	        };
	        /**
	        * @name - previous
	        * @memberof - SequenceIndicator
	        * @description - Go to the previous item
	        * @private
	        * @returns {void}
	        */
	        SequenceIndicator.prototype.previous = function () {
	            var index;
	            index = this.activeIndex === 0 ? this.items.length - 1 : this.activeIndex - 1;
	            this.setControllerIndex(index);
	        };
	        /**
	        * @name - selector
	        * @memberof - SequenceIndicator
	        * @description - The SequenceIndicator component selector.
	        * @public
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        SequenceIndicator.selector = '.c-sequence-indicator';
	        /**
	        * @name - itemSelector
	        * @memberof - SequenceIndicator
	        * @description - The selector for sequence indicator items.
	        * @protected
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        SequenceIndicator.itemSelector = 'button';
	        /**
	        * @name - selectedValue
	        * @memberof - SequenceIndicator
	        * @description - The selected value of SequenceIndicator.selectedAttribute.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        SequenceIndicator.selectedValue = 'true';
	        /**
	        * @name - deselectedValue
	        * @memberof - SequenceIndicator
	        * @description - The deselected value of SequenceIndicator.selectedAttribute.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        SequenceIndicator.deselectedValue = 'false';
	        /**
	        * @name - ariaSelected
	        * @memberof - SequenceIndicator
	        * @description - The aria-selected attribute name.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        SequenceIndicator.ariaSelected = 'aria-selected';
	        /**
	        * @name - ariaChecked
	        * @memberof - SequenceIndicator
	        * @description - The aria-checked attribute name.
	        *                This value is needed only for backwards compatibility and can be removed in v2.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        SequenceIndicator.ariaChecked = 'aria-checked';
	        /**
	        * @name - activeItemClass
	        * @memberof - SequenceIndicator
	        * @description - The active item class name.
	        * @private
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        SequenceIndicator.activeItemClass = 'f-active';
	        return SequenceIndicator;
	    }(publisher_1.Publisher));
	    exports.SequenceIndicator = SequenceIndicator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(18), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, carousel_base_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - SingleSlideCarousel
	    * @classdesc - The SingleSlideCarousel class. This class is intended for carousels containing a single logical slide
	    *              where the slide may span more than the width of the carousel.
	    * @extends {CarouselBase}
	    * @export
	    */
	    var SingleSlideCarousel = (function (_super) {
	        __extends(SingleSlideCarousel, _super);
	        /**
	        * @name - constructor
	        * @memberof - SingleSlideCarousel
	        * @description - Constructor for the SingleSlideCarousel class.
	        * @param {HTMLElement} carouselElement - The native element to attach the SingleSlideCarousel behavior to.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function SingleSlideCarousel(carouselElement, params) {
	            var _this = this;
	            if (params === void 0) { params = null; }
	            _super.call(this, carouselElement, params);
	            this.carouselElement = carouselElement;
	            ///////////////////////////////////////////////////////////////////////////////////////////////
	            // Event handers section.
	            ///////////////////////////////////////////////////////////////////////////////////////////////
	            /**
	            * @name onItemFocus
	            * @memberof - SingleSlideCarousel
	            * @description Item focus handler
	            * @private
	            * @param  {FocusEvent} event - The event.
	            * @returns {void}
	            */
	            this.onItemFocus = function (event) {
	                var item = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                if (!item) {
	                    return;
	                }
	                while (item.tagName !== 'LI') {
	                    if ((!!item.parentElement) && (item.parentElement !== item)) {
	                        item = item.parentElement;
	                    }
	                    else {
	                        break;
	                    }
	                }
	                if (item.tagName === 'LI') {
	                    _this.scrollItemIntoView(item);
	                }
	            };
	            /**
	            * @name onResized
	            * @memberof - SingleSlideCarousel
	            * @private
	            * @description Carousel resize handler
	            * @param  {UIEvent} event - The event.
	            * @returns {void}
	            */
	            this.onResized = function (event) {
	                _this.onCarouselResized();
	            };
	        }
	        /**
	        * @name - update
	        * @memberof - SingleSlideCarousel
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @override
	        * @returns {boolean} - true if successful, otherwise false.
	        */
	        SingleSlideCarousel.prototype.update = function () {
	            if (!_super.prototype.update.call(this)) {
	                return false;
	            }
	            // In single slide mode we also need to add a resize handler in order to update flipper visibility.
	            this.resizeThrottledEventHandler = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.resize, this.onResized);
	            // In single slide mode we also need to add a focus handler in order to position items and update flipper visibility.
	            var focusSelector = htmlExtensions_1.hasClass(this.slides[0], 'f-gallery')
	                ? SingleSlideCarousel.focusGalleryItemSelector
	                : SingleSlideCarousel.focusItemSelector;
	            this.focusElements = htmlExtensions_1.selectElements(focusSelector, this.carouselElement);
	            htmlExtensions_1.addEvent(this.focusElements, htmlExtensions_1.eventTypes.focus, this.onItemFocus);
	            return true;
	        };
	        /**
	        * @name - teardown
	        * @memberof - SingleSlideCarousel
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        SingleSlideCarousel.prototype.teardown = function () {
	            _super.prototype.teardown.call(this);
	            // Clean up throttled event handlers.
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.resize, this.resizeThrottledEventHandler);
	            htmlExtensions_1.removeEvent(this.focusElements, htmlExtensions_1.eventTypes.focus, this.onItemFocus);
	        };
	        /**
	        * @name getSlides
	        * @memberof - SingleSlideCarousel
	        * @description - Get the individual slides in this multi-slide carousel.
	        * @protected
	        * @override
	        * @returns {HTMLElement[]}
	        */
	        SingleSlideCarousel.prototype.getSlides = function () {
	            var slides = htmlExtensions_1.selectElements(SingleSlideCarousel.singleSlideSelector, this.carouselElement);
	            // make sure we actually have slides.
	            if (slides && slides.length && htmlExtensions_1.selectFirstElement('li', slides[0])) {
	                this.singleSlideWidth = utility_1.getDimensions(slides[0]).width;
	                return slides;
	            }
	            return null;
	        };
	        /**
	        * @name getFirstActiveIndex
	        * @memberof - SingleSlideCarousel
	        * @description - Gets the index of the first active slide.
	        * @protected
	        * @override
	        * @returns {number}
	        */
	        SingleSlideCarousel.prototype.getFirstActiveIndex = function () {
	            return 0;
	        };
	        /**
	        * @name - isScrollablePrevious
	        * @memberof - SingleSlideCarousel
	        * @description - Determines whether or not the carousel can "scroll previous".
	        * @protected
	        * @override
	        * @returns {boolean}
	        */
	        SingleSlideCarousel.prototype.isScrollablePrevious = function () {
	            var offset = parseInt(htmlExtensions_1.css(this.slides[this.activeIndex], this.directionValue), 10);
	            return !isNaN(offset) && (offset !== 0);
	        };
	        /**
	        * @name - isScrollableNext
	        * @memberof - SingleSlideCarousel
	        * @description - Determines whether or not the carousel can "scroll next".
	        * @protected
	        * @override
	        * @returns {boolean}
	        */
	        SingleSlideCarousel.prototype.isScrollableNext = function () {
	            var offset = parseInt(htmlExtensions_1.css(this.slides[this.activeIndex], this.directionValue), 10);
	            var carouselWidth = utility_1.getDimensions(this.carouselElement).width;
	            var currentItemScrollWindow = this.getCurrentSlideSize();
	            if (!utility_1.isNumber(offset)) {
	                offset = 0;
	            }
	            if ((carouselWidth + Math.abs(offset) + currentItemScrollWindow.gutter) >= this.singleSlideWidth) {
	                return false;
	            }
	            return true;
	        };
	        /**
	        * @name - previousSlide
	        * @memberof - SingleSlideCarousel
	        * @description - Go to previous slide.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        SingleSlideCarousel.prototype.previousSlide = function () {
	            this.changeSingleSlide(false);
	        };
	        /**
	        * @name - nextSlide
	        * @memberof - SingleSlideCarousel
	        * @description - Go to next slide.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        SingleSlideCarousel.prototype.nextSlide = function () {
	            this.changeSingleSlide(true);
	        };
	        /**
	        * @name - changeSingleSlide
	        * @memberof - SingleSlideCarousel
	        * @description - Scrolls previous or next panning through the logical single slide.
	        * @private
	        * @param {boolean} next - Whether or not to scroll in the 'next' direction.
	        * @returns {void}
	        */
	        SingleSlideCarousel.prototype.changeSingleSlide = function (next) {
	            var activeSlide = this.slides[this.activeIndex];
	            var currentOffset = parseInt(htmlExtensions_1.css(activeSlide, this.directionValue), 10);
	            var itemDimensions = this.getCurrentSlideSize();
	            var carouselWidth = utility_1.getDimensions(this.carouselElement).width;
	            var maxScrollCount = Math.floor(carouselWidth / (itemDimensions.width + itemDimensions.gutter));
	            var maxScrollDistance;
	            var directionModifier = next ? -1 : 1;
	            var itemDimensionsGutterValue = next ? itemDimensions.gutter : 0;
	            if (!utility_1.isNumber(currentOffset)) {
	                currentOffset = 0;
	            }
	            if (maxScrollCount === 0) {
	                maxScrollCount = 1;
	            }
	            maxScrollCount = (carouselWidth % (itemDimensions.width + itemDimensions.gutter) === 0) ? maxScrollCount - 1 : maxScrollCount;
	            // bug 9260013 - make sure maxScrollCount is always at least 1 to avoid issue with flippers
	            maxScrollCount = Math.max(maxScrollCount, 1);
	            maxScrollDistance = maxScrollCount * (itemDimensions.width + itemDimensions.gutter);
	            var distanceToEdge = next ? this.singleSlideWidth - carouselWidth + currentOffset : Math.abs(currentOffset);
	            var offset;
	            // If we can scroll the distance of elements * scrollcount without going past the edge, we should
	            if (maxScrollDistance <= distanceToEdge) {
	                offset = (maxScrollDistance * directionModifier) + currentOffset;
	            }
	            else {
	                offset = (distanceToEdge * directionModifier) + currentOffset + itemDimensionsGutterValue;
	            }
	            htmlExtensions_1.css(activeSlide, this.directionValue, offset + 'px');
	            _super.prototype.updateFlippers.call(this);
	            this.fireSingleSlideChangedNotification(offset, carouselWidth, itemDimensions);
	        };
	        /**
	        * @name - fireSingleSlideChangedNotification
	        * @memberof - SingleSlideCarousel
	        * @description - Fires a ISlideChangedNotification for a singleslide mode change.
	        * @private
	        * @param {number} offset - The current offset of the singleslide within the carousel.
	        * @param {number} carouselWidth - The width of the carousel.
	        * @param {IScrollWindow} itemDimensions - The dimensions of a single item.
	        * @returns {void}
	        */
	        SingleSlideCarousel.prototype.fireSingleSlideChangedNotification = function (offset, carouselWidth, itemDimensions) {
	            var slides = htmlExtensions_1.selectElements(carousel_base_1.CarouselBase.allChildSelectors, this.carouselElement);
	            var itemWidth = itemDimensions.width;
	            var fullItemWidth = itemDimensions.width + itemDimensions.gutter;
	            var firstPartial = -1;
	            var lastPartial = -1;
	            var firstFull = -1;
	            var lastFull = -1;
	            for (var index = 0; index < slides.length; index++) {
	                var slideOffset = (index * fullItemWidth) + offset;
	                var slideEndOffset = slideOffset + itemWidth;
	                if (slideEndOffset < 0) {
	                    continue;
	                }
	                if ((slideOffset < 0) && (slideEndOffset > 0)) {
	                    firstPartial = index;
	                }
	                if ((firstFull === -1) && (slideOffset >= 0)) {
	                    firstFull = index;
	                    if (firstPartial === -1) {
	                        firstPartial = firstFull;
	                    }
	                }
	                if ((firstFull !== -1) && (slideEndOffset <= carouselWidth)) {
	                    lastFull = index;
	                }
	                if ((lastFull !== -1) && (lastPartial === -1) && (slideOffset < carouselWidth) && (slideEndOffset > carouselWidth)) {
	                    lastPartial = index;
	                    break;
	                }
	            }
	            if (lastPartial === -1) {
	                lastPartial = lastFull;
	            }
	            _super.prototype.initiatePublish.call(this, {
	                fullyVisibleItemRange: [firstFull, lastFull],
	                partiallyVisibleItemRange: [firstPartial, lastPartial],
	                userInitiated: true
	            });
	        };
	        /**
	        * @name getCurrentSlideSize
	        * @memberof - SingleSlideCarousel
	        * @description Gets the width and gutter of the current slide.
	        * @private
	        * @returns {IScrollWindow}
	        */
	        SingleSlideCarousel.prototype.getCurrentSlideSize = function () {
	            var currentSlide = htmlExtensions_1.selectFirstElement(carousel_base_1.CarouselBase.allChildSelectors, this.carouselElement);
	            if (!!currentSlide) {
	                var gutter = this.direction === htmlExtensions_1.Direction.left ?
	                    parseInt(htmlExtensions_1.css(currentSlide, 'marginRight'), 10) :
	                    parseInt(htmlExtensions_1.css(currentSlide, 'marginLeft'), 10);
	                return {
	                    width: currentSlide.offsetWidth,
	                    gutter: isNaN(gutter) ? 0 : gutter
	                };
	            }
	            return { width: 0, gutter: 0 };
	        };
	        /**
	        * @name onCarouselResized
	        * @memberof - SingleSlideCarousel
	        * @description Carousel resize handler
	        * @private
	        * @returns {void}
	        */
	        SingleSlideCarousel.prototype.onCarouselResized = function () {
	            var slide = this.slides[0];
	            var offset = parseInt(htmlExtensions_1.css(slide, this.directionValue), 10);
	            var carouselWidth = utility_1.getDimensions(this.carouselElement).width;
	            // Update the singleSlideWidth in case that also changed when the carousel was resized.
	            this.singleSlideWidth = utility_1.getDimensions(this.slides[0]).width;
	            // Ensure the single slide extends to "next" edge of the carousel container if the offset is less than zero.
	            // We don't want it to be more negative than it needs to be.
	            if ((!isNaN(offset)) && (offset < 0) && (this.singleSlideWidth + offset < carouselWidth)) {
	                htmlExtensions_1.css(slide, this.directionValue, Math.min(0, carouselWidth - this.singleSlideWidth) + 'px');
	            }
	            _super.prototype.updateFlippers.call(this);
	        };
	        /**
	        * @name scrollItemIntoView
	        * @memberof - SingleSlideCarousel
	        * @description Scroll item into view.
	        * @private
	        * @param  {HTMLElement} item - The item that should be scrolled into view.
	        * @returns {void}
	        */
	        SingleSlideCarousel.prototype.scrollItemIntoView = function (item) {
	            var _this = this;
	            var carouselWidth = utility_1.getDimensions(this.carouselElement).width;
	            var activeSlide = this.slides[0];
	            var offset = item.offsetLeft;
	            var itemSize = this.getCurrentSlideSize();
	            var updateOffset = false;
	            if (this.direction === htmlExtensions_1.Direction.left) {
	                var left = parseInt(htmlExtensions_1.css(activeSlide, 'left'), 10) || 0;
	                if ((left < 0) && (-left > offset)) {
	                    offset = -offset + 1;
	                    updateOffset = true;
	                }
	                else if ((left + offset) > (carouselWidth - itemSize.width)) {
	                    offset = carouselWidth - itemSize.width - offset - 1;
	                    updateOffset = true;
	                }
	            }
	            else {
	                var width = utility_1.getDimensions(activeSlide).width;
	                if (offset + itemSize.width + itemSize.gutter + activeSlide.offsetLeft > carouselWidth) {
	                    offset = -(width - offset - itemSize.width - itemSize.gutter) + 1;
	                    updateOffset = true;
	                }
	                else if (offset + activeSlide.offsetLeft < 0) {
	                    offset = carouselWidth - (width - offset - itemSize.gutter) - 1;
	                    updateOffset = true;
	                }
	            }
	            if (updateOffset) {
	                htmlExtensions_1.css(activeSlide, this.directionValue, offset + 'px');
	                _super.prototype.updateFlippers.call(this);
	                // The browser will potentially have already decided to scroll this item
	                // into view by setting the parent's scrollLeft property. For our
	                // positioning to work property we need this restored to 0. IE/Edge will
	                // do this after we return from handling the focus event so we need to
	                // do it in an immediate callback after giving them a chance to act first.
	                setTimeout(function () {
	                    activeSlide.parentElement.scrollLeft = 0;
	                    _this.fireSingleSlideChangedNotification(offset, carouselWidth, itemSize);
	                }, 0);
	            }
	        };
	        /**
	        * @name - selector
	        * @memberof - SingleSlideCarousel
	        * @description - The single-slide carousel element selector.
	        * @public
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        SingleSlideCarousel.selector = '.c-carousel[class*=f-single-slide]';
	        /**
	        * @name - singleSlideSelector
	        * @memberof - SingleSlideCarousel
	        * @description - The single-slide carousel single logical slide selector.
	        * @private
	        * @static
	        * @type {string}
	        */
	        SingleSlideCarousel.singleSlideSelector = carousel_base_1.CarouselBase.selector + ' > * > ul';
	        /**
	        * @name - focusItemSelector
	        * @memberof - SingleSlideCarousel
	        * @description - The focus items selector for non-gallery mode.
	        * @private
	        * @static
	        * @type {string}
	        */
	        SingleSlideCarousel.focusItemSelector = carousel_base_1.CarouselBase.selector + ' > * > ul > li > section a';
	        /**
	        * @name - focusGalleryItemSelector
	        * @memberof - SingleSlideCarousel
	        * @description - The focus items selector for gallery mode.
	        * @private
	        * @static
	        * @type {string}
	        */
	        SingleSlideCarousel.focusGalleryItemSelector = carousel_base_1.CarouselBase.selector + ' > * > ul > li a';
	        return SingleSlideCarousel;
	    }(carousel_base_1.CarouselBase));
	    exports.SingleSlideCarousel = SingleSlideCarousel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(6), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, publisher_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	     * Checkbox component
	     */
	    var Checkbox = (function (_super) {
	        __extends(Checkbox, _super);
	        /**
	         * Creates an instance of Checkbox.
	         *
	         * @param {HTMLInputElement} element
	         */
	        function Checkbox(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	             * @name - updateCheckbox
	             * @description - update the checkbox component and publish to subscribers if checkbox was updated.
	             * @private
	             * @returns {void}
	             */
	            this.updateCheckbox = function () {
	                var checked = _this.input.checked;
	                if (checked !== _this.checked) {
	                    _this.checked = checked;
	                    _this.input.setAttribute(Checkbox.ariaCheckedAttribute, _this.checked.toString());
	                    _this.initiatePublish({
	                        checked: _this.checked
	                    });
	                }
	            };
	            this.update();
	        }
	        /**
	         * @name - update
	         * @description - Updates the component if there is any change to its underlying DOM.
	         * @protected
	         * @returns {void}
	         */
	        Checkbox.prototype.update = function () {
	            this.input = htmlExtensions_1.selectFirstElement(Checkbox.inputSelector, this.element);
	            if (!this.input) {
	                return;
	            }
	            if (this.input.getAttribute(Checkbox.indeterminateAttribute) === Checkbox.indeterminateValue) {
	                this.input.indeterminate = true;
	            }
	            this.checked = this.input.checked;
	            this.input.setAttribute(Checkbox.ariaCheckedAttribute, this.checked.toString());
	            htmlExtensions_1.addEvent(this.input, htmlExtensions_1.eventTypes.click, this.updateCheckbox);
	        };
	        /**
	         * @name - teardown
	         * @description - Called by ObservableComponent when the component needs to clean up its state.
	         *                Components should remove any event bindings they've added to ensure they are
	         *                not duplicated during repeated update/teardown cycles.
	         * @protected
	         * @returns {void}
	         */
	        Checkbox.prototype.teardown = function () {
	            // Remove the click listeners.
	            htmlExtensions_1.removeEvent(this.input, htmlExtensions_1.eventTypes.click, this.updateCheckbox);
	        };
	        /**
	         * @name - publish
	         * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	         *                This method will be called once for each registered subscriber.
	         * @protected
	         * @param {ICheckboxSubscriber} subscriber - the subscriber to make the callback to.
	         * @param {any} context - the publish context use to determine which interface callback to make.
	         * @returns {void}
	         */
	        Checkbox.prototype.publish = function (subscriber, context) {
	            subscriber.onValueChanged(context);
	        };
	        Object.defineProperty(Checkbox.prototype, "indeterminate", {
	            /**
	             * Gets checkbox indeterminate state.
	             *
	             * @type {boolean}
	             */
	            get: function () {
	                if (!this.input) {
	                    return false;
	                }
	                return this.input.indeterminate;
	            },
	            /**
	             * Sets checkbox indeterminate state.
	             *
	             * @param {boolean} value
	             */
	            set: function (value) {
	                if (!this.input) {
	                    return;
	                }
	                this.input.indeterminate = value;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	         */
	        Checkbox.init = function (input) {
	            utility_1.apiDeprecated('Checkbox.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Checkbox,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	         * @name - selector
	         * @description - selector to use to find Checkbox components in the document.
	         * @static
	         * @public
	         * @type {string}
	         */
	        Checkbox.selector = '.c-checkbox';
	        /**
	         * @name - inputSelector
	         * @description - selector to use to find checkbox input in the component.
	         * @static
	         * @public
	         * @type {string}
	         */
	        Checkbox.inputSelector = 'input[type="checkbox"]';
	        /**
	         * @name - indeterminateAttribute
	         * @description - the attribute to check for to determine if the checkbox is indeterminate
	         * @static
	         * @private
	         * @type {string}
	         */
	        Checkbox.indeterminateAttribute = 'data-js-checkbox';
	        /**
	         * @name - indeterminateValue
	         * @description - the value of the indeterminateValue if the checkbox is indeterminate
	         * @static
	         * @private
	         * @type {string}
	         */
	        Checkbox.indeterminateValue = 'indeterminate';
	        /**
	         * @name - ariaCheckedAttribute
	         * @description - the value of the ariaCheckedAttribute if the checkbox is indeterminate
	         * @static
	         * @private
	         * @type {string}
	         */
	        Checkbox.ariaCheckedAttribute = 'aria-checked';
	        return Checkbox;
	    }(publisher_1.Publisher));
	    exports.Checkbox = Checkbox;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, htmlExtensions_1) {
	    "use strict";
	    /**
	    * @class - ChoiceSummary
	    * @classdesc - The choice summary component
	    */
	    var ChoiceSummary = (function (_super) {
	        __extends(ChoiceSummary, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the ChoiceSummary component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the ChoiceSummary behavior to.
	        */
	        function ChoiceSummary(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	             * @name - onDropdownClicked
	             * @description - Dropdown button click handler
	             * @param  {MouseEvent} event - The event.
	             * @returns void
	             */
	            this.onDropdownClicked = function (event) {
	                htmlExtensions_1.preventDefault(event);
	                _this.toggleVisibility();
	            };
	            /**
	             * @name - onNonDropdownClick
	             * @description - Document click handler
	             * @param  {MouseEvent} event - The event.
	             * @returns void
	             */
	            this.onNonDropdownClick = function (event) {
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                if (!_this.isVisible && !_this.element.contains(target)) {
	                    _this.toggleVisibility();
	                }
	            };
	            /**
	             * @name - replaceText
	             * @description - Replace text for dropdown
	             * @param  {MouseEvent} event - The event.
	             * @returns void
	             */
	            this.replaceText = function (event) {
	                _this.checkedChoiceOption = event.target;
	                // get text in dropdown
	                var choiceOptionContainer = _this.checkedChoiceOption.parentNode;
	                _this.label = htmlExtensions_1.selectFirstElement(ChoiceSummary.spanSelector, choiceOptionContainer);
	                var replacementText = _this.labelText + _this.separator + ' ' + htmlExtensions_1.getText(_this.label);
	                htmlExtensions_1.setText(_this.dropdownText, replacementText);
	            };
	            /**
	             * @name - toggleVisibility
	             * @description - Toggles visibility for the dropdown
	             * @returns void
	             */
	            this.toggleVisibility = function () {
	                _this.isVisible = !_this.isVisible;
	                _this.element.setAttribute(ChoiceSummary.ariaExpanded, (!_this.isVisible).toString());
	                _this.dropdownMenu.setAttribute(ChoiceSummary.ariaHidden, _this.isVisible.toString());
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        ChoiceSummary.prototype.update = function () {
	            this.dropdownButton = htmlExtensions_1.selectFirstElement(ChoiceSummary.dropdownButtonSelector, this.element);
	            this.dropdownMenu = htmlExtensions_1.selectFirstElement(ChoiceSummary.dropdownMenuSelector, this.element);
	            this.dropdownText = htmlExtensions_1.selectFirstElement(ChoiceSummary.separatorSpanSelector, this.element);
	            this.separator = this.dropdownText.getAttribute(ChoiceSummary.separatorSelector);
	            this.labelText = htmlExtensions_1.getText(this.dropdownText);
	            // add dropdown button click handlers
	            if (this.dropdownButton && this.separator && this.dropdownMenu && this.dropdownText && this.labelText) {
	                this.choiceOptions = htmlExtensions_1.selectElementsT(ChoiceSummary.choiceOptionSelector, this.element);
	                this.isVisible = this.dropdownMenu.getAttribute(ChoiceSummary.ariaHidden) === 'true';
	                htmlExtensions_1.addEvent(this.dropdownButton, htmlExtensions_1.eventTypes.click, this.onDropdownClicked);
	                htmlExtensions_1.addEvent(document, htmlExtensions_1.eventTypes.click, this.onNonDropdownClick);
	                htmlExtensions_1.addEvent(this.choiceOptions, htmlExtensions_1.eventTypes.click, this.replaceText);
	                for (var _i = 0, _a = this.choiceOptions; _i < _a.length; _i++) {
	                    var choiceOption = _a[_i];
	                    if (choiceOption.checked) {
	                        this.checkedChoiceOption = choiceOption;
	                        break;
	                    }
	                }
	            }
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        ChoiceSummary.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.dropdownButton, htmlExtensions_1.eventTypes.click, this.onDropdownClicked);
	            htmlExtensions_1.removeEvent(document, htmlExtensions_1.eventTypes.click, this.onNonDropdownClick);
	            htmlExtensions_1.removeEvent(this.choiceOptions, htmlExtensions_1.eventTypes.click, this.replaceText);
	        };
	        /**
	        * @name - selector
	        * @description - selector to use to find choice summary components in the document.
	        * @static
	        * @public
	        * @type {string}
	        */
	        ChoiceSummary.selector = '.c-choice-summary';
	        /**
	        * @name - dropdownButtonSelector
	        * @description - selector to use to find dropdown button on the choice summary element.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ChoiceSummary.dropdownButtonSelector = '.c-action-trigger.glyph-chevron-down';
	        /**
	        * @name - dropdownMenuSelector
	        * @description - selector to use to find dropdown menu on the choice summary element.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ChoiceSummary.dropdownMenuSelector = 'ul';
	        /**
	        * @name - ariaHidden
	        * @description - aria-hidden attribute name. Set to true/false to hide/show the dropdown.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ChoiceSummary.ariaHidden = 'aria-hidden';
	        /**
	        * @name - ariaExpanded
	        * @description - aria-expanded attribute name. Set to true/false to determine if the dropdown is hidden.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ChoiceSummary.ariaExpanded = 'aria-expanded';
	        /**
	        * @name - separatorSpanSelector
	        * @description - selector to find the first direct descendant span in choice summary.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ChoiceSummary.separatorSpanSelector = '.c-choice-summary > span';
	        /**
	        * @name - spanSelector
	        * @description - selector to use to find dropdown text on the choice summary element.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ChoiceSummary.spanSelector = 'span';
	        /**
	        * @name - separatorSelector
	        * @description - selector to use to find separator text on the choice summary element.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ChoiceSummary.separatorSelector = 'data-js-separator';
	        /**
	        * @name - labelSelector
	        * @description - selector to use to find the label element on the choice summary element.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ChoiceSummary.labelSelector = 'label';
	        /**
	        * @name - choiceOptionSelector
	        * @description - selector to use to find radio inputs on the choice summary element.
	        * @private
	        * @static
	        * @type {string}
	        */
	        ChoiceSummary.choiceOptionSelector = 'input[type="radio"]';
	        return ChoiceSummary;
	    }(observableComponent_1.ObservableComponent));
	    exports.ChoiceSummary = ChoiceSummary;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, publisher_1, componentFactory_1, htmlExtensions_1, utility_1, stringExtensions_1) {
	    "use strict";
	    /**
	    * @class - Combo
	    * @classdesc - The combo component
	    * @export
	    */
	    var Combo = (function (_super) {
	        __extends(Combo, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Combo component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the Combo behavior to.
	        */
	        function Combo(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - isCombobox
	            * @description - Boolean to veriify usage of combobox role.
	            * @static
	            * @private
	            * @type {boolean}
	            */
	            this.isCombobox = false;
	            /**
	            * @name - maxDisplayedItems
	            * @description - The maximum number of items to show in the menu without scrolling, any additional items will scroll.
	            * @public
	            * @type {number}
	            */
	            this.maxDisplayedItems = Combo.defaultMaxDisplayedItems;
	            // --------------------------------------------------------------------------------------------
	            // Event listeners
	            // --------------------------------------------------------------------------------------------
	            /**
	            * @name - handleInputKeydownEvent
	            * @description - Handler for input keydown events, calls handleInputKeydown which does the real work.
	            * @private
	            * @param {KeyboardEvent} event - The keyboard event.
	            * @returns {void}
	            */
	            this.handleInputKeydownEvent = function (event) {
	                var keyCode = utility_1.getKeyCode(event);
	                if ((keyCode === 13 /* Enter */) || (keyCode === 40 /* ArrowDown */)) {
	                    // Stop the enter key from submitting the combo form
	                    htmlExtensions_1.preventDefault(event);
	                }
	                _this.handleInputKeydown(keyCode);
	            };
	            /**
	            * @name - handleInputKeyupEvent
	            * @description - Handler for input keyup event, calls handleInputKeyup which does the real work.
	            * @private
	            * @param {KeyboardEvent} event - The keyboard event.
	            * @returns {void}
	            */
	            this.handleInputKeyupEvent = function (event) {
	                _this.handleInputKeyup(utility_1.getKeyCode(event));
	            };
	            /**
	            * @name - handleInputOrButtonClickEvent
	            * @description - Handler for input or button click events, calls handleInputOrButtonClick which does the real work.
	            * @private
	            * @param {UIEvent} event - The click event.
	            * @returns {void}
	            */
	            this.handleInputOrButtonClickEvent = function (event) {
	                htmlExtensions_1.preventDefault(event);
	                _this.handleInputOrButtonClick();
	            };
	            /**
	            * @name - handleButtonKeydownEvent
	            * @description - Handler for button arrow down events, calls handleButtonKeydown which does the real work.
	            * @private
	            * @param {KeyboardEvent} event - The keyboard event.
	            * @returns {void}
	            */
	            this.handleButtonKeydownEvent = function (event) {
	                var keyCode = utility_1.getKeyCode(event);
	                if (keyCode !== 9 /* Tab */) {
	                    htmlExtensions_1.preventDefault(event);
	                }
	                _this.handleButtonKeydown(keyCode);
	            };
	            /**
	            * @name - handleMenuKeydownEvent
	            * @description - Handler for menu keydown events, calls handleMenuKeydown which does the real work.
	            * @private
	            * @param {KeyboardEvent} event - The keyboard event.
	            * @returns {void}
	            */
	            this.handleMenuKeydownEvent = function (event) {
	                var keyCode = utility_1.getKeyCode(event);
	                if (keyCode !== 9 /* Tab */) {
	                    htmlExtensions_1.preventDefault(event);
	                }
	                _this.handleMenuKeydown(htmlExtensions_1.getEventTargetOrSrcElement(event), keyCode);
	            };
	            /**
	            * @name - handleMenuClickEvent
	            * @description - Handler for menu click events, calls handleMenuClick which does the real work.
	            * @private
	            * @param event {UIEvent} - The mouse event
	            * @returns {void}
	            */
	            this.handleMenuClickEvent = function (event) {
	                _this.handleMenuClick(htmlExtensions_1.getEventTargetOrSrcElement(event));
	            };
	            /**
	            * @name - handleOffMenuClick
	            * @description - Handler for click events outside the menu when it is open.
	            * @private
	            * @param {UIEvent} event - The click event
	            * @returns {void}
	            */
	            this.handleOffMenuClick = function (event) {
	                if (!_this.element.contains(htmlExtensions_1.getEventTargetOrSrcElement(event))) {
	                    _this.hideMenu();
	                }
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        Combo.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            // find elements
	            this.input = htmlExtensions_1.selectFirstElementT('input', this.element);
	            this.button = htmlExtensions_1.selectFirstElement('button', this.element);
	            this.menu = htmlExtensions_1.selectFirstElement('ul', this.element);
	            this.listItems = htmlExtensions_1.selectElements('span, a', this.menu);
	            if (this.input.getAttribute(Combo.role) === 'combobox') {
	                this.isCombobox = true;
	            }
	            if (!this.input || !this.button || !this.menu || this.listItems.length < 1) {
	                return;
	            }
	            this.activeValue = this.input.value;
	            this.activeItem = htmlExtensions_1.selectFirstElement('span[class=\'' + Combo.activeClassName + '\']', this.menu);
	            // bind elements to events
	            htmlExtensions_1.addEvent(this.input, htmlExtensions_1.eventTypes.keydown, this.handleInputKeydownEvent, true);
	            htmlExtensions_1.addEvent(this.input, htmlExtensions_1.eventTypes.keyup, this.handleInputKeyupEvent, true);
	            htmlExtensions_1.addEvent(this.input, htmlExtensions_1.eventTypes.click, this.handleInputOrButtonClickEvent, true);
	            htmlExtensions_1.addEvent(this.button, htmlExtensions_1.eventTypes.click, this.handleInputOrButtonClickEvent, true);
	            htmlExtensions_1.addEvent(this.button, htmlExtensions_1.eventTypes.keydown, this.handleButtonKeydownEvent, true);
	            htmlExtensions_1.addEvent(this.listItems, htmlExtensions_1.eventTypes.keydown, this.handleMenuKeydownEvent, true);
	            htmlExtensions_1.addEvent(this.listItems, htmlExtensions_1.eventTypes.click, this.handleMenuClickEvent, true);
	            if (this.activeItem) {
	                this.setActiveItemAndHideMenu(this.activeItem, false);
	            }
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        Combo.prototype.teardown = function () {
	            // Remove event listeners
	            htmlExtensions_1.removeEvent(this.input, htmlExtensions_1.eventTypes.keydown, this.handleInputKeydownEvent, true);
	            htmlExtensions_1.removeEvent(this.input, htmlExtensions_1.eventTypes.keyup, this.handleInputKeyupEvent, true);
	            htmlExtensions_1.removeEvent(this.input, htmlExtensions_1.eventTypes.click, this.handleInputOrButtonClickEvent, true);
	            htmlExtensions_1.removeEvent(this.button, htmlExtensions_1.eventTypes.click, this.handleInputOrButtonClickEvent, true);
	            htmlExtensions_1.removeEvent(this.button, htmlExtensions_1.eventTypes.keydown, this.handleButtonKeydownEvent, true);
	            htmlExtensions_1.removeEvent(this.listItems, htmlExtensions_1.eventTypes.keydown, this.handleMenuKeydownEvent, true);
	            htmlExtensions_1.removeEvent(this.listItems, htmlExtensions_1.eventTypes.click, this.handleMenuClickEvent, true);
	            // Reset non static members
	            this.input = null;
	            this.button = null;
	            this.menu = null;
	            this.listItems = null;
	            this.activeItem = null;
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {IComboSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        Combo.prototype.publish = function (subscriber, context) {
	            subscriber.onSelectionChanged(context);
	        };
	        /**
	        * @name - onSelectionChanged
	        * @description - Call when subscribers need to be notified that the selection has changed.
	        * @private
	        * @param {boolean} internal - Whether or not this change was internally generated (true by default).
	        * @param {boolean} userInitiated - Whether or not this change was user initiated (via mouse/keyboard/touch) (true by default).
	        * @returns {void}
	        */
	        Combo.prototype.onSelectionChanged = function (internal, userInitiated) {
	            if (internal === void 0) { internal = true; }
	            if (userInitiated === void 0) { userInitiated = true; }
	            // TODO: 8479736: Update build step to remove commented code.
	            // The following console.log useful for debugging and is left in commented out for easy restoration.
	            // console.log('id(' + this.activeItem.parentElement.id + ') value(' + this.input.value + ')');
	            this.initiatePublish({
	                id: (!!this.activeItem && !!this.activeItem.parentElement) ? this.activeItem.parentElement.id : '',
	                value: this.input.value,
	                internal: internal,
	                userInitiated: userInitiated
	            });
	        };
	        /**
	        * @name - getValue
	        * @description - Gets the current value as an IComboNotification.
	        * @public
	        * @returns {IComboNotification} - The current value as an IComboNotification.
	        */
	        Combo.prototype.getValue = function () {
	            return {
	                id: (!!this.activeItem && !!this.activeItem.parentElement) ? this.activeItem.parentElement.id : '',
	                value: this.input.value,
	                internal: false,
	                userInitiated: false
	            };
	        };
	        /**
	        * @name - showMenu
	        * @description - Show the menu.
	        * @private
	        * @param {boolean} showIfNoValue - Show the menu even if the input value is null or whitespace. (false by default)
	        * @param {boolean} itemFocus - Set the focus to the menu item. (true by default)
	        * @returns {void}
	        */
	        Combo.prototype.showMenu = function (showIfNoValue, itemFocus) {
	            if (showIfNoValue === void 0) { showIfNoValue = false; }
	            if (itemFocus === void 0) { itemFocus = true; }
	            if (this.isMenuVisible()) {
	                return;
	            }
	            var value = this.input.value;
	            if (!showIfNoValue && stringExtensions_1.isNullOrWhiteSpace(value)) {
	                return;
	            }
	            // This must be done prior to determining maxHeight or the offsetHeight's will be zero.
	            this.setMenuAriaAttributes(true);
	            // Make the combo box show a maximum of this.maxDisplayedItems -- the rest will be visible via a vertical scroll bar.
	            var listItemLength = this.listItems.length;
	            if (listItemLength > this.maxDisplayedItems) {
	                var maxHeight = 0;
	                for (var index = 0; index < this.maxDisplayedItems; index++) {
	                    maxHeight += this.listItems[index].offsetHeight;
	                }
	                this.menu.style.maxHeight = maxHeight + 'px';
	            }
	            // Add a click listener to the document to handle closing the menu when someone clicks outside of it.
	            htmlExtensions_1.addEvent(document.body, htmlExtensions_1.eventTypes.click, this.handleOffMenuClick);
	            this.matchItem(itemFocus);
	        };
	        /**
	        * @name - hideMenu
	        * @description - Hide the menu.
	        * @private
	        * @returns {void}
	        */
	        Combo.prototype.hideMenu = function () {
	            if (this.isMenuVisible()) {
	                this.setMenuAriaAttributes(false);
	                // Remove the click listener added to the document to handle closing the menu when someone clicks outside of it.
	                htmlExtensions_1.removeEvent(document.body, htmlExtensions_1.eventTypes.click, this.handleOffMenuClick);
	            }
	        };
	        /**
	        * @name - setMenuAriaAttributes
	        * @description - Sets the menu.
	        * @private
	        * @param {boolean} show - Whether or not to show or hide the menu. Default is true at instantiation.
	        * @returns {void}
	        */
	        Combo.prototype.setMenuAriaAttributes = function (show) {
	            if (this.isCombobox) {
	                this.menu.setAttribute(Combo.ariaExpanded, show.toString());
	            }
	            else {
	                this.menu.setAttribute(Combo.ariaHidden, (!show).toString());
	            }
	        };
	        /**
	        * @name - isMenuVisible
	        * @description - Determines whether or not the menu is currently visible.
	        * @private
	        * @returns {boolean} - True if the menu is visible, otherwise false.
	        */
	        Combo.prototype.isMenuVisible = function () {
	            if (this.isCombobox) {
	                return this.menu.getAttribute(Combo.ariaExpanded) === 'true';
	            }
	            else {
	                return this.menu.getAttribute(Combo.ariaHidden) === 'false';
	            }
	        };
	        /**
	        * @name - setActiveItemAndHideMenu
	        * @description - Sets the specified element to be the activeItem, updates the input value, and hides the menu.
	        * @private
	        * @param {HTMLElement} element - The desired activeItem element.
	        * @param {boolean} focusInput - Whether or not the input should be set to the input on menu hide. Default is true
	        * @returns {void}
	        */
	        Combo.prototype.setActiveItemAndHideMenu = function (element, focusInput) {
	            if (focusInput === void 0) { focusInput = true; }
	            if (!!element) {
	                this.setActiveItem(element);
	                this.input.value = this.activeValue = this.getActiveText();
	                this.hideMenu();
	                if (focusInput) {
	                    this.input.focus();
	                }
	                this.onSelectionChanged();
	            }
	        };
	        /**
	        * @name - setActiveItem
	        * @description - Sets the active item in the list.
	        * @private
	        * @param {HTMLElement} item - The menu item element to set as active.
	        * @param {boolean} displayAsActive - Whether or not to visually indicate the item is active. Default is true.
	        * @returns {void}
	        */
	        Combo.prototype.setActiveItem = function (item, displayAsActive) {
	            if (displayAsActive === void 0) { displayAsActive = true; }
	            if (this.activeItem) {
	                htmlExtensions_1.removeClass(this.activeItem, Combo.activeClassName);
	            }
	            this.activeItem = item;
	            if (displayAsActive) {
	                htmlExtensions_1.addClass(this.activeItem, Combo.activeClassName);
	            }
	        };
	        /**
	        * @name - getActiveText
	        * @description - Gets the currently active item's text content.
	        * @private
	        * @returns {string} - The active item's text content if there is an active item, otherwise na emtpy string.
	        */
	        Combo.prototype.getActiveText = function () {
	            return this.activeItem ? htmlExtensions_1.getText(this.activeItem) : '';
	        };
	        /**
	        * @name - matchItem
	        * @description - Matches the current input.value to the best matching item, or the first item ifno match is found.
	        * @private
	        * @param {boolean} itemFocus - Set the focus to the matched item. (false by default)
	        * @returns {void}
	        */
	        Combo.prototype.matchItem = function (itemFocus) {
	            if (itemFocus === void 0) { itemFocus = false; }
	            var value = this.input.value;
	            var match;
	            var matchLength = 0;
	            if (!stringExtensions_1.isNullOrWhiteSpace(value)) {
	                value = stringExtensions_1.trim(value).toLocaleLowerCase();
	                for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    var itemValue = htmlExtensions_1.getText(item).toLocaleLowerCase();
	                    if (value === itemValue) {
	                        match = item;
	                        matchLength = -1;
	                        break;
	                    }
	                    else {
	                        var itemMatchLength = stringExtensions_1.getMatchLength(itemValue, value, false);
	                        if ((itemMatchLength > 0) && ((matchLength === 0) || (itemMatchLength > matchLength))) {
	                            match = item;
	                            matchLength = itemMatchLength;
	                        }
	                    }
	                }
	            }
	            if (!match) {
	                match = this.listItems[0];
	            }
	            // If we found an exact match or we're setting focus to the one we found set it active.
	            this.setActiveItem(match, itemFocus || (matchLength === -1));
	            // Bring the matched item into view.
	            htmlExtensions_1.scrollElementIntoView(match, this.menu);
	            if (itemFocus) {
	                match.focus();
	            }
	        };
	        /**
	        * @name - handleInputKeydown
	        * @description - Handler for keydown events for the menu.
	        * @private
	        * @param {number} keyCode - the key code of the key that was pressed.
	        * @returns {void}
	        */
	        Combo.prototype.handleInputKeydown = function (keyCode) {
	            this.activeValue = this.input.value;
	            switch (keyCode) {
	                case 9 /* Tab */:
	                case 13 /* Enter */:
	                    this.hideMenu();
	                    var activeItemText = this.getActiveText();
	                    if (this.activeValue !== activeItemText) {
	                        if (htmlExtensions_1.hasClass(this.activeItem, Combo.activeClassName)) {
	                            this.activeValue = this.input.value = activeItemText;
	                        }
	                        this.onSelectionChanged();
	                    }
	                    break;
	                case 40 /* ArrowDown */:
	                    if (!this.isMenuVisible()) {
	                        this.showMenu(true);
	                    }
	                    else if (this.activeItem) {
	                        this.setActiveItem(this.activeItem);
	                        this.activeItem.focus();
	                    }
	                    break;
	                case 27 /* Escape */:
	                    this.hideMenu();
	                    break;
	                default:
	            }
	        };
	        /**
	        * @name - handleInputKeyup
	        * @description - Handler for keyup events for the menu.
	        * @private
	        * @param {number} keyCode - the key code of the key that was pressed.
	        * @returns {void}
	        */
	        Combo.prototype.handleInputKeyup = function (keyCode) {
	            if (stringExtensions_1.isNullOrWhiteSpace(this.input.value) && (keyCode !== 40 /* ArrowDown */)) {
	                this.hideMenu();
	            }
	            else if (this.input.value !== this.activeValue) {
	                if (!this.isMenuVisible()) {
	                    this.showMenu(true, false);
	                }
	                else {
	                    this.matchItem();
	                }
	            }
	        };
	        /**
	        * @name - handleInputOrButtonClick
	        * @description - Handler for click events for the input and button.
	        * @private
	        * @returns {void}
	        */
	        Combo.prototype.handleInputOrButtonClick = function () {
	            if (!this.isMenuVisible()) {
	                this.showMenu(true, false);
	            }
	            else {
	                this.hideMenu();
	                this.input.focus();
	            }
	        };
	        /**
	        * @name - handleButtonKeydown
	        * @description - Handler for keydown events for the button.
	        * @private
	        * @param {number} keyCode - the key code of the key that was pressed.
	        * @returns {void}
	        */
	        Combo.prototype.handleButtonKeydown = function (keyCode) {
	            switch (keyCode) {
	                case 40 /* ArrowDown */:
	                case 32 /* Space */:
	                case 13 /* Enter */: {
	                    this.showMenu(true);
	                    break;
	                }
	                case 38 /* ArrowUp */:
	                case 27 /* Escape */: {
	                    this.hideMenu();
	                    break;
	                }
	            }
	        };
	        /**
	        * @name - handleMenuKeydown
	        * @description - Handler for a keydown event on the menu.
	        * @private
	        * @param {HTMLElement} target - the target element of the keyboard event
	        * @param {number} keyPressed - the keycode of the keyboard event
	        * @returns {void}
	        */
	        Combo.prototype.handleMenuKeydown = function (target, keyPressed) {
	            switch (keyPressed) {
	                case 32 /* Space */:
	                case 9 /* Tab */:
	                case 13 /* Enter */:
	                    this.setActiveItemAndHideMenu(this.activeItem, keyPressed !== 9 /* Tab */);
	                    break;
	                case 27 /* Escape */:
	                    this.input.focus();
	                    this.hideMenu();
	                    this.matchItem();
	                    break;
	                case 38 /* ArrowUp */:
	                    this.handleMenuArrowKey(true, target);
	                    break;
	                case 40 /* ArrowDown */:
	                    this.handleMenuArrowKey(false, target);
	                    break;
	            }
	        };
	        /**
	        * @name - handleMenuArrowKey
	        * @description - Handler for an arrow key on the menu.
	        * @private
	        * @param {boolean} isUpArrow - true means the arrow key pressed was the up arrow, false means the down arrow key was pressed
	        * @param {HTMLElement} currentItem - the item currently focused on
	        * @returns {void}
	        */
	        Combo.prototype.handleMenuArrowKey = function (isUpArrow, currentItem) {
	            var currentItemIndex = this.listItems.indexOf(currentItem);
	            if (currentItemIndex === -1) {
	                return;
	            }
	            currentItemIndex += isUpArrow ? -1 : 1;
	            if (currentItemIndex < 0) {
	                currentItemIndex = this.listItems.length - 1;
	            }
	            else if (currentItemIndex >= this.listItems.length) {
	                currentItemIndex = 0;
	            }
	            var target = this.listItems[currentItemIndex];
	            this.setActiveItem(target);
	            target.focus();
	        };
	        /**
	        * @name - handleMenuClick
	        * @description - Handler for a click event on the menu.
	        * @private
	        * @param {HTMLElement} target - the target element of the keyboard event
	        * @returns {void}
	        */
	        Combo.prototype.handleMenuClick = function (target) {
	            this.setActiveItemAndHideMenu(target);
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        Combo.init = function (input) {
	            utility_1.apiDeprecated('Combo.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Combo,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - Selector to use to find combo components in the document.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Combo.selector = '.c-combo';
	        /**
	        * @name - ariaHidden
	        * @description - This attribute to set to true/false to indicate whether or not the autosuggest results are hidden.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Combo.ariaHidden = 'aria-hidden';
	        /**
	        * @name - ariaExpanded
	        * @description - This attribute to set to true/false to indicate whether or not the autosuggest results are expanded.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Combo.ariaExpanded = 'aria-expanded';
	        /**
	        * @name - role
	        * @description - Selector to verify the role of the combo.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Combo.role = 'role';
	        /**
	        * @name - activeClassName
	        * @description - The class used to designate the active item.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Combo.activeClassName = 'active';
	        /**
	        * @name - maxDisplayedItems
	        * @description - The default maximum number of items to show in the menu without scrolling, any additional items will scroll.
	        * @static
	        * @private
	        * @type {number}
	        */
	        Combo.defaultMaxDisplayedItems = 5;
	        return Combo;
	    }(publisher_1.Publisher));
	    exports.Combo = Combo;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="compareChart"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	     * @export
	     * @class - CompareChart
	     * @description - The compare chart behavior ensures that rows between columns are the same height.
	     * @extends {ObservableComponent}
	     */
	    var CompareChart = (function (_super) {
	        __extends(CompareChart, _super);
	        /**
	         * @name - constructor
	         * @description - Creates an instance of CompareChart
	         * @public
	         * @param {HTMLElement} element - the native element to attach the compare chart behavior to
	         */
	        function CompareChart(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	             * @name - needToPoll
	             * @description - when true, we need to poll the compare chart for height changes
	             * @private
	             * @type {boolean}
	             */
	            this.needToPoll = false;
	            /**
	             * @name - checkPollingCriteria
	             * @description - checks whether or not polling is required
	             * @private
	             * @returns {boolean} - true indicates criteria is met and polling is no longer required; else false
	             */
	            this.checkPollingCriteria = function () {
	                _this.needToPoll = false;
	                _this.checkForDeferredContent();
	                _this.setRowHeightsAcrossAllColumns();
	                // return inverse of needToPoll -- if needToPoll is true, criteria is not met and should return false
	                return !_this.needToPoll;
	            };
	            /**
	             * @name - getMaxRowsFromAllColumns
	             * @description - Get the max number of rows that exist in one column, from all columns
	             * @private
	             * @returns {number} - The maximum number of rows found in any of the columns
	             */
	            this.getMaxRowsFromAllColumns = function () {
	                // determine the max number of rows in any of the columns on the page
	                var maxRows = 0;
	                for (var _i = 0, _a = _this.columns; _i < _a.length; _i++) {
	                    var column = _a[_i];
	                    var rows = htmlExtensions_1.selectElements('.f-row', column);
	                    if (rows.length > maxRows) {
	                        maxRows = rows.length;
	                    }
	                    _this.columnRows.push(rows);
	                }
	                return maxRows;
	            };
	            /**
	             * @name - recalculate
	             * @description - recalculates the compare chart and initializes polling if necessary
	             * @private
	             * @returns {void}
	             */
	            this.recalculate = function () {
	                _this.needToPoll = false;
	                _this.checkForDeferredContent();
	                _this.setRowHeightsAcrossAllColumns();
	                if (_this.needToPoll) {
	                    utility_1.poll(_this.checkPollingCriteria, 250, -1);
	                }
	            };
	            /**
	             * @name - setRowHeightsAcrossAllColumns
	             * @description - Set the row height to the same across all rows of the same index in each column
	             * @private
	             * @returns {void}
	             */
	            this.setRowHeightsAcrossAllColumns = function () {
	                // Ensure the element storage arrays are empty, for resize events.
	                _this.columns = htmlExtensions_1.selectElements('.f-column', _this.element);
	                _this.columnRows = [];
	                var maxRows = _this.getMaxRowsFromAllColumns();
	                // Make the rows in each column the same height.
	                for (var rowIndex = 0; rowIndex < maxRows; rowIndex++) {
	                    var rowHeightToSet = _this.getMaxRowHeight(rowIndex);
	                    // if max row height is zero, something went wrong -- continue but poll to see if height changes
	                    if (rowHeightToSet === 0 && !_this.needToPoll) {
	                        _this.needToPoll = true;
	                    }
	                    // For every column, get same row for each column, and set the height
	                    for (var columnIndex in _this.columns) {
	                        if (_this.columnRows[columnIndex][rowIndex] !== undefined) {
	                            _this.columnRows[columnIndex][rowIndex].style.height = rowHeightToSet.toString() + 'px';
	                        }
	                    }
	                }
	            };
	            /**
	             * @name - getMaxRowHeight
	             * @description - Find the max height of a row between multiple columns
	             * @private
	             * @param {number} rowIndex - The row index to get the heights for in each column
	             * @returns {number} - the max height of a row (in pixels)
	             */
	            this.getMaxRowHeight = function (rowIndex) {
	                var maxRowHeight = 0;
	                for (var columnIndex in _this.columns) {
	                    // Get the numerical value of the height as a float
	                    if (_this.columnRows[columnIndex][rowIndex] !== undefined) {
	                        // Reset all rows to 'auto' height, prior to getting the actual height.
	                        _this.columnRows[columnIndex][rowIndex].style.height = 'auto';
	                        var rowHeight = utility_1.getDimensions(_this.columnRows[columnIndex][rowIndex]).height;
	                        if (rowHeight > maxRowHeight) {
	                            maxRowHeight = rowHeight;
	                        }
	                    }
	                }
	                return maxRowHeight;
	            };
	            /**
	             * @name - checkForDeferredContent
	             * @description - method which will check for deferred content to see if it's all loaded
	             * @private
	             * @returns {void}
	             * @todo - 9145683 remove deferred image check from compareChart.ts once OneRF adds expected DIV around images
	             */
	            this.checkForDeferredContent = function () {
	                // all deferred content checks should be added here
	                var deferredContentNotReady = false;
	                var images = htmlExtensions_1.selectElements('img', _this.element);
	                for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
	                    var image = images_1[_i];
	                    if (image.height < 2) {
	                        deferredContentNotReady = true;
	                        break;
	                    }
	                }
	                _this.needToPoll = deferredContentNotReady;
	            };
	            if (!element) {
	                return;
	            }
	            this.update();
	        }
	        /**
	         * @name - update
	         * @description - Updates the component if there is any change to its underlying DOM.
	         * @protected
	         * @returns {void}
	         */
	        CompareChart.prototype.update = function () {
	            this.recalculate();
	            // Add debounced event to update on resize
	            this.resizeDebouncedEventHandler = htmlExtensions_1.addDebouncedEvent(window, htmlExtensions_1.eventTypes.resize, this.recalculate);
	        };
	        /**
	         * @name - teardown
	         * @description - Called by ObservableComponent when the component needs to clean up its state.
	         *                Components should remove any event bindings they've added to ensure they are
	         *                not duplicated during repeated update/teardown cycles.
	         * @protected
	         * @returns {void}
	         */
	        CompareChart.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.resize, this.resizeDebouncedEventHandler);
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        CompareChart.init = function (input) {
	            utility_1.apiDeprecated('CompareChart.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: CompareChart,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	         * @name - selector
	         * @description - compare chart element class selectors
	         * @static
	         * @type {string}
	         */
	        CompareChart.selector = '.c-compare-chart, .m-compare-chart';
	        return CompareChart;
	    }(observableComponent_1.ObservableComponent));
	    exports.CompareChart = CompareChart;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="contentToggle"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - ContentToggle
	    * @classdesc - The ContentToggle component
	    *              Show more/less behavior for paragraph and expand/collapse link.
	    * @export
	    */
	    var ContentToggle = (function (_super) {
	        __extends(ContentToggle, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the ContentToggle component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the ContentToggle behavior to.
	        */
	        function ContentToggle(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - clickHandler
	            * @description - ContentToggle more/less event handler.
	            * @private
	            * @returns {void}
	            */
	            this.clickHandler = function () {
	                _this.toggleContent();
	            };
	            /**
	            * @name - onResized
	            * @description - Handles the window resize event.
	            * @private
	            * @returns {void}
	            */
	            this.onResized = function () {
	                if (_this.noToggle()) {
	                    htmlExtensions_1.css(_this.trigger, 'display', 'none');
	                    return;
	                }
	                htmlExtensions_1.css(_this.trigger, 'display', _this.triggerDisplayStyle);
	                _this.toggleContent(_this.target.getAttribute(ContentToggle.dataExpanded) === 'true');
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        ContentToggle.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            this.target = htmlExtensions_1.selectFirstElement(ContentToggle.targetSelector, this.element);
	            if (!this.target) {
	                // Keeping original element detection for backwards compatibility
	                this.target = htmlExtensions_1.selectFirstElement('p', this.element);
	            }
	            this.trigger = htmlExtensions_1.selectFirstElement('button', this.element);
	            if (!this.target || !this.trigger) {
	                return;
	            }
	            this.lineHeight = this.calculateLineHeight();
	            // Read the show value attribute allowing zero to be a valid value. (ie. do not use default if 0)
	            var showValue = parseInt(this.trigger.getAttribute(ContentToggle.dataShowAttribute), 10);
	            this.show = (isNaN(showValue) || (showValue < 0)) ? ContentToggle.defaultShow : showValue;
	            ContentToggle.moreString = this.trigger.getAttribute(ContentToggle.dataMoreAttributeValue);
	            ContentToggle.lessString = this.trigger.getAttribute(ContentToggle.dataLessAttributeValue);
	            // Save the trigger's initial display style value in case we need to restore it later.
	            this.triggerDisplayStyle = htmlExtensions_1.css(this.trigger, 'display');
	            this.onResized();
	            htmlExtensions_1.addEvent(this.trigger, htmlExtensions_1.eventTypes.click, this.clickHandler);
	            this.resizeThrottledEventHandler = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.resize, this.onResized);
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        ContentToggle.prototype.teardown = function () {
	            // clean up throttled event handlers.
	            htmlExtensions_1.removeEvent(this.trigger, htmlExtensions_1.eventTypes.click, this.clickHandler);
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.resize, this.resizeThrottledEventHandler);
	            // Reset non static members
	            this.target = null;
	            this.trigger = null;
	            this.show = null;
	            this.lineHeight = null;
	        };
	        /**
	        * @name - toggleContent
	        * @description - Toggle Expand Content behavior.
	        * @private
	        * @param {boolean} [toggleOpen=(!(this.target.getAttribute(ContentToggle.dataExpanded) === 'true'))]
	        * @returns {void}
	        */
	        ContentToggle.prototype.toggleContent = function (toggleOpen) {
	            if (toggleOpen === void 0) { toggleOpen = (!(this.target.getAttribute(ContentToggle.dataExpanded) === 'true')); }
	            this.target.setAttribute(ContentToggle.dataExpanded, toggleOpen.toString());
	            this.trigger.innerText = toggleOpen ? ContentToggle.lessString : ContentToggle.moreString;
	            if (toggleOpen) {
	                htmlExtensions_1.css(this.target, 'max-height', '');
	            }
	            else {
	                htmlExtensions_1.css(this.target, 'max-height', (this.lineHeight * this.show) + 'px');
	            }
	        };
	        /**
	        * @name - noToggle
	        * @description - Remove Toggle Behavior.
	        * @private
	        * @returns {boolean}
	        */
	        ContentToggle.prototype.noToggle = function () {
	            // Make sure we remove maxHeight from the target so we get its true target height
	            // when we call getClientRect on it. Otherwise if we've earlier collapsed it we'll
	            // only get the maxHeight we limited it to at that time which is not what we want.
	            htmlExtensions_1.css(this.target, 'max-height', '');
	            var targetRect = htmlExtensions_1.getClientRect(this.target);
	            var targetPadding = (parseInt(htmlExtensions_1.css(this.target, 'padding-top'), 10) || 0) +
	                (parseInt(htmlExtensions_1.css(this.target, 'padding-bottom'), 10) || 0);
	            return (targetRect.height - targetPadding) <= (this.lineHeight * this.show);
	        };
	        ;
	        /**
	        * @name - calculateLineHeight
	        * @description - Calculate line height.
	        * @private
	        * @returns {number}
	        */
	        ContentToggle.prototype.calculateLineHeight = function () {
	            // measure line-height by adding two new lines and measure the distance
	            // between the two new lines. Adding one line can cause an incorrect
	            // measurement because of the possibility of padding/margins.
	            var clone = this.target.cloneNode();
	            clone.innerHTML = '<br>';
	            this.target.appendChild(clone);
	            var singleLineHeight = clone.offsetHeight;
	            clone.innerHTML = '<br><br>';
	            var doubleLineHeight = clone.offsetHeight;
	            this.target.removeChild(clone);
	            this.ignoreNextDOMChange = true;
	            return doubleLineHeight - singleLineHeight;
	        };
	        ;
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        ContentToggle.init = function (input) {
	            utility_1.apiDeprecated('ContentToggle.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: ContentToggle,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - selector to use to find ContentToggle components in the document.
	        * @static
	        * @public
	        * @type {string}
	        */
	        ContentToggle.selector = '.c-content-toggle';
	        /**
	        * @name - dataExpanded
	        * @description - The data-f-expanded attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        ContentToggle.dataExpanded = 'data-f-expanded';
	        /**
	        * @name - targetSelector
	        * @description - The target selector.
	        * @static
	        * @private
	        * @type {string}
	        */
	        ContentToggle.targetSelector = '[data-f-expanded]';
	        /**
	        * @name - dataMoreAttributeValue
	        * @description - The data-f-more attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        ContentToggle.dataMoreAttributeValue = 'data-f-more';
	        /**
	        * @name - dataLessAttributeValue
	        * @description - The data-f-less attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        ContentToggle.dataLessAttributeValue = 'data-f-less';
	        /**
	        * @name - dataShowAttribute
	        * @description - The data-f-show attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        ContentToggle.dataShowAttribute = 'data-f-show';
	        /**
	        * @name - defaultShow
	        * @description - The default number of lines to show in collapsed view.
	        * @static
	        * @private
	        * @type {string}
	        */
	        ContentToggle.defaultShow = 3;
	        return ContentToggle;
	    }(observableComponent_1.ObservableComponent));
	    exports.ContentToggle = ContentToggle;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name='dateTimePicker'/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(5), __webpack_require__(10), __webpack_require__(6), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1, stringExtensions_1, utility_1, publisher_1, componentFactory_1) {
	    "use strict";
	    /**
	    * @class - DateTimePicker
	    * @classdesc - The Date Time Picker component
	    * @export
	    */
	    var DateTimePicker = (function (_super) {
	        __extends(DateTimePicker, _super);
	        /**
	         * @description - Creates an instance of DateTimePicker.
	         * @param {HTMLElement} dateTimePicker  - the Date Time Picker DOM element
	         */
	        function DateTimePicker(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	             * @name - days
	             * @description - Each item in the array corresponds to the number of days in the month.
	             *                For example, days[1] = 31 which corresponds to January having 31 days.
	             *                Index 0 has zero days since this.months[0] has a fake entry.
	             * @private
	             * @type {number[]}
	             */
	            this.days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	            /**
	             * @name - ariaSelected
	             * @description - The aria-selected element attribute
	             * @private
	             * @type {string}
	             */
	            this.ariaSelected = 'aria-selected';
	            /**
	             * @name - ariaLabel
	             * @description - The aria-label element attribute
	             * @private
	             * @type {string}
	             */
	            this.ariaLabel = 'aria-label';
	            /**
	             * @name - ariaHidden
	             * @description - The aria-hidden element attribute
	             * @private
	             * @type {string}
	             */
	            this.ariaHidden = 'aria-hidden';
	            /**
	             * @name - dateTimePickerDataAttribute
	             * @description - The Data element attribute for DateTimePicker
	             * @private
	             * @type {string}
	             */
	            this.dateTimePickerDataAttribute = 'data-date-time-picker';
	            /**
	             * @name - amPmSelection
	             * @description - The list of possible values for AM/PM
	             * @private
	             */
	            this.amPmSelection = ['AM', 'PM'];
	            /**
	             * @name - numberOfElementsThatAppearInColumn
	             * @description - The number of elements that appear above or below the active item
	             * @private
	             * @type {number}
	             */
	            this.numberOfElementsThatAppearInColumn = 5;
	            /**
	             * @name - pickerIsOpen
	             * @description - Open state of the picker
	             * @private
	             * @type {string}
	             */
	            this.pickerIsOpen = false;
	            /**
	             * @name - handleKeyDown
	             * @description - Handle the keydown event
	             *
	             * @protected
	             * @param {KeyboardEvent} event - The event object
	             * @returns {Void}
	             */
	            this.handleKeyDown = function (event) {
	                _this.ignoreNextDOMChange = true;
	                event = htmlExtensions_1.getEvent(event);
	                var keyCode = utility_1.getKeyCode(event);
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                var nextColumn;
	                var previousColumn;
	                var element;
	                switch (keyCode) {
	                    case 13 /* Enter */:
	                        if (_this.pickerIsOpen) {
	                            _this.updatePicker();
	                            _this.closePicker();
	                        }
	                        else {
	                            _this.openPicker(target, false);
	                        }
	                        break;
	                    case 27 /* Escape */:
	                        _this.closePicker();
	                        break;
	                    case 37 /* ArrowLeft */:
	                        if (!_this.activeColumn) {
	                            break;
	                        }
	                        previousColumn = _this.activeColumn.previousElementSibling;
	                        if (!previousColumn) {
	                            break;
	                        }
	                        element = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', previousColumn);
	                        if (element) {
	                            _this.activeColumn = previousColumn;
	                            element.focus();
	                        }
	                        return;
	                    case 39 /* ArrowRight */:
	                        if (!_this.activeColumn) {
	                            break;
	                        }
	                        nextColumn = _this.activeColumn.nextElementSibling;
	                        if (!nextColumn) {
	                            break;
	                        }
	                        if (_this.activeColumn.nextElementSibling !== null) {
	                            element = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', nextColumn);
	                            if (element) {
	                                _this.activeColumn = nextColumn;
	                                element.focus();
	                            }
	                        }
	                        return;
	                    case 38 /* ArrowUp */:
	                        htmlExtensions_1.preventDefault(event);
	                        _this.scrollColumn(_this.activeColumn, DateTimePicker.scrollUpValue);
	                        return;
	                    case 40 /* ArrowDown */:
	                        htmlExtensions_1.preventDefault(event);
	                        _this.scrollColumn(_this.activeColumn, DateTimePicker.scrollDownValue);
	                        return;
	                    case 9 /* Tab */:
	                        if (!_this.pickerIsOpen) {
	                            break;
	                        }
	                        nextColumn = event.shiftKey
	                            ? _this.activeColumn.previousElementSibling
	                            : _this.activeColumn.nextElementSibling;
	                        if (!nextColumn) {
	                            break;
	                        }
	                        _this.activeColumn = nextColumn;
	                        break;
	                }
	            };
	            /**
	             * @name - handleMouseClick
	             * @description - Handle mouse down event
	             *
	             * @protected
	             * @param {MouseEvent} event - The click event
	             * @returns {void}
	             */
	            this.handleMouseClick = function (event) {
	                _this.ignoreNextDOMChange = true;
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                // Store a reference to the target to validate against later. We
	                // need to do this because we can't verify where click events are
	                // actually coming from because we're removing and adding elements to
	                // the DOM all the time.
	                _this.lastClickedElement = target;
	                if (!_this.pickerIsOpen) {
	                    // If picker is closed, make sure the click event is on a button
	                    // and then open the picker
	                    if (_this.columnTriggerButtons.indexOf(target) === -1) {
	                        target = _this.columnTriggerButtons[0];
	                    }
	                    _this.openPicker(target, true);
	                    return;
	                }
	                if (target.nodeName === 'LI') {
	                    if (!target.parentElement || !target.parentElement.parentElement) {
	                        return;
	                    }
	                    var columnType = target.parentElement.parentElement.getAttribute(_this.dateTimePickerDataAttribute);
	                    var ariaLabel = target.getAttribute(_this.ariaLabel);
	                    if (columnType === 'ampm') {
	                        _this.selectAmPm(ariaLabel);
	                    }
	                    else {
	                        var targetColumn = target.parentElement;
	                        htmlExtensions_1.removeInnerHtml(targetColumn);
	                        var column = _this.getDateTimePickerElement(columnType, 'ul');
	                        _this.buildSelector(column, columnType, ariaLabel);
	                        _this.recalculateDaysInMonth(targetColumn);
	                    }
	                }
	            };
	            /**
	             * @name - handleOutsideClick
	             * @description - Handles click outside of datetime picker
	             *
	             * @protected
	             * @param {Event} event - The event object
	             * @returns {Void}
	             */
	            this.handleOutsideClick = function (event) {
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                // If click comes from inside picker, don't close the picker
	                if (!htmlExtensions_1.isDescendent(_this.element, target) && _this.lastClickedElement !== target) {
	                    _this.updatePicker();
	                    _this.closePicker();
	                }
	            };
	            /**
	             * @name - handleApplyClicked
	             * @description - Handles click event from apply button
	             *
	             * @protected
	             * @param {Event} event - The event object
	             * @returns {Void}
	             */
	            this.handleApplyClicked = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                // TODO: 9049461 - Remove stopPropagation
	                htmlExtensions_1.stopPropagation(event);
	                _this.updatePicker();
	                _this.closePicker();
	            };
	            /**
	             * @name - handleCancelClicked
	             * @description - Handles click event from cancel button
	             *
	             * @protected
	             * @param {Event} event - The event object
	             * @returns {Void}
	             */
	            this.handleCancelClicked = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                // TODO: 9049461 - Remove stopPropagation
	                htmlExtensions_1.stopPropagation(event);
	                _this.closePicker();
	            };
	            /**
	             * @name - handleScrollButtons
	             * @description - Handles usage of scroll buttons
	             *
	             * @protected
	             * @param {Event} event - The event object
	             * @returns {Void}
	             */
	            this.handleScrollButtons = function (event) {
	                _this.ignoreNextDOMChange = true;
	                event = htmlExtensions_1.getEvent(event);
	                // TODO: 9049461 - Remove stopPropagation
	                htmlExtensions_1.stopPropagation(event);
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                var column = target.parentElement;
	                var direction = target.getAttribute(_this.dateTimePickerDataAttribute);
	                // Control repeated scrolling action
	                if (event.type === 'mouseenter') {
	                    _this.scrollDelay = setTimeout(function () {
	                        _this.scrollInterval = null;
	                        clearTimeout(_this.scrollDelay);
	                        _this.scrollDelay = null;
	                        _this.scrollInterval = setInterval(function () {
	                            _this.scrollColumn(column, direction);
	                        }, 300);
	                    }, 150);
	                    return;
	                }
	                else if (event.type === 'mouseleave') {
	                    clearTimeout(_this.scrollDelay);
	                    clearInterval(_this.scrollInterval);
	                    _this.scrollInterval = null;
	                    _this.recalculateDaysInMonth(target);
	                    return;
	                }
	                // Scroll Column
	                if (direction !== null) {
	                    _this.scrollColumn(column, direction);
	                }
	            };
	            /**
	             * @name - handleMouseScroll
	             * @description - Handles user scrolling
	             *
	             * @protected
	             * @param {Event} any - The event object. Should be type Event but typescript
	                                    was barfing on several properties.
	             * @returns {Void}
	             */
	            this.handleMouseScroll = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                htmlExtensions_1.preventDefault(event);
	                var deltaY = event.deltaY || event.wheelDelta || -(event.detail), direction = deltaY < 0 ? DateTimePicker.scrollDownValue : DateTimePicker.scrollUpValue;
	                _this.scrollColumn(event.currentTarget, direction);
	            };
	            /**
	             * @name - scrollColumn
	             * @description - Scroll the given column element by creating the next element in the list,
	             *                selecting the element now in the center of the list,
	             *                and destroying the last element that is falling off the list.
	             * @param {HTMLElement} target - The target column
	             * @param {string} ariaButton - The button's aria-label attribute value
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.scrollColumn = function (column, direction) {
	                if (column === null) {
	                    return;
	                }
	                _this.ignoreNextDOMChange = true;
	                var listItem = htmlExtensions_1.selectFirstElement('ul li', column);
	                var list = htmlExtensions_1.selectFirstElement('ul', column);
	                // TODO: Task #8645822: DateTimePicker - Type the date or time content array (don't use type 'any[]')
	                var newText;
	                var columnType = column.getAttribute(_this.dateTimePickerDataAttribute);
	                if (columnType === 'ampm') {
	                    if (direction === DateTimePicker.scrollUpValue) {
	                        _this.selectAmPm('AM');
	                    }
	                    else if (direction === DateTimePicker.scrollDownValue) {
	                        _this.selectAmPm('PM');
	                    }
	                    return;
	                }
	                if (direction === DateTimePicker.scrollUpValue) {
	                    newText = _this.newContent(column, 'up');
	                    _this.prependChildren(listItem, newText[2]);
	                    _this.isLastInList(list, newText[0], 'up', newText[1]);
	                    _this.removeChildren(column, 'bottom');
	                }
	                else if (direction === DateTimePicker.scrollDownValue) {
	                    _this.removeChildren(column, 'top');
	                    newText = _this.newContent(column, 'down');
	                    _this.appendChildren(list, newText[2]);
	                    _this.isLastInList(list, newText[0], 'down', newText[1]);
	                }
	            };
	            /**
	             * @name - buildSelector
	             * @description - Builds the HTML for the given selector (Month selector, day selector, year selector, hour selector, etc.)
	             * @param {HTMLElement} column - The column element
	             * @param {string} elementType - the column element type
	             * @param {string} selectedByClick - the item in the column clicked on by the user (may be null if user did not act)
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.buildSelector = function (column, elementType, selectedByClick) {
	                var selected = selectedByClick === null
	                    ? (_this.getDateTimePickerElement(elementType)).getAttribute(_this.activeValueStorage)
	                    : selectedByClick;
	                switch (elementType) {
	                    case 'month':
	                        var monthPosition = _this.months.indexOf(selected);
	                        _this.buildNodes(monthPosition, column, 12, true, false);
	                        _this.setFocus(column);
	                        break;
	                    case 'day':
	                        var currentMonth = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', _this.element).getAttribute(_this.ariaLabel);
	                        var monthIndex = _this.months.indexOf(currentMonth);
	                        var daysInMonth = _this.monthInfo[monthIndex].days;
	                        _this.buildNodes(parseInt(selected, 0), column, daysInMonth, false, false);
	                        _this.setFocus(column);
	                        break;
	                    case 'year':
	                        _this.buildNodes(parseInt(selected, 0), column, null, false, true);
	                        _this.setFocus(column);
	                        break;
	                    case 'hour':
	                        _this.buildNodes(parseInt(selected, 0), column, 12, false, false);
	                        _this.setFocus(column);
	                        break;
	                    case 'minute':
	                    case 'minute24':
	                        _this.buildNodes(parseInt(selected, 0), column, 60, false, true);
	                        _this.setFocus(column);
	                        break;
	                    case 'ampm':
	                        var amPmPosition = _this.amPmSelection.indexOf(selected);
	                        _this.buildAmPm(column);
	                        break;
	                    case 'hour24':
	                        _this.buildNodes(parseInt(selected, 0), column, 24, false, true);
	                        _this.setFocus(column);
	                        break;
	                }
	            };
	            /**
	             * @name - buildNodes
	             * @description - Build the individual list item nodes in the selector element
	             * @param {number} selectedPositon - the index of the selected item
	             * @param {HTMLElement} column - the column in which the node being built is located
	             * @param {number} totalElements - the number of elements in the column
	             * @param {boolean} isMonthColumn - true if the column is the month column, else false
	             * @param {boolean} zeroBased - true if the element is a zero-based item
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.buildNodes = function (selectedPositon, column, totalElements, isMonthColumn, zeroBased) {
	                var lastElement = zeroBased ? totalElements - 1 : totalElements;
	                for (var index = selectedPositon - _this.numberOfElementsThatAppearInColumn; index < selectedPositon + _this.numberOfElementsThatAppearInColumn + 1; index++) {
	                    var positionNumber = void 0;
	                    if ((index === 0 && zeroBased) || (index === totalElements && zeroBased)) {
	                        positionNumber = 0;
	                    }
	                    else {
	                        var signChanger = index < 1
	                            ? 1
	                            : index > totalElements
	                                ? -1
	                                : 0;
	                        positionNumber = index + (totalElements * signChanger);
	                    }
	                    var innerContent = isMonthColumn ? _this.monthInfo[positionNumber].name : positionNumber.toString();
	                    _this.appendChildren(column, innerContent);
	                    if (index === selectedPositon) {
	                        column.lastElementChild.setAttribute(_this.ariaSelected, 'true');
	                        column.lastElementChild.setAttribute('tabindex', '0');
	                    }
	                    else {
	                        column.lastElementChild.setAttribute(_this.ariaSelected, 'false');
	                    }
	                    column.lastElementChild.setAttribute('role', 'option');
	                    if (lastElement === positionNumber) {
	                        htmlExtensions_1.addClass(column.lastElementChild, 'f-js-last');
	                    }
	                }
	            };
	            /**
	             * @name - appendChildren
	             * @description - Create a new list item with a given string for the innerHTML and append it
	             *                to the given element
	             * @param {HTMLElement} element - the element the children should be appended to
	             * @param {string} innerContent - the content that should be added to the children
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.appendChildren = function (element, innerContent) {
	                _this.insertChildren(element, innerContent, true);
	            };
	            /**
	             * @name - prependChildren
	             * @description - Create a new list item with a given string for the innerHTML and prepend it
	             *                to the given element
	             * @param {HTMLElement} element - the element the children should be prepended to
	             * @param {string} innerContent - the content that should be added to the children
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.prependChildren = function (element, innerContent) {
	                _this.insertChildren(element, innerContent, false);
	            };
	            /**
	             * @name - insertChildren
	             * @description - Create a new list item with a given string for the innerHTML and either
	                              prepend or append it to the given element
	             * @param {HTMLElement} element - the element
	             * @param {string} innerContent - the content that should be added to the children
	             * @param {string} append - if true, append the children to the element
	                                        if false, prepend the child to the element
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.insertChildren = function (element, innerContent, append) {
	                var newElement = document.createElement('li');
	                newElement.appendChild(document.createTextNode(innerContent));
	                newElement.setAttribute(_this.ariaLabel, innerContent);
	                append ? element.appendChild(newElement) : element.parentElement.insertBefore(newElement, element);
	            };
	            /**
	             * @name - buildAmPm
	             * @description - Build the AM/PM selector
	             * @param {HTMLElement} column - the AM/PM column element
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.buildAmPm = function (column) {
	                _this.appendChildren(column, 'AM');
	                column.lastElementChild.setAttribute(_this.ariaSelected, 'true');
	                column.lastElementChild.setAttribute('tabindex', '0');
	                _this.appendChildren(column, 'PM');
	            };
	            /**
	             * @name - selectAmPm
	             * @description - Select either AM or PM from the AM/PM Selector
	             * @param {string} selected - the value selected (either 'AM' or 'PM')
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.selectAmPm = function (selected) {
	                if (!selected) {
	                    selected = (_this.getDateTimePickerElement('ampm')).getAttribute(_this.activeValueStorage).toUpperCase();
	                }
	                var checkedElement = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', _this.amPmColumn);
	                if (checkedElement) {
	                    checkedElement.removeAttribute('tabindex');
	                    checkedElement.removeAttribute(_this.ariaSelected);
	                }
	                var addOrRemoveClass = selected === 'AM' ? htmlExtensions_1.removeClass : htmlExtensions_1.addClass;
	                addOrRemoveClass.call(_this, _this.amPmColumn, 'f-js-pm');
	                var amPmElement = htmlExtensions_1.selectFirstElement('[aria-label="' + selected + '"]', _this.amPmColumn);
	                if (amPmElement) {
	                    amPmElement.setAttribute(_this.ariaSelected, 'true');
	                    amPmElement.setAttribute('tabindex', '0');
	                    amPmElement.focus();
	                }
	            };
	            // TODO: Task #8645822: DateTimePicker - Type the date or time content array (don't use type 'any[]')
	            /**
	             * @name - newContent
	             * @description - Determines the new content for the given element (which will be a month, a day, an hour, etc.)
	             * @param {HTMLElement} element - the element that needs new content
	             * @param {string} direction - the direction the user is scrolling
	             *
	             * @private
	             * @returns {any[]} - A collection that indicates the values.  The collection changes depending on the element type.
	             *                    For example, for month it might be ['9' '12' 'September']
	             *                    to indicate that the month is 9 of 12 and named 'September.'
	             */
	            this.newContent = function (element, direction) {
	                var currentlySelected = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', element).getAttribute(_this.ariaLabel);
	                var column = element.getAttribute(_this.dateTimePickerDataAttribute);
	                // TODO: Task #8645822: DateTimePicker - Type the date or time content array (don't use type 'any[]')
	                var result = [];
	                var nextCurrent = null;
	                var stagedPosition = null;
	                switch (column) {
	                    case 'month':
	                        _this.removeAriaSelected(_this.monthColumn);
	                        var monthPosition = _this.months.indexOf(currentlySelected);
	                        nextCurrent = _this.nextCurrent(monthPosition, direction, _this.totalMonths, false);
	                        _this.setAriaSelected(_this.monthColumn, _this.months[nextCurrent]);
	                        stagedPosition = _this.stagedElement(_this.monthColumn, nextCurrent, direction, _this.totalMonths, false);
	                        result[0] = stagedPosition[1];
	                        result[1] = _this.totalMonths;
	                        result[2] = _this.months[stagedPosition[0]];
	                        return result;
	                    case 'day':
	                        var currentMonthElement = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', _this.monthColumn);
	                        if (!currentMonthElement) {
	                            return;
	                        }
	                        var currentMonth = currentMonthElement.getAttribute(_this.ariaLabel);
	                        if (!currentMonth) {
	                            return;
	                        }
	                        var monthIndex = _this.months.indexOf(currentMonth);
	                        var totalDays = _this.monthInfo[monthIndex].days;
	                        _this.removeAriaSelected(_this.dayColumn);
	                        nextCurrent = _this.nextCurrent(parseInt(currentlySelected, 0), direction, totalDays, false);
	                        _this.setAriaSelected(_this.dayColumn, nextCurrent.toString());
	                        stagedPosition = _this.stagedElement(_this.dayColumn, nextCurrent, direction, totalDays, false);
	                        result[0] = stagedPosition[1];
	                        result[1] = totalDays;
	                        result[2] = stagedPosition[0];
	                        return result;
	                    case 'year':
	                        _this.removeAriaSelected(_this.yearColumn);
	                        nextCurrent = _this.nextCurrent(parseInt(currentlySelected, 0), direction, 9999, true);
	                        _this.setAriaSelected(_this.yearColumn, nextCurrent.toString());
	                        stagedPosition = _this.stagedElement(_this.yearColumn, nextCurrent, direction, 9999, true);
	                        result[0] = stagedPosition[1];
	                        result[1] = 9999;
	                        result[2] = stagedPosition[0];
	                        return result;
	                    case 'hour':
	                    case 'hour24':
	                        // case fall-through is intentional
	                        var is24hours = column.indexOf('24') > -1;
	                        var hours = is24hours ? 24 : 12;
	                        _this.removeAriaSelected(_this.hourColumn);
	                        nextCurrent = _this.nextCurrent(parseInt(currentlySelected, 0), direction, hours, is24hours);
	                        _this.setAriaSelected(_this.hourColumn, nextCurrent.toString());
	                        stagedPosition = _this.stagedElement(_this.hourColumn, nextCurrent, direction, hours, is24hours);
	                        result[0] = stagedPosition[1];
	                        result[1] = is24hours ? 23 : 12;
	                        result[2] = stagedPosition[0];
	                        return result;
	                    case 'minute':
	                    case 'minute24':
	                        // case fall-through is intentional
	                        _this.removeAriaSelected(_this.minuteColumn);
	                        nextCurrent = _this.nextCurrent(parseInt(currentlySelected, 0), direction, 60, true);
	                        _this.setAriaSelected(_this.minuteColumn, nextCurrent.toString());
	                        stagedPosition = _this.stagedElement(_this.minuteColumn, nextCurrent, direction, 60, true);
	                        result[0] = stagedPosition[1];
	                        result[1] = 59;
	                        result[2] = stagedPosition[0];
	                        return result;
	                }
	            };
	            /**
	             * @name - removeAriaSelected
	             * @description - Sets the aria-checked attribute to false and removes the tabindex attribute
	             * @param {HTMLElement} column - the column element to remove the aria-checked attribute from
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.removeAriaSelected = function (column) {
	                var item = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', column);
	                if (item) {
	                    item.removeAttribute('tabindex');
	                    item.removeAttribute(_this.ariaSelected);
	                }
	            };
	            /**
	             * @name - setAriaSelected
	             * @description - Sets the aria-selected attribute to true and adds the tabindex attribute
	             * @param {HTMLElement} column - the column element to add the aria-checked attribute to
	             * @param {string} elementType - the element type ('month', 'day', 'year', etc.)
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.setAriaSelected = function (column, elementType) {
	                var item = htmlExtensions_1.selectFirstElement('[aria-label="' + elementType + '"]', column);
	                if (item) {
	                    item.setAttribute(_this.ariaSelected, 'true');
	                    item.setAttribute('tabindex', '0');
	                    item.focus();
	                }
	            };
	            /**
	             * @name - setFocus
	             * @description - Sets focus on the given column item
	             * @param {HTMLElement} column - the column element which contains the item needing focus
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.setFocus = function (column) {
	                if (!!column && column.style.display !== '') {
	                    var item = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', column);
	                    if (item) {
	                        item.focus();
	                    }
	                }
	            };
	            /**
	             * @name - nextCurrent
	             * @description - Determines which item in next in the list for the given column, in the given direction, taking into account
	             *                the type of item (month, day, year, hour, minute, etc.), the total number of possible items,
	             *                and whether or not it is zero-based.  It will return null if no suitable value is found.
	             * @param {number} selected - the index or value of the selected item
	             * @param {string} direction - the direction the user is scrolling
	             * @param {number} total - the highest value allowed for the item type
	             * @param {boolean} zeroBased - true if the element is a zero-based item
	             *
	             * @private
	             * @returns {number} - the index (for months) or value (for hours, minutes, days, years) of the next item in the column
	             */
	            this.nextCurrent = function (selected, direction, total, zeroBased) {
	                switch (direction) {
	                    case 'up':
	                        if (zeroBased && selected - 1 === 0) {
	                            return 0;
	                        }
	                        else if (selected - 1 <= 0) {
	                            return zeroBased ? total - 1 : total;
	                        }
	                        else {
	                            return selected - 1;
	                        }
	                    case 'down':
	                        if (zeroBased && selected + 1 === total) {
	                            return 0;
	                        }
	                        else if (selected + 1 > total) {
	                            return 1;
	                        }
	                        else {
	                            return selected + 1;
	                        }
	                }
	                return null;
	            };
	            /**
	             * @name - stagedElement
	             * @description - Gets the next element's value.  If the element is zero-based and at the edge of the range, return the first and last
	             *                values of the range (e.g, 0 and 60 for minutes).
	             * @param {HTMLElement} element - the selected element
	             * @param {number} newContent - the index or value of the next item
	             * @param {string} direction - the direction the user is scrolling
	             * @param {number} total - the highest value allowed for the item type
	             * @param {boolean} zeroBased - true if the element is a zero-based item
	             * @private
	             * @returns {number[]} - An array with the next value; or the first and last values of the range in certain cases.
	             */
	            this.stagedElement = function (element, newContent, direction, total, zeroBased) {
	                var nextNumber = [];
	                if (direction === 'down') {
	                    newContent = newContent + _this.numberOfElementsThatAppearInColumn;
	                }
	                else if (direction === 'up') {
	                    newContent = newContent - _this.numberOfElementsThatAppearInColumn;
	                }
	                if (zeroBased && (newContent === 0 || newContent === total)) {
	                    nextNumber[0] = 0;
	                    nextNumber[1] = total;
	                }
	                else {
	                    var signChanger = newContent < 1
	                        ? 1
	                        : newContent > total
	                            ? -1
	                            : 0;
	                    nextNumber[0] = nextNumber[1] = newContent + (total * signChanger);
	                }
	                return nextNumber;
	            };
	            /**
	             * @name - isLastInList
	             * @description - Adds the 'f-js-last' class to the last element in the element range (e.g., 'December' for months or '31' for days)
	             * @param {HTMLElement} element - the selected element
	             * @param {number} newContent - the index or value of the next item
	             * @param {string} direction - the direction the user is scrolling
	             * @param {number} total - the highest value allowed for the item type
	        
	             * @private
	             * @returns {Void}
	             */
	            this.isLastInList = function (element, newContent, direction, total) {
	                if (newContent === total) {
	                    if (direction === 'down') {
	                        htmlExtensions_1.addClass(element.lastElementChild, 'f-js-last');
	                    }
	                    else if (direction === 'up') {
	                        htmlExtensions_1.addClass(element.firstElementChild, 'f-js-last');
	                    }
	                }
	            };
	            /**
	             * @name - removeChildren
	             * @description - Removes the child elements from the given column
	             * @param {HTMLElement} element - the element to remove the childern from
	             * @param {string} listPosition - the list position ('top' or 'bottom')
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.removeChildren = function (columnElement, listPosition) {
	                var listItems = htmlExtensions_1.selectElements('li', columnElement);
	                if (!listItems || listItems.length === 0) {
	                    return;
	                }
	                if (listPosition === 'top') {
	                    listItems[0].parentNode.removeChild(listItems[0]);
	                }
	                else if (listPosition === 'bottom') {
	                    var lastItemIndex = listItems.length - 1;
	                    listItems[0].parentNode.removeChild(listItems[lastItemIndex]);
	                }
	            };
	            /**
	             * @name - updatePicker
	             * @description - Update the values in the Date Time Picker button because a new date/time has been selected
	             *
	             * @private
	             * @return {Void}
	             */
	            this.updatePicker = function () {
	                switch (_this.pickerType) {
	                    case 0 /* date */:
	                        _this.updateButton(_this.monthColumn, 'month');
	                        _this.updateButton(_this.dayColumn, 'day');
	                        _this.updateButton(_this.yearColumn, 'year');
	                        break;
	                    case 1 /* time12hours */:
	                        _this.updateButton(_this.hourColumn, 'hour');
	                        _this.updateButton(_this.minuteColumn, 'minute');
	                        _this.updateButton(_this.amPmColumn, 'ampm');
	                        break;
	                    case 2 /* time24hours */:
	                        _this.updateButton(_this.hourColumn, 'hour24');
	                        _this.updateButton(_this.minuteColumn, 'minute24');
	                        break;
	                }
	                var oldDateTime = _this.currentDateTime;
	                _this.updateCurrentDateTime();
	                if (!_this.areDatesCloseEnough(_this.currentDateTime, oldDateTime)) {
	                    // TODO: 8479736: Update build step to remove commented code.
	                    // The following console.log useful for debugging and is left in commented out for easy restoration.
	                    //console.log('onDateTimeChanged: oldDateTime(' + oldDateTime + ') newDateTime(' + this.currentDateTime + ')');
	                    _this.initiatePublish({ oldDateTime: oldDateTime, newDateTime: _this.currentDateTime });
	                }
	            };
	            /**
	             * @name - updateButton
	             * @description - Updates the given button of the Date Time Picker, based on the button type
	             * @param {HTMLElement} column - The column element
	             * @param {string} buttonType - The button type ('month', 'day', 'year', etc.)
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.updateButton = function (column, buttonType) {
	                if (!column || !buttonType) {
	                    return;
	                }
	                var button = _this.getDateTimePickerElement(buttonType);
	                if (!button) {
	                    return;
	                }
	                var selectedElement = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', column);
	                if (!selectedElement) {
	                    return;
	                }
	                var desiredText = selectedElement.getAttribute(_this.ariaLabel);
	                if (!desiredText) {
	                    return;
	                }
	                htmlExtensions_1.setText(button, desiredText);
	                button.setAttribute(_this.activeValueStorage, desiredText);
	                var formatter = button.getAttribute(DateTimePicker.buttonFormatterAttribute);
	                // If we aren't using aria-label to store values for reference and a formatter
	                // exists for the aria-label, we should go ahead an apply a new aria label
	                if (_this.activeValueStorage === DateTimePicker.activeValueStorageAttribute && !!formatter) {
	                    button.setAttribute(_this.ariaLabel, stringExtensions_1.format(formatter, desiredText));
	                }
	            };
	            /**
	             * @name - recalculateDaysInMonth
	             * @description - Re-calculates the number of days in a month when the user has selected a new month.
	             *                Useful when the user has selected (for example) January 31st, and the changes the month to February.
	             *                At that point, the day selected would change from 31 to 28.
	             * @param {HTMLElement} target - The selected element
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.recalculateDaysInMonth = function (target) {
	                var columnType = target.parentElement.getAttribute(_this.dateTimePickerDataAttribute);
	                if (!columnType || columnType !== 'month') {
	                    return;
	                }
	                var selectedDayElement = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', _this.dayColumn);
	                if (!selectedDayElement) {
	                    return;
	                }
	                var selectedDayLabel = selectedDayElement.getAttribute(_this.ariaLabel);
	                if (!selectedDayLabel) {
	                    return;
	                }
	                var selectedDay = parseInt(selectedDayLabel, 0);
	                if (!selectedDay) {
	                    return;
	                }
	                var currentMonthElement = htmlExtensions_1.selectFirstElement('[' + _this.ariaSelected + '="true"]', target.parentElement);
	                if (!currentMonthElement) {
	                    return;
	                }
	                var currentMonth = currentMonthElement.getAttribute(_this.ariaLabel);
	                if (!currentMonth) {
	                    return;
	                }
	                var monthIndex = _this.months.indexOf(currentMonth);
	                if (!_this.monthInfo[monthIndex]) {
	                    return;
	                }
	                var daysInMonth = _this.monthInfo[monthIndex].days;
	                if (!daysInMonth) {
	                    return;
	                }
	                htmlExtensions_1.removeInnerHtml(_this.dayColumn);
	                var day = selectedDay === 31 && daysInMonth < 31 ? daysInMonth : selectedDay;
	                _this.buildNodes(day, _this.dayColumn, daysInMonth, null, false);
	            };
	            this.update();
	        }
	        /**
	         * @name - update
	         * @description - updates the component state
	         *
	         * @protected
	         * @returns {Void}
	         */
	        DateTimePicker.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            var pickerType = this.element.getAttribute(this.dateTimePickerDataAttribute);
	            this.picker = this.getDateTimePickerElement('date-selector')
	                || this.getDateTimePickerElement('time-selector12')
	                || this.getDateTimePickerElement('time-selector24');
	            // Store the attribute where we should store the active value of the columns
	            // This check provides backwards compat for legacy shape that uses aria-label
	            // values in the logical flow of the component
	            this.activeValueStorage
	                = htmlExtensions_1.selectElements('button[' + DateTimePicker.activeValueStorageAttribute + ']', this.element).length
	                    ? DateTimePicker.activeValueStorageAttribute
	                    : this.ariaLabel;
	            switch (pickerType) {
	                case 'date':
	                    this.pickerType = 0 /* date */;
	                    this.monthColumn = this.getDateTimePickerElement('month', 'ul');
	                    this.dayColumn = this.getDateTimePickerElement('day', 'ul');
	                    this.yearColumn = this.getDateTimePickerElement('year', 'ul');
	                    var localizedMonths = this.monthColumn.getAttribute('data-months');
	                    if (!localizedMonths) {
	                        return;
	                    }
	                    // Months is a weird case.  Months are not treated as zero-based, but months are stored in arrays which are zero-based.
	                    // Therefore, insert a fake '0' month at index 0.  That way this.months[1] === January
	                    var daysLength = this.days.length;
	                    this.months = localizedMonths.split(',');
	                    this.months.splice(0, 0, '');
	                    if (this.months.length !== daysLength) {
	                        return;
	                    }
	                    this.totalMonths = this.months.length - 1;
	                    this.monthInfo = new Array(daysLength);
	                    for (var monthIndex = 0; monthIndex <= this.totalMonths; monthIndex++) {
	                        this.monthInfo[monthIndex] = {
	                            name: this.months[monthIndex],
	                            days: this.days[monthIndex]
	                        };
	                    }
	                    htmlExtensions_1.removeInnerHtml(this.monthColumn);
	                    htmlExtensions_1.removeInnerHtml(this.dayColumn);
	                    htmlExtensions_1.removeInnerHtml(this.yearColumn);
	                    this.buildSelector(this.monthColumn, 'month', null);
	                    this.buildSelector(this.dayColumn, 'day', null);
	                    this.buildSelector(this.yearColumn, 'year', null);
	                    break;
	                case 'time':
	                case 'time24':
	                    this.pickerType = pickerType.indexOf('24') < 0 ? 1 /* time12hours */ : 2 /* time24hours */;
	                    var timeSelectorValue = 'time-selector';
	                    var hourColumnValue = 'hour';
	                    var minuteColumnValue = 'minute';
	                    if (this.pickerType === 2 /* time24hours */) {
	                        timeSelectorValue += '24';
	                        hourColumnValue += '24';
	                        minuteColumnValue += '24';
	                    }
	                    else {
	                        timeSelectorValue += '12';
	                        this.amPmColumn = this.getDateTimePickerElement('ampm', 'ul');
	                    }
	                    this.hourColumn = this.getDateTimePickerElement(hourColumnValue, 'ul');
	                    this.minuteColumn = this.getDateTimePickerElement(minuteColumnValue, 'ul');
	                    htmlExtensions_1.removeInnerHtml(this.hourColumn);
	                    htmlExtensions_1.removeInnerHtml(this.minuteColumn);
	                    this.buildSelector(this.hourColumn, hourColumnValue, null);
	                    this.buildSelector(this.minuteColumn, minuteColumnValue, null);
	                    if (this.pickerType === 1 /* time12hours */) {
	                        this.buildAmPm(this.amPmColumn);
	                    }
	                    break;
	            }
	            // We can't get around using aria-label as data in some places due to the
	            // way this is built, but we can at least reference it from a different attribute
	            if (this.activeValueStorage === DateTimePicker.activeValueStorageAttribute) {
	                var listItems = htmlExtensions_1.selectElements('li', this.picker);
	                for (var _i = 0, listItems_1 = listItems; _i < listItems_1.length; _i++) {
	                    var item = listItems_1[_i];
	                    var label = item.getAttribute(this.ariaLabel);
	                    if (!!label) {
	                        item.setAttribute(DateTimePicker.activeValueStorageAttribute, label);
	                    }
	                }
	            }
	            // initialize private variables and create HTML for the date/time picker selectors (the columns)
	            this.cancelButton = this.getDateTimePickerElement('cancel');
	            this.applyButton = this.getDateTimePickerElement('apply');
	            this.scrollButtons = [];
	            this.columnTriggerButtons = [];
	            // Store all the buttons used to launch the picker
	            var columnTriggerButtons = this.element.children;
	            for (var triggerIndex = 0, triggerLength = columnTriggerButtons.length - 1; triggerIndex < triggerLength; triggerIndex++) {
	                var child = columnTriggerButtons.item(triggerIndex);
	                if (child.nodeType === 1 /* Element */ && child.nodeName === 'BUTTON') {
	                    this.columnTriggerButtons.push(child);
	                }
	            }
	            this.columns = htmlExtensions_1.selectElements('div[' + this.dateTimePickerDataAttribute + ']', this.picker);
	            for (var _a = 0, _b = this.columns; _a < _b.length; _a++) {
	                var column = _b[_a];
	                var scrollButtons = htmlExtensions_1.selectElements('button', column);
	                if (scrollButtons.length === 2) {
	                    // There should only be two buttons in each column
	                    scrollButtons[0].setAttribute(this.dateTimePickerDataAttribute, DateTimePicker.scrollUpValue);
	                    scrollButtons[1].setAttribute(this.dateTimePickerDataAttribute, DateTimePicker.scrollDownValue);
	                    this.scrollButtons.push(scrollButtons[0], scrollButtons[1]);
	                }
	            }
	            this.updateCurrentDateTime();
	            // attach event listeners
	            htmlExtensions_1.addEvents(this.applyButton, 'keydown click', this.handleApplyClicked);
	            htmlExtensions_1.addEvents(this.cancelButton, 'keydown click', this.handleCancelClicked);
	            htmlExtensions_1.addEvents(this.scrollButtons, 'mouseenter mouseleave', this.handleScrollButtons);
	            htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.handleKeyDown);
	            htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.click, this.handleMouseClick);
	            this.ignoreNextDOMChange = true;
	        };
	        /**
	         * @name - teardown
	         * @description - cleans up the component
	         *
	         * @protected
	         * @returns {Void}
	         */
	        DateTimePicker.prototype.teardown = function () {
	            htmlExtensions_1.removeEvents(this.applyButton, 'keydown click', this.handleApplyClicked);
	            htmlExtensions_1.removeEvents(this.cancelButton, 'keydown click', this.handleCancelClicked);
	            htmlExtensions_1.removeEvents(this.scrollButtons, 'mouseenter mouseleave', this.handleScrollButtons);
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.handleKeyDown);
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.click, this.handleMouseClick);
	            htmlExtensions_1.removeEvents(this.columns, 'mousewheel DOMMouseScroll', this.handleMouseScroll);
	        };
	        /**
	         * @name - openPicker
	         * @description - Opens the picker popup
	         *
	         * @private
	         * @param {HTMLElement} target - The element clicked that caused the picker to open
	         * @param [boolean] removeFocus - Remove the visual focus state after the picker opens
	         * @returns {Void}
	         */
	        DateTimePicker.prototype.openPicker = function (trigger, removeFocus) {
	            if (removeFocus === void 0) { removeFocus = false; }
	            this.pickerIsOpen = true;
	            this.ignoreNextDOMChange = true;
	            // Set focus to correct element
	            var clickedColumn = htmlExtensions_1.selectFirstElement('[' + this.dateTimePickerDataAttribute + '="' + trigger.getAttribute(this.dateTimePickerDataAttribute) + '"]', this.picker);
	            this.activeColumn = clickedColumn;
	            if (this.pickerType === 0 /* date */) {
	                htmlExtensions_1.removeInnerHtml(this.monthColumn);
	                htmlExtensions_1.removeInnerHtml(this.dayColumn);
	                htmlExtensions_1.removeInnerHtml(this.yearColumn);
	                this.buildSelector(this.monthColumn, 'month', null);
	                this.buildSelector(this.dayColumn, 'day', null);
	                this.buildSelector(this.yearColumn, 'year', null);
	            }
	            else if (this.pickerType === 1 /* time12hours */) {
	                htmlExtensions_1.removeInnerHtml(this.hourColumn);
	                htmlExtensions_1.removeInnerHtml(this.minuteColumn);
	                this.buildSelector(this.hourColumn, 'hour', null);
	                this.buildSelector(this.minuteColumn, 'minute', null);
	                this.selectAmPm(null);
	            }
	            else if (this.pickerType === 2 /* time24hours */) {
	                this.buildSelector(this.hourColumn, 'hour24', null);
	                this.buildSelector(this.minuteColumn, 'minute24', null);
	            }
	            this.picker.setAttribute(this.ariaHidden, 'false');
	            var nextFocusedElement = (htmlExtensions_1.selectFirstElement('[' + this.ariaSelected + '="true"]', clickedColumn));
	            if (!!nextFocusedElement) {
	                nextFocusedElement.focus();
	                // Make sure the focus rectangle stays away when the user clicks.
	                // This has to be done here in the dateTimePicker because this method specifically tells pageBehaviors to ignore the DOM change
	                // by setting this.ignoreNextDOMChange = true.
	                if (removeFocus) {
	                    htmlExtensions_1.addClass(nextFocusedElement, DateTimePicker.hiddenFocusClass);
	                }
	            }
	            htmlExtensions_1.addEvent(window, htmlExtensions_1.eventTypes.mousedown, this.handleOutsideClick);
	            htmlExtensions_1.addEvents(this.columns, 'mousewheel DOMMouseScroll', this.handleMouseScroll);
	        };
	        /**
	         * @name - closePicker
	         * @description - Closes the picker and does cleanup
	         *
	         * @private
	         * @returns {Void}
	         */
	        DateTimePicker.prototype.closePicker = function () {
	            this.pickerIsOpen = false;
	            this.picker.setAttribute(this.ariaHidden, 'true');
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.scroll, this.handleMouseScroll);
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.mousedown, this.handleOutsideClick);
	            htmlExtensions_1.removeEvents(this.columns, 'mousewheel DOMMouseScroll', this.handleMouseScroll);
	            var activeColumnIndex = this.columns.indexOf(this.activeColumn);
	            if (activeColumnIndex >= 0 && activeColumnIndex < this.columnTriggerButtons.length) {
	                this.columnTriggerButtons[activeColumnIndex].focus();
	            }
	            return;
	        };
	        /**
	         * @name - getDateTimePickerElement
	         * @description - Gets the Date Time Picker element based on the data-date-time-picker attribute
	         *
	         * @private
	         * @param {string} attributeValue - the attribute value
	         * @param {string} [selector] - the extra selector to use (optional)
	         * @returns {HTMLElement} - the Date Time Picker element
	         */
	        DateTimePicker.prototype.getDateTimePickerElement = function (attributeValue, selector) {
	            var extraSelector = stringExtensions_1.isNullOrWhiteSpace(selector) ? '' : ' ' + selector;
	            return stringExtensions_1.isNullOrWhiteSpace(attributeValue)
	                ? null
	                : htmlExtensions_1.selectFirstElement('[data-date-time-picker="' + attributeValue + '"] ' + extraSelector, this.element);
	        };
	        /**
	        * @name - areDatesCloseEnough
	        * @memberof - DateTimePicker
	        * @description - Used when comparing two Date values to determine if they are close enough to not trigger a time
	        *                change notification. We need to do this because using the js Date object can result in different
	        *                millesecond values returned from getTime() for the same year/month/day/hour/minute/second. (argh)
	        * @private
	        * @param {Date} date1 - The first date to compare.
	        * @param {Date} date2 - The second date to compare.
	        * @returns {boolean}
	        */
	        DateTimePicker.prototype.areDatesCloseEnough = function (date1, date2) {
	            return Math.abs(date1.getTime() - date2.getTime()) <= DateTimePicker.changeThreshold;
	        };
	        /**
	        * @name - updateCurrentDateTime
	        * @memberof - DateTimePicker
	        * @description - Updates the current date/time value
	        * @private
	        * @returns {void}
	        */
	        DateTimePicker.prototype.updateCurrentDateTime = function () {
	            var checkedAttribute = '[' + this.ariaSelected + '="true"]';
	            switch (this.pickerType) {
	                case 0 /* date */: {
	                    var pickers = htmlExtensions_1.selectFirstElement('[data-date-time-picker="date-selector"]', this.element);
	                    var monthPicker = !pickers ? null : htmlExtensions_1.selectFirstElement('[data-date-time-picker="month"]', pickers);
	                    var datePicker = !pickers ? null : htmlExtensions_1.selectFirstElement('[data-date-time-picker="day"]', pickers);
	                    var yearPicker = !pickers ? null : htmlExtensions_1.selectFirstElement('[data-date-time-picker="year"]', pickers);
	                    var month = !monthPicker ? null : htmlExtensions_1.selectFirstElement(checkedAttribute, monthPicker);
	                    var date = !datePicker ? null : htmlExtensions_1.selectFirstElement(checkedAttribute, datePicker);
	                    var year = !yearPicker ? null : htmlExtensions_1.selectFirstElement(checkedAttribute, yearPicker);
	                    var yearValue = parseInt(htmlExtensions_1.getText(year), 10) || -1;
	                    var monthValue = this.months.indexOf(htmlExtensions_1.getText(month)) || -1;
	                    var dateValue = parseInt(htmlExtensions_1.getText(date), 10) || -1;
	                    if ((yearValue !== -1) && (monthValue > 0) && (dateValue !== -1)) {
	                        this.currentDateTime = new Date(yearValue, monthValue - 1, dateValue);
	                    }
	                    break;
	                }
	                case 1 /* time12hours */:
	                case 2 /* time24hours */: {
	                    var pickers = htmlExtensions_1.selectFirstElement('[data-date-time-picker^="time-selector"]', this.element);
	                    var hourPicker = !pickers ? null : htmlExtensions_1.selectFirstElement('[data-date-time-picker^="hour"]', pickers);
	                    var minutePicker = !pickers ? null : htmlExtensions_1.selectFirstElement('[data-date-time-picker^="minute"]', pickers);
	                    var ampmPicker = !pickers ? null : htmlExtensions_1.selectFirstElement('[data-date-time-picker="ampm"]', pickers);
	                    var hour = !hourPicker ? null : htmlExtensions_1.selectFirstElement(checkedAttribute, hourPicker);
	                    var minute = !minutePicker ? null : htmlExtensions_1.selectFirstElement(checkedAttribute, minutePicker);
	                    var ampm = !ampmPicker ? null : htmlExtensions_1.selectFirstElement(checkedAttribute, ampmPicker);
	                    var hourValue = parseInt(htmlExtensions_1.getText(hour), 10) || -1;
	                    var minuteValue = parseInt(htmlExtensions_1.getText(minute), 10) || -1;
	                    if ((hourValue !== -1) && (minuteValue !== -1)) {
	                        this.currentDateTime = new Date();
	                        this.currentDateTime.setSeconds(0);
	                        this.currentDateTime.setMinutes(minuteValue);
	                        this.currentDateTime.setHours((htmlExtensions_1.getText(ampm) === this.amPmSelection[1]) ? hourValue + 12 : hourValue);
	                    }
	                    break;
	                }
	            }
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {IDateTimePickerSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} [context] - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        DateTimePicker.prototype.publish = function (subscriber, context) {
	            if (subscriber && subscriber.onDateTimeChanged) {
	                subscriber.onDateTimeChanged(context);
	            }
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        DateTimePicker.init = function (input) {
	            utility_1.apiDeprecated('DateTimePicker.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: DateTimePicker,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - The DateTimePicker component selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        DateTimePicker.selector = '.c-date-time-picker';
	        /**
	        * @name - changeThreshold
	        * @memberof - DateTimePicker
	        * @description - Used when comparing two Date values to determine if they are close enough to not trigger a time
	        *                change notification. We need to do this because using the js Date object can result in different
	        *                millesecond values returned from getTime() for the same year/month/day/hour/minute/second. (argh)
	        *                For now just comparing to the nearest second. If that proves to still be problematic we should
	        *                be able to increase it to anywhere less than the DataTimePicker's one minute granularity.
	        * @static
	        * @private
	        * @type {number}
	        */
	        DateTimePicker.changeThreshold = 1000;
	        /**
	         * @name - scrollUpValue
	         * @description - The Data element attribute value for scrollUp button
	         * @static
	         * @private
	         * @type {string}
	         */
	        DateTimePicker.scrollUpValue = 'scrollUp';
	        /**
	         * @name - scrollDownValue
	         * @description - The Data element attribute value for scrollUp button
	         * @static
	         * @private
	         * @type {string}
	         */
	        DateTimePicker.scrollDownValue = 'scrollDown';
	        /**
	         * @name - buttonFormatterAttribute
	         * @description - The attribute that holds the formatter for aria labels on buttons
	         * @static
	         * @private
	         * @type {string}
	         */
	        DateTimePicker.buttonFormatterAttribute = 'data-formatter-aria-label';
	        /**
	         * @name - activeValueStorageAttribute
	         * @description - The data attribute that should store the active value of a column
	         * @static
	         * @private
	         * @type {string}
	         */
	        DateTimePicker.activeValueStorageAttribute = 'data-active-value';
	        /**
	         * @name - hiddenFocusClass
	         * @description - the CSS class to add to elements to remove the focus rectangle
	         * @static
	         * @private
	         * @type {string}
	         */
	        DateTimePicker.hiddenFocusClass = 'x-hidden-focus';
	        return DateTimePicker;
	    }(publisher_1.Publisher));
	    exports.DateTimePicker = DateTimePicker;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="deviceActions"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10), __webpack_require__(29)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, htmlExtensions_1, utility_1, breakpointTracker_1) {
	    "use strict";
	    /**
	    * @class - DeviceActions
	    * @classdesc - The DeviceActions component, makes the buttons in viewport 1 to be full width.
	    * @export
	     */
	    var DeviceActions = (function (_super) {
	        __extends(DeviceActions, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the DeviceActions component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the DeviceActions behavior to.
	        */
	        function DeviceActions(element) {
	            _super.call(this, element);
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        DeviceActions.prototype.update = function () {
	            var _this = this;
	            if (!this.element) {
	                return;
	            }
	            this.buttons = htmlExtensions_1.selectElements(DeviceActions.buttonsSelector, this.element);
	            this.buttonContainers = htmlExtensions_1.selectElements(DeviceActions.buttonsContainerSelector, this.element);
	            if (!this.buttons || !this.buttonContainers || this.buttons.length < 1 || this.buttonContainers.length < 1) {
	                return;
	            }
	            // save as variable for multiple loops
	            this.buttonsLength = this.buttons.length;
	            for (var i = 0; i < this.buttonsLength; i++) {
	                var containerWidth = htmlExtensions_1.getClientRect(this.buttonContainers[i]).width;
	                if (!this.resizedContainerWidth || containerWidth > this.resizedContainerWidth) {
	                    this.resizedContainerWidth = containerWidth;
	                }
	                var buttonWidth = htmlExtensions_1.getClientRect(this.buttons[i]).width;
	                if (!this.resizedButtonWidth || buttonWidth > this.resizedButtonWidth) {
	                    this.resizedButtonWidth = buttonWidth;
	                }
	            }
	            this.updateWidths();
	            // Subscribe to breakpoint tracker
	            breakpointTracker_1.BreakpointTracker.getBreakpointTracker().subscribe({
	                onBreakpointChanged: function (notification) {
	                    _this.onBreakpointChanged(notification);
	                }
	            });
	        };
	        /**
	        * @name - updateWidths
	        * @description - Update the widths of the button and buttonContainer with the corresponding width after the resize event.
	        * @private
	        * @returns {void}
	        */
	        DeviceActions.prototype.updateWidths = function () {
	            for (var buttonIndex = 0; buttonIndex < this.buttonsLength; buttonIndex++) {
	                this.buttons[buttonIndex].style.width = this.resizedButtonWidth + 'px';
	                this.buttonContainers[buttonIndex].style.width = this.resizedContainerWidth + 'px';
	            }
	        };
	        /**
	        * @name - onBreakpointChanged
	        * @description - Breakpoint notification eventlistener
	        * @private
	        * @param {IBreakpointTrackerNotification} [notification]
	        * @returns {void}
	        */
	        DeviceActions.prototype.onBreakpointChanged = function (notification) {
	            if (notification.breakpoint > 1) {
	                this.updateWidths();
	            }
	            else {
	                for (var buttonIndex = 0; buttonIndex < this.buttonsLength; buttonIndex++) {
	                    htmlExtensions_1.css(this.buttons[buttonIndex], 'width', '');
	                    htmlExtensions_1.css(this.buttonContainers[buttonIndex], 'width', '');
	                }
	            }
	            // Set the ignore flag because we're intentionally changing the DOM here and
	            // don't want to trigger another teardown/update cycle or we'll get into a loop.
	            this.ignoreNextDOMChange = true;
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        DeviceActions.prototype.teardown = function () {
	            this.resizedButtonWidth = null;
	            this.resizedContainerWidth = null;
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        DeviceActions.init = function (input) {
	            utility_1.apiDeprecated('DeviceActions.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: DeviceActions,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - selector for the DeviceActions module.
	        * @static
	        * @public
	        * @type {string}
	        */
	        DeviceActions.selector = '.m-device-actions';
	        /**
	        * @name - buttonsSelector
	        * @description - selector to use to find button components in the DeviceActions element.
	        * @static
	        * @public
	        * @type {string}
	        */
	        DeviceActions.buttonsSelector = '.c-button';
	        /**
	        * @name - buttonsContainerSelector
	        * @description - selector to use to find button container components in the DeviceActions element
	        * @static
	        * @public
	        * @type {string}
	        */
	        DeviceActions.buttonsContainerSelector = '.f-button';
	        return DeviceActions;
	    }(observableComponent_1.ObservableComponent));
	    exports.DeviceActions = DeviceActions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, publisher_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - BreakpointTracker
	    * @classdesc - The BreakpointTracker component
	    * @export
	    */
	    var BreakpointTracker = (function (_super) {
	        __extends(BreakpointTracker, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the BreakpointTracker component.
	        * @private
	        */
	        function BreakpointTracker() {
	            var _this = this;
	            _super.call(this, null);
	            /**
	            * @name - onWindowResized
	            * @description - The resize event listener to determine breakpoint changes.
	            * @private
	            * @param {UIEvent} event - The resize event.
	            * @returns {void}
	            */
	            this.onWindowResized = function (event) {
	                var windowWidth = utility_1.getWindowWidth();
	                var breakpoint = BreakpointTracker.identifyBreakpoint(windowWidth);
	                if (_this.breakpoint !== breakpoint) {
	                    _this.breakpoint = breakpoint;
	                    _this.initiatePublish({ breakpoint: breakpoint, width: windowWidth });
	                }
	            };
	            // Get the current window width and breakpoint.
	            this.windowWidth = utility_1.getWindowWidth();
	            this.breakpoint = BreakpointTracker.identifyBreakpoint(this.windowWidth);
	            // Attach resize listener. For performance reasons use a debounced event.
	            htmlExtensions_1.addDebouncedEvent(window, htmlExtensions_1.eventTypes.resize, this.onWindowResized);
	        }
	        /**
	        * @name - getBreakpointTracker
	        * @description - Gets the global BreakpointTracker
	        * @static
	        * @public
	        * @type {BreakpointTracker}
	        */
	        BreakpointTracker.getBreakpointTracker = function () {
	            if (!document.body.breakpointTracker) {
	                document.body.breakpointTracker = new BreakpointTracker();
	            }
	            return document.body.breakpointTracker;
	        };
	        /**
	        * @name - getBreakpoint
	        * @description - Gets the current break.
	        * @public
	        * @returns {number} - The current breakpoint.
	        */
	        BreakpointTracker.prototype.getBreakpoint = function () {
	            return this.breakpoint;
	        };
	        /**
	        * @name - identifyBreakpoint
	        * @description - Identifies the current break point based on the window width.
	        * @static
	        * @public
	        * @param {number} [windowWidth] - The window width to get the breakpoint for.
	        *                                 If not specified uses the current window width.
	        * @returns {number} - The breakpoint for the specified width.
	        */
	        BreakpointTracker.identifyBreakpoint = function (windowWidth) {
	            if (!utility_1.isNumber(windowWidth)) {
	                windowWidth = utility_1.getWindowWidth();
	            }
	            for (var breakpoint = BreakpointTracker.breakpoints.length - 1; breakpoint >= 0; breakpoint--) {
	                if (windowWidth >= BreakpointTracker.breakpoints[breakpoint]) {
	                    return breakpoint;
	                }
	            }
	        };
	        ;
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {IBreakpointTrackerSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        BreakpointTracker.prototype.publish = function (subscriber, context) {
	            if (subscriber.onBreakpointChanged) {
	                subscriber.onBreakpointChanged(context);
	            }
	        };
	        /**
	        * @name - breakpoints
	        * @description - The list of breakpoint widths.
	        *                These breakpoints should come from data-bp and should be in ascending order.
	        * @static
	        * @private
	        * @type {number[]}
	        */
	        BreakpointTracker.breakpoints = [0, 540, 768, 1084, 1400, 1779];
	        return BreakpointTracker;
	    }(publisher_1.Publisher));
	    exports.BreakpointTracker = BreakpointTracker;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="dialog"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(9), __webpack_require__(29), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, publisher_1, componentFactory_1, breakpointTracker_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - Dialog
	    * @description - The IDialogSubscriber
	    * @classdesc - The Dialog component
	    * @export
	    */
	    var Dialog = (function (_super) {
	        __extends(Dialog, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Dialog component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the Dialog behavior to.
	        */
	        function Dialog(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	             * @name - shouldCloseOnEscape
	             * @description - flags whether the dialog should be closable via the escape key.
	             * @private
	             * @type {boolean}
	             */
	            this.shouldCloseOnEscape = false;
	            /**
	             * @name - isFlowDialog
	             * @description - flags whether the dialog has the 'flow' option.
	             * @private
	             * @type {boolean}
	             */
	            this.isFlowDialog = false;
	            /**
	             * @name - isLightboxDialog
	             * @description - flags whether the dialog has the 'lightbox' option.
	             * @private
	             * @type {boolean}
	             */
	            this.isLightboxDialog = false;
	            /**
	             * @name - breakpointTracker
	             * @description - The breakpoint tracker.
	             * @private
	             * @type {IDialogContentContainer[]}
	             */
	            this.breakpointTracker = breakpointTracker_1.BreakpointTracker.getBreakpointTracker();
	            /**
	            * @name - handleTriggerClick
	            * @description - Handles click events
	            * @param {Event} event - the event object from the open button's click event
	            * @public
	            * @returns {void}
	            */
	            this.handleTriggerClick = function (event) {
	                _this.activeButton = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                _this.show();
	            };
	            /**
	            * @name - show
	            * @description - Show the dialog.
	            * @public
	            * @returns {void}
	            */
	            this.show = function () {
	                var elementsToHideFromScreenReaders = htmlExtensions_1.selectElements(Dialog.pageContentContainerSelector);
	                _this.pageContentContainers = [];
	                _this.element.setAttribute(Dialog.ariaHidden, 'false');
	                _this.dialogWrapper.focus();
	                _this.onResized();
	                _this.bodyOverflow = htmlExtensions_1.css(document.body, 'overflow');
	                htmlExtensions_1.css(document.body, 'overflow', 'hidden');
	                _this.container.setAttribute(Dialog.ariaHidden, 'true');
	                _this.checkOverflow();
	                for (var _i = 0, elementsToHideFromScreenReaders_1 = elementsToHideFromScreenReaders; _i < elementsToHideFromScreenReaders_1.length; _i++) {
	                    var element = elementsToHideFromScreenReaders_1[_i];
	                    var isHidden = !!(element.getAttribute(Dialog.ariaHidden) === 'true');
	                    _this.pageContentContainers.push({
	                        element: element,
	                        hidden: isHidden
	                    });
	                    if (!isHidden) {
	                        element.setAttribute(Dialog.ariaHidden, 'true');
	                    }
	                }
	                // Set the scroll position to the top of the dialog;
	                _this.dialogWrapper.scrollTop = 0;
	                _this.initiatePublish({ notification: 1 /* shown */ });
	            };
	            /**
	            * @name - hide
	            * @description - Hide the dialog.
	            * @public
	            * @returns {void}
	            */
	            this.hide = function () {
	                _this.element.setAttribute(Dialog.ariaHidden, 'true');
	                htmlExtensions_1.css(_this.dialogWrapper, 'height', 'auto');
	                htmlExtensions_1.css(document.body, 'overflow', _this.bodyOverflow);
	                _this.container.setAttribute(Dialog.ariaHidden, 'false');
	                for (var _i = 0, _a = _this.pageContentContainers; _i < _a.length; _i++) {
	                    var container = _a[_i];
	                    // If the container was not hidden when the dialog opened, unhide it.
	                    if (!container.hidden) {
	                        container.element.removeAttribute(Dialog.ariaHidden);
	                    }
	                }
	                if (_this.activeButton) {
	                    _this.activeButton.focus();
	                }
	                _this.activeButton = null;
	                _this.pageContentContainers = [];
	                _this.initiatePublish({ notification: 2 /* hidden */ });
	            };
	            /**
	            * @name - triggerClickPublish
	            * @description - Handles the dialog's custom button click events.
	            * @param {MouseEvent} event- The click event from custom buttons
	            * @private
	            * @returns {void}
	            */
	            this.triggerClickPublish = function (event) {
	                _this.initiatePublish({ notification: 0 /* buttonClicked */, button: htmlExtensions_1.getEventTargetOrSrcElement(event) });
	            };
	            /**
	            * @name - onKeydown
	            * @description - Handles the dialog keydown events.
	            * @private
	            * @param {Event} event - The keyboard event.
	            * @returns {void}
	            */
	            this.onKeydown = function (event) {
	                var keyCode = utility_1.getKeyCode(event);
	                switch (keyCode) {
	                    case 13 /* Enter */:
	                    case 32 /* Space */:
	                        if (_this.closeButtons.indexOf(htmlExtensions_1.getEventTargetOrSrcElement(event)) !== -1) {
	                            htmlExtensions_1.preventDefault(event);
	                            _this.hide();
	                        }
	                        else if (_this.customButtons.indexOf(htmlExtensions_1.getEventTargetOrSrcElement(event)) !== -1) {
	                            _this.initiatePublish({ notification: 0 /* buttonClicked */, button: htmlExtensions_1.getEventTargetOrSrcElement(event) });
	                        }
	                        break;
	                    case 27 /* Escape */:
	                        htmlExtensions_1.preventDefault(event);
	                        if (_this.shouldCloseOnEscape) {
	                            _this.hide();
	                        }
	                        break;
	                    case 9 /* Tab */:
	                        var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                        if (target === _this.lastInput && !event.shiftKey) {
	                            // If we're on the last input and tabbing forward
	                            htmlExtensions_1.preventDefault(event);
	                            _this.firstInput.focus();
	                        }
	                        else if (target === _this.firstInput && event.shiftKey) {
	                            // if we're on the first input and tabbing backwards
	                            htmlExtensions_1.preventDefault(event);
	                            _this.lastInput.focus();
	                        }
	                        else if (_this.dialogInputs.length === 1) {
	                            // If we're tabbing anywhere and we only have one input
	                            htmlExtensions_1.preventDefault(event);
	                            _this.dialogInputs[0].focus();
	                        }
	                        break;
	                }
	            };
	            /**
	            * @name - onResized
	            * @description - Handles the window resize event.
	            * @private
	            * @returns {void}
	            */
	            this.onResized = function () {
	                if (_this.element.getAttribute(Dialog.ariaHidden) === 'false') {
	                    _this.breakpointTracker.getBreakpoint() < 1
	                        ? _this.handleMobile()
	                        : _this.checkOverflow();
	                }
	            };
	            /**
	            * @name - checkOverflow
	            * @description - Checks overflow.
	            * @private
	            * @returns {void}
	            */
	            this.checkOverflow = function () {
	                var dialogRect = htmlExtensions_1.getClientRect(_this.dialogWrapper);
	                var documentRect = htmlExtensions_1.getClientRect(_this.dialogInnerContent);
	                if (dialogRect.height < _this.dialogWrapper.scrollHeight) {
	                    if (!_this.isScroll) {
	                        htmlExtensions_1.css(_this.dialogWrapper, 'overflow-y', 'auto');
	                    }
	                }
	                else {
	                    htmlExtensions_1.css(_this.dialogWrapper, 'overflow-y', 'hidden');
	                }
	            };
	            /**
	            * @name - handleMobile
	            * @description - Handles mobile positioning.
	            * @private
	            * @returns {void}
	            */
	            this.handleMobile = function () {
	                if (_this.element.getAttribute(Dialog.ariaHidden) === 'false') {
	                    if (_this.isFlowDialog && !_this.isScroll) {
	                        var dialogRect = htmlExtensions_1.getClientRect(_this.dialogWrapper);
	                        var documentRect = htmlExtensions_1.getClientRect(_this.dialogInnerContent);
	                        if (dialogRect.height < _this.dialogWrapper.scrollHeight) {
	                            htmlExtensions_1.css(_this.dialogWrapper, 'max-height', Dialog.heightCalculationString);
	                            htmlExtensions_1.css(_this.dialogWrapper, 'height', '100%');
	                        }
	                        else {
	                            htmlExtensions_1.css(_this.dialogWrapper, 'max-height', '100%');
	                        }
	                    }
	                    else if (_this.isScroll) {
	                        htmlExtensions_1.css(_this.dialogWrapper, 'height', Dialog.heightCalculationString);
	                        htmlExtensions_1.css(_this.dialogInnerContent, 'height', 'inherit');
	                    }
	                }
	            };
	            /**
	            * @name - appendDialog
	            * @description - On update move the dialog to be appended as a direct child of the body.
	            * @private
	            * @returns {void}
	            */
	            this.appendDialog = function () {
	                // Ignore the DOM change caused by moving the dialog to the end of the body.
	                // Since appendDialog is called from update() this would cause a loop.
	                _this.ignoreNextDOMChange = true;
	                document.body.appendChild(_this.element);
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        Dialog.prototype.update = function () {
	            if (!this.element || !this.element.id) {
	                return;
	            }
	            this.dialogId = this.element.id;
	            this.dialogWrapper = htmlExtensions_1.selectFirstElement('div[role=dialog]', this.element);
	            this.dialogInnerContent = htmlExtensions_1.selectFirstElement('[role="document"]', this.element);
	            this.openButtons = htmlExtensions_1.selectElements('[data-js-dialog-show=' + this.dialogId + ']');
	            this.closeButtons = htmlExtensions_1.selectElements(Dialog.closeSelector, this.element);
	            this.dialogInputs = htmlExtensions_1.selectElements(Dialog.dialogInputSelectors, this.element);
	            this.customButtons = htmlExtensions_1.selectElements(Dialog.customButtonSelector, this.element);
	            this.appendDialog();
	            this.container = htmlExtensions_1.selectFirstElement('[data-grid*="container"]');
	            this.overlay = htmlExtensions_1.selectFirstElement('[role="presentation"]', this.element);
	            this.isScroll = htmlExtensions_1.selectFirstElement(Dialog.scrollSelector, this.element);
	            if (htmlExtensions_1.hasClass(this.element, 'f-flow')) {
	                this.isFlowDialog = true;
	            }
	            if (htmlExtensions_1.hasClass(this.element, 'f-lightbox')) {
	                this.isLightboxDialog = true;
	            }
	            if (!this.dialogWrapper ||
	                !this.openButtons || !this.openButtons.length ||
	                !this.closeButtons || !this.closeButtons.length ||
	                !this.dialogInputs || !this.dialogInputs.length ||
	                !this.container || !this.overlay) {
	                return;
	            }
	            if (this.isLightboxDialog) {
	                // Lightboxes are always closable via clicking the overlay and
	                // pressing the esc key
	                if (this.closeButtons.indexOf(this.overlay) === -1) {
	                    this.closeButtons.push(this.overlay);
	                }
	                this.shouldCloseOnEscape = true;
	            }
	            else if (this.isFlowDialog) {
	                for (var index = 0; index < this.closeButtons.length; index++) {
	                    var closeButton = this.closeButtons[index];
	                    // The 'x' to close button is optional for flow dialogs.
	                    // If the 'x' close button exists then the dialog should also be
	                    // dismissible by clicking the overlay of the dialog and via the
	                    // escape key
	                    if (htmlExtensions_1.hasClass(closeButton, 'c-glyph') && htmlExtensions_1.hasClass(closeButton, 'glyph-cancel')) {
	                        this.closeButtons.push(this.overlay);
	                        this.shouldCloseOnEscape = true;
	                        break;
	                    }
	                }
	            }
	            this.firstInput = this.dialogInputs[0];
	            this.lastInput = this.dialogInputs[this.dialogInputs.length - 1];
	            // Add events
	            htmlExtensions_1.addEvent(this.openButtons, htmlExtensions_1.eventTypes.click, this.handleTriggerClick);
	            htmlExtensions_1.addEvent(this.closeButtons, htmlExtensions_1.eventTypes.click, this.hide);
	            htmlExtensions_1.addEvent(this.customButtons, htmlExtensions_1.eventTypes.click, this.triggerClickPublish);
	            htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.onKeydown);
	            this.resizeThrottledEventHandler = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.resize, this.onResized);
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        Dialog.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.openButtons, htmlExtensions_1.eventTypes.click, this.handleTriggerClick);
	            htmlExtensions_1.removeEvent(this.closeButtons, htmlExtensions_1.eventTypes.click, this.hide);
	            htmlExtensions_1.removeEvent(this.customButtons, htmlExtensions_1.eventTypes.click, this.triggerClickPublish);
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.onKeydown);
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.resize, this.resizeThrottledEventHandler);
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {IDialogSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} [context] - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        Dialog.prototype.publish = function (subscriber, context) {
	            switch (context.notification) {
	                case 0 /* buttonClicked */:
	                    if (subscriber && subscriber.onButtonClicked) {
	                        subscriber.onButtonClicked(context);
	                    }
	                    break;
	                case 1 /* shown */:
	                    if (subscriber && subscriber.onShown) {
	                        subscriber.onShown();
	                    }
	                    break;
	                case 2 /* hidden */:
	                    if (subscriber && subscriber.onHidden) {
	                        subscriber.onHidden();
	                    }
	                    break;
	            }
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        Dialog.init = function (input) {
	            utility_1.apiDeprecated('Dialog.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Dialog,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - The dialog component selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Dialog.selector = '.c-dialog';
	        /**
	        * @name - dialogInputSelectors
	        * @description - The dialog component inputs selectors.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Dialog.dialogInputSelectors = 'select, input, textarea, button, a, .c-glyph[data-js-dialog-hide]';
	        /**
	        * @name - closeSelector
	        * @description - The dialog component close selector.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Dialog.closeSelector = '[data-js-dialog-hide]';
	        /**
	        * @name - notifyButtonSelector
	        * @description - The dialog component notify buttons selector.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Dialog.customButtonSelector = 'button[type="button"]';
	        /**
	        * @name - ariaHidden
	        * @description - aria-hidden attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Dialog.ariaHidden = 'aria-hidden';
	        /**
	        * @name - scrollSelector
	        * @description - scroll class selector.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Dialog.scrollSelector = '.f-dialog-scroll';
	        /**
	        * @name - heightCalculationString
	        * @description - calculation string for maxheight or height - 24px is the padding
	        * @static
	        * @private
	        * @type {string}
	        */
	        Dialog.heightCalculationString = 'calc(100% - 24px)';
	        /**
	         * @name pageContentContainerSelector
	         * @description - the css selector for pageContentContainers.
	         * @private
	         * @static
	         * @type {string}
	         */
	        Dialog.pageContentContainerSelector = '[data-js-controlledby="dialog"]';
	        return Dialog;
	    }(publisher_1.Publisher));
	    exports.Dialog = Dialog;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="drawer"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(29), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, breakpointTracker_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - Drawer
	    * @classdesc - The Drawer component
	    * @export
	    */
	    var Drawer = (function (_super) {
	        __extends(Drawer, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Drawer component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the Drawer behavior to.
	        */
	        function Drawer(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - getCollapseBreakpoint
	            * @description - Get the breakpoint at which the responsive drawer should collapse
	            * @public
	            * @returns {void}
	            */
	            this.getCollapseBreakpoint = function () {
	                var getCollapseBreakpoint = _this.element.getAttribute(Drawer.dataCollapseAttribute).toLowerCase();
	                switch (getCollapseBreakpoint) {
	                    case 'vp3':
	                        _this.collapseBreakpoint = 2;
	                        break;
	                    case 'vp2':
	                        _this.collapseBreakpoint = 1;
	                        break;
	                    case 'vp1':
	                        _this.collapseBreakpoint = 0;
	                        break;
	                }
	            };
	            /**
	            * @name - toggleDrawer
	            * @description - Open or close the drawer based on its current state.
	            * @public
	            * @returns {void}
	            */
	            this.toggleDrawer = function () {
	                _this.isExpanded() ? _this.collapseDrawer() : _this.expandDrawer();
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        Drawer.prototype.update = function () {
	            var _this = this;
	            if (!this.element) {
	                return;
	            }
	            this.drawerToggleButton = htmlExtensions_1.selectFirstElement('button[aria-controls]', this.element);
	            if (!this.drawerToggleButton) {
	                return;
	            }
	            var drawerId = this.drawerToggleButton.getAttribute('aria-controls');
	            this.drawerContainer = htmlExtensions_1.selectFirstElement('#' + drawerId, this.element);
	            if (!this.drawerContainer) {
	                return;
	            }
	            // Check if the drawer is the AMC responsive Drawer (Deprecated 1.19.0 in move to core)
	            // If so, add the collapse attribute for VP1 to provide backwards compatability and remove deprecated class
	            if (htmlExtensions_1.hasClass(this.element, Drawer.deprecatedResponsiveString)) {
	                this.element.setAttribute(Drawer.dataCollapseAttribute, 'vp1');
	                htmlExtensions_1.removeClass(this.element, Drawer.deprecatedResponsiveString);
	                // The responsive drawer by default has a divider, so to ensure we are not breaking the previous visual
	                // design of our partners we'll add a divider so long as it doesn't have the class to remove it
	                if (!htmlExtensions_1.hasClass(this.element, 'f-remove-divider')) {
	                    htmlExtensions_1.addClass(this.element, 'f-divider');
	                }
	            }
	            // Since we were supporting the selector of m-amc-placement we can't be assured that the AMC placement
	            // module includes the deprecated class of f-responsive, so we'll ensure support here.
	            if (htmlExtensions_1.hasClass(this.element, 'm-amc-placement')) {
	                this.element.setAttribute(Drawer.dataCollapseAttribute, 'vp1');
	            }
	            if (!this.isExpanded()) {
	                this.drawerContainer.setAttribute('aria-hidden', Drawer.trueString);
	                this.changeDrawerState('collapsed');
	            }
	            var breakpointTracker = breakpointTracker_1.BreakpointTracker.getBreakpointTracker();
	            if (!!this.element.getAttribute(Drawer.dataCollapseAttribute)) {
	                this.getCollapseBreakpoint();
	                breakpointTracker.subscribe({
	                    onBreakpointChanged: function (notification) {
	                        _this.onBreakpointChanged(notification);
	                    }
	                });
	            }
	            htmlExtensions_1.addEvent(this.drawerToggleButton, htmlExtensions_1.eventTypes.click, this.toggleDrawer);
	            this.onBreakpointChanged({ breakpoint: breakpointTracker.getBreakpoint(), width: 0 });
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        Drawer.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.drawerToggleButton, htmlExtensions_1.eventTypes.click, this.toggleDrawer);
	        };
	        /**
	        * @name - onBreakpointChanged
	        * @description - Updates the drawer based on the current window width.
	        * @public
	        * @param  {IBreakpointTrackerNotification} notification - The BreakpointTracker notification.
	        * @returns {void}
	        */
	        Drawer.prototype.onBreakpointChanged = function (notification) {
	            // * REMOVE REFERENCE TO 'f-responsive' in v.2.0 -- Deprecated * / /
	            if (this.element.getAttribute(Drawer.dataCollapseAttribute)) {
	                this.updateResponsiveDrawer(notification.breakpoint);
	            }
	        };
	        /**
	        * @name - changeDrawerState
	        * @description - Change the drawer state. To be used with expandDrawer() and collapseDrawer()
	        * @private
	        * @param  {string} state - The desired state.
	        *                          'open' to open the drawer, any other to close the drawer.
	        * @returns {void}
	        */
	        Drawer.prototype.changeDrawerState = function (state) {
	            var openState = state === 'open';
	            this.drawerToggleButton.setAttribute(Drawer.ariaExpanded, openState ? Drawer.trueString : 'false');
	            this.drawerContainer.style.height = openState ? 'auto' : '0';
	            this.drawerContainer.style.overflow = openState ? 'visible' : Drawer.hiddenString;
	            this.drawerContainer.setAttribute('aria-hidden', openState ? 'false' : Drawer.trueString);
	        };
	        /**
	        * @name - collapseDrawer
	        * @description - Collapse the drawer element.
	        * @private
	        * @returns {void}
	        */
	        Drawer.prototype.collapseDrawer = function () {
	            this.drawerContainer.setAttribute(Drawer.hiddenString, '');
	            this.changeDrawerState('');
	        };
	        /**
	        * @name - expandDrawer
	        * @description - Expand the drawer element.
	        * @private
	        * @returns {void}
	        */
	        Drawer.prototype.expandDrawer = function () {
	            this.drawerContainer.removeAttribute(Drawer.hiddenString);
	            this.changeDrawerState('open');
	        };
	        /**
	        * @name - isExpanded
	        * @description - Check if the drawer is expanded by validating the aria-expanded attribute is true.
	        * @private
	        * @returns {boolean}
	        */
	        Drawer.prototype.isExpanded = function () {
	            return this.drawerToggleButton.getAttribute(Drawer.ariaExpanded) === Drawer.trueString;
	        };
	        /**
	        * @name - updateResponsiveDrawer
	        * @description - If the we are in vp1, show drawer, otherwise just display the content.
	        * @private
	        * @param  {number} breakpoint - The breakpoint value.
	        * @returns {void}
	        */
	        Drawer.prototype.updateResponsiveDrawer = function (breakpoint) {
	            // Is the current viewport larger than the collapse breakpoint?
	            if (breakpoint > this.collapseBreakpoint) {
	                this.drawerToggleButton.setAttribute(Drawer.disabledString, Drawer.disabledString);
	                htmlExtensions_1.addClass(this.element, 'f-show');
	                this.expandDrawer();
	            }
	            else {
	                this.drawerToggleButton.removeAttribute(Drawer.disabledString);
	                htmlExtensions_1.removeClass(this.element, 'f-show');
	                this.collapseDrawer();
	            }
	        };
	        // * NOT CORE * //
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        Drawer.init = function (input) {
	            utility_1.apiDeprecated('Drawer.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Drawer,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - The drawer component selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Drawer.selector = '.c-drawer';
	        /**
	        * @name - ariaExpanded
	        * @description - aria-expanded attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Drawer.ariaExpanded = 'aria-expanded';
	        /**
	        * @name - disabledString
	        * @description - The disabled string.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Drawer.disabledString = 'disabled';
	        /**
	        * @name - hiddenString
	        * @description - The hidden string.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Drawer.hiddenString = 'hidden';
	        /**
	        * @name - trueString
	        * @description - The true string.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Drawer.trueString = 'true';
	        /**
	        * @name - deprecatedResponsiveString
	        * @description - The true string.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Drawer.deprecatedResponsiveString = 'f-responsive';
	        /**
	        * @name - dataCollapseAttribute
	        * @description - The data-js-collpase attribute string.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Drawer.dataCollapseAttribute = 'data-js-collapse';
	        return Drawer;
	    }(observableComponent_1.ObservableComponent));
	    exports.Drawer = Drawer;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="file"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(3), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, observableComponent_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - File
	    * @classdesc - The File component
	    * @export
	    */
	    var File = (function (_super) {
	        __extends(File, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the File component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the File behavior to.
	        */
	        function File(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - showFileDialogMenu
	            * @description - Show the file dialog when the user clicks on the input or button elements.
	            * @private
	            * @param {Event} event - The click event.
	            * @returns {void}
	            */
	            this.showFileDialogMenu = function (event) {
	                htmlExtensions_1.preventDefault(event);
	                _this.fileInputElement.click();
	            };
	            /**
	            * @name - handleFileSelection
	            * @description - Take the file selection from the hidden file input field and put it into the visible input field.
	            * @private
	            * @returns {void}
	            */
	            this.handleFileSelection = function () {
	                // Remove the "fakepath" string that shows up when copying the value over from the input field from Chrome.
	                _this.textInputElement.value = _this.fileInputElement.value.replace('C:\\fakepath\\', '');
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        File.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            this.fileInputElement = htmlExtensions_1.selectFirstElement('input[type="file"]', this.element);
	            this.submitButton = htmlExtensions_1.selectFirstElement('button', this.element);
	            this.textInputElement = htmlExtensions_1.selectFirstElement('input[type="text"]', this.element);
	            if (!this.fileInputElement || !this.submitButton || !this.textInputElement) {
	                return;
	            }
	            htmlExtensions_1.addEvent(this.fileInputElement, htmlExtensions_1.eventTypes.change, this.handleFileSelection);
	            htmlExtensions_1.addEvent(this.submitButton, htmlExtensions_1.eventTypes.click, this.showFileDialogMenu);
	            htmlExtensions_1.addEvent(this.textInputElement, htmlExtensions_1.eventTypes.click, this.showFileDialogMenu);
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        File.prototype.teardown = function () {
	            // Remove the change and click listeners.
	            htmlExtensions_1.removeEvent(this.fileInputElement, htmlExtensions_1.eventTypes.change, this.handleFileSelection);
	            htmlExtensions_1.removeEvent(this.submitButton, htmlExtensions_1.eventTypes.click, this.showFileDialogMenu);
	            htmlExtensions_1.removeEvent(this.textInputElement, htmlExtensions_1.eventTypes.click, this.showFileDialogMenu);
	            // Reset non static members
	            this.fileInputElement = null;
	            this.submitButton = null;
	            this.textInputElement = null;
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        File.init = function (input) {
	            utility_1.apiDeprecated('File.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: File,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - The file component selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        File.selector = '.c-file';
	        return File;
	    }(observableComponent_1.ObservableComponent));
	    exports.File = File;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name='flyout'/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(4), __webpack_require__(34), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, htmlExtensions_1, viewportCollision_1, utility_1) {
	    "use strict";
	    /**
	    * Flyout gutter size in pixels
	    */
	    var flyoutGutter = 8;
	    /**
	     * @export
	     * @class Flyout
	     * @summary Contruct an instance of a Flyout component
	     * @description
	     *
	     * Horizontal Diagram:
	     *
	     * +---------------------------------------------------------+
	     * |                                                         |
	     * | parent +--------------------------------------------+   |
	     * |  left  |                                            |   |
	     * +=======>|                   button.width             |   |
	     * |        |            <========================>      |   |
	     * |        |  button    +------------------------+      |   |
	     * |        |   left     |                        |      |   |
	     * +====================>|         button         |      |   |
	     * |        |            |                        |      |   |
	     * |        |            +------------------------+      |   |
	     * |        |                                            |   |
	     * |        | return +--------------------------------+  |   |
	     * |        | value  |             flyout             |  |   |
	     * |        +=======>|                                |  |   |
	     * |        |        +--------------------------------+  |   |
	     * |        |        <================================>  |   |
	     * |        |                    flyout.width            |   |
	     * |        | offset parent                              |   |
	     * |        +--------------------------------------------+   |
	     * |                                                         |
	     * | window                                                  |
	     * +---------------------------------------------------------+
	     *
	     *
	     * Vertical Diagram:
	     *
	     * +--------+---------------+--------------------------------------+
	     * |        |               |                                      |
	     * |        | parent.top    |                                      |
	     * |        v               |                                      |
	     * |  +---------------------|--------+---------------------------+ |
	     * |  |                     |        |                           | |
	     * |  |                     |        | return value              | |
	     * |  |          button.top |        v                           | |
	     * |  |                     |     +------------------+ +         | |
	     * |  |                     |     |                  | |         | |
	     * |  |                     v     |                  | |         | |
	     * |  |        + +--------------+ |                  | |         | |
	     * |  | button | |              | |                  | | flyout  | |
	     * |  | height | |    button    | |      flyout      | | height  | |
	     * |  |        | |              | |                  | |         | |
	     * |  |        v +--------------+ |                  | |         | |
	     * |  |                           |                  | |         | |
	     * |  |                           |                  | |         | |
	     * |  |                           +------------------+ v         | |
	     * |  |                                                          | |
	     * |  | offset parent                                            | |
	     * |  +----------------------------------------------------------+ |
	     * |                                                               |
	     * | window                                                        |
	     * +---------------------------------------------------------------+
	     *
	     *
	     * # Explanation of placement algorithms:
	     *      All references to offset parent, button, flyout, window/viewport, refer
	     *      to the two diagrams above
	     *
	     * The first step of the placement algorithms is to determine the offset parent of
	     * flyout. The offset parent of the flyout is the ancestor of the flyout from which
	     * the flyout's css position offsets from. In other words, setting the flyout's css
	     * top property to 0 will align the top of the flyout with the top of its offset
	     * parent's border box. For most elements, the offset parent is the documentElement.
	     * However, if the flyout has an ancestor with the css position property set to
	     * something other than static, then the flyout's offset parent is that ancestor.
	     *
	     * Currently, the algorithms coded below assume that the flyout and the flyout's
	     * button have the same offset parent. This can be achieved by placeing the .c-flyout
	     * element next to the [data-js-flyout] button.
	     *
	     * To calculate the flyout's position, the algorithms use the browser's getBoundingClientRect API
	     * (referred to as the ClientRect API henceforth). The ClientRect API returns
	     * the position of the element relative to the viewport edge. However, as stated above,
	     * CSS top and left properties position an element relative to its offset parent.
	     * So the algorithms below use the flyout's (and assumed button's) offset parent's
	     * ClientRect to determine the button's position within the offset parent. Once the
	     * button's position within the offset parent is known, the algorithm can use the button's
	     * and flyout's width and height to position it appropriately around the button.
	     *
	     *
	     * # Handling Scrolling
	     *
	     * The algorithms below don't use scrollX or scrollY becauase the ClientRect API takes it into
	     * account the scrolling of the viewport automatically and returns negative values if the
	     * position is off the viewport. So if the offset parent is the documentElement and it is scrolled,
	     * it's left value will be negative
	     *
	     *
	     * # Related Links
	     *
	     *  * [Absolute Positioning Inside Relative Positioning](https://css-tricks.com/absolute-positioning-inside-relative-positioning/)
	     *  * [Learn CSS Positioning in Ten Steps](http://www.barelyfitz.com/screencast/html-training/css/positioning/)
	     *  * [JQuery source, CTRL+F for "offsetParent:"](http://code.jquery.com/jquery-3.1.1.js)
	     *  * [Measuring Element Dimension and Location with CSSOM](https://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx)
	     *
	     * @extends {ObservableComponent}
	     */
	    var Flyout = (function (_super) {
	        __extends(Flyout, _super);
	        /**
	        * Flyout constructor
	        * @param element {HTMLElement} - The flyout element
	        */
	        function Flyout(element) {
	            var _this = this;
	            _super.call(this, element);
	            this.element = element;
	            /**
	             * @name - toggleFlyout
	             * @description - hides the flyout if it's currently shown, or shows it if it's currently hidden
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.toggleFlyout = function () {
	                _this.shown ? _this.hide(true) : _this.show(true);
	            };
	            /**
	             * @name - handleKeydownWhenFlyoutIsOpen
	             * @description - Event handles the escape key -- hides the flyout if the flyout is shown
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.handleKeydownWhenFlyoutIsOpen = function (event) {
	                var keycode = utility_1.getKeyCode(event);
	                if (_this.shown) {
	                    switch (keycode) {
	                        case 27 /* Escape */:
	                            _this.hide(true);
	                            break;
	                    }
	                }
	            };
	            /**
	             * @name - handleClickWhenFlyoutIsOpen
	             * @description - Event handler for clicks when the flyout is open -- calls performActionsWhenFlyoutIsOpen which does the real work
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.handleClickWhenFlyoutIsOpen = function (event) {
	                var target = event.target || event.srcElement;
	                _this.performActionsWhenFlyoutIsOpen(target);
	            };
	            /**
	             * @name - performActionsWhenFlyoutIsOpen
	             * @description - Hides the flyout if the click event occurred inside the flyout or the open button
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.performActionsWhenFlyoutIsOpen = function (target) {
	                var parent = target.parentNode;
	                if (_this.element.contains(target) === false && target !== _this.openButton && parent !== _this.openButton) {
	                    _this.hide(true);
	                }
	            };
	            /**
	             * @name - hide
	             * @description - Hides the flyout
	             * @param (boolean) setFocus - If true, set the focus on the openButton element (default is false)
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.hide = function (setFocus) {
	                if (setFocus === void 0) { setFocus = false; }
	                _this.shown = false;
	                _this.element.setAttribute(Flyout.AriaHidden, 'true');
	                if (_this.dismissalMode === 0 /* dismissible */) {
	                    htmlExtensions_1.removeEvent(_this.bodyElement, htmlExtensions_1.eventTypes.click, _this.handleClickWhenFlyoutIsOpen);
	                }
	                if (setFocus) {
	                    _this.openButton.focus();
	                }
	            };
	            /**
	             * @name - show
	             * @description - Shows the flyout
	             * @param (boolean) setFocus - If true, set the focus on the flyout element (default is false)
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.show = function (setFocus) {
	                if (setFocus === void 0) { setFocus = false; }
	                _this.shown = true;
	                _this.element.setAttribute(Flyout.AriaHidden, 'false');
	                _this.offsetParent = htmlExtensions_1.getOffsetParent(_this.element);
	                if (_this.placement === 3 /* right */) {
	                    _this.placeRight();
	                }
	                else if (_this.placement === 1 /* top */) {
	                    _this.placeTop();
	                }
	                else if (_this.placement === 2 /* left */) {
	                    _this.placeLeft();
	                }
	                else if (_this.placement === 0 /* bottom */) {
	                    _this.placeBottom();
	                }
	                // make sure the selected flyout position is visible in the viewport -- if not, try another flyout position
	                // TODO (Task 8643736:): read the object returned from collidesWith and use that to figure out which
	                // side(s) to check first which is most likely to succeed, rather than always guessing placeLeft() first
	                if (viewportCollision_1.collidesWith(_this.element) !== false) {
	                    _this.placeLeft();
	                    if (viewportCollision_1.collidesWith(_this.element) !== false) {
	                        _this.placeRight();
	                        if (viewportCollision_1.collidesWith(_this.element) !== false) {
	                            _this.placeBottom();
	                            if (viewportCollision_1.collidesWith(_this.element) !== false) {
	                                _this.placeTop();
	                                if (viewportCollision_1.collidesWith(_this.element) !== false) {
	                                    _this.placeBottomFinal();
	                                    if (viewportCollision_1.collidesWith(_this.element) !== false) {
	                                        _this.placeTopFinal();
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                if (_this.dismissalMode === 0 /* dismissible */) {
	                    htmlExtensions_1.addEvent(_this.bodyElement, htmlExtensions_1.eventTypes.click, _this.handleClickWhenFlyoutIsOpen);
	                }
	                if (setFocus) {
	                    _this.element.focus();
	                }
	            };
	            /**
	             * @name - placeTopFinal
	             * @description - Places the flyout on in the top position (fallback when previous attempt failed)
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.placeTopFinal = function () {
	                var parentRect = htmlExtensions_1.getClientRect(_this.offsetParent);
	                var flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                var buttonRect = htmlExtensions_1.getClientRect(_this.openButton);
	                // Don't center the flyout in the final Top placement. Just align it with the button left
	                var leftPosition = (buttonRect.left - parentRect.left);
	                var topPosition = (buttonRect.top - parentRect.top) - flyoutRect.height - flyoutGutter;
	                htmlExtensions_1.css(_this.element, 'left', leftPosition + 'px');
	                htmlExtensions_1.css(_this.element, 'top', topPosition + 'px');
	            };
	            /**
	             * @name - placeBottomFinal
	             * @description - Places the flyout on in the bottom position (fallback when previous attempt failed)
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.placeBottomFinal = function () {
	                var parentRect = htmlExtensions_1.getClientRect(_this.offsetParent);
	                var flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                var buttonRect = htmlExtensions_1.getClientRect(_this.openButton);
	                // Don't center the flyout in the final bottom placement. Just align it with the button left pos
	                var leftPosition = (buttonRect.left - parentRect.left);
	                var topPosition = (buttonRect.top - parentRect.top) + buttonRect.height + flyoutGutter;
	                htmlExtensions_1.css(_this.element, 'left', leftPosition + 'px');
	                htmlExtensions_1.css(_this.element, 'top', topPosition + 'px');
	            };
	            /**
	             * @name - placeBottom
	             * @description - Places the flyout on in the bottom position
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.placeBottom = function () {
	                var parentRect = htmlExtensions_1.getClientRect(_this.offsetParent);
	                var flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                var buttonRect = htmlExtensions_1.getClientRect(_this.openButton);
	                var setBottomPlacement = function () {
	                    var leftPosition = _this.calculateHorizontalCenter(parentRect, buttonRect, flyoutRect);
	                    var topPosition = (buttonRect.top - parentRect.top) + buttonRect.height + flyoutGutter;
	                    htmlExtensions_1.css(_this.element, 'left', leftPosition + 'px');
	                    htmlExtensions_1.css(_this.element, 'top', topPosition + 'px');
	                };
	                // Recalculate bottom placement in case size of flyout changed with its new layout
	                setBottomPlacement();
	                flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                setBottomPlacement();
	            };
	            /**
	             * @name - placeLeft
	             * @description - Places the flyout on in the left position
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.placeLeft = function () {
	                var parentRect = htmlExtensions_1.getClientRect(_this.offsetParent);
	                var flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                var buttonRect = htmlExtensions_1.getClientRect(_this.openButton);
	                var setLeftPlacement = function () {
	                    var leftPosition = (buttonRect.left - parentRect.left) - flyoutRect.width - flyoutGutter;
	                    var topPosition = _this.calculateVerticalCenter(parentRect, buttonRect, flyoutRect);
	                    htmlExtensions_1.css(_this.element, 'left', leftPosition + 'px');
	                    htmlExtensions_1.css(_this.element, 'top', topPosition + 'px');
	                };
	                // Recalculate left placement in case size of flyout changed with its new layout
	                setLeftPlacement();
	                flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                setLeftPlacement();
	            };
	            /**
	             * @name - placeTop
	             * @description - Places the flyout on in the top position
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.placeTop = function () {
	                var parentRect = htmlExtensions_1.getClientRect(_this.offsetParent);
	                var flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                var buttonRect = htmlExtensions_1.getClientRect(_this.openButton);
	                var setTopPlacement = function () {
	                    var leftPosition = _this.calculateHorizontalCenter(parentRect, buttonRect, flyoutRect);
	                    var topPosition = (buttonRect.top - parentRect.top) - flyoutRect.height - flyoutGutter;
	                    htmlExtensions_1.css(_this.element, 'left', leftPosition + 'px');
	                    htmlExtensions_1.css(_this.element, 'top', topPosition + 'px');
	                };
	                // Recalculate top placement in case size of flyout changed with its new layout
	                setTopPlacement();
	                flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                setTopPlacement();
	            };
	            /**
	             * @name - placeRight
	             * @description - Places the flyout on in the right position
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.placeRight = function () {
	                var parentRect = htmlExtensions_1.getClientRect(_this.offsetParent);
	                var flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                var buttonRect = htmlExtensions_1.getClientRect(_this.openButton);
	                var setRightPlacement = function () {
	                    var leftPosition = (buttonRect.left - parentRect.left) + buttonRect.width + flyoutGutter;
	                    var topPosition = _this.calculateVerticalCenter(parentRect, buttonRect, flyoutRect);
	                    htmlExtensions_1.css(_this.element, 'left', leftPosition + 'px');
	                    htmlExtensions_1.css(_this.element, 'top', topPosition + 'px');
	                };
	                // Recalculate right placement in case size of flyout changed with its new layout
	                setRightPlacement();
	                flyoutRect = htmlExtensions_1.getClientRect(_this.element);
	                setRightPlacement();
	            };
	            if (!element) {
	                return;
	            }
	            this.bodyElement = htmlExtensions_1.selectFirstElement('body');
	            this.update();
	        }
	        /**
	         * @name - update
	         * @description - updates the component state
	         *
	         * @protected
	         * @returns {Void}
	         */
	        Flyout.prototype.update = function () {
	            var _this = this;
	            this.flyoutId = this.element.getAttribute('id');
	            if (!this.flyoutId) {
	                return;
	            }
	            this.openButton = htmlExtensions_1.selectFirstElement('[data-js-flyout="' + this.flyoutId + '"]');
	            if (!this.openButton) {
	                return;
	            }
	            // initialze variables
	            this.shown = false;
	            var dismissibleAttribute = this.element.getAttribute('data-js-flyout-dismissible');
	            this.dismissalMode = dismissibleAttribute === 'false' ? 1 /* notDismissible */ : 0 /* dismissible */;
	            var placementString = this.element.getAttribute('data-js-flyout-placement');
	            switch (placementString) {
	                case 'bottom':
	                    this.placement = 0 /* bottom */;
	                    break;
	                case 'top':
	                    this.placement = 1 /* top */;
	                    break;
	                case 'left':
	                    this.placement = 2 /* left */;
	                    break;
	                default:
	                    this.placement = 3 /* right */;
	            }
	            // bind elements to events
	            htmlExtensions_1.addEvent(this.openButton, htmlExtensions_1.eventTypes.click, this.toggleFlyout);
	            htmlExtensions_1.addEvent(window, htmlExtensions_1.eventTypes.keydown, this.handleKeydownWhenFlyoutIsOpen);
	            this.resizeThrottledEventHandler = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.resize, function () {
	                _this.hide();
	            });
	            if (this.dismissalMode === 1 /* notDismissible */) {
	                this.flyoutButtons = htmlExtensions_1.selectElementsT('button', this.element);
	                if (this.flyoutButtons.length > 0) {
	                    for (var _i = 0, _a = this.flyoutButtons; _i < _a.length; _i++) {
	                        var button = _a[_i];
	                        htmlExtensions_1.addEvent(button, htmlExtensions_1.eventTypes.click, function () {
	                            _this.hide(true);
	                        });
	                    }
	                }
	            }
	        };
	        /**
	         * @name - teardown
	         * @description - cleans up the component
	         *
	         * @protected
	         * @returns {Void}
	         */
	        Flyout.prototype.teardown = function () {
	            var _this = this;
	            htmlExtensions_1.removeEvent(this.openButton, htmlExtensions_1.eventTypes.click, this.toggleFlyout);
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.keydown, this.handleKeydownWhenFlyoutIsOpen);
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.resize, this.resizeThrottledEventHandler);
	            if (this.dismissalMode === 1 /* notDismissible */ && this.flyoutButtons.length > 0) {
	                for (var _i = 0, _a = this.flyoutButtons; _i < _a.length; _i++) {
	                    var button = _a[_i];
	                    htmlExtensions_1.removeEvent(button, htmlExtensions_1.eventTypes.click, function () {
	                        _this.hide();
	                    });
	                }
	            }
	        };
	        /**
	         * @name - calculateHorizontalCenter
	         * @description - Calculate left value of the flyout so it is horizontally centered with the button
	         * @private
	         * @param parentRect The bounding client rectangle of the flyout's offsetParent (should be relative to the browser window)
	         * @param buttonRect The bounding client rectangle of the button (should be relative to the browser window)
	         * @param flyoutRect The bounding client rectangle of the flyout (should be relative to the browser window)
	         * @returns The value to apply to the left css property of the flyout to horizontally center it to the button
	         */
	        Flyout.prototype.calculateHorizontalCenter = function (parentRect, buttonRect, flyoutRect) {
	            return (buttonRect.left - parentRect.left) + buttonRect.width / 2 - flyoutRect.width / 2;
	        };
	        /**
	         * @name - calculateVerticalCenter
	         * @description - Calculate top value of the flyout so it is vertically centered with the button
	         * @private
	         * @param parentRect The bounding client rectangle of the flyout's offsetParent (should be relative to the browser window)
	         * @param buttonRect The bounding client rectangle of the button (should be relative to the browser window)
	         * @param flyoutRect The bounding client rectangle of the flyout (should be relative to the browser window)
	         * @returns The value to apply to the top property of the flyout to vertically center it to the button
	         */
	        Flyout.prototype.calculateVerticalCenter = function (parentRect, buttonRect, flyoutRect) {
	            return (buttonRect.top - parentRect.top) + buttonRect.height / 2 - flyoutRect.height / 2;
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        Flyout.init = function (input) {
	            utility_1.apiDeprecated('Flyout.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Flyout,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        Flyout.selector = '.c-flyout';
	        Flyout.AriaHidden = 'aria-hidden';
	        return Flyout;
	    }(observableComponent_1.ObservableComponent));
	    exports.Flyout = Flyout;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, HtmlExtensions) {
	    "use strict";
	    /**
	     * Determines whether or not an HTML Element collides with the edges of the viewport (is partially or completely hidden)
	     *
	     * @export
	     * @param {HTMLElement} element - the element
	     * @returns {(ICollisionsDetected | boolean)} - an ICollisionsDetected object if a collision is detected,
	     * else it returns 'false' if no collisions detected
	     */
	    function collidesWith(element) {
	        var elementRectangle = HtmlExtensions.getClientRect(element);
	        var collisionsDetected = {
	            top: false,
	            bottom: false,
	            left: false,
	            right: false
	        };
	        // Detecting width to account for lingering listeners and hidden elements
	        // without it collision would be detected at 0,0 (top,left) for hidden elements or non removed listeners
	        if (elementRectangle.width !== 0) {
	            if (elementRectangle.top <= 0) {
	                collisionsDetected.top = true;
	            }
	            if (window.innerHeight <= elementRectangle.bottom || document.documentElement.clientHeight <= elementRectangle.bottom) {
	                collisionsDetected.bottom = true;
	            }
	            if (elementRectangle.left <= 0) {
	                collisionsDetected.left = true;
	            }
	            if (window.innerWidth <= elementRectangle.right || document.documentElement.clientWidth <= elementRectangle.right) {
	                collisionsDetected.right = true;
	            }
	        }
	        for (var direction in collisionsDetected) {
	            if (collisionsDetected[direction] === true) {
	                return collisionsDetected;
	            }
	        }
	        return false;
	    }
	    exports.collidesWith = collidesWith;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="heroItem"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(2), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, hero_item_base_1, utility_1) {
	    "use strict";
	    /**
	    * @class HeroItem
	    * @classdesc - The HeroItem module which extends HeroItemBase.
	    * @export
	    */
	    var HeroItem = (function (_super) {
	        __extends(HeroItem, _super);
	        /**
	        * @name - constructor
	        * @memberof HeroItem
	        * @description - Constructor for the HeroItem component.
	        * @param {HTMLElement} heroItemElement - the native element to attach the HeroItem behavior to.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function HeroItem(heroItemElement, params) {
	            if (params === void 0) { params = null; }
	            _super.call(this, heroItemElement, params);
	            this.heroItemElement = heroItemElement;
	        }
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        HeroItem.init = function (input) {
	            utility_1.apiDeprecated('HeroItem.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: HeroItem,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @memberof HeroItem
	        * @description - Selector to use to find HeroItem components in the document.
	        * @public
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        HeroItem.selector = '.c-hero, .m-hero-item';
	        return HeroItem;
	    }(hero_item_base_1.HeroItemBase));
	    exports.HeroItem = HeroItem;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="inPageNavigation"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(10), __webpack_require__(5), __webpack_require__(4), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, Utility, StringExtensions, HtmlExtensions, observableComponent_1) {
	    "use strict";
	    var InPageNavigation = (function (_super) {
	        __extends(InPageNavigation, _super);
	        function InPageNavigation(element) {
	            var _this = this;
	            _super.call(this, element);
	            /** A resize event handler.
	             */
	            this.resizeHandler = function () {
	                _this.checkCollapse(_this.element);
	                _this.setWidth(_this.element, true);
	                _this.setStickyClass();
	                _this.anchorPositions = _this.setAnchorPositions(_this.element);
	            };
	            /** A window scroll event handler.
	             * @param  {Event} event
	             */
	            this.scrollHandler = function (event) {
	                var dropdownMenu = HtmlExtensions.selectFirstElement('ul', _this.element);
	                var visible = dropdownMenu.getAttribute('aria-hidden');
	                _this.updateNavLinks(_this.element);
	                if (!!visible) {
	                    dropdownMenu.setAttribute('aria-hidden', 'true');
	                }
	                _this.setWidth(_this.element);
	            };
	            /** A link click event handler.
	             * @param  {Event} event
	             */
	            this.clickHandler = function (event) {
	                var target = event.target || event.srcElement;
	                var href = target.getAttribute('href');
	                var hiddenClass = 'aria-hidden';
	                if (!href || href.indexOf('#') < 0) {
	                    return;
	                }
	                if (HtmlExtensions.hasClass(target, 'f-dropdown-link')) {
	                    HtmlExtensions.preventDefault(event);
	                }
	                _this.updateNavLinks(_this.element);
	                var dropdownMenu = HtmlExtensions.selectFirstElement('ul', _this.element);
	                var visible = dropdownMenu.getAttribute('aria-hidden') !== 'true';
	                var navigationContainerHeightWithMargin = HtmlExtensions.getClientRect(_this.element).height + 10;
	                var anchor = href.split('#')[1];
	                var hasNavigationWrapper = HtmlExtensions.selectElements('[data-js-in-page-navigation-wrapper]').length > 0 ? true : false;
	                if (HtmlExtensions.hasClass(target, 'f-dropdown-link')) {
	                    if (!visible) {
	                        dropdownMenu.setAttribute(hiddenClass, 'false');
	                    }
	                    else {
	                        dropdownMenu.setAttribute(hiddenClass, 'true');
	                    }
	                }
	                else {
	                    if (!HtmlExtensions.hasClass(_this.element, 'f-vertical')) {
	                        window.scrollTo(0, _this.anchorPositions[anchor] - (hasNavigationWrapper ? navigationContainerHeightWithMargin : 0));
	                    }
	                    else {
	                        if (hasNavigationWrapper) {
	                            window.scrollTo(0, _this.anchorPositions[anchor] -
	                                (HtmlExtensions.hasClass(_this.element, 'f-dropdown')
	                                    ? navigationContainerHeightWithMargin : 0));
	                        }
	                        else {
	                            window.scrollTo(0, _this.anchorPositions[anchor]);
	                        }
	                    }
	                    _this.updateLinks(target);
	                }
	            };
	            if (!element) {
	                return;
	            }
	            this.update();
	        }
	        /**
	         * Update the component state.
	         *
	         * @protected
	         * @abstract
	         */
	        InPageNavigation.prototype.update = function () {
	            this.navLinks = HtmlExtensions.selectElements('ul a', this.element);
	            if (!this.navLinks || !this.navLinks.length) {
	                return;
	            }
	            this.anchorElements = this.getAnchorElements();
	            // set initial state based on view port.
	            this.checkCollapse(this.element);
	            this.setStickyClass();
	            this.anchorPositions = this.setAnchorPositions(this.element);
	            // todo - bruk - Add debouncing or throttling
	            HtmlExtensions.addEvent(window, HtmlExtensions.eventTypes.resize, this.resizeHandler);
	            HtmlExtensions.addEvent(window, HtmlExtensions.eventTypes.scroll, this.scrollHandler);
	            // set an event handler if the navigation is a dropdown.
	            if (HtmlExtensions.hasClass(this.element, 'f-dropdown')) {
	                var dropdownLink = HtmlExtensions.selectFirstElement('a', this.element);
	                HtmlExtensions.addEvent(dropdownLink, HtmlExtensions.eventTypes.click, this.clickHandler, true);
	            }
	            this.setNavLinkHandler(this.navLinks);
	        };
	        /**
	         * Cleaning up the old state of the component.
	         *
	         * @protected
	         * @abstract
	         */
	        InPageNavigation.prototype.teardown = function () {
	            HtmlExtensions.removeEvent(window, HtmlExtensions.eventTypes.resize, this.resizeHandler);
	            HtmlExtensions.removeEvent(window, HtmlExtensions.eventTypes.scroll, this.scrollHandler);
	            if (HtmlExtensions.hasClass(this.element, 'f-dropdown')) {
	                var dropdownLink = HtmlExtensions.selectFirstElement('a', this.element);
	                HtmlExtensions.removeEvent(dropdownLink, HtmlExtensions.eventTypes.click, this.clickHandler, true);
	            }
	            for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
	                var stickyLink = _a[_i];
	                HtmlExtensions.removeEvent(stickyLink, HtmlExtensions.eventTypes.click, this.clickHandler, true);
	            }
	        };
	        /** Sets handler to each navigation.
	         * @param  {HTMLElement[]} navLinks
	         * @returns void
	         */
	        InPageNavigation.prototype.setNavLinkHandler = function (navLinks) {
	            if (navLinks === null) {
	                return;
	            }
	            for (var _i = 0, navLinks_1 = navLinks; _i < navLinks_1.length; _i++) {
	                var stickyLink = navLinks_1[_i];
	                HtmlExtensions.addEvent(stickyLink, HtmlExtensions.eventTypes.click, this.clickHandler, true);
	            }
	        };
	        /** Calculate all bookmark anchor positions.
	         * @param  {HTMLElement} element
	         * @returns Utility.INameToValueMap
	         */
	        InPageNavigation.prototype.setAnchorPositions = function (element) {
	            if (!this.anchorElements) {
	                return;
	            }
	            var documentTop = HtmlExtensions.getClientRect(document.body).top;
	            var anchorPositions = {};
	            for (var _i = 0, _a = this.anchorElements; _i < _a.length; _i++) {
	                var anchor = _a[_i];
	                if (anchor) {
	                    anchorPositions[anchor.id] = HtmlExtensions.getClientRect(anchor).top - documentTop;
	                }
	            }
	            return anchorPositions;
	        };
	        /** Get anchor elements which are related to the nav links.
	         * If a nav link has '#anchor-1' in href attibute,
	         * in the anchorElements array it will reterive an HTMLElement that has 'anchor-1' id.
	         * @returns HTMLElement[]
	         */
	        InPageNavigation.prototype.getAnchorElements = function () {
	            var anchorElements = [];
	            var anchors = HtmlExtensions.selectElements('a', this.element);
	            for (var _i = 0, anchors_1 = anchors; _i < anchors_1.length; _i++) {
	                var anchor = anchors_1[_i];
	                var href = StringExtensions.trim(anchor.getAttribute('href'));
	                if (href != null && href.indexOf('#') === 0) {
	                    anchorElements.push(HtmlExtensions.selectFirstElement(href));
	                }
	            }
	            return anchorElements;
	        };
	        /** Set a sticky class if appropriate.
	         * @returns HTMLElement - returns the element with class added if appropriate.
	         */
	        InPageNavigation.prototype.setStickyClass = function () {
	            var stickyOffsetTop = HtmlExtensions.getClientRect(this.element).top + this.getScrollY();
	            if (stickyOffsetTop < 0) {
	                HtmlExtensions.addClass(this.element, 'f-sticky');
	                HtmlExtensions.css(this.element, 'marginLeft', this.stickyOffsetLeft);
	            }
	            return this.element;
	        };
	        /** Check if there is a need to collapse the navigation or not.
	         * @param  {HTMLElement} element - navigation link container.
	         * @returns HTMLElement - returns the navigation links container.
	         */
	        InPageNavigation.prototype.checkCollapse = function (element) {
	            if (!element) {
	                return;
	            }
	            var parentElement = element.parentElement;
	            if (!parentElement) {
	                return;
	            }
	            var allChildren = parentElement.children;
	            var listItems = HtmlExtensions.selectElements('li', element);
	            var elementWidth = HtmlExtensions.getClientRect(parentElement).width;
	            var lastItemLoc = 0;
	            var dropDownClass = 'f-dropdown';
	            var verticalClass = 'f-vertical';
	            if (!HtmlExtensions.hasClass(element, dropDownClass) && !HtmlExtensions.hasClass(element, verticalClass)) {
	                // todo - bruk - this may need to be updated for RTL market.
	                lastItemLoc = HtmlExtensions.getClientRect(listItems[listItems.length - 1]).right;
	            }
	            else if (HtmlExtensions.hasClass(element, dropDownClass) && !HtmlExtensions.hasClass(element, verticalClass)) {
	                for (var childIndex = 0, childrenLength = allChildren.length; childIndex < childrenLength - 1; childIndex++) {
	                    listItems = HtmlExtensions.selectElements('li', allChildren[childIndex]);
	                    if (listItems && listItems.length > 0 && !HtmlExtensions.hasClass(allChildren[childIndex], dropDownClass)) {
	                        lastItemLoc = HtmlExtensions.getClientRect(listItems[listItems.length - 1]).right;
	                    }
	                }
	            }
	            if (HtmlExtensions.hasClass(element, 'f-vertical')) {
	                // todo - bruk - remove the hard coded 100.
	                if (Utility.getWindowWidth() < 100 + elementWidth) {
	                    return this.convertMenu(element, 'dropdown');
	                }
	                else {
	                    return this.convertMenu(element);
	                }
	            }
	            else {
	                if (lastItemLoc > elementWidth || elementWidth === 0) {
	                    return this.convertMenu(element, 'dropdown');
	                }
	                else {
	                    return this.convertMenu(element);
	                }
	            }
	        };
	        /** Convert navigation links to vertical,
	         * @param  {HTMLElement} element
	         * @param  {string} format
	         * @returns HTMLElement
	         */
	        InPageNavigation.prototype.convertMenu = function (element, format) {
	            if (format === void 0) { format = null; }
	            var dropDownClass = 'f-dropdown';
	            var hideClass = 'f-hide';
	            if (format === 'dropdown') {
	                if (HtmlExtensions.hasClass(element, dropDownClass)) {
	                    if (HtmlExtensions.hasClass(element, hideClass)) {
	                        HtmlExtensions.removeClass(element, hideClass);
	                    }
	                }
	                else if (!HtmlExtensions.hasClass(element, hideClass)) {
	                    HtmlExtensions.addClass(element, hideClass);
	                }
	            }
	            else {
	                if (!HtmlExtensions.hasClass(element, dropDownClass)) {
	                    if (HtmlExtensions.hasClass(element, hideClass)) {
	                        HtmlExtensions.removeClass(element, hideClass);
	                    }
	                }
	                else if (!HtmlExtensions.hasClass(element, hideClass)) {
	                    HtmlExtensions.addClass(element, hideClass);
	                }
	            }
	            return element;
	        };
	        /** Set width based on the current state of the navigation elements.
	         * @param  {HTMLElement} element - navigation elements container.
	         * @param  {boolean=false} resize - a flag to check either this called because of a resize event.
	         * @returns HTMLElement - an HTML element with proper width and margin.
	         */
	        InPageNavigation.prototype.setWidth = function (element, resize) {
	            if (resize === void 0) { resize = false; }
	            var parentElement = element.parentElement;
	            var stickyClass = 'f-sticky';
	            var verticalClass = 'f-vertical';
	            var inPageNavigationSelector = '[data-js-in-page-navigation-wrapper]';
	            var stickElementList = HtmlExtensions.selectFirstElement('ul', element);
	            var isSticky = HtmlExtensions.hasClass(element, stickyClass);
	            var scrollY = this.getScrollY();
	            var stickyOffsetTop = HtmlExtensions.getClientRect(parentElement).top + scrollY;
	            this.stickyOffsetLeft = HtmlExtensions.getClientRect(parentElement).left;
	            this.elementWidth = HtmlExtensions.getClientRect(parentElement).width;
	            var inpageWrapper = HtmlExtensions.selectElements(inPageNavigationSelector);
	            if (resize === true && HtmlExtensions.hasClass(element, stickyClass)) {
	                stickElementList.style.width = this.elementWidth + 'px';
	                stickElementList.style.marginLeft = this.stickyOffsetLeft + 'px';
	            }
	            if (inpageWrapper.length > 0) {
	                if (stickyOffsetTop < scrollY) {
	                    if (!HtmlExtensions.hasClass(element, stickyClass)) {
	                        HtmlExtensions.addClass(element, stickyClass);
	                        stickElementList.style.width = this.elementWidth + 'px';
	                        stickElementList.style.marginLeft = this.stickyOffsetLeft + 'px';
	                    }
	                }
	                else if (isSticky !== false) {
	                    HtmlExtensions.removeClass(element, stickyClass);
	                    HtmlExtensions.css(stickElementList, 'margin-left', '');
	                    HtmlExtensions.css(stickElementList, 'width', '');
	                }
	            }
	            return element;
	        };
	        /** Change the active state to the current link.
	         * @param  {HTMLElement} target - the target element that needs to have active state.
	         * @returns HTMLElement
	         */
	        InPageNavigation.prototype.updateLinks = function (target) {
	            if (!this.element || !this.navLinks || this.navLinks.length === 0) {
	                return;
	            }
	            for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
	                var navLink = _a[_i];
	                navLink.blur();
	                HtmlExtensions.removeClass(navLink, 'f-active');
	            }
	            HtmlExtensions.addClass(target, 'f-active');
	            if (HtmlExtensions.hasClass(this.element, 'f-dropdown')) {
	                var activeItem = HtmlExtensions.selectFirstElement('a', this.element);
	                activeItem.setAttribute('href', target.getAttribute('href'));
	                activeItem.innerHTML = target.innerHTML;
	            }
	            return this.element;
	        };
	        /** Check the visibility of the bookmark link. If it's active region update the related nav link.
	         * @param  {HTMLElement} element - nav link container.
	         * @returns void
	         */
	        InPageNavigation.prototype.updateNavLinks = function (element) {
	            if (!element) {
	                return;
	            }
	            var anchorElements = this.getAnchorElements();
	            var navWrapper = HtmlExtensions.selectFirstElement('[data-js-in-page-navigation-wrapper]');
	            if (navWrapper && anchorElements && anchorElements.length) {
	                navWrapper.style.top = element.offsetHeight + 'px';
	                for (var anchorLength = anchorElements.length - 1; anchorLength >= 0; anchorLength--) {
	                    // todo - bruk - follow up with DI folks how they came up with this 50.
	                    if (anchorElements[anchorLength].getBoundingClientRect().top <= 50) {
	                        this.updateLinks(HtmlExtensions.selectElements('a', element)[anchorLength]);
	                        break;
	                    }
	                }
	            }
	        };
	        /**
	        * @name - getScrollY
	        * @memberOf InPageNavigation
	        * @description - Gets the scroll Y value in a x-browwser compatible way.
	        * @private
	        * @returns {number} - The scroll Y offset value.
	        */
	        InPageNavigation.prototype.getScrollY = function () {
	            return window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
	        };
	        InPageNavigation.selector = '.c-in-page-navigation';
	        return InPageNavigation;
	    }(observableComponent_1.ObservableComponent));
	    exports.InPageNavigation = InPageNavigation;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="mosaicPlacement"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(3), __webpack_require__(29), __webpack_require__(10), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, observableComponent_1, breakpointTracker_1, utility_1, htmlExtensions_1) {
	    "use strict";
	    var MosaicPlacement = (function (_super) {
	        __extends(MosaicPlacement, _super);
	        /** Creates a mosaic object and subscribes to the break point tracker.
	        * @param  {HTMLElement} element
	        */
	        function MosaicPlacement(element) {
	            var _this = this;
	            _super.call(this, element);
	            // width and height classes of a mosaic container. 
	            this.cssClassNames = {
	                width: {
	                    large: 'f-width-large',
	                    small: 'f-width-small'
	                },
	                height: {
	                    large: 'f-height-large',
	                    medium: 'f-height-medium',
	                    small: 'f-height-small'
	                }
	            };
	            // todo - bruk - this mapping need to come from configuration.
	            // todo - bruk - the source of these numbers are not clear. Need to find out. 
	            this.mappings = [
	                [
	                    [300, 0],
	                    [150, 320],
	                    [0, 160]
	                ],
	                [
	                    [300, 540],
	                    [150, 270],
	                    [0, 135]
	                ],
	                [
	                    [400, 768],
	                    [200, 384],
	                    [0, 0]
	                ],
	                [
	                    [400, 542],
	                    [200, 271],
	                    [0, 135]
	                ],
	                [
	                    [400, 542],
	                    [200, 271],
	                    [0, 135]
	                ],
	                [
	                    [400, 542],
	                    [200, 271],
	                    [0, 135]
	                ]
	            ];
	            this.update();
	            breakpointTracker_1.BreakpointTracker.getBreakpointTracker().subscribe({
	                onBreakpointChanged: function (notification) {
	                    _this.onBreakpointChanged(notification);
	                }
	            });
	        }
	        /**
	         * Update the component state.
	         *
	         * @protected
	         * @abstract
	         */
	        MosaicPlacement.prototype.update = function () {
	            this.onBreakpointChanged({ breakpoint: breakpointTracker_1.BreakpointTracker.getBreakpointTracker().getBreakpoint(), width: 0 });
	        };
	        /**
	         * Cleaning up the old state of the component.
	         *
	         * @protected
	         * @abstract
	         */
	        MosaicPlacement.prototype.teardown = function () {
	            // Nothing to teardown yet...
	        };
	        /** Removes all width and height related classes.
	         * @param  {HTMLElement} containerElement
	         * @returns void
	         */
	        MosaicPlacement.prototype.removeClasses = function (containerElement) {
	            if (containerElement == null) {
	                return;
	            }
	            htmlExtensions_1.removeClasses(containerElement, this.concatenateCssClasses(this.cssClassNames));
	        };
	        /** todo - brukb - copied over from DI code as is with some additional code for error checking. Need to be revisited.
	         * @param  {HTMLElement} containerElement - The element that contains the mosaics.
	         * @param  {number} windowWidth - The width of a rendering window.
	         * @returns void
	         */
	        MosaicPlacement.prototype.applySizeClasses = function (containerElement, breakpoint) {
	            var dimensions = utility_1.getDimensions(containerElement);
	            if (dimensions == null || !utility_1.isNumber(dimensions.height) || !utility_1.isNumber(dimensions.width)) {
	                return;
	            }
	            var sizeClasses = [];
	            var widthClass;
	            if (dimensions.height >= this.mappings[breakpoint][0][0]) {
	                sizeClasses.push(this.cssClassNames.height.large);
	                widthClass = dimensions.width >= this.mappings[breakpoint][0][1]
	                    ? this.cssClassNames.width.large
	                    : this.cssClassNames.width.small;
	                sizeClasses.push(widthClass);
	            }
	            else if (dimensions.height >= this.mappings[breakpoint][1][0]) {
	                sizeClasses.push(this.cssClassNames.height.medium);
	                widthClass = dimensions.width >= this.mappings[breakpoint][1][1]
	                    ? this.cssClassNames.width.large
	                    : this.cssClassNames.width.small;
	                sizeClasses.push(widthClass);
	            }
	            else {
	                sizeClasses.push(this.cssClassNames.height.small);
	                widthClass = dimensions.width >= this.mappings[breakpoint][2][1]
	                    ? this.cssClassNames.width.large
	                    : this.cssClassNames.width.small;
	                sizeClasses.push(widthClass);
	            }
	            htmlExtensions_1.addClasses(this.element, sizeClasses);
	        };
	        /** Updates the mosaic container class based on the current window width.
	         * @param  {number} windowWidth
	         * @returns void
	         */
	        MosaicPlacement.prototype.onBreakpointChanged = function (notification) {
	            this.removeClasses(this.element);
	            this.applySizeClasses(this.element, notification.breakpoint);
	        };
	        /**
	         * Convert cssClassNames into space delimated css classes for easy use of classes on DOM manipulation.
	         * @param  {ICssClassNames} cssClassnames - an object that has css classes.
	         * @returns string
	         */
	        MosaicPlacement.prototype.concatenateCssClasses = function (cssClassNames) {
	            if (cssClassNames == null) {
	                return;
	            }
	            var classNames = [];
	            for (var cssProp in cssClassNames) {
	                if (cssClassNames.hasOwnProperty(cssProp)) {
	                    var cssClassNamesAnyVersion = cssClassNames;
	                    var currentProp = cssClassNamesAnyVersion[cssProp];
	                    if (typeof currentProp === 'object') {
	                        for (var className in currentProp) {
	                            if (currentProp.hasOwnProperty(className)) {
	                                classNames.push(currentProp[className]);
	                            }
	                        }
	                    }
	                }
	            }
	            return classNames;
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        MosaicPlacement.init = function (input) {
	            utility_1.apiDeprecated('MosaicPlacement.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: MosaicPlacement,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        MosaicPlacement.selector = '.c-mosaic-placement';
	        return MosaicPlacement;
	    }(observableComponent_1.ObservableComponent));
	    exports.MosaicPlacement = MosaicPlacement;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(39), __webpack_require__(17), __webpack_require__(40), __webpack_require__(20), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, logo_controller_1, multi_slide_carousel_1, pivot_1, sequenceIndicator_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - MultiFeature
	    * @classdesc - The MultiFeature module
	    * @extends {MultiSlideCarousel}
	    * @implements {ICarouselSubscriber}
	    * @implements {IControllerSubscriber}
	    * @export
	    */
	    var MultiFeature = (function (_super) {
	        __extends(MultiFeature, _super);
	        /**
	        * @name - constructor
	        * @memberof - MultiFeature
	        * @description - Constructor for the MultiFeature class.
	        * @param {HTMLElement} multiFeatureElement - The native element to attach the MultiFeature behavior to.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function MultiFeature(multiFeatureElement, params) {
	            if (params === void 0) { params = null; }
	            _super.call(this, MultiFeature.selectMultiSlideCarousel(multiFeatureElement, params), params);
	            this.multiFeatureElement = multiFeatureElement;
	        }
	        /**
	        * @name - selectMultiSlideCarousel
	        * @memberof - MultiFeature
	        * @description - Gets the MultiSlideCarousel element. Also sets the MWF class attribute value.
	        * @static
	        * @private
	        * @param {HTMLElement} element - The MultiFeature element to look for the MultiSlideCarousel within.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        * @returns {HTMLElement} - The MultiSlideCarousel element.
	        */
	        MultiFeature.selectMultiSlideCarousel = function (multiFeatureElement, params) {
	            var multiSlideCarousel = htmlExtensions_1.selectFirstElement(multi_slide_carousel_1.MultiSlideCarousel.selector, multiFeatureElement);
	            if (multiSlideCarousel) {
	                // Add the initialization attribute value for the carousel ('MultiFeature' by default)
	                multiSlideCarousel.setAttribute(observableComponent_1.ObservableComponent.mwfClassAttribute, (!!params && !!params.mwfClass) ? params.mwfClass : 'MultiFeature');
	                // This is for backwards compatibility with old MultiFeature carousels that have deprecataed data-js-initialize='false'
	                // It can be removed for V2.
	                multiSlideCarousel.removeAttribute(observableComponent_1.ObservableComponent.initializeAttribute);
	            }
	            return multiSlideCarousel;
	        };
	        ;
	        /**
	        * @name - update
	        * @memberof - MultiFeature
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @override
	        * @returns {boolean} - true if successful, otherwise false.
	        */
	        MultiFeature.prototype.update = function () {
	            if (!_super.prototype.update.call(this)) {
	                return false;
	            }
	            _super.prototype.subscribe.call(this, this);
	            return true;
	        };
	        /**
	        * @name - teardown
	        * @memberof - MultiFeature
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        MultiFeature.prototype.teardown = function () {
	            _super.prototype.teardown.call(this);
	            _super.prototype.unsubscribe.call(this, this);
	            if (this.controller) {
	                this.controller.unsubscribe(this);
	            }
	        };
	        /**
	        * @name loadMultiSlideController
	        * @memberof - MultiFeature
	        * @description - Loads the MultiFeature's controller.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        MultiFeature.prototype.loadMultiSlideController = function () {
	            var _this = this;
	            var controllerElement = htmlExtensions_1.selectFirstElement(MultiFeature.controllerSelector, this.multiFeatureElement);
	            var controllerType;
	            if (controllerElement && htmlExtensions_1.hasClass(controllerElement, 'c-sequence-indicator')) {
	                this.loadContentElements(controllerElement);
	                controllerType = sequenceIndicator_1.SequenceIndicator;
	            }
	            else if (controllerElement && controllerElement.parentElement && htmlExtensions_1.hasClass(controllerElement.parentElement, 'c-pivot')) {
	                controllerElement = controllerElement.parentElement;
	                controllerType = pivot_1.Pivot;
	                // This is really gross but for backward compatibility, it is deprecated and can be removed in v2.
	                // We have to first fix up the pivot item element ids to only reference the pivot content like they
	                // should, otherwise the pivot control won't hide/show it's contents properly.
	                for (var _i = 0, _a = htmlExtensions_1.selectElements(MultiFeature.controllerItemsSelector, controllerElement); _i < _a.length; _i++) {
	                    var pivot = _a[_i];
	                    var idString = pivot.getAttribute(MultiFeature.ariaControls);
	                    var ids = !idString ? [] : idString.split(/\s+/);
	                    for (var _b = 0, ids_1 = ids; _b < ids_1.length; _b++) {
	                        var id = ids_1[_b];
	                        if (htmlExtensions_1.selectFirstElement('#' + id, controllerElement)) {
	                            pivot.setAttribute(MultiFeature.ariaControls, id);
	                            break;
	                        }
	                    }
	                }
	                // And we have to remove the data-js-initialize='false' because we want it to initialize.
	                controllerElement.removeAttribute(observableComponent_1.ObservableComponent.initializeAttribute);
	            }
	            else if (controllerElement && controllerElement.firstElementChild && controllerElement.firstElementChild.firstElementChild &&
	                htmlExtensions_1.hasClass(controllerElement.firstElementChild.firstElementChild, 'c-logo')) {
	                this.loadContentElements(controllerElement);
	                controllerType = logo_controller_1.LogoController;
	                controllerElement.setAttribute(observableComponent_1.ObservableComponent.mwfClassAttribute, 'LogoController');
	                htmlExtensions_1.addClass(controllerElement, sequenceIndicator_1.SequenceIndicator.selector);
	            }
	            componentFactory_1.ComponentFactory.create([{
	                    elements: [controllerElement],
	                    component: controllerType,
	                    callback: function (results) {
	                        if (results && results.length) {
	                            _this.controller = results[0];
	                            // Subscribe to the controller.
	                            if (!!_this.controller) {
	                                _this.controller.subscribe(_this);
	                            }
	                        }
	                    },
	                    eventToBind: 'DOMContentLoaded'
	                }]);
	        };
	        /**
	        * @name - onSlideRangeChanged
	        * @memberof - MultiFeature
	        * @description - Called when the carousel's slide range changes.
	        *                We use this to sync the carousel, controller, and our content.
	        * @public
	        * @param  {number} notification - The carousel changed notification.
	        * @returns {ICarouselNotification}
	        */
	        MultiFeature.prototype.onSlideRangeChanged = function (notification) {
	            if (!!notification && !!notification.fullyVisibleItemRange && !!notification.fullyVisibleItemRange.length) {
	                this.controller.setControllerIndex(notification.fullyVisibleItemRange[0], notification.userInitiated);
	                this.updateMultiFeatureContentIndex(notification.fullyVisibleItemRange[0]);
	            }
	        };
	        /**
	        * @name - updateMultiFeatureContentIndex
	        * @memberof - MultiFeature
	        * @description - Update the MultiFeature's content index.
	        *                Shows the content for the desired index and hides any previously shown content.
	        *                This method doesn't do anything when we have a pivot for a controller as we
	        *                expect the pivot to manage it's own content.
	        * @private
	        * @param  {number} toIndex - The desired new index.
	        * @returns {void}
	        */
	        MultiFeature.prototype.updateMultiFeatureContentIndex = function (toIndex) {
	            // It's allowable for toIndex to be >= than this.contentElements.length as MultiFeatures are allowed to have a single content.
	            if (!this.contentElements || (toIndex < 0) || ((toIndex >= this.contentElements.length) && (this.contentElements.length !== 1))) {
	                return;
	            }
	            toIndex = Math.min(toIndex, this.contentElements.length - 1);
	            if (utility_1.isNumber(this.activeContentIndex) && (this.activeContentIndex >= 0) &&
	                (this.activeContentIndex < this.contentElements.length)) {
	                // Hide any previously shown content.
	                htmlExtensions_1.removeClass(this.contentElements[this.activeContentIndex], MultiFeature.activeItemClass);
	            }
	            htmlExtensions_1.addClass(this.contentElements[toIndex], MultiFeature.activeItemClass);
	            this.activeContentIndex = toIndex;
	        };
	        /**
	        * @name - loadContentElements
	        * @memberof - MultiFeature
	        * @description - Loads the MultiFeature's content elements.
	        *                This method will not be called when we have a pivot for a controller as we
	        *                expect the pivot to manage it's own content.
	        * @private
	        * @param {HTMLElement} controllerElement - The containing content element to attach the MultiFeature behavior to.
	        * @returns {void}
	        */
	        MultiFeature.prototype.loadContentElements = function (controllerElement) {
	            this.contentElements = htmlExtensions_1.selectElements(MultiFeature.contentSelector, this.multiFeatureElement);
	        };
	        /**
	        * @name - onControllerIndexChanged
	        * @memberof - MultiFeature
	        * @description - Implements IControllerSubscriber's onControllerIndexChanged method.
	        * @public
	        * @param  {number} toIndex - The desired new index.
	        * @returns {void}
	        */
	        MultiFeature.prototype.onControllerIndexChanged = function (notification) {
	            if (!!notification) {
	                _super.prototype.setActiveSlide.call(this, notification.currentIndex);
	            }
	        };
	        /**
	        * @name - selector
	        * @memberof - MultiFeature
	        * @description - The MultiFeature element selector.
	        * @public
	        * @static
	        * @type {string}
	        */
	        MultiFeature.selector = '.m-multi-feature';
	        /**
	        * @name - controllerSelector
	        * @memberof - MultiFeature
	        * @description - The selector for the MultiFeature's controller.
	        * @private
	        * @static
	        * @type {string}
	        */
	        MultiFeature.controllerSelector = '[role="tablist"]';
	        /**
	        * @name - controllerItemsSelector
	        * @memberof - MultiFeature
	        * @description - The selector for the MultiFeature's controller's items.
	        *                This is only used for backwards compatibility to fix pivot controller item ids.
	        * @private
	        * @static
	        * @type {string}
	        */
	        MultiFeature.controllerItemsSelector = '[role="tab"]';
	        /**
	        * @name - contentSelector
	        * @memberof - MultiFeature
	        * @description - The selector for the MultiFeature's content items.
	        * @private
	        * @static
	        * @type {string}
	        */
	        MultiFeature.contentSelector = 'section > ul > li[role="tabpanel"], section > div > ul > li[role="tabpanel"]';
	        /**
	        * @name - activeItemClass
	        * @memberof - MultiFeature
	        * @description - The active item class name.
	        * @private
	        * @static
	        * @type {string}
	        */
	        MultiFeature.activeItemClass = 'f-active';
	        /**
	        * @name - ariaControls
	        * @memberof - MultiFeature
	        * @description - The aria-controls attribute name.
	        * @private
	        * @static
	        * @type {string}
	        */
	        MultiFeature.ariaControls = 'aria-controls';
	        return MultiFeature;
	    }(multi_slide_carousel_1.MultiSlideCarousel));
	    exports.MultiFeature = MultiFeature;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(20)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, sequenceIndicator_1) {
	    "use strict";
	    /**
	    * @class - LogoController
	    * @classdesc - The LogoController class.
	    *              This class extends the sequenceIndicator class to use logos instead of dots.
	    * @extends {SequenceIndicator}
	    * @export
	    */
	    var LogoController = (function (_super) {
	        __extends(LogoController, _super);
	        /**
	        * @name - constructor
	        * @memberof - LogoController
	        * @description - Constructor for the LogoController class.
	        * @param {HTMLElement} logoControllerElement - The native element to attach the LogoController behavior to.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function LogoController(logoControllerElement, params) {
	            if (params === void 0) { params = null; }
	            _super.call(this, logoControllerElement, params);
	            this.logoControllerElement = logoControllerElement;
	        }
	        /**
	        * @name - selector
	        * @memberof - LogoController
	        * @description - The LogoController component selector.
	        * @public
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        LogoController.selector = '.c-logo-controller';
	        /**
	        * @name - typeName
	        * @memberof - LogoController
	        * @description - The LogoController typename.
	        * @public
	        * @static
	        * @readonly
	        * @type {string}
	        */
	        LogoController.typeName = 'LogoController';
	        /**
	        * @name - itemSelector
	        * @memberof - LogoController
	        * @description - The selector for LogoController items.
	        * @protected
	        * @static
	        * @readonly
	        * @override
	        * @type {string}
	        */
	        LogoController.itemSelector = '[role="tab"]';
	        return LogoController;
	    }(sequenceIndicator_1.SequenceIndicator));
	    exports.LogoController = LogoController;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(6), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, publisher_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	     * @class - Pivot
	     * @classdesc - The Pivot component
	    * @extends {Publisher<IControllerSubscriber | IPivotSubscriber>}
	    * @implements {IController}
	     * @export
	     */
	    var Pivot = (function (_super) {
	        __extends(Pivot, _super);
	        /**
	        * @name - constructor
	        * @memberof - Pivot
	        * @description - Constructor for the Pivot component.
	        * @public
	        * @param {HTMLElement} pivotElement - The native element to attach the Pivot behavior to.
	        * @param {any} [params = null]- The parameter object with the class name to match against the MWF class
	        *                               attribute value to determine whether or not to initialize this element
	        *                               in the scope of the currently active constructor class hierarchy.
	        */
	        function Pivot(pivotElement, params) {
	            var _this = this;
	            if (params === void 0) { params = null; }
	            _super.call(this, pivotElement, params);
	            this.pivotElement = pivotElement;
	            /**
	            * @name - setControllerIndex
	            * @description - Implements IController's setControllerIndex method to set the pivot index.
	            * @public
	            * @param {number} toIndex - The desired new index.
	            * @param {boolean} [forceFocus = false] - Whether or not to force setting the focus to the new index element.
	            * @returns {boolean} - true if the index is changed, otherwise false.
	            */
	            this.setControllerIndex = function (toIndex, forceFocus) {
	                if (forceFocus === void 0) { forceFocus = false; }
	                if (!_this.pivotTabs || (toIndex < 0) || (toIndex >= _this.pivotTabs.length)) {
	                    return false;
	                }
	                _this.onPivotChanged(_this.pivotTabs[toIndex], forceFocus);
	                return true;
	            };
	            /**
	            * @name - onPivotClicked
	            * @description - Handles the pivot click events.
	            * @private
	            * @param {Event} event - The click event.
	            * @returns {void}
	            */
	            this.onPivotClicked = function (event) {
	                htmlExtensions_1.preventDefault(event);
	                _this.onPivotChanged(htmlExtensions_1.getEventTargetOrSrcElement(event));
	            };
	            /**
	            * @name - onKeydown
	            * @description - Handles the pivot keydown events.
	            * @private
	            * @param {KeyboardEvent} event - The keydown event.
	            * @returns {void}
	            */
	            this.onKeydown = function (event) {
	                var delta;
	                var keyCode = utility_1.getKeyCode(event);
	                var virtualKey = utility_1.getVirtualKey(event);
	                if ((keyCode === 13 /* Enter */) || (keyCode === 32 /* Space */) ||
	                    (virtualKey === 'Enter') || (virtualKey === ' ')) {
	                    htmlExtensions_1.preventDefault(event);
	                }
	                else if ((keyCode === 37 /* ArrowLeft */) || (virtualKey === 'ArrowLeft')) {
	                    delta = -1;
	                }
	                else if ((keyCode === 39 /* ArrowRight */) || (virtualKey === 'ArrowRight')) {
	                    delta = 1;
	                }
	                if (delta) {
	                    htmlExtensions_1.preventDefault(event);
	                    delta *= _this.isLtr ? 1 : -1;
	                    var targetPivot = void 0;
	                    for (var index = 0; index < _this.pivotTabs.length; index++) {
	                        if (_this.pivotTabs[index] === _this.activePivotHeader) {
	                            var targetIndex = index + delta;
	                            if (targetIndex >= _this.pivotTabs.length) {
	                                targetIndex = 0;
	                            }
	                            else if (targetIndex < 0) {
	                                targetIndex = _this.pivotTabs.length - 1;
	                            }
	                            targetPivot = _this.pivotTabs[targetIndex];
	                            break;
	                        }
	                    }
	                    if (targetPivot) {
	                        _this.onPivotChanged(targetPivot);
	                    }
	                }
	            };
	            if (observableComponent_1.ObservableComponent.shouldInitializeAsClass(pivotElement, params)) {
	                this.update();
	            }
	        }
	        /**
	        * @name - update
	        * @memberof - Pivot
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @override
	        * @returns {boolean}
	        */
	        Pivot.prototype.update = function () {
	            if (!this.pivotElement) {
	                return false;
	            }
	            this.pivots = [];
	            var pivots = htmlExtensions_1.selectElements('.c-pivot > section', this.element);
	            // We may have found nested pivots so filter out the pivots that aren't children of this component.
	            for (var _i = 0, pivots_1 = pivots; _i < pivots_1.length; _i++) {
	                var pivot = pivots_1[_i];
	                if (pivot.parentElement === this.element) {
	                    this.pivots.push(pivot);
	                }
	            }
	            this.pivotHeader = htmlExtensions_1.selectFirstElement('header', this.element);
	            if (this.pivots && this.pivots.length && !!this.pivotHeader) {
	                var activeTab = void 0;
	                this.pivotTabs = htmlExtensions_1.selectElements('header > a', this.pivotHeader);
	                if (this.pivotTabs && (this.pivotTabs.length > 1)) {
	                    for (var _a = 0, _b = this.pivotTabs; _a < _b.length; _a++) {
	                        var pivotTab = _b[_a];
	                        if (htmlExtensions_1.hasClass(pivotTab, Pivot.activePivotSelector)) {
	                            // Ensure that we only have one active pivot.
	                            if (!activeTab) {
	                                activeTab = pivotTab;
	                            }
	                            else {
	                                htmlExtensions_1.removeClass(pivotTab, Pivot.activePivotSelector);
	                            }
	                        }
	                        // Remove all tabs from the tab order, we will access via arrow keys
	                        pivotTab.setAttribute(Pivot.tabIndexAttribute, '-1');
	                        pivotTab.setAttribute('href', '#');
	                        pivotTab.setAttribute(Pivot.ariaSelected, 'false');
	                    }
	                    // Ensure that we have an activeTab
	                    if (!activeTab) {
	                        activeTab = this.pivotTabs[0];
	                    }
	                    this.isLtr = (htmlExtensions_1.getDirection(this.pivotHeader) === htmlExtensions_1.Direction.left);
	                    this.onPivotChanged(activeTab, false);
	                    htmlExtensions_1.addEvent(this.pivotHeader, htmlExtensions_1.eventTypes.click, this.onPivotClicked);
	                    htmlExtensions_1.addEvent(this.pivotHeader, htmlExtensions_1.eventTypes.keydown, this.onKeydown);
	                }
	            }
	            return true;
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @override
	        * @returns {void}
	        */
	        Pivot.prototype.teardown = function () {
	            // Remove the click listener.
	            if (this.pivotTabs && (this.pivotTabs.length > 1)) {
	                htmlExtensions_1.removeEvent(this.pivotHeader, htmlExtensions_1.eventTypes.click, this.onPivotClicked);
	                htmlExtensions_1.removeEvent(this.pivotHeader, htmlExtensions_1.eventTypes.click, this.onKeydown);
	            }
	            // Reset non static members
	            this.pivotHeader = null;
	            this.activePivotHeader = null;
	            this.pivots = null;
	            this.activePivot = null;
	        };
	        /**
	        * @name - onPivotChanged
	        * @description - Pivot changed handler.
	        * @private
	        * @param {HTMLElement} activePivotHeader - The pivot header to make active.
	        * @param [boolean] setFocus - Sets the focus to the pivot if true.  Default is true.
	        * @returns {void}
	        */
	        Pivot.prototype.onPivotChanged = function (activePivotHeader, setFocus) {
	            if (setFocus === void 0) { setFocus = true; }
	            if (!this.isDisabled()) {
	                if (!!activePivotHeader && (activePivotHeader !== this.activePivotHeader)) {
	                    this.updatePivot(activePivotHeader, setFocus);
	                }
	            }
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @override
	        * @param {IControllerSubscriber | IPivotSubscriber} subscriber - The subscriber to make the callback to.
	        * @param {any} context - The publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        Pivot.prototype.publish = function (subscriber, context) {
	            var pivotSubscriber = subscriber;
	            var controllerSubscriber = subscriber;
	            if (pivotSubscriber.onPivotChanged) {
	                pivotSubscriber.onPivotChanged(context);
	            }
	            if (controllerSubscriber.onControllerIndexChanged) {
	                controllerSubscriber.onControllerIndexChanged(context);
	            }
	        };
	        /**
	        * @name - updatePivot
	        * @description - Update the pivot header and content associated with the active pivot header.
	        * @private
	        * @param {HTMLElement} activePivotHeader - The pivot header to make active.
	        * @param {boolean} forceFocus - Whether or not to force setting the focus to the new index element.
	        * @returns {void}
	        */
	        Pivot.prototype.updatePivot = function (activePivotHeader, forceFocus) {
	            var isFocused = false;
	            var previousActiveHeader = this.activePivotHeader;
	            this.activePivotHeader = activePivotHeader;
	            if (!!this.activePivotHeader) {
	                var previousPivotId = previousActiveHeader ? previousActiveHeader.getAttribute('aria-controls') : null;
	                var pivotId = this.activePivotHeader ? this.activePivotHeader.getAttribute('aria-controls') : null;
	                var previousIndex = void 0;
	                var currentIndex = void 0;
	                for (var index = 0; index < this.pivotTabs.length; index++) {
	                    var pivotTab = this.pivotTabs[index];
	                    if (pivotTab === previousActiveHeader) {
	                        previousIndex = index;
	                        if (utility_1.isNumber(currentIndex)) {
	                            break;
	                        }
	                    }
	                    else if (pivotTab === activePivotHeader) {
	                        currentIndex = index;
	                        if (utility_1.isNumber(previousIndex)) {
	                            break;
	                        }
	                    }
	                }
	                if (previousActiveHeader) {
	                    htmlExtensions_1.removeClass(previousActiveHeader, Pivot.activePivotSelector);
	                    previousActiveHeader.setAttribute(Pivot.ariaSelected, 'false');
	                    // Take previousActiveHeader out the tab order
	                    previousActiveHeader.setAttribute(Pivot.tabIndexAttribute, '-1');
	                    // If focus is on the active element, we need to make sure we don't loose
	                    // focus when we change selected states.
	                    isFocused = document.activeElement === previousActiveHeader;
	                }
	                htmlExtensions_1.addClass(this.activePivotHeader, Pivot.activePivotSelector);
	                this.activePivotHeader.setAttribute(Pivot.ariaSelected, 'true');
	                // Put activeTab back into the tab order
	                this.activePivotHeader.removeAttribute(Pivot.tabIndexAttribute);
	                if (forceFocus || isFocused) {
	                    this.activePivotHeader.focus();
	                }
	                if (!!pivotId) {
	                    var activePivot = document.getElementById(pivotId);
	                    if (!!activePivot && (!this.activePivot || (this.activePivot !== activePivot))) {
	                        for (var _i = 0, _a = this.pivots; _i < _a.length; _i++) {
	                            var pivot = _a[_i];
	                            if (pivot === activePivot) {
	                                this.showPivot(pivot);
	                                this.activePivot = activePivot;
	                            }
	                            else {
	                                this.hidePivot(pivot);
	                            }
	                        }
	                    }
	                }
	                this.initiatePublish({
	                    previousIndex: previousIndex,
	                    currentIndex: currentIndex,
	                    activePivotId: pivotId,
	                    previousPivotId: previousPivotId
	                });
	            }
	        };
	        /**
	        * @name - showPivot
	        * @description - Show the specified pivot.
	        * @private
	        * @param {HTMLElement} pivot - The pivot to show.
	        * @returns {void}
	        */
	        Pivot.prototype.showPivot = function (pivot) {
	            if (!!pivot) {
	                pivot.setAttribute(Pivot.ariaHidden, 'false');
	            }
	        };
	        ;
	        /**
	        * @name - hidePivot
	        * @description - Hide the specified pivot.
	        * @private
	        * @param {HTMLElement} pivot - The pivot to hide.
	        * @returns {void}
	        */
	        Pivot.prototype.hidePivot = function (pivot) {
	            if (!!pivot) {
	                pivot.setAttribute(Pivot.ariaHidden, 'true');
	            }
	        };
	        ;
	        /**
	        * @name - isDisabled
	        * @description - Determines whether or not the Pivot is disabled.
	        * @private
	        * @returns {boolean} - True if the Pivot is disabled, otherwise false
	        */
	        Pivot.prototype.isDisabled = function () {
	            return this.pivotElement.getAttribute(Pivot.state) === Pivot.disabled;
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        Pivot.init = function (input) {
	            utility_1.apiDeprecated('Pivot.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Pivot,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	         * @name - selector
	        * @memberof - Pivot
	         * @description - The pivot component selector.
	         * @public
	        * @static
	        * @readonly
	         * @type {string}
	         */
	        Pivot.selector = '.c-pivot';
	        /**
	         * @name - tabIndexAttribute
	        * @memberof - Pivot
	         * @description - The tabIndex attribute name.
	         * @private
	        * @static
	        * @readonly
	         * @type {string}
	         */
	        Pivot.tabIndexAttribute = 'tabIndex';
	        /**
	         * @name - state
	        * @memberof - Pivot
	         * @description - The pivot state attribute name.
	         * @private
	        * @static
	        * @readonly
	         * @type {string}
	         */
	        Pivot.state = 'data-f-state';
	        /**
	         * @name - disabled
	        * @memberof - Pivot
	         * @description - The disabled pivot attribute value.
	         * @private
	        * @static
	        * @readonly
	         * @type {string}
	         */
	        Pivot.disabled = 'disabled';
	        /**
	         * @name - activePivotSelector
	        * @memberof - Pivot
	         * @description - The active pivot class selector.
	         * @private
	        * @static
	        * @readonly
	         * @type {string}
	         */
	        Pivot.activePivotSelector = 'f-active';
	        /**
	         * @name - ariaHidden
	        * @memberof - Pivot
	         * @description - aria-hidden attribute name.
	         * @private
	        * @static
	        * @readonly
	         * @type {string}
	         */
	        Pivot.ariaHidden = 'aria-hidden';
	        /**
	         * @name - ariaSelected
	        * @memberof - Pivot
	         * @description - aria-selected attribute name.
	         * @private
	         * @static
	        * @readonly
	         * @type {string}
	         */
	        Pivot.ariaSelected = 'aria-selected';
	        return Pivot;
	    }(publisher_1.Publisher));
	    exports.Pivot = Pivot;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name='pageBar'/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	     * The Page Bar module allows certain content to remain in the viewport in a fixed position (sticky) at the top
	     * as the user scrolls down the page.  The content is a thin bar (hence 'Page Bar') that may contain something like
	     * a page navigation, a 'buy now' button, etc.
	     * There are two configurations: with or without a scroll target element.
	     * 1)   The target element is an HTML element on the page.  When the user scrolls down the page so that element is above
	     *      the viewport, the page bar pops into view.
	     * 2)   If there is no target element, the page bar will pop into view once the user has scrolled down 800 pixels from
	     *      the top.
	     *
	     * @export
	     * @class PageBar
	     */
	    var PageBar = (function (_super) {
	        __extends(PageBar, _super);
	        /**
	         * @description - Creates an instance of PageBar.
	         *
	         * @param {HTMLElement} element - the seed element
	         */
	        function PageBar(element) {
	            var _this = this;
	            _super.call(this, element);
	            this.element = element;
	            /**
	             * The class used to indicate the page bar should be shown.
	             *
	             * @private
	             */
	            this.showClass = 'f-show';
	            /**
	             * The scroll distance without target.
	             * When there is no scroll target element, the page bar will appear after the user scrolls down 800 pixels.
	             *
	             * @private
	             * @type {number}
	             */
	            this.scrollDistanceWithoutTarget = 800;
	            /**
	             * @name - togglePageBar
	             * @description - Toggles the Page Bar.
	             *
	             * @private
	             * @returns {Void}
	             */
	            this.togglePageBar = function () {
	                var targetOffsetTop;
	                if (_this.scrollTarget) {
	                    targetOffsetTop = htmlExtensions_1.getClientRect(_this.scrollTarget).bottom;
	                }
	                else {
	                    targetOffsetTop = htmlExtensions_1.getClientRect(document.body).top + _this.scrollDistanceWithoutTarget;
	                }
	                targetOffsetTop <= 0
	                    ? htmlExtensions_1.addClass(_this.pageBar, _this.showClass)
	                    : htmlExtensions_1.removeClass(_this.pageBar, _this.showClass);
	            };
	            this.update();
	        }
	        /**
	         * @name - update
	         * @description - updates the component state
	         *
	         * @protected
	         * @returns {Void}
	         */
	        PageBar.prototype.update = function () {
	            if (!this.element || !this.element.id) {
	                return;
	            }
	            this.pageBar = this.element.cloneNode(true);
	            if (!this.pageBar || !this.pageBar.id) {
	                return;
	            }
	            // this.elementTarget being undefined is a legitimate scenario - do not abort if it is undefined
	            this.scrollTarget = htmlExtensions_1.selectFirstElement('[data-js-page-bar-target="' + this.pageBar.id + '"]');
	            this.element.removeAttribute('id');
	            htmlExtensions_1.addClass(this.pageBar, 'f-sticky');
	            htmlExtensions_1.removeClass(this.pageBar, 'f-hidden');
	            document.body.appendChild(this.pageBar);
	            this.scrollThrottledEventHandler = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.scroll, this.togglePageBar);
	        };
	        /**
	         * @name - teardown
	         * @description - cleans up the component
	         *
	         * @protected
	         * @returns {Void}
	         */
	        PageBar.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.scroll, this.scrollThrottledEventHandler);
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        PageBar.init = function (input) {
	            utility_1.apiDeprecated('PageBar.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: PageBar,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	         * The Page Bar CSS selector.
	         *
	         * @static
	         */
	        PageBar.selector = '.m-page-bar';
	        return PageBar;
	    }(observableComponent_1.ObservableComponent));
	    exports.PageBar = PageBar;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(43)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1, removeFocus_1) {
	    "use strict";
	    /**
	    * @class - PageBehaviors
	    * @classdesc - The MWF Binding Manager.
	    *              This is expected to be included at a page level if any of MWF exists on the page.
	    *              Runs common bindings on load and when new elements are added to the page.
	    * @export
	    */
	    var PageBehaviors = (function () {
	        /**
	        * @name - constructor
	        * @description - Constructor for the PageBehaviors component.
	        * @public
	        */
	        function PageBehaviors() {
	            var _this = this;
	            /**
	            * @name - executeCommonForAddedElementsFromEvent
	            * @description - Execute all common bindings that should be executed on an element from an event
	            * @public
	            * @param {Event} event - The DOMNodeInserted event
	            * @returns {void}
	            */
	            this.executeCommonForAddedElementsFromEvent = function (event) {
	                var htmlElement = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                if (!htmlElement) {
	                    return;
	                }
	                _this.executeCommonForAddedElements(htmlElement);
	            };
	            /**
	            * @name - executeCommonForAddedElements
	            * @description - Execute all common bindings that should be executed on an element
	            * @public
	            * @param {HTMLElement | Document} element - The element to bind all common events to.
	            * @returns {void}
	            */
	            this.executeCommonForAddedElements = function (element) {
	                if (!element) {
	                    return;
	                }
	                // All page level binds here:
	                removeFocus_1.removeFocus(element);
	            };
	            // Simulate moderizer's no-js/js class switching
	            htmlExtensions_1.removeClass(document.documentElement, 'no-js');
	            htmlExtensions_1.addClass(document.documentElement, 'js');
	            // Execute all common bindings on all elements within the document
	            this.executeCommonForAddedElements(document);
	            // Execute the observer for DOM changes to apply common bindings
	            this.watchForDomChangesToExecuteCommon();
	        }
	        /**
	        * @name - watchForDomChangesToExecuteCommon
	        * @description - Watch the document for changes, and run common methods against the changed elements
	        *                NOTE:  IE8 support not implemented/supported.
	        * @public
	        * @returns {void}
	        */
	        PageBehaviors.prototype.watchForDomChangesToExecuteCommon = function () {
	            var _this = this;
	            var observerConfig = {
	                childList: true,
	                subtree: true
	            };
	            // Modern support (Chrome, FF, IE11+)
	            if (typeof MutationObserver !== 'undefined') {
	                var observer = new MutationObserver(function (mutations) {
	                    for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
	                        var muation = mutations_1[_i];
	                        // Make calls based on added nodes to the DOM
	                        for (var key in muation.addedNodes) {
	                            if (muation.addedNodes[key].nodeType === 1) {
	                                _this.executeCommonForAddedElements(muation.addedNodes[key]);
	                            }
	                        }
	                    }
	                });
	                observer.observe(document, observerConfig);
	            }
	            else if (document.addEventListener) {
	                document.addEventListener('DOMNodeInserted', this.executeCommonForAddedElementsFromEvent, false);
	            }
	        };
	        return PageBehaviors;
	    }());
	    exports.PageBehaviors = PageBehaviors;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1) {
	    "use strict";
	    /**
	     * @name - whiteListFocusableComponents
	     * @description - the selectors of the components that should have the remove focus behavior
	     *
	     * @const
	     * @type {string}
	     */
	    var whiteListFocusableComponents = ['.c-action-toggle',
	        '.c-action-trigger',
	        '.m-back-to-top',
	        '.c-button',
	        '.c-button > span',
	        '.c-call-to-action',
	        '.c-content-toggle button',
	        '.c-checkbox [type=checkbox]',
	        '.c-date-time-picker button',
	        'div[data-date-time-picker] li',
	        '.c-drawer > button',
	        '.c-drawer > header > button',
	        '.c-dialog .c-glyph.glyph-cancel',
	        '.c-flipper',
	        '.c-hyperlink',
	        '.c-hyperlink > span',
	        '.c-in-page-navigation a',
	        '.c-link-navigation a.c-hyperlink',
	        '.c-menu-item',
	        '.c-menu-item > a',
	        '.c-menu-item > button',
	        '.c-navigation-menu button',
	        '.c-pagination li > a',
	        '.m-pagination li > a',
	        '.c-pivot a',
	        '.c-product-placement > a',
	        '.m-product-placement-item > a',
	        '.c-progress',
	        '.c-radio [type=radio]',
	        '.c-range-slider [role=slider]',
	        '.c-rating button.c-glyph',
	        '.c-refine-item',
	        'button.c-refine-item',
	        '.c-select-button',
	        '.c-select-menu > a',
	        '.c-select-menu > button',
	        '.c-sequence-indicator button[role=tab]',
	        '.c-social li > a',
	        '.c-social button',
	        '.m-social li > a',
	        '.m-social button',
	        '.c-slider button',
	        '.c-supplemental-nav button',
	        '.c-supplemental-nav a',
	        '.m-supplemental-nav button',
	        '.m-supplemental-nav a',
	        '.c-table th > button',
	        '.c-toggle button',
	        '.c-video',
	        '.c-universal-header a',
	        '.c-universal-header button',
	        '.f-video-controls > button'].toString();
	    /**
	     * @name - removeFocusOnPseudoElementList
	     * @description - array of objects describing the elements with pseudo-element that need multiple selectors and options
	     *                Note:  every class selector must also be present in the whiteListFocusableComponents array above
	     *
	     * @const
	     * @type {IRemoveFocusOnPseudoElement}
	     */
	    var removeFocusOnPseudoElementList = [
	        {
	            clickSelector: '.c-radio [type=radio] + span',
	            focusSelector: '.c-radio [type=radio]',
	            classSelector: '.c-radio [type=radio]',
	            preventDefault: true,
	            elementDoesNotGetFocus: false
	        },
	        {
	            clickSelector: '.c-checkbox [type=checkbox] + span',
	            focusSelector: '.c-checkbox [type=checkbox]',
	            classSelector: '.c-checkbox [type=checkbox]',
	            preventDefault: true,
	            elementDoesNotGetFocus: false
	        },
	        {
	            clickSelector: '.c-rating button.c-glyph',
	            focusSelector: '.c-rating button.c-glyph',
	            classSelector: '.c-rating button.c-glyph',
	            preventDefault: true,
	            elementDoesNotGetFocus: true
	        }
	    ];
	    /**
	     * @name - hiddenFocusClass
	     * @description - the CSS class to add to elements to remove the focus rectangle
	     *
	     * @const
	     * @type {string}
	     */
	    var hiddenFocusClass = 'x-hidden-focus';
	    /**
	     * @name - pseudoElementSelectors
	     * @description - the pseudo-element selectors; this exists so they can be looped through only one time
	     *
	     * @type {string}
	     */
	    var pseudoElementSelectors = '';
	    /**
	     * @name - lastPseudoElementParent
	     * @description - the last pseudo element parent element to be examined; this exists so elements don't get bound more than once
	     *
	     * @type {HTMLElement}
	     */
	    var lastPseudoElementParent;
	    /**
	     * @name - removeFocus
	     * @description - Remove the focus state outline on click events for the whitelist of MWF components, and restore on blur or keydown
	     * @param {HTMLElement | Document} [element] - The element to focus the context of the query for removing the focus state outline.
	     * @returns {Void}
	     */
	    function removeFocus(element) {
	        if (pseudoElementSelectors.length < 1) {
	            for (var index = 0; index < removeFocusOnPseudoElementList.length; index++) {
	                pseudoElementSelectors += removeFocusOnPseudoElementList[index].classSelector;
	                // add a comma after every element except the last one
	                if (index !== removeFocusOnPseudoElementList.length - 1) {
	                    pseudoElementSelectors += ',';
	                }
	            }
	        }
	        var actionComponents = !element || element === document
	            ? document.querySelectorAll(whiteListFocusableComponents)
	            : element.querySelectorAll && element.parentElement ? element.parentElement.querySelectorAll(whiteListFocusableComponents) : null;
	        if (!actionComponents || !actionComponents.length) {
	            return;
	        }
	        for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(actionComponents); _i < _a.length; _i++) {
	            var component = _a[_i];
	            addEventHandlersForRemovingFocus(component);
	        }
	    }
	    exports.removeFocus = removeFocus;
	    /**
	     * @name - addEventHandlersForRemovingFocus
	     * @description - Add events to focus, blur, and mousedown that remove and return the focus outline from the passed HTMLElement.
	     * @param {HTMLElement} element - The element to attach the events and remove focus outline function upon.
	     * @returns {Void}
	     */
	    function addEventHandlersForRemovingFocus(element) {
	        if (element.type !== 'text',
	            element.type !== 'textarea',
	            element.type !== 'password') {
	            var pseudoElement_1;
	            var clickElements = [element];
	            var focusElements_1 = [element];
	            var parent_1 = element.parentElement || null;
	            // are we in a pseudo-element case?
	            if (parent_1 && htmlExtensions_1.selectElements(pseudoElementSelectors, parent_1).length) {
	                if (parent_1 === lastPseudoElementParent) {
	                    // we've already set all the sibling elements so this element is already bound to events
	                    return;
	                }
	                // yes we're in a pseudo-element case, need to figure out which one and what rules to follow
	                for (var _i = 0, removeFocusOnPseudoElementList_1 = removeFocusOnPseudoElementList; _i < removeFocusOnPseudoElementList_1.length; _i++) {
	                    var pseudoElementEntry = removeFocusOnPseudoElementList_1[_i];
	                    if (htmlExtensions_1.selectElements(pseudoElementEntry.classSelector, parent_1).length) {
	                        pseudoElement_1 = pseudoElementEntry;
	                        clickElements.splice(0);
	                        focusElements_1.splice(0);
	                        var pseudoClickElements = htmlExtensions_1.selectElements(pseudoElement_1.clickSelector, parent_1);
	                        for (var _a = 0, pseudoClickElements_1 = pseudoClickElements; _a < pseudoClickElements_1.length; _a++) {
	                            var pseudoClickElement = pseudoClickElements_1[_a];
	                            clickElements.push(pseudoClickElement);
	                        }
	                        var pseudoFocusElements = htmlExtensions_1.selectElements(pseudoElement_1.focusSelector, parent_1);
	                        for (var _b = 0, pseudoFocusElements_1 = pseudoFocusElements; _b < pseudoFocusElements_1.length; _b++) {
	                            var pseudoFocusElement = pseudoFocusElements_1[_b];
	                            focusElements_1.push(pseudoFocusElement);
	                        }
	                        lastPseudoElementParent = parent_1;
	                        break;
	                    }
	                }
	            }
	            var _loop_1 = function(clickElementIndex, clickElementsLength) {
	                htmlExtensions_1.addEvent(clickElements[clickElementIndex], htmlExtensions_1.eventTypes.mousedown, function (event) { hideFocus(event, focusElements_1[clickElementIndex], pseudoElement_1); });
	            };
	            for (var clickElementIndex = 0, clickElementsLength = clickElements.length; clickElementIndex < clickElementsLength; clickElementIndex++) {
	                _loop_1(clickElementIndex, clickElementsLength);
	            }
	            // return focus on blur and on keydown to handle situations such as slider
	            // where a keydown event should return the focus rectangle for the user
	            if (pseudoElement_1 && pseudoElement_1.elementDoesNotGetFocus) {
	                var _loop_2 = function(focusElement) {
	                    htmlExtensions_1.addEvents(focusElements_1, 'mousedown keydown', function () { returnFocusBasedOnEventTarget(event, focusElement); });
	                };
	                for (var _c = 0, focusElements_2 = focusElements_1; _c < focusElements_2.length; _c++) {
	                    var focusElement = focusElements_2[_c];
	                    _loop_2(focusElement);
	                }
	            }
	            else {
	                for (var _d = 0, focusElements_3 = focusElements_1; _d < focusElements_3.length; _d++) {
	                    var focusElement = focusElements_3[_d];
	                    htmlExtensions_1.addEvents(focusElements_1, 'blur keydown', function () { returnFocus(element); });
	                }
	            }
	        }
	    }
	    /**
	     * @name - hideFocus
	     * @description - adds the hiddenFocusClass on the element and possibly calls event.preventDefault
	     *
	     * @param {MouseEvent} event - the mouse event
	     * @param {HTMLElement} element - the element to remove focus from
	     * @param [IRemoveFocusOnPseudoElement] pseudoElement - the IRemoveFocusOnPseudoElement object (optional)
	     * @returns {Void}
	     */
	    function hideFocus(event, element, pseudoElement) {
	        htmlExtensions_1.addClass(element, hiddenFocusClass);
	        if (pseudoElement && pseudoElement.preventDefault) {
	            // prevent blur from firing to avoid the situation of clicking on an already-selected element
	            // and having the focus rectangle return because the this handler fires, then the blur handler fires
	            event.preventDefault();
	        }
	        if (pseudoElement && pseudoElement.elementDoesNotGetFocus) {
	            element.focus();
	        }
	    }
	    /**
	     * @name - returnFocus
	     * @description - removes the hiddenFocusClass on the element
	     *
	     * @param {HTMLElement} element - the element to return focus to
	     * @returns {Void}
	     */
	    function returnFocus(element) {
	        htmlExtensions_1.removeClass(element, hiddenFocusClass);
	    }
	    /**
	     * @name - returnFocusBasedOnEventTarget
	     * @description - removes the hiddenFocusClass on the element based on the event target
	     *
	     * @param {Event} event
	     * @param {HTMLElement} element
	     * @returns {Void}
	     */
	    function returnFocusBasedOnEventTarget(event, element) {
	        var eventTarget = htmlExtensions_1.getEventTargetOrSrcElement(event);
	        if (eventTarget !== element) {
	            returnFocus(element);
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name='pagination'/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, publisher_1, componentFactory_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - Pagination
	    * @classdesc - The Pagination component
	    * @export
	    */
	    var Pagination = (function (_super) {
	        __extends(Pagination, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Pagination component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the Pagination behavior to.
	        */
	        function Pagination(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - page
	            * @description - The zero based current page, or -1 if no valid page has been set.
	            * @private
	            * @type {number}
	            */
	            this.page = -1;
	            /**
	            * @name - handleClickEvent
	            * @description - Handles the pagination click events and calls handleButtonClick or setActivePage which do the real work.
	            * @private
	            * @param {Event} event - The click event.
	            * @returns {void}
	            */
	            this.handleClickEvent = function (event) {
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                if (htmlExtensions_1.hasClass(target, 'c-glyph')) {
	                    _this.handleButtonClick(target.parentElement);
	                }
	                else {
	                    _this.setActivePage(_this.getPageFromElement(target.parentElement), true, true);
	                }
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        Pagination.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            // Get the page elements
	            this.pages = htmlExtensions_1.selectElements(Pagination.pageClassSelector, this.element);
	            // pagination behavior only makes sense if there are at least two pages
	            if (this.pages.length < 2) {
	                return;
	            }
	            var buttons = htmlExtensions_1.selectElements(Pagination.buttonsClassSelector, this.element);
	            if (buttons.length !== 2) {
	                return;
	            }
	            this.previousButton = buttons[0].parentElement;
	            this.nextButton = buttons[1].parentElement;
	            // Add click listener.
	            htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.click, this.handleClickEvent);
	            var activeItems = htmlExtensions_1.selectElements(Pagination.activeClassSelector, this.element);
	            if (!activeItems || activeItems.length === 0) {
	                activeItems = this.pages;
	            }
	            this.setActivePage(this.getPageFromElement(activeItems[0]), true, false);
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        Pagination.prototype.teardown = function () {
	            // Remove the click listener.
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.click, this.handleClickEvent);
	            // Reset non static members.
	            this.page = -1;
	            this.pages = null;
	            this.activeItem = null;
	            this.previousButton = null;
	            this.nextButton = null;
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {IPaginationSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        Pagination.prototype.publish = function (subscriber, context) {
	            if (subscriber.onPageChanged) {
	                subscriber.onPageChanged(context);
	            }
	        };
	        /**
	        * @name - getPage
	        * @description - Gets the zero based page index of the active page.
	        * @public
	        * @returns {number} - The index of the current page, or -1.
	        */
	        Pagination.prototype.getPage = function () {
	            return this.page;
	        };
	        /**
	        * @name - setPage
	        * @description - Sets the current page.
	        * @public
	        * @param {number} page - The zero based index of the desired page.
	        * @returns {boolean} - True if the active page is successfully changed, otherwise false.
	        */
	        Pagination.prototype.setPage = function (page) {
	            return this.setActivePage(page, false, false);
	        };
	        /**
	        * @name - handleButtonClick
	        * @description - Handles a click on the 'next' or 'previous' button.
	        * @private
	        * @param {HTMLElement} target - The clicked element.
	        * @returns {void}
	        */
	        Pagination.prototype.handleButtonClick = function (target) {
	            var isNext = target === this.nextButton;
	            var isPrevious = target === this.previousButton;
	            var page = this.getPage();
	            if (!isNext && !isPrevious) {
	                return;
	            }
	            this.setActivePage((page === -1) ? 0 : (isNext ? page + 1 : page - 1), true, true);
	        };
	        /**
	        * @name - setActivePage
	        * @description - Sets the specified page to be the active one.
	        * @private
	        * @param {number} page - The zero based index of the desired page.
	        * @param {boolean} internal - The origin page change.
	        * @param {boolean} userInitiated - Whether or not the page change was user initiated.
	        * @returns {boolean} - True if the active page is successfully changed, otherwise false.
	        */
	        Pagination.prototype.setActivePage = function (page, internal, userInitiated) {
	            var priorPage = this.getPage();
	            if (!utility_1.isNumber(page) || !this.pages ||
	                !(page >= 0) || !(page < this.pages.length) ||
	                (page === priorPage)) {
	                return false;
	            }
	            if (!!this.activeItem) {
	                // Step 1 - Deactivate the old active item
	                // Take the active item and swap out its data label and href, and remove the active class.
	                var activeLink_1 = this.activeItem.firstElementChild;
	                var ariaLabel_1 = this.activeItem.getAttribute(Pagination.dataLabel);
	                var href_1 = activeLink_1.getAttribute(Pagination.dataHref);
	                this.activeItem.setAttribute(Pagination.dataLabel, activeLink_1.getAttribute(Pagination.ariaLabel));
	                activeLink_1.setAttribute(Pagination.dataLabel, ariaLabel_1);
	                if (!!href_1) {
	                    activeLink_1.setAttribute(Pagination.href, href_1);
	                    activeLink_1.removeAttribute(Pagination.dataHref);
	                }
	                htmlExtensions_1.removeClass(this.activeItem, Pagination.activeClass);
	            }
	            // Step 2 - Prepare the new item
	            // Create a new span, give it the aria label from the item's data label, and remove the click event handler
	            var newActiveItem = this.pages[page];
	            var activeLink = newActiveItem.firstElementChild;
	            var ariaLabel = newActiveItem.getAttribute(Pagination.dataLabel);
	            var href = activeLink.getAttribute(Pagination.href);
	            newActiveItem.setAttribute(Pagination.dataLabel, activeLink.getAttribute(Pagination.ariaLabel));
	            activeLink.setAttribute(Pagination.dataLabel, ariaLabel);
	            if (!!href) {
	                activeLink.setAttribute(Pagination.dataHref, href);
	                // Remove the new active page's href after giving it a chance to navigate away if it wishes to do so.
	                setTimeout(function () { activeLink.removeAttribute(Pagination.href); }, 0);
	            }
	            htmlExtensions_1.addClass(newActiveItem, Pagination.activeClass);
	            this.activeItem = newActiveItem;
	            this.page = page;
	            this.updateButtons();
	            // Step 4 - Call the consumer callback to let them know there's a new active item
	            this.initiatePublish({ page: page, priorPage: priorPage, internal: internal, userinitiated: userInitiated });
	            return true;
	        };
	        /**
	        * @name - updateButtons
	        * @description - Updates the previous and next buttons.
	        * @private
	        * @returns {void}
	        */
	        Pagination.prototype.updateButtons = function () {
	            var activePage = this.getPage();
	            if (activePage !== -1) {
	                if (activePage === 0) {
	                    htmlExtensions_1.addClass(this.previousButton, Pagination.hideClass);
	                }
	                else {
	                    htmlExtensions_1.removeClass(this.previousButton, Pagination.hideClass);
	                }
	                if (activePage === this.pages.length - 1) {
	                    htmlExtensions_1.addClass(this.nextButton, Pagination.hideClass);
	                }
	                else {
	                    htmlExtensions_1.removeClass(this.nextButton, Pagination.hideClass);
	                }
	            }
	        };
	        /**
	        * @name - getPageFromElement
	        * @description - Gets the current page index from the specified page element.
	        * @private
	        * @param {HTMLElement} element - The element to get the page index for.
	        * @returns {number} - The index of the current page, or -1.
	        */
	        Pagination.prototype.getPageFromElement = function (element) {
	            return (!this.pages || !element) ? -1 : this.pages.indexOf(element);
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        Pagination.init = function (input) {
	            utility_1.apiDeprecated('Pagination.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Pagination,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - The pagination component selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Pagination.selector = '.m-pagination';
	        /**
	        * @name - pageClassSelector
	        * @description - The page class.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Pagination.pageClassSelector = 'li[data-label]';
	        /**
	        * @name - buttonsClassSelector
	        * @description - The buttons class.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Pagination.buttonsClassSelector = '.c-glyph';
	        /**
	        * @name - activeClass
	        * @description - Active item class.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Pagination.activeClass = 'f-active';
	        /**
	        * @name - activeClassSelector
	        * @description - The active item class selector.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Pagination.activeClassSelector = '.' + Pagination.activeClass;
	        /**
	        * @name - hideClass
	        * @description - Hidden item class.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Pagination.hideClass = 'f-hide';
	        /**
	        * @name - ariaLabel
	        * @description - aria-label element attribute.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Pagination.ariaLabel = 'aria-label';
	        /**
	        * @name - dataLabel
	        * @description - data-label element attribute.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Pagination.dataLabel = 'data-label';
	        /**
	        * @name - dataHref
	        * @description - data-href element attribute.
	        *                This attribute will hold the href value while the <a> is the current page.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Pagination.dataHref = 'data-href';
	        /**
	        * @name - href
	        * @description - href element attribute.
	        *                This attribute will hold the href value while the <a> is not the current page.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Pagination.href = 'href';
	        return Pagination;
	    }(publisher_1.Publisher));
	    exports.Pagination = Pagination;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="productPlacement"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(3), __webpack_require__(4), __webpack_require__(10), __webpack_require__(46)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, observableComponent_1, htmlExtensions_1, utility_1, handleImageError_1) {
	    "use strict";
	    /**
	    * @class - ProductPlacement
	    * @classdesc - The ProductPlacement component
	    * @export
	    */
	    var ProductPlacement = (function (_super) {
	        __extends(ProductPlacement, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the ProductPlacement component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the ProductPlacement behavior to.
	        */
	        function ProductPlacement(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - onWindowResize
	            * @description - Handles the window resize event. Calls onResize to do the real work.
	            * @private
	            * @param {UIEvent} event - The resize event.
	            * @returns {void}
	            */
	            this.onWindowResize = function (event) {
	                _this.onResize();
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        ProductPlacement.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            this.carousel = htmlExtensions_1.selectFirstElement('.c-carousel', this.element);
	            this.products = htmlExtensions_1.selectFirstElement('ul', this.element);
	            this.seeAll = htmlExtensions_1.selectFirstElement('[class^="c-heading"] .c-hyperlink[aria-label]', this.element);
	            var headingElement = this.seeAll ? this.seeAll.parentElement : null;
	            // select all default images and set up image error handling
	            var images = htmlExtensions_1.selectElements('.f-default-image img', this.element);
	            var _loop_1 = function(image) {
	                if (!htmlExtensions_1.isImageLoadedSuccessfully(image)) {
	                    // go up the DOM tree to find the product placement item
	                    var productPlacementItemFound = false;
	                    var productPlacementItem = image;
	                    while (!productPlacementItemFound) {
	                        if (!productPlacementItem.parentElement) {
	                            break;
	                        }
	                        productPlacementItem = productPlacementItem.parentElement;
	                        if (htmlExtensions_1.hasClass(productPlacementItem, 'm-product-placement-item')) {
	                            productPlacementItemFound = true;
	                        }
	                    }
	                    if (productPlacementItemFound) {
	                        var context_1;
	                        if (htmlExtensions_1.hasClass(productPlacementItem, 'context-app')) {
	                            context_1 = 1 /* app */;
	                        }
	                        else if (htmlExtensions_1.hasClass(productPlacementItem, 'context-person')) {
	                            context_1 = 2 /* person */;
	                        }
	                        else if (htmlExtensions_1.hasClass(productPlacementItem, 'context-video')) {
	                            context_1 = 3 /* video */;
	                        }
	                        else {
	                            context_1 = 0 /* generic */;
	                        }
	                        var imageSize_1 = htmlExtensions_1.hasClass(productPlacementItem, 'f-size-small') ? 1 /* small */ : 0 /* large */;
	                        // image has not loaded - it could be in one of two states:
	                        // 1) the image is still in the process of loading, or
	                        // 2) the image has finished loading and encountered an error in the past
	                        if (image.complete) {
	                            // image finished loading - there must have been an error in the past
	                            handleImageError_1.handleImageError(image, imageSize_1, context_1);
	                        }
	                        else {
	                            // image is still loading - there may or may not be an error in the future
	                            // set onerror in case there is a problem 
	                            image.onerror = function () {
	                                handleImageError_1.handleImageError(image, imageSize_1, context_1);
	                            };
	                        }
	                    }
	                }
	            };
	            for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
	                var image = images_1[_i];
	                _loop_1(image);
	            }
	            if (!!this.carousel && !!this.products && !!this.seeAll && !htmlExtensions_1.hasClass(headingElement, ProductPlacement.showAllAlwaysClass)) {
	                this.onResize();
	                this.resizeListener = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.resize, this.onWindowResize);
	            }
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        ProductPlacement.prototype.teardown = function () {
	            // Remove the click listener.
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.resize, this.resizeListener);
	            // Reset non static members
	            this.carousel = null;
	            this.products = null;
	            this.seeAll = null;
	            this.resizeListener = null;
	        };
	        /**
	        * @name - onResize
	        * @description - Handles the productplacement resizing.
	        * @private
	        * @returns {void}
	        */
	        ProductPlacement.prototype.onResize = function () {
	            if (!!this.carousel && !!this.products && !!this.seeAll) {
	                var carouselWidth = utility_1.getDimensions(this.carousel).width;
	                var productsWidth = utility_1.getDimensions(this.products).width;
	                if (productsWidth < carouselWidth) {
	                    this.seeAll.setAttribute(ProductPlacement.ariaHidden, 'true');
	                }
	                else {
	                    this.seeAll.removeAttribute(ProductPlacement.ariaHidden);
	                }
	            }
	        };
	        ;
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        ProductPlacement.init = function (input) {
	            utility_1.apiDeprecated('ProductPlacement.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: ProductPlacement,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - The ProductPlacement module selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        ProductPlacement.selector = '.m-product-placement';
	        /**
	        * @name - ariaHidden
	        * @description - aria-hidden attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        ProductPlacement.ariaHidden = 'aria-hidden';
	        /**
	         * @name - showAllAlwaysClass
	         * @description - A class that will display 'show all' heading irrespective of the number of items in product placement,
	         *                if it's applied to the element.
	         *
	         * @private
	         * @static
	         *
	         * @memberOf ProductPlacement
	         * @type {string}
	         */
	        ProductPlacement.showAllAlwaysClass = 'js-product-placement-persist-show-all';
	        return ProductPlacement;
	    }(observableComponent_1.ObservableComponent));
	    exports.ProductPlacement = ProductPlacement;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="handleImageError"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1) {
	    "use strict";
	    // To support IE/Edge browsers, the SVGs have to be url-encoded; however, it turns out only a few characters actually need to be encoded. 
	    // For example:  '%20' is heavier than ' ' so not encoding the spaces is an optimization.
	    // See:  https://css-tricks.com/probably-dont-base64-svg/ and https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
	    // TODO: 9741630 - further optimize SVG strings
	    /**
	     * @name - appSvg
	     * @description - SVG-version of the app default image --> core\images\content-images\app-glyph-default-large.png
	     * @const
	     * @type {string}
	     */
	    var appSvg = "data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 60 60' style='enable-background:new 0 0 60 60%3B' xml:space='preserve'%3E%3Cstyle %3E.st0%7Bfill:%23FFF%3B%7D%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M0 0 h60 v32 H32 v28 H0 V0 z M28 28 V4 H4 v24 H28 z M28 56 V32 H4 v24 H28 z M56 28 V4 H32 v24 H56 z'/%3E%3C/g%3E%3C/svg%3E";
	    /**
	     * @name - genericSvg
	     * @description - SVG-version of the generic default image --> core\images\content-images\generic-glyph-default-large.png
	     * @const
	     * @type {string}
	     */
	    var genericSvg = "data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 64 64' style='enable-background:new 0 0 64 64%3B' xml:space='preserve'%3E%3Cstyle %3E.st0%7Bfill:%23FFF%3B%7D%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M64,8v48H0V8H64z M4,12v21.2l14-14l20,20l8-8l14,14V12H4z M4,52h41.2L18,24.8l-14,14V52z M60,52v-1.2l-14-14 L40.8,42l10,10H60z M50,24c-0.5,0-1-0.2-1.4-0.6C48.2,23,48,22.5,48,22s0.2-1,0.6-1.4C49,20.2,49.5,20,50,20s1,0.2,1.4,0.6 C51.8,21,52,21.5,52,22s-0.2,1-0.6,1.4C51,23.8,50.5,24,50,24z'/%3E%3C/g%3E%3C/svg%3E";
	    /**
	     * @name - personSvg
	     * @description - SVG-version of the person (artist) default image --> core\images\content-images\artist-glyph-default-large.png
	     * @const
	     * @type {string}
	     */
	    var personSvg = "data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 64 64' style='enable-background:new 0 0 64 64%3B' xml:space='preserve'%3E%3Cstyle %3E.st0%7Bfill:%23FFF%3B%7D%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M41.7,37.9c2.8,1,5.3,2.3,7.6,4.1c2.3,1.8,4.2,3.8,5.7,6c1.6,2.3,2.8,4.7,3.7,7.5c0.8,2.8,1.2,5.5,1.2,8.5h-4 c0-3.4-0.6-6.5-1.8-9.4c-1.2-2.9-2.9-5.4-4.9-7.5s-4.6-3.8-7.5-4.9c-3-1.3-6.1-1.9-9.5-1.9c-2.2,0-4.4,0.3-6.3,0.8 c-2,0.5-4,1.4-5.7,2.4c-1.8,1-3.4,2.3-4.7,3.8c-1.4,1.4-2.7,3.1-3.7,4.7c-1,1.7-1.8,3.7-2.4,5.7S8.5,61.8,8.5,64h-4%09c0-3,0.4-5.8,1.3-8.5c0.9-2.7,2.1-5.2,3.7-7.4c1.6-2.3,3.5-4.3,5.7-6s4.7-3.1,7.5-4.2c-1.6-0.9-3.1-1.9-4.4-3.2%09c-1.3-1.3-2.4-2.6-3.3-4.2c-0.9-1.6-1.6-3.2-2.1-4.8c-0.4-1.7-0.6-3.5-0.6-5.2c0-2.8,0.5-5.3,1.6-7.7c1-2.4,2.5-4.4,4.3-6.3%09c1.8-1.9,3.9-3.2,6.3-4.3c2.4-1,4.9-1.6,7.7-1.6c2.8,0,5.3,0.5,7.7,1.6c2.4,1,4.4,2.5,6.3,4.3s3.2,3.9,4.3,6.3 c1,2.4,1.6,4.9,1.6,7.7c0,1.8-0.2,3.6-0.7,5.2c-0.5,1.7-1.2,3.4-2.1,4.8c-0.9,1.5-2,2.9-3.3,4.2C44.6,36,43.3,37,41.7,37.9z M16.4,20.5c0,2.2,0.4,4.3,1.3,6.1s2,3.6,3.4,5c1.4,1.4,3.1,2.6,5,3.4c2,0.8,4,1.3,6.1,1.3c2.2,0,4.3-0.4,6.1-1.3 c1.9-0.9,3.6-2,5-3.4c1.4-1.4,2.6-3.1,3.4-5s1.3-4,1.3-6.1s-0.4-4.3-1.3-6.1s-2-3.6-3.4-5c-1.4-1.4-3.1-2.6-5-3.4 c-2-0.8-4-1.3-6.1-1.3c-2.2,0-4.3,0.4-6.1,1.3s-3.6,2-5,3.4c-1.4,1.4-2.6,3.1-3.4,5S16.4,18.3,16.4,20.5z'/%3E%3C/g%3E%3C/svg%3E";
	    /**
	     * @name - videoSvg
	     * @description - SVG-version of the video (movie) default image --> core\images\content-images\movie-glyph-default-large.png
	     * @const
	     * @type {string}
	     */
	    var videoSvg = "data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 64 64' style='enable-background:new 0 0 64 64%3B' xml:space='preserve'%3E%3Cstyle %3E.st0%7Bfill:%23FFF%3B%7D%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M0,10h64v44H0V10z M60,50V14h-4v4h-4v-4H12v4H8v-4H4v36h4v-4h4v4h40v-4h4v4H60z M8,26v-4h4v4H8z M8,34v-4h4v4 H8z M8,42v-4h4v4H8z M52,26v-4h4v4H52z M52,34v-4h4v4H52z M52,42v-4h4v4H52z'/%3E%3C/g%3E%3C/svg%3E";
	    /**
	     * @name - smallSize
	     * @description - size (in pixels) for the small version of each SVG
	     * @const
	     * @type {string}
	     */
	    var smallSize = 24;
	    /**
	     * @name - largeSize
	     * @description - size (in pixels) for the large version of each SVG
	     * @const
	     * @type {string}
	     */
	    var largeSize = 57;
	    /**
	     * @name - handleImageError
	     * @description - handles image errors (replaces handle-img-error.js) by replacing the default image with a vector graphic
	     * @export
	     * @param {HTMLImageElement} target - the target image that needs to be replaced
	     * @param {GraphicSize} size - the size of the graphic to be replaced (small or large)
	     * @param [GraphicType] graphicType - optional: the type of vector graphic to use (app, image, person, or video), default is image
	     * @returns {void}
	     */
	    function handleImageError(target, size, graphicType) {
	        if (size === void 0) { size = 0 /* large */; }
	        var dimensions;
	        // using switch-case for extensibility, in case new sizes are ever added
	        switch (size) {
	            case 1 /* small */:
	                dimensions = smallSize;
	                break;
	            case 0 /* large */:
	            default:
	                dimensions = largeSize;
	                break;
	        }
	        handleImageErrorCustomDimensions(target, dimensions, graphicType);
	    }
	    exports.handleImageError = handleImageError;
	    /**
	     * @name - handleImageErrorCustomDimensions
	     * @description - handles image errors (replaces handle-img-error.js) by replacing the default image with a vector graphic,
	     *                allowing the user to set custom SVG dimensions if desired
	     * @export
	     * @param {HTMLImageElement} target - the target image that needs to be replaced
	     * @param {number} dimensions - the size of the graphic to be replaced (in pixels)
	     *                              the SVG will be square so this value will set height and width
	     *                              if no dimensions are provided or value of less than 1 is provided, then will default to large size (57px)
	     * @param [GraphicType] graphicType - optional: the type of vector graphic to use (app, image, person, or video), default is image
	     * @returns {void}
	     */
	    function handleImageErrorCustomDimensions(target, dimensions, graphicType) {
	        if (dimensions === void 0) { dimensions = largeSize; }
	        if (graphicType === void 0) { graphicType = 0 /* generic */; }
	        if (!target) {
	            return;
	        }
	        // default to large size if invalid value provided (null, undefinied, or if value is less than 1)
	        dimensions = dimensions && dimensions > 0 ? dimensions : largeSize;
	        if (target.parentElement) {
	            var siblings = htmlExtensions_1.selectElements('source', target.parentElement);
	            for (var _i = 0, siblings_1 = siblings; _i < siblings_1.length; _i++) {
	                var sibling = siblings_1[_i];
	                sibling.srcset = '';
	            }
	        }
	        target.srcset = '';
	        target.src = getVectorGraphic(graphicType);
	        if (target.src.length) {
	            htmlExtensions_1.css(target, 'height', dimensions + "px");
	            htmlExtensions_1.css(target, 'width', dimensions + "px");
	        }
	    }
	    exports.handleImageErrorCustomDimensions = handleImageErrorCustomDimensions;
	    /**
	     * @name - getVectorGraphic
	     * @description - creates the vector graphic markup to be used in the img src
	     * @param {GraphicType} graphic - the type of vector graphic to use
	     * @returns {string} - the src value with the vector graphic
	     */
	    function getVectorGraphic(graphic) {
	        switch (graphic) {
	            case 1 /* app */:
	                return appSvg;
	            case 2 /* person */:
	                return personSvg;
	            case 3 /* video */:
	                return videoSvg;
	            case 0 /* generic */:
	            default:
	                return genericSvg;
	        }
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="refineMenu"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(48), __webpack_require__(29), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, refineItem_1, breakpointTracker_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - RefineMenu
	    * @classdesc - The RefineMenu component
	    * @export
	    */
	    var RefineMenu = (function (_super) {
	        __extends(RefineMenu, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the RefineMenu component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the RefineMenu behavior to.
	        */
	        function RefineMenu(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - onBreakpointChanged
	            * @description - The breakpoint tracker notification method.
	            *                This collapses the menu when the window width is less than breakpoint 2.
	            * @private
	            * @param {IBreakpointTrackerNotification} notification - The notificatio.
	            * @returns {Void}
	            */
	            this.onBreakpointChanged = function (notification) {
	                notification.breakpoint < 2 ? _this.expandMenu(false) : _this.expandMenu(true);
	            };
	            /**
	            * @name - handleMenuClick
	            * @description - Based on where in the refineMenu the user clicks, preform an action.
	            * @private
	            * @param {Event} event - The click event.
	            * @returns {void}
	            */
	            this.handleMenuClick = function (event) {
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                switch (target) {
	                    case _this.collapseButton:
	                        _this.expandMenu(false);
	                        break;
	                    case _this.expandButton:
	                        _this.expandMenu(true);
	                        break;
	                    default:
	                        _this.manageRadioGroupClick(target);
	                }
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        RefineMenu.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            this.collapseButton = htmlExtensions_1.selectFirstElement('.c-heading + button.c-action-trigger', this.element);
	            this.expandButton = htmlExtensions_1.selectFirstElement('[data-mobile-target] + button.c-action-trigger', this.element);
	            this.mobileTarget = htmlExtensions_1.selectFirstElement('[data-mobile-target]', this.element);
	            if (!this.collapseButton || !this.expandButton || !this.mobileTarget) {
	                return;
	            }
	            // Get all menu items for the menu
	            this.getRefineMenuItems();
	            // Subscribe to breakpoint tracker
	            breakpointTracker_1.BreakpointTracker.getBreakpointTracker().subscribe({ onBreakpointChanged: this.onBreakpointChanged });
	            // Add click event for the menu
	            htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.click, this.handleMenuClick);
	            // Invoke the breakpoint changed handler to trigger the breakpoint resize logic in order
	            // to ensure the refine-menu is initialized in the proper expanded or collapsed state.
	            this.onBreakpointChanged({
	                breakpoint: breakpointTracker_1.BreakpointTracker.getBreakpointTracker().getBreakpoint(),
	                width: 0
	            });
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        RefineMenu.prototype.teardown = function () {
	            // Remove the click listener.
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.click, this.handleMenuClick);
	            // Reset non static members
	            this.collapseButton = null;
	            this.expandButton = null;
	            this.mobileTarget = null;
	            for (var _i = 0, _a = this.refineItems; _i < _a.length; _i++) {
	                var refineItem = _a[_i];
	                refineItem.teardown();
	            }
	            this.refineItems = [];
	        };
	        /**
	        * @name - manageRadioGroupClick
	        * @description - If the target is an element of a role radiogroup, then unselect all items.
	        *                A radio group should only show one highlighted item at a time.
	        * @private
	        * @param {HTMLElement} element - The element that has been clicked.
	        * @returns {void}
	        */
	        RefineMenu.prototype.manageRadioGroupClick = function (element) {
	            // Because the span inside of the button can be the click target,
	            // we need to normalize our checks against the button element.
	            var isSpanElement = element.nodeName === 'SPAN';
	            var refineItem = isSpanElement ? element.parentNode : element;
	            var refineGroup = refineItem != null ? refineItem.parentNode.parentNode : null;
	            var isSingleSelect;
	            // Check for single-select
	            if (refineItem == null || refineGroup == null) {
	                return null;
	            }
	            isSingleSelect = refineGroup.getAttribute(RefineMenu.selectTypeProperty) === RefineMenu.singleSelectValue;
	            // DEPRECATED v2.0.0
	            // We won't need to have backwards compatibility with old shapes so we
	            // should remove this check and all adjustments made inside of it
	            if (!refineGroup.hasAttribute(RefineMenu.selectTypeProperty)) {
	                refineGroup = refineGroup.parentNode;
	                isSingleSelect = refineGroup.getAttribute('role') === 'radiogroup';
	            }
	            // If we are a single-select group, deselect all un-clicked items in the group
	            if (isSingleSelect) {
	                for (var _i = 0, _a = this.refineItems; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    var element_1 = item.element;
	                    if (element_1 !== refineItem && htmlExtensions_1.isDescendent(refineGroup, element_1)) {
	                        item.unselectItem();
	                    }
	                }
	            }
	        };
	        /**
	        * @name - getRefineMenuItems
	        * @description - Update the refineItems array with all RefineItem instances for each RefineItem in the menu.
	        * @private
	        * @returns {void}
	        */
	        RefineMenu.prototype.getRefineMenuItems = function () {
	            this.refineItems = [];
	            for (var _i = 0, _a = htmlExtensions_1.selectElements(refineItem_1.RefineItem.selector, this.element); _i < _a.length; _i++) {
	                var refineItemElement = _a[_i];
	                this.refineItems.push(new refineItem_1.RefineItem(refineItemElement));
	            }
	        };
	        /**
	        * @name - expandMenu
	        * @description - Expand or collapse the menu by setting a number of CSS classes and attributes in the menu based on the passed boolean.
	        * @private
	        * @param {boolean} expandMenu - expand the menu if true, otherwise collapse the menu.
	        * @returns {void}
	        */
	        RefineMenu.prototype.expandMenu = function (expandMenu) {
	            this.mobileTarget.setAttribute('aria-hidden', (!expandMenu).toString());
	            this.expandButton.setAttribute('aria-expanded', expandMenu.toString());
	            this.collapseButton.setAttribute('aria-expanded', expandMenu.toString());
	            htmlExtensions_1.css(this.expandButton, 'display', expandMenu ? 'none' : 'block');
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        RefineMenu.init = function (input) {
	            utility_1.apiDeprecated('RefineMenu.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: RefineMenu,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - The RefineMenu component selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        RefineMenu.selector = '.c-refine-menu';
	        /**
	        * @name - selectTypeProperty
	        * @description - Attribute property that holds the select-type
	        * @private
	        * @static
	        * @type {string}
	        */
	        RefineMenu.selectTypeProperty = 'data-js-select-type';
	        /**
	        * @name - singleSelectValue
	        * @description - Attribute property value for single-select groups
	        * @private
	        * @static
	        * @type {string}
	        */
	        RefineMenu.singleSelectValue = 'single-select';
	        return RefineMenu;
	    }(observableComponent_1.ObservableComponent));
	    exports.RefineMenu = RefineMenu;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="refineItem"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1, stringExtensions_1) {
	    "use strict";
	    /**
	    * @class - RefineItem
	    * @classdesc - The RefineItem component
	    * @export
	    */
	    var RefineItem = (function () {
	        /**
	        * @name - constructor
	        * @description - Constructor for the RefineItem component.
	        * @public
	        * @param {HTMLElement} element - The native element to attach the RefineItem behavior to.
	        *                                This member is public because it is directly accessed by RefineMenu.
	        */
	        function RefineItem(element) {
	            var _this = this;
	            this.element = element;
	            /**
	            * @name - toggleRefineItem
	            * @description - Toggles the selected state of the RefineItem based on it's current selected state.
	            * @private
	            * @returns {void}
	            */
	            this.toggleRefineItem = function () {
	                _this.changeItemState(!_this.isSelected());
	            };
	            if (!this.element) {
	                return;
	            }
	            if (!this.element.hasAttribute('role')) {
	                // The old shape has role="radio" or role="checkbox". The new shape has neither.
	                this.isUpdatedShape = true;
	                this.label = htmlExtensions_1.getText(htmlExtensions_1.selectFirstElement('span', this.element));
	            }
	            else {
	                this.isRadioItem = this.element.getAttribute('role') === 'radio';
	                this.ariaAttribute = this.isRadioItem ? 'aria-checked' : 'aria-selected';
	            }
	            // Ensure the initial state.
	            this.changeItemState(this.isSelected());
	            // Add item click event
	            htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.click, this.toggleRefineItem);
	        }
	        /**
	        * @name - isSelected
	        * @description - Check if the RefineItem is selected.
	        * @private
	        * @returns {boolean} - True if selected, otherwise false.
	        */
	        RefineItem.prototype.isSelected = function () {
	            if (this.isUpdatedShape) {
	                return htmlExtensions_1.hasClass(this.element, RefineItem.selectedClass);
	            }
	            else {
	                return this.element.getAttribute(this.ariaAttribute) === 'true';
	            }
	        };
	        /**
	        * @name - changeItemState
	        * @description - Sets the refine item's aria attribute to the specified value.
	        * @private
	        * @param {boolean} value - The desired value.
	        * @returns {void}
	        */
	        RefineItem.prototype.changeItemState = function (value) {
	            if (this.isUpdatedShape) {
	                if (value) {
	                    htmlExtensions_1.addClass(this.element, RefineItem.selectedClass);
	                    this.element.setAttribute(RefineItem.ariaLabel, stringExtensions_1.format(RefineItem.selectedLabel, this.label));
	                }
	                else {
	                    htmlExtensions_1.removeClass(this.element, RefineItem.selectedClass);
	                    this.element.setAttribute(RefineItem.ariaLabel, stringExtensions_1.format(RefineItem.unSelectedLabel, this.label));
	                }
	            }
	            else {
	                this.element.setAttribute(this.ariaAttribute, value.toString());
	            }
	        };
	        /**
	        * @name - unselectItem
	        * @description - Public method to unselect an item
	        * @public
	        * @returns {void}
	        */
	        RefineItem.prototype.unselectItem = function () {
	            this.changeItemState(false);
	        };
	        /**
	        * @name - teardown
	        * @description - This method is only called by RefineMenu when it needs to clean up its RefineItems.
	        * @public
	        * @returns {void}
	        */
	        RefineItem.prototype.teardown = function () {
	            // Remove the click listener.
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.click, this.toggleRefineItem);
	        };
	        /**
	        * @name - selector
	        * @description - The RefineItem component selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        RefineItem.selector = '.c-refine-item';
	        /**
	        * @name - selectedClass
	        * @description - Selected class name
	        * @private
	        * @static
	        * @type {string}
	        */
	        RefineItem.selectedClass = 'f-selected';
	        /**
	        * @name - selectedString
	        * @description - Aria-label for when a refine-item is selected
	        * @private
	        * @static
	        * @type {string}
	        */
	        // TODO: 8188671 - This needs to come from a localized strings file. Hard coding these strings for now
	        RefineItem.selectedLabel = 'Active refinement: {0}';
	        /**
	        * @name - unSelectedString
	        * @description - Aria-label for when a refine-item is unselected
	        * @private
	        * @static
	        * @type {string}
	        */
	        // TODO: 8188671 - This needs to come from a localized strings file. Hard coding these strings for now
	        RefineItem.unSelectedLabel = 'Refine by {0}';
	        /**
	        * @name - ariaLabel
	        * @description - Aria-label attribute
	        * @private
	        * @static
	        * @type {string}
	        */
	        RefineItem.ariaLabel = 'aria-label';
	        return RefineItem;
	    }());
	    exports.RefineItem = RefineItem;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="select"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(6), __webpack_require__(50), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, publisher_1, selectMenu_1, htmlExtensions_1) {
	    "use strict";
	    /**
	    * @class - Select
	    * @classdesc - The Select component
	    */
	    var Select = (function (_super) {
	        __extends(Select, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Select component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the Select behavior to.
	        */
	        function Select(element) {
	            _super.call(this, element);
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        Select.prototype.update = function () {
	            var _this = this;
	            if (!this.element) {
	                return;
	            }
	            this.select = htmlExtensions_1.selectFirstElementT('select', this.element);
	            this.options = htmlExtensions_1.selectElementsT('option', this.select);
	            if (!this.select || !this.options) {
	                return;
	            }
	            // Ensure the select has an id if the element does
	            if (!this.select.id && this.element.id) {
	                this.select.id = this.element.id + '-select';
	            }
	            // Create replacement selectMenu elements.
	            if (!this.selectMenuDiv) {
	                this.selectMenuDiv = document.createElement('div');
	            }
	            else {
	                this.selectMenuDiv.innerHTML = '';
	            }
	            var selectMenu = document.createElement('button');
	            var selectList = document.createElement('ul');
	            htmlExtensions_1.addClass(this.selectMenuDiv, 'c-select-menu');
	            htmlExtensions_1.addClass(this.selectMenuDiv, 'f-persist');
	            if (htmlExtensions_1.hasClass(this.element, 'f-border')) {
	                htmlExtensions_1.addClass(this.selectMenuDiv, 'f-border');
	            }
	            if (htmlExtensions_1.hasClass(this.element, 'f-accent')) {
	                htmlExtensions_1.addClass(this.selectMenuDiv, 'f-accent');
	            }
	            selectMenu.innerHTML = this.select.getAttribute(Select.ariaLabel);
	            selectMenu.setAttribute(Select.ariaHaspopup, 'true');
	            selectMenu.setAttribute(Select.ariaExpanded, 'false');
	            selectMenu.setAttribute('tabindex', '0');
	            htmlExtensions_1.addClass(selectList, 'c-menu');
	            selectList.setAttribute(Select.ariaHidden, 'true');
	            selectList.setAttribute('role', 'listbox');
	            selectList.setAttribute('tabindex', '0');
	            // Get the select's f-flex class and propagate it forward to the replacement selectMenu
	            if (htmlExtensions_1.hasClass(this.element, 'f-flex')) {
	                htmlExtensions_1.addClass(this.selectMenuDiv, 'f-flex');
	            }
	            // Get the select's disabled state and propagate it forward to the replacement selectMenu
	            if (this.select.hasAttribute('disabled')) {
	                // Set aria-disabled instead of disabled because the disabled
	                // attribute is not valid on div elements
	                this.selectMenuDiv.setAttribute('aria-disabled', 'true');
	            }
	            // Get the select's required state and propagate it forward to the replacement selectMenu
	            if (this.select.hasAttribute('required')) {
	                // Set aria-required instead of required because the required
	                // attribute is not valid on div elements
	                this.selectMenuDiv.setAttribute('aria-required', 'true');
	            }
	            for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
	                var option = _a[_i];
	                var selected = option.getAttribute('selected') === 'selected';
	                var optionValue = option.getAttribute('value');
	                var li = document.createElement('li');
	                var span = document.createElement('span');
	                htmlExtensions_1.addClass(li, 'c-menu-item');
	                li.setAttribute('role', 'presentation');
	                span.setAttribute('tabindex', '0');
	                span.setAttribute('role', 'option');
	                if (selected) {
	                    span.setAttribute(Select.ariaSelected, 'true');
	                }
	                if (!optionValue) {
	                    option.setAttribute('value', htmlExtensions_1.getText(option));
	                    optionValue = option.getAttribute('value');
	                }
	                if (!!optionValue) {
	                    li.id = this.select.id + '-' + optionValue;
	                }
	                span.appendChild(document.createTextNode(htmlExtensions_1.getText(option)));
	                li.appendChild(span);
	                selectList.appendChild(li);
	            }
	            // Add replacement selectMenu to DOM.
	            this.selectMenuDiv.appendChild(selectMenu);
	            this.selectMenuDiv.appendChild(selectList);
	            this.element.appendChild(this.selectMenuDiv);
	            // We have just internally added nodes to the DOM, indicate to ignore next mutation event.
	            this.ignoreNextDOMChange = true;
	            // Asynchronously create the SelectMenu for the replacement selectMenu.
	            componentFactory_1.ComponentFactory.create([{
	                    component: selectMenu_1.SelectMenu,
	                    eventToBind: 'DOMContentLoaded',
	                    elements: [this.selectMenuDiv],
	                    callback: function (results) {
	                        if (!!results || !!results.length) {
	                            _this.selectMenu = results[0];
	                            // Subscribe to the replacement selectMenu's notifications.
	                            _this.selectMenu.subscribe(_this);
	                        }
	                    }
	                }]);
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        Select.prototype.teardown = function () {
	            // Remove the replacement selectMenu.
	            this.select = null;
	            this.options = null;
	            this.selectMenu = null;
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {ISelectMenuSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        Select.prototype.publish = function (subscriber, context) {
	            subscriber.onSelectionChanged(context);
	        };
	        /**
	        * @name - onSelectionChanged
	        * @description - Handles the selectMenu's notification. Updates the native select's state.
	        *                and forwards the notification on to any subscribers.
	        * @public
	        * @param {ISelectMenuNotification} notification - The notification.
	        * @returns {void}
	        */
	        Select.prototype.onSelectionChanged = function (notification) {
	            if (!!notification && !!notification.id) {
	                notification.id = notification.id.substr(this.select.id.length + 1);
	                // TODO: 8479736: Update build step to remove commented code.
	                // The following console.log useful for debugging and is left in commented out for easy restoration.
	                //console.log(
	                // 'select(' + (this.select.name || this.select.id) + ').value(' + this.select.value + ')' +
	                // ' => (' + notification.id + ')');
	                this.select.value = notification.id;
	                for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
	                    var option = _a[_i];
	                    if (option.getAttribute('value') === notification.id) {
	                        option.setAttribute('selected', 'selected');
	                    }
	                    else {
	                        option.removeAttribute('selected');
	                    }
	                }
	                this.initiatePublish(notification);
	            }
	        };
	        /**
	        * @name - selector
	        * @description - selector to use to find Select components in the document.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Select.selector = '.c-select';
	        // TODO: Consolidate all static attribute name/value strings into a common single place.
	        /**
	        * @name - ariaExpanded
	        * @description - This attribute is set to true/false to indicate whether or not the dropdown is expanded.
	        * @private
	        * @static
	        * @type {string}
	        */
	        Select.ariaExpanded = 'aria-expanded';
	        /**
	        * @name - ariaHidden
	        * @description - This attribute is set to true/false to indicate whether or not the dropdown is hidden.
	        * @private
	        * @static
	        * @type {string}
	        */
	        Select.ariaHidden = 'aria-hidden';
	        /**
	        * @name - ariaHaspopup
	        * @description - This attribute to set to true/false to indicate whether or not a menu item is the currently selected one.
	        * @private
	        * @static
	        * @type {string}
	        */
	        Select.ariaHaspopup = 'aria-haspopup';
	        /**
	        * @name - ariaSelected
	        * @description - This attribute to set to true/false to indicate whether or not a menu item is the currently selected one.
	        * @private
	        * @static
	        * @type {string}
	        */
	        Select.ariaSelected = 'aria-selected';
	        /**
	        * @name - ariaLabel
	        * @description - This attribute is a string which becomes the label for the Select Menu.
	        * @private
	        * @static
	        * @type {string}
	        */
	        Select.ariaLabel = 'aria-label';
	        return Select;
	    }(publisher_1.Publisher));
	    exports.Select = Select;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="selectMenu"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(6), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, publisher_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - SelectMenu
	    * @classdesc - The SelectMenu component
	    */
	    var SelectMenu = (function (_super) {
	        __extends(SelectMenu, _super);
	        /**
	         * @name - constructor
	         * @description - Constructor for the SelectMenu component.
	         * @public
	         * @param {HTMLElement} element - the native element to attach the SelectMenu behavior to.
	         */
	        function SelectMenu(element) {
	            var _this = this;
	            _super.call(this, element);
	            // ---------------------------------------------------------------------------------------------
	            // Event listeners section
	            // ---------------------------------------------------------------------------------------------
	            /**
	             * @name - onTriggerClick
	             * @description - Trigger click handler.
	             * @private
	             * @param {Event} event - The click event.
	             * @returns {void}
	             */
	            this.onTriggerClick = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                htmlExtensions_1.preventDefault(event);
	                if (!_this.disabled) {
	                    _this.onTriggerToggled();
	                }
	            };
	            /**
	             * @name - onItemClick
	             * @description - Item click handler.
	             * @private
	             * @param {Event} event - The click event.
	             * @returns {void}
	             */
	            this.onItemClick = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                _this.onItemSelected(htmlExtensions_1.getEventTargetOrSrcElement(event), false, true);
	            };
	            /**
	             * @name - onNonSelectMenuClick
	             * @description - Non-SelectMenu click handler.
	             * @private
	             * @param {MouseEvent} event - the click MouseEvent.
	             * @returns {void}
	             */
	            this.onNonSelectMenuClick = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                if (!!_this.element && !!_this.menu) {
	                    var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                    if (!_this.element.contains(target)) {
	                        if ((target !== _this.menu) && (target.parentElement !== _this.menu)) {
	                            _this.collapse();
	                        }
	                    }
	                }
	            };
	            /**
	             * @name - onNonSelectMenuTab
	             * @description - Non-SelectMenu tab handler.
	             * @private
	             * @param {KeyboardEvent} event - the keyboard event.
	             * @returns {void}
	             */
	            this.onNonSelectMenuTab = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                var keycode = utility_1.getKeyCode(event);
	                if (keycode === 9 /* Tab */) {
	                    _this.collapse();
	                }
	            };
	            /**
	             * @name - onTriggerKeyPress
	             * @description -
	             * @private
	             * @param {KeyboardEvent} event - the keyboard event.
	             * @returns {void}
	             */
	            this.onTriggerKeyPress = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                var keycode = utility_1.getKeyCode(event);
	                switch (keycode) {
	                    case 13 /* Enter */:
	                    case 32 /* Space */:
	                        htmlExtensions_1.preventDefault(event);
	                        if (!_this.disabled) {
	                            _this.onTriggerToggled();
	                        }
	                    default:
	                }
	            };
	            /**
	             * @name - handleMenuKeydownEvent
	             * @description - Handler for menu keydown events, calls handleMenuKeydown which does the real work.
	             * @private
	             * @param {KeyboardEvent} event - The keyboard event.
	             * @returns {void}
	             */
	            this.handleMenuKeydownEvent = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                var keyCode = utility_1.getKeyCode(event);
	                if (keyCode !== 9 /* Tab */ || _this.isExpanded()) {
	                    htmlExtensions_1.preventDefault(event);
	                }
	                _this.handleMenuKeydown(htmlExtensions_1.getEventTargetOrSrcElement(event), keyCode);
	            };
	            // TODO: 8548794 - Right now we have two behaviors for c-select component.
	            // As part of this todo we should combine and have a single select behavior.
	            // The below if block is a temporary fix not to have this behavior applied,
	            // if the component is added as part of UHF.
	            if (element && htmlExtensions_1.hasClass(element, SelectMenu.universalHeaderMenuSelector)) {
	                _super.prototype.unObserve.call(this);
	                return;
	            }
	            this.update();
	        }
	        /**
	         * @name - update
	         * @description - Updates the component if there is any change to its underlying DOM.
	         * @protected
	         * @returns {void}
	         */
	        SelectMenu.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            this.persist = htmlExtensions_1.hasClass(this.element, 'f-persist');
	            this.trigger = htmlExtensions_1.selectFirstElementT('[role="button"]', this.element);
	            if (!this.trigger) {
	                this.trigger = htmlExtensions_1.selectFirstElementT('button', this.element);
	            }
	            this.menu = htmlExtensions_1.selectFirstElement('.c-menu', this.element);
	            var isAnchor = htmlExtensions_1.selectElementsT('.c-menu-item a', this.element);
	            if (isAnchor.length > 0) {
	                this.items = isAnchor;
	            }
	            else {
	                this.items = htmlExtensions_1.selectElementsT('.c-menu-item span', this.element);
	            }
	            this.disabled = this.element.getAttribute('aria-disabled') === 'true' ? true : false;
	            if (!!this.trigger && !!this.menu && !!this.items && !!this.items.length) {
	                var selectedItem = null;
	                // Find the first selected item, if any, and ensure all others are unselected.
	                for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    if (this.itemIsSelected(item) && selectedItem === null) {
	                        selectedItem = item;
	                        item.setAttribute(this.getSelectedAttribute(item), 'true');
	                    }
	                    else {
	                        item.setAttribute(this.getSelectedAttribute(item), 'false');
	                    }
	                    item.setAttribute('tabindex', '-1');
	                    this.cleanSelectedAttributes(item);
	                    if (!item.hasAttribute('role')) {
	                        item.setAttribute('role', 'menuitem');
	                    }
	                }
	                // Save the expanded state as onItemSelected may collapse it.
	                var showExpanded = this.isExpanded();
	                this.onItemSelected(selectedItem, true, false);
	                this.addEventListeners();
	                if (showExpanded) {
	                    this.expand();
	                }
	            }
	        };
	        /**
	         * @name - teardown
	         * @description - Called by ObservableComponent when the component needs to clean up its state.
	         *                Components should remove any event bindings they've added to ensure they are
	         *                not duplicated during repeated update/teardown cycles.
	         * @protected
	         * @returns {void}
	         */
	        SelectMenu.prototype.teardown = function () {
	            // Remove the click listeners.
	            htmlExtensions_1.removeEvent(this.trigger, htmlExtensions_1.eventTypes.click, this.onTriggerClick);
	            htmlExtensions_1.removeEvent(this.trigger, htmlExtensions_1.eventTypes.keydown, this.onTriggerKeyPress);
	            htmlExtensions_1.removeEvent(this.menu, htmlExtensions_1.eventTypes.keydown, this.handleMenuKeydownEvent, true);
	            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
	                var item = _a[_i];
	                htmlExtensions_1.removeEvent(item, htmlExtensions_1.eventTypes.click, this.onItemClick);
	            }
	            htmlExtensions_1.removeEvent(document, htmlExtensions_1.eventTypes.click, this.onNonSelectMenuClick);
	            htmlExtensions_1.removeEvent(this.items[this.items.length - 1], htmlExtensions_1.eventTypes.keydown, this.onNonSelectMenuTab);
	            // Reset non static members
	            this.persist = false;
	            this.trigger = null;
	            this.menu = null;
	            this.items = null;
	            this.selectedItem = null;
	        };
	        /**
	         * @name - setSelectedItem
	         * @description - Sets the selected menu item to be the one with the specified id.
	         * @public
	         * @param {string} id - the id of the menu item to select.
	         * @returns {boolean} True if the selection was successfully changed, otherwise false.
	         */
	        SelectMenu.prototype.setSelectedItem = function (id) {
	            if (!id || !this.element) {
	                return false;
	            }
	            return this.onItemSelected(htmlExtensions_1.selectFirstElementT('li[id=\'' + id + '\'] > a', this.element), false, false);
	        };
	        /**
	         * @name - isExpanded
	         * @description - Check the expanded state.
	         * @private
	         * @return {boolean} - True if the selectMenu is expanded, otherwise false.
	         */
	        SelectMenu.prototype.isExpanded = function () {
	            return (!!this.trigger && !!this.menu &&
	                (this.trigger.getAttribute(SelectMenu.ariaExpanded) === 'true') &&
	                (this.menu.getAttribute(SelectMenu.ariaHidden) === 'false'));
	        };
	        /**
	          * @name - itemIsSelected
	          * @description - Check if the item is selected.
	          * @private
	          * @param {HTMLElement} item - the item to check for selected state.
	          * @return {boolean} - True if the item is selected, otherwise false.
	          */
	        SelectMenu.prototype.itemIsSelected = function (item) {
	            return item.getAttribute(SelectMenu.ariaSelected) === 'true' || item.getAttribute(SelectMenu.ariaChecked) === 'true';
	        };
	        /**
	          * @name - getSelectedAttribute
	          * @description - Return the appropriate attribute to indicate a "selected" item based on the items aria-role.
	          * @private
	          * @param {HTMLElement} item - the item to get the selected attribute of.
	          * @return {string} - The aria attribute to indicate selection (aria-selected or aria-checked).
	          */
	        SelectMenu.prototype.getSelectedAttribute = function (item) {
	            return item.getAttribute('role') === 'menuitemradio' ? SelectMenu.ariaChecked : SelectMenu.ariaSelected;
	        };
	        /**
	          * @name - cleanSelectedAttributes
	          * @description - Removes attributes indicating "selected" state that do not belong on a particular role.
	          *                This is only necessary because we need to support legacy shapes.
	          * @private
	          * @param {HTMLElement} item - the item remove attributes from.
	          * @return {void}
	          */
	        SelectMenu.prototype.cleanSelectedAttributes = function (item) {
	            var attributeToRemove = this.getSelectedAttribute(item) === SelectMenu.ariaSelected
	                ? SelectMenu.ariaChecked
	                : SelectMenu.ariaSelected;
	            item.removeAttribute(attributeToRemove);
	        };
	        /**
	         * @name - expand
	         * @description - Expand the SelectMenu.
	         * @private
	         * @return {void}
	         */
	        SelectMenu.prototype.expand = function () {
	            if (!!this.trigger && !!this.menu) {
	                this.trigger.setAttribute(SelectMenu.ariaExpanded, 'true');
	                this.menu.setAttribute(SelectMenu.ariaHidden, 'false');
	                if (!!this.items) {
	                    var selectedIndex = this.items.indexOf(this.selectedItem);
	                    var focusIndex = selectedIndex === -1 ? 0 : selectedIndex;
	                    this.items[focusIndex].focus();
	                }
	            }
	        };
	        /**
	         * @name - collapse
	         * @description - Collapse the SelectMenu.
	         * @private
	         * @return {void}
	         */
	        SelectMenu.prototype.collapse = function () {
	            if (!!this.trigger && !!this.menu) {
	                this.trigger.setAttribute(SelectMenu.ariaExpanded, 'false');
	                this.menu.setAttribute(SelectMenu.ariaHidden, 'true');
	            }
	        };
	        /**
	         * @name - addEventListeners
	         * @description - Add the click event listeners needed by the SelectMenu trigger and links.
	         * @private
	         * @return {void}
	         */
	        SelectMenu.prototype.addEventListeners = function () {
	            if (!!this.trigger && !!this.items) {
	                htmlExtensions_1.addEvent(this.trigger, htmlExtensions_1.eventTypes.click, this.onTriggerClick);
	                htmlExtensions_1.addEvent(this.trigger, htmlExtensions_1.eventTypes.keydown, this.onTriggerKeyPress);
	                htmlExtensions_1.addEvent(this.menu, htmlExtensions_1.eventTypes.keydown, this.handleMenuKeydownEvent, true);
	                for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    htmlExtensions_1.addEvent(item, htmlExtensions_1.eventTypes.click, this.onItemClick);
	                }
	                htmlExtensions_1.addEvent(this.items[this.items.length - 1], htmlExtensions_1.eventTypes.keydown, this.onNonSelectMenuTab);
	                htmlExtensions_1.addEvent(document, htmlExtensions_1.eventTypes.click, this.onNonSelectMenuClick);
	            }
	        };
	        /**
	         * @name - onTriggerToggled
	         * @description - Toggles the expand/collapse state of the SelectMenu's trigger.
	         * @private
	         * @returns {void}
	         */
	        SelectMenu.prototype.onTriggerToggled = function () {
	            if (this.isExpanded()) {
	                this.collapse();
	            }
	            else {
	                this.expand();
	            }
	        };
	        /**
	         * @name - onItemSelected
	         * @description - Makes the specified item the SelectMenu's selected item.
	         * @private
	         * @param {HTMLElement} item - the item to make the selected one.
	         * @param {boolean} internal - True if this selection was internally generated (update), otherwise false (setSelectedItem).
	         * @param {boolean} userInitiated - True if this selection was user initiated (mouse/keyboard), otherwise false (init/api).
	         * @returns {boolean} - True if the selected item was changed, otherwise false.
	         */
	        SelectMenu.prototype.onItemSelected = function (item, internal, userInitiated) {
	            if (!item || (item === this.selectedItem)) {
	                // We still need to collapse the menu even if they clicked on the currently selected item.
	                this.collapse();
	                return false;
	            }
	            if (this.persist && this.trigger) {
	                this.trigger.innerHTML = htmlExtensions_1.getText(item);
	            }
	            if (this.selectedItem) {
	                this.selectedItem.setAttribute(this.getSelectedAttribute(this.selectedItem), 'false');
	            }
	            // TODO: 8479736: Update build step to remove commented code.
	            // The following console.log useful for debugging and is left in commented out for easy restoration.
	            // console.log(
	            // 'selectMenu.onSelectionChanged: ' +
	            // 'id(' + (this.selectedItem ? this.selectedItem.parentElement.id : 'null') +
	            // ' => ' + item.parentElement.id + ') ' +
	            // 'href(' + (item ? item.getAttribute('href') : 'null') + ') ' +
	            // 'internal(' + internal + ') ' +
	            // 'userInitiated(' + userInitiated + ')');
	            this.selectedItem = item;
	            this.selectedItem.setAttribute(this.getSelectedAttribute(this.selectedItem), 'true');
	            // Collapse menu once item is selected
	            this.collapse();
	            this.initiatePublish({
	                id: this.selectedItem.parentElement.id,
	                href: this.selectedItem.getAttribute('href'),
	                internal: internal,
	                userInitiated: userInitiated
	            });
	            return true;
	        };
	        /**
	         * @name - publish
	         * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	         *                This method will be called once for each registered subscriber.
	         * @protected
	         * @param {ISelectMenuSubscriber} subscriber - the subscriber to make the callback to.
	         * @param {any} context - the publish context use to determine which interface callback to make.
	         * @returns {void}
	         */
	        SelectMenu.prototype.publish = function (subscriber, context) {
	            if (!!this.selectedItem) {
	                subscriber.onSelectionChanged(context);
	            }
	        };
	        /**
	         * @name - handleMenuKeydown
	         * @description - Handler for a keydown event on the menu.
	         * @private
	         * @param {HTMLElement} target - the target element of the keyboard event
	         * @param {number} keycode - the keycode of the keyboard event
	         * @returns {void}
	         */
	        SelectMenu.prototype.handleMenuKeydown = function (target, keycode) {
	            switch (keycode) {
	                case 32 /* Space */:
	                case 13 /* Enter */:
	                    this.handleMenuEnterKey(target);
	                    this.trigger.focus();
	                    break;
	                case 27 /* Escape */:
	                    this.trigger.focus();
	                    this.collapse();
	                    break;
	                case 38 /* ArrowUp */:
	                    this.handleMenuArrowKey(true, target);
	                    break;
	                case 40 /* ArrowDown */:
	                    this.handleMenuArrowKey(false, target);
	                    break;
	                case 9 /* Tab */:
	                    if (this.isExpanded()) {
	                        this.handleMenuEnterKey(target);
	                        this.trigger.focus();
	                    }
	            }
	        };
	        /**
	         * @name - handleMenuArrowKey
	         * @description - Handler for an arrow key on the menu.
	         * @private
	         * @param {boolean} isUpArrow - true means the arrow key pressed was the up arrow, false means the down arrow key was pressed
	         * @param {HTMLElement} currentItem - the item currently focused on
	         * @returns {void}
	         */
	        SelectMenu.prototype.handleMenuArrowKey = function (isUpArrow, currentItem) {
	            var currentItemIndex = this.items.indexOf(currentItem);
	            if (currentItemIndex === -1) {
	                return;
	            }
	            currentItemIndex += isUpArrow ? -1 : 1;
	            if (currentItemIndex < 0) {
	                currentItemIndex = this.items.length - 1;
	            }
	            else if (currentItemIndex >= this.items.length) {
	                currentItemIndex = 0;
	            }
	            this.items[currentItemIndex].focus();
	        };
	        /**
	         * @name - handleMenuEnterKey
	         * @description - Handler for an arrow key on the menu.
	         * @private
	         * @param {HTMLElement} currentItem - the item currently focused on
	         * @returns {void}
	         */
	        SelectMenu.prototype.handleMenuEnterKey = function (currentItem) {
	            this.onItemSelected(currentItem, false, true);
	        };
	        /**
	         * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	         */
	        SelectMenu.init = function (input) {
	            utility_1.apiDeprecated('SelectMenu.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: SelectMenu,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	         * @name - selector
	         * @description - selector to use to find SelectMenu components in the document.
	         * @static
	         * @public
	         * @type {string}
	         */
	        SelectMenu.selector = '.c-select-menu';
	        /**
	         * @name - ariaExpanded
	         * @description - This attribute to set to true/false to indicate whether or not a non-leaf menu is expanded.
	         * @private
	         * @static
	         * @type {string}
	         */
	        SelectMenu.ariaExpanded = 'aria-expanded';
	        /**
	         * @name - ariaHidden
	         * @description - This attribute to set to true/false to indicate whether or not a non-leaf menu is hidden.
	         * @private
	         * @static
	         * @type {string}
	         */
	        SelectMenu.ariaHidden = 'aria-hidden';
	        /**
	         * @name - ariaSelected
	         * @description - This attribute to set to true/false to indicate whether or not a menu item is the currently selected one.
	         * @private
	         * @static
	         * @type {string}
	         */
	        SelectMenu.ariaSelected = 'aria-selected';
	        /**
	         * @name - ariaChecked
	         * @description - This attribute to set to true/false to indicate whether or not a menu item is the currently selected one.
	         * @private
	         * @static
	         * @type {string}
	         */
	        SelectMenu.ariaChecked = 'aria-checked';
	        /**
	          * @name - universalHeaderMenuSelector
	          * @description - The class that will be added to select component if it is added for universal header and footer.
	          *
	          * @private
	          * @static
	          * @type {string}
	          */
	        SelectMenu.universalHeaderMenuSelector = 'js-nav-menu';
	        return SelectMenu;
	    }(publisher_1.Publisher));
	    exports.SelectMenu = SelectMenu;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="selectButton"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * SelectButton component
	    */
	    var SelectButton = (function (_super) {
	        __extends(SelectButton, _super);
	        /**
	        * Constructor of a selectButton component.
	        * @class SelectButton
	        * @classdesc Constructor of a selectButton component.
	        * @param {HTMLElement} element- a component element that needs to have selectButton behavior.
	        */
	        function SelectButton(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * Handle the click event.
	            * @param {MouseEvent} event.
	            */
	            this.onClick = function (event) {
	                _this.togglePressedState();
	            };
	            if (!element) {
	                return;
	            }
	            this.update();
	        }
	        /**
	         * updates the Select Button component if there is any change in the DOM inside Select Button container.
	         *
	         * @protected
	         * @returns {void}
	         */
	        SelectButton.prototype.update = function () {
	            this.buttonContainer = this.element.parentNode;
	            if (!this.buttonContainer) {
	                return;
	            }
	            var ariaLabelledBy = this.buttonContainer.getAttribute(SelectButton.ariaLabelledBySelector);
	            this.ariaLabelledByElement = document.getElementById(ariaLabelledBy);
	            this.nameSelector = '.c-select-button[name="' + this.element.getAttribute('name') + '"]';
	            this.selectedText = this.element.getAttribute(SelectButton.selectedTextSelector);
	            this.unselectedText = this.element.getAttribute(SelectButton.unselectedTextSelector);
	            this.prepareSwatches();
	            htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.click, this.onClick);
	        };
	        /**
	         * cleans out previous bindings to avoid double binding when a component is updated.
	         *
	         * @protected
	         */
	        SelectButton.prototype.teardown = function () {
	            // clean up throttled event handlers.
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.click, this.onClick);
	        };
	        /**
	        * Prepare swatches.
	        * This method sets the button's background color from the data-select-button-swatch attribute value
	        * and, if disabled, sets a light or dark disabled class on it to contrast with the background color.
	        * These swatch attributes are only supposed to apply for buttons that don't have text so
	        * we're only setting the background color, there is no need to change the foreground color.
	        */
	        SelectButton.prototype.prepareSwatches = function () {
	            var hexValue = this.element.getAttribute('data-select-button-swatch');
	            var contrast = utility_1.detectContrast(hexValue);
	            if (!!contrast) {
	                this.element.style.backgroundColor = '#' + hexValue;
	                if (this.element.disabled) {
	                    //Add diagonal line class to disabled swatches
	                    htmlExtensions_1.addClass(this.element, 'f-swatch-disabled');
	                    if (contrast === 1 /* light */) {
	                        //Make diagonal line light, the color is dark
	                        htmlExtensions_1.addClass(this.element, 'f-swatch-disabled-dark');
	                    }
	                }
	            }
	        };
	        /**
	        * toggle the button's pressed state.
	        */
	        SelectButton.prototype.togglePressedState = function () {
	            var text = this.selectedText;
	            if (this.element.getAttribute(SelectButton.multiSelectAttributeName)) {
	                this.element.setAttribute(SelectButton.pressedAttributeName, this.isPressed() ? 'false' : 'true');
	                if (!this.isPressed()) {
	                    text = this.unselectedText;
	                }
	            }
	            else {
	                for (var _i = 0, _a = htmlExtensions_1.selectElements(this.nameSelector); _i < _a.length; _i++) {
	                    var button = _a[_i];
	                    button.setAttribute(SelectButton.pressedAttributeName, (button === this.element) ? 'true' : 'false');
	                }
	            }
	            htmlExtensions_1.setText(this.ariaLabelledByElement, text);
	        };
	        /**
	        * Determines the pressed state.
	        * @returns {boolean}- True if the button is in the pressed state, otherwise false.
	        */
	        SelectButton.prototype.isPressed = function () {
	            return this.element.getAttribute(SelectButton.pressedAttributeName) === 'true';
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        SelectButton.init = function (input) {
	            utility_1.apiDeprecated('SelectButton.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: SelectButton,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        // String for the component selector
	        SelectButton.selector = '.c-select-button';
	        SelectButton.pressedAttributeName = 'aria-pressed';
	        SelectButton.multiSelectAttributeName = 'data-select-button-multiselect';
	        SelectButton.selectedTextSelector = 'data-js-selected-text';
	        SelectButton.unselectedTextSelector = 'data-js-unselected-text';
	        SelectButton.ariaLabelledBySelector = 'aria-labelledby';
	        return SelectButton;
	    }(observableComponent_1.ObservableComponent));
	    exports.SelectButton = SelectButton;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name='slider'/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(6), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, publisher_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - Slider
	    * @classdesc - The Slider component
	    * @export
	    */
	    var Slider = (function (_super) {
	        __extends(Slider, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Slider component.
	        * @public
	        * @param {HTMLElement} sliderElement - the native element to attach the Slider behavior to.
	        */
	        function Slider(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - onKeyPressed
	            * @description - Handles keyboard navigation for the mock slider thumb.
	            *                Horizontal sliders only care about left/right arrows, vertical sliders only care about up/down arrows.
	            * @private
	            * @param {keycodes} key - the keycode of the key that was pressed.
	            * @returns {void}
	            */
	            this.onKeyPressed = function (key) {
	                switch (key) {
	                    case 37 /* ArrowLeft */:
	                    case 39 /* ArrowRight */:
	                        if (!_this.isVerticalSlider) {
	                            var offset = (_this.primaryDirection === htmlExtensions_1.Direction.left) ? _this.stepOffset : -_this.stepOffset;
	                            offset = (key === 37 /* ArrowLeft */) ? -offset : offset;
	                            _this.updateThumbOffset(_this.thumbOffset + offset, true, true);
	                        }
	                        break;
	                    case 38 /* ArrowUp */:
	                    case 40 /* ArrowDown */:
	                        if (_this.isVerticalSlider) {
	                            var offset = (key === 38 /* ArrowUp */) ? _this.stepOffset : -_this.stepOffset;
	                            _this.updateThumbOffset(_this.thumbOffset + offset, true, true);
	                            htmlExtensions_1.getEvent(event).preventDefault();
	                        }
	                        break;
	                    case 33 /* PageUp */:
	                        {
	                            var offset = 2 * _this.stepOffset;
	                            _this.updateThumbOffset(_this.thumbOffset + offset, true, true);
	                        }
	                        break;
	                    case 34 /* PageDown */:
	                        {
	                            var offset = -(2 * _this.stepOffset);
	                            _this.updateThumbOffset(_this.thumbOffset + offset, true, true);
	                        }
	                        break;
	                    case 36 /* Home */:
	                        {
	                            var min = parseInt(_this.input.getAttribute('min'), 10) || 0;
	                            _this.updateThumbOffset(min, true, true);
	                        }
	                        break;
	                    case 35 /* End */:
	                        {
	                            var step = parseInt(_this.input.getAttribute('step'), 10);
	                            var max = _this.thumbRange + step;
	                            _this.updateThumbOffset(max, true, true);
	                        }
	                        break;
	                }
	            };
	            // ---------------------------------------------------------------------------------------------
	            // Event listeners section
	            // ---------------------------------------------------------------------------------------------
	            /**
	            * @name - onKeyDown
	            * @description - The mock slider thumb's keydown event listener.
	            *                This method is just an event listener that wraps the onKeyPressed method.
	            * @private
	            * @param {KeyboardEvent} event - The KeyboardEvent.
	            * @returns {void}
	            */
	            this.onKeyDown = function (event) {
	                _this.onKeyPressed(utility_1.getKeyCode(htmlExtensions_1.getEvent(event)));
	            };
	            /**
	            * @name - onMouseDown
	            * @description - The slider's mousedown event listener.
	            *                If the target is the mock slider's thumb we capture the mouse for thumb dragging by adding move/up handlers.
	            *                If not we immediately move the thumb to the current mouse position.
	            * @private
	            * @param {MouseEvent} event - The MouseEvent.
	            * @returns {void}
	            */
	            this.onMouseDown = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                // Need to redo the dimensions setup in case anything has moved the slider.
	                _this.setupDimensions();
	                // If the mousedown is on our thumb then capture the move/up so we can drag the thumb.
	                if (htmlExtensions_1.getEventTargetOrSrcElement(event) === _this.thumb) {
	                    htmlExtensions_1.addEvent(document, htmlExtensions_1.eventTypes.mousemove, _this.onMouseMove);
	                    htmlExtensions_1.addEvent(document, htmlExtensions_1.eventTypes.mouseup, _this.onMouseUp);
	                    return;
	                }
	                // Otherwise move the thumb to where the mousedown occurred
	                _this.moveThumbTo(event.clientX, event.clientY);
	            };
	            /**
	            * @name - onMouseMove
	            * @description - The slider's mousemove event listener.
	            *                This listener just calls moveThumbTo() so thumb tracks the mouse movement.
	            * @private
	            * @param {MouseEvent} event - The MouseEvent.
	            * @returns {void}
	            */
	            this.onMouseMove = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                // Move the thumb to follow the mouse around...
	                _this.moveThumbTo(event.clientX, event.clientY);
	            };
	            /**
	            * @name - onMouseUp
	            * @description - The slider's mouseup event listener removes the move/up events to end mouse motion tracking.
	            * @private
	            * @param {MouseEvent} event - The MouseEvent.
	            * @returns {void}
	            */
	            this.onMouseUp = function (event) {
	                // On mouseup we can remove the move/up handlers since we're done dragging the thumb around...
	                htmlExtensions_1.removeEvent(document, htmlExtensions_1.eventTypes.mousemove, _this.onMouseMove);
	                htmlExtensions_1.removeEvent(document, htmlExtensions_1.eventTypes.mouseup, _this.onMouseUp);
	            };
	            /**
	            * @name - onWindowResized
	            * @description - The window resize event listener.
	            * @private
	            * @param {UIEvent} event - The resize event.
	            * @returns {void}
	            */
	            this.onWindowResized = function (event) {
	                _this.setupDimensions();
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        Slider.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            this.input = htmlExtensions_1.selectFirstElement('input', this.element);
	            this.primaryDirection = htmlExtensions_1.getDirection(this.element);
	            this.isVerticalSlider = htmlExtensions_1.hasClass(this.input, 'f-vertical');
	            // Hide the native input element.
	            htmlExtensions_1.addClass(this.input, 'x-screen-reader');
	            // Get and validate the min/max values.
	            var min = parseInt(this.input.getAttribute('min'), 10) || 0;
	            var max = parseInt(this.input.getAttribute('max'), 10) || 100;
	            var value = parseInt(this.input.getAttribute('value'), 10);
	            var step = parseInt(this.input.getAttribute('step'), 10);
	            // See if we need to add the silder ux elements or if they already exist.
	            if (this.element.children[this.element.children.length - 1] === this.input) {
	                // The elements do not yet exist, create and add them.
	                this.mockSlider = document.createElement('div');
	                // Create slider button and make it accessible.
	                this.thumb = document.createElement('button');
	                this.thumb.setAttribute('role', 'slider');
	                this.thumb.setAttribute('aria-valuemin', min.toString());
	                this.thumb.setAttribute('aria-valuemax', max.toString());
	                this.thumb.setAttribute('aria-valuenow', value.toString());
	                // Create tooltip and track.
	                this.valueTooltip = document.createElement('span');
	                this.track = document.createElement('span');
	                // Combine replacement elements.
	                this.thumb.appendChild(this.valueTooltip);
	                this.mockSlider.appendChild(this.thumb);
	                this.mockSlider.appendChild(this.track);
	                // Add new component elements to DOM
	                this.element.appendChild(this.mockSlider);
	                // Set the ignore flag because we're intentionally changing the DOM here and
	                // don't want to trigger another teardown/update cycle or we'll get into a loop.
	                this.ignoreNextDOMChange = true;
	            }
	            else {
	                // The elements already exist, reacquire them.
	                this.mockSlider = this.element.children[this.element.children.length - 1];
	                this.thumb = this.mockSlider.firstElementChild;
	                this.valueTooltip = this.thumb.firstElementChild;
	                this.track = this.mockSlider.children[this.mockSlider.children.length - 1];
	            }
	            // For now the vertical orientation of the slider is achieved by rotating 90 degrees so for
	            // vertical we'll still pull the halfThumbOffset from the width instead of the height.
	            this.halfThumbOffset = (this.thumb.clientWidth) / 2;
	            if (this.resetSliderInternal(min, max, value, step, true)) {
	                htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.mousedown, this.onMouseDown);
	                htmlExtensions_1.addEvent(this.thumb, htmlExtensions_1.eventTypes.keydown, this.onKeyDown);
	                this.resizeListener = htmlExtensions_1.addDebouncedEvent(window, htmlExtensions_1.eventTypes.resize, this.onWindowResized);
	            }
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        Slider.prototype.teardown = function () {
	            // Remove the click listener.
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.mousedown, this.onMouseDown);
	            htmlExtensions_1.removeEvent(this.thumb, htmlExtensions_1.eventTypes.keydown, this.onKeyDown);
	            htmlExtensions_1.removeEvent(window, htmlExtensions_1.eventTypes.resize, this.resizeListener);
	            // Reset non static members
	            this.input = null;
	            this.mockSlider = null;
	            this.thumb = null;
	            this.valueTooltip = null;
	            this.track = null;
	            this.resizeListener = null;
	        };
	        /**
	        * @name - resetSlider
	        * @description - Resets the slider from the specified values.
	        *                This public version calls the interal version to do the real work.
	        * @public
	        * @param {number} min - The new min value.
	        * @param {number} max - The new max value.
	        * @param {number} [value] - The optional new value. If omitted the current value is preserved and range constrained.
	        * @param {number} [step] - The optional new step value. If omitted step is set to range/10.
	        * @returns {boolean} True if the slider was successfully reset from the specified values, otherwise false.
	        */
	        Slider.prototype.resetSlider = function (min, max, value, step) {
	            return this.resetSliderInternal(min, max, value, step, false);
	        };
	        /**
	        * @name - resetSliderInternal
	        * @description - Resets the slider from the specified values.
	        * @private
	        * @param {number} min - The new min value.
	        * @param {number} max - The new max value.
	        * @param {number} value - The optional new value. If omitted the current value is preserved and range constrained.
	        * @param {number} step - The optional new step value. If omitted step is set to range/10.
	        * @param {boolean} internal - Whether or not this reset was internally generated.
	        * @returns {boolean} True if the slider was successfully reset from the specified values, otherwise false.
	        */
	        Slider.prototype.resetSliderInternal = function (min, max, value, step, internal) {
	            if (!utility_1.isNumber(min) || !utility_1.isNumber(max)) {
	                return false;
	            }
	            if (Math.max(min, max) - Math.min(min, max) <= 0) {
	                return false;
	            }
	            this.min = Math.min(min, max);
	            this.max = Math.max(min, max);
	            this.range = this.max - this.min;
	            this.step = isNaN(step) ? (this.range / 10) : step;
	            this.value = Math.min(Math.max(isNaN(value) ? (isNaN(this.value) ? this.min : this.value) : value, this.min), this.max);
	            this.setupDimensions();
	            this.updateThumbOffset(this.thumbOffset, internal, false);
	            return true;
	        };
	        /**
	        * @name - setValue
	        * @description - Sets the slider's value to the specified value.
	        * @public
	        * @param {number} value - The new value.
	        * @returns {boolean} True if the slider's value was successfully updated to the specified value, otherwise false.
	        */
	        Slider.prototype.setValue = function (value) {
	            if (!utility_1.isNumber(value) || (value < this.min) || (value > this.max)) {
	                return false;
	            }
	            if (value !== this.value) {
	                this.thumbOffset = ((value - this.min) * this.thumbRange / this.range) + this.halfThumbOffset;
	                this.updateThumbOffset(this.thumbOffset, false, false);
	            }
	            return true;
	        };
	        /**
	        * @name - setupDimensions
	        * @description - Resets the dimensions and other members that use client coordinates
	        * @private
	        * @returns {void}
	        */
	        Slider.prototype.setupDimensions = function () {
	            this.dimensions = htmlExtensions_1.getClientRect(this.mockSlider);
	            if (this.isVerticalSlider) {
	                this.dimensions.left -= Slider.hitPadding;
	                this.dimensions.right += Slider.hitPadding;
	                // For now the vertical orientation of the slider is achieved by rotating 90 degrees so for
	                // vertical we'll still compute the thumbrange from the width instead of the height.
	                this.thumbRange = this.dimensions.height - this.thumb.clientWidth; // this.thumb.clientHeight;
	                this.maxThumbOffset = this.dimensions.height;
	            }
	            else {
	                this.dimensions.top -= Slider.hitPadding;
	                this.dimensions.bottom += Slider.hitPadding;
	                this.thumbRange = this.dimensions.width - this.thumb.clientWidth;
	                this.maxThumbOffset = this.dimensions.width;
	            }
	            this.thumbRange = Math.max(this.thumbRange, 1);
	            this.thumbOffset = ((this.value - this.min) * this.thumbRange / this.range) + this.halfThumbOffset;
	            this.stepOffset = this.thumbRange / (this.range / this.step);
	            this.setThumbPosition();
	        };
	        /**
	        * @name - setThumbPosition
	        * @description - Updates the thumb position based on the current thumbOffset
	        * @private
	        * @returns {void}
	        */
	        Slider.prototype.setThumbPosition = function () {
	            // Offset the thumbs edge so that it's centered on the thumbOffset.
	            var offset = Math.max(0, this.thumbOffset - this.halfThumbOffset);
	            htmlExtensions_1.css(this.thumb, htmlExtensions_1.Direction[this.primaryDirection], offset + 'px');
	            htmlExtensions_1.css(this.track, 'width', offset + 'px');
	        };
	        /**
	        * @name - updateThumbOffset
	        * @description - Updates the thumbOffset and slider value to the specified offset or the current thumbOffset if none is specified.
	        *                The offset will be in pixels, the slider's value will be set proportionally relative from the slider's range as
	        *                offset is to the slider's thumbRange.
	        * @private
	        * @param {number} offset - The new offset position for the thumb.
	        * @param {boolean} internal - Whether or not this update was internally or externally generated.
	        * @param {boolean} userInitiated - Whether or not this update was user initiated.
	        * @returns {void}
	        */
	        Slider.prototype.updateThumbOffset = function (offset, internal, userInitiated) {
	            if (!utility_1.isNumber(offset)) {
	                offset = this.thumbOffset;
	            }
	            // Ensure that the new offset value falls within the offset range.
	            this.thumbOffset = Math.min(Math.max(0, offset), this.maxThumbOffset);
	            // Find the % value of the thumbOffset within the thumbRange.
	            var value = Math.max(0, this.thumbOffset - this.halfThumbOffset) * 1000 * this.range / this.thumbRange;
	            // Convert the pixel value to the slider value
	            value = Math.round(value) / 1000 + this.min;
	            this.value = Math.min(Math.max(this.min, value), this.max);
	            // Set value tooltip text to null so we can tell if any subscriber updates it.
	            this.valueTooltipText = null;
	            this.initiatePublish({ value: this.value, internal: internal, userInitiated: userInitiated });
	            // If no subscriber updated the tooltip text default it to the new value.
	            if (!this.valueTooltipText) {
	                this.valueTooltipText = Math.round(this.value).toString();
	            }
	            // Match for colon because strings like "00:01" can be successfully
	            // converted to a float. We want to avoid this because strings that are not
	            // valid numbers between min and max should not be set as values for value
	            // and aria-valuenow attributes.
	            if (isNaN(parseFloat(this.valueTooltipText)) || this.valueTooltipText.match(':')) {
	                this.input.setAttribute('value', value.toString());
	                this.thumb.setAttribute('aria-valuenow', value.toString());
	                this.thumb.setAttribute('aria-valuetext', this.valueTooltipText);
	            }
	            else {
	                this.input.setAttribute('value', this.valueTooltipText);
	                this.thumb.setAttribute('aria-valuenow', this.valueTooltipText);
	            }
	            this.valueTooltip.innerHTML = this.valueTooltipText;
	            this.setThumbPosition();
	        };
	        /**
	        * @name - publish
	        * @description - Overridden publish callback called by the Publisher super class during a publish cycle.
	        *                This method will be called once for each registered subscriber.
	        * @protected
	        * @param {ISelectMenuSubscriber} subscriber - the subscriber to make the callback to.
	        * @param {any} context - the publish context use to determine which interface callback to make.
	        * @returns {void}
	        */
	        Slider.prototype.publish = function (subscriber, context) {
	            var valueTooltipText = subscriber.onValueChanged(context);
	            if (!!valueTooltipText && !this.valueTooltipText) {
	                // Subscribers can return a value to use for the tooltip text.
	                // We will use the first one, if any, that is returned.
	                this.valueTooltipText = valueTooltipText;
	            }
	        };
	        /**
	        * @name - moveThumbTo
	        * @description - Moves the slider's thumb to the specified x/y position.
	        *                Horizontal sliders only care about the x coordinate, vertical sliders only care about the y coordinate.
	        *                The point is first hit tested against the slider's hit rect, then, if it lies within it, the coordinate
	        *                is translated from client coordinate to relative offset. ltr/rtl adjustment is also made for horizontal sliders.
	        * @private
	        * @param {number} x - the x coordinate to move the thumb to for horizontal sliders.
	        * @param {number} y - the y coordinate to move the thumb to for vertical sliders.
	        * @returns {void}
	        */
	        Slider.prototype.moveThumbTo = function (x, y) {
	            if (!utility_1.pointInRect(x, y, this.dimensions)) {
	                return;
	            }
	            var offset = this.dimensions.bottom - y;
	            if (!this.isVerticalSlider) {
	                offset = (this.primaryDirection === htmlExtensions_1.Direction.left) ?
	                    x - this.dimensions.left :
	                    this.dimensions.right - x;
	            }
	            this.updateThumbOffset(offset, true, true);
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        Slider.init = function (input) {
	            utility_1.apiDeprecated('Slider.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Slider,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - selector to use to find Slider components in the document.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Slider.selector = '.c-slider';
	        /**
	        * @name - hitPadding
	        * @description - padding (in pixels) to add to the clientRect of the slider to increase the hit test area.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Slider.hitPadding = 20;
	        return Slider;
	    }(publisher_1.Publisher));
	    exports.Slider = Slider;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name='social'/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    /**
	     * Social component
	     *
	     * @export
	     * @class Social
	     */
	    var Social = (function (_super) {
	        __extends(Social, _super);
	        /**
	         * Creates an instance of Social.
	         *
	         * @param {HTMLElement} element - the Social element
	         */
	        function Social(element) {
	            var _this = this;
	            _super.call(this, element);
	            this.element = element;
	            /**
	             * aria-expanded attribute string
	             * aria-expanded deprecated v.1.10.0
	             * TODO: Remove aria-expanded in v.2.0
	             * @private
	             * @type {string}
	             */
	            this.ariaExpanded = 'aria-expanded';
	            /**
	             *  new button toggle attribute string
	             *
	             * @private
	             * @type {string}
	             */
	            this.buttonToggle = 'data-js-toggle';
	            /**
	             * aria-hidden attribute string
	             *
	             * @private
	             * @type {string}
	             */
	            this.ariaHidden = 'aria-hidden';
	            /**
	             * element hide class
	             *
	             * @private
	             * @type {string}
	             */
	            this.hideClass = 'f-hide';
	            /**
	             * boolean that describes whether or not some social icons are hidden
	             *
	             * @private
	             * @type {boolean}
	             */
	            this.isHidden = true;
	            /**
	             * threshold for adding the overflow behavior (to hide social icons)
	             *
	             * @private
	             * @type {number}
	             */
	            this.iconOverflowThresholdLength = 4;
	            /**
	             * the maximum number of icons to show
	             *
	             * @private
	             */
	            this.maxIconShowCount = this.iconOverflowThresholdLength - 1;
	            /**
	            * @name - handleMouseUp
	            * @description - Handle mouseup event
	            *
	            * @param {MouseEvent} event - the event object
	            * @private
	            * @returns {Void}
	            */
	            this.handleMouseUp = function (event) {
	                _this.handleToggle(false);
	            };
	            /**
	            * @name - handleKeydown
	            * @description - Handle keydown event
	            *
	            * @param {KeyboardEvent} event - the event object
	            * @private
	            * @returns {Void}
	            */
	            this.handleKeydown = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                var keyCode = utility_1.getKeyCode(event);
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                switch (keyCode) {
	                    case 9 /* Tab */:
	                        if (!_this.isHidden && target === _this.icons[_this.maxIconShowCount] && event.shiftKey) {
	                            htmlExtensions_1.preventDefault(event);
	                            _this.handleToggle(false);
	                            _this.toggle.focus();
	                        }
	                        break;
	                    case 13 /* Enter */:
	                        if (target === _this.toggle) {
	                            _this.handleToggle(true);
	                        }
	                        break;
	                }
	            };
	            /**
	            * @name - handleToggle
	            * @description - Handle keydown event
	            *
	            * @param {boolean} - setFocus: should the method set keyboard focus
	            * @private
	            * @returns {Void}
	            */
	            this.handleToggle = function (setFocus) {
	                _this.isHidden ? _this.toggleIcons(false, setFocus) : _this.toggleIcons(true, setFocus);
	                if (_this.ariaExpanded) {
	                    _this.toggle.setAttribute(_this.ariaExpanded, (!_this.isHidden).toString());
	                }
	                _this.toggle.setAttribute(_this.buttonToggle, (!_this.isHidden).toString());
	            };
	            /**
	             * toggles the visible icons
	             *
	             * @private
	             * @param {boolean} wantToHideOverflow - true if the caller wants to hide the second set of icons
	             * @param {boolean} setFocus - should the method set keyboard focus
	             * @returns {Void}
	             */
	            this.toggleIcons = function (wantToHideOverflow, setFocus) {
	                // set the class of the first set of icons
	                for (var iconIndex = 0; iconIndex < _this.maxIconShowCount; iconIndex++) {
	                    wantToHideOverflow ?
	                        htmlExtensions_1.removeClass(_this.icons[iconIndex], _this.hideClass) :
	                        htmlExtensions_1.addClass(_this.icons[iconIndex], _this.hideClass);
	                }
	                // set the class of the second set of icons
	                for (var iconIndex = _this.maxIconShowCount; iconIndex < _this.icons.length; iconIndex++) {
	                    wantToHideOverflow ?
	                        htmlExtensions_1.addClass(_this.icons[iconIndex], _this.hideClass) :
	                        htmlExtensions_1.removeClass(_this.icons[iconIndex], _this.hideClass);
	                }
	                // set focus if keyboard action
	                if (setFocus) {
	                    if (wantToHideOverflow) {
	                        _this.icons[0].focus();
	                    }
	                    else {
	                        _this.icons[_this.maxIconShowCount].focus();
	                    }
	                }
	                _this.isHidden = wantToHideOverflow;
	            };
	            if (!element) {
	                return;
	            }
	            this.update();
	        }
	        /**
	         * @name - update
	         * @description - updates the component state
	         *
	         * @protected
	         * @returns {Void}
	         */
	        Social.prototype.update = function () {
	            this.icons = htmlExtensions_1.selectElementsT('a[itemprop="sameAs"]', this.element);
	            if (!this.icons || !this.icons.length) {
	                return;
	            }
	            this.toggle = htmlExtensions_1.selectFirstElement('button', this.element);
	            if (this.toggle) {
	                htmlExtensions_1.addEvent(this.toggle, htmlExtensions_1.eventTypes.mouseup, this.handleMouseUp);
	                htmlExtensions_1.addEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.handleKeydown);
	                if (this.icons.length > this.iconOverflowThresholdLength) {
	                    this.toggle.setAttribute(this.ariaHidden, 'false');
	                    if (this.ariaExpanded) {
	                        this.toggle.setAttribute(this.ariaExpanded, 'false');
	                    }
	                    else {
	                        this.toggle.setAttribute(this.buttonToggle, 'false');
	                    }
	                    this.toggleIcons(true, false);
	                }
	            }
	        };
	        /**
	         * @name - teardown
	         * @description - cleans up the component
	         *
	         * @protected
	         * @returns {Void}
	         */
	        Social.prototype.teardown = function () {
	            htmlExtensions_1.removeEvent(this.toggle, htmlExtensions_1.eventTypes.mouseup, this.handleMouseUp);
	            htmlExtensions_1.removeEvent(this.element, htmlExtensions_1.eventTypes.keydown, this.handleKeydown);
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        Social.init = function (input) {
	            utility_1.apiDeprecated('Social.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Social,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	         * default social selector
	         *
	         * @static
	         * @type {string}
	         */
	        Social.selector = '.m-social';
	        return Social;
	    }(observableComponent_1.ObservableComponent));
	    exports.Social = Social;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="supplementalNavigation"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(3), __webpack_require__(9), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, htmlExtensions_1, observableComponent_1, componentFactory_1, utility_1) {
	    "use strict";
	    /**
	    * @class - SupplementalNavigation
	    * @classdesc - The SupplementalNavigation component
	    * @export
	    */
	    var SupplementalNavigation = (function (_super) {
	        __extends(SupplementalNavigation, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the SupplementalNavigation module.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the SupplementalNavigation behavior to.
	        */
	        function SupplementalNavigation(element) {
	            var _this = this;
	            _super.call(this, element);
	            // --------------------------------------------------------------------------------------------
	            // Event listeners
	            // --------------------------------------------------------------------------------------------
	            /**
	            * @name - onExpandableItemClicked
	            * @description - Handles expandable item click events, calls setExpandedItem to do the real work.
	            * @private
	            * @param {MouseEvent} event - The keyboard event.
	            * @returns {void}
	            */
	            this.onExpandableItemClicked = function (event) {
	                _this.setExpandedItem(htmlExtensions_1.getEventTargetOrSrcElement(event));
	            };
	            /**
	            * @name - onActivatableItemClicked
	            * @description - Handles activatable item click events, calls setActiveItem to do the real work.
	            * @private
	            * @param {MouseEvent} event - The keyboard event.
	            * @returns {void}
	            */
	            this.onActivatableItemClicked = function (event) {
	                _this.setActiveItem(htmlExtensions_1.getEventTargetOrSrcElement(event));
	            };
	            /**
	            * @name - keydownEventListener
	            * @description - Handles activatable and expandable item keydown events. Calls itemKeydownHandler to do the real work.
	            * @private
	            * @param {KeyboardEvent} event - The keyboard event.
	            * @returns {void}
	            */
	            this.keydownEventListener = function (event) {
	                if (_this.itemKeydownHandler(htmlExtensions_1.getEventTargetOrSrcElement(event), utility_1.getKeyCode(event))) {
	                    htmlExtensions_1.preventDefault(event);
	                }
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        SupplementalNavigation.prototype.update = function () {
	            if (!this.element) {
	                return null;
	            }
	            this.items = htmlExtensions_1.selectElements(SupplementalNavigation.itemSelector, this.element);
	            var activeItems = htmlExtensions_1.selectElements('.' + SupplementalNavigation.activeSelector, this.element);
	            this.activeItem = (!activeItems) ? null : activeItems.shift();
	            // If for any reason there was more than one active item make all except the first inactive.
	            for (var _i = 0, activeItems_1 = activeItems; _i < activeItems_1.length; _i++) {
	                var item = activeItems_1[_i];
	                htmlExtensions_1.removeClass(item, SupplementalNavigation.activeSelector);
	            }
	            // Ensure that the expandedItem is synced to the activeItem
	            this.syncExpandedItem();
	            // Loop through all the anchors hooking up the appropriate click handler for each one
	            if (this.items && this.items.length) {
	                for (var _a = 0, _b = this.items; _a < _b.length; _a++) {
	                    var item = _b[_a];
	                    if (this.isExpandable(item)) {
	                        // Hook all expandable items up to the expand/collapse handler
	                        htmlExtensions_1.addEvent(item, htmlExtensions_1.eventTypes.click, this.onExpandableItemClicked);
	                    }
	                    else {
	                        // Hook all non-expandable items up to the activation handler
	                        htmlExtensions_1.addEvent(item, htmlExtensions_1.eventTypes.click, this.onActivatableItemClicked);
	                    }
	                }
	                htmlExtensions_1.addEvent(this.items, htmlExtensions_1.eventTypes.keydown, this.keydownEventListener);
	            }
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        SupplementalNavigation.prototype.teardown = function () {
	            // Loop through all the anchors and remove hooks for each one
	            if (this.items && this.items.length) {
	                for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
	                    var item = _a[_i];
	                    if (this.isExpandable(item)) {
	                        // Hook all expandable items up to the expand/collapse handler
	                        htmlExtensions_1.removeEvent(item, htmlExtensions_1.eventTypes.click, this.onExpandableItemClicked);
	                    }
	                    else {
	                        // Hook all non-expandable items up to the activation handler
	                        htmlExtensions_1.removeEvent(item, htmlExtensions_1.eventTypes.click, this.onActivatableItemClicked);
	                    }
	                }
	                htmlExtensions_1.removeEvent(this.items, htmlExtensions_1.eventTypes.keydown, this.keydownEventListener);
	            }
	            // Reset non static members
	            this.items = null;
	            this.activeItem = null;
	            this.expandedItem = null;
	        };
	        /**
	        * @name - setExpandedItem
	        * @description - Set the specified expandable item to be the expanded item.
	        * @private
	        * @param  {HTMLElement} item
	        * @returns {void}
	        */
	        SupplementalNavigation.prototype.setExpandedItem = function (item) {
	            if ((!!item) && (item !== this.expandedItem)) {
	                this.collapseItem(this.expandedItem);
	                this.expandItem(item);
	            }
	        };
	        /**
	        * @name - setActiveItem
	        * @description - Set the specified non expandable item to be the active item.
	        * @private
	        * @param  {HTMLElement} item
	        * @returns {void}
	        */
	        SupplementalNavigation.prototype.setActiveItem = function (item) {
	            if ((!!item) && (!!item.parentElement) && (item.parentElement.getAttribute('aria-hidden') !== 'false')) {
	                this.expandedItem = null;
	            }
	            if ((!!item) && (item !== this.activeItem)) {
	                htmlExtensions_1.removeClass(this.activeItem, SupplementalNavigation.activeSelector);
	                this.activeItem = item;
	                htmlExtensions_1.addClass(this.activeItem, SupplementalNavigation.activeSelector);
	                this.syncExpandedItem();
	            }
	        };
	        /**
	        * @name - expandItem
	        * @description - Expands the specified expandable item.
	        * @private
	        * @param  {HTMLElement} item
	        * @returns {void}
	        */
	        SupplementalNavigation.prototype.expandItem = function (item) {
	            if (!!item) {
	                var toExpand = this.getExpandableElementForExpandableItem(item);
	                var expanded = this.getExpandableElementForExpandableItem(this.expandedItem);
	                if ((!!toExpand) && ((!expanded) || (toExpand !== expanded))) {
	                    item.setAttribute('data-state', SupplementalNavigation.stateNames.expanded);
	                    toExpand.setAttribute('aria-hidden', 'false');
	                    toExpand.style.height = 'auto';
	                    toExpand.style.overflow = 'visible';
	                    this.collapseItem(this.expandedItem);
	                    this.expandedItem = item;
	                    // Restore the expanded items to the default tab order.
	                    for (var _i = 0, _a = htmlExtensions_1.selectElements(SupplementalNavigation.itemSelector, toExpand); _i < _a.length; _i++) {
	                        var item_1 = _a[_i];
	                        item_1.removeAttribute(SupplementalNavigation.tabIndexAttribute);
	                    }
	                }
	            }
	        };
	        /**
	        * @name - collapseItem
	        * @description - Collapses the specified expandable item.
	        * @private
	        * @param  {HTMLElement} item
	        * @returns {void}
	        */
	        SupplementalNavigation.prototype.collapseItem = function (item) {
	            if (!!item) {
	                var expandedElement = document.getElementById(item.getAttribute('aria-controls'));
	                if (!!expandedElement) {
	                    item.setAttribute('data-state', SupplementalNavigation.stateNames.collapsed);
	                    expandedElement.setAttribute('aria-hidden', 'true');
	                    expandedElement.style.height = '0';
	                    expandedElement.style.overflow = 'hidden';
	                    // Remove the collapsed items from the default tab order.
	                    for (var _i = 0, _a = htmlExtensions_1.selectElements(SupplementalNavigation.itemSelector, expandedElement); _i < _a.length; _i++) {
	                        var item_2 = _a[_i];
	                        item_2.setAttribute(SupplementalNavigation.tabIndexAttribute, '-1');
	                    }
	                }
	            }
	        };
	        /**
	        * @name - isExpandable
	        * @description - Determines if the specified element is expandable.
	        * @private
	        * @param  {HTMLElement} item
	        * @returns {boolean} true if the specified item is expandable, otherwise false
	        */
	        SupplementalNavigation.prototype.isExpandable = function (item) {
	            return ((!!item) && item.hasAttribute('data-state') && item.hasAttribute('aria-controls')) ? true : false;
	        };
	        /**
	        * @name - syncExpandedItem
	        * @description - Sync the expanded item state to the active item.
	        * @private
	        * @returns {void}
	        */
	        SupplementalNavigation.prototype.syncExpandedItem = function () {
	            if (this.items && this.items.length && this.activeItem) {
	                var toExpand = this.getExpandableElementForActiveItem();
	                var expanded = this.getExpandableElementForExpandableItem(this.expandedItem);
	                if (!expanded || (expanded !== toExpand)) {
	                    // Loop through all the anchors making only the one associated with the active item expanded and collapsing all others.
	                    for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
	                        var item = _a[_i];
	                        if (this.isExpandable(item)) {
	                            if (!!toExpand && (this.getExpandableElementForExpandableItem(item) === toExpand)) {
	                                // This expandable item is associated with the active item so ensure its expanded.
	                                this.expandItem(item);
	                            }
	                            else {
	                                // This expandable item is *not* associated with the active item so ensure its collapsed.
	                                this.collapseItem(item);
	                            }
	                        }
	                    }
	                }
	            }
	        };
	        /**
	        * @name - getExpandableElementForActiveItem
	        * @description - Gets the associated expandable item, if any, to expand for the active item.
	        * @private
	        * @returns {HTMLElement} - The expandable element, if any, associated with the activeItem, otherwise null.
	        */
	        SupplementalNavigation.prototype.getExpandableElementForActiveItem = function () {
	            if (!!this.activeItem &&
	                !!this.activeItem.parentElement &&
	                this.activeItem.parentElement.hasAttribute('id')) {
	                return this.activeItem.parentElement;
	            }
	            return null;
	        };
	        /**
	        * @name - getExpandableElementForActiveItem
	        * @description - Gets the associated expandable item, if any, to expand for an expandable item.
	        * @private
	        * @param  {HTMLElement} item
	        * @returns {HTMLElement} - The expandable element, if any, associated with the specified expandable item, otherwise null.
	        */
	        SupplementalNavigation.prototype.getExpandableElementForExpandableItem = function (item) {
	            return (this.isExpandable(item) && !!item.nextElementSibling) ? item.nextElementSibling : null;
	        };
	        /**
	        * @name - itemKeydownHandler
	        * @description - Handles activatable and expandable item keydown events.
	        * @private
	        * @param {HTMLElement} item - The item.
	        * @param {number} keyCode - The keyCode.
	        * @returns {boolean} - True if the default action should be prevented, otherwise false.
	        */
	        SupplementalNavigation.prototype.itemKeydownHandler = function (item, keyCode) {
	            if (!item || !keyCode) {
	                return false;
	            }
	            switch (keyCode) {
	                case 32 /* Space */:
	                case 13 /* Enter */: {
	                    if (this.isExpandable(item)) {
	                        this.setExpandedItem(item);
	                        return true;
	                    }
	                    break;
	                }
	            }
	            return false;
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        SupplementalNavigation.init = function (input) {
	            utility_1.apiDeprecated('SupplementalNavigation.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: SupplementalNavigation,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        /**
	        * @name - selector
	        * @description - The SupplementalNavigation module selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        SupplementalNavigation.selector = '.m-supplemental-nav';
	        /**
	        * @name - activeSelector
	        * @description - The active item selector.
	        * @static
	        * @private
	        * @type {string}
	        */
	        SupplementalNavigation.activeSelector = 'f-active';
	        /**
	        * @name - itemSelector
	        * @description - The item selector.
	        * @static
	        * @private
	        * @type {string}
	        */
	        SupplementalNavigation.itemSelector = 'a, button';
	        /**
	        * @name - tabIndexAttribute
	        * @description - The tabindex attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        SupplementalNavigation.tabIndexAttribute = 'tabindex';
	        /**
	        * @name - dataState
	        * @description - The data-state attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        SupplementalNavigation.dateState = 'data-state';
	        /**
	        * @name - stateNames
	        * @description - The data-state attribute values.
	        * @static
	        * @private
	        * @type {string}
	        */
	        SupplementalNavigation.stateNames = { expanded: 'expanded', collapsed: 'collapsed' };
	        return SupplementalNavigation;
	    }(observableComponent_1.ObservableComponent));
	    exports.SupplementalNavigation = SupplementalNavigation;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="table"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(3), __webpack_require__(4), __webpack_require__(10), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, observableComponent_1, htmlExtensions_1, utility_1, stringExtensions_1) {
	    "use strict";
	    /**
	    * @class - Table
	    * @classdesc - The Table component
	    * @export
	    */
	    var Table = (function (_super) {
	        __extends(Table, _super);
	        /**
	        * @name - constructor
	        * @description - Constructor for the Table component.
	        * @public
	        * @param {HTMLElement} element - the native element to attach the Table behavior to.
	        */
	        function Table(element) {
	            var _this = this;
	            _super.call(this, element);
	            /**
	            * @name - onSortButtonClicked
	            * @description - Handles the sort button click events.
	            *                Calls reSort to do the real re-sorting work.
	            * @private
	            * @param {Event} - The click event.
	            * @returns {void}
	            */
	            this.onSortButtonClicked = function (event) {
	                var candidate = (event.currentTarget || htmlExtensions_1.getEventTargetOrSrcElement(event));
	                var sortButton;
	                // If candidate doesn't immediately point at our sort button
	                // start walking up its parentElement chain until we find it.
	                while (candidate !== _this.element) {
	                    if (candidate.getAttribute('data-sort-index')) {
	                        sortButton = candidate;
	                        break;
	                    }
	                    candidate = candidate.parentElement;
	                }
	                if (sortButton) {
	                    _this.reSort(sortButton);
	                }
	            };
	            /**
	            * @name - onSortButtonKeydown
	            * @description - Handles the sort button keydown events. We use this to impose our own tab order
	            * @private
	            * @param {KeyboardEvent} - The keydown event.
	            * @returns {void}
	            */
	            this.onSortButtonKeydown = function (event) {
	                if ((utility_1.getKeyCode(event) === 9 /* Tab */) || (utility_1.getVirtualKey(event) === 'Tab')) {
	                    var sortButton = (event.currentTarget || htmlExtensions_1.getEventTargetOrSrcElement(event));
	                    var currentInfo = void 0;
	                    var targetInfo = void 0;
	                    if (event.shiftKey) {
	                        // Find the previous info in this.columnInfos
	                        for (var _i = 0, _a = _this.columnInfos; _i < _a.length; _i++) {
	                            var info = _a[_i];
	                            if (info && info.button) {
	                                if (info.button === sortButton) {
	                                    currentInfo = info;
	                                    break;
	                                }
	                                else {
	                                    targetInfo = info;
	                                }
	                            }
	                        }
	                    }
	                    else {
	                        // Find the next info in this.columnInfos
	                        for (var _b = 0, _c = _this.columnInfos; _b < _c.length; _b++) {
	                            var info = _c[_b];
	                            if (info && info.button) {
	                                if (info.button === sortButton) {
	                                    currentInfo = info;
	                                }
	                                else if (currentInfo) {
	                                    targetInfo = info;
	                                    break;
	                                }
	                            }
	                        }
	                    }
	                    if (currentInfo && targetInfo) {
	                        htmlExtensions_1.preventDefault(event);
	                        targetInfo.button.focus();
	                    }
	                }
	            };
	            this.update();
	        }
	        /**
	        * @name - update
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @protected
	        * @returns {void}
	        */
	        Table.prototype.update = function () {
	            if (!this.element) {
	                return;
	            }
	            this.sortableTable = htmlExtensions_1.selectFirstElementT('table[data-f-sort="true"]', this.element);
	            if (!!this.sortableTable && !this.ariaLiveRegion) {
	                this.ariaLiveRegion = document.createElement('p');
	                htmlExtensions_1.addClass(this.ariaLiveRegion, 'x-screen-reader');
	                this.ariaLiveRegion.setAttribute('aria-live', 'polite');
	                this.element.appendChild(this.ariaLiveRegion);
	                this.ascendingLocString = this.element.getAttribute('data-f-loc-ascending') || 'Sorted by {0} - ascending';
	                this.descendingLocString = this.element.getAttribute('data-f-loc-dascending') || 'Sorted by {0} - descending';
	            }
	            this.reloadTable();
	        };
	        /**
	        * @name - teardown
	        * @description - Called by ObservableComponent when the component needs to clean up its state.
	        *                Components should remove any event bindings they've added to ensure they are
	        *                not duplicated during repeated update/teardown cycles.
	        * @protected
	        * @returns {void}
	        */
	        Table.prototype.teardown = function () {
	            // Remove the click listeners.
	            for (var _i = 0, _a = htmlExtensions_1.selectElementsT('thead > tr', this.sortableTable); _i < _a.length; _i++) {
	                var sortableRow = _a[_i];
	                for (var cellIndex = 0, cellsLength = sortableRow.cells.length; cellIndex < cellsLength; cellIndex++) {
	                    var cell = sortableRow.cells[cellIndex];
	                    if (htmlExtensions_1.hasClass(cell, 'f-sortable')) {
	                        htmlExtensions_1.removeEvent(cell.firstElementChild, htmlExtensions_1.eventTypes.click, this.onSortButtonClicked);
	                        htmlExtensions_1.removeEvent(cell.firstElementChild, htmlExtensions_1.eventTypes.keydown, this.onSortButtonKeydown);
	                    }
	                }
	            }
	            // Reset non static members
	            this.sortableTable = null;
	            this.tableBody = null;
	            this.originalRows = null;
	            this.columnInfos = null;
	        };
	        /**
	        * @name - alertUserToSorting
	        * @description - Writes text to the ariaLiveRegion
	        *
	        * @param {string} columnHeaderString - The string from the column header
	        * @param {string} locString - The localized string to format with the columnHeaderString
	        * @private
	        * @returns {void}
	        */
	        Table.prototype.alertUserToSorting = function (columnHeaderString, locString) {
	            var _this = this;
	            if (!this.ariaLiveRegion) {
	                return;
	            }
	            htmlExtensions_1.setText(this.ariaLiveRegion, stringExtensions_1.format(locString, columnHeaderString));
	            // Remove content after short interval so that screen readers do not hear
	            // this again after moving through the whole table.
	            setTimeout(function () {
	                _this.ignoreNextDOMChange = true;
	                htmlExtensions_1.removeInnerHtml(_this.ariaLiveRegion);
	            }, 3000);
	        };
	        /**
	        * @name - reloadTable
	        * @description - Reloads the tbody rows information.
	        * Call this whenever the tbody rows have changed.
	        * @private
	        * @returns {void}
	        */
	        Table.prototype.reloadTable = function () {
	            // We may have both sortable and non-sortable tables on the page so check that this one is sortable first
	            if (this.sortableTable) {
	                if (!this.tableBody) {
	                    this.tableBody = htmlExtensions_1.selectFirstElementT('tbody', this.sortableTable);
	                }
	                this.originalRows = null;
	                if (!!this.tableBody) {
	                    this.originalRows = htmlExtensions_1.selectElementsT('tr', this.tableBody);
	                    this.rebuildSortInfo();
	                }
	            }
	        };
	        /**
	        * @name - rebuildSortInfo
	        * @description - Rebuilds the SortInfo collection.
	        *                Call this whenever the tbody rows have changed or the sortable column headers have changed.
	        * @private
	        * @returns {void}
	        */
	        Table.prototype.rebuildSortInfo = function () {
	            // Ensure there are sortable rows before doing more
	            if (!this.originalRows || !this.originalRows.length) {
	                return;
	            }
	            // Ensure that the colummnInfo's are built first in case they may not have been.
	            if (!this.columnInfos || !this.columnInfos.length) {
	                this.rebuildColumnInfo();
	            }
	            if (this.columnInfos && this.columnInfos.length) {
	                // Build a SortOrder for each sortable column
	                for (var columnInfosIndex = 0, columnInfoslength = this.columnInfos.length; columnInfosIndex < columnInfoslength; columnInfosIndex++) {
	                    // Unsortable columns are null and can just be skipped...
	                    if (this.columnInfos[columnInfosIndex]) {
	                        var sortOrder = new Array();
	                        for (var originalRowsIndex = 0, originalRowsLength = this.originalRows.length; originalRowsIndex < originalRowsLength; originalRowsIndex++) {
	                            var row = this.originalRows[originalRowsIndex];
	                            var sortInfo = new SortInfo(originalRowsIndex, this.getSortKey(row.cells[columnInfosIndex]));
	                            sortOrder.push(sortInfo);
	                        }
	                        this.columnInfos[columnInfosIndex].sortOrder = sortOrder;
	                    }
	                }
	            }
	        };
	        /**
	        * @name - rebuildColumnInfo
	        * @description - Rebuilds the ColumnInfo collection.
	        *                Call this whenever the sortable column headers have changed.
	        * @private
	        * @returns {void}
	        */
	        Table.prototype.rebuildColumnInfo = function () {
	            var sortableHeaderRows = htmlExtensions_1.selectElementsT('thead > tr', this.sortableTable);
	            this.columnInfos = [];
	            // First we determine which columns are sortable by looping through the <thead><tr>'s and building the ColumnInfos so we'll know
	            // which columns are sortable and which aren't. We'll put these into the this.columnInfos collection such that it has ColumnInfo
	            // object entry for each sortable column and a null for each unsortable column.
	            // NOTE: This is a simplistic mapping that:
	            // assumes a two header row maximum,
	            // ignores rowSpan,
	            // and assumes colSpan greater than one implies unsortable.
	            for (var sortableRowsIndex = 0, sortableRowsLength = sortableHeaderRows.length; sortableRowsIndex < sortableRowsLength; sortableRowsIndex++) {
	                var nextColumnIndex = this.findNextNull(this.columnInfos, 0);
	                for (var cellIndex = 0, cellsLength = sortableHeaderRows[sortableRowsIndex].cells.length; cellIndex < cellsLength; cellIndex++) {
	                    var cell = sortableHeaderRows[sortableRowsIndex].cells[cellIndex];
	                    if (htmlExtensions_1.hasClass(cell, 'f-sortable')) {
	                        var sortButton = cell.firstElementChild;
	                        var columnInfo = new ColumnInfo(cell, sortButton);
	                        cell.setAttribute('aria-sort', 'none');
	                        sortButton.setAttribute('data-sort-index', nextColumnIndex.toString());
	                        htmlExtensions_1.addClass(sortButton, 'c-glyph');
	                        htmlExtensions_1.addEvent(sortButton, htmlExtensions_1.eventTypes.click, this.onSortButtonClicked);
	                        htmlExtensions_1.addEvent(sortButton, htmlExtensions_1.eventTypes.keydown, this.onSortButtonKeydown);
	                        this.columnInfos[nextColumnIndex] = columnInfo;
	                        nextColumnIndex = this.findNextNull(this.columnInfos, nextColumnIndex + 1);
	                    }
	                    else if (sortableRowsIndex === 0) {
	                        // For first thead/tr only we need to push nulls into the list for unsortable columns
	                        for (var spanIndex = 0, span = cell.colSpan; spanIndex < span; spanIndex++) {
	                            this.columnInfos.push(null);
	                            nextColumnIndex++;
	                        }
	                    }
	                    else {
	                        nextColumnIndex++;
	                    }
	                }
	            }
	            if (this.columnInfos.length > 2) {
	                // Go through all the columnInfos removing all but the first and last buttons from the tab order so we can impose our own.
	                var first = void 0;
	                var last = void 0;
	                for (var _i = 0, _a = this.columnInfos; _i < _a.length; _i++) {
	                    var info = _a[_i];
	                    if (info && info.button) {
	                        if (!first) {
	                            first = info;
	                        }
	                        else {
	                            if (last) {
	                                last.button.setAttribute('tabIndex', '-1');
	                            }
	                            last = info;
	                        }
	                    }
	                }
	            }
	        };
	        /**
	        * @name - findNextNull
	        * @description - Find the next index in the ColumnInfo[] that contains a null.
	        * @private
	        * @param {ColumnInfo[]} array - The array to look in.
	        * @param {number} start - The index to start the search from.
	        * @returns {number} - The index of the next null entry, or the length of the array if there are no null entries.
	        */
	        Table.prototype.findNextNull = function (array, start) {
	            for (var index = start, length_1 = array.length; index < length_1; index++) {
	                if (!array[index]) {
	                    return index;
	                }
	            }
	            return array.length;
	        };
	        /**
	        * @name - reSort
	        * @description - Re-sorts the table by the column associated with the specified sort button.
	        * @private
	        * @param {HTMLElement} sortButton.
	        * @returns {void}
	        */
	        Table.prototype.reSort = function (sortButton) {
	            var columnInfo = this.columnInfos[parseInt(sortButton.getAttribute('data-sort-index'), 10)];
	            var sortOrder = columnInfo.header.getAttribute('aria-sort');
	            var ascending = (sortOrder !== 'ascending');
	            this.clearSortIndicators();
	            this.reorderTableRows(columnInfo, ascending);
	            if (ascending) {
	                columnInfo.header.setAttribute('aria-sort', 'ascending');
	                htmlExtensions_1.addClass(columnInfo.button, 'f-ascending');
	                this.alertUserToSorting(htmlExtensions_1.getText(sortButton), this.ascendingLocString);
	            }
	            else {
	                columnInfo.header.setAttribute('aria-sort', 'descending');
	                htmlExtensions_1.addClass(columnInfo.button, 'f-descending');
	                this.alertUserToSorting(htmlExtensions_1.getText(sortButton), this.descendingLocString);
	            }
	        };
	        /**
	        * @name - clearSortIndicators
	        * @description - Clear the sort indicators from all the columns.
	        * @private
	        * @returns {void}
	        */
	        Table.prototype.clearSortIndicators = function () {
	            for (var _i = 0, _a = this.columnInfos; _i < _a.length; _i++) {
	                var columnInfo = _a[_i];
	                if (!columnInfo) {
	                    continue;
	                }
	                columnInfo.header.setAttribute('aria-sort', 'none');
	                htmlExtensions_1.removeClass(columnInfo.button, 'f-descending');
	                htmlExtensions_1.removeClass(columnInfo.button, 'f-ascending');
	            }
	        };
	        /**
	        * @name - reorderTableRows
	        * @description - Reorder the table rows using the specified ColumnInfo.
	        * @private
	        * @param {ColumnInfo} columnInfo - The ColumnInfo to reorder by.
	        * @param {boolean} ascending - Ascending or descending order.
	        * @returns {void}
	        */
	        Table.prototype.reorderTableRows = function (columnInfo, ascending) {
	            var count = this.tableBody.rows.length;
	            columnInfo.ensureColumnInfoIsSorted();
	            // Set the ignore flag because we're intentionally changing the DOM here and
	            // don't want to trigger teardown/update cycle due to our re-sorting the table rows.
	            this.ignoreNextDOMChange = true;
	            for (var index = 0; index < count; index++) {
	                var sortInfo = ascending ? columnInfo.sortOrder[index] : columnInfo.sortOrder[count - index - 1];
	                this.tableBody.appendChild(this.originalRows[sortInfo.originalRowIndex]);
	            }
	        };
	        /**
	        * @name - getSortKey
	        * @description - Reorder the table rows using the specified ColumnInfo.
	        * @private
	        * @param {HTMLTableCellElement} cell - the cell to get the sort key of.
	        * @returns {string} - The sort key for the cell content.
	        */
	        Table.prototype.getSortKey = function (cell) {
	            if (htmlExtensions_1.hasClass(cell, 'f-numerical')) {
	                //Find numerical values and strip everything except the int
	                if (htmlExtensions_1.selectElements('[content="0.00"]', cell).length > 0) {
	                    // Set free items to 0
	                    return '';
	                }
	                var str = cell.textContent || cell.innerText;
	                var matches = str.match(Table.floatRegEx);
	                if (!!matches) {
	                    return matches[0];
	                }
	            }
	            //Not a numerical value or empty, return full raw string
	            return (cell.textContent || cell.innerText).trim();
	        };
	        /**
	        * @name - selector
	        * @description - The pagination component selector.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Table.selector = '.c-table';
	        /**
	        * @name - floatRegEx
	        * @description - The floating point number regex matcher. Used to determine if a text value is a floating point number.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Table.floatRegEx = /(\d+|\,|\.)+/g;
	        return Table;
	    }(observableComponent_1.ObservableComponent));
	    exports.Table = Table;
	    /**
	    * @class - SortInfo
	    * @classdesc - Contains the sort information for each sorted item.
	    */
	    var SortInfo = (function () {
	        /**
	        * @name - constructor
	        * @description - Constructor for the SortInfo class.
	        * @public
	        * @param {number} rowIndex - The original row index this sort key is from.
	        * @param {string} key - The sort key value.
	        */
	        function SortInfo(rowIndex, key) {
	            this.originalRowIndex = rowIndex;
	            this.key = key;
	        }
	        return SortInfo;
	    }());
	    /**
	    * @class - ColumnInfo
	    * @classdesc - Contains the state information about each sortable column.
	    */
	    var ColumnInfo = (function () {
	        /**
	        * @name - constructor
	        * @description - Constructor for the SortInfo class.
	        * @public
	        * @param {HTMLTableHeaderCellElement} header - The original row index this sort key is from.
	        * @param {HTMLButtonElement} button - The sort key value.
	        */
	        function ColumnInfo(header, button) {
	            this.header = header;
	            this.button = button;
	        }
	        /**
	        * @name - ensureColumnInfoIsSorted
	        * @description - Ensures that the sortOrder collection is sorted.
	        * @private
	        * @returns {void}
	        */
	        ColumnInfo.prototype.ensureColumnInfoIsSorted = function () {
	            if (this.sortOrder && !this.isSorted) {
	                this.sortOrder.sort(function (a, b) {
	                    var aVal = a.key;
	                    var bVal = b.key;
	                    if (aVal === bVal) {
	                        return 0;
	                    }
	                    var fA = parseFloat(aVal);
	                    var fB = parseFloat(bVal);
	                    if (isNaN(fA) || isNaN(fB)) {
	                        return (aVal > bVal) ? 1 : -1;
	                    }
	                    return (fA > fB) ? 1 : -1;
	                });
	                this.isSorted = true;
	            }
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        ColumnInfo.init = function (input) {
	            utility_1.apiDeprecated('Table.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Table,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        return ColumnInfo;
	    }());
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="toggle"/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(9), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, observableComponent_1, componentFactory_1, HtmlExtensions, utility_1) {
	    "use strict";
	    var Toggle = (function (_super) {
	        __extends(Toggle, _super);
	        function Toggle(element) {
	            var _this = this;
	            _super.call(this, element);
	            // String for aria-checked
	            this.ariaCheckedString = 'aria-checked';
	            /**
	             * toggleCheckedState()
	             * Switch the checked state of the toggle
	             */
	            this.toggleCheckedState = function () {
	                _this.isChecked() ? _this.uncheckToggle() : _this.checkToggle();
	            };
	            if (!element) {
	                return;
	            }
	            this.update();
	        }
	        /**
	         * Update the component state.
	         *
	         * @protected
	         * @abstract
	         */
	        Toggle.prototype.update = function () {
	            this.toggleButton = HtmlExtensions.selectFirstElementT('button', this.element);
	            this.toggleIndicatorElement = HtmlExtensions.selectFirstElement('button + span', this.element);
	            if (!this.toggleIndicatorElement || !this.toggleButton) {
	                return;
	            }
	            this.checkedString = this.toggleIndicatorElement.getAttribute('data-on-string');
	            this.uncheckedString = this.toggleIndicatorElement.getAttribute('data-off-string');
	            // Disable toggles that are in disabled state
	            this.isDisabled() ? this.disableToggle() : this.enableToggle();
	            // Set the toggled state
	            this.toggleIndicatorElement.innerHTML = this.isChecked() ? this.checkedString : this.uncheckedString;
	            // Add click events
	            HtmlExtensions.addEvent(this.toggleButton, HtmlExtensions.eventTypes.click, this.toggleCheckedState);
	            HtmlExtensions.addEvent(this.toggleIndicatorElement, HtmlExtensions.eventTypes.click, this.toggleCheckedState);
	        };
	        /**
	         * Cleaning up the old state of the component.
	         *
	         * @protected
	         * @abstract
	         */
	        Toggle.prototype.teardown = function () {
	            HtmlExtensions.removeEvent(this.toggleButton, HtmlExtensions.eventTypes.click, this.toggleCheckedState);
	            HtmlExtensions.removeEvent(this.toggleIndicatorElement, HtmlExtensions.eventTypes.click, this.toggleCheckedState);
	        };
	        /**
	         * checkToggle()
	         * Set the toggle as checked, 'on'
	         */
	        Toggle.prototype.checkToggle = function () {
	            this.setToggleCheckedState(true);
	        };
	        /**
	         * disableToggle()
	         * Set the disabled class on the toggle element
	         */
	        Toggle.prototype.disableToggle = function () {
	            HtmlExtensions.addClass(this.element, 'f-disabled');
	        };
	        /**
	         * enableToggle()
	         * Remove the disabled class on the toggle element
	         */
	        Toggle.prototype.enableToggle = function () {
	            HtmlExtensions.removeClass(this.element, 'f-disabled');
	        };
	        /**
	         * isChecked()
	         * Return the checked state of the toggle
	         */
	        Toggle.prototype.isChecked = function () {
	            return this.toggleButton.getAttribute(this.ariaCheckedString) === 'true';
	        };
	        /**
	         * isDisabled()
	         * Return this disabled state of the toggle
	         */
	        Toggle.prototype.isDisabled = function () {
	            return this.toggleButton.hasAttribute('disabled');
	        };
	        /**
	         * setToggleCheckedState()
	         * Change the toggle state of the element by the passed checked state either 'true' or 'false'.
	         * @param isChecked - string - 'true' or 'false' to set the toggle state
	         */
	        Toggle.prototype.setToggleCheckedState = function (isChecked) {
	            this.toggleButton.setAttribute(this.ariaCheckedString, isChecked.toString());
	            this.toggleIndicatorElement.innerHTML = isChecked ? this.checkedString : this.uncheckedString;
	        };
	        /**
	         * uncheckToggle()
	         * Set the toggle as unchecked, 'off'
	         */
	        Toggle.prototype.uncheckToggle = function () {
	            this.setToggleCheckedState(false);
	        };
	        /**
	        * TODO: Remove this method as soon as we can verify partners are no longer calling it.
	        */
	        Toggle.init = function (input) {
	            utility_1.apiDeprecated('Toggle.init() is deprecated, please use ComponentFactory.create() instead.');
	            componentFactory_1.ComponentFactory.create([
	                {
	                    component: Toggle,
	                    selector: input ? input.selector : null,
	                    eventToBind: input ? input.eventToBind : null
	                }
	            ]);
	        };
	        // String for the component selector
	        Toggle.selector = '.c-toggle';
	        return Toggle;
	    }(observableComponent_1.ObservableComponent));
	    exports.Toggle = Toggle;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name='video'/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(58), __webpack_require__(59), __webpack_require__(10), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, videoControls_1, video_closed_captions_1, utility_1, htmlExtensions_1, stringExtensions_1) {
	    "use strict";
	    /**
	    * The Video component
	    * @class
	    * @classdesc
	    */
	    var Video = (function () {
	        /**
	        * @constructor
	        * @description - Constructor for the Video component.
	        * @public
	        * @param {HTMLElement} videoComponent - the native element to attach the video behavior to.
	        */
	        function Video(videoComponent) {
	            var _this = this;
	            this.videoComponent = videoComponent;
	            /**
	            * @name - canPlay
	            * @description - Flag indicating whether or not the video is currently in a playable state.
	            * @public
	            * @type {boolean}
	            */
	            this.canPlay = false;
	            /**
	            * @name - errorMessageDisplayed
	            * @description - Tracks whether an error message is displayed
	            * @private
	            * @type {number}
	            */
	            this.errorMessageDisplayed = false;
	            /**
	            * @name - onMouseEvent
	            * @description - The options dialog's click event listener.
	            * @private
	            * @param {MouseEvent} event - the click event.
	            * @returns {void}
	            */
	            this.onMouseEvent = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                if (event.type === 'mouseover') {
	                    if (!!_this.controlPanelTimer) {
	                        window.clearTimeout(_this.controlPanelTimer);
	                    }
	                    _this.showControlPanel();
	                }
	                else if (event.type === 'mouseout') {
	                    var node = (event.toElement || event.relatedTarget);
	                    while (node && node.parentNode && node.parentNode !== window) {
	                        if ((node.parentNode === _this) || (node === _this)) {
	                            htmlExtensions_1.preventDefault(event);
	                            return;
	                        }
	                        node = node.parentNode;
	                    }
	                    _this.startControlPanelTimeout();
	                }
	            };
	            /**
	            * @name - onVideoMetadataLoaded
	            * @description - The native players onloaded event listener.
	            *                When this is called we can get the video's duration.
	            * @private
	            * @returns {void}
	            */
	            this.onVideoMetadataLoaded = function () {
	                if (!!_this.videoControls && !!_this.videoPlayer) {
	                    _this.canPlay = false;
	                    _this.videoControls.setDuration(_this.videoPlayer.duration);
	                    if (_this.videoPlayer.getAttribute('autoplay') !== null) {
	                        _this.play();
	                    }
	                }
	            };
	            /**
	            * @name - onVideoTimeUpdate
	            * @description - The native player's ontimeupdate event listener.
	            * @private
	            * @returns {void}
	            */
	            this.onVideoTimeUpdate = function () {
	                if (!!_this.videoControls && !!_this.videoPlayer) {
	                    _this.videoControls.setPlayPosition(_this.videoPlayer.currentTime);
	                    if (_this.closedCaptions) {
	                        _this.closedCaptions.updateCaptions(_this.videoPlayer.currentTime);
	                    }
	                }
	            };
	            /**
	            * @name - onVideoPlayStateChanged
	            * @description - The native player's canplay/canplaythrough/waiting event listener.
	            * @private
	            * @param {Event} event - the play state event.
	            * @returns {void}
	            */
	            this.onVideoPlayStateChanged = function (event) {
	                _this.canPlay = _this.canPlay || (event.type === 'canplay') || (event.type === 'canplaythrough');
	                if (!!_this.videoControls) {
	                    _this.videoControls.updatePlayPauseState();
	                }
	            };
	            /**
	            * @name - onVideoPlayerClicked
	            * @description - The native player's click event listener.
	            * @private
	            * @param {MouseEvent} event - The click event.
	            * @returns {void}
	            */
	            this.onVideoPlayerClicked = function (event) {
	                if (_this.isPlayable) {
	                    if (_this.isPaused()) {
	                        _this.play();
	                    }
	                    else {
	                        _this.pause();
	                    }
	                }
	            };
	            /**
	            * @name - onVideoEnded
	            * @description - The native player's onended event listener.
	            * @private
	            * @returns {void}
	            */
	            this.onVideoEnded = function () {
	                if (!!_this.videoControls) {
	                    _this.videoControls.setPlayPosition(0);
	                    _this.videoControls.updatePlayPauseState();
	                }
	                if (_this.closedCaptions) {
	                    _this.closedCaptions.updateCaptions(0);
	                }
	            };
	            /**
	            * @name - onResized
	            * @description - Handles the window resize event.
	            * @private
	            * @returns {void}
	            */
	            this.onResized = function () {
	                if (!!_this.videoComponent && !!_this.triggerParagraph) {
	                    if (utility_1.getDimensions(_this.videoComponent).width < utility_1.Viewports.allWidths[2]) {
	                        _this.triggerParagraph.setAttribute(Video.ariaHidden, 'true');
	                    }
	                    else {
	                        _this.triggerParagraph.removeAttribute(Video.ariaHidden);
	                    }
	                }
	            };
	            if (!videoComponent) {
	                return;
	            }
	            this.videoPlayer = htmlExtensions_1.selectFirstElementT('.f-video-player', this.videoComponent);
	            this.videoControlsContainer = htmlExtensions_1.selectFirstElement('.f-video-controls', this.videoComponent);
	            this.videoControls = new videoControls_1.VideoControls(this.videoControlsContainer, this);
	            if (!this.videoPlayer || !this.videoPlayer.canPlayType) {
	                return null;
	            }
	            this.initializeClosedCaptions();
	            this.triggerContainer = htmlExtensions_1.selectFirstElement('section', this.videoComponent);
	            if (!!this.triggerContainer) {
	                this.trigger = htmlExtensions_1.selectFirstElement('.c-action-trigger', this.triggerContainer);
	                this.triggerParagraph = htmlExtensions_1.selectFirstElement('p', this.triggerContainer);
	                if (this.triggerParagraph) {
	                    this.resizeListener = htmlExtensions_1.addThrottledEvent(window, htmlExtensions_1.eventTypes.resize, this.onResized);
	                    this.onResized();
	                }
	            }
	            if (this.videoControlsContainer && this.videoControls) {
	                this.videoControls.setMuted(this.videoPlayer.getAttribute('muted') !== null);
	                this.videoControls.setVolume(parseInt(utility_1.getCookie(Video.cookieVolume) || '1', 10));
	                htmlExtensions_1.addEvents(this.videoComponent, 'mouseover mouseout', this.onMouseEvent);
	                htmlExtensions_1.addEvents(this.videoPlayer, 'canplay canplaythrough waiting', this.onVideoPlayStateChanged);
	                htmlExtensions_1.addEvent(this.videoPlayer, htmlExtensions_1.eventTypes.loadedmetadata, this.onVideoMetadataLoaded);
	                htmlExtensions_1.addEvent(this.videoPlayer, htmlExtensions_1.eventTypes.timeupdate, this.onVideoTimeUpdate);
	                htmlExtensions_1.addEvent(this.videoPlayer, htmlExtensions_1.eventTypes.ended, this.onVideoEnded);
	                htmlExtensions_1.addEvent(this.videoPlayer, htmlExtensions_1.eventTypes.click, this.onVideoPlayerClicked);
	                this.startControlPanelTimeout();
	            }
	        }
	        /**
	        * @name - startControlPanelTimeout
	        * @description - Starts the countdown for hiding the control panel.
	        * @private
	        * @returns {void}
	        */
	        Video.prototype.startControlPanelTimeout = function () {
	            var _this = this;
	            // Comment out the next line to keep the control panel aways visible for easy debugging.
	            this.controlPanelTimer = window.setTimeout(function () { _this.hideControlPanel(); }, Video.controlPanelTimeout);
	        };
	        /**
	        * @name - hideControlPanel
	        * @description - Hides the control panel.
	        * @private
	        * @returns {void}
	        */
	        Video.prototype.hideControlPanel = function () {
	            if (!!this.controlPanelTimer) {
	                window.clearTimeout(this.controlPanelTimer);
	            }
	            if (!!this.videoControlsContainer) {
	                if (htmlExtensions_1.hasClass(this.videoControlsContainer, Video.showControlsClass)) {
	                    htmlExtensions_1.removeClass(this.videoControlsContainer, Video.showControlsClass);
	                    htmlExtensions_1.addClass(this.videoControlsContainer, Video.hideControlsClass);
	                    if (!!this.ccOverlay) {
	                        htmlExtensions_1.removeClass(this.ccOverlay, Video.fitControlsClass);
	                        if (this.closedCaptions && this.videoPlayer) {
	                            // Force a cc update as the ccOverlay size had changed and the captions
	                            // likely need to be rescaled.
	                            this.closedCaptions.updateCaptions(this.videoPlayer.currentTime);
	                        }
	                    }
	                }
	            }
	            if (!!this.videoControls) {
	                this.videoControls.prepareToHide();
	            }
	        };
	        /**
	        * @name - showControlPanel
	        * @description - Shows the control panel.
	        * @private
	        * @returns {void}
	        */
	        Video.prototype.showControlPanel = function () {
	            if (!!this.videoControlsContainer && !this.errorMessageDisplayed) {
	                if (htmlExtensions_1.hasClass(this.videoControlsContainer, Video.hideControlsClass)) {
	                    htmlExtensions_1.removeClass(this.videoControlsContainer, Video.hideControlsClass);
	                    htmlExtensions_1.addClass(this.videoControlsContainer, Video.showControlsClass);
	                    if (!!this.ccOverlay) {
	                        htmlExtensions_1.addClass(this.ccOverlay, Video.fitControlsClass);
	                        if (this.closedCaptions && this.videoPlayer) {
	                            // Force a cc update as the ccOverlay size had changed and the captions
	                            // likely need to be rescaled.
	                            this.closedCaptions.updateCaptions(this.videoPlayer.currentTime);
	                        }
	                    }
	                }
	            }
	        };
	        /**
	        * @name - isPaused
	        * @description - Determines the play/paused state of the player
	        * @public
	        * @returns {boolean} - Talse if the video is paused, otherwise false.
	        */
	        Video.prototype.isPaused = function () {
	            return !!this.videoPlayer ? this.videoPlayer.paused : false;
	        };
	        /**
	        * @name - isPlayable
	        * @description - Determines the video is currently in a playable state.
	        * @public
	        * @returns {boolean} - true if the video is in a playable state, otherwise false.
	        */
	        Video.prototype.isPlayable = function () {
	            return !!this.videoPlayer ? this.canPlay : false;
	        };
	        /**
	        * @name - play
	        * @description - Start/restart the video playing.
	        * @public
	        * @returns {void}
	        */
	        Video.prototype.play = function () {
	            if (!!this.videoPlayer) {
	                this.videoPlayer.play();
	            }
	            if (!!this.videoControls) {
	                this.videoControls.updatePlayPauseState();
	            }
	        };
	        /**
	        * @name - pause
	        * @description - Pause the video.
	        * @public
	        * @returns {void}
	        */
	        Video.prototype.pause = function () {
	            if (!!this.videoPlayer) {
	                this.videoPlayer.pause();
	            }
	            if (!!this.videoControls) {
	                this.videoControls.updatePlayPauseState();
	            }
	        };
	        /**
	        * @name - setPlayPosition.
	        * @description - Sets the current play position of the video.
	        * @public
	        * @param {number} position - The position (seconds) to set the current play position to.
	        *                            This method intentionally does not update the VideoControls to avoid circular looping.
	        *                            The VideoControls progress bar will indirectly be updated by the progress change.
	        *                            It also will not update the position if the delta it not >= to the threshold.
	        * @returns {void}
	        */
	        Video.prototype.setPlayPosition = function (position) {
	            if (utility_1.isNumber(position) && !!this.videoPlayer) {
	                position = Math.max(0, Math.min(position, utility_1.isNumber(this.videoPlayer.duration) ? this.videoPlayer.duration : 0));
	                if (Math.abs(position - this.videoPlayer.currentTime) >= Video.positionUpdateThreshold) {
	                    this.videoPlayer.currentTime = position;
	                }
	            }
	        };
	        /**
	        * @name - getVolume
	        * @description - Gets the volume level of the player.
	        * @public
	        * @returns {number} - The player's current volume setting.
	        */
	        Video.prototype.getVolume = function () {
	            return (!!this.videoPlayer && utility_1.isNumber(this.videoPlayer.volume)) ? this.videoPlayer.volume : 0;
	        };
	        /**
	        * @name - setVolume
	        * @description - Sets the volume level for the player.
	        * @public
	        * @param {number} volume - The desired volume.
	        * @returns {void}
	        */
	        Video.prototype.setVolume = function (volume) {
	            if (utility_1.isNumber(volume) && !!this.videoPlayer) {
	                // Ensure it's in the allowable 0-1 range and limited to two decimal places of precision.
	                volume = Math.round(Math.max(0, Math.min(volume, 1)) * 100) / 100;
	                if (volume !== this.videoPlayer.volume) {
	                    this.videoPlayer.volume = volume;
	                    utility_1.setCookie(Video.cookieVolume, volume.toString(), '/', 365);
	                    if (!!this.videoControls) {
	                        this.videoControls.setVolume(volume);
	                    }
	                }
	            }
	        };
	        /**
	        * @name - isMuted
	        * @description - Gets the mute state of the player.
	        * @public
	        * @returns {boolean} - The player's current mute state.
	        */
	        Video.prototype.isMuted = function () {
	            return !!this.videoPlayer ? this.videoPlayer.muted : true;
	        };
	        /**
	        * @name - setMuted
	        * @description - Sets the mute state for the player.
	        * @public
	        * @param {boolean} muted - The desired mute state, true if the video should be muted, otherwise false.
	        * @returns {void}
	        */
	        Video.prototype.setMuted = function (muted) {
	            if (!!this.videoPlayer && (muted !== this.videoPlayer.muted)) {
	                this.videoPlayer.muted = muted;
	                if (!!this.videoControls) {
	                    this.videoControls.setMuted(muted);
	                }
	            }
	        };
	        /**
	        * @name - setFullscreen
	        * @description - Sets the player into fullscreen mode.
	        * @public
	        * @returns {void}
	        */
	        Video.prototype.setFullscreen = function () {
	            if (!!this.videoPlayer) {
	                if (this.videoPlayer.requestFullscreen ||
	                    this.videoPlayer.msRequestFullscreen ||
	                    this.videoPlayer.mozRequestFullScreen ||
	                    this.videoPlayer.webkitRequestFullscreen ||
	                    this.videoPlayer.webkitSupportsFullscreen) {
	                    var fullScreenElement = document.fullScreenElement ||
	                        document.msFullscreenElement ||
	                        document.mozFullScreenElement ||
	                        document.webkitFullscreenElement;
	                    var cancelFullScreen = document.cancelFullScreen ||
	                        document.msExitFullscreen ||
	                        document.mozCancelFullScreen ||
	                        document.webkitCancelFullScreen ||
	                        document.webkitCancelFullScreen;
	                    var enterFullScreen = this.videoPlayer.requestFullscreen ||
	                        this.videoPlayer.msRequestFullscreen ||
	                        this.videoPlayer.mozRequestFullScreen ||
	                        this.videoPlayer.webkitRequestFullscreen ||
	                        this.videoPlayer.webkitEnterFullScreen;
	                    if (fullScreenElement) {
	                        cancelFullScreen();
	                    }
	                    enterFullScreen.call(this.videoPlayer);
	                }
	            }
	        };
	        /**
	        * @name - initializeClosedCaptions
	        * @description - Initializes the close captions.
	        * @private
	        * @returns {void}
	        */
	        Video.prototype.initializeClosedCaptions = function () {
	            this.ccOverlay = htmlExtensions_1.selectFirstElement('.f-video-cc-overlay', this.videoComponent);
	            if (!this.ccOverlay) {
	                return;
	            }
	            this.closedCaptions = new video_closed_captions_1.VideoClosedCaptions(this.ccOverlay);
	            this.initializeClosedCaptionsMenu();
	        };
	        /**
	        * @name - initializeClosedCaptionsMenu
	        * @description - Initializes the close captions options menu.
	        * @private
	        * @param {IVideoOption[]} [ccOptions] - The closed captions options to initialize the options menu from.
	        *                                       If omitted the cc options are extracted from the markup.
	        * @returns {void}
	        */
	        Video.prototype.initializeClosedCaptionsMenu = function (ccOptions) {
	            if (!this.ccOverlay || !this.closedCaptions) {
	                return;
	            }
	            var ccLanguageId;
	            if (!ccOptions) {
	                ccOptions = [];
	                // Build the options from the existing menu markup.
	                var menuOptions = htmlExtensions_1.selectElementsT('ul[data-video-sub-options=f-video-captions] li a[data-video-selectable]', this.videoComponent);
	                if (menuOptions) {
	                    // Remove the "off" item before building the true options.
	                    menuOptions = menuOptions.slice(1);
	                    for (var _i = 0, menuOptions_1 = menuOptions; _i < menuOptions_1.length; _i++) {
	                        var option = menuOptions_1[_i];
	                        var id = this.removeIdPrefix(option.parentElement.id);
	                        var selected = (option.parentElement.getAttribute('aria-selected') === 'true');
	                        if (selected) {
	                            ccLanguageId = id;
	                        }
	                        ccOptions.push({ id: id, value: htmlExtensions_1.getText(option), selected: selected, href: option.href });
	                    }
	                }
	            }
	            if (!ccOptions || !ccOptions.length) {
	                this.ccOptions = null;
	                return;
	            }
	            // If the users cc language preference is already persisted it overrides the markup setting, if any.
	            var ccLanguageCookie = utility_1.getCookie(Video.cookieCcPreference);
	            if (ccLanguageCookie) {
	                ccLanguageId = ccLanguageCookie;
	            }
	            for (var _a = 0, ccOptions_1 = ccOptions; _a < ccOptions_1.length; _a++) {
	                var option = ccOptions_1[_a];
	                if (ccLanguageId) {
	                    option.selected = (ccLanguageId === option.id);
	                }
	                option.id = this.addIdPrefix(option.id);
	            }
	            this.ccOptions = ccOptions;
	            // Update the video controls cc options menu.
	            this.videoControls.setOptions({ category: 'f-video-captions', options: ccOptions });
	        };
	        /**
	        * @name - onOptionChanged
	        * @description - The options dialog's click event listener.
	        * @public
	        * @param {IVideoOptionChangedNotification} notification - The option notification.
	        * @returns {void}
	        */
	        Video.prototype.onOptionChanged = function (notification) {
	            switch (notification.category) {
	                case 'f-video-captions': {
	                    this.setCC(notification.id);
	                    break;
	                }
	                case 'f-video-quality': {
	                    this.setQuality(notification.id);
	                    break;
	                }
	                case 'f-video-share': {
	                    this.shareVideo(notification.id);
	                    break;
	                }
	            }
	        };
	        /**
	        * @name - setCC
	        * @description - Sets the close captioning language/locale.
	        * @private
	        * @param {string} ccLanguageId - The desired new cc value.
	        * @returns {void}
	        */
	        Video.prototype.setCC = function (ccLanguageId) {
	            if (this.closedCaptions) {
	                // Ensure that the language id is valid for this video
	                var selectedOption = null;
	                if (ccLanguageId && this.ccOptions) {
	                    for (var _i = 0, _a = this.ccOptions; _i < _a.length; _i++) {
	                        var option = _a[_i];
	                        if (option.id === ccLanguageId) {
	                            selectedOption = option;
	                            break;
	                        }
	                    }
	                }
	                ccLanguageId = this.removeIdPrefix(ccLanguageId);
	                this.closedCaptions.setCcLanguage(ccLanguageId, selectedOption ? selectedOption.href : null);
	                utility_1.setCookie(Video.cookieCcPreference, ccLanguageId, '/', 365);
	            }
	        };
	        /**
	        * @name - setQuality
	        * @description - Sets the video playback quality.
	        * @private
	        * @param {string} qualityId - The desired new quality value.
	        * @returns {void}
	        */
	        Video.prototype.setQuality = function (qualityId) {
	            // TODO: 8479736: Update build step to remove commented code.
	            // The following console.log useful for debugging and is left in commented out for easy restoration.
	            //console.log('videoplayer setQuality(' + qualityId + ') not implemented.');
	        };
	        /**
	        * @name - shareVideo
	        * @description - Shares the video via the specified method.
	        * @private
	        * @param {string} shareById - The desired new shareBy value.
	        * @returns {void}
	        */
	        Video.prototype.shareVideo = function (shareById) {
	            // TODO: 8479736: Update build step to remove commented code.
	            // The following console.log useful for debugging and is left in commented out for easy restoration.
	            //console.log('videoplayer shareVideo(' + shareById + ') not implemented.');
	        };
	        /**
	        * @name - addIdPrefix
	        * @description - Adds the id prefix to form a child id.
	        * @private
	        * @param {string} childId - The child id to prefix.
	        * @returns {string} - The prefixed id or the original id if no prefix is built.
	        */
	        Video.prototype.addIdPrefix = function (childId) {
	            var prefix = (this.videoComponent && this.videoComponent.id)
	                ? this.videoComponent.id + '-'
	                : null;
	            return (prefix && !stringExtensions_1.startsWith(childId, prefix, false)) ? (prefix + childId) : childId;
	        };
	        /**
	        * @name - removeIdPrefix
	        * @description - Removes the id prefix from a child id.
	        * @private
	        * @param {string} childId - The child id to prefix.
	        * @returns {string} - The un-prefixed id or the original id if no prefix was found.
	        */
	        Video.prototype.removeIdPrefix = function (childId) {
	            var prefix = (this.videoComponent && this.videoComponent.id)
	                ? this.videoComponent.id + '-'
	                : null;
	            return (prefix && stringExtensions_1.startsWith(childId, prefix, false)) ? childId.substring(prefix.length) : childId;
	        };
	        /**
	        * @name - showTrigger
	        * @description - Show the trigger overlay
	        * @private
	        * @returns {void}
	        */
	        Video.prototype.showTrigger = function () {
	            if (!!this.triggerContainer) {
	                this.triggerContainer.setAttribute(Video.ariaHidden, 'false');
	            }
	        };
	        /**
	        * @name - hideTrigger
	        * @description - Hide the trigger overlay
	        * @private
	        * @returns {void}
	        */
	        Video.prototype.hideTrigger = function () {
	            if (!!this.triggerContainer) {
	                this.triggerContainer.setAttribute(Video.ariaHidden, 'true');
	            }
	        };
	        /**
	        * @name - displayErrorMessage
	        * @description - Create an error message overlay
	        * @private
	        * @param {IVideoErrorMessageData} - Error message content
	        * @returns {void}
	        */
	        Video.prototype.displayErrorMessage = function (errorMessage) {
	            if (!errorMessage || !errorMessage.title && !errorMessage.message) {
	                return;
	            }
	            this.errorMessageDisplayed = true;
	            // If error message exists
	            if (!!this.errorMessage) {
	                htmlExtensions_1.setText(this.errorMessage.title, errorMessage.title || '');
	                htmlExtensions_1.setText(this.errorMessage.message, errorMessage.message || '');
	                this.errorMessage.container.setAttribute(Video.ariaHidden, 'false');
	            }
	            else {
	                this.errorMessage = {};
	                this.errorMessage.container = document.createElement('div');
	                var contentWrapper = document.createElement('div');
	                this.errorMessage.title = document.createElement('p');
	                this.errorMessage.message = document.createElement('p');
	                this.errorMessage.container.setAttribute('role', 'status');
	                this.errorMessage.title.setAttribute('class', 'c-heading');
	                this.errorMessage.message.setAttribute('class', 'c-paragraph');
	                if (!!errorMessage.title) {
	                    htmlExtensions_1.setText(this.errorMessage.title, errorMessage.title);
	                }
	                if (!!errorMessage.message) {
	                    htmlExtensions_1.setText(this.errorMessage.message, errorMessage.message);
	                }
	                // Combine pieces
	                this.errorMessage.container.appendChild(contentWrapper);
	                contentWrapper.appendChild(this.errorMessage.title);
	                contentWrapper.appendChild(this.errorMessage.message);
	                // Attach everything to the DOM
	                this.videoComponent.appendChild(this.errorMessage.container);
	            }
	            this.hideControlPanel();
	            this.hideTrigger();
	        };
	        /**
	        * @name - hideErrorMessage
	        * @description - Removes the error message overlay
	        * @private
	        * @returns {void}
	        */
	        Video.prototype.hideErrorMessage = function () {
	            if (!!this.errorMessage && !!this.errorMessage.container) {
	                this.errorMessage.container.setAttribute(Video.ariaHidden, 'true');
	                this.errorMessageDisplayed = false;
	            }
	        };
	        /**
	        * @name - selector
	        * @description - selector to use to find Video components in the document.
	        * @static
	        * @public
	        * @type {string}
	        */
	        Video.selector = '.c-video';
	        /**
	        * @name - showControlsClass
	        * @description - The class name to add to show the control panel.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Video.showControlsClass = 'f-slidein';
	        /**
	        * @name - hideControlsClass
	        * @description - The class name to add to hide the control panel.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Video.hideControlsClass = 'f-slideout';
	        /**
	        * @name - fitControlsClass
	        * @description - The class name to add to the cc overlay element to resize it to accommodate the control panel.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Video.fitControlsClass = 'f-overlay-slidein';
	        /**
	        * @name - ariaHidden
	        * @memberof - Video
	        * @description - The aria-hidden attribute name.
	        * @private
	        * @static
	        * @type {string}
	        */
	        Video.ariaHidden = 'aria-hidden';
	        /**
	        * @name - cookieVolume
	        * @description - The default cookie name where the users volume preference is stored.
	        *                This cookie name is shared with the msn-prime video player.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Video.cookieVolume = 'vidvol';
	        /**
	        * @name - cookieCcPreference
	        * @description - The default cookie name where the users closed caption preference is stored.
	        *                This cookie name is shared with the msn-prime video player.
	        * @static
	        * @private
	        * @type {string}
	        */
	        Video.cookieCcPreference = 'vidccpref';
	        /**
	        * @name - positionUpdateThreshold
	        * @description - The threshold (seconds) below which requested changes to the current play position will be ignored.
	        *                This prevents round trip rounding via the VideoControls progress slider from causing minor changes.
	        * @static
	        * @private
	        * @type {number}
	        */
	        Video.positionUpdateThreshold = 0.1;
	        /**
	        * @name - controlPanelTimeout
	        * @description - The time (milliseconds) to leave the control panel visible after the user moves the mouse off the video.
	        * @static
	        * @private
	        * @type {number}
	        */
	        Video.controlPanelTimeout = 3500;
	        return Video;
	    }());
	    exports.Video = Video;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name='videoControls'/>
	// amd-module directive only required for OneRf.
	// TODO: 8607647 - Update OneRf build task to add this directive automatically.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(52), __webpack_require__(10), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, componentFactory_1, slider_1, utility_1, htmlExtensions_1) {
	    "use strict";
	    var VideoControls = (function () {
	        /**
	         * @constructor
	         * @description - Constructor for the VideoControls component.
	         * @public
	         * @param {HTMLElement} videoControls - the native element to attach the VideoControls behavior to.
	         * @param {IVideoPlayer} videoPlayer - the VideoPlayer associated with this VideoControls component.
	         */
	        function VideoControls(videoControls, videoPlayer) {
	            var _this = this;
	            this.videoControls = videoControls;
	            /**
	             * @name - onPlayPauseEvents
	             * @private
	             * @description - The play/pause button's click/mouse event listener.
	             * @param {Event} event - The event.
	             * @returns {void}
	             */
	            this.onPlayPauseEvents = function (event) {
	                if (event.type === 'click') {
	                    if (!!_this.videoPlayer) {
	                        if (_this.videoPlayer.isPaused()) {
	                            _this.play();
	                        }
	                        else {
	                            _this.pause();
	                        }
	                    }
	                }
	                else if (event.type === 'mouseover') {
	                    if (!!_this.playTooltip) {
	                        htmlExtensions_1.removeClass(_this.playTooltip, VideoControls.screenReaderOnlyClass);
	                    }
	                }
	                else if (event.type === 'mouseout') {
	                    if (!!_this.playTooltip) {
	                        htmlExtensions_1.addClass(_this.playTooltip, VideoControls.screenReaderOnlyClass);
	                    }
	                }
	            };
	            /**
	             * @name - onVolumeEvents
	             * @description - The volume button's keyboard/mouse event listener.
	             * @private
	             * @param {Event} event - The event.
	             * @returns {void}
	             */
	            this.onVolumeEvents = function (event) {
	                if (event.type === 'click') {
	                    if (htmlExtensions_1.getEventTargetOrSrcElement(event) === _this.volumeButton) {
	                        _this.setMuted(!_this.videoPlayer.isMuted());
	                    }
	                }
	                else if (event.type === 'mouseover' || event.type === 'focus') {
	                    _this.showVolumeContainer();
	                }
	                else if (event.type === 'mouseout' || event.type === 'blur') {
	                    _this.hideVolumeContainer();
	                }
	            };
	            /**
	              * @name - onVolumeSliderEvents
	              * @description - The volume slider's keyboard/mouse event listener.
	              * @private
	              * @param {Event} event - The event.
	              * @returns {void}
	              */
	            this.onVolumeSliderEvents = function (event) {
	                if (event.type === 'focus') {
	                    _this.showVolumeContainer();
	                }
	                else if (event.type === 'blur') {
	                    _this.hideVolumeContainer();
	                }
	            };
	            /**
	             * @name - onFullScreenEvents
	             * @description - The fullScreen button's click/mouse event listener.
	             * @private
	             * @param {Event} event - The event.
	             * @returns {void}
	             */
	            this.onFullScreenEvents = function (event) {
	                if (event.type === 'click') {
	                    if (!!_this.videoPlayer) {
	                        _this.videoPlayer.setFullscreen();
	                    }
	                }
	                else if (event.type === 'mouseover') {
	                    if (!!_this.fullScreenTooltip) {
	                        _this.fullScreenTooltip.setAttribute(VideoControls.ariaHidden, 'false');
	                    }
	                }
	                else if (event.type === 'mouseout') {
	                    if (!!_this.fullScreenTooltip) {
	                        _this.fullScreenTooltip.setAttribute(VideoControls.ariaHidden, 'true');
	                    }
	                }
	            };
	            /**
	             * @name - toggleOptionsDialog
	             * @description - Toggles the options container's show/hide state.
	             * @private
	             * @returns {void}
	             */
	            this.toggleOptionsDialog = function () {
	                if (!!_this.optionsContainer) {
	                    if (_this.optionsContainer.getAttribute(VideoControls.ariaHidden) === 'false') {
	                        _this.hideOptionsContainer();
	                    }
	                    else {
	                        _this.showOptionsContainer();
	                    }
	                }
	            };
	            /**
	             * @name - hideOptionsContainer
	             * @description - Hide the options container.
	             * @private
	             * @returns {void}
	             */
	            this.hideOptionsContainer = function () {
	                if (!!_this.optionsContainer) {
	                    _this.optionsContainer.setAttribute(VideoControls.ariaHidden, 'true');
	                }
	            };
	            /**
	             * @name - onOptionsDialogClick
	             * @description - The options dialog's click event listener.
	             * @private
	             * @param {MouseEvent} event - the click event.
	             * @returns {void}
	             */
	            this.onOptionsDialogClick = function (event) {
	                event = htmlExtensions_1.getEvent(event);
	                var target = htmlExtensions_1.getEventTargetOrSrcElement(event);
	                var nextMenuName = target.getAttribute('data-video-options');
	                if (nextMenuName === 'back') {
	                    _this.showOptionsContainer();
	                    htmlExtensions_1.preventDefault(event);
	                    return;
	                }
	                if (nextMenuName) {
	                    if (!!_this.optionsContainer && !!_this.odParent) {
	                        var nextMenu = htmlExtensions_1.selectFirstElement('ul[data-video-sub-options=' + nextMenuName + ']', _this.optionsContainer);
	                        htmlExtensions_1.css(nextMenu, 'display', 'block');
	                        // This must be done after the above display block setting or the height will be zero.
	                        var nextHeight = _this.calcHeight(nextMenu);
	                        htmlExtensions_1.css(_this.optionsContainer, 'height', nextHeight + 'px');
	                        htmlExtensions_1.css(_this.odParent, 'left', '-160px');
	                        _this.odSubActive = nextMenu;
	                    }
	                    htmlExtensions_1.preventDefault(event);
	                    return;
	                }
	                if (!!_this.odSubActive) {
	                    htmlExtensions_1.preventDefault(event);
	                    var value = target.getAttribute('data-video-selectable');
	                    if (!value && target.firstElementChild) {
	                        target = target.firstElementChild;
	                        value = target.getAttribute('data-video-selectable');
	                    }
	                    if (value) {
	                        for (var _i = 0, _a = htmlExtensions_1.selectElements('a', _this.odSubActive); _i < _a.length; _i++) {
	                            var sibling = _a[_i];
	                            htmlExtensions_1.removeClass(sibling, 'glyph-check-mark');
	                        }
	                        htmlExtensions_1.addClass(target, 'glyph-check-mark');
	                        if (!!_this.videoPlayer) {
	                            _this.videoPlayer.onOptionChanged({
	                                category: _this.odSubActive.getAttribute('data-video-sub-options'),
	                                id: target.parentElement.id,
	                                href: target.getAttribute('href')
	                            });
	                        }
	                    }
	                }
	                _this.hideOptionsContainer();
	            };
	            if (!videoControls || !videoPlayer) {
	                return;
	            }
	            this.videoPlayer = videoPlayer;
	            this.playButton = htmlExtensions_1.selectFirstElementT('.f-play-pause', this.videoControls);
	            this.playTooltip = htmlExtensions_1.selectFirstElement('span', this.playButton);
	            this.fullScreenButton = htmlExtensions_1.selectFirstElementT('.f-full-screen', this.videoControls);
	            this.fullScreenTooltip = htmlExtensions_1.selectFirstElement('span', this.fullScreenButton);
	            this.volumeButton = htmlExtensions_1.selectFirstElementT('.f-volume-button', this.videoControls);
	            this.volumeContainer = htmlExtensions_1.selectFirstElement('.f-volume-slider', this.videoControls);
	            this.optionsButton = htmlExtensions_1.selectFirstElementT('.f-options', this.videoControls);
	            this.optionsContainer = htmlExtensions_1.selectFirstElement('.f-options-dialog', this.videoControls);
	            this.timeCurrent = htmlExtensions_1.selectFirstElement('.f-current-time', this.videoControls);
	            this.timeDuration = htmlExtensions_1.selectFirstElement('.f-duration', this.videoControls);
	            var progressSlider = htmlExtensions_1.selectFirstElement('.c-slider.f-progress', this.videoControls);
	            var volumeSlider = htmlExtensions_1.selectFirstElement('.c-slider', this.volumeContainer);
	            if (!this.playButton || !this.playTooltip || !this.fullScreenButton || !this.fullScreenTooltip ||
	                !progressSlider || !this.volumeButton || !this.volumeContainer || !volumeSlider ||
	                !this.timeCurrent || !this.timeDuration || !this.optionsButton || !this.optionsContainer) {
	                return null;
	            }
	            // Due to a shape change, we remove aria-label and aria-hidden if
	            // the attributes exist
	            this.playButton.removeAttribute('aria-label');
	            this.playTooltip.removeAttribute('aria-hidden');
	            htmlExtensions_1.addClass(this.playTooltip, VideoControls.screenReaderOnlyClass);
	            this.initializeLocalization();
	            this.updatePlayPauseState();
	            this.optionsDialogInit();
	            htmlExtensions_1.addEvents(window, 'resize scroll', this.hideOptionsContainer);
	            htmlExtensions_1.addEvents(this.playButton, 'click mouseover mouseout', this.onPlayPauseEvents);
	            htmlExtensions_1.addEvents(this.fullScreenButton, 'click mouseover mouseout', this.onFullScreenEvents);
	            htmlExtensions_1.addEvents([this.volumeButton, this.volumeContainer], 'click mouseover mouseout focus blur', this.onVolumeEvents);
	            htmlExtensions_1.addEvent(this.optionsButton, htmlExtensions_1.eventTypes.click, this.toggleOptionsDialog);
	            // Create the progress and volume sliders.
	            componentFactory_1.ComponentFactory.create([{
	                    component: slider_1.Slider,
	                    eventToBind: 'DOMContentLoaded',
	                    elements: [progressSlider, volumeSlider],
	                    callback: function (results) {
	                        if (!!results && !!results.length && (results.length === 2)) {
	                            _this.progressSlider = results[0];
	                            _this.volumeSlider = results[1];
	                            // Subscribe to progress and volume sliders.
	                            _this.progressSlider.subscribe({
	                                'onValueChanged': function (notification) { return _this.onProgressChanged(notification); }
	                            });
	                            _this.volumeSlider.subscribe({
	                                'onValueChanged': function (notification) { return _this.onVolumeChanged(notification); }
	                            });
	                            htmlExtensions_1.addEvents(htmlExtensions_1.selectFirstElement('button', _this.volumeSlider['element']), 'focus blur', _this.onVolumeSliderEvents);
	                        }
	                    }
	                }]);
	        }
	        /**
	         * @name - initializeLocalization
	         * @description - Initialize all the localization strings.
	         * @private
	         * @returns {void}
	         */
	        VideoControls.prototype.initializeLocalization = function () {
	            if (!!this.playButton) {
	                this.locPlay = this.playButton.getAttribute('data-locPlay') || 'Play';
	                this.locPause = this.playButton.getAttribute('data-locPause') || 'Pause';
	            }
	        };
	        /**
	         * @name - setDuration
	         * @description - Set the duration (max) of the VideoControl's progress slider.
	         * @public
	         * @param {number} duration - The video's duration in seconds.
	         * @returns {void}
	         */
	        VideoControls.prototype.setDuration = function (duration) {
	            if (utility_1.isNumber(duration)) {
	                if (!!this.progressSlider) {
	                    this.progressSlider.resetSlider(0, duration);
	                }
	                if (!!this.timeDuration) {
	                    this.timeDuration.innerHTML = utility_1.toElapsedTimeString(duration);
	                }
	            }
	        };
	        /**
	         * @name - setPlayPosition.
	         * @description - Set the duration of the VideoControl's progress slider.
	         * @public
	         * @param {number} position - The position to set the current progress slider to.
	         * @returns {void}
	         */
	        VideoControls.prototype.setPlayPosition = function (position) {
	            if (utility_1.isNumber(position) && !!this.progressSlider) {
	                this.progressSlider.setValue(position);
	            }
	        };
	        /**
	         * @name - setVolume.
	         * @description - Sets the volume.
	         * @public
	         * @param {number} volume - The desired volume (0-1).
	         * @returns {void}
	         */
	        VideoControls.prototype.setVolume = function (volume) {
	            if (utility_1.isNumber(volume) && !!this.videoPlayer) {
	                this.videoPlayer.setVolume(volume);
	                if (!!this.volumeSlider) {
	                    this.volumeSlider.setValue(Math.round(volume * 100));
	                    this.updateMuteGlyph();
	                }
	            }
	        };
	        /**
	         * @name - setMuted.
	         * @description - Sets the muted state.
	         * @public
	         * @param {boolean} muted - The desired mute state, true if the video should be muted, otherwise false.
	         * @returns {void}
	         */
	        VideoControls.prototype.setMuted = function (muted) {
	            if (!!this.videoPlayer) {
	                this.videoPlayer.setMuted(muted);
	                this.updateMuteGlyph();
	            }
	        };
	        /**
	         * @name - updateMuteGlyph.
	         * @description - Updates the mute/unmute glyph on the volume button.
	         * @private
	         * @returns {void}
	         */
	        VideoControls.prototype.updateMuteGlyph = function () {
	            if (!!this.videoPlayer && !!this.volumeButton) {
	                htmlExtensions_1.removeClasses(this.volumeButton, ['glyph-volume', 'glyph-mute']);
	                var isMuted = this.videoPlayer.isMuted() || (this.videoPlayer.getVolume() === 0);
	                htmlExtensions_1.addClass(this.volumeButton, isMuted ? 'glyph-mute' : 'glyph-volume');
	            }
	        };
	        /**
	         * @name - prepareToHide.
	         * @description - Called when the video controls are about to be hidden.
	         *                We use this notification to close all open dialogs.
	         * @public
	         * @returns {void}
	         */
	        VideoControls.prototype.prepareToHide = function () {
	            this.hideOptionsContainer();
	            this.hideVolumeContainer();
	        };
	        /**
	         * @name - onProgressChanged.
	         * @description - The progress slider's value changed listener.
	         * @private
	         * @param {ISliderNotification} notification - The slider notification.
	         * @returns {string} - The string to use to represent the current value in the slider thumb tooltip.
	         */
	        VideoControls.prototype.onProgressChanged = function (notification) {
	            if (!notification) {
	                return null;
	            }
	            if (!!this.videoPlayer && notification.userInitiated) {
	                this.videoPlayer.setPlayPosition(notification.value);
	            }
	            var elapsedTime = utility_1.toElapsedTimeString(notification.value);
	            if (!!this.timeCurrent) {
	                this.timeCurrent.innerHTML = elapsedTime;
	            }
	            return elapsedTime;
	        };
	        /**
	         * @name - onVolumeChanged.
	         * @description - The volume slider's value changed listener.
	         * @private
	         * @param {ISliderNotification} notification - The slider notification.
	         * @returns {string} - The string to use to represent the current value in the slider thumb tooltip.
	         */
	        VideoControls.prototype.onVolumeChanged = function (notification) {
	            if (!notification) {
	                return null;
	            }
	            if (!!this.videoPlayer && (notification.value > 0)) {
	                this.videoPlayer.setMuted(false);
	            }
	            var volume = Math.round(notification.value);
	            this.setVolume(volume / 100);
	            return volume.toString();
	        };
	        /**
	         * @name - play.
	         * @description - Updates the play/pause button's state and calls videoPlayer.play().
	         * @private
	         * @returns {void}
	         */
	        VideoControls.prototype.play = function () {
	            if (!!this.videoPlayer) {
	                this.videoPlayer.play();
	            }
	        };
	        /**
	         * @name - pause.
	         * @description - Updates the play/pause button's state and calls videoPlayer.pause().
	         * @private
	         * @returns {void}
	         */
	        VideoControls.prototype.pause = function () {
	            if (!!this.videoPlayer) {
	                this.videoPlayer.pause();
	            }
	        };
	        /**
	         * @name - updatePlayPauseState.
	         * @description - Updates the play/pause button's ux state.
	         * @public
	         * @returns {void}
	         */
	        VideoControls.prototype.updatePlayPauseState = function () {
	            if (!!this.videoPlayer && !!this.playButton) {
	                if (this.videoPlayer.isPlayable()) {
	                    this.playButton.removeAttribute('disabled');
	                    if (this.videoPlayer.isPaused()) {
	                        if (!!this.playTooltip) {
	                            this.playTooltip.innerHTML = this.locPlay;
	                        }
	                        htmlExtensions_1.removeClass(this.playButton, 'glyph-pause');
	                        htmlExtensions_1.addClass(this.playButton, 'glyph-play');
	                    }
	                    else {
	                        if (!!this.playTooltip) {
	                            this.playTooltip.innerHTML = this.locPause;
	                        }
	                        htmlExtensions_1.removeClass(this.playButton, 'glyph-play');
	                        htmlExtensions_1.addClass(this.playButton, 'glyph-pause');
	                        this.prepareToHide();
	                    }
	                }
	                else {
	                    // When the video isn't playable we'll show as play but disabled.
	                    if (!!this.playTooltip) {
	                        this.playTooltip.innerHTML = this.locPlay;
	                    }
	                    htmlExtensions_1.removeClass(this.playButton, 'glyph-pause');
	                    htmlExtensions_1.addClass(this.playButton, 'glyph-play');
	                    this.playButton.setAttribute('disabled', 'disabled');
	                }
	            }
	        };
	        /**
	         * @name - showVolumeContainer
	         * @description - Show the volume container.
	         * @private
	         * @returns {void}
	         */
	        VideoControls.prototype.showVolumeContainer = function () {
	            if (!!this.volumeContainer) {
	                this.volumeContainer.setAttribute(VideoControls.ariaHidden, 'false');
	                this.onlyOneDialog(this.volumeContainer);
	            }
	        };
	        /**
	         * @name - hideVolumeContainer
	         * @description - Hide the volume container.
	         * @private
	         * @returns {void}
	         */
	        VideoControls.prototype.hideVolumeContainer = function () {
	            if (!!this.volumeContainer) {
	                this.volumeContainer.setAttribute(VideoControls.ariaHidden, 'true');
	            }
	        };
	        /**
	         * @name - optionsDialogInit
	         * @description - Initializes the options dialog. Persists top level menu information and adds click listeners.
	         * @private
	         * @returns {void}
	         */
	        VideoControls.prototype.optionsDialogInit = function () {
	            if (!!this.optionsContainer) {
	                this.odParent = htmlExtensions_1.selectFirstElement('ul', this.optionsContainer);
	                this.odDimensions = htmlExtensions_1.getClientRect(this.odParent);
	                htmlExtensions_1.addEvent(this.odParent, htmlExtensions_1.eventTypes.click, this.onOptionsDialogClick);
	            }
	        };
	        /**
	         * @name - showOptionsContainer
	         * @description - Show the options container.
	         * @private
	         * @returns {void}
	         */
	        VideoControls.prototype.showOptionsContainer = function () {
	            if (!!this.optionsContainer && !!this.odParent) {
	                this.optionsContainer.setAttribute(VideoControls.ariaHidden, 'false');
	                htmlExtensions_1.css(this.optionsContainer, 'height', this.odDimensions.height + 'px');
	                htmlExtensions_1.css(this.optionsContainer, 'overflowY', 'hidden');
	                htmlExtensions_1.css(this.odParent, 'left', '0');
	                this.odClearSubActive();
	                this.onlyOneDialog(this.optionsContainer);
	            }
	        };
	        /**
	         * @name - onlyOneDialog
	         * @description - Ensures that only one dialog (options/volume) is open at a time.
	         * @private
	         * @param {HTMLElement} dialog - The dialog that is allowed to remain open.
	         * @returns {void}
	         */
	        VideoControls.prototype.onlyOneDialog = function (dialog) {
	            if (!!this.optionsContainer && !!this.volumeContainer &&
	                (this.optionsContainer.getAttribute(VideoControls.ariaHidden) === 'false') &&
	                (this.volumeContainer.getAttribute(VideoControls.ariaHidden) === 'false')) {
	                if (dialog === this.optionsContainer) {
	                    this.hideVolumeContainer();
	                }
	                else {
	                    this.hideOptionsContainer();
	                }
	            }
	        };
	        /**
	         * @name - calcHeight
	         * @description - Calculate the options dialog's submenu's height.
	         * @private
	         * @param {HTMLElement} submenu - the submenu to calcuate the height of.
	         * @returns {number} - The calculated height.
	         */
	        VideoControls.prototype.calcHeight = function (submenu) {
	            if (!submenu || !this.videoControls) {
	                return 0;
	            }
	            var subMenuHeight = htmlExtensions_1.getClientRect(submenu).height;
	            var videoDimensions = htmlExtensions_1.getClientRect(this.videoControls.parentElement);
	            var videoControlsDimensions = htmlExtensions_1.getClientRect(this.videoControls);
	            var availableHeight = videoDimensions.height - videoControlsDimensions.height;
	            if (subMenuHeight > availableHeight) {
	                htmlExtensions_1.css(this.optionsContainer, 'overflowY', 'scroll');
	                subMenuHeight = availableHeight;
	            }
	            else {
	                htmlExtensions_1.css(this.optionsContainer, 'overflowY', 'hidden');
	            }
	            return subMenuHeight;
	        };
	        /**
	         * @name - odClearSubActive
	         * @description - Clear the options dialog's active submenu.
	         * @private
	         * @returns {void}
	         */
	        VideoControls.prototype.odClearSubActive = function () {
	            if (!!this.odSubActive) {
	                htmlExtensions_1.css(this.odSubActive, 'display', 'none');
	                this.odSubActive = null;
	            }
	        };
	        /**
	         * @name - setOptions
	         * @description - Sets the list of supported options into the specified options menu.
	         * @public
	         * @param {IVideoOptionCollection} optionsCollection - A collection of options supported by the current video.
	         * @returns {void}
	         */
	        VideoControls.prototype.setOptions = function (optionsCollection) {
	            if (!optionsCollection || !optionsCollection.options || !optionsCollection.options.length ||
	                !optionsCollection.category || !this.odParent) {
	                return;
	            }
	            if (optionsCollection.category === 'info') {
	                var option = optionsCollection.options[0];
	                if (option && option.href) {
	                    var infoLink = htmlExtensions_1.selectFirstElementT('a', this.odParent);
	                    if (infoLink) {
	                        infoLink.setAttribute('href', option.href);
	                    }
	                }
	                return;
	            }
	            var fixedItems = optionsCollection.category === 'f-video-share' ? 1 : 2;
	            var optionsList = htmlExtensions_1.selectFirstElement('ul[data-video-sub-options=\'' + optionsCollection.category + '\']', this.odParent);
	            if (!!optionsList) {
	                var oldOptions = htmlExtensions_1.selectElements('li', optionsList);
	                if (!!oldOptions && (oldOptions.length > fixedItems)) {
	                    while (oldOptions.length > fixedItems) {
	                        htmlExtensions_1.removeElement(oldOptions.pop());
	                    }
	                    var cloneSource = oldOptions.pop();
	                    if (fixedItems === 1) {
	                        cloneSource = cloneSource.cloneNode(true);
	                        htmlExtensions_1.removeClasses(cloneSource.firstElementChild, ['glyph-chevron-left', 'c-glyph']);
	                        cloneSource.firstElementChild.removeAttribute('data-video-options');
	                    }
	                    htmlExtensions_1.removeClass(cloneSource.firstElementChild, 'glyph-check-mark');
	                    var selectedOption = null;
	                    for (var _i = 0, _a = optionsCollection.options; _i < _a.length; _i++) {
	                        var option = _a[_i];
	                        var item = optionsList.appendChild(cloneSource.cloneNode(true));
	                        item.id = option.id;
	                        item.firstElementChild.innerHTML = option.value;
	                        if (option.selected) {
	                            selectedOption = item.firstElementChild;
	                        }
	                        if (option.href) {
	                            item.firstElementChild.setAttribute('href', option.href);
	                            htmlExtensions_1.addClass(item.firstElementChild, option.glyph);
	                        }
	                        if (option.glyph) {
	                            htmlExtensions_1.addClass(item.firstElementChild, 'c-glyph');
	                            htmlExtensions_1.addClass(item.firstElementChild, option.glyph);
	                        }
	                        if (option.image) {
	                            var image = item.firstElementChild.appendChild(document.createElement('img'));
	                            htmlExtensions_1.addClass(image, 'c-image');
	                            image.setAttribute('src', option.image);
	                        }
	                    }
	                    if (optionsCollection.category !== 'f-video-share') {
	                        if (!selectedOption) {
	                            selectedOption = cloneSource.firstElementChild;
	                        }
	                        htmlExtensions_1.addClass(selectedOption, 'glyph-check-mark');
	                        if (!!this.videoPlayer) {
	                            this.videoPlayer.onOptionChanged({
	                                category: optionsCollection.category,
	                                id: selectedOption.parentElement.id,
	                                href: selectedOption.getAttribute('href')
	                            });
	                        }
	                    }
	                }
	            }
	        };
	        /**
	          * @name - selector
	          * @description - selector to use to find VideoControls components in the document.
	          * @static
	          * @public
	          * @type {string}
	          */
	        VideoControls.selector = '.f-video-controls';
	        /**
	          * @name - ariaHidden
	          * @description - The aria-hidden attribute value.
	          * @static
	          * @private
	          * @type {string}
	          */
	        VideoControls.ariaHidden = 'aria-hidden';
	        /**
	          * @name - ariaLabel
	          * @description - The aria-label attribute value.
	          * @static
	          * @private
	          * @type {string}
	          */
	        VideoControls.ariaLabel = 'aria-label';
	        /**
	         * @name - screenReaderOnlyClass
	         * @description - The class to apply when an element should be visually hidden but still
	         *                accessible to screen readers
	         * @static
	         * @private
	         * @type {string}
	         */
	        VideoControls.screenReaderOnlyClass = 'x-screen-reader';
	        return VideoControls;
	    }());
	    exports.VideoControls = VideoControls;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(60), __webpack_require__(4), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ttml_parser_1, htmlExtensions_1, utility_1) {
	    "use strict";
	    var VideoClosedCaptions = (function () {
	        /**
	        * @constructor
	        * @description - Constructor for the VideoClosedCaptions class.
	        * @public
	        * @param {HTMLElement} element - The element associated with this VideoClosedCaptions instance.
	        */
	        function VideoClosedCaptions(element) {
	            this.element = element;
	            /**
	            * @name - lastPlayPosition
	            * @description - The last player position passed to updateCaptions.
	            *                This is used to call updateCaptions again when the cc language is changed.
	            *                Play could be paused at that time.
	            * @private
	            * @type {number}
	            */
	            this.lastPlayPosition = 0;
	            this.ccLanguageId = null;
	            this.resetCaptions();
	        }
	        /**
	        * @name - setCcLanguage
	        * @description - Updates the component if there is any change to its underlying DOM.
	        * @public
	        * @param {string} ccLanguageId - The desired new cc value.
	        * @param {string} href - The ttml href.
	        * @returns {void}
	        */
	        VideoClosedCaptions.prototype.setCcLanguage = function (ccLanguageId, href) {
	            if (!this.element || (ccLanguageId === this.ccLanguageId)) {
	                return;
	            }
	            this.ttmlContext = null;
	            this.resetCaptions();
	            if (!href) {
	                this.ccLanguageId = null;
	                return;
	            }
	            this.ccLanguageId = ccLanguageId;
	            this.loadClosedCaptions(href);
	        };
	        /**
	        * @name - loadClosedCaptions
	        * @description - Loads the close captioning ttml file.
	        * @private
	        * @param {string} href - The cc href.
	        * @returns {void}
	        */
	        VideoClosedCaptions.prototype.loadClosedCaptions = function (href) {
	            var _this = this;
	            if (href) {
	                var xhttp_1 = new XMLHttpRequest();
	                xhttp_1.onreadystatechange = function () {
	                    if ((xhttp_1.readyState === 4) && (xhttp_1.status === 200)) {
	                        _this.onClosedCaptionsLoaded(xhttp_1.responseXML || xhttp_1.responseText);
	                    }
	                    else {
	                    }
	                };
	                // TODO: 8479736: Update build step to remove commented code.
	                // The following console.log useful for debugging and is left in commented out for easy restoration.
	                ////// xhttp.ontimeout = () => {
	                ////// console.log('ontimeout');
	                ////// };
	                xhttp_1.open('GET', href, true);
	                xhttp_1.setRequestHeader('Accept', 'text/xml, application/xml');
	                xhttp_1.send();
	            }
	        };
	        /**
	        * @name - onClosedCaptionsLoaded
	        * @description - Close captioning ttml file loaded handler.
	        * @private
	        * @param {XMLDocument} ttmlDocument - The ttml document containing the closed captions.
	        * @returns {void}
	        */
	        VideoClosedCaptions.prototype.onClosedCaptionsLoaded = function (ttmlDocument) {
	            if (!ttmlDocument) {
	                return;
	            }
	            this.element.setAttribute(VideoClosedCaptions.ariaHidden, 'false');
	            var id = this.element.id ? (this.element.id + '-') : '';
	            var settingsOverrides = {
	                // TODO: 8479736: Update build step to remove commented code.
	                // The following console.log useful for debugging and is left in commented out for easy restoration.
	                ////// log: console.log,
	                idPrefix: id,
	                fontMap: { 'default': 'Segoe ui, Arial' },
	                relatedMediaObjectRegion: utility_1.getDimensions(this.element)
	            };
	            this.ttmlContext = ttml_parser_1.TtmlParser.parse(ttmlDocument, settingsOverrides);
	            if (this.ttmlContext) {
	                this.ttmlContext.setOwnerDocument(this.element.ownerDocument);
	                if (this.ttmlContext.hasEvents()) {
	                    this.updateCaptions(this.lastPlayPosition);
	                }
	                else {
	                    this.element.setAttribute(VideoClosedCaptions.ariaHidden, 'true');
	                }
	            }
	        };
	        /**
	        * @name - updateCaptions
	        * @description - Update the captionContainer with the captions that correspond to the current time
	        * @public
	        * @param {number} playPosition - The video's play position to sync the captions to.
	        * @returns {void}
	        */
	        VideoClosedCaptions.prototype.updateCaptions = function (playPosition) {
	            this.lastPlayPosition = playPosition;
	            if (this.ttmlContext && this.ttmlContext.hasEvents()) {
	                var tick = Math.floor(playPosition * 1000);
	                // Make this.element visible so we can get it's dimensions, otherwise we'll get 0.
	                this.element.setAttribute(VideoClosedCaptions.ariaHidden, 'false');
	                var dimensions = utility_1.getDimensions(this.element);
	                // TODO: 8479736: Update build step to remove commented code.
	                // The following console.log useful for debugging and is left in commented out for easy restoration.
	                ////// console.log('width: ' + dimensions.width + ' height: ' + dimensions.height +
	                ////// 'bottom: ' + css(this.element, 'bottom') + ' class: ' + this.element.className);
	                if (this.ttmlContext.updateRelatedMediaObjectRegion(dimensions)) {
	                    // Call resetCaptions to force an update since the relatedMediaObjectRegion size has changed.
	                    this.resetCaptions();
	                }
	                if (this.ttmlContext.updateCurrentEvents(tick)) {
	                    // Then hide it while we clear and update it.
	                    this.element.setAttribute(VideoClosedCaptions.ariaHidden, 'true');
	                    htmlExtensions_1.removeInnerHtml(this.element);
	                    for (var _i = 0, _a = this.ttmlContext.getCues(tick); _i < _a.length; _i++) {
	                        var cue = _a[_i];
	                        this.applyUserPreferencesOverrides(cue);
	                        this.element.appendChild(cue);
	                    }
	                    // Then make it visible again.
	                    this.element.setAttribute(VideoClosedCaptions.ariaHidden, 'false');
	                }
	            }
	        };
	        /**
	        * @name - resetCaptions
	        * @description - Resets the ttml caption container.
	        *                This should be called when user preferences change.
	        * @public
	        * @returns {void}
	        */
	        VideoClosedCaptions.prototype.resetCaptions = function () {
	            if (this.ttmlContext) {
	                this.ttmlContext.resetCurrentEvents();
	            }
	            if (this.element) {
	                this.element.setAttribute(VideoClosedCaptions.ariaHidden, 'true');
	                htmlExtensions_1.removeInnerHtml(this.element);
	            }
	        };
	        /**
	        * @name - applyUserPreferencesOverrides
	        * @description - Applies user preference overrides to the specified cue.
	        * @private
	        * @param {HTMLElement} cue - The cue to apply any overrides to.
	        * @returns {void}
	        */
	        VideoClosedCaptions.prototype.applyUserPreferencesOverrides = function (cue) {
	            if (!VideoClosedCaptions.userPreferences) {
	                return;
	            }
	            if (VideoClosedCaptions.userPreferences.text) {
	                for (var _i = 0, _a = htmlExtensions_1.selectElements('p, span, br', cue); _i < _a.length; _i++) {
	                    var element = _a[_i];
	                    for (var property in VideoClosedCaptions.userPreferences.text) {
	                        if (VideoClosedCaptions.userPreferences.text.hasOwnProperty(property)) {
	                            // if (property === 'font-size') {
	                            // // TODO: Arun need to set the 'line-height' as well based on font-size.
	                            // }
	                            htmlExtensions_1.css(element, property, VideoClosedCaptions.userPreferences.text[property]);
	                        }
	                    }
	                }
	            }
	            if (VideoClosedCaptions.userPreferences.window) {
	                for (var _b = 0, _c = htmlExtensions_1.toArray(cue.children); _b < _c.length; _b++) {
	                    var element = _c[_b];
	                    for (var property in VideoClosedCaptions.userPreferences.window) {
	                        if (VideoClosedCaptions.userPreferences.window.hasOwnProperty(property)) {
	                            htmlExtensions_1.css(element, property, VideoClosedCaptions.userPreferences.window[property]);
	                        }
	                    }
	                }
	            }
	        };
	        /**
	        * @name - ariaHidden
	        * @description - aria-hidden attribute name.
	        * @static
	        * @private
	        * @type {string}
	        */
	        VideoClosedCaptions.ariaHidden = 'aria-hidden';
	        return VideoClosedCaptions;
	    }());
	    exports.VideoClosedCaptions = VideoClosedCaptions;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(61), __webpack_require__(63), __webpack_require__(62), __webpack_require__(4), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ttml_context_1, ttml_time_parser_1, ttml_settings_1, htmlExtensions_1, stringExtensions_1) {
	    "use strict";
	    var TtmlParser = (function () {
	        function TtmlParser() {
	        }
	        /**
	        * @name - parse
	        * @description - Parses a ttml document and builds a ttmlContext instance from it.
	        * @static
	        * @public
	        * @param {XMLDocument} ttmlDocument - The ttml document to parse.
	        * @param {ITtmlSettings} settingsOverrides - The ttml settings overrides to use.
	        * @returns {ITtmlContext} - The resulting ttmlContext instance that can be used to get cues by time.
	        */
	        TtmlParser.parse = function (ttmlDocument, settingsOverrides) {
	            ttmlDocument = (typeof ttmlDocument === 'string') ? TtmlParser.parseXml(ttmlDocument) : ttmlDocument;
	            var ttmlContext = new ttml_context_1.TtmlContext();
	            // Start initializing the context.
	            ttmlContext.settings = new ttml_settings_1.TtmlSettings(settingsOverrides);
	            ttmlContext.root = TtmlParser.verifyRoot(ttmlDocument, ttmlContext);
	            ttmlContext.body = TtmlParser.getFirstElementByTagNameNS(ttmlContext.root, 'body', ttmlContext.settings.ttmlNamespace);
	            ttmlContext.events = [];
	            ttmlContext.styleSetCache = [];
	            if (ttmlContext.body) {
	                try {
	                    // Parse the root <tt> attributes.
	                    TtmlParser.parseTtAttrs(ttmlContext);
	                    // Set up our regions.
	                    var head = TtmlParser.ensureRegions(ttmlContext);
	                    var timeBase = TtmlParser.getAttributeNS(ttmlContext.root, 'timeBase', ttmlContext.settings.ttmlParameterNamespace) || 'media';
	                    if (ttmlContext.settings.supportedTimeBase.indexOf(timeBase) !== -1) {
	                        // Process textnodes into anonymous spans.
	                        TtmlParser.processAnonymousSpans(ttmlContext, ttmlContext.body);
	                        var timeParser = new ttml_time_parser_1.TtmlTimeParser(ttmlContext.settings.mediaFrameRate, ttmlContext.settings.mediaTickRate);
	                        // Apply the intervals over the tree.
	                        TtmlParser.applyTiming(ttmlContext, ttmlContext.root, { start: TtmlParser.mediaStart, end: TtmlParser.mediaEnd }, true, timeParser);
	                        // Apply the style inheritance over the tree.
	                        TtmlParser.applyStyling(ttmlContext, head);
	                    }
	                }
	                catch (error) {
	                }
	                // Add an dummy end event for the captions to appear until end of video.
	                // Not sure why we need to do this, please add to this comment if you know.
	                ttmlContext.events.push({ time: TtmlParser.mediaEnd, element: null });
	                // Sort events into temporal order.
	                ttmlContext.events.sort(function (event1, event2) {
	                    return event1.time - event2.time;
	                });
	            }
	            return ttmlContext;
	        };
	        /**
	        * @name - parseXml
	        * @description - Parses an xml document in string format to an XMLDocument.
	        * @static
	        * @private
	        * @param {string} xmlString - The xml string to parse.
	        * @returns {XMLDocument} - The resulting XMLDocument, or null if the xml string failed to parse.
	        */
	        TtmlParser.parseXml = function (xmlString) {
	            var xml = null;
	            try {
	                if (window.DOMParser) {
	                    var domParser = new DOMParser();
	                    xml = domParser.parseFromString(xmlString, 'application/xml');
	                }
	                else {
	                    var domParser = new ActiveXObject('Microsoft.XMLDOM');
	                    domParser.async = false;
	                    domParser.loadXML(xmlString);
	                    xml = domParser;
	                }
	            }
	            catch (exception) {
	                xml = null;
	            }
	            return xml;
	        };
	        /**
	        * @name - verifyRoot
	        * @description - Verifies that root <tag> of the specified document is the expected ttml <tt> tagName and
	        *                updates the settings namespaces from it if they are non standard.
	        * @static
	        * @private
	        * @param {XMLDocument} ttmlDocument - The ttml document to verify.
	        * @param {TtmlContext} ttmlContext - The ttmlContext for this document.
	        * @returns {Element} - The valid root Element, or or null if the root Element was not valid.
	        */
	        TtmlParser.verifyRoot = function (ttmlDocument, ttmlContext) {
	            var root;
	            var candidate = ttmlDocument.documentElement;
	            if (TtmlParser.getLocalTagName(candidate) === 'tt') {
	                if (candidate.namespaceURI !== 'http://www.w3.org/ns/ttml') {
	                    ttmlContext.settings.ttmlNamespace = candidate.namespaceURI;
	                    ttmlContext.settings.ttmlStyleNamespace = ttmlContext.settings.ttmlNamespace + '#styling';
	                    ttmlContext.settings.ttmlParameterNamespace = ttmlContext.settings.ttmlNamespace + '#parameter';
	                    ttmlContext.settings.ttmlMetaNamespace = ttmlContext.settings.ttmlNamespace + '#metadata';
	                }
	                root = candidate;
	            }
	            return root;
	        };
	        /**
	        * @name - parseTtAttrs
	        * @description - Parses the <tt> tag attributes and initializes ttmlContext properties from them.
	        * @static
	        * @private
	        * @param {TtmlContext} ttmlContext - The ttmlContext for this document.
	        * @returns {void}
	        */
	        TtmlParser.parseTtAttrs = function (ttmlContext) {
	            var cellRes = TtmlParser.getAttributeNS(ttmlContext.root, 'cellResolution', ttmlContext.settings.ttmlParameterNamespace);
	            var extent = TtmlParser.getAttributeNS(ttmlContext.root, 'extent', ttmlContext.settings.ttmlStyleNamespace);
	            var cellGrid = null;
	            if (cellRes) {
	                var parts = stringExtensions_1.trim(cellRes).split(/\s+/);
	                if (parts.length === 2) {
	                    var columns = Math.round(parseFloat(parts[0]));
	                    var rows = Math.round(parseFloat(parts[1]));
	                    if ((rows > 0) && (columns > 0)) {
	                        cellGrid = { rows: rows, columns: columns };
	                    }
	                }
	            }
	            if (cellGrid) {
	                ttmlContext.settings.cellResolution = cellGrid;
	            }
	            if (extent) {
	                if (extent !== 'auto') {
	                    // Get the individual components.
	                    var coords = extent.split(/\s+/);
	                    if ((coords.length === 2) &&
	                        (coords[0].substr(coords[0].length - 2) === 'px') &&
	                        (coords[1].substr(coords[1].length - 2) === 'px')) {
	                        var width = parseFloat(coords[0].substr(0, coords[0].length - 2));
	                        var height = parseFloat(coords[1].substr(0, coords[1].length - 2));
	                        // Round to integer.
	                        ttmlContext.settings.rootContainerRegionDimensions = { 'width': Math.round(width), 'height': Math.round(height) };
	                    }
	                }
	            }
	            // TODO: 8479736: Update build step to remove commented code.
	            // The following console.log useful for debugging and is left in commented out for easy restoration.
	            ////// if (ttmlContext.settings.log) {
	            ////// ttmlContext.settings.log(format('rootContainerRegionDimensions({0}x{1}) cellResolution({2}x{3}){4}',
	            ////// ttmlContext.settings.rootContainerRegionDimensions ? ttmlContext.settings.rootContainerRegionDimensions.width : '-',
	            ////// ttmlContext.settings.rootContainerRegionDimensions ? ttmlContext.settings.rootContainerRegionDimensions.height : '-',
	            ////// ttmlContext.settings.cellResolution.columns,
	            ////// ttmlContext.settings.cellResolution.rows,
	            ////// (cellGrid) ? '' : '(default)'));
	            ////// }
	        };
	        /**
	        * @name - ensureRegions
	        * @description - Ensures we have the elements/regions we require by either finding them or creating them if they are not present.
	        * @static
	        * @private
	        * @param {TtmlContext} ttmlContext - The ttmlContext for this document.
	        * @returns {Element} - The <head> element.
	        */
	        TtmlParser.ensureRegions = function (ttmlContext) {
	            // Create our rootContainerRegion
	            ttmlContext.rootContainerRegion = ttmlContext.root.ownerDocument.createElementNS(ttmlContext.settings.ttmlNamespace, 'rootcontainerregion');
	            ttmlContext.root.appendChild(ttmlContext.rootContainerRegion);
	            var extents = ttmlContext.settings.rootContainerRegionDimensions ? stringExtensions_1.format('{0}px {1}px', ttmlContext.settings.rootContainerRegionDimensions.width, ttmlContext.settings.rootContainerRegionDimensions.height) : 'auto';
	            ttmlContext.rootContainerRegion.setAttributeNS(ttmlContext.settings.ttmlStyleNamespace, 'extent', extents);
	            var head = TtmlParser.getFirstElementByTagNameNS(ttmlContext.root, 'head', ttmlContext.settings.ttmlNamespace);
	            // Ensure we have a <head>
	            if (!head) {
	                // No <head> so we need to create that now.
	                head = ttmlContext.root.ownerDocument.createElementNS(ttmlContext.settings.ttmlNamespace, 'head');
	                ttmlContext.root.appendChild(head);
	            }
	            // Ensure we have a <layout>
	            ttmlContext.layout = TtmlParser.getFirstElementByTagNameNS(head, 'layout', ttmlContext.settings.ttmlNamespace);
	            if (!ttmlContext.layout) {
	                // No <layout> so we need to create that now.
	                ttmlContext.layout = ttmlContext.root.ownerDocument.createElementNS(ttmlContext.settings.ttmlNamespace, 'layout');
	                ttmlContext.root.appendChild(ttmlContext.layout);
	            }
	            // Create an anonymous region if we have no regions.
	            var regions = ttmlContext.layout.getElementsByTagNameNS(ttmlContext.settings.ttmlNamespace, 'region');
	            if (!regions.length) {
	                var anonymousRegion = ttmlContext.root.ownerDocument.createElementNS(ttmlContext.settings.ttmlNamespace, 'region');
	                anonymousRegion.setAttributeNS(ttml_settings_1.xmlNS, 'id', 'anonymous');
	                anonymousRegion.setAttribute('data-isanonymous', '1');
	                ttmlContext.layout.appendChild(anonymousRegion);
	                ttmlContext.body.setAttributeNS(ttmlContext.settings.ttmlNamespace, 'region', 'anonymous');
	            }
	            return head;
	        };
	        /**
	        * @name - processAnonymousSpans
	        * @description - Recurses through all the <p> elements in the document and groups all the contiguous TEXT_NODES together into <span>'s
	        * @static
	        * @private
	        * @param {TtmlContext} ttmlContext - The ttmlContext for this document.
	        * @param {Element} element - The element to process the TEXT_NODES of.
	        * @returns {void}
	        */
	        TtmlParser.processAnonymousSpans = function (ttmlContext, element) {
	            // If this element is <p> then group all contiguous textnodes together in <span>
	            if (TtmlParser.isTagNS(element, 'p', ttmlContext.settings.ttmlNamespace)) {
	                var textNodeGroups = [];
	                var prevNodeType = void 0;
	                for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(element.childNodes); _i < _a.length; _i++) {
	                    var child = _a[_i];
	                    if (child.nodeType === Node.TEXT_NODE) {
	                        if (prevNodeType !== Node.TEXT_NODE) {
	                            textNodeGroups.push([]);
	                        }
	                        textNodeGroups[textNodeGroups.length - 1].push(child);
	                    }
	                    prevNodeType = child.nodeType;
	                }
	                for (var _b = 0, textNodeGroups_1 = textNodeGroups; _b < textNodeGroups_1.length; _b++) {
	                    var group = textNodeGroups_1[_b];
	                    var anonSpan = ttmlContext.root.ownerDocument.createElementNS(ttmlContext.settings.ttmlNamespace, 'span');
	                    anonSpan.appendChild(group[0].parentNode.replaceChild(anonSpan, group[0]));
	                    for (var index = 1; index < group.length; index++) {
	                        anonSpan.appendChild(group[index]);
	                    }
	                }
	            }
	            // Then recurse through the contents doing the same thing for those.
	            for (var _c = 0, _d = htmlExtensions_1.nodeListToArray(element.childNodes); _c < _d.length; _c++) {
	                var child = _d[_c];
	                this.processAnonymousSpans(ttmlContext, child);
	            }
	        };
	        /**
	        * @name - applyTiming
	        * @description - Recurses through the document element tree to determine the absolute start and end times of all the elements
	        *                using the TTML subset of the SMIL timing model. The reference times passed in 'bound' are absolute times.
	        *                The result of calling this is to set the local start time and end time to absolute times between these two
	        *                reference times, based on the begin, end and dur attributes and to recursively set all of the children.
	        * @static
	        * @private
	        * @param {TtmlContext} ttmlContext - The ttmlContext for this document.
	        * @param {Element} element - The element to apply the timing to.
	        * @param {ITtmlTimingBounds} bound - The bounds for the timing.
	        * @param {boolean} isParallelContext - Indicates whether or not this element is in a parallel timing context.
	        * @param {TtmlTimeParser} timeParser - The TtmlTimeParser to use to parse this elements time attributes.
	        * @returns {void}
	        */
	        TtmlParser.applyTiming = function (ttmlContext, element, bound, isParallelContext, timeParser) {
	            var beginAttribute = TtmlParser.getAttributeNS(element, 'begin', ttmlContext.settings.ttmlNamespace);
	            var startTime = beginAttribute ? timeParser.parse(beginAttribute) : bound.start;
	            var endTime = 0;
	            // Compute the simple duration of the interval.
	            var defaultDuration = 0;
	            var duration = 0;
	            var end = 0;
	            var durationAttribute = TtmlParser.getAttributeNS(element, 'dur', ttmlContext.settings.ttmlNamespace);
	            var endAttribute = TtmlParser.getAttributeNS(element, 'end', ttmlContext.settings.ttmlNamespace);
	            if ((!durationAttribute) && (!endAttribute)) {
	                // No direct timing attested, so use default based on context.
	                // Parallel children have indefinite default duration, truncated by bounds.
	                if (isParallelContext) {
	                    // Sequential children have zero default duration.
	                    if (startTime <= bound.end) {
	                        defaultDuration = Math.max(0, bound.end - startTime);
	                        endTime = bound.end;
	                    }
	                    else {
	                        endTime = 0;
	                    }
	                }
	            }
	            else if (durationAttribute && endAttribute) {
	                // Both duration and end attested, the minimum interval applies.
	                duration = timeParser.parse(durationAttribute);
	                end = timeParser.parse(endAttribute);
	                var minEnd = Math.min(startTime + duration, bound.start + end);
	                endTime = Math.min(minEnd, bound.end);
	            }
	            else if (endAttribute) {
	                // Only end attested.
	                end = timeParser.parse(endAttribute);
	                endTime = Math.min(bound.start + end, bound.end);
	            }
	            else {
	                // Only dur attested.
	                duration = timeParser.parse(durationAttribute);
	                endTime = Math.min(startTime + duration, bound.end);
	            }
	            if (endTime < startTime) {
	                endTime = startTime;
	            }
	            startTime = Math.floor(startTime);
	            endTime = Math.floor(endTime);
	            element.setAttribute('data-time-start', startTime.toString());
	            element.setAttribute('data-time-end', endTime.toString());
	            if ((startTime >= 0) && (ttmlContext.events.filter(function (event) { return event.time === startTime; }).length <= 0)) {
	                ttmlContext.events.push({ time: startTime, element: element });
	            }
	            var start = startTime;
	            for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(element.childNodes); _i < _a.length; _i++) {
	                var child = _a[_i];
	                if (child.nodeType === Node.ELEMENT_NODE) {
	                    // Parallel is the default so null is OK here.
	                    if (TtmlParser.getAttributeNS(element, 'timeContainer', ttmlContext.settings.ttmlNamespace) !== 'seq') {
	                        this.applyTiming(ttmlContext, child, { start: startTime, end: endTime }, true, timeParser);
	                    }
	                    else {
	                        this.applyTiming(ttmlContext, child, { start: start, end: endTime }, false, timeParser);
	                        start = parseInt(child.getAttribute('data-time-end'), 10);
	                    }
	                }
	            }
	        };
	        /**
	        * @name - applyStyling
	        * @description - Recurses through all the elements in <head> applying the ttml sytling to them based on the <style>'s.
	        * @static
	        * @private
	        * @param {TtmlContext} ttmlContext - The ttmlContext for this document.
	        * @param {Element} head - The element to process the TEXT_NODES of.
	        * @returns {void}
	        */
	        TtmlParser.applyStyling = function (ttmlContext, head) {
	            // First find all the <style>'s
	            var styling = TtmlParser.getFirstElementByTagNameNS(head, 'styling', ttmlContext.settings.ttmlNamespace);
	            var styles = styling ? htmlExtensions_1.nodeListToArray(styling.getElementsByTagNameNS(ttmlContext.settings.ttmlNamespace, 'style')) : [];
	            // Apply the styles to every element in the body
	            for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(ttmlContext.root.querySelectorAll('*')); _i < _a.length; _i++) {
	                var element = _a[_i];
	                this.applyStyle(ttmlContext, element, styles);
	            }
	        };
	        /**
	        * @name - applyStyle
	        * @description - Applies the ttml styling to the specified element.
	        *                Apply styles in the correct order to element by building a styleSet, adding it
	        *                to the stlyeSetCache, and the adding reference to the cached styleSet to the element.
	        * @static
	        * @private
	        * @param {TtmlContext} ttmlContext - The ttmlContext for this document.
	        * @param {Element} element - The element to apply the ttml styling to.
	        * @param {Element[]} styles - The set of styles to apply.
	        * @returns {void}
	        */
	        TtmlParser.applyStyle = function (ttmlContext, element, styles) {
	            var styleSet = {};
	            // Find all the applicable styles and set them as properties on styleSet.
	            this.applyStylesheet(ttmlContext.settings, styleSet, element, styles);
	            TtmlParser.applyInlineStyles(ttmlContext.settings, styleSet, element);
	            var empty = true;
	            for (var style in styleSet) {
	                // Just need to see if there's at least one.
	                if (styleSet.hasOwnProperty(style)) {
	                    empty = false;
	                    break;
	                }
	            }
	            if (!empty) {
	                // TODO: 8479736: Update build step to remove commented code.
	                // The following console.log useful for debugging and is left in commented out for easy restoration.
	                ////// if (ttmlContext.settings.log) {
	                ////// let styles = '';
	                ////// for (let style in styleSet) {
	                ////// if (styleSet.hasOwnProperty(style)) {
	                ////// styles += style + ':' + styleSet[style] + '; ';
	                ////// }
	                ////// }
	                ////// ttmlContext.settings.log(
	                ////// format('addStyleSet element({0}) id({1}) style({2})',
	                ////// element.nodeName,
	                ////// ttmlContext.styleSetCache.length,
	                ////// trim(styles)));
	                ////// }
	                // Record the applied set to the element.
	                element.setAttribute('data-styleSet', ttmlContext.styleSetCache.length.toString());
	                ttmlContext.styleSetCache.push(styleSet);
	            }
	        };
	        /**
	        * @name - applyStylesheet
	        * @description - For each style id on the element, find the corresponding style element and then
	        *                apply the stylesheet into styleset; this recurses over the tree of referenced styles.
	        * @static
	        * @private
	        * @param {TtmlSettings} settings - The TtmlSettings for this document.
	        * @param {IDictionaryStringString} styleSet - The styleSet to build upon.
	        * @param {Element} element - The element to apply the styles of.
	        * @param {Element[]} styles - The set of styles to apply.
	        * @returns {void}
	        */
	        TtmlParser.applyStylesheet = function (settings, styleSet, element, styles) {
	            // Find all the style ID references.
	            var styleAttribute = TtmlParser.getAttributeNS(element, 'style', settings.ttmlNamespace);
	            var ids = styleAttribute ? styleAttribute.split(/\s+/) : [];
	            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
	                var styleId = ids_1[_i];
	                for (var _a = 0, styles_1 = styles; _a < styles_1.length; _a++) {
	                    var style = styles_1[_a];
	                    // Filter on those whose id is the one we want.
	                    if (TtmlParser.getAttributeNS(style, 'id', ttml_settings_1.xmlNS) === styleId) {
	                        // Recurse into its style references.
	                        this.applyStylesheet(settings, styleSet, style, styles);
	                        // Do inline styles.
	                        TtmlParser.applyInlineStyles(settings, styleSet, style);
	                    }
	                }
	            }
	            // If the element is a region do nested styles. NOTE regions can only be referenced from elements in the body.
	            if (TtmlParser.isTagNS(element, 'region', settings.ttmlNamespace)) {
	                // Find all the style elements in the TTML namespace.
	                for (var _b = 0, _c = htmlExtensions_1.nodeListToArray(element.getElementsByTagNameNS(settings.ttmlNamespace, 'style')); _b < _c.length; _b++) {
	                    var style = _c[_b];
	                    TtmlParser.applyInlineStyles(settings, styleSet, style);
	                }
	            }
	        };
	        /**
	        * @name - applyInlineStyles
	        * @description - Applies the elements inline styles into the styleSet.
	        * @static
	        * @public
	        * @param {TtmlSettings} settings - The TtmlSettings for this document.
	        * @param {IDictionaryStringString} styleSet - The styleSet to build upon.
	        * @param {Element} element - The element to apply the styles of.
	        * @returns {void}
	        */
	        TtmlParser.applyInlineStyles = function (settings, styleSet, element) {
	            for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(element.attributes); _i < _a.length; _i++) {
	                var attribute = _a[_i];
	                if (attribute.namespaceURI === settings.ttmlStyleNamespace) {
	                    // trim() because we see lots of ttml attribute values with trailing space...
	                    styleSet[TtmlParser.getLocalTagName(attribute)] = stringExtensions_1.trim(attribute.nodeValue);
	                }
	            }
	        };
	        /**
	        * @name - getLocalTagName
	        * @description - Gets the local tagName of a Node.
	        * @static
	        * @public
	        * @param {Node} node - The node to get the tagName of.
	        * @returns {string} - The tagName.
	        */
	        TtmlParser.getLocalTagName = function (node) {
	            return node.localName || node.baseName;
	        };
	        /**
	        * @name - isTagNS
	        * @description - Determines whether or not the namespace and local tagName of an element matches
	        *                the specified namespace and tag name.
	        * @static
	        * @private
	        * @param {Element} element - The node to compare against.
	        * @param {string} tagName - The tag name.
	        * @param {string} namespace - The attribute namespace.
	        * @returns {boolean} - True if the elements ns/tagName match, otherwise false.
	        */
	        TtmlParser.isTagNS = function (element, tagName, namespace) {
	            return ((element.namespaceURI === namespace) && this.getLocalTagName(element) === tagName);
	        };
	        /**
	        * @name - getAttributeNS
	        * @description - Gets the value of a namespaced attribute. First tries element.getAttributeNS() but falls back
	        *                to scanning each attribute if that fails.
	        *                If you know which cases go into the fallback code please document it here.
	        * @static
	        * @public
	        * @param {Element} element - The element to get the attribute of.
	        * @param {string} name - The attribute name.
	        * @param {string} namespace - The attribute namespace.
	        * @returns {string} - The attribute value. or an empty string if a matching attribute is not found.
	        */
	        TtmlParser.getAttributeNS = function (element, name, namespace) {
	            var result = element.getAttributeNS(namespace, name);
	            if (!result) {
	                // Go through all the attributes looking for a match.
	                for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(element.attributes); _i < _a.length; _i++) {
	                    var attribute = _a[_i];
	                    if ((attribute.localName === name) && (attribute.lookupNamespaceURI(attribute.prefix) === namespace)) {
	                        result = attribute.value;
	                        break;
	                    }
	                }
	            }
	            return result;
	        };
	        /**
	        * @name - getFirstElementByTagNameNS
	        * @description - Gets the first matching element that matches the specified tagName and namespace.
	        * @static
	        * @private
	        * @param {Element} context - The context to search within.
	        * @param {string} tagName - The tagName to match.
	        * @param {string} namespace - The namespace to match.
	        * @returns {Element} - The first matching element found, or null if there are no matches.
	        */
	        TtmlParser.getFirstElementByTagNameNS = function (context, tagName, namespace) {
	            if (context) {
	                var matches = context.getElementsByTagNameNS(namespace, tagName);
	                if (matches && matches.length) {
	                    return matches[0];
	                }
	            }
	            return null;
	        };
	        /**
	        * @name - mediaStart
	        * @description - Used as the start time for applyTiming when applying to the entire document.
	        * @static
	        * @private
	        * @type {number}
	        */
	        TtmlParser.mediaStart = -1;
	        /**
	        * @name - mediaEnd
	        * @description - Used as the end time for applyTiming when applying to the entire document.
	        *                Picking a number that should always be greater than any real media end time.
	        * @static
	        * @private
	        * @type {number}
	        */
	        TtmlParser.mediaEnd = 99999999;
	        return TtmlParser;
	    }());
	    exports.TtmlParser = TtmlParser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(60), __webpack_require__(62), __webpack_require__(4), __webpack_require__(5), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ttml_parser_1, ttml_settings_1, htmlExtensions_1, stringExtensions_1, utility_1) {
	    "use strict";
	    /**
	    * @class - TtmlContext
	    * @classdesc - The TtmlContext. An instance of this class is returned from the TttmlParser.parse() method after it
	    *              parses a ttml file. This context is then used by the VideoClosedCaptions object to get the captions
	    *              for any play position of the video.
	    * @export
	    */
	    var TtmlContext = (function () {
	        /**
	        * @const�ructor
	        * @description - Constructor for the TtmlContext class.
	        * @public
	        */
	        function TtmlContext() {
	            var _this = this;
	            /**
	            * @name - translateToHtml
	            * @description - Convert a ttml element into the its equivalent html element.
	            * @private
	            * @param {Element} element - The ttml element to translate.
	            * @param {IDictionaryStringString} applicableStyleSet - The style set applicable to this element.
	            * @param {boolean} preserveSpace - Indicates whether or not space should be preserved.
	            * @returns {ITtmlTranslationResult} - A ITtmlTranslationResult instance containing the translation results.
	            */
	            this.translateToHtml = function (element, applicableStyleSet, preserveSpace) {
	                var translation;
	                var innerNode;
	                var name = _this.getTagNameEquivalent(element);
	                var htmlName = '';
	                var htmlClass = '';
	                switch (name) {
	                    case 'ttml:region':
	                        // To simulate the ::cue selector.
	                        htmlClass = 'cue ';
	                    // Intentionally fall through...
	                    case 'ttml:rootcontainerregion':
	                    case 'ttml:body':
	                    case 'ttml:div':
	                        htmlName = 'div';
	                        break;
	                    case 'ttml:p':
	                        htmlName = 'p';
	                        break;
	                    case 'ttml:span':
	                        htmlName = 'span';
	                        break;
	                    case 'ttml:br':
	                        htmlName = 'br';
	                        break;
	                    default:
	                        break;
	                }
	                var role = ttml_parser_1.TtmlParser.getAttributeNS(element, 'role', _this.settings.ttmlMetaNamespace);
	                if (role) {
	                    htmlClass += ' ' + (role);
	                }
	                var agent = ttml_parser_1.TtmlParser.getAttributeNS(element, 'agent', _this.settings.ttmlMetaNamespace);
	                if (agent) {
	                    htmlClass += ' ' + (agent);
	                }
	                // Hack until display:ruby on other elements works.
	                if (role === 'x-ruby') {
	                    htmlName = ('ruby');
	                }
	                else if (role === 'x-rubybase') {
	                    htmlName = ('rb');
	                }
	                else if (role === 'x-rubytext') {
	                    htmlName = ('rt');
	                }
	                if (!stringExtensions_1.isNullOrWhiteSpace(htmlName)) {
	                    translation = TtmlContext.defaultStyle(_this.ownerDocument.createElement(htmlName));
	                    htmlExtensions_1.addClass(translation, stringExtensions_1.trim(htmlClass));
	                    var title = ttml_parser_1.TtmlParser.getAttributeNS(element, 'title', _this.settings.ttmlMetaNamespace);
	                    if (title) {
	                        translation.setAttribute('title', title);
	                    }
	                    // This code can help for alignment debugging.
	                    //////if (name === 'ttml:p') {
	                    ////// translation$.css({'background-color': 'lime'});
	                    //////}
	                    //////if (name === 'ttml:span') {
	                    ////// translation$.css({'background-color': 'pink', 'display': 'inline-block'});
	                    //////}
	                    var id = ttml_parser_1.TtmlParser.getAttributeNS(element, 'id', ttml_settings_1.xmlNS);
	                    if (id && _this.settings.idPrefix) {
	                        // Migrate the ttml doc id's over to the html markup.
	                        // Use idPrefix to ensure there are no name clases on id's already in target doc.
	                        translation.setAttribute('id', _this.settings.idPrefix + id);
	                    }
	                    if (name === 'ttml:region') {
	                        // To get a <region> to display properly we are actually going to need to create two nested <div>s
	                        // This is because for displayAlign to work we need a table-cell <div> inside a table <div>.
	                        innerNode = translation.appendChild(TtmlContext.defaultStyle(_this.ownerDocument.createElement('div')));
	                        htmlExtensions_1.css(innerNode, 'display', 'table');
	                        htmlExtensions_1.css(innerNode, 'border-spacing', '0');
	                        htmlExtensions_1.css(innerNode, 'cell-spacing', '0');
	                        htmlExtensions_1.css(innerNode, 'cell-padding', '0');
	                        htmlExtensions_1.css(innerNode, 'width', '100%');
	                        htmlExtensions_1.css(innerNode, 'height', '100%');
	                        innerNode = innerNode.appendChild(TtmlContext.defaultStyle(_this.ownerDocument.createElement('div')));
	                        htmlExtensions_1.css(innerNode, 'display', 'table-cell');
	                        // Apply the displayAlign style to inner table-cell <div>
	                        if (applicableStyleSet['displayAlign']) {
	                            _this.translateStyle(name, innerNode, { 'displayAlign': applicableStyleSet['displayAlign'] });
	                            // Then remove displayAlign from the applicableStyleSet so as not to also later apply it to the outer table <div>
	                            applicableStyleSet['displayAlign'] = null;
	                        }
	                    }
	                    // If we're preserving space add an inner <span> with 'white-space: pre'.
	                    // This is how we implement preserving space in css and we need an inner
	                    // span because the 'real' span will already be setting it's css white-space
	                    // value to either normal or nowrap and we can't collide with that.
	                    if (preserveSpace && (name === 'ttml:span')) {
	                        innerNode = translation.appendChild(TtmlContext.defaultStyle(_this.ownerDocument.createElement('span')));
	                        htmlExtensions_1.css(innerNode, 'white-space', 'pre');
	                    }
	                    // Default some css properties that we don't want to inadvertantly end up
	                    // inheriting values for that might cause adverse layout impacts for us.
	                    htmlExtensions_1.css(translation, 'position', 'static');
	                    htmlExtensions_1.css(translation, 'width', '100%');
	                    // Copy style from element over to html, translating into CSS as we go.
	                    _this.translateStyle(name, translation, applicableStyleSet);
	                }
	                return { outerNode: translation, innerNode: innerNode ? innerNode : translation };
	            };
	            // Nothing to do at this time...
	        }
	        /**
	        * @name - setOwnerDocument
	        * @description - Set the context's owner document. It will use this to create elements during translation.
	        * @public
	        * @param {Document} ownerDocument - The owner document for this context.
	        * @returns {void}
	        */
	        TtmlContext.prototype.setOwnerDocument = function (ownerDocument) {
	            this.ownerDocument = ownerDocument;
	        };
	        /**
	        * @name - updateRelatedMediaObjectRegion
	        * @description - Updates the context's media object region.
	        * @public
	        * @param {IClientDimension} dimensions - The desired dimensions for the region.
	        * @returns {boolean} - True if the dimensions where changed, otherwise false.
	        */
	        TtmlContext.prototype.updateRelatedMediaObjectRegion = function (dimensions) {
	            if (!this.settings.relatedMediaObjectRegion ||
	                (dimensions.width !== this.settings.relatedMediaObjectRegion.width) ||
	                (dimensions.height !== this.settings.relatedMediaObjectRegion.height)) {
	                this.settings.relatedMediaObjectRegion = {
	                    width: dimensions.width,
	                    height: dimensions.height
	                };
	                return true;
	            }
	            return false;
	        };
	        /**
	        * @name - hasEvents
	        * @description - Indicates whether or not the context has events.
	        * @public
	        * @returns {boolean} - True if the context has events, otherwise false.
	        */
	        TtmlContext.prototype.hasEvents = function () {
	            return this.events && !!this.events.length;
	        };
	        /**
	        * @name - resetCurrentEvents
	        * @description - Resets the context's currentEvents.
	        * @public
	        * @returns {void}
	        */
	        TtmlContext.prototype.resetCurrentEvents = function () {
	            this.currentEvents = [];
	        };
	        /**
	        * @name - updateCurrentEvents
	        * @description - Updates the context's currentEvents if there are new events for the specified time.
	        * @public
	        * @param {number} time - The time to get events for.
	        * @returns {boolean} - True if the events for the specified time are different than the currentEvents, otherwise false.
	        */
	        TtmlContext.prototype.updateCurrentEvents = function (time) {
	            var timeEvents = this.getTemporallyActiveEvents(time);
	            // As a shortcut compare lengths first.
	            var currentEventsLength = this.currentEvents ? this.currentEvents.length : 0;
	            var timeEventsLength = timeEvents ? timeEvents.length : 0;
	            if (currentEventsLength !== timeEventsLength) {
	                this.currentEventsTime = time;
	                this.currentEvents = timeEvents;
	                return true;
	            }
	            if (this.currentEvents) {
	                for (var index = 0; index < currentEventsLength; index++) {
	                    if (this.currentEvents[index].time !== timeEvents[index].time) {
	                        this.currentEventsTime = time;
	                        this.currentEvents = timeEvents;
	                        return true;
	                    }
	                }
	            }
	            return false;
	        };
	        /**
	        * @name - getTemporallyActiveEvents
	        * @description - Get the list of temporally active events for the specified time.
	        * @private
	        * @param {number} time - The time to get the active events for.
	        * @returns {ITtmlEvent[]} - The set of active events for the specified time, otherwise an empty [].
	        */
	        TtmlContext.prototype.getTemporallyActiveEvents = function (time) {
	            var _this = this;
	            return this.events.filter(function (event) {
	                return event.element ? _this.isTemporallyActive(event.element, time) : true;
	            });
	        };
	        /**
	        * @name - isTemporallyActive
	        * @description - Determines whether or not the specified element is temporally active at the specified time.
	        * @private
	        * @param {HTMLElement} element - The element to check.
	        * @param {number} time - The time to check against.
	        * @returns {boolean} - True if the element is active at the specified time, otherwise false.
	        */
	        TtmlContext.prototype.isTemporallyActive = function (element, time) {
	            return (((parseInt(element.getAttribute('data-time-start'), 10) || 0) <= time) &&
	                (time < (parseInt(element.getAttribute('data-time-end'), 10) || 0)));
	        };
	        /**
	        * @name - getCues
	        * @description - The set of cues that apply to the specified time.
	        * @public
	        * @param {number} time - The time to get cues for.
	        * @returns {HTMLElement[]} - The set of cues for the specified time, otherwise an empty [].
	        */
	        TtmlContext.prototype.getCues = function (time) {
	            var cues = [];
	            if (this.currentEventsTime !== time) {
	                this.updateCurrentEvents(time);
	            }
	            // Find all the region elements in the TTML namespace.
	            var preserveSpace = (ttml_parser_1.TtmlParser.getAttributeNS(this.root, 'space', ttml_settings_1.xmlNS) === 'preserve');
	            var regions = (this.layout ? this.layout.getElementsByTagNameNS(this.settings.ttmlNamespace, 'region') : []);
	            for (var _i = 0, regions_1 = regions; _i < regions_1.length; _i++) {
	                var region = regions_1[_i];
	                var regionId = ttml_parser_1.TtmlParser.getAttributeNS(region, 'id', ttml_settings_1.xmlNS);
	                var anonymousId = region.getAttribute('data-isanonymous');
	                if (anonymousId || regionId) {
	                    var translation = this.translate(region, this.settings.defaultRegionStyle, preserveSpace, time, this.translateToHtml);
	                    if (translation.outerNode) {
	                        var innerNode = translation.innerNode;
	                        var outerNode = translation.outerNode;
	                        // Create a new subtree for the body element, prune elements
	                        // not associated with the region, and if its not empty then
	                        // select it into this region by adding it to div container.
	                        for (var _a = 0, _b = this.events; _a < _b.length; _a++) {
	                            var event_1 = _b[_a];
	                            if (event_1.element) {
	                                if (this.isInRegion(event_1.element, anonymousId ? null : regionId)) {
	                                    var pruneResult = this.prune(event_1.element, translation.inheritableStyleSet, preserveSpace, time, this.translateToHtml);
	                                    var cueBody = pruneResult.prunedElement;
	                                    if ((!pruneResult.hasPreservedContent) && cueBody && (!stringExtensions_1.trim(htmlExtensions_1.getText(cueBody)).length)) {
	                                        cueBody = null;
	                                    }
	                                    if (cueBody) {
	                                        innerNode.appendChild(cueBody);
	                                    }
	                                }
	                            }
	                        }
	                        var showAlways = (outerNode.getAttribute('data-showBackground') === 'always');
	                        if (showAlways || innerNode.children.length) {
	                            if (showAlways) {
	                                // Just needed internally for the previous check, don't pass through on the cue.
	                                outerNode.removeAttribute('data-showBackground');
	                            }
	                            cues.push(outerNode);
	                        }
	                    }
	                }
	            }
	            // If we ended up with any displayable cues add them all to the rootContainerRegion cue.
	            if (cues.length) {
	                var rcr = this.translate(this.rootContainerRegion, { overflow: 'hidden', padding: '0' }, false, time, this.translateToHtml);
	                for (var _c = 0, cues_1 = cues; _c < cues_1.length; _c++) {
	                    var cue = cues_1[_c];
	                    rcr.innerNode.appendChild(cue);
	                }
	                cues = [];
	                cues.push(rcr.outerNode);
	            }
	            return cues;
	        };
	        /**
	        * @name - translate
	        * @description - Convert a ttml element into the equivalent in another format via the supplied translator function.
	        * @private
	        * @param {Element} element - The ttml element to translate.
	        * @param {IDictionaryStringString} inheritedStyleSet - The element's inherited style set.
	        * @param {boolean} preserveSpace - Indicates whether or not space should be preserved.
	        * @param {number} time - The time to translate against. Elements and styles are temporally transient.
	        * @param {Function} translator - The translator function to use. Originally supported both xml/html but is always using html in MWF.
	        * @returns {ITtmlTranslationResult} - A ITtmlTranslationResult instance containing the translation results.
	        */
	        TtmlContext.prototype.translate = function (element, inheritedStyleSet, preserveSpace, time, translator) {
	            var translation;
	            var computedStyleSet;
	            if (this.isTemporallyActive(element, time)) {
	                var tag = this.getTagNameEquivalent(element);
	                computedStyleSet = this.getComputedStyleSet(element, inheritedStyleSet, tag, time);
	                if (computedStyleSet['display'] !== 'none') {
	                    var applicableStyleSet = this.getApplicableStyleSet(computedStyleSet, tag);
	                    translation = translator(element, applicableStyleSet, preserveSpace);
	                }
	            }
	            if (!translation) {
	                return { outerNode: null, innerNode: null, inheritableStyleSet: null };
	            }
	            return {
	                outerNode: translation.outerNode,
	                innerNode: translation.innerNode,
	                inheritableStyleSet: this.getInheritableStyleSet(computedStyleSet)
	            };
	        };
	        /**
	        * @name - translateStyle
	        * @description - Translate the ttml styles in a styleSet to their equivalent css styles and apply them to the specified html element.
	        * @private
	        * @param {string} tagName - The ttml element tagName. All styles do not apply to all tagNames.
	        * @param {Element} element - The ttml element to translate.
	        * @param {IDictionaryStringString} applicableStyleSet - The style set applicable to this element.
	        * @returns {void}
	        */
	        TtmlContext.prototype.translateStyle = function (tagName, element, applicableStyleSet) {
	            for (var style in applicableStyleSet) {
	                if (applicableStyleSet[style]) {
	                    this.applyStyle(element, tagName, style, applicableStyleSet[style]);
	                }
	            }
	        };
	        /**
	        * @name - prune
	        * @description - Convert the element if it is in the region, then recurse into its contents.
	        *                If it ends up with no children then we dont add it to the region, we prune it.
	        * @private
	        * @param {Element} element - The ttml element to translate.
	        * @param {IDictionaryStringString} inheritedStyleSet - The style set inherited by this element.
	        * @param {boolean} preserveSpace - Indicates whether or not space should be preserved.
	        * @param {number} time - The time to translate against. Elements and styles are temporally transient.
	        * @param {Function} translator - The translator function to use. Originally supported both xml/html but is always using html in MWF.
	        * @param {boolean} [ignoreAncestors = false] - Specifies whether or not to ignore the element's ancestors.
	        * @returns {ITtmlPruneResult} - A ITtmlPruneResult instance containing the prune results.
	        */
	        TtmlContext.prototype.prune = function (element, inheritedStyleSet, preserveSpace, time, translator, ignoreAncestors) {
	            if (ignoreAncestors === void 0) { ignoreAncestors = false; }
	            var outerNode;
	            var hasPreservedContent = false;
	            var translation = this.translate(element, inheritedStyleSet, preserveSpace, time, translator);
	            if (translation.outerNode !== null) {
	                var tag = this.getTagNameEquivalent(element);
	                outerNode = translation.outerNode;
	                var innerNode = translation.innerNode;
	                for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(element.childNodes); _i < _a.length; _i++) {
	                    var child = _a[_i];
	                    if (child.nodeType === Node.COMMENT_NODE) {
	                    }
	                    else if (child.nodeType === Node.TEXT_NODE) {
	                        innerNode.appendChild(document.createTextNode(child.data));
	                        if (preserveSpace && (tag === 'ttml:span')) {
	                            hasPreservedContent = true;
	                        }
	                    }
	                    else {
	                        var childPreserveSpace = preserveSpace;
	                        var spaceAttr = ttml_parser_1.TtmlParser.getAttributeNS(child, 'space', ttml_settings_1.xmlNS);
	                        if (spaceAttr) {
	                            childPreserveSpace = (spaceAttr === 'preserve');
	                        }
	                        var pruneRecord = this.prune(child, translation.inheritableStyleSet, childPreserveSpace, time, translator, true);
	                        hasPreservedContent = hasPreservedContent || pruneRecord.hasPreservedContent;
	                        if (pruneRecord.prunedElement) {
	                            innerNode.appendChild(pruneRecord.prunedElement);
	                        }
	                    }
	                }
	                // Now traverse back till the body and build the corresponding structures.
	                if (!ignoreAncestors) {
	                    var ancestor = element.parentNode;
	                    while ((ancestor !== null) && (ancestor.nodeType === Node.ELEMENT_NODE) && (ancestor !== this.body)) {
	                        translation = this.translate(ancestor, inheritedStyleSet, preserveSpace, time, translator);
	                        if (translation.outerNode) {
	                            innerNode = translation.innerNode;
	                            innerNode.appendChild(outerNode);
	                            outerNode = translation.outerNode;
	                        }
	                        else {
	                            break;
	                        }
	                        ancestor = ancestor.parentNode;
	                    }
	                }
	            }
	            return { prunedElement: outerNode, hasPreservedContent: hasPreservedContent };
	        };
	        /**
	        * @name - getComputedStyleSet
	        * @description - Build this element's ttml computed styleset.
	        *                This is used as the base styleSet to filter the inherited styleSet from for an element's children.
	        * @private
	        * @param {Element} element - The ttml element to translate.
	        * @param {IDictionaryStringString} inheritedStyleSet - The styleSet inherited by this element.
	        * @param {string} tagName - The ttml element tagName. All styles do not apply to all tagNames.
	        * @param {number} time - The time to translate against. Elements and styles are temporally transient.
	        * @returns {IDictionaryStringString} - The resulting computed styleSet.
	        */
	        TtmlContext.prototype.getComputedStyleSet = function (element, inheritedStyleSet, tagName, time) {
	            // Start off with a clone of the inherited styleset.
	            var computedStyleSet = utility_1.extend({}, inheritedStyleSet);
	            // Iterate over this nodes ttml styles and pave them onto it's computed styleset.
	            utility_1.extend(computedStyleSet, this.styleSetCache[parseInt(element.getAttribute('data-styleSet'), 10)]);
	            // Apply any temporally active style animations.
	            var sets = element.getElementsByTagNameNS(this.settings.ttmlNamespace, 'set');
	            for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(sets); _i < _a.length; _i++) {
	                var set = _a[_i];
	                if (this.isTemporallyActive(set, time)) {
	                    ttml_parser_1.TtmlParser.applyInlineStyles(this.settings, computedStyleSet, set);
	                }
	            }
	            if ((tagName === 'ttml:p') && (computedStyleSet['lineHeight'] === 'normal')) {
	                // Special case for <p>'s with tts:lineHeight='normal'
	                // This means use the largest tts:fontSize value of any
	                // of it's descendent <span>'s. Since we don't know what
	                // values those might be until translateStyle we'll just
	                // save them all and figure it out then.
	                var fontSizes = this.appendSpanFontSizes(element, this.getInheritableStyleSet(computedStyleSet), time, '');
	                if (fontSizes) {
	                    computedStyleSet['computed-lineHeight'] = fontSizes;
	                }
	            }
	            return computedStyleSet;
	        };
	        /**
	        * @name - getApplicableStyleSet
	        * @description - Build this tags ttml applicable styleset from the specified computed styleSet to apply only to it.
	        * @private
	        * @param {IDictionaryStringString} computedStyleSet - The style set inherited by this element.
	        * @param {string} tagName - The ttml element tagName. All styles do not apply to all tagNames.
	        * @returns {IDictionaryStringString} - The resulting applicable styleSet.
	        */
	        TtmlContext.prototype.getApplicableStyleSet = function (computedStyleSet, tagName) {
	            var applicableStyleSet = {};
	            // Special case extent to the front of the list as later processing of
	            // padding will depend on it having already been set first.
	            if (computedStyleSet['extent'] && this.isStyleApplicable(tagName, 'extent')) {
	                applicableStyleSet['extent'] = computedStyleSet['extent'];
	            }
	            // Special case color to the front of the list as later processing of
	            // textOutline will depend on it having already been set first.
	            if (computedStyleSet['color'] && this.isStyleApplicable(tagName, 'color')) {
	                applicableStyleSet['color'] = computedStyleSet['color'];
	            }
	            for (var style in computedStyleSet) {
	                if (this.isStyleApplicable(tagName, style)) {
	                    applicableStyleSet[style] = computedStyleSet[style];
	                }
	            }
	            return applicableStyleSet;
	        };
	        /**
	        * @name - isStyleApplicable
	        * @description - Determines if the specified style applies to the specified ttml tagName.
	        *                NOTE: The ttml spec doesn't mention ttml:br in the styles 'applies to' sections but
	        *                as noted in the span section everything that applies to ttml:span also applies to ttml:br
	        * @private
	        * @param {string} tagName - The ttml element tagName. All styles do not apply to all tagNames.
	        * @param {string} style - The style to check against the tagName.
	        * @returns {boolean} - True if the ttml:style applies to the ttml:tag, otherwise false.
	        */
	        TtmlContext.prototype.isStyleApplicable = function (tagName, style) {
	            switch (style) {
	                case 'backgroundColor':
	                case 'display':
	                case 'visibility':
	                    return (('ttml:body ttml:div ttml:p ttml:region ttml:rootcontainerregion ttml:span ttml:br').indexOf(tagName) >= 0);
	                // Technically these font styles do not apply to <p>s but for some reason the resulting html/css
	                // for span/br doesnt compute line-height correctly if the entire containing <p> (div) isn't all the same...
	                case 'fontFamily':
	                case 'fontSize':
	                case 'fontStyle':
	                case 'fontWeight':
	                    return ('ttml:p ttml:span ttml:br'.indexOf(tagName) >= 0);
	                case 'color':
	                // Technically the following commented out font styles only apply to the <span> and <br> tags but
	                // we have moved them up above to also apply to the <p> tag to get the translated <div> to compute
	                // its line-height correctly. Leaving them here to signify they should be restored if we find a
	                // solution to the line-height issue and no longer want to apply them to the <p> tag.
	                //////case     'fontFamily':
	                //////case       'fontSize':
	                //////case      'fontStyle':
	                //////case     'fontWeight':
	                case 'textDecoration':
	                case 'textOutline':
	                case 'wrapOption':
	                    return ('ttml:span ttml:br'.indexOf(tagName) >= 0);
	                case 'direction':
	                case 'unicodeBidi':
	                    return ('ttml:p ttml:span ttml:br'.indexOf(tagName) >= 0);
	                case 'displayAlign':
	                case 'opacity':
	                case 'origin':
	                case 'overflow':
	                case 'padding':
	                case 'showBackground':
	                case 'writingMode':
	                case 'zIndex':
	                    return ('ttml:region ttml:rootcontainerregion'.indexOf(tagName) >= 0);
	                case 'extent':
	                    return ('ttml:tt ttml:region ttml:rootcontainerregion'.indexOf(tagName) >= 0);
	                case 'computed-lineHeight':
	                case 'lineHeight':
	                case 'textAlign':
	                    return ('ttml:p'.indexOf(tagName) >= 0);
	                default: return false;
	            }
	        };
	        /**
	        * @name - getInheritableStyleSet
	        * @description - Filters a computed styleSet into an inheritable styleSet subset to pass on to children.
	        *                Not all styles are inheritable.
	        * @private
	        * @param {IDictionaryStringString} computedStyleSet - The computed styleSet to filter.
	        * @returns {IDictionaryStringString} - The resulting inheritable styleSet.
	        */
	        TtmlContext.prototype.getInheritableStyleSet = function (computedStyleSet) {
	            var inheritedStyleSet = {};
	            for (var style in computedStyleSet) {
	                if (computedStyleSet.hasOwnProperty(style)) {
	                    switch (style) {
	                        case 'backgroundColor':
	                        case 'computed-lineHeight':
	                        case 'display':
	                        case 'displayAlign':
	                        case 'extent':
	                        case 'opacity':
	                        case 'origin':
	                        case 'overflow':
	                        case 'padding':
	                        case 'showBackground':
	                        case 'unicodeBidi':
	                        case 'writingMode':
	                        case 'zIndex':
	                            break;
	                        default:
	                            inheritedStyleSet[style] = computedStyleSet[style];
	                            break;
	                    }
	                }
	            }
	            return inheritedStyleSet;
	        };
	        /**
	        * @name - appendSpanFontSizes
	        * @description - Recurses through an element and it's descendents finding the font sizess of all it's <span>'s.
	        * @private
	        * @param {Element} element - The ttml element to translate.
	        * @param {IDictionaryStringString} inheritedStyleSet - The element's inherited styleSet.
	        * @param {number} time - The time to translate against. Elements and styles are temporally transient.
	        * @param {string} value - The list of font sizes to append to.
	        * @returns {string} - The value with any additional font sizes appended to it.
	        */
	        TtmlContext.prototype.appendSpanFontSizes = function (element, inheritedStyleSet, time, value) {
	            for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(element.childNodes); _i < _a.length; _i++) {
	                var child = _a[_i];
	                if ((child.nodeType === Node.ELEMENT_NODE)) {
	                    var tag = this.getTagNameEquivalent(child);
	                    if (tag === 'ttml:span') {
	                        var computedStyleSet = this.getComputedStyleSet(child, inheritedStyleSet, 'ttml:span', time);
	                        var fontSize = computedStyleSet['fontSize'];
	                        if (fontSize) {
	                            value += ((value) ? ',' : '') + fontSize;
	                        }
	                        value = this.appendSpanFontSizes(child, this.getInheritableStyleSet(computedStyleSet), time, value);
	                    }
	                }
	            }
	            return value;
	        };
	        /**
	        * @name - isInRegion
	        * @description - Determines whether or not the specified element is associated with the specified region.
	        *                Ttml defines 5 ordered rules, where the first rule satisfied is used and remaining rules are skipped.
	        * @private
	        * @param {Element} element - The ttml element to check.
	        * @param {string} regionId - The id of the region to see if the element is associated with.
	        * @returns {boolean} - True if the specified element is within the specified region, otherwise false.
	        */
	        TtmlContext.prototype.isInRegion = function (element, regionId) {
	            // Quick test: Out of normal order, but makes following rules simpler.
	            // This is a shortcut to check step #4 first
	            if (!regionId) {
	                return true;
	            }
	            var elemRegion = ttml_parser_1.TtmlParser.getAttributeNS(element, 'region', this.settings.ttmlNamespace);
	            // 1. If the element specifies a region attribute, then the element is
	            // associated with the region referenced by that attribute;
	            if (elemRegion === regionId) {
	                return true;
	            }
	            if (!elemRegion) {
	                // 2. If some ancestor of that element specifies a region attribute, then the element is
	                // associated with the region referenced by the most immediate ancestor that specifies
	                // this attribute;
	                var ancestor = element.parentNode;
	                while ((ancestor !== null) && (ancestor.nodeType === Node.ELEMENT_NODE)) {
	                    var id = this.getRegionId(ancestor);
	                    if (id) {
	                        return id === regionId;
	                    }
	                    ancestor = ancestor.parentNode;
	                }
	                // 3. If the element contains a descendant element that specifies a region attribute,
	                // then the element is associated with the region referenced by that attribute;
	                for (var _i = 0, _a = htmlExtensions_1.nodeListToArray(element.getElementsByTagName('*')); _i < _a.length; _i++) {
	                    var node = _a[_i];
	                    if (this.getRegionId(node) === regionId) {
	                        return true;
	                    }
	                }
	            }
	            // 5. The element is not associated with any region.
	            return false;
	        };
	        /**
	        * @name - getRegionId
	        * @description - Gets the region id for the specified element.
	        * @private
	        * @param {Element} element - The ttml element to check.
	        * @returns {string} - The id of the region the element is associated with.
	        */
	        TtmlContext.prototype.getRegionId = function (element) {
	            var regionId;
	            if ((element.nodeType === Node.ELEMENT_NODE) && (element.namespaceURI === this.settings.ttmlNamespace)) {
	                if (ttml_parser_1.TtmlParser.getLocalTagName(element) === 'region') {
	                    regionId = ttml_parser_1.TtmlParser.getAttributeNS(element, 'id', ttml_settings_1.xmlNS);
	                }
	                else {
	                    regionId = ttml_parser_1.TtmlParser.getAttributeNS(element, 'region', this.settings.ttmlNamespace);
	                }
	            }
	            return regionId;
	        };
	        /**
	        * @name - getTagNameEquivalent
	        * @description - Gets the tagName of the element with the current ttml namespace prepended if non-standard.
	        * @private
	        * @param {Element} element - The ttml element to get the tagName of.
	        * @returns {string} - The tagName or '' if the namespace isn't one of the ttml ones.
	        */
	        TtmlContext.prototype.getTagNameEquivalent = function (element) {
	            var tagName = ttml_parser_1.TtmlParser.getLocalTagName(element);
	            var nameSpace = element.namespaceURI;
	            if (nameSpace === this.settings.ttmlNamespace) {
	                return 'ttml:' + tagName;
	            }
	            if (nameSpace === 'http://www.w3.org/1999/xhtml') {
	                return tagName;
	            }
	            return '';
	        };
	        /**
	        * @name - applyStyle
	        * @description - Translates the ttml style/value into one or more css styles/values and applies them to the element.
	        * @private
	        * @param {HTMLElement} element - The ttml element to apply the css style(s) too.
	        * @param {string} tagName - The ttml tagName associated with the element.
	        * @param {string} style - The ttml style name.
	        * @param {string} value - The ttml style value.
	        * @returns {void}
	        */
	        TtmlContext.prototype.applyStyle = function (element, tagName, style, value) {
	            var mappedValue = value;
	            switch (style) {
	                case 'color':
	                case 'backgroundColor': {
	                    mappedValue = TtmlContext.ttmlToCssColor(value);
	                    htmlExtensions_1.css(element, style, mappedValue);
	                    return;
	                }
	                case 'direction':
	                case 'display': {
	                    // No change.
	                    htmlExtensions_1.css(element, style, mappedValue);
	                    return;
	                }
	                case 'displayAlign': {
	                    switch (value) {
	                        case 'before':
	                            mappedValue = 'top';
	                            break;
	                        case 'center':
	                            mappedValue = 'middle';
	                            break;
	                        case 'after':
	                            mappedValue = 'bottom';
	                            break;
	                    }
	                    htmlExtensions_1.css(element, 'vertical-align', mappedValue);
	                    return;
	                }
	                case 'extent': {
	                    var width = void 0;
	                    var height = void 0;
	                    if (value !== 'auto') {
	                        // Get the individual components.
	                        var coords = (value.split(/\s+/));
	                        if (coords.length === 2) {
	                            width = this.ttmlToCssUnits(coords[0], true);
	                            height = this.ttmlToCssUnits(coords[1], false);
	                        }
	                    }
	                    if (!width) {
	                        width = (this.settings.rootContainerRegionDimensions
	                            ? this.settings.rootContainerRegionDimensions.width
	                            : this.settings.relatedMediaObjectRegion.width).toString() + 'px';
	                        height = (this.settings.rootContainerRegionDimensions
	                            ? this.settings.rootContainerRegionDimensions.height
	                            : this.settings.relatedMediaObjectRegion.height).toString() + 'px';
	                    }
	                    htmlExtensions_1.css(element, 'position', 'absolute');
	                    htmlExtensions_1.css(element, 'width', width);
	                    htmlExtensions_1.css(element, 'min-width', width);
	                    htmlExtensions_1.css(element, 'max-width', width);
	                    htmlExtensions_1.css(element, 'height', height);
	                    htmlExtensions_1.css(element, 'min-height', height);
	                    htmlExtensions_1.css(element, 'max-height', height);
	                    return;
	                }
	                case 'fontFamily': {
	                    if (this.settings.fontMap && this.settings.fontMap[value]) {
	                        mappedValue = this.settings.fontMap[value];
	                    }
	                    if (value === 'smallCaps') {
	                        // Need to additionally add font-variant: small-caps.
	                        htmlExtensions_1.css(element, 'fontVariant', 'small-caps');
	                    }
	                    htmlExtensions_1.css(element, style, mappedValue);
	                    return;
	                }
	                case 'fontSize': {
	                    var parts = value.split(/\s+/);
	                    // For two part fontSize values we use the vertical size which is in the second part.
	                    var size = (parts.length > 1) ? parts[1] : parts[0];
	                    // Set the fontsize scaleFactor to 75% (of cell size) to account for ascenders/descenders etc.
	                    mappedValue = this.ttmlToCssFontSize(size, false, 0.75, tagName === 'ttml:region');
	                    htmlExtensions_1.css(element, style, mappedValue);
	                    return;
	                }
	                case 'fontStyle':
	                case 'fontWeight': {
	                    // No change.
	                    htmlExtensions_1.css(element, style, mappedValue);
	                    return;
	                }
	                case 'lineHeight': {
	                    // Spec doesn't qualify what % lengths mean so I'm going to assume it's % of a
	                    // cell and therefore use fontSize conversion method.
	                    var mappedValue_1 = (value === 'normal') ? value : this.ttmlToCssFontSize(value, false);
	                    htmlExtensions_1.css(element, 'line-height', mappedValue_1);
	                    return;
	                }
	                case 'computed-lineHeight': {
	                    var values = value.split(',');
	                    var max = -1;
	                    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
	                        var fontSize = values_1[_i];
	                        // Computed-lineHeight is based off of fontSize so use fontSize conversion method.
	                        mappedValue = this.ttmlToCssFontSize(fontSize, false);
	                        if (mappedValue && (mappedValue.indexOf('px') === mappedValue.length - 2)) {
	                            var height = parseFloat(mappedValue.substr(0, mappedValue.length - 2));
	                            if (!isNaN(height) && (height > max)) {
	                                max = height;
	                            }
	                        }
	                    }
	                    if (max >= 0) {
	                        htmlExtensions_1.css(element, 'line-height', max + 'px');
	                    }
	                    return;
	                }
	                case 'origin': {
	                    if (value !== 'auto') {
	                        // Get the individual components.
	                        var coords = (value.split(/\s+/));
	                        if (coords.length === 2) {
	                            htmlExtensions_1.css(element, 'position', 'absolute');
	                            htmlExtensions_1.css(element, 'left', this.ttmlToCssUnits(coords[0], true));
	                            htmlExtensions_1.css(element, 'top', this.ttmlToCssUnits(coords[1], false));
	                        }
	                    }
	                    return;
	                }
	                case 'opacity': {
	                    // No change.
	                    htmlExtensions_1.css(element, style, mappedValue);
	                    return;
	                }
	                case 'padding': {
	                    var contextRect = utility_1.getDimensions(element);
	                    // Get the individual components.
	                    var parts = (value.split(/\s+/));
	                    var first = void 0;
	                    var second = void 0;
	                    var third = void 0;
	                    var forth = void 0;
	                    switch (parts.length) {
	                        case 1:
	                            // Value is used for all 4 sides.
	                            first = this.ttmlToCssUnits(parts[0], false, contextRect);
	                            second = this.ttmlToCssUnits(parts[0], true, contextRect);
	                            mappedValue = stringExtensions_1.format('{0} {1} {0} {1}', first, second);
	                            break;
	                        case 2:
	                            // First is top/bottom, second is left/right.
	                            first = this.ttmlToCssUnits(parts[0], false, contextRect);
	                            second = this.ttmlToCssUnits(parts[1], true, contextRect);
	                            mappedValue = stringExtensions_1.format('{0} {1} {0} {1}', first, second);
	                            break;
	                        case 3:
	                            // First is top, second is left/right, third is bottom.
	                            first = this.ttmlToCssUnits(parts[0], false, contextRect);
	                            second = this.ttmlToCssUnits(parts[1], true, contextRect);
	                            third = this.ttmlToCssUnits(parts[2], false, contextRect);
	                            mappedValue = stringExtensions_1.format('{0} {1} {2} {1}', first, second, third);
	                            break;
	                        case 4:
	                            // Top, right, bottom, left.
	                            first = this.ttmlToCssUnits(parts[0], false, contextRect);
	                            second = this.ttmlToCssUnits(parts[1], true, contextRect);
	                            third = this.ttmlToCssUnits(parts[2], false, contextRect);
	                            forth = this.ttmlToCssUnits(parts[3], true, contextRect);
	                            mappedValue = stringExtensions_1.format('{0} {1} {2} {3}', first, second, third, forth);
	                            break;
	                    }
	                    // Using border width to implement tts:padding as neither padding nor margin fix the size (height) of the content area.
	                    htmlExtensions_1.css(element, 'box-sizing', 'border-box');
	                    // TODO: See if we work in FF without the following commented out -moz-box-sizing line now and if so remove it.
	                    //////css(element, '-moz-box-sizing', 'border-box');
	                    htmlExtensions_1.css(element, 'border-style', 'solid');
	                    htmlExtensions_1.css(element, 'border-color', 'transparent');
	                    // It can be helpful when debugging to change the border-color from transparent to something like rgba(255,255,200,0.5)
	                    //css(element, 'border-color', 'rgba(255,255,200,0.5)');
	                    htmlExtensions_1.css(element, 'border-width', mappedValue);
	                    return;
	                }
	                // If you know what this was for please document it here and uncomment it.
	                // As of now the caller appeared to be doing nothing with it so commenting it out.
	                //////case 'showBackground': {
	                ////// return this.getAttribute('data-showBackground', value);
	                //////}
	                case 'textAlign': {
	                    switch (value) {
	                        case 'start':
	                            mappedValue = 'left'; // TODO: handle rtl correctly.
	                            break;
	                        case 'end':
	                            mappedValue = 'right'; // TODO: handle rtl correctly.
	                            break;
	                    }
	                    htmlExtensions_1.css(element, 'text-align', mappedValue);
	                    return;
	                }
	                case 'textDecoration': {
	                    mappedValue = TtmlContext.ttmlToCssTextDecoration(value);
	                    htmlExtensions_1.css(element, 'text-decoration', mappedValue);
	                    return;
	                }
	                case 'textOutline': {
	                    htmlExtensions_1.css(element, 'text-shadow', this.ttmlToCssTextOutline(mappedValue));
	                    return;
	                }
	                case 'unicodeBidi': {
	                    // TOOD: Handle multiple options correctly.
	                    switch (value) {
	                        case 'bidiOverride':
	                            mappedValue = 'bidi-override';
	                            break;
	                    }
	                    htmlExtensions_1.css(element, 'unicode-bidi', mappedValue);
	                    return;
	                }
	                case 'visibility': {
	                    // No change.
	                    htmlExtensions_1.css(element, style, mappedValue);
	                    return;
	                }
	                case 'writingMode': {
	                    // TODO: See if all this vendor specific stuff can be removed now.
	                    // No browser seems to support the W3C CSS3 standard for text-orientation or writing-mode
	                    // so we will do as best we can with the vendor specific versions for now.
	                    switch (value) {
	                        case 'lr':
	                        case 'lrtb': {
	                            htmlExtensions_1.css(element, 'writing-mode', 'horizontal-tb'); // CCS3 standard: Doesn't work yet
	                            htmlExtensions_1.css(element, '-webkit-writing-mode', 'horizontal-tb'); // webkit for Chrome
	                            htmlExtensions_1.css(element, 'writing-mode', 'lr-tb'); // IE specific
	                            return;
	                        }
	                        case 'rl':
	                        case 'rltb': {
	                            htmlExtensions_1.css(element, 'writing-mode', 'horizontal-tb'); // CCS3 standard: Doesn't work yet
	                            htmlExtensions_1.css(element, '-webkit-writing-mode', 'horizontal-tb'); // webkit for Chrome
	                            htmlExtensions_1.css(element, 'writing-mode', 'rl-tb'); // IE specific
	                            return;
	                        }
	                        case 'tblr': {
	                            htmlExtensions_1.css(element, 'text-orientation', 'upright'); // CCS3 standard: Doesn't work yet
	                            htmlExtensions_1.css(element, 'writing-mode', 'vertical-lr'); // CCS3 standard: Doesn't work yet
	                            htmlExtensions_1.css(element, '-webkit-text-orientation', 'upright'); // webkit for Chrome
	                            htmlExtensions_1.css(element, '-webkit-writing-mode', 'vertical-lr'); // webkit for Chrome
	                            htmlExtensions_1.css(element, 'writing-mode', 'tb-lr'); // IE specific
	                            return;
	                        }
	                        case 'tb':
	                        case 'tbrl': {
	                            htmlExtensions_1.css(element, 'text-orientation', 'upright'); // CCS3 standard: Doesn't work yet
	                            htmlExtensions_1.css(element, 'writing-mode', 'vertical-rl'); // CCS3 standard: Doesn't work yet
	                            htmlExtensions_1.css(element, '-webkit-text-orientation', 'upright'); // webkit for Chrome
	                            htmlExtensions_1.css(element, '-webkit-writing-mode', 'vertical-rl'); // webkit for Chrome
	                            htmlExtensions_1.css(element, 'writing-mode', 'tb-rl'); // IE specific
	                            return;
	                        }
	                    }
	                    return;
	                }
	                case 'wrapOption': {
	                    htmlExtensions_1.css(element, 'white-space', value === 'noWrap' ? 'nowrap' : (value === 'pre' ? 'pre' : 'normal'));
	                    return;
	                }
	                case 'zIndex': {
	                    htmlExtensions_1.css(element, style, mappedValue); // Requires global information...
	                    return;
	                }
	                default: {
	                    htmlExtensions_1.css(element, style, mappedValue);
	                    return;
	                }
	            }
	        };
	        /**
	        * @name - defaultStyle
	        * @description - Applies default styles to the element to match the ttml defaults.
	        * @static
	        * @private
	        * @param {HTMLElement} element - The element to set the default styles on.
	        * @returns {HTMLElement} - The specified element (for chaining).
	        */
	        TtmlContext.defaultStyle = function (element) {
	            // Set some element styles to our ttml defaults for them.
	            htmlExtensions_1.css(element, 'background-color', TtmlContext.TtmlNamedColorMap['transparent']);
	            htmlExtensions_1.css(element, 'offset', '0');
	            htmlExtensions_1.css(element, 'margin', '0');
	            htmlExtensions_1.css(element, 'padding', '0');
	            htmlExtensions_1.css(element, 'border', '0');
	            return element;
	        };
	        /**
	        * @name - ttmlToCssUnits
	        * @description - Converts a ttml unit string to a css one.
	        * @private
	        * @param {string} ttmlUnits - The ttml value.
	        * @param {boolean} width - Indicates whether to perform a width based or a height based conversion.
	        * @param {IClientDimension} [contextRect] - The context rectangle to use for conversion.
	        * @returns {string} - The css value.
	        */
	        TtmlContext.prototype.ttmlToCssUnits = function (ttmlUnits, width, contextRect) {
	            var cssUnits = ttmlUnits;
	            if (ttmlUnits) {
	                var unit = ttmlUnits.charAt(ttmlUnits.length - 1);
	                // Need to special case handle ttml cell metrics.
	                if ((unit === 'c') || (unit === '%')) {
	                    var container = this.settings.rootContainerRegionDimensions
	                        ? this.settings.rootContainerRegionDimensions
	                        : this.settings.relatedMediaObjectRegion;
	                    var length_1 = parseFloat(ttmlUnits.substr(0, ttmlUnits.length - 1));
	                    var containerSize = width ? container.width : container.height;
	                    var value = void 0;
	                    if (unit === 'c') {
	                        var gridSize = width ? this.settings.cellResolution.columns : this.settings.cellResolution.rows;
	                        value = length_1 * containerSize / gridSize;
	                    }
	                    else if (unit === '%') {
	                        // If % units calls also specify a contextRect use that instead of the container.
	                        if (contextRect) {
	                            containerSize = width ? contextRect.width : contextRect.height;
	                        }
	                        // Have to convert % to px because padding and vertical-align (displayAlign) are not
	                        // working together if the extent width/height are % instead of px.
	                        value = containerSize * length_1 / 100;
	                    }
	                    // Round to 1 decimal place
	                    value = Math.round(value * 10) / 10;
	                    cssUnits = value + 'px';
	                }
	            }
	            return cssUnits;
	        };
	        /**
	        * @name - ttmlToCssFontSize
	        * @description - Converts a ttml font size to a css one.
	        * @private
	        * @param {string} ttmlUnits - The ttml value.
	        * @param {boolean} width - Indicates whether to perform a width based or a height based conversion.
	        * @param {number} [scaleFactor = 1] - The scale factor to use for conversion.
	        * @param {boolean} [isRegion = false] - Indicates whether or not the conversion is being done for a <region>.
	        * @returns {string} - The css value.
	        */
	        TtmlContext.prototype.ttmlToCssFontSize = function (ttmlUnits, width, scaleFactor, isRegion) {
	            if (scaleFactor === void 0) { scaleFactor = 1; }
	            if (isRegion === void 0) { isRegion = false; }
	            var cssUnits = ttmlUnits;
	            if (ttmlUnits) {
	                var unit = ttmlUnits.charAt(ttmlUnits.length - 1);
	                // Need to special case handle ttml cell metrics and % units.
	                if ((unit === 'c') || (isRegion && (unit === '%'))) {
	                    var container = this.settings.rootContainerRegionDimensions
	                        ? this.settings.rootContainerRegionDimensions
	                        : this.settings.relatedMediaObjectRegion;
	                    var length_2 = parseFloat(ttmlUnits.substr(0, ttmlUnits.length - 1));
	                    var containerSize = width ? container.width : container.height;
	                    var gridSize = width ? this.settings.cellResolution.columns : this.settings.cellResolution.rows;
	                    var value = length_2 * containerSize / gridSize;
	                    if (unit === '%') {
	                        // Length is % so divide by 100.
	                        value /= 100;
	                    }
	                    // Apply the scale factor and limit to one decimal place precision.
	                    value = Math.floor(value * scaleFactor * 10) / 10;
	                    cssUnits = value + 'px';
	                }
	            }
	            return cssUnits;
	        };
	        /**
	        * @name - ttmlToCssTextOutline
	        * @description - Converts a ttml text outline style value to a css one.
	        * @private
	        * @param {string} textOutline - The ttml value.
	        * @returns {string} - The css value.
	        */
	        TtmlContext.prototype.ttmlToCssTextOutline = function (textOutline) {
	            var textShadow = 'none';
	            if (!stringExtensions_1.isNullOrWhiteSpace(textOutline) && (textOutline !== 'none')) {
	                var parts = textOutline.split(/\s+/);
	                var color = void 0;
	                var thickness = void 0;
	                var blur_1;
	                if (parts.length === 1) {
	                    color = $(this).css('color');
	                    thickness = parts[0];
	                    blur_1 = '';
	                }
	                else if (parts.length === 3) {
	                    color = parts[0];
	                    thickness = parts[1];
	                    blur_1 = parts[2];
	                }
	                else if (parts.length === 2) {
	                    var firstChar = parts[0].charAt(0);
	                    if ((firstChar >= '0') && (firstChar <= '9')) {
	                        color = $(this).css('color');
	                        thickness = parts[0];
	                        blur_1 = parts[1];
	                    }
	                    else {
	                        color = parts[0];
	                        thickness = parts[1];
	                        blur_1 = '';
	                    }
	                }
	                // Spec doesn't qualify what % lengths mean so I'm going to assume it's % of a cell
	                // and therefore use fontSize conversion method with the same scaleFactor applied
	                // to fontSize since it's the font that we're outlining here.
	                blur_1 = this.ttmlToCssFontSize(blur_1, false, 0.75);
	                thickness = this.ttmlToCssFontSize(thickness, false, 0.75);
	                parts = TtmlContext.lengthRegEx.exec(thickness);
	                if (parts && (parts.length === 3)) {
	                    var width = Math.round(parseFloat(parts[1]));
	                    var units = parts[2];
	                    textShadow = '';
	                    for (var x = -width; x <= width; x++) {
	                        for (var y = -width; y <= width; y++) {
	                            if ((x !== 0) || (y !== 0)) {
	                                textShadow += stringExtensions_1.format('{0}{4} {1}{4} {2} {3}, ', x, y, blur_1, TtmlContext.ttmlToCssColor(color), units);
	                            }
	                        }
	                    }
	                    if (textShadow) {
	                        textShadow = textShadow.substr(0, textShadow.length - 2);
	                    }
	                }
	            }
	            return textShadow;
	        };
	        /**
	        * @name - ttmlToCssTextDecoration
	        * @description - Converts a ttml text decoration style value to a css one.
	        * @static
	        * @private
	        * @param {string} ttmlTextDecoration - The ttml value.
	        * @returns {string} - The css value.
	        */
	        TtmlContext.ttmlToCssTextDecoration = function (ttmlTextDecoration) {
	            var textDecoration = '';
	            var parts = ttmlTextDecoration.split(/\s+/);
	            // Since we have no CSS for the 'no' values just replace them all with a none at the front of the list.
	            for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
	                var value = parts_1[_i];
	                switch (value) {
	                    case 'none':
	                    case 'noUnderline':
	                    case 'noLineThrough':
	                    case 'noOverline':
	                        textDecoration = 'none';
	                        break;
	                }
	            }
	            // Then append all the others.
	            for (var _a = 0, parts_2 = parts; _a < parts_2.length; _a++) {
	                var value = parts_2[_a];
	                switch (value) {
	                    case 'none':
	                    case 'noUnderline':
	                    case 'noLineThrough':
	                    case 'noOverline':
	                        break;
	                    case 'lineThrough':
	                        textDecoration += ' line-through';
	                        break;
	                    default:
	                        textDecoration += ' ' + value;
	                        break;
	                }
	            }
	            return stringExtensions_1.trim(textDecoration);
	        };
	        /**
	        * @name - ttmlToCssColor
	        * @description - Converts a ttml text color style value to a css one.
	        *                #RRGGBB and rgb(rrr,ggg,bbb) do not need conversion and are not modified.
	        *                #RRGGBBAA is modified because css doesn't support it (at least as implemented in todays browsers).
	        *                rgba(rrr,ggg,bbb,aaa) is converted to rgba(rrr,ggg,bbb,0-1).
	        *                ttml namedColors are converted to rgb(rrr,ggg,bbb) in the unlikely event that their alpha (only) is overridden.
	        * @static
	        * @private
	        * @param {string} color - The ttml value.
	        * @returns {string} - The css value.
	        */
	        TtmlContext.ttmlToCssColor = function (color) {
	            var mappedColor = color;
	            color = color.toLowerCase();
	            if (color.indexOf('rgba') === 0) {
	                var parts = TtmlContext.rgbaRegEx.exec(color);
	                if (parts && (parts.length === 5)) {
	                    var red = parts[1];
	                    var green = parts[2];
	                    var blue = parts[3];
	                    var alpha = parseInt(parts[4], 10);
	                    mappedColor = stringExtensions_1.format('rgba({0},{1},{2},{3})', red, green, blue, Math.round(alpha * 100 / 255) / 100);
	                }
	            }
	            else if ((color.charAt(0) === '#') && (color.length === 9)) {
	                var red = parseInt(color.substr(1, 2), 16);
	                var green = parseInt(color.substr(3, 2), 16);
	                var blue = parseInt(color.substr(5, 2), 16);
	                var alpha = parseInt(color.substr(7, 2), 16);
	                mappedColor = stringExtensions_1.format('rgba({0},{1},{2},{3})', red, green, blue, Math.round(alpha * 100 / 255) / 100);
	            }
	            else if (TtmlContext.TtmlNamedColorMap[color]) {
	                mappedColor = TtmlContext.TtmlNamedColorMap[color];
	            }
	            return mappedColor;
	        };
	        /**
	        * @name - lengthRegEx
	        * @description - The regular expression pattern used in ttml->css text outline conersion.
	        * @static
	        * @private
	        * @type {RegExp}
	        */
	        TtmlContext.lengthRegEx = /\s*(\d+\.*\d*)(.*)\s*/;
	        /**
	        * @name - rgbaRegEx
	        * @description - The regular expression pattern used in ttml->css color conersion.
	        * @static
	        * @private
	        * @type {RegExp}
	        */
	        TtmlContext.rgbaRegEx = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*/;
	        /**
	        * @name - TtmlNamedColorMap
	        * @description - The table used to map named ttml color values to css color values.
	        * @static
	        * @private
	        * @type {IDictionaryStringString}
	        */
	        TtmlContext.TtmlNamedColorMap = {
	            transparent: 'rgba(0,0,0,0)',
	            black: 'rgba(0,0,0,1)',
	            silver: 'rgba(192,192,192,1)',
	            gray: 'rgba(128,128,128,1)',
	            white: 'rgba(255,255,255,1)',
	            maroon: 'rgba(128,0,0,1)',
	            red: 'rgba(255,0,0,1)',
	            purple: 'rgba(128,0,128,1)',
	            fuchsia: 'rgba(255,0,255,1)',
	            magenta: 'rgba(255,0,255,1)',
	            green: 'rgba(0,128,0,1)',
	            lime: 'rgba(0,255,0,1)',
	            olive: 'rgba(128,128,0,1)',
	            yellow: 'rgba(255,255,0,1)',
	            navy: 'rgba(0,0,128,1)',
	            blue: 'rgba(0,0,255,1)',
	            teal: 'rgba(0,128,128,1)',
	            aqua: 'rgba(0,255,255,1)',
	            cyan: 'rgba(0,255,255,1)'
	        };
	        return TtmlContext;
	    }());
	    exports.TtmlContext = TtmlContext;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, utility_1) {
	    "use strict";
	    // Timed Text Markup Language (TTML).
	    // See http://www.w3.org/TR/ttml1/ for more details.
	    exports.xmlNS = 'http://www.w3.org/XML/1998/namespace';
	    /**
	    * @class - TtmlSettings
	    * @classdesc - The TtmlSettings class is used to pass settings between the ttml parser, the ttml context, and the outside world.
	    *              It supplies default values which can be overridden via overrides passed to the constructor.
	    * @export
	    */
	    var TtmlSettings = (function () {
	        /**
	        * @constructor
	        * @description - Constructor for the TtmlSettings class.
	        * @public
	        * @param {ITtmlSettings} [settingsOverrides] - Optional settings overrides for this TtmlSettings instance.
	        */
	        function TtmlSettings(settingsOverrides) {
	            /**
	            * @name - ttmlNamespace
	            * @description - The ttml namespace to use.
	            * @public
	            * @type {string}
	            */
	            this.ttmlNamespace = 'http://www.w3.org/ns/ttml';
	            /**
	            * @name - ttmlStyleNamespace
	            * @description - The ttml style namespace to use.
	            * @public
	            * @type {string}
	            */
	            this.ttmlStyleNamespace = 'http://www.w3.org/ns/ttml#styling';
	            /**
	            * @name - ttmlParameterNamespace
	            * @description - The ttml parameter namespace to use.
	            * @public
	            * @type {string}
	            */
	            this.ttmlParameterNamespace = 'http://www.w3.org/ns/ttml#parameter';
	            /**
	            * @name - ttmlMetaNamespace
	            * @description - The ttml metadata namespace to use.
	            * @public
	            * @type {string}
	            */
	            this.ttmlMetaNamespace = 'http://www.w3.org/ns/ttml#metadata';
	            /**
	            * @name - idPrefix
	            * @description - The id prefix to use so ids copied from the ttml doc are unique.
	            * @public
	            * @type {string}
	            */
	            this.idPrefix = '';
	            /**
	            * @name - mediaFrameRate
	            * @description - The media frame rate to use.
	            * @public
	            * @type {number}
	            */
	            this.mediaFrameRate = 30;
	            /**
	            * @name - mediaFrameRateMultiplier
	            * @description - The media frame rate multiplier to use.
	            * @public
	            * @type {number}
	            */
	            this.mediaFrameRateMultiplier = 1;
	            /**
	            * @name - mediaSubFrameRate
	            * @description - The media sub frame rate to use.
	            * @public
	            * @type {number}
	            */
	            this.mediaSubFrameRate = 1;
	            /**
	            * @name - mediaTickRate
	            * @description - The media tick rate to use.
	            * @public
	            * @type {number}
	            */
	            this.mediaTickRate = 1000;
	            /**
	            * @name - supportedTimeBase
	            * @description - The support timebase value.
	            * @public
	            * @type {string}
	            */
	            this.supportedTimeBase = 'media';
	            /**
	            * @name - cellResolution
	            * @description - The default cell grid.
	            * @public
	            * @type {IGrid}
	            */
	            this.cellResolution = { rows: 15, columns: 32 };
	            /**
	            * @name - defaultRegionStyle
	            * @description - The default region style.
	            * @public
	            * @type {IDictionaryStringString}
	            */
	            this.defaultRegionStyle = {
	                backgroundColor: 'transparent',
	                color: '#E8E9EA',
	                direction: 'ltr',
	                display: 'auto',
	                displayAlign: 'before',
	                extent: 'auto',
	                fontFamily: 'default',
	                fontSize: '1c',
	                fontStyle: 'normal',
	                fontWeight: 'normal',
	                lineHeight: 'normal',
	                opacity: '1',
	                origin: 'auto',
	                overflow: 'hidden',
	                padding: '0',
	                showBackground: 'always',
	                textAlign: 'start',
	                textDecoration: 'none',
	                textOutline: 'none',
	                unicodeBidi: 'normal',
	                visibility: 'visible',
	                wrapOption: 'noWrap',
	                writingMode: 'lrtb',
	                zIndex: 'auto'
	            };
	            /**
	            * @name - fontMap
	            * @description - The default font map.
	            * @public
	            * @type {IDictionaryStringString}
	            */
	            this.fontMap = {};
	            // These are from the Simple Delivery Profile
	            // Per spec recommendation that default be monospace sans serif.
	            this.fontMap['default'] = 'Lucida sans typewriter, Lucida console, Consolas';
	            this.fontMap['monospaceSerif'] = 'Courier';
	            this.fontMap['proportionalSerif'] = 'Times New Roman, Serif';
	            this.fontMap['monospaceSansSerif'] = 'Lucida sans typewriter, Lucida console, Consolas';
	            this.fontMap['proportionalSansSerif'] = 'Arial, Sans-serif';
	            this.fontMap['casual'] = 'Verdana';
	            this.fontMap['cursive'] = 'Zapf-Chancery, Segoe script, Cursive';
	            this.fontMap['smallCaps'] = 'Arial, Helvetica';
	            // These are others from the broader ttml (v1.0)
	            this.fontMap['monospace'] = 'Lucida sans typewriter, Lucida console, Consolas';
	            this.fontMap['sansSerif'] = 'Arial, Sans-serif';
	            this.fontMap['serif'] = 'Times New Roman, Serif';
	            if (settingsOverrides) {
	                utility_1.extend(this, settingsOverrides);
	            }
	        }
	        return TtmlSettings;
	    }());
	    exports.TtmlSettings = TtmlSettings;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/// <amd-module name="ttml-time-parser"/>
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports) {
	    "use strict";
	    // Timed Text Markup Language (TTML).
	    // See http://www.w3.org/TR/ttml1/ for more details.
	    /**
	    * @class - TtmlTimeParser
	    * @classdesc - The TtmlTimeParser class is used to parse ttml time expressions which can be absolute or relative.
	    * @export
	    */
	    var TtmlTimeParser = (function () {
	        /**
	        * @const�ructor
	        * @description - Constructor for the TtmlTimeParser class.
	        * @public
	        * @param {number} mediaFrameRate - The ttml media frame rate.
	        * @param {number} mediaTickRate - The ttml media tick rate.
	        */
	        function TtmlTimeParser(mediaFrameRate, mediaTickRate) {
	            this.mediaFrameRate = mediaFrameRate;
	            this.mediaTickRate = mediaTickRate;
	            // Nothing to do at this time...
	        }
	        /**
	        * @name - parse
	        * @description - Parses a ttml time expression string into a number.
	        * @public
	        * @param {string} ttmlTime - The time expression to parse.
	        * @returns {number} - The number the time expression represents, or 0 if the exression doesn't match.
	        */
	        TtmlTimeParser.prototype.parse = function (ttmlTime) {
	            if (!ttmlTime) {
	                return 0;
	            }
	            var absoluteTime = TtmlTimeParser.absoluteTimeRegex.exec(ttmlTime);
	            if (absoluteTime && (absoluteTime.length > 3)) {
	                var hours = parseInt(absoluteTime[1], 10) * 60 * 60;
	                var minutes = parseInt(absoluteTime[2], 10) * 60;
	                var seconds = parseInt(absoluteTime[3], 10);
	                var subseconds = 0;
	                if (absoluteTime[5]) {
	                    subseconds = parseFloat(absoluteTime[4]) * 1000;
	                }
	                if (absoluteTime[6]) {
	                    subseconds = Math.round(parseFloat(absoluteTime[6]) * this.getTimeUnitMultiplier('f'));
	                }
	                return (1000 * (hours + minutes + seconds)) + subseconds;
	            }
	            var relativeTime = TtmlTimeParser.relativeTimeRegex.exec(ttmlTime);
	            if (relativeTime && (relativeTime.length > 3)) {
	                return Math.round(parseFloat(relativeTime[1]) * this.getTimeUnitMultiplier(relativeTime[3]));
	            }
	            return 0;
	        };
	        /**
	        * @name - getTimeUnitMultiplier
	        * @description - Converts a ttml time unit expression string into a multiplier number.
	        * @private
	        * @param {string} timeUnit - The time unit expression.
	        * @returns {number} - The multiplier value, or 0 if the unit exression doesn't match.
	        */
	        TtmlTimeParser.prototype.getTimeUnitMultiplier = function (timeUnit) {
	            switch (timeUnit) {
	                case 'h':
	                    return 1000 * 60 * 60;
	                case 'ms':
	                    return 1;
	                case 'm':
	                    return 1000 * 60;
	                case 's':
	                    return 1000;
	                case 'f':
	                    return 1000 / this.mediaFrameRate;
	                case 't':
	                    return 1000 / this.mediaTickRate;
	                default:
	                    return 0;
	            }
	        };
	        /**
	        * @name - absoluteTimeRegex
	        * @description - Regex to parse absolute ttml times. (clock-time)
	        *                hours ":" minutes ":" seconds ( fraction | ":" frames ( "." sub-frames )? )?
	        *                NOTE: (johnlemi)  Our clocktime regex matches 1 or 2 digits for hours instead of 2 because even
	        *                though the spec says 2 we have some existing ttml from the Office team with end attrs with 1 hour digit
	        * @static
	        * @private
	        * @type {string}
	        */
	        TtmlTimeParser.absoluteTimeRegex = /^(\d{1,}):(\d{2}):(\d{2})((\.\d{1,})|:(\d{2,}(\.\d{1,})?))?$/;
	        /**
	        * @name - relativeTimeRegex
	        * @description - Regex to parse relative ttml times. (offset-time)
	        *                time-count fraction? metric
	        * @static
	        * @private
	        * @type {string}
	        */
	        TtmlTimeParser.relativeTimeRegex = /^(\d+(\.\d+)?)(ms|[hmsft])$/;
	        return TtmlTimeParser;
	    }());
	    exports.TtmlTimeParser = TtmlTimeParser;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ]);
//# sourceMappingURL=mwf-main.var.js.map