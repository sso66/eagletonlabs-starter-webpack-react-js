// File: src/redux/constants/action-types.js 
// Date: 9/15/2020
// Note: Command Design Pattern and Participants
// ................................................................................
console.log( "Mounting src/redux/constants/actionTypes.js..." );

// "order-slip": COMMAND
//........................................
export default {  
	FETCH_NEW_TIME: 'fetch_new_time',

	WS_CONNECTED: 'ws_connected',
	WS_DISCONNECTED: 'ws_disconnected',
	ACTIVE: 'active'
	
	// STOP: 'stop',
	// CAUTION: 'caution',
	// GO: 'go',

	// LOGIN: 'login',
	// SUCCESSFUL_LOGIN: 'successful_login',
	// LOGOUT: 'logout',

	// API: 'api',
	// SET_RECIPES: 'set_recipes',

	// STORY_ARCHIVE: 'STORY_ARCHIVE',
	// STORIES_FETCH: 'STORIES_FETCH',
	// STORIES_FETCH_ERROR: 'STORIES_FETCH_ERROR',
	// STORIES_ADD: 'STORIES_ADD'
}

// eof
