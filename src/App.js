import React, { Component } from 'react'
import Nav from './components/Nav'
import ProductsAndCategories from './components/ProductsAndCategories'
import Products from './components/Products'
// import Product from './components/Product'
import Categories from './components/Categories'
// import Category from './components/Category'


// import Target from './components/Target';
// import './components/Board.css';

class App extends Component {

  render() {

    return (
      <main >
        <Nav />
        <ProductsAndCategories />
      </main>
      // <div id="board">
      //    <div id="board__sources">
      //      {/* <Source color="red" onDrop={this.handleDrop} /> */}
      //      <Product category="hello" onDrop={this.handleDrop} />
      //    </div>
      //    <div id="board__targets">
      //      <Category />
      //      {/* <Target shape="circle" />
      //      <Target shape="square" /> */}
      //    </div>
      //    <div id="board__drops">
      //      {drops.map((drop, i) => (
      //        <Drop
      //          color={drop.color}
      //          key={i}
      //          shape={drop.shape}
      //        />
      //      ))}
      //    </div>
      //  </div>
    );
  }
}

export default App;
