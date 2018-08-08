import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Products from './Products'
import Categories from './Categories'

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
    return (
      <div id='products-and-categories' className='main-section container-fluid'>
        <div className='row' style={{height: '100%'}}>
          <div className='products-container col' style={{overflow: 'overlay'}}>
            <Products/>
          </div>
          <div className='categories-container col-md-auto'>
            <Categories />
          </div>

        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ProductsAndCategories);
