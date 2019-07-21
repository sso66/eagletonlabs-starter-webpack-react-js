// src/redux/modules/currentLight.js
console.log("Mounting currentLight.js ... ");

export const types = {
    STOP: 'STOP',
}

// Set the intial state for the first time the reducer is 
// called (which redux expects us to return an initial state. 
//..............................................................
const initialState = {
	currentLight: new Date(),
}

// The reducer function receive two arguments when it's called:
// 1. The state tree
// 2. The action which trigger a change
//...............................................................
export const reducer = (state = initialState, actions) => {
	return state;
}

// Actions are POJOs - Object literal - that must have a type
// property to the type of action that is being performed. The 
// type property should be a string.
//...............................................................
export const actions = {
    
    // An action creater is a Function that is expected 
    // to return an action (type and payload, as well as 
    // meta data - if any).
	updateTime: () => ({ 
		type: types.STOP
	}),
}

// eof
