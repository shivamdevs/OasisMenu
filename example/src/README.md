# Oasis Menu

OasisMenu is a lightweight and customizable context menu implementation for React. It allows users to easily add context menus to their projects, making it easier for users to access actions and options relevant to the context in which they are working.

## Installation

To install OasisMenu, simply run the following command:

```bash
npm install oasismenu
```

In this example make sure you are updated to the latest. Run the following command to update oasismenu (or all) package(s) to the latest:

```bash
npm install oasismenu@latest
# or
npm update
```

## Usage

To use OasisMenu, you'll need to import it into your React project and add it to the relevant components. Here's an example of how to use it:

```jsx
import React from 'react';
import { OasisMenuBlock, OasisMenuTrigger, OasisMenu, OasisMenuItem, OasisMenuBreak } from 'oasismenu';

function App() {
    return (
        <>
            <OasisMenuBlock>
                <OasisMenuTrigger name="menu">
                    <button>Trigger button</button>
                </OasisMenuTrigger>
                <OasisMenu name="menu">
                    <OasisMenuItem onClick={() => alert("Menu Item 1")} content="Menu Item 1" />
                    <OasisMenuBreak />
                    <OasisMenuItem onClick={() => alert("Menu Item 2")} content="Menu Item 2" />
                    <OasisMenuBreak />
                    <OasisMenuItem onClick={() => alert("Menu Item 3")} content="Menu Item 3" />
                </OasisMenu>
            </OasisMenuBlock>
        </>
    );
};

export default App;
```

This is just a basic layout. OasisMenu offers a wide range of customization options, so be sure to check out the [official documentation](https://github.com/shivamdevs/OasisMenu/blob/main/README.md) to learn more.

### Components

#### OasisMenuBlock

The `OasisMenuBlock` component should be placed once at the top level of your application as a parent where all the processing happens. This component acts as a container for all context menus and triggers within your application.

#### OasisMenuTrigger

The `OasisMenuTrigger` component is used to define the trigger element for your context menu. This can be any valid HTML element or custom React component. The `name` prop is used to associate the trigger with a specific context menu.

#### OasisMenu

The `OasisMenu` component defines the content of your context menu. It can contain any number of `OasisMenuItem` or `OasisMenuBreak` components. The `name` prop should be set to the same value as the `name` prop of the corresponding `OasisMenuTrigger`.

#### OasisMenuItem

The `OasisMenuItem` component defines a single item within your context menu. It can contain any valid HTML content, and the `onClick` prop should be set to a function that will be executed when the item is clicked.

#### OasisMenuBreak

The `OasisMenuBreak` component is used to insert a separator between items within your context menu.

## Contributing

If you'd like to contribute to OasisMenu, please feel free to submit a pull request or open an issue on the project's [GitHub repository](https://github.com/shivamdevs/OasisMenu).

## License

OasisMenu is released under the [MIT license](https://github.com/shivamdevs/OasisMenu/blob/main/LICENSE).
