// HelloWorld.jsx
console.log('Mounting HelloWorld.jsx...');

import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello, {this.props.name}! <hr /> Virtual DOM?
      </div> 
    )
  }
}
export default HelloWorld;
// eof
