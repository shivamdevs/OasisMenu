import React, { useEffect } from 'react';
import MenuContext from './core/context';
import Popup from './Popup';

import useStorage from './core/storage';
import { calculatePopupPosition, getPopupPosition } from './core/position';

function Block({ children }) {
    const { storage, updateStorage: renewStorage, getStorage, addElements, loopElements } = useStorage();

    const updateStorage = (key, updates = {}, ...path) => {
        return renewStorage(key, updates, ...path);
    };

    const openPopup = (key, object) => {
        setTimeout(() => {
            const { beforeConstruct = null, onConstruct = null, beforeShow = null, onShown = null, onOpen = null } = object?.popup?.events || {};
            if (beforeConstruct && beforeConstruct(object) === false) return;
            updateStorage(key, { enabled: true }, "modal");
            onConstruct && onConstruct(object);
            if (beforeShow && beforeShow(object) === false) return updateStorage(key, { enabled: false }, "modal");
            setTimeout(() => {
                const { element } = object.popup;
                const { position, trigger, options } = object.modal;

                const places = ['top-left', 'top', 'top-right', 'right-top', 'right', 'right-bottom', 'bottom-right', 'bottom', 'bottom-left', 'left-bottom', 'left', 'left-top'];

                const { top, left } = options.placement && (places.includes(options.placement) || (options.inset && options.placement === "center")) ? getPopupPosition(trigger, element, options) : calculatePopupPosition(element, position.top, position.left);
                updateStorage(key, {
                    position: {
                        top,
                        left,
                    }
                }, "modal");
                setTimeout(() => {
                    updateStorage(key, { visible: true }, "modal");
                    onShown && onShown(object);
                    onOpen && onOpen(object);
                }, 5);
            }, 5);
        }, 5);
    };

    const closePopup = (key, object) => {
        setTimeout(() => {
            const { beforeDestroy = null, onDestroy = null, beforeHide = null, onHidden = null, onClose = null } = object?.popup?.events || {};
            if (beforeHide && beforeHide(object) === false) return;
            updateStorage(key, { visible: false }, "modal");
            onHidden && onHidden(object);
            if (beforeDestroy && beforeDestroy(object) === false) return updateStorage(key, { visible: true }, "modal");
            updateStorage(key, { modal: {} });
            onDestroy && onDestroy(object);
            onClose && onClose(object);
        }, 5);

    };

    useEffect(() => {
        const handle = (e) => {
            Object.keys(storage).forEach(key => {
                const { enabled, visible, toggle } = storage?.[key]?.modal || {};
                if (loopElements(key, e.target) && toggle) return;
                (enabled || visible) && closePopup(key, storage[key]);
            });
        };
        window.addEventListener("mousedown", handle);
        window.addEventListener("scroll", handle);
        window.addEventListener("resize", handle);
        return () => {
            window.removeEventListener("mousedown", handle);
            window.removeEventListener("scroll", handle);
            window.removeEventListener("resize", handle);
        };
    }, [storage]);

    useEffect(() => {
        const styleSheet = `[data-oasismenu-styled=true],[data-oasismenu-styled=true] *{box-sizing: border-box}[data-oasismenu-styled=true]{background-color: var(--bg-popup);transition: 200ms;max-width: 100vw;max-height: 100vh;box-shadow: 5px 5px 10px 2.5px var(--shadow-popup);border-radius: 5px;border: 1px solid var(--border-popup);overflow: auto;padding-block: 5px}[data-oasismenu-styled=true]::-webkit-scrollbar{width: 10px;height: 10px}[data-oasismenu-styled=true]::-webkit-scrollbar-thumb{background: var(--scroll-popup);background-clip: padding-box;border: 3px solid transparent;border-radius: 10px;box-shadow: none;min-height: 40px;min-width: 40px}[data-oasismenu-styled=true]::-webkit-scrollbar-track,[data-oasismenu-styled=true]::-webkit-scrollbar-track:hover{background: none;border: none}[data-oasismenu-styled=true] .oasisbreak{min-height: 1px;max-height: 1px;height: 1px;background-color: var(--bg-break);width: 100%;margin-block: 5px}[data-oasismenu-styled=true] div:has(> .oasisitem){padding-inline: 5px}[data-oasismenu-styled=true] .oasisitem{background-color: var(--bg-popup);color: var(--color-item-primary);display: flex;flex-direction: row;flex-wrap: nowrap;align-items: center;width: 100%;border-radius: 5px;border: none;outline: none;font-size: 15px;transition: 200ms;gap: 15px;font-weight: 500;position: relative;padding: 5px 10px}[data-oasismenu-styled=true] .oasisitem:disabled{background-color: var(--bg-item-disabled);color: var(--color-item-disabled)}[data-oasismenu-styled=true] .oasisitem:not(:disabled).oasishovered{background-color: var(--bg-item-hover);cursor: pointer}[data-oasismenu-styled=true] .oasisicon,[data-oasismenu-styled=true] .oasisstatus{min-width: 20px;display: inline-flex;align-items: center;justify-content: center;flex-wrap: nowrap}[data-oasismenu-styled=true] .oasisicon,[data-oasismenu-styled=true] .oasisstatus,[data-oasismenu-styled=true] .oasiscontent{white-space: nowrap;word-wrap: initial;overflow: hidden;transition: inherit;text-overflow: ellipsis}[data-oasismenu-styled=true] .oasiscontent{flex: 1;text-align: left}[data-oasismenu-styled=true] .oasisstatus{font-size: 0.9em}[data-oasismenu-styled=true] .oasisitem:not(:disabled):not(.oasishovered) .oasisicon,[data-oasismenu-styled=true] .oasisitem:not(:disabled):not(.oasishovered) .oasisstatus{color: var(--color-item-secondary)}[data-oasismenu-styled=true] .oasisafter:not(:empty){margin-left: 30px;white-space: nowrap;font-size: 0.8em;transition: inherit}[data-oasismenu-styled=true] .oasisitem:not(:disabled):not(.oasishovered) .oasisafter{color: var(--color-item-tertiary)}[data-oasismenu-styled=true]:not(:has(.oasisiconhave)) .oasisicon,[data-oasismenu-styled=true]:not(:has(.oasisstatushave)) .oasisstatus,[data-oasismenu-styled=true]:not(:has(.oasisafterhave)) .oasisafter{display: none}[data-oasismenu-styled=true]:not(:has(.oasisiconhave):has(.oasisstatushave):has(.oasisafterhave)) .oasisitem{padding-inline: 15px}[data-oasismenu-styled=true][data-animation]:not([data-animation=""]):not([data-animation="none"]){visibility: hidden;opacity: 0}[data-oasismenu-styled=true][data-animation]:not([data-animation=""]):not([data-animation="none"])[data-visible=true]{visibility: visible;opacity: 1}[data-oasismenu-styled=true][data-animation=slide-in]{transform: translateY(-10px)}[data-oasismenu-styled=true][data-animation=slide-in][data-visible=true]{transform: translateY(0)}[data-oasismenu-styled=true][data-animation=flip-in]{transform: rotateX(-90deg);transform-origin: top}[data-oasismenu-styled=true][data-animation=flip-in][data-visible=true]{transform: rotateX(0)}[data-oasismenu-styled=true][data-animation=drop-in]{transform: translateY(-100%)}[data-oasismenu-styled=true][data-animation=drop-in][data-visible=true]{transform: translateY(0)}[data-oasismenu-styled=true][data-animation=bounce-in]{transform: translateY(-500px)}[data-oasismenu-styled=true][data-animation=bounce-in][data-visible=true]{animation: oasismenu-bounce-in 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both}@keyframes oasismenu-bounce-in{0%{transform: translateY(-500px);animation-timing-function: ease-in;opacity: 0}38%{transform: translateY(0px);animation-timing-function: ease-out;opacity: 1}55%{transform: translateY(-65px);animation-timing-function: ease-in}72%{transform: translateY(0px);animation-timing-function: ease-out}81%{transform: translateY(-28px);animation-timing-function: ease-in}90%{transform: translateY(0px);animation-timing-function: ease-out}95%{transform: translateY(-8px);animation-timing-function: ease-in}100%{transform: translateY(0px);animation-timing-function: ease-out}}`;
        const style = document.createElement("style");
        style.dataset.oasismenuStyled = true;
        style.innerHTML = styleSheet;
        document.head.prepend(style);
        return () => document.head.contains(style) && document.head.removeChild(style);
    }, []);

    return (
        <MenuContext.Provider value={{ storage, getStorage, updateStorage, openPopup, closePopup, addElements }}>
            {children}
            <Mapping />
        </MenuContext.Provider>
    )
};

export default Block;

function Mapping() {
    return (
        <MenuContext.Consumer>{({ storage }) => Object.keys(storage).map(key => storage[key]?.modal?.enabled && <Popup key={key} data={storage[key]} name={key} />)}</MenuContext.Consumer>
    );
}