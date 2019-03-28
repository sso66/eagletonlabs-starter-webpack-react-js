// Product.jsx
console.log('Mounting Product.jsx...');

import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='extra'>
          <img src='./images/image-aqua.png' width="64px" height="48px" />
        </div>
        <div className='middle aligned content'>
          <div className='description'>
            <a>Fort Knight</a>
            <p>Authentic renaissance actors, delivered in just two weeks</p>
          </div>
          <div className='item'>
            <span>Submitted by:</span>
            <img src='./images/image-aqua.png' width="64px" height="48px" />

          </div> 
        </div>
      </div>
    ) 
  }
}
export default Product;

// eof