// File: src/redux/middleware/nullMiddlewareCreator.js
// Date: 9/14/2020
// Note: chain of responsibility pattern and participant
console.log( "Mounting src/redux/middleware/nullMiddlewareCreator.js...\n");

// ___ parameter-based middleware ___
const nullMiddlewareCreator = param => store => next => action => {
    next(action !== null ? action : { type: param || 'UNKNOWN'});
}

export default nullMiddlewareCreator;

/* 
 * Instead of returnin the middleware directly, we return a fuction that
 * creates a middleware with custom parameters passed in.
 * 
 * This behavior can be futher extended and allow for creation of complex
 * middleware as libraries that can easily customized when add to the store.
 */


// eof
