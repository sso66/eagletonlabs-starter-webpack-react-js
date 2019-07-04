// views/EagletonEnd/Roster.jsx
console.info( 'Mounting NavBar.jsx... <NavBar />' );

import React from "react";
import { Switch, Route } from 'react-router-dom';

import FullRoster from './FullRoster';
import Player from './Player';

const Roster = () => (
    <div>
    <h2>This is roster page</h2>
    <Switch>
        <Route exact path='/roster' component={FullRoster} />
        <Route path='/roster/:number' component={Player} />
    </Switch>  
    </div>
);

export default Roster;

// eof

