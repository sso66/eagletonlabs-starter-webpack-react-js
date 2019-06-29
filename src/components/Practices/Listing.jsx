// Listing.jsx
console.log( "Mounting Listing.jsx..." );

import React from 'react';

const Listing = (props) => {
    return (
        <div className="Listing">
            <h2>Listing for {props.name}</h2>
            <ul>
                <li>Instragram</li>
                <li>What's App</li>
                <li>Oculus</li>
            </ul>
             <ol>
                <li>Instragram</li>
                <li>What's App</li>
                <li>Oculus</li>
            </ol>
            <dl>
              <dt>Coffee</dt>
              <dd>Black hot drink</dd>
              <dt>Milk</dt>
              <dd>White cold drink</dd>
            </dl>        
        </div>
    )
}

export default Listing;

// eof 