// File: src/redux/middleware/measureMiddleware.js
// Date: 9/14/2020
// Note: chain of responsibility pattern and participant
console.log( "Mounting src/redux/middleware/measureMiddleware.js...\n");

// ___ to record benchmark with the name provides as a string: console I/O ___
const measureMiddleware = () => next => action => {
    console.time(action.type)
    next(action);
    console.timeEnd(action.type)
}

export default measureMiddleware;

// eof
