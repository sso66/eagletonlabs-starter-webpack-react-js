// src/redux/modules/traffic-light.js
console.log( "Mounting traffic-light.js..." );

'use strict';

const Redux = require( "redux" );
const createStore = Redux.createStore;


// 1. Set up reducer: "short-order-cook" for application: "customer" 
const reducer = ( state, action ) => {
	if ( state === undefined) {
		
		state = 'initial State';
	
	} else {
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
	}
	
	return state;
}


// 2. Create application's store: "diner" and set up initial state: "order"
const store = createStore( reducer, 'CAUTION' );


// 3. Set up actions for the application: "customer"
const goAction = {
	type: 'GO'
}

const cautionAction = {
	type: 'CAUTION'
}

const stopAction = {
	type: 'STOP'
}


// 4. Dispatch actions...for application: "customer" 
store.dispatch( stopAction );
console.log( "State - 'order': " + store.getState() );

store.dispatch( cautionAction );
console.log( "State - 'order': " + store.getState() );

store.dispatch( goAction );
console.log( "State - 'order': " + store.getState() );

//eof
