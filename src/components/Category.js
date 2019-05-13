import React from 'react';
import {connect} from 'react-redux';

import {chooseCategory} from '../actions/inventuraActions';
import {architect} from '../data/barcodeDB';


const Category = (props) => (
    <div className='category'>
        <div className='col'>
            <button className='btn btn-outline-secondary' name='ahoj' onClick={() => {props.chooseCategory('architect')} }>ARCHITECT</button>

        </div>
        
        <div className='col'>
                <button className='btn btn-outline-secondary' name='ahoj' onClick={() => {props.chooseCategory('radiometer')} }>RADIOMETER</button>
        </div>

        <div className='col'>
            <button className='btn btn-outline-secondary' name='ahoj' onClick={() => {props.chooseCategory('architect')} }>OLYMPUS</button>
        </div>

        
    </div>
);


const mapDispatchToProps = (dispatch) => {
    return {
        chooseCategory: (categoryArg) => {
            dispatch(chooseCategory(categoryArg))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(Category);


// CREATE FUNCTION TO SEND ARRAY ITEM WITH  OBJECTS OF PARTICULAR CATEGORY AND AMOUNTS OF 0