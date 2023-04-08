import {
  app_default
} from "/build/_shared/chunk-57I75WXF.js";
import {
  Link,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-M7ZJGQMJ.js";
import {
  __toESM,
  init_dist,
  useLoaderData
} from "/build/_shared/chunk-UZZVYDWO.js";

// browser-route-module:routes/index.jsx?browser
init_dist();

// app/components/AddBlock.css
var AddBlock_default = "/build/_assets/AddBlock-E2DNJZVU.css";

// app/components/AddBlock.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AddBlock({ block_name, url }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: AddBlock_default }, void 0, false, {
      fileName: "app/components/AddBlock.jsx",
      lineNumber: 7,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `endpoints/${block_name}`, style: { textDecoration: "none" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "block", className: "block", children: block_name }, void 0, false, {
      fileName: "app/components/AddBlock.jsx",
      lineNumber: 8,
      columnNumber: 82
    }, this) }, void 0, false, {
      fileName: "app/components/AddBlock.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AddBlock.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
var AddBlock_default2 = AddBlock;

// app/components/BlockList.css
var BlockList_default = "/build/_assets/BlockList-47F3UQCL.css";

// app/components/BlockList.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function BlockList({ headerData }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: BlockList_default }, void 0, false, {
      fileName: "app/components/BlockList.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    headerData.map((header) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AddBlock_default2, { block_name: header.service_name, url: header.url }, void 0, false, {
        fileName: "app/components/BlockList.jsx",
        lineNumber: 11,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/components/BlockList.jsx",
        lineNumber: 12,
        columnNumber: 21
      }, this)
    ] }, header.service_name, true, {
      fileName: "app/components/BlockList.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/BlockList.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
var BlockList_default2 = BlockList;

// browser-route-module:routes/index.jsx?browser
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Index() {
  const headerData = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { id: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Want to know which endpoints ??" }, void 0, false, {
      fileName: "browser-route-module:routes/index.jsx?browser",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Try our early beta and never loose track of your endpoints again!" }, void 0, false, {
      fileName: "browser-route-module:routes/index.jsx?browser",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "stylesheet", type: "text/css", href: app_default }, void 0, false, {
        fileName: "browser-route-module:routes/index.jsx?browser",
        lineNumber: 13,
        columnNumber: 12
      }, this),
      " "
    ] }, void 0, true, {
      fileName: "browser-route-module:routes/index.jsx?browser",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "cta", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BlockList_default2, { headerData }, void 0, false, {
      fileName: "browser-route-module:routes/index.jsx?browser",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "browser-route-module:routes/index.jsx?browser",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "browser-route-module:routes/index.jsx?browser",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-QYDXFLWT.js.map
