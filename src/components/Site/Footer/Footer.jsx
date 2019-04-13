// Footer.jsx
console.log( "Mounting Footer.jsx <Footer />..." );

import React from 'react';

const Footer = () => {
    return ( 
        <footer className="footer">
            <h3 className="title is-6 nimated infinite bounce delay-3s">The End: Lessons Learned!</h3>
            <p>
                The golden rule of knowing what you are doing is to 
                understand why you are doing it.
            </p> 
            <p>
                Don't use a module until you understand 
                the problem it's solving.
            </p>
        </footer>
    )
}

export default Footer;

// eof
