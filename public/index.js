// index.js
console.info('Mounting index.js... <Root />')

import React from "react";
import { render } from "react-dom";

import App from './containers/App';

render(
    <App />, 
    document.getElementById('root')
);

// eof