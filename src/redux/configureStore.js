// src/redux/configureStore.js
console.log( "Mounting configureStore.js..." );

// "diner": STATE
//........................................
import { createStore } from 'redux';
import reducer from './reducer';

export const configureStore = () => {

	const store = createStore( reducer );
	
	return store;
}

export default configureStore;

// eof 
