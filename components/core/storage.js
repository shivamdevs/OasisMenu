import { useState } from 'react';

const useStorage = () => {
    const [storage, setStorage] = useState({});
    const [elements, setElements] = useState({});

    let dummyStorage = {};
    let dummyElement = {};

    const updateStorage = (key, updates = {}, ...path) => {
        setStorage(prevItems => {

            const object = { ...prevItems, [key]: (prevItems[key] || { key }) };

            const update = (data, index) => {
                if (!data[path[index]]) return;
                if (index === path.length - 1) {
                    return Object.assign(data[path[index]], updates);
                }
                return update(data[path[index]], index + 1);
            }
            if (path.length) {
                update(object[key], 0);
            } else {
                Object.assign(object[key], updates);
            }

            dummyStorage = object;
            return object;
        });
    };

    const addElements = (key, element) => {
        setElements(prevElems => {
            const elems = {};

            for (const id in prevElems) elems[id] = prevElems[id].filter(elem => document.contains(elem));
            const has = elems[key]?.some(elem => elem === element);

            if (!has) elems[key] = [...(elems[key] || []), element];
            dummyElement = elems;
            return elems;
        });
    };

    const loopElements = (key, element) => {
        const elems = [...(Object.keys(elements).length ? (elements[key] || []) : dummyElement[key] || [])];
        let el = element;
        while (el && el !== document.body) {
            if (elems.includes(el)) return true;
            el = el.parentElement;
        }
        return false;
    };

    const getStorage = (key) => (key ? dummyStorage[key] : dummyStorage);

    return {
        storage,
        backupStorage: dummyStorage,
        updateStorage,
        setStorage,
        getStorage,

        elements,
        backupElement: dummyElement,
        addElements,
        loopElements,
    };
};

export default useStorage;