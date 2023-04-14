var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/components/swagger-ui.css
var swagger_ui_default = "/build/_assets/swagger-ui-DSYJRK5L.css";

// app/components/MainNavigation.jsx
var import_react2 = require("@remix-run/react");

// images/Logo.png
var Logo_default = "/build/_assets/Logo-DRLVUYQT.png";

// app/components/MainNavigation.css
var MainNavigation_default = "/build/_assets/MainNavigation-XXN3PBLP.css";

// app/components/MainNavigation.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: MainNavigation_default }, void 0, !1, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "menu-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", className: "logo-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "logo", src: Logo_default, alt: "Logo" }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "checkbox", id: "nav-tog" }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "nav-tog", className: "drop-trigger", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn-bar top" }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn-bar middle" }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn-bar bottom" }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "main-nav", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "nav-tog", className: "nav-revert" }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Home" }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 23,
          columnNumber: 45
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: " Sign out " }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 24,
          columnNumber: 45
        }, this) }, void 0, !1, {
          fileName: "app/components/MainNavigation.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var MainNavigation_default2 = MainNavigation;

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Rate Limit Config",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: swagger_ui_default }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default2, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  var _a;
  let caughtResponse = (0, import_react3.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: caughtResponse.statusText }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default2, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: caughtResponse.statusText }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong!" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "safety" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          "!"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "An error occurred!" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainNavigation_default2, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 78,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "An error occurred!" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/", children: "safety" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 84,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

// app/routes/endpoints.$service_name.jsx
var endpoints_service_name_exports = {};
__export(endpoints_service_name_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => DisplayPage,
  loader: () => loader
});
var import_react_router = require("react-router");

// app/components/FormGenerator.jsx
var import_swagger_ui_dist = require("swagger-ui-dist"), import_react4 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function FormRender() {
  return (0, import_react4.useEffect)(() => {
    if (typeof window < "u") {
      let HideInfoUrlPartsPlugin = () => ({
        wrapComponents: {
          InfoUrl: () => () => null,
          ServiceWorkerRegistration: () => () => null
        }
      }), ui = (0, import_swagger_ui_dist.SwaggerUIBundle)({
        url: "../RLS.yml",
        dom_id: "#form-display",
        supportedSubmitMethods: ["post", "get"],
        presets: [
          import_swagger_ui_dist.SwaggerUIBundle.presets.apis,
          import_swagger_ui_dist.SwaggerUIStandalonePreset
        ],
        presets_config: {
          SwaggerUIStandalonePreset: {
            TopbarPlugin: !1
          }
        },
        plugins: [
          import_swagger_ui_dist.SwaggerUIBundle.plugins.DownloadUrl,
          HideInfoUrlPartsPlugin
        ],
        onComplete: function() {
          let spec = ui.specSelectors.specJson().toJS(), servers = spec.servers || [];
          ui.specActions.updateJsonSpec(spec);
        }
      });
    }
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { id: "form-display" }, void 0, !1, {
    fileName: "app/components/FormGenerator.jsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/FormGenerator.jsx",
    lineNumber: 47,
    columnNumber: 9
  }, this);
}
function FormGenerator() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FormRender, {}, void 0, !1, {
    fileName: "app/components/FormGenerator.jsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
}
var FormGenerator_default = FormGenerator;

// app/routes/endpoints.$service_name.jsx
var import_react5 = require("@remix-run/react");

// function/helper.js
var import_promises = __toESM(require("fs/promises"));
async function getHeaders() {
  let rawFileContent = await import_promises.default.readFile("roles.json", { encoding: "utf-8" });
  return JSON.parse(rawFileContent).headers ?? [];
}
async function sampleRole() {
  var base64 = require("base-64");
  let rawFileContent = await import_promises.default.readFile("id_token", { encoding: "utf-8" }), b64 = JSON.parse(rawFileContent), decodedString = base64.decode(b64);
  return JSON.parse(decodedString).roles;
}
async function getAccessRole(path) {
  let service = (await getHeaders()).find((h) => h.service_name === path), serviceRole = service ? service.roles : null;
  return !!(await sampleRole()).some((role) => serviceRole == null ? void 0 : serviceRole.includes(role));
}

// styles/index.css
var styles_default = "/build/_assets/index-TI6K46R7.css";

// app/routes/endpoints.$service_name.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function DisplayPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: styles_default }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FormGenerator_default, {}, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/endpoints.$service_name.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
async function loader({ params }) {
  if (!await getAccessRole(params.service_name))
    throw (0, import_react_router.json)(
      { message: "You cannot access the page" },
      {
        status: 404,
        statusText: "No access found"
      }
    );
  return params;
}
function CatchBoundary2() {
  var _a;
  let message = ((_a = (0, import_react5.useCatch)().data) == null ? void 0 : _a.message) || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "info-message", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "An error occurred!" }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 38,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: message }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 39,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/routes/endpoints.$service_name.jsx",
        lineNumber: 41,
        columnNumber: 15
      }, this),
      "!"
    ] }, void 0, !0, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 40,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/endpoints.$service_name.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "An error occurred!" }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/routes/endpoints.$service_name.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      "!"
    ] }, void 0, !0, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/endpoints.$service_name.jsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_react_router2 = require("react-router");

