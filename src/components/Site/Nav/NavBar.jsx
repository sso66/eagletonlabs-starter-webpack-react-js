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
        </div>
    )
}  
export default Navbar;
  
// eof