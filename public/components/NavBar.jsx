import React, { Component } from 'react';

const css = {
  block: { 
    fontSize: '2.5em', 
    color: 'rgba(255, 255, 225, 0.85)', 
    border: '3px double #666', 
    backgroundColor: 'violet',
    textAlign: 'right'
   },
   inline: { 
    fontSize: '5em', 
    color: 'rgba(255, 255, 225, 0.85)', 
    border: '3px double #666', 
    //backgroundColor: 'teal',
    textAlign: 'center',
    background: 'radial-gradient(red, teal)'
   },
 };
 
const navbar = 
<div>
  <h3 style={{border:'1px solid white', backgroundColor: 'pink'}}>NavBar</h3>
  <span style={css.inline}>React Component inline element</span>
  <div style={css.block}>
    React Commponent in block element
  </div>

</div>;   

class NavBar extends Component {
  render() {   
     return navbar;
    //return (<div><div>React Commponent</div></div>); // hard-coded
  }
}
export default NavBar;
// eof 