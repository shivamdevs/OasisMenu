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
function Menu(_ref) {
  var name = _ref.name,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$noStyle = _ref.noStyle,
    noStyle = _ref$noStyle === void 0 ? false : _ref$noStyle,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? "default" : _ref$theme,
    _ref$animation = _ref.animation,
    animation = _ref$animation === void 0 ? "slide-in" : _ref$animation,
    _ref$itemClass = _ref.itemClass,
    itemClass = _ref$itemClass === void 0 ? "" : _ref$itemClass,
    _ref$onItemClick = _ref.onItemClick,
    onItemClick = _ref$onItemClick === void 0 ? null : _ref$onItemClick,
    _ref$onItemHover = _ref.onItemHover,
    onItemHover = _ref$onItemHover === void 0 ? null : _ref$onItemHover,
    _ref$itemHoverClass = _ref.itemHoverClass,
    itemHoverClass = _ref$itemHoverClass === void 0 ? "" : _ref$itemHoverClass,
    _ref$itemKeepHovered = _ref.itemKeepHovered,
    itemKeepHovered = _ref$itemKeepHovered === void 0 ? false : _ref$itemKeepHovered,
    _ref$beforeHide = _ref.beforeHide,
    beforeHide = _ref$beforeHide === void 0 ? null : _ref$beforeHide,
    _ref$beforeShow = _ref.beforeShow,
    beforeShow = _ref$beforeShow === void 0 ? null : _ref$beforeShow,
    _ref$beforeDestroy = _ref.beforeDestroy,
    beforeDestroy = _ref$beforeDestroy === void 0 ? null : _ref$beforeDestroy,
    _ref$beforeConstruct = _ref.beforeConstruct,
    beforeConstruct = _ref$beforeConstruct === void 0 ? null : _ref$beforeConstruct,
    _ref$onShown = _ref.onShown,
    onShown = _ref$onShown === void 0 ? null : _ref$onShown,
    _ref$onHidden = _ref.onHidden,
    onHidden = _ref$onHidden === void 0 ? null : _ref$onHidden,
    _ref$onDestroy = _ref.onDestroy,
    onDestroy = _ref$onDestroy === void 0 ? null : _ref$onDestroy,
    _ref$onConstruct = _ref.onConstruct,
    onConstruct = _ref$onConstruct === void 0 ? null : _ref$onConstruct,
    _ref$onOpen = _ref.onOpen,
    onOpen = _ref$onOpen === void 0 ? null : _ref$onOpen,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? null : _ref$onClose,
    _ref$onSelect = _ref.onSelect,
    onSelect = _ref$onSelect === void 0 ? null : _ref$onSelect;
  var _useContext = (0, _react.useContext)(_context["default"]),
    updateStorage = _useContext.updateStorage,
    closePopup = _useContext.closePopup;
  (0, _react.useEffect)(function () {
    updateStorage(name, {
      popup: {
        element: null,
        children: children,
        options: {
          theme: theme,
          noStyle: noStyle,
          animation: animation,
          className: className,
          itemClass: itemClass,
          onItemClick: onItemClick,
          onItemHover: onItemHover,
          itemHoverClass: itemHoverClass,
          itemKeepHovered: itemKeepHovered
        },
        events: {
          onOpen: onOpen,
          onShown: onShown,
          onClose: onClose,
          onHidden: onHidden,
          onSelect: onSelect,
          onDestroy: onDestroy,
          beforeHide: beforeHide,
          beforeShow: beforeShow,
          onConstruct: onConstruct,
          beforeDestroy: beforeDestroy,
          beforeConstruct: beforeConstruct
        }
      },
      close: function close() {
        closePopup(name, this);
      }
    });
  }, [name, theme, children, className, beforeHide, beforeShow, beforeDestroy, beforeConstruct, onShown, onHidden, onDestroy, onConstruct, onOpen, onClose, onSelect, noStyle, animation, itemClass, onItemClick, onItemHover, itemHoverClass, itemKeepHovered]);
  return null;
}
;
var _default = Menu;
exports["default"] = _default;