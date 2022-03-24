import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import clothReducer from '../reducers/reducers';

const rootReducer = combineReducers({ clothReducer }); // clothReducer: function accepting 2 arguments: initial and action

export const Store  = createStore(rootReducer, applyMiddleware(thunk));


// Created redux store, passed reducer to this store
// Holds all data app will handle