// modules/websocket.js 

// Step 1: Define an action that will be used to establish a websocket connection
// export const wsConnect = host => ({ type: 'WS_CONNECT', host });
// export const wsConnecting = host => ({ type: 'WS_CONNECTING', host });
// export const wsConnected = host => ({ type: 'WS_CONNECTED', host });
// export const wsDisconnect = host => ({ type: 'WS_DISCONNECT', host });
// export const wsDisconnected = host => ({ type: 'WS_DISCONNECTED', host });

// // Step 2: Dispatch your action to open a new websocket connection
// // pages/Game.js
// import React from 'react';
// import { connect } from 'react-redux';
// import { wsConnect, wsDisconnect } from '../modules/websocket';
// import { startRound, leaveGame, makeMove } from '../modules/game';
// import WithAuth from '../hocs/AuthenticationWrapper';

// class Game extends React.Component {
//   componentDidMount() {
//     const { id } = this.props;
//     if (id) {
//       this.connectAndJoin();
//     }
//   }

//   connectAndJoin = () => {
//     const { id, dispatch } = this.props;
//     const host = `ws://127.0.0.1:8000/ws/game/${id}?token=${localStorage.getItem('token')}`;
//     dispatch(wsConnect(host));
//   };


//   render() {
//     // abridged for brevity
//     return `${<span> LOADING </span>}`;
//   }

// }

// const s2p = (state, ownProps) => ({
//   id: ownProps.match && ownProps.match.params.id,
// });

// export default WithAuth(connect(s2p)(Game));


// Step 3: Write the websocket middleware
// middleware/middleware.js 
import * as actions from '../modules/websocket';
import { updateGame, } from '../modules/game';

const socketMiddleware = () => {
  let socket = null;

  const onOpen = store => (event) => {
    console.log('websocket open', event.target.url);
    store.dispatch(actions.wsConnected(event.target.url));
  };

  const onClose = store => () => {
    store.dispatch(actions.wsDisconnected());
  };

  const onMessage = store => (event) => {
    const payload = JSON.parse(event.data);
    console.log('receiving server message');

    switch (payload.type) {
      case 'update_game_players':
        store.dispatch(updateGame(payload.game, payload.current_player));
        break;
      default:
        break;
    }
  };

  // the middleware part of this function
  return store => next => action => {
    switch (action.type) {
      case 'WS_CONNECT':
        if (socket !== null) {
          socket.close();
        }

        // connect to the remote host
        socket = new WebSocket(action.host);

        // websocket handlers
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case 'WS_DISCONNECT':
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        console.log('websocket closed');
        break;
      case 'NEW_MESSAGE':
        console.log('sending a message', action.msg);
        socket.send(JSON.stringify({ command: 'NEW_MESSAGE', message: action.msg }));
        break;
      default:
        console.log('the next action:', action);
        return next(action);
    }
  };
};

export default socketMiddleware();

// Step 4: Create the store with your new middleware
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './modules/reducers';
import wsMiddleware from './middleware/middleware';
import App from './App';

const middleware = [reduxThunk, wsMiddleware];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
const Root = ({ store }) => (
  <Router>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </Router>
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// BONUS: Wrap your entire project in a websocket connection
// index.js abridged example showing just the root
const store = " // where you create your store "
const Root = ({ store }) => (
  <Router>
    <Provider store={store}>
      <WebSocketConnection
        host={`ws://127.0.0.1:8000/ws/game?token=${localStorage.getItem('token')}`}
      >
        <Route path="/" component={App} />
      </WebSocketConnection>
    </Provider>
  </Router>
);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// hocs/WebsocketConnection.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wsConnect } from '../modules/websocket';

class WebSocketConnection extends Component {
  componentDidMount() {
    const { dispatch, host } = this.props;
      dispatch(wsConnect(host))
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default connect()(WebSocketConnection);

// modules/websocket.js 
const websocketInitialState = { connected: false };

export const websocketReducer = (state = { ...websocketInitialState }, action) => {
  switch (action.type) {
    case 'WS_CONNECTED':
      return { ...state, connected: true };
    default:
      return state;
  }
};

// pages/Game.js 
componentDidMount() {
    const { id, connected } = this.props;
    if (connected) {
      this.connectAndJoin();
    }
  }

  connectAndJoin = async () => {
    const { id, dispatch } = this.props;
    await dispatch(joinGame(id));
  };