// containers/EagletonEnd/N2KGauge.jsx
console.log('Mounting N2KGauge.jsx... <N2KGauge />');

import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import Gauge from 'react-radial-gauge';

import Gauge from '../../../components/Gauge/N2KGauge';

class N2KGauge extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            currentValue: 0
        } 
        this.handlePositiveClick = this.handlePositiveClick.bind(this);
        this.handleNegativeClick = this.handleNegativeClick.bind(this);
    }
    
    handlePositiveClick() {
        let nextValue = this.state.currentValue + 1;
        this.setState({currentValue: nextValue });
    }
    
    handleNegativeClick() {
        let prevValue = this.state.currentValue - 1;
        this.setState({currentValue: prevValue });
    }
    
    render() {
        let opts = {
            //size: 100, 
            
            //dialColor: '#FFD700', 
            //dialWidth: 15,  
            
            //needleColor: 'red',
            //needleBaseColor: 'red',
            //needleSharp: true, 
            
            //progressWidth: 10,
           //progressColor: 'lightgreen',
            
            currentValue: this.state.currentValue,
            //className: '',
            
            //tickInterval: 10,
            //tickWidth: 30,
            //tickColor: '#cacaca',
            //tickColor: "red"
            //tickLength: 3,
            
            styles: {backgroundColor: 'black' },
        };

        return (
            <div className="frame">                        
                <Gauge {...opts}   />   

                <button 
                    onClick={this.handleNegativeClick} 
                    className="button is-primary">Gauge-
                </button> 
                  
                <button 
                    onClick={this.handlePositiveClick} 
                    className="button is-primary">
                    Gauge+
                </button>   
            
            </div>
        );
   }
}

export default N2KGauge;

// eof 