import React from 'react';
import {connect} from 'react-redux';

import {chooseCategory} from '../actions/inventuraActions';


const Category = (props) => (
    <div className='category'>
        <div className='col'>
            <button className='btn btn-outline-secondary' name='ahoj' onClick={() => {
                props.chooseCategory('architect')
            } }>ARCHITECT</button>

        </div>
        
        <div className='col'>
                <button className='btn btn-outline-secondary' name='ahoj' onClick={() => {props.chooseCategory('radiometer')} }>RADIOMETER</button>
        </div>

        <div className='col'>
            <button className='btn btn-outline-secondary' name='ahoj' onClick={() => {props.chooseCategory('AU')} }>OLYMPUS</button>
        </div>

        <div className='col'>
            <button className='btn btn-outline-secondary' name='ahoj' onClick={() => {props.chooseCategory('mocarna')} }>MOČÁRNA</button>
    </div>


        
    </div>
);


const mapDispatchToProps = (dispatch) => {
    return {
        chooseCategory: (groupArg) => {
            dispatch(chooseCategory(groupArg))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(Category);


// CREATE FUNCTION TO SEND ARRAY ITEM WITH  OBJECTS OF PARTICULAR CATEGORY AND AMOUNTS OF 0