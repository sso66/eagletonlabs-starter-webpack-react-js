// File: src/components/Main.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.info( 'Mounting Main.jsx... <Main />' );

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../../views/EagletonWebDesigns/Home";
import MobileFirst from "../../views/EagletonWebDesigns/MobileFirst";
import ThreeReact from "../../views/EagletonWebDesigns/ThreeReact";
import ThreeScene from "../../views/EagletonWebDesigns/ThreeScene";

import SvgResponsive from "../../views/EagletonWebDesigns/SvgResponsive";
import SvgResponsiveNested from "../../views/EagletonWebDesigns/SvgResponsiveNested";

const Main = (props) => {
    return (
        <div className="main">
            <Switch>
                <Route exact path='/' component={Home} />    
                <Route path='/mobile-first' component={MobileFirst} />    
                <Route path='/three-react' component={ThreeReact} />   
                <Route path='/three-scene' component={ThreeScene} />    
                <Route path='/svg-responsive' component={SvgResponsive} />    
                <Route path='/svg-responsive-nested' component={SvgResponsiveNested} /> 
            </Switch>  
        </div>
    )
}    

export default Main;

// eof

