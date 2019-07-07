// Root.jsx
console.log( "Mounting Root.jsx... <Root />" );

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import {Provider } from 'react-redux';

import App from './App'

const Root = () => {
    return ( 
        <div className="root">
            <BrowserRouter>
                <App className="root" />
            </BrowserRouter>
        </div>
    );
}
// 
// App.propTypes = {
    // store: PropTypes.object.isRequired
// }

export default Root;

// eof
