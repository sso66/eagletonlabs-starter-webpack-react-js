// Header.jsx
console.log( "Mounting Header.jsx <Header />..." );

import React from 'react';

class Header extends React.Component {
    render() {
        return ( 
            <div className='header'>
                <div className="menuIcon">
                    <div className="dashTop"></div>
                    <div className="dashBottom"></div>
                    <div className="circle"></div>
                </div>
                <span className="">Timeline</span>
                <input type="text" className="searchInput" placeholder="Search ..." />
                <div className="searchIcon"></div>
            </div>
        );
    }
}

export default Header;

// eof