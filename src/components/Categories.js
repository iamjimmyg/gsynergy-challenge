import React, { Component } from 'react'
import Category from './Category'
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class Categories extends Component {
  render() {
    const allCategories = []
    const noDuplicateCategories = []
    const countCategories = {}
    this.props.demoData.forEach(item => {
      item.categories.forEach(category => {
        allCategories.push(category)
      })
    })
    //add up count for each category
    allCategories.forEach(category => {
      if(countCategories[category])
        countCategories[category] = countCategories[category] + 1
      else
        countCategories[category] = 1
    })
    //remove duplicates to list out components
    for(var k in countCategories){
      noDuplicateCategories.push(k)
    }
    //console.log(countCategories)
    const listCategories = noDuplicateCategories.map((category, i) => {
      return <Category category={category}
        total={countCategories[category]}
        key={category + i}
      />
    })
    return (
      <div id='categories' className=''>
        {listCategories}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    demoData: state.demoData.dummyData
  }
}

export default connect(mapStateToProps)(Categories);
