"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("./core/context"));
var _Item = _interopRequireDefault(require("./Item"));
var _Break = _interopRequireDefault(require("./Break"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Popup(_ref) {
  var _options$noStyle, _options$theme, _options$noStyle2, _options$animation;
  var data = _ref.data,
    name = _ref.name;
  var popup = (0, _react.useRef)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    hoveredIndex = _useState2[0],
    setHoveredIndex = _useState2[1];
  var _useContext = (0, _react.useContext)(_context["default"]),
    updateStorage = _useContext.updateStorage,
    closePopup = _useContext.closePopup,
    defaultSettings = _useContext.defaultSettings;
  var _ref2 = data.modal || {},
    _ref2$position = _ref2.position,
    position = _ref2$position === void 0 ? {} : _ref2$position,
    _ref2$visible = _ref2.visible,
    visible = _ref2$visible === void 0 ? false : _ref2$visible;
  var _ref3 = data.popup || {},
    children = _ref3.children,
    options = _ref3.options;
  console.log(options.theme, defaultSettings.theme);
  (0, _react.useEffect)(function () {
    if (popup.current) {
      updateStorage(name, {
        element: popup.current
      }, "popup");
    }
  }, [popup, name]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: popup,
    style: {
      zIndex: "".concat(visible ? "" : "-", "2147483647"),
      translate: "".concat((position === null || position === void 0 ? void 0 : position.left) || 0, "px ").concat((position === null || position === void 0 ? void 0 : position.top) || 0, "px"),
      position: "fixed",
      top: "0px",
      left: "0px",
      willChange: "transform",
      padding: "1px",
      boxSizing: "border-box"
    },
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onScroll: function onScroll(e) {
      return e.stopPropagation();
    },
    onContextMenu: function onContextMenu(e) {
      return e.preventDefault();
    },
    onClick: function onClick() {
      return closePopup(name, data);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "oasismenu ".concat(options.className, " ").concat(defaultSettings.className, " ").concat(visible ? "oasisopen" : ""),
    "data-oasismenu-styled": !((_options$noStyle = options.noStyle) !== null && _options$noStyle !== void 0 ? _options$noStyle : defaultSettings.noStyle),
    "data-visible": visible,
    "data-theme": (_options$theme = options.theme) !== null && _options$theme !== void 0 ? _options$theme : defaultSettings.theme,
    "data-nostyle": (_options$noStyle2 = options.noStyle) !== null && _options$noStyle2 !== void 0 ? _options$noStyle2 : defaultSettings.noStyle,
    "data-animation": (_options$animation = options.animation) !== null && _options$animation !== void 0 ? _options$animation : defaultSettings.animation,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, _react["default"].Children.map(children, function (child, index) {
    if ( /*#__PURE__*/_react["default"].isValidElement(child) && (child.type === _Item["default"] || child.type === _Break["default"])) {
      return /*#__PURE__*/_react["default"].cloneElement(child, {
        object: data,
        classIndex: index,
        onClassHover: function onClassHover(index) {
          return setHoveredIndex(index);
        },
        isClassHovered: index === hoveredIndex
      });
    }
    return child;
  })));
}
;
var _default = Popup;
exports["default"] = _default;