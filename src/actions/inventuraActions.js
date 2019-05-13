import {barcodeDB} from '../data/barcodeDB';


export const addItem = (name, catNumber) => {
    return {
        type: 'ADD_ITEM',
        addedName: name,
        addedCatNumber: catNumber
    }
};

export const chooseCategory = (category) => {

    let reduced = barcodeDB.reduce((accumulator, current) => {
        if(current.category === category) {
            accumulator.push({catNumber: current.catNumber, name: current.name, amount: 0})
            
        }
        return accumulator
    }, [])
    
    
    return {
        type: 'CHOOSE_CATEGORY',
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



