// product-list.js
console.log('Mounting product-list.js...');

import React from 'react';
import Product from "./product";
import Seed from "./seed";

class ProductList extends React.Component {
  render() {
    return (
         <Product />
    )
  }
}
export default ProductList;
// eof