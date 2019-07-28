// src/redux/modules/traffic-light.js
console.log( "Mounting traffic-light.js..." );

'use strict';

const Redux = require( "redux" );

const createStore = Redux.createStore;

const reducer = ( state, action ) => {
	if ( state === undefined) {
		state = 'initial State';
	}
	return state;
}

const store = createStore( reducer );

//eof
