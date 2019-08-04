// src/redux/configureStore.js
console.log( "Mounting configureStore.js..." );

// "order": STATE
//........................................
import { createStore } from 'redux';
import reducer from './rootReducer';
//import reducer from './TrafficLight/reducer';

export const configureStore = () => {

	const store = createStore( reducer );
	
	return store;
}

export default configureStore;

// eof 
