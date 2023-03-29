---
title: "Limitations"
description: "Current limitations of OasisMenu"
---

As of the latest version of `oasismenu`, there are certain limitations that you should be aware of before using the library.

### Single Instance of OasisMenuBlock

It's important to remember that only one instance of the `OasisMenuBlock` component should be used in your application. If you use multiple instances, they will not share data and can cause conflicts, such as a popup from one block not closing when another block is opened. This can also result in errors, so it's best to avoid using multiple `OasisMenuBlock` components in the same application.

### Fixed Placement Limitations

The `placement` options on `OasisMenuTrigger` places the popup at the provided place, but it doesn't automatically map to the available position. This means that the popup might not be displayed correctly and could be cut off. Specifically, the popup is positioned using fixed positioning, which may cause it to hide behind the offset of the window screen.

## Improvements and Contributions

We are working to address these limitations in future updates. In the meantime, if you encounter any issues or would like to contribute to the project, please visit our [GitHub page](https://github.com/shivamdevs/OasisMenu).
