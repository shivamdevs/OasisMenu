---
title: "OasisMenuBreak"
description: "Know more about OasisMenuBreak and how to use it"
---

The `OasisMenuBreak` component is used to insert a separator between items within your context menu. Using `OasisMenuBreak` component makes it easier to visually separate the different items in the context menu.

## Usage

To use the `OasisMenuBreak` component, import it from `oasismenu` and place it within the `OasisMenu` component:

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

## Props

The `OasisMenuBlock` component accepts the following props:

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| className | string | - | An optional CSS class to apply to the `OasisMenuBreak` component. |

### className

The `OasisMenuBreak` component doesn't have many props, but you can customize its appearance by providing a `className` prop to the component. The `className` prop takes a string as its value, which is applied to the generated HTML element.
