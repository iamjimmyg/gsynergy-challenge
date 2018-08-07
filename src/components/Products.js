import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateCategory } from '../actions/index'

class Products extends Component {
  constructor(props){
    super(props)
    this.state = {
      width: 0,
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize',  this.handleResize.bind(this));
  }


  handleResize() {
    //console.log("I've been resized!");
    let prodSectionWidth = window.innerWidth - 540
    let numOfProducts = this.props.demoData.length
    let totalProdsWidth = numOfProducts * 192
    let extraWidth = prodSectionWidth - totalProdsWidth
    let prodPerRow = Math.floor(prodSectionWidth / 195)
    let width = prodPerRow * 192
    this.setState({width:width})
  }

  render() {
    let prodSectionWidth = window.innerWidth - 540
    let numOfProducts = this.props.demoData.length
    let totalProdsWidth = numOfProducts * 192
    let extraWidth = prodSectionWidth - totalProdsWidth
    let prodPerRow = Math.floor(prodSectionWidth / 195)
    let width = prodPerRow * 192

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

    return (
      <div id='products' className='container-fluid' style={{width: this.state.width}}>
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
