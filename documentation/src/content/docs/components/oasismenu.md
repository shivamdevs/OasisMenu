---
title: "OasisMenu"
description: "Know more about OasisMenu and how to use it"
---

The `OasisMenu` component defines the content of your context menu. It can contain any number of `OasisMenuItem` or `OasisMenuBreak` components. The `name` prop should be set to the same value as the `name` prop of the corresponding `OasisMenuTrigger`.

### Content

You can add any number of `OasisMenuItem` or `OasisMenuBreak` components within the `OasisMenu` component to define its content.

* **OasisMenuItem:** Represents a clickable menu item.
* **OasisMenuBreak:** Used to add a horizontal line to separate items.

### OasisMenu naming

While there can be multiple triggers of a single `name`, there has to be a single `OasisMenu` component for all the triggers under the same `name`. In case there are multiple `OasisMenu` components any one of it will be applied for use case. It can be of any order depending on the rendering step.

To ensure proper functionality, the `name` prop of the `OasisMenu` component should match the `name` prop of the corresponding `OasisMenuTrigger`. This `name` prop is used to link the trigger to its corresponding menu.

## Usage

To use the `OasisMenu` component, import it from `oasismenu` and place it wherever you want the context menu to appear:

```jsx
import { OasisMenu } from 'oasismenu';
```

After that, add the component to your React component, specifying the necessary props as follows:

```jsx
<OasisMenu name="example">
    {/* Items and breaks goes here */}
</OasisMenu>
```

> It is not recommended to place the `OasisMenu` component as a child of the `OasisMenuTrigger` component. Doing so may result in unexpected behavior and could cause issues with the rendering and functionality of the context menu. It is important to keep these two components separate and use them as intended to ensure the proper functioning of your application's context menu.

### Adding items only

You can add multiple `OasisMenuItem` components within the `OasisMenu` component as follows:

```jsx
<OasisMenu name="example">
    <OasisMenuItem content="Item 1" />
    <OasisMenuItem content="Item 2" />
    <OasisMenuItem content="Item 3" />
</OasisMenu>
```

### Adding items and breaks

You can add a mixture of `OasisMenuItem` and `OasisMenuBreak` components within the `OasisMenu` component:

```jsx
<OasisMenu name="example">
    <OasisMenuItem content="Item 1" />
    <OasisMenuItem content="Item 2" />
    <OasisMenuItem content="Item 3" />
    <OasisMenuBreak />
    <OasisMenuItem content="Item 4" />
    <OasisMenuBreak />
    <OasisMenuItem content="Item 5" />
</OasisMenu>
```

### Adding custom nodes

You can also add any custom HTML items within the `OasisMenu` component:

```jsx
<OasisMenu name="example">
    <div>John Doe</div>
    <OasisMenuBreak />
    <OasisMenuItem content="Item 1" />
    <OasisMenuItem content="Item 2" />
</OasisMenu>
```

> Note that these custom elements will not trigger the popup closing event.
>
> We are working on implementing this feature in the near future.

## Props

