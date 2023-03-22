export function calculatePopupPosition(popup, top, left) {
    const rect = popup.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;
    const popupWidth = rect.width;
    const popupHeight = rect.height;

    let newTop = top;
    let newLeft = left;

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

    return { top: newTop, left: newLeft };
}


export function getPopupPosition(item, popup, { placement: position, inset, shiftDistance: distance }) {
    const itemRect = item.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();
    const popupWidth = popupRect.width;
    const popupHeight = popupRect.height;
    const padding = distance || 5;

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
                left: itemRect.left + padding,
            };
        case 'top':
            return {
                top: itemRect.top + padding,
                left: itemRect.left + itemRect.width / 2 - popupWidth / 2,
            };
        case 'top-right':
            return {
                top: itemRect.top + padding,
                left: itemRect.right - popupWidth - padding,
            };
        case 'right-top':
            return {
                top: itemRect.top + padding,
                left: itemRect.right - popupWidth - padding,
            };
        case 'right':
            return {
                top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
                left: itemRect.right - popupWidth - padding,
            };
        case 'right-bottom':
            return {
                top: itemRect.bottom - popupHeight - padding,
                left: itemRect.right - popupWidth - padding,
            };
        case 'bottom-right':
            return {
                top: itemRect.bottom - popupHeight - padding,
                left: itemRect.right - popupWidth - padding,
            };
        case 'bottom':
            return {
                top: itemRect.bottom - popupHeight - padding,
                left: itemRect.left + itemRect.width / 2 - popupWidth / 2,
            };
        case 'bottom-left':
            return {
                top: itemRect.bottom - popupHeight - padding,
                left: itemRect.left + padding,
            };
        case 'left-bottom':
            return {
                top: itemRect.bottom - popupHeight - padding,
                left: itemRect.left + padding,
            };
        case 'left':
            return {
                top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
                left: itemRect.left + padding,
            };
        case 'left-top':
            return {
                top: itemRect.top + padding,
                left: itemRect.left + padding,
            };
        case 'center':
            return {
                top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
                left: itemRect.left + itemRect.width / 2 - popupWidth / 2,
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
                left: itemRect.left,
            };
        case 'top':
            return {
                top: itemRect.top - popupHeight - padding,
                left: itemRect.left + itemRect.width / 2 - popupWidth / 2,
            };
        case 'top-right':
            return {
                top: itemRect.top - popupHeight - padding,
                left: itemRect.right - popupWidth,
            };
        case 'right-top':
            return {
                top: itemRect.top,
                left: itemRect.right + padding,
            };
        case 'right':
            return {
                top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
                left: itemRect.right + padding,
            };
        case 'right-bottom':
            return {
                top: itemRect.bottom - popupHeight,
                left: itemRect.right + padding,
            };
        case 'bottom-right':
            return {
                top: itemRect.bottom + padding,
                left: itemRect.right - popupWidth,
            };
        case 'bottom':
            return {
                top: itemRect.bottom + padding,
                left: itemRect.left + itemRect.width / 2 - popupWidth / 2,
            };
        case 'bottom-left':
            return {
                top: itemRect.bottom + padding,
                left: itemRect.left,
            };
        case 'left-bottom':
            return {
                top: itemRect.bottom - popupHeight,
                left: itemRect.left - popupWidth - padding,
            };
        case 'left':
            return {
                top: itemRect.top + itemRect.height / 2 - popupHeight / 2,
                left: itemRect.left - popupWidth - padding,
            };
        case 'left-top':
            return {
                top: itemRect.top,
                left: itemRect.left - popupWidth - padding,
            };
        default:
            throw new Error('Invalid position specified');
    }
}