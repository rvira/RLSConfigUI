import {
  AbortedDeferredError,
  Await,
  DataRouterContext,
  DataRouterStateContext,
  DeferredData,
  ErrorResponse,
  NavigationContext,
  RouteContext,
  Router,
  RouterProvider,
  __commonJS,
  __esm,
  __toESM,
  createBrowserHistory,
  createPath,
  createRouter,
  enhanceManualRouteObjects,
  init_dist,
  init_router,
  invariant,
  isRouteErrorResponse,
  joinPaths,
  matchRoutes,
  parsePath,
  redirect,
  require_react,
  stripBasename,
  useAsyncError,
  useHref,
  useLocation,
  useMatches,
  useNavigate,
  useNavigation,
  useResolvedPath,
  useRouteError
} from "/build/_shared/chunk-UZZVYDWO.js";

// node_modules/react-router-dom/dist/index.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;
  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);
    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    }
    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form);
    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;
    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();
      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }
  let {
    protocol,
    host
  } = window.location;
  let url = new URL(action, protocol + "//" + host);
  return {
    url,
    method: method.toLowerCase(),
    encType,
    formData
  };
}
function createBrowserRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    history: createBrowserHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: enhanceManualRouteObjects(routes)
  }).initialize();
}
function parseHydrationData() {
  var _window;
  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors)
    return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      let error = new Error(val.message);
      error.stack = "";
      serialized[key] = error;
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ React.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = React.useContext(DataRouterContext);
  !ctx ? true ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = React.useContext(DataRouterStateContext);
  !state ? true ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return state;
}
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
function useSubmitImpl(fetcherKey, routeId) {
  let {
    router: router2
  } = useDataRouterContext(DataRouterHook.UseSubmitImpl);
  let defaultAction = useFormAction();
  return React.useCallback(function(target, options) {
    if (options === void 0) {
      options = {};
    }
    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    }
    let {
      method,
      encType,
      formData,
      url
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url.pathname + url.search;
    let opts = {
      replace: options.replace,
      preventScrollReset: options.preventScrollReset,
      formData,
      formMethod: method,
      formEncType: encType
    };
    if (fetcherKey) {
      !(routeId != null) ? true ? invariant(false, "No routeId available for useFetcher()") : invariant(false) : void 0;
      router2.fetch(fetcherKey, routeId, href, opts);
    } else {
      router2.navigate(href, opts);
    }
  }, [defaultAction, router2, fetcherKey, routeId]);
}
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = React.useContext(NavigationContext);
  let routeContext = React.useContext(RouteContext);
  !routeContext ? true ? invariant(false, "useFormAction must be used inside a RouteContext") : invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  let path = _extends({}, useResolvedPath(action ? action : ".", {
    relative
  }));
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    path.hash = location.hash;
    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router: router2
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let location = useLocation();
  let matches = useMatches();
  let navigation = useNavigation();
  React.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  usePageHide(React.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }
    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches]));
  if (typeof document !== "undefined") {
    React.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
      }
    }, [storageKey]);
    React.useLayoutEffect(() => {
      let disableScrollRestoration = router2 == null ? void 0 : router2.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router2, getKey]);
    React.useLayoutEffect(() => {
      if (restoreScrollPosition === false) {
        return;
      }
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      if (location.hash) {
        let el = document.getElementById(location.hash.slice(1));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      if (preventScrollReset === true) {
        return;
      }
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  React.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : void 0;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
var React, defaultMethod, defaultEncType, _excluded, _excluded2, _excluded3, isBrowser, ABSOLUTE_URL_REGEX, Link, NavLink, Form, FormImpl, DataRouterHook, DataRouterStateHook, SCROLL_RESTORATION_STORAGE_KEY, savedScrollPositions;
var init_dist2 = __esm({
  "node_modules/react-router-dom/dist/index.js"() {
    React = __toESM(require_react());
    init_dist();
    init_dist();
    init_router();
    defaultMethod = "get";
    defaultEncType = "application/x-www-form-urlencoded";
    _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
    _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
    _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
    if (true) {
      HistoryRouter.displayName = "unstable_HistoryRouter";
    }
    isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
    ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    Link = /* @__PURE__ */ React.forwardRef(function LinkWithRef(_ref4, ref) {
      let {
        onClick,
        relative,
        reloadDocument,
        replace,
        state,
        target,
        to,
        preventScrollReset
      } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
      let {
        basename
      } = React.useContext(NavigationContext);
      let absoluteHref;
      let isExternal = false;
      if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
        absoluteHref = to;
        if (isBrowser) {
          let currentUrl = new URL(window.location.href);
          let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
          let path = stripBasename(targetUrl.pathname, basename);
          if (targetUrl.origin === currentUrl.origin && path != null) {
            to = path + targetUrl.search + targetUrl.hash;
          } else {
            isExternal = true;
          }
        }
      }
      let href = useHref(to, {
        relative
      });
      let internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target,
        preventScrollReset,
        relative
      });
      function handleClick(event) {
        if (onClick)
          onClick(event);
        if (!event.defaultPrevented) {
          internalOnClick(event);
        }
      }
      return /* @__PURE__ */ React.createElement("a", _extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref,
        target
      }));
    });
    if (true) {
      Link.displayName = "Link";
    }
    NavLink = /* @__PURE__ */ React.forwardRef(function NavLinkWithRef(_ref5, ref) {
      let {
        "aria-current": ariaCurrentProp = "page",
        caseSensitive = false,
        className: classNameProp = "",
        end = false,
        style: styleProp,
        to,
        children
      } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
      let path = useResolvedPath(to, {
        relative: rest.relative
      });
      let location = useLocation();
      let routerState = React.useContext(DataRouterStateContext);
      let {
        navigator
      } = React.useContext(NavigationContext);
      let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
      let locationPathname = location.pathname;
      let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
      if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
      }
      let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
      let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
      let ariaCurrent = isActive ? ariaCurrentProp : void 0;
      let className;
      if (typeof classNameProp === "function") {
        className = classNameProp({
          isActive,
          isPending
        });
      } else {
        className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
      }
      let style = typeof styleProp === "function" ? styleProp({
        isActive,
        isPending
      }) : styleProp;
      return /* @__PURE__ */ React.createElement(Link, _extends({}, rest, {
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to
      }), typeof children === "function" ? children({
        isActive,
        isPending
      }) : children);
    });
    if (true) {
      NavLink.displayName = "NavLink";
    }
    Form = /* @__PURE__ */ React.forwardRef((props, ref) => {
      return /* @__PURE__ */ React.createElement(FormImpl, _extends({}, props, {
        ref
      }));
    });
    if (true) {
      Form.displayName = "Form";
    }
    FormImpl = /* @__PURE__ */ React.forwardRef((_ref6, forwardedRef) => {
      let {
        reloadDocument,
        replace,
        method = defaultMethod,
        action,
        onSubmit,
        fetcherKey,
        routeId,
        relative,
        preventScrollReset
      } = _ref6, props = _objectWithoutPropertiesLoose(_ref6, _excluded3);
      let submit = useSubmitImpl(fetcherKey, routeId);
      let formMethod = method.toLowerCase() === "get" ? "get" : "post";
      let formAction = useFormAction(action, {
        relative
      });
      let submitHandler = (event) => {
        onSubmit && onSubmit(event);
        if (event.defaultPrevented)
          return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
          method: submitMethod,
          replace,
          relative,
          preventScrollReset
        });
      };
      return /* @__PURE__ */ React.createElement("form", _extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
      }, props));
    });
    if (true) {
      FormImpl.displayName = "FormImpl";
    }
    if (true) {
      ScrollRestoration.displayName = "ScrollRestoration";
    }
    (function(DataRouterHook2) {
      DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
      DataRouterHook2["UseSubmitImpl"] = "useSubmitImpl";
      DataRouterHook2["UseFetcher"] = "useFetcher";
    })(DataRouterHook || (DataRouterHook = {}));
    (function(DataRouterStateHook2) {
      DataRouterStateHook2["UseFetchers"] = "useFetchers";
      DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
    })(DataRouterStateHook || (DataRouterStateHook = {}));
    SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
    savedScrollPositions = {};
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React6 = require_react();
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState3 = React6.useState, useEffect3 = React6.useEffect, useLayoutEffect2 = React6.useLayoutEffect, useDebugValue = React6.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React6.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState3({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect2(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect3(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React6.useSyncExternalStore !== void 0 ? React6.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-dev-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React6 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        var jsxDEV$1 = jsxWithValidation;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsxDEV = jsxDEV$1;
      })();
    }
  }
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS({
  "node_modules/react/jsx-dev-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_dev_runtime_development();
    }
  }
});

