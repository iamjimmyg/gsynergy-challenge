// import React, { Component } from 'react';
//
// class Category extends Component {
//
//   render() {
//     return (
//       <div className='category justify-content-between'>
//         <div className='info row'>
//           <div className='col-2'>
//             <div className='image'>
//
//             </div>
//           </div>
//
//           <div className='col-8'>
//             Categories > Apparel > Tops
//           </div>
//           <div className='col-2'>
//             hello
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Category;

import React from 'react';
import { DropTarget } from 'react-dnd';
import { PropTypes } from 'prop-types';
import { ITEM } from './itemTypes';

const Category = ({ connectDropTarget, highlighted, category, hovered }) => (
  connectDropTarget(

    <div style={{ backgroundColor: hovered ? 'black' : 'white' }} className='category justify-content-between'>
       <div className='info row'>
         <div className='col-2'>
           <div className='image'>

           </div>
         </div>

         <div className='col-8'>
           Categories > Apparel > Tops
         </div>
         <div className='col-2'>
           hello
         </div>
       </div>
     </div>
  )
);

Category.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
}

const target = {
  drop(props) {
    const { category } = props;
    return ({
      category,
    });
  }
}

const collect = (connect,  monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: monitor.canDrop(),
  hovered: monitor.isOver()
});

export default DropTarget(ITEM, target, collect)(Category);
