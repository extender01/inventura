import React from 'react';
import {connect} from 'react-redux';

import {addItem, clearActive} from '../actions/inventuraActions';
import {barcodeDB} from '../data/barcodeDB';



class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.bcInput = React.createRef();


    }

   

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
                    <input autoComplete='off' ref={this.bcInput} className='input__field' name='input__field' id='input-field' placeholder='ČAROVÝ KÓD' />
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
            setTimeout(() => {dispatch(clearActive())}, 1000)

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);