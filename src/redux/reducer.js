// src/redux/reducer.js
console.log( "Mounting reducer.js..." );

// "short-order-cook": RECEIVER
//........................................
import types from './types';

export const initialState = {

	currentTime: new Date()
	
}

export const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
	
		case types.FETCH_NEW_TIME:
			return {
				state, 
				currentTime: action.payload
			}
			
		default:
			return state;
	}
}

export default reducer;

// eof
