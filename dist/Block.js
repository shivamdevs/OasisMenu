"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _context = _interopRequireDefault(require("./core/context"));
var _Popup = _interopRequireDefault(require("./Popup"));
var _storage = _interopRequireDefault(require("./core/storage"));
var _position = require("./core/position");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Block(_ref) {
  var children = _ref.children;
  var _useStorage = (0, _storage["default"])(),
    storage = _useStorage.storage,
    renewStorage = _useStorage.updateStorage,
    getStorage = _useStorage.getStorage,
    addElements = _useStorage.addElements,
    loopElements = _useStorage.loopElements;
  var updateStorage = function updateStorage(key) {
    var updates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    for (var _len = arguments.length, path = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      path[_key - 2] = arguments[_key];
    }
    return renewStorage.apply(void 0, [key, updates].concat(path));
  };
  var openPopup = function openPopup(key, object) {
    setTimeout(function () {
      var _object$popup;
      var _ref2 = (object === null || object === void 0 ? void 0 : (_object$popup = object.popup) === null || _object$popup === void 0 ? void 0 : _object$popup.events) || {},
        _ref2$beforeConstruct = _ref2.beforeConstruct,
        beforeConstruct = _ref2$beforeConstruct === void 0 ? null : _ref2$beforeConstruct,
        _ref2$onConstruct = _ref2.onConstruct,
        onConstruct = _ref2$onConstruct === void 0 ? null : _ref2$onConstruct,
        _ref2$beforeShow = _ref2.beforeShow,
        beforeShow = _ref2$beforeShow === void 0 ? null : _ref2$beforeShow,
        _ref2$onShown = _ref2.onShown,
        onShown = _ref2$onShown === void 0 ? null : _ref2$onShown,
        _ref2$onOpen = _ref2.onOpen,
        onOpen = _ref2$onOpen === void 0 ? null : _ref2$onOpen;
      if (beforeConstruct && beforeConstruct(object) === false) return;
      updateStorage(key, {
        enabled: true
      }, "modal");
      onConstruct && onConstruct(object);
      if (beforeShow && beforeShow(object) === false) return updateStorage(key, {
        enabled: false
      }, "modal");
      setTimeout(function () {
        var element = object.popup.element;
        var _object$modal = object.modal,
          position = _object$modal.position,
          trigger = _object$modal.trigger,
          options = _object$modal.options;
        var places = ['top-left', 'top', 'top-right', 'right-top', 'right', 'right-bottom', 'bottom-right', 'bottom', 'bottom-left', 'left-bottom', 'left', 'left-top'];
        var _ref3 = options.placement && (places.includes(options.placement) || options.inset && options.placement === "center") ? (0, _position.getPopupPosition)(trigger, element, options) : (0, _position.calculatePopupPosition)(element, position.top, position.left),
          top = _ref3.top,
          left = _ref3.left;
        updateStorage(key, {
          position: {
            top: top,
            left: left
          }
        }, "modal");
        setTimeout(function () {
          updateStorage(key, {
            visible: true
          }, "modal");
          onShown && onShown(object);
          onOpen && onOpen(object);
        }, 5);
      }, 5);
    }, 5);
  };
  var closePopup = function closePopup(key, object) {
    setTimeout(function () {
      var _object$popup2;
      var _ref4 = (object === null || object === void 0 ? void 0 : (_object$popup2 = object.popup) === null || _object$popup2 === void 0 ? void 0 : _object$popup2.events) || {},
        _ref4$beforeDestroy = _ref4.beforeDestroy,
        beforeDestroy = _ref4$beforeDestroy === void 0 ? null : _ref4$beforeDestroy,
        _ref4$onDestroy = _ref4.onDestroy,
        onDestroy = _ref4$onDestroy === void 0 ? null : _ref4$onDestroy,
        _ref4$beforeHide = _ref4.beforeHide,
        beforeHide = _ref4$beforeHide === void 0 ? null : _ref4$beforeHide,
        _ref4$onHidden = _ref4.onHidden,
        onHidden = _ref4$onHidden === void 0 ? null : _ref4$onHidden,
        _ref4$onClose = _ref4.onClose,
        onClose = _ref4$onClose === void 0 ? null : _ref4$onClose;
      if (beforeHide && beforeHide(object) === false) return;
      updateStorage(key, {
        visible: false
      }, "modal");
      onHidden && onHidden(object);
      if (beforeDestroy && beforeDestroy(object) === false) return updateStorage(key, {
        visible: true
      }, "modal");
      updateStorage(key, {
        modal: {}
      });
      onDestroy && onDestroy(object);
      onClose && onClose(object);
    }, 5);
  };
  (0, _react.useEffect)(function () {
    var handle = function handle(e) {
      Object.keys(storage).forEach(function (key) {
        var _storage$key;
        var _ref5 = (storage === null || storage === void 0 ? void 0 : (_storage$key = storage[key]) === null || _storage$key === void 0 ? void 0 : _storage$key.modal) || {},
          enabled = _ref5.enabled,
          visible = _ref5.visible,
          toggle = _ref5.toggle;
        if (loopElements(key, e.target) && toggle) return;
        (enabled || visible) && closePopup(key, storage[key]);
      });
    };
    window.addEventListener("mousedown", handle);
    window.addEventListener("scroll", handle);
    window.addEventListener("resize", handle);
    return function () {
      window.removeEventListener("mousedown", handle);
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [storage]);
  (0, _react.useEffect)(function () {
    var styleSheet = "[data-oasismenu-styled=true],[data-oasismenu-styled=true] *{box-sizing: border-box}[data-oasismenu-styled=true]{background-color: var(--bg-popup);transition: 200ms;max-width: 100vw;max-height: 100vh;box-shadow: 5px 5px 10px 2.5px var(--shadow-popup);border-radius: 5px;border: 1px solid var(--border-popup);overflow: auto;padding-block: 5px}[data-oasismenu-styled=true]::-webkit-scrollbar{width: 10px;height: 10px}[data-oasismenu-styled=true]::-webkit-scrollbar-thumb{background: var(--scroll-popup);background-clip: padding-box;border: 3px solid transparent;border-radius: 10px;box-shadow: none;min-height: 40px;min-width: 40px}[data-oasismenu-styled=true]::-webkit-scrollbar-track,[data-oasismenu-styled=true]::-webkit-scrollbar-track:hover{background: none;border: none}[data-oasismenu-styled=true] .oasisbreak{min-height: 1px;max-height: 1px;height: 1px;background-color: var(--bg-break);width: 100%;margin-block: 5px}[data-oasismenu-styled=true] div:has(> .oasisitem){padding-inline: 5px}[data-oasismenu-styled=true] .oasisitem{background-color: var(--bg-popup);color: var(--color-item-primary);display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;width: 100%;border-radius: 5px;border: none;outline: none;font-size: 15px;transition: 200ms;gap: 15px;font-weight: 500;position: relative;padding: 5px 10px}[data-oasismenu-styled=true] .oasisitem:disabled{background-color: var(--bg-item-disabled);color: var(--color-item-disabled)}[data-oasismenu-styled=true] .oasisitem:not(:disabled).oasishovered{background-color: var(--bg-item-hover);cursor: pointer}[data-oasismenu-styled=true] .oasisicon,[data-oasismenu-styled=true] .oasisstatus{min-width: 20px;display: inline-flex;align-items: center;justify-content: center;flex-wrap: nowrap}[data-oasismenu-styled=true] .oasisicon,[data-oasismenu-styled=true] .oasisstatus,[data-oasismenu-styled=true] .oasiscontent{white-space: nowrap;word-wrap: initial;overflow: hidden;transition: inherit;text-overflow: ellipsis}[data-oasismenu-styled=true] .oasiscontent{flex: 1;text-align: left}[data-oasismenu-styled=true] .oasisstatus{font-size: 0.9em}[data-oasismenu-styled=true] .oasisitem:not(:disabled):not(.oasishovered) .oasisicon,[data-oasismenu-styled=true] .oasisitem:not(:disabled):not(.oasishovered) .oasisstatus{color: var(--color-item-secondary)}[data-oasismenu-styled=true] .oasisafter:not(:empty){margin-left: 30px;white-space: nowrap;font-size: 0.8em;transition: inherit}[data-oasismenu-styled=true] .oasisitem:not(:disabled):not(.oasishovered) .oasisafter{color: var(--color-item-tertiary)}[data-oasismenu-styled=true]:not(:has(.oasisiconhave)) .oasisicon,[data-oasismenu-styled=true]:not(:has(.oasisstatushave)) .oasisstatus,[data-oasismenu-styled=true]:not(:has(.oasisafterhave)) .oasisafter{display: none}[data-oasismenu-styled=true]:not(:has(.oasisiconhave):has(.oasisstatushave):has(.oasisafterhave)) .oasisitem{padding-inline: 15px}[data-oasismenu-styled=true][data-animation]:not([data-animation=\"\"]):not([data-animation=\"none\"]){visibility: hidden;opacity: 0}[data-oasismenu-styled=true][data-animation]:not([data-animation=\"\"]):not([data-animation=\"none\"])[data-visible=true]{visibility: visible;opacity: 1}[data-oasismenu-styled=true][data-animation=slide-in]{transform: translateY(-10px)}[data-oasismenu-styled=true][data-animation=slide-in][data-visible=true]{transform: translateY(0)}[data-oasismenu-styled=true][data-animation=flip-in]{transform: rotateX(-90deg);transform-origin: top}[data-oasismenu-styled=true][data-animation=flip-in][data-visible=true]{transform: rotateX(0)}[data-oasismenu-styled=true][data-animation=drop-in]{transform: translateY(-100%)}[data-oasismenu-styled=true][data-animation=drop-in][data-visible=true]{transform: translateY(0)}[data-oasismenu-styled=true][data-animation=bounce-in]{transform: translateY(-500px)}[data-oasismenu-styled=true][data-animation=bounce-in][data-visible=true]{animation: oasismenu-bounce-in 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both}@keyframes oasismenu-bounce-in{0%{transform: translateY(-500px);animation-timing-function: ease-in;opacity: 0}38%{transform: translateY(0px);animation-timing-function: ease-out;opacity: 1}55%{transform: translateY(-65px);animation-timing-function: ease-in}72%{transform: translateY(0px);animation-timing-function: ease-out}81%{transform: translateY(-28px);animation-timing-function: ease-in}90%{transform: translateY(0px);animation-timing-function: ease-out}95%{transform: translateY(-8px);animation-timing-function: ease-in}100%{transform: translateY(0px);animation-timing-function: ease-out}}";
    var style = document.createElement("style");
    style.innerHTML = styleSheet;
    document.head.prepend(style);
    return function () {
      return document.head.contains(style) && document.head.removeChild(style);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_context["default"].Provider, {
    value: {
      storage: storage,
      getStorage: getStorage,
      updateStorage: updateStorage,
      openPopup: openPopup,
      closePopup: closePopup,
      addElements: addElements
    }
  }, children, /*#__PURE__*/_react["default"].createElement(Mapping, null));
}
;
var _default = Block;
exports["default"] = _default;
function Mapping() {
  return /*#__PURE__*/_react["default"].createElement(_context["default"].Consumer, null, function (_ref6) {
    var storage = _ref6.storage;
    return Object.keys(storage).map(function (key) {
      var _storage$key2, _storage$key2$modal;
      return ((_storage$key2 = storage[key]) === null || _storage$key2 === void 0 ? void 0 : (_storage$key2$modal = _storage$key2.modal) === null || _storage$key2$modal === void 0 ? void 0 : _storage$key2$modal.enabled) && /*#__PURE__*/_react["default"].createElement(_Popup["default"], {
        key: key,
        data: storage[key],
        name: key
      });
    });
  });
}