// index.jsx
console.info('Mounting index.js ... ');

import React from 'react';
import ReactDOM, { render } from 'react-dom';
//import { createStore } from 'redux';
import Root from './containers/Root';
//import { reducer } from './redux/modules/Stoplight/reducer'; 
import configureStore from './redux/configureStore';

import './styles/index.sass';

const {store, actions} = configureStore();

//const store = createStore(reducer); 
//store.subscribe(init);
//const init = function () {  

const init = () => {
    render (
        <Root store={store} actions={actions} />,
        document.getElementById('root')
    );
}

try {
    window.onload = init;
} catch(e) {
    alert("Engleton End" + e.message);
    e.preventDefault();
} finally {
    console.log("Application mounted successfully!");
} 

// eof
