import React from 'react';
import {connect} from 'react-redux';
import {changeAmount} from '../actions/inventuraActions';

const Item = (props) => (
   <div className='item'>
    <p>{props.name}</p>
    <p>{props.amount}</p>
    <div>
        <p onClick={() => {props.changeAmount('add', props.name)}}>+</p> 
        <p onClick={() => {props.changeAmount('subtract', props.name)}}>-</p>
        <p onClick={() => {props.changeAmount('reset', props.name)}} >reset</p>
    </div>
    
   </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
        changeAmount: (operationArg, nameArg) => {
            dispatch(changeAmount(operationArg, nameArg))
        }
    }
}

export default connect(undefined, mapDispatchToProps)(Item);