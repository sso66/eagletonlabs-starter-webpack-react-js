// src/index.jsx
console.info( 'Mounting index.js ... ' );

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Root from './containers/Root';

import './utils/logger.es6';
import './styles/index.sass';
import './redux/modules/traffic-light';
import configureStore from './redux/configureStore';

const store  = configureStore();
 
const init = () => {
    render (
        <Root store={ store } />,
        document.getElementById( 'root' )
    );
}

try {
    window.onload = init;
} catch(e) {
    alert("Engleton Web Designs" + e.message);
    e.preventDefault();
} finally {
    console.log("Application mounted successfully!");
} 

// eof
