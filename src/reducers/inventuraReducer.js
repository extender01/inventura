//PREDELAT ABY DEFAULT STATE MEL SEZNAM VSECH POLOZEK Z VYBRANE SKUPINY S NULAMA A VEDLE AMOUNTU TLACITKA +-

const inventuraReducer = (state = {items:[]}, action) => {
    switch(action.type){

        case 'CHOOSE_CATEGORY':
            console.log(action)
            return {...state, items: action.category }

        case 'CHANGE_AMOUNT':
            return {
                ...state,
                items:  state.items.map((element) => {
                    if(element.name === action.name) {
                        switch (action.operation) {
                            case 'add':
                                return {name: element.name, amount: element.amount + 1}
                            case 'subtract':
                                return {name: element.name, amount: element.amount - 1}
                            case 'reset':
                                return {name: element.name, amount: 0}
                            default: return {name: element.name, amount: element.amount}
     
                        }
                    } else {
                        return {name: element.name, amount: element.amount}
                    }
                })
            }
        
          
           

        case 'ADD_ITEM':
            // CHECK IF ITEM IS ALREADY IN STORE
            const isAlreadyIn = state.items.some((element) => {
                return element.name === action.addedItem
            })
            // IT IS IN STORE -> FIND ITEM AND INCREASE ITS AMOUNT
            if (isAlreadyIn) {
                return {
                    ...state,
                     items: state.items.map((element) => {
                         if(element.name === action.addedItem) {
                             return {name: element.name, amount: element.amount + 1}
                         } else {
                             return element
                         }
                     })
                }
            // IT IS NOT THERE -> ADD IT TO ARRAY WITH AMOUNT OF 1
            } else {
                return {...state, items: [...state.items, {name: action.addedItem, amount: 1}]}

            }


        default:
            return state;
    }
};

export default inventuraReducer;

// const ifAlreadyIn = (arr, stuffInState, stuffInAction) => {
//     arr.some((element) => {
//         return stuffInState === stuffInAction
//     });
// };