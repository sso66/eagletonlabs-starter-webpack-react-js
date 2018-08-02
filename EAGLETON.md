## Webpack Starter
- *Getting Started with the Basics of Webpack Module Loader*

- *Defining a* **webpack.config.js** *file*

- *Expanding the functionality of* **webpack.config.js** and **webpack-production.config** *files*

  - Setting up **watch** mode for continuous builds

  - Building multiple files

  - Including Webpack loaders and plugins
    - *loaders*:
      - **babel-core** is the babel npm package
      - **babel-loader** is the babel module loader for Webpack
      - **jshint** is a tool that helps to detect errors and potential problems in your JavaScript
      - **jshint-loader** is the jshint loader module for Webpack
      - **node-libs-browser** is a peer dependency of Webpack. 
      	It provides certain Node libraries for browser usage.
      - **babel-preset-es2015** is a babel preset for all es2015 plugins
      - **babel-preset-react** is a babel preset for all React plugins

    - *options*:
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

- Implementing React with Webpack
- Implementing Three with Webpcak
- Integrating Redux with React and Three Components

	