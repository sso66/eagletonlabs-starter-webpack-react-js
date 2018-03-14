// contacts.jsx
console.log('Mounting contacts.js...');

import React from 'react';

class Contacts extends React.Component {
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
       <div>
         <p>React Component Model</p>
         <ul>
           <li>Object Instance</li>
           <li>Property</li>
           <li>State</li>
           <li>Event</li>
           <li>Pure Function</li>
           <li>Style</li>
         </ul>
         {/*<button onClick={this.handleClick.bind(this)}>Event</button>*/}
         <button onClick={this.handleClick}>Event</button>
       </div>
     );
   }
}
Contacts.propTypes = {
  // todo
}
Contacts.defaultProps = {
  // todo
}
export default Contacts;