// File: src/components/Site/Nav/Navigation.jsx
// Desc: Mobile First RWD-SPA
// Date: 9/14/2019
//..............................................................................
console.info('Mounting Navbar.jsx... <Navbar />')

import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ store }) => {
  return (
    <div className='nav'>
      <Link to='/' className='link'>
        Home |{' '}
      </Link>
      <Link to='/about' className='link'>
        About |{' '}
      </Link>
      <Link to='/product' className='link'>
        Product |{' '}
      </Link>
      <Link to='/contact' className='link'>
        Contact
      </Link>
    </div>
  )
}

export default Navigation

// eof
