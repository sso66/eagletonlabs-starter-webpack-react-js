// index.jsx
console.info('Mounting index.js ... ');

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './utils/logger.es6';
import './redux/traffic-light';
import Root from './containers/Root';
import configureStore from './redux/configureStore';
import './styles/index.sass';

const {store, actions} = configureStore();
   
const init = () => {
    render (
        <Root store={store} actions={actions} />,
        document.getElementById('root')
    );
}

store.subscribe(init);

try {
    window.onload = init;
} catch(e) {
    alert("Engleton Web Designs" + e.message);
    e.preventDefault();
} finally {
    console.log("Application mounted successfully!");
} 

// eof
