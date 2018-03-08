// hello.js
console.log('Mounting hello.js...');

import React from 'react';
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h2>Hello Box</h2>
        <p><span>{this.props.name}!</span></p>
      </div>
    );    
  }
};

export default Hello;
// eof