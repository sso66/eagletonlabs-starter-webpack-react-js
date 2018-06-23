// product.js
console.log('Mounting product.js...');

import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src='./public/images/image-aqua.png' />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src='./public/images/avaters/ringo.png' />
          </div> 
        </div>
      </div>
    ) 
  }
}
export default Product;
// eof