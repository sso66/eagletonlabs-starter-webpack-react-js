// index.jsx
console.info('Mounting index.js ... ');

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './utils/logger.es6';
import Root from './containers/Root';
import './styles/index.sass';

  
const init = () => {
    render (
        <Root />,
        document.getElementById('root')
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
