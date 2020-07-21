import React from 'react';
import {connect} from 'react-redux';

import Item from './Item';

const List = (props) => (
    <div className='list'>
       
        <Item catNumber='kat.číslo' name='název' amount='počet' />
        {props.items.map((element, index) => {
            if(props.category === element.category) {
                return <Item key={index} catNumber={element.catNumber} name={element.name} amount={element.amount} alias={element.alias} type={element.type} />
            }
            return undefined
        })}
    
    </div>
)





const mapStateToProps = (state) => {
    return {
        items: state.inventura.items,
        group: state.inventura.group
    }
};

export default connect(mapStateToProps)(List);