// File: src/redux/reducers/rootReducer.js
// Date: 9/15/2020
// Note: Command Design Pattern and Participants
// ................................................................................
console.log( "Mounting src/redux/reducers/rootReducer.js..." );

// "short-order-cook": RECEIVER: COMMAND
//........................................
// import types from '../constants/action-types';
import types from '../constants/actionTypes';

export const initialState = {
	currentTime: new Date()
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {	
		case types.FETCH_NEW_TIME:
			return {
				state, 
				currentTime: action.payload
			}			
		default:
			return state;
	}
}

export default rootReducer;

// eof