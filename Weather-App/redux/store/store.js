import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import clothReducer from '../reducers/reducers';

// Combines all created reducers into one place, adding all functions inside the reducer, in this case only clothReducer
const rootReducer = combineReducers({ clothReducer });

// applyMiddleware extends store's abilities and write asynchronous logic that interacts with store 
export const Store  = createStore(rootReducer, applyMiddleware(thunk));