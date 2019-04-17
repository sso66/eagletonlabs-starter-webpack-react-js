// HelloWorld.jsx
console.log( 'Mounting HelloWorld.jsx... <HelloWorld />' );

import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (
        <div className='hello-world'>
          Hello, {this.props.name}! 
      </div> 
    )
  }
}
export default HelloWorld;

// eof
