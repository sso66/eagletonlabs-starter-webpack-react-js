// File: src/components/Nav/Navbar.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.info( 'Mounting Navbar.jsx... <Navbar />' );

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ( { store } ) => {
     return (
        <div className="navbar">
            <Link to='/' className="link"> Home </Link>
            <Link to='/mobile-first' className="link"> Mobile First | </Link>
            <Link to='/three-react' className="link"> Three React | </Link>
            <Link to='/three-scene' className="link"> ThreeScene | </Link>
            <Link to='/metadata-page' className="link"> MetadataPage | </Link>
            <Link to='/deadsimpe' className="link"> DeadSimple |</Link>
            <Link to='/svg-responsive' className="link"> SVG Responsive | </Link>
            <Link to='/svg-responsive-nested' className="link"> SVG Responsive Nested | </Link>
            <Link to='/n2kview' className="link"> N2KView</Link>
        </div>
    )
}  
export default Navbar;
  
// eof