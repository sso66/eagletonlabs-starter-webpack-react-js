// File: src/redux/actions/actionCreators.js
// Date: 9/15/2020
// Note: Command Design Pattern and Participants
// ................................................................................
console.log( "Mounting src/redux/actions/actionCreators.js..." );

import types from '../constants/actionTypes';

const handleError = error => dispatch(apiError(error));

// "waitress": INVOKER - COMMAND
//........................................
export const actionCreators = {   	
	fetchNewTime: () => ({	    
		type: types.FETCH_NEW_TIME,
		payload: new Date()		
	}),

    login: (email, password) => ({
        type: types.LOGIN,
        payload: {
            email: email, // 'info@redux-book.com',
            password: password, // 'will-never-tell'
        }
    }),
    
    loginSuccess: (accessToken) => ({
        type: types.SUCCESSFUL_LOGIN,
        payload: accessToken // 'success_token'
    }),

    // logout: () => ({
    //     type: types.LOGOUT
    // })	

    fetchRecipes: () => ({
        type: types.API,
        payload: {
            url:'recipes.json',
            success: SET_RECIPES
        }
    }),

    wsConnected: () => ({ type: types.WS_CONNECTED, active: null }),
    wsDisconnected: () => ({ type: types.WS_DISCONNECTED, active: null })
}

// eof
