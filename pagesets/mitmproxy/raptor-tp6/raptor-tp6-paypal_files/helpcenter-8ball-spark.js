/* eslint-disable */

/**
 *  This is a es5 file, we have to gate our code inside an IIFE so we don't pollute the global namespace.
 *  The execution happens inside the try/catch statement , it defines the `helpCenterSpark` once on the window
 *  from there it checks to see if we need to download the helpcenterapi.js file or if we have it cached already.
 *  In either case we run the functions from the factory that was put into the window object from /smarthelpnodeweb/public/js/minihelp/index.js
 *  If the loading fails or `root.contextualHelp` is not an object we re-direct the user to the full help center.
 *
 *  This file is responsible for loading contextual help as well as node-chat and tealeaf (if not present on the page)
 *  it needs to be written on ES5 and needs to be as light weight as possible. It also needs to only load each file it loads ONCE per page refresh as well as,
 *  only defining `root.helpCenterSpark` ONCE.
 *
 *  Currently we don't need some parts of the implementation we can't change the contract so for example:
 *  `helpCenterApi = new helpcenterapi(options);` is not needed anymore, the consumer just needs to have initHelpCenter.onLoadComplete() as a function on the global scope.
 */
(function helpcenter8ballSpark(root) {
  'use strict';

  _sanityChecksAndPolyfills();
  // root.contextualHelp aka window.contextualHelp is where the contextual help's methods will get put in.
  var shouldFetchHelpCenterApiFile = true;   // Keeps track of whether helpcenterapi.js has been loaded or not.
  var contextualHelpApi;                     // Stores the initialized `window.contextualHelp` object reference.
  var isBrowserIE11 = _isBrowserIE11();
  var sessionName = 'contextual:history-tracker';
  var implementationType = _getImplementationType();
  var newImplementationElement; // The new implementation relies on a DOM element of `id=hc-contextual-help-app`, is set by `_getImplementationType()` if the ID is found on the page.


  // Main processes get kicked off here
  try {
    // We put helpCenterSpark() on the global namespace only once since the consumer HTML needs it. eg: root.helpCenterSpark() where root should be the window object.
    root.helpCenterSpark = function (functionNameFromFrontEnd, argsFromFrontEnd) {
      shouldFetchHelpCenterApiFile
        ? fetchContextualHelpScript(functionNameFromFrontEnd, argsFromFrontEnd)
        : executeContextualHelpFunction(contextualHelpApi, functionNameFromFrontEnd, argsFromFrontEnd);
    };

    loadChatApi();

    // This maintains the state of contextual help if it's open between page reloads.
    sessionPersistLoader(fetchContextualHelpScript);

    // Store client document title into Session
    sessionTitleSaver(root);

    // Adding Click event listener for passing into fieldRefId into recommend API
    updateSessionForClicking(root);
  } catch (err) {
    console.error('[contextual-help-error]::[helpcenter-8ball-spark.js]::[helpcenter8ballSpark]: ', err);
  }


  // Main functions


  function fetchContextualHelpScript(func, args) {

    // If we can't find either implementation (old or new) we don't even fetch the file.
    if (!implementationType) {
      return;
    }

    var options;
    var settings = {};

    var DEFAULTS = {
      apiBaseUrl: 'https://www.paypal.com',
      country: 'US',
      locale: 'en_US',
      mountElementSelectorOld: '.contextual-help-app',
      mountElementSelectorNew: '#hc-contextual-help-app',
    };

    if (implementationType === 'old') {
      options = root.initHelpCenter() || {};
      settings = options.settings || {};
      settings.mountElementSelector = settings.mountElementSelector || DEFAULTS.mountElementSelectorOld;

    } else if (implementationType === 'new') {
      settings = {
        apiBaseUrl: newImplementationElement.dataset.apiBaseUrl,
        country: newImplementationElement.dataset.country,
        locale: newImplementationElement.dataset.locale,
        mountElementSelector: DEFAULTS.mountElementSelectorNew, // for the NEW implementation we don't give a choice for `mountElementSelector`
      };
    }

    // If for whatever reason not some of the values were set, we use the defaults here.
    settings = {
      apiBaseUrl: settings.apiBaseUrl = _getBaseUrlFromAddressBar() || DEFAULTS.apiBaseUrl,
      country: settings.country || DEFAULTS.country,
      locale: settings.locale || DEFAULTS.locale,
      mountElementSelector: settings.mountElementSelector || DEFAULTS.mountElementSelectorOld, // We default to the OLD selector until we move everyone to the NEW implementation.
    };

    var language = (settings.locale.split('_')[0]).toLowerCase();
    var minihelpCss = _isLocaleRTL(language) ? '/smarthelp/css/minihelp-8ball.rtl.css' : '/smarthelp/css/minihelp-8ball.css';

    loadStyleSheet(settings.apiBaseUrl + minihelpCss);

    // This prevents tealeaf from being loaded multiple times due to page refresh
    if (typeof root.TLT === 'undefined') {
      var teaLeafUrl = 'https://www.paypalobjects.com/helpcenter/vendor/tealeaf/tealeaf-selfhelp-prod_domcap.min.js';
      loadScript(teaLeafUrl, settings);
    }

    var scriptUrl = settings.apiBaseUrl + '/smarthelp/js/helpcenterapi.js';

    loadScript(scriptUrl, settings, function () {
      loadScriptCallBack(root, settings, func, args);
    });
  }

  function loadScriptCallBack(root, settings, functionName, args) {
    if (typeof root.contextualHelp === 'undefined') {
      console.error('[contextual-help-error]::[helpcenter-8ball-spark.js]::[loadScriptCallBack]: Contextual Help LoadScript Failed');
      // if user Click helper, then redirect to Home page; if users come from persist logic, then no redirect
      if (functionName) {
        window.location.href = '/smarthelp/home';
      }
      return;
    }

    shouldFetchHelpCenterApiFile = false; // The script was fetched successfully.

    // If we can't find neither the old nor the new implementations, we don't open contextual help.
    if (!implementationType) {
      return;
    }

    contextualHelpApi = root.contextualHelp;
    executeContextualHelpFunction(contextualHelpApi, functionName, args);
  }

  // Executes functions inside the exported HelpCenterApi factory, the setTimeout is there to ensure that helpcenterapi.js did load
  function executeContextualHelpFunction(contextualHelpLoaded, functionName, args) {
    if (!contextualHelpLoaded || !functionName) {
      return;
    }

    var delay = isBrowserIE11 ? 1350 : 300;

    try {
      setTimeout(function () {
        // Let's make sure the function exists so we don't do: `variable()`
        if (typeof contextualHelpLoaded[functionName] === 'function') {
          contextualHelpLoaded[functionName](args);
        }
      }, delay); // We need at least ~300ms for the `contextualHelpApi` code to boot, using `0` doesn't work.
    } catch (err) {
      console.error('[contextual-help-error]::[helpcenter-8ball-spark.js]::[executeContextualHelpFunction]: ', err);
    }
  }

  function loadScript(url, params, callback) {
    var script;
    var ready;
    var tag;

    ready = false;
    script = document.createElement('script');

    // Since it's 2 for now this is fine, if we need to set more params then let's turn this into a loop.
    if (params && params.locale) {
      script.setAttribute('locale', params.locale);
    }

    if (params && params.country) {
      script.setAttribute('country', params.country);
    }

    script.onload = script.onreadystatechange = function onReadyStateChange() {
      if (!ready && (!script.readyState || script.readyState === 'loaded' || script.readyState === 'complete')) {
        ready = true;
        if (callback && typeof callback === 'function') {
          callback();
        }
      }
    };

    script.onerror = function () {
      console.error('[contextual-help-error]::[helpcenter-8ball-spark.js]::[loadScript]: The script \'' + url + '\' was not found');
    };

    // If a script is cached, IE may execute it immediately, which breaks
    // JavaScript's run-to-completion semantics. So, don't try to load the
    // script until a later turn of the event loop.
    //
    // See http://www.guypo.com/ies-premature-execution-problem/
    var delay = isBrowserIE11 ? 350 : 0;
    setTimeout(function () {
      script.src = url;

      try {
        tag = document.getElementsByTagName('script')[0];
        tag.parentNode.insertBefore(script, tag);
      } catch (err) {
        console.error('[contextual-help-error]::[helpcenter-8ball-spark.js]::[loadScript]: ', err);
      }
    }, delay);
  }

  function loadStyleSheet(filename) {
    var tag = document.createElement('link');
    tag.rel = 'stylesheet';
    tag.href = filename;
    try {
      document.getElementsByTagName('head')[0].appendChild(tag);
    } catch (err) {
      console.error('[contextual-help-error]::[helpcenter-8ball-spark.js]::[loadStyleSheet]: ', err);
    }
  }

  function sessionTitleSaver(_root) {
    var title = _root.document.title;
    var tracker = _root.sessionStorage.getItem(sessionName);

    if (typeof tracker === 'string') {
      var trackerHistory = tracker.split('|');
      if (!Array.isArray(trackerHistory) || trackerHistory.indexOf(title) >= 0) return; // Prevent duplicated Title

      trackerHistory.push(title);

      // Remote the oldest page track in the history, if the history pages are more than 1
      if (trackerHistory.length > 1) {
        trackerHistory.shift();
      }
      _root.sessionStorage.setItem(sessionName, trackerHistory.join('|'));
    } else {
      _root.sessionStorage.setItem(sessionName, title);
    }
  }

  function updateSessionForClicking(_root) {
    _root.document.addEventListener('click', function (element) {
      element = element || _root.event;
      var target = element.target || element.srcElement;
      var text = target.textContent || target.innerText;
      // Contextual Help checker
      var trackerSet = ['a', 'p', 'div', 'button', 'span', 'input'];

      if (typeof target.tagName === 'string' && trackerSet.indexOf(target.tagName.toLowerCase()) >= 0) {
        var contextualHelp = _root.document.getElementById('contextual-help');
        if (contextualHelp && contextualHelp.contains(target)) return null; // No tracking click in the Contextual Help

        var tracker = _root.sessionStorage.getItem(sessionName);
        if (typeof tracker === 'string' && typeof text === 'string' && text.length > 0) {
          _root.sessionStorage.setItem(sessionName, (tracker + '[' + text + ']'));
        }
        if ((element.target.href || element.srcElement.href)) { //checking for 'a' tags only to get outerHTML
          var outerHtml = target.outerHTML;
          if (typeof outerHtml === 'string' && (outerHtml.indexOf('footer-contact') !== -1 || outerHtml.indexOf('footer_contact') !== -1)) {
            _root.sessionStorage.setItem('showContactOptions', 'true');
          }
        }
      }
    }, false);
  }

  function sessionPersistLoader(callback) {
    var contextualPersistShow = 'contextual:display-tracker';

    // Loading script if the session display is equal to true
    if (sessionStorage && sessionStorage['reduxPersist:viewport']
      && JSON.parse(sessionStorage['reduxPersist:viewport']).show
      && typeof callback === 'function') {
      callback();

      window.sessionStorage.setItem(contextualPersistShow, true);
    } else {
      window.sessionStorage.setItem(contextualPersistShow, false);
    }
  }


  // Helper functions


  // url derived from address bar
  function _getBaseUrlFromAddressBar() {
    if (typeof location === 'undefined' || !location.protocol || !location.host) {
      return '';
    }

    return location.protocol + '//' + location.host;
  }

  function _isLocaleRTL(language) {
    return ['ar', 'he', 'ku', 'az', 'fa', 'ur'].indexOf(language) >= 0;
  }

  function _isBrowserIE11() {
    return (navigator.userAgent.indexOf('Trident/') >= 0);
  }

  // TODO take this polyfill out once react-loadable fixes their babel process.
  function _polyfillObjectAssign() {
    if (typeof Object.assign === 'function') {
      return;
    }
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
      value: function assign(target, varArgs) { // .length of function is 2
        'use strict';
        if (target == null) { // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) { // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true,
    });
  }

  function _sanityChecksAndPolyfills() {
    _polyfillObjectAssign();

    if (typeof window === 'undefined' || root !== window) {
      console.error('[contextual-help-error]::[helpcenter-8ball-spark.js]::[_sanityChecksAndPolyfills]: Window is not the `root` for this script, unexpected behaviour will occur');
    }

    // This is a remnant from the old implementation which required the consumer to new up a function on their DOM... no longer needed
    if (typeof root.helpcenterapi === 'undefined') {
      root.helpcenterapi = function () {};
    }
  }

  function _getImplementationType() {
    if (typeof root.initHelpCenter === 'function') {
      return 'old';
    }

    newImplementationElement = document.getElementById('hc-contextual-help-app');
    if (newImplementationElement && newImplementationElement.dataset.country && newImplementationElement.dataset.locale) {
      return 'new';
    }

    return null;
  }

  // The Beyond help team controls/maintains this `loadChatApi()` function
  function loadChatApi() {
    var apiBaseUrl = _getBaseUrlFromAddressBar();

    if (apiBaseUrl && apiBaseUrl.indexOf('localhost') >= 0) {
      apiBaseUrl = 'https://msmaster.qa.paypal.com';
    }

    function loadChatJS() {
      var chatScript = document.createElement('script');
      chatScript.src = apiBaseUrl + '/smarthelp/js/chat/node-chat.js';

      var tag = document.getElementsByTagName('script')[0];
      tag.parentNode.insertBefore(chatScript, tag);
    }

    if (!window.Promise) {
      var script = document.createElement('script');
      script.src = 'https://www.paypalobjects.com/helpcenter/vendor/bluebird.js';

      if (script.readyState) {
        script.onreadystatechange = function () {
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            script.onreadystatechange = null;
            loadChatJS();
          }
        };
      } else {
        script.onload = loadChatJS;
      }
      var tag = document.getElementsByTagName('script')[0];
      tag.parentNode.insertBefore(script, tag);
    } else {
      loadChatJS();
    }
  }

})(this); // Should point to the global: `window` object
