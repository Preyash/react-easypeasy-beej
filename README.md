# React EasyPeasy Beej

This project is a [React](https://create-react-app.dev/docs/getting-started/) boilerplate that can be used as a base to build your a web application.

The starter kit provides with the modern tools for developer efficiency and debugging. The architecture has been configured observing the common patterns adopted by the react community.

[comment]: <> ([![NPM Version][npm-image]][npm-url])

[comment]: <> ([![Build Status][travis-image]][travis-url])

[comment]: <> ([![Downloads Stats][npm-downloads]][npm-url])

## Getting Started

- [Usage](#usage)
- [Tools and Libraries](#tools-and-libraries)
- [State management and Folder structure](#state-management-and-folder-structure)
- [Path resolver](#path-resolver)
- [Global Types](#global-types)
- [Testing](#testing)
- [Debugging](#debugging)
- [Linting](#linting)
- [Release History](#release-history)
- [Contributing](#contributing)
- [Author](#author)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

## Usage

- Install [Node.js](https://nodejs.org/en/). Follow the installation steps for respective operating system from the [official documentation](https://nodejs.org/en/). Make sure you install the **LTS** version of Node.
- You can download the boilerplate in 2 ways:
  - Use it as a template by clicking `Use Template` green button which can be found on the top right corner next to the `Clone` dropdown on the repositories GitHub page
  - Clone the project - `git clone https://github.com/rashtay/react-easypeasy-beej.git <your project name>`. Remove the previous git history: - `rm -rf .git/`.
- Add the npm dependencies by running - `yarn install`
- Start the packager with `yarn start`
- Remove the LICENSE file and update the `license` field in `package.json` if your project is not open source
- Update the existing README.md file with the content related to your app and app development.
- You can now create a new git repository for your project (using `git init`) and make the first commit.

## Tools and Libraries

The boilerplate has the following tools and libraries:

- [React](https://reactjs.org/) a JavaScript library for building user interfaces
- [Easy peasy](https://easy-peasy.now.sh/) redux wrapper for state management
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start) to handle routing and navigation in the app
- [Typescript](https://www.typescriptlang.org/) for type checking and then compiling the code to plain/vanilla JavaScript
- [Husky](https://www.npmjs.com/package/husky) to add precommit and prepush hooks
- [Lint Staged](https://www.npmjs.com/package/lint-staged) to lint the currently modified file
- [Prettier](https://prettier.io/), [TSLint](<[https://palantir.github.io/tslint/](https://palantir.github.io/tslint/)>) and [ESlint](https://eslint.org/) preconfigured for React Native
- [SASS](https://sass-lang.com/) is the most mature, stable, and powerful professional grade CSS extension language in the world.
- [Redux Devtools](https://github.com/reduxjs/redux-devtools) for Redux with hot reloading, action replay, and customizable UI

## State management and Folder structure

I have added [easy peasy](https://easy-peasy.now.sh/) for state management. Easy Peasy provides you with an **intuitive** API to **quickly** and **easily** manage the state for your React application.

The boilerplate consists of the **easy-peasy** [Dummy Product App](https://codesandbox.io/s/easy-peasy-tutorial-listeners-rhni3) code refactored to work with react native. You can refer to the tutorials and understand what I have done in the existing app.

Based on the library, we have created the following folders:

- **services** - A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well. For example, your APIs should reside in this folder. You should be injecting services.
- **models** - A model definition is an object based structure describing the state and behaviour ([actions](https://easy-peasy.now.sh/docs/api/action.html) etc) of your [store](https://easy-peasy.now.sh/docs/api/store.html). It can be as deep as you like, and can be split across multiple files, allowing you to import and compose your model as you please. All your model definition would reside in this folder.
- **containers** - The business logic should reside in a container and the data generated from this logic should be passed to the component from here. They are also known as smart components. All your smart components should reside it in this folder.
- **components** - A **component** is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a **element** that describes how a section of the UI (User Interface) should appear. They do not care about the business logic and are known as the dumb component. Their job as a module is to perform
- **hooks** - Folder to keep all your custom hooks
- **utils** - Folder to keep all your project utility/helper functions

## Path resolver

- Let's say you have `product.js` file in `src/components/product/` and you want to import `utils/string.js`.
- So, instead of importing the file present in like `../../utils/string.js`, you can import it like `utils/string`.
- All the aliases can be found in `tsconfig.json`.

## Global types

- We have a types folder placed in the root. It consists of the globals types being used across the project and third part module declarations that currently doesn't have typescript support.
- Typescript (using `tsconfig.json`) has been configured to identify these global types.

## Testing

- Refer to [Easy Peasy Testing](https://easy-peasy.now.sh/docs/testing/) for testing easy-peasy implementation.

## Debugging

- You can continue debugging the JavaScript as you usually do while building web applications
- You can install [React Devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) as Chrome extension
- You can install [Redux devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) as a Chrome extension
- Redux devtools has been preconfigured to work with any library that use this tool e.g reactotron, remote-redux-devtools, etc.

## Linting

The project comes preconfigured with `eslint` and `prettier` . I've added support for `react`, `typescript` and `airbnb`'s proposal for typescript eslint. I have listed the additional packages being used for linting:

- eslint-plugin-react
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- @typescript-eslint/eslint-plugin
- eslint-config-airbnb-typescript
- eslint-config-prettier

The eslint, prettier and typescript configuration files have been updated to accomodate the additional plugins.

I have made sure you cannot the code if there are any lint or [type check](https://github.com/okonet/lint-staged/issues/468#issuecomment-605102567) issues.
