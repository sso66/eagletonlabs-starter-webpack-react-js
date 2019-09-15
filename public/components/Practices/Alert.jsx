// Alert.jsx
console.log( 'Mounting Alert.jsx... <Alert />' );

import React from 'react';
import './alert.sass';

// Pure Function Comppnent: The simplest one
const Alert = (props) => {
    
    const {level, message} = props;   
 
    return (
        <div className="alert alert-3">
            Alert: {message} Level: {level}
        </div>
    );
}

export default Alert;

// eof
