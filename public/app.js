// app.js
console.info('Mounting app.js...');
//document.write("welcome to my app<br />");

//require('./components/logger');
//require('./components/logger.es6');
//require('./components/startup');

import React from "react";
import { render } from "react-dom";
/*
import Hello from "./components/hello";
import ShoppingList from "./components/shopping-list";
import AwesomeComponent from "./components/awesome-component";
import Game from "./components/Game4.react";
import Contacts from "./components/contacts"
import ProductList from "./components/product-list";
import Iterator from "./components/iterator";
import NavBar from "./components/NavBar";
*/
import Canvas from "./components/Canvas";

class App extends React.Component {
  
   render() {
 
     return (
        <div> 
         
          <h2>Webpack Starter</h2>
          <p>React Application Model</p>
          {/*
          <Game />
          <Hello name="World" />
          <ShoppingList name="Stephen" />
          <AwesomeComponent />

          <Contacts />        

          <ProductList />

          <Iterator />
          <NavBar />
          */}
          <Canvas />     
        </div>
      )
   }
}
// =============================================
render(<App />, document.getElementById('root'));
