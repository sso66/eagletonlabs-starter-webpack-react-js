// product.js
console.log('Mounting Product.jsx...');

import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src='images/image-aqua.png' width="64" height="48" />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src='images/avaters/stephen.png' width="48" height="48" />
          </div> 
        </div>
      </div>
    ) 
  }
}
export default Product;

// eof