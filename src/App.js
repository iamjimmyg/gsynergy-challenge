import React, { Component } from 'react'
import Nav from './components/Nav'
import ProductsAndCategories from './components/ProductsAndCategories'
import Products from './components/Products'
import Categories from './components/Categories'

class App extends Component {

  render() {

    return (
      <main >
        <Nav />
        <ProductsAndCategories />
      </main>
    );
  }
}

export default App;
