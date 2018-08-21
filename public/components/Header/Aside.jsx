// Aside.jsx
console.log( "Mounting Aside.jsx <Aside />...");

import React from 'react';

const aside =
    <div className='aside'>
        <h3>Aside</h3>
        <p>
            The golden rule of knowing what you are doing is to a
            understand why you are doing it.
        </p> 
        <p>
            Don't use a module until you understand 
            the problem it's solving
        </p>
    </div>
;
const Aside= () => {

    return ( aside );

};

export default Aside;