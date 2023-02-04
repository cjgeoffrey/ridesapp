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
  links: () => links2,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/navigation/MainHeader.jsx
var import_react3 = require("@remix-run/react");

// app/components/navigation/Logo.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: "RideAnalysisApp" }, void 0, !1, {
    fileName: "app/components/navigation/Logo.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/navigation/Logo.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Logo_default = Logo;

// app/styles/MainHeaderStyles.css
var MainHeaderStyles_default = "/build/_assets/MainHeaderStyles-QBYCWGNT.css";

// app/components/navigation/MainHeader.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function MainHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Logo_default, {}, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.NavLink, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.NavLink, { to: "/rides", children: "List of Rides" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.NavLink, { to: "/stations", children: "List of Stations" }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var MainHeader_default = MainHeader;
function links() {
  return [{ rel: "stylesheet", href: MainHeaderStyles_default }];
}

// app/root.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MainHeader_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
function links2() {
  return [...links()];
}

// app/routes/stations/index.jsx
var stations_exports = {};
__export(stations_exports, {
  default: () => RidesInfo,
  links: () => links4,
  loader: () => loader
});
var import_react6 = require("@remix-run/react");

// app/data/database.server.js
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/data/rides.server.js
async function getRidesData({ take, skip }) {
  try {
    return await prisma.ridesData.findMany({
      take,
      skip
    });
  } catch (error) {
    throw error;
  }
}
async function getStationsData({ take, skip }) {
  try {
    return await prisma.stationInfo.findMany({ take, skip });
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
var import_react5 = require("@remix-run/react");

// app/components/RidesList.css
var RidesList_default = "/build/_assets/RidesList-TMTZVEK7.css";

// app/components/StationsList.js
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function StationsList() {
  let stations = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "ride-list", children: stations.stations.map((stations2, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ride", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: stations2.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "ride-info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        "#",
        index + 1
      ] }, void 0, !0, {
        fileName: "app/components/StationsList.js",
        lineNumber: 15,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: stations2.Name }, void 0, !1, {
        fileName: "app/components/StationsList.js",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: stations2.Osoite }, void 0, !1, {
        fileName: "app/components/StationsList.js",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: stations2.Kaupunki }, void 0, !1, {
        fileName: "app/components/StationsList.js",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: stations2.title }, void 0, !1, {
      fileName: "app/components/StationsList.js",
      lineNumber: 21,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: stations2.content }, void 0, !1, {
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
function links3() {
  return [{ rel: "stylesheet", href: RidesList_default }];
}

// app/routes/stations/index.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), PER_PAGE = 20;
function RidesInfo() {
  let stations = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(StationsList_default, {}, void 0, !1, {
    fileName: "app/routes/stations/index.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/stations/index.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
async function loader({ request }) {
  let query = new URL(request.url).searchParams, currentPage = Math.max(Number(query.get("page") || 1), 1), paginationOptions = {
    take: PER_PAGE,
    skip: (currentPage - 1) * PER_PAGE
  };
  return { stations: await getStationsData(paginationOptions), count: 457 };
}
function links4() {
  return [...links3()];
}

// app/routes/stations/$id.jsx
var id_exports = {};
__export(id_exports, {
  default: () => RideDetailsPage,
  links: () => links8,
  loader: () => loader2
});
var import_react14 = require("@remix-run/react");

// app/components/RideInfo.js
var import_react7 = require("react"), import_react8 = require("@remix-run/react");
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), RideInfo = () => {
  let ride = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { id: "ride-list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ride", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ride-info", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: ride.DepartureStationName }, void 0, !1, {
      fileName: "app/components/RideInfo.js",
      lineNumber: 12,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: ride.ReturnStationName }, void 0, !1, {
      fileName: "app/components/RideInfo.js",
      lineNumber: 13,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: ride.DistanceCovered }, void 0, !1, {
      fileName: "app/components/RideInfo.js",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      (ride.DurationInSec / 60).toFixed(0),
      " minutes"
    ] }, void 0, !0, {
      fileName: "app/components/RideInfo.js",
      lineNumber: 15,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/RideInfo.js",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, ride.id, !1, {
    fileName: "app/components/RideInfo.js",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/RideInfo.js",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}, RideInfo_default = RideInfo;
function links5() {
  return [{ rel: "stylesheet", href: RidesList_default }];
}

// app/components/RidesList.js
var import_react11 = require("@remix-run/react");

// app/components/Pagination.js
var import_react9 = require("react"), import_react10 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Pagination = ({
  totalPages = Number.MAX_SAFE_INTEGER,
  pageParam = "page",
  className = "",
  ...attrs
}) => {
  let [queryParams] = (0, import_react10.useSearchParams)(), currentPage = Number(queryParams.get(pageParam) || 1);
  totalPages = Number(totalPages);
  let previousQuery = new URLSearchParams(queryParams);
  previousQuery.set(pageParam, currentPage - 1);
  let nextQuery = new URLSearchParams(queryParams);
  return nextQuery.set(pageParam, currentPage + 1), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "nav",
    {
      id: "main-nav",
      style: {
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        margin: "10px"
      },
      className: ["flex justify-between", className].filter(Boolean).join(" "),
      ...attrs,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { display: "flex", margin: "5px", marginRight: "10vw" }, children: [
          currentPage <= 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Previous Page" }, void 0, !1, {
            fileName: "app/components/Pagination.js",
            lineNumber: 37,
            columnNumber: 30
          }, this),
          currentPage > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: `?${previousQuery.toString()}`, children: "Previous Page" }, void 0, !1, {
            fileName: "app/components/Pagination.js",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Pagination.js",
          lineNumber: 36,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: "5rem"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
                currentPage <= 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "First page" }, void 0, !1, {
                  fileName: "app/components/Pagination.js",
                  lineNumber: 50,
                  columnNumber: 32
                }, this),
                currentPage > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: `?${previousQuery.toString()}`, children: currentPage - 1 }, void 0, !1, {
                  fileName: "app/components/Pagination.js",
                  lineNumber: 52,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Pagination.js",
                lineNumber: 49,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: currentPage }, void 0, !1, {
                fileName: "app/components/Pagination.js",
                lineNumber: 55,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
                currentPage >= totalPages && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Last page" }, void 0, !1, {
                  fileName: "app/components/Pagination.js",
                  lineNumber: 57,
                  columnNumber: 41
                }, this),
                currentPage < totalPages && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: `?${nextQuery.toString()}`, children: currentPage + 1 }, void 0, !1, {
                  fileName: "app/components/Pagination.js",
                  lineNumber: 59,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Pagination.js",
                lineNumber: 56,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Pagination.js",
            lineNumber: 42,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { display: "flex", margin: "5px", marginLeft: "10vw" }, children: [
          currentPage >= totalPages && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { children: "Next Page" }, void 0, !1, {
            fileName: "app/components/Pagination.js",
            lineNumber: 65,
            columnNumber: 39
          }, this),
          currentPage < totalPages && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react10.Link, { to: `?${nextQuery.toString()}`, children: "Next Page" }, void 0, !1, {
            fileName: "app/components/Pagination.js",
            lineNumber: 67,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Pagination.js",
          lineNumber: 64,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Pagination.js",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
}, Pagination_default = Pagination;

// app/components/RidesList.js
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), PER_PAGE2 = 20;
function RidesList() {
  let rides = (0, import_react11.useLoaderData)(), [searchParams] = (0, import_react11.useSearchParams)(), currentPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1, finalPage = Math.ceil(rides.count / PER_PAGE2), prevPage = Math.max(currentPage - 1, finalPage), nextPage = Math.min(currentPage + 1, finalPage);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Pagination_default, { totalPages: rides.count, pageParam: "page" }, void 0, !1, {
      fileName: "app/components/RidesList.js",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { id: "ride-list", children: rides.rides.map((ride, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ride", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react11.Link, { to: ride.id, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("article", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "ride-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: ride.DepartureStationName }, void 0, !1, {
          fileName: "app/components/RidesList.js",
          lineNumber: 31,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: ride.ReturnStationName }, void 0, !1, {
          fileName: "app/components/RidesList.js",
          lineNumber: 32,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          (ride.CoveredDistanceInMeters / 1e3).toFixed(2),
          " Km"
        ] }, void 0, !0, {
          fileName: "app/components/RidesList.js",
          lineNumber: 33,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          (ride.DurationInSec / 60).toFixed(0),
          " minutes"
        ] }, void 0, !0, {
          fileName: "app/components/RidesList.js",
          lineNumber: 36,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/RidesList.js",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { children: ride.title }, void 0, !1, {
        fileName: "app/components/RidesList.js",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: ride.content }, void 0, !1, {
        fileName: "app/components/RidesList.js",
        lineNumber: 40,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/RidesList.js",
      lineNumber: 29,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/RidesList.js",
      lineNumber: 28,
      columnNumber: 13
    }, this) }, ride.id, !1, {
      fileName: "app/components/RidesList.js",
      lineNumber: 27,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/components/RidesList.js",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Pagination_default, { totalPages: rides.count, pageParam: "page" }, void 0, !1, {
      fileName: "app/components/RidesList.js",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/RidesList.js",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
var RidesList_default2 = RidesList;
function links6() {
  return [{ rel: "stylesheet", href: RidesList_default }];
}

// app/components/StationInfo.js
var import_react12 = require("react"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), StationInfo = () => {
  let station = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { id: "ride-list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ride", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react13.Link, { to: "..", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("article", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ride-info", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: station.Name }, void 0, !1, {
      fileName: "app/components/StationInfo.js",
      lineNumber: 22,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: station.Osoite }, void 0, !1, {
      fileName: "app/components/StationInfo.js",
      lineNumber: 23,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: station.Kaupunki }, void 0, !1, {
      fileName: "app/components/StationInfo.js",
      lineNumber: 24,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
      station.Kapasiteet,
      " "
    ] }, void 0, !0, {
      fileName: "app/components/StationInfo.js",
      lineNumber: 25,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 21,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 20,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 19,
    columnNumber: 9
  }, this) }, station.id, !1, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/StationInfo.js",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}, StationInfo_default = StationInfo;
function links7() {
  return [{ rel: "stylesheet", href: RidesList_default }];
}

// app/routes/stations/$id.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function RideDetailsPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(StationInfo_default, {}, void 0, !1, {
    fileName: "app/routes/stations/$id.jsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}
async function loader2({ params }) {
  let stationId = params.id;
  return await getStationData(stationId);
}
function links8() {
  return [...links7()];
}

// app/routes/rides/index.jsx
var rides_exports = {};
__export(rides_exports, {
  default: () => RidesInfo2,
  links: () => links9,
  loader: () => loader3
});
var import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), PER_PAGE3 = 60;
function RidesInfo2() {
  let match = (0, import_react15.useMatches)(), loaderData = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(RidesList_default2, {}, void 0, !1, {
    fileName: "app/routes/rides/index.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/rides/index.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
async function loader3({ request }) {
  let query = new URL(request.url).searchParams, currentPage = Math.max(Number(query.get("page") || 1), 1), paginationOptions = {
    take: PER_PAGE3,
    skip: (currentPage - 1) * PER_PAGE3
  };
  return { rides: await getRidesData(paginationOptions), count: 3131088 };
}
function links9() {
  return [...links6()];
}

// app/routes/rides/$id.jsx
var id_exports2 = {};
__export(id_exports2, {
  default: () => RideDetailsPage2,
  links: () => links10,
  loader: () => loader4
});
var import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function RideDetailsPage2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(RideInfo_default, {}, void 0, !1, {
    fileName: "app/routes/rides/$id.jsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}
async function loader4({ params }) {
  let rideId = params.id;
  return await getRideData(rideId);
}
function links10() {
  return [...links5()];
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links11
});
var import_react17 = require("@remix-run/react");

// app/styles/homeStyles.css
var homeStyles_default = "/build/_assets/homeStyles-PUNR4TAF.css";

// app/routes/index.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "homeContainer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { children: "Welcome to Rides App " }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "div",
      {
        className: "homeLinksContainer",
        style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "homeLinks", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.Link, { to: "/rides", children: "Rides" }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 12,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "homeLinks", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react17.Link, { to: "/stations", children: "Stations" }, void 0, !1, {
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
function links11() {
  return [{ rel: "stylesheet", href: homeStyles_default }];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1338e386", entry: { module: "/build/entry.client-CTWZ3OUB.js", imports: ["/build/_shared/chunk-CYEYFCYX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BJ5SBCZU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-Y7GBRV3J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rides/$id": { id: "routes/rides/$id", parentId: "root", path: "rides/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/rides/$id-LDDMWAL5.js", imports: ["/build/_shared/chunk-O6C2RKYB.js", "/build/_shared/chunk-5SP5FHKH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/rides/index": { id: "routes/rides/index", parentId: "root", path: "rides", index: !0, caseSensitive: void 0, module: "/build/routes/rides/index-M7FCB2IK.js", imports: ["/build/_shared/chunk-YCWOJM4P.js", "/build/_shared/chunk-5SP5FHKH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stations/$id": { id: "routes/stations/$id", parentId: "root", path: "stations/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/stations/$id-QIP6GHQ5.js", imports: ["/build/_shared/chunk-YCWOJM4P.js", "/build/_shared/chunk-O6C2RKYB.js", "/build/_shared/chunk-5SP5FHKH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stations/index": { id: "routes/stations/index", parentId: "root", path: "stations", index: !0, caseSensitive: void 0, module: "/build/routes/stations/index-XK6ML2OJ.js", imports: ["/build/_shared/chunk-5SP5FHKH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-1338E386.js" };

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
