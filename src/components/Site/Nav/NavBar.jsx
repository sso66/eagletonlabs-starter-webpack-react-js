// Navbar.jsx
console.info( 'Mounting Navbar.jsx... <Navbar />' );

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     return (
        <nav>
            <Link to='/' className="link"> Home | </Link>
            <Link to='/about' className="link"> About | </Link>
            {/* If we have a logged in user, show the login */}
            {/* currentUser.loggedIn ? 
                <Link to='/logout'> Logout | </Link> : */}
                <Link to='/login'> Login | </Link>
                
            <Link to='/roster'> Roster | </Link>
            <Link to='/schedule'> Schedule | </Link>
            <Link to='/dashboard'> Dashboard | </Link>
            <Link to='/traffic-light'> Traffic Light</Link>
        </nav>
    )
}  
export default Navbar;
  
// eof