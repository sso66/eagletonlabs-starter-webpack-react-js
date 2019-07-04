// NavBar.jsx
console.info( 'Mounting NavBar.jsx... <NavBar />' );

import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
     return (
        <nav>
            <Link to='/'>Home | </Link>
            <Link to='/roster'>Roster | </Link>
            <Link to='/schedule'>Schedule | </Link>
            <Link to='/dashboard'>Dashboard</Link>
        </nav>
    )
}  
export default NavBar;
  
// eof