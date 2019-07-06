// redux/stoplight.jsx
// < UIViewDelegate >
console.info( 'Mounting stoplight.jsx...' );

import React, { Component } from 'react';
import Redux, { createStore } from 'redux';

import { reducer } from '../redux/reducer'; 
import { stopAction, cautionAction, goAction } from './actions';

const stopColor = (state) => {
    return state == "STOP" ? "red" : "white";
}

const cautionColor = (state) => {
    return state == "CAUTION" ? "#ff0" : "white";
}

const goColor = (state) => {
    return state == "GO" ? "rgb(39, 323, 51)" : "white";   
}

export const Stoplight = ({
    store
}) => {
	store = createStore(reducer);
	const state = store.getState();
   	
    return (
        <div style={{textAlign: 'center'}}>
            <svg height="170">
                <circle
                    cx="145" cy="60" r="15"
                    //fill="red"
                    fill={stopColor(state)}
                    stroke="black"
                />
                <circle
                    cx="145" cy="100" r="15"
                    //fill="yellow"
                    fill={cautionColor(state)}
                    stroke="black"
                />
                <circle
                    cx="145" cy="140" r="15"
                    //fill="green"
                    fill={goColor(state)}
                    stroke="black"
                />
            </svg> 
       </div>
   ) 
}

// eof
