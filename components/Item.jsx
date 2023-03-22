import React, { useContext } from 'react';
import MenuContext from './core/context';

function Item({
    content,
    children,
    data = null,
    icon = null,
    after = null,
    checked = false,
    disabled = false,
    statusIcon = null,


    object = {},
    classIndex = null,
    onClassHover = null,
    isClassHovered = false,

    onClick = null,
    onHover = null,
    className = "",
    hoverClassName = "",
    preventClose = false,
}) {

    const { itemClass, itemHoverClass, itemKeepHovered, onItemClick, onItemHover } = object?.popup?.options || {};
    const { closePopup } = useContext(MenuContext);

    const handleClick = e => {
        e.stopPropagation();
        e.preventDefault();
        if (!preventClose && !disabled) {
            closePopup(object.key, object);
            setTimeout(() => {
                onClick && onClick(data, object);
                onItemClick && onItemClick(data, object);
                object?.popup?.events?.onSelect && object.popup.events.onSelect(data, object);
            }, 10);
        }
    };


    return (
        <div>
            <button
                type="button"
                disabled={disabled}
                className={`oasisitem ${className || itemClass || ""} ${isClassHovered ? `oasishovered ${hoverClassName || itemHoverClass || ""}` : ""}`}
                onMouseEnter={(e) => {
                    if (!disabled) {
                        onHover ? onHover(e, object, data) : (onClassHover && onClassHover(classIndex));
                        onItemHover && onItemHover(e, data, object);
                    }
                }}
                onMouseLeave={() => !itemKeepHovered && onClassHover && onClassHover(null)}
                onClick={handleClick}
                onContextMenu={handleClick}
            >
                <div className={`oasisicon ${icon ? "oasisiconhave" : ""}`}>{icon}</div>
                <div className="oasiscontent">{content || children}</div>
                <div className={`oasisafter ${after ? "oasisafterhave" : ""}`}>{after}</div>
                <div className={`oasisstatus ${statusIcon || checked ? "oasisstatushave" : ""}`}>
                    {checked && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>}
                </div>
            </button>
        </div>
    );
};

export default Item;