// Contact.jsx
console.log('Mounting Contact.js...');

import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
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
       <div className="contact">
         <p>Web Component Model: OPMEESSL</p>
         <ul>
           <li>Object</li>
           <li>Property</li>
           <li>Method</li>
           <li>Exception</li>
           <li>Event</li>
           <li>State</li>           
           <li>Style</li>
           <li>Layout</li>           
         </ul>
         {/*<button onClick={this.handleClick.bind(this)}>Event</button>*/}
         <button onClick={this.handleClick}>Event</button>
       </div>
     );
   }
}
Contact.propTypes = {
  // todo
}
Contact.defaultProps = {
  // todo
}
export default Contact;