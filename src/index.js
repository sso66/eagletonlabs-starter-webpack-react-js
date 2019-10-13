// File: src/index.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.info( 'Mounting index.js ... ' );

import React from 'react';
import ReactDOM, { render } from 'react-dom';


import Root from './containers/Root';
import configureStore from './redux/configureStore';
import './styles/index.sass';

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
