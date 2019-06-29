// Notification.jsx
console.log( 'Mounting Notification.jsx... <Notification />' );

import React from 'react';
import './wireframe.sass';

// Pure Function Comppnent: The simplest one
const Notification = (props) => {
    
    const {level, message} = props;   
 
    return (
        <div className="alert alert-3">
            {message} {level}
        </div>
    );
}

export default Notification;

// eof
