// src/redux/store/configureStore.js
// state design patterns and participant
console.log( "Mounting src/redux/store/configureStore.js..." );

// "order": Store
//........................................
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/rootReducer';
import logMiddleware from '../middleware/logMiddleware';
import measureMiddleware from '../middleware/measureMiddleware';
import debounceMiddleware from '../middleware/debounceMiddleware';

export const configureStore = () => {
	const store = createStore(reducer, applyMiddleware(logMiddleware, measureMiddleware));	
	return store;
}

export default configureStore;

// eof 
