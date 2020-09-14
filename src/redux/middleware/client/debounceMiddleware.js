// File: src/redux/middleware/debounceMiddleware.js
// Date: 9/14/2020
console.log( "Mounting src/redux/middleware/debounceMiddleware.js...\n");

// __ object to hold debounced actions (reference by action.type)
const pending = {};

// ___ to prevent the AUTO_COMPLETE action from running as the user types in a search term ___
const debounceMiddleware = () => next => action => {
    const { debounce } = action.meta || {};

    if (!debounce) {
        return next(action);
    }

    // ___ handle debouncing ___
    if (pending[action.type]) {
        clearTimeout(pending[action.type])
    }

    // ___ save latest action object ___
    pending[action.type] = setTimeout(
        /* implement debounce */
        () => {
            delete pending[action.type];
            next(action);
        },
        debounce
    );
}

// setTimeout(
//     () => {
//         delete pending[action.type];
//         next(action);
//     },
//     debounce
// );
export default debounceMiddleware;

// eof
