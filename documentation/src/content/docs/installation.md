---
title: "Installation"
description: "Install OasisMenu to your project"
---

Welcome to the installation guide for OasisMenu. Here are the steps to get started:

### Prerequisites

Before installing OasisMenu, make sure you have the following:

* **Node.js** - `v16.0.0` or higher.
* **Text Editor** - We recommend [VS Code](https://code.visualstudio.com/) but you can use any editor that supports ReactJS.
* **Terminal** - To install the package into your project.

## Installation

### 1. Open the React project

Open your terminal and navigate to your existing project by running:

```bash
cd C:/path/to/project
```

If you don't have an existing project, you can create a new one using `create-react-app` or any other method you prefer:

```bash
npx create-react-app project
cd project
```

### 2. Install OasisMenu

Once you are inside the project root directory, install OasisMenu using the following command:

```bash
npm install oasismenu
```

### 3. Import the package

In your application, import the `oasismenu` module like this:

```jsx
import { OasisMenuBlock } from 'oasismenu';
```

You are now ready to use the OasisMenu package in your application.

## Usage

To use OasisMenu in your React project, you will need to import it and add it to the relevant components. Here's an example of how to use it:

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

For a more comprehensive understanding of each component, we recommend checking out the [Components](components) page where you can find a detailed explanation of all the available components.

### Additional Imports

To switch to a different theme in OasisMenu, simply import the corresponding CSS file into your project. For example, to use the `Dark Angel` theme, add the following import statement to your code:

```jsx
import "oasismenu/themes/darkangel.css";
```

We offer a variety of themes that you can use to customize your OasisMenu. You can find them all on [Themes](themes) page.
