import React, { useContext, useEffect, useRef } from 'react';
import MenuContext from './core/context';

function Trigger({
    name,
    children,
    inset = false,
    toggle = false,
    onTrigger = null,
    placement = null,
    shiftDistance = 10,
    trigger = "contextmenu",
}) {
    return (
        <>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    return <Child key={index} child={child} data={{
                        name,
                        inset,
                        toggle,
                        trigger,
                        onTrigger,
                        placement,
                        shiftDistance
                    }} />;
                }
                return child;
            })}
        </>
    );
};

export default Trigger;

function Child({ child, data = {} }) {
    const ref = useRef();

    const { name, inset, toggle, trigger, onTrigger, placement, shiftDistance } = data;

    const { getStorage, updateStorage, openPopup, closePopup, addElements } = useContext(MenuContext);

    useEffect(() => {
        if (!ref.current) return;
        const element = ref.current;

        let toggled = false;

        addElements(name, element);
        const capture = [
            'click',
            'dblclick',
            'mousedown',
            'mouseenter',
            'mouseleave',
            'keydown',
            'keyup',
            'submit',
            'change',
            'load',
            'contextmenu',
        ].includes(trigger) ? trigger : "contextmenu";

        const triggerObject = (e) => {
            const object = getStorage(name);

            if (onTrigger && onTrigger(e) === false) return;
            if (!object?.popup?.children?.length) return;

            e.preventDefault();
            e.stopPropagation();

            if (toggled) return (toggled = false);
            toggled = false;

            const { clientY: top, clientX: left } = e;

            updateStorage(name, {
                modal: {
                    toggle,
                    enabled: false,
                    options: {
                        inset,
                        placement,
                        shiftDistance,
                    },
                    position: {
                        top,
                        left,
                    },
                    trigger: element,
                    visible: false,
                },
            });
            openPopup(name, object);
        };

        const toggleHandle = (e) => {
            const object = getStorage(name);
            if (object?.modal?.enabled || object?.modal?.visible) {
                if (toggle && ((e?.button === 0 && capture === "click") || (e?.button === 2 && capture === "contextmenu"))) (toggled = true);
                closePopup(name, object);
            }
        };

        element.addEventListener(capture, triggerObject);
        element.addEventListener("mousedown", toggleHandle);
        element.addEventListener("scroll", toggleHandle);
        element.addEventListener("resize", toggleHandle);

        return () => {
            element.removeEventListener(capture, triggerObject);
            element.removeEventListener("mousedown", toggleHandle);
            element.removeEventListener("scroll", toggleHandle);
            element.removeEventListener("resize", toggleHandle);
        };
    }, [inset, name, onTrigger, placement, ref, shiftDistance, toggle, trigger]);

    return (
        <>
            {React.cloneElement(child, {
                ref,
            })}
        </>
    );
}