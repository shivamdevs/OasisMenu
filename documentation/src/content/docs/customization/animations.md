---
title: "Animations"
description: "Know more about customizing animations for OasisMenu"
---

The `animation` prop allows you to control the animation effect when the menu opens. By default, the menu opens with a `slide-in` animation. You can choose from the following preset options:

* **slide-in:** The menu slides in from the left
* **flip-in:** The menu flips in from the top
* **drop-in:** The menu drops in from the top
* **bounce-in:** The menu bounces in from the top
* **none:** The menu appears without any animation

## Usage

To use the `animation` prop, pass the desired `animation` name as a string to the `OasisMenu` component:

```jsx
import { OasisMenu, OasisMenuItem } from 'oasismenu';

function MyMenu() {
  return (
    <OasisMenu name="my-menu" animation="slide-in">
      <OasisMenuItem onClick={() => console.log("Item 1 clicked")}>Item 1</OasisMenuItem>
      <OasisMenuItem onClick={() => console.log("Item 2 clicked")}>Item 2</OasisMenuItem>
      <OasisMenuItem onClick={() => console.log("Item 3 clicked")}>Item 3</OasisMenuItem>
    </OasisMenu>
  );
}

export default MyMenu;
```

## Customization

Additionally, you can also create your own custom animation by passing a CSS animation string to the `animation` prop. For example, if you want to use an opacity animation, you can pass `opacity` to the `animation` prop. Here's an example of customizing the opacity animation:

```css
.oasismenu[data-animation="opacity"] {
    visibility: hidden;
    opacity: 0;
}

.oasismenu[data-animation="opacity"][data-visible=true] {
    visibility: visible;
    opacity: 1;
}
```

Then, pass the name of the custom animation to the `animation` prop of the `OasisMenu` component to apply the animation:

```jsx
<OasisMenu name="example" animation="opacity">
  {/* Menu items go here */}
</OasisMenu>
```

### Date Visible

The `data-visible` property is used in conjunction with the `animation` prop to control the visibility of the `OasisMenu` component during animation. By default, the `OasisMenu` component is hidden until triggered by user interaction. However, with the `animation` prop, the component can be animated to show up in various ways.

The `data-visible` property is a `boolean` attribute that can be set to `true` or `false` to control whether the `OasisMenu` component is visible or hidden during animation. This changes happen behind the screen. The CSS code you provided is an example of how to use the `data-visible` property with the `animation` prop.

## Restrictions

* The `animation` prop only affects the opening animation of the menu. Currently, the closing animation is not customizable.
* The `animation` prop is independent of the `theme` prop and the `noStyle` prop.
* The `data-visible` attribute is only used during animation and does not affect the `OasisMenu` component outside of animation.
