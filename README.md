# Thram's Boilerplate for React Applications

# Setup

**NOTE: I'm using `yarn` for this boilerplate as a personal preference. You can easily update the code to use just `npm`.**

### 1) Install [Yarn](https://yarnpkg.com/)

`brew install yarn`

### 2) Clone this repo

`git clone https://github.com/Thram/react-boilerplate [your-app-name]`

Go into your folder: `cd [your-app-name]`

### 3) Setup

run: `yarn setup`

This will install all the packages needed for start the project, and setup your github repo.

# Dev Tools

- [Webpack](https://webpack.js.org/) 
- [Babel](babeljs.io)
- [ESLint](http://eslint.org/)
- [ESLint AirBnB Styleguide](https://github.com/airbnb/javascript)
- [React Storybook](https://storybooks.js.org)
- [Jest](https://facebook.github.io/jest/)
- [commitizen](http://commitizen.github.io/cz-cli/)

# Technology Stack

- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Redux Thunk](https://github.com/gaearon/redux-thunk)
- [Fetch](https://github.com/github/fetch)
- [React Router](https://reacttraining.com/react-router/)
- [RC HammerJS](https://github.com/react-component/react-hammerjs)
- [LoDash](lodash.com)
- [PureCSS](https://purecss.io/)
- [emotion](https://emotion.sh/)

# Scripts

All the scripts are executed the following way: `yarn [script]`

### `start`

Starts a `Hot Server` for development at [http://0.0.0.0:8080](http://0.0.0.0:8080)

### `storybook`

Starts `React Storybook` for development at [http://0.0.0.0:6006](http://0.0.0.0:6006)

### `test`

Run `Linter`, your `Snapshot Tests` and your `Regular Tests`.

### `cz`

Commit your changes in a `zen` way (Past `tests` first)

### `docs`

Creates storybook release at `./docs`

### `build`

Creates production release at `./release`

### `qa`

Creates QA release at `./qa`

#### QA Release is on Dev Mode and add special markup for Automated testing using `babel-plugin-react-element-info`

### `analyze`

Creates QA release at `./qa` and shows a bundle analyze

# Recommended Tools: 

- [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Redux DevTools Extension](http://extension.remotedev.io/)
- [VSCode](https://code.visualstudio.com/)
- [VSCode Plugins](https://github.com/viatsko/awesome-vscode)

#### Recommended Plugins: `ESLint`, `Prettier`, `Beautify`
#### Recommended Settings: 
```javascript
{
    "files.autoSave": "onFocusChange",
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true,
    "beautify.language": {
        "css": [
            "css",
            "scss"
        ],
        "html": [
            "htm",
            "html"
        ]
    }
}
```

# Recommended Articles

### The Two Pillars of JavaScript
- [Part 1: Prototypal Inheritance](https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3)
- [Part 2: Functional Programming](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4)

### Composing Software
- [The Rise and Fall and Rise of Functional Programming](https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c)
- [Why Learn Functional Programming in JavaScript?](https://medium.com/javascript-scene/why-learn-functional-programming-in-javascript-composing-software-ea13afc7a257)
- [A Functional Programmer’s Introduction to JavaScript](https://medium.com/javascript-scene/a-functional-programmers-introduction-to-javascript-composing-software-d670d14ede30)
- [Higher Order Functions](https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99)
- [Reduce](https://medium.com/javascript-scene/reduce-composing-software-fe22f0c39a1d)
- [Functors & Categories](https://medium.com/javascript-scene/functors-categories-61e031bac53f)
- [Composing Software: An Introduction](https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea)
- [Functional Mixins](https://medium.com/javascript-scene/functional-mixins-composing-software-ffb66d5e731c)
- [JavaScript Factory Functions with ES6+](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)
- [Why Composition is Harder with Classes](https://medium.com/javascript-scene/why-composition-is-harder-with-classes-c3e627dcd0aa)
- [Composable Datatypes with Functions](https://medium.com/javascript-scene/composable-datatypes-with-functions-aec72db3b093)
- [JavaScript Monads Made Simple](https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8)
- [Mocking is a Code Smell](https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a)

### TDD
- [TDD the RITE Way](https://medium.com/javascript-scene/tdd-the-rite-way-53c9b46f45e3)

### Others
- [How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with async/await](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
- [Elements of JavaScript Style](https://medium.com/javascript-scene/elements-of-javascript-style-caa8821cb99f)
- [Arrow Functions](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)
- [Let’s explore ES6 Generators](https://medium.freecodecamp.org/lets-explore-es6-generators-5e58ed23b0f1)
- [Arrays, Objects and Mutations](https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa)
- [Debugging React Like a Champ with VSCode](https://hackernoon.com/debugging-react-like-a-champ-with-vscode-66281760037)

### Videos
- [Functional programming in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
- [Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)
