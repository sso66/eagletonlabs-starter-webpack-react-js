// Navbar.jsx
console.info( 'Mounting Navbar.jsx... <Navbar />' );

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
        <nav>
            <Link to='/' className="link"> Home | </Link>
            <Link to='/about' className="active"> About | </Link>
            <Link to='/roster'> Roster | </Link>
            <Link to='/schedule'> Schedule | </Link>
            <Link to='/dashboard'> Dashboard | </Link>
            <Link to='/traffic-light'> Traffic Light</Link>
        </nav>
    )
}  
export default Navbar;
  
// eof