// src/components/Main.jsx
console.info( 'Mounting Main.jsx... <Main />' );

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MobileFirst from "../../views/EagletonWebDesigns/MobileFirst";
import Home from "../../views/EagletonWebDesigns/Home";
import Login from "../../views/EagletonWebDesigns/Login";
import About from "../../views/EagletonWebDesigns/About";
import Roster from "../../views/EagletonWebDesigns/Roster";
import Schedule from "../../views/EagletonWebDesigns/Schedule";
import Dashboard from "../../views/EagletonWebDesigns/Dashboard"

const Main = (props) => {

    return (
        <main>
            <Switch>
                <Route exact path='/' component={MobileFirst} />     
                {/*     
                <Route exact path='/' component={Home} />  
                <Route path='/about' component={About} />
                <Route path='/schedule' component={Schedule} />     
                <Route path='/roster' component={Roster} />    
                <Route path='/dashboard' component={Dashboard} />    
                <Route path='/login' component={Login} />   
                */}
            </Switch>  
        </main>
    )
}    

export default Main;

// eof

