// File: src/redux/middleware/loginFlowMiddleware.js
// Date: 9/14/2020
// Note: chain of responsibility pattern and participant
import { SUCCESSFUL_LOGIN } from '../../actions/actionTypes';

console.log( "Mounting src/redux/middleware/loginFlowMiddleware.js...\n");

const loginFlowMiddleware = ({ dispatch }) => next => action => {
    // ___ let the reducer save the access token in the state ___
    next(action);

    if (action.type === SUCCESSFUL_LOGIN) {
        dispatch(fetchUserInfo());
        dispatch(fetchNotifications());
    }
}

export default loginFlowMiddleware;

/*
 * Our new code holds the flow in single place and will allow us to easily support 
 * login via Twitter, Google Apps, and more. Thus, SSO feature is added.
 * 
 * There are a few external libraries that try to make flow management easier, such
 * as 'redux-saga' NPM middleware.
 */

// eof
