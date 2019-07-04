// Index.jsx
console.info('Mounting Index.jsx ... <Index />');

import React from "react";
import { render } from "react-dom";

import Root from './containers/Root';
import './styles/index.sass';

const init = function () {  
    render (
        <Root />, 
        document.getElementById('root')
    );
}
try {
    window.onload = init;
} catch(e) {
    alert("Engleton End");
    e.preventDefault();
} finally {
    console.log("Application mounted successfully!");
} 

// eof
