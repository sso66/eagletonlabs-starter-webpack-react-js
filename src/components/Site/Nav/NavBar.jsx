// src/components/Nav/Navbar.jsx
console.info( 'Mounting Navbar.jsx... <Navbar />' );

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ( { store } ) => {
     return (
        <nav>
            <Link to='/' className="link"> Home | </Link>
            <Link to='/about' className="link"> About | </Link>
            <Link to='/Contact'> Contact | </Link>  
            <Link to='/Admin'> Admin | </Link>  
            <Link to='/schedule'> Schedule | </Link>            
            <Link to='/roster'> Roster | </Link>
            <Link to='/dashboard'> Dashboard | </Link>  
        </nav>
    )
}  
export default Navbar;
  
// eof