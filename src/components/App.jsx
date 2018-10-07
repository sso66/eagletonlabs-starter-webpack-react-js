// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import '../utils/logger.es6';
import '../utils/startup';

// Architectural Modules
import Header from "../components/Site/Header";
import Footer from "../components/Site/Footer";

// Feature Modules
import Home from '../components/N2KView/Home';
import About from '../components/N2KView/About';

class App extends React.Component {

    render() {
        return (
            <div className="app-frame">               
                <Header />
                <Home />
                <About name="Stephen Oo" /> 
                  {/*   
               
                <ShoppingList name="Stephen" />
                <AwesomeComponent />
                <ProductList />
                */}    
                <Footer />                            
           </div>
         )
    } 
}

export default App;

// eof
