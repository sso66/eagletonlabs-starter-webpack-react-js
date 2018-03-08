// hello.js
console.log('Mounting hello.js...');

import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hello, {this.props.name}! <hr /> Virtual DOM?
      </div> 
    )
  }
}
export default Hello;
// eof
