---
title: "OasisMenuItem"
description: "Know more about OasisMenuItem and how to use it"
---

The `OasisMenuItem` component is used to create a single item within an `OasisMenu`. It can be used multiple times inside an `OasisMenu` component, and each component and its children will work as an individual menu item.

## Usage

To use the `OasisMenuItem` component, first import it into your React project by adding the following code at the beginning of your file:

```jsx
import { OasisMenuItem } from 'oasismenu';
```

After that, add the component to your `OasisMenu` component, specifying the necessary props as follows:

```jsx
<OasisMenu>
    <OasisMenuItem>Item 1</OasisMenuItem>
    <OasisMenuItem>Item 2</OasisMenuItem>
    <OasisMenuItem>Item 3</OasisMenuItem>
</OasisMenu>
```

You can customize the menu item by specifying additional props:

```jsx
<OasisMenuItem
    content="Item 1"
    icon={<i className="fas fa-check"></i>}
    checked={true}
    disabled={true}
    preventClose={true}
    statusIcon={<i className="fas fa-exclamation"></i>}
    className="custom-class"
    hoverClassName="custom-hover-class"
    data={{ customData: true }}
    onClick={() => {
        console.log('Item 1 clicked');
    }}
/>
```

> Note that the `OasisMenuItem` component does not work on its own and must be used inside an `OasisMenu` component.

## Props

The OasisMenuItem component accepts the following props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| children | Node | null | The content of the menu item. |
| content | Node | null | An alternative to the children prop, allows for a custom content to be specified. |
| icon | Node | null | An icon to be displayed alongside the content of the menu item. |
| after | Node | null | An element to be displayed after the content of the menu item. |
| checked | boolean | false | If `true`, displays a checkmark icon alongside the menu item. |
| disabled | boolean | false | If `true`, disables the menu item. |
| preventClose | boolean | false | If `true`, prevents the menu from closing after the item is clicked. |
| statusIcon | Node | null | An icon to be displayed on the right side of the menu item. |
| className | string | null | A custom class to be added to the menu item. |
| hoverClassName | string | null | A custom class to be added to the menu item when it is hovered over. |
| data | any | null | A custom data object to be passed to the onClick and onHover callback functions. |
| onClick | function | null | A callback function that will be called when the menu item is clicked. |
| onHover | function | null | A callback function that will be called when the menu item is hovered over. |

## Props to Consider

These are some important props that might require further explanation or examples to fully understand their usage.

### content and children

Both `content` and `children` props are used to define the main text or content of the `OasisMenuItem`. However, when both props are provided, the `content` prop takes precedence over the `children` prop. For example:

```jsx
<OasisMenuItem content="Save" data={{id: 1}}>Click to Save</OasisMenuItem>
// "Save" will be displayed as the main content of the item.
```

### statusIcon and checked

The `statusIcon` and `checked` props are used to indicate the state of the item. They both render in the same place, so when the `statusIcon` prop is defined, the check icon will not be displayed. For example:

```jsx
<OasisMenuItem content="Undo" checked statusIcon={<UndoIcon />} />
// The Undo icon will be displayed as the status icon, and no check icon will be displayed.
```

### statusIcon and icon

Both `statusIcon` and `icon` props allow you to provide custom React nodes as icons for the item. These nodes can be custom `SVG` icons, or icons from libraries like `fontawesome`, `react-icons` or `flaticon`. If a TextNode is provided, it will affect the rendered content of the item. For example:

```jsx
<OasisMenuItem content="Print" icon={<PrinterIcon />} statusIcon={<SpinnerIcon />} />
// The Printer icon will be displayed as the main icon on left, and the Spinner icon will be displayed as the status icon on right.
```

### after

The `after` prop is used to display additional text after the main content of the item. This can be useful for displaying shortcuts or additional information.

```jsx
<OasisMenuItem content="Cut" after="Ctrl + X" />
<OasisMenuItem content="Copy" after="Ctrl + C" />
<OasisMenuItem content="Paste" after="Ctrl + V" />
<OasisMenuItem content="Delete" after="Del" />
```

In these examples, the `after` prop is used to display keyboard shortcuts that are associated with the corresponding menu item. This can help users quickly understand how to perform an action using a keyboard shortcut instead of relying on a mouse or touch interface.

You can also use the `after` prop to display additional information about the menu item, such as the file type associated with a "Save" or "Open" menu item:

```jsx
<OasisMenuItem content="Save" after=".txt" />
<OasisMenuItem content="Open" after=".pdf" />
```

In this case, the `after` prop is used to display the file type that will be affected by the menu item action.

### preventClose

The `preventClose` prop is used to prevent the closing of a popup menu when the item is clicked. This means that even though the item is clicked, the popup menu will remain open instead of closing. However, the click `event` will still be triggered as usual.

## Functional Props

The following props allow you to define custom behavior for the `OasisMenuItem` component:

### onClick

The `onClick` method is called when the menu item is clicked. It takes in the clicked item's `data` and `popup` object as arguments.

```jsx
<OasisMenuItem data={{id: 1}} onClick={(data, popup) => {
    console.log(data, popup);
    /* Perform operations here */
}}>
    Item 1
</OasisMenuItem>
```

### onHover

The `onHover` method is called when the mouse hovers over the menu item. It takes in the item's `data` and `popup` object as arguments.

```jsx
<OasisMenuItem data={{id: 1}} onHover={(data, popup) => {
    console.log(data, popup);
    /* Perform operations here */
}}>
    Item 1
</OasisMenuItem>
```

## Applying Props to All Items in OasisMenu

Certain props are automatically applied to all `OasisMenuItem` components within an `OasisMenu`. These include:

* itemClass
* itemHoverClass
* onItemClick
* onItemHover
* itemKeepHovered

To learn more about how these props are used in `OasisMenu`, refer to the documentation section on [OasisMenu](oasismenu#props).
