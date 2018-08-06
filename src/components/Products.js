import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Products extends Component {
  render() {

    const allProducts = this.props.demoData.map((product) => {
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

function mapStateToProps(state){
  return {
    demoData: state.demoData.dummyData
  }
}

export default connect(mapStateToProps)(Products);
