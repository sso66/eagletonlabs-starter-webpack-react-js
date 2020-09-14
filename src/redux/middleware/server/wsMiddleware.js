// File: src/redux/middleware/server/wsMiddleware.js
// Date: 9/14/2020
// Note: chain of responsibility pattern and participant
console.log( "Mounting src/redux/middleware/wsMiddleware.js...\n");

import { WS_ROOT } from '../../constants/global';
import { wsConnected, wsDisconnected } from '../../actions/actionCreators'

const SOCKET_STATES = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
}
const wsMiddleware = ({ dispatch }) => next => {
    // TODO: Initialization - Agenda 1


    return action => {
        // TODO: Middleware code - Agenda 2
        next(action)
    }
};


export default wsMiddleware;

// eof
