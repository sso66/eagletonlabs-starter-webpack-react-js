## Webpack Starter
- *Getting Started with the Basics of Webpack Module Loader*

- *Defining a* **webpack.config.js** *file*

- *Extending the functionality of* **webpack.config.js** and **webpack-production.config** *files*

  - Setting up **watch** mode

  - Building multiple files

  - Including Webpack loaders and plugins
    - **test** -- a regular expression that tests what kind of files to run through this loader. As you can see, we have added a regex to test all files with an es6 extension.

    - **exclude** -- which files the loader should exclude /ignore. We have added node_modules folder.

    - **loader** -- the name of the loader we are going to use (babel-loader)

    - **query** -- You can pass options to the loader by writing them as query string or by using the query property as we have done it.

    - **cacheDirectory** -- Default false. When set, the given directory will be use to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run.

    We have also added a key named 'resolve' to our module exports object. 'resolve' is a section which lets us specify what kind of file types we can process without specially given them a file extension. This allow us to us to use the syntax such as:

    ```
    require('/logger')
    ```
    instead of:
    ```
    require('logger.es6')
    ```
    ***
  - Creating a **npm start** script

  - Separating production and development builds
