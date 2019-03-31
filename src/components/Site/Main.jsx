// Main.jsx
console.log( "Mounting Main.jsx... <Main />" );

import React from 'react';

// Feature Modules: HTML-DOM
import Dashboard from '../../views/Dashboard';
import ProductList from '../../containers/User/ProductList';
import ShoppingList from '../../containers/User/ShoppingList';
import AwesomeComponent from '../../components/N2K/AwesomeComponent';

// Feature Modules: SVG-DOM
import SvgFlower from '../../svg/DryDropShadowSvgComponent';
//import SvgComponent from '../../svg/WetDropShadowSvgComponent';
import SvgButton from '../../svg/SVGFilter';
import SvgBlur from '../../svg/FilteredSvgComponent';

const Main = () => {
    return ( 
        <main className="main">
     
            <Dashboard />
            <AwesomeComponent />
            <SvgFlower />   
            <SvgButton />  
            <SvgBlur />   
        </main>
    )   
}

export default Main;

// eof
