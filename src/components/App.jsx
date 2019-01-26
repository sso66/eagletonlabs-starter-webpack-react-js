// App.jsx
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
import AwesomeComponent from '../components/N2KView/AwesomeComponent';

//import SvgComponent from '../svg/Filters/DryDropShadowSvgComponent';
//import SvgComponent from '../svg/Filters/WetDropShadowSvgComponent';
import SvgComponent from '../svg/Filters/FilteredSvgComponent';
//import SvgComponent from '../svg/Filters/SVGFilter';

class App extends React.Component {

    render() {
        return (
            <div className="app-frame">               
                <Header />
                {/*
                <About name="Stephen Oo" /> 
                <AwesomeComponent />            
                <ShoppingList name="Stephen" />               
                <ProductList />
                */}    
                <SvgComponent />
                
                <Footer />                            
           </div>
         )
    } 
}

export default App;

// eof