// node_modules/@remix-run/react/dist/esm/errorBoundaries.js
var import_react = __toESM(require_react());
init_dist2();
var RemixErrorBoundary = class extends import_react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error || null,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ import_react.default.createElement(this.props.component, {
        error: this.state.error
      });
    } else {
      return this.props.children;
    }
  }
};
function RemixRootDefaultErrorBoundary({
  error
}) {
  console.error(error);
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react.default.createElement("title", null, "Application Error!")), /* @__PURE__ */ import_react.default.createElement("body", null, /* @__PURE__ */ import_react.default.createElement("main", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    style: {
      fontSize: "24px"
    }
  }, "Application Error"), /* @__PURE__ */ import_react.default.createElement("pre", {
    style: {
      padding: "2rem",
      background: "hsla(10, 50%, 50%, 0.1)",
      color: "red",
      overflow: "auto"
    }
  }, error.stack)), /* @__PURE__ */ import_react.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `
    }
  })));
}
function V2_RemixRootDefaultErrorBoundary() {
  let error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ import_react.default.createElement(RemixRootDefaultCatchBoundaryImpl, {
      caught: error
    });
  } else if (error instanceof Error) {
    return /* @__PURE__ */ import_react.default.createElement(RemixRootDefaultErrorBoundary, {
      error
    });
  } else {
    let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
    return /* @__PURE__ */ import_react.default.createElement(RemixRootDefaultErrorBoundary, {
      error: new Error(errorString)
    });
  }
}
var RemixCatchContext = /* @__PURE__ */ import_react.default.createContext(void 0);
function useCatch() {
  return (0, import_react.useContext)(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component,
  children
}) {
  if (catchVal) {
    return /* @__PURE__ */ import_react.default.createElement(RemixCatchContext.Provider, {
      value: catchVal
    }, /* @__PURE__ */ import_react.default.createElement(Component, null));
  }
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  let caught = useCatch();
  return /* @__PURE__ */ import_react.default.createElement(RemixRootDefaultCatchBoundaryImpl, {
    caught
  });
}
function RemixRootDefaultCatchBoundaryImpl({
  caught
}) {
  return /* @__PURE__ */ import_react.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react.default.createElement("head", null, /* @__PURE__ */ import_react.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,viewport-fit=cover"
  }), /* @__PURE__ */ import_react.default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ import_react.default.createElement("body", null, /* @__PURE__ */ import_react.default.createElement("h1", {
    style: {
      fontFamily: "system-ui, sans-serif",
      padding: "2rem"
    }
  }, caught.status, " ", caught.statusText), /* @__PURE__ */ import_react.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `
    }
  })));
}

// node_modules/@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}

// node_modules/@remix-run/react/dist/esm/components.js
var React2 = __toESM(require_react());
init_dist2();

// node_modules/@remix-run/react/dist/esm/invariant.js
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

// node_modules/@remix-run/react/dist/esm/links.js
init_dist2();

// node_modules/@remix-run/react/dist/esm/routeModules.js
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    window.location.reload();
    return new Promise(() => {
    });
  }
}

