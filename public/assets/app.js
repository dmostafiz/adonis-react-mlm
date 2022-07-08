/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.tsx":
/*!******************************!*\
  !*** ./resources/js/app.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;
exports.theme = void 0;

__webpack_require__(/*! ../css/app.css */ "./resources/css/app.css");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_dom_1 = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var react_2 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_3 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js"); // import { InertiaProgress } from '@inertiajs/progress'


var nprogress_1 = __importDefault(__webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js"));

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

__webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");

var react_moralis_1 = __webpack_require__(/*! react-moralis */ "./node_modules/react-moralis/lib/index.esm.js");

var timeout = null;
inertia_1.Inertia.on('start', function () {
  timeout = setTimeout(function () {
    return nprogress_1["default"].start();
  }, 250);
});
inertia_1.Inertia.on('progress', function (event) {
  var _a, _b;

  if (nprogress_1["default"].isStarted() && ((_a = event.detail.progress) === null || _a === void 0 ? void 0 : _a.percentage)) {
    nprogress_1["default"].set(((_b = event.detail.progress) === null || _b === void 0 ? void 0 : _b.percentage) / 100 * 0.9);
  }
});
inertia_1.Inertia.on('finish', function (event) {
  clearTimeout(timeout);

  if (!nprogress_1["default"].isStarted()) {
    return;
  } else if (event.detail.visit.completed) {
    nprogress_1["default"].done();
  } else if (event.detail.visit.interrupted) {
    nprogress_1["default"].set(0);
  } else if (event.detail.visit.cancelled) {
    nprogress_1["default"].done();
    nprogress_1["default"].remove();
  }
});

function variantOutlined() {
  return {
    field: {
      _focus: {
        borderColor: "var(--chakra-ui-focus-ring-color)",
        boxShadow: "0 0 0 0px var(--chakra-ui-focus-ring-color)"
      }
    }
  };
}

var variantFilled = function variantFilled() {
  return {
    field: {
      _focus: {
        borderColor: "var(--chakra-ui-focus-ring-color)",
        boxShadow: "0 0 0 0px var(--chakra-ui-focus-ring-color)"
      }
    }
  };
};

var variantFlushed = function variantFlushed() {
  return {
    field: {
      _focus: {
        borderColor: "var(--chakra-ui-focus-ring-color)",
        boxShadow: "0 0px 0 0 var(--chakra-ui-focus-ring-color)"
      }
    }
  };
};

exports.theme = (0, react_3.extendTheme)({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },
  styles: {
    global: {
      // Create a CSS variable with the focus ring color desired.
      // rgba function does not work here so use the hex value.
      // Either :host,:root or html work. body does not work for
      // button, checkbox, radio, switch.
      // html: {
      ":host,:root": {
        "--chakra-ui-focus-ring-color": "#553C9A"
      }
    }
  },
  shadows: {
    // This is also possible. Not sure I like inject this into
    // an existing theme section.
    // It creates a CSS variable named --chakra-shadows-focus-ring-color
    // 'focus-ring-color': 'rgba(255, 0, 125, 0.6)',
    outline: "0 0 0 0px var(--chakra-ui-focus-ring-color)"
  },
  components: {
    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed
      }
    },
    Select: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed
      }
    },
    Textarea: {
      variants: {
        outline: function outline() {
          return variantOutlined().field;
        },
        filled: function filled() {
          return variantFilled().field;
        },
        flushed: function flushed() {
          return variantFlushed().field;
        }
      }
    }
  }
}); // Just care about this

var el = document.getElementById('app');
(0, react_dom_1.render)(react_1["default"].createElement(react_moralis_1.MoralisProvider, {
  serverUrl: "https://cyda95aqcddb.usemoralis.com:2053/server",
  appId: "DowdJImLoEmlmcACailftRRJMktb3HXtLoq5zPBF"
}, react_1["default"].createElement(react_2.ChakraProvider, {
  theme: exports.theme
}, react_1["default"].createElement(inertia_react_1.InertiaApp // Pass props from the server down to the client app
, {
  // Pass props from the server down to the client app
  initialPage: JSON.parse((el === null || el === void 0 ? void 0 : el.dataset.page) || ''),
  // Dynamically load the required page component
  resolveComponent: function resolveComponent(name) {
    return Promise.resolve().then(function () {
      return __importStar(__webpack_require__("./resources/js/src/Pages sync recursive ^\\.\\/.*$")("./".concat(name)));
    }).then(function (module) {
      return module["default"];
    });
  },
  initialComponent: ''
}))), el);

/***/ }),

/***/ "./resources/js/src/Components/AdminPanel/Charts/InvitationClicks.tsx":
/*!****************************************************************************!*\
  !*** ./resources/js/src/Components/AdminPanel/Charts/InvitationClicks.tsx ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_apexcharts_1 = __importDefault(__webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));

function InvitationClicks() {
  var _a = (0, react_2.useState)([]),
      categories = _a[0],
      setCategories = _a[1];

  var _b = (0, react_2.useState)([]),
      chartData = _b[0],
      setChartData = _b[1];

  var _c = (0, react_2.useState)(0),
      clickCount = _c[0],
      setClickCount = _c[1];

  var _d = (0, react_2.useState)(true),
      loading = _d[0],
      setLoading = _d[1];

  var options = {
    chart: {
      id: "basic-bar",
      width: '500px'
    },
    xaxis: {
      categories: categories
    },
    colors: ['#553C9A']
  };
  var series = [{
    name: "Clicks",
    data: chartData
  }];

  var _e = (0, react_2.useState)('30days'),
      option = _e[0],
      setOption = _e[1];

  (0, react_2.useEffect)(function () {
    function getStatistics() {
      return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , axios_1["default"].get("/api/all_invitation_clicks/?option=".concat(option))];

            case 1:
              res = _a.sent();
              console.log('Response: ', res.data.chartData);

              if (res.data) {
                setCategories(res.data.categories);
                setChartData(res.data.chartData);
                setClickCount(res.data.clickCount);
                setLoading(false);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    }

    getStatistics();
  }, [option]);
  return react_2["default"].createElement(react_2["default"].Fragment, null, react_2["default"].createElement(react_1.Box, {
    pb: '5px',
    mb: '25px',
    borderBottom: '1px solid #E7E3F0'
  }, react_2["default"].createElement(react_1.chakra.p, {
    mb: 1,
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: (0, react_1.useColorModeValue)("gray.500", "gray.400")
  }, "Last ", option == '7days' ? '7 days' : option == '30days' ? '30 days' : '12 months', "  statistics"), react_2["default"].createElement(react_1.Flex, {
    justify: 'space-between'
  }, react_2["default"].createElement(react_1.Text, {
    mb: 2,
    fontSize: "3xl",
    fontWeight: ["bold", "extrabold"],
    color: (0, react_1.useColorModeValue)("gray.900", "gray.50"),
    lineHeight: "tight"
  }, clickCount, react_2["default"].createElement(react_1.chakra.span, {
    fontSize: "md",
    fontWeight: "medium",
    color: (0, react_1.useColorModeValue)("gray.600", "gray.400")
  }, " ", "Clicks")), react_2["default"].createElement(react_1.Select, {
    onChange: function onChange(e) {
      return setOption(e.target.value);
    },
    value: option,
    w: 'auto',
    size: 'xs'
  }, react_2["default"].createElement("option", {
    value: '7days'
  }, "Last 7 days"), react_2["default"].createElement("option", {
    value: '30days'
  }, "Last 30 days"), react_2["default"].createElement("option", {
    value: '12months'
  }, "Last 12 months")))), loading ? react_2["default"].createElement(react_1.Center, {
    h: '50%'
  }, react_2["default"].createElement(react_1.Spinner, {
    size: 'xl'
  })) : chartData.length ? react_2["default"].createElement(react_apexcharts_1["default"], {
    options: options,
    series: series,
    type: "bar"
  }) : react_2["default"].createElement(react_1.Center, {
    h: '100px'
  }, "No data found"));
}

exports["default"] = InvitationClicks;

/***/ }),

/***/ "./resources/js/src/Components/AdminPanel/Charts/InvitationRegistrations.tsx":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/Components/AdminPanel/Charts/InvitationRegistrations.tsx ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_apexcharts_1 = __importDefault(__webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));

function InvitationRegistrations() {
  var _a = (0, react_2.useState)([]),
      categories = _a[0],
      setCategories = _a[1];

  var _b = (0, react_2.useState)([]),
      chartData = _b[0],
      setChartData = _b[1];

  var _c = (0, react_2.useState)(0),
      registerCount = _c[0],
      setRegisterCount = _c[1];

  var _d = (0, react_2.useState)(true),
      loading = _d[0],
      setLoading = _d[1];

  var options = {
    chart: {
      id: "basic-bar",
      width: '500px'
    },
    xaxis: {
      categories: categories
    },
    colors: ['#553C9A']
  };
  var series = [{
    name: "Registers",
    data: chartData
  }];

  var _e = (0, react_2.useState)('30days'),
      option = _e[0],
      setOption = _e[1];

  (0, react_2.useEffect)(function () {
    function getStatistics() {
      return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , axios_1["default"].get("/api/all_invitation_registers/?option=".concat(option))];

            case 1:
              res = _a.sent();
              console.log('Response: ', res.data.chartData);

              if (res.data) {
                setCategories(res.data.categories);
                setChartData(res.data.chartData);
                setRegisterCount(res.data.registerCount);
                setLoading(false);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    }

    getStatistics();
  }, [option]);
  return react_2["default"].createElement(react_2["default"].Fragment, null, react_2["default"].createElement(react_1.Box, {
    pb: '5px',
    mb: '25px',
    borderBottom: '1px solid #E7E3F0'
  }, react_2["default"].createElement(react_1.chakra.p, {
    mb: 1,
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: (0, react_1.useColorModeValue)("gray.500", "gray.400")
  }, "Last ", option == '7days' ? '7 days' : option == '30days' ? '30 days' : '12 months', "  statistics"), react_2["default"].createElement(react_1.Flex, {
    justify: 'space-between'
  }, react_2["default"].createElement(react_1.Text, {
    mb: 2,
    fontSize: "3xl",
    fontWeight: ["bold", "extrabold"],
    color: (0, react_1.useColorModeValue)("gray.900", "gray.50"),
    lineHeight: "tight"
  }, registerCount, react_2["default"].createElement(react_1.chakra.span, {
    fontSize: "md",
    fontWeight: "medium",
    color: (0, react_1.useColorModeValue)("gray.600", "gray.400")
  }, " ", "Registrations")), react_2["default"].createElement(react_1.Select, {
    onChange: function onChange(e) {
      return setOption(e.target.value);
    },
    value: option,
    w: 'auto',
    size: 'xs'
  }, react_2["default"].createElement("option", {
    value: '7days'
  }, "Last 7 days"), react_2["default"].createElement("option", {
    value: '30days'
  }, "Last 30 days"), react_2["default"].createElement("option", {
    value: '12months'
  }, "Last 12 months")))), loading ? react_2["default"].createElement(react_1.Center, {
    h: '50%'
  }, react_2["default"].createElement(react_1.Spinner, {
    size: 'xl'
  })) : chartData.length ? react_2["default"].createElement(react_apexcharts_1["default"], {
    options: options,
    series: series,
    type: "area"
  }) : react_2["default"].createElement(react_1.Center, {
    h: '100px'
  }, "No data found"));
}

exports["default"] = InvitationRegistrations;

/***/ }),

/***/ "./resources/js/src/Components/AdminPanel/Dashboard/AccountInfoCards.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/Components/AdminPanel/Dashboard/AccountInfoCards.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function AccountInfoCards() {
  return react_2["default"].createElement(react_1.Flex, {
    w: "full",
    alignItems: "center",
    justifyContent: "center"
  }, react_2["default"].createElement(react_1.Grid // h='200px'
  , {
    // h='200px'
    templateRows: 'repeat(1, 1fr)',
    templateColumns: ['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
    gap: 4,
    textAlign: ["left", "center"]
  }, react_2["default"].createElement(react_1.GridItem, {
    bg: (0, react_1.useColorModeValue)("white", "gray.800"),
    px: 4,
    py: 6,
    shadow: "base",
    rounded: "md"
  }, react_2["default"].createElement(react_1.chakra.p, {
    mb: 1,
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: (0, react_1.useColorModeValue)("gray.500", "gray.400")
  }, "Registrations"), react_2["default"].createElement(react_1.Text, {
    mb: 2,
    fontSize: "5xl",
    fontWeight: ["bold", "extrabold"],
    color: (0, react_1.useColorModeValue)("gray.900", "gray.50"),
    lineHeight: "tight"
  }, "3", react_2["default"].createElement(react_1.chakra.span, {
    fontSize: "2xl",
    fontWeight: "medium",
    color: (0, react_1.useColorModeValue)("gray.600", "gray.400")
  }, " ", "Users")), react_2["default"].createElement(react_1.chakra.p, {
    mb: 6,
    fontSize: "lg",
    // color={useColorModeValue("gray.600", "gray.500")}
    color: 'gray.500'
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit."), react_2["default"].createElement(react_1.Stack, {
    display: ["block", "flex"],
    spacing: 2,
    justifyContent: "center",
    direction: ["column", "row"]
  }, react_2["default"].createElement(react_1.Link, {
    href: "/admin/my_statistics",
    w: ["auto", "auto"],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    px: 3,
    py: 2,
    border: "solid transparent",
    fontWeight: "bold",
    rounded: "md",
    shadow: "md",
    color: "whiteAlpha.800",
    bg: "purple.600",
    _hover: {
      bg: "purple.700"
    }
  }, "View Details"))), react_2["default"].createElement(react_1.GridItem, {
    bg: (0, react_1.useColorModeValue)("white", "gray.800"),
    px: 4,
    py: 6,
    shadow: "base",
    rounded: "md"
  }, react_2["default"].createElement(react_1.chakra.p, {
    mb: 1,
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: (0, react_1.useColorModeValue)("gray.500", "gray.400")
  }, "Lasr Month Transactions"), react_2["default"].createElement(react_1.Text, {
    mb: 2,
    fontSize: "5xl",
    fontWeight: ["bold", "extrabold"],
    color: (0, react_1.useColorModeValue)("gray.900", "gray.50"),
    lineHeight: "tight"
  }, "$0", react_2["default"].createElement(react_1.chakra.span, {
    fontSize: "2xl",
    fontWeight: "medium",
    color: (0, react_1.useColorModeValue)("gray.600", "gray.400")
  }, " ", "USD")), react_2["default"].createElement(react_1.chakra.p, {
    mb: 6,
    fontSize: "lg",
    // color={useColorModeValue("gray.600", "gray.500")}
    color: 'gray.500'
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), react_2["default"].createElement(react_1.Stack, {
    display: ["block", "flex"],
    spacing: 2,
    justifyContent: "center",
    direction: ["column", "row"]
  }))));
}

exports["default"] = AccountInfoCards;

/***/ }),

/***/ "./resources/js/src/Components/AdminPanel/Dashboard/AccountInfoChart.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/Components/AdminPanel/Dashboard/AccountInfoChart.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var InvitationClicks_1 = __importDefault(__webpack_require__(/*! ../Charts/InvitationClicks */ "./resources/js/src/Components/AdminPanel/Charts/InvitationClicks.tsx"));

var InvitationRegistrations_1 = __importDefault(__webpack_require__(/*! ../Charts/InvitationRegistrations */ "./resources/js/src/Components/AdminPanel/Charts/InvitationRegistrations.tsx"));

function AccountInfoChart() {
  return react_2["default"].createElement(react_1.Grid // h='200px'
  , {
    // h='200px'
    w: 'full',
    templateRows: 'repeat(1, 1fr)',
    templateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)'],
    gap: 4,
    textAlign: ["left", "left"]
  }, react_2["default"].createElement(react_1.GridItem, {
    bg: (0, react_1.useColorModeValue)("white", "gray.800"),
    px: 4,
    py: 6,
    shadow: "base",
    rounded: "md"
  }, react_2["default"].createElement(InvitationClicks_1["default"], null)), react_2["default"].createElement(react_1.GridItem, {
    bg: (0, react_1.useColorModeValue)("white", "gray.800"),
    px: 4,
    py: 6,
    shadow: "base",
    rounded: "md"
  }, react_2["default"].createElement(InvitationRegistrations_1["default"], null)));
}

exports["default"] = AccountInfoChart;

/***/ }),

/***/ "./resources/js/src/Components/AdminPanel/Dashboard/PackageList.tsx":
/*!**************************************************************************!*\
  !*** ./resources/js/src/Components/AdminPanel/Dashboard/PackageList.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var cg_1 = __webpack_require__(/*! react-icons/cg */ "./node_modules/react-icons/cg/index.esm.js");

var NoDataFound_1 = __importDefault(__webpack_require__(/*! ../../NoDataFound */ "./resources/js/src/Components/NoDataFound.tsx"));

var PackageList = function PackageList(_a) {
  var packages = _a.packages;
  (0, react_2.useEffect)(function () {
    console.log('Package lists: ', packages);
  }, []);

  var _b = (0, react_2.useState)(),
      editRank = _b[0],
      setEditRank = _b[1];

  var handleEditRank = function handleEditRank(pkg) {
    setEditRank(pkg);
  };

  var saveEditedRank = function saveEditedRank() {
    inertia_1.Inertia.post('/admin/save_edited_rank', {
      pakage: editRank
    }, {
      preserveScroll: true
    });
    setEditRank(null);
  };

  return react_2["default"].createElement("div", null, react_2["default"].createElement(react_1.Box, {
    as: 'div',
    w: 'full',
    overflowX: 'auto'
  }, packages.length ? react_2["default"].createElement(react_1.Table, {
    variant: 'simple',
    w: 'full'
  }, react_2["default"].createElement(react_1.Thead, null, react_2["default"].createElement(react_1.Tr, null, react_2["default"].createElement(react_1.Th, null, "#"), react_2["default"].createElement(react_1.Th, null, "Package Name"), react_2["default"].createElement(react_1.Th, null, "Level 1"), react_2["default"].createElement(react_1.Th, null, "Level 2"), react_2["default"].createElement(react_1.Th, null, "Level 3"), react_2["default"].createElement(react_1.Th, null, "Level 4"), react_2["default"].createElement(react_1.Th, null, "Level 5"), react_2["default"].createElement(react_1.Th, null, "Level 6"), react_2["default"].createElement(react_1.Th, null, "Level 7"), react_2["default"].createElement(react_1.Th, {
    isNumeric: true
  }))), react_2["default"].createElement(react_1.Tbody, null, packages.map(function (pkg, index) {
    return react_2["default"].createElement(react_1.Tr, {
      key: index
    }, react_2["default"].createElement(react_1.Td, null, index + 1), react_2["default"].createElement(react_1.Td, null, pkg["package"]), react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Box, {
      display: 'flex',
      justifySelf: 'center',
      gap: 2
    }, editRank && (editRank === null || editRank === void 0 ? void 0 : editRank.id) == pkg.id ? react_2["default"].createElement(react_1.Input, {
      width: 12,
      px: '5px',
      type: 'number',
      value: editRank === null || editRank === void 0 ? void 0 : editRank.level_one,
      onChange: function onChange(e) {
        return setEditRank(__assign(__assign({}, editRank), {
          level_one: e.target.value
        }));
      }
    }) : pkg.level_one, "%")), react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Box, {
      display: 'flex',
      justifySelf: 'center',
      gap: 2
    }, editRank && (editRank === null || editRank === void 0 ? void 0 : editRank.id) == pkg.id ? react_2["default"].createElement(react_1.Input, {
      width: 12,
      px: '5px',
      type: 'number',
      value: editRank === null || editRank === void 0 ? void 0 : editRank.level_two,
      onChange: function onChange(e) {
        return setEditRank(__assign(__assign({}, editRank), {
          level_two: e.target.value
        }));
      }
    }) : pkg.level_two, "%")), react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Box, {
      display: 'flex',
      justifySelf: 'center',
      gap: 2
    }, editRank && (editRank === null || editRank === void 0 ? void 0 : editRank.id) == pkg.id ? react_2["default"].createElement(react_1.Input, {
      width: 12,
      px: '5px',
      type: 'number',
      value: editRank === null || editRank === void 0 ? void 0 : editRank.level_three,
      onChange: function onChange(e) {
        return setEditRank(__assign(__assign({}, editRank), {
          level_three: e.target.value
        }));
      }
    }) : pkg.level_three, "%")), react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Box, {
      display: 'flex',
      justifySelf: 'center',
      gap: 2
    }, editRank && (editRank === null || editRank === void 0 ? void 0 : editRank.id) == pkg.id ? react_2["default"].createElement(react_1.Input, {
      width: 12,
      px: '5px',
      type: 'number',
      value: editRank === null || editRank === void 0 ? void 0 : editRank.level_four,
      onChange: function onChange(e) {
        return setEditRank(__assign(__assign({}, editRank), {
          level_four: e.target.value
        }));
      }
    }) : pkg.level_four, "%")), react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Box, {
      display: 'flex',
      justifySelf: 'center',
      gap: 2
    }, editRank && (editRank === null || editRank === void 0 ? void 0 : editRank.id) == pkg.id ? react_2["default"].createElement(react_1.Input, {
      width: 12,
      px: '5px',
      type: 'number',
      value: editRank === null || editRank === void 0 ? void 0 : editRank.level_five,
      onChange: function onChange(e) {
        return setEditRank(__assign(__assign({}, editRank), {
          level_five: e.target.value
        }));
      }
    }) : pkg.level_five, "%")), react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Box, {
      display: 'flex',
      justifySelf: 'center',
      gap: 2
    }, editRank && (editRank === null || editRank === void 0 ? void 0 : editRank.id) == pkg.id ? react_2["default"].createElement(react_1.Input, {
      width: 12,
      px: '5px',
      type: 'number',
      value: editRank === null || editRank === void 0 ? void 0 : editRank.level_six,
      onChange: function onChange(e) {
        return setEditRank(__assign(__assign({}, editRank), {
          level_six: e.target.value
        }));
      }
    }) : pkg.level_six, "%")), react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Box, {
      display: 'flex',
      justifySelf: 'center',
      gap: 2
    }, editRank && (editRank === null || editRank === void 0 ? void 0 : editRank.id) == pkg.id ? react_2["default"].createElement(react_1.Input, {
      width: 12,
      px: '5px',
      type: 'number',
      value: editRank === null || editRank === void 0 ? void 0 : editRank.level_seven,
      onChange: function onChange(e) {
        return setEditRank(__assign(__assign({}, editRank), {
          level_seven: e.target.value
        }));
      }
    }) : pkg.level_seven, "%")), react_2["default"].createElement(react_1.Td, {
      isNumeric: true
    }, editRank && (editRank === null || editRank === void 0 ? void 0 : editRank.id) == pkg.id ? react_2["default"].createElement(react_1.Tooltip, {
      label: 'Update Rank',
      hasArrow: true
    }, react_2["default"].createElement(react_1.Button, {
      variant: 'outline',
      colorScheme: 'green',
      p: 3,
      // icon={<CgDetailsMore />}
      size: 'small',
      onClick: saveEditedRank
    }, "Update")) : react_2["default"].createElement(react_1.Tooltip, {
      label: 'Edit Rank',
      hasArrow: true
    }, react_2["default"].createElement(react_1.IconButton, {
      variant: 'outline',
      colorScheme: 'teal',
      "aria-label": 'Call Sage',
      fontSize: '20px',
      icon: react_2["default"].createElement(cg_1.CgDetailsMore, null),
      value: 'Details',
      onClick: function onClick() {
        return handleEditRank(pkg);
      }
    }))));
  }))) : react_2["default"].createElement(NoDataFound_1["default"], null)));
};

exports["default"] = PackageList;

/***/ }),

/***/ "./resources/js/src/Components/AdminPanel/Dashboard/ProductList.tsx":
/*!**************************************************************************!*\
  !*** ./resources/js/src/Components/AdminPanel/Dashboard/ProductList.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var cg_1 = __webpack_require__(/*! react-icons/cg */ "./node_modules/react-icons/cg/index.esm.js");

var NoDataFound_1 = __importDefault(__webpack_require__(/*! ../../NoDataFound */ "./resources/js/src/Components/NoDataFound.tsx"));

var moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ProductList = function ProductList(_a) {
  var products = _a.products;
  (0, react_2.useEffect)(function () {
    console.log('User lists: ', products);
  }, []);
  return react_2["default"].createElement("div", null, react_2["default"].createElement(react_1.Box, {
    as: 'div',
    w: 'full',
    overflowX: 'auto'
  }, products.length ? react_2["default"].createElement(react_1.Table, {
    variant: 'simple',
    w: 'full'
  }, react_2["default"].createElement(react_1.Thead, null, react_2["default"].createElement(react_1.Tr, null, react_2["default"].createElement(react_1.Th, null, "Product Image"), react_2["default"].createElement(react_1.Th, null, "Product Name"), react_2["default"].createElement(react_1.Th, null, "Product Price"), react_2["default"].createElement(react_1.Th, null, "Created date"), react_2["default"].createElement(react_1.Th, {
    isNumeric: true
  }))), react_2["default"].createElement(react_1.Tbody, null, products.map(function (product, index) {
    return react_2["default"].createElement(react_1.Tr, {
      key: index
    }, react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Image, {
      width: '100px',
      src: product.image
    })), react_2["default"].createElement(react_1.Td, null, " ", product.name), react_2["default"].createElement(react_1.Td, null, " $", product.price), react_2["default"].createElement(react_1.Td, null, (0, moment_1["default"])(product.created_at).format('l')), react_2["default"].createElement(react_1.Td, {
      isNumeric: true
    }, react_2["default"].createElement(react_1.Tooltip, {
      label: 'Delete Product',
      hasArrow: true
    }, react_2["default"].createElement(inertia_react_1.Link, {
      href: "/admin/product/delete/".concat(product.id)
    }, react_2["default"].createElement(react_1.IconButton, {
      variant: 'outline',
      colorScheme: 'red',
      "aria-label": 'Call Sage',
      fontSize: '20px',
      icon: react_2["default"].createElement(cg_1.CgDetailsMore, null),
      value: 'Details'
    })))));
  }))) : react_2["default"].createElement(NoDataFound_1["default"], null)));
};

exports["default"] = ProductList;

/***/ }),

/***/ "./resources/js/src/Components/AdminPanel/Dashboard/UsersList.tsx":
/*!************************************************************************!*\
  !*** ./resources/js/src/Components/AdminPanel/Dashboard/UsersList.tsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var cg_1 = __webpack_require__(/*! react-icons/cg */ "./node_modules/react-icons/cg/index.esm.js");

var NoDataFound_1 = __importDefault(__webpack_require__(/*! ../../NoDataFound */ "./resources/js/src/Components/NoDataFound.tsx"));

var moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var UsersList = function UsersList(_a) {
  var userList = _a.userList;
  (0, react_2.useEffect)(function () {
    console.log('User lists: ', userList);
  }, []);
  return react_2["default"].createElement("div", null, react_2["default"].createElement(react_1.Box, {
    as: 'div',
    w: 'full',
    overflowX: 'auto'
  }, userList.length ? react_2["default"].createElement(react_1.Table, {
    variant: 'simple',
    w: 'full'
  }, react_2["default"].createElement(react_1.Thead, null, react_2["default"].createElement(react_1.Tr, null, react_2["default"].createElement(react_1.Th, null, "User"), react_2["default"].createElement(react_1.Th, null, "Package"), react_2["default"].createElement(react_1.Th, null, "Join date"), react_2["default"].createElement(react_1.Th, null, "Ref ID"), react_2["default"].createElement(react_1.Th, null, "Invited by"), react_2["default"].createElement(react_1.Th, null, "Referral"), react_2["default"].createElement(react_1.Th, {
    isNumeric: true
  }))), react_2["default"].createElement(react_1.Tbody, null, userList.map(function (user, index) {
    var _a, _b, _c, _d;

    return react_2["default"].createElement(react_1.Tr, {
      key: index
    }, react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Flex, {
      align: 'center',
      gap: '6px'
    }, react_2["default"].createElement(react_1.Avatar, {
      size: 'sm',
      name: "".concat(user.first_name, " ").concat(user.last_name)
    }), "".concat(user.first_name, " ").concat(user.last_name))), react_2["default"].createElement(react_1.Td, null, (_a = user["package"]) === null || _a === void 0 ? void 0 : _a["package"]), react_2["default"].createElement(react_1.Td, null, (0, moment_1["default"])(user.created_at).format('l')), react_2["default"].createElement(react_1.Td, null, user.ref_id), react_2["default"].createElement(react_1.Td, null, user.parent ? "".concat((_b = user.parent) === null || _b === void 0 ? void 0 : _b.first_name, " ").concat((_c = user.parent) === null || _c === void 0 ? void 0 : _c.last_name) : '######'), react_2["default"].createElement(react_1.Td, null, (_d = user.children) === null || _d === void 0 ? void 0 : _d.length, " users"), react_2["default"].createElement(react_1.Td, {
      isNumeric: true
    }, react_2["default"].createElement(react_1.Tooltip, {
      label: 'View Details',
      hasArrow: true
    }, react_2["default"].createElement(inertia_react_1.Link, {
      href: "/admin/user/".concat(user.id)
    }, react_2["default"].createElement(react_1.IconButton, {
      variant: 'outline',
      colorScheme: 'teal',
      "aria-label": 'Call Sage',
      fontSize: '20px',
      icon: react_2["default"].createElement(cg_1.CgDetailsMore, null),
      value: 'Details'
    })))));
  }))) : react_2["default"].createElement(NoDataFound_1["default"], null)));
};

exports["default"] = UsersList;

/***/ }),

/***/ "./resources/js/src/Components/FlashMessage.tsx":
/*!******************************************************!*\
  !*** ./resources/js/src/Components/FlashMessage.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function FlashMessages(_a) {
  var flash = _a.flash,
      type = _a.type;
  var toast = (0, react_1.useToast)();
  var id = 'test-toast';
  return react_2["default"].createElement(react_2["default"].Fragment, null, !toast.isActive(id) && toast({
    id: id,
    title: type == 'success' ? 'Success' : 'Error',
    description: flash,
    status: type,
    isClosable: true
  }));
}

exports["default"] = FlashMessages;

/***/ }),

/***/ "./resources/js/src/Components/MainLogo.tsx":
/*!**************************************************!*\
  !*** ./resources/js/src/Components/MainLogo.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function MainLogo() {
  return react_2["default"].createElement(react_1.Image, {
    width: 150,
    height: 50,
    src: '/logo.png',
    alt: 'Brand Logo'
  });
}

exports["default"] = MainLogo;

/***/ }),

/***/ "./resources/js/src/Components/NoDataFound.tsx":
/*!*****************************************************!*\
  !*** ./resources/js/src/Components/NoDataFound.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function NoDataFound() {
  return react_2["default"].createElement(react_1.Center, {
    h: 200
  }, "No data found");
}

exports["default"] = NoDataFound;

/***/ }),

/***/ "./resources/js/src/Components/UserPanel/Charts/InvitationClicks.tsx":
/*!***************************************************************************!*\
  !*** ./resources/js/src/Components/UserPanel/Charts/InvitationClicks.tsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_apexcharts_1 = __importDefault(__webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));

function InvitationClicks() {
  var _a = (0, react_2.useState)([]),
      categories = _a[0],
      setCategories = _a[1];

  var _b = (0, react_2.useState)([]),
      chartData = _b[0],
      setChartData = _b[1];

  var _c = (0, react_2.useState)(0),
      clickCount = _c[0],
      setClickCount = _c[1];

  var _d = (0, react_2.useState)(true),
      loading = _d[0],
      setLoading = _d[1];

  var options = {
    chart: {
      id: "basic-bar",
      width: '500px'
    },
    xaxis: {
      categories: categories
    },
    colors: ['#553C9A']
  };
  var series = [{
    name: "Clicks",
    data: chartData
  }];

  var _e = (0, react_2.useState)('30days'),
      option = _e[0],
      setOption = _e[1];

  (0, react_2.useEffect)(function () {
    function getStatistics() {
      return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , axios_1["default"].get("/api/invitation_clicks/?option=".concat(option))];

            case 1:
              res = _a.sent();
              console.log('Response: ', res.data.chartData);

              if (res.data) {
                setCategories(res.data.categories);
                setChartData(res.data.chartData);
                setClickCount(res.data.clickCount);
                setLoading(false);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    }

    getStatistics();
  }, [option]);
  return react_2["default"].createElement(react_2["default"].Fragment, null, react_2["default"].createElement(react_1.Box, {
    pb: '5px',
    mb: '25px',
    borderBottom: '1px solid #E7E3F0'
  }, react_2["default"].createElement(react_1.chakra.p, {
    mb: 1,
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: (0, react_1.useColorModeValue)("gray.500", "gray.400")
  }, "Last ", option == '7days' ? '7 days' : option == '30days' ? '30 days' : '12 months', "  statistics"), react_2["default"].createElement(react_1.Flex, {
    justify: 'space-between'
  }, react_2["default"].createElement(react_1.Text, {
    mb: 2,
    fontSize: "3xl",
    fontWeight: ["bold", "extrabold"],
    color: (0, react_1.useColorModeValue)("gray.900", "gray.50"),
    lineHeight: "tight"
  }, clickCount, react_2["default"].createElement(react_1.chakra.span, {
    fontSize: "md",
    fontWeight: "medium",
    color: (0, react_1.useColorModeValue)("gray.600", "gray.400")
  }, " ", "Clicks")), react_2["default"].createElement(react_1.Select, {
    onChange: function onChange(e) {
      return setOption(e.target.value);
    },
    value: option,
    w: 'auto',
    size: 'xs'
  }, react_2["default"].createElement("option", {
    value: '7days'
  }, "Last 7 days"), react_2["default"].createElement("option", {
    value: '30days'
  }, "Last 30 days"), react_2["default"].createElement("option", {
    value: '12months'
  }, "Last 12 months")))), loading ? react_2["default"].createElement(react_1.Center, {
    h: '50%'
  }, react_2["default"].createElement(react_1.Spinner, {
    size: 'xl'
  })) : chartData.length ? react_2["default"].createElement(react_apexcharts_1["default"], {
    options: options,
    series: series,
    type: "bar"
  }) : react_2["default"].createElement(react_1.Center, {
    h: '100px'
  }, "No data found"));
}

exports["default"] = InvitationClicks;

/***/ }),

/***/ "./resources/js/src/Components/UserPanel/Charts/InvitationRegistrations.tsx":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/Components/UserPanel/Charts/InvitationRegistrations.tsx ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_apexcharts_1 = __importDefault(__webpack_require__(/*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));

function InvitationRegistrations() {
  var _a = (0, react_2.useState)([]),
      categories = _a[0],
      setCategories = _a[1];

  var _b = (0, react_2.useState)([]),
      chartData = _b[0],
      setChartData = _b[1];

  var _c = (0, react_2.useState)(0),
      registerCount = _c[0],
      setRegisterCount = _c[1];

  var _d = (0, react_2.useState)(true),
      loading = _d[0],
      setLoading = _d[1];

  var options = {
    chart: {
      id: "basic-bar",
      width: '500px'
    },
    xaxis: {
      categories: categories
    },
    colors: ['#553C9A']
  };
  var series = [{
    name: "Registers",
    data: chartData
  }];

  var _e = (0, react_2.useState)('30days'),
      option = _e[0],
      setOption = _e[1];

  (0, react_2.useEffect)(function () {
    function getStatistics() {
      return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , axios_1["default"].get("/api/invitation_registers/?option=".concat(option))];

            case 1:
              res = _a.sent();
              console.log('Response: ', res.data.chartData);

              if (res.data) {
                setCategories(res.data.categories);
                setChartData(res.data.chartData);
                setRegisterCount(res.data.registerCount);
                setLoading(false);
              }

              return [2
              /*return*/
              ];
          }
        });
      });
    }

    getStatistics();
  }, [option]);
  return react_2["default"].createElement(react_2["default"].Fragment, null, react_2["default"].createElement(react_1.Box, {
    pb: '5px',
    mb: '25px',
    borderBottom: '1px solid #E7E3F0'
  }, react_2["default"].createElement(react_1.chakra.p, {
    mb: 1,
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: (0, react_1.useColorModeValue)("gray.500", "gray.400")
  }, "Last ", option == '7days' ? '7 days' : option == '30days' ? '30 days' : '12 months', "  statistics"), react_2["default"].createElement(react_1.Flex, {
    justify: 'space-between'
  }, react_2["default"].createElement(react_1.Text, {
    mb: 2,
    fontSize: "3xl",
    fontWeight: ["bold", "extrabold"],
    color: (0, react_1.useColorModeValue)("gray.900", "gray.50"),
    lineHeight: "tight"
  }, registerCount, react_2["default"].createElement(react_1.chakra.span, {
    fontSize: "md",
    fontWeight: "medium",
    color: (0, react_1.useColorModeValue)("gray.600", "gray.400")
  }, " ", "Registrations")), react_2["default"].createElement(react_1.Select, {
    onChange: function onChange(e) {
      return setOption(e.target.value);
    },
    value: option,
    w: 'auto',
    size: 'xs'
  }, react_2["default"].createElement("option", {
    value: '7days'
  }, "Last 7 days"), react_2["default"].createElement("option", {
    value: '30days'
  }, "Last 30 days"), react_2["default"].createElement("option", {
    value: '12months'
  }, "Last 12 months")))), loading ? react_2["default"].createElement(react_1.Center, {
    h: '50%'
  }, react_2["default"].createElement(react_1.Spinner, {
    size: 'xl'
  })) : chartData.length ? react_2["default"].createElement(react_apexcharts_1["default"], {
    options: options,
    series: series,
    type: "area"
  }) : react_2["default"].createElement(react_1.Center, {
    h: '100px'
  }, "No data found"));
}

exports["default"] = InvitationRegistrations;

/***/ }),

/***/ "./resources/js/src/Components/UserPanel/Dashboard/AccountInfoCards.tsx":
/*!******************************************************************************!*\
  !*** ./resources/js/src/Components/UserPanel/Dashboard/AccountInfoCards.tsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function AccountInfoCards(_a) {
  var childUsers = _a.childUsers,
      clicks = _a.clicks;
  console.log('clicks: ', clicks);
  return react_2["default"].createElement(react_1.Flex, {
    w: "full",
    alignItems: "center",
    justifyContent: "center"
  }, react_2["default"].createElement(react_1.Grid // h='200px'
  , {
    // h='200px'
    templateRows: 'repeat(1, 1fr)',
    templateColumns: ['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
    gap: 4,
    textAlign: ["left", "center"]
  }, react_2["default"].createElement(react_1.GridItem, {
    bg: (0, react_1.useColorModeValue)("white", "gray.800"),
    px: 4,
    py: 6,
    shadow: "base",
    rounded: "md"
  }, react_2["default"].createElement(react_1.chakra.p, {
    mb: 1,
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: (0, react_1.useColorModeValue)("gray.500", "gray.400")
  }, "Referral Clicks"), react_2["default"].createElement(react_1.Text, {
    mb: 2,
    fontSize: "5xl",
    fontWeight: ["bold", "extrabold"],
    color: (0, react_1.useColorModeValue)("gray.900", "gray.50"),
    lineHeight: "tight"
  }, clicks.length, react_2["default"].createElement(react_1.chakra.span, {
    fontSize: "2xl",
    fontWeight: "medium",
    color: (0, react_1.useColorModeValue)("gray.600", "gray.400")
  }, " ", "Clicks")), react_2["default"].createElement(react_1.chakra.p, {
    mb: 6,
    fontSize: "lg",
    // color={useColorModeValue("gray.600", "gray.500")}
    color: 'gray.500'
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), react_2["default"].createElement(react_1.Stack, {
    display: ["block", "flex"],
    spacing: 2,
    justifyContent: "center",
    direction: ["column", "row"]
  }, react_2["default"].createElement(react_1.Link, {
    href: "/user/my_statistics",
    w: ["auto", "auto"],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    px: 3,
    py: 2,
    border: "solid transparent",
    fontWeight: "bold",
    rounded: "md",
    shadow: "md",
    color: "whiteAlpha.800",
    bg: "purple.600",
    _hover: {
      bg: "purple.700"
    }
  }, "View Details"))), react_2["default"].createElement(react_1.GridItem, {
    bg: (0, react_1.useColorModeValue)("white", "gray.800"),
    px: 4,
    py: 6,
    shadow: "base",
    rounded: "md"
  }, react_2["default"].createElement(react_1.chakra.p, {
    mb: 1,
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: (0, react_1.useColorModeValue)("gray.500", "gray.400")
  }, "Registrations"), react_2["default"].createElement(react_1.Text, {
    mb: 2,
    fontSize: "5xl",
    fontWeight: ["bold", "extrabold"],
    color: (0, react_1.useColorModeValue)("gray.900", "gray.50"),
    lineHeight: "tight"
  }, childUsers.length, react_2["default"].createElement(react_1.chakra.span, {
    fontSize: "2xl",
    fontWeight: "medium",
    color: (0, react_1.useColorModeValue)("gray.600", "gray.400")
  }, " ", "Users")), react_2["default"].createElement(react_1.chakra.p, {
    mb: 6,
    fontSize: "lg",
    // color={useColorModeValue("gray.600", "gray.500")}
    color: 'gray.500'
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit."), react_2["default"].createElement(react_1.Stack, {
    display: ["block", "flex"],
    spacing: 2,
    justifyContent: "center",
    direction: ["column", "row"]
  }, react_2["default"].createElement(react_1.Link, {
    href: "/user/my_statistics",
    w: ["auto", "auto"],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    px: 3,
    py: 2,
    border: "solid transparent",
    fontWeight: "bold",
    rounded: "md",
    shadow: "md",
    color: "whiteAlpha.800",
    bg: "purple.600",
    _hover: {
      bg: "purple.700"
    }
  }, "View Details"))), react_2["default"].createElement(react_1.GridItem, {
    bg: (0, react_1.useColorModeValue)("white", "gray.800"),
    px: 4,
    py: 6,
    shadow: "base",
    rounded: "md",
    colSpan: [2, 2, 1]
  }, react_2["default"].createElement(react_1.chakra.p, {
    mb: 1,
    fontSize: "xs",
    fontWeight: "bold",
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: (0, react_1.useColorModeValue)("gray.500", "gray.400")
  }, "Available Balance"), react_2["default"].createElement(react_1.Text, {
    mb: 2,
    fontSize: "5xl",
    fontWeight: ["bold", "extrabold"],
    color: (0, react_1.useColorModeValue)("gray.900", "gray.50"),
    lineHeight: "tight"
  }, "$0", react_2["default"].createElement(react_1.chakra.span, {
    fontSize: "2xl",
    fontWeight: "medium",
    color: (0, react_1.useColorModeValue)("gray.600", "gray.400")
  }, " ", "USD")), react_2["default"].createElement(react_1.chakra.p, {
    mb: 6,
    fontSize: "lg",
    // color={useColorModeValue("gray.600", "gray.500")}
    color: 'gray.500'
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit."), react_2["default"].createElement(react_1.Stack, {
    display: ["block", "flex"],
    spacing: 2,
    justifyContent: "center",
    direction: ["column", "row"]
  }))));
}

exports["default"] = AccountInfoCards;

/***/ }),

/***/ "./resources/js/src/Components/UserPanel/Dashboard/AccountInfoChart.tsx":
/*!******************************************************************************!*\
  !*** ./resources/js/src/Components/UserPanel/Dashboard/AccountInfoChart.tsx ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var InvitationClicks_1 = __importDefault(__webpack_require__(/*! ../Charts/InvitationClicks */ "./resources/js/src/Components/UserPanel/Charts/InvitationClicks.tsx"));

var InvitationRegistrations_1 = __importDefault(__webpack_require__(/*! ../Charts/InvitationRegistrations */ "./resources/js/src/Components/UserPanel/Charts/InvitationRegistrations.tsx"));

function AccountInfoChart() {
  return react_2["default"].createElement(react_1.Grid // h='200px'
  , {
    // h='200px'
    w: 'full',
    templateRows: 'repeat(1, 1fr)',
    templateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)'],
    gap: 4,
    textAlign: ["left", "left"]
  }, react_2["default"].createElement(react_1.GridItem, {
    bg: (0, react_1.useColorModeValue)("white", "gray.800"),
    px: 4,
    py: 6,
    shadow: "base",
    rounded: "md"
  }, react_2["default"].createElement(InvitationClicks_1["default"], null)), react_2["default"].createElement(react_1.GridItem, {
    bg: (0, react_1.useColorModeValue)("white", "gray.800"),
    px: 4,
    py: 6,
    shadow: "base",
    rounded: "md"
  }, react_2["default"].createElement(InvitationRegistrations_1["default"], null)));
}

exports["default"] = AccountInfoChart;

/***/ }),

/***/ "./resources/js/src/Components/UserPanel/Dashboard/ReferralClipboard.tsx":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/Components/UserPanel/Dashboard/ReferralClipboard.tsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var hi_1 = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");

function ReferralClipboard(_a) {
  var _b = _a.source,
      source = _b === void 0 ? 'direct' : _b;
  var authUser = (0, inertia_react_1.usePage)().props.authUser;

  var _c = (0, react_2.useState)(''),
      value = _c[0],
      setValue = _c[1];

  var _d = (0, react_1.useClipboard)(value),
      hasCopied = _d.hasCopied,
      onCopy = _d.onCopy;

  (0, react_2.useEffect)(function () {
    // console.log('window?.location.protocol: ', window?.location.port)
    setValue("".concat(window === null || window === void 0 ? void 0 : window.location.protocol, "//").concat(window === null || window === void 0 ? void 0 : window.location.hostname, "/invite?src=").concat(source, "&ref=").concat(authUser.ref_id));
  }, [source]);
  return react_2["default"].createElement(react_2["default"].Fragment, null, react_2["default"].createElement(react_1.Flex, {
    mb: 2
  }, react_2["default"].createElement(react_1.Input, {
    value: value,
    isReadOnly: true,
    placeholder: 'Welcome'
  }), react_2["default"].createElement(react_1.Button, {
    onClick: onCopy,
    ml: 2,
    bg: hasCopied ? 'green.200' : 'whiteAlpha.300'
  }, hasCopied ? react_2["default"].createElement(react_1.Icon, {
    as: hi_1.HiClipboardCheck,
    h: 6,
    w: 6,
    color: 'green.500'
  }) : react_2["default"].createElement(react_1.Icon, {
    as: hi_1.HiClipboardCopy,
    h: 6,
    w: 6
  }))));
}

exports["default"] = ReferralClipboard;

/***/ }),

/***/ "./resources/js/src/Components/UserPanel/Dashboard/UsersList.tsx":
/*!***********************************************************************!*\
  !*** ./resources/js/src/Components/UserPanel/Dashboard/UsersList.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var cg_1 = __webpack_require__(/*! react-icons/cg */ "./node_modules/react-icons/cg/index.esm.js");

var NoDataFound_1 = __importDefault(__webpack_require__(/*! ../../NoDataFound */ "./resources/js/src/Components/NoDataFound.tsx"));

var moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

var UsersList = function UsersList(_a) {
  var userList = _a.userList;
  (0, react_2.useEffect)(function () {
    console.log('User lists: ', userList);
  }, []);
  return react_2["default"].createElement("div", null, react_2["default"].createElement(react_1.Box, {
    as: 'div',
    w: 'full',
    overflowX: 'auto'
  }, userList.length ? react_2["default"].createElement(react_1.Table, {
    variant: 'simple',
    w: 'full'
  }, react_2["default"].createElement(react_1.Thead, null, react_2["default"].createElement(react_1.Tr, null, react_2["default"].createElement(react_1.Th, null, "User"), react_2["default"].createElement(react_1.Th, null, "Join date"), react_2["default"].createElement(react_1.Th, null, "Source"), react_2["default"].createElement(react_1.Th, null, "Ref ID"), react_2["default"].createElement(react_1.Th, {
    isNumeric: true
  }))), react_2["default"].createElement(react_1.Tbody, null, userList.map(function (user, index) {
    return react_2["default"].createElement(react_1.Tr, {
      key: index
    }, react_2["default"].createElement(react_1.Td, null, react_2["default"].createElement(react_1.Flex, {
      align: 'center',
      gap: '6px'
    }, react_2["default"].createElement(react_1.Avatar, {
      size: 'sm',
      name: "".concat(user.first_name, " ").concat(user.last_name)
    }), "".concat(user.first_name, " ").concat(user.last_name))), react_2["default"].createElement(react_1.Td, null, (0, moment_1["default"])(user.created_at).format('l')), react_2["default"].createElement(react_1.Td, null, user.source), react_2["default"].createElement(react_1.Td, null, user.ref_id), react_2["default"].createElement(react_1.Td, {
      isNumeric: true
    }, react_2["default"].createElement(react_1.Tooltip, {
      label: 'View Details',
      hasArrow: true
    }, react_2["default"].createElement(react_1.IconButton, {
      variant: 'outline',
      colorScheme: 'teal',
      "aria-label": 'Call Sage',
      fontSize: '20px',
      icon: react_2["default"].createElement(cg_1.CgDetailsMore, null),
      value: 'Details'
    }))));
  }))) : react_2["default"].createElement(NoDataFound_1["default"], null)));
};

exports["default"] = UsersList;

/***/ }),

/***/ "./resources/js/src/Components/UserPanel/Geneology/Geneology.tsx":
/*!***********************************************************************!*\
  !*** ./resources/js/src/Components/UserPanel/Geneology/Geneology.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_orgchart_1 = __importDefault(__webpack_require__(/*! @dabeng/react-orgchart */ "./node_modules/@dabeng/react-orgchart/dist/ChartContainer.js"));

var my_node_1 = __importDefault(__webpack_require__(/*! ./my-node */ "./resources/js/src/Components/UserPanel/Geneology/my-node.tsx"));

function Geneology(_a) {
  var _b = _a.enableZoom,
      enableZoom = _b === void 0 ? false : _b,
      dataSource = _a.dataSource;
  return react_1["default"].createElement(react_orgchart_1["default"] // height="100vh"
  , {
    // height="100vh"
    datasource: dataSource,
    chartClass: "myChart",
    NodeTemplate: my_node_1["default"],
    pan: true,
    zoom: enableZoom
  });
}

exports["default"] = Geneology;

/***/ }),

/***/ "./resources/js/src/Components/UserPanel/Geneology/my-node.tsx":
/*!*********************************************************************!*\
  !*** ./resources/js/src/Components/UserPanel/Geneology/my-node.tsx ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var react_2 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js"); // import "./my-node.css";


var propTypes = {
  nodeData: prop_types_1["default"].object.isRequired
};

var MyNode = function MyNode(_a) {
  var nodeData = _a.nodeData;

  var selectNode = function selectNode() {
    // alert('Ref ID: '+nodeData.ref_id);
    window.location.href = "/admin/user/".concat(nodeData.id);
  };

  var _b = (0, react_1.useState)(0),
      levelPercent = _b[0],
      setPercent = _b[1];

  (0, react_1.useEffect)(function () {
    nodeData.level == 1 ? setPercent(nodeData["package"].level_one) : nodeData.level == 2 ? setPercent(nodeData["package"].level_two) : nodeData.level == 3 ? setPercent(nodeData["package"].level_three) : nodeData.level == 4 ? setPercent(nodeData["package"].level_four) : nodeData.level == 5 ? setPercent(nodeData["package"].level_five) : nodeData.level == 6 ? setPercent(nodeData["package"].level_six) : nodeData.level == 7 && setPercent(nodeData["package"].level_seven);
  }, []);
  return react_1["default"].createElement("div", {
    onClick: selectNode
  }, react_1["default"].createElement(react_2.Flex, {
    direction: 'column',
    justify: "center",
    className: "position"
  }, react_1["default"].createElement(react_2.Text, {
    fontSize: "sm",
    fontWeight: "bold"
  }, nodeData.name), react_1["default"].createElement(react_2.Text, {
    fontSize: "xs"
  }, "$", nodeData.purchased * (levelPercent / 100))));
};

MyNode.propTypes = propTypes;
exports["default"] = MyNode;

/***/ }),

/***/ "./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx":
/*!**************************************************************!*\
  !*** ./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Footer_1 = __importDefault(__webpack_require__(/*! ./inc/Footer */ "./resources/js/src/Layouts/AdminLayout/inc/Footer.tsx"));

var SideMenu_1 = __importDefault(__webpack_require__(/*! ./inc/SideMenu */ "./resources/js/src/Layouts/AdminLayout/inc/SideMenu.tsx"));

var TopNavigation_1 = __importDefault(__webpack_require__(/*! ./inc/TopNavigation */ "./resources/js/src/Layouts/AdminLayout/inc/TopNavigation.tsx"));

function AdminLayout(_a) {
  var children = _a.children;
  var isMobile = (0, react_1.useMediaQuery)('(max-width:1000px)')[0];

  var _b = (0, react_2.useState)(isMobile ? true : false),
      collapsed = _b[0],
      setCollapsed = _b[1];

  var toggleCollapsed = function toggleCollapsed() {
    setCollapsed(!collapsed);
  };

  return react_2["default"].createElement(react_1.Flex, {
    direction: 'column',
    justify: 'space-between'
  }, react_2["default"].createElement(TopNavigation_1["default"], {
    toggleCollapsed: toggleCollapsed,
    collapsed: collapsed
  }), react_2["default"].createElement(react_1.Flex, {
    color: 'white'
  }, react_2["default"].createElement(react_1.Box, {
    as: 'aside',
    zIndex: 9999,
    px: 0,
    width: collapsed ? '80px' : '210px',
    pt: '74px',
    h: '100vh',
    overflow: 'hidden'
  }, react_2["default"].createElement(react_1.Box, {
    style: {
      position: 'fixed',
      height: '100vh',
      zIndex: 999,
      overflowY: 'auto'
    }
  }, react_2["default"].createElement(SideMenu_1["default"], {
    collapsed: collapsed
  }))), react_2["default"].createElement(react_1.Box, {
    color: 'gray.800',
    w: isMobile ? '80%' : '100%',
    minH: '100vh',
    bg: isMobile ? 'white' : 'purple.50',
    dropShadow: 'md'
  }, react_2["default"].createElement(react_1.Box, {
    px: isMobile ? 5 : 10,
    py: '90px',
    minH: '100vh'
  }, children), react_2["default"].createElement(Footer_1["default"], null))));
}

exports["default"] = AdminLayout;

/***/ }),

/***/ "./resources/js/src/Layouts/AdminLayout/inc/Footer.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/src/Layouts/AdminLayout/inc/Footer.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function Footer() {
  return react_1["default"].createElement(react_1["default"].Fragment, null);
}

exports["default"] = Footer;

/***/ }),

/***/ "./resources/js/src/Layouts/AdminLayout/inc/SideMenu.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/src/Layouts/AdminLayout/inc/SideMenu.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var icons_1 = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ai_1 = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");

var bi_1 = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");

var react_2 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var fi_1 = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");

var SubMenu = antd_1.Menu.SubMenu;

function SideMenu(_a) {
  // const [collapsed, setCollapsed] = useState(false)
  var collapsed = _a.collapsed; // const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  //   };

  return react_1["default"].createElement(react_2.Box, {
    shadow: 'xl'
  }, react_1["default"].createElement(antd_1.Menu // defaultSelectedKeys={['1']}
  // defaultOpenKeys={['sub1']}
  , {
    // defaultSelectedKeys={['1']}
    // defaultOpenKeys={['sub1']}
    mode: "inline",
    theme: "dark",
    inlineCollapsed: collapsed,
    style: {
      height: '100vh',
      background: 'linear-gradient(180.48deg,rgba(115,70,215,1) -26.15%,rgba(57,35,81,1) 189.84%)',
      color: 'white'
    }
  }, react_1["default"].createElement(antd_1.Menu.Item, {
    key: "1",
    icon: react_1["default"].createElement(ai_1.AiOutlineDashboard, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/admin/dashboard'
  }, "Dashboard")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "2",
    icon: react_1["default"].createElement(bi_1.BiStats, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/admin/my_statistics'
  }, "Statistics Overview")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "3",
    icon: react_1["default"].createElement(bi_1.BiCategoryAlt, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/admin/packages'
  }, "Member ranks")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "4",
    icon: react_1["default"].createElement(fi_1.FiUsers, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/admin/users'
  }, "Registered Users")), react_1["default"].createElement(SubMenu, {
    key: "sub2",
    icon: react_1["default"].createElement(icons_1.AppstoreOutlined, null),
    title: "Manage Products"
  }, react_1["default"].createElement(antd_1.Menu.Item, {
    key: "9"
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/admin/product/create'
  }, "Create Product")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "10"
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/admin/product/list'
  }, "Product List")))));
}

exports["default"] = SideMenu;

/***/ }),

/***/ "./resources/js/src/Layouts/AdminLayout/inc/TopNavigation.tsx":
/*!********************************************************************!*\
  !*** ./resources/js/src/Layouts/AdminLayout/inc/TopNavigation.tsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var bi_1 = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");

var MainLogo_1 = __importDefault(__webpack_require__(/*! ../../../Components/MainLogo */ "./resources/js/src/Components/MainLogo.tsx"));

var bs_1 = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");

function TopNavigation(_a) {
  var toggleCollapsed = _a.toggleCollapsed,
      collapsed = _a.collapsed;
  var authUser = (0, inertia_react_1.usePage)().props.authUser;
  return react_2["default"].createElement(react_1.Box, {
    py: 3,
    w: 'full',
    bg: '#353535',
    position: 'fixed',
    zIndex: 999999
  }, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.2xl'
  }, react_2["default"].createElement(react_1.Flex, {
    justify: 'space-between'
  }, react_2["default"].createElement(react_1.HStack, null, react_2["default"].createElement(react_1.Icon, {
    color: 'white',
    cursor: 'pointer',
    mr: 5,
    onClick: toggleCollapsed,
    as: collapsed ? bs_1.BsTextLeft : bs_1.BsTextCenter,
    w: 8,
    h: 8
  }), react_2["default"].createElement(inertia_react_1.Link, {
    href: '/'
  }, react_2["default"].createElement(MainLogo_1["default"], null))), react_2["default"].createElement(react_1.HStack, null, react_2["default"].createElement(react_1.Box, {
    py: 2,
    px: 3,
    color: 'whiteAlpha.800',
    rounded: '5px',
    cursor: 'pointer'
  }, react_2["default"].createElement(react_1.Menu, null, react_2["default"].createElement(react_1.MenuButton, {
    as: 'a',
    gap: 2
  }, react_2["default"].createElement(react_1.Avatar, {
    size: 'xs',
    mr: 2,
    name: "".concat(authUser.first_name, " ").concat(authUser.last_name),
    src: ''
  }), authUser.first_name, " ", authUser.last_name), react_2["default"].createElement(react_1.MenuList, null, react_2["default"].createElement(react_1.MenuItem, null, react_2["default"].createElement(inertia_react_1.Link, {
    href: "/logout",
    method: "post",
    as: "button"
  }, react_2["default"].createElement(react_1.Flex, {
    align: 'center',
    gap: 2
  }, react_2["default"].createElement(react_1.Icon, {
    as: bi_1.BiPowerOff,
    color: 'green.500',
    p: 0,
    m: 0
  }), react_2["default"].createElement(react_1.Text, {
    color: 'gray.500'
  }, "Sign Out")))))))))));
}

exports["default"] = TopNavigation;

/***/ }),

/***/ "./resources/js/src/Layouts/GuestLayout/GuestLayout.tsx":
/*!**************************************************************!*\
  !*** ./resources/js/src/Layouts/GuestLayout/GuestLayout.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true; // import FlashMessages from '../../Components/FlashMessage'

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Footer_1 = __importDefault(__webpack_require__(/*! ./inc/Footer */ "./resources/js/src/Layouts/GuestLayout/inc/Footer.tsx"));

var SideMenu_1 = __importDefault(__webpack_require__(/*! ./inc/SideMenu */ "./resources/js/src/Layouts/GuestLayout/inc/SideMenu.tsx"));

var TopNavigation_1 = __importDefault(__webpack_require__(/*! ./inc/TopNavigation */ "./resources/js/src/Layouts/GuestLayout/inc/TopNavigation.tsx"));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

function GuestLayout(_a) {
  var children = _a.children;
  var successMsg = (0, inertia_react_1.usePage)().props.successMsg;
  console.log('Unhandalled Success MEssage: ', successMsg);
  var isMobile = (0, react_1.useMediaQuery)('(max-width:1000px)')[0];

  var _b = (0, react_2.useState)(isMobile ? true : false),
      collapsed = _b[0],
      setCollapsed = _b[1];

  var toggleCollapsed = function toggleCollapsed() {
    setCollapsed(!collapsed);
  };

  return react_2["default"].createElement(react_1.Flex, {
    direction: 'column',
    justify: 'space-between'
  }, react_2["default"].createElement(TopNavigation_1["default"], {
    toggleCollapsed: toggleCollapsed,
    collapsed: collapsed
  }), react_2["default"].createElement(react_1.Flex, {
    color: 'purple.50'
  }, react_2["default"].createElement(react_1.Box, {
    as: 'aside',
    zIndex: 9999,
    px: 0,
    width: collapsed ? '80px' : '210px',
    pt: '74px',
    h: '100vh',
    overflow: 'hidden'
  }, react_2["default"].createElement(react_1.Box, {
    style: {
      position: 'fixed',
      height: '100vh',
      zIndex: 999,
      overflowY: 'auto'
    },
    bg: 'purple.50'
  }, react_2["default"].createElement(SideMenu_1["default"], {
    collapsed: collapsed
  }))), react_2["default"].createElement(react_1.Box, {
    color: 'gray.800',
    w: isMobile ? '80%' : '100%',
    minH: '100vh',
    bg: isMobile ? 'white' : 'purple.50',
    dropShadow: 'md'
  }, react_2["default"].createElement(react_1.Box, {
    px: isMobile ? 5 : 10,
    py: '90px',
    minH: '100vh'
  }, children), react_2["default"].createElement(Footer_1["default"], null))));
}

exports["default"] = GuestLayout;

/***/ }),

/***/ "./resources/js/src/Layouts/GuestLayout/inc/Footer.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/src/Layouts/GuestLayout/inc/Footer.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function Footer() {
  return react_2["default"].createElement(react_1.Box, {
    pt: 5,
    pb: 5,
    w: 'full'
  }, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.xl'
  }));
}

exports["default"] = Footer;

/***/ }),

/***/ "./resources/js/src/Layouts/GuestLayout/inc/SideMenu.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/src/Layouts/GuestLayout/inc/SideMenu.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var bi_1 = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");

var react_2 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var bs_1 = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");

var fa_1 = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js"); // const { SubMenu } = Menu;


function SideMenu(_a) {
  // const [collapsed, setCollapsed] = useState(false)
  var collapsed = _a.collapsed; // const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  //   };

  return react_1["default"].createElement(react_2.Box, {
    shadow: 'xl',
    background: 'purple.50'
  }, react_1["default"].createElement(antd_1.Menu, {
    mode: "inline",
    theme: "dark",
    inlineCollapsed: collapsed,
    style: {
      width: '100%',
      height: '100vh',
      background: 'linear-gradient(180.48deg,rgba(115,70,215,1) -26.15%,rgba(57,35,81,1) 189.84%)',
      color: 'white'
    }
  }, react_1["default"].createElement(antd_1.Menu.Item, {
    key: "1",
    icon: react_1["default"].createElement(bi_1.BiHomeAlt, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/'
  }, !collapsed && react_1["default"].createElement(react_2.Box, {
    width: '120px'
  }), "Home")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "2",
    icon: react_1["default"].createElement(bs_1.BsCartCheck, null),
    style: {
      width: '100% !important'
    }
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/products',
    style: {
      width: '100% !important'
    }
  }, "Products")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "3",
    icon: react_1["default"].createElement(fa_1.FaBlog, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/blog'
  }, "Blog"))));
}

exports["default"] = SideMenu;

/***/ }),

/***/ "./resources/js/src/Layouts/GuestLayout/inc/TopNavigation.tsx":
/*!********************************************************************!*\
  !*** ./resources/js/src/Layouts/GuestLayout/inc/TopNavigation.tsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")); // import { BiCog, BiLockOpen, BiPowerOff } from 'react-icons/bi'


var MainLogo_1 = __importDefault(__webpack_require__(/*! ../../../Components/MainLogo */ "./resources/js/src/Components/MainLogo.tsx"));

var bs_1 = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");

function TopNavigation(_a) {
  // const { authUser }: any = usePage().props
  var toggleCollapsed = _a.toggleCollapsed,
      collapsed = _a.collapsed;
  return react_2["default"].createElement(react_1.Box, {
    py: 3,
    w: 'full',
    bg: '#353535',
    position: 'fixed',
    zIndex: 999999
  }, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.2xl'
  }, react_2["default"].createElement(react_1.Flex, {
    justify: 'space-between'
  }, react_2["default"].createElement(react_1.HStack, null, react_2["default"].createElement(react_1.Icon, {
    color: 'white',
    cursor: 'pointer',
    mr: 5,
    onClick: toggleCollapsed,
    as: collapsed ? bs_1.BsTextLeft : bs_1.BsTextCenter,
    w: 8,
    h: 8
  }), react_2["default"].createElement(inertia_react_1.Link, {
    href: '/'
  }, react_2["default"].createElement(MainLogo_1["default"], null))), react_2["default"].createElement(react_1.HStack, null, react_2["default"].createElement(react_1.Flex, {
    py: 2,
    px: 3,
    gap: 3,
    color: 'whiteAlpha.800',
    rounded: '5px',
    cursor: 'pointer'
  }, react_2["default"].createElement(react_1.Menu, null, react_2["default"].createElement(inertia_react_1.Link, {
    href: '/auth/login'
  }, "Login"), react_2["default"].createElement(inertia_react_1.Link, {
    href: '/auth/join_now'
  }, "Sign up")))))));
}

exports["default"] = TopNavigation;

/***/ }),

/***/ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/src/Layouts/UsersLayout/UserLayout.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var FlashMessage_1 = __importDefault(__webpack_require__(/*! ../../Components/FlashMessage */ "./resources/js/src/Components/FlashMessage.tsx"));

var Footer_1 = __importDefault(__webpack_require__(/*! ./inc/Footer */ "./resources/js/src/Layouts/UsersLayout/inc/Footer.tsx"));

var SideMenu_1 = __importDefault(__webpack_require__(/*! ./inc/SideMenu */ "./resources/js/src/Layouts/UsersLayout/inc/SideMenu.tsx"));

var TopNavigation_1 = __importDefault(__webpack_require__(/*! ./inc/TopNavigation */ "./resources/js/src/Layouts/UsersLayout/inc/TopNavigation.tsx"));

function UserLayout(_a) {
  var children = _a.children;
  var successMsg = (0, inertia_react_1.usePage)().props.successMsg;
  var isMobile = (0, react_1.useMediaQuery)('(max-width:1000px)')[0];

  var _b = (0, react_2.useState)(isMobile ? true : false),
      collapsed = _b[0],
      setCollapsed = _b[1];

  var toggleCollapsed = function toggleCollapsed() {
    setCollapsed(!collapsed);
  };

  return react_2["default"].createElement(react_1.Flex, {
    direction: 'column',
    justify: 'space-between'
  }, react_2["default"].createElement(TopNavigation_1["default"], {
    toggleCollapsed: toggleCollapsed,
    collapsed: collapsed
  }), react_2["default"].createElement(react_1.Flex, {
    color: 'white'
  }, react_2["default"].createElement(react_1.Box, {
    as: 'aside',
    zIndex: 9999,
    px: 0,
    width: collapsed ? '80px' : '210px',
    pt: '72px',
    h: '100vh',
    overflow: 'hidden'
  }, react_2["default"].createElement(react_1.Box, {
    style: {
      position: 'fixed',
      height: '100vh',
      zIndex: 999,
      overflowY: 'auto'
    }
  }, react_2["default"].createElement(SideMenu_1["default"], {
    collapsed: collapsed
  }))), react_2["default"].createElement(react_1.Box, {
    color: 'gray.800',
    w: isMobile ? '80%' : '100%',
    minH: '100vh',
    bg: isMobile ? 'white' : 'purple.50',
    dropShadow: 'md'
  }, react_2["default"].createElement(react_1.Box, {
    px: isMobile ? 5 : 10,
    py: '90px',
    minH: '100vh'
  }, children), react_2["default"].createElement(Footer_1["default"], null)), successMsg && react_2["default"].createElement(FlashMessage_1["default"], {
    flash: successMsg,
    type: 'success'
  })));
}

exports["default"] = UserLayout;

/***/ }),

/***/ "./resources/js/src/Layouts/UsersLayout/inc/Footer.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/src/Layouts/UsersLayout/inc/Footer.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function Footer() {
  return react_1["default"].createElement(react_1["default"].Fragment, null);
}

exports["default"] = Footer;

/***/ }),

/***/ "./resources/js/src/Layouts/UsersLayout/inc/SideMenu.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/src/Layouts/UsersLayout/inc/SideMenu.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js"); // import { AppstoreOutlined } from '@ant-design/icons';


var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var ai_1 = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");

var im_1 = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");

var bi_1 = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");

var react_2 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var bs_1 = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");

var fa_1 = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js"); // const { SubMenu } = Menu;


function SideMenu(_a) {
  var collapsed = _a.collapsed;
  var authUser = (0, inertia_react_1.usePage)().props.authUser; // const [collapsed, setCollapsed] = useState(false)
  // const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  //   };

  return react_1["default"].createElement(react_2.Box, {
    shadow: 'xl'
  }, react_1["default"].createElement(antd_1.Menu // defaultSelectedKeys={['1']}
  // defaultOpenKeys={['sub1']}
  , {
    // defaultSelectedKeys={['1']}
    // defaultOpenKeys={['sub1']}
    mode: "inline",
    theme: "dark",
    inlineCollapsed: collapsed,
    style: {
      height: '100vh',
      background: 'linear-gradient(180.48deg,rgba(115,70,215,1) -26.15%,rgba(57,35,81,1) 189.84%)'
    }
  }, authUser && react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(antd_1.Menu.Item, {
    key: "1",
    icon: react_1["default"].createElement(ai_1.AiOutlineDashboard, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/user/dashboard'
  }, "Dashboard")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "2",
    icon: react_1["default"].createElement(im_1.ImTree, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/user/my_geneology'
  }, "My Geneology")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "3",
    icon: react_1["default"].createElement(bi_1.BiStats, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/user/my_statistics'
  }, "Statistics Overview")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "4",
    icon: react_1["default"].createElement(bi_1.BiNetworkChart, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/user/my_network'
  }, "My Network"))), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "5",
    icon: react_1["default"].createElement(bs_1.BsCartCheck, null),
    style: {
      width: '100% !important'
    }
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/products',
    style: {
      width: '100% !important'
    }
  }, "Products")), react_1["default"].createElement(antd_1.Menu.Item, {
    key: "6",
    icon: react_1["default"].createElement(fa_1.FaBlog, null)
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: '/blog'
  }, !collapsed && react_1["default"].createElement(react_2.Box, {
    width: '120px'
  }), "Blog"))));
}

exports["default"] = SideMenu;

/***/ }),

/***/ "./resources/js/src/Layouts/UsersLayout/inc/TopNavigation.tsx":
/*!********************************************************************!*\
  !*** ./resources/js/src/Layouts/UsersLayout/inc/TopNavigation.tsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var bi_1 = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");

var MainLogo_1 = __importDefault(__webpack_require__(/*! ../../../Components/MainLogo */ "./resources/js/src/Components/MainLogo.tsx"));

var bs_1 = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");

var react_moralis_1 = __webpack_require__(/*! react-moralis */ "./node_modules/react-moralis/lib/index.esm.js");

var moralis_1 = __importDefault(__webpack_require__(/*! moralis */ "./node_modules/moralis/index.js")); // import { Inertia } from '@inertiajs/inertia'


function TopNavigation(_a) {
  var _this = this;

  var toggleCollapsed = _a.toggleCollapsed,
      collapsed = _a.collapsed;
  var authUser = (0, inertia_react_1.usePage)().props.authUser;

  var _b = (0, react_moralis_1.useMoralis)(),
      authenticate = _b.authenticate,
      isAuthenticated = _b.isAuthenticated,
      user = _b.user;

  var connectMetaMask = function connectMetaMask() {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!!isAuthenticated) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , authenticate({
              provider: "metamask"
            }).then(function (user) {
              console.log(user.get("ethAddress"));
            })["catch"](function (error) {
              console.log(error);
            })];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  var dissConnect = function dissConnect() {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (isAuthenticated) {
          moralis_1["default"].User.logOut().then(function () {
            // Inertia.get(window.location.pathname)
            window.location.href = window.location.pathname;
          });
        }

        return [2
        /*return*/
        ];
      });
    });
  };

  (0, react_2.useEffect)(function () {
    console.log('Auth User metamask: ', user);
  }, [user]);
  return react_2["default"].createElement(react_1.Box, {
    py: 3,
    w: 'full',
    bg: '#353535',
    color: 'whiteAlpha.800',
    position: 'fixed',
    zIndex: 999999
  }, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.2xl'
  }, react_2["default"].createElement(react_1.Flex, {
    justify: 'space-between'
  }, react_2["default"].createElement(react_1.HStack, null, react_2["default"].createElement(react_1.Icon, {
    color: 'white',
    cursor: 'pointer',
    mr: 5,
    onClick: toggleCollapsed,
    as: collapsed ? bs_1.BsTextLeft : bs_1.BsTextCenter,
    w: 8,
    h: 8
  }), react_2["default"].createElement(inertia_react_1.Link, {
    href: '/'
  }, react_2["default"].createElement(MainLogo_1["default"], null))), react_2["default"].createElement(react_1.HStack, null, react_2["default"].createElement(react_1.Menu, null, !isAuthenticated ? react_2["default"].createElement(react_1.MenuButton, {
    onClick: connectMetaMask,
    as: 'button',
    color: 'white',
    bg: 'blue.900',
    gap: 2
  }, "Connect Metamask") : react_2["default"].createElement(react_1.MenuButton, {
    onClick: dissConnect,
    as: 'button',
    color: 'white',
    gap: 2
  }, "Disconnect Metamask"))), react_2["default"].createElement(react_1.HStack, null, authUser && react_2["default"].createElement(react_1.Menu, null, react_2["default"].createElement(react_1.MenuButton, {
    as: 'a',
    gap: 2
  }, react_2["default"].createElement(react_1.Avatar, {
    size: 'xs',
    mr: 2,
    name: "".concat(authUser === null || authUser === void 0 ? void 0 : authUser.first_name, " ").concat(authUser === null || authUser === void 0 ? void 0 : authUser.last_name),
    src: 'https://bit.ly/sage-adebayo'
  }), authUser === null || authUser === void 0 ? void 0 : authUser.first_name, " ", authUser === null || authUser === void 0 ? void 0 : authUser.last_name), react_2["default"].createElement(react_1.MenuList, null, react_2["default"].createElement(react_1.MenuItem, null, react_2["default"].createElement(inertia_react_1.Link, {
    href: '/user/profile'
  }, react_2["default"].createElement(react_1.Flex, {
    align: 'center',
    gap: 2
  }, react_2["default"].createElement(react_1.Icon, {
    as: bi_1.BiCog,
    color: 'green.500',
    p: 0,
    m: 0
  }), react_2["default"].createElement(react_1.Text, {
    color: 'gray.500'
  }, "Profile")))), react_2["default"].createElement(react_1.MenuItem, null, react_2["default"].createElement(inertia_react_1.Link, {
    href: '/'
  }, react_2["default"].createElement(react_1.Flex, {
    align: 'center',
    gap: 2
  }, react_2["default"].createElement(react_1.Icon, {
    as: bi_1.BiLockOpen,
    color: 'green.500',
    p: 0,
    m: 0
  }), react_2["default"].createElement(react_1.Text, {
    color: 'gray.500'
  }, "Change Password")))), react_2["default"].createElement(react_1.MenuItem, null, react_2["default"].createElement(inertia_react_1.Link, {
    href: "/logout",
    method: "post",
    as: "form"
  }, react_2["default"].createElement(react_1.Flex, {
    align: 'center',
    gap: 2
  }, react_2["default"].createElement(react_1.Icon, {
    as: bi_1.BiPowerOff,
    color: 'green.500',
    p: 0,
    m: 0
  }), react_2["default"].createElement(react_1.Text, {
    color: 'gray.500'
  }, "Sign Out")))))), !authUser && react_2["default"].createElement(react_2["default"].Fragment, null, react_2["default"].createElement(inertia_react_1.Link, {
    href: '/auth/login'
  }, react_2["default"].createElement(react_1.Box, {
    py: 2,
    px: 3,
    color: 'whiteAlpha.800',
    _hover: {
      bg: 'blackAlpha.700'
    },
    rounded: '5px'
  }, "Login")), react_2["default"].createElement(inertia_react_1.Link, {
    href: '/auth/join_now'
  }, react_2["default"].createElement(react_1.Box, {
    py: 2,
    px: 3,
    color: 'whiteAlpha.800',
    _hover: {
      bg: 'blackAlpha.700'
    },
    rounded: '5px'
  }, "Join Now")))))));
}

exports["default"] = TopNavigation;

/***/ }),

/***/ "./resources/js/src/Pages/AboutUs.tsx":
/*!********************************************!*\
  !*** ./resources/js/src/Pages/AboutUs.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var GuestLayout_1 = __importDefault(__webpack_require__(/*! ../Layouts/GuestLayout/GuestLayout */ "./resources/js/src/Layouts/GuestLayout/GuestLayout.tsx"));

function AboutUs() {
  return react_2["default"].createElement(GuestLayout_1["default"], null, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.xl'
  }, react_2["default"].createElement("div", null, "AboutUs")));
}

exports["default"] = AboutUs;

/***/ }),

/***/ "./resources/js/src/Pages/Admin/Dashboard.tsx":
/*!****************************************************!*\
  !*** ./resources/js/src/Pages/Admin/Dashboard.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AccountInfoCards_1 = __importDefault(__webpack_require__(/*! ../../Components/AdminPanel/Dashboard/AccountInfoCards */ "./resources/js/src/Components/AdminPanel/Dashboard/AccountInfoCards.tsx")); // import ReferralClipboard from '../../Components/AdminPanel/Dashboard/ReferralClipboard'


var UsersList_1 = __importDefault(__webpack_require__(/*! ../../Components/AdminPanel/Dashboard/UsersList */ "./resources/js/src/Components/AdminPanel/Dashboard/UsersList.tsx"));

var AdminLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/AdminLayout/AdminLayout */ "./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx")); // import UserLayout from '../../Layouts/AdminLayout/AdminLayout'


function Dashboard(_a) {
  var users = _a.users;
  var authUser = (0, inertia_react_1.usePage)().props.authUser;
  return react_2["default"].createElement(AdminLayout_1["default"], null, react_2["default"].createElement(react_1.Box, {
    w: 'full'
  }, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "Dashboard"), react_2["default"].createElement(react_1.Text, null, "Hello ", authUser === null || authUser === void 0 ? void 0 : authUser.first_name, "! welcome to your dashboard")), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '50px'
  }, react_2["default"].createElement(AccountInfoCards_1["default"], null)), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '20px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_2["default"].createElement(react_1.Heading, {
    mb: 2,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "Recent registrations"), react_2["default"].createElement(UsersList_1["default"], {
    userList: users
  })));
}

exports["default"] = Dashboard;

/***/ }),

/***/ "./resources/js/src/Pages/Admin/MyGeneology.tsx":
/*!******************************************************!*\
  !*** ./resources/js/src/Pages/Admin/MyGeneology.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AdminLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/AdminLayout/AdminLayout */ "./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx"));

function MyGeneology() {
  return react_2["default"].createElement(AdminLayout_1["default"], null, react_2["default"].createElement(react_1.Box, null, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "My Geneology")), react_2["default"].createElement(react_1.Box, {
    mt: '200px',
    w: 'full',
    minH: '200px',
    bg: 'white',
    rounded: 'base',
    shadow: 'base'
  }));
}

exports["default"] = MyGeneology;

/***/ }),

/***/ "./resources/js/src/Pages/Admin/MyStatistics.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/src/Pages/Admin/MyStatistics.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AccountInfoChart_1 = __importDefault(__webpack_require__(/*! ../../Components/AdminPanel/Dashboard/AccountInfoChart */ "./resources/js/src/Components/AdminPanel/Dashboard/AccountInfoChart.tsx"));

var UsersList_1 = __importDefault(__webpack_require__(/*! ../../Components/AdminPanel/Dashboard/UsersList */ "./resources/js/src/Components/AdminPanel/Dashboard/UsersList.tsx"));

var AdminLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/AdminLayout/AdminLayout */ "./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx")); // import UserLayout from '../../Layouts/UsersLayout/UserLayout'


function MyStatistics(_a) {
  var users = _a.users;
  return react_2["default"].createElement(AdminLayout_1["default"], null, react_2["default"].createElement(react_1.Box, {
    w: 'full'
  }, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "Statistics Overview")), react_2["default"].createElement(react_1.Box, {
    mt: '50px',
    w: 'full'
  }, react_2["default"].createElement(AccountInfoChart_1["default"], null)), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '20px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_2["default"].createElement(react_1.Heading, {
    mb: 2,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "Recent registrations"), react_2["default"].createElement(react_1.Text, {
    mb: 5,
    color: 'gray.500'
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis."), react_2["default"].createElement(UsersList_1["default"], {
    userList: users
  })));
}

exports["default"] = MyStatistics;

/***/ }),

/***/ "./resources/js/src/Pages/Admin/Packages/Index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/src/Pages/Admin/Packages/Index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AdminLayout_1 = __importDefault(__webpack_require__(/*! ../../../Layouts/AdminLayout/AdminLayout */ "./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx"));

var PackageList_1 = __importDefault(__webpack_require__(/*! ./../../../Components/AdminPanel/Dashboard/PackageList */ "./resources/js/src/Components/AdminPanel/Dashboard/PackageList.tsx"));

function Index(_a) {
  var packages = _a.packages;
  return react_2["default"].createElement(AdminLayout_1["default"], null, react_2["default"].createElement(react_1.Box, null, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "Packages")), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '30px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_2["default"].createElement(react_1.Heading, {
    mb: 2,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "All Package list"), react_2["default"].createElement(PackageList_1["default"], {
    packages: packages
  })));
}

exports["default"] = Index;

/***/ }),

/***/ "./resources/js/src/Pages/Admin/Product/Create.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/src/Pages/Admin/Product/Create.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AdminLayout_1 = __importDefault(__webpack_require__(/*! ../../../Layouts/AdminLayout/AdminLayout */ "./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx"));

var react_2 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_3 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

function Create() {
  var _a = (0, inertia_react_1.useForm)({
    name: '',
    price: '',
    content: ''
  }),
      data = _a.data,
      setData = _a.setData,
      processing = _a.processing;

  var handleCreate = function handleCreate() {
    inertia_1.Inertia.post('/admin/product/store', data);
  };

  return react_1["default"].createElement(AdminLayout_1["default"], null, react_1["default"].createElement(react_2.Box, null, react_1["default"].createElement(react_2.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "Create Product")), react_1["default"].createElement(react_2.Box, {
    w: 'full',
    mt: '30px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_1["default"].createElement(react_2.Heading, {
    mb: 2,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "Create Product"), react_1["default"].createElement(react_2.Box, {
    py: 5
  }, react_1["default"].createElement(react_2.SimpleGrid, {
    columns: {
      base: 1,
      md: 2
    },
    spacing: 5
  }, react_1["default"].createElement(react_3.FormControl, null, react_1["default"].createElement(react_3.FormLabel, {
    htmlFor: 'product_name'
  }, "Product Name"), react_1["default"].createElement(react_2.Input, {
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        name: e.target.value
      }));
    },
    value: data.name,
    id: 'product_name',
    type: 'text',
    placeholder: 'Enter product name'
  })), react_1["default"].createElement(react_3.FormControl, null, react_1["default"].createElement(react_3.FormLabel, {
    htmlFor: 'product_price'
  }, "Product Price"), react_1["default"].createElement(react_2.Input, {
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        price: e.target.value
      }));
    },
    value: data.price,
    id: 'product_price',
    type: 'number',
    placeholder: 'Enter product price'
  }))), react_1["default"].createElement(react_3.FormControl, {
    mt: 5
  }, react_1["default"].createElement(react_3.FormLabel, {
    htmlFor: 'product_name'
  }, "Product Content"), react_1["default"].createElement(react_2.Input, {
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        content: e.target.value
      }));
    },
    value: data.content,
    as: 'textarea',
    minH: 300,
    placeholder: 'Enter product description'
  })), react_1["default"].createElement(react_2.Button, {
    onClick: handleCreate,
    colorScheme: 'green',
    mt: 5
  }, "Create Product"))));
}

exports["default"] = Create;

/***/ }),

/***/ "./resources/js/src/Pages/Admin/Product/List.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/src/Pages/Admin/Product/List.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AdminLayout_1 = __importDefault(__webpack_require__(/*! ../../../Layouts/AdminLayout/AdminLayout */ "./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx"));

var react_2 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var ProductList_1 = __importDefault(__webpack_require__(/*! ../../../Components/AdminPanel/Dashboard/ProductList */ "./resources/js/src/Components/AdminPanel/Dashboard/ProductList.tsx"));

function List(_a) {
  var products = _a.products;
  return react_1["default"].createElement(AdminLayout_1["default"], null, react_1["default"].createElement(react_2.Box, null, react_1["default"].createElement(react_2.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "Product List")), react_1["default"].createElement(ProductList_1["default"], {
    products: products
  }));
}

exports["default"] = List;

/***/ }),

/***/ "./resources/js/src/Pages/Admin/User.tsx":
/*!***********************************************!*\
  !*** ./resources/js/src/Pages/Admin/User.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var react_full_screen_1 = __webpack_require__(/*! react-full-screen */ "./node_modules/react-full-screen/dist/index.modern.js");

var Geneology_1 = __importDefault(__webpack_require__(/*! ../../Components/UserPanel/Geneology/Geneology */ "./resources/js/src/Components/UserPanel/Geneology/Geneology.tsx"));

var AdminLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/AdminLayout/AdminLayout */ "./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx"));

var use_react_screenshot_1 = __webpack_require__(/*! use-react-screenshot */ "./node_modules/use-react-screenshot/dist/index.es.js");

var use_react_screenshot_2 = __webpack_require__(/*! use-react-screenshot */ "./node_modules/use-react-screenshot/dist/index.es.js");

var ai_1 = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

function User(_a) {
  var _b, _c;

  var dataSource = _a.dataSource,
      levels = _a.levels,
      user = _a.user,
      totalReferences = _a.totalReferences,
      packages = _a.packages;

  var _d = (0, react_1.useDisclosure)(),
      isOpen = _d.isOpen,
      onOpen = _d.onOpen,
      onClose = _d.onClose; // const {userId} = usePage().props


  var screen = (0, react_full_screen_1.useFullScreenHandle)();

  var _e = (0, react_2.useState)(''),
      selectedRank = _e[0],
      setSelectedRank = _e[1];

  var ref = (0, react_2.createRef)();

  var _f = (0, use_react_screenshot_1.useScreenshot)({
    type: "image/jpeg",
    quality: 1.0
  }),
      takeScreenShot = _f[1];

  var download = function download(image, _a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.name,
        name = _c === void 0 ? "geneology" : _c,
        _d = _b.extension,
        extension = _d === void 0 ? "jpg" : _d;

    var a = document.createElement("a");
    a.href = image;
    a.download = (0, use_react_screenshot_2.createFileName)(extension, name);
    a.click();
    return;
  };

  var downloadScreenshot = function downloadScreenshot() {
    return takeScreenShot(ref.current).then(download);
  };

  (0, react_2.useEffect)(function () {
    console.log('dataSource: ', screen);
  }, [screen]);

  var _g = (0, react_2.useState)(false),
      enableZoom = _g[0],
      setEnableZoom = _g[1];

  var handleChnageRank = function handleChnageRank() {
    if (selectedRank == null) return alert('Please select a rank to make the change!');
    inertia_1.Inertia.post('/admin/user/change-rank', {
      selectedRank: selectedRank,
      userId: user.id
    });
    onClose();
  };

  return react_2["default"].createElement(AdminLayout_1["default"], null, react_2["default"].createElement(react_1.Box, null, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "User Profile")), react_2["default"].createElement(react_1.Flex, {
    color: 'gray.700',
    gap: 3,
    mt: 10
  }, react_2["default"].createElement(react_1.Flex, {
    height: '250px',
    flex: '1',
    justify: 'center',
    direction: 'column',
    alignItems: 'center',
    p: 5,
    bg: 'white'
  }, react_2["default"].createElement(react_1.Avatar, {
    size: '2xl',
    mb: 2,
    name: "".concat(user.first_name, " ").concat(user.last_name),
    src: ''
  }), react_2["default"].createElement(react_1.Text, {
    as: 'h2',
    fontSize: '2xl'
  }, "".concat(user.first_name, " ").concat(user.last_name))), react_2["default"].createElement(react_1.Box, {
    flex: '2',
    py: 3,
    px: 5,
    bg: 'white'
  }, react_2["default"].createElement(react_1.Text, {
    as: 'h2',
    fontSize: 'xl',
    fontWeight: 'bold'
  }, "Profile Info"), react_2["default"].createElement(react_1.Box, {
    w: '100%',
    mt: 4
  }, react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    p: 2,
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Join Data"), react_2["default"].createElement(react_1.Text, null, (0, moment_1["default"])(user.createdAt).format('l'))), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    p: 2,
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Name"), react_2["default"].createElement(react_1.Text, null, "".concat(user.first_name, " ").concat(user.last_name))), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    align: 'center',
    p: 2,
    borderBottom: '0px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Email"), react_2["default"].createElement(react_1.Text, null, user.email)))), react_2["default"].createElement(react_1.Box, {
    flex: '2',
    py: 3,
    px: 5,
    bg: 'white'
  }, react_2["default"].createElement(react_1.Text, {
    as: 'h2',
    fontSize: 'xl',
    fontWeight: 'bold'
  }, "Account"), react_2["default"].createElement(react_1.Box, {
    w: '100%',
    mt: 4
  }, react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    p: 2,
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Total references"), react_2["default"].createElement(react_1.Text, null, totalReferences, " members")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    align: 'center',
    p: 2,
    borderBottom: '0px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Rank"), react_2["default"].createElement(react_1.Badge, {
    colorScheme: 'purple',
    variant: 'solid'
  }, user["package"]["package"]))), react_2["default"].createElement(react_1.Box, {
    w: '100%',
    mt: 4
  }, react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between'
  }, react_2["default"].createElement(react_1.Button, {
    onClick: onOpen,
    colorScheme: 'teal',
    variant: 'solid'
  }, "Change Rank"), react_2["default"].createElement(react_1.Modal, {
    isOpen: isOpen,
    onClose: onClose
  }, react_2["default"].createElement(react_1.ModalOverlay, null), react_2["default"].createElement(react_1.ModalContent, {
    mt: 100
  }, react_2["default"].createElement(react_1.ModalHeader, null, "Change Rank"), react_2["default"].createElement(react_1.ModalCloseButton, null), react_2["default"].createElement(react_1.ModalBody, null, "When the modal opens, focus is sent into the modal and set to the first tabbable element. If there are no tabbled elements", react_2["default"].createElement(react_1.Box, {
    py: 5,
    px: 5
  }, react_2["default"].createElement(react_1.Select, {
    onChange: function onChange(e) {
      return setSelectedRank(e.target.value);
    },
    placeholder: 'Select rank'
  }, packages.map(function (pkg, index) {
    return react_2["default"].createElement("option", {
      selected: user["package"].id == pkg.id ? true : false,
      key: index,
      value: pkg.id
    }, pkg["package"]);
  })))), react_2["default"].createElement(react_1.ModalFooter, null, react_2["default"].createElement(react_1.Button, {
    variant: 'solid',
    mr: 3,
    onClick: onClose
  }, "Close"), react_2["default"].createElement(react_1.Button, {
    onClick: handleChnageRank,
    variant: 'solid',
    colorScheme: 'teal'
  }, "Confirm change")))))))), react_2["default"].createElement(react_1.Box, {
    mt: '30px',
    p: 3,
    w: 'full',
    minH: '300px',
    bg: 'white',
    rounded: 'base',
    shadow: 'base'
  }, react_2["default"].createElement(react_1.Box, null, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '20px'
  }, "Level record")), react_2["default"].createElement(react_1.Box, {
    flex: '3',
    py: 3,
    bg: 'white'
  }, react_2["default"].createElement(react_1.Box, {
    w: '100%'
  }, react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, null, "Level One"), react_2["default"].createElement(react_1.Text, null, levels.levelOne, " members "), react_2["default"].createElement(react_1.Text, null, "(", user["package"].level_one, "% profit)")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, null, "Level Two"), react_2["default"].createElement(react_1.Text, null, levels.levelTwo, " members"), react_2["default"].createElement(react_1.Text, null, "(", user["package"].level_two, "% profit)")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, null, "Level Three"), react_2["default"].createElement(react_1.Text, null, levels.levelThree, " members"), react_2["default"].createElement(react_1.Text, null, "(", user["package"].level_three, "% profit)")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, null, "Level Four"), react_2["default"].createElement(react_1.Text, null, levels.levelFour, " members"), react_2["default"].createElement(react_1.Text, null, user["package"].level_four, "% profit)")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, null, "Level Five"), react_2["default"].createElement(react_1.Text, null, levels.levelFive, " members"), react_2["default"].createElement(react_1.Text, null, "(", user["package"].level_five, "% profit)")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, null, "Level Six"), react_2["default"].createElement(react_1.Text, null, levels.levelSix, " members"), react_2["default"].createElement(react_1.Text, null, "(", user["package"].level_six, "% profit)")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px'
  }, react_2["default"].createElement(react_1.Text, null, "Level Seven"), react_2["default"].createElement(react_1.Text, null, levels.levelSeven, " members"), react_2["default"].createElement(react_1.Text, null, "(", user["package"].level_seven, "% profit)"))))), react_2["default"].createElement(react_full_screen_1.FullScreen, {
    handle: screen
  }, react_2["default"].createElement(react_1.Box, {
    py: 5,
    px: 5,
    bg: 'white',
    mt: '30px'
  }, react_2["default"].createElement(react_1.Flex, null, react_2["default"].createElement(react_1.FormControl, {
    display: 'flex',
    alignItems: 'center'
  }, react_2["default"].createElement(react_1.FormLabel, {
    htmlFor: 'email-alerts',
    mb: '0'
  }, "Enable Zooming"), react_2["default"].createElement(react_1.Switch, {
    onChange: function onChange() {
      return setEnableZoom(!enableZoom);
    },
    id: 'email-alerts'
  })), react_2["default"].createElement(react_1.Icon, {
    fontSize: '22px',
    mr: 5,
    cursor: 'pointer',
    onClick: downloadScreenshot,
    as: ai_1.AiOutlineDownload
  }), screen.active == false ? react_2["default"].createElement(react_1.Icon, {
    fontSize: '22px',
    cursor: 'pointer',
    onClick: screen.enter,
    as: ai_1.AiOutlineFullscreen
  }) : react_2["default"].createElement(react_1.Icon, {
    fontSize: '22px',
    cursor: 'pointer',
    onClick: screen.exit,
    as: ai_1.AiOutlineFullscreenExit
  }))), react_2["default"].createElement(react_1.Box, {
    position: 'relative',
    width: '100%',
    minHeight: ((_b = dataSource === null || dataSource === void 0 ? void 0 : dataSource.children) === null || _b === void 0 ? void 0 : _b.length) ? '100vh' : '200px',
    bg: 'white',
    rounded: 'base',
    shadow: 'base',
    overflow: 'auto'
  }, react_2["default"].createElement(react_1.Box, {
    position: 'absolute',
    ref: ref
  }, ((_c = dataSource === null || dataSource === void 0 ? void 0 : dataSource.children) === null || _c === void 0 ? void 0 : _c.length) ? react_2["default"].createElement(Geneology_1["default"], {
    enableZoom: enableZoom,
    dataSource: dataSource
  }) : react_2["default"].createElement(react_1.Flex, {
    direction: 'column',
    gap: 2,
    p: 5
  }, react_2["default"].createElement(react_1.Center, null, react_2["default"].createElement(react_1.Text, {
    fontSize: 'xl',
    fontWeight: 'semibold',
    color: 'gray.600'
  }, "Geneology not created")))))));
}

exports["default"] = User;

/***/ }),

/***/ "./resources/js/src/Pages/Admin/Users.tsx":
/*!************************************************!*\
  !*** ./resources/js/src/Pages/Admin/Users.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var UsersList_1 = __importDefault(__webpack_require__(/*! ../../Components/AdminPanel/Dashboard/UsersList */ "./resources/js/src/Components/AdminPanel/Dashboard/UsersList.tsx"));

var AdminLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/AdminLayout/AdminLayout */ "./resources/js/src/Layouts/AdminLayout/AdminLayout.tsx")); // import UserLayout from '../../Layouts/UsersLayout/UserLayout'


function Users(_a) {
  var users = _a.users;
  console.log('All users: ', users);
  return react_2["default"].createElement(AdminLayout_1["default"], null, react_2["default"].createElement(react_1.Box, null, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "Users")), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '30px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_2["default"].createElement(react_1.Heading, {
    mb: 2,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "All Registered Users"), react_2["default"].createElement(UsersList_1["default"], {
    userList: users
  })));
}

exports["default"] = Users;

/***/ }),

/***/ "./resources/js/src/Pages/Auth/Login.tsx":
/*!***********************************************!*\
  !*** ./resources/js/src/Pages/Auth/Login.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js"); // import { Inertia } from '@inertiajs/inertia'


var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx")); // import { Spinner } from '@chakra-ui/react'


function Login() {
  var errors = (0, inertia_react_1.usePage)().props.errors;

  var _a = (0, inertia_react_1.useForm)({
    email: '',
    password: '',
    remember: false
  }),
      data = _a.data,
      setData = _a.setData,
      post = _a.post,
      processing = _a.processing;

  var handleSubmit = function handleSubmit(e) {
    //  alert(e)
    e.preventDefault(); // setTimeout(() => {

    post('/login', data); // }, 10000)
  };

  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.xl'
  }, react_2["default"].createElement(react_1.Box, {
    py: 10,
    mx: "auto"
  }, react_2["default"].createElement(react_1.SimpleGrid, {
    alignItems: "center",
    w: {
      base: "full",
      xl: 11 / 12
    },
    columns: {
      base: 1,
      lg: 11
    },
    gap: {
      base: 0,
      lg: 24
    },
    mx: "auto"
  }, react_2["default"].createElement(react_1.GridItem, {
    colSpan: {
      base: "auto",
      lg: 6
    },
    textAlign: {
      base: "center",
      lg: "left"
    }
  }, react_2["default"].createElement(react_1.chakra.h1, {
    mb: 4,
    fontSize: {
      base: "3xl",
      md: "4xl"
    },
    fontWeight: "bold",
    lineHeight: {
      base: "shorter",
      md: "none"
    },
    // color={useColorModeValue("gray.900", "gray.200")}
    color: 'gray.900',
    letterSpacing: {
      base: "normal",
      md: "tight"
    }
  }, "Welcome back!"), react_2["default"].createElement(react_1.chakra.p, {
    mb: {
      base: 10,
      md: 4
    },
    fontSize: {
      base: "lg",
      md: "xl"
    },
    fontWeight: "thin",
    color: "gray.500",
    letterSpacing: "wider"
  }, "Low-latency voice and video feels like you\u2019re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.")), react_2["default"].createElement(react_1.GridItem, {
    colSpan: {
      base: "auto",
      md: 5
    }
  }, react_2["default"].createElement(react_1.Box, {
    as: "form",
    py: 3,
    mb: 6,
    rounded: "lg",
    shadow: "xl"
  }, react_2["default"].createElement(react_1.Center, {
    pb: 0,
    color: 'gray.700'
  }, react_2["default"].createElement(react_1.Text, {
    pt: 2,
    fontWeight: 'bold',
    fontSize: '20px'
  }, "Login to your account")), react_2["default"].createElement(react_1.SimpleGrid, {
    columns: 1,
    px: 6,
    py: 4,
    spacing: 4,
    borderColor: 'gray.200'
  }, react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "Email Address"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "email",
    placeholder: "Email Address",
    // required={true}
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        email: e.target.value
      }));
    },
    value: data.email
  }), (errors === null || errors === void 0 ? void 0 : errors.email) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.email)), react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "Password"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "password",
    placeholder: "Password",
    // required={true}
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        password: e.target.value
      }));
    },
    value: data.password
  }), (errors === null || errors === void 0 ? void 0 : errors.password) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.password), (errors === null || errors === void 0 ? void 0 : errors.login) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.login)), react_2["default"].createElement(react_1.Button, {
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    isLoading: processing,
    loadingText: 'Just a moment',
    colorScheme: 'purple',
    variant: 'solid',
    spinnerPlacement: 'end'
  }, "Sign in"))), react_2["default"].createElement(react_1.chakra.p, {
    fontSize: "xs",
    textAlign: "center",
    color: "gray.600"
  }, "By signing up you agree to our", " ", react_2["default"].createElement(react_1.chakra.a, {
    color: "brand.500"
  }, "Terms of Service")))))));
}

exports["default"] = Login;

/***/ }),

/***/ "./resources/js/src/Pages/Auth/Register.tsx":
/*!**************************************************!*\
  !*** ./resources/js/src/Pages/Auth/Register.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js"); // import { Inertia } from '@inertiajs/inertia'


var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx"));

var react_moralis_1 = __webpack_require__(/*! react-moralis */ "./node_modules/react-moralis/lib/index.esm.js");

function Register() {
  var _this = this;

  var _a;

  var _b = (0, inertia_react_1.usePage)().props,
      errors = _b.errors,
      ref_inv = _b.ref_inv,
      src_inv = _b.src_inv;

  var _c = (0, react_moralis_1.useMoralis)(),
      signup = _c.signup,
      isAuthenticated = _c.isAuthenticated;

  var _d = (0, inertia_react_1.useForm)({
    first_name: '',
    last_name: '',
    email: '',
    ref_id: ref_inv && ref_inv,
    source: src_inv && src_inv,
    password: '',
    confirmPassword: ''
  }),
      data = _d.data,
      setData = _d.setData,
      post = _d.post,
      processing = _d.processing;

  console.log('usePage().props: ', (_a = (0, inertia_react_1.usePage)().props) === null || _a === void 0 ? void 0 : _a.errors);

  var handleSubmit = function handleSubmit(e) {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        //  alert(e)
        e.preventDefault();
        post('/register', data);
        return [2
        /*return*/
        ];
      });
    });
  };

  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.xl'
  }, react_2["default"].createElement(react_1.Box, {
    py: 10,
    mx: "auto"
  }, react_2["default"].createElement(react_1.SimpleGrid, {
    alignItems: "center",
    w: {
      base: "full",
      xl: 11 / 12
    },
    columns: {
      base: 1,
      lg: 11
    },
    gap: {
      base: 0,
      lg: 24
    },
    mx: "auto"
  }, react_2["default"].createElement(react_1.GridItem, {
    colSpan: {
      base: "auto",
      lg: 6
    },
    textAlign: {
      base: "center",
      lg: "left"
    }
  }, react_2["default"].createElement(react_1.chakra.h1, {
    mb: 4,
    fontSize: {
      base: "3xl",
      md: "4xl"
    },
    fontWeight: "bold",
    lineHeight: {
      base: "shorter",
      md: "none"
    },
    // color={useColorModeValue("gray.900", "gray.200")}
    color: 'gray.900',
    letterSpacing: {
      base: "normal",
      md: "tight"
    }
  }, isAuthenticated ? 'You are authenticated with Moralis' : 'Ready to start your journey?'), react_2["default"].createElement(react_1.chakra.p, {
    mb: {
      base: 10,
      md: 4
    },
    fontSize: {
      base: "lg",
      md: "xl"
    },
    fontWeight: "thin",
    color: "gray.500",
    letterSpacing: "wider"
  }, "Low-latency voice and video feels like you\u2019re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.")), react_2["default"].createElement(react_1.GridItem, {
    colSpan: {
      base: "auto",
      md: 5
    }
  }, react_2["default"].createElement(react_1.Box, {
    as: "form",
    py: 3,
    mb: 6,
    rounded: "lg",
    shadow: "xl"
  }, react_2["default"].createElement(react_1.Center, {
    pb: 0,
    color: 'gray.700'
  }, react_2["default"].createElement(react_1.Text, {
    pt: 2,
    fontWeight: 'bold',
    fontSize: '20px'
  }, "Create your account now")), react_2["default"].createElement(react_1.SimpleGrid, {
    columns: 1,
    px: 6,
    py: 4,
    spacing: 4,
    borderColor: 'gray.200'
  }, react_2["default"].createElement(react_1.Flex, {
    direction: {
      base: 'column',
      sm: 'column',
      md: 'row',
      lg: 'row'
    },
    gap: 3
  }, react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "First Name"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "text",
    placeholder: "First Name",
    // required={true}
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        first_name: e.target.value
      }));
    },
    value: data.first_name
  }), (errors === null || errors === void 0 ? void 0 : errors.first_name) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.first_name)), react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "Last Name"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "text",
    placeholder: "Last Name",
    // required={true}
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        last_name: e.target.value
      }));
    },
    value: data.last_name
  }), (errors === null || errors === void 0 ? void 0 : errors.last_name) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.last_name))), react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "Email Address"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "email",
    placeholder: "Email Address",
    // required={true}
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        email: e.target.value
      }));
    },
    value: data.email
  }), (errors === null || errors === void 0 ? void 0 : errors.email) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.email)), react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "Reference ID"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "text",
    placeholder: "Reference ID",
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        ref_id: e.target.value
      }));
    },
    value: data.ref_id
  }), (errors === null || errors === void 0 ? void 0 : errors.ref_id) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.ref_id)), react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "Password"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "password",
    placeholder: "Password",
    // required={true}
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        password: e.target.value
      }));
    },
    value: data.password
  }), (errors === null || errors === void 0 ? void 0 : errors.password) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.password)), react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "Confirm Password"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "password",
    placeholder: "Confirm Password",
    // required={true}
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        confirmPassword: e.target.value
      }));
    },
    value: data.confirmPassword
  })), react_2["default"].createElement(react_1.Button, {
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    isLoading: processing,
    loadingText: 'Creating account',
    colorScheme: 'purple',
    variant: 'solid',
    spinnerPlacement: 'end'
  }, "Sign up for free"))), react_2["default"].createElement(react_1.chakra.p, {
    fontSize: "xs",
    textAlign: "center",
    color: "gray.600"
  }, "By signing up you agree to our", " ", react_2["default"].createElement(react_1.chakra.a, {
    color: "brand.500"
  }, "Terms of Service")))))));
}

exports["default"] = Register;

/***/ }),

/***/ "./resources/js/src/Pages/Blog.tsx":
/*!*****************************************!*\
  !*** ./resources/js/src/Pages/Blog.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx")); // import { Spinner } from '@chakra-ui/react'


function Blog() {
  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.xl'
  }, react_2["default"].createElement(react_1.Box, {
    py: 10,
    mx: "auto"
  }, react_2["default"].createElement(react_1.SimpleGrid, {
    alignItems: "center",
    w: {
      base: "full",
      xl: 11 / 12
    },
    columns: {
      base: 1,
      lg: 11
    },
    gap: {
      base: 0,
      lg: 24
    },
    mx: "auto"
  }, react_2["default"].createElement(react_1.GridItem, {
    colSpan: {
      base: "auto",
      lg: 6
    },
    textAlign: {
      base: "center",
      lg: "left"
    }
  }, react_2["default"].createElement(react_1.chakra.h1, {
    mb: 4,
    fontSize: {
      base: "3xl",
      md: "4xl"
    },
    fontWeight: "bold",
    lineHeight: {
      base: "shorter",
      md: "none"
    },
    // color={useColorModeValue("gray.900", "gray.200")}
    color: 'gray.900',
    letterSpacing: {
      base: "normal",
      md: "tight"
    }
  }, "Blog"), react_2["default"].createElement(react_1.chakra.p, {
    mb: {
      base: 10,
      md: 4
    },
    fontSize: {
      base: "lg",
      md: "xl"
    },
    fontWeight: "thin",
    color: "gray.500",
    letterSpacing: "wider"
  }, "Low-latency voice and video feels like you\u2019re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.")), react_2["default"].createElement(react_1.GridItem, {
    colSpan: {
      base: "auto",
      md: 5
    }
  })))));
}

exports["default"] = Blog;

/***/ }),

/***/ "./resources/js/src/Pages/Home.tsx":
/*!*****************************************!*\
  !*** ./resources/js/src/Pages/Home.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js"); // import { Inertia } from '@inertiajs/inertia'


var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx")); // import { Spinner } from '@chakra-ui/react'


function Login() {
  var errors = (0, inertia_react_1.usePage)().props.errors;

  var _a = (0, inertia_react_1.useForm)({
    email: '',
    password: '',
    remember: false
  }),
      data = _a.data,
      setData = _a.setData,
      post = _a.post,
      processing = _a.processing;

  var handleSubmit = function handleSubmit(e) {
    //  alert(e)
    e.preventDefault(); // setTimeout(() => {

    post('/login', data); // }, 10000)
  };

  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.xl'
  }, react_2["default"].createElement(react_1.Box, {
    py: 10,
    mx: "auto"
  }, react_2["default"].createElement(react_1.SimpleGrid, {
    alignItems: "center",
    w: {
      base: "full",
      xl: 11 / 12
    },
    columns: {
      base: 1,
      lg: 11
    },
    gap: {
      base: 0,
      lg: 24
    },
    mx: "auto"
  }, react_2["default"].createElement(react_1.GridItem, {
    colSpan: {
      base: "auto",
      lg: 6
    },
    textAlign: {
      base: "center",
      lg: "left"
    }
  }, react_2["default"].createElement(react_1.chakra.h1, {
    mb: 4,
    fontSize: {
      base: "3xl",
      md: "4xl"
    },
    fontWeight: "bold",
    lineHeight: {
      base: "shorter",
      md: "none"
    },
    // color={useColorModeValue("gray.900", "gray.200")}
    color: 'gray.900',
    letterSpacing: {
      base: "normal",
      md: "tight"
    }
  }, "Welcome back to home!"), react_2["default"].createElement(react_1.chakra.p, {
    mb: {
      base: 10,
      md: 4
    },
    fontSize: {
      base: "lg",
      md: "xl"
    },
    fontWeight: "thin",
    color: "gray.500",
    letterSpacing: "wider"
  }, "Low-latency voice and video feels like you\u2019re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.")), react_2["default"].createElement(react_1.GridItem, {
    colSpan: {
      base: "auto",
      md: 5
    }
  }, react_2["default"].createElement(react_1.Box, {
    as: "form",
    py: 3,
    mb: 6,
    rounded: "lg",
    shadow: "xl"
  }, react_2["default"].createElement(react_1.Center, {
    pb: 0,
    color: 'gray.700'
  }, react_2["default"].createElement(react_1.Text, {
    pt: 2,
    fontWeight: 'bold',
    fontSize: '20px'
  }, "Login to your account")), react_2["default"].createElement(react_1.SimpleGrid, {
    columns: 1,
    px: 6,
    py: 4,
    spacing: 4,
    borderColor: 'gray.200'
  }, react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "Email Address"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "email",
    placeholder: "Email Address",
    // required={true}
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        email: e.target.value
      }));
    },
    value: data.email
  }), (errors === null || errors === void 0 ? void 0 : errors.email) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.email)), react_2["default"].createElement(react_1.Flex, {
    direction: 'column'
  }, react_2["default"].createElement(react_1.VisuallyHidden, null, "Password"), react_2["default"].createElement(react_1.Input, {
    mt: 0,
    type: "password",
    placeholder: "Password",
    // required={true}
    onChange: function onChange(e) {
      return setData(__assign(__assign({}, data), {
        password: e.target.value
      }));
    },
    value: data.password
  }), (errors === null || errors === void 0 ? void 0 : errors.password) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.password), (errors === null || errors === void 0 ? void 0 : errors.login) && react_2["default"].createElement(react_1.Text, {
    color: 'red.400'
  }, errors === null || errors === void 0 ? void 0 : errors.login)), react_2["default"].createElement(react_1.Button, {
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    isLoading: processing,
    loadingText: 'Just a moment',
    colorScheme: 'purple',
    variant: 'solid',
    spinnerPlacement: 'end'
  }, "Sign in"))), react_2["default"].createElement(react_1.chakra.p, {
    fontSize: "xs",
    textAlign: "center",
    color: "gray.600"
  }, "By signing up you agree to our", " ", react_2["default"].createElement(react_1.chakra.a, {
    color: "brand.500"
  }, "Terms of Service")))))));
}

exports["default"] = Login;

/***/ }),

/***/ "./resources/js/src/Pages/Products.tsx":
/*!*********************************************!*\
  !*** ./resources/js/src/Pages/Products.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx"));

var react_3 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

function Products(_a) {
  var products = _a.products;

  var handleByProduct = function handleByProduct(productId) {
    inertia_1.Inertia.post('/user/buy_product', {
      productId: productId
    });
  };

  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Container, {
    maxW: 'container.xl'
  }, react_2["default"].createElement(react_1.Box, {
    py: 5,
    mx: "auto"
  }, react_2["default"].createElement(react_1.SimpleGrid, {
    alignItems: "center",
    w: {
      base: "full",
      xl: 11 / 12
    },
    columns: {
      base: 1,
      lg: 11
    },
    gap: {
      base: 0,
      lg: 24
    }
  }, react_2["default"].createElement(react_1.GridItem, {
    colSpan: {
      base: "auto",
      lg: 6
    },
    textAlign: {
      base: "center",
      lg: "left"
    }
  }, react_2["default"].createElement(react_1.chakra.h1, {
    mb: 4,
    fontSize: {
      base: "3xl",
      md: "4xl"
    },
    fontWeight: "bold",
    lineHeight: {
      base: "shorter",
      md: "none"
    },
    // color={useColorModeValue("gray.900", "gray.200")}
    color: 'gray.900',
    letterSpacing: {
      base: "normal",
      md: "tight"
    }
  }, "Products"), react_2["default"].createElement(react_1.chakra.p, {
    mb: {
      base: 10,
      md: 4
    },
    fontSize: {
      base: "lg",
      md: "xl"
    },
    fontWeight: "thin",
    color: "gray.500",
    letterSpacing: "wider"
  }, "Low-latency voice and video feels like you\u2019re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.")))), react_2["default"].createElement(react_1.Box, {
    mx: "auto"
  }, react_2["default"].createElement(react_1.SimpleGrid, {
    columns: {
      base: 1,
      sm: 1,
      md: 3,
      lg: 4
    },
    gap: 4
  }, products.map(function (product, index) {
    return react_2["default"].createElement(react_3.Center, {
      key: index
    }, react_2["default"].createElement(react_1.Box, {
      maxW: '320px',
      w: 'full',
      bg: (0, react_3.useColorModeValue)('white', 'gray.900'),
      boxShadow: 'md',
      rounded: 'lg',
      p: 4,
      textAlign: 'center'
    }, react_2["default"].createElement(react_1.Image, {
      src: product.image,
      mb: 3
    }), react_2["default"].createElement(react_3.Heading, {
      fontSize: '2xl',
      fontFamily: 'body',
      mb: 3
    }, product.name), react_2["default"].createElement(react_3.Text, {
      textAlign: 'center',
      color: (0, react_3.useColorModeValue)('gray.700', 'gray.400'),
      px: 3
    }, product.content), react_2["default"].createElement(react_3.Stack, {
      mt: 8,
      direction: 'row',
      spacing: 4,
      justifyItems: 'center',
      alignItems: 'center'
    }, react_2["default"].createElement(react_3.Text, null, "$", product.price), react_2["default"].createElement(react_3.Button, {
      onClick: function onClick() {
        return handleByProduct(product.id);
      },
      flex: 1,
      fontSize: 'sm',
      rounded: 'full',
      bg: 'blue.400',
      color: 'white',
      // boxShadow={
      //   '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
      // }
      _hover: {
        bg: 'blue.500'
      },
      _focus: {
        bg: 'blue.500'
      }
    }, "Buy Now"))));
  })))));
}

exports["default"] = Products;

/***/ }),

/***/ "./resources/js/src/Pages/Test/TestReact.tsx":
/*!***************************************************!*\
  !*** ./resources/js/src/Pages/Test/TestReact.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var GuestLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/GuestLayout/GuestLayout */ "./resources/js/src/Layouts/GuestLayout/GuestLayout.tsx"));

function TestReact() {
  return react_1["default"].createElement(GuestLayout_1["default"], null, react_1["default"].createElement("h1", null, "TestReactv- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut aut alias quam nam dolore nobis impedit adipisci magni non soluta suscipit excepturi veritatis iure rerum voluptatem qui, itaque est beatae."));
}

exports["default"] = TestReact;

/***/ }),

/***/ "./resources/js/src/Pages/Users/Dashboard.tsx":
/*!****************************************************!*\
  !*** ./resources/js/src/Pages/Users/Dashboard.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true; // @ts-ignore

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AccountInfoCards_1 = __importDefault(__webpack_require__(/*! ../../Components/UserPanel/Dashboard/AccountInfoCards */ "./resources/js/src/Components/UserPanel/Dashboard/AccountInfoCards.tsx"));

var ReferralClipboard_1 = __importDefault(__webpack_require__(/*! ../../Components/UserPanel/Dashboard/ReferralClipboard */ "./resources/js/src/Components/UserPanel/Dashboard/ReferralClipboard.tsx"));

var UsersList_1 = __importDefault(__webpack_require__(/*! ../../Components/UserPanel/Dashboard/UsersList */ "./resources/js/src/Components/UserPanel/Dashboard/UsersList.tsx"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx"));

function Dashboard(_a) {
  var childUsers = _a.childUsers,
      clicks = _a.clicks; // @ts-ignore

  var authUser = (0, inertia_react_1.usePage)().props.authUser;

  var _b = (0, react_2.useState)(false),
      showAdvance = _b[0],
      setShiwAdvance = _b[1];

  var _c = (0, react_2.useState)(authUser.share_links),
      shareLinks = _c[0],
      setShareLinks = _c[1];

  var updateShareLinks = function updateShareLinks() {
    inertia_1.Inertia.post('/user/update_share_link', {
      shareLinks: shareLinks
    }, {
      preserveScroll: true
    });
  };

  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Box, {
    w: 'full'
  }, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "Dashboard"), react_2["default"].createElement(react_1.Text, null, "Hello ", authUser === null || authUser === void 0 ? void 0 : authUser.first_name, "! welcome to your dashboard")), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '50px'
  }, react_2["default"].createElement(AccountInfoCards_1["default"], {
    childUsers: childUsers,
    clicks: clicks
  })), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '20px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_2["default"].createElement(react_1.Heading, {
    mb: 2,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "Invitation link"), react_2["default"].createElement(react_1.Text, {
    mb: 5,
    color: 'gray.500'
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis."), react_2["default"].createElement(ReferralClipboard_1["default"], null), react_2["default"].createElement(react_1.Box, {
    py: 3
  }, react_2["default"].createElement(react_1.Button, {
    cursor: 'pointer',
    onClick: function onClick() {
      return setShiwAdvance(!showAdvance);
    }
  }, !showAdvance ? 'Show advance links' : 'Hide advance links', " ")), showAdvance && react_2["default"].createElement(react_1.Box, {
    px: 5
  }, react_2["default"].createElement(react_1.Box, {
    py: 8
  }, react_2["default"].createElement(react_1.Text, null, "Organise links (must be seperated with comma)"), react_2["default"].createElement(react_1.Box, {
    display: 'flex',
    justifyItems: 'center',
    gap: 2
  }, react_2["default"].createElement(react_1.Input, {
    maxWidth: 500,
    value: shareLinks,
    onChange: function onChange(e) {
      return setShareLinks(e.target.value);
    },
    placeholder: ''
  }), react_2["default"].createElement(react_1.Button, {
    onClick: updateShareLinks
  }, "Update"))), shareLinks.split(',').map(function (lnk, index) {
    return lnk && react_2["default"].createElement(react_1.Box, {
      key: index
    }, react_2["default"].createElement(react_1.Text, null, lnk), react_2["default"].createElement(ReferralClipboard_1["default"], {
      key: index,
      source: lnk
    }));
  }))), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '20px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_2["default"].createElement(react_1.Heading, {
    mb: 2,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "Recent registrations"), react_2["default"].createElement(UsersList_1["default"], {
    userList: childUsers
  })));
}

exports["default"] = Dashboard;

/***/ }),

/***/ "./resources/js/src/Pages/Users/MyGeneology.tsx":
/*!******************************************************!*\
  !*** ./resources/js/src/Pages/Users/MyGeneology.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx"));

var Geneology_1 = __importDefault(__webpack_require__(/*! ../../Components/UserPanel/Geneology/Geneology */ "./resources/js/src/Components/UserPanel/Geneology/Geneology.tsx"));

var ReferralClipboard_1 = __importDefault(__webpack_require__(/*! ../../Components/UserPanel/Dashboard/ReferralClipboard */ "./resources/js/src/Components/UserPanel/Dashboard/ReferralClipboard.tsx"));

var react_3 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_full_screen_1 = __webpack_require__(/*! react-full-screen */ "./node_modules/react-full-screen/dist/index.modern.js");

var ai_1 = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");

var use_react_screenshot_1 = __webpack_require__(/*! use-react-screenshot */ "./node_modules/use-react-screenshot/dist/index.es.js");

function MyGeneology(_a) {
  var _b;

  var dataSource = _a.dataSource; // const WIDTH = 70;
  // const HEIGHT = 80;

  var screen = (0, react_full_screen_1.useFullScreenHandle)();
  console.log('Updated Data source: ', dataSource);
  var ref = (0, react_2.createRef)();

  var _c = (0, use_react_screenshot_1.useScreenshot)({
    type: "image/jpeg",
    quality: 1.0
  }),
      takeScreenShot = _c[1];

  var download = function download(image, _a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.name,
        name = _c === void 0 ? "geneology" : _c,
        _d = _b.extension,
        extension = _d === void 0 ? "jpg" : _d;

    var a = document.createElement("a");
    a.href = image;
    a.download = (0, use_react_screenshot_1.createFileName)(extension, name);
    a.click();
    return;
  };

  var downloadScreenshot = function downloadScreenshot() {
    return takeScreenShot(ref.current).then(download);
  };

  (0, react_2.useEffect)(function () {
    console.log('dataSource: ', screen);
  }, [screen]);

  var _d = (0, react_2.useState)(false),
      enableZoom = _d[0],
      setEnableZoom = _d[1];

  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Box, null, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "My Geneology")), react_2["default"].createElement(react_full_screen_1.FullScreen, {
    handle: screen
  }, react_2["default"].createElement(react_1.Box, {
    py: 5,
    px: 5,
    bg: 'white',
    mt: '30px'
  }, react_2["default"].createElement(react_1.Flex, null, react_2["default"].createElement(react_1.FormControl, {
    display: 'flex',
    alignItems: 'center'
  }, react_2["default"].createElement(react_1.FormLabel, {
    htmlFor: 'email-alerts',
    mb: '0'
  }, "Enable Zooming"), react_2["default"].createElement(react_3.Switch, {
    onChange: function onChange() {
      return setEnableZoom(!enableZoom);
    },
    id: 'email-alerts'
  })), react_2["default"].createElement(react_1.Icon, {
    fontSize: '22px',
    mr: 5,
    cursor: 'pointer',
    onClick: downloadScreenshot,
    as: ai_1.AiOutlineDownload
  }), screen.active == false ? react_2["default"].createElement(react_1.Icon, {
    fontSize: '22px',
    cursor: 'pointer',
    onClick: screen.enter,
    as: ai_1.AiOutlineFullscreen
  }) : react_2["default"].createElement(react_1.Icon, {
    fontSize: '22px',
    cursor: 'pointer',
    onClick: screen.exit,
    as: ai_1.AiOutlineFullscreenExit
  }))), react_2["default"].createElement(react_1.Box, {
    position: 'relative',
    width: '100%',
    minHeight: screen.active ? '100vh' : '100vh',
    bg: 'white',
    rounded: 'base',
    shadow: 'base',
    overflow: 'auto'
  }, react_2["default"].createElement(react_1.Box, {
    position: 'absolute',
    ref: ref
  }, ((_b = dataSource === null || dataSource === void 0 ? void 0 : dataSource.children) === null || _b === void 0 ? void 0 : _b.length) ? react_2["default"].createElement(Geneology_1["default"], {
    enableZoom: enableZoom,
    dataSource: dataSource
  }) : react_2["default"].createElement(react_1.Flex, {
    direction: 'column',
    gap: 2,
    p: 5
  }, react_2["default"].createElement(react_1.Text, {
    fontSize: 'xl',
    fontWeight: 'bold',
    color: 'gray.600'
  }, "Your geneology is empty"), react_2["default"].createElement(react_1.Text, {
    fontSize: 'md',
    fontWeight: 'semibold',
    color: 'gray.400'
  }, "Start sharing your invitation link to make your geneology"), react_2["default"].createElement(ReferralClipboard_1["default"], null))))));
}

exports["default"] = MyGeneology;

/***/ }),

/***/ "./resources/js/src/Pages/Users/MyNetwork.tsx":
/*!****************************************************!*\
  !*** ./resources/js/src/Pages/Users/MyNetwork.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var UsersList_1 = __importDefault(__webpack_require__(/*! ../../Components/UserPanel/Dashboard/UsersList */ "./resources/js/src/Components/UserPanel/Dashboard/UsersList.tsx"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx"));

function MyNetwork(_a) {
  var childUsers = _a.childUsers;
  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Box, null, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "My Network")), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '100px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_2["default"].createElement(react_1.Heading, {
    mb: 2,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "My Network"), react_2["default"].createElement(UsersList_1["default"], {
    userList: childUsers
  })));
}

exports["default"] = MyNetwork;

/***/ }),

/***/ "./resources/js/src/Pages/Users/MyStatistics.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/src/Pages/Users/MyStatistics.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var react_2 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var AccountInfoChart_1 = __importDefault(__webpack_require__(/*! ../../Components/UserPanel/Dashboard/AccountInfoChart */ "./resources/js/src/Components/UserPanel/Dashboard/AccountInfoChart.tsx"));

var UsersList_1 = __importDefault(__webpack_require__(/*! ../../Components/UserPanel/Dashboard/UsersList */ "./resources/js/src/Components/UserPanel/Dashboard/UsersList.tsx"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx"));

function MyStatistics(_a) {
  var childUsers = _a.childUsers,
      clicksByShareLinks = _a.clicksByShareLinks;
  (0, react_2.useEffect)(function () {
    console.log('childUsers: ', clicksByShareLinks);
  }, []);
  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Box, {
    w: 'full'
  }, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "My Statistics")), react_2["default"].createElement(react_1.Box, {
    mt: '50px',
    w: 'full'
  }, react_2["default"].createElement(AccountInfoChart_1["default"], null)), clicksByShareLinks.length && react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '20px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_2["default"].createElement(react_1.Heading, {
    mb: 5,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "Clicks by share options"), react_2["default"].createElement(react_1.Stack, {
    direction: 'row'
  }, clicksByShareLinks.map(function (link, index) {
    return react_2["default"].createElement(react_1.Tag, {
      key: index,
      size: 'lg',
      variant: 'subtle',
      colorScheme: 'linkedin'
    }, link.source, " ~ ", react_2["default"].createElement(react_1.Text, {
      fontSize: '20px',
      ml: 2,
      fontWeight: 'semibold'
    }, link.total));
  }))), react_2["default"].createElement(react_1.Box, {
    w: 'full',
    mt: '20px',
    bg: 'white',
    rounded: 'md',
    shadow: 'base',
    pt: '25px',
    pb: '20px',
    px: '15px'
  }, react_2["default"].createElement(react_1.Heading, {
    mb: 2,
    fontSize: '2xl',
    fontWeight: 'semibold'
  }, "All affiliate registrations"), react_2["default"].createElement(react_1.Text, {
    mb: 5,
    color: 'gray.500'
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, suscipit nobis! Perferendis."), react_2["default"].createElement(UsersList_1["default"], {
    userList: childUsers
  })));
}

exports["default"] = MyStatistics;

/***/ }),

/***/ "./resources/js/src/Pages/Users/Profile/ProfilePage.tsx":
/*!**************************************************************!*\
  !*** ./resources/js/src/Pages/Users/Profile/ProfilePage.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

exports.__esModule = true;

var react_1 = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js");

var moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

var react_2 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var UserLayout_1 = __importDefault(__webpack_require__(/*! ../../../Layouts/UsersLayout/UserLayout */ "./resources/js/src/Layouts/UsersLayout/UserLayout.tsx"));

function ProfilePage(_a) {
  var levels = _a.levels,
      user = _a.user;
  return react_2["default"].createElement(UserLayout_1["default"], null, react_2["default"].createElement(react_1.Box, null, react_2["default"].createElement(react_1.Heading, {
    as: 'h4',
    fontWeight: 'semibold',
    fontSize: '28px'
  }, "My Profile")), react_2["default"].createElement(react_1.Flex, {
    color: 'gray.700',
    gap: 3,
    mt: 10
  }, react_2["default"].createElement(react_1.Flex, {
    height: '250px',
    flex: '1',
    justify: 'center',
    direction: 'column',
    alignItems: 'center',
    p: 5,
    bg: 'white'
  }, react_2["default"].createElement(react_1.Avatar, {
    size: '2xl',
    mb: 2,
    name: "".concat(user.first_name, " ").concat(user.last_name),
    src: ''
  }), react_2["default"].createElement(react_1.Text, {
    as: 'h2',
    fontSize: '2xl'
  }, "".concat(user.first_name, " ").concat(user.last_name)), react_2["default"].createElement(react_1.Text, {
    as: 'p'
  }, user.first_name)), react_2["default"].createElement(react_1.Box, {
    flex: '3',
    py: 3,
    px: 5,
    bg: 'white'
  }, react_2["default"].createElement(react_1.Text, {
    as: 'h2',
    fontSize: 'xl',
    fontWeight: 'bold'
  }, "Account details"), react_2["default"].createElement(react_1.Box, {
    w: '100%',
    mt: 4
  }, react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    p: 2,
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Join Data"), react_2["default"].createElement(react_1.Text, null, (0, moment_1["default"])(user.createdAt).format('l'))), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    p: 2,
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Total references"), react_2["default"].createElement(react_1.Text, null, "6 members")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    align: 'center',
    p: 2,
    borderBottom: '0px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Package"), react_2["default"].createElement(react_1.Badge, {
    colorScheme: 'purple',
    variant: 'solid'
  }, user["package"]["package"])), react_2["default"].createElement(react_1.Box, {
    pt: 3,
    pb: 3
  }, react_2["default"].createElement(react_1.Text, {
    fontSize: 'xl',
    fontWeight: 'bold'
  }, "Level statistics")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Level One"), react_2["default"].createElement(react_1.Text, null, levels.levelOne, " members")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Level Two"), react_2["default"].createElement(react_1.Text, null, levels.levelTwo, " members")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Level Three"), react_2["default"].createElement(react_1.Text, null, levels.levelThree, " members")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Level Four"), react_2["default"].createElement(react_1.Text, null, levels.levelFour, " members")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Level Five"), react_2["default"].createElement(react_1.Text, null, levels.levelFive, " members")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px',
    borderBottom: '1px solid #2d374814'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Level Six"), react_2["default"].createElement(react_1.Text, null, levels.levelSix, " members")), react_2["default"].createElement(react_1.Flex, {
    w: '100%',
    justifyContent: 'space-between',
    px: 2,
    py: '2px'
  }, react_2["default"].createElement(react_1.Text, {
    fontWeight: 'semibold'
  }, "Level Seven"), react_2["default"].createElement(react_1.Text, null, levels.levelSeven, " members"))))));
}

exports["default"] = ProfilePage;

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/js/src/Pages sync recursive ^\\.\\/.*$":
/*!***********************************************!*\
  !*** ./resources/js/src/Pages/ sync ^\.\/.*$ ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AboutUs": "./resources/js/src/Pages/AboutUs.tsx",
	"./AboutUs.tsx": "./resources/js/src/Pages/AboutUs.tsx",
	"./Admin/Dashboard": "./resources/js/src/Pages/Admin/Dashboard.tsx",
	"./Admin/Dashboard.tsx": "./resources/js/src/Pages/Admin/Dashboard.tsx",
	"./Admin/MyGeneology": "./resources/js/src/Pages/Admin/MyGeneology.tsx",
	"./Admin/MyGeneology.tsx": "./resources/js/src/Pages/Admin/MyGeneology.tsx",
	"./Admin/MyStatistics": "./resources/js/src/Pages/Admin/MyStatistics.tsx",
	"./Admin/MyStatistics.tsx": "./resources/js/src/Pages/Admin/MyStatistics.tsx",
	"./Admin/Packages/Index": "./resources/js/src/Pages/Admin/Packages/Index.tsx",
	"./Admin/Packages/Index.tsx": "./resources/js/src/Pages/Admin/Packages/Index.tsx",
	"./Admin/Product/Create": "./resources/js/src/Pages/Admin/Product/Create.tsx",
	"./Admin/Product/Create.tsx": "./resources/js/src/Pages/Admin/Product/Create.tsx",
	"./Admin/Product/List": "./resources/js/src/Pages/Admin/Product/List.tsx",
	"./Admin/Product/List.tsx": "./resources/js/src/Pages/Admin/Product/List.tsx",
	"./Admin/User": "./resources/js/src/Pages/Admin/User.tsx",
	"./Admin/User.tsx": "./resources/js/src/Pages/Admin/User.tsx",
	"./Admin/Users": "./resources/js/src/Pages/Admin/Users.tsx",
	"./Admin/Users.tsx": "./resources/js/src/Pages/Admin/Users.tsx",
	"./Auth/Login": "./resources/js/src/Pages/Auth/Login.tsx",
	"./Auth/Login.tsx": "./resources/js/src/Pages/Auth/Login.tsx",
	"./Auth/Register": "./resources/js/src/Pages/Auth/Register.tsx",
	"./Auth/Register.tsx": "./resources/js/src/Pages/Auth/Register.tsx",
	"./Blog": "./resources/js/src/Pages/Blog.tsx",
	"./Blog.tsx": "./resources/js/src/Pages/Blog.tsx",
	"./Home": "./resources/js/src/Pages/Home.tsx",
	"./Home.tsx": "./resources/js/src/Pages/Home.tsx",
	"./Products": "./resources/js/src/Pages/Products.tsx",
	"./Products.tsx": "./resources/js/src/Pages/Products.tsx",
	"./Test/TestReact": "./resources/js/src/Pages/Test/TestReact.tsx",
	"./Test/TestReact.tsx": "./resources/js/src/Pages/Test/TestReact.tsx",
	"./Users/Dashboard": "./resources/js/src/Pages/Users/Dashboard.tsx",
	"./Users/Dashboard.tsx": "./resources/js/src/Pages/Users/Dashboard.tsx",
	"./Users/MyGeneology": "./resources/js/src/Pages/Users/MyGeneology.tsx",
	"./Users/MyGeneology.tsx": "./resources/js/src/Pages/Users/MyGeneology.tsx",
	"./Users/MyNetwork": "./resources/js/src/Pages/Users/MyNetwork.tsx",
	"./Users/MyNetwork.tsx": "./resources/js/src/Pages/Users/MyNetwork.tsx",
	"./Users/MyStatistics": "./resources/js/src/Pages/Users/MyStatistics.tsx",
	"./Users/MyStatistics.tsx": "./resources/js/src/Pages/Users/MyStatistics.tsx",
	"./Users/Profile/ProfilePage": "./resources/js/src/Pages/Users/Profile/ProfilePage.tsx",
	"./Users/Profile/ProfilePage.tsx": "./resources/js/src/Pages/Users/Profile/ProfilePage.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/src/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "?1055":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a449":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8131":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3fc0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7874":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ed1b":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?d17e":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b3ef":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?06e8":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6abe":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9cf1":
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?afae":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "adonismlm:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkadonismlm"] = self["webpackChunkadonismlm"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_ant-design_icons_es_index_js-node_modules_chakra-ui_react_dist_chakra-ui-fff5bd"], () => (__webpack_require__("./resources/js/app.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFDYixJQUFJQSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLEtBQW1DQyxNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQzVGLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCSixFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtBQUFFRyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7QUFBRSxhQUFPTixDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUFjO0FBQXBELEdBQTdCO0FBQ0gsQ0FId0QsR0FHbkQsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlNLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0NWLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlTLENBQVosRUFBZTtBQUMzRlgsRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QixTQUF6QixFQUFvQztBQUFFTSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkksSUFBQUEsS0FBSyxFQUFFRDtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNULENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQ2hCVCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVTLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJRSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVixDQUFULElBQWNVLEdBQWQ7QUFBbUIsUUFBSVYsQ0FBQyxLQUFLLFNBQU4sSUFBbUJKLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsR0FBckMsRUFBMENWLENBQTFDLENBQXZCLEVBQXFFTCxlQUFlLENBQUNpQixNQUFELEVBQVNGLEdBQVQsRUFBY1YsQ0FBZCxDQUFmO0FBQXhGOztBQUNqQk0sRUFBQUEsa0JBQWtCLENBQUNNLE1BQUQsRUFBU0YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPRSxNQUFQO0FBQ0gsQ0FORDs7QUFPQSxJQUFJSSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7QUFDQUEsYUFBQSxHQUFnQixLQUFLLENBQXJCOztBQUNBRSxtQkFBTyxDQUFDLCtDQUFELENBQVA7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLHVGQUFELENBQTdCOztBQUNBLElBQUlFLE9BQU8sR0FBR0wsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSCxtQkFBTyxDQUFDLG9EQUFELENBQXpCOztBQUNBLElBQUlJLE9BQU8sR0FBR0osbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQjs7QUFDQSxJQUFJSyxPQUFPLEdBQUdMLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0FBLG1CQUFPLENBQUMsa0ZBQUQsQ0FBUCxFQUNBOzs7QUFDQSxJQUFJTSxXQUFXLEdBQUdULGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyx3REFBRCxDQUFSLENBQWpDOztBQUNBLElBQUlPLFNBQVMsR0FBR1AsbUJBQU8sQ0FBQywyRUFBRCxDQUF2Qjs7QUFDQUEsbUJBQU8sQ0FBQyw2REFBRCxDQUFQOztBQUNBLElBQUlRLGVBQWUsR0FBR1IsbUJBQU8sQ0FBQyxvRUFBRCxDQUE3Qjs7QUFDQSxJQUFJUyxPQUFPLEdBQUcsSUFBZDtBQUNBRixTQUFTLENBQUNHLE9BQVYsQ0FBa0JDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7QUFDdENGLEVBQUFBLE9BQU8sR0FBR0csVUFBVSxDQUFDLFlBQVk7QUFBRSxXQUFPTixXQUFXLENBQUMsU0FBRCxDQUFYLENBQXVCTyxLQUF2QixFQUFQO0FBQXdDLEdBQXZELEVBQXlELEdBQXpELENBQXBCO0FBQ0gsQ0FGRDtBQUdBTixTQUFTLENBQUNHLE9BQVYsQ0FBa0JDLEVBQWxCLENBQXFCLFVBQXJCLEVBQWlDLFVBQVVHLEtBQVYsRUFBaUI7QUFDOUMsTUFBSUMsRUFBSixFQUFRQyxFQUFSOztBQUNBLE1BQUlWLFdBQVcsQ0FBQyxTQUFELENBQVgsQ0FBdUJXLFNBQXZCLE9BQXVDLENBQUNGLEVBQUUsR0FBR0QsS0FBSyxDQUFDSSxNQUFOLENBQWFDLFFBQW5CLE1BQWlDLElBQWpDLElBQXlDSixFQUFFLEtBQUssS0FBSyxDQUFyRCxHQUF5RCxLQUFLLENBQTlELEdBQWtFQSxFQUFFLENBQUNLLFVBQTVHLENBQUosRUFBNkg7QUFDekhkLElBQUFBLFdBQVcsQ0FBQyxTQUFELENBQVgsQ0FBdUJlLEdBQXZCLENBQTRCLENBQUMsQ0FBQ0wsRUFBRSxHQUFHRixLQUFLLENBQUNJLE1BQU4sQ0FBYUMsUUFBbkIsTUFBaUMsSUFBakMsSUFBeUNILEVBQUUsS0FBSyxLQUFLLENBQXJELEdBQXlELEtBQUssQ0FBOUQsR0FBa0VBLEVBQUUsQ0FBQ0ksVUFBdEUsSUFBb0YsR0FBckYsR0FBNEYsR0FBdkg7QUFDSDtBQUNKLENBTEQ7QUFNQWIsU0FBUyxDQUFDRyxPQUFWLENBQWtCQyxFQUFsQixDQUFxQixRQUFyQixFQUErQixVQUFVRyxLQUFWLEVBQWlCO0FBQzVDUSxFQUFBQSxZQUFZLENBQUNiLE9BQUQsQ0FBWjs7QUFDQSxNQUFJLENBQUNILFdBQVcsQ0FBQyxTQUFELENBQVgsQ0FBdUJXLFNBQXZCLEVBQUwsRUFBeUM7QUFDckM7QUFDSCxHQUZELE1BR0ssSUFBSUgsS0FBSyxDQUFDSSxNQUFOLENBQWFLLEtBQWIsQ0FBbUJDLFNBQXZCLEVBQWtDO0FBQ25DbEIsSUFBQUEsV0FBVyxDQUFDLFNBQUQsQ0FBWCxDQUF1Qm1CLElBQXZCO0FBQ0gsR0FGSSxNQUdBLElBQUlYLEtBQUssQ0FBQ0ksTUFBTixDQUFhSyxLQUFiLENBQW1CRyxXQUF2QixFQUFvQztBQUNyQ3BCLElBQUFBLFdBQVcsQ0FBQyxTQUFELENBQVgsQ0FBdUJlLEdBQXZCLENBQTJCLENBQTNCO0FBQ0gsR0FGSSxNQUdBLElBQUlQLEtBQUssQ0FBQ0ksTUFBTixDQUFhSyxLQUFiLENBQW1CSSxTQUF2QixFQUFrQztBQUNuQ3JCLElBQUFBLFdBQVcsQ0FBQyxTQUFELENBQVgsQ0FBdUJtQixJQUF2QjtBQUNBbkIsSUFBQUEsV0FBVyxDQUFDLFNBQUQsQ0FBWCxDQUF1QnNCLE1BQXZCO0FBQ0g7QUFDSixDQWZEOztBQWdCQSxTQUFTQyxlQUFULEdBQTJCO0FBQ3ZCLFNBQVE7QUFDSkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hDLE1BQUFBLE1BQU0sRUFBRTtBQUNKQyxRQUFBQSxXQUFXLEVBQUUsbUNBRFQ7QUFFSkMsUUFBQUEsU0FBUyxFQUFFO0FBRlA7QUFETDtBQURILEdBQVI7QUFRSDs7QUFDRCxJQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7QUFBRSxTQUFRO0FBQ3RDSixJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLFdBQVcsRUFBRSxtQ0FEVDtBQUVKQyxRQUFBQSxTQUFTLEVBQUU7QUFGUDtBQURMO0FBRCtCLEdBQVI7QUFPN0IsQ0FQTDs7QUFRQSxJQUFJRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQVk7QUFBRSxTQUFRO0FBQ3ZDTCxJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLFdBQVcsRUFBRSxtQ0FEVDtBQUVKQyxRQUFBQSxTQUFTLEVBQUU7QUFGUDtBQURMO0FBRGdDLEdBQVI7QUFPOUIsQ0FQTDs7QUFRQW5DLGFBQUEsR0FBZ0IsQ0FBQyxHQUFHTyxPQUFPLENBQUMrQixXQUFaLEVBQXlCO0FBQ3JDQyxFQUFBQSxNQUFNLEVBQUU7QUFDSkMsSUFBQUEsZ0JBQWdCLEVBQUUsT0FEZDtBQUVKQyxJQUFBQSxrQkFBa0IsRUFBRTtBQUZoQixHQUQ2QjtBQUtyQ0MsRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLE1BQU0sRUFBRTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBZTtBQUNYLHdDQUFnQztBQURyQjtBQU5YO0FBREosR0FMNkI7QUFpQnJDQyxFQUFBQSxPQUFPLEVBQUU7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxJQUFBQSxPQUFPLEVBQUU7QUFMSixHQWpCNEI7QUF3QnJDQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hDLE1BQUFBLFFBQVEsRUFBRTtBQUNOSCxRQUFBQSxPQUFPLEVBQUVkLGVBREg7QUFFTmtCLFFBQUFBLE1BQU0sRUFBRWIsYUFGRjtBQUdOYyxRQUFBQSxPQUFPLEVBQUViO0FBSEg7QUFEUCxLQURDO0FBUVJjLElBQUFBLE1BQU0sRUFBRTtBQUNKSCxNQUFBQSxRQUFRLEVBQUU7QUFDTkgsUUFBQUEsT0FBTyxFQUFFZCxlQURIO0FBRU5rQixRQUFBQSxNQUFNLEVBQUViLGFBRkY7QUFHTmMsUUFBQUEsT0FBTyxFQUFFYjtBQUhIO0FBRE4sS0FSQTtBQWVSZSxJQUFBQSxRQUFRLEVBQUU7QUFDTkosTUFBQUEsUUFBUSxFQUFFO0FBQ05ILFFBQUFBLE9BQU8sRUFBRSxtQkFBWTtBQUFFLGlCQUFPZCxlQUFlLEdBQUdDLEtBQXpCO0FBQWlDLFNBRGxEO0FBRU5pQixRQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFBRSxpQkFBT2IsYUFBYSxHQUFHSixLQUF2QjtBQUErQixTQUYvQztBQUdOa0IsUUFBQUEsT0FBTyxFQUFFLG1CQUFZO0FBQUUsaUJBQU9iLGNBQWMsR0FBR0wsS0FBeEI7QUFBZ0M7QUFIakQ7QUFESjtBQWZGO0FBeEJ5QixDQUF6QixDQUFoQixFQWdEQTs7QUFDQSxJQUFJcUIsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBVDtBQUNBLENBQUMsR0FBR2xELFdBQVcsQ0FBQ21ELE1BQWhCLEVBQXdCcEQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDL0MsZUFBZSxDQUFDZ0QsZUFBakQsRUFBa0U7QUFBRUMsRUFBQUEsU0FBUyxFQUFFLGlEQUFiO0FBQWdFQyxFQUFBQSxLQUFLLEVBQUU7QUFBdkUsQ0FBbEUsRUFDcEJ4RCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUN1RCxjQUF6QyxFQUF5RDtBQUFFNUQsRUFBQUEsS0FBSyxFQUFFRCxPQUFPLENBQUNDO0FBQWpCLENBQXpELEVBQ0lHLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQzJELFVBQWpELENBQ0E7QUFEQSxFQUVFO0FBQ0U7QUFDQUMsRUFBQUEsV0FBVyxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDWixFQUFFLEtBQUssSUFBUCxJQUFlQSxFQUFFLEtBQUssS0FBSyxDQUEzQixHQUErQixLQUFLLENBQXBDLEdBQXdDQSxFQUFFLENBQUNhLE9BQUgsQ0FBV0MsSUFBcEQsS0FBNkQsRUFBeEUsQ0FGZjtBQUdFO0FBQ0FDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxJQUFWLEVBQWdCO0FBQUUsV0FBT0MsT0FBTyxDQUFDQyxPQUFSLEdBQWtCQyxJQUFsQixDQUF1QixZQUFZO0FBQUUsYUFBT2hGLFlBQVksQ0FBQ1UsMEVBQVEsSUFBYyxDQUFDdUUsTUFBZixDQUFzQkosSUFBdEIsQ0FBRCxDQUFSLENBQW5CO0FBQTRELEtBQWpHLEVBQW1HRyxJQUFuRyxDQUF3RyxVQUFVRSxNQUFWLEVBQWtCO0FBQUUsYUFBT0EsTUFBTSxDQUFDLFNBQUQsQ0FBYjtBQUEyQixLQUF2SixDQUFQO0FBQWtLLEdBSnhNO0FBSTBNQyxFQUFBQSxnQkFBZ0IsRUFBRTtBQUo1TixDQUZGLENBREosQ0FEb0IsQ0FBeEIsRUFRK090QixFQVIvTzs7Ozs7Ozs7Ozs7QUMzSWE7O0FBQ2IsSUFBSTNFLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsS0FBbUNDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDNUYsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJKLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUJHLEVBQXpCLEVBQTZCO0FBQUVHLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CQyxJQUFBQSxHQUFHLEVBQUUsZUFBVztBQUFFLGFBQU9OLENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQWM7QUFBcEQsR0FBN0I7QUFDSCxDQUh3RCxHQUduRCxVQUFTRixDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDeEIsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJGLEVBQUFBLENBQUMsQ0FBQ0csRUFBRCxDQUFELEdBQVFGLENBQUMsQ0FBQ0MsQ0FBRCxDQUFUO0FBQ0gsQ0FOcUIsQ0FBdEI7O0FBT0EsSUFBSU0sa0JBQWtCLEdBQUksUUFBUSxLQUFLQSxrQkFBZCxLQUFzQ1YsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQzNGWCxFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCLFNBQXpCLEVBQW9DO0FBQUVNLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CSSxJQUFBQSxLQUFLLEVBQUVEO0FBQTNCLEdBQXBDO0FBQ0gsQ0FGOEQsR0FFMUQsVUFBU1QsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDaEJULEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsR0FBZVMsQ0FBZjtBQUNILENBSndCLENBQXpCOztBQUtBLElBQUlFLFlBQVksR0FBSSxRQUFRLEtBQUtBLFlBQWQsSUFBK0IsVUFBVUMsR0FBVixFQUFlO0FBQzdELE1BQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFmLEVBQTJCLE9BQU9ELEdBQVA7QUFDM0IsTUFBSUUsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJRixHQUFHLElBQUksSUFBWCxFQUFpQixLQUFLLElBQUlWLENBQVQsSUFBY1UsR0FBZDtBQUFtQixRQUFJVixDQUFDLEtBQUssU0FBTixJQUFtQkosTUFBTSxDQUFDaUIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxHQUFyQyxFQUEwQ1YsQ0FBMUMsQ0FBdkIsRUFBcUVMLGVBQWUsQ0FBQ2lCLE1BQUQsRUFBU0YsR0FBVCxFQUFjVixDQUFkLENBQWY7QUFBeEY7O0FBQ2pCTSxFQUFBQSxrQkFBa0IsQ0FBQ00sTUFBRCxFQUFTRixHQUFULENBQWxCOztBQUNBLFNBQU9FLE1BQVA7QUFDSCxDQU5EOztBQU9BLElBQUlpRixTQUFTLEdBQUksUUFBUSxLQUFLQSxTQUFkLElBQTRCLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxDQUEvQixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDckYsV0FBU0MsS0FBVCxDQUFlMUYsS0FBZixFQUFzQjtBQUFFLFdBQU9BLEtBQUssWUFBWXdGLENBQWpCLEdBQXFCeEYsS0FBckIsR0FBNkIsSUFBSXdGLENBQUosQ0FBTSxVQUFVUixPQUFWLEVBQW1CO0FBQUVBLE1BQUFBLE9BQU8sQ0FBQ2hGLEtBQUQsQ0FBUDtBQUFpQixLQUE1QyxDQUFwQztBQUFvRjs7QUFDNUcsU0FBTyxLQUFLd0YsQ0FBQyxLQUFLQSxDQUFDLEdBQUdULE9BQVQsQ0FBTixFQUF5QixVQUFVQyxPQUFWLEVBQW1CVyxNQUFuQixFQUEyQjtBQUN2RCxhQUFTQyxTQUFULENBQW1CNUYsS0FBbkIsRUFBMEI7QUFBRSxVQUFJO0FBQUU2RixRQUFBQSxJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssSUFBVixDQUFlOUYsS0FBZixDQUFELENBQUo7QUFBOEIsT0FBcEMsQ0FBcUMsT0FBTytGLENBQVAsRUFBVTtBQUFFSixRQUFBQSxNQUFNLENBQUNJLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzNGLGFBQVNDLFFBQVQsQ0FBa0JoRyxLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRTZGLFFBQUFBLElBQUksQ0FBQ0osU0FBUyxDQUFDLE9BQUQsQ0FBVCxDQUFtQnpGLEtBQW5CLENBQUQsQ0FBSjtBQUFrQyxPQUF4QyxDQUF5QyxPQUFPK0YsQ0FBUCxFQUFVO0FBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjekYsTUFBZCxFQUFzQjtBQUFFQSxNQUFBQSxNQUFNLENBQUNnQyxJQUFQLEdBQWM0QyxPQUFPLENBQUM1RSxNQUFNLENBQUNKLEtBQVIsQ0FBckIsR0FBc0MwRixLQUFLLENBQUN0RixNQUFNLENBQUNKLEtBQVIsQ0FBTCxDQUFvQmlGLElBQXBCLENBQXlCVyxTQUF6QixFQUFvQ0ksUUFBcEMsQ0FBdEM7QUFBc0Y7O0FBQzlHSCxJQUFBQSxJQUFJLENBQUMsQ0FBQ0osU0FBUyxHQUFHQSxTQUFTLENBQUNRLEtBQVYsQ0FBZ0JYLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RE8sSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FSRDs7QUFTQSxJQUFJSSxXQUFXLEdBQUksUUFBUSxLQUFLQSxXQUFkLElBQThCLFVBQVVaLE9BQVYsRUFBbUJhLElBQW5CLEVBQXlCO0FBQ3JFLE1BQUlDLENBQUMsR0FBRztBQUFFQyxJQUFBQSxLQUFLLEVBQUUsQ0FBVDtBQUFZQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFBRSxVQUFJQyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBWCxFQUFjLE1BQU1BLENBQUMsQ0FBQyxDQUFELENBQVA7QUFBWSxhQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFSO0FBQWMsS0FBdkU7QUFBeUVDLElBQUFBLElBQUksRUFBRSxFQUEvRTtBQUFtRkMsSUFBQUEsR0FBRyxFQUFFO0FBQXhGLEdBQVI7QUFBQSxNQUFzR0MsQ0FBdEc7QUFBQSxNQUF5R0MsQ0FBekc7QUFBQSxNQUE0R0osQ0FBNUc7QUFBQSxNQUErR0ssQ0FBL0c7QUFDQSxTQUFPQSxDQUFDLEdBQUc7QUFBRWQsSUFBQUEsSUFBSSxFQUFFZSxJQUFJLENBQUMsQ0FBRCxDQUFaO0FBQWlCLGFBQVNBLElBQUksQ0FBQyxDQUFELENBQTlCO0FBQW1DLGNBQVVBLElBQUksQ0FBQyxDQUFEO0FBQWpELEdBQUosRUFBNEQsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixLQUFpQ0YsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLFFBQVIsQ0FBRCxHQUFxQixZQUFXO0FBQUUsV0FBTyxJQUFQO0FBQWMsR0FBakYsQ0FBNUQsRUFBZ0pILENBQXZKOztBQUNBLFdBQVNDLElBQVQsQ0FBY0csQ0FBZCxFQUFpQjtBQUFFLFdBQU8sVUFBVWpILENBQVYsRUFBYTtBQUFFLGFBQU84RixJQUFJLENBQUMsQ0FBQ21CLENBQUQsRUFBSWpILENBQUosQ0FBRCxDQUFYO0FBQXNCLEtBQTVDO0FBQStDOztBQUNsRSxXQUFTOEYsSUFBVCxDQUFjb0IsRUFBZCxFQUFrQjtBQUNkLFFBQUlQLENBQUosRUFBTyxNQUFNLElBQUlRLFNBQUosQ0FBYyxpQ0FBZCxDQUFOOztBQUNQLFdBQU9kLENBQVA7QUFBVSxVQUFJO0FBQ1YsWUFBSU0sQ0FBQyxHQUFHLENBQUosRUFBT0MsQ0FBQyxLQUFLSixDQUFDLEdBQUdVLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFSLEdBQVlOLENBQUMsQ0FBQyxRQUFELENBQWIsR0FBMEJNLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUU4sQ0FBQyxDQUFDLE9BQUQsQ0FBRCxLQUFlLENBQUNKLENBQUMsR0FBR0ksQ0FBQyxDQUFDLFFBQUQsQ0FBTixLQUFxQkosQ0FBQyxDQUFDaEcsSUFBRixDQUFPb0csQ0FBUCxDQUFyQixFQUFnQyxDQUEvQyxDQUFSLEdBQTREQSxDQUFDLENBQUNiLElBQWpHLENBQUQsSUFBMkcsQ0FBQyxDQUFDUyxDQUFDLEdBQUdBLENBQUMsQ0FBQ2hHLElBQUYsQ0FBT29HLENBQVAsRUFBVU0sRUFBRSxDQUFDLENBQUQsQ0FBWixDQUFMLEVBQXVCN0UsSUFBOUksRUFBb0osT0FBT21FLENBQVA7QUFDcEosWUFBSUksQ0FBQyxHQUFHLENBQUosRUFBT0osQ0FBWCxFQUFjVSxFQUFFLEdBQUcsQ0FBQ0EsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVQsRUFBWVYsQ0FBQyxDQUFDdkcsS0FBZCxDQUFMOztBQUNkLGdCQUFRaUgsRUFBRSxDQUFDLENBQUQsQ0FBVjtBQUNJLGVBQUssQ0FBTDtBQUFRLGVBQUssQ0FBTDtBQUFRVixZQUFBQSxDQUFDLEdBQUdVLEVBQUo7QUFBUTs7QUFDeEIsZUFBSyxDQUFMO0FBQVFiLFlBQUFBLENBQUMsQ0FBQ0MsS0FBRjtBQUFXLG1CQUFPO0FBQUVyRyxjQUFBQSxLQUFLLEVBQUVpSCxFQUFFLENBQUMsQ0FBRCxDQUFYO0FBQWdCN0UsY0FBQUEsSUFBSSxFQUFFO0FBQXRCLGFBQVA7O0FBQ25CLGVBQUssQ0FBTDtBQUFRZ0UsWUFBQUEsQ0FBQyxDQUFDQyxLQUFGO0FBQVdNLFlBQUFBLENBQUMsR0FBR00sRUFBRSxDQUFDLENBQUQsQ0FBTjtBQUFXQSxZQUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFELENBQUw7QUFBVTs7QUFDeEMsZUFBSyxDQUFMO0FBQVFBLFlBQUFBLEVBQUUsR0FBR2IsQ0FBQyxDQUFDSyxHQUFGLENBQU1VLEdBQU4sRUFBTDs7QUFBa0JmLFlBQUFBLENBQUMsQ0FBQ0ksSUFBRixDQUFPVyxHQUFQOztBQUFjOztBQUN4QztBQUNJLGdCQUFJLEVBQUVaLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxJQUFOLEVBQVlELENBQUMsR0FBR0EsQ0FBQyxDQUFDYSxNQUFGLEdBQVcsQ0FBWCxJQUFnQmIsQ0FBQyxDQUFDQSxDQUFDLENBQUNhLE1BQUYsR0FBVyxDQUFaLENBQW5DLE1BQXVESCxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixJQUFlQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBaEYsQ0FBSixFQUF3RjtBQUFFYixjQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUFPO0FBQVc7O0FBQzVHLGdCQUFJYSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixLQUFnQixDQUFDVixDQUFELElBQU9VLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVYsQ0FBQyxDQUFDLENBQUQsQ0FBVCxJQUFnQlUsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVixDQUFDLENBQUMsQ0FBRCxDQUFoRCxDQUFKLEVBQTJEO0FBQUVILGNBQUFBLENBQUMsQ0FBQ0MsS0FBRixHQUFVWSxFQUFFLENBQUMsQ0FBRCxDQUFaO0FBQWlCO0FBQVE7O0FBQ3RGLGdCQUFJQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixJQUFlYixDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBOUIsRUFBbUM7QUFBRUgsY0FBQUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVVFLENBQUMsQ0FBQyxDQUFELENBQVg7QUFBZ0JBLGNBQUFBLENBQUMsR0FBR1UsRUFBSjtBQUFRO0FBQVE7O0FBQ3JFLGdCQUFJVixDQUFDLElBQUlILENBQUMsQ0FBQ0MsS0FBRixHQUFVRSxDQUFDLENBQUMsQ0FBRCxDQUFwQixFQUF5QjtBQUFFSCxjQUFBQSxDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBWDs7QUFBZ0JILGNBQUFBLENBQUMsQ0FBQ0ssR0FBRixDQUFNWSxJQUFOLENBQVdKLEVBQVg7O0FBQWdCO0FBQVE7O0FBQ25FLGdCQUFJVixDQUFDLENBQUMsQ0FBRCxDQUFMLEVBQVVILENBQUMsQ0FBQ0ssR0FBRixDQUFNVSxHQUFOOztBQUNWZixZQUFBQSxDQUFDLENBQUNJLElBQUYsQ0FBT1csR0FBUDs7QUFBYztBQVh0Qjs7QUFhQUYsUUFBQUEsRUFBRSxHQUFHZCxJQUFJLENBQUM1RixJQUFMLENBQVUrRSxPQUFWLEVBQW1CYyxDQUFuQixDQUFMO0FBQ0gsT0FqQlMsQ0FpQlIsT0FBT0wsQ0FBUCxFQUFVO0FBQUVrQixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFELEVBQUlsQixDQUFKLENBQUw7QUFBYVksUUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFBUSxPQWpCekIsU0FpQmtDO0FBQUVELFFBQUFBLENBQUMsR0FBR0gsQ0FBQyxHQUFHLENBQVI7QUFBWTtBQWpCMUQ7O0FBa0JBLFFBQUlVLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFaLEVBQWUsTUFBTUEsRUFBRSxDQUFDLENBQUQsQ0FBUjtBQUFhLFdBQU87QUFBRWpILE1BQUFBLEtBQUssRUFBRWlILEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUEsRUFBRSxDQUFDLENBQUQsQ0FBVixHQUFnQixLQUFLLENBQTlCO0FBQWlDN0UsTUFBQUEsSUFBSSxFQUFFO0FBQXZDLEtBQVA7QUFDL0I7QUFDSixDQTFCRDs7QUEyQkEsSUFBSTVCLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSTJHLE9BQU8sR0FBRzlHLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTdCOztBQUNBLElBQUlJLE9BQU8sR0FBR2QsWUFBWSxDQUFDVSxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBMUI7O0FBQ0EsSUFBSTRHLGtCQUFrQixHQUFHL0csZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHNGQUFELENBQVIsQ0FBeEM7O0FBQ0EsU0FBUzZHLGdCQUFULEdBQTRCO0FBQ3hCLE1BQUk5RixFQUFFLEdBQUcsQ0FBQyxHQUFHWCxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLEVBQXRCLENBQVQ7QUFBQSxNQUFvQ0MsVUFBVSxHQUFHaEcsRUFBRSxDQUFDLENBQUQsQ0FBbkQ7QUFBQSxNQUF3RGlHLGFBQWEsR0FBR2pHLEVBQUUsQ0FBQyxDQUFELENBQTFFOztBQUNBLE1BQUlDLEVBQUUsR0FBRyxDQUFDLEdBQUdaLE9BQU8sQ0FBQzBHLFFBQVosRUFBc0IsRUFBdEIsQ0FBVDtBQUFBLE1BQW9DRyxTQUFTLEdBQUdqRyxFQUFFLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQXVEa0csWUFBWSxHQUFHbEcsRUFBRSxDQUFDLENBQUQsQ0FBeEU7O0FBQ0EsTUFBSW1HLEVBQUUsR0FBRyxDQUFDLEdBQUcvRyxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLENBQXRCLENBQVQ7QUFBQSxNQUFtQ00sVUFBVSxHQUFHRCxFQUFFLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQXVERSxhQUFhLEdBQUdGLEVBQUUsQ0FBQyxDQUFELENBQXpFOztBQUNBLE1BQUlHLEVBQUUsR0FBRyxDQUFDLEdBQUdsSCxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLElBQXRCLENBQVQ7QUFBQSxNQUFzQ1MsT0FBTyxHQUFHRCxFQUFFLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQXVERSxVQUFVLEdBQUdGLEVBQUUsQ0FBQyxDQUFELENBQXRFOztBQUNBLE1BQUlHLE9BQU8sR0FBRztBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsRUFBRSxFQUFFLFdBREQ7QUFFSEMsTUFBQUEsS0FBSyxFQUFFO0FBRkosS0FERztBQUtWQyxJQUFBQSxLQUFLLEVBQUU7QUFDSGQsTUFBQUEsVUFBVSxFQUFFQTtBQURULEtBTEc7QUFRVmUsSUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRDtBQVJFLEdBQWQ7QUFVQSxNQUFJQyxNQUFNLEdBQUcsQ0FDVDtBQUNJNUQsSUFBQUEsSUFBSSxFQUFFLFFBRFY7QUFFSTZELElBQUFBLElBQUksRUFBRWY7QUFGVixHQURTLENBQWI7O0FBTUEsTUFBSWdCLEVBQUUsR0FBRyxDQUFDLEdBQUc3SCxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLFFBQXRCLENBQVQ7QUFBQSxNQUEwQ29CLE1BQU0sR0FBR0QsRUFBRSxDQUFDLENBQUQsQ0FBckQ7QUFBQSxNQUEwREUsU0FBUyxHQUFHRixFQUFFLENBQUMsQ0FBRCxDQUF4RTs7QUFDQSxHQUFDLEdBQUc3SCxPQUFPLENBQUNnSSxTQUFaLEVBQXVCLFlBQVk7QUFDL0IsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixhQUFPM0QsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLFlBQVk7QUFDL0MsWUFBSTRELEdBQUo7QUFDQSxlQUFPL0MsV0FBVyxDQUFDLElBQUQsRUFBTyxVQUFVeEUsRUFBVixFQUFjO0FBQ25DLGtCQUFRQSxFQUFFLENBQUMyRSxLQUFYO0FBQ0ksaUJBQUssQ0FBTDtBQUFRLHFCQUFPLENBQUM7QUFBRTtBQUFILGdCQUFjaUIsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnpILEdBQW5CLENBQXVCLHNDQUFzQ3FGLE1BQXRDLENBQTZDMkQsTUFBN0MsQ0FBdkIsQ0FBZCxDQUFQOztBQUNSLGlCQUFLLENBQUw7QUFDSUksY0FBQUEsR0FBRyxHQUFHdkgsRUFBRSxDQUFDNEUsSUFBSCxFQUFOO0FBQ0E0QyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixHQUFHLENBQUNOLElBQUosQ0FBU2YsU0FBbkM7O0FBQ0Esa0JBQUlxQixHQUFHLENBQUNOLElBQVIsRUFBYztBQUNWaEIsZ0JBQUFBLGFBQWEsQ0FBQ3NCLEdBQUcsQ0FBQ04sSUFBSixDQUFTakIsVUFBVixDQUFiO0FBQ0FHLGdCQUFBQSxZQUFZLENBQUNvQixHQUFHLENBQUNOLElBQUosQ0FBU2YsU0FBVixDQUFaO0FBQ0FJLGdCQUFBQSxhQUFhLENBQUNpQixHQUFHLENBQUNOLElBQUosQ0FBU1osVUFBVixDQUFiO0FBQ0FJLGdCQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0g7O0FBQ0QscUJBQU8sQ0FBQztBQUFFO0FBQUgsZUFBUDtBQVhSO0FBYUgsU0FkaUIsQ0FBbEI7QUFlSCxPQWpCZSxDQUFoQjtBQWtCSDs7QUFDRGEsSUFBQUEsYUFBYTtBQUNoQixHQXRCRCxFQXNCRyxDQUFDSCxNQUFELENBdEJIO0FBdUJBLFNBQVE5SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUksUUFBcEQsRUFBOEQsSUFBOUQsRUFDSnJJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVDLElBQUFBLEVBQUUsRUFBRSxLQUFOO0FBQWFDLElBQUFBLEVBQUUsRUFBRSxNQUFqQjtBQUF5QkMsSUFBQUEsWUFBWSxFQUFFO0FBQXZDLEdBQTlDLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWVDLENBQWhELEVBQW1EO0FBQUVILElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxJQUFuQjtBQUF5QkMsSUFBQUEsVUFBVSxFQUFFLE1BQXJDO0FBQTZDQyxJQUFBQSxhQUFhLEVBQUUsTUFBNUQ7QUFBb0VDLElBQUFBLGFBQWEsRUFBRSxXQUFuRjtBQUFnR0MsSUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR2xKLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLFVBQTNDO0FBQXZHLEdBQW5ELEVBQ0ksT0FESixFQUVJbkIsTUFBTSxJQUFJLE9BQVYsR0FBb0IsUUFBcEIsR0FBK0JBLE1BQU0sSUFBSSxRQUFWLEdBQXFCLFNBQXJCLEdBQWlDLFdBRnBFLEVBR0ksY0FISixDQURKLEVBS0k5SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFQyxJQUFBQSxPQUFPLEVBQUU7QUFBWCxHQUEvQyxFQUNJbkosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRVosSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLEtBQW5CO0FBQTBCQyxJQUFBQSxVQUFVLEVBQUUsQ0FBQyxNQUFELEVBQVMsV0FBVCxDQUF0QztBQUE2REcsSUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR2xKLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLFNBQTNDLENBQXBFO0FBQTJISSxJQUFBQSxVQUFVLEVBQUU7QUFBdkksR0FBL0MsRUFDSXJDLFVBREosRUFFSWhILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZVksSUFBaEQsRUFBc0Q7QUFBRVYsSUFBQUEsUUFBUSxFQUFFLElBQVo7QUFBa0JDLElBQUFBLFVBQVUsRUFBRSxRQUE5QjtBQUF3Q0csSUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR2xKLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLFVBQTNDO0FBQS9DLEdBQXRELEVBQ0ksR0FESixFQUVJLFFBRkosQ0FGSixDQURKLEVBTUlqSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMrQyxNQUF6QyxFQUFpRDtBQUFFMEcsSUFBQUEsUUFBUSxFQUFFLGtCQUFVdkUsQ0FBVixFQUFhO0FBQUUsYUFBTytDLFNBQVMsQ0FBQy9DLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLLEtBQVYsQ0FBaEI7QUFBbUMsS0FBOUQ7QUFBZ0VBLElBQUFBLEtBQUssRUFBRTZJLE1BQXZFO0FBQStFMkIsSUFBQUEsQ0FBQyxFQUFFLE1BQWxGO0FBQTBGQyxJQUFBQSxJQUFJLEVBQUU7QUFBaEcsR0FBakQsRUFDSTFKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQyxRQUFqQyxFQUEyQztBQUFFbEUsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBM0MsRUFBK0QsYUFBL0QsQ0FESixFQUVJZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUMsUUFBakMsRUFBMkM7QUFBRWxFLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQTNDLEVBQWdFLGNBQWhFLENBRkosRUFHSWUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDLFFBQWpDLEVBQTJDO0FBQUVsRSxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUEzQyxFQUFrRSxnQkFBbEUsQ0FISixDQU5KLENBTEosQ0FESSxFQWdCSmtJLE9BQU8sR0FBR25ILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzZKLE1BQXpDLEVBQWlEO0FBQUVDLElBQUFBLENBQUMsRUFBRTtBQUFMLEdBQWpELEVBQ041SixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMrSixPQUF6QyxFQUFrRDtBQUFFSCxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFsRCxDQURNLENBQUgsR0FDa0U3QyxTQUFTLENBQUNSLE1BQVYsR0FBbUJyRyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNxRCxrQkFBa0IsQ0FBQyxTQUFELENBQW5ELEVBQWdFO0FBQUVhLElBQUFBLE9BQU8sRUFBRUEsT0FBWDtBQUFvQk0sSUFBQUEsTUFBTSxFQUFFQSxNQUE1QjtBQUFvQ21DLElBQUFBLElBQUksRUFBRTtBQUExQyxHQUFoRSxDQUFuQixHQUF3STlKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzZKLE1BQXpDLEVBQWlEO0FBQUVDLElBQUFBLENBQUMsRUFBRTtBQUFMLEdBQWpELEVBQWlFLGVBQWpFLENBakI3TSxDQUFSO0FBa0JIOztBQUNEbEssa0JBQUEsR0FBcUIrRyxnQkFBckI7Ozs7Ozs7Ozs7O0FDaElhOztBQUNiLElBQUlySSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLEtBQW1DQyxNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQzVGLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCSixFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtBQUFFRyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7QUFBRSxhQUFPTixDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUFjO0FBQXBELEdBQTdCO0FBQ0gsQ0FId0QsR0FHbkQsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlNLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0NWLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlTLENBQVosRUFBZTtBQUMzRlgsRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QixTQUF6QixFQUFvQztBQUFFTSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkksSUFBQUEsS0FBSyxFQUFFRDtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNULENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQ2hCVCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVTLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJRSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVixDQUFULElBQWNVLEdBQWQ7QUFBbUIsUUFBSVYsQ0FBQyxLQUFLLFNBQU4sSUFBbUJKLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsR0FBckMsRUFBMENWLENBQTFDLENBQXZCLEVBQXFFTCxlQUFlLENBQUNpQixNQUFELEVBQVNGLEdBQVQsRUFBY1YsQ0FBZCxDQUFmO0FBQXhGOztBQUNqQk0sRUFBQUEsa0JBQWtCLENBQUNNLE1BQUQsRUFBU0YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPRSxNQUFQO0FBQ0gsQ0FORDs7QUFPQSxJQUFJaUYsU0FBUyxHQUFJLFFBQVEsS0FBS0EsU0FBZCxJQUE0QixVQUFVQyxPQUFWLEVBQW1CQyxVQUFuQixFQUErQkMsQ0FBL0IsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQ3JGLFdBQVNDLEtBQVQsQ0FBZTFGLEtBQWYsRUFBc0I7QUFBRSxXQUFPQSxLQUFLLFlBQVl3RixDQUFqQixHQUFxQnhGLEtBQXJCLEdBQTZCLElBQUl3RixDQUFKLENBQU0sVUFBVVIsT0FBVixFQUFtQjtBQUFFQSxNQUFBQSxPQUFPLENBQUNoRixLQUFELENBQVA7QUFBaUIsS0FBNUMsQ0FBcEM7QUFBb0Y7O0FBQzVHLFNBQU8sS0FBS3dGLENBQUMsS0FBS0EsQ0FBQyxHQUFHVCxPQUFULENBQU4sRUFBeUIsVUFBVUMsT0FBVixFQUFtQlcsTUFBbkIsRUFBMkI7QUFDdkQsYUFBU0MsU0FBVCxDQUFtQjVGLEtBQW5CLEVBQTBCO0FBQUUsVUFBSTtBQUFFNkYsUUFBQUEsSUFBSSxDQUFDSixTQUFTLENBQUNLLElBQVYsQ0FBZTlGLEtBQWYsQ0FBRCxDQUFKO0FBQThCLE9BQXBDLENBQXFDLE9BQU8rRixDQUFQLEVBQVU7QUFBRUosUUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU47QUFBWTtBQUFFOztBQUMzRixhQUFTQyxRQUFULENBQWtCaEcsS0FBbEIsRUFBeUI7QUFBRSxVQUFJO0FBQUU2RixRQUFBQSxJQUFJLENBQUNKLFNBQVMsQ0FBQyxPQUFELENBQVQsQ0FBbUJ6RixLQUFuQixDQUFELENBQUo7QUFBa0MsT0FBeEMsQ0FBeUMsT0FBTytGLENBQVAsRUFBVTtBQUFFSixRQUFBQSxNQUFNLENBQUNJLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzlGLGFBQVNGLElBQVQsQ0FBY3pGLE1BQWQsRUFBc0I7QUFBRUEsTUFBQUEsTUFBTSxDQUFDZ0MsSUFBUCxHQUFjNEMsT0FBTyxDQUFDNUUsTUFBTSxDQUFDSixLQUFSLENBQXJCLEdBQXNDMEYsS0FBSyxDQUFDdEYsTUFBTSxDQUFDSixLQUFSLENBQUwsQ0FBb0JpRixJQUFwQixDQUF5QlcsU0FBekIsRUFBb0NJLFFBQXBDLENBQXRDO0FBQXNGOztBQUM5R0gsSUFBQUEsSUFBSSxDQUFDLENBQUNKLFNBQVMsR0FBR0EsU0FBUyxDQUFDUSxLQUFWLENBQWdCWCxPQUFoQixFQUF5QkMsVUFBVSxJQUFJLEVBQXZDLENBQWIsRUFBeURPLElBQXpELEVBQUQsQ0FBSjtBQUNILEdBTE0sQ0FBUDtBQU1ILENBUkQ7O0FBU0EsSUFBSUksV0FBVyxHQUFJLFFBQVEsS0FBS0EsV0FBZCxJQUE4QixVQUFVWixPQUFWLEVBQW1CYSxJQUFuQixFQUF5QjtBQUNyRSxNQUFJQyxDQUFDLEdBQUc7QUFBRUMsSUFBQUEsS0FBSyxFQUFFLENBQVQ7QUFBWUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQUUsVUFBSUMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLENBQVgsRUFBYyxNQUFNQSxDQUFDLENBQUMsQ0FBRCxDQUFQO0FBQVksYUFBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBUjtBQUFjLEtBQXZFO0FBQXlFQyxJQUFBQSxJQUFJLEVBQUUsRUFBL0U7QUFBbUZDLElBQUFBLEdBQUcsRUFBRTtBQUF4RixHQUFSO0FBQUEsTUFBc0dDLENBQXRHO0FBQUEsTUFBeUdDLENBQXpHO0FBQUEsTUFBNEdKLENBQTVHO0FBQUEsTUFBK0dLLENBQS9HO0FBQ0EsU0FBT0EsQ0FBQyxHQUFHO0FBQUVkLElBQUFBLElBQUksRUFBRWUsSUFBSSxDQUFDLENBQUQsQ0FBWjtBQUFpQixhQUFTQSxJQUFJLENBQUMsQ0FBRCxDQUE5QjtBQUFtQyxjQUFVQSxJQUFJLENBQUMsQ0FBRDtBQUFqRCxHQUFKLEVBQTRELE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsS0FBaUNGLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxRQUFSLENBQUQsR0FBcUIsWUFBVztBQUFFLFdBQU8sSUFBUDtBQUFjLEdBQWpGLENBQTVELEVBQWdKSCxDQUF2Sjs7QUFDQSxXQUFTQyxJQUFULENBQWNHLENBQWQsRUFBaUI7QUFBRSxXQUFPLFVBQVVqSCxDQUFWLEVBQWE7QUFBRSxhQUFPOEYsSUFBSSxDQUFDLENBQUNtQixDQUFELEVBQUlqSCxDQUFKLENBQUQsQ0FBWDtBQUFzQixLQUE1QztBQUErQzs7QUFDbEUsV0FBUzhGLElBQVQsQ0FBY29CLEVBQWQsRUFBa0I7QUFDZCxRQUFJUCxDQUFKLEVBQU8sTUFBTSxJQUFJUSxTQUFKLENBQWMsaUNBQWQsQ0FBTjs7QUFDUCxXQUFPZCxDQUFQO0FBQVUsVUFBSTtBQUNWLFlBQUlNLENBQUMsR0FBRyxDQUFKLEVBQU9DLENBQUMsS0FBS0osQ0FBQyxHQUFHVSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBUixHQUFZTixDQUFDLENBQUMsUUFBRCxDQUFiLEdBQTBCTSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFOLENBQUMsQ0FBQyxPQUFELENBQUQsS0FBZSxDQUFDSixDQUFDLEdBQUdJLENBQUMsQ0FBQyxRQUFELENBQU4sS0FBcUJKLENBQUMsQ0FBQ2hHLElBQUYsQ0FBT29HLENBQVAsQ0FBckIsRUFBZ0MsQ0FBL0MsQ0FBUixHQUE0REEsQ0FBQyxDQUFDYixJQUFqRyxDQUFELElBQTJHLENBQUMsQ0FBQ1MsQ0FBQyxHQUFHQSxDQUFDLENBQUNoRyxJQUFGLENBQU9vRyxDQUFQLEVBQVVNLEVBQUUsQ0FBQyxDQUFELENBQVosQ0FBTCxFQUF1QjdFLElBQTlJLEVBQW9KLE9BQU9tRSxDQUFQO0FBQ3BKLFlBQUlJLENBQUMsR0FBRyxDQUFKLEVBQU9KLENBQVgsRUFBY1UsRUFBRSxHQUFHLENBQUNBLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFULEVBQVlWLENBQUMsQ0FBQ3ZHLEtBQWQsQ0FBTDs7QUFDZCxnQkFBUWlILEVBQUUsQ0FBQyxDQUFELENBQVY7QUFDSSxlQUFLLENBQUw7QUFBUSxlQUFLLENBQUw7QUFBUVYsWUFBQUEsQ0FBQyxHQUFHVSxFQUFKO0FBQVE7O0FBQ3hCLGVBQUssQ0FBTDtBQUFRYixZQUFBQSxDQUFDLENBQUNDLEtBQUY7QUFBVyxtQkFBTztBQUFFckcsY0FBQUEsS0FBSyxFQUFFaUgsRUFBRSxDQUFDLENBQUQsQ0FBWDtBQUFnQjdFLGNBQUFBLElBQUksRUFBRTtBQUF0QixhQUFQOztBQUNuQixlQUFLLENBQUw7QUFBUWdFLFlBQUFBLENBQUMsQ0FBQ0MsS0FBRjtBQUFXTSxZQUFBQSxDQUFDLEdBQUdNLEVBQUUsQ0FBQyxDQUFELENBQU47QUFBV0EsWUFBQUEsRUFBRSxHQUFHLENBQUMsQ0FBRCxDQUFMO0FBQVU7O0FBQ3hDLGVBQUssQ0FBTDtBQUFRQSxZQUFBQSxFQUFFLEdBQUdiLENBQUMsQ0FBQ0ssR0FBRixDQUFNVSxHQUFOLEVBQUw7O0FBQWtCZixZQUFBQSxDQUFDLENBQUNJLElBQUYsQ0FBT1csR0FBUDs7QUFBYzs7QUFDeEM7QUFDSSxnQkFBSSxFQUFFWixDQUFDLEdBQUdILENBQUMsQ0FBQ0ksSUFBTixFQUFZRCxDQUFDLEdBQUdBLENBQUMsQ0FBQ2EsTUFBRixHQUFXLENBQVgsSUFBZ0JiLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDYSxNQUFGLEdBQVcsQ0FBWixDQUFuQyxNQUF1REgsRUFBRSxDQUFDLENBQUQsQ0FBRixLQUFVLENBQVYsSUFBZUEsRUFBRSxDQUFDLENBQUQsQ0FBRixLQUFVLENBQWhGLENBQUosRUFBd0Y7QUFBRWIsY0FBQUEsQ0FBQyxHQUFHLENBQUo7QUFBTztBQUFXOztBQUM1RyxnQkFBSWEsRUFBRSxDQUFDLENBQUQsQ0FBRixLQUFVLENBQVYsS0FBZ0IsQ0FBQ1YsQ0FBRCxJQUFPVSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFWLENBQUMsQ0FBQyxDQUFELENBQVQsSUFBZ0JVLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVYsQ0FBQyxDQUFDLENBQUQsQ0FBaEQsQ0FBSixFQUEyRDtBQUFFSCxjQUFBQSxDQUFDLENBQUNDLEtBQUYsR0FBVVksRUFBRSxDQUFDLENBQUQsQ0FBWjtBQUFpQjtBQUFROztBQUN0RixnQkFBSUEsRUFBRSxDQUFDLENBQUQsQ0FBRixLQUFVLENBQVYsSUFBZWIsQ0FBQyxDQUFDQyxLQUFGLEdBQVVFLENBQUMsQ0FBQyxDQUFELENBQTlCLEVBQW1DO0FBQUVILGNBQUFBLENBQUMsQ0FBQ0MsS0FBRixHQUFVRSxDQUFDLENBQUMsQ0FBRCxDQUFYO0FBQWdCQSxjQUFBQSxDQUFDLEdBQUdVLEVBQUo7QUFBUTtBQUFROztBQUNyRSxnQkFBSVYsQ0FBQyxJQUFJSCxDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsRUFBeUI7QUFBRUgsY0FBQUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVVFLENBQUMsQ0FBQyxDQUFELENBQVg7O0FBQWdCSCxjQUFBQSxDQUFDLENBQUNLLEdBQUYsQ0FBTVksSUFBTixDQUFXSixFQUFYOztBQUFnQjtBQUFROztBQUNuRSxnQkFBSVYsQ0FBQyxDQUFDLENBQUQsQ0FBTCxFQUFVSCxDQUFDLENBQUNLLEdBQUYsQ0FBTVUsR0FBTjs7QUFDVmYsWUFBQUEsQ0FBQyxDQUFDSSxJQUFGLENBQU9XLEdBQVA7O0FBQWM7QUFYdEI7O0FBYUFGLFFBQUFBLEVBQUUsR0FBR2QsSUFBSSxDQUFDNUYsSUFBTCxDQUFVK0UsT0FBVixFQUFtQmMsQ0FBbkIsQ0FBTDtBQUNILE9BakJTLENBaUJSLE9BQU9MLENBQVAsRUFBVTtBQUFFa0IsUUFBQUEsRUFBRSxHQUFHLENBQUMsQ0FBRCxFQUFJbEIsQ0FBSixDQUFMO0FBQWFZLFFBQUFBLENBQUMsR0FBRyxDQUFKO0FBQVEsT0FqQnpCLFNBaUJrQztBQUFFRCxRQUFBQSxDQUFDLEdBQUdILENBQUMsR0FBRyxDQUFSO0FBQVk7QUFqQjFEOztBQWtCQSxRQUFJVSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBWixFQUFlLE1BQU1BLEVBQUUsQ0FBQyxDQUFELENBQVI7QUFBYSxXQUFPO0FBQUVqSCxNQUFBQSxLQUFLLEVBQUVpSCxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFBLEVBQUUsQ0FBQyxDQUFELENBQVYsR0FBZ0IsS0FBSyxDQUE5QjtBQUFpQzdFLE1BQUFBLElBQUksRUFBRTtBQUF2QyxLQUFQO0FBQy9CO0FBQ0osQ0ExQkQ7O0FBMkJBLElBQUk1QixlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUkyRyxPQUFPLEdBQUc5RyxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdkLFlBQVksQ0FBQ1UsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTFCOztBQUNBLElBQUk0RyxrQkFBa0IsR0FBRy9HLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxzRkFBRCxDQUFSLENBQXhDOztBQUNBLFNBQVNtSyx1QkFBVCxHQUFtQztBQUMvQixNQUFJcEosRUFBRSxHQUFHLENBQUMsR0FBR1gsT0FBTyxDQUFDMEcsUUFBWixFQUFzQixFQUF0QixDQUFUO0FBQUEsTUFBb0NDLFVBQVUsR0FBR2hHLEVBQUUsQ0FBQyxDQUFELENBQW5EO0FBQUEsTUFBd0RpRyxhQUFhLEdBQUdqRyxFQUFFLENBQUMsQ0FBRCxDQUExRTs7QUFDQSxNQUFJQyxFQUFFLEdBQUcsQ0FBQyxHQUFHWixPQUFPLENBQUMwRyxRQUFaLEVBQXNCLEVBQXRCLENBQVQ7QUFBQSxNQUFvQ0csU0FBUyxHQUFHakcsRUFBRSxDQUFDLENBQUQsQ0FBbEQ7QUFBQSxNQUF1RGtHLFlBQVksR0FBR2xHLEVBQUUsQ0FBQyxDQUFELENBQXhFOztBQUNBLE1BQUltRyxFQUFFLEdBQUcsQ0FBQyxHQUFHL0csT0FBTyxDQUFDMEcsUUFBWixFQUFzQixDQUF0QixDQUFUO0FBQUEsTUFBbUNzRCxhQUFhLEdBQUdqRCxFQUFFLENBQUMsQ0FBRCxDQUFyRDtBQUFBLE1BQTBEa0QsZ0JBQWdCLEdBQUdsRCxFQUFFLENBQUMsQ0FBRCxDQUEvRTs7QUFDQSxNQUFJRyxFQUFFLEdBQUcsQ0FBQyxHQUFHbEgsT0FBTyxDQUFDMEcsUUFBWixFQUFzQixJQUF0QixDQUFUO0FBQUEsTUFBc0NTLE9BQU8sR0FBR0QsRUFBRSxDQUFDLENBQUQsQ0FBbEQ7QUFBQSxNQUF1REUsVUFBVSxHQUFHRixFQUFFLENBQUMsQ0FBRCxDQUF0RTs7QUFDQSxNQUFJRyxPQUFPLEdBQUc7QUFDVkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hDLE1BQUFBLEVBQUUsRUFBRSxXQUREO0FBRUhDLE1BQUFBLEtBQUssRUFBRTtBQUZKLEtBREc7QUFLVkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hkLE1BQUFBLFVBQVUsRUFBRUE7QUFEVCxLQUxHO0FBUVZlLElBQUFBLE1BQU0sRUFBRSxDQUFDLFNBQUQ7QUFSRSxHQUFkO0FBVUEsTUFBSUMsTUFBTSxHQUFHLENBQ1Q7QUFDSTVELElBQUFBLElBQUksRUFBRSxXQURWO0FBRUk2RCxJQUFBQSxJQUFJLEVBQUVmO0FBRlYsR0FEUyxDQUFiOztBQU1BLE1BQUlnQixFQUFFLEdBQUcsQ0FBQyxHQUFHN0gsT0FBTyxDQUFDMEcsUUFBWixFQUFzQixRQUF0QixDQUFUO0FBQUEsTUFBMENvQixNQUFNLEdBQUdELEVBQUUsQ0FBQyxDQUFELENBQXJEO0FBQUEsTUFBMERFLFNBQVMsR0FBR0YsRUFBRSxDQUFDLENBQUQsQ0FBeEU7O0FBQ0EsR0FBQyxHQUFHN0gsT0FBTyxDQUFDZ0ksU0FBWixFQUF1QixZQUFZO0FBQy9CLGFBQVNDLGFBQVQsR0FBeUI7QUFDckIsYUFBTzNELFNBQVMsQ0FBQyxJQUFELEVBQU8sS0FBSyxDQUFaLEVBQWUsS0FBSyxDQUFwQixFQUF1QixZQUFZO0FBQy9DLFlBQUk0RCxHQUFKO0FBQ0EsZUFBTy9DLFdBQVcsQ0FBQyxJQUFELEVBQU8sVUFBVXhFLEVBQVYsRUFBYztBQUNuQyxrQkFBUUEsRUFBRSxDQUFDMkUsS0FBWDtBQUNJLGlCQUFLLENBQUw7QUFBUSxxQkFBTyxDQUFDO0FBQUU7QUFBSCxnQkFBY2lCLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJ6SCxHQUFuQixDQUF1Qix5Q0FBeUNxRixNQUF6QyxDQUFnRDJELE1BQWhELENBQXZCLENBQWQsQ0FBUDs7QUFDUixpQkFBSyxDQUFMO0FBQ0lJLGNBQUFBLEdBQUcsR0FBR3ZILEVBQUUsQ0FBQzRFLElBQUgsRUFBTjtBQUNBNEMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsR0FBRyxDQUFDTixJQUFKLENBQVNmLFNBQW5DOztBQUNBLGtCQUFJcUIsR0FBRyxDQUFDTixJQUFSLEVBQWM7QUFDVmhCLGdCQUFBQSxhQUFhLENBQUNzQixHQUFHLENBQUNOLElBQUosQ0FBU2pCLFVBQVYsQ0FBYjtBQUNBRyxnQkFBQUEsWUFBWSxDQUFDb0IsR0FBRyxDQUFDTixJQUFKLENBQVNmLFNBQVYsQ0FBWjtBQUNBb0QsZ0JBQUFBLGdCQUFnQixDQUFDL0IsR0FBRyxDQUFDTixJQUFKLENBQVNvQyxhQUFWLENBQWhCO0FBQ0E1QyxnQkFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNIOztBQUNELHFCQUFPLENBQUM7QUFBRTtBQUFILGVBQVA7QUFYUjtBQWFILFNBZGlCLENBQWxCO0FBZUgsT0FqQmUsQ0FBaEI7QUFrQkg7O0FBQ0RhLElBQUFBLGFBQWE7QUFDaEIsR0F0QkQsRUFzQkcsQ0FBQ0gsTUFBRCxDQXRCSDtBQXVCQSxTQUFROUgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDbkQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFJLFFBQXBELEVBQThELElBQTlELEVBQ0pySSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFQyxJQUFBQSxFQUFFLEVBQUUsS0FBTjtBQUFhQyxJQUFBQSxFQUFFLEVBQUUsTUFBakI7QUFBeUJDLElBQUFBLFlBQVksRUFBRTtBQUF2QyxHQUE5QyxFQUNJekksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlQyxDQUFoRCxFQUFtRDtBQUFFSCxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsSUFBbkI7QUFBeUJDLElBQUFBLFVBQVUsRUFBRSxNQUFyQztBQUE2Q0MsSUFBQUEsYUFBYSxFQUFFLE1BQTVEO0FBQW9FQyxJQUFBQSxhQUFhLEVBQUUsV0FBbkY7QUFBZ0dDLElBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdsSixPQUFPLENBQUNtSixpQkFBWixFQUErQixVQUEvQixFQUEyQyxVQUEzQztBQUF2RyxHQUFuRCxFQUNJLE9BREosRUFFSW5CLE1BQU0sSUFBSSxPQUFWLEdBQW9CLFFBQXBCLEdBQStCQSxNQUFNLElBQUksUUFBVixHQUFxQixTQUFyQixHQUFpQyxXQUZwRSxFQUdJLGNBSEosQ0FESixFQUtJOUgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRUMsSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FBL0MsRUFDSW5KLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVaLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxLQUFuQjtBQUEwQkMsSUFBQUEsVUFBVSxFQUFFLENBQUMsTUFBRCxFQUFTLFdBQVQsQ0FBdEM7QUFBNkRHLElBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdsSixPQUFPLENBQUNtSixpQkFBWixFQUErQixVQUEvQixFQUEyQyxTQUEzQyxDQUFwRTtBQUEySEksSUFBQUEsVUFBVSxFQUFFO0FBQXZJLEdBQS9DLEVBQ0lXLGFBREosRUFFSWhLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZVksSUFBaEQsRUFBc0Q7QUFBRVYsSUFBQUEsUUFBUSxFQUFFLElBQVo7QUFBa0JDLElBQUFBLFVBQVUsRUFBRSxRQUE5QjtBQUF3Q0csSUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR2xKLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLFVBQTNDO0FBQS9DLEdBQXRELEVBQ0ksR0FESixFQUVJLGVBRkosQ0FGSixDQURKLEVBTUlqSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMrQyxNQUF6QyxFQUFpRDtBQUFFMEcsSUFBQUEsUUFBUSxFQUFFLGtCQUFVdkUsQ0FBVixFQUFhO0FBQUUsYUFBTytDLFNBQVMsQ0FBQy9DLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLLEtBQVYsQ0FBaEI7QUFBbUMsS0FBOUQ7QUFBZ0VBLElBQUFBLEtBQUssRUFBRTZJLE1BQXZFO0FBQStFMkIsSUFBQUEsQ0FBQyxFQUFFLE1BQWxGO0FBQTBGQyxJQUFBQSxJQUFJLEVBQUU7QUFBaEcsR0FBakQsRUFDSTFKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQyxRQUFqQyxFQUEyQztBQUFFbEUsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBM0MsRUFBK0QsYUFBL0QsQ0FESixFQUVJZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUMsUUFBakMsRUFBMkM7QUFBRWxFLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQTNDLEVBQWdFLGNBQWhFLENBRkosRUFHSWUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDLFFBQWpDLEVBQTJDO0FBQUVsRSxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUEzQyxFQUFrRSxnQkFBbEUsQ0FISixDQU5KLENBTEosQ0FESSxFQWdCSmtJLE9BQU8sR0FBR25ILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzZKLE1BQXpDLEVBQWlEO0FBQUVDLElBQUFBLENBQUMsRUFBRTtBQUFMLEdBQWpELEVBQ041SixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMrSixPQUF6QyxFQUFrRDtBQUFFSCxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFsRCxDQURNLENBQUgsR0FDa0U3QyxTQUFTLENBQUNSLE1BQVYsR0FBbUJyRyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNxRCxrQkFBa0IsQ0FBQyxTQUFELENBQW5ELEVBQWdFO0FBQUVhLElBQUFBLE9BQU8sRUFBRUEsT0FBWDtBQUFvQk0sSUFBQUEsTUFBTSxFQUFFQSxNQUE1QjtBQUFvQ21DLElBQUFBLElBQUksRUFBRTtBQUExQyxHQUFoRSxDQUFuQixHQUF5STlKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzZKLE1BQXpDLEVBQWlEO0FBQUVDLElBQUFBLENBQUMsRUFBRTtBQUFMLEdBQWpELEVBQWlFLGVBQWpFLENBakI5TSxDQUFSO0FBa0JIOztBQUNEbEssa0JBQUEsR0FBcUJxSyx1QkFBckI7Ozs7Ozs7Ozs7O0FDaElhOztBQUNiLElBQUl0SyxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsU0FBU3NLLGdCQUFULEdBQTRCO0FBQ3hCLFNBQVFsSyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVSxJQUFBQSxVQUFVLEVBQUUsUUFBekI7QUFBbUNDLElBQUFBLGNBQWMsRUFBRTtBQUFuRCxHQUEvQyxFQUNKcEssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDdUssSUFBekMsQ0FDQTtBQURBLElBRUU7QUFDRTtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsZ0JBRmhCO0FBRWtDQyxJQUFBQSxlQUFlLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixnQkFBbkIsRUFBcUMsZ0JBQXJDLENBRm5EO0FBRTJHQyxJQUFBQSxHQUFHLEVBQUUsQ0FGaEg7QUFFbUhDLElBQUFBLFNBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFUO0FBRjlILEdBRkYsRUFLSXpLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRLLFFBQXpDLEVBQW1EO0FBQUVDLElBQUFBLEVBQUUsRUFBRSxDQUFDLEdBQUc3SyxPQUFPLENBQUNtSixpQkFBWixFQUErQixPQUEvQixFQUF3QyxVQUF4QyxDQUFOO0FBQTJEMkIsSUFBQUEsRUFBRSxFQUFFLENBQS9EO0FBQWtFQyxJQUFBQSxFQUFFLEVBQUUsQ0FBdEU7QUFBeUVDLElBQUFBLE1BQU0sRUFBRSxNQUFqRjtBQUF5RkMsSUFBQUEsT0FBTyxFQUFFO0FBQWxHLEdBQW5ELEVBQ0kvSyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWVDLENBQWhELEVBQW1EO0FBQUVILElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxJQUFuQjtBQUF5QkMsSUFBQUEsVUFBVSxFQUFFLE1BQXJDO0FBQTZDQyxJQUFBQSxhQUFhLEVBQUUsTUFBNUQ7QUFBb0VDLElBQUFBLGFBQWEsRUFBRSxXQUFuRjtBQUFnR0MsSUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR2xKLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLFVBQTNDO0FBQXZHLEdBQW5ELEVBQW9OLGVBQXBOLENBREosRUFFSWpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVaLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxLQUFuQjtBQUEwQkMsSUFBQUEsVUFBVSxFQUFFLENBQUMsTUFBRCxFQUFTLFdBQVQsQ0FBdEM7QUFBNkRHLElBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdsSixPQUFPLENBQUNtSixpQkFBWixFQUErQixVQUEvQixFQUEyQyxTQUEzQyxDQUFwRTtBQUEySEksSUFBQUEsVUFBVSxFQUFFO0FBQXZJLEdBQS9DLEVBQ0ksR0FESixFQUVJckosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlWSxJQUFoRCxFQUFzRDtBQUFFVixJQUFBQSxRQUFRLEVBQUUsS0FBWjtBQUFtQkMsSUFBQUEsVUFBVSxFQUFFLFFBQS9CO0FBQXlDRyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsVUFBM0M7QUFBaEQsR0FBdEQsRUFDSSxHQURKLEVBRUksT0FGSixDQUZKLENBRkosRUFPSWpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZUMsQ0FBaEQsRUFBbUQ7QUFBRUgsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLElBQW5CO0FBQy9DO0FBQ0FJLElBQUFBLEtBQUssRUFBRTtBQUZ3QyxHQUFuRCxFQUV5QiwyREFGekIsQ0FQSixFQVVJaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDa0wsS0FBekMsRUFBZ0Q7QUFBRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FBWDtBQUE4QkMsSUFBQUEsT0FBTyxFQUFFLENBQXZDO0FBQTBDZCxJQUFBQSxjQUFjLEVBQUUsUUFBMUQ7QUFBb0VlLElBQUFBLFNBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYO0FBQS9FLEdBQWhELEVBQ0luTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzTCxJQUF6QyxFQUErQztBQUFFQyxJQUFBQSxJQUFJLEVBQUUsc0JBQVI7QUFBZ0M1QixJQUFBQSxDQUFDLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFuQztBQUFxRHdCLElBQUFBLE9BQU8sRUFBRSxhQUE5RDtBQUE2RWQsSUFBQUEsVUFBVSxFQUFFLFFBQXpGO0FBQW1HQyxJQUFBQSxjQUFjLEVBQUUsUUFBbkg7QUFBNkhRLElBQUFBLEVBQUUsRUFBRSxDQUFqSTtBQUFvSUMsSUFBQUEsRUFBRSxFQUFFLENBQXhJO0FBQTJJUyxJQUFBQSxNQUFNLEVBQUUsbUJBQW5KO0FBQXdLekMsSUFBQUEsVUFBVSxFQUFFLE1BQXBMO0FBQTRMa0MsSUFBQUEsT0FBTyxFQUFFLElBQXJNO0FBQTJNRCxJQUFBQSxNQUFNLEVBQUUsSUFBbk47QUFBeU45QixJQUFBQSxLQUFLLEVBQUUsZ0JBQWhPO0FBQWtQMkIsSUFBQUEsRUFBRSxFQUFFLFlBQXRQO0FBQW9RWSxJQUFBQSxNQUFNLEVBQUU7QUFDblRaLE1BQUFBLEVBQUUsRUFBRTtBQUQrUztBQUE1USxHQUEvQyxFQUVTLGNBRlQsQ0FESixDQVZKLENBTEosRUFtQkkzSyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SyxRQUF6QyxFQUFtRDtBQUFFQyxJQUFBQSxFQUFFLEVBQUUsQ0FBQyxHQUFHN0ssT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsT0FBL0IsRUFBd0MsVUFBeEMsQ0FBTjtBQUEyRDJCLElBQUFBLEVBQUUsRUFBRSxDQUEvRDtBQUFrRUMsSUFBQUEsRUFBRSxFQUFFLENBQXRFO0FBQXlFQyxJQUFBQSxNQUFNLEVBQUUsTUFBakY7QUFBeUZDLElBQUFBLE9BQU8sRUFBRTtBQUFsRyxHQUFuRCxFQUNJL0ssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlQyxDQUFoRCxFQUFtRDtBQUFFSCxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsSUFBbkI7QUFBeUJDLElBQUFBLFVBQVUsRUFBRSxNQUFyQztBQUE2Q0MsSUFBQUEsYUFBYSxFQUFFLE1BQTVEO0FBQW9FQyxJQUFBQSxhQUFhLEVBQUUsV0FBbkY7QUFBZ0dDLElBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdsSixPQUFPLENBQUNtSixpQkFBWixFQUErQixVQUEvQixFQUEyQyxVQUEzQztBQUF2RyxHQUFuRCxFQUFvTix5QkFBcE4sQ0FESixFQUVJakosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRVosSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLEtBQW5CO0FBQTBCQyxJQUFBQSxVQUFVLEVBQUUsQ0FBQyxNQUFELEVBQVMsV0FBVCxDQUF0QztBQUE2REcsSUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR2xKLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLFNBQTNDLENBQXBFO0FBQTJISSxJQUFBQSxVQUFVLEVBQUU7QUFBdkksR0FBL0MsRUFDSSxJQURKLEVBRUlySixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWVZLElBQWhELEVBQXNEO0FBQUVWLElBQUFBLFFBQVEsRUFBRSxLQUFaO0FBQW1CQyxJQUFBQSxVQUFVLEVBQUUsUUFBL0I7QUFBeUNHLElBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdsSixPQUFPLENBQUNtSixpQkFBWixFQUErQixVQUEvQixFQUEyQyxVQUEzQztBQUFoRCxHQUF0RCxFQUNJLEdBREosRUFFSSxLQUZKLENBRkosQ0FGSixFQU9JakosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlQyxDQUFoRCxFQUFtRDtBQUFFSCxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsSUFBbkI7QUFDL0M7QUFDQUksSUFBQUEsS0FBSyxFQUFFO0FBRndDLEdBQW5ELEVBRXlCLDBEQUZ6QixDQVBKLEVBVUloSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNrTCxLQUF6QyxFQUFnRDtBQUFFQyxJQUFBQSxPQUFPLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBVixDQUFYO0FBQThCQyxJQUFBQSxPQUFPLEVBQUUsQ0FBdkM7QUFBMENkLElBQUFBLGNBQWMsRUFBRSxRQUExRDtBQUFvRWUsSUFBQUEsU0FBUyxFQUFFLENBQUMsUUFBRCxFQUFXLEtBQVg7QUFBL0UsR0FBaEQsQ0FWSixDQW5CSixDQURJLENBQVI7QUErQkg7O0FBQ0R6TCxrQkFBQSxHQUFxQndLLGdCQUFyQjs7Ozs7Ozs7Ozs7QUN4Q2E7O0FBQ2IsSUFBSXpLLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxJQUFJNEwsa0JBQWtCLEdBQUcvTCxlQUFlLENBQUNHLG1CQUFPLENBQUMsd0dBQUQsQ0FBUixDQUF4Qzs7QUFDQSxJQUFJNkwseUJBQXlCLEdBQUdoTSxlQUFlLENBQUNHLG1CQUFPLENBQUMsc0hBQUQsQ0FBUixDQUEvQzs7QUFDQSxTQUFTOEwsZ0JBQVQsR0FBNEI7QUFDeEIsU0FBUTFMLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3VLLElBQXpDLENBQ1I7QUFEUSxJQUVOO0FBQ0U7QUFDQVosSUFBQUEsQ0FBQyxFQUFFLE1BRkw7QUFFYWEsSUFBQUEsWUFBWSxFQUFFLGdCQUYzQjtBQUU2Q0MsSUFBQUEsZUFBZSxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQW5CLEVBQXFDLGdCQUFyQyxDQUY5RDtBQUVzSEMsSUFBQUEsR0FBRyxFQUFFLENBRjNIO0FBRThIQyxJQUFBQSxTQUFTLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVDtBQUZ6SSxHQUZNLEVBS0p6SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SyxRQUF6QyxFQUFtRDtBQUFFQyxJQUFBQSxFQUFFLEVBQUUsQ0FBQyxHQUFHN0ssT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsT0FBL0IsRUFBd0MsVUFBeEMsQ0FBTjtBQUEyRDJCLElBQUFBLEVBQUUsRUFBRSxDQUEvRDtBQUFrRUMsSUFBQUEsRUFBRSxFQUFFLENBQXRFO0FBQXlFQyxJQUFBQSxNQUFNLEVBQUUsTUFBakY7QUFBeUZDLElBQUFBLE9BQU8sRUFBRTtBQUFsRyxHQUFuRCxFQUNJL0ssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDcUksa0JBQWtCLENBQUMsU0FBRCxDQUFuRCxFQUFnRSxJQUFoRSxDQURKLENBTEksRUFPSnhMLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRLLFFBQXpDLEVBQW1EO0FBQUVDLElBQUFBLEVBQUUsRUFBRSxDQUFDLEdBQUc3SyxPQUFPLENBQUNtSixpQkFBWixFQUErQixPQUEvQixFQUF3QyxVQUF4QyxDQUFOO0FBQTJEMkIsSUFBQUEsRUFBRSxFQUFFLENBQS9EO0FBQWtFQyxJQUFBQSxFQUFFLEVBQUUsQ0FBdEU7QUFBeUVDLElBQUFBLE1BQU0sRUFBRSxNQUFqRjtBQUF5RkMsSUFBQUEsT0FBTyxFQUFFO0FBQWxHLEdBQW5ELEVBQ0kvSyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNzSSx5QkFBeUIsQ0FBQyxTQUFELENBQTFELEVBQXVFLElBQXZFLENBREosQ0FQSSxDQUFSO0FBU0g7O0FBQ0QvTCxrQkFBQSxHQUFxQmdNLGdCQUFyQjs7Ozs7Ozs7Ozs7QUNwQmE7O0FBQ2IsSUFBSUMsUUFBUSxHQUFJLFFBQVEsS0FBS0EsUUFBZCxJQUEyQixZQUFZO0FBQ2xEQSxFQUFBQSxRQUFRLEdBQUd0TixNQUFNLENBQUN1TixNQUFQLElBQWlCLFVBQVNwRyxDQUFULEVBQVk7QUFDcEMsU0FBSyxJQUFJcUcsQ0FBSixFQUFPQyxDQUFDLEdBQUcsQ0FBWCxFQUFjN0YsQ0FBQyxHQUFHOEYsU0FBUyxDQUFDMUYsTUFBakMsRUFBeUN5RixDQUFDLEdBQUc3RixDQUE3QyxFQUFnRDZGLENBQUMsRUFBakQsRUFBcUQ7QUFDakRELE1BQUFBLENBQUMsR0FBR0UsU0FBUyxDQUFDRCxDQUFELENBQWI7O0FBQ0EsV0FBSyxJQUFJbkQsQ0FBVCxJQUFja0QsQ0FBZDtBQUFpQixZQUFJeE4sTUFBTSxDQUFDaUIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDcU0sQ0FBckMsRUFBd0NsRCxDQUF4QyxDQUFKLEVBQ2JuRCxDQUFDLENBQUNtRCxDQUFELENBQUQsR0FBT2tELENBQUMsQ0FBQ2xELENBQUQsQ0FBUjtBQURKO0FBRUg7O0FBQ0QsV0FBT25ELENBQVA7QUFDSCxHQVBEOztBQVFBLFNBQU9tRyxRQUFRLENBQUN6RyxLQUFULENBQWUsSUFBZixFQUFxQjZHLFNBQXJCLENBQVA7QUFDSCxDQVZEOztBQVdBLElBQUkzTixlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLEtBQW1DQyxNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQzVGLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCSixFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtBQUFFRyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7QUFBRSxhQUFPTixDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUFjO0FBQXBELEdBQTdCO0FBQ0gsQ0FId0QsR0FHbkQsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlNLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0NWLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlTLENBQVosRUFBZTtBQUMzRlgsRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QixTQUF6QixFQUFvQztBQUFFTSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkksSUFBQUEsS0FBSyxFQUFFRDtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNULENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQ2hCVCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVTLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJRSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVixDQUFULElBQWNVLEdBQWQ7QUFBbUIsUUFBSVYsQ0FBQyxLQUFLLFNBQU4sSUFBbUJKLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsR0FBckMsRUFBMENWLENBQTFDLENBQXZCLEVBQXFFTCxlQUFlLENBQUNpQixNQUFELEVBQVNGLEdBQVQsRUFBY1YsQ0FBZCxDQUFmO0FBQXhGOztBQUNqQk0sRUFBQUEsa0JBQWtCLENBQUNNLE1BQUQsRUFBU0YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPRSxNQUFQO0FBQ0gsQ0FORDs7QUFPQSxJQUFJSSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlPLFNBQVMsR0FBR1AsbUJBQU8sQ0FBQywyRUFBRCxDQUF2Qjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdkLFlBQVksQ0FBQ1UsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTFCOztBQUNBLElBQUlvTSxJQUFJLEdBQUdwTSxtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUlxTSxhQUFhLEdBQUd4TSxlQUFlLENBQUNHLG1CQUFPLENBQUMsd0VBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJc00sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBVXZMLEVBQVYsRUFBYztBQUM1QixNQUFJd0wsUUFBUSxHQUFHeEwsRUFBRSxDQUFDd0wsUUFBbEI7QUFDQSxHQUFDLEdBQUduTSxPQUFPLENBQUNnSSxTQUFaLEVBQXVCLFlBQVk7QUFDL0JHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCK0QsUUFBL0I7QUFDSCxHQUZELEVBRUcsRUFGSDs7QUFHQSxNQUFJdkwsRUFBRSxHQUFHLENBQUMsR0FBR1osT0FBTyxDQUFDMEcsUUFBWixHQUFUO0FBQUEsTUFBa0MwRixRQUFRLEdBQUd4TCxFQUFFLENBQUMsQ0FBRCxDQUEvQztBQUFBLE1BQW9EeUwsV0FBVyxHQUFHekwsRUFBRSxDQUFDLENBQUQsQ0FBcEU7O0FBQ0EsTUFBSTBMLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBVUMsR0FBVixFQUFlO0FBQ2hDRixJQUFBQSxXQUFXLENBQUNFLEdBQUQsQ0FBWDtBQUNILEdBRkQ7O0FBR0EsTUFBSUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFZO0FBQzdCck0sSUFBQUEsU0FBUyxDQUFDRyxPQUFWLENBQWtCbU0sSUFBbEIsQ0FBdUIseUJBQXZCLEVBQWtEO0FBQUVDLE1BQUFBLE1BQU0sRUFBRU47QUFBVixLQUFsRCxFQUF3RTtBQUFFTyxNQUFBQSxjQUFjLEVBQUU7QUFBbEIsS0FBeEU7QUFDQU4sSUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEdBSEQ7O0FBSUEsU0FBUXJNLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQyxLQUFqQyxFQUF3QyxJQUF4QyxFQUNKbkQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXNFLElBQUFBLEVBQUUsRUFBRSxLQUFOO0FBQWFuRCxJQUFBQSxDQUFDLEVBQUUsTUFBaEI7QUFBd0JvRCxJQUFBQSxTQUFTLEVBQUU7QUFBbkMsR0FBOUMsRUFBMkZWLFFBQVEsQ0FBQzlGLE1BQVQsR0FDdkZyRyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNnTixLQUF6QyxFQUFnRDtBQUFFQyxJQUFBQSxPQUFPLEVBQUUsUUFBWDtBQUFxQnRELElBQUFBLENBQUMsRUFBRTtBQUF4QixHQUFoRCxFQUNJekosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDa04sS0FBekMsRUFBZ0QsSUFBaEQsRUFDSWhOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ21OLEVBQXpDLEVBQTZDLElBQTdDLEVBQ0lqTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxHQUFuRCxDQURKLEVBRUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxjQUFuRCxDQUZKLEVBR0lsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxTQUFuRCxDQUhKLEVBSUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxTQUFuRCxDQUpKLEVBS0lsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxTQUFuRCxDQUxKLEVBTUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxTQUFuRCxDQU5KLEVBT0lsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxTQUFuRCxDQVBKLEVBUUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxTQUFuRCxDQVJKLEVBU0lsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxTQUFuRCxDQVRKLEVBVUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QztBQUFFQyxJQUFBQSxTQUFTLEVBQUU7QUFBYixHQUE3QyxDQVZKLENBREosQ0FESixFQWFJbk4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc04sS0FBekMsRUFBZ0QsSUFBaEQsRUFBc0RqQixRQUFRLENBQUNrQixHQUFULENBQWEsVUFBVWQsR0FBVixFQUFlZSxLQUFmLEVBQXNCO0FBQUUsV0FBT3ROLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ21OLEVBQXpDLEVBQTZDO0FBQUVNLE1BQUFBLEdBQUcsRUFBRUQ7QUFBUCxLQUE3QyxFQUM5RnROLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBOLEVBQXpDLEVBQTZDLElBQTdDLEVBQW1ERixLQUFLLEdBQUcsQ0FBM0QsQ0FEOEYsRUFFOUZ0TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRGpCLEdBQUcsV0FBdEQsQ0FGOEYsRUFHOUZ2TSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwTixFQUF6QyxFQUE2QyxJQUE3QyxFQUNJeE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRTJDLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1Cd0MsTUFBQUEsV0FBVyxFQUFFLFFBQWhDO0FBQTBDakQsTUFBQUEsR0FBRyxFQUFFO0FBQS9DLEtBQTlDLEVBQ0k0QixRQUFRLElBQUksQ0FBQ0EsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLFFBQVEsQ0FBQzdFLEVBQTlELEtBQXFFZ0YsR0FBRyxDQUFDaEYsRUFBckYsR0FDTXZILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUUrRSxNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhb0QsTUFBQUEsRUFBRSxFQUFFLEtBQWpCO0FBQXdCZCxNQUFBQSxJQUFJLEVBQUUsUUFBOUI7QUFBd0M3SyxNQUFBQSxLQUFLLEVBQUVtTixRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxLQUFLLEtBQUssQ0FBdkMsR0FBMkMsS0FBSyxDQUFoRCxHQUFvREEsUUFBUSxDQUFDc0IsU0FBNUc7QUFBdUhuRSxNQUFBQSxRQUFRLEVBQUUsa0JBQVV2RSxDQUFWLEVBQWE7QUFBRSxlQUFPcUgsV0FBVyxDQUFDVixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFELEVBQUtTLFFBQUwsQ0FBVCxFQUF5QjtBQUFFc0IsVUFBQUEsU0FBUyxFQUFFMUksQ0FBQyxDQUFDd0UsTUFBRixDQUFTdks7QUFBdEIsU0FBekIsQ0FBVCxDQUFsQjtBQUFzRjtBQUF0TyxLQUFoRCxDQUROLEdBRU1zTixHQUFHLENBQUNtQixTQUhkLEVBSUksR0FKSixDQURKLENBSDhGLEVBUzlGMU4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFDSXhOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUUyQyxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQndDLE1BQUFBLFdBQVcsRUFBRSxRQUFoQztBQUEwQ2pELE1BQUFBLEdBQUcsRUFBRTtBQUEvQyxLQUE5QyxFQUNJNEIsUUFBUSxJQUFJLENBQUNBLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUssS0FBSyxDQUF2QyxHQUEyQyxLQUFLLENBQWhELEdBQW9EQSxRQUFRLENBQUM3RSxFQUE5RCxLQUFxRWdGLEdBQUcsQ0FBQ2hGLEVBQXJGLEdBQ012SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyQyxLQUF6QyxFQUFnRDtBQUFFK0UsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYW9ELE1BQUFBLEVBQUUsRUFBRSxLQUFqQjtBQUF3QmQsTUFBQUEsSUFBSSxFQUFFLFFBQTlCO0FBQXdDN0ssTUFBQUEsS0FBSyxFQUFFbU4sUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLFFBQVEsQ0FBQ3VCLFNBQTVHO0FBQXVIcEUsTUFBQUEsUUFBUSxFQUFFLGtCQUFVdkUsQ0FBVixFQUFhO0FBQUUsZUFBT3FILFdBQVcsQ0FBQ1YsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLUyxRQUFMLENBQVQsRUFBeUI7QUFBRXVCLFVBQUFBLFNBQVMsRUFBRTNJLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQXRCLFNBQXpCLENBQVQsQ0FBbEI7QUFBc0Y7QUFBdE8sS0FBaEQsQ0FETixHQUVNc04sR0FBRyxDQUFDb0IsU0FIZCxFQUlJLEdBSkosQ0FESixDQVQ4RixFQWU5RjNOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBOLEVBQXpDLEVBQTZDLElBQTdDLEVBQ0l4TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFMkMsTUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJ3QyxNQUFBQSxXQUFXLEVBQUUsUUFBaEM7QUFBMENqRCxNQUFBQSxHQUFHLEVBQUU7QUFBL0MsS0FBOUMsRUFDSTRCLFFBQVEsSUFBSSxDQUFDQSxRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxLQUFLLEtBQUssQ0FBdkMsR0FBMkMsS0FBSyxDQUFoRCxHQUFvREEsUUFBUSxDQUFDN0UsRUFBOUQsS0FBcUVnRixHQUFHLENBQUNoRixFQUFyRixHQUNNdkgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMkMsS0FBekMsRUFBZ0Q7QUFBRStFLE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFvRCxNQUFBQSxFQUFFLEVBQUUsS0FBakI7QUFBd0JkLE1BQUFBLElBQUksRUFBRSxRQUE5QjtBQUF3QzdLLE1BQUFBLEtBQUssRUFBRW1OLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUssS0FBSyxDQUF2QyxHQUEyQyxLQUFLLENBQWhELEdBQW9EQSxRQUFRLENBQUN3QixXQUE1RztBQUF5SHJFLE1BQUFBLFFBQVEsRUFBRSxrQkFBVXZFLENBQVYsRUFBYTtBQUFFLGVBQU9xSCxXQUFXLENBQUNWLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUQsRUFBS1MsUUFBTCxDQUFULEVBQXlCO0FBQUV3QixVQUFBQSxXQUFXLEVBQUU1SSxDQUFDLENBQUN3RSxNQUFGLENBQVN2SztBQUF4QixTQUF6QixDQUFULENBQWxCO0FBQXdGO0FBQTFPLEtBQWhELENBRE4sR0FFTXNOLEdBQUcsQ0FBQ3FCLFdBSGQsRUFJSSxHQUpKLENBREosQ0FmOEYsRUFxQjlGNU4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFDSXhOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUUyQyxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQndDLE1BQUFBLFdBQVcsRUFBRSxRQUFoQztBQUEwQ2pELE1BQUFBLEdBQUcsRUFBRTtBQUEvQyxLQUE5QyxFQUNJNEIsUUFBUSxJQUFJLENBQUNBLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUssS0FBSyxDQUF2QyxHQUEyQyxLQUFLLENBQWhELEdBQW9EQSxRQUFRLENBQUM3RSxFQUE5RCxLQUFxRWdGLEdBQUcsQ0FBQ2hGLEVBQXJGLEdBQ012SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyQyxLQUF6QyxFQUFnRDtBQUFFK0UsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYW9ELE1BQUFBLEVBQUUsRUFBRSxLQUFqQjtBQUF3QmQsTUFBQUEsSUFBSSxFQUFFLFFBQTlCO0FBQXdDN0ssTUFBQUEsS0FBSyxFQUFFbU4sUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLFFBQVEsQ0FBQ3lCLFVBQTVHO0FBQXdIdEUsTUFBQUEsUUFBUSxFQUFFLGtCQUFVdkUsQ0FBVixFQUFhO0FBQUUsZUFBT3FILFdBQVcsQ0FBQ1YsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLUyxRQUFMLENBQVQsRUFBeUI7QUFBRXlCLFVBQUFBLFVBQVUsRUFBRTdJLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQXZCLFNBQXpCLENBQVQsQ0FBbEI7QUFBdUY7QUFBeE8sS0FBaEQsQ0FETixHQUVNc04sR0FBRyxDQUFDc0IsVUFIZCxFQUlJLEdBSkosQ0FESixDQXJCOEYsRUEyQjlGN04sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFDSXhOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUUyQyxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQndDLE1BQUFBLFdBQVcsRUFBRSxRQUFoQztBQUEwQ2pELE1BQUFBLEdBQUcsRUFBRTtBQUEvQyxLQUE5QyxFQUNJNEIsUUFBUSxJQUFJLENBQUNBLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUssS0FBSyxDQUF2QyxHQUEyQyxLQUFLLENBQWhELEdBQW9EQSxRQUFRLENBQUM3RSxFQUE5RCxLQUFxRWdGLEdBQUcsQ0FBQ2hGLEVBQXJGLEdBQ012SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyQyxLQUF6QyxFQUFnRDtBQUFFK0UsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYW9ELE1BQUFBLEVBQUUsRUFBRSxLQUFqQjtBQUF3QmQsTUFBQUEsSUFBSSxFQUFFLFFBQTlCO0FBQXdDN0ssTUFBQUEsS0FBSyxFQUFFbU4sUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLFFBQVEsQ0FBQzBCLFVBQTVHO0FBQXdIdkUsTUFBQUEsUUFBUSxFQUFFLGtCQUFVdkUsQ0FBVixFQUFhO0FBQUUsZUFBT3FILFdBQVcsQ0FBQ1YsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLUyxRQUFMLENBQVQsRUFBeUI7QUFBRTBCLFVBQUFBLFVBQVUsRUFBRTlJLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQXZCLFNBQXpCLENBQVQsQ0FBbEI7QUFBdUY7QUFBeE8sS0FBaEQsQ0FETixHQUVNc04sR0FBRyxDQUFDdUIsVUFIZCxFQUlJLEdBSkosQ0FESixDQTNCOEYsRUFpQzlGOU4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFDSXhOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUUyQyxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQndDLE1BQUFBLFdBQVcsRUFBRSxRQUFoQztBQUEwQ2pELE1BQUFBLEdBQUcsRUFBRTtBQUEvQyxLQUE5QyxFQUNJNEIsUUFBUSxJQUFJLENBQUNBLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUssS0FBSyxDQUF2QyxHQUEyQyxLQUFLLENBQWhELEdBQW9EQSxRQUFRLENBQUM3RSxFQUE5RCxLQUFxRWdGLEdBQUcsQ0FBQ2hGLEVBQXJGLEdBQ012SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyQyxLQUF6QyxFQUFnRDtBQUFFK0UsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYW9ELE1BQUFBLEVBQUUsRUFBRSxLQUFqQjtBQUF3QmQsTUFBQUEsSUFBSSxFQUFFLFFBQTlCO0FBQXdDN0ssTUFBQUEsS0FBSyxFQUFFbU4sUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLFFBQVEsQ0FBQzJCLFNBQTVHO0FBQXVIeEUsTUFBQUEsUUFBUSxFQUFFLGtCQUFVdkUsQ0FBVixFQUFhO0FBQUUsZUFBT3FILFdBQVcsQ0FBQ1YsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLUyxRQUFMLENBQVQsRUFBeUI7QUFBRTJCLFVBQUFBLFNBQVMsRUFBRS9JLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQXRCLFNBQXpCLENBQVQsQ0FBbEI7QUFBc0Y7QUFBdE8sS0FBaEQsQ0FETixHQUVNc04sR0FBRyxDQUFDd0IsU0FIZCxFQUlJLEdBSkosQ0FESixDQWpDOEYsRUF1QzlGL04sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFDSXhOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUUyQyxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQndDLE1BQUFBLFdBQVcsRUFBRSxRQUFoQztBQUEwQ2pELE1BQUFBLEdBQUcsRUFBRTtBQUEvQyxLQUE5QyxFQUNJNEIsUUFBUSxJQUFJLENBQUNBLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEtBQUssS0FBSyxDQUF2QyxHQUEyQyxLQUFLLENBQWhELEdBQW9EQSxRQUFRLENBQUM3RSxFQUE5RCxLQUFxRWdGLEdBQUcsQ0FBQ2hGLEVBQXJGLEdBQ012SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyQyxLQUF6QyxFQUFnRDtBQUFFK0UsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYW9ELE1BQUFBLEVBQUUsRUFBRSxLQUFqQjtBQUF3QmQsTUFBQUEsSUFBSSxFQUFFLFFBQTlCO0FBQXdDN0ssTUFBQUEsS0FBSyxFQUFFbU4sUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLFFBQVEsQ0FBQzRCLFdBQTVHO0FBQXlIekUsTUFBQUEsUUFBUSxFQUFFLGtCQUFVdkUsQ0FBVixFQUFhO0FBQUUsZUFBT3FILFdBQVcsQ0FBQ1YsUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLUyxRQUFMLENBQVQsRUFBeUI7QUFBRTRCLFVBQUFBLFdBQVcsRUFBRWhKLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQXhCLFNBQXpCLENBQVQsQ0FBbEI7QUFBd0Y7QUFBMU8sS0FBaEQsQ0FETixHQUVNc04sR0FBRyxDQUFDeUIsV0FIZCxFQUlJLEdBSkosQ0FESixDQXZDOEYsRUE2QzlGaE8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkM7QUFBRUwsTUFBQUEsU0FBUyxFQUFFO0FBQWIsS0FBN0MsRUFBa0VmLFFBQVEsSUFBSSxDQUFDQSxRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxLQUFLLEtBQUssQ0FBdkMsR0FBMkMsS0FBSyxDQUFoRCxHQUFvREEsUUFBUSxDQUFDN0UsRUFBOUQsS0FBcUVnRixHQUFHLENBQUNoRixFQUFyRixHQUUxRHZILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ21PLE9BQXpDLEVBQWtEO0FBQUUzSSxNQUFBQSxLQUFLLEVBQUUsYUFBVDtBQUF3QjRJLE1BQUFBLFFBQVEsRUFBRTtBQUFsQyxLQUFsRCxFQUNJbE8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDcU8sTUFBekMsRUFBaUQ7QUFBRXBCLE1BQUFBLE9BQU8sRUFBRSxTQUFYO0FBQXNCcUIsTUFBQUEsV0FBVyxFQUFFLE9BQW5DO0FBQTRDekYsTUFBQUEsQ0FBQyxFQUFFLENBQS9DO0FBQzdDO0FBQ0FlLE1BQUFBLElBQUksRUFBRSxPQUZ1QztBQUU5QjJFLE1BQUFBLE9BQU8sRUFBRTdCO0FBRnFCLEtBQWpELEVBRThDLFFBRjlDLENBREosQ0FGMEQsR0FPMUR4TSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNtTyxPQUF6QyxFQUFrRDtBQUFFM0ksTUFBQUEsS0FBSyxFQUFFLFdBQVQ7QUFBc0I0SSxNQUFBQSxRQUFRLEVBQUU7QUFBaEMsS0FBbEQsRUFDSWxPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dPLFVBQXpDLEVBQXFEO0FBQUV2QixNQUFBQSxPQUFPLEVBQUUsU0FBWDtBQUFzQnFCLE1BQUFBLFdBQVcsRUFBRSxNQUFuQztBQUEyQyxvQkFBYyxXQUF6RDtBQUFzRXhGLE1BQUFBLFFBQVEsRUFBRSxNQUFoRjtBQUF3RjJGLE1BQUFBLElBQUksRUFBRXZPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzZJLElBQUksQ0FBQ3dDLGFBQXRDLEVBQXFELElBQXJELENBQTlGO0FBQTBKdlAsTUFBQUEsS0FBSyxFQUFFLFNBQWpLO0FBQTRLb1AsTUFBQUEsT0FBTyxFQUFFLG1CQUFZO0FBQUUsZUFBTy9CLGNBQWMsQ0FBQ0MsR0FBRCxDQUFyQjtBQUE2QjtBQUFoTyxLQUFyRCxDQURKLENBUFIsQ0E3QzhGLENBQVA7QUFxRG1OLEdBckR4UCxDQUF0RCxDQWJKLENBRHVGLEdBb0VyRnZNLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzhJLGFBQWEsQ0FBQyxTQUFELENBQTlDLEVBQTJELElBQTNELENBcEVOLENBREksQ0FBUjtBQXNFSCxDQW5GRDs7QUFvRkF2TSxrQkFBQSxHQUFxQndNLFdBQXJCOzs7Ozs7Ozs7OztBQzVIYTs7QUFDYixJQUFJOU4sZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxLQUFtQ0MsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUM1RixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkosRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QkcsRUFBekIsRUFBNkI7QUFBRUcsSUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JDLElBQUFBLEdBQUcsRUFBRSxlQUFXO0FBQUUsYUFBT04sQ0FBQyxDQUFDQyxDQUFELENBQVI7QUFBYztBQUFwRCxHQUE3QjtBQUNILENBSHdELEdBR25ELFVBQVNGLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUN4QixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkYsRUFBQUEsQ0FBQyxDQUFDRyxFQUFELENBQUQsR0FBUUYsQ0FBQyxDQUFDQyxDQUFELENBQVQ7QUFDSCxDQU5xQixDQUF0Qjs7QUFPQSxJQUFJTSxrQkFBa0IsR0FBSSxRQUFRLEtBQUtBLGtCQUFkLEtBQXNDVixNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDM0ZYLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUIsU0FBekIsRUFBb0M7QUFBRU0sSUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JJLElBQUFBLEtBQUssRUFBRUQ7QUFBM0IsR0FBcEM7QUFDSCxDQUY4RCxHQUUxRCxVQUFTVCxDQUFULEVBQVlTLENBQVosRUFBZTtBQUNoQlQsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxHQUFlUyxDQUFmO0FBQ0gsQ0FKd0IsQ0FBekI7O0FBS0EsSUFBSUUsWUFBWSxHQUFJLFFBQVEsS0FBS0EsWUFBZCxJQUErQixVQUFVQyxHQUFWLEVBQWU7QUFDN0QsTUFBSUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQWYsRUFBMkIsT0FBT0QsR0FBUDtBQUMzQixNQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlGLEdBQUcsSUFBSSxJQUFYLEVBQWlCLEtBQUssSUFBSVYsQ0FBVCxJQUFjVSxHQUFkO0FBQW1CLFFBQUlWLENBQUMsS0FBSyxTQUFOLElBQW1CSixNQUFNLENBQUNpQixTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNMLEdBQXJDLEVBQTBDVixDQUExQyxDQUF2QixFQUFxRUwsZUFBZSxDQUFDaUIsTUFBRCxFQUFTRixHQUFULEVBQWNWLENBQWQsQ0FBZjtBQUF4Rjs7QUFDakJNLEVBQUFBLGtCQUFrQixDQUFDTSxNQUFELEVBQVNGLEdBQVQsQ0FBbEI7O0FBQ0EsU0FBT0UsTUFBUDtBQUNILENBTkQ7O0FBT0EsSUFBSUksZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdkLFlBQVksQ0FBQ1UsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTFCOztBQUNBLElBQUlvTSxJQUFJLEdBQUdwTSxtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUlxTSxhQUFhLEdBQUd4TSxlQUFlLENBQUNHLG1CQUFPLENBQUMsd0VBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJNk8sUUFBUSxHQUFHaFAsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLCtDQUFELENBQVIsQ0FBOUI7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLHVGQUFELENBQTdCOztBQUNBLElBQUk4TyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFVL04sRUFBVixFQUFjO0FBQzVCLE1BQUlnTyxRQUFRLEdBQUdoTyxFQUFFLENBQUNnTyxRQUFsQjtBQUNBLEdBQUMsR0FBRzNPLE9BQU8sQ0FBQ2dJLFNBQVosRUFBdUIsWUFBWTtBQUMvQkcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QnVHLFFBQTVCO0FBQ0gsR0FGRCxFQUVHLEVBRkg7QUFHQSxTQUFRM08sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDLEtBQWpDLEVBQXdDLElBQXhDLEVBQ0puRCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFc0UsSUFBQUEsRUFBRSxFQUFFLEtBQU47QUFBYW5ELElBQUFBLENBQUMsRUFBRSxNQUFoQjtBQUF3Qm9ELElBQUFBLFNBQVMsRUFBRTtBQUFuQyxHQUE5QyxFQUEyRjhCLFFBQVEsQ0FBQ3RJLE1BQVQsR0FDdkZyRyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNnTixLQUF6QyxFQUFnRDtBQUFFQyxJQUFBQSxPQUFPLEVBQUUsUUFBWDtBQUFxQnRELElBQUFBLENBQUMsRUFBRTtBQUF4QixHQUFoRCxFQUNJekosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDa04sS0FBekMsRUFBZ0QsSUFBaEQsRUFDSWhOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ21OLEVBQXpDLEVBQTZDLElBQTdDLEVBQ0lqTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxlQUFuRCxDQURKLEVBRUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxjQUFuRCxDQUZKLEVBR0lsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxlQUFuRCxDQUhKLEVBSUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxjQUFuRCxDQUpKLEVBS0lsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QztBQUFFQyxJQUFBQSxTQUFTLEVBQUU7QUFBYixHQUE3QyxDQUxKLENBREosQ0FESixFQVFJbk4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc04sS0FBekMsRUFBZ0QsSUFBaEQsRUFBc0R1QixRQUFRLENBQUN0QixHQUFULENBQWEsVUFBVXVCLE9BQVYsRUFBbUJ0QixLQUFuQixFQUEwQjtBQUFFLFdBQU90TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNtTixFQUF6QyxFQUE2QztBQUFFTSxNQUFBQSxHQUFHLEVBQUVEO0FBQVAsS0FBN0MsRUFDbEd0TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwTixFQUF6QyxFQUE2QyxJQUE3QyxFQUNJeE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDK08sS0FBekMsRUFBZ0Q7QUFBRXJILE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCc0gsTUFBQUEsR0FBRyxFQUFFRixPQUFPLENBQUNHO0FBQS9CLEtBQWhELENBREosQ0FEa0csRUFHbEcvTyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwTixFQUF6QyxFQUE2QyxJQUE3QyxFQUNJLEdBREosRUFFSW9CLE9BQU8sQ0FBQzdLLElBRlosQ0FIa0csRUFNbEcvRCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwTixFQUF6QyxFQUE2QyxJQUE3QyxFQUNJLElBREosRUFFSW9CLE9BQU8sQ0FBQ0ksS0FGWixDQU5rRyxFQVNsR2hQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBOLEVBQXpDLEVBQTZDLElBQTdDLEVBQW1ELENBQUMsR0FBR2lCLFFBQVEsQ0FBQyxTQUFELENBQVosRUFBeUJHLE9BQU8sQ0FBQ0ssVUFBakMsRUFBNkNDLE1BQTdDLENBQW9ELEdBQXBELENBQW5ELENBVGtHLEVBVWxHbFAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkM7QUFBRUwsTUFBQUEsU0FBUyxFQUFFO0FBQWIsS0FBN0MsRUFDSW5OLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ21PLE9BQXpDLEVBQWtEO0FBQUUzSSxNQUFBQSxLQUFLLEVBQUUsZ0JBQVQ7QUFBMkI0SSxNQUFBQSxRQUFRLEVBQUU7QUFBckMsS0FBbEQsRUFDSWxPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLE1BQUFBLElBQUksRUFBRSx5QkFBeUJsSCxNQUF6QixDQUFnQ3lLLE9BQU8sQ0FBQ3JILEVBQXhDO0FBQVIsS0FBdkQsRUFDSXZILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dPLFVBQXpDLEVBQXFEO0FBQUV2QixNQUFBQSxPQUFPLEVBQUUsU0FBWDtBQUFzQnFCLE1BQUFBLFdBQVcsRUFBRSxLQUFuQztBQUEwQyxvQkFBYyxXQUF4RDtBQUFxRXhGLE1BQUFBLFFBQVEsRUFBRSxNQUEvRTtBQUF1RjJGLE1BQUFBLElBQUksRUFBRXZPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzZJLElBQUksQ0FBQ3dDLGFBQXRDLEVBQXFELElBQXJELENBQTdGO0FBQXlKdlAsTUFBQUEsS0FBSyxFQUFFO0FBQWhLLEtBQXJELENBREosQ0FESixDQURKLENBVmtHLENBQVA7QUFheUosR0FibE0sQ0FBdEQsQ0FSSixDQUR1RixHQXVCckZlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzhJLGFBQWEsQ0FBQyxTQUFELENBQTlDLEVBQTJELElBQTNELENBdkJOLENBREksQ0FBUjtBQXlCSCxDQTlCRDs7QUErQkF2TSxrQkFBQSxHQUFxQmdQLFdBQXJCOzs7Ozs7Ozs7OztBQzdEYTs7QUFDYixJQUFJdFEsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxLQUFtQ0MsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUM1RixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkosRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QkcsRUFBekIsRUFBNkI7QUFBRUcsSUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JDLElBQUFBLEdBQUcsRUFBRSxlQUFXO0FBQUUsYUFBT04sQ0FBQyxDQUFDQyxDQUFELENBQVI7QUFBYztBQUFwRCxHQUE3QjtBQUNILENBSHdELEdBR25ELFVBQVNGLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUN4QixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkYsRUFBQUEsQ0FBQyxDQUFDRyxFQUFELENBQUQsR0FBUUYsQ0FBQyxDQUFDQyxDQUFELENBQVQ7QUFDSCxDQU5xQixDQUF0Qjs7QUFPQSxJQUFJTSxrQkFBa0IsR0FBSSxRQUFRLEtBQUtBLGtCQUFkLEtBQXNDVixNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDM0ZYLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUIsU0FBekIsRUFBb0M7QUFBRU0sSUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JJLElBQUFBLEtBQUssRUFBRUQ7QUFBM0IsR0FBcEM7QUFDSCxDQUY4RCxHQUUxRCxVQUFTVCxDQUFULEVBQVlTLENBQVosRUFBZTtBQUNoQlQsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxHQUFlUyxDQUFmO0FBQ0gsQ0FKd0IsQ0FBekI7O0FBS0EsSUFBSUUsWUFBWSxHQUFJLFFBQVEsS0FBS0EsWUFBZCxJQUErQixVQUFVQyxHQUFWLEVBQWU7QUFDN0QsTUFBSUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQWYsRUFBMkIsT0FBT0QsR0FBUDtBQUMzQixNQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlGLEdBQUcsSUFBSSxJQUFYLEVBQWlCLEtBQUssSUFBSVYsQ0FBVCxJQUFjVSxHQUFkO0FBQW1CLFFBQUlWLENBQUMsS0FBSyxTQUFOLElBQW1CSixNQUFNLENBQUNpQixTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNMLEdBQXJDLEVBQTBDVixDQUExQyxDQUF2QixFQUFxRUwsZUFBZSxDQUFDaUIsTUFBRCxFQUFTRixHQUFULEVBQWNWLENBQWQsQ0FBZjtBQUF4Rjs7QUFDakJNLEVBQUFBLGtCQUFrQixDQUFDTSxNQUFELEVBQVNGLEdBQVQsQ0FBbEI7O0FBQ0EsU0FBT0UsTUFBUDtBQUNILENBTkQ7O0FBT0EsSUFBSUksZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdkLFlBQVksQ0FBQ1UsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTFCOztBQUNBLElBQUlvTSxJQUFJLEdBQUdwTSxtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUlxTSxhQUFhLEdBQUd4TSxlQUFlLENBQUNHLG1CQUFPLENBQUMsd0VBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJNk8sUUFBUSxHQUFHaFAsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLCtDQUFELENBQVIsQ0FBOUI7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLHVGQUFELENBQTdCOztBQUNBLElBQUl1UCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFVeE8sRUFBVixFQUFjO0FBQzFCLE1BQUl5TyxRQUFRLEdBQUd6TyxFQUFFLENBQUN5TyxRQUFsQjtBQUNBLEdBQUMsR0FBR3BQLE9BQU8sQ0FBQ2dJLFNBQVosRUFBdUIsWUFBWTtBQUMvQkcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QmdILFFBQTVCO0FBQ0gsR0FGRCxFQUVHLEVBRkg7QUFHQSxTQUFRcFAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDLEtBQWpDLEVBQXdDLElBQXhDLEVBQ0puRCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFc0UsSUFBQUEsRUFBRSxFQUFFLEtBQU47QUFBYW5ELElBQUFBLENBQUMsRUFBRSxNQUFoQjtBQUF3Qm9ELElBQUFBLFNBQVMsRUFBRTtBQUFuQyxHQUE5QyxFQUEyRnVDLFFBQVEsQ0FBQy9JLE1BQVQsR0FDdkZyRyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNnTixLQUF6QyxFQUFnRDtBQUFFQyxJQUFBQSxPQUFPLEVBQUUsUUFBWDtBQUFxQnRELElBQUFBLENBQUMsRUFBRTtBQUF4QixHQUFoRCxFQUNJekosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDa04sS0FBekMsRUFBZ0QsSUFBaEQsRUFDSWhOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ21OLEVBQXpDLEVBQTZDLElBQTdDLEVBQ0lqTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxNQUFuRCxDQURKLEVBRUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxTQUFuRCxDQUZKLEVBR0lsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxXQUFuRCxDQUhKLEVBSUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxRQUFuRCxDQUpKLEVBS0lsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxZQUFuRCxDQUxKLEVBTUlsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxVQUFuRCxDQU5KLEVBT0lsTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvTixFQUF6QyxFQUE2QztBQUFFQyxJQUFBQSxTQUFTLEVBQUU7QUFBYixHQUE3QyxDQVBKLENBREosQ0FESixFQVVJbk4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc04sS0FBekMsRUFBZ0QsSUFBaEQsRUFBc0RnQyxRQUFRLENBQUMvQixHQUFULENBQWEsVUFBVWdDLElBQVYsRUFBZ0IvQixLQUFoQixFQUF1QjtBQUN0RixRQUFJM00sRUFBSixFQUFRQyxFQUFSLEVBQVltRyxFQUFaLEVBQWdCRyxFQUFoQjs7QUFDQSxXQUFPbEgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDbU4sRUFBekMsRUFBNkM7QUFBRU0sTUFBQUEsR0FBRyxFQUFFRDtBQUFQLEtBQTdDLEVBQ0h0TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwTixFQUF6QyxFQUE2QyxJQUE3QyxFQUNJeE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRW9HLE1BQUFBLEtBQUssRUFBRSxRQUFUO0FBQW1COUUsTUFBQUEsR0FBRyxFQUFFO0FBQXhCLEtBQS9DLEVBQ0l4SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN5UCxNQUF6QyxFQUFpRDtBQUFFN0YsTUFBQUEsSUFBSSxFQUFFLElBQVI7QUFBYzNGLE1BQUFBLElBQUksRUFBRSxHQUFHSSxNQUFILENBQVVrTCxJQUFJLENBQUNHLFVBQWYsRUFBMkIsR0FBM0IsRUFBZ0NyTCxNQUFoQyxDQUF1Q2tMLElBQUksQ0FBQ0ksU0FBNUM7QUFBcEIsS0FBakQsQ0FESixFQUNvSSxHQUFHdEwsTUFBSCxDQUFVa0wsSUFBSSxDQUFDRyxVQUFmLEVBQTJCLEdBQTNCLEVBQWdDckwsTUFBaEMsQ0FBdUNrTCxJQUFJLENBQUNJLFNBQTVDLENBRHBJLENBREosQ0FERyxFQUlIelAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFBbUQsQ0FBQzdNLEVBQUUsR0FBRzBPLElBQUksV0FBVixNQUF3QixJQUF4QixJQUFnQzFPLEVBQUUsS0FBSyxLQUFLLENBQTVDLEdBQWdELEtBQUssQ0FBckQsR0FBeURBLEVBQUUsV0FBOUcsQ0FKRyxFQUtIWCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRCxDQUFDLEdBQUdpQixRQUFRLENBQUMsU0FBRCxDQUFaLEVBQXlCWSxJQUFJLENBQUNKLFVBQTlCLEVBQTBDQyxNQUExQyxDQUFpRCxHQUFqRCxDQUFuRCxDQUxHLEVBTUhsUCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRDZCLElBQUksQ0FBQ0ssTUFBeEQsQ0FORyxFQU9IMVAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFBbUQ2QixJQUFJLENBQUNNLE1BQUwsR0FBYyxHQUFHeEwsTUFBSCxDQUFVLENBQUN2RCxFQUFFLEdBQUd5TyxJQUFJLENBQUNNLE1BQVgsTUFBdUIsSUFBdkIsSUFBK0IvTyxFQUFFLEtBQUssS0FBSyxDQUEzQyxHQUErQyxLQUFLLENBQXBELEdBQXdEQSxFQUFFLENBQUM0TyxVQUFyRSxFQUFpRixHQUFqRixFQUFzRnJMLE1BQXRGLENBQTZGLENBQUM0QyxFQUFFLEdBQUdzSSxJQUFJLENBQUNNLE1BQVgsTUFBdUIsSUFBdkIsSUFBK0I1SSxFQUFFLEtBQUssS0FBSyxDQUEzQyxHQUErQyxLQUFLLENBQXBELEdBQXdEQSxFQUFFLENBQUMwSSxTQUF4SixDQUFkLEdBQW1MLFFBQXRPLENBUEcsRUFRSHpQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBOLEVBQXpDLEVBQTZDLElBQTdDLEVBQW1ELENBQUN0RyxFQUFFLEdBQUdtSSxJQUFJLENBQUNPLFFBQVgsTUFBeUIsSUFBekIsSUFBaUMxSSxFQUFFLEtBQUssS0FBSyxDQUE3QyxHQUFpRCxLQUFLLENBQXRELEdBQy9DQSxFQUFFLENBQUNiLE1BRFAsRUFFSSxRQUZKLENBUkcsRUFXSHJHLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBOLEVBQXpDLEVBQTZDO0FBQUVMLE1BQUFBLFNBQVMsRUFBRTtBQUFiLEtBQTdDLEVBQ0luTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNtTyxPQUF6QyxFQUFrRDtBQUFFM0ksTUFBQUEsS0FBSyxFQUFFLGNBQVQ7QUFBeUI0SSxNQUFBQSxRQUFRLEVBQUU7QUFBbkMsS0FBbEQsRUFDSWxPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLE1BQUFBLElBQUksRUFBRSxlQUFlbEgsTUFBZixDQUFzQmtMLElBQUksQ0FBQzlILEVBQTNCO0FBQVIsS0FBdkQsRUFDSXZILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dPLFVBQXpDLEVBQXFEO0FBQUV2QixNQUFBQSxPQUFPLEVBQUUsU0FBWDtBQUFzQnFCLE1BQUFBLFdBQVcsRUFBRSxNQUFuQztBQUEyQyxvQkFBYyxXQUF6RDtBQUFzRXhGLE1BQUFBLFFBQVEsRUFBRSxNQUFoRjtBQUF3RjJGLE1BQUFBLElBQUksRUFBRXZPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzZJLElBQUksQ0FBQ3dDLGFBQXRDLEVBQXFELElBQXJELENBQTlGO0FBQTBKdlAsTUFBQUEsS0FBSyxFQUFFO0FBQWpLLEtBQXJELENBREosQ0FESixDQURKLENBWEcsQ0FBUDtBQWVILEdBakJxRCxDQUF0RCxDQVZKLENBRHVGLEdBNkJyRmUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDOEksYUFBYSxDQUFDLFNBQUQsQ0FBOUMsRUFBMkQsSUFBM0QsQ0E3Qk4sQ0FESSxDQUFSO0FBK0JILENBcENEOztBQXFDQXZNLGtCQUFBLEdBQXFCeVAsU0FBckI7Ozs7Ozs7Ozs7O0FDbkVhOztBQUNiLElBQUkxUCxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsU0FBU2lRLGFBQVQsQ0FBdUJsUCxFQUF2QixFQUEyQjtBQUN2QixNQUFJbVAsS0FBSyxHQUFHblAsRUFBRSxDQUFDbVAsS0FBZjtBQUFBLE1BQXNCaEcsSUFBSSxHQUFHbkosRUFBRSxDQUFDbUosSUFBaEM7QUFDQSxNQUFJaUcsS0FBSyxHQUFHLENBQUMsR0FBR2pRLE9BQU8sQ0FBQ2tRLFFBQVosR0FBWjtBQUNBLE1BQUl6SSxFQUFFLEdBQUcsWUFBVDtBQUNBLFNBQVF2SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUksUUFBcEQsRUFBOEQsSUFBOUQsRUFBb0UsQ0FBQzBILEtBQUssQ0FBQ0UsUUFBTixDQUFlMUksRUFBZixDQUFELElBQ3hFd0ksS0FBSyxDQUFDO0FBQ0Z4SSxJQUFBQSxFQUFFLEVBQUVBLEVBREY7QUFFRjJJLElBQUFBLEtBQUssRUFBRXBHLElBQUksSUFBSSxTQUFSLEdBQW9CLFNBQXBCLEdBQWdDLE9BRnJDO0FBR0ZxRyxJQUFBQSxXQUFXLEVBQUVMLEtBSFg7QUFJRk0sSUFBQUEsTUFBTSxFQUFFdEcsSUFKTjtBQUtGdUcsSUFBQUEsVUFBVSxFQUFFO0FBTFYsR0FBRCxDQURELENBQVI7QUFRSDs7QUFDRDNRLGtCQUFBLEdBQXFCbVEsYUFBckI7Ozs7Ozs7Ozs7O0FDcEJhOztBQUNiLElBQUlwUSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsU0FBUzBRLFFBQVQsR0FBb0I7QUFDaEIsU0FBUXRRLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQytPLEtBQXpDLEVBQWdEO0FBQUVySCxJQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjK0ksSUFBQUEsTUFBTSxFQUFFLEVBQXRCO0FBQTBCekIsSUFBQUEsR0FBRyxFQUFFLFdBQS9CO0FBQTRDMEIsSUFBQUEsR0FBRyxFQUFFO0FBQWpELEdBQWhELENBQVI7QUFDSDs7QUFDRDlRLGtCQUFBLEdBQXFCNFEsUUFBckI7Ozs7Ozs7Ozs7O0FDVmE7O0FBQ2IsSUFBSTdRLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxTQUFTNlEsV0FBVCxHQUF1QjtBQUNuQixTQUFRelEsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNkosTUFBekMsRUFBaUQ7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFO0FBQUwsR0FBakQsRUFBNkQsZUFBN0QsQ0FBUjtBQUNIOztBQUNEbEssa0JBQUEsR0FBcUIrUSxXQUFyQjs7Ozs7Ozs7Ozs7QUNWYTs7QUFDYixJQUFJclMsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxLQUFtQ0MsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUM1RixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkosRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QkcsRUFBekIsRUFBNkI7QUFBRUcsSUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JDLElBQUFBLEdBQUcsRUFBRSxlQUFXO0FBQUUsYUFBT04sQ0FBQyxDQUFDQyxDQUFELENBQVI7QUFBYztBQUFwRCxHQUE3QjtBQUNILENBSHdELEdBR25ELFVBQVNGLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUN4QixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkYsRUFBQUEsQ0FBQyxDQUFDRyxFQUFELENBQUQsR0FBUUYsQ0FBQyxDQUFDQyxDQUFELENBQVQ7QUFDSCxDQU5xQixDQUF0Qjs7QUFPQSxJQUFJTSxrQkFBa0IsR0FBSSxRQUFRLEtBQUtBLGtCQUFkLEtBQXNDVixNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDM0ZYLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUIsU0FBekIsRUFBb0M7QUFBRU0sSUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JJLElBQUFBLEtBQUssRUFBRUQ7QUFBM0IsR0FBcEM7QUFDSCxDQUY4RCxHQUUxRCxVQUFTVCxDQUFULEVBQVlTLENBQVosRUFBZTtBQUNoQlQsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxHQUFlUyxDQUFmO0FBQ0gsQ0FKd0IsQ0FBekI7O0FBS0EsSUFBSUUsWUFBWSxHQUFJLFFBQVEsS0FBS0EsWUFBZCxJQUErQixVQUFVQyxHQUFWLEVBQWU7QUFDN0QsTUFBSUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQWYsRUFBMkIsT0FBT0QsR0FBUDtBQUMzQixNQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlGLEdBQUcsSUFBSSxJQUFYLEVBQWlCLEtBQUssSUFBSVYsQ0FBVCxJQUFjVSxHQUFkO0FBQW1CLFFBQUlWLENBQUMsS0FBSyxTQUFOLElBQW1CSixNQUFNLENBQUNpQixTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNMLEdBQXJDLEVBQTBDVixDQUExQyxDQUF2QixFQUFxRUwsZUFBZSxDQUFDaUIsTUFBRCxFQUFTRixHQUFULEVBQWNWLENBQWQsQ0FBZjtBQUF4Rjs7QUFDakJNLEVBQUFBLGtCQUFrQixDQUFDTSxNQUFELEVBQVNGLEdBQVQsQ0FBbEI7O0FBQ0EsU0FBT0UsTUFBUDtBQUNILENBTkQ7O0FBT0EsSUFBSWlGLFNBQVMsR0FBSSxRQUFRLEtBQUtBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWUxRixLQUFmLEVBQXNCO0FBQUUsV0FBT0EsS0FBSyxZQUFZd0YsQ0FBakIsR0FBcUJ4RixLQUFyQixHQUE2QixJQUFJd0YsQ0FBSixDQUFNLFVBQVVSLE9BQVYsRUFBbUI7QUFBRUEsTUFBQUEsT0FBTyxDQUFDaEYsS0FBRCxDQUFQO0FBQWlCLEtBQTVDLENBQXBDO0FBQW9GOztBQUM1RyxTQUFPLEtBQUt3RixDQUFDLEtBQUtBLENBQUMsR0FBR1QsT0FBVCxDQUFOLEVBQXlCLFVBQVVDLE9BQVYsRUFBbUJXLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUI1RixLQUFuQixFQUEwQjtBQUFFLFVBQUk7QUFBRTZGLFFBQUFBLElBQUksQ0FBQ0osU0FBUyxDQUFDSyxJQUFWLENBQWU5RixLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPK0YsQ0FBUCxFQUFVO0FBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDM0YsYUFBU0MsUUFBVCxDQUFrQmhHLEtBQWxCLEVBQXlCO0FBQUUsVUFBSTtBQUFFNkYsUUFBQUEsSUFBSSxDQUFDSixTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CekYsS0FBbkIsQ0FBRCxDQUFKO0FBQWtDLE9BQXhDLENBQXlDLE9BQU8rRixDQUFQLEVBQVU7QUFBRUosUUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU47QUFBWTtBQUFFOztBQUM5RixhQUFTRixJQUFULENBQWN6RixNQUFkLEVBQXNCO0FBQUVBLE1BQUFBLE1BQU0sQ0FBQ2dDLElBQVAsR0FBYzRDLE9BQU8sQ0FBQzVFLE1BQU0sQ0FBQ0osS0FBUixDQUFyQixHQUFzQzBGLEtBQUssQ0FBQ3RGLE1BQU0sQ0FBQ0osS0FBUixDQUFMLENBQW9CaUYsSUFBcEIsQ0FBeUJXLFNBQXpCLEVBQW9DSSxRQUFwQyxDQUF0QztBQUFzRjs7QUFDOUdILElBQUFBLElBQUksQ0FBQyxDQUFDSixTQUFTLEdBQUdBLFNBQVMsQ0FBQ1EsS0FBVixDQUFnQlgsT0FBaEIsRUFBeUJDLFVBQVUsSUFBSSxFQUF2QyxDQUFiLEVBQXlETyxJQUF6RCxFQUFELENBQUo7QUFDSCxHQUxNLENBQVA7QUFNSCxDQVJEOztBQVNBLElBQUlJLFdBQVcsR0FBSSxRQUFRLEtBQUtBLFdBQWQsSUFBOEIsVUFBVVosT0FBVixFQUFtQmEsSUFBbkIsRUFBeUI7QUFDckUsTUFBSUMsQ0FBQyxHQUFHO0FBQUVDLElBQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUFFLFVBQUlDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFYLEVBQWMsTUFBTUEsQ0FBQyxDQUFDLENBQUQsQ0FBUDtBQUFZLGFBQU9BLENBQUMsQ0FBQyxDQUFELENBQVI7QUFBYyxLQUF2RTtBQUF5RUMsSUFBQUEsSUFBSSxFQUFFLEVBQS9FO0FBQW1GQyxJQUFBQSxHQUFHLEVBQUU7QUFBeEYsR0FBUjtBQUFBLE1BQXNHQyxDQUF0RztBQUFBLE1BQXlHQyxDQUF6RztBQUFBLE1BQTRHSixDQUE1RztBQUFBLE1BQStHSyxDQUEvRztBQUNBLFNBQU9BLENBQUMsR0FBRztBQUFFZCxJQUFBQSxJQUFJLEVBQUVlLElBQUksQ0FBQyxDQUFELENBQVo7QUFBaUIsYUFBU0EsSUFBSSxDQUFDLENBQUQsQ0FBOUI7QUFBbUMsY0FBVUEsSUFBSSxDQUFDLENBQUQ7QUFBakQsR0FBSixFQUE0RCxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLEtBQWlDRixDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsUUFBUixDQUFELEdBQXFCLFlBQVc7QUFBRSxXQUFPLElBQVA7QUFBYyxHQUFqRixDQUE1RCxFQUFnSkgsQ0FBdko7O0FBQ0EsV0FBU0MsSUFBVCxDQUFjRyxDQUFkLEVBQWlCO0FBQUUsV0FBTyxVQUFVakgsQ0FBVixFQUFhO0FBQUUsYUFBTzhGLElBQUksQ0FBQyxDQUFDbUIsQ0FBRCxFQUFJakgsQ0FBSixDQUFELENBQVg7QUFBc0IsS0FBNUM7QUFBK0M7O0FBQ2xFLFdBQVM4RixJQUFULENBQWNvQixFQUFkLEVBQWtCO0FBQ2QsUUFBSVAsQ0FBSixFQUFPLE1BQU0sSUFBSVEsU0FBSixDQUFjLGlDQUFkLENBQU47O0FBQ1AsV0FBT2QsQ0FBUDtBQUFVLFVBQUk7QUFDVixZQUFJTSxDQUFDLEdBQUcsQ0FBSixFQUFPQyxDQUFDLEtBQUtKLENBQUMsR0FBR1UsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVIsR0FBWU4sQ0FBQyxDQUFDLFFBQUQsQ0FBYixHQUEwQk0sRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRTixDQUFDLENBQUMsT0FBRCxDQUFELEtBQWUsQ0FBQ0osQ0FBQyxHQUFHSSxDQUFDLENBQUMsUUFBRCxDQUFOLEtBQXFCSixDQUFDLENBQUNoRyxJQUFGLENBQU9vRyxDQUFQLENBQXJCLEVBQWdDLENBQS9DLENBQVIsR0FBNERBLENBQUMsQ0FBQ2IsSUFBakcsQ0FBRCxJQUEyRyxDQUFDLENBQUNTLENBQUMsR0FBR0EsQ0FBQyxDQUFDaEcsSUFBRixDQUFPb0csQ0FBUCxFQUFVTSxFQUFFLENBQUMsQ0FBRCxDQUFaLENBQUwsRUFBdUI3RSxJQUE5SSxFQUFvSixPQUFPbUUsQ0FBUDtBQUNwSixZQUFJSSxDQUFDLEdBQUcsQ0FBSixFQUFPSixDQUFYLEVBQWNVLEVBQUUsR0FBRyxDQUFDQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBVCxFQUFZVixDQUFDLENBQUN2RyxLQUFkLENBQUw7O0FBQ2QsZ0JBQVFpSCxFQUFFLENBQUMsQ0FBRCxDQUFWO0FBQ0ksZUFBSyxDQUFMO0FBQVEsZUFBSyxDQUFMO0FBQVFWLFlBQUFBLENBQUMsR0FBR1UsRUFBSjtBQUFROztBQUN4QixlQUFLLENBQUw7QUFBUWIsWUFBQUEsQ0FBQyxDQUFDQyxLQUFGO0FBQVcsbUJBQU87QUFBRXJHLGNBQUFBLEtBQUssRUFBRWlILEVBQUUsQ0FBQyxDQUFELENBQVg7QUFBZ0I3RSxjQUFBQSxJQUFJLEVBQUU7QUFBdEIsYUFBUDs7QUFDbkIsZUFBSyxDQUFMO0FBQVFnRSxZQUFBQSxDQUFDLENBQUNDLEtBQUY7QUFBV00sWUFBQUEsQ0FBQyxHQUFHTSxFQUFFLENBQUMsQ0FBRCxDQUFOO0FBQVdBLFlBQUFBLEVBQUUsR0FBRyxDQUFDLENBQUQsQ0FBTDtBQUFVOztBQUN4QyxlQUFLLENBQUw7QUFBUUEsWUFBQUEsRUFBRSxHQUFHYixDQUFDLENBQUNLLEdBQUYsQ0FBTVUsR0FBTixFQUFMOztBQUFrQmYsWUFBQUEsQ0FBQyxDQUFDSSxJQUFGLENBQU9XLEdBQVA7O0FBQWM7O0FBQ3hDO0FBQ0ksZ0JBQUksRUFBRVosQ0FBQyxHQUFHSCxDQUFDLENBQUNJLElBQU4sRUFBWUQsQ0FBQyxHQUFHQSxDQUFDLENBQUNhLE1BQUYsR0FBVyxDQUFYLElBQWdCYixDQUFDLENBQUNBLENBQUMsQ0FBQ2EsTUFBRixHQUFXLENBQVosQ0FBbkMsTUFBdURILEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxDQUFWLElBQWVBLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxDQUFoRixDQUFKLEVBQXdGO0FBQUViLGNBQUFBLENBQUMsR0FBRyxDQUFKO0FBQU87QUFBVzs7QUFDNUcsZ0JBQUlhLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxDQUFWLEtBQWdCLENBQUNWLENBQUQsSUFBT1UsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVixDQUFDLENBQUMsQ0FBRCxDQUFULElBQWdCVSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFWLENBQUMsQ0FBQyxDQUFELENBQWhELENBQUosRUFBMkQ7QUFBRUgsY0FBQUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVVZLEVBQUUsQ0FBQyxDQUFELENBQVo7QUFBaUI7QUFBUTs7QUFDdEYsZ0JBQUlBLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxDQUFWLElBQWViLENBQUMsQ0FBQ0MsS0FBRixHQUFVRSxDQUFDLENBQUMsQ0FBRCxDQUE5QixFQUFtQztBQUFFSCxjQUFBQSxDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBWDtBQUFnQkEsY0FBQUEsQ0FBQyxHQUFHVSxFQUFKO0FBQVE7QUFBUTs7QUFDckUsZ0JBQUlWLENBQUMsSUFBSUgsQ0FBQyxDQUFDQyxLQUFGLEdBQVVFLENBQUMsQ0FBQyxDQUFELENBQXBCLEVBQXlCO0FBQUVILGNBQUFBLENBQUMsQ0FBQ0MsS0FBRixHQUFVRSxDQUFDLENBQUMsQ0FBRCxDQUFYOztBQUFnQkgsY0FBQUEsQ0FBQyxDQUFDSyxHQUFGLENBQU1ZLElBQU4sQ0FBV0osRUFBWDs7QUFBZ0I7QUFBUTs7QUFDbkUsZ0JBQUlWLENBQUMsQ0FBQyxDQUFELENBQUwsRUFBVUgsQ0FBQyxDQUFDSyxHQUFGLENBQU1VLEdBQU47O0FBQ1ZmLFlBQUFBLENBQUMsQ0FBQ0ksSUFBRixDQUFPVyxHQUFQOztBQUFjO0FBWHRCOztBQWFBRixRQUFBQSxFQUFFLEdBQUdkLElBQUksQ0FBQzVGLElBQUwsQ0FBVStFLE9BQVYsRUFBbUJjLENBQW5CLENBQUw7QUFDSCxPQWpCUyxDQWlCUixPQUFPTCxDQUFQLEVBQVU7QUFBRWtCLFFBQUFBLEVBQUUsR0FBRyxDQUFDLENBQUQsRUFBSWxCLENBQUosQ0FBTDtBQUFhWSxRQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUFRLE9BakJ6QixTQWlCa0M7QUFBRUQsUUFBQUEsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBUjtBQUFZO0FBakIxRDs7QUFrQkEsUUFBSVUsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVosRUFBZSxNQUFNQSxFQUFFLENBQUMsQ0FBRCxDQUFSO0FBQWEsV0FBTztBQUFFakgsTUFBQUEsS0FBSyxFQUFFaUgsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFWLEdBQWdCLEtBQUssQ0FBOUI7QUFBaUM3RSxNQUFBQSxJQUFJLEVBQUU7QUFBdkMsS0FBUDtBQUMvQjtBQUNKLENBMUJEOztBQTJCQSxJQUFJNUIsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQjs7QUFDQSxJQUFJMkcsT0FBTyxHQUFHOUcsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSUksT0FBTyxHQUFHZCxZQUFZLENBQUNVLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUExQjs7QUFDQSxJQUFJNEcsa0JBQWtCLEdBQUcvRyxlQUFlLENBQUNHLG1CQUFPLENBQUMsc0ZBQUQsQ0FBUixDQUF4Qzs7QUFDQSxTQUFTNkcsZ0JBQVQsR0FBNEI7QUFDeEIsTUFBSTlGLEVBQUUsR0FBRyxDQUFDLEdBQUdYLE9BQU8sQ0FBQzBHLFFBQVosRUFBc0IsRUFBdEIsQ0FBVDtBQUFBLE1BQW9DQyxVQUFVLEdBQUdoRyxFQUFFLENBQUMsQ0FBRCxDQUFuRDtBQUFBLE1BQXdEaUcsYUFBYSxHQUFHakcsRUFBRSxDQUFDLENBQUQsQ0FBMUU7O0FBQ0EsTUFBSUMsRUFBRSxHQUFHLENBQUMsR0FBR1osT0FBTyxDQUFDMEcsUUFBWixFQUFzQixFQUF0QixDQUFUO0FBQUEsTUFBb0NHLFNBQVMsR0FBR2pHLEVBQUUsQ0FBQyxDQUFELENBQWxEO0FBQUEsTUFBdURrRyxZQUFZLEdBQUdsRyxFQUFFLENBQUMsQ0FBRCxDQUF4RTs7QUFDQSxNQUFJbUcsRUFBRSxHQUFHLENBQUMsR0FBRy9HLE9BQU8sQ0FBQzBHLFFBQVosRUFBc0IsQ0FBdEIsQ0FBVDtBQUFBLE1BQW1DTSxVQUFVLEdBQUdELEVBQUUsQ0FBQyxDQUFELENBQWxEO0FBQUEsTUFBdURFLGFBQWEsR0FBR0YsRUFBRSxDQUFDLENBQUQsQ0FBekU7O0FBQ0EsTUFBSUcsRUFBRSxHQUFHLENBQUMsR0FBR2xILE9BQU8sQ0FBQzBHLFFBQVosRUFBc0IsSUFBdEIsQ0FBVDtBQUFBLE1BQXNDUyxPQUFPLEdBQUdELEVBQUUsQ0FBQyxDQUFELENBQWxEO0FBQUEsTUFBdURFLFVBQVUsR0FBR0YsRUFBRSxDQUFDLENBQUQsQ0FBdEU7O0FBQ0EsTUFBSUcsT0FBTyxHQUFHO0FBQ1ZDLElBQUFBLEtBQUssRUFBRTtBQUNIQyxNQUFBQSxFQUFFLEVBQUUsV0FERDtBQUVIQyxNQUFBQSxLQUFLLEVBQUU7QUFGSixLQURHO0FBS1ZDLElBQUFBLEtBQUssRUFBRTtBQUNIZCxNQUFBQSxVQUFVLEVBQUVBO0FBRFQsS0FMRztBQVFWZSxJQUFBQSxNQUFNLEVBQUUsQ0FBQyxTQUFEO0FBUkUsR0FBZDtBQVVBLE1BQUlDLE1BQU0sR0FBRyxDQUNUO0FBQ0k1RCxJQUFBQSxJQUFJLEVBQUUsUUFEVjtBQUVJNkQsSUFBQUEsSUFBSSxFQUFFZjtBQUZWLEdBRFMsQ0FBYjs7QUFNQSxNQUFJZ0IsRUFBRSxHQUFHLENBQUMsR0FBRzdILE9BQU8sQ0FBQzBHLFFBQVosRUFBc0IsUUFBdEIsQ0FBVDtBQUFBLE1BQTBDb0IsTUFBTSxHQUFHRCxFQUFFLENBQUMsQ0FBRCxDQUFyRDtBQUFBLE1BQTBERSxTQUFTLEdBQUdGLEVBQUUsQ0FBQyxDQUFELENBQXhFOztBQUNBLEdBQUMsR0FBRzdILE9BQU8sQ0FBQ2dJLFNBQVosRUFBdUIsWUFBWTtBQUMvQixhQUFTQyxhQUFULEdBQXlCO0FBQ3JCLGFBQU8zRCxTQUFTLENBQUMsSUFBRCxFQUFPLEtBQUssQ0FBWixFQUFlLEtBQUssQ0FBcEIsRUFBdUIsWUFBWTtBQUMvQyxZQUFJNEQsR0FBSjtBQUNBLGVBQU8vQyxXQUFXLENBQUMsSUFBRCxFQUFPLFVBQVV4RSxFQUFWLEVBQWM7QUFDbkMsa0JBQVFBLEVBQUUsQ0FBQzJFLEtBQVg7QUFDSSxpQkFBSyxDQUFMO0FBQVEscUJBQU8sQ0FBQztBQUFFO0FBQUgsZ0JBQWNpQixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CekgsR0FBbkIsQ0FBdUIsa0NBQWtDcUYsTUFBbEMsQ0FBeUMyRCxNQUF6QyxDQUF2QixDQUFkLENBQVA7O0FBQ1IsaUJBQUssQ0FBTDtBQUNJSSxjQUFBQSxHQUFHLEdBQUd2SCxFQUFFLENBQUM0RSxJQUFILEVBQU47QUFDQTRDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLEdBQUcsQ0FBQ04sSUFBSixDQUFTZixTQUFuQzs7QUFDQSxrQkFBSXFCLEdBQUcsQ0FBQ04sSUFBUixFQUFjO0FBQ1ZoQixnQkFBQUEsYUFBYSxDQUFDc0IsR0FBRyxDQUFDTixJQUFKLENBQVNqQixVQUFWLENBQWI7QUFDQUcsZ0JBQUFBLFlBQVksQ0FBQ29CLEdBQUcsQ0FBQ04sSUFBSixDQUFTZixTQUFWLENBQVo7QUFDQUksZ0JBQUFBLGFBQWEsQ0FBQ2lCLEdBQUcsQ0FBQ04sSUFBSixDQUFTWixVQUFWLENBQWI7QUFDQUksZ0JBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDSDs7QUFDRCxxQkFBTyxDQUFDO0FBQUU7QUFBSCxlQUFQO0FBWFI7QUFhSCxTQWRpQixDQUFsQjtBQWVILE9BakJlLENBQWhCO0FBa0JIOztBQUNEYSxJQUFBQSxhQUFhO0FBQ2hCLEdBdEJELEVBc0JHLENBQUNILE1BQUQsQ0F0Qkg7QUF1QkEsU0FBUTlILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ25ELE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxSSxRQUFwRCxFQUE4RCxJQUE5RCxFQUNKckksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRUMsSUFBQUEsRUFBRSxFQUFFLEtBQU47QUFBYUMsSUFBQUEsRUFBRSxFQUFFLE1BQWpCO0FBQXlCQyxJQUFBQSxZQUFZLEVBQUU7QUFBdkMsR0FBOUMsRUFDSXpJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZUMsQ0FBaEQsRUFBbUQ7QUFBRUgsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLElBQW5CO0FBQXlCQyxJQUFBQSxVQUFVLEVBQUUsTUFBckM7QUFBNkNDLElBQUFBLGFBQWEsRUFBRSxNQUE1RDtBQUFvRUMsSUFBQUEsYUFBYSxFQUFFLFdBQW5GO0FBQWdHQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsVUFBM0M7QUFBdkcsR0FBbkQsRUFDSSxPQURKLEVBRUluQixNQUFNLElBQUksT0FBVixHQUFvQixRQUFwQixHQUErQkEsTUFBTSxJQUFJLFFBQVYsR0FBcUIsU0FBckIsR0FBaUMsV0FGcEUsRUFHSSxjQUhKLENBREosRUFLSTlILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQS9DLEVBQ0luSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFWixJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsS0FBbkI7QUFBMEJDLElBQUFBLFVBQVUsRUFBRSxDQUFDLE1BQUQsRUFBUyxXQUFULENBQXRDO0FBQTZERyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsU0FBM0MsQ0FBcEU7QUFBMkhJLElBQUFBLFVBQVUsRUFBRTtBQUF2SSxHQUEvQyxFQUNJckMsVUFESixFQUVJaEgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlWSxJQUFoRCxFQUFzRDtBQUFFVixJQUFBQSxRQUFRLEVBQUUsSUFBWjtBQUFrQkMsSUFBQUEsVUFBVSxFQUFFLFFBQTlCO0FBQXdDRyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsVUFBM0M7QUFBL0MsR0FBdEQsRUFDSSxHQURKLEVBRUksUUFGSixDQUZKLENBREosRUFNSWpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQytDLE1BQXpDLEVBQWlEO0FBQUUwRyxJQUFBQSxRQUFRLEVBQUUsa0JBQVV2RSxDQUFWLEVBQWE7QUFBRSxhQUFPK0MsU0FBUyxDQUFDL0MsQ0FBQyxDQUFDd0UsTUFBRixDQUFTdkssS0FBVixDQUFoQjtBQUFtQyxLQUE5RDtBQUFnRUEsSUFBQUEsS0FBSyxFQUFFNkksTUFBdkU7QUFBK0UyQixJQUFBQSxDQUFDLEVBQUUsTUFBbEY7QUFBMEZDLElBQUFBLElBQUksRUFBRTtBQUFoRyxHQUFqRCxFQUNJMUosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDLFFBQWpDLEVBQTJDO0FBQUVsRSxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUEzQyxFQUErRCxhQUEvRCxDQURKLEVBRUllLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQyxRQUFqQyxFQUEyQztBQUFFbEUsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBM0MsRUFBZ0UsY0FBaEUsQ0FGSixFQUdJZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUMsUUFBakMsRUFBMkM7QUFBRWxFLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQTNDLEVBQWtFLGdCQUFsRSxDQUhKLENBTkosQ0FMSixDQURJLEVBZ0JKa0ksT0FBTyxHQUFHbkgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNkosTUFBekMsRUFBaUQ7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFO0FBQUwsR0FBakQsRUFDTjVKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQytKLE9BQXpDLEVBQWtEO0FBQUVILElBQUFBLElBQUksRUFBRTtBQUFSLEdBQWxELENBRE0sQ0FBSCxHQUNrRTdDLFNBQVMsQ0FBQ1IsTUFBVixHQUFtQnJHLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3FELGtCQUFrQixDQUFDLFNBQUQsQ0FBbkQsRUFBZ0U7QUFBRWEsSUFBQUEsT0FBTyxFQUFFQSxPQUFYO0FBQW9CTSxJQUFBQSxNQUFNLEVBQUVBLE1BQTVCO0FBQW9DbUMsSUFBQUEsSUFBSSxFQUFFO0FBQTFDLEdBQWhFLENBQW5CLEdBQXdJOUosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNkosTUFBekMsRUFBaUQ7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFO0FBQUwsR0FBakQsRUFBaUUsZUFBakUsQ0FqQjdNLENBQVI7QUFrQkg7O0FBQ0RsSyxrQkFBQSxHQUFxQitHLGdCQUFyQjs7Ozs7Ozs7Ozs7QUNoSWE7O0FBQ2IsSUFBSXJJLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsS0FBbUNDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDNUYsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJKLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUJHLEVBQXpCLEVBQTZCO0FBQUVHLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CQyxJQUFBQSxHQUFHLEVBQUUsZUFBVztBQUFFLGFBQU9OLENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQWM7QUFBcEQsR0FBN0I7QUFDSCxDQUh3RCxHQUduRCxVQUFTRixDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDeEIsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJGLEVBQUFBLENBQUMsQ0FBQ0csRUFBRCxDQUFELEdBQVFGLENBQUMsQ0FBQ0MsQ0FBRCxDQUFUO0FBQ0gsQ0FOcUIsQ0FBdEI7O0FBT0EsSUFBSU0sa0JBQWtCLEdBQUksUUFBUSxLQUFLQSxrQkFBZCxLQUFzQ1YsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQzNGWCxFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCLFNBQXpCLEVBQW9DO0FBQUVNLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CSSxJQUFBQSxLQUFLLEVBQUVEO0FBQTNCLEdBQXBDO0FBQ0gsQ0FGOEQsR0FFMUQsVUFBU1QsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDaEJULEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsR0FBZVMsQ0FBZjtBQUNILENBSndCLENBQXpCOztBQUtBLElBQUlFLFlBQVksR0FBSSxRQUFRLEtBQUtBLFlBQWQsSUFBK0IsVUFBVUMsR0FBVixFQUFlO0FBQzdELE1BQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFmLEVBQTJCLE9BQU9ELEdBQVA7QUFDM0IsTUFBSUUsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJRixHQUFHLElBQUksSUFBWCxFQUFpQixLQUFLLElBQUlWLENBQVQsSUFBY1UsR0FBZDtBQUFtQixRQUFJVixDQUFDLEtBQUssU0FBTixJQUFtQkosTUFBTSxDQUFDaUIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxHQUFyQyxFQUEwQ1YsQ0FBMUMsQ0FBdkIsRUFBcUVMLGVBQWUsQ0FBQ2lCLE1BQUQsRUFBU0YsR0FBVCxFQUFjVixDQUFkLENBQWY7QUFBeEY7O0FBQ2pCTSxFQUFBQSxrQkFBa0IsQ0FBQ00sTUFBRCxFQUFTRixHQUFULENBQWxCOztBQUNBLFNBQU9FLE1BQVA7QUFDSCxDQU5EOztBQU9BLElBQUlpRixTQUFTLEdBQUksUUFBUSxLQUFLQSxTQUFkLElBQTRCLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxDQUEvQixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDckYsV0FBU0MsS0FBVCxDQUFlMUYsS0FBZixFQUFzQjtBQUFFLFdBQU9BLEtBQUssWUFBWXdGLENBQWpCLEdBQXFCeEYsS0FBckIsR0FBNkIsSUFBSXdGLENBQUosQ0FBTSxVQUFVUixPQUFWLEVBQW1CO0FBQUVBLE1BQUFBLE9BQU8sQ0FBQ2hGLEtBQUQsQ0FBUDtBQUFpQixLQUE1QyxDQUFwQztBQUFvRjs7QUFDNUcsU0FBTyxLQUFLd0YsQ0FBQyxLQUFLQSxDQUFDLEdBQUdULE9BQVQsQ0FBTixFQUF5QixVQUFVQyxPQUFWLEVBQW1CVyxNQUFuQixFQUEyQjtBQUN2RCxhQUFTQyxTQUFULENBQW1CNUYsS0FBbkIsRUFBMEI7QUFBRSxVQUFJO0FBQUU2RixRQUFBQSxJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssSUFBVixDQUFlOUYsS0FBZixDQUFELENBQUo7QUFBOEIsT0FBcEMsQ0FBcUMsT0FBTytGLENBQVAsRUFBVTtBQUFFSixRQUFBQSxNQUFNLENBQUNJLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzNGLGFBQVNDLFFBQVQsQ0FBa0JoRyxLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRTZGLFFBQUFBLElBQUksQ0FBQ0osU0FBUyxDQUFDLE9BQUQsQ0FBVCxDQUFtQnpGLEtBQW5CLENBQUQsQ0FBSjtBQUFrQyxPQUF4QyxDQUF5QyxPQUFPK0YsQ0FBUCxFQUFVO0FBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjekYsTUFBZCxFQUFzQjtBQUFFQSxNQUFBQSxNQUFNLENBQUNnQyxJQUFQLEdBQWM0QyxPQUFPLENBQUM1RSxNQUFNLENBQUNKLEtBQVIsQ0FBckIsR0FBc0MwRixLQUFLLENBQUN0RixNQUFNLENBQUNKLEtBQVIsQ0FBTCxDQUFvQmlGLElBQXBCLENBQXlCVyxTQUF6QixFQUFvQ0ksUUFBcEMsQ0FBdEM7QUFBc0Y7O0FBQzlHSCxJQUFBQSxJQUFJLENBQUMsQ0FBQ0osU0FBUyxHQUFHQSxTQUFTLENBQUNRLEtBQVYsQ0FBZ0JYLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RE8sSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FSRDs7QUFTQSxJQUFJSSxXQUFXLEdBQUksUUFBUSxLQUFLQSxXQUFkLElBQThCLFVBQVVaLE9BQVYsRUFBbUJhLElBQW5CLEVBQXlCO0FBQ3JFLE1BQUlDLENBQUMsR0FBRztBQUFFQyxJQUFBQSxLQUFLLEVBQUUsQ0FBVDtBQUFZQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFBRSxVQUFJQyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBWCxFQUFjLE1BQU1BLENBQUMsQ0FBQyxDQUFELENBQVA7QUFBWSxhQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFSO0FBQWMsS0FBdkU7QUFBeUVDLElBQUFBLElBQUksRUFBRSxFQUEvRTtBQUFtRkMsSUFBQUEsR0FBRyxFQUFFO0FBQXhGLEdBQVI7QUFBQSxNQUFzR0MsQ0FBdEc7QUFBQSxNQUF5R0MsQ0FBekc7QUFBQSxNQUE0R0osQ0FBNUc7QUFBQSxNQUErR0ssQ0FBL0c7QUFDQSxTQUFPQSxDQUFDLEdBQUc7QUFBRWQsSUFBQUEsSUFBSSxFQUFFZSxJQUFJLENBQUMsQ0FBRCxDQUFaO0FBQWlCLGFBQVNBLElBQUksQ0FBQyxDQUFELENBQTlCO0FBQW1DLGNBQVVBLElBQUksQ0FBQyxDQUFEO0FBQWpELEdBQUosRUFBNEQsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixLQUFpQ0YsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLFFBQVIsQ0FBRCxHQUFxQixZQUFXO0FBQUUsV0FBTyxJQUFQO0FBQWMsR0FBakYsQ0FBNUQsRUFBZ0pILENBQXZKOztBQUNBLFdBQVNDLElBQVQsQ0FBY0csQ0FBZCxFQUFpQjtBQUFFLFdBQU8sVUFBVWpILENBQVYsRUFBYTtBQUFFLGFBQU84RixJQUFJLENBQUMsQ0FBQ21CLENBQUQsRUFBSWpILENBQUosQ0FBRCxDQUFYO0FBQXNCLEtBQTVDO0FBQStDOztBQUNsRSxXQUFTOEYsSUFBVCxDQUFjb0IsRUFBZCxFQUFrQjtBQUNkLFFBQUlQLENBQUosRUFBTyxNQUFNLElBQUlRLFNBQUosQ0FBYyxpQ0FBZCxDQUFOOztBQUNQLFdBQU9kLENBQVA7QUFBVSxVQUFJO0FBQ1YsWUFBSU0sQ0FBQyxHQUFHLENBQUosRUFBT0MsQ0FBQyxLQUFLSixDQUFDLEdBQUdVLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFSLEdBQVlOLENBQUMsQ0FBQyxRQUFELENBQWIsR0FBMEJNLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUU4sQ0FBQyxDQUFDLE9BQUQsQ0FBRCxLQUFlLENBQUNKLENBQUMsR0FBR0ksQ0FBQyxDQUFDLFFBQUQsQ0FBTixLQUFxQkosQ0FBQyxDQUFDaEcsSUFBRixDQUFPb0csQ0FBUCxDQUFyQixFQUFnQyxDQUEvQyxDQUFSLEdBQTREQSxDQUFDLENBQUNiLElBQWpHLENBQUQsSUFBMkcsQ0FBQyxDQUFDUyxDQUFDLEdBQUdBLENBQUMsQ0FBQ2hHLElBQUYsQ0FBT29HLENBQVAsRUFBVU0sRUFBRSxDQUFDLENBQUQsQ0FBWixDQUFMLEVBQXVCN0UsSUFBOUksRUFBb0osT0FBT21FLENBQVA7QUFDcEosWUFBSUksQ0FBQyxHQUFHLENBQUosRUFBT0osQ0FBWCxFQUFjVSxFQUFFLEdBQUcsQ0FBQ0EsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVQsRUFBWVYsQ0FBQyxDQUFDdkcsS0FBZCxDQUFMOztBQUNkLGdCQUFRaUgsRUFBRSxDQUFDLENBQUQsQ0FBVjtBQUNJLGVBQUssQ0FBTDtBQUFRLGVBQUssQ0FBTDtBQUFRVixZQUFBQSxDQUFDLEdBQUdVLEVBQUo7QUFBUTs7QUFDeEIsZUFBSyxDQUFMO0FBQVFiLFlBQUFBLENBQUMsQ0FBQ0MsS0FBRjtBQUFXLG1CQUFPO0FBQUVyRyxjQUFBQSxLQUFLLEVBQUVpSCxFQUFFLENBQUMsQ0FBRCxDQUFYO0FBQWdCN0UsY0FBQUEsSUFBSSxFQUFFO0FBQXRCLGFBQVA7O0FBQ25CLGVBQUssQ0FBTDtBQUFRZ0UsWUFBQUEsQ0FBQyxDQUFDQyxLQUFGO0FBQVdNLFlBQUFBLENBQUMsR0FBR00sRUFBRSxDQUFDLENBQUQsQ0FBTjtBQUFXQSxZQUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFELENBQUw7QUFBVTs7QUFDeEMsZUFBSyxDQUFMO0FBQVFBLFlBQUFBLEVBQUUsR0FBR2IsQ0FBQyxDQUFDSyxHQUFGLENBQU1VLEdBQU4sRUFBTDs7QUFBa0JmLFlBQUFBLENBQUMsQ0FBQ0ksSUFBRixDQUFPVyxHQUFQOztBQUFjOztBQUN4QztBQUNJLGdCQUFJLEVBQUVaLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxJQUFOLEVBQVlELENBQUMsR0FBR0EsQ0FBQyxDQUFDYSxNQUFGLEdBQVcsQ0FBWCxJQUFnQmIsQ0FBQyxDQUFDQSxDQUFDLENBQUNhLE1BQUYsR0FBVyxDQUFaLENBQW5DLE1BQXVESCxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixJQUFlQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBaEYsQ0FBSixFQUF3RjtBQUFFYixjQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUFPO0FBQVc7O0FBQzVHLGdCQUFJYSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixLQUFnQixDQUFDVixDQUFELElBQU9VLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVYsQ0FBQyxDQUFDLENBQUQsQ0FBVCxJQUFnQlUsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVixDQUFDLENBQUMsQ0FBRCxDQUFoRCxDQUFKLEVBQTJEO0FBQUVILGNBQUFBLENBQUMsQ0FBQ0MsS0FBRixHQUFVWSxFQUFFLENBQUMsQ0FBRCxDQUFaO0FBQWlCO0FBQVE7O0FBQ3RGLGdCQUFJQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixJQUFlYixDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBOUIsRUFBbUM7QUFBRUgsY0FBQUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVVFLENBQUMsQ0FBQyxDQUFELENBQVg7QUFBZ0JBLGNBQUFBLENBQUMsR0FBR1UsRUFBSjtBQUFRO0FBQVE7O0FBQ3JFLGdCQUFJVixDQUFDLElBQUlILENBQUMsQ0FBQ0MsS0FBRixHQUFVRSxDQUFDLENBQUMsQ0FBRCxDQUFwQixFQUF5QjtBQUFFSCxjQUFBQSxDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBWDs7QUFBZ0JILGNBQUFBLENBQUMsQ0FBQ0ssR0FBRixDQUFNWSxJQUFOLENBQVdKLEVBQVg7O0FBQWdCO0FBQVE7O0FBQ25FLGdCQUFJVixDQUFDLENBQUMsQ0FBRCxDQUFMLEVBQVVILENBQUMsQ0FBQ0ssR0FBRixDQUFNVSxHQUFOOztBQUNWZixZQUFBQSxDQUFDLENBQUNJLElBQUYsQ0FBT1csR0FBUDs7QUFBYztBQVh0Qjs7QUFhQUYsUUFBQUEsRUFBRSxHQUFHZCxJQUFJLENBQUM1RixJQUFMLENBQVUrRSxPQUFWLEVBQW1CYyxDQUFuQixDQUFMO0FBQ0gsT0FqQlMsQ0FpQlIsT0FBT0wsQ0FBUCxFQUFVO0FBQUVrQixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFELEVBQUlsQixDQUFKLENBQUw7QUFBYVksUUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFBUSxPQWpCekIsU0FpQmtDO0FBQUVELFFBQUFBLENBQUMsR0FBR0gsQ0FBQyxHQUFHLENBQVI7QUFBWTtBQWpCMUQ7O0FBa0JBLFFBQUlVLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFaLEVBQWUsTUFBTUEsRUFBRSxDQUFDLENBQUQsQ0FBUjtBQUFhLFdBQU87QUFBRWpILE1BQUFBLEtBQUssRUFBRWlILEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUEsRUFBRSxDQUFDLENBQUQsQ0FBVixHQUFnQixLQUFLLENBQTlCO0FBQWlDN0UsTUFBQUEsSUFBSSxFQUFFO0FBQXZDLEtBQVA7QUFDL0I7QUFDSixDQTFCRDs7QUEyQkEsSUFBSTVCLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSTJHLE9BQU8sR0FBRzlHLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTdCOztBQUNBLElBQUlJLE9BQU8sR0FBR2QsWUFBWSxDQUFDVSxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBMUI7O0FBQ0EsSUFBSTRHLGtCQUFrQixHQUFHL0csZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHNGQUFELENBQVIsQ0FBeEM7O0FBQ0EsU0FBU21LLHVCQUFULEdBQW1DO0FBQy9CLE1BQUlwSixFQUFFLEdBQUcsQ0FBQyxHQUFHWCxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLEVBQXRCLENBQVQ7QUFBQSxNQUFvQ0MsVUFBVSxHQUFHaEcsRUFBRSxDQUFDLENBQUQsQ0FBbkQ7QUFBQSxNQUF3RGlHLGFBQWEsR0FBR2pHLEVBQUUsQ0FBQyxDQUFELENBQTFFOztBQUNBLE1BQUlDLEVBQUUsR0FBRyxDQUFDLEdBQUdaLE9BQU8sQ0FBQzBHLFFBQVosRUFBc0IsRUFBdEIsQ0FBVDtBQUFBLE1BQW9DRyxTQUFTLEdBQUdqRyxFQUFFLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQXVEa0csWUFBWSxHQUFHbEcsRUFBRSxDQUFDLENBQUQsQ0FBeEU7O0FBQ0EsTUFBSW1HLEVBQUUsR0FBRyxDQUFDLEdBQUcvRyxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLENBQXRCLENBQVQ7QUFBQSxNQUFtQ3NELGFBQWEsR0FBR2pELEVBQUUsQ0FBQyxDQUFELENBQXJEO0FBQUEsTUFBMERrRCxnQkFBZ0IsR0FBR2xELEVBQUUsQ0FBQyxDQUFELENBQS9FOztBQUNBLE1BQUlHLEVBQUUsR0FBRyxDQUFDLEdBQUdsSCxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLElBQXRCLENBQVQ7QUFBQSxNQUFzQ1MsT0FBTyxHQUFHRCxFQUFFLENBQUMsQ0FBRCxDQUFsRDtBQUFBLE1BQXVERSxVQUFVLEdBQUdGLEVBQUUsQ0FBQyxDQUFELENBQXRFOztBQUNBLE1BQUlHLE9BQU8sR0FBRztBQUNWQyxJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsRUFBRSxFQUFFLFdBREQ7QUFFSEMsTUFBQUEsS0FBSyxFQUFFO0FBRkosS0FERztBQUtWQyxJQUFBQSxLQUFLLEVBQUU7QUFDSGQsTUFBQUEsVUFBVSxFQUFFQTtBQURULEtBTEc7QUFRVmUsSUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRDtBQVJFLEdBQWQ7QUFVQSxNQUFJQyxNQUFNLEdBQUcsQ0FDVDtBQUNJNUQsSUFBQUEsSUFBSSxFQUFFLFdBRFY7QUFFSTZELElBQUFBLElBQUksRUFBRWY7QUFGVixHQURTLENBQWI7O0FBTUEsTUFBSWdCLEVBQUUsR0FBRyxDQUFDLEdBQUc3SCxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLFFBQXRCLENBQVQ7QUFBQSxNQUEwQ29CLE1BQU0sR0FBR0QsRUFBRSxDQUFDLENBQUQsQ0FBckQ7QUFBQSxNQUEwREUsU0FBUyxHQUFHRixFQUFFLENBQUMsQ0FBRCxDQUF4RTs7QUFDQSxHQUFDLEdBQUc3SCxPQUFPLENBQUNnSSxTQUFaLEVBQXVCLFlBQVk7QUFDL0IsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixhQUFPM0QsU0FBUyxDQUFDLElBQUQsRUFBTyxLQUFLLENBQVosRUFBZSxLQUFLLENBQXBCLEVBQXVCLFlBQVk7QUFDL0MsWUFBSTRELEdBQUo7QUFDQSxlQUFPL0MsV0FBVyxDQUFDLElBQUQsRUFBTyxVQUFVeEUsRUFBVixFQUFjO0FBQ25DLGtCQUFRQSxFQUFFLENBQUMyRSxLQUFYO0FBQ0ksaUJBQUssQ0FBTDtBQUFRLHFCQUFPLENBQUM7QUFBRTtBQUFILGdCQUFjaUIsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnpILEdBQW5CLENBQXVCLHFDQUFxQ3FGLE1BQXJDLENBQTRDMkQsTUFBNUMsQ0FBdkIsQ0FBZCxDQUFQOztBQUNSLGlCQUFLLENBQUw7QUFDSUksY0FBQUEsR0FBRyxHQUFHdkgsRUFBRSxDQUFDNEUsSUFBSCxFQUFOO0FBQ0E0QyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixHQUFHLENBQUNOLElBQUosQ0FBU2YsU0FBbkM7O0FBQ0Esa0JBQUlxQixHQUFHLENBQUNOLElBQVIsRUFBYztBQUNWaEIsZ0JBQUFBLGFBQWEsQ0FBQ3NCLEdBQUcsQ0FBQ04sSUFBSixDQUFTakIsVUFBVixDQUFiO0FBQ0FHLGdCQUFBQSxZQUFZLENBQUNvQixHQUFHLENBQUNOLElBQUosQ0FBU2YsU0FBVixDQUFaO0FBQ0FvRCxnQkFBQUEsZ0JBQWdCLENBQUMvQixHQUFHLENBQUNOLElBQUosQ0FBU29DLGFBQVYsQ0FBaEI7QUFDQTVDLGdCQUFBQSxVQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0g7O0FBQ0QscUJBQU8sQ0FBQztBQUFFO0FBQUgsZUFBUDtBQVhSO0FBYUgsU0FkaUIsQ0FBbEI7QUFlSCxPQWpCZSxDQUFoQjtBQWtCSDs7QUFDRGEsSUFBQUEsYUFBYTtBQUNoQixHQXRCRCxFQXNCRyxDQUFDSCxNQUFELENBdEJIO0FBdUJBLFNBQVE5SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUksUUFBcEQsRUFBOEQsSUFBOUQsRUFDSnJJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVDLElBQUFBLEVBQUUsRUFBRSxLQUFOO0FBQWFDLElBQUFBLEVBQUUsRUFBRSxNQUFqQjtBQUF5QkMsSUFBQUEsWUFBWSxFQUFFO0FBQXZDLEdBQTlDLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWVDLENBQWhELEVBQW1EO0FBQUVILElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxJQUFuQjtBQUF5QkMsSUFBQUEsVUFBVSxFQUFFLE1BQXJDO0FBQTZDQyxJQUFBQSxhQUFhLEVBQUUsTUFBNUQ7QUFBb0VDLElBQUFBLGFBQWEsRUFBRSxXQUFuRjtBQUFnR0MsSUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR2xKLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLFVBQTNDO0FBQXZHLEdBQW5ELEVBQ0ksT0FESixFQUVJbkIsTUFBTSxJQUFJLE9BQVYsR0FBb0IsUUFBcEIsR0FBK0JBLE1BQU0sSUFBSSxRQUFWLEdBQXFCLFNBQXJCLEdBQWlDLFdBRnBFLEVBR0ksY0FISixDQURKLEVBS0k5SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFQyxJQUFBQSxPQUFPLEVBQUU7QUFBWCxHQUEvQyxFQUNJbkosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRVosSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLEtBQW5CO0FBQTBCQyxJQUFBQSxVQUFVLEVBQUUsQ0FBQyxNQUFELEVBQVMsV0FBVCxDQUF0QztBQUE2REcsSUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR2xKLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLFNBQTNDLENBQXBFO0FBQTJISSxJQUFBQSxVQUFVLEVBQUU7QUFBdkksR0FBL0MsRUFDSVcsYUFESixFQUVJaEssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlWSxJQUFoRCxFQUFzRDtBQUFFVixJQUFBQSxRQUFRLEVBQUUsSUFBWjtBQUFrQkMsSUFBQUEsVUFBVSxFQUFFLFFBQTlCO0FBQXdDRyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsVUFBM0M7QUFBL0MsR0FBdEQsRUFDSSxHQURKLEVBRUksZUFGSixDQUZKLENBREosRUFNSWpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQytDLE1BQXpDLEVBQWlEO0FBQUUwRyxJQUFBQSxRQUFRLEVBQUUsa0JBQVV2RSxDQUFWLEVBQWE7QUFBRSxhQUFPK0MsU0FBUyxDQUFDL0MsQ0FBQyxDQUFDd0UsTUFBRixDQUFTdkssS0FBVixDQUFoQjtBQUFtQyxLQUE5RDtBQUFnRUEsSUFBQUEsS0FBSyxFQUFFNkksTUFBdkU7QUFBK0UyQixJQUFBQSxDQUFDLEVBQUUsTUFBbEY7QUFBMEZDLElBQUFBLElBQUksRUFBRTtBQUFoRyxHQUFqRCxFQUNJMUosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDLFFBQWpDLEVBQTJDO0FBQUVsRSxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUEzQyxFQUErRCxhQUEvRCxDQURKLEVBRUllLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQyxRQUFqQyxFQUEyQztBQUFFbEUsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBM0MsRUFBZ0UsY0FBaEUsQ0FGSixFQUdJZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUMsUUFBakMsRUFBMkM7QUFBRWxFLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQTNDLEVBQWtFLGdCQUFsRSxDQUhKLENBTkosQ0FMSixDQURJLEVBZ0JKa0ksT0FBTyxHQUFHbkgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNkosTUFBekMsRUFBaUQ7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFO0FBQUwsR0FBakQsRUFDTjVKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQytKLE9BQXpDLEVBQWtEO0FBQUVILElBQUFBLElBQUksRUFBRTtBQUFSLEdBQWxELENBRE0sQ0FBSCxHQUNrRTdDLFNBQVMsQ0FBQ1IsTUFBVixHQUFtQnJHLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3FELGtCQUFrQixDQUFDLFNBQUQsQ0FBbkQsRUFBZ0U7QUFBRWEsSUFBQUEsT0FBTyxFQUFFQSxPQUFYO0FBQW9CTSxJQUFBQSxNQUFNLEVBQUVBLE1BQTVCO0FBQW9DbUMsSUFBQUEsSUFBSSxFQUFFO0FBQTFDLEdBQWhFLENBQW5CLEdBQXlJOUosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNkosTUFBekMsRUFBaUQ7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFO0FBQUwsR0FBakQsRUFBaUUsZUFBakUsQ0FqQjlNLENBQVI7QUFrQkg7O0FBQ0RsSyxrQkFBQSxHQUFxQnFLLHVCQUFyQjs7Ozs7Ozs7Ozs7QUNoSWE7O0FBQ2IsSUFBSXRLLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxTQUFTc0ssZ0JBQVQsQ0FBMEJ2SixFQUExQixFQUE4QjtBQUMxQixNQUFJK1AsVUFBVSxHQUFHL1AsRUFBRSxDQUFDK1AsVUFBcEI7QUFBQSxNQUFnQ0MsTUFBTSxHQUFHaFEsRUFBRSxDQUFDZ1EsTUFBNUM7QUFDQXhJLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0J1SSxNQUF4QjtBQUNBLFNBQVEzUSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVSxJQUFBQSxVQUFVLEVBQUUsUUFBekI7QUFBbUNDLElBQUFBLGNBQWMsRUFBRTtBQUFuRCxHQUEvQyxFQUNKcEssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDdUssSUFBekMsQ0FDQTtBQURBLElBRUU7QUFDRTtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsZ0JBRmhCO0FBRWtDQyxJQUFBQSxlQUFlLEVBQUUsQ0FBQyxnQkFBRCxFQUFtQixnQkFBbkIsRUFBcUMsZ0JBQXJDLENBRm5EO0FBRTJHQyxJQUFBQSxHQUFHLEVBQUUsQ0FGaEg7QUFFbUhDLElBQUFBLFNBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFUO0FBRjlILEdBRkYsRUFLSXpLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRLLFFBQXpDLEVBQW1EO0FBQUVDLElBQUFBLEVBQUUsRUFBRSxDQUFDLEdBQUc3SyxPQUFPLENBQUNtSixpQkFBWixFQUErQixPQUEvQixFQUF3QyxVQUF4QyxDQUFOO0FBQTJEMkIsSUFBQUEsRUFBRSxFQUFFLENBQS9EO0FBQWtFQyxJQUFBQSxFQUFFLEVBQUUsQ0FBdEU7QUFBeUVDLElBQUFBLE1BQU0sRUFBRSxNQUFqRjtBQUF5RkMsSUFBQUEsT0FBTyxFQUFFO0FBQWxHLEdBQW5ELEVBQ0kvSyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWVDLENBQWhELEVBQW1EO0FBQUVILElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxJQUFuQjtBQUF5QkMsSUFBQUEsVUFBVSxFQUFFLE1BQXJDO0FBQTZDQyxJQUFBQSxhQUFhLEVBQUUsTUFBNUQ7QUFBb0VDLElBQUFBLGFBQWEsRUFBRSxXQUFuRjtBQUFnR0MsSUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBR2xKLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLFVBQS9CLEVBQTJDLFVBQTNDO0FBQXZHLEdBQW5ELEVBQW9OLGlCQUFwTixDQURKLEVBRUlqSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFWixJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsS0FBbkI7QUFBMEJDLElBQUFBLFVBQVUsRUFBRSxDQUFDLE1BQUQsRUFBUyxXQUFULENBQXRDO0FBQTZERyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsU0FBM0MsQ0FBcEU7QUFBMkhJLElBQUFBLFVBQVUsRUFBRTtBQUF2SSxHQUEvQyxFQUNJc0gsTUFBTSxDQUFDdEssTUFEWCxFQUVJckcsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlWSxJQUFoRCxFQUFzRDtBQUFFVixJQUFBQSxRQUFRLEVBQUUsS0FBWjtBQUFtQkMsSUFBQUEsVUFBVSxFQUFFLFFBQS9CO0FBQXlDRyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsVUFBM0M7QUFBaEQsR0FBdEQsRUFDSSxHQURKLEVBRUksUUFGSixDQUZKLENBRkosRUFPSWpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZUMsQ0FBaEQsRUFBbUQ7QUFBRUgsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLElBQW5CO0FBQy9DO0FBQ0FJLElBQUFBLEtBQUssRUFBRTtBQUZ3QyxHQUFuRCxFQUV5QiwwREFGekIsQ0FQSixFQVVJaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDa0wsS0FBekMsRUFBZ0Q7QUFBRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FBWDtBQUE4QkMsSUFBQUEsT0FBTyxFQUFFLENBQXZDO0FBQTBDZCxJQUFBQSxjQUFjLEVBQUUsUUFBMUQ7QUFBb0VlLElBQUFBLFNBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYO0FBQS9FLEdBQWhELEVBQ0luTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzTCxJQUF6QyxFQUErQztBQUFFQyxJQUFBQSxJQUFJLEVBQUUscUJBQVI7QUFBK0I1QixJQUFBQSxDQUFDLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFsQztBQUFvRHdCLElBQUFBLE9BQU8sRUFBRSxhQUE3RDtBQUE0RWQsSUFBQUEsVUFBVSxFQUFFLFFBQXhGO0FBQWtHQyxJQUFBQSxjQUFjLEVBQUUsUUFBbEg7QUFBNEhRLElBQUFBLEVBQUUsRUFBRSxDQUFoSTtBQUFtSUMsSUFBQUEsRUFBRSxFQUFFLENBQXZJO0FBQTBJUyxJQUFBQSxNQUFNLEVBQUUsbUJBQWxKO0FBQXVLekMsSUFBQUEsVUFBVSxFQUFFLE1BQW5MO0FBQTJMa0MsSUFBQUEsT0FBTyxFQUFFLElBQXBNO0FBQTBNRCxJQUFBQSxNQUFNLEVBQUUsSUFBbE47QUFBd045QixJQUFBQSxLQUFLLEVBQUUsZ0JBQS9OO0FBQWlQMkIsSUFBQUEsRUFBRSxFQUFFLFlBQXJQO0FBQW1RWSxJQUFBQSxNQUFNLEVBQUU7QUFDbFRaLE1BQUFBLEVBQUUsRUFBRTtBQUQ4UztBQUEzUSxHQUEvQyxFQUVTLGNBRlQsQ0FESixDQVZKLENBTEosRUFtQkkzSyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SyxRQUF6QyxFQUFtRDtBQUFFQyxJQUFBQSxFQUFFLEVBQUUsQ0FBQyxHQUFHN0ssT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsT0FBL0IsRUFBd0MsVUFBeEMsQ0FBTjtBQUEyRDJCLElBQUFBLEVBQUUsRUFBRSxDQUEvRDtBQUFrRUMsSUFBQUEsRUFBRSxFQUFFLENBQXRFO0FBQXlFQyxJQUFBQSxNQUFNLEVBQUUsTUFBakY7QUFBeUZDLElBQUFBLE9BQU8sRUFBRTtBQUFsRyxHQUFuRCxFQUNJL0ssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlQyxDQUFoRCxFQUFtRDtBQUFFSCxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsSUFBbkI7QUFBeUJDLElBQUFBLFVBQVUsRUFBRSxNQUFyQztBQUE2Q0MsSUFBQUEsYUFBYSxFQUFFLE1BQTVEO0FBQW9FQyxJQUFBQSxhQUFhLEVBQUUsV0FBbkY7QUFBZ0dDLElBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdsSixPQUFPLENBQUNtSixpQkFBWixFQUErQixVQUEvQixFQUEyQyxVQUEzQztBQUF2RyxHQUFuRCxFQUFvTixlQUFwTixDQURKLEVBRUlqSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFWixJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsS0FBbkI7QUFBMEJDLElBQUFBLFVBQVUsRUFBRSxDQUFDLE1BQUQsRUFBUyxXQUFULENBQXRDO0FBQTZERyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsU0FBM0MsQ0FBcEU7QUFBMkhJLElBQUFBLFVBQVUsRUFBRTtBQUF2SSxHQUEvQyxFQUNJcUgsVUFBVSxDQUFDckssTUFEZixFQUVJckcsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlWSxJQUFoRCxFQUFzRDtBQUFFVixJQUFBQSxRQUFRLEVBQUUsS0FBWjtBQUFtQkMsSUFBQUEsVUFBVSxFQUFFLFFBQS9CO0FBQXlDRyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsVUFBM0M7QUFBaEQsR0FBdEQsRUFDSSxHQURKLEVBRUksT0FGSixDQUZKLENBRkosRUFPSWpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZUMsQ0FBaEQsRUFBbUQ7QUFBRUgsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLElBQW5CO0FBQy9DO0FBQ0FJLElBQUFBLEtBQUssRUFBRTtBQUZ3QyxHQUFuRCxFQUV5QiwyREFGekIsQ0FQSixFQVVJaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDa0wsS0FBekMsRUFBZ0Q7QUFBRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FBWDtBQUE4QkMsSUFBQUEsT0FBTyxFQUFFLENBQXZDO0FBQTBDZCxJQUFBQSxjQUFjLEVBQUUsUUFBMUQ7QUFBb0VlLElBQUFBLFNBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYO0FBQS9FLEdBQWhELEVBQ0luTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzTCxJQUF6QyxFQUErQztBQUFFQyxJQUFBQSxJQUFJLEVBQUUscUJBQVI7QUFBK0I1QixJQUFBQSxDQUFDLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFsQztBQUFvRHdCLElBQUFBLE9BQU8sRUFBRSxhQUE3RDtBQUE0RWQsSUFBQUEsVUFBVSxFQUFFLFFBQXhGO0FBQWtHQyxJQUFBQSxjQUFjLEVBQUUsUUFBbEg7QUFBNEhRLElBQUFBLEVBQUUsRUFBRSxDQUFoSTtBQUFtSUMsSUFBQUEsRUFBRSxFQUFFLENBQXZJO0FBQTBJUyxJQUFBQSxNQUFNLEVBQUUsbUJBQWxKO0FBQXVLekMsSUFBQUEsVUFBVSxFQUFFLE1BQW5MO0FBQTJMa0MsSUFBQUEsT0FBTyxFQUFFLElBQXBNO0FBQTBNRCxJQUFBQSxNQUFNLEVBQUUsSUFBbE47QUFBd045QixJQUFBQSxLQUFLLEVBQUUsZ0JBQS9OO0FBQWlQMkIsSUFBQUEsRUFBRSxFQUFFLFlBQXJQO0FBQW1RWSxJQUFBQSxNQUFNLEVBQUU7QUFDbFRaLE1BQUFBLEVBQUUsRUFBRTtBQUQ4UztBQUEzUSxHQUEvQyxFQUVTLGNBRlQsQ0FESixDQVZKLENBbkJKLEVBaUNJM0ssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEssUUFBekMsRUFBbUQ7QUFBRUMsSUFBQUEsRUFBRSxFQUFFLENBQUMsR0FBRzdLLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLE9BQS9CLEVBQXdDLFVBQXhDLENBQU47QUFBMkQyQixJQUFBQSxFQUFFLEVBQUUsQ0FBL0Q7QUFBa0VDLElBQUFBLEVBQUUsRUFBRSxDQUF0RTtBQUF5RUMsSUFBQUEsTUFBTSxFQUFFLE1BQWpGO0FBQXlGQyxJQUFBQSxPQUFPLEVBQUUsSUFBbEc7QUFBd0c2RixJQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7QUFBakgsR0FBbkQsRUFDSTVRLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZUMsQ0FBaEQsRUFBbUQ7QUFBRUgsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLElBQW5CO0FBQXlCQyxJQUFBQSxVQUFVLEVBQUUsTUFBckM7QUFBNkNDLElBQUFBLGFBQWEsRUFBRSxNQUE1RDtBQUFvRUMsSUFBQUEsYUFBYSxFQUFFLFdBQW5GO0FBQWdHQyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsVUFBM0M7QUFBdkcsR0FBbkQsRUFBb04sbUJBQXBOLENBREosRUFFSWpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVaLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxLQUFuQjtBQUEwQkMsSUFBQUEsVUFBVSxFQUFFLENBQUMsTUFBRCxFQUFTLFdBQVQsQ0FBdEM7QUFBNkRHLElBQUFBLEtBQUssRUFBRSxDQUFDLEdBQUdsSixPQUFPLENBQUNtSixpQkFBWixFQUErQixVQUEvQixFQUEyQyxTQUEzQyxDQUFwRTtBQUEySEksSUFBQUEsVUFBVSxFQUFFO0FBQXZJLEdBQS9DLEVBQ0ksSUFESixFQUVJckosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlWSxJQUFoRCxFQUFzRDtBQUFFVixJQUFBQSxRQUFRLEVBQUUsS0FBWjtBQUFtQkMsSUFBQUEsVUFBVSxFQUFFLFFBQS9CO0FBQXlDRyxJQUFBQSxLQUFLLEVBQUUsQ0FBQyxHQUFHbEosT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsVUFBL0IsRUFBMkMsVUFBM0M7QUFBaEQsR0FBdEQsRUFDSSxHQURKLEVBRUksS0FGSixDQUZKLENBRkosRUFPSWpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZUMsQ0FBaEQsRUFBbUQ7QUFBRUgsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLElBQW5CO0FBQy9DO0FBQ0FJLElBQUFBLEtBQUssRUFBRTtBQUZ3QyxHQUFuRCxFQUV5QiwwREFGekIsQ0FQSixFQVVJaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDa0wsS0FBekMsRUFBZ0Q7QUFBRUMsSUFBQUEsT0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FBWDtBQUE4QkMsSUFBQUEsT0FBTyxFQUFFLENBQXZDO0FBQTBDZCxJQUFBQSxjQUFjLEVBQUUsUUFBMUQ7QUFBb0VlLElBQUFBLFNBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYO0FBQS9FLEdBQWhELENBVkosQ0FqQ0osQ0FESSxDQUFSO0FBNkNIOztBQUNEekwsa0JBQUEsR0FBcUJ3SyxnQkFBckI7Ozs7Ozs7Ozs7O0FDeERhOztBQUNiLElBQUl6SyxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSTRMLGtCQUFrQixHQUFHL0wsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHVHQUFELENBQVIsQ0FBeEM7O0FBQ0EsSUFBSTZMLHlCQUF5QixHQUFHaE0sZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHFIQUFELENBQVIsQ0FBL0M7O0FBQ0EsU0FBUzhMLGdCQUFULEdBQTRCO0FBQ3hCLFNBQVExTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN1SyxJQUF6QyxDQUNSO0FBRFEsSUFFTjtBQUNFO0FBQ0FaLElBQUFBLENBQUMsRUFBRSxNQUZMO0FBRWFhLElBQUFBLFlBQVksRUFBRSxnQkFGM0I7QUFFNkNDLElBQUFBLGVBQWUsRUFBRSxDQUFDLGdCQUFELEVBQW1CLGdCQUFuQixFQUFxQyxnQkFBckMsQ0FGOUQ7QUFFc0hDLElBQUFBLEdBQUcsRUFBRSxDQUYzSDtBQUU4SEMsSUFBQUEsU0FBUyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQ7QUFGekksR0FGTSxFQUtKekssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEssUUFBekMsRUFBbUQ7QUFBRUMsSUFBQUEsRUFBRSxFQUFFLENBQUMsR0FBRzdLLE9BQU8sQ0FBQ21KLGlCQUFaLEVBQStCLE9BQS9CLEVBQXdDLFVBQXhDLENBQU47QUFBMkQyQixJQUFBQSxFQUFFLEVBQUUsQ0FBL0Q7QUFBa0VDLElBQUFBLEVBQUUsRUFBRSxDQUF0RTtBQUF5RUMsSUFBQUEsTUFBTSxFQUFFLE1BQWpGO0FBQXlGQyxJQUFBQSxPQUFPLEVBQUU7QUFBbEcsR0FBbkQsRUFDSS9LLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3FJLGtCQUFrQixDQUFDLFNBQUQsQ0FBbkQsRUFBZ0UsSUFBaEUsQ0FESixDQUxJLEVBT0p4TCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SyxRQUF6QyxFQUFtRDtBQUFFQyxJQUFBQSxFQUFFLEVBQUUsQ0FBQyxHQUFHN0ssT0FBTyxDQUFDbUosaUJBQVosRUFBK0IsT0FBL0IsRUFBd0MsVUFBeEMsQ0FBTjtBQUEyRDJCLElBQUFBLEVBQUUsRUFBRSxDQUEvRDtBQUFrRUMsSUFBQUEsRUFBRSxFQUFFLENBQXRFO0FBQXlFQyxJQUFBQSxNQUFNLEVBQUUsTUFBakY7QUFBeUZDLElBQUFBLE9BQU8sRUFBRTtBQUFsRyxHQUFuRCxFQUNJL0ssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDc0kseUJBQXlCLENBQUMsU0FBRCxDQUExRCxFQUF1RSxJQUF2RSxDQURKLENBUEksQ0FBUjtBQVNIOztBQUNEL0wsa0JBQUEsR0FBcUJnTSxnQkFBckI7Ozs7Ozs7Ozs7O0FDcEJhOztBQUNiLElBQUl0TixlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLEtBQW1DQyxNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQzVGLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCSixFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtBQUFFRyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7QUFBRSxhQUFPTixDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUFjO0FBQXBELEdBQTdCO0FBQ0gsQ0FId0QsR0FHbkQsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlNLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0NWLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlTLENBQVosRUFBZTtBQUMzRlgsRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QixTQUF6QixFQUFvQztBQUFFTSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkksSUFBQUEsS0FBSyxFQUFFRDtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNULENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQ2hCVCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVTLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJRSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVixDQUFULElBQWNVLEdBQWQ7QUFBbUIsUUFBSVYsQ0FBQyxLQUFLLFNBQU4sSUFBbUJKLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsR0FBckMsRUFBMENWLENBQTFDLENBQXZCLEVBQXFFTCxlQUFlLENBQUNpQixNQUFELEVBQVNGLEdBQVQsRUFBY1YsQ0FBZCxDQUFmO0FBQXhGOztBQUNqQk0sRUFBQUEsa0JBQWtCLENBQUNNLE1BQUQsRUFBU0YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPRSxNQUFQO0FBQ0gsQ0FORDs7QUFPQUssa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlDLGVBQWUsR0FBR0QsbUJBQU8sQ0FBQyx1RkFBRCxDQUE3Qjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdkLFlBQVksQ0FBQ1UsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTFCOztBQUNBLElBQUlpUixJQUFJLEdBQUdqUixtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLFNBQVNrUixpQkFBVCxDQUEyQm5RLEVBQTNCLEVBQStCO0FBQzNCLE1BQUlDLEVBQUUsR0FBR0QsRUFBRSxDQUFDb1EsTUFBWjtBQUFBLE1BQW9CQSxNQUFNLEdBQUduUSxFQUFFLEtBQUssS0FBSyxDQUFaLEdBQWdCLFFBQWhCLEdBQTJCQSxFQUF4RDtBQUNBLE1BQUlvUSxRQUFRLEdBQUcsQ0FBQyxHQUFHblIsZUFBZSxDQUFDb1IsT0FBcEIsSUFBK0JDLEtBQS9CLENBQXFDRixRQUFwRDs7QUFDQSxNQUFJakssRUFBRSxHQUFHLENBQUMsR0FBRy9HLE9BQU8sQ0FBQzBHLFFBQVosRUFBc0IsRUFBdEIsQ0FBVDtBQUFBLE1BQW9DekgsS0FBSyxHQUFHOEgsRUFBRSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFtRG9LLFFBQVEsR0FBR3BLLEVBQUUsQ0FBQyxDQUFELENBQWhFOztBQUNBLE1BQUlHLEVBQUUsR0FBRyxDQUFDLEdBQUdwSCxPQUFPLENBQUNzUixZQUFaLEVBQTBCblMsS0FBMUIsQ0FBVDtBQUFBLE1BQTJDb1MsU0FBUyxHQUFHbkssRUFBRSxDQUFDbUssU0FBMUQ7QUFBQSxNQUFxRUMsTUFBTSxHQUFHcEssRUFBRSxDQUFDb0ssTUFBakY7O0FBQ0EsR0FBQyxHQUFHdFIsT0FBTyxDQUFDZ0ksU0FBWixFQUF1QixZQUFZO0FBQy9CO0FBQ0FtSixJQUFBQSxRQUFRLENBQUMsR0FBR2hOLE1BQUgsQ0FBVW9OLE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUssS0FBSyxDQUFuQyxHQUF1QyxLQUFLLENBQTVDLEdBQWdEQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQTFFLEVBQW9GLElBQXBGLEVBQTBGdE4sTUFBMUYsQ0FBaUdvTixNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDQyxRQUFQLENBQWdCRSxRQUFqSyxFQUEySyxjQUEzSyxFQUEyTHZOLE1BQTNMLENBQWtNNE0sTUFBbE0sRUFBME0sT0FBMU0sRUFBbU41TSxNQUFuTixDQUEwTjZNLFFBQVEsQ0FBQ3RCLE1BQW5PLENBQUQsQ0FBUjtBQUNILEdBSEQsRUFHRyxDQUFDcUIsTUFBRCxDQUhIO0FBSUEsU0FBUS9RLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ25ELE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxSSxRQUFwRCxFQUE4RCxJQUE5RCxFQUNKckksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRVYsSUFBQUEsRUFBRSxFQUFFO0FBQU4sR0FBL0MsRUFDSXhJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUV4RCxJQUFBQSxLQUFLLEVBQUVBLEtBQVQ7QUFBZ0IwUyxJQUFBQSxVQUFVLEVBQUUsSUFBNUI7QUFBa0NDLElBQUFBLFdBQVcsRUFBRTtBQUEvQyxHQUFoRCxDQURKLEVBRUk1UixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNxTyxNQUF6QyxFQUFpRDtBQUFFRSxJQUFBQSxPQUFPLEVBQUVpRCxNQUFYO0FBQW1CTyxJQUFBQSxFQUFFLEVBQUUsQ0FBdkI7QUFBMEJsSCxJQUFBQSxFQUFFLEVBQUUwRyxTQUFTLEdBQUcsV0FBSCxHQUFpQjtBQUF4RCxHQUFqRCxFQUE2SEEsU0FBUyxHQUFHclIsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDZ1MsSUFBekMsRUFBK0M7QUFBRWxGLElBQUFBLEVBQUUsRUFBRWlFLElBQUksQ0FBQ2tCLGdCQUFYO0FBQTZCbkksSUFBQUEsQ0FBQyxFQUFFLENBQWhDO0FBQW1DSCxJQUFBQSxDQUFDLEVBQUUsQ0FBdEM7QUFBeUNULElBQUFBLEtBQUssRUFBRTtBQUFoRCxHQUEvQyxDQUFILEdBQW1IaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDZ1MsSUFBekMsRUFBK0M7QUFBRWxGLElBQUFBLEVBQUUsRUFBRWlFLElBQUksQ0FBQ21CLGVBQVg7QUFBNEJwSSxJQUFBQSxDQUFDLEVBQUUsQ0FBL0I7QUFBa0NILElBQUFBLENBQUMsRUFBRTtBQUFyQyxHQUEvQyxDQUF6UCxDQUZKLENBREksQ0FBUjtBQUlIOztBQUNEL0osa0JBQUEsR0FBcUJvUixpQkFBckI7Ozs7Ozs7Ozs7O0FDdkNhOztBQUNiLElBQUkxUyxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLEtBQW1DQyxNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQzVGLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCSixFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtBQUFFRyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7QUFBRSxhQUFPTixDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUFjO0FBQXBELEdBQTdCO0FBQ0gsQ0FId0QsR0FHbkQsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlNLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0NWLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlTLENBQVosRUFBZTtBQUMzRlgsRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QixTQUF6QixFQUFvQztBQUFFTSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkksSUFBQUEsS0FBSyxFQUFFRDtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNULENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQ2hCVCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVTLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJRSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVixDQUFULElBQWNVLEdBQWQ7QUFBbUIsUUFBSVYsQ0FBQyxLQUFLLFNBQU4sSUFBbUJKLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsR0FBckMsRUFBMENWLENBQTFDLENBQXZCLEVBQXFFTCxlQUFlLENBQUNpQixNQUFELEVBQVNGLEdBQVQsRUFBY1YsQ0FBZCxDQUFmO0FBQXhGOztBQUNqQk0sRUFBQUEsa0JBQWtCLENBQUNNLE1BQUQsRUFBU0YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPRSxNQUFQO0FBQ0gsQ0FORDs7QUFPQSxJQUFJSSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR2QsWUFBWSxDQUFDVSxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBMUI7O0FBQ0EsSUFBSW9NLElBQUksR0FBR3BNLG1CQUFPLENBQUMsa0VBQUQsQ0FBbEI7O0FBQ0EsSUFBSXFNLGFBQWEsR0FBR3hNLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyx3RUFBRCxDQUFSLENBQW5DOztBQUNBLElBQUk2TyxRQUFRLEdBQUdoUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsK0NBQUQsQ0FBUixDQUE5Qjs7QUFDQSxJQUFJdVAsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBVXhPLEVBQVYsRUFBYztBQUMxQixNQUFJeU8sUUFBUSxHQUFHek8sRUFBRSxDQUFDeU8sUUFBbEI7QUFDQSxHQUFDLEdBQUdwUCxPQUFPLENBQUNnSSxTQUFaLEVBQXVCLFlBQVk7QUFDL0JHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJnSCxRQUE1QjtBQUNILEdBRkQsRUFFRyxFQUZIO0FBR0EsU0FBUXBQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQyxLQUFqQyxFQUF3QyxJQUF4QyxFQUNKbkQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXNFLElBQUFBLEVBQUUsRUFBRSxLQUFOO0FBQWFuRCxJQUFBQSxDQUFDLEVBQUUsTUFBaEI7QUFBd0JvRCxJQUFBQSxTQUFTLEVBQUU7QUFBbkMsR0FBOUMsRUFBMkZ1QyxRQUFRLENBQUMvSSxNQUFULEdBQ3ZGckcsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDZ04sS0FBekMsRUFBZ0Q7QUFBRUMsSUFBQUEsT0FBTyxFQUFFLFFBQVg7QUFBcUJ0RCxJQUFBQSxDQUFDLEVBQUU7QUFBeEIsR0FBaEQsRUFDSXpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ2tOLEtBQXpDLEVBQWdELElBQWhELEVBQ0loTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNtTixFQUF6QyxFQUE2QyxJQUE3QyxFQUNJak4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb04sRUFBekMsRUFBNkMsSUFBN0MsRUFBbUQsTUFBbkQsQ0FESixFQUVJbE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb04sRUFBekMsRUFBNkMsSUFBN0MsRUFBbUQsV0FBbkQsQ0FGSixFQUdJbE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb04sRUFBekMsRUFBNkMsSUFBN0MsRUFBbUQsUUFBbkQsQ0FISixFQUlJbE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb04sRUFBekMsRUFBNkMsSUFBN0MsRUFBbUQsUUFBbkQsQ0FKSixFQUtJbE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb04sRUFBekMsRUFBNkM7QUFBRUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBN0MsQ0FMSixDQURKLENBREosRUFRSW5OLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NOLEtBQXpDLEVBQWdELElBQWhELEVBQXNEZ0MsUUFBUSxDQUFDL0IsR0FBVCxDQUFhLFVBQVVnQyxJQUFWLEVBQWdCL0IsS0FBaEIsRUFBdUI7QUFBRSxXQUFPdE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDbU4sRUFBekMsRUFBNkM7QUFBRU0sTUFBQUEsR0FBRyxFQUFFRDtBQUFQLEtBQTdDLEVBQy9GdE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFDSXhOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVvRyxNQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQjlFLE1BQUFBLEdBQUcsRUFBRTtBQUF4QixLQUEvQyxFQUNJeEssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDeVAsTUFBekMsRUFBaUQ7QUFBRTdGLE1BQUFBLElBQUksRUFBRSxJQUFSO0FBQWMzRixNQUFBQSxJQUFJLEVBQUUsR0FBR0ksTUFBSCxDQUFVa0wsSUFBSSxDQUFDRyxVQUFmLEVBQTJCLEdBQTNCLEVBQWdDckwsTUFBaEMsQ0FBdUNrTCxJQUFJLENBQUNJLFNBQTVDO0FBQXBCLEtBQWpELENBREosRUFDb0ksR0FBR3RMLE1BQUgsQ0FBVWtMLElBQUksQ0FBQ0csVUFBZixFQUEyQixHQUEzQixFQUFnQ3JMLE1BQWhDLENBQXVDa0wsSUFBSSxDQUFDSSxTQUE1QyxDQURwSSxDQURKLENBRCtGLEVBSS9GelAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFBbUQsQ0FBQyxHQUFHaUIsUUFBUSxDQUFDLFNBQUQsQ0FBWixFQUF5QlksSUFBSSxDQUFDSixVQUE5QixFQUEwQ0MsTUFBMUMsQ0FBaUQsR0FBakQsQ0FBbkQsQ0FKK0YsRUFLL0ZsUCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwTixFQUF6QyxFQUE2QyxJQUE3QyxFQUFtRDZCLElBQUksQ0FBQzBCLE1BQXhELENBTCtGLEVBTS9GL1EsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkMsSUFBN0MsRUFBbUQ2QixJQUFJLENBQUNLLE1BQXhELENBTitGLEVBTy9GMVAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDME4sRUFBekMsRUFBNkM7QUFBRUwsTUFBQUEsU0FBUyxFQUFFO0FBQWIsS0FBN0MsRUFDSW5OLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ21PLE9BQXpDLEVBQWtEO0FBQUUzSSxNQUFBQSxLQUFLLEVBQUUsY0FBVDtBQUF5QjRJLE1BQUFBLFFBQVEsRUFBRTtBQUFuQyxLQUFsRCxFQUNJbE8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd08sVUFBekMsRUFBcUQ7QUFBRXZCLE1BQUFBLE9BQU8sRUFBRSxTQUFYO0FBQXNCcUIsTUFBQUEsV0FBVyxFQUFFLE1BQW5DO0FBQTJDLG9CQUFjLFdBQXpEO0FBQXNFeEYsTUFBQUEsUUFBUSxFQUFFLE1BQWhGO0FBQXdGMkYsTUFBQUEsSUFBSSxFQUFFdk8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDNkksSUFBSSxDQUFDd0MsYUFBdEMsRUFBcUQsSUFBckQsQ0FBOUY7QUFBMEp2UCxNQUFBQSxLQUFLLEVBQUU7QUFBakssS0FBckQsQ0FESixDQURKLENBUCtGLENBQVA7QUFTd0osR0FUOUwsQ0FBdEQsQ0FSSixDQUR1RixHQW1CckZlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzhJLGFBQWEsQ0FBQyxTQUFELENBQTlDLEVBQTJELElBQTNELENBbkJOLENBREksQ0FBUjtBQXFCSCxDQTFCRDs7QUEyQkF2TSxrQkFBQSxHQUFxQnlQLFNBQXJCOzs7Ozs7Ozs7OztBQ3hEYTs7QUFDYixJQUFJMVAsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0wsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSXFTLGdCQUFnQixHQUFHeFMsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRGQUFELENBQVIsQ0FBdEM7O0FBQ0EsSUFBSXNTLFNBQVMsR0FBR3pTLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxnRkFBRCxDQUFSLENBQS9COztBQUNBLFNBQVN1UyxTQUFULENBQW1CeFIsRUFBbkIsRUFBdUI7QUFDbkIsTUFBSUMsRUFBRSxHQUFHRCxFQUFFLENBQUN5UixVQUFaO0FBQUEsTUFBd0JBLFVBQVUsR0FBR3hSLEVBQUUsS0FBSyxLQUFLLENBQVosR0FBZ0IsS0FBaEIsR0FBd0JBLEVBQTdEO0FBQUEsTUFBaUV5UixVQUFVLEdBQUcxUixFQUFFLENBQUMwUixVQUFqRjtBQUNBLFNBQVF2UyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUM4TyxnQkFBZ0IsQ0FBQyxTQUFELENBQWpELENBQ1I7QUFEUSxJQUVOO0FBQ0U7QUFDQUssSUFBQUEsVUFBVSxFQUFFRCxVQUZkO0FBRTBCRSxJQUFBQSxVQUFVLEVBQUUsU0FGdEM7QUFFaURDLElBQUFBLFlBQVksRUFBRU4sU0FBUyxDQUFDLFNBQUQsQ0FGeEU7QUFFcUZPLElBQUFBLEdBQUcsRUFBRSxJQUYxRjtBQUVnR0MsSUFBQUEsSUFBSSxFQUFFTjtBQUZ0RyxHQUZNLENBQVI7QUFLSDs7QUFDRDFTLGtCQUFBLEdBQXFCeVMsU0FBckI7Ozs7Ozs7Ozs7O0FDaEJhOztBQUNiLElBQUkvVCxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLEtBQW1DQyxNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQzVGLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCSixFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtBQUFFRyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7QUFBRSxhQUFPTixDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUFjO0FBQXBELEdBQTdCO0FBQ0gsQ0FId0QsR0FHbkQsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlNLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0NWLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlTLENBQVosRUFBZTtBQUMzRlgsRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QixTQUF6QixFQUFvQztBQUFFTSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkksSUFBQUEsS0FBSyxFQUFFRDtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNULENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQ2hCVCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVTLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJRSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVixDQUFULElBQWNVLEdBQWQ7QUFBbUIsUUFBSVYsQ0FBQyxLQUFLLFNBQU4sSUFBbUJKLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsR0FBckMsRUFBMENWLENBQTFDLENBQXZCLEVBQXFFTCxlQUFlLENBQUNpQixNQUFELEVBQVNGLEdBQVQsRUFBY1YsQ0FBZCxDQUFmO0FBQXhGOztBQUNqQk0sRUFBQUEsa0JBQWtCLENBQUNNLE1BQUQsRUFBU0YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPRSxNQUFQO0FBQ0gsQ0FORDs7QUFPQSxJQUFJSSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHWixZQUFZLENBQUNVLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUExQjs7QUFDQSxJQUFJK1MsWUFBWSxHQUFHbFQsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHNEQUFELENBQVIsQ0FBbEM7O0FBQ0EsSUFBSUksT0FBTyxHQUFHSixtQkFBTyxDQUFDLHFGQUFELENBQXJCLEVBQ0E7OztBQUNBLElBQUlnVCxTQUFTLEdBQUc7QUFDWkMsRUFBQUEsUUFBUSxFQUFFRixZQUFZLENBQUMsU0FBRCxDQUFaLENBQXdCRyxNQUF4QixDQUErQkM7QUFEN0IsQ0FBaEI7O0FBR0EsSUFBSUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBVXJTLEVBQVYsRUFBYztBQUN2QixNQUFJa1MsUUFBUSxHQUFHbFMsRUFBRSxDQUFDa1MsUUFBbEI7O0FBQ0EsTUFBSUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUN6QjtBQUNBMUIsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCbkcsSUFBaEIsR0FBdUIsZUFBZWxILE1BQWYsQ0FBc0IwTyxRQUFRLENBQUN0TCxFQUEvQixDQUF2QjtBQUNILEdBSEQ7O0FBSUEsTUFBSTNHLEVBQUUsR0FBRyxDQUFDLEdBQUdkLE9BQU8sQ0FBQzRHLFFBQVosRUFBc0IsQ0FBdEIsQ0FBVDtBQUFBLE1BQW1Dd00sWUFBWSxHQUFHdFMsRUFBRSxDQUFDLENBQUQsQ0FBcEQ7QUFBQSxNQUF5RHVTLFVBQVUsR0FBR3ZTLEVBQUUsQ0FBQyxDQUFELENBQXhFOztBQUNBLEdBQUMsR0FBR2QsT0FBTyxDQUFDa0ksU0FBWixFQUF1QixZQUFZO0FBQy9CNkssSUFBQUEsUUFBUSxDQUFDTyxLQUFULElBQWtCLENBQWxCLEdBQXNCRCxVQUFVLENBQUNOLFFBQVEsV0FBUixDQUFpQm5GLFNBQWxCLENBQWhDLEdBQ01tRixRQUFRLENBQUNPLEtBQVQsSUFBa0IsQ0FBbEIsR0FBc0JELFVBQVUsQ0FBQ04sUUFBUSxXQUFSLENBQWlCbEYsU0FBbEIsQ0FBaEMsR0FDSWtGLFFBQVEsQ0FBQ08sS0FBVCxJQUFrQixDQUFsQixHQUFzQkQsVUFBVSxDQUFDTixRQUFRLFdBQVIsQ0FBaUJqRixXQUFsQixDQUFoQyxHQUNJaUYsUUFBUSxDQUFDTyxLQUFULElBQWtCLENBQWxCLEdBQXNCRCxVQUFVLENBQUNOLFFBQVEsV0FBUixDQUFpQmhGLFVBQWxCLENBQWhDLEdBQ0lnRixRQUFRLENBQUNPLEtBQVQsSUFBa0IsQ0FBbEIsR0FBc0JELFVBQVUsQ0FBQ04sUUFBUSxXQUFSLENBQWlCL0UsVUFBbEIsQ0FBaEMsR0FDSStFLFFBQVEsQ0FBQ08sS0FBVCxJQUFrQixDQUFsQixHQUFzQkQsVUFBVSxDQUFDTixRQUFRLFdBQVIsQ0FBaUI5RSxTQUFsQixDQUFoQyxHQUNJOEUsUUFBUSxDQUFDTyxLQUFULElBQWtCLENBQWxCLElBQXVCRCxVQUFVLENBQUNOLFFBQVEsV0FBUixDQUFpQjdFLFdBQWxCLENBTjNEO0FBT0gsR0FSRCxFQVFHLEVBUkg7QUFTQSxTQUFRbE8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDLEtBQWpDLEVBQXdDO0FBQUVrTCxJQUFBQSxPQUFPLEVBQUU0RTtBQUFYLEdBQXhDLEVBQ0puVCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUNrSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJoQyxJQUFBQSxPQUFPLEVBQUUsUUFBaEM7QUFBMENrSyxJQUFBQSxTQUFTLEVBQUU7QUFBckQsR0FBL0MsRUFDSXZULE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ25ELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVSLElBQUFBLFFBQVEsRUFBRSxJQUFaO0FBQWtCQyxJQUFBQSxVQUFVLEVBQUU7QUFBOUIsR0FBL0MsRUFBdUZnSyxRQUFRLENBQUM5TyxJQUFoRyxDQURKLEVBRUlqRSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFUixJQUFBQSxRQUFRLEVBQUU7QUFBWixHQUEvQyxFQUNJLEdBREosRUFFSWlLLFFBQVEsQ0FBQ1MsU0FBVCxJQUFzQkosWUFBWSxHQUFHLEdBQXJDLENBRkosQ0FGSixDQURJLENBQVI7QUFNSCxDQXRCRDs7QUF1QkFGLE1BQU0sQ0FBQ0osU0FBUCxHQUFtQkEsU0FBbkI7QUFDQWxULGtCQUFBLEdBQXFCc1QsTUFBckI7Ozs7Ozs7Ozs7O0FDdkRhOztBQUNiLElBQUk1VSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLEtBQW1DQyxNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQzVGLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCSixFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtBQUFFRyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7QUFBRSxhQUFPTixDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUFjO0FBQXBELEdBQTdCO0FBQ0gsQ0FId0QsR0FHbkQsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlNLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0NWLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlTLENBQVosRUFBZTtBQUMzRlgsRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QixTQUF6QixFQUFvQztBQUFFTSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkksSUFBQUEsS0FBSyxFQUFFRDtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNULENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQ2hCVCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVTLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJRSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVixDQUFULElBQWNVLEdBQWQ7QUFBbUIsUUFBSVYsQ0FBQyxLQUFLLFNBQU4sSUFBbUJKLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsR0FBckMsRUFBMENWLENBQTFDLENBQXZCLEVBQXFFTCxlQUFlLENBQUNpQixNQUFELEVBQVNGLEdBQVQsRUFBY1YsQ0FBZCxDQUFmO0FBQXhGOztBQUNqQk0sRUFBQUEsa0JBQWtCLENBQUNNLE1BQUQsRUFBU0YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPRSxNQUFQO0FBQ0gsQ0FORDs7QUFPQSxJQUFJSSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR2QsWUFBWSxDQUFDVSxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBMUI7O0FBQ0EsSUFBSTJULFFBQVEsR0FBRzlULGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQywyRUFBRCxDQUFSLENBQTlCOztBQUNBLElBQUk0VCxVQUFVLEdBQUcvVCxlQUFlLENBQUNHLG1CQUFPLENBQUMsK0VBQUQsQ0FBUixDQUFoQzs7QUFDQSxJQUFJNlQsZUFBZSxHQUFHaFUsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHlGQUFELENBQVIsQ0FBckM7O0FBQ0EsU0FBUzhULFdBQVQsQ0FBcUIvUyxFQUFyQixFQUF5QjtBQUNyQixNQUFJaVAsUUFBUSxHQUFHalAsRUFBRSxDQUFDaVAsUUFBbEI7QUFDQSxNQUFJK0QsUUFBUSxHQUFHLENBQUMsR0FBRzdULE9BQU8sQ0FBQzhULGFBQVosRUFBMkIsb0JBQTNCLEVBQWlELENBQWpELENBQWY7O0FBQ0EsTUFBSWhULEVBQUUsR0FBRyxDQUFDLEdBQUdaLE9BQU8sQ0FBQzBHLFFBQVosRUFBc0JpTixRQUFRLEdBQUcsSUFBSCxHQUFVLEtBQXhDLENBQVQ7QUFBQSxNQUF5REUsU0FBUyxHQUFHalQsRUFBRSxDQUFDLENBQUQsQ0FBdkU7QUFBQSxNQUE0RWtULFlBQVksR0FBR2xULEVBQUUsQ0FBQyxDQUFELENBQTdGOztBQUNBLE1BQUltVCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDOUJELElBQUFBLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSCxHQUZEOztBQUdBLFNBQVE3VCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJoQyxJQUFBQSxPQUFPLEVBQUU7QUFBaEMsR0FBL0MsRUFDSm5KLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3NRLGVBQWUsQ0FBQyxTQUFELENBQWhELEVBQTZEO0FBQUVNLElBQUFBLGVBQWUsRUFBRUEsZUFBbkI7QUFBb0NGLElBQUFBLFNBQVMsRUFBRUE7QUFBL0MsR0FBN0QsQ0FESSxFQUVKN1QsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRUYsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBL0MsRUFDSWhKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVzRSxJQUFBQSxFQUFFLEVBQUUsT0FBTjtBQUFlb0gsSUFBQUEsTUFBTSxFQUFFLElBQXZCO0FBQTZCcEosSUFBQUEsRUFBRSxFQUFFLENBQWpDO0FBQW9DcEQsSUFBQUEsS0FBSyxFQUFFcU0sU0FBUyxHQUFHLE1BQUgsR0FBWSxPQUFoRTtBQUF5RUksSUFBQUEsRUFBRSxFQUFFLE1BQTdFO0FBQXFGckssSUFBQUEsQ0FBQyxFQUFFLE9BQXhGO0FBQWlHc0ssSUFBQUEsUUFBUSxFQUFFO0FBQTNHLEdBQTlDLEVBQ0lsVSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFNkwsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxPQUFaO0FBQXFCN0QsTUFBQUEsTUFBTSxFQUFFLE9BQTdCO0FBQXNDeUQsTUFBQUEsTUFBTSxFQUFFLEdBQTlDO0FBQW1ESyxNQUFBQSxTQUFTLEVBQUU7QUFBOUQ7QUFBVCxHQUE5QyxFQUNJclUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDcVEsVUFBVSxDQUFDLFNBQUQsQ0FBM0MsRUFBd0Q7QUFBRUssSUFBQUEsU0FBUyxFQUFFQTtBQUFiLEdBQXhELENBREosQ0FESixDQURKLEVBSUk3VCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFVSxJQUFBQSxLQUFLLEVBQUUsVUFBVDtBQUFxQlMsSUFBQUEsQ0FBQyxFQUFFa0ssUUFBUSxHQUFHLEtBQUgsR0FBVyxNQUEzQztBQUFtRFcsSUFBQUEsSUFBSSxFQUFFLE9BQXpEO0FBQWtFM0osSUFBQUEsRUFBRSxFQUFFZ0osUUFBUSxHQUFHLE9BQUgsR0FBYSxXQUEzRjtBQUF3R1ksSUFBQUEsVUFBVSxFQUFFO0FBQXBILEdBQTlDLEVBQ0l2VSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFc0MsSUFBQUEsRUFBRSxFQUFFK0ksUUFBUSxHQUFHLENBQUgsR0FBTyxFQUFyQjtBQUF5QjlJLElBQUFBLEVBQUUsRUFBRSxNQUE3QjtBQUFxQ3lKLElBQUFBLElBQUksRUFBRTtBQUEzQyxHQUE5QyxFQUFvRzFFLFFBQXBHLENBREosRUFFSTVQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ29RLFFBQVEsQ0FBQyxTQUFELENBQXpDLEVBQXNELElBQXRELENBRkosQ0FKSixDQUZJLENBQVI7QUFTSDs7QUFDRDdULGtCQUFBLEdBQXFCZ1UsV0FBckI7Ozs7Ozs7Ozs7O0FDOUNhOztBQUNiLElBQUlqVSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHTCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxTQUFTNFUsTUFBVCxHQUFrQjtBQUNkLFNBQVExVSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CdUksUUFBcEQsRUFBOEQsSUFBOUQsQ0FBUjtBQUNIOztBQUNEM0ksa0JBQUEsR0FBcUI4VSxNQUFyQjs7Ozs7Ozs7Ozs7QUNUYTs7QUFDYixJQUFJL1UsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0wsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSTZVLE1BQU0sR0FBRzdVLG1CQUFPLENBQUMsNkNBQUQsQ0FBcEI7O0FBQ0EsSUFBSThVLE9BQU8sR0FBRzlVLG1CQUFPLENBQUMsdUVBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLHVGQUFELENBQTdCOztBQUNBLElBQUkrVSxJQUFJLEdBQUcvVSxtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUlnVixJQUFJLEdBQUdoVixtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUlJLE9BQU8sR0FBR0osbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQjs7QUFDQSxJQUFJaVYsSUFBSSxHQUFHalYsbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQjs7QUFDQSxJQUFJa1YsT0FBTyxHQUFHTCxNQUFNLENBQUNNLElBQVAsQ0FBWUQsT0FBMUI7O0FBQ0EsU0FBU0UsUUFBVCxDQUFrQnJVLEVBQWxCLEVBQXNCO0FBQ2xCO0FBQ0EsTUFBSWtULFNBQVMsR0FBR2xULEVBQUUsQ0FBQ2tULFNBQW5CLENBRmtCLENBR2xCO0FBQ0E7QUFDQTs7QUFDQSxTQUFRL1QsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbkQsT0FBTyxDQUFDc0ksR0FBekMsRUFBOEM7QUFBRXdDLElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBQTlDLEVBQ0poTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNzUixNQUFNLENBQUNNLElBQXhDLENBQ0E7QUFDQTtBQUZBLElBR0U7QUFDRTtBQUNBO0FBQ0FFLElBQUFBLElBQUksRUFBRSxRQUhSO0FBR2tCdFYsSUFBQUEsS0FBSyxFQUFFLE1BSHpCO0FBR2lDdVYsSUFBQUEsZUFBZSxFQUFFckIsU0FIbEQ7QUFHNkRNLElBQUFBLEtBQUssRUFBRTtBQUM5RDVELE1BQUFBLE1BQU0sRUFBRSxPQURzRDtBQUU5RDRFLE1BQUFBLFVBQVUsRUFBRSxnRkFGa0Q7QUFHOURuTSxNQUFBQSxLQUFLLEVBQUU7QUFIdUQ7QUFIcEUsR0FIRixFQVdJbEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDc1IsTUFBTSxDQUFDTSxJQUFQLENBQVlLLElBQTdDLEVBQW1EO0FBQUU3SCxJQUFBQSxHQUFHLEVBQUUsR0FBUDtBQUFZZ0IsSUFBQUEsSUFBSSxFQUFFek8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDd1IsSUFBSSxDQUFDVSxrQkFBdEMsRUFBMEQsSUFBMUQ7QUFBbEIsR0FBbkQsRUFDSXZWLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXZELEVBQXFGLFdBQXJGLENBREosQ0FYSixFQWFJdkwsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDc1IsTUFBTSxDQUFDTSxJQUFQLENBQVlLLElBQTdDLEVBQW1EO0FBQUU3SCxJQUFBQSxHQUFHLEVBQUUsR0FBUDtBQUFZZ0IsSUFBQUEsSUFBSSxFQUFFek8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDeVIsSUFBSSxDQUFDVSxPQUF0QyxFQUErQyxJQUEvQztBQUFsQixHQUFuRCxFQUNJeFYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDdEQsZUFBZSxDQUFDdUwsSUFBakQsRUFBdUQ7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkQsRUFBeUYscUJBQXpGLENBREosQ0FiSixFQWVJdkwsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDc1IsTUFBTSxDQUFDTSxJQUFQLENBQVlLLElBQTdDLEVBQW1EO0FBQUU3SCxJQUFBQSxHQUFHLEVBQUUsR0FBUDtBQUFZZ0IsSUFBQUEsSUFBSSxFQUFFek8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDeVIsSUFBSSxDQUFDVyxhQUF0QyxFQUFxRCxJQUFyRDtBQUFsQixHQUFuRCxFQUNJelYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDdEQsZUFBZSxDQUFDdUwsSUFBakQsRUFBdUQ7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkQsRUFBb0YsY0FBcEYsQ0FESixDQWZKLEVBaUJJdkwsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDc1IsTUFBTSxDQUFDTSxJQUFQLENBQVlLLElBQTdDLEVBQW1EO0FBQUU3SCxJQUFBQSxHQUFHLEVBQUUsR0FBUDtBQUFZZ0IsSUFBQUEsSUFBSSxFQUFFek8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDMFIsSUFBSSxDQUFDVyxPQUF0QyxFQUErQyxJQUEvQztBQUFsQixHQUFuRCxFQUNJMVYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDdEQsZUFBZSxDQUFDdUwsSUFBakQsRUFBdUQ7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkQsRUFBaUYsa0JBQWpGLENBREosQ0FqQkosRUFtQkl2TCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUMyUixPQUFqQyxFQUEwQztBQUFFdkgsSUFBQUEsR0FBRyxFQUFFLE1BQVA7QUFBZWdCLElBQUFBLElBQUksRUFBRXpPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3VSLE9BQU8sQ0FBQ2UsZ0JBQXpDLEVBQTJELElBQTNELENBQXJCO0FBQXVGdkYsSUFBQUEsS0FBSyxFQUFFO0FBQTlGLEdBQTFDLEVBQ0lwUSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNzUixNQUFNLENBQUNNLElBQVAsQ0FBWUssSUFBN0MsRUFBbUQ7QUFBRTdILElBQUFBLEdBQUcsRUFBRTtBQUFQLEdBQW5ELEVBQ0l6TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUN0RCxlQUFlLENBQUN1TCxJQUFqRCxFQUF1RDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUF2RCxFQUEwRixnQkFBMUYsQ0FESixDQURKLEVBR0l2TCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNzUixNQUFNLENBQUNNLElBQVAsQ0FBWUssSUFBN0MsRUFBbUQ7QUFBRTdILElBQUFBLEdBQUcsRUFBRTtBQUFQLEdBQW5ELEVBQ0l6TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUN0RCxlQUFlLENBQUN1TCxJQUFqRCxFQUF1RDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUF2RCxFQUF3RixjQUF4RixDQURKLENBSEosQ0FuQkosQ0FESSxDQUFSO0FBeUJIOztBQUNEM0wsa0JBQUEsR0FBcUJzVixRQUFyQjs7Ozs7Ozs7Ozs7QUM5Q2E7O0FBQ2IsSUFBSXZWLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLHVGQUFELENBQTdCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSWdWLElBQUksR0FBR2hWLG1CQUFPLENBQUMsa0VBQUQsQ0FBbEI7O0FBQ0EsSUFBSThWLFVBQVUsR0FBR2pXLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxnRkFBRCxDQUFSLENBQWhDOztBQUNBLElBQUkrVixJQUFJLEdBQUcvVixtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLFNBQVNnVyxhQUFULENBQXVCalYsRUFBdkIsRUFBMkI7QUFDdkIsTUFBSW9ULGVBQWUsR0FBR3BULEVBQUUsQ0FBQ29ULGVBQXpCO0FBQUEsTUFBMENGLFNBQVMsR0FBR2xULEVBQUUsQ0FBQ2tULFNBQXpEO0FBQ0EsTUFBSTdDLFFBQVEsR0FBRyxDQUFDLEdBQUduUixlQUFlLENBQUNvUixPQUFwQixJQUErQkMsS0FBL0IsQ0FBcUNGLFFBQXBEO0FBQ0EsU0FBUWhSLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUV1QyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTcEIsSUFBQUEsQ0FBQyxFQUFFLE1BQVo7QUFBb0JrQixJQUFBQSxFQUFFLEVBQUUsU0FBeEI7QUFBbUN5SixJQUFBQSxRQUFRLEVBQUUsT0FBN0M7QUFBc0RKLElBQUFBLE1BQU0sRUFBRTtBQUE5RCxHQUE5QyxFQUNKaFUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDK1YsU0FBekMsRUFBb0Q7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBcEQsRUFDSTlWLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQS9DLEVBQ0luSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNpVyxNQUF6QyxFQUFpRCxJQUFqRCxFQUNJL1YsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDZ1MsSUFBekMsRUFBK0M7QUFBRTlJLElBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCZ04sSUFBQUEsTUFBTSxFQUFFLFNBQTFCO0FBQXFDQyxJQUFBQSxFQUFFLEVBQUUsQ0FBekM7QUFBNEM1SCxJQUFBQSxPQUFPLEVBQUUwRixlQUFyRDtBQUFzRW5ILElBQUFBLEVBQUUsRUFBRWlILFNBQVMsR0FBRzhCLElBQUksQ0FBQ08sVUFBUixHQUFxQlAsSUFBSSxDQUFDUSxZQUE3RztBQUEySDFNLElBQUFBLENBQUMsRUFBRSxDQUE5SDtBQUFpSUcsSUFBQUEsQ0FBQyxFQUFFO0FBQXBJLEdBQS9DLENBREosRUFFSTVKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXZELEVBQ0lyTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUN1UyxVQUFVLENBQUMsU0FBRCxDQUEzQyxFQUF3RCxJQUF4RCxDQURKLENBRkosQ0FESixFQUtJMVYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDaVcsTUFBekMsRUFBaUQsSUFBakQsRUFDSS9WLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUV1QyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTRCxJQUFBQSxFQUFFLEVBQUUsQ0FBYjtBQUFnQjVCLElBQUFBLEtBQUssRUFBRSxnQkFBdkI7QUFBeUMrQixJQUFBQSxPQUFPLEVBQUUsS0FBbEQ7QUFBeURpTCxJQUFBQSxNQUFNLEVBQUU7QUFBakUsR0FBOUMsRUFDSWhXLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ2lWLElBQXpDLEVBQStDLElBQS9DLEVBQ0kvVSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzVyxVQUF6QyxFQUFxRDtBQUFFeEosSUFBQUEsRUFBRSxFQUFFLEdBQU47QUFBV3BDLElBQUFBLEdBQUcsRUFBRTtBQUFoQixHQUFyRCxFQUNJeEssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDeVAsTUFBekMsRUFBaUQ7QUFBRTdGLElBQUFBLElBQUksRUFBRSxJQUFSO0FBQWN1TSxJQUFBQSxFQUFFLEVBQUUsQ0FBbEI7QUFBcUJsUyxJQUFBQSxJQUFJLEVBQUUsR0FBR0ksTUFBSCxDQUFVNk0sUUFBUSxDQUFDeEIsVUFBbkIsRUFBK0IsR0FBL0IsRUFBb0NyTCxNQUFwQyxDQUEyQzZNLFFBQVEsQ0FBQ3ZCLFNBQXBELENBQTNCO0FBQTJGWCxJQUFBQSxHQUFHLEVBQUU7QUFBaEcsR0FBakQsQ0FESixFQUVJa0MsUUFBUSxDQUFDeEIsVUFGYixFQUdJLEdBSEosRUFJSXdCLFFBQVEsQ0FBQ3ZCLFNBSmIsQ0FESixFQU1JelAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDdVcsUUFBekMsRUFBbUQsSUFBbkQsRUFDSXJXLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dXLFFBQXpDLEVBQW1ELElBQW5ELEVBQ0l0VyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUN0RCxlQUFlLENBQUN1TCxJQUFqRCxFQUF1RDtBQUFFQyxJQUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQmtMLElBQUFBLE1BQU0sRUFBRSxNQUEzQjtBQUFtQzNKLElBQUFBLEVBQUUsRUFBRTtBQUF2QyxHQUF2RCxFQUNJNU0sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRW9HLElBQUFBLEtBQUssRUFBRSxRQUFUO0FBQW1COUUsSUFBQUEsR0FBRyxFQUFFO0FBQXhCLEdBQS9DLEVBQ0l4SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNnUyxJQUF6QyxFQUErQztBQUFFbEYsSUFBQUEsRUFBRSxFQUFFZ0ksSUFBSSxDQUFDNEIsVUFBWDtBQUF1QnhOLElBQUFBLEtBQUssRUFBRSxXQUE5QjtBQUEyQ0wsSUFBQUEsQ0FBQyxFQUFFLENBQTlDO0FBQWlEbkssSUFBQUEsQ0FBQyxFQUFFO0FBQXBELEdBQS9DLENBREosRUFFSXdCLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVKLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQS9DLEVBQXNFLFVBQXRFLENBRkosQ0FESixDQURKLENBREosQ0FOSixDQURKLENBREosQ0FMSixDQURKLENBREksQ0FBUjtBQXFCSDs7QUFDRHRKLGtCQUFBLEdBQXFCa1csYUFBckI7Ozs7Ozs7Ozs7O0FDcENhOztBQUNiLElBQUl4WCxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLEtBQW1DQyxNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQzVGLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCSixFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtBQUFFRyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7QUFBRSxhQUFPTixDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUFjO0FBQXBELEdBQTdCO0FBQ0gsQ0FId0QsR0FHbkQsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlNLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0NWLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlTLENBQVosRUFBZTtBQUMzRlgsRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QixTQUF6QixFQUFvQztBQUFFTSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkksSUFBQUEsS0FBSyxFQUFFRDtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNULENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQ2hCVCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVTLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJRSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVixDQUFULElBQWNVLEdBQWQ7QUFBbUIsUUFBSVYsQ0FBQyxLQUFLLFNBQU4sSUFBbUJKLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsR0FBckMsRUFBMENWLENBQTFDLENBQXZCLEVBQXFFTCxlQUFlLENBQUNpQixNQUFELEVBQVNGLEdBQVQsRUFBY1YsQ0FBZCxDQUFmO0FBQXhGOztBQUNqQk0sRUFBQUEsa0JBQWtCLENBQUNNLE1BQUQsRUFBU0YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPRSxNQUFQO0FBQ0gsQ0FORDs7QUFPQSxJQUFJSSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckIsRUFDQTs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHZCxZQUFZLENBQUNVLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUExQjs7QUFDQSxJQUFJMlQsUUFBUSxHQUFHOVQsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDJFQUFELENBQVIsQ0FBOUI7O0FBQ0EsSUFBSTRULFVBQVUsR0FBRy9ULGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQywrRUFBRCxDQUFSLENBQWhDOztBQUNBLElBQUk2VCxlQUFlLEdBQUdoVSxlQUFlLENBQUNHLG1CQUFPLENBQUMseUZBQUQsQ0FBUixDQUFyQzs7QUFDQSxJQUFJQyxlQUFlLEdBQUdELG1CQUFPLENBQUMsdUZBQUQsQ0FBN0I7O0FBQ0EsU0FBUzZXLFdBQVQsQ0FBcUI5VixFQUFyQixFQUF5QjtBQUNyQixNQUFJaVAsUUFBUSxHQUFHalAsRUFBRSxDQUFDaVAsUUFBbEI7QUFDQSxNQUFJOEcsVUFBVSxHQUFHLENBQUMsR0FBRzdXLGVBQWUsQ0FBQ29SLE9BQXBCLElBQStCQyxLQUEvQixDQUFxQ3dGLFVBQXREO0FBQ0F2TyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWixFQUE2Q3NPLFVBQTdDO0FBQ0EsTUFBSS9DLFFBQVEsR0FBRyxDQUFDLEdBQUc3VCxPQUFPLENBQUM4VCxhQUFaLEVBQTJCLG9CQUEzQixFQUFpRCxDQUFqRCxDQUFmOztBQUNBLE1BQUloVCxFQUFFLEdBQUcsQ0FBQyxHQUFHWixPQUFPLENBQUMwRyxRQUFaLEVBQXNCaU4sUUFBUSxHQUFHLElBQUgsR0FBVSxLQUF4QyxDQUFUO0FBQUEsTUFBeURFLFNBQVMsR0FBR2pULEVBQUUsQ0FBQyxDQUFELENBQXZFO0FBQUEsTUFBNEVrVCxZQUFZLEdBQUdsVCxFQUFFLENBQUMsQ0FBRCxDQUE3Rjs7QUFDQSxNQUFJbVQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFZO0FBQzlCRCxJQUFBQSxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0gsR0FGRDs7QUFHQSxTQUFRN1QsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRWlDLElBQUFBLFNBQVMsRUFBRSxRQUFiO0FBQXVCaEMsSUFBQUEsT0FBTyxFQUFFO0FBQWhDLEdBQS9DLEVBQ0puSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNzUSxlQUFlLENBQUMsU0FBRCxDQUFoRCxFQUE2RDtBQUFFTSxJQUFBQSxlQUFlLEVBQUVBLGVBQW5CO0FBQW9DRixJQUFBQSxTQUFTLEVBQUVBO0FBQS9DLEdBQTdELENBREksRUFFSjdULE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVGLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQS9DLEVBQ0loSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFc0UsSUFBQUEsRUFBRSxFQUFFLE9BQU47QUFBZW9ILElBQUFBLE1BQU0sRUFBRSxJQUF2QjtBQUE2QnBKLElBQUFBLEVBQUUsRUFBRSxDQUFqQztBQUFvQ3BELElBQUFBLEtBQUssRUFBRXFNLFNBQVMsR0FBRyxNQUFILEdBQVksT0FBaEU7QUFBeUVJLElBQUFBLEVBQUUsRUFBRSxNQUE3RTtBQUFxRnJLLElBQUFBLENBQUMsRUFBRSxPQUF4RjtBQUFpR3NLLElBQUFBLFFBQVEsRUFBRTtBQUEzRyxHQUE5QyxFQUNJbFUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRTZMLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUUsT0FBWjtBQUFxQjdELE1BQUFBLE1BQU0sRUFBRSxPQUE3QjtBQUFzQ3lELE1BQUFBLE1BQU0sRUFBRSxHQUE5QztBQUFtREssTUFBQUEsU0FBUyxFQUFFO0FBQTlELEtBQVQ7QUFBaUYxSixJQUFBQSxFQUFFLEVBQUU7QUFBckYsR0FBOUMsRUFDSTNLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3FRLFVBQVUsQ0FBQyxTQUFELENBQTNDLEVBQXdEO0FBQUVLLElBQUFBLFNBQVMsRUFBRUE7QUFBYixHQUF4RCxDQURKLENBREosQ0FESixFQUlJN1QsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRVUsSUFBQUEsS0FBSyxFQUFFLFVBQVQ7QUFBcUJTLElBQUFBLENBQUMsRUFBRWtLLFFBQVEsR0FBRyxLQUFILEdBQVcsTUFBM0M7QUFBbURXLElBQUFBLElBQUksRUFBRSxPQUF6RDtBQUFrRTNKLElBQUFBLEVBQUUsRUFBRWdKLFFBQVEsR0FBRyxPQUFILEdBQWEsV0FBM0Y7QUFBd0dZLElBQUFBLFVBQVUsRUFBRTtBQUFwSCxHQUE5QyxFQUNJdlUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXNDLElBQUFBLEVBQUUsRUFBRStJLFFBQVEsR0FBRyxDQUFILEdBQU8sRUFBckI7QUFBeUI5SSxJQUFBQSxFQUFFLEVBQUUsTUFBN0I7QUFBcUN5SixJQUFBQSxJQUFJLEVBQUU7QUFBM0MsR0FBOUMsRUFBb0cxRSxRQUFwRyxDQURKLEVBRUk1UCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNvUSxRQUFRLENBQUMsU0FBRCxDQUF6QyxFQUFzRCxJQUF0RCxDQUZKLENBSkosQ0FGSSxDQUFSO0FBU0g7O0FBQ0Q3VCxrQkFBQSxHQUFxQitXLFdBQXJCOzs7Ozs7Ozs7OztBQ2xEYTs7QUFDYixJQUFJaFgsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdQLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTdCOztBQUNBLFNBQVM0VSxNQUFULEdBQWtCO0FBQ2QsU0FBUXhVLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUUyTCxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTMUwsSUFBQUEsRUFBRSxFQUFFLENBQWI7QUFBZ0JrQixJQUFBQSxDQUFDLEVBQUU7QUFBbkIsR0FBOUMsRUFDSnpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQytWLFNBQXpDLEVBQW9EO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXBELENBREksQ0FBUjtBQUVIOztBQUNEcFcsa0JBQUEsR0FBcUI4VSxNQUFyQjs7Ozs7Ozs7Ozs7QUNYYTs7QUFDYixJQUFJL1UsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0wsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSTZVLE1BQU0sR0FBRzdVLG1CQUFPLENBQUMsNkNBQUQsQ0FBcEI7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLHVGQUFELENBQTdCOztBQUNBLElBQUlnVixJQUFJLEdBQUdoVixtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUlJLE9BQU8sR0FBR0osbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQjs7QUFDQSxJQUFJK1YsSUFBSSxHQUFHL1YsbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQjs7QUFDQSxJQUFJK1csSUFBSSxHQUFHL1csbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQixFQUNBOzs7QUFDQSxTQUFTb1YsUUFBVCxDQUFrQnJVLEVBQWxCLEVBQXNCO0FBQ2xCO0FBQ0EsTUFBSWtULFNBQVMsR0FBR2xULEVBQUUsQ0FBQ2tULFNBQW5CLENBRmtCLENBR2xCO0FBQ0E7QUFDQTs7QUFDQSxTQUFRL1QsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbkQsT0FBTyxDQUFDc0ksR0FBekMsRUFBOEM7QUFBRXdDLElBQUFBLE1BQU0sRUFBRSxJQUFWO0FBQWdCcUssSUFBQUEsVUFBVSxFQUFFO0FBQTVCLEdBQTlDLEVBQ0pyVixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNzUixNQUFNLENBQUNNLElBQXhDLEVBQThDO0FBQUVFLElBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCdFYsSUFBQUEsS0FBSyxFQUFFLE1BQXpCO0FBQWlDdVYsSUFBQUEsZUFBZSxFQUFFckIsU0FBbEQ7QUFBNkRNLElBQUFBLEtBQUssRUFBRTtBQUMxRzNNLE1BQUFBLEtBQUssRUFBRSxNQURtRztBQUUxRytJLE1BQUFBLE1BQU0sRUFBRSxPQUZrRztBQUcxRzRFLE1BQUFBLFVBQVUsRUFBRSxnRkFIOEY7QUFJMUduTSxNQUFBQSxLQUFLLEVBQUU7QUFKbUc7QUFBcEUsR0FBOUMsRUFNSWxKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3NSLE1BQU0sQ0FBQ00sSUFBUCxDQUFZSyxJQUE3QyxFQUFtRDtBQUFFN0gsSUFBQUEsR0FBRyxFQUFFLEdBQVA7QUFBWWdCLElBQUFBLElBQUksRUFBRXpPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3lSLElBQUksQ0FBQ2dDLFNBQXRDLEVBQWlELElBQWpEO0FBQWxCLEdBQW5ELEVBQ0k5VyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUN0RCxlQUFlLENBQUN1TCxJQUFqRCxFQUF1RDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUF2RCxFQUNJLENBQUN3SSxTQUFELElBQWMvVCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUNzSSxHQUF6QyxFQUE4QztBQUFFZCxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUE5QyxDQURsQixFQUVJLE1BRkosQ0FESixDQU5KLEVBVUkxSCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNzUixNQUFNLENBQUNNLElBQVAsQ0FBWUssSUFBN0MsRUFBbUQ7QUFBRTdILElBQUFBLEdBQUcsRUFBRSxHQUFQO0FBQVlnQixJQUFBQSxJQUFJLEVBQUV6TyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUN3UyxJQUFJLENBQUNrQixXQUF0QyxFQUFtRCxJQUFuRCxDQUFsQjtBQUE0RTFDLElBQUFBLEtBQUssRUFBRTtBQUFFM00sTUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBbkYsR0FBbkQsRUFDSTFILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCOEksSUFBQUEsS0FBSyxFQUFFO0FBQUUzTSxNQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUE1QixHQUF2RCxFQUFtSCxVQUFuSCxDQURKLENBVkosRUFZSTFILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3NSLE1BQU0sQ0FBQ00sSUFBUCxDQUFZSyxJQUE3QyxFQUFtRDtBQUFFN0gsSUFBQUEsR0FBRyxFQUFFLEdBQVA7QUFBWWdCLElBQUFBLElBQUksRUFBRXpPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3dULElBQUksQ0FBQ0csTUFBdEMsRUFBOEMsSUFBOUM7QUFBbEIsR0FBbkQsRUFDSWhYLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXZELEVBQTBFLE1BQTFFLENBREosQ0FaSixDQURJLENBQVI7QUFlSDs7QUFDRDNMLGtCQUFBLEdBQXFCc1YsUUFBckI7Ozs7Ozs7Ozs7O0FDbkNhOztBQUNiLElBQUl2VixlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlDLGVBQWUsR0FBR0QsbUJBQU8sQ0FBQyx1RkFBRCxDQUE3Qjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdQLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTdCLEVBQ0E7OztBQUNBLElBQUk4VixVQUFVLEdBQUdqVyxlQUFlLENBQUNHLG1CQUFPLENBQUMsZ0ZBQUQsQ0FBUixDQUFoQzs7QUFDQSxJQUFJK1YsSUFBSSxHQUFHL1YsbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQjs7QUFDQSxTQUFTZ1csYUFBVCxDQUF1QmpWLEVBQXZCLEVBQTJCO0FBQ3ZCO0FBQ0EsTUFBSW9ULGVBQWUsR0FBR3BULEVBQUUsQ0FBQ29ULGVBQXpCO0FBQUEsTUFBMENGLFNBQVMsR0FBR2xULEVBQUUsQ0FBQ2tULFNBQXpEO0FBQ0EsU0FBUTdULE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUV1QyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTcEIsSUFBQUEsQ0FBQyxFQUFFLE1BQVo7QUFBb0JrQixJQUFBQSxFQUFFLEVBQUUsU0FBeEI7QUFBbUN5SixJQUFBQSxRQUFRLEVBQUUsT0FBN0M7QUFBc0RKLElBQUFBLE1BQU0sRUFBRTtBQUE5RCxHQUE5QyxFQUNKaFUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDK1YsU0FBekMsRUFBb0Q7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBcEQsRUFDSTlWLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBQS9DLEVBQ0luSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNpVyxNQUF6QyxFQUFpRCxJQUFqRCxFQUNJL1YsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDZ1MsSUFBekMsRUFBK0M7QUFBRTlJLElBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCZ04sSUFBQUEsTUFBTSxFQUFFLFNBQTFCO0FBQXFDQyxJQUFBQSxFQUFFLEVBQUUsQ0FBekM7QUFBNEM1SCxJQUFBQSxPQUFPLEVBQUUwRixlQUFyRDtBQUFzRW5ILElBQUFBLEVBQUUsRUFBRWlILFNBQVMsR0FBRzhCLElBQUksQ0FBQ08sVUFBUixHQUFxQlAsSUFBSSxDQUFDUSxZQUE3RztBQUEySDFNLElBQUFBLENBQUMsRUFBRSxDQUE5SDtBQUFpSUcsSUFBQUEsQ0FBQyxFQUFFO0FBQXBJLEdBQS9DLENBREosRUFFSTVKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXZELEVBQ0lyTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUN1UyxVQUFVLENBQUMsU0FBRCxDQUEzQyxFQUF3RCxJQUF4RCxDQURKLENBRkosQ0FESixFQUtJMVYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDaVcsTUFBekMsRUFBaUQsSUFBakQsRUFDSS9WLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUUyQixJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTRCxJQUFBQSxFQUFFLEVBQUUsQ0FBYjtBQUFnQkosSUFBQUEsR0FBRyxFQUFFLENBQXJCO0FBQXdCeEIsSUFBQUEsS0FBSyxFQUFFLGdCQUEvQjtBQUFpRCtCLElBQUFBLE9BQU8sRUFBRSxLQUExRDtBQUFpRWlMLElBQUFBLE1BQU0sRUFBRTtBQUF6RSxHQUEvQyxFQUNJaFcsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDaVYsSUFBekMsRUFBK0MsSUFBL0MsRUFDSS9VLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXZELEVBQWdGLE9BQWhGLENBREosRUFFSXJMLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXZELEVBQW1GLFNBQW5GLENBRkosQ0FESixDQURKLENBTEosQ0FESixDQURJLENBQVI7QUFZSDs7QUFDRDNMLGtCQUFBLEdBQXFCa1csYUFBckI7Ozs7Ozs7Ozs7O0FDM0JhOztBQUNiLElBQUl4WCxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLEtBQW1DQyxNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQzVGLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCSixFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCRyxFQUF6QixFQUE2QjtBQUFFRyxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsSUFBQUEsR0FBRyxFQUFFLGVBQVc7QUFBRSxhQUFPTixDQUFDLENBQUNDLENBQUQsQ0FBUjtBQUFjO0FBQXBELEdBQTdCO0FBQ0gsQ0FId0QsR0FHbkQsVUFBU0YsQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEVBQWxCLEVBQXNCO0FBQ3hCLE1BQUlBLEVBQUUsS0FBS0MsU0FBWCxFQUFzQkQsRUFBRSxHQUFHRCxDQUFMO0FBQ3RCRixFQUFBQSxDQUFDLENBQUNHLEVBQUQsQ0FBRCxHQUFRRixDQUFDLENBQUNDLENBQUQsQ0FBVDtBQUNILENBTnFCLENBQXRCOztBQU9BLElBQUlNLGtCQUFrQixHQUFJLFFBQVEsS0FBS0Esa0JBQWQsS0FBc0NWLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlTLENBQVosRUFBZTtBQUMzRlgsRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QixTQUF6QixFQUFvQztBQUFFTSxJQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkksSUFBQUEsS0FBSyxFQUFFRDtBQUEzQixHQUFwQztBQUNILENBRjhELEdBRTFELFVBQVNULENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQ2hCVCxFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELEdBQWVTLENBQWY7QUFDSCxDQUp3QixDQUF6Qjs7QUFLQSxJQUFJRSxZQUFZLEdBQUksUUFBUSxLQUFLQSxZQUFkLElBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUM3RCxNQUFJQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBZixFQUEyQixPQUFPRCxHQUFQO0FBQzNCLE1BQUlFLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUYsR0FBRyxJQUFJLElBQVgsRUFBaUIsS0FBSyxJQUFJVixDQUFULElBQWNVLEdBQWQ7QUFBbUIsUUFBSVYsQ0FBQyxLQUFLLFNBQU4sSUFBbUJKLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsR0FBckMsRUFBMENWLENBQTFDLENBQXZCLEVBQXFFTCxlQUFlLENBQUNpQixNQUFELEVBQVNGLEdBQVQsRUFBY1YsQ0FBZCxDQUFmO0FBQXhGOztBQUNqQk0sRUFBQUEsa0JBQWtCLENBQUNNLE1BQUQsRUFBU0YsR0FBVCxDQUFsQjs7QUFDQSxTQUFPRSxNQUFQO0FBQ0gsQ0FORDs7QUFPQSxJQUFJSSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlDLGVBQWUsR0FBR0QsbUJBQU8sQ0FBQyx1RkFBRCxDQUE3Qjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdkLFlBQVksQ0FBQ1UsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTFCOztBQUNBLElBQUltWCxjQUFjLEdBQUd0WCxlQUFlLENBQUNHLG1CQUFPLENBQUMscUZBQUQsQ0FBUixDQUFwQzs7QUFDQSxJQUFJMlQsUUFBUSxHQUFHOVQsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDJFQUFELENBQVIsQ0FBOUI7O0FBQ0EsSUFBSTRULFVBQVUsR0FBRy9ULGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQywrRUFBRCxDQUFSLENBQWhDOztBQUNBLElBQUk2VCxlQUFlLEdBQUdoVSxlQUFlLENBQUNHLG1CQUFPLENBQUMseUZBQUQsQ0FBUixDQUFyQzs7QUFDQSxTQUFTb1gsVUFBVCxDQUFvQnJXLEVBQXBCLEVBQXdCO0FBQ3BCLE1BQUlpUCxRQUFRLEdBQUdqUCxFQUFFLENBQUNpUCxRQUFsQjtBQUNBLE1BQUk4RyxVQUFVLEdBQUcsQ0FBQyxHQUFHN1csZUFBZSxDQUFDb1IsT0FBcEIsSUFBK0JDLEtBQS9CLENBQXFDd0YsVUFBdEQ7QUFDQSxNQUFJL0MsUUFBUSxHQUFHLENBQUMsR0FBRzdULE9BQU8sQ0FBQzhULGFBQVosRUFBMkIsb0JBQTNCLEVBQWlELENBQWpELENBQWY7O0FBQ0EsTUFBSWhULEVBQUUsR0FBRyxDQUFDLEdBQUdaLE9BQU8sQ0FBQzBHLFFBQVosRUFBc0JpTixRQUFRLEdBQUcsSUFBSCxHQUFVLEtBQXhDLENBQVQ7QUFBQSxNQUF5REUsU0FBUyxHQUFHalQsRUFBRSxDQUFDLENBQUQsQ0FBdkU7QUFBQSxNQUE0RWtULFlBQVksR0FBR2xULEVBQUUsQ0FBQyxDQUFELENBQTdGOztBQUNBLE1BQUltVCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDOUJELElBQUFBLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSCxHQUZEOztBQUdBLFNBQVE3VCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJoQyxJQUFBQSxPQUFPLEVBQUU7QUFBaEMsR0FBL0MsRUFDSm5KLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3NRLGVBQWUsQ0FBQyxTQUFELENBQWhELEVBQTZEO0FBQUVNLElBQUFBLGVBQWUsRUFBRUEsZUFBbkI7QUFBb0NGLElBQUFBLFNBQVMsRUFBRUE7QUFBL0MsR0FBN0QsQ0FESSxFQUVKN1QsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRUYsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBL0MsRUFDSWhKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVzRSxJQUFBQSxFQUFFLEVBQUUsT0FBTjtBQUFlb0gsSUFBQUEsTUFBTSxFQUFFLElBQXZCO0FBQTZCcEosSUFBQUEsRUFBRSxFQUFFLENBQWpDO0FBQW9DcEQsSUFBQUEsS0FBSyxFQUFFcU0sU0FBUyxHQUFHLE1BQUgsR0FBWSxPQUFoRTtBQUF5RUksSUFBQUEsRUFBRSxFQUFFLE1BQTdFO0FBQXFGckssSUFBQUEsQ0FBQyxFQUFFLE9BQXhGO0FBQWlHc0ssSUFBQUEsUUFBUSxFQUFFO0FBQTNHLEdBQTlDLEVBQ0lsVSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFNkwsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxPQUFaO0FBQXFCN0QsTUFBQUEsTUFBTSxFQUFFLE9BQTdCO0FBQXNDeUQsTUFBQUEsTUFBTSxFQUFFLEdBQTlDO0FBQW1ESyxNQUFBQSxTQUFTLEVBQUU7QUFBOUQ7QUFBVCxHQUE5QyxFQUNJclUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDcVEsVUFBVSxDQUFDLFNBQUQsQ0FBM0MsRUFBd0Q7QUFBRUssSUFBQUEsU0FBUyxFQUFFQTtBQUFiLEdBQXhELENBREosQ0FESixDQURKLEVBSUk3VCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFVSxJQUFBQSxLQUFLLEVBQUUsVUFBVDtBQUFxQlMsSUFBQUEsQ0FBQyxFQUFFa0ssUUFBUSxHQUFHLEtBQUgsR0FBVyxNQUEzQztBQUFtRFcsSUFBQUEsSUFBSSxFQUFFLE9BQXpEO0FBQWtFM0osSUFBQUEsRUFBRSxFQUFFZ0osUUFBUSxHQUFHLE9BQUgsR0FBYSxXQUEzRjtBQUF3R1ksSUFBQUEsVUFBVSxFQUFFO0FBQXBILEdBQTlDLEVBQ0l2VSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFc0MsSUFBQUEsRUFBRSxFQUFFK0ksUUFBUSxHQUFHLENBQUgsR0FBTyxFQUFyQjtBQUF5QjlJLElBQUFBLEVBQUUsRUFBRSxNQUE3QjtBQUFxQ3lKLElBQUFBLElBQUksRUFBRTtBQUEzQyxHQUE5QyxFQUFvRzFFLFFBQXBHLENBREosRUFFSTVQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ29RLFFBQVEsQ0FBQyxTQUFELENBQXpDLEVBQXNELElBQXRELENBRkosQ0FKSixFQU9JbUQsVUFBVSxJQUFJMVcsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDNFQsY0FBYyxDQUFDLFNBQUQsQ0FBL0MsRUFBNEQ7QUFBRWpILElBQUFBLEtBQUssRUFBRTRHLFVBQVQ7QUFBcUI1TSxJQUFBQSxJQUFJLEVBQUU7QUFBM0IsR0FBNUQsQ0FQbEIsQ0FGSSxDQUFSO0FBVUg7O0FBQ0RwSyxrQkFBQSxHQUFxQnNYLFVBQXJCOzs7Ozs7Ozs7OztBQ2xEYTs7QUFDYixJQUFJdlgsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0wsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsU0FBUzRVLE1BQVQsR0FBa0I7QUFDZCxTQUFRMVUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnVJLFFBQXBELEVBQThELElBQTlELENBQVI7QUFDSDs7QUFDRDNJLGtCQUFBLEdBQXFCOFUsTUFBckI7Ozs7Ozs7Ozs7O0FDVGE7O0FBQ2IsSUFBSS9VLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdMLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTdCOztBQUNBLElBQUk2VSxNQUFNLEdBQUc3VSxtQkFBTyxDQUFDLDZDQUFELENBQXBCLEVBQ0E7OztBQUNBLElBQUlDLGVBQWUsR0FBR0QsbUJBQU8sQ0FBQyx1RkFBRCxDQUE3Qjs7QUFDQSxJQUFJK1UsSUFBSSxHQUFHL1UsbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQjs7QUFDQSxJQUFJcVgsSUFBSSxHQUFHclgsbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQjs7QUFDQSxJQUFJZ1YsSUFBSSxHQUFHaFYsbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdKLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSStWLElBQUksR0FBRy9WLG1CQUFPLENBQUMsa0VBQUQsQ0FBbEI7O0FBQ0EsSUFBSStXLElBQUksR0FBRy9XLG1CQUFPLENBQUMsa0VBQUQsQ0FBbEIsRUFDQTs7O0FBQ0EsU0FBU29WLFFBQVQsQ0FBa0JyVSxFQUFsQixFQUFzQjtBQUNsQixNQUFJa1QsU0FBUyxHQUFHbFQsRUFBRSxDQUFDa1QsU0FBbkI7QUFDQSxNQUFJN0MsUUFBUSxHQUFHLENBQUMsR0FBR25SLGVBQWUsQ0FBQ29SLE9BQXBCLElBQStCQyxLQUEvQixDQUFxQ0YsUUFBcEQsQ0FGa0IsQ0FHbEI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBUWxSLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ25ELE9BQU8sQ0FBQ3NJLEdBQXpDLEVBQThDO0FBQUV3QyxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQUE5QyxFQUNKaEwsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDc1IsTUFBTSxDQUFDTSxJQUF4QyxDQUNBO0FBQ0E7QUFGQSxJQUdFO0FBQ0U7QUFDQTtBQUNBRSxJQUFBQSxJQUFJLEVBQUUsUUFIUjtBQUdrQnRWLElBQUFBLEtBQUssRUFBRSxNQUh6QjtBQUdpQ3VWLElBQUFBLGVBQWUsRUFBRXJCLFNBSGxEO0FBRzZETSxJQUFBQSxLQUFLLEVBQUU7QUFDOUQ1RCxNQUFBQSxNQUFNLEVBQUUsT0FEc0Q7QUFFOUQ0RSxNQUFBQSxVQUFVLEVBQUU7QUFGa0Q7QUFIcEUsR0FIRixFQVVJbkUsUUFBUSxJQUFJbFIsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnVJLFFBQXBELEVBQThELElBQTlELEVBQ1J2SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNzUixNQUFNLENBQUNNLElBQVAsQ0FBWUssSUFBN0MsRUFBbUQ7QUFBRTdILElBQUFBLEdBQUcsRUFBRSxHQUFQO0FBQVlnQixJQUFBQSxJQUFJLEVBQUV6TyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUN3UixJQUFJLENBQUNVLGtCQUF0QyxFQUEwRCxJQUExRDtBQUFsQixHQUFuRCxFQUNJdlYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDdEQsZUFBZSxDQUFDdUwsSUFBakQsRUFBdUQ7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkQsRUFBb0YsV0FBcEYsQ0FESixDQURRLEVBR1J2TCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNzUixNQUFNLENBQUNNLElBQVAsQ0FBWUssSUFBN0MsRUFBbUQ7QUFBRTdILElBQUFBLEdBQUcsRUFBRSxHQUFQO0FBQVlnQixJQUFBQSxJQUFJLEVBQUV6TyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUM4VCxJQUFJLENBQUNDLE1BQXRDLEVBQThDLElBQTlDO0FBQWxCLEdBQW5ELEVBQ0lwWCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUN0RCxlQUFlLENBQUN1TCxJQUFqRCxFQUF1RDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUF2RCxFQUF1RixjQUF2RixDQURKLENBSFEsRUFLUnZMLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3NSLE1BQU0sQ0FBQ00sSUFBUCxDQUFZSyxJQUE3QyxFQUFtRDtBQUFFN0gsSUFBQUEsR0FBRyxFQUFFLEdBQVA7QUFBWWdCLElBQUFBLElBQUksRUFBRXpPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3lSLElBQUksQ0FBQ1UsT0FBdEMsRUFBK0MsSUFBL0M7QUFBbEIsR0FBbkQsRUFDSXhWLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXZELEVBQXdGLHFCQUF4RixDQURKLENBTFEsRUFPUnZMLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3NSLE1BQU0sQ0FBQ00sSUFBUCxDQUFZSyxJQUE3QyxFQUFtRDtBQUFFN0gsSUFBQUEsR0FBRyxFQUFFLEdBQVA7QUFBWWdCLElBQUFBLElBQUksRUFBRXpPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3lSLElBQUksQ0FBQ3VDLGNBQXRDLEVBQXNELElBQXREO0FBQWxCLEdBQW5ELEVBQ0lyWCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUN0RCxlQUFlLENBQUN1TCxJQUFqRCxFQUF1RDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUF2RCxFQUFxRixZQUFyRixDQURKLENBUFEsQ0FWaEIsRUFtQkl2TCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNzUixNQUFNLENBQUNNLElBQVAsQ0FBWUssSUFBN0MsRUFBbUQ7QUFBRTdILElBQUFBLEdBQUcsRUFBRSxHQUFQO0FBQVlnQixJQUFBQSxJQUFJLEVBQUV6TyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUN3UyxJQUFJLENBQUNrQixXQUF0QyxFQUFtRCxJQUFuRCxDQUFsQjtBQUE0RTFDLElBQUFBLEtBQUssRUFBRTtBQUFFM00sTUFBQUEsS0FBSyxFQUFFO0FBQVQ7QUFBbkYsR0FBbkQsRUFDSTFILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRSxXQUFSO0FBQXFCOEksSUFBQUEsS0FBSyxFQUFFO0FBQUUzTSxNQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUE1QixHQUF2RCxFQUFtSCxVQUFuSCxDQURKLENBbkJKLEVBcUJJMUgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDc1IsTUFBTSxDQUFDTSxJQUFQLENBQVlLLElBQTdDLEVBQW1EO0FBQUU3SCxJQUFBQSxHQUFHLEVBQUUsR0FBUDtBQUFZZ0IsSUFBQUEsSUFBSSxFQUFFek8sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDd1QsSUFBSSxDQUFDRyxNQUF0QyxFQUE4QyxJQUE5QztBQUFsQixHQUFuRCxFQUNJaFgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDdEQsZUFBZSxDQUFDdUwsSUFBakQsRUFBdUQ7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkQsRUFDSSxDQUFDd0ksU0FBRCxJQUFjL1QsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbkQsT0FBTyxDQUFDc0ksR0FBekMsRUFBOEM7QUFBRWQsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBOUMsQ0FEbEIsRUFFSSxNQUZKLENBREosQ0FyQkosQ0FESSxDQUFSO0FBMEJIOztBQUNEOUgsa0JBQUEsR0FBcUJzVixRQUFyQjs7Ozs7Ozs7Ozs7QUNsRGE7O0FBQ2IsSUFBSTVXLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsS0FBbUNDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDNUYsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJKLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUJHLEVBQXpCLEVBQTZCO0FBQUVHLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CQyxJQUFBQSxHQUFHLEVBQUUsZUFBVztBQUFFLGFBQU9OLENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQWM7QUFBcEQsR0FBN0I7QUFDSCxDQUh3RCxHQUduRCxVQUFTRixDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDeEIsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJGLEVBQUFBLENBQUMsQ0FBQ0csRUFBRCxDQUFELEdBQVFGLENBQUMsQ0FBQ0MsQ0FBRCxDQUFUO0FBQ0gsQ0FOcUIsQ0FBdEI7O0FBT0EsSUFBSU0sa0JBQWtCLEdBQUksUUFBUSxLQUFLQSxrQkFBZCxLQUFzQ1YsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQzNGWCxFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCLFNBQXpCLEVBQW9DO0FBQUVNLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CSSxJQUFBQSxLQUFLLEVBQUVEO0FBQTNCLEdBQXBDO0FBQ0gsQ0FGOEQsR0FFMUQsVUFBU1QsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDaEJULEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsR0FBZVMsQ0FBZjtBQUNILENBSndCLENBQXpCOztBQUtBLElBQUlFLFlBQVksR0FBSSxRQUFRLEtBQUtBLFlBQWQsSUFBK0IsVUFBVUMsR0FBVixFQUFlO0FBQzdELE1BQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFmLEVBQTJCLE9BQU9ELEdBQVA7QUFDM0IsTUFBSUUsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJRixHQUFHLElBQUksSUFBWCxFQUFpQixLQUFLLElBQUlWLENBQVQsSUFBY1UsR0FBZDtBQUFtQixRQUFJVixDQUFDLEtBQUssU0FBTixJQUFtQkosTUFBTSxDQUFDaUIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxHQUFyQyxFQUEwQ1YsQ0FBMUMsQ0FBdkIsRUFBcUVMLGVBQWUsQ0FBQ2lCLE1BQUQsRUFBU0YsR0FBVCxFQUFjVixDQUFkLENBQWY7QUFBeEY7O0FBQ2pCTSxFQUFBQSxrQkFBa0IsQ0FBQ00sTUFBRCxFQUFTRixHQUFULENBQWxCOztBQUNBLFNBQU9FLE1BQVA7QUFDSCxDQU5EOztBQU9BLElBQUlpRixTQUFTLEdBQUksUUFBUSxLQUFLQSxTQUFkLElBQTRCLFVBQVVDLE9BQVYsRUFBbUJDLFVBQW5CLEVBQStCQyxDQUEvQixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDckYsV0FBU0MsS0FBVCxDQUFlMUYsS0FBZixFQUFzQjtBQUFFLFdBQU9BLEtBQUssWUFBWXdGLENBQWpCLEdBQXFCeEYsS0FBckIsR0FBNkIsSUFBSXdGLENBQUosQ0FBTSxVQUFVUixPQUFWLEVBQW1CO0FBQUVBLE1BQUFBLE9BQU8sQ0FBQ2hGLEtBQUQsQ0FBUDtBQUFpQixLQUE1QyxDQUFwQztBQUFvRjs7QUFDNUcsU0FBTyxLQUFLd0YsQ0FBQyxLQUFLQSxDQUFDLEdBQUdULE9BQVQsQ0FBTixFQUF5QixVQUFVQyxPQUFWLEVBQW1CVyxNQUFuQixFQUEyQjtBQUN2RCxhQUFTQyxTQUFULENBQW1CNUYsS0FBbkIsRUFBMEI7QUFBRSxVQUFJO0FBQUU2RixRQUFBQSxJQUFJLENBQUNKLFNBQVMsQ0FBQ0ssSUFBVixDQUFlOUYsS0FBZixDQUFELENBQUo7QUFBOEIsT0FBcEMsQ0FBcUMsT0FBTytGLENBQVAsRUFBVTtBQUFFSixRQUFBQSxNQUFNLENBQUNJLENBQUQsQ0FBTjtBQUFZO0FBQUU7O0FBQzNGLGFBQVNDLFFBQVQsQ0FBa0JoRyxLQUFsQixFQUF5QjtBQUFFLFVBQUk7QUFBRTZGLFFBQUFBLElBQUksQ0FBQ0osU0FBUyxDQUFDLE9BQUQsQ0FBVCxDQUFtQnpGLEtBQW5CLENBQUQsQ0FBSjtBQUFrQyxPQUF4QyxDQUF5QyxPQUFPK0YsQ0FBUCxFQUFVO0FBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDOUYsYUFBU0YsSUFBVCxDQUFjekYsTUFBZCxFQUFzQjtBQUFFQSxNQUFBQSxNQUFNLENBQUNnQyxJQUFQLEdBQWM0QyxPQUFPLENBQUM1RSxNQUFNLENBQUNKLEtBQVIsQ0FBckIsR0FBc0MwRixLQUFLLENBQUN0RixNQUFNLENBQUNKLEtBQVIsQ0FBTCxDQUFvQmlGLElBQXBCLENBQXlCVyxTQUF6QixFQUFvQ0ksUUFBcEMsQ0FBdEM7QUFBc0Y7O0FBQzlHSCxJQUFBQSxJQUFJLENBQUMsQ0FBQ0osU0FBUyxHQUFHQSxTQUFTLENBQUNRLEtBQVYsQ0FBZ0JYLE9BQWhCLEVBQXlCQyxVQUFVLElBQUksRUFBdkMsQ0FBYixFQUF5RE8sSUFBekQsRUFBRCxDQUFKO0FBQ0gsR0FMTSxDQUFQO0FBTUgsQ0FSRDs7QUFTQSxJQUFJSSxXQUFXLEdBQUksUUFBUSxLQUFLQSxXQUFkLElBQThCLFVBQVVaLE9BQVYsRUFBbUJhLElBQW5CLEVBQXlCO0FBQ3JFLE1BQUlDLENBQUMsR0FBRztBQUFFQyxJQUFBQSxLQUFLLEVBQUUsQ0FBVDtBQUFZQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFBRSxVQUFJQyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBWCxFQUFjLE1BQU1BLENBQUMsQ0FBQyxDQUFELENBQVA7QUFBWSxhQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFSO0FBQWMsS0FBdkU7QUFBeUVDLElBQUFBLElBQUksRUFBRSxFQUEvRTtBQUFtRkMsSUFBQUEsR0FBRyxFQUFFO0FBQXhGLEdBQVI7QUFBQSxNQUFzR0MsQ0FBdEc7QUFBQSxNQUF5R0MsQ0FBekc7QUFBQSxNQUE0R0osQ0FBNUc7QUFBQSxNQUErR0ssQ0FBL0c7QUFDQSxTQUFPQSxDQUFDLEdBQUc7QUFBRWQsSUFBQUEsSUFBSSxFQUFFZSxJQUFJLENBQUMsQ0FBRCxDQUFaO0FBQWlCLGFBQVNBLElBQUksQ0FBQyxDQUFELENBQTlCO0FBQW1DLGNBQVVBLElBQUksQ0FBQyxDQUFEO0FBQWpELEdBQUosRUFBNEQsT0FBT0MsTUFBUCxLQUFrQixVQUFsQixLQUFpQ0YsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLFFBQVIsQ0FBRCxHQUFxQixZQUFXO0FBQUUsV0FBTyxJQUFQO0FBQWMsR0FBakYsQ0FBNUQsRUFBZ0pILENBQXZKOztBQUNBLFdBQVNDLElBQVQsQ0FBY0csQ0FBZCxFQUFpQjtBQUFFLFdBQU8sVUFBVWpILENBQVYsRUFBYTtBQUFFLGFBQU84RixJQUFJLENBQUMsQ0FBQ21CLENBQUQsRUFBSWpILENBQUosQ0FBRCxDQUFYO0FBQXNCLEtBQTVDO0FBQStDOztBQUNsRSxXQUFTOEYsSUFBVCxDQUFjb0IsRUFBZCxFQUFrQjtBQUNkLFFBQUlQLENBQUosRUFBTyxNQUFNLElBQUlRLFNBQUosQ0FBYyxpQ0FBZCxDQUFOOztBQUNQLFdBQU9kLENBQVA7QUFBVSxVQUFJO0FBQ1YsWUFBSU0sQ0FBQyxHQUFHLENBQUosRUFBT0MsQ0FBQyxLQUFLSixDQUFDLEdBQUdVLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFSLEdBQVlOLENBQUMsQ0FBQyxRQUFELENBQWIsR0FBMEJNLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUU4sQ0FBQyxDQUFDLE9BQUQsQ0FBRCxLQUFlLENBQUNKLENBQUMsR0FBR0ksQ0FBQyxDQUFDLFFBQUQsQ0FBTixLQUFxQkosQ0FBQyxDQUFDaEcsSUFBRixDQUFPb0csQ0FBUCxDQUFyQixFQUFnQyxDQUEvQyxDQUFSLEdBQTREQSxDQUFDLENBQUNiLElBQWpHLENBQUQsSUFBMkcsQ0FBQyxDQUFDUyxDQUFDLEdBQUdBLENBQUMsQ0FBQ2hHLElBQUYsQ0FBT29HLENBQVAsRUFBVU0sRUFBRSxDQUFDLENBQUQsQ0FBWixDQUFMLEVBQXVCN0UsSUFBOUksRUFBb0osT0FBT21FLENBQVA7QUFDcEosWUFBSUksQ0FBQyxHQUFHLENBQUosRUFBT0osQ0FBWCxFQUFjVSxFQUFFLEdBQUcsQ0FBQ0EsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVQsRUFBWVYsQ0FBQyxDQUFDdkcsS0FBZCxDQUFMOztBQUNkLGdCQUFRaUgsRUFBRSxDQUFDLENBQUQsQ0FBVjtBQUNJLGVBQUssQ0FBTDtBQUFRLGVBQUssQ0FBTDtBQUFRVixZQUFBQSxDQUFDLEdBQUdVLEVBQUo7QUFBUTs7QUFDeEIsZUFBSyxDQUFMO0FBQVFiLFlBQUFBLENBQUMsQ0FBQ0MsS0FBRjtBQUFXLG1CQUFPO0FBQUVyRyxjQUFBQSxLQUFLLEVBQUVpSCxFQUFFLENBQUMsQ0FBRCxDQUFYO0FBQWdCN0UsY0FBQUEsSUFBSSxFQUFFO0FBQXRCLGFBQVA7O0FBQ25CLGVBQUssQ0FBTDtBQUFRZ0UsWUFBQUEsQ0FBQyxDQUFDQyxLQUFGO0FBQVdNLFlBQUFBLENBQUMsR0FBR00sRUFBRSxDQUFDLENBQUQsQ0FBTjtBQUFXQSxZQUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFELENBQUw7QUFBVTs7QUFDeEMsZUFBSyxDQUFMO0FBQVFBLFlBQUFBLEVBQUUsR0FBR2IsQ0FBQyxDQUFDSyxHQUFGLENBQU1VLEdBQU4sRUFBTDs7QUFBa0JmLFlBQUFBLENBQUMsQ0FBQ0ksSUFBRixDQUFPVyxHQUFQOztBQUFjOztBQUN4QztBQUNJLGdCQUFJLEVBQUVaLENBQUMsR0FBR0gsQ0FBQyxDQUFDSSxJQUFOLEVBQVlELENBQUMsR0FBR0EsQ0FBQyxDQUFDYSxNQUFGLEdBQVcsQ0FBWCxJQUFnQmIsQ0FBQyxDQUFDQSxDQUFDLENBQUNhLE1BQUYsR0FBVyxDQUFaLENBQW5DLE1BQXVESCxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixJQUFlQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBaEYsQ0FBSixFQUF3RjtBQUFFYixjQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUFPO0FBQVc7O0FBQzVHLGdCQUFJYSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixLQUFnQixDQUFDVixDQUFELElBQU9VLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUVYsQ0FBQyxDQUFDLENBQUQsQ0FBVCxJQUFnQlUsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVixDQUFDLENBQUMsQ0FBRCxDQUFoRCxDQUFKLEVBQTJEO0FBQUVILGNBQUFBLENBQUMsQ0FBQ0MsS0FBRixHQUFVWSxFQUFFLENBQUMsQ0FBRCxDQUFaO0FBQWlCO0FBQVE7O0FBQ3RGLGdCQUFJQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEtBQVUsQ0FBVixJQUFlYixDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBOUIsRUFBbUM7QUFBRUgsY0FBQUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVVFLENBQUMsQ0FBQyxDQUFELENBQVg7QUFBZ0JBLGNBQUFBLENBQUMsR0FBR1UsRUFBSjtBQUFRO0FBQVE7O0FBQ3JFLGdCQUFJVixDQUFDLElBQUlILENBQUMsQ0FBQ0MsS0FBRixHQUFVRSxDQUFDLENBQUMsQ0FBRCxDQUFwQixFQUF5QjtBQUFFSCxjQUFBQSxDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBWDs7QUFBZ0JILGNBQUFBLENBQUMsQ0FBQ0ssR0FBRixDQUFNWSxJQUFOLENBQVdKLEVBQVg7O0FBQWdCO0FBQVE7O0FBQ25FLGdCQUFJVixDQUFDLENBQUMsQ0FBRCxDQUFMLEVBQVVILENBQUMsQ0FBQ0ssR0FBRixDQUFNVSxHQUFOOztBQUNWZixZQUFBQSxDQUFDLENBQUNJLElBQUYsQ0FBT1csR0FBUDs7QUFBYztBQVh0Qjs7QUFhQUYsUUFBQUEsRUFBRSxHQUFHZCxJQUFJLENBQUM1RixJQUFMLENBQVUrRSxPQUFWLEVBQW1CYyxDQUFuQixDQUFMO0FBQ0gsT0FqQlMsQ0FpQlIsT0FBT0wsQ0FBUCxFQUFVO0FBQUVrQixRQUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFELEVBQUlsQixDQUFKLENBQUw7QUFBYVksUUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFBUSxPQWpCekIsU0FpQmtDO0FBQUVELFFBQUFBLENBQUMsR0FBR0gsQ0FBQyxHQUFHLENBQVI7QUFBWTtBQWpCMUQ7O0FBa0JBLFFBQUlVLEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUSxDQUFaLEVBQWUsTUFBTUEsRUFBRSxDQUFDLENBQUQsQ0FBUjtBQUFhLFdBQU87QUFBRWpILE1BQUFBLEtBQUssRUFBRWlILEVBQUUsQ0FBQyxDQUFELENBQUYsR0FBUUEsRUFBRSxDQUFDLENBQUQsQ0FBVixHQUFnQixLQUFLLENBQTlCO0FBQWlDN0UsTUFBQUEsSUFBSSxFQUFFO0FBQXZDLEtBQVA7QUFDL0I7QUFDSixDQTFCRDs7QUEyQkEsSUFBSTVCLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLHVGQUFELENBQTdCOztBQUNBLElBQUlJLE9BQU8sR0FBR2QsWUFBWSxDQUFDVSxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBMUI7O0FBQ0EsSUFBSWdWLElBQUksR0FBR2hWLG1CQUFPLENBQUMsa0VBQUQsQ0FBbEI7O0FBQ0EsSUFBSThWLFVBQVUsR0FBR2pXLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxnRkFBRCxDQUFSLENBQWhDOztBQUNBLElBQUkrVixJQUFJLEdBQUcvVixtQkFBTyxDQUFDLGtFQUFELENBQWxCOztBQUNBLElBQUlRLGVBQWUsR0FBR1IsbUJBQU8sQ0FBQyxvRUFBRCxDQUE3Qjs7QUFDQSxJQUFJd1gsU0FBUyxHQUFHM1gsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLGdEQUFELENBQVIsQ0FBL0IsRUFDQTs7O0FBQ0EsU0FBU2dXLGFBQVQsQ0FBdUJqVixFQUF2QixFQUEyQjtBQUN2QixNQUFJMFcsS0FBSyxHQUFHLElBQVo7O0FBQ0EsTUFBSXRELGVBQWUsR0FBR3BULEVBQUUsQ0FBQ29ULGVBQXpCO0FBQUEsTUFBMENGLFNBQVMsR0FBR2xULEVBQUUsQ0FBQ2tULFNBQXpEO0FBQ0EsTUFBSTdDLFFBQVEsR0FBRyxDQUFDLEdBQUduUixlQUFlLENBQUNvUixPQUFwQixJQUErQkMsS0FBL0IsQ0FBcUNGLFFBQXBEOztBQUNBLE1BQUlwUSxFQUFFLEdBQUcsQ0FBQyxHQUFHUixlQUFlLENBQUNrWCxVQUFwQixHQUFUO0FBQUEsTUFBNENDLFlBQVksR0FBRzNXLEVBQUUsQ0FBQzJXLFlBQTlEO0FBQUEsTUFBNEVDLGVBQWUsR0FBRzVXLEVBQUUsQ0FBQzRXLGVBQWpHO0FBQUEsTUFBa0huSSxJQUFJLEdBQUd6TyxFQUFFLENBQUN5TyxJQUE1SDs7QUFDQSxNQUFJb0ksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFZO0FBQUUsV0FBT25ULFNBQVMsQ0FBQytTLEtBQUQsRUFBUSxLQUFLLENBQWIsRUFBZ0IsS0FBSyxDQUFyQixFQUF3QixZQUFZO0FBQ3BGLGFBQU9sUyxXQUFXLENBQUMsSUFBRCxFQUFPLFVBQVV4RSxFQUFWLEVBQWM7QUFDbkMsZ0JBQVFBLEVBQUUsQ0FBQzJFLEtBQVg7QUFDSSxlQUFLLENBQUw7QUFDSSxnQkFBSSxDQUFDLENBQUNrUyxlQUFOLEVBQXVCLE9BQU8sQ0FBQztBQUFFO0FBQUgsY0FBYyxDQUFkLENBQVA7QUFDdkIsbUJBQU8sQ0FBQztBQUFFO0FBQUgsY0FBY0QsWUFBWSxDQUFDO0FBQUVHLGNBQUFBLFFBQVEsRUFBRTtBQUFaLGFBQUQsQ0FBWixDQUNaeFQsSUFEWSxDQUNQLFVBQVVtTCxJQUFWLEVBQWdCO0FBQ3RCbEgsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlpSCxJQUFJLENBQUN2USxHQUFMLENBQVMsWUFBVCxDQUFaO0FBQ0gsYUFIZ0IsRUFHZCxPQUhjLEVBR0wsVUFBVTZZLEtBQVYsRUFBaUI7QUFDekJ4UCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXVQLEtBQVo7QUFDSCxhQUxnQixDQUFkLENBQVA7O0FBTUosZUFBSyxDQUFMO0FBQ0loWCxZQUFBQSxFQUFFLENBQUM0RSxJQUFIOztBQUNBNUUsWUFBQUEsRUFBRSxDQUFDMkUsS0FBSCxHQUFXLENBQVg7O0FBQ0osZUFBSyxDQUFMO0FBQVEsbUJBQU8sQ0FBQztBQUFFO0FBQUgsYUFBUDtBQVpaO0FBY0gsT0FmaUIsQ0FBbEI7QUFnQkgsS0FqQm1ELENBQWhCO0FBaUIvQixHQWpCTDs7QUFrQkEsTUFBSXNTLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFBRSxXQUFPdFQsU0FBUyxDQUFDK1MsS0FBRCxFQUFRLEtBQUssQ0FBYixFQUFnQixLQUFLLENBQXJCLEVBQXdCLFlBQVk7QUFDaEYsYUFBT2xTLFdBQVcsQ0FBQyxJQUFELEVBQU8sVUFBVXhFLEVBQVYsRUFBYztBQUNuQyxZQUFJNlcsZUFBSixFQUFxQjtBQUNqQkosVUFBQUEsU0FBUyxDQUFDLFNBQUQsQ0FBVCxDQUFxQlMsSUFBckIsQ0FBMEJDLE1BQTFCLEdBQW1DNVQsSUFBbkMsQ0FBd0MsWUFBWTtBQUNoRDtBQUNBcU4sWUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCbkcsSUFBaEIsR0FBdUJrRyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0J1RyxRQUF2QztBQUNILFdBSEQ7QUFJSDs7QUFDRCxlQUFPLENBQUM7QUFBRTtBQUFILFNBQVA7QUFDSCxPQVJpQixDQUFsQjtBQVNILEtBVitDLENBQWhCO0FBVTNCLEdBVkw7O0FBV0EsR0FBQyxHQUFHL1gsT0FBTyxDQUFDZ0ksU0FBWixFQUF1QixZQUFZO0FBQy9CRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ2lILElBQXBDO0FBQ0gsR0FGRCxFQUVHLENBQUNBLElBQUQsQ0FGSDtBQUdBLFNBQVFyUCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFdUMsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU3BCLElBQUFBLENBQUMsRUFBRSxNQUFaO0FBQW9Ca0IsSUFBQUEsRUFBRSxFQUFFLFNBQXhCO0FBQW1DM0IsSUFBQUEsS0FBSyxFQUFFLGdCQUExQztBQUE0RG9MLElBQUFBLFFBQVEsRUFBRSxPQUF0RTtBQUErRUosSUFBQUEsTUFBTSxFQUFFO0FBQXZGLEdBQTlDLEVBQ0poVSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMrVixTQUF6QyxFQUFvRDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFwRCxFQUNJOVYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRUMsSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FBL0MsRUFDSW5KLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ2lXLE1BQXpDLEVBQWlELElBQWpELEVBQ0kvVixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNnUyxJQUF6QyxFQUErQztBQUFFOUksSUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JnTixJQUFBQSxNQUFNLEVBQUUsU0FBMUI7QUFBcUNDLElBQUFBLEVBQUUsRUFBRSxDQUF6QztBQUE0QzVILElBQUFBLE9BQU8sRUFBRTBGLGVBQXJEO0FBQXNFbkgsSUFBQUEsRUFBRSxFQUFFaUgsU0FBUyxHQUFHOEIsSUFBSSxDQUFDTyxVQUFSLEdBQXFCUCxJQUFJLENBQUNRLFlBQTdHO0FBQTJIMU0sSUFBQUEsQ0FBQyxFQUFFLENBQTlIO0FBQWlJRyxJQUFBQSxDQUFDLEVBQUU7QUFBcEksR0FBL0MsQ0FESixFQUVJNUosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDdEQsZUFBZSxDQUFDdUwsSUFBakQsRUFBdUQ7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkQsRUFDSXJMLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3VTLFVBQVUsQ0FBQyxTQUFELENBQTNDLEVBQXdELElBQXhELENBREosQ0FGSixDQURKLEVBS0kxVixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNpVyxNQUF6QyxFQUFpRCxJQUFqRCxFQUNJL1YsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDaVYsSUFBekMsRUFBK0MsSUFBL0MsRUFBcUQsQ0FBQ3lDLGVBQUQsR0FDL0N4WCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzVyxVQUF6QyxFQUFxRDtBQUFFL0gsSUFBQUEsT0FBTyxFQUFFb0osZUFBWDtBQUE0QjdLLElBQUFBLEVBQUUsRUFBRSxRQUFoQztBQUEwQzVELElBQUFBLEtBQUssRUFBRSxPQUFqRDtBQUEwRDJCLElBQUFBLEVBQUUsRUFBRSxVQUE5RDtBQUEwRUgsSUFBQUEsR0FBRyxFQUFFO0FBQS9FLEdBQXJELEVBQXlJLGtCQUF6SSxDQUQrQyxHQUUvQ3hLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NXLFVBQXpDLEVBQXFEO0FBQUUvSCxJQUFBQSxPQUFPLEVBQUV1SixXQUFYO0FBQXdCaEwsSUFBQUEsRUFBRSxFQUFFLFFBQTVCO0FBQXNDNUQsSUFBQUEsS0FBSyxFQUFFLE9BQTdDO0FBQXNEd0IsSUFBQUEsR0FBRyxFQUFFO0FBQTNELEdBQXJELEVBQXFILHFCQUFySCxDQUZOLENBREosQ0FMSixFQVNJeEssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDaVcsTUFBekMsRUFBaUQsSUFBakQsRUFDSS9FLFFBQVEsSUFBSWhSLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ2lWLElBQXpDLEVBQStDLElBQS9DLEVBQ1IvVSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzVyxVQUF6QyxFQUFxRDtBQUFFeEosSUFBQUEsRUFBRSxFQUFFLEdBQU47QUFBV3BDLElBQUFBLEdBQUcsRUFBRTtBQUFoQixHQUFyRCxFQUNJeEssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDeVAsTUFBekMsRUFBaUQ7QUFBRTdGLElBQUFBLElBQUksRUFBRSxJQUFSO0FBQWN1TSxJQUFBQSxFQUFFLEVBQUUsQ0FBbEI7QUFBcUJsUyxJQUFBQSxJQUFJLEVBQUUsR0FBR0ksTUFBSCxDQUFVNk0sUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FBb0RBLFFBQVEsQ0FBQ3hCLFVBQXZFLEVBQW1GLEdBQW5GLEVBQXdGckwsTUFBeEYsQ0FBK0Y2TSxRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxLQUFLLEtBQUssQ0FBdkMsR0FBMkMsS0FBSyxDQUFoRCxHQUFvREEsUUFBUSxDQUFDdkIsU0FBNUosQ0FBM0I7QUFBbU1YLElBQUFBLEdBQUcsRUFBRTtBQUF4TSxHQUFqRCxDQURKLEVBQytSa0MsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FDM1JBLFFBQVEsQ0FBQ3hCLFVBRmIsRUFHSSxHQUhKLEVBR1N3QixRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxLQUFLLEtBQUssQ0FBdkMsR0FBMkMsS0FBSyxDQUFoRCxHQUNMQSxRQUFRLENBQUN2QixTQUpiLENBRFEsRUFNUnpQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3VXLFFBQXpDLEVBQW1ELElBQW5ELEVBQ0lyVyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3VyxRQUF6QyxFQUFtRCxJQUFuRCxFQUNJdFcsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDdEQsZUFBZSxDQUFDdUwsSUFBakQsRUFBdUQ7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkQsRUFDSXJMLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVvRyxJQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQjlFLElBQUFBLEdBQUcsRUFBRTtBQUF4QixHQUEvQyxFQUNJeEssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDZ1MsSUFBekMsRUFBK0M7QUFBRWxGLElBQUFBLEVBQUUsRUFBRWdJLElBQUksQ0FBQ29ELEtBQVg7QUFBa0JoUCxJQUFBQSxLQUFLLEVBQUUsV0FBekI7QUFBc0NMLElBQUFBLENBQUMsRUFBRSxDQUF6QztBQUE0Q25LLElBQUFBLENBQUMsRUFBRTtBQUEvQyxHQUEvQyxDQURKLEVBRUl3QixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFSixJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUEvQyxFQUFzRSxTQUF0RSxDQUZKLENBREosQ0FESixDQURKLEVBTUloSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3VyxRQUF6QyxFQUFtRCxJQUFuRCxFQUNJdFcsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDdEQsZUFBZSxDQUFDdUwsSUFBakQsRUFBdUQ7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBdkQsRUFDSXJMLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVvRyxJQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQjlFLElBQUFBLEdBQUcsRUFBRTtBQUF4QixHQUEvQyxFQUNJeEssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDZ1MsSUFBekMsRUFBK0M7QUFBRWxGLElBQUFBLEVBQUUsRUFBRWdJLElBQUksQ0FBQ3FELFVBQVg7QUFBdUJqUCxJQUFBQSxLQUFLLEVBQUUsV0FBOUI7QUFBMkNMLElBQUFBLENBQUMsRUFBRSxDQUE5QztBQUFpRG5LLElBQUFBLENBQUMsRUFBRTtBQUFwRCxHQUEvQyxDQURKLEVBRUl3QixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFSixJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUEvQyxFQUFzRSxpQkFBdEUsQ0FGSixDQURKLENBREosQ0FOSixFQVdJaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd1csUUFBekMsRUFBbUQsSUFBbkQsRUFDSXRXLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRSxTQUFSO0FBQW1Ca0wsSUFBQUEsTUFBTSxFQUFFLE1BQTNCO0FBQW1DM0osSUFBQUEsRUFBRSxFQUFFO0FBQXZDLEdBQXZELEVBQ0k1TSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFb0csSUFBQUEsS0FBSyxFQUFFLFFBQVQ7QUFBbUI5RSxJQUFBQSxHQUFHLEVBQUU7QUFBeEIsR0FBL0MsRUFDSXhLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ2dTLElBQXpDLEVBQStDO0FBQUVsRixJQUFBQSxFQUFFLEVBQUVnSSxJQUFJLENBQUM0QixVQUFYO0FBQXVCeE4sSUFBQUEsS0FBSyxFQUFFLFdBQTlCO0FBQTJDTCxJQUFBQSxDQUFDLEVBQUUsQ0FBOUM7QUFBaURuSyxJQUFBQSxDQUFDLEVBQUU7QUFBcEQsR0FBL0MsQ0FESixFQUVJd0IsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRUosSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBL0MsRUFBc0UsVUFBdEUsQ0FGSixDQURKLENBREosQ0FYSixDQU5RLENBRGhCLEVBdUJJLENBQUNnSSxRQUFELElBQWFoUixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUksUUFBcEQsRUFBOEQsSUFBOUQsRUFDVHJJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3RELGVBQWUsQ0FBQ3VMLElBQWpELEVBQXVEO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXZELEVBQ0lyTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFdUMsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0QsSUFBQUEsRUFBRSxFQUFFLENBQWI7QUFBZ0I1QixJQUFBQSxLQUFLLEVBQUUsZ0JBQXZCO0FBQXlDdUMsSUFBQUEsTUFBTSxFQUFFO0FBQUVaLE1BQUFBLEVBQUUsRUFBRTtBQUFOLEtBQWpEO0FBQTJFSSxJQUFBQSxPQUFPLEVBQUU7QUFBcEYsR0FBOUMsRUFBMkksT0FBM0ksQ0FESixDQURTLEVBR1QvSyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUN0RCxlQUFlLENBQUN1TCxJQUFqRCxFQUF1RDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUF2RCxFQUNJckwsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXVDLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNELElBQUFBLEVBQUUsRUFBRSxDQUFiO0FBQWdCNUIsSUFBQUEsS0FBSyxFQUFFLGdCQUF2QjtBQUF5Q3VDLElBQUFBLE1BQU0sRUFBRTtBQUFFWixNQUFBQSxFQUFFLEVBQUU7QUFBTixLQUFqRDtBQUEyRUksSUFBQUEsT0FBTyxFQUFFO0FBQXBGLEdBQTlDLEVBQTJJLFVBQTNJLENBREosQ0FIUyxDQXZCakIsQ0FUSixDQURKLENBREksQ0FBUjtBQXVDSDs7QUFDRHJMLGtCQUFBLEdBQXFCa1csYUFBckI7Ozs7Ozs7Ozs7O0FDbEphOztBQUNiLElBQUluVyxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSXNZLGFBQWEsR0FBR3pZLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxrR0FBRCxDQUFSLENBQW5DOztBQUNBLFNBQVN1WSxPQUFULEdBQW1CO0FBQ2YsU0FBUW5ZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQytVLGFBQWEsQ0FBQyxTQUFELENBQTlDLEVBQTJELElBQTNELEVBQ0psWSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMrVixTQUF6QyxFQUFvRDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFwRCxFQUNJOVYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDLEtBQWpDLEVBQXdDLElBQXhDLEVBQThDLFNBQTlDLENBREosQ0FESSxDQUFSO0FBR0g7O0FBQ0R6RCxrQkFBQSxHQUFxQnlZLE9BQXJCOzs7Ozs7Ozs7OztBQ2JhOztBQUNiLElBQUkxWSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlDLGVBQWUsR0FBR0QsbUJBQU8sQ0FBQyx1RkFBRCxDQUE3Qjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdQLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTdCOztBQUNBLElBQUl3WSxrQkFBa0IsR0FBRzNZLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyx1SUFBRCxDQUFSLENBQXhDLEVBQ0E7OztBQUNBLElBQUl5WSxXQUFXLEdBQUc1WSxlQUFlLENBQUNHLG1CQUFPLENBQUMseUhBQUQsQ0FBUixDQUFqQzs7QUFDQSxJQUFJMFksYUFBYSxHQUFHN1ksZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHFHQUFELENBQVIsQ0FBbkMsRUFDQTs7O0FBQ0EsU0FBUzJZLFNBQVQsQ0FBbUI1WCxFQUFuQixFQUF1QjtBQUNuQixNQUFJNlgsS0FBSyxHQUFHN1gsRUFBRSxDQUFDNlgsS0FBZjtBQUNBLE1BQUl4SCxRQUFRLEdBQUcsQ0FBQyxHQUFHblIsZUFBZSxDQUFDb1IsT0FBcEIsSUFBK0JDLEtBQS9CLENBQXFDRixRQUFwRDtBQUNBLFNBQVFoUixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNtVixhQUFhLENBQUMsU0FBRCxDQUE5QyxFQUEyRCxJQUEzRCxFQUNKdFksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRW1CLElBQUFBLENBQUMsRUFBRTtBQUFMLEdBQTlDLEVBQ0l6SixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyWSxPQUF6QyxFQUFrRDtBQUFFN0wsSUFBQUEsRUFBRSxFQUFFLElBQU47QUFBWS9ELElBQUFBLFVBQVUsRUFBRSxVQUF4QjtBQUFvQ0QsSUFBQUEsUUFBUSxFQUFFO0FBQTlDLEdBQWxELEVBQTBHLFdBQTFHLENBREosRUFFSTVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0ksUUFESixFQUNjNEgsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FDVkEsUUFBUSxDQUFDeEIsVUFGYixFQUdJLDZCQUhKLENBRkosQ0FESSxFQU9KeFAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRW1CLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFpUCxJQUFBQSxFQUFFLEVBQUU7QUFBakIsR0FBOUMsRUFDSTFZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ2lWLGtCQUFrQixDQUFDLFNBQUQsQ0FBbkQsRUFBZ0UsSUFBaEUsQ0FESixDQVBJLEVBU0pwWSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFbUIsSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYWlQLElBQUFBLEVBQUUsRUFBRSxNQUFqQjtBQUF5Qi9OLElBQUFBLEVBQUUsRUFBRSxPQUE3QjtBQUFzQ0ksSUFBQUEsT0FBTyxFQUFFLElBQS9DO0FBQXFERCxJQUFBQSxNQUFNLEVBQUUsTUFBN0Q7QUFBcUVtSixJQUFBQSxFQUFFLEVBQUUsTUFBekU7QUFBaUYxTCxJQUFBQSxFQUFFLEVBQUUsTUFBckY7QUFBNkZxQyxJQUFBQSxFQUFFLEVBQUU7QUFBakcsR0FBOUMsRUFDSTVLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJZLE9BQXpDLEVBQWtEO0FBQUVqUSxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsS0FBbkI7QUFBMEJDLElBQUFBLFVBQVUsRUFBRTtBQUF0QyxHQUFsRCxFQUFzRyxzQkFBdEcsQ0FESixFQUVJN0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDa1YsV0FBVyxDQUFDLFNBQUQsQ0FBNUMsRUFBeUQ7QUFBRWpKLElBQUFBLFFBQVEsRUFBRW9KO0FBQVosR0FBekQsQ0FGSixDQVRJLENBQVI7QUFZSDs7QUFDRDlZLGtCQUFBLEdBQXFCNlksU0FBckI7Ozs7Ozs7Ozs7O0FDN0JhOztBQUNiLElBQUk5WSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSTBZLGFBQWEsR0FBRzdZLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxxR0FBRCxDQUFSLENBQW5DOztBQUNBLFNBQVMrWSxXQUFULEdBQXVCO0FBQ25CLFNBQVEzWSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNtVixhQUFhLENBQUMsU0FBRCxDQUE5QyxFQUEyRCxJQUEzRCxFQUNKdFksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEMsSUFBOUMsRUFDSXRJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJZLE9BQXpDLEVBQWtEO0FBQUU3TCxJQUFBQSxFQUFFLEVBQUUsSUFBTjtBQUFZL0QsSUFBQUEsVUFBVSxFQUFFLFVBQXhCO0FBQW9DRCxJQUFBQSxRQUFRLEVBQUU7QUFBOUMsR0FBbEQsRUFBMEcsY0FBMUcsQ0FESixDQURJLEVBR0o1SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFb1EsSUFBQUEsRUFBRSxFQUFFLE9BQU47QUFBZWpQLElBQUFBLENBQUMsRUFBRSxNQUFsQjtBQUEwQjZLLElBQUFBLElBQUksRUFBRSxPQUFoQztBQUF5QzNKLElBQUFBLEVBQUUsRUFBRSxPQUE3QztBQUFzREksSUFBQUEsT0FBTyxFQUFFLE1BQS9EO0FBQXVFRCxJQUFBQSxNQUFNLEVBQUU7QUFBL0UsR0FBOUMsQ0FISSxDQUFSO0FBSUg7O0FBQ0RwTCxrQkFBQSxHQUFxQmlaLFdBQXJCOzs7Ozs7Ozs7OztBQ2RhOztBQUNiLElBQUlsWixlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSWdaLGtCQUFrQixHQUFHblosZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHVJQUFELENBQVIsQ0FBeEM7O0FBQ0EsSUFBSXlZLFdBQVcsR0FBRzVZLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyx5SEFBRCxDQUFSLENBQWpDOztBQUNBLElBQUkwWSxhQUFhLEdBQUc3WSxlQUFlLENBQUNHLG1CQUFPLENBQUMscUdBQUQsQ0FBUixDQUFuQyxFQUNBOzs7QUFDQSxTQUFTaVosWUFBVCxDQUFzQmxZLEVBQXRCLEVBQTBCO0FBQ3RCLE1BQUk2WCxLQUFLLEdBQUc3WCxFQUFFLENBQUM2WCxLQUFmO0FBQ0EsU0FBUXhZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ21WLGFBQWEsQ0FBQyxTQUFELENBQTlDLEVBQTJELElBQTNELEVBQ0p0WSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFbUIsSUFBQUEsQ0FBQyxFQUFFO0FBQUwsR0FBOUMsRUFDSXpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJZLE9BQXpDLEVBQWtEO0FBQUU3TCxJQUFBQSxFQUFFLEVBQUUsSUFBTjtBQUFZL0QsSUFBQUEsVUFBVSxFQUFFLFVBQXhCO0FBQW9DRCxJQUFBQSxRQUFRLEVBQUU7QUFBOUMsR0FBbEQsRUFBMEcscUJBQTFHLENBREosQ0FESSxFQUdKNUksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRW9RLElBQUFBLEVBQUUsRUFBRSxNQUFOO0FBQWNqUCxJQUFBQSxDQUFDLEVBQUU7QUFBakIsR0FBOUMsRUFDSXpKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3lWLGtCQUFrQixDQUFDLFNBQUQsQ0FBbkQsRUFBZ0UsSUFBaEUsQ0FESixDQUhJLEVBS0o1WSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFbUIsSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYWlQLElBQUFBLEVBQUUsRUFBRSxNQUFqQjtBQUF5Qi9OLElBQUFBLEVBQUUsRUFBRSxPQUE3QjtBQUFzQ0ksSUFBQUEsT0FBTyxFQUFFLElBQS9DO0FBQXFERCxJQUFBQSxNQUFNLEVBQUUsTUFBN0Q7QUFBcUVtSixJQUFBQSxFQUFFLEVBQUUsTUFBekU7QUFBaUYxTCxJQUFBQSxFQUFFLEVBQUUsTUFBckY7QUFBNkZxQyxJQUFBQSxFQUFFLEVBQUU7QUFBakcsR0FBOUMsRUFDSTVLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJZLE9BQXpDLEVBQWtEO0FBQUVqUSxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsS0FBbkI7QUFBMEJDLElBQUFBLFVBQVUsRUFBRTtBQUF0QyxHQUFsRCxFQUFzRyxzQkFBdEcsQ0FESixFQUVJN0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRVosSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU1EsSUFBQUEsS0FBSyxFQUFFO0FBQWhCLEdBQS9DLEVBQTZFLGlHQUE3RSxDQUZKLEVBR0loSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNrVixXQUFXLENBQUMsU0FBRCxDQUE1QyxFQUF5RDtBQUFFakosSUFBQUEsUUFBUSxFQUFFb0o7QUFBWixHQUF6RCxDQUhKLENBTEksQ0FBUjtBQVNIOztBQUNEOVksa0JBQUEsR0FBcUJtWixZQUFyQjs7Ozs7Ozs7Ozs7QUN2QmE7O0FBQ2IsSUFBSXBaLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxJQUFJMFksYUFBYSxHQUFHN1ksZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHdHQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSWtaLGFBQWEsR0FBR3JaLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxrSUFBRCxDQUFSLENBQW5DOztBQUNBLFNBQVNtWixLQUFULENBQWVwWSxFQUFmLEVBQW1CO0FBQ2YsTUFBSXdMLFFBQVEsR0FBR3hMLEVBQUUsQ0FBQ3dMLFFBQWxCO0FBQ0EsU0FBUW5NLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ21WLGFBQWEsQ0FBQyxTQUFELENBQTlDLEVBQTJELElBQTNELEVBQ0p0WSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QyxJQUE5QyxFQUNJdEksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMlksT0FBekMsRUFBa0Q7QUFBRTdMLElBQUFBLEVBQUUsRUFBRSxJQUFOO0FBQVkvRCxJQUFBQSxVQUFVLEVBQUUsVUFBeEI7QUFBb0NELElBQUFBLFFBQVEsRUFBRTtBQUE5QyxHQUFsRCxFQUEwRyxVQUExRyxDQURKLENBREksRUFHSjVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVtQixJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhaVAsSUFBQUEsRUFBRSxFQUFFLE1BQWpCO0FBQXlCL04sSUFBQUEsRUFBRSxFQUFFLE9BQTdCO0FBQXNDSSxJQUFBQSxPQUFPLEVBQUUsSUFBL0M7QUFBcURELElBQUFBLE1BQU0sRUFBRSxNQUE3RDtBQUFxRW1KLElBQUFBLEVBQUUsRUFBRSxNQUF6RTtBQUFpRjFMLElBQUFBLEVBQUUsRUFBRSxNQUFyRjtBQUE2RnFDLElBQUFBLEVBQUUsRUFBRTtBQUFqRyxHQUE5QyxFQUNJNUssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMlksT0FBekMsRUFBa0Q7QUFBRWpRLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxLQUFuQjtBQUEwQkMsSUFBQUEsVUFBVSxFQUFFO0FBQXRDLEdBQWxELEVBQXNHLGtCQUF0RyxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUMyVixhQUFhLENBQUMsU0FBRCxDQUE5QyxFQUEyRDtBQUFFM00sSUFBQUEsUUFBUSxFQUFFQTtBQUFaLEdBQTNELENBRkosQ0FISSxDQUFSO0FBTUg7O0FBQ0R6TSxrQkFBQSxHQUFxQnFaLEtBQXJCOzs7Ozs7Ozs7OztBQ2xCYTs7QUFDYixJQUFJcE4sUUFBUSxHQUFJLFFBQVEsS0FBS0EsUUFBZCxJQUEyQixZQUFZO0FBQ2xEQSxFQUFBQSxRQUFRLEdBQUd0TixNQUFNLENBQUN1TixNQUFQLElBQWlCLFVBQVNwRyxDQUFULEVBQVk7QUFDcEMsU0FBSyxJQUFJcUcsQ0FBSixFQUFPQyxDQUFDLEdBQUcsQ0FBWCxFQUFjN0YsQ0FBQyxHQUFHOEYsU0FBUyxDQUFDMUYsTUFBakMsRUFBeUN5RixDQUFDLEdBQUc3RixDQUE3QyxFQUFnRDZGLENBQUMsRUFBakQsRUFBcUQ7QUFDakRELE1BQUFBLENBQUMsR0FBR0UsU0FBUyxDQUFDRCxDQUFELENBQWI7O0FBQ0EsV0FBSyxJQUFJbkQsQ0FBVCxJQUFja0QsQ0FBZDtBQUFpQixZQUFJeE4sTUFBTSxDQUFDaUIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDcU0sQ0FBckMsRUFBd0NsRCxDQUF4QyxDQUFKLEVBQ2JuRCxDQUFDLENBQUNtRCxDQUFELENBQUQsR0FBT2tELENBQUMsQ0FBQ2xELENBQUQsQ0FBUjtBQURKO0FBRUg7O0FBQ0QsV0FBT25ELENBQVA7QUFDSCxHQVBEOztBQVFBLFNBQU9tRyxRQUFRLENBQUN6RyxLQUFULENBQWUsSUFBZixFQUFxQjZHLFNBQXJCLENBQVA7QUFDSCxDQVZEOztBQVdBLElBQUl0TSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHTCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxJQUFJMFksYUFBYSxHQUFHN1ksZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHdHQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUksT0FBTyxHQUFHSixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlDLGVBQWUsR0FBR0QsbUJBQU8sQ0FBQyx1RkFBRCxDQUE3Qjs7QUFDQSxJQUFJSyxPQUFPLEdBQUdMLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSU8sU0FBUyxHQUFHUCxtQkFBTyxDQUFDLDJFQUFELENBQXZCOztBQUNBLFNBQVNvWixNQUFULEdBQWtCO0FBQ2QsTUFBSXJZLEVBQUUsR0FBRyxDQUFDLEdBQUdkLGVBQWUsQ0FBQ29aLE9BQXBCLEVBQTZCO0FBQ2xDbFYsSUFBQUEsSUFBSSxFQUFFLEVBRDRCO0FBRWxDaUwsSUFBQUEsS0FBSyxFQUFFLEVBRjJCO0FBR2xDa0ssSUFBQUEsT0FBTyxFQUFFO0FBSHlCLEdBQTdCLENBQVQ7QUFBQSxNQUlJdFIsSUFBSSxHQUFHakgsRUFBRSxDQUFDaUgsSUFKZDtBQUFBLE1BSW9CdVIsT0FBTyxHQUFHeFksRUFBRSxDQUFDd1ksT0FKakM7QUFBQSxNQUkwQ0MsVUFBVSxHQUFHelksRUFBRSxDQUFDeVksVUFKMUQ7O0FBS0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBWTtBQUMzQmxaLElBQUFBLFNBQVMsQ0FBQ0csT0FBVixDQUFrQm1NLElBQWxCLENBQXVCLHNCQUF2QixFQUErQzdFLElBQS9DO0FBQ0gsR0FGRDs7QUFHQSxTQUFROUgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbVYsYUFBYSxDQUFDLFNBQUQsQ0FBOUMsRUFBMkQsSUFBM0QsRUFDSnhZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ25ELE9BQU8sQ0FBQ3NJLEdBQXpDLEVBQThDLElBQTlDLEVBQ0l4SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUN5WSxPQUF6QyxFQUFrRDtBQUFFN0wsSUFBQUEsRUFBRSxFQUFFLElBQU47QUFBWS9ELElBQUFBLFVBQVUsRUFBRSxVQUF4QjtBQUFvQ0QsSUFBQUEsUUFBUSxFQUFFO0FBQTlDLEdBQWxELEVBQTBHLGdCQUExRyxDQURKLENBREksRUFHSjlJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ25ELE9BQU8sQ0FBQ3NJLEdBQXpDLEVBQThDO0FBQUVtQixJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhaVAsSUFBQUEsRUFBRSxFQUFFLE1BQWpCO0FBQXlCL04sSUFBQUEsRUFBRSxFQUFFLE9BQTdCO0FBQXNDSSxJQUFBQSxPQUFPLEVBQUUsSUFBL0M7QUFBcURELElBQUFBLE1BQU0sRUFBRSxNQUE3RDtBQUFxRW1KLElBQUFBLEVBQUUsRUFBRSxNQUF6RTtBQUFpRjFMLElBQUFBLEVBQUUsRUFBRSxNQUFyRjtBQUE2RnFDLElBQUFBLEVBQUUsRUFBRTtBQUFqRyxHQUE5QyxFQUNJOUssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbkQsT0FBTyxDQUFDeVksT0FBekMsRUFBa0Q7QUFBRWpRLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxLQUFuQjtBQUEwQkMsSUFBQUEsVUFBVSxFQUFFO0FBQXRDLEdBQWxELEVBQXNHLGdCQUF0RyxDQURKLEVBRUkvSSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNuRCxPQUFPLENBQUNzSSxHQUF6QyxFQUE4QztBQUFFdUMsSUFBQUEsRUFBRSxFQUFFO0FBQU4sR0FBOUMsRUFDSS9LLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ25ELE9BQU8sQ0FBQ3NaLFVBQXpDLEVBQXFEO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXQyxNQUFBQSxFQUFFLEVBQUU7QUFBZixLQUFYO0FBQStCdk8sSUFBQUEsT0FBTyxFQUFFO0FBQXhDLEdBQXJELEVBQ0lwTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNsRCxPQUFPLENBQUN5WixXQUF6QyxFQUFzRCxJQUF0RCxFQUNJNVosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbEQsT0FBTyxDQUFDMFosU0FBekMsRUFBb0Q7QUFBRUMsSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FBcEQsRUFBaUYsY0FBakYsQ0FESixFQUVJOVosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbkQsT0FBTyxDQUFDeUMsS0FBekMsRUFBZ0Q7QUFBRThHLElBQUFBLFFBQVEsRUFBRSxrQkFBVXZFLENBQVYsRUFBYTtBQUFFLGFBQU9tVSxPQUFPLENBQUN4TixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFELEVBQUsvRCxJQUFMLENBQVQsRUFBcUI7QUFBRTdELFFBQUFBLElBQUksRUFBRWlCLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQWpCLE9BQXJCLENBQVQsQ0FBZDtBQUF5RSxLQUFwRztBQUFzR0EsSUFBQUEsS0FBSyxFQUFFMkksSUFBSSxDQUFDN0QsSUFBbEg7QUFBd0h3RCxJQUFBQSxFQUFFLEVBQUUsY0FBNUg7QUFBNEl1QyxJQUFBQSxJQUFJLEVBQUUsTUFBbEo7QUFBMEo4SCxJQUFBQSxXQUFXLEVBQUU7QUFBdkssR0FBaEQsQ0FGSixDQURKLEVBSUk5UixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNsRCxPQUFPLENBQUN5WixXQUF6QyxFQUFzRCxJQUF0RCxFQUNJNVosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbEQsT0FBTyxDQUFDMFosU0FBekMsRUFBb0Q7QUFBRUMsSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FBcEQsRUFBa0YsZUFBbEYsQ0FESixFQUVJOVosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbkQsT0FBTyxDQUFDeUMsS0FBekMsRUFBZ0Q7QUFBRThHLElBQUFBLFFBQVEsRUFBRSxrQkFBVXZFLENBQVYsRUFBYTtBQUFFLGFBQU9tVSxPQUFPLENBQUN4TixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFELEVBQUsvRCxJQUFMLENBQVQsRUFBcUI7QUFBRW9ILFFBQUFBLEtBQUssRUFBRWhLLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQWxCLE9BQXJCLENBQVQsQ0FBZDtBQUEwRSxLQUFyRztBQUF1R0EsSUFBQUEsS0FBSyxFQUFFMkksSUFBSSxDQUFDb0gsS0FBbkg7QUFBMEh6SCxJQUFBQSxFQUFFLEVBQUUsZUFBOUg7QUFBK0l1QyxJQUFBQSxJQUFJLEVBQUUsUUFBcko7QUFBK0o4SCxJQUFBQSxXQUFXLEVBQUU7QUFBNUssR0FBaEQsQ0FGSixDQUpKLENBREosRUFRSTlSLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ2xELE9BQU8sQ0FBQ3laLFdBQXpDLEVBQXNEO0FBQUVoQixJQUFBQSxFQUFFLEVBQUU7QUFBTixHQUF0RCxFQUNJNVksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbEQsT0FBTyxDQUFDMFosU0FBekMsRUFBb0Q7QUFBRUMsSUFBQUEsT0FBTyxFQUFFO0FBQVgsR0FBcEQsRUFBaUYsaUJBQWpGLENBREosRUFFSTlaLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ25ELE9BQU8sQ0FBQ3lDLEtBQXpDLEVBQWdEO0FBQUU4RyxJQUFBQSxRQUFRLEVBQUUsa0JBQVV2RSxDQUFWLEVBQWE7QUFBRSxhQUFPbVUsT0FBTyxDQUFDeE4sUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLL0QsSUFBTCxDQUFULEVBQXFCO0FBQUVzUixRQUFBQSxPQUFPLEVBQUVsVSxDQUFDLENBQUN3RSxNQUFGLENBQVN2SztBQUFwQixPQUFyQixDQUFULENBQWQ7QUFBNEUsS0FBdkc7QUFBeUdBLElBQUFBLEtBQUssRUFBRTJJLElBQUksQ0FBQ3NSLE9BQXJIO0FBQThIdE0sSUFBQUEsRUFBRSxFQUFFLFVBQWxJO0FBQThJMEgsSUFBQUEsSUFBSSxFQUFFLEdBQXBKO0FBQXlKMUMsSUFBQUEsV0FBVyxFQUFFO0FBQXRLLEdBQWhELENBRkosQ0FSSixFQVdJOVIsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbkQsT0FBTyxDQUFDbU8sTUFBekMsRUFBaUQ7QUFBRUUsSUFBQUEsT0FBTyxFQUFFZ0wsWUFBWDtBQUF5QmpMLElBQUFBLFdBQVcsRUFBRSxPQUF0QztBQUErQ3NLLElBQUFBLEVBQUUsRUFBRTtBQUFuRCxHQUFqRCxFQUF5RyxnQkFBekcsQ0FYSixDQUZKLENBSEksQ0FBUjtBQWlCSDs7QUFDRGhaLGtCQUFBLEdBQXFCc1osTUFBckI7Ozs7Ozs7Ozs7O0FDakRhOztBQUNiLElBQUl2WixlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHTCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxJQUFJMFksYUFBYSxHQUFHN1ksZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHdHQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUksT0FBTyxHQUFHSixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlpYSxhQUFhLEdBQUdwYSxlQUFlLENBQUNHLG1CQUFPLENBQUMsZ0lBQUQsQ0FBUixDQUFuQzs7QUFDQSxTQUFTa2EsSUFBVCxDQUFjblosRUFBZCxFQUFrQjtBQUNkLE1BQUlnTyxRQUFRLEdBQUdoTyxFQUFFLENBQUNnTyxRQUFsQjtBQUNBLFNBQVE3TyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUNtVixhQUFhLENBQUMsU0FBRCxDQUE5QyxFQUEyRCxJQUEzRCxFQUNKeFksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDbkQsT0FBTyxDQUFDc0ksR0FBekMsRUFBOEMsSUFBOUMsRUFDSXhJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQ25ELE9BQU8sQ0FBQ3lZLE9BQXpDLEVBQWtEO0FBQUU3TCxJQUFBQSxFQUFFLEVBQUUsSUFBTjtBQUFZL0QsSUFBQUEsVUFBVSxFQUFFLFVBQXhCO0FBQW9DRCxJQUFBQSxRQUFRLEVBQUU7QUFBOUMsR0FBbEQsRUFBMEcsY0FBMUcsQ0FESixDQURJLEVBR0o5SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CcUQsYUFBbkIsQ0FBaUMwVyxhQUFhLENBQUMsU0FBRCxDQUE5QyxFQUEyRDtBQUFFbEwsSUFBQUEsUUFBUSxFQUFFQTtBQUFaLEdBQTNELENBSEksQ0FBUjtBQUlIOztBQUNEalAsa0JBQUEsR0FBcUJvYSxJQUFyQjs7Ozs7Ozs7Ozs7QUNoQmE7O0FBQ2IsSUFBSTFiLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsS0FBbUNDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDNUYsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJKLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUJHLEVBQXpCLEVBQTZCO0FBQUVHLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CQyxJQUFBQSxHQUFHLEVBQUUsZUFBVztBQUFFLGFBQU9OLENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQWM7QUFBcEQsR0FBN0I7QUFDSCxDQUh3RCxHQUduRCxVQUFTRixDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDeEIsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJGLEVBQUFBLENBQUMsQ0FBQ0csRUFBRCxDQUFELEdBQVFGLENBQUMsQ0FBQ0MsQ0FBRCxDQUFUO0FBQ0gsQ0FOcUIsQ0FBdEI7O0FBT0EsSUFBSU0sa0JBQWtCLEdBQUksUUFBUSxLQUFLQSxrQkFBZCxLQUFzQ1YsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQzNGWCxFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCLFNBQXpCLEVBQW9DO0FBQUVNLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CSSxJQUFBQSxLQUFLLEVBQUVEO0FBQTNCLEdBQXBDO0FBQ0gsQ0FGOEQsR0FFMUQsVUFBU1QsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDaEJULEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsR0FBZVMsQ0FBZjtBQUNILENBSndCLENBQXpCOztBQUtBLElBQUlFLFlBQVksR0FBSSxRQUFRLEtBQUtBLFlBQWQsSUFBK0IsVUFBVUMsR0FBVixFQUFlO0FBQzdELE1BQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFmLEVBQTJCLE9BQU9ELEdBQVA7QUFDM0IsTUFBSUUsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJRixHQUFHLElBQUksSUFBWCxFQUFpQixLQUFLLElBQUlWLENBQVQsSUFBY1UsR0FBZDtBQUFtQixRQUFJVixDQUFDLEtBQUssU0FBTixJQUFtQkosTUFBTSxDQUFDaUIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxHQUFyQyxFQUEwQ1YsQ0FBMUMsQ0FBdkIsRUFBcUVMLGVBQWUsQ0FBQ2lCLE1BQUQsRUFBU0YsR0FBVCxFQUFjVixDQUFkLENBQWY7QUFBeEY7O0FBQ2pCTSxFQUFBQSxrQkFBa0IsQ0FBQ00sTUFBRCxFQUFTRixHQUFULENBQWxCOztBQUNBLFNBQU9FLE1BQVA7QUFDSCxDQU5EOztBQU9BLElBQUlJLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSTZPLFFBQVEsR0FBR2hQLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQywrQ0FBRCxDQUFSLENBQTlCOztBQUNBLElBQUlJLE9BQU8sR0FBR2QsWUFBWSxDQUFDVSxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBMUI7O0FBQ0EsSUFBSW1hLG1CQUFtQixHQUFHbmEsbUJBQU8sQ0FBQyxnRkFBRCxDQUFqQzs7QUFDQSxJQUFJb2EsV0FBVyxHQUFHdmEsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHVIQUFELENBQVIsQ0FBakM7O0FBQ0EsSUFBSTBZLGFBQWEsR0FBRzdZLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxxR0FBRCxDQUFSLENBQW5DOztBQUNBLElBQUlxYSxzQkFBc0IsR0FBR3JhLG1CQUFPLENBQUMsa0ZBQUQsQ0FBcEM7O0FBQ0EsSUFBSXNhLHNCQUFzQixHQUFHdGEsbUJBQU8sQ0FBQyxrRkFBRCxDQUFwQzs7QUFDQSxJQUFJK1UsSUFBSSxHQUFHL1UsbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQjs7QUFDQSxJQUFJTyxTQUFTLEdBQUdQLG1CQUFPLENBQUMsMkVBQUQsQ0FBdkI7O0FBQ0EsU0FBU2lZLElBQVQsQ0FBY2xYLEVBQWQsRUFBa0I7QUFDZCxNQUFJQyxFQUFKLEVBQVFtRyxFQUFSOztBQUNBLE1BQUlzTCxVQUFVLEdBQUcxUixFQUFFLENBQUMwUixVQUFwQjtBQUFBLE1BQWdDOEgsTUFBTSxHQUFHeFosRUFBRSxDQUFDd1osTUFBNUM7QUFBQSxNQUFvRDlLLElBQUksR0FBRzFPLEVBQUUsQ0FBQzBPLElBQTlEO0FBQUEsTUFBb0UrSyxlQUFlLEdBQUd6WixFQUFFLENBQUN5WixlQUF6RjtBQUFBLE1BQTBHak8sUUFBUSxHQUFHeEwsRUFBRSxDQUFDd0wsUUFBeEg7O0FBQ0EsTUFBSWpGLEVBQUUsR0FBRyxDQUFDLEdBQUdwSCxPQUFPLENBQUN1YSxhQUFaLEdBQVQ7QUFBQSxNQUF1Q0MsTUFBTSxHQUFHcFQsRUFBRSxDQUFDb1QsTUFBbkQ7QUFBQSxNQUEyREMsTUFBTSxHQUFHclQsRUFBRSxDQUFDcVQsTUFBdkU7QUFBQSxNQUErRUMsT0FBTyxHQUFHdFQsRUFBRSxDQUFDc1QsT0FBNUYsQ0FIYyxDQUlkOzs7QUFDQSxNQUFJQyxNQUFNLEdBQUcsQ0FBQyxHQUFHVixtQkFBbUIsQ0FBQ1csbUJBQXhCLEdBQWI7O0FBQ0EsTUFBSTdTLEVBQUUsR0FBRyxDQUFDLEdBQUc3SCxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLEVBQXRCLENBQVQ7QUFBQSxNQUFvQ2lVLFlBQVksR0FBRzlTLEVBQUUsQ0FBQyxDQUFELENBQXJEO0FBQUEsTUFBMEQrUyxlQUFlLEdBQUcvUyxFQUFFLENBQUMsQ0FBRCxDQUE5RTs7QUFDQSxNQUFJZ1QsR0FBRyxHQUFHLENBQUMsR0FBRzdhLE9BQU8sQ0FBQzhhLFNBQVosR0FBVjs7QUFDQSxNQUFJQyxFQUFFLEdBQUcsQ0FBQyxHQUFHZCxzQkFBc0IsQ0FBQ2UsYUFBM0IsRUFBMEM7QUFDL0NsUixJQUFBQSxJQUFJLEVBQUUsWUFEeUM7QUFFL0NtUixJQUFBQSxPQUFPLEVBQUU7QUFGc0MsR0FBMUMsQ0FBVDtBQUFBLE1BR0lDLGNBQWMsR0FBR0gsRUFBRSxDQUFDLENBQUQsQ0FIdkI7O0FBSUEsTUFBSUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBVXBNLEtBQVYsRUFBaUJwTyxFQUFqQixFQUFxQjtBQUNoQyxRQUFJQyxFQUFFLEdBQUdELEVBQUUsS0FBSyxLQUFLLENBQVosR0FBZ0IsRUFBaEIsR0FBcUJBLEVBQTlCO0FBQUEsUUFBa0NvRyxFQUFFLEdBQUduRyxFQUFFLENBQUNtRCxJQUExQztBQUFBLFFBQWdEQSxJQUFJLEdBQUdnRCxFQUFFLEtBQUssS0FBSyxDQUFaLEdBQWdCLFdBQWhCLEdBQThCQSxFQUFyRjtBQUFBLFFBQXlGRyxFQUFFLEdBQUd0RyxFQUFFLENBQUN3YSxTQUFqRztBQUFBLFFBQTRHQSxTQUFTLEdBQUdsVSxFQUFFLEtBQUssS0FBSyxDQUFaLEdBQWdCLEtBQWhCLEdBQXdCQSxFQUFoSjs7QUFDQSxRQUFJbVUsQ0FBQyxHQUFHclksUUFBUSxDQUFDRyxhQUFULENBQXVCLEdBQXZCLENBQVI7QUFDQWtZLElBQUFBLENBQUMsQ0FBQ2hRLElBQUYsR0FBUzBELEtBQVQ7QUFDQXNNLElBQUFBLENBQUMsQ0FBQ0YsUUFBRixHQUFhLENBQUMsR0FBR2pCLHNCQUFzQixDQUFDb0IsY0FBM0IsRUFBMkNGLFNBQTNDLEVBQXNEclgsSUFBdEQsQ0FBYjtBQUNBc1gsSUFBQUEsQ0FBQyxDQUFDRSxLQUFGO0FBQ0E7QUFDSCxHQVBEOztBQVFBLE1BQUlDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBWTtBQUFFLFdBQU9OLGNBQWMsQ0FBQ0wsR0FBRyxDQUFDWSxPQUFMLENBQWQsQ0FBNEJ2WCxJQUE1QixDQUFpQ2lYLFFBQWpDLENBQVA7QUFBb0QsR0FBM0Y7O0FBQ0EsR0FBQyxHQUFHbmIsT0FBTyxDQUFDZ0ksU0FBWixFQUF1QixZQUFZO0FBQy9CRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCcVMsTUFBNUI7QUFDSCxHQUZELEVBRUcsQ0FBQ0EsTUFBRCxDQUZIOztBQUdBLE1BQUlpQixFQUFFLEdBQUcsQ0FBQyxHQUFHMWIsT0FBTyxDQUFDMEcsUUFBWixFQUFzQixLQUF0QixDQUFUO0FBQUEsTUFBdUMwTCxVQUFVLEdBQUdzSixFQUFFLENBQUMsQ0FBRCxDQUF0RDtBQUFBLE1BQTJEQyxhQUFhLEdBQUdELEVBQUUsQ0FBQyxDQUFELENBQTdFOztBQUNBLE1BQUlFLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBWTtBQUMvQixRQUFJakIsWUFBWSxJQUFJLElBQXBCLEVBQ0ksT0FBT2tCLEtBQUssQ0FBQywwQ0FBRCxDQUFaO0FBQ0oxYixJQUFBQSxTQUFTLENBQUNHLE9BQVYsQ0FBa0JtTSxJQUFsQixDQUF1Qix5QkFBdkIsRUFBa0Q7QUFBRWtPLE1BQUFBLFlBQVksRUFBRUEsWUFBaEI7QUFBOEJtQixNQUFBQSxNQUFNLEVBQUV6TSxJQUFJLENBQUM5SDtBQUEzQyxLQUFsRDtBQUNBaVQsSUFBQUEsT0FBTztBQUNWLEdBTEQ7O0FBTUEsU0FBUXhhLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ21WLGFBQWEsQ0FBQyxTQUFELENBQTlDLEVBQTJELElBQTNELEVBQ0p0WSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QyxJQUE5QyxFQUNJdEksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMlksT0FBekMsRUFBa0Q7QUFBRTdMLElBQUFBLEVBQUUsRUFBRSxJQUFOO0FBQVkvRCxJQUFBQSxVQUFVLEVBQUUsVUFBeEI7QUFBb0NELElBQUFBLFFBQVEsRUFBRTtBQUE5QyxHQUFsRCxFQUEwRyxjQUExRyxDQURKLENBREksRUFHSjVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVGLElBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCd0IsSUFBQUEsR0FBRyxFQUFFLENBQTFCO0FBQTZCa08sSUFBQUEsRUFBRSxFQUFFO0FBQWpDLEdBQS9DLEVBQ0kxWSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFcUgsSUFBQUEsTUFBTSxFQUFFLE9BQVY7QUFBbUJ3TCxJQUFBQSxJQUFJLEVBQUUsR0FBekI7QUFBOEI1UyxJQUFBQSxPQUFPLEVBQUUsUUFBdkM7QUFBaURnQyxJQUFBQSxTQUFTLEVBQUUsUUFBNUQ7QUFBc0VoQixJQUFBQSxVQUFVLEVBQUUsUUFBbEY7QUFBNEZ4QixJQUFBQSxDQUFDLEVBQUUsQ0FBL0Y7QUFBa0dnQyxJQUFBQSxFQUFFLEVBQUU7QUFBdEcsR0FBL0MsRUFDSTNLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3lQLE1BQXpDLEVBQWlEO0FBQUU3RixJQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlbEIsSUFBQUEsRUFBRSxFQUFFLENBQW5CO0FBQXNCekUsSUFBQUEsSUFBSSxFQUFFLEdBQUdJLE1BQUgsQ0FBVWtMLElBQUksQ0FBQ0csVUFBZixFQUEyQixHQUEzQixFQUFnQ3JMLE1BQWhDLENBQXVDa0wsSUFBSSxDQUFDSSxTQUE1QyxDQUE1QjtBQUFvRlgsSUFBQUEsR0FBRyxFQUFFO0FBQXpGLEdBQWpELENBREosRUFFSTlPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUV3RCxJQUFBQSxFQUFFLEVBQUUsSUFBTjtBQUFZaEUsSUFBQUEsUUFBUSxFQUFFO0FBQXRCLEdBQS9DLEVBQThFLEdBQUd6RSxNQUFILENBQVVrTCxJQUFJLENBQUNHLFVBQWYsRUFBMkIsR0FBM0IsRUFBZ0NyTCxNQUFoQyxDQUF1Q2tMLElBQUksQ0FBQ0ksU0FBNUMsQ0FBOUUsQ0FGSixDQURKLEVBSUl6UCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFeVQsSUFBQUEsSUFBSSxFQUFFLEdBQVI7QUFBYWxSLElBQUFBLEVBQUUsRUFBRSxDQUFqQjtBQUFvQkQsSUFBQUEsRUFBRSxFQUFFLENBQXhCO0FBQTJCRCxJQUFBQSxFQUFFLEVBQUU7QUFBL0IsR0FBOUMsRUFDSTNLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUV3RCxJQUFBQSxFQUFFLEVBQUUsSUFBTjtBQUFZaEUsSUFBQUEsUUFBUSxFQUFFLElBQXRCO0FBQTRCQyxJQUFBQSxVQUFVLEVBQUU7QUFBeEMsR0FBL0MsRUFBaUcsY0FBakcsQ0FESixFQUVJN0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRW1CLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFpUCxJQUFBQSxFQUFFLEVBQUU7QUFBakIsR0FBOUMsRUFDSTFZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVPLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFXLElBQUFBLGNBQWMsRUFBRSxlQUE3QjtBQUE4Q3pCLElBQUFBLENBQUMsRUFBRSxDQUFqRDtBQUFvREYsSUFBQUEsWUFBWSxFQUFFO0FBQWxFLEdBQS9DLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFUCxJQUFBQSxVQUFVLEVBQUU7QUFBZCxHQUEvQyxFQUEyRSxXQUEzRSxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUFxRCxDQUFDLEdBQUdxRixRQUFRLENBQUMsU0FBRCxDQUFaLEVBQXlCWSxJQUFJLENBQUMyTSxTQUE5QixFQUF5QzlNLE1BQXpDLENBQWdELEdBQWhELENBQXJELENBRkosQ0FESixFQUlJbFAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRU8sSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYVcsSUFBQUEsY0FBYyxFQUFFLGVBQTdCO0FBQThDekIsSUFBQUEsQ0FBQyxFQUFFLENBQWpEO0FBQW9ERixJQUFBQSxZQUFZLEVBQUU7QUFBbEUsR0FBL0MsRUFDSXpJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVQLElBQUFBLFVBQVUsRUFBRTtBQUFkLEdBQS9DLEVBQTJFLE1BQTNFLENBREosRUFFSTdJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQXFELEdBQUdqRixNQUFILENBQVVrTCxJQUFJLENBQUNHLFVBQWYsRUFBMkIsR0FBM0IsRUFBZ0NyTCxNQUFoQyxDQUF1Q2tMLElBQUksQ0FBQ0ksU0FBNUMsQ0FBckQsQ0FGSixDQUpKLEVBT0l6UCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVyxJQUFBQSxjQUFjLEVBQUUsZUFBN0I7QUFBOENrRixJQUFBQSxLQUFLLEVBQUUsUUFBckQ7QUFBK0QzRyxJQUFBQSxDQUFDLEVBQUUsQ0FBbEU7QUFBcUVGLElBQUFBLFlBQVksRUFBRTtBQUFuRixHQUEvQyxFQUNJekksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRVAsSUFBQUEsVUFBVSxFQUFFO0FBQWQsR0FBL0MsRUFBMkUsT0FBM0UsQ0FESixFQUVJN0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFBcURpRyxJQUFJLENBQUM0TSxLQUExRCxDQUZKLENBUEosQ0FGSixDQUpKLEVBZ0JJamMsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXlULElBQUFBLElBQUksRUFBRSxHQUFSO0FBQWFsUixJQUFBQSxFQUFFLEVBQUUsQ0FBakI7QUFBb0JELElBQUFBLEVBQUUsRUFBRSxDQUF4QjtBQUEyQkQsSUFBQUEsRUFBRSxFQUFFO0FBQS9CLEdBQTlDLEVBQ0kzSyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFd0QsSUFBQUEsRUFBRSxFQUFFLElBQU47QUFBWWhFLElBQUFBLFFBQVEsRUFBRSxJQUF0QjtBQUE0QkMsSUFBQUEsVUFBVSxFQUFFO0FBQXhDLEdBQS9DLEVBQWlHLFNBQWpHLENBREosRUFFSTdJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVtQixJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhaVAsSUFBQUEsRUFBRSxFQUFFO0FBQWpCLEdBQTlDLEVBQ0kxWSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVyxJQUFBQSxjQUFjLEVBQUUsZUFBN0I7QUFBOEN6QixJQUFBQSxDQUFDLEVBQUUsQ0FBakQ7QUFBb0RGLElBQUFBLFlBQVksRUFBRTtBQUFsRSxHQUEvQyxFQUNJekksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRVAsSUFBQUEsVUFBVSxFQUFFO0FBQWQsR0FBL0MsRUFBMkUsa0JBQTNFLENBREosRUFFSTdJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0lnUixlQURKLEVBRUksVUFGSixDQUZKLENBREosRUFNSXBhLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVPLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFXLElBQUFBLGNBQWMsRUFBRSxlQUE3QjtBQUE4Q2tGLElBQUFBLEtBQUssRUFBRSxRQUFyRDtBQUErRDNHLElBQUFBLENBQUMsRUFBRSxDQUFsRTtBQUFxRUYsSUFBQUEsWUFBWSxFQUFFO0FBQW5GLEdBQS9DLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFUCxJQUFBQSxVQUFVLEVBQUU7QUFBZCxHQUEvQyxFQUEyRSxNQUEzRSxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvYyxLQUF6QyxFQUFnRDtBQUFFOU4sSUFBQUEsV0FBVyxFQUFFLFFBQWY7QUFBeUJyQixJQUFBQSxPQUFPLEVBQUU7QUFBbEMsR0FBaEQsRUFBNkZzQyxJQUFJLFdBQUosV0FBN0YsQ0FGSixDQU5KLENBRkosRUFXSXJQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVtQixJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhaVAsSUFBQUEsRUFBRSxFQUFFO0FBQWpCLEdBQTlDLEVBQ0kxWSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVyxJQUFBQSxjQUFjLEVBQUU7QUFBN0IsR0FBL0MsRUFDSXBLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3FPLE1BQXpDLEVBQWlEO0FBQUVFLElBQUFBLE9BQU8sRUFBRWtNLE1BQVg7QUFBbUJuTSxJQUFBQSxXQUFXLEVBQUUsTUFBaEM7QUFBd0NyQixJQUFBQSxPQUFPLEVBQUU7QUFBakQsR0FBakQsRUFBNkcsYUFBN0csQ0FESixFQUVJL00sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDcWMsS0FBekMsRUFBZ0Q7QUFBRTdCLElBQUFBLE1BQU0sRUFBRUEsTUFBVjtBQUFrQkUsSUFBQUEsT0FBTyxFQUFFQTtBQUEzQixHQUFoRCxFQUNJeGEsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc2MsWUFBekMsRUFBdUQsSUFBdkQsQ0FESixFQUVJcGMsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDdWMsWUFBekMsRUFBdUQ7QUFBRTNELElBQUFBLEVBQUUsRUFBRTtBQUFOLEdBQXZELEVBQ0kxWSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3YyxXQUF6QyxFQUFzRCxJQUF0RCxFQUE0RCxhQUE1RCxDQURKLEVBRUl0YyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN5YyxnQkFBekMsRUFBMkQsSUFBM0QsQ0FGSixFQUdJdmMsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMGMsU0FBekMsRUFBb0QsSUFBcEQsRUFDSSw0SEFESixFQUVJeGMsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXVDLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNELElBQUFBLEVBQUUsRUFBRTtBQUFiLEdBQTlDLEVBQ0k1SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMrQyxNQUF6QyxFQUFpRDtBQUFFMEcsSUFBQUEsUUFBUSxFQUFFLGtCQUFVdkUsQ0FBVixFQUFhO0FBQUUsYUFBTzRWLGVBQWUsQ0FBQzVWLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLLEtBQVYsQ0FBdEI7QUFBeUMsS0FBcEU7QUFBc0UyUyxJQUFBQSxXQUFXLEVBQUU7QUFBbkYsR0FBakQsRUFBcUp6RixRQUFRLENBQUNrQixHQUFULENBQWEsVUFBVWQsR0FBVixFQUFlZSxLQUFmLEVBQXNCO0FBQ3BMLFdBQU90TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUMsUUFBakMsRUFBMkM7QUFBRXNaLE1BQUFBLFFBQVEsRUFBRXBOLElBQUksV0FBSixDQUFhOUgsRUFBYixJQUFtQmdGLEdBQUcsQ0FBQ2hGLEVBQXZCLEdBQTRCLElBQTVCLEdBQW1DLEtBQS9DO0FBQXNEZ0csTUFBQUEsR0FBRyxFQUFFRCxLQUEzRDtBQUFrRXJPLE1BQUFBLEtBQUssRUFBRXNOLEdBQUcsQ0FBQ2hGO0FBQTdFLEtBQTNDLEVBQThIZ0YsR0FBRyxXQUFqSSxDQUFQO0FBQ0gsR0FGb0osQ0FBckosQ0FESixDQUZKLENBSEosRUFTSXZNLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRjLFdBQXpDLEVBQXNELElBQXRELEVBQ0kxYyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNxTyxNQUF6QyxFQUFpRDtBQUFFcEIsSUFBQUEsT0FBTyxFQUFFLE9BQVg7QUFBb0JrSixJQUFBQSxFQUFFLEVBQUUsQ0FBeEI7QUFBMkI1SCxJQUFBQSxPQUFPLEVBQUVtTTtBQUFwQyxHQUFqRCxFQUFnRyxPQUFoRyxDQURKLEVBRUl4YSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNxTyxNQUF6QyxFQUFpRDtBQUFFRSxJQUFBQSxPQUFPLEVBQUV1TixnQkFBWDtBQUE2QjdPLElBQUFBLE9BQU8sRUFBRSxPQUF0QztBQUErQ3FCLElBQUFBLFdBQVcsRUFBRTtBQUE1RCxHQUFqRCxFQUF1SCxnQkFBdkgsQ0FGSixDQVRKLENBRkosQ0FGSixDQURKLENBWEosQ0FoQkosQ0FISSxFQStDSnBPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVvUSxJQUFBQSxFQUFFLEVBQUUsTUFBTjtBQUFjL1AsSUFBQUEsQ0FBQyxFQUFFLENBQWpCO0FBQW9CYyxJQUFBQSxDQUFDLEVBQUUsTUFBdkI7QUFBK0I2SyxJQUFBQSxJQUFJLEVBQUUsT0FBckM7QUFBOEMzSixJQUFBQSxFQUFFLEVBQUUsT0FBbEQ7QUFBMkRJLElBQUFBLE9BQU8sRUFBRSxNQUFwRTtBQUE0RUQsSUFBQUEsTUFBTSxFQUFFO0FBQXBGLEdBQTlDLEVBQ0k5SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QyxJQUE5QyxFQUNJdEksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMlksT0FBekMsRUFBa0Q7QUFBRTdMLElBQUFBLEVBQUUsRUFBRSxJQUFOO0FBQVkvRCxJQUFBQSxVQUFVLEVBQUUsVUFBeEI7QUFBb0NELElBQUFBLFFBQVEsRUFBRTtBQUE5QyxHQUFsRCxFQUEwRyxjQUExRyxDQURKLENBREosRUFHSTVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUV5VCxJQUFBQSxJQUFJLEVBQUUsR0FBUjtBQUFhbFIsSUFBQUEsRUFBRSxFQUFFLENBQWpCO0FBQW9CRixJQUFBQSxFQUFFLEVBQUU7QUFBeEIsR0FBOUMsRUFDSTNLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVtQixJQUFBQSxDQUFDLEVBQUU7QUFBTCxHQUE5QyxFQUNJekosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRU8sSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYVcsSUFBQUEsY0FBYyxFQUFFLGVBQTdCO0FBQThDUSxJQUFBQSxFQUFFLEVBQUUsQ0FBbEQ7QUFBcURDLElBQUFBLEVBQUUsRUFBRSxLQUF6RDtBQUFnRXBDLElBQUFBLFlBQVksRUFBRTtBQUE5RSxHQUEvQyxFQUNJekksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFBcUQsV0FBckQsQ0FESixFQUVJcEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFDSStRLE1BQU0sQ0FBQ3dDLFFBRFgsRUFFSSxXQUZKLENBRkosRUFLSTNjLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0ksR0FESixFQUVJaUcsSUFBSSxXQUFKLENBQWEzQixTQUZqQixFQUdJLFdBSEosQ0FMSixDQURKLEVBVUkxTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVyxJQUFBQSxjQUFjLEVBQUUsZUFBN0I7QUFBOENRLElBQUFBLEVBQUUsRUFBRSxDQUFsRDtBQUFxREMsSUFBQUEsRUFBRSxFQUFFLEtBQXpEO0FBQWdFcEMsSUFBQUEsWUFBWSxFQUFFO0FBQTlFLEdBQS9DLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUFxRCxXQUFyRCxDQURKLEVBRUlwSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUNJK1EsTUFBTSxDQUFDeUMsUUFEWCxFQUVJLFVBRkosQ0FGSixFQUtJNWMsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFDSSxHQURKLEVBRUlpRyxJQUFJLFdBQUosQ0FBYTFCLFNBRmpCLEVBR0ksV0FISixDQUxKLENBVkosRUFtQkkzTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVyxJQUFBQSxjQUFjLEVBQUUsZUFBN0I7QUFBOENRLElBQUFBLEVBQUUsRUFBRSxDQUFsRDtBQUFxREMsSUFBQUEsRUFBRSxFQUFFLEtBQXpEO0FBQWdFcEMsSUFBQUEsWUFBWSxFQUFFO0FBQTlFLEdBQS9DLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUFxRCxhQUFyRCxDQURKLEVBRUlwSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUNJK1EsTUFBTSxDQUFDMEMsVUFEWCxFQUVJLFVBRkosQ0FGSixFQUtJN2MsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFDSSxHQURKLEVBRUlpRyxJQUFJLFdBQUosQ0FBYXpCLFdBRmpCLEVBR0ksV0FISixDQUxKLENBbkJKLEVBNEJJNU4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRU8sSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYVcsSUFBQUEsY0FBYyxFQUFFLGVBQTdCO0FBQThDUSxJQUFBQSxFQUFFLEVBQUUsQ0FBbEQ7QUFBcURDLElBQUFBLEVBQUUsRUFBRSxLQUF6RDtBQUFnRXBDLElBQUFBLFlBQVksRUFBRTtBQUE5RSxHQUEvQyxFQUNJekksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFBcUQsWUFBckQsQ0FESixFQUVJcEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFDSStRLE1BQU0sQ0FBQzJDLFNBRFgsRUFFSSxVQUZKLENBRkosRUFLSTljLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0lpRyxJQUFJLFdBQUosQ0FBYXhCLFVBRGpCLEVBRUksV0FGSixDQUxKLENBNUJKLEVBb0NJN04sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRU8sSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYVcsSUFBQUEsY0FBYyxFQUFFLGVBQTdCO0FBQThDUSxJQUFBQSxFQUFFLEVBQUUsQ0FBbEQ7QUFBcURDLElBQUFBLEVBQUUsRUFBRSxLQUF6RDtBQUFnRXBDLElBQUFBLFlBQVksRUFBRTtBQUE5RSxHQUEvQyxFQUNJekksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFBcUQsWUFBckQsQ0FESixFQUVJcEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFDSStRLE1BQU0sQ0FBQzRDLFNBRFgsRUFFSSxVQUZKLENBRkosRUFLSS9jLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0ksR0FESixFQUVJaUcsSUFBSSxXQUFKLENBQWF2QixVQUZqQixFQUdJLFdBSEosQ0FMSixDQXBDSixFQTZDSTlOLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVPLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFXLElBQUFBLGNBQWMsRUFBRSxlQUE3QjtBQUE4Q1EsSUFBQUEsRUFBRSxFQUFFLENBQWxEO0FBQXFEQyxJQUFBQSxFQUFFLEVBQUUsS0FBekQ7QUFBZ0VwQyxJQUFBQSxZQUFZLEVBQUU7QUFBOUUsR0FBL0MsRUFDSXpJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQXFELFdBQXJELENBREosRUFFSXBKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0krUSxNQUFNLENBQUM2QyxRQURYLEVBRUksVUFGSixDQUZKLEVBS0loZCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUNJLEdBREosRUFFSWlHLElBQUksV0FBSixDQUFhdEIsU0FGakIsRUFHSSxXQUhKLENBTEosQ0E3Q0osRUFzREkvTixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVyxJQUFBQSxjQUFjLEVBQUUsZUFBN0I7QUFBOENRLElBQUFBLEVBQUUsRUFBRSxDQUFsRDtBQUFxREMsSUFBQUEsRUFBRSxFQUFFO0FBQXpELEdBQS9DLEVBQ0k3SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUFxRCxhQUFyRCxDQURKLEVBRUlwSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUNJK1EsTUFBTSxDQUFDOEMsVUFEWCxFQUVJLFVBRkosQ0FGSixFQUtJamQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFDSSxHQURKLEVBRUlpRyxJQUFJLFdBQUosQ0FBYXJCLFdBRmpCLEVBR0ksV0FISixDQUxKLENBdERKLENBREosQ0FISixDQS9DSSxFQWtISmhPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzRXLG1CQUFtQixDQUFDbUQsVUFBckQsRUFBaUU7QUFBRUMsSUFBQUEsTUFBTSxFQUFFMUM7QUFBVixHQUFqRSxFQUNJemEsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXVDLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNELElBQUFBLEVBQUUsRUFBRSxDQUFiO0FBQWdCRCxJQUFBQSxFQUFFLEVBQUUsT0FBcEI7QUFBNkIrTixJQUFBQSxFQUFFLEVBQUU7QUFBakMsR0FBOUMsRUFDSTFZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDLElBQS9DLEVBQ0lsSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0WixXQUF6QyxFQUFzRDtBQUFFek8sSUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJkLElBQUFBLFVBQVUsRUFBRTtBQUEvQixHQUF0RCxFQUNJbkssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNlosU0FBekMsRUFBb0Q7QUFBRUMsSUFBQUEsT0FBTyxFQUFFLGNBQVg7QUFBMkJwUixJQUFBQSxFQUFFLEVBQUU7QUFBL0IsR0FBcEQsRUFBMEYsZ0JBQTFGLENBREosRUFFSXhJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NkLE1BQXpDLEVBQWlEO0FBQUU3VCxJQUFBQSxRQUFRLEVBQUUsb0JBQVk7QUFBRSxhQUFPb1MsYUFBYSxDQUFDLENBQUN2SixVQUFGLENBQXBCO0FBQW9DLEtBQTlEO0FBQWdFN0ssSUFBQUEsRUFBRSxFQUFFO0FBQXBFLEdBQWpELENBRkosQ0FESixFQUlJdkgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDZ1MsSUFBekMsRUFBK0M7QUFBRWxKLElBQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9CcU4sSUFBQUEsRUFBRSxFQUFFLENBQXhCO0FBQTJCRCxJQUFBQSxNQUFNLEVBQUUsU0FBbkM7QUFBOEMzSCxJQUFBQSxPQUFPLEVBQUVtTixrQkFBdkQ7QUFBMkU1TyxJQUFBQSxFQUFFLEVBQUUrSCxJQUFJLENBQUMwSTtBQUFwRixHQUEvQyxDQUpKLEVBS0k1QyxNQUFNLENBQUM2QyxNQUFQLElBQWlCLEtBQWpCLEdBQ010ZCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNnUyxJQUF6QyxFQUErQztBQUFFbEosSUFBQUEsUUFBUSxFQUFFLE1BQVo7QUFBb0JvTixJQUFBQSxNQUFNLEVBQUUsU0FBNUI7QUFBdUMzSCxJQUFBQSxPQUFPLEVBQUVvTSxNQUFNLENBQUM4QyxLQUF2RDtBQUE4RDNRLElBQUFBLEVBQUUsRUFBRStILElBQUksQ0FBQzZJO0FBQXZFLEdBQS9DLENBRE4sR0FFTXhkLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ2dTLElBQXpDLEVBQStDO0FBQUVsSixJQUFBQSxRQUFRLEVBQUUsTUFBWjtBQUFvQm9OLElBQUFBLE1BQU0sRUFBRSxTQUE1QjtBQUF1QzNILElBQUFBLE9BQU8sRUFBRW9NLE1BQU0sQ0FBQ2dELElBQXZEO0FBQTZEN1EsSUFBQUEsRUFBRSxFQUFFK0gsSUFBSSxDQUFDK0k7QUFBdEUsR0FBL0MsQ0FQVixDQURKLENBREosRUFVSTFkLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUU4TCxJQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3QjVNLElBQUFBLEtBQUssRUFBRSxNQUEvQjtBQUF1Q21XLElBQUFBLFNBQVMsRUFBRSxDQUFDLENBQUMvYyxFQUFFLEdBQUd5UixVQUFVLEtBQUssSUFBZixJQUF1QkEsVUFBVSxLQUFLLEtBQUssQ0FBM0MsR0FBK0MsS0FBSyxDQUFwRCxHQUF3REEsVUFBVSxDQUFDekMsUUFBekUsTUFBdUYsSUFBdkYsSUFBK0ZoUCxFQUFFLEtBQUssS0FBSyxDQUEzRyxHQUErRyxLQUFLLENBQXBILEdBQXdIQSxFQUFFLENBQUN5RixNQUE1SCxJQUFzSSxPQUF0SSxHQUFnSixPQUFsTTtBQUEyTXNFLElBQUFBLEVBQUUsRUFBRSxPQUEvTTtBQUF3TkksSUFBQUEsT0FBTyxFQUFFLE1BQWpPO0FBQXlPRCxJQUFBQSxNQUFNLEVBQUUsTUFBalA7QUFBeVBvSixJQUFBQSxRQUFRLEVBQUU7QUFBblEsR0FBOUMsRUFDSWxVLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUU4TCxJQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3QnlHLElBQUFBLEdBQUcsRUFBRUE7QUFBN0IsR0FBOUMsRUFBa0YsQ0FBQyxDQUFDOVQsRUFBRSxHQUFHc0wsVUFBVSxLQUFLLElBQWYsSUFBdUJBLFVBQVUsS0FBSyxLQUFLLENBQTNDLEdBQStDLEtBQUssQ0FBcEQsR0FBd0RBLFVBQVUsQ0FBQ3pDLFFBQXpFLE1BQXVGLElBQXZGLElBQStGN0ksRUFBRSxLQUFLLEtBQUssQ0FBM0csR0FBK0csS0FBSyxDQUFwSCxHQUF3SEEsRUFBRSxDQUFDVixNQUE1SCxJQUM1RXJHLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzZXLFdBQVcsQ0FBQyxTQUFELENBQTVDLEVBQXlEO0FBQUU1SCxJQUFBQSxVQUFVLEVBQUVBLFVBQWQ7QUFBMEJDLElBQUFBLFVBQVUsRUFBRUE7QUFBdEMsR0FBekQsQ0FENEUsR0FFNUVyUyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFLFFBQWI7QUFBdUJYLElBQUFBLEdBQUcsRUFBRSxDQUE1QjtBQUErQjdCLElBQUFBLENBQUMsRUFBRTtBQUFsQyxHQUEvQyxFQUNFM0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNkosTUFBekMsRUFBaUQsSUFBakQsRUFDSTNKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVSLElBQUFBLFFBQVEsRUFBRSxJQUFaO0FBQWtCQyxJQUFBQSxVQUFVLEVBQUUsVUFBOUI7QUFBMENHLElBQUFBLEtBQUssRUFBRTtBQUFqRCxHQUEvQyxFQUE4Ryx1QkFBOUcsQ0FESixDQURGLENBRk4sQ0FESixDQVZKLENBbEhJLENBQVI7QUFrSUg7O0FBQ0R0SixrQkFBQSxHQUFxQm1ZLElBQXJCOzs7Ozs7Ozs7OztBQ3BNYTs7QUFDYixJQUFJcFksZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdQLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTdCOztBQUNBLElBQUl5WSxXQUFXLEdBQUc1WSxlQUFlLENBQUNHLG1CQUFPLENBQUMseUhBQUQsQ0FBUixDQUFqQzs7QUFDQSxJQUFJMFksYUFBYSxHQUFHN1ksZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHFHQUFELENBQVIsQ0FBbkMsRUFDQTs7O0FBQ0EsU0FBU2dlLEtBQVQsQ0FBZWpkLEVBQWYsRUFBbUI7QUFDZixNQUFJNlgsS0FBSyxHQUFHN1gsRUFBRSxDQUFDNlgsS0FBZjtBQUNBclEsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQm9RLEtBQTNCO0FBQ0EsU0FBUXhZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ21WLGFBQWEsQ0FBQyxTQUFELENBQTlDLEVBQTJELElBQTNELEVBQ0p0WSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QyxJQUE5QyxFQUNJdEksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMlksT0FBekMsRUFBa0Q7QUFBRTdMLElBQUFBLEVBQUUsRUFBRSxJQUFOO0FBQVkvRCxJQUFBQSxVQUFVLEVBQUUsVUFBeEI7QUFBb0NELElBQUFBLFFBQVEsRUFBRTtBQUE5QyxHQUFsRCxFQUEwRyxPQUExRyxDQURKLENBREksRUFHSjVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVtQixJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhaVAsSUFBQUEsRUFBRSxFQUFFLE1BQWpCO0FBQXlCL04sSUFBQUEsRUFBRSxFQUFFLE9BQTdCO0FBQXNDSSxJQUFBQSxPQUFPLEVBQUUsSUFBL0M7QUFBcURELElBQUFBLE1BQU0sRUFBRSxNQUE3RDtBQUFxRW1KLElBQUFBLEVBQUUsRUFBRSxNQUF6RTtBQUFpRjFMLElBQUFBLEVBQUUsRUFBRSxNQUFyRjtBQUE2RnFDLElBQUFBLEVBQUUsRUFBRTtBQUFqRyxHQUE5QyxFQUNJNUssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMlksT0FBekMsRUFBa0Q7QUFBRWpRLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxLQUFuQjtBQUEwQkMsSUFBQUEsVUFBVSxFQUFFO0FBQXRDLEdBQWxELEVBQXNHLHNCQUF0RyxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNrVixXQUFXLENBQUMsU0FBRCxDQUE1QyxFQUF5RDtBQUFFakosSUFBQUEsUUFBUSxFQUFFb0o7QUFBWixHQUF6RCxDQUZKLENBSEksQ0FBUjtBQU1IOztBQUNEOVksa0JBQUEsR0FBcUJrZSxLQUFyQjs7Ozs7Ozs7Ozs7QUNwQmE7O0FBQ2IsSUFBSWpTLFFBQVEsR0FBSSxRQUFRLEtBQUtBLFFBQWQsSUFBMkIsWUFBWTtBQUNsREEsRUFBQUEsUUFBUSxHQUFHdE4sTUFBTSxDQUFDdU4sTUFBUCxJQUFpQixVQUFTcEcsQ0FBVCxFQUFZO0FBQ3BDLFNBQUssSUFBSXFHLENBQUosRUFBT0MsQ0FBQyxHQUFHLENBQVgsRUFBYzdGLENBQUMsR0FBRzhGLFNBQVMsQ0FBQzFGLE1BQWpDLEVBQXlDeUYsQ0FBQyxHQUFHN0YsQ0FBN0MsRUFBZ0Q2RixDQUFDLEVBQWpELEVBQXFEO0FBQ2pERCxNQUFBQSxDQUFDLEdBQUdFLFNBQVMsQ0FBQ0QsQ0FBRCxDQUFiOztBQUNBLFdBQUssSUFBSW5ELENBQVQsSUFBY2tELENBQWQ7QUFBaUIsWUFBSXhOLE1BQU0sQ0FBQ2lCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ3FNLENBQXJDLEVBQXdDbEQsQ0FBeEMsQ0FBSixFQUNibkQsQ0FBQyxDQUFDbUQsQ0FBRCxDQUFELEdBQU9rRCxDQUFDLENBQUNsRCxDQUFELENBQVI7QUFESjtBQUVIOztBQUNELFdBQU9uRCxDQUFQO0FBQ0gsR0FQRDs7QUFRQSxTQUFPbUcsUUFBUSxDQUFDekcsS0FBVCxDQUFlLElBQWYsRUFBcUI2RyxTQUFyQixDQUFQO0FBQ0gsQ0FWRDs7QUFXQSxJQUFJdE0sZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQixFQUNBOzs7QUFDQSxJQUFJQyxlQUFlLEdBQUdELG1CQUFPLENBQUMsdUZBQUQsQ0FBN0I7O0FBQ0EsSUFBSUksT0FBTyxHQUFHUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxJQUFJaWUsWUFBWSxHQUFHcGUsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLG1HQUFELENBQVIsQ0FBbEMsRUFDQTs7O0FBQ0EsU0FBU2tlLEtBQVQsR0FBaUI7QUFDYixNQUFJQyxNQUFNLEdBQUcsQ0FBQyxHQUFHbGUsZUFBZSxDQUFDb1IsT0FBcEIsSUFBK0JDLEtBQS9CLENBQXFDNk0sTUFBbEQ7O0FBQ0EsTUFBSXBkLEVBQUUsR0FBRyxDQUFDLEdBQUdkLGVBQWUsQ0FBQ29aLE9BQXBCLEVBQTZCO0FBQ2xDZ0QsSUFBQUEsS0FBSyxFQUFFLEVBRDJCO0FBRWxDK0IsSUFBQUEsUUFBUSxFQUFFLEVBRndCO0FBR2xDQyxJQUFBQSxRQUFRLEVBQUU7QUFId0IsR0FBN0IsQ0FBVDtBQUFBLE1BSUlyVyxJQUFJLEdBQUdqSCxFQUFFLENBQUNpSCxJQUpkO0FBQUEsTUFJb0J1UixPQUFPLEdBQUd4WSxFQUFFLENBQUN3WSxPQUpqQztBQUFBLE1BSTBDMU0sSUFBSSxHQUFHOUwsRUFBRSxDQUFDOEwsSUFKcEQ7QUFBQSxNQUkwRDJNLFVBQVUsR0FBR3pZLEVBQUUsQ0FBQ3lZLFVBSjFFOztBQUtBLE1BQUk4RSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVbFosQ0FBVixFQUFhO0FBQzVCO0FBQ0FBLElBQUFBLENBQUMsQ0FBQ21aLGNBQUYsR0FGNEIsQ0FHNUI7O0FBQ0ExUixJQUFBQSxJQUFJLENBQUMsUUFBRCxFQUFXN0UsSUFBWCxDQUFKLENBSjRCLENBSzVCO0FBQ0gsR0FORDs7QUFPQSxTQUFRNUgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDMGEsWUFBWSxDQUFDLFNBQUQsQ0FBN0MsRUFBMEQsSUFBMUQsRUFDSjdkLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQytWLFNBQXpDLEVBQW9EO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXBELEVBQ0k5VixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFdUMsSUFBQUEsRUFBRSxFQUFFLEVBQU47QUFBVXVULElBQUFBLEVBQUUsRUFBRTtBQUFkLEdBQTlDLEVBQ0lwZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3WixVQUF6QyxFQUFxRDtBQUFFblAsSUFBQUEsVUFBVSxFQUFFLFFBQWQ7QUFBd0JWLElBQUFBLENBQUMsRUFBRTtBQUFFK1AsTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0I2RSxNQUFBQSxFQUFFLEVBQUUsS0FBSztBQUF6QixLQUEzQjtBQUEwRDlFLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXOEUsTUFBQUEsRUFBRSxFQUFFO0FBQWYsS0FBbkU7QUFBd0Y5VCxJQUFBQSxHQUFHLEVBQUU7QUFBRWdQLE1BQUFBLElBQUksRUFBRSxDQUFSO0FBQVc4RSxNQUFBQSxFQUFFLEVBQUU7QUFBZixLQUE3RjtBQUFrSEYsSUFBQUEsRUFBRSxFQUFFO0FBQXRILEdBQXJELEVBQ0lwZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SyxRQUF6QyxFQUFtRDtBQUFFa0csSUFBQUEsT0FBTyxFQUFFO0FBQUU0SSxNQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQjhFLE1BQUFBLEVBQUUsRUFBRTtBQUFwQixLQUFYO0FBQW9DN1QsSUFBQUEsU0FBUyxFQUFFO0FBQUUrTyxNQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQjhFLE1BQUFBLEVBQUUsRUFBRTtBQUF0QjtBQUEvQyxHQUFuRCxFQUNJdGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlNlYsRUFBaEQsRUFBb0Q7QUFBRS9WLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRTtBQUFFNFEsTUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsTUFBQUEsRUFBRSxFQUFFO0FBQW5CLEtBQW5CO0FBQStDNVEsSUFBQUEsVUFBVSxFQUFFLE1BQTNEO0FBQW1FUSxJQUFBQSxVQUFVLEVBQUU7QUFBRW1RLE1BQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxNQUFBQSxFQUFFLEVBQUU7QUFBdkIsS0FBL0U7QUFDaEQ7QUFDQXpRLElBQUFBLEtBQUssRUFBRSxVQUZ5QztBQUU3QkYsSUFBQUEsYUFBYSxFQUFFO0FBQUUwUSxNQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBQUEsRUFBRSxFQUFFO0FBQXRCO0FBRmMsR0FBcEQsRUFFeUUsZUFGekUsQ0FESixFQUlJelosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlQyxDQUFoRCxFQUFtRDtBQUFFSCxJQUFBQSxFQUFFLEVBQUU7QUFBRWdSLE1BQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLE1BQUFBLEVBQUUsRUFBRTtBQUFoQixLQUFOO0FBQTJCN1EsSUFBQUEsUUFBUSxFQUFFO0FBQUU0USxNQUFBQSxJQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFBQSxFQUFFLEVBQUU7QUFBbEIsS0FBckM7QUFBK0Q1USxJQUFBQSxVQUFVLEVBQUUsTUFBM0U7QUFBbUZHLElBQUFBLEtBQUssRUFBRSxVQUExRjtBQUFzR0YsSUFBQUEsYUFBYSxFQUFFO0FBQXJILEdBQW5ELEVBQW1MLDBMQUFuTCxDQUpKLENBREosRUFNSTlJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRLLFFBQXpDLEVBQW1EO0FBQUVrRyxJQUFBQSxPQUFPLEVBQUU7QUFBRTRJLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxNQUFBQSxFQUFFLEVBQUU7QUFBcEI7QUFBWCxHQUFuRCxFQUNJelosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXNFLElBQUFBLEVBQUUsRUFBRSxNQUFOO0FBQWMvQixJQUFBQSxFQUFFLEVBQUUsQ0FBbEI7QUFBcUJyQyxJQUFBQSxFQUFFLEVBQUUsQ0FBekI7QUFBNEJ1QyxJQUFBQSxPQUFPLEVBQUUsSUFBckM7QUFBMkNELElBQUFBLE1BQU0sRUFBRTtBQUFuRCxHQUE5QyxFQUNJOUssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNkosTUFBekMsRUFBaUQ7QUFBRXBCLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNTLElBQUFBLEtBQUssRUFBRTtBQUFoQixHQUFqRCxFQUNJaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRTZLLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNwTCxJQUFBQSxVQUFVLEVBQUUsTUFBckI7QUFBNkJELElBQUFBLFFBQVEsRUFBRTtBQUF2QyxHQUEvQyxFQUFnRyx1QkFBaEcsQ0FESixDQURKLEVBR0k1SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3WixVQUF6QyxFQUFxRDtBQUFFQyxJQUFBQSxPQUFPLEVBQUUsQ0FBWDtBQUFjM08sSUFBQUEsRUFBRSxFQUFFLENBQWxCO0FBQXFCQyxJQUFBQSxFQUFFLEVBQUUsQ0FBekI7QUFBNEJLLElBQUFBLE9BQU8sRUFBRSxDQUFyQztBQUF3Q3RKLElBQUFBLFdBQVcsRUFBRTtBQUFyRCxHQUFyRCxFQUNJNUIsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRWlDLElBQUFBLFNBQVMsRUFBRTtBQUFiLEdBQS9DLEVBQ0luTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwZSxjQUF6QyxFQUF5RCxJQUF6RCxFQUErRCxlQUEvRCxDQURKLEVBRUl4ZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyQyxLQUF6QyxFQUFnRDtBQUFFaVcsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBUzVPLElBQUFBLElBQUksRUFBRSxPQUFmO0FBQXdCOEgsSUFBQUEsV0FBVyxFQUFFLGVBQXJDO0FBQzVDO0FBQ0FySSxJQUFBQSxRQUFRLEVBQUUsa0JBQVV2RSxDQUFWLEVBQWE7QUFBRSxhQUFPbVUsT0FBTyxDQUFDeE4sUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLL0QsSUFBTCxDQUFULEVBQXFCO0FBQUVxVSxRQUFBQSxLQUFLLEVBQUVqWCxDQUFDLENBQUN3RSxNQUFGLENBQVN2SztBQUFsQixPQUFyQixDQUFULENBQWQ7QUFBMEUsS0FGdkQ7QUFFeURBLElBQUFBLEtBQUssRUFBRTJJLElBQUksQ0FBQ3FVO0FBRnJFLEdBQWhELENBRkosRUFLSSxDQUFDOEIsTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sS0FBSyxLQUFLLENBQW5DLEdBQXVDLEtBQUssQ0FBNUMsR0FBZ0RBLE1BQU0sQ0FBQzlCLEtBQXhELEtBQWtFamMsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRUosSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBL0MsRUFBcUUrVSxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDOUIsS0FBNUgsQ0FMdEUsQ0FESixFQU9JamMsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRWlDLElBQUFBLFNBQVMsRUFBRTtBQUFiLEdBQS9DLEVBQ0luTCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMwZSxjQUF6QyxFQUF5RCxJQUF6RCxFQUErRCxVQUEvRCxDQURKLEVBRUl4ZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyQyxLQUF6QyxFQUFnRDtBQUFFaVcsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBUzVPLElBQUFBLElBQUksRUFBRSxVQUFmO0FBQTJCOEgsSUFBQUEsV0FBVyxFQUFFLFVBQXhDO0FBQzVDO0FBQ0FySSxJQUFBQSxRQUFRLEVBQUUsa0JBQVV2RSxDQUFWLEVBQWE7QUFBRSxhQUFPbVUsT0FBTyxDQUFDeE4sUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLL0QsSUFBTCxDQUFULEVBQXFCO0FBQUVvVyxRQUFBQSxRQUFRLEVBQUVoWixDQUFDLENBQUN3RSxNQUFGLENBQVN2SztBQUFyQixPQUFyQixDQUFULENBQWQ7QUFBNkUsS0FGMUQ7QUFFNERBLElBQUFBLEtBQUssRUFBRTJJLElBQUksQ0FBQ29XO0FBRnhFLEdBQWhELENBRkosRUFLSSxDQUFDRCxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDQyxRQUF4RCxLQUFxRWhlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVKLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQS9DLEVBQXFFK1UsTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sS0FBSyxLQUFLLENBQW5DLEdBQXVDLEtBQUssQ0FBNUMsR0FBZ0RBLE1BQU0sQ0FBQ0MsUUFBNUgsQ0FMekUsRUFNSSxDQUFDRCxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDVSxLQUF4RCxLQUFrRXplLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVKLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQS9DLEVBQXFFK1UsTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sS0FBSyxLQUFLLENBQW5DLEdBQXVDLEtBQUssQ0FBNUMsR0FBZ0RBLE1BQU0sQ0FBQ1UsS0FBNUgsQ0FOdEUsQ0FQSixFQWNJemUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDcU8sTUFBekMsRUFBaUQ7QUFBRUUsSUFBQUEsT0FBTyxFQUFFLGlCQUFVckosQ0FBVixFQUFhO0FBQUUsYUFBT2taLFlBQVksQ0FBQ2xaLENBQUQsQ0FBbkI7QUFBeUIsS0FBbkQ7QUFBcUQwWixJQUFBQSxTQUFTLEVBQUV0RixVQUFoRTtBQUE0RXVGLElBQUFBLFdBQVcsRUFBRSxlQUF6RjtBQUEwR3ZRLElBQUFBLFdBQVcsRUFBRSxRQUF2SDtBQUFpSXJCLElBQUFBLE9BQU8sRUFBRSxPQUExSTtBQUFtSjZSLElBQUFBLGdCQUFnQixFQUFFO0FBQXJLLEdBQWpELEVBQStOLFNBQS9OLENBZEosQ0FISixDQURKLEVBbUJJNWUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlQyxDQUFoRCxFQUFtRDtBQUFFQyxJQUFBQSxRQUFRLEVBQUUsSUFBWjtBQUFrQjZCLElBQUFBLFNBQVMsRUFBRSxRQUE3QjtBQUF1Q3pCLElBQUFBLEtBQUssRUFBRTtBQUE5QyxHQUFuRCxFQUNJLGdDQURKLEVBRUksR0FGSixFQUdJaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlMlMsQ0FBaEQsRUFBbUQ7QUFBRXJTLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQW5ELEVBQTJFLGtCQUEzRSxDQUhKLENBbkJKLENBTkosQ0FESixDQURKLENBREksQ0FBUjtBQWdDSDs7QUFDRHRKLGtCQUFBLEdBQXFCb2UsS0FBckI7Ozs7Ozs7Ozs7O0FDckVhOztBQUNiLElBQUluUyxRQUFRLEdBQUksUUFBUSxLQUFLQSxRQUFkLElBQTJCLFlBQVk7QUFDbERBLEVBQUFBLFFBQVEsR0FBR3ROLE1BQU0sQ0FBQ3VOLE1BQVAsSUFBaUIsVUFBU3BHLENBQVQsRUFBWTtBQUNwQyxTQUFLLElBQUlxRyxDQUFKLEVBQU9DLENBQUMsR0FBRyxDQUFYLEVBQWM3RixDQUFDLEdBQUc4RixTQUFTLENBQUMxRixNQUFqQyxFQUF5Q3lGLENBQUMsR0FBRzdGLENBQTdDLEVBQWdENkYsQ0FBQyxFQUFqRCxFQUFxRDtBQUNqREQsTUFBQUEsQ0FBQyxHQUFHRSxTQUFTLENBQUNELENBQUQsQ0FBYjs7QUFDQSxXQUFLLElBQUluRCxDQUFULElBQWNrRCxDQUFkO0FBQWlCLFlBQUl4TixNQUFNLENBQUNpQixTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNxTSxDQUFyQyxFQUF3Q2xELENBQXhDLENBQUosRUFDYm5ELENBQUMsQ0FBQ21ELENBQUQsQ0FBRCxHQUFPa0QsQ0FBQyxDQUFDbEQsQ0FBRCxDQUFSO0FBREo7QUFFSDs7QUFDRCxXQUFPbkQsQ0FBUDtBQUNILEdBUEQ7O0FBUUEsU0FBT21HLFFBQVEsQ0FBQ3pHLEtBQVQsQ0FBZSxJQUFmLEVBQXFCNkcsU0FBckIsQ0FBUDtBQUNILENBVkQ7O0FBV0EsSUFBSXpILFNBQVMsR0FBSSxRQUFRLEtBQUtBLFNBQWQsSUFBNEIsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLENBQS9CLEVBQWtDQyxTQUFsQyxFQUE2QztBQUNyRixXQUFTQyxLQUFULENBQWUxRixLQUFmLEVBQXNCO0FBQUUsV0FBT0EsS0FBSyxZQUFZd0YsQ0FBakIsR0FBcUJ4RixLQUFyQixHQUE2QixJQUFJd0YsQ0FBSixDQUFNLFVBQVVSLE9BQVYsRUFBbUI7QUFBRUEsTUFBQUEsT0FBTyxDQUFDaEYsS0FBRCxDQUFQO0FBQWlCLEtBQTVDLENBQXBDO0FBQW9GOztBQUM1RyxTQUFPLEtBQUt3RixDQUFDLEtBQUtBLENBQUMsR0FBR1QsT0FBVCxDQUFOLEVBQXlCLFVBQVVDLE9BQVYsRUFBbUJXLE1BQW5CLEVBQTJCO0FBQ3ZELGFBQVNDLFNBQVQsQ0FBbUI1RixLQUFuQixFQUEwQjtBQUFFLFVBQUk7QUFBRTZGLFFBQUFBLElBQUksQ0FBQ0osU0FBUyxDQUFDSyxJQUFWLENBQWU5RixLQUFmLENBQUQsQ0FBSjtBQUE4QixPQUFwQyxDQUFxQyxPQUFPK0YsQ0FBUCxFQUFVO0FBQUVKLFFBQUFBLE1BQU0sQ0FBQ0ksQ0FBRCxDQUFOO0FBQVk7QUFBRTs7QUFDM0YsYUFBU0MsUUFBVCxDQUFrQmhHLEtBQWxCLEVBQXlCO0FBQUUsVUFBSTtBQUFFNkYsUUFBQUEsSUFBSSxDQUFDSixTQUFTLENBQUMsT0FBRCxDQUFULENBQW1CekYsS0FBbkIsQ0FBRCxDQUFKO0FBQWtDLE9BQXhDLENBQXlDLE9BQU8rRixDQUFQLEVBQVU7QUFBRUosUUFBQUEsTUFBTSxDQUFDSSxDQUFELENBQU47QUFBWTtBQUFFOztBQUM5RixhQUFTRixJQUFULENBQWN6RixNQUFkLEVBQXNCO0FBQUVBLE1BQUFBLE1BQU0sQ0FBQ2dDLElBQVAsR0FBYzRDLE9BQU8sQ0FBQzVFLE1BQU0sQ0FBQ0osS0FBUixDQUFyQixHQUFzQzBGLEtBQUssQ0FBQ3RGLE1BQU0sQ0FBQ0osS0FBUixDQUFMLENBQW9CaUYsSUFBcEIsQ0FBeUJXLFNBQXpCLEVBQW9DSSxRQUFwQyxDQUF0QztBQUFzRjs7QUFDOUdILElBQUFBLElBQUksQ0FBQyxDQUFDSixTQUFTLEdBQUdBLFNBQVMsQ0FBQ1EsS0FBVixDQUFnQlgsT0FBaEIsRUFBeUJDLFVBQVUsSUFBSSxFQUF2QyxDQUFiLEVBQXlETyxJQUF6RCxFQUFELENBQUo7QUFDSCxHQUxNLENBQVA7QUFNSCxDQVJEOztBQVNBLElBQUlJLFdBQVcsR0FBSSxRQUFRLEtBQUtBLFdBQWQsSUFBOEIsVUFBVVosT0FBVixFQUFtQmEsSUFBbkIsRUFBeUI7QUFDckUsTUFBSUMsQ0FBQyxHQUFHO0FBQUVDLElBQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUFFLFVBQUlDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFYLEVBQWMsTUFBTUEsQ0FBQyxDQUFDLENBQUQsQ0FBUDtBQUFZLGFBQU9BLENBQUMsQ0FBQyxDQUFELENBQVI7QUFBYyxLQUF2RTtBQUF5RUMsSUFBQUEsSUFBSSxFQUFFLEVBQS9FO0FBQW1GQyxJQUFBQSxHQUFHLEVBQUU7QUFBeEYsR0FBUjtBQUFBLE1BQXNHQyxDQUF0RztBQUFBLE1BQXlHQyxDQUF6RztBQUFBLE1BQTRHSixDQUE1RztBQUFBLE1BQStHSyxDQUEvRztBQUNBLFNBQU9BLENBQUMsR0FBRztBQUFFZCxJQUFBQSxJQUFJLEVBQUVlLElBQUksQ0FBQyxDQUFELENBQVo7QUFBaUIsYUFBU0EsSUFBSSxDQUFDLENBQUQsQ0FBOUI7QUFBbUMsY0FBVUEsSUFBSSxDQUFDLENBQUQ7QUFBakQsR0FBSixFQUE0RCxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLEtBQWlDRixDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsUUFBUixDQUFELEdBQXFCLFlBQVc7QUFBRSxXQUFPLElBQVA7QUFBYyxHQUFqRixDQUE1RCxFQUFnSkgsQ0FBdko7O0FBQ0EsV0FBU0MsSUFBVCxDQUFjRyxDQUFkLEVBQWlCO0FBQUUsV0FBTyxVQUFVakgsQ0FBVixFQUFhO0FBQUUsYUFBTzhGLElBQUksQ0FBQyxDQUFDbUIsQ0FBRCxFQUFJakgsQ0FBSixDQUFELENBQVg7QUFBc0IsS0FBNUM7QUFBK0M7O0FBQ2xFLFdBQVM4RixJQUFULENBQWNvQixFQUFkLEVBQWtCO0FBQ2QsUUFBSVAsQ0FBSixFQUFPLE1BQU0sSUFBSVEsU0FBSixDQUFjLGlDQUFkLENBQU47O0FBQ1AsV0FBT2QsQ0FBUDtBQUFVLFVBQUk7QUFDVixZQUFJTSxDQUFDLEdBQUcsQ0FBSixFQUFPQyxDQUFDLEtBQUtKLENBQUMsR0FBR1UsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVIsR0FBWU4sQ0FBQyxDQUFDLFFBQUQsQ0FBYixHQUEwQk0sRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRTixDQUFDLENBQUMsT0FBRCxDQUFELEtBQWUsQ0FBQ0osQ0FBQyxHQUFHSSxDQUFDLENBQUMsUUFBRCxDQUFOLEtBQXFCSixDQUFDLENBQUNoRyxJQUFGLENBQU9vRyxDQUFQLENBQXJCLEVBQWdDLENBQS9DLENBQVIsR0FBNERBLENBQUMsQ0FBQ2IsSUFBakcsQ0FBRCxJQUEyRyxDQUFDLENBQUNTLENBQUMsR0FBR0EsQ0FBQyxDQUFDaEcsSUFBRixDQUFPb0csQ0FBUCxFQUFVTSxFQUFFLENBQUMsQ0FBRCxDQUFaLENBQUwsRUFBdUI3RSxJQUE5SSxFQUFvSixPQUFPbUUsQ0FBUDtBQUNwSixZQUFJSSxDQUFDLEdBQUcsQ0FBSixFQUFPSixDQUFYLEVBQWNVLEVBQUUsR0FBRyxDQUFDQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVEsQ0FBVCxFQUFZVixDQUFDLENBQUN2RyxLQUFkLENBQUw7O0FBQ2QsZ0JBQVFpSCxFQUFFLENBQUMsQ0FBRCxDQUFWO0FBQ0ksZUFBSyxDQUFMO0FBQVEsZUFBSyxDQUFMO0FBQVFWLFlBQUFBLENBQUMsR0FBR1UsRUFBSjtBQUFROztBQUN4QixlQUFLLENBQUw7QUFBUWIsWUFBQUEsQ0FBQyxDQUFDQyxLQUFGO0FBQVcsbUJBQU87QUFBRXJHLGNBQUFBLEtBQUssRUFBRWlILEVBQUUsQ0FBQyxDQUFELENBQVg7QUFBZ0I3RSxjQUFBQSxJQUFJLEVBQUU7QUFBdEIsYUFBUDs7QUFDbkIsZUFBSyxDQUFMO0FBQVFnRSxZQUFBQSxDQUFDLENBQUNDLEtBQUY7QUFBV00sWUFBQUEsQ0FBQyxHQUFHTSxFQUFFLENBQUMsQ0FBRCxDQUFOO0FBQVdBLFlBQUFBLEVBQUUsR0FBRyxDQUFDLENBQUQsQ0FBTDtBQUFVOztBQUN4QyxlQUFLLENBQUw7QUFBUUEsWUFBQUEsRUFBRSxHQUFHYixDQUFDLENBQUNLLEdBQUYsQ0FBTVUsR0FBTixFQUFMOztBQUFrQmYsWUFBQUEsQ0FBQyxDQUFDSSxJQUFGLENBQU9XLEdBQVA7O0FBQWM7O0FBQ3hDO0FBQ0ksZ0JBQUksRUFBRVosQ0FBQyxHQUFHSCxDQUFDLENBQUNJLElBQU4sRUFBWUQsQ0FBQyxHQUFHQSxDQUFDLENBQUNhLE1BQUYsR0FBVyxDQUFYLElBQWdCYixDQUFDLENBQUNBLENBQUMsQ0FBQ2EsTUFBRixHQUFXLENBQVosQ0FBbkMsTUFBdURILEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxDQUFWLElBQWVBLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxDQUFoRixDQUFKLEVBQXdGO0FBQUViLGNBQUFBLENBQUMsR0FBRyxDQUFKO0FBQU87QUFBVzs7QUFDNUcsZ0JBQUlhLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxDQUFWLEtBQWdCLENBQUNWLENBQUQsSUFBT1UsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRVixDQUFDLENBQUMsQ0FBRCxDQUFULElBQWdCVSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFWLENBQUMsQ0FBQyxDQUFELENBQWhELENBQUosRUFBMkQ7QUFBRUgsY0FBQUEsQ0FBQyxDQUFDQyxLQUFGLEdBQVVZLEVBQUUsQ0FBQyxDQUFELENBQVo7QUFBaUI7QUFBUTs7QUFDdEYsZ0JBQUlBLEVBQUUsQ0FBQyxDQUFELENBQUYsS0FBVSxDQUFWLElBQWViLENBQUMsQ0FBQ0MsS0FBRixHQUFVRSxDQUFDLENBQUMsQ0FBRCxDQUE5QixFQUFtQztBQUFFSCxjQUFBQSxDQUFDLENBQUNDLEtBQUYsR0FBVUUsQ0FBQyxDQUFDLENBQUQsQ0FBWDtBQUFnQkEsY0FBQUEsQ0FBQyxHQUFHVSxFQUFKO0FBQVE7QUFBUTs7QUFDckUsZ0JBQUlWLENBQUMsSUFBSUgsQ0FBQyxDQUFDQyxLQUFGLEdBQVVFLENBQUMsQ0FBQyxDQUFELENBQXBCLEVBQXlCO0FBQUVILGNBQUFBLENBQUMsQ0FBQ0MsS0FBRixHQUFVRSxDQUFDLENBQUMsQ0FBRCxDQUFYOztBQUFnQkgsY0FBQUEsQ0FBQyxDQUFDSyxHQUFGLENBQU1ZLElBQU4sQ0FBV0osRUFBWDs7QUFBZ0I7QUFBUTs7QUFDbkUsZ0JBQUlWLENBQUMsQ0FBQyxDQUFELENBQUwsRUFBVUgsQ0FBQyxDQUFDSyxHQUFGLENBQU1VLEdBQU47O0FBQ1ZmLFlBQUFBLENBQUMsQ0FBQ0ksSUFBRixDQUFPVyxHQUFQOztBQUFjO0FBWHRCOztBQWFBRixRQUFBQSxFQUFFLEdBQUdkLElBQUksQ0FBQzVGLElBQUwsQ0FBVStFLE9BQVYsRUFBbUJjLENBQW5CLENBQUw7QUFDSCxPQWpCUyxDQWlCUixPQUFPTCxDQUFQLEVBQVU7QUFBRWtCLFFBQUFBLEVBQUUsR0FBRyxDQUFDLENBQUQsRUFBSWxCLENBQUosQ0FBTDtBQUFhWSxRQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUFRLE9BakJ6QixTQWlCa0M7QUFBRUQsUUFBQUEsQ0FBQyxHQUFHSCxDQUFDLEdBQUcsQ0FBUjtBQUFZO0FBakIxRDs7QUFrQkEsUUFBSVUsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRLENBQVosRUFBZSxNQUFNQSxFQUFFLENBQUMsQ0FBRCxDQUFSO0FBQWEsV0FBTztBQUFFakgsTUFBQUEsS0FBSyxFQUFFaUgsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRQSxFQUFFLENBQUMsQ0FBRCxDQUFWLEdBQWdCLEtBQUssQ0FBOUI7QUFBaUM3RSxNQUFBQSxJQUFJLEVBQUU7QUFBdkMsS0FBUDtBQUMvQjtBQUNKLENBMUJEOztBQTJCQSxJQUFJNUIsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR0YsbUJBQU8sQ0FBQyxxRkFBRCxDQUFyQixFQUNBOzs7QUFDQSxJQUFJQyxlQUFlLEdBQUdELG1CQUFPLENBQUMsdUZBQUQsQ0FBN0I7O0FBQ0EsSUFBSUksT0FBTyxHQUFHUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxJQUFJaWUsWUFBWSxHQUFHcGUsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLG1HQUFELENBQVIsQ0FBbEM7O0FBQ0EsSUFBSVEsZUFBZSxHQUFHUixtQkFBTyxDQUFDLG9FQUFELENBQTdCOztBQUNBLFNBQVNpZixRQUFULEdBQW9CO0FBQ2hCLE1BQUl4SCxLQUFLLEdBQUcsSUFBWjs7QUFDQSxNQUFJMVcsRUFBSjs7QUFDQSxNQUFJQyxFQUFFLEdBQUcsQ0FBQyxHQUFHZixlQUFlLENBQUNvUixPQUFwQixJQUErQkMsS0FBeEM7QUFBQSxNQUErQzZNLE1BQU0sR0FBR25kLEVBQUUsQ0FBQ21kLE1BQTNEO0FBQUEsTUFBbUVlLE9BQU8sR0FBR2xlLEVBQUUsQ0FBQ2tlLE9BQWhGO0FBQUEsTUFBeUZDLE9BQU8sR0FBR25lLEVBQUUsQ0FBQ21lLE9BQXRHOztBQUNBLE1BQUloWSxFQUFFLEdBQUcsQ0FBQyxHQUFHM0csZUFBZSxDQUFDa1gsVUFBcEIsR0FBVDtBQUFBLE1BQTRDMEgsTUFBTSxHQUFHalksRUFBRSxDQUFDaVksTUFBeEQ7QUFBQSxNQUFnRXhILGVBQWUsR0FBR3pRLEVBQUUsQ0FBQ3lRLGVBQXJGOztBQUNBLE1BQUl0USxFQUFFLEdBQUcsQ0FBQyxHQUFHckgsZUFBZSxDQUFDb1osT0FBcEIsRUFBNkI7QUFDbEN6SixJQUFBQSxVQUFVLEVBQUUsRUFEc0I7QUFFbENDLElBQUFBLFNBQVMsRUFBRSxFQUZ1QjtBQUdsQ3dNLElBQUFBLEtBQUssRUFBRSxFQUgyQjtBQUlsQ3ZNLElBQUFBLE1BQU0sRUFBRW9QLE9BQU8sSUFBSUEsT0FKZTtBQUtsQy9OLElBQUFBLE1BQU0sRUFBRWdPLE9BQU8sSUFBSUEsT0FMZTtBQU1sQ2YsSUFBQUEsUUFBUSxFQUFFLEVBTndCO0FBT2xDaUIsSUFBQUEsZUFBZSxFQUFFO0FBUGlCLEdBQTdCLENBQVQ7QUFBQSxNQVFJclgsSUFBSSxHQUFHVixFQUFFLENBQUNVLElBUmQ7QUFBQSxNQVFvQnVSLE9BQU8sR0FBR2pTLEVBQUUsQ0FBQ2lTLE9BUmpDO0FBQUEsTUFRMEMxTSxJQUFJLEdBQUd2RixFQUFFLENBQUN1RixJQVJwRDtBQUFBLE1BUTBEMk0sVUFBVSxHQUFHbFMsRUFBRSxDQUFDa1MsVUFSMUU7O0FBU0FqUixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQyxDQUFDekgsRUFBRSxHQUFHLENBQUMsR0FBR2QsZUFBZSxDQUFDb1IsT0FBcEIsSUFBK0JDLEtBQXJDLE1BQWdELElBQWhELElBQXdEdlEsRUFBRSxLQUFLLEtBQUssQ0FBcEUsR0FBd0UsS0FBSyxDQUE3RSxHQUFpRkEsRUFBRSxDQUFDb2QsTUFBckg7O0FBQ0EsTUFBSUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBVWxaLENBQVYsRUFBYTtBQUFFLFdBQU9WLFNBQVMsQ0FBQytTLEtBQUQsRUFBUSxLQUFLLENBQWIsRUFBZ0IsS0FBSyxDQUFyQixFQUF3QixZQUFZO0FBQ2xGLGFBQU9sUyxXQUFXLENBQUMsSUFBRCxFQUFPLFVBQVV4RSxFQUFWLEVBQWM7QUFDbkM7QUFDQXFFLFFBQUFBLENBQUMsQ0FBQ21aLGNBQUY7QUFDQTFSLFFBQUFBLElBQUksQ0FBQyxXQUFELEVBQWM3RSxJQUFkLENBQUo7QUFDQSxlQUFPLENBQUM7QUFBRTtBQUFILFNBQVA7QUFDSCxPQUxpQixDQUFsQjtBQU1ILEtBUGlELENBQWhCO0FBTzdCLEdBUEw7O0FBUUEsU0FBUTVILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzBhLFlBQVksQ0FBQyxTQUFELENBQTdDLEVBQTBELElBQTFELEVBQ0o3ZCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMrVixTQUF6QyxFQUFvRDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFwRCxFQUNJOVYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXVDLElBQUFBLEVBQUUsRUFBRSxFQUFOO0FBQVV1VCxJQUFBQSxFQUFFLEVBQUU7QUFBZCxHQUE5QyxFQUNJcGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd1osVUFBekMsRUFBcUQ7QUFBRW5QLElBQUFBLFVBQVUsRUFBRSxRQUFkO0FBQXdCVixJQUFBQSxDQUFDLEVBQUU7QUFBRStQLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCNkUsTUFBQUEsRUFBRSxFQUFFLEtBQUs7QUFBekIsS0FBM0I7QUFBMEQ5RSxJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBVzhFLE1BQUFBLEVBQUUsRUFBRTtBQUFmLEtBQW5FO0FBQXdGOVQsSUFBQUEsR0FBRyxFQUFFO0FBQUVnUCxNQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXOEUsTUFBQUEsRUFBRSxFQUFFO0FBQWYsS0FBN0Y7QUFBa0hGLElBQUFBLEVBQUUsRUFBRTtBQUF0SCxHQUFyRCxFQUNJcGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEssUUFBekMsRUFBbUQ7QUFBRWtHLElBQUFBLE9BQU8sRUFBRTtBQUFFNEksTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0I4RSxNQUFBQSxFQUFFLEVBQUU7QUFBcEIsS0FBWDtBQUFvQzdULElBQUFBLFNBQVMsRUFBRTtBQUFFK08sTUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0I4RSxNQUFBQSxFQUFFLEVBQUU7QUFBdEI7QUFBL0MsR0FBbkQsRUFDSXRlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZTZWLEVBQWhELEVBQW9EO0FBQUUvVixJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUU7QUFBRTRRLE1BQUFBLElBQUksRUFBRSxLQUFSO0FBQWVDLE1BQUFBLEVBQUUsRUFBRTtBQUFuQixLQUFuQjtBQUErQzVRLElBQUFBLFVBQVUsRUFBRSxNQUEzRDtBQUFtRVEsSUFBQUEsVUFBVSxFQUFFO0FBQUVtUSxNQUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQkMsTUFBQUEsRUFBRSxFQUFFO0FBQXZCLEtBQS9FO0FBQ2hEO0FBQ0F6USxJQUFBQSxLQUFLLEVBQUUsVUFGeUM7QUFFN0JGLElBQUFBLGFBQWEsRUFBRTtBQUFFMFEsTUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUFBLEVBQUUsRUFBRTtBQUF0QjtBQUZjLEdBQXBELEVBRXlFakMsZUFBZSxHQUFHLG9DQUFILEdBQTBDLDhCQUZsSSxDQURKLEVBSUl4WCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWVDLENBQWhELEVBQW1EO0FBQUVILElBQUFBLEVBQUUsRUFBRTtBQUFFZ1IsTUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWUMsTUFBQUEsRUFBRSxFQUFFO0FBQWhCLEtBQU47QUFBMkI3USxJQUFBQSxRQUFRLEVBQUU7QUFBRTRRLE1BQUFBLElBQUksRUFBRSxJQUFSO0FBQWNDLE1BQUFBLEVBQUUsRUFBRTtBQUFsQixLQUFyQztBQUErRDVRLElBQUFBLFVBQVUsRUFBRSxNQUEzRTtBQUFtRkcsSUFBQUEsS0FBSyxFQUFFLFVBQTFGO0FBQXNHRixJQUFBQSxhQUFhLEVBQUU7QUFBckgsR0FBbkQsRUFBbUwsMExBQW5MLENBSkosQ0FESixFQU1JOUksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEssUUFBekMsRUFBbUQ7QUFBRWtHLElBQUFBLE9BQU8sRUFBRTtBQUFFNEksTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLE1BQUFBLEVBQUUsRUFBRTtBQUFwQjtBQUFYLEdBQW5ELEVBQ0l6WixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFc0UsSUFBQUEsRUFBRSxFQUFFLE1BQU47QUFBYy9CLElBQUFBLEVBQUUsRUFBRSxDQUFsQjtBQUFxQnJDLElBQUFBLEVBQUUsRUFBRSxDQUF6QjtBQUE0QnVDLElBQUFBLE9BQU8sRUFBRSxJQUFyQztBQUEyQ0QsSUFBQUEsTUFBTSxFQUFFO0FBQW5ELEdBQTlDLEVBQ0k5SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM2SixNQUF6QyxFQUFpRDtBQUFFcEIsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU1MsSUFBQUEsS0FBSyxFQUFFO0FBQWhCLEdBQWpELEVBQ0loSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFNkssSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU3BMLElBQUFBLFVBQVUsRUFBRSxNQUFyQjtBQUE2QkQsSUFBQUEsUUFBUSxFQUFFO0FBQXZDLEdBQS9DLEVBQWdHLHlCQUFoRyxDQURKLENBREosRUFHSTVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3daLFVBQXpDLEVBQXFEO0FBQUVDLElBQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWMzTyxJQUFBQSxFQUFFLEVBQUUsQ0FBbEI7QUFBcUJDLElBQUFBLEVBQUUsRUFBRSxDQUF6QjtBQUE0QkssSUFBQUEsT0FBTyxFQUFFLENBQXJDO0FBQXdDdEosSUFBQUEsV0FBVyxFQUFFO0FBQXJELEdBQXJELEVBQ0k1QixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFO0FBQUVxTyxNQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQjBGLE1BQUFBLEVBQUUsRUFBRSxRQUF0QjtBQUFnQ3pGLE1BQUFBLEVBQUUsRUFBRSxLQUFwQztBQUEyQzZFLE1BQUFBLEVBQUUsRUFBRTtBQUEvQyxLQUFiO0FBQXFFOVQsSUFBQUEsR0FBRyxFQUFFO0FBQTFFLEdBQS9DLEVBQ0l4SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBL0MsRUFDSW5MLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBlLGNBQXpDLEVBQXlELElBQXpELEVBQStELFlBQS9ELENBREosRUFFSXhlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUVpVyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTNU8sSUFBQUEsSUFBSSxFQUFFLE1BQWY7QUFBdUI4SCxJQUFBQSxXQUFXLEVBQUUsWUFBcEM7QUFDNUM7QUFDQXJJLElBQUFBLFFBQVEsRUFBRSxrQkFBVXZFLENBQVYsRUFBYTtBQUFFLGFBQU9tVSxPQUFPLENBQUN4TixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFELEVBQUsvRCxJQUFMLENBQVQsRUFBcUI7QUFBRTRILFFBQUFBLFVBQVUsRUFBRXhLLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQXZCLE9BQXJCLENBQVQsQ0FBZDtBQUErRSxLQUY1RDtBQUU4REEsSUFBQUEsS0FBSyxFQUFFMkksSUFBSSxDQUFDNEg7QUFGMUUsR0FBaEQsQ0FGSixFQUtJLENBQUN1TyxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDdk8sVUFBeEQsS0FBdUV4UCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFSixJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUEvQyxFQUFxRStVLE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUssS0FBSyxDQUFuQyxHQUF1QyxLQUFLLENBQTVDLEdBQWdEQSxNQUFNLENBQUN2TyxVQUE1SCxDQUwzRSxDQURKLEVBT0l4UCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBL0MsRUFDSW5MLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBlLGNBQXpDLEVBQXlELElBQXpELEVBQStELFdBQS9ELENBREosRUFFSXhlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUVpVyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTNU8sSUFBQUEsSUFBSSxFQUFFLE1BQWY7QUFBdUI4SCxJQUFBQSxXQUFXLEVBQUUsV0FBcEM7QUFDNUM7QUFDQXJJLElBQUFBLFFBQVEsRUFBRSxrQkFBVXZFLENBQVYsRUFBYTtBQUFFLGFBQU9tVSxPQUFPLENBQUN4TixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFELEVBQUsvRCxJQUFMLENBQVQsRUFBcUI7QUFBRTZILFFBQUFBLFNBQVMsRUFBRXpLLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQXRCLE9BQXJCLENBQVQsQ0FBZDtBQUE4RSxLQUYzRDtBQUU2REEsSUFBQUEsS0FBSyxFQUFFMkksSUFBSSxDQUFDNkg7QUFGekUsR0FBaEQsQ0FGSixFQUtJLENBQUNzTyxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDdE8sU0FBeEQsS0FBc0V6UCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFSixJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUEvQyxFQUFxRStVLE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUssS0FBSyxDQUFuQyxHQUF1QyxLQUFLLENBQTVDLEdBQWdEQSxNQUFNLENBQUN0TyxTQUE1SCxDQUwxRSxDQVBKLENBREosRUFjSXpQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVpQyxJQUFBQSxTQUFTLEVBQUU7QUFBYixHQUEvQyxFQUNJbkwsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMGUsY0FBekMsRUFBeUQsSUFBekQsRUFBK0QsZUFBL0QsQ0FESixFQUVJeGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMkMsS0FBekMsRUFBZ0Q7QUFBRWlXLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVM1TyxJQUFBQSxJQUFJLEVBQUUsT0FBZjtBQUF3QjhILElBQUFBLFdBQVcsRUFBRSxlQUFyQztBQUM1QztBQUNBckksSUFBQUEsUUFBUSxFQUFFLGtCQUFVdkUsQ0FBVixFQUFhO0FBQUUsYUFBT21VLE9BQU8sQ0FBQ3hOLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLEVBQUQsRUFBSy9ELElBQUwsQ0FBVCxFQUFxQjtBQUFFcVUsUUFBQUEsS0FBSyxFQUFFalgsQ0FBQyxDQUFDd0UsTUFBRixDQUFTdks7QUFBbEIsT0FBckIsQ0FBVCxDQUFkO0FBQTBFLEtBRnZEO0FBRXlEQSxJQUFBQSxLQUFLLEVBQUUySSxJQUFJLENBQUNxVTtBQUZyRSxHQUFoRCxDQUZKLEVBS0ksQ0FBQzhCLE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUssS0FBSyxDQUFuQyxHQUF1QyxLQUFLLENBQTVDLEdBQWdEQSxNQUFNLENBQUM5QixLQUF4RCxLQUFrRWpjLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVKLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQS9DLEVBQXFFK1UsTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sS0FBSyxLQUFLLENBQW5DLEdBQXVDLEtBQUssQ0FBNUMsR0FBZ0RBLE1BQU0sQ0FBQzlCLEtBQTVILENBTHRFLENBZEosRUFvQklqYyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBL0MsRUFDSW5MLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBlLGNBQXpDLEVBQXlELElBQXpELEVBQStELGNBQS9ELENBREosRUFFSXhlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUVpVyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTNU8sSUFBQUEsSUFBSSxFQUFFLE1BQWY7QUFBdUI4SCxJQUFBQSxXQUFXLEVBQUUsY0FBcEM7QUFBb0RySSxJQUFBQSxRQUFRLEVBQUUsa0JBQVV2RSxDQUFWLEVBQWE7QUFBRSxhQUFPbVUsT0FBTyxDQUFDeE4sUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLL0QsSUFBTCxDQUFULEVBQXFCO0FBQUU4SCxRQUFBQSxNQUFNLEVBQUUxSyxDQUFDLENBQUN3RSxNQUFGLENBQVN2SztBQUFuQixPQUFyQixDQUFULENBQWQ7QUFBMkUsS0FBeEo7QUFBMEpBLElBQUFBLEtBQUssRUFBRTJJLElBQUksQ0FBQzhIO0FBQXRLLEdBQWhELENBRkosRUFHSSxDQUFDcU8sTUFBTSxLQUFLLElBQVgsSUFBbUJBLE1BQU0sS0FBSyxLQUFLLENBQW5DLEdBQXVDLEtBQUssQ0FBNUMsR0FBZ0RBLE1BQU0sQ0FBQ3JPLE1BQXhELEtBQW1FMVAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRUosSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBL0MsRUFBcUUrVSxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDck8sTUFBNUgsQ0FIdkUsQ0FwQkosRUF3QkkxUCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBL0MsRUFDSW5MLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBlLGNBQXpDLEVBQXlELElBQXpELEVBQStELFVBQS9ELENBREosRUFFSXhlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUVpVyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTNU8sSUFBQUEsSUFBSSxFQUFFLFVBQWY7QUFBMkI4SCxJQUFBQSxXQUFXLEVBQUUsVUFBeEM7QUFDNUM7QUFDQXJJLElBQUFBLFFBQVEsRUFBRSxrQkFBVXZFLENBQVYsRUFBYTtBQUFFLGFBQU9tVSxPQUFPLENBQUN4TixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFELEVBQUsvRCxJQUFMLENBQVQsRUFBcUI7QUFBRW9XLFFBQUFBLFFBQVEsRUFBRWhaLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQXJCLE9BQXJCLENBQVQsQ0FBZDtBQUE2RSxLQUYxRDtBQUU0REEsSUFBQUEsS0FBSyxFQUFFMkksSUFBSSxDQUFDb1c7QUFGeEUsR0FBaEQsQ0FGSixFQUtJLENBQUNELE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUssS0FBSyxDQUFuQyxHQUF1QyxLQUFLLENBQTVDLEdBQWdEQSxNQUFNLENBQUNDLFFBQXhELEtBQXFFaGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRUosSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBL0MsRUFBcUUrVSxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDQyxRQUE1SCxDQUx6RSxDQXhCSixFQThCSWhlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVpQyxJQUFBQSxTQUFTLEVBQUU7QUFBYixHQUEvQyxFQUNJbkwsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMGUsY0FBekMsRUFBeUQsSUFBekQsRUFBK0Qsa0JBQS9ELENBREosRUFFSXhlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUVpVyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTNU8sSUFBQUEsSUFBSSxFQUFFLFVBQWY7QUFBMkI4SCxJQUFBQSxXQUFXLEVBQUUsa0JBQXhDO0FBQzVDO0FBQ0FySSxJQUFBQSxRQUFRLEVBQUUsa0JBQVV2RSxDQUFWLEVBQWE7QUFBRSxhQUFPbVUsT0FBTyxDQUFDeE4sUUFBUSxDQUFDQSxRQUFRLENBQUMsRUFBRCxFQUFLL0QsSUFBTCxDQUFULEVBQXFCO0FBQUVxWCxRQUFBQSxlQUFlLEVBQUVqYSxDQUFDLENBQUN3RSxNQUFGLENBQVN2SztBQUE1QixPQUFyQixDQUFULENBQWQ7QUFBb0YsS0FGakU7QUFFbUVBLElBQUFBLEtBQUssRUFBRTJJLElBQUksQ0FBQ3FYO0FBRi9FLEdBQWhELENBRkosQ0E5QkosRUFtQ0lqZixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNxTyxNQUF6QyxFQUFpRDtBQUFFRSxJQUFBQSxPQUFPLEVBQUUsaUJBQVVySixDQUFWLEVBQWE7QUFBRSxhQUFPa1osWUFBWSxDQUFDbFosQ0FBRCxDQUFuQjtBQUF5QixLQUFuRDtBQUFxRDBaLElBQUFBLFNBQVMsRUFBRXRGLFVBQWhFO0FBQTRFdUYsSUFBQUEsV0FBVyxFQUFFLGtCQUF6RjtBQUE2R3ZRLElBQUFBLFdBQVcsRUFBRSxRQUExSDtBQUFvSXJCLElBQUFBLE9BQU8sRUFBRSxPQUE3STtBQUFzSjZSLElBQUFBLGdCQUFnQixFQUFFO0FBQXhLLEdBQWpELEVBQWtPLGtCQUFsTyxDQW5DSixDQUhKLENBREosRUF3Q0k1ZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWVDLENBQWhELEVBQW1EO0FBQUVDLElBQUFBLFFBQVEsRUFBRSxJQUFaO0FBQWtCNkIsSUFBQUEsU0FBUyxFQUFFLFFBQTdCO0FBQXVDekIsSUFBQUEsS0FBSyxFQUFFO0FBQTlDLEdBQW5ELEVBQ0ksZ0NBREosRUFFSSxHQUZKLEVBR0loSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWUyUyxDQUFoRCxFQUFtRDtBQUFFclMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbkQsRUFBMkUsa0JBQTNFLENBSEosQ0F4Q0osQ0FOSixDQURKLENBREosQ0FESSxDQUFSO0FBcURIOztBQUNEdEosa0JBQUEsR0FBcUJtZixRQUFyQjs7Ozs7Ozs7Ozs7QUN2SWE7O0FBQ2IsSUFBSXBmLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxJQUFJaWUsWUFBWSxHQUFHcGUsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLGdHQUFELENBQVIsQ0FBbEMsRUFDQTs7O0FBQ0EsU0FBU3VmLElBQVQsR0FBZ0I7QUFDWixTQUFRbmYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDMGEsWUFBWSxDQUFDLFNBQUQsQ0FBN0MsRUFBMEQsSUFBMUQsRUFDSjdkLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQytWLFNBQXpDLEVBQW9EO0FBQUVDLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQXBELEVBQ0k5VixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFdUMsSUFBQUEsRUFBRSxFQUFFLEVBQU47QUFBVXVULElBQUFBLEVBQUUsRUFBRTtBQUFkLEdBQTlDLEVBQ0lwZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3WixVQUF6QyxFQUFxRDtBQUFFblAsSUFBQUEsVUFBVSxFQUFFLFFBQWQ7QUFBd0JWLElBQUFBLENBQUMsRUFBRTtBQUFFK1AsTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0I2RSxNQUFBQSxFQUFFLEVBQUUsS0FBSztBQUF6QixLQUEzQjtBQUEwRDlFLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXOEUsTUFBQUEsRUFBRSxFQUFFO0FBQWYsS0FBbkU7QUFBd0Y5VCxJQUFBQSxHQUFHLEVBQUU7QUFBRWdQLE1BQUFBLElBQUksRUFBRSxDQUFSO0FBQVc4RSxNQUFBQSxFQUFFLEVBQUU7QUFBZixLQUE3RjtBQUFrSEYsSUFBQUEsRUFBRSxFQUFFO0FBQXRILEdBQXJELEVBQ0lwZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SyxRQUF6QyxFQUFtRDtBQUFFa0csSUFBQUEsT0FBTyxFQUFFO0FBQUU0SSxNQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQjhFLE1BQUFBLEVBQUUsRUFBRTtBQUFwQixLQUFYO0FBQW9DN1QsSUFBQUEsU0FBUyxFQUFFO0FBQUUrTyxNQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQjhFLE1BQUFBLEVBQUUsRUFBRTtBQUF0QjtBQUEvQyxHQUFuRCxFQUNJdGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlNlYsRUFBaEQsRUFBb0Q7QUFBRS9WLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRTtBQUFFNFEsTUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsTUFBQUEsRUFBRSxFQUFFO0FBQW5CLEtBQW5CO0FBQStDNVEsSUFBQUEsVUFBVSxFQUFFLE1BQTNEO0FBQW1FUSxJQUFBQSxVQUFVLEVBQUU7QUFBRW1RLE1BQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxNQUFBQSxFQUFFLEVBQUU7QUFBdkIsS0FBL0U7QUFDaEQ7QUFDQXpRLElBQUFBLEtBQUssRUFBRSxVQUZ5QztBQUU3QkYsSUFBQUEsYUFBYSxFQUFFO0FBQUUwUSxNQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBQUEsRUFBRSxFQUFFO0FBQXRCO0FBRmMsR0FBcEQsRUFFeUUsTUFGekUsQ0FESixFQUlJelosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlQyxDQUFoRCxFQUFtRDtBQUFFSCxJQUFBQSxFQUFFLEVBQUU7QUFBRWdSLE1BQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLE1BQUFBLEVBQUUsRUFBRTtBQUFoQixLQUFOO0FBQTJCN1EsSUFBQUEsUUFBUSxFQUFFO0FBQUU0USxNQUFBQSxJQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFBQSxFQUFFLEVBQUU7QUFBbEIsS0FBckM7QUFBK0Q1USxJQUFBQSxVQUFVLEVBQUUsTUFBM0U7QUFBbUZHLElBQUFBLEtBQUssRUFBRSxVQUExRjtBQUFzR0YsSUFBQUEsYUFBYSxFQUFFO0FBQXJILEdBQW5ELEVBQW1MLDBMQUFuTCxDQUpKLENBREosRUFNSTlJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRLLFFBQXpDLEVBQW1EO0FBQUVrRyxJQUFBQSxPQUFPLEVBQUU7QUFBRTRJLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxNQUFBQSxFQUFFLEVBQUU7QUFBcEI7QUFBWCxHQUFuRCxDQU5KLENBREosQ0FESixDQURJLENBQVI7QUFVSDs7QUFDRC9aLGtCQUFBLEdBQXFCeWYsSUFBckI7Ozs7Ozs7Ozs7O0FDckJhOztBQUNiLElBQUl4VCxRQUFRLEdBQUksUUFBUSxLQUFLQSxRQUFkLElBQTJCLFlBQVk7QUFDbERBLEVBQUFBLFFBQVEsR0FBR3ROLE1BQU0sQ0FBQ3VOLE1BQVAsSUFBaUIsVUFBU3BHLENBQVQsRUFBWTtBQUNwQyxTQUFLLElBQUlxRyxDQUFKLEVBQU9DLENBQUMsR0FBRyxDQUFYLEVBQWM3RixDQUFDLEdBQUc4RixTQUFTLENBQUMxRixNQUFqQyxFQUF5Q3lGLENBQUMsR0FBRzdGLENBQTdDLEVBQWdENkYsQ0FBQyxFQUFqRCxFQUFxRDtBQUNqREQsTUFBQUEsQ0FBQyxHQUFHRSxTQUFTLENBQUNELENBQUQsQ0FBYjs7QUFDQSxXQUFLLElBQUluRCxDQUFULElBQWNrRCxDQUFkO0FBQWlCLFlBQUl4TixNQUFNLENBQUNpQixTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNxTSxDQUFyQyxFQUF3Q2xELENBQXhDLENBQUosRUFDYm5ELENBQUMsQ0FBQ21ELENBQUQsQ0FBRCxHQUFPa0QsQ0FBQyxDQUFDbEQsQ0FBRCxDQUFSO0FBREo7QUFFSDs7QUFDRCxXQUFPbkQsQ0FBUDtBQUNILEdBUEQ7O0FBUUEsU0FBT21HLFFBQVEsQ0FBQ3pHLEtBQVQsQ0FBZSxJQUFmLEVBQXFCNkcsU0FBckIsQ0FBUDtBQUNILENBVkQ7O0FBV0EsSUFBSXRNLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckIsRUFDQTs7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxtQkFBTyxDQUFDLHVGQUFELENBQTdCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSWllLFlBQVksR0FBR3BlLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxnR0FBRCxDQUFSLENBQWxDLEVBQ0E7OztBQUNBLFNBQVNrZSxLQUFULEdBQWlCO0FBQ2IsTUFBSUMsTUFBTSxHQUFHLENBQUMsR0FBR2xlLGVBQWUsQ0FBQ29SLE9BQXBCLElBQStCQyxLQUEvQixDQUFxQzZNLE1BQWxEOztBQUNBLE1BQUlwZCxFQUFFLEdBQUcsQ0FBQyxHQUFHZCxlQUFlLENBQUNvWixPQUFwQixFQUE2QjtBQUNsQ2dELElBQUFBLEtBQUssRUFBRSxFQUQyQjtBQUVsQytCLElBQUFBLFFBQVEsRUFBRSxFQUZ3QjtBQUdsQ0MsSUFBQUEsUUFBUSxFQUFFO0FBSHdCLEdBQTdCLENBQVQ7QUFBQSxNQUlJclcsSUFBSSxHQUFHakgsRUFBRSxDQUFDaUgsSUFKZDtBQUFBLE1BSW9CdVIsT0FBTyxHQUFHeFksRUFBRSxDQUFDd1ksT0FKakM7QUFBQSxNQUkwQzFNLElBQUksR0FBRzlMLEVBQUUsQ0FBQzhMLElBSnBEO0FBQUEsTUFJMEQyTSxVQUFVLEdBQUd6WSxFQUFFLENBQUN5WSxVQUoxRTs7QUFLQSxNQUFJOEUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBVWxaLENBQVYsRUFBYTtBQUM1QjtBQUNBQSxJQUFBQSxDQUFDLENBQUNtWixjQUFGLEdBRjRCLENBRzVCOztBQUNBMVIsSUFBQUEsSUFBSSxDQUFDLFFBQUQsRUFBVzdFLElBQVgsQ0FBSixDQUo0QixDQUs1QjtBQUNILEdBTkQ7O0FBT0EsU0FBUTVILE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzBhLFlBQVksQ0FBQyxTQUFELENBQTdDLEVBQTBELElBQTFELEVBQ0o3ZCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMrVixTQUF6QyxFQUFvRDtBQUFFQyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFwRCxFQUNJOVYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXVDLElBQUFBLEVBQUUsRUFBRSxFQUFOO0FBQVV1VCxJQUFBQSxFQUFFLEVBQUU7QUFBZCxHQUE5QyxFQUNJcGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd1osVUFBekMsRUFBcUQ7QUFBRW5QLElBQUFBLFVBQVUsRUFBRSxRQUFkO0FBQXdCVixJQUFBQSxDQUFDLEVBQUU7QUFBRStQLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCNkUsTUFBQUEsRUFBRSxFQUFFLEtBQUs7QUFBekIsS0FBM0I7QUFBMEQ5RSxJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBVzhFLE1BQUFBLEVBQUUsRUFBRTtBQUFmLEtBQW5FO0FBQXdGOVQsSUFBQUEsR0FBRyxFQUFFO0FBQUVnUCxNQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXOEUsTUFBQUEsRUFBRSxFQUFFO0FBQWYsS0FBN0Y7QUFBa0hGLElBQUFBLEVBQUUsRUFBRTtBQUF0SCxHQUFyRCxFQUNJcGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEssUUFBekMsRUFBbUQ7QUFBRWtHLElBQUFBLE9BQU8sRUFBRTtBQUFFNEksTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0I4RSxNQUFBQSxFQUFFLEVBQUU7QUFBcEIsS0FBWDtBQUFvQzdULElBQUFBLFNBQVMsRUFBRTtBQUFFK08sTUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0I4RSxNQUFBQSxFQUFFLEVBQUU7QUFBdEI7QUFBL0MsR0FBbkQsRUFDSXRlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRJLE1BQVIsQ0FBZTZWLEVBQWhELEVBQW9EO0FBQUUvVixJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUU7QUFBRTRRLE1BQUFBLElBQUksRUFBRSxLQUFSO0FBQWVDLE1BQUFBLEVBQUUsRUFBRTtBQUFuQixLQUFuQjtBQUErQzVRLElBQUFBLFVBQVUsRUFBRSxNQUEzRDtBQUFtRVEsSUFBQUEsVUFBVSxFQUFFO0FBQUVtUSxNQUFBQSxJQUFJLEVBQUUsU0FBUjtBQUFtQkMsTUFBQUEsRUFBRSxFQUFFO0FBQXZCLEtBQS9FO0FBQ2hEO0FBQ0F6USxJQUFBQSxLQUFLLEVBQUUsVUFGeUM7QUFFN0JGLElBQUFBLGFBQWEsRUFBRTtBQUFFMFEsTUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUFBLEVBQUUsRUFBRTtBQUF0QjtBQUZjLEdBQXBELEVBRXlFLHVCQUZ6RSxDQURKLEVBSUl6WixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWVDLENBQWhELEVBQW1EO0FBQUVILElBQUFBLEVBQUUsRUFBRTtBQUFFZ1IsTUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWUMsTUFBQUEsRUFBRSxFQUFFO0FBQWhCLEtBQU47QUFBMkI3USxJQUFBQSxRQUFRLEVBQUU7QUFBRTRRLE1BQUFBLElBQUksRUFBRSxJQUFSO0FBQWNDLE1BQUFBLEVBQUUsRUFBRTtBQUFsQixLQUFyQztBQUErRDVRLElBQUFBLFVBQVUsRUFBRSxNQUEzRTtBQUFtRkcsSUFBQUEsS0FBSyxFQUFFLFVBQTFGO0FBQXNHRixJQUFBQSxhQUFhLEVBQUU7QUFBckgsR0FBbkQsRUFBbUwsMExBQW5MLENBSkosQ0FESixFQU1JOUksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEssUUFBekMsRUFBbUQ7QUFBRWtHLElBQUFBLE9BQU8sRUFBRTtBQUFFNEksTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLE1BQUFBLEVBQUUsRUFBRTtBQUFwQjtBQUFYLEdBQW5ELEVBQ0l6WixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFc0UsSUFBQUEsRUFBRSxFQUFFLE1BQU47QUFBYy9CLElBQUFBLEVBQUUsRUFBRSxDQUFsQjtBQUFxQnJDLElBQUFBLEVBQUUsRUFBRSxDQUF6QjtBQUE0QnVDLElBQUFBLE9BQU8sRUFBRSxJQUFyQztBQUEyQ0QsSUFBQUEsTUFBTSxFQUFFO0FBQW5ELEdBQTlDLEVBQ0k5SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM2SixNQUF6QyxFQUFpRDtBQUFFcEIsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU1MsSUFBQUEsS0FBSyxFQUFFO0FBQWhCLEdBQWpELEVBQ0loSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFNkssSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU3BMLElBQUFBLFVBQVUsRUFBRSxNQUFyQjtBQUE2QkQsSUFBQUEsUUFBUSxFQUFFO0FBQXZDLEdBQS9DLEVBQWdHLHVCQUFoRyxDQURKLENBREosRUFHSTVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3daLFVBQXpDLEVBQXFEO0FBQUVDLElBQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWMzTyxJQUFBQSxFQUFFLEVBQUUsQ0FBbEI7QUFBcUJDLElBQUFBLEVBQUUsRUFBRSxDQUF6QjtBQUE0QkssSUFBQUEsT0FBTyxFQUFFLENBQXJDO0FBQXdDdEosSUFBQUEsV0FBVyxFQUFFO0FBQXJELEdBQXJELEVBQ0k1QixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBL0MsRUFDSW5MLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBlLGNBQXpDLEVBQXlELElBQXpELEVBQStELGVBQS9ELENBREosRUFFSXhlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUVpVyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTNU8sSUFBQUEsSUFBSSxFQUFFLE9BQWY7QUFBd0I4SCxJQUFBQSxXQUFXLEVBQUUsZUFBckM7QUFDNUM7QUFDQXJJLElBQUFBLFFBQVEsRUFBRSxrQkFBVXZFLENBQVYsRUFBYTtBQUFFLGFBQU9tVSxPQUFPLENBQUN4TixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFELEVBQUsvRCxJQUFMLENBQVQsRUFBcUI7QUFBRXFVLFFBQUFBLEtBQUssRUFBRWpYLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQWxCLE9BQXJCLENBQVQsQ0FBZDtBQUEwRSxLQUZ2RDtBQUV5REEsSUFBQUEsS0FBSyxFQUFFMkksSUFBSSxDQUFDcVU7QUFGckUsR0FBaEQsQ0FGSixFQUtJLENBQUM4QixNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDOUIsS0FBeEQsS0FBa0VqYyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFSixJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUEvQyxFQUFxRStVLE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUssS0FBSyxDQUFuQyxHQUF1QyxLQUFLLENBQTVDLEdBQWdEQSxNQUFNLENBQUM5QixLQUE1SCxDQUx0RSxDQURKLEVBT0lqYyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFaUMsSUFBQUEsU0FBUyxFQUFFO0FBQWIsR0FBL0MsRUFDSW5MLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzBlLGNBQXpDLEVBQXlELElBQXpELEVBQStELFVBQS9ELENBREosRUFFSXhlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUVpVyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTNU8sSUFBQUEsSUFBSSxFQUFFLFVBQWY7QUFBMkI4SCxJQUFBQSxXQUFXLEVBQUUsVUFBeEM7QUFDNUM7QUFDQXJJLElBQUFBLFFBQVEsRUFBRSxrQkFBVXZFLENBQVYsRUFBYTtBQUFFLGFBQU9tVSxPQUFPLENBQUN4TixRQUFRLENBQUNBLFFBQVEsQ0FBQyxFQUFELEVBQUsvRCxJQUFMLENBQVQsRUFBcUI7QUFBRW9XLFFBQUFBLFFBQVEsRUFBRWhaLENBQUMsQ0FBQ3dFLE1BQUYsQ0FBU3ZLO0FBQXJCLE9BQXJCLENBQVQsQ0FBZDtBQUE2RSxLQUYxRDtBQUU0REEsSUFBQUEsS0FBSyxFQUFFMkksSUFBSSxDQUFDb1c7QUFGeEUsR0FBaEQsQ0FGSixFQUtJLENBQUNELE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUssS0FBSyxDQUFuQyxHQUF1QyxLQUFLLENBQTVDLEdBQWdEQSxNQUFNLENBQUNDLFFBQXhELEtBQXFFaGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRUosSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBL0MsRUFBcUUrVSxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDQyxRQUE1SCxDQUx6RSxFQU1JLENBQUNELE1BQU0sS0FBSyxJQUFYLElBQW1CQSxNQUFNLEtBQUssS0FBSyxDQUFuQyxHQUF1QyxLQUFLLENBQTVDLEdBQWdEQSxNQUFNLENBQUNVLEtBQXhELEtBQWtFemUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRUosSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBL0MsRUFBcUUrVSxNQUFNLEtBQUssSUFBWCxJQUFtQkEsTUFBTSxLQUFLLEtBQUssQ0FBbkMsR0FBdUMsS0FBSyxDQUE1QyxHQUFnREEsTUFBTSxDQUFDVSxLQUE1SCxDQU50RSxDQVBKLEVBY0l6ZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNxTyxNQUF6QyxFQUFpRDtBQUFFRSxJQUFBQSxPQUFPLEVBQUUsaUJBQVVySixDQUFWLEVBQWE7QUFBRSxhQUFPa1osWUFBWSxDQUFDbFosQ0FBRCxDQUFuQjtBQUF5QixLQUFuRDtBQUFxRDBaLElBQUFBLFNBQVMsRUFBRXRGLFVBQWhFO0FBQTRFdUYsSUFBQUEsV0FBVyxFQUFFLGVBQXpGO0FBQTBHdlEsSUFBQUEsV0FBVyxFQUFFLFFBQXZIO0FBQWlJckIsSUFBQUEsT0FBTyxFQUFFLE9BQTFJO0FBQW1KNlIsSUFBQUEsZ0JBQWdCLEVBQUU7QUFBckssR0FBakQsRUFBK04sU0FBL04sQ0FkSixDQUhKLENBREosRUFtQkk1ZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWVDLENBQWhELEVBQW1EO0FBQUVDLElBQUFBLFFBQVEsRUFBRSxJQUFaO0FBQWtCNkIsSUFBQUEsU0FBUyxFQUFFLFFBQTdCO0FBQXVDekIsSUFBQUEsS0FBSyxFQUFFO0FBQTlDLEdBQW5ELEVBQ0ksZ0NBREosRUFFSSxHQUZKLEVBR0loSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SSxNQUFSLENBQWUyUyxDQUFoRCxFQUFtRDtBQUFFclMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBbkQsRUFBMkUsa0JBQTNFLENBSEosQ0FuQkosQ0FOSixDQURKLENBREosQ0FESSxDQUFSO0FBZ0NIOztBQUNEdEosa0JBQUEsR0FBcUJvZSxLQUFyQjs7Ozs7Ozs7Ozs7QUNyRWE7O0FBQ2IsSUFBSXJlLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUE3Qjs7QUFDQSxJQUFJaWUsWUFBWSxHQUFHcGUsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLGdHQUFELENBQVIsQ0FBbEM7O0FBQ0EsSUFBSUssT0FBTyxHQUFHTCxtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlPLFNBQVMsR0FBR1AsbUJBQU8sQ0FBQywyRUFBRCxDQUF2Qjs7QUFDQSxTQUFTd2YsUUFBVCxDQUFrQnplLEVBQWxCLEVBQXNCO0FBQ2xCLE1BQUlnTyxRQUFRLEdBQUdoTyxFQUFFLENBQUNnTyxRQUFsQjs7QUFDQSxNQUFJMFEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFVQyxTQUFWLEVBQXFCO0FBQ3ZDbmYsSUFBQUEsU0FBUyxDQUFDRyxPQUFWLENBQWtCbU0sSUFBbEIsQ0FBdUIsbUJBQXZCLEVBQTRDO0FBQUU2UyxNQUFBQSxTQUFTLEVBQUVBO0FBQWIsS0FBNUM7QUFDSCxHQUZEOztBQUdBLFNBQVF0ZixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUMwYSxZQUFZLENBQUMsU0FBRCxDQUE3QyxFQUEwRCxJQUExRCxFQUNKN2QsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDK1YsU0FBekMsRUFBb0Q7QUFBRUMsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBcEQsRUFDSTlWLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUV1QyxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTdVQsSUFBQUEsRUFBRSxFQUFFO0FBQWIsR0FBOUMsRUFDSXBlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3daLFVBQXpDLEVBQXFEO0FBQUVuUCxJQUFBQSxVQUFVLEVBQUUsUUFBZDtBQUF3QlYsSUFBQUEsQ0FBQyxFQUFFO0FBQUUrUCxNQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQjZFLE1BQUFBLEVBQUUsRUFBRSxLQUFLO0FBQXpCLEtBQTNCO0FBQTBEOUUsSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLElBQUksRUFBRSxDQUFSO0FBQVc4RSxNQUFBQSxFQUFFLEVBQUU7QUFBZixLQUFuRTtBQUF3RjlULElBQUFBLEdBQUcsRUFBRTtBQUFFZ1AsTUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBVzhFLE1BQUFBLEVBQUUsRUFBRTtBQUFmO0FBQTdGLEdBQXJELEVBQ0l0ZSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM0SyxRQUF6QyxFQUFtRDtBQUFFa0csSUFBQUEsT0FBTyxFQUFFO0FBQUU0SSxNQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQjhFLE1BQUFBLEVBQUUsRUFBRTtBQUFwQixLQUFYO0FBQW9DN1QsSUFBQUEsU0FBUyxFQUFFO0FBQUUrTyxNQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQjhFLE1BQUFBLEVBQUUsRUFBRTtBQUF0QjtBQUEvQyxHQUFuRCxFQUNJdGUsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlNlYsRUFBaEQsRUFBb0Q7QUFBRS9WLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRTtBQUFFNFEsTUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsTUFBQUEsRUFBRSxFQUFFO0FBQW5CLEtBQW5CO0FBQStDNVEsSUFBQUEsVUFBVSxFQUFFLE1BQTNEO0FBQW1FUSxJQUFBQSxVQUFVLEVBQUU7QUFBRW1RLE1BQUFBLElBQUksRUFBRSxTQUFSO0FBQW1CQyxNQUFBQSxFQUFFLEVBQUU7QUFBdkIsS0FBL0U7QUFDaEQ7QUFDQXpRLElBQUFBLEtBQUssRUFBRSxVQUZ5QztBQUU3QkYsSUFBQUEsYUFBYSxFQUFFO0FBQUUwUSxNQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsTUFBQUEsRUFBRSxFQUFFO0FBQXRCO0FBRmMsR0FBcEQsRUFFeUUsVUFGekUsQ0FESixFQUlJelosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDNEksTUFBUixDQUFlQyxDQUFoRCxFQUFtRDtBQUFFSCxJQUFBQSxFQUFFLEVBQUU7QUFBRWdSLE1BQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLE1BQUFBLEVBQUUsRUFBRTtBQUFoQixLQUFOO0FBQTJCN1EsSUFBQUEsUUFBUSxFQUFFO0FBQUU0USxNQUFBQSxJQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFBQSxFQUFFLEVBQUU7QUFBbEIsS0FBckM7QUFBK0Q1USxJQUFBQSxVQUFVLEVBQUUsTUFBM0U7QUFBbUZHLElBQUFBLEtBQUssRUFBRSxVQUExRjtBQUFzR0YsSUFBQUEsYUFBYSxFQUFFO0FBQXJILEdBQW5ELEVBQW1MLDBMQUFuTCxDQUpKLENBREosQ0FESixDQURKLEVBUUk5SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFOFYsSUFBQUEsRUFBRSxFQUFFO0FBQU4sR0FBOUMsRUFDSXBlLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3daLFVBQXpDLEVBQXFEO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXMEYsTUFBQUEsRUFBRSxFQUFFLENBQWY7QUFBa0J6RixNQUFBQSxFQUFFLEVBQUUsQ0FBdEI7QUFBeUI2RSxNQUFBQSxFQUFFLEVBQUU7QUFBN0IsS0FBWDtBQUE2QzlULElBQUFBLEdBQUcsRUFBRTtBQUFsRCxHQUFyRCxFQUE0R21FLFFBQVEsQ0FBQ3RCLEdBQVQsQ0FBYSxVQUFVdUIsT0FBVixFQUFtQnRCLEtBQW5CLEVBQTBCO0FBQy9JLFdBQU90TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNsRCxPQUFPLENBQUMwSixNQUF6QyxFQUFpRDtBQUFFNEQsTUFBQUEsR0FBRyxFQUFFRDtBQUFQLEtBQWpELEVBQ0h0TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFd04sTUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJyTSxNQUFBQSxDQUFDLEVBQUUsTUFBcEI7QUFBNEJrQixNQUFBQSxFQUFFLEVBQUUsQ0FBQyxHQUFHMUssT0FBTyxDQUFDZ0osaUJBQVosRUFBK0IsT0FBL0IsRUFBd0MsVUFBeEMsQ0FBaEM7QUFBcUZwSCxNQUFBQSxTQUFTLEVBQUUsSUFBaEc7QUFBc0drSixNQUFBQSxPQUFPLEVBQUUsSUFBL0c7QUFBcUhwQyxNQUFBQSxDQUFDLEVBQUUsQ0FBeEg7QUFBMkg4QixNQUFBQSxTQUFTLEVBQUU7QUFBdEksS0FBOUMsRUFDSXpLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQytPLEtBQXpDLEVBQWdEO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUYsT0FBTyxDQUFDRyxLQUFmO0FBQXNCdkcsTUFBQUEsRUFBRSxFQUFFO0FBQTFCLEtBQWhELENBREosRUFFSXhJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ2xELE9BQU8sQ0FBQ3dZLE9BQXpDLEVBQWtEO0FBQUU3UCxNQUFBQSxRQUFRLEVBQUUsS0FBWjtBQUFtQjJXLE1BQUFBLFVBQVUsRUFBRSxNQUEvQjtBQUF1Qy9XLE1BQUFBLEVBQUUsRUFBRTtBQUEzQyxLQUFsRCxFQUFrR29HLE9BQU8sQ0FBQzdLLElBQTFHLENBRkosRUFHSS9ELE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ2xELE9BQU8sQ0FBQ21KLElBQXpDLEVBQStDO0FBQUVxQixNQUFBQSxTQUFTLEVBQUUsUUFBYjtBQUF1QnpCLE1BQUFBLEtBQUssRUFBRSxDQUFDLEdBQUcvSSxPQUFPLENBQUNnSixpQkFBWixFQUErQixVQUEvQixFQUEyQyxVQUEzQyxDQUE5QjtBQUFzRjJCLE1BQUFBLEVBQUUsRUFBRTtBQUExRixLQUEvQyxFQUE4SWdFLE9BQU8sQ0FBQ3NLLE9BQXRKLENBSEosRUFJSWxaLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ2xELE9BQU8sQ0FBQytLLEtBQXpDLEVBQWdEO0FBQUUwTixNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTdk4sTUFBQUEsU0FBUyxFQUFFLEtBQXBCO0FBQTJCRCxNQUFBQSxPQUFPLEVBQUUsQ0FBcEM7QUFBdUNzVSxNQUFBQSxZQUFZLEVBQUUsUUFBckQ7QUFBK0RyVixNQUFBQSxVQUFVLEVBQUU7QUFBM0UsS0FBaEQsRUFDSW5LLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ2xELE9BQU8sQ0FBQ21KLElBQXpDLEVBQStDLElBQS9DLEVBQ0ksR0FESixFQUVJd0YsT0FBTyxDQUFDSSxLQUZaLENBREosRUFJSWhQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ2xELE9BQU8sQ0FBQ2tPLE1BQXpDLEVBQWlEO0FBQUVFLE1BQUFBLE9BQU8sRUFBRSxtQkFBWTtBQUFFLGVBQU9nUixlQUFlLENBQUN6USxPQUFPLENBQUNySCxFQUFULENBQXRCO0FBQXFDLE9BQTlEO0FBQWdFd1UsTUFBQUEsSUFBSSxFQUFFLENBQXRFO0FBQXlFblQsTUFBQUEsUUFBUSxFQUFFLElBQW5GO0FBQXlGbUMsTUFBQUEsT0FBTyxFQUFFLE1BQWxHO0FBQTBHSixNQUFBQSxFQUFFLEVBQUUsVUFBOUc7QUFBMEgzQixNQUFBQSxLQUFLLEVBQUUsT0FBakk7QUFDN0M7QUFDQTtBQUNBO0FBQ0F1QyxNQUFBQSxNQUFNLEVBQUU7QUFDSlosUUFBQUEsRUFBRSxFQUFFO0FBREEsT0FKcUM7QUFNMUNoSixNQUFBQSxNQUFNLEVBQUU7QUFDUGdKLFFBQUFBLEVBQUUsRUFBRTtBQURHO0FBTmtDLEtBQWpELEVBUVMsU0FSVCxDQUpKLENBSkosQ0FERyxDQUFQO0FBa0JILEdBbkIyRyxDQUE1RyxDQURKLENBUkosQ0FESSxDQUFSO0FBOEJIOztBQUNEakwsa0JBQUEsR0FBcUIwZixRQUFyQjs7Ozs7Ozs7Ozs7QUM5Q2E7O0FBQ2IsSUFBSTNmLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdMLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTdCOztBQUNBLElBQUlzWSxhQUFhLEdBQUd6WSxlQUFlLENBQUNHLG1CQUFPLENBQUMscUdBQUQsQ0FBUixDQUFuQzs7QUFDQSxTQUFTNmYsU0FBVCxHQUFxQjtBQUNqQixTQUFRM2YsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQnFELGFBQW5CLENBQWlDK1UsYUFBYSxDQUFDLFNBQUQsQ0FBOUMsRUFBMkQsSUFBM0QsRUFDSnBZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJxRCxhQUFuQixDQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxFQUE2Qyx1TkFBN0MsQ0FESSxDQUFSO0FBRUg7O0FBQ0R6RCxrQkFBQSxHQUFxQitmLFNBQXJCOzs7Ozs7Ozs7OztBQ1hhOztBQUNiLElBQUlyaEIsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxLQUFtQ0MsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUM1RixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkosRUFBQUEsTUFBTSxDQUFDTyxjQUFQLENBQXNCTCxDQUF0QixFQUF5QkcsRUFBekIsRUFBNkI7QUFBRUcsSUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JDLElBQUFBLEdBQUcsRUFBRSxlQUFXO0FBQUUsYUFBT04sQ0FBQyxDQUFDQyxDQUFELENBQVI7QUFBYztBQUFwRCxHQUE3QjtBQUNILENBSHdELEdBR25ELFVBQVNGLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxFQUFsQixFQUFzQjtBQUN4QixNQUFJQSxFQUFFLEtBQUtDLFNBQVgsRUFBc0JELEVBQUUsR0FBR0QsQ0FBTDtBQUN0QkYsRUFBQUEsQ0FBQyxDQUFDRyxFQUFELENBQUQsR0FBUUYsQ0FBQyxDQUFDQyxDQUFELENBQVQ7QUFDSCxDQU5xQixDQUF0Qjs7QUFPQSxJQUFJTSxrQkFBa0IsR0FBSSxRQUFRLEtBQUtBLGtCQUFkLEtBQXNDVixNQUFNLENBQUNDLE1BQVAsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDM0ZYLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUIsU0FBekIsRUFBb0M7QUFBRU0sSUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JJLElBQUFBLEtBQUssRUFBRUQ7QUFBM0IsR0FBcEM7QUFDSCxDQUY4RCxHQUUxRCxVQUFTVCxDQUFULEVBQVlTLENBQVosRUFBZTtBQUNoQlQsRUFBQUEsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxHQUFlUyxDQUFmO0FBQ0gsQ0FKd0IsQ0FBekI7O0FBS0EsSUFBSUUsWUFBWSxHQUFJLFFBQVEsS0FBS0EsWUFBZCxJQUErQixVQUFVQyxHQUFWLEVBQWU7QUFDN0QsTUFBSUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQWYsRUFBMkIsT0FBT0QsR0FBUDtBQUMzQixNQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlGLEdBQUcsSUFBSSxJQUFYLEVBQWlCLEtBQUssSUFBSVYsQ0FBVCxJQUFjVSxHQUFkO0FBQW1CLFFBQUlWLENBQUMsS0FBSyxTQUFOLElBQW1CSixNQUFNLENBQUNpQixTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNMLEdBQXJDLEVBQTBDVixDQUExQyxDQUF2QixFQUFxRUwsZUFBZSxDQUFDaUIsTUFBRCxFQUFTRixHQUFULEVBQWNWLENBQWQsQ0FBZjtBQUF4Rjs7QUFDakJNLEVBQUFBLGtCQUFrQixDQUFDTSxNQUFELEVBQVNGLEdBQVQsQ0FBbEI7O0FBQ0EsU0FBT0UsTUFBUDtBQUNILENBTkQ7O0FBT0EsSUFBSUksZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVTixHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVosR0FBMEJELEdBQTFCLEdBQWdDO0FBQUUsZUFBV0E7QUFBYixHQUF2QztBQUNILENBRkQ7O0FBR0FPLGtCQUFBLEdBQXFCLElBQXJCLEVBQ0E7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlPLFNBQVMsR0FBR1AsbUJBQU8sQ0FBQywyRUFBRCxDQUF2Qjs7QUFDQSxJQUFJQyxlQUFlLEdBQUdELG1CQUFPLENBQUMsdUZBQUQsQ0FBN0I7O0FBQ0EsSUFBSUksT0FBTyxHQUFHZCxZQUFZLENBQUNVLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUExQjs7QUFDQSxJQUFJd1ksa0JBQWtCLEdBQUczWSxlQUFlLENBQUNHLG1CQUFPLENBQUMscUlBQUQsQ0FBUixDQUF4Qzs7QUFDQSxJQUFJOGYsbUJBQW1CLEdBQUdqZ0IsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHVJQUFELENBQVIsQ0FBekM7O0FBQ0EsSUFBSXlZLFdBQVcsR0FBRzVZLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyx1SEFBRCxDQUFSLENBQWpDOztBQUNBLElBQUlpZSxZQUFZLEdBQUdwZSxlQUFlLENBQUNHLG1CQUFPLENBQUMsbUdBQUQsQ0FBUixDQUFsQzs7QUFDQSxTQUFTMlksU0FBVCxDQUFtQjVYLEVBQW5CLEVBQXVCO0FBQ25CLE1BQUkrUCxVQUFVLEdBQUcvUCxFQUFFLENBQUMrUCxVQUFwQjtBQUFBLE1BQWdDQyxNQUFNLEdBQUdoUSxFQUFFLENBQUNnUSxNQUE1QyxDQURtQixDQUVuQjs7QUFDQSxNQUFJSyxRQUFRLEdBQUcsQ0FBQyxHQUFHblIsZUFBZSxDQUFDb1IsT0FBcEIsSUFBK0JDLEtBQS9CLENBQXFDRixRQUFwRDs7QUFDQSxNQUFJcFEsRUFBRSxHQUFHLENBQUMsR0FBR1osT0FBTyxDQUFDMEcsUUFBWixFQUFzQixLQUF0QixDQUFUO0FBQUEsTUFBdUNpWixXQUFXLEdBQUcvZSxFQUFFLENBQUMsQ0FBRCxDQUF2RDtBQUFBLE1BQTREZ2YsY0FBYyxHQUFHaGYsRUFBRSxDQUFDLENBQUQsQ0FBL0U7O0FBQ0EsTUFBSW1HLEVBQUUsR0FBRyxDQUFDLEdBQUcvRyxPQUFPLENBQUMwRyxRQUFaLEVBQXNCc0ssUUFBUSxDQUFDNk8sV0FBL0IsQ0FBVDtBQUFBLE1BQXNEQyxVQUFVLEdBQUcvWSxFQUFFLENBQUMsQ0FBRCxDQUFyRTtBQUFBLE1BQTBFZ1osYUFBYSxHQUFHaFosRUFBRSxDQUFDLENBQUQsQ0FBNUY7O0FBQ0EsTUFBSWlaLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBWTtBQUMvQjdmLElBQUFBLFNBQVMsQ0FBQ0csT0FBVixDQUFrQm1NLElBQWxCLENBQXVCLHlCQUF2QixFQUFrRDtBQUFFcVQsTUFBQUEsVUFBVSxFQUFFQTtBQUFkLEtBQWxELEVBQThFO0FBQUVuVCxNQUFBQSxjQUFjLEVBQUU7QUFBbEIsS0FBOUU7QUFDSCxHQUZEOztBQUdBLFNBQVEzTSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUMwYSxZQUFZLENBQUMsU0FBRCxDQUE3QyxFQUEwRCxJQUExRCxFQUNKN2QsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRW1CLElBQUFBLENBQUMsRUFBRTtBQUFMLEdBQTlDLEVBQ0l6SixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyWSxPQUF6QyxFQUFrRDtBQUFFN0wsSUFBQUEsRUFBRSxFQUFFLElBQU47QUFBWS9ELElBQUFBLFVBQVUsRUFBRSxVQUF4QjtBQUFvQ0QsSUFBQUEsUUFBUSxFQUFFO0FBQTlDLEdBQWxELEVBQTBHLFdBQTFHLENBREosRUFFSTVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0ksUUFESixFQUNjNEgsUUFBUSxLQUFLLElBQWIsSUFBcUJBLFFBQVEsS0FBSyxLQUFLLENBQXZDLEdBQTJDLEtBQUssQ0FBaEQsR0FDVkEsUUFBUSxDQUFDeEIsVUFGYixFQUdJLDZCQUhKLENBRkosQ0FESSxFQU9KeFAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRW1CLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFpUCxJQUFBQSxFQUFFLEVBQUU7QUFBakIsR0FBOUMsRUFDSTFZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ2lWLGtCQUFrQixDQUFDLFNBQUQsQ0FBbkQsRUFBZ0U7QUFBRTFILElBQUFBLFVBQVUsRUFBRUEsVUFBZDtBQUEwQkMsSUFBQUEsTUFBTSxFQUFFQTtBQUFsQyxHQUFoRSxDQURKLENBUEksRUFTSjNRLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVtQixJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhaVAsSUFBQUEsRUFBRSxFQUFFLE1BQWpCO0FBQXlCL04sSUFBQUEsRUFBRSxFQUFFLE9BQTdCO0FBQXNDSSxJQUFBQSxPQUFPLEVBQUUsSUFBL0M7QUFBcURELElBQUFBLE1BQU0sRUFBRSxNQUE3RDtBQUFxRW1KLElBQUFBLEVBQUUsRUFBRSxNQUF6RTtBQUFpRjFMLElBQUFBLEVBQUUsRUFBRSxNQUFyRjtBQUE2RnFDLElBQUFBLEVBQUUsRUFBRTtBQUFqRyxHQUE5QyxFQUNJNUssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMlksT0FBekMsRUFBa0Q7QUFBRWpRLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNJLElBQUFBLFFBQVEsRUFBRSxLQUFuQjtBQUEwQkMsSUFBQUEsVUFBVSxFQUFFO0FBQXRDLEdBQWxELEVBQXNHLGlCQUF0RyxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFWixJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTUSxJQUFBQSxLQUFLLEVBQUU7QUFBaEIsR0FBL0MsRUFBNkUsaUdBQTdFLENBRkosRUFHSWhKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3VjLG1CQUFtQixDQUFDLFNBQUQsQ0FBcEQsRUFBaUUsSUFBakUsQ0FISixFQUlJMWYsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXVDLElBQUFBLEVBQUUsRUFBRTtBQUFOLEdBQTlDLEVBQ0k3SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNxTyxNQUF6QyxFQUFpRDtBQUFFNkgsSUFBQUEsTUFBTSxFQUFFLFNBQVY7QUFBcUIzSCxJQUFBQSxPQUFPLEVBQUUsbUJBQVk7QUFBRSxhQUFPdVIsY0FBYyxDQUFDLENBQUNELFdBQUYsQ0FBckI7QUFBc0M7QUFBbEYsR0FBakQsRUFDSSxDQUFDQSxXQUFELEdBQWUsb0JBQWYsR0FBc0Msb0JBRDFDLEVBRUksR0FGSixDQURKLENBSkosRUFRSUEsV0FBVyxJQUFJM2YsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRXNDLElBQUFBLEVBQUUsRUFBRTtBQUFOLEdBQTlDLEVBQ1g1SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFdUMsSUFBQUEsRUFBRSxFQUFFO0FBQU4sR0FBOUMsRUFDSTdLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQXFELCtDQUFyRCxDQURKLEVBRUlwSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFMkMsSUFBQUEsT0FBTyxFQUFFLE1BQVg7QUFBbUJ1VSxJQUFBQSxZQUFZLEVBQUUsUUFBakM7QUFBMkNoVixJQUFBQSxHQUFHLEVBQUU7QUFBaEQsR0FBOUMsRUFDSXhLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJDLEtBQXpDLEVBQWdEO0FBQUV3ZCxJQUFBQSxRQUFRLEVBQUUsR0FBWjtBQUFpQmhoQixJQUFBQSxLQUFLLEVBQUU2Z0IsVUFBeEI7QUFBb0N2VyxJQUFBQSxRQUFRLEVBQUUsa0JBQVV2RSxDQUFWLEVBQWE7QUFBRSxhQUFPK2EsYUFBYSxDQUFDL2EsQ0FBQyxDQUFDd0UsTUFBRixDQUFTdkssS0FBVixDQUFwQjtBQUF1QyxLQUFwRztBQUFzRzJTLElBQUFBLFdBQVcsRUFBRTtBQUFuSCxHQUFoRCxDQURKLEVBRUk1UixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNxTyxNQUF6QyxFQUFpRDtBQUFFRSxJQUFBQSxPQUFPLEVBQUUyUjtBQUFYLEdBQWpELEVBQWdGLFFBQWhGLENBRkosQ0FGSixDQURXLEVBTVhGLFVBQVUsQ0FBQ0ksS0FBWCxDQUFpQixHQUFqQixFQUFzQjdTLEdBQXRCLENBQTBCLFVBQVU4UyxHQUFWLEVBQWU3UyxLQUFmLEVBQXNCO0FBQzVDLFdBQU82UyxHQUFHLElBQUluZ0IsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRWlGLE1BQUFBLEdBQUcsRUFBRUQ7QUFBUCxLQUE5QyxFQUNWdE4sT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFBcUQrVyxHQUFyRCxDQURVLEVBRVZuZ0IsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDdWMsbUJBQW1CLENBQUMsU0FBRCxDQUFwRCxFQUFpRTtBQUFFblMsTUFBQUEsR0FBRyxFQUFFRCxLQUFQO0FBQWN5RCxNQUFBQSxNQUFNLEVBQUVvUDtBQUF0QixLQUFqRSxDQUZVLENBQWQ7QUFHSCxHQUpELENBTlcsQ0FSbkIsQ0FUSSxFQTRCSm5nQixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFbUIsSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYWlQLElBQUFBLEVBQUUsRUFBRSxNQUFqQjtBQUF5Qi9OLElBQUFBLEVBQUUsRUFBRSxPQUE3QjtBQUFzQ0ksSUFBQUEsT0FBTyxFQUFFLElBQS9DO0FBQXFERCxJQUFBQSxNQUFNLEVBQUUsTUFBN0Q7QUFBcUVtSixJQUFBQSxFQUFFLEVBQUUsTUFBekU7QUFBaUYxTCxJQUFBQSxFQUFFLEVBQUUsTUFBckY7QUFBNkZxQyxJQUFBQSxFQUFFLEVBQUU7QUFBakcsR0FBOUMsRUFDSTVLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJZLE9BQXpDLEVBQWtEO0FBQUVqUSxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsS0FBbkI7QUFBMEJDLElBQUFBLFVBQVUsRUFBRTtBQUF0QyxHQUFsRCxFQUFzRyxzQkFBdEcsQ0FESixFQUVJN0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDa1YsV0FBVyxDQUFDLFNBQUQsQ0FBNUMsRUFBeUQ7QUFBRWpKLElBQUFBLFFBQVEsRUFBRXNCO0FBQVosR0FBekQsQ0FGSixDQTVCSSxDQUFSO0FBK0JIOztBQUNEaFIsa0JBQUEsR0FBcUI2WSxTQUFyQjs7Ozs7Ozs7Ozs7QUMxRWE7O0FBQ2IsSUFBSW5hLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsS0FBbUNDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDNUYsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJKLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUJHLEVBQXpCLEVBQTZCO0FBQUVHLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CQyxJQUFBQSxHQUFHLEVBQUUsZUFBVztBQUFFLGFBQU9OLENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQWM7QUFBcEQsR0FBN0I7QUFDSCxDQUh3RCxHQUduRCxVQUFTRixDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDeEIsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJGLEVBQUFBLENBQUMsQ0FBQ0csRUFBRCxDQUFELEdBQVFGLENBQUMsQ0FBQ0MsQ0FBRCxDQUFUO0FBQ0gsQ0FOcUIsQ0FBdEI7O0FBT0EsSUFBSU0sa0JBQWtCLEdBQUksUUFBUSxLQUFLQSxrQkFBZCxLQUFzQ1YsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQzNGWCxFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCLFNBQXpCLEVBQW9DO0FBQUVNLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CSSxJQUFBQSxLQUFLLEVBQUVEO0FBQTNCLEdBQXBDO0FBQ0gsQ0FGOEQsR0FFMUQsVUFBU1QsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDaEJULEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsR0FBZVMsQ0FBZjtBQUNILENBSndCLENBQXpCOztBQUtBLElBQUlFLFlBQVksR0FBSSxRQUFRLEtBQUtBLFlBQWQsSUFBK0IsVUFBVUMsR0FBVixFQUFlO0FBQzdELE1BQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFmLEVBQTJCLE9BQU9ELEdBQVA7QUFDM0IsTUFBSUUsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJRixHQUFHLElBQUksSUFBWCxFQUFpQixLQUFLLElBQUlWLENBQVQsSUFBY1UsR0FBZDtBQUFtQixRQUFJVixDQUFDLEtBQUssU0FBTixJQUFtQkosTUFBTSxDQUFDaUIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxHQUFyQyxFQUEwQ1YsQ0FBMUMsQ0FBdkIsRUFBcUVMLGVBQWUsQ0FBQ2lCLE1BQUQsRUFBU0YsR0FBVCxFQUFjVixDQUFkLENBQWY7QUFBeEY7O0FBQ2pCTSxFQUFBQSxrQkFBa0IsQ0FBQ00sTUFBRCxFQUFTRixHQUFULENBQWxCOztBQUNBLFNBQU9FLE1BQVA7QUFDSCxDQU5EOztBQU9BLElBQUlJLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHZCxZQUFZLENBQUNVLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUExQjs7QUFDQSxJQUFJaWUsWUFBWSxHQUFHcGUsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLG1HQUFELENBQVIsQ0FBbEM7O0FBQ0EsSUFBSW9hLFdBQVcsR0FBR3ZhLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyx1SEFBRCxDQUFSLENBQWpDOztBQUNBLElBQUk4ZixtQkFBbUIsR0FBR2pnQixlQUFlLENBQUNHLG1CQUFPLENBQUMsdUlBQUQsQ0FBUixDQUF6Qzs7QUFDQSxJQUFJSyxPQUFPLEdBQUdMLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSW1hLG1CQUFtQixHQUFHbmEsbUJBQU8sQ0FBQyxnRkFBRCxDQUFqQzs7QUFDQSxJQUFJK1UsSUFBSSxHQUFHL1UsbUJBQU8sQ0FBQyxrRUFBRCxDQUFsQjs7QUFDQSxJQUFJcWEsc0JBQXNCLEdBQUdyYSxtQkFBTyxDQUFDLGtGQUFELENBQXBDOztBQUNBLFNBQVMrWSxXQUFULENBQXFCaFksRUFBckIsRUFBeUI7QUFDckIsTUFBSUMsRUFBSjs7QUFDQSxNQUFJeVIsVUFBVSxHQUFHMVIsRUFBRSxDQUFDMFIsVUFBcEIsQ0FGcUIsQ0FHckI7QUFDQTs7QUFDQSxNQUFJb0ksTUFBTSxHQUFHLENBQUMsR0FBR1YsbUJBQW1CLENBQUNXLG1CQUF4QixHQUFiO0FBQ0F2UyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ2lLLFVBQXJDO0FBQ0EsTUFBSXdJLEdBQUcsR0FBRyxDQUFDLEdBQUc3YSxPQUFPLENBQUM4YSxTQUFaLEdBQVY7O0FBQ0EsTUFBSS9ULEVBQUUsR0FBRyxDQUFDLEdBQUdrVCxzQkFBc0IsQ0FBQ2UsYUFBM0IsRUFBMEM7QUFDL0NsUixJQUFBQSxJQUFJLEVBQUUsWUFEeUM7QUFFL0NtUixJQUFBQSxPQUFPLEVBQUU7QUFGc0MsR0FBMUMsQ0FBVDtBQUFBLE1BR0lDLGNBQWMsR0FBR25VLEVBQUUsQ0FBQyxDQUFELENBSHZCOztBQUlBLE1BQUlvVSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFVcE0sS0FBVixFQUFpQnBPLEVBQWpCLEVBQXFCO0FBQ2hDLFFBQUlDLEVBQUUsR0FBR0QsRUFBRSxLQUFLLEtBQUssQ0FBWixHQUFnQixFQUFoQixHQUFxQkEsRUFBOUI7QUFBQSxRQUFrQ29HLEVBQUUsR0FBR25HLEVBQUUsQ0FBQ21ELElBQTFDO0FBQUEsUUFBZ0RBLElBQUksR0FBR2dELEVBQUUsS0FBSyxLQUFLLENBQVosR0FBZ0IsV0FBaEIsR0FBOEJBLEVBQXJGO0FBQUEsUUFBeUZHLEVBQUUsR0FBR3RHLEVBQUUsQ0FBQ3dhLFNBQWpHO0FBQUEsUUFBNEdBLFNBQVMsR0FBR2xVLEVBQUUsS0FBSyxLQUFLLENBQVosR0FBZ0IsS0FBaEIsR0FBd0JBLEVBQWhKOztBQUNBLFFBQUltVSxDQUFDLEdBQUdyWSxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBUjtBQUNBa1ksSUFBQUEsQ0FBQyxDQUFDaFEsSUFBRixHQUFTMEQsS0FBVDtBQUNBc00sSUFBQUEsQ0FBQyxDQUFDRixRQUFGLEdBQWEsQ0FBQyxHQUFHbEIsc0JBQXNCLENBQUNxQixjQUEzQixFQUEyQ0YsU0FBM0MsRUFBc0RyWCxJQUF0RCxDQUFiO0FBQ0FzWCxJQUFBQSxDQUFDLENBQUNFLEtBQUY7QUFDQTtBQUNILEdBUEQ7O0FBUUEsTUFBSUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFZO0FBQUUsV0FBT04sY0FBYyxDQUFDTCxHQUFHLENBQUNZLE9BQUwsQ0FBZCxDQUE0QnZYLElBQTVCLENBQWlDaVgsUUFBakMsQ0FBUDtBQUFvRCxHQUEzRjs7QUFDQSxHQUFDLEdBQUduYixPQUFPLENBQUNnSSxTQUFaLEVBQXVCLFlBQVk7QUFDL0JHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJxUyxNQUE1QjtBQUNILEdBRkQsRUFFRyxDQUFDQSxNQUFELENBRkg7O0FBR0EsTUFBSXZULEVBQUUsR0FBRyxDQUFDLEdBQUdsSCxPQUFPLENBQUMwRyxRQUFaLEVBQXNCLEtBQXRCLENBQVQ7QUFBQSxNQUF1QzBMLFVBQVUsR0FBR2xMLEVBQUUsQ0FBQyxDQUFELENBQXREO0FBQUEsTUFBMkR5VSxhQUFhLEdBQUd6VSxFQUFFLENBQUMsQ0FBRCxDQUE3RTs7QUFDQSxTQUFRbEgsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDMGEsWUFBWSxDQUFDLFNBQUQsQ0FBN0MsRUFBMEQsSUFBMUQsRUFDSjdkLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDLElBQTlDLEVBQ0l0SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyWSxPQUF6QyxFQUFrRDtBQUFFN0wsSUFBQUEsRUFBRSxFQUFFLElBQU47QUFBWS9ELElBQUFBLFVBQVUsRUFBRSxVQUF4QjtBQUFvQ0QsSUFBQUEsUUFBUSxFQUFFO0FBQTlDLEdBQWxELEVBQTBHLGNBQTFHLENBREosQ0FESSxFQUdKNUksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDNFcsbUJBQW1CLENBQUNtRCxVQUFyRCxFQUFpRTtBQUFFQyxJQUFBQSxNQUFNLEVBQUUxQztBQUFWLEdBQWpFLEVBQ0l6YSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFdUMsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0QsSUFBQUEsRUFBRSxFQUFFLENBQWI7QUFBZ0JELElBQUFBLEVBQUUsRUFBRSxPQUFwQjtBQUE2QitOLElBQUFBLEVBQUUsRUFBRTtBQUFqQyxHQUE5QyxFQUNJMVksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0MsSUFBL0MsRUFDSWxKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzRaLFdBQXpDLEVBQXNEO0FBQUV6TyxJQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQmQsSUFBQUEsVUFBVSxFQUFFO0FBQS9CLEdBQXRELEVBQ0luSyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUM2WixTQUF6QyxFQUFvRDtBQUFFQyxJQUFBQSxPQUFPLEVBQUUsY0FBWDtBQUEyQnBSLElBQUFBLEVBQUUsRUFBRTtBQUEvQixHQUFwRCxFQUEwRixnQkFBMUYsQ0FESixFQUVJeEksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDbEQsT0FBTyxDQUFDbWQsTUFBekMsRUFBaUQ7QUFBRTdULElBQUFBLFFBQVEsRUFBRSxvQkFBWTtBQUFFLGFBQU9vUyxhQUFhLENBQUMsQ0FBQ3ZKLFVBQUYsQ0FBcEI7QUFBb0MsS0FBOUQ7QUFBZ0U3SyxJQUFBQSxFQUFFLEVBQUU7QUFBcEUsR0FBakQsQ0FGSixDQURKLEVBSUl2SCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNnUyxJQUF6QyxFQUErQztBQUFFbEosSUFBQUEsUUFBUSxFQUFFLE1BQVo7QUFBb0JxTixJQUFBQSxFQUFFLEVBQUUsQ0FBeEI7QUFBMkJELElBQUFBLE1BQU0sRUFBRSxTQUFuQztBQUE4QzNILElBQUFBLE9BQU8sRUFBRW1OLGtCQUF2RDtBQUEyRTVPLElBQUFBLEVBQUUsRUFBRStILElBQUksQ0FBQzBJO0FBQXBGLEdBQS9DLENBSkosRUFLSTVDLE1BQU0sQ0FBQzZDLE1BQVAsSUFBaUIsS0FBakIsR0FDTXRkLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ2dTLElBQXpDLEVBQStDO0FBQUVsSixJQUFBQSxRQUFRLEVBQUUsTUFBWjtBQUFvQm9OLElBQUFBLE1BQU0sRUFBRSxTQUE1QjtBQUF1QzNILElBQUFBLE9BQU8sRUFBRW9NLE1BQU0sQ0FBQzhDLEtBQXZEO0FBQThEM1EsSUFBQUEsRUFBRSxFQUFFK0gsSUFBSSxDQUFDNkk7QUFBdkUsR0FBL0MsQ0FETixHQUVNeGQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDZ1MsSUFBekMsRUFBK0M7QUFBRWxKLElBQUFBLFFBQVEsRUFBRSxNQUFaO0FBQW9Cb04sSUFBQUEsTUFBTSxFQUFFLFNBQTVCO0FBQXVDM0gsSUFBQUEsT0FBTyxFQUFFb00sTUFBTSxDQUFDZ0QsSUFBdkQ7QUFBNkQ3USxJQUFBQSxFQUFFLEVBQUUrSCxJQUFJLENBQUMrSTtBQUF0RSxHQUEvQyxDQVBWLENBREosQ0FESixFQVVJMWQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRThMLElBQUFBLFFBQVEsRUFBRSxVQUFaO0FBQXdCNU0sSUFBQUEsS0FBSyxFQUFFLE1BQS9CO0FBQXVDbVcsSUFBQUEsU0FBUyxFQUFFbEQsTUFBTSxDQUFDNkMsTUFBUCxHQUFnQixPQUFoQixHQUEwQixPQUE1RTtBQUFxRjNTLElBQUFBLEVBQUUsRUFBRSxPQUF6RjtBQUFrR0ksSUFBQUEsT0FBTyxFQUFFLE1BQTNHO0FBQW1IRCxJQUFBQSxNQUFNLEVBQUUsTUFBM0g7QUFBbUlvSixJQUFBQSxRQUFRLEVBQUU7QUFBN0ksR0FBOUMsRUFDSWxVLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUU4TCxJQUFBQSxRQUFRLEVBQUUsVUFBWjtBQUF3QnlHLElBQUFBLEdBQUcsRUFBRUE7QUFBN0IsR0FBOUMsRUFBa0YsQ0FBQyxDQUFDamEsRUFBRSxHQUFHeVIsVUFBVSxLQUFLLElBQWYsSUFBdUJBLFVBQVUsS0FBSyxLQUFLLENBQTNDLEdBQStDLEtBQUssQ0FBcEQsR0FBd0RBLFVBQVUsQ0FBQ3pDLFFBQXpFLE1BQXVGLElBQXZGLElBQStGaFAsRUFBRSxLQUFLLEtBQUssQ0FBM0csR0FBK0csS0FBSyxDQUFwSCxHQUF3SEEsRUFBRSxDQUFDeUYsTUFBNUgsSUFDNUVyRyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUM2VyxXQUFXLENBQUMsU0FBRCxDQUE1QyxFQUF5RDtBQUFFNUgsSUFBQUEsVUFBVSxFQUFFQSxVQUFkO0FBQTBCQyxJQUFBQSxVQUFVLEVBQUVBO0FBQXRDLEdBQXpELENBRDRFLEdBRTVFclMsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRWlDLElBQUFBLFNBQVMsRUFBRSxRQUFiO0FBQXVCWCxJQUFBQSxHQUFHLEVBQUUsQ0FBNUI7QUFBK0I3QixJQUFBQSxDQUFDLEVBQUU7QUFBbEMsR0FBL0MsRUFDRTNJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVSLElBQUFBLFFBQVEsRUFBRSxJQUFaO0FBQWtCQyxJQUFBQSxVQUFVLEVBQUUsTUFBOUI7QUFBc0NHLElBQUFBLEtBQUssRUFBRTtBQUE3QyxHQUEvQyxFQUEwRyx5QkFBMUcsQ0FERixFQUVFaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRVIsSUFBQUEsUUFBUSxFQUFFLElBQVo7QUFBa0JDLElBQUFBLFVBQVUsRUFBRSxVQUE5QjtBQUEwQ0csSUFBQUEsS0FBSyxFQUFFO0FBQWpELEdBQS9DLEVBQThHLDJEQUE5RyxDQUZGLEVBR0VoSixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUN1YyxtQkFBbUIsQ0FBQyxTQUFELENBQXBELEVBQWlFLElBQWpFLENBSEYsQ0FGTixDQURKLENBVkosQ0FISSxDQUFSO0FBb0JIOztBQUNEaGdCLGtCQUFBLEdBQXFCaVosV0FBckI7Ozs7Ozs7Ozs7O0FDL0VhOztBQUNiLElBQUlsWixlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUlJLE9BQU8sR0FBR1AsZUFBZSxDQUFDRyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBN0I7O0FBQ0EsSUFBSXlZLFdBQVcsR0FBRzVZLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyx1SEFBRCxDQUFSLENBQWpDOztBQUNBLElBQUlpZSxZQUFZLEdBQUdwZSxlQUFlLENBQUNHLG1CQUFPLENBQUMsbUdBQUQsQ0FBUixDQUFsQzs7QUFDQSxTQUFTd2dCLFNBQVQsQ0FBbUJ6ZixFQUFuQixFQUF1QjtBQUNuQixNQUFJK1AsVUFBVSxHQUFHL1AsRUFBRSxDQUFDK1AsVUFBcEI7QUFDQSxTQUFRMVEsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDMGEsWUFBWSxDQUFDLFNBQUQsQ0FBN0MsRUFBMEQsSUFBMUQsRUFDSjdkLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDLElBQTlDLEVBQ0l0SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyWSxPQUF6QyxFQUFrRDtBQUFFN0wsSUFBQUEsRUFBRSxFQUFFLElBQU47QUFBWS9ELElBQUFBLFVBQVUsRUFBRSxVQUF4QjtBQUFvQ0QsSUFBQUEsUUFBUSxFQUFFO0FBQTlDLEdBQWxELEVBQTBHLFlBQTFHLENBREosQ0FESSxFQUdKNUksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRW1CLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFpUCxJQUFBQSxFQUFFLEVBQUUsT0FBakI7QUFBMEIvTixJQUFBQSxFQUFFLEVBQUUsT0FBOUI7QUFBdUNJLElBQUFBLE9BQU8sRUFBRSxJQUFoRDtBQUFzREQsSUFBQUEsTUFBTSxFQUFFLE1BQTlEO0FBQXNFbUosSUFBQUEsRUFBRSxFQUFFLE1BQTFFO0FBQWtGMUwsSUFBQUEsRUFBRSxFQUFFLE1BQXRGO0FBQThGcUMsSUFBQUEsRUFBRSxFQUFFO0FBQWxHLEdBQTlDLEVBQ0k1SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyWSxPQUF6QyxFQUFrRDtBQUFFalEsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLEtBQW5CO0FBQTBCQyxJQUFBQSxVQUFVLEVBQUU7QUFBdEMsR0FBbEQsRUFBc0csWUFBdEcsQ0FESixFQUVJN0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDa1YsV0FBVyxDQUFDLFNBQUQsQ0FBNUMsRUFBeUQ7QUFBRWpKLElBQUFBLFFBQVEsRUFBRXNCO0FBQVosR0FBekQsQ0FGSixDQUhJLENBQVI7QUFNSDs7QUFDRGhSLGtCQUFBLEdBQXFCMGdCLFNBQXJCOzs7Ozs7Ozs7OztBQ2xCYTs7QUFDYixJQUFJaGlCLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsS0FBbUNDLE1BQU0sQ0FBQ0MsTUFBUCxHQUFpQixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDNUYsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJKLEVBQUFBLE1BQU0sQ0FBQ08sY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUJHLEVBQXpCLEVBQTZCO0FBQUVHLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CQyxJQUFBQSxHQUFHLEVBQUUsZUFBVztBQUFFLGFBQU9OLENBQUMsQ0FBQ0MsQ0FBRCxDQUFSO0FBQWM7QUFBcEQsR0FBN0I7QUFDSCxDQUh3RCxHQUduRCxVQUFTRixDQUFULEVBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsRUFBbEIsRUFBc0I7QUFDeEIsTUFBSUEsRUFBRSxLQUFLQyxTQUFYLEVBQXNCRCxFQUFFLEdBQUdELENBQUw7QUFDdEJGLEVBQUFBLENBQUMsQ0FBQ0csRUFBRCxDQUFELEdBQVFGLENBQUMsQ0FBQ0MsQ0FBRCxDQUFUO0FBQ0gsQ0FOcUIsQ0FBdEI7O0FBT0EsSUFBSU0sa0JBQWtCLEdBQUksUUFBUSxLQUFLQSxrQkFBZCxLQUFzQ1YsTUFBTSxDQUFDQyxNQUFQLEdBQWlCLFVBQVNDLENBQVQsRUFBWVMsQ0FBWixFQUFlO0FBQzNGWCxFQUFBQSxNQUFNLENBQUNPLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCLFNBQXpCLEVBQW9DO0FBQUVNLElBQUFBLFVBQVUsRUFBRSxJQUFkO0FBQW9CSSxJQUFBQSxLQUFLLEVBQUVEO0FBQTNCLEdBQXBDO0FBQ0gsQ0FGOEQsR0FFMUQsVUFBU1QsQ0FBVCxFQUFZUyxDQUFaLEVBQWU7QUFDaEJULEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsR0FBZVMsQ0FBZjtBQUNILENBSndCLENBQXpCOztBQUtBLElBQUlFLFlBQVksR0FBSSxRQUFRLEtBQUtBLFlBQWQsSUFBK0IsVUFBVUMsR0FBVixFQUFlO0FBQzdELE1BQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFmLEVBQTJCLE9BQU9ELEdBQVA7QUFDM0IsTUFBSUUsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJRixHQUFHLElBQUksSUFBWCxFQUFpQixLQUFLLElBQUlWLENBQVQsSUFBY1UsR0FBZDtBQUFtQixRQUFJVixDQUFDLEtBQUssU0FBTixJQUFtQkosTUFBTSxDQUFDaUIsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxHQUFyQyxFQUEwQ1YsQ0FBMUMsQ0FBdkIsRUFBcUVMLGVBQWUsQ0FBQ2lCLE1BQUQsRUFBU0YsR0FBVCxFQUFjVixDQUFkLENBQWY7QUFBeEY7O0FBQ2pCTSxFQUFBQSxrQkFBa0IsQ0FBQ00sTUFBRCxFQUFTRixHQUFULENBQWxCOztBQUNBLFNBQU9FLE1BQVA7QUFDSCxDQU5EOztBQU9BLElBQUlJLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVU4sR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTyxrQkFBQSxHQUFxQixJQUFyQjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdGLG1CQUFPLENBQUMscUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHZCxZQUFZLENBQUNVLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUExQjs7QUFDQSxJQUFJZ1osa0JBQWtCLEdBQUduWixlQUFlLENBQUNHLG1CQUFPLENBQUMscUlBQUQsQ0FBUixDQUF4Qzs7QUFDQSxJQUFJeVksV0FBVyxHQUFHNVksZUFBZSxDQUFDRyxtQkFBTyxDQUFDLHVIQUFELENBQVIsQ0FBakM7O0FBQ0EsSUFBSWllLFlBQVksR0FBR3BlLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyxtR0FBRCxDQUFSLENBQWxDOztBQUNBLFNBQVNpWixZQUFULENBQXNCbFksRUFBdEIsRUFBMEI7QUFDdEIsTUFBSStQLFVBQVUsR0FBRy9QLEVBQUUsQ0FBQytQLFVBQXBCO0FBQUEsTUFBZ0MyUCxrQkFBa0IsR0FBRzFmLEVBQUUsQ0FBQzBmLGtCQUF4RDtBQUNBLEdBQUMsR0FBR3JnQixPQUFPLENBQUNnSSxTQUFaLEVBQXVCLFlBQVk7QUFDL0JHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJpWSxrQkFBNUI7QUFDSCxHQUZELEVBRUcsRUFGSDtBQUdBLFNBQVFyZ0IsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDMGEsWUFBWSxDQUFDLFNBQUQsQ0FBN0MsRUFBMEQsSUFBMUQsRUFDSjdkLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVtQixJQUFBQSxDQUFDLEVBQUU7QUFBTCxHQUE5QyxFQUNJekosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMlksT0FBekMsRUFBa0Q7QUFBRTdMLElBQUFBLEVBQUUsRUFBRSxJQUFOO0FBQVkvRCxJQUFBQSxVQUFVLEVBQUUsVUFBeEI7QUFBb0NELElBQUFBLFFBQVEsRUFBRTtBQUE5QyxHQUFsRCxFQUEwRyxlQUExRyxDQURKLENBREksRUFHSjVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVvUSxJQUFBQSxFQUFFLEVBQUUsTUFBTjtBQUFjalAsSUFBQUEsQ0FBQyxFQUFFO0FBQWpCLEdBQTlDLEVBQ0l6SixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUN5VixrQkFBa0IsQ0FBQyxTQUFELENBQW5ELEVBQWdFLElBQWhFLENBREosQ0FISSxFQUtKeUgsa0JBQWtCLENBQUNoYSxNQUFuQixJQUE2QnJHLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUVtQixJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhaVAsSUFBQUEsRUFBRSxFQUFFLE1BQWpCO0FBQXlCL04sSUFBQUEsRUFBRSxFQUFFLE9BQTdCO0FBQXNDSSxJQUFBQSxPQUFPLEVBQUUsSUFBL0M7QUFBcURELElBQUFBLE1BQU0sRUFBRSxNQUE3RDtBQUFxRW1KLElBQUFBLEVBQUUsRUFBRSxNQUF6RTtBQUFpRjFMLElBQUFBLEVBQUUsRUFBRSxNQUFyRjtBQUE2RnFDLElBQUFBLEVBQUUsRUFBRTtBQUFqRyxHQUE5QyxFQUN6QjVLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQzJZLE9BQXpDLEVBQWtEO0FBQUVqUSxJQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTSSxJQUFBQSxRQUFRLEVBQUUsS0FBbkI7QUFBMEJDLElBQUFBLFVBQVUsRUFBRTtBQUF0QyxHQUFsRCxFQUFzRyx5QkFBdEcsQ0FEeUIsRUFFekI3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNrTCxLQUF6QyxFQUFnRDtBQUFFRyxJQUFBQSxTQUFTLEVBQUU7QUFBYixHQUFoRCxFQUFzRWtWLGtCQUFrQixDQUFDaFQsR0FBbkIsQ0FBdUIsVUFBVWlULElBQVYsRUFBZ0JoVCxLQUFoQixFQUF1QjtBQUFFLFdBQU90TixPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN5Z0IsR0FBekMsRUFBOEM7QUFBRWhULE1BQUFBLEdBQUcsRUFBRUQsS0FBUDtBQUFjNUQsTUFBQUEsSUFBSSxFQUFFLElBQXBCO0FBQTBCcUQsTUFBQUEsT0FBTyxFQUFFLFFBQW5DO0FBQTZDcUIsTUFBQUEsV0FBVyxFQUFFO0FBQTFELEtBQTlDLEVBQ3pIa1MsSUFBSSxDQUFDdlAsTUFEb0gsRUFFekgsS0FGeUgsRUFHekgvUSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFUixNQUFBQSxRQUFRLEVBQUUsTUFBWjtBQUFvQmlKLE1BQUFBLEVBQUUsRUFBRSxDQUF4QjtBQUEyQmhKLE1BQUFBLFVBQVUsRUFBRTtBQUF2QyxLQUEvQyxFQUFvR3lYLElBQUksQ0FBQ0UsS0FBekcsQ0FIeUgsQ0FBUDtBQUdDLEdBSGpELENBQXRFLENBRnlCLENBTHpCLEVBV0p4Z0IsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRW1CLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFpUCxJQUFBQSxFQUFFLEVBQUUsTUFBakI7QUFBeUIvTixJQUFBQSxFQUFFLEVBQUUsT0FBN0I7QUFBc0NJLElBQUFBLE9BQU8sRUFBRSxJQUEvQztBQUFxREQsSUFBQUEsTUFBTSxFQUFFLE1BQTdEO0FBQXFFbUosSUFBQUEsRUFBRSxFQUFFLE1BQXpFO0FBQWlGMUwsSUFBQUEsRUFBRSxFQUFFLE1BQXJGO0FBQTZGcUMsSUFBQUEsRUFBRSxFQUFFO0FBQWpHLEdBQTlDLEVBQ0k1SyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUMyWSxPQUF6QyxFQUFrRDtBQUFFalEsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0ksSUFBQUEsUUFBUSxFQUFFLEtBQW5CO0FBQTBCQyxJQUFBQSxVQUFVLEVBQUU7QUFBdEMsR0FBbEQsRUFBc0csNkJBQXRHLENBREosRUFFSTdJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVaLElBQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNRLElBQUFBLEtBQUssRUFBRTtBQUFoQixHQUEvQyxFQUE2RSxpR0FBN0UsQ0FGSixFQUdJaEosT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDa1YsV0FBVyxDQUFDLFNBQUQsQ0FBNUMsRUFBeUQ7QUFBRWpKLElBQUFBLFFBQVEsRUFBRXNCO0FBQVosR0FBekQsQ0FISixDQVhJLENBQVI7QUFlSDs7QUFDRGhSLGtCQUFBLEdBQXFCbVosWUFBckI7Ozs7Ozs7Ozs7O0FDbERhOztBQUNiLElBQUlwWixlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVOLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQU8sa0JBQUEsR0FBcUIsSUFBckI7O0FBQ0EsSUFBSUksT0FBTyxHQUFHRixtQkFBTyxDQUFDLHFGQUFELENBQXJCOztBQUNBLElBQUk2TyxRQUFRLEdBQUdoUCxlQUFlLENBQUNHLG1CQUFPLENBQUMsK0NBQUQsQ0FBUixDQUE5Qjs7QUFDQSxJQUFJSSxPQUFPLEdBQUdQLGVBQWUsQ0FBQ0csbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQTdCOztBQUNBLElBQUlpZSxZQUFZLEdBQUdwZSxlQUFlLENBQUNHLG1CQUFPLENBQUMsc0dBQUQsQ0FBUixDQUFsQzs7QUFDQSxTQUFTNmdCLFdBQVQsQ0FBcUI5ZixFQUFyQixFQUF5QjtBQUNyQixNQUFJd1osTUFBTSxHQUFHeFosRUFBRSxDQUFDd1osTUFBaEI7QUFBQSxNQUF3QjlLLElBQUksR0FBRzFPLEVBQUUsQ0FBQzBPLElBQWxDO0FBQ0EsU0FBUXJQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQzBhLFlBQVksQ0FBQyxTQUFELENBQTdDLEVBQTBELElBQTFELEVBQ0o3ZCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QyxJQUE5QyxFQUNJdEksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDMlksT0FBekMsRUFBa0Q7QUFBRTdMLElBQUFBLEVBQUUsRUFBRSxJQUFOO0FBQVkvRCxJQUFBQSxVQUFVLEVBQUUsVUFBeEI7QUFBb0NELElBQUFBLFFBQVEsRUFBRTtBQUE5QyxHQUFsRCxFQUEwRyxZQUExRyxDQURKLENBREksRUFHSjVJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVGLElBQUFBLEtBQUssRUFBRSxVQUFUO0FBQXFCd0IsSUFBQUEsR0FBRyxFQUFFLENBQTFCO0FBQTZCa08sSUFBQUEsRUFBRSxFQUFFO0FBQWpDLEdBQS9DLEVBQ0kxWSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFcUgsSUFBQUEsTUFBTSxFQUFFLE9BQVY7QUFBbUJ3TCxJQUFBQSxJQUFJLEVBQUUsR0FBekI7QUFBOEI1UyxJQUFBQSxPQUFPLEVBQUUsUUFBdkM7QUFBaURnQyxJQUFBQSxTQUFTLEVBQUUsUUFBNUQ7QUFBc0VoQixJQUFBQSxVQUFVLEVBQUUsUUFBbEY7QUFBNEZ4QixJQUFBQSxDQUFDLEVBQUUsQ0FBL0Y7QUFBa0dnQyxJQUFBQSxFQUFFLEVBQUU7QUFBdEcsR0FBL0MsRUFDSTNLLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3lQLE1BQXpDLEVBQWlEO0FBQUU3RixJQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlbEIsSUFBQUEsRUFBRSxFQUFFLENBQW5CO0FBQXNCekUsSUFBQUEsSUFBSSxFQUFFLEdBQUdJLE1BQUgsQ0FBVWtMLElBQUksQ0FBQ0csVUFBZixFQUEyQixHQUEzQixFQUFnQ3JMLE1BQWhDLENBQXVDa0wsSUFBSSxDQUFDSSxTQUE1QyxDQUE1QjtBQUFvRlgsSUFBQUEsR0FBRyxFQUFFO0FBQXpGLEdBQWpELENBREosRUFFSTlPLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUV3RCxJQUFBQSxFQUFFLEVBQUUsSUFBTjtBQUFZaEUsSUFBQUEsUUFBUSxFQUFFO0FBQXRCLEdBQS9DLEVBQThFLEdBQUd6RSxNQUFILENBQVVrTCxJQUFJLENBQUNHLFVBQWYsRUFBMkIsR0FBM0IsRUFBZ0NyTCxNQUFoQyxDQUF1Q2tMLElBQUksQ0FBQ0ksU0FBNUMsQ0FBOUUsQ0FGSixFQUdJelAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRXdELElBQUFBLEVBQUUsRUFBRTtBQUFOLEdBQS9DLEVBQTREeUMsSUFBSSxDQUFDRyxVQUFqRSxDQUhKLENBREosRUFLSXhQLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3dJLEdBQXpDLEVBQThDO0FBQUV5VCxJQUFBQSxJQUFJLEVBQUUsR0FBUjtBQUFhbFIsSUFBQUEsRUFBRSxFQUFFLENBQWpCO0FBQW9CRCxJQUFBQSxFQUFFLEVBQUUsQ0FBeEI7QUFBMkJELElBQUFBLEVBQUUsRUFBRTtBQUEvQixHQUE5QyxFQUNJM0ssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRXdELElBQUFBLEVBQUUsRUFBRSxJQUFOO0FBQVloRSxJQUFBQSxRQUFRLEVBQUUsSUFBdEI7QUFBNEJDLElBQUFBLFVBQVUsRUFBRTtBQUF4QyxHQUEvQyxFQUFpRyxpQkFBakcsQ0FESixFQUVJN0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDd0ksR0FBekMsRUFBOEM7QUFBRW1CLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFpUCxJQUFBQSxFQUFFLEVBQUU7QUFBakIsR0FBOUMsRUFDSTFZLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVPLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFXLElBQUFBLGNBQWMsRUFBRSxlQUE3QjtBQUE4Q3pCLElBQUFBLENBQUMsRUFBRSxDQUFqRDtBQUFvREYsSUFBQUEsWUFBWSxFQUFFO0FBQWxFLEdBQS9DLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFUCxJQUFBQSxVQUFVLEVBQUU7QUFBZCxHQUEvQyxFQUEyRSxXQUEzRSxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUFxRCxDQUFDLEdBQUdxRixRQUFRLENBQUMsU0FBRCxDQUFaLEVBQXlCWSxJQUFJLENBQUMyTSxTQUE5QixFQUF5QzlNLE1BQXpDLENBQWdELEdBQWhELENBQXJELENBRkosQ0FESixFQUlJbFAsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRU8sSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYVcsSUFBQUEsY0FBYyxFQUFFLGVBQTdCO0FBQThDekIsSUFBQUEsQ0FBQyxFQUFFLENBQWpEO0FBQW9ERixJQUFBQSxZQUFZLEVBQUU7QUFBbEUsR0FBL0MsRUFDSXpJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVQLElBQUFBLFVBQVUsRUFBRTtBQUFkLEdBQS9DLEVBQTJFLGtCQUEzRSxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUFxRCxXQUFyRCxDQUZKLENBSkosRUFPSXBKLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVPLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFXLElBQUFBLGNBQWMsRUFBRSxlQUE3QjtBQUE4Q2tGLElBQUFBLEtBQUssRUFBRSxRQUFyRDtBQUErRDNHLElBQUFBLENBQUMsRUFBRSxDQUFsRTtBQUFxRUYsSUFBQUEsWUFBWSxFQUFFO0FBQW5GLEdBQS9DLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFUCxJQUFBQSxVQUFVLEVBQUU7QUFBZCxHQUEvQyxFQUEyRSxTQUEzRSxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvYyxLQUF6QyxFQUFnRDtBQUFFOU4sSUFBQUEsV0FBVyxFQUFFLFFBQWY7QUFBeUJyQixJQUFBQSxPQUFPLEVBQUU7QUFBbEMsR0FBaEQsRUFBNkZzQyxJQUFJLFdBQUosV0FBN0YsQ0FGSixDQVBKLEVBVUlyUCxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUN3SSxHQUF6QyxFQUE4QztBQUFFMkwsSUFBQUEsRUFBRSxFQUFFLENBQU47QUFBUzFMLElBQUFBLEVBQUUsRUFBRTtBQUFiLEdBQTlDLEVBQ0l2SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFUixJQUFBQSxRQUFRLEVBQUUsSUFBWjtBQUFrQkMsSUFBQUEsVUFBVSxFQUFFO0FBQTlCLEdBQS9DLEVBQXVGLGtCQUF2RixDQURKLENBVkosRUFZSTdJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVPLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFXLElBQUFBLGNBQWMsRUFBRSxlQUE3QjtBQUE4Q1EsSUFBQUEsRUFBRSxFQUFFLENBQWxEO0FBQXFEQyxJQUFBQSxFQUFFLEVBQUUsS0FBekQ7QUFBZ0VwQyxJQUFBQSxZQUFZLEVBQUU7QUFBOUUsR0FBL0MsRUFDSXpJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVQLElBQUFBLFVBQVUsRUFBRTtBQUFkLEdBQS9DLEVBQTJFLFdBQTNFLENBREosRUFFSTdJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0krUSxNQUFNLENBQUN3QyxRQURYLEVBRUksVUFGSixDQUZKLENBWkosRUFpQkkzYyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVyxJQUFBQSxjQUFjLEVBQUUsZUFBN0I7QUFBOENRLElBQUFBLEVBQUUsRUFBRSxDQUFsRDtBQUFxREMsSUFBQUEsRUFBRSxFQUFFLEtBQXpEO0FBQWdFcEMsSUFBQUEsWUFBWSxFQUFFO0FBQTlFLEdBQS9DLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFUCxJQUFBQSxVQUFVLEVBQUU7QUFBZCxHQUEvQyxFQUEyRSxXQUEzRSxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUNJK1EsTUFBTSxDQUFDeUMsUUFEWCxFQUVJLFVBRkosQ0FGSixDQWpCSixFQXNCSTVjLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVPLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFXLElBQUFBLGNBQWMsRUFBRSxlQUE3QjtBQUE4Q1EsSUFBQUEsRUFBRSxFQUFFLENBQWxEO0FBQXFEQyxJQUFBQSxFQUFFLEVBQUUsS0FBekQ7QUFBZ0VwQyxJQUFBQSxZQUFZLEVBQUU7QUFBOUUsR0FBL0MsRUFDSXpJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVQLElBQUFBLFVBQVUsRUFBRTtBQUFkLEdBQS9DLEVBQTJFLGFBQTNFLENBREosRUFFSTdJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0krUSxNQUFNLENBQUMwQyxVQURYLEVBRUksVUFGSixDQUZKLENBdEJKLEVBMkJJN2MsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRU8sSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYVcsSUFBQUEsY0FBYyxFQUFFLGVBQTdCO0FBQThDUSxJQUFBQSxFQUFFLEVBQUUsQ0FBbEQ7QUFBcURDLElBQUFBLEVBQUUsRUFBRSxLQUF6RDtBQUFnRXBDLElBQUFBLFlBQVksRUFBRTtBQUE5RSxHQUEvQyxFQUNJekksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRVAsSUFBQUEsVUFBVSxFQUFFO0FBQWQsR0FBL0MsRUFBMkUsWUFBM0UsQ0FESixFQUVJN0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFDSStRLE1BQU0sQ0FBQzJDLFNBRFgsRUFFSSxVQUZKLENBRkosQ0EzQkosRUFnQ0k5YyxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNvSixJQUF6QyxFQUErQztBQUFFTyxJQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhVyxJQUFBQSxjQUFjLEVBQUUsZUFBN0I7QUFBOENRLElBQUFBLEVBQUUsRUFBRSxDQUFsRDtBQUFxREMsSUFBQUEsRUFBRSxFQUFFLEtBQXpEO0FBQWdFcEMsSUFBQUEsWUFBWSxFQUFFO0FBQTlFLEdBQS9DLEVBQ0l6SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQztBQUFFUCxJQUFBQSxVQUFVLEVBQUU7QUFBZCxHQUEvQyxFQUEyRSxZQUEzRSxDQURKLEVBRUk3SSxPQUFPLENBQUMsU0FBRCxDQUFQLENBQW1CbUQsYUFBbkIsQ0FBaUNyRCxPQUFPLENBQUNzSixJQUF6QyxFQUErQyxJQUEvQyxFQUNJK1EsTUFBTSxDQUFDNEMsU0FEWCxFQUVJLFVBRkosQ0FGSixDQWhDSixFQXFDSS9jLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ29KLElBQXpDLEVBQStDO0FBQUVPLElBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFXLElBQUFBLGNBQWMsRUFBRSxlQUE3QjtBQUE4Q1EsSUFBQUEsRUFBRSxFQUFFLENBQWxEO0FBQXFEQyxJQUFBQSxFQUFFLEVBQUUsS0FBekQ7QUFBZ0VwQyxJQUFBQSxZQUFZLEVBQUU7QUFBOUUsR0FBL0MsRUFDSXpJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDO0FBQUVQLElBQUFBLFVBQVUsRUFBRTtBQUFkLEdBQS9DLEVBQTJFLFdBQTNFLENBREosRUFFSTdJLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJtRCxhQUFuQixDQUFpQ3JELE9BQU8sQ0FBQ3NKLElBQXpDLEVBQStDLElBQS9DLEVBQ0krUSxNQUFNLENBQUM2QyxRQURYLEVBRUksVUFGSixDQUZKLENBckNKLEVBMENJaGQsT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDb0osSUFBekMsRUFBK0M7QUFBRU8sSUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYVcsSUFBQUEsY0FBYyxFQUFFLGVBQTdCO0FBQThDUSxJQUFBQSxFQUFFLEVBQUUsQ0FBbEQ7QUFBcURDLElBQUFBLEVBQUUsRUFBRTtBQUF6RCxHQUEvQyxFQUNJN0ssT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0M7QUFBRVAsSUFBQUEsVUFBVSxFQUFFO0FBQWQsR0FBL0MsRUFBMkUsYUFBM0UsQ0FESixFQUVJN0ksT0FBTyxDQUFDLFNBQUQsQ0FBUCxDQUFtQm1ELGFBQW5CLENBQWlDckQsT0FBTyxDQUFDc0osSUFBekMsRUFBK0MsSUFBL0MsRUFDSStRLE1BQU0sQ0FBQzhDLFVBRFgsRUFFSSxVQUZKLENBRkosQ0ExQ0osQ0FGSixDQUxKLENBSEksQ0FBUjtBQXlESDs7QUFDRHZkLGtCQUFBLEdBQXFCK2dCLFdBQXJCOzs7Ozs7Ozs7Ozs7QUNyRUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDblNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Q7V0FDdEQsc0NBQXNDLGlFQUFpRTtXQUN2RztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7Ozs7O1dDUkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsdUJBQXVCLDRCQUE0QjtXQUNuRDtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIsb0JBQW9CO1dBQ3JDO1dBQ0EsbUdBQW1HLFlBQVk7V0FDL0c7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFckZBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvYXBwLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0NvbXBvbmVudHMvQWRtaW5QYW5lbC9DaGFydHMvSW52aXRhdGlvbkNsaWNrcy50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9Db21wb25lbnRzL0FkbWluUGFuZWwvQ2hhcnRzL0ludml0YXRpb25SZWdpc3RyYXRpb25zLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0NvbXBvbmVudHMvQWRtaW5QYW5lbC9EYXNoYm9hcmQvQWNjb3VudEluZm9DYXJkcy50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9Db21wb25lbnRzL0FkbWluUGFuZWwvRGFzaGJvYXJkL0FjY291bnRJbmZvQ2hhcnQudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvQ29tcG9uZW50cy9BZG1pblBhbmVsL0Rhc2hib2FyZC9QYWNrYWdlTGlzdC50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9Db21wb25lbnRzL0FkbWluUGFuZWwvRGFzaGJvYXJkL1Byb2R1Y3RMaXN0LnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0NvbXBvbmVudHMvQWRtaW5QYW5lbC9EYXNoYm9hcmQvVXNlcnNMaXN0LnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0NvbXBvbmVudHMvRmxhc2hNZXNzYWdlLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0NvbXBvbmVudHMvTWFpbkxvZ28udHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvQ29tcG9uZW50cy9Ob0RhdGFGb3VuZC50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9Db21wb25lbnRzL1VzZXJQYW5lbC9DaGFydHMvSW52aXRhdGlvbkNsaWNrcy50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9Db21wb25lbnRzL1VzZXJQYW5lbC9DaGFydHMvSW52aXRhdGlvblJlZ2lzdHJhdGlvbnMudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvQ29tcG9uZW50cy9Vc2VyUGFuZWwvRGFzaGJvYXJkL0FjY291bnRJbmZvQ2FyZHMudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvQ29tcG9uZW50cy9Vc2VyUGFuZWwvRGFzaGJvYXJkL0FjY291bnRJbmZvQ2hhcnQudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvQ29tcG9uZW50cy9Vc2VyUGFuZWwvRGFzaGJvYXJkL1JlZmVycmFsQ2xpcGJvYXJkLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0NvbXBvbmVudHMvVXNlclBhbmVsL0Rhc2hib2FyZC9Vc2Vyc0xpc3QudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvQ29tcG9uZW50cy9Vc2VyUGFuZWwvR2VuZW9sb2d5L0dlbmVvbG9neS50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9Db21wb25lbnRzL1VzZXJQYW5lbC9HZW5lb2xvZ3kvbXktbm9kZS50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9MYXlvdXRzL0FkbWluTGF5b3V0L0FkbWluTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0xheW91dHMvQWRtaW5MYXlvdXQvaW5jL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9MYXlvdXRzL0FkbWluTGF5b3V0L2luYy9TaWRlTWVudS50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9MYXlvdXRzL0FkbWluTGF5b3V0L2luYy9Ub3BOYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0xheW91dHMvR3Vlc3RMYXlvdXQvR3Vlc3RMYXlvdXQudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvTGF5b3V0cy9HdWVzdExheW91dC9pbmMvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0xheW91dHMvR3Vlc3RMYXlvdXQvaW5jL1NpZGVNZW51LnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0xheW91dHMvR3Vlc3RMYXlvdXQvaW5jL1RvcE5hdmlnYXRpb24udHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvTGF5b3V0cy9Vc2Vyc0xheW91dC9Vc2VyTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL0xheW91dHMvVXNlcnNMYXlvdXQvaW5jL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9MYXlvdXRzL1VzZXJzTGF5b3V0L2luYy9TaWRlTWVudS50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9MYXlvdXRzL1VzZXJzTGF5b3V0L2luYy9Ub3BOYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0Fib3V0VXMudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQWRtaW4vRGFzaGJvYXJkLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0FkbWluL015R2VuZW9sb2d5LnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0FkbWluL015U3RhdGlzdGljcy50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9QYWNrYWdlcy9JbmRleC50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9Qcm9kdWN0L0NyZWF0ZS50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9Qcm9kdWN0L0xpc3QudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQWRtaW4vVXNlci50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9Vc2Vycy50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BdXRoL0xvZ2luLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0F1dGgvUmVnaXN0ZXIudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQmxvZy50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9Ib21lLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL1Byb2R1Y3RzLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL1Rlc3QvVGVzdFJlYWN0LnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL1VzZXJzL0Rhc2hib2FyZC50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9Vc2Vycy9NeUdlbmVvbG9neS50c3giLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtLy4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9Vc2Vycy9NeU5ldHdvcmsudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvVXNlcnMvTXlTdGF0aXN0aWNzLnRzeCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL1VzZXJzL1Byb2ZpbGUvUHJvZmlsZVBhZ2UudHN4Iiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9jc3MvYXBwLmNzcz8yMTg0Iiwid2VicGFjazovL2Fkb25pc21sbS8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlfHN5bmN8L14vLiokIiwid2VicGFjazovL2Fkb25pc21sbS8uL3Jlc291cmNlcy9qcy9zcmMvUGFnZXN8c3luY3wvXi8uKiQiLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtL2lnbm9yZWR8QzpcXFVzZXJzXFxBU1VTXFxhZG9uaXNtbG1cXG5vZGVfbW9kdWxlc1xcQHRvcnVzbGFic1xcZWNjcnlwdG98Y3J5cHRvIiwid2VicGFjazovL2Fkb25pc21sbS9pZ25vcmVkfEM6XFxVc2Vyc1xcQVNVU1xcYWRvbmlzbWxtXFxub2RlX21vZHVsZXNcXEB3YWxsZXRjb25uZWN0XFx1dGlsc1xcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vaWdub3JlZHxDOlxcVXNlcnNcXEFTVVNcXGFkb25pc21sbVxcbm9kZV9tb2R1bGVzXFxibi5qc1xcbGlifGJ1ZmZlciIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vaWdub3JlZHxDOlxcVXNlcnNcXEFTVVNcXGFkb25pc21sbVxcbm9kZV9tb2R1bGVzXFxicm9yYW5kfGNyeXB0byIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vaWdub3JlZHxDOlxcVXNlcnNcXEFTVVNcXGFkb25pc21sbVxcbm9kZV9tb2R1bGVzXFxjcnlwdG8tanN8Y3J5cHRvIiwid2VicGFjazovL2Fkb25pc21sbS9pZ25vcmVkfEM6XFxVc2Vyc1xcQVNVU1xcYWRvbmlzbWxtXFxub2RlX21vZHVsZXNcXG9iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Iiwid2VicGFjazovL2Fkb25pc21sbS9pZ25vcmVkfEM6XFxVc2Vyc1xcQVNVU1xcYWRvbmlzbWxtXFxub2RlX21vZHVsZXNcXHB1bXB8ZnMiLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtL2lnbm9yZWR8QzpcXFVzZXJzXFxBU1VTXFxhZG9uaXNtbG1cXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJcXGludGVybmFsXFxzdHJlYW1zfHV0aWwiLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtL2lnbm9yZWR8QzpcXFVzZXJzXFxBU1VTXFxhZG9uaXNtbG1cXG5vZGVfbW9kdWxlc1xccmVhZGFibGUtc3RyZWFtXFxsaWJ8dXRpbCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vaWdub3JlZHxDOlxcVXNlcnNcXEFTVVNcXGFkb25pc21sbVxcbm9kZV9tb2R1bGVzXFxybHBcXG5vZGVfbW9kdWxlc1xcYm4uanNcXGxpYnxidWZmZXIiLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtL2lnbm9yZWR8QzpcXFVzZXJzXFxBU1VTXFxhZG9uaXNtbG1cXG5vZGVfbW9kdWxlc1xceGhyMi1jb29raWVzXFxkaXN0fGh0dHAiLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtL2lnbm9yZWR8QzpcXFVzZXJzXFxBU1VTXFxhZG9uaXNtbG1cXG5vZGVfbW9kdWxlc1xceGhyMi1jb29raWVzXFxkaXN0fGh0dHBzIiwid2VicGFjazovL2Fkb25pc21sbS9pZ25vcmVkfEM6XFxVc2Vyc1xcQVNVU1xcYWRvbmlzbWxtXFxub2RlX21vZHVsZXNcXHhocjItY29va2llc1xcZGlzdHxvcyIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vaWdub3JlZHxDOlxcVXNlcnNcXEFTVVNcXGFkb25pc21sbVxcbm9kZV9tb2R1bGVzXFx4aHIyLWNvb2tpZXNcXGRpc3R8dXJsIiwid2VicGFjazovL2Fkb25pc21sbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL2Fkb25pc21sbS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2Fkb25pc21sbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2Fkb25pc21sbS93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2Fkb25pc21sbS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Fkb25pc21sbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fkb25pc21sbS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYWRvbmlzbWxtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Fkb25pc21sbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hZG9uaXNtbG0vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Fkb25pc21sbS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG5leHBvcnRzLnRoZW1lID0gdm9pZCAwO1xyXG5yZXF1aXJlKFwiLi4vY3NzL2FwcC5jc3NcIik7XHJcbnZhciBpbmVydGlhX3JlYWN0XzEgPSByZXF1aXJlKFwiQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0XCIpO1xyXG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgcmVhY3RfZG9tXzEgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xyXG52YXIgcmVhY3RfMiA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgcmVhY3RfMyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG5yZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpO1xyXG4vLyBpbXBvcnQgeyBJbmVydGlhUHJvZ3Jlc3MgfSBmcm9tICdAaW5lcnRpYWpzL3Byb2dyZXNzJ1xyXG52YXIgbnByb2dyZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5wcm9ncmVzc1wiKSk7XHJcbnZhciBpbmVydGlhXzEgPSByZXF1aXJlKFwiQGluZXJ0aWFqcy9pbmVydGlhXCIpO1xyXG5yZXF1aXJlKFwiYW50ZC9kaXN0L2FudGQuY3NzXCIpO1xyXG52YXIgcmVhY3RfbW9yYWxpc18xID0gcmVxdWlyZShcInJlYWN0LW1vcmFsaXNcIik7XHJcbnZhciB0aW1lb3V0ID0gbnVsbDtcclxuaW5lcnRpYV8xLkluZXJ0aWEub24oJ3N0YXJ0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gbnByb2dyZXNzXzFbXCJkZWZhdWx0XCJdLnN0YXJ0KCk7IH0sIDI1MCk7XHJcbn0pO1xyXG5pbmVydGlhXzEuSW5lcnRpYS5vbigncHJvZ3Jlc3MnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICBpZiAobnByb2dyZXNzXzFbXCJkZWZhdWx0XCJdLmlzU3RhcnRlZCgpICYmICgoX2EgPSBldmVudC5kZXRhaWwucHJvZ3Jlc3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wZXJjZW50YWdlKSkge1xyXG4gICAgICAgIG5wcm9ncmVzc18xW1wiZGVmYXVsdFwiXS5zZXQoKCgoX2IgPSBldmVudC5kZXRhaWwucHJvZ3Jlc3MpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wZXJjZW50YWdlKSAvIDEwMCkgKiAwLjkpO1xyXG4gICAgfVxyXG59KTtcclxuaW5lcnRpYV8xLkluZXJ0aWEub24oJ2ZpbmlzaCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgaWYgKCFucHJvZ3Jlc3NfMVtcImRlZmF1bHRcIl0uaXNTdGFydGVkKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChldmVudC5kZXRhaWwudmlzaXQuY29tcGxldGVkKSB7XHJcbiAgICAgICAgbnByb2dyZXNzXzFbXCJkZWZhdWx0XCJdLmRvbmUoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGV2ZW50LmRldGFpbC52aXNpdC5pbnRlcnJ1cHRlZCkge1xyXG4gICAgICAgIG5wcm9ncmVzc18xW1wiZGVmYXVsdFwiXS5zZXQoMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChldmVudC5kZXRhaWwudmlzaXQuY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgbnByb2dyZXNzXzFbXCJkZWZhdWx0XCJdLmRvbmUoKTtcclxuICAgICAgICBucHJvZ3Jlc3NfMVtcImRlZmF1bHRcIl0ucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5mdW5jdGlvbiB2YXJpYW50T3V0bGluZWQoKSB7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICBfZm9jdXM6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInZhcigtLWNoYWtyYS11aS1mb2N1cy1yaW5nLWNvbG9yKVwiLFxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMCAwIDBweCB2YXIoLS1jaGFrcmEtdWktZm9jdXMtcmluZy1jb2xvcilcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxudmFyIHZhcmlhbnRGaWxsZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xyXG4gICAgZmllbGQ6IHtcclxuICAgICAgICBfZm9jdXM6IHtcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidmFyKC0tY2hha3JhLXVpLWZvY3VzLXJpbmctY29sb3IpXCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDAgMCAwcHggdmFyKC0tY2hha3JhLXVpLWZvY3VzLXJpbmctY29sb3IpXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyB9O1xyXG52YXIgdmFyaWFudEZsdXNoZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xyXG4gICAgZmllbGQ6IHtcclxuICAgICAgICBfZm9jdXM6IHtcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidmFyKC0tY2hha3JhLXVpLWZvY3VzLXJpbmctY29sb3IpXCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDBweCAwIDAgdmFyKC0tY2hha3JhLXVpLWZvY3VzLXJpbmctY29sb3IpXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyB9O1xyXG5leHBvcnRzLnRoZW1lID0gKDAsIHJlYWN0XzMuZXh0ZW5kVGhlbWUpKHtcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGluaXRpYWxDb2xvck1vZGU6IFwibGlnaHRcIixcclxuICAgICAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3R5bGVzOiB7XHJcbiAgICAgICAgZ2xvYmFsOiB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIENTUyB2YXJpYWJsZSB3aXRoIHRoZSBmb2N1cyByaW5nIGNvbG9yIGRlc2lyZWQuXHJcbiAgICAgICAgICAgIC8vIHJnYmEgZnVuY3Rpb24gZG9lcyBub3Qgd29yayBoZXJlIHNvIHVzZSB0aGUgaGV4IHZhbHVlLlxyXG4gICAgICAgICAgICAvLyBFaXRoZXIgOmhvc3QsOnJvb3Qgb3IgaHRtbCB3b3JrLiBib2R5IGRvZXMgbm90IHdvcmsgZm9yXHJcbiAgICAgICAgICAgIC8vIGJ1dHRvbiwgY2hlY2tib3gsIHJhZGlvLCBzd2l0Y2guXHJcbiAgICAgICAgICAgIC8vIGh0bWw6IHtcclxuICAgICAgICAgICAgXCI6aG9zdCw6cm9vdFwiOiB7XHJcbiAgICAgICAgICAgICAgICBcIi0tY2hha3JhLXVpLWZvY3VzLXJpbmctY29sb3JcIjogXCIjNTUzQzlBXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaGFkb3dzOiB7XHJcbiAgICAgICAgLy8gVGhpcyBpcyBhbHNvIHBvc3NpYmxlLiBOb3Qgc3VyZSBJIGxpa2UgaW5qZWN0IHRoaXMgaW50b1xyXG4gICAgICAgIC8vIGFuIGV4aXN0aW5nIHRoZW1lIHNlY3Rpb24uXHJcbiAgICAgICAgLy8gSXQgY3JlYXRlcyBhIENTUyB2YXJpYWJsZSBuYW1lZCAtLWNoYWtyYS1zaGFkb3dzLWZvY3VzLXJpbmctY29sb3JcclxuICAgICAgICAvLyAnZm9jdXMtcmluZy1jb2xvcic6ICdyZ2JhKDI1NSwgMCwgMTI1LCAwLjYpJyxcclxuICAgICAgICBvdXRsaW5lOiBcIjAgMCAwIDBweCB2YXIoLS1jaGFrcmEtdWktZm9jdXMtcmluZy1jb2xvcilcIlxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBJbnB1dDoge1xyXG4gICAgICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogdmFyaWFudE91dGxpbmVkLFxyXG4gICAgICAgICAgICAgICAgZmlsbGVkOiB2YXJpYW50RmlsbGVkLFxyXG4gICAgICAgICAgICAgICAgZmx1c2hlZDogdmFyaWFudEZsdXNoZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU2VsZWN0OiB7XHJcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiB2YXJpYW50T3V0bGluZWQsXHJcbiAgICAgICAgICAgICAgICBmaWxsZWQ6IHZhcmlhbnRGaWxsZWQsXHJcbiAgICAgICAgICAgICAgICBmbHVzaGVkOiB2YXJpYW50Rmx1c2hlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBUZXh0YXJlYToge1xyXG4gICAgICAgICAgICB2YXJpYW50czoge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFyaWFudE91dGxpbmVkKCkuZmllbGQ7IH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhcmlhbnRGaWxsZWQoKS5maWVsZDsgfSxcclxuICAgICAgICAgICAgICAgIGZsdXNoZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhcmlhbnRGbHVzaGVkKCkuZmllbGQ7IH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbi8vIEp1c3QgY2FyZSBhYm91dCB0aGlzXHJcbnZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxuKDAsIHJlYWN0X2RvbV8xLnJlbmRlcikocmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF9tb3JhbGlzXzEuTW9yYWxpc1Byb3ZpZGVyLCB7IHNlcnZlclVybDogXCJodHRwczovL2N5ZGE5NWFxY2RkYi51c2Vtb3JhbGlzLmNvbToyMDUzL3NlcnZlclwiLCBhcHBJZDogXCJEb3dkSkltTG9FbWxtY0FDYWlsZnRSUkpNa3RiM0hYdExvcTV6UEJGXCIgfSxcclxuICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5DaGFrcmFQcm92aWRlciwgeyB0aGVtZTogZXhwb3J0cy50aGVtZSB9LFxyXG4gICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkluZXJ0aWFBcHBcclxuICAgICAgICAvLyBQYXNzIHByb3BzIGZyb20gdGhlIHNlcnZlciBkb3duIHRvIHRoZSBjbGllbnQgYXBwXHJcbiAgICAgICAgLCB7IFxyXG4gICAgICAgICAgICAvLyBQYXNzIHByb3BzIGZyb20gdGhlIHNlcnZlciBkb3duIHRvIHRoZSBjbGllbnQgYXBwXHJcbiAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKChlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwuZGF0YXNldC5wYWdlKSB8fCAnJyksIFxyXG4gICAgICAgICAgICAvLyBEeW5hbWljYWxseSBsb2FkIHRoZSByZXF1aXJlZCBwYWdlIGNvbXBvbmVudFxyXG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vc3JjL1BhZ2VzL1wiLmNvbmNhdChuYW1lKSkpOyB9KS50aGVuKGZ1bmN0aW9uIChtb2R1bGUpIHsgcmV0dXJuIG1vZHVsZVtcImRlZmF1bHRcIl07IH0pOyB9LCBpbml0aWFsQ29tcG9uZW50OiAnJyB9KSkpLCBlbCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciBheGlvc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJheGlvc1wiKSk7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciByZWFjdF9hcGV4Y2hhcnRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWFwZXhjaGFydHNcIikpO1xyXG5mdW5jdGlvbiBJbnZpdGF0aW9uQ2xpY2tzKCkge1xyXG4gICAgdmFyIF9hID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKFtdKSwgY2F0ZWdvcmllcyA9IF9hWzBdLCBzZXRDYXRlZ29yaWVzID0gX2FbMV07XHJcbiAgICB2YXIgX2IgPSAoMCwgcmVhY3RfMi51c2VTdGF0ZSkoW10pLCBjaGFydERhdGEgPSBfYlswXSwgc2V0Q2hhcnREYXRhID0gX2JbMV07XHJcbiAgICB2YXIgX2MgPSAoMCwgcmVhY3RfMi51c2VTdGF0ZSkoMCksIGNsaWNrQ291bnQgPSBfY1swXSwgc2V0Q2xpY2tDb3VudCA9IF9jWzFdO1xyXG4gICAgdmFyIF9kID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKHRydWUpLCBsb2FkaW5nID0gX2RbMF0sIHNldExvYWRpbmcgPSBfZFsxXTtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgIGlkOiBcImJhc2ljLWJhclwiLFxyXG4gICAgICAgICAgICB3aWR0aDogJzUwMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogY2F0ZWdvcmllc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3JzOiBbJyM1NTNDOUEnXVxyXG4gICAgfTtcclxuICAgIHZhciBzZXJpZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkNsaWNrc1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBjaGFydERhdGFcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgdmFyIF9lID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKCczMGRheXMnKSwgb3B0aW9uID0gX2VbMF0sIHNldE9wdGlvbiA9IF9lWzFdO1xyXG4gICAgKDAsIHJlYWN0XzIudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0U3RhdGlzdGljcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcztcclxuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMVtcImRlZmF1bHRcIl0uZ2V0KFwiL2FwaS9hbGxfaW52aXRhdGlvbl9jbGlja3MvP29wdGlvbj1cIi5jb25jYXQob3B0aW9uKSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6ICcsIHJlcy5kYXRhLmNoYXJ0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKHJlcy5kYXRhLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYXJ0RGF0YShyZXMuZGF0YS5jaGFydERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrQ291bnQocmVzLmRhdGEuY2xpY2tDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRTdGF0aXN0aWNzKCk7XHJcbiAgICB9LCBbb3B0aW9uXSk7XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMltcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBwYjogJzVweCcsIG1iOiAnMjVweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjRTdFM0YwJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgbWI6IDEsIGZvbnRTaXplOiBcInhzXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBsZXR0ZXJTcGFjaW5nOiBcIndpZGVcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuNTAwXCIsIFwiZ3JheS40MDBcIikgfSxcclxuICAgICAgICAgICAgICAgIFwiTGFzdCBcIixcclxuICAgICAgICAgICAgICAgIG9wdGlvbiA9PSAnN2RheXMnID8gJzcgZGF5cycgOiBvcHRpb24gPT0gJzMwZGF5cycgPyAnMzAgZGF5cycgOiAnMTIgbW9udGhzJyxcclxuICAgICAgICAgICAgICAgIFwiICBzdGF0aXN0aWNzXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBqdXN0aWZ5OiAnc3BhY2UtYmV0d2VlbicgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IG1iOiAyLCBmb250U2l6ZTogXCIzeGxcIiwgZm9udFdlaWdodDogW1wiYm9sZFwiLCBcImV4dHJhYm9sZFwiXSwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuOTAwXCIsIFwiZ3JheS41MFwiKSwgbGluZUhlaWdodDogXCJ0aWdodFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnNwYW4sIHsgZm9udFNpemU6IFwibWRcIiwgZm9udFdlaWdodDogXCJtZWRpdW1cIiwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuNjAwXCIsIFwiZ3JheS40MDBcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2tzXCIpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TZWxlY3QsIHsgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRPcHRpb24oZS50YXJnZXQudmFsdWUpOyB9LCB2YWx1ZTogb3B0aW9uLCB3OiAnYXV0bycsIHNpemU6ICd4cycgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6ICc3ZGF5cycgfSwgXCJMYXN0IDcgZGF5c1wiKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6ICczMGRheXMnIH0sIFwiTGFzdCAzMCBkYXlzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogJzEybW9udGhzJyB9LCBcIkxhc3QgMTIgbW9udGhzXCIpKSkpLFxyXG4gICAgICAgIGxvYWRpbmcgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQ2VudGVyLCB7IGg6ICc1MCUnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TcGlubmVyLCB7IHNpemU6ICd4bCcgfSkpIDogY2hhcnREYXRhLmxlbmd0aCA/IHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfYXBleGNoYXJ0c18xW1wiZGVmYXVsdFwiXSwgeyBvcHRpb25zOiBvcHRpb25zLCBzZXJpZXM6IHNlcmllcywgdHlwZTogXCJiYXJcIiB9KSA6IHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5DZW50ZXIsIHsgaDogJzEwMHB4JyB9LCBcIk5vIGRhdGEgZm91bmRcIikpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEludml0YXRpb25DbGlja3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciBheGlvc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJheGlvc1wiKSk7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciByZWFjdF9hcGV4Y2hhcnRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWFwZXhjaGFydHNcIikpO1xyXG5mdW5jdGlvbiBJbnZpdGF0aW9uUmVnaXN0cmF0aW9ucygpIHtcclxuICAgIHZhciBfYSA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKShbXSksIGNhdGVnb3JpZXMgPSBfYVswXSwgc2V0Q2F0ZWdvcmllcyA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKFtdKSwgY2hhcnREYXRhID0gX2JbMF0sIHNldENoYXJ0RGF0YSA9IF9iWzFdO1xyXG4gICAgdmFyIF9jID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKDApLCByZWdpc3RlckNvdW50ID0gX2NbMF0sIHNldFJlZ2lzdGVyQ291bnQgPSBfY1sxXTtcclxuICAgIHZhciBfZCA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKSh0cnVlKSwgbG9hZGluZyA9IF9kWzBdLCBzZXRMb2FkaW5nID0gX2RbMV07XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICBpZDogXCJiYXNpYy1iYXJcIixcclxuICAgICAgICAgICAgd2lkdGg6ICc1MDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yczogWycjNTUzQzlBJ11cclxuICAgIH07XHJcbiAgICB2YXIgc2VyaWVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJSZWdpc3RlcnNcIixcclxuICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIHZhciBfZSA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKSgnMzBkYXlzJyksIG9wdGlvbiA9IF9lWzBdLCBzZXRPcHRpb24gPSBfZVsxXTtcclxuICAgICgwLCByZWFjdF8yLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YXRpc3RpY3MoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzFbXCJkZWZhdWx0XCJdLmdldChcIi9hcGkvYWxsX2ludml0YXRpb25fcmVnaXN0ZXJzLz9vcHRpb249XCIuY29uY2F0KG9wdGlvbikpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlOiAnLCByZXMuZGF0YS5jaGFydERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhyZXMuZGF0YS5jYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGFydERhdGEocmVzLmRhdGEuY2hhcnREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWdpc3RlckNvdW50KHJlcy5kYXRhLnJlZ2lzdGVyQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0U3RhdGlzdGljcygpO1xyXG4gICAgfSwgW29wdGlvbl0pO1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzJbXCJkZWZhdWx0XCJdLkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcGI6ICc1cHgnLCBtYjogJzI1cHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0U3RTNGMCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLmNoYWtyYS5wLCB7IG1iOiAxLCBmb250U2l6ZTogXCJ4c1wiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGV0dGVyU3BhY2luZzogXCJ3aWRlXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjUwMFwiLCBcImdyYXkuNDAwXCIpIH0sXHJcbiAgICAgICAgICAgICAgICBcIkxhc3QgXCIsXHJcbiAgICAgICAgICAgICAgICBvcHRpb24gPT0gJzdkYXlzJyA/ICc3IGRheXMnIDogb3B0aW9uID09ICczMGRheXMnID8gJzMwIGRheXMnIDogJzEyIG1vbnRocycsXHJcbiAgICAgICAgICAgICAgICBcIiAgc3RhdGlzdGljc1wiKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsganVzdGlmeTogJ3NwYWNlLWJldHdlZW4nIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBtYjogMiwgZm9udFNpemU6IFwiM3hsXCIsIGZvbnRXZWlnaHQ6IFtcImJvbGRcIiwgXCJleHRyYWJvbGRcIl0sIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjkwMFwiLCBcImdyYXkuNTBcIiksIGxpbmVIZWlnaHQ6IFwidGlnaHRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyQ291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLmNoYWtyYS5zcGFuLCB7IGZvbnRTaXplOiBcIm1kXCIsIGZvbnRXZWlnaHQ6IFwibWVkaXVtXCIsIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjYwMFwiLCBcImdyYXkuNDAwXCIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJlZ2lzdHJhdGlvbnNcIikpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlNlbGVjdCwgeyBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldE9wdGlvbihlLnRhcmdldC52YWx1ZSk7IH0sIHZhbHVlOiBvcHRpb24sIHc6ICdhdXRvJywgc2l6ZTogJ3hzJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogJzdkYXlzJyB9LCBcIkxhc3QgNyBkYXlzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogJzMwZGF5cycgfSwgXCJMYXN0IDMwIGRheXNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiAnMTJtb250aHMnIH0sIFwiTGFzdCAxMiBtb250aHNcIikpKSksXHJcbiAgICAgICAgbG9hZGluZyA/IHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5DZW50ZXIsIHsgaDogJzUwJScgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlNwaW5uZXIsIHsgc2l6ZTogJ3hsJyB9KSkgOiBjaGFydERhdGEubGVuZ3RoID8gcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF9hcGV4Y2hhcnRzXzFbXCJkZWZhdWx0XCJdLCB7IG9wdGlvbnM6IG9wdGlvbnMsIHNlcmllczogc2VyaWVzLCB0eXBlOiBcImFyZWFcIiB9KSA6IHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5DZW50ZXIsIHsgaDogJzEwMHB4JyB9LCBcIk5vIGRhdGEgZm91bmRcIikpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEludml0YXRpb25SZWdpc3RyYXRpb25zO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxuZnVuY3Rpb24gQWNjb3VudEluZm9DYXJkcygpIHtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogXCJmdWxsXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH0sXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRcclxuICAgICAgICAvLyBoPScyMDBweCdcclxuICAgICAgICAsIHsgXHJcbiAgICAgICAgICAgIC8vIGg9JzIwMHB4J1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVJvd3M6ICdyZXBlYXQoMSwgMWZyKScsIHRlbXBsYXRlQ29sdW1uczogWydyZXBlYXQoMiwgMWZyKScsICdyZXBlYXQoMiwgMWZyKScsICdyZXBlYXQoMywgMWZyKSddLCBnYXA6IDQsIHRleHRBbGlnbjogW1wibGVmdFwiLCBcImNlbnRlclwiXSB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuR3JpZEl0ZW0sIHsgYmc6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcIndoaXRlXCIsIFwiZ3JheS44MDBcIiksIHB4OiA0LCBweTogNiwgc2hhZG93OiBcImJhc2VcIiwgcm91bmRlZDogXCJtZFwiIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgbWI6IDEsIGZvbnRTaXplOiBcInhzXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBsZXR0ZXJTcGFjaW5nOiBcIndpZGVcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuNTAwXCIsIFwiZ3JheS40MDBcIikgfSwgXCJSZWdpc3RyYXRpb25zXCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgbWI6IDIsIGZvbnRTaXplOiBcIjV4bFwiLCBmb250V2VpZ2h0OiBbXCJib2xkXCIsIFwiZXh0cmFib2xkXCJdLCBjb2xvcjogKDAsIHJlYWN0XzEudXNlQ29sb3JNb2RlVmFsdWUpKFwiZ3JheS45MDBcIiwgXCJncmF5LjUwXCIpLCBsaW5lSGVpZ2h0OiBcInRpZ2h0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBcIjNcIixcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnNwYW4sIHsgZm9udFNpemU6IFwiMnhsXCIsIGZvbnRXZWlnaHQ6IFwibWVkaXVtXCIsIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjYwMFwiLCBcImdyYXkuNDAwXCIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVzZXJzXCIpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEucCwgeyBtYjogNiwgZm9udFNpemU6IFwibGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS42MDBcIiwgXCJncmF5LjUwMFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXkuNTAwJyB9LCBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TdGFjaywgeyBkaXNwbGF5OiBbXCJibG9ja1wiLCBcImZsZXhcIl0sIHNwYWNpbmc6IDIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBkaXJlY3Rpb246IFtcImNvbHVtblwiLCBcInJvd1wiXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5MaW5rLCB7IGhyZWY6IFwiL2FkbWluL215X3N0YXRpc3RpY3NcIiwgdzogW1wiYXV0b1wiLCBcImF1dG9cIl0sIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIHB4OiAzLCBweTogMiwgYm9yZGVyOiBcInNvbGlkIHRyYW5zcGFyZW50XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCByb3VuZGVkOiBcIm1kXCIsIHNoYWRvdzogXCJtZFwiLCBjb2xvcjogXCJ3aGl0ZUFscGhhLjgwMFwiLCBiZzogXCJwdXJwbGUuNjAwXCIsIF9ob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6IFwicHVycGxlLjcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSwgXCJWaWV3IERldGFpbHNcIikpKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRJdGVtLCB7IGJnOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJ3aGl0ZVwiLCBcImdyYXkuODAwXCIpLCBweDogNCwgcHk6IDYsIHNoYWRvdzogXCJiYXNlXCIsIHJvdW5kZWQ6IFwibWRcIiB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLmNoYWtyYS5wLCB7IG1iOiAxLCBmb250U2l6ZTogXCJ4c1wiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGV0dGVyU3BhY2luZzogXCJ3aWRlXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjUwMFwiLCBcImdyYXkuNDAwXCIpIH0sIFwiTGFzciBNb250aCBUcmFuc2FjdGlvbnNcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBtYjogMiwgZm9udFNpemU6IFwiNXhsXCIsIGZvbnRXZWlnaHQ6IFtcImJvbGRcIiwgXCJleHRyYWJvbGRcIl0sIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjkwMFwiLCBcImdyYXkuNTBcIiksIGxpbmVIZWlnaHQ6IFwidGlnaHRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiJDBcIixcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnNwYW4sIHsgZm9udFNpemU6IFwiMnhsXCIsIGZvbnRXZWlnaHQ6IFwibWVkaXVtXCIsIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjYwMFwiLCBcImdyYXkuNDAwXCIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVTRFwiKSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgbWI6IDYsIGZvbnRTaXplOiBcImxnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNjAwXCIsIFwiZ3JheS41MDBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5LjUwMCcgfSwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TdGFjaywgeyBkaXNwbGF5OiBbXCJibG9ja1wiLCBcImZsZXhcIl0sIHNwYWNpbmc6IDIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBkaXJlY3Rpb246IFtcImNvbHVtblwiLCBcInJvd1wiXSB9KSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBY2NvdW50SW5mb0NhcmRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIEludml0YXRpb25DbGlja3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vQ2hhcnRzL0ludml0YXRpb25DbGlja3NcIikpO1xyXG52YXIgSW52aXRhdGlvblJlZ2lzdHJhdGlvbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vQ2hhcnRzL0ludml0YXRpb25SZWdpc3RyYXRpb25zXCIpKTtcclxuZnVuY3Rpb24gQWNjb3VudEluZm9DaGFydCgpIHtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRcclxuICAgIC8vIGg9JzIwMHB4J1xyXG4gICAgLCB7IFxyXG4gICAgICAgIC8vIGg9JzIwMHB4J1xyXG4gICAgICAgIHc6ICdmdWxsJywgdGVtcGxhdGVSb3dzOiAncmVwZWF0KDEsIDFmciknLCB0ZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsIDFmciknLCAncmVwZWF0KDIsIDFmciknLCAncmVwZWF0KDIsIDFmciknXSwgZ2FwOiA0LCB0ZXh0QWxpZ246IFtcImxlZnRcIiwgXCJsZWZ0XCJdIH0sXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRJdGVtLCB7IGJnOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJ3aGl0ZVwiLCBcImdyYXkuODAwXCIpLCBweDogNCwgcHk6IDYsIHNoYWRvdzogXCJiYXNlXCIsIHJvdW5kZWQ6IFwibWRcIiB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEludml0YXRpb25DbGlja3NfMVtcImRlZmF1bHRcIl0sIG51bGwpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuR3JpZEl0ZW0sIHsgYmc6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcIndoaXRlXCIsIFwiZ3JheS44MDBcIiksIHB4OiA0LCBweTogNiwgc2hhZG93OiBcImJhc2VcIiwgcm91bmRlZDogXCJtZFwiIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoSW52aXRhdGlvblJlZ2lzdHJhdGlvbnNfMVtcImRlZmF1bHRcIl0sIG51bGwpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQWNjb3VudEluZm9DaGFydDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciBpbmVydGlhXzEgPSByZXF1aXJlKFwiQGluZXJ0aWFqcy9pbmVydGlhXCIpO1xyXG52YXIgcmVhY3RfMiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgY2dfMSA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9jZ1wiKTtcclxudmFyIE5vRGF0YUZvdW5kXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL05vRGF0YUZvdW5kXCIpKTtcclxudmFyIFBhY2thZ2VMaXN0ID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgcGFja2FnZXMgPSBfYS5wYWNrYWdlcztcclxuICAgICgwLCByZWFjdF8yLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQYWNrYWdlIGxpc3RzOiAnLCBwYWNrYWdlcyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICB2YXIgX2IgPSAoMCwgcmVhY3RfMi51c2VTdGF0ZSkoKSwgZWRpdFJhbmsgPSBfYlswXSwgc2V0RWRpdFJhbmsgPSBfYlsxXTtcclxuICAgIHZhciBoYW5kbGVFZGl0UmFuayA9IGZ1bmN0aW9uIChwa2cpIHtcclxuICAgICAgICBzZXRFZGl0UmFuayhwa2cpO1xyXG4gICAgfTtcclxuICAgIHZhciBzYXZlRWRpdGVkUmFuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbmVydGlhXzEuSW5lcnRpYS5wb3N0KCcvYWRtaW4vc2F2ZV9lZGl0ZWRfcmFuaycsIHsgcGFrYWdlOiBlZGl0UmFuayB9LCB7IHByZXNlcnZlU2Nyb2xsOiB0cnVlIH0pO1xyXG4gICAgICAgIHNldEVkaXRSYW5rKG51bGwpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgYXM6ICdkaXYnLCB3OiAnZnVsbCcsIG92ZXJmbG93WDogJ2F1dG8nIH0sIHBhY2thZ2VzLmxlbmd0aCA/XHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UYWJsZSwgeyB2YXJpYW50OiAnc2ltcGxlJywgdzogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGhlYWQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRyLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiI1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRoLCBudWxsLCBcIlBhY2thZ2UgTmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRoLCBudWxsLCBcIkxldmVsIDFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UaCwgbnVsbCwgXCJMZXZlbCAyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiTGV2ZWwgM1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRoLCBudWxsLCBcIkxldmVsIDRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UaCwgbnVsbCwgXCJMZXZlbCA1XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiTGV2ZWwgNlwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRoLCBudWxsLCBcIkxldmVsIDdcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UaCwgeyBpc051bWVyaWM6IHRydWUgfSkpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UYm9keSwgbnVsbCwgcGFja2FnZXMubWFwKGZ1bmN0aW9uIChwa2csIGluZGV4KSB7IHJldHVybiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVHIsIHsga2V5OiBpbmRleCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZCwgbnVsbCwgaW5kZXggKyAxKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsIHBrZy5wYWNrYWdlKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFJhbmsgJiYgKGVkaXRSYW5rID09PSBudWxsIHx8IGVkaXRSYW5rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlZGl0UmFuay5pZCkgPT0gcGtnLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgd2lkdGg6IDEyLCBweDogJzVweCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogZWRpdFJhbmsgPT09IG51bGwgfHwgZWRpdFJhbmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVkaXRSYW5rLmxldmVsX29uZSwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRFZGl0UmFuayhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZWRpdFJhbmspLCB7IGxldmVsX29uZTogZS50YXJnZXQudmFsdWUgfSkpOyB9IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwa2cubGV2ZWxfb25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFJhbmsgJiYgKGVkaXRSYW5rID09PSBudWxsIHx8IGVkaXRSYW5rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlZGl0UmFuay5pZCkgPT0gcGtnLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgd2lkdGg6IDEyLCBweDogJzVweCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogZWRpdFJhbmsgPT09IG51bGwgfHwgZWRpdFJhbmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVkaXRSYW5rLmxldmVsX3R3bywgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRFZGl0UmFuayhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZWRpdFJhbmspLCB7IGxldmVsX3R3bzogZS50YXJnZXQudmFsdWUgfSkpOyB9IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwa2cubGV2ZWxfdHdvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFJhbmsgJiYgKGVkaXRSYW5rID09PSBudWxsIHx8IGVkaXRSYW5rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlZGl0UmFuay5pZCkgPT0gcGtnLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgd2lkdGg6IDEyLCBweDogJzVweCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogZWRpdFJhbmsgPT09IG51bGwgfHwgZWRpdFJhbmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVkaXRSYW5rLmxldmVsX3RocmVlLCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldEVkaXRSYW5rKF9fYXNzaWduKF9fYXNzaWduKHt9LCBlZGl0UmFuayksIHsgbGV2ZWxfdGhyZWU6IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGtnLmxldmVsX3RocmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFJhbmsgJiYgKGVkaXRSYW5rID09PSBudWxsIHx8IGVkaXRSYW5rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlZGl0UmFuay5pZCkgPT0gcGtnLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgd2lkdGg6IDEyLCBweDogJzVweCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogZWRpdFJhbmsgPT09IG51bGwgfHwgZWRpdFJhbmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVkaXRSYW5rLmxldmVsX2ZvdXIsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RWRpdFJhbmsoX19hc3NpZ24oX19hc3NpZ24oe30sIGVkaXRSYW5rKSwgeyBsZXZlbF9mb3VyOiBlLnRhcmdldC52YWx1ZSB9KSk7IH0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBrZy5sZXZlbF9mb3VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFJhbmsgJiYgKGVkaXRSYW5rID09PSBudWxsIHx8IGVkaXRSYW5rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlZGl0UmFuay5pZCkgPT0gcGtnLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgd2lkdGg6IDEyLCBweDogJzVweCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogZWRpdFJhbmsgPT09IG51bGwgfHwgZWRpdFJhbmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVkaXRSYW5rLmxldmVsX2ZpdmUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RWRpdFJhbmsoX19hc3NpZ24oX19hc3NpZ24oe30sIGVkaXRSYW5rKSwgeyBsZXZlbF9maXZlOiBlLnRhcmdldC52YWx1ZSB9KSk7IH0gfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBrZy5sZXZlbF9maXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFJhbmsgJiYgKGVkaXRSYW5rID09PSBudWxsIHx8IGVkaXRSYW5rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlZGl0UmFuay5pZCkgPT0gcGtnLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgd2lkdGg6IDEyLCBweDogJzVweCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogZWRpdFJhbmsgPT09IG51bGwgfHwgZWRpdFJhbmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVkaXRSYW5rLmxldmVsX3NpeCwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRFZGl0UmFuayhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZWRpdFJhbmspLCB7IGxldmVsX3NpeDogZS50YXJnZXQudmFsdWUgfSkpOyB9IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwa2cubGV2ZWxfc2l4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5U2VsZjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdFJhbmsgJiYgKGVkaXRSYW5rID09PSBudWxsIHx8IGVkaXRSYW5rID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlZGl0UmFuay5pZCkgPT0gcGtnLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgd2lkdGg6IDEyLCBweDogJzVweCcsIHR5cGU6ICdudW1iZXInLCB2YWx1ZTogZWRpdFJhbmsgPT09IG51bGwgfHwgZWRpdFJhbmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVkaXRSYW5rLmxldmVsX3NldmVuLCBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldEVkaXRSYW5rKF9fYXNzaWduKF9fYXNzaWduKHt9LCBlZGl0UmFuayksIHsgbGV2ZWxfc2V2ZW46IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcGtnLmxldmVsX3NldmVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIHsgaXNOdW1lcmljOiB0cnVlIH0sIGVkaXRSYW5rICYmIChlZGl0UmFuayA9PT0gbnVsbCB8fCBlZGl0UmFuayA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWRpdFJhbmsuaWQpID09IHBrZy5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVG9vbHRpcCwgeyBsYWJlbDogJ1VwZGF0ZSBSYW5rJywgaGFzQXJyb3c6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQnV0dG9uLCB7IHZhcmlhbnQ6ICdvdXRsaW5lJywgY29sb3JTY2hlbWU6ICdncmVlbicsIHA6IDMsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpY29uPXs8Q2dEZXRhaWxzTW9yZSAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogJ3NtYWxsJywgb25DbGljazogc2F2ZUVkaXRlZFJhbmsgfSwgXCJVcGRhdGVcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Ub29sdGlwLCB7IGxhYmVsOiAnRWRpdCBSYW5rJywgaGFzQXJyb3c6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSWNvbkJ1dHRvbiwgeyB2YXJpYW50OiAnb3V0bGluZScsIGNvbG9yU2NoZW1lOiAndGVhbCcsIFwiYXJpYS1sYWJlbFwiOiAnQ2FsbCBTYWdlJywgZm9udFNpemU6ICcyMHB4JywgaWNvbjogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChjZ18xLkNnRGV0YWlsc01vcmUsIG51bGwpLCB2YWx1ZTogJ0RldGFpbHMnLCBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVFZGl0UmFuayhwa2cpOyB9IH0pKSkpOyB9KSkpXHJcbiAgICAgICAgICAgIDogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChOb0RhdGFGb3VuZF8xW1wiZGVmYXVsdFwiXSwgbnVsbCkpKSk7XHJcbn07XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUGFja2FnZUxpc3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIGNnXzEgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvY2dcIik7XHJcbnZhciBOb0RhdGFGb3VuZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Ob0RhdGFGb3VuZFwiKSk7XHJcbnZhciBtb21lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcclxudmFyIGluZXJ0aWFfcmVhY3RfMSA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcIik7XHJcbnZhciBQcm9kdWN0TGlzdCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHByb2R1Y3RzID0gX2EucHJvZHVjdHM7XHJcbiAgICAoMCwgcmVhY3RfMi51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBsaXN0czogJywgcHJvZHVjdHMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBhczogJ2RpdicsIHc6ICdmdWxsJywgb3ZlcmZsb3dYOiAnYXV0bycgfSwgcHJvZHVjdHMubGVuZ3RoID9cclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRhYmxlLCB7IHZhcmlhbnQ6ICdzaW1wbGUnLCB3OiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UaGVhZCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVHIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UaCwgbnVsbCwgXCJQcm9kdWN0IEltYWdlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiUHJvZHVjdCBOYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiUHJvZHVjdCBQcmljZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRoLCBudWxsLCBcIkNyZWF0ZWQgZGF0ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRoLCB7IGlzTnVtZXJpYzogdHJ1ZSB9KSkpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRib2R5LCBudWxsLCBwcm9kdWN0cy5tYXAoZnVuY3Rpb24gKHByb2R1Y3QsIGluZGV4KSB7IHJldHVybiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVHIsIHsga2V5OiBpbmRleCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkltYWdlLCB7IHdpZHRoOiAnMTAwcHgnLCBzcmM6IHByb2R1Y3QuaW1hZ2UgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QubmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRkLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucHJpY2UpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZCwgbnVsbCwgKDAsIG1vbWVudF8xW1wiZGVmYXVsdFwiXSkocHJvZHVjdC5jcmVhdGVkX2F0KS5mb3JtYXQoJ2wnKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRkLCB7IGlzTnVtZXJpYzogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVG9vbHRpcCwgeyBsYWJlbDogJ0RlbGV0ZSBQcm9kdWN0JywgaGFzQXJyb3c6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogXCIvYWRtaW4vcHJvZHVjdC9kZWxldGUvXCIuY29uY2F0KHByb2R1Y3QuaWQpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb25CdXR0b24sIHsgdmFyaWFudDogJ291dGxpbmUnLCBjb2xvclNjaGVtZTogJ3JlZCcsIFwiYXJpYS1sYWJlbFwiOiAnQ2FsbCBTYWdlJywgZm9udFNpemU6ICcyMHB4JywgaWNvbjogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChjZ18xLkNnRGV0YWlsc01vcmUsIG51bGwpLCB2YWx1ZTogJ0RldGFpbHMnIH0pKSkpKTsgfSkpKVxyXG4gICAgICAgICAgICA6IHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoTm9EYXRhRm91bmRfMVtcImRlZmF1bHRcIl0sIG51bGwpKSkpO1xyXG59O1xyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFByb2R1Y3RMaXN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBjZ18xID0gcmVxdWlyZShcInJlYWN0LWljb25zL2NnXCIpO1xyXG52YXIgTm9EYXRhRm91bmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTm9EYXRhRm91bmRcIikpO1xyXG52YXIgbW9tZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbWVudFwiKSk7XHJcbnZhciBpbmVydGlhX3JlYWN0XzEgPSByZXF1aXJlKFwiQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0XCIpO1xyXG52YXIgVXNlcnNMaXN0ID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgdXNlckxpc3QgPSBfYS51c2VyTGlzdDtcclxuICAgICgwLCByZWFjdF8yLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGxpc3RzOiAnLCB1c2VyTGlzdCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IGFzOiAnZGl2JywgdzogJ2Z1bGwnLCBvdmVyZmxvd1g6ICdhdXRvJyB9LCB1c2VyTGlzdC5sZW5ndGggP1xyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGFibGUsIHsgdmFyaWFudDogJ3NpbXBsZScsIHc6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRoZWFkLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UciwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRoLCBudWxsLCBcIlVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UaCwgbnVsbCwgXCJQYWNrYWdlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiSm9pbiBkYXRlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiUmVmIElEXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiSW52aXRlZCBieVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRoLCBudWxsLCBcIlJlZmVycmFsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIHsgaXNOdW1lcmljOiB0cnVlIH0pKSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGJvZHksIG51bGwsIHVzZXJMaXN0Lm1hcChmdW5jdGlvbiAodXNlciwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UciwgeyBrZXk6IGluZGV4IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IGFsaWduOiAnY2VudGVyJywgZ2FwOiAnNnB4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5BdmF0YXIsIHsgc2l6ZTogJ3NtJywgbmFtZTogXCJcIi5jb25jYXQodXNlci5maXJzdF9uYW1lLCBcIiBcIikuY29uY2F0KHVzZXIubGFzdF9uYW1lKSB9KSwgXCJcIi5jb25jYXQodXNlci5maXJzdF9uYW1lLCBcIiBcIikuY29uY2F0KHVzZXIubGFzdF9uYW1lKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsIChfYSA9IHVzZXIucGFja2FnZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhY2thZ2UpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsICgwLCBtb21lbnRfMVtcImRlZmF1bHRcIl0pKHVzZXIuY3JlYXRlZF9hdCkuZm9ybWF0KCdsJykpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGQsIG51bGwsIHVzZXIucmVmX2lkKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRkLCBudWxsLCB1c2VyLnBhcmVudCA/IFwiXCIuY29uY2F0KChfYiA9IHVzZXIucGFyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZmlyc3RfbmFtZSwgXCIgXCIpLmNvbmNhdCgoX2MgPSB1c2VyLnBhcmVudCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmxhc3RfbmFtZSkgOiAnIyMjIyMjJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZCwgbnVsbCwgKF9kID0gdXNlci5jaGlsZHJlbikgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB1c2Vyc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRkLCB7IGlzTnVtZXJpYzogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRvb2x0aXAsIHsgbGFiZWw6ICdWaWV3IERldGFpbHMnLCBoYXNBcnJvdzogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogXCIvYWRtaW4vdXNlci9cIi5jb25jYXQodXNlci5pZCkgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb25CdXR0b24sIHsgdmFyaWFudDogJ291dGxpbmUnLCBjb2xvclNjaGVtZTogJ3RlYWwnLCBcImFyaWEtbGFiZWxcIjogJ0NhbGwgU2FnZScsIGZvbnRTaXplOiAnMjBweCcsIGljb246IHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoY2dfMS5DZ0RldGFpbHNNb3JlLCBudWxsKSwgdmFsdWU6ICdEZXRhaWxzJyB9KSkpKSk7XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgIDogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChOb0RhdGFGb3VuZF8xW1wiZGVmYXVsdFwiXSwgbnVsbCkpKSk7XHJcbn07XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVXNlcnNMaXN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxuZnVuY3Rpb24gRmxhc2hNZXNzYWdlcyhfYSkge1xyXG4gICAgdmFyIGZsYXNoID0gX2EuZmxhc2gsIHR5cGUgPSBfYS50eXBlO1xyXG4gICAgdmFyIHRvYXN0ID0gKDAsIHJlYWN0XzEudXNlVG9hc3QpKCk7XHJcbiAgICB2YXIgaWQgPSAndGVzdC10b2FzdCc7XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMltcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwsICF0b2FzdC5pc0FjdGl2ZShpZCkgJiZcclxuICAgICAgICB0b2FzdCh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdGl0bGU6IHR5cGUgPT0gJ3N1Y2Nlc3MnID8gJ1N1Y2Nlc3MnIDogJ0Vycm9yJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZsYXNoLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHR5cGUsXHJcbiAgICAgICAgICAgIGlzQ2xvc2FibGU6IHRydWVcclxuICAgICAgICB9KSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRmxhc2hNZXNzYWdlcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmZ1bmN0aW9uIE1haW5Mb2dvKCkge1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW1hZ2UsIHsgd2lkdGg6IDE1MCwgaGVpZ2h0OiA1MCwgc3JjOiAnL2xvZ28ucG5nJywgYWx0OiAnQnJhbmQgTG9nbycgfSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTWFpbkxvZ287XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgcmVhY3RfMiA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5mdW5jdGlvbiBOb0RhdGFGb3VuZCgpIHtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkNlbnRlciwgeyBoOiAyMDAgfSwgXCJObyBkYXRhIGZvdW5kXCIpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE5vRGF0YUZvdW5kO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgYXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXhpb3NcIikpO1xyXG52YXIgcmVhY3RfMiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgcmVhY3RfYXBleGNoYXJ0c18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1hcGV4Y2hhcnRzXCIpKTtcclxuZnVuY3Rpb24gSW52aXRhdGlvbkNsaWNrcygpIHtcclxuICAgIHZhciBfYSA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKShbXSksIGNhdGVnb3JpZXMgPSBfYVswXSwgc2V0Q2F0ZWdvcmllcyA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKFtdKSwgY2hhcnREYXRhID0gX2JbMF0sIHNldENoYXJ0RGF0YSA9IF9iWzFdO1xyXG4gICAgdmFyIF9jID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKDApLCBjbGlja0NvdW50ID0gX2NbMF0sIHNldENsaWNrQ291bnQgPSBfY1sxXTtcclxuICAgIHZhciBfZCA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKSh0cnVlKSwgbG9hZGluZyA9IF9kWzBdLCBzZXRMb2FkaW5nID0gX2RbMV07XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICBpZDogXCJiYXNpYy1iYXJcIixcclxuICAgICAgICAgICAgd2lkdGg6ICc1MDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yczogWycjNTUzQzlBJ11cclxuICAgIH07XHJcbiAgICB2YXIgc2VyaWVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJDbGlja3NcIixcclxuICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIHZhciBfZSA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKSgnMzBkYXlzJyksIG9wdGlvbiA9IF9lWzBdLCBzZXRPcHRpb24gPSBfZVsxXTtcclxuICAgICgwLCByZWFjdF8yLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YXRpc3RpY3MoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzFbXCJkZWZhdWx0XCJdLmdldChcIi9hcGkvaW52aXRhdGlvbl9jbGlja3MvP29wdGlvbj1cIi5jb25jYXQob3B0aW9uKSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6ICcsIHJlcy5kYXRhLmNoYXJ0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKHJlcy5kYXRhLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYXJ0RGF0YShyZXMuZGF0YS5jaGFydERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENsaWNrQ291bnQocmVzLmRhdGEuY2xpY2tDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRTdGF0aXN0aWNzKCk7XHJcbiAgICB9LCBbb3B0aW9uXSk7XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMltcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBwYjogJzVweCcsIG1iOiAnMjVweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjRTdFM0YwJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgbWI6IDEsIGZvbnRTaXplOiBcInhzXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBsZXR0ZXJTcGFjaW5nOiBcIndpZGVcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuNTAwXCIsIFwiZ3JheS40MDBcIikgfSxcclxuICAgICAgICAgICAgICAgIFwiTGFzdCBcIixcclxuICAgICAgICAgICAgICAgIG9wdGlvbiA9PSAnN2RheXMnID8gJzcgZGF5cycgOiBvcHRpb24gPT0gJzMwZGF5cycgPyAnMzAgZGF5cycgOiAnMTIgbW9udGhzJyxcclxuICAgICAgICAgICAgICAgIFwiICBzdGF0aXN0aWNzXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBqdXN0aWZ5OiAnc3BhY2UtYmV0d2VlbicgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IG1iOiAyLCBmb250U2l6ZTogXCIzeGxcIiwgZm9udFdlaWdodDogW1wiYm9sZFwiLCBcImV4dHJhYm9sZFwiXSwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuOTAwXCIsIFwiZ3JheS41MFwiKSwgbGluZUhlaWdodDogXCJ0aWdodFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2tDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnNwYW4sIHsgZm9udFNpemU6IFwibWRcIiwgZm9udFdlaWdodDogXCJtZWRpdW1cIiwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuNjAwXCIsIFwiZ3JheS40MDBcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2tzXCIpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TZWxlY3QsIHsgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXRPcHRpb24oZS50YXJnZXQudmFsdWUpOyB9LCB2YWx1ZTogb3B0aW9uLCB3OiAnYXV0bycsIHNpemU6ICd4cycgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6ICc3ZGF5cycgfSwgXCJMYXN0IDcgZGF5c1wiKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6ICczMGRheXMnIH0sIFwiTGFzdCAzMCBkYXlzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogJzEybW9udGhzJyB9LCBcIkxhc3QgMTIgbW9udGhzXCIpKSkpLFxyXG4gICAgICAgIGxvYWRpbmcgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQ2VudGVyLCB7IGg6ICc1MCUnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TcGlubmVyLCB7IHNpemU6ICd4bCcgfSkpIDogY2hhcnREYXRhLmxlbmd0aCA/IHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfYXBleGNoYXJ0c18xW1wiZGVmYXVsdFwiXSwgeyBvcHRpb25zOiBvcHRpb25zLCBzZXJpZXM6IHNlcmllcywgdHlwZTogXCJiYXJcIiB9KSA6IHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5DZW50ZXIsIHsgaDogJzEwMHB4JyB9LCBcIk5vIGRhdGEgZm91bmRcIikpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEludml0YXRpb25DbGlja3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciBheGlvc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJheGlvc1wiKSk7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciByZWFjdF9hcGV4Y2hhcnRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0LWFwZXhjaGFydHNcIikpO1xyXG5mdW5jdGlvbiBJbnZpdGF0aW9uUmVnaXN0cmF0aW9ucygpIHtcclxuICAgIHZhciBfYSA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKShbXSksIGNhdGVnb3JpZXMgPSBfYVswXSwgc2V0Q2F0ZWdvcmllcyA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKFtdKSwgY2hhcnREYXRhID0gX2JbMF0sIHNldENoYXJ0RGF0YSA9IF9iWzFdO1xyXG4gICAgdmFyIF9jID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKDApLCByZWdpc3RlckNvdW50ID0gX2NbMF0sIHNldFJlZ2lzdGVyQ291bnQgPSBfY1sxXTtcclxuICAgIHZhciBfZCA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKSh0cnVlKSwgbG9hZGluZyA9IF9kWzBdLCBzZXRMb2FkaW5nID0gX2RbMV07XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICBpZDogXCJiYXNpYy1iYXJcIixcclxuICAgICAgICAgICAgd2lkdGg6ICc1MDBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IGNhdGVnb3JpZXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yczogWycjNTUzQzlBJ11cclxuICAgIH07XHJcbiAgICB2YXIgc2VyaWVzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJSZWdpc3RlcnNcIixcclxuICAgICAgICAgICAgZGF0YTogY2hhcnREYXRhXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuICAgIHZhciBfZSA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKSgnMzBkYXlzJyksIG9wdGlvbiA9IF9lWzBdLCBzZXRPcHRpb24gPSBfZVsxXTtcclxuICAgICgwLCByZWFjdF8yLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0YXRpc3RpY3MoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzFbXCJkZWZhdWx0XCJdLmdldChcIi9hcGkvaW52aXRhdGlvbl9yZWdpc3RlcnMvP29wdGlvbj1cIi5jb25jYXQob3B0aW9uKSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6ICcsIHJlcy5kYXRhLmNoYXJ0RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKHJlcy5kYXRhLmNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENoYXJ0RGF0YShyZXMuZGF0YS5jaGFydERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlZ2lzdGVyQ291bnQocmVzLmRhdGEucmVnaXN0ZXJDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRTdGF0aXN0aWNzKCk7XHJcbiAgICB9LCBbb3B0aW9uXSk7XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMltcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBwYjogJzVweCcsIG1iOiAnMjVweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjRTdFM0YwJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgbWI6IDEsIGZvbnRTaXplOiBcInhzXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBsZXR0ZXJTcGFjaW5nOiBcIndpZGVcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuNTAwXCIsIFwiZ3JheS40MDBcIikgfSxcclxuICAgICAgICAgICAgICAgIFwiTGFzdCBcIixcclxuICAgICAgICAgICAgICAgIG9wdGlvbiA9PSAnN2RheXMnID8gJzcgZGF5cycgOiBvcHRpb24gPT0gJzMwZGF5cycgPyAnMzAgZGF5cycgOiAnMTIgbW9udGhzJyxcclxuICAgICAgICAgICAgICAgIFwiICBzdGF0aXN0aWNzXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBqdXN0aWZ5OiAnc3BhY2UtYmV0d2VlbicgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IG1iOiAyLCBmb250U2l6ZTogXCIzeGxcIiwgZm9udFdlaWdodDogW1wiYm9sZFwiLCBcImV4dHJhYm9sZFwiXSwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuOTAwXCIsIFwiZ3JheS41MFwiKSwgbGluZUhlaWdodDogXCJ0aWdodFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJDb3VudCxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnNwYW4sIHsgZm9udFNpemU6IFwibWRcIiwgZm9udFdlaWdodDogXCJtZWRpdW1cIiwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuNjAwXCIsIFwiZ3JheS40MDBcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVnaXN0cmF0aW9uc1wiKSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuU2VsZWN0LCB7IG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0T3B0aW9uKGUudGFyZ2V0LnZhbHVlKTsgfSwgdmFsdWU6IG9wdGlvbiwgdzogJ2F1dG8nLCBzaXplOiAneHMnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiAnN2RheXMnIH0sIFwiTGFzdCA3IGRheXNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiAnMzBkYXlzJyB9LCBcIkxhc3QgMzAgZGF5c1wiKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6ICcxMm1vbnRocycgfSwgXCJMYXN0IDEyIG1vbnRoc1wiKSkpKSxcclxuICAgICAgICBsb2FkaW5nID8gcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkNlbnRlciwgeyBoOiAnNTAlJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuU3Bpbm5lciwgeyBzaXplOiAneGwnIH0pKSA6IGNoYXJ0RGF0YS5sZW5ndGggPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0X2FwZXhjaGFydHNfMVtcImRlZmF1bHRcIl0sIHsgb3B0aW9uczogb3B0aW9ucywgc2VyaWVzOiBzZXJpZXMsIHR5cGU6IFwiYXJlYVwiIH0pIDogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkNlbnRlciwgeyBoOiAnMTAwcHgnIH0sIFwiTm8gZGF0YSBmb3VuZFwiKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSW52aXRhdGlvblJlZ2lzdHJhdGlvbnM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgcmVhY3RfMiA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5mdW5jdGlvbiBBY2NvdW50SW5mb0NhcmRzKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRVc2VycyA9IF9hLmNoaWxkVXNlcnMsIGNsaWNrcyA9IF9hLmNsaWNrcztcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja3M6ICcsIGNsaWNrcyk7XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IHc6IFwiZnVsbFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9LFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5HcmlkXHJcbiAgICAgICAgLy8gaD0nMjAwcHgnXHJcbiAgICAgICAgLCB7IFxyXG4gICAgICAgICAgICAvLyBoPScyMDBweCdcclxuICAgICAgICAgICAgdGVtcGxhdGVSb3dzOiAncmVwZWF0KDEsIDFmciknLCB0ZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDIsIDFmciknLCAncmVwZWF0KDIsIDFmciknLCAncmVwZWF0KDMsIDFmciknXSwgZ2FwOiA0LCB0ZXh0QWxpZ246IFtcImxlZnRcIiwgXCJjZW50ZXJcIl0gfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRJdGVtLCB7IGJnOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJ3aGl0ZVwiLCBcImdyYXkuODAwXCIpLCBweDogNCwgcHk6IDYsIHNoYWRvdzogXCJiYXNlXCIsIHJvdW5kZWQ6IFwibWRcIiB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLmNoYWtyYS5wLCB7IG1iOiAxLCBmb250U2l6ZTogXCJ4c1wiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGV0dGVyU3BhY2luZzogXCJ3aWRlXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjUwMFwiLCBcImdyYXkuNDAwXCIpIH0sIFwiUmVmZXJyYWwgQ2xpY2tzXCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgbWI6IDIsIGZvbnRTaXplOiBcIjV4bFwiLCBmb250V2VpZ2h0OiBbXCJib2xkXCIsIFwiZXh0cmFib2xkXCJdLCBjb2xvcjogKDAsIHJlYWN0XzEudXNlQ29sb3JNb2RlVmFsdWUpKFwiZ3JheS45MDBcIiwgXCJncmF5LjUwXCIpLCBsaW5lSGVpZ2h0OiBcInRpZ2h0XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBjbGlja3MubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEuc3BhbiwgeyBmb250U2l6ZTogXCIyeGxcIiwgZm9udFdlaWdodDogXCJtZWRpdW1cIiwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuNjAwXCIsIFwiZ3JheS40MDBcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2tzXCIpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEucCwgeyBtYjogNiwgZm9udFNpemU6IFwibGdcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS42MDBcIiwgXCJncmF5LjUwMFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXkuNTAwJyB9LCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlN0YWNrLCB7IGRpc3BsYXk6IFtcImJsb2NrXCIsIFwiZmxleFwiXSwgc3BhY2luZzogMiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGRpcmVjdGlvbjogW1wiY29sdW1uXCIsIFwicm93XCJdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkxpbmssIHsgaHJlZjogXCIvdXNlci9teV9zdGF0aXN0aWNzXCIsIHc6IFtcImF1dG9cIiwgXCJhdXRvXCJdLCBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBweDogMywgcHk6IDIsIGJvcmRlcjogXCJzb2xpZCB0cmFuc3BhcmVudFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgcm91bmRlZDogXCJtZFwiLCBzaGFkb3c6IFwibWRcIiwgY29sb3I6IFwid2hpdGVBbHBoYS44MDBcIiwgYmc6IFwicHVycGxlLjYwMFwiLCBfaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnOiBcInB1cnBsZS43MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIFwiVmlldyBEZXRhaWxzXCIpKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5HcmlkSXRlbSwgeyBiZzogKDAsIHJlYWN0XzEudXNlQ29sb3JNb2RlVmFsdWUpKFwid2hpdGVcIiwgXCJncmF5LjgwMFwiKSwgcHg6IDQsIHB5OiA2LCBzaGFkb3c6IFwiYmFzZVwiLCByb3VuZGVkOiBcIm1kXCIgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEucCwgeyBtYjogMSwgZm9udFNpemU6IFwieHNcIiwgZm9udFdlaWdodDogXCJib2xkXCIsIGxldHRlclNwYWNpbmc6IFwid2lkZVwiLCB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLCBjb2xvcjogKDAsIHJlYWN0XzEudXNlQ29sb3JNb2RlVmFsdWUpKFwiZ3JheS41MDBcIiwgXCJncmF5LjQwMFwiKSB9LCBcIlJlZ2lzdHJhdGlvbnNcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBtYjogMiwgZm9udFNpemU6IFwiNXhsXCIsIGZvbnRXZWlnaHQ6IFtcImJvbGRcIiwgXCJleHRyYWJvbGRcIl0sIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjkwMFwiLCBcImdyYXkuNTBcIiksIGxpbmVIZWlnaHQ6IFwidGlnaHRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVXNlcnMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEuc3BhbiwgeyBmb250U2l6ZTogXCIyeGxcIiwgZm9udFdlaWdodDogXCJtZWRpdW1cIiwgY29sb3I6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcImdyYXkuNjAwXCIsIFwiZ3JheS40MDBcIikgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVXNlcnNcIikpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLmNoYWtyYS5wLCB7IG1iOiA2LCBmb250U2l6ZTogXCJsZ1wiLCBcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjYwMFwiLCBcImdyYXkuNTAwXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheS41MDAnIH0sIFwiTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlN0YWNrLCB7IGRpc3BsYXk6IFtcImJsb2NrXCIsIFwiZmxleFwiXSwgc3BhY2luZzogMiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGRpcmVjdGlvbjogW1wiY29sdW1uXCIsIFwicm93XCJdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkxpbmssIHsgaHJlZjogXCIvdXNlci9teV9zdGF0aXN0aWNzXCIsIHc6IFtcImF1dG9cIiwgXCJhdXRvXCJdLCBkaXNwbGF5OiBcImlubGluZS1mbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBweDogMywgcHk6IDIsIGJvcmRlcjogXCJzb2xpZCB0cmFuc3BhcmVudFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgcm91bmRlZDogXCJtZFwiLCBzaGFkb3c6IFwibWRcIiwgY29sb3I6IFwid2hpdGVBbHBoYS44MDBcIiwgYmc6IFwicHVycGxlLjYwMFwiLCBfaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnOiBcInB1cnBsZS43MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sIFwiVmlldyBEZXRhaWxzXCIpKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5HcmlkSXRlbSwgeyBiZzogKDAsIHJlYWN0XzEudXNlQ29sb3JNb2RlVmFsdWUpKFwid2hpdGVcIiwgXCJncmF5LjgwMFwiKSwgcHg6IDQsIHB5OiA2LCBzaGFkb3c6IFwiYmFzZVwiLCByb3VuZGVkOiBcIm1kXCIsIGNvbFNwYW46IFsyLCAyLCAxXSB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLmNoYWtyYS5wLCB7IG1iOiAxLCBmb250U2l6ZTogXCJ4c1wiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGV0dGVyU3BhY2luZzogXCJ3aWRlXCIsIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjUwMFwiLCBcImdyYXkuNDAwXCIpIH0sIFwiQXZhaWxhYmxlIEJhbGFuY2VcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBtYjogMiwgZm9udFNpemU6IFwiNXhsXCIsIGZvbnRXZWlnaHQ6IFtcImJvbGRcIiwgXCJleHRyYWJvbGRcIl0sIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjkwMFwiLCBcImdyYXkuNTBcIiksIGxpbmVIZWlnaHQ6IFwidGlnaHRcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFwiJDBcIixcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnNwYW4sIHsgZm9udFNpemU6IFwiMnhsXCIsIGZvbnRXZWlnaHQ6IFwibWVkaXVtXCIsIGNvbG9yOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJncmF5LjYwMFwiLCBcImdyYXkuNDAwXCIpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlVTRFwiKSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgbWI6IDYsIGZvbnRTaXplOiBcImxnXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNjAwXCIsIFwiZ3JheS41MDBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5LjUwMCcgfSwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TdGFjaywgeyBkaXNwbGF5OiBbXCJibG9ja1wiLCBcImZsZXhcIl0sIHNwYWNpbmc6IDIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBkaXJlY3Rpb246IFtcImNvbHVtblwiLCBcInJvd1wiXSB9KSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBY2NvdW50SW5mb0NhcmRzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIEludml0YXRpb25DbGlja3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vQ2hhcnRzL0ludml0YXRpb25DbGlja3NcIikpO1xyXG52YXIgSW52aXRhdGlvblJlZ2lzdHJhdGlvbnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vQ2hhcnRzL0ludml0YXRpb25SZWdpc3RyYXRpb25zXCIpKTtcclxuZnVuY3Rpb24gQWNjb3VudEluZm9DaGFydCgpIHtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRcclxuICAgIC8vIGg9JzIwMHB4J1xyXG4gICAgLCB7IFxyXG4gICAgICAgIC8vIGg9JzIwMHB4J1xyXG4gICAgICAgIHc6ICdmdWxsJywgdGVtcGxhdGVSb3dzOiAncmVwZWF0KDEsIDFmciknLCB0ZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsIDFmciknLCAncmVwZWF0KDIsIDFmciknLCAncmVwZWF0KDIsIDFmciknXSwgZ2FwOiA0LCB0ZXh0QWxpZ246IFtcImxlZnRcIiwgXCJsZWZ0XCJdIH0sXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRJdGVtLCB7IGJnOiAoMCwgcmVhY3RfMS51c2VDb2xvck1vZGVWYWx1ZSkoXCJ3aGl0ZVwiLCBcImdyYXkuODAwXCIpLCBweDogNCwgcHk6IDYsIHNoYWRvdzogXCJiYXNlXCIsIHJvdW5kZWQ6IFwibWRcIiB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEludml0YXRpb25DbGlja3NfMVtcImRlZmF1bHRcIl0sIG51bGwpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuR3JpZEl0ZW0sIHsgYmc6ICgwLCByZWFjdF8xLnVzZUNvbG9yTW9kZVZhbHVlKShcIndoaXRlXCIsIFwiZ3JheS44MDBcIiksIHB4OiA0LCBweTogNiwgc2hhZG93OiBcImJhc2VcIiwgcm91bmRlZDogXCJtZFwiIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoSW52aXRhdGlvblJlZ2lzdHJhdGlvbnNfMVtcImRlZmF1bHRcIl0sIG51bGwpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQWNjb3VudEluZm9DaGFydDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgaW5lcnRpYV9yZWFjdF8xID0gcmVxdWlyZShcIkBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIGhpXzEgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaGlcIik7XHJcbmZ1bmN0aW9uIFJlZmVycmFsQ2xpcGJvYXJkKF9hKSB7XHJcbiAgICB2YXIgX2IgPSBfYS5zb3VyY2UsIHNvdXJjZSA9IF9iID09PSB2b2lkIDAgPyAnZGlyZWN0JyA6IF9iO1xyXG4gICAgdmFyIGF1dGhVc2VyID0gKDAsIGluZXJ0aWFfcmVhY3RfMS51c2VQYWdlKSgpLnByb3BzLmF1dGhVc2VyO1xyXG4gICAgdmFyIF9jID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKCcnKSwgdmFsdWUgPSBfY1swXSwgc2V0VmFsdWUgPSBfY1sxXTtcclxuICAgIHZhciBfZCA9ICgwLCByZWFjdF8xLnVzZUNsaXBib2FyZCkodmFsdWUpLCBoYXNDb3BpZWQgPSBfZC5oYXNDb3BpZWQsIG9uQ29weSA9IF9kLm9uQ29weTtcclxuICAgICgwLCByZWFjdF8yLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3aW5kb3c/LmxvY2F0aW9uLnByb3RvY29sOiAnLCB3aW5kb3c/LmxvY2F0aW9uLnBvcnQpXHJcbiAgICAgICAgc2V0VmFsdWUoXCJcIi5jb25jYXQod2luZG93ID09PSBudWxsIHx8IHdpbmRvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sLCBcIi8vXCIpLmNvbmNhdCh3aW5kb3cgPT09IG51bGwgfHwgd2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsIFwiL2ludml0ZT9zcmM9XCIpLmNvbmNhdChzb3VyY2UsIFwiJnJlZj1cIikuY29uY2F0KGF1dGhVc2VyLnJlZl9pZCkpO1xyXG4gICAgfSwgW3NvdXJjZV0pO1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzJbXCJkZWZhdWx0XCJdLkZyYWdtZW50LCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IG1iOiAyIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5JbnB1dCwgeyB2YWx1ZTogdmFsdWUsIGlzUmVhZE9ubHk6IHRydWUsIHBsYWNlaG9sZGVyOiAnV2VsY29tZScgfSksXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5CdXR0b24sIHsgb25DbGljazogb25Db3B5LCBtbDogMiwgYmc6IGhhc0NvcGllZCA/ICdncmVlbi4yMDAnIDogJ3doaXRlQWxwaGEuMzAwJyB9LCBoYXNDb3BpZWQgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSWNvbiwgeyBhczogaGlfMS5IaUNsaXBib2FyZENoZWNrLCBoOiA2LCB3OiA2LCBjb2xvcjogJ2dyZWVuLjUwMCcgfSkgOiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSWNvbiwgeyBhczogaGlfMS5IaUNsaXBib2FyZENvcHksIGg6IDYsIHc6IDYgfSkpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUmVmZXJyYWxDbGlwYm9hcmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIGNnXzEgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvY2dcIik7XHJcbnZhciBOb0RhdGFGb3VuZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Ob0RhdGFGb3VuZFwiKSk7XHJcbnZhciBtb21lbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibW9tZW50XCIpKTtcclxudmFyIFVzZXJzTGlzdCA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHVzZXJMaXN0ID0gX2EudXNlckxpc3Q7XHJcbiAgICAoMCwgcmVhY3RfMi51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBsaXN0czogJywgdXNlckxpc3QpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBhczogJ2RpdicsIHc6ICdmdWxsJywgb3ZlcmZsb3dYOiAnYXV0bycgfSwgdXNlckxpc3QubGVuZ3RoID9cclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRhYmxlLCB7IHZhcmlhbnQ6ICdzaW1wbGUnLCB3OiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UaGVhZCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVHIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UaCwgbnVsbCwgXCJVc2VyXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiSm9pbiBkYXRlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiU291cmNlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIG51bGwsIFwiUmVmIElEXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGgsIHsgaXNOdW1lcmljOiB0cnVlIH0pKSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGJvZHksIG51bGwsIHVzZXJMaXN0Lm1hcChmdW5jdGlvbiAodXNlciwgaW5kZXgpIHsgcmV0dXJuIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UciwgeyBrZXk6IGluZGV4IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRkLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBhbGlnbjogJ2NlbnRlcicsIGdhcDogJzZweCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5BdmF0YXIsIHsgc2l6ZTogJ3NtJywgbmFtZTogXCJcIi5jb25jYXQodXNlci5maXJzdF9uYW1lLCBcIiBcIikuY29uY2F0KHVzZXIubGFzdF9uYW1lKSB9KSwgXCJcIi5jb25jYXQodXNlci5maXJzdF9uYW1lLCBcIiBcIikuY29uY2F0KHVzZXIubGFzdF9uYW1lKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZCwgbnVsbCwgKDAsIG1vbWVudF8xW1wiZGVmYXVsdFwiXSkodXNlci5jcmVhdGVkX2F0KS5mb3JtYXQoJ2wnKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRkLCBudWxsLCB1c2VyLnNvdXJjZSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRkLCBudWxsLCB1c2VyLnJlZl9pZCksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRkLCB7IGlzTnVtZXJpYzogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVG9vbHRpcCwgeyBsYWJlbDogJ1ZpZXcgRGV0YWlscycsIGhhc0Fycm93OiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSWNvbkJ1dHRvbiwgeyB2YXJpYW50OiAnb3V0bGluZScsIGNvbG9yU2NoZW1lOiAndGVhbCcsIFwiYXJpYS1sYWJlbFwiOiAnQ2FsbCBTYWdlJywgZm9udFNpemU6ICcyMHB4JywgaWNvbjogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChjZ18xLkNnRGV0YWlsc01vcmUsIG51bGwpLCB2YWx1ZTogJ0RldGFpbHMnIH0pKSkpOyB9KSkpXHJcbiAgICAgICAgICAgIDogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChOb0RhdGFGb3VuZF8xW1wiZGVmYXVsdFwiXSwgbnVsbCkpKSk7XHJcbn07XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVXNlcnNMaXN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIHJlYWN0X29yZ2NoYXJ0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkBkYWJlbmcvcmVhY3Qtb3JnY2hhcnRcIikpO1xyXG52YXIgbXlfbm9kZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL215LW5vZGVcIikpO1xyXG5mdW5jdGlvbiBHZW5lb2xvZ3koX2EpIHtcclxuICAgIHZhciBfYiA9IF9hLmVuYWJsZVpvb20sIGVuYWJsZVpvb20gPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYiwgZGF0YVNvdXJjZSA9IF9hLmRhdGFTb3VyY2U7XHJcbiAgICByZXR1cm4gKHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3Rfb3JnY2hhcnRfMVtcImRlZmF1bHRcIl1cclxuICAgIC8vIGhlaWdodD1cIjEwMHZoXCJcclxuICAgICwgeyBcclxuICAgICAgICAvLyBoZWlnaHQ9XCIxMDB2aFwiXHJcbiAgICAgICAgZGF0YXNvdXJjZTogZGF0YVNvdXJjZSwgY2hhcnRDbGFzczogXCJteUNoYXJ0XCIsIE5vZGVUZW1wbGF0ZTogbXlfbm9kZV8xW1wiZGVmYXVsdFwiXSwgcGFuOiB0cnVlLCB6b29tOiBlbmFibGVab29tIH0pKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEdlbmVvbG9neTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgcHJvcF90eXBlc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcclxudmFyIHJlYWN0XzIgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxuLy8gaW1wb3J0IFwiLi9teS1ub2RlLmNzc1wiO1xyXG52YXIgcHJvcFR5cGVzID0ge1xyXG4gICAgbm9kZURhdGE6IHByb3BfdHlwZXNfMVtcImRlZmF1bHRcIl0ub2JqZWN0LmlzUmVxdWlyZWRcclxufTtcclxudmFyIE15Tm9kZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIG5vZGVEYXRhID0gX2Eubm9kZURhdGE7XHJcbiAgICB2YXIgc2VsZWN0Tm9kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBhbGVydCgnUmVmIElEOiAnK25vZGVEYXRhLnJlZl9pZCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hZG1pbi91c2VyL1wiLmNvbmNhdChub2RlRGF0YS5pZCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzEudXNlU3RhdGUpKDApLCBsZXZlbFBlcmNlbnQgPSBfYlswXSwgc2V0UGVyY2VudCA9IF9iWzFdO1xyXG4gICAgKDAsIHJlYWN0XzEudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbm9kZURhdGEubGV2ZWwgPT0gMSA/IHNldFBlcmNlbnQobm9kZURhdGEucGFja2FnZS5sZXZlbF9vbmUpXHJcbiAgICAgICAgICAgIDogbm9kZURhdGEubGV2ZWwgPT0gMiA/IHNldFBlcmNlbnQobm9kZURhdGEucGFja2FnZS5sZXZlbF90d28pXHJcbiAgICAgICAgICAgICAgICA6IG5vZGVEYXRhLmxldmVsID09IDMgPyBzZXRQZXJjZW50KG5vZGVEYXRhLnBhY2thZ2UubGV2ZWxfdGhyZWUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBub2RlRGF0YS5sZXZlbCA9PSA0ID8gc2V0UGVyY2VudChub2RlRGF0YS5wYWNrYWdlLmxldmVsX2ZvdXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbm9kZURhdGEubGV2ZWwgPT0gNSA/IHNldFBlcmNlbnQobm9kZURhdGEucGFja2FnZS5sZXZlbF9maXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBub2RlRGF0YS5sZXZlbCA9PSA2ID8gc2V0UGVyY2VudChub2RlRGF0YS5wYWNrYWdlLmxldmVsX3NpeClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5vZGVEYXRhLmxldmVsID09IDcgJiYgc2V0UGVyY2VudChub2RlRGF0YS5wYWNrYWdlLmxldmVsX3NldmVuKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAocmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IG9uQ2xpY2s6IHNlbGVjdE5vZGUgfSxcclxuICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzIuRmxleCwgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5OiBcImNlbnRlclwiLCBjbGFzc05hbWU6IFwicG9zaXRpb25cIiB9LFxyXG4gICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzIuVGV4dCwgeyBmb250U2l6ZTogXCJzbVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9LCBub2RlRGF0YS5uYW1lKSxcclxuICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8yLlRleHQsIHsgZm9udFNpemU6IFwieHNcIiB9LFxyXG4gICAgICAgICAgICAgICAgXCIkXCIsXHJcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5wdXJjaGFzZWQgKiAobGV2ZWxQZXJjZW50IC8gMTAwKSkpKSk7XHJcbn07XHJcbk15Tm9kZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTXlOb2RlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBGb290ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9pbmMvRm9vdGVyXCIpKTtcclxudmFyIFNpZGVNZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW5jL1NpZGVNZW51XCIpKTtcclxudmFyIFRvcE5hdmlnYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9pbmMvVG9wTmF2aWdhdGlvblwiKSk7XHJcbmZ1bmN0aW9uIEFkbWluTGF5b3V0KF9hKSB7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcclxuICAgIHZhciBpc01vYmlsZSA9ICgwLCByZWFjdF8xLnVzZU1lZGlhUXVlcnkpKCcobWF4LXdpZHRoOjEwMDBweCknKVswXTtcclxuICAgIHZhciBfYiA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKShpc01vYmlsZSA/IHRydWUgOiBmYWxzZSksIGNvbGxhcHNlZCA9IF9iWzBdLCBzZXRDb2xsYXBzZWQgPSBfYlsxXTtcclxuICAgIHZhciB0b2dnbGVDb2xsYXBzZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgZGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeTogJ3NwYWNlLWJldHdlZW4nIH0sXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUb3BOYXZpZ2F0aW9uXzFbXCJkZWZhdWx0XCJdLCB7IHRvZ2dsZUNvbGxhcHNlZDogdG9nZ2xlQ29sbGFwc2VkLCBjb2xsYXBzZWQ6IGNvbGxhcHNlZCB9KSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBjb2xvcjogJ3doaXRlJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IGFzOiAnYXNpZGUnLCB6SW5kZXg6IDk5OTksIHB4OiAwLCB3aWR0aDogY29sbGFwc2VkID8gJzgwcHgnIDogJzIxMHB4JywgcHQ6ICc3NHB4JywgaDogJzEwMHZoJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHN0eWxlOiB7IHBvc2l0aW9uOiAnZml4ZWQnLCBoZWlnaHQ6ICcxMDB2aCcsIHpJbmRleDogOTk5LCBvdmVyZmxvd1k6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChTaWRlTWVudV8xW1wiZGVmYXVsdFwiXSwgeyBjb2xsYXBzZWQ6IGNvbGxhcHNlZCB9KSkpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IGNvbG9yOiAnZ3JheS44MDAnLCB3OiBpc01vYmlsZSA/ICc4MCUnIDogJzEwMCUnLCBtaW5IOiAnMTAwdmgnLCBiZzogaXNNb2JpbGUgPyAnd2hpdGUnIDogJ3B1cnBsZS41MCcsIGRyb3BTaGFkb3c6ICdtZCcgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHg6IGlzTW9iaWxlID8gNSA6IDEwLCBweTogJzkwcHgnLCBtaW5IOiAnMTAwdmgnIH0sIGNoaWxkcmVuKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRm9vdGVyXzFbXCJkZWZhdWx0XCJdLCBudWxsKSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBZG1pbkxheW91dDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbmZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAocmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xW1wiZGVmYXVsdFwiXS5GcmFnbWVudCwgbnVsbCkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRm9vdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIGFudGRfMSA9IHJlcXVpcmUoXCJhbnRkXCIpO1xyXG52YXIgaWNvbnNfMSA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTtcclxudmFyIGluZXJ0aWFfcmVhY3RfMSA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcIik7XHJcbnZhciBhaV8xID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpO1xyXG52YXIgYmlfMSA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9iaVwiKTtcclxudmFyIHJlYWN0XzIgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIGZpXzEgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmlcIik7XHJcbnZhciBTdWJNZW51ID0gYW50ZF8xLk1lbnUuU3ViTWVudTtcclxuZnVuY3Rpb24gU2lkZU1lbnUoX2EpIHtcclxuICAgIC8vIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHZhciBjb2xsYXBzZWQgPSBfYS5jb2xsYXBzZWQ7XHJcbiAgICAvLyBjb25zdCB0b2dnbGVDb2xsYXBzZWQgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpO1xyXG4gICAgLy8gICB9O1xyXG4gICAgcmV0dXJuIChyZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzIuQm94LCB7IHNoYWRvdzogJ3hsJyB9LFxyXG4gICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoYW50ZF8xLk1lbnVcclxuICAgICAgICAvLyBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX1cclxuICAgICAgICAvLyBkZWZhdWx0T3BlbktleXM9e1snc3ViMSddfVxyXG4gICAgICAgICwgeyBcclxuICAgICAgICAgICAgLy8gZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119XHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJ119XHJcbiAgICAgICAgICAgIG1vZGU6IFwiaW5saW5lXCIsIHRoZW1lOiBcImRhcmtcIiwgaW5saW5lQ29sbGFwc2VkOiBjb2xsYXBzZWQsIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDE4MC40OGRlZyxyZ2JhKDExNSw3MCwyMTUsMSkgLTI2LjE1JSxyZ2JhKDU3LDM1LDgxLDEpIDE4OS44NCUpJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChhbnRkXzEuTWVudS5JdGVtLCB7IGtleTogXCIxXCIsIGljb246IHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoYWlfMS5BaU91dGxpbmVEYXNoYm9hcmQsIG51bGwpIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGluZXJ0aWFfcmVhY3RfMS5MaW5rLCB7IGhyZWY6ICcvYWRtaW4vZGFzaGJvYXJkJyB9LCBcIkRhc2hib2FyZFwiKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoYW50ZF8xLk1lbnUuSXRlbSwgeyBrZXk6IFwiMlwiLCBpY29uOiByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGJpXzEuQmlTdGF0cywgbnVsbCkgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogJy9hZG1pbi9teV9zdGF0aXN0aWNzJyB9LCBcIlN0YXRpc3RpY3MgT3ZlcnZpZXdcIikpLFxyXG4gICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGFudGRfMS5NZW51Lkl0ZW0sIHsga2V5OiBcIjNcIiwgaWNvbjogcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChiaV8xLkJpQ2F0ZWdvcnlBbHQsIG51bGwpIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGluZXJ0aWFfcmVhY3RfMS5MaW5rLCB7IGhyZWY6ICcvYWRtaW4vcGFja2FnZXMnIH0sIFwiTWVtYmVyIHJhbmtzXCIpKSxcclxuICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChhbnRkXzEuTWVudS5JdGVtLCB7IGtleTogXCI0XCIsIGljb246IHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoZmlfMS5GaVVzZXJzLCBudWxsKSB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiAnL2FkbWluL3VzZXJzJyB9LCBcIlJlZ2lzdGVyZWQgVXNlcnNcIikpLFxyXG4gICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFN1Yk1lbnUsIHsga2V5OiBcInN1YjJcIiwgaWNvbjogcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpY29uc18xLkFwcHN0b3JlT3V0bGluZWQsIG51bGwpLCB0aXRsZTogXCJNYW5hZ2UgUHJvZHVjdHNcIiB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChhbnRkXzEuTWVudS5JdGVtLCB7IGtleTogXCI5XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGluZXJ0aWFfcmVhY3RfMS5MaW5rLCB7IGhyZWY6ICcvYWRtaW4vcHJvZHVjdC9jcmVhdGUnIH0sIFwiQ3JlYXRlIFByb2R1Y3RcIikpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChhbnRkXzEuTWVudS5JdGVtLCB7IGtleTogXCIxMFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiAnL2FkbWluL3Byb2R1Y3QvbGlzdCcgfSwgXCJQcm9kdWN0IExpc3RcIikpKSkpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFNpZGVNZW51O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIGluZXJ0aWFfcmVhY3RfMSA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBiaV8xID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JpXCIpO1xyXG52YXIgTWFpbkxvZ29fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vQ29tcG9uZW50cy9NYWluTG9nb1wiKSk7XHJcbnZhciBic18xID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JzXCIpO1xyXG5mdW5jdGlvbiBUb3BOYXZpZ2F0aW9uKF9hKSB7XHJcbiAgICB2YXIgdG9nZ2xlQ29sbGFwc2VkID0gX2EudG9nZ2xlQ29sbGFwc2VkLCBjb2xsYXBzZWQgPSBfYS5jb2xsYXBzZWQ7XHJcbiAgICB2YXIgYXV0aFVzZXIgPSAoMCwgaW5lcnRpYV9yZWFjdF8xLnVzZVBhZ2UpKCkucHJvcHMuYXV0aFVzZXI7XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHk6IDMsIHc6ICdmdWxsJywgYmc6ICcjMzUzNTM1JywgcG9zaXRpb246ICdmaXhlZCcsIHpJbmRleDogOTk5OTk5IH0sXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkNvbnRhaW5lciwgeyBtYXhXOiAnY29udGFpbmVyLjJ4bCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsganVzdGlmeTogJ3NwYWNlLWJldHdlZW4nIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSFN0YWNrLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5JY29uLCB7IGNvbG9yOiAnd2hpdGUnLCBjdXJzb3I6ICdwb2ludGVyJywgbXI6IDUsIG9uQ2xpY2s6IHRvZ2dsZUNvbGxhcHNlZCwgYXM6IGNvbGxhcHNlZCA/IGJzXzEuQnNUZXh0TGVmdCA6IGJzXzEuQnNUZXh0Q2VudGVyLCB3OiA4LCBoOiA4IH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogJy8nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoTWFpbkxvZ29fMVtcImRlZmF1bHRcIl0sIG51bGwpKSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSFN0YWNrLCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHk6IDIsIHB4OiAzLCBjb2xvcjogJ3doaXRlQWxwaGEuODAwJywgcm91bmRlZDogJzVweCcsIGN1cnNvcjogJ3BvaW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5NZW51LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLk1lbnVCdXR0b24sIHsgYXM6ICdhJywgZ2FwOiAyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkF2YXRhciwgeyBzaXplOiAneHMnLCBtcjogMiwgbmFtZTogXCJcIi5jb25jYXQoYXV0aFVzZXIuZmlyc3RfbmFtZSwgXCIgXCIpLmNvbmNhdChhdXRoVXNlci5sYXN0X25hbWUpLCBzcmM6ICcnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhVc2VyLmZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFVzZXIubGFzdF9uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5NZW51TGlzdCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuTWVudUl0ZW0sIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogXCIvbG9nb3V0XCIsIG1ldGhvZDogXCJwb3N0XCIsIGFzOiBcImJ1dHRvblwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBhbGlnbjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5JY29uLCB7IGFzOiBiaV8xLkJpUG93ZXJPZmYsIGNvbG9yOiAnZ3JlZW4uNTAwJywgcDogMCwgbTogMCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBjb2xvcjogJ2dyYXkuNTAwJyB9LCBcIlNpZ24gT3V0XCIpKSkpKSkpKSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUb3BOYXZpZ2F0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbi8vIGltcG9ydCBGbGFzaE1lc3NhZ2VzIGZyb20gJy4uLy4uL0NvbXBvbmVudHMvRmxhc2hNZXNzYWdlJ1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgcmVhY3RfMiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgRm9vdGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW5jL0Zvb3RlclwiKSk7XHJcbnZhciBTaWRlTWVudV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2luYy9TaWRlTWVudVwiKSk7XHJcbnZhciBUb3BOYXZpZ2F0aW9uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW5jL1RvcE5hdmlnYXRpb25cIikpO1xyXG52YXIgaW5lcnRpYV9yZWFjdF8xID0gcmVxdWlyZShcIkBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFwiKTtcclxuZnVuY3Rpb24gR3Vlc3RMYXlvdXQoX2EpIHtcclxuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xyXG4gICAgdmFyIHN1Y2Nlc3NNc2cgPSAoMCwgaW5lcnRpYV9yZWFjdF8xLnVzZVBhZ2UpKCkucHJvcHMuc3VjY2Vzc01zZztcclxuICAgIGNvbnNvbGUubG9nKCdVbmhhbmRhbGxlZCBTdWNjZXNzIE1Fc3NhZ2U6ICcsIHN1Y2Nlc3NNc2cpO1xyXG4gICAgdmFyIGlzTW9iaWxlID0gKDAsIHJlYWN0XzEudXNlTWVkaWFRdWVyeSkoJyhtYXgtd2lkdGg6MTAwMHB4KScpWzBdO1xyXG4gICAgdmFyIF9iID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKGlzTW9iaWxlID8gdHJ1ZSA6IGZhbHNlKSwgY29sbGFwc2VkID0gX2JbMF0sIHNldENvbGxhcHNlZCA9IF9iWzFdO1xyXG4gICAgdmFyIHRvZ2dsZUNvbGxhcHNlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5OiAnc3BhY2UtYmV0d2VlbicgfSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFRvcE5hdmlnYXRpb25fMVtcImRlZmF1bHRcIl0sIHsgdG9nZ2xlQ29sbGFwc2VkOiB0b2dnbGVDb2xsYXBzZWQsIGNvbGxhcHNlZDogY29sbGFwc2VkIH0pLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IGNvbG9yOiAncHVycGxlLjUwJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IGFzOiAnYXNpZGUnLCB6SW5kZXg6IDk5OTksIHB4OiAwLCB3aWR0aDogY29sbGFwc2VkID8gJzgwcHgnIDogJzIxMHB4JywgcHQ6ICc3NHB4JywgaDogJzEwMHZoJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHN0eWxlOiB7IHBvc2l0aW9uOiAnZml4ZWQnLCBoZWlnaHQ6ICcxMDB2aCcsIHpJbmRleDogOTk5LCBvdmVyZmxvd1k6ICdhdXRvJyB9LCBiZzogJ3B1cnBsZS41MCcgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFNpZGVNZW51XzFbXCJkZWZhdWx0XCJdLCB7IGNvbGxhcHNlZDogY29sbGFwc2VkIH0pKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgY29sb3I6ICdncmF5LjgwMCcsIHc6IGlzTW9iaWxlID8gJzgwJScgOiAnMTAwJScsIG1pbkg6ICcxMDB2aCcsIGJnOiBpc01vYmlsZSA/ICd3aGl0ZScgOiAncHVycGxlLjUwJywgZHJvcFNoYWRvdzogJ21kJyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBweDogaXNNb2JpbGUgPyA1IDogMTAsIHB5OiAnOTBweCcsIG1pbkg6ICcxMDB2aCcgfSwgY2hpbGRyZW4pLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGb290ZXJfMVtcImRlZmF1bHRcIl0sIG51bGwpKSkpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEd1ZXN0TGF5b3V0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHB0OiA1LCBwYjogNSwgdzogJ2Z1bGwnIH0sXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkNvbnRhaW5lciwgeyBtYXhXOiAnY29udGFpbmVyLnhsJyB9KSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRm9vdGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIGFudGRfMSA9IHJlcXVpcmUoXCJhbnRkXCIpO1xyXG52YXIgaW5lcnRpYV9yZWFjdF8xID0gcmVxdWlyZShcIkBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFwiKTtcclxudmFyIGJpXzEgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYmlcIik7XHJcbnZhciByZWFjdF8yID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciBic18xID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JzXCIpO1xyXG52YXIgZmFfMSA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTtcclxuLy8gY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5mdW5jdGlvbiBTaWRlTWVudShfYSkge1xyXG4gICAgLy8gY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdmFyIGNvbGxhcHNlZCA9IF9hLmNvbGxhcHNlZDtcclxuICAgIC8vIGNvbnN0IHRvZ2dsZUNvbGxhcHNlZCA9ICgpID0+IHtcclxuICAgIC8vICAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZCk7XHJcbiAgICAvLyAgIH07XHJcbiAgICByZXR1cm4gKHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5Cb3gsIHsgc2hhZG93OiAneGwnLCBiYWNrZ3JvdW5kOiAncHVycGxlLjUwJyB9LFxyXG4gICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoYW50ZF8xLk1lbnUsIHsgbW9kZTogXCJpbmxpbmVcIiwgdGhlbWU6IFwiZGFya1wiLCBpbmxpbmVDb2xsYXBzZWQ6IGNvbGxhcHNlZCwgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDE4MC40OGRlZyxyZ2JhKDExNSw3MCwyMTUsMSkgLTI2LjE1JSxyZ2JhKDU3LDM1LDgxLDEpIDE4OS44NCUpJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChhbnRkXzEuTWVudS5JdGVtLCB7IGtleTogXCIxXCIsIGljb246IHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoYmlfMS5CaUhvbWVBbHQsIG51bGwpIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGluZXJ0aWFfcmVhY3RfMS5MaW5rLCB7IGhyZWY6ICcvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICFjb2xsYXBzZWQgJiYgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8yLkJveCwgeyB3aWR0aDogJzEyMHB4JyB9KSxcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbWVcIikpLFxyXG4gICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGFudGRfMS5NZW51Lkl0ZW0sIHsga2V5OiBcIjJcIiwgaWNvbjogcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChic18xLkJzQ2FydENoZWNrLCBudWxsKSwgc3R5bGU6IHsgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnIH0gfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogJy9wcm9kdWN0cycsIHN0eWxlOiB7IHdpZHRoOiAnMTAwJSAhaW1wb3J0YW50JyB9IH0sIFwiUHJvZHVjdHNcIikpLFxyXG4gICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGFudGRfMS5NZW51Lkl0ZW0sIHsga2V5OiBcIjNcIiwgaWNvbjogcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChmYV8xLkZhQmxvZywgbnVsbCkgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogJy9ibG9nJyB9LCBcIkJsb2dcIikpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2lkZU1lbnU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgaW5lcnRpYV9yZWFjdF8xID0gcmVxdWlyZShcIkBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxuLy8gaW1wb3J0IHsgQmlDb2csIEJpTG9ja09wZW4sIEJpUG93ZXJPZmYgfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcclxudmFyIE1haW5Mb2dvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL0NvbXBvbmVudHMvTWFpbkxvZ29cIikpO1xyXG52YXIgYnNfMSA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTtcclxuZnVuY3Rpb24gVG9wTmF2aWdhdGlvbihfYSkge1xyXG4gICAgLy8gY29uc3QgeyBhdXRoVXNlciB9OiBhbnkgPSB1c2VQYWdlKCkucHJvcHNcclxuICAgIHZhciB0b2dnbGVDb2xsYXBzZWQgPSBfYS50b2dnbGVDb2xsYXBzZWQsIGNvbGxhcHNlZCA9IF9hLmNvbGxhcHNlZDtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBweTogMywgdzogJ2Z1bGwnLCBiZzogJyMzNTM1MzUnLCBwb3NpdGlvbjogJ2ZpeGVkJywgekluZGV4OiA5OTk5OTkgfSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQ29udGFpbmVyLCB7IG1heFc6ICdjb250YWluZXIuMnhsJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBqdXN0aWZ5OiAnc3BhY2UtYmV0d2VlbicgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IU3RhY2ssIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb24sIHsgY29sb3I6ICd3aGl0ZScsIGN1cnNvcjogJ3BvaW50ZXInLCBtcjogNSwgb25DbGljazogdG9nZ2xlQ29sbGFwc2VkLCBhczogY29sbGFwc2VkID8gYnNfMS5Cc1RleHRMZWZ0IDogYnNfMS5Cc1RleHRDZW50ZXIsIHc6IDgsIGg6IDggfSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiAnLycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChNYWluTG9nb18xW1wiZGVmYXVsdFwiXSwgbnVsbCkpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IU3RhY2ssIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgcHk6IDIsIHB4OiAzLCBnYXA6IDMsIGNvbG9yOiAnd2hpdGVBbHBoYS44MDAnLCByb3VuZGVkOiAnNXB4JywgY3Vyc29yOiAncG9pbnRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLk1lbnUsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGluZXJ0aWFfcmVhY3RfMS5MaW5rLCB7IGhyZWY6ICcvYXV0aC9sb2dpbicgfSwgXCJMb2dpblwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogJy9hdXRoL2pvaW5fbm93JyB9LCBcIlNpZ24gdXBcIikpKSkpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVG9wTmF2aWdhdGlvbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgaW5lcnRpYV9yZWFjdF8xID0gcmVxdWlyZShcIkBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIEZsYXNoTWVzc2FnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL0ZsYXNoTWVzc2FnZVwiKSk7XHJcbnZhciBGb290ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9pbmMvRm9vdGVyXCIpKTtcclxudmFyIFNpZGVNZW51XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vaW5jL1NpZGVNZW51XCIpKTtcclxudmFyIFRvcE5hdmlnYXRpb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9pbmMvVG9wTmF2aWdhdGlvblwiKSk7XHJcbmZ1bmN0aW9uIFVzZXJMYXlvdXQoX2EpIHtcclxuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuO1xyXG4gICAgdmFyIHN1Y2Nlc3NNc2cgPSAoMCwgaW5lcnRpYV9yZWFjdF8xLnVzZVBhZ2UpKCkucHJvcHMuc3VjY2Vzc01zZztcclxuICAgIHZhciBpc01vYmlsZSA9ICgwLCByZWFjdF8xLnVzZU1lZGlhUXVlcnkpKCcobWF4LXdpZHRoOjEwMDBweCknKVswXTtcclxuICAgIHZhciBfYiA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKShpc01vYmlsZSA/IHRydWUgOiBmYWxzZSksIGNvbGxhcHNlZCA9IF9iWzBdLCBzZXRDb2xsYXBzZWQgPSBfYlsxXTtcclxuICAgIHZhciB0b2dnbGVDb2xsYXBzZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgZGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeTogJ3NwYWNlLWJldHdlZW4nIH0sXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChUb3BOYXZpZ2F0aW9uXzFbXCJkZWZhdWx0XCJdLCB7IHRvZ2dsZUNvbGxhcHNlZDogdG9nZ2xlQ29sbGFwc2VkLCBjb2xsYXBzZWQ6IGNvbGxhcHNlZCB9KSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBjb2xvcjogJ3doaXRlJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IGFzOiAnYXNpZGUnLCB6SW5kZXg6IDk5OTksIHB4OiAwLCB3aWR0aDogY29sbGFwc2VkID8gJzgwcHgnIDogJzIxMHB4JywgcHQ6ICc3MnB4JywgaDogJzEwMHZoJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHN0eWxlOiB7IHBvc2l0aW9uOiAnZml4ZWQnLCBoZWlnaHQ6ICcxMDB2aCcsIHpJbmRleDogOTk5LCBvdmVyZmxvd1k6ICdhdXRvJyB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChTaWRlTWVudV8xW1wiZGVmYXVsdFwiXSwgeyBjb2xsYXBzZWQ6IGNvbGxhcHNlZCB9KSkpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IGNvbG9yOiAnZ3JheS44MDAnLCB3OiBpc01vYmlsZSA/ICc4MCUnIDogJzEwMCUnLCBtaW5IOiAnMTAwdmgnLCBiZzogaXNNb2JpbGUgPyAnd2hpdGUnIDogJ3B1cnBsZS41MCcsIGRyb3BTaGFkb3c6ICdtZCcgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHg6IGlzTW9iaWxlID8gNSA6IDEwLCBweTogJzkwcHgnLCBtaW5IOiAnMTAwdmgnIH0sIGNoaWxkcmVuKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoRm9vdGVyXzFbXCJkZWZhdWx0XCJdLCBudWxsKSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NNc2cgJiYgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChGbGFzaE1lc3NhZ2VfMVtcImRlZmF1bHRcIl0sIHsgZmxhc2g6IHN1Y2Nlc3NNc2csIHR5cGU6ICdzdWNjZXNzJyB9KSkpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFVzZXJMYXlvdXQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG5mdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgICByZXR1cm4gKHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMVtcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEZvb3RlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBhbnRkXzEgPSByZXF1aXJlKFwiYW50ZFwiKTtcclxuLy8gaW1wb3J0IHsgQXBwc3RvcmVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxudmFyIGluZXJ0aWFfcmVhY3RfMSA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcIik7XHJcbnZhciBhaV8xID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpO1xyXG52YXIgaW1fMSA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pbVwiKTtcclxudmFyIGJpXzEgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYmlcIik7XHJcbnZhciByZWFjdF8yID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciBic18xID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JzXCIpO1xyXG52YXIgZmFfMSA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTtcclxuLy8gY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5mdW5jdGlvbiBTaWRlTWVudShfYSkge1xyXG4gICAgdmFyIGNvbGxhcHNlZCA9IF9hLmNvbGxhcHNlZDtcclxuICAgIHZhciBhdXRoVXNlciA9ICgwLCBpbmVydGlhX3JlYWN0XzEudXNlUGFnZSkoKS5wcm9wcy5hdXRoVXNlcjtcclxuICAgIC8vIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vIGNvbnN0IHRvZ2dsZUNvbGxhcHNlZCA9ICgpID0+IHtcclxuICAgIC8vICAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZCk7XHJcbiAgICAvLyAgIH07XHJcbiAgICByZXR1cm4gKHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5Cb3gsIHsgc2hhZG93OiAneGwnIH0sXHJcbiAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChhbnRkXzEuTWVudVxyXG4gICAgICAgIC8vIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snMSddfVxyXG4gICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJ119XHJcbiAgICAgICAgLCB7IFxyXG4gICAgICAgICAgICAvLyBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX1cclxuICAgICAgICAgICAgLy8gZGVmYXVsdE9wZW5LZXlzPXtbJ3N1YjEnXX1cclxuICAgICAgICAgICAgbW9kZTogXCJpbmxpbmVcIiwgdGhlbWU6IFwiZGFya1wiLCBpbmxpbmVDb2xsYXBzZWQ6IGNvbGxhcHNlZCwgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTgwLjQ4ZGVnLHJnYmEoMTE1LDcwLDIxNSwxKSAtMjYuMTUlLHJnYmEoNTcsMzUsODEsMSkgMTg5Ljg0JSknXHJcbiAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgYXV0aFVzZXIgJiYgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xW1wiZGVmYXVsdFwiXS5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoYW50ZF8xLk1lbnUuSXRlbSwgeyBrZXk6IFwiMVwiLCBpY29uOiByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGFpXzEuQWlPdXRsaW5lRGFzaGJvYXJkLCBudWxsKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogJy91c2VyL2Rhc2hib2FyZCcgfSwgXCJEYXNoYm9hcmRcIikpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChhbnRkXzEuTWVudS5JdGVtLCB7IGtleTogXCIyXCIsIGljb246IHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW1fMS5JbVRyZWUsIG51bGwpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiAnL3VzZXIvbXlfZ2VuZW9sb2d5JyB9LCBcIk15IEdlbmVvbG9neVwiKSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGFudGRfMS5NZW51Lkl0ZW0sIHsga2V5OiBcIjNcIiwgaWNvbjogcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChiaV8xLkJpU3RhdHMsIG51bGwpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiAnL3VzZXIvbXlfc3RhdGlzdGljcycgfSwgXCJTdGF0aXN0aWNzIE92ZXJ2aWV3XCIpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoYW50ZF8xLk1lbnUuSXRlbSwgeyBrZXk6IFwiNFwiLCBpY29uOiByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGJpXzEuQmlOZXR3b3JrQ2hhcnQsIG51bGwpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiAnL3VzZXIvbXlfbmV0d29yaycgfSwgXCJNeSBOZXR3b3JrXCIpKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoYW50ZF8xLk1lbnUuSXRlbSwgeyBrZXk6IFwiNVwiLCBpY29uOiByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGJzXzEuQnNDYXJ0Q2hlY2ssIG51bGwpLCBzdHlsZTogeyB3aWR0aDogJzEwMCUgIWltcG9ydGFudCcgfSB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiAnL3Byb2R1Y3RzJywgc3R5bGU6IHsgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnIH0gfSwgXCJQcm9kdWN0c1wiKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoYW50ZF8xLk1lbnUuSXRlbSwgeyBrZXk6IFwiNlwiLCBpY29uOiByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGZhXzEuRmFCbG9nLCBudWxsKSB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiAnL2Jsb2cnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgIWNvbGxhcHNlZCAmJiByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzIuQm94LCB7IHdpZHRoOiAnMTIwcHgnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmxvZ1wiKSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTaWRlTWVudTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIGluZXJ0aWFfcmVhY3RfMSA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBiaV8xID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JpXCIpO1xyXG52YXIgTWFpbkxvZ29fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vQ29tcG9uZW50cy9NYWluTG9nb1wiKSk7XHJcbnZhciBic18xID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JzXCIpO1xyXG52YXIgcmVhY3RfbW9yYWxpc18xID0gcmVxdWlyZShcInJlYWN0LW1vcmFsaXNcIik7XHJcbnZhciBtb3JhbGlzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vcmFsaXNcIikpO1xyXG4vLyBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xyXG5mdW5jdGlvbiBUb3BOYXZpZ2F0aW9uKF9hKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgdmFyIHRvZ2dsZUNvbGxhcHNlZCA9IF9hLnRvZ2dsZUNvbGxhcHNlZCwgY29sbGFwc2VkID0gX2EuY29sbGFwc2VkO1xyXG4gICAgdmFyIGF1dGhVc2VyID0gKDAsIGluZXJ0aWFfcmVhY3RfMS51c2VQYWdlKSgpLnByb3BzLmF1dGhVc2VyO1xyXG4gICAgdmFyIF9iID0gKDAsIHJlYWN0X21vcmFsaXNfMS51c2VNb3JhbGlzKSgpLCBhdXRoZW50aWNhdGUgPSBfYi5hdXRoZW50aWNhdGUsIGlzQXV0aGVudGljYXRlZCA9IF9iLmlzQXV0aGVudGljYXRlZCwgdXNlciA9IF9iLnVzZXI7XHJcbiAgICB2YXIgY29ubmVjdE1ldGFNYXNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIWlzQXV0aGVudGljYXRlZCkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXV0aGVudGljYXRlKHsgcHJvdmlkZXI6IFwibWV0YW1hc2tcIiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIuZ2V0KFwiZXRoQWRkcmVzc1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgdmFyIGRpc3NDb25uZWN0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgbW9yYWxpc18xW1wiZGVmYXVsdFwiXS5Vc2VyLmxvZ091dCgpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEluZXJ0aWEuZ2V0KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgKDAsIHJlYWN0XzIudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGggVXNlciBtZXRhbWFzazogJywgdXNlcik7XHJcbiAgICB9LCBbdXNlcl0pO1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHB5OiAzLCB3OiAnZnVsbCcsIGJnOiAnIzM1MzUzNScsIGNvbG9yOiAnd2hpdGVBbHBoYS44MDAnLCBwb3NpdGlvbjogJ2ZpeGVkJywgekluZGV4OiA5OTk5OTkgfSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQ29udGFpbmVyLCB7IG1heFc6ICdjb250YWluZXIuMnhsJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBqdXN0aWZ5OiAnc3BhY2UtYmV0d2VlbicgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IU3RhY2ssIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb24sIHsgY29sb3I6ICd3aGl0ZScsIGN1cnNvcjogJ3BvaW50ZXInLCBtcjogNSwgb25DbGljazogdG9nZ2xlQ29sbGFwc2VkLCBhczogY29sbGFwc2VkID8gYnNfMS5Cc1RleHRMZWZ0IDogYnNfMS5Cc1RleHRDZW50ZXIsIHc6IDgsIGg6IDggfSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiAnLycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChNYWluTG9nb18xW1wiZGVmYXVsdFwiXSwgbnVsbCkpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IU3RhY2ssIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLk1lbnUsIG51bGwsICFpc0F1dGhlbnRpY2F0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuTWVudUJ1dHRvbiwgeyBvbkNsaWNrOiBjb25uZWN0TWV0YU1hc2ssIGFzOiAnYnV0dG9uJywgY29sb3I6ICd3aGl0ZScsIGJnOiAnYmx1ZS45MDAnLCBnYXA6IDIgfSwgXCJDb25uZWN0IE1ldGFtYXNrXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLk1lbnVCdXR0b24sIHsgb25DbGljazogZGlzc0Nvbm5lY3QsIGFzOiAnYnV0dG9uJywgY29sb3I6ICd3aGl0ZScsIGdhcDogMiB9LCBcIkRpc2Nvbm5lY3QgTWV0YW1hc2tcIikpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IU3RhY2ssIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aFVzZXIgJiYgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLk1lbnUsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5NZW51QnV0dG9uLCB7IGFzOiAnYScsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkF2YXRhciwgeyBzaXplOiAneHMnLCBtcjogMiwgbmFtZTogXCJcIi5jb25jYXQoYXV0aFVzZXIgPT09IG51bGwgfHwgYXV0aFVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGF1dGhVc2VyLmZpcnN0X25hbWUsIFwiIFwiKS5jb25jYXQoYXV0aFVzZXIgPT09IG51bGwgfHwgYXV0aFVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGF1dGhVc2VyLmxhc3RfbmFtZSksIHNyYzogJ2h0dHBzOi8vYml0Lmx5L3NhZ2UtYWRlYmF5bycgfSksIGF1dGhVc2VyID09PSBudWxsIHx8IGF1dGhVc2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aFVzZXIuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiLCBhdXRoVXNlciA9PT0gbnVsbCB8fCBhdXRoVXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhVc2VyLmxhc3RfbmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5NZW51TGlzdCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5NZW51SXRlbSwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGluZXJ0aWFfcmVhY3RfMS5MaW5rLCB7IGhyZWY6ICcvdXNlci9wcm9maWxlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBhbGlnbjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb24sIHsgYXM6IGJpXzEuQmlDb2csIGNvbG9yOiAnZ3JlZW4uNTAwJywgcDogMCwgbTogMCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGNvbG9yOiAnZ3JheS41MDAnIH0sIFwiUHJvZmlsZVwiKSkpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5NZW51SXRlbSwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGluZXJ0aWFfcmVhY3RfMS5MaW5rLCB7IGhyZWY6ICcvJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBhbGlnbjogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb24sIHsgYXM6IGJpXzEuQmlMb2NrT3BlbiwgY29sb3I6ICdncmVlbi41MDAnLCBwOiAwLCBtOiAwIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgY29sb3I6ICdncmF5LjUwMCcgfSwgXCJDaGFuZ2UgUGFzc3dvcmRcIikpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuTWVudUl0ZW0sIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChpbmVydGlhX3JlYWN0XzEuTGluaywgeyBocmVmOiBcIi9sb2dvdXRcIiwgbWV0aG9kOiBcInBvc3RcIiwgYXM6IFwiZm9ybVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IGFsaWduOiAnY2VudGVyJywgZ2FwOiAyIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSWNvbiwgeyBhczogYmlfMS5CaVBvd2VyT2ZmLCBjb2xvcjogJ2dyZWVuLjUwMCcsIHA6IDAsIG06IDAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBjb2xvcjogJ2dyYXkuNTAwJyB9LCBcIlNpZ24gT3V0XCIpKSkpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgIWF1dGhVc2VyICYmIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMltcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogJy9hdXRoL2xvZ2luJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBweTogMiwgcHg6IDMsIGNvbG9yOiAnd2hpdGVBbHBoYS44MDAnLCBfaG92ZXI6IHsgYmc6ICdibGFja0FscGhhLjcwMCcgfSwgcm91bmRlZDogJzVweCcgfSwgXCJMb2dpblwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoaW5lcnRpYV9yZWFjdF8xLkxpbmssIHsgaHJlZjogJy9hdXRoL2pvaW5fbm93JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBweTogMiwgcHg6IDMsIGNvbG9yOiAnd2hpdGVBbHBoYS44MDAnLCBfaG92ZXI6IHsgYmc6ICdibGFja0FscGhhLjcwMCcgfSwgcm91bmRlZDogJzVweCcgfSwgXCJKb2luIE5vd1wiKSkpKSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBUb3BOYXZpZ2F0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIEd1ZXN0TGF5b3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0xheW91dHMvR3Vlc3RMYXlvdXQvR3Vlc3RMYXlvdXRcIikpO1xyXG5mdW5jdGlvbiBBYm91dFVzKCkge1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEd1ZXN0TGF5b3V0XzFbXCJkZWZhdWx0XCJdLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Db250YWluZXIsIHsgbWF4VzogJ2NvbnRhaW5lci54bCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBcIkFib3V0VXNcIikpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBYm91dFVzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIGluZXJ0aWFfcmVhY3RfMSA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBBY2NvdW50SW5mb0NhcmRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0NvbXBvbmVudHMvQWRtaW5QYW5lbC9EYXNoYm9hcmQvQWNjb3VudEluZm9DYXJkc1wiKSk7XHJcbi8vIGltcG9ydCBSZWZlcnJhbENsaXBib2FyZCBmcm9tICcuLi8uLi9Db21wb25lbnRzL0FkbWluUGFuZWwvRGFzaGJvYXJkL1JlZmVycmFsQ2xpcGJvYXJkJ1xyXG52YXIgVXNlcnNMaXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0NvbXBvbmVudHMvQWRtaW5QYW5lbC9EYXNoYm9hcmQvVXNlcnNMaXN0XCIpKTtcclxudmFyIEFkbWluTGF5b3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0xheW91dHMvQWRtaW5MYXlvdXQvQWRtaW5MYXlvdXRcIikpO1xyXG4vLyBpbXBvcnQgVXNlckxheW91dCBmcm9tICcuLi8uLi9MYXlvdXRzL0FkbWluTGF5b3V0L0FkbWluTGF5b3V0J1xyXG5mdW5jdGlvbiBEYXNoYm9hcmQoX2EpIHtcclxuICAgIHZhciB1c2VycyA9IF9hLnVzZXJzO1xyXG4gICAgdmFyIGF1dGhVc2VyID0gKDAsIGluZXJ0aWFfcmVhY3RfMS51c2VQYWdlKSgpLnByb3BzLmF1dGhVc2VyO1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFkbWluTGF5b3V0XzFbXCJkZWZhdWx0XCJdLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgdzogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IGFzOiAnaDQnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBmb250U2l6ZTogJzI4cHgnIH0sIFwiRGFzaGJvYXJkXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgIFwiSGVsbG8gXCIsIGF1dGhVc2VyID09PSBudWxsIHx8IGF1dGhVc2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOlxyXG4gICAgICAgICAgICAgICAgYXV0aFVzZXIuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgICAgIFwiISB3ZWxjb21lIHRvIHlvdXIgZGFzaGJvYXJkXCIpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHc6ICdmdWxsJywgbXQ6ICc1MHB4JyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFjY291bnRJbmZvQ2FyZHNfMVtcImRlZmF1bHRcIl0sIG51bGwpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHc6ICdmdWxsJywgbXQ6ICcyMHB4JywgYmc6ICd3aGl0ZScsIHJvdW5kZWQ6ICdtZCcsIHNoYWRvdzogJ2Jhc2UnLCBwdDogJzI1cHgnLCBwYjogJzIwcHgnLCBweDogJzE1cHgnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IG1iOiAyLCBmb250U2l6ZTogJzJ4bCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJSZWNlbnQgcmVnaXN0cmF0aW9uc1wiKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChVc2Vyc0xpc3RfMVtcImRlZmF1bHRcIl0sIHsgdXNlckxpc3Q6IHVzZXJzIH0pKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGFzaGJvYXJkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIEFkbWluTGF5b3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0xheW91dHMvQWRtaW5MYXlvdXQvQWRtaW5MYXlvdXRcIikpO1xyXG5mdW5jdGlvbiBNeUdlbmVvbG9neSgpIHtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChBZG1pbkxheW91dF8xW1wiZGVmYXVsdFwiXSwgbnVsbCxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCBudWxsLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSGVhZGluZywgeyBhczogJ2g0JywgZm9udFdlaWdodDogJ3NlbWlib2xkJywgZm9udFNpemU6ICcyOHB4JyB9LCBcIk15IEdlbmVvbG9neVwiKSksXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBtdDogJzIwMHB4JywgdzogJ2Z1bGwnLCBtaW5IOiAnMjAwcHgnLCBiZzogJ3doaXRlJywgcm91bmRlZDogJ2Jhc2UnLCBzaGFkb3c6ICdiYXNlJyB9KSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTXlHZW5lb2xvZ3k7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgcmVhY3RfMiA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgQWNjb3VudEluZm9DaGFydF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL0FkbWluUGFuZWwvRGFzaGJvYXJkL0FjY291bnRJbmZvQ2hhcnRcIikpO1xyXG52YXIgVXNlcnNMaXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0NvbXBvbmVudHMvQWRtaW5QYW5lbC9EYXNoYm9hcmQvVXNlcnNMaXN0XCIpKTtcclxudmFyIEFkbWluTGF5b3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0xheW91dHMvQWRtaW5MYXlvdXQvQWRtaW5MYXlvdXRcIikpO1xyXG4vLyBpbXBvcnQgVXNlckxheW91dCBmcm9tICcuLi8uLi9MYXlvdXRzL1VzZXJzTGF5b3V0L1VzZXJMYXlvdXQnXHJcbmZ1bmN0aW9uIE15U3RhdGlzdGljcyhfYSkge1xyXG4gICAgdmFyIHVzZXJzID0gX2EudXNlcnM7XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQWRtaW5MYXlvdXRfMVtcImRlZmF1bHRcIl0sIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyB3OiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkhlYWRpbmcsIHsgYXM6ICdoNCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIGZvbnRTaXplOiAnMjhweCcgfSwgXCJTdGF0aXN0aWNzIE92ZXJ2aWV3XCIpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IG10OiAnNTBweCcsIHc6ICdmdWxsJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFjY291bnRJbmZvQ2hhcnRfMVtcImRlZmF1bHRcIl0sIG51bGwpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHc6ICdmdWxsJywgbXQ6ICcyMHB4JywgYmc6ICd3aGl0ZScsIHJvdW5kZWQ6ICdtZCcsIHNoYWRvdzogJ2Jhc2UnLCBwdDogJzI1cHgnLCBwYjogJzIwcHgnLCBweDogJzE1cHgnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IG1iOiAyLCBmb250U2l6ZTogJzJ4bCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJSZWNlbnQgcmVnaXN0cmF0aW9uc1wiKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgbWI6IDUsIGNvbG9yOiAnZ3JheS41MDAnIH0sIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFRlbmV0dXIsIHN1c2NpcGl0IG5vYmlzISBQZXJmZXJlbmRpcy5cIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVXNlcnNMaXN0XzFbXCJkZWZhdWx0XCJdLCB7IHVzZXJMaXN0OiB1c2VycyB9KSkpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE15U3RhdGlzdGljcztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBBZG1pbkxheW91dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi8uLi9MYXlvdXRzL0FkbWluTGF5b3V0L0FkbWluTGF5b3V0XCIpKTtcclxudmFyIFBhY2thZ2VMaXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vLi4vLi4vLi4vQ29tcG9uZW50cy9BZG1pblBhbmVsL0Rhc2hib2FyZC9QYWNrYWdlTGlzdFwiKSk7XHJcbmZ1bmN0aW9uIEluZGV4KF9hKSB7XHJcbiAgICB2YXIgcGFja2FnZXMgPSBfYS5wYWNrYWdlcztcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChBZG1pbkxheW91dF8xW1wiZGVmYXVsdFwiXSwgbnVsbCxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCBudWxsLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSGVhZGluZywgeyBhczogJ2g0JywgZm9udFdlaWdodDogJ3NlbWlib2xkJywgZm9udFNpemU6ICcyOHB4JyB9LCBcIlBhY2thZ2VzXCIpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHc6ICdmdWxsJywgbXQ6ICczMHB4JywgYmc6ICd3aGl0ZScsIHJvdW5kZWQ6ICdtZCcsIHNoYWRvdzogJ2Jhc2UnLCBwdDogJzI1cHgnLCBwYjogJzIwcHgnLCBweDogJzE1cHgnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IG1iOiAyLCBmb250U2l6ZTogJzJ4bCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJBbGwgUGFja2FnZSBsaXN0XCIpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFBhY2thZ2VMaXN0XzFbXCJkZWZhdWx0XCJdLCB7IHBhY2thZ2VzOiBwYWNrYWdlcyB9KSkpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEluZGV4O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgQWRtaW5MYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vTGF5b3V0cy9BZG1pbkxheW91dC9BZG1pbkxheW91dFwiKSk7XHJcbnZhciByZWFjdF8yID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciBpbmVydGlhX3JlYWN0XzEgPSByZXF1aXJlKFwiQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0XCIpO1xyXG52YXIgcmVhY3RfMyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgaW5lcnRpYV8xID0gcmVxdWlyZShcIkBpbmVydGlhanMvaW5lcnRpYVwiKTtcclxuZnVuY3Rpb24gQ3JlYXRlKCkge1xyXG4gICAgdmFyIF9hID0gKDAsIGluZXJ0aWFfcmVhY3RfMS51c2VGb3JtKSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICcnXHJcbiAgICB9KSwgZGF0YSA9IF9hLmRhdGEsIHNldERhdGEgPSBfYS5zZXREYXRhLCBwcm9jZXNzaW5nID0gX2EucHJvY2Vzc2luZztcclxuICAgIHZhciBoYW5kbGVDcmVhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5lcnRpYV8xLkluZXJ0aWEucG9zdCgnL2FkbWluL3Byb2R1Y3Qvc3RvcmUnLCBkYXRhKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQWRtaW5MYXlvdXRfMVtcImRlZmF1bHRcIl0sIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8yLkJveCwgbnVsbCxcclxuICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8yLkhlYWRpbmcsIHsgYXM6ICdoNCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIGZvbnRTaXplOiAnMjhweCcgfSwgXCJDcmVhdGUgUHJvZHVjdFwiKSksXHJcbiAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8yLkJveCwgeyB3OiAnZnVsbCcsIG10OiAnMzBweCcsIGJnOiAnd2hpdGUnLCByb3VuZGVkOiAnbWQnLCBzaGFkb3c6ICdiYXNlJywgcHQ6ICcyNXB4JywgcGI6ICcyMHB4JywgcHg6ICcxNXB4JyB9LFxyXG4gICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzIuSGVhZGluZywgeyBtYjogMiwgZm9udFNpemU6ICcyeGwnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiQ3JlYXRlIFByb2R1Y3RcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5Cb3gsIHsgcHk6IDUgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5TaW1wbGVHcmlkLCB7IGNvbHVtbnM6IHsgYmFzZTogMSwgbWQ6IDIgfSwgc3BhY2luZzogNSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMy5Gb3JtQ29udHJvbCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8zLkZvcm1MYWJlbCwgeyBodG1sRm9yOiAncHJvZHVjdF9uYW1lJyB9LCBcIlByb2R1Y3QgTmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8yLklucHV0LCB7IG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RGF0YShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGF0YSksIHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSkpOyB9LCB2YWx1ZTogZGF0YS5uYW1lLCBpZDogJ3Byb2R1Y3RfbmFtZScsIHR5cGU6ICd0ZXh0JywgcGxhY2Vob2xkZXI6ICdFbnRlciBwcm9kdWN0IG5hbWUnIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzMuRm9ybUNvbnRyb2wsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMy5Gb3JtTGFiZWwsIHsgaHRtbEZvcjogJ3Byb2R1Y3RfcHJpY2UnIH0sIFwiUHJvZHVjdCBQcmljZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8yLklucHV0LCB7IG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RGF0YShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGF0YSksIHsgcHJpY2U6IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSwgdmFsdWU6IGRhdGEucHJpY2UsIGlkOiAncHJvZHVjdF9wcmljZScsIHR5cGU6ICdudW1iZXInLCBwbGFjZWhvbGRlcjogJ0VudGVyIHByb2R1Y3QgcHJpY2UnIH0pKSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzMuRm9ybUNvbnRyb2wsIHsgbXQ6IDUgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzMuRm9ybUxhYmVsLCB7IGh0bWxGb3I6ICdwcm9kdWN0X25hbWUnIH0sIFwiUHJvZHVjdCBDb250ZW50XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5JbnB1dCwgeyBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldERhdGEoX19hc3NpZ24oX19hc3NpZ24oe30sIGRhdGEpLCB7IGNvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSwgdmFsdWU6IGRhdGEuY29udGVudCwgYXM6ICd0ZXh0YXJlYScsIG1pbkg6IDMwMCwgcGxhY2Vob2xkZXI6ICdFbnRlciBwcm9kdWN0IGRlc2NyaXB0aW9uJyB9KSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzIuQnV0dG9uLCB7IG9uQ2xpY2s6IGhhbmRsZUNyZWF0ZSwgY29sb3JTY2hlbWU6ICdncmVlbicsIG10OiA1IH0sIFwiQ3JlYXRlIFByb2R1Y3RcIikpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ3JlYXRlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIEFkbWluTGF5b3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL0xheW91dHMvQWRtaW5MYXlvdXQvQWRtaW5MYXlvdXRcIikpO1xyXG52YXIgcmVhY3RfMiA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgUHJvZHVjdExpc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vLi4vQ29tcG9uZW50cy9BZG1pblBhbmVsL0Rhc2hib2FyZC9Qcm9kdWN0TGlzdFwiKSk7XHJcbmZ1bmN0aW9uIExpc3QoX2EpIHtcclxuICAgIHZhciBwcm9kdWN0cyA9IF9hLnByb2R1Y3RzO1xyXG4gICAgcmV0dXJuIChyZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFkbWluTGF5b3V0XzFbXCJkZWZhdWx0XCJdLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5Cb3gsIG51bGwsXHJcbiAgICAgICAgICAgIHJlYWN0XzFbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMi5IZWFkaW5nLCB7IGFzOiAnaDQnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBmb250U2l6ZTogJzI4cHgnIH0sIFwiUHJvZHVjdCBMaXN0XCIpKSxcclxuICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFByb2R1Y3RMaXN0XzFbXCJkZWZhdWx0XCJdLCB7IHByb2R1Y3RzOiBwcm9kdWN0cyB9KSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTGlzdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgbW9tZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbWVudFwiKSk7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciByZWFjdF9mdWxsX3NjcmVlbl8xID0gcmVxdWlyZShcInJlYWN0LWZ1bGwtc2NyZWVuXCIpO1xyXG52YXIgR2VuZW9sb2d5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0NvbXBvbmVudHMvVXNlclBhbmVsL0dlbmVvbG9neS9HZW5lb2xvZ3lcIikpO1xyXG52YXIgQWRtaW5MYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTGF5b3V0cy9BZG1pbkxheW91dC9BZG1pbkxheW91dFwiKSk7XHJcbnZhciB1c2VfcmVhY3Rfc2NyZWVuc2hvdF8xID0gcmVxdWlyZShcInVzZS1yZWFjdC1zY3JlZW5zaG90XCIpO1xyXG52YXIgdXNlX3JlYWN0X3NjcmVlbnNob3RfMiA9IHJlcXVpcmUoXCJ1c2UtcmVhY3Qtc2NyZWVuc2hvdFwiKTtcclxudmFyIGFpXzEgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7XHJcbnZhciBpbmVydGlhXzEgPSByZXF1aXJlKFwiQGluZXJ0aWFqcy9pbmVydGlhXCIpO1xyXG5mdW5jdGlvbiBVc2VyKF9hKSB7XHJcbiAgICB2YXIgX2IsIF9jO1xyXG4gICAgdmFyIGRhdGFTb3VyY2UgPSBfYS5kYXRhU291cmNlLCBsZXZlbHMgPSBfYS5sZXZlbHMsIHVzZXIgPSBfYS51c2VyLCB0b3RhbFJlZmVyZW5jZXMgPSBfYS50b3RhbFJlZmVyZW5jZXMsIHBhY2thZ2VzID0gX2EucGFja2FnZXM7XHJcbiAgICB2YXIgX2QgPSAoMCwgcmVhY3RfMS51c2VEaXNjbG9zdXJlKSgpLCBpc09wZW4gPSBfZC5pc09wZW4sIG9uT3BlbiA9IF9kLm9uT3Blbiwgb25DbG9zZSA9IF9kLm9uQ2xvc2U7XHJcbiAgICAvLyBjb25zdCB7dXNlcklkfSA9IHVzZVBhZ2UoKS5wcm9wc1xyXG4gICAgdmFyIHNjcmVlbiA9ICgwLCByZWFjdF9mdWxsX3NjcmVlbl8xLnVzZUZ1bGxTY3JlZW5IYW5kbGUpKCk7XHJcbiAgICB2YXIgX2UgPSAoMCwgcmVhY3RfMi51c2VTdGF0ZSkoJycpLCBzZWxlY3RlZFJhbmsgPSBfZVswXSwgc2V0U2VsZWN0ZWRSYW5rID0gX2VbMV07XHJcbiAgICB2YXIgcmVmID0gKDAsIHJlYWN0XzIuY3JlYXRlUmVmKSgpO1xyXG4gICAgdmFyIF9mID0gKDAsIHVzZV9yZWFjdF9zY3JlZW5zaG90XzEudXNlU2NyZWVuc2hvdCkoe1xyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvanBlZ1wiLFxyXG4gICAgICAgIHF1YWxpdHk6IDEuMFxyXG4gICAgfSksIHRha2VTY3JlZW5TaG90ID0gX2ZbMV07XHJcbiAgICB2YXIgZG93bmxvYWQgPSBmdW5jdGlvbiAoaW1hZ2UsIF9hKSB7XHJcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIF9jID0gX2IubmFtZSwgbmFtZSA9IF9jID09PSB2b2lkIDAgPyBcImdlbmVvbG9neVwiIDogX2MsIF9kID0gX2IuZXh0ZW5zaW9uLCBleHRlbnNpb24gPSBfZCA9PT0gdm9pZCAwID8gXCJqcGdcIiA6IF9kO1xyXG4gICAgICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgYS5ocmVmID0gaW1hZ2U7XHJcbiAgICAgICAgYS5kb3dubG9hZCA9ICgwLCB1c2VfcmVhY3Rfc2NyZWVuc2hvdF8yLmNyZWF0ZUZpbGVOYW1lKShleHRlbnNpb24sIG5hbWUpO1xyXG4gICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgdmFyIGRvd25sb2FkU2NyZWVuc2hvdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRha2VTY3JlZW5TaG90KHJlZi5jdXJyZW50KS50aGVuKGRvd25sb2FkKTsgfTtcclxuICAgICgwLCByZWFjdF8yLnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhU291cmNlOiAnLCBzY3JlZW4pO1xyXG4gICAgfSwgW3NjcmVlbl0pO1xyXG4gICAgdmFyIF9nID0gKDAsIHJlYWN0XzIudXNlU3RhdGUpKGZhbHNlKSwgZW5hYmxlWm9vbSA9IF9nWzBdLCBzZXRFbmFibGVab29tID0gX2dbMV07XHJcbiAgICB2YXIgaGFuZGxlQ2huYWdlUmFuayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRSYW5rID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIHJhbmsgdG8gbWFrZSB0aGUgY2hhbmdlIScpO1xyXG4gICAgICAgIGluZXJ0aWFfMS5JbmVydGlhLnBvc3QoJy9hZG1pbi91c2VyL2NoYW5nZS1yYW5rJywgeyBzZWxlY3RlZFJhbms6IHNlbGVjdGVkUmFuaywgdXNlcklkOiB1c2VyLmlkIH0pO1xyXG4gICAgICAgIG9uQ2xvc2UoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQWRtaW5MYXlvdXRfMVtcImRlZmF1bHRcIl0sIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgbnVsbCxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkhlYWRpbmcsIHsgYXM6ICdoNCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIGZvbnRTaXplOiAnMjhweCcgfSwgXCJVc2VyIFByb2ZpbGVcIikpLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IGNvbG9yOiAnZ3JheS43MDAnLCBnYXA6IDMsIG10OiAxMCB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBoZWlnaHQ6ICcyNTBweCcsIGZsZXg6ICcxJywganVzdGlmeTogJ2NlbnRlcicsIGRpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwOiA1LCBiZzogJ3doaXRlJyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkF2YXRhciwgeyBzaXplOiAnMnhsJywgbWI6IDIsIG5hbWU6IFwiXCIuY29uY2F0KHVzZXIuZmlyc3RfbmFtZSwgXCIgXCIpLmNvbmNhdCh1c2VyLmxhc3RfbmFtZSksIHNyYzogJycgfSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBhczogJ2gyJywgZm9udFNpemU6ICcyeGwnIH0sIFwiXCIuY29uY2F0KHVzZXIuZmlyc3RfbmFtZSwgXCIgXCIpLmNvbmNhdCh1c2VyLmxhc3RfbmFtZSkpKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBmbGV4OiAnMicsIHB5OiAzLCBweDogNSwgYmc6ICd3aGl0ZScgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGFzOiAnaDInLCBmb250U2l6ZTogJ3hsJywgZm9udFdlaWdodDogJ2JvbGQnIH0sIFwiUHJvZmlsZSBJbmZvXCIpLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyB3OiAnMTAwJScsIG10OiA0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBwOiAyLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiSm9pbiBEYXRhXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCwgKDAsIG1vbWVudF8xW1wiZGVmYXVsdFwiXSkodXNlci5jcmVhdGVkQXQpLmZvcm1hdCgnbCcpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBwOiAyLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiTmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIG51bGwsIFwiXCIuY29uY2F0KHVzZXIuZmlyc3RfbmFtZSwgXCIgXCIpLmNvbmNhdCh1c2VyLmxhc3RfbmFtZSkpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyB3OiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduOiAnY2VudGVyJywgcDogMiwgYm9yZGVyQm90dG9tOiAnMHB4IHNvbGlkICMyZDM3NDgxNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9LCBcIkVtYWlsXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCwgdXNlci5lbWFpbCkpKSksXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgZmxleDogJzInLCBweTogMywgcHg6IDUsIGJnOiAnd2hpdGUnIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBhczogJ2gyJywgZm9udFNpemU6ICd4bCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9LCBcIkFjY291bnRcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHc6ICcxMDAlJywgbXQ6IDQgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyB3OiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHA6IDIsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMmQzNzQ4MTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJUb3RhbCByZWZlcmVuY2VzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsUmVmZXJlbmNlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG1lbWJlcnNcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IHc6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ246ICdjZW50ZXInLCBwOiAyLCBib3JkZXJCb3R0b206ICcwcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiUmFua1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJhZGdlLCB7IGNvbG9yU2NoZW1lOiAncHVycGxlJywgdmFyaWFudDogJ3NvbGlkJyB9LCB1c2VyLnBhY2thZ2UucGFja2FnZSkpKSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgdzogJzEwMCUnLCBtdDogNCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IHc6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQnV0dG9uLCB7IG9uQ2xpY2s6IG9uT3BlbiwgY29sb3JTY2hlbWU6ICd0ZWFsJywgdmFyaWFudDogJ3NvbGlkJyB9LCBcIkNoYW5nZSBSYW5rXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuTW9kYWwsIHsgaXNPcGVuOiBpc09wZW4sIG9uQ2xvc2U6IG9uQ2xvc2UgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Nb2RhbE92ZXJsYXksIG51bGwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLk1vZGFsQ29udGVudCwgeyBtdDogMTAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLk1vZGFsSGVhZGVyLCBudWxsLCBcIkNoYW5nZSBSYW5rXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Nb2RhbENsb3NlQnV0dG9uLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuTW9kYWxCb2R5LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldoZW4gdGhlIG1vZGFsIG9wZW5zLCBmb2N1cyBpcyBzZW50IGludG8gdGhlIG1vZGFsIGFuZCBzZXQgdG8gdGhlIGZpcnN0IHRhYmJhYmxlIGVsZW1lbnQuIElmIHRoZXJlIGFyZSBubyB0YWJibGVkIGVsZW1lbnRzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHk6IDUsIHB4OiA1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuU2VsZWN0LCB7IG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0U2VsZWN0ZWRSYW5rKGUudGFyZ2V0LnZhbHVlKTsgfSwgcGxhY2Vob2xkZXI6ICdTZWxlY3QgcmFuaycgfSwgcGFja2FnZXMubWFwKGZ1bmN0aW9uIChwa2csIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBzZWxlY3RlZDogdXNlci5wYWNrYWdlLmlkID09IHBrZy5pZCA/IHRydWUgOiBmYWxzZSwga2V5OiBpbmRleCwgdmFsdWU6IHBrZy5pZCB9LCBwa2cucGFja2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuTW9kYWxGb290ZXIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5CdXR0b24sIHsgdmFyaWFudDogJ3NvbGlkJywgbXI6IDMsIG9uQ2xpY2s6IG9uQ2xvc2UgfSwgXCJDbG9zZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJ1dHRvbiwgeyBvbkNsaWNrOiBoYW5kbGVDaG5hZ2VSYW5rLCB2YXJpYW50OiAnc29saWQnLCBjb2xvclNjaGVtZTogJ3RlYWwnIH0sIFwiQ29uZmlybSBjaGFuZ2VcIikpKSkpKSkpLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgbXQ6ICczMHB4JywgcDogMywgdzogJ2Z1bGwnLCBtaW5IOiAnMzAwcHgnLCBiZzogJ3doaXRlJywgcm91bmRlZDogJ2Jhc2UnLCBzaGFkb3c6ICdiYXNlJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkhlYWRpbmcsIHsgYXM6ICdoNCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIGZvbnRTaXplOiAnMjBweCcgfSwgXCJMZXZlbCByZWNvcmRcIikpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IGZsZXg6ICczJywgcHk6IDMsIGJnOiAnd2hpdGUnIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHc6ICcxMDAlJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IHc6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgcHg6IDIsIHB5OiAnMnB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICMyZDM3NDgxNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIG51bGwsIFwiTGV2ZWwgT25lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVscy5sZXZlbE9uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG1lbWJlcnMgXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5wYWNrYWdlLmxldmVsX29uZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJSBwcm9maXQpXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyB3OiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHB4OiAyLCBweTogJzJweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMmQzNzQ4MTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLCBcIkxldmVsIFR3b1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbHMubGV2ZWxUd28sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBtZW1iZXJzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5wYWNrYWdlLmxldmVsX3R3byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJSBwcm9maXQpXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyB3OiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHB4OiAyLCBweTogJzJweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMmQzNzQ4MTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLCBcIkxldmVsIFRocmVlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVscy5sZXZlbFRocmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgbWVtYmVyc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIihcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucGFja2FnZS5sZXZlbF90aHJlZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJSBwcm9maXQpXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyB3OiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHB4OiAyLCBweTogJzJweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMmQzNzQ4MTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLCBcIkxldmVsIEZvdXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxzLmxldmVsRm91cixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG1lbWJlcnNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5wYWNrYWdlLmxldmVsX2ZvdXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiUgcHJvZml0KVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBweDogMiwgcHk6ICcycHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCwgXCJMZXZlbCBGaXZlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVscy5sZXZlbEZpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBtZW1iZXJzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5wYWNrYWdlLmxldmVsX2ZpdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiUgcHJvZml0KVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBweDogMiwgcHk6ICcycHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCwgXCJMZXZlbCBTaXhcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxzLmxldmVsU2l4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgbWVtYmVyc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIihcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucGFja2FnZS5sZXZlbF9zaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiUgcHJvZml0KVwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBweDogMiwgcHk6ICcycHgnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLCBcIkxldmVsIFNldmVuXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVscy5sZXZlbFNldmVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgbWVtYmVyc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIihcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucGFja2FnZS5sZXZlbF9zZXZlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJSBwcm9maXQpXCIpKSkpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0X2Z1bGxfc2NyZWVuXzEuRnVsbFNjcmVlbiwgeyBoYW5kbGU6IHNjcmVlbiB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHB5OiA1LCBweDogNSwgYmc6ICd3aGl0ZScsIG10OiAnMzBweCcgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Gb3JtQ29udHJvbCwgeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Gb3JtTGFiZWwsIHsgaHRtbEZvcjogJ2VtYWlsLWFsZXJ0cycsIG1iOiAnMCcgfSwgXCJFbmFibGUgWm9vbWluZ1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlN3aXRjaCwgeyBvbkNoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0RW5hYmxlWm9vbSghZW5hYmxlWm9vbSk7IH0sIGlkOiAnZW1haWwtYWxlcnRzJyB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb24sIHsgZm9udFNpemU6ICcyMnB4JywgbXI6IDUsIGN1cnNvcjogJ3BvaW50ZXInLCBvbkNsaWNrOiBkb3dubG9hZFNjcmVlbnNob3QsIGFzOiBhaV8xLkFpT3V0bGluZURvd25sb2FkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbi5hY3RpdmUgPT0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSWNvbiwgeyBmb250U2l6ZTogJzIycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgb25DbGljazogc2NyZWVuLmVudGVyLCBhczogYWlfMS5BaU91dGxpbmVGdWxsc2NyZWVuIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb24sIHsgZm9udFNpemU6ICcyMnB4JywgY3Vyc29yOiAncG9pbnRlcicsIG9uQ2xpY2s6IHNjcmVlbi5leGl0LCBhczogYWlfMS5BaU91dGxpbmVGdWxsc2NyZWVuRXhpdCB9KSkpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJzEwMCUnLCBtaW5IZWlnaHQ6ICgoX2IgPSBkYXRhU291cmNlID09PSBudWxsIHx8IGRhdGFTb3VyY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFTb3VyY2UuY2hpbGRyZW4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5sZW5ndGgpID8gJzEwMHZoJyA6ICcyMDBweCcsIGJnOiAnd2hpdGUnLCByb3VuZGVkOiAnYmFzZScsIHNoYWRvdzogJ2Jhc2UnLCBvdmVyZmxvdzogJ2F1dG8nIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByZWY6IHJlZiB9LCAoKF9jID0gZGF0YVNvdXJjZSA9PT0gbnVsbCB8fCBkYXRhU291cmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhU291cmNlLmNoaWxkcmVuKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChHZW5lb2xvZ3lfMVtcImRlZmF1bHRcIl0sIHsgZW5hYmxlWm9vbTogZW5hYmxlWm9vbSwgZGF0YVNvdXJjZTogZGF0YVNvdXJjZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgZGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAyLCBwOiA1IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5DZW50ZXIsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250U2l6ZTogJ3hsJywgZm9udFdlaWdodDogJ3NlbWlib2xkJywgY29sb3I6ICdncmF5LjYwMCcgfSwgXCJHZW5lb2xvZ3kgbm90IGNyZWF0ZWRcIikpKSkpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVXNlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBVc2Vyc0xpc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vQ29tcG9uZW50cy9BZG1pblBhbmVsL0Rhc2hib2FyZC9Vc2Vyc0xpc3RcIikpO1xyXG52YXIgQWRtaW5MYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTGF5b3V0cy9BZG1pbkxheW91dC9BZG1pbkxheW91dFwiKSk7XHJcbi8vIGltcG9ydCBVc2VyTGF5b3V0IGZyb20gJy4uLy4uL0xheW91dHMvVXNlcnNMYXlvdXQvVXNlckxheW91dCdcclxuZnVuY3Rpb24gVXNlcnMoX2EpIHtcclxuICAgIHZhciB1c2VycyA9IF9hLnVzZXJzO1xyXG4gICAgY29uc29sZS5sb2coJ0FsbCB1c2VyczogJywgdXNlcnMpO1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEFkbWluTGF5b3V0XzFbXCJkZWZhdWx0XCJdLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIG51bGwsXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IGFzOiAnaDQnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBmb250U2l6ZTogJzI4cHgnIH0sIFwiVXNlcnNcIikpLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgdzogJ2Z1bGwnLCBtdDogJzMwcHgnLCBiZzogJ3doaXRlJywgcm91bmRlZDogJ21kJywgc2hhZG93OiAnYmFzZScsIHB0OiAnMjVweCcsIHBiOiAnMjBweCcsIHB4OiAnMTVweCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkhlYWRpbmcsIHsgbWI6IDIsIGZvbnRTaXplOiAnMnhsJywgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9LCBcIkFsbCBSZWdpc3RlcmVkIFVzZXJzXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFVzZXJzTGlzdF8xW1wiZGVmYXVsdFwiXSwgeyB1c2VyTGlzdDogdXNlcnMgfSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBVc2VycztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxuLy8gaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcclxudmFyIGluZXJ0aWFfcmVhY3RfMSA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBVc2VyTGF5b3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0xheW91dHMvVXNlcnNMYXlvdXQvVXNlckxheW91dFwiKSk7XHJcbi8vIGltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICAgIHZhciBlcnJvcnMgPSAoMCwgaW5lcnRpYV9yZWFjdF8xLnVzZVBhZ2UpKCkucHJvcHMuZXJyb3JzO1xyXG4gICAgdmFyIF9hID0gKDAsIGluZXJ0aWFfcmVhY3RfMS51c2VGb3JtKSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICByZW1lbWJlcjogZmFsc2VcclxuICAgIH0pLCBkYXRhID0gX2EuZGF0YSwgc2V0RGF0YSA9IF9hLnNldERhdGEsIHBvc3QgPSBfYS5wb3N0LCBwcm9jZXNzaW5nID0gX2EucHJvY2Vzc2luZztcclxuICAgIHZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIC8vICBhbGVydChlKVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBwb3N0KCcvbG9naW4nLCBkYXRhKTtcclxuICAgICAgICAvLyB9LCAxMDAwMClcclxuICAgIH07XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVXNlckxheW91dF8xW1wiZGVmYXVsdFwiXSwgbnVsbCxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQ29udGFpbmVyLCB7IG1heFc6ICdjb250YWluZXIueGwnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHk6IDEwLCBteDogXCJhdXRvXCIgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TaW1wbGVHcmlkLCB7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHc6IHsgYmFzZTogXCJmdWxsXCIsIHhsOiAxMSAvIDEyIH0sIGNvbHVtbnM6IHsgYmFzZTogMSwgbGc6IDExIH0sIGdhcDogeyBiYXNlOiAwLCBsZzogMjQgfSwgbXg6IFwiYXV0b1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRJdGVtLCB7IGNvbFNwYW46IHsgYmFzZTogXCJhdXRvXCIsIGxnOiA2IH0sIHRleHRBbGlnbjogeyBiYXNlOiBcImNlbnRlclwiLCBsZzogXCJsZWZ0XCIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLmgxLCB7IG1iOiA0LCBmb250U2l6ZTogeyBiYXNlOiBcIjN4bFwiLCBtZDogXCI0eGxcIiB9LCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGluZUhlaWdodDogeyBiYXNlOiBcInNob3J0ZXJcIiwgbWQ6IFwibm9uZVwiIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS45MDBcIiwgXCJncmF5LjIwMFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheS45MDAnLCBsZXR0ZXJTcGFjaW5nOiB7IGJhc2U6IFwibm9ybWFsXCIsIG1kOiBcInRpZ2h0XCIgfSB9LCBcIldlbGNvbWUgYmFjayFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEucCwgeyBtYjogeyBiYXNlOiAxMCwgbWQ6IDQgfSwgZm9udFNpemU6IHsgYmFzZTogXCJsZ1wiLCBtZDogXCJ4bFwiIH0sIGZvbnRXZWlnaHQ6IFwidGhpblwiLCBjb2xvcjogXCJncmF5LjUwMFwiLCBsZXR0ZXJTcGFjaW5nOiBcIndpZGVyXCIgfSwgXCJMb3ctbGF0ZW5jeSB2b2ljZSBhbmQgdmlkZW8gZmVlbHMgbGlrZSB5b3VcXHUyMDE5cmUgaW4gdGhlIHNhbWUgcm9vbS4gV2F2ZSBoZWxsbyBvdmVyIHZpZGVvLCB3YXRjaCBmcmllbmRzIHN0cmVhbSB0aGVpciBnYW1lcywgb3IgZ2F0aGVyIHVwIGFuZCBoYXZlIGEgZHJhd2luZyBzZXNzaW9uIHdpdGggc2NyZWVuIHNoYXJlLlwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRJdGVtLCB7IGNvbFNwYW46IHsgYmFzZTogXCJhdXRvXCIsIG1kOiA1IH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBhczogXCJmb3JtXCIsIHB5OiAzLCBtYjogNiwgcm91bmRlZDogXCJsZ1wiLCBzaGFkb3c6IFwieGxcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkNlbnRlciwgeyBwYjogMCwgY29sb3I6ICdncmF5LjcwMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBwdDogMiwgZm9udFdlaWdodDogJ2JvbGQnLCBmb250U2l6ZTogJzIwcHgnIH0sIFwiTG9naW4gdG8geW91ciBhY2NvdW50XCIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TaW1wbGVHcmlkLCB7IGNvbHVtbnM6IDEsIHB4OiA2LCBweTogNCwgc3BhY2luZzogNCwgYm9yZGVyQ29sb3I6ICdncmF5LjIwMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBkaXJlY3Rpb246ICdjb2x1bW4nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5WaXN1YWxseUhpZGRlbiwgbnVsbCwgXCJFbWFpbCBBZGRyZXNzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgbXQ6IDAsIHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiRW1haWwgQWRkcmVzc1wiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXREYXRhKF9fYXNzaWduKF9fYXNzaWduKHt9LCBkYXRhKSwgeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSkpOyB9LCB2YWx1ZTogZGF0YS5lbWFpbCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9ycyA9PT0gbnVsbCB8fCBlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9ycy5lbWFpbCkgJiYgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgY29sb3I6ICdyZWQuNDAwJyB9LCBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZW1haWwpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBkaXJlY3Rpb246ICdjb2x1bW4nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5WaXN1YWxseUhpZGRlbiwgbnVsbCwgXCJQYXNzd29yZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLklucHV0LCB7IG10OiAwLCB0eXBlOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldERhdGEoX19hc3NpZ24oX19hc3NpZ24oe30sIGRhdGEpLCB7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KSk7IH0sIHZhbHVlOiBkYXRhLnBhc3N3b3JkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLnBhc3N3b3JkKSAmJiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBjb2xvcjogJ3JlZC40MDAnIH0sIGVycm9ycyA9PT0gbnVsbCB8fCBlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9ycy5wYXNzd29yZCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMubG9naW4pICYmIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGNvbG9yOiAncmVkLjQwMCcgfSwgZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLmxvZ2luKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJ1dHRvbiwgeyBvbkNsaWNrOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gaGFuZGxlU3VibWl0KGUpOyB9LCBpc0xvYWRpbmc6IHByb2Nlc3NpbmcsIGxvYWRpbmdUZXh0OiAnSnVzdCBhIG1vbWVudCcsIGNvbG9yU2NoZW1lOiAncHVycGxlJywgdmFyaWFudDogJ3NvbGlkJywgc3Bpbm5lclBsYWNlbWVudDogJ2VuZCcgfSwgXCJTaWduIGluXCIpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEucCwgeyBmb250U2l6ZTogXCJ4c1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiBcImdyYXkuNjAwXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQnkgc2lnbmluZyB1cCB5b3UgYWdyZWUgdG8gb3VyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEuYSwgeyBjb2xvcjogXCJicmFuZC41MDBcIiB9LCBcIlRlcm1zIG9mIFNlcnZpY2VcIikpKSkpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9naW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG4vLyBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xyXG52YXIgaW5lcnRpYV9yZWFjdF8xID0gcmVxdWlyZShcIkBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIFVzZXJMYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTGF5b3V0cy9Vc2Vyc0xheW91dC9Vc2VyTGF5b3V0XCIpKTtcclxudmFyIHJlYWN0X21vcmFsaXNfMSA9IHJlcXVpcmUoXCJyZWFjdC1tb3JhbGlzXCIpO1xyXG5mdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgX2E7XHJcbiAgICB2YXIgX2IgPSAoMCwgaW5lcnRpYV9yZWFjdF8xLnVzZVBhZ2UpKCkucHJvcHMsIGVycm9ycyA9IF9iLmVycm9ycywgcmVmX2ludiA9IF9iLnJlZl9pbnYsIHNyY19pbnYgPSBfYi5zcmNfaW52O1xyXG4gICAgdmFyIF9jID0gKDAsIHJlYWN0X21vcmFsaXNfMS51c2VNb3JhbGlzKSgpLCBzaWdudXAgPSBfYy5zaWdudXAsIGlzQXV0aGVudGljYXRlZCA9IF9jLmlzQXV0aGVudGljYXRlZDtcclxuICAgIHZhciBfZCA9ICgwLCBpbmVydGlhX3JlYWN0XzEudXNlRm9ybSkoe1xyXG4gICAgICAgIGZpcnN0X25hbWU6ICcnLFxyXG4gICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHJlZl9pZDogcmVmX2ludiAmJiByZWZfaW52LFxyXG4gICAgICAgIHNvdXJjZTogc3JjX2ludiAmJiBzcmNfaW52LFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6ICcnXHJcbiAgICB9KSwgZGF0YSA9IF9kLmRhdGEsIHNldERhdGEgPSBfZC5zZXREYXRhLCBwb3N0ID0gX2QucG9zdCwgcHJvY2Vzc2luZyA9IF9kLnByb2Nlc3Npbmc7XHJcbiAgICBjb25zb2xlLmxvZygndXNlUGFnZSgpLnByb3BzOiAnLCAoX2EgPSAoMCwgaW5lcnRpYV9yZWFjdF8xLnVzZVBhZ2UpKCkucHJvcHMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5lcnJvcnMpO1xyXG4gICAgdmFyIGhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAvLyAgYWxlcnQoZSlcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBwb3N0KCcvcmVnaXN0ZXInLCBkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVXNlckxheW91dF8xW1wiZGVmYXVsdFwiXSwgbnVsbCxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQ29udGFpbmVyLCB7IG1heFc6ICdjb250YWluZXIueGwnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHk6IDEwLCBteDogXCJhdXRvXCIgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TaW1wbGVHcmlkLCB7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIHc6IHsgYmFzZTogXCJmdWxsXCIsIHhsOiAxMSAvIDEyIH0sIGNvbHVtbnM6IHsgYmFzZTogMSwgbGc6IDExIH0sIGdhcDogeyBiYXNlOiAwLCBsZzogMjQgfSwgbXg6IFwiYXV0b1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkdyaWRJdGVtLCB7IGNvbFNwYW46IHsgYmFzZTogXCJhdXRvXCIsIGxnOiA2IH0sIHRleHRBbGlnbjogeyBiYXNlOiBcImNlbnRlclwiLCBsZzogXCJsZWZ0XCIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLmgxLCB7IG1iOiA0LCBmb250U2l6ZTogeyBiYXNlOiBcIjN4bFwiLCBtZDogXCI0eGxcIiB9LCBmb250V2VpZ2h0OiBcImJvbGRcIiwgbGluZUhlaWdodDogeyBiYXNlOiBcInNob3J0ZXJcIiwgbWQ6IFwibm9uZVwiIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS45MDBcIiwgXCJncmF5LjIwMFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheS45MDAnLCBsZXR0ZXJTcGFjaW5nOiB7IGJhc2U6IFwibm9ybWFsXCIsIG1kOiBcInRpZ2h0XCIgfSB9LCBpc0F1dGhlbnRpY2F0ZWQgPyAnWW91IGFyZSBhdXRoZW50aWNhdGVkIHdpdGggTW9yYWxpcycgOiAnUmVhZHkgdG8gc3RhcnQgeW91ciBqb3VybmV5PycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgbWI6IHsgYmFzZTogMTAsIG1kOiA0IH0sIGZvbnRTaXplOiB7IGJhc2U6IFwibGdcIiwgbWQ6IFwieGxcIiB9LCBmb250V2VpZ2h0OiBcInRoaW5cIiwgY29sb3I6IFwiZ3JheS41MDBcIiwgbGV0dGVyU3BhY2luZzogXCJ3aWRlclwiIH0sIFwiTG93LWxhdGVuY3kgdm9pY2UgYW5kIHZpZGVvIGZlZWxzIGxpa2UgeW91XFx1MjAxOXJlIGluIHRoZSBzYW1lIHJvb20uIFdhdmUgaGVsbG8gb3ZlciB2aWRlbywgd2F0Y2ggZnJpZW5kcyBzdHJlYW0gdGhlaXIgZ2FtZXMsIG9yIGdhdGhlciB1cCBhbmQgaGF2ZSBhIGRyYXdpbmcgc2Vzc2lvbiB3aXRoIHNjcmVlbiBzaGFyZS5cIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5HcmlkSXRlbSwgeyBjb2xTcGFuOiB7IGJhc2U6IFwiYXV0b1wiLCBtZDogNSB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgYXM6IFwiZm9ybVwiLCBweTogMywgbWI6IDYsIHJvdW5kZWQ6IFwibGdcIiwgc2hhZG93OiBcInhsXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5DZW50ZXIsIHsgcGI6IDAsIGNvbG9yOiAnZ3JheS43MDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgcHQ6IDIsIGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcyMHB4JyB9LCBcIkNyZWF0ZSB5b3VyIGFjY291bnQgbm93XCIpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TaW1wbGVHcmlkLCB7IGNvbHVtbnM6IDEsIHB4OiA2LCBweTogNCwgc3BhY2luZzogNCwgYm9yZGVyQ29sb3I6ICdncmF5LjIwMCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBkaXJlY3Rpb246IHsgYmFzZTogJ2NvbHVtbicsIHNtOiAnY29sdW1uJywgbWQ6ICdyb3cnLCBsZzogJ3JvdycgfSwgZ2FwOiAzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IGRpcmVjdGlvbjogJ2NvbHVtbicgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5WaXN1YWxseUhpZGRlbiwgbnVsbCwgXCJGaXJzdCBOYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLklucHV0LCB7IG10OiAwLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRmlyc3QgTmFtZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHNldERhdGEoX19hc3NpZ24oX19hc3NpZ24oe30sIGRhdGEpLCB7IGZpcnN0X25hbWU6IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSwgdmFsdWU6IGRhdGEuZmlyc3RfbmFtZSB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZmlyc3RfbmFtZSkgJiYgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgY29sb3I6ICdyZWQuNDAwJyB9LCBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZmlyc3RfbmFtZSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBkaXJlY3Rpb246ICdjb2x1bW4nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVmlzdWFsbHlIaWRkZW4sIG51bGwsIFwiTGFzdCBOYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLklucHV0LCB7IG10OiAwLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiTGFzdCBOYW1lXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RGF0YShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGF0YSksIHsgbGFzdF9uYW1lOiBlLnRhcmdldC52YWx1ZSB9KSk7IH0sIHZhbHVlOiBkYXRhLmxhc3RfbmFtZSB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMubGFzdF9uYW1lKSAmJiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBjb2xvcjogJ3JlZC40MDAnIH0sIGVycm9ycyA9PT0gbnVsbCB8fCBlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9ycy5sYXN0X25hbWUpKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgZGlyZWN0aW9uOiAnY29sdW1uJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVmlzdWFsbHlIaWRkZW4sIG51bGwsIFwiRW1haWwgQWRkcmVzc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLklucHV0LCB7IG10OiAwLCB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcIkVtYWlsIEFkZHJlc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RGF0YShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGF0YSksIHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSwgdmFsdWU6IGRhdGEuZW1haWwgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZW1haWwpICYmIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGNvbG9yOiAncmVkLjQwMCcgfSwgZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLmVtYWlsKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgZGlyZWN0aW9uOiAnY29sdW1uJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVmlzdWFsbHlIaWRkZW4sIG51bGwsIFwiUmVmZXJlbmNlIElEXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgbXQ6IDAsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJSZWZlcmVuY2UgSURcIiwgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXREYXRhKF9fYXNzaWduKF9fYXNzaWduKHt9LCBkYXRhKSwgeyByZWZfaWQ6IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSwgdmFsdWU6IGRhdGEucmVmX2lkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLnJlZl9pZCkgJiYgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgY29sb3I6ICdyZWQuNDAwJyB9LCBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMucmVmX2lkKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgZGlyZWN0aW9uOiAnY29sdW1uJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVmlzdWFsbHlIaWRkZW4sIG51bGwsIFwiUGFzc3dvcmRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5JbnB1dCwgeyBtdDogMCwgdHlwZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXREYXRhKF9fYXNzaWduKF9fYXNzaWduKHt9LCBkYXRhKSwgeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSkpOyB9LCB2YWx1ZTogZGF0YS5wYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9ycyA9PT0gbnVsbCB8fCBlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9ycy5wYXNzd29yZCkgJiYgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgY29sb3I6ICdyZWQuNDAwJyB9LCBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMucGFzc3dvcmQpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBkaXJlY3Rpb246ICdjb2x1bW4nIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5WaXN1YWxseUhpZGRlbiwgbnVsbCwgXCJDb25maXJtIFBhc3N3b3JkXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgbXQ6IDAsIHR5cGU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwiQ29uZmlybSBQYXNzd29yZFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXREYXRhKF9fYXNzaWduKF9fYXNzaWduKHt9LCBkYXRhKSwgeyBjb25maXJtUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSwgdmFsdWU6IGRhdGEuY29uZmlybVBhc3N3b3JkIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQnV0dG9uLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBoYW5kbGVTdWJtaXQoZSk7IH0sIGlzTG9hZGluZzogcHJvY2Vzc2luZywgbG9hZGluZ1RleHQ6ICdDcmVhdGluZyBhY2NvdW50JywgY29sb3JTY2hlbWU6ICdwdXJwbGUnLCB2YXJpYW50OiAnc29saWQnLCBzcGlubmVyUGxhY2VtZW50OiAnZW5kJyB9LCBcIlNpZ24gdXAgZm9yIGZyZWVcIikpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLmNoYWtyYS5wLCB7IGZvbnRTaXplOiBcInhzXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgY29sb3I6IFwiZ3JheS42MDBcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCeSBzaWduaW5nIHVwIHlvdSBhZ3JlZSB0byBvdXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLmNoYWtyYS5hLCB7IGNvbG9yOiBcImJyYW5kLjUwMFwiIH0sIFwiVGVybXMgb2YgU2VydmljZVwiKSkpKSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSZWdpc3RlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBVc2VyTGF5b3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0xheW91dHMvVXNlcnNMYXlvdXQvVXNlckxheW91dFwiKSk7XHJcbi8vIGltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5mdW5jdGlvbiBCbG9nKCkge1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFVzZXJMYXlvdXRfMVtcImRlZmF1bHRcIl0sIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkNvbnRhaW5lciwgeyBtYXhXOiAnY29udGFpbmVyLnhsJyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHB5OiAxMCwgbXg6IFwiYXV0b1wiIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuU2ltcGxlR3JpZCwgeyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB3OiB7IGJhc2U6IFwiZnVsbFwiLCB4bDogMTEgLyAxMiB9LCBjb2x1bW5zOiB7IGJhc2U6IDEsIGxnOiAxMSB9LCBnYXA6IHsgYmFzZTogMCwgbGc6IDI0IH0sIG14OiBcImF1dG9cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5HcmlkSXRlbSwgeyBjb2xTcGFuOiB7IGJhc2U6IFwiYXV0b1wiLCBsZzogNiB9LCB0ZXh0QWxpZ246IHsgYmFzZTogXCJjZW50ZXJcIiwgbGc6IFwibGVmdFwiIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLmNoYWtyYS5oMSwgeyBtYjogNCwgZm9udFNpemU6IHsgYmFzZTogXCIzeGxcIiwgbWQ6IFwiNHhsXCIgfSwgZm9udFdlaWdodDogXCJib2xkXCIsIGxpbmVIZWlnaHQ6IHsgYmFzZTogXCJzaG9ydGVyXCIsIG1kOiBcIm5vbmVcIiB9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuOTAwXCIsIFwiZ3JheS4yMDBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXkuOTAwJywgbGV0dGVyU3BhY2luZzogeyBiYXNlOiBcIm5vcm1hbFwiLCBtZDogXCJ0aWdodFwiIH0gfSwgXCJCbG9nXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgbWI6IHsgYmFzZTogMTAsIG1kOiA0IH0sIGZvbnRTaXplOiB7IGJhc2U6IFwibGdcIiwgbWQ6IFwieGxcIiB9LCBmb250V2VpZ2h0OiBcInRoaW5cIiwgY29sb3I6IFwiZ3JheS41MDBcIiwgbGV0dGVyU3BhY2luZzogXCJ3aWRlclwiIH0sIFwiTG93LWxhdGVuY3kgdm9pY2UgYW5kIHZpZGVvIGZlZWxzIGxpa2UgeW91XFx1MjAxOXJlIGluIHRoZSBzYW1lIHJvb20uIFdhdmUgaGVsbG8gb3ZlciB2aWRlbywgd2F0Y2ggZnJpZW5kcyBzdHJlYW0gdGhlaXIgZ2FtZXMsIG9yIGdhdGhlciB1cCBhbmQgaGF2ZSBhIGRyYXdpbmcgc2Vzc2lvbiB3aXRoIHNjcmVlbiBzaGFyZS5cIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5HcmlkSXRlbSwgeyBjb2xTcGFuOiB7IGJhc2U6IFwiYXV0b1wiLCBtZDogNSB9IH0pKSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBCbG9nO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG4vLyBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xyXG52YXIgaW5lcnRpYV9yZWFjdF8xID0gcmVxdWlyZShcIkBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIFVzZXJMYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTGF5b3V0cy9Vc2Vyc0xheW91dC9Vc2VyTGF5b3V0XCIpKTtcclxuLy8gaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gICAgdmFyIGVycm9ycyA9ICgwLCBpbmVydGlhX3JlYWN0XzEudXNlUGFnZSkoKS5wcm9wcy5lcnJvcnM7XHJcbiAgICB2YXIgX2EgPSAoMCwgaW5lcnRpYV9yZWFjdF8xLnVzZUZvcm0pKHtcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIHJlbWVtYmVyOiBmYWxzZVxyXG4gICAgfSksIGRhdGEgPSBfYS5kYXRhLCBzZXREYXRhID0gX2Euc2V0RGF0YSwgcG9zdCA9IF9hLnBvc3QsIHByb2Nlc3NpbmcgPSBfYS5wcm9jZXNzaW5nO1xyXG4gICAgdmFyIGhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gIGFsZXJ0KGUpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHBvc3QoJy9sb2dpbicsIGRhdGEpO1xyXG4gICAgICAgIC8vIH0sIDEwMDAwKVxyXG4gICAgfTtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChVc2VyTGF5b3V0XzFbXCJkZWZhdWx0XCJdLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Db250YWluZXIsIHsgbWF4VzogJ2NvbnRhaW5lci54bCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBweTogMTAsIG14OiBcImF1dG9cIiB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlNpbXBsZUdyaWQsIHsgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgdzogeyBiYXNlOiBcImZ1bGxcIiwgeGw6IDExIC8gMTIgfSwgY29sdW1uczogeyBiYXNlOiAxLCBsZzogMTEgfSwgZ2FwOiB7IGJhc2U6IDAsIGxnOiAyNCB9LCBteDogXCJhdXRvXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuR3JpZEl0ZW0sIHsgY29sU3BhbjogeyBiYXNlOiBcImF1dG9cIiwgbGc6IDYgfSwgdGV4dEFsaWduOiB7IGJhc2U6IFwiY2VudGVyXCIsIGxnOiBcImxlZnRcIiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEuaDEsIHsgbWI6IDQsIGZvbnRTaXplOiB7IGJhc2U6IFwiM3hsXCIsIG1kOiBcIjR4bFwiIH0sIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBsaW5lSGVpZ2h0OiB7IGJhc2U6IFwic2hvcnRlclwiLCBtZDogXCJub25lXCIgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjkwMFwiLCBcImdyYXkuMjAwXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5LjkwMCcsIGxldHRlclNwYWNpbmc6IHsgYmFzZTogXCJub3JtYWxcIiwgbWQ6IFwidGlnaHRcIiB9IH0sIFwiV2VsY29tZSBiYWNrIHRvIGhvbWUhXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgbWI6IHsgYmFzZTogMTAsIG1kOiA0IH0sIGZvbnRTaXplOiB7IGJhc2U6IFwibGdcIiwgbWQ6IFwieGxcIiB9LCBmb250V2VpZ2h0OiBcInRoaW5cIiwgY29sb3I6IFwiZ3JheS41MDBcIiwgbGV0dGVyU3BhY2luZzogXCJ3aWRlclwiIH0sIFwiTG93LWxhdGVuY3kgdm9pY2UgYW5kIHZpZGVvIGZlZWxzIGxpa2UgeW91XFx1MjAxOXJlIGluIHRoZSBzYW1lIHJvb20uIFdhdmUgaGVsbG8gb3ZlciB2aWRlbywgd2F0Y2ggZnJpZW5kcyBzdHJlYW0gdGhlaXIgZ2FtZXMsIG9yIGdhdGhlciB1cCBhbmQgaGF2ZSBhIGRyYXdpbmcgc2Vzc2lvbiB3aXRoIHNjcmVlbiBzaGFyZS5cIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5HcmlkSXRlbSwgeyBjb2xTcGFuOiB7IGJhc2U6IFwiYXV0b1wiLCBtZDogNSB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgYXM6IFwiZm9ybVwiLCBweTogMywgbWI6IDYsIHJvdW5kZWQ6IFwibGdcIiwgc2hhZG93OiBcInhsXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5DZW50ZXIsIHsgcGI6IDAsIGNvbG9yOiAnZ3JheS43MDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgcHQ6IDIsIGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcyMHB4JyB9LCBcIkxvZ2luIHRvIHlvdXIgYWNjb3VudFwiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuU2ltcGxlR3JpZCwgeyBjb2x1bW5zOiAxLCBweDogNiwgcHk6IDQsIHNwYWNpbmc6IDQsIGJvcmRlckNvbG9yOiAnZ3JheS4yMDAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgZGlyZWN0aW9uOiAnY29sdW1uJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVmlzdWFsbHlIaWRkZW4sIG51bGwsIFwiRW1haWwgQWRkcmVzc1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLklucHV0LCB7IG10OiAwLCB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcIkVtYWlsIEFkZHJlc3NcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0RGF0YShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGF0YSksIHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKTsgfSwgdmFsdWU6IGRhdGEuZW1haWwgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZW1haWwpICYmIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGNvbG9yOiAncmVkLjQwMCcgfSwgZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLmVtYWlsKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgZGlyZWN0aW9uOiAnY29sdW1uJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVmlzdWFsbHlIaWRkZW4sIG51bGwsIFwiUGFzc3dvcmRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5JbnB1dCwgeyBtdDogMCwgdHlwZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7IHJldHVybiBzZXREYXRhKF9fYXNzaWduKF9fYXNzaWduKHt9LCBkYXRhKSwgeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSkpOyB9LCB2YWx1ZTogZGF0YS5wYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9ycyA9PT0gbnVsbCB8fCBlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9ycy5wYXNzd29yZCkgJiYgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgY29sb3I6ICdyZWQuNDAwJyB9LCBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMucGFzc3dvcmQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3JzID09PSBudWxsIHx8IGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3JzLmxvZ2luKSAmJiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBjb2xvcjogJ3JlZC40MDAnIH0sIGVycm9ycyA9PT0gbnVsbCB8fCBlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9ycy5sb2dpbikpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5CdXR0b24sIHsgb25DbGljazogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZVN1Ym1pdChlKTsgfSwgaXNMb2FkaW5nOiBwcm9jZXNzaW5nLCBsb2FkaW5nVGV4dDogJ0p1c3QgYSBtb21lbnQnLCBjb2xvclNjaGVtZTogJ3B1cnBsZScsIHZhcmlhbnQ6ICdzb2xpZCcsIHNwaW5uZXJQbGFjZW1lbnQ6ICdlbmQnIH0sIFwiU2lnbiBpblwiKSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLnAsIHsgZm9udFNpemU6IFwieHNcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBjb2xvcjogXCJncmF5LjYwMFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJ5IHNpZ25pbmcgdXAgeW91IGFncmVlIHRvIG91clwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuY2hha3JhLmEsIHsgY29sb3I6IFwiYnJhbmQuNTAwXCIgfSwgXCJUZXJtcyBvZiBTZXJ2aWNlXCIpKSkpKSkpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IExvZ2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIFVzZXJMYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vTGF5b3V0cy9Vc2Vyc0xheW91dC9Vc2VyTGF5b3V0XCIpKTtcclxudmFyIHJlYWN0XzMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIGluZXJ0aWFfMSA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL2luZXJ0aWFcIik7XHJcbmZ1bmN0aW9uIFByb2R1Y3RzKF9hKSB7XHJcbiAgICB2YXIgcHJvZHVjdHMgPSBfYS5wcm9kdWN0cztcclxuICAgIHZhciBoYW5kbGVCeVByb2R1Y3QgPSBmdW5jdGlvbiAocHJvZHVjdElkKSB7XHJcbiAgICAgICAgaW5lcnRpYV8xLkluZXJ0aWEucG9zdCgnL3VzZXIvYnV5X3Byb2R1Y3QnLCB7IHByb2R1Y3RJZDogcHJvZHVjdElkIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChVc2VyTGF5b3V0XzFbXCJkZWZhdWx0XCJdLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Db250YWluZXIsIHsgbWF4VzogJ2NvbnRhaW5lci54bCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBweTogNSwgbXg6IFwiYXV0b1wiIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuU2ltcGxlR3JpZCwgeyBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCB3OiB7IGJhc2U6IFwiZnVsbFwiLCB4bDogMTEgLyAxMiB9LCBjb2x1bW5zOiB7IGJhc2U6IDEsIGxnOiAxMSB9LCBnYXA6IHsgYmFzZTogMCwgbGc6IDI0IH0gfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuR3JpZEl0ZW0sIHsgY29sU3BhbjogeyBiYXNlOiBcImF1dG9cIiwgbGc6IDYgfSwgdGV4dEFsaWduOiB7IGJhc2U6IFwiY2VudGVyXCIsIGxnOiBcImxlZnRcIiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEuaDEsIHsgbWI6IDQsIGZvbnRTaXplOiB7IGJhc2U6IFwiM3hsXCIsIG1kOiBcIjR4bFwiIH0sIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBsaW5lSGVpZ2h0OiB7IGJhc2U6IFwic2hvcnRlclwiLCBtZDogXCJub25lXCIgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjkwMFwiLCBcImdyYXkuMjAwXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5LjkwMCcsIGxldHRlclNwYWNpbmc6IHsgYmFzZTogXCJub3JtYWxcIiwgbWQ6IFwidGlnaHRcIiB9IH0sIFwiUHJvZHVjdHNcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5jaGFrcmEucCwgeyBtYjogeyBiYXNlOiAxMCwgbWQ6IDQgfSwgZm9udFNpemU6IHsgYmFzZTogXCJsZ1wiLCBtZDogXCJ4bFwiIH0sIGZvbnRXZWlnaHQ6IFwidGhpblwiLCBjb2xvcjogXCJncmF5LjUwMFwiLCBsZXR0ZXJTcGFjaW5nOiBcIndpZGVyXCIgfSwgXCJMb3ctbGF0ZW5jeSB2b2ljZSBhbmQgdmlkZW8gZmVlbHMgbGlrZSB5b3VcXHUyMDE5cmUgaW4gdGhlIHNhbWUgcm9vbS4gV2F2ZSBoZWxsbyBvdmVyIHZpZGVvLCB3YXRjaCBmcmllbmRzIHN0cmVhbSB0aGVpciBnYW1lcywgb3IgZ2F0aGVyIHVwIGFuZCBoYXZlIGEgZHJhd2luZyBzZXNzaW9uIHdpdGggc2NyZWVuIHNoYXJlLlwiKSkpKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBteDogXCJhdXRvXCIgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5TaW1wbGVHcmlkLCB7IGNvbHVtbnM6IHsgYmFzZTogMSwgc206IDEsIG1kOiAzLCBsZzogNCB9LCBnYXA6IDQgfSwgcHJvZHVjdHMubWFwKGZ1bmN0aW9uIChwcm9kdWN0LCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzMuQ2VudGVyLCB7IGtleTogaW5kZXggfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBtYXhXOiAnMzIwcHgnLCB3OiAnZnVsbCcsIGJnOiAoMCwgcmVhY3RfMy51c2VDb2xvck1vZGVWYWx1ZSkoJ3doaXRlJywgJ2dyYXkuOTAwJyksIGJveFNoYWRvdzogJ21kJywgcm91bmRlZDogJ2xnJywgcDogNCwgdGV4dEFsaWduOiAnY2VudGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkltYWdlLCB7IHNyYzogcHJvZHVjdC5pbWFnZSwgbWI6IDMgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzMuSGVhZGluZywgeyBmb250U2l6ZTogJzJ4bCcsIGZvbnRGYW1pbHk6ICdib2R5JywgbWI6IDMgfSwgcHJvZHVjdC5uYW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMy5UZXh0LCB7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAoMCwgcmVhY3RfMy51c2VDb2xvck1vZGVWYWx1ZSkoJ2dyYXkuNzAwJywgJ2dyYXkuNDAwJyksIHB4OiAzIH0sIHByb2R1Y3QuY29udGVudCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzMuU3RhY2ssIHsgbXQ6IDgsIGRpcmVjdGlvbjogJ3JvdycsIHNwYWNpbmc6IDQsIGp1c3RpZnlJdGVtczogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8zLlRleHQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnByaWNlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzMuQnV0dG9uLCB7IG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZUJ5UHJvZHVjdChwcm9kdWN0LmlkKTsgfSwgZmxleDogMSwgZm9udFNpemU6ICdzbScsIHJvdW5kZWQ6ICdmdWxsJywgYmc6ICdibHVlLjQwMCcsIGNvbG9yOiAnd2hpdGUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm94U2hhZG93PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAnMHB4IDFweCAyNXB4IC01cHggcmdiKDY2IDE1MyAyMjUgLyA0OCUpLCAwIDEwcHggMTBweCAtNXB4IHJnYig2NiAxNTMgMjI1IC8gNDMlKSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnOiAnYmx1ZS41MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9mb2N1czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmc6ICdibHVlLjUwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCBcIkJ1eSBOb3dcIikpKSk7XHJcbiAgICAgICAgICAgICAgICB9KSkpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUHJvZHVjdHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgR3Vlc3RMYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTGF5b3V0cy9HdWVzdExheW91dC9HdWVzdExheW91dFwiKSk7XHJcbmZ1bmN0aW9uIFRlc3RSZWFjdCgpIHtcclxuICAgIHJldHVybiAocmVhY3RfMVtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChHdWVzdExheW91dF8xW1wiZGVmYXVsdFwiXSwgbnVsbCxcclxuICAgICAgICByZWFjdF8xW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgXCJUZXN0UmVhY3R2LSBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVXQgYXV0IGFsaWFzIHF1YW0gbmFtIGRvbG9yZSBub2JpcyBpbXBlZGl0IGFkaXBpc2NpIG1hZ25pIG5vbiBzb2x1dGEgc3VzY2lwaXQgZXhjZXB0dXJpIHZlcml0YXRpcyBpdXJlIHJlcnVtIHZvbHVwdGF0ZW0gcXVpLCBpdGFxdWUgZXN0IGJlYXRhZS5cIikpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFRlc3RSZWFjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG4vLyBAdHMtaWdub3JlXHJcbnZhciByZWFjdF8xID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciBpbmVydGlhXzEgPSByZXF1aXJlKFwiQGluZXJ0aWFqcy9pbmVydGlhXCIpO1xyXG52YXIgaW5lcnRpYV9yZWFjdF8xID0gcmVxdWlyZShcIkBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIEFjY291bnRJbmZvQ2FyZHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vQ29tcG9uZW50cy9Vc2VyUGFuZWwvRGFzaGJvYXJkL0FjY291bnRJbmZvQ2FyZHNcIikpO1xyXG52YXIgUmVmZXJyYWxDbGlwYm9hcmRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vQ29tcG9uZW50cy9Vc2VyUGFuZWwvRGFzaGJvYXJkL1JlZmVycmFsQ2xpcGJvYXJkXCIpKTtcclxudmFyIFVzZXJzTGlzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL1VzZXJQYW5lbC9EYXNoYm9hcmQvVXNlcnNMaXN0XCIpKTtcclxudmFyIFVzZXJMYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTGF5b3V0cy9Vc2Vyc0xheW91dC9Vc2VyTGF5b3V0XCIpKTtcclxuZnVuY3Rpb24gRGFzaGJvYXJkKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRVc2VycyA9IF9hLmNoaWxkVXNlcnMsIGNsaWNrcyA9IF9hLmNsaWNrcztcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHZhciBhdXRoVXNlciA9ICgwLCBpbmVydGlhX3JlYWN0XzEudXNlUGFnZSkoKS5wcm9wcy5hdXRoVXNlcjtcclxuICAgIHZhciBfYiA9ICgwLCByZWFjdF8yLnVzZVN0YXRlKShmYWxzZSksIHNob3dBZHZhbmNlID0gX2JbMF0sIHNldFNoaXdBZHZhbmNlID0gX2JbMV07XHJcbiAgICB2YXIgX2MgPSAoMCwgcmVhY3RfMi51c2VTdGF0ZSkoYXV0aFVzZXIuc2hhcmVfbGlua3MpLCBzaGFyZUxpbmtzID0gX2NbMF0sIHNldFNoYXJlTGlua3MgPSBfY1sxXTtcclxuICAgIHZhciB1cGRhdGVTaGFyZUxpbmtzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGluZXJ0aWFfMS5JbmVydGlhLnBvc3QoJy91c2VyL3VwZGF0ZV9zaGFyZV9saW5rJywgeyBzaGFyZUxpbmtzOiBzaGFyZUxpbmtzIH0sIHsgcHJlc2VydmVTY3JvbGw6IHRydWUgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChyZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFVzZXJMYXlvdXRfMVtcImRlZmF1bHRcIl0sIG51bGwsXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyB3OiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkhlYWRpbmcsIHsgYXM6ICdoNCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIGZvbnRTaXplOiAnMjhweCcgfSwgXCJEYXNoYm9hcmRcIiksXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgXCJIZWxsbyBcIiwgYXV0aFVzZXIgPT09IG51bGwgfHwgYXV0aFVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6XHJcbiAgICAgICAgICAgICAgICBhdXRoVXNlci5maXJzdF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgXCIhIHdlbGNvbWUgdG8geW91ciBkYXNoYm9hcmRcIikpLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgdzogJ2Z1bGwnLCBtdDogJzUwcHgnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoQWNjb3VudEluZm9DYXJkc18xW1wiZGVmYXVsdFwiXSwgeyBjaGlsZFVzZXJzOiBjaGlsZFVzZXJzLCBjbGlja3M6IGNsaWNrcyB9KSksXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyB3OiAnZnVsbCcsIG10OiAnMjBweCcsIGJnOiAnd2hpdGUnLCByb3VuZGVkOiAnbWQnLCBzaGFkb3c6ICdiYXNlJywgcHQ6ICcyNXB4JywgcGI6ICcyMHB4JywgcHg6ICcxNXB4JyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSGVhZGluZywgeyBtYjogMiwgZm9udFNpemU6ICcyeGwnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiSW52aXRhdGlvbiBsaW5rXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBtYjogNSwgY29sb3I6ICdncmF5LjUwMCcgfSwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gVGVuZXR1ciwgc3VzY2lwaXQgbm9iaXMhIFBlcmZlcmVuZGlzLlwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChSZWZlcnJhbENsaXBib2FyZF8xW1wiZGVmYXVsdFwiXSwgbnVsbCksXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHk6IDMgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5CdXR0b24sIHsgY3Vyc29yOiAncG9pbnRlcicsIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNldFNoaXdBZHZhbmNlKCFzaG93QWR2YW5jZSk7IH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAhc2hvd0FkdmFuY2UgPyAnU2hvdyBhZHZhbmNlIGxpbmtzJyA6ICdIaWRlIGFkdmFuY2UgbGlua3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiKSksXHJcbiAgICAgICAgICAgIHNob3dBZHZhbmNlICYmIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHg6IDUgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHk6IDggfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCwgXCJPcmdhbmlzZSBsaW5rcyAobXVzdCBiZSBzZXBlcmF0ZWQgd2l0aCBjb21tYSlcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlJdGVtczogJ2NlbnRlcicsIGdhcDogMiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSW5wdXQsIHsgbWF4V2lkdGg6IDUwMCwgdmFsdWU6IHNoYXJlTGlua3MsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0U2hhcmVMaW5rcyhlLnRhcmdldC52YWx1ZSk7IH0sIHBsYWNlaG9sZGVyOiAnJyB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJ1dHRvbiwgeyBvbkNsaWNrOiB1cGRhdGVTaGFyZUxpbmtzIH0sIFwiVXBkYXRlXCIpKSksXHJcbiAgICAgICAgICAgICAgICBzaGFyZUxpbmtzLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChsbmssIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxuayAmJiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IGtleTogaW5kZXggfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIG51bGwsIGxuayksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoUmVmZXJyYWxDbGlwYm9hcmRfMVtcImRlZmF1bHRcIl0sIHsga2V5OiBpbmRleCwgc291cmNlOiBsbmsgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSkpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHc6ICdmdWxsJywgbXQ6ICcyMHB4JywgYmc6ICd3aGl0ZScsIHJvdW5kZWQ6ICdtZCcsIHNoYWRvdzogJ2Jhc2UnLCBwdDogJzI1cHgnLCBwYjogJzIwcHgnLCBweDogJzE1cHgnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IG1iOiAyLCBmb250U2l6ZTogJzJ4bCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJSZWNlbnQgcmVnaXN0cmF0aW9uc1wiKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChVc2Vyc0xpc3RfMVtcImRlZmF1bHRcIl0sIHsgdXNlckxpc3Q6IGNoaWxkVXNlcnMgfSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEYXNoYm9hcmQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIFVzZXJMYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTGF5b3V0cy9Vc2Vyc0xheW91dC9Vc2VyTGF5b3V0XCIpKTtcclxudmFyIEdlbmVvbG9neV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL1VzZXJQYW5lbC9HZW5lb2xvZ3kvR2VuZW9sb2d5XCIpKTtcclxudmFyIFJlZmVycmFsQ2xpcGJvYXJkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0NvbXBvbmVudHMvVXNlclBhbmVsL0Rhc2hib2FyZC9SZWZlcnJhbENsaXBib2FyZFwiKSk7XHJcbnZhciByZWFjdF8zID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7XHJcbnZhciByZWFjdF9mdWxsX3NjcmVlbl8xID0gcmVxdWlyZShcInJlYWN0LWZ1bGwtc2NyZWVuXCIpO1xyXG52YXIgYWlfMSA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTtcclxudmFyIHVzZV9yZWFjdF9zY3JlZW5zaG90XzEgPSByZXF1aXJlKFwidXNlLXJlYWN0LXNjcmVlbnNob3RcIik7XHJcbmZ1bmN0aW9uIE15R2VuZW9sb2d5KF9hKSB7XHJcbiAgICB2YXIgX2I7XHJcbiAgICB2YXIgZGF0YVNvdXJjZSA9IF9hLmRhdGFTb3VyY2U7XHJcbiAgICAvLyBjb25zdCBXSURUSCA9IDcwO1xyXG4gICAgLy8gY29uc3QgSEVJR0hUID0gODA7XHJcbiAgICB2YXIgc2NyZWVuID0gKDAsIHJlYWN0X2Z1bGxfc2NyZWVuXzEudXNlRnVsbFNjcmVlbkhhbmRsZSkoKTtcclxuICAgIGNvbnNvbGUubG9nKCdVcGRhdGVkIERhdGEgc291cmNlOiAnLCBkYXRhU291cmNlKTtcclxuICAgIHZhciByZWYgPSAoMCwgcmVhY3RfMi5jcmVhdGVSZWYpKCk7XHJcbiAgICB2YXIgX2MgPSAoMCwgdXNlX3JlYWN0X3NjcmVlbnNob3RfMS51c2VTY3JlZW5zaG90KSh7XHJcbiAgICAgICAgdHlwZTogXCJpbWFnZS9qcGVnXCIsXHJcbiAgICAgICAgcXVhbGl0eTogMS4wXHJcbiAgICB9KSwgdGFrZVNjcmVlblNob3QgPSBfY1sxXTtcclxuICAgIHZhciBkb3dubG9hZCA9IGZ1bmN0aW9uIChpbWFnZSwgX2EpIHtcclxuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgX2MgPSBfYi5uYW1lLCBuYW1lID0gX2MgPT09IHZvaWQgMCA/IFwiZ2VuZW9sb2d5XCIgOiBfYywgX2QgPSBfYi5leHRlbnNpb24sIGV4dGVuc2lvbiA9IF9kID09PSB2b2lkIDAgPyBcImpwZ1wiIDogX2Q7XHJcbiAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhLmhyZWYgPSBpbWFnZTtcclxuICAgICAgICBhLmRvd25sb2FkID0gKDAsIHVzZV9yZWFjdF9zY3JlZW5zaG90XzEuY3JlYXRlRmlsZU5hbWUpKGV4dGVuc2lvbiwgbmFtZSk7XHJcbiAgICAgICAgYS5jbGljaygpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgICB2YXIgZG93bmxvYWRTY3JlZW5zaG90ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGFrZVNjcmVlblNob3QocmVmLmN1cnJlbnQpLnRoZW4oZG93bmxvYWQpOyB9O1xyXG4gICAgKDAsIHJlYWN0XzIudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGFTb3VyY2U6ICcsIHNjcmVlbik7XHJcbiAgICB9LCBbc2NyZWVuXSk7XHJcbiAgICB2YXIgX2QgPSAoMCwgcmVhY3RfMi51c2VTdGF0ZSkoZmFsc2UpLCBlbmFibGVab29tID0gX2RbMF0sIHNldEVuYWJsZVpvb20gPSBfZFsxXTtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChVc2VyTGF5b3V0XzFbXCJkZWZhdWx0XCJdLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIG51bGwsXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IGFzOiAnaDQnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBmb250U2l6ZTogJzI4cHgnIH0sIFwiTXkgR2VuZW9sb2d5XCIpKSxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0X2Z1bGxfc2NyZWVuXzEuRnVsbFNjcmVlbiwgeyBoYW5kbGU6IHNjcmVlbiB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHB5OiA1LCBweDogNSwgYmc6ICd3aGl0ZScsIG10OiAnMzBweCcgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Gb3JtQ29udHJvbCwgeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Gb3JtTGFiZWwsIHsgaHRtbEZvcjogJ2VtYWlsLWFsZXJ0cycsIG1iOiAnMCcgfSwgXCJFbmFibGUgWm9vbWluZ1wiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8zLlN3aXRjaCwgeyBvbkNoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0RW5hYmxlWm9vbSghZW5hYmxlWm9vbSk7IH0sIGlkOiAnZW1haWwtYWxlcnRzJyB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb24sIHsgZm9udFNpemU6ICcyMnB4JywgbXI6IDUsIGN1cnNvcjogJ3BvaW50ZXInLCBvbkNsaWNrOiBkb3dubG9hZFNjcmVlbnNob3QsIGFzOiBhaV8xLkFpT3V0bGluZURvd25sb2FkIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbi5hY3RpdmUgPT0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSWNvbiwgeyBmb250U2l6ZTogJzIycHgnLCBjdXJzb3I6ICdwb2ludGVyJywgb25DbGljazogc2NyZWVuLmVudGVyLCBhczogYWlfMS5BaU91dGxpbmVGdWxsc2NyZWVuIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkljb24sIHsgZm9udFNpemU6ICcyMnB4JywgY3Vyc29yOiAncG9pbnRlcicsIG9uQ2xpY2s6IHNjcmVlbi5leGl0LCBhczogYWlfMS5BaU91dGxpbmVGdWxsc2NyZWVuRXhpdCB9KSkpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJzEwMCUnLCBtaW5IZWlnaHQ6IHNjcmVlbi5hY3RpdmUgPyAnMTAwdmgnIDogJzEwMHZoJywgYmc6ICd3aGl0ZScsIHJvdW5kZWQ6ICdiYXNlJywgc2hhZG93OiAnYmFzZScsIG92ZXJmbG93OiAnYXV0bycgfSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJlZjogcmVmIH0sICgoX2IgPSBkYXRhU291cmNlID09PSBudWxsIHx8IGRhdGFTb3VyY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFTb3VyY2UuY2hpbGRyZW4pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEdlbmVvbG9neV8xW1wiZGVmYXVsdFwiXSwgeyBlbmFibGVab29tOiBlbmFibGVab29tLCBkYXRhU291cmNlOiBkYXRhU291cmNlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgOiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyBkaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDIsIHA6IDUgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgZm9udFNpemU6ICd4bCcsIGZvbnRXZWlnaHQ6ICdib2xkJywgY29sb3I6ICdncmF5LjYwMCcgfSwgXCJZb3VyIGdlbmVvbG9neSBpcyBlbXB0eVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgZm9udFNpemU6ICdtZCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcsIGNvbG9yOiAnZ3JheS40MDAnIH0sIFwiU3RhcnQgc2hhcmluZyB5b3VyIGludml0YXRpb24gbGluayB0byBtYWtlIHlvdXIgZ2VuZW9sb2d5XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFJlZmVycmFsQ2xpcGJvYXJkXzFbXCJkZWZhdWx0XCJdLCBudWxsKSkpKSkpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE15R2VuZW9sb2d5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxudmFyIHJlYWN0XzEgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTtcclxudmFyIHJlYWN0XzIgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcclxudmFyIFVzZXJzTGlzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL1VzZXJQYW5lbC9EYXNoYm9hcmQvVXNlcnNMaXN0XCIpKTtcclxudmFyIFVzZXJMYXlvdXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vTGF5b3V0cy9Vc2Vyc0xheW91dC9Vc2VyTGF5b3V0XCIpKTtcclxuZnVuY3Rpb24gTXlOZXR3b3JrKF9hKSB7XHJcbiAgICB2YXIgY2hpbGRVc2VycyA9IF9hLmNoaWxkVXNlcnM7XHJcbiAgICByZXR1cm4gKHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoVXNlckxheW91dF8xW1wiZGVmYXVsdFwiXSwgbnVsbCxcclxuICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCBudWxsLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSGVhZGluZywgeyBhczogJ2g0JywgZm9udFdlaWdodDogJ3NlbWlib2xkJywgZm9udFNpemU6ICcyOHB4JyB9LCBcIk15IE5ldHdvcmtcIikpLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgdzogJ2Z1bGwnLCBtdDogJzEwMHB4JywgYmc6ICd3aGl0ZScsIHJvdW5kZWQ6ICdtZCcsIHNoYWRvdzogJ2Jhc2UnLCBwdDogJzI1cHgnLCBwYjogJzIwcHgnLCBweDogJzE1cHgnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IG1iOiAyLCBmb250U2l6ZTogJzJ4bCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJNeSBOZXR3b3JrXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFVzZXJzTGlzdF8xW1wiZGVmYXVsdFwiXSwgeyB1c2VyTGlzdDogY2hpbGRVc2VycyB9KSkpKTtcclxufVxyXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE15TmV0d29yaztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgcmVhY3RfMiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgQWNjb3VudEluZm9DaGFydF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL1VzZXJQYW5lbC9EYXNoYm9hcmQvQWNjb3VudEluZm9DaGFydFwiKSk7XHJcbnZhciBVc2Vyc0xpc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vQ29tcG9uZW50cy9Vc2VyUGFuZWwvRGFzaGJvYXJkL1VzZXJzTGlzdFwiKSk7XHJcbnZhciBVc2VyTGF5b3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL0xheW91dHMvVXNlcnNMYXlvdXQvVXNlckxheW91dFwiKSk7XHJcbmZ1bmN0aW9uIE15U3RhdGlzdGljcyhfYSkge1xyXG4gICAgdmFyIGNoaWxkVXNlcnMgPSBfYS5jaGlsZFVzZXJzLCBjbGlja3NCeVNoYXJlTGlua3MgPSBfYS5jbGlja3NCeVNoYXJlTGlua3M7XHJcbiAgICAoMCwgcmVhY3RfMi51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY2hpbGRVc2VyczogJywgY2xpY2tzQnlTaGFyZUxpbmtzKTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChVc2VyTGF5b3V0XzFbXCJkZWZhdWx0XCJdLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgdzogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IGFzOiAnaDQnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBmb250U2l6ZTogJzI4cHgnIH0sIFwiTXkgU3RhdGlzdGljc1wiKSksXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyBtdDogJzUwcHgnLCB3OiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChBY2NvdW50SW5mb0NoYXJ0XzFbXCJkZWZhdWx0XCJdLCBudWxsKSksXHJcbiAgICAgICAgY2xpY2tzQnlTaGFyZUxpbmtzLmxlbmd0aCAmJiByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHc6ICdmdWxsJywgbXQ6ICcyMHB4JywgYmc6ICd3aGl0ZScsIHJvdW5kZWQ6ICdtZCcsIHNoYWRvdzogJ2Jhc2UnLCBwdDogJzI1cHgnLCBwYjogJzIwcHgnLCBweDogJzE1cHgnIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IG1iOiA1LCBmb250U2l6ZTogJzJ4bCcsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJDbGlja3MgYnkgc2hhcmUgb3B0aW9uc1wiKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlN0YWNrLCB7IGRpcmVjdGlvbjogJ3JvdycgfSwgY2xpY2tzQnlTaGFyZUxpbmtzLm1hcChmdW5jdGlvbiAobGluaywgaW5kZXgpIHsgcmV0dXJuIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UYWcsIHsga2V5OiBpbmRleCwgc2l6ZTogJ2xnJywgdmFyaWFudDogJ3N1YnRsZScsIGNvbG9yU2NoZW1lOiAnbGlua2VkaW4nIH0sXHJcbiAgICAgICAgICAgICAgICBsaW5rLnNvdXJjZSxcclxuICAgICAgICAgICAgICAgIFwiIH4gXCIsXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250U2l6ZTogJzIwcHgnLCBtbDogMiwgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9LCBsaW5rLnRvdGFsKSk7IH0pKSksXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJveCwgeyB3OiAnZnVsbCcsIG10OiAnMjBweCcsIGJnOiAnd2hpdGUnLCByb3VuZGVkOiAnbWQnLCBzaGFkb3c6ICdiYXNlJywgcHQ6ICcyNXB4JywgcGI6ICcyMHB4JywgcHg6ICcxNXB4JyB9LFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuSGVhZGluZywgeyBtYjogMiwgZm9udFNpemU6ICcyeGwnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiQWxsIGFmZmlsaWF0ZSByZWdpc3RyYXRpb25zXCIpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBtYjogNSwgY29sb3I6ICdncmF5LjUwMCcgfSwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gVGVuZXR1ciwgc3VzY2lwaXQgbm9iaXMhIFBlcmZlcmVuZGlzLlwiKSxcclxuICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChVc2Vyc0xpc3RfMVtcImRlZmF1bHRcIl0sIHsgdXNlckxpc3Q6IGNoaWxkVXNlcnMgfSkpKSk7XHJcbn1cclxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNeVN0YXRpc3RpY3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG52YXIgcmVhY3RfMSA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpO1xyXG52YXIgbW9tZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm1vbWVudFwiKSk7XHJcbnZhciByZWFjdF8yID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBVc2VyTGF5b3V0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uLy4uL0xheW91dHMvVXNlcnNMYXlvdXQvVXNlckxheW91dFwiKSk7XHJcbmZ1bmN0aW9uIFByb2ZpbGVQYWdlKF9hKSB7XHJcbiAgICB2YXIgbGV2ZWxzID0gX2EubGV2ZWxzLCB1c2VyID0gX2EudXNlcjtcclxuICAgIHJldHVybiAocmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChVc2VyTGF5b3V0XzFbXCJkZWZhdWx0XCJdLCBudWxsLFxyXG4gICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIG51bGwsXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5IZWFkaW5nLCB7IGFzOiAnaDQnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnLCBmb250U2l6ZTogJzI4cHgnIH0sIFwiTXkgUHJvZmlsZVwiKSksXHJcbiAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgY29sb3I6ICdncmF5LjcwMCcsIGdhcDogMywgbXQ6IDEwIH0sXHJcbiAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IGhlaWdodDogJzI1MHB4JywgZmxleDogJzEnLCBqdXN0aWZ5OiAnY2VudGVyJywgZGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHA6IDUsIGJnOiAnd2hpdGUnIH0sXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQXZhdGFyLCB7IHNpemU6ICcyeGwnLCBtYjogMiwgbmFtZTogXCJcIi5jb25jYXQodXNlci5maXJzdF9uYW1lLCBcIiBcIikuY29uY2F0KHVzZXIubGFzdF9uYW1lKSwgc3JjOiAnJyB9KSxcclxuICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGFzOiAnaDInLCBmb250U2l6ZTogJzJ4bCcgfSwgXCJcIi5jb25jYXQodXNlci5maXJzdF9uYW1lLCBcIiBcIikuY29uY2F0KHVzZXIubGFzdF9uYW1lKSksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBhczogJ3AnIH0sIHVzZXIuZmlyc3RfbmFtZSkpLFxyXG4gICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IGZsZXg6ICczJywgcHk6IDMsIHB4OiA1LCBiZzogJ3doaXRlJyB9LFxyXG4gICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgYXM6ICdoMicsIGZvbnRTaXplOiAneGwnLCBmb250V2VpZ2h0OiAnYm9sZCcgfSwgXCJBY2NvdW50IGRldGFpbHNcIiksXHJcbiAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuQm94LCB7IHc6ICcxMDAlJywgbXQ6IDQgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyB3OiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHA6IDIsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMmQzNzQ4MTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJKb2luIERhdGFcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLCAoMCwgbW9tZW50XzFbXCJkZWZhdWx0XCJdKSh1c2VyLmNyZWF0ZWRBdCkuZm9ybWF0KCdsJykpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyB3OiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHA6IDIsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMmQzNzQ4MTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJUb3RhbCByZWZlcmVuY2VzXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCwgXCI2IG1lbWJlcnNcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IHc6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ246ICdjZW50ZXInLCBwOiAyLCBib3JkZXJCb3R0b206ICcwcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiUGFja2FnZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkJhZGdlLCB7IGNvbG9yU2NoZW1lOiAncHVycGxlJywgdmFyaWFudDogJ3NvbGlkJyB9LCB1c2VyLnBhY2thZ2UucGFja2FnZSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5Cb3gsIHsgcHQ6IDMsIHBiOiAzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGZvbnRTaXplOiAneGwnLCBmb250V2VpZ2h0OiAnYm9sZCcgfSwgXCJMZXZlbCBzdGF0aXN0aWNzXCIpKSxcclxuICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuRmxleCwgeyB3OiAnMTAwJScsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHB4OiAyLCBweTogJzJweCcsIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjMmQzNzQ4MTQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCB7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfSwgXCJMZXZlbCBPbmVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxzLmxldmVsT25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgbWVtYmVyc1wiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBweDogMiwgcHk6ICcycHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiTGV2ZWwgVHdvXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVscy5sZXZlbFR3byxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG1lbWJlcnNcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IHc6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgcHg6IDIsIHB5OiAnMnB4JywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICMyZDM3NDgxNCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIHsgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9LCBcIkxldmVsIFRocmVlXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVscy5sZXZlbFRocmVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgbWVtYmVyc1wiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBweDogMiwgcHk6ICcycHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiTGV2ZWwgRm91clwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbHMubGV2ZWxGb3VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgbWVtYmVyc1wiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBweDogMiwgcHk6ICcycHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiTGV2ZWwgRml2ZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLlRleHQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbHMubGV2ZWxGaXZlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgbWVtYmVyc1wiKSksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhY3RfMltcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChyZWFjdF8xLkZsZXgsIHsgdzogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBweDogMiwgcHk6ICcycHgnLCBib3JkZXJCb3R0b206ICcxcHggc29saWQgIzJkMzc0ODE0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiTGV2ZWwgU2l4XCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVscy5sZXZlbFNpeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG1lbWJlcnNcIikpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5GbGV4LCB7IHc6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgcHg6IDIsIHB5OiAnMnB4JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFjdF8yW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHJlYWN0XzEuVGV4dCwgeyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH0sIFwiTGV2ZWwgU2V2ZW5cIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0XzJbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQocmVhY3RfMS5UZXh0LCBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWxzLmxldmVsU2V2ZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBtZW1iZXJzXCIpKSkpKSkpO1xyXG59XHJcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUHJvZmlsZVBhZ2U7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLWJkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi1iZC5qc1wiLFxuXHRcIi4vYm4tYmQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLWJkLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1hdVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWdiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1pZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbi5qc1wiLFxuXHRcIi4vZW4taW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWluLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW4tc2dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLXNnLmpzXCIsXG5cdFwiLi9lbi1zZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tc2cuanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1teFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtbXguanNcIixcblx0XCIuL2VzLW14LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1teC5qc1wiLFxuXHRcIi4vZXMtdXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9mYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9maS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmlsLmpzXCIsXG5cdFwiLi9maWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpbC5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2EuanNcIixcblx0XCIuL2dhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2RcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dkLmpzXCIsXG5cdFwiLi9nZC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nbC5qc1wiLFxuXHRcIi4vZ2wuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nb20tZGV2YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWRldmEuanNcIixcblx0XCIuL2dvbS1kZXZhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tZGV2YS5qc1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ29tLWxhdG4uanNcIixcblx0XCIuL2d1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vZ3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2d1LmpzXCIsXG5cdFwiLi9oZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oZS5qc1wiLFxuXHRcIi4vaGlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGkuanNcIixcblx0XCIuL2hyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hyLmpzXCIsXG5cdFwiLi9odVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9odS5qc1wiLFxuXHRcIi4vaHktYW1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHktYW0uanNcIixcblx0XCIuL2lkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaWQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lkLmpzXCIsXG5cdFwiLi9pc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2lzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pcy5qc1wiLFxuXHRcIi4vaXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9pdC1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC1jaC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9rdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3UuanNcIixcblx0XCIuL2t5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4va3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9sYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2x0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL2x2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9tZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21pXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9ta1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21rLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21yLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tcy1teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLW15LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLmpzXCIsXG5cdFwiLi9tdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL210LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL25iXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ubC1iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLmpzXCIsXG5cdFwiLi9ublwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL25uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vb2MtbG5jXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9vYy1sbmMuanNcIixcblx0XCIuL29jLWxuYy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvb2MtbG5jLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RrLmpzXCIsXG5cdFwiLi90ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGsuanNcIixcblx0XCIuL3RsLXBoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGwtcGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdGxoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90emxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHpsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi90em0tbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3VnLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWctY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91a1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3V6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXotbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXotbGF0bi5qc1wiLFxuXHRcIi4vdXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi92aVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4veC1wc2V1ZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi94LXBzZXVkby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3lvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4veW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi96aC1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtaGtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC1oay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLW1vXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1tby5qc1wiLFxuXHRcIi4vemgtbW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLW1vLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0Fib3V0VXNcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQWJvdXRVcy50c3hcIixcblx0XCIuL0Fib3V0VXMudHN4XCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0Fib3V0VXMudHN4XCIsXG5cdFwiLi9BZG1pbi9EYXNoYm9hcmRcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQWRtaW4vRGFzaGJvYXJkLnRzeFwiLFxuXHRcIi4vQWRtaW4vRGFzaGJvYXJkLnRzeFwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9EYXNoYm9hcmQudHN4XCIsXG5cdFwiLi9BZG1pbi9NeUdlbmVvbG9neVwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9NeUdlbmVvbG9neS50c3hcIixcblx0XCIuL0FkbWluL015R2VuZW9sb2d5LnRzeFwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9NeUdlbmVvbG9neS50c3hcIixcblx0XCIuL0FkbWluL015U3RhdGlzdGljc1wiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9NeVN0YXRpc3RpY3MudHN4XCIsXG5cdFwiLi9BZG1pbi9NeVN0YXRpc3RpY3MudHN4XCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0FkbWluL015U3RhdGlzdGljcy50c3hcIixcblx0XCIuL0FkbWluL1BhY2thZ2VzL0luZGV4XCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0FkbWluL1BhY2thZ2VzL0luZGV4LnRzeFwiLFxuXHRcIi4vQWRtaW4vUGFja2FnZXMvSW5kZXgudHN4XCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0FkbWluL1BhY2thZ2VzL0luZGV4LnRzeFwiLFxuXHRcIi4vQWRtaW4vUHJvZHVjdC9DcmVhdGVcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQWRtaW4vUHJvZHVjdC9DcmVhdGUudHN4XCIsXG5cdFwiLi9BZG1pbi9Qcm9kdWN0L0NyZWF0ZS50c3hcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQWRtaW4vUHJvZHVjdC9DcmVhdGUudHN4XCIsXG5cdFwiLi9BZG1pbi9Qcm9kdWN0L0xpc3RcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQWRtaW4vUHJvZHVjdC9MaXN0LnRzeFwiLFxuXHRcIi4vQWRtaW4vUHJvZHVjdC9MaXN0LnRzeFwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9Qcm9kdWN0L0xpc3QudHN4XCIsXG5cdFwiLi9BZG1pbi9Vc2VyXCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0FkbWluL1VzZXIudHN4XCIsXG5cdFwiLi9BZG1pbi9Vc2VyLnRzeFwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BZG1pbi9Vc2VyLnRzeFwiLFxuXHRcIi4vQWRtaW4vVXNlcnNcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQWRtaW4vVXNlcnMudHN4XCIsXG5cdFwiLi9BZG1pbi9Vc2Vycy50c3hcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQWRtaW4vVXNlcnMudHN4XCIsXG5cdFwiLi9BdXRoL0xvZ2luXCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0F1dGgvTG9naW4udHN4XCIsXG5cdFwiLi9BdXRoL0xvZ2luLnRzeFwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BdXRoL0xvZ2luLnRzeFwiLFxuXHRcIi4vQXV0aC9SZWdpc3RlclwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9BdXRoL1JlZ2lzdGVyLnRzeFwiLFxuXHRcIi4vQXV0aC9SZWdpc3Rlci50c3hcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQXV0aC9SZWdpc3Rlci50c3hcIixcblx0XCIuL0Jsb2dcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvQmxvZy50c3hcIixcblx0XCIuL0Jsb2cudHN4XCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0Jsb2cudHN4XCIsXG5cdFwiLi9Ib21lXCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL0hvbWUudHN4XCIsXG5cdFwiLi9Ib21lLnRzeFwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9Ib21lLnRzeFwiLFxuXHRcIi4vUHJvZHVjdHNcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvUHJvZHVjdHMudHN4XCIsXG5cdFwiLi9Qcm9kdWN0cy50c3hcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvUHJvZHVjdHMudHN4XCIsXG5cdFwiLi9UZXN0L1Rlc3RSZWFjdFwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9UZXN0L1Rlc3RSZWFjdC50c3hcIixcblx0XCIuL1Rlc3QvVGVzdFJlYWN0LnRzeFwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9UZXN0L1Rlc3RSZWFjdC50c3hcIixcblx0XCIuL1VzZXJzL0Rhc2hib2FyZFwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9Vc2Vycy9EYXNoYm9hcmQudHN4XCIsXG5cdFwiLi9Vc2Vycy9EYXNoYm9hcmQudHN4XCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL1VzZXJzL0Rhc2hib2FyZC50c3hcIixcblx0XCIuL1VzZXJzL015R2VuZW9sb2d5XCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL1VzZXJzL015R2VuZW9sb2d5LnRzeFwiLFxuXHRcIi4vVXNlcnMvTXlHZW5lb2xvZ3kudHN4XCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL1VzZXJzL015R2VuZW9sb2d5LnRzeFwiLFxuXHRcIi4vVXNlcnMvTXlOZXR3b3JrXCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL1VzZXJzL015TmV0d29yay50c3hcIixcblx0XCIuL1VzZXJzL015TmV0d29yay50c3hcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvVXNlcnMvTXlOZXR3b3JrLnRzeFwiLFxuXHRcIi4vVXNlcnMvTXlTdGF0aXN0aWNzXCI6IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzL1VzZXJzL015U3RhdGlzdGljcy50c3hcIixcblx0XCIuL1VzZXJzL015U3RhdGlzdGljcy50c3hcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvVXNlcnMvTXlTdGF0aXN0aWNzLnRzeFwiLFxuXHRcIi4vVXNlcnMvUHJvZmlsZS9Qcm9maWxlUGFnZVwiOiBcIi4vcmVzb3VyY2VzL2pzL3NyYy9QYWdlcy9Vc2Vycy9Qcm9maWxlL1Byb2ZpbGVQYWdlLnRzeFwiLFxuXHRcIi4vVXNlcnMvUHJvZmlsZS9Qcm9maWxlUGFnZS50c3hcIjogXCIuL3Jlc291cmNlcy9qcy9zcmMvUGFnZXMvVXNlcnMvUHJvZmlsZS9Qcm9maWxlUGFnZS50c3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9yZXNvdXJjZXMvanMvc3JjL1BhZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuY3NzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImFkb25pc21sbTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hc3NldHMvXCI7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2Fkb25pc21sbVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthZG9uaXNtbG1cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2FudC1kZXNpZ25faWNvbnNfZXNfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2NoYWtyYS11aV9yZWFjdF9kaXN0X2NoYWtyYS11aS1mZmY1YmRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9yZXNvdXJjZXMvanMvYXBwLnRzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIl9fY3JlYXRlQmluZGluZyIsIk9iamVjdCIsImNyZWF0ZSIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19zZXRNb2R1bGVEZWZhdWx0IiwidiIsInZhbHVlIiwiX19pbXBvcnRTdGFyIiwibW9kIiwiX19lc01vZHVsZSIsInJlc3VsdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9faW1wb3J0RGVmYXVsdCIsImV4cG9ydHMiLCJ0aGVtZSIsInJlcXVpcmUiLCJpbmVydGlhX3JlYWN0XzEiLCJyZWFjdF8xIiwicmVhY3RfZG9tXzEiLCJyZWFjdF8yIiwicmVhY3RfMyIsIm5wcm9ncmVzc18xIiwiaW5lcnRpYV8xIiwicmVhY3RfbW9yYWxpc18xIiwidGltZW91dCIsIkluZXJ0aWEiLCJvbiIsInNldFRpbWVvdXQiLCJzdGFydCIsImV2ZW50IiwiX2EiLCJfYiIsImlzU3RhcnRlZCIsImRldGFpbCIsInByb2dyZXNzIiwicGVyY2VudGFnZSIsInNldCIsImNsZWFyVGltZW91dCIsInZpc2l0IiwiY29tcGxldGVkIiwiZG9uZSIsImludGVycnVwdGVkIiwiY2FuY2VsbGVkIiwicmVtb3ZlIiwidmFyaWFudE91dGxpbmVkIiwiZmllbGQiLCJfZm9jdXMiLCJib3JkZXJDb2xvciIsImJveFNoYWRvdyIsInZhcmlhbnRGaWxsZWQiLCJ2YXJpYW50Rmx1c2hlZCIsImV4dGVuZFRoZW1lIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInNoYWRvd3MiLCJvdXRsaW5lIiwiY29tcG9uZW50cyIsIklucHV0IiwidmFyaWFudHMiLCJmaWxsZWQiLCJmbHVzaGVkIiwiU2VsZWN0IiwiVGV4dGFyZWEiLCJlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiTW9yYWxpc1Byb3ZpZGVyIiwic2VydmVyVXJsIiwiYXBwSWQiLCJDaGFrcmFQcm92aWRlciIsIkluZXJ0aWFBcHAiLCJpbml0aWFsUGFnZSIsIkpTT04iLCJwYXJzZSIsImRhdGFzZXQiLCJwYWdlIiwicmVzb2x2ZUNvbXBvbmVudCIsIm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJjb25jYXQiLCJtb2R1bGUiLCJpbml0aWFsQ29tcG9uZW50IiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibiIsIm9wIiwiVHlwZUVycm9yIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsImF4aW9zXzEiLCJyZWFjdF9hcGV4Y2hhcnRzXzEiLCJJbnZpdGF0aW9uQ2xpY2tzIiwidXNlU3RhdGUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImNoYXJ0RGF0YSIsInNldENoYXJ0RGF0YSIsIl9jIiwiY2xpY2tDb3VudCIsInNldENsaWNrQ291bnQiLCJfZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib3B0aW9ucyIsImNoYXJ0IiwiaWQiLCJ3aWR0aCIsInhheGlzIiwiY29sb3JzIiwic2VyaWVzIiwiZGF0YSIsIl9lIiwib3B0aW9uIiwic2V0T3B0aW9uIiwidXNlRWZmZWN0IiwiZ2V0U3RhdGlzdGljcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJGcmFnbWVudCIsIkJveCIsInBiIiwibWIiLCJib3JkZXJCb3R0b20iLCJjaGFrcmEiLCJwIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsInVzZUNvbG9yTW9kZVZhbHVlIiwiRmxleCIsImp1c3RpZnkiLCJUZXh0IiwibGluZUhlaWdodCIsInNwYW4iLCJvbkNoYW5nZSIsInRhcmdldCIsInciLCJzaXplIiwiQ2VudGVyIiwiaCIsIlNwaW5uZXIiLCJ0eXBlIiwiSW52aXRhdGlvblJlZ2lzdHJhdGlvbnMiLCJyZWdpc3RlckNvdW50Iiwic2V0UmVnaXN0ZXJDb3VudCIsIkFjY291bnRJbmZvQ2FyZHMiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJHcmlkIiwidGVtcGxhdGVSb3dzIiwidGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwidGV4dEFsaWduIiwiR3JpZEl0ZW0iLCJiZyIsInB4IiwicHkiLCJzaGFkb3ciLCJyb3VuZGVkIiwiU3RhY2siLCJkaXNwbGF5Iiwic3BhY2luZyIsImRpcmVjdGlvbiIsIkxpbmsiLCJocmVmIiwiYm9yZGVyIiwiX2hvdmVyIiwiSW52aXRhdGlvbkNsaWNrc18xIiwiSW52aXRhdGlvblJlZ2lzdHJhdGlvbnNfMSIsIkFjY291bnRJbmZvQ2hhcnQiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInMiLCJpIiwiYXJndW1lbnRzIiwiY2dfMSIsIk5vRGF0YUZvdW5kXzEiLCJQYWNrYWdlTGlzdCIsInBhY2thZ2VzIiwiZWRpdFJhbmsiLCJzZXRFZGl0UmFuayIsImhhbmRsZUVkaXRSYW5rIiwicGtnIiwic2F2ZUVkaXRlZFJhbmsiLCJwb3N0IiwicGFrYWdlIiwicHJlc2VydmVTY3JvbGwiLCJhcyIsIm92ZXJmbG93WCIsIlRhYmxlIiwidmFyaWFudCIsIlRoZWFkIiwiVHIiLCJUaCIsImlzTnVtZXJpYyIsIlRib2R5IiwibWFwIiwiaW5kZXgiLCJrZXkiLCJUZCIsImp1c3RpZnlTZWxmIiwibGV2ZWxfb25lIiwibGV2ZWxfdHdvIiwibGV2ZWxfdGhyZWUiLCJsZXZlbF9mb3VyIiwibGV2ZWxfZml2ZSIsImxldmVsX3NpeCIsImxldmVsX3NldmVuIiwiVG9vbHRpcCIsImhhc0Fycm93IiwiQnV0dG9uIiwiY29sb3JTY2hlbWUiLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsImljb24iLCJDZ0RldGFpbHNNb3JlIiwibW9tZW50XzEiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwicHJvZHVjdCIsIkltYWdlIiwic3JjIiwiaW1hZ2UiLCJwcmljZSIsImNyZWF0ZWRfYXQiLCJmb3JtYXQiLCJVc2Vyc0xpc3QiLCJ1c2VyTGlzdCIsInVzZXIiLCJhbGlnbiIsIkF2YXRhciIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJyZWZfaWQiLCJwYXJlbnQiLCJjaGlsZHJlbiIsIkZsYXNoTWVzc2FnZXMiLCJmbGFzaCIsInRvYXN0IiwidXNlVG9hc3QiLCJpc0FjdGl2ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJpc0Nsb3NhYmxlIiwiTWFpbkxvZ28iLCJoZWlnaHQiLCJhbHQiLCJOb0RhdGFGb3VuZCIsImNoaWxkVXNlcnMiLCJjbGlja3MiLCJjb2xTcGFuIiwiaGlfMSIsIlJlZmVycmFsQ2xpcGJvYXJkIiwic291cmNlIiwiYXV0aFVzZXIiLCJ1c2VQYWdlIiwicHJvcHMiLCJzZXRWYWx1ZSIsInVzZUNsaXBib2FyZCIsImhhc0NvcGllZCIsIm9uQ29weSIsIndpbmRvdyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsImlzUmVhZE9ubHkiLCJwbGFjZWhvbGRlciIsIm1sIiwiSWNvbiIsIkhpQ2xpcGJvYXJkQ2hlY2siLCJIaUNsaXBib2FyZENvcHkiLCJyZWFjdF9vcmdjaGFydF8xIiwibXlfbm9kZV8xIiwiR2VuZW9sb2d5IiwiZW5hYmxlWm9vbSIsImRhdGFTb3VyY2UiLCJkYXRhc291cmNlIiwiY2hhcnRDbGFzcyIsIk5vZGVUZW1wbGF0ZSIsInBhbiIsInpvb20iLCJwcm9wX3R5cGVzXzEiLCJwcm9wVHlwZXMiLCJub2RlRGF0YSIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJNeU5vZGUiLCJzZWxlY3ROb2RlIiwibGV2ZWxQZXJjZW50Iiwic2V0UGVyY2VudCIsImxldmVsIiwiY2xhc3NOYW1lIiwicHVyY2hhc2VkIiwiRm9vdGVyXzEiLCJTaWRlTWVudV8xIiwiVG9wTmF2aWdhdGlvbl8xIiwiQWRtaW5MYXlvdXQiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ0b2dnbGVDb2xsYXBzZWQiLCJ6SW5kZXgiLCJwdCIsIm92ZXJmbG93Iiwic3R5bGUiLCJwb3NpdGlvbiIsIm92ZXJmbG93WSIsIm1pbkgiLCJkcm9wU2hhZG93IiwiRm9vdGVyIiwiYW50ZF8xIiwiaWNvbnNfMSIsImFpXzEiLCJiaV8xIiwiZmlfMSIsIlN1Yk1lbnUiLCJNZW51IiwiU2lkZU1lbnUiLCJtb2RlIiwiaW5saW5lQ29sbGFwc2VkIiwiYmFja2dyb3VuZCIsIkl0ZW0iLCJBaU91dGxpbmVEYXNoYm9hcmQiLCJCaVN0YXRzIiwiQmlDYXRlZ29yeUFsdCIsIkZpVXNlcnMiLCJBcHBzdG9yZU91dGxpbmVkIiwiTWFpbkxvZ29fMSIsImJzXzEiLCJUb3BOYXZpZ2F0aW9uIiwiQ29udGFpbmVyIiwibWF4VyIsIkhTdGFjayIsImN1cnNvciIsIm1yIiwiQnNUZXh0TGVmdCIsIkJzVGV4dENlbnRlciIsIk1lbnVCdXR0b24iLCJNZW51TGlzdCIsIk1lbnVJdGVtIiwibWV0aG9kIiwiQmlQb3dlck9mZiIsIkd1ZXN0TGF5b3V0Iiwic3VjY2Vzc01zZyIsImZhXzEiLCJCaUhvbWVBbHQiLCJCc0NhcnRDaGVjayIsIkZhQmxvZyIsIkZsYXNoTWVzc2FnZV8xIiwiVXNlckxheW91dCIsImltXzEiLCJJbVRyZWUiLCJCaU5ldHdvcmtDaGFydCIsIm1vcmFsaXNfMSIsIl90aGlzIiwidXNlTW9yYWxpcyIsImF1dGhlbnRpY2F0ZSIsImlzQXV0aGVudGljYXRlZCIsImNvbm5lY3RNZXRhTWFzayIsInByb3ZpZGVyIiwiZXJyb3IiLCJkaXNzQ29ubmVjdCIsIlVzZXIiLCJsb2dPdXQiLCJwYXRobmFtZSIsIkJpQ29nIiwiQmlMb2NrT3BlbiIsIkd1ZXN0TGF5b3V0XzEiLCJBYm91dFVzIiwiQWNjb3VudEluZm9DYXJkc18xIiwiVXNlcnNMaXN0XzEiLCJBZG1pbkxheW91dF8xIiwiRGFzaGJvYXJkIiwidXNlcnMiLCJIZWFkaW5nIiwibXQiLCJNeUdlbmVvbG9neSIsIkFjY291bnRJbmZvQ2hhcnRfMSIsIk15U3RhdGlzdGljcyIsIlBhY2thZ2VMaXN0XzEiLCJJbmRleCIsIkNyZWF0ZSIsInVzZUZvcm0iLCJjb250ZW50Iiwic2V0RGF0YSIsInByb2Nlc3NpbmciLCJoYW5kbGVDcmVhdGUiLCJTaW1wbGVHcmlkIiwiY29sdW1ucyIsImJhc2UiLCJtZCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiaHRtbEZvciIsIlByb2R1Y3RMaXN0XzEiLCJMaXN0IiwicmVhY3RfZnVsbF9zY3JlZW5fMSIsIkdlbmVvbG9neV8xIiwidXNlX3JlYWN0X3NjcmVlbnNob3RfMSIsInVzZV9yZWFjdF9zY3JlZW5zaG90XzIiLCJsZXZlbHMiLCJ0b3RhbFJlZmVyZW5jZXMiLCJ1c2VEaXNjbG9zdXJlIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInNjcmVlbiIsInVzZUZ1bGxTY3JlZW5IYW5kbGUiLCJzZWxlY3RlZFJhbmsiLCJzZXRTZWxlY3RlZFJhbmsiLCJyZWYiLCJjcmVhdGVSZWYiLCJfZiIsInVzZVNjcmVlbnNob3QiLCJxdWFsaXR5IiwidGFrZVNjcmVlblNob3QiLCJkb3dubG9hZCIsImV4dGVuc2lvbiIsImEiLCJjcmVhdGVGaWxlTmFtZSIsImNsaWNrIiwiZG93bmxvYWRTY3JlZW5zaG90IiwiY3VycmVudCIsIl9nIiwic2V0RW5hYmxlWm9vbSIsImhhbmRsZUNobmFnZVJhbmsiLCJhbGVydCIsInVzZXJJZCIsImZsZXgiLCJjcmVhdGVkQXQiLCJlbWFpbCIsIkJhZGdlIiwiTW9kYWwiLCJNb2RhbE92ZXJsYXkiLCJNb2RhbENvbnRlbnQiLCJNb2RhbEhlYWRlciIsIk1vZGFsQ2xvc2VCdXR0b24iLCJNb2RhbEJvZHkiLCJzZWxlY3RlZCIsIk1vZGFsRm9vdGVyIiwibGV2ZWxPbmUiLCJsZXZlbFR3byIsImxldmVsVGhyZWUiLCJsZXZlbEZvdXIiLCJsZXZlbEZpdmUiLCJsZXZlbFNpeCIsImxldmVsU2V2ZW4iLCJGdWxsU2NyZWVuIiwiaGFuZGxlIiwiU3dpdGNoIiwiQWlPdXRsaW5lRG93bmxvYWQiLCJhY3RpdmUiLCJlbnRlciIsIkFpT3V0bGluZUZ1bGxzY3JlZW4iLCJleGl0IiwiQWlPdXRsaW5lRnVsbHNjcmVlbkV4aXQiLCJtaW5IZWlnaHQiLCJVc2VycyIsIlVzZXJMYXlvdXRfMSIsIkxvZ2luIiwiZXJyb3JzIiwicGFzc3dvcmQiLCJyZW1lbWJlciIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibXgiLCJ4bCIsImxnIiwiaDEiLCJWaXN1YWxseUhpZGRlbiIsImxvZ2luIiwiaXNMb2FkaW5nIiwibG9hZGluZ1RleHQiLCJzcGlubmVyUGxhY2VtZW50IiwiUmVnaXN0ZXIiLCJyZWZfaW52Iiwic3JjX2ludiIsInNpZ251cCIsImNvbmZpcm1QYXNzd29yZCIsInNtIiwiQmxvZyIsIlByb2R1Y3RzIiwiaGFuZGxlQnlQcm9kdWN0IiwicHJvZHVjdElkIiwiZm9udEZhbWlseSIsImp1c3RpZnlJdGVtcyIsIlRlc3RSZWFjdCIsIlJlZmVycmFsQ2xpcGJvYXJkXzEiLCJzaG93QWR2YW5jZSIsInNldFNoaXdBZHZhbmNlIiwic2hhcmVfbGlua3MiLCJzaGFyZUxpbmtzIiwic2V0U2hhcmVMaW5rcyIsInVwZGF0ZVNoYXJlTGlua3MiLCJtYXhXaWR0aCIsInNwbGl0IiwibG5rIiwiTXlOZXR3b3JrIiwiY2xpY2tzQnlTaGFyZUxpbmtzIiwibGluayIsIlRhZyIsInRvdGFsIiwiUHJvZmlsZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9