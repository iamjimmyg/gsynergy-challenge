import React, { Component } from 'react'
import Product from './Product'

class Products extends Component {
  render() {

    return (
      <div id='products' className='container-fluid'>
          <div className='row'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>

      </div>
    );
  }
}

export default Products;
