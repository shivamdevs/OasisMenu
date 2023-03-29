---
title: "OasisMenuTrigger"
description: "Know more about OasisMenuTrigger and how to use it"
---

The `OasisMenuTrigger` component is used to create triggers that display a menu popup on a specified event. It can be used multiple times with the same `name` prop, and each component and its children will work as an individual trigger.

## Usage

To use the `OasisMenuTrigger` component, first import it into your React project by adding the following code at the beginning of your file:

```jsx
import { OasisMenuTrigger } from 'oasismenu';
```

After that, add the component to your React component, specifying the necessary props as follows:

```jsx
<OasisMenuTrigger name="example" trigger="click">
    <button>Button 1</button>
</OasisMenuTrigger>
```

You can add multiple buttons inside a single trigger component:

```jsx
<OasisMenuTrigger name="example" placement="bottom-right">
    <button>Button 2</button>
    <button>Button 3</button>
    <button>Button 4</button>
</OasisMenuTrigger>
```

You can also create multiple trigger components with the same name prop:

```jsx
<OasisMenuTrigger name="example" inset={true}>
    <button>Button 6</button>
    <button>Button 7</button>
</OasisMenuTrigger>

<OasisMenuTrigger name="example" shiftDistance={5}>
    <button>Button 8</button>
    <button>Button 9</button>
</OasisMenuTrigger>
```

Note that the OasisMenuTrigger component does not work on string child nodes.

## Props

The `OasisMenuBlock` component accepts the following props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| children | Node | null | The content that will act as the trigger for the popup menu. |
| name | string (required) | - | A unique identifier for the trigger element. This is used to associate the trigger with the corresponding popup menu. |
| toggle | boolean | false | If `true`, the popup menu will open on the first trigger of the trigger element and close on the second. |
| trigger | string | contextmenu | The type of event that will trigger the opening of the popup menu. Available options are: 'click', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'keydown', 'keyup', 'submit', 'change', 'load', 'contextmenu'. |
| onTrigger | function | null | A callback function that will be called when the trigger element is clicked or activated using the specified trigger event. |
| placement | string | null | The position of the popup menu relative to the trigger element. Available options are: 'top-left', 'top', 'top-right', 'right-top', 'right', 'right-bottom', 'bottom-right', 'bottom', 'bottom-left', 'left-bottom', 'left', 'left-top', 'center'. |
| inset | boolean | false | If `true`, the popup menu will be displayed inside the trigger element. This only works if a `placement` is specified. |
| shiftDistance | number | 10 | The distance in pixels between the trigger element and the popup menu. This can be used to adjust the placement of the popup menu if needed. This only works if a `placement` is specified. |

## onTrigger

The `onTrigger` method is used to handle events that occur before the popup is created. It takes in a performed `event` and popup `object` as arguments.

```jsx
<OasisMenuTrigger name="example" onTrigger={(e, popup) => {
    console.log(e, popup);
    /* Perform operations here */
}}>
    <button>Button</button>
</OasisMenuTrigger>
```

If `false` is returned from the `onTrigger` function, it will prevent the popup from being initialized. This can be useful if you want to conditionally prevent the popup from showing based on certain criteria.

```jsx
<OasisMenuTrigger name="example" onTrigger={(e, popup) => {
    /* Stop popup creation based on some condition */
    if (condition !== true) {
        return false;
    }
}}>
    <button>Button</button>
</OasisMenuTrigger>
```

Learn more about `popup` object in the [instance](instance) section.
