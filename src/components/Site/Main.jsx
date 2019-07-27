// src/components/Main.jsx
console.info( 'Mounting Main.jsx... <Main />' );

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../../views/EagletonWebDesigns/Home";
import About from "../../views/EagletonWebDesigns/About";
import Login from "../../views/EagletonWebDesigns/Login";
import Roster from "../../views/EagletonWebDesigns/Roster";
import Schedule from "../../views/EagletonWebDesigns/Schedule";

const Main = (props) => {

    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />
                <Route path='/schedule' component={Schedule} />     
                <Route path='/roster' component={Roster} />       
            </Switch>  
        </main>
    )
}    

export default Main;

// eof