// app/components/AddBlock.jsx
var import_react6 = require("@remix-run/react");

// app/components/AddBlock.css
var AddBlock_default = "/build/_assets/AddBlock-H4FHNYKY.css";

// app/components/AddBlock.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AddBlock({ block_name, url }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: AddBlock_default }, void 0, !1, {
      fileName: "app/components/AddBlock.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Link, { to: `endpoints/${block_name}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "custom-btn btn-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: block_name }, void 0, !1, {
      fileName: "app/components/AddBlock.jsx",
      lineNumber: 9,
      columnNumber: 54
    }, this) }, void 0, !1, {
      fileName: "app/components/AddBlock.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/AddBlock.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AddBlock.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
var AddBlock_default2 = AddBlock;

// app/components/BlockList.css
var BlockList_default = "/build/_assets/BlockList-47F3UQCL.css";

// app/components/BlockList.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function BlockList({ headerData }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: BlockList_default }, void 0, !1, {
      fileName: "app/components/BlockList.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    headerData.map((header) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AddBlock_default2, { block_name: header.service_name, url: header.url }, header.service_name, !1, {
      fileName: "app/components/BlockList.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/BlockList.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
var BlockList_default2 = BlockList;

// app/routes/index.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Index() {
  let headerData = (0, import_react_router2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { id: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: styles_default }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Want to know which endpoints ??" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Try our early beta and never loose track of your endpoints again!" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "cta", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(BlockList_default2, { headerData }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
async function loader2({ params }) {
  let head = await getHeaders(), headDetails = await sampleRole(), selectedService = head.filter((service) => service.roles.some((role) => headDetails.includes(role)));
  if (!selectedService)
    throw (0, import_react_router2.json)(
      { message: "You cannot access this page " },
      { status: 404 }
    );
  return selectedService;
}

// app/routes/$.jsx
var __exports = {};
__export(__exports, {
  action: () => action,
  loader: () => loader3
});
var import_react_router3 = require("react-router"), import_axios = __toESM(require("axios"));
async function action({ request }) {
  var _a;
  let path = (_a = request == null ? void 0 : request.headers) == null ? void 0 : _a.get("Referer").split("/").pop();
  if (getAccessRole(path)) {
    let result = await request;
    return (await import_axios.default.post("https://hkdk.events/5qKuXBcslFYE", result)).data;
  } else
    throw (0, import_react_router3.json)(
      { message: "You cannot access the page" },
      {
        status: 404,
        statusText: "No access found"
      }
    );
}
async function loader3({ request }) {
  var _a;
  let path = (_a = request == null ? void 0 : request.headers) == null ? void 0 : _a.get("Referer").split("/").pop();
  if (getAccessRole(path))
    return (await import_axios.default.get("https://fakestoreapi.com/products/1")).data;
  throw (0, import_react_router3.json)(
    { message: "You cannot access the page" },
    {
      status: 404,
      statusText: "No access found"
    }
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "6adeeb40", entry: { module: "/build/entry.client-TLEEKFZ7.js", imports: ["/build/_shared/chunk-M7ZJGQMJ.js", "/build/_shared/chunk-UZZVYDWO.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HWYXHYYH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-NWUUNZXA.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/endpoints.$service_name": { id: "routes/endpoints.$service_name", parentId: "root", path: "endpoints/:service_name", index: void 0, caseSensitive: void 0, module: "/build/routes/endpoints.$service_name-H4SAM4RX.js", imports: ["/build/_shared/chunk-URN4G5B6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GBR2VQCT.js", imports: ["/build/_shared/chunk-URN4G5B6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-6ADEEB40.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/endpoints.$service_name": {
    id: "routes/endpoints.$service_name",
    parentId: "root",
    path: "endpoints/:service_name",
    index: void 0,
    caseSensitive: void 0,
    module: endpoints_service_name_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
