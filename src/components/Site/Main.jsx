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
import MetadataPage from "../../views/EagletonWebDesigns/MetadataPage";

const Main = (props) => {

    return (
        <div className="main">
            <Switch>
                <Route exact path='/' component={Home} />    
                <Route path='/mobile-first' component={MobileFirst} />    
                <Route path='/three-react' component={ThreeReact} />   
                <Route path='/three-scene' component={ThreeScene} />    
                <Route path='/metadata-page' component={MetadataPage} />   
            </Switch>  
        </div>
    )
}    

export default Main;

// eof

