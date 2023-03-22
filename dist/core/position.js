"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculatePopupPosition = calculatePopupPosition;
exports.getPopupPosition = getPopupPosition;
function calculatePopupPosition(popup, top, left) {
  var rect = popup.getBoundingClientRect();
  var _window = window,
    innerWidth = _window.innerWidth,
    innerHeight = _window.innerHeight;
  var popupWidth = rect.width;
  var popupHeight = rect.height;
  var newTop = top;
  var newLeft = left;
  if (left + popupWidth > innerWidth) {
    if (left - popupWidth >= 0) {
      newLeft = left - popupWidth;
    } else {
      newLeft = Math.max(Math.min(left, innerWidth - popupWidth), 0);
    }
  }
  if (top + popupHeight > innerHeight) {
    if (top - popupHeight >= 0) {
      newTop = top - popupHeight;
    } else {
      newTop = Math.max(Math.min(top, innerHeight - popupHeight), 0);
    }
  }
  if (newLeft === left && newTop === top) {
    newLeft = Math.max(Math.min(left, innerWidth - popupWidth), 0);
    newTop = Math.max(Math.min(top, innerHeight - popupHeight), 0);
  }
  return {
    top: newTop,
    left: newLeft
  };
}
function getPopupPosition(item, popup, _ref) {
  var position = _ref.placement,
    inset = _ref.inset,
    distance = _ref.shiftDistance;
  var itemRect = item.getBoundingClientRect();
  var popupRect = popup.getBoundingClientRect();
  var popupWidth = popupRect.width;
  var popupHeight = popupRect.height;
  var padding = distance || 5;
  if (inset) {
    return getInsetPopupPosition(itemRect, popupWidth, popupHeight, padding, position);
  } else {
    return getOffsetPopupPosition(itemRect, popupWidth, popupHeight, padding, position);
  }
}
function getInsetPopupPosition(itemRect, popupWidth, popupHeight, padding, position) {
  switch (position) {
    case 'top-left':
      return {
        top: itemRect.top + padding,
        left: itemRect.left + padding
      };
    case 'top':
      return {
        top: itemRect.top + padding,
        left: itemRect.left + itemRect.width / 2 - popupWidth / 2
      };
    case 'top-right':
      return {
        top: itemRect.top + padding,
        left: itemRect.right - popupWidth - padding
      };
    case 'right-top':
      return {
        top: itemRect.top + padding,
        left: itemRect.right - popupWidth - padding
      };
    case 'right':
      return {
        top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
        left: itemRect.right - popupWidth - padding
      };
    case 'right-bottom':
      return {
        top: itemRect.bottom - popupHeight - padding,
        left: itemRect.right - popupWidth - padding
      };
    case 'bottom-right':
      return {
        top: itemRect.bottom - popupHeight - padding,
        left: itemRect.right - popupWidth - padding
      };
    case 'bottom':
      return {
        top: itemRect.bottom - popupHeight - padding,
        left: itemRect.left + itemRect.width / 2 - popupWidth / 2
      };
    case 'bottom-left':
      return {
        top: itemRect.bottom - popupHeight - padding,
        left: itemRect.left + padding
      };
    case 'left-bottom':
      return {
        top: itemRect.bottom - popupHeight - padding,
        left: itemRect.left + padding
      };
    case 'left':
      return {
        top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
        left: itemRect.left + padding
      };
    case 'left-top':
      return {
        top: itemRect.top + padding,
        left: itemRect.left + padding
      };
    case 'center':
      return {
        top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
        left: itemRect.left + itemRect.width / 2 - popupWidth / 2
      };
    default:
      throw new Error('Invalid position specified');
  }
}
function getOffsetPopupPosition(itemRect, popupWidth, popupHeight, padding, position) {
  switch (position) {
    case 'top-left':
      return {
        top: itemRect.top - popupHeight - padding,
        left: itemRect.left
      };
    case 'top':
      return {
        top: itemRect.top - popupHeight - padding,
        left: itemRect.left + itemRect.width / 2 - popupWidth / 2
      };
    case 'top-right':
      return {
        top: itemRect.top - popupHeight - padding,
        left: itemRect.right - popupWidth
      };
    case 'right-top':
      return {
        top: itemRect.top,
        left: itemRect.right + padding
      };
    case 'right':
      return {
        top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
        left: itemRect.right + padding
      };
    case 'right-bottom':
      return {
        top: itemRect.bottom - popupHeight,
        left: itemRect.right + padding
      };
    case 'bottom-right':
      return {
        top: itemRect.bottom + padding,
        left: itemRect.right - popupWidth
      };
    case 'bottom':
      return {
        top: itemRect.bottom + padding,
        left: itemRect.left + itemRect.width / 2 - popupWidth / 2
      };
    case 'bottom-left':
      return {
        top: itemRect.bottom + padding,
        left: itemRect.left
      };
    case 'left-bottom':
      return {
        top: itemRect.bottom - popupHeight,
        left: itemRect.left - popupWidth - padding
      };
    case 'left':
      return {
        top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
        left: itemRect.left - popupWidth - padding
      };
    case 'left-top':
      return {
        top: itemRect.top,
        left: itemRect.left - popupWidth - padding
      };
    default:
      throw new Error('Invalid position specified');
  }
}