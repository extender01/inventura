import React from 'react';
import {connect} from 'react-redux';

import Item from './Item';
import List from './List';

const Lists = (props) => (
    <div>
        {props.group && ggg[props.group].map((element) => {
            return (
                <React.Fragment>
                    <p>Inventura pro {element}</p>
                    <List category={element} />
                </React.Fragment>

            )
        })
        
        }
    
    </div>
)
           
    
   
    





const mapStateToProps = (state) => {
    return {
        
        group: state.inventura.group
    }
};

export default connect(mapStateToProps)(Lists);

const ggg = {
    architect: ['architect', 'prospec'],
    radiometer: ['radiometer', 'tosoh', 'pathfast'],
    olympus: ['olympus'],
    mocarna: ['mocarna', 'elfo', 'glykemie', 'osmolalita']
};

