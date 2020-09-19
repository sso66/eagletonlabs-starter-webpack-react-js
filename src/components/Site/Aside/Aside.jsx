// File: Site/Aside/Aside.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.log( "Mounting Aside.jsx <Aside />..." );

import React from 'react';

const Aside = () => {
    return ( 
        <div className="aside">

            <h3>End of My Story: Lessons Learned!</h3>            
            <span>Aside</span>
            <p>
                The golden rule of knowing what (PURPOSE) you are doing is to 
                understand why (REASON) you are doing it.
            </p> 
            <p>
                Don't use a module until you understand 
                the problem it's solving.
            </p>
        </div>
    )
}

export default Aside;