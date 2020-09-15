// File: src/redux/middleware/logMiddleware.js
// Date: 9/15/2020
// Note: Chain of Responsibility Design Pattern and Participants
// ................................................................................
console.log( "Mounting src/redux/middleware/logMiddleware.js...\n");

// "store manager": CHAIN-OF-RESPONSIBILITY
//-------------------------------------------------------------------
// ___ to sample log middleware for understanding next() function ___
const logMiddleware = ({ getState, dispatch }) => next => action => {
    console.log("--> Before reducers have run")
    console.log("<-- Take next(action)")
    next(action);
    console.log("--> After reducers have run");
}

export default logMiddleware;

// eof
