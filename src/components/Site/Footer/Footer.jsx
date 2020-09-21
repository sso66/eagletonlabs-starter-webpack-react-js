// File: Site/Footer/Footer.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.log( "Mounting Footer.jsx <Footer />..." );

import React from 'react';

const Footer = () => {
    return ( 
        <div className="footer">
            <h3>End of My Story: Lessons Learned!</h3>
            <span>Footer</span>
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

export default Footer;

// eof
