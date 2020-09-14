// src/redux/middlewares/logMiddleware.js
// chain of responsibility pattern and participant
console.log( "Mounting src/redux/middlewares/logMiddleware.js...\n" );

const logMiddleware = ({ getState, dispatch }) => next => action => {
    console.log("Before reducers have run")
    next(action);
    console.log("After reducers have run");
}

export default logMiddleware;

// eof
