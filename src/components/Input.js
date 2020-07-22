import React from 'react';
import {connect} from 'react-redux';

import {addItem, clearActive, sumTotal} from '../actions/inventuraActions';
import {barcodeDB} from '../data/barcodeDB';



class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.bcInput = React.createRef();

    }

   

    parseBC = (e) => {
                e.preventDefault();
                console.log('tohle je this state items', this.props.items)
                this.props.items.some((element) => {
                    // if(element.gtin === e.target[0].value) {
                    if(e.target[0].value.includes(element.gtin)) {
                        // if(element.group !== this.props.group) {alert(`Položka ${element.name} nepatří do skupiny ${this.props.group} `)}
                        this.props.addItem(element.name, element.catNumber)
                        return true
                    }
                    // NEJAKA ERROR ACTION
                    return false
                })
                e.target[0].value = ''

    }

    sum = (e) => {
        e.preventDefault();
        this.props.sumTotal()
    }

    render() {
        return (
            <div className='input'>
                <form onSubmit={this.parseBC} className='col form-group'>
                    <input autoComplete='off' ref={this.bcInput} className='input__field' name='input__field' id='input-field' placeholder='ČAROVÝ KÓD' />
                    <button className='btn'>PŘIDAT POLOŽKU</button>
                </form>
                <button className='btn' onClick={() => {window.print()}}>TISK</button>
                <button className='btn' onClick={this.sum}>suma</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        group: state.inventura.group,
        items: state.inventura.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (newNameArg, newCatNumberArg) => {
            dispatch(addItem(newNameArg, newCatNumberArg))
            // setTimeout(() => {dispatch(clearActive())}, 1000)

        },
        sumTotal: () => {
            dispatch(sumTotal())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);