// index.jsx
console.info('Mounting index.js ... ');

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Redux, { createStore } from 'redux';

import Root from './containers/Root';
import { reducer } from './redux/modules/Stoplight/reducer'; 
import './styles/index.sass';

const store = createStore(reducer); 

//const init = function () {  
const init = () => {
    render (
        <Root />,
        document.getElementById('root')
    );
}

//store.subscribe(init);

try {
    window.onload = init;
} catch(e) {
    alert("Engleton End" + e.message);
    e.preventDefault();
} finally {
    console.log("Application mounted successfully!");
} 

// eof
