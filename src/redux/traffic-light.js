// traffic-light.js
console.log( "Mounting traffic-light.js" );

const Redux = require( 'redux' );

const createStore = Redux.createStore;

const reducer = ( state = "GO", action ) => {
	switch ( action.type ) {
		
		case "GO":
			state = "GO";
			break;
	
		case "STOP":
			state = "STOP";
			break;
			
		case "CAUTION":
			state = "CAUTION";
			break;
			
		default:
			console.log( "Traffic Light is functioning!" );
			break;
	}

	return state;
}

const store = createStore( reducer, "CAUTION" );

const goAction = {
	type: "GO"
};

const cautionAction = {
	type: "CAUTION"
};

const stopAction = {
	type: "STOP"
};

store.dispatch( stopAction );
console.log( "State: " + store.getState() );

store.dispatch( cautionAction );
console.log( "State: " + store.getState() );

store.dispatch( goAction );
console.log( "State: " + store.getState() );

// eof