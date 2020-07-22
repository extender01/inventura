import React from 'react';
import {connect} from 'react-redux';
import {changeAmount, clearActive} from '../actions/inventuraActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => (
   <div className={props.active === props.name ? 'item item__active' : 'item'} >
        <p className='item__cat'>{props.catNumber}</p>
        <p className='item__name'>{props.name}</p>
        <p className='item__alias'>{props.alias}</p>
        <p className='item__type'>{props.type}</p>

        <p className={props.amount > 0 ? 'item__amount item__highlighted' : 'item__amount'}>{props.amount}</p>
        <div className='item__modifiers'>
            <FontAwesomeIcon onClick={() => {props.changeAmount('add', props.name)}} icon={faPlus} size='1x' color='grey' />
            <FontAwesomeIcon onClick={() => {props.changeAmount('subtract', props.name)}} icon={faMinus} size='1x' color='grey' />
            <FontAwesomeIcon onClick={() => {props.changeAmount('reset', props.name)}} icon={faCircleNotch} size='1x' color='grey' />
        </div>
        
   </div>
);

const mapStateToProps = (state) => {
    return {
        active: state.inventura.active
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeAmount: (operationArg, nameArg) => {
            dispatch(changeAmount(operationArg, nameArg));
            // setTimeout(() => {dispatch(clearActive())}, 1000)

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);

