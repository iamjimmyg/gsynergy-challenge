import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';
import { PropTypes } from 'prop-types';
import { ITEM } from './itemTypes';


class Category extends Component{
  render(){
    return (
      this.props.connectDropTarget(
        <div
          style={{ backgroundColor: this.props.hovered ? '#ededed' : 'white' }}
          className='category justify-content-between'>
           <div className='info row'>
             <div className='col-2'>
               <div className='image'>

               </div>
             </div>

             <div className='col-8'>
               Categories > {this.props.category}
             </div>
             <div className='col-2'>
               <div className='category-total'>
                 {this.props.total}
               </div>
             </div>
           </div>
         </div>
      )
    )

  }
}

Category.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
}

const target = {
  drop(props) {
    const { category, total } = props;
    return ({
      category,
      total
    });
  }
}

const collect = (connect,  monitor) => ({
  connectDropTarget: connect.dropTarget(),
  highlighted: monitor.canDrop(),
  hovered: monitor.isOver()
});

export default DropTarget(ITEM, target, collect)(Category);
