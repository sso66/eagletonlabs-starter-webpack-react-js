// File: src/components/Main.jsx
// Date: 9/14/2019
// Note: Mobile First RWD-SPA 
//..............................................................................
console.info( 'Mounting src/components/Main.jsx... <Main />' );

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Dashboard } from "../../views/Home";
import About from "../../views/About/MobileFirst";
import Product from "../../views/Product/SvgResponsive";
import Contact from "../../views/Contact/ThreeScene";

const Main =() => { 
    return (
        <div className="main">
            {/* Main */}
            <Switch>
                <Route exact path='/' component={Home} />    
                <Route path='/about' component={About} />    
                <Route path='/product' component={Product} />   
                <Route path='/contact' component={Contact} />   
            </Switch>  
        </div>
    )
}    

export default Main;

// eof
