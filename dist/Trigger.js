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
function Trigger(_ref) {
  var name = _ref.name,
    children = _ref.children,
    _ref$inset = _ref.inset,
    inset = _ref$inset === void 0 ? false : _ref$inset,
    _ref$toggle = _ref.toggle,
    toggle = _ref$toggle === void 0 ? false : _ref$toggle,
    _ref$onTrigger = _ref.onTrigger,
    onTrigger = _ref$onTrigger === void 0 ? null : _ref$onTrigger,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? null : _ref$placement,
    _ref$shiftDistance = _ref.shiftDistance,
    shiftDistance = _ref$shiftDistance === void 0 ? 10 : _ref$shiftDistance,
    _ref$trigger = _ref.trigger,
    trigger = _ref$trigger === void 0 ? "contextmenu" : _ref$trigger;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _react["default"].Children.map(children, function (child, index) {
    if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
      return /*#__PURE__*/_react["default"].createElement(Child, {
        key: index,
        child: child,
        data: {
          name: name,
          inset: inset,
          toggle: toggle,
          trigger: trigger,
          onTrigger: onTrigger,
          placement: placement,
          shiftDistance: shiftDistance
        }
      });
    }
    return child;
  }));
}
;
var _default = Trigger;
exports["default"] = _default;
function Child(_ref2) {
  var child = _ref2.child,
    _ref2$data = _ref2.data,
    data = _ref2$data === void 0 ? {} : _ref2$data;
  var ref = (0, _react.useRef)();
  var name = data.name,
    inset = data.inset,
    toggle = data.toggle,
    trigger = data.trigger,
    onTrigger = data.onTrigger,
    placement = data.placement,
    shiftDistance = data.shiftDistance;
  var _useContext = (0, _react.useContext)(_context["default"]),
    getStorage = _useContext.getStorage,
    updateStorage = _useContext.updateStorage,
    openPopup = _useContext.openPopup,
    closePopup = _useContext.closePopup,
    addElements = _useContext.addElements;
  (0, _react.useEffect)(function () {
    if (!ref.current) return;
    var element = ref.current;
    var toggled = false;
    addElements(name, element);
    var capture = ['click', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'keydown', 'keyup', 'submit', 'change', 'load', 'contextmenu'].includes(trigger) ? trigger : "contextmenu";
    var triggerObject = function triggerObject(e) {
      var _object$popup, _object$popup$childre;
      var object = getStorage(name);
      if (onTrigger && onTrigger(e) === false) return;
      if (!(object !== null && object !== void 0 && (_object$popup = object.popup) !== null && _object$popup !== void 0 && (_object$popup$childre = _object$popup.children) !== null && _object$popup$childre !== void 0 && _object$popup$childre.length)) return;
      e.preventDefault();
      e.stopPropagation();
      if (toggled) return toggled = false;
      toggled = false;
      var top = e.clientY,
        left = e.clientX;
      updateStorage(name, {
        modal: {
          toggle: toggle,
          enabled: false,
          options: {
            inset: inset,
            placement: placement,
            shiftDistance: shiftDistance
          },
          position: {
            top: top,
            left: left
          },
          trigger: element,
          visible: false
        }
      });
      openPopup(name, object);
    };
    var toggleHandle = function toggleHandle(e) {
      var _object$modal, _object$modal2;
      var object = getStorage(name);
      if (object !== null && object !== void 0 && (_object$modal = object.modal) !== null && _object$modal !== void 0 && _object$modal.enabled || object !== null && object !== void 0 && (_object$modal2 = object.modal) !== null && _object$modal2 !== void 0 && _object$modal2.visible) {
        if (toggle && ((e === null || e === void 0 ? void 0 : e.button) === 0 && capture === "click" || (e === null || e === void 0 ? void 0 : e.button) === 2 && capture === "contextmenu")) toggled = true;
        closePopup(name, object);
      }
    };
    element.addEventListener(capture, triggerObject);
    element.addEventListener("mousedown", toggleHandle);
    element.addEventListener("scroll", toggleHandle);
    element.addEventListener("resize", toggleHandle);
    return function () {
      element.removeEventListener(capture, triggerObject);
      element.removeEventListener("mousedown", toggleHandle);
      element.removeEventListener("scroll", toggleHandle);
      element.removeEventListener("resize", toggleHandle);
    };
  }, [inset, name, onTrigger, placement, ref, shiftDistance, toggle, trigger]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].cloneElement(child, {
    ref: ref
  }));
}