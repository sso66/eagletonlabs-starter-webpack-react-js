// src/containers/Root.jsx
console.log( "Mounting Root.jsx... <Root />" );

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider } from 'react-redux';
import App from './App'

const Root = ({store, actions}) => {
    // The Provider compnent makes the store available to all
    // the container components in our application without 
    // needing for us to pass it in manully every time.
    
    // The Provider component expects a store prop that it
    // expect to be a valid redux store. We also send down
    // the our bound actions to to our child components,
    // so that they can call these actions at any point in
    // the component tree.
    
    // Then, bootstrap our app to call the configureStore
    // function to create the store and fetch the actions
    // in the src/index.js file.
    
    // We don't quite have it to the point where we can
    // share these actions object to our views yet. In
    // order to send down the child component chain, we'll
    // need to update the way that our <BrowserRouter /> 
    // element creates components so that we can add the 
    // actions to it's child element's props.
    return ( 
        <div className="root">
           <Provider store={store}>
                <BrowserRouter>
                    <App actions={actions} />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default Root;

// eof
