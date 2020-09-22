// src/redux/configureStore.js
console.log( "Mounting TrafficLight/configureStore.js..." );

// "order": STATE
//........................................
import { createStore } from 'redux';
import reducer from './reducer';

export const configureStore = () => {
	const store = createStore( reducer );
	
	return store;
}

export default configureStore;

// eof 
