// Home.jsx
console.log('Mounting Home.js...');

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
   super(props);
   // Alternatively change the context of this.handle inside
   // constructor to avoid inline repetition in JSX
   this.handleClick = this.handleClick.bind(this);
   
   this.state = {
     // todo
   }
  }
  handleClick() {
    console.log(this); // React.Component instance
    alert(this);
  }
   render() {
     return (
       <div className="app-panel">
         <h2>Web Component Model: O/PME/ES/SL/TTA</h2>
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
         {/*<button onClick={this.handleClick.bind(this)}>Event</button>*/}
         <button onClick={this.handleClick}>Event</button>
       </div>
     );
   }
}
Home.propTypes = {
  // todo
}
Home.defaultProps = {
  // todo
}
export default Home;

// eof 