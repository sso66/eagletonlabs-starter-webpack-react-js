// src/redux/actionCreators.js
console.log( "Mounting src/redux/actionCreators.js..." );

// "waitress": INVOKER
//........................................
import types from './actions';

export const actionCreators = {   	
	fetchNewTime: () => ({	    
		type: types.FETCH_NEW_TIME,
		payload: new Date()		
	}),

    // login: (user ) => ({
    //     type: types.LOGIN,
    //     payload: user
    // }),
    
    // logout: () => ({
    //     type: types.LOGOUT
    // })	
}

// eof

