// src/redux/configStore.js
console.log("Mounting configStore.js ... ");

import { createStore, bindActionCreators } from 'redux';

// Import all the exports in currentTime module to an object 
// called currentTime
//...............................................................
import * as currentTime from './modules/currentTime';

export const configureStore = () => {
	const store = createStore(currentTime.reducer);
	
	const actions = {
	    // binding actionCreator with store dispatch
	    currentTime: bindActionCreators(
	           currentTime.actions,
	           store.dispatch
	    )
	}
	
	return { store, actions };
}

export default configureStore;

// eof