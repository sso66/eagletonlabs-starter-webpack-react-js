// File: src/components/Features/Stopwatch.jsx
// Date: 9/22/2019
// Note: Mobile First RWD-SPA 
//..............................................................................
console.log( "Mounting src/components/Features/Stopwatch.jsx... <Stopwatch />" );

import React, { Component } from 'react';
import './Clock.sass';

class Stopwatch extends React.Component {
	constructor(props) {
    	super(props);
		this.state = {date: new Date()};
		this.handleStartClick = this.handleStartClick.bind(this); 	
    	this.handleStopClick = this.handleStopClick.bind(this); 	
  	}

  	componentDidMount() {
    	this.timerID = setInterval(
    		() => this.tick(), 
    		1000
    	);
  	}

  	componentWillUnmount() {
    	clearInterval(this.timerID);
  	}

  	tick() {
    	this.setState({
      		date: new Date()
   		 });
  	}
	
	  handleStartClick() {
    	this.timerID = setInterval(
    		() => this.tick(), 
    		1000
    	);
	}

	handleStopClick() {
		clearInterval(this.timerID);
	}	

  	render() {
    	return (
      	<div className="clock">
        	<h1>Hello, world!</h1>
        	<h2>It is now {this.state.date.toLocaleTimeString()}.</h2>
        	<button onClick={this.handleStopwatch}>Stopwatch</button>
      	</div>

    );
  }
}

export default Stopwatch;

// eof 