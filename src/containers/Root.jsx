// Root.jsx
console.log( "Mounting Root.jsx... <Root />" );

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const Root = () => {
    return ( 
        <div className="root">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    );
}

export default Root;

// eof
