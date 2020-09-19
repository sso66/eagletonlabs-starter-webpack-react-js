// File: src/components/Main.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.info( 'Mounting src/components/Main.jsx... <Main />' );

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../../views/Home/HomeView";
import About from "../../views/About/MobileFirst";
import Products from "../../views/Products/SvgResponsive";
import Contact from "../../views/Contact/ThreeReact";

// import MobileFirst from "../../views//MobileFirst";
// import ThreeReact from "../../views/ThreeReact";
// import ThreeScene from "../../views/ThreeScene";
// import SvgResponsive from "../../views//SvgResponsive";
// import SvgResponsiveNested from "../../views/SvgResponsiveNested";

// const Main = (props) => {
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

