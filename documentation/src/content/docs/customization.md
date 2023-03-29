---
title: "Customization"
description: "Know more about customizing OasisMenu"
---

The `oasismenu` components are highly flexible and customizable. You can easily customize the appearance and behavior of the menu by using the provided props and class names, or by creating your own styles.

## Custom className prop

Styling in `oasismenu` components can be easily customized by passing a `className` prop to `OasisMenu`, `OasisMenuItem`, or `OasisMenuBreak` components. By doing so, you can apply your own custom styles to these components.

> The additional styles do not replace the previous styling, and instead are added to it. If you want to override the default styling, you can use the `noStyle` prop of `OasisMenu` then apply your own custom styling.

Here's an example of how you can use the `className` prop to apply custom styles to `OasisMenu` and OasisMenuItem `components`:

```jsx
import { OasisMenu, OasisMenuItem } from 'oasismenu';
import styles from './menu.module.css'; // Import your custom styles

function MyMenu() {
  return (
    <OasisMenu name="my-menu" className={styles.menu}>
      <OasisMenuItem className={styles.menuItem}>Item 1</OasisMenuItem>
      <OasisMenuItem className={styles.menuItem}>Item 2</OasisMenuItem>
      <OasisMenuItem className={styles.menuItem}>Item 3</OasisMenuItem>
    </OasisMenu>
  );
}

export default MyMenu;
```

In this example, we have imported custom styles from a CSS module file and passed the `className` prop to both `OasisMenu` and `OasisMenuItem` components. The custom styles will be applied to these components in addition to the default styles provided by `oasismenu`.

Similarly, you can use the `className` prop with `OasisMenuBreak` component to apply custom styles to the menu separator. Here's an example:

```jsx
import { OasisMenu, OasisMenuItem, OasisMenuBreak } from 'oasismenu';
import styles from './menu.module.css'; // Import your custom styles

function MyMenu() {
  return (
    <OasisMenu name="my-menu">
      <OasisMenuItem className={styles.menuItem}>Item 1</OasisMenuItem>
      <OasisMenuBreak className={styles.menuSeparator} />
      <OasisMenuItem className={styles.menuItem}>Item 2</OasisMenuItem>
      <OasisMenuItem className={styles.menuItem}>Item 3</OasisMenuItem>
    </OasisMenu>
  );
}

export default MyMenu;
```

In this example, we have applied custom styles to `OasisMenuBreak` component using the `className` prop.

By using the `className` prop, you can easily apply your own custom styles to `oasismenu` components and make them fit seamlessly into your project's design.

### Default Class Names

`oasismenu` provides default class names for its components that you can use to style them:

* **.oasismenu:** The class name for the OasisMenu component.
* **.oasisitem:** The class name for the OasisMenuItem component.
* **.oasisbreak:** The class name for the OasisMenuBreak component.
* **.oasishovered:** The class name for the item that is currently being hovered.
* **.oasisicon:** The class name for the container that holds the icon for an item.
* **.oasisstatus:** The class name for the container that holds the status icon for an item.
* **.oasiscontent:** The class name for the container that holds the children or content for an item.
* **.oasisafter:** The class name for the container that holds the after prop for an item.

You can use these class names in your CSS to style the `oasismenu` components as desired. Here's an example:

```css
/* Style the OasisMenu component */
.oasismenu {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  padding: 8px;
}

/* Style the OasisMenuItem component */
.oasisitem {
  color: #333;
  cursor: pointer;
  display: block;
  font-size: 14px;
  line-height: 1.5;
  padding: 8px 12px;
  text-align: left;
}

/* Style the OasisMenuItem component when it is being hovered */
.oasisitem.oasishovered {
  background-color: #f5f5f5;
}

/* Style the container that holds the icon for an item */
.oasisicon {
  margin-right: 8px;
}

/* Style the container that holds the status icon for an item */
.oasisstatus {
  margin-left: 8px;
}

/* Style the container that holds the content for an item */
.oasiscontent {
  flex: 1;
}

/* Style the container that holds the after prop for an item */
.oasisafter {
  margin-left: auto;
  color: #999;
  font-size: 12px;
}
```

In this example, we've added some basic styles to the `OasisMenu` and `OasisMenuItem` components by using their respective class names. We've also added some styles to the `oasisicon`, `oasisstatus`, `oasiscontent`, and `oasisafter` containers. Finally, we've added a style for the `.oasishovered` class to change the background color of the OasisMenuItem when it is being hovered.

You can modify these styles to fit your project's needs.
