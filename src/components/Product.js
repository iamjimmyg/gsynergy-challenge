import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="card">
        <div className="image">

        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col-8'><p>Product</p></div>
            <div className='col-4 price'><p>$Price</p></div>
          </div>
          <p className='location'>Name and location</p>
          <p className='text'>Notes about the product, such as what I like and what I am thinking of. Support for three lines of display</p>
        </div>
      </div>
    );
  }
}

export default Product;
