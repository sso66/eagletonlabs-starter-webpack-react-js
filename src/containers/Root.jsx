// Root.jsx
console.log( "Mounting Root.jsx... <Root />" );

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Provider } from 'react-redux';
import App from './App'

const Root = ({store, actions}) => {
    return ( 
        <div className="root">
            <Provider store={store}>
                <BrowserRouter>
                <   App actions={actions} className="root" />
                </BrowserRouter>
            </Provider>
        </div>
    );
}
// 
// App.propTypes = {
    // store: PropTypes.object.isRequired
// }

export default Root;

// eof
