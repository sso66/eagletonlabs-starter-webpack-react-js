// File: src/redux/middleware/debounceMiddleware.js
// Date: 9/14/2020
// Note: chain of responsibility pattern and participant
console.log( "Mounting src/redux/middleware/debounceMiddleware.js...\n" );

// ___ to prevent the AUTO_COMPLETE action from running as the user types in a search term ___
const debounceMiddleware = () => next => action => {
    const { debounce } = action.meta || {};

    if (!debounce) {
        return next(action);
    }

    // TODO: Handle debouncing
}

export default debounceMiddleware;

// eof
