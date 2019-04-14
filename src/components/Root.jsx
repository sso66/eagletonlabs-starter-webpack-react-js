// Root.jsx
console.log( "Mounting Root.jsx..." );

import React from 'react';
//import App from './App'
import App from './OA-App'

// Utility Modules
import '../utils/logger.es6';
import '../utils/startup';

const Root = () => {
    return ( 
        <div className="app">
            <App />
        </div>
    );
}

export default Root;

// eof