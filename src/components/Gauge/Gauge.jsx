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
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        console.log(this); // React.Component instance
        alert("Hello Gauge!");
    }
    
    render() {
        let opts = {
            size: 150, 
            dialColor: '#FFD700', 
            dialWidth: 5,  
            dialColor: 'darkorange', 
            needleColor: 'red',
            needleBaseColor: 'red',
            needleSharp: true, 
            progressWidth: 5,
            progressColor: 'lightgreen',
            className: ''
        };

        return (
            <div className="frame">                        

                <button onClick={this.handleClick} className="button is-primary">Gauge</button>  
                                <GaugeTemplate {...opts} />                 
            </div>
        );
   }
}

export default RadialGauge;

// eof 