// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

require( '../utils/logger.es6' );
require( '../utils/startup' );
import ShoppingList from "../utils/shopping-list";
import AwesomeComponent from "../utils/awesome-component";
import ProductList from "../utils/product-list";
import Iterator from "../utils/iterator";

// Architectural Modules
import Header from "../components/Header/Header";
import Aside from "../components/Header/Aside";
import Footer from "../components/Footer/Footer";

// Feature Modules
//import Content from "../components/N2KView/Content";
import Contact from "../components/N2KView/Contact";
import HelloWorld from "../components/N2KView/HelloWorld"

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Header />
                {/*<Content />*/}
                <Contact />
                <HelloWorld name="World" />
                <Aside />     
                <ShoppingList name="Stephen" />
                <AwesomeComponent />
                <ProductList />
                <Iterator />           
                <Footer />                            
           </div>
         )
    } 

}

export default App;

// eof