// node_modules/@remix-run/react/dist/esm/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    var _module$links;
    let module = routeModules[match.route.id];
    return ((_module$links = module.links) === null || _module$links === void 0 ? void 0 : _module$links.call(module)) || [];
  }).flat(1);
  let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
async function prefetchStyleLinks(routeModule) {
  if (!routeModule.links)
    return;
  let descriptors = routeModule.links();
  if (!descriptors)
    return;
  let styleLinks = [];
  for (let descriptor of descriptors) {
    if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
      styleLinks.push({
        ...descriptor,
        rel: "preload",
        as: "style"
      });
    }
  }
  let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    }
    link.onload = () => {
      removeLink();
      resolve();
    };
    link.onerror = () => {
      removeLink();
      resolve();
    };
    document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  if (object == null)
    return false;
  if (object.href == null) {
    return object.rel === "preload" && (typeof object.imageSrcSet === "string" || typeof object.imagesrcset === "string") && (typeof object.imageSizes === "string" || typeof object.imagesizes === "string");
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getStylesheetPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(manifest.routes[match.route.id], routeModules);
    return mod.links ? mod.links() : [];
  }));
  return links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map((link) => link.rel === "preload" ? {
    ...link,
    rel: "prefetch"
  } : {
    ...link,
    rel: "prefetch",
    as: "style"
  });
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
  let path = parsePathPatch(page);
  let isNew = (match, index) => {
    if (!currentMatches[index])
      return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _currentMatches$index;
    return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
  };
  let newMatches = mode === "data" && location.search !== path.search ? nextMatches.filter((match, index) => {
    let manifestRoute = manifest.routes[match.route.id];
    if (!manifestRoute.hasLoader) {
      return false;
    }
    if (isNew(match, index) || matchPathChanged(match, index)) {
      return true;
    }
    if (match.route.shouldRevalidate) {
      var _currentMatches$;
      let routeChoice = match.route.shouldRevalidate({
        currentUrl: new URL(location.pathname + location.search + location.hash, window.origin),
        currentParams: ((_currentMatches$ = currentMatches[0]) === null || _currentMatches$ === void 0 ? void 0 : _currentMatches$.params) || {},
        nextUrl: new URL(page, window.origin),
        nextParams: match.params,
        defaultShouldRevalidate: true
      });
      if (typeof routeChoice === "boolean") {
        return routeChoice;
      }
    }
    return true;
  }) : nextMatches.filter((match, index) => {
    let manifestRoute = manifest.routes[match.route.id];
    return (mode === "assets" || manifestRoute.hasLoader) && (isNew(match, index) || matchPathChanged(match, index));
  });
  return newMatches;
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path;
    let searchParams = new URLSearchParams(search);
    searchParams.set("_data", match.route.id);
    return `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let str = JSON.stringify(descriptor);
    if (!set.has(str)) {
      set.add(str);
      deduped.push(descriptor);
    }
    return deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = parsePath(href);
  if (path.search === void 0)
    path.search = "";
  return path;
}

// node_modules/@remix-run/react/dist/esm/markup.js
var ESCAPE_LOOKUP = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function createHtml(html) {
  return {
    __html: html
  };
}

// node_modules/@remix-run/react/dist/esm/components.js
function useDataRouterContext2() {
  let context = React2.useContext(DataRouterContext);
  invariant2(context, "You must render this element inside a <DataRouterContext.Provider> element");
  return context;
}
function useDataRouterStateContext() {
  let context = React2.useContext(DataRouterStateContext);
  invariant2(context, "You must render this element inside a <DataRouterStateContext.Provider> element");
  return context;
}
var RemixContext = /* @__PURE__ */ React2.createContext(void 0);
RemixContext.displayName = "Remix";
function useRemixContext() {
  let context = React2.useContext(RemixContext);
  invariant2(context, "You must render this element inside a <Remix> element");
  return context;
}
function RemixRoute({
  id
}) {
  let {
    routeModules
  } = useRemixContext();
  invariant2(routeModules, "Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.\nCheck this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  let {
    default: Component
  } = routeModules[id];
  invariant2(Component, `Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
  return /* @__PURE__ */ React2.createElement(Component, null);
}
function RemixRouteError({
  id
}) {
  let {
    future,
    routeModules
  } = useRemixContext();
  invariant2(routeModules, "Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.\nCheck this link for more details:\nhttps://remix.run/pages/gotchas#server-code-in-client-bundles");
  let error = useRouteError();
  let {
    CatchBoundary,
    ErrorBoundary
  } = routeModules[id];
  if (future.v2_errorBoundary) {
    if (id === "root") {
      ErrorBoundary || (ErrorBoundary = V2_RemixRootDefaultErrorBoundary);
    }
    if (ErrorBoundary) {
      return /* @__PURE__ */ React2.createElement(ErrorBoundary, null);
    }
    throw error;
  }
  if (id === "root") {
    CatchBoundary || (CatchBoundary = RemixRootDefaultCatchBoundary);
    ErrorBoundary || (ErrorBoundary = RemixRootDefaultErrorBoundary);
  }
  if (isRouteErrorResponse(error)) {
    let tError = error;
    if ((tError === null || tError === void 0 ? void 0 : tError.error) instanceof Error && tError.status !== 404 && ErrorBoundary) {
      return /* @__PURE__ */ React2.createElement(ErrorBoundary, {
        error: tError.error
      });
    }
    if (CatchBoundary) {
      return /* @__PURE__ */ React2.createElement(RemixCatchBoundary, {
        component: CatchBoundary,
        catch: error
      });
    }
  }
  if (error instanceof Error && ErrorBoundary) {
    return /* @__PURE__ */ React2.createElement(ErrorBoundary, {
      error
    });
  }
  throw error;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React2.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = React2.useState(false);
  let {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  React2.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
  }, [prefetch]);
  let setIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(true);
    }
  };
  let cancelIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(false);
      setShouldPrefetch(false);
    }
  };
  React2.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  return [shouldPrefetch, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var NavLink2 = /* @__PURE__ */ React2.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
  let href = useHref(to);
  let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(NavLink, _extends2({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React2.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
NavLink2.displayName = "NavLink";
var Link2 = /* @__PURE__ */ React2.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
  let href = useHref(to);
  let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Link, _extends2({
    ref: forwardedRef,
    to
  }, props, prefetchHandlers)), shouldPrefetch && !isAbsolute ? /* @__PURE__ */ React2.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
Link2.displayName = "Link";
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function Links() {
  let {
    manifest,
    routeModules
  } = useRemixContext();
  let {
    matches
  } = useDataRouterStateContext();
  let links = React2.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, links.map((link) => {
    if (isPageLinkDescriptor(link)) {
      return /* @__PURE__ */ React2.createElement(PrefetchPageLinks, _extends2({
        key: link.page
      }, link));
    }
    let imageSrcSet = null;
    if ("useId" in React2) {
      if (link.imagesrcset) {
        link.imageSrcSet = imageSrcSet = link.imagesrcset;
        delete link.imagesrcset;
      }
      if (link.imagesizes) {
        link.imageSizes = link.imagesizes;
        delete link.imagesizes;
      }
    } else {
      if (link.imageSrcSet) {
        link.imagesrcset = imageSrcSet = link.imageSrcSet;
        delete link.imageSrcSet;
      }
      if (link.imageSizes) {
        link.imagesizes = link.imageSizes;
        delete link.imageSizes;
      }
    }
    return /* @__PURE__ */ React2.createElement("link", _extends2({
      key: link.rel + (link.href || "") + (imageSrcSet || "")
    }, link));
  }));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let {
    router: router2
  } = useDataRouterContext2();
  let matches = React2.useMemo(() => matchRoutes(router2.routes, page), [router2.routes, page]);
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return /* @__PURE__ */ React2.createElement(PrefetchPageLinksImpl, _extends2({
    page,
    matches
  }, dataLinkProps));
}
function usePrefetchedStylesheets(matches) {
  let {
    manifest,
    routeModules
  } = useRemixContext();
  let [styleLinks, setStyleLinks] = React2.useState([]);
  React2.useEffect(() => {
    let interrupted = false;
    getStylesheetPrefetchLinks(matches, manifest, routeModules).then((links) => {
      if (!interrupted)
        setStyleLinks(links);
    });
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return styleLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation();
  let {
    manifest
  } = useRemixContext();
  let {
    matches
  } = useDataRouterStateContext();
  let newMatchesForData = React2.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "data"), [page, nextMatches, matches, manifest, location]);
  let newMatchesForAssets = React2.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, manifest, location, "assets"), [page, nextMatches, matches, manifest, location]);
  let dataHrefs = React2.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]);
  let moduleHrefs = React2.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
  let styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React2.createElement("link", _extends2({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React2.createElement("link", _extends2({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React2.createElement("link", _extends2({
    key: link.href
  }, link))));
}
function V1Meta() {
  let {
    routeModules
  } = useRemixContext();
  let {
    matches,
    loaderData
  } = useDataRouterStateContext();
  let location = useLocation();
  let meta = {};
  let parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id;
    let data = loaderData[routeId];
    let params = match.params;
    let routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location,
        matches: void 0
      }) : routeModule.meta;
      if (routeMeta && Array.isArray(routeMeta)) {
        throw new Error(
          "The route at " + match.route.path + " returns an array. This is only supported with the `v2_meta` future flag in the Remix config. Either set the flag to `true` or update the route's meta function to return an object.\n\nTo reference the v1 meta function API, see https://remix.run/route/meta"
        );
      }
      Object.assign(meta, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, Object.entries(meta).map(([name, value]) => {
    if (!value) {
      return null;
    }
    if (["charset", "charSet"].includes(name)) {
      return /* @__PURE__ */ React2.createElement("meta", {
        key: "charset",
        charSet: value
      });
    }
    if (name === "title") {
      return /* @__PURE__ */ React2.createElement("title", {
        key: "title"
      }, String(value));
    }
    let isOpenGraphTag = /^(og|music|video|article|book|profile|fb):.+$/.test(name);
    return [value].flat().map((content) => {
      if (isOpenGraphTag) {
        return /* @__PURE__ */ React2.createElement("meta", {
          property: name,
          content,
          key: name + content
        });
      }
      if (typeof content === "string") {
        return /* @__PURE__ */ React2.createElement("meta", {
          name,
          content,
          key: name + content
        });
      }
      return /* @__PURE__ */ React2.createElement("meta", _extends2({
        key: name + JSON.stringify(content)
      }, content));
    });
  }));
}
function V2Meta() {
  let {
    routeModules
  } = useRemixContext();
  let {
    matches,
    loaderData
  } = useDataRouterStateContext();
  let location = useLocation();
  let meta = [];
  let leafMeta = null;
  let parentsData = {};
  let matchesWithMeta = matches.map((match) => ({
    ...match,
    meta: []
  }));
  let index = -1;
  for (let match of matches) {
    index++;
    let routeId = match.route.id;
    let data = loaderData[routeId];
    let params = match.params;
    let routeModule = routeModules[routeId];
    let routeMeta = [];
    if (routeModule !== null && routeModule !== void 0 && routeModule.meta) {
      routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location,
        matches: matchesWithMeta
      }) : routeModule.meta;
    } else if (leafMeta) {
      routeMeta = leafMeta;
    }
    routeMeta = routeMeta || [];
    if (!Array.isArray(routeMeta)) {
      throw new Error("The `v2_meta` API is enabled in the Remix config, but the route at " + match.route.path + " returns an invalid value. In v2, all route meta functions must return an array of meta objects.\n\nTo reference the v1 meta function API, see https://remix.run/route/meta");
    }
    matchesWithMeta[index].meta = routeMeta;
    meta = routeMeta;
    parentsData[routeId] = data;
    leafMeta = meta;
  }
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, meta.flat().map((metaProps) => {
    if (!metaProps) {
      return null;
    }
    if ("title" in metaProps) {
      return /* @__PURE__ */ React2.createElement("title", {
        key: "title"
      }, String(metaProps.title));
    }
    if ("charSet" in metaProps || "charset" in metaProps) {
      return /* @__PURE__ */ React2.createElement("meta", {
        key: "charset",
        charSet: metaProps.charSet || metaProps.charset
      });
    }
    return /* @__PURE__ */ React2.createElement("meta", _extends2({
      key: JSON.stringify(metaProps)
    }, metaProps));
  }));
}
function Meta() {
  let {
    future
  } = useRemixContext();
  return future !== null && future !== void 0 && future.v2_meta ? /* @__PURE__ */ React2.createElement(V2Meta, null) : /* @__PURE__ */ React2.createElement(V1Meta, null);
}
function Await2(props) {
  return /* @__PURE__ */ React2.createElement(Await, props);
}
var isHydrated = false;
function Scripts(props) {
  let {
    manifest,
    serverHandoffString,
    abortDelay
  } = useRemixContext();
  let {
    router: router2,
    static: isStatic,
    staticContext
  } = useDataRouterContext2();
  let {
    matches
  } = useDataRouterStateContext();
  let navigation = useNavigation();
  React2.useEffect(() => {
    isHydrated = true;
  }, []);
  let deferredScripts = [];
  let initialScripts = React2.useMemo(() => {
    var _manifest$hmr;
    let contextScript = staticContext ? `window.__remixContext = ${serverHandoffString};` : " ";
    let activeDeferreds = staticContext === null || staticContext === void 0 ? void 0 : staticContext.activeDeferreds;
    contextScript += !activeDeferreds ? "" : ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", "    x=new Error(e.message);", true ? `x.stack=e.stack;` : "", "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof abortDelay === "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${abortDelay});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", "    x=new Error(e.message);", true ? `x.stack=e.stack;` : "", "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join("\n") + Object.entries(activeDeferreds).map(([routeId, deferredData]) => {
      let pendingKeys = new Set(deferredData.pendingKeys);
      let promiseKeyValues = deferredData.deferredKeys.map((key) => {
        if (pendingKeys.has(key)) {
          deferredScripts.push(/* @__PURE__ */ React2.createElement(DeferredHydrationScript, {
            key: `${routeId} | ${key}`,
            deferredData,
            routeId,
            dataKey: key
          }));
          return `${JSON.stringify(key)}:__remixContext.n(${JSON.stringify(routeId)}, ${JSON.stringify(key)})`;
        } else {
          let trackedPromise = deferredData.data[key];
          if (typeof trackedPromise._error !== "undefined") {
            let toSerialize = {
              message: trackedPromise._error.message,
              stack: void 0
            };
            if (true) {
              toSerialize.stack = trackedPromise._error.stack;
            }
            return `${JSON.stringify(key)}:__remixContext.p(!1, ${escapeHtml(JSON.stringify(toSerialize))})`;
          } else {
            if (typeof trackedPromise._data === "undefined") {
              throw new Error(`The deferred data for ${key} was not resolved, did you forget to return data from a deferred promise?`);
            }
            return `${JSON.stringify(key)}:__remixContext.p(${escapeHtml(JSON.stringify(trackedPromise._data))})`;
          }
        }
      }).join(",\n");
      return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(routeId)}], {${promiseKeyValues}});`;
    }).join("\n") + (deferredScripts.length > 0 ? `__remixContext.a=${deferredScripts.length};` : "");
    let routeModulesScript = !isStatic ? " " : `${(_manifest$hmr = manifest.hmr) !== null && _manifest$hmr !== void 0 && _manifest$hmr.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}import ${JSON.stringify(manifest.url)};
