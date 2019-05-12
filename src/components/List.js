import React from 'react';
import {connect} from 'react-redux';

import Item from './Item';

const List = (props) => (
    <div className='list'>
        {props.items.map((element, index) => {
            return <Item key={index} name={element.name} amount={element.amount} />
        })}
    
    </div>
)





const mapStateToProps = (state) => {
    return {
        items: state.inventura.items
    }
};

export default connect(mapStateToProps)(List);