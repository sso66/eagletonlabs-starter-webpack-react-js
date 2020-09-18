// File: src/redux/middleware/server/wsMiddleware.js
// Date: 9/1/2020
// Note: Chain of Responsibility Design Pattern and Participants
// ................................................................................
console.log( "Mounting src/redux/middleware/wsMiddleware.js...\n");

import { actionCreators } from '../../actions/actionCreators'
import { WS_ROOT } from '../../api/story';

console.log("WS_ROOT: " + WS_ROOT);

const SOCKET_STATES = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
}

const wsMiddleware = ({ dispatch }) => next => {
    // TODO: Initialization - Agenda 1
    const websocket = new WebSocket(WS_ROOT)

    Object.assign(websocket, {
        onopen() {
            console.log('onopen()')
            actionCreators.active = true;
            dispatch(actionCreators.wsConnected());
        },

        onclose() {
            console.log('onclose()')
            actionCreators.active = false;
            dispatch(actionCreators.wsDisconnected())
        },

        oneror(error) {
            console.log(`WS Error: ${error.data}`);
        },

        onmessage(event) {
            dispatch(JSON.parse(event.data));
        }
    });

    return action => {
        // TODO: Middleware code - Agenda 2
        if (websocket.readyState === SOCKET_STATES.OPEN &&
            action.meta &&
            action.meta.websocket) {

            //___ remove action metadata before sending ___
            const cleanAction = Object.assign({}, action, {
                meta: undefined
            });
            websocket.send(JSON.stringify(cleanAction));
        }
        
        next(action)
    }
};

export default wsMiddleware;

// eof
