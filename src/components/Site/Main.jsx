// Main.jsx
console.info( 'Mounting Main.jsx... <Main />' );

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../../views/EagletonEnd/Home";
import About from "../../views/EagletonEnd/About";
import Roster from "../../views/EagletonEnd/Roster";
import Schedule from "../../views/EagletonEnd/Schedule";
import Dashboard from "../../views/EagletonEnd/Dashboard";
import Trafficlight from "../../views/EagletonEnd/Trafficlight";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
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

