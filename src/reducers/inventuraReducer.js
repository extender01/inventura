


const inventuraReducer = (state = {items:[]}, action) => {
    switch(action.type){

        case 'CHOOSE_CATEGORY':
            console.log(action)
            return {...state, active: undefined, group: action.group,  items: action.reduced}

        case 'CHANGE_AMOUNT':
            return {
                ...state,
                active: action.name,
                items:  state.items.map((element) => {
                    if(element.name === action.name) {
                        switch (action.operation) {
                            case 'add':
                                return {...element, amount: element.amount + 1}
                            case 'subtract':
                                if (element.amount > 0) {
                                    return {...element, amount: element.amount - 1}
                                } else return element
                            case 'reset':
                                return {...element, amount: 0}
                            default: return {...element}
     
                        }
                    } else {
                        return {...element}
                    }
                })
            }
        
          
           

        case 'ADD_ITEM':
            // CHECK IF ITEM IS ALREADY IN STORE
            const isAlreadyIn = state.items.some((element) => {
                return element.name === action.addedName
            })
            // IT IS IN STORE -> FIND ITEM AND INCREASE ITS AMOUNT
            if (isAlreadyIn) {
                return {
                    ...state,
                    active: action.addedName,
                     items: state.items.map((element) => {
                         if(element.name === action.addedName) {
                             return {...element, amount: element.amount + 1}
                         } else {
                             return element
                         }
                     })
                }
            // IT IS NOT THERE -> ADD IT TO ARRAY WITH AMOUNT OF 1
            } else {
                return {...state, active: action.addedName, items: [...state.items, {catNumber: action.addedCatNumber, name: action.addedName, amount: 1}]}

            }

        //ACTIVE CLASS WILL BE REMOVED AFTER TIMEOUT (SET IN COMPONENTS)
        case 'CLEAR_ACTIVE':
            return {
                ...state,
                active: undefined
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