// src/redux/actionCreators.js
console.log( "Mounting actionCreators.js..." );

// "waitress": INVOKER
//........................................
import types from './types';

export const actionCreators = {
    	
	fetchNewTime: () => ({	    
		type: types.FETCH_NEW_TIME,
		payload: new Date()		
	}),

    login: ( user ) => n({
        type: types.LOGIN,
        payload: user
    }),
    
    logout: () => ({
        type: types.LOGOUT
    })	
}


// eof
