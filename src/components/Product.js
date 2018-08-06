// import React, { Component } from 'react';
//
// class Product extends Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="image">
//
//         </div>
//         <div className="card-body">
//           <div className='row'>
//             <div className='col-8'><p>Product</p></div>
//             <div className='col-4 price'><p>$Price</p></div>
//           </div>
//           <p className='location'>Name and location</p>
//           <p className='text'>Notes about the product, such as what I like and what I am thinking of. Support for three lines of display</p>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Product;

import React from 'react';
import { DragSource } from 'react-dnd';
import { PropTypes } from 'prop-types';
import { ITEM } from './itemTypes';

const Product = ({ color, connectDragSource, isDragging }) => (
  connectDragSource(
    <div className='card'
     style={{
       opacity: isDragging ? 0.25 : 1,
      }}
    >
      <div className="image">

      </div>
      <div className="card-body">
        <div className='row'>
          <div className='col-8'><p>Product</p></div>
          <div className='col-4 price'><p>$Price</p></div>
        </div>
        <p className='location'>Name and location</p>
        <p className='text'>Notes about the product, such as what I like and what I am thinking of. Support for three lines of display</p>
      </div>
    </div>
  )
);

Product.propTypes = {
  color: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}

const source = {
  beginDrag(props) {
    const { category } = props;
    return ({
      category,
    });
  },
  endDrag(props, monitor) {
    if (!monitor.didDrop()) {
      return;
    }
    console.log('DRROOPPPED in ', props)
    // const { onDrop } = props;
    // const { color } = monitor.getItem();
    // const { shape } = monitor.getDropResult();
    // onDrop(color, shape);
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

export default DragSource(ITEM, source, collect)(Product);
