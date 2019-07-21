// src/components/Main.jsx
console.info( 'Mounting Main.jsx... <Main />' );

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../../views/EagletonEnd/Home";
import About from "../../views/EagletonEnd/About";
import Login from "../../views/EagletonEnd/Login";
import Roster from "../../views/EagletonEnd/Roster";
import Schedule from "../../views/EagletonEnd/Schedule";
import Dashboard from "../../views/EagletonEnd/Dashboard";
import Trafficlight from "../../views/EagletonEnd/Trafficlight";

const Main = (props) => {
    const createElement = (Component, props) => {        
        return (
            <Component
                actions={props.actions}
                {...props}
            />
        )
    }

    return (
        <main>
            <Switch createElement={createElement}>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />

                <Route path='/roster' component={Roster} />
                <Route path='/schedule' component={Schedule} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/traffic-light' component={Trafficlight} />               
            </Switch>  
        </main>
    )
}    

export default Main;

// eof

