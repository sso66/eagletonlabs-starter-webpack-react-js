// File: src/redux/middleware/server/apiMiddleware.js
// Date: 9/14/2020
// Note: chain of responsibility pattern and participant
console.log( "Mounting src/redux/middleware/apiMiddleware.js...\n");

const apiMiddleware = ({ dispatch }) => next => action => {
    if (action.type !== 'API') {
        return next(action);
    }

    // ___ handle API code ___
    const { payload } = action;

    fetch(BASE_URL + action.url)
        .then(response => response.json())
        .then(response => dispatch({ type: payload.success, response }))
}
// eof

