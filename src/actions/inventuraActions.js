import {barcodeDB} from '../data/barcodeDB';


export const addItem = (name, catNumber) => {
    return {
        type: 'ADD_ITEM',
        addedName: name,
        addedCatNumber: catNumber
    }
};

export const chooseCategory = (group) => {

    let reduced = barcodeDB.reduce((accumulator, current) => {
        if(current.group === group) {
            accumulator.push({catNumber: current.catNumber, name: current.name, alias: current.alias, type: current.type, category: current.category, amount: 0})
            
        }
        return accumulator
    }, [])
    
    
    return {
        type: 'CHOOSE_CATEGORY',
        group,
        reduced
    }
};

export const changeAmount = (operation, name) => {
    return {
        type: 'CHANGE_AMOUNT',
        operation,
        name
    }
};

//FOR CLEARING ACTIVE CLASS FOR CSS ANIMATION WHEN ITEM IS ADDED
export const clearActive = () => {
    return {
        type: 'CLEAR_ACTIVE'
    }
};



