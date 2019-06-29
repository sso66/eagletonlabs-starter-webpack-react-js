// HelloWorld.jsx
console.log( 'Mounting HelloWorld.jsx... <HelloWorld />' );

import React, { Component } from 'react';

// class HelloWorld extends Component {
  // render() {
    // return (
        // <div className='hello-world'>
          // Hello, {this.props.name}! 
      // </div> 
    // )
  // }
// }

// Pure Function Comppnent: The simplest one
const HelloWorld = (props) => (<div>Hello, {props.onClick} {props.name}!</div>);

export default HelloWorld;

// eof
