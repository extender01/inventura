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
                        if(element.group !== this.props.group) {alert(`Položka ${element.name} nepatří do skupiny ${this.props.group} `)}
                        this.props.addItem(element.name, element.catNumber)
                        return true
                    }
                    // NEJAKA ERROR ACTION
                    return false
                })
                e.target[0].value = ''

    }
    render() {
        return (
            <div className='input'>
                <form onSubmit={this.parseBC} className='col form-group'>
                    <input className='input__field' name='input__field' id='input-field' placeholder='ČAROVÝ KÓD' />
                    <button className='btn'>PŘIDAT POLOŽKU</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        group: state.inventura.group
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (newNameArg, newCatNumberArg) => {
            dispatch(addItem(newNameArg, newCatNumberArg))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);