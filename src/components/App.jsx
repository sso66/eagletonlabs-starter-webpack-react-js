// App.jsx
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import '../utils/logger.es6';
import '../utils/startup';

// Architectural Modules
import Header from "../components/Site/Header";
import Footer from "../components/Site/Footer";

// Feature Modules: HTML-DOM
import Home from '../components/N2KView/Home';
import About from '../components/N2KView/About';
import AwesomeComponent from '../components/N2KView/AwesomeComponent';
import ProductList from '../containers/N2KView/ProductList';

// Feature Modules: SVG-DOM
//import SvgComponent from '../svg/Filters/DryDropShadowSvgComponent';
import SvgComponent from '../svg/Filters/WetDropShadowSvgComponent';
//import SvgComponent from '../svg/Filters/SVGFilter';
//import SvgComponent from '../svg/Filters/FilteredSvgComponent';
import SnapSvgPrototype from '../components/N2KView/SnapSvgPrototype';
import Heart from '../components/N2KView/Heart';

class App extends React.Component {

    render() {
        return (
            <div className="app-frame">               
                <Header />
                <SnapSvgPrototype />
                <Heart fill="gray" stroke="red" strokeWidth={1} strokeOpacity="0.5" />
                {/*
                <SvgComponent />                 
                <About name="Stephen Oo" /> 
                <AwesomeComponent />            
                <ProductList name="Stephen" />
                */}
                 <Footer />                            
           </div>
         )
    } 
}

export default App;

// eof
