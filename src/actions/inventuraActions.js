


export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        addedItem: item
    }
};

export const chooseCategory = (category) => {
    return {
        type: 'CHOOSE_CATEGORY',
        category
    }
};

export const changeAmount = (operation, name) => {
    return {
        type: 'CHANGE_AMOUNT',
        operation,
        name
    }
};



