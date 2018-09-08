// ShoppingList.jsx
console.log( "Mounting ShoppingList.jsx..." );

import React, { Component } from 'react';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="shopping-list">
        <h2>Shopping List for {this.props.name}</h2>
        <ul>
          <li>Instragram</li>
          <li>What's App</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
export default ShoppingList;
// eof 