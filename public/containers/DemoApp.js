// DemoApp.js
console.info( 'Mounting DemoApp.js...' );

require( '../utils/logger.es6' );
require( '../utils/startup' );

import React from "react";
//import { render } from "react-dom";

import ShoppingList from "../utils/shopping-list";
import AwesomeComponent from "../utils/awesome-component";
import ProductList from "../utils/product-list";
import Iterator from "../utils/iterator";

class DemoApp extends React.Component {

    render() {

        return (
        <div>
        <h2>Webpack Starter</h2>
        <p>React Application Model</p>
        
        <ShoppingList name="Stephen" />
        <AwesomeComponent />
        <ProductList />
        <Iterator />
        </div>
        )
    }

}

export default DemoApp;

// eof