${matches.map((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join("\n")}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("script", _extends2({}, props, {
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: createHtml(contextScript),
      type: void 0
    })), /* @__PURE__ */ React2.createElement("script", _extends2({}, props, {
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module",
      async: true
    })));
  }, []);
  if (!isStatic && typeof __remixContext === "object" && __remixContext.a) {
    for (let i = 0; i < __remixContext.a; i++) {
      deferredScripts.push(/* @__PURE__ */ React2.createElement(DeferredHydrationScript, {
        key: i
      }));
    }
  }
  let nextMatches = React2.useMemo(() => {
    if (navigation.location) {
      let matches2 = matchRoutes(router2.routes, navigation.location);
      invariant2(matches2, `No routes match path "${navigation.location.pathname}"`);
      return matches2;
    }
    return [];
  }, [navigation.location, router2.routes]);
  let routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1);
  let preloads = isHydrated ? [] : manifest.entry.imports.concat(routePreloads);
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("link", {
    rel: "modulepreload",
    href: manifest.url,
    crossOrigin: props.crossOrigin
  }), /* @__PURE__ */ React2.createElement("link", {
    rel: "modulepreload",
    href: manifest.entry.module,
    crossOrigin: props.crossOrigin
  }), dedupe2(preloads).map((path) => /* @__PURE__ */ React2.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), !isHydrated && initialScripts, !isHydrated && deferredScripts);
}
function DeferredHydrationScript({
  dataKey,
  deferredData,
  routeId
}) {
  if (typeof document === "undefined" && deferredData && dataKey && routeId) {
    invariant2(deferredData.pendingKeys.includes(dataKey), `Deferred data for route ${routeId} with key ${dataKey} was not pending but tried to render a script for it.`);
  }
  return /* @__PURE__ */ React2.createElement(React2.Suspense, {
    fallback: typeof document === "undefined" && deferredData && dataKey && routeId ? null : /* @__PURE__ */ React2.createElement("script", {
      async: true,
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: " "
      }
    })
  }, typeof document === "undefined" && deferredData && dataKey && routeId ? /* @__PURE__ */ React2.createElement(Await2, {
    resolve: deferredData.data[dataKey],
    errorElement: /* @__PURE__ */ React2.createElement(ErrorDeferredHydrationScript, {
      dataKey,
      routeId
    }),
    children: (data) => /* @__PURE__ */ React2.createElement("script", {
      async: true,
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: `__remixContext.r(${JSON.stringify(routeId)}, ${JSON.stringify(dataKey)}, ${escapeHtml(JSON.stringify(data))});`
      }
    })
  }) : /* @__PURE__ */ React2.createElement("script", {
    async: true,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: " "
    }
  }));
}
function ErrorDeferredHydrationScript({
  dataKey,
  routeId
}) {
  let error = useAsyncError();
  let toSerialize = {
    message: error.message,
    stack: void 0
  };
  if (true) {
    toSerialize.stack = error.stack;
  }
  return /* @__PURE__ */ React2.createElement("script", {
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `__remixContext.r(${JSON.stringify(routeId)}, ${JSON.stringify(dataKey)}, !1, ${escapeHtml(JSON.stringify(toSerialize))});`
    }
  });
}
function dedupe2(array) {
  return [...new Set(array)];
}
function useMatches2() {
  let {
    routeModules
  } = useRemixContext();
  let matches = useMatches();
  return matches.map((match) => {
    let remixMatch = {
      id: match.id,
      pathname: match.pathname,
      params: match.params,
      data: match.data,
      handle: routeModules[match.id].handle
    };
    return remixMatch;
  });
}
var LiveReload = false ? () => null : function LiveReload2({
  port = Number(8002),
  timeoutMs = 1e3,
  nonce = void 0
}) {
  let js = String.raw;
  return /* @__PURE__ */ React2.createElement("script", {
    nonce,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: js`
                function remixLiveReloadConnect(config) {
                  let protocol = location.protocol === "https:" ? "wss:" : "ws:";
                  let host = location.hostname;
                  let port = (window.__remixContext && window.__remixContext.dev && window.__remixContext.dev.liveReloadPort) || ${String(port)};
                  let socketPath = protocol + "//" + host + ":" + port + "/socket";
                  let ws = new WebSocket(socketPath);
                  ws.onmessage = async (message) => {
                    let event = JSON.parse(message.data);
                    if (event.type === "LOG") {
                      console.log(event.message);
                    }
                    if (event.type === "RELOAD") {
                      console.log("💿 Reloading window ...");
                      window.location.reload();
                    }
                    if (event.type === "HMR") {
                      if (!window.__hmr__ || !window.__hmr__.contexts) {
                        console.log("💿 [HMR] No HMR context, reloading window ...");
                        window.location.reload();
                        return;
                      }
                      if (!event.updates || !event.updates.length) return;
                      let updateAccepted = false;
                      for (let update of event.updates) {
                        console.log("[HMR] " + update.reason + " [" + update.id +"]")
                        if (update.revalidate) {
                          console.log("[HMR] Revalidating [" + update.id + "]");
                        }
                        let imported = await import(update.url +  '?t=' + event.assetsManifest.hmr.timestamp);
                        if (window.__hmr__.contexts[update.id]) {
                          let accepted = window.__hmr__.contexts[update.id].emit(
                            imported
                          );
                          if (accepted) {
                            console.log("[HMR] Updated accepted by", update.id);
                            updateAccepted = true;
                          }
                        }
                      }
                      if (event.assetsManifest && window.__hmr__.contexts["remix:manifest"]) {
                        let accepted = window.__hmr__.contexts["remix:manifest"].emit(
                          event.assetsManifest
                        );
                        if (accepted) {
                          console.log("[HMR] Updated accepted by", "remix:manifest");
                          updateAccepted = true;
                        }
                      }
                      if (!updateAccepted) {
                        console.log("[HMR] Updated rejected, reloading...");
                        window.location.reload();
                      }
                    }
                  };
                  ws.onopen = () => {
                    if (config && typeof config.onOpen === "function") {
                      config.onOpen();
                    }
                  };
                  ws.onclose = (event) => {
                    if (event.code === 1006) {
                      console.log("Remix dev asset server web socket closed. Reconnecting...");
                      setTimeout(
                        () =>
                          remixLiveReloadConnect({
                            onOpen: () => window.location.reload(),
                          }),
                      ${String(timeoutMs)}
                      );
                    }
                  };
                  ws.onerror = (error) => {
                    console.log("Remix dev asset server web socket error:");
                    console.error(error);
                  };
                }
                remixLiveReloadConnect();
              `
    }
  });
};

