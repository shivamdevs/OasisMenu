---
title: "OasisMenuBlock"
description: "Know more about OasisMenuBlock and how to use it"
---

The `OasisMenuBlock` component is a container for all `OasisMenuTrigger` and `OasisMenu` components in your application. It acts as a parent where all the processing happens. Here's an example of how to use it:

```jsx
import { OasisMenuBlock } from 'oasismenu';

function App () {
    return (
        <OasisMenuBlock>
            {/* Menus and triggers go here */}
        </OasisMenuBlock>
    );
}
```

## Top-Level Placement

The `OasisMenuBlock` component should be placed at the top level of your application as a parent where all the processing happens. This ensures that it can be accessed by all child components. Alternatively, you can place it at the root `index.js` page as shown below:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the OasisMenuBlock component
import { OasisMenuBlock } from 'oasismenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <OasisMenuBlock>
            <App />
        </OasisMenuBlock>
    </React.StrictMode>
);
```

By doing this, you will have a single instance of OasisMenuBlock for your entire project, which will ensure that all menus and triggers share data and work properly.

## Props

The `OasisMenuBlock` component accepts the following props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| children | Node | null | The children of the component, which should include OasisMenuTrigger and OasisMenu components. |

### Avoid Using Multiple OasisMenuBlock Components

It's important to remember that only one instance of the `OasisMenuBlock` component should be used in your application. If you use multiple instances, they will not share data and can cause conflicts, such as a popup from one block not closing when another block is opened. This can also result in errors, so it's best to avoid using multiple `OasisMenuBlock` components in the same application.
