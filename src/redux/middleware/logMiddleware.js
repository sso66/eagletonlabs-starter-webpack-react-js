// File: src/redux/middleware/logMiddleware.js
// Date: 9/14/2020
// Note: chain of responsibility pattern and participant
console.log( "Mounting src/redux/middleware/logMiddleware.js...\n" );

// ___ understanding next() function ___
const logMiddleware = ({ getState, dispatch }) => next => action => {
    console.log("--> Before reducers have run")
    next(action);
    console.log("--> After reducers have run");
}

export default logMiddleware;

// eof