The `OasisMenu` component accepts the following props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| name | string (required) | - | A unique identifier for the `OasisMenu` component. This is used to associate the trigger with the corresponding `OasisMenuTrigger`. |
| children | Node | null | The content that pertains to `OasisMenuItems`, `OasisMenuBreak`, or custom React nodes. |
| className | string | - | An optional CSS class to apply to the `OasisMenu` component. |
| noStyle | boolean | false | If `true`, the default styles for the `OasisMenu` will not be applied. |
| theme | string | 'default' | The color theme for the `OasisMenu`. Available options are: 'darkangel', 'default', 'fire', 'forest', 'midnight', 'moonlight', 'nightfall', 'none', 'ocean', 'rose', 'royal', 'sky', 'space', 'sunlight', or a custom theme name. |
| animation | string | 'slide-in' | The animation style for the `OasisMenu`. Available options are: 'slide-in', 'flip-in', 'drop-in', 'bounce-in', or 'none'. |
| itemClass | string | - | An optional CSS class to apply to each `OasisMenuItem` component. |
| onItemClick | function | null | A callback function that will be called when an `OasisMenuItem` is clicked. |
| onItemHover | function | null | A callback function that will be called when an `OasisMenuItem` is hovered over. |
| itemHoverClass | string | - | An optional CSS class to apply to an `OasisMenuItem` when it is hovered over. |
| itemKeepHovered | boolean | false | If `true`, the `OasisMenuItem` will stay hovered over even after the mouse leaves it. |
| beforeHide | function | null | A callback function that will be called before the `OasisMenu` is hidden. |
| beforeShow | function | null | A callback function that will be called before the `OasisMenu` is shown. |
| beforeDestroy | function | null | A callback function that will be called before the `OasisMenu` is destroyed. |
| beforeConstruct | function | null | A callback function that will be called before the `OasisMenu` is constructed. |
| onShown | function | null | A callback function that will be called after the `OasisMenu` is shown. |
| onHidden | function | null | A callback function that will be called after the `OasisMenu` is hidden. |
| onDestroy | function | null | A callback function that will be called after the `OasisMenu` is destroyed. |
| onConstruct | function | null | A callback function that will be called after the `OasisMenu` is constructed. |
| onOpen | function | null | A callback function that will be called when the `OasisMenu` is opened. |
| onClose | function | null | A callback function that will be called when the `OasisMenu` is closed. |
| onSelect | function | null | A callback function that will be called when an `OasisMenuItem` is selected. |

## Props to Consider

These props might require a more detailed explanation or an example to understand their usage properly.

### animation and noStyle

The `animation` prop doesn't belongs to the styling part. As such enabling the `noStyle` feature will not disable the default `animation` applied to the popup. To disable use `none` in the `animation` prop. Learn more about animations and styling in [Customization](../customization) section.

### /item/+$ props

The properties that contain the substring `item` are applicable to the `OasisMenuItem` component.

## Functional Props

The following `props` allow you to define custom behavior for the `OasisMenu` component:

### onItemClick

The `onItemClick` method is called when an item in the popup menu is clicked. It takes in the clicked item's `data` and `popup` object as arguments.

```jsx
<OasisMenu name="example" onItemClick={(data, popup) => {
    console.log(data, popup);
    /* Perform operations here */
}}>
    <OasisMenuItem data={{id: 1}}>Item 1</OasisMenuItem>
    <OasisMenuItem data={{id: 2}}>Item 2</OasisMenuItem>
    <OasisMenuItem data={{id: 3}}>Item 3</OasisMenuItem>
</OasisMenu>
```

### onItemHover

The `onItemHover` method is called when an item in the popup menu is hovered over with the mouse. It takes in the mouse `event`, the hovered item's `data`, and the `popup` object as arguments.

```jsx
<OasisMenu name="example" onItemHover={(event, data, popup) => {
    console.log(event, data, popup);
    /* Perform operations here */
}}>
    <OasisMenuItem data={{id: 1}}>Item 1</OasisMenuItem>
    <OasisMenuItem data={{id: 2}}>Item 2</OasisMenuItem>
    <OasisMenuItem data={{id: 3}}>Item 3</OasisMenuItem>
</OasisMenu>
```

### beforeHide

The `beforeHide` method is used to perform actions before the `OasisMenu` is hidden. It takes in the `popup` object as an argument.

