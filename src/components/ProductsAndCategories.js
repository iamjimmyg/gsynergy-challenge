import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Products from './Products'
import Categories from './Categories'
// import Category from './components/Category
// import Drop from './components/Drop';
// import Source from './components/Source';

class ProductsAndCategories extends Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      drops: [],
    };
  }

  handleDrop(category) {
    const { drops } = this.state;
    const nextDrops = [...drops, {
      category,
    }];
    this.setState({
      drops: nextDrops,
    });
  }
  render() {
    const { drops } = this.state;
    return (
      <div id='products-and-categories' className='container-fluid main-section'>
        <div className='d-flex'>
          <div className=''>
            <Products/>
          </div>
          <div className=''>
            <Categories />
          </div>

        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ProductsAndCategories);
