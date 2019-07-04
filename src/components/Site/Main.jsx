// Main.jsx
console.info( 'Mounting Main.jsx... <Main />' );

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "../../views/EagletonEnd/Home";
import Roster from "../../views/EagletonEnd/Roster";
import Schedule from "../../views/EagletonEnd/Schedule";
import Dashboard from "../../views/EagletonEnd/Dashboard";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/roster' component={Roster} />
                <Route path='/schedule' component={Schedule} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>  
        </main>
    )
}    

export default Main;

// eof

