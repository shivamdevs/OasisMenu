import React from 'react';

import { OasisMenuBlock, OasisMenuTrigger, OasisMenu, OasisMenuItem, OasisMenuBreak } from 'oasismenu';

function App() {
    return (
        <>
            <OasisMenuBlock>
                <OasisMenuTrigger name="menu1">
                    <div className="box top">Right click (context menu)</div>
                </OasisMenuTrigger>
                <OasisMenu name="menu1">
                    <OasisMenuItem checked after="Ctrl + 1" icon={<i className="fas fa-1"></i>} onClick={() => alert("Menu Item 1")} content="Menu Item 1" />
                    <OasisMenuBreak />
                    <OasisMenuItem checked after="Ctrl + 2" icon={<i className="fas fa-2"></i>} onClick={() => alert("Menu Item 2")} content="Menu Item 2" />
                    <OasisMenuBreak />
                    <OasisMenuItem checked after="Ctrl + 3" icon={<i className="fas fa-3"></i>} onClick={() => alert("Menu Item 3")} content="Menu Item 3" />
                    <OasisMenuItem checked after="Ctrl + 4" icon={<i className="fas fa-4"></i>} onClick={() => alert("Menu Item 4")} content="Menu Item 4" />
                    <OasisMenuBreak />
                    <OasisMenuItem checked disabled after="Ctrl + 5" icon={<i className="fas fa-5"></i>} onClick={() => alert("Menu Item 5")} content="Menu Item 5" />
                </OasisMenu>
                <OasisMenuTrigger toggle trigger="click" placement="top" name="menu2">
                    <div className="box bottom">Left click (Dropdown)</div>
                </OasisMenuTrigger>
                <OasisMenu name="menu2">
                    <OasisMenuItem checked after="Ctrl + 1" icon={<i className="fas fa-1"></i>} onClick={() => alert("Menu Item 1")} content="Menu Item 1" />
                    <OasisMenuBreak />
                    <OasisMenuItem checked after="Ctrl + 2" icon={<i className="fas fa-2"></i>} onClick={() => alert("Menu Item 2")} content="Menu Item 2" />
                    <OasisMenuBreak />
                    <OasisMenuItem checked after="Ctrl + 3" icon={<i className="fas fa-3"></i>} onClick={() => alert("Menu Item 3")} content="Menu Item 3" />
                    <OasisMenuItem checked after="Ctrl + 4" icon={<i className="fas fa-4"></i>} onClick={() => alert("Menu Item 4")} content="Menu Item 4" />
                    <OasisMenuBreak />
                    <OasisMenuItem checked disabled after="Ctrl + 5" icon={<i className="fas fa-5"></i>} onClick={() => alert("Menu Item 5")} content="Menu Item 5" />
                </OasisMenu>
            </OasisMenuBlock>
        </>
    );
};

export default App;