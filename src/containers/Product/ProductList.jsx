// ProductList.jsx
console.log( 'Mounting ProductList.jsx...' );

import React from 'react';
import Product from "../../components/Product/Product";

class ProductList extends React.Component {
  render() {
    return (
         <Product />
    )
  }
}
export default ProductList;
// eof