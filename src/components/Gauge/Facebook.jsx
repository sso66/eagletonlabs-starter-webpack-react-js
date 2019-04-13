// Facebook.jsx
console.log( "Mounting Facebook.jsx..." );

import React from 'react';

const Facebook = (props) => {
    return (
        <div className="facebook">
            <h2>List for {props.name}</h2>
            <ul>
                <li>Instragram</li>
                <li>What's App</li>
                <li>Oculus</li>
            </ul>
        </div>
    )
}
export default Facebook;
// eof 