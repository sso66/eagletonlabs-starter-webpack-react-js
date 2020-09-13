// src/redux/configureStore.js
console.log( "Mounting src/redux/configureStore.js..." );

// "state": Store
//........................................
import { createStore } from 'redux';
import reducer from './rootReducer';

export const configureStore = () => {
	const store = createStore(reducer);	
	return store;
}

export default configureStore;

// eof 
