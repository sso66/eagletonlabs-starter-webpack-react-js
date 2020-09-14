// src/redux/store/configureStore.js
// state design patterns and participant
console.log( "Mounting src/redux/store/configureStore.js..." );

// "store": STATE
//........................................
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/rootReducer';
import logMiddleware from '../middleware/logMiddleware';
import measureMiddleware from '../middleware/measureMiddleware';
import debounceMiddleware from '../middleware/debounceMiddleware';
import loginFlowMiddleware from '../middleware/loginFlowMiddleware';
import thunkMiddleware from '../middleware/thunkMiddleware';
import nullMiddlewareCreator from '../middleware/nullMiddlewareCreator';

export const configureStore = () => {
	// const store = createStore(reducer);
	// const store = createStore(reducer, applyMiddleware(logMiddleware));	
	const store = createStore(reducer, applyMiddleware(nullMiddlewareCreator('OH_NO')))

	// const store = createStore(reducer, applyMiddleware(logMiddleware, measureMiddleware));

	
	return store;
}

export default configureStore;

// eof 