// node_modules/@remix-run/react/dist/esm/browser.js
var React4 = __toESM(require_react());
init_dist2();
var import_shim = __toESM(require_shim());

// node_modules/@remix-run/react/dist/esm/errors.js
init_router();
function deserializeErrors2(errors) {
  if (!errors)
    return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      let error = new Error(val.message);
      error.stack = val.stack;
      serialized[key] = error;
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}

// node_modules/@remix-run/react/dist/esm/routes.js
var React3 = __toESM(require_react());
init_dist2();

// node_modules/@remix-run/react/dist/esm/data.js
init_router();
function isCatchResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
}
function isErrorResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Error") != null;
}
function isRedirectResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
}
function isDeferredResponse(response) {
  var _response$headers$get;
  return response instanceof Response && !!((_response$headers$get = response.headers.get("Content-Type")) !== null && _response$headers$get !== void 0 && _response$headers$get.match(/text\/remix-deferred/));
}
async function fetchData(request, routeId) {
  let url = new URL(request.url);
  url.searchParams.set("_data", routeId);
  let init = {
    signal: request.signal
  };
  if (request.method !== "GET") {
    init.method = request.method;
    let contentType = request.headers.get("Content-Type");
    init.body = contentType && /\bapplication\/x-www-form-urlencoded\b/.test(contentType) ? new URLSearchParams(await request.text()) : await request.formData();
  }
  let response = await fetch(url.href, init);
  if (isErrorResponse(response)) {
    let data = await response.json();
    let error = new Error(data.message);
    error.stack = data.stack;
    return error;
  }
  return response;
}
var DEFERRED_VALUE_PLACEHOLDER_PREFIX = "__deferred_promise:";
async function parseDeferredReadableStream(stream) {
  if (!stream) {
    throw new Error("parseDeferredReadableStream requires stream argument");
  }
  let deferredData;
  let deferredResolvers = {};
  try {
    let sectionReader = readStreamSections(stream);
    let initialSectionResult = await sectionReader.next();
    let initialSection = initialSectionResult.value;
    if (!initialSection)
      throw new Error("no critical data");
    let criticalData = JSON.parse(initialSection);
    if (typeof criticalData === "object" && criticalData !== null) {
      for (let [eventKey, value] of Object.entries(criticalData)) {
        if (typeof value !== "string" || !value.startsWith(DEFERRED_VALUE_PLACEHOLDER_PREFIX)) {
          continue;
        }
        deferredData = deferredData || {};
        deferredData[eventKey] = new Promise((resolve, reject) => {
          deferredResolvers[eventKey] = {
            resolve: (value2) => {
              resolve(value2);
              delete deferredResolvers[eventKey];
            },
            reject: (error) => {
              reject(error);
              delete deferredResolvers[eventKey];
            }
          };
        });
      }
    }
    (async () => {
      try {
        for await (let section of sectionReader) {
          let [event, ...sectionDataStrings] = section.split(":");
          let sectionDataString = sectionDataStrings.join(":");
          let data = JSON.parse(sectionDataString);
          if (event === "data") {
            for (let [key, value] of Object.entries(data)) {
              if (deferredResolvers[key]) {
                deferredResolvers[key].resolve(value);
              }
            }
          } else if (event === "error") {
            for (let [key, value] of Object.entries(data)) {
              let err = new Error(value.message);
              err.stack = value.stack;
              if (deferredResolvers[key]) {
                deferredResolvers[key].reject(err);
              }
            }
          }
        }
        for (let [key, resolver] of Object.entries(deferredResolvers)) {
          resolver.reject(new AbortedDeferredError(`Deferred ${key} will never resolved`));
        }
      } catch (error) {
        for (let resolver of Object.values(deferredResolvers)) {
          resolver.reject(error);
        }
      }
    })();
    return new DeferredData({
      ...criticalData,
      ...deferredData
    });
  } catch (error) {
    for (let resolver of Object.values(deferredResolvers)) {
      resolver.reject(error);
    }
    throw error;
  }
}
async function* readStreamSections(stream) {
  let reader = stream.getReader();
  let buffer = [];
  let sections = [];
  let closed = false;
  let encoder = new TextEncoder();
  let decoder = new TextDecoder();
  let readStreamSection = async () => {
    if (sections.length > 0)
      return sections.shift();
    while (!closed && sections.length === 0) {
      let chunk = await reader.read();
      if (chunk.done) {
        closed = true;
        break;
      }
      buffer.push(chunk.value);
      try {
        let bufferedString = decoder.decode(mergeArrays(...buffer));
        let splitSections = bufferedString.split("\n\n");
        if (splitSections.length >= 2) {
          sections.push(...splitSections.slice(0, -1));
          buffer = [encoder.encode(splitSections.slice(-1).join("\n\n"))];
        }
        if (sections.length > 0) {
          break;
        }
      } catch {
        continue;
      }
    }
    if (sections.length > 0) {
      return sections.shift();
    }
    if (buffer.length > 0) {
      let bufferedString = decoder.decode(mergeArrays(...buffer));
      sections = bufferedString.split("\n\n").filter((s) => s);
      buffer = [];
    }
    return sections.shift();
  };
  let section = await readStreamSection();
  while (section) {
    yield section;
    section = await readStreamSection();
  }
}
function mergeArrays(...arrays) {
  let out = new Uint8Array(arrays.reduce((total, arr) => total + arr.length, 0));
  let offset = 0;
  for (let arr of arrays) {
    out.set(arr, offset);
    offset += arr.length;
  }
  return out;
}

