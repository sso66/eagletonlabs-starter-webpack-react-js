// File: src/redux/actions/server/fetch.js
// Date: 9/23/2020
// Note: Command Design Pattern and Participants
// ................................................................................
console.log( "Mounting src/redux/action/server/fetch.js..." );

import { FETCH_NEW_TIME } from '../../constants/action-types';

// "waitress": INVOKER - COMMAND
//........................................
const fetchNewTime = () => ({	    
    type: FETCH_NEW_TIME,
    error,
    payload,
    meta	
});

// eof
