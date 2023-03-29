---
title: "Theme Customization"
description: "Know more about customizing themes for OasisMenu"
---

The `OasisMenu` component comes with several built-in themes that can be applied to change the look and feel of the context menu. The available themes are:

* darkangel
* default
* fire
* forest
* midnight
* moonlight
* nightfall
* none
* ocean
* rose
* royal
* sky
* space
* sunlight

To use one of the available pre-defined themes in `oasismenu`, you can simply `import` the corresponding theme CSS file into your project and then to apply the theme to the `OasisMenu` component, simply pass the `theme` prop with the desired theme name as the value. For example, to use the `darkangel` theme, you can add the following `import` statement to your project:

```jsx
import 'oasismenu/themes/darkangel.css';
// Import theme styling

<OasisMenu name="example" theme="darkangel">
  {/* Menu items go here */}
</OasisMenu>
```

This will load the CSS rules for the darkangel theme, and apply them to all OasisMenu and OasisMenuItem components in your application.

### Styling Variables

Within the CSS selector for the custom theme, you can customize any of the following CSS variables to achieve the desired look:

* **--bg-popup:** Background color of the popup menu.
* **--bg-item-hover:** Background color of a menu item when it is hovered.
* **--bg-item-disabled:** Background color of a disabled menu item.
* **--bg-break:** Background color of a menu separator.
* **--border-popup:** Border color of the popup menu.
* **--shadow-popup:** Box shadow of the popup menu.
* **--scroll-popup:** Scrollbar color of the popup menu.
* **--color-item-primary:** Content or children text color of a menu item.
* **--color-item-secondary:** Icon and status icon color of a menu item.
* **--color-item-tertiary:** After prop text color of a menu item.
* **--color-item-disabled:** Text color of a disabled menu item.

## Custom Styling

In addition to the built-in themes, you can also pass you own custom theme by setting the `theme` prop to a custom theme name, and then customizing the theme's CSS variables to achieve the desired look.

To do this, add a CSS selector for the custom theme using the `[data-theme="custom"]` attribute selector, where `custom` is the name of the custom theme. For example:

```css
.oasismenu[data-theme="custom-theme"] {
  /* Custom theme CSS variables go here */
}
```

Then, set the `theme` prop of the `OasisMenu` component to the name of the custom theme:

```jsx
<OasisMenu name="example" theme="custom-theme">
  {/* Menu items go here */}
</OasisMenu>
```

### Tomato

For example, to create a custom theme called `tomato` with a red color scheme, you can add the following CSS rules:

```css
.oasismenu[data-theme="tomato"] {
  --bg-popup: #f95d6a;
  --bg-item-hover: #fd7183;
  --bg-item-disabled: #e64d5c;
  --bg-break: #f14163;

  --border-popup: #e64d5c;
  --shadow-popup: #f95d6a88;
  --scroll-popup: #e1e1e1;

  --color-item-primary: #fff;
  --color-item-secondary: #e1e1e1;
  --color-item-tertiary: #c4c4c4;
  --color-item-disabled: #5c5c5c;
}
```

Then, pass the name of the custom theme to the `theme` prop of the `OasisMenu` component to apply the theme:

```jsx
<OasisMenu name="example" theme="tomato">
  {/* Menu items go here */}
</OasisMenu>
```

### No Styling

You can also set the `theme` prop to `none` to remove any theming and fallback to the default styling. Additionally, you can set the `noStyle` prop to true to remove any styling permanently.

> Note that setting the `noStyle` or `theme` prop will not affect the animation of the OasisMenu component.
