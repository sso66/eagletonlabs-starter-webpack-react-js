// src/redux/modules/traffic-light.js
console.log( "Mounting traffic-light.js..." );

//'use strict';

// Requiring Redux and creating Redux store.
// Every Redux application has exactly one store, and each store 
// has exactly one reducer. 
// 
// The application state - In this case, a string whose value is 
// either GO, STOP or CAUTION - is created by the reducer function.
// The reducer function returns a new state given the current state
// and an action that describes the state changes.
//....................................................................

const Redux = require( "redux" );
const createStore = Redux.createStore;


// 1. Set up reducer: "short-order-cook" for application: "customer" 
//const reducer = ( state, action ) => {
const reducer = ( state = 'GO', action ) => {
//	if ( state === undefined) {
//			
//		state = 'initial State';
//	
//	} else {
		switch ( action.type ) {
		
			case 'GO':
				state = 'go state'
				break;
			
			case 'CAUTION':
				state = 'caution state'
				break;
				
			case 'STOP':
				state = 'stop state'
				break;
				
			default: 
				state = 'initial state'
				break;
				
		}
//	}
	
	return state;
}


// 2. Create application's store: "diner" and set up initial state: "order"
const store = createStore( reducer, 'CAUTION' );


// 3. Set up actions: "order-slips" for application: "customer"
const goAction = {
	type: 'GO'
}

const cautionAction = {
	type: 'CAUTION'
}

const stopAction = {
	type: 'STOP'
}


// 4. Dispatch actions: "order-slips"...for the store: "diner" 
store.dispatch( stopAction );
console.log( "State - 'order': " + store.getState() );

store.dispatch( cautionAction );
console.log( "State - 'order': " + store.getState() );

store.dispatch( goAction );
console.log( "State - 'order': " + store.getState() );

//....................................................................
// Redux data flow:
// When you dispatch an action by using the Redux store.dispatch()
// function, Redux passes the action: "order-slips",in addition to 
// the current state: "order" to the applications's reducer: 
// "short-order-cook". The reducer: "short-order-cook" creates a new
// state: "order" and return it to Redux. The Redux notifies view
// components: "customers" about state: "order" changes through
// framework-specific bindings.
//
// The Redux API
// The Redux overall API is simple, consisting of only five top-level
// functions:
// 
// 1. Object createStore(reducer, initialState) - Create the store.
//
// 2. Object combineReducers(reducers) - Combine several reducers to 
// one.
//
// 3. Object compose(...functions) - Compose functions, left to right
//
// 4. void applyMiddleware(...middlewares) - Apply middleware.
//
// 5. Object bindActionCreators(actionCreators, dispatch) - Bind 
// several action creators to the dispatch function. 

//eof