// node_modules/@remix-run/react/dist/esm/routes.js
function groupRoutesByParentId(manifest) {
  let routes = {};
  Object.values(manifest).forEach((route) => {
    let parentId = route.parentId || "";
    if (!routes[parentId]) {
      routes[parentId] = [];
    }
    routes[parentId].push(route);
  });
  return routes;
}
function createClientRoutes(manifest, routeModulesCache, future, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => {
    let hasErrorBoundary = future.v2_errorBoundary === true ? route.id === "root" || route.hasErrorBoundary : route.id === "root" || route.hasCatchBoundary || route.hasErrorBoundary;
    let dataRoute = {
      caseSensitive: route.caseSensitive,
      element: /* @__PURE__ */ React3.createElement(RemixRoute, {
        id: route.id
      }),
      errorElement: hasErrorBoundary ? /* @__PURE__ */ React3.createElement(RemixRouteError, {
        id: route.id
      }) : void 0,
      id: route.id,
      index: route.index,
      path: route.path,
      handle: void 0,
      loader: createDataFunction(route, routeModulesCache, false),
      action: createDataFunction(route, routeModulesCache, true),
      shouldRevalidate: createShouldRevalidate(route, routeModulesCache)
    };
    let children = createClientRoutes(manifest, routeModulesCache, future, route.id);
    if (children.length > 0)
      dataRoute.children = children;
    return dataRoute;
  });
}
function createShouldRevalidate(route, routeModules) {
  return function(arg) {
    let module = routeModules[route.id];
    invariant2(module, `Expected route module to be loaded for ${route.id}`);
    if (module.shouldRevalidate) {
      return module.shouldRevalidate(arg);
    }
    return arg.defaultShouldRevalidate;
  };
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  await prefetchStyleLinks(routeModule);
  return routeModule;
}
function createDataFunction(route, routeModules, isAction) {
  return async ({
    request
  }) => {
    let routeModulePromise = loadRouteModuleWithBlockingLinks(route, routeModules);
    try {
      if (isAction && !route.hasAction) {
        let msg = `Route "${route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`;
        console.error(msg);
        throw new Error(msg);
      } else if (!isAction && !route.hasLoader) {
        return null;
      }
      let result = await fetchData(request, route.id);
      if (result instanceof Error) {
        throw result;
      }
      if (isRedirectResponse(result)) {
        throw getRedirect(result);
      }
      if (isCatchResponse(result)) {
        throw result;
      }
      if (isDeferredResponse(result) && result.body) {
        return await parseDeferredReadableStream(result.body);
      }
      return result;
    } finally {
      await routeModulePromise;
    }
  };
}
function getRedirect(response) {
  let status = parseInt(response.headers.get("X-Remix-Status"), 10) || 302;
  let url = response.headers.get("X-Remix-Redirect");
  let headers = {};
  let revalidate = response.headers.get("X-Remix-Revalidate");
  if (revalidate) {
    headers["X-Remix-Revalidate"] = revalidate;
  }
  return redirect(url, {
    status,
    headers
  });
}

