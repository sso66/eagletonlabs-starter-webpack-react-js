// File: src/redux/actions/actionCreators.js
// Date: 9/14/2020
// Note: command design pattern and participant
console.log( "Mounting src/redux/actions/actionCreators.js..." );

// "waitress": INVOKER
//........................................
import types from './action-types';

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
}

// eof

