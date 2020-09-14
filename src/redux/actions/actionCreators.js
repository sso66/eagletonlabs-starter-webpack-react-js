// src/redux/actions/actionCreators.js
// command design pattern and participant
console.log( "Mounting src/redux/actions/actionCreators.js..." );

// "waitress": INVOKER
//........................................
import types from './action-types';

export const actionCreators = {   	
	fetchNewTime: () => ({	    
		type: types.FETCH_NEW_TIME,
		payload: new Date()		
	}),

    // login: (user) => ({
    //     type: types.LOGIN,
    //     payload: user
    // }),
    
    // logout: () => ({
    //     type: types.LOGOUT
    // })	
}

// eof

