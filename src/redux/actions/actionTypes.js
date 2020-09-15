// File: src/redux/actions/action-types.js 
// Date: 9/15/2020
// Note: Command Design Pattern and Participants
// ................................................................................
console.log( "Mounting src/redux/actions/actionTypes.js..." );

// "order-slip": COMMAND
//........................................
export default {  
	FETCH_NEW_TIME: 'fetch_new_time',
	
	// STOP: 'stop',
	// CAUTION: 'caution',
	// GO: 'go',

	LOGIN: 'login',
	SUCCESSFUL_LOGIN: 'successful_login',
	// LOGOUT: 'logout',

	API: 'api',
	SET_RECIPES: 'set_recipes',


	WS_CONNECTED: 'ws_connected',
	WS_DISCONNECTED: 'ws_disconnected',
}

// eof