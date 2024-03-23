# eagletonlabs-webpack-react-js-

## Lessons Learned

- _Getting Started with the Basics of Webpack Module Bundler for React JS_

- _Defining a_ **webpack.config.js** _file_

- _Expanding the functionality of_ **webpack.config.js** and **webpack-production.config** _files_

  - Setting up **watch** mode for continuous builds

  - Building multiple files

  - Including Webpack loaders and plugins

    - _loaders_:

      - **babel-core** is the babel npm package
      - **babel-loader** is the babel module loader for Webpack
      - **jshint** is a tool that helps to detect errors and potential problems in your JavaScript
      - **jshint-loader** is the jshint loader module for Webpack
      - **node-libs-browser** is a peer dependency of Webpack. It provides certain Node libraries for browser usage.
      - **babel-preset-es2015** is a babel preset for all es2015 plugins
      - **babel-preset-react** is a babel preset for all React plugins
      - **path** is an exact copy of the NodeJS ’path’ module published to the NPM registry.

    - _options_:

      - **test** -- a regular expression that tests what kind of files to run through this loader.
        As you can see, we have added a regex to test all files with an es6 extension.

      - **exclude** -- which files the loader should exclude / ignore.
        We have added the node_modules folder.

      - **loader** -- the name of the loader we are going to use (e.g. babel-loader)

      - **query** --
        You can pass options to the loader by writing them as query string or by using the query property as we have done it.

      - **cacheDirectory** -- Default false
        When set, the given directory will be use to cache the results of the loader.
        Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run.

      - **preset** -- let us uses the react and es2015 (ES6) presets

    ***

    We have also added a key named 'resolve' to our module exports object.
    'resolve' is a section which lets us specify what kind of file types we can process without specially given them a file extension.
    This allow us to use custom file extension such as:

    ```
    require('/logger')
    ```

    instead of:

    ```
    require('logger.es6')
    ```

    ***

  - Creating a **npm built** and a **npm start** script

  - Separating production and development builds as well as creating a **npm deploy** script

  - _Implementing `React & ReactDOM` with Webpack._
  - _Implementing `React Router` with Webpack._
  - _Implementing `Node` with Webpack_
  - _Implementing `SASS` with Webpack._
  - _Implementing `SVG` with Webpack._

  - [_Implementing The Noun Project NPM_](https://www.npmjs.com/package/the-noun-project)
  - [_Exploring `font-awesome` alternatives in 2024: Icons and Photos For Everything_](https://thenounproject.com/)
  - [_Using React with CSS Flexbox_](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [_Digital Envelope Routine Error Fix_](https://paulyu.dev/article/fixing-node-digital-envelope-routines-error/)
