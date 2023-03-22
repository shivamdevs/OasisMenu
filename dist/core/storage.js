"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useStorage = function useStorage() {
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    storage = _useState2[0],
    setStorage = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    elements = _useState4[0],
    setElements = _useState4[1];
  var dummyStorage = {};
  var dummyElement = {};
  var updateStorage = function updateStorage(key) {
    var updates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    for (var _len = arguments.length, path = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      path[_key - 2] = arguments[_key];
    }
    setStorage(function (prevItems) {
      var object = _objectSpread(_objectSpread({}, prevItems), {}, _defineProperty({}, key, prevItems[key] || {
        key: key
      }));
      var update = function update(data, index) {
        if (!data[path[index]]) return;
        if (index === path.length - 1) {
          return Object.assign(data[path[index]], updates);
        }
        return update(data[path[index]], index + 1);
      };
      if (path.length) {
        update(object[key], 0);
      } else {
        Object.assign(object[key], updates);
      }
      dummyStorage = object;
      return object;
    });
  };
  var addElements = function addElements(key, element) {
    setElements(function (prevElems) {
      var _elems$key;
      var elems = {};
      for (var id in prevElems) elems[id] = prevElems[id].filter(function (elem) {
        return document.contains(elem);
      });
      var has = (_elems$key = elems[key]) === null || _elems$key === void 0 ? void 0 : _elems$key.some(function (elem) {
        return elem === element;
      });
      if (!has) elems[key] = [].concat(_toConsumableArray(elems[key] || []), [element]);
      dummyElement = elems;
      return elems;
    });
  };
  var loopElements = function loopElements(key, element) {
    var elems = _toConsumableArray(Object.keys(elements).length ? elements[key] || [] : dummyElement[key] || []);
    var el = element;
    while (el && el !== document.body) {
      if (elems.includes(el)) return true;
      el = el.parentElement;
    }
    return false;
  };
  var getStorage = function getStorage(key) {
    return key ? dummyStorage[key] : dummyStorage;
  };
  return {
    storage: storage,
    backupStorage: dummyStorage,
    updateStorage: updateStorage,
    setStorage: setStorage,
    getStorage: getStorage,
    elements: elements,
    backupElement: dummyElement,
    addElements: addElements,
    loopElements: loopElements
  };
};
var _default = useStorage;
exports["default"] = _default;