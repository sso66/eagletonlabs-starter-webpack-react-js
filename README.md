# webpack-starter.git
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
      - **node-libs-browser** is a peer dependency of Webpack. It provides certain Node libraries for browser usage.
      - **babel-preset-es2015** is a babel preset for all es2015 plugins
      - **babel-preset-react** is a babel preset for all React plugins
      - **path** is an exact copy of the NodeJS ’path’ module published to the NPM registry.

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

	- *Implementing `React & ReactDOM` with Webpack.*
	- *Implementing `React Router` with Webpack.*
	- *Implementing `Node` with Webpack*
	- *Implementing `SASS` with Webpack.*
	- *Implementing `SVG` with Webpack.*

  - [*Implementing The Noun Project NPM*](https://www.npmjs.com/package/the-noun-project)
  - [*Exploring `font-awesome` alternatives in 2024: Icons and Photos For Everything*](https://thenounproject.com/)
 
  - [Git Tutorial: Learn Git Branching in 5 minutes](https://www.educative.io/blog/git-branching-tutorial)
    - What is branching?
    - Creating branches
    - Deleting branches
    - Merging branches
    - Rebasing branches
    - Git concepts to learn next
    - Continue reading about Git
  
  - Get hands-on with Git
  
  Use live coding environments and real-world examples to learn on of the most widely version control tools and and do the exercises (live-coding-exercise) branch to level up your coding skills. 
  
  - Git Cheatsheet to branching, merging and rebasing
  ```
  // Create branches
  // local
  git checkout <name>

  git checkout -b <name>
  // remote
  git push -u origin <name>

  // Delete branches
  git checkout master | main
  // or
  git switch master | main

  // local
  git branch -d <name>
  git branch -D <name>
  // remote
  git push origin --delete <name>
  // Try to synchronize your branch
  git fetch -p  // '-p' means "prume"
  // Merge branches
  git fetch all

  git check master | main
  
  git checkout master | main
  // or
  git switch master | main

  git merge feature

  // Rebase branches 
  // (preferred method to ensure review process)
  git checkout feature
  // or
  git switch feature
  ```

  - [A practical guide to using the git stash command](https://opensource.com/article/21/4/git-stash)
