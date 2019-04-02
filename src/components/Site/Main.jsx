// Main.jsx
console.log( "Mounting Main.jsx... <Main />" );

import React from 'react';

// Feature Modules: HTML-DOM
import Dashboard from '../../views/Dashboard';
import ProductList from '../../containers/Product/ProductList';
import ShoppingList from '../../containers/Product/ShoppingList';
import Hello from '../../components/User/Hello';
import AwesomeComponent from '../../components/User/AwesomeComponent';

// Feature Modules: SVG-DOM
import SvgFlower from '../../svg/DryDropShadowSvgComponent';
//import SvgComponent from '../../svg/WetDropShadowSvgComponent';
import SvgButton from '../../svg/SVGFilter';
import SvgBlur from '../../svg/FilteredSvgComponent';

const Main = () => {
    return ( 
        <main className="main">
            <Hello name="Stephen"/>
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
