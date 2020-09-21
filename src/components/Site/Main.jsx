// File: src/components/Main.jsx
// Date: 9/14/2019
// Note: Mobile First RWD-SPA 
//..............................................................................
console.info( 'Mounting src/components/Main.jsx... <Main />' );

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from "../../views/Home";
import About from "../../views/About/MobileFirst";
import Products from "../../views/Products/SvgResponsive";
import Contact from "../../views/Contact/ThreeScene";

const Main =() => { 
    return (
        <div className="main">
            <Switch>
                <Route exact path='/' component={Home} />    
                <Route path='/about' component={About} />    
                <Route path='/products' component={Products} />   
                <Route path='/contact' component={Contact} />   
                {/* 
                <Route path='/svg-responsive' component={SvgResponsive} />    
                <Route path='/svg-responsive-nested' component={SvgResponsiveNested} />  
                */}
            </Switch>  
        </div>
    )
}    

export default Main;

// eof
