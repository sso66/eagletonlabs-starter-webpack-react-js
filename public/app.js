// app.js
console.info('Mounting app.js...');
//document.write("welcome to my app<br />");

require('./components/logger');
require('./components/logger.es6');
require('./components/startup')

import React from "react";
import { render } from "react-dom";

import Hello from "./components/hello";
import ShoppingList from "./components/shopping-list";
import AwesomeComponent from "./components/awesome-component";

//import Game from "./components/Game0.react";
//import Game from "./components/Game1.react";
//import Game from "./components/Game2.react";
//import Game from "./components/Game3.react";
//import Game from "./components/Game4.react";
import Game from "./components/Game5.react";

import Contacts from "./components/contacts"

class App extends React.Component {
   render() {
     return (
        <div> 
          <Game />
          {/*
          <h1>Webpack React</h1>
          <p>Hello React</p>
         
          <Hello name="World" />
          <ShoppingList name="Stephen" />
          <AwesomeComponent />
          */}
          <Contacts />
        </div>
      )
   }
}
// ========================================
render(<App />, document.getElementById('root'));
