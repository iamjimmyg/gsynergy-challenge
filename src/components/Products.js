import React, { Component } from 'react'
import Product from './Product'

const DummyData = [
  {
    product: 'necklace',
    price: 30,
    categories: ['jewelry'],
  },
  {
    product: 'pants',
    price: 20,
    categories: ['apparel'],
  },
  {
    product: 'shoes',
    price: 54,
    categories: ['apparel'],
  },
  {
    product: 'watch',
    price: 15,
    categories: ['jewelry'],
  },
  {
    product: 'pillow',
    price: 15,
    categories: ['home'],
  },
  {
    product: 'shirt',
    price: 35,
    categories: ['apparel'],
  },
  {
    product: 'covers',
    price: 50,
    categories: ['home'],
  },

]


class Products extends Component {
  render() {

    const allProducts = DummyData.map((product) => {
      return <Product
        product={product.product}
        price={product.price}
        categories={product.categories}
      />
    })

    return (
      <div id='products' className='container-fluid'>
          <div className='row'>
            {allProducts}

          </div>

      </div>
    );
  }
}

export default Products;
