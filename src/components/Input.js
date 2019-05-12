import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../actions/inventuraActions';
import {barcodeDB} from '../data/barcodeDB';



class Input extends React.Component {
    

   

    parseBC = (e) => {
                e.preventDefault();
                barcodeDB.some((element) => {
                    // if(element.gtin === e.target[0].value) {
                    if(e.target[0].value.includes(element.gtin)) {
                        this.props.addItem(element.name)
                        return true
                    }
                    // NEJAKA ERROR ACTION
                    return false
                })

    }
    render() {
        return (
            <div className='row'>
                <form onSubmit={this.parseBC} className='col form-group'>
                    <input className='form-control' name='input-field' id='input-field' placeholder='ČAROVÝ KÓD' />
                    <button className='form-text text-muted'>PŘIDAT POLOŽKU</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (newItemArg) => {
            dispatch(addItem(newItemArg))
        }
    }
}

export default connect(undefined, mapDispatchToProps)(Input);