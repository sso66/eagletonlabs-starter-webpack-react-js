// Dashboard.jsx
console.log('Mounting Dashboard.js... <Dashboard />');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gauge from 'react-radial-gauge';

class Dashboard extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            // todo
        }
   
        // Alternatively change the context of this.handle inside
        // constructor to avoid inline repetition in JSX
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        console.log(this); // React.Component instance
    }
    
    render() {
        let opts = {
            size: 200, 
            dialColor: '#FFD700', 
            dialWidth: 15, 
            dialColor: 'lightblue', 
            needleSharp: true 
        };

        return (
            <div className="app">
                <h2>Component Model: O/PME/ES/SL/TTA</h2>
                {/*
                <ul>
                    <li>Object Info</li>
                    <li>Property</li>
                    <li>Method</li>
                    <li>Exception</li>
                    <li>Event</li>
                    <li>State</li>           
                    <li>Style</li>
                    <li>Layout</li>   
                    <li>Transform</li>           
                    <li>Transition</li>           
                    <li>Animation</li>                         
                </ul>
                */}
                {/*<button onClick={this.handleClick.bind(this)}>Event</button>*/}
                <button className="button is-dark" onClick={this.handleClick}>Dashboard</button>
                
                <Gauge {...opts} />    
                <Gauge {...opts} />   
                <Gauge {...opts} />   
                <Gauge {...opts} />     
            </div>
        );
   }
}
Dashboard.PropTypes = {
  // todo
}
Dashboard.defaultProps = {
  // todo
}
export default Dashboard;

// eof 