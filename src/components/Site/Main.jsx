// File: src/components/Main.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.info( 'Mounting Main.jsx... <Main />' );

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../../views/EagletonWebDesigns/Home";
import MobileFirst from "../../views/EagletonWebDesigns/MobileFirst";

const Main = (props) => {

    return (
        <div className="main">
            <Switch>
                <Route exact path='/' component={Home} />    
                <Route exact path='/mobile-first' component={MobileFirst} />     
            </Switch>  
        </div>
    )
}    

export default Main;

// eof

