// buttons.js
// < UIViewDelegate >
console.log( "Mounting buttons.js" );

import React, { Component } from 'react';
import Redux, { createStore } from 'redux';

import { reducer } from './reducer'; 

import { goAction, cautionAction, stopAction } from './actions';


export const Buttons = ({
    store
}) => {
	store = createStore(reducer);
	const state = store.getState();
   
    return (
        <div style={{textAlign: 'center'}}>
 			<button	
 				onClick={() => {store.dispatch(stopAction);  alert("Stop")}}
           		//disabled={state == "STOP" || state == "GO"}
           		style={{cursor: "pointer"}}
           	>
				Stop
 			</button>		
 			
 			<button		
 				onClick={() => {store.dispatch(cautionAction);  alert("Caution")}}
           		//disabled={state == "CAUTION" || state == "STOP"}
           		style={{cursor: "pointer"}}
           	>
 				Caution
 			</button>	
        
			<button 
				onClick={() => {store.dispatch(goAction); alert("Go")}}
           		//disabled={state == "GO" || state == "CAUTION"}
           		style={{cursor: "pointer"}}
           	>
 				Go
 			</button>							
        </div>
   ) 
}