// node_modules/@remix-run/react/dist/esm/browser.js
var router;
var hmrAbortController;
if (import.meta && import.meta.hot) {
  import.meta.hot.accept("remix:manifest", async (newManifest) => {
    let routeIds = [...new Set(router.state.matches.map((m) => m.route.id).concat(Object.keys(window.__remixRouteModules)))];
    let newRouteModules = Object.assign({}, window.__remixRouteModules, Object.fromEntries((await Promise.all(routeIds.map(async (id) => {
      var _newManifest$hmr, _window$__remixRouteM, _window$__remixRouteM2, _window$__remixRouteM3;
      if (!newManifest.routes[id]) {
        return null;
      }
      let imported = await import(newManifest.routes[id].module + `?t=${(_newManifest$hmr = newManifest.hmr) === null || _newManifest$hmr === void 0 ? void 0 : _newManifest$hmr.timestamp}`);
      return [id, {
        ...imported,
        default: imported.default ? ((_window$__remixRouteM = window.__remixRouteModules[id]) === null || _window$__remixRouteM === void 0 ? void 0 : _window$__remixRouteM.default) ?? imported.default : imported.default,
        CatchBoundary: imported.CatchBoundary ? ((_window$__remixRouteM2 = window.__remixRouteModules[id]) === null || _window$__remixRouteM2 === void 0 ? void 0 : _window$__remixRouteM2.CatchBoundary) ?? imported.CatchBoundary : imported.CatchBoundary,
        ErrorBoundary: imported.ErrorBoundary ? ((_window$__remixRouteM3 = window.__remixRouteModules[id]) === null || _window$__remixRouteM3 === void 0 ? void 0 : _window$__remixRouteM3.ErrorBoundary) ?? imported.ErrorBoundary : imported.ErrorBoundary
      }];
    }))).filter(Boolean)));
    Object.assign(window.__remixRouteModules, newRouteModules);
    let routes = createClientRoutes(newManifest.routes, window.__remixRouteModules, window.__remixContext.future);
    router._internalSetRoutes(routes);
    if (hmrAbortController) {
      hmrAbortController.abort();
    }
    hmrAbortController = new AbortController();
    let signal = hmrAbortController.signal;
    let unsub = router.subscribe((state) => {
      if (state.revalidation === "idle" && !signal.aborted) {
        unsub();
        Object.assign(window.__remixManifest, newManifest);
        window.$RefreshRuntime$.performReactRefresh();
      }
    });
    router.revalidate();
  });
}
function RemixBrowser(_props) {
  if (!router) {
    let routes = createClientRoutes(window.__remixManifest.routes, window.__remixRouteModules, window.__remixContext.future);
    let hydrationData = window.__remixContext.state;
    if (hydrationData && hydrationData.errors) {
      hydrationData = {
        ...hydrationData,
        errors: deserializeErrors2(hydrationData.errors)
      };
    }
    router = createBrowserRouter(routes, {
      hydrationData
    });
  }
  let location = (0, import_shim.useSyncExternalStore)(router.subscribe, () => router.state.location, () => router.state.location);
  return /* @__PURE__ */ React4.createElement(RemixContext.Provider, {
    value: {
      manifest: window.__remixManifest,
      routeModules: window.__remixRouteModules,
      future: window.__remixContext.future
    }
  }, /* @__PURE__ */ React4.createElement(RemixErrorBoundary, {
    location,
    component: RemixRootDefaultErrorBoundary
  }, /* @__PURE__ */ React4.createElement(RouterProvider, {
    router,
    fallbackElement: null
  })));
}

