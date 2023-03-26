---
title: "Components"
description: "Small summary of each components of OasisMenu and how to use it"
---

OasisMenu is composed of five main components that work together to create an intuitive and customizable context menu for React-based web applications. The following components are used to implement different functionalities in your project:

## OasisMenuBlock

This component is the parent container for all context menus and triggers within your application. It should be placed once at the top level of your application where all the processing happens.

To use the `OasisMenuBlock` component, import it from `oasismenu` and place it as the parent of all `OasisMenuTrigger` and `OasisMenu` components in your application:

```jsx
import { OasisMenuBlock } from 'oasismenu';

function App () {
    return (
        <OasisMenuBlock>
            {/* Menus and triggers go here*/}
        </OasisMenuBlock>
    );
}

export default App;
```

To learn more about the `OasisMenuBlock` component and how to implement it in your project, please refer to the [OasisMenuBlock](components/oasismenublock) section in the documentation.

## OasisMenuTrigger

The `OasisMenuTrigger` component is used to define the trigger element for your context menu. This can be any valid HTML element or custom React component. The `name` prop is used to associate the trigger with a specific context menu.

To use the `OasisMenuTrigger` component, import it from `oasismenu` and place it within the component that you want to use as the trigger element:

```jsx
import { OasisMenuTrigger } from 'oasismenu';

function Example () {
    return (
        <div>
            <OasisMenuTrigger name="example-menu">
                {/* Trigger content goes here */}
            </OasisMenuTrigger>
        </div>
    );
}
```

For more information on the `OasisMenuTrigger` component and its properties, please see the [OasisMenuTrigger](components/oasismenutrigger) section in the documentation.

## OasisMenu

The `OasisMenu` component defines the content of your context menu. It can contain any number of `OasisMenuItem` or `OasisMenuBreak` components. The `name` prop should be set to the same value as the `name` prop of the corresponding `OasisMenuTrigger`.

To use the `OasisMenu` component, import it from `oasismenu` and place it wherever you want the context menu to appear. Remember to set the `name` prop to the same value as the corresponding `OasisMenuTrigger`:

```jsx
import { OasisMenu } from 'oasismenu';

function Example () {
    return (
        <div>
            <OasisMenu name="example-menu">
                {/* Menu items and breaks go here */}
            </OasisMenu>
        </div>
    );
}
```

To learn more about the `OasisMenu` component and how to use it in your project, please refer to the [OasisMenu](components/oasismenu) section in the documentation.

## OasisMenuItem

The `OasisMenuItem` component defines a single item within your context menu. It can contain any valid HTML content, and the onClick prop should be set to a function that will be executed when the item is clicked.

To use the `OasisMenuItem` component, import it from 'oasismenu' and place it within the `OasisMenu` component:

```jsx
import { OasisMenu, OasisMenuItem } from 'oasismenu';

function Example () {
    const handleItemClick = () => {
        console.log('Item clicked!');
    };

    return (
        <div>
            <OasisMenu name="example-menu">
                <OasisMenuItem onClick={handleItemClick}>
                    {/* Item content goes here */}
                </OasisMenuItem>
            </OasisMenu>
        </div>
    );
}
```

To learn more about the `OasisMenuItem` component and its properties, please refer to the [OasisMenuItem](components/oasismenuitem) section in the documentation.

## OasisMenuBreak

The `OasisMenuBreak` component is used to insert a separator between items within your context menu.

To use the `OasisMenuBreak` component, import it from 'oasismenu' and place it within the `OasisMenu` component:

```jsx
import { OasisMenu, OasisMenuItem, OasisMenuBreak } from 'oasismenu';

function MyMenu() {
  return (
    <OasisMenu name="my-menu">
      <OasisMenuItem onClick={() => console.log("Item 1 clicked")}>Item 1</OasisMenuItem>
      <OasisMenuBreak />
      <OasisMenuItem onClick={() => console.log("Item 2 clicked")}>Item 2</OasisMenuItem>
    </OasisMenu>
  );
}

export default MyMenu;
```

For more information on the `OasisMenuBreak` component and how to use it in your project, please refer to the [OasisMenuBreak](components/oasismenubreak) section in the documentation.
