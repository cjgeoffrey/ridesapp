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

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
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
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/stations/index.jsx
var stations_exports = {};
__export(stations_exports, {
  default: () => RidesInfo,
  links: () => links2,
  loader: () => loader
});
var import_react4 = require("@remix-run/react");

// app/data/database.server.js
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/rides.server.js
async function getRidesData() {
  try {
    return await prisma.ridesData.findMany({ take: 5 });
  } catch (error) {
    throw error;
  }
}
async function getStationsData() {
  try {
    return await prisma.stationInfo.findMany({ take: 5 });
  } catch (error) {
    throw error;
  }
}
async function getRideData(id) {
  try {
    return await prisma.ridesData.findFirst({ where: { id } });
  } catch (error) {
    throw error;
  }
}
async function getStationData(id) {
  try {
    return await prisma.stationInfo.findFirst({ where: { id } });
  } catch (error) {
    throw error;
  }
}

// app/components/StationsList.js
var import_react3 = require("@remix-run/react");

// app/components/RidesList.css
var RidesList_default = "/build/_assets/RidesList-7B2X3ZWN.css";

// app/components/StationsList.js
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function StationsList() {
  let stations = (0, import_react3.useLoaderData)();
  return console.log(stations), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "ride-list", children: stations.map((stations2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ride", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: stations2.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ride-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        "#",
        index + 1
      ] }, void 0, !0, {
        fileName: "app/components/StationsList.js",
        lineNumber: 15,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: stations2.Name }, void 0, !1, {
        fileName: "app/components/StationsList.js",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: stations2.Osoite }, void 0, !1, {
        fileName: "app/components/StationsList.js",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: stations2.Kaupunki }, void 0, !1, {
        fileName: "app/components/StationsList.js",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        stations2.Kapasiteet,
        " "
      ] }, void 0, !0, {
        fileName: "app/components/StationsList.js",
        lineNumber: 19,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/StationsList.js",
      lineNumber: 14,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: stations2.title }, void 0, !1, {
      fileName: "app/components/StationsList.js",
      lineNumber: 21,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: stations2.content }, void 0, !1, {
      fileName: "app/components/StationsList.js",
      lineNumber: 23,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/StationsList.js",
    lineNumber: 13,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/StationsList.js",
    lineNumber: 12,
    columnNumber: 11
  }, this) }, stations2.id, !1, {
    fileName: "app/components/StationsList.js",
    lineNumber: 10,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/StationsList.js",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var StationsList_default = StationsList;
function links() {
  return [{ rel: "stylesheet", href: RidesList_default }];
}

// app/routes/stations/index.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function RidesInfo() {
  let stations = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(StationsList_default, {}, void 0, !1, {
    fileName: "app/routes/stations/index.jsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/stations/index.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
async function loader() {
  return await getStationsData();
}
function links2() {
  return [...links()];
}

// app/routes/stations/$id.jsx
var id_exports = {};
__export(id_exports, {
  default: () => RideDetailsPage,
  loader: () => loader2
});
var import_react10 = require("@remix-run/react");

// app/components/RideInfo.js
var import_react5 = require("react"), import_react6 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), RideInfo = () => {
  let ride = (0, import_react6.useLoaderData)();
  return console.log(ride), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "ride-list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ride", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Link, { to: "..", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ride-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: ride.DepartureStationName }, void 0, !1, {
        fileName: "app/components/RideInfo.js",
        lineNumber: 23,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: ride.ReturnStationName }, void 0, !1, {
        fileName: "app/components/RideInfo.js",
        lineNumber: 25,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: ride.DistanceCovered }, void 0, !1, {
        fileName: "app/components/RideInfo.js",
        lineNumber: 26,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        (ride.DurationInSec / 60).toFixed(0),
        " minutes"
      ] }, void 0, !0, {
        fileName: "app/components/RideInfo.js",
        lineNumber: 27,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/RideInfo.js",
      lineNumber: 20,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: ride.title }, void 0, !1, {
      fileName: "app/components/RideInfo.js",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: ride.content }, void 0, !1, {
      fileName: "app/components/RideInfo.js",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/RideInfo.js",
    lineNumber: 19,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/RideInfo.js",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, ride.id, !1, {
    fileName: "app/components/RideInfo.js",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/RideInfo.js",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, RideInfo_default = RideInfo;

// app/components/RidesList.js
var import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function RideList() {
  let rides = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { id: "ride-list", children: rides.map((ride, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ride", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: ride.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ride-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: ride.id }, void 0, !1, {
        fileName: "app/components/RidesList.js",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        "Ride #",
        index + 1
      ] }, void 0, !0, {
        fileName: "app/components/RidesList.js",
        lineNumber: 19,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: ride.DepartureStationName }, void 0, !1, {
        fileName: "app/components/RidesList.js",
        lineNumber: 21,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: ride.ReturnStationName }, void 0, !1, {
        fileName: "app/components/RidesList.js",
        lineNumber: 23,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: ride.DistanceCovered }, void 0, !1, {
        fileName: "app/components/RidesList.js",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        (ride.DurationInSec / 60).toFixed(0),
        " minutes"
      ] }, void 0, !0, {
        fileName: "app/components/RidesList.js",
        lineNumber: 25,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/RidesList.js",
      lineNumber: 17,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: ride.title }, void 0, !1, {
      fileName: "app/components/RidesList.js",
      lineNumber: 27,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: ride.content }, void 0, !1, {
      fileName: "app/components/RidesList.js",
      lineNumber: 29,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/RidesList.js",
    lineNumber: 16,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/RidesList.js",
    lineNumber: 15,
    columnNumber: 11
  }, this) }, ride.id, !1, {
    fileName: "app/components/RidesList.js",
    lineNumber: 14,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/RidesList.js",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var RidesList_default2 = RideList;
function links3() {
  return [{ rel: "stylesheet", href: RidesList_default }];
}

// app/components/StationInfo.js
var import_react8 = require("react"), import_react9 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), StationInfo = () => {
  let station = (0, import_react9.useLoaderData)();
  return console.log(station), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { id: "ride-list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ride", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react9.Link, { to: "..", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("article", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ride-info", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: station.Name }, void 0, !1, {
      fileName: "app/components/StationInfo.js",
      lineNumber: 21,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: station.Osoite }, void 0, !1, {
      fileName: "app/components/StationInfo.js",
      lineNumber: 22,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: station.Kaupunki }, void 0, !1, {
      fileName: "app/components/StationInfo.js",
      lineNumber: 23,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      station.Kapasiteet,
      " "
    ] }, void 0, !0, {
      fileName: "app/components/StationInfo.js",
      lineNumber: 24,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 20,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 19,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, station.id, !1, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}, StationInfo_default = StationInfo;

// app/routes/stations/$id.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function RideDetailsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(StationInfo_default, {}, void 0, !1, {
    fileName: "app/routes/stations/$id.jsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
async function loader2({ params }) {
  let stationId = params.id;
  return await getStationData(stationId);
}

// app/routes/rides/index.jsx
var rides_exports = {};
__export(rides_exports, {
  default: () => RidesInfo2,
  links: () => links4,
  loader: () => loader3
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function RidesInfo2() {
  let match = (0, import_react11.useMatches)(), loaderData = (0, import_react11.useLoaderData)();
  return console.log(match), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(RidesList_default2, {}, void 0, !1, {
    fileName: "app/routes/rides/index.jsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/rides/index.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
async function loader3() {
  return await getRidesData();
}
function links4() {
  return [...links3()];
}

// app/routes/rides/$id.jsx
var id_exports2 = {};
__export(id_exports2, {
  default: () => RideDetailsPage2,
  loader: () => loader4
});
var import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function RideDetailsPage2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(RideInfo_default, {}, void 0, !1, {
    fileName: "app/routes/rides/$id.jsx",
    lineNumber: 7,
    columnNumber: 10
  }, this);
}
async function loader4({ params }) {
  let rideId = params.id;
  return await getRideData(rideId);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links5
});
var import_react13 = require("@remix-run/react");

// app/styles/homeStyles.css
var homeStyles_default = "/build/_assets/homeStyles-QYYRYTE4.css";

// app/routes/index.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Welcome to Rides App " }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "div",
      {
        className: "homeLinksContainer",
        style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "homeLinks", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.Link, { to: "/rides", children: "Rides" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 12,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "homeLinks", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react13.Link, { to: "/stations", children: "Stations" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 15,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 14,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
function links5() {
  return [{ rel: "stylesheet", href: homeStyles_default }];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "a3903a61", entry: { module: "/build/entry.client-VJU2H4NI.js", imports: ["/build/_shared/chunk-MDT4NZEN.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-Y5B2G6ZN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-3A5ASSUK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rides/$id": { id: "routes/rides/$id", parentId: "root", path: "rides/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/rides/$id-GQ2IYFA6.js", imports: ["/build/_shared/chunk-6IWTQNT4.js", "/build/_shared/chunk-HHKDFGNR.js", "/build/_shared/chunk-A6L3L2TH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rides/index": { id: "routes/rides/index", parentId: "root", path: "rides", index: !0, caseSensitive: void 0, module: "/build/routes/rides/index-JBYGGAJZ.js", imports: ["/build/_shared/chunk-HHKDFGNR.js", "/build/_shared/chunk-A6L3L2TH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stations/$id": { id: "routes/stations/$id", parentId: "root", path: "stations/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/stations/$id-6TU4G6MN.js", imports: ["/build/_shared/chunk-6IWTQNT4.js", "/build/_shared/chunk-HHKDFGNR.js", "/build/_shared/chunk-A6L3L2TH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stations/index": { id: "routes/stations/index", parentId: "root", path: "stations", index: !0, caseSensitive: void 0, module: "/build/routes/stations/index-M223IRZW.js", imports: ["/build/_shared/chunk-A6L3L2TH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-A3903A61.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/stations/index": {
    id: "routes/stations/index",
    parentId: "root",
    path: "stations",
    index: !0,
    caseSensitive: void 0,
    module: stations_exports
  },
  "routes/stations/$id": {
    id: "routes/stations/$id",
    parentId: "root",
    path: "stations/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/rides/index": {
    id: "routes/rides/index",
    parentId: "root",
    path: "rides",
    index: !0,
    caseSensitive: void 0,
    module: rides_exports
  },
  "routes/rides/$id": {
    id: "routes/rides/$id",
    parentId: "root",
    path: "rides/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
