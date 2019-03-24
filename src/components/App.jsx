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
import SvgComponent4 from '../svg/Filters/DryDropShadowSvgComponent';
import SvgComponent3 from '../svg/Filters/WetDropShadowSvgComponent';
import SvgComponent2 from '../svg/Filters/SVGFilter';
import SvgComponent1 from '../svg/Filters/FilteredSvgComponent';

class App extends React.Component {

    render() {
        return (
            <div className="app-frame">      
                <Header />
                <About name="Stephen Oo" /> 
                <AwesomeComponent />            

                <SvgComponent1 />
                <SvgComponent2 />
                <SvgComponent3 /> 
                <SvgComponent4 /> 
                             
                <Footer />                            
           </div>
         )
    } 
}

export default App;

// eof
