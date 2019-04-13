// index.js
console.info('Mounting index.js... <Index />')

import React from "react";
import { render } from "react-dom";
import Root from './components/Root';
import './styles/index.sass';

const init = function () {  
    render (
        <Root />, 
        document.getElementById('root')
    );
}
window.onload = init;

// eof