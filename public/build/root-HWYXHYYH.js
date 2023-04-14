import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  require_jsx_dev_runtime,
  useCatch
} from "/build/_shared/chunk-M7ZJGQMJ.js";
import {
  Outlet,
  __toESM
} from "/build/_shared/chunk-UZZVYDWO.js";

// app/components/swagger-ui.css
var swagger_ui_default = "/build/_assets/swagger-ui-DSYJRK5L.css";

// images/Logo.png
var Logo_default = "/build/_assets/Logo-DRLVUYQT.png";

// app/components/MainNavigation.css
var MainNavigation_default = "/build/_assets/MainNavigation-XXN3PBLP.css";

// app/components/MainNavigation.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: MainNavigation_default }, void 0, false, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "logo-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "logo", src: Logo_default, alt: "Logo" }, void 0, false, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: "nav-tog" }, void 0, false, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "nav-tog", className: "drop-trigger", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-bar top" }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-bar middle" }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-bar bottom" }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "main-nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "nav-tog", className: "nav-revert" }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Home" }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 23,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: " Sign out " }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 24,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var MainNavigation_default2 = MainNavigation;

// browser-route-module:root.jsx?browser
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "Rate Limit Config",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: swagger_ui_default }, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:root.jsx?browser",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainNavigation_default2, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:root.jsx?browser",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "browser-route-module:root.jsx?browser",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  const caughtResponse = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: caughtResponse.statusText }, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:root.jsx?browser",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainNavigation_default2, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: caughtResponse.statusText }, void 0, false, {
          fileName: "browser-route-module:root.jsx?browser",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: caughtResponse.data?.message || "Something went wrong!" }, void 0, false, {
          fileName: "browser-route-module:root.jsx?browser",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
            fileName: "browser-route-module:root.jsx?browser",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          "!"
        ] }, void 0, true, {
          fileName: "browser-route-module:root.jsx?browser",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:root.jsx?browser",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "browser-route-module:root.jsx?browser",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "An error occurred!" }, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:root.jsx?browser",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainNavigation_default2, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 78,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "An error occurred!" }, void 0, false, {
          fileName: "browser-route-module:root.jsx?browser",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, false, {
          fileName: "browser-route-module:root.jsx?browser",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: "safety" }, void 0, false, {
            fileName: "browser-route-module:root.jsx?browser",
            lineNumber: 84,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "browser-route-module:root.jsx?browser",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "browser-route-module:root.jsx?browser",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:root.jsx?browser",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "browser-route-module:root.jsx?browser",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  meta
};
//# sourceMappingURL=/build/root-HWYXHYYH.js.map
