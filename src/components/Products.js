import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateCategory } from '../actions/index'

class Products extends Component {
  render() {

    const allProducts = this.props.demoData.map((product, i) => {
      return <Product
        key={product.product + i}
        id={product.id}
        product={product.product}
        price={product.price}
        categories={product.categories}
        updateCategory={this.props.updateCategory}
      />
    })
    console.log(this.props.updateCategory)

    return (
      <div id='products' className='container-fluid'>
          <div className='row'>
            {allProducts}

          </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    demoData: state.demoData.dummyData
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateCategory: updateCategory,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