```jsx
<OasisMenu beforeHide={(menu) => {
    /* Perform actions before hiding the menu */
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

If `false` is returned from the `beforeHide` function, it will prevent the `OasisMenu` from being hidden.

```jsx
<OasisMenu beforeHide={(menu) => {
    /* Prevent menu from being hidden based on some condition */
    if (condition !== true) {
        return false;
    }
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

### beforeShow

The `beforeShow` method is used to perform actions before the `OasisMenu` is shown. It takes in the `popup` object as an argument.

```jsx
<OasisMenu beforeShow={(menu) => {
    /* Perform actions before showing the menu */
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

If `false` is returned from the `beforeShow` function, it will prevent the `OasisMenu` from being shown.

```jsx
<OasisMenu beforeShow={(menu) => {
    /* Prevent menu from being shown based on some condition */
    if (condition !== true) {
        return false;
    }
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

### beforeConstruct

The `beforeConstruct` method is used to perform actions before the `OasisMenu` is constructed. It takes in the `popup` object as an argument.

```jsx
<OasisMenu beforeConstruct={(menu) => {
    /* Perform actions before constructing the menu */
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

If `false` is returned from the `beforeConstruct` function, it will prevent the `OasisMenu` from being constructed.

```jsx
<OasisMenu beforeConstruct={(menu) => {
    /* Prevent menu from being constructed based on some condition */
    if (condition !== true) {
        return false;
    }
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

### beforeDestroy

The `beforeDestroy` method is used to perform actions before the `OasisMenu` is destroyed. It takes in the `popup` object as an argument.

```jsx
<OasisMenu beforeDestroy={(menu) => {
    /* Perform actions before destroying the menu */
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

If `false` is returned from the `beforeDestroy` function, it will prevent the `OasisMenu` from being destroyed.

```jsx
<OasisMenu beforeDestroy={(menu) => {
    /* Prevent menu from being destroyed based on some condition */
    if (condition !== true) {
        return false;
    }
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

### onHidden

The `onHidden` method is used to handle events that occur after the `OasisMenu` is hidden. It takes in the `popup` object as an argument.

```jsx
<OasisMenu onHide={() => console.log("Menu hidden")} onHidden={(menu) => {
    console.log("Menu hidden", menu);
}}>
    {/* menu items */}
</OasisMenu>
```

### onShown

The `onShown` method is used to handle events that occur after the `OasisMenu` is shown. It takes in the `popup` object as an argument.

```jsx
<OasisMenu onShow={() => console.log("Menu shown")} onShown={(menu) => {
    console.log("Menu shown", menu);
}}>
    {/* menu items */}
</OasisMenu>
```

### onConstruct

The `onConstruct` method is used to handle events that occur after the `OasisMenu` is constructed. It takes in the `popup` object as an argument.

```jsx
<OasisMenu onConstruct={(menu) => {
    console.log("Menu constructed", menu);
}}>
    {/* menu items */}
</OasisMenu>
```

### onDestroy

The `onDestroy` method is used to handle events that occur after the `OasisMenu` is destroyed. It takes in the `popup` object as an argument.

```jsx
<OasisMenu onDestroy={(menu) => {
    console.log("Menu destroyed", menu);
}}>
    {/* menu items */}
</OasisMenu>
```

### onOpen

The `onOpen` method is used to handle events that occur when the menu is opened. It takes in the `popup` object as an argument.

```jsx
<OasisMenu onOpen={(popup) => {
    console.log(popup);
    /* Perform operations here */
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

### onClose

The `onClose` method is used to handle events that occur when the menu is closed. It takes in the `popup` object as an argument.

```jsx
<OasisMenu onClose={(popup) => {
    console.log(popup);
    /* Perform operations here */
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

### onSelect

The `onSelect` method is used to handle events that occur when an item in the menu is selected. It takes in the selected `data` and `popup` object as arguments.

```jsx
<OasisMenu onSelect={(data, popup) => {
    console.log(data, popup);
    /* Perform operations here */
}}>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
</OasisMenu>
```

## Functional Flow

The `OasisMenu` component follows a certain flow of functions during its lifecycle. The flow is as follows:

1. beforeConstruct
2. onConstruct
3. beforeShow
4. onShown
5. onOpen
6. onItemClick
7. onSelect
8. beforeHide
9. onHidden
10. beforeDestroy
11. onDestroy
12. onClose

## Function Prefix

Functions with the prefix `on` are called after the corresponding event has occurred.

Functions with the prefix `before` are called before the corresponding event is executed. These functions can return `false` to prevent the corresponding event from being executed.
