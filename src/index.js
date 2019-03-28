// index.js
console.info('Mounting index.js... <Root />')

import React from "react";
import { render } from "react-dom";
import App from './components/App';
import './styles/index.sass';

const init = function () { 
    render(
        <App />, 
        document.getElementById('root')
    );
}
window.onload = init;

// eof