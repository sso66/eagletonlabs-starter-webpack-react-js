// About.jsx
console.log( 'Mounting About.jsx...' );

import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className='app-panel'>
          <h1>About</h1>
          Hello, {this.props.name}! <hr /> Virtual DOM?
      </div> 
    )
  }
}
export default About;

// eof
