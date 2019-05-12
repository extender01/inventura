import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import inventuraReducer from '../reducers/inventuraReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        inventura: inventuraReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};