// File: src/redux/middleware/thunkMiddleware.js
// Date: 9/14/2020
// Note: chain of responsibility pattern and participant
console.log( "Mounting src/redux/middleware/thunkMiddleware.js...\n");

// ___ the famous 'redux-thunk' middleware is in the essence of the following code ___
const thunkMiddleware = ({ getState, dispatch }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState)
    };

    return next(action);
}

export default thunkMiddleware;


// eof
