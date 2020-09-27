// File: src/components/Site/Header/MenuButton.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.log("Mounting MenuButton.jsx... <MenuButton />");

import React from 'react';

// ___ Hamburger Menu
const MenuButton = (props) => (
  <div className="menu menuIcon">
    <div className="dashTop">---</div>
    <div className="dashBottom">--</div>
    <div className="circle">o</div>
  </div>
)

export default MenuButton