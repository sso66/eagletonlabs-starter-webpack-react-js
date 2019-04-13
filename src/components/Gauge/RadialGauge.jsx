// RadialGauge.jsx
console.log('Mounting RadialGauge.jsx... <RadialGauge />');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GaugeTemplate from 'react-radial-gauge';

class RadialGauge extends Component {
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
                <button className="button is-dark" onClick={this.handleClick}>RadialGauge</button>
                
                <GaugeTemplate {...opts} />    
                <GaugeTemplate {...opts} />   
                <GaugeTemplate {...opts} />   
                <GaugeTemplate {...opts} />     
            </div>
        );
   }
}
RadialGauge.PropTypes = {
  // todo
}
RadialGauge.defaultProps = {
  // todo
}
export default RadialGauge;

// eof 