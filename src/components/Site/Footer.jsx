// Footer.jsx
console.log( "Mounting Footer.jsx <Footer />..." );

import React from 'react';

const Footer = () => {

    return ( 
        <footer className="footer">
            <h3 className="nimated infinite bounce delay-3s  title is-3">The End</h3>
            <p className="nimated infinite bounce delay-2s">
                The golden rule of knowing what you are doing is to 
                understand why you are doing it.
            </p> 
            <p className="animated infinite bounce delay-1s">
                Don't use a module until you understand 
                the problem it's solving.
            </p>
        </footer>
    )
};

export default Footer;

// eof
