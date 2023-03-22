"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("./core/context"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Item(_ref) {
  var _object$popup;
  var content = _ref.content,
    children = _ref.children,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? null : _ref$data,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$after = _ref.after,
    after = _ref$after === void 0 ? null : _ref$after,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$statusIcon = _ref.statusIcon,
    statusIcon = _ref$statusIcon === void 0 ? null : _ref$statusIcon,
    _ref$object = _ref.object,
    object = _ref$object === void 0 ? {} : _ref$object,
    _ref$classIndex = _ref.classIndex,
    classIndex = _ref$classIndex === void 0 ? null : _ref$classIndex,
    _ref$onClassHover = _ref.onClassHover,
    onClassHover = _ref$onClassHover === void 0 ? null : _ref$onClassHover,
    _ref$isClassHovered = _ref.isClassHovered,
    isClassHovered = _ref$isClassHovered === void 0 ? false : _ref$isClassHovered,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? null : _ref$onClick,
    _ref$onHover = _ref.onHover,
    onHover = _ref$onHover === void 0 ? null : _ref$onHover,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$hoverClassName = _ref.hoverClassName,
    hoverClassName = _ref$hoverClassName === void 0 ? "" : _ref$hoverClassName,
    _ref$preventClose = _ref.preventClose,
    preventClose = _ref$preventClose === void 0 ? false : _ref$preventClose;
  var _ref2 = (object === null || object === void 0 ? void 0 : (_object$popup = object.popup) === null || _object$popup === void 0 ? void 0 : _object$popup.options) || {},
    itemClass = _ref2.itemClass,
    itemHoverClass = _ref2.itemHoverClass,
    itemKeepHovered = _ref2.itemKeepHovered,
    onItemClick = _ref2.onItemClick,
    onItemHover = _ref2.onItemHover;
  var _useContext = (0, _react.useContext)(_context["default"]),
    closePopup = _useContext.closePopup;
  var handleClick = function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    if (!preventClose && !disabled) {
      closePopup(object.key, object);
      setTimeout(function () {
        var _object$popup2, _object$popup2$events;
        onClick && onClick(data, object);
        onItemClick && onItemClick(data, object);
        (object === null || object === void 0 ? void 0 : (_object$popup2 = object.popup) === null || _object$popup2 === void 0 ? void 0 : (_object$popup2$events = _object$popup2.events) === null || _object$popup2$events === void 0 ? void 0 : _object$popup2$events.onSelect) && object.popup.events.onSelect(data, object);
      }, 10);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    disabled: disabled,
    className: "oasisitem ".concat(className || itemClass || "", " ").concat(isClassHovered ? "oasishovered ".concat(hoverClassName || itemHoverClass || "") : ""),
    onMouseEnter: function onMouseEnter(e) {
      if (!disabled) {
        onHover ? onHover(e, object, data) : onClassHover && onClassHover(classIndex);
        onItemHover && onItemHover(e, data, object);
      }
    },
    onMouseLeave: function onMouseLeave() {
      return !itemKeepHovered && onClassHover && onClassHover(null);
    },
    onClick: handleClick,
    onContextMenu: handleClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "oasisicon ".concat(icon ? "oasisiconhave" : "")
  }, icon), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oasiscontent"
  }, content || children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oasisafter ".concat(after ? "oasisafterhave" : "")
  }, after), /*#__PURE__*/_react["default"].createElement("div", {
    className: "oasisstatus ".concat(statusIcon || checked ? "oasisstatushave" : "")
  }, checked && /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
  })))));
}
;
var _default = Item;
exports["default"] = _default;