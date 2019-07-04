// Root.jsx
console.log( "Mounting Root.jsx... <Root />" );

import React from 'react';
import App from './App'
import '../utils/startup';

const Root = () => {
    return ( 
        <div className="root">
            <App />
        </div>
    );
}

export default Root;

// eof
