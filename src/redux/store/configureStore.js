// File: src/redux/store/configureStore.js
// Date: 9/15/2020
// Note: State Design Pattern and Participants
// ................................................................................
console.log( "Mounting src/redux/store/configureStore.js..." );

// "store": STATE
//........................................
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/rootReducer';

import logMiddleware from '../middleware/client/logMiddleware';
import measureMiddleware from '../middleware/client/measureMiddleware';
import debounceMiddleware from '../middleware/client/debounceMiddleware';
import thunkMiddleware from '../middleware/client/thunkMiddleware';
import nullMiddlewareCreator from '../middleware/client/nullMiddlewareCreator';

import loginFlowMiddleware from '../middleware/server/loginFlowMiddleware';
import apiMiddleware from '../middleware/server/apiMiddleware';
import wsMiddleware from '../middleware/server/wsMiddleware';

export const configureStore = () => {
	// const store = createStore(reducer);
	const store = createStore(reducer, applyMiddleware(logMiddleware));	
	// const store = createStore(reducer, applyMiddleware(nullMiddlewareCreator('OH_NO')))
	// const store = createStore(reducer, applyMiddleware(logMiddleware, measureMiddleware));
	// const store = createStore(reducer, applyMiddleware(wsMiddleware)); 
	
	return store;
}

export default configureStore;

// eof 
