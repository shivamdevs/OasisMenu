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