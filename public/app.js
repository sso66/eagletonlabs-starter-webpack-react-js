// app.js
console.info('Mounting app.js...');
document.write("welcome to my app<br />");

require('./views/logger');
require('./views/logger.es6');

import React from "react";
import { render } from "react-dom";

import Hello from "./views/hello";
import ShoppingList from "./views/shopping-list";
import AwesomeComponent from "./views/awesome-component";
import Game from "./views/Game0.react";

class App extends React.Component {
   render() {
     return (
        <div> 
          <Game />
          
          <h1>Webpack React</h1>
          <p>Hello React</p>
          <Hello name="World" />
          <ShoppingList />
          <AwesomeComponent />

        </div>
      )
   }
}
// ========================================
render(<App />, document.getElementById('root'));
