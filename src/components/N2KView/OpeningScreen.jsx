// OpeningScreen.jsx
console.log( 'Mounting OpeningScreen.jsx...' );

import React, { Component } from 'react';

class OpeningScreen extends Component {
  render() {
    return (
      <div>
        Hello, {this.props.name}! <hr /> Virtual DOM?
      </div> 
    )
  }
}
export default OpeningScreen;

// eof
