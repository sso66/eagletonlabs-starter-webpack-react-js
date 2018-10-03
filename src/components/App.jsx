// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import '../utils/logger.es6';
import '../utils/startup';

// Feature Modules
//import ShoppingList from "../components/N2KView/ShoppingList";
//import AwesomeComponent from "../components/N2KView/AwesomeComponent";
//import ProductList from "../components/N2KView/ProductList";
//import Iterator from "../redux/reducers/iterator";

// Architectural Modules
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";

// Feature Modules
import Home from "../components/N2KView/Home";
import OpeningScreen from "../components/N2KView/OpeningScreen";

//import '../styles/App.sass'

class App extends React.Component {

    render() {

        return (
            <div className="app-frame">               
                <Header />
                <Home />
                <OpeningScreen name="Stephen" /> 
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
