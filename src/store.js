import { createStore, combineReducers } from 'redux';
import Reducer from './reducer.js';
import { reducer as formReducer } from 'redux-form';

const reducers = {
	todoApp: Reducer,
	form: formReducer
};

const store = createStore(combineReducers(reducers));

export default store;
