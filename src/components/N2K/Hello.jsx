// Hello.jsx
console.log( 'Mounting Hello.jsx... <Hello />' );

import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
        <div className='app-panel'>
          <h1>Hello</h1>
          Hello, {this.props.name}! <hr /> Virtual DOM?
      </div> 
    )
  }
}
export default Hello;

// eof
