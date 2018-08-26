// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import '../utils/logger.es6';
import '../utils/startup';
import ShoppingList from "../utils/shopping-list";
import AwesomeComponent from "../utils/awesome-component";
import ProductList from "../utils/product-list";
import Iterator from "../utils/iterator";

// Architectural Modules
import Header from "../components/Header";
import Footer from "../components/Footer";

// Feature Modules
import Contact from "../components/N2KView/Contact";

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Header />
                <Contact />  
                {/*
                    <ShoppingList name="Stephen" />
                    <AwesomeComponent />
                    <ProductList />
                    <Iterator />    
                */}      
                <Footer />                            
           </div>
         )
    } 

}

export default App;

// eof
