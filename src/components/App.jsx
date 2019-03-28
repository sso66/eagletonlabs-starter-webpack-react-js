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
import Home from '../components/Home';
import About from '../components/About';
import AwesomeComponent from '../components/AwesomeComponent';
import ProductList from '../containers/ProductList';
import ShoppingList from '../containers/ShoppingList';

// Feature Modules: SVG-DOM
import SvgComponent4 from '../svg/Filters/DryDropShadowSvgComponent';
import SvgComponent3 from '../svg/Filters/WetDropShadowSvgComponent';
import SvgComponent2 from '../svg/Filters/SVGFilter';
import SvgComponent1 from '../svg/Filters/FilteredSvgComponent';
import Gauge from 'react-radial-gauge';

class App extends React.Component {

    render() {
         let opts = {dialColor: '#FFD700', dialWidth: 10, size: 200, dialColor: 'lightblue', needleSharp: true }
        return (
            <div className="app-frame">      
                <Header />
                <About />
                <Gauge {...opts} />
                <AwesomeComponent />
                <ShoppingList />
                <ProductList />
                <SvgComponent2 />
                
                <Footer />                            
           </div>
         )
    } 
}

export default App;

// eof
