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
    }
    
    render() {
        let opts = {
            size: 200, 
            dialColor: '#FFD700', 
            dialWidth: 10  , 
            dialColor: 'lightblue', 
            needleSharp: true, 
        };

        return (
            <div className="pane">                        
                <GaugeTemplate {...opts} />                   
            </div>
        );
   }
}

export default RadialGauge;

// eof 