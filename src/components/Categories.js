import React, { Component } from 'react'
import Category from './Category'

class Categories extends Component {
  render() {
    return (
      <div id='categories' className=''>
        <Category />
        <Category />
      </div>
    );
  }
}

export default Categories;
