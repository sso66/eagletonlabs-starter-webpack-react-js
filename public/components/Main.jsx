// Main.jsx 
console.log( "Mounting Main.jsx... <Main />" );

import React from 'react';

const main =
    <div className='main'>
        <h2>Main</h2>
        <p>
            The golden rule of knowing what you are doing is to 
            understand why you are doing it.
        </p> 
        <p>
            Don't use a module until you understand 
            the problem it's solving
        </p>
    </div>
;

const Main = () => {

    return ( main );

};

export default Main;

