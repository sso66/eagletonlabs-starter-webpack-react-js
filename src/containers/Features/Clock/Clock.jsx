// Clock.es6
console.log("Mounting Clock.es6... <Clock />");

import React, { Component } from 'react';

class Clock extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {date: new Date()};
    	this.handleStopClock = this.handleStopClock.bind(this); 	
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

	handleStopClock() {
		clearInterval(this.timerID);
	}
	
  	render() {
    	return (
      	<div className="clock">
        	<h1>Hello, world!</h1>
        	<h2>It is now {this.state.date.toLocaleTimeString()}.</h2>
        	<button onClick={this.handleStopClock}>Stop Clock</button>
      	</div>

    );
  }
}

export default Clock;

// eof 