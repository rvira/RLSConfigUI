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
var import_react2 = require("@remix-run/react");

// app/components/swagger-ui.css
var swagger_ui_default = "/build/_assets/swagger-ui-DSYJRK5L.css";

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: swagger_ui_default }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  var _a;
  let caughtResponse = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: caughtResponse.statusText }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: caughtResponse.statusText }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong!" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "safety" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 55,
            columnNumber: 21
          }, this),
          "!"
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "An error occurred!" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "An error occurred!" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error.message }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "safety" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 82,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 68,
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
var import_swagger_ui_dist = require("swagger-ui-dist"), import_react3 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function FormRender() {
  return (0, import_react3.useEffect)(() => {
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "form-display" }, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormRender, {}, void 0, !1, {
    fileName: "app/components/FormGenerator.jsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
}
var FormGenerator_default = FormGenerator;

// app/routes/endpoints.$service_name.jsx
var import_react4 = require("@remix-run/react");

// data/notes.js
var import_js_yaml = __toESM(require("js-yaml")), import_promises = __toESM(require("fs/promises"));
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
  return !!(await sampleRole()).some((role) => serviceRole.includes(role));
}

// app/index.css
var app_default = "/build/_assets/index-Q3UVDF5T.css";

// app/routes/endpoints.$service_name.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function DisplayPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: app_default }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FormGenerator_default, {}, void 0, !1, {
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
  let message = ((_a = (0, import_react4.useCatch)().data) == null ? void 0 : _a.message) || "Data not found.";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "info-message", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "An error occurred!" }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 38,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: message }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 39,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", children: "safety" }, void 0, !1, {
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
  return console.log(error), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "An error related to your notes occurred!" }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: error.message }, void 0, !1, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", children: "safety" }, void 0, !1, {
        fileName: "app/routes/endpoints.$service_name.jsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      "!"
    ] }, void 0, !0, {
      fileName: "app/routes/endpoints.$service_name.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/endpoints.$service_name.jsx",
    lineNumber: 49,
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
var import_react5 = require("@remix-run/react");

// app/components/AddBlock.css
var AddBlock_default = "/build/_assets/AddBlock-E2DNJZVU.css";

// app/components/AddBlock.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function AddBlock({ block_name, url }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: AddBlock_default }, void 0, !1, {
      fileName: "app/components/AddBlock.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: `endpoints/${block_name}`, style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "block", className: "block", children: block_name }, void 0, !1, {
      fileName: "app/components/AddBlock.jsx",
      lineNumber: 8,
      columnNumber: 82
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
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function BlockList({ headerData }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ol", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: BlockList_default }, void 0, !1, {
      fileName: "app/components/BlockList.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    headerData.map((header) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AddBlock_default2, { block_name: header.service_name, url: header.url }, void 0, !1, {
        fileName: "app/components/BlockList.jsx",
        lineNumber: 11,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
        fileName: "app/components/BlockList.jsx",
        lineNumber: 12,
        columnNumber: 21
      }, this)
    ] }, header.service_name, !0, {
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
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Index() {
  let headerData = (0, import_react_router2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { id: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Want to know which endpoints ??" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Try our early beta and never loose track of your endpoints again!" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: app_default }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 13,
        columnNumber: 12
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { id: "cta", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BlockList_default2, { headerData }, void 0, !1, {
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
async function action({ request, params }) {
  let par = params["*"] || "", path = request.headers.get("Referer").split("/").pop();
  if (getAccessRole(path)) {
    let result = await request.json(), res = await import_axios.default.post("https://hkdk.events/5qKuXBcslFYE", result);
    return (0, import_react_router3.json)(res.data);
  } else
    throw (0, import_react_router3.json)(
      { message: "You cannot access the page" },
      {
        status: 404,
        statusText: "No access found"
      }
    );
}
async function loader3({ request, params }) {
  let par = params["*"] || "", path = request.headers.get("Referer").split("/").pop();
  if (SomeComponent(path)) {
    let res = await import_axios.default.get("https://fakestoreapi.com/products");
    return (0, import_react_router3.json)(res.data);
  } else
    throw (0, import_react_router3.json)(
      { message: "You cannot access the page" },
      {
        status: 404,
        statusText: "No access found"
      }
    );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "7e7610f0", entry: { module: "/build/entry.client-TLEEKFZ7.js", imports: ["/build/_shared/chunk-M7ZJGQMJ.js", "/build/_shared/chunk-UZZVYDWO.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-4BUJVBBX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-GIIIA4B2.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/endpoints.$service_name": { id: "routes/endpoints.$service_name", parentId: "root", path: "endpoints/:service_name", index: void 0, caseSensitive: void 0, module: "/build/routes/endpoints.$service_name-E4PTM2OB.js", imports: ["/build/_shared/chunk-57I75WXF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-QYDXFLWT.js", imports: ["/build/_shared/chunk-57I75WXF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-7E7610F0.js" };

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