// node_modules/@remix-run/react/dist/esm/scroll-restoration.js
var React5 = __toESM(require_react());
init_dist2();
var STORAGE_KEY = "positions";
function ScrollRestoration2({
  getKey,
  ...props
}) {
  let location = useLocation();
  let matches = useMatches2();
  useScrollRestoration({
    getKey,
    storageKey: STORAGE_KEY
  });
  let key = React5.useMemo(
    () => {
      if (!getKey)
        return null;
      let userKey = getKey(location, matches);
      return userKey !== location.key ? userKey : null;
    },
    []
  );
  let restoreScroll = ((STORAGE_KEY2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key2 = Math.random().toString(32).slice(2);
      window.history.replaceState({
        key: key2
      }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY2) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(STORAGE_KEY2);
    }
  }).toString();
  return /* @__PURE__ */ React5.createElement("script", _extends2({}, props, {
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: `(${restoreScroll})(${JSON.stringify(STORAGE_KEY)}, ${JSON.stringify(key)})`
    }
  }));
}

// node_modules/@remix-run/react/dist/esm/index.js
init_dist2();

export {
  useCatch,
  Link2 as Link,
  Links,
  Meta,
  Scripts,
  LiveReload,
  RemixBrowser,
  ScrollRestoration2 as ScrollRestoration,
  require_jsx_dev_runtime
};
//# sourceMappingURL=/build/_shared/chunk-M7ZJGQMJ.js.map
