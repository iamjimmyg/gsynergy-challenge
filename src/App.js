import React, { Component } from 'react'
import Nav from './components/Nav'
import Products from './components/Products'
import Categories from './components/Categories'

class App extends Component {
  render() {
    return (
      <main >
        <Nav />
        <div className='container-fluid main-section'>
          <div className='row'>
            <div className='col-9'>
              <Products/>
            </div>
            <div className='col categories'>
              <Categories />
            </div>
          </div>


        </div>
      </main>
    );
  }
}

export default App;
