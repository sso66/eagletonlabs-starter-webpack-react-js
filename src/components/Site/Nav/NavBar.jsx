// NavBar.jsx
console.info( 'Mounting NavBar.jsx... <NavBar />' );

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
     return (
        <nav>
            <Link 
                to='/'
                className="link"
            >   &nbsp; Home | 
            </Link>
            <Link 
                to='/about'
                className="active"
            >
                &nbsp; About | 
            </Link>
            <Link to='/roster'>&nbsp; Roster | </Link>
            <Link to='/schedule'>&nbsp; Schedule | </Link>
            <Link to='/dashboard'>&nbsp; Dashboard | </Link>
            <Link to='/traffic-light'>&nbsp; Traffic Light</Link>
        </nav>
    )
}  
export default NavBar;
  
// eof